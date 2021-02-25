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

start:
											make up
											clj -A:backclj:dev -m "start"

figwheel:
											clj -A:frontclj:figwheel -m "figwheel.main" -b "dev"

build:
											clj -A:uberjar:dev:backclj:frontclj
											mv target/ClaimApp-1.0.0-SNAPSHOT-standalone.jar testapp.jar

ui-build:
											clj -A:frontclj -m "build"

run-jar:
											java -jar testapp.jar

repl:
											make up
											clj -A:backclj:dev -m "nrepl"

psql:
											docker exec -it test psql test_db test_admin


