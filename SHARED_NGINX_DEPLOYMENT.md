# Deploying Projects with Shared Nginx

This guide explains how to deploy additional projects to the same EC2 instance, sharing the nginx reverse proxy that's already running.

## Prerequisites

- Shared nginx is already running (started by the first project)
- Docker network `shared_proxy_network` exists
- You have access to the EC2 instance

## Quick Setup Checklist

1. [ ] Create `docker-compose.shared.yml` for your app
2. [ ] Create `nginx/conf.d/{project}.conf` for nginx config
3. [ ] Create `.github/workflows/deploy.yml`
4. [ ] Set GitHub repository secrets and variables
5. [ ] Push and deploy

---

## Step 1: Create docker-compose.shared.yml

Create this file in your project root:

```yaml
# {project-name}/docker-compose.shared.yml

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: {project_name}_app          # Unique container name
    restart: unless-stopped
    networks:
      - shared_proxy_network
    # Add your volumes, environment variables, etc.
    # Example:
    # volumes:
    #   - app_data:/app/data
    # environment:
    #   - DATABASE_URL=${DATABASE_URL}
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:{PORT}/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s

  # Optional: Add certbot for SSL management
  certbot:
    image: certbot/certbot
    container_name: {project_name}_certbot
    volumes:
      - /home/ubuntu/ubuntu-docker-logs-finder/certbot/www:/var/www/certbot
      - /home/ubuntu/ubuntu-docker-logs-finder/certbot/conf:/etc/letsencrypt
    entrypoint: "/bin/sh -c 'trap exit TERM; while :; do certbot renew; sleep 12h & wait $${!}; done;'"
    networks:
      - shared_proxy_network

networks:
  shared_proxy_network:
    external: true

# volumes:
#   app_data:
```

**Important:**
- Use unique container names (e.g., `myproject_app`, not just `app`)
- Your app must be accessible on a specific port (e.g., 5000, 8000, 3000)
- The network `shared_proxy_network` must be external

---

## Step 2: Create Nginx Config

Create `nginx/conf.d/{project}.conf` (e.g., `nginx/conf.d/myproject.conf`):

```nginx
# {project-name}/nginx/conf.d/{project}.conf

# Upstream - use unique name to avoid conflicts
upstream {project}_app {
    server {container_name}:{port};    # e.g., myproject_app:8000
    keepalive 32;
}

# HTTP server (HTTPS added after SSL setup)
server {
    listen 80;
    server_name {your-domain.com};     # e.g., myproject.example.com

    # For SSL certificate verification
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # Proxy to your app
    location / {
        proxy_pass http://{project}_app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }
}
```

**Replace:**
- `{project}` - your project identifier (e.g., `myproject`)
- `{container_name}` - from docker-compose.shared.yml (e.g., `myproject_app`)
- `{port}` - the port your app listens on (e.g., `8000`)
- `{your-domain.com}` - your domain (e.g., `myproject.example.com`)

---

## Step 3: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy to EC2

on:
  push:
    branches:
      - main
  workflow_dispatch:

env:
  DOCKER_BUILDKIT: 1

