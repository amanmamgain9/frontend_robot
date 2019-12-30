// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21961__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21962__i = 0, G__21962__a = new Array(arguments.length -  0);
while (G__21962__i < G__21962__a.length) {G__21962__a[G__21962__i] = arguments[G__21962__i + 0]; ++G__21962__i;}
  args = new cljs.core.IndexedSeq(G__21962__a,0,null);
} 
return G__21961__delegate.call(this,args);};
G__21961.cljs$lang$maxFixedArity = 0;
G__21961.cljs$lang$applyTo = (function (arglist__21963){
var args = cljs.core.seq(arglist__21963);
return G__21961__delegate(args);
});
G__21961.cljs$core$IFn$_invoke$arity$variadic = G__21961__delegate;
return G__21961;
})()
);

(o.error = (function() { 
var G__21964__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21965__i = 0, G__21965__a = new Array(arguments.length -  0);
while (G__21965__i < G__21965__a.length) {G__21965__a[G__21965__i] = arguments[G__21965__i + 0]; ++G__21965__i;}
  args = new cljs.core.IndexedSeq(G__21965__a,0,null);
} 
return G__21964__delegate.call(this,args);};
G__21964.cljs$lang$maxFixedArity = 0;
G__21964.cljs$lang$applyTo = (function (arglist__21966){
var args = cljs.core.seq(arglist__21966);
return G__21964__delegate(args);
});
G__21964.cljs$core$IFn$_invoke$arity$variadic = G__21964__delegate;
return G__21964;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1577462204534
