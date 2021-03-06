(ns manifest)

(def db-config
  {:db {:host (or (System/getenv "PGHOST") "localhost")
        :port (or (System/getenv "PGPORT") 5466)
        :user (or (System/getenv "PGUSER") "test_admin")
        :password (or (System/getenv "PGPASSWORD") "qwerty")
        :dbname (or (System/getenv "PGDATABASE") "test_db")}})
