// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('zframes.routing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('zframes.window_location');
goog.require('route_map.core');
zframes.routing.dispatch_routes = (function zframes$routing$dispatch_routes(_){
var fragment = window.location.hash;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fragment_DASH_changed,fragment], null));
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$route_DASH_map_SLASH_fragment_DASH_params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$fragment_DASH_params.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$route_DASH_map_SLASH_fragment,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$route_DASH_map_SLASH_fragment_DASH_path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$fragment_DASH_path.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$route_DASH_map_SLASH_location_DASH_search,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$location_SLASH_search.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_fx(cljs.core.cst$kw$html_DASH_title,(function (title){
return (document.title = ["Web Project",(cljs.core.truth_(title)?[" - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''):null)].join(''));
}));
zframes.routing.normalize_params = (function zframes$routing$normalize_params(p__6343){
var map__6344 = p__6343;
var map__6344__$1 = (((((!((map__6344 == null))))?(((((map__6344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6344):map__6344);
var o_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6344__$1,cljs.core.cst$kw$o_DASH_params);
var n_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6344__$1,cljs.core.cst$kw$n_DASH_params);
var op = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(o_params,cljs.core.cst$kw$_DOT_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params], 0));
var np = cljs.core.select_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(n_params,cljs.core.cst$kw$_DOT_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params], 0)),cljs.core.keys(op));
var op__$1 = cljs.core.select_keys(op,cljs.core.keys(np));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o_DASH_params,op__$1,cljs.core.cst$kw$n_DASH_params,np], null);
});
zframes.routing.params_changed_QMARK_ = (function zframes$routing$params_changed_QMARK_(params){
var map__6346 = zframes.routing.normalize_params(params);
var map__6346__$1 = (((((!((map__6346 == null))))?(((((map__6346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6346):map__6346);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6346__$1,cljs.core.cst$kw$o_DASH_params);
var np = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6346__$1,cljs.core.cst$kw$n_DASH_params);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(np,op)) || (cljs.core.empty_QMARK_(op)));
});
zframes.routing.contexts_diff = (function zframes$routing$contexts_diff(route,old_contexts,new_contexts,params,old_params){
var to_dispose = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6348){
var vec__6349 = p__6348;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6349,(0),null);
var o_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6349,(1),null);
var G__6352 = acc;
if(zframes.routing.params_changed_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o_DASH_params,o_params,cljs.core.cst$kw$n_DASH_params,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_contexts,k)], null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__6352,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$deinit,o_params], null));
} else {
return G__6352;
}
}),cljs.core.PersistentVector.EMPTY,old_contexts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6353){
var vec__6354 = p__6353;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6354,(0),null);
var n_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6354,(1),null);
var G__6357 = acc;
if(zframes.routing.params_changed_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o_DASH_params,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_contexts,k),cljs.core.cst$kw$n_DASH_params,n_params], null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__6357,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$init,n_params], null));
} else {
return G__6357;
}
}),to_dispose,new_contexts);
});
zframes.routing.parse_params = (function zframes$routing$parse_params(s){
if(clojure.string.blank_QMARK_(s)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
var vec__6358 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(pair,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6358,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6358,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),decodeURIComponent(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/^\?/,""),"&"));
}
});
zframes.routing.dispatch_context = (function zframes$routing$dispatch_context(_){
var query = window.location.search;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_changed,zframes.routing.parse_params(query)], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$search_DASH_changed,(function (p__6361,p__6362){
var map__6363 = p__6361;
var map__6363__$1 = (((((!((map__6363 == null))))?(((((map__6363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6363):map__6363);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6363__$1,cljs.core.cst$kw$db);
var vec__6364 = p__6362;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6364,(0),null);
var search = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6364,(1),null);
var old = cljs.core.cst$kw$location_SLASH_search.cljs$core$IFn$_invoke$arity$1(db);
var ctx_rs = cljs.core.cst$kw$context_SLASH_routes.cljs$core$IFn$_invoke$arity$1(db);
var prev_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx_rs,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(old));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,search)))){
if(cljs.core.truth_(prev_h)){
new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_h,cljs.core.cst$kw$deinit,old], null),cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$navigation)], null);
} else {
}

