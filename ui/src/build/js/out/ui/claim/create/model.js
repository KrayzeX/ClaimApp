// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ui.claim.create.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('zframes.redirect');
goog.require('clojure.string');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ui$claim$create$model_SLASH_set_DASH_value,(function (p__8564,p__8565){
var map__8566 = p__8564;
var map__8566__$1 = (((((!((map__8566 == null))))?(((((map__8566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8566):map__8566);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8566__$1,cljs.core.cst$kw$db);
var vec__8567 = p__8565;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8567,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8567,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8567,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,path,value)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ui$claim$create$model_SLASH_return,(function (p__8571,p__8572){
var map__8573 = p__8571;
var map__8573__$1 = (((((!((map__8573 == null))))?(((((map__8573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8573):map__8573);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8573__$1,cljs.core.cst$kw$db);
var vec__8574 = p__8572;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8574,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,"/"], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$claim_SLASH_create,(function (p__8578,p__8579){
var map__8580 = p__8578;
var map__8580__$1 = (((((!((map__8580 == null))))?(((((map__8580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8580):map__8580);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8580__$1,cljs.core.cst$kw$db);
var vec__8581 = p__8579;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8581,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$claim_DASH_title], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$claim_DASH_description], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$completion_DASH_data], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$applicant_DASH_name], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$applicant_DASH_surname], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$applicant_DASH_middlename], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$applicant_DASH_phone], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$applicant_DASH_mail], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$performer_DASH_name], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$performer_DASH_surname], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$performer_DASH_middlename], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$performer_DASH_phone], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$performer_DASH_mail], null),"")], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$claim_SLASH_create,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.cst$kw$form_DASH_values.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ui$claim$create$model_SLASH_create_DASH_claim,(function (p__8585,p__8586){
var map__8587 = p__8585;
var map__8587__$1 = (((((!((map__8587 == null))))?(((((map__8587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8587):map__8587);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8587__$1,cljs.core.cst$kw$db);
var vec__8588 = p__8586;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8588,(0),null);
var random_id = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_values,cljs.core.cst$kw$claim_DASH_id], null),cljs.core.rand_int((500)));
var params_to_request = cljs.core.cst$kw$form_DASH_values.cljs$core$IFn$_invoke$arity$1(random_id);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,"http://localhost:8080/testapp/newclaim",cljs.core.cst$kw$body,params_to_request,cljs.core.cst$kw$method,"PUT",cljs.core.cst$kw$success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,cljs.core.cst$kw$ui$claim$create$model_SLASH_return], null),cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event,cljs.core.cst$kw$flash_SLASH_danger,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$msg,"Error while creating a claim!"], null)], null)], null)], null)], null);
}));
