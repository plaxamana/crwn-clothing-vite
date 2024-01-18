function bI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function UI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tv={exports:{}},_u={},Sv={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),jI=Symbol.for("react.portal"),zI=Symbol.for("react.fragment"),BI=Symbol.for("react.strict_mode"),WI=Symbol.for("react.profiler"),HI=Symbol.for("react.provider"),qI=Symbol.for("react.context"),KI=Symbol.for("react.forward_ref"),GI=Symbol.for("react.suspense"),QI=Symbol.for("react.memo"),YI=Symbol.for("react.lazy"),Tm=Symbol.iterator;function XI(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var Cv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Av=Object.assign,Rv={};function rs(t,e,n){this.props=t,this.context=e,this.refs=Rv,this.updater=n||Cv}rs.prototype.isReactComponent={};rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pv(){}Pv.prototype=rs.prototype;function rf(t,e,n){this.props=t,this.context=e,this.refs=Rv,this.updater=n||Cv}var sf=rf.prototype=new Pv;sf.constructor=rf;Av(sf,rs.prototype);sf.isPureReactComponent=!0;var Sm=Array.isArray,kv=Object.prototype.hasOwnProperty,of={current:null},xv={key:!0,ref:!0,__self:!0,__source:!0};function Nv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kv.call(e,r)&&!xv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Bo,type:t,key:s,ref:o,props:i,_owner:of.current}}function JI(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function af(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function ZI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cm=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZI(""+t.key):e.toString(36)}function Qa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bo:case jI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ec(o,0):r,Sm(i)?(n="",t!=null&&(n=t.replace(Cm,"$&/")+"/"),Qa(i,e,n,"",function(u){return u})):i!=null&&(af(i)&&(i=JI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Cm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ec(s,a);o+=Qa(s,e,n,l,i)}else if(l=XI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ec(s,a++),o+=Qa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(t,e,n){if(t==null)return t;var r=[],i=0;return Qa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function eT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rt={current:null},Ya={transition:null},tT={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:of};K.Children={map:Ea,forEach:function(t,e,n){Ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ea(t,function(){e++}),e},toArray:function(t){return Ea(t,function(e){return e})||[]},only:function(t){if(!af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=rs;K.Fragment=zI;K.Profiler=WI;K.PureComponent=rf;K.StrictMode=BI;K.Suspense=GI;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tT;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Av({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=of.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)kv.call(e,l)&&!xv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bo,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:qI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HI,_context:t},t.Consumer=t};K.createElement=Nv;K.createFactory=function(t){var e=Nv.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:KI,render:t}};K.isValidElement=af;K.lazy=function(t){return{$$typeof:YI,_payload:{_status:-1,_result:t},_init:eT}};K.memo=function(t,e){return{$$typeof:QI,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return rt.current.useCallback(t,e)};K.useContext=function(t){return rt.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return rt.current.useDeferredValue(t)};K.useEffect=function(t,e){return rt.current.useEffect(t,e)};K.useId=function(){return rt.current.useId()};K.useImperativeHandle=function(t,e,n){return rt.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return rt.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return rt.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return rt.current.useMemo(t,e)};K.useReducer=function(t,e,n){return rt.current.useReducer(t,e,n)};K.useRef=function(t){return rt.current.useRef(t)};K.useState=function(t){return rt.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return rt.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return rt.current.useTransition()};K.version="18.2.0";Sv.exports=K;var E=Sv.exports;const $r=UI(E),nT=bI({__proto__:null,default:$r},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rT=E,iT=Symbol.for("react.element"),sT=Symbol.for("react.fragment"),oT=Object.prototype.hasOwnProperty,aT=rT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lT={key:!0,ref:!0,__self:!0,__source:!0};function Dv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)oT.call(e,r)&&!lT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iT,type:t,key:s,ref:o,props:i,_owner:aT.current}}_u.Fragment=sT;_u.jsx=Dv;_u.jsxs=Dv;Tv.exports=_u;var w=Tv.exports,Eh={},Ov={exports:{}},wt={},Vv={exports:{}},Lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,M){var $=x.length;x.push(M);e:for(;0<$;){var ue=$-1>>>1,me=x[ue];if(0<i(me,M))x[ue]=M,x[$]=me,$=ue;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var M=x[0],$=x.pop();if($!==M){x[0]=$;e:for(var ue=0,me=x.length,sn=me>>>1;ue<sn;){var ft=2*(ue+1)-1,xn=x[ft],pt=ft+1,Tt=x[pt];if(0>i(xn,$))pt<me&&0>i(Tt,xn)?(x[ue]=Tt,x[pt]=$,ue=pt):(x[ue]=xn,x[ft]=$,ue=ft);else if(pt<me&&0>i(Tt,$))x[ue]=Tt,x[pt]=$,ue=pt;else break e}}return M}function i(x,M){var $=x.sortIndex-M.sortIndex;return $!==0?$:x.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,v=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(x){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=x)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function _(x){if(v=!1,g(x),!y)if(n(l)!==null)y=!0,_r(S);else{var M=n(u);M!==null&&It(_,M.startTime-x)}}function S(x,M){y=!1,v&&(v=!1,p(O),O=-1),m=!0;var $=d;try{for(g(M),h=n(l);h!==null&&(!(h.expirationTime>M)||x&&!dt());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,d=h.priorityLevel;var me=ue(h.expirationTime<=M);M=t.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&r(l),g(M)}else r(l);h=n(l)}if(h!==null)var sn=!0;else{var ft=n(u);ft!==null&&It(_,ft.startTime-M),sn=!1}return sn}finally{h=null,d=$,m=!1}}var R=!1,C=null,O=-1,Q=5,z=-1;function dt(){return!(t.unstable_now()-z<Q)}function yr(){if(C!==null){var x=t.unstable_now();z=x;var M=!0;try{M=C(!0,x)}finally{M?vr():(R=!1,C=null)}}else R=!1}var vr;if(typeof f=="function")vr=function(){f(yr)};else if(typeof MessageChannel<"u"){var _a=new MessageChannel,_c=_a.port2;_a.port1.onmessage=yr,vr=function(){_c.postMessage(null)}}else vr=function(){I(yr,0)};function _r(x){C=x,R||(R=!0,vr())}function It(x,M){O=I(function(){x(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,_r(S))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var $=d;d=M;try{return x()}finally{d=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,M){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var $=d;d=x;try{return M()}finally{d=$}},t.unstable_scheduleCallback=function(x,M,$){var ue=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ue+$:ue):$=ue,x){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=$+me,x={id:c++,callback:M,priorityLevel:x,startTime:$,expirationTime:me,sortIndex:-1},$>ue?(x.sortIndex=$,e(u,x),n(l)===null&&x===n(u)&&(v?(p(O),O=-1):v=!0,It(_,$-ue))):(x.sortIndex=me,e(l,x),y||m||(y=!0,_r(S))),x},t.unstable_shouldYield=dt,t.unstable_wrapCallback=function(x){var M=d;return function(){var $=d;d=M;try{return x.apply(this,arguments)}finally{d=$}}}})(Lv);Vv.exports=Lv;var uT=Vv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=E,vt=uT;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $v=new Set,so={};function Xr(t,e){Mi(t,e),Mi(t+"Capture",e)}function Mi(t,e){for(so[t]=e,t=0;t<e.length;t++)$v.add(e[t])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ih=Object.prototype.hasOwnProperty,cT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Am={},Rm={};function hT(t){return Ih.call(Rm,t)?!0:Ih.call(Am,t)?!1:cT.test(t)?Rm[t]=!0:(Am[t]=!0,!1)}function dT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fT(t,e,n,r){if(e===null||typeof e>"u"||dT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var lf=/[\-:]([a-z])/g;function uf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lf,uf);be[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lf,uf);be[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lf,uf);be[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function cf(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fT(e,n,i,r)&&(n=null),r||i===null?hT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),ci=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),bv=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),Sh=Symbol.for("react.suspense"),Ch=Symbol.for("react.suspense_list"),ff=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),Uv=Symbol.for("react.offscreen"),Pm=Symbol.iterator;function vs(t){return t===null||typeof t!="object"?null:(t=Pm&&t[Pm]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Object.assign,Ic;function ks(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Tc=!1;function Sc(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function pT(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hi:return"Fragment";case ci:return"Portal";case Th:return"Profiler";case hf:return"StrictMode";case Sh:return"Suspense";case Ch:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bv:return(t.displayName||"Context")+".Consumer";case Fv:return(t._context.displayName||"Context")+".Provider";case df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ff:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function mT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gT(t){var e=jv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=gT(t))}function zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rh(t,e){var n=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function km(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bv(t,e){e=e.checked,e!=null&&cf(t,"checked",e,!1)}function Ph(t,e){Bv(t,e);var n=or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kh(t,e.type,n):e.hasOwnProperty("defaultValue")&&kh(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kh(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xs=Array.isArray;function Ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(xs(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Wv(t,e){var n=or(e.value),r=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,qv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yT=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(t){yT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zs[e]=zs[t]})});function Kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zs.hasOwnProperty(t)&&zs[t]?(""+e).trim():e+"px"}function Gv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vT=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dh(t,e){if(e){if(vT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Oh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vh=null;function pf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lh=null,Ai=null,Ri=null;function Om(t){if(t=qo(t)){if(typeof Lh!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Su(e),Lh(t.stateNode,t.type,e))}}function Qv(t){Ai?Ri?Ri.push(t):Ri=[t]:Ai=t}function Yv(){if(Ai){var t=Ai,e=Ri;if(Ri=Ai=null,Om(t),e)for(t=0;t<e.length;t++)Om(e[t])}}function Xv(t,e){return t(e)}function Jv(){}var Cc=!1;function Zv(t,e,n){if(Cc)return t(e,n);Cc=!0;try{return Xv(t,e,n)}finally{Cc=!1,(Ai!==null||Ri!==null)&&(Jv(),Yv())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=Su(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Mh=!1;if(vn)try{var _s={};Object.defineProperty(_s,"passive",{get:function(){Mh=!0}}),window.addEventListener("test",_s,_s),window.removeEventListener("test",_s,_s)}catch{Mh=!1}function _T(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Bs=!1,wl=null,El=!1,$h=null,wT={onError:function(t){Bs=!0,wl=t}};function ET(t,e,n,r,i,s,o,a,l){Bs=!1,wl=null,_T.apply(wT,arguments)}function IT(t,e,n,r,i,s,o,a,l){if(ET.apply(this,arguments),Bs){if(Bs){var u=wl;Bs=!1,wl=null}else throw Error(A(198));El||(El=!0,$h=u)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function e_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vm(t){if(Jr(t)!==t)throw Error(A(188))}function TT(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vm(i),t;if(s===r)return Vm(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function t_(t){return t=TT(t),t!==null?n_(t):null}function n_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=n_(t);if(e!==null)return e;t=t.sibling}return null}var r_=vt.unstable_scheduleCallback,Lm=vt.unstable_cancelCallback,ST=vt.unstable_shouldYield,CT=vt.unstable_requestPaint,ve=vt.unstable_now,AT=vt.unstable_getCurrentPriorityLevel,mf=vt.unstable_ImmediatePriority,i_=vt.unstable_UserBlockingPriority,Il=vt.unstable_NormalPriority,RT=vt.unstable_LowPriority,s_=vt.unstable_IdlePriority,wu=null,Jt=null;function PT(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(wu,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:NT,kT=Math.log,xT=Math.LN2;function NT(t){return t>>>=0,t===0?32:31-(kT(t)/xT|0)|0}var Ca=64,Aa=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ns(a):(s&=o,s!==0&&(r=Ns(s)))}else o=n&~i,o!==0?r=Ns(o):s!==0&&(r=Ns(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function DT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=DT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Fh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o_(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function VT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function a_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var l_,yf,u_,c_,h_,bh=!1,Ra=[],Kn=null,Gn=null,Qn=null,lo=new Map,uo=new Map,$n=[],LT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mm(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function ws(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qo(e),e!==null&&yf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MT(t,e,n,r,i){switch(e){case"focusin":return Kn=ws(Kn,t,e,n,r,i),!0;case"dragenter":return Gn=ws(Gn,t,e,n,r,i),!0;case"mouseover":return Qn=ws(Qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return lo.set(s,ws(lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,uo.set(s,ws(uo.get(s)||null,t,e,n,r,i)),!0}return!1}function d_(t){var e=Tr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=e_(n),e!==null){t.blockedOn=e,h_(t.priority,function(){u_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vh=r,n.target.dispatchEvent(r),Vh=null}else return e=qo(n),e!==null&&yf(e),t.blockedOn=n,!1;e.shift()}return!0}function $m(t,e,n){Xa(t)&&n.delete(e)}function $T(){bh=!1,Kn!==null&&Xa(Kn)&&(Kn=null),Gn!==null&&Xa(Gn)&&(Gn=null),Qn!==null&&Xa(Qn)&&(Qn=null),lo.forEach($m),uo.forEach($m)}function Es(t,e){t.blockedOn===e&&(t.blockedOn=null,bh||(bh=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,$T)))}function co(t){function e(i){return Es(i,t)}if(0<Ra.length){Es(Ra[0],t);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kn!==null&&Es(Kn,t),Gn!==null&&Es(Gn,t),Qn!==null&&Es(Qn,t),lo.forEach(e),uo.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)d_(n),n.blockedOn===null&&$n.shift()}var Pi=Rn.ReactCurrentBatchConfig,Sl=!0;function FT(t,e,n,r){var i=ee,s=Pi.transition;Pi.transition=null;try{ee=1,vf(t,e,n,r)}finally{ee=i,Pi.transition=s}}function bT(t,e,n,r){var i=ee,s=Pi.transition;Pi.transition=null;try{ee=4,vf(t,e,n,r)}finally{ee=i,Pi.transition=s}}function vf(t,e,n,r){if(Sl){var i=Uh(t,e,n,r);if(i===null)Mc(t,e,r,Cl,n),Mm(t,r);else if(MT(i,t,e,n,r))r.stopPropagation();else if(Mm(t,r),e&4&&-1<LT.indexOf(t)){for(;i!==null;){var s=qo(i);if(s!==null&&l_(s),s=Uh(t,e,n,r),s===null&&Mc(t,e,r,Cl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mc(t,e,r,null,n)}}var Cl=null;function Uh(t,e,n,r){if(Cl=null,t=pf(r),t=Tr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=e_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function f_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AT()){case mf:return 1;case i_:return 4;case Il:case RT:return 16;case s_:return 536870912;default:return 16}default:return 16}}var Bn=null,_f=null,Ja=null;function p_(){if(Ja)return Ja;var t,e=_f,n=e.length,r,i="value"in Bn?Bn.value:Bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ja=i.slice(t,1<r?1-r:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pa(){return!0}function Fm(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pa:Fm,this.isPropagationStopped=Fm,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wf=Et(is),Ho=fe({},is,{view:0,detail:0}),UT=Et(Ho),Rc,Pc,Is,Eu=fe({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Rc=t.screenX-Is.screenX,Pc=t.screenY-Is.screenY):Pc=Rc=0,Is=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),bm=Et(Eu),jT=fe({},Eu,{dataTransfer:0}),zT=Et(jT),BT=fe({},Ho,{relatedTarget:0}),kc=Et(BT),WT=fe({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),HT=Et(WT),qT=fe({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KT=Et(qT),GT=fe({},is,{data:0}),Um=Et(GT),QT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XT[t])?!!e[t]:!1}function Ef(){return JT}var ZT=fe({},Ho,{key:function(t){if(t.key){var e=QT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eS=Et(ZT),tS=fe({},Eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=Et(tS),nS=fe({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),rS=Et(nS),iS=fe({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),sS=Et(iS),oS=fe({},Eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aS=Et(oS),lS=[9,13,27,32],If=vn&&"CompositionEvent"in window,Ws=null;vn&&"documentMode"in document&&(Ws=document.documentMode);var uS=vn&&"TextEvent"in window&&!Ws,m_=vn&&(!If||Ws&&8<Ws&&11>=Ws),zm=String.fromCharCode(32),Bm=!1;function g_(t,e){switch(t){case"keyup":return lS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var di=!1;function cS(t,e){switch(t){case"compositionend":return y_(e);case"keypress":return e.which!==32?null:(Bm=!0,zm);case"textInput":return t=e.data,t===zm&&Bm?null:t;default:return null}}function hS(t,e){if(di)return t==="compositionend"||!If&&g_(t,e)?(t=p_(),Ja=_f=Bn=null,di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m_&&e.locale!=="ko"?null:e.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dS[t.type]:e==="textarea"}function v_(t,e,n,r){Qv(r),e=Al(e,"onChange"),0<e.length&&(n=new wf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hs=null,ho=null;function fS(t){k_(t,0)}function Iu(t){var e=mi(t);if(zv(e))return t}function pS(t,e){if(t==="change")return e}var __=!1;if(vn){var xc;if(vn){var Nc="oninput"in document;if(!Nc){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),Nc=typeof Hm.oninput=="function"}xc=Nc}else xc=!1;__=xc&&(!document.documentMode||9<document.documentMode)}function qm(){Hs&&(Hs.detachEvent("onpropertychange",w_),ho=Hs=null)}function w_(t){if(t.propertyName==="value"&&Iu(ho)){var e=[];v_(e,ho,t,pf(t)),Zv(fS,e)}}function mS(t,e,n){t==="focusin"?(qm(),Hs=e,ho=n,Hs.attachEvent("onpropertychange",w_)):t==="focusout"&&qm()}function gS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Iu(ho)}function yS(t,e){if(t==="click")return Iu(e)}function vS(t,e){if(t==="input"||t==="change")return Iu(e)}function _S(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:_S;function fo(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ih.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,e){var n=Km(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function E_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?E_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I_(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function Tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wS(t){var e=I_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&E_(n.ownerDocument.documentElement,n)){if(r!==null&&Tf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gm(n,s);var o=Gm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ES=vn&&"documentMode"in document&&11>=document.documentMode,fi=null,jh=null,qs=null,zh=!1;function Qm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||fi==null||fi!==_l(r)||(r=fi,"selectionStart"in r&&Tf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&fo(qs,r)||(qs=r,r=Al(jh,"onSelect"),0<r.length&&(e=new wf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fi)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var pi={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Dc={},T_={};vn&&(T_=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function Tu(t){if(Dc[t])return Dc[t];if(!pi[t])return t;var e=pi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T_)return Dc[t]=e[n];return t}var S_=Tu("animationend"),C_=Tu("animationiteration"),A_=Tu("animationstart"),R_=Tu("transitionend"),P_=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){P_.set(t,e),Xr(e,[t])}for(var Oc=0;Oc<Ym.length;Oc++){var Vc=Ym[Oc],IS=Vc.toLowerCase(),TS=Vc[0].toUpperCase()+Vc.slice(1);hr(IS,"on"+TS)}hr(S_,"onAnimationEnd");hr(C_,"onAnimationIteration");hr(A_,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(R_,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function Xm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,IT(r,e,void 0,t),t.currentTarget=null}function k_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Xm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Xm(i,a,u),s=l}}}if(El)throw t=$h,El=!1,$h=null,t}function re(t,e){var n=e[Kh];n===void 0&&(n=e[Kh]=new Set);var r=t+"__bubble";n.has(r)||(x_(e,t,2,!1),n.add(r))}function Lc(t,e,n){var r=0;e&&(r|=4),x_(n,t,r,e)}var xa="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[xa]){t[xa]=!0,$v.forEach(function(n){n!=="selectionchange"&&(SS.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xa]||(e[xa]=!0,Lc("selectionchange",!1,e))}}function x_(t,e,n,r){switch(f_(e)){case 1:var i=FT;break;case 4:i=bT;break;default:i=vf}n=i.bind(null,e,n,t),i=void 0,!Mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Zv(function(){var u=s,c=pf(n),h=[];e:{var d=P_.get(t);if(d!==void 0){var m=wf,y=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":m=eS;break;case"focusin":y="focus",m=kc;break;case"focusout":y="blur",m=kc;break;case"beforeblur":case"afterblur":m=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=zT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=rS;break;case S_:case C_:case A_:m=HT;break;case R_:m=sS;break;case"scroll":m=UT;break;case"wheel":m=aS;break;case"copy":case"cut":case"paste":m=KT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=jm}var v=(e&4)!==0,I=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=ao(f,p),_!=null&&v.push(mo(f,_,g)))),I)break;f=f.return}0<v.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Vh&&(y=n.relatedTarget||n.fromElement)&&(Tr(y)||y[_n]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Tr(y):null,y!==null&&(I=Jr(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=bm,_="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=jm,_="onPointerLeave",p="onPointerEnter",f="pointer"),I=m==null?d:mi(m),g=y==null?d:mi(y),d=new v(_,f+"leave",m,n,c),d.target=I,d.relatedTarget=g,_=null,Tr(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=g,v.relatedTarget=I,_=v),I=_,m&&y)t:{for(v=m,p=y,f=0,g=v;g;g=si(g))f++;for(g=0,_=p;_;_=si(_))g++;for(;0<f-g;)v=si(v),f--;for(;0<g-f;)p=si(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=si(v),p=si(p)}v=null}else v=null;m!==null&&Jm(h,d,m,v,!1),y!==null&&I!==null&&Jm(h,I,y,v,!0)}}e:{if(d=u?mi(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var S=pS;else if(Wm(d))if(__)S=vS;else{S=gS;var R=mS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=yS);if(S&&(S=S(t,u))){v_(h,S,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&kh(d,"number",d.value)}switch(R=u?mi(u):window,t){case"focusin":(Wm(R)||R.contentEditable==="true")&&(fi=R,jh=u,qs=null);break;case"focusout":qs=jh=fi=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,Qm(h,n,c);break;case"selectionchange":if(ES)break;case"keydown":case"keyup":Qm(h,n,c)}var C;if(If)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else di?g_(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(m_&&n.locale!=="ko"&&(di||O!=="onCompositionStart"?O==="onCompositionEnd"&&di&&(C=p_()):(Bn=c,_f="value"in Bn?Bn.value:Bn.textContent,di=!0)),R=Al(u,O),0<R.length&&(O=new Um(O,t,null,n,c),h.push({event:O,listeners:R}),C?O.data=C:(C=y_(n),C!==null&&(O.data=C)))),(C=uS?cS(t,n):hS(t,n))&&(u=Al(u,"onBeforeInput"),0<u.length&&(c=new Um("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}k_(h,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ao(t,n),s!=null&&r.unshift(mo(t,s,i)),s=ao(t,e),s!=null&&r.push(mo(t,s,i))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ao(n,s),l!=null&&o.unshift(mo(n,l,a))):i||(l=ao(n,s),l!=null&&o.push(mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CS=/\r\n?/g,AS=/\u0000|\uFFFD/g;function Zm(t){return(typeof t=="string"?t:""+t).replace(CS,`
`).replace(AS,"")}function Na(t,e,n){if(e=Zm(e),Zm(t)!==e&&n)throw Error(A(425))}function Rl(){}var Bh=null,Wh=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,PS=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(t){return eg.resolve(null).then(t).catch(kS)}:qh;function kS(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);co(e)}function Yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),Gt="__reactFiber$"+ss,go="__reactProps$"+ss,_n="__reactContainer$"+ss,Kh="__reactEvents$"+ss,xS="__reactListeners$"+ss,NS="__reactHandles$"+ss;function Tr(t){var e=t[Gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[Gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tg(t);t!==null;){if(n=t[Gt])return n;t=tg(t)}return e}t=n,n=t.parentNode}return null}function qo(t){return t=t[Gt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Su(t){return t[go]||null}var Gh=[],gi=-1;function dr(t){return{current:t}}function ae(t){0>gi||(t.current=Gh[gi],Gh[gi]=null,gi--)}function ne(t,e){gi++,Gh[gi]=t.current,t.current=e}var ar={},Ye=dr(ar),lt=dr(!1),Fr=ar;function $i(t,e){var n=t.type.contextTypes;if(!n)return ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function Pl(){ae(lt),ae(Ye)}function ng(t,e,n){if(Ye.current!==ar)throw Error(A(168));ne(Ye,e),ne(lt,n)}function N_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,mT(t)||"Unknown",i));return fe({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Fr=Ye.current,ne(Ye,t),ne(lt,lt.current),!0}function rg(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=N_(t,e,Fr),r.__reactInternalMemoizedMergedChildContext=t,ae(lt),ae(Ye),ne(Ye,t)):ae(lt),ne(lt,n)}var ln=null,Cu=!1,Fc=!1;function D_(t){ln===null?ln=[t]:ln.push(t)}function DS(t){Cu=!0,D_(t)}function fr(){if(!Fc&&ln!==null){Fc=!0;var t=0,e=ee;try{var n=ln;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ln=null,Cu=!1}catch(i){throw ln!==null&&(ln=ln.slice(t+1)),r_(mf,fr),i}finally{ee=e,Fc=!1}}return null}var yi=[],vi=0,xl=null,Nl=0,St=[],Ct=0,br=null,cn=1,hn="";function wr(t,e){yi[vi++]=Nl,yi[vi++]=xl,xl=t,Nl=e}function O_(t,e,n){St[Ct++]=cn,St[Ct++]=hn,St[Ct++]=br,br=t;var r=cn;t=hn;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-bt(e)+i|n<<i|r,hn=s+t}else cn=1<<s|n<<i|r,hn=t}function Sf(t){t.return!==null&&(wr(t,1),O_(t,1,0))}function Cf(t){for(;t===xl;)xl=yi[--vi],yi[vi]=null,Nl=yi[--vi],yi[vi]=null;for(;t===br;)br=St[--Ct],St[Ct]=null,hn=St[--Ct],St[Ct]=null,cn=St[--Ct],St[Ct]=null}var yt=null,gt=null,ce=!1,$t=null;function V_(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ig(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,gt=Yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,gt=null,!0):!1;default:return!1}}function Qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yh(t){if(ce){var e=gt;if(e){var n=e;if(!ig(t,e)){if(Qh(t))throw Error(A(418));e=Yn(n.nextSibling);var r=yt;e&&ig(t,e)?V_(r,n):(t.flags=t.flags&-4097|2,ce=!1,yt=t)}}else{if(Qh(t))throw Error(A(418));t.flags=t.flags&-4097|2,ce=!1,yt=t}}}function sg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function Da(t){if(t!==yt)return!1;if(!ce)return sg(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=gt)){if(Qh(t))throw L_(),Error(A(418));for(;e;)V_(t,e),e=Yn(e.nextSibling)}if(sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=yt?Yn(t.stateNode.nextSibling):null;return!0}function L_(){for(var t=gt;t;)t=Yn(t.nextSibling)}function Fi(){gt=yt=null,ce=!1}function Af(t){$t===null?$t=[t]:$t.push(t)}var OS=Rn.ReactCurrentBatchConfig;function Lt(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Dl=dr(null),Ol=null,_i=null,Rf=null;function Pf(){Rf=_i=Ol=null}function kf(t){var e=Dl.current;ae(Dl),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ki(t,e){Ol=t,Rf=_i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ot=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(Rf!==t)if(t={context:t,memoizedValue:e,next:null},_i===null){if(Ol===null)throw Error(A(308));_i=t,Ol.dependencies={lanes:0,firstContext:t}}else _i=_i.next=t;return e}var Sr=null;function xf(t){Sr===null?Sr=[t]:Sr.push(t)}function M_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xf(e)):(n.next=i.next,i.next=n),e.interleaved=n,wn(t,r)}function wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wn(t,n)}return i=r.interleaved,i===null?(e.next=e,xf(r)):(e.next=i.next,i.next=e),r.interleaved=e,wn(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gf(t,n)}}function og(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vl(t,e,n,r){var i=t.updateQueue;Mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=fe({},h,d);break e;case 2:Mn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=h}}function ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var F_=new Mv.Component().refs;function Jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Zn(t),s=mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(Ut(e,t,i,r),el(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Zn(t),s=mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(Ut(e,t,i,r),el(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=Zn(t),i=mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,r),e!==null&&(Ut(e,t,r,n),el(e,t,r))}};function lg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,r)||!fo(i,s):!0}function b_(t,e,n){var r=!1,i=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=xt(s):(i=ut(e)?Fr:Ye.current,r=e.contextTypes,s=(r=r!=null)?$i(t,i):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ug(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function Zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=F_,Nf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xt(s):(s=ut(e)?Fr:Ye.current,i.context=$i(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Au.enqueueReplaceState(i,i.state,null),Vl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===F_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cg(t){var e=t._init;return e(t._payload)}function U_(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=er(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,_){return f===null||f.tag!==6?(f=Hc(g,p.mode,_),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,_){var S=g.type;return S===hi?c(p,f,g.props.children,_,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ln&&cg(S)===f.type)?(_=i(f,g.props),_.ref=Ts(p,f,g),_.return=p,_):(_=ol(g.type,g.key,g.props,null,p.mode,_),_.ref=Ts(p,f,g),_.return=p,_)}function u(p,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=qc(g,p.mode,_),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,_,S){return f===null||f.tag!==7?(f=Dr(g,p.mode,_,S),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hc(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ia:return g=ol(f.type,f.key,f.props,null,p.mode,g),g.ref=Ts(p,null,f),g.return=p,g;case ci:return f=qc(f,p.mode,g),f.return=p,f;case Ln:var _=f._init;return h(p,_(f._payload),g)}if(xs(f)||vs(f))return f=Dr(f,p.mode,g,null),f.return=p,f;Oa(p,f)}return null}function d(p,f,g,_){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(p,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ia:return g.key===S?l(p,f,g,_):null;case ci:return g.key===S?u(p,f,g,_):null;case Ln:return S=g._init,d(p,f,S(g._payload),_)}if(xs(g)||vs(g))return S!==null?null:c(p,f,g,_,null);Oa(p,g)}return null}function m(p,f,g,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,a(f,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ia:return p=p.get(_.key===null?g:_.key)||null,l(f,p,_,S);case ci:return p=p.get(_.key===null?g:_.key)||null,u(f,p,_,S);case Ln:var R=_._init;return m(p,f,g,R(_._payload),S)}if(xs(_)||vs(_))return p=p.get(g)||null,c(f,p,_,S,null);Oa(f,_)}return null}function y(p,f,g,_){for(var S=null,R=null,C=f,O=f=0,Q=null;C!==null&&O<g.length;O++){C.index>O?(Q=C,C=null):Q=C.sibling;var z=d(p,C,g[O],_);if(z===null){C===null&&(C=Q);break}t&&C&&z.alternate===null&&e(p,C),f=s(z,f,O),R===null?S=z:R.sibling=z,R=z,C=Q}if(O===g.length)return n(p,C),ce&&wr(p,O),S;if(C===null){for(;O<g.length;O++)C=h(p,g[O],_),C!==null&&(f=s(C,f,O),R===null?S=C:R.sibling=C,R=C);return ce&&wr(p,O),S}for(C=r(p,C);O<g.length;O++)Q=m(C,p,O,g[O],_),Q!==null&&(t&&Q.alternate!==null&&C.delete(Q.key===null?O:Q.key),f=s(Q,f,O),R===null?S=Q:R.sibling=Q,R=Q);return t&&C.forEach(function(dt){return e(p,dt)}),ce&&wr(p,O),S}function v(p,f,g,_){var S=vs(g);if(typeof S!="function")throw Error(A(150));if(g=S.call(g),g==null)throw Error(A(151));for(var R=S=null,C=f,O=f=0,Q=null,z=g.next();C!==null&&!z.done;O++,z=g.next()){C.index>O?(Q=C,C=null):Q=C.sibling;var dt=d(p,C,z.value,_);if(dt===null){C===null&&(C=Q);break}t&&C&&dt.alternate===null&&e(p,C),f=s(dt,f,O),R===null?S=dt:R.sibling=dt,R=dt,C=Q}if(z.done)return n(p,C),ce&&wr(p,O),S;if(C===null){for(;!z.done;O++,z=g.next())z=h(p,z.value,_),z!==null&&(f=s(z,f,O),R===null?S=z:R.sibling=z,R=z);return ce&&wr(p,O),S}for(C=r(p,C);!z.done;O++,z=g.next())z=m(C,p,O,z.value,_),z!==null&&(t&&z.alternate!==null&&C.delete(z.key===null?O:z.key),f=s(z,f,O),R===null?S=z:R.sibling=z,R=z);return t&&C.forEach(function(yr){return e(p,yr)}),ce&&wr(p,O),S}function I(p,f,g,_){if(typeof g=="object"&&g!==null&&g.type===hi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ia:e:{for(var S=g.key,R=f;R!==null;){if(R.key===S){if(S=g.type,S===hi){if(R.tag===7){n(p,R.sibling),f=i(R,g.props.children),f.return=p,p=f;break e}}else if(R.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ln&&cg(S)===R.type){n(p,R.sibling),f=i(R,g.props),f.ref=Ts(p,R,g),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}g.type===hi?(f=Dr(g.props.children,p.mode,_,g.key),f.return=p,p=f):(_=ol(g.type,g.key,g.props,null,p.mode,_),_.ref=Ts(p,f,g),_.return=p,p=_)}return o(p);case ci:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=qc(g,p.mode,_),f.return=p,p=f}return o(p);case Ln:return R=g._init,I(p,f,R(g._payload),_)}if(xs(g))return y(p,f,g,_);if(vs(g))return v(p,f,g,_);Oa(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Hc(g,p.mode,_),f.return=p,p=f),o(p)):n(p,f)}return I}var bi=U_(!0),j_=U_(!1),Ko={},Zt=dr(Ko),yo=dr(Ko),vo=dr(Ko);function Cr(t){if(t===Ko)throw Error(A(174));return t}function Df(t,e){switch(ne(vo,e),ne(yo,t),ne(Zt,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nh(e,t)}ae(Zt),ne(Zt,e)}function Ui(){ae(Zt),ae(yo),ae(vo)}function z_(t){Cr(vo.current);var e=Cr(Zt.current),n=Nh(e,t.type);e!==n&&(ne(yo,t),ne(Zt,n))}function Of(t){yo.current===t&&(ae(Zt),ae(yo))}var he=dr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bc=[];function Vf(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var tl=Rn.ReactCurrentDispatcher,Uc=Rn.ReactCurrentBatchConfig,Ur=0,de=null,Ce=null,ke=null,Ml=!1,Ks=!1,_o=0,VS=0;function Ue(){throw Error(A(321))}function Lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function Mf(t,e,n,r,i,s){if(Ur=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?FS:bS,t=n(r,i),Ks){s=0;do{if(Ks=!1,_o=0,25<=s)throw Error(A(301));s+=1,ke=Ce=null,e.updateQueue=null,tl.current=US,t=n(r,i)}while(Ks)}if(tl.current=$l,e=Ce!==null&&Ce.next!==null,Ur=0,ke=Ce=de=null,Ml=!1,e)throw Error(A(300));return t}function $f(){var t=_o!==0;return _o=0,t}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?de.memoizedState=ke=t:ke=ke.next=t,ke}function Nt(){if(Ce===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=ke===null?de.memoizedState:ke.next;if(e!==null)ke=e,Ce=t;else{if(t===null)throw Error(A(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},ke===null?de.memoizedState=ke=t:ke=ke.next=t}return ke}function wo(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ur&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,de.lanes|=c,jr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,zt(r,e.memoizedState)||(ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,de.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function B_(){}function W_(t,e){var n=de,r=Nt(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,ot=!0),r=r.queue,Ff(K_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Eo(9,q_.bind(null,n,r,i,e),void 0,null),Ne===null)throw Error(A(349));Ur&30||H_(n,e,i)}return i}function H_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function q_(t,e,n,r){e.value=n,e.getSnapshot=r,G_(e)&&Q_(t)}function K_(t,e,n){return n(function(){G_(e)&&Q_(t)})}function G_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function Q_(t){var e=wn(t,1);e!==null&&Ut(e,t,1,-1)}function hg(t){var e=qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=$S.bind(null,de,t),[e.memoizedState,t]}function Eo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Y_(){return Nt().memoizedState}function nl(t,e,n,r){var i=qt();de.flags|=t,i.memoizedState=Eo(1|e,n,void 0,r===void 0?null:r)}function Ru(t,e,n,r){var i=Nt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&Lf(r,o.deps)){i.memoizedState=Eo(e,n,s,r);return}}de.flags|=t,i.memoizedState=Eo(1|e,n,s,r)}function dg(t,e){return nl(8390656,8,t,e)}function Ff(t,e){return Ru(2048,8,t,e)}function X_(t,e){return Ru(4,2,t,e)}function J_(t,e){return Ru(4,4,t,e)}function Z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function e0(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4,4,Z_.bind(null,e,t),n)}function bf(){}function t0(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function n0(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function r0(t,e,n){return Ur&21?(zt(n,e)||(n=o_(),de.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ot=!0),t.memoizedState=n)}function LS(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Uc.transition;Uc.transition={};try{t(!1),e()}finally{ee=n,Uc.transition=r}}function i0(){return Nt().memoizedState}function MS(t,e,n){var r=Zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},s0(t))o0(e,n);else if(n=M_(t,e,n,r),n!==null){var i=tt();Ut(n,t,r,i),a0(n,e,r)}}function $S(t,e,n){var r=Zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(s0(t))o0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,o)){var l=e.interleaved;l===null?(i.next=i,xf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=M_(t,e,i,r),n!==null&&(i=tt(),Ut(n,t,r,i),a0(n,e,r))}}function s0(t){var e=t.alternate;return t===de||e!==null&&e===de}function o0(t,e){Ks=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function a0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gf(t,n)}}var $l={readContext:xt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},FS={readContext:xt,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:dg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,Z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MS.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:hg,useDebugValue:bf,useDeferredValue:function(t){return qt().memoizedState=t},useTransition:function(){var t=hg(!1),e=t[0];return t=LS.bind(null,t[1]),qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=de,i=qt();if(ce){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Ne===null)throw Error(A(349));Ur&30||H_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,dg(K_.bind(null,r,s,t),[t]),r.flags|=2048,Eo(9,q_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qt(),e=Ne.identifierPrefix;if(ce){var n=hn,r=cn;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bS={readContext:xt,useCallback:t0,useContext:xt,useEffect:Ff,useImperativeHandle:e0,useInsertionEffect:X_,useLayoutEffect:J_,useMemo:n0,useReducer:jc,useRef:Y_,useState:function(){return jc(wo)},useDebugValue:bf,useDeferredValue:function(t){var e=Nt();return r0(e,Ce.memoizedState,t)},useTransition:function(){var t=jc(wo)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:W_,useId:i0,unstable_isNewReconciler:!1},US={readContext:xt,useCallback:t0,useContext:xt,useEffect:Ff,useImperativeHandle:e0,useInsertionEffect:X_,useLayoutEffect:J_,useMemo:n0,useReducer:zc,useRef:Y_,useState:function(){return zc(wo)},useDebugValue:bf,useDeferredValue:function(t){var e=Nt();return Ce===null?e.memoizedState=t:r0(e,Ce.memoizedState,t)},useTransition:function(){var t=zc(wo)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:W_,useId:i0,unstable_isNewReconciler:!1};function ji(t,e){try{var n="",r=e;do n+=pT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jS=typeof WeakMap=="function"?WeakMap:Map;function l0(t,e,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bl||(bl=!0,cd=r),ed(t,e)},n}function u0(t,e,n){n=mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tC.bind(null,t,e,n),e.then(t,t))}function pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mn(-1,1),e.tag=2,Xn(n,e,1))),n.lanes|=1),t)}var zS=Rn.ReactCurrentOwner,ot=!1;function Ze(t,e,n,r){e.child=t===null?j_(e,null,n,r):bi(e,t.child,n,r)}function gg(t,e,n,r,i){n=n.render;var s=e.ref;return ki(e,i),r=Mf(t,e,n,r,s,i),n=$f(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(ce&&n&&Sf(e),e.flags|=1,Ze(t,e,r,i),e.child)}function yg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c0(t,e,s,r,i)):(t=ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=er(s,r),t.ref=e.ref,t.return=e,e.child=t}function c0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fo(s,r)&&t.ref===e.ref)if(ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ot=!0);else return e.lanes=t.lanes,En(t,e,i)}return td(t,e,n,r,i)}function h0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Ei,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Ei,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(Ei,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(Ei,mt),mt|=r;return Ze(t,e,i,n),e.child}function d0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,r,i){var s=ut(n)?Fr:Ye.current;return s=$i(e,s),ki(e,i),n=Mf(t,e,n,r,s,i),r=$f(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(ce&&r&&Sf(e),e.flags|=1,Ze(t,e,n,i),e.child)}function vg(t,e,n,r,i){if(ut(n)){var s=!0;kl(e)}else s=!1;if(ki(e,i),e.stateNode===null)rl(t,e),b_(e,n,r),Zh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xt(u):(u=ut(n)?Fr:Ye.current,u=$i(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ug(e,o,r,u),Mn=!1;var d=e.memoizedState;o.state=d,Vl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||lt.current||Mn?(typeof c=="function"&&(Jh(e,n,c,r),l=e.memoizedState),(a=Mn||lg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Lt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xt(l):(l=ut(n)?Fr:Ye.current,l=$i(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&ug(e,o,r,l),Mn=!1,d=e.memoizedState,o.state=d,Vl(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||lt.current||Mn?(typeof m=="function"&&(Jh(e,n,m,r),y=e.memoizedState),(u=Mn||lg(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return nd(t,e,n,r,s,i)}function nd(t,e,n,r,i,s){d0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&rg(e,n,!1),En(t,e,s);r=e.stateNode,zS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bi(e,t.child,null,s),e.child=bi(e,null,a,s)):Ze(t,e,a,s),e.memoizedState=r.state,i&&rg(e,n,!0),e.child}function f0(t){var e=t.stateNode;e.pendingContext?ng(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ng(t,e.context,!1),Df(t,e.containerInfo)}function _g(t,e,n,r,i){return Fi(),Af(i),e.flags|=256,Ze(t,e,n,r),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function p0(t,e,n){var r=e.pendingProps,i=he.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(he,i&1),t===null)return Yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xu(o,r,0,null),t=Dr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=id(n),e.memoizedState=rd,t):Uf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return BS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=er(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Dr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rd,r}return s=t.child,t=s.sibling,r=er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Uf(t,e){return e=xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,r){return r!==null&&Af(r),bi(e,t.child,null,n),t=Uf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bc(Error(A(422))),Va(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xu({mode:"visible",children:r.children},i,0,null),s=Dr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bi(e,t.child,null,o),e.child.memoizedState=id(o),e.memoizedState=rd,s);if(!(e.mode&1))return Va(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Bc(s,r,void 0),Va(t,e,o,r)}if(a=(o&t.childLanes)!==0,ot||a){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(t,i),Ut(r,t,i,-1))}return qf(),r=Bc(Error(A(421))),Va(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Yn(i.nextSibling),yt=e,ce=!0,$t=null,t!==null&&(St[Ct++]=cn,St[Ct++]=hn,St[Ct++]=br,cn=t.id,hn=t.overflow,br=e),e=Uf(e,r.children),e.flags|=4096,e)}function wg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function Wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function m0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ze(t,e,r.children,n),r=he.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,n,e);else if(t.tag===19)wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(he,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ll(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wc(e,!0,n,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WS(t,e,n){switch(e.tag){case 3:f0(e),Fi();break;case 5:z_(e);break;case 1:ut(e.type)&&kl(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(Dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(he,he.current&1),e.flags|=128,null):n&e.child.childLanes?p0(t,e,n):(ne(he,he.current&1),t=En(t,e,n),t!==null?t.sibling:null);ne(he,he.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return m0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(he,he.current),r)break;return null;case 22:case 23:return e.lanes=0,h0(t,e,n)}return En(t,e,n)}var g0,sd,y0,v0;g0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};y0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Cr(Zt.current);var s=null;switch(n){case"input":i=Rh(t,i),r=Rh(t,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=xh(t,i),r=xh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Rl)}Dh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(so.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(so.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};v0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ss(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HS(t,e,n){var r=e.pendingProps;switch(Cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(e),null;case 1:return ut(e.type)&&Pl(),je(e),null;case 3:return r=e.stateNode,Ui(),ae(lt),ae(Ye),Vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(fd($t),$t=null))),sd(t,e),je(e),null;case 5:Of(e);var i=Cr(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)y0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return je(e),null}if(t=Cr(Zt.current),Da(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Gt]=e,r[go]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Ds.length;i++)re(Ds[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":km(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":Nm(r,s),re("invalid",r)}Dh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Na(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Na(r.textContent,a,t),i=["children",""+a]):so.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":Ta(r),xm(r,s,!0);break;case"textarea":Ta(r),Dm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Rl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Gt]=e,t[go]=r,g0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Oh(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ds.length;i++)re(Ds[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":km(t,r),i=Rh(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),re("invalid",t);break;case"textarea":Nm(t,r),i=xh(t,r),re("invalid",t);break;default:i=r}Dh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oo(t,l):typeof l=="number"&&oo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?l!=null&&s==="onScroll"&&re("scroll",t):l!=null&&cf(t,s,l,o))}switch(n){case"input":Ta(t),xm(t,r,!1);break;case"textarea":Ta(t),Dm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return je(e),null;case 6:if(t&&e.stateNode!=null)v0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Cr(vo.current),Cr(Zt.current),Da(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gt]=e,(s=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:Na(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=e,e.stateNode=r}return je(e),null;case 13:if(ae(he),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&gt!==null&&e.mode&1&&!(e.flags&128))L_(),Fi(),e.flags|=98560,s=!1;else if(s=Da(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Gt]=e}else Fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;je(e),s=!1}else $t!==null&&(fd($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||he.current&1?Ae===0&&(Ae=3):qf())),e.updateQueue!==null&&(e.flags|=4),je(e),null);case 4:return Ui(),sd(t,e),t===null&&po(e.stateNode.containerInfo),je(e),null;case 10:return kf(e.type._context),je(e),null;case 17:return ut(e.type)&&Pl(),je(e),null;case 19:if(ae(he),s=e.memoizedState,s===null)return je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ss(s,!1);else{if(Ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ll(t),o!==null){for(e.flags|=128,Ss(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(he,he.current&1|2),e.child}t=t.sibling}s.tail!==null&&ve()>zi&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ss(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return je(e),null}else 2*ve()-s.renderingStartTime>zi&&n!==1073741824&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ve(),e.sibling=null,n=he.current,ne(he,r?n&1|2:n&1),e):(je(e),null);case 22:case 23:return Hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(je(e),e.subtreeFlags&6&&(e.flags|=8192)):je(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function qS(t,e){switch(Cf(e),e.tag){case 1:return ut(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),ae(lt),ae(Ye),Vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Of(e),null;case 13:if(ae(he),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ae(he),null;case 4:return Ui(),null;case 10:return kf(e.type._context),null;case 22:case 23:return Hf(),null;case 24:return null;default:return null}}var La=!1,We=!1,KS=typeof WeakSet=="function"?WeakSet:Set,N=null;function wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function od(t,e,n){try{n()}catch(r){ge(t,e,r)}}var Eg=!1;function GS(t,e){if(Bh=Sl,t=I_(),Tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wh={focusedElem:t,selectionRange:n},Sl=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,I=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Lt(e.type,v),I);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(_){ge(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=Eg,Eg=!1,y}function Gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&od(e,n,s)}i=i.next}while(i!==r)}}function Pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _0(t){var e=t.alternate;e!==null&&(t.alternate=null,_0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gt],delete e[go],delete e[Kh],delete e[xS],delete e[NS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w0(t){return t.tag===5||t.tag===3||t.tag===4}function Ig(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}var Ve=null,Mt=!1;function Dn(t,e,n){for(n=n.child;n!==null;)E0(t,e,n),n=n.sibling}function E0(t,e,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(wu,n)}catch{}switch(n.tag){case 5:We||wi(n,e);case 6:var r=Ve,i=Mt;Ve=null,Dn(t,e,n),Ve=r,Mt=i,Ve!==null&&(Mt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Mt?(t=Ve,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),co(t)):$c(Ve,n.stateNode));break;case 4:r=Ve,i=Mt,Ve=n.stateNode.containerInfo,Mt=!0,Dn(t,e,n),Ve=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&od(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!We&&(wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,e,a)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Dn(t,e,n),We=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function Tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KS),e.forEach(function(r){var i=rC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,Mt=!1;break e;case 3:Ve=a.stateNode.containerInfo,Mt=!0;break e;case 4:Ve=a.stateNode.containerInfo,Mt=!0;break e}a=a.return}if(Ve===null)throw Error(A(160));E0(s,o,i),Ve=null,Mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)I0(e,t),e=e.sibling}function I0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Ht(t),r&4){try{Gs(3,t,t.return),Pu(3,t)}catch(v){ge(t,t.return,v)}try{Gs(5,t,t.return)}catch(v){ge(t,t.return,v)}}break;case 1:Vt(e,t),Ht(t),r&512&&n!==null&&wi(n,n.return);break;case 5:if(Vt(e,t),Ht(t),r&512&&n!==null&&wi(n,n.return),t.flags&32){var i=t.stateNode;try{oo(i,"")}catch(v){ge(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bv(i,s),Oh(a,o);var u=Oh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Gv(i,h):c==="dangerouslySetInnerHTML"?qv(i,h):c==="children"?oo(i,h):cf(i,c,h,u)}switch(a){case"input":Ph(i,s);break;case"textarea":Wv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ci(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[go]=s}catch(v){ge(t,t.return,v)}}break;case 6:if(Vt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ge(t,t.return,v)}}break;case 3:if(Vt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(v){ge(t,t.return,v)}break;case 4:Vt(e,t),Ht(t);break;case 13:Vt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bf=ve())),r&4&&Tg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(We=(u=We)||c,Vt(e,t),We=u):Vt(e,t),Ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(d=N,m=d.child,d.tag){case 0:case 11:case 14:case 15:Gs(4,d,d.return);break;case 1:wi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ge(r,n,v)}}break;case 5:wi(d,d.return);break;case 22:if(d.memoizedState!==null){Cg(h);continue}}m!==null?(m.return=d,N=m):Cg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Kv("display",o))}catch(v){ge(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ge(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vt(e,t),Ht(t),r&4&&Tg(t);break;case 21:break;default:Vt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w0(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oo(i,""),r.flags&=-33);var s=Ig(t);ud(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ig(t);ld(t,a,o);break;default:throw Error(A(161))}}catch(l){ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QS(t,e,n){N=t,T0(t)}function T0(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||La;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||We;a=La;var u=We;if(La=o,(We=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Ag(i):l!==null?(l.return=o,N=l):Ag(i);for(;s!==null;)N=s,T0(s),s=s.sibling;N=i,La=a,We=u}Sg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Sg(t)}}function Sg(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:We||Pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ag(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ag(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&co(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}We||e.flags&512&&ad(e)}catch(d){ge(e,e.return,d)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Cg(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Ag(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pu(4,e)}catch(l){ge(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ge(e,i,l)}}var s=e.return;try{ad(e)}catch(l){ge(e,s,l)}break;case 5:var o=e.return;try{ad(e)}catch(l){ge(e,o,l)}}}catch(l){ge(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var YS=Math.ceil,Fl=Rn.ReactCurrentDispatcher,jf=Rn.ReactCurrentOwner,kt=Rn.ReactCurrentBatchConfig,Y=0,Ne=null,Ie=null,$e=0,mt=0,Ei=dr(0),Ae=0,Io=null,jr=0,ku=0,zf=0,Qs=null,st=null,Bf=0,zi=1/0,on=null,bl=!1,cd=null,Jn=null,Ma=!1,Wn=null,Ul=0,Ys=0,hd=null,il=-1,sl=0;function tt(){return Y&6?ve():il!==-1?il:il=ve()}function Zn(t){return t.mode&1?Y&2&&$e!==0?$e&-$e:OS.transition!==null?(sl===0&&(sl=o_()),sl):(t=ee,t!==0||(t=window.event,t=t===void 0?16:f_(t.type)),t):1}function Ut(t,e,n,r){if(50<Ys)throw Ys=0,hd=null,Error(A(185));Wo(t,n,r),(!(Y&2)||t!==Ne)&&(t===Ne&&(!(Y&2)&&(ku|=n),Ae===4&&Fn(t,$e)),ct(t,r),n===1&&Y===0&&!(e.mode&1)&&(zi=ve()+500,Cu&&fr()))}function ct(t,e){var n=t.callbackNode;OT(t,e);var r=Tl(t,t===Ne?$e:0);if(r===0)n!==null&&Lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lm(n),e===1)t.tag===0?DS(Rg.bind(null,t)):D_(Rg.bind(null,t)),PS(function(){!(Y&6)&&fr()}),n=null;else{switch(a_(r)){case 1:n=mf;break;case 4:n=i_;break;case 16:n=Il;break;case 536870912:n=s_;break;default:n=Il}n=N0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(il=-1,sl=0,Y&6)throw Error(A(327));var n=t.callbackNode;if(xi()&&t.callbackNode!==n)return null;var r=Tl(t,t===Ne?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jl(t,r);else{e=r;var i=Y;Y|=2;var s=A0();(Ne!==t||$e!==e)&&(on=null,zi=ve()+500,Nr(t,e));do try{ZS();break}catch(a){C0(t,a)}while(1);Pf(),Fl.current=s,Y=i,Ie!==null?e=0:(Ne=null,$e=0,e=Ae)}if(e!==0){if(e===2&&(i=Fh(t),i!==0&&(r=i,e=dd(t,i))),e===1)throw n=Io,Nr(t,0),Fn(t,r),ct(t,ve()),n;if(e===6)Fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!XS(i)&&(e=jl(t,r),e===2&&(s=Fh(t),s!==0&&(r=s,e=dd(t,s))),e===1))throw n=Io,Nr(t,0),Fn(t,r),ct(t,ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Er(t,st,on);break;case 3:if(Fn(t,r),(r&130023424)===r&&(e=Bf+500-ve(),10<e)){if(Tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qh(Er.bind(null,t,st,on),e);break}Er(t,st,on);break;case 4:if(Fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YS(r/1960))-r,10<r){t.timeoutHandle=qh(Er.bind(null,t,st,on),r);break}Er(t,st,on);break;case 5:Er(t,st,on);break;default:throw Error(A(329))}}}return ct(t,ve()),t.callbackNode===n?S0.bind(null,t):null}function dd(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=jl(t,e),t!==2&&(e=st,st=n,e!==null&&fd(e)),t}function fd(t){st===null?st=t:st.push.apply(st,t)}function XS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fn(t,e){for(e&=~zf,e&=~ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function Rg(t){if(Y&6)throw Error(A(327));xi();var e=Tl(t,0);if(!(e&1))return ct(t,ve()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var r=Fh(t);r!==0&&(e=r,n=dd(t,r))}if(n===1)throw n=Io,Nr(t,0),Fn(t,e),ct(t,ve()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,st,on),ct(t,ve()),null}function Wf(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(zi=ve()+500,Cu&&fr())}}function zr(t){Wn!==null&&Wn.tag===0&&!(Y&6)&&xi();var e=Y;Y|=1;var n=kt.transition,r=ee;try{if(kt.transition=null,ee=1,t)return t()}finally{ee=r,kt.transition=n,Y=e,!(Y&6)&&fr()}}function Hf(){mt=Ei.current,ae(Ei)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RS(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(Cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:Ui(),ae(lt),ae(Ye),Vf();break;case 5:Of(r);break;case 4:Ui();break;case 13:ae(he);break;case 19:ae(he);break;case 10:kf(r.type._context);break;case 22:case 23:Hf()}n=n.return}if(Ne=t,Ie=t=er(t.current,null),$e=mt=e,Ae=0,Io=null,zf=ku=jr=0,st=Qs=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sr=null}return t}function C0(t,e){do{var n=Ie;try{if(Pf(),tl.current=$l,Ml){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ml=!1}if(Ur=0,ke=Ce=de=null,Ks=!1,_o=0,jf.current=null,n===null||n.return===null){Ae=1,Io=e,Ie=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=pg(o);if(m!==null){m.flags&=-257,mg(m,o,a,s,e),m.mode&1&&fg(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){fg(s,u,e),qf();break e}l=Error(A(426))}}else if(ce&&a.mode&1){var I=pg(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),mg(I,o,a,s,e),Af(ji(l,a));break e}}s=l=ji(l,a),Ae!==4&&(Ae=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=l0(s,l,e);og(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Jn===null||!Jn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=u0(s,a,e);og(s,_);break e}}s=s.return}while(s!==null)}P0(n)}catch(S){e=S,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function A0(){var t=Fl.current;return Fl.current=$l,t===null?$l:t}function qf(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ne===null||!(jr&268435455)&&!(ku&268435455)||Fn(Ne,$e)}function jl(t,e){var n=Y;Y|=2;var r=A0();(Ne!==t||$e!==e)&&(on=null,Nr(t,e));do try{JS();break}catch(i){C0(t,i)}while(1);if(Pf(),Y=n,Fl.current=r,Ie!==null)throw Error(A(261));return Ne=null,$e=0,Ae}function JS(){for(;Ie!==null;)R0(Ie)}function ZS(){for(;Ie!==null&&!ST();)R0(Ie)}function R0(t){var e=x0(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?P0(t):Ie=e,jf.current=null}function P0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qS(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,Ie=null;return}}else if(n=HS(n,e,mt),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Ae===0&&(Ae=5)}function Er(t,e,n){var r=ee,i=kt.transition;try{kt.transition=null,ee=1,eC(t,e,n,r)}finally{kt.transition=i,ee=r}return null}function eC(t,e,n,r){do xi();while(Wn!==null);if(Y&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VT(t,s),t===Ne&&(Ie=Ne=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,N0(Il,function(){return xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=ee;ee=1;var a=Y;Y|=4,jf.current=null,GS(t,n),I0(n,t),wS(Wh),Sl=!!Bh,Wh=Bh=null,t.current=n,QS(n),CT(),Y=a,ee=o,kt.transition=s}else t.current=n;if(Ma&&(Ma=!1,Wn=t,Ul=i),s=t.pendingLanes,s===0&&(Jn=null),PT(n.stateNode),ct(t,ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bl)throw bl=!1,t=cd,cd=null,t;return Ul&1&&t.tag!==0&&xi(),s=t.pendingLanes,s&1?t===hd?Ys++:(Ys=0,hd=t):Ys=0,fr(),null}function xi(){if(Wn!==null){var t=a_(Ul),e=kt.transition,n=ee;try{if(kt.transition=null,ee=16>t?16:t,Wn===null)var r=!1;else{if(t=Wn,Wn=null,Ul=0,Y&6)throw Error(A(331));var i=Y;for(Y|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Gs(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var d=c.sibling,m=c.return;if(_0(c),c===u){N=null;break}if(d!==null){d.return=m,N=d;break}N=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var I=v.sibling;v.sibling=null,v=I}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=f;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pu(9,a)}}catch(S){ge(a,a.return,S)}if(a===o){N=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,N=_;break e}N=a.return}}if(Y=i,fr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(wu,t)}catch{}r=!0}return r}finally{ee=n,kt.transition=e}}return!1}function Pg(t,e,n){e=ji(n,e),e=l0(t,e,1),t=Xn(t,e,1),e=tt(),t!==null&&(Wo(t,1,e),ct(t,e))}function ge(t,e,n){if(t.tag===3)Pg(t,t,n);else for(;e!==null;){if(e.tag===3){Pg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=ji(n,t),t=u0(e,t,1),e=Xn(e,t,1),t=tt(),e!==null&&(Wo(e,1,t),ct(e,t));break}}e=e.return}}function tC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&($e&n)===n&&(Ae===4||Ae===3&&($e&130023424)===$e&&500>ve()-Bf?Nr(t,0):zf|=n),ct(t,e)}function k0(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=tt();t=wn(t,e),t!==null&&(Wo(t,e,n),ct(t,n))}function nC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k0(t,n)}function rC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),k0(t,n)}var x0;x0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ot=!1,WS(t,e,n);ot=!!(t.flags&131072)}else ot=!1,ce&&e.flags&1048576&&O_(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rl(t,e),t=e.pendingProps;var i=$i(e,Ye.current);ki(e,n),i=Mf(null,e,r,t,i,n);var s=$f();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nf(e),i.updater=Au,e.stateNode=i,i._reactInternals=e,Zh(e,r,t,n),e=nd(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&Sf(e),Ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sC(r),t=Lt(r,t),i){case 0:e=td(null,e,r,t,n);break e;case 1:e=vg(null,e,r,t,n);break e;case 11:e=gg(null,e,r,t,n);break e;case 14:e=yg(null,e,r,Lt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),td(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),vg(t,e,r,i,n);case 3:e:{if(f0(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$_(t,e),Vl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(A(423)),e),e=_g(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(A(424)),e),e=_g(t,e,r,n,i);break e}else for(gt=Yn(e.stateNode.containerInfo.firstChild),yt=e,ce=!0,$t=null,n=j_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===i){e=En(t,e,n);break e}Ze(t,e,r,n)}e=e.child}return e;case 5:return z_(e),t===null&&Yh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hh(r,i)?o=null:s!==null&&Hh(r,s)&&(e.flags|=32),d0(t,e),Ze(t,e,o,n),e.child;case 6:return t===null&&Yh(e),null;case 13:return p0(t,e,n);case 4:return Df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bi(e,null,r,n):Ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),gg(t,e,r,i,n);case 7:return Ze(t,e,e.pendingProps,n),e.child;case 8:return Ze(t,e,e.pendingProps.children,n),e.child;case 12:return Ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(Dl,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!lt.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ki(e,n),i=xt(i),r=r(i),e.flags|=1,Ze(t,e,r,n),e.child;case 14:return r=e.type,i=Lt(r,e.pendingProps),i=Lt(r.type,i),yg(t,e,r,i,n);case 15:return c0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),rl(t,e),e.tag=1,ut(r)?(t=!0,kl(e)):t=!1,ki(e,n),b_(e,r,i),Zh(e,r,i,n),nd(null,e,r,!0,t,n);case 19:return m0(t,e,n);case 22:return h0(t,e,n)}throw Error(A(156,e.tag))};function N0(t,e){return r_(t,e)}function iC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new iC(t,e,n,r)}function Kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sC(t){if(typeof t=="function")return Kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===df)return 11;if(t===ff)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hi:return Dr(n.children,i,s,e);case hf:o=8,i|=8;break;case Th:return t=Pt(12,n,e,i|2),t.elementType=Th,t.lanes=s,t;case Sh:return t=Pt(13,n,e,i),t.elementType=Sh,t.lanes=s,t;case Ch:return t=Pt(19,n,e,i),t.elementType=Ch,t.lanes=s,t;case Uv:return xu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fv:o=10;break e;case bv:o=9;break e;case df:o=11;break e;case ff:o=14;break e;case Ln:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function xu(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=Uv,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function qc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gf(t,e,n,r,i,s,o,a,l){return t=new oC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(s),t}function aC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function D0(t){if(!t)return ar;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(ut(n))return N_(t,n,e)}return e}function O0(t,e,n,r,i,s,o,a,l){return t=Gf(n,r,!0,t,i,s,o,a,l),t.context=D0(null),n=t.current,r=tt(),i=Zn(n),s=mn(r,i),s.callback=e??null,Xn(n,s,i),t.current.lanes=i,Wo(t,i,r),ct(t,r),t}function Nu(t,e,n,r){var i=e.current,s=tt(),o=Zn(i);return n=D0(n),e.context===null?e.context=n:e.pendingContext=n,e=mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xn(i,e,o),t!==null&&(Ut(t,i,o,s),el(t,i,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qf(t,e){kg(t,e),(t=t.alternate)&&kg(t,e)}function lC(){return null}var V0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yf(t){this._internalRoot=t}Du.prototype.render=Yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Nu(t,e,null,null)};Du.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){Nu(null,t,null,null)}),e[_n]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var e=c_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&d_(t)}};function Xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xg(){}function uC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=zl(o);s.call(u)}}var o=O0(e,r,t,0,null,!1,!1,"",xg);return t._reactRootContainer=o,t[_n]=o.current,po(t.nodeType===8?t.parentNode:t),zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zl(l);a.call(u)}}var l=Gf(t,0,!1,null,null,!1,!1,"",xg);return t._reactRootContainer=l,t[_n]=l.current,po(t.nodeType===8?t.parentNode:t),zr(function(){Nu(e,l,n,r)}),l}function Vu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=zl(o);a.call(l)}}Nu(e,o,t,i)}else o=uC(n,e,t,i,r);return zl(o)}l_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(gf(e,n|1),ct(e,ve()),!(Y&6)&&(zi=ve()+500,fr()))}break;case 13:zr(function(){var r=wn(t,1);if(r!==null){var i=tt();Ut(r,t,1,i)}}),Qf(t,1)}};yf=function(t){if(t.tag===13){var e=wn(t,134217728);if(e!==null){var n=tt();Ut(e,t,134217728,n)}Qf(t,134217728)}};u_=function(t){if(t.tag===13){var e=Zn(t),n=wn(t,e);if(n!==null){var r=tt();Ut(n,t,e,r)}Qf(t,e)}};c_=function(){return ee};h_=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Lh=function(t,e,n){switch(e){case"input":if(Ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Su(r);if(!i)throw Error(A(90));zv(r),Ph(r,i)}}}break;case"textarea":Wv(t,n);break;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}};Xv=Wf;Jv=zr;var cC={usingClientEntryPoint:!1,Events:[qo,mi,Su,Qv,Yv,Wf]},Cs={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hC={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=t_(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||lC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{wu=$a.inject(hC),Jt=$a}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cC;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(e))throw Error(A(200));return aC(t,e,null,n)};wt.createRoot=function(t,e){if(!Xf(t))throw Error(A(299));var n=!1,r="",i=V0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gf(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,po(t.nodeType===8?t.parentNode:t),new Yf(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=t_(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return zr(t)};wt.hydrate=function(t,e,n){if(!Ou(e))throw Error(A(200));return Vu(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!Xf(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=V0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O0(e,null,t,1,n??null,i,!1,s,o),t[_n]=e.current,po(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Du(e)};wt.render=function(t,e,n){if(!Ou(e))throw Error(A(200));return Vu(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!Ou(t))throw Error(A(40));return t._reactRootContainer?(zr(function(){Vu(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};wt.unstable_batchedUpdates=Wf;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ou(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Vu(t,e,n,!1,r)};wt.version="18.2.0-next-9e3b772b8-20220608";function L0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0)}catch(t){console.error(t)}}L0(),Ov.exports=wt;var dC=Ov.exports,Ng=dC;Eh.createRoot=Ng.createRoot,Eh.hydrateRoot=Ng.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},To.apply(this,arguments)}var Hn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hn||(Hn={}));const Dg="popstate";function fC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return pd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bl(i)}return mC(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pC(){return Math.random().toString(36).substr(2,8)}function Og(t,e){return{usr:t.state,key:t.key,idx:e}}function pd(t,e,n,r){return n===void 0&&(n=null),To({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?os(e):e,{state:n,key:e&&e.key||r||pC()})}function Bl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function mC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Hn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(To({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Hn.Pop;let I=c(),p=I==null?null:I-u;u=I,l&&l({action:a,location:v.location,delta:p})}function d(I,p){a=Hn.Push;let f=pd(v.location,I,p);n&&n(f,I),u=c()+1;let g=Og(f,u),_=v.createHref(f);try{o.pushState(g,"",_)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function m(I,p){a=Hn.Replace;let f=pd(v.location,I,p);n&&n(f,I),u=c();let g=Og(f,u),_=v.createHref(f);o.replaceState(g,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function y(I){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:Bl(I);return Se(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Dg,h),l=I,()=>{i.removeEventListener(Dg,h),l=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let p=y(I);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(I){return o.go(I)}};return v}var Vg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vg||(Vg={}));function gC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?os(e):e,i=Zf(r.pathname||"/",n);if(i==null)return null;let s=M0(t);yC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=AC(s[a],kC(i));return o}function M0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=tr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),M0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:SC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of $0(s.path))i(s,o,l)}),e}function $0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function yC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:CC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vC=/^:\w+$/,_C=3,wC=2,EC=1,IC=10,TC=-2,Lg=t=>t==="*";function SC(t,e){let n=t.split("/"),r=n.length;return n.some(Lg)&&(r+=TC),e&&(r+=wC),n.filter(i=>!Lg(i)).reduce((i,s)=>i+(vC.test(s)?_C:s===""?EC:IC),r)}function CC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function AC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=RC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:tr([i,c.pathname]),pathnameBase:OC(tr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=tr([i,c.pathnameBase]))}return s}function RC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=PC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=xC(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function PC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kC(t){try{return decodeURI(t)}catch(e){return Jf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xC(t,e){try{return decodeURIComponent(t)}catch(n){return Jf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Zf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function NC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?os(t):t;return{pathname:n?n.startsWith("/")?n:DC(n,e):e,search:VC(r),hash:LC(i)}}function DC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function F0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function b0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=os(t):(i=To({},t),Se(!i.pathname||!i.pathname.includes("?"),Kc("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Kc("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Kc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=NC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const tr=t=>t.join("/").replace(/\/\/+/g,"/"),OC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),VC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,LC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function MC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const U0=["post","put","patch","delete"];new Set(U0);const $C=["get",...U0];new Set($C);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wl(){return Wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wl.apply(this,arguments)}const ep=E.createContext(null),FC=E.createContext(null),as=E.createContext(null),Lu=E.createContext(null),Pn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),j0=E.createContext(null);function bC(t,e){let{relative:n}=e===void 0?{}:e;Go()||Se(!1);let{basename:r,navigator:i}=E.useContext(as),{hash:s,pathname:o,search:a}=B0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:tr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Go(){return E.useContext(Lu)!=null}function Mu(){return Go()||Se(!1),E.useContext(Lu).location}function z0(t){E.useContext(as).static||E.useLayoutEffect(t)}function tp(){let{isDataRoute:t}=E.useContext(Pn);return t?tA():UC()}function UC(){Go()||Se(!1);let t=E.useContext(ep),{basename:e,navigator:n}=E.useContext(as),{matches:r}=E.useContext(Pn),{pathname:i}=Mu(),s=JSON.stringify(F0(r).map(l=>l.pathnameBase)),o=E.useRef(!1);return z0(()=>{o.current=!0}),E.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=b0(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:tr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const jC=E.createContext(null);function zC(t){let e=E.useContext(Pn).outlet;return e&&E.createElement(jC.Provider,{value:t},e)}function BC(){let{matches:t}=E.useContext(Pn),e=t[t.length-1];return e?e.params:{}}function B0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(Pn),{pathname:i}=Mu(),s=JSON.stringify(F0(r).map(o=>o.pathnameBase));return E.useMemo(()=>b0(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function WC(t,e){return HC(t,e)}function HC(t,e,n){Go()||Se(!1);let{navigator:r}=E.useContext(as),{matches:i}=E.useContext(Pn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Mu(),u;if(e){var c;let v=typeof e=="string"?os(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Se(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=gC(t,{pathname:d}),y=YC(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:tr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:tr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?E.createElement(Lu.Provider,{value:{location:Wl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Hn.Pop}},y):y}function qC(){let t=eA(),e=MC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const KC=E.createElement(qC,null);class GC extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(Pn.Provider,{value:this.props.routeContext},E.createElement(j0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QC(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(ep);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Pn.Provider,{value:e},r)}function YC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Se(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||KC);let d=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=h:l.route.Component?y=E.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,E.createElement(QC,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?E.createElement(GC,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var W0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(W0||{}),Hl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hl||{});function XC(t){let e=E.useContext(ep);return e||Se(!1),e}function JC(t){let e=E.useContext(FC);return e||Se(!1),e}function ZC(t){let e=E.useContext(Pn);return e||Se(!1),e}function H0(t){let e=ZC(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function eA(){var t;let e=E.useContext(j0),n=JC(Hl.UseRouteError),r=H0(Hl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function tA(){let{router:t}=XC(W0.UseNavigateStable),e=H0(Hl.UseNavigateStable),n=E.useRef(!1);return z0(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Wl({fromRouteId:e},s)))},[t,e])}function q0(t){return zC(t.context)}function bn(t){Se(!1)}function nA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Hn.Pop,navigator:s,static:o=!1}=t;Go()&&Se(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=os(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=E.useMemo(()=>{let v=Zf(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return y==null?null:E.createElement(as.Provider,{value:l},E.createElement(Lu.Provider,{children:n,value:y}))}function K0(t){let{children:e,location:n}=t;return WC(md(e),n)}new Promise(()=>{});function md(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,md(r.props.children,s));return}r.type!==bn&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=md(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gd(){return gd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gd.apply(this,arguments)}function rA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function iA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function sA(t,e){return t.button===0&&(!e||e==="_self")&&!iA(t)}const oA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],aA="startTransition",Mg=nT[aA];function lA(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=fC({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(h=>{u&&Mg?Mg(()=>l(h)):l(h)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(nA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const uA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,np=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=rA(e,oA),{basename:d}=E.useContext(as),m,y=!1;if(typeof u=="string"&&cA.test(u)&&(m=u,uA))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),_=Zf(g.pathname,d);g.origin===f.origin&&_!=null?u=_+g.search+g.hash:y=!0}catch{}let v=bC(u,{relative:i}),I=hA(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||I(f)}return E.createElement("a",gd({},h,{href:m||v,onClick:y||s?r:p,ref:n,target:l}))});var $g;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})($g||($g={}));var Fg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fg||(Fg={}));function hA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=tp(),l=Mu(),u=B0(t,{relative:o});return E.useCallback(c=>{if(sA(c,n)){c.preventDefault();let h=r!==void 0?r:Bl(l)===Bl(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var at=function(){return at=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},at.apply(this,arguments)};function rp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ql(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ie="-ms-",Xs="-moz-",Z="-webkit-",G0="comm",$u="rule",ip="decl",dA="@import",Q0="@keyframes",fA="@layer",pA=Math.abs,sp=String.fromCharCode,yd=Object.assign;function mA(t,e){return xe(t,0)^45?(((e<<2^xe(t,0))<<2^xe(t,1))<<2^xe(t,2))<<2^xe(t,3):0}function Y0(t){return t.trim()}function an(t,e){return(t=e.exec(t))?t[0]:t}function W(t,e,n){return t.replace(e,n)}function al(t,e){return t.indexOf(e)}function xe(t,e){return t.charCodeAt(e)|0}function Bi(t,e,n){return t.slice(e,n)}function Kt(t){return t.length}function X0(t){return t.length}function Os(t,e){return e.push(t),t}function gA(t,e){return t.map(e).join("")}function bg(t,e){return t.filter(function(n){return!an(n,e)})}var Fu=1,Wi=1,J0=0,Dt=0,Ee=0,ls="";function bu(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Fu,column:Wi,length:o,return:"",siblings:a}}function Vn(t,e){return yd(bu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function oi(t){for(;t.root;)t=Vn(t.root,{children:[t]});Os(t,t.siblings)}function yA(){return Ee}function vA(){return Ee=Dt>0?xe(ls,--Dt):0,Wi--,Ee===10&&(Wi=1,Fu--),Ee}function jt(){return Ee=Dt<J0?xe(ls,Dt++):0,Wi++,Ee===10&&(Wi=1,Fu++),Ee}function Or(){return xe(ls,Dt)}function ll(){return Dt}function Uu(t,e){return Bi(ls,t,e)}function vd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _A(t){return Fu=Wi=1,J0=Kt(ls=t),Dt=0,[]}function wA(t){return ls="",t}function Gc(t){return Y0(Uu(Dt-1,_d(t===91?t+2:t===40?t+1:t)))}function EA(t){for(;(Ee=Or())&&Ee<33;)jt();return vd(t)>2||vd(Ee)>3?"":" "}function IA(t,e){for(;--e&&jt()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return Uu(t,ll()+(e<6&&Or()==32&&jt()==32))}function _d(t){for(;jt();)switch(Ee){case t:return Dt;case 34:case 39:t!==34&&t!==39&&_d(Ee);break;case 40:t===41&&_d(t);break;case 92:jt();break}return Dt}function TA(t,e){for(;jt()&&t+Ee!==47+10;)if(t+Ee===42+42&&Or()===47)break;return"/*"+Uu(e,Dt-1)+"*"+sp(t===47?t:jt())}function SA(t){for(;!vd(Or());)jt();return Uu(t,Dt)}function CA(t){return wA(ul("",null,null,null,[""],t=_A(t),0,[0],t))}function ul(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,m=0,y=0,v=1,I=1,p=1,f=0,g="",_=i,S=s,R=r,C=g;I;)switch(y=f,f=jt()){case 40:if(y!=108&&xe(C,h-1)==58){al(C+=W(Gc(f),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Gc(f);break;case 9:case 10:case 13:case 32:C+=EA(y);break;case 92:C+=IA(ll()-1,7);continue;case 47:switch(Or()){case 42:case 47:Os(AA(TA(jt(),ll()),e,n,l),l);break;default:C+="/"}break;case 123*v:a[u++]=Kt(C)*p;case 125*v:case 59:case 0:switch(f){case 0:case 125:I=0;case 59+c:p==-1&&(C=W(C,/\f/g,"")),m>0&&Kt(C)-h&&Os(m>32?jg(C+";",r,n,h-1,l):jg(W(C," ","")+";",r,n,h-2,l),l);break;case 59:C+=";";default:if(Os(R=Ug(C,e,n,u,c,i,a,g,_=[],S=[],h,s),s),f===123)if(c===0)ul(C,e,R,R,_,s,h,a,S);else switch(d===99&&xe(C,3)===110?100:d){case 100:case 108:case 109:case 115:ul(t,R,R,r&&Os(Ug(t,R,R,0,0,i,a,g,i,_=[],h,S),S),i,S,h,a,r?_:S);break;default:ul(C,R,R,R,[""],S,0,a,S)}}u=c=m=0,v=p=1,g=C="",h=o;break;case 58:h=1+Kt(C),m=y;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&vA()==125)continue}switch(C+=sp(f),f*v){case 38:p=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(Kt(C)-1)*p,p=1;break;case 64:Or()===45&&(C+=Gc(jt())),d=Or(),c=h=Kt(g=C+=SA(ll())),f++;break;case 45:y===45&&Kt(C)==2&&(v=0)}}return s}function Ug(t,e,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,m=i===0?s:[""],y=X0(m),v=0,I=0,p=0;v<r;++v)for(var f=0,g=Bi(t,d+1,d=pA(I=o[v])),_=t;f<y;++f)(_=Y0(I>0?m[f]+" "+g:W(g,/&\f/g,m[f])))&&(l[p++]=_);return bu(t,e,n,i===0?$u:a,l,u,c,h)}function AA(t,e,n,r){return bu(t,e,n,G0,sp(yA()),Bi(t,2,-2),0,r)}function jg(t,e,n,r,i){return bu(t,e,n,ip,Bi(t,0,r),Bi(t,r+1,-1),r,i)}function Z0(t,e,n){switch(mA(t,e)){case 5103:return Z+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+t+t;case 4789:return Xs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+t+Xs+t+ie+t+t;case 5936:switch(xe(t,e+11)){case 114:return Z+t+ie+W(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Z+t+ie+W(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Z+t+ie+W(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Z+t+ie+t+t;case 6165:return Z+t+ie+"flex-"+t+t;case 5187:return Z+t+W(t,/(\w+).+(:[^]+)/,Z+"box-$1$2"+ie+"flex-$1$2")+t;case 5443:return Z+t+ie+"flex-item-"+W(t,/flex-|-self/g,"")+(an(t,/flex-|baseline/)?"":ie+"grid-row-"+W(t,/flex-|-self/g,""))+t;case 4675:return Z+t+ie+"flex-line-pack"+W(t,/align-content|flex-|-self/g,"")+t;case 5548:return Z+t+ie+W(t,"shrink","negative")+t;case 5292:return Z+t+ie+W(t,"basis","preferred-size")+t;case 6060:return Z+"box-"+W(t,"-grow","")+Z+t+ie+W(t,"grow","positive")+t;case 4554:return Z+W(t,/([^-])(transform)/g,"$1"+Z+"$2")+t;case 6187:return W(W(W(t,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),t,"")+t;case 5495:case 3959:return W(t,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return W(W(t,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+t+t;case 4200:if(!an(t,/flex-|baseline/))return ie+"grid-column-align"+Bi(t,e)+t;break;case 2592:case 3360:return ie+W(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,an(r.props,/grid-\w+-end/)})?~al(t+(n=n[e].value),"span")?t:ie+W(t,"-start","")+t+ie+"grid-row-span:"+(~al(n,"span")?an(n,/\d+/):+an(n,/\d+/)-+an(t,/\d+/))+";":ie+W(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return an(r.props,/grid-\w+-start/)})?t:ie+W(W(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return W(t,/(.+)-inline(.+)/,Z+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(t)-1-e>6)switch(xe(t,e+1)){case 109:if(xe(t,e+4)!==45)break;case 102:return W(t,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Xs+(xe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~al(t,"stretch")?Z0(W(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return W(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return ie+i+":"+s+u+(o?ie+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(xe(t,e+6)===121)return W(t,":",":"+Z)+t;break;case 6444:switch(xe(t,xe(t,14)===45?18:11)){case 120:return W(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(xe(t,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+ie+"$2box$3")+t;case 100:return W(t,":",":"+ie)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(t,"scroll-","scroll-snap-")+t}return t}function Kl(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function RA(t,e,n,r){switch(t.type){case fA:if(t.children.length)break;case dA:case ip:return t.return=t.return||t.value;case G0:return"";case Q0:return t.return=t.value+"{"+Kl(t.children,r)+"}";case $u:if(!Kt(t.value=t.props.join(",")))return""}return Kt(n=Kl(t.children,r))?t.return=t.value+"{"+n+"}":""}function PA(t){var e=X0(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function kA(t){return function(e){e.root||(e=e.return)&&t(e)}}function xA(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case ip:t.return=Z0(t.value,t.length,n);return;case Q0:return Kl([Vn(t,{value:W(t.value,"@","@"+Z)})],r);case $u:if(t.length)return gA(n=t.props,function(i){switch(an(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":oi(Vn(t,{props:[W(i,/:(read-\w+)/,":"+Xs+"$1")]})),oi(Vn(t,{props:[i]})),yd(t,{props:bg(n,r)});break;case"::placeholder":oi(Vn(t,{props:[W(i,/:(plac\w+)/,":"+Z+"input-$1")]})),oi(Vn(t,{props:[W(i,/:(plac\w+)/,":"+Xs+"$1")]})),oi(Vn(t,{props:[W(i,/:(plac\w+)/,ie+"input-$1")]})),oi(Vn(t,{props:[i]})),yd(t,{props:bg(n,r)});break}return""})}}var NA={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Hi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",op=typeof window<"u"&&"HTMLElement"in window,DA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),ju=Object.freeze([]),qi=Object.freeze({});function OA(t,e,n){return n===void 0&&(n=qi),t.theme!==n.theme&&t.theme||e||n.theme}var ew=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),VA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,LA=/(^-|-$)/g;function zg(t){return t.replace(VA,"-").replace(LA,"")}var MA=/(a)(d)/gi,Bg=function(t){return String.fromCharCode(t+(t>25?39:97))};function wd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Bg(e%52)+n;return(Bg(e%52)+n).replace(MA,"$1-$2")}var Qc,Ii=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},tw=function(t){return Ii(5381,t)};function $A(t){return wd(tw(t)>>>0)}function FA(t){return t.displayName||t.name||"Component"}function Yc(t){return typeof t=="string"&&!0}var nw=typeof Symbol=="function"&&Symbol.for,rw=nw?Symbol.for("react.memo"):60115,bA=nw?Symbol.for("react.forward_ref"):60112,UA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},iw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zA=((Qc={})[bA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qc[rw]=iw,Qc);function Wg(t){return("type"in(e=t)&&e.type.$$typeof)===rw?iw:"$$typeof"in t?zA[t.$$typeof]:UA;var e}var BA=Object.defineProperty,WA=Object.getOwnPropertyNames,Hg=Object.getOwnPropertySymbols,HA=Object.getOwnPropertyDescriptor,qA=Object.getPrototypeOf,qg=Object.prototype;function sw(t,e,n){if(typeof e!="string"){if(qg){var r=qA(e);r&&r!==qg&&sw(t,r,n)}var i=WA(e);Hg&&(i=i.concat(Hg(e)));for(var s=Wg(t),o=Wg(e),a=0;a<i.length;++a){var l=i[a];if(!(l in jA||n&&n[l]||o&&l in o||s&&l in s)){var u=HA(e,l);try{BA(t,l,u)}catch{}}}}return t}function Ki(t){return typeof t=="function"}function ap(t){return typeof t=="object"&&"styledComponentId"in t}function Ar(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Kg(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function So(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ed(t,e,n){if(n===void 0&&(n=!1),!n&&!So(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Ed(t[r],e[r]);else if(So(e))for(var r in e)t[r]=Ed(t[r],e[r]);return t}function lp(t,e){Object.defineProperty(t,"toString",{value:e})}function Qo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var KA=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Qo(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),cl=new Map,Gl=new Map,Xc=1,Fa=function(t){if(cl.has(t))return cl.get(t);for(;Gl.has(Xc);)Xc++;var e=Xc++;return cl.set(t,e),Gl.set(e,t),e},GA=function(t,e){cl.set(t,e),Gl.set(e,t)},QA="style[".concat(Hi,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),YA=new RegExp("^".concat(Hi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),XA=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},JA=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(YA);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(GA(c,u),XA(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function ZA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ow=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Hi,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Hi,"active"),r.setAttribute("data-styled-version","6.0.8");var o=ZA();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},eR=function(){function t(e){this.element=ow(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Qo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),tR=function(){function t(e){this.element=ow(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),nR=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Gg=op,rR={isServer:!op,useCSSOMInjection:!DA},aw=function(){function t(e,n,r){e===void 0&&(e=qi),n===void 0&&(n={});var i=this;this.options=at(at({},rR),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&op&&Gg&&(Gg=!1,function(s){for(var o=document.querySelectorAll(QA),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Hi)!=="active"&&(JA(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),lp(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(p){return Gl.get(p)}(h);if(d===void 0)return"continue";var m=s.names.get(d),y=o.getGroup(h);if(m===void 0||y.length===0)return"continue";var v="".concat(Hi,".g").concat(h,'[id="').concat(d,'"]'),I="";m!==void 0&&m.forEach(function(p){p.length>0&&(I+="".concat(p,","))}),l+="".concat(y).concat(v,'{content:"').concat(I,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Fa(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(at(at({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new nR(i):r?new eR(i):new tR(i)}(this.options),new KA(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Fa(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Fa(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Fa(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),iR=/&/g,sR=/^\s*\/\/.*$/gm;function lw(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lw(n.children,e)),n})}function oR(t){var e,n,r,i=t===void 0?qi:t,s=i.options,o=s===void 0?qi:s,a=i.plugins,l=a===void 0?ju:a,u=function(d,m,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===$u&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(iR,n).replace(r,u))}),o.prefix&&c.push(xA),c.push(RA);var h=function(d,m,y,v){m===void 0&&(m=""),y===void 0&&(y=""),v===void 0&&(v="&"),e=v,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var I=d.replace(sR,""),p=CA(y||m?"".concat(y," ").concat(m," { ").concat(I," }"):I);o.namespace&&(p=lw(p,o.namespace));var f=[];return Kl(p,PA(c.concat(kA(function(g){return f.push(g)})))),f};return h.hash=l.length?l.reduce(function(d,m){return m.name||Qo(15),Ii(d,m.name)},5381).toString():"",h}var aR=new aw,Id=oR(),uw=$r.createContext({shouldForwardProp:void 0,styleSheet:aR,stylis:Id});uw.Consumer;$r.createContext(void 0);function Qg(){return E.useContext(uw)}var lR=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Id);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,lp(this,function(){throw Qo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Id),this.name+e.hash},t}(),uR=function(t){return t>="A"&&t<="Z"};function Yg(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;uR(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var cw=function(t){return t==null||t===!1||t===""},hw=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!cw(s)&&(Array.isArray(s)&&s.isCss||Ki(s)?r.push("".concat(Yg(i),":"),s,";"):So(s)?r.push.apply(r,ql(ql(["".concat(i," {")],hw(s),!1),["}"],!1)):r.push("".concat(Yg(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in NA||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Vr(t,e,n,r){if(cw(t))return[];if(ap(t))return[".".concat(t.styledComponentId)];if(Ki(t)){if(!Ki(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Vr(i,e,n,r)}var s;return t instanceof lR?n?(t.inject(n,r),[t.getName(r)]):[t]:So(t)?hw(t):Array.isArray(t)?Array.prototype.concat.apply(ju,t.map(function(o){return Vr(o,e,n,r)})):[t.toString()]}function cR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ki(n)&&!ap(n))return!1}return!0}var hR=tw("6.0.8"),dR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cR(e),this.componentId=n,this.baseHash=Ii(hR,n),this.baseStyle=r,aw.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ar(i,this.staticRulesId);else{var s=Kg(Vr(this.rules,e,n,r)),o=wd(Ii(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ar(i,o),this.staticRulesId=o}else{for(var l=Ii(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=Kg(Vr(h,e,n,r));l=Ii(l,d+c),u+=d}}if(u){var m=wd(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=Ar(i,m)}}return i},t}(),dw=$r.createContext(void 0);dw.Consumer;var Jc={};function fR(t,e,n){var r=ap(t),i=t,s=!Yc(t),o=e.attrs,a=o===void 0?ju:o,l=e.componentId,u=l===void 0?function(g,_){var S=typeof g!="string"?"sc":zg(g);Jc[S]=(Jc[S]||0)+1;var R="".concat(S,"-").concat($A("6.0.8"+S+Jc[S]));return _?"".concat(_,"-").concat(R):R}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(g){return Yc(g)?"styled.".concat(g):"Styled(".concat(FA(g),")")}(t);var h=e.displayName&&e.componentId?"".concat(zg(e.displayName),"-").concat(e.componentId):e.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=e.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;m=function(g,_){return y(g,_)&&v(g,_)}}else m=y}var I=new dR(n,h,r?i.componentStyle:void 0);function p(g,_){return function(S,R,C){var O=S.attrs,Q=S.componentStyle,z=S.defaultProps,dt=S.foldedComponentIds,yr=S.styledComponentId,vr=S.target,_a=$r.useContext(dw),_c=Qg(),_r=S.shouldForwardProp||_c.shouldForwardProp,It=function(sn,ft,xn){for(var pt,Tt=at(at({},ft),{className:void 0,theme:xn}),wc=0;wc<sn.length;wc+=1){var wa=Ki(pt=sn[wc])?pt(Tt):pt;for(var Nn in wa)Tt[Nn]=Nn==="className"?Ar(Tt[Nn],wa[Nn]):Nn==="style"?at(at({},Tt[Nn]),wa[Nn]):wa[Nn]}return ft.className&&(Tt.className=Ar(Tt.className,ft.className)),Tt}(O,R,OA(R,_a,z)||qi),x=It.as||vr,M={};for(var $ in It)It[$]===void 0||$[0]==="$"||$==="as"||$==="theme"||($==="forwardedAs"?M.as=It.forwardedAs:_r&&!_r($,x)||(M[$]=It[$]));var ue=function(sn,ft){var xn=Qg(),pt=sn.generateAndInjectStyles(ft,xn.styleSheet,xn.stylis);return pt}(Q,It),me=Ar(dt,yr);return ue&&(me+=" "+ue),It.className&&(me+=" "+It.className),M[Yc(x)&&!ew.has(x)?"class":"className"]=me,M.ref=C,E.createElement(x,M)}(f,g,_)}var f=$r.forwardRef(p);return f.attrs=d,f.componentStyle=I,f.shouldForwardProp=m,f.foldedComponentIds=r?Ar(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=h,f.target=r?i.target:t,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(_){for(var S=[],R=1;R<arguments.length;R++)S[R-1]=arguments[R];for(var C=0,O=S;C<O.length;C++)Ed(_,O[C],!0);return _}({},i.defaultProps,g):g}}),lp(f,function(){return".".concat(f.styledComponentId)}),s&&sw(f,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Xg(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Jg=function(t){return Object.assign(t,{isCss:!0})};function fw(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ki(t)||So(t)){var r=t;return Jg(Vr(Xg(ju,ql([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Vr(i):Jg(Vr(Xg(i,e)))}function Td(t,e,n){if(n===void 0&&(n=qi),!e)throw Qo(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,fw.apply(void 0,ql([i],s,!1)))};return r.attrs=function(i){return Td(t,e,at(at({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Td(t,e,at(at({},n),i))},r}var pw=function(t){return Td(fR,t)},H=pw;ew.forEach(function(t){H[t]=pw(t)});const mw=H.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl:t})=>`url(${t})`};
`,gw=H.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`,pR=H.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${mw} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${gw} {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`,mR=({category:t})=>{const{imageUrl:e,title:n,route:r}=t,i=tp(),s=()=>{i(r)};return w.jsxs(pR,{onClick:s,children:[w.jsx(mw,{imageUrl:e}),w.jsxs(gw,{children:[w.jsx("h2",{children:n}),w.jsx("p",{children:"Shop Now"})]})]})},gR=H.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,yR=[{id:1,title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",route:"/shop/hats"},{id:2,title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",route:"/shop/jackets"},{id:3,title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",route:"/shop/sneakers"},{id:4,title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",route:"/shop/womens"},{id:5,title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",route:"/shop/mens"}],vR=()=>w.jsx(gR,{children:yR.map(t=>w.jsx(mR,{category:t},t.id))});function _R(){return w.jsxs("div",{children:[w.jsx(vR,{}),w.jsx(q0,{})]})}const wR=H.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`,ER=H(np)`
  height: 100%;
  width: 70px;
  padding: 25px;
`,IR=H.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,Zc=H(np)`
  padding: 10px 15px;
  cursor: pointer;
`,TR=t=>E.createElement("svg",{width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},E.createElement("title",null,"Group"),E.createElement("desc",null,"Created with Sketch."),E.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},E.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},E.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},E.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),E.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),E.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),E.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),E.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new CR;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AR=function(t){const e=yw(t);return vw.encodeByteArray(e,!0)},Ql=function(t){return AR(t).replace(/\./g,"")},_w=function(t){try{return vw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=()=>RR().__FIREBASE_DEFAULTS__,kR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_w(t[1]);return e&&JSON.parse(e)},up=()=>{try{return PR()||kR()||xR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ww=t=>{var e,n;return(n=(e=up())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NR=t=>{const e=ww(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ew=()=>{var t;return(t=up())===null||t===void 0?void 0:t.config},Iw=t=>{var e;return(e=up())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ql(JSON.stringify(n)),Ql(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function LR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $R(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FR(){try{return typeof indexedDB=="object"}catch{return!1}}function bR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UR,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yo.prototype.create)}}class Yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kn(i,a,r)}}function jR(t,e){return t.replace(zR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zR=/\{\$([^}]+)}/g;function BR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zg(s)&&Zg(o)){if(!Yl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function WR(t,e){const n=new HR(t,e);return n.subscribe.bind(n)}class HR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=eh),i.error===void 0&&(i.error=eh),i.complete===void 0&&(i.complete=eh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function eh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QR(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GR(t){return t===Ir?void 0:t}function QR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const XR={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},JR=X.INFO,ZR={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},eP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cp{constructor(e){this.name=e,this._logLevel=JR,this._logHandler=eP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const tP=(t,e)=>e.some(n=>t instanceof n);let ey,ty;function nP(){return ey||(ey=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rP(){return ty||(ty=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tw=new WeakMap,Sd=new WeakMap,Sw=new WeakMap,th=new WeakMap,hp=new WeakMap;function iP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tw.set(n,t)}).catch(()=>{}),hp.set(e,t),e}function sP(t){if(Sd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sd.set(t,e)}let Cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oP(t){Cd=t(Cd)}function aP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nh(this),e,...n);return Sw.set(r,e.sort?e.sort():[e]),nr(r)}:rP().includes(t)?function(...e){return t.apply(nh(this),e),nr(Tw.get(this))}:function(...e){return nr(t.apply(nh(this),e))}}function lP(t){return typeof t=="function"?aP(t):(t instanceof IDBTransaction&&sP(t),tP(t,nP())?new Proxy(t,Cd):t)}function nr(t){if(t instanceof IDBRequest)return iP(t);if(th.has(t))return th.get(t);const e=lP(t);return e!==t&&(th.set(t,e),hp.set(e,t)),e}const nh=t=>hp.get(t);function uP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const cP=["get","getKey","getAll","getAllKeys","count"],hP=["put","add","delete","clear"],rh=new Map;function ny(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rh.get(e))return rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return rh.set(e,s),s}oP(t=>({...t,get:(e,n,r)=>ny(e,n)||t.get(e,n,r),has:(e,n)=>!!ny(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ad="@firebase/app",ry="0.9.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new cp("@firebase/app"),pP="@firebase/app-compat",mP="@firebase/analytics-compat",gP="@firebase/analytics",yP="@firebase/app-check-compat",vP="@firebase/app-check",_P="@firebase/auth",wP="@firebase/auth-compat",EP="@firebase/database",IP="@firebase/database-compat",TP="@firebase/functions",SP="@firebase/functions-compat",CP="@firebase/installations",AP="@firebase/installations-compat",RP="@firebase/messaging",PP="@firebase/messaging-compat",kP="@firebase/performance",xP="@firebase/performance-compat",NP="@firebase/remote-config",DP="@firebase/remote-config-compat",OP="@firebase/storage",VP="@firebase/storage-compat",LP="@firebase/firestore",MP="@firebase/firestore-compat",$P="firebase",FP="10.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="[DEFAULT]",bP={[Ad]:"fire-core",[pP]:"fire-core-compat",[gP]:"fire-analytics",[mP]:"fire-analytics-compat",[vP]:"fire-app-check",[yP]:"fire-app-check-compat",[_P]:"fire-auth",[wP]:"fire-auth-compat",[EP]:"fire-rtdb",[IP]:"fire-rtdb-compat",[TP]:"fire-fn",[SP]:"fire-fn-compat",[CP]:"fire-iid",[AP]:"fire-iid-compat",[RP]:"fire-fcm",[PP]:"fire-fcm-compat",[kP]:"fire-perf",[xP]:"fire-perf-compat",[NP]:"fire-rc",[DP]:"fire-rc-compat",[OP]:"fire-gcs",[VP]:"fire-gcs-compat",[LP]:"fire-fst",[MP]:"fire-fst-compat","fire-js":"fire-js",[$P]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Map,Pd=new Map;function UP(t,e){try{t.container.addComponent(e)}catch(n){Wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gi(t){const e=t.name;if(Pd.has(e))return Wr.debug(`There were multiple attempts to register component ${e}.`),!1;Pd.set(e,t);for(const n of Xl.values())UP(n,t);return!0}function dp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rr=new Yo("app","Firebase",jP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=FP;function Cw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=Ew()),!n)throw rr.create("no-options");const s=Xl.get(i);if(s){if(Yl(n,s.options)&&Yl(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new YR(i);for(const l of Pd.values())o.addComponent(l);const a=new zP(n,r,o);return Xl.set(i,a),a}function Aw(t=Rd){const e=Xl.get(t);if(!e&&t===Rd&&Ew())return Cw();if(!e)throw rr.create("no-app",{appName:t});return e}function ir(t,e,n){var r;let i=(r=bP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wr.warn(a.join(" "));return}Gi(new Br(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="firebase-heartbeat-database",WP=1,Co="firebase-heartbeat-store";let ih=null;function Rw(){return ih||(ih=uP(BP,WP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Co)}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),ih}async function HP(t){try{return await(await Rw()).transaction(Co).objectStore(Co).get(Pw(t))}catch(e){if(e instanceof kn)Wr.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wr.warn(n.message)}}}async function iy(t,e){try{const r=(await Rw()).transaction(Co,"readwrite");await r.objectStore(Co).put(e,Pw(t)),await r.done}catch(n){if(n instanceof kn)Wr.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wr.warn(r.message)}}}function Pw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=1024,KP=30*24*60*60*1e3;class GP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=KP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sy(),{heartbeatsToSend:n,unsentEntries:r}=QP(this._heartbeatsCache.heartbeats),i=Ql(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sy(){return new Date().toISOString().substring(0,10)}function QP(t,e=qP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),oy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),oy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FR()?bR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function oy(t){return Ql(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t){Gi(new Br("platform-logger",e=>new dP(e),"PRIVATE")),Gi(new Br("heartbeat",e=>new GP(e),"PRIVATE")),ir(Ad,ry,t),ir(Ad,ry,"esm2017"),ir("fire-js","")}XP("");var JP="firebase",ZP="10.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(JP,ZP,"app");function ay(t){return t!==void 0&&t.enterprise!==void 0}class ek{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function kw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tk=kw,xw=new Yo("auth","Firebase",kw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new cp("@firebase/auth");function nk(t,...e){Jl.logLevel<=X.WARN&&Jl.warn(`Auth (${us}): ${t}`,...e)}function hl(t,...e){Jl.logLevel<=X.ERROR&&Jl.error(`Auth (${us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw fp(t,...e)}function en(t,...e){return fp(t,...e)}function Nw(t,e,n){const r=Object.assign(Object.assign({},tk()),{[e]:n});return new Yo("auth","Firebase",r).create(e,{appName:t.name})}function rk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ot(t,"argument-error"),Nw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xw.create(t,...e)}function F(t,e,...n){if(!t)throw fp(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hl(e),new Error(e)}function In(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ik(){return ly()==="http:"||ly()==="https:"}function ly(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ik()||LR()||"connection"in navigator)?navigator.onLine:!0}function ok(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=VR()||MR()}get(){return sk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=new Jo(3e4,6e4);function Zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ei(t,e,n,r,i={}){return Ow(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Dw.fetch()(Vw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ow(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ak),e);try{const i=new uk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ba(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nw(t,c,u);Ot(t,c)}}catch(i){if(i instanceof kn)throw i;Ot(t,"network-request-failed",{message:String(i)})}}async function Zo(t,e,n,r,i={}){const s=await ei(t,e,n,r,i);return"mfaPendingCredential"in s&&Ot(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Vw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?pp(t.config,i):`${t.config.apiScheme}://${i}`}class uk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),lk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}async function ck(t,e){return ei(t,"GET","/v2/recaptchaConfig",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(t,e){return ei(t,"POST","/v1/accounts:delete",e)}async function dk(t,e){return ei(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fk(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=mp(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Js(sh(i.auth_time)),issuedAtTime:Js(sh(i.iat)),expirationTime:Js(sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sh(t){return Number(t)*1e3}function mp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hl("JWT malformed, contained fewer than 3 sections"),null;try{const i=_w(n);return i?JSON.parse(i):(hl("Failed to decode base64 JWT payload"),null)}catch(i){return hl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pk(t){const e=mp(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&mk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ao(t,dk(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_k(s.providerUserInfo):[],a=vk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function yk(t){const e=nt(t);await Zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _k(t){return t.map(e=>{var{providerId:n}=e,r=rp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,e){const n=await Ow(t,{},async()=>{const r=Xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Vw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ro;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fk(this,e)}reload(){return yk(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ao(this,hk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:S,providerData:R,stsTokenManager:C}=n;F(g&&C,e,"internal-error");const O=Ro.fromJSON(this.name,C);F(typeof g=="string",e,"internal-error"),On(h,e.name),On(d,e.name),F(typeof _=="boolean",e,"internal-error"),F(typeof S=="boolean",e,"internal-error"),On(m,e.name),On(y,e.name),On(v,e.name),On(I,e.name),On(p,e.name),On(f,e.name);const Q=new Lr({uid:g,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:S,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(Q.providerData=R.map(z=>Object.assign({},z))),I&&(Q._redirectEventId=I),Q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ro;i.updateFromServerResponse(n);const s=new Lr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new Map;function fn(t){In(t instanceof Function,"Expected a class definition");let e=uy.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mw.type="NONE";const cy=Mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(fn(cy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||fn(cy);const o=dl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Lr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ni(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ni(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jw(e))return"Blackberry";if(zw(e))return"Webos";if(gp(e))return"Safari";if((e.includes("chrome/")||Fw(e))&&!e.includes("edge/"))return"Chrome";if(Uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $w(t=Xe()){return/firefox\//i.test(t)}function gp(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fw(t=Xe()){return/crios\//i.test(t)}function bw(t=Xe()){return/iemobile/i.test(t)}function Uw(t=Xe()){return/android/i.test(t)}function jw(t=Xe()){return/blackberry/i.test(t)}function zw(t=Xe()){return/webos/i.test(t)}function zu(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ek(t=Xe()){var e;return zu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ik(){return $R()&&document.documentMode===10}function Bw(t=Xe()){return zu(t)||Uw(t)||zw(t)||jw(t)||/windows phone/i.test(t)||bw(t)}function Tk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e=[]){let n;switch(t){case"Browser":n=hy(Xe());break;case"Worker":n=`${hy(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(t,e={}){return ei(t,"GET","/v2/passwordPolicy",Zr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=6;class Rk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ak,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dy(this),this.idTokenSubscription=new dy(this),this.beforeStateQueue=new Sk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ok()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ck(this),n=new Rk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pr(t){return nt(t)}class dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=WR(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kk().appendChild(r)})}function xk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Nk="https://www.google.com/recaptcha/enterprise.js?render=",Dk="recaptcha-enterprise",Ok="NO_RECAPTCHA";class Vk{constructor(e){this.type=Dk,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ck(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ek(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ay(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ok)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ay(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Hw(Nk+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function eu(t,e,n,r=!1){const i=new Vk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t,e){const n=dp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yl(s,e??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:e})}function Mk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $k(t,e,n){const r=pr(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qw(e),{host:o,port:a}=Fk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bk()}function qw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fk(t){const e=qw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fy(o)}}}function fy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function Uk(t,e){return ei(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(t,e){return Zo(t,"POST","/v1/accounts:signInWithPassword",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}async function zk(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends yp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await eu(e,r,"signInWithPassword");return oh(e,i)}else return oh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await eu(e,r,"signInWithPassword");return oh(e,s)}else return Promise.reject(i)});case"emailLink":return jk(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Uk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zk(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e){return Zo(t,"POST","/v1/accounts:signInWithIdp",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="http://localhost";class Hr extends yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Di(e,n)}buildRequest(){const e={requestUri:Bk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hk(t){const e=Vs(Ls(t)).link,n=e?Vs(Ls(e)).deep_link_id:null,r=Vs(Ls(t)).deep_link_id;return(r?Vs(Ls(r)).link:null)||r||n||e||t}class vp{constructor(e){var n,r,i,s,o,a;const l=Vs(Ls(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Wk((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Hk(e);try{return new vp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(e,n){return Po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vp.parseLink(n);return F(r,"argument-error"),Po._fromEmailAndCode(e,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends _p{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ea{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends ea{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends ea{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(t,e){return Zo(t,"POST","/v1/accounts:signUp",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lr._fromIdTokenResponse(e,r,i),o=py(r);return new qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=py(r);return new qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function py(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tu(e,n,r,i)}}function Kw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tu._fromErrorAndOperation(t,s,e,r):s})}async function qk(t,e,n=!1){const r=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ao(t,Kw(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=mp(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),qr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t,e,n=!1){const r="signIn",i=await Kw(t,r,e),s=await qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Gk(t,e){return Gw(pr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Qk(t,e,n){var r;const i=pr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await eu(i,s,"signUpPassword");o=ah(i,u)}else o=ah(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await eu(i,s,"signUpPassword");return ah(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Qw(t),u}),l=await qr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Yk(t,e,n){return Gk(nt(t),cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qw(t),r})}function Xk(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function Jk(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function Zk(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function ex(t){return nt(t).signOut()}const nu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nu,"1"),this.storage.removeItem(nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(){const t=Xe();return gp(t)||zu(t)}const nx=1e3,rx=10;class Xw extends Yw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tx()&&Tk(),this.fallbackToPolling=Bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ik()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xw.type="LOCAL";const ix=Xw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw extends Yw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jw.type="SESSION";const Zw=Jw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await sx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=wp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function ax(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function lx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ux(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cx(){return e1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="firebaseLocalStorageDb",hx=1,ru="firebaseLocalStorage",n1="fbase_key";class ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wu(t,e){return t.transaction([ru],e?"readwrite":"readonly").objectStore(ru)}function dx(){const t=indexedDB.deleteDatabase(t1);return new ta(t).toPromise()}function xd(){const t=indexedDB.open(t1,hx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ru,{keyPath:n1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ru)?e(r):(r.close(),await dx(),e(await xd()))})})}async function my(t,e,n){const r=Wu(t,!0).put({[n1]:e,value:n});return new ta(r).toPromise()}async function fx(t,e){const n=Wu(t,!1).get(e),r=await new ta(n).toPromise();return r===void 0?null:r.value}function gy(t,e){const n=Wu(t,!0).delete(e);return new ta(n).toPromise()}const px=800,mx=3;class r1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bu._getInstance(cx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lx(),!this.activeServiceWorker)return;this.sender=new ox(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ux()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xd();return await my(e,nu,"1"),await gy(e,nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>my(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wu(i,!1).getAll();return new ta(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),px)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}r1.type="LOCAL";const gx=r1;new Jo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t,e){return e?fn(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep extends yp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yx(t){return Gw(t.auth,new Ep(t),t.bypassAuthState)}function vx(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Kk(n,new Ep(t),t.bypassAuthState)}async function _x(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),qk(n,new Ep(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yx;case"linkViaPopup":case"linkViaRedirect":return _x;case"reauthViaPopup":case"reauthViaRedirect":return vx;default:Ot(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=new Jo(2e3,1e4);async function Ex(t,e,n){const r=pr(t);rk(t,e,_p);const i=i1(r,n);return new Rr(r,"signInViaPopup",e,i).executeNotNull()}class Rr extends s1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=wp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wx.get())};e()}}Rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix="pendingRedirect",fl=new Map;class Tx extends s1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await Sx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sx(t,e){const n=Rx(e),r=Ax(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Cx(t,e){fl.set(t._key(),e)}function Ax(t){return fn(t._redirectPersistence)}function Rx(t){return dl(Ix,t.config.apiKey,t.name)}async function Px(t,e,n=!1){const r=pr(t),i=i1(r,e),o=await new Tx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=10*60*1e3;class xx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!o1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kx&&this.cachedEventUids.clear(),this.cachedEventUids.has(yy(e))}saveEventToCache(e){this.cachedEventUids.add(yy(e)),this.lastProcessedEventTime=Date.now()}}function yy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function o1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(t,e={}){return ei(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vx=/^https?/;async function Lx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Dx(t);for(const n of e)try{if(Mx(n))return}catch{}Ot(t,"unauthorized-domain")}function Mx(t){const e=kd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Vx.test(n))return!1;if(Ox.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=new Jo(3e4,6e4);function vy(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fx(t){return new Promise((e,n)=>{var r,i,s;function o(){vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vy(),n(en(t,"network-request-failed"))},timeout:$x.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const a=xk("iframefcb");return tn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},Hw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pl=null,e})}let pl=null;function bx(t){return pl=pl||Fx(t),pl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=new Jo(5e3,15e3),jx="__/auth/iframe",zx="emulator/auth/iframe",Bx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hx(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pp(e,zx):`https://${t.config.authDomain}/${jx}`,r={apiKey:e.apiKey,appName:t.name,v:us},i=Wx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xo(r).slice(1)}`}async function qx(t){const e=await bx(t),n=tn().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Hx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=tn().setTimeout(()=>{s(o)},Ux.get());function l(){tn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gx=500,Qx=600,Yx="_blank",Xx="http://localhost";class _y{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jx(t,e,n,r=Gx,i=Qx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Kx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=Fw(u)?Yx:n),$w(u)&&(e=e||Xx,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(Ek(u)&&a!=="_self")return Zx(e||"",a),new _y(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new _y(h)}function Zx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2="__/auth/handler",t2="emulator/auth/handler",n2=encodeURIComponent("fac");async function wy(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:i};if(e instanceof _p){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ea){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${n2}=${encodeURIComponent(l)}`:"";return`${r2(t)}?${Xo(a).slice(1)}${u}`}function r2({config:t}){return t.emulator?pp(t,t2):`https://${t.authDomain}/${e2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="webStorageSupport";class i2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zw,this._completeRedirectFn=Px,this._overrideRedirectResult=Cx}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wy(e,n,r,kd(),i);return Jx(e,o,wp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wy(e,n,r,kd(),i);return ax(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qx(e),r=new xx(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lh,{type:lh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[lh];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bw()||gp()||zu()}}const s2=i2;var Ey="@firebase/auth",Iy="1.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function l2(t){Gi(new Br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ww(t)},u=new Pk(r,i,s,l);return Mk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gi(new Br("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new o2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(Ey,Iy,a2(t)),ir(Ey,Iy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=5*60,c2=Iw("authIdTokenMaxAge")||u2;let Ty=null;const h2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>c2)return;const i=n==null?void 0:n.token;Ty!==i&&(Ty=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function d2(t=Aw()){const e=dp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Lk(t,{popupRedirectResolver:s2,persistence:[gx,ix,Zw]}),r=Iw("authTokenSyncURL");if(r){const s=h2(r);Jk(n,s,()=>s(n.currentUser)),Xk(n,o=>s(o))}const i=ww("auth");return i&&$k(n,`http://${i}`),n}l2("Browser");var f2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,Ip=Ip||{},U=f2||self;function Hu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function na(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function p2(t){return Object.prototype.hasOwnProperty.call(t,uh)&&t[uh]||(t[uh]=++m2)}var uh="closure_uid_"+(1e9*Math.random()>>>0),m2=0;function g2(t,e,n){return t.call.apply(t.bind,arguments)}function y2(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ke=g2:Ke=y2,Ke.apply(null,arguments)}function Ua(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function mr(){this.s=this.s,this.o=this.o}var v2=0;mr.prototype.s=!1;mr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),v2!=0)&&p2(this)};mr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const a1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Sy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Hu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var _2=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",()=>{},e),U.removeEventListener("test",()=>{},e)}catch{}return t}();function ko(t){return/^[\s\xa0]*$/.test(t)}function qu(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function Qt(t){return qu().indexOf(t)!=-1}function Sp(t){return Sp[" "](t),t}Sp[" "]=function(){};function w2(t,e){var n=dN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var E2=Qt("Opera"),Qi=Qt("Trident")||Qt("MSIE"),l1=Qt("Edge"),Nd=l1||Qi,u1=Qt("Gecko")&&!(qu().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),I2=qu().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function c1(){var t=U.document;return t?t.documentMode:void 0}var Dd;e:{var ch="",hh=function(){var t=qu();if(u1)return/rv:([^\);]+)(\)|;)/.exec(t);if(l1)return/Edge\/([\d\.]+)/.exec(t);if(Qi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(I2)return/WebKit\/(\S+)/.exec(t);if(E2)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hh&&(ch=hh?hh[1]:""),Qi){var dh=c1();if(dh!=null&&dh>parseFloat(ch)){Dd=String(dh);break e}}Dd=ch}var Od;if(U.document&&Qi){var Cy=c1();Od=Cy||parseInt(Dd,10)||void 0}else Od=void 0;var T2=Od;function xo(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(u1){e:{try{Sp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:S2[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xo.$.h.call(this)}}Oe(xo,Ge);var S2={2:"touch",3:"pen",4:"mouse"};xo.prototype.h=function(){xo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ra="closure_listenable_"+(1e6*Math.random()|0),C2=0;function A2(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++C2,this.fa=this.ia=!1}function Ku(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Cp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function R2(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function h1(t){const e={};for(const n in t)e[n]=t[n];return e}const Ay="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function d1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ay.length;s++)n=Ay[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Gu(t){this.src=t,this.g={},this.h=0}Gu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ld(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new A2(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Vd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=a1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ku(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ld(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ap="closure_lm_"+(1e6*Math.random()|0),fh={};function f1(t,e,n,r,i){if(r&&r.once)return m1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)f1(t,e[s],n,r,i);return null}return n=kp(n),t&&t[ra]?t.O(e,n,na(r)?!!r.capture:!!r,i):p1(t,e,n,!1,r,i)}function p1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=na(i)?!!i.capture:!!i,a=Pp(t);if(a||(t[Ap]=a=new Gu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=P2(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_2||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(y1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function P2(){function t(n){return e.call(t.src,t.listener,n)}const e=k2;return t}function m1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)m1(t,e[s],n,r,i);return null}return n=kp(n),t&&t[ra]?t.P(e,n,na(r)?!!r.capture:!!r,i):p1(t,e,n,!0,r,i)}function g1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)g1(t,e[s],n,r,i);else r=na(r)?!!r.capture:!!r,n=kp(n),t&&t[ra]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ld(s,n,r,i),-1<n&&(Ku(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ld(e,n,r,i)),(n=-1<t?e[t]:null)&&Rp(n))}function Rp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ra])Vd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(y1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Pp(e))?(Vd(n,t),n.h==0&&(n.src=null,e[Ap]=null)):Ku(t)}}}function y1(t){return t in fh?fh[t]:fh[t]="on"+t}function k2(t,e){if(t.fa)t=!0;else{e=new xo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Rp(t),t=n.call(r,e)}return t}function Pp(t){return t=t[Ap],t instanceof Gu?t:null}var ph="__closure_events_fn_"+(1e9*Math.random()>>>0);function kp(t){return typeof t=="function"?t:(t[ph]||(t[ph]=function(e){return t.handleEvent(e)}),t[ph])}function De(){mr.call(this),this.i=new Gu(this),this.S=this,this.J=null}Oe(De,mr);De.prototype[ra]=!0;De.prototype.removeEventListener=function(t,e,n,r){g1(this,t,e,n,r)};function Fe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var i=e;e=new Ge(r,t),d1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ja(o,r,!0,e)&&i}if(o=e.g=t,i=ja(o,r,!0,e)&&i,i=ja(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ja(o,r,!1,e)&&i}De.prototype.N=function(){if(De.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ku(n[r]);delete t.g[e],t.h--}}this.J=null};De.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};De.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ja(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Vd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var xp=U.JSON.stringify;class x2{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function N2(){var t=Np;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class D2{constructor(){this.h=this.g=null}add(e,n){const r=v1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var v1=new x2(()=>new O2,t=>t.reset());class O2{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function V2(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function L2(t){U.setTimeout(()=>{throw t},0)}let No,Do=!1,Np=new D2,_1=()=>{const t=U.Promise.resolve(void 0);No=()=>{t.then(M2)}};var M2=()=>{for(var t;t=N2();){try{t.h.call(t.g)}catch(n){L2(n)}var e=v1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Do=!1};function Qu(t,e){De.call(this),this.h=t||1,this.g=e||U,this.j=Ke(this.qb,this),this.l=Date.now()}Oe(Qu,De);k=Qu.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Fe(this,"tick"),this.ga&&(Dp(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Dp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){Qu.$.N.call(this),Dp(this),delete this.g};function Op(t,e,n){if(typeof t=="function")n&&(t=Ke(t,n));else if(t&&typeof t.handleEvent=="function")t=Ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function w1(t){t.g=Op(()=>{t.g=null,t.i&&(t.i=!1,w1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $2 extends mr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:w1(this)}N(){super.N(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oo(t){mr.call(this),this.h=t,this.g={}}Oe(Oo,mr);var Ry=[];function E1(t,e,n,r){Array.isArray(n)||(n&&(Ry[0]=n.toString()),n=Ry);for(var i=0;i<n.length;i++){var s=f1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function I1(t){Cp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rp(e)},t),t.g={}}Oo.prototype.N=function(){Oo.$.N.call(this),I1(this)};Oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yu(){this.g=!0}Yu.prototype.Ea=function(){this.g=!1};function F2(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function b2(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ti(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+j2(t,n)+(r?" "+r:"")})}function U2(t,e){t.info(function(){return"TIMEOUT: "+e})}Yu.prototype.info=function(){};function j2(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xp(n)}catch{return e}}var ti={},Py=null;function Xu(){return Py=Py||new De}ti.Ta="serverreachability";function T1(t){Ge.call(this,ti.Ta,t)}Oe(T1,Ge);function Vo(t){const e=Xu();Fe(e,new T1(e))}ti.STAT_EVENT="statevent";function S1(t,e){Ge.call(this,ti.STAT_EVENT,t),this.stat=e}Oe(S1,Ge);function et(t){const e=Xu();Fe(e,new S1(e,t))}ti.Ua="timingevent";function C1(t,e){Ge.call(this,ti.Ua,t),this.size=e}Oe(C1,Ge);function ia(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var Ju={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},A1={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Vp(){}Vp.prototype.h=null;function ky(t){return t.h||(t.h=t.i())}function R1(){}var sa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lp(){Ge.call(this,"d")}Oe(Lp,Ge);function Mp(){Ge.call(this,"c")}Oe(Mp,Ge);var Md;function Zu(){}Oe(Zu,Vp);Zu.prototype.g=function(){return new XMLHttpRequest};Zu.prototype.i=function(){return{}};Md=new Zu;function oa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Oo(this),this.P=z2,t=Nd?125:void 0,this.V=new Qu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new P1}function P1(){this.i=null,this.g="",this.h=!1}var z2=45e3,$d={},iu={};k=oa.prototype;k.setTimeout=function(t){this.P=t};function Fd(t,e,n){t.L=1,t.v=tc(Tn(e)),t.s=n,t.S=!0,k1(t,null)}function k1(t,e){t.G=Date.now(),aa(t),t.A=Tn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),$1(n.i,"t",r),t.C=0,n=t.l.J,t.h=new P1,t.g=iE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new $2(Ke(t.Pa,t,t.g),t.O)),E1(t.U,t.g,"readystatechange",t.nb),e=t.I?h1(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Vo(),F2(t.j,t.u,t.A,t.m,t.W,t.s)}k.nb=function(t){t=t.target;const e=this.M;e&&Yt(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const c=Yt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Nd||this.g&&(this.h.h||this.g.ja()||Oy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Vo(3):Vo(2)),ec(this);var n=this.g.da();this.ca=n;t:if(x1(this)){var r=Oy(this.g);t="";var i=r.length,s=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),Zs(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,b2(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ko(a)){var u=a;break t}}u=null}if(n=u)Ti(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bd(this,n);else{this.i=!1,this.o=3,et(12),Pr(this),Zs(this);break e}}this.S?(N1(this,c,o),Nd&&this.i&&c==3&&(E1(this.U,this.V,"tick",this.mb),this.V.start())):(Ti(this.j,this.m,o,null),bd(this,o)),c==4&&Pr(this),this.i&&!this.J&&(c==4?eE(this.l,this):(this.i=!1,aa(this)))}else uN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Pr(this),Zs(this)}}}catch{}finally{}};function x1(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function N1(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=B2(t,n),i==iu){e==4&&(t.o=4,et(14),r=!1),Ti(t.j,t.m,null,"[Incomplete Response]");break}else if(i==$d){t.o=4,et(15),Ti(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ti(t.j,t.m,i,null),bd(t,i);x1(t)&&i!=iu&&i!=$d&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zp(e),e.M=!0,et(11))):(Ti(t.j,t.m,n,"[Invalid Chunked Response]"),Pr(t),Zs(t))}k.mb=function(){if(this.g){var t=Yt(this.g),e=this.g.ja();this.C<e.length&&(ec(this),N1(this,t,e),this.i&&t!=4&&aa(this))}};function B2(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?iu:(n=Number(e.substring(n,r)),isNaN(n)?$d:(r+=1,r+n>e.length?iu:(e=e.slice(r,r+n),t.C=r+n,e)))}k.cancel=function(){this.J=!0,Pr(this)};function aa(t){t.Y=Date.now()+t.P,D1(t,t.P)}function D1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ia(Ke(t.lb,t),e)}function ec(t){t.B&&(U.clearTimeout(t.B),t.B=null)}k.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(U2(this.j,this.A),this.L!=2&&(Vo(),et(17)),Pr(this),this.o=2,Zs(this)):D1(this,this.Y-t)};function Zs(t){t.l.H==0||t.J||eE(t.l,t)}function Pr(t){ec(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Dp(t.V),I1(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function bd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ud(n.i,t))){if(!t.K&&Ud(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)au(n),ic(n);else break e;jp(n),et(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ia(Ke(n.ib,n),6e3));if(1>=U1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else kr(n,11)}else if((t.K||n.g==t)&&au(n),!ko(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&($p(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,se(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=rE(r,r.J?r.pa:null,r.Y),o.K){j1(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ec(a),aa(a)),r.g=o}else J1(r);0<n.j.length&&sc(n)}else u[0]!="stop"&&u[0]!="close"||kr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kr(n,7):Up(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Vo(4)}catch{}}function W2(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Hu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function H2(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Hu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function O1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Hu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=H2(t),r=W2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var V1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function q2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Mr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Mr){this.h=t.h,su(this,t.j),this.s=t.s,this.g=t.g,ou(this,t.m),this.l=t.l;var e=t.i,n=new Lo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xy(this,n),this.o=t.o}else t&&(e=String(t).match(V1))?(this.h=!1,su(this,e[1]||"",!0),this.s=Ms(e[2]||""),this.g=Ms(e[3]||"",!0),ou(this,e[4]),this.l=Ms(e[5]||"",!0),xy(this,e[6]||"",!0),this.o=Ms(e[7]||"")):(this.h=!1,this.i=new Lo(null,this.h))}Mr.prototype.toString=function(){var t=[],e=this.j;e&&t.push($s(e,Ny,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($s(e,Ny,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($s(n,n.charAt(0)=="/"?Q2:G2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$s(n,X2)),t.join("")};function Tn(t){return new Mr(t)}function su(t,e,n){t.j=n?Ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ou(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xy(t,e,n){e instanceof Lo?(t.i=e,J2(t.i,t.h)):(n||(e=$s(e,Y2)),t.i=new Lo(e,t.h))}function se(t,e,n){t.i.set(e,n)}function tc(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $s(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,K2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function K2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ny=/[#\/\?@]/g,G2=/[#\?:]/g,Q2=/[#\?]/g,Y2=/[#\?@]/g,X2=/#/g;function Lo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gr(t){t.g||(t.g=new Map,t.h=0,t.i&&q2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=Lo.prototype;k.add=function(t,e){gr(this),this.i=null,t=hs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function L1(t,e){gr(t),e=hs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function M1(t,e){return gr(t),e=hs(t,e),t.g.has(e)}k.forEach=function(t,e){gr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};k.ta=function(){gr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};k.Z=function(t){gr(this);let e=[];if(typeof t=="string")M1(this,t)&&(e=e.concat(this.g.get(hs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return gr(this),this.i=null,t=hs(this,t),M1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function $1(t,e,n){L1(t,e),0<n.length&&(t.i=null,t.g.set(hs(t,e),Tp(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function hs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function J2(t,e){e&&!t.j&&(gr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(L1(this,r),$1(this,i,n))},t)),t.j=e}var Z2=class{constructor(t,e){this.g=t,this.map=e}};function F1(t){this.l=t||eN,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ka&&U.g.Ka()&&U.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eN=10;function b1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function U1(t){return t.h?1:t.g?t.g.size:0}function Ud(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function $p(t,e){t.g?t.g.add(e):t.h=e}function j1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}F1.prototype.cancel=function(){if(this.i=z1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function z1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Tp(t.i)}var tN=class{stringify(t){return U.JSON.stringify(t,void 0)}parse(t){return U.JSON.parse(t,void 0)}};function nN(){this.g=new tN}function rN(t,e,n){const r=n||"";try{O1(t,function(i,s){let o=i;na(i)&&(o=xp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function iN(t,e){const n=new Yu;if(U.Image){const r=new Image;r.onload=Ua(za,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ua(za,n,r,"TestLoadImage: error",!1,e),r.onabort=Ua(za,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ua(za,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function za(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function la(t){this.l=t.fc||null,this.j=t.ob||!1}Oe(la,Vp);la.prototype.g=function(){return new nc(this.l,this.j)};la.prototype.i=function(t){return function(){return t}}({});function nc(t,e){De.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Fp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(nc,De);var Fp=0;k=nc.prototype;k.open=function(t,e){if(this.readyState!=Fp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mo(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||U).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ua(this)),this.readyState=Fp};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mo(this)),this.g&&(this.readyState=3,Mo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;B1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function B1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ua(this):Mo(this),this.readyState==3&&B1(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,ua(this))};k.Ya=function(t){this.g&&(this.response=t,ua(this))};k.ka=function(){this.g&&ua(this)};function ua(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mo(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Mo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sN=U.JSON.parse;function ye(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=W1,this.L=this.M=!1}Oe(ye,De);var W1="",oN=/^https?$/i,aN=["POST","PUT"];k=ye.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Md.g(),this.C=this.u?ky(this.u):ky(Md),this.g.onreadystatechange=Ke(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Dy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=a1(aN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{K1(this),0<this.B&&((this.L=lN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ke(this.ua,this)):this.A=Op(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Dy(this,s)}};function lN(t){return Qi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof Ip<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function Dy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,H1(t),rc(t)}function H1(t){t.F||(t.F=!0,Fe(t,"complete"),Fe(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),rc(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rc(this,!0)),ye.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?q1(this):this.kb())};k.kb=function(){q1(this)};function q1(t){if(t.h&&typeof Ip<"u"&&(!t.C[1]||Yt(t)!=4||t.da()!=2)){if(t.v&&Yt(t)==4)Op(t.La,0,t);else if(Fe(t,"readystatechange"),Yt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(V1)[1]||null;!i&&U.self&&U.self.location&&(i=U.self.location.protocol.slice(0,-1)),r=!oN.test(i?i.toLowerCase():"")}n=r}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var s=2<Yt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",H1(t)}}finally{rc(t)}}}}function rc(t,e){if(t.g){K1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=r}catch{}}}function K1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function Yt(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sN(e)}};function Oy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case W1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function uN(t){const e={};t=(t.g&&2<=Yt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ko(t[r]))continue;var n=V2(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}R2(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function G1(t){let e="";return Cp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=G1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function As(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Q1(t){this.Ga=0,this.j=[],this.l=new Yu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=As("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=As("baseRetryDelayMs",5e3,t),this.hb=As("retryDelaySeedMs",1e4,t),this.eb=As("forwardChannelMaxRetries",2,t),this.xa=As("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new F1(t&&t.concurrentRequestLimit),this.Ja=new nN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=Q1.prototype;k.ra=8;k.H=1;function Up(t){if(Y1(t),t.H==3){var e=t.W++,n=Tn(t.I);if(se(n,"SID",t.K),se(n,"RID",e),se(n,"TYPE","terminate"),ca(t,n),e=new oa(t,t.l,e),e.L=2,e.v=tc(Tn(n)),n=!1,U.navigator&&U.navigator.sendBeacon)try{n=U.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=iE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),aa(e)}nE(t)}function ic(t){t.g&&(zp(t),t.g.cancel(),t.g=null)}function Y1(t){ic(t),t.u&&(U.clearTimeout(t.u),t.u=null),au(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function sc(t){if(!b1(t.i)&&!t.m){t.m=!0;var e=t.Na;No||_1(),Do||(No(),Do=!0),Np.add(e,t),t.C=0}}function cN(t,e){return U1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ia(Ke(t.Na,t,e),tE(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new oa(this,this.l,t);let s=this.s;if(this.U&&(s?(s=h1(s),d1(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=X1(this,i,e),n=Tn(this.I),se(n,"RID",t),se(n,"CVER",22),this.F&&se(n,"X-HTTP-Session-Id",this.F),ca(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(G1(s)))+"&"+e:this.o&&bp(n,this.o,s)),$p(this.i,i),this.bb&&se(n,"TYPE","init"),this.P?(se(n,"$req",e),se(n,"SID","null"),i.aa=!0,Fd(i,n,null)):Fd(i,n,e),this.H=2}}else this.H==3&&(t?Vy(this,t):this.j.length==0||b1(this.i)||Vy(this))};function Vy(t,e){var n;e?n=e.m:n=t.W++;const r=Tn(t.I);se(r,"SID",t.K),se(r,"RID",n),se(r,"AID",t.V),ca(t,r),t.o&&t.s&&bp(r,t.o,t.s),n=new oa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=X1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),$p(t.i,n),Fd(n,r,e)}function ca(t,e){t.na&&Cp(t.na,function(n,r){se(e,r,n)}),t.h&&O1({},function(n,r){se(e,r,n)})}function X1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ke(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{rN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function J1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;No||_1(),Do||(No(),Do=!0),Np.add(e,t),t.A=0}}function jp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ia(Ke(t.Ma,t),tE(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,Z1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ia(Ke(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,et(10),ic(this),Z1(this))};function zp(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function Z1(t){t.g=new oa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Tn(t.wa);se(e,"RID","rpc"),se(e,"SID",t.K),se(e,"AID",t.V),se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&se(e,"TO",t.qa),se(e,"TYPE","xmlhttp"),ca(t,e),t.o&&t.s&&bp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=tc(Tn(e)),n.s=null,n.S=!0,k1(n,t)}k.ib=function(){this.v!=null&&(this.v=null,ic(this),jp(this),et(19))};function au(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function eE(t,e){var n=null;if(t.g==e){au(t),zp(t),t.g=null;var r=2}else if(Ud(t.i,e))n=e.F,j1(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Xu(),Fe(r,new C1(r,n)),sc(t)}else J1(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&cN(t,e)||r==2&&jp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:kr(t,5);break;case 4:kr(t,10);break;case 3:kr(t,6);break;default:kr(t,2)}}}function tE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function kr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ke(t.pb,t);n||(n=new Mr("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||su(n,"https"),tc(n)),iN(n.toString(),r)}else et(2);t.H=0,t.h&&t.h.za(e),nE(t),Y1(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),et(2)):(this.l.info("Failed to ping google.com"),et(1))};function nE(t){if(t.H=0,t.ma=[],t.h){const e=z1(t.i);(e.length!=0||t.j.length!=0)&&(Sy(t.ma,e),Sy(t.ma,t.j),t.i.i.length=0,Tp(t.j),t.j.length=0),t.h.ya()}}function rE(t,e,n){var r=n instanceof Mr?Tn(n):new Mr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ou(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Mr(null);r&&su(s,r),e&&(s.g=e),i&&ou(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&se(r,n,e),se(r,"VER",t.ra),ca(t,r),r}function iE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ye(new la({ob:!0})):new ye(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function sE(){}k=sE.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function lu(){if(Qi&&!(10<=Number(T2)))throw Error("Environmental error: no available transport.")}lu.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){De.call(this),this.g=new Q1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ko(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ko(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ds(this)}Oe(_t,De);_t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;et(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=rE(t,null,t.Y),sc(t)};_t.prototype.close=function(){Up(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xp(t),t=n);e.j.push(new Z2(e.fb++,t)),e.H==3&&sc(e)};_t.prototype.N=function(){this.g.h=null,delete this.j,Up(this.g),delete this.g,_t.$.N.call(this)};function oE(t){Lp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(oE,Lp);function aE(){Mp.call(this),this.status=1}Oe(aE,Mp);function ds(t){this.g=t}Oe(ds,sE);ds.prototype.Ba=function(){Fe(this.g,"a")};ds.prototype.Aa=function(t){Fe(this.g,new oE(t))};ds.prototype.za=function(t){Fe(this.g,new aE)};ds.prototype.ya=function(){Fe(this.g,"b")};function hN(){this.blockSize=-1}function Bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Oe(Bt,hN);Bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function mh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Bt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)mh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){mh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){mh(this,r),i=0;break}}this.h=i,this.i+=e};Bt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var dN={};function Bp(t){return-128<=t&&128>t?w2(t,function(e){return new te([e|0],0>e?-1:0)}):new te([t|0],0>t?-1:0)}function Xt(t){if(isNaN(t)||!isFinite(t))return Oi;if(0>t)return Me(Xt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=jd;return new te(e,0)}function lE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Me(lE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Xt(Math.pow(e,8)),r=Oi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Xt(Math.pow(e,s)),r=r.R(s).add(Xt(o))):(r=r.R(n),r=r.add(Xt(o)))}return r}var jd=4294967296,Oi=Bp(0),zd=Bp(1),Ly=Bp(16777216);k=te.prototype;k.ea=function(){if(At(this))return-Me(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:jd+r)*e,e*=jd}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(pn(this))return"0";if(At(this))return"-"+Me(this).toString(t);for(var e=Xt(Math.pow(t,6)),n=this,r="";;){var i=cu(n,e).g;n=uu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,pn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function pn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function At(t){return t.h==-1}k.X=function(t){return t=uu(this,t),At(t)?-1:pn(t)?0:1};function Me(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new te(n,~t.h).add(zd)}k.abs=function(){return At(this)?Me(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new te(n,n[n.length-1]&-2147483648?-1:0)};function uu(t,e){return t.add(Me(e))}k.R=function(t){if(pn(this)||pn(t))return Oi;if(At(this))return At(t)?Me(this).R(Me(t)):Me(Me(this).R(t));if(At(t))return Me(this.R(Me(t)));if(0>this.X(Ly)&&0>t.X(Ly))return Xt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ba(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ba(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ba(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ba(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new te(n,0)};function Ba(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Rs(t,e){this.g=t,this.h=e}function cu(t,e){if(pn(e))throw Error("division by zero");if(pn(t))return new Rs(Oi,Oi);if(At(t))return e=cu(Me(t),e),new Rs(Me(e.g),Me(e.h));if(At(e))return e=cu(t,Me(e)),new Rs(Me(e.g),e.h);if(30<t.g.length){if(At(t)||At(e))throw Error("slowDivide_ only works with positive integers.");for(var n=zd,r=e;0>=r.X(t);)n=My(n),r=My(r);var i=ai(n,1),s=ai(r,1);for(r=ai(r,2),n=ai(n,2);!pn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ai(r,1),n=ai(n,1)}return e=uu(t,i.R(e)),new Rs(i,e)}for(i=Oi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Xt(n),o=s.R(e);At(o)||0<o.X(t);)n-=r,s=Xt(n),o=s.R(e);pn(s)&&(s=zd),i=i.add(s),t=uu(t,o)}return new Rs(i,t)}k.gb=function(t){return cu(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new te(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new te(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new te(n,this.h^t.h)};function My(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new te(n,t.h)}function ai(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new te(i,t.h)}lu.prototype.createWebChannel=lu.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;Ju.NO_ERROR=0;Ju.TIMEOUT=8;Ju.HTTP_ERROR=6;A1.COMPLETE="complete";R1.EventType=sa;sa.OPEN="a";sa.CLOSE="b";sa.ERROR="c";sa.MESSAGE="d";De.prototype.listen=De.prototype.O;ye.prototype.listenOnce=ye.prototype.P;ye.prototype.getLastError=ye.prototype.Sa;ye.prototype.getLastErrorCode=ye.prototype.Ia;ye.prototype.getStatus=ye.prototype.da;ye.prototype.getResponseJson=ye.prototype.Wa;ye.prototype.getResponseText=ye.prototype.ja;ye.prototype.send=ye.prototype.ha;ye.prototype.setWithCredentials=ye.prototype.Oa;Bt.prototype.digest=Bt.prototype.l;Bt.prototype.reset=Bt.prototype.reset;Bt.prototype.update=Bt.prototype.j;te.prototype.add=te.prototype.add;te.prototype.multiply=te.prototype.R;te.prototype.modulo=te.prototype.gb;te.prototype.compare=te.prototype.X;te.prototype.toNumber=te.prototype.ea;te.prototype.toString=te.prototype.toString;te.prototype.getBits=te.prototype.D;te.fromNumber=Xt;te.fromString=lE;var fN=function(){return new lu},pN=function(){return Xu()},gh=Ju,mN=A1,gN=ti,$y={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yN=la,Wa=R1,vN=ye,_N=Bt,Vi=te;const Fy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new cp("@firebase/firestore");function by(){return Kr.logLevel}function V(t,...e){if(Kr.logLevel<=X.DEBUG){const n=e.map(Wp);Kr.debug(`Firestore (${fs}): ${t}`,...n)}}function Sn(t,...e){if(Kr.logLevel<=X.ERROR){const n=e.map(Wp);Kr.error(`Firestore (${fs}): ${t}`,...n)}}function Yi(t,...e){if(Kr.logLevel<=X.WARN){const n=e.map(Wp);Kr.warn(`Firestore (${fs}): ${t}`,...n)}}function Wp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: `+t;throw Sn(e),new Error(e)}function le(t,e){t||b()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class EN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IN{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new uE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new Be(e)}}class TN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new TN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new CN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=RN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function Xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Re(0,0))}static max(){return new j(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $o.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $o?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends $o{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const PN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends $o{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return PN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(oe.fromString(e))}static fromName(e){return new L(oe.fromString(e).popFirst(5))}static empty(){return new L(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new oe(e.slice()))}}function kN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new lr(i,L.empty(),e)}function xN(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(j.min(),L.empty(),-1)}static max(){return new lr(j.max(),L.empty(),-1)}}function NN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ON{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==DN)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new P((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function da(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Hp.ae=-1;function oc(t){return t==null}function hu(t){return t===0&&1/t==-1/0}function VN(t){return typeof t=="number"&&Number.isInteger(t)&&!hu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ha(this.root,e,this.comparator,!0)}}class Ha{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Le.RED,this.left=i??Le.EMPTY,this.right=s??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Le(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Le(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jy(this.data.getIterator())}getIteratorFrom(e){return new jy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class jy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new Qe(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dE("Invalid base64 string: "+s):s}}(e);return new Je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const LN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(le(!!t),typeof t=="string"){let e=0;const n=LN.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gr(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kp(t){const e=t.mapValue.fields.__previous_value__;return qp(e)?Kp(e):e}function Fo(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class bo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qp(t)?4:$N(t)?9007199254740991:10:b()}function rn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fo(t).isEqual(Fo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ur(i.timestampValue),a=ur(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Gr(i.bytesValue).isEqual(Gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),a=we(s.doubleValue);return o===a?hu(o)===hu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Xi(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Uy(o)!==Uy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!rn(o[l],a[l])))return!1;return!0}(t,e);default:return b()}}function Uo(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function Ji(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=we(s.integerValue||s.doubleValue),l=we(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return zy(t.timestampValue,e.timestampValue);case 4:return zy(Fo(t),Fo(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Gr(s),l=Gr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=J(a[u],l[u]);if(c!==0)return c}return J(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=J(we(s.latitude),we(o.latitude));return a!==0?a:J(we(s.longitude),we(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ji(a[u],l[u]);if(c)return c}return J(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===qa.mapValue&&o===qa.mapValue)return 0;if(s===qa.mapValue)return 1;if(o===qa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=J(l[h],c[h]);if(d!==0)return d;const m=Ji(a[l[h]],u[c[h]]);if(m!==0)return m}return J(l.length,c.length)}(t.mapValue,e.mapValue);default:throw b()}}function zy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=ur(t),r=ur(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function Zi(t){return Bd(t)}function Bd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bd(n.fields[o])}`;return i+"}"}(t.mapValue):b()}function By(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wd(t){return!!t&&"integerValue"in t}function Gp(t){return!!t&&"arrayValue"in t}function Wy(t){return!!t&&"nullValue"in t}function Hy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ml(t){return!!t&&"mapValue"in t}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $N(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=eo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(eo(this.value))}}function fE(t){const e=[];return ps(t.fields,(n,r)=>{const i=new qe([n]);if(ml(r)){const s=fE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new He(e,0,j.min(),j.min(),j.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new He(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new He(e,2,n,j.min(),j.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new He(e,3,n,j.min(),j.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){this.position=e,this.inclusive=n}}function qy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Ji(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ky(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n="asc"){this.field=e,this.dir=n}}function FN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{}class Te extends pE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UN(e,n,r):n==="array-contains"?new BN(e,r):n==="in"?new WN(e,r):n==="not-in"?new HN(e,r):n==="array-contains-any"?new qN(e,r):new Te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jN(e,r):new zN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ji(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wt extends pE{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Wt(e,n)}matches(e){return mE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function mE(t){return t.op==="and"}function gE(t){return bN(t)&&mE(t)}function bN(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Hd(t){if(t instanceof Te)return t.field.canonicalString()+t.op.toString()+Zi(t.value);if(gE(t))return t.filters.map(e=>Hd(e)).join(",");{const e=t.filters.map(n=>Hd(n)).join(",");return`${t.op}(${e})`}}function yE(t,e){return t instanceof Te?function(r,i){return i instanceof Te&&r.op===i.op&&r.field.isEqual(i.field)&&rn(r.value,i.value)}(t,e):t instanceof Wt?function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&yE(o,i.filters[a]),!0):!1}(t,e):void b()}function vE(t){return t instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${Zi(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(vE).join(" ,")+"}"}(t):"Filter"}class UN extends Te{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class jN extends Te{constructor(e,n){super(e,"in",n),this.keys=_E("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zN extends Te{constructor(e,n){super(e,"not-in",n),this.keys=_E("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _E(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class BN extends Te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&Uo(n.arrayValue,this.value)}}class WN extends Te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Uo(this.value.arrayValue,n)}}class HN extends Te{constructor(e,n){super(e,"not-in",n)}matches(e){if(Uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Uo(this.value.arrayValue,n)}}class qN extends Te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Uo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Gy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KN(t,e,n,r,i,s,o)}function Qp(t){const e=B(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zi(r)).join(",")),e.he=n}return e.he}function Yp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ky(t.startAt,e.startAt)&&Ky(t.endAt,e.endAt)}function qd(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function GN(t,e,n,r,i,s,o,a){return new fa(t,e,n,r,i,s,o,a)}function Xp(t){return new fa(t)}function Qy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Jp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function EE(t){return t.collectionGroup!==null}function no(t){const e=B(t);if(e.Pe===null){e.Pe=[];const n=Jp(e),r=wE(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new to(n)),e.Pe.push(new to(qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new to(qe.keyField(),s))}}}return e.Pe}function Cn(t){const e=B(t);return e.Ie||(e.Ie=QN(e,no(t))),e.Ie}function QN(t,e){if(t.limitType==="F")return Gy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new to(i.field,s)});const n=t.endAt?new du(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new du(t.startAt.position,t.startAt.inclusive):null;return Gy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kd(t,e){e.getFirstInequalityField(),Jp(t);const n=t.filters.concat([e]);return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Gd(t,e,n){return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return Yp(Cn(t),Cn(e))&&t.limitType===e.limitType}function IE(t){return`${Qp(Cn(t))}|lt:${t.limitType}`}function Qd(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>vE(i)).join(", ")}]`),oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zi(i)).join(",")),`Target(${r})`}(Cn(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of no(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=qy(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,no(r),i)||r.endAt&&!function(o,a,l){const u=qy(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,no(r),i))}(t,e)}function YN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function TE(t){return(e,n)=>{let r=!1;for(const i of no(t)){const s=XN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XN(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ji(l,u):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=new pe(L.comparator);function An(){return JN}const SE=new pe(L.comparator);function Fs(...t){let e=SE;for(const n of t)e=e.insert(n.key,n);return e}function CE(t){let e=SE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xr(){return ro()}function AE(){return ro()}function ro(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZN=new pe(L.comparator),eD=new Qe(L.comparator);function q(...t){let e=eD;for(const n of t)e=e.add(n);return e}const tD=new Qe(J);function nD(){return tD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hu(e)?"-0":e}}function PE(t){return{integerValue:""+t}}function rD(t,e){return VN(e)?PE(e):RE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this._=void 0}}function iD(t,e,n){return t instanceof fu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qp(s)&&(s=Kp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof jo?xE(t,e):t instanceof zo?NE(t,e):function(i,s){const o=kE(i,s),a=Yy(o)+Yy(i.Ee);return Wd(o)&&Wd(i.Ee)?PE(a):RE(i.serializer,a)}(t,e)}function sD(t,e,n){return t instanceof jo?xE(t,e):t instanceof zo?NE(t,e):n}function kE(t,e){return t instanceof pu?function(r){return Wd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fu extends uc{}class jo extends uc{constructor(e){super(),this.elements=e}}function xE(t,e){const n=DE(e);for(const r of t.elements)n.some(i=>rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends uc{constructor(e){super(),this.elements=e}}function NE(t,e){let n=DE(e);for(const r of t.elements)n=n.filter(i=>!rn(i,r));return{arrayValue:{values:n}}}class pu extends uc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Yy(t){return we(t.integerValue||t.doubleValue)}function DE(t){return Gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function oD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof jo&&i instanceof jo||r instanceof zo&&i instanceof zo?Xi(r.elements,i.elements,rn):r instanceof pu&&i instanceof pu?rn(r.Ee,i.Ee):r instanceof fu&&i instanceof fu}(t.transform,e.transform)}class aD{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function OE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new LE(t.key,yn.none()):new pa(t.key,t.data,yn.none());{const n=t.data,r=Rt.empty();let i=new Qe(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ni(t.key,r,new Ft(i.toArray()),yn.none())}}function lD(t,e,n){t instanceof pa?function(i,s,o){const a=i.value.clone(),l=Jy(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ni?function(i,s,o){if(!gl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Jy(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(VE(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n,r){return t instanceof pa?function(s,o,a,l){if(!gl(s.precondition,o))return a;const u=s.value.clone(),c=Zy(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ni?function(s,o,a,l){if(!gl(s.precondition,o))return a;const u=Zy(s.fieldTransforms,l,o),c=o.data;return c.setAll(VE(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return gl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function uD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=kE(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function Xy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xi(r,i,(s,o)=>oD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pa extends cc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ni extends cc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function VE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jy(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sD(o,a,n[i]))}return r}function Zy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iD(s,o,e))}return r}class LE extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cD extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=AE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=OE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&Xi(this.mutations,e.mutations,(n,r)=>Xy(n,r))&&Xi(this.baseMutations,e.baseMutations,(n,r)=>Xy(n,r))}}class Zp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=function(){return ZN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,G;function pD(t){switch(t){default:return b();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function ME(t){if(t===void 0)return Sn("GRPC error has no .code"),T.UNKNOWN;switch(t){case _e.OK:return T.OK;case _e.CANCELLED:return T.CANCELLED;case _e.UNKNOWN:return T.UNKNOWN;case _e.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case _e.INTERNAL:return T.INTERNAL;case _e.UNAVAILABLE:return T.UNAVAILABLE;case _e.UNAUTHENTICATED:return T.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case _e.NOT_FOUND:return T.NOT_FOUND;case _e.ALREADY_EXISTS:return T.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return T.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case _e.ABORTED:return T.ABORTED;case _e.OUT_OF_RANGE:return T.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return T.UNIMPLEMENTED;case _e.DATA_LOSS:return T.DATA_LOSS;default:return b()}}(G=_e||(_e={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ka}static getOrCreateInstance(){return Ka===null&&(Ka=new em),Ka}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ka=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=new Vi([4294967295,4294967295],0);function ev(t){const e=mD().encode(t),n=new _N;return n.update(e),new Uint8Array(n.digest())}function tv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vi([n,r],0),new Vi([i,s],0)]}class tm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new bs(`Invalid padding: ${n}`);if(r<0)throw new bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new bs(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Vi.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Vi.fromNumber(r)));return i.compare(gD)===1&&(i=new Vi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=ev(e),[r,i]=tv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new tm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=ev(e),[r,i]=tv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ma.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(j.min(),i,new pe(J),An(),q())}}class ma{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ma(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class $E{constructor(e,n){this.targetId=e,this.ye=n}}class FE{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class nv{constructor(){this.we=0,this.Se=iv(),this.be=Je.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=q(),n=q(),r=q();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new ma(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=iv()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class yD{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=An(),this.Ue=rv(),this.We=new pe(J)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){var n;const r=e.targetId,i=e.ye.count,s=this.et(r);if(s){const o=s.target;if(qd(o))if(i===0){const a=new L(o.path);this.je(r,a,He.newNoDocument(a,j.min()))}else le(i===1);else{const a=this.tt(r);if(a!==i){const l=this.nt(e),u=l?this.rt(l,e,a):1;if(u!==0){this.Ze(r);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(r,c)}(n=em.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,m,y,v){var I,p,f,g,_,S;const R={localCacheCount:h,existenceFilterCount:d.count,databaseId:m.database,projectId:m.projectId},C=d.unchangedNames;return C&&(R.bloomFilter={applied:v===0,hashCount:(I=C==null?void 0:C.hashCount)!==null&&I!==void 0?I:0,bitmapLength:(g=(f=(p=C==null?void 0:C.bits)===null||p===void 0?void 0:p.bitmap)===null||f===void 0?void 0:f.length)!==null&&g!==void 0?g:0,padding:(S=(_=C==null?void 0:C.bits)===null||_===void 0?void 0:_.padding)!==null&&S!==void 0?S:0,mightContain:O=>{var Q;return(Q=y==null?void 0:y.mightContain(O))!==null&&Q!==void 0&&Q}}),R}(a,e.ye,this.Qe.it(),l,u))}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Gr(r).toUint8Array()}catch(l){if(l instanceof dE)return Yi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new tm(o,i,s)}catch(l){return Yi(l instanceof bs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}ot(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&qd(a.target)){const l=new L(a.target.path);this.$e.get(l)!==null||this._t(o,l)||this.je(o,l,He.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=q();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new hc(e,n,this.We,this.$e,r);return this.$e=An(),this.Ue=rv(),this.We=new pe(J),i}ze(e,n){if(!this.Ye(e))return;const r=this._t(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ut(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this._t(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ut(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new nv,this.Ke.set(e,n)),n}ut(e){let n=this.Ue.get(e);return n||(n=new Qe(J),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.ct(e)}Ze(e){this.Ke.set(e,new nv),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}_t(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function rv(){return new pe(L.comparator)}function iv(){return new pe(L.comparator)}const vD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_D=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wD=(()=>({and:"AND",or:"OR"}))();class ED{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yd(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ID(t,e){return mu(t,e.toTimestamp())}function nn(t){return le(!!t),j.fromTimestamp(function(n){const r=ur(n);return new Re(r.seconds,r.nanos)}(t))}function nm(t,e){return function(r){return new oe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function UE(t){const e=oe.fromString(t);return le(WE(e)),e}function Xd(t,e){return nm(t.databaseId,e.path)}function yh(t,e){const n=UE(e);if(n.get(1)!==t.databaseId.projectId)throw new D(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(jE(n))}function Jd(t,e){return nm(t.databaseId,e)}function TD(t){const e=UE(t);return e.length===4?oe.emptyPath():jE(e)}function Zd(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jE(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sv(t,e,n){return{name:Xd(t,e),fields:n.value.mapValue.fields}}function SD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(le(c===void 0||typeof c=="string"),Je.fromBase64String(c||"")):(le(c===void 0||c instanceof Uint8Array),Je.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:ME(u.code);return new D(c,u.message||"")}(o);n=new FE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yh(t,r.document.name),s=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):j.min(),a=new Rt({mapValue:{fields:r.document.fields}}),l=He.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new yl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yh(t,r.document),s=r.readTime?nn(r.readTime):j.min(),o=He.newNoDocument(i,s),a=r.removedTargetIds||[];n=new yl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yh(t,r.document),s=r.removedTargetIds||[];n=new yl([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fD(i,s),a=r.targetId;n=new $E(a,o)}}return n}function CD(t,e){let n;if(e instanceof pa)n={update:sv(t,e.key,e.value)};else if(e instanceof LE)n={delete:Xd(t,e.key)};else if(e instanceof ni)n={update:sv(t,e.key,e.data),updateMask:VD(e.fieldMask)};else{if(!(e instanceof cD))return b();n={verify:Xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof fu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pu)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ID(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(t,e.precondition)),n}function AD(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?nn(i.updateTime):nn(s);return o.isEqual(j.min())&&(o=nn(s)),new aD(o,i.transformResults||[])}(n,e))):[]}function RD(t,e){return{documents:[Jd(t,e.path)]}}function PD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Jd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return BE(Wt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:li(h.field),direction:ND(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Yd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function kD(t){let e=TD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=zE(h);return d instanceof Wt&&gE(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new to(ui(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,oc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new du(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new du(m,d)}(n.endAt)),GN(e,i,o,s,a,"F",l,u)}function xD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ui(n.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ui(n.unaryFilter.field);return Te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ui(n.unaryFilter.field);return Te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ui(n.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(n){return Te.create(ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>zE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return b()}}(n.compositeFilter.op))}(t):b()}function ND(t){return vD[t]}function DD(t){return _D[t]}function OD(t){return wD[t]}function li(t){return{fieldPath:t.canonicalString()}}function ui(t){return qe.fromServerFormat(t.fieldPath)}function BE(t){return t instanceof Te?function(n){if(n.op==="=="){if(Hy(n.value))return{unaryFilter:{field:li(n.field),op:"IS_NAN"}};if(Wy(n.value))return{unaryFilter:{field:li(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hy(n.value))return{unaryFilter:{field:li(n.field),op:"IS_NOT_NAN"}};if(Wy(n.value))return{unaryFilter:{field:li(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:li(n.field),op:DD(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(i=>BE(i));return r.length===1?r[0]:{compositeFilter:{op:OD(n.op),filters:r}}}(t):b()}function VD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function WE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Je.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.lt=e}}function MD(t){const e=kD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.on=new FD}addToCollectionParentIndex(e,n){return this.on.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(lr.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class FD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new es(0)}static Nn(){return new es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&io(r.mutation,i,Ft.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=An();const o=ro(),a=function(){return ro()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ni)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),io(c.mutation,u,c.mutation.getFieldMask(),Re.now())):o.set(u.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new UD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ro();let i=new pe((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ft.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=AE();c.forEach(d=>{if(!s.has(d)){const m=OE(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):EE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):P.resolve(xr());let a=-1,l=s;return o.next(u=>P.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?P.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:CE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Fs();return this.indexManager.getCollectionParents(e,i).next(o=>P.forEach(o,a=>{const l=function(c,h){return new fa(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,He.newInvalidDocument(u)))});let o=Fs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&io(u.mutation,l,Ft.empty(),Re.now()),lc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nn(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:MD(i.bundledQuery),readTime:nn(i.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this.overlays=new pe(L.comparator),this.lr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return P.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Pt(e,n,s)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=xr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new pe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=xr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=xr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}Pt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dD(n,r));let s=this.lr.get(n);s===void 0&&(s=q(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.hr=new Qe(Pe.Pr),this.Ir=new Qe(Pe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Pe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new L(new oe([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new L(new oe([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=q();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return L.comparator(e.key,n.key)||J(e.gr,n.gr)}static Tr(e,n){return J(e.gr,n.gr)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Qe(Pe.Pr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(J);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),P.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new L(s),0);let a=new Qe(J);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),P.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return P.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Pe(n,0),i=this.yr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.vr=e,this.docs=function(){return new pe(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():He.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():He.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||NN(xN(c),r)<=0||(i.has(c.key)||lc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}Cr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qD(this)}getSize(e){return P.resolve(this.size)}}class qD extends bD{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.persistence=e,this.Fr=new ms(n=>Qp(n),Yp),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Mr=0,this.Or=new rm,this.targetCount=0,this.Nr=es.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),P.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new es(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.kn(n),P.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Hp(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new KD(this),this.indexManager=new $D,this.remoteDocumentCache=function(i){return new HD(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new LD(n),this.Kr=new zD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new WD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new QD(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class QD extends ON{constructor(e){super(),this.currentSequenceNumber=e}}class im{constructor(e){this.persistence=e,this.Gr=new rm,this.zr=null}static jr(e){return new im(e)}get Hr(){if(this.zr)return this.zr;throw b()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,r=>{const i=L.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(){this.Ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Wi(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(Qy(n))return P.resolve(null);let r=Cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gd(n,null,"F"),r=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.zi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,Gd(n,null,"F")):this.Hi(e,u,n,l)}))})))}Wi(e,n,r,i){return Qy(n)||i.isEqual(j.min())?this.Gi(e,n):this.$i.getDocuments(e,r).next(s=>{const o=this.zi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(by()<=X.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qd(n)),this.Hi(e,o,n,kN(i,-1)))})}zi(e,n){let r=new Qe(TE(e));return n.forEach((i,s)=>{lc(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return by()<=X.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Qd(n)),this.$i.getDocumentsMatchingQuery(e,n,lr.min())}Hi(e,n,r,i){return this.$i.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n,r,i){this.persistence=e,this.Ji=n,this.serializer=i,this.Yi=new pe(J),this.Zi=new ms(s=>Qp(s),Yp),this.Xi=new Map,this.es=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.ts(r)}ts(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jD(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Yi))}}function JD(t,e,n,r){return new XD(t,e,n,r)}async function HE(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ts(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ns:u,removedBatchIds:o,addedBatchIds:a}))})})}function ZD(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.es.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=P.resolve();return d.forEach(y=>{m=m.next(()=>c.getEntry(l,y)).next(v=>{const I=u.docVersions.get(y);le(I!==null),v.version.compareTo(I)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function qE(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function eO(t,e){const n=B(t),r=e.snapshotVersion;let i=n.Yi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.es.newChangeBuffer({trackRemovals:!0});i=n.Yi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Je.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,I,p){return v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,c)&&a.push(n.qr.updateTargetData(s,m))});let l=An(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(tO(s,o,e.documentUpdates).next(c=>{l=c.rs,u=c.ss})),!r.isEqual(j.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Yi=i,s))}function tO(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{rs:o,ss:i}})}function nO(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rO(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Yi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Yi=n.Yi.insert(r.targetId,r),n.Zi.set(e,r.targetId)),r})}async function ef(t,e,n){const r=B(t),i=r.Yi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!da(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Yi=r.Yi.remove(e),r.Zi.delete(i.target)}function ov(t,e,n){const r=B(t);let i=j.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=B(l),d=h.Zi.get(c);return d!==void 0?P.resolve(h.Yi.get(d)):h.qr.getTargetData(u,c)}(r,o,Cn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ji.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:q())).next(a=>(iO(r,YN(e),a),{documents:a,os:s})))}function iO(t,e,n){let r=t.Xi.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class av{constructor(){this.activeTargetIds=nD()}Ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}Is(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sO{constructor(){this.Js=new av,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Js.Ps(e),this.Ys[e]||"not-current"}updateQueryState(e,n,r){this.Ys[e]=n}removeLocalQueryTarget(e){this.Js.Is(e)}isLocalQueryTarget(e){return this.Js.activeTargetIds.has(e)}clearQueryState(e){delete this.Ys[e]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(e){return this.Js.activeTargetIds.has(e)}start(){return this.Js=new av,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{Zs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(e){this.io.push(e)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.io)e(0)}ro(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.io)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga=null;function vh(){return Ga===null?Ga=function(){return 268435456+Math.round(2147483648*Math.random())}():Ga++,"0x"+Ga.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e){this.oo=e.oo,this._o=e._o}ao(e){this.uo=e}co(e){this.lo=e}onMessage(e){this.ho=e}close(){this._o()}send(e){this.oo(e)}Po(){this.uo()}Io(e){this.lo(e)}To(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection";class uO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${i}/databases/${s}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Vo(){return!1}mo(n,r,i,s,o){const a=vh(),l=this.fo(n,r);V("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(u,s,o),this.yo(n,l,u,i).then(c=>(V("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Yi("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}wo(n,r,i,s,o,a){return this.mo(n,r,i,s,o)}po(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}fo(n,r){const i=aO[n];return`${this.Eo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}yo(e,n,r,i){const s=vh();return new Promise((o,a)=>{const l=new vN;l.setWithCredentials(!0),l.listenOnce(mN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case gh.NO_ERROR:const c=l.getResponseJson();V(ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case gh.TIMEOUT:V(ze,`RPC '${e}' ${s} timed out`),a(new D(T.DEADLINE_EXCEEDED,"Request time out"));break;case gh.HTTP_ERROR:const h=l.getStatus();if(V(ze,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(I){const p=I.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(p)>=0?p:T.UNKNOWN}(m.status);a(new D(y,m.message))}else a(new D(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(T.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{V(ze,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);V(ze,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}So(e,n,r){const i=vh(),s=[this.Eo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fN(),a=pN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new yN({})),this.po(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");V(ze,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const y=new lO({oo:I=>{m?V(ze,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(V(ze,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),V(ze,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},_o:()=>h.close()}),v=(I,p,f)=>{I.listen(p,g=>{try{f(g)}catch(_){setTimeout(()=>{throw _},0)}})};return v(h,Wa.EventType.OPEN,()=>{m||V(ze,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Wa.EventType.CLOSE,()=>{m||(m=!0,V(ze,`RPC '${e}' stream ${i} transport closed`),y.Io())}),v(h,Wa.EventType.ERROR,I=>{m||(m=!0,Yi(ze,`RPC '${e}' stream ${i} transport errored:`,I),y.Io(new D(T.UNAVAILABLE,"The operation could not be completed")))}),v(h,Wa.EventType.MESSAGE,I=>{var p;if(!m){const f=I.data[0];le(!!f);const g=f,_=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(_){V(ze,`RPC '${e}' stream ${i} received error:`,_);const S=_.status;let R=function(Q){const z=_e[Q];if(z!==void 0)return ME(z)}(S),C=_.message;R===void 0&&(R=T.INTERNAL,C="Unknown error status: "+S+" with message "+_.message),m=!0,y.Io(new D(R,C)),h.close()}else V(ze,`RPC '${e}' stream ${i} received:`,f),y.To(f)}}),v(a,gN.STAT_EVENT,I=>{I.stat===$y.PROXY?V(ze,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===$y.NOPROXY&&V(ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Po()},0),y}}function _h(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){return new ED(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(e){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),e())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Lo=r,this.ko=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new KE(e,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(e){this.Yo(),this.stream.send(e)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(e,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,e!==4?this.$o.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Xo(){}auth(){this.state=1;const e=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.qo===n&&this.t_(r,i)},r=>{e(()=>{const i=new D(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(i)})})}t_(e,n){const r=this.e_(this.qo);this.stream=this.r_(e,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(i=>{r(()=>this.n_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}e_(e){return n=>{this.si.enqueueAndForget(()=>this.qo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cO extends GE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}r_(e,n){return this.connection.So("Listen",e,n)}onMessage(e){this.$o.reset();const n=SD(this.serializer,e),r=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?nn(o.readTime):j.min()}(e);return this.listener.i_(n,r)}s_(e){const n={};n.database=Zd(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=qd(l)?{documents:RD(s,l)}:{query:PD(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bE(s,o.resumeToken);const u=Yd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=mu(s,o.snapshotVersion.toTimestamp());const u=Yd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=xD(this.serializer,e);r&&(n.labels=r),this.Jo(n)}o_(e){const n={};n.database=Zd(this.serializer),n.removeTarget=e,this.Jo(n)}}class hO extends GE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(e,n){return this.connection.So("Write",e,n)}onMessage(e){if(le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.__){this.$o.reset();const n=AD(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.c_(r,n)}return le(!e.writeResults||e.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const e={};e.database=Zd(this.serializer),this.Jo(e)}u_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CD(this.serializer,r))};this.Jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.P_=!1}I_(){if(this.P_)throw new D(T.FAILED_PRECONDITION,"The client has already been terminated.")}mo(e,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(T.UNKNOWN,i.toString())})}wo(e,n,r,i){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.wo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(T.UNKNOWN,s.toString())})}terminate(){this.P_=!0}}class fO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(e){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.V_("Offline")))}set(e){this.g_(),this.E_=0,e==="Online"&&(this.A_=!1),this.V_(e)}V_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}m_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(Sn(n),this.A_=!1):V("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=s,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{ri(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=B(l);u.w_.add(4),await ga(u),u.D_.set("Unknown"),u.w_.delete(4),await fc(u)}(this))})}),this.D_=new fO(r,i)}}async function fc(t){if(ri(t))for(const e of t.S_)await e(!0)}async function ga(t){for(const e of t.S_)await e(!1)}function QE(t,e){const n=B(t);n.y_.has(e.targetId)||(n.y_.set(e.targetId,e),lm(n)?am(n):gs(n).Wo()&&om(n,e))}function YE(t,e){const n=B(t),r=gs(n);n.y_.delete(e),r.Wo()&&XE(n,e),n.y_.size===0&&(r.Wo()?r.jo():ri(n)&&n.D_.set("Unknown"))}function om(t,e){if(t.v_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).s_(e)}function XE(t,e){t.v_.Le(e),gs(t).o_(e)}function am(t){t.v_=new yD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ct:e=>t.y_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.D_.R_()}function lm(t){return ri(t)&&!gs(t).Uo()&&t.y_.size>0}function ri(t){return B(t).w_.size===0}function JE(t){t.v_=void 0}async function mO(t){t.y_.forEach((e,n)=>{om(t,e)})}async function gO(t,e){JE(t),lm(t)?(t.D_.f_(e),am(t)):t.D_.set("Unknown")}async function yO(t,e,n){if(t.D_.set("Online"),e instanceof FE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.y_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.y_.delete(a),i.v_.removeTarget(a))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gu(t,r)}else if(e instanceof yl?t.v_.Ge(e):e instanceof $E?t.v_.Xe(e):t.v_.He(e),!n.isEqual(j.min()))try{const r=await qE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.v_.ot(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.y_.get(u);c&&s.y_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.y_.get(l);if(!c)return;s.y_.set(l,c.withResumeToken(Je.EMPTY_BYTE_STRING,c.snapshotVersion)),XE(s,l);const h=new qn(c.target,l,u,c.sequenceNumber);om(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await gu(t,r)}}async function gu(t,e,n){if(!da(e))throw e;t.w_.add(1),await ga(t),t.D_.set("Offline"),n||(n=()=>qE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.w_.delete(1),await fc(t)})}function ZE(t,e){return e().catch(n=>gu(t,n,e))}async function pc(t){const e=B(t),n=cr(e);let r=e.p_.length>0?e.p_[e.p_.length-1].batchId:-1;for(;vO(e);)try{const i=await nO(e.localStore,r);if(i===null){e.p_.length===0&&n.jo();break}r=i.batchId,_O(e,i)}catch(i){await gu(e,i)}eI(e)&&tI(e)}function vO(t){return ri(t)&&t.p_.length<10}function _O(t,e){t.p_.push(e);const n=cr(t);n.Wo()&&n.a_&&n.u_(e.mutations)}function eI(t){return ri(t)&&!cr(t).Uo()&&t.p_.length>0}function tI(t){cr(t).start()}async function wO(t){cr(t).h_()}async function EO(t){const e=cr(t);for(const n of t.p_)e.u_(n.mutations)}async function IO(t,e,n){const r=t.p_.shift(),i=Zp.from(r,e,n);await ZE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pc(t)}async function TO(t,e){e&&cr(t).a_&&await async function(r,i){if(function(o){return pD(o)&&o!==T.ABORTED}(i.code)){const s=r.p_.shift();cr(r).zo(),await ZE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await pc(r)}}(t,e),eI(t)&&tI(t)}async function uv(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=ri(n);n.w_.add(3),await ga(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.w_.delete(3),await fc(n)}async function SO(t,e){const n=B(t);e?(n.w_.delete(2),await fc(n)):e||(n.w_.add(2),await ga(n),n.D_.set("Unknown"))}function gs(t){return t.C_||(t.C_=function(n,r,i){const s=B(n);return s.I_(),new cO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ao:mO.bind(null,t),co:gO.bind(null,t),i_:yO.bind(null,t)}),t.S_.push(async e=>{e?(t.C_.zo(),lm(t)?am(t):t.D_.set("Unknown")):(await t.C_.stop(),JE(t))})),t.C_}function cr(t){return t.F_||(t.F_=function(n,r,i){const s=B(n);return s.I_(),new hO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ao:wO.bind(null,t),co:TO.bind(null,t),l_:EO.bind(null,t),c_:IO.bind(null,t)}),t.S_.push(async e=>{e?(t.F_.zo(),await pc(t)):(await t.F_.stop(),t.p_.length>0&&(V("RemoteStore",`Stopping write stream with ${t.p_.length} pending writes`),t.p_=[]))})),t.F_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new um(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cm(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),da(t))return new D(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Li(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.M_=new pe(L.comparator)}track(e){const n=e.doc.key,r=this.M_.get(n);r?e.type!==0&&r.type===3?this.M_=this.M_.insert(n,e):e.type===3&&r.type!==1?this.M_=this.M_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.M_=this.M_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.M_=this.M_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.M_=this.M_.remove(n):e.type===1&&r.type===2?this.M_=this.M_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.M_=this.M_.insert(n,{type:2,doc:e.doc}):b():this.M_=this.M_.insert(n,e)}x_(){const e=[];return this.M_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ts{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ts(e,n,Li.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(){this.O_=void 0,this.listeners=[]}}class AO{constructor(){this.queries=new ms(e=>IE(e),ac),this.onlineState="Unknown",this.N_=new Set}}async function nI(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new CO),i)try{s.O_=await n.onListen(r)}catch(o){const a=cm(o,`Initialization of query '${Qd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.B_(n.onlineState),s.O_&&e.L_(s.O_)&&hm(n)}async function rI(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function RO(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.L_(i)&&(r=!0);o.O_=i}}r&&hm(n)}function PO(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function hm(t){t.N_.forEach(e=>{e.next()})}class iI{constructor(e,n,r){this.query=e,this.k_=n,this.q_=!1,this.Q_=null,this.onlineState="Unknown",this.options=r||{}}L_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.q_?this.K_(e)&&(this.k_.next(e),n=!0):this.U_(e,this.onlineState)&&(this.W_(e),n=!0),this.Q_=e,n}onError(e){this.k_.error(e)}B_(e){this.onlineState=e;let n=!1;return this.Q_&&!this.q_&&this.U_(this.Q_,e)&&(this.W_(this.Q_),n=!0),n}U_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.G_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}K_(e){if(e.docChanges.length>0)return!0;const n=this.Q_&&this.Q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}W_(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.q_=!0,this.k_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.key=e}}class oI{constructor(e){this.key=e}}class kO{constructor(e,n){this.query=e,this.ea=n,this.ta=null,this.hasCachedResults=!1,this.current=!1,this.na=q(),this.mutatedKeys=q(),this.ra=TE(e),this.ia=new Li(this.ra)}get sa(){return this.ea}oa(e,n){const r=n?n._a:new cv,i=n?n.ia:this.ia;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=lc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;d&&m?d.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),I=!0):this.aa(d,m)||(r.track({type:2,doc:m}),I=!0,(l&&this.ra(m,l)>0||u&&this.ra(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),I=!0):d&&!m&&(r.track({type:1,doc:d}),I=!0,(l||u)&&(a=!0)),I&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ia:o,_a:r,ji:a,mutatedKeys:s}}aa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ia;this.ia=e.ia,this.mutatedKeys=e.mutatedKeys;const s=e._a.x_();s.sort((u,c)=>function(d,m){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return y(d)-y(m)}(u.type,c.type)||this.ra(u.doc,c.doc)),this.ua(r);const o=n?this.ca():[],a=this.na.size===0&&this.current?1:0,l=a!==this.ta;return this.ta=a,s.length!==0||l?{snapshot:new ts(this.query,e.ia,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),la:o}:{la:o}}B_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ia:this.ia,_a:new cv,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{la:[]}}ha(e){return!this.ea.has(e)&&!!this.ia.has(e)&&!this.ia.get(e).hasLocalMutations}ua(e){e&&(e.addedDocuments.forEach(n=>this.ea=this.ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ea=this.ea.delete(n)),this.current=e.current)}ca(){if(!this.current)return[];const e=this.na;this.na=q(),this.ia.forEach(r=>{this.ha(r.key)&&(this.na=this.na.add(r.key))});const n=[];return e.forEach(r=>{this.na.has(r)||n.push(new oI(r))}),this.na.forEach(r=>{e.has(r)||n.push(new sI(r))}),n}Pa(e){this.ea=e.os,this.na=q();const n=this.oa(e.documents);return this.applyChanges(n,!0)}Ia(){return ts.fromInitialDocuments(this.query,this.ia,this.mutatedKeys,this.ta===0,this.hasCachedResults)}}class xO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NO{constructor(e){this.key=e,this.Ta=!1}}class DO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new ms(a=>IE(a),ac),this.Aa=new Map,this.Ra=new Set,this.Va=new pe(L.comparator),this.ma=new Map,this.fa=new rm,this.ga={},this.pa=new Map,this.ya=es.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function OO(t,e){const n=BO(t);let r,i;const s=n.da.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ia();else{const o=await rO(n.localStore,Cn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await VO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&QE(n.remoteStore,o)}return i}async function VO(t,e,n,r,i){t.Sa=(h,d,m)=>async function(v,I,p,f){let g=I.view.oa(p);g.ji&&(g=await ov(v.localStore,I.query,!1).then(({documents:R})=>I.view.oa(R,g)));const _=f&&f.targetChanges.get(I.targetId),S=I.view.applyChanges(g,v.isPrimaryClient,_);return dv(v,I.targetId,S.la),S.snapshot}(t,h,d,m);const s=await ov(t.localStore,e,!0),o=new kO(e,s.os),a=o.oa(s.documents),l=ma.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);dv(t,n,u.la);const c=new xO(e,n,o);return t.da.set(e,c),t.Aa.has(n)?t.Aa.get(n).push(e):t.Aa.set(n,[e]),u.snapshot}async function LO(t,e){const n=B(t),r=n.da.get(e),i=n.Aa.get(r.targetId);if(i.length>1)return n.Aa.set(r.targetId,i.filter(s=>!ac(s,e))),void n.da.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ef(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),YE(n.remoteStore,r.targetId),tf(n,r.targetId)}).catch(ha)):(tf(n,r.targetId),await ef(n.localStore,r.targetId,!0))}async function MO(t,e,n){const r=WO(t);try{const i=await function(o,a){const l=B(o),u=Re.now(),c=a.reduce((m,y)=>m.add(y.key),q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=An(),v=q();return l.es.getEntries(m,c).next(I=>{y=I,y.forEach((p,f)=>{f.isValidDocument()||(v=v.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,y)).next(I=>{h=I;const p=[];for(const f of a){const g=uD(f,h.get(f.key).overlayedDocument);g!=null&&p.push(new ni(f.key,g,fE(g.value.mapValue),yn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(I=>{d=I;const p=I.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(m,I.batchId,p)})}).then(()=>({batchId:d.batchId,changes:CE(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.ga[o.currentUser.toKey()];u||(u=new pe(J)),u=u.insert(a,l),o.ga[o.currentUser.toKey()]=u}(r,i.batchId,n),await ya(r,i.changes),await pc(r.remoteStore)}catch(i){const s=cm(i,"Failed to persist write");n.reject(s)}}async function aI(t,e){const n=B(t);try{const r=await eO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ma.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ta=!0:i.modifiedDocuments.size>0?le(o.Ta):i.removedDocuments.size>0&&(le(o.Ta),o.Ta=!1))}),await ya(n,r,e)}catch(r){await ha(r)}}function hv(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.da.forEach((s,o)=>{const a=o.view.B_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=B(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.B_(a)&&(u=!0)}),u&&hm(l)}(r.eventManager,e),i.length&&r.Ea.i_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $O(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ma.get(e),s=i&&i.key;if(s){let o=new pe(L.comparator);o=o.insert(s,He.newNoDocument(s,j.min()));const a=q().add(s),l=new hc(j.min(),new Map,new pe(J),o,a);await aI(r,l),r.Va=r.Va.remove(s),r.ma.delete(e),dm(r)}else await ef(r.localStore,e,!1).then(()=>tf(r,e,n)).catch(ha)}async function FO(t,e){const n=B(t),r=e.batch.batchId;try{const i=await ZD(n.localStore,e);uI(n,r,null),lI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ya(n,i)}catch(i){await ha(i)}}async function bO(t,e,n){const r=B(t);try{const i=await function(o,a){const l=B(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(le(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);uI(r,e,n),lI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ya(r,i)}catch(i){await ha(i)}}function lI(t,e){(t.pa.get(e)||[]).forEach(n=>{n.resolve()}),t.pa.delete(e)}function uI(t,e,n){const r=B(t);let i=r.ga[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ga[r.currentUser.toKey()]=i}}function tf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Aa.get(e))t.da.delete(r),n&&t.Ea.ba(r,n);t.Aa.delete(e),t.isPrimaryClient&&t.fa.Rr(e).forEach(r=>{t.fa.containsKey(r)||cI(t,r)})}function cI(t,e){t.Ra.delete(e.path.canonicalString());const n=t.Va.get(e);n!==null&&(YE(t.remoteStore,n),t.Va=t.Va.remove(e),t.ma.delete(n),dm(t))}function dv(t,e,n){for(const r of n)r instanceof sI?(t.fa.addReference(r.key,e),UO(t,r)):r instanceof oI?(V("SyncEngine","Document no longer in limbo: "+r.key),t.fa.removeReference(r.key,e),t.fa.containsKey(r.key)||cI(t,r.key)):b()}function UO(t,e){const n=e.key,r=n.path.canonicalString();t.Va.get(n)||t.Ra.has(r)||(V("SyncEngine","New document in limbo: "+n),t.Ra.add(r),dm(t))}function dm(t){for(;t.Ra.size>0&&t.Va.size<t.maxConcurrentLimboResolutions;){const e=t.Ra.values().next().value;t.Ra.delete(e);const n=new L(oe.fromString(e)),r=t.ya.next();t.ma.set(r,new NO(n)),t.Va=t.Va.insert(n,r),QE(t.remoteStore,new qn(Cn(Xp(n.path)),r,"TargetPurposeLimboResolution",Hp.ae))}}async function ya(t,e,n){const r=B(t),i=[],s=[],o=[];r.da.isEmpty()||(r.da.forEach((a,l)=>{o.push(r.Sa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=sm.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ea.i_(i),await async function(l,u){const c=B(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(u,d=>P.forEach(d.ki,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>P.forEach(d.qi,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!da(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.Yi.get(d),y=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(y);c.Yi=c.Yi.insert(d,v)}}}(r.localStore,s))}async function jO(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await HE(n.localStore,e);n.currentUser=e,function(s,o){s.pa.forEach(a=>{a.forEach(l=>{l.reject(new D(T.CANCELLED,o))})}),s.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ya(n,r.ns)}}function zO(t,e){const n=B(t),r=n.ma.get(e);if(r&&r.Ta)return q().add(r.key);{let i=q();const s=n.Aa.get(e);if(!s)return i;for(const o of s){const a=n.da.get(o);i=i.unionWith(a.view.sa)}return i}}function BO(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$O.bind(null,e),e.Ea.i_=RO.bind(null,e.eventManager),e.Ea.ba=PO.bind(null,e.eventManager),e}function WO(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bO.bind(null,e),e}class fv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return JD(this.persistence,new YD,e.initialUser,this.serializer)}createPersistence(e){return new GD(im.jr,this.serializer)}createSharedClientState(e){return new sO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jO.bind(null,this.syncEngine),await SO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AO}()}createDatastore(e){const n=dc(e.databaseInfo.databaseId),r=function(s){return new uO(s)}(e.databaseInfo);return function(s,o,a,l){return new dO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new pO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>hv(this.syncEngine,n,0),function(){return lv.v()?new lv:new oO}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new DO(i,s,o,a,l,u);return c&&(h.wa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=B(n);V("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await ga(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ca(this.observer.next,e)}error(e){this.observer.error?this.Ca(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString())}Fa(){this.muted=!0}Ca(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=cE.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wh(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await HE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GO(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>uv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>uv(e.remoteStore,s)),t._onlineComponents=e}function KO(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function GO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await wh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!KO(n))throw n;Yi("Error using user provided cache. Falling back to memory cache: "+n),await wh(t,new fv)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await wh(t,new fv);return t._offlineComponents}async function dI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await pv(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await pv(t,new HO))),t._onlineComponents}function QO(t){return dI(t).then(e=>e.syncEngine)}async function fI(t){const e=await dI(t),n=e.eventManager;return n.onListen=OO.bind(null,e.syncEngine),n.onUnlisten=LO.bind(null,e.syncEngine),n}function YO(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new hI({next:d=>{o.enqueueAndForget(()=>rI(s,h));const m=d.docs.has(a);!m&&d.fromCache?u.reject(new D(T.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&l&&l.source==="server"?u.reject(new D(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new iI(Xp(a.path),c,{includeMetadataChanges:!0,G_:!0});return nI(s,h)}(await fI(t),t.asyncQueue,e,n,r)),r.promise}function XO(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new hI({next:d=>{o.enqueueAndForget(()=>rI(s,h)),d.fromCache&&l.source==="server"?u.reject(new D(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new iI(a,c,{includeMetadataChanges:!0,G_:!0});return nI(s,h)}(await fI(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e,n){if(!n)throw new D(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JO(t,e,n,r){if(e===!0&&r===!0)throw new D(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gv(t){if(!L.isDocumentKey(t))throw new D(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yv(t){if(L.isDocumentKey(t))throw new D(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Yr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mc(t);throw new D(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wN;switch(r.type){case"firstParty":return new SN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=mv.get(n);r&&(V("ComponentProvider","Removing Datastore"),mv.delete(n),r.terminate())}(this),Promise.resolve()}}function ZO(t,e,n,r={}){var i;const s=(t=Yr(t,gc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Be.MOCK_USER;else{a=OR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Be(u)}t._authCredentials=new EN(new uE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class sr extends ys{constructor(e,n,r){super(e,n,Xp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new L(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function eV(t,e,...n){if(t=nt(t),mI("collection","path",e),t instanceof gc){const r=oe.fromString(e,...n);return yv(r),new sr(t,null,r)}{if(!(t instanceof ht||t instanceof sr))throw new D(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return yv(r),new sr(t.firestore,null,r)}}function tV(t,e,...n){if(t=nt(t),arguments.length===1&&(e=cE.V()),mI("doc","path",e),t instanceof gc){const r=oe.fromString(e,...n);return gv(r),new ht(t,null,new L(r))}{if(!(t instanceof ht||t instanceof sr))throw new D(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return gv(r),new ht(t.firestore,t instanceof sr?t.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new KE(this,"async_queue_retry"),this.eu=()=>{const n=_h();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const e=_h();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.tu(),this.nu(e)}enterRestrictedMode(e){if(!this.ja){this.ja=!0,this.Za=e||!1;const n=_h();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(e){if(this.tu(),this.ja)return new Promise(()=>{});const n=new gn;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.za.push(e),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(e){if(!da(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(e){const n=this.Ga.then(()=>(this.Ya=!0,e().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Sn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(e,n,r){this.tu(),this.Xa.indexOf(e)>-1&&(n=0);const i=um.createAndSchedule(this,e,n,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&b()}verifyOperationInProgress(){}async su(){let e;do e=this.Ga,await e;while(e!==this.Ga)}ou(e){for(const n of this.Ha)if(n.timerId===e)return!0;return!1}_u(e){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.su()})}au(e){this.Xa.push(e)}iu(e){const n=this.Ha.indexOf(e);this.Ha.splice(n,1)}}class yc extends gc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new nV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gI(this),this._firestoreClient.terminate()}}function rV(t,e){const n=typeof t=="object"?t:Aw(),r=typeof t=="string"?t:e||"(default)",i=dp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=NR("firestore");s&&ZO(i,...s)}return i}function fm(t){return t._firestoreClient||gI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new MN(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,pI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new qO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(Je.fromBase64String(e))}catch(n){throw new D(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV=/^__.*__$/;class sV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new pa(e,this.data,n,this.fieldTransforms)}}function vI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class gm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.uu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(e){return new gm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.lu({path:r,Pu:!1});return i.Iu(e),i}Tu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.lu({path:r,Pu:!1});return i.uu(),i}Eu(e){return this.lu({path:void 0,Pu:!0})}du(e){return yu(e,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Iu(this.path.get(e))}Iu(e){if(e.length===0)throw this.du("Document fields must not be empty");if(vI(this.cu)&&iV.test(e))throw this.du('Document fields cannot begin and end with "__"')}}class oV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dc(e)}Vu(e,n,r,i=!1){return new gm({cu:e,methodName:n,Ru:r,path:qe.emptyPath(),Pu:!1,Au:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _I(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new oV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aV(t,e,n,r,i,s={}){const o=t.Vu(s.merge||s.mergeFields?2:0,e,n,i);II("Data must be an object, but it was:",o,r);const a=wI(r,o);let l,u;if(s.merge)l=new Ft(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=uV(e,h,n);if(!o.contains(d))throw new D(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hV(c,d)||c.push(d)}l=new Ft(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new sV(new Rt(a),l,u)}function lV(t,e,n,r=!1){return ym(n,t.Vu(r?4:3,e))}function ym(t,e){if(EI(t=nt(t)))return II("Unsupported field value:",e,t),wI(t,e);if(t instanceof yI)return function(r,i){if(!vI(i.cu))throw i.du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Pu&&e.cu!==4)throw e.du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ym(a,i.Eu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:mu(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mu(i.serializer,s)}}if(r instanceof mm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ns)return{bytesValue:bE(i.serializer,r._byteString)};if(r instanceof ht){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.du(`Unsupported field value: ${mc(r)}`)}(t,e)}function wI(t,e){const n={};return hE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,i)=>{const s=ym(i,e.hu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function EI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof mm||t instanceof ns||t instanceof ht||t instanceof yI)}function II(t,e,n){if(!EI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=mc(n);throw r==="an object"?e.du(t+" a custom object"):e.du(t+" "+r)}}function uV(t,e,n){if((e=nt(e))instanceof pm)return e._internalPath;if(typeof e=="string")return TI(t,e);throw yu("Field path arguments must be of type string or ",t,!1,void 0,n)}const cV=new RegExp("[~\\*/\\[\\]]");function TI(t,e,n){if(e.search(cV)>=0)throw yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pm(...e.split("."))._internalPath}catch{throw yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(T.INVALID_ARGUMENT,a+t+l)}function hV(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(CI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dV extends SI{data(){return super.data()}}function CI(t,e){return typeof e=="string"?TI(t,e):e instanceof pm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vm{}class pV extends vm{}function mV(t,e,...n){let r=[];e instanceof vm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof wm).length,a=s.filter(l=>l instanceof _m).length;if(o>1||o>0&&a>0)throw new D(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class _m extends pV{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _m(e,n,r)}_apply(e){const n=this._parse(e);return AI(e._query,n),new ys(e.firestore,e.converter,Kd(e._query,n))}_parse(e){const n=_I(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new D(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){wv(h,c);const m=[];for(const y of h)m.push(_v(l,s,y));d={arrayValue:{values:m}}}else d=_v(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||wv(h,c),d=lV(a,o,h,c==="in"||c==="not-in");return Te.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class wm extends vm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)AI(o,l),o=Kd(o,l)}(e._query,n),new ys(e.firestore,e.converter,Kd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function _v(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new D(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!EE(e)&&n.indexOf("/")!==-1)throw new D(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oe.fromString(n));if(!L.isDocumentKey(r))throw new D(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return By(t,new L(r))}if(n instanceof ht)return By(t,n._key);throw new D(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(n)}.`)}function wv(t,e){if(!Array.isArray(t)||t.length===0)throw new D(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AI(t,e){if(e.isInequality()){const r=Jp(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new D(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=wE(t);s!==null&&gV(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function gV(t,e,n){if(!n.isEqual(e))throw new D(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class yV{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new mm(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const n=ur(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);le(WE(r));const i=new bo(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Sn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RI extends SI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(CI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vl extends RI{data(e={}){return super.data(e)}}class _V{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Us(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vl(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new vl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Us(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new vl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Us(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:wV(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EV(t){t=Yr(t,ht);const e=Yr(t.firestore,yc);return YO(fm(e),t._key).then(n=>CV(e,t,n))}class PI extends yV{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function IV(t){t=Yr(t,ys);const e=Yr(t.firestore,yc),n=fm(e),r=new PI(e);return fV(t._query),XO(n,t._query).then(i=>new _V(e,r,t,i))}function TV(t,e,n){t=Yr(t,ht);const r=Yr(t.firestore,yc),i=vV(t.converter,e,n);return SV(r,[aV(_I(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,yn.none())])}function SV(t,e){return function(r,i){const s=new gn;return r.asyncQueue.enqueueAndForget(async()=>MO(await QO(r),i,s)),s.promise}(fm(t),e)}function CV(t,e,n){const r=n.docs.get(e._key),i=new PI(t);return new RI(t,i,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){fs=i})(us),Gi(new Br("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new yc(new IN(r.getProvider("auth-internal")),new AN(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ir(Fy,"4.1.1",e),ir(Fy,"4.1.1","esm2017")})();const AV={apiKey:"AIzaSyCjUWodvt6WH0KSEFYoZj-Rh0sY5dVLKVU",authDomain:"crwn-db-b41d8.firebaseapp.com",projectId:"crwn-db-b41d8",storageBucket:"crwn-db-b41d8.appspot.com",messagingSenderId:"435459847918",appId:"1:435459847918:web:8d77c0c39a45d735d9a5ff"};Cw(AV);const kI=new un;kI.setCustomParameters({prompt:"select_account"});const va=d2(),RV=()=>Ex(va,kI),xI=rV(),PV=async()=>{const t=eV(xI,"categories"),e=mV(t);return(await IV(e)).docs.reduce((i,s)=>{const{title:o,items:a}=s.data();return i[o.toLowerCase()]=a,i},{})},NI=async(t,e={})=>{if(!t)return;const n=tV(xI,"users",t.uid);if(!(await EV(n)).exists()){const{displayName:i,email:s}=t,o=new Date;try{await TV(n,{displayName:i,email:s,createdAt:o,...e})}catch(a){console.log("error creating the user",a.message)}}return n},kV=async(t,e)=>{if(!(!t||!e))return Qk(va,t,e)},xV=(t,e)=>{if(!(!t||!e))return Yk(va,t,e)},NV=async()=>await ex(va),DV=t=>Zk(va,t),OV=(t,e)=>t.find(r=>r.id===e.id)?t.map(r=>r.id===e.id?{...r,quantity:r.quantity+1}:r):[...t,{...e,quantity:1}],VV=(t,e,n)=>{const r=t.find(i=>i.id===e.id);if(r.quantity===1||n)return t.filter(i=>i.id!==e.id);if(r)return t.map(i=>i.id===e.id?{...i,quantity:i.quantity-1}:i)},LV=(t,e)=>t.filter(n=>n.id!==e.id),ii=E.createContext({isCartOpen:!1,setIsCartOpen:()=>{},cartItems:[],addItemToCart:()=>{},itemsInCart:0,removeItemFromCart:()=>{},clearItemFromCart:()=>{},cartTotal:0}),MV=({children:t})=>{const[e,n]=E.useState(!1),[r,i]=E.useState([]),[s,o]=E.useState(0),[a,l]=E.useState(0);E.useEffect(()=>{const m=r.reduce((y,v)=>y+v.quantity,0);o(m)},[r]),E.useEffect(()=>{const m=r.reduce((y,v)=>y+v.price*v.quantity,0);l(m)},[r]);const d={isCartOpen:e,setIsCartOpen:n,cartItems:r,addItemToCart:m=>{i(OV(r,m))},itemsInCart:s,removeItemFromCart:(m,y)=>{i(VV(r,m,y))},clearItemFromCart:m=>{i(LV(r,m))},cartTotal:a};return w.jsx(ii.Provider,{value:d,children:t})},$V=t=>E.createElement("svg",{id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",...t},E.createElement("g",null,E.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),E.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),E.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),E.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),E.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"}))),FV=H.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,bV=H($V)`
  width: 24px;
  height: 24px;
`,UV=H.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`,jV=()=>{const{isCartOpen:t,setIsCartOpen:e,itemsInCart:n}=E.useContext(ii);return w.jsxs(FV,{onClick:()=>e(!t),children:[w.jsx(bV,{}),w.jsx(UV,{children:n})]})},vc=H.button`
  font-family: inherit;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`,DI=H(vc)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`,Em=H(vc)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`,js={base:"base",google:"google-sign-in",inverted:"inverted"},zV=(t=js.base)=>({[js.base]:vc,[js.google]:DI,[js.inverted]:Em})[t],vu=({children:t,buttonType:e,...n})=>{const r=zV(e);return w.jsx(r,{...n,children:t})},BV=H.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${vc},
  ${DI},
  ${Em} {
    margin-top: auto;
  }
`,WV=H.span`
  font-size: 18px;
  margin: 50px auto;
`,HV=H.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`,qV=H.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`,KV=H.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  .name {
    font-size: 16px;
    margin-bottom: 4px;
  }
`,GV=({cartItem:t})=>{const{name:e,quantity:n,imageUrl:r,price:i}=t;return w.jsxs(qV,{children:[w.jsx("img",{src:r,alt:e}),w.jsxs(KV,{children:[w.jsx("span",{className:"name",children:e}),w.jsxs("span",{className:"price",children:[n," x $",i]})]})]})};function QV(t){const e=E.useRef(null),n=E.useRef(t);return E.useLayoutEffect(()=>{n.current=t}),E.useEffect(()=>{const r=i=>{const s=e.current;s&&!s.contains(i.target)&&n.current(i)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}},[]),e}const YV=()=>{const{cartItems:t,setIsCartOpen:e}=E.useContext(ii),n=tp(),r=QV(()=>e(!1)),i=()=>n("/checkout");return w.jsxs(BV,{ref:r,children:[w.jsx(HV,{children:t!=null&&t.length?t==null?void 0:t.map(s=>w.jsx(GV,{cartItem:s})):w.jsx(WV,{children:"Your cart is empty"})}),w.jsx(vu,{onClick:i,style:{marginTop:"auto",padding:"unset"},children:"Go to Checkout"})]})},OI=E.createContext({currentUser:null,setCurrentUser:()=>{}}),XV=({children:t})=>{const[e,n]=E.useState(null),r={currentUser:e,setCurrentUser:n};return E.useEffect(()=>DV(s=>{s&&NI(s),n(s)}),[]),w.jsx(OI.Provider,{value:r,children:t})},JV=()=>{const{currentUser:t}=E.useContext(OI),{isCartOpen:e}=E.useContext(ii),n=async()=>{await NV()};return w.jsxs(w.Fragment,{children:[w.jsxs(wR,{children:[w.jsx(ER,{to:"/",children:w.jsx(TR,{className:"logo"})}),w.jsxs(IR,{children:[w.jsx(Zc,{to:"/shop",children:"SHOP"}),t?w.jsx(Zc,{as:"span",to:"#",onClick:n,children:"SIGN OUT"}):w.jsx(Zc,{to:"/auth",children:"SIGN IN"}),w.jsx(jV,{})]}),e&&w.jsx(YV,{})]}),w.jsx(q0,{})]})},ZV=H.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`,nf="grey",eL="black",VI=fw`
  top: -14px;
  font-size: 12px;
  color: ${eL};
`,LI=H.label`
  color: ${nf};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;\\
  
  ${({shrink:t})=>t&&VI}

`,tL=H.input`
  background: none;
  background-color: white;
  color: ${nf};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${nf};
  margin: 25px 0;

  &:focus {
    outline: none;
    border-bottom: 1px solid #2196f3;
  }

  &:focus ~ ${LI} {
    ${VI};
  }
`,nL=H.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;function Si({label:t,id:e,...n}){var r;return w.jsxs(nL,{children:[w.jsx(tL,{...n}),t&&w.jsx(LI,{htmlFor:e,shrink:(r=n.value)==null?void 0:r.length,children:t})]})}const Ev={displayName:"",email:"",password:"",confirmPassword:""},rL=()=>{const[t,e]=E.useState(Ev),{displayName:n,email:r,password:i,confirmPassword:s}=t,o=u=>{const{name:c,value:h}=u.target;e({...t,[c]:h})},a=()=>e(Ev),l=async u=>{if(u.preventDefault(),i!==s){alert("Passwords must be matching");return}try{const{user:c}=await kV(r,i);await NI(c,{displayName:n}),a()}catch(c){c.code==="auth/email-already-in-use"&&alert("Cannot create user.  Email already in use"),console.log(c)}};return w.jsxs(ZV,{children:[w.jsx("h2",{children:"Don't have an account?"}),w.jsx("span",{children:"Sign up with your email and password"}),w.jsxs("form",{action:"#",onSubmit:l,children:[w.jsx(Si,{id:"displayName",label:"Display Name",name:"displayName",type:"text",value:n,onChange:o}),w.jsx(Si,{id:"email",label:"Email",type:"email",name:"email",value:r,onChange:o}),w.jsx(Si,{id:"password",label:"Password",name:"password",type:"password",value:i,onChange:o}),w.jsx(Si,{id:"confirmPassword",label:"Confirm Password",name:"confirmPassword",type:"password",value:s,onChange:o}),w.jsx(vu,{type:"submit",children:"Submit"})]})]})},iL=H.div`
  display: flex;
  justify-content: space-between;
`,sL=H.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`,Iv={email:"",password:""},oL=()=>{const[t,e]=E.useState(Iv),{email:n,password:r}=t,i=l=>{const{name:u,value:c}=l.target;e({...t,[u]:c})},s=()=>e(Iv),o=async l=>{if(l.preventDefault(),!r||!n){alert("Email or password cannot be empty");return}try{const{user:u}=await xV(n,r);s()}catch(u){console.log(u)}},a=async()=>{await RV()};return w.jsxs(sL,{children:[w.jsx("h2",{children:"Already have an account?"}),w.jsx("span",{children:"Sign in with your email and password"}),w.jsxs("form",{action:"#",onSubmit:o,children:[w.jsx(Si,{id:"email",label:"Email",type:"email",name:"email",value:n,onChange:i}),w.jsx(Si,{id:"password",label:"Password",name:"password",type:"password",value:r,onChange:i}),w.jsxs(iL,{children:[w.jsx(vu,{type:"submit",children:"Sign In"}),w.jsx(vu,{type:"button",buttonType:js.google,onClick:a,children:"Google Sign In"})]})]})]})},aL=H.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;
`,lL=()=>w.jsxs(aL,{children:[w.jsx(oL,{}),w.jsx(rL,{})]});const Im=E.createContext({categoriesMap:{},setCategoriesMap:()=>{}}),uL=({children:t})=>{const[e,n]=E.useState({});E.useEffect(()=>{(async()=>{const s=await PV();n(s)})()},[]);const r={categoriesMap:e,setCategoriesMap:n};return w.jsx(Im.Provider,{value:r,children:t})},MI=H.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`,$I=H(Em)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`,cL=H.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`,hL=H.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${MI} {
      opacity: 0.8;
    }

    ${$I} {
      opacity: 0.85;
      display: flex;
    }
  }
`,FI=({product:t})=>{const{imageUrl:e,name:n,price:r}=t,{addItemToCart:i}=E.useContext(ii),s=()=>i(t);return w.jsxs(hL,{children:[w.jsx(MI,{src:e,alt:n}),w.jsxs(cL,{children:[w.jsx("span",{className:"name",children:n}),w.jsx("span",{className:"price",children:r})]}),w.jsx($I,{onClick:s,children:"Add to cart"})]})},dL=H.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`,fL=({title:t,products:e})=>w.jsxs(dL,{children:[w.jsx("h2",{children:w.jsx(np,{to:t,className:"title",children:t.toUpperCase()})}),w.jsx("div",{className:"preview",children:e.filter((n,r)=>r<4).map(n=>w.jsx(FI,{product:n},n.id))})]}),pL=()=>{const{categoriesMap:t}=E.useContext(Im);return w.jsx(w.Fragment,{children:Object.keys(t).map(e=>{const n=t[e];return w.jsx(fL,{title:e,products:n},e)})})},mL=H.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`,gL=H.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  row-gap: 50px;
`,yL=()=>{const{category:t}=BC(),{categoriesMap:e}=E.useContext(Im),[n,r]=E.useState(e[t]);return E.useEffect(()=>{r(e[t])},[t,e]),w.jsxs(w.Fragment,{children:[w.jsx(mL,{children:t==null?void 0:t.toUpperCase()}),w.jsx(gL,{children:n&&n.map(i=>w.jsx(FI,{product:i},i.id))})]})},vL=()=>w.jsxs(K0,{children:[w.jsx(bn,{index:!0,element:w.jsx(pL,{})}),w.jsx(bn,{path:":category",element:w.jsx(yL,{})})]}),Ps=H.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`,_L=H.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`,wL=H.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`,EL=H.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`,IL=H.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`,TL=H.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .value {
      margin: 0 10px;
    }
  }

  .remove-button,
  .arrow {
    background: none;
    border: 0;
    font-size: 20px;
    cursor: pointer;
  }
`,SL=({cartItem:t})=>{const{removeItemFromCart:e,clearItemFromCart:n,addItemToCart:r}=E.useContext(ii),{imageUrl:i,name:s,price:o,quantity:a}=t,l=()=>e(t),u=()=>r(t),c=()=>n(t);return w.jsxs(TL,{children:[w.jsx(IL,{children:w.jsx("img",{src:i,alt:`${s}`})}),w.jsx("span",{className:"name",children:s}),w.jsxs("span",{className:"quantity",children:[w.jsx("button",{className:"arrow",onClick:l,children:"❮"}),w.jsx("span",{className:"value",children:a}),w.jsx("button",{className:"arrow",onClick:u,children:"❯"})]}),w.jsx("span",{className:"price",children:o}),w.jsx("button",{className:"remove-button",onClick:c,children:"✕"})]})},CL=()=>{const{cartItems:t,cartTotal:e}=E.useContext(ii);return w.jsxs(EL,{children:[w.jsxs(_L,{children:[w.jsx(Ps,{children:w.jsx("span",{children:"Product"})}),w.jsx(Ps,{children:w.jsx("span",{children:"Description"})}),w.jsx(Ps,{children:w.jsx("span",{children:"Quantity"})}),w.jsx(Ps,{children:w.jsx("span",{children:"Price"})}),w.jsx(Ps,{children:w.jsx("span",{children:"Remove"})})]}),t==null?void 0:t.map(n=>w.jsx(SL,{cartItem:n},n.id)),w.jsxs(wL,{children:["Total price: ",w.jsxs("strong",{children:["$",e]})]})]})};function AL(){return w.jsx(K0,{children:w.jsxs(bn,{path:"/",element:w.jsx(JV,{}),children:[w.jsx(bn,{index:!0,element:w.jsx(_R,{})}),w.jsx(bn,{path:"shop/*",element:w.jsx(vL,{})}),w.jsx(bn,{path:"auth",element:w.jsx(lL,{})}),w.jsx(bn,{path:"checkout",element:w.jsx(CL,{})})]})})}const RL=document.getElementById("root"),PL=Eh.createRoot(RL);PL.render(w.jsx($r.StrictMode,{children:w.jsx(lA,{children:w.jsx(XV,{children:w.jsx(uL,{children:w.jsx(MV,{children:w.jsx(AL,{})})})})})}));
