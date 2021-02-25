// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ui.pages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.core');
if((typeof ui !== 'undefined') && (typeof ui.pages !== 'undefined') && (typeof ui.pages.pages !== 'undefined')){
} else {
ui.pages.pages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
ui.pages.reg_page = (function ui$pages$reg_page(key,page){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.pages.pages,cljs.core.assoc,key,page);
});
