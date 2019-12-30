// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4185__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4185__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((goog.string.startsWith("clojure.",name)) || (goog.string.startsWith("goog.",name)));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29476_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29476_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (v,k,_){
return goog.object.forEach(v,(function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29477 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29478 = null;
var count__29479 = (0);
var i__29480 = (0);
while(true){
if((i__29480 < count__29479)){
var n = cljs.core._nth.call(null,chunk__29478,i__29480);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29481 = seq__29477;
var G__29482 = chunk__29478;
var G__29483 = count__29479;
var G__29484 = (i__29480 + (1));
seq__29477 = G__29481;
chunk__29478 = G__29482;
count__29479 = G__29483;
i__29480 = G__29484;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29477);
if(temp__5735__auto__){
var seq__29477__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29477__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__29477__$1);
var G__29485 = cljs.core.chunk_rest.call(null,seq__29477__$1);
var G__29486 = c__4609__auto__;
var G__29487 = cljs.core.count.call(null,c__4609__auto__);
var G__29488 = (0);
seq__29477 = G__29485;
chunk__29478 = G__29486;
count__29479 = G__29487;
i__29480 = G__29488;
continue;
} else {
var n = cljs.core.first.call(null,seq__29477__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29489 = cljs.core.next.call(null,seq__29477__$1);
var G__29490 = null;
var G__29491 = (0);
var G__29492 = (0);
seq__29477 = G__29489;
chunk__29478 = G__29490;
count__29479 = G__29491;
i__29480 = G__29492;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29493){
var vec__29494 = p__29493;
var _ = cljs.core.nth.call(null,vec__29494,(0),null);
var v = cljs.core.nth.call(null,vec__29494,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__29497){
var vec__29498 = p__29497;
var k = cljs.core.nth.call(null,vec__29498,(0),null);
var v = cljs.core.nth.call(null,vec__29498,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29510_29518 = cljs.core.seq.call(null,deps);
var chunk__29511_29519 = null;
var count__29512_29520 = (0);
var i__29513_29521 = (0);
while(true){
if((i__29513_29521 < count__29512_29520)){
var dep_29522 = cljs.core._nth.call(null,chunk__29511_29519,i__29513_29521);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_29522;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29522));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29522,(depth + (1)),state);
} else {
}


var G__29523 = seq__29510_29518;
var G__29524 = chunk__29511_29519;
var G__29525 = count__29512_29520;
var G__29526 = (i__29513_29521 + (1));
seq__29510_29518 = G__29523;
chunk__29511_29519 = G__29524;
count__29512_29520 = G__29525;
i__29513_29521 = G__29526;
continue;
} else {
var temp__5735__auto___29527 = cljs.core.seq.call(null,seq__29510_29518);
if(temp__5735__auto___29527){
var seq__29510_29528__$1 = temp__5735__auto___29527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29510_29528__$1)){
var c__4609__auto___29529 = cljs.core.chunk_first.call(null,seq__29510_29528__$1);
var G__29530 = cljs.core.chunk_rest.call(null,seq__29510_29528__$1);
var G__29531 = c__4609__auto___29529;
var G__29532 = cljs.core.count.call(null,c__4609__auto___29529);
var G__29533 = (0);
seq__29510_29518 = G__29530;
chunk__29511_29519 = G__29531;
count__29512_29520 = G__29532;
i__29513_29521 = G__29533;
continue;
} else {
var dep_29534 = cljs.core.first.call(null,seq__29510_29528__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_29534;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29534));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29534,(depth + (1)),state);
} else {
}


var G__29535 = cljs.core.next.call(null,seq__29510_29528__$1);
var G__29536 = null;
var G__29537 = (0);
var G__29538 = (0);
seq__29510_29518 = G__29535;
chunk__29511_29519 = G__29536;
count__29512_29520 = G__29537;
i__29513_29521 = G__29538;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29514){
var vec__29515 = p__29514;
var seq__29516 = cljs.core.seq.call(null,vec__29515);
var first__29517 = cljs.core.first.call(null,seq__29516);
var seq__29516__$1 = cljs.core.next.call(null,seq__29516);
var x = first__29517;
var xs = seq__29516__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29501_SHARP_){
return clojure.set.difference.call(null,p1__29501_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29539 = cljs.core.seq.call(null,provides);
var chunk__29540 = null;
var count__29541 = (0);
var i__29542 = (0);
while(true){
if((i__29542 < count__29541)){
var prov = cljs.core._nth.call(null,chunk__29540,i__29542);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29551_29559 = cljs.core.seq.call(null,requires);
var chunk__29552_29560 = null;
var count__29553_29561 = (0);
var i__29554_29562 = (0);
while(true){
if((i__29554_29562 < count__29553_29561)){
var req_29563 = cljs.core._nth.call(null,chunk__29552_29560,i__29554_29562);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29563,prov);


var G__29564 = seq__29551_29559;
var G__29565 = chunk__29552_29560;
var G__29566 = count__29553_29561;
var G__29567 = (i__29554_29562 + (1));
seq__29551_29559 = G__29564;
chunk__29552_29560 = G__29565;
count__29553_29561 = G__29566;
i__29554_29562 = G__29567;
continue;
} else {
var temp__5735__auto___29568 = cljs.core.seq.call(null,seq__29551_29559);
if(temp__5735__auto___29568){
var seq__29551_29569__$1 = temp__5735__auto___29568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29551_29569__$1)){
var c__4609__auto___29570 = cljs.core.chunk_first.call(null,seq__29551_29569__$1);
var G__29571 = cljs.core.chunk_rest.call(null,seq__29551_29569__$1);
var G__29572 = c__4609__auto___29570;
var G__29573 = cljs.core.count.call(null,c__4609__auto___29570);
var G__29574 = (0);
seq__29551_29559 = G__29571;
chunk__29552_29560 = G__29572;
count__29553_29561 = G__29573;
i__29554_29562 = G__29574;
continue;
} else {
var req_29575 = cljs.core.first.call(null,seq__29551_29569__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29575,prov);


var G__29576 = cljs.core.next.call(null,seq__29551_29569__$1);
var G__29577 = null;
var G__29578 = (0);
var G__29579 = (0);
seq__29551_29559 = G__29576;
chunk__29552_29560 = G__29577;
count__29553_29561 = G__29578;
i__29554_29562 = G__29579;
continue;
}
} else {
}
}
break;
}


var G__29580 = seq__29539;
var G__29581 = chunk__29540;
var G__29582 = count__29541;
var G__29583 = (i__29542 + (1));
seq__29539 = G__29580;
chunk__29540 = G__29581;
count__29541 = G__29582;
i__29542 = G__29583;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29539);
if(temp__5735__auto__){
var seq__29539__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29539__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__29539__$1);
var G__29584 = cljs.core.chunk_rest.call(null,seq__29539__$1);
var G__29585 = c__4609__auto__;
var G__29586 = cljs.core.count.call(null,c__4609__auto__);
var G__29587 = (0);
seq__29539 = G__29584;
chunk__29540 = G__29585;
count__29541 = G__29586;
i__29542 = G__29587;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29539__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29555_29588 = cljs.core.seq.call(null,requires);
var chunk__29556_29589 = null;
var count__29557_29590 = (0);
var i__29558_29591 = (0);
while(true){
if((i__29558_29591 < count__29557_29590)){
var req_29592 = cljs.core._nth.call(null,chunk__29556_29589,i__29558_29591);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29592,prov);


var G__29593 = seq__29555_29588;
var G__29594 = chunk__29556_29589;
var G__29595 = count__29557_29590;
var G__29596 = (i__29558_29591 + (1));
seq__29555_29588 = G__29593;
chunk__29556_29589 = G__29594;
count__29557_29590 = G__29595;
i__29558_29591 = G__29596;
continue;
} else {
var temp__5735__auto___29597__$1 = cljs.core.seq.call(null,seq__29555_29588);
if(temp__5735__auto___29597__$1){
var seq__29555_29598__$1 = temp__5735__auto___29597__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29555_29598__$1)){
var c__4609__auto___29599 = cljs.core.chunk_first.call(null,seq__29555_29598__$1);
var G__29600 = cljs.core.chunk_rest.call(null,seq__29555_29598__$1);
var G__29601 = c__4609__auto___29599;
var G__29602 = cljs.core.count.call(null,c__4609__auto___29599);
var G__29603 = (0);
seq__29555_29588 = G__29600;
chunk__29556_29589 = G__29601;
count__29557_29590 = G__29602;
i__29558_29591 = G__29603;
continue;
} else {
var req_29604 = cljs.core.first.call(null,seq__29555_29598__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29604,prov);


var G__29605 = cljs.core.next.call(null,seq__29555_29598__$1);
var G__29606 = null;
var G__29607 = (0);
var G__29608 = (0);
seq__29555_29588 = G__29605;
chunk__29556_29589 = G__29606;
count__29557_29590 = G__29607;
i__29558_29591 = G__29608;
continue;
}
} else {
}
}
break;
}


