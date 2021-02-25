// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ui.claim.list.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('zframes.redirect');
goog.require('ui.pages');
goog.require('ui.claim.list.model');
goog.require('ui.styles');
goog.require('reagent.core');
ui.claim.list.view.styles = ui.styles.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$title,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$font_DASH_size,"28px",cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$font_DASH_weight,"500",cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$padding,"15px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$button_DASH_panel,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"25px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$claims_DASH_list,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin_DASH_top,"20px",cljs.core.cst$kw$border_DASH_radius,"6px",cljs.core.cst$kw$padding,"10px 20px",cljs.core.cst$kw$background_DASH_color,"#F9FBFB"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$element_DASH_block,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$margin_DASH_bottom,"2px",cljs.core.cst$kw$box_DASH_sizing,"border-box",cljs.core.cst$kw$border,"2px solid #A9E2F3",cljs.core.cst$kw$border_DASH_radius,"6px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$claim_DASH_title,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_weight,"500",cljs.core.cst$kw$margin_DASH_bottom,"10px",cljs.core.cst$kw$font_DASH_size,"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$claim_DASH_desc,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#848484"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$compl_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#848484"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$main_DASH_info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$padding,"7px 15px",cljs.core.cst$kw$border_DASH_radius,"6px 0 0 6px",cljs.core.cst$kw$background_DASH_color,"#EFFBFB",cljs.core.cst$kw$width,"420px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$other_DASH_info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$padding,"7px 15px",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$border_DASH_radius,"0 6px 6px 0",cljs.core.cst$kw$width,"420px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$mail,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#848484"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$user,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"16px",cljs.core.cst$kw$font_DASH_weight,"500",cljs.core.cst$kw$font_DASH_style,cljs.core.cst$kw$italic], null)], null)], null)], null)], 0));
ui.claim.list.view.page_title = (function ui$claim$list$view$page_title(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$title,"Test Claim Web Application"], null);
});
ui.claim.list.view.button_panel = (function ui$claim$list$view$button_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$button_DASH_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,"/new"], null)], null));
})], null),"Add +"], null)], null);
});
ui.claim.list.view.toName = (function ui$claim$list$view$toName(res){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$first_name.cljs$core$IFn$_invoke$arity$1(res))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$second_name.cljs$core$IFn$_invoke$arity$1(res))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$middle_name.cljs$core$IFn$_invoke$arity$1(res))].join('');
});
ui.claim.list.view.current_claim = (function ui$claim$list$view$current_claim(p__8618){
var map__8619 = p__8618;
var map__8619__$1 = (((((!((map__8619 == null))))?(((((map__8619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8619):map__8619);
var args = map__8619__$1;
var map__8620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8619__$1,cljs.core.cst$kw$resource);
var map__8620__$1 = (((((!((map__8620 == null))))?(((((map__8620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8620):map__8620);
var resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8620__$1,cljs.core.cst$kw$resource);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$element_DASH_block,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_info,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$claim_DASH_title,["Title: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(resource))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000)))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$claim_DASH_desc,["Description: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(resource))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$compl_DASH_data,["Completion data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$completion_data.cljs$core$IFn$_invoke$arity$1(resource))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000)))].join('')], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$other_DASH_info,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$user,["Applicant: ",ui.claim.list.view.toName(cljs.core.cst$kw$applicant.cljs$core$IFn$_invoke$arity$1(resource))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000)))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mail,["Applicant email: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resource,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$applicant,cljs.core.cst$kw$contact_details,cljs.core.cst$kw$email], null)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$user,["Performer: ",ui.claim.list.view.toName(cljs.core.cst$kw$performer.cljs$core$IFn$_invoke$arity$1(resource))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mail,["Performer email: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resource,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$performer,cljs.core.cst$kw$contact_details,cljs.core.cst$kw$email], null)))].join('')], null)], null)], null);
});
ui.claim.list.view.claim_list = (function ui$claim$list$view$claim_list(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$claims_DASH_list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(ui.claim.list.view.current_claim,data)], null);
});
ui.claim.list.view.claims = (function ui$claim$list$view$claims(data){
var m = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$claim_SLASH_index], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,ui.claim.list.view.styles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$header,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.claim.list.view.page_title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.claim.list.view.button_panel], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.claim.list.view.claim_list,cljs.core.deref(m)], null)], null)], null);
});
});
ui.pages.reg_page(cljs.core.cst$kw$claim_SLASH_index,ui.claim.list.view.claims);