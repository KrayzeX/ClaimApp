// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__8720 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8721 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8721);

try{var G__8722 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__8723 = container;
var G__8724 = (function (){
var _STAR_always_update_STAR__orig_val__8725 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8726 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8726);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8725);
}});
return reagent.dom.global$module$react_dom.render(G__8722,G__8723,G__8724);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8720);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__8728 = arguments.length;
switch (G__8728) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__8729 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8729,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8729,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__8733_8749 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__8734_8750 = null;
var count__8735_8751 = (0);
var i__8736_8752 = (0);
while(true){
if((i__8736_8752 < count__8735_8751)){
var vec__8743_8753 = chunk__8734_8750.cljs$core$IIndexed$_nth$arity$2(null,i__8736_8752);
var container_8754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8743_8753,(0),null);
var comp_8755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8743_8753,(1),null);
reagent.dom.re_render_component(comp_8755,container_8754);


var G__8756 = seq__8733_8749;
var G__8757 = chunk__8734_8750;
var G__8758 = count__8735_8751;
var G__8759 = (i__8736_8752 + (1));
seq__8733_8749 = G__8756;
chunk__8734_8750 = G__8757;
count__8735_8751 = G__8758;
i__8736_8752 = G__8759;
continue;
} else {
var temp__5735__auto___8760 = cljs.core.seq(seq__8733_8749);
if(temp__5735__auto___8760){
var seq__8733_8761__$1 = temp__5735__auto___8760;
if(cljs.core.chunked_seq_QMARK_(seq__8733_8761__$1)){
var c__4556__auto___8762 = cljs.core.chunk_first(seq__8733_8761__$1);
var G__8763 = cljs.core.chunk_rest(seq__8733_8761__$1);
var G__8764 = c__4556__auto___8762;
var G__8765 = cljs.core.count(c__4556__auto___8762);
var G__8766 = (0);
seq__8733_8749 = G__8763;
chunk__8734_8750 = G__8764;
count__8735_8751 = G__8765;
i__8736_8752 = G__8766;
continue;
} else {
var vec__8746_8767 = cljs.core.first(seq__8733_8761__$1);
var container_8768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8746_8767,(0),null);
var comp_8769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8746_8767,(1),null);
reagent.dom.re_render_component(comp_8769,container_8768);


var G__8770 = cljs.core.next(seq__8733_8761__$1);
var G__8771 = null;
var G__8772 = (0);
var G__8773 = (0);
seq__8733_8749 = G__8770;
chunk__8734_8750 = G__8771;
count__8735_8751 = G__8772;
i__8736_8752 = G__8773;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
