(ns ui.claim.create.model
  (:require
   [re-frame.core :as rf]
   [zframes.redirect :as redirect]
   [clojure.string :as str]))

(rf/reg-event-fx
 ::set-value
 (fn [{db :db} [_ path value]]
   {:db (assoc-in db path value)}))

(rf/reg-event-fx
 ::return
 (fn [{db :db} [_]]
   {:dispatch [::redirect/redirect {:uri "/"}]}))

(rf/reg-event-fx
 :claim/create
 (fn [{db :db} [_]]
   {:db (-> db
            (assoc-in [:form-values :claim-title] "")
            (assoc-in [:form-values :claim-description] "")
            (assoc-in [:form-values :completion-data] "")
            (assoc-in [:form-values :applicant-name] "")
            (assoc-in [:form-values :applicant-surname] "")
            (assoc-in [:form-values :applicant-middlename] "")
            (assoc-in [:form-values :applicant-phone] "")
            (assoc-in [:form-values :applicant-mail] "")
            (assoc-in [:form-values :performer-name] "")
            (assoc-in [:form-values :performer-surname] "")
            (assoc-in [:form-values :performer-middlename] "")
            (assoc-in [:form-values :performer-phone] "")
            (assoc-in [:form-values :performer-mail] ""))}))

(rf/reg-sub
 :claim/create
 (fn [db]
   (:form-values db)))

(rf/reg-event-fx
 ::create-claim
 (fn [{db :db} [_]]
   (let [random-id (assoc-in db [:form-values :claim-id] (rand-int 500))
         params-to-request (:form-values random-id)]
     {:dispatch [:xhr/fetch {:uri "http://localhost:8181/testapp/newclaim"
                             :body params-to-request
                             :method "PUT"
                             :success {:event ::return}
                             :error {:event :flash/danger
                                     :params {:msg "Error while creating a claim!"}}}]})))
