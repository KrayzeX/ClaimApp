---- db: -h localhost -p 5466 -U test_admin test_db
select 1
----
select * from claim
----
insert into claim (id, resource_type, resource)
       values ('1', 'Claim', '{"resource_type": "claim",
                               "resource": {"title": "Test claim",
                                            "description": "Testing description for testing claim",
                                            "applicant": {"first_name": "Test",
                                                          "second_name": "User",
                                                          "middle_name": "First",
                                                          "contact_details": {"phone_number": "89110123456",
                                                                              "email": "test1@user.com"}},
                                            "performer": {"first_name": "Test",
                                                          "second_name": "Performer",
                                                          "middle_name": "First",
                                                          "contact_details": {"phone_number": "89110123456",
                                                                              "email": "test1@performer.com"}},
                                            "completion_data": "13-02-2021"}}')
----
select * from claim
----
delete from claim where id is NULL
----
insert into claim (id, resource_type, resource)
       values ('2', 'Claim', '{"resource_type": "claim",
                               "resource": {"title": "Test claim",
                                            "description": "Testing description for testing claim",
                                            "applicant": {"first_name": "Test",
                                                          "second_name": "User",
                                                          "middle_name": "Second",
                                                          "contact_details": {"phone_number": "89110123456",
                                                                              "email": "test2@user.com"}},
                                            "performer": {"first_name": "Test",
                                                          "second_name": "Performer",
                                                          "middle_name": "Second",
                                                          "contact_details": {"phone_number": "89110123456",
                                                                              "email": "test2@performer.com"}},
                                            "completion_data": "10-01-2021"}}')
----
