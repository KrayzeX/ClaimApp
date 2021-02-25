(ns ui.claim.create.view
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [zframes.redirect :as redirect]
            [clojure.string :as str]
            [ui.claim.create.model :as model]
            [ui.pages :as pages]
            [ui.styles :as styles]))

(def style
  (styles/style
   [:.container
    [:.header {:font-size "26px"
               :font-style :italic
               :text-align "center"
               :font-weight "500"}]
    [:.create-body {:margin-top "20px"
                    :padding "10px 15px 5px 15px"
                    :margin-bottom "20px"
                    :border-radius "15px"
                    :background-color "#EFF2FB"}]
    [:.actions {:display :flex
                :justify-content "space-between"}]
    [:.input-group.mb3 {:margin-bottom "10px"}]
    [:.input-group.mb3.small {:width "500px"}]
    [:.input-group.mb3.data {:width "350px"}]
    [:.line {:box-sizing "border-box"
             :border "1px solid #bdbdbd"
             :margin-bottom "15px"}]
    [:.users {:display "flex"
              :justify-content "space-between"
              :padding "10px"
              :background-color "#fafafa"
              :border-radius "15px"}
     [:.appl-main
      [:.appl-title {:color "#6e6e6e"
                     :text-align "center"}]]
     [:.perf-main
      [:.perf-title {:color "#6e6e6e"
                     :text-align "center"}]]]]))

(defn input [path value]
  [:input {:type "text"
           :class "form-control"
           :value (path @value)
           :on-change #(rf/dispatch [::model/set-value [:form-values path] (-> % .-target .-value)])}])

(defn claim-main-info [data]
  [:div.claim-main
   [:div.input-group.mb3.small
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "basic-addon1"}
      "Claim title"]]
    [input :claim-title data]]
   [:div.input-group.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "basic-addon1"}
      "Description"]]
    [input :claim-description data]]
   [:div.input-group.mb3.data
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "basic-addon1"}
      "Completion data"]]
    [input :completion-data data]]])

(defn applicant-info [data]
  [:div.appl-main
   [:div.appl-title "Applicant"]
   [:div.input-group.input-group-sm.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "inputGroup-sizing-sm"}
      "Name"]]
    [input :applicant-name data]]
   [:div.input-group.input-group-sm.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "inputGroup-sizing-sm"}
      "Surname"]]
    [input :applicant-surname data]]
   [:div.input-group.input-group-sm.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "inputGroup-sizing-sm"}
      "Middle name"]]
    [input :applicant-middlename data]]
   [:div.input-group.input-group-sm.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "inputGroup-sizing-sm"}
      "@mail"]]
    [input :applicant-mail data]]
   [:div.input-group.input-group-sm.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "inputGroup-sizing-sm"}
      "Phone"]]
    [input :applicant-phone data]]])

(defn performer-info [data]
  [:div.perf-main
   [:div.perf-title "Performer"]
   [:div.input-group.input-group-sm.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "inputGroup-sizing-sm"}
      "Name"]]
    [input :performer-name data]]
   [:div.input-group.input-group-sm.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "inputGroup-sizing-sm"}
      "Surname"]]
    [input :performer-surname data]]
   [:div.input-group.input-group-sm.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "inputGroup-sizing-sm"}
      "Middle name"]]
    [input :performer-middlename data]]
   [:div.input-group.input-group-sm.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "inputGroup-sizing-sm"}
      "@mail"]]
    [input :performer-mail data]]
   [:div.input-group.input-group-sm.mb3
    [:div.input-group-prepend
     [:span.input-group-text
      {:id "inputGroup-sizing-sm"}
      "Phone"]]
    [input :performer-phone data]]])

(defn create-claim [data]
  (let [m (rf/subscribe [:claim/create])]
    (fn []
      [:div.container style
       [:div.header
        "New claim"]
       [:div.create-body
        [:div.claim
         [claim-main-info m]]
        [:div.line]
        [:div.users
         [applicant-info m]
         [performer-info m]]]
       [:div.actions
        [:button.btn.btn-info
         {:on-click #(rf/dispatch [::model/return])}
         "Cancel"]
        [:button.btn.btn-success
         {:on-click (fn []
                      (cond
                        (empty? (filter #(= "" %) (vals @m)))
                        (rf/dispatch [::model/create-claim])
                        :else
                        (js/alert "Fields should not be empty!")))}
         "Save"]]])))


(pages/reg-page :claim/create create-claim)
