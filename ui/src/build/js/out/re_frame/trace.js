// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__5618){
var map__5619 = p__5618;
var map__5619__$1 = (((((!((map__5619 == null))))?(((((map__5619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5619):map__5619);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5619__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5619__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5619__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5619__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__5621_5645 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__5622_5646 = null;
var count__5623_5647 = (0);
var i__5624_5648 = (0);
while(true){
if((i__5624_5648 < count__5623_5647)){
var vec__5635_5649 = chunk__5622_5646.cljs$core$IIndexed$_nth$arity$2(null,i__5624_5648);
var k_5650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5635_5649,(0),null);
var cb_5651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5635_5649,(1),null);
try{var G__5639_5652 = cljs.core.deref(re_frame.trace.traces);
(cb_5651.cljs$core$IFn$_invoke$arity$1 ? cb_5651.cljs$core$IFn$_invoke$arity$1(G__5639_5652) : cb_5651.call(null,G__5639_5652));
}catch (e5638){var e_5653 = e5638;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_5650,"while storing",cljs.core.deref(re_frame.trace.traces),e_5653], 0));
}

var G__5654 = seq__5621_5645;
var G__5655 = chunk__5622_5646;
var G__5656 = count__5623_5647;
var G__5657 = (i__5624_5648 + (1));
seq__5621_5645 = G__5654;
chunk__5622_5646 = G__5655;
count__5623_5647 = G__5656;
i__5624_5648 = G__5657;
continue;
} else {
var temp__5735__auto___5658 = cljs.core.seq(seq__5621_5645);
if(temp__5735__auto___5658){
var seq__5621_5659__$1 = temp__5735__auto___5658;
if(cljs.core.chunked_seq_QMARK_(seq__5621_5659__$1)){
var c__4556__auto___5660 = cljs.core.chunk_first(seq__5621_5659__$1);
var G__5661 = cljs.core.chunk_rest(seq__5621_5659__$1);
var G__5662 = c__4556__auto___5660;
var G__5663 = cljs.core.count(c__4556__auto___5660);
var G__5664 = (0);
seq__5621_5645 = G__5661;
chunk__5622_5646 = G__5662;
count__5623_5647 = G__5663;
i__5624_5648 = G__5664;
continue;
} else {
var vec__5640_5665 = cljs.core.first(seq__5621_5659__$1);
var k_5666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5640_5665,(0),null);
var cb_5667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5640_5665,(1),null);
try{var G__5644_5668 = cljs.core.deref(re_frame.trace.traces);
(cb_5667.cljs$core$IFn$_invoke$arity$1 ? cb_5667.cljs$core$IFn$_invoke$arity$1(G__5644_5668) : cb_5667.call(null,G__5644_5668));
}catch (e5643){var e_5669 = e5643;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_5666,"while storing",cljs.core.deref(re_frame.trace.traces),e_5669], 0));
}

var G__5670 = cljs.core.next(seq__5621_5659__$1);
var G__5671 = null;
var G__5672 = (0);
var G__5673 = (0);
seq__5621_5645 = G__5670;
chunk__5622_5646 = G__5671;
count__5623_5647 = G__5672;
i__5624_5648 = G__5673;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
