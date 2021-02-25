// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ui.claim.list.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$claim_SLASH_get,(function (p__8599,p__8600){
var map__8601 = p__8599;
var map__8601__$1 = (((((!((map__8601 == null))))?(((((map__8601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8601):map__8601);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8601__$1,cljs.core.cst$kw$db);
var vec__8602 = p__8600;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8602,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,"http://localhost:8080/claimlist",cljs.core.cst$kw$req_DASH_id,cljs.core.cst$kw$ui$claim$list$model_SLASH_claim_DASH_list], null),cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading_QMARK_,true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$claim_SLASH_index,(function (p__8606,p__8607){
var map__8608 = p__8606;
var map__8608__$1 = (((((!((map__8608 == null))))?(((((map__8608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8608):map__8608);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8608__$1,cljs.core.cst$kw$db);
var vec__8609 = p__8607;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8609,(0),null);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8609,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8609,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deint,phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,phase)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$claim_SLASH_get], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$claim_SLASH_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_response,cljs.core.cst$kw$ui$claim$list$model_SLASH_claim_DASH_list], null),(function (p__8613){
var map__8614 = p__8613;
var map__8614__$1 = (((((!((map__8614 == null))))?(((((map__8614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8614):map__8614);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8614__$1,cljs.core.cst$kw$data);
return cljs.core.cst$kw$entry.cljs$core$IFn$_invoke$arity$1(data);
})], 0));
