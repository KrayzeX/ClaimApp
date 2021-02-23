shell = bash

PGUSER = test_admin
PGPASSWORD = qwerty
PGPORT = 5466
PGHOST = localhost
PGDATABASE = test_db

.EXPORT_ALL_VARIABLES:

config:
											docker-compose config

up:
											docker-compose up -d

down:
											docker-compose down

build:
											clj -A:build
											mv target/ClaimApp-1.0.0-SNAPSHOT-standalone.jar testapp.jar

ui-build:
											cd ui && clojure -m build


run-jar:
											java -jar testapp.jar

nrepl:
											make up
											cd ui && clj -A:dev:nrepl


psql:
											docker exec -it test psql test_db test_admin



