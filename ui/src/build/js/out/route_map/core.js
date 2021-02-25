// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('route_map.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
route_map.core.pathify = (function route_map$core$pathify(path){
return cljs.core.filterv((function (p1__6241_SHARP_){
return (!(clojure.string.blank_QMARK_(p1__6241_SHARP_)));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
});
route_map.core.is_glob_QMARK_ = (function route_map$core$is_glob_QMARK_(k){
return clojure.string.ends_with_QMARK_(cljs.core.name(k),"*");
});
route_map.core.get_params = (function route_map$core$get_params(node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6242){
var vec__6243 = p__6242;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6243,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6243,(1),null);
return cljs.core.vector_QMARK_(k);
}),node);
} else {
return null;
}
});
route_map.core.get_param = (function route_map$core$get_param(node){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6246){
var vec__6247 = p__6246;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6247,(1),null);
return cljs.core.vector_QMARK_(k);
}),node));
});
route_map.core.fn_param_QMARK_ = (function route_map$core$fn_param_QMARK_(k){
if(cljs.core.vector_QMARK_(k)){
var f = cljs.core.first(k);
return (((!((f instanceof cljs.core.Keyword)))) && (cljs.core.fn_QMARK_(f)));
} else {
return false;
}
});
route_map.core.match_fn_params = (function route_map$core$match_fn_params(node,x){
if(cljs.core.map_QMARK_(node)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6250){
var vec__6251 = p__6250;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6251,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6251,(1),null);
var temp__5733__auto__ = (function (){var fexpr__6254 = cljs.core.first(k);
return (fexpr__6254.cljs$core$IFn$_invoke$arity$1 ? fexpr__6254.cljs$core$IFn$_invoke$arity$1(x) : fexpr__6254.call(null,x));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,v], null));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6255){
var vec__6256 = p__6255;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6256,(1),null);
return route_map.core.fn_param_QMARK_(k);
}),node)));
} else {
return null;
}
});
route_map.core._match = (function route_map$core$_match(acc,node,p__6259,params,parents,wgt){
var vec__6260 = p__6259;
var seq__6261 = cljs.core.seq(vec__6260);
var first__6262 = cljs.core.first(seq__6261);
var seq__6261__$1 = cljs.core.next(seq__6261);
var x = first__6262;
var rpth = seq__6261__$1;
var pth = vec__6260;
if(cljs.core.empty_QMARK_(pth)){
if(cljs.core.truth_(node)){
if(((cljs.core.map_QMARK_(node)) && (cljs.core.contains_QMARK_(node,cljs.core.cst$kw$_DOT_)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parents,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$params,params)),cljs.core.cst$kw$match,cljs.core.cst$kw$_DOT_.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$w,wgt,cljs.core.cst$kw$params,params], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parents,parents,cljs.core.cst$kw$match,node,cljs.core.cst$kw$w,wgt,cljs.core.cst$kw$params,params], null));
}
} else {
return acc;
}
} else {
var node__$1 = ((cljs.core.var_QMARK_(node))?cljs.core.deref(node):node);
var pnode = ((cljs.core.map_QMARK_(node__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,cljs.core.cst$kw$params,params):false);
var acc__$1 = (function (){var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node__$1,x);
if(cljs.core.truth_(temp__5733__auto__)){
var branch = temp__5733__auto__;
var G__6263 = acc;
var G__6264 = branch;
var G__6265 = rpth;
var G__6266 = params;
var G__6267 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6268 = (wgt + (10));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6263,G__6264,G__6265,G__6266,G__6267,G__6268) : route_map.core._match.call(null,G__6263,G__6264,G__6265,G__6266,G__6267,G__6268));
} else {
return acc;
}
})();
var acc__$2 = (((x instanceof cljs.core.Keyword))?acc__$1:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$2,p__6269){
var vec__6270 = p__6269;
var vec__6273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6270,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6273,(0),null);
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6270,(1),null);
if(cljs.core.fn_QMARK_(k)){
var temp__5733__auto__ = route_map.core.match_fn_params(node__$1,x);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__6276 = temp__5733__auto__;
var fparams = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6276,(0),null);
var branch__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6276,(1),null);
var G__6279 = acc__$2;
var G__6280 = branch__$1;
var G__6281 = rpth;
var G__6282 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,fparams], 0));
var G__6283 = parents;
var G__6284 = (wgt + (10));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6279,G__6280,G__6281,G__6282,G__6283,G__6284) : route_map.core._match.call(null,G__6279,G__6280,G__6281,G__6282,G__6283,G__6284));
} else {
return acc__$2;
}
} else {
if(route_map.core.is_glob_QMARK_(k)){
if((cljs.core.last(pth) instanceof cljs.core.Keyword)){
var G__6285 = acc__$2;
var G__6286 = branch;
var G__6287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(pth)], null);
var G__6288 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(pth)));
var G__6289 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6290 = (wgt + (1));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6285,G__6286,G__6287,G__6288,G__6289,G__6290) : route_map.core._match.call(null,G__6285,G__6286,G__6287,G__6288,G__6289,G__6290));
} else {
var G__6291 = acc__$2;
var G__6292 = branch;
var G__6293 = cljs.core.PersistentVector.EMPTY;
var G__6294 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,pth));
var G__6295 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6296 = (wgt + (1));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6291,G__6292,G__6293,G__6294,G__6295,G__6296) : route_map.core._match.call(null,G__6291,G__6292,G__6293,G__6294,G__6295,G__6296));
}
} else {
if(cljs.core.truth_((function (){var temp__5735__auto__ = cljs.core.cst$kw$route_DASH_map_SLASH_enum.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(temp__5735__auto__)){
var opts = temp__5735__auto__;
return cljs.core.set_QMARK_(opts);
} else {
return null;
}
})())){
var opts = cljs.core.cst$kw$route_DASH_map_SLASH_enum.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.contains_QMARK_(opts,x)){
var G__6297 = acc__$2;
var G__6298 = branch;
var G__6299 = rpth;
var G__6300 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__6301 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6302 = (wgt + (5));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6297,G__6298,G__6299,G__6300,G__6301,G__6302) : route_map.core._match.call(null,G__6297,G__6298,G__6299,G__6300,G__6301,G__6302));
} else {
return acc__$2;
}
} else {
if(cljs.core.truth_((function (){var temp__5735__auto__ = cljs.core.cst$kw$route_DASH_map_SLASH_regexp.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(temp__5735__auto__)){
var opts = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(opts),java.util.regex.Pattern);
} else {
return null;
}
})())){
var opts = cljs.core.cst$kw$route_DASH_map_SLASH_regexp.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(cljs.core.re_find(opts,x))){
var G__6303 = acc__$2;
var G__6304 = branch;
var G__6305 = rpth;
var G__6306 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__6307 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6308 = (wgt + (4));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6303,G__6304,G__6305,G__6306,G__6307,G__6308) : route_map.core._match.call(null,G__6303,G__6304,G__6305,G__6306,G__6307,G__6308));
} else {
return acc__$2;
}
} else {
var G__6309 = acc__$2;
var G__6310 = branch;
var G__6311 = rpth;
var G__6312 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__6313 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6314 = (wgt + (2));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6309,G__6310,G__6311,G__6312,G__6313,G__6314) : route_map.core._match.call(null,G__6309,G__6310,G__6311,G__6312,G__6313,G__6314));

}
}
}
}
}),acc__$1,route_map.core.get_params(node__$1)));
return acc__$2;
}
});
/**
 * path [:get "/your/path"] or just "/your/path"
 */
