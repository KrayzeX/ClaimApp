// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('zframes.window_location');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
zframes.window_location.url_decode = (function zframes$window_location$url_decode(x){
return decodeURIComponent(x);
});
zframes.window_location.url_encode = (function zframes$window_location$url_encode(x){
return encodeURIComponent(x);
});
zframes.window_location.parse_querystring = (function zframes$window_location$parse_querystring(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,kv){
var vec__6222 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(kv,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6222,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6222,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),((clojure.string.ends_with_QMARK_(k,"*"))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(v,/,/)):zframes.window_location.url_decode(v)
));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/^\?/,""),/&/));
});
zframes.window_location.gen_query_string = (function zframes$window_location$gen_query_string(params){
return ["?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6229){
var vec__6230 = p__6229;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6230,(1),null);
if(cljs.core.set_QMARK_(v)){
return [cljs.core.name(k),"=",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",v)].join('');
} else {
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zframes.window_location.url_encode(v))].join('');

}
}),params))].join('');
});
zframes.window_location.get_location = (function zframes$window_location$get_location(){
var loc = window.location;
var href = loc.href;
var hash = clojure.string.replace((function (){var or__4126__auto__ = loc.hash;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),/^#/,"");
var hash_params = (function (){try{return zframes.window_location.parse_querystring(hash);
}catch (e6233){if((e6233 instanceof Error)){
var e = e6233;
return console.log(e);
} else {
throw e6233;

}
}})();
var search = loc.search;
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$hash,cljs.core.cst$kw$protocol,cljs.core.cst$kw$hash_DASH_params,cljs.core.cst$kw$hostname,cljs.core.cst$kw$search,cljs.core.cst$kw$host,cljs.core.cst$kw$url,cljs.core.cst$kw$origin,cljs.core.cst$kw$query_DASH_string,cljs.core.cst$kw$href],[hash,loc.protocol,hash_params,loc.hostname,search,loc.host,cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(href,/#/)),loc.origin,zframes.window_location.parse_querystring(search),href]);
});
zframes.window_location.window_location = (function zframes$window_location$window_location(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6236 = arguments.length;
var i__4737__auto___6237 = (0);
while(true){
if((i__4737__auto___6237 < len__4736__auto___6236)){
args__4742__auto__.push((arguments[i__4737__auto___6237]));

var G__6238 = (i__4737__auto___6237 + (1));
i__4737__auto___6237 = G__6238;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zframes.window_location.window_location.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zframes.window_location.window_location.cljs$core$IFn$_invoke$arity$variadic = (function (coef,opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coef,cljs.core.cst$kw$location,zframes.window_location.get_location());
}));

(zframes.window_location.window_location.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zframes.window_location.window_location.cljs$lang$applyTo = (function (seq6234){
var G__6235 = cljs.core.first(seq6234);
var seq6234__$1 = cljs.core.next(seq6234);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6235,seq6234__$1);
}));

re_frame.core.reg_cofx(cljs.core.cst$kw$window_DASH_location,zframes.window_location.window_location);
