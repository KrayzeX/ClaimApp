// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.settings');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
re_frame.settings.defaults = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$loaded_QMARK_,false,cljs.core.cst$kw$global_DASH_interceptors,re_frame.interop.empty_queue], null);
re_frame.settings.store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_frame.settings.defaults);
re_frame.interop.on_load((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.settings.store,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$loaded_QMARK_,true);
}));
}));
re_frame.settings.loaded_QMARK_ = (function re_frame$settings$loaded_QMARK_(){
return cljs.core.cst$kw$loaded_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.settings.store));
});
re_frame.settings.reg_global_interceptor = (function re_frame$settings$reg_global_interceptor(p__5715){
var map__5716 = p__5715;
var map__5716__$1 = (((((!((map__5716 == null))))?(((((map__5716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5716):map__5716);
var interceptor = map__5716__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5716__$1,cljs.core.cst$kw$id);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.settings.store,cljs.core.update,cljs.core.cst$kw$global_DASH_interceptors,(function (global_interceptors){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,global_interceptors);
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_(((cljs.core.not(re_frame.settings.loaded_QMARK_()))?cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),ids):false))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: duplicate global interceptor id: ",id], 0));
} else {
}
} else {
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(global_interceptors,interceptor);
}));
});
re_frame.settings.get_global_interceptors = (function re_frame$settings$get_global_interceptors(){
return cljs.core.cst$kw$global_DASH_interceptors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.settings.store));
});
re_frame.settings.clear_global_interceptors = (function re_frame$settings$clear_global_interceptors(var_args){
var G__5720 = arguments.length;
switch (G__5720) {
case 0:
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.settings.store,cljs.core.assoc,cljs.core.cst$kw$global_DASH_interceptors,re_frame.interop.empty_queue);
}));

(re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1 = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.settings.store,cljs.core.update,cljs.core.cst$kw$global_DASH_interceptors,(function (global_interceptors){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_frame.interop.empty_queue,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__5718_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__5718_SHARP_));
}),global_interceptors));
}));
}));

(re_frame.settings.clear_global_interceptors.cljs$lang$maxFixedArity = 1);

