// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__5810 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__5811 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__5811);

try{try{var seq__5812 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__5813 = null;
var count__5814 = (0);
var i__5815 = (0);
while(true){
if((i__5815 < count__5814)){
var vec__5822 = chunk__5813.cljs$core$IIndexed$_nth$arity$2(null,i__5815);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5822,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5822,(1),null);
var temp__5733__auto___5844 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___5844)){
var effect_fn_5845 = temp__5733__auto___5844;
(effect_fn_5845.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5845.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5845.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5846 = seq__5812;
var G__5847 = chunk__5813;
var G__5848 = count__5814;
var G__5849 = (i__5815 + (1));
seq__5812 = G__5846;
chunk__5813 = G__5847;
count__5814 = G__5848;
i__5815 = G__5849;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5812);
if(temp__5735__auto__){
var seq__5812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5812__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__5812__$1);
var G__5850 = cljs.core.chunk_rest(seq__5812__$1);
var G__5851 = c__4556__auto__;
var G__5852 = cljs.core.count(c__4556__auto__);
var G__5853 = (0);
seq__5812 = G__5850;
chunk__5813 = G__5851;
count__5814 = G__5852;
i__5815 = G__5853;
continue;
} else {
var vec__5825 = cljs.core.first(seq__5812__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5825,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5825,(1),null);
var temp__5733__auto___5854 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___5854)){
var effect_fn_5855 = temp__5733__auto___5854;
(effect_fn_5855.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5855.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5855.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5856 = cljs.core.next(seq__5812__$1);
var G__5857 = null;
var G__5858 = (0);
var G__5859 = (0);
seq__5812 = G__5856;
chunk__5813 = G__5857;
count__5814 = G__5858;
i__5815 = G__5859;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__5596__auto___5860 = re_frame.interop.now();
var duration__5597__auto___5861 = (end__5596__auto___5860 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__5597__auto___5861,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__5596__auto___5860);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__5810);
}} else {
var seq__5828 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__5829 = null;
var count__5830 = (0);
var i__5831 = (0);
while(true){
if((i__5831 < count__5830)){
var vec__5838 = chunk__5829.cljs$core$IIndexed$_nth$arity$2(null,i__5831);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5838,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5838,(1),null);
var temp__5733__auto___5862 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___5862)){
var effect_fn_5863 = temp__5733__auto___5862;
(effect_fn_5863.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5863.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5863.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5864 = seq__5828;
var G__5865 = chunk__5829;
var G__5866 = count__5830;
var G__5867 = (i__5831 + (1));
seq__5828 = G__5864;
chunk__5829 = G__5865;
count__5830 = G__5866;
i__5831 = G__5867;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5828);
if(temp__5735__auto__){
var seq__5828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5828__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__5828__$1);
var G__5868 = cljs.core.chunk_rest(seq__5828__$1);
var G__5869 = c__4556__auto__;
var G__5870 = cljs.core.count(c__4556__auto__);
var G__5871 = (0);
seq__5828 = G__5868;
chunk__5829 = G__5869;
count__5830 = G__5870;
i__5831 = G__5871;
continue;
} else {
var vec__5841 = cljs.core.first(seq__5828__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5841,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5841,(1),null);
var temp__5733__auto___5872 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___5872)){
var effect_fn_5873 = temp__5733__auto___5872;
(effect_fn_5873.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5873.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5873.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5874 = cljs.core.next(seq__5828__$1);
var G__5875 = null;
var G__5876 = (0);
var G__5877 = (0);
seq__5828 = G__5874;
chunk__5829 = G__5875;
count__5830 = G__5876;
i__5831 = G__5877;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__5878 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__5879 = null;
var count__5880 = (0);
var i__5881 = (0);
while(true){
if((i__5881 < count__5880)){
var map__5886 = chunk__5879.cljs$core$IIndexed$_nth$arity$2(null,i__5881);
var map__5886__$1 = (((((!((map__5886 == null))))?(((((map__5886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5886):map__5886);
var effect = map__5886__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5886__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5886__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__5878,chunk__5879,count__5880,i__5881,map__5886,map__5886__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__5878,chunk__5879,count__5880,i__5881,map__5886,map__5886__$1,effect,ms,dispatch))
,ms);
}


var G__5890 = seq__5878;
var G__5891 = chunk__5879;
var G__5892 = count__5880;
var G__5893 = (i__5881 + (1));
seq__5878 = G__5890;
chunk__5879 = G__5891;
count__5880 = G__5892;
i__5881 = G__5893;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5878);
if(temp__5735__auto__){
var seq__5878__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5878__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__5878__$1);
var G__5894 = cljs.core.chunk_rest(seq__5878__$1);
var G__5895 = c__4556__auto__;
var G__5896 = cljs.core.count(c__4556__auto__);
var G__5897 = (0);
seq__5878 = G__5894;
chunk__5879 = G__5895;
count__5880 = G__5896;
i__5881 = G__5897;
continue;
} else {
var map__5888 = cljs.core.first(seq__5878__$1);
var map__5888__$1 = (((((!((map__5888 == null))))?(((((map__5888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5888):map__5888);
var effect = map__5888__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5888__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5888__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__5878,chunk__5879,count__5880,i__5881,map__5888,map__5888__$1,effect,ms,dispatch,seq__5878__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__5878,chunk__5879,count__5880,i__5881,map__5888,map__5888__$1,effect,ms,dispatch,seq__5878__$1,temp__5735__auto__))
,ms);
}


var G__5898 = cljs.core.next(seq__5878__$1);
var G__5899 = null;
var G__5900 = (0);
var G__5901 = (0);
seq__5878 = G__5898;
chunk__5879 = G__5899;
count__5880 = G__5900;
i__5881 = G__5901;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__5902 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__5903 = null;
var count__5904 = (0);
var i__5905 = (0);
while(true){
if((i__5905 < count__5904)){
var event = chunk__5903.cljs$core$IIndexed$_nth$arity$2(null,i__5905);
re_frame.router.dispatch(event);


var G__5906 = seq__5902;
var G__5907 = chunk__5903;
var G__5908 = count__5904;
var G__5909 = (i__5905 + (1));
seq__5902 = G__5906;
chunk__5903 = G__5907;
count__5904 = G__5908;
i__5905 = G__5909;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5902);
if(temp__5735__auto__){
var seq__5902__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5902__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__5902__$1);
var G__5910 = cljs.core.chunk_rest(seq__5902__$1);
var G__5911 = c__4556__auto__;
var G__5912 = cljs.core.count(c__4556__auto__);
var G__5913 = (0);
seq__5902 = G__5910;
chunk__5903 = G__5911;
count__5904 = G__5912;
i__5905 = G__5913;
continue;
} else {
var event = cljs.core.first(seq__5902__$1);
re_frame.router.dispatch(event);


var G__5914 = cljs.core.next(seq__5902__$1);
var G__5915 = null;
var G__5916 = (0);
var G__5917 = (0);
seq__5902 = G__5914;
chunk__5903 = G__5915;
count__5904 = G__5916;
i__5905 = G__5917;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__5918 = cljs.core.seq(value);
var chunk__5919 = null;
var count__5920 = (0);
var i__5921 = (0);
while(true){
if((i__5921 < count__5920)){
var event = chunk__5919.cljs$core$IIndexed$_nth$arity$2(null,i__5921);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__5922 = seq__5918;
var G__5923 = chunk__5919;
var G__5924 = count__5920;
var G__5925 = (i__5921 + (1));
seq__5918 = G__5922;
chunk__5919 = G__5923;
count__5920 = G__5924;
i__5921 = G__5925;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5918);
if(temp__5735__auto__){
var seq__5918__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5918__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__5918__$1);
var G__5926 = cljs.core.chunk_rest(seq__5918__$1);
var G__5927 = c__4556__auto__;
var G__5928 = cljs.core.count(c__4556__auto__);
var G__5929 = (0);
seq__5918 = G__5926;
chunk__5919 = G__5927;
count__5920 = G__5928;
i__5921 = G__5929;
continue;
} else {
var event = cljs.core.first(seq__5918__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__5930 = cljs.core.next(seq__5918__$1);
var G__5931 = null;
var G__5932 = (0);
var G__5933 = (0);
seq__5918 = G__5930;
chunk__5919 = G__5931;
count__5920 = G__5932;
i__5921 = G__5933;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
