# AGENTS.md

## System Setup

- **Node.js**: Installed via `fnm` (not nvm). Load env: `eval "$(fnm env --shell bash)"`
- **Docker**: User `dag` in `docker` group. **Always use**: `sg docker -c "..."` for docker commands
- **Cloudflared**: v2026.3.0 at `/usr/local/bin/cloudflared`

## Project Structure

Two separate projects in `/home/dag/projects/`:

### 1. projects/dagsolution/ (Nuxt 4.4.2)
- **Entry**: `nuxt dev --host 0.0.0.0` (binds to 0.0.0.0, not localhost)
- **Port**: 3000
- **Start**: `npm run dev -- --host 0.0.0.0`
- **Start script**: `/home/dag/start-nuxt.sh`
- **Access**: https://raspberry.dagsolution.com (Cloudflare Tunnel)

### 2. projects/dag-box/ (Python FastAPI Microservices)
- **Orchestration**: Docker Compose
- **Entry point**: API Gateway (port 8000)
- **Services**:
  - MongoDB (27017), PostgreSQL (5432), Redis (6379), RabbitMQ (5672/15672), MinIO (9000/9001)
  - API Gateway (8000), Auth (8001), Mail (8002), Link (8003), File (8004), Subscription (8005)
- **Start**: `sg docker -c "cd ~/projects/dag-box && docker compose up -d"`
- **Access**: https://box.raspberry.dagsolution.com

## Development Commands

### Nuxt (dagsolution/)
```bash
cd ~/projects/dagsolution
export PATH="/home/dag/.local/bin:$PATH" && eval "$(fnm env --shell bash)"
npm install
npm run dev -- --host 0.0.0.0
```

### Dag-Box (dag-box/)
```bash
# Build all services
sg docker -c "cd ~/projects/dag-box && docker compose up -d --build"

# Check status
sg docker -c "docker ps --format 'table {{.Names}}\t{{.Status}}'"

# View logs
sg docker -c "docker logs <container-name>"
```

## Python Gotchas (Verified Fixes)

### 1. Reserved Keyword `from`
Pydantic models: Use `from_ = Field(..., alias="from")` not `from: str`

### 2. Dictionary Comprehension Syntax
✅ Correct:
```python
**{f"rate_{k}": v for k, v in yaml_config.get("ratelimit", {}).items()}
```

❌ Wrong:
```python
**{"rate_" + k: v for k, v in ...}  # SyntaxError
```

### 3. Service Config Pattern
When loading YAML config in `app/core/config.py`:
- Use f-strings for key formatting
- Ensure matching parentheses

## Infrastructure

### Cloudflare Tunnel
- **Config**: `/home/dag/.cloudflared/config.yml`
- **Tunnel ID**: `a2085fbf-8ef0-40ca-aa7d-9f34fe5fd038`
- **Start**: `setsid /home/dag/start-tunnel.sh &`
- **Logs**: `/tmp/tunnel.log`

### Port Bindings (Critical)
All services bind to `0.0.0.0` (not `127.0.0.1`) for tunnel access.

### DNS Records
- `raspberry.dagsolution.com` → Nuxt (port 3000)
- `box.raspberry.dagsolution.com` → API Gateway (port 8000)

## Common Issues

### Error 1033 (Tunnel Refused)
```bash
ps aux | grep cloudflared  # Check if running
setsid /home/dag/start-tunnel.sh &  # Restart
```

### Error 502 (Bad Gateway)
```bash
ss -tlnp | grep PORT  # Check if service is listening
# Restart the specific service
```

### Docker Permission Denied
Always prefix with: `sg docker -c "..."`

## Notes
- Elastic services (elasticsearch, logstash, kibana) commented out in docker-compose.yml (ARM64 compatibility)
- DNS changes take 5-10 minutes to propagate
- All services run in background with `setsid`
