// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31006){
var map__31007 = p__31006;
var map__31007__$1 = (((((!((map__31007 == null))))?(((((map__31007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31007):map__31007);
var m = map__31007__$1;
var n = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31009_31041 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31010_31042 = null;
var count__31011_31043 = (0);
var i__31012_31044 = (0);
while(true){
if((i__31012_31044 < count__31011_31043)){
var f_31045 = cljs.core._nth.call(null,chunk__31010_31042,i__31012_31044);
cljs.core.println.call(null,"  ",f_31045);


var G__31046 = seq__31009_31041;
var G__31047 = chunk__31010_31042;
var G__31048 = count__31011_31043;
var G__31049 = (i__31012_31044 + (1));
seq__31009_31041 = G__31046;
chunk__31010_31042 = G__31047;
count__31011_31043 = G__31048;
i__31012_31044 = G__31049;
continue;
} else {
var temp__5735__auto___31050 = cljs.core.seq.call(null,seq__31009_31041);
if(temp__5735__auto___31050){
var seq__31009_31051__$1 = temp__5735__auto___31050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31009_31051__$1)){
var c__4609__auto___31052 = cljs.core.chunk_first.call(null,seq__31009_31051__$1);
var G__31053 = cljs.core.chunk_rest.call(null,seq__31009_31051__$1);
var G__31054 = c__4609__auto___31052;
var G__31055 = cljs.core.count.call(null,c__4609__auto___31052);
var G__31056 = (0);
seq__31009_31041 = G__31053;
chunk__31010_31042 = G__31054;
count__31011_31043 = G__31055;
i__31012_31044 = G__31056;
continue;
} else {
var f_31057 = cljs.core.first.call(null,seq__31009_31051__$1);
cljs.core.println.call(null,"  ",f_31057);


var G__31058 = cljs.core.next.call(null,seq__31009_31051__$1);
var G__31059 = null;
var G__31060 = (0);
var G__31061 = (0);
seq__31009_31041 = G__31058;
chunk__31010_31042 = G__31059;
count__31011_31043 = G__31060;
i__31012_31044 = G__31061;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31062 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31062);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31062)))?cljs.core.second.call(null,arglists_31062):arglists_31062));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31013_31063 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31014_31064 = null;
var count__31015_31065 = (0);
var i__31016_31066 = (0);
while(true){
if((i__31016_31066 < count__31015_31065)){
var vec__31027_31067 = cljs.core._nth.call(null,chunk__31014_31064,i__31016_31066);
var name_31068 = cljs.core.nth.call(null,vec__31027_31067,(0),null);
var map__31030_31069 = cljs.core.nth.call(null,vec__31027_31067,(1),null);
var map__31030_31070__$1 = (((((!((map__31030_31069 == null))))?(((((map__31030_31069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31030_31069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31030_31069):map__31030_31069);
var doc_31071 = cljs.core.get.call(null,map__31030_31070__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31072 = cljs.core.get.call(null,map__31030_31070__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31068);

cljs.core.println.call(null," ",arglists_31072);

if(cljs.core.truth_(doc_31071)){
cljs.core.println.call(null," ",doc_31071);
} else {
}


var G__31073 = seq__31013_31063;
var G__31074 = chunk__31014_31064;
var G__31075 = count__31015_31065;
var G__31076 = (i__31016_31066 + (1));
seq__31013_31063 = G__31073;
chunk__31014_31064 = G__31074;
count__31015_31065 = G__31075;
i__31016_31066 = G__31076;
continue;
} else {
var temp__5735__auto___31077 = cljs.core.seq.call(null,seq__31013_31063);
if(temp__5735__auto___31077){
var seq__31013_31078__$1 = temp__5735__auto___31077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31013_31078__$1)){
var c__4609__auto___31079 = cljs.core.chunk_first.call(null,seq__31013_31078__$1);
var G__31080 = cljs.core.chunk_rest.call(null,seq__31013_31078__$1);
var G__31081 = c__4609__auto___31079;
var G__31082 = cljs.core.count.call(null,c__4609__auto___31079);
var G__31083 = (0);
seq__31013_31063 = G__31080;
chunk__31014_31064 = G__31081;
count__31015_31065 = G__31082;
i__31016_31066 = G__31083;
continue;
} else {
var vec__31032_31084 = cljs.core.first.call(null,seq__31013_31078__$1);
var name_31085 = cljs.core.nth.call(null,vec__31032_31084,(0),null);
var map__31035_31086 = cljs.core.nth.call(null,vec__31032_31084,(1),null);
var map__31035_31087__$1 = (((((!((map__31035_31086 == null))))?(((((map__31035_31086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31035_31086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31035_31086):map__31035_31086);
var doc_31088 = cljs.core.get.call(null,map__31035_31087__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31089 = cljs.core.get.call(null,map__31035_31087__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31085);

cljs.core.println.call(null," ",arglists_31089);

if(cljs.core.truth_(doc_31088)){
cljs.core.println.call(null," ",doc_31088);
} else {
}


var G__31090 = cljs.core.next.call(null,seq__31013_31078__$1);
var G__31091 = null;
var G__31092 = (0);
var G__31093 = (0);
seq__31013_31063 = G__31090;
chunk__31014_31064 = G__31091;
count__31015_31065 = G__31092;
i__31016_31066 = G__31093;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__31037 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31038 = null;
var count__31039 = (0);
var i__31040 = (0);
while(true){
if((i__31040 < count__31039)){
var role = cljs.core._nth.call(null,chunk__31038,i__31040);
var temp__5735__auto___31094__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31094__$1)){
var spec_31095 = temp__5735__auto___31094__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31095));
} else {
}


var G__31096 = seq__31037;
var G__31097 = chunk__31038;
var G__31098 = count__31039;
var G__31099 = (i__31040 + (1));
seq__31037 = G__31096;
chunk__31038 = G__31097;
count__31039 = G__31098;
i__31040 = G__31099;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__31037);
if(temp__5735__auto____$1){
var seq__31037__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31037__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__31037__$1);
var G__31100 = cljs.core.chunk_rest.call(null,seq__31037__$1);
var G__31101 = c__4609__auto__;
var G__31102 = cljs.core.count.call(null,c__4609__auto__);
var G__31103 = (0);
seq__31037 = G__31100;
chunk__31038 = G__31101;
count__31039 = G__31102;
i__31040 = G__31103;
continue;
} else {
var role = cljs.core.first.call(null,seq__31037__$1);
var temp__5735__auto___31104__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31104__$2)){
var spec_31105 = temp__5735__auto___31104__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31105));
} else {
}


var G__31106 = cljs.core.next.call(null,seq__31037__$1);
var G__31107 = null;
var G__31108 = (0);
var G__31109 = (0);
seq__31037 = G__31106;
chunk__31038 = G__31107;
count__31039 = G__31108;
i__31040 = G__31109;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31110 = cljs.core.conj.call(null,via,t);
var G__31111 = cljs.core.ex_cause.call(null,t);
via = G__31110;
t = G__31111;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31114 = datafied_throwable;
var map__31114__$1 = (((((!((map__31114 == null))))?(((((map__31114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31114):map__31114);
var via = cljs.core.get.call(null,map__31114__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31114__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31114__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31115 = cljs.core.last.call(null,via);
var map__31115__$1 = (((((!((map__31115 == null))))?(((((map__31115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31115):map__31115);
var type = cljs.core.get.call(null,map__31115__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31115__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31115__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31116 = data;
var map__31116__$1 = (((((!((map__31116 == null))))?(((((map__31116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31116):map__31116);
var problems = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31117 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31117__$1 = (((((!((map__31117 == null))))?(((((map__31117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31117):map__31117);
var top_data = map__31117__$1;
var source = cljs.core.get.call(null,map__31117__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31122 = phase;
var G__31122__$1 = (((G__31122 instanceof cljs.core.Keyword))?G__31122.fqn:null);
switch (G__31122__$1) {
case "read-source":
var map__31123 = data;
var map__31123__$1 = (((((!((map__31123 == null))))?(((((map__31123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31123):map__31123);
var line = cljs.core.get.call(null,map__31123__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31123__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31125 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31125__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31125,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31125);
var G__31125__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31125__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31125__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31125__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31125__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31126 = top_data;
var G__31126__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31126,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31126);
var G__31126__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31126__$1);
var G__31126__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31126__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31126__$2);
var G__31126__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31126__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31126__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31126__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31126__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31127 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31127,(0),null);
var method = cljs.core.nth.call(null,vec__31127,(1),null);
var file = cljs.core.nth.call(null,vec__31127,(2),null);
var line = cljs.core.nth.call(null,vec__31127,(3),null);
var G__31130 = top_data;
var G__31130__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31130,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31130);
var G__31130__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31130__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31130__$1);
var G__31130__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__31130__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31130__$2);
var G__31130__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31130__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31130__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31130__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31130__$4;
}

break;
case "execution":
var vec__31131 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31131,(0),null);
var method = cljs.core.nth.call(null,vec__31131,(1),null);
var file = cljs.core.nth.call(null,vec__31131,(2),null);
var line = cljs.core.nth.call(null,vec__31131,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31113_SHARP_){
var or__4185__auto__ = (p1__31113_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31113_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__31134 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31134__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31134,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31134);
var G__31134__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31134__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31134__$1);
var G__31134__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31134__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31134__$2);
var G__31134__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31134__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31134__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31134__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31134__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31122__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31138){
var map__31139 = p__31138;
var map__31139__$1 = (((((!((map__31139 == null))))?(((((map__31139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31139):map__31139);
var triage_data = map__31139__$1;
var phase = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31141 = phase;
var G__31141__$1 = (((G__31141 instanceof cljs.core.Keyword))?G__31141.fqn:null);
switch (G__31141__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31142_31151 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31143_31152 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31144_31153 = true;
var _STAR_print_fn_STAR__temp_val__31145_31154 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31144_31153);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31145_31154);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31136_SHARP_){
return cljs.core.dissoc.call(null,p1__31136_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31143_31152);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31142_31151);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31146_31155 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31147_31156 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31148_31157 = true;
var _STAR_print_fn_STAR__temp_val__31149_31158 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31148_31157);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31149_31158);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31137_SHARP_){
return cljs.core.dissoc.call(null,p1__31137_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31147_31156);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31146_31155);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31141__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1577462220274
