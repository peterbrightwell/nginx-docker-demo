# Nginx Reverse Proxy Demo on Docker

Ensure Docker is running

One-time self-signed cert:

```
mkdir -p nginx/certs
openssl req -x509 -nodes -days 365 \
  -newkey rsa:2048 \
  -keyout nginx/certs/nginx.key \
  -out nginx/certs/nginx.crt \
  -subj "/CN=localhost"
```



```
docker compose up --build -d
```

Open <http://localhost:8080> (front end) and <http://localhost:8080/api/users> (API endpoint) in browser.
