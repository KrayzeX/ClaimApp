// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.input');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
reagent.impl.input.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.input.has_selection_api_QMARK_ = (function reagent$impl$input$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(reagent.impl.input.these_inputs_have_selection_api,input_type);
});
reagent.impl.input.input_node_set_value = (function reagent$impl$input$input_node_set_value(node,rendered_value,dom_value,component,p__4964){
var map__4965 = p__4964;
var map__4965__$1 = (((((!((map__4965 == null))))?(((((map__4965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4965):map__4965);
var on_write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4965__$1,cljs.core.cst$kw$on_DASH_write);
if((!((((node === document.activeElement)) && (reagent.impl.input.has_selection_api_QMARK_(node.type)) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))))){
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
return (on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
return null;
}
} else {
var node_value = node.value;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return reagent.impl.batching.do_after_render((function (){
return (reagent.impl.input.input_component_set_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.input.input_component_set_value.cljs$core$IFn$_invoke$arity$1(component) : reagent.impl.input.input_component_set_value.call(null,component));
}));
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - node.selectionStart);
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
(on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
}

(node.selectionStart = new_cursor_offset);

return (node.selectionEnd = new_cursor_offset);
}
}
});
reagent.impl.input.input_component_set_value = (function reagent$impl$input$input_component_set_value(this$){
if(cljs.core.truth_(this$.cljsInputLive)){
(this$.cljsInputDirty = false);

var rendered_value = this$.cljsRenderedValue;
var dom_value = this$.cljsDOMValue;
var node = this$.inputEl;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
return reagent.impl.input.input_node_set_value(node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
reagent.impl.input.input_handle_change = (function reagent$impl$input$input_handle_change(this$,on_change,e){
(this$.cljsDOMValue = e.target.value);

if(cljs.core.truth_(this$.cljsInputDirty)){
} else {
(this$.cljsInputDirty = true);

reagent.impl.batching.do_after_render((function (){
return reagent.impl.input.input_component_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
});
reagent.impl.input.input_render_setup = (function reagent$impl$input$input_render_setup(this$,jsprops){
if(cljs.core.truth_((((!((jsprops == null))))?(function (){var and__4115__auto__ = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4115__auto__)){
return jsprops.hasOwnProperty("value");
} else {
return and__4115__auto__;
}
})():false))){
var v = jsprops.value;
var value = (((v == null))?"":v);
var on_change = jsprops.onChange;
var original_ref_fn = jsprops.ref;
if(cljs.core.truth_(this$.cljsInputLive)){
} else {
(this$.cljsInputLive = true);

(this$.cljsDOMValue = value);
}

if(cljs.core.truth_(this$.reagentRefFn)){
} else {
(this$.reagentRefFn = (function (el){
(this$.inputEl = el);

if(cljs.core.truth_(original_ref_fn)){
return (original_ref_fn.cljs$core$IFn$_invoke$arity$1 ? original_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : original_ref_fn.call(null,el));
} else {
return null;
}
}));
}

(this$.cljsRenderedValue = value);

delete jsprops["value"];

(jsprops.defaultValue = value);

(jsprops.onChange = (function (p1__4967_SHARP_){
return reagent.impl.input.input_handle_change(this$,on_change,p1__4967_SHARP_);
}));

return (jsprops.ref = this$.reagentRefFn);
} else {
return null;
}
});
reagent.impl.input.input_unmount = (function reagent$impl$input$input_unmount(this$){
return (this$.cljsInputLive = null);
});
reagent.impl.input.input_component_QMARK_ = (function reagent$impl$input$input_component_QMARK_(x){
var G__4968 = x;
switch (G__4968) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.input.input_spec = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"ReagentInput",cljs.core.cst$kw$component_DASH_did_DASH_update,reagent.impl.input.input_component_set_value,cljs.core.cst$kw$component_DASH_will_DASH_unmount,reagent.impl.input.input_unmount,cljs.core.cst$kw$reagent_DASH_render,(function (argv,component,jsprops,first_child,compiler){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.input.input_render_setup(this$,jsprops);

return reagent.impl.protocols.make_element(compiler,argv,component,jsprops,first_child);
})], null);