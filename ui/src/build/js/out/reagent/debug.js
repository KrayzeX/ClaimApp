// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__4527__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__4527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4528__i = 0, G__4528__a = new Array(arguments.length -  0);
while (G__4528__i < G__4528__a.length) {G__4528__a[G__4528__i] = arguments[G__4528__i + 0]; ++G__4528__i;}
  args = new cljs.core.IndexedSeq(G__4528__a,0,null);
} 
return G__4527__delegate.call(this,args);};
G__4527.cljs$lang$maxFixedArity = 0;
G__4527.cljs$lang$applyTo = (function (arglist__4529){
var args = cljs.core.seq(arglist__4529);
return G__4527__delegate(args);
});
G__4527.cljs$core$IFn$_invoke$arity$variadic = G__4527__delegate;
return G__4527;
})()
);

(o.error = (function() { 
var G__4530__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__4530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4531__i = 0, G__4531__a = new Array(arguments.length -  0);
while (G__4531__i < G__4531__a.length) {G__4531__a[G__4531__i] = arguments[G__4531__i + 0]; ++G__4531__i;}
  args = new cljs.core.IndexedSeq(G__4531__a,0,null);
} 
return G__4530__delegate.call(this,args);};
G__4530.cljs$lang$maxFixedArity = 0;
G__4530.cljs$lang$applyTo = (function (arglist__4532){
var args = cljs.core.seq(arglist__4532);
return G__4530__delegate(args);
});
G__4530.cljs$core$IFn$_invoke$arity$variadic = G__4530__delegate;
return G__4530;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