jobs:
  build-and-deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest

    steps:
      - name: Setup SSH Key
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.EC2_SSH_PRIVATE_KEY }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -H ${{ secrets.EC2_HOST }} >> ~/.ssh/known_hosts

      - name: Pull Latest Code
        run: |
          ssh -o StrictHostKeyChecking=no ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }} << 'ENDSSH'
            set -e

            PROJECT_DIR=~/{project-name}

            if [ ! -d "$PROJECT_DIR" ]; then
              echo "Cloning repository..."
              git clone https://x-access-token:${{ secrets.GH_PAT }}@github.com/{org}/{repo}.git "$PROJECT_DIR"
            else
              cd "$PROJECT_DIR"
              git remote set-url origin https://x-access-token:${{ secrets.GH_PAT }}@github.com/{org}/{repo}.git
              git fetch origin
              git reset --hard origin/main
              git clean -fd
            fi
          ENDSSH

      - name: Deploy Application
        env:
          DEPLOY_DOMAIN: ${{ vars.DOMAIN }}
          NGINX_CONTAINER: ${{ vars.SHARED_NGINX_CONTAINER || 'logs_nginx' }}
          PROJECT_CONFIG: ${{ vars.NGINX_CONFIG_NAME || '{project}.conf' }}
        run: |
          ssh -o StrictHostKeyChecking=no ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }} << ENDSSH
            set -e
            cd ~/{project-name}

            # Determine docker command
            if groups | grep -q docker; then
              DOCKER_CMD="docker"
            else
              DOCKER_CMD="sudo docker"
            fi

            echo "=========================================="
            echo "Deploying {project-name}"
            echo "Domain: $DEPLOY_DOMAIN"
            echo "=========================================="

            # Update domain in nginx config
            sed -i "s/server_name .*/server_name $DEPLOY_DOMAIN;/" nginx/conf.d/$PROJECT_CONFIG

            # Stop old containers
            echo "Stopping existing containers..."
            \$DOCKER_CMD compose -f docker-compose.shared.yml down || true

            # Build and start
            echo "Building..."
            \$DOCKER_CMD compose -f docker-compose.shared.yml build --no-cache

            echo "Starting..."
            \$DOCKER_CMD compose -f docker-compose.shared.yml up -d

            echo "Waiting for app to be healthy..."
            sleep 10

            # Update nginx config (no restart, just reload)
            echo "Updating nginx configuration..."
            NGINX_CONTAINER="$NGINX_CONTAINER"

            if \$DOCKER_CMD container inspect \$NGINX_CONTAINER >/dev/null 2>&1; then
              # Copy config to nginx
              \$DOCKER_CMD cp nginx/conf.d/$PROJECT_CONFIG \$NGINX_CONTAINER:/etc/nginx/conf.d/$PROJECT_CONFIG

              # Test and reload
              echo "Testing nginx config..."
              \$DOCKER_CMD exec \$NGINX_CONTAINER nginx -t

              echo "Reloading nginx..."
              \$DOCKER_CMD exec \$NGINX_CONTAINER nginx -s reload

              echo "Nginx reloaded successfully!"
            else
              echo "ERROR: Shared nginx container not found!"
              echo "Make sure the first project (ubuntu-docker-logs-finder) is deployed."
              exit 1
            fi

            echo "Deployment complete!"
          ENDSSH

      - name: Setup SSL (Optional)
        env:
          DEPLOY_DOMAIN: ${{ vars.DOMAIN }}
          SSL_EMAIL: ${{ vars.SSL_EMAIL || 'admin@example.com' }}
          NGINX_CONTAINER: ${{ vars.SHARED_NGINX_CONTAINER || 'logs_nginx' }}
          PROJECT_CONFIG: ${{ vars.NGINX_CONFIG_NAME || '{project}.conf' }}
        run: |
          ssh -o StrictHostKeyChecking=no ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }} << ENDSSH
            set -e
            cd ~/{project-name}

            if groups | grep -q docker; then
              DOCKER_CMD="docker"
            else
              DOCKER_CMD="sudo docker"
            fi

            CERT_PATH="/home/ubuntu/ubuntu-docker-logs-finder/certbot/conf/live/$DEPLOY_DOMAIN"

            # Check if certificate already exists
            if [ -d "\$CERT_PATH" ]; then
              echo "SSL certificate already exists for $DEPLOY_DOMAIN"
            else
              echo "Obtaining SSL certificate for $DEPLOY_DOMAIN..."

              \$DOCKER_CMD compose -f docker-compose.shared.yml run --rm certbot certbot certonly \
                --webroot \
                --webroot-path=/var/www/certbot \
                --email "$SSL_EMAIL" \
                --agree-tos \
                --no-eff-email \
                --non-interactive \
                -d "$DEPLOY_DOMAIN"

              echo "Certificate obtained!"
            fi

            # Update nginx config to use HTTPS
            # (You'll need to update your nginx config template for HTTPS)
          ENDSSH

      - name: Verify Deployment
        run: |
          ssh -o StrictHostKeyChecking=no ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }} << 'ENDSSH'
            cd ~/{project-name}

            if groups | grep -q docker; then
              DOCKER_CMD="docker"
            else
              DOCKER_CMD="sudo docker"
            fi

            # Check containers
            echo "Container status:"
            $DOCKER_CMD compose -f docker-compose.shared.yml ps

            # Health check
            sleep 3
            if curl -f http://localhost/ > /dev/null 2>&1; then
              echo "Health check passed!"
            else
              echo "Warning: Health check on localhost failed"
              $DOCKER_CMD compose -f docker-compose.shared.yml logs --tail=20
            fi
          ENDSSH