route_map.core.match = (function route_map$core$match(path,routes){
var path__$1 = ((cljs.core.vector_QMARK_(path))?(function (){var vec__6315 = path;
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6315,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6315,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(route_map.core.pathify(url),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(meth))));
})():route_map.core.pathify(path));
var result = route_map.core._match(cljs.core.PersistentVector.EMPTY,routes,path__$1,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,(0));
return cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$w,result));
});
route_map.core.wrap_route_map = (function route_map$core$wrap_route_map(h,routes){

return (function (p__6318){
var map__6319 = p__6318;
var map__6319__$1 = (((((!((map__6319 == null))))?(((((map__6319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6319):map__6319);
var req = map__6319__$1;
var meth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6319__$1,cljs.core.cst$kw$request_DASH_method);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6319__$1,cljs.core.cst$kw$uri);
var temp__5733__auto__ = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth,uri], null),routes);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var G__6321 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$route_DASH_match,match);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__6321) : h.call(null,G__6321));
} else {
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(req) : h.call(null,req));
}
});
});
route_map.core.first_not_nil = (function route_map$core$first_not_nil(coll){
var not_nils = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6322_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__6322_SHARP_);
}),coll);
var all_nils = (not_nils == null);
if(all_nils){
return null;
} else {
return cljs.core.first(not_nils);
}
});
route_map.core.get_static_paths = (function route_map$core$get_static_paths(routes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6323_SHARP_){
return cljs.core.first(p1__6323_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6324_SHARP_){
var vec__6325 = p1__6324_SHARP_;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6325,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6325,(1),null);
return typeof k === 'string';
}),routes));
});
route_map.core.get_ways = (function route_map$core$get_ways(routes){
var params = cljs.core.first(route_map.core.get_param(routes));
var static_paths = route_map.core.get_static_paths(routes);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6328_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__6328_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(params,static_paths));
});
route_map.core.find_url = (function route_map$core$find_url(routes,name,auto_name,params,path){
var path_found = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$$name.cljs$core$IFn$_invoke$arity$1(routes))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(auto_name))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(params))))));
if(path_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",path)){
return "/";
} else {
return path;
}
} else {
return route_map.core.first_not_nil(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6329_SHARP_){
var vec__6330 = ((typeof p1__6329_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6329_SHARP_,params,cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,p1__6329_SHARP_),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",auto_name))?p1__6329_SHARP_:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(auto_name),"-",p1__6329_SHARP_].join(''))], null):(((p1__6329_SHARP_ instanceof cljs.core.Keyword))?((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__6329_SHARP_),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,p1__6329_SHARP_),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__6329_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6329_SHARP_], null)):null),auto_name], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(params),cljs.core.rest(params),cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6329_SHARP_], null)),auto_name], null)):null));
var next_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330,(0),null);
var next_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330,(1),null);
var next_routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330,(2),null);
var next_auto_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330,(3),null);
var G__6333 = ((cljs.core.var_QMARK_(next_routes))?cljs.core.deref(next_routes):next_routes);
var G__6334 = name;
var G__6335 = next_auto_name;
var G__6336 = next_params;
var G__6337 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_path)].join('');
return (route_map.core.find_url.cljs$core$IFn$_invoke$arity$5 ? route_map.core.find_url.cljs$core$IFn$_invoke$arity$5(G__6333,G__6334,G__6335,G__6336,G__6337) : route_map.core.find_url.call(null,G__6333,G__6334,G__6335,G__6336,G__6337));
}),route_map.core.get_ways(routes)));
}
});
route_map.core.url = (function route_map$core$url(var_args){
var G__6339 = arguments.length;
switch (G__6339) {
case 2:
return route_map.core.url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return route_map.core.url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(route_map.core.url.cljs$core$IFn$_invoke$arity$2 = (function (routes,name){
return route_map.core.url.cljs$core$IFn$_invoke$arity$3(routes,name,cljs.core.PersistentVector.EMPTY);
}));

(route_map.core.url.cljs$core$IFn$_invoke$arity$3 = (function (routes,name,params){
return route_map.core.find_url(routes,name,"",params,"");
}));

(route_map.core.url.cljs$lang$maxFixedArity = 3);

