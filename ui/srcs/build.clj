(ns build
  (:require [cljs.build.api :as api]
            [clojure.string :as str]))

(def source-dir "srcs")

(def compiler-conf
  {:output-to "build/js/ui.js"
   :source-map "build/js/ui.js.map"
   :output-dir "build/js/out"
   :infer-externs true
   :optimizations :advanced
   :main 'ui.prod})

(defn -main []
  (api/build source-dir compiler-conf))