```

**Replace all occurrences of:**
- `{project-name}` - your project directory name
- `{org}/{repo}` - your GitHub org/repo
- `{project}` - short project identifier

---

## Step 4: Set GitHub Secrets and Variables

### Secrets (Settings → Secrets and variables → Actions → Secrets)

| Secret | Description | Example |
|--------|-------------|---------|
| `EC2_SSH_PRIVATE_KEY` | SSH private key for EC2 | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `EC2_HOST` | EC2 public IP or hostname | `54.123.45.67` |
| `EC2_USER` | SSH username | `ubuntu` |
| `GH_PAT` | GitHub Personal Access Token | `ghp_xxxx` |

### Variables (Settings → Secrets and variables → Actions → Variables)

| Variable | Description | Example |
|----------|-------------|---------|
| `DOMAIN` | Your project's domain | `myproject.example.com` |
| `NGINX_CONFIG_NAME` | Nginx config filename | `myproject.conf` |
| `SHARED_NGINX_CONTAINER` | Nginx container name | `logs_nginx` |
| `SSL_EMAIL` | Email for Let's Encrypt | `admin@example.com` |

---

## Step 5: Deploy

1. Commit and push your changes
2. The workflow will automatically deploy on push to `main`
3. Or manually trigger via Actions → Run workflow

---

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                     EC2 Instance                             │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │            Shared Nginx (logs_nginx)                 │    │
│  │                 Ports 80, 443                        │    │
│  │                                                      │    │
│  │  /etc/nginx/conf.d/                                  │    │
│  │    ├── default.conf      (default server)           │    │
│  │    ├── dockerlogs.conf   (project 1)                │    │
│  │    ├── myproject.conf    (project 2)   ← YOU ADD    │    │
│  │    └── another.conf      (project 3)                │    │
│  └─────────────────────────────────────────────────────┘    │
│                           │                                  │
│           shared_proxy_network                               │
│      ┌────────────┬───────┴───────┬────────────┐            │
│      │            │               │            │            │
│      ▼            ▼               ▼            ▼            │
│  ┌───────┐   ┌─────────┐   ┌──────────┐   ┌────────┐       │
│  │Project│   │ Project │   │ Project  │   │  ...   │       │
│  │   1   │   │    2    │   │    3     │   │        │       │
│  │ :5001 │   │  :8000  │   │  :3000   │   │        │       │
│  └───────┘   └─────────┘   └──────────┘   └────────┘       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Key Points:**
- Each project gets its own nginx config file
- All projects share the same nginx container
- Deployments only reload nginx config (no restart)
- One project's deployment does NOT affect others

---

## HTTPS Configuration

After SSL certificates are obtained, update your nginx config:

```nginx
# {project}.conf with HTTPS

upstream {project}_app {
    server {container_name}:{port};
    keepalive 32;
}

# HTTP - redirect to HTTPS
server {
    listen 80;
    server_name {your-domain.com};

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

# HTTPS server
server {
    listen 443 ssl;
    http2 on;
    server_name {your-domain.com};

    ssl_certificate /etc/letsencrypt/live/{your-domain.com}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/{your-domain.com}/privkey.pem;

    ssl_session_timeout 1d;
    ssl_session_cache shared:{project}_ssl:10m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;

    add_header Strict-Transport-Security "max-age=63072000" always;

    location / {
        proxy_pass http://{project}_app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## Troubleshooting

### Nginx config test fails
```bash
# SSH into EC2 and test config
docker exec logs_nginx nginx -t
```

### Container can't connect to nginx
```bash
# Check if container is on the right network
docker network inspect shared_proxy_network
```

### View nginx logs
```bash
docker logs logs_nginx --tail=50
```

### Reload nginx manually
```bash
docker exec logs_nginx nginx -s reload
```

---

## Example: Python Flask App

```yaml
# docker-compose.shared.yml
services:
  app:
    build: .
    container_name: myflaskapp_app
    restart: unless-stopped
    networks:
      - shared_proxy_network
    environment:
      - FLASK_ENV=production
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

networks:
  shared_proxy_network:
    external: true
```

```nginx
# nginx/conf.d/myflaskapp.conf
upstream myflaskapp_app {
    server myflaskapp_app:5000;
    keepalive 32;
}

server {
    listen 80;
    server_name flask.example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass http://myflaskapp_app;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
