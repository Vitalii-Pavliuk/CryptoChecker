var Oo=Object.defineProperty;var No=(t,e,n)=>e in t?Oo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var zt=(t,e,n)=>No(t,typeof e!="symbol"?e+"":e,n);import{a as es,b as Do,r as D,u as ts,L as Et,d as ns,R as Mo,B as xo,N as Qt,e as Lo,f as Fe,h as Be}from"./vendor-B3Usr9ex.js";import{R as jo,L as Uo,X as Fo,Y as Bo,T as $o,a as qo}from"./charts-BXJzgirq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var xn={exports:{}},dt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr;function Ho(){if(zr)return dt;zr=1;var t=es(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(c,a,u){var f,g={},l=null,h=null;u!==void 0&&(l=""+u),a.key!==void 0&&(l=""+a.key),a.ref!==void 0&&(h=a.ref);for(f in a)r.call(a,f)&&!s.hasOwnProperty(f)&&(g[f]=a[f]);if(c&&c.defaultProps)for(f in a=c.defaultProps,a)g[f]===void 0&&(g[f]=a[f]);return{$$typeof:e,type:c,key:l,ref:h,props:g,_owner:i.current}}return dt.Fragment=n,dt.jsx=o,dt.jsxs=o,dt}var Qr;function Vo(){return Qr||(Qr=1,xn.exports=Ho()),xn.exports}var y=Vo(),Kt={},Kr;function Wo(){if(Kr)return Kt;Kr=1;var t=Do();return Kt.createRoot=t.createRoot,Kt.hydrateRoot=t.hydrateRoot,Kt}var zo=Wo(),Ln={exports:{}},jn={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr;function Qo(){if(Gr)return jn;Gr=1;var t=es();function e(a,u){return a===u&&(a!==0||1/a===1/u)||a!==a&&u!==u}var n=typeof Object.is=="function"?Object.is:e,r=t.useSyncExternalStore,i=t.useRef,s=t.useEffect,o=t.useMemo,c=t.useDebugValue;return jn.useSyncExternalStoreWithSelector=function(a,u,f,g,l){var h=i(null);if(h.current===null){var I={hasValue:!1,value:null};h.current=I}else I=h.current;h=o(function(){function C(m){if(!_){if(_=!0,k=m,m=g(m),l!==void 0&&I.hasValue){var S=I.value;if(l(S,m))return p=S}return p=m}if(S=p,n(k,m))return S;var A=g(m);return l!==void 0&&l(S,A)?(k=m,S):(k=m,p=A)}var _=!1,k,p,d=f===void 0?null:f;return[function(){return C(u())},d===null?void 0:function(){return C(d())}]},[u,f,g,l]);var R=r(a,h[0],h[1]);return s(function(){I.hasValue=!0,I.value=R},[R]),c(R),R},jn}var Jr;function Ko(){return Jr||(Jr=1,Ln.exports=Qo()),Ln.exports}var Go=Ko();function rs(t){t()}function Jo(){let t=null,e=null;return{clear(){t=null,e=null},notify(){rs(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Yr={notify(){},get:()=>[]};function Yo(t,e){let n,r=Yr,i=0,s=!1;function o(R){f();const C=r.subscribe(R);let _=!1;return()=>{_||(_=!0,C(),g())}}function c(){r.notify()}function a(){I.onStateChange&&I.onStateChange()}function u(){return s}function f(){i++,n||(n=t.subscribe(a),r=Jo())}function g(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Yr)}function l(){s||(s=!0,f())}function h(){s&&(s=!1,g())}const I={addNestedSub:o,notifyNestedSubs:c,handleChangeWrapper:a,isSubscribed:u,trySubscribe:l,tryUnsubscribe:h,getListeners:()=>r};return I}var Xo=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zo=Xo(),ea=()=>typeof navigator<"u"&&navigator.product==="ReactNative",ta=ea(),na=()=>Zo||ta?D.useLayoutEffect:D.useEffect,ra=na();function Xr(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function vt(t,e){if(Xr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!Xr(t[n[i]],e[n[i]]))return!1;return!0}var Un=Symbol.for("react-redux-context"),Fn=typeof globalThis<"u"?globalThis:{};function ia(){if(!D.createContext)return{};const t=Fn[Un]??(Fn[Un]=new Map);let e=t.get(D.createContext);return e||(e=D.createContext(null),t.set(D.createContext,e)),e}var Ne=ia();function sa(t){const{children:e,context:n,serverState:r,store:i}=t,s=D.useMemo(()=>{const a=Yo(i);return{store:i,subscription:a,getServerState:r?()=>r:void 0}},[i,r]),o=D.useMemo(()=>i.getState(),[i]);ra(()=>{const{subscription:a}=s;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==i.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[s,o]);const c=n||Ne;return D.createElement(c.Provider,{value:s},e)}var oa=sa;function wr(t=Ne){return function(){return D.useContext(t)}}var is=wr();function ss(t=Ne){const e=t===Ne?is:wr(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var os=ss();function aa(t=Ne){const e=t===Ne?os:ss(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Mt=aa(),ca=(t,e)=>t===e;function ua(t=Ne){const e=t===Ne?is:wr(t),n=(r,i={})=>{const{equalityFn:s=ca}=typeof i=="function"?{equalityFn:i}:i,o=e(),{store:c,subscription:a,getServerState:u}=o;D.useRef(!0);const f=D.useCallback({[r.name](l){return r(l)}}[r.name],[r]),g=Go.useSyncExternalStoreWithSelector(a.addNestedSub,c.getState,u||c.getState,f,s);return D.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var ct=ua(),la=rs;function J(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var da=typeof Symbol=="function"&&Symbol.observable||"@@observable",Zr=da,Bn=()=>Math.random().toString(36).substring(7).split("").join("."),fa={INIT:`@@redux/INIT${Bn()}`,REPLACE:`@@redux/REPLACE${Bn()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Bn()}`},cn=fa;function De(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function as(t,e,n){if(typeof t!="function")throw new Error(J(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(J(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(J(1));return n(as)(t,e)}let r=t,i=e,s=new Map,o=s,c=0,a=!1;function u(){o===s&&(o=new Map,s.forEach((C,_)=>{o.set(_,C)}))}function f(){if(a)throw new Error(J(3));return i}function g(C){if(typeof C!="function")throw new Error(J(4));if(a)throw new Error(J(5));let _=!0;u();const k=c++;return o.set(k,C),function(){if(_){if(a)throw new Error(J(6));_=!1,u(),o.delete(k),s=null}}}function l(C){if(!De(C))throw new Error(J(7));if(typeof C.type>"u")throw new Error(J(8));if(typeof C.type!="string")throw new Error(J(17));if(a)throw new Error(J(9));try{a=!0,i=r(i,C)}finally{a=!1}return(s=o).forEach(k=>{k()}),C}function h(C){if(typeof C!="function")throw new Error(J(10));r=C,l({type:cn.REPLACE})}function I(){const C=g;return{subscribe(_){if(typeof _!="object"||_===null)throw new Error(J(11));function k(){const d=_;d.next&&d.next(f())}return k(),{unsubscribe:C(k)}},[Zr](){return this}}}return l({type:cn.INIT}),{dispatch:l,subscribe:g,getState:f,replaceReducer:h,[Zr]:I}}function ha(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:cn.INIT})>"u")throw new Error(J(12));if(typeof n(void 0,{type:cn.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(J(13))})}function Ir(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{ha(n)}catch(s){i=s}return function(o={},c){if(i)throw i;let a=!1;const u={};for(let f=0;f<r.length;f++){const g=r[f],l=n[g],h=o[g],I=l(h,c);if(typeof I>"u")throw c&&c.type,new Error(J(14));u[g]=I,a=a||I!==h}return a=a||r.length!==Object.keys(o).length,a?u:o}}function un(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function pa(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(J(15))};const o={getState:i.getState,dispatch:(a,...u)=>s(a,...u)},c=t.map(a=>a(o));return s=un(...c)(i.dispatch),{...i,dispatch:s}}}function cs(t){return De(t)&&"type"in t&&typeof t.type=="string"}var Er=Symbol.for("immer-nothing"),_t=Symbol.for("immer-draftable"),te=Symbol.for("immer-state");function Y(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Ve=Object.getPrototypeOf;function pe(t){return!!t&&!!t[te]}function ce(t){var e;return t?us(t)||Array.isArray(t)||!!t[_t]||!!((e=t.constructor)!=null&&e[_t])||xt(t)||Lt(t):!1}var ma=Object.prototype.constructor.toString();function us(t){if(!t||typeof t!="object")return!1;const e=Ve(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===ma}function ga(t){return pe(t)||Y(15,t),t[te].base_}function St(t,e){We(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function We(t){const e=t[te];return e?e.type_:Array.isArray(t)?1:xt(t)?2:Lt(t)?3:0}function Ct(t,e){return We(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function $n(t,e){return We(t)===2?t.get(e):t[e]}function ls(t,e,n){const r=We(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function ya(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function xt(t){return t instanceof Map}function Lt(t){return t instanceof Set}function qe(t){return t.copy_||t.base_}function nr(t,e){if(xt(t))return new Map(t);if(Lt(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=us(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[te];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],c=r[o];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[o]={configurable:!0,writable:!0,enumerable:c.enumerable,value:t[o]})}return Object.create(Ve(t),r)}else{const r=Ve(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Sr(t,e=!1){return Cn(t)||pe(t)||!ce(t)||(We(t)>1&&(t.set=t.add=t.clear=t.delete=va),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Sr(r,!0))),t}function va(){Y(2)}function Cn(t){return Object.isFrozen(t)}var rr={};function ze(t){const e=rr[t];return e||Y(0,t),e}function _a(t,e){rr[t]||(rr[t]=e)}var Tt;function ds(){return Tt}function ba(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ei(t,e){e&&(ze("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function ir(t){sr(t),t.drafts_.forEach(wa),t.drafts_=null}function sr(t){t===Tt&&(Tt=t.parent_)}function ti(t){return Tt=ba(Tt,t)}function wa(t){const e=t[te];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function ni(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[te].modified_&&(ir(e),Y(4)),ce(t)&&(t=ln(e,t),e.parent_||dn(e,t)),e.patches_&&ze("Patches").generateReplacementPatches_(n[te].base_,t,e.patches_,e.inversePatches_)):t=ln(e,n,[]),ir(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==Er?t:void 0}function ln(t,e,n){if(Cn(e))return e;const r=e[te];if(!r)return St(e,(i,s)=>ri(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return dn(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),St(s,(c,a)=>ri(t,r,i,c,a,n,o)),dn(t,i,!1),n&&t.patches_&&ze("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function ri(t,e,n,r,i,s,o){if(pe(i)){const c=s&&e&&e.type_!==3&&!Ct(e.assigned_,r)?s.concat(r):void 0,a=ln(t,i,c);if(ls(n,r,a),pe(a))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(ce(i)&&!Cn(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;ln(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&dn(t,i)}}function dn(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Sr(e,n)}function Ia(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:ds(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Cr;n&&(i=[r],s=Rt);const{revoke:o,proxy:c}=Proxy.revocable(i,s);return r.draft_=c,r.revoke_=o,c}var Cr={get(t,e){if(e===te)return t;const n=qe(t);if(!Ct(n,e))return Ea(t,n,e);const r=n[e];return t.finalized_||!ce(r)?r:r===qn(t.base_,e)?(Hn(t),t.copy_[e]=ar(r,t)):r},has(t,e){return e in qe(t)},ownKeys(t){return Reflect.ownKeys(qe(t))},set(t,e,n){const r=fs(qe(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=qn(qe(t),e),s=i==null?void 0:i[te];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(ya(n,i)&&(n!==void 0||Ct(t.base_,e)))return!0;Hn(t),or(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return qn(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Hn(t),or(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=qe(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Y(11)},getPrototypeOf(t){return Ve(t.base_)},setPrototypeOf(){Y(12)}},Rt={};St(Cr,(t,e)=>{Rt[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Rt.deleteProperty=function(t,e){return Rt.set.call(this,t,e,void 0)};Rt.set=function(t,e,n){return Cr.set.call(this,t[0],e,n,t[0])};function qn(t,e){const n=t[te];return(n?qe(n):t)[e]}function Ea(t,e,n){var i;const r=fs(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function fs(t,e){if(!(e in t))return;let n=Ve(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Ve(n)}}function or(t){t.modified_||(t.modified_=!0,t.parent_&&or(t.parent_))}function Hn(t){t.copy_||(t.copy_=nr(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var Sa=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(a=s,...u){return o.produce(a,f=>n.call(this,f,...u))}}typeof n!="function"&&Y(6),r!==void 0&&typeof r!="function"&&Y(7);let i;if(ce(e)){const s=ti(this),o=ar(e,void 0);let c=!0;try{i=n(o),c=!1}finally{c?ir(s):sr(s)}return ei(s,r),ni(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===Er&&(i=void 0),this.autoFreeze_&&Sr(i,!0),r){const s=[],o=[];ze("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Y(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...c)=>this.produceWithPatches(o,a=>e(a,...c));let r,i;return[this.produce(e,n,(o,c)=>{r=o,i=c}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){ce(t)||Y(8),pe(t)&&(t=Ca(t));const e=ti(this),n=ar(t,void 0);return n[te].isManual_=!0,sr(e),n}finishDraft(t,e){const n=t&&t[te];(!n||!n.isManual_)&&Y(9);const{scope_:r}=n;return ei(r,e),ni(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=ze("Patches").applyPatches_;return pe(t)?r(t,e):this.produce(t,i=>r(i,e))}};function ar(t,e){const n=xt(t)?ze("MapSet").proxyMap_(t,e):Lt(t)?ze("MapSet").proxySet_(t,e):Ia(t,e);return(e?e.scope_:ds()).drafts_.push(n),n}function Ca(t){return pe(t)||Y(10,t),hs(t)}function hs(t){if(!ce(t)||Cn(t))return t;const e=t[te];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=nr(t,e.scope_.immer_.useStrictShallowCopy_)}else n=nr(t,!0);return St(n,(r,i)=>{ls(n,r,hs(i))}),e&&(e.finalized_=!1),n}function Ta(){const e="replace",n="add",r="remove";function i(l,h,I,R){switch(l.type_){case 0:case 2:return o(l,h,I,R);case 1:return s(l,h,I,R);case 3:return c(l,h,I,R)}}function s(l,h,I,R){let{base_:C,assigned_:_}=l,k=l.copy_;k.length<C.length&&([C,k]=[k,C],[I,R]=[R,I]);for(let p=0;p<C.length;p++)if(_[p]&&k[p]!==C[p]){const d=h.concat([p]);I.push({op:e,path:d,value:g(k[p])}),R.push({op:e,path:d,value:g(C[p])})}for(let p=C.length;p<k.length;p++){const d=h.concat([p]);I.push({op:n,path:d,value:g(k[p])})}for(let p=k.length-1;C.length<=p;--p){const d=h.concat([p]);R.push({op:r,path:d})}}function o(l,h,I,R){const{base_:C,copy_:_}=l;St(l.assigned_,(k,p)=>{const d=$n(C,k),m=$n(_,k),S=p?Ct(C,k)?e:n:r;if(d===m&&S===e)return;const A=h.concat(k);I.push(S===r?{op:S,path:A}:{op:S,path:A,value:m}),R.push(S===n?{op:r,path:A}:S===r?{op:n,path:A,value:g(d)}:{op:e,path:A,value:g(d)})})}function c(l,h,I,R){let{base_:C,copy_:_}=l,k=0;C.forEach(p=>{if(!_.has(p)){const d=h.concat([k]);I.push({op:r,path:d,value:p}),R.unshift({op:n,path:d,value:p})}k++}),k=0,_.forEach(p=>{if(!C.has(p)){const d=h.concat([k]);I.push({op:n,path:d,value:p}),R.unshift({op:r,path:d,value:p})}k++})}function a(l,h,I,R){I.push({op:e,path:[],value:h===Er?void 0:h}),R.push({op:e,path:[],value:l})}function u(l,h){return h.forEach(I=>{const{path:R,op:C}=I;let _=l;for(let m=0;m<R.length-1;m++){const S=We(_);let A=R[m];typeof A!="string"&&typeof A!="number"&&(A=""+A),(S===0||S===1)&&(A==="__proto__"||A==="constructor")&&Y(19),typeof _=="function"&&A==="prototype"&&Y(19),_=$n(_,A),typeof _!="object"&&Y(18,R.join("/"))}const k=We(_),p=f(I.value),d=R[R.length-1];switch(C){case e:switch(k){case 2:return _.set(d,p);case 3:Y(16);default:return _[d]=p}case n:switch(k){case 1:return d==="-"?_.push(p):_.splice(d,0,p);case 2:return _.set(d,p);case 3:return _.add(p);default:return _[d]=p}case r:switch(k){case 1:return _.splice(d,1);case 2:return _.delete(d);case 3:return _.delete(I.value);default:return delete _[d]}default:Y(17,C)}}),l}function f(l){if(!ce(l))return l;if(Array.isArray(l))return l.map(f);if(xt(l))return new Map(Array.from(l.entries()).map(([I,R])=>[I,f(R)]));if(Lt(l))return new Set(Array.from(l).map(f));const h=Object.create(Ve(l));for(const I in l)h[I]=f(l[I]);return Ct(l,_t)&&(h[_t]=l[_t]),h}function g(l){return pe(l)?f(l):l}_a("Patches",{applyPatches_:u,generatePatches_:i,generateReplacementPatches_:a})}var ne=new Sa,jt=ne.produce,ps=ne.produceWithPatches.bind(ne);ne.setAutoFreeze.bind(ne);ne.setUseStrictShallowCopy.bind(ne);var ii=ne.applyPatches.bind(ne);ne.createDraft.bind(ne);ne.finishDraft.bind(ne);function Ra(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function Pa(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function Aa(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var si=t=>Array.isArray(t)?t:[t];function ka(t){const e=Array.isArray(t[0])?t[0]:t;return Aa(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function Oa(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var Na=class{constructor(t){this.value=t}deref(){return this.value}},Da=typeof WeakRef<"u"?WeakRef:Na,Ma=0,oi=1;function Gt(){return{s:Ma,v:void 0,o:null,p:null}}function fn(t,e={}){let n=Gt();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var g;let c=n;const{length:a}=arguments;for(let l=0,h=a;l<h;l++){const I=arguments[l];if(typeof I=="function"||typeof I=="object"&&I!==null){let R=c.o;R===null&&(c.o=R=new WeakMap);const C=R.get(I);C===void 0?(c=Gt(),R.set(I,c)):c=C}else{let R=c.p;R===null&&(c.p=R=new Map);const C=R.get(I);C===void 0?(c=Gt(),R.set(I,c)):c=C}}const u=c;let f;if(c.s===oi)f=c.v;else if(f=t.apply(null,arguments),s++,r){const l=((g=i==null?void 0:i.deref)==null?void 0:g.call(i))??i;l!=null&&r(l,f)&&(f=l,s!==0&&s--),i=typeof f=="object"&&f!==null||typeof f=="function"?new Da(f):f}return u.s=oi,u.v=f,f}return o.clearCache=()=>{n=Gt(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function xa(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,c,a={},u=i.pop();typeof u=="object"&&(a=u,u=i.pop()),Ra(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const f={...n,...a},{memoize:g,memoizeOptions:l=[],argsMemoize:h=fn,argsMemoizeOptions:I=[]}=f,R=si(l),C=si(I),_=ka(i),k=g(function(){return s++,u.apply(null,arguments)},...R),p=h(function(){o++;const m=Oa(_,arguments);return c=k.apply(null,m),c},...C);return Object.assign(p,{resultFunc:u,memoizedResultFunc:k,dependencies:_,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>c,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:g,argsMemoize:h})};return Object.assign(r,{withTypes:()=>r}),r}var Tr=xa(fn),La=Object.assign((t,e=Tr)=>{Pa(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,c,a)=>(o[n[a]]=c,o),{}))},{withTypes:()=>La});function ms(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var ja=ms(),Ua=ms,Fa=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?un:un.apply(null,arguments)},Ba=t=>t&&typeof t.match=="function";function oe(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(ae(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>cs(r)&&r.type===t,n}var gs=class mt extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,mt.prototype)}static get[Symbol.species](){return mt}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new mt(...e[0].concat(this)):new mt(...e.concat(this))}};function ai(t){return ce(t)?jt(t,()=>{}):t}function Jt(t,e,n){return t.has(e)?t.get(e):t.set(e,n(e)).get(e)}function $a(t){return typeof t=="boolean"}var qa=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new gs;return n&&($a(n)?o.push(ja):o.push(Ua(n.extraArgument))),o},Tn="RTK_autoBatch",ft=()=>t=>({payload:t,meta:{[Tn]:!0}}),ci=t=>e=>{setTimeout(e,t)},Ha=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const c=new Set,a=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:ci(10):t.type==="callback"?t.queueNotification:ci(t.timeout),u=()=>{o=!1,s&&(s=!1,c.forEach(f=>f()))};return Object.assign({},r,{subscribe(f){const g=()=>i&&f(),l=r.subscribe(g);return c.add(f),()=>{l(),c.delete(f)}},dispatch(f){var g;try{return i=!((g=f==null?void 0:f.meta)!=null&&g[Tn]),s=!i,s&&(o||(o=!0,a(u))),r.dispatch(f)}finally{i=!0}}})},Va=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new gs(t);return r&&i.push(Ha(typeof r=="object"?r:void 0)),i};function Wa(t){const e=qa(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let c;if(typeof n=="function")c=n;else if(De(n))c=Ir(n);else throw new Error(ae(1));let a;typeof r=="function"?a=r(e):a=e();let u=un;i&&(u=Fa({trace:!1,...typeof i=="object"&&i}));const f=pa(...a),g=Va(f);let l=typeof o=="function"?o(g):g();const h=u(...l);return as(c,s,h)}function ys(t){const e={},n=[];let r;const i={addCase(s,o){const c=typeof s=="string"?s:s.type;if(!c)throw new Error(ae(28));if(c in e)throw new Error(ae(29));return e[c]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function za(t){return typeof t=="function"}function Qa(t,e){let[n,r,i]=ys(e),s;if(za(t))s=()=>ai(t());else{const c=ai(t);s=()=>c}function o(c=s(),a){let u=[n[a.type],...r.filter(({matcher:f})=>f(a)).map(({reducer:f})=>f)];return u.filter(f=>!!f).length===0&&(u=[i]),u.reduce((f,g)=>{if(g)if(pe(f)){const h=g(f,a);return h===void 0?f:h}else{if(ce(f))return jt(f,l=>g(l,a));{const l=g(f,a);if(l===void 0){if(f===null)return f;throw Error("A case reducer on a non-draftable value must not return undefined")}return l}}return f},c)}return o.getInitialState=s,o}var vs=(t,e)=>Ba(t)?t.match(e):t(e);function be(...t){return e=>t.some(n=>vs(n,e))}function bt(...t){return e=>t.every(n=>vs(n,e))}function Rn(t,e){if(!t||!t.meta)return!1;const n=typeof t.meta.requestId=="string",r=e.indexOf(t.meta.requestStatus)>-1;return n&&r}function Ut(t){return typeof t[0]=="function"&&"pending"in t[0]&&"fulfilled"in t[0]&&"rejected"in t[0]}function Rr(...t){return t.length===0?e=>Rn(e,["pending"]):Ut(t)?be(...t.map(e=>e.pending)):Rr()(t[0])}function st(...t){return t.length===0?e=>Rn(e,["rejected"]):Ut(t)?be(...t.map(e=>e.rejected)):st()(t[0])}function Pn(...t){const e=n=>n&&n.meta&&n.meta.rejectedWithValue;return t.length===0?bt(st(...t),e):Ut(t)?bt(st(...t),e):Pn()(t[0])}function Me(...t){return t.length===0?e=>Rn(e,["fulfilled"]):Ut(t)?be(...t.map(e=>e.fulfilled)):Me()(t[0])}function cr(...t){return t.length===0?e=>Rn(e,["pending","fulfilled","rejected"]):Ut(t)?be(...t.flatMap(e=>[e.pending,e.rejected,e.fulfilled])):cr()(t[0])}var Ka="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Pr=(t=21)=>{let e="",n=t;for(;n--;)e+=Ka[Math.random()*64|0];return e},Ga=["name","message","stack","code"],Vn=class{constructor(t,e){zt(this,"_type");this.payload=t,this.meta=e}},ui=class{constructor(t,e){zt(this,"_type");this.payload=t,this.meta=e}},Ja=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of Ga)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},li="External signal was aborted",di=(()=>{function t(e,n,r){const i=oe(e+"/fulfilled",(a,u,f,g)=>({payload:a,meta:{...g||{},arg:f,requestId:u,requestStatus:"fulfilled"}})),s=oe(e+"/pending",(a,u,f)=>({payload:void 0,meta:{...f||{},arg:u,requestId:a,requestStatus:"pending"}})),o=oe(e+"/rejected",(a,u,f,g,l)=>({payload:g,error:(r&&r.serializeError||Ja)(a||"Rejected"),meta:{...l||{},arg:f,requestId:u,rejectedWithValue:!!g,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"}}));function c(a,{signal:u}={}){return(f,g,l)=>{const h=r!=null&&r.idGenerator?r.idGenerator(a):Pr(),I=new AbortController;let R,C;function _(p){C=p,I.abort()}u&&(u.aborted?_(li):u.addEventListener("abort",()=>_(li),{once:!0}));const k=async function(){var m,S;let p;try{let A=(m=r==null?void 0:r.condition)==null?void 0:m.call(r,a,{getState:g,extra:l});if(Xa(A)&&(A=await A),A===!1||I.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const O=new Promise((w,v)=>{R=()=>{v({name:"AbortError",message:C||"Aborted"})},I.signal.addEventListener("abort",R)});f(s(h,a,(S=r==null?void 0:r.getPendingMeta)==null?void 0:S.call(r,{requestId:h,arg:a},{getState:g,extra:l}))),p=await Promise.race([O,Promise.resolve(n(a,{dispatch:f,getState:g,extra:l,requestId:h,signal:I.signal,abort:_,rejectWithValue:(w,v)=>new Vn(w,v),fulfillWithValue:(w,v)=>new ui(w,v)})).then(w=>{if(w instanceof Vn)throw w;return w instanceof ui?i(w.payload,h,a,w.meta):i(w,h,a)})])}catch(A){p=A instanceof Vn?o(null,h,a,A.payload,A.meta):o(A,h,a)}finally{R&&I.signal.removeEventListener("abort",R)}return r&&!r.dispatchConditionRejection&&o.match(p)&&p.meta.condition||f(p),p}();return Object.assign(k,{abort:_,requestId:h,arg:a,unwrap(){return k.then(Ya)}})}}return Object.assign(c,{pending:s,rejected:o,fulfilled:i,settled:be(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function Ya(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function Xa(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Za=Symbol.for("rtk-slice-createasyncthunk");function ec(t,e){return`${t}/${e}`}function tc({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[Za];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(ae(11));const c=(typeof i.reducers=="function"?i.reducers(rc()):i.reducers)||{},a=Object.keys(c),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(d,m){const S=typeof d=="string"?d:d.type;if(!S)throw new Error(ae(12));if(S in u.sliceCaseReducersByType)throw new Error(ae(13));return u.sliceCaseReducersByType[S]=m,f},addMatcher(d,m){return u.sliceMatchers.push({matcher:d,reducer:m}),f},exposeAction(d,m){return u.actionCreators[d]=m,f},exposeCaseReducer(d,m){return u.sliceCaseReducersByName[d]=m,f}};a.forEach(d=>{const m=c[d],S={reducerName:d,type:ec(s,d),createNotation:typeof i.reducers=="function"};sc(m)?ac(S,m,f,e):ic(S,m,f)});function g(){const[d={},m=[],S=void 0]=typeof i.extraReducers=="function"?ys(i.extraReducers):[i.extraReducers],A={...d,...u.sliceCaseReducersByType};return Qa(i.initialState,O=>{for(let w in A)O.addCase(w,A[w]);for(let w of u.sliceMatchers)O.addMatcher(w.matcher,w.reducer);for(let w of m)O.addMatcher(w.matcher,w.reducer);S&&O.addDefaultCase(S)})}const l=d=>d,h=new Map,I=new WeakMap;let R;function C(d,m){return R||(R=g()),R(d,m)}function _(){return R||(R=g()),R.getInitialState()}function k(d,m=!1){function S(O){let w=O[d];return typeof w>"u"&&m&&(w=Jt(I,S,_)),w}function A(O=l){const w=Jt(h,m,()=>new WeakMap);return Jt(w,O,()=>{const v={};for(const[b,E]of Object.entries(i.selectors??{}))v[b]=nc(E,O,()=>Jt(I,O,_),m);return v})}return{reducerPath:d,getSelectors:A,get selectors(){return A(S)},selectSlice:S}}const p={name:s,reducer:C,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:_,...k(o),injectInto(d,{reducerPath:m,...S}={}){const A=m??o;return d.inject({reducerPath:A,reducer:C},S),{...p,...k(A,!0)}}};return p}}function nc(t,e,n,r){function i(s,...o){let c=e(s);return typeof c>"u"&&r&&(c=n()),t(c,...o)}return i.unwrapped=t,i}var Ce=tc();function rc(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function ic({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!oc(r))throw new Error(ae(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?oe(t,o):oe(t))}function sc(t){return t._reducerDefinitionType==="asyncThunk"}function oc(t){return t._reducerDefinitionType==="reducerWithPrepare"}function ac({type:t,reducerName:e},n,r,i){if(!i)throw new Error(ae(18));const{payloadCreator:s,fulfilled:o,pending:c,rejected:a,settled:u,options:f}=n,g=i(t,s,f);r.exposeAction(e,g),o&&r.addCase(g.fulfilled,o),c&&r.addCase(g.pending,c),a&&r.addCase(g.rejected,a),u&&r.addMatcher(g.settled,u),r.exposeCaseReducer(e,{fulfilled:o||Yt,pending:c||Yt,rejected:a||Yt,settled:u||Yt})}function Yt(){}function ae(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const cc={user:null,isAuthenticated:!1,isLoading:!1,error:null},_s=Ce({name:"auth",initialState:cc,reducers:{setUser(t,e){t.user=e.payload,t.isAuthenticated=!0,t.isLoading=!1,t.error=null},clearUser(t){t.user=null,t.isAuthenticated=!1,t.isLoading=!1,t.error=null},setLoading(t,e){t.isLoading=e.payload},setError(t,e){t.error=e.payload,t.isLoading=!1}}}),{setUser:Ar,clearUser:uc,setLoading:Ah,setError:kh}=_s.actions,lc=_s.reducer,dc=()=>{try{const t=localStorage.getItem("favoriteCoins");return t?JSON.parse(t):[]}catch(t){return console.error("Error loading favorites from localStorage:",t),[]}},fc={favoriteCoins:dc()},bs=Ce({name:"favorites",initialState:fc,reducers:{toggleFavorite:(t,e)=>{const n=e.payload,r=t.favoriteCoins.indexOf(n);r===-1?t.favoriteCoins.push(n):t.favoriteCoins.splice(r,1),localStorage.setItem("favoriteCoins",JSON.stringify(t.favoriteCoins))},setFavorites:(t,e)=>{t.favoriteCoins=e.payload,localStorage.setItem("favoriteCoins",JSON.stringify(t.favoriteCoins))}},extraReducers:()=>{}}),{toggleFavorite:ws,setFavorites:Oh}=bs.actions,hc=bs.reducer;var pc=class extends Error{constructor(e){super(e[0].message);zt(this,"issues");this.name="SchemaError",this.issues=e}},Is=(t=>(t.uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected",t))(Is||{});function fi(t){return{status:t,isUninitialized:t==="uninitialized",isLoading:t==="pending",isSuccess:t==="fulfilled",isError:t==="rejected"}}var hi=De;function Es(t,e){if(t===e||!(hi(t)&&hi(e)||Array.isArray(t)&&Array.isArray(e)))return e;const n=Object.keys(e),r=Object.keys(t);let i=n.length===r.length;const s=Array.isArray(e)?[]:{};for(const o of n)s[o]=Es(t[o],e[o]),i&&(i=t[o]===s[o]);return i?t:s}function et(t){let e=0;for(const n in t)e++;return e}var pi=t=>[].concat(...t);function mc(t){return new RegExp("(^|:)//").test(t)}function gc(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function hn(t){return t!=null}function yc(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var vc=t=>t.replace(/\/$/,""),_c=t=>t.replace(/^\//,"");function bc(t,e){if(!t)return e;if(!e)return t;if(mc(e))return e;const n=t.endsWith("/")||!e.startsWith("?")?"/":"";return t=vc(t),e=_c(e),`${t}${n}${e}`}function wc(t,e,n){return t.has(e)?t.get(e):t.set(e,n).get(e)}var mi=(...t)=>fetch(...t),Ic=t=>t.status>=200&&t.status<=299,Ec=t=>/ion\/(vnd\.api\+)?json/.test(t.get("content-type")||"");function gi(t){if(!De(t))return t;const e={...t};for(const[n,r]of Object.entries(e))r===void 0&&delete e[n];return e}function Sc({baseUrl:t,prepareHeaders:e=g=>g,fetchFn:n=mi,paramsSerializer:r,isJsonContentType:i=Ec,jsonContentType:s="application/json",jsonReplacer:o,timeout:c,responseHandler:a,validateStatus:u,...f}={}){return typeof fetch>"u"&&n===mi&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(l,h,I)=>{const{getState:R,extra:C,endpoint:_,forced:k,type:p}=h;let d,{url:m,headers:S=new Headers(f.headers),params:A=void 0,responseHandler:O=a??"json",validateStatus:w=u??Ic,timeout:v=c,...b}=typeof l=="string"?{url:l}:l,E,T=h.signal;v&&(E=new AbortController,h.signal.addEventListener("abort",E.abort),T=E.signal);let P={...f,signal:T,...b};S=new Headers(gi(S)),P.headers=await e(S,{getState:R,arg:l,extra:C,endpoint:_,forced:k,type:p,extraOptions:I})||S;const N=H=>typeof H=="object"&&(De(H)||Array.isArray(H)||typeof H.toJSON=="function");if(!P.headers.has("content-type")&&N(P.body)&&P.headers.set("content-type",s),N(P.body)&&i(P.headers)&&(P.body=JSON.stringify(P.body,o)),A){const H=~m.indexOf("?")?"&":"?",j=r?r(A):new URLSearchParams(gi(A));m+=H+j}m=bc(t,m);const M=new Request(m,P);d={request:new Request(m,P)};let U,x=!1,F=E&&setTimeout(()=>{x=!0,E.abort()},v);try{U=await n(M)}catch(H){return{error:{status:x?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(H)},meta:d}}finally{F&&clearTimeout(F),E==null||E.signal.removeEventListener("abort",E.abort)}const $=U.clone();d.response=$;let V,G="";try{let H;if(await Promise.all([g(U,O).then(j=>V=j,j=>H=j),$.text().then(j=>G=j,()=>{})]),H)throw H}catch(H){return{error:{status:"PARSING_ERROR",originalStatus:U.status,data:G,error:String(H)},meta:d}}return w(U,V)?{data:V,meta:d}:{error:{status:U.status,data:V},meta:d}};async function g(l,h){if(typeof h=="function")return h(l);if(h==="content-type"&&(h=i(l.headers)?"json":"text"),h==="json"){const I=await l.text();return I.length?JSON.parse(I):null}return l.text()}}var yi=class{constructor(t,e=void 0){this.value=t,this.meta=e}},kr=oe("__rtkq/focused"),Ss=oe("__rtkq/unfocused"),Or=oe("__rtkq/online"),Cs=oe("__rtkq/offline");function An(t){return t.type==="query"}function Cc(t){return t.type==="mutation"}function kn(t){return t.type==="infinitequery"}function pn(t){return An(t)||kn(t)}function Nr(t,e,n,r,i,s){return Tc(t)?t(e,n,r,i).filter(hn).map(ur).map(s):Array.isArray(t)?t.map(ur).map(s):[]}function Tc(t){return typeof t=="function"}function ur(t){return typeof t=="string"?{type:t}:t}function Rc(t,e){return t.catch(e)}var Pt=Symbol("forceQueryFn"),lr=t=>typeof t[Pt]=="function";function Pc({serializeQueryArgs:t,queryThunk:e,infiniteQueryThunk:n,mutationThunk:r,api:i,context:s}){const o=new Map,c=new Map,{unsubscribeQueryResult:a,removeMutationResult:u,updateSubscriptionOptions:f}=i.internalActions;return{buildInitiateQuery:C,buildInitiateInfiniteQuery:_,buildInitiateMutation:k,getRunningQueryThunk:g,getRunningMutationThunk:l,getRunningQueriesThunk:h,getRunningMutationsThunk:I};function g(p,d){return m=>{var O;const S=s.endpointDefinitions[p],A=t({queryArgs:d,endpointDefinition:S,endpointName:p});return(O=o.get(m))==null?void 0:O[A]}}function l(p,d){return m=>{var S;return(S=c.get(m))==null?void 0:S[d]}}function h(){return p=>Object.values(o.get(p)||{}).filter(hn)}function I(){return p=>Object.values(c.get(p)||{}).filter(hn)}function R(p,d){const m=(S,{subscribe:A=!0,forceRefetch:O,subscriptionOptions:w,[Pt]:v,...b}={})=>(E,T)=>{var Q;const P=t({queryArgs:S,endpointDefinition:d,endpointName:p});let N;const M={...b,type:"query",subscribe:A,forceRefetch:O,subscriptionOptions:w,endpointName:p,originalArgs:S,queryCacheKey:P,[Pt]:v};if(An(d))N=e(M);else{const{direction:q,initialPageParam:ee}=b;N=n({...M,direction:q,initialPageParam:ee})}const L=i.endpoints[p].select(S),U=E(N),x=L(T()),{requestId:F,abort:$}=U,V=x.requestId!==F,G=(Q=o.get(E))==null?void 0:Q[P],H=()=>L(T()),j=Object.assign(v?U.then(H):V&&!G?Promise.resolve(x):Promise.all([G,U]).then(H),{arg:S,requestId:F,subscriptionOptions:w,queryCacheKey:P,abort:$,async unwrap(){const q=await j;if(q.isError)throw q.error;return q.data},refetch:()=>E(m(S,{subscribe:!1,forceRefetch:!0})),unsubscribe(){A&&E(a({queryCacheKey:P,requestId:F}))},updateSubscriptionOptions(q){j.subscriptionOptions=q,E(f({endpointName:p,requestId:F,queryCacheKey:P,options:q}))}});if(!G&&!V&&!v){const q=wc(o,E,{});q[P]=j,j.then(()=>{delete q[P],et(q)||o.delete(E)})}return j};return m}function C(p,d){return R(p,d)}function _(p,d){return R(p,d)}function k(p){return(d,{track:m=!0,fixedCacheKey:S}={})=>(A,O)=>{const w=r({type:"mutation",endpointName:p,originalArgs:d,track:m,fixedCacheKey:S}),v=A(w),{requestId:b,abort:E,unwrap:T}=v,P=Rc(v.unwrap().then(U=>({data:U})),U=>({error:U})),N=()=>{A(u({requestId:b,fixedCacheKey:S}))},M=Object.assign(P,{arg:v.arg,requestId:b,abort:E,unwrap:T,reset:N}),L=c.get(A)||{};return c.set(A,L),L[b]=M,M.then(()=>{delete L[b],et(L)||c.delete(A)}),S&&(L[S]=M,M.then(()=>{L[S]===M&&(delete L[S],et(L)||c.delete(A))})),M}}}var Ts=class extends pc{constructor(t,e,n,r){super(t),this.value=e,this.schemaName=n,this._bqMeta=r}};async function $e(t,e,n,r){const i=await t["~standard"].validate(e);if(i.issues)throw new Ts(i.issues,e,n,r);return i.value}function Ac(t){return t}var ht=(t={})=>({...t,[Tn]:!0});function kc({reducerPath:t,baseQuery:e,context:{endpointDefinitions:n},serializeQueryArgs:r,api:i,assertTagType:s,selectors:o,onSchemaFailure:c,catchSchemaFailure:a,skipSchemaValidation:u}){const f=(b,E,T,P)=>(N,M)=>{const L=n[b],U=r({queryArgs:E,endpointDefinition:L,endpointName:b});if(N(i.internalActions.queryResultPatched({queryCacheKey:U,patches:T})),!P)return;const x=i.endpoints[b].select(E)(M()),F=Nr(L.providesTags,x.data,void 0,E,{},s);N(i.internalActions.updateProvidedBy([{queryCacheKey:U,providedTags:F}]))};function g(b,E,T=0){const P=[E,...b];return T&&P.length>T?P.slice(0,-1):P}function l(b,E,T=0){const P=[...b,E];return T&&P.length>T?P.slice(1):P}const h=(b,E,T,P=!0)=>(N,M)=>{const U=i.endpoints[b].select(E)(M()),x={patches:[],inversePatches:[],undo:()=>N(i.util.patchQueryData(b,E,x.inversePatches,P))};if(U.status==="uninitialized")return x;let F;if("data"in U)if(ce(U.data)){const[$,V,G]=ps(U.data,T);x.patches.push(...V),x.inversePatches.push(...G),F=$}else F=T(U.data),x.patches.push({op:"replace",path:[],value:F}),x.inversePatches.push({op:"replace",path:[],value:U.data});return x.patches.length===0||N(i.util.patchQueryData(b,E,x.patches,P)),x},I=(b,E,T)=>P=>P(i.endpoints[b].initiate(E,{subscribe:!1,forceRefetch:!0,[Pt]:()=>({data:T})})),R=(b,E)=>b.query&&b[E]?b[E]:Ac,C=async(b,{signal:E,abort:T,rejectWithValue:P,fulfillWithValue:N,dispatch:M,getState:L,extra:U})=>{var V,G;const x=n[b.endpointName],{metaSchema:F,skipSchemaValidation:$=u}=x;try{let H=R(x,"transformResponse");const j={signal:E,abort:T,dispatch:M,getState:L,extra:U,endpoint:b.endpointName,type:b.type,forced:b.type==="query"?_(b,L()):void 0,queryCacheKey:b.type==="query"?b.queryCacheKey:void 0},Q=b.type==="query"?b[Pt]:void 0;let q;const ee=async(K,z,X,Je)=>{if(z==null&&K.pages.length)return Promise.resolve({data:K});const le={queryArg:b.originalArgs,pageParam:z},Ye=await me(le),de=Je?g:l;return{data:{pages:de(K.pages,Ye.data,X),pageParams:de(K.pageParams,z,X)},meta:Ye.meta}};async function me(K){let z;const{extraOptions:X,argSchema:Je,rawResponseSchema:le,responseSchema:Ye}=x;if(Je&&!$&&(K=await $e(Je,K,"argSchema",{})),Q?z=Q():x.query?z=await e(x.query(K),j,X):z=await x.queryFn(K,j,X,lt=>e(lt,j,X)),typeof process<"u",z.error)throw new yi(z.error,z.meta);let{data:de}=z;le&&!$&&(de=await $e(le,z.data,"rawResponseSchema",z.meta));let Ee=await H(de,z.meta,K);return Ye&&!$&&(Ee=await $e(Ye,Ee,"responseSchema",z.meta)),{...z,data:Ee}}if(b.type==="query"&&"infiniteQueryOptions"in x){const{infiniteQueryOptions:K}=x,{maxPages:z=1/0}=K;let X;const Je={pages:[],pageParams:[]},le=(V=o.selectQueryEntry(L(),b.queryCacheKey))==null?void 0:V.data,de=_(b,L())&&!b.direction||!le?Je:le;if("direction"in b&&b.direction&&de.pages.length){const Ee=b.direction==="backward",Mn=(Ee?Rs:dr)(K,de,b.originalArgs);X=await ee(de,Mn,z,Ee)}else{const{initialPageParam:Ee=K.initialPageParam}=b,lt=(le==null?void 0:le.pageParams)??[],Mn=lt[0]??Ee,Ao=lt.length;X=await ee(de,Mn,z),Q&&(X={data:X.data.pages[0]});for(let Wr=1;Wr<Ao;Wr++){const ko=dr(K,X.data,b.originalArgs);X=await ee(X.data,ko,z)}}q=X}else q=await me(b.originalArgs);return F&&!$&&q.meta&&(q.meta=await $e(F,q.meta,"metaSchema",q.meta)),N(q.data,ht({fulfilledTimeStamp:Date.now(),baseQueryMeta:q.meta}))}catch(H){let j=H;if(j instanceof yi){let Q=R(x,"transformErrorResponse");const{rawErrorResponseSchema:q,errorResponseSchema:ee}=x;let{value:me,meta:K}=j;try{q&&!$&&(me=await $e(q,me,"rawErrorResponseSchema",K)),F&&!$&&(K=await $e(F,K,"metaSchema",K));let z=await Q(me,K,b.originalArgs);return ee&&!$&&(z=await $e(ee,z,"errorResponseSchema",K)),P(z,ht({baseQueryMeta:K}))}catch(z){j=z}}try{if(j instanceof Ts){const Q={endpoint:b.endpointName,arg:b.originalArgs,type:b.type,queryCacheKey:b.type==="query"?b.queryCacheKey:void 0};(G=x.onSchemaFailure)==null||G.call(x,j,Q),c==null||c(j,Q);const{catchSchemaFailure:q=a}=x;if(q)return P(q(j,Q),ht({baseQueryMeta:j._bqMeta}))}}catch(Q){j=Q}throw console.error(j),j}};function _(b,E){const T=o.selectQueryEntry(E,b.queryCacheKey),P=o.selectConfig(E).refetchOnMountOrArgChange,N=T==null?void 0:T.fulfilledTimeStamp,M=b.forceRefetch??(b.subscribe&&P);return M?M===!0||(Number(new Date)-Number(N))/1e3>=M:!1}const k=()=>di(`${t}/executeQuery`,C,{getPendingMeta({arg:E}){const T=n[E.endpointName];return ht({startedTimeStamp:Date.now(),...kn(T)?{direction:E.direction}:{}})},condition(E,{getState:T}){var $;const P=T(),N=o.selectQueryEntry(P,E.queryCacheKey),M=N==null?void 0:N.fulfilledTimeStamp,L=E.originalArgs,U=N==null?void 0:N.originalArgs,x=n[E.endpointName],F=E.direction;return lr(E)?!0:(N==null?void 0:N.status)==="pending"?!1:_(E,P)||An(x)&&(($=x==null?void 0:x.forceRefetch)!=null&&$.call(x,{currentArg:L,previousArg:U,endpointState:N,state:P}))?!0:!(M&&!F)},dispatchConditionRejection:!0}),p=k(),d=k(),m=di(`${t}/executeMutation`,C,{getPendingMeta(){return ht({startedTimeStamp:Date.now()})}}),S=b=>"force"in b,A=b=>"ifOlderThan"in b,O=(b,E,T)=>(P,N)=>{const M=S(T)&&T.force,L=A(T)&&T.ifOlderThan,U=(F=!0)=>{const $={forceRefetch:F,isPrefetch:!0};return i.endpoints[b].initiate(E,$)},x=i.endpoints[b].select(E)(N());if(M)P(U());else if(L){const F=x==null?void 0:x.fulfilledTimeStamp;if(!F){P(U());return}(Number(new Date)-Number(new Date(F)))/1e3>=L&&P(U())}else P(U(!1))};function w(b){return E=>{var T,P;return((P=(T=E==null?void 0:E.meta)==null?void 0:T.arg)==null?void 0:P.endpointName)===b}}function v(b,E){return{matchPending:bt(Rr(b),w(E)),matchFulfilled:bt(Me(b),w(E)),matchRejected:bt(st(b),w(E))}}return{queryThunk:p,mutationThunk:m,infiniteQueryThunk:d,prefetch:O,updateQueryData:h,upsertQueryData:I,patchQueryData:f,buildMatchThunkActions:v}}function dr(t,{pages:e,pageParams:n},r){const i=e.length-1;return t.getNextPageParam(e[i],e,n[i],n,r)}function Rs(t,{pages:e,pageParams:n},r){var i;return(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n,r)}function Ps(t,e,n,r){return Nr(n[t.meta.arg.endpointName][e],Me(t)?t.payload:void 0,Pn(t)?t.payload:void 0,t.meta.arg.originalArgs,"baseQueryMeta"in t.meta?t.meta.baseQueryMeta:void 0,r)}function Xt(t,e,n){const r=t[e];r&&n(r)}function At(t){return("arg"in t?t.arg.fixedCacheKey:t.fixedCacheKey)??t.requestId}function vi(t,e,n){const r=t[At(e)];r&&n(r)}var Zt={};function Oc({reducerPath:t,queryThunk:e,mutationThunk:n,serializeQueryArgs:r,context:{endpointDefinitions:i,apiUid:s,extractRehydrationInfo:o,hasRehydrationInfo:c},assertTagType:a,config:u}){const f=oe(`${t}/resetApiState`);function g(w,v,b,E){var T;w[T=v.queryCacheKey]??(w[T]={status:"uninitialized",endpointName:v.endpointName}),Xt(w,v.queryCacheKey,P=>{P.status="pending",P.requestId=b&&P.requestId?P.requestId:E.requestId,v.originalArgs!==void 0&&(P.originalArgs=v.originalArgs),P.startedTimeStamp=E.startedTimeStamp;const N=i[E.arg.endpointName];kn(N)&&"direction"in v&&(P.direction=v.direction)})}function l(w,v,b,E){Xt(w,v.arg.queryCacheKey,T=>{if(T.requestId!==v.requestId&&!E)return;const{merge:P}=i[v.arg.endpointName];if(T.status="fulfilled",P)if(T.data!==void 0){const{fulfilledTimeStamp:N,arg:M,baseQueryMeta:L,requestId:U}=v;let x=jt(T.data,F=>P(F,b,{arg:M.originalArgs,baseQueryMeta:L,fulfilledTimeStamp:N,requestId:U}));T.data=x}else T.data=b;else T.data=i[v.arg.endpointName].structuralSharing??!0?Es(pe(T.data)?ga(T.data):T.data,b):b;delete T.error,T.fulfilledTimeStamp=v.fulfilledTimeStamp})}const h=Ce({name:`${t}/queries`,initialState:Zt,reducers:{removeQueryResult:{reducer(w,{payload:{queryCacheKey:v}}){delete w[v]},prepare:ft()},cacheEntriesUpserted:{reducer(w,v){for(const b of v.payload){const{queryDescription:E,value:T}=b;g(w,E,!0,{arg:E,requestId:v.meta.requestId,startedTimeStamp:v.meta.timestamp}),l(w,{arg:E,requestId:v.meta.requestId,fulfilledTimeStamp:v.meta.timestamp,baseQueryMeta:{}},T,!0)}},prepare:w=>({payload:w.map(E=>{const{endpointName:T,arg:P,value:N}=E,M=i[T];return{queryDescription:{type:"query",endpointName:T,originalArgs:E.arg,queryCacheKey:r({queryArgs:P,endpointDefinition:M,endpointName:T})},value:N}}),meta:{[Tn]:!0,requestId:Pr(),timestamp:Date.now()}})},queryResultPatched:{reducer(w,{payload:{queryCacheKey:v,patches:b}}){Xt(w,v,E=>{E.data=ii(E.data,b.concat())})},prepare:ft()}},extraReducers(w){w.addCase(e.pending,(v,{meta:b,meta:{arg:E}})=>{const T=lr(E);g(v,E,T,b)}).addCase(e.fulfilled,(v,{meta:b,payload:E})=>{const T=lr(b.arg);l(v,b,E,T)}).addCase(e.rejected,(v,{meta:{condition:b,arg:E,requestId:T},error:P,payload:N})=>{Xt(v,E.queryCacheKey,M=>{if(!b){if(M.requestId!==T)return;M.status="rejected",M.error=N??P}})}).addMatcher(c,(v,b)=>{const{queries:E}=o(b);for(const[T,P]of Object.entries(E))((P==null?void 0:P.status)==="fulfilled"||(P==null?void 0:P.status)==="rejected")&&(v[T]=P)})}}),I=Ce({name:`${t}/mutations`,initialState:Zt,reducers:{removeMutationResult:{reducer(w,{payload:v}){const b=At(v);b in w&&delete w[b]},prepare:ft()}},extraReducers(w){w.addCase(n.pending,(v,{meta:b,meta:{requestId:E,arg:T,startedTimeStamp:P}})=>{T.track&&(v[At(b)]={requestId:E,status:"pending",endpointName:T.endpointName,startedTimeStamp:P})}).addCase(n.fulfilled,(v,{payload:b,meta:E})=>{E.arg.track&&vi(v,E,T=>{T.requestId===E.requestId&&(T.status="fulfilled",T.data=b,T.fulfilledTimeStamp=E.fulfilledTimeStamp)})}).addCase(n.rejected,(v,{payload:b,error:E,meta:T})=>{T.arg.track&&vi(v,T,P=>{P.requestId===T.requestId&&(P.status="rejected",P.error=b??E)})}).addMatcher(c,(v,b)=>{const{mutations:E}=o(b);for(const[T,P]of Object.entries(E))((P==null?void 0:P.status)==="fulfilled"||(P==null?void 0:P.status)==="rejected")&&T!==(P==null?void 0:P.requestId)&&(v[T]=P)})}}),R={tags:{},keys:{}},C=Ce({name:`${t}/invalidation`,initialState:R,reducers:{updateProvidedBy:{reducer(w,v){var b,E,T;for(const{queryCacheKey:P,providedTags:N}of v.payload){_(w,P);for(const{type:M,id:L}of N){const U=(E=(b=w.tags)[M]??(b[M]={}))[T=L||"__internal_without_id"]??(E[T]=[]);U.includes(P)||U.push(P)}w.keys[P]=N}},prepare:ft()}},extraReducers(w){w.addCase(h.actions.removeQueryResult,(v,{payload:{queryCacheKey:b}})=>{_(v,b)}).addMatcher(c,(v,b)=>{var T,P,N;const{provided:E}=o(b);for(const[M,L]of Object.entries(E))for(const[U,x]of Object.entries(L)){const F=(P=(T=v.tags)[M]??(T[M]={}))[N=U||"__internal_without_id"]??(P[N]=[]);for(const $ of x)F.includes($)||F.push($)}}).addMatcher(be(Me(e),Pn(e)),(v,b)=>{k(v,[b])}).addMatcher(h.actions.cacheEntriesUpserted.match,(v,b)=>{const E=b.payload.map(({queryDescription:T,value:P})=>({type:"UNKNOWN",payload:P,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:T}}));k(v,E)})}});function _(w,v){var E;const b=w.keys[v]??[];for(const T of b){const P=T.type,N=T.id??"__internal_without_id",M=(E=w.tags[P])==null?void 0:E[N];M&&(w.tags[P][N]=M.filter(L=>L!==v))}delete w.keys[v]}function k(w,v){const b=v.map(E=>{const T=Ps(E,"providesTags",i,a),{queryCacheKey:P}=E.meta.arg;return{queryCacheKey:P,providedTags:T}});C.caseReducers.updateProvidedBy(w,C.actions.updateProvidedBy(b))}const p=Ce({name:`${t}/subscriptions`,initialState:Zt,reducers:{updateSubscriptionOptions(w,v){},unsubscribeQueryResult(w,v){},internal_getRTKQSubscriptions(){}}}),d=Ce({name:`${t}/internalSubscriptions`,initialState:Zt,reducers:{subscriptionsUpdated:{reducer(w,v){return ii(w,v.payload)},prepare:ft()}}}),m=Ce({name:`${t}/config`,initialState:{online:yc(),focused:gc(),middlewareRegistered:!1,...u},reducers:{middlewareRegistered(w,{payload:v}){w.middlewareRegistered=w.middlewareRegistered==="conflict"||s!==v?"conflict":!0}},extraReducers:w=>{w.addCase(Or,v=>{v.online=!0}).addCase(Cs,v=>{v.online=!1}).addCase(kr,v=>{v.focused=!0}).addCase(Ss,v=>{v.focused=!1}).addMatcher(c,v=>({...v}))}}),S=Ir({queries:h.reducer,mutations:I.reducer,provided:C.reducer,subscriptions:d.reducer,config:m.reducer}),A=(w,v)=>S(f.match(v)?void 0:w,v),O={...m.actions,...h.actions,...p.actions,...d.actions,...I.actions,...C.actions,resetApiState:f};return{reducer:A,actions:O}}var re=Symbol.for("RTKQ/skipToken"),As={status:"uninitialized"},_i=jt(As,()=>{}),bi=jt(As,()=>{});function Nc({serializeQueryArgs:t,reducerPath:e,createSelector:n}){const r=p=>_i,i=p=>bi;return{buildQuerySelector:l,buildInfiniteQuerySelector:h,buildMutationSelector:I,selectInvalidatedBy:R,selectCachedArgsForQuery:C,selectApiState:o,selectQueries:c,selectMutations:u,selectQueryEntry:a,selectConfig:f};function s(p){return{...p,...fi(p.status)}}function o(p){return p[e]}function c(p){var d;return(d=o(p))==null?void 0:d.queries}function a(p,d){var m;return(m=c(p))==null?void 0:m[d]}function u(p){var d;return(d=o(p))==null?void 0:d.mutations}function f(p){var d;return(d=o(p))==null?void 0:d.config}function g(p,d,m){return S=>{if(S===re)return n(r,m);const A=t({queryArgs:S,endpointDefinition:d,endpointName:p});return n(w=>a(w,A)??_i,m)}}function l(p,d){return g(p,d,s)}function h(p,d){const{infiniteQueryOptions:m}=d;function S(A){const O={...A,...fi(A.status)},{isLoading:w,isError:v,direction:b}=O,E=b==="forward",T=b==="backward";return{...O,hasNextPage:_(m,O.data,O.originalArgs),hasPreviousPage:k(m,O.data,O.originalArgs),isFetchingNextPage:w&&E,isFetchingPreviousPage:w&&T,isFetchNextPageError:v&&E,isFetchPreviousPageError:v&&T}}return g(p,d,S)}function I(){return p=>{let d;return typeof p=="object"?d=At(p)??re:d=p,n(d===re?i:A=>{var O,w;return((w=(O=o(A))==null?void 0:O.mutations)==null?void 0:w[d])??bi},s)}}function R(p,d){const m=p[e],S=new Set;for(const A of d.filter(hn).map(ur)){const O=m.provided.tags[A.type];if(!O)continue;let w=(A.id!==void 0?O[A.id]:pi(Object.values(O)))??[];for(const v of w)S.add(v)}return pi(Array.from(S.values()).map(A=>{const O=m.queries[A];return O?[{queryCacheKey:A,endpointName:O.endpointName,originalArgs:O.originalArgs}]:[]}))}function C(p,d){return Object.values(c(p)).filter(m=>(m==null?void 0:m.endpointName)===d&&m.status!=="uninitialized").map(m=>m.originalArgs)}function _(p,d,m){return d?dr(p,d,m)!=null:!1}function k(p,d,m){return!d||!p.getPreviousPageParam?!1:Rs(p,d,m)!=null}}var Xe=WeakMap?new WeakMap:void 0,mn=({endpointName:t,queryArgs:e})=>{let n="";const r=Xe==null?void 0:Xe.get(e);if(typeof r=="string")n=r;else{const i=JSON.stringify(e,(s,o)=>(o=typeof o=="bigint"?{$bigint:o.toString()}:o,o=De(o)?Object.keys(o).sort().reduce((c,a)=>(c[a]=o[a],c),{}):o,o));De(e)&&(Xe==null||Xe.set(e,i)),n=i}return`${t}(${n})`};function ks(...t){return function(n){const r=fn(u=>{var f;return(f=n.extractRehydrationInfo)==null?void 0:f.call(n,u,{reducerPath:n.reducerPath??"api"})}),i={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:r,serializeQueryArgs(u){let f=mn;if("serializeQueryArgs"in u.endpointDefinition){const g=u.endpointDefinition.serializeQueryArgs;f=l=>{const h=g(l);return typeof h=="string"?h:mn({...l,queryArgs:h})}}else n.serializeQueryArgs&&(f=n.serializeQueryArgs);return f(u)},tagTypes:[...n.tagTypes||[]]},s={endpointDefinitions:{},batch(u){u()},apiUid:Pr(),extractRehydrationInfo:r,hasRehydrationInfo:fn(u=>r(u)!=null)},o={injectEndpoints:a,enhanceEndpoints({addTagTypes:u,endpoints:f}){if(u)for(const g of u)i.tagTypes.includes(g)||i.tagTypes.push(g);if(f)for(const[g,l]of Object.entries(f))typeof l=="function"?l(s.endpointDefinitions[g]):Object.assign(s.endpointDefinitions[g]||{},l);return o}},c=t.map(u=>u.init(o,i,s));function a(u){const f=u.endpoints({query:g=>({...g,type:"query"}),mutation:g=>({...g,type:"mutation"}),infiniteQuery:g=>({...g,type:"infinitequery"})});for(const[g,l]of Object.entries(f)){if(u.overrideExisting!==!0&&g in s.endpointDefinitions){if(u.overrideExisting==="throw")throw new Error(ae(39));continue}s.endpointDefinitions[g]=l;for(const h of c)h.injectEndpoint(g,l)}return o}return o.injectEndpoints({endpoints:n.endpoints})}}function ge(t,...e){return Object.assign(t,...e)}var Dc=({api:t,queryThunk:e,internalState:n})=>{const r=`${t.reducerPath}/subscriptions`;let i=null,s=null;const{updateSubscriptionOptions:o,unsubscribeQueryResult:c}=t.internalActions,a=(h,I)=>{var C,_,k;if(o.match(I)){const{queryCacheKey:p,requestId:d,options:m}=I.payload;return(C=h==null?void 0:h[p])!=null&&C[d]&&(h[p][d]=m),!0}if(c.match(I)){const{queryCacheKey:p,requestId:d}=I.payload;return h[p]&&delete h[p][d],!0}if(t.internalActions.removeQueryResult.match(I))return delete h[I.payload.queryCacheKey],!0;if(e.pending.match(I)){const{meta:{arg:p,requestId:d}}=I,m=h[_=p.queryCacheKey]??(h[_]={});return m[`${d}_running`]={},p.subscribe&&(m[d]=p.subscriptionOptions??m[d]??{}),!0}let R=!1;if(e.fulfilled.match(I)||e.rejected.match(I)){const p=h[I.meta.arg.queryCacheKey]||{},d=`${I.meta.requestId}_running`;R||(R=!!p[d]),delete p[d]}if(e.rejected.match(I)){const{meta:{condition:p,arg:d,requestId:m}}=I;if(p&&d.subscribe){const S=h[k=d.queryCacheKey]??(h[k]={});S[m]=d.subscriptionOptions??S[m]??{},R=!0}}return R},u=()=>n.currentSubscriptions,l={getSubscriptions:u,getSubscriptionCount:h=>{const R=u()[h]??{};return et(R)},isRequestSubscribed:(h,I)=>{var C;const R=u();return!!((C=R==null?void 0:R[h])!=null&&C[I])}};return(h,I)=>{if(i||(i=JSON.parse(JSON.stringify(n.currentSubscriptions))),t.util.resetApiState.match(h))return i=n.currentSubscriptions={},s=null,[!0,!1];if(t.internalActions.internal_getRTKQSubscriptions.match(h))return[!1,l];const R=a(n.currentSubscriptions,h);let C=!0;if(R){s||(s=setTimeout(()=>{const p=JSON.parse(JSON.stringify(n.currentSubscriptions)),[,d]=ps(i,()=>p);I.next(t.internalActions.subscriptionsUpdated(d)),i=p,s=null},500));const _=typeof h.type=="string"&&!!h.type.startsWith(r),k=e.rejected.match(h)&&h.meta.condition&&!!h.meta.arg.subscribe;C=!_&&!k}return[C,!1]}};function Mc(t){for(const e in t)return!1;return!0}var xc=2147483647/1e3-1,Lc=({reducerPath:t,api:e,queryThunk:n,context:r,internalState:i,selectors:{selectQueryEntry:s,selectConfig:o}})=>{const{removeQueryResult:c,unsubscribeQueryResult:a,cacheEntriesUpserted:u}=e.internalActions,f=be(a.match,n.fulfilled,n.rejected,u.match);function g(C){const _=i.currentSubscriptions[C];return!!_&&!Mc(_)}const l={},h=(C,_,k)=>{const p=_.getState(),d=o(p);if(f(C)){let m;if(u.match(C))m=C.payload.map(S=>S.queryDescription.queryCacheKey);else{const{queryCacheKey:S}=a.match(C)?C.payload:C.meta.arg;m=[S]}I(m,_,d)}if(e.util.resetApiState.match(C))for(const[m,S]of Object.entries(l))S&&clearTimeout(S),delete l[m];if(r.hasRehydrationInfo(C)){const{queries:m}=r.extractRehydrationInfo(C);I(Object.keys(m),_,d)}};function I(C,_,k){const p=_.getState();for(const d of C){const m=s(p,d);R(d,m==null?void 0:m.endpointName,_,k)}}function R(C,_,k,p){const d=r.endpointDefinitions[_],m=(d==null?void 0:d.keepUnusedDataFor)??p.keepUnusedDataFor;if(m===1/0)return;const S=Math.max(0,Math.min(m,xc));if(!g(C)){const A=l[C];A&&clearTimeout(A),l[C]=setTimeout(()=>{g(C)||k.dispatch(c({queryCacheKey:C})),delete l[C]},S*1e3)}}return h},wi=new Error("Promise never resolved before cacheEntryRemoved."),jc=({api:t,reducerPath:e,context:n,queryThunk:r,mutationThunk:i,internalState:s,selectors:{selectQueryEntry:o,selectApiState:c}})=>{const a=cr(r),u=cr(i),f=Me(r,i),g={};function l(_,k,p){const d=g[_];d!=null&&d.valueResolved&&(d.valueResolved({data:k,meta:p}),delete d.valueResolved)}function h(_){const k=g[_];k&&(delete g[_],k.cacheEntryRemoved())}const I=(_,k,p)=>{const d=R(_);function m(S,A,O,w){const v=o(p,A),b=o(k.getState(),A);!v&&b&&C(S,w,A,k,O)}if(r.pending.match(_))m(_.meta.arg.endpointName,d,_.meta.requestId,_.meta.arg.originalArgs);else if(t.internalActions.cacheEntriesUpserted.match(_))for(const{queryDescription:S,value:A}of _.payload){const{endpointName:O,originalArgs:w,queryCacheKey:v}=S;m(O,v,_.meta.requestId,w),l(v,A,{})}else if(i.pending.match(_))k.getState()[e].mutations[d]&&C(_.meta.arg.endpointName,_.meta.arg.originalArgs,d,k,_.meta.requestId);else if(f(_))l(d,_.payload,_.meta.baseQueryMeta);else if(t.internalActions.removeQueryResult.match(_)||t.internalActions.removeMutationResult.match(_))h(d);else if(t.util.resetApiState.match(_))for(const S of Object.keys(g))h(S)};function R(_){return a(_)?_.meta.arg.queryCacheKey:u(_)?_.meta.arg.fixedCacheKey??_.meta.requestId:t.internalActions.removeQueryResult.match(_)?_.payload.queryCacheKey:t.internalActions.removeMutationResult.match(_)?At(_.payload):""}function C(_,k,p,d,m){const S=n.endpointDefinitions[_],A=S==null?void 0:S.onCacheEntryAdded;if(!A)return;const O={},w=new Promise(N=>{O.cacheEntryRemoved=N}),v=Promise.race([new Promise(N=>{O.valueResolved=N}),w.then(()=>{throw wi})]);v.catch(()=>{}),g[p]=O;const b=t.endpoints[_].select(pn(S)?k:p),E=d.dispatch((N,M,L)=>L),T={...d,getCacheEntry:()=>b(d.getState()),requestId:m,extra:E,updateCachedData:pn(S)?N=>d.dispatch(t.util.updateQueryData(_,k,N)):void 0,cacheDataLoaded:v,cacheEntryRemoved:w},P=A(k,T);Promise.resolve(P).catch(N=>{if(N!==wi)throw N})}return I},Uc=({api:t,context:{apiUid:e},reducerPath:n})=>(r,i)=>{t.util.resetApiState.match(r)&&i.dispatch(t.internalActions.middlewareRegistered(e))},Fc=({reducerPath:t,context:e,context:{endpointDefinitions:n},mutationThunk:r,queryThunk:i,api:s,assertTagType:o,refetchQuery:c,internalState:a})=>{const{removeQueryResult:u}=s.internalActions,f=be(Me(r),Pn(r)),g=be(Me(r,i),st(r,i));let l=[];const h=(C,_)=>{f(C)?R(Ps(C,"invalidatesTags",n,o),_):g(C)?R([],_):s.util.invalidateTags.match(C)&&R(Nr(C.payload,void 0,void 0,void 0,void 0,o),_)};function I(C){var p;const{queries:_,mutations:k}=C;for(const d of[_,k])for(const m in d)if(((p=d[m])==null?void 0:p.status)==="pending")return!0;return!1}function R(C,_){const k=_.getState(),p=k[t];if(l.push(...C),p.config.invalidationBehavior==="delayed"&&I(p))return;const d=l;if(l=[],d.length===0)return;const m=s.util.selectInvalidatedBy(k,d);e.batch(()=>{const S=Array.from(m.values());for(const{queryCacheKey:A}of S){const O=p.queries[A],w=a.currentSubscriptions[A]??{};O&&(et(w)===0?_.dispatch(u({queryCacheKey:A})):O.status!=="uninitialized"&&_.dispatch(c(O)))}})}return h},Bc=({reducerPath:t,queryThunk:e,api:n,refetchQuery:r,internalState:i})=>{const s={},o=(l,h)=>{(n.internalActions.updateSubscriptionOptions.match(l)||n.internalActions.unsubscribeQueryResult.match(l))&&a(l.payload,h),(e.pending.match(l)||e.rejected.match(l)&&l.meta.condition)&&a(l.meta.arg,h),(e.fulfilled.match(l)||e.rejected.match(l)&&!l.meta.condition)&&c(l.meta.arg,h),n.util.resetApiState.match(l)&&f()};function c({queryCacheKey:l},h){const I=h.getState()[t],R=I.queries[l],C=i.currentSubscriptions[l];if(!R||R.status==="uninitialized")return;const{lowestPollingInterval:_,skipPollingIfUnfocused:k}=g(C);if(!Number.isFinite(_))return;const p=s[l];p!=null&&p.timeout&&(clearTimeout(p.timeout),p.timeout=void 0);const d=Date.now()+_;s[l]={nextPollTimestamp:d,pollingInterval:_,timeout:setTimeout(()=>{(I.config.focused||!k)&&h.dispatch(r(R)),c({queryCacheKey:l},h)},_)}}function a({queryCacheKey:l},h){const R=h.getState()[t].queries[l],C=i.currentSubscriptions[l];if(!R||R.status==="uninitialized")return;const{lowestPollingInterval:_}=g(C);if(!Number.isFinite(_)){u(l);return}const k=s[l],p=Date.now()+_;(!k||p<k.nextPollTimestamp)&&c({queryCacheKey:l},h)}function u(l){const h=s[l];h!=null&&h.timeout&&clearTimeout(h.timeout),delete s[l]}function f(){for(const l of Object.keys(s))u(l)}function g(l={}){let h=!1,I=Number.POSITIVE_INFINITY;for(let R in l)l[R].pollingInterval&&(I=Math.min(l[R].pollingInterval,I),h=l[R].skipPollingIfUnfocused||h);return{lowestPollingInterval:I,skipPollingIfUnfocused:h}}return o},$c=({api:t,context:e,queryThunk:n,mutationThunk:r})=>{const i=Rr(n,r),s=st(n,r),o=Me(n,r),c={};return(u,f)=>{var g,l;if(i(u)){const{requestId:h,arg:{endpointName:I,originalArgs:R}}=u.meta,C=e.endpointDefinitions[I],_=C==null?void 0:C.onQueryStarted;if(_){const k={},p=new Promise((A,O)=>{k.resolve=A,k.reject=O});p.catch(()=>{}),c[h]=k;const d=t.endpoints[I].select(pn(C)?R:h),m=f.dispatch((A,O,w)=>w),S={...f,getCacheEntry:()=>d(f.getState()),requestId:h,extra:m,updateCachedData:pn(C)?A=>f.dispatch(t.util.updateQueryData(I,R,A)):void 0,queryFulfilled:p};_(R,S)}}else if(o(u)){const{requestId:h,baseQueryMeta:I}=u.meta;(g=c[h])==null||g.resolve({data:u.payload,meta:I}),delete c[h]}else if(s(u)){const{requestId:h,rejectedWithValue:I,baseQueryMeta:R}=u.meta;(l=c[h])==null||l.reject({error:u.payload??u.error,isUnhandledError:!I,meta:R}),delete c[h]}}},qc=({reducerPath:t,context:e,api:n,refetchQuery:r,internalState:i})=>{const{removeQueryResult:s}=n.internalActions,o=(a,u)=>{kr.match(a)&&c(u,"refetchOnFocus"),Or.match(a)&&c(u,"refetchOnReconnect")};function c(a,u){const f=a.getState()[t],g=f.queries,l=i.currentSubscriptions;e.batch(()=>{for(const h of Object.keys(l)){const I=g[h],R=l[h];if(!R||!I)continue;(Object.values(R).some(_=>_[u]===!0)||Object.values(R).every(_=>_[u]===void 0)&&f.config[u])&&(et(R)===0?a.dispatch(s({queryCacheKey:h})):I.status!=="uninitialized"&&a.dispatch(r(I)))}})}return o};function Hc(t){const{reducerPath:e,queryThunk:n,api:r,context:i}=t,{apiUid:s}=i,o={invalidateTags:oe(`${e}/invalidateTags`)},c=g=>g.type.startsWith(`${e}/`),a=[Uc,Lc,Fc,Bc,jc,$c];return{middleware:g=>{let l=!1;const I={...t,internalState:{currentSubscriptions:{}},refetchQuery:f,isThisApiSliceAction:c},R=a.map(k=>k(I)),C=Dc(I),_=qc(I);return k=>p=>{if(!cs(p))return k(p);l||(l=!0,g.dispatch(r.internalActions.middlewareRegistered(s)));const d={...g,next:k},m=g.getState(),[S,A]=C(p,d,m);let O;if(S?O=k(p):O=A,g.getState()[e]&&(_(p,d,m),c(p)||i.hasRehydrationInfo(p)))for(const w of R)w(p,d,m);return O}},actions:o};function f(g){return t.api.endpoints[g.endpointName].initiate(g.originalArgs,{subscribe:!1,forceRefetch:!0})}}var Ii=Symbol(),Os=({createSelector:t=Tr}={})=>({name:Ii,init(e,{baseQuery:n,tagTypes:r,reducerPath:i,serializeQueryArgs:s,keepUnusedDataFor:o,refetchOnMountOrArgChange:c,refetchOnFocus:a,refetchOnReconnect:u,invalidationBehavior:f,onSchemaFailure:g,catchSchemaFailure:l,skipSchemaValidation:h},I){Ta();const R=j=>j;Object.assign(e,{reducerPath:i,endpoints:{},internalActions:{onOnline:Or,onOffline:Cs,onFocus:kr,onFocusLost:Ss},util:{}});const C=Nc({serializeQueryArgs:s,reducerPath:i,createSelector:t}),{selectInvalidatedBy:_,selectCachedArgsForQuery:k,buildQuerySelector:p,buildInfiniteQuerySelector:d,buildMutationSelector:m}=C;ge(e.util,{selectInvalidatedBy:_,selectCachedArgsForQuery:k});const{queryThunk:S,infiniteQueryThunk:A,mutationThunk:O,patchQueryData:w,updateQueryData:v,upsertQueryData:b,prefetch:E,buildMatchThunkActions:T}=kc({baseQuery:n,reducerPath:i,context:I,api:e,serializeQueryArgs:s,assertTagType:R,selectors:C,onSchemaFailure:g,catchSchemaFailure:l,skipSchemaValidation:h}),{reducer:P,actions:N}=Oc({context:I,queryThunk:S,mutationThunk:O,serializeQueryArgs:s,reducerPath:i,assertTagType:R,config:{refetchOnFocus:a,refetchOnReconnect:u,refetchOnMountOrArgChange:c,keepUnusedDataFor:o,reducerPath:i,invalidationBehavior:f}});ge(e.util,{patchQueryData:w,updateQueryData:v,upsertQueryData:b,prefetch:E,resetApiState:N.resetApiState,upsertQueryEntries:N.cacheEntriesUpserted}),ge(e.internalActions,N);const{middleware:M,actions:L}=Hc({reducerPath:i,context:I,queryThunk:S,mutationThunk:O,infiniteQueryThunk:A,api:e,assertTagType:R,selectors:C});ge(e.util,L),ge(e,{reducer:P,middleware:M});const{buildInitiateQuery:U,buildInitiateInfiniteQuery:x,buildInitiateMutation:F,getRunningMutationThunk:$,getRunningMutationsThunk:V,getRunningQueriesThunk:G,getRunningQueryThunk:H}=Pc({queryThunk:S,mutationThunk:O,infiniteQueryThunk:A,api:e,serializeQueryArgs:s,context:I});return ge(e.util,{getRunningMutationThunk:$,getRunningMutationsThunk:V,getRunningQueryThunk:H,getRunningQueriesThunk:G}),{name:Ii,injectEndpoint(j,Q){var me;const ee=(me=e.endpoints)[j]??(me[j]={});An(Q)&&ge(ee,{name:j,select:p(j,Q),initiate:U(j,Q)},T(S,j)),Cc(Q)&&ge(ee,{name:j,select:m(),initiate:F(j)},T(O,j)),kn(Q)&&ge(ee,{name:j,select:d(j,Q),initiate:x(j,Q)},T(S,j))}}}});Os();function en(t){return t.replace(t[0],t[0].toUpperCase())}function Vc(t){return t.type==="query"}function Wc(t){return t.type==="mutation"}function Ns(t){return t.type==="infinitequery"}function pt(t,...e){return Object.assign(t,...e)}var Wn=Symbol();function zn(t,e,n,r){const i=D.useMemo(()=>({queryArgs:t,serialized:typeof t=="object"?e({queryArgs:t,endpointDefinition:n,endpointName:r}):t}),[t,e,n,r]),s=D.useRef(i);return D.useEffect(()=>{s.current.serialized!==i.serialized&&(s.current=i)},[i]),s.current.serialized===i.serialized?s.current.queryArgs:t}function tn(t){const e=D.useRef(t);return D.useEffect(()=>{vt(e.current,t)||(e.current=t)},[t]),vt(e.current,t)?e.current:t}var zc=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qc=zc(),Kc=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Gc=Kc(),Jc=()=>Qc||Gc?D.useLayoutEffect:D.useEffect,Yc=Jc(),Ei=t=>t.isUninitialized?{...t,isUninitialized:!1,isFetching:!0,isLoading:t.data===void 0,status:Is.pending}:t;function Qn(t,...e){const n={};return e.forEach(r=>{n[r]=t[r]}),n}var Kn=["data","status","isLoading","isSuccess","isError","error"];function Xc({api:t,moduleOptions:{batch:e,hooks:{useDispatch:n,useSelector:r,useStore:i},unstable__sideEffectsInRender:s,createSelector:o},serializeQueryArgs:c,context:a}){const u=s?d=>d():D.useEffect;return{buildQueryHooks:_,buildInfiniteQueryHooks:k,buildMutationHook:p,usePrefetch:l};function f(d,m,S){if(m!=null&&m.endpointName&&d.isUninitialized){const{endpointName:E}=m,T=a.endpointDefinitions[E];S!==re&&c({queryArgs:m.originalArgs,endpointDefinition:T,endpointName:E})===c({queryArgs:S,endpointDefinition:T,endpointName:E})&&(m=void 0)}let A=d.isSuccess?d.data:m==null?void 0:m.data;A===void 0&&(A=d.data);const O=A!==void 0,w=d.isLoading,v=(!m||m.isLoading||m.isUninitialized)&&!O&&w,b=d.isSuccess||O&&(w&&!(m!=null&&m.isError)||d.isUninitialized);return{...d,data:A,currentData:d.data,isFetching:w,isLoading:v,isSuccess:b}}function g(d,m,S){if(m!=null&&m.endpointName&&d.isUninitialized){const{endpointName:E}=m,T=a.endpointDefinitions[E];S!==re&&c({queryArgs:m.originalArgs,endpointDefinition:T,endpointName:E})===c({queryArgs:S,endpointDefinition:T,endpointName:E})&&(m=void 0)}let A=d.isSuccess?d.data:m==null?void 0:m.data;A===void 0&&(A=d.data);const O=A!==void 0,w=d.isLoading,v=(!m||m.isLoading||m.isUninitialized)&&!O&&w,b=d.isSuccess||w&&O;return{...d,data:A,currentData:d.data,isFetching:w,isLoading:v,isSuccess:b}}function l(d,m){const S=n(),A=tn(m);return D.useCallback((O,w)=>S(t.util.prefetch(d,O,{...A,...w})),[d,S,A])}function h(d,m,{refetchOnReconnect:S,refetchOnFocus:A,refetchOnMountOrArgChange:O,skip:w=!1,pollingInterval:v=0,skipPollingIfUnfocused:b=!1,...E}={}){const{initiate:T}=t.endpoints[d],P=n(),N=D.useRef(void 0);if(!N.current){const j=P(t.internalActions.internal_getRTKQSubscriptions());N.current=j}const M=zn(w?re:m,mn,a.endpointDefinitions[d],d),L=tn({refetchOnReconnect:S,refetchOnFocus:A,pollingInterval:v,skipPollingIfUnfocused:b}),U=E.initialPageParam,x=tn(U),F=D.useRef(void 0);let{queryCacheKey:$,requestId:V}=F.current||{},G=!1;$&&V&&(G=N.current.isRequestSubscribed($,V));const H=!G&&F.current!==void 0;return u(()=>{H&&(F.current=void 0)},[H]),u(()=>{var q;const j=F.current;if(M===re){j==null||j.unsubscribe(),F.current=void 0;return}const Q=(q=F.current)==null?void 0:q.subscriptionOptions;if(!j||j.arg!==M){j==null||j.unsubscribe();const ee=P(T(M,{subscriptionOptions:L,forceRefetch:O,...Ns(a.endpointDefinitions[d])?{initialPageParam:x}:{}}));F.current=ee}else L!==Q&&j.updateSubscriptionOptions(L)},[P,T,O,M,L,H,x,d]),[F,P,T,L]}function I(d,m){return(A,{skip:O=!1,selectFromResult:w}={})=>{const{select:v}=t.endpoints[d],b=zn(O?re:A,c,a.endpointDefinitions[d],d),E=D.useRef(void 0),T=D.useMemo(()=>o([v(b),(U,x)=>x,U=>b],m,{memoizeOptions:{resultEqualityCheck:vt}}),[v,b]),P=D.useMemo(()=>w?o([T],w,{devModeChecks:{identityFunctionCheck:"never"}}):T,[T,w]),N=r(U=>P(U,E.current),vt),M=i(),L=T(M.getState(),E.current);return Yc(()=>{E.current=L},[L]),N}}function R(d){D.useEffect(()=>()=>{var m,S;(S=(m=d.current)==null?void 0:m.unsubscribe)==null||S.call(m),d.current=void 0},[d])}function C(d){if(!d.current)throw new Error(ae(38));return d.current.refetch()}function _(d){const m=(O,w={})=>{const[v]=h(d,O,w);return R(v),D.useMemo(()=>({refetch:()=>C(v)}),[v])},S=({refetchOnReconnect:O,refetchOnFocus:w,pollingInterval:v=0,skipPollingIfUnfocused:b=!1}={})=>{const{initiate:E}=t.endpoints[d],T=n(),[P,N]=D.useState(Wn),M=D.useRef(void 0),L=tn({refetchOnReconnect:O,refetchOnFocus:w,pollingInterval:v,skipPollingIfUnfocused:b});u(()=>{var V,G;const $=(V=M.current)==null?void 0:V.subscriptionOptions;L!==$&&((G=M.current)==null||G.updateSubscriptionOptions(L))},[L]);const U=D.useRef(L);u(()=>{U.current=L},[L]);const x=D.useCallback(function($,V=!1){let G;return e(()=>{var H;(H=M.current)==null||H.unsubscribe(),M.current=G=T(E($,{subscriptionOptions:U.current,forceRefetch:!V})),N($)}),G},[T,E]),F=D.useCallback(()=>{var $,V;($=M.current)!=null&&$.queryCacheKey&&T(t.internalActions.removeQueryResult({queryCacheKey:(V=M.current)==null?void 0:V.queryCacheKey}))},[T]);return D.useEffect(()=>()=>{var $;($=M==null?void 0:M.current)==null||$.unsubscribe()},[]),D.useEffect(()=>{P!==Wn&&!M.current&&x(P,!0)},[P,x]),D.useMemo(()=>[x,P,{reset:F}],[x,P,F])},A=I(d,f);return{useQueryState:A,useQuerySubscription:m,useLazyQuerySubscription:S,useLazyQuery(O){const[w,v,{reset:b}]=S(O),E=A(v,{...O,skip:v===Wn}),T=D.useMemo(()=>({lastArg:v}),[v]);return D.useMemo(()=>[w,{...E,reset:b},T],[w,E,b,T])},useQuery(O,w){const v=m(O,w),b=A(O,{selectFromResult:O===re||w!=null&&w.skip?void 0:Ei,...w}),E=Qn(b,...Kn);return D.useDebugValue(E),D.useMemo(()=>({...b,...v}),[b,v])}}}function k(d){const m=(A,O={})=>{const[w,v,b,E]=h(d,A,O),T=D.useRef(E);u(()=>{T.current=E},[E]);const P=D.useCallback(function(L,U){let x;return e(()=>{var F;(F=w.current)==null||F.unsubscribe(),w.current=x=v(b(L,{subscriptionOptions:T.current,direction:U}))}),x},[w,v,b]);R(w);const N=zn(O.skip?re:A,mn,a.endpointDefinitions[d],d),M=D.useCallback(()=>C(w),[w]);return D.useMemo(()=>({trigger:P,refetch:M,fetchNextPage:()=>P(N,"forward"),fetchPreviousPage:()=>P(N,"backward")}),[M,P,N])},S=I(d,g);return{useInfiniteQueryState:S,useInfiniteQuerySubscription:m,useInfiniteQuery(A,O){const{refetch:w,fetchNextPage:v,fetchPreviousPage:b}=m(A,O),E=S(A,{selectFromResult:A===re||O!=null&&O.skip?void 0:Ei,...O}),T=Qn(E,...Kn,"hasNextPage","hasPreviousPage");return D.useDebugValue(T),D.useMemo(()=>({...E,fetchNextPage:v,fetchPreviousPage:b,refetch:w}),[E,v,b,w])}}}function p(d){return({selectFromResult:m,fixedCacheKey:S}={})=>{const{select:A,initiate:O}=t.endpoints[d],w=n(),[v,b]=D.useState();D.useEffect(()=>()=>{v!=null&&v.arg.fixedCacheKey||v==null||v.reset()},[v]);const E=D.useCallback(function($){const V=w(O($,{fixedCacheKey:S}));return b(V),V},[w,O,S]),{requestId:T}=v||{},P=D.useMemo(()=>A({fixedCacheKey:S,requestId:v==null?void 0:v.requestId}),[S,v,A]),N=D.useMemo(()=>m?o([P],m):P,[m,P]),M=r(N,vt),L=S==null?v==null?void 0:v.arg.originalArgs:void 0,U=D.useCallback(()=>{e(()=>{v&&b(void 0),S&&w(t.internalActions.removeMutationResult({requestId:T,fixedCacheKey:S}))})},[w,S,v,T]),x=Qn(M,...Kn,"endpointName");D.useDebugValue(x);const F=D.useMemo(()=>({...M,originalArgs:L,reset:U}),[M,L,U]);return D.useMemo(()=>[E,F],[E,F])}}}var Zc=Symbol(),eu=({batch:t=la,hooks:e={useDispatch:Mt,useSelector:ct,useStore:os},createSelector:n=Tr,unstable__sideEffectsInRender:r=!1,...i}={})=>({name:Zc,init(s,{serializeQueryArgs:o},c){const a=s,{buildQueryHooks:u,buildInfiniteQueryHooks:f,buildMutationHook:g,usePrefetch:l}=Xc({api:s,moduleOptions:{batch:t,hooks:e,unstable__sideEffectsInRender:r,createSelector:n},serializeQueryArgs:o,context:c});return pt(a,{usePrefetch:l}),pt(c,{batch:t}),{injectEndpoint(h,I){if(Vc(I)){const{useQuery:R,useLazyQuery:C,useLazyQuerySubscription:_,useQueryState:k,useQuerySubscription:p}=u(h);pt(a.endpoints[h],{useQuery:R,useLazyQuery:C,useLazyQuerySubscription:_,useQueryState:k,useQuerySubscription:p}),s[`use${en(h)}Query`]=R,s[`useLazy${en(h)}Query`]=C}if(Wc(I)){const R=g(h);pt(a.endpoints[h],{useMutation:R}),s[`use${en(h)}Mutation`]=R}else if(Ns(I)){const{useInfiniteQuery:R,useInfiniteQuerySubscription:C,useInfiniteQueryState:_}=f(h);pt(a.endpoints[h],{useInfiniteQuery:R,useInfiniteQuerySubscription:C,useInfiniteQueryState:_}),s[`use${en(h)}InfiniteQuery`]=R}}}}}),tu=ks(Os(),eu());const gn=tu({reducerPath:"coinGeckoApi",baseQuery:Sc({baseUrl:"https://api.coingecko.com/api/v3"}),endpoints:t=>({getCoins:t.query({query:(e=1)=>({url:"coins/markets",params:{vs_currency:"usd",order:"market_cap_desc",per_page:20,page:e,sparkline:!1,price_change_percentage:"24h"}}),transformResponse:e=>(console.log("getCoins response:",e),e)}),searchCoins:t.query({query:e=>({url:"search",params:{query:e}}),transformResponse:e=>(console.log("searchCoins response:",e),e.coins)}),getCoinDetails:t.query({query:e=>`coins/${e}`,transformResponse:e=>(console.log("getCoinDetails response:",e),e)}),getCoinChart:t.query({query:({id:e,days:n})=>`coins/${e}/market_chart?vs_currency=usd&days=${n}`,transformResponse:e=>(console.log("getCoinChart response:",e),e)}),getCoinById:t.query({query:e=>`coins/${e}`,transformResponse:e=>(console.log("getCoinById response:",e),e)})})}),{useGetCoinsQuery:nu,useSearchCoinsQuery:ru,useGetCoinDetailsQuery:iu,useGetCoinByIdQuery:su,useLazyGetCoinChartQuery:ou}=gn,au=Ir({auth:lc,favorites:hc,[gn.reducerPath]:gn.reducer}),cu=Wa({reducer:au,middleware:t=>t().concat(gn.middleware)}),uu=()=>{};var Si={};/**
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
 */const Ds=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lu=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],c=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ms={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,c=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,f=s>>2,g=(s&3)<<4|c>>4;let l=(c&15)<<2|u>>6,h=u&63;a||(h=64,o||(l=64)),r.push(n[f],n[g],n[l],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ds(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||u==null||g==null)throw new du;const l=s<<2|c>>4;if(r.push(l),u!==64){const h=c<<4&240|u>>2;if(r.push(h),g!==64){const I=u<<6&192|g;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class du extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fu=function(t){const e=Ds(t);return Ms.encodeByteArray(e,!0)},xs=function(t){return fu(t).replace(/\./g,"")},Ls=function(t){try{return Ms.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pu=()=>hu().__FIREBASE_DEFAULTS__,mu=()=>{if(typeof process>"u"||typeof Si>"u")return;const t=Si.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ls(t[1]);return e&&JSON.parse(e)},Dr=()=>{try{return uu()||pu()||mu()||gu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yu=t=>{var e,n;return(n=(e=Dr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},js=()=>{var t;return(t=Dr())===null||t===void 0?void 0:t.config},Us=t=>{var e;return(e=Dr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Mr(t){return t.endsWith(".cloudworkstations.dev")}async function _u(t){return(await fetch(t,{credentials:"include"})).ok}const wt={};function bu(){const t={prod:[],emulator:[]};for(const e of Object.keys(wt))wt[e]?t.emulator.push(e):t.prod.push(e);return t}function wu(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ci=!1;function Iu(t,e){if(typeof window>"u"||typeof document>"u"||!Mr(window.location.host)||wt[t]===e||wt[t]||Ci)return;wt[t]=e;function n(l){return`__firebase__banner__${l}`}const r="__firebase__banner",s=bu().prod.length>0;function o(){const l=document.getElementById(r);l&&l.remove()}function c(l){l.style.display="flex",l.style.background="#7faaf0",l.style.position="fixed",l.style.bottom="5px",l.style.left="5px",l.style.padding=".5em",l.style.borderRadius="5px",l.style.alignItems="center"}function a(l,h){l.setAttribute("width","24"),l.setAttribute("id",h),l.setAttribute("height","24"),l.setAttribute("viewBox","0 0 24 24"),l.setAttribute("fill","none"),l.style.marginLeft="-6px"}function u(){const l=document.createElement("span");return l.style.cursor="pointer",l.style.marginLeft="16px",l.style.fontSize="24px",l.innerHTML=" &times;",l.onclick=()=>{Ci=!0,o()},l}function f(l,h){l.setAttribute("id",h),l.innerText="Learn more",l.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",l.setAttribute("target","__blank"),l.style.paddingLeft="5px",l.style.textDecoration="underline"}function g(){const l=wu(r),h=n("text"),I=document.getElementById(h)||document.createElement("span"),R=n("learnmore"),C=document.getElementById(R)||document.createElement("a"),_=n("preprendIcon"),k=document.getElementById(_)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(l.created){const p=l.element;c(p),f(C,R);const d=u();a(k,_),p.append(k,I,C,d),document.body.appendChild(p)}s?(I.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",h)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function Su(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ru(){const t=Z();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pu(){try{return typeof indexedDB=="object"}catch{return!1}}function Au(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ku="FirebaseError";class xe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ku,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ft.prototype.create)}}class Ft{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ou(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new xe(i,c,r)}}function Ou(t,e){return t.replace(Nu,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nu=/\{\$([^}]+)}/g;function Du(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ot(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ti(s)&&Ti(o)){if(!ot(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ti(t){return t!==null&&typeof t=="object"}/**
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
 */function Bt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function yt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Mu(t,e){const n=new xu(t,e);return n.subscribe.bind(n)}class xu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lu(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gn),i.error===void 0&&(i.error=Gn),i.complete===void 0&&(i.complete=Gn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gn(){}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class at{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const He="[DEFAULT]";/**
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
 */class ju{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fu(e))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=He){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=He){return this.instances.has(e)}getOptions(e=He){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uu(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=He){return this.component?this.component.multipleInstances?e:He:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uu(t){return t===He?void 0:t}function Fu(t){return t.instantiationMode==="EAGER"}/**
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
 */class Bu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ju(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const $u={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},qu=W.INFO,Hu={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Vu=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Hu[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fs{constructor(e){this.name=e,this._logLevel=qu,this._logHandler=Vu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$u[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Wu=(t,e)=>e.some(n=>t instanceof n);let Ri,Pi;function zu(){return Ri||(Ri=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qu(){return Pi||(Pi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bs=new WeakMap,fr=new WeakMap,$s=new WeakMap,Jn=new WeakMap,xr=new WeakMap;function Ku(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ke(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bs.set(n,t)}).catch(()=>{}),xr.set(e,t),e}function Gu(t){if(fr.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fr.set(t,e)}let hr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$s.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ke(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ju(t){hr=t(hr)}function Yu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yn(this),e,...n);return $s.set(r,e.sort?e.sort():[e]),ke(r)}:Qu().includes(t)?function(...e){return t.apply(Yn(this),e),ke(Bs.get(this))}:function(...e){return ke(t.apply(Yn(this),e))}}function Xu(t){return typeof t=="function"?Yu(t):(t instanceof IDBTransaction&&Gu(t),Wu(t,zu())?new Proxy(t,hr):t)}function ke(t){if(t instanceof IDBRequest)return Ku(t);if(Jn.has(t))return Jn.get(t);const e=Xu(t);return e!==t&&(Jn.set(t,e),xr.set(e,t)),e}const Yn=t=>xr.get(t);function Zu(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),c=ke(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ke(o.result),a.oldVersion,a.newVersion,ke(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const el=["get","getKey","getAll","getAllKeys","count"],tl=["put","add","delete","clear"],Xn=new Map;function Ai(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xn.get(e))return Xn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||el.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),i&&a.done]))[0]};return Xn.set(e,s),s}Ju(t=>({...t,get:(e,n,r)=>Ai(e,n)||t.get(e,n,r),has:(e,n)=>!!Ai(e,n)||t.has(e,n)}));/**
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
 */class nl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pr="@firebase/app",ki="0.13.0";/**
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
 */const we=new Fs("@firebase/app"),il="@firebase/app-compat",sl="@firebase/analytics-compat",ol="@firebase/analytics",al="@firebase/app-check-compat",cl="@firebase/app-check",ul="@firebase/auth",ll="@firebase/auth-compat",dl="@firebase/database",fl="@firebase/data-connect",hl="@firebase/database-compat",pl="@firebase/functions",ml="@firebase/functions-compat",gl="@firebase/installations",yl="@firebase/installations-compat",vl="@firebase/messaging",_l="@firebase/messaging-compat",bl="@firebase/performance",wl="@firebase/performance-compat",Il="@firebase/remote-config",El="@firebase/remote-config-compat",Sl="@firebase/storage",Cl="@firebase/storage-compat",Tl="@firebase/firestore",Rl="@firebase/ai",Pl="@firebase/firestore-compat",Al="firebase",kl="11.8.0";/**
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
 */const mr="[DEFAULT]",Ol={[pr]:"fire-core",[il]:"fire-core-compat",[ol]:"fire-analytics",[sl]:"fire-analytics-compat",[cl]:"fire-app-check",[al]:"fire-app-check-compat",[ul]:"fire-auth",[ll]:"fire-auth-compat",[dl]:"fire-rtdb",[fl]:"fire-data-connect",[hl]:"fire-rtdb-compat",[pl]:"fire-fn",[ml]:"fire-fn-compat",[gl]:"fire-iid",[yl]:"fire-iid-compat",[vl]:"fire-fcm",[_l]:"fire-fcm-compat",[bl]:"fire-perf",[wl]:"fire-perf-compat",[Il]:"fire-rc",[El]:"fire-rc-compat",[Sl]:"fire-gcs",[Cl]:"fire-gcs-compat",[Tl]:"fire-fst",[Pl]:"fire-fst-compat",[Rl]:"fire-vertex","fire-js":"fire-js",[Al]:"fire-js-all"};/**
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
 */const yn=new Map,Nl=new Map,gr=new Map;function Oi(t,e){try{t.container.addComponent(e)}catch(n){we.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kt(t){const e=t.name;if(gr.has(e))return we.debug(`There were multiple attempts to register component ${e}.`),!1;gr.set(e,t);for(const n of yn.values())Oi(n,t);for(const n of Nl.values())Oi(n,t);return!0}function qs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ie(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Dl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oe=new Ft("app","Firebase",Dl);/**
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
 */class Ml{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oe.create("app-deleted",{appName:this._name})}}/**
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
 */const $t=kl;function Hs(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mr,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Oe.create("bad-app-name",{appName:String(i)});if(n||(n=js()),!n)throw Oe.create("no-options");const s=yn.get(i);if(s){if(ot(n,s.options)&&ot(r,s.config))return s;throw Oe.create("duplicate-app",{appName:i})}const o=new Bu(i);for(const a of gr.values())o.addComponent(a);const c=new Ml(n,r,o);return yn.set(i,c),c}function xl(t=mr){const e=yn.get(t);if(!e&&t===mr&&js())return Hs();if(!e)throw Oe.create("no-app",{appName:t});return e}function tt(t,e,n){var r;let i=(r=Ol[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),we.warn(c.join(" "));return}kt(new at(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ll="firebase-heartbeat-database",jl=1,Ot="firebase-heartbeat-store";let Zn=null;function Vs(){return Zn||(Zn=Zu(Ll,jl,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ot)}catch(n){console.warn(n)}}}}).catch(t=>{throw Oe.create("idb-open",{originalErrorMessage:t.message})})),Zn}async function Ul(t){try{const n=(await Vs()).transaction(Ot),r=await n.objectStore(Ot).get(Ws(t));return await n.done,r}catch(e){if(e instanceof xe)we.warn(e.message);else{const n=Oe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});we.warn(n.message)}}}async function Ni(t,e){try{const r=(await Vs()).transaction(Ot,"readwrite");await r.objectStore(Ot).put(e,Ws(t)),await r.done}catch(n){if(n instanceof xe)we.warn(n.message);else{const r=Oe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});we.warn(r.message)}}}function Ws(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fl=1024,Bl=30;class $l{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hl(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Di();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Bl){const o=Vl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){we.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Di(),{heartbeatsToSend:r,unsentEntries:i}=ql(this._heartbeatsCache.heartbeats),s=xs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return we.warn(n),""}}}function Di(){return new Date().toISOString().substring(0,10)}function ql(t,e=Fl){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mi(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pu()?Au().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ul(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ni(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ni(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mi(t){return xs(JSON.stringify({version:2,heartbeats:t})).length}function Vl(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Wl(t){kt(new at("platform-logger",e=>new nl(e),"PRIVATE")),kt(new at("heartbeat",e=>new $l(e),"PRIVATE")),tt(pr,ki,t),tt(pr,ki,"esm2017"),tt("fire-js","")}Wl("");function Lr(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zl=zs,Qs=new Ft("auth","Firebase",zs());/**
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
 */const vn=new Fs("@firebase/auth");function Ql(t,...e){vn.logLevel<=W.WARN&&vn.warn(`Auth (${$t}): ${t}`,...e)}function rn(t,...e){vn.logLevel<=W.ERROR&&vn.error(`Auth (${$t}): ${t}`,...e)}/**
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
 */function ue(t,...e){throw jr(t,...e)}function fe(t,...e){return jr(t,...e)}function Ks(t,e,n){const r=Object.assign(Object.assign({},zl()),{[e]:n});return new Ft("auth","Firebase",r).create(e,{appName:t.name})}function _e(t){return Ks(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jr(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qs.create(t,...e)}function B(t,e,...n){if(!t)throw jr(e,...n)}function ye(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rn(e),new Error(e)}function Ie(t,e){t||ye(e)}/**
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
 */function yr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kl(){return xi()==="http:"||xi()==="https:"}function xi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Gl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kl()||Cu()||"connection"in navigator)?navigator.onLine:!0}function Jl(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ie(n>e,"Short delay should be less than long delay!"),this.isMobile=Eu()||Tu()}get(){return Gl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ur(t,e){Ie(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gs{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Yl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Xl=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Zl=new qt(3e4,6e4);function je(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ue(t,e,n,r,i={}){return Js(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=Bt(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return Su()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Mr(t.emulatorConfig.host)&&(u.credentials="include"),Gs.fetch()(await Ys(t,t.config.apiHost,n,c),u)})}async function Js(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yl),e);try{const i=new td(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[a,u]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw nn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw nn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw nn(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ks(t,f,u);ue(t,f)}}catch(i){if(i instanceof xe)throw i;ue(t,"network-request-failed",{message:String(i)})}}async function Ht(t,e,n,r,i={}){const s=await Ue(t,e,n,r,i);return"mfaPendingCredential"in s&&ue(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ys(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ur(t.config,i):`${t.config.apiScheme}://${i}`;return Xl.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function ed(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class td{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fe(this.auth,"network-request-failed")),Zl.get())})}}function nn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fe(t,e,r);return i.customData._tokenResponse=n,i}function Li(t){return t!==void 0&&t.enterprise!==void 0}class nd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ed(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rd(t,e){return Ue(t,"GET","/v2/recaptchaConfig",je(t,e))}/**
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
 */async function id(t,e){return Ue(t,"POST","/v1/accounts:delete",e)}async function _n(t,e){return Ue(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function It(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sd(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=Fr(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:It(er(i.auth_time)),issuedAtTime:It(er(i.iat)),expirationTime:It(er(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function er(t){return Number(t)*1e3}function Fr(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ls(n);return i?JSON.parse(i):(rn("Failed to decode base64 JWT payload"),null)}catch(i){return rn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ji(t){const e=Fr(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Nt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xe&&od(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function od({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ad{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=It(this.lastLoginAt),this.creationTime=It(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bn(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Nt(t,_n(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Xs(s.providerUserInfo):[],c=ud(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),f=a?u:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new vr(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function cd(t){const e=Le(t);await bn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ud(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xs(t){return t.map(e=>{var{providerId:n}=e,r=Lr(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ld(t,e){const n=await Js(t,{},async()=>{const r=Bt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Ys(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Gs.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dd(t,e){return Ue(t,"POST","/v2/accounts:revokeToken",je(t,e))}/**
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
 */class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ji(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=ji(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ld(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new nt;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return ye("not implemented")}}/**
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
 */function Se(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class se{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Lr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ad(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Nt(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sd(this,e)}reload(){return cd(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ie(this.auth.app))return Promise.reject(_e(this.auth));const e=await this.getIdToken();return await Nt(this,id(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,c,a,u,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,l=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(c=n.tenantId)!==null&&c!==void 0?c:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:p,emailVerified:d,isAnonymous:m,providerData:S,stsTokenManager:A}=n;B(p&&A,e,"internal-error");const O=nt.fromJSON(this.name,A);B(typeof p=="string",e,"internal-error"),Se(g,e.name),Se(l,e.name),B(typeof d=="boolean",e,"internal-error"),B(typeof m=="boolean",e,"internal-error"),Se(h,e.name),Se(I,e.name),Se(R,e.name),Se(C,e.name),Se(_,e.name),Se(k,e.name);const w=new se({uid:p,auth:e,email:l,emailVerified:d,displayName:g,isAnonymous:m,photoURL:I,phoneNumber:h,tenantId:R,stsTokenManager:O,createdAt:_,lastLoginAt:k});return S&&Array.isArray(S)&&(w.providerData=S.map(v=>Object.assign({},v))),C&&(w._redirectEventId=C),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new nt;i.updateFromServerResponse(n);const s=new se({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bn(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Xs(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new nt;c.updateFromIdToken(r);const a=new se({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const Ui=new Map;function ve(t){Ie(t instanceof Function,"Expected a class definition");let e=Ui.get(t);return e?(Ie(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ui.set(t,e),e)}/**
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
 */class Zs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zs.type="NONE";const Fi=Zs;/**
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
 */function sn(t,e,n){return`firebase:${t}:${e}:${n}`}class rt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=sn(this.userKey,i.apiKey,s),this.fullPersistenceKey=sn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _n(this.auth,{idToken:e}).catch(()=>{});return n?se._fromGetAccountInfoResponse(this.auth,n,e):null}return se._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rt(ve(Fi),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ve(Fi);const o=sn(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let g;if(typeof f=="string"){const l=await _n(e,{idToken:f}).catch(()=>{});if(!l)break;g=await se._fromGetAccountInfoResponse(e,l,f)}else g=se._fromJSON(e,f);u!==s&&(c=g),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new rt(s,e,r):(s=a[0],c&&await s._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new rt(s,e,r))}}/**
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
 */function Bi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ro(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(so(e))return"Blackberry";if(oo(e))return"Webos";if(to(e))return"Safari";if((e.includes("chrome/")||no(e))&&!e.includes("edge/"))return"Chrome";if(io(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eo(t=Z()){return/firefox\//i.test(t)}function to(t=Z()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function no(t=Z()){return/crios\//i.test(t)}function ro(t=Z()){return/iemobile/i.test(t)}function io(t=Z()){return/android/i.test(t)}function so(t=Z()){return/blackberry/i.test(t)}function oo(t=Z()){return/webos/i.test(t)}function Br(t=Z()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fd(t=Z()){var e;return Br(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hd(){return Ru()&&document.documentMode===10}function ao(t=Z()){return Br(t)||io(t)||oo(t)||so(t)||/windows phone/i.test(t)||ro(t)}/**
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
 */function co(t,e=[]){let n;switch(t){case"Browser":n=Bi(Z());break;case"Worker":n=`${Bi(Z())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$t}/${r}`}/**
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
 */class pd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,c)=>{try{const a=e(s);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function md(t,e={}){return Ue(t,"GET","/v2/passwordPolicy",je(t,e))}/**
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
 */const gd=6;class yd{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class vd{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $i(this),this.idTokenSubscription=new $i(this),this.beforeStateQueue=new pd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ve(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await rt.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _n(this,{idToken:e}),r=await se._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ie(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ie(this.app))return Promise.reject(_e(this));const n=e?Le(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ie(this.app)?Promise.reject(_e(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ie(this.app)?Promise.reject(_e(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ve(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await md(this),n=new yd(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ft("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dd(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ve(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[ve(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=co(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(ie(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ql(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ge(t){return Le(t)}class $i{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mu(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let On={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _d(t){On=t}function uo(t){return On.loadJS(t)}function bd(){return On.recaptchaEnterpriseScript}function wd(){return On.gapiScript}function Id(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ed{constructor(){this.enterprise=new Sd}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Sd{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Cd="recaptcha-enterprise",lo="NO_RECAPTCHA";class Td{constructor(e){this.type=Cd,this.auth=Ge(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{rd(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new nd(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{c(a)})})}function i(s,o,c){const a=window.grecaptcha;Li(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(lo)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ed().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!n&&Li(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=bd();a.length!==0&&(a+=c),uo(a).then(()=>{i(c,s,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function qi(t,e,n,r=!1,i=!1){const s=new Td(t);let o;if(i)o=lo;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const a=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const a=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function _r(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await qi(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await qi(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function Rd(t,e){const n=qs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ot(s,e??{}))return i;ue(i,"already-initialized")}return n.initialize({options:e})}function Pd(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ve);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ad(t,e,n){const r=Ge(t);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=fo(e),{host:o,port:c}=kd(e),a=c===null?"":`:${c}`,u={url:`${s}//${o}${a}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(ot(u,r.config.emulator)&&ot(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Mr(o)?(_u(`${s}//${o}${a}`),Iu("Auth",!0)):Od()}function fo(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kd(t){const e=fo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hi(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hi(o)}}}function Hi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Od(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $r{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ye("not implemented")}_getIdTokenResponse(e){return ye("not implemented")}_linkToIdToken(e,n){return ye("not implemented")}_getReauthenticationResolver(e){return ye("not implemented")}}async function Nd(t,e){return Ue(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Dd(t,e){return Ht(t,"POST","/v1/accounts:signInWithPassword",je(t,e))}/**
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
 */async function Md(t,e){return Ht(t,"POST","/v1/accounts:signInWithEmailLink",je(t,e))}async function xd(t,e){return Ht(t,"POST","/v1/accounts:signInWithEmailLink",je(t,e))}/**
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
 */class Dt extends $r{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Dt(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dt(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _r(e,n,"signInWithPassword",Dd);case"emailLink":return Md(e,{email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _r(e,r,"signUpPassword",Nd);case"emailLink":return xd(e,{idToken:n,email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function it(t,e){return Ht(t,"POST","/v1/accounts:signInWithIdp",je(t,e))}/**
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
 */const Ld="http://localhost";class Qe extends $r{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Lr(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qe(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return it(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,it(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,it(e,n)}buildRequest(){const e={requestUri:Ld,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bt(n)}return e}}/**
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
 */function jd(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ud(t){const e=gt(yt(t)).link,n=e?gt(yt(e)).deep_link_id:null,r=gt(yt(t)).deep_link_id;return(r?gt(yt(r)).link:null)||r||n||e||t}class qr{constructor(e){var n,r,i,s,o,c;const a=gt(yt(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,g=jd((i=a.mode)!==null&&i!==void 0?i:null);B(u&&f&&g,"argument-error"),this.apiKey=u,this.operation=g,this.code=f,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Ud(e);try{return new qr(n)}catch{return null}}}/**
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
 */class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,n){return Dt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qr.parseLink(n);return B(r,"argument-error"),Dt._fromEmailAndCode(e,r.code,r.tenantId)}}ut.PROVIDER_ID="password";ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ho{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vt extends ho{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Te extends Vt{constructor(){super("facebook.com")}static credential(e){return Qe._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.FACEBOOK_SIGN_IN_METHOD="facebook.com";Te.PROVIDER_ID="facebook.com";/**
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
 */class Re extends Vt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qe._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Re.credential(n,r)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com";Re.PROVIDER_ID="google.com";/**
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
 */class Pe extends Vt{constructor(){super("github.com")}static credential(e){return Qe._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";/**
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
 */class Ae extends Vt{constructor(){super("twitter.com")}static credential(e,n){return Qe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ae.credential(n,r)}catch{return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com";Ae.PROVIDER_ID="twitter.com";/**
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
 */async function Fd(t,e){return Ht(t,"POST","/v1/accounts:signUp",je(t,e))}/**
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
 */class Ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await se._fromIdTokenResponse(e,r,i),o=Vi(r);return new Ke({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vi(r);return new Ke({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wn extends xe{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wn(e,n,r,i)}}function po(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wn._fromErrorAndOperation(t,s,e,r):s})}async function Bd(t,e,n=!1){const r=await Nt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ke._forOperation(t,"link",r)}/**
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
 */async function $d(t,e,n=!1){const{auth:r}=t;if(ie(r.app))return Promise.reject(_e(r));const i="reauthenticate";try{const s=await Nt(t,po(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=Fr(s.idToken);B(o,r,"internal-error");const{sub:c}=o;return B(t.uid===c,r,"user-mismatch"),Ke._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ue(r,"user-mismatch"),s}}/**
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
 */async function mo(t,e,n=!1){if(ie(t.app))return Promise.reject(_e(t));const r="signIn",i=await po(t,r,e),s=await Ke._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function qd(t,e){return mo(Ge(t),e)}/**
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
 */async function go(t){const e=Ge(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hd(t,e,n){if(ie(t.app))return Promise.reject(_e(t));const r=Ge(t),o=await _r(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fd).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&go(t),a}),c=await Ke._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Vd(t,e,n){return ie(t.app)?Promise.reject(_e(t)):qd(Le(t),ut.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&go(t),r})}function Wd(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function zd(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function Qd(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}const In="__sak";/**
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
 */class yo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(In,"1"),this.storage.removeItem(In),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Kd=1e3,Gd=10;class vo extends yo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ao(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hd()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Gd):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Kd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vo.type="LOCAL";const Jd=vo;/**
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
 */class _o extends yo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_o.type="SESSION";const bo=_o;/**
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
 */function Yd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async u=>u(n.origin,s)),a=await Yd(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nn.receivers=[];/**
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
 */function Hr(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Xd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,a)=>{const u=Hr("",20);i.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const l=g;if(l.data.eventId===u)switch(l.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(l.data.response);break;default:clearTimeout(f),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function he(){return window}function Zd(t){he().location.href=t}/**
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
 */function wo(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function ef(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tf(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nf(){return wo()?self:null}/**
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
 */const Io="firebaseLocalStorageDb",rf=1,En="firebaseLocalStorage",Eo="fbase_key";class Wt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dn(t,e){return t.transaction([En],e?"readwrite":"readonly").objectStore(En)}function sf(){const t=indexedDB.deleteDatabase(Io);return new Wt(t).toPromise()}function br(){const t=indexedDB.open(Io,rf);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(En,{keyPath:Eo})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(En)?e(r):(r.close(),await sf(),e(await br()))})})}async function Wi(t,e,n){const r=Dn(t,!0).put({[Eo]:e,value:n});return new Wt(r).toPromise()}async function of(t,e){const n=Dn(t,!1).get(e),r=await new Wt(n).toPromise();return r===void 0?null:r.value}function zi(t,e){const n=Dn(t,!0).delete(e);return new Wt(n).toPromise()}const af=800,cf=3;class So{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await br(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cf)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nn._getInstance(nf()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ef(),!this.activeServiceWorker)return;this.sender=new Xd(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await br();return await Wi(e,In,"1"),await zi(e,In),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>of(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zi(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dn(i,!1).getAll();return new Wt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),af)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}So.type="LOCAL";const uf=So;new qt(3e4,6e4);/**
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
 */function lf(t,e){return e?ve(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vr extends $r{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return it(e,this._buildIdpRequest())}_linkToIdToken(e,n){return it(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return it(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function df(t){return mo(t.auth,new Vr(t),t.bypassAuthState)}function ff(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),$d(n,new Vr(t),t.bypassAuthState)}async function hf(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Bd(n,new Vr(t),t.bypassAuthState)}/**
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
 */class Co{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return df;case"linkViaPopup":case"linkViaRedirect":return hf;case"reauthViaPopup":case"reauthViaRedirect":return ff;default:ue(this.auth,"internal-error")}}resolve(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pf=new qt(2e3,1e4);class Ze extends Co{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ze.currentPopupAction&&Ze.currentPopupAction.cancel(),Ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Ie(this.filter.length===1,"Popup operations only handle one event");const e=Hr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pf.get())};e()}}Ze.currentPopupAction=null;/**
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
 */const mf="pendingRedirect",on=new Map;class gf extends Co{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=on.get(this.auth._key());if(!e){try{const r=await yf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}on.set(this.auth._key(),e)}return this.bypassAuthState||on.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yf(t,e){const n=bf(e),r=_f(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vf(t,e){on.set(t._key(),e)}function _f(t){return ve(t._redirectPersistence)}function bf(t){return sn(mf,t.config.apiKey,t.name)}async function wf(t,e,n=!1){if(ie(t.app))return Promise.reject(_e(t));const r=Ge(t),i=lf(r,e),o=await new gf(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const If=10*60*1e3;class Ef{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!To(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=If&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qi(e))}saveEventToCache(e){this.cachedEventUids.add(Qi(e)),this.lastProcessedEventTime=Date.now()}}function Qi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function To({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return To(t);default:return!1}}/**
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
 */async function Cf(t,e={}){return Ue(t,"GET","/v1/projects",e)}/**
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
 */const Tf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rf=/^https?/;async function Pf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cf(t);for(const n of e)try{if(Af(n))return}catch{}ue(t,"unauthorized-domain")}function Af(t){const e=yr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Rf.test(n))return!1;if(Tf.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const kf=new qt(3e4,6e4);function Ki(){const t=he().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Of(t){return new Promise((e,n)=>{var r,i,s;function o(){Ki(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ki(),n(fe(t,"network-request-failed"))},timeout:kf.get()})}if(!((i=(r=he().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=he().gapi)===null||s===void 0)&&s.load)o();else{const c=Id("iframefcb");return he()[c]=()=>{gapi.load?o():n(fe(t,"network-request-failed"))},uo(`${wd()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw an=null,e})}let an=null;function Nf(t){return an=an||Of(t),an}/**
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
 */const Df=new qt(5e3,15e3),Mf="__/auth/iframe",xf="emulator/auth/iframe",Lf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uf(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ur(e,xf):`https://${t.config.authDomain}/${Mf}`,r={apiKey:e.apiKey,appName:t.name,v:$t},i=jf.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bt(r).slice(1)}`}async function Ff(t){const e=await Nf(t),n=he().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Uf(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lf,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fe(t,"network-request-failed"),c=he().setTimeout(()=>{s(o)},Df.get());function a(){he().clearTimeout(c),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Bf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$f=500,qf=600,Hf="_blank",Vf="http://localhost";class Gi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wf(t,e,n,r=$f,i=qf){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Bf),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Z().toLowerCase();n&&(c=no(u)?Hf:n),eo(u)&&(e=e||Vf,a.scrollbars="yes");const f=Object.entries(a).reduce((l,[h,I])=>`${l}${h}=${I},`,"");if(fd(u)&&c!=="_self")return zf(e||"",c),new Gi(null);const g=window.open(e||"",c,f);B(g,t,"popup-blocked");try{g.focus()}catch{}return new Gi(g)}function zf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Qf="__/auth/handler",Kf="emulator/auth/handler",Gf=encodeURIComponent("fac");async function Ji(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$t,eventId:i};if(e instanceof ho){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Vt){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),u=a?`#${Gf}=${encodeURIComponent(a)}`:"";return`${Jf(t)}?${Bt(c).slice(1)}${u}`}function Jf({config:t}){return t.emulator?Ur(t,Kf):`https://${t.authDomain}/${Qf}`}/**
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
 */const tr="webStorageSupport";class Yf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bo,this._completeRedirectFn=wf,this._overrideRedirectResult=vf}async _openPopup(e,n,r,i){var s;Ie((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ji(e,n,r,yr(),i);return Wf(e,o,Hr())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ji(e,n,r,yr(),i);return Zd(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ie(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ff(e),r=new Ef(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tr,{type:tr},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tr];o!==void 0&&n(!!o),ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ao()||to()||Br()}}const Xf=Yf;var Yi="@firebase/auth",Xi="1.10.6";/**
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
 */class Zf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function th(t){kt(new at("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:co(t)},u=new vd(r,i,s,a);return Pd(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kt(new at("auth-internal",e=>{const n=Ge(e.getProvider("auth").getImmediate());return(r=>new Zf(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(Yi,Xi,eh(t)),tt(Yi,Xi,"esm2017")}/**
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
 */const nh=5*60,rh=Us("authIdTokenMaxAge")||nh;let Zi=null;const ih=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rh)return;const i=n==null?void 0:n.token;Zi!==i&&(Zi=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sh(t=xl()){const e=qs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Rd(t,{popupRedirectResolver:Xf,persistence:[uf,Jd,bo]}),r=Us("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ih(s.toString());zd(n,o,()=>o(n.currentUser)),Wd(n,c=>o(c))}}const i=yu("auth");return i&&Ad(n,`http://${i}`),n}function oh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_d({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});th("Browser");var ah="firebase",ch="11.8.1";/**
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
 */tt(ah,ch,"app");const uh={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},lh=Hs(uh),Sn=sh(lh),dh=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,c]=D.useState(""),[a,u]=D.useState(!1),f=Mt(),g=ts(),l=async h=>{if(h.preventDefault(),c(""),n!==i){c("Passwords do not match");return}if(n.length<6){c("Password must be at least 6 characters");return}try{u(!0);const I=await Hd(Sn,t,n);f(Ar({email:I.user.email,uid:I.user.uid})),g("/coins")}catch(I){c(I.message||"Failed to create account")}finally{u(!1)}};return y.jsxs("form",{onSubmit:l,children:[o&&y.jsx("div",{className:"error-message",children:o}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"email",children:"Email"}),y.jsx("input",{type:"email",id:"email",placeholder:"Enter your email",value:t,onChange:h=>e(h.target.value),required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"password",children:"Password"}),y.jsx("input",{type:"password",id:"password",placeholder:"Create a password (min 6 chars)",value:n,onChange:h=>r(h.target.value),required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),y.jsx("input",{type:"password",id:"confirmPassword",placeholder:"Confirm your password",value:i,onChange:h=>s(h.target.value),required:!0})]}),y.jsx("button",{type:"submit",className:"auth-button",disabled:a,children:a?"Creating Account...":"Sign Up"}),y.jsx("div",{className:"auth-footer",children:y.jsxs("p",{children:["Already have an account? ",y.jsx(Et,{to:"/login",children:"Sign In"})]})})]})},fh=()=>y.jsx("div",{className:"auth-container",children:y.jsxs("div",{className:"auth-card",children:[y.jsx("h2",{children:"Create Account"}),y.jsx(dh,{})]})}),hh=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,c]=D.useState(!1),a=Mt(),u=ts(),f=async g=>{g.preventDefault(),s(""),c(!0);try{const l=await Vd(Sn,t,n);a(Ar({email:l.user.email,uid:l.user.uid})),u("/coins")}catch(l){s(l.message||"Failed to sign in. Please check your credentials.")}finally{c(!1)}};return y.jsxs("form",{onSubmit:f,children:[i&&y.jsx("div",{className:"error-message",children:i}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"email",children:"Email"}),y.jsx("input",{type:"email",id:"email",placeholder:"Enter your email",value:t,onChange:g=>e(g.target.value),required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"password",children:"Password"}),y.jsx("input",{type:"password",id:"password",placeholder:"Enter your password",value:n,onChange:g=>r(g.target.value),required:!0})]}),y.jsx("button",{type:"submit",className:"auth-button",disabled:o,children:o?"Signing In...":"Sign In"}),y.jsxs("div",{className:"auth-footer",children:[y.jsxs("p",{children:["Don't have an account? ",y.jsx(Et,{to:"/register",children:"Sign Up"})]}),y.jsx("p",{children:y.jsx(Et,{to:"/forgot-password",children:"Forgot Password?"})})]})]})},ph=()=>y.jsx("div",{className:"auth-container",children:y.jsxs("div",{className:"auth-card",children:[y.jsx("h2",{children:"Sign In"}),y.jsx(hh,{})]})}),mh=({onSearchQueryChange:t})=>{const[e,n]=D.useState("");D.useEffect(()=>{const i=setTimeout(()=>{t(e.trim())},300);return()=>clearTimeout(i)},[e,t]);const r=i=>{n(i.target.value)};return y.jsx("div",{className:"search-container",children:y.jsx("div",{className:"search-form",children:y.jsx("input",{type:"text",placeholder:"Search cryptocurrencies...",value:e,onChange:r,className:"search-input"})})})},Ro=({id:t,image:e,name:n,symbol:r,price:i,change24h:s,rank:o,isFavorite:c=!1,onToggleFavorite:a,showFavoriteButton:u=!1,to:f})=>y.jsxs("div",{className:"coin-card",children:[y.jsxs(Et,{to:f,className:"coin-link",children:[y.jsxs("div",{className:"coin-header",children:[y.jsx("img",{src:e,alt:n,className:"coin-image"}),y.jsxs("div",{className:"coin-header-info",children:[y.jsxs("h3",{className:"coin-name",children:[n,y.jsxs("span",{className:"coin-symbol",children:["(",r.toUpperCase(),")"]})]}),o&&y.jsxs("p",{className:"coin-rank",children:["Rank: #",o]})]})]}),i!==void 0&&y.jsxs("p",{className:"coin-price",children:[y.jsx("span",{className:"label",children:"Price:"}),y.jsxs("span",{className:"value",children:["$",i.toLocaleString()]})]}),s!==void 0&&y.jsxs("p",{className:"coin-change",style:{color:s>0?"green":"red",fontWeight:"bold"},children:[s>0?"+":"",s.toFixed(2),"%"]})]}),u&&a&&y.jsx("button",{onClick:()=>a(t),className:"favorite-button",title:c?"Remove from Favorites":"Add to Favorites",children:c?"★":"☆"})]}),gh=({coins:t,isLoading:e,error:n,hasMore:r,onLoadMore:i})=>{const s=Mt(),o=ct(u=>u.favorites.favoriteCoins),c=u=>o.includes(u),a=u=>{s(ws(u))};return y.jsxs("div",{className:"top-crypto-list",children:[e&&t.length===0&&y.jsx("div",{className:"loading",children:"Loading coins..."}),n&&y.jsxs("div",{className:"error",children:["Error: ",n]}),t.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"coins-grid",children:t.map(u=>y.jsx(Ro,{id:u.id,image:u.image,name:u.name,symbol:u.symbol,price:u.current_price,change24h:u.price_change_percentage_24h,rank:u.market_cap_rank,isFavorite:c(u.id),onToggleFavorite:a,showFavoriteButton:!0,to:`/coins/${u.id}`},u.id))}),r&&y.jsx("div",{className:"load-more-container",children:y.jsx("button",{onClick:i,disabled:e,className:"load-more-button",children:e?"Loading...":"Load More"})})]})]})},yh=({query:t})=>{const{data:e=[],isLoading:n,isError:r,error:i}=ru(t,{skip:t.trim()===""});return y.jsxs("div",{className:"search-results",children:[n&&y.jsx("div",{className:"loading",children:"Searching coins..."}),r&&y.jsxs("div",{className:"error",children:["Search error: ",String(i)]}),e.length>0?y.jsx("div",{className:"coins-grid",children:e.map(s=>y.jsx(Ro,{id:s.id,image:s.thumb,name:s.name,symbol:s.symbol,rank:s.market_cap_rank||void 0,to:`/coins/${s.id}`,showFavoriteButton:!1},s.id))}):!n&&t!==""&&y.jsxs("div",{className:"no-results",children:['No cryptocurrencies found for "',t,'"']})]})},vh=()=>{const[t,e]=D.useState(1),[n,r]=D.useState([]),[i,s]=D.useState(""),{data:o=[],isLoading:c,error:a}=nu(t,{skip:i!==""});D.useEffect(()=>{o.length>0&&r(f=>[...f,...o.filter(g=>!f.some(l=>l.id===g.id))])},[o]);const u=()=>{o.length===20&&i===""&&e(f=>f+1)};return y.jsxs("div",{className:"crypto-list",children:[y.jsx("h1",{className:"list-header",children:i?"Search Results":"Top Cryptocurrencies"}),y.jsx(mh,{onSearchQueryChange:s}),i?y.jsx(yh,{query:i}):y.jsx(gh,{coins:n,isLoading:c,error:a?String(a):null,hasMore:o.length===20,onLoadMore:u})]})},_h=()=>{const{id:t}=ns(),{data:e,isLoading:n,isError:r,error:i}=iu(t??"",{skip:!t});return n?y.jsx("div",{className:"loading",children:"Loading coin details..."}):r?y.jsxs("div",{className:"error",children:["Error: ",String(i)]}):e?y.jsxs("div",{className:"coin-details-page",children:[y.jsxs("div",{className:"coin-header",children:[y.jsx("img",{src:e.image.large,alt:e.name,className:"coin-image-large"}),y.jsx("div",{className:"coin-title",children:y.jsxs("h1",{children:[e.name," (",e.symbol.toUpperCase(),")"]})})]}),y.jsxs("div",{className:"coin-stats",children:[y.jsxs("div",{className:"stat-card",children:[y.jsx("h3",{children:"Current Price"}),y.jsxs("p",{className:"stat-value",children:["$",e.market_data.current_price.usd.toLocaleString()]})]}),y.jsxs("div",{className:"stat-card",children:[y.jsx("h3",{children:"Market Cap"}),y.jsxs("p",{className:"stat-value",children:["$",e.market_data.market_cap.usd.toLocaleString()]})]}),y.jsxs("div",{className:"stat-card",children:[y.jsx("h3",{children:"24h Change"}),y.jsxs("p",{className:"stat-value",style:{color:e.market_data.price_change_percentage_24h>=0?"green":"red",fontWeight:"bold"},children:[e.market_data.price_change_percentage_24h.toFixed(2),"%"]})]})]}),y.jsxs("div",{className:"coin-description",children:[y.jsxs("h2",{children:["About ",e.name]}),y.jsx("div",{className:"description-content",dangerouslySetInnerHTML:{__html:e.description.en}})]}),y.jsxs("div",{className:"coin-links",children:[y.jsx("h2",{children:"Official Links"}),y.jsx("ul",{children:e.links.homepage.filter(s=>s).map((s,o)=>y.jsx("li",{children:y.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"link-button",children:s})},o))})]})]}):y.jsx("div",{className:"no-data",children:"No coin data available"})},bh=()=>{const{id:t}=ns(),e={"1D":1,"7D":7,"1M":30,"3M":90,"1Y":365},n=7,[r,{data:i,isLoading:s,isError:o,error:c}]=ou();if(Mo.useEffect(()=>{t&&r({id:t,days:n})},[t,r]),s)return y.jsx("div",{className:"loading",children:"Loading coin Chart..."});if(o)return y.jsxs("div",{className:"error",children:["Error: ",String(c)]});if(!i||!i.prices)return y.jsx("div",{className:"no-data",children:"No Chart available"});const a=i.prices.map(([u,f])=>({time:new Date(u).toLocaleDateString(),price:f}));return y.jsxs("div",{className:"crypto-chart",children:[y.jsx(jo,{width:"100%",height:300,children:y.jsxs(Uo,{data:a,children:[y.jsx(Fo,{dataKey:"time"}),y.jsx(Bo,{domain:["auto","auto"]}),y.jsx($o,{formatter:u=>[`$${Number(u).toFixed(2)}`,"Price"],labelStyle:{color:"#333",fontWeight:"bold"}}),y.jsx(qo,{type:"monotone",dataKey:"price",stroke:"red",strokeWidth:2,dot:!1,activeDot:{r:6,strokeWidth:0}})]})}),y.jsx("div",{className:"chart-controls",children:Object.entries(e).map(([u,f])=>y.jsx("button",{onClick:()=>t&&r({id:t,days:f}),className:"chart-period-button",children:u},f))})]})},Po=()=>Mt(),wh=ct,Ih=({coinId:t})=>{var c,a,u,f,g,l;const e=Po(),n=ct(h=>h.favorites.favoriteCoins),{data:r,isLoading:i}=su(t),s=n.includes(t),o=()=>{e(ws(t))};return y.jsxs("div",{className:"coin-item",children:[i?y.jsx("div",{children:"Loading..."}):y.jsxs(Et,{to:`/coins/${t}`,children:[y.jsx("img",{src:(c=r==null?void 0:r.image)==null?void 0:c.large,alt:r==null?void 0:r.name}),y.jsxs("div",{children:[y.jsxs("h2",{children:[r==null?void 0:r.name," (",r==null?void 0:r.symbol.toUpperCase(),")"]}),y.jsxs("p",{children:["Price: $",((f=(u=(a=r==null?void 0:r.market_data)==null?void 0:a.current_price)==null?void 0:u.usd)==null?void 0:f.toLocaleString())??"N/A"]}),y.jsxs("p",{children:["24h Change"," ",((l=(g=r==null?void 0:r.market_data)==null?void 0:g.price_change_percentage_24h)==null?void 0:l.toFixed(2))??"N/A","%"]})]})]}),y.jsx("button",{onClick:o,className:"favorite-button",title:s?"Remove from Favorites":"Add to Favorites",children:s?"★":"☆"})]})},Eh=()=>{const{favoriteCoins:t}=ct(e=>e.favorites);return t.length===0?y.jsx("p",{children:"No favorite coins added yet."}):y.jsx("div",{children:t.map(e=>y.jsx(Ih,{coinId:e},e))})},Sh=()=>{const{favoriteCoins:t}=ct(e=>e.favorites);return y.jsxs("div",{children:[y.jsx("h1",{children:"Your Favorite Cryptocurrencies"}),t.length===0?y.jsx("p",{children:"No favorite coins added yet."}):y.jsx(Eh,{})]})};function Ch(){const t=Po(),{user:e,isAuthenticated:n}=wh(r=>r.auth);return D.useEffect(()=>{const r=Qd(Sn,i=>{t(i?Ar({email:i.email,uid:i.uid}):uc())});return()=>r()},[t]),y.jsxs(xo,{children:[y.jsx("nav",{className:"navbar",children:y.jsxs("div",{className:"nav-links",children:[!n&&y.jsxs(y.Fragment,{children:[y.jsx(Qt,{to:"/register",className:"nav-link",children:"Register"}),y.jsx(Qt,{to:"/login",className:"nav-link",children:"Login"})]}),y.jsx(Qt,{to:"/coins",className:"nav-link",children:"Coins"}),n&&y.jsxs(y.Fragment,{children:[y.jsx(Qt,{to:"/favorites",className:"nav-link",children:"Favorites"}),y.jsxs("div",{className:"user-info",children:[y.jsx("span",{children:e==null?void 0:e.email}),y.jsx("button",{onClick:()=>Sn.signOut(),className:"logout-button",children:"Logout"})]})]})]})}),y.jsx("div",{className:"content-container",children:y.jsxs(Lo,{children:[y.jsx(Fe,{path:"/register",element:n?y.jsx(Be,{to:"/coins"}):y.jsx(fh,{})}),y.jsx(Fe,{path:"/login",element:n?y.jsx(Be,{to:"/coins"}):y.jsx(ph,{})}),y.jsx(Fe,{path:"/coins",element:n?y.jsx(vh,{}):y.jsx(Be,{to:"/login"})}),y.jsx(Fe,{path:"/favorites",element:n?y.jsx(Sh,{}):y.jsx(Be,{to:"/login"})}),y.jsx(Fe,{path:"/coins/:id",element:n?y.jsxs(y.Fragment,{children:[y.jsx(_h,{}),y.jsx(bh,{})]}):y.jsx(Be,{to:"/login"})}),y.jsx(Fe,{path:"/",element:y.jsx(Be,{to:n?"/coins":"/login",replace:!0})}),y.jsx(Fe,{path:"*",element:y.jsx(Be,{to:n?"/coins":"/login",replace:!0})})]})})]})}zo.createRoot(document.getElementById("root")).render(y.jsx(D.StrictMode,{children:y.jsx(oa,{store:cu,children:y.jsx(Ch,{})})}));
