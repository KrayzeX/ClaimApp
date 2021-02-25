// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('zframes.xhr');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('re_frame.db');
goog.require('zframes.redirect');
goog.require('re_frame.core');
zframes.xhr.sub_query_by_spaces = (function zframes$xhr$sub_query_by_spaces(k,s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/)));
});
zframes.xhr.to_query = (function zframes$xhr$to_query(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8625){
var vec__8626 = p__8625;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8626,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8626,(1),null);
if(cljs.core.vector_QMARK_(v)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (vv){
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vv)].join('');
}),v);
} else {
if(cljs.core.set_QMARK_(v)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name(k),"=",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",v)].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')], null);

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0)));
});
zframes.xhr.base_url = (function zframes$xhr$base_url(db,url){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$base_DASH_url], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
zframes.xhr.make_form_data = (function zframes$xhr$make_form_data(files){
var form_data = (new FormData());
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function zframes$xhr$make_form_data_$_iter__8629(s__8630){
return (new cljs.core.LazySeq(null,(function (){
var s__8630__$1 = s__8630;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8630__$1);
if(temp__5735__auto__){
var s__8630__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8630__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8630__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8632 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8631 = (0);
while(true){
if((i__8631 < size__4528__auto__)){
var vec__8633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__8631);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8633,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8633,(1),null);
cljs.core.chunk_append(b__8632,form_data.append(["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),file,["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

var G__8639 = (i__8631 + (1));
i__8631 = G__8639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8632),zframes$xhr$make_form_data_$_iter__8629(cljs.core.chunk_rest(s__8630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8632),null);
}
} else {
var vec__8636 = cljs.core.first(s__8630__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8636,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8636,(1),null);
return cljs.core.cons(form_data.append(["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),file,["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),zframes$xhr$make_form_data_$_iter__8629(cljs.core.rest(s__8630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,files));
})());

return form_data;
});
if((typeof zframes !== 'undefined') && (typeof zframes.xhr !== 'undefined') && (typeof zframes.xhr.abort_controller_cache !== 'undefined')){
} else {
zframes.xhr.abort_controller_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
zframes.xhr.get_abort_controller = (function zframes$xhr$get_abort_controller(req_id){
var temp__5735__auto___8640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zframes.xhr.abort_controller_cache),req_id);
if(cljs.core.truth_(temp__5735__auto___8640)){
var ctrl_8641 = temp__5735__auto___8640;
ctrl_8641.abort();
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zframes.xhr.abort_controller_cache,cljs.core.assoc,req_id,(new AbortController()));

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zframes.xhr.abort_controller_cache),req_id);
});
zframes.xhr._STAR_json_fetch = (function zframes$xhr$_STAR_json_fetch(p__8643){
var map__8644 = p__8643;
var map__8644__$1 = (((((!((map__8644 == null))))?(((((map__8644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8644):map__8644);
var opts = map__8644__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,cljs.core.cst$kw$uri);
var is_fetching_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,cljs.core.cst$kw$is_DASH_fetching_DASH_path);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,cljs.core.cst$kw$format);
var req_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,cljs.core.cst$kw$req_DASH_id);
var cookies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,cljs.core.cst$kw$cookies);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,cljs.core.cst$kw$headers);
var success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,cljs.core.cst$kw$success);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,cljs.core.cst$kw$error);
var map__8646 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$config], null));
var map__8646__$1 = (((((!((map__8646 == null))))?(((((map__8646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8646):map__8646);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8646__$1,cljs.core.cst$kw$token);
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8646__$1,cljs.core.cst$kw$base_DASH_url);
var x_correlation_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8646__$1,cljs.core.cst$kw$x_DASH_correlation_DASH_id);
var screen = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$match], null));
var abort_controller = (cljs.core.truth_(req_id)?zframes.xhr.get_abort_controller(req_id):null);
var fmt = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, ["json","application/json","yaml","text/yaml"], null),format);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "application/json";
}
})();
var x_audit = (function (){var G__8648 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$global_DASH_context_SLASH_organization,cljs.core.cst$kw$main_DASH_organization,cljs.core.cst$kw$id], null));
var G__8648__$1 = (((G__8648 == null))?null:cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$morg_DASH_id],[G__8648]));
var G__8648__$2 = (((G__8648__$1 == null))?null:cljs.core.clj__GT_js(G__8648__$1));
var G__8648__$3 = (((G__8648__$2 == null))?null:JSON.stringify(G__8648__$2));
if((G__8648__$3 == null)){
return null;
} else {
return btoa(G__8648__$3);
}
})();
var headers__$1 = (function (){var G__8649 = new cljs.core.PersistentArrayMap(null, 3, ["accept",fmt,"x-correlation-id",x_correlation_id,"authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
var G__8649__$1 = (cljs.core.truth_(x_audit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8649,"x-audit",x_audit):G__8649);
var G__8649__$2 = (((((token == null)) || (clojure.string.blank_QMARK_(token))))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8649__$1,"authorization"):G__8649__$1);
var G__8649__$3 = (((cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(opts) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8649__$2,"Content-Type","application/json"):G__8649__$2);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__8649__$3,(function (){var or__4126__auto__ = headers;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));

})();
var fetch_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$method,"get",cljs.core.cst$kw$mode,"cors",cljs.core.cst$kw$credentials,"same-origin"], null),(cljs.core.truth_(abort_controller)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,abort_controller.signal], null):null),opts], 0)),cljs.core.cst$kw$uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,cljs.core.cst$kw$success,cljs.core.cst$kw$error,cljs.core.cst$kw$params,cljs.core.cst$kw$files], 0)),cljs.core.cst$kw$headers,headers__$1);
var fetch_opts__$1 = (function (){var G__8650 = fetch_opts;
var G__8650__$1 = (cljs.core.truth_(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8650,cljs.core.cst$kw$body,((typeof cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(opts) === 'string')?cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(opts):JSON.stringify(cljs.core.clj__GT_js(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(opts))))):G__8650);
if(cljs.core.truth_(cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8650__$1,cljs.core.cst$kw$body,zframes.xhr.make_form_data(cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return G__8650__$1;
}
})();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
if(cljs.core.truth_(is_fetching_path)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$xhr_SLASH_fetch_DASH_start,is_fetching_path], null));
} else {
}

