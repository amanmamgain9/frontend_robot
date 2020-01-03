// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('frontend_robot.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
frontend_robot.core.home_page = (function frontend_robot$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Welcome, Aman to Clojurescript"], null)], null);
});
frontend_robot.core.mount_root = (function frontend_robot$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend_robot.core.home_page], null),document.getElementById("app"));
});
frontend_robot.core.init_BANG_ = (function frontend_robot$core$init_BANG_(){
return frontend_robot.core.mount_root();
});
