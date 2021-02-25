// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('zframes.redirect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('zframes.window_location');
goog.require('zframes.routing');
goog.require('clojure.string');
zframes.redirect.window_open = (function zframes$redirect$window_open(url){
return window.open(url,"_blank").focus;
});
zframes.redirect.page_redirect = (function zframes$redirect$page_redirect(url){
return (window.location.href = url);
});
zframes.redirect.redirect = (function zframes$redirect$redirect(url){
return (window.location.hash = url);
});
zframes.redirect.redirect_with_refresh = (function zframes$redirect$redirect_with_refresh(url){
(window.location.hash = url);

return location.reload();
});
re_frame.core.reg_fx(cljs.core.cst$kw$zframes$redirect_SLASH_redirect,(function (opts){
return zframes.redirect.redirect([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5735__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var params = temp__5735__auto__;
return zframes.window_location.gen_query_string(params);
} else {
return null;
}
})()].join(''));
}));
re_frame.core.reg_fx(cljs.core.cst$kw$zframes$redirect_SLASH_redirect_DASH_with_DASH_refresh,(function (opts){
return zframes.redirect.redirect_with_refresh([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5735__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var params = temp__5735__auto__;
return zframes.window_location.gen_query_string(params);
} else {
return null;
}
})()].join(''));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$redirect_SLASH_redirect,(function (fx,p__6391){
var vec__6392 = p__6391;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6392,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6392,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,opts], null);
}));
re_frame.core.reg_fx(cljs.core.cst$kw$zframes$redirect_SLASH_page_DASH_redirect,(function (opts){
if(cljs.core.truth_(cljs.core.cst$kw$_target.cljs$core$IFn$_invoke$arity$1(opts))){
return zframes.redirect.window_open(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts));
} else {
return zframes.redirect.page_redirect([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5735__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var params = temp__5735__auto__;
return ["?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6407){
var vec__6408 = p__6407;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');
}),params))].join('');
} else {
return null;
}
})()].join(''));
}
}));
re_frame.core.reg_fx(cljs.core.cst$kw$zframes$redirect_SLASH_set_DASH_query_DASH_string,(function (params){
var loc = window.location;
history.pushState(({}),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(params),[zframes.window_location.gen_query_string(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$title)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join(''));

zframes.routing.dispatch_context(null);

return zframes.routing.dispatch_routes(null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$redirect_SLASH_merge_DASH_params,(function (p__6411,p__6412){
var map__6413 = p__6411;
var map__6413__$1 = (((((!((map__6413 == null))))?(((((map__6413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6413):map__6413);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6413__$1,cljs.core.cst$kw$db);
var vec__6414 = p__6412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6414,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6414,(1),null);
var pth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$fragment_DASH_path);
var nil_keys = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6418){
var vec__6419 = p__6418;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6419,(1),null);
if((v == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,params);
var old_params = (function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fragment_DASH_params,cljs.core.cst$kw$params], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,pth,cljs.core.cst$kw$params,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_params,params], 0)),nil_keys)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$redirect_SLASH_set_DASH_params,(function (p__6422,p__6423){
var map__6424 = p__6422;
var map__6424__$1 = (((((!((map__6424 == null))))?(((((map__6424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6424):map__6424);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6424__$1,cljs.core.cst$kw$db);
var vec__6425 = p__6423;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6425,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6425,(1),null);
var pth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$fragment_DASH_path);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,pth,cljs.core.cst$kw$params,params], null)], null);
}));
