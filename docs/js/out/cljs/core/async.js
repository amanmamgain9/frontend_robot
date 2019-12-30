// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27421 = arguments.length;
switch (G__27421) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27422 = (function (f,blockable,meta27423){
this.f = f;
this.blockable = blockable;
this.meta27423 = meta27423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27424,meta27423__$1){
var self__ = this;
var _27424__$1 = this;
return (new cljs.core.async.t_cljs$core$async27422(self__.f,self__.blockable,meta27423__$1));
}));

(cljs.core.async.t_cljs$core$async27422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27424){
var self__ = this;
var _27424__$1 = this;
return self__.meta27423;
}));

(cljs.core.async.t_cljs$core$async27422.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27422.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27422.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27422.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27423","meta27423",-1003495258,null)], null);
}));

(cljs.core.async.t_cljs$core$async27422.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27422");

(cljs.core.async.t_cljs$core$async27422.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async27422");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27422.
 */
cljs.core.async.__GT_t_cljs$core$async27422 = (function cljs$core$async$__GT_t_cljs$core$async27422(f__$1,blockable__$1,meta27423){
return (new cljs.core.async.t_cljs$core$async27422(f__$1,blockable__$1,meta27423));
});

}

return (new cljs.core.async.t_cljs$core$async27422(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27428 = arguments.length;
switch (G__27428) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27431 = arguments.length;
switch (G__27431) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27434 = arguments.length;
switch (G__27434) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27436 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27436);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27436);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27438 = arguments.length;
switch (G__27438) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___27440 = n;
var x_27441 = (0);
while(true){
if((x_27441 < n__4666__auto___27440)){
(a[x_27441] = (0));

var G__27442 = (x_27441 + (1));
x_27441 = G__27442;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27443 = (i + (1));
i = G__27443;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27444 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27444 = (function (flag,meta27445){
this.flag = flag;
this.meta27445 = meta27445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27446,meta27445__$1){
var self__ = this;
var _27446__$1 = this;
return (new cljs.core.async.t_cljs$core$async27444(self__.flag,meta27445__$1));
}));

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27446){
var self__ = this;
var _27446__$1 = this;
return self__.meta27445;
}));

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27445","meta27445",-1155193796,null)], null);
}));

(cljs.core.async.t_cljs$core$async27444.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27444");

(cljs.core.async.t_cljs$core$async27444.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async27444");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27444.
 */
cljs.core.async.__GT_t_cljs$core$async27444 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27444(flag__$1,meta27445){
return (new cljs.core.async.t_cljs$core$async27444(flag__$1,meta27445));
});

}

return (new cljs.core.async.t_cljs$core$async27444(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27447 = (function (flag,cb,meta27448){
this.flag = flag;
this.cb = cb;
this.meta27448 = meta27448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27449,meta27448__$1){
var self__ = this;
var _27449__$1 = this;
return (new cljs.core.async.t_cljs$core$async27447(self__.flag,self__.cb,meta27448__$1));
}));

(cljs.core.async.t_cljs$core$async27447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27449){
var self__ = this;
var _27449__$1 = this;
return self__.meta27448;
}));

(cljs.core.async.t_cljs$core$async27447.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27448","meta27448",1224015470,null)], null);
}));

(cljs.core.async.t_cljs$core$async27447.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27447");

(cljs.core.async.t_cljs$core$async27447.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async27447");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27447.
 */
cljs.core.async.__GT_t_cljs$core$async27447 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27447(flag__$1,cb__$1,meta27448){
return (new cljs.core.async.t_cljs$core$async27447(flag__$1,cb__$1,meta27448));
});

}

