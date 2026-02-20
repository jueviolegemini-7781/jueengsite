(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const d of h)if(d.type==="childList")for(const g of d.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function c(h){const d={};return h.integrity&&(d.integrity=h.integrity),h.referrerPolicy&&(d.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?d.credentials="include":h.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(h){if(h.ep)return;h.ep=!0;const d=c(h);fetch(h.href,d)}})();var nc={exports:{}},tl={};var Hf;function My(){if(Hf)return tl;Hf=1;var s=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(r,h,d){var g=null;if(d!==void 0&&(g=""+d),h.key!==void 0&&(g=""+h.key),"key"in h){d={};for(var y in h)y!=="key"&&(d[y]=h[y])}else d=h;return h=d.ref,{$$typeof:s,type:r,key:g,ref:h!==void 0?h:null,props:d}}return tl.Fragment=o,tl.jsx=c,tl.jsxs=c,tl}var Gf;function ky(){return Gf||(Gf=1,nc.exports=My()),nc.exports}var v=ky(),ic={exports:{}},ie={};var If;function Dy(){if(If)return ie;If=1;var s=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),k=Symbol.iterator;function H(E){return E===null||typeof E!="object"?null:(E=k&&E[k]||E["@@iterator"],typeof E=="function"?E:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,L={};function V(E,z,B){this.props=E,this.context=z,this.refs=L,this.updater=B||G}V.prototype.isReactComponent={},V.prototype.setState=function(E,z){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,z,"setState")},V.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function Y(){}Y.prototype=V.prototype;function F(E,z,B){this.props=E,this.context=z,this.refs=L,this.updater=B||G}var oe=F.prototype=new Y;oe.constructor=F,U(oe,V.prototype),oe.isPureReactComponent=!0;var pe=Array.isArray;function ye(){}var P={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function de(E,z,B){var Q=B.ref;return{$$typeof:s,type:E,key:z,ref:Q!==void 0?Q:null,props:B}}function Ke(E,z){return de(E.type,z,E.props)}function $e(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function ke(E){var z={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(B){return z[B]})}var Ut=/\/+/g;function je(E,z){return typeof E=="object"&&E!==null&&E.key!=null?ke(""+E.key):z.toString(36)}function Ue(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(ye,ye):(E.status="pending",E.then(function(z){E.status==="pending"&&(E.status="fulfilled",E.value=z)},function(z){E.status==="pending"&&(E.status="rejected",E.reason=z)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function M(E,z,B,Q,ne){var re=typeof E;(re==="undefined"||re==="boolean")&&(E=null);var te=!1;if(E===null)te=!0;else switch(re){case"bigint":case"string":case"number":te=!0;break;case"object":switch(E.$$typeof){case s:case o:te=!0;break;case S:return te=E._init,M(te(E._payload),z,B,Q,ne)}}if(te)return ne=ne(E),te=Q===""?"."+je(E,0):Q,pe(ne)?(B="",te!=null&&(B=te.replace(Ut,"$&/")+"/"),M(ne,z,B,"",function(Yt){return Yt})):ne!=null&&($e(ne)&&(ne=Ke(ne,B+(ne.key==null||E&&E.key===ne.key?"":(""+ne.key).replace(Ut,"$&/")+"/")+te)),z.push(ne)),1;te=0;var Je=Q===""?".":Q+":";if(pe(E))for(var De=0;De<E.length;De++)Q=E[De],re=Je+je(Q,De),te+=M(Q,z,B,re,ne);else if(De=H(E),typeof De=="function")for(E=De.call(E),De=0;!(Q=E.next()).done;)Q=Q.value,re=Je+je(Q,De++),te+=M(Q,z,B,re,ne);else if(re==="object"){if(typeof E.then=="function")return M(Ue(E),z,B,Q,ne);throw z=String(E),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return te}function q(E,z,B){if(E==null)return E;var Q=[],ne=0;return M(E,Q,"","",function(re){return z.call(B,re,ne++)}),Q}function I(E){if(E._status===-1){var z=E._result;z=z(),z.then(function(B){(E._status===0||E._status===-1)&&(E._status=1,E._result=B)},function(B){(E._status===0||E._status===-1)&&(E._status=2,E._result=B)}),E._status===-1&&(E._status=0,E._result=z)}if(E._status===1)return E._result.default;throw E._result}var xe=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Te={map:q,forEach:function(E,z,B){q(E,function(){z.apply(this,arguments)},B)},count:function(E){var z=0;return q(E,function(){z++}),z},toArray:function(E){return q(E,function(z){return z})||[]},only:function(E){if(!$e(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ie.Activity=T,ie.Children=Te,ie.Component=V,ie.Fragment=c,ie.Profiler=h,ie.PureComponent=F,ie.StrictMode=r,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ie.__COMPILER_RUNTIME={__proto__:null,c:function(E){return P.H.useMemoCache(E)}},ie.cache=function(E){return function(){return E.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(E,z,B){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var Q=U({},E.props),ne=E.key;if(z!=null)for(re in z.key!==void 0&&(ne=""+z.key),z)!X.call(z,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&z.ref===void 0||(Q[re]=z[re]);var re=arguments.length-2;if(re===1)Q.children=B;else if(1<re){for(var te=Array(re),Je=0;Je<re;Je++)te[Je]=arguments[Je+2];Q.children=te}return de(E.type,ne,Q)},ie.createContext=function(E){return E={$$typeof:g,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},ie.createElement=function(E,z,B){var Q,ne={},re=null;if(z!=null)for(Q in z.key!==void 0&&(re=""+z.key),z)X.call(z,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ne[Q]=z[Q]);var te=arguments.length-2;if(te===1)ne.children=B;else if(1<te){for(var Je=Array(te),De=0;De<te;De++)Je[De]=arguments[De+2];ne.children=Je}if(E&&E.defaultProps)for(Q in te=E.defaultProps,te)ne[Q]===void 0&&(ne[Q]=te[Q]);return de(E,re,ne)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(E){return{$$typeof:y,render:E}},ie.isValidElement=$e,ie.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:I}},ie.memo=function(E,z){return{$$typeof:p,type:E,compare:z===void 0?null:z}},ie.startTransition=function(E){var z=P.T,B={};P.T=B;try{var Q=E(),ne=P.S;ne!==null&&ne(B,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ye,xe)}catch(re){xe(re)}finally{z!==null&&B.types!==null&&(z.types=B.types),P.T=z}},ie.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ie.use=function(E){return P.H.use(E)},ie.useActionState=function(E,z,B){return P.H.useActionState(E,z,B)},ie.useCallback=function(E,z){return P.H.useCallback(E,z)},ie.useContext=function(E){return P.H.useContext(E)},ie.useDebugValue=function(){},ie.useDeferredValue=function(E,z){return P.H.useDeferredValue(E,z)},ie.useEffect=function(E,z){return P.H.useEffect(E,z)},ie.useEffectEvent=function(E){return P.H.useEffectEvent(E)},ie.useId=function(){return P.H.useId()},ie.useImperativeHandle=function(E,z,B){return P.H.useImperativeHandle(E,z,B)},ie.useInsertionEffect=function(E,z){return P.H.useInsertionEffect(E,z)},ie.useLayoutEffect=function(E,z){return P.H.useLayoutEffect(E,z)},ie.useMemo=function(E,z){return P.H.useMemo(E,z)},ie.useOptimistic=function(E,z){return P.H.useOptimistic(E,z)},ie.useReducer=function(E,z,B){return P.H.useReducer(E,z,B)},ie.useRef=function(E){return P.H.useRef(E)},ie.useState=function(E){return P.H.useState(E)},ie.useSyncExternalStore=function(E,z,B){return P.H.useSyncExternalStore(E,z,B)},ie.useTransition=function(){return P.H.useTransition()},ie.version="19.2.3",ie}var Bf;function Nc(){return Bf||(Bf=1,ic.exports=Dy()),ic.exports}var R=Nc(),lc={exports:{}},al={},sc={exports:{}},oc={};var qf;function jy(){return qf||(qf=1,(function(s){function o(M,q){var I=M.length;M.push(q);e:for(;0<I;){var xe=I-1>>>1,Te=M[xe];if(0<h(Te,q))M[xe]=q,M[I]=Te,I=xe;else break e}}function c(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var q=M[0],I=M.pop();if(I!==q){M[0]=I;e:for(var xe=0,Te=M.length,E=Te>>>1;xe<E;){var z=2*(xe+1)-1,B=M[z],Q=z+1,ne=M[Q];if(0>h(B,I))Q<Te&&0>h(ne,B)?(M[xe]=ne,M[Q]=I,xe=Q):(M[xe]=B,M[z]=I,xe=z);else if(Q<Te&&0>h(ne,I))M[xe]=ne,M[Q]=I,xe=Q;else break e}}return q}function h(M,q){var I=M.sortIndex-q.sortIndex;return I!==0?I:M.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;s.unstable_now=function(){return d.now()}}else{var g=Date,y=g.now();s.unstable_now=function(){return g.now()-y}}var m=[],p=[],S=1,T=null,k=3,H=!1,G=!1,U=!1,L=!1,V=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function oe(M){for(var q=c(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=M)r(p),q.sortIndex=q.expirationTime,o(m,q);else break;q=c(p)}}function pe(M){if(U=!1,oe(M),!G)if(c(m)!==null)G=!0,ye||(ye=!0,ke());else{var q=c(p);q!==null&&Ue(pe,q.startTime-M)}}var ye=!1,P=-1,X=5,de=-1;function Ke(){return L?!0:!(s.unstable_now()-de<X)}function $e(){if(L=!1,ye){var M=s.unstable_now();de=M;var q=!0;try{e:{G=!1,U&&(U=!1,Y(P),P=-1),H=!0;var I=k;try{t:{for(oe(M),T=c(m);T!==null&&!(T.expirationTime>M&&Ke());){var xe=T.callback;if(typeof xe=="function"){T.callback=null,k=T.priorityLevel;var Te=xe(T.expirationTime<=M);if(M=s.unstable_now(),typeof Te=="function"){T.callback=Te,oe(M),q=!0;break t}T===c(m)&&r(m),oe(M)}else r(m);T=c(m)}if(T!==null)q=!0;else{var E=c(p);E!==null&&Ue(pe,E.startTime-M),q=!1}}break e}finally{T=null,k=I,H=!1}q=void 0}}finally{q?ke():ye=!1}}}var ke;if(typeof F=="function")ke=function(){F($e)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,je=Ut.port2;Ut.port1.onmessage=$e,ke=function(){je.postMessage(null)}}else ke=function(){V($e,0)};function Ue(M,q){P=V(function(){M(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(M){M.callback=null},s.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<M?Math.floor(1e3/M):5},s.unstable_getCurrentPriorityLevel=function(){return k},s.unstable_next=function(M){switch(k){case 1:case 2:case 3:var q=3;break;default:q=k}var I=k;k=q;try{return M()}finally{k=I}},s.unstable_requestPaint=function(){L=!0},s.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var I=k;k=M;try{return q()}finally{k=I}},s.unstable_scheduleCallback=function(M,q,I){var xe=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?xe+I:xe):I=xe,M){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=I+Te,M={id:S++,callback:q,priorityLevel:M,startTime:I,expirationTime:Te,sortIndex:-1},I>xe?(M.sortIndex=I,o(p,M),c(m)===null&&M===c(p)&&(U?(Y(P),P=-1):U=!0,Ue(pe,I-xe))):(M.sortIndex=Te,o(m,M),G||H||(G=!0,ye||(ye=!0,ke()))),M},s.unstable_shouldYield=Ke,s.unstable_wrapCallback=function(M){var q=k;return function(){var I=k;k=q;try{return M.apply(this,arguments)}finally{k=I}}}})(oc)),oc}var Yf;function zy(){return Yf||(Yf=1,sc.exports=jy()),sc.exports}var rc={exports:{}},lt={};var Vf;function _y(){if(Vf)return lt;Vf=1;var s=Nc();function o(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},h=Symbol.for("react.portal");function d(m,p,S){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:T==null?null:""+T,children:m,containerInfo:p,implementation:S}}var g=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,lt.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return d(m,p,null,S)},lt.flushSync=function(m){var p=g.T,S=r.p;try{if(g.T=null,r.p=2,m)return m()}finally{g.T=p,r.p=S,r.d.f()}},lt.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},lt.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},lt.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,T=y(S,p.crossOrigin),k=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:T,integrity:k,fetchPriority:H}):S==="script"&&r.d.X(m,{crossOrigin:T,integrity:k,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},lt.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=y(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},lt.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,T=y(S,p.crossOrigin);r.d.L(m,S,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},lt.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=y(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},lt.requestFormReset=function(m){r.d.r(m)},lt.unstable_batchedUpdates=function(m,p){return m(p)},lt.useFormState=function(m,p,S){return g.H.useFormState(m,p,S)},lt.useFormStatus=function(){return g.H.useHostTransitionStatus()},lt.version="19.2.3",lt}var Qf;function Ly(){if(Qf)return rc.exports;Qf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(o){console.error(o)}}return s(),rc.exports=_y(),rc.exports}var Xf;function Uy(){if(Xf)return al;Xf=1;var s=zy(),o=Nc(),c=Ly();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(d(e)!==e)throw Error(r(188))}function p(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return m(i),e;if(l===n)return m(i),t;l=l.sibling}throw Error(r(188))}if(a.return!==n.return)a=i,n=l;else{for(var u=!1,f=i.child;f;){if(f===a){u=!0,a=i,n=l;break}if(f===n){u=!0,n=i,a=l;break}f=f.sibling}if(!u){for(f=l.child;f;){if(f===a){u=!0,a=l,n=i;break}if(f===n){u=!0,n=l,a=i;break}f=f.sibling}if(!u)throw Error(r(189))}}if(a.alternate!==n)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,k=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),F=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),Ke=Symbol.for("react.memo_cache_sentinel"),$e=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=$e&&e[$e]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Symbol.for("react.client.reference");function je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case V:return"Profiler";case L:return"StrictMode";case pe:return"Suspense";case ye:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case F:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:je(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return je(e(t))}catch{}}return null}var Ue=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},xe=[],Te=-1;function E(e){return{current:e}}function z(e){0>Te||(e.current=xe[Te],xe[Te]=null,Te--)}function B(e,t){Te++,xe[Te]=e.current,e.current=t}var Q=E(null),ne=E(null),re=E(null),te=E(null);function Je(e,t){switch(B(re,t),B(ne,e),B(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?of(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=of(t),e=rf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(Q),B(Q,e)}function De(){z(Q),z(ne),z(re)}function Yt(e){e.memoizedState!==null&&B(te,e);var t=Q.current,a=rf(t,e.type);t!==a&&(B(ne,e),B(Q,a))}function Ea(e){ne.current===e&&(z(Q),z(ne)),te.current===e&&(z(te),Pi._currentValue=I)}var Sa,Lc;function Ja(e){if(Sa===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Sa=t&&t[1]||"",Lc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sa+e+Lc}var Gs=!1;function Is(e,t){if(!e||Gs)return"";Gs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(O){var N=O}Reflect.construct(e,[],_)}else{try{_.call()}catch(O){N=O}e.call(_.prototype)}}else{try{throw Error()}catch(O){N=O}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(O){if(O&&N&&typeof O.stack=="string")return[O.stack,N.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),u=l[0],f=l[1];if(u&&f){var b=u.split(`
`),C=f.split(`
`);for(i=n=0;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(n===b.length||i===C.length)for(n=b.length-1,i=C.length-1;1<=n&&0<=i&&b[n]!==C[i];)i--;for(;1<=n&&0<=i;n--,i--)if(b[n]!==C[i]){if(n!==1||i!==1)do if(n--,i--,0>i||b[n]!==C[i]){var D=`
`+b[n].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=n&&0<=i);break}}}finally{Gs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function op(e,t){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return e.child!==t&&t!==null?Ja("Suspense Fallback"):Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return Is(e.type,!1);case 11:return Is(e.type.render,!1);case 1:return Is(e.type,!0);case 31:return Ja("Activity");default:return""}}function Uc(e){try{var t="",a=null;do t+=op(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Bs=Object.prototype.hasOwnProperty,qs=s.unstable_scheduleCallback,Ys=s.unstable_cancelCallback,rp=s.unstable_shouldYield,cp=s.unstable_requestPaint,pt=s.unstable_now,up=s.unstable_getCurrentPriorityLevel,Hc=s.unstable_ImmediatePriority,Gc=s.unstable_UserBlockingPriority,ul=s.unstable_NormalPriority,hp=s.unstable_LowPriority,Ic=s.unstable_IdlePriority,dp=s.log,fp=s.unstable_setDisableYieldValue,ci=null,mt=null;function Ta(e){if(typeof dp=="function"&&fp(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ci,e)}catch{}}var yt=Math.clz32?Math.clz32:mp,gp=Math.log,pp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(gp(e)/pp|0)|0}var hl=256,dl=262144,fl=4194304;function Pa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var f=n&134217727;return f!==0?(n=f&~l,n!==0?i=Pa(n):(u&=f,u!==0?i=Pa(u):a||(a=f&~e,a!==0&&(i=Pa(a))))):(f=n&~l,f!==0?i=Pa(f):u!==0?i=Pa(u):a||(a=n&~e,a!==0&&(i=Pa(a)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:i}function ui(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function yp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bc(){var e=fl;return fl<<=1,(fl&62914560)===0&&(fl=4194304),e}function Vs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function hi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vp(e,t,a,n,i,l){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,b=e.expirationTimes,C=e.hiddenUpdates;for(a=u&~a;0<a;){var D=31-yt(a),_=1<<D;f[D]=0,b[D]=-1;var N=C[D];if(N!==null)for(C[D]=null,D=0;D<N.length;D++){var O=N[D];O!==null&&(O.lane&=-536870913)}a&=~_}n!==0&&qc(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(u&~t))}function qc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-yt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Yc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-yt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Vc(e,t){var a=t&-t;return a=(a&42)!==0?1:Qs(a),(a&(e.suspendedLanes|t))!==0?0:a}function Qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:kf(e.type))}function Xc(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var wa=Math.random().toString(36).slice(2),et="__reactFiber$"+wa,ot="__reactProps$"+wa,vn="__reactContainer$"+wa,Zs="__reactEvents$"+wa,bp="__reactListeners$"+wa,xp="__reactHandles$"+wa,Zc="__reactResources$"+wa,di="__reactMarker$"+wa;function Fs(e){delete e[et],delete e[ot],delete e[Zs],delete e[bp],delete e[xp]}function bn(e){var t=e[et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[vn]||a[et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=pf(e);e!==null;){if(a=e[et])return a;e=pf(e)}return t}e=a,a=e.parentNode}return null}function xn(e){if(e=e[et]||e[vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function fi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function En(e){var t=e[Zc];return t||(t=e[Zc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[di]=!0}var Fc=new Set,Kc={};function Wa(e,t){Sn(e,t),Sn(e+"Capture",t)}function Sn(e,t){for(Kc[e]=t,e=0;e<t.length;e++)Fc.add(t[e])}var Ep=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jc={},Pc={};function Sp(e){return Bs.call(Pc,e)?!0:Bs.call(Jc,e)?!1:Ep.test(e)?Pc[e]=!0:(Jc[e]=!0,!1)}function pl(e,t,a){if(Sp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ml(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Wt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tp(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){a=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ks(e){if(!e._valueTracker){var t=Wc(e)?"checked":"value";e._valueTracker=Tp(e,t,""+e[t])}}function $c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Wc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wp=/[\n"\\]/g;function Nt(e){return e.replace(wp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Js(e,t,a,n,i,l,u,f){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ct(t)):e.value!==""+Ct(t)&&(e.value=""+Ct(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Ps(e,u,Ct(t)):a!=null?Ps(e,u,Ct(a)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Ct(f):e.removeAttribute("name")}function eu(e,t,a,n,i,l,u,f){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Ks(e);return}a=a!=null?""+Ct(a):"",t=t!=null?""+Ct(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=f?e.checked:!!n,e.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ks(e)}function Ps(e,t,a){t==="number"&&yl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Tn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Ct(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tu(e,t,a){if(t!=null&&(t=""+Ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ct(a):""}function au(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(r(92));if(Ue(n)){if(1<n.length)throw Error(r(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Ct(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Ks(e)}function wn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ap=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Ap.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function iu(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&nu(e,i,n)}else for(var l in t)t.hasOwnProperty(l)&&nu(e,l,t[l])}function Ws(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Np=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(e){return Np.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $t(){}var $s=null;function eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var An=null,Cn=null;function lu(e){var t=xn(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Js(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ot]||null;if(!i)throw Error(r(90));Js(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&$c(n)}break e;case"textarea":tu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Tn(e,!!a.multiple,t,!1)}}}var to=!1;function su(e,t,a){if(to)return e(t,a);to=!0;try{var n=e(t);return n}finally{if(to=!1,(An!==null||Cn!==null)&&(ls(),An&&(t=An,e=Cn,Cn=An=null,lu(t),e)))for(t=0;t<e.length;t++)lu(e[t])}}function gi(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ot]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ao=!1;if(ea)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){ao=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{ao=!1}var Aa=null,no=null,bl=null;function ou(){if(bl)return bl;var e,t=no,a=t.length,n,i="value"in Aa?Aa.value:Aa.textContent,l=i.length;for(e=0;e<a&&t[e]===i[e];e++);var u=a-e;for(n=1;n<=u&&t[a-n]===i[l-n];n++);return bl=i.slice(e,1<n?1-n:void 0)}function xl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function El(){return!0}function ru(){return!1}function rt(e){function t(a,n,i,l,u){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(l):l[f]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?El:ru,this.isPropagationStopped=ru,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),t}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=rt($a),mi=T({},$a,{view:0,detail:0}),Op=rt(mi),io,lo,yi,Tl=T({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yi&&(yi&&e.type==="mousemove"?(io=e.screenX-yi.screenX,lo=e.screenY-yi.screenY):lo=io=0,yi=e),io)},movementY:function(e){return"movementY"in e?e.movementY:lo}}),cu=rt(Tl),Rp=T({},Tl,{dataTransfer:0}),Mp=rt(Rp),kp=T({},mi,{relatedTarget:0}),so=rt(kp),Dp=T({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),jp=rt(Dp),zp=T({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=rt(zp),Lp=T({},$a,{data:0}),uu=rt(Lp),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gp[e])?!!t[e]:!1}function oo(){return Ip}var Bp=T({},mi,{key:function(e){if(e.key){var t=Up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qp=rt(Bp),Yp=T({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=rt(Yp),Vp=T({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),Qp=rt(Vp),Xp=T({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=rt(Xp),Fp=T({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kp=rt(Fp),Jp=T({},$a,{newState:0,oldState:0}),Pp=rt(Jp),Wp=[9,13,27,32],ro=ea&&"CompositionEvent"in window,vi=null;ea&&"documentMode"in document&&(vi=document.documentMode);var $p=ea&&"TextEvent"in window&&!vi,du=ea&&(!ro||vi&&8<vi&&11>=vi),fu=" ",gu=!1;function pu(e,t){switch(e){case"keyup":return Wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function em(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(gu=!0,fu);case"textInput":return e=t.data,e===fu&&gu?null:e;default:return null}}function tm(e,t){if(Nn)return e==="compositionend"||!ro&&pu(e,t)?(e=ou(),bl=no=Aa=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!am[e.type]:t==="textarea"}function vu(e,t,a,n){An?Cn?Cn.push(n):Cn=[n]:An=n,t=ds(t,"onChange"),0<t.length&&(a=new Sl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var bi=null,xi=null;function nm(e){ef(e,0)}function wl(e){var t=fi(e);if($c(t))return e}function bu(e,t){if(e==="change")return t}var xu=!1;if(ea){var co;if(ea){var uo="oninput"in document;if(!uo){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),uo=typeof Eu.oninput=="function"}co=uo}else co=!1;xu=co&&(!document.documentMode||9<document.documentMode)}function Su(){bi&&(bi.detachEvent("onpropertychange",Tu),xi=bi=null)}function Tu(e){if(e.propertyName==="value"&&wl(xi)){var t=[];vu(t,xi,e,eo(e)),su(nm,t)}}function im(e,t,a){e==="focusin"?(Su(),bi=t,xi=a,bi.attachEvent("onpropertychange",Tu)):e==="focusout"&&Su()}function lm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(xi)}function sm(e,t){if(e==="click")return wl(t)}function om(e,t){if(e==="input"||e==="change")return wl(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:rm;function Ei(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Bs.call(t,i)||!vt(e[i],t[i]))return!1}return!0}function wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var a=wu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wu(a)}}function Cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=yl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=yl(e.document)}return t}function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var cm=ea&&"documentMode"in document&&11>=document.documentMode,On=null,fo=null,Si=null,go=!1;function Ou(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;go||On==null||On!==yl(n)||(n=On,"selectionStart"in n&&ho(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Si&&Ei(Si,n)||(Si=n,n=ds(fo,"onSelect"),0<n.length&&(t=new Sl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=On)))}function en(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Rn={animationend:en("Animation","AnimationEnd"),animationiteration:en("Animation","AnimationIteration"),animationstart:en("Animation","AnimationStart"),transitionrun:en("Transition","TransitionRun"),transitionstart:en("Transition","TransitionStart"),transitioncancel:en("Transition","TransitionCancel"),transitionend:en("Transition","TransitionEnd")},po={},Ru={};ea&&(Ru=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function tn(e){if(po[e])return po[e];if(!Rn[e])return e;var t=Rn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ru)return po[e]=t[a];return e}var Mu=tn("animationend"),ku=tn("animationiteration"),Du=tn("animationstart"),um=tn("transitionrun"),hm=tn("transitionstart"),dm=tn("transitioncancel"),ju=tn("transitionend"),zu=new Map,mo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mo.push("scrollEnd");function Ht(e,t){zu.set(e,t),Wa(t,[e])}var Al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ot=[],Mn=0,yo=0;function Cl(){for(var e=Mn,t=yo=Mn=0;t<e;){var a=Ot[t];Ot[t++]=null;var n=Ot[t];Ot[t++]=null;var i=Ot[t];Ot[t++]=null;var l=Ot[t];if(Ot[t++]=null,n!==null&&i!==null){var u=n.pending;u===null?i.next=i:(i.next=u.next,u.next=i),n.pending=i}l!==0&&_u(a,i,l)}}function Nl(e,t,a,n){Ot[Mn++]=e,Ot[Mn++]=t,Ot[Mn++]=a,Ot[Mn++]=n,yo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function vo(e,t,a,n){return Nl(e,t,a,n),Ol(e)}function an(e,t){return Nl(e,null,null,t),Ol(e)}function _u(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,l=e.return;l!==null;)l.childLanes|=a,n=l.alternate,n!==null&&(n.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-yt(a),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),l):null}function Ol(e){if(50<Vi)throw Vi=0,Nr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var kn={};function fm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,a,n){return new fm(e,t,a,n)}function bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,t){var a=e.alternate;return a===null?(a=bt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Rl(e,t,a,n,i,l){var u=0;if(n=e,typeof e=="function")bo(e)&&(u=1);else if(typeof e=="string")u=vy(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=bt(31,a,t,i),e.elementType=de,e.lanes=l,e;case U:return nn(a.children,i,l,t);case L:u=8,i|=24;break;case V:return e=bt(12,a,t,i|2),e.elementType=V,e.lanes=l,e;case pe:return e=bt(13,a,t,i),e.elementType=pe,e.lanes=l,e;case ye:return e=bt(19,a,t,i),e.elementType=ye,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:u=10;break e;case Y:u=9;break e;case oe:u=11;break e;case P:u=14;break e;case X:u=16,n=null;break e}u=29,a=Error(r(130,e===null?"null":typeof e,"")),n=null}return t=bt(u,a,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function nn(e,t,a,n){return e=bt(7,e,n,t),e.lanes=a,e}function xo(e,t,a){return e=bt(6,e,null,t),e.lanes=a,e}function Uu(e){var t=bt(18,null,null,0);return t.stateNode=e,t}function Eo(e,t,a){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hu=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var a=Hu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Uc(t)},Hu.set(e,t),t)}return{value:e,source:t,stack:Uc(t)}}var Dn=[],jn=0,Ml=null,Ti=0,Mt=[],kt=0,Ca=null,Vt=1,Qt="";function aa(e,t){Dn[jn++]=Ti,Dn[jn++]=Ml,Ml=e,Ti=t}function Gu(e,t,a){Mt[kt++]=Vt,Mt[kt++]=Qt,Mt[kt++]=Ca,Ca=e;var n=Vt;e=Qt;var i=32-yt(n)-1;n&=~(1<<i),a+=1;var l=32-yt(t)+i;if(30<l){var u=i-i%5;l=(n&(1<<u)-1).toString(32),n>>=u,i-=u,Vt=1<<32-yt(t)+i|a<<i|n,Qt=l+e}else Vt=1<<l|a<<i|n,Qt=e}function So(e){e.return!==null&&(aa(e,1),Gu(e,1,0))}function To(e){for(;e===Ml;)Ml=Dn[--jn],Dn[jn]=null,Ti=Dn[--jn],Dn[jn]=null;for(;e===Ca;)Ca=Mt[--kt],Mt[kt]=null,Qt=Mt[--kt],Mt[kt]=null,Vt=Mt[--kt],Mt[kt]=null}function Iu(e,t){Mt[kt++]=Vt,Mt[kt++]=Qt,Mt[kt++]=Ca,Vt=t.id,Qt=t.overflow,Ca=e}var tt=null,ze=null,me=!1,Na=null,Dt=!1,wo=Error(r(519));function Oa(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wi(Rt(t,e)),wo}function Bu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[et]=e,t[ot]=n,a){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(a=0;a<Xi.length;a++)he(Xi[a],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),eu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),au(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||lf(t.textContent,a)?(n.popover!=null&&(he("beforetoggle",t),he("toggle",t)),n.onScroll!=null&&he("scroll",t),n.onScrollEnd!=null&&he("scrollend",t),n.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Oa(e,!0)}function qu(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:tt=tt.return}}function zn(e){if(e!==tt)return!1;if(!me)return qu(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||qr(e.type,e.memoizedProps)),a=!a),a&&ze&&Oa(e),qu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ze=gf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ze=gf(e)}else t===27?(t=ze,qa(e.type)?(e=Zr,Zr=null,ze=e):ze=t):ze=tt?zt(e.stateNode.nextSibling):null;return!0}function ln(){ze=tt=null,me=!1}function Ao(){var e=Na;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),Na=null),e}function wi(e){Na===null?Na=[e]:Na.push(e)}var Co=E(null),sn=null,na=null;function Ra(e,t,a){B(Co,t._currentValue),t._currentValue=a}function ia(e){e._currentValue=Co.current,z(Co)}function No(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Oo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var u=i.child;l=l.firstContext;e:for(;l!==null;){var f=l;l=i;for(var b=0;b<t.length;b++)if(f.context===t[b]){l.lanes|=a,f=l.alternate,f!==null&&(f.lanes|=a),No(l.return,a,e),n||(u=null);break e}l=f.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(r(341));u.lanes|=a,l=u.alternate,l!==null&&(l.lanes|=a),No(u,a,e),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===e){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function _n(e,t,a,n){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(r(387));if(u=u.memoizedProps,u!==null){var f=i.type;vt(i.pendingProps.value,u.value)||(e!==null?e.push(f):e=[f])}}else if(i===te.current){if(u=i.alternate,u===null)throw Error(r(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Pi):e=[Pi])}i=i.return}e!==null&&Oo(t,e,a,n),t.flags|=262144}function kl(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function on(e){sn=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Yu(sn,e)}function Dl(e,t){return sn===null&&on(e),Yu(e,t)}function Yu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},na===null){if(e===null)throw Error(r(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return a}var gm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},pm=s.unstable_scheduleCallback,mm=s.unstable_NormalPriority,Ye={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ro(){return{controller:new gm,data:new Map,refCount:0}}function Ai(e){e.refCount--,e.refCount===0&&pm(mm,function(){e.controller.abort()})}var Ci=null,Mo=0,Ln=0,Un=null;function ym(e,t){if(Ci===null){var a=Ci=[];Mo=0,Ln=jr(),Un={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Mo++,t.then(Vu,Vu),t}function Vu(){if(--Mo===0&&Ci!==null){Un!==null&&(Un.status="fulfilled");var e=Ci;Ci=null,Ln=0,Un=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Qu=M.S;M.S=function(e,t){Od=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ym(e,t),Qu!==null&&Qu(e,t)};var rn=E(null);function ko(){var e=rn.current;return e!==null?e:Me.pooledCache}function jl(e,t){t===null?B(rn,rn.current):B(rn,t.pool)}function Xu(){var e=ko();return e===null?null:{parent:Ye._currentValue,pool:e}}var Hn=Error(r(460)),Do=Error(r(474)),zl=Error(r(542)),_l={then:function(){}};function Zu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then($t,$t),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ju(e),e;default:if(typeof t.status=="string")t.then($t,$t);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ju(e),e}throw un=t,Hn}}function cn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(un=a,Hn):a}}var un=null;function Ku(){if(un===null)throw Error(r(459));var e=un;return un=null,e}function Ju(e){if(e===Hn||e===zl)throw Error(r(483))}var Gn=null,Ni=0;function Ll(e){var t=Ni;return Ni+=1,Gn===null&&(Gn=[]),Fu(Gn,e,t)}function Oi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ul(e,t){throw t.$$typeof===k?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Pu(e){function t(w,x){if(e){var A=w.deletions;A===null?(w.deletions=[x],w.flags|=16):A.push(x)}}function a(w,x){if(!e)return null;for(;x!==null;)t(w,x),x=x.sibling;return null}function n(w){for(var x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function i(w,x){return w=ta(w,x),w.index=0,w.sibling=null,w}function l(w,x,A){return w.index=A,e?(A=w.alternate,A!==null?(A=A.index,A<x?(w.flags|=67108866,x):A):(w.flags|=67108866,x)):(w.flags|=1048576,x)}function u(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function f(w,x,A,j){return x===null||x.tag!==6?(x=xo(A,w.mode,j),x.return=w,x):(x=i(x,A),x.return=w,x)}function b(w,x,A,j){var $=A.type;return $===U?D(w,x,A.props.children,j,A.key):x!==null&&(x.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===X&&cn($)===x.type)?(x=i(x,A.props),Oi(x,A),x.return=w,x):(x=Rl(A.type,A.key,A.props,null,w.mode,j),Oi(x,A),x.return=w,x)}function C(w,x,A,j){return x===null||x.tag!==4||x.stateNode.containerInfo!==A.containerInfo||x.stateNode.implementation!==A.implementation?(x=Eo(A,w.mode,j),x.return=w,x):(x=i(x,A.children||[]),x.return=w,x)}function D(w,x,A,j,$){return x===null||x.tag!==7?(x=nn(A,w.mode,j,$),x.return=w,x):(x=i(x,A),x.return=w,x)}function _(w,x,A){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=xo(""+x,w.mode,A),x.return=w,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case H:return A=Rl(x.type,x.key,x.props,null,w.mode,A),Oi(A,x),A.return=w,A;case G:return x=Eo(x,w.mode,A),x.return=w,x;case X:return x=cn(x),_(w,x,A)}if(Ue(x)||ke(x))return x=nn(x,w.mode,A,null),x.return=w,x;if(typeof x.then=="function")return _(w,Ll(x),A);if(x.$$typeof===F)return _(w,Dl(w,x),A);Ul(w,x)}return null}function N(w,x,A,j){var $=x!==null?x.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return $!==null?null:f(w,x,""+A,j);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case H:return A.key===$?b(w,x,A,j):null;case G:return A.key===$?C(w,x,A,j):null;case X:return A=cn(A),N(w,x,A,j)}if(Ue(A)||ke(A))return $!==null?null:D(w,x,A,j,null);if(typeof A.then=="function")return N(w,x,Ll(A),j);if(A.$$typeof===F)return N(w,x,Dl(w,A),j);Ul(w,A)}return null}function O(w,x,A,j,$){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return w=w.get(A)||null,f(x,w,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case H:return w=w.get(j.key===null?A:j.key)||null,b(x,w,j,$);case G:return w=w.get(j.key===null?A:j.key)||null,C(x,w,j,$);case X:return j=cn(j),O(w,x,A,j,$)}if(Ue(j)||ke(j))return w=w.get(A)||null,D(x,w,j,$,null);if(typeof j.then=="function")return O(w,x,A,Ll(j),$);if(j.$$typeof===F)return O(w,x,A,Dl(x,j),$);Ul(x,j)}return null}function Z(w,x,A,j){for(var $=null,ve=null,W=x,se=x=0,ge=null;W!==null&&se<A.length;se++){W.index>se?(ge=W,W=null):ge=W.sibling;var be=N(w,W,A[se],j);if(be===null){W===null&&(W=ge);break}e&&W&&be.alternate===null&&t(w,W),x=l(be,x,se),ve===null?$=be:ve.sibling=be,ve=be,W=ge}if(se===A.length)return a(w,W),me&&aa(w,se),$;if(W===null){for(;se<A.length;se++)W=_(w,A[se],j),W!==null&&(x=l(W,x,se),ve===null?$=W:ve.sibling=W,ve=W);return me&&aa(w,se),$}for(W=n(W);se<A.length;se++)ge=O(W,w,se,A[se],j),ge!==null&&(e&&ge.alternate!==null&&W.delete(ge.key===null?se:ge.key),x=l(ge,x,se),ve===null?$=ge:ve.sibling=ge,ve=ge);return e&&W.forEach(function(Za){return t(w,Za)}),me&&aa(w,se),$}function ee(w,x,A,j){if(A==null)throw Error(r(151));for(var $=null,ve=null,W=x,se=x=0,ge=null,be=A.next();W!==null&&!be.done;se++,be=A.next()){W.index>se?(ge=W,W=null):ge=W.sibling;var Za=N(w,W,be.value,j);if(Za===null){W===null&&(W=ge);break}e&&W&&Za.alternate===null&&t(w,W),x=l(Za,x,se),ve===null?$=Za:ve.sibling=Za,ve=Za,W=ge}if(be.done)return a(w,W),me&&aa(w,se),$;if(W===null){for(;!be.done;se++,be=A.next())be=_(w,be.value,j),be!==null&&(x=l(be,x,se),ve===null?$=be:ve.sibling=be,ve=be);return me&&aa(w,se),$}for(W=n(W);!be.done;se++,be=A.next())be=O(W,w,se,be.value,j),be!==null&&(e&&be.alternate!==null&&W.delete(be.key===null?se:be.key),x=l(be,x,se),ve===null?$=be:ve.sibling=be,ve=be);return e&&W.forEach(function(Ry){return t(w,Ry)}),me&&aa(w,se),$}function Re(w,x,A,j){if(typeof A=="object"&&A!==null&&A.type===U&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case H:e:{for(var $=A.key;x!==null;){if(x.key===$){if($=A.type,$===U){if(x.tag===7){a(w,x.sibling),j=i(x,A.props.children),j.return=w,w=j;break e}}else if(x.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===X&&cn($)===x.type){a(w,x.sibling),j=i(x,A.props),Oi(j,A),j.return=w,w=j;break e}a(w,x);break}else t(w,x);x=x.sibling}A.type===U?(j=nn(A.props.children,w.mode,j,A.key),j.return=w,w=j):(j=Rl(A.type,A.key,A.props,null,w.mode,j),Oi(j,A),j.return=w,w=j)}return u(w);case G:e:{for($=A.key;x!==null;){if(x.key===$)if(x.tag===4&&x.stateNode.containerInfo===A.containerInfo&&x.stateNode.implementation===A.implementation){a(w,x.sibling),j=i(x,A.children||[]),j.return=w,w=j;break e}else{a(w,x);break}else t(w,x);x=x.sibling}j=Eo(A,w.mode,j),j.return=w,w=j}return u(w);case X:return A=cn(A),Re(w,x,A,j)}if(Ue(A))return Z(w,x,A,j);if(ke(A)){if($=ke(A),typeof $!="function")throw Error(r(150));return A=$.call(A),ee(w,x,A,j)}if(typeof A.then=="function")return Re(w,x,Ll(A),j);if(A.$$typeof===F)return Re(w,x,Dl(w,A),j);Ul(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,x!==null&&x.tag===6?(a(w,x.sibling),j=i(x,A),j.return=w,w=j):(a(w,x),j=xo(A,w.mode,j),j.return=w,w=j),u(w)):a(w,x)}return function(w,x,A,j){try{Ni=0;var $=Re(w,x,A,j);return Gn=null,$}catch(W){if(W===Hn||W===zl)throw W;var ve=bt(29,W,null,w.mode);return ve.lanes=j,ve.return=w,ve}}}var hn=Pu(!0),Wu=Pu(!1),Ma=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ee&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ol(e),_u(e,null,a),t}return Nl(e,n,t,a),Ol(e)}function Ri(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Yc(e,a)}}function _o(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=u:l=l.next=u,a=a.next}while(a!==null);l===null?i=l=t:l=l.next=t}else i=l=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Lo=!1;function Mi(){if(Lo){var e=Un;if(e!==null)throw e}}function ki(e,t,a,n){Lo=!1;var i=e.updateQueue;Ma=!1;var l=i.firstBaseUpdate,u=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var b=f,C=b.next;b.next=null,u===null?l=C:u.next=C,u=b;var D=e.alternate;D!==null&&(D=D.updateQueue,f=D.lastBaseUpdate,f!==u&&(f===null?D.firstBaseUpdate=C:f.next=C,D.lastBaseUpdate=b))}if(l!==null){var _=i.baseState;u=0,D=C=b=null,f=l;do{var N=f.lane&-536870913,O=N!==f.lane;if(O?(fe&N)===N:(n&N)===N){N!==0&&N===Ln&&(Lo=!0),D!==null&&(D=D.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var Z=e,ee=f;N=t;var Re=a;switch(ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){_=Z.call(Re,_,N);break e}_=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,N=typeof Z=="function"?Z.call(Re,_,N):Z,N==null)break e;_=T({},_,N);break e;case 2:Ma=!0}}N=f.callback,N!==null&&(e.flags|=64,O&&(e.flags|=8192),O=i.callbacks,O===null?i.callbacks=[N]:O.push(N))}else O={lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},D===null?(C=D=O,b=_):D=D.next=O,u|=N;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;O=f,f=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);D===null&&(b=_),i.baseState=b,i.firstBaseUpdate=C,i.lastBaseUpdate=D,l===null&&(i.shared.lanes=0),Ua|=u,e.lanes=u,e.memoizedState=_}}function $u(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function eh(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$u(a[e],t)}var In=E(null),Hl=E(0);function th(e,t){e=fa,B(Hl,e),B(In,t),fa=e|t.baseLanes}function Uo(){B(Hl,fa),B(In,In.current)}function Ho(){fa=Hl.current,z(In),z(Hl)}var xt=E(null),jt=null;function ja(e){var t=e.alternate;B(Be,Be.current&1),B(xt,e),jt===null&&(t===null||In.current!==null||t.memoizedState!==null)&&(jt=e)}function Go(e){B(Be,Be.current),B(xt,e),jt===null&&(jt=e)}function ah(e){e.tag===22?(B(Be,Be.current),B(xt,e),jt===null&&(jt=e)):za()}function za(){B(Be,Be.current),B(xt,xt.current)}function Et(e){z(xt),jt===e&&(jt=null),z(Be)}var Be=E(0);function Gl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qr(a)||Xr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=0,le=null,Ne=null,Ve=null,Il=!1,Bn=!1,dn=!1,Bl=0,Di=0,qn=null,bm=0;function Ge(){throw Error(r(321))}function Io(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!vt(e[a],t[a]))return!1;return!0}function Bo(e,t,a,n,i,l){return la=l,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Gh:ar,dn=!1,l=a(n,i),dn=!1,Bn&&(l=ih(t,a,n,i)),nh(e),l}function nh(e){M.H=_i;var t=Ne!==null&&Ne.next!==null;if(la=0,Ve=Ne=le=null,Il=!1,Di=0,qn=null,t)throw Error(r(300));e===null||Qe||(e=e.dependencies,e!==null&&kl(e)&&(Qe=!0))}function ih(e,t,a,n){le=e;var i=0;do{if(Bn&&(qn=null),Di=0,Bn=!1,25<=i)throw Error(r(301));if(i+=1,Ve=Ne=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}M.H=Ih,l=t(a,n)}while(Bn);return l}function xm(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?ji(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(le.flags|=1024),t}function qo(){var e=Bl!==0;return Bl=0,e}function Yo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Vo(e){if(Il){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Il=!1}la=0,Ve=Ne=le=null,Bn=!1,Di=Bl=0,qn=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?le.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function qe(){if(Ne===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ve===null?le.memoizedState:Ve.next;if(t!==null)Ve=t,Ne=e;else{if(e===null)throw le.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ve===null?le.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ji(e){var t=Di;return Di+=1,qn===null&&(qn=[]),e=Fu(qn,e,t),t=le,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Gh:ar),e}function Yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ji(e);if(e.$$typeof===F)return at(e)}throw Error(r(438,String(e)))}function Qo(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=le.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ql(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ke;return t.index++,a}function sa(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=qe();return Xo(t,Ne,e)}function Xo(e,t,a){var n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=a;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var u=i.next;i.next=l.next,l.next=u}t.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var f=u=null,b=null,C=t,D=!1;do{var _=C.lane&-536870913;if(_!==C.lane?(fe&_)===_:(la&_)===_){var N=C.revertLane;if(N===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),_===Ln&&(D=!0);else if((la&N)===N){C=C.next,N===Ln&&(D=!0);continue}else _={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},b===null?(f=b=_,u=l):b=b.next=_,le.lanes|=N,Ua|=N;_=C.action,dn&&a(l,_),l=C.hasEagerState?C.eagerState:a(l,_)}else N={lane:_,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},b===null?(f=b=N,u=l):b=b.next=N,le.lanes|=_,Ua|=_;C=C.next}while(C!==null&&C!==t);if(b===null?u=l:b.next=f,!vt(l,e.memoizedState)&&(Qe=!0,D&&(a=Un,a!==null)))throw a;e.memoizedState=l,e.baseState=u,e.baseQueue=b,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Zo(e){var t=qe(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,l=t.memoizedState;if(i!==null){a.pending=null;var u=i=i.next;do l=e(l,u.action),u=u.next;while(u!==i);vt(l,t.memoizedState)||(Qe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,n]}function lh(e,t,a){var n=le,i=qe(),l=me;if(l){if(a===void 0)throw Error(r(407));a=a()}else a=t();var u=!vt((Ne||i).memoizedState,a);if(u&&(i.memoizedState=a,Qe=!0),i=i.queue,Jo(rh.bind(null,n,i,e),[e]),i.getSnapshot!==t||u||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Yn(9,{destroy:void 0},oh.bind(null,n,i,a,t),null),Me===null)throw Error(r(349));l||(la&127)!==0||sh(n,t,a)}return a}function sh(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=ql(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function oh(e,t,a,n){t.value=a,t.getSnapshot=n,ch(t)&&uh(e)}function rh(e,t,a){return a(function(){ch(t)&&uh(e)})}function ch(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!vt(e,a)}catch{return!0}}function uh(e){var t=an(e,2);t!==null&&ft(t,e,2)}function Fo(e){var t=st();if(typeof e=="function"){var a=e;if(e=a(),dn){Ta(!0);try{a()}finally{Ta(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t}function hh(e,t,a,n){return e.baseState=a,Xo(e,Ne,typeof n=="function"?n:sa)}function Em(e,t,a,n,i){if(Zl(e))throw Error(r(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){l.listeners.push(u)}};M.T!==null?a(!0):l.isTransition=!1,n(l),a=t.pending,a===null?(l.next=t.pending=l,dh(t,l)):(l.next=a.next,t.pending=a.next=l)}}function dh(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var l=M.T,u={};M.T=u;try{var f=a(i,n),b=M.S;b!==null&&b(u,f),fh(e,t,f)}catch(C){Ko(e,t,C)}finally{l!==null&&u.types!==null&&(l.types=u.types),M.T=l}}else try{l=a(i,n),fh(e,t,l)}catch(C){Ko(e,t,C)}}function fh(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){gh(e,t,n)},function(n){return Ko(e,t,n)}):gh(e,t,a)}function gh(e,t,a){t.status="fulfilled",t.value=a,ph(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,dh(e,a)))}function Ko(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,ph(t),t=t.next;while(t!==n)}e.action=null}function ph(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mh(e,t){return t}function yh(e,t){if(me){var a=Me.formState;if(a!==null){e:{var n=le;if(me){if(ze){t:{for(var i=ze,l=Dt;i.nodeType!==8;){if(!l){i=null;break t}if(i=zt(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){ze=zt(i.nextSibling),n=i.data==="F!";break e}}Oa(n)}n=!1}n&&(t=a[0])}}return a=st(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mh,lastRenderedState:t},a.queue=n,a=Lh.bind(null,le,n),n.dispatch=a,n=Fo(!1),l=tr.bind(null,le,!1,n.queue),n=st(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Em.bind(null,le,i,l,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function vh(e){var t=qe();return bh(t,Ne,e)}function bh(e,t,a){if(t=Xo(e,t,mh)[0],e=Vl(sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ji(t)}catch(u){throw u===Hn?zl:u}else n=t;t=qe();var i=t.queue,l=i.dispatch;return a!==t.memoizedState&&(le.flags|=2048,Yn(9,{destroy:void 0},Sm.bind(null,i,a),null)),[n,l,e]}function Sm(e,t){e.action=t}function xh(e){var t=qe(),a=Ne;if(a!==null)return bh(t,a,e);qe(),t=t.memoizedState,a=qe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Yn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=le.updateQueue,t===null&&(t=ql(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Eh(){return qe().memoizedState}function Ql(e,t,a,n){var i=st();le.flags|=e,i.memoizedState=Yn(1|t,{destroy:void 0},a,n===void 0?null:n)}function Xl(e,t,a,n){var i=qe();n=n===void 0?null:n;var l=i.memoizedState.inst;Ne!==null&&n!==null&&Io(n,Ne.memoizedState.deps)?i.memoizedState=Yn(t,l,a,n):(le.flags|=e,i.memoizedState=Yn(1|t,l,a,n))}function Sh(e,t){Ql(8390656,8,e,t)}function Jo(e,t){Xl(2048,8,e,t)}function Tm(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=ql(),le.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Th(e){var t=qe().memoizedState;return Tm({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function wh(e,t){return Xl(4,2,e,t)}function Ah(e,t){return Xl(4,4,e,t)}function Ch(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,a){a=a!=null?a.concat([e]):null,Xl(4,4,Ch.bind(null,t,e),a)}function Po(){}function Oh(e,t){var a=qe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Io(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Rh(e,t){var a=qe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Io(t,n[1]))return n[0];if(n=e(),dn){Ta(!0);try{e()}finally{Ta(!1)}}return a.memoizedState=[n,t],n}function Wo(e,t,a){return a===void 0||(la&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Md(),le.lanes|=e,Ua|=e,a)}function Mh(e,t,a,n){return vt(a,t)?a:In.current!==null?(e=Wo(e,a,n),vt(e,t)||(Qe=!0),e):(la&42)===0||(la&1073741824)!==0&&(fe&261930)===0?(Qe=!0,e.memoizedState=a):(e=Md(),le.lanes|=e,Ua|=e,t)}function kh(e,t,a,n,i){var l=q.p;q.p=l!==0&&8>l?l:8;var u=M.T,f={};M.T=f,tr(e,!1,t,a);try{var b=i(),C=M.S;if(C!==null&&C(f,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var D=vm(b,n);zi(e,t,D,wt(e))}else zi(e,t,n,wt(e))}catch(_){zi(e,t,{then:function(){},status:"rejected",reason:_},wt())}finally{q.p=l,u!==null&&f.types!==null&&(u.types=f.types),M.T=u}}function wm(){}function $o(e,t,a,n){if(e.tag!==5)throw Error(r(476));var i=Dh(e).queue;kh(e,i,t,I,a===null?wm:function(){return jh(e),a(n)})}function Dh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function jh(e){var t=Dh(e);t.next===null&&(t=e.alternate.memoizedState),zi(e,t.next.queue,{},wt())}function er(){return at(Pi)}function zh(){return qe().memoizedState}function _h(){return qe().memoizedState}function Am(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=wt();e=ka(a);var n=Da(t,e,a);n!==null&&(ft(n,t,a),Ri(n,t,a)),t={cache:Ro()},e.payload=t;return}t=t.return}}function Cm(e,t,a){var n=wt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zl(e)?Uh(t,a):(a=vo(e,t,a,n),a!==null&&(ft(a,e,n),Hh(a,t,n)))}function Lh(e,t,a){var n=wt();zi(e,t,a,n)}function zi(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zl(e))Uh(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,f=l(u,a);if(i.hasEagerState=!0,i.eagerState=f,vt(f,u))return Nl(e,t,i,0),Me===null&&Cl(),!1}catch{}if(a=vo(e,t,i,n),a!==null)return ft(a,e,n),Hh(a,t,n),!0}return!1}function tr(e,t,a,n){if(n={lane:2,revertLane:jr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Zl(e)){if(t)throw Error(r(479))}else t=vo(e,a,n,2),t!==null&&ft(t,e,2)}function Zl(e){var t=e.alternate;return e===le||t!==null&&t===le}function Uh(e,t){Bn=Il=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Hh(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Yc(e,a)}}var _i={readContext:at,use:Yl,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};_i.useEffectEvent=Ge;var Gh={readContext:at,use:Yl,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Sh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ql(4194308,4,Ch.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ql(4194308,4,e,t)},useInsertionEffect:function(e,t){Ql(4,2,e,t)},useMemo:function(e,t){var a=st();t=t===void 0?null:t;var n=e();if(dn){Ta(!0);try{e()}finally{Ta(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=st();if(a!==void 0){var i=a(t);if(dn){Ta(!0);try{a(t)}finally{Ta(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Cm.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Fo(e);var t=e.queue,a=Lh.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Po,useDeferredValue:function(e,t){var a=st();return Wo(a,e,t)},useTransition:function(){var e=Fo(!1);return e=kh.bind(null,le,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=le,i=st();if(me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Me===null)throw Error(r(349));(fe&127)!==0||sh(n,t,a)}i.memoizedState=a;var l={value:a,getSnapshot:t};return i.queue=l,Sh(rh.bind(null,n,l,e),[e]),n.flags|=2048,Yn(9,{destroy:void 0},oh.bind(null,n,l,a,t),null),a},useId:function(){var e=st(),t=Me.identifierPrefix;if(me){var a=Qt,n=Vt;a=(n&~(1<<32-yt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Bl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=bm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:er,useFormState:yh,useActionState:yh,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tr.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Qo,useCacheRefresh:function(){return st().memoizedState=Am.bind(null,le)},useEffectEvent:function(e){var t=st(),a={impl:e};return t.memoizedState=a,function(){if((Ee&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ar={readContext:at,use:Yl,useCallback:Oh,useContext:at,useEffect:Jo,useImperativeHandle:Nh,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Rh,useReducer:Vl,useRef:Eh,useState:function(){return Vl(sa)},useDebugValue:Po,useDeferredValue:function(e,t){var a=qe();return Mh(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Vl(sa)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:ji(e),t]},useSyncExternalStore:lh,useId:zh,useHostTransitionStatus:er,useFormState:vh,useActionState:vh,useOptimistic:function(e,t){var a=qe();return hh(a,Ne,e,t)},useMemoCache:Qo,useCacheRefresh:_h};ar.useEffectEvent=Th;var Ih={readContext:at,use:Yl,useCallback:Oh,useContext:at,useEffect:Jo,useImperativeHandle:Nh,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Rh,useReducer:Zo,useRef:Eh,useState:function(){return Zo(sa)},useDebugValue:Po,useDeferredValue:function(e,t){var a=qe();return Ne===null?Wo(a,e,t):Mh(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Zo(sa)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:ji(e),t]},useSyncExternalStore:lh,useId:zh,useHostTransitionStatus:er,useFormState:xh,useActionState:xh,useOptimistic:function(e,t){var a=qe();return Ne!==null?hh(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qo,useCacheRefresh:_h};Ih.useEffectEvent=Th;function nr(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ir={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=wt(),i=ka(n);i.payload=t,a!=null&&(i.callback=a),t=Da(e,i,n),t!==null&&(ft(t,e,n),Ri(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=wt(),i=ka(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Da(e,i,n),t!==null&&(ft(t,e,n),Ri(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=wt(),n=ka(a);n.tag=2,t!=null&&(n.callback=t),t=Da(e,n,a),t!==null&&(ft(t,e,a),Ri(t,e,a))}};function Bh(e,t,a,n,i,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,u):t.prototype&&t.prototype.isPureReactComponent?!Ei(a,n)||!Ei(i,l):!0}function qh(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ir.enqueueReplaceState(t,t.state,null)}function fn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Yh(e){Al(e)}function Vh(e){console.error(e)}function Qh(e){Al(e)}function Fl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Xh(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function lr(e,t,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,t)},a}function Zh(e){return e=ka(e),e.tag=3,e}function Fh(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){Xh(t,a,n)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Xh(t,a,n),typeof i!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function Nm(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&_n(t,a,i,!0),a=xt.current,a!==null){switch(a.tag){case 31:case 13:return jt===null?ss():a.alternate===null&&Ie===0&&(Ie=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===_l?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Mr(e,n,i)),!1;case 22:return a.flags|=65536,n===_l?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Mr(e,n,i)),!1}throw Error(r(435,a.tag))}return Mr(e,n,i),ss(),!1}if(me)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==wo&&(e=Error(r(422),{cause:n}),wi(Rt(e,a)))):(n!==wo&&(t=Error(r(423),{cause:n}),wi(Rt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Rt(n,a),i=lr(e.stateNode,n,i),_o(e,i),Ie!==4&&(Ie=2)),!1;var l=Error(r(520),{cause:n});if(l=Rt(l,a),Yi===null?Yi=[l]:Yi.push(l),Ie!==4&&(Ie=2),t===null)return!0;n=Rt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=lr(a.stateNode,n,e),_o(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Ha===null||!Ha.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Zh(i),Fh(i,e,a,n),_o(a,i),!1}a=a.return}while(a!==null);return!1}var sr=Error(r(461)),Qe=!1;function nt(e,t,a,n){t.child=e===null?Wu(t,null,a,n):hn(t,e.child,a,n)}function Kh(e,t,a,n,i){a=a.render;var l=t.ref;if("ref"in n){var u={};for(var f in n)f!=="ref"&&(u[f]=n[f])}else u=n;return on(t),n=Bo(e,t,a,u,l,i),f=qo(),e!==null&&!Qe?(Yo(e,t,i),oa(e,t,i)):(me&&f&&So(t),t.flags|=1,nt(e,t,n,i),t.child)}function Jh(e,t,a,n,i){if(e===null){var l=a.type;return typeof l=="function"&&!bo(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,Ph(e,t,l,n,i)):(e=Rl(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!gr(e,i)){var u=l.memoizedProps;if(a=a.compare,a=a!==null?a:Ei,a(u,n)&&e.ref===t.ref)return oa(e,t,i)}return t.flags|=1,e=ta(l,n),e.ref=t.ref,e.return=t,t.child=e}function Ph(e,t,a,n,i){if(e!==null){var l=e.memoizedProps;if(Ei(l,n)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=n=l,gr(e,i))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,oa(e,t,i)}return or(e,t,a,n,i)}function Wh(e,t,a,n){var i=n.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,t.child=null;return $h(e,t,l,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&jl(t,l!==null?l.cachePool:null),l!==null?th(t,l):Uo(),ah(t);else return n=t.lanes=536870912,$h(e,t,l!==null?l.baseLanes|a:a,a,n)}else l!==null?(jl(t,l.cachePool),th(t,l),za(),t.memoizedState=null):(e!==null&&jl(t,null),Uo(),za());return nt(e,t,i,a),t.child}function Li(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $h(e,t,a,n,i){var l=ko();return l=l===null?null:{parent:Ye._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&jl(t,null),Uo(),ah(t),e!==null&&_n(e,t,n,!0),t.childLanes=i,null}function Kl(e,t){return t=Pl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ed(e,t,a){return hn(t,e.child,null,a),e=Kl(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function Om(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(n.mode==="hidden")return e=Kl(t,n),t.lanes=536870912,Li(null,e);if(Go(t),(e=ze)?(e=ff(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Vt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},a=Uu(e),a.return=t,t.child=a,tt=t,ze=null)):e=null,e===null)throw Oa(t);return t.lanes=536870912,null}return Kl(t,n)}var l=e.memoizedState;if(l!==null){var u=l.dehydrated;if(Go(t),i)if(t.flags&256)t.flags&=-257,t=ed(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Qe||_n(e,t,a,!1),i=(a&e.childLanes)!==0,Qe||i){if(n=Me,n!==null&&(u=Vc(n,a),u!==0&&u!==l.retryLane))throw l.retryLane=u,an(e,u),ft(n,e,u),sr;ss(),t=ed(e,t,a)}else e=l.treeContext,ze=zt(u.nextSibling),tt=t,me=!0,Na=null,Dt=!1,e!==null&&Iu(t,e),t=Kl(t,n),t.flags|=4096;return t}return e=ta(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Jl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function or(e,t,a,n,i){return on(t),a=Bo(e,t,a,n,void 0,i),n=qo(),e!==null&&!Qe?(Yo(e,t,i),oa(e,t,i)):(me&&n&&So(t),t.flags|=1,nt(e,t,a,i),t.child)}function td(e,t,a,n,i,l){return on(t),t.updateQueue=null,a=ih(t,n,a,i),nh(e),n=qo(),e!==null&&!Qe?(Yo(e,t,l),oa(e,t,l)):(me&&n&&So(t),t.flags|=1,nt(e,t,a,l),t.child)}function ad(e,t,a,n,i){if(on(t),t.stateNode===null){var l=kn,u=a.contextType;typeof u=="object"&&u!==null&&(l=at(u)),l=new a(n,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ir,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=n,l.state=t.memoizedState,l.refs={},jo(t),u=a.contextType,l.context=typeof u=="object"&&u!==null?at(u):kn,l.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(nr(t,a,u,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(u=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),u!==l.state&&ir.enqueueReplaceState(l,l.state,null),ki(t,n,l,i),Mi(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){l=t.stateNode;var f=t.memoizedProps,b=fn(a,f);l.props=b;var C=l.context,D=a.contextType;u=kn,typeof D=="object"&&D!==null&&(u=at(D));var _=a.getDerivedStateFromProps;D=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,D||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(f||C!==u)&&qh(t,l,n,u),Ma=!1;var N=t.memoizedState;l.state=N,ki(t,n,l,i),Mi(),C=t.memoizedState,f||N!==C||Ma?(typeof _=="function"&&(nr(t,a,_,n),C=t.memoizedState),(b=Ma||Bh(t,a,b,n,N,C,u))?(D||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=C),l.props=n,l.state=C,l.context=u,n=b):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,zo(e,t),u=t.memoizedProps,D=fn(a,u),l.props=D,_=t.pendingProps,N=l.context,C=a.contextType,b=kn,typeof C=="object"&&C!==null&&(b=at(C)),f=a.getDerivedStateFromProps,(C=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==_||N!==b)&&qh(t,l,n,b),Ma=!1,N=t.memoizedState,l.state=N,ki(t,n,l,i),Mi();var O=t.memoizedState;u!==_||N!==O||Ma||e!==null&&e.dependencies!==null&&kl(e.dependencies)?(typeof f=="function"&&(nr(t,a,f,n),O=t.memoizedState),(D=Ma||Bh(t,a,D,n,N,O,b)||e!==null&&e.dependencies!==null&&kl(e.dependencies))?(C||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,O,b),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,O,b)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=O),l.props=n,l.state=O,l.context=b,n=D):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),n=!1)}return l=n,Jl(e,t),n=(t.flags&128)!==0,l||n?(l=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&n?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,a,i)):nt(e,t,a,i),t.memoizedState=l.state,e=t.child):e=oa(e,t,i),e}function nd(e,t,a,n){return ln(),t.flags|=256,nt(e,t,a,n),t.child}var rr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cr(e){return{baseLanes:e,cachePool:Xu()}}function ur(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Tt),e}function id(e,t,a){var n=t.pendingProps,i=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),u&&(i=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(i?ja(t):za(),(e=ze)?(e=ff(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Vt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},a=Uu(e),a.return=t,t.child=a,tt=t,ze=null)):e=null,e===null)throw Oa(t);return Xr(e)?t.lanes=32:t.lanes=536870912,null}var f=n.children;return n=n.fallback,i?(za(),i=t.mode,f=Pl({mode:"hidden",children:f},i),n=nn(n,i,a,null),f.return=t,n.return=t,f.sibling=n,t.child=f,n=t.child,n.memoizedState=cr(a),n.childLanes=ur(e,u,a),t.memoizedState=rr,Li(null,n)):(ja(t),hr(t,f))}var b=e.memoizedState;if(b!==null&&(f=b.dehydrated,f!==null)){if(l)t.flags&256?(ja(t),t.flags&=-257,t=dr(e,t,a)):t.memoizedState!==null?(za(),t.child=e.child,t.flags|=128,t=null):(za(),f=n.fallback,i=t.mode,n=Pl({mode:"visible",children:n.children},i),f=nn(f,i,a,null),f.flags|=2,n.return=t,f.return=t,n.sibling=f,t.child=n,hn(t,e.child,null,a),n=t.child,n.memoizedState=cr(a),n.childLanes=ur(e,u,a),t.memoizedState=rr,t=Li(null,n));else if(ja(t),Xr(f)){if(u=f.nextSibling&&f.nextSibling.dataset,u)var C=u.dgst;u=C,n=Error(r(419)),n.stack="",n.digest=u,wi({value:n,source:null,stack:null}),t=dr(e,t,a)}else if(Qe||_n(e,t,a,!1),u=(a&e.childLanes)!==0,Qe||u){if(u=Me,u!==null&&(n=Vc(u,a),n!==0&&n!==b.retryLane))throw b.retryLane=n,an(e,n),ft(u,e,n),sr;Qr(f)||ss(),t=dr(e,t,a)}else Qr(f)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,ze=zt(f.nextSibling),tt=t,me=!0,Na=null,Dt=!1,e!==null&&Iu(t,e),t=hr(t,n.children),t.flags|=4096);return t}return i?(za(),f=n.fallback,i=t.mode,b=e.child,C=b.sibling,n=ta(b,{mode:"hidden",children:n.children}),n.subtreeFlags=b.subtreeFlags&65011712,C!==null?f=ta(C,f):(f=nn(f,i,a,null),f.flags|=2),f.return=t,n.return=t,n.sibling=f,t.child=n,Li(null,n),n=t.child,f=e.child.memoizedState,f===null?f=cr(a):(i=f.cachePool,i!==null?(b=Ye._currentValue,i=i.parent!==b?{parent:b,pool:b}:i):i=Xu(),f={baseLanes:f.baseLanes|a,cachePool:i}),n.memoizedState=f,n.childLanes=ur(e,u,a),t.memoizedState=rr,Li(e.child,n)):(ja(t),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function hr(e,t){return t=Pl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Pl(e,t){return e=bt(22,e,null,t),e.lanes=0,e}function dr(e,t,a){return hn(t,e.child,null,a),e=hr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ld(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),No(e.return,t,a)}function fr(e,t,a,n,i,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=a,u.tailMode=i,u.treeForkCount=l)}function sd(e,t,a){var n=t.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var u=Be.current,f=(u&2)!==0;if(f?(u=u&1|2,t.flags|=128):u&=1,B(Be,u),nt(e,t,n,a),n=me?Ti:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,a,t);else if(e.tag===19)ld(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Gl(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),fr(t,!1,i,a,l,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gl(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}fr(t,!0,a,null,l,n);break;case"together":fr(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function oa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ua|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(_n(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=ta(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function gr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&kl(e)))}function Rm(e,t,a){switch(t.tag){case 3:Je(t,t.stateNode.containerInfo),Ra(t,Ye,e.memoizedState.cache),ln();break;case 27:case 5:Yt(t);break;case 4:Je(t,t.stateNode.containerInfo);break;case 10:Ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Go(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ja(t),t.flags|=128,null):(a&t.child.childLanes)!==0?id(e,t,a):(ja(t),e=oa(e,t,a),e!==null?e.sibling:null);ja(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(_n(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return sd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Be,Be.current),n)break;return null;case 22:return t.lanes=0,Wh(e,t,a,t.pendingProps);case 24:Ra(t,Ye,e.memoizedState.cache)}return oa(e,t,a)}function od(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!gr(e,a)&&(t.flags&128)===0)return Qe=!1,Rm(e,t,a);Qe=(e.flags&131072)!==0}else Qe=!1,me&&(t.flags&1048576)!==0&&Gu(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=cn(t.elementType),t.type=e,typeof e=="function")bo(e)?(n=fn(e,n),t.tag=1,t=ad(null,t,e,n,a)):(t.tag=0,t=or(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===oe){t.tag=11,t=Kh(null,t,e,n,a);break e}else if(i===P){t.tag=14,t=Jh(null,t,e,n,a);break e}}throw t=je(e)||e,Error(r(306,t,""))}}return t;case 0:return or(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=fn(n,t.pendingProps),ad(e,t,n,i,a);case 3:e:{if(Je(t,t.stateNode.containerInfo),e===null)throw Error(r(387));n=t.pendingProps;var l=t.memoizedState;i=l.element,zo(e,t),ki(t,n,null,a);var u=t.memoizedState;if(n=u.cache,Ra(t,Ye,n),n!==l.cache&&Oo(t,[Ye],a,!0),Mi(),n=u.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=nd(e,t,n,a);break e}else if(n!==i){i=Rt(Error(r(424)),t),wi(i),t=nd(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ze=zt(e.firstChild),tt=t,me=!0,Na=null,Dt=!0,a=Wu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ln(),n===i){t=oa(e,t,a);break e}nt(e,t,n,a)}t=t.child}return t;case 26:return Jl(e,t),e===null?(a=bf(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,n=fs(re.current).createElement(a),n[et]=t,n[ot]=e,it(n,a,e),Pe(n),t.stateNode=n):t.memoizedState=bf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yt(t),e===null&&me&&(n=t.stateNode=mf(t.type,t.pendingProps,re.current),tt=t,Dt=!0,i=ze,qa(t.type)?(Zr=i,ze=zt(n.firstChild)):ze=i),nt(e,t,t.pendingProps.children,a),Jl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((i=n=ze)&&(n=ly(n,t.type,t.pendingProps,Dt),n!==null?(t.stateNode=n,tt=t,ze=zt(n.firstChild),Dt=!1,i=!0):i=!1),i||Oa(t)),Yt(t),i=t.type,l=t.pendingProps,u=e!==null?e.memoizedProps:null,n=l.children,qr(i,l)?n=null:u!==null&&qr(i,u)&&(t.flags|=32),t.memoizedState!==null&&(i=Bo(e,t,xm,null,null,a),Pi._currentValue=i),Jl(e,t),nt(e,t,n,a),t.child;case 6:return e===null&&me&&((e=a=ze)&&(a=sy(a,t.pendingProps,Dt),a!==null?(t.stateNode=a,tt=t,ze=null,e=!0):e=!1),e||Oa(t)),null;case 13:return id(e,t,a);case 4:return Je(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=hn(t,null,n,a):nt(e,t,n,a),t.child;case 11:return Kh(e,t,t.type,t.pendingProps,a);case 7:return nt(e,t,t.pendingProps,a),t.child;case 8:return nt(e,t,t.pendingProps.children,a),t.child;case 12:return nt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ra(t,t.type,n.value),nt(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,on(t),i=at(i),n=n(i),t.flags|=1,nt(e,t,n,a),t.child;case 14:return Jh(e,t,t.type,t.pendingProps,a);case 15:return Ph(e,t,t.type,t.pendingProps,a);case 19:return sd(e,t,a);case 31:return Om(e,t,a);case 22:return Wh(e,t,a,t.pendingProps);case 24:return on(t),n=at(Ye),e===null?(i=ko(),i===null&&(i=Me,l=Ro(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),t.memoizedState={parent:n,cache:i},jo(t),Ra(t,Ye,i)):((e.lanes&a)!==0&&(zo(e,t),ki(t,null,null,a),Mi()),i=e.memoizedState,l=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ra(t,Ye,n)):(n=l.cache,Ra(t,Ye,n),n!==i.cache&&Oo(t,[Ye],a,!0))),nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function ra(e){e.flags|=4}function pr(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(zd())e.flags|=8192;else throw un=_l,Do}else e.flags&=-16777217}function rd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wf(t))if(zd())e.flags|=8192;else throw un=_l,Do}function Wl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bc():536870912,e.lanes|=t,Zn|=t)}function Ui(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Mm(e,t,a){var n=t.pendingProps;switch(To(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(Ye),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zn(t)?ra(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ao())),_e(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(ra(t),l!==null?(_e(t),rd(t,l)):(_e(t),pr(t,i,null,n,a))):l?l!==e.memoizedState?(ra(t),_e(t),rd(t,l)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ra(t),_e(t),pr(t,i,e,n,a)),null;case 27:if(Ea(t),a=re.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return _e(t),null}e=Q.current,zn(t)?Bu(t):(e=mf(i,n,a),t.stateNode=e,ra(t))}return _e(t),null;case 5:if(Ea(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return _e(t),null}if(l=Q.current,zn(t))Bu(t);else{var u=fs(re.current);switch(l){case 1:l=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=u.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?u.createElement("select",{is:n.is}):u.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?u.createElement(i,{is:n.is}):u.createElement(i)}}l[et]=t,l[ot]=n;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)l.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=l;e:switch(it(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ra(t)}}return _e(t),pr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(r(166));if(e=re.current,zn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=tt,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[et]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||lf(e.nodeValue,a)),e||Oa(t,!0)}else e=fs(e).createTextNode(n),e[et]=t,t.stateNode=e}return _e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=zn(t),a!==null){if(e===null){if(!n)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[et]=t}else ln(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else a=Ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(r(558))}return _e(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(r(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));i[et]=t}else ln(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else i=Ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Wl(t,t.updateQueue),_e(t),null);case 4:return De(),e===null&&Ur(t.stateNode.containerInfo),_e(t),null;case 10:return ia(t.type),_e(t),null;case 19:if(z(Be),n=t.memoizedState,n===null)return _e(t),null;if(i=(t.flags&128)!==0,l=n.rendering,l===null)if(i)Ui(n,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Gl(e),l!==null){for(t.flags|=128,Ui(n,!1),e=l.updateQueue,t.updateQueue=e,Wl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Lu(a,e),a=a.sibling;return B(Be,Be.current&1|2),me&&aa(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&pt()>ns&&(t.flags|=128,i=!0,Ui(n,!1),t.lanes=4194304)}else{if(!i)if(e=Gl(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Wl(t,e),Ui(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!me)return _e(t),null}else 2*pt()-n.renderingStartTime>ns&&a!==536870912&&(t.flags|=128,i=!0,Ui(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(e=n.last,e!==null?e.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=pt(),e.sibling=null,a=Be.current,B(Be,i?a&1|2:a&1),me&&aa(t,n.treeForkCount),e):(_e(t),null);case 22:case 23:return Et(t),Ho(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&Wl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&z(rn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ia(Ye),_e(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function km(e,t){switch(To(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(Ye),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ea(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(r(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(Be),null;case 4:return De(),null;case 10:return ia(t.type),null;case 22:case 23:return Et(t),Ho(),e!==null&&z(rn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(Ye),null;case 25:return null;default:return null}}function cd(e,t){switch(To(t),t.tag){case 3:ia(Ye),De();break;case 26:case 27:case 5:Ea(t);break;case 4:De();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:z(Be);break;case 10:ia(t.type);break;case 22:case 23:Et(t),Ho(),e!==null&&z(rn);break;case 24:ia(Ye)}}function Hi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var l=a.create,u=a.inst;n=l(),u.destroy=n}a=a.next}while(a!==i)}}catch(f){Ae(t,t.return,f)}}function _a(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var u=n.inst,f=u.destroy;if(f!==void 0){u.destroy=void 0,i=t;var b=a,C=f;try{C()}catch(D){Ae(i,b,D)}}}n=n.next}while(n!==l)}}catch(D){Ae(t,t.return,D)}}function ud(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{eh(t,a)}catch(n){Ae(e,e.return,n)}}}function hd(e,t,a){a.props=fn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ae(e,t,n)}}function Gi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Ae(e,t,i)}}function Xt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ae(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ae(e,t,i)}else a.current=null}function dd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ae(e,e.return,i)}}function mr(e,t,a){try{var n=e.stateNode;$m(n,e.type,a,t),n[ot]=t}catch(i){Ae(e,e.return,i)}}function fd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function yr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=$t));else if(n!==4&&(n===27&&qa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vr(e,t,a),e=e.sibling;e!==null;)vr(e,t,a),e=e.sibling}function $l(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($l(e,t,a),e=e.sibling;e!==null;)$l(e,t,a),e=e.sibling}function gd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);it(t,n,a),t[et]=e,t[ot]=a}catch(l){Ae(e,e.return,l)}}var ca=!1,Xe=!1,br=!1,pd=typeof WeakSet=="function"?WeakSet:Set,We=null;function Dm(e,t){if(e=e.containerInfo,Ir=xs,e=Nu(e),ho(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var u=0,f=-1,b=-1,C=0,D=0,_=e,N=null;t:for(;;){for(var O;_!==a||i!==0&&_.nodeType!==3||(f=u+i),_!==l||n!==0&&_.nodeType!==3||(b=u+n),_.nodeType===3&&(u+=_.nodeValue.length),(O=_.firstChild)!==null;)N=_,_=O;for(;;){if(_===e)break t;if(N===a&&++C===i&&(f=u),N===l&&++D===n&&(b=u),(O=_.nextSibling)!==null)break;_=N,N=_.parentNode}_=O}a=f===-1||b===-1?null:{start:f,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Br={focusedElem:e,selectionRange:a},xs=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,i=l.memoizedProps,l=l.memoizedState,n=a.stateNode;try{var Z=fn(a.type,i);e=n.getSnapshotBeforeUpdate(Z,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ae(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function md(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),n&4&&Hi(5,a);break;case 1:if(ha(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){Ae(a,a.return,u)}else{var i=fn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Ae(a,a.return,u)}}n&64&&ud(a),n&512&&Gi(a,a.return);break;case 3:if(ha(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{eh(e,t)}catch(u){Ae(a,a.return,u)}}break;case 27:t===null&&n&4&&gd(a);case 26:case 5:ha(e,a),t===null&&n&4&&dd(a),n&512&&Gi(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),n&4&&bd(e,a);break;case 13:ha(e,a),n&4&&xd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bm.bind(null,a),oy(e,a))));break;case 22:if(n=a.memoizedState!==null||ca,!n){t=t!==null&&t.memoizedState!==null||Xe,i=ca;var l=Xe;ca=n,(Xe=t)&&!l?da(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),ca=i,Xe=l}break;case 30:break;default:ha(e,a)}}function yd(e){var t=e.alternate;t!==null&&(e.alternate=null,yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,ct=!1;function ua(e,t,a){for(a=a.child;a!==null;)vd(e,t,a),a=a.sibling}function vd(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ci,a)}catch{}switch(a.tag){case 26:Xe||Xt(a,t),ua(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Xt(a,t);var n=Le,i=ct;qa(a.type)&&(Le=a.stateNode,ct=!1),ua(e,t,a),Fi(a.stateNode),Le=n,ct=i;break;case 5:Xe||Xt(a,t);case 6:if(n=Le,i=ct,Le=null,ua(e,t,a),Le=n,ct=i,Le!==null)if(ct)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(a.stateNode)}catch(l){Ae(a,t,l)}else try{Le.removeChild(a.stateNode)}catch(l){Ae(a,t,l)}break;case 18:Le!==null&&(ct?(e=Le,hf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ti(e)):hf(Le,a.stateNode));break;case 4:n=Le,i=ct,Le=a.stateNode.containerInfo,ct=!0,ua(e,t,a),Le=n,ct=i;break;case 0:case 11:case 14:case 15:_a(2,a,t),Xe||_a(4,a,t),ua(e,t,a);break;case 1:Xe||(Xt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&hd(a,t,n)),ua(e,t,a);break;case 21:ua(e,t,a);break;case 22:Xe=(n=Xe)||a.memoizedState!==null,ua(e,t,a),Xe=n;break;default:ua(e,t,a)}}function bd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ti(e)}catch(a){Ae(t,t.return,a)}}}function xd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ti(e)}catch(a){Ae(t,t.return,a)}}function jm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pd),t;default:throw Error(r(435,e.tag))}}function es(e,t){var a=jm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=qm.bind(null,e,n);n.then(i,i)}})}function ut(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],l=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 27:if(qa(f.type)){Le=f.stateNode,ct=!1;break e}break;case 5:Le=f.stateNode,ct=!1;break e;case 3:case 4:Le=f.stateNode.containerInfo,ct=!0;break e}f=f.return}if(Le===null)throw Error(r(160));vd(l,u,i),Le=null,ct=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ed(t,e),t=t.sibling}var Gt=null;function Ed(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),ht(e),n&4&&(_a(3,e,e.return),Hi(3,e),_a(5,e,e.return));break;case 1:ut(t,e),ht(e),n&512&&(Xe||a===null||Xt(a,a.return)),n&64&&ca&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Gt;if(ut(t,e),ht(e),n&512&&(Xe||a===null||Xt(a,a.return)),n&4){var l=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[di]||l[et]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),it(l,n,a),l[et]=e,Pe(l),n=l;break e;case"link":var u=Sf("link","href",i).get(n+(a.href||""));if(u){for(var f=0;f<u.length;f++)if(l=u[f],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(f,1);break t}}l=i.createElement(n),it(l,n,a),i.head.appendChild(l);break;case"meta":if(u=Sf("meta","content",i).get(n+(a.content||""))){for(f=0;f<u.length;f++)if(l=u[f],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(f,1);break t}}l=i.createElement(n),it(l,n,a),i.head.appendChild(l);break;default:throw Error(r(468,n))}l[et]=e,Pe(l),n=l}e.stateNode=n}else Tf(i,e.type,e.stateNode);else e.stateNode=Ef(i,n,e.memoizedProps);else l!==n?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,n===null?Tf(i,e.type,e.stateNode):Ef(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&mr(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),ht(e),n&512&&(Xe||a===null||Xt(a,a.return)),a!==null&&n&4&&mr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),ht(e),n&512&&(Xe||a===null||Xt(a,a.return)),e.flags&32){i=e.stateNode;try{wn(i,"")}catch(Z){Ae(e,e.return,Z)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,mr(e,i,a!==null?a.memoizedProps:i)),n&1024&&(br=!0);break;case 6:if(ut(t,e),ht(e),n&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(Z){Ae(e,e.return,Z)}}break;case 3:if(ms=null,i=Gt,Gt=gs(t.containerInfo),ut(t,e),Gt=i,ht(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(Z){Ae(e,e.return,Z)}br&&(br=!1,Sd(e));break;case 4:n=Gt,Gt=gs(e.stateNode.containerInfo),ut(t,e),ht(e),Gt=n;break;case 12:ut(t,e),ht(e);break;case 31:ut(t,e),ht(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,es(e,n)));break;case 13:ut(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(as=pt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,es(e,n)));break;case 22:i=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,C=ca,D=Xe;if(ca=C||i,Xe=D||b,ut(t,e),Xe=D,ca=C,ht(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||b||ca||Xe||gn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){b=a=t;try{if(l=b.stateNode,i)u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=b.stateNode;var _=b.memoizedProps.style,N=_!=null&&_.hasOwnProperty("display")?_.display:null;f.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(Z){Ae(b,b.return,Z)}}}else if(t.tag===6){if(a===null){b=t;try{b.stateNode.nodeValue=i?"":b.memoizedProps}catch(Z){Ae(b,b.return,Z)}}}else if(t.tag===18){if(a===null){b=t;try{var O=b.stateNode;i?df(O,!0):df(b.stateNode,!1)}catch(Z){Ae(b,b.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,es(e,a))));break;case 19:ut(t,e),ht(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,es(e,n)));break;case 30:break;case 21:break;default:ut(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(fd(n)){a=n;break}n=n.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var i=a.stateNode,l=yr(e);$l(e,l,i);break;case 5:var u=a.stateNode;a.flags&32&&(wn(u,""),a.flags&=-33);var f=yr(e);$l(e,f,u);break;case 3:case 4:var b=a.stateNode.containerInfo,C=yr(e);vr(e,C,b);break;default:throw Error(r(161))}}catch(D){Ae(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ha(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)md(e,t.alternate,t),t=t.sibling}function gn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_a(4,t,t.return),gn(t);break;case 1:Xt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&hd(t,t.return,a),gn(t);break;case 27:Fi(t.stateNode);case 26:case 5:Xt(t,t.return),gn(t);break;case 22:t.memoizedState===null&&gn(t);break;case 30:gn(t);break;default:gn(t)}e=e.sibling}}function da(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,l=t,u=l.flags;switch(l.tag){case 0:case 11:case 15:da(i,l,a),Hi(4,l);break;case 1:if(da(i,l,a),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){Ae(n,n.return,C)}if(n=l,i=n.updateQueue,i!==null){var f=n.stateNode;try{var b=i.shared.hiddenCallbacks;if(b!==null)for(i.shared.hiddenCallbacks=null,i=0;i<b.length;i++)$u(b[i],f)}catch(C){Ae(n,n.return,C)}}a&&u&64&&ud(l),Gi(l,l.return);break;case 27:gd(l);case 26:case 5:da(i,l,a),a&&n===null&&u&4&&dd(l),Gi(l,l.return);break;case 12:da(i,l,a);break;case 31:da(i,l,a),a&&u&4&&bd(i,l);break;case 13:da(i,l,a),a&&u&4&&xd(i,l);break;case 22:l.memoizedState===null&&da(i,l,a),Gi(l,l.return);break;case 30:break;default:da(i,l,a)}t=t.sibling}}function xr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ai(a))}function Er(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ai(e))}function It(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Td(e,t,a,n),t=t.sibling}function Td(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,a,n),i&2048&&Hi(9,t);break;case 1:It(e,t,a,n);break;case 3:It(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ai(e)));break;case 12:if(i&2048){It(e,t,a,n),e=t.stateNode;try{var l=t.memoizedProps,u=l.id,f=l.onPostCommit;typeof f=="function"&&f(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Ae(t,t.return,b)}}else It(e,t,a,n);break;case 31:It(e,t,a,n);break;case 13:It(e,t,a,n);break;case 23:break;case 22:l=t.stateNode,u=t.alternate,t.memoizedState!==null?l._visibility&2?It(e,t,a,n):Ii(e,t):l._visibility&2?It(e,t,a,n):(l._visibility|=2,Vn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&xr(u,t);break;case 24:It(e,t,a,n),i&2048&&Er(t.alternate,t);break;default:It(e,t,a,n)}}function Vn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,u=t,f=a,b=n,C=u.flags;switch(u.tag){case 0:case 11:case 15:Vn(l,u,f,b,i),Hi(8,u);break;case 23:break;case 22:var D=u.stateNode;u.memoizedState!==null?D._visibility&2?Vn(l,u,f,b,i):Ii(l,u):(D._visibility|=2,Vn(l,u,f,b,i)),i&&C&2048&&xr(u.alternate,u);break;case 24:Vn(l,u,f,b,i),i&&C&2048&&Er(u.alternate,u);break;default:Vn(l,u,f,b,i)}t=t.sibling}}function Ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Ii(a,n),i&2048&&xr(n.alternate,n);break;case 24:Ii(a,n),i&2048&&Er(n.alternate,n);break;default:Ii(a,n)}t=t.sibling}}var Bi=8192;function Qn(e,t,a){if(e.subtreeFlags&Bi)for(e=e.child;e!==null;)wd(e,t,a),e=e.sibling}function wd(e,t,a){switch(e.tag){case 26:Qn(e,t,a),e.flags&Bi&&e.memoizedState!==null&&by(a,Gt,e.memoizedState,e.memoizedProps);break;case 5:Qn(e,t,a);break;case 3:case 4:var n=Gt;Gt=gs(e.stateNode.containerInfo),Qn(e,t,a),Gt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Bi,Bi=16777216,Qn(e,t,a),Bi=n):Qn(e,t,a));break;default:Qn(e,t,a)}}function Ad(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];We=n,Nd(n,e)}Ad(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cd(e),e=e.sibling}function Cd(e){switch(e.tag){case 0:case 11:case 15:qi(e),e.flags&2048&&_a(9,e,e.return);break;case 3:qi(e);break;case 12:qi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ts(e)):qi(e);break;default:qi(e)}}function ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];We=n,Nd(n,e)}Ad(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_a(8,t,t.return),ts(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ts(t));break;default:ts(t)}e=e.sibling}}function Nd(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:_a(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ai(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,We=n;else e:for(a=e;We!==null;){n=We;var i=n.sibling,l=n.return;if(yd(n),n===a){We=null;break e}if(i!==null){i.return=l,We=i;break e}We=l}}}var zm={getCacheForType:function(e){var t=at(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return at(Ye).controller.signal}},_m=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Me=null,ue=null,fe=0,we=0,St=null,La=!1,Xn=!1,Sr=!1,fa=0,Ie=0,Ua=0,pn=0,Tr=0,Tt=0,Zn=0,Yi=null,dt=null,wr=!1,as=0,Od=0,ns=1/0,is=null,Ha=null,Ze=0,Ga=null,Fn=null,ga=0,Ar=0,Cr=null,Rd=null,Vi=0,Nr=null;function wt(){return(Ee&2)!==0&&fe!==0?fe&-fe:M.T!==null?jr():Qc()}function Md(){if(Tt===0)if((fe&536870912)===0||me){var e=dl;dl<<=1,(dl&3932160)===0&&(dl=262144),Tt=e}else Tt=536870912;return e=xt.current,e!==null&&(e.flags|=32),Tt}function ft(e,t,a){(e===Me&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(Kn(e,0),Ia(e,fe,Tt,!1)),hi(e,a),((Ee&2)===0||e!==Me)&&(e===Me&&((Ee&2)===0&&(pn|=a),Ie===4&&Ia(e,fe,Tt,!1)),Zt(e))}function kd(e,t,a){if((Ee&6)!==0)throw Error(r(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ui(e,t),i=n?Hm(e,t):Rr(e,t,!0),l=n;do{if(i===0){Xn&&!n&&Ia(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!Lm(a)){i=Rr(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var f=e;i=Yi;var b=f.current.memoizedState.isDehydrated;if(b&&(Kn(f,u).flags|=256),u=Rr(f,u,!1),u!==2){if(Sr&&!b){f.errorRecoveryDisabledLanes|=l,pn|=l,i=4;break e}l=dt,dt=i,l!==null&&(dt===null?dt=l:dt.push.apply(dt,l))}i=u}if(l=!1,i!==2)continue}}if(i===1){Kn(e,0),Ia(e,t,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Ia(n,t,Tt,!La);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(i=as+300-pt(),10<i)){if(Ia(n,t,Tt,!La),gl(n,0,!0)!==0)break e;ga=t,n.timeoutHandle=cf(Dd.bind(null,n,a,dt,is,wr,t,Tt,pn,Zn,La,l,"Throttled",-0,0),i);break e}Dd(n,a,dt,is,wr,t,Tt,pn,Zn,La,l,null,-0,0)}}break}while(!0);Zt(e)}function Dd(e,t,a,n,i,l,u,f,b,C,D,_,N,O){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},wd(t,l,_);var Z=(l&62914560)===l?as-pt():(l&4194048)===l?Od-pt():0;if(Z=xy(_,Z),Z!==null){ga=l,e.cancelPendingCommit=Z(Id.bind(null,e,t,l,a,n,i,u,f,b,D,_,null,N,O)),Ia(e,l,u,!C);return}}Id(e,t,l,a,n,i,u,f,b)}function Lm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],l=i.getSnapshot;i=i.value;try{if(!vt(l(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ia(e,t,a,n){t&=~Tr,t&=~pn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var l=31-yt(i),u=1<<l;n[l]=-1,i&=~u}a!==0&&qc(e,a,t)}function ls(){return(Ee&6)===0?(Qi(0),!1):!0}function Or(){if(ue!==null){if(we===0)var e=ue.return;else e=ue,na=sn=null,Vo(e),Gn=null,Ni=0,e=ue;for(;e!==null;)cd(e.alternate,e),e=e.return;ue=null}}function Kn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ay(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,Or(),Me=e,ue=a=ta(e.current,null),fe=t,we=0,St=null,La=!1,Xn=ui(e,t),Sr=!1,Zn=Tt=Tr=pn=Ua=Ie=0,dt=Yi=null,wr=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-yt(n),l=1<<i;t|=e[i],n&=~l}return fa=t,Cl(),a}function jd(e,t){le=null,M.H=_i,t===Hn||t===zl?(t=Ku(),we=3):t===Do?(t=Ku(),we=4):we=t===sr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,St=t,ue===null&&(Ie=1,Fl(e,Rt(t,e.current)))}function zd(){var e=xt.current;return e===null?!0:(fe&4194048)===fe?jt===null:(fe&62914560)===fe||(fe&536870912)!==0?e===jt:!1}function _d(){var e=M.H;return M.H=_i,e===null?_i:e}function Ld(){var e=M.A;return M.A=zm,e}function ss(){Ie=4,La||(fe&4194048)!==fe&&xt.current!==null||(Xn=!0),(Ua&134217727)===0&&(pn&134217727)===0||Me===null||Ia(Me,fe,Tt,!1)}function Rr(e,t,a){var n=Ee;Ee|=2;var i=_d(),l=Ld();(Me!==e||fe!==t)&&(is=null,Kn(e,t)),t=!1;var u=Ie;e:do try{if(we!==0&&ue!==null){var f=ue,b=St;switch(we){case 8:Or(),u=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var C=we;if(we=0,St=null,Jn(e,f,b,C),a&&Xn){u=0;break e}break;default:C=we,we=0,St=null,Jn(e,f,b,C)}}Um(),u=Ie;break}catch(D){jd(e,D)}while(!0);return t&&e.shellSuspendCounter++,na=sn=null,Ee=n,M.H=i,M.A=l,ue===null&&(Me=null,fe=0,Cl()),u}function Um(){for(;ue!==null;)Ud(ue)}function Hm(e,t){var a=Ee;Ee|=2;var n=_d(),i=Ld();Me!==e||fe!==t?(is=null,ns=pt()+500,Kn(e,t)):Xn=ui(e,t);e:do try{if(we!==0&&ue!==null){t=ue;var l=St;t:switch(we){case 1:we=0,St=null,Jn(e,t,l,1);break;case 2:case 9:if(Zu(l)){we=0,St=null,Hd(t);break}t=function(){we!==2&&we!==9||Me!==e||(we=7),Zt(e)},l.then(t,t);break e;case 3:we=7;break e;case 4:we=5;break e;case 7:Zu(l)?(we=0,St=null,Hd(t)):(we=0,St=null,Jn(e,t,l,7));break;case 5:var u=null;switch(ue.tag){case 26:u=ue.memoizedState;case 5:case 27:var f=ue;if(u?wf(u):f.stateNode.complete){we=0,St=null;var b=f.sibling;if(b!==null)ue=b;else{var C=f.return;C!==null?(ue=C,os(C)):ue=null}break t}}we=0,St=null,Jn(e,t,l,5);break;case 6:we=0,St=null,Jn(e,t,l,6);break;case 8:Or(),Ie=6;break e;default:throw Error(r(462))}}Gm();break}catch(D){jd(e,D)}while(!0);return na=sn=null,M.H=n,M.A=i,Ee=a,ue!==null?0:(Me=null,fe=0,Cl(),Ie)}function Gm(){for(;ue!==null&&!rp();)Ud(ue)}function Ud(e){var t=od(e.alternate,e,fa);e.memoizedProps=e.pendingProps,t===null?os(e):ue=t}function Hd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=td(a,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=td(a,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:Vo(t);default:cd(a,t),t=ue=Lu(t,fa),t=od(a,t,fa)}e.memoizedProps=e.pendingProps,t===null?os(e):ue=t}function Jn(e,t,a,n){na=sn=null,Vo(t),Gn=null,Ni=0;var i=t.return;try{if(Nm(e,i,t,a,fe)){Ie=1,Fl(e,Rt(a,e.current)),ue=null;return}}catch(l){if(i!==null)throw ue=i,l;Ie=1,Fl(e,Rt(a,e.current)),ue=null;return}t.flags&32768?(me||n===1?e=!0:Xn||(fe&536870912)!==0?e=!1:(La=e=!0,(n===2||n===9||n===3||n===6)&&(n=xt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Gd(t,e)):os(t)}function os(e){var t=e;do{if((t.flags&32768)!==0){Gd(t,La);return}e=t.return;var a=Mm(t.alternate,t,fa);if(a!==null){ue=a;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Ie===0&&(Ie=5)}function Gd(e,t){do{var a=km(e.alternate,e);if(a!==null){a.flags&=32767,ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=a}while(e!==null);Ie=6,ue=null}function Id(e,t,a,n,i,l,u,f,b){e.cancelPendingCommit=null;do rs();while(Ze!==0);if((Ee&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(l=t.lanes|t.childLanes,l|=yo,vp(e,a,l,u,f,b),e===Me&&(ue=Me=null,fe=0),Fn=t,Ga=e,ga=a,Ar=l,Cr=i,Rd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ym(ul,function(){return Qd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null,i=q.p,q.p=2,u=Ee,Ee|=4;try{Dm(e,t,a)}finally{Ee=u,q.p=i,M.T=n}}Ze=1,Bd(),qd(),Yd()}}function Bd(){if(Ze===1){Ze=0;var e=Ga,t=Fn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var n=q.p;q.p=2;var i=Ee;Ee|=4;try{Ed(t,e);var l=Br,u=Nu(e.containerInfo),f=l.focusedElem,b=l.selectionRange;if(u!==f&&f&&f.ownerDocument&&Cu(f.ownerDocument.documentElement,f)){if(b!==null&&ho(f)){var C=b.start,D=b.end;if(D===void 0&&(D=C),"selectionStart"in f)f.selectionStart=C,f.selectionEnd=Math.min(D,f.value.length);else{var _=f.ownerDocument||document,N=_&&_.defaultView||window;if(N.getSelection){var O=N.getSelection(),Z=f.textContent.length,ee=Math.min(b.start,Z),Re=b.end===void 0?ee:Math.min(b.end,Z);!O.extend&&ee>Re&&(u=Re,Re=ee,ee=u);var w=Au(f,ee),x=Au(f,Re);if(w&&x&&(O.rangeCount!==1||O.anchorNode!==w.node||O.anchorOffset!==w.offset||O.focusNode!==x.node||O.focusOffset!==x.offset)){var A=_.createRange();A.setStart(w.node,w.offset),O.removeAllRanges(),ee>Re?(O.addRange(A),O.extend(x.node,x.offset)):(A.setEnd(x.node,x.offset),O.addRange(A))}}}}for(_=[],O=f;O=O.parentNode;)O.nodeType===1&&_.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<_.length;f++){var j=_[f];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}xs=!!Ir,Br=Ir=null}finally{Ee=i,q.p=n,M.T=a}}e.current=t,Ze=2}}function qd(){if(Ze===2){Ze=0;var e=Ga,t=Fn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var n=q.p;q.p=2;var i=Ee;Ee|=4;try{md(e,t.alternate,t)}finally{Ee=i,q.p=n,M.T=a}}Ze=3}}function Yd(){if(Ze===4||Ze===3){Ze=0,cp();var e=Ga,t=Fn,a=ga,n=Rd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Fn=Ga=null,Vd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ha=null),Xs(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ci,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=M.T,i=q.p,q.p=2,M.T=null;try{for(var l=e.onRecoverableError,u=0;u<n.length;u++){var f=n[u];l(f.value,{componentStack:f.stack})}}finally{M.T=t,q.p=i}}(ga&3)!==0&&rs(),Zt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Nr?Vi++:(Vi=0,Nr=e):Vi=0,Qi(0)}}function Vd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ai(t)))}function rs(){return Bd(),qd(),Yd(),Qd()}function Qd(){if(Ze!==5)return!1;var e=Ga,t=Ar;Ar=0;var a=Xs(ga),n=M.T,i=q.p;try{q.p=32>a?32:a,M.T=null,a=Cr,Cr=null;var l=Ga,u=ga;if(Ze=0,Fn=Ga=null,ga=0,(Ee&6)!==0)throw Error(r(331));var f=Ee;if(Ee|=4,Cd(l.current),Td(l,l.current,u,a),Ee=f,Qi(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ci,l)}catch{}return!0}finally{q.p=i,M.T=n,Vd(e,t)}}function Xd(e,t,a){t=Rt(a,t),t=lr(e.stateNode,t,2),e=Da(e,t,2),e!==null&&(hi(e,2),Zt(e))}function Ae(e,t,a){if(e.tag===3)Xd(e,e,a);else for(;t!==null;){if(t.tag===3){Xd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ha===null||!Ha.has(n))){e=Rt(a,e),a=Zh(2),n=Da(t,a,2),n!==null&&(Fh(a,n,t,e),hi(n,2),Zt(n));break}}t=t.return}}function Mr(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new _m;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Sr=!0,i.add(a),e=Im.bind(null,e,t,a),t.then(e,e))}function Im(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Me===e&&(fe&a)===a&&(Ie===4||Ie===3&&(fe&62914560)===fe&&300>pt()-as?(Ee&2)===0&&Kn(e,0):Tr|=a,Zn===fe&&(Zn=0)),Zt(e)}function Zd(e,t){t===0&&(t=Bc()),e=an(e,t),e!==null&&(hi(e,t),Zt(e))}function Bm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Zd(e,a)}function qm(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(t),Zd(e,a)}function Ym(e,t){return qs(e,t)}var cs=null,Pn=null,kr=!1,us=!1,Dr=!1,Ba=0;function Zt(e){e!==Pn&&e.next===null&&(Pn===null?cs=Pn=e:Pn=Pn.next=e),us=!0,kr||(kr=!0,Qm())}function Qi(e,t){if(!Dr&&us){Dr=!0;do for(var a=!1,n=cs;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var u=n.suspendedLanes,f=n.pingedLanes;l=(1<<31-yt(42|e)+1)-1,l&=i&~(u&~f),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,Pd(n,l))}else l=fe,l=gl(n,n===Me?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||ui(n,l)||(a=!0,Pd(n,l));n=n.next}while(a);Dr=!1}}function Vm(){Fd()}function Fd(){us=kr=!1;var e=0;Ba!==0&&ty()&&(e=Ba);for(var t=pt(),a=null,n=cs;n!==null;){var i=n.next,l=Kd(n,t);l===0?(n.next=null,a===null?cs=i:a.next=i,i===null&&(Pn=a)):(a=n,(e!==0||(l&3)!==0)&&(us=!0)),n=i}Ze!==0&&Ze!==5||Qi(e),Ba!==0&&(Ba=0)}function Kd(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var u=31-yt(l),f=1<<u,b=i[u];b===-1?((f&a)===0||(f&n)!==0)&&(i[u]=yp(f,t)):b<=t&&(e.expiredLanes|=f),l&=~f}if(t=Me,a=fe,a=gl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(we===2||we===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ys(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ui(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ys(n),Xs(a)){case 2:case 8:a=Gc;break;case 32:a=ul;break;case 268435456:a=Ic;break;default:a=ul}return n=Jd.bind(null,e),a=qs(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ys(n),e.callbackPriority=2,e.callbackNode=null,2}function Jd(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(rs()&&e.callbackNode!==a)return null;var n=fe;return n=gl(e,e===Me?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(kd(e,n,t),Kd(e,pt()),e.callbackNode!=null&&e.callbackNode===a?Jd.bind(null,e):null)}function Pd(e,t){if(rs())return null;kd(e,t,!0)}function Qm(){ny(function(){(Ee&6)!==0?qs(Hc,Vm):Fd()})}function jr(){if(Ba===0){var e=Ln;e===0&&(e=hl,hl<<=1,(hl&261888)===0&&(hl=256)),Ba=e}return Ba}function Wd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vl(""+e)}function $d(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Xm(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var l=Wd((i[ot]||null).action),u=n.submitter;u&&(t=(t=u[ot]||null)?Wd(t.formAction):u.getAttribute("formAction"),t!==null&&(l=t,u=null));var f=new Sl("action","action",null,n,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ba!==0){var b=u?$d(i,u):new FormData(i);$o(a,{pending:!0,data:b,method:i.method,action:l},null,b)}}else typeof l=="function"&&(f.preventDefault(),b=u?$d(i,u):new FormData(i),$o(a,{pending:!0,data:b,method:i.method,action:l},l,b))},currentTarget:i}]})}}for(var zr=0;zr<mo.length;zr++){var _r=mo[zr],Zm=_r.toLowerCase(),Fm=_r[0].toUpperCase()+_r.slice(1);Ht(Zm,"on"+Fm)}Ht(Mu,"onAnimationEnd"),Ht(ku,"onAnimationIteration"),Ht(Du,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(um,"onTransitionRun"),Ht(hm,"onTransitionStart"),Ht(dm,"onTransitionCancel"),Ht(ju,"onTransitionEnd"),Sn("onMouseEnter",["mouseout","mouseover"]),Sn("onMouseLeave",["mouseout","mouseover"]),Sn("onPointerEnter",["pointerout","pointerover"]),Sn("onPointerLeave",["pointerout","pointerover"]),Wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function ef(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var u=n.length-1;0<=u;u--){var f=n[u],b=f.instance,C=f.currentTarget;if(f=f.listener,b!==l&&i.isPropagationStopped())break e;l=f,i.currentTarget=C;try{l(i)}catch(D){Al(D)}i.currentTarget=null,l=b}else for(u=0;u<n.length;u++){if(f=n[u],b=f.instance,C=f.currentTarget,f=f.listener,b!==l&&i.isPropagationStopped())break e;l=f,i.currentTarget=C;try{l(i)}catch(D){Al(D)}i.currentTarget=null,l=b}}}}function he(e,t){var a=t[Zs];a===void 0&&(a=t[Zs]=new Set);var n=e+"__bubble";a.has(n)||(tf(t,e,2,!1),a.add(n))}function Lr(e,t,a){var n=0;t&&(n|=4),tf(a,e,n,t)}var hs="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[hs]){e[hs]=!0,Fc.forEach(function(a){a!=="selectionchange"&&(Km.has(a)||Lr(a,!1,e),Lr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hs]||(t[hs]=!0,Lr("selectionchange",!1,t))}}function tf(e,t,a,n){switch(kf(t)){case 2:var i=Ty;break;case 8:i=wy;break;default:i=Wr}a=i.bind(null,t,a,e),i=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Hr(e,t,a,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var f=n.stateNode.containerInfo;if(f===i)break;if(u===4)for(u=n.return;u!==null;){var b=u.tag;if((b===3||b===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;f!==null;){if(u=bn(f),u===null)return;if(b=u.tag,b===5||b===6||b===26||b===27){n=l=u;continue e}f=f.parentNode}}n=n.return}su(function(){var C=l,D=eo(a),_=[];e:{var N=zu.get(e);if(N!==void 0){var O=Sl,Z=e;switch(e){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":O=qp;break;case"focusin":Z="focus",O=so;break;case"focusout":Z="blur",O=so;break;case"beforeblur":case"afterblur":O=so;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Qp;break;case Mu:case ku:case Du:O=jp;break;case ju:O=Zp;break;case"scroll":case"scrollend":O=Op;break;case"wheel":O=Kp;break;case"copy":case"cut":case"paste":O=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=hu;break;case"toggle":case"beforetoggle":O=Pp}var ee=(t&4)!==0,Re=!ee&&(e==="scroll"||e==="scrollend"),w=ee?N!==null?N+"Capture":null:N;ee=[];for(var x=C,A;x!==null;){var j=x;if(A=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||A===null||w===null||(j=gi(x,w),j!=null&&ee.push(Zi(x,j,A))),Re)break;x=x.return}0<ee.length&&(N=new O(N,Z,null,a,D),_.push({event:N,listeners:ee}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",N&&a!==$s&&(Z=a.relatedTarget||a.fromElement)&&(bn(Z)||Z[vn]))break e;if((O||N)&&(N=D.window===D?D:(N=D.ownerDocument)?N.defaultView||N.parentWindow:window,O?(Z=a.relatedTarget||a.toElement,O=C,Z=Z?bn(Z):null,Z!==null&&(Re=d(Z),ee=Z.tag,Z!==Re||ee!==5&&ee!==27&&ee!==6)&&(Z=null)):(O=null,Z=C),O!==Z)){if(ee=cu,j="onMouseLeave",w="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(ee=hu,j="onPointerLeave",w="onPointerEnter",x="pointer"),Re=O==null?N:fi(O),A=Z==null?N:fi(Z),N=new ee(j,x+"leave",O,a,D),N.target=Re,N.relatedTarget=A,j=null,bn(D)===C&&(ee=new ee(w,x+"enter",Z,a,D),ee.target=A,ee.relatedTarget=Re,j=ee),Re=j,O&&Z)t:{for(ee=Jm,w=O,x=Z,A=0,j=w;j;j=ee(j))A++;j=0;for(var $=x;$;$=ee($))j++;for(;0<A-j;)w=ee(w),A--;for(;0<j-A;)x=ee(x),j--;for(;A--;){if(w===x||x!==null&&w===x.alternate){ee=w;break t}w=ee(w),x=ee(x)}ee=null}else ee=null;O!==null&&af(_,N,O,ee,!1),Z!==null&&Re!==null&&af(_,Re,Z,ee,!0)}}e:{if(N=C?fi(C):window,O=N.nodeName&&N.nodeName.toLowerCase(),O==="select"||O==="input"&&N.type==="file")var ve=bu;else if(yu(N))if(xu)ve=om;else{ve=lm;var W=im}else O=N.nodeName,!O||O.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?C&&Ws(C.elementType)&&(ve=bu):ve=sm;if(ve&&(ve=ve(e,C))){vu(_,ve,a,D);break e}W&&W(e,N,C),e==="focusout"&&C&&N.type==="number"&&C.memoizedProps.value!=null&&Ps(N,"number",N.value)}switch(W=C?fi(C):window,e){case"focusin":(yu(W)||W.contentEditable==="true")&&(On=W,fo=C,Si=null);break;case"focusout":Si=fo=On=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,Ou(_,a,D);break;case"selectionchange":if(cm)break;case"keydown":case"keyup":Ou(_,a,D)}var se;if(ro)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Nn?pu(e,a)&&(ge="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(du&&a.locale!=="ko"&&(Nn||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Nn&&(se=ou()):(Aa=D,no="value"in Aa?Aa.value:Aa.textContent,Nn=!0)),W=ds(C,ge),0<W.length&&(ge=new uu(ge,e,null,a,D),_.push({event:ge,listeners:W}),se?ge.data=se:(se=mu(a),se!==null&&(ge.data=se)))),(se=$p?em(e,a):tm(e,a))&&(ge=ds(C,"onBeforeInput"),0<ge.length&&(W=new uu("onBeforeInput","beforeinput",null,a,D),_.push({event:W,listeners:ge}),W.data=se)),Xm(_,e,C,a,D)}ef(_,t)})}function Zi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ds(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=gi(e,a),i!=null&&n.unshift(Zi(e,i,l)),i=gi(e,t),i!=null&&n.push(Zi(e,i,l))),e.tag===3)return n;e=e.return}return[]}function Jm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function af(e,t,a,n,i){for(var l=t._reactName,u=[];a!==null&&a!==n;){var f=a,b=f.alternate,C=f.stateNode;if(f=f.tag,b!==null&&b===n)break;f!==5&&f!==26&&f!==27||C===null||(b=C,i?(C=gi(a,l),C!=null&&u.unshift(Zi(a,C,b))):i||(C=gi(a,l),C!=null&&u.push(Zi(a,C,b)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Pm=/\r\n?/g,Wm=/\u0000|\uFFFD/g;function nf(e){return(typeof e=="string"?e:""+e).replace(Pm,`
`).replace(Wm,"")}function lf(e,t){return t=nf(t),nf(e)===t}function Oe(e,t,a,n,i,l){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||wn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&wn(e,""+n);break;case"className":ml(e,"class",n);break;case"tabIndex":ml(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ml(e,a,n);break;case"style":iu(e,n,l);break;case"data":if(t!=="object"){ml(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=vl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&Oe(e,t,"name",i.name,i,null),Oe(e,t,"formEncType",i.formEncType,i,null),Oe(e,t,"formMethod",i.formMethod,i,null),Oe(e,t,"formTarget",i.formTarget,i,null)):(Oe(e,t,"encType",i.encType,i,null),Oe(e,t,"method",i.method,i,null),Oe(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=vl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=$t);break;case"onScroll":n!=null&&he("scroll",e);break;case"onScrollEnd":n!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=vl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":he("beforetoggle",e),he("toggle",e),pl(e,"popover",n);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":pl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cp.get(a)||a,pl(e,a,n))}}function Gr(e,t,a,n,i,l){switch(a){case"style":iu(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof n=="string"?wn(e,n):(typeof n=="number"||typeof n=="bigint")&&wn(e,""+n);break;case"onScroll":n!=null&&he("scroll",e);break;case"onScrollEnd":n!=null&&he("scrollend",e);break;case"onClick":n!=null&&(e.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),l=e[ot]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):pl(e,a,n)}}}function it(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var n=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];if(u!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Oe(e,t,l,u,a,null)}}i&&Oe(e,t,"srcSet",a.srcSet,a,null),n&&Oe(e,t,"src",a.src,a,null);return;case"input":he("invalid",e);var f=l=u=i=null,b=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var D=a[n];if(D!=null)switch(n){case"name":i=D;break;case"type":u=D;break;case"checked":b=D;break;case"defaultChecked":C=D;break;case"value":l=D;break;case"defaultValue":f=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,t));break;default:Oe(e,t,n,D,a,null)}}eu(e,l,f,b,C,u,i,!1);return;case"select":he("invalid",e),n=u=l=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":l=f;break;case"defaultValue":u=f;break;case"multiple":n=f;default:Oe(e,t,i,f,a,null)}t=l,a=u,e.multiple=!!n,t!=null?Tn(e,!!n,t,!1):a!=null&&Tn(e,!!n,a,!0);return;case"textarea":he("invalid",e),l=i=n=null;for(u in a)if(a.hasOwnProperty(u)&&(f=a[u],f!=null))switch(u){case"value":n=f;break;case"defaultValue":i=f;break;case"children":l=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:Oe(e,t,u,f,a,null)}au(e,n,i,l);return;case"option":for(b in a)a.hasOwnProperty(b)&&(n=a[b],n!=null)&&(b==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Oe(e,t,b,n,a,null));return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(n=0;n<Xi.length;n++)he(Xi[n],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Oe(e,t,C,n,a,null)}return;default:if(Ws(t)){for(D in a)a.hasOwnProperty(D)&&(n=a[D],n!==void 0&&Gr(e,t,D,n,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!=null&&Oe(e,t,f,n,a,null))}function $m(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,u=null,f=null,b=null,C=null,D=null;for(O in a){var _=a[O];if(a.hasOwnProperty(O)&&_!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":b=_;default:n.hasOwnProperty(O)||Oe(e,t,O,null,n,_)}}for(var N in n){var O=n[N];if(_=a[N],n.hasOwnProperty(N)&&(O!=null||_!=null))switch(N){case"type":l=O;break;case"name":i=O;break;case"checked":C=O;break;case"defaultChecked":D=O;break;case"value":u=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:O!==_&&Oe(e,t,N,O,n,_)}}Js(e,u,f,b,C,D,l,i);return;case"select":O=u=f=N=null;for(l in a)if(b=a[l],a.hasOwnProperty(l)&&b!=null)switch(l){case"value":break;case"multiple":O=b;default:n.hasOwnProperty(l)||Oe(e,t,l,null,n,b)}for(i in n)if(l=n[i],b=a[i],n.hasOwnProperty(i)&&(l!=null||b!=null))switch(i){case"value":N=l;break;case"defaultValue":f=l;break;case"multiple":u=l;default:l!==b&&Oe(e,t,i,l,n,b)}t=f,a=u,n=O,N!=null?Tn(e,!!a,N,!1):!!n!=!!a&&(t!=null?Tn(e,!!a,t,!0):Tn(e,!!a,a?[]:"",!1));return;case"textarea":O=N=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Oe(e,t,f,null,n,i)}for(u in n)if(i=n[u],l=a[u],n.hasOwnProperty(u)&&(i!=null||l!=null))switch(u){case"value":N=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(r(91));break;default:i!==l&&Oe(e,t,u,i,n,l)}tu(e,N,O);return;case"option":for(var Z in a)N=a[Z],a.hasOwnProperty(Z)&&N!=null&&!n.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:Oe(e,t,Z,null,n,N));for(b in n)N=n[b],O=a[b],n.hasOwnProperty(b)&&N!==O&&(N!=null||O!=null)&&(b==="selected"?e.selected=N&&typeof N!="function"&&typeof N!="symbol":Oe(e,t,b,N,n,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)N=a[ee],a.hasOwnProperty(ee)&&N!=null&&!n.hasOwnProperty(ee)&&Oe(e,t,ee,null,n,N);for(C in n)if(N=n[C],O=a[C],n.hasOwnProperty(C)&&N!==O&&(N!=null||O!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,t));break;default:Oe(e,t,C,N,n,O)}return;default:if(Ws(t)){for(var Re in a)N=a[Re],a.hasOwnProperty(Re)&&N!==void 0&&!n.hasOwnProperty(Re)&&Gr(e,t,Re,void 0,n,N);for(D in n)N=n[D],O=a[D],!n.hasOwnProperty(D)||N===O||N===void 0&&O===void 0||Gr(e,t,D,N,n,O);return}}for(var w in a)N=a[w],a.hasOwnProperty(w)&&N!=null&&!n.hasOwnProperty(w)&&Oe(e,t,w,null,n,N);for(_ in n)N=n[_],O=a[_],!n.hasOwnProperty(_)||N===O||N==null&&O==null||Oe(e,t,_,N,n,O)}function sf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ey(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],l=i.transferSize,u=i.initiatorType,f=i.duration;if(l&&f&&sf(u)){for(u=0,f=i.responseEnd,n+=1;n<a.length;n++){var b=a[n],C=b.startTime;if(C>f)break;var D=b.transferSize,_=b.initiatorType;D&&sf(_)&&(b=b.responseEnd,u+=D*(b<f?1:(f-C)/(b-C)))}if(--n,t+=8*(l+u)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ir=null,Br=null;function fs(e){return e.nodeType===9?e:e.ownerDocument}function of(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yr=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===Yr?!1:(Yr=e,!0):(Yr=null,!1)}var cf=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,uf=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof uf<"u"?function(e){return uf.resolve(null).then(e).catch(iy)}:cf;function iy(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function hf(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),ti(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Fi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fi(a);for(var l=a.firstChild;l;){var u=l.nextSibling,f=l.nodeName;l[di]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=u}}else a==="body"&&Fi(e.ownerDocument.body);a=i}while(a);ti(t)}function df(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Vr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vr(a),Fs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ly(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[di])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function sy(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function ff(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function Qr(e){return e.data==="$?"||e.data==="$~"}function Xr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function oy(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zr=null;function gf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function mf(e,t,a){switch(t=fs(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Fi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fs(e)}var _t=new Map,yf=new Set;function gs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=q.d;q.d={f:ry,r:cy,D:uy,C:hy,L:dy,m:fy,X:py,S:gy,M:my};function ry(){var e=pa.f(),t=ls();return e||t}function cy(e){var t=xn(e);t!==null&&t.tag===5&&t.type==="form"?jh(t):pa.r(e)}var Wn=typeof document>"u"?null:document;function vf(e,t,a){var n=Wn;if(n&&typeof t=="string"&&t){var i=Nt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),yf.has(i)||(yf.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),it(t,"link",e),Pe(t),n.head.appendChild(t)))}}function uy(e){pa.D(e),vf("dns-prefetch",e,null)}function hy(e,t){pa.C(e,t),vf("preconnect",e,t)}function dy(e,t,a){pa.L(e,t,a);var n=Wn;if(n&&e&&t){var i='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Nt(a.imageSizes)+'"]')):i+='[href="'+Nt(e)+'"]';var l=i;switch(t){case"style":l=$n(e);break;case"script":l=ei(e)}_t.has(l)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),_t.set(l,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Ki(l))||t==="script"&&n.querySelector(Ji(l))||(t=n.createElement("link"),it(t,"link",e),Pe(t),n.head.appendChild(t)))}}function fy(e,t){pa.m(e,t);var a=Wn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Nt(n)+'"][href="'+Nt(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=ei(e)}if(!_t.has(l)&&(e=T({rel:"modulepreload",href:e},t),_t.set(l,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ji(l)))return}n=a.createElement("link"),it(n,"link",e),Pe(n),a.head.appendChild(n)}}}function gy(e,t,a){pa.S(e,t,a);var n=Wn;if(n&&e){var i=En(n).hoistableStyles,l=$n(e);t=t||"default";var u=i.get(l);if(!u){var f={loading:0,preload:null};if(u=n.querySelector(Ki(l)))f.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=_t.get(l))&&Fr(e,a);var b=u=n.createElement("link");Pe(b),it(b,"link",e),b._p=new Promise(function(C,D){b.onload=C,b.onerror=D}),b.addEventListener("load",function(){f.loading|=1}),b.addEventListener("error",function(){f.loading|=2}),f.loading|=4,ps(u,t,n)}u={type:"stylesheet",instance:u,count:1,state:f},i.set(l,u)}}}function py(e,t){pa.X(e,t);var a=Wn;if(a&&e){var n=En(a).hoistableScripts,i=ei(e),l=n.get(i);l||(l=a.querySelector(Ji(i)),l||(e=T({src:e,async:!0},t),(t=_t.get(i))&&Kr(e,t),l=a.createElement("script"),Pe(l),it(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function my(e,t){pa.M(e,t);var a=Wn;if(a&&e){var n=En(a).hoistableScripts,i=ei(e),l=n.get(i);l||(l=a.querySelector(Ji(i)),l||(e=T({src:e,async:!0,type:"module"},t),(t=_t.get(i))&&Kr(e,t),l=a.createElement("script"),Pe(l),it(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function bf(e,t,a,n){var i=(i=re.current)?gs(i):null;if(!i)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=$n(a.href),a=En(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$n(a.href);var l=En(i).hoistableStyles,u=l.get(e);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,u),(l=i.querySelector(Ki(e)))&&!l._p&&(u.instance=l,u.state.loading=5),_t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_t.set(e,a),l||yy(i,e,a,u.state))),t&&n===null)throw Error(r(528,""));return u}if(t&&n!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ei(a),a=En(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function $n(e){return'href="'+Nt(e)+'"'}function Ki(e){return'link[rel="stylesheet"]['+e+"]"}function xf(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function yy(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),it(t,"link",a),Pe(t),e.head.appendChild(t))}function ei(e){return'[src="'+Nt(e)+'"]'}function Ji(e){return"script[async]"+e}function Ef(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(n)return t.instance=n,Pe(n),n;var i=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Pe(n),it(n,"style",i),ps(n,a.precedence,e),t.instance=n;case"stylesheet":i=$n(a.href);var l=e.querySelector(Ki(i));if(l)return t.state.loading|=4,t.instance=l,Pe(l),l;n=xf(a),(i=_t.get(i))&&Fr(n,i),l=(e.ownerDocument||e).createElement("link"),Pe(l);var u=l;return u._p=new Promise(function(f,b){u.onload=f,u.onerror=b}),it(l,"link",n),t.state.loading|=4,ps(l,a.precedence,e),t.instance=l;case"script":return l=ei(a.src),(i=e.querySelector(Ji(l)))?(t.instance=i,Pe(i),i):(n=a,(i=_t.get(l))&&(n=T({},a),Kr(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Pe(i),it(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,ps(n,a.precedence,e));return t.instance}function ps(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,u=0;u<n.length;u++){var f=n[u];if(f.dataset.precedence===t)l=f;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Fr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Kr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ms=null;function Sf(e,t,a){if(ms===null){var n=new Map,i=ms=new Map;i.set(a,n)}else i=ms,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var l=a[i];if(!(l[di]||l[et]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var u=l.getAttribute(t)||"";u=e+u;var f=n.get(u);f?f.push(l):n.set(u,[l])}}return n}function Tf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function vy(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function by(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=$n(n.href),l=t.querySelector(Ki(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ys.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,Pe(l);return}l=t.ownerDocument||t,n=xf(n),(i=_t.get(i))&&Fr(n,i),l=l.createElement("link"),Pe(l);var u=l;u._p=new Promise(function(f,b){u.onload=f,u.onerror=b}),it(l,"link",n),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ys.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Jr=0;function xy(e,t){return e.stylesheets&&e.count===0&&bs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&bs(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Jr===0&&(Jr=62500*ey());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bs(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Jr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function ys(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vs=null;function bs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vs=new Map,t.forEach(Ey,e),vs=null,ys.call(e))}function Ey(e,t){if(!(t.state.loading&4)){var a=vs.get(e);if(a)var n=a.get(null);else{a=new Map,vs.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var u=i[l];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),n=u)}n&&a.set(null,n)}i=t.instance,u=i.getAttribute("data-precedence"),l=a.get(u)||n,l===n&&a.set(null,i),a.set(u,i),this.count++,n=ys.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Pi={$$typeof:F,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Sy(e,t,a,n,i,l,u,f,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.hiddenUpdates=Vs(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Af(e,t,a,n,i,l,u,f,b,C,D,_){return e=new Sy(e,t,a,u,b,C,D,_,f),t=1,l===!0&&(t|=24),l=bt(3,null,null,t),e.current=l,l.stateNode=e,t=Ro(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:n,isDehydrated:a,cache:t},jo(l),e}function Cf(e){return e?(e=kn,e):kn}function Nf(e,t,a,n,i,l){i=Cf(i),n.context===null?n.context=i:n.pendingContext=i,n=ka(t),n.payload={element:a},l=l===void 0?null:l,l!==null&&(n.callback=l),a=Da(e,n,t),a!==null&&(ft(a,e,t),Ri(a,e,t))}function Of(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Pr(e,t){Of(e,t),(e=e.alternate)&&Of(e,t)}function Rf(e){if(e.tag===13||e.tag===31){var t=an(e,67108864);t!==null&&ft(t,e,67108864),Pr(e,67108864)}}function Mf(e){if(e.tag===13||e.tag===31){var t=wt();t=Qs(t);var a=an(e,t);a!==null&&ft(a,e,t),Pr(e,t)}}var xs=!0;function Ty(e,t,a,n){var i=M.T;M.T=null;var l=q.p;try{q.p=2,Wr(e,t,a,n)}finally{q.p=l,M.T=i}}function wy(e,t,a,n){var i=M.T;M.T=null;var l=q.p;try{q.p=8,Wr(e,t,a,n)}finally{q.p=l,M.T=i}}function Wr(e,t,a,n){if(xs){var i=$r(n);if(i===null)Hr(e,t,n,Es,a),Df(e,n);else if(Cy(i,e,t,a,n))n.stopPropagation();else if(Df(e,n),t&4&&-1<Ay.indexOf(e)){for(;i!==null;){var l=xn(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var u=Pa(l.pendingLanes);if(u!==0){var f=l;for(f.pendingLanes|=2,f.entangledLanes|=2;u;){var b=1<<31-yt(u);f.entanglements[1]|=b,u&=~b}Zt(l),(Ee&6)===0&&(ns=pt()+500,Qi(0))}}break;case 31:case 13:f=an(l,2),f!==null&&ft(f,l,2),ls(),Pr(l,2)}if(l=$r(n),l===null&&Hr(e,t,n,Es,a),l===i)break;i=l}i!==null&&n.stopPropagation()}else Hr(e,t,n,null,a)}}function $r(e){return e=eo(e),ec(e)}var Es=null;function ec(e){if(Es=null,e=bn(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Es=e,null}function kf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(up()){case Hc:return 2;case Gc:return 8;case ul:case hp:return 32;case Ic:return 268435456;default:return 32}default:return 32}}var tc=!1,Ya=null,Va=null,Qa=null,Wi=new Map,$i=new Map,Xa=[],Ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Df(e,t){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(t.pointerId)}}function el(e,t,a,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=xn(t),t!==null&&Rf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Cy(e,t,a,n,i){switch(t){case"focusin":return Ya=el(Ya,e,t,a,n,i),!0;case"dragenter":return Va=el(Va,e,t,a,n,i),!0;case"mouseover":return Qa=el(Qa,e,t,a,n,i),!0;case"pointerover":var l=i.pointerId;return Wi.set(l,el(Wi.get(l)||null,e,t,a,n,i)),!0;case"gotpointercapture":return l=i.pointerId,$i.set(l,el($i.get(l)||null,e,t,a,n,i)),!0}return!1}function jf(e){var t=bn(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,Xc(e.priority,function(){Mf(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,Xc(e.priority,function(){Mf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=$r(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);$s=n,a.target.dispatchEvent(n),$s=null}else return t=xn(a),t!==null&&Rf(t),e.blockedOn=a,!1;t.shift()}return!0}function zf(e,t,a){Ss(e)&&a.delete(t)}function Ny(){tc=!1,Ya!==null&&Ss(Ya)&&(Ya=null),Va!==null&&Ss(Va)&&(Va=null),Qa!==null&&Ss(Qa)&&(Qa=null),Wi.forEach(zf),$i.forEach(zf)}function Ts(e,t){e.blockedOn===t&&(e.blockedOn=null,tc||(tc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ny)))}var ws=null;function _f(e){ws!==e&&(ws=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ws===e&&(ws=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(ec(n||a)===null)continue;break}var l=xn(a);l!==null&&(e.splice(t,3),t-=3,$o(l,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function ti(e){function t(b){return Ts(b,e)}Ya!==null&&Ts(Ya,e),Va!==null&&Ts(Va,e),Qa!==null&&Ts(Qa,e),Wi.forEach(t),$i.forEach(t);for(var a=0;a<Xa.length;a++){var n=Xa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)jf(a),a.blockedOn===null&&Xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],l=a[n+1],u=i[ot]||null;if(typeof l=="function")u||_f(a);else if(u){var f=null;if(l&&l.hasAttribute("formAction")){if(i=l,u=l[ot]||null)f=u.formAction;else if(ec(i)!==null)continue}else f=u.action;typeof f=="function"?a[n+1]=f:(a.splice(n,3),n-=3),_f(a)}}}function Lf(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function ac(e){this._internalRoot=e}As.prototype.render=ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,n=wt();Nf(a,n,e,t,null,null)},As.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nf(e.current,2,null,e,null,null),ls(),t[vn]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Xa.length&&t!==0&&t<Xa[a].priority;a++);Xa.splice(a,0,e),a===0&&jf(e)}};var Uf=o.version;if(Uf!=="19.2.3")throw Error(r(527,Uf,"19.2.3"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Oy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{ci=Cs.inject(Oy),mt=Cs}catch{}}return al.createRoot=function(e,t){if(!h(e))throw Error(r(299));var a=!1,n="",i=Yh,l=Vh,u=Qh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Af(e,1,!1,null,null,a,n,null,i,l,u,Lf),e[vn]=t.current,Ur(e),new ac(t)},al.hydrateRoot=function(e,t,a){if(!h(e))throw Error(r(299));var n=!1,i="",l=Yh,u=Vh,f=Qh,b=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(b=a.formState)),t=Af(e,1,!0,t,a??null,n,i,b,l,u,f,Lf),t.context=Cf(null),a=t.current,n=wt(),n=Qs(n),i=ka(n),i.callback=null,Da(a,i,n),a=n,t.current.lanes=a,hi(t,a),Zt(t),e[vn]=t.current,Ur(e),new As(t)},al.version="19.2.3",al}var Zf;function Hy(){if(Zf)return lc.exports;Zf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(o){console.error(o)}}return s(),lc.exports=Uy(),lc.exports}var Gy=Hy();var Ff="popstate";function Iy(s={}){function o(r,h){let{pathname:d,search:g,hash:y}=r.location;return pc("",{pathname:d,search:g,hash:y},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function c(r,h){return typeof h=="string"?h:sl(h)}return qy(o,c,null,s)}function He(s,o){if(s===!1||s===null||typeof s>"u")throw new Error(o)}function Jt(s,o){if(!s){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function By(){return Math.random().toString(36).substring(2,10)}function Kf(s,o){return{usr:s.state,key:s.key,idx:o}}function pc(s,o,c=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof o=="string"?ii(o):o,state:c,key:o&&o.key||r||By()}}function sl({pathname:s="/",search:o="",hash:c=""}){return o&&o!=="?"&&(s+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function ii(s){let o={};if(s){let c=s.indexOf("#");c>=0&&(o.hash=s.substring(c),s=s.substring(0,c));let r=s.indexOf("?");r>=0&&(o.search=s.substring(r),s=s.substring(0,r)),s&&(o.pathname=s)}return o}function qy(s,o,c,r={}){let{window:h=document.defaultView,v5Compat:d=!1}=r,g=h.history,y="POP",m=null,p=S();p==null&&(p=0,g.replaceState({...g.state,idx:p},""));function S(){return(g.state||{idx:null}).idx}function T(){y="POP";let L=S(),V=L==null?null:L-p;p=L,m&&m({action:y,location:U.location,delta:V})}function k(L,V){y="PUSH";let Y=pc(U.location,L,V);p=S()+1;let F=Kf(Y,p),oe=U.createHref(Y);try{g.pushState(F,"",oe)}catch(pe){if(pe instanceof DOMException&&pe.name==="DataCloneError")throw pe;h.location.assign(oe)}d&&m&&m({action:y,location:U.location,delta:1})}function H(L,V){y="REPLACE";let Y=pc(U.location,L,V);p=S();let F=Kf(Y,p),oe=U.createHref(Y);g.replaceState(F,"",oe),d&&m&&m({action:y,location:U.location,delta:0})}function G(L){return Yy(L)}let U={get action(){return y},get location(){return s(h,g)},listen(L){if(m)throw new Error("A history only accepts one active listener");return h.addEventListener(Ff,T),m=L,()=>{h.removeEventListener(Ff,T),m=null}},createHref(L){return o(h,L)},createURL:G,encodeLocation(L){let V=G(L);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:k,replace:H,go(L){return g.go(L)}};return U}function Yy(s,o=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),He(c,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:sl(s);return r=r.replace(/ $/,"%20"),!o&&r.startsWith("//")&&(r=c+r),new URL(r,c)}function hg(s,o,c="/"){return Vy(s,o,c,!1)}function Vy(s,o,c,r){let h=typeof o=="string"?ii(o):o,d=va(h.pathname||"/",c);if(d==null)return null;let g=dg(s);Qy(g);let y=null;for(let m=0;y==null&&m<g.length;++m){let p=av(d);y=ev(g[m],p,r)}return y}function dg(s,o=[],c=[],r="",h=!1){let d=(g,y,m=h,p)=>{let S={relativePath:p===void 0?g.path||"":p,caseSensitive:g.caseSensitive===!0,childrenIndex:y,route:g};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(r)&&m)return;He(S.relativePath.startsWith(r),`Absolute route path "${S.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(r.length)}let T=ya([r,S.relativePath]),k=c.concat(S);g.children&&g.children.length>0&&(He(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),dg(g.children,o,k,T,m)),!(g.path==null&&!g.index)&&o.push({path:T,score:Wy(T,g.index),routesMeta:k})};return s.forEach((g,y)=>{if(g.path===""||!g.path?.includes("?"))d(g,y);else for(let m of fg(g.path))d(g,y,!0,m)}),o}function fg(s){let o=s.split("/");if(o.length===0)return[];let[c,...r]=o,h=c.endsWith("?"),d=c.replace(/\?$/,"");if(r.length===0)return h?[d,""]:[d];let g=fg(r.join("/")),y=[];return y.push(...g.map(m=>m===""?d:[d,m].join("/"))),h&&y.push(...g),y.map(m=>s.startsWith("/")&&m===""?"/":m)}function Qy(s){s.sort((o,c)=>o.score!==c.score?c.score-o.score:$y(o.routesMeta.map(r=>r.childrenIndex),c.routesMeta.map(r=>r.childrenIndex)))}var Xy=/^:[\w-]+$/,Zy=3,Fy=2,Ky=1,Jy=10,Py=-2,Jf=s=>s==="*";function Wy(s,o){let c=s.split("/"),r=c.length;return c.some(Jf)&&(r+=Py),o&&(r+=Fy),c.filter(h=>!Jf(h)).reduce((h,d)=>h+(Xy.test(d)?Zy:d===""?Ky:Jy),r)}function $y(s,o){return s.length===o.length&&s.slice(0,-1).every((r,h)=>r===o[h])?s[s.length-1]-o[o.length-1]:0}function ev(s,o,c=!1){let{routesMeta:r}=s,h={},d="/",g=[];for(let y=0;y<r.length;++y){let m=r[y],p=y===r.length-1,S=d==="/"?o:o.slice(d.length)||"/",T=js({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},S),k=m.route;if(!T&&p&&c&&!r[r.length-1].route.index&&(T=js({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},S)),!T)return null;Object.assign(h,T.params),g.push({params:h,pathname:ya([d,T.pathname]),pathnameBase:sv(ya([d,T.pathnameBase])),route:k}),T.pathnameBase!=="/"&&(d=ya([d,T.pathnameBase]))}return g}function js(s,o){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[c,r]=tv(s.path,s.caseSensitive,s.end),h=o.match(c);if(!h)return null;let d=h[0],g=d.replace(/(.)\/+$/,"$1"),y=h.slice(1);return{params:r.reduce((p,{paramName:S,isOptional:T},k)=>{if(S==="*"){let G=y[k]||"";g=d.slice(0,d.length-G.length).replace(/(.)\/+$/,"$1")}const H=y[k];return T&&!H?p[S]=void 0:p[S]=(H||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:g,pattern:s}}function tv(s,o=!1,c=!0){Jt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],h="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,y,m)=>(r.push({paramName:y,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),h+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?h+="\\/*$":s!==""&&s!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,o?void 0:"i"),r]}function av(s){try{return s.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Jt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),s}}function va(s,o){if(o==="/")return s;if(!s.toLowerCase().startsWith(o.toLowerCase()))return null;let c=o.endsWith("/")?o.length-1:o.length,r=s.charAt(c);return r&&r!=="/"?null:s.slice(c)||"/"}var nv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function iv(s,o="/"){let{pathname:c,search:r="",hash:h=""}=typeof s=="string"?ii(s):s,d;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?d=Pf(c.substring(1),"/"):d=Pf(c,o)):d=o,{pathname:d,search:ov(r),hash:rv(h)}}function Pf(s,o){let c=o.replace(/\/+$/,"").split("/");return s.split("/").forEach(h=>{h===".."?c.length>1&&c.pop():h!=="."&&c.push(h)}),c.length>1?c.join("/"):"/"}function cc(s,o,c,r){return`Cannot include a '${s}' character in a manually specified \`to.${o}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lv(s){return s.filter((o,c)=>c===0||o.route.path&&o.route.path.length>0)}function gg(s){let o=lv(s);return o.map((c,r)=>r===o.length-1?c.pathname:c.pathnameBase)}function pg(s,o,c,r=!1){let h;typeof s=="string"?h=ii(s):(h={...s},He(!h.pathname||!h.pathname.includes("?"),cc("?","pathname","search",h)),He(!h.pathname||!h.pathname.includes("#"),cc("#","pathname","hash",h)),He(!h.search||!h.search.includes("#"),cc("#","search","hash",h)));let d=s===""||h.pathname==="",g=d?"/":h.pathname,y;if(g==null)y=c;else{let T=o.length-1;if(!r&&g.startsWith("..")){let k=g.split("/");for(;k[0]==="..";)k.shift(),T-=1;h.pathname=k.join("/")}y=T>=0?o[T]:"/"}let m=iv(h,y),p=g&&g!=="/"&&g.endsWith("/"),S=(d||g===".")&&c.endsWith("/");return!m.pathname.endsWith("/")&&(p||S)&&(m.pathname+="/"),m}var ya=s=>s.join("/").replace(/\/\/+/g,"/"),sv=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ov=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,rv=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,cv=class{constructor(s,o,c,r=!1){this.status=s,this.statusText=o||"",this.internal=r,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function uv(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function hv(s){return s.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var mg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function yg(s,o){let c=s;if(typeof c!="string"||!nv.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let r=c,h=!1;if(mg)try{let d=new URL(window.location.href),g=c.startsWith("//")?new URL(d.protocol+c):new URL(c),y=va(g.pathname,o);g.origin===d.origin&&y!=null?c=y+g.search+g.hash:h=!0}catch{Jt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:h,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vg=["POST","PUT","PATCH","DELETE"];new Set(vg);var dv=["GET",...vg];new Set(dv);var li=R.createContext(null);li.displayName="DataRouter";var Us=R.createContext(null);Us.displayName="DataRouterState";var fv=R.createContext(!1),bg=R.createContext({isTransitioning:!1});bg.displayName="ViewTransition";var gv=R.createContext(new Map);gv.displayName="Fetchers";var pv=R.createContext(null);pv.displayName="Await";var Lt=R.createContext(null);Lt.displayName="Navigation";var ol=R.createContext(null);ol.displayName="Location";var xa=R.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var Oc=R.createContext(null);Oc.displayName="RouteError";var xg="REACT_ROUTER_ERROR",mv="REDIRECT",yv="ROUTE_ERROR_RESPONSE";function vv(s){if(s.startsWith(`${xg}:${mv}:{`))try{let o=JSON.parse(s.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function bv(s){if(s.startsWith(`${xg}:${yv}:{`))try{let o=JSON.parse(s.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new cv(o.status,o.statusText,o.data)}catch{}}function xv(s,{relative:o}={}){He(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:r}=R.useContext(Lt),{hash:h,pathname:d,search:g}=cl(s,{relative:o}),y=d;return c!=="/"&&(y=d==="/"?c:ya([c,d])),r.createHref({pathname:y,search:g,hash:h})}function rl(){return R.useContext(ol)!=null}function Pt(){return He(rl(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(ol).location}var Eg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sg(s){R.useContext(Lt).static||R.useLayoutEffect(s)}function Tg(){let{isDataRoute:s}=R.useContext(xa);return s?jv():Ev()}function Ev(){He(rl(),"useNavigate() may be used only in the context of a <Router> component.");let s=R.useContext(li),{basename:o,navigator:c}=R.useContext(Lt),{matches:r}=R.useContext(xa),{pathname:h}=Pt(),d=JSON.stringify(gg(r)),g=R.useRef(!1);return Sg(()=>{g.current=!0}),R.useCallback((m,p={})=>{if(Jt(g.current,Eg),!g.current)return;if(typeof m=="number"){c.go(m);return}let S=pg(m,JSON.parse(d),h,p.relative==="path");s==null&&o!=="/"&&(S.pathname=S.pathname==="/"?o:ya([o,S.pathname])),(p.replace?c.replace:c.push)(S,p.state,p)},[o,c,d,h,s])}R.createContext(null);function cl(s,{relative:o}={}){let{matches:c}=R.useContext(xa),{pathname:r}=Pt(),h=JSON.stringify(gg(c));return R.useMemo(()=>pg(s,JSON.parse(h),r,o==="path"),[s,h,r,o])}function Sv(s,o){return wg(s,o)}function wg(s,o,c,r,h){He(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=R.useContext(Lt),{matches:g}=R.useContext(xa),y=g[g.length-1],m=y?y.params:{},p=y?y.pathname:"/",S=y?y.pathnameBase:"/",T=y&&y.route;{let Y=T&&T.path||"";Cg(p,!T||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let k=Pt(),H;if(o){let Y=typeof o=="string"?ii(o):o;He(S==="/"||Y.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),H=Y}else H=k;let G=H.pathname||"/",U=G;if(S!=="/"){let Y=S.replace(/^\//,"").split("/");U="/"+G.replace(/^\//,"").split("/").slice(Y.length).join("/")}let L=hg(s,{pathname:U});Jt(T||L!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),Jt(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Nv(L&&L.map(Y=>Object.assign({},Y,{params:Object.assign({},m,Y.params),pathname:ya([S,d.encodeLocation?d.encodeLocation(Y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?S:ya([S,d.encodeLocation?d.encodeLocation(Y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),g,c,r,h);return o&&V?R.createElement(ol.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},V):V}function Tv(){let s=Dv(),o=uv(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),c=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:r},d={padding:"2px 4px",backgroundColor:r},g=null;return console.error("Error handled by React Router default ErrorBoundary:",s),g=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:d},"ErrorBoundary")," or"," ",R.createElement("code",{style:d},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},o),c?R.createElement("pre",{style:h},c):null,g)}var wv=R.createElement(Tv,null),Ag=class extends R.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,o){return o.location!==s.location||o.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:o.error,location:o.location,revalidation:s.revalidation||o.revalidation}}componentDidCatch(s,o){this.props.onError?this.props.onError(s,o):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const c=bv(s.digest);c&&(s=c)}let o=s!==void 0?R.createElement(xa.Provider,{value:this.props.routeContext},R.createElement(Oc.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?R.createElement(Av,{error:s},o):o}};Ag.contextType=fv;var uc=new WeakMap;function Av({children:s,error:o}){let{basename:c}=R.useContext(Lt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let r=vv(o.digest);if(r){let h=uc.get(o);if(h)throw h;let d=yg(r.location,c);if(mg&&!uc.get(o))if(d.isExternal||r.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:r.replace}));throw uc.set(o,g),g}return R.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return s}function Cv({routeContext:s,match:o,children:c}){let r=R.useContext(li);return r&&r.static&&r.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=o.route.id),R.createElement(xa.Provider,{value:s},c)}function Nv(s,o=[],c=null,r=null,h=null){if(s==null){if(!c)return null;if(c.errors)s=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)s=c.matches;else return null}let d=s,g=c?.errors;if(g!=null){let S=d.findIndex(T=>T.route.id&&g?.[T.route.id]!==void 0);He(S>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,S+1))}let y=!1,m=-1;if(c)for(let S=0;S<d.length;S++){let T=d[S];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(m=S),T.route.id){let{loaderData:k,errors:H}=c,G=T.route.loader&&!k.hasOwnProperty(T.route.id)&&(!H||H[T.route.id]===void 0);if(T.route.lazy||G){y=!0,m>=0?d=d.slice(0,m+1):d=[d[0]];break}}}let p=c&&r?(S,T)=>{r(S,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:hv(c.matches),errorInfo:T})}:void 0;return d.reduceRight((S,T,k)=>{let H,G=!1,U=null,L=null;c&&(H=g&&T.route.id?g[T.route.id]:void 0,U=T.route.errorElement||wv,y&&(m<0&&k===0?(Cg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,L=null):m===k&&(G=!0,L=T.route.hydrateFallbackElement||null)));let V=o.concat(d.slice(0,k+1)),Y=()=>{let F;return H?F=U:G?F=L:T.route.Component?F=R.createElement(T.route.Component,null):T.route.element?F=T.route.element:F=S,R.createElement(Cv,{match:T,routeContext:{outlet:S,matches:V,isDataRoute:c!=null},children:F})};return c&&(T.route.ErrorBoundary||T.route.errorElement||k===0)?R.createElement(Ag,{location:c.location,revalidation:c.revalidation,component:U,error:H,children:Y(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:p}):Y()},null)}function Rc(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ov(s){let o=R.useContext(li);return He(o,Rc(s)),o}function Rv(s){let o=R.useContext(Us);return He(o,Rc(s)),o}function Mv(s){let o=R.useContext(xa);return He(o,Rc(s)),o}function Mc(s){let o=Mv(s),c=o.matches[o.matches.length-1];return He(c.route.id,`${s} can only be used on routes that contain a unique "id"`),c.route.id}function kv(){return Mc("useRouteId")}function Dv(){let s=R.useContext(Oc),o=Rv("useRouteError"),c=Mc("useRouteError");return s!==void 0?s:o.errors?.[c]}function jv(){let{router:s}=Ov("useNavigate"),o=Mc("useNavigate"),c=R.useRef(!1);return Sg(()=>{c.current=!0}),R.useCallback(async(h,d={})=>{Jt(c.current,Eg),c.current&&(typeof h=="number"?await s.navigate(h):await s.navigate(h,{fromRouteId:o,...d}))},[s,o])}var Wf={};function Cg(s,o,c){!o&&!Wf[s]&&(Wf[s]=!0,Jt(!1,c))}R.memo(zv);function zv({routes:s,future:o,state:c,onError:r}){return wg(s,void 0,c,r,o)}function Se(s){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _v({basename:s="/",children:o=null,location:c,navigationType:r="POP",navigator:h,static:d=!1,unstable_useTransitions:g}){He(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=s.replace(/^\/*/,"/"),m=R.useMemo(()=>({basename:y,navigator:h,static:d,unstable_useTransitions:g,future:{}}),[y,h,d,g]);typeof c=="string"&&(c=ii(c));let{pathname:p="/",search:S="",hash:T="",state:k=null,key:H="default"}=c,G=R.useMemo(()=>{let U=va(p,y);return U==null?null:{location:{pathname:U,search:S,hash:T,state:k,key:H},navigationType:r}},[y,p,S,T,k,H,r]);return Jt(G!=null,`<Router basename="${y}"> is not able to match the URL "${p}${S}${T}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:R.createElement(Lt.Provider,{value:m},R.createElement(ol.Provider,{children:o,value:G}))}function Lv({children:s,location:o}){return Sv(mc(s),o)}function mc(s,o=[]){let c=[];return R.Children.forEach(s,(r,h)=>{if(!R.isValidElement(r))return;let d=[...o,h];if(r.type===R.Fragment){c.push.apply(c,mc(r.props.children,d));return}He(r.type===Se,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!r.props.index||!r.props.children,"An index route cannot have child routes.");let g={id:r.props.id||d.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(g.children=mc(r.props.children,d)),c.push(g)}),c}var ks="get",Ds="application/x-www-form-urlencoded";function Hs(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function Uv(s){return Hs(s)&&s.tagName.toLowerCase()==="button"}function Hv(s){return Hs(s)&&s.tagName.toLowerCase()==="form"}function Gv(s){return Hs(s)&&s.tagName.toLowerCase()==="input"}function Iv(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Bv(s,o){return s.button===0&&(!o||o==="_self")&&!Iv(s)}var Ns=null;function qv(){if(Ns===null)try{new FormData(document.createElement("form"),0),Ns=!1}catch{Ns=!0}return Ns}var Yv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hc(s){return s!=null&&!Yv.has(s)?(Jt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ds}"`),null):s}function Vv(s,o){let c,r,h,d,g;if(Hv(s)){let y=s.getAttribute("action");r=y?va(y,o):null,c=s.getAttribute("method")||ks,h=hc(s.getAttribute("enctype"))||Ds,d=new FormData(s)}else if(Uv(s)||Gv(s)&&(s.type==="submit"||s.type==="image")){let y=s.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||y.getAttribute("action");if(r=m?va(m,o):null,c=s.getAttribute("formmethod")||y.getAttribute("method")||ks,h=hc(s.getAttribute("formenctype"))||hc(y.getAttribute("enctype"))||Ds,d=new FormData(y,s),!qv()){let{name:p,type:S,value:T}=s;if(S==="image"){let k=p?`${p}.`:"";d.append(`${k}x`,"0"),d.append(`${k}y`,"0")}else p&&d.append(p,T)}}else{if(Hs(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=ks,r=null,h=Ds,g=s}return d&&h==="text/plain"&&(g=d,d=void 0),{action:r,method:c.toLowerCase(),encType:h,formData:d,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kc(s,o){if(s===!1||s===null||typeof s>"u")throw new Error(o)}function Qv(s,o,c,r){let h=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return c?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${r}`:h.pathname=`${h.pathname}.${r}`:h.pathname==="/"?h.pathname=`_root.${r}`:o&&va(h.pathname,o)==="/"?h.pathname=`${o.replace(/\/$/,"")}/_root.${r}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${r}`,h}async function Xv(s,o){if(s.id in o)return o[s.id];try{let c=await import(s.module);return o[s.id]=c,c}catch(c){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zv(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Fv(s,o,c){let r=await Promise.all(s.map(async h=>{let d=o.routes[h.route.id];if(d){let g=await Xv(d,c);return g.links?g.links():[]}return[]}));return Wv(r.flat(1).filter(Zv).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function $f(s,o,c,r,h,d){let g=(m,p)=>c[p]?m.route.id!==c[p].route.id:!0,y=(m,p)=>c[p].pathname!==m.pathname||c[p].route.path?.endsWith("*")&&c[p].params["*"]!==m.params["*"];return d==="assets"?o.filter((m,p)=>g(m,p)||y(m,p)):d==="data"?o.filter((m,p)=>{let S=r.routes[m.route.id];if(!S||!S.hasLoader)return!1;if(g(m,p)||y(m,p))return!0;if(m.route.shouldRevalidate){let T=m.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function Kv(s,o,{includeHydrateFallback:c}={}){return Jv(s.map(r=>{let h=o.routes[r.route.id];if(!h)return[];let d=[h.module];return h.clientActionModule&&(d=d.concat(h.clientActionModule)),h.clientLoaderModule&&(d=d.concat(h.clientLoaderModule)),c&&h.hydrateFallbackModule&&(d=d.concat(h.hydrateFallbackModule)),h.imports&&(d=d.concat(h.imports)),d}).flat(1))}function Jv(s){return[...new Set(s)]}function Pv(s){let o={},c=Object.keys(s).sort();for(let r of c)o[r]=s[r];return o}function Wv(s,o){let c=new Set;return new Set(o),s.reduce((r,h)=>{let d=JSON.stringify(Pv(h));return c.has(d)||(c.add(d),r.push({key:d,link:h})),r},[])}function Ng(){let s=R.useContext(li);return kc(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function $v(){let s=R.useContext(Us);return kc(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Dc=R.createContext(void 0);Dc.displayName="FrameworkContext";function Og(){let s=R.useContext(Dc);return kc(s,"You must render this element inside a <HydratedRouter> element"),s}function e0(s,o){let c=R.useContext(Dc),[r,h]=R.useState(!1),[d,g]=R.useState(!1),{onFocus:y,onBlur:m,onMouseEnter:p,onMouseLeave:S,onTouchStart:T}=o,k=R.useRef(null);R.useEffect(()=>{if(s==="render"&&g(!0),s==="viewport"){let U=V=>{V.forEach(Y=>{g(Y.isIntersecting)})},L=new IntersectionObserver(U,{threshold:.5});return k.current&&L.observe(k.current),()=>{L.disconnect()}}},[s]),R.useEffect(()=>{if(r){let U=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(U)}}},[r]);let H=()=>{h(!0)},G=()=>{h(!1),g(!1)};return c?s!=="intent"?[d,k,{}]:[d,k,{onFocus:nl(y,H),onBlur:nl(m,G),onMouseEnter:nl(p,H),onMouseLeave:nl(S,G),onTouchStart:nl(T,H)}]:[!1,k,{}]}function nl(s,o){return c=>{s&&s(c),c.defaultPrevented||o(c)}}function t0({page:s,...o}){let{router:c}=Ng(),r=R.useMemo(()=>hg(c.routes,s,c.basename),[c.routes,s,c.basename]);return r?R.createElement(n0,{page:s,matches:r,...o}):null}function a0(s){let{manifest:o,routeModules:c}=Og(),[r,h]=R.useState([]);return R.useEffect(()=>{let d=!1;return Fv(s,o,c).then(g=>{d||h(g)}),()=>{d=!0}},[s,o,c]),r}function n0({page:s,matches:o,...c}){let r=Pt(),{future:h,manifest:d,routeModules:g}=Og(),{basename:y}=Ng(),{loaderData:m,matches:p}=$v(),S=R.useMemo(()=>$f(s,o,p,d,r,"data"),[s,o,p,d,r]),T=R.useMemo(()=>$f(s,o,p,d,r,"assets"),[s,o,p,d,r]),k=R.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let U=new Set,L=!1;if(o.forEach(Y=>{let F=d.routes[Y.route.id];!F||!F.hasLoader||(!S.some(oe=>oe.route.id===Y.route.id)&&Y.route.id in m&&g[Y.route.id]?.shouldRevalidate||F.hasClientLoader?L=!0:U.add(Y.route.id))}),U.size===0)return[];let V=Qv(s,y,h.unstable_trailingSlashAwareDataRequests,"data");return L&&U.size>0&&V.searchParams.set("_routes",o.filter(Y=>U.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[V.pathname+V.search]},[y,h.unstable_trailingSlashAwareDataRequests,m,r,d,S,o,s,g]),H=R.useMemo(()=>Kv(T,d),[T,d]),G=a0(T);return R.createElement(R.Fragment,null,k.map(U=>R.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...c})),H.map(U=>R.createElement("link",{key:U,rel:"modulepreload",href:U,...c})),G.map(({key:U,link:L})=>R.createElement("link",{key:U,nonce:c.nonce,...L,crossOrigin:L.crossOrigin??c.crossOrigin})))}function i0(...s){return o=>{s.forEach(c=>{typeof c=="function"?c(o):c!=null&&(c.current=o)})}}var l0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l0&&(window.__reactRouterVersion="7.13.0")}catch{}function s0({basename:s,children:o,unstable_useTransitions:c,window:r}){let h=R.useRef();h.current==null&&(h.current=Iy({window:r,v5Compat:!0}));let d=h.current,[g,y]=R.useState({action:d.action,location:d.location}),m=R.useCallback(p=>{c===!1?y(p):R.startTransition(()=>y(p))},[c]);return R.useLayoutEffect(()=>d.listen(m),[d,m]),R.createElement(_v,{basename:s,children:o,location:g.location,navigationType:g.action,navigator:d,unstable_useTransitions:c})}var Rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qt=R.forwardRef(function({onClick:o,discover:c="render",prefetch:r="none",relative:h,reloadDocument:d,replace:g,state:y,target:m,to:p,preventScrollReset:S,viewTransition:T,unstable_defaultShouldRevalidate:k,...H},G){let{basename:U,unstable_useTransitions:L}=R.useContext(Lt),V=typeof p=="string"&&Rg.test(p),Y=yg(p,U);p=Y.to;let F=xv(p,{relative:h}),[oe,pe,ye]=e0(r,H),P=u0(p,{replace:g,state:y,target:m,preventScrollReset:S,relative:h,viewTransition:T,unstable_defaultShouldRevalidate:k,unstable_useTransitions:L});function X(Ke){o&&o(Ke),Ke.defaultPrevented||P(Ke)}let de=R.createElement("a",{...H,...ye,href:Y.absoluteURL||F,onClick:Y.isExternal||d?o:X,ref:i0(G,pe),target:m,"data-discover":!V&&c==="render"?"true":void 0});return oe&&!V?R.createElement(R.Fragment,null,de,R.createElement(t0,{page:F})):de});qt.displayName="Link";var o0=R.forwardRef(function({"aria-current":o="page",caseSensitive:c=!1,className:r="",end:h=!1,style:d,to:g,viewTransition:y,children:m,...p},S){let T=cl(g,{relative:p.relative}),k=Pt(),H=R.useContext(Us),{navigator:G,basename:U}=R.useContext(Lt),L=H!=null&&p0(T)&&y===!0,V=G.encodeLocation?G.encodeLocation(T).pathname:T.pathname,Y=k.pathname,F=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;c||(Y=Y.toLowerCase(),F=F?F.toLowerCase():null,V=V.toLowerCase()),F&&U&&(F=va(F,U)||F);const oe=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let pe=Y===V||!h&&Y.startsWith(V)&&Y.charAt(oe)==="/",ye=F!=null&&(F===V||!h&&F.startsWith(V)&&F.charAt(V.length)==="/"),P={isActive:pe,isPending:ye,isTransitioning:L},X=pe?o:void 0,de;typeof r=="function"?de=r(P):de=[r,pe?"active":null,ye?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let Ke=typeof d=="function"?d(P):d;return R.createElement(qt,{...p,"aria-current":X,className:de,ref:S,style:Ke,to:g,viewTransition:y},typeof m=="function"?m(P):m)});o0.displayName="NavLink";var r0=R.forwardRef(({discover:s="render",fetcherKey:o,navigate:c,reloadDocument:r,replace:h,state:d,method:g=ks,action:y,onSubmit:m,relative:p,preventScrollReset:S,viewTransition:T,unstable_defaultShouldRevalidate:k,...H},G)=>{let{unstable_useTransitions:U}=R.useContext(Lt),L=f0(),V=g0(y,{relative:p}),Y=g.toLowerCase()==="get"?"get":"post",F=typeof y=="string"&&Rg.test(y),oe=pe=>{if(m&&m(pe),pe.defaultPrevented)return;pe.preventDefault();let ye=pe.nativeEvent.submitter,P=ye?.getAttribute("formmethod")||g,X=()=>L(ye||pe.currentTarget,{fetcherKey:o,method:P,navigate:c,replace:h,state:d,relative:p,preventScrollReset:S,viewTransition:T,unstable_defaultShouldRevalidate:k});U&&c!==!1?R.startTransition(()=>X()):X()};return R.createElement("form",{ref:G,method:Y,action:V,onSubmit:r?m:oe,...H,"data-discover":!F&&s==="render"?"true":void 0})});r0.displayName="Form";function c0(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mg(s){let o=R.useContext(li);return He(o,c0(s)),o}function u0(s,{target:o,replace:c,state:r,preventScrollReset:h,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:m}={}){let p=Tg(),S=Pt(),T=cl(s,{relative:d});return R.useCallback(k=>{if(Bv(k,o)){k.preventDefault();let H=c!==void 0?c:sl(S)===sl(T),G=()=>p(s,{replace:H,state:r,preventScrollReset:h,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:y});m?R.startTransition(()=>G()):G()}},[S,p,T,c,r,o,s,h,d,g,y,m])}var h0=0,d0=()=>`__${String(++h0)}__`;function f0(){let{router:s}=Mg("useSubmit"),{basename:o}=R.useContext(Lt),c=kv(),r=s.fetch,h=s.navigate;return R.useCallback(async(d,g={})=>{let{action:y,method:m,encType:p,formData:S,body:T}=Vv(d,o);if(g.navigate===!1){let k=g.fetcherKey||d0();await r(k,c,g.action||y,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:S,body:T,formMethod:g.method||m,formEncType:g.encType||p,flushSync:g.flushSync})}else await h(g.action||y,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:S,body:T,formMethod:g.method||m,formEncType:g.encType||p,replace:g.replace,state:g.state,fromRouteId:c,flushSync:g.flushSync,viewTransition:g.viewTransition})},[r,h,o,c])}function g0(s,{relative:o}={}){let{basename:c}=R.useContext(Lt),r=R.useContext(xa);He(r,"useFormAction must be used inside a RouteContext");let[h]=r.matches.slice(-1),d={...cl(s||".",{relative:o})},g=Pt();if(s==null){d.search=g.search;let y=new URLSearchParams(d.search),m=y.getAll("index");if(m.some(S=>S==="")){y.delete("index"),m.filter(T=>T).forEach(T=>y.append("index",T));let S=y.toString();d.search=S?`?${S}`:""}}return(!s||s===".")&&h.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(d.pathname=d.pathname==="/"?c:ya([c,d.pathname])),sl(d)}function p0(s,{relative:o}={}){let c=R.useContext(bg);He(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Mg("useViewTransitionState"),h=cl(s,{relative:o});if(!c.isTransitioning)return!1;let d=va(c.currentLocation.pathname,r)||c.currentLocation.pathname,g=va(c.nextLocation.pathname,r)||c.nextLocation.pathname;return js(h.pathname,g)!=null||js(h.pathname,d)!=null}const kg=R.createContext(void 0);function m0({children:s}){const[o,c]=R.useState(()=>{if(typeof window<"u"){const h=localStorage.getItem("theme");return h||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}return"light"});R.useEffect(()=>{const h=window.document.documentElement;h.classList.remove("light","dark"),h.classList.add(o),localStorage.setItem("theme",o)},[o]);const r=()=>{c(h=>h==="light"?"dark":"light")};return v.jsx(kg.Provider,{"code-path":"src/contexts/ThemeContext.tsx:34:5",value:{theme:o,toggleTheme:r},children:s})}function y0(){const s=R.useContext(kg);if(s===void 0)throw new Error("useTheme must be used within a ThemeProvider");return s}const v0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b0=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,c,r)=>r?r.toUpperCase():c.toLowerCase()),eg=s=>{const o=b0(s);return o.charAt(0).toUpperCase()+o.slice(1)},Dg=(...s)=>s.filter((o,c,r)=>!!o&&o.trim()!==""&&r.indexOf(o)===c).join(" ").trim(),x0=s=>{for(const o in s)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};var E0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const S0=R.forwardRef(({color:s="currentColor",size:o=24,strokeWidth:c=2,absoluteStrokeWidth:r,className:h="",children:d,iconNode:g,...y},m)=>R.createElement("svg",{ref:m,...E0,width:o,height:o,stroke:s,strokeWidth:r?Number(c)*24/Number(o):c,className:Dg("lucide",h),...!d&&!x0(y)&&{"aria-hidden":"true"},...y},[...g.map(([p,S])=>R.createElement(p,S)),...Array.isArray(d)?d:[d]]));const gt=(s,o)=>{const c=R.forwardRef(({className:r,...h},d)=>R.createElement(S0,{ref:d,iconNode:o,className:Dg(`lucide-${v0(eg(s))}`,`lucide-${s}`,r),...h}));return c.displayName=eg(s),c};const T0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ni=gt("book-open",T0);const w0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],A0=gt("chevron-down",w0);const C0=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],N0=gt("chevron-left",C0);const O0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ll=gt("chevron-right",O0);const R0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],M0=gt("file-text",R0);const k0=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],D0=gt("graduation-cap",k0);const j0=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],z0=gt("house",j0);const _0=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],L0=gt("lightbulb",_0);const U0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],H0=gt("menu",U0);const G0=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],I0=gt("moon",G0);const B0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],yc=gt("search",B0);const q0=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Y0=gt("sun",q0);const V0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Q0=gt("users",V0);const X0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],jg=gt("x",X0),jc=[{id:"frontmatter",title:"Front Matter",items:[{id:"foreword",title:"Foreword",path:"/foreword"},{id:"preface",title:"Preface",path:"/preface"}]},{id:"unit1",title:"Unit 1: Techniques and Methods",items:[{id:"ch1",title:"Chapter 1: State of English Teaching in India",path:"/unit1/chapter1"},{id:"ch2",title:"Chapter 2: Importance of Learning English",path:"/unit1/chapter2"},{id:"ch3",title:"Chapter 3: Factors for Universal Importance",path:"/unit1/chapter3"},{id:"ch4",title:"Chapter 4: Position of English in Gujarat",path:"/unit1/chapter4"},{id:"ch5",title:"Chapter 5: Problems of Teaching English",path:"/unit1/chapter5"},{id:"ch6",title:"Chapter 6: Psychology of Learning",path:"/unit1/chapter6"},{id:"ch7",title:"Chapter 7: Objectives of Teaching English",path:"/unit1/chapter7"},{id:"ch8",title:"Chapter 8: Planning",path:"/unit1/chapter8"},{id:"ch9",title:"Chapter 9: Techniques",path:"/unit1/chapter9"},{id:"ch10",title:"Chapter 10: Methods of Teaching",path:"/unit1/chapter10"},{id:"ch11",title:"Chapter 11: Skills of Teaching",path:"/unit1/chapter11"}]},{id:"unit2",title:"Unit 2: Development of Basic Skills",items:[{id:"ch12",title:"Chapter 12: Teaching of Listening",path:"/unit2/chapter12"},{id:"ch13",title:"Chapter 13: Speech and Pronunciation",path:"/unit2/chapter13"},{id:"ch14",title:"Chapter 14: Teaching of Reading",path:"/unit2/chapter14"},{id:"ch15",title:"Chapter 15: Teaching of Writing",path:"/unit2/chapter15"},{id:"ch16",title:"Chapter 16: Teaching of Grammar",path:"/unit2/chapter16"},{id:"ch17",title:"Chapter 17: Teaching of Prose and Poetry",path:"/unit2/chapter17"},{id:"ch18",title:"Chapter 18: Teaching of Composition",path:"/unit2/chapter18"}]},{id:"unit3",title:"Unit 3: Evaluation Techniques",items:[{id:"ch19",title:"Chapter 19: Evaluation in English",path:"/unit3/chapter19"},{id:"ch20",title:"Chapter 20: Types of Tests",path:"/unit3/chapter20"},{id:"ch21",title:"Chapter 21: Diagnostic Test & Remedial Teaching",path:"/unit3/chapter21"},{id:"ch22",title:"Chapter 22: Textbook Evaluation",path:"/unit3/chapter22"},{id:"ch23",title:"Chapter 23: Audio-Visual Aids",path:"/unit3/chapter23"},{id:"ch24",title:"Chapter 24: The English Teacher",path:"/unit3/chapter24"}]},{id:"reference",title:"Reference Material",items:[{id:"ch25",title:"Speaking Skills",path:"/reference/speaking-skills"},{id:"ch26",title:"Proverbs for Everyday Conversation",path:"/reference/proverbs"},{id:"ch27",title:"Model Lesson Plans",path:"/reference/lesson-plans"}]}],Bt={title:"Teaching of English",author:"Dr. Mohini Sharma",publisher:"Akshar Publication",location:"Ahmedabad",firstEdition:"2023"},zg=()=>{const s=[];return jc.forEach(o=>{o.items.forEach(c=>{s.push({path:c.path,title:c.title,section:o.title})})}),s},Z0=s=>{const o=zg(),c=o.findIndex(r=>r.path===s);return{prev:c>0?o[c-1]:null,next:c<o.length-1?o[c+1]:null}};function F0({onMenuClick:s,onSearchClick:o,isSidebarOpen:c}){const{theme:r,toggleTheme:h}=y0();return v.jsx("nav",{"code-path":"src/components/Navbar.tsx:16:5",className:"sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-900/95 dark:border-slate-800 dark:supports-[backdrop-filter]:bg-slate-900/60",children:v.jsxs("div",{"code-path":"src/components/Navbar.tsx:17:7",className:"flex h-14 items-center px-4 lg:px-6",children:[v.jsxs("div",{"code-path":"src/components/Navbar.tsx:19:9",className:"flex items-center gap-2 lg:gap-4",children:[v.jsx("button",{"code-path":"src/components/Navbar.tsx:20:11",onClick:s,className:"inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-transparent p-0 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900","aria-label":c?"Close sidebar":"Open sidebar",children:c?v.jsx(jg,{"code-path":"src/components/Navbar.tsx:26:15",className:"h-4 w-4"}):v.jsx(H0,{"code-path":"src/components/Navbar.tsx:28:15",className:"h-4 w-4"})}),v.jsxs(qt,{"code-path":"src/components/Navbar.tsx:32:11",to:"/",className:"flex items-center gap-2",children:[v.jsx(ni,{"code-path":"src/components/Navbar.tsx:33:13",className:"h-5 w-5 text-indigo-600 dark:text-indigo-400"}),v.jsx("span",{"code-path":"src/components/Navbar.tsx:34:13",className:"hidden font-semibold text-slate-900 dark:text-slate-100 sm:inline-block",children:Bt.title})]})]}),v.jsx("div",{"code-path":"src/components/Navbar.tsx:41:9",className:"hidden lg:flex flex-1 items-center justify-center",children:v.jsxs("span",{"code-path":"src/components/Navbar.tsx:42:11",className:"text-sm text-slate-500 dark:text-slate-400",children:["by ",Bt.author]})}),v.jsxs("div",{"code-path":"src/components/Navbar.tsx:48:9",className:"flex items-center gap-2 ml-auto",children:[v.jsx("button",{"code-path":"src/components/Navbar.tsx:49:11",onClick:o,className:"inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-transparent p-0 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900","aria-label":"Search",children:v.jsx(yc,{"code-path":"src/components/Navbar.tsx:54:13",className:"h-4 w-4"})}),v.jsx("button",{"code-path":"src/components/Navbar.tsx:57:11",onClick:h,className:"inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-transparent p-0 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900","aria-label":r==="dark"?"Switch to light mode":"Switch to dark mode",children:r==="dark"?v.jsx(Y0,{"code-path":"src/components/Navbar.tsx:63:15",className:"h-4 w-4"}):v.jsx(I0,{"code-path":"src/components/Navbar.tsx:65:15",className:"h-4 w-4"})})]})]})})}function _g(s){var o,c,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var h=s.length;for(o=0;o<h;o++)s[o]&&(c=_g(s[o]))&&(r&&(r+=" "),r+=c)}else for(c in s)s[c]&&(r&&(r+=" "),r+=c);return r}function K0(){for(var s,o,c=0,r="",h=arguments.length;c<h;c++)(s=arguments[c])&&(o=_g(s))&&(r&&(r+=" "),r+=o);return r}const J0=(s,o)=>{const c=new Array(s.length+o.length);for(let r=0;r<s.length;r++)c[r]=s[r];for(let r=0;r<o.length;r++)c[s.length+r]=o[r];return c},P0=(s,o)=>({classGroupId:s,validator:o}),Lg=(s=new Map,o=null,c)=>({nextPart:s,validators:o,classGroupId:c}),zs="-",tg=[],W0="arbitrary..",$0=s=>{const o=tb(s),{conflictingClassGroups:c,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:g=>{if(g.startsWith("[")&&g.endsWith("]"))return eb(g);const y=g.split(zs),m=y[0]===""&&y.length>1?1:0;return Ug(y,m,o)},getConflictingClassGroupIds:(g,y)=>{if(y){const m=r[g],p=c[g];return m?p?J0(p,m):m:p||tg}return c[g]||tg}}},Ug=(s,o,c)=>{if(s.length-o===0)return c.classGroupId;const h=s[o],d=c.nextPart.get(h);if(d){const p=Ug(s,o+1,d);if(p)return p}const g=c.validators;if(g===null)return;const y=o===0?s.join(zs):s.slice(o).join(zs),m=g.length;for(let p=0;p<m;p++){const S=g[p];if(S.validator(y))return S.classGroupId}},eb=s=>s.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const o=s.slice(1,-1),c=o.indexOf(":"),r=o.slice(0,c);return r?W0+r:void 0})(),tb=s=>{const{theme:o,classGroups:c}=s;return ab(c,o)},ab=(s,o)=>{const c=Lg();for(const r in s){const h=s[r];zc(h,c,r,o)}return c},zc=(s,o,c,r)=>{const h=s.length;for(let d=0;d<h;d++){const g=s[d];nb(g,o,c,r)}},nb=(s,o,c,r)=>{if(typeof s=="string"){ib(s,o,c);return}if(typeof s=="function"){lb(s,o,c,r);return}sb(s,o,c,r)},ib=(s,o,c)=>{const r=s===""?o:Hg(o,s);r.classGroupId=c},lb=(s,o,c,r)=>{if(ob(s)){zc(s(r),o,c,r);return}o.validators===null&&(o.validators=[]),o.validators.push(P0(c,s))},sb=(s,o,c,r)=>{const h=Object.entries(s),d=h.length;for(let g=0;g<d;g++){const[y,m]=h[g];zc(m,Hg(o,y),c,r)}},Hg=(s,o)=>{let c=s;const r=o.split(zs),h=r.length;for(let d=0;d<h;d++){const g=r[d];let y=c.nextPart.get(g);y||(y=Lg(),c.nextPart.set(g,y)),c=y}return c},ob=s=>"isThemeGetter"in s&&s.isThemeGetter===!0,rb=s=>{if(s<1)return{get:()=>{},set:()=>{}};let o=0,c=Object.create(null),r=Object.create(null);const h=(d,g)=>{c[d]=g,o++,o>s&&(o=0,r=c,c=Object.create(null))};return{get(d){let g=c[d];if(g!==void 0)return g;if((g=r[d])!==void 0)return h(d,g),g},set(d,g){d in c?c[d]=g:h(d,g)}}},vc="!",ag=":",cb=[],ng=(s,o,c,r,h)=>({modifiers:s,hasImportantModifier:o,baseClassName:c,maybePostfixModifierPosition:r,isExternal:h}),ub=s=>{const{prefix:o,experimentalParseClassName:c}=s;let r=h=>{const d=[];let g=0,y=0,m=0,p;const S=h.length;for(let U=0;U<S;U++){const L=h[U];if(g===0&&y===0){if(L===ag){d.push(h.slice(m,U)),m=U+1;continue}if(L==="/"){p=U;continue}}L==="["?g++:L==="]"?g--:L==="("?y++:L===")"&&y--}const T=d.length===0?h:h.slice(m);let k=T,H=!1;T.endsWith(vc)?(k=T.slice(0,-1),H=!0):T.startsWith(vc)&&(k=T.slice(1),H=!0);const G=p&&p>m?p-m:void 0;return ng(d,H,k,G)};if(o){const h=o+ag,d=r;r=g=>g.startsWith(h)?d(g.slice(h.length)):ng(cb,!1,g,void 0,!0)}if(c){const h=r;r=d=>c({className:d,parseClassName:h})}return r},hb=s=>{const o=new Map;return s.orderSensitiveModifiers.forEach((c,r)=>{o.set(c,1e6+r)}),c=>{const r=[];let h=[];for(let d=0;d<c.length;d++){const g=c[d],y=g[0]==="[",m=o.has(g);y||m?(h.length>0&&(h.sort(),r.push(...h),h=[]),r.push(g)):h.push(g)}return h.length>0&&(h.sort(),r.push(...h)),r}},db=s=>({cache:rb(s.cacheSize),parseClassName:ub(s),sortModifiers:hb(s),...$0(s)}),fb=/\s+/,gb=(s,o)=>{const{parseClassName:c,getClassGroupId:r,getConflictingClassGroupIds:h,sortModifiers:d}=o,g=[],y=s.trim().split(fb);let m="";for(let p=y.length-1;p>=0;p-=1){const S=y[p],{isExternal:T,modifiers:k,hasImportantModifier:H,baseClassName:G,maybePostfixModifierPosition:U}=c(S);if(T){m=S+(m.length>0?" "+m:m);continue}let L=!!U,V=r(L?G.substring(0,U):G);if(!V){if(!L){m=S+(m.length>0?" "+m:m);continue}if(V=r(G),!V){m=S+(m.length>0?" "+m:m);continue}L=!1}const Y=k.length===0?"":k.length===1?k[0]:d(k).join(":"),F=H?Y+vc:Y,oe=F+V;if(g.indexOf(oe)>-1)continue;g.push(oe);const pe=h(V,L);for(let ye=0;ye<pe.length;++ye){const P=pe[ye];g.push(F+P)}m=S+(m.length>0?" "+m:m)}return m},pb=(...s)=>{let o=0,c,r,h="";for(;o<s.length;)(c=s[o++])&&(r=Gg(c))&&(h&&(h+=" "),h+=r);return h},Gg=s=>{if(typeof s=="string")return s;let o,c="";for(let r=0;r<s.length;r++)s[r]&&(o=Gg(s[r]))&&(c&&(c+=" "),c+=o);return c},mb=(s,...o)=>{let c,r,h,d;const g=m=>{const p=o.reduce((S,T)=>T(S),s());return c=db(p),r=c.cache.get,h=c.cache.set,d=y,y(m)},y=m=>{const p=r(m);if(p)return p;const S=gb(m,c);return h(m,S),S};return d=g,(...m)=>d(pb(...m))},yb=[],Fe=s=>{const o=c=>c[s]||yb;return o.isThemeGetter=!0,o},Ig=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Bg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,vb=/^\d+\/\d+$/,bb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Eb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Sb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Tb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ai=s=>vb.test(s),ce=s=>!!s&&!Number.isNaN(Number(s)),Fa=s=>!!s&&Number.isInteger(Number(s)),dc=s=>s.endsWith("%")&&ce(s.slice(0,-1)),ma=s=>bb.test(s),wb=()=>!0,Ab=s=>xb.test(s)&&!Eb.test(s),qg=()=>!1,Cb=s=>Sb.test(s),Nb=s=>Tb.test(s),Ob=s=>!K(s)&&!J(s),Rb=s=>si(s,Qg,qg),K=s=>Ig.test(s),mn=s=>si(s,Xg,Ab),fc=s=>si(s,zb,ce),ig=s=>si(s,Yg,qg),Mb=s=>si(s,Vg,Nb),Os=s=>si(s,Zg,Cb),J=s=>Bg.test(s),il=s=>oi(s,Xg),kb=s=>oi(s,_b),lg=s=>oi(s,Yg),Db=s=>oi(s,Qg),jb=s=>oi(s,Vg),Rs=s=>oi(s,Zg,!0),si=(s,o,c)=>{const r=Ig.exec(s);return r?r[1]?o(r[1]):c(r[2]):!1},oi=(s,o,c=!1)=>{const r=Bg.exec(s);return r?r[1]?o(r[1]):c:!1},Yg=s=>s==="position"||s==="percentage",Vg=s=>s==="image"||s==="url",Qg=s=>s==="length"||s==="size"||s==="bg-size",Xg=s=>s==="length",zb=s=>s==="number",_b=s=>s==="family-name",Zg=s=>s==="shadow",Lb=()=>{const s=Fe("color"),o=Fe("font"),c=Fe("text"),r=Fe("font-weight"),h=Fe("tracking"),d=Fe("leading"),g=Fe("breakpoint"),y=Fe("container"),m=Fe("spacing"),p=Fe("radius"),S=Fe("shadow"),T=Fe("inset-shadow"),k=Fe("text-shadow"),H=Fe("drop-shadow"),G=Fe("blur"),U=Fe("perspective"),L=Fe("aspect"),V=Fe("ease"),Y=Fe("animate"),F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],oe=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],pe=()=>[...oe(),J,K],ye=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto","contain","none"],X=()=>[J,K,m],de=()=>[ai,"full","auto",...X()],Ke=()=>[Fa,"none","subgrid",J,K],$e=()=>["auto",{span:["full",Fa,J,K]},Fa,J,K],ke=()=>[Fa,"auto",J,K],Ut=()=>["auto","min","max","fr",J,K],je=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ue=()=>["start","end","center","stretch","center-safe","end-safe"],M=()=>["auto",...X()],q=()=>[ai,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...X()],I=()=>[s,J,K],xe=()=>[...oe(),lg,ig,{position:[J,K]}],Te=()=>["no-repeat",{repeat:["","x","y","space","round"]}],E=()=>["auto","cover","contain",Db,Rb,{size:[J,K]}],z=()=>[dc,il,mn],B=()=>["","none","full",p,J,K],Q=()=>["",ce,il,mn],ne=()=>["solid","dashed","dotted","double"],re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],te=()=>[ce,dc,lg,ig],Je=()=>["","none",G,J,K],De=()=>["none",ce,J,K],Yt=()=>["none",ce,J,K],Ea=()=>[ce,J,K],Sa=()=>[ai,"full",...X()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ma],breakpoint:[ma],color:[wb],container:[ma],"drop-shadow":[ma],ease:["in","out","in-out"],font:[Ob],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ma],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ma],shadow:[ma],spacing:["px",ce],text:[ma],"text-shadow":[ma],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ai,K,J,L]}],container:["container"],columns:[{columns:[ce,K,J,y]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:pe()}],overflow:[{overflow:ye()}],"overflow-x":[{"overflow-x":ye()}],"overflow-y":[{"overflow-y":ye()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:de()}],"inset-x":[{"inset-x":de()}],"inset-y":[{"inset-y":de()}],start:[{start:de()}],end:[{end:de()}],top:[{top:de()}],right:[{right:de()}],bottom:[{bottom:de()}],left:[{left:de()}],visibility:["visible","invisible","collapse"],z:[{z:[Fa,"auto",J,K]}],basis:[{basis:[ai,"full","auto",y,...X()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ce,ai,"auto","initial","none",K]}],grow:[{grow:["",ce,J,K]}],shrink:[{shrink:["",ce,J,K]}],order:[{order:[Fa,"first","last","none",J,K]}],"grid-cols":[{"grid-cols":Ke()}],"col-start-end":[{col:$e()}],"col-start":[{"col-start":ke()}],"col-end":[{"col-end":ke()}],"grid-rows":[{"grid-rows":Ke()}],"row-start-end":[{row:$e()}],"row-start":[{"row-start":ke()}],"row-end":[{"row-end":ke()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Ut()}],"auto-rows":[{"auto-rows":Ut()}],gap:[{gap:X()}],"gap-x":[{"gap-x":X()}],"gap-y":[{"gap-y":X()}],"justify-content":[{justify:[...je(),"normal"]}],"justify-items":[{"justify-items":[...Ue(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ue()]}],"align-content":[{content:["normal",...je()]}],"align-items":[{items:[...Ue(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ue(),{baseline:["","last"]}]}],"place-content":[{"place-content":je()}],"place-items":[{"place-items":[...Ue(),"baseline"]}],"place-self":[{"place-self":["auto",...Ue()]}],p:[{p:X()}],px:[{px:X()}],py:[{py:X()}],ps:[{ps:X()}],pe:[{pe:X()}],pt:[{pt:X()}],pr:[{pr:X()}],pb:[{pb:X()}],pl:[{pl:X()}],m:[{m:M()}],mx:[{mx:M()}],my:[{my:M()}],ms:[{ms:M()}],me:[{me:M()}],mt:[{mt:M()}],mr:[{mr:M()}],mb:[{mb:M()}],ml:[{ml:M()}],"space-x":[{"space-x":X()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":X()}],"space-y-reverse":["space-y-reverse"],size:[{size:q()}],w:[{w:[y,"screen",...q()]}],"min-w":[{"min-w":[y,"screen","none",...q()]}],"max-w":[{"max-w":[y,"screen","none","prose",{screen:[g]},...q()]}],h:[{h:["screen","lh",...q()]}],"min-h":[{"min-h":["screen","lh","none",...q()]}],"max-h":[{"max-h":["screen","lh",...q()]}],"font-size":[{text:["base",c,il,mn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,J,fc]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",dc,K]}],"font-family":[{font:[kb,K,o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[h,J,K]}],"line-clamp":[{"line-clamp":[ce,"none",J,fc]}],leading:[{leading:[d,...X()]}],"list-image":[{"list-image":["none",J,K]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",J,K]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ne(),"wavy"]}],"text-decoration-thickness":[{decoration:[ce,"from-font","auto",J,mn]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[ce,"auto",J,K]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:X()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J,K]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J,K]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:xe()}],"bg-repeat":[{bg:Te()}],"bg-size":[{bg:E()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Fa,J,K],radial:["",J,K],conic:[Fa,J,K]},jb,Mb]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:z()}],"gradient-via-pos":[{via:z()}],"gradient-to-pos":[{to:z()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:B()}],"rounded-s":[{"rounded-s":B()}],"rounded-e":[{"rounded-e":B()}],"rounded-t":[{"rounded-t":B()}],"rounded-r":[{"rounded-r":B()}],"rounded-b":[{"rounded-b":B()}],"rounded-l":[{"rounded-l":B()}],"rounded-ss":[{"rounded-ss":B()}],"rounded-se":[{"rounded-se":B()}],"rounded-ee":[{"rounded-ee":B()}],"rounded-es":[{"rounded-es":B()}],"rounded-tl":[{"rounded-tl":B()}],"rounded-tr":[{"rounded-tr":B()}],"rounded-br":[{"rounded-br":B()}],"rounded-bl":[{"rounded-bl":B()}],"border-w":[{border:Q()}],"border-w-x":[{"border-x":Q()}],"border-w-y":[{"border-y":Q()}],"border-w-s":[{"border-s":Q()}],"border-w-e":[{"border-e":Q()}],"border-w-t":[{"border-t":Q()}],"border-w-r":[{"border-r":Q()}],"border-w-b":[{"border-b":Q()}],"border-w-l":[{"border-l":Q()}],"divide-x":[{"divide-x":Q()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Q()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ne(),"hidden","none"]}],"divide-style":[{divide:[...ne(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...ne(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ce,J,K]}],"outline-w":[{outline:["",ce,il,mn]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",S,Rs,Os]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",T,Rs,Os]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[ce,mn]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":Q()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",k,Rs,Os]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[ce,J,K]}],"mix-blend":[{"mix-blend":[...re(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":re()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ce]}],"mask-image-linear-from-pos":[{"mask-linear-from":te()}],"mask-image-linear-to-pos":[{"mask-linear-to":te()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":te()}],"mask-image-t-to-pos":[{"mask-t-to":te()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":te()}],"mask-image-r-to-pos":[{"mask-r-to":te()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":te()}],"mask-image-b-to-pos":[{"mask-b-to":te()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":te()}],"mask-image-l-to-pos":[{"mask-l-to":te()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":te()}],"mask-image-x-to-pos":[{"mask-x-to":te()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":te()}],"mask-image-y-to-pos":[{"mask-y-to":te()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[J,K]}],"mask-image-radial-from-pos":[{"mask-radial-from":te()}],"mask-image-radial-to-pos":[{"mask-radial-to":te()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":oe()}],"mask-image-conic-pos":[{"mask-conic":[ce]}],"mask-image-conic-from-pos":[{"mask-conic-from":te()}],"mask-image-conic-to-pos":[{"mask-conic-to":te()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:xe()}],"mask-repeat":[{mask:Te()}],"mask-size":[{mask:E()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",J,K]}],filter:[{filter:["","none",J,K]}],blur:[{blur:Je()}],brightness:[{brightness:[ce,J,K]}],contrast:[{contrast:[ce,J,K]}],"drop-shadow":[{"drop-shadow":["","none",H,Rs,Os]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",ce,J,K]}],"hue-rotate":[{"hue-rotate":[ce,J,K]}],invert:[{invert:["",ce,J,K]}],saturate:[{saturate:[ce,J,K]}],sepia:[{sepia:["",ce,J,K]}],"backdrop-filter":[{"backdrop-filter":["","none",J,K]}],"backdrop-blur":[{"backdrop-blur":Je()}],"backdrop-brightness":[{"backdrop-brightness":[ce,J,K]}],"backdrop-contrast":[{"backdrop-contrast":[ce,J,K]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ce,J,K]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ce,J,K]}],"backdrop-invert":[{"backdrop-invert":["",ce,J,K]}],"backdrop-opacity":[{"backdrop-opacity":[ce,J,K]}],"backdrop-saturate":[{"backdrop-saturate":[ce,J,K]}],"backdrop-sepia":[{"backdrop-sepia":["",ce,J,K]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":X()}],"border-spacing-x":[{"border-spacing-x":X()}],"border-spacing-y":[{"border-spacing-y":X()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",J,K]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ce,"initial",J,K]}],ease:[{ease:["linear","initial",V,J,K]}],delay:[{delay:[ce,J,K]}],animate:[{animate:["none",Y,J,K]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[U,J,K]}],"perspective-origin":[{"perspective-origin":pe()}],rotate:[{rotate:De()}],"rotate-x":[{"rotate-x":De()}],"rotate-y":[{"rotate-y":De()}],"rotate-z":[{"rotate-z":De()}],scale:[{scale:Yt()}],"scale-x":[{"scale-x":Yt()}],"scale-y":[{"scale-y":Yt()}],"scale-z":[{"scale-z":Yt()}],"scale-3d":["scale-3d"],skew:[{skew:Ea()}],"skew-x":[{"skew-x":Ea()}],"skew-y":[{"skew-y":Ea()}],transform:[{transform:[J,K,"","none","gpu","cpu"]}],"transform-origin":[{origin:pe()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Sa()}],"translate-x":[{"translate-x":Sa()}],"translate-y":[{"translate-y":Sa()}],"translate-z":[{"translate-z":Sa()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J,K]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":X()}],"scroll-mx":[{"scroll-mx":X()}],"scroll-my":[{"scroll-my":X()}],"scroll-ms":[{"scroll-ms":X()}],"scroll-me":[{"scroll-me":X()}],"scroll-mt":[{"scroll-mt":X()}],"scroll-mr":[{"scroll-mr":X()}],"scroll-mb":[{"scroll-mb":X()}],"scroll-ml":[{"scroll-ml":X()}],"scroll-p":[{"scroll-p":X()}],"scroll-px":[{"scroll-px":X()}],"scroll-py":[{"scroll-py":X()}],"scroll-ps":[{"scroll-ps":X()}],"scroll-pe":[{"scroll-pe":X()}],"scroll-pt":[{"scroll-pt":X()}],"scroll-pr":[{"scroll-pr":X()}],"scroll-pb":[{"scroll-pb":X()}],"scroll-pl":[{"scroll-pl":X()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J,K]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[ce,il,mn,fc]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Ub=mb(Lb);function Kt(...s){return Ub(K0(s))}function Hb({isOpen:s,onClose:o}){const c=Pt(),[r,h]=R.useState(["frontmatter","unit1"]),d=y=>{h(m=>m.includes(y)?m.filter(p=>p!==y):[...m,y])},g=y=>c.pathname===y;return v.jsxs(v.Fragment,{children:[s&&v.jsx("div",{"code-path":"src/components/Sidebar.tsx:30:9",className:"fixed inset-0 z-40 bg-black/50 lg:hidden",onClick:o}),v.jsx("aside",{"code-path":"src/components/Sidebar.tsx:37:7",className:Kt("fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-72 transform border-r bg-white transition-transform duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-900",s?"translate-x-0":"-translate-x-full lg:translate-x-0 lg:static"),children:v.jsxs("div",{"code-path":"src/components/Sidebar.tsx:43:9",className:"flex h-full flex-col",children:[v.jsxs("nav",{"code-path":"src/components/Sidebar.tsx:45:11",className:"flex-1 overflow-y-auto p-4",children:[v.jsxs(qt,{"code-path":"src/components/Sidebar.tsx:47:13",to:"/",onClick:o,className:Kt("flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",g("/")?"bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300":"text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"),children:[v.jsx(z0,{"code-path":"src/components/Sidebar.tsx:57:15",className:"h-4 w-4"}),"Home"]}),v.jsx("div",{"code-path":"src/components/Sidebar.tsx:61:13",className:"my-4 border-t dark:border-slate-800"}),v.jsx("div",{"code-path":"src/components/Sidebar.tsx:64:13",className:"space-y-2",children:jc.map(y=>v.jsxs("div",{"code-path":"src/components/Sidebar.tsx:66:17",children:[v.jsxs("button",{"code-path":"src/components/Sidebar.tsx:67:19",onClick:()=>d(y.id),className:"flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800",children:[v.jsxs("span",{"code-path":"src/components/Sidebar.tsx:71:21",className:"flex items-center gap-2",children:[v.jsx(ni,{"code-path":"src/components/Sidebar.tsx:72:23",className:"h-4 w-4 text-indigo-600 dark:text-indigo-400"}),y.title]}),r.includes(y.id)?v.jsx(A0,{"code-path":"src/components/Sidebar.tsx:76:23",className:"h-4 w-4 text-slate-500"}):v.jsx(ll,{"code-path":"src/components/Sidebar.tsx:78:23",className:"h-4 w-4 text-slate-500"})]}),r.includes(y.id)&&v.jsx("ul",{"code-path":"src/components/Sidebar.tsx:83:21",className:"ml-4 mt-1 space-y-1 border-l border-slate-200 pl-4 dark:border-slate-700",children:y.items.map(m=>v.jsx("li",{"code-path":"src/components/Sidebar.tsx:85:25",children:v.jsx(qt,{"code-path":"src/components/Sidebar.tsx:86:27",to:m.path,onClick:o,className:Kt("block rounded-md px-3 py-2 text-sm transition-colors",g(m.path)?"bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300":"text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"),children:m.title})},m.id))})]},y.id))})]}),v.jsxs("div",{"code-path":"src/components/Sidebar.tsx:108:11",className:"border-t p-4 dark:border-slate-800",children:[v.jsx("p",{"code-path":"src/components/Sidebar.tsx:109:13",className:"text-xs text-slate-500 dark:text-slate-400",children:Bt.title}),v.jsx("p",{"code-path":"src/components/Sidebar.tsx:112:13",className:"text-xs text-slate-400 dark:text-slate-500",children:Bt.author})]})]})})]})}function ba(s){return Array.isArray?Array.isArray(s):Jg(s)==="[object Array]"}function Gb(s){if(typeof s=="string")return s;let o=s+"";return o=="0"&&1/s==-1/0?"-0":o}function Ib(s){return s==null?"":Gb(s)}function Ft(s){return typeof s=="string"}function Fg(s){return typeof s=="number"}function Bb(s){return s===!0||s===!1||qb(s)&&Jg(s)=="[object Boolean]"}function Kg(s){return typeof s=="object"}function qb(s){return Kg(s)&&s!==null}function At(s){return s!=null}function gc(s){return!s.trim().length}function Jg(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const Yb="Incorrect 'index' type",Vb=s=>`Invalid value for key ${s}`,Qb=s=>`Pattern length exceeds max of ${s}.`,Xb=s=>`Missing ${s} property in key`,Zb=s=>`Property 'weight' in key '${s}' must be a positive integer`,sg=Object.prototype.hasOwnProperty;class Fb{constructor(o){this._keys=[],this._keyMap={};let c=0;o.forEach(r=>{let h=Pg(r);this._keys.push(h),this._keyMap[h.id]=h,c+=h.weight}),this._keys.forEach(r=>{r.weight/=c})}get(o){return this._keyMap[o]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Pg(s){let o=null,c=null,r=null,h=1,d=null;if(Ft(s)||ba(s))r=s,o=og(s),c=bc(s);else{if(!sg.call(s,"name"))throw new Error(Xb("name"));const g=s.name;if(r=g,sg.call(s,"weight")&&(h=s.weight,h<=0))throw new Error(Zb(g));o=og(g),c=bc(g),d=s.getFn}return{path:o,id:c,weight:h,src:r,getFn:d}}function og(s){return ba(s)?s:s.split(".")}function bc(s){return ba(s)?s.join("."):s}function Kb(s,o){let c=[],r=!1;const h=(d,g,y)=>{if(At(d))if(!g[y])c.push(d);else{let m=g[y];const p=d[m];if(!At(p))return;if(y===g.length-1&&(Ft(p)||Fg(p)||Bb(p)))c.push(Ib(p));else if(ba(p)){r=!0;for(let S=0,T=p.length;S<T;S+=1)h(p[S],g,y+1)}else g.length&&h(p,g,y+1)}};return h(s,Ft(o)?o.split("."):o,0),r?c:c[0]}const Jb={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Pb={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,o)=>s.score===o.score?s.idx<o.idx?-1:1:s.score<o.score?-1:1},Wb={location:0,threshold:.6,distance:100},$b={useExtendedSearch:!1,getFn:Kb,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ae={...Pb,...Jb,...Wb,...$b};const e1=/[^ ]+/g;function t1(s=1,o=3){const c=new Map,r=Math.pow(10,o);return{get(h){const d=h.match(e1).length;if(c.has(d))return c.get(d);const g=1/Math.pow(d,.5*s),y=parseFloat(Math.round(g*r)/r);return c.set(d,y),y},clear(){c.clear()}}}class _c{constructor({getFn:o=ae.getFn,fieldNormWeight:c=ae.fieldNormWeight}={}){this.norm=t1(c,3),this.getFn=o,this.isCreated=!1,this.setIndexRecords()}setSources(o=[]){this.docs=o}setIndexRecords(o=[]){this.records=o}setKeys(o=[]){this.keys=o,this._keysMap={},o.forEach((c,r)=>{this._keysMap[c.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Ft(this.docs[0])?this.docs.forEach((o,c)=>{this._addString(o,c)}):this.docs.forEach((o,c)=>{this._addObject(o,c)}),this.norm.clear())}add(o){const c=this.size();Ft(o)?this._addString(o,c):this._addObject(o,c)}removeAt(o){this.records.splice(o,1);for(let c=o,r=this.size();c<r;c+=1)this.records[c].i-=1}getValueForItemAtKeyId(o,c){return o[this._keysMap[c]]}size(){return this.records.length}_addString(o,c){if(!At(o)||gc(o))return;let r={v:o,i:c,n:this.norm.get(o)};this.records.push(r)}_addObject(o,c){let r={i:c,$:{}};this.keys.forEach((h,d)=>{let g=h.getFn?h.getFn(o):this.getFn(o,h.path);if(At(g)){if(ba(g)){let y=[];const m=[{nestedArrIndex:-1,value:g}];for(;m.length;){const{nestedArrIndex:p,value:S}=m.pop();if(At(S))if(Ft(S)&&!gc(S)){let T={v:S,i:p,n:this.norm.get(S)};y.push(T)}else ba(S)&&S.forEach((T,k)=>{m.push({nestedArrIndex:k,value:T})})}r.$[d]=y}else if(Ft(g)&&!gc(g)){let y={v:g,n:this.norm.get(g)};r.$[d]=y}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Wg(s,o,{getFn:c=ae.getFn,fieldNormWeight:r=ae.fieldNormWeight}={}){const h=new _c({getFn:c,fieldNormWeight:r});return h.setKeys(s.map(Pg)),h.setSources(o),h.create(),h}function a1(s,{getFn:o=ae.getFn,fieldNormWeight:c=ae.fieldNormWeight}={}){const{keys:r,records:h}=s,d=new _c({getFn:o,fieldNormWeight:c});return d.setKeys(r),d.setIndexRecords(h),d}function Ms(s,{errors:o=0,currentLocation:c=0,expectedLocation:r=0,distance:h=ae.distance,ignoreLocation:d=ae.ignoreLocation}={}){const g=o/s.length;if(d)return g;const y=Math.abs(r-c);return h?g+y/h:y?1:g}function n1(s=[],o=ae.minMatchCharLength){let c=[],r=-1,h=-1,d=0;for(let g=s.length;d<g;d+=1){let y=s[d];y&&r===-1?r=d:!y&&r!==-1&&(h=d-1,h-r+1>=o&&c.push([r,h]),r=-1)}return s[d-1]&&d-r>=o&&c.push([r,d-1]),c}const yn=32;function i1(s,o,c,{location:r=ae.location,distance:h=ae.distance,threshold:d=ae.threshold,findAllMatches:g=ae.findAllMatches,minMatchCharLength:y=ae.minMatchCharLength,includeMatches:m=ae.includeMatches,ignoreLocation:p=ae.ignoreLocation}={}){if(o.length>yn)throw new Error(Qb(yn));const S=o.length,T=s.length,k=Math.max(0,Math.min(r,T));let H=d,G=k;const U=y>1||m,L=U?Array(T):[];let V;for(;(V=s.indexOf(o,G))>-1;){let P=Ms(o,{currentLocation:V,expectedLocation:k,distance:h,ignoreLocation:p});if(H=Math.min(P,H),G=V+S,U){let X=0;for(;X<S;)L[V+X]=1,X+=1}}G=-1;let Y=[],F=1,oe=S+T;const pe=1<<S-1;for(let P=0;P<S;P+=1){let X=0,de=oe;for(;X<de;)Ms(o,{errors:P,currentLocation:k+de,expectedLocation:k,distance:h,ignoreLocation:p})<=H?X=de:oe=de,de=Math.floor((oe-X)/2+X);oe=de;let Ke=Math.max(1,k-de+1),$e=g?T:Math.min(k+de,T)+S,ke=Array($e+2);ke[$e+1]=(1<<P)-1;for(let je=$e;je>=Ke;je-=1){let Ue=je-1,M=c[s.charAt(Ue)];if(U&&(L[Ue]=+!!M),ke[je]=(ke[je+1]<<1|1)&M,P&&(ke[je]|=(Y[je+1]|Y[je])<<1|1|Y[je+1]),ke[je]&pe&&(F=Ms(o,{errors:P,currentLocation:Ue,expectedLocation:k,distance:h,ignoreLocation:p}),F<=H)){if(H=F,G=Ue,G<=k)break;Ke=Math.max(1,2*k-G)}}if(Ms(o,{errors:P+1,currentLocation:k,expectedLocation:k,distance:h,ignoreLocation:p})>H)break;Y=ke}const ye={isMatch:G>=0,score:Math.max(.001,F)};if(U){const P=n1(L,y);P.length?m&&(ye.indices=P):ye.isMatch=!1}return ye}function l1(s){let o={};for(let c=0,r=s.length;c<r;c+=1){const h=s.charAt(c);o[h]=(o[h]||0)|1<<r-c-1}return o}const _s=String.prototype.normalize?(s=>s.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(s=>s);class $g{constructor(o,{location:c=ae.location,threshold:r=ae.threshold,distance:h=ae.distance,includeMatches:d=ae.includeMatches,findAllMatches:g=ae.findAllMatches,minMatchCharLength:y=ae.minMatchCharLength,isCaseSensitive:m=ae.isCaseSensitive,ignoreDiacritics:p=ae.ignoreDiacritics,ignoreLocation:S=ae.ignoreLocation}={}){if(this.options={location:c,threshold:r,distance:h,includeMatches:d,findAllMatches:g,minMatchCharLength:y,isCaseSensitive:m,ignoreDiacritics:p,ignoreLocation:S},o=m?o:o.toLowerCase(),o=p?_s(o):o,this.pattern=o,this.chunks=[],!this.pattern.length)return;const T=(H,G)=>{this.chunks.push({pattern:H,alphabet:l1(H),startIndex:G})},k=this.pattern.length;if(k>yn){let H=0;const G=k%yn,U=k-G;for(;H<U;)T(this.pattern.substr(H,yn),H),H+=yn;if(G){const L=k-yn;T(this.pattern.substr(L),L)}}else T(this.pattern,0)}searchIn(o){const{isCaseSensitive:c,ignoreDiacritics:r,includeMatches:h}=this.options;if(o=c?o:o.toLowerCase(),o=r?_s(o):o,this.pattern===o){let U={isMatch:!0,score:0};return h&&(U.indices=[[0,o.length-1]]),U}const{location:d,distance:g,threshold:y,findAllMatches:m,minMatchCharLength:p,ignoreLocation:S}=this.options;let T=[],k=0,H=!1;this.chunks.forEach(({pattern:U,alphabet:L,startIndex:V})=>{const{isMatch:Y,score:F,indices:oe}=i1(o,U,L,{location:d+V,distance:g,threshold:y,findAllMatches:m,minMatchCharLength:p,includeMatches:h,ignoreLocation:S});Y&&(H=!0),k+=F,Y&&oe&&(T=[...T,...oe])});let G={isMatch:H,score:H?k/this.chunks.length:1};return H&&h&&(G.indices=T),G}}class Ka{constructor(o){this.pattern=o}static isMultiMatch(o){return rg(o,this.multiRegex)}static isSingleMatch(o){return rg(o,this.singleRegex)}search(){}}function rg(s,o){const c=s.match(o);return c?c[1]:null}class s1 extends Ka{constructor(o){super(o)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(o){const c=o===this.pattern;return{isMatch:c,score:c?0:1,indices:[0,this.pattern.length-1]}}}class o1 extends Ka{constructor(o){super(o)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(o){const r=o.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,o.length-1]}}}class r1 extends Ka{constructor(o){super(o)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(o){const c=o.startsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[0,this.pattern.length-1]}}}class c1 extends Ka{constructor(o){super(o)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(o){const c=!o.startsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[0,o.length-1]}}}class u1 extends Ka{constructor(o){super(o)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(o){const c=o.endsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[o.length-this.pattern.length,o.length-1]}}}class h1 extends Ka{constructor(o){super(o)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(o){const c=!o.endsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[0,o.length-1]}}}class ep extends Ka{constructor(o,{location:c=ae.location,threshold:r=ae.threshold,distance:h=ae.distance,includeMatches:d=ae.includeMatches,findAllMatches:g=ae.findAllMatches,minMatchCharLength:y=ae.minMatchCharLength,isCaseSensitive:m=ae.isCaseSensitive,ignoreDiacritics:p=ae.ignoreDiacritics,ignoreLocation:S=ae.ignoreLocation}={}){super(o),this._bitapSearch=new $g(o,{location:c,threshold:r,distance:h,includeMatches:d,findAllMatches:g,minMatchCharLength:y,isCaseSensitive:m,ignoreDiacritics:p,ignoreLocation:S})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(o){return this._bitapSearch.searchIn(o)}}class tp extends Ka{constructor(o){super(o)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(o){let c=0,r;const h=[],d=this.pattern.length;for(;(r=o.indexOf(this.pattern,c))>-1;)c=r+d,h.push([r,c-1]);const g=!!h.length;return{isMatch:g,score:g?0:1,indices:h}}}const xc=[s1,tp,r1,c1,h1,u1,o1,ep],cg=xc.length,d1=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,f1="|";function g1(s,o={}){return s.split(f1).map(c=>{let r=c.trim().split(d1).filter(d=>d&&!!d.trim()),h=[];for(let d=0,g=r.length;d<g;d+=1){const y=r[d];let m=!1,p=-1;for(;!m&&++p<cg;){const S=xc[p];let T=S.isMultiMatch(y);T&&(h.push(new S(T,o)),m=!0)}if(!m)for(p=-1;++p<cg;){const S=xc[p];let T=S.isSingleMatch(y);if(T){h.push(new S(T,o));break}}}return h})}const p1=new Set([ep.type,tp.type]);class m1{constructor(o,{isCaseSensitive:c=ae.isCaseSensitive,ignoreDiacritics:r=ae.ignoreDiacritics,includeMatches:h=ae.includeMatches,minMatchCharLength:d=ae.minMatchCharLength,ignoreLocation:g=ae.ignoreLocation,findAllMatches:y=ae.findAllMatches,location:m=ae.location,threshold:p=ae.threshold,distance:S=ae.distance}={}){this.query=null,this.options={isCaseSensitive:c,ignoreDiacritics:r,includeMatches:h,minMatchCharLength:d,findAllMatches:y,ignoreLocation:g,location:m,threshold:p,distance:S},o=c?o:o.toLowerCase(),o=r?_s(o):o,this.pattern=o,this.query=g1(this.pattern,this.options)}static condition(o,c){return c.useExtendedSearch}searchIn(o){const c=this.query;if(!c)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:h,ignoreDiacritics:d}=this.options;o=h?o:o.toLowerCase(),o=d?_s(o):o;let g=0,y=[],m=0;for(let p=0,S=c.length;p<S;p+=1){const T=c[p];y.length=0,g=0;for(let k=0,H=T.length;k<H;k+=1){const G=T[k],{isMatch:U,indices:L,score:V}=G.search(o);if(U){if(g+=1,m+=V,r){const Y=G.constructor.type;p1.has(Y)?y=[...y,...L]:y.push(L)}}else{m=0,g=0,y.length=0;break}}if(g){let k={isMatch:!0,score:m/g};return r&&(k.indices=y),k}}return{isMatch:!1,score:1}}}const Ec=[];function y1(...s){Ec.push(...s)}function Sc(s,o){for(let c=0,r=Ec.length;c<r;c+=1){let h=Ec[c];if(h.condition(s,o))return new h(s,o)}return new $g(s,o)}const Ls={AND:"$and",OR:"$or"},Tc={PATH:"$path",PATTERN:"$val"},wc=s=>!!(s[Ls.AND]||s[Ls.OR]),v1=s=>!!s[Tc.PATH],b1=s=>!ba(s)&&Kg(s)&&!wc(s),ug=s=>({[Ls.AND]:Object.keys(s).map(o=>({[o]:s[o]}))});function ap(s,o,{auto:c=!0}={}){const r=h=>{let d=Object.keys(h);const g=v1(h);if(!g&&d.length>1&&!wc(h))return r(ug(h));if(b1(h)){const m=g?h[Tc.PATH]:d[0],p=g?h[Tc.PATTERN]:h[m];if(!Ft(p))throw new Error(Vb(m));const S={keyId:bc(m),pattern:p};return c&&(S.searcher=Sc(p,o)),S}let y={children:[],operator:d[0]};return d.forEach(m=>{const p=h[m];ba(p)&&p.forEach(S=>{y.children.push(r(S))})}),y};return wc(s)||(s=ug(s)),r(s)}function x1(s,{ignoreFieldNorm:o=ae.ignoreFieldNorm}){s.forEach(c=>{let r=1;c.matches.forEach(({key:h,norm:d,score:g})=>{const y=h?h.weight:null;r*=Math.pow(g===0&&y?Number.EPSILON:g,(y||1)*(o?1:d))}),c.score=r})}function E1(s,o){const c=s.matches;o.matches=[],At(c)&&c.forEach(r=>{if(!At(r.indices)||!r.indices.length)return;const{indices:h,value:d}=r;let g={indices:h,value:d};r.key&&(g.key=r.key.src),r.idx>-1&&(g.refIndex=r.idx),o.matches.push(g)})}function S1(s,o){o.score=s.score}function T1(s,o,{includeMatches:c=ae.includeMatches,includeScore:r=ae.includeScore}={}){const h=[];return c&&h.push(E1),r&&h.push(S1),s.map(d=>{const{idx:g}=d,y={item:o[g],refIndex:g};return h.length&&h.forEach(m=>{m(d,y)}),y})}class ri{constructor(o,c={},r){this.options={...ae,...c},this.options.useExtendedSearch,this._keyStore=new Fb(this.options.keys),this.setCollection(o,r)}setCollection(o,c){if(this._docs=o,c&&!(c instanceof _c))throw new Error(Yb);this._myIndex=c||Wg(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(o){At(o)&&(this._docs.push(o),this._myIndex.add(o))}remove(o=()=>!1){const c=[];for(let r=0,h=this._docs.length;r<h;r+=1){const d=this._docs[r];o(d,r)&&(this.removeAt(r),r-=1,h-=1,c.push(d))}return c}removeAt(o){this._docs.splice(o,1),this._myIndex.removeAt(o)}getIndex(){return this._myIndex}search(o,{limit:c=-1}={}){const{includeMatches:r,includeScore:h,shouldSort:d,sortFn:g,ignoreFieldNorm:y}=this.options;let m=Ft(o)?Ft(this._docs[0])?this._searchStringList(o):this._searchObjectList(o):this._searchLogical(o);return x1(m,{ignoreFieldNorm:y}),d&&m.sort(g),Fg(c)&&c>-1&&(m=m.slice(0,c)),T1(m,this._docs,{includeMatches:r,includeScore:h})}_searchStringList(o){const c=Sc(o,this.options),{records:r}=this._myIndex,h=[];return r.forEach(({v:d,i:g,n:y})=>{if(!At(d))return;const{isMatch:m,score:p,indices:S}=c.searchIn(d);m&&h.push({item:d,idx:g,matches:[{score:p,value:d,norm:y,indices:S}]})}),h}_searchLogical(o){const c=ap(o,this.options),r=(y,m,p)=>{if(!y.children){const{keyId:T,searcher:k}=y,H=this._findMatches({key:this._keyStore.get(T),value:this._myIndex.getValueForItemAtKeyId(m,T),searcher:k});return H&&H.length?[{idx:p,item:m,matches:H}]:[]}const S=[];for(let T=0,k=y.children.length;T<k;T+=1){const H=y.children[T],G=r(H,m,p);if(G.length)S.push(...G);else if(y.operator===Ls.AND)return[]}return S},h=this._myIndex.records,d={},g=[];return h.forEach(({$:y,i:m})=>{if(At(y)){let p=r(c,y,m);p.length&&(d[m]||(d[m]={idx:m,item:y,matches:[]},g.push(d[m])),p.forEach(({matches:S})=>{d[m].matches.push(...S)}))}}),g}_searchObjectList(o){const c=Sc(o,this.options),{keys:r,records:h}=this._myIndex,d=[];return h.forEach(({$:g,i:y})=>{if(!At(g))return;let m=[];r.forEach((p,S)=>{m.push(...this._findMatches({key:p,value:g[S],searcher:c}))}),m.length&&d.push({idx:y,item:g,matches:m})}),d}_findMatches({key:o,value:c,searcher:r}){if(!At(c))return[];let h=[];if(ba(c))c.forEach(({v:d,i:g,n:y})=>{if(!At(d))return;const{isMatch:m,score:p,indices:S}=r.searchIn(d);m&&h.push({score:p,key:o,value:d,idx:g,norm:y,indices:S})});else{const{v:d,n:g}=c,{isMatch:y,score:m,indices:p}=r.searchIn(d);y&&h.push({score:m,key:o,value:d,norm:g,indices:p})}return h}}ri.version="7.1.0";ri.createIndex=Wg;ri.parseIndex=a1;ri.config=ae;ri.parseQuery=ap;y1(m1);const w1={id:"ch6",title:"Chapter 6: Psychology of Learning Foreign Language",content:`## (6) PSYCHOLOGY OF LEARNING FOREIGN LANGUAGE

English is a second language. It is a foreign language. Mother tongue is learnt by imitation. Mother tongue is caught but foreign language is taught to be caught. English is taught as a second language in India because it has become lingua-franca between speakers of different languages of the world. The English teacher should teach English language in such a way that the desired goal or learning may be achieved. There are different approaches for the teaching and learning process of language such a psychological, linguistic and Pedagogical principles. These principles of learning a language are based upon keen observation and research and experimentation. These principles are very helpful for the English teachers to raise the standard of English language. The psychological linguistic and pedagogical principles are described below.

### (1) The principle of motivation Interest and variety:

In the words of coren:

> "In the teaching of class-subjects the actual work of mind training is being performed. In early lessons in English, the weapon is being forged, the tools are being made with which the mind training to be performed. In English lessons, the teacher is hoeing the soil so that it may be able to receive the seed and give the sweet fruits."

It is a psychological principle; motivation is the core of learning. If a student is motivated by the teacher to learn English he can himself learn the language. If a child is to learn, he must be motivated. Motivation can be classified into two broad-heads.

- **Intrinsic Motivation (Internal motivation)** - Intrinsic or internal motivation is related to the internal nature of the individual emotions. The child is motivated by his own ambitions and desires.
- **Extrinsic Motivation (External motivation)** - But sometimes, the learner is not internally motivated, there would be the need of extrinsic or external motivation for the learner to achieve the particular objective of English teaching. External motivation is developed and created by the English teacher in the learner.

The purpose of motivation is to create a zeal to learn something new in language. A child learns mother tongues in a easier way because there is an internal desire of a child to express his feelings and thoughts in his mother tongue. But to learn a foreign language like English it is rather difficult on the part of English teacher to motivate him internally. This can be made easy by creating the extrinsic or external motivated which can be developed with the help of pictures, models, maps, charts and audio - visual aids.

Motivation, Interest and Variety are interrelated terms. There is no learning without interest and there is no interest without motivation and there is no motivation without varieties of different physical and mental activities concerning the teaching-learning process. Motivation is the superhighway to learning. Motivation involves need, desire and interest to react. When desire to earn money and desire to learn language brings the response and reaction in individual, motivation takes place. The attention span of the learner is short in our young boys and girls. The attention span can be enlarged by creating the interest among them through the varieties of audio visual-aids, activities and situations.

### (2) Habit formation:

Learning language is a skill of habit formation. Habit is the nature of man which makes the speech automatic and natural habit formation includes four types of habits:

- Habit of Listening
- Habit of Speaking
- Habit of Reading
- Habit of writing

Plamer says in his book "The principles of language study."

> "Language learning is essentially a habit forming process, a process during which we acquire new habits."

Apart from the habits of four skills of language the following habits should be formulated in the students by our English teachers:

- Habit of Imitating
- Habit of Repeating
- Habit of Spelling
- Habit of Correct use of language
- Habit of Correct Pronounciation
- Habit of Consulting dictionary
- Habit of Going to library
- Habit of reading of newspapers, journals, magazines and story books.

### (3) The principle of conductive environment OR The principle of exposure OR The principle of Naturalness and Imitation:

The child learns his mother tongue more rapidly because he is given a conductive environment for speaking the language and he is exposed to the environment where this language is spoken and written. He finds language exposure at home, school and society. The habits of listening, speaking, reading and writing all require the constant practice and exposure which is possible only in a conductive environment created by the family, school, neighborhood and society. In the beginning, the child learns his language from his mother, father, brother, sister and friends of his age.

John Hope Mason Says:

> "To make a language natural it must be spoken. It is fruitless to make language that exists only on the written pages."

### (4) The principle of linking with life:

Linking with subject matter with life is and of the important principles of any teaching. It is the duty of an English teacher that he should encourage his students to use the structures of English language in their daily life situations. The students come in the close contact with their teachers headmasters, classmates, playmates and get ample opportunities to express their ideas with them. All these experiences are the part of life experience of our students. School is the miniature of society. The teacher should create the real and life-like situations to convey the meaning of words and sentences of English language.

### (5) The principle of proper order:

The language learning is a skill which involves listening, speaking, reading and writing.

Listening is the language of Ear, speaking is the language of tongue, Reading is the language of eyes and writing is the language of Hand. Proper order of learning a language is:

1. Listening
2. Speaking
3. Reading
4. Writing

Mr. J.A. Bright proposed the following order of teaching which is based on his experiment on learning English as foreign language:

1. Listening
2. Speaking
3. Writing
4. Reading

### (6) The principal of Aural - Oral Approach OR The principle of Phonology:

The child learns speaking his mother tongue before reading and writing it. The beginners should be taught with speech lesson in which words and small sentences are to be heard and listened. Oral practice is the quickest way of learning a language.

E.G. Kiffson says:

> "Learning to speak a language is always the shortest road - to learning, to read and to write. Living languages should be taught as living speech, they should be taught orally."

Oral approach is based upon the psychological foundation which must be applied in the beginning stage. The following advantages of oral approach are:

1. Strengthens Listening and speaking skills.
2. Develop Reading and writing skills.
3. Mastering over function grammar.
4. It is an economical approach
5. Easy evaluation of the performance
6. Lays the foundation of correct pronunciation.
7. Promotes fluency of speech.

### (7) The principle of selection:

The total language materials cannot be taught within a short time. Therefore, there is the need of proper selection of language materials to be prescribed for the different grades. The criteria to choose a particular course for particular class is called the principle of selection. The learning materials should be selected keeping in view the following principles.

1. **Principle of fluency:** Words used frequently.
2. **Principle of Range:** The words and structure having a greater range should be selected.
3. **Principle of availability:** Words and structures of highest frequency that occur against and again in situation is said to be highly available.
4. **Principle of Coverage:** Words, which cover a large area of depicting their meaning should be selected for teaching the language.
5. **Principle of daily usefulness:** Words which are of daily use at home, in school, to talk on telephone, in society should be selected for teaching.

### (8) The principle of Gradation:

The order in which the language material is graded and classified to the learners is called the principle of gradation. Grading of language materials should be based on the following principles.

- Principles of simplicity
- Principle of familiarity
- Principle of teachability
- Principle of grouping
- Principle of sequencing.

### (9) The principle of learning by Doing:

A foreign language can be learnt quickly and easily by doing the language activities. Students should not be mere passive listeners. They may speak out the words and sentences, draw figures on the black-board, drill a structure, play a language game, recite the poem and collect various objects, use the different situations of class-room and out side class-room.

### (10) The principle of multiple line of approach:

According to this principle, an English teacher should adopt many approaches to reach the goal. The different approaches should be used as illustrated below:

#### Different- approaches of teaching language:

1. Social Approach
2. Functional Approach
3. Cultural Approach
4. Behavioral Approach
5. Phonetic Approach
6. Situational Approach
7. Bilingual Approach
8. Structural Approach
9. Oral Approach
10. Communicative

### (11) The principle of accuracy and correctness:

It means the words should be used in proper contexts and imparts the meaning relevant to it. The selection of words should be right. The use of words should be economical and expression should be impressive.`},A1={id:"ch7",title:"Chapter 7: General and Specific Objectives of Teaching English",content:`## (7) GENERAL AND SPECIFIC OBJECTIVES OF TEACHING ENGLISH

English language is gateway to the world culture. It is a major window on the modern world. It is great importance for an English teacher to know what are the aims of education which are to be achieved through his teaching on one hand and on the other hand, he should know what he is trying to achieve by teaching English. The knowledge of aims and objectives of education and teaching will enable him to decide his methods, techniques and approaches of teaching English. English is taught as a second language in India today.

### Definition of objectives:

Dr. B.S. Bloom has defined educational objectives as, "The desired goal or outcome at which instruction is aimed."

Suppose a teacher wants his pupils to improve hand writing. Here the outcome desired or goal aimed at its improvement of handwriting. The teacher will teach students in such a way that it will help in improving hand - writing. So, the goal or the desired outcome of improving hand - writing would be the objective of teaching.

### Characteristics of Good objectives:

- Objectives should be based on psychological principles. They should fulfill the needs and interests of students.
- They should be for the development of students,
- They should be helpful in acquiring democratic aims.
- They should be for changing or modifying students behavior.
- They should be tangible in ordinary circumstances,
- They should be useful.
- They should be in terms of changes expected in the pupil and not a duties of the teacher.
- Each statement should have only objective in it.
- They should be according to the age and mental level of the students.
- They should be helpful in changing the behavior of students.

### Objective of English Teaching:

L.A.C. strong once proclaimed, "For us who speak English. English is everything ... English is not a subject, English is our life." But this is not true for English in India, because here it is a foreign language. It is taught as a second or a third language in schools. Its teaching and learning in schools is inspired by one aim - the utilitarian aim. This aim can be achieved by acquiring practical command of English. Yet, clear cut objectives should be stated, so that good planning can be done and right type of methods and techniques of teaching can be adopted, as printed out by P. Gurrey, "The careful thinking out of a detailed and well defined objective for the lessons will do more than almost anything else 'to improve a teacher's work and to make it effective."

### Types of Objectives:

There are two types of objectives of English teaching, they are:

1. **Language development** - It is for the students of the classes V to IX. During this stage, the chief aim of English is language development. This means that English should be taught not as literature but as language. It has been said by Thompson and Coyatt: "To aim at literature is to miss the way to language. To aim at language is to pave the way to literature." Hence at this stage, language development should be the chief objective.
2. **Literary development**

[At B.Ed. level we have to aim at language development objective only]

We can divide the aims of teaching English into two:

1. **Comprehension** - (i) Oral Comprehension & (ii) Written comprehension
2. **Expression** - (i) Oral expression and (ii) Written expression

This means that teaching of English in India should have fourfold objectives of eng. language teaching.

1. **Semantic** - related to understanding.
2. **Phonetic** - deals, with sound, spelling, pronunciation.
3. **Graphic** - related to writing
4. **Phonetic Cum Graphic** - deals with reading.

These four aspects indicate the following four objectives of English language teaching. They are:

1. To enable the pupils to comprehend / understand spoken English.
2. To enable the pupils to comprehend / understand written English.
3. To enable pupils to express themselves orally in English i.e. to speak the language.
4. To enable pupils to express themselves in written English i.e. to write the language.

### SPECIFIC OBJECTIVES OF EACH GENERAL OBJECTIVES:

#### (1) To enable the pupils to comprehend / understand spoken English

Enable the students:

- to listen to oral presentation and understand its meaning adequately and quickly.
- to listen to the reading of others and understand its meaning adequately and quickly.
- to recognize English sounds without errors, to draw meaning from what is heard.
- to differentiate sounds of English words and the sounds of words of their mother tongue.
- to associate ideas with pictures or charts or objects in accordance with the contents of oral presentation.
- to follow the meaning of words and phrases in their context.
- to carry out instructions given orally.
- to describes statements to their speakers.
- to pick up the central idea of the poem read out.
- to put in order the ideas based on the reading material.
- to guess the meaning of words and phrases in context.
- to follow the meaning of structures.
- to establish chronological order of statement of narration maintaining a continuity of thoughts.
- to find out the central theme of the radio talk or recorded narration or a recitation or a televised programme.
- to understand the purpose of the speaker by noting his stresses and intonation patterns.

#### (2) To enable the pupils to comprehend written English

- To enable the pupils to understand the structures of different types of statements in written form.
- To enable the pupils to recognize words of English.
- To enable the pupils to follow the meaning of words and phrases in context.
- To enable the pupils to guess the meaning of words and phrases in context.
- To enable the pupils to follow the meaning of structures.
- To enable the pupils to recognize different shades and meanings of words.
- To enable the pupils to note and keep in view the punctuation marks while reading.
- To enable the pupils to associate ideas of reading material with a picture or a chart.
- To enable the pupils to understand the scheme of order of words in statement.
- To enable the pupils to understand the concept of time in English expression for e.g. half past seven, Quarter to Nine and so on.
- To enable the pupils to understand the structure of reported narration and voice.
- To enable the pupils to give the gist of the content material read.
- To enable the pupils to locate the sequence of ideas and facts.
- To enable the pupils to develop the dictionary habits.
- To enable the pupils to read with clear expression and correct pronunciation.
- To enable the pupils to read with ease and appropriate speed.

#### (3) To enable the pupils to express themselves orally in English (i.e. to speak English)

- To enable the pupils to reproduce the sounds of English letters and words correctly.
- To enable the pupils to pronounce with right intonation and stress.
- To enable the pupils to speak continuously with proper intonation.
- To enable the pupils to use appropriate words and sentence pattern.
- To enable the pupils to respond in speech as reaction to hearing.
- To enable the pupils to speak continuously with clarity of voice and ease of delivery.
- To enable the pupils to speak without making unnecessary sounds.
- To enable the pupils to speak without becoming too loud or too low i.e. without raising arc's voice too high or bringing it too low.
- To enable the pupils to speak with confidence.

#### (4) TO ENABLE PUPILS TO EXPRESS THEMSELVES IN WRITTEN ENGLISH

- To enable the pupils to form letters.
- To enable the pupils to write different scripts in a proper way.
- To enable the pupils to write proper capitalization.
- To enable the pupils to spell correctly.
- To enable the pupils to write in good handwriting, with proper slants and shapes
- To enable the pupils to keep proper spacing, proper direction of lines and proper paragraphing while writing.
- To enable the pupils to write with proper speed and ease of approach.
- To enable the pupils to use different types of sentences in writing.
- To enable the pupils to organise ideas into paragraphs.
- To enable the pupils to write answers keeping in mind the format of the questions.
- To enable the pupils to write different types of compositions.
- To enable the pupils to write simple description of objects and places.
- To enable the pupils to write with a proper posture and keep the proper position of the note book and the pen.

### OBJECTIVES OF A POEM:

- To read the poem with proper pronounciation, stress and rythem.
- To recite with the poem with proper rhythm, stress and intonation.
- To read and recite a poem with proper speed and pauses.
- To read and recite a poem with clarity of voice and case of delivery, with appropriate gestures, actions and feelings.
- To enable the pupils to understand the central idea of the poem.
- To enable the pupils to appreciate the poem.
- To enable the pupils to understand the message of the poem.
- To enable the pupils to develop the imagination.
- To enable the pupils to channelisation of emotional feelings.
- To enable the pupils to create an interest towards English literature.
- To enable the pupils to develop aesthetic sense.`},C1={id:"ch8",title:"Chapter 8: Planning",content:`## (8) PLANNING

### 8.1 Meaning and importance of planning:

Planning helps in the successful completion of any human activity. Careful planning of any enterprise leads to its ultimate success and benefits to the person or persons concerned. Teaching is one such important activity where detailed thinking and planning will yield handsome rewards in the form of effective learning by students.

Language being a skill subject needs careful handling as it is different from content subjects. The teacher should be familiar with the syllabus in English, which is laid out in the form of structures and vocabulary items.

Planning involves, firstly, the allocation of the prescribed lessons on units, term wise, month wise and week wise. Spread out evenly over the whole year. Secondly, lesson planning every day serves to clarify the ideas of the teacher on what to teach (the syllabus and the units) and how to teach it.

### 8.2 IMPORTANCE OF LESSON - PLAN FOR ENGLISH TEACHING

> "Planning is the preparation for the arrangement of strategies to be used, for achieving the desired goal based on some objectives."

Planning plays an important part in the successful execution of any task and assignment. The teacher knows about the syllabus, text books, supplementary books and other instructional materials and activities that he has to cover during the year. Planning will enable the teacher to break up the course in convenient units for each term, each week and each month.

Good lesson-plan is pre-requisite to a good and effective teaching. The teacher must know before hand what he is going to take up to teach in a particular period. A lesson-plan helps a teacher to define his aims and objectives, think of activities and techniques to realize them and the audio - visual aids to be used.

### 8.3 TASK ANALYSIS:

Over the cast fifty years there has been a great deal of research into the nature of language, the components of various languages, their similarities and differences and the methods of teaching them.

Language is a skill like painting or swimming and the more one practices it the better painter, swimmer or speaker he will be. All the skills whether it is swimming, painting or driving all are task oriented, some task is designed for their learning in the same way to make the pupils acquire the mastery on all the four skills, the teacher should design - the task accordingly.

The four skills are:
1. Listening (passive/receptive)
2. Speaking (active/productive)
3. Reading (passive/receptive)
4. Writing (active/productive)

### 8.4 CONTENT ANALYSIS

In teaching as a second language, one important consideration is how much language are we going to teach the students and in what order. In view of the limited time available for English i.e. 6 periods a week and 6 years of study. Obviously the quantity of language to be taught will be limited.

The most easily identifiable elements of the English language are its vocabulary and sentence patterns. While the sound system is learnt in the early stages by imitation and practice, a conscious attempt has to be made by the pupils in learning the words (lexical units) and sentences (syntactical items).

Content analysis is the analysis of the material content developed by the teacher to make the content a learning content covering all the skills.

### 8.5 TYPES OF PLANNING

Types of planning:
- **Year plan** - Covers all the aspects of English teaching of four skills LSRW along with schedule of remedial work.
- **Unit plan** - Each unit subdivided and planned accordingly by allotting the duration of teaching day wise, Week wise & month wise by determining objectives & techniques to achieve those objectives
- **Individual lesson plan** - Each lesson divided from the unit and prepared accordingly to learners age keeping in mind objectives, techniques, methods adopted, evaluation & Assignment

#### (A) YEAR PLAN:

It is the yearly calendar of all the units in the syllabus divided month wise, week wise and day wise. But this planning should be done after drawing the objectives of teaching English.

Along with the division of the units lesson wise, grammar, composition, language lab schedules, other language activities, excursions, trips, English movies schedule, seminar and workshop etc should also be planned by the English teacher.

#### (B) UNIT TEACHING PLAN

A unit teaching plan in English, language is different from 'a period plan teaching.' As the term indicates 'a period plan' considers the duration of one period which may be either 35 or 40 minutes and the teacher planning a 'period plan' has to concentrate only on those specific objectives which he may be able to achieve during the period.

The 'Unit plan' when subdivided, breaks into period plans. The 'unit plan' in English very much depends upon the principles adopted in the preparation of the textbook and also the objectives of English language teaching accepted by the state as well as the nation.

#### (C) INDIVIDUAL LESSON PLAN:

It has been rightly said that "a school day must be a succession of activities and experiences of great variety and stimulation, designed to develop pupils to a maximum in the times available."

Individual lesson plan is for to facilitate the teacher giving in it the details of learning activities. It helps the individual at his best when he thinks before he actually teaches. In the individual lesson-plan, the teaching point, its concept should be quite clear in the mind of the teacher.`},N1={id:"ch9",title:"Chapter 9: Techniques",content:`## (9) TECHNIQUES

It is common knowledge that children learn their mother tongue with ease as soon as they begin to speak, and long before their schooling begins. Even if some of them do not go to school later and remain illiterate, they pick up a lot of spoken language to manage their day-to-day affairs. Children learn their first language as easily as they learn to walk or to run.

Learning a language is not an intellectual activity like learning maths or physics. All normal children are seen to possess same innate skill in using language for their immediate purposes.

Planning and method generally includes what to teach and techniques includes how to teach. Method includes selection and gradation of the material to be taught while technique includes how the meaning and form are conveyed (presentation), how the planned material should be maximum utilized by the learners (practice), what is done to make the use of the language unconscious (review) and how the four skills learned by the learner are statistically responded by them (testing).

### 9.1 SKILL OF SET INDUCTION:

This is the first step of the teaching task on the part of the teaching task on the part of the teacher set induction is the pre-stage of presentation. Once the content is selected of the lesson properly bearing in mind the children's level, their linguistic needs and objectives of the lesson are clearly defined.

The teacher trainee should bear in mind the following points for set induction:
- We should always start with a positive statement because a positive statement creates a positive environment.
- Create the atmosphere of English while in the stage of set induction.
- Make pupils emotionally and mentally ready to get adjusted in the created atmosphere of English and get motivated to learn English.
- Take into consideration the previous knowledge or the experiences of the pupils and associate the lesson with it.
- We are dwelling in the technological era, if possible the use of computer or sides can work out wonderful in this stage of teaching.
- Fantasies have always motivated and enhanced the thinking of not only pupils but also of grown up.

### 9.2 Skill of presentation:

After set induction, is the next stage i.e. the presentation. In this stage the teacher introduces the lesson effectively and pupils are made ready emotionally and from knowledge point of view to receive the new lesson.

The presentation starts with model reading of the lesson. Reading aloud with stress, interaction appropriate pause is useful in the beginners classes.

Then there is silent reading of the lesson. The silent reading in later life is to develop speed of reading with comprehension.

**Principles of Presentation:**

1. **Principle of effective introduction** - The introduction part of a successful presentation should not just give an outline of the presentation. It should create interest in the students.
2. **Principle of well structured organized, psychologically and logically arranged body of presentation.**
3. **Principle of using language in situation** - The cardinal principle of learning a language is learning through meaningful contexts and situations.
4. **Principle of motivation** - During the teacher's demonstration this principle should also be included.
5. **Principle of effective conclusion** - The conclusion is the final attempt to make the pupils remember what is presented.

### 9.3 Skill of Practice:

Language learning is a skill like learning cycling, swimming. Palmer, in his book "The principles of language study" says, "Language learning is essentially a habit forming process, a process during which we acquire new habits, and these habits are formed by the adequate practice given by the teacher in the classroom."

The teacher of English should follow the structural approach, communicative, approach, situational approach and substitution tables for drilling, practice will expose the pupils to English language learning.

### 9.4 Review:

The teacher has performed his task of teaching, but what that - teacher has tested the pupils by doing evaluation, but what's about the teacher?

Review is not meant or the process of evaluation. It is a comprehensive tool to assess the success of the teaching efforts.

### 9.5 Testing

The main purpose of our teaching is to improve students performance in terms of speaking, reading and writing English in order to check students performance after a period of teaching he make use of certain testing techniques.

**What is testing?**

The process of gathering and interpreting evidence on changes in the behavior of all students as they progress through the unit, lesson or any other content is called testing. It is the device to obtain the required measurement in our teaching - learning process.

The ideal lesson plans always contains the standard test items based on the following:
- Each test item must be based on one of the objectives with which the teacher started teaching.
- Every test item must be valid. That is, it should test what it claims to test.
- Each test item should be reliable.
- Test item must discriminate students as widely as possible.
- Coverage is another characteristic of good testing.
- Each test item should be clear and in unambiguous instruction.`},O1={id:"ch10",title:"Chapter 10: Methods of Teaching English",content:`## (10) METHODS OF TEACHING ENGLISH

### 10.1 The Direct Method of teaching:

> "To teach English directly is to establish a direct and immediate association between experience and expression." - H. Champion

In Direct Method of teaching, the emphasis is laid on fluency of speech.

> "Learning to speak a language is always by far the shortest road to learning and to write." - Kittson

It was realized that the foreign language should be learnt as the child learns his or her own mother-tongue. If we teach English by making associations between word and experience of the learner without the help of the mother-tongue, that is called the Direct - or Natural method.

**Characteristics of Direct Method:**
1. It creates the direct bond between language and thoughts.
2. Sentence is the unit of language not the word.
3. Audio-visual aids are used to explain the meaning.
4. Stress is given on speech.
5. The use of mother tongue is not allowed
6. Grammar is taught indirectly and inductively
7. Questionnaire technique is adopted.
8. Emphasis is given on pronunciation.
9. Vocabulary is taught on the basis of selection and gradation.
10. The two maxims of teaching are followed: from simple to complex and from concrete to abstract.

**Advantages of Direct Method:**
- It promotes fluency of speech.
- It follows the principle of whole to part.
- It emphasizes on pronunciation of the language.
- It lays emphasis on oral approach of the language.
- It is directly related to the language skills: Listening, speaking, reading and writing.
- It promotes practice and oral drill.
- It increases the active vocabulary from passive vocabulary.
- It develops self confidence.

**Disadvantage of Direct Method:**
- If ignores reading and writing.
- It ignores the teaching of grammar.
- It ignores deep and understanding without the help of mother tongue.
- It is time - consuming.
- Only the intelligent children can be benefited by this method.
- The method is very expensive.
- Trained teachers are not available in this method in India.

### 10.2 BILINGUAL METHOD:

Bilingual Method is recently developed and invented by Prof. C. Dodson of Wales in this method; mother tongue is used to explain the meaning of words phrases, idioms, sentences structures and grammatical rules.

**Main characteristics of Bilingual Method of teaching:**
1. Use of mother-tongue is to explain the meanings of language materials at the initial stages.
2. Sentence is the unit of teaching.
3. Practice and drill in sentence pattern are done without the keep of mother tongue.
4. Word to word translation is done.
5. Mother tongue is used when it is necessary to explain the difficult area of language.

**Advantages of Bilingual Method:**
- It leads to accuracy of the teaching English language.
- It ensures fluency of speech.
- A lot of practice and drill are given in speaking English.
- It saves time in teaching English.
- It suits the average teachers and average students.
- It is less - costly and suited to all types of schools.

**Disadvantages of Bilingual Method:**
- It creates muddle in English teaching due to the use of mother-tongue.
- It may create confusion among students due to the contrast between the features of two language.
- It may be degenerated into translation Cum-grammar method.
- It develops an undesirable habit of language mix up.

### 10.3 STRUCTURAL APPROACH OF TEACHING A LANGUAGE:

Due to the efforts and researches done by British council of institute of education university of London and many others, this method came into existence. It is also known as 'New Approach' or 'Aural - Oral Approach'.

**Meaning of structural Approach:**

In this approach the basis of teaching is - structures or patterns of English.

Menon and Patel says: "The basic principles and techniques of the structural approach do not differ widely from those of the Direct-method and there are many teachers who still believe that it is the direct method with some additions and alterations necessitated by modern researches into foreign language learning."

**The meaning of Structure:**

Structure is nothing but a graded and classified grammar. It is an arrangement of words in certain order that conveys some meaning.

**TYPES OF STRUCTURES:**

1. **Sentence patterns** - French defines sentences pattern as, "the word pattern means a model from which many things of the same kind and shape can be made."
2. **Phrase Patterns** - Phrase is a word or group of words which express an idea without its being a sentence or clause.
3. **Idiomatic Structure** - In idiomatic structure, idioms are taught as a unit.
4. **Formula structure** - In formula structure words are used on certain occasions e.g. Good morning; Have a nice day; Thank you.

**Basic Principles of structural approach:**
- Importance of speech
- Forming language habit
- Situation teaching.
- Learners are Active Learners.
- Selection and gradation of structures.

**Advantages of structural approach:**
- Speech is emphasized.
- Language habit formation is stressed.
- Language materials are carefully selected and graded.
- Students become active because they learn language through activity.
- Language is taught in a meaningful situation.
- Oral aspect of the language is given more importance.
- It provides the opportunity for expression.

### 10.4 COMMUNICATIVE APPROACH:

The Communicative Approach is the recent and latest approach which is about ten year old. Teachers have known that their aim was to get students communicating successfully outside the class-room.

**Characteristics of Communicative Approach:**
- It lays emphasis on language in use rather than language as structure.
- It gives emphasis on the semantic objectives of the language.
- It lays less stress on grammar.
- The need of the learner is to communicate his feelings and thought to others.
- The approach is based upon the need analysis and planning to prepare communicative curricular and syllabuses.
- It provides the communicative opportunities where the students may be able to communicate their ideas through dialogue, discussions, debate.

### 10.5 SITUATIONAL APPROACH:

This approach basically tries to teach English as the child learns his own mother-tongue. The main stand points of another-tongue learning are:
- Every item of mother-tongue is learnt in a real situation.
- Whatever the child understands and expresses is connected with his own life.
- The situation in which the child learns the mother-tongue are repeated again and again.

**Main Characteristics:**
- The teacher introduces new words incidentally in the class.
- Many opportunities are offered to the learners to associate the meaning of new word with corresponding situations.
- Appropriate materials are used to create proper situations.
- Constant repetition is stressed.
- Several examples are given in a short period.

**Advantages of situational approach:**
- It creates the interest in teaching.
- It is action based approach.
- It is based upon learning by action and learning by doing.
- It emphasis on listening and hearing skill of language.

### 10.6 AN ECLECTIC APPROACH:

Probably most teachers of English language, nowadays, if asked, what method they use, would reply that their approach is 'eclectic' By this, they mean that they do not follow any single method, but rather that they use a selection of techniques.

Such an to the teaching of English has many advantages. For one thing, it is more flexible and can easily be adapted to suit a wide variety of teaching situation.

> "If it works, use it."

There is, of course, still the problem of knowing what we mean by 'success' Every language teacher should begin by considering what the aims of his pupils are, both in the short and in the long run, and judge success by whether these are achieved.`},R1={id:"ch11",title:"Chapter 11: Skills of Teaching English",content:`## (11) SKILLS OF TEACHING ENGLISH

### 11.1 SKILL OF INTRODUCING THE LESSON:

The success of teaching depends on the introduction of the lesson. If the lesson is introduced effectively, the students are motivated and they take interest in the lesson. The introduction should be brief, interesting and related to the previous knowledge of the students.

**Characteristics of Good Introduction:**
- It should be brief and to the point.
- It should create interest among students.
- It should be related to the previous knowledge.
- It should be relevant to the lesson.
- It should create a proper learning atmosphere.

### 11.2 SKILL OF QUESTIONING:

Questioning is an important skill of teaching. It helps to test the understanding of students and to maintain their attention. Good questions should be clear, precise and thought-provoking.

**Types of Questions:**
1. **Memory Questions** - Test recall of facts
2. **Understanding Questions** - Test comprehension
3. **Application Questions** - Test ability to apply knowledge
4. **Analysis Questions** - Test ability to analyze
5. **Synthesis Questions** - Test ability to create new ideas
6. **Evaluation Questions** - Test ability to judge

### 11.3 SKILL OF EXPLANATION:

Explanation is the art of making things clear to students. A good explanation should be simple, clear and logical. The teacher should use examples, illustrations and analogies to make the explanation effective.

**Characteristics of Good Explanation:**
- It should be clear and simple.
- It should be logical and systematic.
- It should be relevant to the topic.
- It should use appropriate examples.
- It should be at the level of students.

### 11.4 SKILL OF BLACKBOARD WRITING:

Blackboard writing is an important skill for teachers. It helps to present the content in a visual form and makes learning more effective.

**Principles of Good Blackboard Writing:**
- Writing should be legible and clear.
- Letters should be of appropriate size.
- There should be proper spacing between words and lines.
- Important points should be highlighted.
- The board should be well-organized.

### 11.5 SKILL OF STIMULATING VARIATION:

Variation in teaching helps to maintain students' attention and interest. The teacher should vary his voice, movement, and teaching methods to keep the class active.

**Types of Variation:**
- Variation in voice (loudness, pitch, speed)
- Variation in movement (gestures, position)
- Variation in teaching methods
- Variation in use of teaching aids

### 11.6 SKILL OF USING TEACHING AIDS:

Teaching aids make learning more effective and interesting. The teacher should know how to use different teaching aids effectively.

**Types of Teaching Aids:**
- Audio aids (tape recorder, radio)
- Visual aids (charts, pictures, maps)
- Audio-visual aids (films, TV, computer)

### 11.7 SKILL OF CLOSING THE LESSON:

Closing the lesson is as important as introducing it. A good closure helps to consolidate learning and prepare students for the next lesson.

**Characteristics of Good Closure:**
- It should summarize the main points.
- It should relate to the objectives.
- It should prepare students for the next lesson.
- It should give appropriate homework.
- It should create a sense of completion.`},M1={id:"ch12",title:"Chapter 12: Teaching of Listening",content:`## (12) TEACHING OF LISTENING

### 12.1 INTRODUCTION:

Listening is the first and most important skill in language learning. It is the foundation upon which all other language skills are built. Before a child can speak, read or write, he must first learn to listen and understand what he hears.

Listening is a receptive skill. It involves receiving and understanding the spoken language. Good listening skills are essential for effective communication.

### 12.2 IMPORTANCE OF LISTENING:

- Listening is the first language skill acquired by children.
- It provides the basis for speaking, reading and writing.
- It helps in acquiring correct pronunciation and intonation.
- It develops comprehension skills.
- It helps in vocabulary building.
- It improves concentration and attention.

### 12.3 TYPES OF LISTENING:

1. **Intensive Listening** - Listening for specific information
2. **Extensive Listening** - Listening for general understanding
3. **Listening for Pleasure** - Listening to stories, songs, etc.
4. **Listening for Information** - Listening to lectures, announcements
5. **Listening for Specific Details** - Listening to follow directions

### 12.4 TECHNIQUES OF TEACHING LISTENING:

**A. Pre-listening Activities:**
- Introduce the topic
- Discuss vocabulary
- Set the purpose for listening
- Create interest and motivation

**B. While-listening Activities:**
- Listen for main ideas
- Listen for specific details
- Answer questions
- Complete exercises
- Take notes

**C. Post-listening Activities:**
- Discuss the content
- Answer comprehension questions
- Summarize what was heard
- Role play or dramatize
- Write about what was heard

### 12.5 PRINCIPLES OF TEACHING LISTENING:

1. **Use authentic materials** - Use real-life listening situations
2. **Grade the difficulty** - Start with easy materials and progress to difficult ones
3. **Provide visual support** - Use pictures, gestures to aid understanding
4. **Set clear tasks** - Students should know what to listen for
5. **Repeat when necessary** - Allow multiple listenings
6. **Check comprehension** - Verify that students have understood

### 12.6 MATERIALS FOR TEACHING LISTENING:

- Recorded conversations
- Radio broadcasts
- Television programs
- Songs and rhymes
- Stories and poems
- Lectures and speeches
- Films and videos

### 12.7 COMMON PROBLEMS IN LISTENING:

- Unfamiliar vocabulary
- Fast speech
- Different accents
- Background noise
- Lack of concentration
- Anxiety and nervousness

### 12.8 SUGGESTIONS FOR IMPROVING LISTENING SKILLS:

- Provide regular listening practice
- Use varied listening materials
- Create a relaxed learning atmosphere
- Encourage active listening
- Teach listening strategies
- Give positive feedback`},k1={id:"ch13",title:"Chapter 13: Speech and Pronunciation",content:`## (13) SPEECH AND PRONUNCIATION

### 13.1 INTRODUCTION:

Speech is the oral expression of language. It is the most natural and common form of communication. Good pronunciation is essential for effective communication in English.

### 13.2 IMPORTANCE OF PRONUNCIATION:

- It makes speech intelligible
- It builds confidence in speaking
- It improves listening comprehension
- It helps in effective communication
- It creates a good impression

### 13.3 ELEMENTS OF PRONUNCIATION:

**A. Sounds (Phonemes):**
- Vowels (pure vowels and diphthongs)
- Consonants

**B. Stress:**
- Word stress
- Sentence stress

**C. Intonation:**
- Rising tone
- Falling tone
- Rising-falling tone
- Falling-rising tone

**D. Rhythm:**
- Strong and weak beats
- Pauses and junctures

### 13.4 COMMON PRONUNCIATION PROBLEMS FOR INDIAN LEARNERS:

1. **Confusion between /v/ and /w/**
2. **Difficulty with /θ/ and /ð/ sounds**
3. **Problems with final consonants**
4. **Incorrect vowel sounds**
5. **Wrong word stress**
6. **Flat intonation**

### 13.5 TECHNIQUES OF TEACHING PRONUNCIATION:

**A. Imitation:**
- Teacher models the sound
- Students repeat after the teacher
- Use of audio recordings

**B. Explanation:**
- Describe how the sound is made
- Show the position of lips, tongue, teeth
- Use diagrams and charts

**C. Practice:**
- Minimal pair exercises
- Tongue twisters
- Drills and repetition

**D. Correction:**
- Immediate correction
- Self-correction
- Peer correction

### 13.6 PRINCIPLES OF TEACHING PRONUNCIATION:

1. Teach pronunciation from the beginning
2. Focus on sounds that cause difficulty
3. Use contrastive analysis
4. Provide plenty of practice
5. Use visual aids
6. Encourage self-monitoring

### 13.7 ACTIVITIES FOR PRONUNCIATION PRACTICE:

- Listening and repeating
- Minimal pair exercises
- Tongue twisters
- Songs and rhymes
- Poetry recitation
- Dialogue practice
- Role play`},D1={id:"ch14",title:"Chapter 14: Teaching of Reading",content:`## (14) TEACHING OF READING

### 14.1 INTRODUCTION:

Reading is one of the four basic language skills. It is a receptive skill that involves decoding written symbols to get meaning. Reading is an important tool for learning and acquiring knowledge.

### 14.2 IMPORTANCE OF READING:

- It helps in acquiring knowledge
- It develops language skills
- It improves vocabulary
- It enhances comprehension
- It develops critical thinking
- It provides pleasure and enjoyment

### 14.3 TYPES OF READING:

1. **Intensive Reading** - Detailed reading for complete understanding
2. **Extensive Reading** - Reading large quantities for general understanding
3. **Skimming** - Quick reading to get the main idea
4. **Scanning** - Quick reading to find specific information
5. **Critical Reading** - Reading with analysis and evaluation

### 14.4 READING SKILLS:

**A. Word Recognition:**
- Recognizing words quickly and accurately
- Using context clues
- Using word attack skills

**B. Comprehension:**
- Understanding main ideas
- Understanding details
- Making inferences
- Drawing conclusions

**C. Speed:**
- Reading at an appropriate speed
- Adjusting speed according to purpose

### 14.5 TECHNIQUES OF TEACHING READING:

**A. Pre-reading Activities:**
- Introduce the topic
- Discuss vocabulary
- Ask prediction questions
- Set the purpose for reading

**B. While-reading Activities:**
- Silent reading
- Reading aloud
- Answering questions
- Completing exercises
- Taking notes

**C. Post-reading Activities:**
- Discussion
- Comprehension questions
- Summary writing
- Vocabulary exercises
- Extension activities

### 14.6 PRINCIPLES OF TEACHING READING:

1. Select appropriate materials
2. Grade the difficulty
3. Set clear purposes
4. Teach reading strategies
5. Provide varied activities
6. Encourage extensive reading

### 14.7 COMMON READING PROBLEMS:

- Word-by-word reading
- Vocalization (moving lips while reading)
- Regression (going back to re-read)
- Limited vocabulary
- Poor comprehension
- Slow reading speed

### 14.8 SUGGESTIONS FOR IMPROVING READING:

- Provide regular practice
- Use varied materials
- Teach vocabulary systematically
- Develop comprehension skills
- Encourage silent reading
- Set up a reading program`},j1={id:"ch15",title:"Chapter 15: Teaching of Writing",content:`## (15) TEACHING OF WRITING

### 15.1 INTRODUCTION:

Writing is a productive skill that involves expressing thoughts and ideas in written form. It is the most difficult of the four language skills as it requires the integration of many sub-skills.

### 15.2 IMPORTANCE OF WRITING:

- It is a means of communication
- It helps in learning
- It develops thinking skills
- It provides a record
- It is needed for examinations
- It is required in professional life

### 15.3 SUB-SKILLS OF WRITING:

**A. Mechanical Skills:**
- Letter formation
- Spelling
- Punctuation
- Capitalization

**B. Organizational Skills:**
- Sentence construction
- Paragraph writing
- Text organization

**C. Grammatical Skills:**
- Correct grammar
- Appropriate vocabulary
- Proper style

### 15.4 TYPES OF WRITING:

1. **Controlled Writing** - Guided writing with strict limits
2. **Guided Writing** - Writing with some guidance
3. **Free Writing** - Writing without restrictions

### 15.5 STAGES OF TEACHING WRITING:

**A. Pre-writing:**
- Discuss the topic
- Brainstorm ideas
- Organize thoughts
- Plan the writing

**B. While-writing:**
- Write the first draft
- Focus on content
- Don't worry about mistakes

**C. Post-writing:**
- Revise and edit
- Check for errors
- Rewrite if necessary
- Share with others

### 15.6 TECHNIQUES OF TEACHING WRITING:

- Copy writing
- Dictation
- Completion exercises
- Transformation exercises
- Guided composition
- Free composition
- Creative writing

### 15.7 PRINCIPLES OF TEACHING WRITING:

1. Start with controlled writing
2. Progress gradually to free writing
3. Provide meaningful contexts
4. Give clear instructions
5. Allow time for planning
6. Encourage revision
7. Provide constructive feedback

### 15.8 TYPES OF COMPOSITION:

- Narrative writing
- Descriptive writing
- Expository writing
- Argumentative writing
- Letter writing
- Report writing
- Essay writing`},z1={id:"ch16",title:"Chapter 16: Teaching of Grammar",content:`## (16) TEACHING OF GRAMMAR

### 16.1 INTRODUCTION:

Grammar is the system of rules that governs the structure of a language. It provides the framework for using language correctly and effectively.

### 16.2 IMPORTANCE OF GRAMMAR:

- It helps in using language correctly
- It improves accuracy
- It develops language awareness
- It facilitates learning of other skills
- It builds confidence

### 16.3 APPROACHES TO TEACHING GRAMMAR:

**A. Deductive Approach:**
- Rule is presented first
- Examples are given
- Students apply the rule

**B. Inductive Approach:**
- Examples are presented first
- Students discover the rule
- Rule is stated and practiced

### 16.4 METHODS OF TEACHING GRAMMAR:

1. **Grammar-Translation Method** - Learning rules and translating sentences
2. **Direct Method** - Learning grammar through use
3. **Structural Method** - Learning through patterns and structures
4. **Communicative Method** - Learning through communication

### 16.5 TECHNIQUES OF TEACHING GRAMMAR:

- Explanation and illustration
- Examples and non-examples
- Drills and exercises
- Games and activities
- Error correction
- Contextual practice

### 16.6 PRINCIPLES OF TEACHING GRAMMAR:

1. Teach grammar in context
2. Focus on meaningful practice
3. Use authentic examples
4. Provide plenty of practice
5. Correct errors appropriately
6. Review and recycle

### 16.7 COMMON GRAMMAR ITEMS TO TEACH:

- Parts of speech
- Tenses
- Articles
- Prepositions
- Active and Passive voice
- Direct and Indirect speech
- Conditional sentences
- Question formation

### 16.8 SUGGESTIONS FOR EFFECTIVE GRAMMAR TEACHING:

- Make it meaningful and relevant
- Use clear explanations
- Provide varied practice
- Use visual aids
- Encourage discovery learning
- Integrate with other skills`},_1={id:"ch17",title:"Chapter 17: Teaching of Prose and Poetry",content:`## (17) TEACHING OF PROSE AND POETRY

### 17.1 TEACHING OF PROSE:

Prose is the ordinary form of written or spoken language. It is the most common form of language used in everyday communication.

**Objectives of Teaching Prose:**
- To develop reading comprehension
- To increase vocabulary
- To improve language skills
- To develop appreciation of literature
- To develop critical thinking

**Steps in Teaching Prose:**

1. **Pre-reading:**
   - Introduce the topic
   - Discuss new vocabulary
   - Create interest

2. **While-reading:**
   - Silent reading
   - Reading aloud
   - Comprehension questions

3. **Post-reading:**
   - Discussion
   - Vocabulary work
   - Grammar exercises
   - Writing activities

**Types of Prose Passages:**
- Narrative prose
- Descriptive prose
- Expository prose
- Biographical prose
- Scientific prose

### 17.2 TEACHING OF POETRY:

Poetry is a form of literature that uses aesthetic and rhythmic qualities of language to evoke meanings.

**Objectives of Teaching Poetry:**
- To develop appreciation of poetry
- To enjoy the beauty of language
- To develop imagination
- To express emotions
- To develop aesthetic sense

**Steps in Teaching Poetry:**

1. **Introduction:**
   - Create interest
   - Discuss the poet
   - Set the mood

2. **First Reading:**
   - Teacher reads the poem
   - Students listen for enjoyment

3. **Second Reading:**
   - Students read silently
   - Understand the meaning

4. **Analysis:**
   - Discuss theme and message
   - Analyze poetic devices
   - Study vocabulary

5. **Appreciation:**
   - Discuss the beauty of the poem
   - Express personal response
   - Recite the poem

**Elements of Poetry:**
- Rhythm and meter
- Rhyme scheme
- Imagery
- Figures of speech
- Theme and message`},L1={id:"ch18",title:"Chapter 18: Teaching of Composition",content:`## (18) TEACHING OF COMPOSITION

### 18.1 INTRODUCTION:

Composition is the act of creating written work. It involves expressing ideas in an organized and coherent manner. Teaching composition is one of the most important tasks of the English teacher.

### 18.2 OBJECTIVES OF TEACHING COMPOSITION:

- To develop the ability to express ideas in writing
- To organize thoughts logically
- To use language accurately and appropriately
- To develop creativity
- To prepare students for examinations

### 18.3 TYPES OF COMPOSITION:

**A. Narrative Composition:**
- Story writing
- Autobiography
- Biography
- Diary writing

**B. Descriptive Composition:**
- Description of persons
- Description of places
- Description of objects
- Description of events

**C. Expository Composition:**
- Essay writing
- Report writing
- Article writing
- Paragraph writing

**D. Reflective Composition:**
- Personal essays
- Opinion pieces
- Critical essays

### 18.4 STAGES OF COMPOSITION WRITING:

**A. Pre-writing Stage:**
- Selecting the topic
- Gathering ideas
- Organizing ideas
- Making an outline

**B. Writing Stage:**
- Writing the first draft
- Developing ideas
- Using appropriate language

**C. Revising Stage:**
- Checking content
- Improving organization
- Enhancing style

**D. Editing Stage:**
- Checking grammar
- Checking spelling
- Checking punctuation

### 18.5 TECHNIQUES OF TEACHING COMPOSITION:

- Controlled composition
- Guided composition
- Free composition
- Picture composition
- Expansion of ideas
- Precis writing
- Essay writing

### 18.6 PRINCIPLES OF TEACHING COMPOSITION:

1. Start with simple tasks
2. Provide meaningful topics
3. Give clear instructions
4. Allow time for planning
5. Encourage creativity
6. Provide constructive feedback
7. Encourage revision

### 18.7 COMMON PROBLEMS IN COMPOSITION:

- Lack of ideas
- Poor organization
- Limited vocabulary
- Grammatical errors
- Spelling mistakes
- Poor handwriting

### 18.8 SUGGESTIONS FOR IMPROVING COMPOSITION:

- Provide regular practice
- Use varied topics
- Teach planning techniques
- Build vocabulary
- Teach grammar systematically
- Encourage reading`},U1={id:"ch19",title:"Chapter 19: Evaluation in English",content:`## (19) EVALUATION IN ENGLISH

### 19.1 INTRODUCTION:

Evaluation is the systematic process of determining the extent to which educational objectives are achieved. It involves measuring and judging the performance of students.

### 19.2 PURPOSE OF EVALUATION:

- To assess student learning
- To diagnose learning difficulties
- To provide feedback to students
- To improve teaching methods
- To certify student achievement
- To motivate students

### 19.3 TYPES OF EVALUATION:

**A. Formative Evaluation:**
- Conducted during the teaching-learning process
- Provides continuous feedback
- Helps in improving instruction
- Examples: quizzes, class tests, oral questions

**B. Summative Evaluation:**
- Conducted at the end of a course or unit
- Measures overall achievement
- Used for grading and certification
- Examples: final examinations, term-end tests

**C. Diagnostic Evaluation:**
- Identifies learning difficulties
- Helps in remedial teaching
- Conducted before instruction

**D. Placement Evaluation:**
- Determines student's level
- Helps in grouping students
- Conducted at the beginning

### 19.4 CHARACTERISTICS OF GOOD EVALUATION:

1. **Validity** - Measures what it claims to measure
2. **Reliability** - Gives consistent results
3. **Objectivity** - Free from personal bias
4. **Comprehensiveness** - Covers all important aspects
5. **Practicability** - Easy to administer and score

### 19.5 TOOLS OF EVALUATION:

- Written tests
- Oral tests
- Practical tests
- Assignments
- Projects
- Observation
- Self-assessment
- Peer assessment

### 19.6 EVALUATION OF DIFFERENT SKILLS:

**A. Listening:**
- Dictation
- Listening comprehension tests
- Following instructions

**B. Speaking:**
- Oral tests
- Interview
- Group discussion
- Role play

**C. Reading:**
- Reading comprehension tests
- Silent reading tests
- Oral reading tests

**D. Writing:**
- Essay tests
- Composition writing
- Dictation
- Grammar tests`},H1={id:"ch20",title:"Chapter 20: Types of Tests",content:`## (20) TYPES OF TESTS

### 20.1 INTRODUCTION:

A test is a systematic procedure for measuring a sample of behavior. Tests are important tools for evaluating student learning in English.

### 20.2 TYPES OF TEST ITEMS:

**A. Objective Type Tests:**

1. **Multiple Choice Questions:**
   - Consist of a stem and options
   - One correct answer
   - Easy to score

2. **True-False Questions:**
   - Simple to construct
   - Quick to answer
   - Can test factual knowledge

3. **Matching Questions:**
   - Two columns to be matched
   - Tests relationships
   - Efficient use of time

4. **Fill in the Blanks:**
   - Tests specific knowledge
   - Can test vocabulary or grammar

**B. Subjective Type Tests:**

1. **Essay Questions:**
   - Allow free expression
   - Test higher-order thinking
   - Require detailed answers

2. **Short Answer Questions:**
   - Brief responses required
   - Test specific knowledge
   - Easy to construct

### 20.3 CHARACTERISTICS OF A GOOD TEST:

1. **Validity** - Measures what it should measure
2. **Reliability** - Produces consistent results
3. **Discrimination** - Distinguishes between good and poor students
4. **Difficulty** - Appropriate level of difficulty
5. **Practicability** - Easy to administer and score

### 20.4 STEPS IN TEST CONSTRUCTION:

1. Plan the test
2. Prepare the test items
3. Review and revise items
4. Prepare scoring key
5. Try out the test
6. Analyze and improve

### 20.5 PRINCIPLES OF TESTING:

- Test should match objectives
- Instructions should be clear
- Items should be unambiguous
- Time should be adequate
- Scoring should be objective
- Results should be interpreted properly`},G1={id:"ch21",title:"Chapter 21: Diagnostic Test and Remedial Teaching",content:`## (21) DIAGNOSTIC TEST AND REMEDIAL TEACHING

### 21.1 DIAGNOSTIC TEST:

A diagnostic test is designed to identify specific learning difficulties and weaknesses of students. It helps in planning remedial instruction.

**Characteristics of Diagnostic Tests:**
- Comprehensive coverage of content
- Detailed analysis of errors
- Identification of specific weaknesses
- Helps in planning remedial work

**Purpose of Diagnostic Tests:**
- To identify learning difficulties
- To find causes of poor performance
- To plan remedial teaching
- To prevent failure

### 21.2 TYPES OF DIAGNOSTIC TESTS:

- Diagnostic reading tests
- Diagnostic spelling tests
- Diagnostic grammar tests
- Diagnostic vocabulary tests

### 21.3 STEPS IN DIAGNOSTIC TESTING:

1. Identify students with difficulties
2. Administer diagnostic tests
3. Analyze test results
4. Identify specific weaknesses
5. Plan remedial instruction

### 21.4 REMEDIAL TEACHING:

Remedial teaching is specialized instruction designed to help students overcome specific learning difficulties identified through diagnostic testing.

**Principles of Remedial Teaching:**

1. **Individualized Instruction:**
   - Focus on individual needs
   - Adapt to learning style
   - Provide personal attention

2. **Starting from Known:**
   - Begin with what student knows
   - Build on strengths
   - Progress gradually

3. **Planned and Systematic:**
   - Have clear objectives
   - Follow a sequence
   - Monitor progress

4. **Motivating and Encouraging:**
   - Build confidence
   - Provide success experiences
   - Give positive reinforcement

### 21.5 TECHNIQUES OF REMEDIAL TEACHING:

- Individual tutoring
- Small group instruction
- Peer tutoring
- Use of audio-visual aids
- Extra practice and drill
- Modified assignments

### 21.6 ROLE OF THE TEACHER:

- Identify students needing help
- Diagnose specific difficulties
- Plan appropriate remedial work
- Provide individual attention
- Monitor progress
- Encourage and motivate`},I1={id:"ch22",title:"Chapter 22: Textbook Evaluation",content:`## (22) TEXTBOOK EVALUATION

### 22.1 INTRODUCTION:

The textbook is the most important teaching material in the classroom. A good textbook can make teaching and learning more effective. Therefore, careful evaluation of textbooks is essential.

### 22.2 CRITERIA FOR TEXTBOOK EVALUATION:

**A. Content Criteria:**

1. **Coverage:**
   - Covers the syllabus adequately
   - Includes all required topics
   - Balanced treatment of content

2. **Accuracy:**
   - Content is correct
   - Information is up-to-date
   - Free from errors

3. **Appropriateness:**
   - Suitable for the age group
   - Matches students' level
   - Relevant to students' needs

**B. Language Criteria:**

1. **Clarity:**
   - Language is clear and simple
   - Easy to understand
   - Appropriate vocabulary

2. **Correctness:**
   - Grammatically correct
   - Proper usage
   - Standard English

**C. Presentation Criteria:**

1. **Organization:**
   - Logical sequence
   - Clear structure
   - Easy to follow

2. **Physical Features:**
   - Good print quality
   - Appropriate font size
   - Attractive layout

3. **Illustrations:**
   - Relevant pictures
   - Clear diagrams
   - Attractive colors

**D. Pedagogical Criteria:**

1. **Exercises:**
   - Varied and adequate
   - Progressive difficulty
   - Test understanding

2. **Activities:**
   - Interesting and relevant
   - Promote active learning
   - Develop skills

### 22.3 STEPS IN TEXTBOOK EVALUATION:

1. Define evaluation criteria
2. Examine the textbook systematically
3. Rate each criterion
4. Prepare an evaluation report
5. Make recommendations

### 22.4 IMPORTANCE OF TEXTBOOK EVALUATION:

- Helps in selecting good textbooks
- Improves quality of instruction
- Ensures value for money
- Benefits both teachers and students
- Leads to better learning outcomes`},B1={id:"ch23",title:"Chapter 23: Audio-Visual Aids",content:`## (23) AUDIO-VISUAL AIDS

### 23.1 INTRODUCTION:

Audio-visual aids are instructional materials that involve both sight and hearing. They make teaching more effective, interesting and meaningful.

### 23.2 IMPORTANCE OF AUDIO-VISUAL AIDS:

- Make learning more concrete
- Increase interest and motivation
- Improve retention
- Cater to different learning styles
- Save time and effort
- Make learning enjoyable

### 23.3 TYPES OF AUDIO-VISUAL AIDS:

**A. Visual Aids:**

1. **Non-projected:**
   - Chalkboard
   - Flannel board
   - Charts and posters
   - Maps and globes
   - Pictures and photographs
   - Models and specimens

2. **Projected:**
   - Overhead projector
   - Slide projector
   - Film strips
   - LCD projector

**B. Audio Aids:**
- Radio
- Tape recorder
- CD player
- Language laboratory

**C. Audio-Visual Aids:**
- Television
- Video player
- Computer and multimedia
- Films and documentaries
- Internet resources

### 23.4 PRINCIPLES OF USING AUDIO-VISUAL AIDS:

1. Use aids to supplement, not replace teaching
2. Select aids appropriate to the content
3. Prepare aids in advance
4. Use aids at the right time
5. Ensure visibility and audibility
6. Involve students actively

### 23.5 ADVANTAGES OF AUDIO-VISUAL AIDS:

- Make abstract concepts concrete
- Provide real-life experiences
- Increase student participation
- Develop observation skills
- Enhance understanding
- Improve communication

### 23.6 LIMITATIONS:

- Can be expensive
- Require technical knowledge
- May distract from learning
- Not always available
- Need proper maintenance

### 23.7 SUGGESTIONS FOR EFFECTIVE USE:

- Plan carefully
- Prepare thoroughly
- Test equipment beforehand
- Use at appropriate time
- Integrate with lesson
- Evaluate effectiveness`},q1={id:"ch24",title:"Chapter 24: The English Teacher",content:`## (24) THE ENGLISH TEACHER

### 24.1 INTRODUCTION:

The English teacher plays a crucial role in the teaching-learning process. The success of English teaching largely depends on the competence and dedication of the teacher.

### 24.2 QUALITIES OF A GOOD ENGLISH TEACHER:

**A. Professional Qualities:**

1. **Subject Knowledge:**
   - Thorough knowledge of English
   - Understanding of grammar
   - Familiarity with literature
   - Knowledge of teaching methods

2. **Teaching Skills:**
   - Lesson planning
   - Classroom management
   - Questioning technique
   - Use of teaching aids

**B. Personal Qualities:**

1. **Communication Skills:**
   - Clear speech
   - Good pronunciation
   - Effective expression
   - Active listening

2. **Personality Traits:**
   - Enthusiasm
   - Patience
   - Sense of humor
   - Approachability

**C. Social Qualities:**

- Good rapport with students
- Cooperative attitude
- Professional ethics
- Community involvement

### 24.3 DUTIES AND RESPONSIBILITIES:

1. **Teaching Duties:**
   - Plan lessons effectively
   - Teach all language skills
   - Use appropriate methods
   - Evaluate student progress

2. **Administrative Duties:**
   - Maintain records
   - Prepare reports
   - Organize activities
   - Manage resources

3. **Professional Development:**
   - Keep updated
   - Attend workshops
   - Read professional literature
   - Engage in research

### 24.4 CHALLENGES FACED BY ENGLISH TEACHERS:

- Large class sizes
- Mixed ability groups
- Limited resources
- Lack of motivation
- Examination pressure
- Changing curriculum

### 24.5 SUGGESTIONS FOR PROFESSIONAL GROWTH:

- Continuous learning
- Reflective practice
- Peer collaboration
- Action research
- Professional reading
- Attending seminars

### 24.6 ROLE OF THE ENGLISH TEACHER:

- Facilitator of learning
- Guide and counselor
- Motivator
- Role model
- Innovator
- Evaluator`},Y1={id:"ch25",title:"Speaking Skills",content:`## SPEAKING SKILLS

### Introduction:

Speaking is one of the four basic language skills. It is the ability to express thoughts, ideas, and feelings through spoken words. Speaking is the most common form of communication in daily life.

### Importance of Speaking:

- It is the primary means of communication
- It helps in social interaction
- It builds confidence
- It is essential for professional success
- It develops thinking skills

### Components of Speaking:

1. **Pronunciation** - Correct production of sounds
2. **Fluency** - Ability to speak smoothly
3. **Accuracy** - Correct use of grammar and vocabulary
4. **Intonation** - Rise and fall of voice
5. **Stress** - Emphasis on certain words or syllables

### Techniques for Developing Speaking Skills:

- Conversation practice
- Dialogue practice
- Role play
- Group discussion
- Debate
- Speech making
- Story telling
- Picture description

### Activities for Speaking Practice:

1. **Controlled Activities:**
   - Repetition drills
   - Substitution drills
   - Guided dialogues

2. **Guided Activities:**
   - Information gap activities
   - Role plays
   - Problem-solving tasks

3. **Free Activities:**
   - Discussions
   - Debates
   - Presentations
   - Creative speaking`},V1={id:"ch26",title:"Proverbs for Everyday Conversation",content:`## PROVERBS FOR EVERYDAY CONVERSATION

### Introduction:

Proverbs are short, wise sayings that reflect the experience and wisdom of people. They make conversation more interesting and effective.

### Common English Proverbs:

1. **A friend in need is a friend indeed.**
   - A true friend helps in difficult times.

2. **Actions speak louder than words.**
   - What you do is more important than what you say.

3. **All that glitters is not gold.**
   - Not everything that looks valuable is valuable.

4. **Better late than never.**
   - It is better to do something late than not at all.

5. **Don't count your chickens before they hatch.**
   - Don't make plans based on expected results.

6. **Every cloud has a silver lining.**
   - Every difficult situation has a positive side.

7. **Honesty is the best policy.**
   - Being honest is always the right choice.

8. **Practice makes perfect.**
   - Regular practice leads to improvement.

9. **Where there's a will, there's a way.**
   - Determination leads to success.

10. **A bird in the hand is worth two in the bush.**
    - It is better to have something certain than something uncertain.

### Using Proverbs in Conversation:

- Use appropriate proverbs
- Don't overuse them
- Explain if necessary
- Use them naturally`},Q1={id:"ch27",title:"Model Lesson Plans",content:`## MODEL LESSON PLANS

### Lesson Plan 1: Teaching Vocabulary

**Subject:** English
**Topic:** Vocabulary - Family Members
**Class:** VII
**Duration:** 40 minutes

**Objectives:**
- Students will learn vocabulary related to family
- Students will be able to use the words in sentences
- Students will develop reading and speaking skills

**Teaching Aids:**
- Picture of a family
- Flash cards
- Blackboard

**Procedure:**

1. **Introduction (5 min):**
   - Greet students
   - Show family picture
   - Ask about their families

2. **Presentation (15 min):**
   - Introduce new words: father, mother, brother, sister, etc.
   - Use flashcards
   - Pronounce words clearly
   - Students repeat

3. **Practice (15 min):**
   - Matching exercise
   - Fill in the blanks
   - Make sentences

4. **Production (3 min):**
   - Students talk about their families

5. **Conclusion (2 min):**
   - Revise words
   - Give homework

---

### Lesson Plan 2: Teaching Grammar

**Subject:** English
**Topic:** Present Continuous Tense
**Class:** VIII
**Duration:** 40 minutes

**Objectives:**
- Students will understand the form of present continuous tense
- Students will be able to use it correctly
- Students will develop writing skills

**Teaching Aids:**
- Pictures showing actions
- Chart of tense form
- Worksheets

**Procedure:**

1. **Introduction (5 min):**
   - Show action pictures
   - Ask "What is he/she doing?"

2. **Presentation (15 min):**
   - Explain the form: am/is/are + verb+ing
   - Give examples
   - Show chart

3. **Practice (15 min):**
   - Oral drills
   - Written exercises
   - Sentence making

4. **Production (3 min):**
   - Describe what classmates are doing

5. **Conclusion (2 min):**
   - Summarize rules
   - Assign homework

---

### Lesson Plan 3: Teaching Reading

**Subject:** English
**Topic:** Reading Comprehension
**Class:** IX
**Duration:** 40 minutes

**Objectives:**
- Students will develop reading skills
- Students will understand the passage
- Students will answer comprehension questions

**Teaching Aids:**
- Reading passage
- Question paper
- Blackboard

**Procedure:**

1. **Pre-reading (5 min):**
   - Introduce the topic
   - Discuss vocabulary
   - Set purpose

2. **While-reading (20 min):**
   - Silent reading
   - Teacher reads aloud
   - Students read aloud

3. **Post-reading (12 min):**
   - Answer questions
   - Discuss answers
   - Summarize

4. **Conclusion (3 min):**
   - Recap main points
   - Give assignment`},Ac={id:"foreword",title:"Foreword",content:`It is my personal pleasure to say something on the book "The teaching of English" written by the devoted and dedicated teacher, Dr. Mohini Sharma.

The importance of English in our society cannot be underestimated. After 1947, when India achieved its long awaited freedom from British Raj, English as a language also lost its prime position and become the second language, still the charm of learning English continues and in the recent years there is a mushroom growth of English medium public schools and English as a language has more allurement for the parents for the causes and purposes unknown.

Now, the need is of good English Teachers especially in Gujarat State, where uptill now we treated English as the step daughter. Now, we need English teachers who have the comprehensive knowledge of the science of the English language. Know the methods, tools and techniques essential for teaching English and can safely present the material in the classroom accordance to the latest technological era and bring desired and expected behavioural changes in the learners from the point of view of listening, speaking and writing skills.

The need also arouses of some such books on the teaching of English which can safety cater to the needs of the English teacher in the making and equip him with all the essential skills needed in the teaching of English. Dr. Mohini Sharma has laboured to prepare such a book in a very short time which caters to the needs, from the syllabi point and beyond it. The book deals with the three perspectives of languages. Viz., Conceptual content, linguistic content and methodology. Dr. Mohini Sharma actively working not only in the field of Education but also as the counsellor, has won twice the awards for her counselling excellence from New Delhi. Her book "Vibrations" and "Spoken English" will be soon in the market.

I am hopeful that this endeavor of Dr. Sharma will prove a useful handbook for the teachers of English and the English teachers in the making.

I wish Dr. Sharma, the writer her apt presentation and her book 'The Teaching of English' a success.`},Cc={id:"preface",title:"Preface",content:`Goethe Says, 'One who does not know any foreign language, knows nothing of his own.' English language has been accepted as international language by most of the people of the world. The present question that deserves all our attention is not whether or not we want English in our country but in what ways shall we upgrade the fast declining standard of teaching-learning process of English in India and especially in Gujarat. There are institutes of English, spoken English and other areas, of the English language, mushrooming everywhere. But the basics of the language are taught and learnt at school invariably.

The teaching-learning process of English in India is mostly based on textbookishness by which the language is seriously handicapped. The English Teacher should approach English teaching from three major perspectives which are: (i) the conceptual content (ii) Linguistic contentant (iii) the methodology.

We have by now quite a large number of good books on English teaching, which does not apparently justify the addition of one more by me. However, there are some definite reasons which made me write this book. This book is meant to meet the need of English both in schools and in Training colleges. The book is also a handbook of practical suggestions on teaching of English, however, I am also coming up with more practical suggestion in another book on language teaching also. The purpose of the book is to provide an orientation to English teachers who are too much in the rut of the routine method of teaching and is not able to get out of it.

Whosoever born on the planet orb (Earth) is not complete. Though I tried my level best to present the book with all the aspects, there may exist the limitations also, suggestion of the readers are always welcome for the same. I also put forward that I tried my best to write the book in simple language so that it could be used even by primary teachers. I have no regret to sacrifice the idiomatic language in writing this book because I always kept this notion in my mind that English is a foreign language.

I express my sincere gratitude to all the persons who helped me in completing this book. I also owe my sincere thanks and a debt to "Akshar Publication, Ahmedabad" for the Publishing of this book. My deep appreciation goes to the management Shri Khambhat Taluka Sarvavanjka Kelavani Mandal, my teachers, my colleagues and students since they have been the source of my feedback in writing the book.

I look forward for the worth of this book for readers, teachers and students. I shall be highly obliged if they send me some valuable suggestions for the betterment of this book.

Dr. Mohini Sharma
Lecturer,
Smt. B. C. J. College of Education
Shri B. D. Rao College Campus,
Khambhat - 388 620, Gujarat.`},np=[{id:"ch1",title:"Chapter 1: The State of English Teaching in India",content:`## (I) THE STATE OF ENGLISH TEACHING IN INDIA

"The more advanced a language is, the more developed is its power of expressing abstract or general ideas".

English is such a language which is universally renowned for its power of expression of thoughts and feeling as a social group. But English is a foreign language for Indians.

English was introduced in India two centuries ago by the East India Company, first for trade and commerce. Later, the language made inroads into all spheres of public life, became the medium of instruction in schools and colleges and exercised for reaching influence on the country, beyond the wildest dreams of the founders. Macaulay in his Minute of 1835 visualized the total westernization of Indian life and culture. Many of our countrymen mastered the English language, which fascinated the Westerners.

Lord William Bentinck extended patronage to English and European literature and science. English became the language of administration and justice. But Lord Curzon bemoaned the influence of English an vernacular Education Wood's Dispatch of 1854 set right the balance by saying that Vernaculars had their place in mass education and English had only a limited role.

### In short, the place of English before Independence:

- It was the official language of administration and courts.
- English helped in perfecting the art of governance, democratic debate and discussion.
- It was medium of instruction in schools and colleges.
- It was the medium of teaching.
- It was the language to develop the understanding between the rulers and the subject.

### English after Independence:

In our country, people have been learning English since it was first introduced in schools in the second half of the nineteenth in the first fifty years the purpose of learning English was to get a Government job. But later English was learnt for:

- Studying in foreign countries.
- To enrich the work profile to work in foreign countries
- Studying professional courses like Para medical courses, medicine, Engineering etc. in our country which are almost designed in English only.
- Studying English literature and so on.

After independence, the inclusion of English in school curriculum was debated at all kinds of for a Arguments for English out weighed the others with special support from scholars- administrators like Jawaharlal Nehru, academician like Pro. Gokak and others.

Mahatma Gandhi advocated the development of Indian languages and advised us not to be blind imitators of the west in a few people should learn English to represent India in abroad. C. Rajagopalachari said that English was the gift of Goddess Saraswati to India and that in our anger and hatred, we should not throwaway the baby (English) with the bath water (the English people). Pandit Nehru said "I completely accept the statement that people cannot really grow except through their language but it does not follow that in order to make their language grow, a barrier should be erected between them and others." (1957) Again he said "It is patient to me that this man power for industrial, scientific and agriculture purposes cannot be trained in any Indian language in the foreseeable future. It is absolutely clear to me and it is not an arguable matter that training has to be given in English." He called English 'a window on the modern world'.

With the adoption of the Indian Constitution in 1950 English was allowed to continue as our official language for fifteen years during which period Hindi, the national language would be developed to take its place. But there was opposition to the introduction of the Hindi, from the southern states. Consequently, in 1963 parliament by an Act decided to accord English the status of associate official language of India for an indefinite period. And that is the position even today. English serves as link language between states and center, as a language of administration and justice in many states. It is a compulsory language in some states, taught from I/II/V/VIII and optional in some states. It is the medium of instruction in professional colleges and universities. Regional languages have vastly developed after the formation of Linguistic states and they are now the media of instruction in schools and colleges even upto P.G. level in many states.

There were few education commissions and committee appointed by the Government of India. The views of there expert bodies throw light on the changing fortunes of English in the curriculum of schools and colleges.

- **The University Education Commission (1948)** stressed the need to learn English to keep in touch with the stream of knowledge and to prevent our isolation.
- **The Mudaliar Commission (1953)** emphasized the adoption of dynamic methods of teaching English and other subjects.
- **The Central Advisory Board of Education (CABE)** suggested the three language formula, whereby the regional language, mother tongue, Hindi/Indian language/ and English should be taught in all schools, the stages of introduction of Hindi and English were left to the state Governments.
- **The Kothari Commission 1964-66** favoured the learning of English as a library language, stressing reading and reference skills.
- **The Study Group (Prof: Gokak)** recommended the structural approach to the teaching of English and emphasized the importance of Men (teachers), Materials (books), and methodology.
- **The National Policy of Education (NPE) 1968** said that regional languages which were making rapid strides should be the media of instruction at college level also. The NPE (1968) and the Programme of Action (POA) were all for strengthening languages. The Navodaya Vidyalayas came into being in pursuance of POA (1986).
- **The Acharya Rama Murthy committee 1986** has endorsed the three language formula and suggested the specifications of minimum levels of learning (MLL) at cut off stages.

None of these recommendations said anything English, which is a point in its favour. The growth of English medium schools favoured explicitly by parents and implicitly by Government, has its own story to tell about the popularity of the English language.

There are three aspects of its importance to India: (1) It continues to be a link language within the country and outside, (2) It is a library language, which brings the world of knowledge to one's library, if not to the door step, (3) English opens the window on the world of science & technology, trade & commerce, and telecommunication, space technology etc. We can ignore these vital features of English at our own peril in modern times.`},{id:"ch2",title:"Chapter 2: The Importance of Learning English in India",content:`## (2) THE IMPORTANCE OF LEARNING ENGLISH IN INDIA

English language is an easy means of communication in the international sphere of life. It is the language which can be easily understood in different parts of the world. Dennis Bloodworth is of the opinion that near about 300 million people of the world speaks English with the growth of trade and commerce; it has spread far outside England. At present it has become a language of universal cultural which embraces so many departments of knowledge.

> "Anyone who can read English can keep in touch with world without living his own house" - F. G. French

> "No language ancient and modern can be compared with English in the number of its speakers, writers and readers all over the world" - F. G. French

> "English is a language which is rich in literature, humanistic, scientific and technical. If under sentimental urges we should give up English, we would cut ourselves off from the living stream of ever-growing knowledge" - Radhakrishna University

One in ten persons of the world knows English. English is the first language of England, Australia, Canada and U.S.A. It is the second language of many countries like Russia, France, Germany, India and Pakistan etc. It is the official language of U.N.O. All books of science and technology are written in English language. That is why in English language is the window on modern world. If we close this knowledge of the world and return back into the darkness of ignorance of Middle Ages. We will fall back hundreds of years and will never be able to catch up the race of the developed world.

In the words of Mahatma Gandhi, "English is a language of international commerce; is the language of diplomacy and it contains many a rich literary treasure; it gives us an introduction to western thoughts and culture."

However this study should be at the cost of national language or regional languages. In this regard, the following words of Maulana Abdul Kalam Azad, latterly the Minister of Education Government of India, are worth quoting:

> "So far as General studies are concerned, it was never my intention to suggest that there should be any falling in the standard of English. Hundred and fifty years of intimate contact has made English an integral part of our educational system and this cannot be changed without injury to the cause of education in India.

> In addition, English has today become one of the major languages of the world and Indians can neglect its study only at the risk of loss to themselves. I am convinced that in future as well the standard of teaching should be maintained at high a level as possible."`},{id:"ch3",title:"Chapter 3: Factors Responsible for Universal Importance of English",content:`## (3) FACTORS RESPONSIBLE FOR THE UNIVERSAL IMPORTANCE OF ENGLISH LANGUAGE IN INDIA AND ESPECIALLY IN GUJARAT

India is multilingual country. The constitution of India recognized more than fifteen languages. About 845 languages are spoken in India. Language is the basis in the formation of each state. English is link language. It is known to the educated people all over the country. Therefore, it is important for having inter-state links and communication on the following matters:

- Trade
- Administration & Management
- Social Affairs
- Cultural & Educational Exchanges

Gujarat is the industrialist state and Gujarat are known for business and trade, so the command over English may enhance the growth of business.

English is a language that gives birth of feeling of internationalism and also develops it. It does contribute to the Indian Philosophy of world fraternity. In the present set-up national integration is very much needed, it plays a vital role in this field also.

With the help of this language, we can communicate with foreigners and people of their countries. We can understand their ideas, feelings and point of views. It can serve as a means of communication in the international through world. And Gujarat is known as NRI'S and many of the students also go abroad for studies, so English plays a vital role in that.

English is the key to the treasure house of knowledge, Most of the books of higher knowledge in different field i.e. science, technology, humanities and literature are found in English language. The graduate and post graduate and research students need to consult libraries. Good reference-books are found in English language. It is language of science, law, medicine, engineering and agriculture. That is why English occupies the position of library language. The Kathari Commission has emphasized that English would play a vital role in higher education as an important library language.

English language is the store house of culture. It promotes universal brotherhood, friendship, tolerance, sympathy and benevolence. English culture and literature have influenced the culture and literature of India. English language gives us the insight into the different cultures of various societies and countries. English culture is collection of different cultures of various advanced countries. And Gujarat is store house of culture. Gujarat culture can be better understood its richness value can only be known if we have studied other cultures, for that we need the knowledge of English.

English language has been the official language of India for more than 200 years. It has been also declared the associated official language of the union of indefinite period by the constitutional amendment in 1963. All the official work of administration and management is done in English language in most of the states of our country.

English still is the language of courts all over India. It is the legal language for the Supreme Court, High Courts and the District courts. The legal cases are presented and pleaded and judgments are given in English language today.

Greater number of people of various nations find it more convenient to talk in English. They write letters in English. Ceremonial and invitation-cards are mostly printed in English: The so called highly and sophisticated sections of our society find it more suitable to talk in English.

English plays an important role in field of education. English is taught as a compulsory subject in most of the states of our country. It is medium of instruction of public schools, technical, medical, and law Institutions. Several English language Teaching centers and Regional Institution of English language have been set to train the teachers of English in new methods, techniques and approaches of teaching English language Gujarat lack back in making as the medium of instruction so Gujarat has suffered as lot, as specially Gujarati students lacked back in competitive exams like IAS, IPS, IFS, etc.

English is spoken and written in most of the departments, industries, managements, and offices in most of the countries. Therefore, English language provides us an opportunity to get employment all over the world.

### English: A Language of skill subject.

We place school subjects under two heads:

- **Content Subjects** - Economics, biology, science and maths
- **Skill Subjects** - Language, music, painting

It has four skills i.e. listening speaking, reading and writing.

This language can help to play the role of an agency for the establishment of world peace for the good of the welfare of the entire world. It is essential to have world peace and co-existence. Because of capacity to bring about international under-standing, this language can help in establishment of world peace.

It helps us to widen our vision. We grow liberal, generous and broad minded after coming in contact with the thoughts of other countries through this language.

It is experience that leads to perfection. In this task of perfection, contact with neighboring countries and distant lands can do a lot. It is possible with help of English language only.

This language helps the development and generation of human outlook. Our internal as well as external aspects of the personality can develop with the help of English language. In other words, this language helps the development of balanced personality.

English language helps the development of stability in our lives and it has stability that helps us to acquire cultural values.

### Conclusion:

It is clear from the above discussion that the teaching and study of English is almost essential at secondary as well as higher stages of education in India. But should always be borne in mind that this teaching should be well organized and properly integrated. It is a duty of teacher to make the student competent to read and understand English language and literature. Only then it shall be possible for them to acquire various qualities enumerated above. Taking an over all view of all India curricula, it may be concluded that in the present day curricula of India, English is occupying an important place and is taught in some of the state as a compulsory second language.

English is a compulsory subject to qualify the preliminary examination of civil services of union and States.

The above points tells the position and place of English in our, school curriculum in general in India, all the same, time also indicates the lack of uniform policy about its place. A quick step must be taken to give an appropriate that is, an important place to this language in school curriculum.`},{id:"ch4",title:"Chapter 4: Present Position of English Teaching in Gujarat",content:`## (4) PRESENT POSITION OF ENGLISH TEACHING IN GUJARAT

> "It is high time to frame the definite policy of English language." - Discuss the statement in reference to the Gujarat State.

> "English is a language which is rich in literature, humanistic, scientific and technical. It under sentimental urges, we give up English, we would cut ourselves off from the living stream of ever growing knowledge." - Radha Krishna Commission

English is holding a respectable position in the school curriculum of almost every state of our country. In Gujarat, the position of English is stated below.

### Position of upper Primary level (A)

**Status of English in curriculum**

The following three Language are to be studied from class V to VII English is taught as the third language. It is compulsory subject from fifth class. Six periods per week are given for the teaching of English in school timetable. The following diagram shows the status of English as the third language.

- **I Language** - Gujarati (The Regional Language)
- **II Language** - Hindi (The National Language)
- **III Language** - English (The foreign Language)

### The following diagram clarifies the scenario of English language at recent time:

- **In std I to IV** - From academic year 2006 it is compulsory, but exams are not taken yet in some private schools.
- **In std V to VII** - It is compulsory and exams are also conducted.
- **In std VIII to X** - It is compulsory in 8th and 9th and from academic year 2006 it has become compulsory in std. X
- **In std XI to XII** - It is compulsory in science stream but it is an optional in HSC common stream.
- **College** - At all the levels it is compulsory.

### POSITION OF ENGLISH AT SECONDARY LEVEL IN GUJARAT

English is being taught as a compulsory subject at secondary level in std: VIII and Std IX, i.e. for two years and it was voluntary subject in Std X, But it is now a compulsory at S.S.C. examination.

At higher secondary level, English is not being taught as a compulsory subject except in science stream.

But again it is being taught as a compulsory subject at college level. But it is not worthy, that students who passed their s.s.c. examination without English are also allowed to offer English as a main Subject at college level.

Again it is worth noting that the Government has planned a syllabus for std V to XII as well as syllabus for std VII to XII. This means that the Government has accepted the policy of two streams of English language teaching for the students through the Gujarati medium and higher level English for the English medium students.

"But the standard of English in Our state i.e. Gujarat is poor, who is at fault the Govt. policy or the teaching staff is difficult to judge. Just for the sake of English our students are suffering at the national as well as the international level. Intelligent student avoid to sit in the competition examinations or if they sit they hardly get success in such examination.

Again, it is worth noting that the National Policy of Education of 1986 recommended to make English compulsory at std. X in all the states but it is not made compulsory from academic year 2006.

The history of teaching of English in our state shows very clearly that our syllabus has always remained changing because of the change in the official policy. It also shows that there have been overlapping syllabi and even teaching programmes. The syllabus also does not seem to grow at various levels. The teaching of English has become very difficult because of the heterogeneous students in the class.

The English language opens new vistas of scientific and technological knowledge and breaks down those social barriers which bring about narrow out look of life. So, a quick step must be taken to give an appropriate that is, an important place to this language in our school curriculum and to teach English intensively to achieve all the objectives.

### Problem faced by Gujarati speaking child while learning English

Children retarded in Language are often poor in their academic achievement. The academic achievement in different subjects depends on the mastery over the language. Language is closely related to general intellectual development. The effective teaching of language influences the teaching of other subjects. English language is mostly taught as a second language in the Indian schools and in Gujarat State too. There are many problems, which create hindrances in the smooth and effective teaching of English and because of that the Gujarati speaking child faces many problems in learning English as a foreign language.

We all experience that students of Gujarati fail to express their ideas either in spoken or written English correctly, along with wrong pronunciation and spelling the words incorrectly.

With the background of Gujarati, the pupils commit many mistakes regarding the grammar, like word order use of tenses, sequences of tenses, use of articles, sentence pattern, use of punctuation marks etc. unfortunately, most of the teachers of English in India are not well aware of the basic principles of the teaching of English and so, including our (Gujarati Speaking students suffer to achieve the proper knowledge of English.

### Some of the basic problems pupils faces are:

- There are 26 letters in English alphabets while there are 33 in Gujarati. This seems that 26 alphabets have to produce all the sounds of Gujarati.
- Gujarati is highly phonetic language while English is not.
- Both the languages have different word-order in a sentence.
- It is difficult to find the equivalent of all the English word in Gujarati.
- The sentence patterns of both the languages are different. The sentence pattern in Gujarati is usually the S-O-V (Subject, Object, Verb) and the English is usually the S-V-O (Subject, Verb, Object) order.
- Use of article is very important in English and there is nothing like an article in Gujarati
- In English verb changes according to the number of its subject - for e.g. singular subject plural verb plural subject singular verb while in Gujarati verb changes according to number and gender of its subject.
- The structure words or function words have no exact equivalents in Gujarati.
- There is quite a difference in the use of tenses -Sequence of tense as maintained in English is not maintained in Gujarati.
- Indirect narration of the English language is a problem for Gujarati pupils.
- English spellings are a source of confusion for the pupils, as some letters we drop in pronunciation. for e.g. hour - 'h' is silent, knight - 'k' is silent
- The subtle difference in pronunciation of certain sounds cannot be learned by a Gujarati pupil, (e.g. what vote" truth, tooth) Stress, intonation and rhythm are different in both the languages.
- The interrogative patterns are also different in both the languages.
- Fear of English in students is common factor for not understanding English phobia.`},{id:"ch5",title:"Chapter 5: Main Problems of Teaching English in India",content:`## (5) THE MAIN PROBLEMS OF TEACHING ENGLISH IN INDIA IN SPECIAL REFERENCE TO GUJARAT

> "English is a language which is in literature, humanistic, scientific and technical. If under sentimental urges, we give up English, we would cut ourselves off from the living stream of ever growing knowledge." - Radha Krishna Commission

But what place do English occupy in our curriculum, we all are aware, on the other hand, we are also aware about the importance of teaching English and its rapid growing demand in day to-day life. Yet, there are many problems, which create hindrances in the smooth and effective teaching of English as a second language.

### The following are the problems of English teaching not only in Gujarat but in India also:

**(1) No specific aim:**
The teaching of English is not based upon the aims and objectives of teaching English. Neither the teachers nor the students are acquainted with the aims and objectives of teaching English. Their aim is to get through the examination. Therefore it is very necessary that teaching of English must be based on aims and objectives.

**(2) Lack of proper emphasis on various aspects of teaching:**
In fact, teaching of English has various aspects. It requires good practice of teaching pronunciation, spelling, composition, calligraphy etc. Now a day, proper attention is not paid to all these aspects of the teaching of English. It is not possible for the students to practise even what they have learnt orally. Teachers are more worried about finishing the course than imparting proper knowledge to their pupils. Their methods of teaching are not effective. They are very much circumscribed by various rules and regulations and so it is not possible for them to have a free hand in it.

Teaching of English at various stages of education is not co-related and co-ordinate. In fact teaching at various stages is of different types - Due to this defect the knowledge of the students is not though and well graded.

**(3) Over - crowded classes:**
Our classes are over crowded. English teachers are unable to solve the individual problems of English language, there is inconvenience due to the shortage of building and lack of furniture.

**(4) No uniformity of the beginning stage of English teaching:**
There is controversy with regard to the grade from which teaching should be introduced. Different patterns are adopted by different states. Due to this reason the national standard of English language varies from state to state. Moreover, if we see into the state policy for e.g. Gujarat, in Govt. Schools, English is taught according to the govt. rules while in self finance schools, English is even taught in earlier standards, even in Bal Mandir.

**(5) Teaching Methods OR Methods of teaching:**
Teaching methods are also very much responsible for good education of English. Direct method is recognized as a scientific method of teaching English in our Country, this method is not very much in vague. Still, the translation method is much used in almost all the schools and specially in Gujarat; this method is in much use.

**(6) Sub-standard of Text-Books:**
The text-books of English are of very low standard. They have got no relevance to the need of our students. They need a drastic change and improvement. Although this year, the Gujarat state has taken step regarding the sub-standard of text books and according to the new syllabus, introduced in std VIII and XI they have tried to introduce certain changes in English text-book, but still text-book lack language functions.

**(7) Lack of suitable language teaching aids:**
Our schools are not well equipped with suitable language teaching aids. Even pictures, charts, modals, lannel board are not available. Only during training period same interest is noticed among pupil - teachers in this regard. The movement they became teachers they do not use audio-visual aids. English can be best taught and learnt by these teaching aids.

**(8) Lack of efficient teachers:**
The teachings of English in schools are in the hand of teachers who neither know English nor are trained in the teaching methodology of English subject. The sole aim of teachers is to get their student pass in the examination by fair and foul. That is why the standard of English language of our students is going to be deteriorated.

**(9) Inefficient teacher education system:**
The teachers are not imparted proper training at B.Ed, levels. The languages teachers are not properly trained in the content matter and methodology of English subject students are receivers and producers of language. They produce what they receive from their teacher. Most of the time is imparted to the compulsory subject. The teaching subject is neglected.

**(10) Traditional examination system:**
The new methods of examination with oral and written test are not applied by the teachers. They still use the traditional method of examination the aims and objective of teaching is not achieved through the traditional examinations.`},w1,A1,C1,N1,O1,R1],ip=[M1,k1,D1,j1,z1,_1,L1],lp=[U1,H1,G1,I1,B1,q1],sp=[Y1,V1,Q1],X1=s=>[Ac,Cc,...np,...ip,...lp,...sp].find(c=>c.id===s),Z1=()=>{const s=[];return s.push({id:"foreword",title:Ac.title,content:Ac.content,section:"Front Matter"}),s.push({id:"preface",title:Cc.title,content:Cc.content,section:"Front Matter"}),np.forEach(o=>{s.push({id:o.id,title:o.title,content:o.content,section:"Unit 1"})}),ip.forEach(o=>{s.push({id:o.id,title:o.title,content:o.content,section:"Unit 2"})}),lp.forEach(o=>{s.push({id:o.id,title:o.title,content:o.content,section:"Unit 3"})}),sp.forEach(o=>{s.push({id:o.id,title:o.title,content:o.content,section:"Reference"})}),s};function F1({isOpen:s,onClose:o}){const[c,r]=R.useState(""),[h,d]=R.useState([]),[g,y]=R.useState(0),m=R.useRef(null),p=Tg(),S=R.useMemo(()=>Z1(),[]),T=R.useMemo(()=>zg(),[]),k=R.useMemo(()=>new ri(S,{keys:["title","content"],threshold:.3,includeMatches:!0,minMatchCharLength:2}),[S]);R.useEffect(()=>{s&&(m.current?.focus(),r(""),d([]),y(0))},[s]),R.useEffect(()=>{if(c.trim().length<2){d([]);return}const L=k.search(c).slice(0,10).map(V=>{const Y=T.find(F=>F.title===V.item.title);return{id:V.item.id,title:V.item.title,content:V.item.content.slice(0,200)+"...",section:V.item.section,path:Y?.path||"/"}});d(L),y(0)},[c,k,T]);const H=U=>{U.key==="Escape"?o():U.key==="ArrowDown"?(U.preventDefault(),y(L=>(L+1)%h.length)):U.key==="ArrowUp"?(U.preventDefault(),y(L=>(L-1+h.length)%h.length)):U.key==="Enter"&&h[g]&&(p(h[g].path),o())},G=U=>{p(U.path),o()};return s?v.jsxs("div",{"code-path":"src/components/SearchModal.tsx:97:5",className:"fixed inset-0 z-50 flex items-start justify-center pt-[20vh] p-4",children:[v.jsx("div",{"code-path":"src/components/SearchModal.tsx:99:7",className:"fixed inset-0 bg-black/50 backdrop-blur-sm",onClick:o}),v.jsxs("div",{"code-path":"src/components/SearchModal.tsx:105:7",className:"relative w-full max-w-2xl rounded-lg border bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900",children:[v.jsxs("div",{"code-path":"src/components/SearchModal.tsx:107:9",className:"flex items-center border-b px-4 py-3 dark:border-slate-700",children:[v.jsx(yc,{"code-path":"src/components/SearchModal.tsx:108:11",className:"h-5 w-5 text-slate-400"}),v.jsx("input",{"code-path":"src/components/SearchModal.tsx:109:11",ref:m,type:"text",value:c,onChange:U=>r(U.target.value),onKeyDown:H,placeholder:"Search chapters, topics, or content...",className:"ml-3 flex-1 bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100"}),v.jsx("button",{"code-path":"src/components/SearchModal.tsx:118:11",onClick:o,className:"ml-2 rounded-md p-1 hover:bg-slate-100 dark:hover:bg-slate-800",children:v.jsx(jg,{"code-path":"src/components/SearchModal.tsx:122:13",className:"h-5 w-5 text-slate-400"})})]}),v.jsx("div",{"code-path":"src/components/SearchModal.tsx:127:9",className:"max-h-[60vh] overflow-y-auto",children:c.trim().length<2?v.jsxs("div",{"code-path":"src/components/SearchModal.tsx:129:13",className:"p-8 text-center text-slate-500 dark:text-slate-400",children:[v.jsx(yc,{"code-path":"src/components/SearchModal.tsx:130:15",className:"mx-auto h-8 w-8 mb-3 opacity-50"}),v.jsx("p",{"code-path":"src/components/SearchModal.tsx:131:15",children:"Type at least 2 characters to search"}),v.jsx("p",{"code-path":"src/components/SearchModal.tsx:132:15",className:"text-sm mt-1",children:"Search through all chapters and content"})]}):h.length===0?v.jsxs("div",{"code-path":"src/components/SearchModal.tsx:135:13",className:"p-8 text-center text-slate-500 dark:text-slate-400",children:[v.jsx(M0,{"code-path":"src/components/SearchModal.tsx:136:15",className:"mx-auto h-8 w-8 mb-3 opacity-50"}),v.jsxs("p",{"code-path":"src/components/SearchModal.tsx:137:15",children:['No results found for "',c,'"']}),v.jsx("p",{"code-path":"src/components/SearchModal.tsx:138:15",className:"text-sm mt-1",children:"Try different keywords"})]}):v.jsx("ul",{"code-path":"src/components/SearchModal.tsx:141:13",className:"py-2",children:h.map((U,L)=>v.jsx("li",{"code-path":"src/components/SearchModal.tsx:143:17",onClick:()=>G(U),className:Kt("cursor-pointer px-4 py-3 transition-colors",L===g?"bg-indigo-50 dark:bg-indigo-900/20":"hover:bg-slate-50 dark:hover:bg-slate-800"),children:v.jsxs("div",{"code-path":"src/components/SearchModal.tsx:153:19",className:"flex items-start gap-3",children:[v.jsx(ni,{"code-path":"src/components/SearchModal.tsx:154:21",className:"mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-400"}),v.jsxs("div",{"code-path":"src/components/SearchModal.tsx:155:21",className:"flex-1 min-w-0",children:[v.jsx("p",{"code-path":"src/components/SearchModal.tsx:156:23",className:"font-medium text-slate-900 dark:text-slate-100",children:U.title}),v.jsx("p",{"code-path":"src/components/SearchModal.tsx:159:23",className:"text-xs text-slate-500 dark:text-slate-400 mt-0.5",children:U.section}),v.jsx("p",{"code-path":"src/components/SearchModal.tsx:162:23",className:"text-sm text-slate-600 dark:text-slate-300 mt-1 line-clamp-2",children:U.content})]})]})},U.id))})}),v.jsx("div",{"code-path":"src/components/SearchModal.tsx:174:9",className:"border-t px-4 py-2 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400",children:v.jsxs("div",{"code-path":"src/components/SearchModal.tsx:175:11",className:"flex items-center justify-between",children:[v.jsx("span",{"code-path":"src/components/SearchModal.tsx:176:13",children:h.length>0?`${h.length} results`:"Start typing to search"}),v.jsxs("div",{"code-path":"src/components/SearchModal.tsx:179:13",className:"flex items-center gap-3",children:[v.jsxs("span",{"code-path":"src/components/SearchModal.tsx:180:15",className:"flex items-center gap-1",children:[v.jsx("kbd",{"code-path":"src/components/SearchModal.tsx:181:17",className:"rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800",children:"↑↓"}),"to navigate"]}),v.jsxs("span",{"code-path":"src/components/SearchModal.tsx:184:15",className:"flex items-center gap-1",children:[v.jsx("kbd",{"code-path":"src/components/SearchModal.tsx:185:17",className:"rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800",children:"↵"}),"to select"]}),v.jsxs("span",{"code-path":"src/components/SearchModal.tsx:188:15",className:"flex items-center gap-1",children:[v.jsx("kbd",{"code-path":"src/components/SearchModal.tsx:189:17",className:"rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800",children:"esc"}),"to close"]})]})]})})]})]}):null}function K1(){return v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:7:5",className:"min-h-screen",children:[v.jsxs("section",{"code-path":"src/pages/HomePage.tsx:9:7",className:"relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 px-6 py-16 text-white lg:px-8 lg:py-24",children:[v.jsx("div",{"code-path":"src/pages/HomePage.tsx:10:9",className:"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"}),v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:12:9",className:"relative mx-auto max-w-4xl text-center",children:[v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:13:11",className:"mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm",children:[v.jsx(ni,{"code-path":"src/pages/HomePage.tsx:14:13",className:"h-4 w-4"}),v.jsx("span",{"code-path":"src/pages/HomePage.tsx:15:13",children:"Complete Digital Edition"})]}),v.jsx("h1",{"code-path":"src/pages/HomePage.tsx:18:11",className:"mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",children:Bt.title}),v.jsxs("p",{"code-path":"src/pages/HomePage.tsx:22:11",className:"mb-4 text-xl text-indigo-100",children:["by ",Bt.author]}),v.jsx("p",{"code-path":"src/pages/HomePage.tsx:26:11",className:"mx-auto max-w-2xl text-lg text-indigo-100/80",children:"A comprehensive guide for English teachers, covering techniques, methods, and approaches for effective English language teaching in India."}),v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:31:11",className:"mt-8 flex flex-wrap items-center justify-center gap-4",children:[v.jsxs(qt,{"code-path":"src/pages/HomePage.tsx:32:13",to:"/foreword",className:"inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 transition-all hover:bg-indigo-50 hover:shadow-lg",children:["Start Reading",v.jsx(ll,{"code-path":"src/pages/HomePage.tsx:37:15",className:"h-4 w-4"})]}),v.jsx(qt,{"code-path":"src/pages/HomePage.tsx:39:13",to:"/unit1/chapter1",className:"inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20",children:"Browse Chapters"})]})]})]}),v.jsx("section",{"code-path":"src/pages/HomePage.tsx:50:7",className:"px-6 py-16 lg:px-8 lg:py-20",children:v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:51:9",className:"mx-auto max-w-6xl",children:[v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:52:11",className:"mb-12 text-center",children:[v.jsx("h2",{"code-path":"src/pages/HomePage.tsx:53:13",className:"text-3xl font-bold text-slate-900 dark:text-slate-100",children:"What You'll Learn"}),v.jsx("p",{"code-path":"src/pages/HomePage.tsx:56:13",className:"mt-4 text-lg text-slate-600 dark:text-slate-400",children:"Master the art of English teaching with comprehensive coverage of all essential topics"})]}),v.jsx("div",{"code-path":"src/pages/HomePage.tsx:61:11",className:"grid gap-8 md:grid-cols-2 lg:grid-cols-4",children:[{icon:ni,title:"Techniques & Methods",description:"Learn various teaching methods including Direct, Bilingual, Structural, and Communicative approaches."},{icon:D0,title:"Skill Development",description:"Master the teaching of Listening, Speaking, Reading, Writing, Grammar, and Composition."},{icon:Q0,title:"Classroom Management",description:"Understand planning, techniques, and evaluation methods for effective teaching."},{icon:L0,title:"Practical Applications",description:"Apply psychological principles and modern approaches to real classroom situations."}].map((s,o)=>v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:84:15",className:"rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800",children:[v.jsx("div",{"code-path":"src/pages/HomePage.tsx:88:17",className:"mb-4 inline-flex rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900/30",children:v.jsx(s.icon,{"code-path":"src/pages/HomePage.tsx:89:19",className:"h-6 w-6 text-indigo-600 dark:text-indigo-400"})}),v.jsx("h3",{"code-path":"src/pages/HomePage.tsx:91:17",className:"mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100",children:s.title}),v.jsx("p",{"code-path":"src/pages/HomePage.tsx:94:17",className:"text-sm text-slate-600 dark:text-slate-400",children:s.description})]},o))})]})}),v.jsx("section",{"code-path":"src/pages/HomePage.tsx:104:7",className:"bg-slate-50 px-6 py-16 dark:bg-slate-900/50 lg:px-8 lg:py-20",children:v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:105:9",className:"mx-auto max-w-6xl",children:[v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:106:11",className:"mb-12 text-center",children:[v.jsx("h2",{"code-path":"src/pages/HomePage.tsx:107:13",className:"text-3xl font-bold text-slate-900 dark:text-slate-100",children:"Book Structure"}),v.jsx("p",{"code-path":"src/pages/HomePage.tsx:110:13",className:"mt-4 text-lg text-slate-600 dark:text-slate-400",children:"Organized into three comprehensive units covering all aspects of English teaching"})]}),v.jsx("div",{"code-path":"src/pages/HomePage.tsx:115:11",className:"grid gap-8 lg:grid-cols-3",children:jc.slice(1,4).map((s,o)=>v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:117:15",className:"rounded-xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800",children:[v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:121:17",className:"mb-4 flex items-center gap-3",children:[v.jsx("div",{"code-path":"src/pages/HomePage.tsx:122:19",className:"flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",children:o+1}),v.jsx("h3",{"code-path":"src/pages/HomePage.tsx:125:19",className:"text-lg font-semibold text-slate-900 dark:text-slate-100",children:s.title.split(":")[0]})]}),v.jsx("p",{"code-path":"src/pages/HomePage.tsx:129:17",className:"mb-4 text-sm text-slate-600 dark:text-slate-400",children:s.title.split(":")[1]}),v.jsxs("ul",{"code-path":"src/pages/HomePage.tsx:132:17",className:"space-y-2",children:[s.items.slice(0,4).map(c=>v.jsx("li",{"code-path":"src/pages/HomePage.tsx:134:21",children:v.jsxs(qt,{"code-path":"src/pages/HomePage.tsx:135:23",to:c.path,className:"flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400",children:[v.jsx(ll,{"code-path":"src/pages/HomePage.tsx:139:25",className:"h-3 w-3"}),c.title.split(":")[1]||c.title]})},c.id)),s.items.length>4&&v.jsxs("li",{"code-path":"src/pages/HomePage.tsx:145:21",className:"text-xs text-slate-400 dark:text-slate-500",children:["+",s.items.length-4," more chapters"]})]})]},s.id))})]})}),v.jsx("section",{"code-path":"src/pages/HomePage.tsx:157:7",className:"px-6 py-16 lg:px-8 lg:py-20",children:v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:158:9",className:"mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-center text-white lg:p-12",children:[v.jsx("h2",{"code-path":"src/pages/HomePage.tsx:159:11",className:"mb-4 text-2xl font-bold lg:text-3xl",children:"Ready to Start Learning?"}),v.jsx("p",{"code-path":"src/pages/HomePage.tsx:162:11",className:"mb-8 text-indigo-100",children:"Begin your journey to becoming an effective English teacher. Read the foreword to understand the purpose and scope of this book."}),v.jsxs(qt,{"code-path":"src/pages/HomePage.tsx:166:11",to:"/foreword",className:"inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-indigo-700 transition-all hover:bg-indigo-50 hover:shadow-lg",children:["Read the Foreword",v.jsx(ll,{"code-path":"src/pages/HomePage.tsx:171:13",className:"h-4 w-4"})]})]})}),v.jsx("footer",{"code-path":"src/pages/HomePage.tsx:177:7",className:"border-t bg-white px-6 py-8 dark:border-slate-800 dark:bg-slate-900",children:v.jsxs("div",{"code-path":"src/pages/HomePage.tsx:178:9",className:"mx-auto max-w-6xl text-center",children:[v.jsxs("p",{"code-path":"src/pages/HomePage.tsx:179:11",className:"text-sm text-slate-500 dark:text-slate-400",children:[Bt.title," by ",Bt.author]}),v.jsxs("p",{"code-path":"src/pages/HomePage.tsx:182:11",className:"mt-1 text-xs text-slate-400 dark:text-slate-500",children:["Published by ",Bt.publisher,", ",Bt.location," | First Edition ",Bt.firstEdition]})]})})]})}function J1({content:s,className:o}){const c=r=>{const h=r.split(`
`),d=[];let g=0,y=!1,m=[],p=null;const S=()=>{if(m.length>0&&p){const k=p;d.push(v.jsx(k,{"code-path":"src/components/ContentRenderer.tsx:22:11",className:Kt("my-4 sm:my-6 space-y-2 sm:space-y-3",p==="ul"?"ml-4 sm:ml-6 list-disc":"ml-4 sm:ml-6 list-decimal"),children:m.map((H,G)=>v.jsx("li",{"code-path":"src/components/ContentRenderer.tsx:30:15",className:"text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 pl-2",children:T(H)},G))},g++)),m=[],p=null,y=!1}},T=k=>{const H=[];let G=0;const U=/\*\*(.+?)\*\*/g;let L;for(;(L=U.exec(k))!==null;)L.index>G&&H.push(k.slice(G,L.index)),H.push(v.jsx("strong",{"code-path":"src/components/ContentRenderer.tsx:58:11",className:"font-semibold text-slate-900 dark:text-slate-100",children:L[1]},L.index)),G=L.index+L[0].length;return G<k.length&&H.push(k.slice(G)),H.length>0?H:k};for(let k=0;k<h.length;k++){const G=h[k].trim();if(!G){S(),d.push(v.jsx("div",{"code-path":"src/components/ContentRenderer.tsx:78:23",className:"h-3 sm:h-4"},g++));continue}if(G.startsWith("## ")){S(),d.push(v.jsx("h2",{"code-path":"src/components/ContentRenderer.tsx:86:11",className:"mt-8 sm:mt-10 mb-4 sm:mb-5 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 scroll-mt-24",children:G.replace("## ","")},g++));continue}if(G.startsWith("### ")){S(),d.push(v.jsx("h3",{"code-path":"src/components/ContentRenderer.tsx:99:11",className:"mt-6 sm:mt-8 mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-100 scroll-mt-24",children:G.replace("### ","")},g++));continue}if(G.startsWith("#### ")){S(),d.push(v.jsx("h4",{"code-path":"src/components/ContentRenderer.tsx:112:11",className:"mt-5 sm:mt-6 mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200 scroll-mt-24",children:G.replace("#### ","")},g++));continue}if(G.startsWith("> ")){S();const U=[];let L=k;for(;L<h.length&&h[L].trim().startsWith("> ");)U.push(h[L].trim().replace("> ","")),L++;d.push(v.jsx("blockquote",{"code-path":"src/components/ContentRenderer.tsx:132:11",className:"my-5 sm:my-6 border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/10 pl-4 sm:pl-5 pr-3 sm:pr-4 py-3 sm:py-4 italic text-sm sm:text-base text-slate-700 dark:text-slate-300 rounded-r-lg",children:U.map((V,Y)=>v.jsx("p",{"code-path":"src/components/ContentRenderer.tsx:137:15",className:"mb-1 last:mb-0",children:V},Y))},g++)),k=L-1;continue}if(G.startsWith("- ")||G.startsWith("* ")){(!y||p!=="ul")&&(S(),y=!0,p="ul"),m.push(G.replace(/^[-*] /,""));continue}if(/^\d+\./.test(G)){(!y||p!=="ol")&&(S(),y=!0,p="ol"),m.push(G.replace(/^\d+\.\s*/,""));continue}S(),d.push(v.jsx("p",{"code-path":"src/components/ContentRenderer.tsx:170:9",className:"my-3 sm:my-4 text-sm sm:text-base leading-relaxed sm:leading-7 text-slate-700 dark:text-slate-300",children:T(G)},g++))}return S(),d};return v.jsx("div",{"code-path":"src/components/ContentRenderer.tsx:186:5",className:Kt("space-y-1",o),children:c(s)})}function P1({currentPath:s}){const{prev:o,next:c}=Z0(s);return v.jsxs("div",{"code-path":"src/components/NavigationFooter.tsx:14:5",className:"mt-12 flex items-center justify-between border-t pt-6 dark:border-slate-800",children:[o?v.jsxs(qt,{"code-path":"src/components/NavigationFooter.tsx:16:9",to:o.path,className:Kt("group flex items-center gap-2 rounded-lg border px-4 py-3 text-sm transition-colors","border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50","dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/20"),children:[v.jsx(N0,{"code-path":"src/components/NavigationFooter.tsx:24:11",className:"h-4 w-4 transition-transform group-hover:-translate-x-1"}),v.jsxs("div",{"code-path":"src/components/NavigationFooter.tsx:25:11",className:"flex flex-col items-start",children:[v.jsx("span",{"code-path":"src/components/NavigationFooter.tsx:26:13",className:"text-xs text-slate-500 dark:text-slate-400",children:"Previous"}),v.jsx("span",{"code-path":"src/components/NavigationFooter.tsx:27:13",className:"font-medium",children:o.title})]})]}):v.jsx("div",{"code-path":"src/components/NavigationFooter.tsx:31:9"}),c?v.jsxs(qt,{"code-path":"src/components/NavigationFooter.tsx:35:9",to:c.path,className:Kt("group flex items-center gap-2 rounded-lg border px-4 py-3 text-sm transition-colors","border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50","dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/20"),children:[v.jsxs("div",{"code-path":"src/components/NavigationFooter.tsx:43:11",className:"flex flex-col items-end",children:[v.jsx("span",{"code-path":"src/components/NavigationFooter.tsx:44:13",className:"text-xs text-slate-500 dark:text-slate-400",children:"Next"}),v.jsx("span",{"code-path":"src/components/NavigationFooter.tsx:45:13",className:"font-medium",children:c.title})]}),v.jsx(ll,{"code-path":"src/components/NavigationFooter.tsx:47:11",className:"h-4 w-4 transition-transform group-hover:translate-x-1"})]}):v.jsx("div",{"code-path":"src/components/NavigationFooter.tsx:50:9"})]})}function Ce(){const o=Pt().pathname;let c="",r="";if(o==="/foreword")c="foreword",r="Front Matter";else if(o==="/preface")c="preface",r="Front Matter";else if(o.includes("/unit1/")){r="Unit 1: Techniques and Methods";const d=o.match(/chapter(\d+)/);d&&(c=`ch${d[1]}`)}else if(o.includes("/unit2/")){r="Unit 2: Development of Basic Skills";const d=o.match(/chapter(\d+)/);d&&(c=`ch${d[1]}`)}else if(o.includes("/unit3/")){r="Unit 3: Evaluation Techniques";const d=o.match(/chapter(\d+)/);d&&(c=`ch${d[1]}`)}else o.includes("/reference/")&&(r="Reference Material",o.includes("speaking-skills")?c="ch25":o.includes("proverbs")?c="ch26":o.includes("lesson-plans")&&(c="ch27"));const h=X1(c);return h?v.jsxs("article",{"code-path":"src/pages/ContentPage.tsx:57:5",className:"mx-auto max-w-4xl px-4 sm:px-6",children:[v.jsx("nav",{"code-path":"src/pages/ContentPage.tsx:59:7",className:"mb-6 text-sm text-slate-500 dark:text-slate-400",children:v.jsxs("ol",{"code-path":"src/pages/ContentPage.tsx:60:9",className:"flex flex-wrap items-center gap-2",children:[v.jsx("li",{"code-path":"src/pages/ContentPage.tsx:61:11",children:v.jsx("a",{"code-path":"src/pages/ContentPage.tsx:62:13",href:"/",className:"hover:text-indigo-600 dark:hover:text-indigo-400",children:"Home"})}),v.jsx("li",{"code-path":"src/pages/ContentPage.tsx:66:11",className:"text-slate-400",children:"/"}),r&&v.jsxs(v.Fragment,{children:[v.jsx("li",{"code-path":"src/pages/ContentPage.tsx:69:15",children:v.jsx("span",{"code-path":"src/pages/ContentPage.tsx:70:17",className:"text-slate-500 dark:text-slate-400",children:r})}),v.jsx("li",{"code-path":"src/pages/ContentPage.tsx:72:15",className:"text-slate-400",children:"/"})]}),v.jsx("li",{"code-path":"src/pages/ContentPage.tsx:75:11",className:"text-slate-700 dark:text-slate-300 font-medium",children:h.title})]})}),v.jsx("header",{"code-path":"src/pages/ContentPage.tsx:80:7",className:"mb-8 border-b border-slate-200 pb-6 dark:border-slate-800",children:v.jsx("h1",{"code-path":"src/pages/ContentPage.tsx:81:9",className:"text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl lg:text-4xl",children:h.title})}),v.jsx("div",{"code-path":"src/pages/ContentPage.tsx:87:7",className:"prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-20",children:v.jsx(J1,{"code-path":"src/pages/ContentPage.tsx:88:9",content:h.content})}),v.jsx(P1,{"code-path":"src/pages/ContentPage.tsx:92:7",currentPath:o})]}):v.jsxs("div",{"code-path":"src/pages/ContentPage.tsx:44:7",className:"flex min-h-[60vh] flex-col items-center justify-center px-4",children:[v.jsx(ni,{"code-path":"src/pages/ContentPage.tsx:45:9",className:"h-16 w-16 text-slate-300 dark:text-slate-600"}),v.jsx("h2",{"code-path":"src/pages/ContentPage.tsx:46:9",className:"mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100",children:"Content Coming Soon"}),v.jsx("p",{"code-path":"src/pages/ContentPage.tsx:49:9",className:"mt-2 text-center text-slate-600 dark:text-slate-400",children:"This chapter is being prepared. Please check back later."})]})}function W1(){const[s,o]=R.useState(!1),[c,r]=R.useState(!1),d=Pt().pathname==="/";return v.jsxs("div",{"code-path":"src/App.tsx:18:5",className:"min-h-screen bg-white dark:bg-slate-950",children:[v.jsx(F0,{"code-path":"src/App.tsx:19:7",onMenuClick:()=>o(!s),onSearchClick:()=>r(!0),isSidebarOpen:s}),v.jsxs("div",{"code-path":"src/App.tsx:25:7",className:"flex",children:[v.jsx(Hb,{"code-path":"src/App.tsx:26:9",isOpen:s,onClose:()=>o(!1)}),v.jsx("main",{"code-path":"src/App.tsx:31:9",className:Kt("flex-1 transition-all duration-300","lg:ml-0","min-h-[calc(100vh-3.5rem)]"),children:v.jsx("div",{"code-path":"src/App.tsx:38:11",className:Kt("mx-auto py-6 sm:py-8",d?"":"px-4 sm:px-6 lg:px-8"),children:v.jsxs(Lv,{"code-path":"src/App.tsx:42:13",children:[v.jsx(Se,{"code-path":"src/App.tsx:43:15",path:"/",element:v.jsx(K1,{"code-path":"src/App.tsx:43:40"})}),v.jsx(Se,{"code-path":"src/App.tsx:46:15",path:"/foreword",element:v.jsx(Ce,{"code-path":"src/App.tsx:46:48"})}),v.jsx(Se,{"code-path":"src/App.tsx:47:15",path:"/preface",element:v.jsx(Ce,{"code-path":"src/App.tsx:47:47"})}),v.jsx(Se,{"code-path":"src/App.tsx:50:15",path:"/unit1/chapter1",element:v.jsx(Ce,{"code-path":"src/App.tsx:50:54"})}),v.jsx(Se,{"code-path":"src/App.tsx:51:15",path:"/unit1/chapter2",element:v.jsx(Ce,{"code-path":"src/App.tsx:51:54"})}),v.jsx(Se,{"code-path":"src/App.tsx:52:15",path:"/unit1/chapter3",element:v.jsx(Ce,{"code-path":"src/App.tsx:52:54"})}),v.jsx(Se,{"code-path":"src/App.tsx:53:15",path:"/unit1/chapter4",element:v.jsx(Ce,{"code-path":"src/App.tsx:53:54"})}),v.jsx(Se,{"code-path":"src/App.tsx:54:15",path:"/unit1/chapter5",element:v.jsx(Ce,{"code-path":"src/App.tsx:54:54"})}),v.jsx(Se,{"code-path":"src/App.tsx:55:15",path:"/unit1/chapter6",element:v.jsx(Ce,{"code-path":"src/App.tsx:55:54"})}),v.jsx(Se,{"code-path":"src/App.tsx:56:15",path:"/unit1/chapter7",element:v.jsx(Ce,{"code-path":"src/App.tsx:56:54"})}),v.jsx(Se,{"code-path":"src/App.tsx:57:15",path:"/unit1/chapter8",element:v.jsx(Ce,{"code-path":"src/App.tsx:57:54"})}),v.jsx(Se,{"code-path":"src/App.tsx:58:15",path:"/unit1/chapter9",element:v.jsx(Ce,{"code-path":"src/App.tsx:58:54"})}),v.jsx(Se,{"code-path":"src/App.tsx:59:15",path:"/unit1/chapter10",element:v.jsx(Ce,{"code-path":"src/App.tsx:59:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:60:15",path:"/unit1/chapter11",element:v.jsx(Ce,{"code-path":"src/App.tsx:60:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:63:15",path:"/unit2/chapter12",element:v.jsx(Ce,{"code-path":"src/App.tsx:63:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:64:15",path:"/unit2/chapter13",element:v.jsx(Ce,{"code-path":"src/App.tsx:64:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:65:15",path:"/unit2/chapter14",element:v.jsx(Ce,{"code-path":"src/App.tsx:65:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:66:15",path:"/unit2/chapter15",element:v.jsx(Ce,{"code-path":"src/App.tsx:66:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:67:15",path:"/unit2/chapter16",element:v.jsx(Ce,{"code-path":"src/App.tsx:67:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:68:15",path:"/unit2/chapter17",element:v.jsx(Ce,{"code-path":"src/App.tsx:68:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:69:15",path:"/unit2/chapter18",element:v.jsx(Ce,{"code-path":"src/App.tsx:69:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:72:15",path:"/unit3/chapter19",element:v.jsx(Ce,{"code-path":"src/App.tsx:72:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:73:15",path:"/unit3/chapter20",element:v.jsx(Ce,{"code-path":"src/App.tsx:73:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:74:15",path:"/unit3/chapter21",element:v.jsx(Ce,{"code-path":"src/App.tsx:74:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:75:15",path:"/unit3/chapter22",element:v.jsx(Ce,{"code-path":"src/App.tsx:75:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:76:15",path:"/unit3/chapter23",element:v.jsx(Ce,{"code-path":"src/App.tsx:76:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:77:15",path:"/unit3/chapter24",element:v.jsx(Ce,{"code-path":"src/App.tsx:77:55"})}),v.jsx(Se,{"code-path":"src/App.tsx:80:15",path:"/reference/speaking-skills",element:v.jsx(Ce,{"code-path":"src/App.tsx:80:65"})}),v.jsx(Se,{"code-path":"src/App.tsx:81:15",path:"/reference/proverbs",element:v.jsx(Ce,{"code-path":"src/App.tsx:81:58"})}),v.jsx(Se,{"code-path":"src/App.tsx:82:15",path:"/reference/lesson-plans",element:v.jsx(Ce,{"code-path":"src/App.tsx:82:62"})})]})})})]}),v.jsx(F1,{"code-path":"src/App.tsx:88:7",isOpen:c,onClose:()=>r(!1)})]})}function $1(){return v.jsx(m0,{"code-path":"src/App.tsx:95:5",children:v.jsx(s0,{"code-path":"src/App.tsx:96:7",children:v.jsx(W1,{"code-path":"src/App.tsx:97:9"})})})}Gy.createRoot(document.getElementById("root")).render(v.jsx(R.StrictMode,{"code-path":"src/main.tsx:7:3",children:v.jsx($1,{"code-path":"src/main.tsx:8:5"})}));
