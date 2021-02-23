(ns app.crud
  (:require [app.dbcore :as db]
            [honeysql.core :as hsql]
            [clojure.string :as str]))

(defn claim-list [request]
  (let [responesData (db/query ["select * from claim"])]
    {:status 200
     :body {:entry responesData}}))

(defn create-resource [resource]
    {:resource_type "claim"
     :resource {:title (get resource "claim-title")
                :description (get resource "claim-description")
                :applicant {:first_name (get resource "applicant-name")
                            :second_name (get resource "applicant-surname")
                            :middle_name (get resource "applicant-middlename")
                            :contact_details {:phone_number (get resource "applicant-phone")
                                              :email (get resource "applicant-mail")}}
                :performer {:first_name (get resource "performer-name")
                            :second_name (get resource "performer-surname")
                            :middle_name (get resource "performer-middlename")
                            :contact_details {:phone_number (get resource "performer-phone")
                                              :email (get resource "performer-mail")}}
                :completion_data (get resource "completion-data") }})

(defn create-claim [{body :body :as request}]
  (let [new-resource (create-resource body)
        claim-id (get body "claim-id")
        resource-type "Claim"
        new-claim (db/execute ["insert into claim (id, resource_type, resource) values (?, ?, ?)" claim-id resource-type new-resource])]
    {:status 201
     :body {:entry {:id claim-id
                    :resource new-resource}}}))

