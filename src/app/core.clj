(ns core
  (:require [clojure.string :as str]
            [clojure.pprint :as pp]
            [clojure.java.io :as io]

            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :refer [file-response]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.adapter.jetty :as jetty]

            [compojure.core :refer :all]
            [compojure.route :as route]
            [dbcore :refer :all]
            [crud :as crud])
  (:gen-class))

(defroutes app-routes
  (GET "/claimlist" [] crud/claim-list)
  (GET "/testapp" [] (file-response "resources/index.html"))
  (PUT "/testapp/newclaim" [] crud/create-claim))

(defn allow-access [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (assoc-in [:headers "Access-Control-Allow-Origin"] "*")
          (assoc-in [:headers "Access-Control-Allow-Headers"] "*")
          (assoc-in [:headers "Access-Control-Allow-Methods"] "*")))))

(def app
  (-> app-routes
      allow-access
      wrap-json-body
      wrap-params
      wrap-json-response
      wrap-reload))

(defn -main [& args]
  (jetty/run-jetty #'app {:port 8080
                            :join? false})
  (println "WebApp started at port: " 8080))



