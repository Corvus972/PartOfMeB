APP_PORT=8080 \
APP_HOST=localhost \
DB_HOST=localhost \
DB_NAME=rm-database \
DB_USER=postgres \
DB_PWD=postgres \
DB_DIALECT=postgres \
DB_PORT=5432 \
PRIVATE_KEY=../../../env/key.pem  \
PERMISSION_CACHE_TIMEOUT=1800 \
ACME_HMAC_API_KEY=ACME_TO_ROUTING_MANAGER \
ACME_HMAC_SECRET_KEY=bc7f8996-84fe-11ec-a8a3-0242ac120002 \
nodemon --inspect target/src/app.js