var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx_rs,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(search));
if(cljs.core.truth_(temp__5733__auto__)){
var handler = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler,cljs.core.cst$kw$init,search], null),cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$location_SLASH_search,search)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$location_SLASH_search,search)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$location_SLASH_search,search)], null);
}
}));
zframes.routing.parse_fragment = (function zframes$routing$parse_fragment(fragment){
var vec__6368 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(fragment,/^#/,""),/\?/);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6368,(0),null);
var params_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6368,(1),null);
var params = ((clojure.string.blank_QMARK_(params_str))?cljs.core.PersistentArrayMap.EMPTY:zframes.window_location.parse_querystring((function (){var or__4126__auto__ = params_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$query_DASH_string,params_str,cljs.core.cst$kw$params,params], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fragment_DASH_changed,(function (p__6371,p__6372){
var map__6373 = p__6371;
var map__6373__$1 = (((((!((map__6373 == null))))?(((((map__6373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6373):map__6373);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6373__$1,cljs.core.cst$kw$db);
var vec__6374 = p__6372;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6374,(0),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6374,(1),null);
var map__6378 = zframes.routing.parse_fragment(fragment);
var map__6378__$1 = (((((!((map__6378 == null))))?(((((map__6378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6378):map__6378);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6378__$1,cljs.core.cst$kw$path);
var q_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6378__$1,cljs.core.cst$kw$params);
var qs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6378__$1,cljs.core.cst$kw$query_DASH_string);
var temp__5733__auto__ = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_DOT_,path], null),cljs.core.cst$kw$route_DASH_map_SLASH_routes.cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(temp__5733__auto__)){
var route = temp__5733__auto__;
var params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(route),cljs.core.cst$kw$params,q_params);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$search,cljs.core.cst$kw$location_SLASH_search.cljs$core$IFn$_invoke$arity$1(db));
var route_match = cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route);
var route__$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$match,route_match,cljs.core.cst$kw$params,params__$1,cljs.core.cst$kw$parents,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(route)], null);
var contexts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6380){
var map__6381 = p__6380;
var map__6381__$1 = (((((!((map__6381 == null))))?(((((map__6381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6381):map__6381);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6381__$1,cljs.core.cst$kw$context);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6381__$1,cljs.core.cst$kw$_DOT_);
if(cljs.core.truth_(ctx)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,ctx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params__$1,cljs.core.cst$kw$$$,r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_DOT_,route_match], 0)));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(route__$1));
var current_page = cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route__$1);
var old_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$match], null));
var old_params = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$params], null));
var page_ctx_events = (((old_page == null))?(function (){var G__6383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$init,params__$1], null)], null);
if(cljs.core.seq(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__6383,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$params,params__$1], null));
} else {
return G__6383;
}
})():((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_page,old_page))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__6384 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(old_page)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__6384,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_page,cljs.core.cst$kw$deinit,old_params], null));
} else {
return G__6384;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$init,params__$1], null)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_params,params__$1))?cljs.core.PersistentVector.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_params,cljs.core.cst$kw$params),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params__$1,cljs.core.cst$kw$params)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$params,params__$1,old_params], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$deinit,old_params], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$init,params__$1], null)], null)
))));
var old_contexts = cljs.core.cst$kw$route_SLASH_context.cljs$core$IFn$_invoke$arity$1(db);
var context_evs = zframes.routing.contexts_diff(cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route__$1),old_contexts,contexts,params__$1,old_params);
var evs = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(context_evs,page_ctx_events));
var db__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_page,current_page))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,old_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$form], 0)):db);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db__$1,cljs.core.cst$kw$route_SLASH_history,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.cst$kw$route_SLASH_history.cljs$core$IFn$_invoke$arity$1(db__$1)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$route,cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route__$1),cljs.core.cst$kw$uri,fragment], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fragment,fragment,cljs.core.cst$kw$fragment_DASH_params,params__$1,cljs.core.cst$kw$fragment_DASH_path,path,cljs.core.cst$kw$fragment_DASH_query_DASH_string,qs,cljs.core.cst$kw$route_SLASH_context,contexts,cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,route__$1], 0)),cljs.core.cst$kw$html_DASH_title,null,cljs.core.cst$kw$dispatch_DASH_n,evs], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$fragment,fragment,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,null,cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,null,cljs.core.cst$kw$route_DASH_map_SLASH_error,cljs.core.cst$kw$not_DASH_found], 0))], null);
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$pop_DASH_route,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.peek(cljs.core.cst$kw$route_DASH_stack.cljs$core$IFn$_invoke$arity$1(db));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clear_DASH_route_DASH_stack,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$route_DASH_stack);
}));
zframes.routing.history_fx = (function zframes$routing$history_fx(_){
(window["onhashchange"] = zframes.routing.dispatch_routes);

return zframes.routing.dispatch_routes(null);
});
re_frame.core.reg_fx(cljs.core.cst$kw$history,zframes.routing.history_fx);
zframes.routing.search_history_fx = (function zframes$routing$search_history_fx(_){
(window["onpopstate"] = zframes.routing.dispatch_context);

return zframes.routing.dispatch_context(null);
});
re_frame.core.reg_fx(cljs.core.cst$kw$search_DASH_history,zframes.routing.search_history_fx);
zframes.routing.start_fx = (function zframes$routing$start_fx(_){
zframes.routing.search_history_fx(null);

return zframes.routing.history_fx(null);
});
re_frame.core.reg_fx(cljs.core.cst$kw$route_DASH_map_SLASH_start,zframes.routing.start_fx);
zframes.routing.redirect = (function zframes$routing$redirect(href){
return (window.location["hash"] = href);
});
re_frame.core.reg_fx(cljs.core.cst$kw$route_DASH_map_SLASH_redirect,zframes.routing.redirect);
zframes.routing.to_query_params = (function zframes$routing$to_query_params(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6385){
var vec__6386 = p__6385;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6386,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6386,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),params));
});
zframes.routing.to_hash = (function zframes$routing$to_hash(opts){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(opts)),"?",zframes.routing.to_query_params(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts))].join('');
});
zframes.routing.make_fragment = (function zframes$routing$make_fragment(params){
var opts = zframes.routing.parse_fragment(window.location.hash);
return zframes.routing.to_hash(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$params,params));
});
re_frame.core.reg_fx(cljs.core.cst$kw$route_DASH_map_SLASH_set_DASH_params,(function (params){
var opts = zframes.routing.parse_fragment(window.location.hash);
var value = zframes.routing.to_hash(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$params,params));
return (window.location["hash"] = value);
}));
