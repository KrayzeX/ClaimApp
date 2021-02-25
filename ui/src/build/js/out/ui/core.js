// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ui.layout');
goog.require('ui.pages');
goog.require('ui.routes');
goog.require('zframes.xhr');
goog.require('zframes.redirect');
goog.require('zframes.routing');
goog.require('ui.claim.list.view');
goog.require('ui.claim.create.view');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ui$core_SLASH_initialize,(function (p__8776,_){
var map__8777 = p__8776;
var map__8777__$1 = (((((!((map__8777 == null))))?(((((map__8777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8777):map__8777);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8777__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$route_DASH_map_SLASH_routes,ui.routes.routes),cljs.core.cst$kw$route_DASH_map_SLASH_start,cljs.core.PersistentArrayMap.EMPTY], null);
}));
ui.core.not_found_page = (function ui$core$not_found_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Page not found!"], null);
});
ui.core.not_found_component = (function ui$core$not_found_component(page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$not_DASH_found,["Component not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)].join('')], null);
});
ui.core.current_page = (function ui$core$current_page(){
var map__8779 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route], null)));
var map__8779__$1 = (((((!((map__8779 == null))))?(((((map__8779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8779):map__8779);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8779__$1,cljs.core.cst$kw$match);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8779__$1,cljs.core.cst$kw$params);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8779__$1,cljs.core.cst$kw$href);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8779__$1,cljs.core.cst$kw$fragment);
var cmp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ui.pages.pages),page);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,cljs.core.cst$kw$href,href,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$context,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$route,page], 0));
if(cljs.core.truth_((function (){var and__4115__auto__ = page;
if(cljs.core.truth_(and__4115__auto__)){
return cmp;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.layout.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmp,params__$1], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = page;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cmp);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.not_found_component,page], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.not_found_page], null);

}
}
});
ui.core.mount_root = (function ui$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.current_page], null),document.getElementById("ui"));
});
ui.core.init_BANG_ = (function ui$core$init_BANG_(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui$core_SLASH_initialize], null));

return ui.core.mount_root();
});