return (new cljs.core.async.t_cljs$core$async27447(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27450_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27450_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27451_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27451_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27452 = (i + (1));
i = G__27452;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27458 = arguments.length;
var i__4790__auto___27459 = (0);
while(true){
if((i__4790__auto___27459 < len__4789__auto___27458)){
args__4795__auto__.push((arguments[i__4790__auto___27459]));

var G__27460 = (i__4790__auto___27459 + (1));
i__4790__auto___27459 = G__27460;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27455){
var map__27456 = p__27455;
var map__27456__$1 = (((((!((map__27456 == null))))?(((((map__27456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27456):map__27456);
var opts = map__27456__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27453){
var G__27454 = cljs.core.first.call(null,seq27453);
var seq27453__$1 = cljs.core.next.call(null,seq27453);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27454,seq27453__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27462 = arguments.length;
switch (G__27462) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27361__auto___27508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_27486){
var state_val_27487 = (state_27486[(1)]);
if((state_val_27487 === (7))){
var inst_27482 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27488_27509 = state_27486__$1;
(statearr_27488_27509[(2)] = inst_27482);

(statearr_27488_27509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (1))){
var state_27486__$1 = state_27486;
var statearr_27489_27510 = state_27486__$1;
(statearr_27489_27510[(2)] = null);

(statearr_27489_27510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (4))){
var inst_27465 = (state_27486[(7)]);
var inst_27465__$1 = (state_27486[(2)]);
var inst_27466 = (inst_27465__$1 == null);
var state_27486__$1 = (function (){var statearr_27490 = state_27486;
(statearr_27490[(7)] = inst_27465__$1);

return statearr_27490;
})();
if(cljs.core.truth_(inst_27466)){
var statearr_27491_27511 = state_27486__$1;
(statearr_27491_27511[(1)] = (5));

} else {
var statearr_27492_27512 = state_27486__$1;
(statearr_27492_27512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (13))){
var state_27486__$1 = state_27486;
var statearr_27493_27513 = state_27486__$1;
(statearr_27493_27513[(2)] = null);

(statearr_27493_27513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (6))){
var inst_27465 = (state_27486[(7)]);
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27486__$1,(11),to,inst_27465);
} else {
if((state_val_27487 === (3))){
var inst_27484 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27486__$1,inst_27484);
} else {
if((state_val_27487 === (12))){
var state_27486__$1 = state_27486;
var statearr_27494_27514 = state_27486__$1;
(statearr_27494_27514[(2)] = null);

(statearr_27494_27514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (2))){
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27486__$1,(4),from);
} else {
if((state_val_27487 === (11))){
var inst_27475 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
if(cljs.core.truth_(inst_27475)){
var statearr_27495_27515 = state_27486__$1;
(statearr_27495_27515[(1)] = (12));

} else {
var statearr_27496_27516 = state_27486__$1;
(statearr_27496_27516[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (9))){
var state_27486__$1 = state_27486;
var statearr_27497_27517 = state_27486__$1;
(statearr_27497_27517[(2)] = null);

(statearr_27497_27517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (5))){
var state_27486__$1 = state_27486;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27498_27518 = state_27486__$1;
(statearr_27498_27518[(1)] = (8));

} else {
var statearr_27499_27519 = state_27486__$1;
(statearr_27499_27519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (14))){
var inst_27480 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27500_27520 = state_27486__$1;
(statearr_27500_27520[(2)] = inst_27480);

(statearr_27500_27520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (10))){
var inst_27472 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27501_27521 = state_27486__$1;
(statearr_27501_27521[(2)] = inst_27472);

(statearr_27501_27521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (8))){
var inst_27469 = cljs.core.async.close_BANG_.call(null,to);
var state_27486__$1 = state_27486;
var statearr_27502_27522 = state_27486__$1;
(statearr_27502_27522[(2)] = inst_27469);

(statearr_27502_27522[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_27503 = [null,null,null,null,null,null,null,null];
(statearr_27503[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_27503[(1)] = (1));

return statearr_27503;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_27486){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_27486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e27504){if((e27504 instanceof Object)){
var ex__27270__auto__ = e27504;
var statearr_27505_27523 = state_27486;
(statearr_27505_27523[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27524 = state_27486;
state_27486 = G__27524;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_27486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_27486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_27506 = f__27362__auto__.call(null);
(statearr_27506[(6)] = c__27361__auto___27508);

return statearr_27506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__27525){
var vec__27526 = p__27525;
var v = cljs.core.nth.call(null,vec__27526,(0),null);
var p = cljs.core.nth.call(null,vec__27526,(1),null);
var job = vec__27526;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27361__auto___27697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_27533){
var state_val_27534 = (state_27533[(1)]);
if((state_val_27534 === (1))){
var state_27533__$1 = state_27533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27533__$1,(2),res,v);
} else {
if((state_val_27534 === (2))){
var inst_27530 = (state_27533[(2)]);
var inst_27531 = cljs.core.async.close_BANG_.call(null,res);
var state_27533__$1 = (function (){var statearr_27535 = state_27533;
(statearr_27535[(7)] = inst_27530);

return statearr_27535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27533__$1,inst_27531);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0 = (function (){
var statearr_27536 = [null,null,null,null,null,null,null,null];
(statearr_27536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__);

(statearr_27536[(1)] = (1));

return statearr_27536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1 = (function (state_27533){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_27533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e27537){if((e27537 instanceof Object)){
var ex__27270__auto__ = e27537;
var statearr_27538_27698 = state_27533;
(statearr_27538_27698[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27699 = state_27533;
state_27533 = G__27699;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__ = function(state_27533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1.call(this,state_27533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_27539 = f__27362__auto__.call(null);
(statearr_27539[(6)] = c__27361__auto___27697);

return statearr_27539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27540){
var vec__27541 = p__27540;
var v = cljs.core.nth.call(null,vec__27541,(0),null);
var p = cljs.core.nth.call(null,vec__27541,(1),null);
var job = vec__27541;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___27700 = n;
var __27701 = (0);
while(true){
if((__27701 < n__4666__auto___27700)){
var G__27544_27702 = type;
var G__27544_27703__$1 = (((G__27544_27702 instanceof cljs.core.Keyword))?G__27544_27702.fqn:null);
switch (G__27544_27703__$1) {
case "compute":
var c__27361__auto___27705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27701,c__27361__auto___27705,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async){
return (function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = ((function (__27701,c__27361__auto___27705,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async){
return (function (state_27557){
var state_val_27558 = (state_27557[(1)]);
if((state_val_27558 === (1))){
var state_27557__$1 = state_27557;
var statearr_27559_27706 = state_27557__$1;
(statearr_27559_27706[(2)] = null);

(statearr_27559_27706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (2))){
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27557__$1,(4),jobs);
} else {
if((state_val_27558 === (3))){
var inst_27555 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27557__$1,inst_27555);
} else {
if((state_val_27558 === (4))){
var inst_27547 = (state_27557[(2)]);
var inst_27548 = process.call(null,inst_27547);
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27548)){
var statearr_27560_27707 = state_27557__$1;
(statearr_27560_27707[(1)] = (5));

} else {
var statearr_27561_27708 = state_27557__$1;
(statearr_27561_27708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (5))){
var state_27557__$1 = state_27557;
var statearr_27562_27709 = state_27557__$1;
(statearr_27562_27709[(2)] = null);

(statearr_27562_27709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (6))){
var state_27557__$1 = state_27557;
var statearr_27563_27710 = state_27557__$1;
(statearr_27563_27710[(2)] = null);

(statearr_27563_27710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (7))){
var inst_27553 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27564_27711 = state_27557__$1;
(statearr_27564_27711[(2)] = inst_27553);

(statearr_27564_27711[(1)] = (3));


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
});})(__27701,c__27361__auto___27705,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async))
;
return ((function (__27701,switch__27266__auto__,c__27361__auto___27705,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0 = (function (){
var statearr_27565 = [null,null,null,null,null,null,null];
(statearr_27565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__);

(statearr_27565[(1)] = (1));

return statearr_27565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1 = (function (state_27557){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_27557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e27566){if((e27566 instanceof Object)){
var ex__27270__auto__ = e27566;
var statearr_27567_27712 = state_27557;
(statearr_27567_27712[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27713 = state_27557;
state_27557 = G__27713;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__ = function(state_27557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1.call(this,state_27557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__;
})()
;})(__27701,switch__27266__auto__,c__27361__auto___27705,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async))
})();
var state__27363__auto__ = (function (){var statearr_27568 = f__27362__auto__.call(null);
(statearr_27568[(6)] = c__27361__auto___27705);

return statearr_27568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
});})(__27701,c__27361__auto___27705,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async))
);


break;
case "async":
var c__27361__auto___27714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27701,c__27361__auto___27714,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async){
return (function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = ((function (__27701,c__27361__auto___27714,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async){
return (function (state_27581){
var state_val_27582 = (state_27581[(1)]);
if((state_val_27582 === (1))){
var state_27581__$1 = state_27581;
var statearr_27583_27715 = state_27581__$1;
(statearr_27583_27715[(2)] = null);

(statearr_27583_27715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27582 === (2))){
var state_27581__$1 = state_27581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27581__$1,(4),jobs);
} else {
if((state_val_27582 === (3))){
var inst_27579 = (state_27581[(2)]);
var state_27581__$1 = state_27581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27581__$1,inst_27579);
} else {
if((state_val_27582 === (4))){
var inst_27571 = (state_27581[(2)]);
var inst_27572 = async.call(null,inst_27571);
var state_27581__$1 = state_27581;
if(cljs.core.truth_(inst_27572)){
var statearr_27584_27716 = state_27581__$1;
(statearr_27584_27716[(1)] = (5));

} else {
var statearr_27585_27717 = state_27581__$1;
(statearr_27585_27717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27582 === (5))){
var state_27581__$1 = state_27581;
var statearr_27586_27718 = state_27581__$1;
(statearr_27586_27718[(2)] = null);

(statearr_27586_27718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27582 === (6))){
var state_27581__$1 = state_27581;
var statearr_27587_27719 = state_27581__$1;
(statearr_27587_27719[(2)] = null);

(statearr_27587_27719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27582 === (7))){
var inst_27577 = (state_27581[(2)]);
var state_27581__$1 = state_27581;
var statearr_27588_27720 = state_27581__$1;
(statearr_27588_27720[(2)] = inst_27577);

(statearr_27588_27720[(1)] = (3));


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
});})(__27701,c__27361__auto___27714,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async))
;
return ((function (__27701,switch__27266__auto__,c__27361__auto___27714,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0 = (function (){
var statearr_27589 = [null,null,null,null,null,null,null];
(statearr_27589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__);

(statearr_27589[(1)] = (1));

return statearr_27589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1 = (function (state_27581){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_27581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e27590){if((e27590 instanceof Object)){
var ex__27270__auto__ = e27590;
var statearr_27591_27721 = state_27581;
(statearr_27591_27721[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27722 = state_27581;
state_27581 = G__27722;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__ = function(state_27581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1.call(this,state_27581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__;
})()
;})(__27701,switch__27266__auto__,c__27361__auto___27714,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async))
})();
var state__27363__auto__ = (function (){var statearr_27592 = f__27362__auto__.call(null);
(statearr_27592[(6)] = c__27361__auto___27714);

return statearr_27592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
});})(__27701,c__27361__auto___27714,G__27544_27702,G__27544_27703__$1,n__4666__auto___27700,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27544_27703__$1)].join('')));

}

var G__27723 = (__27701 + (1));
__27701 = G__27723;
continue;
} else {
}
break;
}

var c__27361__auto___27724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_27614){
var state_val_27615 = (state_27614[(1)]);
if((state_val_27615 === (7))){
var inst_27610 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27616_27725 = state_27614__$1;
(statearr_27616_27725[(2)] = inst_27610);

(statearr_27616_27725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (1))){
var state_27614__$1 = state_27614;
var statearr_27617_27726 = state_27614__$1;
(statearr_27617_27726[(2)] = null);

(statearr_27617_27726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (4))){
var inst_27595 = (state_27614[(7)]);
var inst_27595__$1 = (state_27614[(2)]);
var inst_27596 = (inst_27595__$1 == null);
var state_27614__$1 = (function (){var statearr_27618 = state_27614;
(statearr_27618[(7)] = inst_27595__$1);

return statearr_27618;
})();
if(cljs.core.truth_(inst_27596)){
var statearr_27619_27727 = state_27614__$1;
(statearr_27619_27727[(1)] = (5));

} else {
var statearr_27620_27728 = state_27614__$1;
(statearr_27620_27728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (6))){
var inst_27600 = (state_27614[(8)]);
var inst_27595 = (state_27614[(7)]);
var inst_27600__$1 = cljs.core.async.chan.call(null,(1));
var inst_27601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27602 = [inst_27595,inst_27600__$1];
var inst_27603 = (new cljs.core.PersistentVector(null,2,(5),inst_27601,inst_27602,null));
var state_27614__$1 = (function (){var statearr_27621 = state_27614;
(statearr_27621[(8)] = inst_27600__$1);

return statearr_27621;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27614__$1,(8),jobs,inst_27603);
} else {
if((state_val_27615 === (3))){
var inst_27612 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27614__$1,inst_27612);
} else {
if((state_val_27615 === (2))){
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27614__$1,(4),from);
} else {
if((state_val_27615 === (9))){
var inst_27607 = (state_27614[(2)]);
var state_27614__$1 = (function (){var statearr_27622 = state_27614;
(statearr_27622[(9)] = inst_27607);

return statearr_27622;
})();
var statearr_27623_27729 = state_27614__$1;
(statearr_27623_27729[(2)] = null);

(statearr_27623_27729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (5))){
var inst_27598 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27614__$1 = state_27614;
var statearr_27624_27730 = state_27614__$1;
(statearr_27624_27730[(2)] = inst_27598);

(statearr_27624_27730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (8))){
var inst_27600 = (state_27614[(8)]);
var inst_27605 = (state_27614[(2)]);
var state_27614__$1 = (function (){var statearr_27625 = state_27614;
(statearr_27625[(10)] = inst_27605);

return statearr_27625;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27614__$1,(9),results,inst_27600);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0 = (function (){
var statearr_27626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27626[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__);

(statearr_27626[(1)] = (1));

return statearr_27626;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1 = (function (state_27614){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_27614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e27627){if((e27627 instanceof Object)){
var ex__27270__auto__ = e27627;
var statearr_27628_27731 = state_27614;
(statearr_27628_27731[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27732 = state_27614;
state_27614 = G__27732;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__ = function(state_27614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1.call(this,state_27614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_27629 = f__27362__auto__.call(null);
(statearr_27629[(6)] = c__27361__auto___27724);

return statearr_27629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


var c__27361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_27667){
var state_val_27668 = (state_27667[(1)]);
if((state_val_27668 === (7))){
var inst_27663 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27669_27733 = state_27667__$1;
(statearr_27669_27733[(2)] = inst_27663);

(statearr_27669_27733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (20))){
var state_27667__$1 = state_27667;
var statearr_27670_27734 = state_27667__$1;
(statearr_27670_27734[(2)] = null);

(statearr_27670_27734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (1))){
var state_27667__$1 = state_27667;
var statearr_27671_27735 = state_27667__$1;
(statearr_27671_27735[(2)] = null);

(statearr_27671_27735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (4))){
var inst_27632 = (state_27667[(7)]);
var inst_27632__$1 = (state_27667[(2)]);
var inst_27633 = (inst_27632__$1 == null);
var state_27667__$1 = (function (){var statearr_27672 = state_27667;
(statearr_27672[(7)] = inst_27632__$1);

return statearr_27672;
})();
if(cljs.core.truth_(inst_27633)){
var statearr_27673_27736 = state_27667__$1;
(statearr_27673_27736[(1)] = (5));

} else {
var statearr_27674_27737 = state_27667__$1;
(statearr_27674_27737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (15))){
var inst_27645 = (state_27667[(8)]);
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27667__$1,(18),to,inst_27645);
} else {
if((state_val_27668 === (21))){
var inst_27658 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27675_27738 = state_27667__$1;
(statearr_27675_27738[(2)] = inst_27658);

(statearr_27675_27738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (13))){
var inst_27660 = (state_27667[(2)]);
var state_27667__$1 = (function (){var statearr_27676 = state_27667;
(statearr_27676[(9)] = inst_27660);

return statearr_27676;
})();
var statearr_27677_27739 = state_27667__$1;
(statearr_27677_27739[(2)] = null);

(statearr_27677_27739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (6))){
var inst_27632 = (state_27667[(7)]);
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27667__$1,(11),inst_27632);
} else {
if((state_val_27668 === (17))){
var inst_27653 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
if(cljs.core.truth_(inst_27653)){
var statearr_27678_27740 = state_27667__$1;
(statearr_27678_27740[(1)] = (19));

} else {
var statearr_27679_27741 = state_27667__$1;
(statearr_27679_27741[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (3))){
var inst_27665 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27667__$1,inst_27665);
} else {
if((state_val_27668 === (12))){
var inst_27642 = (state_27667[(10)]);
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27667__$1,(14),inst_27642);
} else {
if((state_val_27668 === (2))){
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27667__$1,(4),results);
} else {
if((state_val_27668 === (19))){
var state_27667__$1 = state_27667;
var statearr_27680_27742 = state_27667__$1;
(statearr_27680_27742[(2)] = null);

(statearr_27680_27742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (11))){
var inst_27642 = (state_27667[(2)]);
var state_27667__$1 = (function (){var statearr_27681 = state_27667;
(statearr_27681[(10)] = inst_27642);

return statearr_27681;
})();
var statearr_27682_27743 = state_27667__$1;
(statearr_27682_27743[(2)] = null);

(statearr_27682_27743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (9))){
var state_27667__$1 = state_27667;
var statearr_27683_27744 = state_27667__$1;
(statearr_27683_27744[(2)] = null);

(statearr_27683_27744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (5))){
var state_27667__$1 = state_27667;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27684_27745 = state_27667__$1;
(statearr_27684_27745[(1)] = (8));

} else {
var statearr_27685_27746 = state_27667__$1;
(statearr_27685_27746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (14))){
var inst_27645 = (state_27667[(8)]);
var inst_27645__$1 = (state_27667[(2)]);
var inst_27646 = (inst_27645__$1 == null);
var inst_27647 = cljs.core.not.call(null,inst_27646);
var state_27667__$1 = (function (){var statearr_27686 = state_27667;
(statearr_27686[(8)] = inst_27645__$1);

return statearr_27686;
})();
if(inst_27647){
var statearr_27687_27747 = state_27667__$1;
(statearr_27687_27747[(1)] = (15));

} else {
var statearr_27688_27748 = state_27667__$1;
(statearr_27688_27748[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (16))){
var state_27667__$1 = state_27667;
var statearr_27689_27749 = state_27667__$1;
(statearr_27689_27749[(2)] = false);

(statearr_27689_27749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (10))){
var inst_27639 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27690_27750 = state_27667__$1;
(statearr_27690_27750[(2)] = inst_27639);

(statearr_27690_27750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (18))){
var inst_27650 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27691_27751 = state_27667__$1;
(statearr_27691_27751[(2)] = inst_27650);

(statearr_27691_27751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (8))){
var inst_27636 = cljs.core.async.close_BANG_.call(null,to);
var state_27667__$1 = state_27667;
var statearr_27692_27752 = state_27667__$1;
(statearr_27692_27752[(2)] = inst_27636);

(statearr_27692_27752[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0 = (function (){
var statearr_27693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__);

(statearr_27693[(1)] = (1));

return statearr_27693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1 = (function (state_27667){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_27667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e27694){if((e27694 instanceof Object)){
var ex__27270__auto__ = e27694;
var statearr_27695_27753 = state_27667;
(statearr_27695_27753[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27754 = state_27667;
state_27667 = G__27754;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__ = function(state_27667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1.call(this,state_27667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_27696 = f__27362__auto__.call(null);
(statearr_27696[(6)] = c__27361__auto__);

return statearr_27696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));

return c__27361__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27756 = arguments.length;
switch (G__27756) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27759 = arguments.length;
switch (G__27759) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27762 = arguments.length;
switch (G__27762) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27361__auto___27811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_27788){
var state_val_27789 = (state_27788[(1)]);
if((state_val_27789 === (7))){
var inst_27784 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27790_27812 = state_27788__$1;
(statearr_27790_27812[(2)] = inst_27784);

(statearr_27790_27812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (1))){
var state_27788__$1 = state_27788;
var statearr_27791_27813 = state_27788__$1;
(statearr_27791_27813[(2)] = null);

(statearr_27791_27813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (4))){
var inst_27765 = (state_27788[(7)]);
var inst_27765__$1 = (state_27788[(2)]);
var inst_27766 = (inst_27765__$1 == null);
var state_27788__$1 = (function (){var statearr_27792 = state_27788;
(statearr_27792[(7)] = inst_27765__$1);

return statearr_27792;
})();
if(cljs.core.truth_(inst_27766)){
var statearr_27793_27814 = state_27788__$1;
(statearr_27793_27814[(1)] = (5));

} else {
var statearr_27794_27815 = state_27788__$1;
(statearr_27794_27815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (13))){
var state_27788__$1 = state_27788;
var statearr_27795_27816 = state_27788__$1;
(statearr_27795_27816[(2)] = null);

(statearr_27795_27816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (6))){
var inst_27765 = (state_27788[(7)]);
var inst_27771 = p.call(null,inst_27765);
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27771)){
var statearr_27796_27817 = state_27788__$1;
(statearr_27796_27817[(1)] = (9));

} else {
var statearr_27797_27818 = state_27788__$1;
(statearr_27797_27818[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (3))){
var inst_27786 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27788__$1,inst_27786);
} else {
if((state_val_27789 === (12))){
var state_27788__$1 = state_27788;
var statearr_27798_27819 = state_27788__$1;
(statearr_27798_27819[(2)] = null);

(statearr_27798_27819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (2))){
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27788__$1,(4),ch);
} else {
if((state_val_27789 === (11))){
var inst_27765 = (state_27788[(7)]);
var inst_27775 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27788__$1,(8),inst_27775,inst_27765);
} else {
if((state_val_27789 === (9))){
var state_27788__$1 = state_27788;
var statearr_27799_27820 = state_27788__$1;
(statearr_27799_27820[(2)] = tc);

(statearr_27799_27820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (5))){
var inst_27768 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27769 = cljs.core.async.close_BANG_.call(null,fc);
var state_27788__$1 = (function (){var statearr_27800 = state_27788;
(statearr_27800[(8)] = inst_27768);

return statearr_27800;
})();
var statearr_27801_27821 = state_27788__$1;
(statearr_27801_27821[(2)] = inst_27769);

(statearr_27801_27821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (14))){
var inst_27782 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27802_27822 = state_27788__$1;
(statearr_27802_27822[(2)] = inst_27782);

(statearr_27802_27822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (10))){
var state_27788__$1 = state_27788;
var statearr_27803_27823 = state_27788__$1;
(statearr_27803_27823[(2)] = fc);

(statearr_27803_27823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (8))){
var inst_27777 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27777)){
var statearr_27804_27824 = state_27788__$1;
(statearr_27804_27824[(1)] = (12));

} else {
var statearr_27805_27825 = state_27788__$1;
(statearr_27805_27825[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_27806 = [null,null,null,null,null,null,null,null,null];
(statearr_27806[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_27806[(1)] = (1));

return statearr_27806;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_27788){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_27788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e27807){if((e27807 instanceof Object)){
var ex__27270__auto__ = e27807;
var statearr_27808_27826 = state_27788;
(statearr_27808_27826[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27827 = state_27788;
state_27788 = G__27827;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_27788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_27788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_27809 = f__27362__auto__.call(null);
(statearr_27809[(6)] = c__27361__auto___27811);

return statearr_27809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_27848){
var state_val_27849 = (state_27848[(1)]);
if((state_val_27849 === (7))){
var inst_27844 = (state_27848[(2)]);
var state_27848__$1 = state_27848;
var statearr_27850_27868 = state_27848__$1;
(statearr_27850_27868[(2)] = inst_27844);

(statearr_27850_27868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (1))){
var inst_27828 = init;
var state_27848__$1 = (function (){var statearr_27851 = state_27848;
(statearr_27851[(7)] = inst_27828);

return statearr_27851;
})();
var statearr_27852_27869 = state_27848__$1;
(statearr_27852_27869[(2)] = null);

(statearr_27852_27869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (4))){
var inst_27831 = (state_27848[(8)]);
var inst_27831__$1 = (state_27848[(2)]);
var inst_27832 = (inst_27831__$1 == null);
var state_27848__$1 = (function (){var statearr_27853 = state_27848;
(statearr_27853[(8)] = inst_27831__$1);

return statearr_27853;
})();
if(cljs.core.truth_(inst_27832)){
var statearr_27854_27870 = state_27848__$1;
(statearr_27854_27870[(1)] = (5));

} else {
var statearr_27855_27871 = state_27848__$1;
(statearr_27855_27871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (6))){
var inst_27828 = (state_27848[(7)]);
var inst_27831 = (state_27848[(8)]);
var inst_27835 = (state_27848[(9)]);
var inst_27835__$1 = f.call(null,inst_27828,inst_27831);
var inst_27836 = cljs.core.reduced_QMARK_.call(null,inst_27835__$1);
var state_27848__$1 = (function (){var statearr_27856 = state_27848;
(statearr_27856[(9)] = inst_27835__$1);

return statearr_27856;
})();
if(inst_27836){
var statearr_27857_27872 = state_27848__$1;
(statearr_27857_27872[(1)] = (8));

} else {
var statearr_27858_27873 = state_27848__$1;
(statearr_27858_27873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (3))){
var inst_27846 = (state_27848[(2)]);
var state_27848__$1 = state_27848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27848__$1,inst_27846);
} else {
if((state_val_27849 === (2))){
var state_27848__$1 = state_27848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27848__$1,(4),ch);
} else {
if((state_val_27849 === (9))){
var inst_27835 = (state_27848[(9)]);
var inst_27828 = inst_27835;
var state_27848__$1 = (function (){var statearr_27859 = state_27848;
(statearr_27859[(7)] = inst_27828);

return statearr_27859;
})();
var statearr_27860_27874 = state_27848__$1;
(statearr_27860_27874[(2)] = null);

(statearr_27860_27874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (5))){
var inst_27828 = (state_27848[(7)]);
var state_27848__$1 = state_27848;
var statearr_27861_27875 = state_27848__$1;
(statearr_27861_27875[(2)] = inst_27828);

(statearr_27861_27875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (10))){
var inst_27842 = (state_27848[(2)]);
var state_27848__$1 = state_27848;
var statearr_27862_27876 = state_27848__$1;
(statearr_27862_27876[(2)] = inst_27842);

(statearr_27862_27876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (8))){
var inst_27835 = (state_27848[(9)]);
var inst_27838 = cljs.core.deref.call(null,inst_27835);
var state_27848__$1 = state_27848;
var statearr_27863_27877 = state_27848__$1;
(statearr_27863_27877[(2)] = inst_27838);

(statearr_27863_27877[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27267__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27267__auto____0 = (function (){
var statearr_27864 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27864[(0)] = cljs$core$async$reduce_$_state_machine__27267__auto__);

(statearr_27864[(1)] = (1));

return statearr_27864;
});
var cljs$core$async$reduce_$_state_machine__27267__auto____1 = (function (state_27848){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_27848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e27865){if((e27865 instanceof Object)){
var ex__27270__auto__ = e27865;
var statearr_27866_27878 = state_27848;
(statearr_27866_27878[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27879 = state_27848;
state_27848 = G__27879;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27267__auto__ = function(state_27848){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27267__auto____1.call(this,state_27848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27267__auto____0;
cljs$core$async$reduce_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27267__auto____1;
return cljs$core$async$reduce_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_27867 = f__27362__auto__.call(null);
(statearr_27867[(6)] = c__27361__auto__);

return statearr_27867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));

return c__27361__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_27885){
var state_val_27886 = (state_27885[(1)]);
if((state_val_27886 === (1))){
var inst_27880 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27885__$1 = state_27885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27885__$1,(2),inst_27880);
} else {
if((state_val_27886 === (2))){
var inst_27882 = (state_27885[(2)]);
var inst_27883 = f__$1.call(null,inst_27882);
var state_27885__$1 = state_27885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27885__$1,inst_27883);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27267__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27267__auto____0 = (function (){
var statearr_27887 = [null,null,null,null,null,null,null];
(statearr_27887[(0)] = cljs$core$async$transduce_$_state_machine__27267__auto__);

(statearr_27887[(1)] = (1));

return statearr_27887;
});
var cljs$core$async$transduce_$_state_machine__27267__auto____1 = (function (state_27885){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_27885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e27888){if((e27888 instanceof Object)){
var ex__27270__auto__ = e27888;
var statearr_27889_27891 = state_27885;
(statearr_27889_27891[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27892 = state_27885;
state_27885 = G__27892;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27267__auto__ = function(state_27885){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27267__auto____1.call(this,state_27885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27267__auto____0;
cljs$core$async$transduce_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27267__auto____1;
return cljs$core$async$transduce_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_27890 = f__27362__auto__.call(null);
(statearr_27890[(6)] = c__27361__auto__);

return statearr_27890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));

return c__27361__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27894 = arguments.length;
switch (G__27894) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_27919){
var state_val_27920 = (state_27919[(1)]);
if((state_val_27920 === (7))){
var inst_27901 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27921_27942 = state_27919__$1;
(statearr_27921_27942[(2)] = inst_27901);

(statearr_27921_27942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (1))){
var inst_27895 = cljs.core.seq.call(null,coll);
var inst_27896 = inst_27895;
var state_27919__$1 = (function (){var statearr_27922 = state_27919;
(statearr_27922[(7)] = inst_27896);

return statearr_27922;
})();
var statearr_27923_27943 = state_27919__$1;
(statearr_27923_27943[(2)] = null);

(statearr_27923_27943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (4))){
var inst_27896 = (state_27919[(7)]);
var inst_27899 = cljs.core.first.call(null,inst_27896);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27919__$1,(7),ch,inst_27899);
} else {
if((state_val_27920 === (13))){
var inst_27913 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27924_27944 = state_27919__$1;
(statearr_27924_27944[(2)] = inst_27913);

(statearr_27924_27944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (6))){
var inst_27904 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
if(cljs.core.truth_(inst_27904)){
var statearr_27925_27945 = state_27919__$1;
(statearr_27925_27945[(1)] = (8));

} else {
var statearr_27926_27946 = state_27919__$1;
(statearr_27926_27946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (3))){
var inst_27917 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27919__$1,inst_27917);
} else {
if((state_val_27920 === (12))){
var state_27919__$1 = state_27919;
var statearr_27927_27947 = state_27919__$1;
(statearr_27927_27947[(2)] = null);

(statearr_27927_27947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (2))){
var inst_27896 = (state_27919[(7)]);
var state_27919__$1 = state_27919;
if(cljs.core.truth_(inst_27896)){
var statearr_27928_27948 = state_27919__$1;
(statearr_27928_27948[(1)] = (4));

} else {
var statearr_27929_27949 = state_27919__$1;
(statearr_27929_27949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (11))){
var inst_27910 = cljs.core.async.close_BANG_.call(null,ch);
var state_27919__$1 = state_27919;
var statearr_27930_27950 = state_27919__$1;
(statearr_27930_27950[(2)] = inst_27910);

(statearr_27930_27950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (9))){
var state_27919__$1 = state_27919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27931_27951 = state_27919__$1;
(statearr_27931_27951[(1)] = (11));

} else {
var statearr_27932_27952 = state_27919__$1;
(statearr_27932_27952[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (5))){
var inst_27896 = (state_27919[(7)]);
var state_27919__$1 = state_27919;
var statearr_27933_27953 = state_27919__$1;
(statearr_27933_27953[(2)] = inst_27896);

(statearr_27933_27953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (10))){
var inst_27915 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27934_27954 = state_27919__$1;
(statearr_27934_27954[(2)] = inst_27915);

(statearr_27934_27954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (8))){
var inst_27896 = (state_27919[(7)]);
var inst_27906 = cljs.core.next.call(null,inst_27896);
var inst_27896__$1 = inst_27906;
var state_27919__$1 = (function (){var statearr_27935 = state_27919;
(statearr_27935[(7)] = inst_27896__$1);

return statearr_27935;
})();
var statearr_27936_27955 = state_27919__$1;
(statearr_27936_27955[(2)] = null);

(statearr_27936_27955[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_27937 = [null,null,null,null,null,null,null,null];
(statearr_27937[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_27937[(1)] = (1));

return statearr_27937;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_27919){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_27919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e27938){if((e27938 instanceof Object)){
var ex__27270__auto__ = e27938;
var statearr_27939_27956 = state_27919;
(statearr_27939_27956[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27957 = state_27919;
state_27919 = G__27957;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_27919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_27919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_27940 = f__27362__auto__.call(null);
(statearr_27940[(6)] = c__27361__auto__);

return statearr_27940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));

return c__27361__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27958 = (function (ch,cs,meta27959){
this.ch = ch;
this.cs = cs;
this.meta27959 = meta27959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27960,meta27959__$1){
var self__ = this;
var _27960__$1 = this;
return (new cljs.core.async.t_cljs$core$async27958(self__.ch,self__.cs,meta27959__$1));
}));

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27960){
var self__ = this;
var _27960__$1 = this;
return self__.meta27959;
}));

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27959","meta27959",-1372300490,null)], null);
}));

(cljs.core.async.t_cljs$core$async27958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27958");

(cljs.core.async.t_cljs$core$async27958.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async27958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27958.
 */
cljs.core.async.__GT_t_cljs$core$async27958 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27958(ch__$1,cs__$1,meta27959){
return (new cljs.core.async.t_cljs$core$async27958(ch__$1,cs__$1,meta27959));
});

}

return (new cljs.core.async.t_cljs$core$async27958(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__27361__auto___28180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_28095){
var state_val_28096 = (state_28095[(1)]);
if((state_val_28096 === (7))){
var inst_28091 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28097_28181 = state_28095__$1;
(statearr_28097_28181[(2)] = inst_28091);

(statearr_28097_28181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (20))){
var inst_27994 = (state_28095[(7)]);
var inst_28006 = cljs.core.first.call(null,inst_27994);
var inst_28007 = cljs.core.nth.call(null,inst_28006,(0),null);
var inst_28008 = cljs.core.nth.call(null,inst_28006,(1),null);
var state_28095__$1 = (function (){var statearr_28098 = state_28095;
(statearr_28098[(8)] = inst_28007);

return statearr_28098;
})();
if(cljs.core.truth_(inst_28008)){
var statearr_28099_28182 = state_28095__$1;
(statearr_28099_28182[(1)] = (22));

} else {
var statearr_28100_28183 = state_28095__$1;
(statearr_28100_28183[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (27))){
var inst_28038 = (state_28095[(9)]);
var inst_28043 = (state_28095[(10)]);
var inst_28036 = (state_28095[(11)]);
var inst_27963 = (state_28095[(12)]);
var inst_28043__$1 = cljs.core._nth.call(null,inst_28036,inst_28038);
var inst_28044 = cljs.core.async.put_BANG_.call(null,inst_28043__$1,inst_27963,done);
var state_28095__$1 = (function (){var statearr_28101 = state_28095;
(statearr_28101[(10)] = inst_28043__$1);

return statearr_28101;
})();
if(cljs.core.truth_(inst_28044)){
var statearr_28102_28184 = state_28095__$1;
(statearr_28102_28184[(1)] = (30));

} else {
var statearr_28103_28185 = state_28095__$1;
(statearr_28103_28185[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (1))){
var state_28095__$1 = state_28095;
var statearr_28104_28186 = state_28095__$1;
(statearr_28104_28186[(2)] = null);

(statearr_28104_28186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (24))){
var inst_27994 = (state_28095[(7)]);
var inst_28013 = (state_28095[(2)]);
var inst_28014 = cljs.core.next.call(null,inst_27994);
var inst_27972 = inst_28014;
var inst_27973 = null;
var inst_27974 = (0);
var inst_27975 = (0);
var state_28095__$1 = (function (){var statearr_28105 = state_28095;
(statearr_28105[(13)] = inst_27974);

(statearr_28105[(14)] = inst_27973);

(statearr_28105[(15)] = inst_27972);

(statearr_28105[(16)] = inst_28013);

(statearr_28105[(17)] = inst_27975);

return statearr_28105;
})();
var statearr_28106_28187 = state_28095__$1;
(statearr_28106_28187[(2)] = null);

(statearr_28106_28187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (39))){
var state_28095__$1 = state_28095;
var statearr_28110_28188 = state_28095__$1;
(statearr_28110_28188[(2)] = null);

(statearr_28110_28188[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (4))){
var inst_27963 = (state_28095[(12)]);
var inst_27963__$1 = (state_28095[(2)]);
var inst_27964 = (inst_27963__$1 == null);
var state_28095__$1 = (function (){var statearr_28111 = state_28095;
(statearr_28111[(12)] = inst_27963__$1);

return statearr_28111;
})();
if(cljs.core.truth_(inst_27964)){
var statearr_28112_28189 = state_28095__$1;
(statearr_28112_28189[(1)] = (5));

} else {
var statearr_28113_28190 = state_28095__$1;
(statearr_28113_28190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (15))){
var inst_27974 = (state_28095[(13)]);
var inst_27973 = (state_28095[(14)]);
var inst_27972 = (state_28095[(15)]);
var inst_27975 = (state_28095[(17)]);
var inst_27990 = (state_28095[(2)]);
var inst_27991 = (inst_27975 + (1));
var tmp28107 = inst_27974;
var tmp28108 = inst_27973;
var tmp28109 = inst_27972;
var inst_27972__$1 = tmp28109;
var inst_27973__$1 = tmp28108;
var inst_27974__$1 = tmp28107;
var inst_27975__$1 = inst_27991;
var state_28095__$1 = (function (){var statearr_28114 = state_28095;
(statearr_28114[(13)] = inst_27974__$1);

(statearr_28114[(14)] = inst_27973__$1);

(statearr_28114[(18)] = inst_27990);

(statearr_28114[(15)] = inst_27972__$1);

(statearr_28114[(17)] = inst_27975__$1);

return statearr_28114;
})();
var statearr_28115_28191 = state_28095__$1;
(statearr_28115_28191[(2)] = null);

(statearr_28115_28191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (21))){
var inst_28017 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28119_28192 = state_28095__$1;
(statearr_28119_28192[(2)] = inst_28017);

(statearr_28119_28192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (31))){
var inst_28043 = (state_28095[(10)]);
var inst_28047 = done.call(null,null);
var inst_28048 = cljs.core.async.untap_STAR_.call(null,m,inst_28043);
var state_28095__$1 = (function (){var statearr_28120 = state_28095;
(statearr_28120[(19)] = inst_28047);

return statearr_28120;
})();
var statearr_28121_28193 = state_28095__$1;
(statearr_28121_28193[(2)] = inst_28048);

(statearr_28121_28193[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (32))){
var inst_28038 = (state_28095[(9)]);
var inst_28037 = (state_28095[(20)]);
var inst_28036 = (state_28095[(11)]);
var inst_28035 = (state_28095[(21)]);
var inst_28050 = (state_28095[(2)]);
var inst_28051 = (inst_28038 + (1));
var tmp28116 = inst_28037;
var tmp28117 = inst_28036;
var tmp28118 = inst_28035;
var inst_28035__$1 = tmp28118;
var inst_28036__$1 = tmp28117;
var inst_28037__$1 = tmp28116;
var inst_28038__$1 = inst_28051;
var state_28095__$1 = (function (){var statearr_28122 = state_28095;
(statearr_28122[(9)] = inst_28038__$1);

(statearr_28122[(20)] = inst_28037__$1);

(statearr_28122[(11)] = inst_28036__$1);

(statearr_28122[(21)] = inst_28035__$1);

(statearr_28122[(22)] = inst_28050);

return statearr_28122;
})();
var statearr_28123_28194 = state_28095__$1;
(statearr_28123_28194[(2)] = null);

(statearr_28123_28194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (40))){
var inst_28063 = (state_28095[(23)]);
var inst_28067 = done.call(null,null);
var inst_28068 = cljs.core.async.untap_STAR_.call(null,m,inst_28063);
var state_28095__$1 = (function (){var statearr_28124 = state_28095;
(statearr_28124[(24)] = inst_28067);

return statearr_28124;
})();
var statearr_28125_28195 = state_28095__$1;
(statearr_28125_28195[(2)] = inst_28068);

(statearr_28125_28195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (33))){
var inst_28054 = (state_28095[(25)]);
var inst_28056 = cljs.core.chunked_seq_QMARK_.call(null,inst_28054);
var state_28095__$1 = state_28095;
if(inst_28056){
var statearr_28126_28196 = state_28095__$1;
(statearr_28126_28196[(1)] = (36));

} else {
var statearr_28127_28197 = state_28095__$1;
(statearr_28127_28197[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (13))){
var inst_27984 = (state_28095[(26)]);
var inst_27987 = cljs.core.async.close_BANG_.call(null,inst_27984);
var state_28095__$1 = state_28095;
var statearr_28128_28198 = state_28095__$1;
(statearr_28128_28198[(2)] = inst_27987);

(statearr_28128_28198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (22))){
var inst_28007 = (state_28095[(8)]);
var inst_28010 = cljs.core.async.close_BANG_.call(null,inst_28007);
var state_28095__$1 = state_28095;
var statearr_28129_28199 = state_28095__$1;
(statearr_28129_28199[(2)] = inst_28010);

(statearr_28129_28199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (36))){
var inst_28054 = (state_28095[(25)]);
var inst_28058 = cljs.core.chunk_first.call(null,inst_28054);
var inst_28059 = cljs.core.chunk_rest.call(null,inst_28054);
var inst_28060 = cljs.core.count.call(null,inst_28058);
var inst_28035 = inst_28059;
var inst_28036 = inst_28058;
var inst_28037 = inst_28060;
var inst_28038 = (0);
var state_28095__$1 = (function (){var statearr_28130 = state_28095;
(statearr_28130[(9)] = inst_28038);

(statearr_28130[(20)] = inst_28037);

(statearr_28130[(11)] = inst_28036);

(statearr_28130[(21)] = inst_28035);

return statearr_28130;
})();
var statearr_28131_28200 = state_28095__$1;
(statearr_28131_28200[(2)] = null);

(statearr_28131_28200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (41))){
var inst_28054 = (state_28095[(25)]);
var inst_28070 = (state_28095[(2)]);
var inst_28071 = cljs.core.next.call(null,inst_28054);
var inst_28035 = inst_28071;
var inst_28036 = null;
var inst_28037 = (0);
var inst_28038 = (0);
var state_28095__$1 = (function (){var statearr_28132 = state_28095;
(statearr_28132[(9)] = inst_28038);

(statearr_28132[(20)] = inst_28037);

(statearr_28132[(11)] = inst_28036);

(statearr_28132[(21)] = inst_28035);

(statearr_28132[(27)] = inst_28070);

return statearr_28132;
})();
var statearr_28133_28201 = state_28095__$1;
(statearr_28133_28201[(2)] = null);

(statearr_28133_28201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (43))){
var state_28095__$1 = state_28095;
var statearr_28134_28202 = state_28095__$1;
(statearr_28134_28202[(2)] = null);

(statearr_28134_28202[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (29))){
var inst_28079 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28135_28203 = state_28095__$1;
(statearr_28135_28203[(2)] = inst_28079);

(statearr_28135_28203[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (44))){
var inst_28088 = (state_28095[(2)]);
var state_28095__$1 = (function (){var statearr_28136 = state_28095;
(statearr_28136[(28)] = inst_28088);

return statearr_28136;
})();
var statearr_28137_28204 = state_28095__$1;
(statearr_28137_28204[(2)] = null);

(statearr_28137_28204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (6))){
var inst_28027 = (state_28095[(29)]);
var inst_28026 = cljs.core.deref.call(null,cs);
var inst_28027__$1 = cljs.core.keys.call(null,inst_28026);
var inst_28028 = cljs.core.count.call(null,inst_28027__$1);
var inst_28029 = cljs.core.reset_BANG_.call(null,dctr,inst_28028);
var inst_28034 = cljs.core.seq.call(null,inst_28027__$1);
var inst_28035 = inst_28034;
var inst_28036 = null;
var inst_28037 = (0);
var inst_28038 = (0);
var state_28095__$1 = (function (){var statearr_28138 = state_28095;
(statearr_28138[(9)] = inst_28038);

(statearr_28138[(20)] = inst_28037);

(statearr_28138[(29)] = inst_28027__$1);

(statearr_28138[(11)] = inst_28036);

(statearr_28138[(21)] = inst_28035);

(statearr_28138[(30)] = inst_28029);

return statearr_28138;
})();
var statearr_28139_28205 = state_28095__$1;
(statearr_28139_28205[(2)] = null);

(statearr_28139_28205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (28))){
var inst_28054 = (state_28095[(25)]);
var inst_28035 = (state_28095[(21)]);
var inst_28054__$1 = cljs.core.seq.call(null,inst_28035);
var state_28095__$1 = (function (){var statearr_28140 = state_28095;
(statearr_28140[(25)] = inst_28054__$1);

return statearr_28140;
})();
if(inst_28054__$1){
var statearr_28141_28206 = state_28095__$1;
(statearr_28141_28206[(1)] = (33));

} else {
var statearr_28142_28207 = state_28095__$1;
(statearr_28142_28207[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (25))){
var inst_28038 = (state_28095[(9)]);
var inst_28037 = (state_28095[(20)]);
var inst_28040 = (inst_28038 < inst_28037);
var inst_28041 = inst_28040;
var state_28095__$1 = state_28095;
if(cljs.core.truth_(inst_28041)){
var statearr_28143_28208 = state_28095__$1;
(statearr_28143_28208[(1)] = (27));

} else {
var statearr_28144_28209 = state_28095__$1;
(statearr_28144_28209[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (34))){
var state_28095__$1 = state_28095;
var statearr_28145_28210 = state_28095__$1;
(statearr_28145_28210[(2)] = null);

(statearr_28145_28210[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (17))){
var state_28095__$1 = state_28095;
var statearr_28146_28211 = state_28095__$1;
(statearr_28146_28211[(2)] = null);

(statearr_28146_28211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (3))){
var inst_28093 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28095__$1,inst_28093);
} else {
if((state_val_28096 === (12))){
var inst_28022 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28147_28212 = state_28095__$1;
(statearr_28147_28212[(2)] = inst_28022);

(statearr_28147_28212[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (2))){
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28095__$1,(4),ch);
} else {
if((state_val_28096 === (23))){
var state_28095__$1 = state_28095;
var statearr_28148_28213 = state_28095__$1;
(statearr_28148_28213[(2)] = null);

(statearr_28148_28213[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (35))){
var inst_28077 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28149_28214 = state_28095__$1;
(statearr_28149_28214[(2)] = inst_28077);

(statearr_28149_28214[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (19))){
var inst_27994 = (state_28095[(7)]);
var inst_27998 = cljs.core.chunk_first.call(null,inst_27994);
var inst_27999 = cljs.core.chunk_rest.call(null,inst_27994);
var inst_28000 = cljs.core.count.call(null,inst_27998);
var inst_27972 = inst_27999;
var inst_27973 = inst_27998;
var inst_27974 = inst_28000;
var inst_27975 = (0);
var state_28095__$1 = (function (){var statearr_28150 = state_28095;
(statearr_28150[(13)] = inst_27974);

(statearr_28150[(14)] = inst_27973);

(statearr_28150[(15)] = inst_27972);

(statearr_28150[(17)] = inst_27975);

return statearr_28150;
})();
var statearr_28151_28215 = state_28095__$1;
(statearr_28151_28215[(2)] = null);

(statearr_28151_28215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (11))){
var inst_27994 = (state_28095[(7)]);
var inst_27972 = (state_28095[(15)]);
var inst_27994__$1 = cljs.core.seq.call(null,inst_27972);
var state_28095__$1 = (function (){var statearr_28152 = state_28095;
(statearr_28152[(7)] = inst_27994__$1);

return statearr_28152;
})();
if(inst_27994__$1){
var statearr_28153_28216 = state_28095__$1;
(statearr_28153_28216[(1)] = (16));

} else {
var statearr_28154_28217 = state_28095__$1;
(statearr_28154_28217[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (9))){
var inst_28024 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28155_28218 = state_28095__$1;
(statearr_28155_28218[(2)] = inst_28024);

(statearr_28155_28218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (5))){
var inst_27970 = cljs.core.deref.call(null,cs);
var inst_27971 = cljs.core.seq.call(null,inst_27970);
var inst_27972 = inst_27971;
var inst_27973 = null;
var inst_27974 = (0);
var inst_27975 = (0);
var state_28095__$1 = (function (){var statearr_28156 = state_28095;
(statearr_28156[(13)] = inst_27974);

(statearr_28156[(14)] = inst_27973);

(statearr_28156[(15)] = inst_27972);

(statearr_28156[(17)] = inst_27975);

return statearr_28156;
})();
var statearr_28157_28219 = state_28095__$1;
(statearr_28157_28219[(2)] = null);

(statearr_28157_28219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (14))){
var state_28095__$1 = state_28095;
var statearr_28158_28220 = state_28095__$1;
(statearr_28158_28220[(2)] = null);

(statearr_28158_28220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (45))){
var inst_28085 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28159_28221 = state_28095__$1;
(statearr_28159_28221[(2)] = inst_28085);

(statearr_28159_28221[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (26))){
var inst_28027 = (state_28095[(29)]);
var inst_28081 = (state_28095[(2)]);
var inst_28082 = cljs.core.seq.call(null,inst_28027);
var state_28095__$1 = (function (){var statearr_28160 = state_28095;
(statearr_28160[(31)] = inst_28081);

return statearr_28160;
})();
if(inst_28082){
var statearr_28161_28222 = state_28095__$1;
(statearr_28161_28222[(1)] = (42));

} else {
var statearr_28162_28223 = state_28095__$1;
(statearr_28162_28223[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (16))){
var inst_27994 = (state_28095[(7)]);
var inst_27996 = cljs.core.chunked_seq_QMARK_.call(null,inst_27994);
var state_28095__$1 = state_28095;
if(inst_27996){
var statearr_28163_28224 = state_28095__$1;
(statearr_28163_28224[(1)] = (19));

} else {
var statearr_28164_28225 = state_28095__$1;
(statearr_28164_28225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (38))){
var inst_28074 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28165_28226 = state_28095__$1;
(statearr_28165_28226[(2)] = inst_28074);

(statearr_28165_28226[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (30))){
var state_28095__$1 = state_28095;
var statearr_28166_28227 = state_28095__$1;
(statearr_28166_28227[(2)] = null);

(statearr_28166_28227[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (10))){
var inst_27973 = (state_28095[(14)]);
var inst_27975 = (state_28095[(17)]);
var inst_27983 = cljs.core._nth.call(null,inst_27973,inst_27975);
var inst_27984 = cljs.core.nth.call(null,inst_27983,(0),null);
var inst_27985 = cljs.core.nth.call(null,inst_27983,(1),null);
var state_28095__$1 = (function (){var statearr_28167 = state_28095;
(statearr_28167[(26)] = inst_27984);

return statearr_28167;
})();
if(cljs.core.truth_(inst_27985)){
var statearr_28168_28228 = state_28095__$1;
(statearr_28168_28228[(1)] = (13));

} else {
var statearr_28169_28229 = state_28095__$1;
(statearr_28169_28229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (18))){
var inst_28020 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28170_28230 = state_28095__$1;
(statearr_28170_28230[(2)] = inst_28020);

(statearr_28170_28230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (42))){
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28095__$1,(45),dchan);
} else {
if((state_val_28096 === (37))){
var inst_28054 = (state_28095[(25)]);
var inst_27963 = (state_28095[(12)]);
var inst_28063 = (state_28095[(23)]);
var inst_28063__$1 = cljs.core.first.call(null,inst_28054);
var inst_28064 = cljs.core.async.put_BANG_.call(null,inst_28063__$1,inst_27963,done);
var state_28095__$1 = (function (){var statearr_28171 = state_28095;
(statearr_28171[(23)] = inst_28063__$1);

return statearr_28171;
})();
if(cljs.core.truth_(inst_28064)){
var statearr_28172_28231 = state_28095__$1;
(statearr_28172_28231[(1)] = (39));

} else {
var statearr_28173_28232 = state_28095__$1;
(statearr_28173_28232[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (8))){
var inst_27974 = (state_28095[(13)]);
var inst_27975 = (state_28095[(17)]);
var inst_27977 = (inst_27975 < inst_27974);
var inst_27978 = inst_27977;
var state_28095__$1 = state_28095;
if(cljs.core.truth_(inst_27978)){
var statearr_28174_28233 = state_28095__$1;
(statearr_28174_28233[(1)] = (10));

} else {
var statearr_28175_28234 = state_28095__$1;
(statearr_28175_28234[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__27267__auto__ = null;
var cljs$core$async$mult_$_state_machine__27267__auto____0 = (function (){
var statearr_28176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28176[(0)] = cljs$core$async$mult_$_state_machine__27267__auto__);

(statearr_28176[(1)] = (1));

return statearr_28176;
});
var cljs$core$async$mult_$_state_machine__27267__auto____1 = (function (state_28095){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_28095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e28177){if((e28177 instanceof Object)){
var ex__27270__auto__ = e28177;
var statearr_28178_28235 = state_28095;
(statearr_28178_28235[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28236 = state_28095;
state_28095 = G__28236;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27267__auto__ = function(state_28095){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27267__auto____1.call(this,state_28095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27267__auto____0;
cljs$core$async$mult_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27267__auto____1;
return cljs$core$async$mult_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_28179 = f__27362__auto__.call(null);
(statearr_28179[(6)] = c__27361__auto___28180);

return statearr_28179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28238 = arguments.length;
switch (G__28238) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28250 = arguments.length;
var i__4790__auto___28251 = (0);
while(true){
if((i__4790__auto___28251 < len__4789__auto___28250)){
args__4795__auto__.push((arguments[i__4790__auto___28251]));

var G__28252 = (i__4790__auto___28251 + (1));
i__4790__auto___28251 = G__28252;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28244){
var map__28245 = p__28244;
var map__28245__$1 = (((((!((map__28245 == null))))?(((((map__28245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28245):map__28245);
var opts = map__28245__$1;
var statearr_28247_28253 = state;
(statearr_28247_28253[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28248_28254 = state;
(statearr_28248_28254[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28249_28255 = state;
(statearr_28249_28255[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28240){
var G__28241 = cljs.core.first.call(null,seq28240);
var seq28240__$1 = cljs.core.next.call(null,seq28240);
var G__28242 = cljs.core.first.call(null,seq28240__$1);
var seq28240__$2 = cljs.core.next.call(null,seq28240__$1);
var G__28243 = cljs.core.first.call(null,seq28240__$2);
var seq28240__$3 = cljs.core.next.call(null,seq28240__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28241,G__28242,G__28243,seq28240__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28256 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28257){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28257 = meta28257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28258,meta28257__$1){
var self__ = this;
var _28258__$1 = this;
return (new cljs.core.async.t_cljs$core$async28256(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28257__$1));
}));

(cljs.core.async.t_cljs$core$async28256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28258){
var self__ = this;
var _28258__$1 = this;
return self__.meta28257;
}));

(cljs.core.async.t_cljs$core$async28256.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28256.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28256.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28256.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28256.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28256.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28256.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28256.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28257","meta28257",125387628,null)], null);
}));

(cljs.core.async.t_cljs$core$async28256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28256");

(cljs.core.async.t_cljs$core$async28256.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28256.
 */
cljs.core.async.__GT_t_cljs$core$async28256 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28256(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28257){
return (new cljs.core.async.t_cljs$core$async28256(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28257));
});

}

return (new cljs.core.async.t_cljs$core$async28256(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27361__auto___28420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_28360){
var state_val_28361 = (state_28360[(1)]);
if((state_val_28361 === (7))){
var inst_28275 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28362_28421 = state_28360__$1;
(statearr_28362_28421[(2)] = inst_28275);

(statearr_28362_28421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (20))){
var inst_28287 = (state_28360[(7)]);
var state_28360__$1 = state_28360;
var statearr_28363_28422 = state_28360__$1;
(statearr_28363_28422[(2)] = inst_28287);

(statearr_28363_28422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (27))){
var state_28360__$1 = state_28360;
var statearr_28364_28423 = state_28360__$1;
(statearr_28364_28423[(2)] = null);

(statearr_28364_28423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (1))){
var inst_28262 = (state_28360[(8)]);
var inst_28262__$1 = calc_state.call(null);
var inst_28264 = (inst_28262__$1 == null);
var inst_28265 = cljs.core.not.call(null,inst_28264);
var state_28360__$1 = (function (){var statearr_28365 = state_28360;
(statearr_28365[(8)] = inst_28262__$1);

return statearr_28365;
})();
if(inst_28265){
var statearr_28366_28424 = state_28360__$1;
(statearr_28366_28424[(1)] = (2));

} else {
var statearr_28367_28425 = state_28360__$1;
(statearr_28367_28425[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (24))){
var inst_28320 = (state_28360[(9)]);
var inst_28311 = (state_28360[(10)]);
var inst_28334 = (state_28360[(11)]);
var inst_28334__$1 = inst_28311.call(null,inst_28320);
var state_28360__$1 = (function (){var statearr_28368 = state_28360;
(statearr_28368[(11)] = inst_28334__$1);

return statearr_28368;
})();
if(cljs.core.truth_(inst_28334__$1)){
var statearr_28369_28426 = state_28360__$1;
(statearr_28369_28426[(1)] = (29));

} else {
var statearr_28370_28427 = state_28360__$1;
(statearr_28370_28427[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (4))){
var inst_28278 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28278)){
var statearr_28371_28428 = state_28360__$1;
(statearr_28371_28428[(1)] = (8));

} else {
var statearr_28372_28429 = state_28360__$1;
(statearr_28372_28429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (15))){
var inst_28305 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28305)){
var statearr_28373_28430 = state_28360__$1;
(statearr_28373_28430[(1)] = (19));

} else {
var statearr_28374_28431 = state_28360__$1;
(statearr_28374_28431[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (21))){
var inst_28310 = (state_28360[(12)]);
var inst_28310__$1 = (state_28360[(2)]);
var inst_28311 = cljs.core.get.call(null,inst_28310__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28312 = cljs.core.get.call(null,inst_28310__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28313 = cljs.core.get.call(null,inst_28310__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28360__$1 = (function (){var statearr_28375 = state_28360;
(statearr_28375[(13)] = inst_28312);

(statearr_28375[(10)] = inst_28311);

(statearr_28375[(12)] = inst_28310__$1);

return statearr_28375;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28360__$1,(22),inst_28313);
} else {
if((state_val_28361 === (31))){
var inst_28342 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28342)){
var statearr_28376_28432 = state_28360__$1;
(statearr_28376_28432[(1)] = (32));

} else {
var statearr_28377_28433 = state_28360__$1;
(statearr_28377_28433[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (32))){
var inst_28319 = (state_28360[(14)]);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28360__$1,(35),out,inst_28319);
} else {
if((state_val_28361 === (33))){
var inst_28310 = (state_28360[(12)]);
var inst_28287 = inst_28310;
var state_28360__$1 = (function (){var statearr_28378 = state_28360;
(statearr_28378[(7)] = inst_28287);

return statearr_28378;
})();
var statearr_28379_28434 = state_28360__$1;
(statearr_28379_28434[(2)] = null);

(statearr_28379_28434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (13))){
var inst_28287 = (state_28360[(7)]);
var inst_28294 = inst_28287.cljs$lang$protocol_mask$partition0$;
var inst_28295 = (inst_28294 & (64));
var inst_28296 = inst_28287.cljs$core$ISeq$;
var inst_28297 = (cljs.core.PROTOCOL_SENTINEL === inst_28296);
var inst_28298 = ((inst_28295) || (inst_28297));
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28298)){
var statearr_28380_28435 = state_28360__$1;
(statearr_28380_28435[(1)] = (16));

} else {
var statearr_28381_28436 = state_28360__$1;
(statearr_28381_28436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (22))){
var inst_28320 = (state_28360[(9)]);
var inst_28319 = (state_28360[(14)]);
var inst_28318 = (state_28360[(2)]);
var inst_28319__$1 = cljs.core.nth.call(null,inst_28318,(0),null);
var inst_28320__$1 = cljs.core.nth.call(null,inst_28318,(1),null);
var inst_28321 = (inst_28319__$1 == null);
var inst_28322 = cljs.core._EQ_.call(null,inst_28320__$1,change);
var inst_28323 = ((inst_28321) || (inst_28322));
var state_28360__$1 = (function (){var statearr_28382 = state_28360;
(statearr_28382[(9)] = inst_28320__$1);

(statearr_28382[(14)] = inst_28319__$1);

return statearr_28382;
})();
if(cljs.core.truth_(inst_28323)){
var statearr_28383_28437 = state_28360__$1;
(statearr_28383_28437[(1)] = (23));

} else {
var statearr_28384_28438 = state_28360__$1;
(statearr_28384_28438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (36))){
var inst_28310 = (state_28360[(12)]);
var inst_28287 = inst_28310;
var state_28360__$1 = (function (){var statearr_28385 = state_28360;
(statearr_28385[(7)] = inst_28287);

return statearr_28385;
})();
var statearr_28386_28439 = state_28360__$1;
(statearr_28386_28439[(2)] = null);

(statearr_28386_28439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (29))){
var inst_28334 = (state_28360[(11)]);
var state_28360__$1 = state_28360;
var statearr_28387_28440 = state_28360__$1;
(statearr_28387_28440[(2)] = inst_28334);

(statearr_28387_28440[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (6))){
var state_28360__$1 = state_28360;
var statearr_28388_28441 = state_28360__$1;
(statearr_28388_28441[(2)] = false);

(statearr_28388_28441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (28))){
var inst_28330 = (state_28360[(2)]);
var inst_28331 = calc_state.call(null);
var inst_28287 = inst_28331;
var state_28360__$1 = (function (){var statearr_28389 = state_28360;
(statearr_28389[(7)] = inst_28287);

(statearr_28389[(15)] = inst_28330);

return statearr_28389;
})();
var statearr_28390_28442 = state_28360__$1;
(statearr_28390_28442[(2)] = null);

(statearr_28390_28442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (25))){
var inst_28356 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28391_28443 = state_28360__$1;
(statearr_28391_28443[(2)] = inst_28356);

(statearr_28391_28443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (34))){
var inst_28354 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28392_28444 = state_28360__$1;
(statearr_28392_28444[(2)] = inst_28354);

(statearr_28392_28444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (17))){
var state_28360__$1 = state_28360;
var statearr_28393_28445 = state_28360__$1;
(statearr_28393_28445[(2)] = false);

(statearr_28393_28445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (3))){
var state_28360__$1 = state_28360;
var statearr_28394_28446 = state_28360__$1;
(statearr_28394_28446[(2)] = false);

(statearr_28394_28446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (12))){
var inst_28358 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28360__$1,inst_28358);
} else {
if((state_val_28361 === (2))){
var inst_28262 = (state_28360[(8)]);
var inst_28267 = inst_28262.cljs$lang$protocol_mask$partition0$;
var inst_28268 = (inst_28267 & (64));
var inst_28269 = inst_28262.cljs$core$ISeq$;
var inst_28270 = (cljs.core.PROTOCOL_SENTINEL === inst_28269);
var inst_28271 = ((inst_28268) || (inst_28270));
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28271)){
var statearr_28395_28447 = state_28360__$1;
(statearr_28395_28447[(1)] = (5));

} else {
var statearr_28396_28448 = state_28360__$1;
(statearr_28396_28448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (23))){
var inst_28319 = (state_28360[(14)]);
var inst_28325 = (inst_28319 == null);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28325)){
var statearr_28397_28449 = state_28360__$1;
(statearr_28397_28449[(1)] = (26));

} else {
var statearr_28398_28450 = state_28360__$1;
(statearr_28398_28450[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (35))){
var inst_28345 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28345)){
var statearr_28399_28451 = state_28360__$1;
(statearr_28399_28451[(1)] = (36));

} else {
var statearr_28400_28452 = state_28360__$1;
(statearr_28400_28452[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (19))){
var inst_28287 = (state_28360[(7)]);
var inst_28307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28287);
var state_28360__$1 = state_28360;
var statearr_28401_28453 = state_28360__$1;
(statearr_28401_28453[(2)] = inst_28307);

(statearr_28401_28453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (11))){
var inst_28287 = (state_28360[(7)]);
var inst_28291 = (inst_28287 == null);
var inst_28292 = cljs.core.not.call(null,inst_28291);
var state_28360__$1 = state_28360;
if(inst_28292){
var statearr_28402_28454 = state_28360__$1;
(statearr_28402_28454[(1)] = (13));

} else {
var statearr_28403_28455 = state_28360__$1;
(statearr_28403_28455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (9))){
var inst_28262 = (state_28360[(8)]);
var state_28360__$1 = state_28360;
var statearr_28404_28456 = state_28360__$1;
(statearr_28404_28456[(2)] = inst_28262);

(statearr_28404_28456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (5))){
var state_28360__$1 = state_28360;
var statearr_28405_28457 = state_28360__$1;
(statearr_28405_28457[(2)] = true);

(statearr_28405_28457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (14))){
var state_28360__$1 = state_28360;
var statearr_28406_28458 = state_28360__$1;
(statearr_28406_28458[(2)] = false);

(statearr_28406_28458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (26))){
var inst_28320 = (state_28360[(9)]);
var inst_28327 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28320);
var state_28360__$1 = state_28360;
var statearr_28407_28459 = state_28360__$1;
(statearr_28407_28459[(2)] = inst_28327);

(statearr_28407_28459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (16))){
var state_28360__$1 = state_28360;
var statearr_28408_28460 = state_28360__$1;
(statearr_28408_28460[(2)] = true);

(statearr_28408_28460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (38))){
var inst_28350 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28409_28461 = state_28360__$1;
(statearr_28409_28461[(2)] = inst_28350);

(statearr_28409_28461[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (30))){
var inst_28312 = (state_28360[(13)]);
var inst_28320 = (state_28360[(9)]);
var inst_28311 = (state_28360[(10)]);
var inst_28337 = cljs.core.empty_QMARK_.call(null,inst_28311);
var inst_28338 = inst_28312.call(null,inst_28320);
var inst_28339 = cljs.core.not.call(null,inst_28338);
var inst_28340 = ((inst_28337) && (inst_28339));
var state_28360__$1 = state_28360;
var statearr_28410_28462 = state_28360__$1;
(statearr_28410_28462[(2)] = inst_28340);

(statearr_28410_28462[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (10))){
var inst_28262 = (state_28360[(8)]);
var inst_28283 = (state_28360[(2)]);
var inst_28284 = cljs.core.get.call(null,inst_28283,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28285 = cljs.core.get.call(null,inst_28283,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28286 = cljs.core.get.call(null,inst_28283,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28287 = inst_28262;
var state_28360__$1 = (function (){var statearr_28411 = state_28360;
(statearr_28411[(16)] = inst_28285);

(statearr_28411[(7)] = inst_28287);

(statearr_28411[(17)] = inst_28284);

(statearr_28411[(18)] = inst_28286);

return statearr_28411;
})();
var statearr_28412_28463 = state_28360__$1;
(statearr_28412_28463[(2)] = null);

(statearr_28412_28463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (18))){
var inst_28302 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28413_28464 = state_28360__$1;
(statearr_28413_28464[(2)] = inst_28302);

(statearr_28413_28464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (37))){
var state_28360__$1 = state_28360;
var statearr_28414_28465 = state_28360__$1;
(statearr_28414_28465[(2)] = null);

(statearr_28414_28465[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (8))){
var inst_28262 = (state_28360[(8)]);
var inst_28280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28262);
var state_28360__$1 = state_28360;
var statearr_28415_28466 = state_28360__$1;
(statearr_28415_28466[(2)] = inst_28280);

(statearr_28415_28466[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__27267__auto__ = null;
var cljs$core$async$mix_$_state_machine__27267__auto____0 = (function (){
var statearr_28416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28416[(0)] = cljs$core$async$mix_$_state_machine__27267__auto__);

(statearr_28416[(1)] = (1));

return statearr_28416;
});
var cljs$core$async$mix_$_state_machine__27267__auto____1 = (function (state_28360){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_28360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e28417){if((e28417 instanceof Object)){
var ex__27270__auto__ = e28417;
var statearr_28418_28467 = state_28360;
(statearr_28418_28467[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28468 = state_28360;
state_28360 = G__28468;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27267__auto__ = function(state_28360){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27267__auto____1.call(this,state_28360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27267__auto____0;
cljs$core$async$mix_$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27267__auto____1;
return cljs$core$async$mix_$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_28419 = f__27362__auto__.call(null);
(statearr_28419[(6)] = c__27361__auto___28420);

return statearr_28419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28470 = arguments.length;
switch (G__28470) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28474 = arguments.length;
switch (G__28474) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28472_SHARP_){
if(cljs.core.truth_(p1__28472_SHARP_.call(null,topic))){
return p1__28472_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28472_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28475 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28476){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28476 = meta28476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28477,meta28476__$1){
var self__ = this;
var _28477__$1 = this;
return (new cljs.core.async.t_cljs$core$async28475(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28476__$1));
}));

(cljs.core.async.t_cljs$core$async28475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28477){
var self__ = this;
var _28477__$1 = this;
return self__.meta28476;
}));

(cljs.core.async.t_cljs$core$async28475.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28475.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28475.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28475.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28475.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28475.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28476","meta28476",502750269,null)], null);
}));

(cljs.core.async.t_cljs$core$async28475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28475");

(cljs.core.async.t_cljs$core$async28475.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28475.
 */
cljs.core.async.__GT_t_cljs$core$async28475 = (function cljs$core$async$__GT_t_cljs$core$async28475(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28476){
return (new cljs.core.async.t_cljs$core$async28475(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28476));
});

}

return (new cljs.core.async.t_cljs$core$async28475(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27361__auto___28595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_28549){
var state_val_28550 = (state_28549[(1)]);
if((state_val_28550 === (7))){
var inst_28545 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
var statearr_28551_28596 = state_28549__$1;
(statearr_28551_28596[(2)] = inst_28545);

(statearr_28551_28596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (20))){
var state_28549__$1 = state_28549;
var statearr_28552_28597 = state_28549__$1;
(statearr_28552_28597[(2)] = null);

(statearr_28552_28597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (1))){
var state_28549__$1 = state_28549;
var statearr_28553_28598 = state_28549__$1;
(statearr_28553_28598[(2)] = null);

(statearr_28553_28598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (24))){
var inst_28528 = (state_28549[(7)]);
var inst_28537 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28528);
var state_28549__$1 = state_28549;
var statearr_28554_28599 = state_28549__$1;
(statearr_28554_28599[(2)] = inst_28537);

(statearr_28554_28599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (4))){
var inst_28480 = (state_28549[(8)]);
var inst_28480__$1 = (state_28549[(2)]);
var inst_28481 = (inst_28480__$1 == null);
var state_28549__$1 = (function (){var statearr_28555 = state_28549;
(statearr_28555[(8)] = inst_28480__$1);

return statearr_28555;
})();
if(cljs.core.truth_(inst_28481)){
var statearr_28556_28600 = state_28549__$1;
(statearr_28556_28600[(1)] = (5));

} else {
var statearr_28557_28601 = state_28549__$1;
(statearr_28557_28601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (15))){
var inst_28522 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
var statearr_28558_28602 = state_28549__$1;
(statearr_28558_28602[(2)] = inst_28522);

(statearr_28558_28602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (21))){
var inst_28542 = (state_28549[(2)]);
var state_28549__$1 = (function (){var statearr_28559 = state_28549;
(statearr_28559[(9)] = inst_28542);

return statearr_28559;
})();
var statearr_28560_28603 = state_28549__$1;
(statearr_28560_28603[(2)] = null);

(statearr_28560_28603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (13))){
var inst_28504 = (state_28549[(10)]);
var inst_28506 = cljs.core.chunked_seq_QMARK_.call(null,inst_28504);
var state_28549__$1 = state_28549;
if(inst_28506){
var statearr_28561_28604 = state_28549__$1;
(statearr_28561_28604[(1)] = (16));

} else {
var statearr_28562_28605 = state_28549__$1;
(statearr_28562_28605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (22))){
var inst_28534 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
if(cljs.core.truth_(inst_28534)){
var statearr_28563_28606 = state_28549__$1;
(statearr_28563_28606[(1)] = (23));

} else {
var statearr_28564_28607 = state_28549__$1;
(statearr_28564_28607[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (6))){
var inst_28480 = (state_28549[(8)]);
var inst_28530 = (state_28549[(11)]);
var inst_28528 = (state_28549[(7)]);
var inst_28528__$1 = topic_fn.call(null,inst_28480);
var inst_28529 = cljs.core.deref.call(null,mults);
var inst_28530__$1 = cljs.core.get.call(null,inst_28529,inst_28528__$1);
var state_28549__$1 = (function (){var statearr_28565 = state_28549;
(statearr_28565[(11)] = inst_28530__$1);

(statearr_28565[(7)] = inst_28528__$1);

return statearr_28565;
})();
if(cljs.core.truth_(inst_28530__$1)){
var statearr_28566_28608 = state_28549__$1;
(statearr_28566_28608[(1)] = (19));

} else {
var statearr_28567_28609 = state_28549__$1;
(statearr_28567_28609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (25))){
var inst_28539 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
var statearr_28568_28610 = state_28549__$1;
(statearr_28568_28610[(2)] = inst_28539);

(statearr_28568_28610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (17))){
var inst_28504 = (state_28549[(10)]);
var inst_28513 = cljs.core.first.call(null,inst_28504);
var inst_28514 = cljs.core.async.muxch_STAR_.call(null,inst_28513);
var inst_28515 = cljs.core.async.close_BANG_.call(null,inst_28514);
var inst_28516 = cljs.core.next.call(null,inst_28504);
var inst_28490 = inst_28516;
var inst_28491 = null;
var inst_28492 = (0);
var inst_28493 = (0);
var state_28549__$1 = (function (){var statearr_28569 = state_28549;
(statearr_28569[(12)] = inst_28490);

(statearr_28569[(13)] = inst_28493);

(statearr_28569[(14)] = inst_28491);

(statearr_28569[(15)] = inst_28515);

(statearr_28569[(16)] = inst_28492);

return statearr_28569;
})();
var statearr_28570_28611 = state_28549__$1;
(statearr_28570_28611[(2)] = null);

(statearr_28570_28611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (3))){
var inst_28547 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28549__$1,inst_28547);
} else {
if((state_val_28550 === (12))){
var inst_28524 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
var statearr_28571_28612 = state_28549__$1;
(statearr_28571_28612[(2)] = inst_28524);

(statearr_28571_28612[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (2))){
var state_28549__$1 = state_28549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28549__$1,(4),ch);
} else {
if((state_val_28550 === (23))){
var state_28549__$1 = state_28549;
var statearr_28572_28613 = state_28549__$1;
(statearr_28572_28613[(2)] = null);

(statearr_28572_28613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (19))){
var inst_28480 = (state_28549[(8)]);
var inst_28530 = (state_28549[(11)]);
var inst_28532 = cljs.core.async.muxch_STAR_.call(null,inst_28530);
var state_28549__$1 = state_28549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28549__$1,(22),inst_28532,inst_28480);
} else {
if((state_val_28550 === (11))){
var inst_28504 = (state_28549[(10)]);
var inst_28490 = (state_28549[(12)]);
var inst_28504__$1 = cljs.core.seq.call(null,inst_28490);
var state_28549__$1 = (function (){var statearr_28573 = state_28549;
(statearr_28573[(10)] = inst_28504__$1);

return statearr_28573;
})();
if(inst_28504__$1){
var statearr_28574_28614 = state_28549__$1;
(statearr_28574_28614[(1)] = (13));

} else {
var statearr_28575_28615 = state_28549__$1;
(statearr_28575_28615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (9))){
var inst_28526 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
var statearr_28576_28616 = state_28549__$1;
(statearr_28576_28616[(2)] = inst_28526);

(statearr_28576_28616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (5))){
var inst_28487 = cljs.core.deref.call(null,mults);
var inst_28488 = cljs.core.vals.call(null,inst_28487);
var inst_28489 = cljs.core.seq.call(null,inst_28488);
var inst_28490 = inst_28489;
var inst_28491 = null;
var inst_28492 = (0);
var inst_28493 = (0);
var state_28549__$1 = (function (){var statearr_28577 = state_28549;
(statearr_28577[(12)] = inst_28490);

(statearr_28577[(13)] = inst_28493);

(statearr_28577[(14)] = inst_28491);

(statearr_28577[(16)] = inst_28492);

return statearr_28577;
})();
var statearr_28578_28617 = state_28549__$1;
(statearr_28578_28617[(2)] = null);

(statearr_28578_28617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (14))){
var state_28549__$1 = state_28549;
var statearr_28582_28618 = state_28549__$1;
(statearr_28582_28618[(2)] = null);

(statearr_28582_28618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (16))){
var inst_28504 = (state_28549[(10)]);
var inst_28508 = cljs.core.chunk_first.call(null,inst_28504);
var inst_28509 = cljs.core.chunk_rest.call(null,inst_28504);
var inst_28510 = cljs.core.count.call(null,inst_28508);
var inst_28490 = inst_28509;
var inst_28491 = inst_28508;
var inst_28492 = inst_28510;
var inst_28493 = (0);
var state_28549__$1 = (function (){var statearr_28583 = state_28549;
(statearr_28583[(12)] = inst_28490);

(statearr_28583[(13)] = inst_28493);

(statearr_28583[(14)] = inst_28491);

(statearr_28583[(16)] = inst_28492);

return statearr_28583;
})();
var statearr_28584_28619 = state_28549__$1;
(statearr_28584_28619[(2)] = null);

(statearr_28584_28619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (10))){
var inst_28490 = (state_28549[(12)]);
var inst_28493 = (state_28549[(13)]);
var inst_28491 = (state_28549[(14)]);
var inst_28492 = (state_28549[(16)]);
var inst_28498 = cljs.core._nth.call(null,inst_28491,inst_28493);
var inst_28499 = cljs.core.async.muxch_STAR_.call(null,inst_28498);
var inst_28500 = cljs.core.async.close_BANG_.call(null,inst_28499);
var inst_28501 = (inst_28493 + (1));
var tmp28579 = inst_28490;
var tmp28580 = inst_28491;
var tmp28581 = inst_28492;
var inst_28490__$1 = tmp28579;
var inst_28491__$1 = tmp28580;
var inst_28492__$1 = tmp28581;
var inst_28493__$1 = inst_28501;
var state_28549__$1 = (function (){var statearr_28585 = state_28549;
(statearr_28585[(12)] = inst_28490__$1);

(statearr_28585[(13)] = inst_28493__$1);

(statearr_28585[(17)] = inst_28500);

(statearr_28585[(14)] = inst_28491__$1);

(statearr_28585[(16)] = inst_28492__$1);

return statearr_28585;
})();
var statearr_28586_28620 = state_28549__$1;
(statearr_28586_28620[(2)] = null);

(statearr_28586_28620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (18))){
var inst_28519 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
var statearr_28587_28621 = state_28549__$1;
(statearr_28587_28621[(2)] = inst_28519);

(statearr_28587_28621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (8))){
var inst_28493 = (state_28549[(13)]);
var inst_28492 = (state_28549[(16)]);
var inst_28495 = (inst_28493 < inst_28492);
var inst_28496 = inst_28495;
var state_28549__$1 = state_28549;
if(cljs.core.truth_(inst_28496)){
var statearr_28588_28622 = state_28549__$1;
(statearr_28588_28622[(1)] = (10));

} else {
var statearr_28589_28623 = state_28549__$1;
(statearr_28589_28623[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_28590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28590[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_28590[(1)] = (1));

return statearr_28590;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_28549){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_28549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e28591){if((e28591 instanceof Object)){
var ex__27270__auto__ = e28591;
var statearr_28592_28624 = state_28549;
(statearr_28592_28624[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28625 = state_28549;
state_28549 = G__28625;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_28549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_28549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_28593 = f__27362__auto__.call(null);
(statearr_28593[(6)] = c__27361__auto___28595);

return statearr_28593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28627 = arguments.length;
switch (G__28627) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28630 = arguments.length;
switch (G__28630) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28633 = arguments.length;
switch (G__28633) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__27361__auto___28700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_28672){
var state_val_28673 = (state_28672[(1)]);
if((state_val_28673 === (7))){
var state_28672__$1 = state_28672;
var statearr_28674_28701 = state_28672__$1;
(statearr_28674_28701[(2)] = null);

(statearr_28674_28701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (1))){
var state_28672__$1 = state_28672;
var statearr_28675_28702 = state_28672__$1;
(statearr_28675_28702[(2)] = null);

(statearr_28675_28702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (4))){
var inst_28636 = (state_28672[(7)]);
var inst_28638 = (inst_28636 < cnt);
var state_28672__$1 = state_28672;
if(cljs.core.truth_(inst_28638)){
var statearr_28676_28703 = state_28672__$1;
(statearr_28676_28703[(1)] = (6));

} else {
var statearr_28677_28704 = state_28672__$1;
(statearr_28677_28704[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (15))){
var inst_28668 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28678_28705 = state_28672__$1;
(statearr_28678_28705[(2)] = inst_28668);

(statearr_28678_28705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (13))){
var inst_28661 = cljs.core.async.close_BANG_.call(null,out);
var state_28672__$1 = state_28672;
var statearr_28679_28706 = state_28672__$1;
(statearr_28679_28706[(2)] = inst_28661);

(statearr_28679_28706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (6))){
var state_28672__$1 = state_28672;
var statearr_28680_28707 = state_28672__$1;
(statearr_28680_28707[(2)] = null);

(statearr_28680_28707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (3))){
var inst_28670 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28672__$1,inst_28670);
} else {
if((state_val_28673 === (12))){
var inst_28658 = (state_28672[(8)]);
var inst_28658__$1 = (state_28672[(2)]);
var inst_28659 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28658__$1);
var state_28672__$1 = (function (){var statearr_28681 = state_28672;
(statearr_28681[(8)] = inst_28658__$1);

return statearr_28681;
})();
if(cljs.core.truth_(inst_28659)){
var statearr_28682_28708 = state_28672__$1;
(statearr_28682_28708[(1)] = (13));

} else {
var statearr_28683_28709 = state_28672__$1;
(statearr_28683_28709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (2))){
var inst_28635 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28636 = (0);
var state_28672__$1 = (function (){var statearr_28684 = state_28672;
(statearr_28684[(7)] = inst_28636);

(statearr_28684[(9)] = inst_28635);

return statearr_28684;
})();
var statearr_28685_28710 = state_28672__$1;
(statearr_28685_28710[(2)] = null);

(statearr_28685_28710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (11))){
var inst_28636 = (state_28672[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28672,(10),Object,null,(9));
var inst_28645 = chs__$1.call(null,inst_28636);
var inst_28646 = done.call(null,inst_28636);
var inst_28647 = cljs.core.async.take_BANG_.call(null,inst_28645,inst_28646);
var state_28672__$1 = state_28672;
var statearr_28686_28711 = state_28672__$1;
(statearr_28686_28711[(2)] = inst_28647);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28672__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (9))){
var inst_28636 = (state_28672[(7)]);
var inst_28649 = (state_28672[(2)]);
var inst_28650 = (inst_28636 + (1));
var inst_28636__$1 = inst_28650;
var state_28672__$1 = (function (){var statearr_28687 = state_28672;
(statearr_28687[(7)] = inst_28636__$1);

(statearr_28687[(10)] = inst_28649);

return statearr_28687;
})();
var statearr_28688_28712 = state_28672__$1;
(statearr_28688_28712[(2)] = null);

(statearr_28688_28712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (5))){
var inst_28656 = (state_28672[(2)]);
var state_28672__$1 = (function (){var statearr_28689 = state_28672;
(statearr_28689[(11)] = inst_28656);

return statearr_28689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(12),dchan);
} else {
if((state_val_28673 === (14))){
var inst_28658 = (state_28672[(8)]);
var inst_28663 = cljs.core.apply.call(null,f,inst_28658);
var state_28672__$1 = state_28672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28672__$1,(16),out,inst_28663);
} else {
if((state_val_28673 === (16))){
var inst_28665 = (state_28672[(2)]);
var state_28672__$1 = (function (){var statearr_28690 = state_28672;
(statearr_28690[(12)] = inst_28665);

return statearr_28690;
})();
var statearr_28691_28713 = state_28672__$1;
(statearr_28691_28713[(2)] = null);

(statearr_28691_28713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (10))){
var inst_28640 = (state_28672[(2)]);
var inst_28641 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28672__$1 = (function (){var statearr_28692 = state_28672;
(statearr_28692[(13)] = inst_28640);

return statearr_28692;
})();
var statearr_28693_28714 = state_28672__$1;
(statearr_28693_28714[(2)] = inst_28641);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28672__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (8))){
var inst_28654 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28694_28715 = state_28672__$1;
(statearr_28694_28715[(2)] = inst_28654);

(statearr_28694_28715[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_28695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28695[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_28695[(1)] = (1));

return statearr_28695;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_28672){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_28672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e28696){if((e28696 instanceof Object)){
var ex__27270__auto__ = e28696;
var statearr_28697_28716 = state_28672;
(statearr_28697_28716[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28717 = state_28672;
state_28672 = G__28717;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_28672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_28672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_28698 = f__27362__auto__.call(null);
(statearr_28698[(6)] = c__27361__auto___28700);

return statearr_28698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28720 = arguments.length;
switch (G__28720) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27361__auto___28774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_28752){
var state_val_28753 = (state_28752[(1)]);
if((state_val_28753 === (7))){
var inst_28731 = (state_28752[(7)]);
var inst_28732 = (state_28752[(8)]);
var inst_28731__$1 = (state_28752[(2)]);
var inst_28732__$1 = cljs.core.nth.call(null,inst_28731__$1,(0),null);
var inst_28733 = cljs.core.nth.call(null,inst_28731__$1,(1),null);
var inst_28734 = (inst_28732__$1 == null);
var state_28752__$1 = (function (){var statearr_28754 = state_28752;
(statearr_28754[(9)] = inst_28733);

(statearr_28754[(7)] = inst_28731__$1);

(statearr_28754[(8)] = inst_28732__$1);

return statearr_28754;
})();
if(cljs.core.truth_(inst_28734)){
var statearr_28755_28775 = state_28752__$1;
(statearr_28755_28775[(1)] = (8));

} else {
var statearr_28756_28776 = state_28752__$1;
(statearr_28756_28776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (1))){
var inst_28721 = cljs.core.vec.call(null,chs);
var inst_28722 = inst_28721;
var state_28752__$1 = (function (){var statearr_28757 = state_28752;
(statearr_28757[(10)] = inst_28722);

return statearr_28757;
})();
var statearr_28758_28777 = state_28752__$1;
(statearr_28758_28777[(2)] = null);

(statearr_28758_28777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (4))){
var inst_28722 = (state_28752[(10)]);
var state_28752__$1 = state_28752;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28752__$1,(7),inst_28722);
} else {
if((state_val_28753 === (6))){
var inst_28748 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28759_28778 = state_28752__$1;
(statearr_28759_28778[(2)] = inst_28748);

(statearr_28759_28778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (3))){
var inst_28750 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28752__$1,inst_28750);
} else {
if((state_val_28753 === (2))){
var inst_28722 = (state_28752[(10)]);
var inst_28724 = cljs.core.count.call(null,inst_28722);
var inst_28725 = (inst_28724 > (0));
var state_28752__$1 = state_28752;
if(cljs.core.truth_(inst_28725)){
var statearr_28761_28779 = state_28752__$1;
(statearr_28761_28779[(1)] = (4));

} else {
var statearr_28762_28780 = state_28752__$1;
(statearr_28762_28780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (11))){
var inst_28722 = (state_28752[(10)]);
var inst_28741 = (state_28752[(2)]);
var tmp28760 = inst_28722;
var inst_28722__$1 = tmp28760;
var state_28752__$1 = (function (){var statearr_28763 = state_28752;
(statearr_28763[(11)] = inst_28741);

(statearr_28763[(10)] = inst_28722__$1);

return statearr_28763;
})();
var statearr_28764_28781 = state_28752__$1;
(statearr_28764_28781[(2)] = null);

(statearr_28764_28781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (9))){
var inst_28732 = (state_28752[(8)]);
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28752__$1,(11),out,inst_28732);
} else {
if((state_val_28753 === (5))){
var inst_28746 = cljs.core.async.close_BANG_.call(null,out);
var state_28752__$1 = state_28752;
var statearr_28765_28782 = state_28752__$1;
(statearr_28765_28782[(2)] = inst_28746);

(statearr_28765_28782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (10))){
var inst_28744 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28766_28783 = state_28752__$1;
(statearr_28766_28783[(2)] = inst_28744);

(statearr_28766_28783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (8))){
var inst_28733 = (state_28752[(9)]);
var inst_28731 = (state_28752[(7)]);
var inst_28722 = (state_28752[(10)]);
var inst_28732 = (state_28752[(8)]);
var inst_28736 = (function (){var cs = inst_28722;
var vec__28727 = inst_28731;
var v = inst_28732;
var c = inst_28733;
return (function (p1__28718_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28718_SHARP_);
});
})();
var inst_28737 = cljs.core.filterv.call(null,inst_28736,inst_28722);
var inst_28722__$1 = inst_28737;
var state_28752__$1 = (function (){var statearr_28767 = state_28752;
(statearr_28767[(10)] = inst_28722__$1);

return statearr_28767;
})();
var statearr_28768_28784 = state_28752__$1;
(statearr_28768_28784[(2)] = null);

(statearr_28768_28784[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_28769 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28769[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_28769[(1)] = (1));

return statearr_28769;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_28752){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_28752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e28770){if((e28770 instanceof Object)){
var ex__27270__auto__ = e28770;
var statearr_28771_28785 = state_28752;
(statearr_28771_28785[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28786 = state_28752;
state_28752 = G__28786;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_28752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_28752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_28772 = f__27362__auto__.call(null);
(statearr_28772[(6)] = c__27361__auto___28774);

return statearr_28772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28788 = arguments.length;
switch (G__28788) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27361__auto___28833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_28812){
var state_val_28813 = (state_28812[(1)]);
if((state_val_28813 === (7))){
var inst_28794 = (state_28812[(7)]);
var inst_28794__$1 = (state_28812[(2)]);
var inst_28795 = (inst_28794__$1 == null);
var inst_28796 = cljs.core.not.call(null,inst_28795);
var state_28812__$1 = (function (){var statearr_28814 = state_28812;
(statearr_28814[(7)] = inst_28794__$1);

return statearr_28814;
})();
if(inst_28796){
var statearr_28815_28834 = state_28812__$1;
(statearr_28815_28834[(1)] = (8));

} else {
var statearr_28816_28835 = state_28812__$1;
(statearr_28816_28835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (1))){
var inst_28789 = (0);
var state_28812__$1 = (function (){var statearr_28817 = state_28812;
(statearr_28817[(8)] = inst_28789);

return statearr_28817;
})();
var statearr_28818_28836 = state_28812__$1;
(statearr_28818_28836[(2)] = null);

(statearr_28818_28836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (4))){
var state_28812__$1 = state_28812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28812__$1,(7),ch);
} else {
if((state_val_28813 === (6))){
var inst_28807 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
var statearr_28819_28837 = state_28812__$1;
(statearr_28819_28837[(2)] = inst_28807);

(statearr_28819_28837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (3))){
var inst_28809 = (state_28812[(2)]);
var inst_28810 = cljs.core.async.close_BANG_.call(null,out);
var state_28812__$1 = (function (){var statearr_28820 = state_28812;
(statearr_28820[(9)] = inst_28809);

return statearr_28820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28812__$1,inst_28810);
} else {
if((state_val_28813 === (2))){
var inst_28789 = (state_28812[(8)]);
var inst_28791 = (inst_28789 < n);
var state_28812__$1 = state_28812;
if(cljs.core.truth_(inst_28791)){
var statearr_28821_28838 = state_28812__$1;
(statearr_28821_28838[(1)] = (4));

} else {
var statearr_28822_28839 = state_28812__$1;
(statearr_28822_28839[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (11))){
var inst_28789 = (state_28812[(8)]);
var inst_28799 = (state_28812[(2)]);
var inst_28800 = (inst_28789 + (1));
var inst_28789__$1 = inst_28800;
var state_28812__$1 = (function (){var statearr_28823 = state_28812;
(statearr_28823[(10)] = inst_28799);

(statearr_28823[(8)] = inst_28789__$1);

return statearr_28823;
})();
var statearr_28824_28840 = state_28812__$1;
(statearr_28824_28840[(2)] = null);

(statearr_28824_28840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (9))){
var state_28812__$1 = state_28812;
var statearr_28825_28841 = state_28812__$1;
(statearr_28825_28841[(2)] = null);

(statearr_28825_28841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (5))){
var state_28812__$1 = state_28812;
var statearr_28826_28842 = state_28812__$1;
(statearr_28826_28842[(2)] = null);

(statearr_28826_28842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (10))){
var inst_28804 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
var statearr_28827_28843 = state_28812__$1;
(statearr_28827_28843[(2)] = inst_28804);

(statearr_28827_28843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (8))){
var inst_28794 = (state_28812[(7)]);
var state_28812__$1 = state_28812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28812__$1,(11),out,inst_28794);
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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_28828 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28828[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_28828[(1)] = (1));

return statearr_28828;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_28812){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_28812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e28829){if((e28829 instanceof Object)){
var ex__27270__auto__ = e28829;
var statearr_28830_28844 = state_28812;
(statearr_28830_28844[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28845 = state_28812;
state_28812 = G__28845;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_28812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_28812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_28831 = f__27362__auto__.call(null);
(statearr_28831[(6)] = c__27361__auto___28833);

return statearr_28831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28847 = (function (f,ch,meta28848){
this.f = f;
this.ch = ch;
this.meta28848 = meta28848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28849,meta28848__$1){
var self__ = this;
var _28849__$1 = this;
return (new cljs.core.async.t_cljs$core$async28847(self__.f,self__.ch,meta28848__$1));
}));

(cljs.core.async.t_cljs$core$async28847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28849){
var self__ = this;
var _28849__$1 = this;
return self__.meta28848;
}));

(cljs.core.async.t_cljs$core$async28847.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28847.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28847.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28847.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28847.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28850 = (function (f,ch,meta28848,_,fn1,meta28851){
this.f = f;
this.ch = ch;
this.meta28848 = meta28848;
this._ = _;
this.fn1 = fn1;
this.meta28851 = meta28851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28852,meta28851__$1){
var self__ = this;
var _28852__$1 = this;
return (new cljs.core.async.t_cljs$core$async28850(self__.f,self__.ch,self__.meta28848,self__._,self__.fn1,meta28851__$1));
}));

(cljs.core.async.t_cljs$core$async28850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28852){
var self__ = this;
var _28852__$1 = this;
return self__.meta28851;
}));

(cljs.core.async.t_cljs$core$async28850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28846_SHARP_){
return f1.call(null,(((p1__28846_SHARP_ == null))?null:self__.f.call(null,p1__28846_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28848","meta28848",-996614431,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28847","cljs.core.async/t_cljs$core$async28847",533696991,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28851","meta28851",-749189684,null)], null);
}));

(cljs.core.async.t_cljs$core$async28850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28850");

(cljs.core.async.t_cljs$core$async28850.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28850.
 */
cljs.core.async.__GT_t_cljs$core$async28850 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28850(f__$1,ch__$1,meta28848__$1,___$2,fn1__$1,meta28851){
return (new cljs.core.async.t_cljs$core$async28850(f__$1,ch__$1,meta28848__$1,___$2,fn1__$1,meta28851));
});

}

return (new cljs.core.async.t_cljs$core$async28850(self__.f,self__.ch,self__.meta28848,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28847.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28847.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28848","meta28848",-996614431,null)], null);
}));

(cljs.core.async.t_cljs$core$async28847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28847");

(cljs.core.async.t_cljs$core$async28847.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28847.
 */
cljs.core.async.__GT_t_cljs$core$async28847 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28847(f__$1,ch__$1,meta28848){
return (new cljs.core.async.t_cljs$core$async28847(f__$1,ch__$1,meta28848));
});

}

return (new cljs.core.async.t_cljs$core$async28847(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28853 = (function (f,ch,meta28854){
this.f = f;
this.ch = ch;
this.meta28854 = meta28854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28855,meta28854__$1){
var self__ = this;
var _28855__$1 = this;
return (new cljs.core.async.t_cljs$core$async28853(self__.f,self__.ch,meta28854__$1));
}));

(cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28855){
var self__ = this;
var _28855__$1 = this;
return self__.meta28854;
}));

(cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28854","meta28854",1471411854,null)], null);
}));

(cljs.core.async.t_cljs$core$async28853.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28853");

(cljs.core.async.t_cljs$core$async28853.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28853");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28853.
 */
cljs.core.async.__GT_t_cljs$core$async28853 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28853(f__$1,ch__$1,meta28854){
return (new cljs.core.async.t_cljs$core$async28853(f__$1,ch__$1,meta28854));
});

}

return (new cljs.core.async.t_cljs$core$async28853(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28856 = (function (p,ch,meta28857){
this.p = p;
this.ch = ch;
this.meta28857 = meta28857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28858,meta28857__$1){
var self__ = this;
var _28858__$1 = this;
return (new cljs.core.async.t_cljs$core$async28856(self__.p,self__.ch,meta28857__$1));
}));

(cljs.core.async.t_cljs$core$async28856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28858){
var self__ = this;
var _28858__$1 = this;
return self__.meta28857;
}));

(cljs.core.async.t_cljs$core$async28856.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28856.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28856.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28856.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28857","meta28857",-247108298,null)], null);
}));

(cljs.core.async.t_cljs$core$async28856.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28856");

(cljs.core.async.t_cljs$core$async28856.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28856");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28856.
 */
cljs.core.async.__GT_t_cljs$core$async28856 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28856(p__$1,ch__$1,meta28857){
return (new cljs.core.async.t_cljs$core$async28856(p__$1,ch__$1,meta28857));
});

}

return (new cljs.core.async.t_cljs$core$async28856(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28860 = arguments.length;
switch (G__28860) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27361__auto___28900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_28881){
var state_val_28882 = (state_28881[(1)]);
if((state_val_28882 === (7))){
var inst_28877 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
var statearr_28883_28901 = state_28881__$1;
(statearr_28883_28901[(2)] = inst_28877);

(statearr_28883_28901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (1))){
var state_28881__$1 = state_28881;
var statearr_28884_28902 = state_28881__$1;
(statearr_28884_28902[(2)] = null);

(statearr_28884_28902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (4))){
var inst_28863 = (state_28881[(7)]);
var inst_28863__$1 = (state_28881[(2)]);
var inst_28864 = (inst_28863__$1 == null);
var state_28881__$1 = (function (){var statearr_28885 = state_28881;
(statearr_28885[(7)] = inst_28863__$1);

return statearr_28885;
})();
if(cljs.core.truth_(inst_28864)){
var statearr_28886_28903 = state_28881__$1;
(statearr_28886_28903[(1)] = (5));

} else {
var statearr_28887_28904 = state_28881__$1;
(statearr_28887_28904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (6))){
var inst_28863 = (state_28881[(7)]);
var inst_28868 = p.call(null,inst_28863);
var state_28881__$1 = state_28881;
if(cljs.core.truth_(inst_28868)){
var statearr_28888_28905 = state_28881__$1;
(statearr_28888_28905[(1)] = (8));

} else {
var statearr_28889_28906 = state_28881__$1;
(statearr_28889_28906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (3))){
var inst_28879 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28881__$1,inst_28879);
} else {
if((state_val_28882 === (2))){
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28881__$1,(4),ch);
} else {
if((state_val_28882 === (11))){
var inst_28871 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
var statearr_28890_28907 = state_28881__$1;
(statearr_28890_28907[(2)] = inst_28871);

(statearr_28890_28907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (9))){
var state_28881__$1 = state_28881;
var statearr_28891_28908 = state_28881__$1;
(statearr_28891_28908[(2)] = null);

(statearr_28891_28908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (5))){
var inst_28866 = cljs.core.async.close_BANG_.call(null,out);
var state_28881__$1 = state_28881;
var statearr_28892_28909 = state_28881__$1;
(statearr_28892_28909[(2)] = inst_28866);

(statearr_28892_28909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (10))){
var inst_28874 = (state_28881[(2)]);
var state_28881__$1 = (function (){var statearr_28893 = state_28881;
(statearr_28893[(8)] = inst_28874);

return statearr_28893;
})();
var statearr_28894_28910 = state_28881__$1;
(statearr_28894_28910[(2)] = null);

(statearr_28894_28910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (8))){
var inst_28863 = (state_28881[(7)]);
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28881__$1,(11),out,inst_28863);
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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_28895 = [null,null,null,null,null,null,null,null,null];
(statearr_28895[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_28895[(1)] = (1));

return statearr_28895;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_28881){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_28881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e28896){if((e28896 instanceof Object)){
var ex__27270__auto__ = e28896;
var statearr_28897_28911 = state_28881;
(statearr_28897_28911[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28912 = state_28881;
state_28881 = G__28912;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_28881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_28881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_28898 = f__27362__auto__.call(null);
(statearr_28898[(6)] = c__27361__auto___28900);

return statearr_28898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28914 = arguments.length;
switch (G__28914) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_28977){
var state_val_28978 = (state_28977[(1)]);
if((state_val_28978 === (7))){
var inst_28973 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
var statearr_28979_29017 = state_28977__$1;
(statearr_28979_29017[(2)] = inst_28973);

(statearr_28979_29017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (20))){
var inst_28943 = (state_28977[(7)]);
var inst_28954 = (state_28977[(2)]);
var inst_28955 = cljs.core.next.call(null,inst_28943);
var inst_28929 = inst_28955;
var inst_28930 = null;
var inst_28931 = (0);
var inst_28932 = (0);
var state_28977__$1 = (function (){var statearr_28980 = state_28977;
(statearr_28980[(8)] = inst_28931);

(statearr_28980[(9)] = inst_28929);

(statearr_28980[(10)] = inst_28932);

(statearr_28980[(11)] = inst_28954);

(statearr_28980[(12)] = inst_28930);

return statearr_28980;
})();
var statearr_28981_29018 = state_28977__$1;
(statearr_28981_29018[(2)] = null);

(statearr_28981_29018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (1))){
var state_28977__$1 = state_28977;
var statearr_28982_29019 = state_28977__$1;
(statearr_28982_29019[(2)] = null);

(statearr_28982_29019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (4))){
var inst_28918 = (state_28977[(13)]);
var inst_28918__$1 = (state_28977[(2)]);
var inst_28919 = (inst_28918__$1 == null);
var state_28977__$1 = (function (){var statearr_28983 = state_28977;
(statearr_28983[(13)] = inst_28918__$1);

return statearr_28983;
})();
if(cljs.core.truth_(inst_28919)){
var statearr_28984_29020 = state_28977__$1;
(statearr_28984_29020[(1)] = (5));

} else {
var statearr_28985_29021 = state_28977__$1;
(statearr_28985_29021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (15))){
var state_28977__$1 = state_28977;
var statearr_28989_29022 = state_28977__$1;
(statearr_28989_29022[(2)] = null);

(statearr_28989_29022[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (21))){
var state_28977__$1 = state_28977;
var statearr_28990_29023 = state_28977__$1;
(statearr_28990_29023[(2)] = null);

(statearr_28990_29023[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (13))){
var inst_28931 = (state_28977[(8)]);
var inst_28929 = (state_28977[(9)]);
var inst_28932 = (state_28977[(10)]);
var inst_28930 = (state_28977[(12)]);
var inst_28939 = (state_28977[(2)]);
var inst_28940 = (inst_28932 + (1));
var tmp28986 = inst_28931;
var tmp28987 = inst_28929;
var tmp28988 = inst_28930;
var inst_28929__$1 = tmp28987;
var inst_28930__$1 = tmp28988;
var inst_28931__$1 = tmp28986;
var inst_28932__$1 = inst_28940;
var state_28977__$1 = (function (){var statearr_28991 = state_28977;
(statearr_28991[(8)] = inst_28931__$1);

(statearr_28991[(9)] = inst_28929__$1);

(statearr_28991[(10)] = inst_28932__$1);

(statearr_28991[(14)] = inst_28939);

(statearr_28991[(12)] = inst_28930__$1);

return statearr_28991;
})();
var statearr_28992_29024 = state_28977__$1;
(statearr_28992_29024[(2)] = null);

(statearr_28992_29024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (22))){
var state_28977__$1 = state_28977;
var statearr_28993_29025 = state_28977__$1;
(statearr_28993_29025[(2)] = null);

(statearr_28993_29025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (6))){
var inst_28918 = (state_28977[(13)]);
var inst_28927 = f.call(null,inst_28918);
var inst_28928 = cljs.core.seq.call(null,inst_28927);
var inst_28929 = inst_28928;
var inst_28930 = null;
var inst_28931 = (0);
var inst_28932 = (0);
var state_28977__$1 = (function (){var statearr_28994 = state_28977;
(statearr_28994[(8)] = inst_28931);

(statearr_28994[(9)] = inst_28929);

(statearr_28994[(10)] = inst_28932);

(statearr_28994[(12)] = inst_28930);

return statearr_28994;
})();
var statearr_28995_29026 = state_28977__$1;
(statearr_28995_29026[(2)] = null);

(statearr_28995_29026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (17))){
var inst_28943 = (state_28977[(7)]);
var inst_28947 = cljs.core.chunk_first.call(null,inst_28943);
var inst_28948 = cljs.core.chunk_rest.call(null,inst_28943);
var inst_28949 = cljs.core.count.call(null,inst_28947);
var inst_28929 = inst_28948;
var inst_28930 = inst_28947;
var inst_28931 = inst_28949;
var inst_28932 = (0);
var state_28977__$1 = (function (){var statearr_28996 = state_28977;
(statearr_28996[(8)] = inst_28931);

(statearr_28996[(9)] = inst_28929);

(statearr_28996[(10)] = inst_28932);

(statearr_28996[(12)] = inst_28930);

return statearr_28996;
})();
var statearr_28997_29027 = state_28977__$1;
(statearr_28997_29027[(2)] = null);

(statearr_28997_29027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (3))){
var inst_28975 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28977__$1,inst_28975);
} else {
if((state_val_28978 === (12))){
var inst_28963 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
var statearr_28998_29028 = state_28977__$1;
(statearr_28998_29028[(2)] = inst_28963);

(statearr_28998_29028[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (2))){
var state_28977__$1 = state_28977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28977__$1,(4),in$);
} else {
if((state_val_28978 === (23))){
var inst_28971 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
var statearr_28999_29029 = state_28977__$1;
(statearr_28999_29029[(2)] = inst_28971);

(statearr_28999_29029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (19))){
var inst_28958 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
var statearr_29000_29030 = state_28977__$1;
(statearr_29000_29030[(2)] = inst_28958);

(statearr_29000_29030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (11))){
var inst_28943 = (state_28977[(7)]);
var inst_28929 = (state_28977[(9)]);
var inst_28943__$1 = cljs.core.seq.call(null,inst_28929);
var state_28977__$1 = (function (){var statearr_29001 = state_28977;
(statearr_29001[(7)] = inst_28943__$1);

return statearr_29001;
})();
if(inst_28943__$1){
var statearr_29002_29031 = state_28977__$1;
(statearr_29002_29031[(1)] = (14));

} else {
var statearr_29003_29032 = state_28977__$1;
(statearr_29003_29032[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (9))){
var inst_28965 = (state_28977[(2)]);
var inst_28966 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28977__$1 = (function (){var statearr_29004 = state_28977;
(statearr_29004[(15)] = inst_28965);

return statearr_29004;
})();
if(cljs.core.truth_(inst_28966)){
var statearr_29005_29033 = state_28977__$1;
(statearr_29005_29033[(1)] = (21));

} else {
var statearr_29006_29034 = state_28977__$1;
(statearr_29006_29034[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (5))){
var inst_28921 = cljs.core.async.close_BANG_.call(null,out);
var state_28977__$1 = state_28977;
var statearr_29007_29035 = state_28977__$1;
(statearr_29007_29035[(2)] = inst_28921);

(statearr_29007_29035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (14))){
var inst_28943 = (state_28977[(7)]);
var inst_28945 = cljs.core.chunked_seq_QMARK_.call(null,inst_28943);
var state_28977__$1 = state_28977;
if(inst_28945){
var statearr_29008_29036 = state_28977__$1;
(statearr_29008_29036[(1)] = (17));

} else {
var statearr_29009_29037 = state_28977__$1;
(statearr_29009_29037[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (16))){
var inst_28961 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
var statearr_29010_29038 = state_28977__$1;
(statearr_29010_29038[(2)] = inst_28961);

(statearr_29010_29038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (10))){
var inst_28932 = (state_28977[(10)]);
var inst_28930 = (state_28977[(12)]);
var inst_28937 = cljs.core._nth.call(null,inst_28930,inst_28932);
var state_28977__$1 = state_28977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28977__$1,(13),out,inst_28937);
} else {
if((state_val_28978 === (18))){
var inst_28943 = (state_28977[(7)]);
var inst_28952 = cljs.core.first.call(null,inst_28943);
var state_28977__$1 = state_28977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28977__$1,(20),out,inst_28952);
} else {
if((state_val_28978 === (8))){
var inst_28931 = (state_28977[(8)]);
var inst_28932 = (state_28977[(10)]);
var inst_28934 = (inst_28932 < inst_28931);
var inst_28935 = inst_28934;
var state_28977__$1 = state_28977;
if(cljs.core.truth_(inst_28935)){
var statearr_29011_29039 = state_28977__$1;
(statearr_29011_29039[(1)] = (10));

} else {
var statearr_29012_29040 = state_28977__$1;
(statearr_29012_29040[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27267__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27267__auto____0 = (function (){
var statearr_29013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29013[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27267__auto__);

(statearr_29013[(1)] = (1));

return statearr_29013;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27267__auto____1 = (function (state_28977){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_28977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e29014){if((e29014 instanceof Object)){
var ex__27270__auto__ = e29014;
var statearr_29015_29041 = state_28977;
(statearr_29015_29041[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29042 = state_28977;
state_28977 = G__29042;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27267__auto__ = function(state_28977){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27267__auto____1.call(this,state_28977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27267__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27267__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_29016 = f__27362__auto__.call(null);
(statearr_29016[(6)] = c__27361__auto__);

return statearr_29016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));

return c__27361__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29044 = arguments.length;
switch (G__29044) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29047 = arguments.length;
switch (G__29047) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29050 = arguments.length;
switch (G__29050) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27361__auto___29097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_29074){
var state_val_29075 = (state_29074[(1)]);
if((state_val_29075 === (7))){
var inst_29069 = (state_29074[(2)]);
var state_29074__$1 = state_29074;
var statearr_29076_29098 = state_29074__$1;
(statearr_29076_29098[(2)] = inst_29069);

(statearr_29076_29098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29075 === (1))){
var inst_29051 = null;
var state_29074__$1 = (function (){var statearr_29077 = state_29074;
(statearr_29077[(7)] = inst_29051);

return statearr_29077;
})();
var statearr_29078_29099 = state_29074__$1;
(statearr_29078_29099[(2)] = null);

(statearr_29078_29099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29075 === (4))){
var inst_29054 = (state_29074[(8)]);
var inst_29054__$1 = (state_29074[(2)]);
var inst_29055 = (inst_29054__$1 == null);
var inst_29056 = cljs.core.not.call(null,inst_29055);
var state_29074__$1 = (function (){var statearr_29079 = state_29074;
(statearr_29079[(8)] = inst_29054__$1);

return statearr_29079;
})();
if(inst_29056){
var statearr_29080_29100 = state_29074__$1;
(statearr_29080_29100[(1)] = (5));

} else {
var statearr_29081_29101 = state_29074__$1;
(statearr_29081_29101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29075 === (6))){
var state_29074__$1 = state_29074;
var statearr_29082_29102 = state_29074__$1;
(statearr_29082_29102[(2)] = null);

(statearr_29082_29102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29075 === (3))){
var inst_29071 = (state_29074[(2)]);
var inst_29072 = cljs.core.async.close_BANG_.call(null,out);
var state_29074__$1 = (function (){var statearr_29083 = state_29074;
(statearr_29083[(9)] = inst_29071);

return statearr_29083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29074__$1,inst_29072);
} else {
if((state_val_29075 === (2))){
var state_29074__$1 = state_29074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29074__$1,(4),ch);
} else {
if((state_val_29075 === (11))){
var inst_29054 = (state_29074[(8)]);
var inst_29063 = (state_29074[(2)]);
var inst_29051 = inst_29054;
var state_29074__$1 = (function (){var statearr_29084 = state_29074;
(statearr_29084[(7)] = inst_29051);

(statearr_29084[(10)] = inst_29063);

return statearr_29084;
})();
var statearr_29085_29103 = state_29074__$1;
(statearr_29085_29103[(2)] = null);

(statearr_29085_29103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29075 === (9))){
var inst_29054 = (state_29074[(8)]);
var state_29074__$1 = state_29074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29074__$1,(11),out,inst_29054);
} else {
if((state_val_29075 === (5))){
var inst_29051 = (state_29074[(7)]);
var inst_29054 = (state_29074[(8)]);
var inst_29058 = cljs.core._EQ_.call(null,inst_29054,inst_29051);
var state_29074__$1 = state_29074;
if(inst_29058){
var statearr_29087_29104 = state_29074__$1;
(statearr_29087_29104[(1)] = (8));

} else {
var statearr_29088_29105 = state_29074__$1;
(statearr_29088_29105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29075 === (10))){
var inst_29066 = (state_29074[(2)]);
var state_29074__$1 = state_29074;
var statearr_29089_29106 = state_29074__$1;
(statearr_29089_29106[(2)] = inst_29066);

(statearr_29089_29106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29075 === (8))){
var inst_29051 = (state_29074[(7)]);
var tmp29086 = inst_29051;
var inst_29051__$1 = tmp29086;
var state_29074__$1 = (function (){var statearr_29090 = state_29074;
(statearr_29090[(7)] = inst_29051__$1);

return statearr_29090;
})();
var statearr_29091_29107 = state_29074__$1;
(statearr_29091_29107[(2)] = null);

(statearr_29091_29107[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_29092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29092[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_29092[(1)] = (1));

return statearr_29092;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_29074){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_29074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e29093){if((e29093 instanceof Object)){
var ex__27270__auto__ = e29093;
var statearr_29094_29108 = state_29074;
(statearr_29094_29108[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29109 = state_29074;
state_29074 = G__29109;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_29074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_29074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_29095 = f__27362__auto__.call(null);
(statearr_29095[(6)] = c__27361__auto___29097);

return statearr_29095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29111 = arguments.length;
switch (G__29111) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27361__auto___29177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_29149){
var state_val_29150 = (state_29149[(1)]);
if((state_val_29150 === (7))){
var inst_29145 = (state_29149[(2)]);
var state_29149__$1 = state_29149;
var statearr_29151_29178 = state_29149__$1;
(statearr_29151_29178[(2)] = inst_29145);

(statearr_29151_29178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (1))){
var inst_29112 = (new Array(n));
var inst_29113 = inst_29112;
var inst_29114 = (0);
var state_29149__$1 = (function (){var statearr_29152 = state_29149;
(statearr_29152[(7)] = inst_29113);

(statearr_29152[(8)] = inst_29114);

return statearr_29152;
})();
var statearr_29153_29179 = state_29149__$1;
(statearr_29153_29179[(2)] = null);

(statearr_29153_29179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (4))){
var inst_29117 = (state_29149[(9)]);
var inst_29117__$1 = (state_29149[(2)]);
var inst_29118 = (inst_29117__$1 == null);
var inst_29119 = cljs.core.not.call(null,inst_29118);
var state_29149__$1 = (function (){var statearr_29154 = state_29149;
(statearr_29154[(9)] = inst_29117__$1);

return statearr_29154;
})();
if(inst_29119){
var statearr_29155_29180 = state_29149__$1;
(statearr_29155_29180[(1)] = (5));

} else {
var statearr_29156_29181 = state_29149__$1;
(statearr_29156_29181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (15))){
var inst_29139 = (state_29149[(2)]);
var state_29149__$1 = state_29149;
var statearr_29157_29182 = state_29149__$1;
(statearr_29157_29182[(2)] = inst_29139);

(statearr_29157_29182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (13))){
var state_29149__$1 = state_29149;
var statearr_29158_29183 = state_29149__$1;
(statearr_29158_29183[(2)] = null);

(statearr_29158_29183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (6))){
var inst_29114 = (state_29149[(8)]);
var inst_29135 = (inst_29114 > (0));
var state_29149__$1 = state_29149;
if(cljs.core.truth_(inst_29135)){
var statearr_29159_29184 = state_29149__$1;
(statearr_29159_29184[(1)] = (12));

} else {
var statearr_29160_29185 = state_29149__$1;
(statearr_29160_29185[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (3))){
var inst_29147 = (state_29149[(2)]);
var state_29149__$1 = state_29149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29149__$1,inst_29147);
} else {
if((state_val_29150 === (12))){
var inst_29113 = (state_29149[(7)]);
var inst_29137 = cljs.core.vec.call(null,inst_29113);
var state_29149__$1 = state_29149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29149__$1,(15),out,inst_29137);
} else {
if((state_val_29150 === (2))){
var state_29149__$1 = state_29149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29149__$1,(4),ch);
} else {
if((state_val_29150 === (11))){
var inst_29129 = (state_29149[(2)]);
var inst_29130 = (new Array(n));
var inst_29113 = inst_29130;
var inst_29114 = (0);
var state_29149__$1 = (function (){var statearr_29161 = state_29149;
(statearr_29161[(7)] = inst_29113);

(statearr_29161[(8)] = inst_29114);

(statearr_29161[(10)] = inst_29129);

return statearr_29161;
})();
var statearr_29162_29186 = state_29149__$1;
(statearr_29162_29186[(2)] = null);

(statearr_29162_29186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (9))){
var inst_29113 = (state_29149[(7)]);
var inst_29127 = cljs.core.vec.call(null,inst_29113);
var state_29149__$1 = state_29149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29149__$1,(11),out,inst_29127);
} else {
if((state_val_29150 === (5))){
var inst_29113 = (state_29149[(7)]);
var inst_29122 = (state_29149[(11)]);
var inst_29114 = (state_29149[(8)]);
var inst_29117 = (state_29149[(9)]);
var inst_29121 = (inst_29113[inst_29114] = inst_29117);
var inst_29122__$1 = (inst_29114 + (1));
var inst_29123 = (inst_29122__$1 < n);
var state_29149__$1 = (function (){var statearr_29163 = state_29149;
(statearr_29163[(12)] = inst_29121);

(statearr_29163[(11)] = inst_29122__$1);

return statearr_29163;
})();
if(cljs.core.truth_(inst_29123)){
var statearr_29164_29187 = state_29149__$1;
(statearr_29164_29187[(1)] = (8));

} else {
var statearr_29165_29188 = state_29149__$1;
(statearr_29165_29188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (14))){
var inst_29142 = (state_29149[(2)]);
var inst_29143 = cljs.core.async.close_BANG_.call(null,out);
var state_29149__$1 = (function (){var statearr_29167 = state_29149;
(statearr_29167[(13)] = inst_29142);

return statearr_29167;
})();
var statearr_29168_29189 = state_29149__$1;
(statearr_29168_29189[(2)] = inst_29143);

(statearr_29168_29189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (10))){
var inst_29133 = (state_29149[(2)]);
var state_29149__$1 = state_29149;
var statearr_29169_29190 = state_29149__$1;
(statearr_29169_29190[(2)] = inst_29133);

(statearr_29169_29190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (8))){
var inst_29113 = (state_29149[(7)]);
var inst_29122 = (state_29149[(11)]);
var tmp29166 = inst_29113;
var inst_29113__$1 = tmp29166;
var inst_29114 = inst_29122;
var state_29149__$1 = (function (){var statearr_29170 = state_29149;
(statearr_29170[(7)] = inst_29113__$1);

(statearr_29170[(8)] = inst_29114);

return statearr_29170;
})();
var statearr_29171_29191 = state_29149__$1;
(statearr_29171_29191[(2)] = null);

(statearr_29171_29191[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_29172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29172[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_29172[(1)] = (1));

return statearr_29172;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_29149){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_29149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e29173){if((e29173 instanceof Object)){
var ex__27270__auto__ = e29173;
var statearr_29174_29192 = state_29149;
(statearr_29174_29192[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29193 = state_29149;
state_29149 = G__29193;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_29149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_29149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_29175 = f__27362__auto__.call(null);
(statearr_29175[(6)] = c__27361__auto___29177);

return statearr_29175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29195 = arguments.length;
switch (G__29195) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27361__auto___29265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27362__auto__ = (function (){var switch__27266__auto__ = (function (state_29237){
var state_val_29238 = (state_29237[(1)]);
if((state_val_29238 === (7))){
var inst_29233 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29239_29266 = state_29237__$1;
(statearr_29239_29266[(2)] = inst_29233);

(statearr_29239_29266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (1))){
var inst_29196 = [];
var inst_29197 = inst_29196;
var inst_29198 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29237__$1 = (function (){var statearr_29240 = state_29237;
(statearr_29240[(7)] = inst_29197);

(statearr_29240[(8)] = inst_29198);

return statearr_29240;
})();
var statearr_29241_29267 = state_29237__$1;
(statearr_29241_29267[(2)] = null);

(statearr_29241_29267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (4))){
var inst_29201 = (state_29237[(9)]);
var inst_29201__$1 = (state_29237[(2)]);
var inst_29202 = (inst_29201__$1 == null);
var inst_29203 = cljs.core.not.call(null,inst_29202);
var state_29237__$1 = (function (){var statearr_29242 = state_29237;
(statearr_29242[(9)] = inst_29201__$1);

return statearr_29242;
})();
if(inst_29203){
var statearr_29243_29268 = state_29237__$1;
(statearr_29243_29268[(1)] = (5));

} else {
var statearr_29244_29269 = state_29237__$1;
(statearr_29244_29269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (15))){
var inst_29227 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29245_29270 = state_29237__$1;
(statearr_29245_29270[(2)] = inst_29227);

(statearr_29245_29270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (13))){
var state_29237__$1 = state_29237;
var statearr_29246_29271 = state_29237__$1;
(statearr_29246_29271[(2)] = null);

(statearr_29246_29271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (6))){
var inst_29197 = (state_29237[(7)]);
var inst_29222 = inst_29197.length;
var inst_29223 = (inst_29222 > (0));
var state_29237__$1 = state_29237;
if(cljs.core.truth_(inst_29223)){
var statearr_29247_29272 = state_29237__$1;
(statearr_29247_29272[(1)] = (12));

} else {
var statearr_29248_29273 = state_29237__$1;
(statearr_29248_29273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (3))){
var inst_29235 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29237__$1,inst_29235);
} else {
if((state_val_29238 === (12))){
var inst_29197 = (state_29237[(7)]);
var inst_29225 = cljs.core.vec.call(null,inst_29197);
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29237__$1,(15),out,inst_29225);
} else {
if((state_val_29238 === (2))){
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29237__$1,(4),ch);
} else {
if((state_val_29238 === (11))){
var inst_29201 = (state_29237[(9)]);
var inst_29205 = (state_29237[(10)]);
var inst_29215 = (state_29237[(2)]);
var inst_29216 = [];
var inst_29217 = inst_29216.push(inst_29201);
var inst_29197 = inst_29216;
var inst_29198 = inst_29205;
var state_29237__$1 = (function (){var statearr_29249 = state_29237;
(statearr_29249[(11)] = inst_29217);

(statearr_29249[(7)] = inst_29197);

(statearr_29249[(8)] = inst_29198);

(statearr_29249[(12)] = inst_29215);

return statearr_29249;
})();
var statearr_29250_29274 = state_29237__$1;
(statearr_29250_29274[(2)] = null);

(statearr_29250_29274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (9))){
var inst_29197 = (state_29237[(7)]);
var inst_29213 = cljs.core.vec.call(null,inst_29197);
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29237__$1,(11),out,inst_29213);
} else {
if((state_val_29238 === (5))){
var inst_29201 = (state_29237[(9)]);
var inst_29205 = (state_29237[(10)]);
var inst_29198 = (state_29237[(8)]);
var inst_29205__$1 = f.call(null,inst_29201);
var inst_29206 = cljs.core._EQ_.call(null,inst_29205__$1,inst_29198);
var inst_29207 = cljs.core.keyword_identical_QMARK_.call(null,inst_29198,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29208 = ((inst_29206) || (inst_29207));
var state_29237__$1 = (function (){var statearr_29251 = state_29237;
(statearr_29251[(10)] = inst_29205__$1);

return statearr_29251;
})();
if(cljs.core.truth_(inst_29208)){
var statearr_29252_29275 = state_29237__$1;
(statearr_29252_29275[(1)] = (8));

} else {
var statearr_29253_29276 = state_29237__$1;
(statearr_29253_29276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (14))){
var inst_29230 = (state_29237[(2)]);
var inst_29231 = cljs.core.async.close_BANG_.call(null,out);
var state_29237__$1 = (function (){var statearr_29255 = state_29237;
(statearr_29255[(13)] = inst_29230);

return statearr_29255;
})();
var statearr_29256_29277 = state_29237__$1;
(statearr_29256_29277[(2)] = inst_29231);

(statearr_29256_29277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (10))){
var inst_29220 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29257_29278 = state_29237__$1;
(statearr_29257_29278[(2)] = inst_29220);

(statearr_29257_29278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (8))){
var inst_29201 = (state_29237[(9)]);
var inst_29205 = (state_29237[(10)]);
var inst_29197 = (state_29237[(7)]);
var inst_29210 = inst_29197.push(inst_29201);
var tmp29254 = inst_29197;
var inst_29197__$1 = tmp29254;
var inst_29198 = inst_29205;
var state_29237__$1 = (function (){var statearr_29258 = state_29237;
(statearr_29258[(7)] = inst_29197__$1);

(statearr_29258[(14)] = inst_29210);

(statearr_29258[(8)] = inst_29198);

return statearr_29258;
})();
var statearr_29259_29279 = state_29237__$1;
(statearr_29259_29279[(2)] = null);

(statearr_29259_29279[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27267__auto__ = null;
var cljs$core$async$state_machine__27267__auto____0 = (function (){
var statearr_29260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29260[(0)] = cljs$core$async$state_machine__27267__auto__);

(statearr_29260[(1)] = (1));

return statearr_29260;
});
var cljs$core$async$state_machine__27267__auto____1 = (function (state_29237){
while(true){
var ret_value__27268__auto__ = (function (){try{while(true){
var result__27269__auto__ = switch__27266__auto__.call(null,state_29237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27269__auto__;
}
break;
}
}catch (e29261){if((e29261 instanceof Object)){
var ex__27270__auto__ = e29261;
var statearr_29262_29280 = state_29237;
(statearr_29262_29280[(5)] = ex__27270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29281 = state_29237;
state_29237 = G__29281;
continue;
} else {
return ret_value__27268__auto__;
}
break;
}
});
cljs$core$async$state_machine__27267__auto__ = function(state_29237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27267__auto____1.call(this,state_29237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27267__auto____0;
cljs$core$async$state_machine__27267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27267__auto____1;
return cljs$core$async$state_machine__27267__auto__;
})()
})();
var state__27363__auto__ = (function (){var statearr_29263 = f__27362__auto__.call(null);
(statearr_29263[(6)] = c__27361__auto___29265);

return statearr_29263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27363__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1577462216850
