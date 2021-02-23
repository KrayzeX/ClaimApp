(ns user
  (:require [figwheel.main.api :as repl]
            [ring.middleware.x-headers :refer [wrap-frame-options]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :refer [resource-response content-type not-found]]
            [ring.adapter.jetty :refer [run-jetty]]
            [app.core :as server]))


(def figwheel-options
  {:id "ui"
   :options {:main 'ui.dev
             :closure-defines {"re_frame.trace.trace_enabled_QMARK_" true}
             :preloads ['day8.re-frame-10x.preload]
             :output-to "resources/public/js/ui.js"
             :output-dir "resources/public/js/out"}
   :config {:watch-dirs ["srcs"]
            :mode :serve
            :ring-server-options {:port 8181}}})

(defn run-ui [opts]
  (repl/start opts))

(defn run-back [opts]
  (repl/start opts))

(defn start []
  (run-ui figwheel-options)
  (server/-main))

(defn stop []
  (repl/stop "ui"))