var G__29609 = cljs.core.next.call(null,seq__29539__$1);
var G__29610 = null;
var G__29611 = (0);
var G__29612 = (0);
seq__29539 = G__29609;
chunk__29540 = G__29610;
count__29541 = G__29611;
i__29542 = G__29612;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29613_29617 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29614_29618 = null;
var count__29615_29619 = (0);
var i__29616_29620 = (0);
while(true){
if((i__29616_29620 < count__29615_29619)){
var ns_29621 = cljs.core._nth.call(null,chunk__29614_29618,i__29616_29620);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29621);


var G__29622 = seq__29613_29617;
var G__29623 = chunk__29614_29618;
var G__29624 = count__29615_29619;
var G__29625 = (i__29616_29620 + (1));
seq__29613_29617 = G__29622;
chunk__29614_29618 = G__29623;
count__29615_29619 = G__29624;
i__29616_29620 = G__29625;
continue;
} else {
var temp__5735__auto___29626 = cljs.core.seq.call(null,seq__29613_29617);
if(temp__5735__auto___29626){
var seq__29613_29627__$1 = temp__5735__auto___29626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29613_29627__$1)){
var c__4609__auto___29628 = cljs.core.chunk_first.call(null,seq__29613_29627__$1);
var G__29629 = cljs.core.chunk_rest.call(null,seq__29613_29627__$1);
var G__29630 = c__4609__auto___29628;
var G__29631 = cljs.core.count.call(null,c__4609__auto___29628);
var G__29632 = (0);
seq__29613_29617 = G__29629;
chunk__29614_29618 = G__29630;
count__29615_29619 = G__29631;
i__29616_29620 = G__29632;
continue;
} else {
var ns_29633 = cljs.core.first.call(null,seq__29613_29627__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29633);


var G__29634 = cljs.core.next.call(null,seq__29613_29627__$1);
var G__29635 = null;
var G__29636 = (0);
var G__29637 = (0);
seq__29613_29617 = G__29634;
chunk__29614_29618 = G__29635;
count__29615_29619 = G__29636;
i__29616_29620 = G__29637;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4185__auto__ = goog.require__;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__29638__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29639__i = 0, G__29639__a = new Array(arguments.length -  0);
while (G__29639__i < G__29639__a.length) {G__29639__a[G__29639__i] = arguments[G__29639__i + 0]; ++G__29639__i;}
  args = new cljs.core.IndexedSeq(G__29639__a,0,null);
} 
return G__29638__delegate.call(this,args);};
G__29638.cljs$lang$maxFixedArity = 0;
G__29638.cljs$lang$applyTo = (function (arglist__29640){
var args = cljs.core.seq(arglist__29640);
return G__29638__delegate(args);
});
G__29638.cljs$core$IFn$_invoke$arity$variadic = G__29638__delegate;
return G__29638;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29641_SHARP_,p2__29642_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29641_SHARP_)),p2__29642_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29643_SHARP_,p2__29644_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29643_SHARP_),p2__29644_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29645 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29645.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29645.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29645;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29646){if((e29646 instanceof Error)){
var e = e29646;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29646;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29647){if((e29647 instanceof Error)){
var e = e29647;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29647;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29648 = cljs.core._EQ_;
var expr__29649 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29648.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29649))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29648.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29649))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29648.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29649))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29651,callback){
var map__29652 = p__29651;
var map__29652__$1 = (((((!((map__29652 == null))))?(((((map__29652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29652):map__29652);
var file_msg = map__29652__$1;
var request_url = cljs.core.get.call(null,map__29652__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4185__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_29690){
var state_val_29691 = (state_29690[(1)]);
if((state_val_29691 === (7))){
var inst_29686 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29692_29718 = state_29690__$1;
(statearr_29692_29718[(2)] = inst_29686);

(statearr_29692_29718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (1))){
var state_29690__$1 = state_29690;
var statearr_29693_29719 = state_29690__$1;
(statearr_29693_29719[(2)] = null);

(statearr_29693_29719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (4))){
var inst_29656 = (state_29690[(7)]);
var inst_29656__$1 = (state_29690[(2)]);
var state_29690__$1 = (function (){var statearr_29694 = state_29690;
(statearr_29694[(7)] = inst_29656__$1);

return statearr_29694;
})();
if(cljs.core.truth_(inst_29656__$1)){
var statearr_29695_29720 = state_29690__$1;
(statearr_29695_29720[(1)] = (5));

} else {
var statearr_29696_29721 = state_29690__$1;
(statearr_29696_29721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (15))){
var inst_29669 = (state_29690[(8)]);
var inst_29671 = (state_29690[(9)]);
var inst_29673 = inst_29671.call(null,inst_29669);
var state_29690__$1 = state_29690;
var statearr_29697_29722 = state_29690__$1;
(statearr_29697_29722[(2)] = inst_29673);

(statearr_29697_29722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (13))){
var inst_29680 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29698_29723 = state_29690__$1;
(statearr_29698_29723[(2)] = inst_29680);

(statearr_29698_29723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (6))){
var state_29690__$1 = state_29690;
var statearr_29699_29724 = state_29690__$1;
(statearr_29699_29724[(2)] = null);

(statearr_29699_29724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (17))){
var inst_29677 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29700_29725 = state_29690__$1;
(statearr_29700_29725[(2)] = inst_29677);

(statearr_29700_29725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (3))){
var inst_29688 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29690__$1,inst_29688);
} else {
if((state_val_29691 === (12))){
var state_29690__$1 = state_29690;
var statearr_29701_29726 = state_29690__$1;
(statearr_29701_29726[(2)] = null);

(statearr_29701_29726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (2))){
var state_29690__$1 = state_29690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29690__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29691 === (11))){
var inst_29661 = (state_29690[(10)]);
var inst_29667 = figwheel.client.file_reloading.blocking_load.call(null,inst_29661);
var state_29690__$1 = state_29690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29690__$1,(14),inst_29667);
} else {
if((state_val_29691 === (9))){
var inst_29661 = (state_29690[(10)]);
var state_29690__$1 = state_29690;
if(cljs.core.truth_(inst_29661)){
var statearr_29702_29727 = state_29690__$1;
(statearr_29702_29727[(1)] = (11));

} else {
var statearr_29703_29728 = state_29690__$1;
(statearr_29703_29728[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (5))){
var inst_29656 = (state_29690[(7)]);
var inst_29662 = (state_29690[(11)]);
var inst_29661 = cljs.core.nth.call(null,inst_29656,(0),null);
var inst_29662__$1 = cljs.core.nth.call(null,inst_29656,(1),null);
var state_29690__$1 = (function (){var statearr_29704 = state_29690;
(statearr_29704[(10)] = inst_29661);

(statearr_29704[(11)] = inst_29662__$1);

return statearr_29704;
})();
if(cljs.core.truth_(inst_29662__$1)){
var statearr_29705_29729 = state_29690__$1;
(statearr_29705_29729[(1)] = (8));

} else {
var statearr_29706_29730 = state_29690__$1;
(statearr_29706_29730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (14))){
var inst_29661 = (state_29690[(10)]);
var inst_29671 = (state_29690[(9)]);
var inst_29669 = (state_29690[(2)]);
var inst_29670 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29671__$1 = cljs.core.get.call(null,inst_29670,inst_29661);
var state_29690__$1 = (function (){var statearr_29707 = state_29690;
(statearr_29707[(8)] = inst_29669);

(statearr_29707[(9)] = inst_29671__$1);

return statearr_29707;
})();
if(cljs.core.truth_(inst_29671__$1)){
var statearr_29708_29731 = state_29690__$1;
(statearr_29708_29731[(1)] = (15));

} else {
var statearr_29709_29732 = state_29690__$1;
(statearr_29709_29732[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (16))){
var inst_29669 = (state_29690[(8)]);
var inst_29675 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29669);
var state_29690__$1 = state_29690;
var statearr_29710_29733 = state_29690__$1;
(statearr_29710_29733[(2)] = inst_29675);

(statearr_29710_29733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (10))){
var inst_29682 = (state_29690[(2)]);
var state_29690__$1 = (function (){var statearr_29711 = state_29690;
(statearr_29711[(12)] = inst_29682);

return statearr_29711;
})();
var statearr_29712_29734 = state_29690__$1;
(statearr_29712_29734[(2)] = null);

(statearr_29712_29734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (8))){
var inst_29662 = (state_29690[(11)]);
var inst_29664 = eval(inst_29662);
var state_29690__$1 = state_29690;
var statearr_29713_29735 = state_29690__$1;
(statearr_29713_29735[(2)] = inst_29664);

(statearr_29713_29735[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27267__auto__ = null;
var figwheel$client$file_reloading$state_machine__27267__auto____0 = (function (){
var statearr_29714 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29714[(0)] = figwheel$client$file_reloading$state_machine__27267__auto__);

(statearr_29714[(1)] = (1));

return statearr_29714;
});
var figwheel$client$file_reloading$state_machine__27267__auto____1 = (function (state_29690){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_29690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e29715){if((e29715 instanceof Object)){
var ex__27270__auto__ = e29715;
var statearr_29716_29736 = state_29690;
(statearr_29716_29736[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29737 = state_29690;
state_29690 = G__29737;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27267__auto__ = function(state_29690){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27267__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27267__auto____1.call(this,state_29690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27267__auto____0;
figwheel$client$file_reloading$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27267__auto____1;
return figwheel$client$file_reloading$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_29717 = f__27362__auto__.call(null);
(statearr_29717[(6)] = c__27361__auto__);

return statearr_29717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));

return c__27361__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29739 = arguments.length;
switch (G__29739) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29741,callback){
var map__29742 = p__29741;
var map__29742__$1 = (((((!((map__29742 == null))))?(((((map__29742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29742):map__29742);
var file_msg = map__29742__$1;
var namespace = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29744){
var map__29745 = p__29744;
var map__29745__$1 = (((((!((map__29745 == null))))?(((((map__29745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29745):map__29745);
var file_msg = map__29745__$1;
var namespace = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29747){
var map__29748 = p__29747;
var map__29748__$1 = (((((!((map__29748 == null))))?(((((map__29748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29748):map__29748);
var file_msg = map__29748__$1;
var namespace = cljs.core.get.call(null,map__29748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4185__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29750,callback){
var map__29751 = p__29750;
var map__29751__$1 = (((((!((map__29751 == null))))?(((((map__29751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29751):map__29751);
var file_msg = map__29751__$1;
var request_url = cljs.core.get.call(null,map__29751__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27361__auto___29801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_29786){
var state_val_29787 = (state_29786[(1)]);
if((state_val_29787 === (1))){
var inst_29760 = cljs.core.seq.call(null,files);
var inst_29761 = cljs.core.first.call(null,inst_29760);
var inst_29762 = cljs.core.next.call(null,inst_29760);
var inst_29763 = files;
var state_29786__$1 = (function (){var statearr_29788 = state_29786;
(statearr_29788[(7)] = inst_29763);

(statearr_29788[(8)] = inst_29762);

(statearr_29788[(9)] = inst_29761);

return statearr_29788;
})();
var statearr_29789_29802 = state_29786__$1;
(statearr_29789_29802[(2)] = null);

(statearr_29789_29802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (2))){
var inst_29769 = (state_29786[(10)]);
var inst_29763 = (state_29786[(7)]);
var inst_29768 = cljs.core.seq.call(null,inst_29763);
var inst_29769__$1 = cljs.core.first.call(null,inst_29768);
var inst_29770 = cljs.core.next.call(null,inst_29768);
var inst_29771 = (inst_29769__$1 == null);
var inst_29772 = cljs.core.not.call(null,inst_29771);
var state_29786__$1 = (function (){var statearr_29790 = state_29786;
(statearr_29790[(10)] = inst_29769__$1);

(statearr_29790[(11)] = inst_29770);

return statearr_29790;
})();
if(inst_29772){
var statearr_29791_29803 = state_29786__$1;
(statearr_29791_29803[(1)] = (4));

} else {
var statearr_29792_29804 = state_29786__$1;
(statearr_29792_29804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (3))){
var inst_29784 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29786__$1,inst_29784);
} else {
if((state_val_29787 === (4))){
var inst_29769 = (state_29786[(10)]);
var inst_29774 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29769);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29786__$1,(7),inst_29774);
} else {
if((state_val_29787 === (5))){
var inst_29780 = cljs.core.async.close_BANG_.call(null,out);
var state_29786__$1 = state_29786;
var statearr_29793_29805 = state_29786__$1;
(statearr_29793_29805[(2)] = inst_29780);

(statearr_29793_29805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (6))){
var inst_29782 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29794_29806 = state_29786__$1;
(statearr_29794_29806[(2)] = inst_29782);

(statearr_29794_29806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (7))){
var inst_29770 = (state_29786[(11)]);
var inst_29776 = (state_29786[(2)]);
var inst_29777 = cljs.core.async.put_BANG_.call(null,out,inst_29776);
var inst_29763 = inst_29770;
var state_29786__$1 = (function (){var statearr_29795 = state_29786;
(statearr_29795[(7)] = inst_29763);

(statearr_29795[(12)] = inst_29777);

return statearr_29795;
})();
var statearr_29796_29807 = state_29786__$1;
(statearr_29796_29807[(2)] = null);

(statearr_29796_29807[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto____0 = (function (){
var statearr_29797 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29797[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto__);

(statearr_29797[(1)] = (1));

return statearr_29797;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto____1 = (function (state_29786){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_29786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e29798){if((e29798 instanceof Object)){
var ex__27270__auto__ = e29798;
var statearr_29799_29808 = state_29786;
(statearr_29799_29808[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29809 = state_29786;
state_29786 = G__29809;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto__ = function(state_29786){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto____1.call(this,state_29786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_29800 = f__27362__auto__.call(null);
(statearr_29800[(6)] = c__27361__auto___29801);

return statearr_29800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29810,opts){
var map__29811 = p__29810;
var map__29811__$1 = (((((!((map__29811 == null))))?(((((map__29811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29811):map__29811);
var eval_body = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4174__auto__ = eval_body;
if(cljs.core.truth_(and__4174__auto__)){
return typeof eval_body === 'string';
} else {
return and__4174__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29813){var e = e29813;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29814_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29814_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29815){
var vec__29816 = p__29815;
var k = cljs.core.nth.call(null,vec__29816,(0),null);
var v = cljs.core.nth.call(null,vec__29816,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29819){
var vec__29820 = p__29819;
var k = cljs.core.nth.call(null,vec__29820,(0),null);
var v = cljs.core.nth.call(null,vec__29820,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29826,p__29827){
var map__29828 = p__29826;
var map__29828__$1 = (((((!((map__29828 == null))))?(((((map__29828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29828):map__29828);
var opts = map__29828__$1;
var before_jsload = cljs.core.get.call(null,map__29828__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29828__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29828__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29829 = p__29827;
var map__29829__$1 = (((((!((map__29829 == null))))?(((((map__29829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29829):map__29829);
var msg = map__29829__$1;
var files = cljs.core.get.call(null,map__29829__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29829__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29829__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_29983){
var state_val_29984 = (state_29983[(1)]);
if((state_val_29984 === (7))){
var inst_29844 = (state_29983[(7)]);
var inst_29843 = (state_29983[(8)]);
var inst_29845 = (state_29983[(9)]);
var inst_29846 = (state_29983[(10)]);
var inst_29851 = cljs.core._nth.call(null,inst_29844,inst_29846);
var inst_29852 = figwheel.client.file_reloading.eval_body.call(null,inst_29851,opts);
var inst_29853 = (inst_29846 + (1));
var tmp29985 = inst_29844;
var tmp29986 = inst_29843;
var tmp29987 = inst_29845;
var inst_29843__$1 = tmp29986;
var inst_29844__$1 = tmp29985;
var inst_29845__$1 = tmp29987;
var inst_29846__$1 = inst_29853;
var state_29983__$1 = (function (){var statearr_29988 = state_29983;
(statearr_29988[(7)] = inst_29844__$1);

(statearr_29988[(8)] = inst_29843__$1);

(statearr_29988[(9)] = inst_29845__$1);

(statearr_29988[(10)] = inst_29846__$1);

(statearr_29988[(11)] = inst_29852);

return statearr_29988;
})();
var statearr_29989_30072 = state_29983__$1;
(statearr_29989_30072[(2)] = null);

(statearr_29989_30072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (20))){
var inst_29886 = (state_29983[(12)]);
var inst_29894 = figwheel.client.file_reloading.sort_files.call(null,inst_29886);
var state_29983__$1 = state_29983;
var statearr_29990_30073 = state_29983__$1;
(statearr_29990_30073[(2)] = inst_29894);

(statearr_29990_30073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (27))){
var state_29983__$1 = state_29983;
var statearr_29991_30074 = state_29983__$1;
(statearr_29991_30074[(2)] = null);

(statearr_29991_30074[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (1))){
var inst_29835 = (state_29983[(13)]);
var inst_29832 = before_jsload.call(null,files);
var inst_29833 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29834 = (function (){return (function (p1__29823_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29823_SHARP_);
});
})();
var inst_29835__$1 = cljs.core.filter.call(null,inst_29834,files);
var inst_29836 = cljs.core.not_empty.call(null,inst_29835__$1);
var state_29983__$1 = (function (){var statearr_29992 = state_29983;
(statearr_29992[(14)] = inst_29832);

(statearr_29992[(13)] = inst_29835__$1);

(statearr_29992[(15)] = inst_29833);

return statearr_29992;
})();
if(cljs.core.truth_(inst_29836)){
var statearr_29993_30075 = state_29983__$1;
(statearr_29993_30075[(1)] = (2));

} else {
var statearr_29994_30076 = state_29983__$1;
(statearr_29994_30076[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (24))){
var state_29983__$1 = state_29983;
var statearr_29995_30077 = state_29983__$1;
(statearr_29995_30077[(2)] = null);

(statearr_29995_30077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (39))){
var inst_29936 = (state_29983[(16)]);
var state_29983__$1 = state_29983;
var statearr_29996_30078 = state_29983__$1;
(statearr_29996_30078[(2)] = inst_29936);

(statearr_29996_30078[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (46))){
var inst_29978 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
var statearr_29997_30079 = state_29983__$1;
(statearr_29997_30079[(2)] = inst_29978);

(statearr_29997_30079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (4))){
var inst_29880 = (state_29983[(2)]);
var inst_29881 = cljs.core.List.EMPTY;
var inst_29882 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29881);
var inst_29883 = (function (){return (function (p1__29824_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29824_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29824_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29824_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_29884 = cljs.core.filter.call(null,inst_29883,files);
var inst_29885 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29886 = cljs.core.concat.call(null,inst_29884,inst_29885);
var state_29983__$1 = (function (){var statearr_29998 = state_29983;
(statearr_29998[(17)] = inst_29882);

(statearr_29998[(18)] = inst_29880);

(statearr_29998[(12)] = inst_29886);

return statearr_29998;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29999_30080 = state_29983__$1;
(statearr_29999_30080[(1)] = (16));

} else {
var statearr_30000_30081 = state_29983__$1;
(statearr_30000_30081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (15))){
var inst_29870 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
var statearr_30001_30082 = state_29983__$1;
(statearr_30001_30082[(2)] = inst_29870);

(statearr_30001_30082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (21))){
var inst_29896 = (state_29983[(19)]);
var inst_29896__$1 = (state_29983[(2)]);
var inst_29897 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29896__$1);
var state_29983__$1 = (function (){var statearr_30002 = state_29983;
(statearr_30002[(19)] = inst_29896__$1);

return statearr_30002;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29983__$1,(22),inst_29897);
} else {
if((state_val_29984 === (31))){
var inst_29981 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29983__$1,inst_29981);
} else {
if((state_val_29984 === (32))){
var inst_29936 = (state_29983[(16)]);
var inst_29941 = inst_29936.cljs$lang$protocol_mask$partition0$;
var inst_29942 = (inst_29941 & (64));
var inst_29943 = inst_29936.cljs$core$ISeq$;
var inst_29944 = (cljs.core.PROTOCOL_SENTINEL === inst_29943);
var inst_29945 = ((inst_29942) || (inst_29944));
var state_29983__$1 = state_29983;
if(cljs.core.truth_(inst_29945)){
var statearr_30003_30083 = state_29983__$1;
(statearr_30003_30083[(1)] = (35));

} else {
var statearr_30004_30084 = state_29983__$1;
(statearr_30004_30084[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (40))){
var inst_29958 = (state_29983[(20)]);
var inst_29957 = (state_29983[(2)]);
var inst_29958__$1 = cljs.core.get.call(null,inst_29957,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29959 = cljs.core.get.call(null,inst_29957,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29960 = cljs.core.not_empty.call(null,inst_29958__$1);
var state_29983__$1 = (function (){var statearr_30005 = state_29983;
(statearr_30005[(21)] = inst_29959);

(statearr_30005[(20)] = inst_29958__$1);

return statearr_30005;
})();
if(cljs.core.truth_(inst_29960)){
var statearr_30006_30085 = state_29983__$1;
(statearr_30006_30085[(1)] = (41));

} else {
var statearr_30007_30086 = state_29983__$1;
(statearr_30007_30086[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (33))){
var state_29983__$1 = state_29983;
var statearr_30008_30087 = state_29983__$1;
(statearr_30008_30087[(2)] = false);

(statearr_30008_30087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (13))){
var inst_29856 = (state_29983[(22)]);
var inst_29860 = cljs.core.chunk_first.call(null,inst_29856);
var inst_29861 = cljs.core.chunk_rest.call(null,inst_29856);
var inst_29862 = cljs.core.count.call(null,inst_29860);
var inst_29843 = inst_29861;
var inst_29844 = inst_29860;
var inst_29845 = inst_29862;
var inst_29846 = (0);
var state_29983__$1 = (function (){var statearr_30009 = state_29983;
(statearr_30009[(7)] = inst_29844);

(statearr_30009[(8)] = inst_29843);

(statearr_30009[(9)] = inst_29845);

(statearr_30009[(10)] = inst_29846);

return statearr_30009;
})();
var statearr_30010_30088 = state_29983__$1;
(statearr_30010_30088[(2)] = null);

(statearr_30010_30088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (22))){
var inst_29896 = (state_29983[(19)]);
var inst_29904 = (state_29983[(23)]);
var inst_29900 = (state_29983[(24)]);
var inst_29899 = (state_29983[(25)]);
var inst_29899__$1 = (state_29983[(2)]);
var inst_29900__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29899__$1);
var inst_29901 = (function (){var all_files = inst_29896;
var res_SINGLEQUOTE_ = inst_29899__$1;
var res = inst_29900__$1;
return (function (p1__29825_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29825_SHARP_));
});
})();
var inst_29902 = cljs.core.filter.call(null,inst_29901,inst_29899__$1);
var inst_29903 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29904__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29903);
var inst_29905 = cljs.core.not_empty.call(null,inst_29904__$1);
var state_29983__$1 = (function (){var statearr_30011 = state_29983;
(statearr_30011[(23)] = inst_29904__$1);

(statearr_30011[(24)] = inst_29900__$1);

(statearr_30011[(26)] = inst_29902);

(statearr_30011[(25)] = inst_29899__$1);

return statearr_30011;
})();
if(cljs.core.truth_(inst_29905)){
var statearr_30012_30089 = state_29983__$1;
(statearr_30012_30089[(1)] = (23));

} else {
var statearr_30013_30090 = state_29983__$1;
(statearr_30013_30090[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (36))){
var state_29983__$1 = state_29983;
var statearr_30014_30091 = state_29983__$1;
(statearr_30014_30091[(2)] = false);

(statearr_30014_30091[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (41))){
var inst_29958 = (state_29983[(20)]);
var inst_29962 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29963 = cljs.core.map.call(null,inst_29962,inst_29958);
var inst_29964 = cljs.core.pr_str.call(null,inst_29963);
var inst_29965 = ["figwheel-no-load meta-data: ",inst_29964].join('');
var inst_29966 = figwheel.client.utils.log.call(null,inst_29965);
var state_29983__$1 = state_29983;
var statearr_30015_30092 = state_29983__$1;
(statearr_30015_30092[(2)] = inst_29966);

(statearr_30015_30092[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (43))){
var inst_29959 = (state_29983[(21)]);
var inst_29969 = (state_29983[(2)]);
var inst_29970 = cljs.core.not_empty.call(null,inst_29959);
var state_29983__$1 = (function (){var statearr_30016 = state_29983;
(statearr_30016[(27)] = inst_29969);

return statearr_30016;
})();
if(cljs.core.truth_(inst_29970)){
var statearr_30017_30093 = state_29983__$1;
(statearr_30017_30093[(1)] = (44));

} else {
var statearr_30018_30094 = state_29983__$1;
(statearr_30018_30094[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (29))){
var inst_29896 = (state_29983[(19)]);
var inst_29904 = (state_29983[(23)]);
var inst_29900 = (state_29983[(24)]);
var inst_29902 = (state_29983[(26)]);
var inst_29899 = (state_29983[(25)]);
var inst_29936 = (state_29983[(16)]);
var inst_29932 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29935 = (function (){var all_files = inst_29896;
var res_SINGLEQUOTE_ = inst_29899;
var res = inst_29900;
var files_not_loaded = inst_29902;
var dependencies_that_loaded = inst_29904;
return (function (p__29934){
var map__30019 = p__29934;
var map__30019__$1 = (((((!((map__30019 == null))))?(((((map__30019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30019):map__30019);
var namespace = cljs.core.get.call(null,map__30019__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_29936__$1 = cljs.core.group_by.call(null,inst_29935,inst_29902);
var inst_29938 = (inst_29936__$1 == null);
var inst_29939 = cljs.core.not.call(null,inst_29938);
var state_29983__$1 = (function (){var statearr_30021 = state_29983;
(statearr_30021[(28)] = inst_29932);

(statearr_30021[(16)] = inst_29936__$1);

return statearr_30021;
})();
if(inst_29939){
var statearr_30022_30095 = state_29983__$1;
(statearr_30022_30095[(1)] = (32));

} else {
var statearr_30023_30096 = state_29983__$1;
(statearr_30023_30096[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (44))){
var inst_29959 = (state_29983[(21)]);
var inst_29972 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29959);
var inst_29973 = cljs.core.pr_str.call(null,inst_29972);
var inst_29974 = ["not required: ",inst_29973].join('');
var inst_29975 = figwheel.client.utils.log.call(null,inst_29974);
var state_29983__$1 = state_29983;
var statearr_30024_30097 = state_29983__$1;
(statearr_30024_30097[(2)] = inst_29975);

(statearr_30024_30097[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (6))){
var inst_29877 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
var statearr_30025_30098 = state_29983__$1;
(statearr_30025_30098[(2)] = inst_29877);

(statearr_30025_30098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (28))){
var inst_29902 = (state_29983[(26)]);
var inst_29929 = (state_29983[(2)]);
var inst_29930 = cljs.core.not_empty.call(null,inst_29902);
var state_29983__$1 = (function (){var statearr_30026 = state_29983;
(statearr_30026[(29)] = inst_29929);

return statearr_30026;
})();
if(cljs.core.truth_(inst_29930)){
var statearr_30027_30099 = state_29983__$1;
(statearr_30027_30099[(1)] = (29));

} else {
var statearr_30028_30100 = state_29983__$1;
(statearr_30028_30100[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (25))){
var inst_29900 = (state_29983[(24)]);
var inst_29916 = (state_29983[(2)]);
var inst_29917 = cljs.core.not_empty.call(null,inst_29900);
var state_29983__$1 = (function (){var statearr_30029 = state_29983;
(statearr_30029[(30)] = inst_29916);

return statearr_30029;
})();
if(cljs.core.truth_(inst_29917)){
var statearr_30030_30101 = state_29983__$1;
(statearr_30030_30101[(1)] = (26));

} else {
var statearr_30031_30102 = state_29983__$1;
(statearr_30031_30102[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (34))){
var inst_29952 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
if(cljs.core.truth_(inst_29952)){
var statearr_30032_30103 = state_29983__$1;
(statearr_30032_30103[(1)] = (38));

} else {
var statearr_30033_30104 = state_29983__$1;
(statearr_30033_30104[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (17))){
var state_29983__$1 = state_29983;
var statearr_30034_30105 = state_29983__$1;
(statearr_30034_30105[(2)] = recompile_dependents);

(statearr_30034_30105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (3))){
var state_29983__$1 = state_29983;
var statearr_30035_30106 = state_29983__$1;
(statearr_30035_30106[(2)] = null);

(statearr_30035_30106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (12))){
var inst_29873 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
var statearr_30036_30107 = state_29983__$1;
(statearr_30036_30107[(2)] = inst_29873);

(statearr_30036_30107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (2))){
var inst_29835 = (state_29983[(13)]);
var inst_29842 = cljs.core.seq.call(null,inst_29835);
var inst_29843 = inst_29842;
var inst_29844 = null;
var inst_29845 = (0);
var inst_29846 = (0);
var state_29983__$1 = (function (){var statearr_30037 = state_29983;
(statearr_30037[(7)] = inst_29844);

(statearr_30037[(8)] = inst_29843);

(statearr_30037[(9)] = inst_29845);

(statearr_30037[(10)] = inst_29846);

return statearr_30037;
})();
var statearr_30038_30108 = state_29983__$1;
(statearr_30038_30108[(2)] = null);

(statearr_30038_30108[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (23))){
var inst_29896 = (state_29983[(19)]);
var inst_29904 = (state_29983[(23)]);
var inst_29900 = (state_29983[(24)]);
var inst_29902 = (state_29983[(26)]);
var inst_29899 = (state_29983[(25)]);
var inst_29907 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29909 = (function (){var all_files = inst_29896;
var res_SINGLEQUOTE_ = inst_29899;
var res = inst_29900;
var files_not_loaded = inst_29902;
var dependencies_that_loaded = inst_29904;
return (function (p__29908){
var map__30039 = p__29908;
var map__30039__$1 = (((((!((map__30039 == null))))?(((((map__30039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30039):map__30039);
var request_url = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29910 = cljs.core.reverse.call(null,inst_29904);
var inst_29911 = cljs.core.map.call(null,inst_29909,inst_29910);
var inst_29912 = cljs.core.pr_str.call(null,inst_29911);
var inst_29913 = figwheel.client.utils.log.call(null,inst_29912);
var state_29983__$1 = (function (){var statearr_30041 = state_29983;
(statearr_30041[(31)] = inst_29907);

return statearr_30041;
})();
var statearr_30042_30109 = state_29983__$1;
(statearr_30042_30109[(2)] = inst_29913);

(statearr_30042_30109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (35))){
var state_29983__$1 = state_29983;
var statearr_30043_30110 = state_29983__$1;
(statearr_30043_30110[(2)] = true);

(statearr_30043_30110[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (19))){
var inst_29886 = (state_29983[(12)]);
var inst_29892 = figwheel.client.file_reloading.expand_files.call(null,inst_29886);
var state_29983__$1 = state_29983;
var statearr_30044_30111 = state_29983__$1;
(statearr_30044_30111[(2)] = inst_29892);

(statearr_30044_30111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (11))){
var state_29983__$1 = state_29983;
var statearr_30045_30112 = state_29983__$1;
(statearr_30045_30112[(2)] = null);

(statearr_30045_30112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (9))){
var inst_29875 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
var statearr_30046_30113 = state_29983__$1;
(statearr_30046_30113[(2)] = inst_29875);

(statearr_30046_30113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (5))){
var inst_29845 = (state_29983[(9)]);
var inst_29846 = (state_29983[(10)]);
var inst_29848 = (inst_29846 < inst_29845);
var inst_29849 = inst_29848;
var state_29983__$1 = state_29983;
if(cljs.core.truth_(inst_29849)){
var statearr_30047_30114 = state_29983__$1;
(statearr_30047_30114[(1)] = (7));

} else {
var statearr_30048_30115 = state_29983__$1;
(statearr_30048_30115[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (14))){
var inst_29856 = (state_29983[(22)]);
var inst_29865 = cljs.core.first.call(null,inst_29856);
var inst_29866 = figwheel.client.file_reloading.eval_body.call(null,inst_29865,opts);
var inst_29867 = cljs.core.next.call(null,inst_29856);
var inst_29843 = inst_29867;
var inst_29844 = null;
var inst_29845 = (0);
var inst_29846 = (0);
var state_29983__$1 = (function (){var statearr_30049 = state_29983;
(statearr_30049[(7)] = inst_29844);

(statearr_30049[(8)] = inst_29843);

(statearr_30049[(32)] = inst_29866);

(statearr_30049[(9)] = inst_29845);

(statearr_30049[(10)] = inst_29846);

return statearr_30049;
})();
var statearr_30050_30116 = state_29983__$1;
(statearr_30050_30116[(2)] = null);

(statearr_30050_30116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (45))){
var state_29983__$1 = state_29983;
var statearr_30051_30117 = state_29983__$1;
(statearr_30051_30117[(2)] = null);

(statearr_30051_30117[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (26))){
var inst_29896 = (state_29983[(19)]);
var inst_29904 = (state_29983[(23)]);
var inst_29900 = (state_29983[(24)]);
var inst_29902 = (state_29983[(26)]);
var inst_29899 = (state_29983[(25)]);
var inst_29919 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29921 = (function (){var all_files = inst_29896;
var res_SINGLEQUOTE_ = inst_29899;
var res = inst_29900;
var files_not_loaded = inst_29902;
var dependencies_that_loaded = inst_29904;
return (function (p__29920){
var map__30052 = p__29920;
var map__30052__$1 = (((((!((map__30052 == null))))?(((((map__30052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30052):map__30052);
var namespace = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29922 = cljs.core.map.call(null,inst_29921,inst_29900);
var inst_29923 = cljs.core.pr_str.call(null,inst_29922);
var inst_29924 = figwheel.client.utils.log.call(null,inst_29923);
var inst_29925 = (function (){var all_files = inst_29896;
var res_SINGLEQUOTE_ = inst_29899;
var res = inst_29900;
var files_not_loaded = inst_29902;
var dependencies_that_loaded = inst_29904;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29926 = setTimeout(inst_29925,(10));
var state_29983__$1 = (function (){var statearr_30054 = state_29983;
(statearr_30054[(33)] = inst_29919);

(statearr_30054[(34)] = inst_29924);

return statearr_30054;
})();
var statearr_30055_30118 = state_29983__$1;
(statearr_30055_30118[(2)] = inst_29926);

(statearr_30055_30118[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (16))){
var state_29983__$1 = state_29983;
var statearr_30056_30119 = state_29983__$1;
(statearr_30056_30119[(2)] = reload_dependents);

(statearr_30056_30119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (38))){
var inst_29936 = (state_29983[(16)]);
var inst_29954 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29936);
var state_29983__$1 = state_29983;
var statearr_30057_30120 = state_29983__$1;
(statearr_30057_30120[(2)] = inst_29954);

(statearr_30057_30120[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (30))){
var state_29983__$1 = state_29983;
var statearr_30058_30121 = state_29983__$1;
(statearr_30058_30121[(2)] = null);

(statearr_30058_30121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (10))){
var inst_29856 = (state_29983[(22)]);
var inst_29858 = cljs.core.chunked_seq_QMARK_.call(null,inst_29856);
var state_29983__$1 = state_29983;
if(inst_29858){
var statearr_30059_30122 = state_29983__$1;
(statearr_30059_30122[(1)] = (13));

} else {
var statearr_30060_30123 = state_29983__$1;
(statearr_30060_30123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (18))){
var inst_29890 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
if(cljs.core.truth_(inst_29890)){
var statearr_30061_30124 = state_29983__$1;
(statearr_30061_30124[(1)] = (19));

} else {
var statearr_30062_30125 = state_29983__$1;
(statearr_30062_30125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (42))){
var state_29983__$1 = state_29983;
var statearr_30063_30126 = state_29983__$1;
(statearr_30063_30126[(2)] = null);

(statearr_30063_30126[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (37))){
var inst_29949 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
var statearr_30064_30127 = state_29983__$1;
(statearr_30064_30127[(2)] = inst_29949);

(statearr_30064_30127[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (8))){
var inst_29843 = (state_29983[(8)]);
var inst_29856 = (state_29983[(22)]);
var inst_29856__$1 = cljs.core.seq.call(null,inst_29843);
var state_29983__$1 = (function (){var statearr_30065 = state_29983;
(statearr_30065[(22)] = inst_29856__$1);

return statearr_30065;
})();
if(inst_29856__$1){
var statearr_30066_30128 = state_29983__$1;
(statearr_30066_30128[(1)] = (10));

} else {
var statearr_30067_30129 = state_29983__$1;
(statearr_30067_30129[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto____0 = (function (){
var statearr_30068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30068[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto__);

(statearr_30068[(1)] = (1));

return statearr_30068;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto____1 = (function (state_29983){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_29983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e30069){if((e30069 instanceof Object)){
var ex__27270__auto__ = e30069;
var statearr_30070_30130 = state_29983;
(statearr_30070_30130[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30131 = state_29983;
state_29983 = G__30131;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto__ = function(state_29983){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto____1.call(this,state_29983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_30071 = f__27362__auto__.call(null);
(statearr_30071[(6)] = c__27361__auto__);

return statearr_30071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));

return c__27361__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30134,link){
var map__30135 = p__30134;
var map__30135__$1 = (((((!((map__30135 == null))))?(((((map__30135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30135):map__30135);
var file = cljs.core.get.call(null,map__30135__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__30132_SHARP_,p2__30133_SHARP_){
if(cljs.core._EQ_.call(null,p1__30132_SHARP_,p2__30133_SHARP_)){
return p1__30132_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30138){
var map__30139 = p__30138;
var map__30139__$1 = (((((!((map__30139 == null))))?(((((map__30139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30139):map__30139);
var match_length = cljs.core.get.call(null,map__30139__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30139__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30137_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30137_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30141_SHARP_,p2__30142_SHARP_){
return cljs.core.assoc.call(null,p1__30141_SHARP_,cljs.core.get.call(null,p2__30142_SHARP_,key),p2__30142_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30143 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30143);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30143);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30144,p__30145){
var map__30146 = p__30144;
var map__30146__$1 = (((((!((map__30146 == null))))?(((((map__30146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30146):map__30146);
var on_cssload = cljs.core.get.call(null,map__30146__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30147 = p__30145;
var map__30147__$1 = (((((!((map__30147 == null))))?(((((map__30147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30147):map__30147);
var files_msg = map__30147__$1;
var files = cljs.core.get.call(null,map__30147__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1577462218004
