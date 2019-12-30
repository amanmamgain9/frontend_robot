// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31353){if((e31353 instanceof Error)){
var e = e31353;
return "Error: Unable to stringify";
} else {
throw e31353;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31356 = arguments.length;
switch (G__31356) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31354_SHARP_){
if(typeof p1__31354_SHARP_ === 'string'){
return p1__31354_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31354_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31359 = arguments.length;
var i__4790__auto___31360 = (0);
while(true){
if((i__4790__auto___31360 < len__4789__auto___31359)){
args__4795__auto__.push((arguments[i__4790__auto___31360]));

var G__31361 = (i__4790__auto___31360 + (1));
i__4790__auto___31360 = G__31361;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31358){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31358));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31363 = arguments.length;
var i__4790__auto___31364 = (0);
while(true){
if((i__4790__auto___31364 < len__4789__auto___31363)){
args__4795__auto__.push((arguments[i__4790__auto___31364]));

var G__31365 = (i__4790__auto___31364 + (1));
i__4790__auto___31364 = G__31365;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31362){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31362));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31366){
var map__31367 = p__31366;
var map__31367__$1 = (((((!((map__31367 == null))))?(((((map__31367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31367):map__31367);
var message = cljs.core.get.call(null,map__31367__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31367__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4185__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27361__auto___31446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_31418){
var state_val_31419 = (state_31418[(1)]);
if((state_val_31419 === (7))){
var inst_31414 = (state_31418[(2)]);
var state_31418__$1 = state_31418;
var statearr_31420_31447 = state_31418__$1;
(statearr_31420_31447[(2)] = inst_31414);

(statearr_31420_31447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (1))){
var state_31418__$1 = state_31418;
var statearr_31421_31448 = state_31418__$1;
(statearr_31421_31448[(2)] = null);

(statearr_31421_31448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (4))){
var inst_31371 = (state_31418[(7)]);
var inst_31371__$1 = (state_31418[(2)]);
var state_31418__$1 = (function (){var statearr_31422 = state_31418;
(statearr_31422[(7)] = inst_31371__$1);

return statearr_31422;
})();
if(cljs.core.truth_(inst_31371__$1)){
var statearr_31423_31449 = state_31418__$1;
(statearr_31423_31449[(1)] = (5));

} else {
var statearr_31424_31450 = state_31418__$1;
(statearr_31424_31450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (15))){
var inst_31378 = (state_31418[(8)]);
var inst_31393 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31378);
var inst_31394 = cljs.core.first.call(null,inst_31393);
var inst_31395 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31394);
var inst_31396 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31395)].join('');
var inst_31397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31396);
var state_31418__$1 = state_31418;
var statearr_31425_31451 = state_31418__$1;
(statearr_31425_31451[(2)] = inst_31397);

(statearr_31425_31451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (13))){
var inst_31402 = (state_31418[(2)]);
var state_31418__$1 = state_31418;
var statearr_31426_31452 = state_31418__$1;
(statearr_31426_31452[(2)] = inst_31402);

(statearr_31426_31452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (6))){
var state_31418__$1 = state_31418;
var statearr_31427_31453 = state_31418__$1;
(statearr_31427_31453[(2)] = null);

(statearr_31427_31453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (17))){
var inst_31400 = (state_31418[(2)]);
var state_31418__$1 = state_31418;
var statearr_31428_31454 = state_31418__$1;
(statearr_31428_31454[(2)] = inst_31400);

(statearr_31428_31454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (3))){
var inst_31416 = (state_31418[(2)]);
var state_31418__$1 = state_31418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31418__$1,inst_31416);
} else {
if((state_val_31419 === (12))){
var inst_31377 = (state_31418[(9)]);
var inst_31391 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31377,opts);
var state_31418__$1 = state_31418;
if(inst_31391){
var statearr_31429_31455 = state_31418__$1;
(statearr_31429_31455[(1)] = (15));

} else {
var statearr_31430_31456 = state_31418__$1;
(statearr_31430_31456[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (2))){
var state_31418__$1 = state_31418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31418__$1,(4),ch);
} else {
if((state_val_31419 === (11))){
var inst_31378 = (state_31418[(8)]);
var inst_31383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31384 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31378);
var inst_31385 = cljs.core.async.timeout.call(null,(1000));
var inst_31386 = [inst_31384,inst_31385];
var inst_31387 = (new cljs.core.PersistentVector(null,2,(5),inst_31383,inst_31386,null));
var state_31418__$1 = state_31418;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31418__$1,(14),inst_31387);
} else {
if((state_val_31419 === (9))){
var inst_31378 = (state_31418[(8)]);
var inst_31404 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31405 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31378);
var inst_31406 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31405);
var inst_31407 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31406)].join('');
var inst_31408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31407);
var state_31418__$1 = (function (){var statearr_31431 = state_31418;
(statearr_31431[(10)] = inst_31404);

return statearr_31431;
})();
var statearr_31432_31457 = state_31418__$1;
(statearr_31432_31457[(2)] = inst_31408);

(statearr_31432_31457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (5))){
var inst_31371 = (state_31418[(7)]);
var inst_31373 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31374 = (new cljs.core.PersistentArrayMap(null,2,inst_31373,null));
var inst_31375 = (new cljs.core.PersistentHashSet(null,inst_31374,null));
var inst_31376 = figwheel.client.focus_msgs.call(null,inst_31375,inst_31371);
var inst_31377 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31376);
var inst_31378 = cljs.core.first.call(null,inst_31376);
var inst_31379 = figwheel.client.autoload_QMARK_.call(null);
var state_31418__$1 = (function (){var statearr_31433 = state_31418;
(statearr_31433[(8)] = inst_31378);

(statearr_31433[(9)] = inst_31377);

return statearr_31433;
})();
if(cljs.core.truth_(inst_31379)){
var statearr_31434_31458 = state_31418__$1;
(statearr_31434_31458[(1)] = (8));

} else {
var statearr_31435_31459 = state_31418__$1;
(statearr_31435_31459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (14))){
var inst_31389 = (state_31418[(2)]);
var state_31418__$1 = state_31418;
var statearr_31436_31460 = state_31418__$1;
(statearr_31436_31460[(2)] = inst_31389);

(statearr_31436_31460[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (16))){
var state_31418__$1 = state_31418;
var statearr_31437_31461 = state_31418__$1;
(statearr_31437_31461[(2)] = null);

(statearr_31437_31461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (10))){
var inst_31410 = (state_31418[(2)]);
var state_31418__$1 = (function (){var statearr_31438 = state_31418;
(statearr_31438[(11)] = inst_31410);

return statearr_31438;
})();
var statearr_31439_31462 = state_31418__$1;
(statearr_31439_31462[(2)] = null);

(statearr_31439_31462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (8))){
var inst_31377 = (state_31418[(9)]);
var inst_31381 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31377,opts);
var state_31418__$1 = state_31418;
if(cljs.core.truth_(inst_31381)){
var statearr_31440_31463 = state_31418__$1;
(statearr_31440_31463[(1)] = (11));

} else {
var statearr_31441_31464 = state_31418__$1;
(statearr_31441_31464[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27267__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27267__auto____0 = (function (){
var statearr_31442 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31442[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27267__auto__);

(statearr_31442[(1)] = (1));

return statearr_31442;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27267__auto____1 = (function (state_31418){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_31418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e31443){if((e31443 instanceof Object)){
var ex__27270__auto__ = e31443;
var statearr_31444_31465 = state_31418;
(statearr_31444_31465[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31466 = state_31418;
state_31418 = G__31466;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27267__auto__ = function(state_31418){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27267__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27267__auto____1.call(this,state_31418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27267__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27267__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_31445 = f__27362__auto__.call(null);
(statearr_31445[(6)] = c__27361__auto___31446);

return statearr_31445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31467_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31467_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31473 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31469 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31470 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31471 = true;
var _STAR_print_fn_STAR__temp_val__31472 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31471);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31472);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31470);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31469);
}}catch (e31468){if((e31468 instanceof Error)){
var e = e31468;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31473], null));
} else {
var e = e31468;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31474){
var map__31475 = p__31474;
var map__31475__$1 = (((((!((map__31475 == null))))?(((((map__31475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31475):map__31475);
var opts = map__31475__$1;
var build_id = cljs.core.get.call(null,map__31475__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31477){
var vec__31478 = p__31477;
var seq__31479 = cljs.core.seq.call(null,vec__31478);
var first__31480 = cljs.core.first.call(null,seq__31479);
var seq__31479__$1 = cljs.core.next.call(null,seq__31479);
var map__31481 = first__31480;
var map__31481__$1 = (((((!((map__31481 == null))))?(((((map__31481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31481):map__31481);
var msg = map__31481__$1;
var msg_name = cljs.core.get.call(null,map__31481__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31479__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31483){
var vec__31484 = p__31483;
var seq__31485 = cljs.core.seq.call(null,vec__31484);
var first__31486 = cljs.core.first.call(null,seq__31485);
var seq__31485__$1 = cljs.core.next.call(null,seq__31485);
var map__31487 = first__31486;
var map__31487__$1 = (((((!((map__31487 == null))))?(((((map__31487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31487):map__31487);
var msg = map__31487__$1;
var msg_name = cljs.core.get.call(null,map__31487__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31485__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31489){
var map__31490 = p__31489;
var map__31490__$1 = (((((!((map__31490 == null))))?(((((map__31490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31490):map__31490);
var on_compile_warning = cljs.core.get.call(null,map__31490__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31490__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31492){
var vec__31493 = p__31492;
var seq__31494 = cljs.core.seq.call(null,vec__31493);
var first__31495 = cljs.core.first.call(null,seq__31494);
var seq__31494__$1 = cljs.core.next.call(null,seq__31494);
var map__31496 = first__31495;
var map__31496__$1 = (((((!((map__31496 == null))))?(((((map__31496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31496):map__31496);
var msg = map__31496__$1;
var msg_name = cljs.core.get.call(null,map__31496__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31494__$1;
var pred__31498 = cljs.core._EQ_;
var expr__31499 = msg_name;
if(cljs.core.truth_(pred__31498.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31499))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31498.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31499))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_31588){
var state_val_31589 = (state_31588[(1)]);
if((state_val_31589 === (7))){
var inst_31508 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
if(cljs.core.truth_(inst_31508)){
var statearr_31590_31637 = state_31588__$1;
(statearr_31590_31637[(1)] = (8));

} else {
var statearr_31591_31638 = state_31588__$1;
(statearr_31591_31638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (20))){
var inst_31582 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31592_31639 = state_31588__$1;
(statearr_31592_31639[(2)] = inst_31582);

(statearr_31592_31639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (27))){
var inst_31578 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31593_31640 = state_31588__$1;
(statearr_31593_31640[(2)] = inst_31578);

(statearr_31593_31640[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (1))){
var inst_31501 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31588__$1 = state_31588;
if(cljs.core.truth_(inst_31501)){
var statearr_31594_31641 = state_31588__$1;
(statearr_31594_31641[(1)] = (2));

} else {
var statearr_31595_31642 = state_31588__$1;
(statearr_31595_31642[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (24))){
var inst_31580 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31596_31643 = state_31588__$1;
(statearr_31596_31643[(2)] = inst_31580);

(statearr_31596_31643[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (4))){
var inst_31586 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31588__$1,inst_31586);
} else {
if((state_val_31589 === (15))){
var inst_31584 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31597_31644 = state_31588__$1;
(statearr_31597_31644[(2)] = inst_31584);

(statearr_31597_31644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (21))){
var inst_31537 = (state_31588[(2)]);
var inst_31538 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31539 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31538);
var state_31588__$1 = (function (){var statearr_31598 = state_31588;
(statearr_31598[(7)] = inst_31537);

return statearr_31598;
})();
var statearr_31599_31645 = state_31588__$1;
(statearr_31599_31645[(2)] = inst_31539);

(statearr_31599_31645[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (31))){
var inst_31567 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31588__$1 = state_31588;
if(inst_31567){
var statearr_31600_31646 = state_31588__$1;
(statearr_31600_31646[(1)] = (34));

} else {
var statearr_31601_31647 = state_31588__$1;
(statearr_31601_31647[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (32))){
var inst_31576 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31602_31648 = state_31588__$1;
(statearr_31602_31648[(2)] = inst_31576);

(statearr_31602_31648[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (33))){
var inst_31563 = (state_31588[(2)]);
var inst_31564 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31565 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31564);
var state_31588__$1 = (function (){var statearr_31603 = state_31588;
(statearr_31603[(8)] = inst_31563);

return statearr_31603;
})();
var statearr_31604_31649 = state_31588__$1;
(statearr_31604_31649[(2)] = inst_31565);

(statearr_31604_31649[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (13))){
var inst_31522 = figwheel.client.heads_up.clear.call(null);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(16),inst_31522);
} else {
if((state_val_31589 === (22))){
var inst_31543 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31544 = figwheel.client.heads_up.append_warning_message.call(null,inst_31543);
var state_31588__$1 = state_31588;
var statearr_31605_31650 = state_31588__$1;
(statearr_31605_31650[(2)] = inst_31544);

(statearr_31605_31650[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (36))){
var inst_31574 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31606_31651 = state_31588__$1;
(statearr_31606_31651[(2)] = inst_31574);

(statearr_31606_31651[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (29))){
var inst_31554 = (state_31588[(2)]);
var inst_31555 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31556 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31555);
var state_31588__$1 = (function (){var statearr_31607 = state_31588;
(statearr_31607[(9)] = inst_31554);

return statearr_31607;
})();
var statearr_31608_31652 = state_31588__$1;
(statearr_31608_31652[(2)] = inst_31556);

(statearr_31608_31652[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (6))){
var inst_31503 = (state_31588[(10)]);
var state_31588__$1 = state_31588;
var statearr_31609_31653 = state_31588__$1;
(statearr_31609_31653[(2)] = inst_31503);

(statearr_31609_31653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (28))){
var inst_31550 = (state_31588[(2)]);
var inst_31551 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31552 = figwheel.client.heads_up.display_warning.call(null,inst_31551);
var state_31588__$1 = (function (){var statearr_31610 = state_31588;
(statearr_31610[(11)] = inst_31550);

return statearr_31610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(29),inst_31552);
} else {
if((state_val_31589 === (25))){
var inst_31548 = figwheel.client.heads_up.clear.call(null);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(28),inst_31548);
} else {
if((state_val_31589 === (34))){
var inst_31569 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(37),inst_31569);
} else {
if((state_val_31589 === (17))){
var inst_31528 = (state_31588[(2)]);
var inst_31529 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31530 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31529);
var state_31588__$1 = (function (){var statearr_31611 = state_31588;
(statearr_31611[(12)] = inst_31528);

return statearr_31611;
})();
var statearr_31612_31654 = state_31588__$1;
(statearr_31612_31654[(2)] = inst_31530);

(statearr_31612_31654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (3))){
var inst_31520 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31588__$1 = state_31588;
if(inst_31520){
var statearr_31613_31655 = state_31588__$1;
(statearr_31613_31655[(1)] = (13));

} else {
var statearr_31614_31656 = state_31588__$1;
(statearr_31614_31656[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (12))){
var inst_31516 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31615_31657 = state_31588__$1;
(statearr_31615_31657[(2)] = inst_31516);

(statearr_31615_31657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (2))){
var inst_31503 = (state_31588[(10)]);
var inst_31503__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31588__$1 = (function (){var statearr_31616 = state_31588;
(statearr_31616[(10)] = inst_31503__$1);

return statearr_31616;
})();
if(cljs.core.truth_(inst_31503__$1)){
var statearr_31617_31658 = state_31588__$1;
(statearr_31617_31658[(1)] = (5));

} else {
var statearr_31618_31659 = state_31588__$1;
(statearr_31618_31659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (23))){
var inst_31546 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31588__$1 = state_31588;
if(inst_31546){
var statearr_31619_31660 = state_31588__$1;
(statearr_31619_31660[(1)] = (25));

} else {
var statearr_31620_31661 = state_31588__$1;
(statearr_31620_31661[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (35))){
var state_31588__$1 = state_31588;
var statearr_31621_31662 = state_31588__$1;
(statearr_31621_31662[(2)] = null);

(statearr_31621_31662[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (19))){
var inst_31541 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31588__$1 = state_31588;
if(inst_31541){
var statearr_31622_31663 = state_31588__$1;
(statearr_31622_31663[(1)] = (22));

} else {
var statearr_31623_31664 = state_31588__$1;
(statearr_31623_31664[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (11))){
var inst_31512 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31624_31665 = state_31588__$1;
(statearr_31624_31665[(2)] = inst_31512);

(statearr_31624_31665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (9))){
var inst_31514 = figwheel.client.heads_up.clear.call(null);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(12),inst_31514);
} else {
if((state_val_31589 === (5))){
var inst_31505 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31588__$1 = state_31588;
var statearr_31625_31666 = state_31588__$1;
(statearr_31625_31666[(2)] = inst_31505);

(statearr_31625_31666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (14))){
var inst_31532 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31588__$1 = state_31588;
if(inst_31532){
var statearr_31626_31667 = state_31588__$1;
(statearr_31626_31667[(1)] = (18));

} else {
var statearr_31627_31668 = state_31588__$1;
(statearr_31627_31668[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (26))){
var inst_31558 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31588__$1 = state_31588;
if(inst_31558){
var statearr_31628_31669 = state_31588__$1;
(statearr_31628_31669[(1)] = (30));

} else {
var statearr_31629_31670 = state_31588__$1;
(statearr_31629_31670[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (16))){
var inst_31524 = (state_31588[(2)]);
var inst_31525 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31526 = figwheel.client.heads_up.display_exception.call(null,inst_31525);
var state_31588__$1 = (function (){var statearr_31630 = state_31588;
(statearr_31630[(13)] = inst_31524);

return statearr_31630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(17),inst_31526);
} else {
if((state_val_31589 === (30))){
var inst_31560 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31561 = figwheel.client.heads_up.display_warning.call(null,inst_31560);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(33),inst_31561);
} else {
if((state_val_31589 === (10))){
var inst_31518 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31631_31671 = state_31588__$1;
(statearr_31631_31671[(2)] = inst_31518);

(statearr_31631_31671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (18))){
var inst_31534 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31535 = figwheel.client.heads_up.display_exception.call(null,inst_31534);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(21),inst_31535);
} else {
if((state_val_31589 === (37))){
var inst_31571 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31632_31672 = state_31588__$1;
(statearr_31632_31672[(2)] = inst_31571);

(statearr_31632_31672[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (8))){
var inst_31510 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(11),inst_31510);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto____0 = (function (){
var statearr_31633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31633[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto__);

(statearr_31633[(1)] = (1));

return statearr_31633;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto____1 = (function (state_31588){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_31588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e31634){if((e31634 instanceof Object)){
var ex__27270__auto__ = e31634;
var statearr_31635_31673 = state_31588;
(statearr_31635_31673[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31674 = state_31588;
state_31588 = G__31674;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto__ = function(state_31588){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto____1.call(this,state_31588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_31636 = f__27362__auto__.call(null);
(statearr_31636[(6)] = c__27361__auto__);

return statearr_31636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));

return c__27361__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27361__auto___31703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_31689){
var state_val_31690 = (state_31689[(1)]);
if((state_val_31690 === (1))){
var state_31689__$1 = state_31689;
var statearr_31691_31704 = state_31689__$1;
(statearr_31691_31704[(2)] = null);

(statearr_31691_31704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (2))){
var state_31689__$1 = state_31689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31689__$1,(4),ch);
} else {
if((state_val_31690 === (3))){
var inst_31687 = (state_31689[(2)]);
var state_31689__$1 = state_31689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31689__$1,inst_31687);
} else {
if((state_val_31690 === (4))){
var inst_31677 = (state_31689[(7)]);
var inst_31677__$1 = (state_31689[(2)]);
var state_31689__$1 = (function (){var statearr_31692 = state_31689;
(statearr_31692[(7)] = inst_31677__$1);

return statearr_31692;
})();
if(cljs.core.truth_(inst_31677__$1)){
var statearr_31693_31705 = state_31689__$1;
(statearr_31693_31705[(1)] = (5));

} else {
var statearr_31694_31706 = state_31689__$1;
(statearr_31694_31706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (5))){
var inst_31677 = (state_31689[(7)]);
var inst_31679 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31677);
var state_31689__$1 = state_31689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31689__$1,(8),inst_31679);
} else {
if((state_val_31690 === (6))){
var state_31689__$1 = state_31689;
var statearr_31695_31707 = state_31689__$1;
(statearr_31695_31707[(2)] = null);

(statearr_31695_31707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (7))){
var inst_31685 = (state_31689[(2)]);
var state_31689__$1 = state_31689;
var statearr_31696_31708 = state_31689__$1;
(statearr_31696_31708[(2)] = inst_31685);

(statearr_31696_31708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (8))){
var inst_31681 = (state_31689[(2)]);
var state_31689__$1 = (function (){var statearr_31697 = state_31689;
(statearr_31697[(8)] = inst_31681);

return statearr_31697;
})();
var statearr_31698_31709 = state_31689__$1;
(statearr_31698_31709[(2)] = null);

(statearr_31698_31709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27267__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27267__auto____0 = (function (){
var statearr_31699 = [null,null,null,null,null,null,null,null,null];
(statearr_31699[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27267__auto__);

(statearr_31699[(1)] = (1));

return statearr_31699;
});
var figwheel$client$heads_up_plugin_$_state_machine__27267__auto____1 = (function (state_31689){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_31689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e31700){if((e31700 instanceof Object)){
var ex__27270__auto__ = e31700;
var statearr_31701_31710 = state_31689;
(statearr_31701_31710[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31711 = state_31689;
state_31689 = G__31711;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27267__auto__ = function(state_31689){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27267__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27267__auto____1.call(this,state_31689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27267__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27267__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_31702 = f__27362__auto__.call(null);
(statearr_31702[(6)] = c__27361__auto___31703);

return statearr_31702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_31717){
var state_val_31718 = (state_31717[(1)]);
if((state_val_31718 === (1))){
var inst_31712 = cljs.core.async.timeout.call(null,(3000));
var state_31717__$1 = state_31717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31717__$1,(2),inst_31712);
} else {
if((state_val_31718 === (2))){
var inst_31714 = (state_31717[(2)]);
var inst_31715 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31717__$1 = (function (){var statearr_31719 = state_31717;
(statearr_31719[(7)] = inst_31714);

return statearr_31719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31717__$1,inst_31715);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27267__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27267__auto____0 = (function (){
var statearr_31720 = [null,null,null,null,null,null,null,null];
(statearr_31720[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27267__auto__);

(statearr_31720[(1)] = (1));

return statearr_31720;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27267__auto____1 = (function (state_31717){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_31717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e31721){if((e31721 instanceof Object)){
var ex__27270__auto__ = e31721;
var statearr_31722_31724 = state_31717;
(statearr_31722_31724[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31725 = state_31717;
state_31717 = G__31725;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27267__auto__ = function(state_31717){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27267__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27267__auto____1.call(this,state_31717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27267__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27267__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_31723 = f__27362__auto__.call(null);
(statearr_31723[(6)] = c__27361__auto__);

return statearr_31723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));

return c__27361__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_31732){
var state_val_31733 = (state_31732[(1)]);
if((state_val_31733 === (1))){
var inst_31726 = cljs.core.async.timeout.call(null,(2000));
var state_31732__$1 = state_31732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31732__$1,(2),inst_31726);
} else {
if((state_val_31733 === (2))){
var inst_31728 = (state_31732[(2)]);
var inst_31729 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31730 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31729);
var state_31732__$1 = (function (){var statearr_31734 = state_31732;
(statearr_31734[(7)] = inst_31728);

return statearr_31734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31732__$1,inst_31730);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto____0 = (function (){
var statearr_31735 = [null,null,null,null,null,null,null,null];
(statearr_31735[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto__);

(statearr_31735[(1)] = (1));

return statearr_31735;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto____1 = (function (state_31732){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_31732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e31736){if((e31736 instanceof Object)){
var ex__27270__auto__ = e31736;
var statearr_31737_31739 = state_31732;
(statearr_31737_31739[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31740 = state_31732;
state_31732 = G__31740;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto__ = function(state_31732){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto____1.call(this,state_31732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_31738 = f__27362__auto__.call(null);
(statearr_31738[(6)] = c__27361__auto__);

return statearr_31738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));

return c__27361__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31741){
var map__31742 = p__31741;
var map__31742__$1 = (((((!((map__31742 == null))))?(((((map__31742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31742):map__31742);
var file = cljs.core.get.call(null,map__31742__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31742__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31742__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31744 = "";
var G__31744__$1 = (cljs.core.truth_(file)?[G__31744,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31744);
var G__31744__$2 = (cljs.core.truth_(line)?[G__31744__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31744__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__31744__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31744__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31745){
var map__31746 = p__31745;
var map__31746__$1 = (((((!((map__31746 == null))))?(((((map__31746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31746):map__31746);
var ed = map__31746__$1;
var exception_data = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31749 = (function (){var G__31748 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31748)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31748;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31749);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31750){
var map__31751 = p__31750;
var map__31751__$1 = (((((!((map__31751 == null))))?(((((map__31751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31751):map__31751);
var w = map__31751__$1;
var message = cljs.core.get.call(null,map__31751__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4174__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31753 = cljs.core.seq.call(null,plugins);
var chunk__31754 = null;
var count__31755 = (0);
var i__31756 = (0);
while(true){
if((i__31756 < count__31755)){
var vec__31763 = cljs.core._nth.call(null,chunk__31754,i__31756);
var k = cljs.core.nth.call(null,vec__31763,(0),null);
var plugin = cljs.core.nth.call(null,vec__31763,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31769 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31753,chunk__31754,count__31755,i__31756,pl_31769,vec__31763,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31769.call(null,msg_hist);
});})(seq__31753,chunk__31754,count__31755,i__31756,pl_31769,vec__31763,k,plugin))
);
} else {
}


var G__31770 = seq__31753;
var G__31771 = chunk__31754;
var G__31772 = count__31755;
var G__31773 = (i__31756 + (1));
seq__31753 = G__31770;
chunk__31754 = G__31771;
count__31755 = G__31772;
i__31756 = G__31773;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31753);
if(temp__5735__auto__){
var seq__31753__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31753__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__31753__$1);
var G__31774 = cljs.core.chunk_rest.call(null,seq__31753__$1);
var G__31775 = c__4609__auto__;
var G__31776 = cljs.core.count.call(null,c__4609__auto__);
var G__31777 = (0);
seq__31753 = G__31774;
chunk__31754 = G__31775;
count__31755 = G__31776;
i__31756 = G__31777;
continue;
} else {
var vec__31766 = cljs.core.first.call(null,seq__31753__$1);
var k = cljs.core.nth.call(null,vec__31766,(0),null);
var plugin = cljs.core.nth.call(null,vec__31766,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31778 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31753,chunk__31754,count__31755,i__31756,pl_31778,vec__31766,k,plugin,seq__31753__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31778.call(null,msg_hist);
});})(seq__31753,chunk__31754,count__31755,i__31756,pl_31778,vec__31766,k,plugin,seq__31753__$1,temp__5735__auto__))
);
} else {
}


var G__31779 = cljs.core.next.call(null,seq__31753__$1);
var G__31780 = null;
var G__31781 = (0);
var G__31782 = (0);
seq__31753 = G__31779;
chunk__31754 = G__31780;
count__31755 = G__31781;
i__31756 = G__31782;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31784 = arguments.length;
switch (G__31784) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31785_31790 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31786_31791 = null;
var count__31787_31792 = (0);
var i__31788_31793 = (0);
while(true){
if((i__31788_31793 < count__31787_31792)){
var msg_31794 = cljs.core._nth.call(null,chunk__31786_31791,i__31788_31793);
figwheel.client.socket.handle_incoming_message.call(null,msg_31794);


var G__31795 = seq__31785_31790;
var G__31796 = chunk__31786_31791;
var G__31797 = count__31787_31792;
var G__31798 = (i__31788_31793 + (1));
seq__31785_31790 = G__31795;
chunk__31786_31791 = G__31796;
count__31787_31792 = G__31797;
i__31788_31793 = G__31798;
continue;
} else {
var temp__5735__auto___31799 = cljs.core.seq.call(null,seq__31785_31790);
if(temp__5735__auto___31799){
var seq__31785_31800__$1 = temp__5735__auto___31799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31785_31800__$1)){
var c__4609__auto___31801 = cljs.core.chunk_first.call(null,seq__31785_31800__$1);
var G__31802 = cljs.core.chunk_rest.call(null,seq__31785_31800__$1);
var G__31803 = c__4609__auto___31801;
var G__31804 = cljs.core.count.call(null,c__4609__auto___31801);
var G__31805 = (0);
seq__31785_31790 = G__31802;
chunk__31786_31791 = G__31803;
count__31787_31792 = G__31804;
i__31788_31793 = G__31805;
continue;
} else {
var msg_31806 = cljs.core.first.call(null,seq__31785_31800__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31806);


var G__31807 = cljs.core.next.call(null,seq__31785_31800__$1);
var G__31808 = null;
var G__31809 = (0);
var G__31810 = (0);
seq__31785_31790 = G__31807;
chunk__31786_31791 = G__31808;
count__31787_31792 = G__31809;
i__31788_31793 = G__31810;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31815 = arguments.length;
var i__4790__auto___31816 = (0);
while(true){
if((i__4790__auto___31816 < len__4789__auto___31815)){
args__4795__auto__.push((arguments[i__4790__auto___31816]));

var G__31817 = (i__4790__auto___31816 + (1));
i__4790__auto___31816 = G__31817;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31812){
var map__31813 = p__31812;
var map__31813__$1 = (((((!((map__31813 == null))))?(((((map__31813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31813):map__31813);
var opts = map__31813__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31811){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31811));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31818){if((e31818 instanceof Error)){
var e = e31818;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31818;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31819){
var map__31820 = p__31819;
var map__31820__$1 = (((((!((map__31820 == null))))?(((((map__31820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31820):map__31820);
var msg_name = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1577462221183
