(ns build
  (:require [cljs.build.api :as api]
            [clojure.string :as str]))

(def source-dir "ui/src")

(def compiler-conf
  {:output-to "ui/src/build/js/ui.js"
   :source-map "ui/src/build/js/ui.js.map"
   :output-dir "ui/src/build/js/out"
   :infer-externs true
   :optimizations :advanced
   :main 'ui.prod})

(defn -main []
  (api/build source-dir compiler-conf))

