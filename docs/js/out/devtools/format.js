// Compiled by ClojureScript 1.10.597 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._header[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,value);
} else {
var m__4485__auto__ = (devtools.format._header["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._has_body[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,value);
} else {
var m__4485__auto__ = (devtools.format._has_body["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._body[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,value);
} else {
var m__4485__auto__ = (devtools.format._body["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o22096 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22096["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22097 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22097["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22098 = temp__5733__auto____$2;
return (o22098["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o22099 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22099["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22100 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22100["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22101 = temp__5733__auto____$2;
return (o22101["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o22102 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22102["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22103 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22103["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22104 = temp__5733__auto____$2;
return (o22104["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o22105 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22105["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22106 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22106["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22107 = temp__5733__auto____$2;
return (o22107["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o22108 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22108["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22109 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22109["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22110 = temp__5733__auto____$2;
return (o22110["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o22111 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22111["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22112 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22112["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22113 = temp__5733__auto____$2;
return (o22113["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o22114 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22114["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22115 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22115["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22116 = temp__5733__auto____$2;
return (o22116["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22118 = arguments.length;
var i__4790__auto___22119 = (0);
while(true){
if((i__4790__auto___22119 < len__4789__auto___22118)){
args__4795__auto__.push((arguments[i__4790__auto___22119]));

var G__22120 = (i__4790__auto___22119 + (1));
i__4790__auto___22119 = G__22120;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq22117){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22117));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22122 = arguments.length;
var i__4790__auto___22123 = (0);
while(true){
if((i__4790__auto___22123 < len__4789__auto___22122)){
args__4795__auto__.push((arguments[i__4790__auto___22123]));

var G__22124 = (i__4790__auto___22123 + (1));
i__4790__auto___22123 = G__22124;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq22121){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22121));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22126 = arguments.length;
var i__4790__auto___22127 = (0);
while(true){
if((i__4790__auto___22127 < len__4789__auto___22126)){
args__4795__auto__.push((arguments[i__4790__auto___22127]));

var G__22128 = (i__4790__auto___22127 + (1));
i__4790__auto___22127 = G__22128;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq22125){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22125));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22130 = arguments.length;
var i__4790__auto___22131 = (0);
while(true){
if((i__4790__auto___22131 < len__4789__auto___22130)){
args__4795__auto__.push((arguments[i__4790__auto___22131]));

var G__22132 = (i__4790__auto___22131 + (1));
i__4790__auto___22131 = G__22132;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq22129){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22129));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22134 = arguments.length;
var i__4790__auto___22135 = (0);
while(true){
if((i__4790__auto___22135 < len__4789__auto___22134)){
args__4795__auto__.push((arguments[i__4790__auto___22135]));

var G__22136 = (i__4790__auto___22135 + (1));
i__4790__auto___22135 = G__22136;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq22133){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22133));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22138 = arguments.length;
var i__4790__auto___22139 = (0);
while(true){
if((i__4790__auto___22139 < len__4789__auto___22138)){
args__4795__auto__.push((arguments[i__4790__auto___22139]));

var G__22140 = (i__4790__auto___22139 + (1));
i__4790__auto___22139 = G__22140;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq22137){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22137));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22142 = arguments.length;
var i__4790__auto___22143 = (0);
while(true){
if((i__4790__auto___22143 < len__4789__auto___22142)){
args__4795__auto__.push((arguments[i__4790__auto___22143]));

var G__22144 = (i__4790__auto___22143 + (1));
i__4790__auto___22143 = G__22144;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq22141){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22141));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22152 = arguments.length;
var i__4790__auto___22153 = (0);
while(true){
if((i__4790__auto___22153 < len__4789__auto___22152)){
args__4795__auto__.push((arguments[i__4790__auto___22153]));

var G__22154 = (i__4790__auto___22153 + (1));
i__4790__auto___22153 = G__22154;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__22148){
var vec__22149 = p__22148;
var state_override = cljs.core.nth.call(null,vec__22149,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__22145_SHARP_){
return cljs.core.merge.call(null,p1__22145_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq22146){
var G__22147 = cljs.core.first.call(null,seq22146);
var seq22146__$1 = cljs.core.next.call(null,seq22146);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22147,seq22146__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22156 = arguments.length;
var i__4790__auto___22157 = (0);
while(true){
if((i__4790__auto___22157 < len__4789__auto___22156)){
args__4795__auto__.push((arguments[i__4790__auto___22157]));

var G__22158 = (i__4790__auto___22157 + (1));
i__4790__auto___22157 = G__22158;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq22155){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22155));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22161 = arguments.length;
var i__4790__auto___22162 = (0);
while(true){
if((i__4790__auto___22162 < len__4789__auto___22161)){
args__4795__auto__.push((arguments[i__4790__auto___22162]));

var G__22163 = (i__4790__auto___22162 + (1));
i__4790__auto___22162 = G__22163;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq22159){
var G__22160 = cljs.core.first.call(null,seq22159);
var seq22159__$1 = cljs.core.next.call(null,seq22159);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22160,seq22159__$1);
}));


//# sourceMappingURL=format.js.map?rel=1577462205398
