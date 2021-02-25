// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ui.layout');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('garden.core');
goog.require('ui.styles');
ui.layout.layout_style = ui.styles.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$layout,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin,"40px 400px 40px 200px",cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$width,"900px"], null)], null)], 0));
ui.layout.layout = (function ui$layout$layout(page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$layout,ui.layout.layout_style,page], null);
});