return fetch([url,(cljs.core.truth_(params)?["?",zframes.xhr.to_query(params)].join(''):null)].join(''),cljs.core.clj__GT_js(fetch_opts__$1)).then((function (resp){
if(cljs.core.truth_(is_fetching_path)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$xhr_SLASH_fetch_DASH_end,is_fetching_path], null));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((500),resp.status)){
throw resp;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$dont_DASH_parse.cljs$core$IFn$_invoke$arity$1(opts))){
return resp.text().then((function (doc){
var e = (((resp.status <= (299)))?success:error);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(e),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$data,doc], null)], 0))], null));
}),(function (doc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error:",doc], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$data,doc], null)], 0))], null));
}));
} else {
return resp.json().then((function (doc){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(doc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__8642_SHARP_){
if(cljs.core.truth_(p1__8642_SHARP_)){
return re_frame.core.dispatch(p1__8642_SHARP_);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(req_id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_done,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$data,data,cljs.core.cst$kw$status,resp.status], null)], null):null),(function (){var temp__5735__auto__ = (((resp.status < (299)))?success:error);
if(cljs.core.truth_(temp__5735__auto__)){
var e = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$data,data,cljs.core.cst$kw$status,resp.status], null),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(e)], null);
} else {
return null;
}
})(),(((resp.status > (299)))?(function (){var errors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expression.cljs$core$IFn$_invoke$arity$1(e))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$diagnostics.cljs$core$IFn$_invoke$arity$1(e))].join('');
}),cljs.core.cst$kw$issue.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(cljs.core.cst$kw$flash_DASH_disabled.cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash_SLASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$msg,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,resp.status], null)," ",resp.statusText], null),(function (){var temp__5733__auto__ = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5733__auto__)){
var msg = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,msg], null);
} else {
var G__8651 = resp.status;
switch (G__8651) {
case (404):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 ",url], null);

break;
case (409):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0441 \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
return null;

}
}
})(),(((((!(cljs.core.empty_QMARK_(errors)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((422),resp.status))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4529__auto__ = (function zframes$xhr$_STAR_json_fetch_$_iter__8652(s__8653){
return (new cljs.core.LazySeq(null,(function (){
var s__8653__$1 = s__8653;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8653__$1);
if(temp__5735__auto__){
var s__8653__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8653__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8653__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8655 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8654 = (0);
while(true){
if((i__8654 < size__4528__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__8654);
cljs.core.chunk_append(b__8655,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,e], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,e], null)));

var G__8658 = (i__8654 + (1));
i__8654 = G__8658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8655),zframes$xhr$_STAR_json_fetch_$_iter__8652(cljs.core.chunk_rest(s__8653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8655),null);
}
} else {
var e = cljs.core.first(s__8653__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,e], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,e], null)),zframes$xhr$_STAR_json_fetch_$_iter__8652(cljs.core.rest(s__8653__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(errors);
})()], null):null)], null)], null)], null);
}
})():null)], null));
}),(function (doc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error:",doc], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$data,doc], null)], 0))], null));
}));
}
}
})).catch((function (err){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(err.name,"AbortError")){
return null;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$flash_DASH_disabled.cljs$core$IFn$_invoke$arity$1(opts))){
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash_SLASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$msg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,err.status], null)," ",err.statusText], null),(function (){var G__8656 = err.status;
switch (G__8656) {
case (500):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"], null);

break;
case (404):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"\u041D\u0435\u043E\u043F\u043E\u0437\u043D\u0430\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430"], null);

}
})()], null)], null)], null));
}

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(error),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$error,err], null)], 0))], null));
}
}));
});
zframes.xhr.json_fetch = (function zframes$xhr$json_fetch(opts){
if(cljs.core.vector_QMARK_(opts)){
var seq__8660 = cljs.core.seq(opts);
var chunk__8661 = null;
var count__8662 = (0);
var i__8663 = (0);
while(true){
if((i__8663 < count__8662)){
var o = chunk__8661.cljs$core$IIndexed$_nth$arity$2(null,i__8663);
zframes.xhr._STAR_json_fetch(o);


var G__8664 = seq__8660;
var G__8665 = chunk__8661;
var G__8666 = count__8662;
var G__8667 = (i__8663 + (1));
seq__8660 = G__8664;
chunk__8661 = G__8665;
count__8662 = G__8666;
i__8663 = G__8667;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__8660);
if(temp__5735__auto__){
var seq__8660__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8660__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__8660__$1);
var G__8668 = cljs.core.chunk_rest(seq__8660__$1);
var G__8669 = c__4556__auto__;
var G__8670 = cljs.core.count(c__4556__auto__);
var G__8671 = (0);
seq__8660 = G__8668;
chunk__8661 = G__8669;
count__8662 = G__8670;
i__8663 = G__8671;
continue;
} else {
var o = cljs.core.first(seq__8660__$1);
zframes.xhr._STAR_json_fetch(o);


var G__8672 = cljs.core.next(seq__8660__$1);
var G__8673 = null;
var G__8674 = (0);
var G__8675 = (0);
seq__8660 = G__8672;
chunk__8661 = G__8673;
count__8662 = G__8674;
i__8663 = G__8675;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return zframes.xhr._STAR_json_fetch(opts);
}
});
re_frame.core.reg_fx(cljs.core.cst$kw$zframes$xhr_SLASH_json_DASH_fetch,zframes.xhr.json_fetch);
re_frame.core.reg_fx(cljs.core.cst$kw$json_SLASH_fetch,zframes.xhr.json_fetch);
re_frame.core.reg_fx(cljs.core.cst$kw$xhr_SLASH_fetch,(function (p1__8676_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_fetch,p1__8676_SHARP_], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$xhr_SLASH_fetch,(function (p__8677,p__8678){
var map__8679 = p__8677;
var map__8679__$1 = (((((!((map__8679 == null))))?(((((map__8679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8679):map__8679);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8679__$1,cljs.core.cst$kw$db);
var vec__8680 = p__8678;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8680,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8680,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,opt){
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_id.cljs$core$IFn$_invoke$arity$1(opt),cljs.core.cst$kw$loading], null),true);
}),db,((cljs.core.vector_QMARK_(opts))?opts:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts], null))),cljs.core.cst$kw$json_SLASH_fetch,opts], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$xhr_SLASH_done,(function (p__8684,p__8685){
var map__8686 = p__8684;
var map__8686__$1 = (((((!((map__8686 == null))))?(((((map__8686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8686):map__8686);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8686__$1,cljs.core.cst$kw$db);
var vec__8687 = p__8685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(0),null);
var map__8690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(1),null);
var map__8690__$1 = (((((!((map__8690 == null))))?(((((map__8690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8690):map__8690);
var resp = map__8690__$1;
var map__8691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8690__$1,cljs.core.cst$kw$request);
var map__8691__$1 = (((((!((map__8691 == null))))?(((((map__8691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8691):map__8691);
var req = map__8691__$1;
var req_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8691__$1,cljs.core.cst$kw$req_DASH_id);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$req,req_id], null),resp)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$xhr_SLASH_remove_DASH_response,(function (p__8695,p__8696){
var map__8697 = p__8695;
var map__8697__$1 = (((((!((map__8697 == null))))?(((((map__8697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8697):map__8697);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8697__$1,cljs.core.cst$kw$db);
var vec__8698 = p__8696;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8698,(0),null);
var req_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8698,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$req], null),cljs.core.dissoc,req_id)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xhr_SLASH_response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__8702){
var vec__8703 = p__8702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8703,(0),null);
var req_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8703,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$req,req_id], null));
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$xhr_SLASH_redirect,(function (_,p__8706){
var vec__8707 = p__8706;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8707,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8707,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8707,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,opts], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$xhr_SLASH_fetch_DASH_start,(function (db,p__8710){
var vec__8711 = p__8710;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8711,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8711,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,path,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$xhr_SLASH_fetch_DASH_end,(function (db,p__8714){
var vec__8715 = p__8714;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8715,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8715,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,path,false);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xhr_SLASH_config,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr,cljs.core.cst$kw$config], null));
})], 0));
