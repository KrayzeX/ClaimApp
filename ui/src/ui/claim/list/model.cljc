(ns ui.claim.list.model
  (:require [re-frame.core :as rf]
            [clojure.string :as str]))

(rf/reg-event-fx
 :claim/get
 (fn [{db :db} [_]]
   {:xhr/fetch {:uri "http://localhost:8080/claimlist"
                :req-id ::claim-list}
    :db (assoc db :loading? true)}))

(rf/reg-event-fx
 :claim/index
 (fn [{db :db} [_ phase params]]
   (cond
     (= :deint phase)
     {}
     (or (= :params phase) (= :init phase))
     {:dispatch [:claim/get]})))

(rf/reg-sub
 :claim/index
 :<- [:xhr/response ::claim-list]
 (fn [{data :data}]
   (:entry data)))



