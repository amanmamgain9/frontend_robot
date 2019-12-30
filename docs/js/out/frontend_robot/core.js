// Compiled by ClojureScript 1.10.597 {}
goog.provide('frontend_robot.core');
goog.require('cljs.core');
goog.require('reagent.core');
frontend_robot.core.home_page = (function frontend_robot$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome, Aman to Clojurescript"], null)], null);
});
frontend_robot.core.mount_root = (function frontend_robot$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend_robot.core.home_page], null),document.getElementById("app"));
});
frontend_robot.core.init_BANG_ = (function frontend_robot$core$init_BANG_(){
return frontend_robot.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1577462671096
