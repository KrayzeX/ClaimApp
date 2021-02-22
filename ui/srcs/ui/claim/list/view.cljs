(ns ui.claim.list.view
  (:require [re-frame.core :as rf]
            [clojure.string :as str]
            [zframes.redirect :as redirect]
            [ui.pages :as pages]
            [ui.claim.list.model :as model]
            [ui.styles :as styles]
            [reagent.core :as r]))

(def styles
  (styles/style
   [:.title {:font-size "28px"
             :text-align "center"
             :font-weight "500"
             :font-style "italic"
             :padding "15px 0"}]
   [:.button-panel {:margin-top "25px"}]
   [:.claims-list {:margin-top "20px"
                   :border-radius "6px"
                   :padding "10px 20px"
                   :background-color "#F9FBFB"}]
   [:.element-block {:display :flex
                     :margin-bottom "2px"
                     :box-sizing "border-box"
                     :border "2px solid #A9E2F3"
                     :border-radius "6px"}
    [:.claim-title {:font-weight "500"
                    :margin-bottom "10px"
                    :font-size "20px"}]
    [:.claim-desc {:color "#848484"}]
    [:.compl-data {:color "#848484"}]
    [:.main-info {:padding "7px 15px"
                  :border-radius "6px 0 0 6px"
                  :background-color "#EFFBFB"
                  :width "420px"}]
    [:.other-info {:padding "7px 15px"
                   :background-color "white"
                   :border-radius "0 6px 6px 0"
                   :width "420px"}
     [:.mail {:color "#848484"}]
     [:.user {:font-size "16px"
              :font-weight "500"
              :font-style :italic}]]]))

(defn page-title []
  [:div.title
   "Test Claim Web Application"])

(defn button-panel []
  [:div.button-panel
   [:button.btn.btn-success
    {:on-click #(rf/dispatch [::redirect/redirect {:uri "/new"}])}
    "Add +"]])

(defn toName [res]
  (str (:first_name res) " " (:second_name res) " " (:middle_name res)))

(defn current-claim [{{resource :resource} :resource :as args}]
  [:div.element-block ^{:key (str (:id args) (rand-int 1000))}
   [:div.main-info ^{:key (str (:id args) (rand-int 1000))}
    [:div.claim-title ^{:key (str (:id args) (:title resource))}
     (str "Title: " (:title resource))]
    [:div.claim-desc ^{:key (str (:id args) (:description resource))}
     (str "Description: " (:description resource))]
    [:div.compl-data ^{:key (str (:id args) (:completion_data resource))}
     (str "Completion data: " (:completion_data resource))]]
   [:div.other-info ^{:key (str (:id args) (rand-int 1000))}
    [:div.user ^{:key (str (:id args) (get-in resource [:applicant :first_name]))}
     (str "Applicant: " (toName (:applicant resource)))]
    [:div.mail ^{:key (str (:id args) (get-in resource [:applicant :contact_details :email]))}
     (str "Applicant email: " (get-in resource [:applicant :contact_details :email]))]
    [:div.user ^{:key (str (:id args) (get-in resource [:performer :first_name]))}
     (str "Performer: " (toName (:performer resource)))]
    [:div.mail ^{:key (str (:id args) (get-in resource [:performer :contact_details :email]))}
     (str "Performer email: " (get-in resource [:performer :contact_details :email]))]]])

(defn claim-list [data]
  [:div.claims-list
    (map
     current-claim
     data)])

(defn claims [data]
  (let [m (rf/subscribe [:claim/index])]
    (fn []
      [:div.container styles
       [:div.header
        [page-title]]
       [:div.main
        [button-panel]
        [claim-list @m]]])))

(pages/reg-page :claim/index claims)

