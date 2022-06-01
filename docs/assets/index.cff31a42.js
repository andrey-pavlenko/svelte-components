var ni=Object.defineProperty,si=Object.defineProperties;var li=Object.getOwnPropertyDescriptors;var nn=Object.getOwnPropertySymbols;var gs=Object.prototype.hasOwnProperty,_s=Object.prototype.propertyIsEnumerable;var hs=(s,e,t)=>e in s?ni(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ze=(s,e)=>{for(var t in e||(e={}))gs.call(e,t)&&hs(s,t,e[t]);if(nn)for(var t of nn(e))_s.call(e,t)&&hs(s,t,e[t]);return s},Rt=(s,e)=>si(s,li(e));var zn=(s,e)=>{var t={};for(var n in s)gs.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&nn)for(var n of nn(s))e.indexOf(n)<0&&_s.call(s,n)&&(t[n]=s[n]);return t};var oi=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var Ue=(s,e,t)=>new Promise((n,l)=>{var o=a=>{try{r(t.next(a))}catch(c){l(c)}},i=a=>{try{r(t.throw(a))}catch(c){l(c)}},r=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,i);r((t=t.apply(s,e)).next())});var ph=oi(ti=>{const ii=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}};ii();function Q(){}const no=s=>s;function Xe(s,e){for(const t in e)s[t]=e[t];return s}function ri(s){return s&&typeof s=="object"&&typeof s.then=="function"}function so(s){return s()}function bs(){return Object.create(null)}function Me(s){s.forEach(so)}function it(s){return typeof s=="function"}function K(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}let sn;function $s(s,e){return sn||(sn=document.createElement("a")),sn.href=e,s===sn.href}function ai(s){return Object.keys(s).length===0}function lo(s,...e){if(s==null)return Q;const t=s.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Pt(s,e,t){s.$$.on_destroy.push(lo(e,t))}function ke(s,e,t,n){if(s){const l=oo(s,e,t,n);return s[0](l)}}function oo(s,e,t,n){return s[1]&&n?Xe(t.ctx.slice(),s[1](n(e))):t.ctx}function ye(s,e,t,n){if(s[2]&&n){const l=s[2](n(t));if(e.dirty===void 0)return l;if(typeof l=="object"){const o=[],i=Math.max(e.dirty.length,l.length);for(let r=0;r<i;r+=1)o[r]=e.dirty[r]|l[r];return o}return e.dirty|l}return e.dirty}function Te(s,e,t,n,l,o){if(l){const i=oo(e,t,n,o);s.p(i,l)}}function xe(s){if(s.ctx.length>32){const e=[],t=s.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function io(s){const e={};for(const t in s)t[0]!=="$"&&(e[t]=s[t]);return e}function mn(s,e){const t={};e=new Set(e);for(const n in s)!e.has(n)&&n[0]!=="$"&&(t[n]=s[n]);return t}function Ge(s){return s&&it(s.destroy)?s.destroy:Q}const ro=typeof window!="undefined";let ci=ro?()=>window.performance.now():()=>Date.now(),Jn=ro?s=>requestAnimationFrame(s):Q;const It=new Set;function ao(s){It.forEach(e=>{e.c(s)||(It.delete(e),e.f())}),It.size!==0&&Jn(ao)}function ui(s){let e;return It.size===0&&Jn(ao),{promise:new Promise(t=>{It.add(e={c:s,f:t})}),abort(){It.delete(e)}}}function h(s,e){s.appendChild(e)}function co(s){if(!s)return document;const e=s.getRootNode?s.getRootNode():s.ownerDocument;return e&&e.host?e:s.ownerDocument}function fi(s){const e=b("style");return di(co(s),e),e.sheet}function di(s,e){h(s.head||s,e)}function v(s,e,t){s.insertBefore(e,t||null)}function w(s){s.parentNode.removeChild(s)}function He(s,e){for(let t=0;t<s.length;t+=1)s[t]&&s[t].d(e)}function b(s){return document.createElement(s)}function pi(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function L(s){return document.createTextNode(s)}function T(){return L(" ")}function ge(){return L("")}function Z(s,e,t,n){return s.addEventListener(e,t,n),()=>s.removeEventListener(e,t,n)}function ws(s){return function(e){return e.preventDefault(),s.call(this,e)}}function mi(s){return function(e){e.target===this&&s.call(this,e)}}function g(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function vs(s,e){const t=Object.getOwnPropertyDescriptors(s.__proto__);for(const n in e)e[n]==null?s.removeAttribute(n):n==="style"?s.style.cssText=e[n]:n==="__value"?s.value=s[n]=e[n]:t[n]&&t[n].set?s[n]=e[n]:g(s,n,e[n])}function Ye(s){return s===""?null:+s}function hi(s){return Array.from(s.childNodes)}function $e(s,e){e=""+e,s.wholeText!==e&&(s.data=e)}function qe(s,e){s.value=e==null?"":e}function Be(s,e,t,n){t===null?s.style.removeProperty(e):s.style.setProperty(e,t,n?"important":"")}function ot(s,e){for(let t=0;t<s.options.length;t+=1){const n=s.options[t];if(n.__value===e){n.selected=!0;return}}s.selectedIndex=-1}function qt(s){const e=s.querySelector(":checked")||s.options[0];return e&&e.__value}function We(s,e,t){s.classList[t?"add":"remove"](e)}function uo(s,e,{bubbles:t=!1,cancelable:n=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(s,t,n,e),l}class fo{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=pi(t.nodeName):this.e=b(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}const hn=new Map;let gn=0;function gi(s){let e=5381,t=s.length;for(;t--;)e=(e<<5)-e^s.charCodeAt(t);return e>>>0}function _i(s,e){const t={stylesheet:fi(e),rules:{}};return hn.set(s,t),t}function ks(s,e,t,n,l,o,i,r=0){const a=16.666/n;let c=`{
`;for(let $=0;$<=1;$+=a){const E=e+(t-e)*o($);c+=$*100+`%{${i(E,1-E)}}
`}const u=c+`100% {${i(t,1-t)}}
}`,f=`__svelte_${gi(u)}_${r}`,d=co(s),{stylesheet:p,rules:m}=hn.get(d)||_i(d,s);m[f]||(m[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const _=s.style.animation||"";return s.style.animation=`${_?`${_}, `:""}${f} ${n}ms linear ${l}ms 1 both`,gn+=1,f}function bi(s,e){const t=(s.style.animation||"").split(", "),n=t.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),l=t.length-n.length;l&&(s.style.animation=n.join(", "),gn-=l,gn||$i())}function $i(){Jn(()=>{gn||(hn.forEach(s=>{const{stylesheet:e}=s;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);s.rules={}}),hn.clear())})}let Wt;function at(s){Wt=s}function bt(){if(!Wt)throw new Error("Function called outside component initialization");return Wt}function An(s){bt().$$.on_mount.push(s)}function wi(s){bt().$$.after_update.push(s)}function Zn(s){bt().$$.on_destroy.push(s)}function es(){const s=bt();return(e,t,{cancelable:n=!1}={})=>{const l=s.$$.callbacks[e];if(l){const o=uo(e,t,{cancelable:n});return l.slice().forEach(i=>{i.call(s,o)}),!o.defaultPrevented}return!0}}function ts(s,e){return bt().$$.context.set(s,e),e}function Ft(s){return bt().$$.context.get(s)}function vi(s){return bt().$$.context.has(s)}const jt=[],De=[],un=[],Kn=[],po=Promise.resolve();let Xn=!1;function mo(){Xn||(Xn=!0,po.then(ns))}function ho(){return mo(),po}function Ze(s){un.push(s)}function yt(s){Kn.push(s)}const Bn=new Set;let ln=0;function ns(){const s=Wt;do{for(;ln<jt.length;){const e=jt[ln];ln++,at(e),ki(e.$$)}for(at(null),jt.length=0,ln=0;De.length;)De.pop()();for(let e=0;e<un.length;e+=1){const t=un[e];Bn.has(t)||(Bn.add(t),t())}un.length=0}while(jt.length);for(;Kn.length;)Kn.pop()();Xn=!1,Bn.clear(),at(s)}function ki(s){if(s.fragment!==null){s.update(),Me(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(Ze)}}let Ht;function yi(){return Ht||(Ht=Promise.resolve(),Ht.then(()=>{Ht=null})),Ht}function Hn(s,e,t){s.dispatchEvent(uo(`${e?"intro":"outro"}${t}`))}const fn=new Set;let ct;function re(){ct={r:0,c:[],p:ct}}function ae(){ct.r||Me(ct.c),ct=ct.p}function k(s,e){s&&s.i&&(fn.delete(s),s.i(e))}function y(s,e,t,n){if(s&&s.o){if(fn.has(s))return;fn.add(s),ct.c.push(()=>{fn.delete(s),n&&(t&&s.d(1),n())}),s.o(e)}}const Ti={duration:0};function ht(s,e,t,n){let l=e(s,t),o=n?0:1,i=null,r=null,a=null;function c(){a&&bi(s,a)}function u(d,p){const m=d.b-o;return p*=Math.abs(m),{a:o,b:d.b,d:m,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:m=300,easing:_=no,tick:$=Q,css:E}=l||Ti,x={start:ci()+p,b:d};d||(x.group=ct,ct.r+=1),i||r?r=x:(E&&(c(),a=ks(s,o,d,m,p,_,E)),d&&$(0,1),i=u(x,m),Ze(()=>Hn(s,d,"start")),ui(R=>{if(r&&R>r.start&&(i=u(r,m),r=null,Hn(s,i.b,"start"),E&&(c(),a=ks(s,o,i.b,i.duration,0,_,l.css))),i){if(R>=i.end)$(o=i.b,1-o),Hn(s,i.b,"end"),r||(i.b?c():--i.group.r||Me(i.group.c)),i=null;else if(R>=i.start){const N=R-i.start;o=i.a+i.d*_(N/i.duration),$(o,1-o)}}return!!(i||r)}))}return{run(d){it(l)?yi().then(()=>{l=l(),f(d)}):f(d)},end(){c(),i=r=null}}}function _n(s,e){const t=e.token={};function n(l,o,i,r){if(e.token!==t)return;e.resolved=r;let a=e.ctx;i!==void 0&&(a=a.slice(),a[i]=r);const c=l&&(e.current=l)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==o&&f&&(re(),y(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),ae())}):e.block.d(1),c.c(),k(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[o]=c),u&&ns()}if(ri(s)){const l=bt();if(s.then(o=>{at(l),n(e.then,1,e.value,o),at(null)},o=>{if(at(l),n(e.catch,2,e.error,o),at(null),!e.hasCatch)throw o}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,s),!0;e.resolved=s}}function go(s,e,t){const n=e.slice(),{resolved:l}=s;s.current===s.then&&(n[s.value]=l),s.current===s.catch&&(n[s.error]=l),s.block.p(n,t)}const zt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function xi(s,e){y(s,1,1,()=>{e.delete(s.key)})}function Ei(s,e,t,n,l,o,i,r,a,c,u,f){let d=s.length,p=o.length,m=d;const _={};for(;m--;)_[s[m].key]=m;const $=[],E=new Map,x=new Map;for(m=p;m--;){const O=f(l,o,m),P=t(O);let D=i.get(P);D?n&&D.p(O,e):(D=c(P,O),D.c()),E.set(P,$[m]=D),P in _&&x.set(P,Math.abs(m-_[P]))}const R=new Set,N=new Set;function M(O){k(O,1),O.m(r,u),i.set(O.key,O),u=O.first,p--}for(;d&&p;){const O=$[p-1],P=s[d-1],D=O.key,F=P.key;O===P?(u=O.first,d--,p--):E.has(F)?!i.has(D)||R.has(D)?M(O):N.has(F)?d--:x.get(D)>x.get(F)?(N.add(D),M(O)):(R.add(F),d--):(a(P,i),d--)}for(;d--;){const O=s[d];E.has(O.key)||a(O,i)}for(;p;)M($[p-1]);return $}function Tt(s,e){const t={},n={},l={$$scope:1};let o=s.length;for(;o--;){const i=s[o],r=e[o];if(r){for(const a in i)a in r||(n[a]=1);for(const a in r)l[a]||(t[a]=r[a],l[a]=1);s[o]=r}else for(const a in i)l[a]=1}for(const i in n)i in t||(t[i]=void 0);return t}function Bt(s){return typeof s=="object"&&s!==null?s:{}}function gt(s,e,t){const n=s.$$.props[e];n!==void 0&&(s.$$.bound[n]=t,t(s.$$.ctx[n]))}function A(s){s&&s.c()}function S(s,e,t,n){const{fragment:l,on_mount:o,on_destroy:i,after_update:r}=s.$$;l&&l.m(e,t),n||Ze(()=>{const a=o.map(so).filter(it);i?i.push(...a):Me(a),s.$$.on_mount=[]}),r.forEach(Ze)}function C(s,e){const t=s.$$;t.fragment!==null&&(Me(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Si(s,e){s.$$.dirty[0]===-1&&(jt.push(s),mo(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function Y(s,e,t,n,l,o,i,r=[-1]){const a=Wt;at(s);const c=s.$$={fragment:null,ctx:null,props:o,update:Q,not_equal:l,bound:bs(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:bs(),dirty:r,skip_bound:!1,root:e.target||a.$$.root};i&&i(c.root);let u=!1;if(c.ctx=t?t(s,e.props||{},(f,d,...p)=>{const m=p.length?p[0]:d;return c.ctx&&l(c.ctx[f],c.ctx[f]=m)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](m),u&&Si(s,f)),d}):[],c.update(),u=!0,Me(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=hi(e.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&k(s.$$.fragment),S(s,e.target,e.anchor,e.customElement),ns()}at(a)}class V{$destroy(){C(this,1),this.$destroy=Q}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const l=n.indexOf(t);l!==-1&&n.splice(l,1)}}$set(e){this.$$set&&!ai(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Nt=[];function Ci(s,e){return{subscribe:Lt(s,e).subscribe}}function Lt(s,e=Q){let t;const n=new Set;function l(r){if(K(s,r)&&(s=r,t)){const a=!Nt.length;for(const c of n)c[1](),Nt.push(c,s);if(a){for(let c=0;c<Nt.length;c+=2)Nt[c][0](Nt[c+1]);Nt.length=0}}}function o(r){l(r(s))}function i(r,a=Q){const c=[r,a];return n.add(c),n.size===1&&(t=e(l)||Q),r(s),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:l,update:o,subscribe:i}}function Ai(s,e,t){const n=!Array.isArray(s),l=n?[s]:s,o=e.length<2;return Ci(t,i=>{let r=!1;const a=[];let c=0,u=Q;const f=()=>{if(c)return;u();const p=e(n?a[0]:a,i);o?i(p):u=it(p)?p:Q},d=l.map((p,m)=>lo(p,_=>{a[m]=_,c&=~(1<<m),r&&f()},()=>{c|=1<<m}));return r=!0,f(),function(){Me(d),u()}})}function Yn(s,e=!1){return s=s.slice(s.startsWith("/#")?2:0,s.endsWith("/*")?-2:void 0),s.startsWith("/")||(s="/"+s),s==="/"&&(s=""),e&&!s.endsWith("/")&&(s+="/"),s}function Ri(s,e){s=Yn(s,!0),e=Yn(e,!0);let t=[],n={},l=!0,o=s.split("/").map(r=>r.startsWith(":")?(t.push(r.slice(1)),"([^\\/]+)"):r).join("\\/"),i=e.match(new RegExp(`^${o}$`));return i||(l=!1,i=e.match(new RegExp(`^${o}`))),i?(t.forEach((r,a)=>n[r]=i[a+1]),{exact:l,params:n,part:i[0].slice(0,-1)}):null}function _o(s,e,t){if(t==="")return s;if(t[0]==="/")return t;let n=i=>i.split("/").filter(r=>r!==""),l=n(s),o=e?n(e):[];return"/"+o.map((i,r)=>l[r]).join("/")+"/"+t}function ys(s,e,t,n){let l=[e,"data-"+e].reduce((o,i)=>{let r=s.getAttribute(i);return t&&s.removeAttribute(i),r===null?o:r},!1);return!n&&l===""?!0:l||n||!1}function Ni(s){let e=s.split("&").map(t=>t.split("=")).reduce((t,n)=>{let l=n[0];if(!l)return t;let o=n.length>1?n[n.length-1]:!0;return typeof o=="string"&&o.includes(",")&&(o=o.split(",")),t[l]===void 0?t[l]=[o]:t[l].push(o),t},{});return Object.entries(e).reduce((t,n)=>(t[n[0]]=n[1].length>1?n[1]:n[1][0],t),{})}function Mi(s){return Object.entries(s).map(([e,t])=>t?t===!0?e:`${e}=${Array.isArray(t)?t.join(","):t}`:null).filter(e=>e).join("&")}function Ts(s,e){return s?e+s:""}function bo(s){throw new Error("[Tinro] "+s)}var tt={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run(s,e,t,n){return s===this.HISTORY?e&&e():s===this.HASH?t&&t():n&&n()},getDefault(){return!window||window.location.pathname==="srcdoc"?this.MEMORY:this.HISTORY}},ss,$o,wo,bn="",Je=Oi();function Oi(){let s=tt.getDefault(),e,t=i=>window.onhashchange=window.onpopstate=ss=null,n=i=>e&&e(jn(s)),l=i=>{i&&(s=i),t(),s!==tt.OFF&&tt.run(s,r=>window.onpopstate=n,r=>window.onhashchange=n)&&n()},o=i=>{let r=Object.assign(jn(s),i);return r.path+Ts(Mi(r.query),"?")+Ts(r.hash,"#")};return{mode:l,get:i=>jn(s),go(i,r){Pi(s,i,r),n()},start(i){e=i,l()},stop(){e=null,l(tt.OFF)},set(i){this.go(o(i),!i.path)},methods(){return Ii(this)},base:i=>bn=i}}function Pi(s,e,t){!t&&($o=wo);let n=l=>history[`${t?"replace":"push"}State`]({},"",l);tt.run(s,l=>n(bn+e),l=>n(`#${e}`),l=>ss=e)}function jn(s){let e=window.location,t=tt.run(s,l=>(bn?e.pathname.replace(bn,""):e.pathname)+e.search+e.hash,l=>String(e.hash.slice(1)||"/"),l=>ss||"/"),n=t.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return wo=t,{url:t,from:$o,path:n[1]||"",query:Ni(n[2]||""),hash:n[3]||""}}function Ii(s){let e=()=>s.get().query,t=i=>s.set({query:i}),n=i=>t(i(e())),l=()=>s.get().hash,o=i=>s.set({hash:i});return{hash:{get:l,set:o,clear:()=>o("")},query:{replace:t,clear:()=>t(""),get(i){return i?e()[i]:e()},set(i,r){n(a=>(a[i]=r,a))},delete(i){n(r=>(r[i]&&delete r[i],r))}}}}var $n=Li();function Li(){let{subscribe:s}=Lt(Je.get(),e=>{Je.start(e);let t=Di(Je.go);return()=>{Je.stop(),t()}});return{subscribe:s,goto:Je.go,params:Fi,meta:Hi,useHashNavigation:e=>Je.mode(e?tt.HASH:tt.HISTORY),mode:{hash:()=>Je.mode(tt.HASH),history:()=>Je.mode(tt.HISTORY),memory:()=>Je.mode(tt.MEMORY)},base:Je.base,location:Je.methods()}}function Di(s){let e=t=>{let n=t.target.closest("a[href]"),l=n&&ys(n,"target",!1,"_self"),o=n&&ys(n,"tinro-ignore"),i=t.ctrlKey||t.metaKey||t.altKey||t.shiftKey;if(l=="_self"&&!o&&!i&&n){let r=n.getAttribute("href").replace(/^\/#/,"");/^\/\/|^#|^[a-zA-Z]+:/.test(r)||(t.preventDefault(),s(r.startsWith("/")?r:n.href.replace(window.location.origin,"")))}};return addEventListener("click",e),()=>removeEventListener("click",e)}function Fi(){return Ft("tinro").meta.params}var wn="tinro",zi=vo({pattern:"",matched:!0});function Bi(s){let e=Ft(wn)||zi;(e.exact||e.fallback)&&bo(`${s.fallback?"<Route fallback>":`<Route path="${s.path}">`}  can't be inside ${e.fallback?"<Route fallback>":`<Route path="${e.path||"/"}"> with exact path`}`);let t=s.fallback?"fallbacks":"childs",n=Lt({}),l=vo({fallback:s.fallback,parent:e,update(o){l.exact=!o.path.endsWith("/*"),l.pattern=Yn(`${l.parent.pattern||""}${o.path}`),l.redirect=o.redirect,l.firstmatch=o.firstmatch,l.breadcrumb=o.breadcrumb,l.match()},register:()=>(l.parent[t].add(l),()=>Ue(this,null,function*(){l.parent[t].delete(l),l.parent.activeChilds.delete(l),l.router.un&&l.router.un(),l.parent.match()})),show:()=>{s.onShow(),!l.fallback&&l.parent.activeChilds.add(l)},hide:()=>{s.onHide(),l.parent.activeChilds.delete(l)},match:()=>Ue(this,null,function*(){l.matched=!1;let{path:o,url:i,from:r,query:a}=l.router.location,c=Ri(l.pattern,o);if(!l.fallback&&c&&l.redirect&&(!l.exact||l.exact&&c.exact)){let u=_o(o,l.parent.pattern,l.redirect);return $n.goto(u,!0)}l.meta=c&&{from:r,url:i,query:a,match:c.part,pattern:l.pattern,breadcrumbs:l.parent.meta&&l.parent.meta.breadcrumbs.slice()||[],params:c.params,subscribe:n.subscribe},l.breadcrumb&&l.meta&&l.meta.breadcrumbs.push({name:l.breadcrumb,path:c.part}),n.set(l.meta),c&&!l.fallback&&(!l.exact||l.exact&&c.exact)&&(!l.parent.firstmatch||!l.parent.matched)?(s.onMeta(l.meta),l.parent.matched=!0,l.show()):l.hide(),c&&l.showFallbacks()})});return ts(wn,l),An(()=>l.register()),l}function Hi(){return vi(wn)?Ft(wn).meta:bo("meta() function must be run inside any `<Route>` child component only")}function vo(s){let e={router:{},exact:!1,pattern:null,meta:null,parent:null,fallback:!1,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,showFallbacks(){return Ue(this,null,function*(){if(!this.fallback&&(yield ho(),this.childs.size>0&&this.activeChilds.size==0||this.childs.size==0&&this.fallbacks.size>0)){let n=this;for(;n.fallbacks.size==0;)if(n=n.parent,!n)return;n&&n.fallbacks.forEach(l=>{if(l.redirect){let o=_o("/",l.parent.pattern,l.redirect);$n.goto(o,!0)}else l.show()})}})},start(){this.router.un||(this.router.un=$n.subscribe(n=>{this.router.location=n,this.pattern!==null&&this.match()}))},match(){this.showFallbacks()}};return Object.assign(e,s),e.start(),e}const ji=s=>({params:s&2,meta:s&4}),xs=s=>({params:s[1],meta:s[2]});function Es(s){let e;const t=s[9].default,n=ke(t,s,s[8],xs);return{c(){n&&n.c()},m(l,o){n&&n.m(l,o),e=!0},p(l,o){n&&n.p&&(!e||o&262)&&Te(n,t,l,l[8],e?ye(t,l[8],o,ji):xe(l[8]),xs)},i(l){e||(k(n,l),e=!0)},o(l){y(n,l),e=!1},d(l){n&&n.d(l)}}}function Ui(s){let e,t,n=s[0]&&Es(s);return{c(){n&&n.c(),e=ge()},m(l,o){n&&n.m(l,o),v(l,e,o),t=!0},p(l,[o]){l[0]?n?(n.p(l,o),o&1&&k(n,1)):(n=Es(l),n.c(),k(n,1),n.m(e.parentNode,e)):n&&(re(),y(n,1,1,()=>{n=null}),ae())},i(l){t||(k(n),t=!0)},o(l){y(n),t=!1},d(l){n&&n.d(l),l&&w(e)}}}function qi(s,e,t){let{$$slots:n={},$$scope:l}=e,{path:o="/*"}=e,{fallback:i=!1}=e,{redirect:r=!1}=e,{firstmatch:a=!1}=e,{breadcrumb:c=null}=e,u=!1,f={},d={};const p=Bi({fallback:i,onShow(){t(0,u=!0)},onHide(){t(0,u=!1)},onMeta(m){t(2,d=m),t(1,f=d.params)}});return s.$$set=m=>{"path"in m&&t(3,o=m.path),"fallback"in m&&t(4,i=m.fallback),"redirect"in m&&t(5,r=m.redirect),"firstmatch"in m&&t(6,a=m.firstmatch),"breadcrumb"in m&&t(7,c=m.breadcrumb),"$$scope"in m&&t(8,l=m.$$scope)},s.$$.update=()=>{s.$$.dirty&232&&p.update({path:o,redirect:r,firstmatch:a,breadcrumb:c})},[u,f,d,o,i,r,a,c,l,n]}class Mt extends V{constructor(e){super(),Y(this,e,qi,Ui,K,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}}const{document:Ss}=zt;function Wi(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M,O,P,D,F,j,U,W,le,we,ee,I,B;return Ss.title=e=document.title.replace(/(•).*$/,"$1 Home"),{c(){t=T(),n=b("section"),l=b("h1"),l.textContent="Packages",o=T(),i=b("ul"),r=b("li"),r.innerHTML=`<a href="/tabs">Tabs</a> \u2013 A set of components for organizing a tabbed interface
      <a href="https://www.npmjs.com/package/@apsc/tabs" target="_blank">NPM</a>`,a=T(),c=b("li"),c.innerHTML=`<a href="/glob-notify">GlobNotify</a> \u2013 Component for notifications globally for the
      entire application
      <a href="https://www.npmjs.com/package/@apsc/glob-notify" target="_blank">NPM</a>`,u=T(),f=b("li"),d=b("a"),d.textContent="Floating UI",p=L(`
      action for directive `),m=b("code"),_=L("use"),$=T(),E=b("a"),E.textContent="NPM",x=T(),R=b("li"),N=b("a"),N.textContent="Action",M=L(` to control
      `),O=b("code"),P=L("focusin"),D=L(`
      and
      `),F=b("code"),j=L("focusout"),U=L(`
      for directive `),W=b("code"),le=L("use"),we=T(),ee=b("a"),ee.textContent="NPM",I=T(),B=b("li"),B.innerHTML=`<a href="/color">Color</a> \u2013 A set of components for picking and editing colors
      <a href="https://www.npmjs.com/package/@apsc/color" target="_blank">NPM</a>`,g(l,"class","font-bold my-4 pb-2 text-3xl border-b border-gray-400"),g(d,"href","/floating-ui-action"),g(m,"class",s[0].code),g(E,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),g(E,"target","_blank"),g(N,"href","/focus-action"),g(O,"class",s[0].code),g(F,"class",s[0].code),g(W,"class",s[0].code),g(ee,"href","https://www.npmjs.com/package/@apsc/focus-action"),g(ee,"target","_blank")},m(X,oe){v(X,t,oe),v(X,n,oe),h(n,l),h(n,o),h(n,i),h(i,r),h(i,a),h(i,c),h(i,u),h(i,f),h(f,d),h(f,p),h(f,m),h(m,_),h(f,$),h(f,E),h(i,x),h(i,R),h(R,N),h(R,M),h(R,O),h(O,P),h(R,D),h(R,F),h(F,j),h(R,U),h(R,W),h(W,le),h(R,we),h(R,ee),h(i,I),h(i,B)},p(X,[oe]){oe&0&&e!==(e=document.title.replace(/(•).*$/,"$1 Home"))&&(Ss.title=e)},i:Q,o:Q,d(X){X&&w(t),X&&w(n)}}}function Gi(s){return[{code:"bg-gray-200 px-1 rounded-sm"}]}class Zi extends V{constructor(e){super(),Y(this,e,Gi,Wi,K,{})}}const ls=Symbol("TABS");function Ki({mode:s,tabs:e,selectedTab:t,panels:n,selectedPanel:l,selectedTabClass:o,hiddenPanelClass:i}){const r=Ai(t,a=>e.indexOf(a!=null?a:Symbol()));return{mode:s,registerTab:()=>{const a=Symbol("tab");return e.push(a),t.update(c=>c!=null?c:a),Zn(()=>{const c=e.indexOf(a);c>=0&&(e.splice(c,1),t.update(u=>u===a?e[c]||e[e.length-1]:u))}),a},registerPanel:()=>{const a=Symbol("panel");return n.push(a),l.update(c=>c!=null?c:a),Zn(()=>{const c=n.indexOf(a);c>=0&&(n.splice(c,1),l.update(u=>u===a?n[c]||n[n.length-1]:u))}),a},selectTab:a=>{var u;let c;typeof a=="number"?c=e.indexOf((u=e.at(a))!=null?u:Symbol()):c=e.indexOf(a),c>=0&&c<e.length&&(t.set(e[c]),l.set(n[c]))},selectedTab:t,selectedPanel:l,selectedIndex:r,selectedTabClass:o,hiddenPanelClass:i}}function Xi(s){let e,t,n;const l=s[7].default,o=ke(l,s,s[6],null);return{c(){e=b("div"),o&&o.c(),g(e,"class",t="c-tabs"+(s[0]?" "+s[0]:""))},m(i,r){v(i,e,r),o&&o.m(e,null),n=!0},p(i,[r]){o&&o.p&&(!n||r&64)&&Te(o,l,i,i[6],n?ye(l,i[6],r,null):xe(i[6]),null),(!n||r&1&&t!==(t="c-tabs"+(i[0]?" "+i[0]:"")))&&g(e,"class",t)},i(i){n||(k(o,i),n=!0)},o(i){y(o,i),n=!1},d(i){i&&w(e),o&&o.d(i)}}}function Yi(s,e,t){let{$$slots:n={},$$scope:l}=e,{class:o=""}=e,{selectedTabClass:i="active"}=e,{hiddenPanelClass:r=""}=e,{mode:a="hide"}=e;const c=[],u=[],f=Lt(null),d=Lt(null),p=Ki({mode:a,tabs:c,panels:u,selectedTab:f,selectedPanel:d,selectedTabClass:i,hiddenPanelClass:r}),m=p.selectedIndex,_=p.selectTab;return ts(ls,p),s.$$set=$=>{"class"in $&&t(0,o=$.class),"selectedTabClass"in $&&t(1,i=$.selectedTabClass),"hiddenPanelClass"in $&&t(2,r=$.hiddenPanelClass),"mode"in $&&t(3,a=$.mode),"$$scope"in $&&t(6,l=$.$$scope)},[o,i,r,a,m,_,l,n]}class nt extends V{constructor(e){super(),Y(this,e,Yi,Xi,K,{class:0,selectedTabClass:1,hiddenPanelClass:2,mode:3,selectedIndex:4,selectTab:5})}get selectedIndex(){return this.$$.ctx[4]}get selectTab(){return this.$$.ctx[5]}}function Vi(s){let e,t,n;const l=s[2].default,o=ke(l,s,s[1],null);return{c(){e=b("div"),o&&o.c(),g(e,"class",t="c-tabs__tablist"+(s[0]?" "+s[0]:""))},m(i,r){v(i,e,r),o&&o.m(e,null),n=!0},p(i,[r]){o&&o.p&&(!n||r&2)&&Te(o,l,i,i[1],n?ye(l,i[1],r,null):xe(i[1]),null),(!n||r&1&&t!==(t="c-tabs__tablist"+(i[0]?" "+i[0]:"")))&&g(e,"class",t)},i(i){n||(k(o,i),n=!0)},o(i){y(o,i),n=!1},d(i){i&&w(e),o&&o.d(i)}}}function Qi(s,e,t){let{$$slots:n={},$$scope:l}=e,{class:o=""}=e;return s.$$set=i=>{"class"in i&&t(0,o=i.class),"$$scope"in i&&t(1,l=i.$$scope)},[o,l,n]}class st extends V{constructor(e){super(),Y(this,e,Qi,Vi,K,{class:0})}}const Ji=s=>({index:s&16,tabId:s&32}),Cs=s=>({index:s[4],tabId:s[5],panelId:s[9]});function As(s){let e,t,n;const l=s[13].default,o=ke(l,s,s[12],Cs);return{c(){e=b("div"),o&&o.c(),g(e,"class",t=["c-tabs__tabpanel",s[0],s[1]].filter(Rs).join(" ")),g(e,"style",s[2])},m(i,r){v(i,e,r),o&&o.m(e,null),n=!0},p(i,r){o&&o.p&&(!n||r&4144)&&Te(o,l,i,i[12],n?ye(l,i[12],r,Ji):xe(i[12]),Cs),(!n||r&3&&t!==(t=["c-tabs__tabpanel",i[0],i[1]].filter(Rs).join(" ")))&&g(e,"class",t),(!n||r&4)&&g(e,"style",i[2])},i(i){n||(k(o,i),n=!0)},o(i){y(o,i),n=!1},d(i){i&&w(e),o&&o.d(i)}}}function er(s){let e,t,n=!s[3]&&As(s);return{c(){n&&n.c(),e=ge()},m(l,o){n&&n.m(l,o),v(l,e,o),t=!0},p(l,[o]){l[3]?n&&(re(),y(n,1,1,()=>{n=null}),ae()):n?(n.p(l,o),o&8&&k(n,1)):(n=As(l),n.c(),k(n,1),n.m(e.parentNode,e))},i(l){t||(k(n),t=!0)},o(l){y(n),t=!1},d(l){n&&n.d(l),l&&w(e)}}}const Rs=s=>!!s;function tr(s,e,t){let n,l,o,{$$slots:i={},$$scope:r}=e,{class:a=""}=e;const{mode:c,registerPanel:u,selectedPanel:f,selectedTab:d,selectedIndex:p,hiddenPanelClass:m}=Ft(ls);Pt(s,f,N=>t(11,n=N)),Pt(s,d,N=>t(5,o=N)),Pt(s,p,N=>t(4,l=N));let{hiddenClass:_=m}=e;const $=u();let E="",x,R=!0;return s.$$set=N=>{"class"in N&&t(0,a=N.class),"hiddenClass"in N&&t(10,_=N.hiddenClass),"$$scope"in N&&t(12,r=N.$$scope)},s.$$.update=()=>{s.$$.dirty&3072&&function(N){N?(t(3,R=!1),t(2,x=void 0),t(1,E="")):c!=="hide"?(t(3,R=!0),t(2,x=void 0),t(1,E="")):(t(3,R=!1),_?(t(2,x=void 0),t(1,E=_)):(t(2,x="display: none"),t(1,E="")))}(n===$)},[a,E,x,R,l,o,f,d,p,$,_,n,r,i]}class de extends V{constructor(e){super(),Y(this,e,tr,er,K,{class:0,hiddenClass:10})}}const nr=s=>({index:s&16}),Ns=s=>({index:s[4],id:s[8]});function sr(s){let e,t,n,l,o;const i=s[10].default,r=ke(i,s,s[9],Ns);return{c(){e=b("button"),r&&r.c(),g(e,"class",t=["c-tabs__tab",s[0],s[3]===s[8]?s[1]:""].filter(Ms).join(" ")),e.disabled=s[2]},m(a,c){v(a,e,c),r&&r.m(e,null),n=!0,l||(o=Z(e,"click",s[11]),l=!0)},p(a,[c]){r&&r.p&&(!n||c&528)&&Te(r,i,a,a[9],n?ye(i,a[9],c,nr):xe(a[9]),Ns),(!n||c&11&&t!==(t=["c-tabs__tab",a[0],a[3]===a[8]?a[1]:""].filter(Ms).join(" ")))&&g(e,"class",t),(!n||c&4)&&(e.disabled=a[2])},i(a){n||(k(r,a),n=!0)},o(a){y(r,a),n=!1},d(a){a&&w(e),r&&r.d(a),l=!1,o()}}}const Ms=s=>!!s;function lr(s,e,t){let n,l,{$$slots:o={},$$scope:i}=e,{class:r=""}=e;const{registerTab:a,selectTab:c,selectedTab:u,selectedIndex:f,selectedTabClass:d}=Ft(ls);Pt(s,u,E=>t(3,n=E)),Pt(s,f,E=>t(4,l=E));let{selectedClass:p=d}=e,{disabled:m=void 0}=e;const _=a(),$=()=>c(_);return s.$$set=E=>{"class"in E&&t(0,r=E.class),"selectedClass"in E&&t(1,p=E.selectedClass),"disabled"in E&&t(2,m=E.disabled),"$$scope"in E&&t(9,i=E.$$scope)},[r,p,m,n,l,c,u,f,_,i,o,$]}class pe extends V{constructor(e){super(),Y(this,e,lr,sr,K,{class:0,selectedClass:1,disabled:2})}}var or=`<div class="component__source">Source <code>Tabs.svelte</code></div>
<h1 class="component__name">Tabs</h1>
<div class="component__comment"><p>This is the root component. It&#39;s a container for one <code>TabList</code> and many <code>TabPanel</code></p>
<pre><code class="language-tsx">&lt;Tabs&gt;
  &lt;TabList&gt;
    &lt;Tab&gt;A&lt;/Tab&gt;
    &lt;Tab&gt;B&lt;/Tab&gt;
  &lt;/TabList&gt;
  &lt;TabPanel&gt;A&lt;/TabPanel&gt;
  &lt;TabPanel&gt;B&lt;/TabPanel&gt;
&lt;/Tabs&gt;
</code></pre>
<p>Child components of <code>Tabs</code> have access to the context by <code>contextName</code></p>
<pre><code class="language-ts">export type TabId = symbol;
export type PanelId = symbol;
export type TabsMode = &#39;remove&#39; | &#39;hide&#39;;
export interface TabsContext {
    mode: TabsMode;
    registerTab: () =&gt; TabId;
    registerPanel: () =&gt; PanelId;
    selectTab: (tab: TabId | number) =&gt; void;
    selectedTab: Writable&lt;symbol | null&gt;;
    selectedPanel: Writable&lt;symbol | null&gt;;
    selectedIndex: Readable&lt;number&gt;;
    selectedTabClass: string;
    hiddenPanelClass: string;
}
export const contextName = Symbol(&#39;TABS&#39;);
</code></pre>
<p>Simple style. Source <code>style.css</code></p>
<pre><code class="language-css">.c-tabs__tablist {
  display: flex;
  border-bottom: 2px solid silver;
  margin-bottom: 1em;
}
.c-tabs__tab {
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  font-size: 1.25em;
  padding: 0.25em 0.5em;
  position: relative;
  top: 3px;
}
.c-tabs__tab.active {
  background-color: silver;
  border-bottom: 4px solid gray;
}
</code></pre>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom CSS class to add to the <code>c-tabs</code> base class for custom styling purposes</p>
</td></tr>
<tr><td class="prop__name">selectedTabClass</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>'active'</code></td>
<td class="prop__description"><p>The CSS class that will be added to the child <code>Tab</code> component when it becomes selected</p>
</td></tr>
<tr><td class="prop__name">hiddenPanelClass</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>The CSS class for the <strong>unselected</strong> TabPanel. Applies when <code>mode = hide</code>. More in the <code>mode</code> prop</p>
</td></tr>
<tr><td class="prop__name">mode</td>
<td class="prop__type"><code>"remove" | "hide"</code></td>
<td class="prop__value"><code>'hide'</code></td>
<td class="prop__description"><p><code>TabPanel</code> hiding and showing mode.
<code>remove</code>: The panel will be removed from the DOM.
<code>hide</code>: the panel will be hidden by the style from the <code>hiddenPanelClass</code> CSS class, or if <code>hiddenPanelClass</code> is not specified with the style <code>display: none</code></p>
</td></tr>
<tr><td class="prop__name">selectedIndex</td>
<td class="prop__type"><code>Readable&lt;number&gt;</code></td>
<td class="prop__value"></td>
<td class="prop__description"><p>Index of selected <code>Tab</code> component</p>
<pre><code class="language-js">let selectedIndex;
tabsRef.selectedIndex.subscrive(
  (index) =&gt; selectedIndex = index
);
</code></pre>
<pre><code class="language-js">let selectedIndex = tabsRef.selectedIndex;
$: if ($selectedIndex === 0) {
  console.log(&#39;First tab selected&#39;);
}
</code></pre>
</td></tr>
<tr><td class="prop__name">selectTab</td>
<td class="prop__type"><code>(number) =&gt; void</code></td>
<td class="prop__value"></td>
<td class="prop__description"><p>Select <code>Tab</code> component by index. Allows arguments for <code>Array.prototype.at(number)</code></p>
<pre><code class="language-js">// Select first Tab
tabsRef.selectTab(0);
// Select last Tab
tabsRef.selectTab(-1);
</code></pre>
</td></tr></table>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{}</code></td></tr></table>
<hr>
<div class="component__source">Source <code>List.svelte</code></div>
<h1 class="component__name">TabList</h1>
<div class="component__comment"><p>This is a child component for <code>Tabs</code> and a container for many <code>Tab</code> components</p>
<pre><code class="language-tsx">&lt;TabList&gt;
  &lt;Tab&gt;A&lt;/Tab&gt;
  &lt;Tab&gt;B&lt;/Tab&gt;
&lt;/TabList&gt;
</code></pre>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom CSS class to add to the <code>c-tabs__tablist</code> base class for custom styling purposes</p>
</td></tr></table>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{}</code></td></tr></table>
<hr>
<div class="component__source">Source <code>Tab.svelte</code></div>
<h1 class="component__name">Tab</h1>
<div class="component__comment"><p>This is a child component for <code>TabList</code></p>
<pre><code class="language-tsx">&lt;Tab&gt;A&lt;/Tab&gt;
</code></pre>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom CSS class to add to the <code>c-tabs__tab</code> base class for custom styling purposes</p>
</td></tr>
<tr><td class="prop__name">selectedClass</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"></td>
<td class="prop__description"><p>The CSS class that will be added when <code>Tab</code> becomes selected. <em>Default value from <code>Tabs.selectedTabClass</code></em></p>
</td></tr>
<tr><td class="prop__name">disabled</td>
<td class="prop__type"><code>boolean | undefined</code></td>
<td class="prop__value"></td>
<td class="prop__description"><p>Disable <code>Tab</code> for pointer, but it&#39;s possible to select tab by function <code>Tabs.selectTab(index)</code>. <em>Default <code>undefined</code></em></p>
</td></tr></table>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{ index: any, id: any }</code></td></tr></table>
<hr>
<div class="component__source">Source <code>Panel.svelte</code></div>
<h1 class="component__name">TabPanel</h1>
<div class="component__comment"><p>This is a child component for <code>Tabs</code> and a container for tab body</p>
<pre><code class="language-tsx">&lt;Tabs&gt;
  &lt;TabList&gt;&lt;Tab&gt;A&lt;/Tab&gt;&lt;Tab&gt;B&lt;/Tab&gt;&lt;/TabList&gt;
  &lt;TabPanel&gt;A&lt;/TabPanel&gt;
  &lt;TabPanel&gt;B&lt;/TabPanel&gt;
&lt;/Tabs&gt;
</code></pre>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom CSS class to add to the <code>c-tabs__tabpanel</code> base class for custom styling purposes</p>
</td></tr>
<tr><td class="prop__name">hiddenClass</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"></td>
<td class="prop__description"><p>The CSS class that will be added when <code>TabPanel</code> becomes <strong>unselected</strong>. <em>Default value from <code>Tabs.hiddenPanelClass</code></em></p>
</td></tr></table>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{ index: any, tabId: any, panelId: any }</code></td></tr></table>`;function ir(){const s=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||s(e)},An(()=>{console.warn=s})}function Os(s,e,t){const n=s.slice();return n[18]=e[t],n}function Ps(s,e,t){const n=s.slice();return n[18]=e[t],n}function Is(s,e,t){const n=s.slice();return n[10]=e[t],n}function Ls(s,e,t){const n=s.slice();return n[13]=e[t],n[15]=t,n}function Ds(s,e,t){const n=s.slice();return n[16]=e[t],n[15]=t,n}function Fs(s,e,t){const n=s.slice();return n[7]=e[t],n}function rr(s){let e,t,n,l;const o=[fr,ur,cr],i=[];function r(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=ge()},m(a,c){i[e].m(a,c),v(a,n,c),l=!0},p(a,c){let u=e;e=r(a),e===u?i[e].p(a,c):(re(),y(i[u],1,1,()=>{i[u]=null}),ae(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),k(t,1),t.m(n.parentNode,n))},i(a){l||(k(t),l=!0)},o(a){y(t),l=!1},d(a){i[e].d(a),a&&w(n)}}}function ar(s){let e,t,n=s[1],l=[];for(let i=0;i<n.length;i+=1)l[i]=qs(Fs(s,n,i));const o=i=>y(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=ge()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);v(i,e,r),t=!0},p(i,r){if(r&34){n=i[1];let a;for(a=0;a<n.length;a+=1){const c=Fs(i,n,a);l[a]?(l[a].p(c,r),k(l[a],1)):(l[a]=qs(c),l[a].c(),k(l[a],1),l[a].m(e.parentNode,e))}for(re(),a=n.length;a<l.length;a+=1)o(a);ae()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)k(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)y(l[r]);t=!1},d(i){He(l,i),i&&w(e)}}}function cr(s){let e,t,n;const l=[s[6]];var o=s[5][s[0]];function i(r){let a={$$slots:{default:[mr]},$$scope:{ctx:r}};for(let c=0;c<l.length;c+=1)a=Xe(a,l[c]);return{props:a}}return o&&(e=new o(i(s))),{c(){e&&A(e.$$.fragment),t=ge()},m(r,a){e&&S(e,r,a),v(r,t,a),n=!0},p(r,a){const c=a&64?Tt(l,[Bt(r[6])]):{};if(a&8388706&&(c.$$scope={dirty:a,ctx:r}),o!==(o=r[5][r[0]])){if(e){re();const u=e;y(u.$$.fragment,1,0,()=>{C(u,1)}),ae()}o?(e=new o(i(r)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(r){n||(e&&k(e.$$.fragment,r),n=!0)},o(r){e&&y(e.$$.fragment,r),n=!1},d(r){r&&w(t),e&&C(e,r)}}}function ur(s){let e,t,n,l;const o=[gr,hr],i=[];function r(a,c){return a[4]?0:1}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=ge()},m(a,c){i[e].m(a,c),v(a,n,c),l=!0},p(a,c){let u=e;e=r(a),e===u?i[e].p(a,c):(re(),y(i[u],1,1,()=>{i[u]=null}),ae(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),k(t,1),t.m(n.parentNode,n))},i(a){l||(k(t),l=!0)},o(a){y(t),l=!1},d(a){i[e].d(a),a&&w(n)}}}function fr(s){let e,t,n;var l=s[5].table;function o(i){return{props:{$$slots:{default:[Sr]},$$scope:{ctx:i}}}}return l&&(e=new l(o(s))),{c(){e&&A(e.$$.fragment),t=ge()},m(i,r){e&&S(e,i,r),v(i,t,r),n=!0},p(i,r){const a={};if(r&8388716&&(a.$$scope={dirty:r,ctx:i}),l!==(l=i[5].table)){if(e){re();const c=e;y(c.$$.fragment,1,0,()=>{C(c,1)}),ae()}l?(e=new l(o(i)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(i){n||(e&&k(e.$$.fragment,i),n=!0)},o(i){e&&y(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&C(e,i)}}}function dr(s){let e=s[6].raw+"",t;return{c(){t=L(e)},m(n,l){v(n,t,l)},p(n,l){l&64&&e!==(e=n[6].raw+"")&&$e(t,e)},i:Q,o:Q,d(n){n&&w(t)}}}function pr(s){let e,t;return e=new xt({props:{tokens:s[1],renderers:s[5]}}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},p(n,l){const o={};l&2&&(o.tokens=n[1]),l&32&&(o.renderers=n[5]),e.$set(o)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function mr(s){let e,t,n,l;const o=[pr,dr],i=[];function r(a,c){return a[1]?0:1}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=ge()},m(a,c){i[e].m(a,c),v(a,n,c),l=!0},p(a,c){let u=e;e=r(a),e===u?i[e].p(a,c):(re(),y(i[u],1,1,()=>{i[u]=null}),ae(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),k(t,1),t.m(n.parentNode,n))},i(a){l||(k(t),l=!0)},o(a){y(t),l=!1},d(a){i[e].d(a),a&&w(n)}}}function hr(s){let e,t,n;const l=[{ordered:s[4]},s[6]];var o=s[5].list;function i(r){let a={$$slots:{default:[br]},$$scope:{ctx:r}};for(let c=0;c<l.length;c+=1)a=Xe(a,l[c]);return{props:a}}return o&&(e=new o(i(s))),{c(){e&&A(e.$$.fragment),t=ge()},m(r,a){e&&S(e,r,a),v(r,t,a),n=!0},p(r,a){const c=a&80?Tt(l,[a&16&&{ordered:r[4]},a&64&&Bt(r[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),o!==(o=r[5].list)){if(e){re();const u=e;y(u.$$.fragment,1,0,()=>{C(u,1)}),ae()}o?(e=new o(i(r)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(r){n||(e&&k(e.$$.fragment,r),n=!0)},o(r){e&&y(e.$$.fragment,r),n=!1},d(r){r&&w(t),e&&C(e,r)}}}function gr(s){let e,t,n;const l=[{ordered:s[4]},s[6]];var o=s[5].list;function i(r){let a={$$slots:{default:[wr]},$$scope:{ctx:r}};for(let c=0;c<l.length;c+=1)a=Xe(a,l[c]);return{props:a}}return o&&(e=new o(i(s))),{c(){e&&A(e.$$.fragment),t=ge()},m(r,a){e&&S(e,r,a),v(r,t,a),n=!0},p(r,a){const c=a&80?Tt(l,[a&16&&{ordered:r[4]},a&64&&Bt(r[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),o!==(o=r[5].list)){if(e){re();const u=e;y(u.$$.fragment,1,0,()=>{C(u,1)}),ae()}o?(e=new o(i(r)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(r){n||(e&&k(e.$$.fragment,r),n=!0)},o(r){e&&y(e.$$.fragment,r),n=!1},d(r){r&&w(t),e&&C(e,r)}}}function _r(s){let e,t,n;return e=new xt({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment),t=T()},m(l,o){S(e,l,o),v(l,t,o),n=!0},p(l,o){const i={};o&64&&(i.tokens=l[18].tokens),o&32&&(i.renderers=l[5]),e.$set(i)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){C(e,l),l&&w(t)}}}function zs(s){let e,t,n;const l=[s[18]];var o=s[5].unorderedlistitem||s[5].listitem;function i(r){let a={$$slots:{default:[_r]},$$scope:{ctx:r}};for(let c=0;c<l.length;c+=1)a=Xe(a,l[c]);return{props:a}}return o&&(e=new o(i(s))),{c(){e&&A(e.$$.fragment),t=ge()},m(r,a){e&&S(e,r,a),v(r,t,a),n=!0},p(r,a){const c=a&64?Tt(l,[Bt(r[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),o!==(o=r[5].unorderedlistitem||r[5].listitem)){if(e){re();const u=e;y(u.$$.fragment,1,0,()=>{C(u,1)}),ae()}o?(e=new o(i(r)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(r){n||(e&&k(e.$$.fragment,r),n=!0)},o(r){e&&y(e.$$.fragment,r),n=!1},d(r){r&&w(t),e&&C(e,r)}}}function br(s){let e,t,n=s[6].items,l=[];for(let i=0;i<n.length;i+=1)l[i]=zs(Os(s,n,i));const o=i=>y(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=ge()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);v(i,e,r),t=!0},p(i,r){if(r&96){n=i[6].items;let a;for(a=0;a<n.length;a+=1){const c=Os(i,n,a);l[a]?(l[a].p(c,r),k(l[a],1)):(l[a]=zs(c),l[a].c(),k(l[a],1),l[a].m(e.parentNode,e))}for(re(),a=n.length;a<l.length;a+=1)o(a);ae()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)k(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)y(l[r]);t=!1},d(i){He(l,i),i&&w(e)}}}function $r(s){let e,t,n;return e=new xt({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment),t=T()},m(l,o){S(e,l,o),v(l,t,o),n=!0},p(l,o){const i={};o&64&&(i.tokens=l[18].tokens),o&32&&(i.renderers=l[5]),e.$set(i)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){C(e,l),l&&w(t)}}}function Bs(s){let e,t,n;const l=[s[18]];var o=s[5].orderedlistitem||s[5].listitem;function i(r){let a={$$slots:{default:[$r]},$$scope:{ctx:r}};for(let c=0;c<l.length;c+=1)a=Xe(a,l[c]);return{props:a}}return o&&(e=new o(i(s))),{c(){e&&A(e.$$.fragment),t=ge()},m(r,a){e&&S(e,r,a),v(r,t,a),n=!0},p(r,a){const c=a&64?Tt(l,[Bt(r[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),o!==(o=r[5].orderedlistitem||r[5].listitem)){if(e){re();const u=e;y(u.$$.fragment,1,0,()=>{C(u,1)}),ae()}o?(e=new o(i(r)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(r){n||(e&&k(e.$$.fragment,r),n=!0)},o(r){e&&y(e.$$.fragment,r),n=!1},d(r){r&&w(t),e&&C(e,r)}}}function wr(s){let e,t,n=s[6].items,l=[];for(let i=0;i<n.length;i+=1)l[i]=Bs(Ps(s,n,i));const o=i=>y(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=ge()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);v(i,e,r),t=!0},p(i,r){if(r&96){n=i[6].items;let a;for(a=0;a<n.length;a+=1){const c=Ps(i,n,a);l[a]?(l[a].p(c,r),k(l[a],1)):(l[a]=Bs(c),l[a].c(),k(l[a],1),l[a].m(e.parentNode,e))}for(re(),a=n.length;a<l.length;a+=1)o(a);ae()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)k(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)y(l[r]);t=!1},d(i){He(l,i),i&&w(e)}}}function vr(s){let e,t,n;return e=new xt({props:{tokens:s[16].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment),t=T()},m(l,o){S(e,l,o),v(l,t,o),n=!0},p(l,o){const i={};o&4&&(i.tokens=l[16].tokens),o&32&&(i.renderers=l[5]),e.$set(i)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){C(e,l),l&&w(t)}}}function Hs(s){let e,t,n;var l=s[5].tablecell;function o(i){return{props:{header:!0,align:i[6].align[i[15]]||"center",$$slots:{default:[vr]},$$scope:{ctx:i}}}}return l&&(e=new l(o(s))),{c(){e&&A(e.$$.fragment),t=ge()},m(i,r){e&&S(e,i,r),v(i,t,r),n=!0},p(i,r){const a={};if(r&64&&(a.align=i[6].align[i[15]]||"center"),r&8388644&&(a.$$scope={dirty:r,ctx:i}),l!==(l=i[5].tablecell)){if(e){re();const c=e;y(c.$$.fragment,1,0,()=>{C(c,1)}),ae()}l?(e=new l(o(i)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(i){n||(e&&k(e.$$.fragment,i),n=!0)},o(i){e&&y(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&C(e,i)}}}function kr(s){let e,t,n=s[2],l=[];for(let i=0;i<n.length;i+=1)l[i]=Hs(Ds(s,n,i));const o=i=>y(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=ge()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);v(i,e,r),t=!0},p(i,r){if(r&100){n=i[2];let a;for(a=0;a<n.length;a+=1){const c=Ds(i,n,a);l[a]?(l[a].p(c,r),k(l[a],1)):(l[a]=Hs(c),l[a].c(),k(l[a],1),l[a].m(e.parentNode,e))}for(re(),a=n.length;a<l.length;a+=1)o(a);ae()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)k(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)y(l[r]);t=!1},d(i){He(l,i),i&&w(e)}}}function yr(s){let e,t,n;var l=s[5].tablerow;function o(i){return{props:{$$slots:{default:[kr]},$$scope:{ctx:i}}}}return l&&(e=new l(o(s))),{c(){e&&A(e.$$.fragment),t=ge()},m(i,r){e&&S(e,i,r),v(i,t,r),n=!0},p(i,r){const a={};if(r&8388708&&(a.$$scope={dirty:r,ctx:i}),l!==(l=i[5].tablerow)){if(e){re();const c=e;y(c.$$.fragment,1,0,()=>{C(c,1)}),ae()}l?(e=new l(o(i)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(i){n||(e&&k(e.$$.fragment,i),n=!0)},o(i){e&&y(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&C(e,i)}}}function Tr(s){let e,t;return e=new xt({props:{tokens:s[13].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},p(n,l){const o={};l&8&&(o.tokens=n[13].tokens),l&32&&(o.renderers=n[5]),e.$set(o)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function js(s){let e,t,n;var l=s[5].tablecell;function o(i){return{props:{header:!1,align:i[6].align[i[15]]||"center",$$slots:{default:[Tr]},$$scope:{ctx:i}}}}return l&&(e=new l(o(s))),{c(){e&&A(e.$$.fragment),t=ge()},m(i,r){e&&S(e,i,r),v(i,t,r),n=!0},p(i,r){const a={};if(r&64&&(a.align=i[6].align[i[15]]||"center"),r&8388648&&(a.$$scope={dirty:r,ctx:i}),l!==(l=i[5].tablecell)){if(e){re();const c=e;y(c.$$.fragment,1,0,()=>{C(c,1)}),ae()}l?(e=new l(o(i)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(i){n||(e&&k(e.$$.fragment,i),n=!0)},o(i){e&&y(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&C(e,i)}}}function xr(s){let e,t,n=s[10],l=[];for(let i=0;i<n.length;i+=1)l[i]=js(Ls(s,n,i));const o=i=>y(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=T()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);v(i,e,r),t=!0},p(i,r){if(r&104){n=i[10];let a;for(a=0;a<n.length;a+=1){const c=Ls(i,n,a);l[a]?(l[a].p(c,r),k(l[a],1)):(l[a]=js(c),l[a].c(),k(l[a],1),l[a].m(e.parentNode,e))}for(re(),a=n.length;a<l.length;a+=1)o(a);ae()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)k(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)y(l[r]);t=!1},d(i){He(l,i),i&&w(e)}}}function Us(s){let e,t,n;var l=s[5].tablerow;function o(i){return{props:{$$slots:{default:[xr]},$$scope:{ctx:i}}}}return l&&(e=new l(o(s))),{c(){e&&A(e.$$.fragment),t=ge()},m(i,r){e&&S(e,i,r),v(i,t,r),n=!0},p(i,r){const a={};if(r&8388712&&(a.$$scope={dirty:r,ctx:i}),l!==(l=i[5].tablerow)){if(e){re();const c=e;y(c.$$.fragment,1,0,()=>{C(c,1)}),ae()}l?(e=new l(o(i)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(i){n||(e&&k(e.$$.fragment,i),n=!0)},o(i){e&&y(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&C(e,i)}}}function Er(s){let e,t,n=s[3],l=[];for(let i=0;i<n.length;i+=1)l[i]=Us(Is(s,n,i));const o=i=>y(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=ge()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);v(i,e,r),t=!0},p(i,r){if(r&104){n=i[3];let a;for(a=0;a<n.length;a+=1){const c=Is(i,n,a);l[a]?(l[a].p(c,r),k(l[a],1)):(l[a]=Us(c),l[a].c(),k(l[a],1),l[a].m(e.parentNode,e))}for(re(),a=n.length;a<l.length;a+=1)o(a);ae()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)k(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)y(l[r]);t=!1},d(i){He(l,i),i&&w(e)}}}function Sr(s){let e,t,n,l,o;var i=s[5].tablehead;function r(u){return{props:{$$slots:{default:[yr]},$$scope:{ctx:u}}}}i&&(e=new i(r(s)));var a=s[5].tablebody;function c(u){return{props:{$$slots:{default:[Er]},$$scope:{ctx:u}}}}return a&&(n=new a(c(s))),{c(){e&&A(e.$$.fragment),t=T(),n&&A(n.$$.fragment),l=ge()},m(u,f){e&&S(e,u,f),v(u,t,f),n&&S(n,u,f),v(u,l,f),o=!0},p(u,f){const d={};if(f&8388708&&(d.$$scope={dirty:f,ctx:u}),i!==(i=u[5].tablehead)){if(e){re();const m=e;y(m.$$.fragment,1,0,()=>{C(m,1)}),ae()}i?(e=new i(r(u)),A(e.$$.fragment),k(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else i&&e.$set(d);const p={};if(f&8388712&&(p.$$scope={dirty:f,ctx:u}),a!==(a=u[5].tablebody)){if(n){re();const m=n;y(m.$$.fragment,1,0,()=>{C(m,1)}),ae()}a?(n=new a(c(u)),A(n.$$.fragment),k(n.$$.fragment,1),S(n,l.parentNode,l)):n=null}else a&&n.$set(p)},i(u){o||(e&&k(e.$$.fragment,u),n&&k(n.$$.fragment,u),o=!0)},o(u){e&&y(e.$$.fragment,u),n&&y(n.$$.fragment,u),o=!1},d(u){e&&C(e,u),u&&w(t),u&&w(l),n&&C(n,u)}}}function qs(s){let e,t;const n=[s[7],{renderers:s[5]}];let l={};for(let o=0;o<n.length;o+=1)l=Xe(l,n[o]);return e=new xt({props:l}),{c(){A(e.$$.fragment)},m(o,i){S(e,o,i),t=!0},p(o,i){const r=i&34?Tt(n,[i&2&&Bt(o[7]),i&32&&{renderers:o[5]}]):{};e.$set(r)},i(o){t||(k(e.$$.fragment,o),t=!0)},o(o){y(e.$$.fragment,o),t=!1},d(o){C(e,o)}}}function Cr(s){let e,t,n,l;const o=[ar,rr],i=[];function r(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=r(s))&&(t=i[e]=o[e](s)),{c(){t&&t.c(),n=ge()},m(a,c){~e&&i[e].m(a,c),v(a,n,c),l=!0},p(a,[c]){let u=e;e=r(a),e===u?~e&&i[e].p(a,c):(t&&(re(),y(i[u],1,1,()=>{i[u]=null}),ae()),~e?(t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),k(t,1),t.m(n.parentNode,n)):t=null)},i(a){l||(k(t),l=!0)},o(a){y(t),l=!1},d(a){~e&&i[e].d(a),a&&w(n)}}}function Ar(s,e,t){const n=["type","tokens","header","rows","ordered","renderers"];let l=mn(e,n),{type:o=void 0}=e,{tokens:i=void 0}=e,{header:r=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return ir(),s.$$set=f=>{e=Xe(Xe({},e),io(f)),t(6,l=mn(e,n)),"type"in f&&t(0,o=f.type),"tokens"in f&&t(1,i=f.tokens),"header"in f&&t(2,r=f.header),"rows"in f&&t(3,a=f.rows),"ordered"in f&&t(4,c=f.ordered),"renderers"in f&&t(5,u=f.renderers)},[o,i,r,a,c,u,l]}class xt extends V{constructor(e){super(),Y(this,e,Ar,Cr,K,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}}function Rr(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Rn=Rr();const Nr=/[&<>"']/,Mr=/[&<>"']/g,Or=/[<>"']|&(?!#?\w+;)/,Pr=/[<>"']|&(?!#?\w+;)/g,Ir={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ws=s=>Ir[s];function je(s,e){if(e){if(Nr.test(s))return s.replace(Mr,Ws)}else if(Or.test(s))return s.replace(Pr,Ws);return s}const Lr=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ko(s){return s.replace(Lr,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Dr=/(^|[^\[])\^/g;function Ae(s,e){s=typeof s=="string"?s:s.source,e=e||"";const t={replace:(n,l)=>(l=l.source||l,l=l.replace(Dr,"$1"),s=s.replace(n,l),t),getRegex:()=>new RegExp(s,e)};return t}const Fr=/[^\w:]/g,zr=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Gs(s,e,t){if(s){let n;try{n=decodeURIComponent(ko(t)).replace(Fr,"").toLowerCase()}catch(l){return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!zr.test(t)&&(t=Ur(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(n){return null}return t}const on={},Br=/^[^:]+:\/*[^/]*$/,Hr=/^([^:]+:)[\s\S]*$/,jr=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Ur(s,e){on[" "+s]||(Br.test(s)?on[" "+s]=s+"/":on[" "+s]=dn(s,"/",!0)),s=on[" "+s];const t=s.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:s.replace(Hr,"$1")+e:e.charAt(0)==="/"?t?e:s.replace(jr,"$1")+e:s+e}const vn={exec:function(){}};function Et(s){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s}function Zs(s,e){const t=s.replace(/\|/g,(o,i,r)=>{let a=!1,c=i;for(;--c>=0&&r[c]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let l=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;l<n.length;l++)n[l]=n[l].trim().replace(/\\\|/g,"|");return n}function dn(s,e,t){const n=s.length;if(n===0)return"";let l=0;for(;l<n;){const o=s.charAt(n-l-1);if(o===e&&!t)l++;else if(o!==e&&t)l++;else break}return s.slice(0,n-l)}function qr(s,e){if(s.indexOf(e[1])===-1)return-1;const t=s.length;let n=0,l=0;for(;l<t;l++)if(s[l]==="\\")l++;else if(s[l]===e[0])n++;else if(s[l]===e[1]&&(n--,n<0))return l;return-1}function Ks(s,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=s),e>>=1,s+=s;return t+s}function Xs(s,e,t,n){const l=e.href,o=e.title?je(e.title):null,i=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){n.state.inLink=!0;const r={type:"link",raw:t,href:l,title:o,text:i,tokens:n.inlineTokens(i,[])};return n.state.inLink=!1,r}return{type:"image",raw:t,href:l,title:o,text:je(i)}}function Wr(s,e){const t=s.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(l=>{const o=l.match(/^\s+/);if(o===null)return l;const[i]=o;return i.length>=n.length?l.slice(n.length):l}).join(`
`)}class Gr{constructor(e){this.options=e||Rn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:dn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],l=Wr(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:l}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const o=dn(n,"#");(this.options.pedantic||!o||/ $/.test(o))&&(n=o.trim())}const l={type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,l,o,i,r,a,c,u,f,d,p,m,_=t[1].trim();const $=_.length>1,E={type:"list",raw:"",ordered:$,start:$?+_.slice(0,-1):"",loose:!1,items:[]};_=$?`\\d{1,9}\\${_.slice(-1)}`:`\\${_}`,this.options.pedantic&&(_=$?_:"[*+-]");const x=new RegExp(`^( {0,3}${_})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(m=!1,!(!(t=x.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0],f=e.split(`
`,1)[0],this.options.pedantic?(i=2,p=u.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,p=u.slice(i),i+=t[1].length),a=!1,!u&&/^ *$/.test(f)&&(n+=f+`
`,e=e.substring(f.length+1),m=!0),!m){const N=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),M=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(N.test(u)||M.test(e)));){if(u.search(/[^ ]/)>=i||!u.trim())p+=`
`+u.slice(i);else if(!a)p+=`
`+u;else break;!a&&!u.trim()&&(a=!0),n+=d+`
`,e=e.substring(d.length+1)}}E.loose||(c?E.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(l=/^\[[ xX]\] /.exec(p),l&&(o=l[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),E.items.push({type:"list_item",raw:n,task:!!l,checked:o,loose:!1,text:p}),E.raw+=n}E.items[E.items.length-1].raw=n.trimRight(),E.items[E.items.length-1].text=p.trimRight(),E.raw=E.raw.trimRight();const R=E.items.length;for(r=0;r<R;r++){this.lexer.state.top=!1,E.items[r].tokens=this.lexer.blockTokens(E.items[r].text,[]);const N=E.items[r].tokens.filter(O=>O.type==="space"),M=N.every(O=>{const P=O.raw.split("");let D=0;for(const F of P)if(F===`
`&&(D+=1),D>1)return!0;return!1});!E.loose&&N.length&&M&&(E.loose=!0,E.items[r].loose=!0)}return E}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(n.type="paragraph",n.text=this.options.sanitizer?this.options.sanitizer(t[0]):je(t[0]),n.tokens=[],this.lexer.inline(n.text,n.tokens)),n}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const n=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:n,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:Zs(t[1]).map(l=>({text:l})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let l=n.align.length,o,i,r,a;for(o=0;o<l;o++)/^ *-+: *$/.test(n.align[o])?n.align[o]="right":/^ *:-+: *$/.test(n.align[o])?n.align[o]="center":/^ *:-+ *$/.test(n.align[o])?n.align[o]="left":n.align[o]=null;for(l=n.rows.length,o=0;o<l;o++)n.rows[o]=Zs(n.rows[o],n.header.length).map(c=>({text:c}));for(l=n.header.length,i=0;i<l;i++)n.header[i].tokens=[],this.lexer.inline(n.header[i].text,n.header[i].tokens);for(l=n.rows.length,i=0;i<l;i++)for(a=n.rows[i],r=0;r<a.length;r++)a[r].tokens=[],this.lexer.inline(a[r].text,a[r].tokens);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const n={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}text(e){const t=this.rules.block.text.exec(e);if(t){const n={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:je(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):je(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const i=dn(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=qr(t[2],"()");if(i>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let l=t[2],o="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);i&&(l=i[1],o=i[3])}else o=t[3]?t[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(this.options.pedantic&&!/>$/.test(n)?l=l.slice(1):l=l.slice(1,-1)),Xs(t,{href:l&&l.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let l=(n[2]||n[1]).replace(/\s+/g," ");if(l=t[l.toLowerCase()],!l||!l.href){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Xs(n,l,n[0],this.lexer)}}emStrong(e,t,n=""){let l=this.rules.inline.emStrong.lDelim.exec(e);if(!l||l[3]&&n.match(/[\p{L}\p{N}]/u))return;const o=l[1]||l[2]||"";if(!o||o&&(n===""||this.rules.inline.punctuation.exec(n))){const i=l[0].length-1;let r,a,c=i,u=0;const f=l[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+i);(l=f.exec(t))!=null;){if(r=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!r)continue;if(a=r.length,l[3]||l[4]){c+=a;continue}else if((l[5]||l[6])&&i%3&&!((i+a)%3)){u+=a;continue}if(c-=a,c>0)continue;if(a=Math.min(a,a+c+u),Math.min(i,a)%2){const p=e.slice(1,i+l.index+a);return{type:"em",raw:e.slice(0,i+l.index+a+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}const d=e.slice(2,i+l.index+a-1);return{type:"strong",raw:e.slice(0,i+l.index+a+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const l=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return l&&o&&(n=n.substring(1,n.length-1)),n=je(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let l,o;return n[2]==="@"?(l=je(this.options.mangle?t(n[1]):n[1]),o="mailto:"+l):(l=je(n[1]),o=l),{type:"link",raw:n[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let l,o;if(n[2]==="@")l=je(this.options.mangle?t(n[0]):n[0]),o="mailto:"+l;else{let i;do i=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(i!==n[0]);l=je(n[0]),n[1]==="www."?o="http://"+l:o=l}return{type:"link",raw:n[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let l;return this.lexer.state.inRawBlock?l=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):je(n[0]):n[0]:l=je(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:l}}}}const se={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:vn,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};se._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;se._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;se.def=Ae(se.def).replace("label",se._label).replace("title",se._title).getRegex();se.bullet=/(?:[*+-]|\d{1,9}[.)])/;se.listItemStart=Ae(/^( *)(bull) */).replace("bull",se.bullet).getRegex();se.list=Ae(se.list).replace(/bull/g,se.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+se.def.source+")").getRegex();se._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";se._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;se.html=Ae(se.html,"i").replace("comment",se._comment).replace("tag",se._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();se.paragraph=Ae(se._paragraph).replace("hr",se.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",se._tag).getRegex();se.blockquote=Ae(se.blockquote).replace("paragraph",se.paragraph).getRegex();se.normal=Et({},se);se.gfm=Et({},se.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});se.gfm.table=Ae(se.gfm.table).replace("hr",se.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",se._tag).getRegex();se.gfm.paragraph=Ae(se._paragraph).replace("hr",se.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",se.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",se._tag).getRegex();se.pedantic=Et({},se.normal,{html:Ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",se._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:vn,paragraph:Ae(se.normal._paragraph).replace("hr",se.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",se.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const q={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:vn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:vn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};q._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";q.punctuation=Ae(q.punctuation).replace(/punctuation/g,q._punctuation).getRegex();q.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;q.escapedEmSt=/\\\*|\\_/g;q._comment=Ae(se._comment).replace("(?:-->|$)","-->").getRegex();q.emStrong.lDelim=Ae(q.emStrong.lDelim).replace(/punct/g,q._punctuation).getRegex();q.emStrong.rDelimAst=Ae(q.emStrong.rDelimAst,"g").replace(/punct/g,q._punctuation).getRegex();q.emStrong.rDelimUnd=Ae(q.emStrong.rDelimUnd,"g").replace(/punct/g,q._punctuation).getRegex();q._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;q._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;q._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;q.autolink=Ae(q.autolink).replace("scheme",q._scheme).replace("email",q._email).getRegex();q._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;q.tag=Ae(q.tag).replace("comment",q._comment).replace("attribute",q._attribute).getRegex();q._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;q._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;q._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;q.link=Ae(q.link).replace("label",q._label).replace("href",q._href).replace("title",q._title).getRegex();q.reflink=Ae(q.reflink).replace("label",q._label).replace("ref",se._label).getRegex();q.nolink=Ae(q.nolink).replace("ref",se._label).getRegex();q.reflinkSearch=Ae(q.reflinkSearch,"g").replace("reflink",q.reflink).replace("nolink",q.nolink).getRegex();q.normal=Et({},q);q.pedantic=Et({},q.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ae(/^!?\[(label)\]\((.*?)\)/).replace("label",q._label).getRegex(),reflink:Ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",q._label).getRegex()});q.gfm=Et({},q.normal,{escape:Ae(q.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});q.gfm.url=Ae(q.gfm.url,"i").replace("email",q.gfm._extended_email).getRegex();q.breaks=Et({},q.gfm,{br:Ae(q.br).replace("{2,}","*").getRegex(),text:Ae(q.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Zr(s){return s.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Ys(s){let e="",t,n;const l=s.length;for(t=0;t<l;t++)n=s.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class Gt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Rn,this.options.tokenizer=this.options.tokenizer||new Gr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:se.normal,inline:q.normal};this.options.pedantic?(t.block=se.pedantic,t.inline=q.pedantic):this.options.gfm&&(t.block=se.gfm,this.options.breaks?t.inline=q.breaks:t.inline=q.gfm),this.tokenizer.rules=t}static get rules(){return{block:se,inline:q}}static lex(e,t){return new Gt(t).lex(e)}static lexInline(e,t){return new Gt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(r,a,c)=>a+"    ".repeat(c.length));let n,l,o,i;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>(n=r.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+n.raw,l.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+n.raw,l.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=l.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let r=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(r=Math.min(r,c))}),r<1/0&&r>=0&&(o=e.substring(0,r+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){l=t[t.length-1],i&&l.type==="paragraph"?(l.raw+=`
`+n.raw,l.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(n),i=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&l.type==="text"?(l.raw+=`
`+n.raw,l.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(n);continue}if(e){const r="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(r);break}else throw new Error(r)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,l,o,i=e,r,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)u.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+Ks("a",r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,r.index)+"["+Ks("a",r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.escapedEmSt.exec(i))!=null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&n.type==="text"&&l.type==="text"?(l.raw+=n.raw,l.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),l=t[t.length-1],l&&n.type==="text"&&l.type==="text"?(l.raw+=n.raw,l.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,i,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,Ys)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,Ys))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let d;this.options.extensions.startInline.forEach(function(p){d=p.call({lexer:this},f),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(o=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(o,Zr)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),a=!0,l=t[t.length-1],l&&l.type==="text"?(l.raw+=n.raw,l.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Kr{constructor(e){this.options=e||Rn}code(e,t,n){const l=(t||"").match(/\S*/)[0];if(this.options.highlight){const o=this.options.highlight(e,l);o!=null&&o!==e&&(n=!0,e=o)}return e=e.replace(/\n$/,"")+`
`,l?'<pre><code class="'+this.options.langPrefix+je(l,!0)+'">'+(n?e:je(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:je(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n,l){if(this.options.headerIds){const o=this.options.headerPrefix+l.slug(n);return`<h${t} id="${o}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const l=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+l+o+`>
`+e+"</"+l+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=Gs(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let l='<a href="'+je(e)+'"';return t&&(l+=' title="'+t+'"'),l+=">"+n+"</a>",l}image(e,t,n){if(e=Gs(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let l=`<img src="${e}" alt="${n}"`;return t&&(l+=` title="${t}"`),l+=this.options.xhtml?"/>":">",l}text(e){return e}}class Xr{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class yo{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,l=0;if(this.seen.hasOwnProperty(n)){l=this.seen[e];do l++,n=e+"-"+l;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=l,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class kn{constructor(e){this.options=e||Rn,this.options.renderer=this.options.renderer||new Kr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Xr,this.slugger=new yo}static parse(e,t){return new kn(t).parse(e)}static parseInline(e,t){return new kn(t).parseInline(e)}parse(e,t=!0){let n="",l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M,O;const P=e.length;for(l=0;l<P;l++){if(p=e[l],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(O=this.options.extensions.renderers[p.type].call({parser:this},p),O!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){n+=O||"";continue}switch(p.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(p.tokens),p.depth,ko(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(f="",u="",r=p.header.length,o=0;o<r;o++)u+=this.renderer.tablecell(this.parseInline(p.header[o].tokens),{header:!0,align:p.align[o]});for(f+=this.renderer.tablerow(u),d="",r=p.rows.length,o=0;o<r;o++){for(c=p.rows[o],u="",a=c.length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(c[i].tokens),{header:!1,align:p.align[i]});d+=this.renderer.tablerow(u)}n+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(p.tokens),n+=this.renderer.blockquote(d);continue}case"list":{for(m=p.ordered,_=p.start,$=p.loose,r=p.items.length,d="",o=0;o<r;o++)x=p.items[o],R=x.checked,N=x.task,E="",x.task&&(M=this.renderer.checkbox(R),$?x.tokens.length>0&&x.tokens[0].type==="paragraph"?(x.tokens[0].text=M+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&x.tokens[0].tokens[0].type==="text"&&(x.tokens[0].tokens[0].text=M+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:M}):E+=M),E+=this.parse(x.tokens,$),d+=this.renderer.listitem(E,N,R);n+=this.renderer.list(d,m,_);continue}case"html":{n+=this.renderer.html(p.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(d=p.tokens?this.parseInline(p.tokens):p.text;l+1<P&&e[l+1].type==="text";)p=e[++l],d+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);n+=t?this.renderer.paragraph(d):d;continue}default:{const D='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(D);return}else throw new Error(D)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",l,o,i;const r=e.length;for(l=0;l<r;l++){if(o=e[l],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(i=this.options.extensions.renderers[o.type].call({parser:this},o),i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type))){n+=i||"";continue}switch(o.type){case"escape":{n+=t.text(o.text);break}case"html":{n+=t.html(o.text);break}case"link":{n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{n+=t.image(o.href,o.title,o.text);break}case"strong":{n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(o.tokens,t));break}case"text":{n+=t.text(o.text);break}default:{const a='Token with "'+o.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return n}}kn.parse;Gt.lex;const To={};function Yr(s){let e;return{c(){e=L(s[1])},m(t,n){v(t,e,n)},p(t,n){n&2&&$e(e,t[1])},i:Q,o:Q,d(t){t&&w(e)}}}function Vr(s){let e,t;const n=s[5].default,l=ke(n,s,s[4],null);return{c(){e=b("h6"),l&&l.c(),g(e,"id",s[2])},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Te(l,n,o,o[4],t?ye(n,o[4],i,null):xe(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Qr(s){let e,t;const n=s[5].default,l=ke(n,s,s[4],null);return{c(){e=b("h5"),l&&l.c(),g(e,"id",s[2])},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Te(l,n,o,o[4],t?ye(n,o[4],i,null):xe(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Jr(s){let e,t;const n=s[5].default,l=ke(n,s,s[4],null);return{c(){e=b("h4"),l&&l.c(),g(e,"id",s[2])},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Te(l,n,o,o[4],t?ye(n,o[4],i,null):xe(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function ea(s){let e,t;const n=s[5].default,l=ke(n,s,s[4],null);return{c(){e=b("h3"),l&&l.c(),g(e,"id",s[2])},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Te(l,n,o,o[4],t?ye(n,o[4],i,null):xe(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function ta(s){let e,t;const n=s[5].default,l=ke(n,s,s[4],null);return{c(){e=b("h2"),l&&l.c(),g(e,"id",s[2])},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Te(l,n,o,o[4],t?ye(n,o[4],i,null):xe(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function na(s){let e,t;const n=s[5].default,l=ke(n,s,s[4],null);return{c(){e=b("h1"),l&&l.c(),g(e,"id",s[2])},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Te(l,n,o,o[4],t?ye(n,o[4],i,null):xe(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function sa(s){let e,t,n,l;const o=[na,ta,ea,Jr,Qr,Vr,Yr],i=[];function r(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=ge()},m(a,c){i[e].m(a,c),v(a,n,c),l=!0},p(a,[c]){let u=e;e=r(a),e===u?i[e].p(a,c):(re(),y(i[u],1,1,()=>{i[u]=null}),ae(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),k(t,1),t.m(n.parentNode,n))},i(a){l||(k(t),l=!0)},o(a){y(t),l=!1},d(a){i[e].d(a),a&&w(n)}}}function la(s,e,t){let n,{$$slots:l={},$$scope:o}=e,{depth:i}=e,{raw:r}=e,{text:a}=e;const{slug:c,getOptions:u}=Ft(To),f=u();return s.$$set=d=>{"depth"in d&&t(0,i=d.depth),"raw"in d&&t(1,r=d.raw),"text"in d&&t(3,a=d.text),"$$scope"in d&&t(4,o=d.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(2,n=f.headerIds?f.headerPrefix+c(a):void 0)},[i,r,n,a,o,l]}class oa extends V{constructor(e){super(),Y(this,e,la,sa,K,{depth:0,raw:1,text:3})}}function ia(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("p"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function ra(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class aa extends V{constructor(e){super(),Y(this,e,ra,ia,K,{})}}function ca(s){let e;const t=s[3].default,n=ke(t,s,s[2],null);return{c(){n&&n.c()},m(l,o){n&&n.m(l,o),e=!0},p(l,[o]){n&&n.p&&(!e||o&4)&&Te(n,t,l,l[2],e?ye(t,l[2],o,null):xe(l[2]),null)},i(l){e||(k(n,l),e=!0)},o(l){y(n,l),e=!1},d(l){n&&n.d(l)}}}function ua(s,e,t){let{$$slots:n={},$$scope:l}=e,{text:o}=e,{raw:i}=e;return s.$$set=r=>{"text"in r&&t(0,o=r.text),"raw"in r&&t(1,i=r.raw),"$$scope"in r&&t(2,l=r.$$scope)},[o,i,l,n]}class fa extends V{constructor(e){super(),Y(this,e,ua,ca,K,{text:0,raw:1})}}function da(s){let e,t;return{c(){e=b("img"),$s(e.src,t=s[0])||g(e,"src",t),g(e,"title",s[1]),g(e,"alt",s[2])},m(n,l){v(n,e,l)},p(n,[l]){l&1&&!$s(e.src,t=n[0])&&g(e,"src",t),l&2&&g(e,"title",n[1]),l&4&&g(e,"alt",n[2])},i:Q,o:Q,d(n){n&&w(e)}}}function pa(s,e,t){let{href:n=""}=e,{title:l=void 0}=e,{text:o=""}=e;return s.$$set=i=>{"href"in i&&t(0,n=i.href),"title"in i&&t(1,l=i.title),"text"in i&&t(2,o=i.text)},[n,l,o]}class ma extends V{constructor(e){super(),Y(this,e,pa,da,K,{href:0,title:1,text:2})}}function ha(s){let e,t;const n=s[3].default,l=ke(n,s,s[2],null);return{c(){e=b("a"),l&&l.c(),g(e,"href",s[0]),g(e,"title",s[1])},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&4)&&Te(l,n,o,o[2],t?ye(n,o[2],i,null):xe(o[2]),null),(!t||i&1)&&g(e,"href",o[0]),(!t||i&2)&&g(e,"title",o[1])},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function ga(s,e,t){let{$$slots:n={},$$scope:l}=e,{href:o=""}=e,{title:i=void 0}=e;return s.$$set=r=>{"href"in r&&t(0,o=r.href),"title"in r&&t(1,i=r.title),"$$scope"in r&&t(2,l=r.$$scope)},[o,i,l,n]}class _a extends V{constructor(e){super(),Y(this,e,ga,ha,K,{href:0,title:1})}}function ba(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("em"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function $a(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class wa extends V{constructor(e){super(),Y(this,e,$a,ba,K,{})}}function va(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("del"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function ka(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class ya extends V{constructor(e){super(),Y(this,e,ka,va,K,{})}}function Ta(s){let e,t=s[0].replace(/`/g,"")+"",n;return{c(){e=b("code"),n=L(t)},m(l,o){v(l,e,o),h(e,n)},p(l,[o]){o&1&&t!==(t=l[0].replace(/`/g,"")+"")&&$e(n,t)},i:Q,o:Q,d(l){l&&w(e)}}}function xa(s,e,t){let{raw:n}=e;return s.$$set=l=>{"raw"in l&&t(0,n=l.raw)},[n]}class Ea extends V{constructor(e){super(),Y(this,e,xa,Ta,K,{raw:0})}}function Sa(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("strong"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Ca(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Aa extends V{constructor(e){super(),Y(this,e,Ca,Sa,K,{})}}function Ra(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("table"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Na(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Ma extends V{constructor(e){super(),Y(this,e,Na,Ra,K,{})}}function Oa(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("thead"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Pa(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Ia extends V{constructor(e){super(),Y(this,e,Pa,Oa,K,{})}}function La(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("tbody"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Da(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Fa extends V{constructor(e){super(),Y(this,e,Da,La,K,{})}}function za(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("tr"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Ba(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Ha extends V{constructor(e){super(),Y(this,e,Ba,za,K,{})}}function ja(s){let e,t;const n=s[3].default,l=ke(n,s,s[2],null);return{c(){e=b("td"),l&&l.c(),g(e,"align",s[1])},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&4)&&Te(l,n,o,o[2],t?ye(n,o[2],i,null):xe(o[2]),null),(!t||i&2)&&g(e,"align",o[1])},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Ua(s){let e,t;const n=s[3].default,l=ke(n,s,s[2],null);return{c(){e=b("th"),l&&l.c(),g(e,"align",s[1])},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&4)&&Te(l,n,o,o[2],t?ye(n,o[2],i,null):xe(o[2]),null),(!t||i&2)&&g(e,"align",o[1])},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function qa(s){let e,t,n,l;const o=[Ua,ja],i=[];function r(a,c){return a[0]?0:1}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=ge()},m(a,c){i[e].m(a,c),v(a,n,c),l=!0},p(a,[c]){let u=e;e=r(a),e===u?i[e].p(a,c):(re(),y(i[u],1,1,()=>{i[u]=null}),ae(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),k(t,1),t.m(n.parentNode,n))},i(a){l||(k(t),l=!0)},o(a){y(t),l=!1},d(a){i[e].d(a),a&&w(n)}}}function Wa(s,e,t){let{$$slots:n={},$$scope:l}=e,{header:o}=e,{align:i}=e;return s.$$set=r=>{"header"in r&&t(0,o=r.header),"align"in r&&t(1,i=r.align),"$$scope"in r&&t(2,l=r.$$scope)},[o,i,l,n]}class Ga extends V{constructor(e){super(),Y(this,e,Wa,qa,K,{header:0,align:1})}}function Za(s){let e,t;const n=s[3].default,l=ke(n,s,s[2],null);return{c(){e=b("ul"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&4)&&Te(l,n,o,o[2],t?ye(n,o[2],i,null):xe(o[2]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Ka(s){let e,t;const n=s[3].default,l=ke(n,s,s[2],null);return{c(){e=b("ol"),l&&l.c(),g(e,"start",s[1])},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&4)&&Te(l,n,o,o[2],t?ye(n,o[2],i,null):xe(o[2]),null),(!t||i&2)&&g(e,"start",o[1])},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Xa(s){let e,t,n,l;const o=[Ka,Za],i=[];function r(a,c){return a[0]?0:1}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=ge()},m(a,c){i[e].m(a,c),v(a,n,c),l=!0},p(a,[c]){let u=e;e=r(a),e===u?i[e].p(a,c):(re(),y(i[u],1,1,()=>{i[u]=null}),ae(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),k(t,1),t.m(n.parentNode,n))},i(a){l||(k(t),l=!0)},o(a){y(t),l=!1},d(a){i[e].d(a),a&&w(n)}}}function Ya(s,e,t){let{$$slots:n={},$$scope:l}=e,{ordered:o}=e,{start:i}=e;return s.$$set=r=>{"ordered"in r&&t(0,o=r.ordered),"start"in r&&t(1,i=r.start),"$$scope"in r&&t(2,l=r.$$scope)},[o,i,l,n]}class Va extends V{constructor(e){super(),Y(this,e,Ya,Xa,K,{ordered:0,start:1})}}function Qa(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("li"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function Ja(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class ec extends V{constructor(e){super(),Y(this,e,Ja,Qa,K,{})}}function tc(s){let e;return{c(){e=b("hr")},m(t,n){v(t,e,n)},p:Q,i:Q,o:Q,d(t){t&&w(e)}}}class nc extends V{constructor(e){super(),Y(this,e,null,tc,K,{})}}function sc(s){let e,t;return{c(){e=new fo(!1),t=ge(),e.a=t},m(n,l){e.m(s[0],n,l),v(n,t,l)},p(n,[l]){l&1&&e.p(n[0])},i:Q,o:Q,d(n){n&&w(t),n&&e.d()}}}function lc(s,e,t){let{text:n}=e;return s.$$set=l=>{"text"in l&&t(0,n=l.text)},[n]}class oc extends V{constructor(e){super(),Y(this,e,lc,sc,K,{text:0})}}function ic(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("blockquote"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function rc(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class ac extends V{constructor(e){super(),Y(this,e,rc,ic,K,{})}}function cc(s){let e,t,n;return{c(){e=b("pre"),t=b("code"),n=L(s[1]),g(e,"class",s[0])},m(l,o){v(l,e,o),h(e,t),h(t,n)},p(l,[o]){o&2&&$e(n,l[1]),o&1&&g(e,"class",l[0])},i:Q,o:Q,d(l){l&&w(e)}}}function uc(s,e,t){let{lang:n}=e,{text:l}=e;return s.$$set=o=>{"lang"in o&&t(0,n=o.lang),"text"in o&&t(1,l=o.text)},[n,l]}class fc extends V{constructor(e){super(),Y(this,e,uc,cc,K,{lang:0,text:1})}}function dc(s){let e,t;const n=s[1].default,l=ke(n,s,s[0],null);return{c(){e=b("br"),l&&l.c()},m(o,i){v(o,e,i),l&&l.m(o,i),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Te(l,n,o,o[0],t?ye(n,o[0],i,null):xe(o[0]),null)},i(o){t||(k(l,o),t=!0)},o(o){y(l,o),t=!1},d(o){o&&w(e),l&&l.d(o)}}}function pc(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class mc extends V{constructor(e){super(),Y(this,e,pc,dc,K,{})}}const hc={heading:oa,paragraph:aa,text:fa,image:ma,link:_a,em:wa,strong:Aa,codespan:Ea,del:ya,table:Ma,tablehead:Ia,tablebody:Fa,tablerow:Ha,tablecell:Ga,list:Va,orderedlistitem:null,unorderedlistitem:null,listitem:ec,hr:nc,html:oc,blockquote:ac,code:fc,br:mc},gc={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function _c(s){let e,t;return e=new xt({props:{tokens:s[0],renderers:s[1]}}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},p(n,[l]){const o={};l&1&&(o.tokens=n[0]),l&2&&(o.renderers=n[1]),e.$set(o)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function bc(s,e,t){let n,l,o,{source:i=""}=e,{renderers:r={}}=e,{options:a={}}=e,{isInline:c=!1}=e;const u=es();let f,d,p;return ts(To,{slug:m=>n?n.slug(m):"",getOptions:()=>l}),An(()=>{t(7,p=!0)}),s.$$set=m=>{"source"in m&&t(2,i=m.source),"renderers"in m&&t(3,r=m.renderers),"options"in m&&t(4,a=m.options),"isInline"in m&&t(5,c=m.isInline)},s.$$.update=()=>{s.$$.dirty&4&&(n=i?new yo:void 0),s.$$.dirty&16&&t(8,l=ze(ze({},gc),a)),s.$$.dirty&357&&(t(6,d=new Gt(l)),t(0,f=c?d.inlineTokens(i):d.lex(i)),u("parsed",{tokens:f})),s.$$.dirty&8&&t(1,o=ze(ze({},hc),r)),s.$$.dirty&129&&p&&u("parsed",{tokens:f})},[f,o,i,r,a,c,d,p,l]}class Vt extends V{constructor(e){super(),Y(this,e,bc,_c,K,{source:2,renderers:3,options:4,isInline:5})}}function $c(s){let e,t,n;return t=new Vt({props:{source:or}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(l,o){v(l,e,o),S(t,e,null),n=!0},p:Q,i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){l&&w(e),C(t)}}}class wc extends V{constructor(e){super(),Y(this,e,null,$c,K,{})}}var rn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},os={exports:{}};function is(s){return s instanceof Map?s.clear=s.delete=s.set=function(){throw new Error("map is read-only")}:s instanceof Set&&(s.add=s.clear=s.delete=function(){throw new Error("set is read-only")}),Object.freeze(s),Object.getOwnPropertyNames(s).forEach(function(e){var t=s[e];typeof t=="object"&&!Object.isFrozen(t)&&is(t)}),s}os.exports=is;os.exports.default=is;var vc=os.exports;class Vs{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function xo(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function mt(s,...e){const t=Object.create(null);for(const n in s)t[n]=s[n];return e.forEach(function(n){for(const l in n)t[l]=n[l]}),t}const kc="</span>",Qs=s=>!!s.kind,yc=(s,{prefix:e})=>{if(s.includes(".")){const t=s.split(".");return[`${e}${t.shift()}`,...t.map((n,l)=>`${n}${"_".repeat(l+1)}`)].join(" ")}return`${e}${s}`};class Tc{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=xo(e)}openNode(e){if(!Qs(e))return;let t=e.kind;e.sublanguage?t=`language-${t}`:t=yc(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){!Qs(e)||(this.buffer+=kc)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class rs{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(n=>this._walk(e,n)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&(!e.children||(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{rs._collapse(t)})))}}class xc extends rs{constructor(e){super(),this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new Tc(this,this.options).value()}finalize(){return!0}}function Zt(s){return s?typeof s=="string"?s:s.source:null}function Eo(s){return St("(?=",s,")")}function Ec(s){return St("(?:",s,")*")}function Sc(s){return St("(?:",s,")?")}function St(...s){return s.map(t=>Zt(t)).join("")}function Cc(s){const e=s[s.length-1];return typeof e=="object"&&e.constructor===Object?(s.splice(s.length-1,1),e):{}}function as(...s){const e=Cc(s);return"("+(e.capture?"":"?:")+s.map(n=>Zt(n)).join("|")+")"}function So(s){return new RegExp(s.toString()+"|").exec("").length-1}function Ac(s,e){const t=s&&s.exec(e);return t&&t.index===0}const Rc=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function cs(s,{joinWith:e}){let t=0;return s.map(n=>{t+=1;const l=t;let o=Zt(n),i="";for(;o.length>0;){const r=Rc.exec(o);if(!r){i+=o;break}i+=o.substring(0,r.index),o=o.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?i+="\\"+String(Number(r[1])+l):(i+=r[0],r[0]==="("&&t++)}return i}).map(n=>`(${n})`).join(e)}const Nc=/\b\B/,Co="[a-zA-Z]\\w*",us="[a-zA-Z_]\\w*",Ao="\\b\\d+(\\.\\d+)?",Ro="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",No="\\b(0b[01]+)",Mc="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Oc=(s={})=>{const e=/^#![ ]*\//;return s.binary&&(s.begin=St(e,/.*\b/,s.binary,/\b.*/)),mt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,n)=>{t.index!==0&&n.ignoreMatch()}},s)},Kt={begin:"\\\\[\\s\\S]",relevance:0},Pc={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Kt]},Ic={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Kt]},Lc={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Nn=function(s,e,t={}){const n=mt({scope:"comment",begin:s,end:e,contains:[]},t);n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const l=as("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return n.contains.push({begin:St(/[ ]+/,"(",l,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},Dc=Nn("//","$"),Fc=Nn("/\\*","\\*/"),zc=Nn("#","$"),Bc={scope:"number",begin:Ao,relevance:0},Hc={scope:"number",begin:Ro,relevance:0},jc={scope:"number",begin:No,relevance:0},Uc={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Kt,{begin:/\[/,end:/\]/,relevance:0,contains:[Kt]}]}]},qc={scope:"title",begin:Co,relevance:0},Wc={scope:"title",begin:us,relevance:0},Gc={begin:"\\.\\s*"+us,relevance:0},Zc=function(s){return Object.assign(s,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var an=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Nc,IDENT_RE:Co,UNDERSCORE_IDENT_RE:us,NUMBER_RE:Ao,C_NUMBER_RE:Ro,BINARY_NUMBER_RE:No,RE_STARTERS_RE:Mc,SHEBANG:Oc,BACKSLASH_ESCAPE:Kt,APOS_STRING_MODE:Pc,QUOTE_STRING_MODE:Ic,PHRASAL_WORDS_MODE:Lc,COMMENT:Nn,C_LINE_COMMENT_MODE:Dc,C_BLOCK_COMMENT_MODE:Fc,HASH_COMMENT_MODE:zc,NUMBER_MODE:Bc,C_NUMBER_MODE:Hc,BINARY_NUMBER_MODE:jc,REGEXP_MODE:Uc,TITLE_MODE:qc,UNDERSCORE_TITLE_MODE:Wc,METHOD_GUARD:Gc,END_SAME_AS_BEGIN:Zc});function Kc(s,e){s.input[s.index-1]==="."&&e.ignoreMatch()}function Xc(s,e){s.className!==void 0&&(s.scope=s.className,delete s.className)}function Yc(s,e){!e||!s.beginKeywords||(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=Kc,s.keywords=s.keywords||s.beginKeywords,delete s.beginKeywords,s.relevance===void 0&&(s.relevance=0))}function Vc(s,e){!Array.isArray(s.illegal)||(s.illegal=as(...s.illegal))}function Qc(s,e){if(!!s.match){if(s.begin||s.end)throw new Error("begin & end are not supported with match");s.begin=s.match,delete s.match}}function Jc(s,e){s.relevance===void 0&&(s.relevance=1)}const eu=(s,e)=>{if(!s.beforeMatch)return;if(s.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},s);Object.keys(s).forEach(n=>{delete s[n]}),s.keywords=t.keywords,s.begin=St(t.beforeMatch,Eo(t.begin)),s.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},s.relevance=0,delete t.beforeMatch},tu=["of","and","for","in","not","or","if","then","parent","list","value"],nu="keyword";function Mo(s,e,t=nu){const n=Object.create(null);return typeof s=="string"?l(t,s.split(" ")):Array.isArray(s)?l(t,s):Object.keys(s).forEach(function(o){Object.assign(n,Mo(s[o],e,o))}),n;function l(o,i){e&&(i=i.map(r=>r.toLowerCase())),i.forEach(function(r){const a=r.split("|");n[a[0]]=[o,su(a[0],a[1])]})}}function su(s,e){return e?Number(e):lu(s)?0:1}function lu(s){return tu.includes(s.toLowerCase())}const Js={},kt=s=>{console.error(s)},el=(s,...e)=>{console.log(`WARN: ${s}`,...e)},Ot=(s,e)=>{Js[`${s}/${e}`]||(console.log(`Deprecated as of ${s}. ${e}`),Js[`${s}/${e}`]=!0)},yn=new Error;function Oo(s,e,{key:t}){let n=0;const l=s[t],o={},i={};for(let r=1;r<=e.length;r++)i[r+n]=l[r],o[r+n]=!0,n+=So(e[r-1]);s[t]=i,s[t]._emit=o,s[t]._multi=!0}function ou(s){if(!!Array.isArray(s.begin)){if(s.skip||s.excludeBegin||s.returnBegin)throw kt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),yn;if(typeof s.beginScope!="object"||s.beginScope===null)throw kt("beginScope must be object"),yn;Oo(s,s.begin,{key:"beginScope"}),s.begin=cs(s.begin,{joinWith:""})}}function iu(s){if(!!Array.isArray(s.end)){if(s.skip||s.excludeEnd||s.returnEnd)throw kt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),yn;if(typeof s.endScope!="object"||s.endScope===null)throw kt("endScope must be object"),yn;Oo(s,s.end,{key:"endScope"}),s.end=cs(s.end,{joinWith:""})}}function ru(s){s.scope&&typeof s.scope=="object"&&s.scope!==null&&(s.beginScope=s.scope,delete s.scope)}function au(s){ru(s),typeof s.beginScope=="string"&&(s.beginScope={_wrap:s.beginScope}),typeof s.endScope=="string"&&(s.endScope={_wrap:s.endScope}),ou(s),iu(s)}function cu(s){function e(i,r){return new RegExp(Zt(i),"m"+(s.case_insensitive?"i":"")+(s.unicodeRegex?"u":"")+(r?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,r]),this.matchAt+=So(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(a=>a[1]);this.matcherRe=e(cs(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(r);if(!a)return null;const c=a.findIndex((f,d)=>d>0&&f!==void 0),u=this.matchIndexes[c];return a.splice(0,c),Object.assign(a,u)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const a=new t;return this.rules.slice(r).forEach(([c,u])=>a.addRule(c,u)),a.compile(),this.multiRegexes[r]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,a){this.rules.push([r,a]),a.type==="begin"&&this.count++}exec(r){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let c=a.exec(r);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(r)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function l(i){const r=new n;return i.contains.forEach(a=>r.addRule(a.begin,{rule:a,type:"begin"})),i.terminatorEnd&&r.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&r.addRule(i.illegal,{type:"illegal"}),r}function o(i,r){const a=i;if(i.isCompiled)return a;[Xc,Qc,au,eu].forEach(u=>u(i,r)),s.compilerExtensions.forEach(u=>u(i,r)),i.__beforeBegin=null,[Yc,Vc,Jc].forEach(u=>u(i,r)),i.isCompiled=!0;let c=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),c=i.keywords.$pattern,delete i.keywords.$pattern),c=c||/\w+/,i.keywords&&(i.keywords=Mo(i.keywords,s.case_insensitive)),a.keywordPatternRe=e(c,!0),r&&(i.begin||(i.begin=/\B|\b/),a.beginRe=e(a.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(a.endRe=e(a.end)),a.terminatorEnd=Zt(a.end)||"",i.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(a.illegalRe=e(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(u){return uu(u==="self"?i:u)})),i.contains.forEach(function(u){o(u,a)}),i.starts&&o(i.starts,r),a.matcher=l(a),a}if(s.compilerExtensions||(s.compilerExtensions=[]),s.contains&&s.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return s.classNameAliases=mt(s.classNameAliases||{}),o(s)}function Po(s){return s?s.endsWithParent||Po(s.starts):!1}function uu(s){return s.variants&&!s.cachedVariants&&(s.cachedVariants=s.variants.map(function(e){return mt(s,{variants:null},e)})),s.cachedVariants?s.cachedVariants:Po(s)?mt(s,{starts:s.starts?mt(s.starts):null}):Object.isFrozen(s)?mt(s):s}var fu="11.5.0";class du extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const Un=xo,tl=mt,nl=Symbol("nomatch"),pu=7,mu=function(s){const e=Object.create(null),t=Object.create(null),n=[];let l=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:xc};function a(I){return r.noHighlightRe.test(I)}function c(I){let B=I.className+" ";B+=I.parentNode?I.parentNode.className:"";const X=r.languageDetectRe.exec(B);if(X){const oe=F(X[1]);return oe||(el(o.replace("{}",X[1])),el("Falling back to no-highlight mode for this block.",I)),oe?X[1]:"no-highlight"}return B.split(/\s+/).find(oe=>a(oe)||F(oe))}function u(I,B,X){let oe="",ue="";typeof B=="object"?(oe=I,X=B.ignoreIllegals,ue=B.language):(Ot("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ot("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ue=I,oe=B),X===void 0&&(X=!0);const ce={code:oe,language:ue};we("before:highlight",ce);const Oe=ce.result?ce.result:f(ce.language,ce.code,X);return Oe.code=ce.code,we("after:highlight",Oe),Oe}function f(I,B,X,oe){const ue=Object.create(null);function ce(z,G){return z.keywords[G]}function Oe(){if(!ie.keywords){Ie.addText(be);return}let z=0;ie.keywordPatternRe.lastIndex=0;let G=ie.keywordPatternRe.exec(be),ne="";for(;G;){ne+=be.substring(z,G.index);const H=Ne.case_insensitive?G[0].toLowerCase():G[0],me=ce(ie,H);if(me){const[Le,Ce]=me;if(Ie.addText(ne),ne="",ue[H]=(ue[H]||0)+1,ue[H]<=pu&&(Ke+=Ce),Le.startsWith("_"))ne+=G[0];else{const wt=Ne.classNameAliases[Le]||Le;Ie.addKeyword(G[0],wt)}}else ne+=G[0];z=ie.keywordPatternRe.lastIndex,G=ie.keywordPatternRe.exec(be)}ne+=be.substr(z),Ie.addText(ne)}function Fe(){if(be==="")return;let z=null;if(typeof ie.subLanguage=="string"){if(!e[ie.subLanguage]){Ie.addText(be);return}z=f(ie.subLanguage,be,!0,Ct[ie.subLanguage]),Ct[ie.subLanguage]=z._top}else z=p(be,ie.subLanguage.length?ie.subLanguage:null);ie.relevance>0&&(Ke+=z.relevance),Ie.addSublanguage(z._emitter,z.language)}function Ee(){ie.subLanguage!=null?Fe():Oe(),be=""}function he(z,G){let ne=1;const H=G.length-1;for(;ne<=H;){if(!z._emit[ne]){ne++;continue}const me=Ne.classNameAliases[z[ne]]||z[ne],Le=G[ne];me?Ie.addKeyword(Le,me):(be=Le,Oe(),be=""),ne++}}function te(z,G){return z.scope&&typeof z.scope=="string"&&Ie.openNode(Ne.classNameAliases[z.scope]||z.scope),z.beginScope&&(z.beginScope._wrap?(Ie.addKeyword(be,Ne.classNameAliases[z.beginScope._wrap]||z.beginScope._wrap),be=""):z.beginScope._multi&&(he(z.beginScope,G),be="")),ie=Object.create(z,{parent:{value:ie}}),ie}function Se(z,G,ne){let H=Ac(z.endRe,ne);if(H){if(z["on:end"]){const me=new Vs(z);z["on:end"](G,me),me.isMatchIgnored&&(H=!1)}if(H){for(;z.endsParent&&z.parent;)z=z.parent;return z}}if(z.endsWithParent)return Se(z.parent,G,ne)}function _e(z){return ie.matcher.regexIndex===0?(be+=z[0],1):(lt=!0,0)}function fe(z){const G=z[0],ne=z.rule,H=new Vs(ne),me=[ne.__beforeBegin,ne["on:begin"]];for(const Le of me)if(!!Le&&(Le(z,H),H.isMatchIgnored))return _e(G);return ne.skip?be+=G:(ne.excludeBegin&&(be+=G),Ee(),!ne.returnBegin&&!ne.excludeBegin&&(be=G)),te(ne,z),ne.returnBegin?0:G.length}function J(z){const G=z[0],ne=B.substr(z.index),H=Se(ie,z,ne);if(!H)return nl;const me=ie;ie.endScope&&ie.endScope._wrap?(Ee(),Ie.addKeyword(G,ie.endScope._wrap)):ie.endScope&&ie.endScope._multi?(Ee(),he(ie.endScope,z)):me.skip?be+=G:(me.returnEnd||me.excludeEnd||(be+=G),Ee(),me.excludeEnd&&(be=G));do ie.scope&&Ie.closeNode(),!ie.skip&&!ie.subLanguage&&(Ke+=ie.relevance),ie=ie.parent;while(ie!==H.parent);return H.starts&&te(H.starts,z),me.returnEnd?0:G.length}function Pe(){const z=[];for(let G=ie;G!==Ne;G=G.parent)G.scope&&z.unshift(G.scope);z.forEach(G=>Ie.openNode(G))}let Re={};function ve(z,G){const ne=G&&G[0];if(be+=z,ne==null)return Ee(),0;if(Re.type==="begin"&&G.type==="end"&&Re.index===G.index&&ne===""){if(be+=B.slice(G.index,G.index+1),!l){const H=new Error(`0 width match regex (${I})`);throw H.languageName=I,H.badRule=Re.rule,H}return 1}if(Re=G,G.type==="begin")return fe(G);if(G.type==="illegal"&&!X){const H=new Error('Illegal lexeme "'+ne+'" for mode "'+(ie.scope||"<unnamed>")+'"');throw H.mode=ie,H}else if(G.type==="end"){const H=J(G);if(H!==nl)return H}if(G.type==="illegal"&&ne==="")return 1;if(At>1e5&&At>G.index*3)throw new Error("potential infinite loop, way more iterations than matches");return be+=ne,ne.length}const Ne=F(I);if(!Ne)throw kt(o.replace("{}",I)),new Error('Unknown language: "'+I+'"');const tn=cu(Ne);let pt="",ie=oe||tn;const Ct={},Ie=new r.__emitter(r);Pe();let be="",Ke=0,Qe=0,At=0,lt=!1;try{for(ie.matcher.considerAll();;){At++,lt?lt=!1:ie.matcher.considerAll(),ie.matcher.lastIndex=Qe;const z=ie.matcher.exec(B);if(!z)break;const G=B.substring(Qe,z.index),ne=ve(G,z);Qe=z.index+ne}return ve(B.substr(Qe)),Ie.closeAllNodes(),Ie.finalize(),pt=Ie.toHTML(),{language:I,value:pt,relevance:Ke,illegal:!1,_emitter:Ie,_top:ie}}catch(z){if(z.message&&z.message.includes("Illegal"))return{language:I,value:Un(B),illegal:!0,relevance:0,_illegalBy:{message:z.message,index:Qe,context:B.slice(Qe-100,Qe+100),mode:z.mode,resultSoFar:pt},_emitter:Ie};if(l)return{language:I,value:Un(B),illegal:!1,relevance:0,errorRaised:z,_emitter:Ie,_top:ie};throw z}}function d(I){const B={value:Un(I),illegal:!1,relevance:0,_top:i,_emitter:new r.__emitter(r)};return B._emitter.addText(I),B}function p(I,B){B=B||r.languages||Object.keys(e);const X=d(I),oe=B.filter(F).filter(U).map(Ee=>f(Ee,I,!1));oe.unshift(X);const ue=oe.sort((Ee,he)=>{if(Ee.relevance!==he.relevance)return he.relevance-Ee.relevance;if(Ee.language&&he.language){if(F(Ee.language).supersetOf===he.language)return 1;if(F(he.language).supersetOf===Ee.language)return-1}return 0}),[ce,Oe]=ue,Fe=ce;return Fe.secondBest=Oe,Fe}function m(I,B,X){const oe=B&&t[B]||X;I.classList.add("hljs"),I.classList.add(`language-${oe}`)}function _(I){let B=null;const X=c(I);if(a(X))return;if(we("before:highlightElement",{el:I,language:X}),I.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(I)),r.throwUnescapedHTML))throw new du("One of your code blocks includes unescaped HTML.",I.innerHTML);B=I;const oe=B.textContent,ue=X?u(oe,{language:X,ignoreIllegals:!0}):p(oe);I.innerHTML=ue.value,m(I,X,ue.language),I.result={language:ue.language,re:ue.relevance,relevance:ue.relevance},ue.secondBest&&(I.secondBest={language:ue.secondBest.language,relevance:ue.secondBest.relevance}),we("after:highlightElement",{el:I,result:ue,text:oe})}function $(I){r=tl(r,I)}const E=()=>{N(),Ot("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function x(){N(),Ot("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let R=!1;function N(){if(document.readyState==="loading"){R=!0;return}document.querySelectorAll(r.cssSelector).forEach(_)}function M(){R&&N()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",M,!1);function O(I,B){let X=null;try{X=B(s)}catch(oe){if(kt("Language definition for '{}' could not be registered.".replace("{}",I)),l)kt(oe);else throw oe;X=i}X.name||(X.name=I),e[I]=X,X.rawDefinition=B.bind(null,s),X.aliases&&j(X.aliases,{languageName:I})}function P(I){delete e[I];for(const B of Object.keys(t))t[B]===I&&delete t[B]}function D(){return Object.keys(e)}function F(I){return I=(I||"").toLowerCase(),e[I]||e[t[I]]}function j(I,{languageName:B}){typeof I=="string"&&(I=[I]),I.forEach(X=>{t[X.toLowerCase()]=B})}function U(I){const B=F(I);return B&&!B.disableAutodetect}function W(I){I["before:highlightBlock"]&&!I["before:highlightElement"]&&(I["before:highlightElement"]=B=>{I["before:highlightBlock"](Object.assign({block:B.el},B))}),I["after:highlightBlock"]&&!I["after:highlightElement"]&&(I["after:highlightElement"]=B=>{I["after:highlightBlock"](Object.assign({block:B.el},B))})}function le(I){W(I),n.push(I)}function we(I,B){const X=I;n.forEach(function(oe){oe[X]&&oe[X](B)})}function ee(I){return Ot("10.7.0","highlightBlock will be removed entirely in v12.0"),Ot("10.7.0","Please use highlightElement now."),_(I)}Object.assign(s,{highlight:u,highlightAuto:p,highlightAll:N,highlightElement:_,highlightBlock:ee,configure:$,initHighlighting:E,initHighlightingOnLoad:x,registerLanguage:O,unregisterLanguage:P,listLanguages:D,getLanguage:F,registerAliases:j,autoDetection:U,inherit:tl,addPlugin:le}),s.debugMode=function(){l=!1},s.safeMode=function(){l=!0},s.versionString=fu,s.regex={concat:St,lookahead:Eo,either:as,optional:Sc,anyNumberOfTimes:Ec};for(const I in an)typeof an[I]=="object"&&vc(an[I]);return Object.assign(s,an),s};var Xt=mu({}),hu=Xt;Xt.HighlightJS=Xt;Xt.default=Xt;var cn=hu;function gu(s){const e=s.regex,t=e.concat(/[A-Z_]/,e.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),n=/[A-Za-z0-9._:-]+/,l={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=s.inherit(o,{begin:/\(/,end:/\)/}),r=s.inherit(s.APOS_STRING_MODE,{className:"string"}),a=s.inherit(s.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:n,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[l]},{begin:/'/,end:/'/,contains:[l]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,a,r,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,i,a,r]}]}]},s.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},l,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const sl="[A-Za-z$_][0-9A-Za-z$_]*",_u=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],bu=["true","false","null","undefined","NaN","Infinity"],Io=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Lo=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Do=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],$u=["arguments","this","super","console","window","document","localStorage","module","global"],wu=[].concat(Do,Io,Lo);function vu(s){const e=s.regex,t=(B,{after:X})=>{const oe="</"+B[0].slice(1);return B.input.indexOf(oe,X)!==-1},n=sl,l={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(B,X)=>{const oe=B[0].length+B.index,ue=B.input[oe];if(ue==="<"||ue===","){X.ignoreMatch();return}ue===">"&&(t(B,{after:oe})||X.ignoreMatch());let ce;if((ce=B.input.substr(oe).match(/^\s+extends\s+/))&&ce.index===0){X.ignoreMatch();return}}},r={$pattern:sl,keyword:_u,literal:bu,built_in:wu,"variable.language":$u},a="[0-9](_?[0-9])*",c=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},m={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"css"}},_={className:"string",begin:"`",end:"`",contains:[s.BACKSLASH_ESCAPE,d]},$=s.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),E={className:"comment",variants:[$,s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE]},x=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,p,m,_,f];d.contains=x.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(x)});const R=[].concat(E,d.contains),N=R.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(R)}]),M={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:N},O={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,e.concat(n,"(",e.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},P={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Io,...Lo]}},D={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},F={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[M],illegal:/%/},j={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function U(B){return e.concat("(?!",B.join("|"),")")}const W={match:e.concat(/\b/,U([...Do,"super"]),n,e.lookahead(/\(/)),className:"title.function",relevance:0},le={begin:e.concat(/\./,e.lookahead(e.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},we={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},M]},ee="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+s.UNDERSCORE_IDENT_RE+")\\s*=>",I={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(ee)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[M]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:N,CLASS_REFERENCE:P},illegal:/#(?![$_A-z])/,contains:[s.SHEBANG({label:"shebang",binary:"node",relevance:5}),D,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,p,m,_,E,f,P,{className:"attr",begin:n+e.lookahead(":"),relevance:0},I,{begin:"("+s.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[E,s.REGEXP_MODE,{className:"function",begin:ee,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:N}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:l.begin,end:l.end},{match:o},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},F,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+s.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[M,s.inherit(s.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},le,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[M]},W,j,O,we,{match:/\$[(.]/}]}}const ku=s=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:s.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:s.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),yu=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Tu=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],xu=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],Eu=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],Su=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function Cu(s){const e=s.regex,t=ku(s),n={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},l="and or not only",o=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",r=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,n,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+xu.join("|")+")"},{begin:":(:)?("+Eu.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Su.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...r,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:e.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:o},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:l,attribute:Tu.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...r,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+yu.join("|")+")\\b"}]}}const Au=s=>({highlighted:s&2}),ll=s=>({highlighted:s[1]});function Ru(s){let e,t,n=[{"data-language":"svelte"},s[2]],l={};for(let o=0;o<n.length;o+=1)l=Xe(l,n[o]);return{c(){e=b("pre"),t=b("code"),g(t,"class","hljs"),vs(e,l),We(e,"langtag",s[0]),We(e,"svelte-1xjucv4",!0)},m(o,i){v(o,e,i),h(e,t),t.innerHTML=s[1]},p(o,i){i&2&&(t.innerHTML=o[1]),vs(e,l=Tt(n,[{"data-language":"svelte"},i&4&&o[2]])),We(e,"langtag",o[0]),We(e,"svelte-1xjucv4",!0)},d(o){o&&w(e)}}}function Nu(s){let e;const t=s[5].default,n=ke(t,s,s[4],ll),l=n||Ru(s);return{c(){l&&l.c()},m(o,i){l&&l.m(o,i),e=!0},p(o,[i]){n?n.p&&(!e||i&18)&&Te(n,t,o,o[4],e?ye(t,o[4],i,Au):xe(o[4]),ll):l&&l.p&&(!e||i&7)&&l.p(o,e?i:-1)},i(o){e||(k(l,o),e=!0)},o(o){y(l,o),e=!1},d(o){l&&l.d(o)}}}function Mu(s,e,t){let n;const l=["code","langtag"];let o=mn(e,l),{$$slots:i={},$$scope:r}=e,{code:a=void 0}=e,{langtag:c=!1}=e;const u=es();return cn.registerLanguage("xml",gu),cn.registerLanguage("javascript",vu),cn.registerLanguage("css",Cu),wi(()=>{n&&u("highlight",{highlighted:n})}),s.$$set=f=>{e=Xe(Xe({},e),io(f)),t(2,o=mn(e,l)),"code"in f&&t(3,a=f.code),"langtag"in f&&t(0,c=f.langtag),"$$scope"in f&&t(4,r=f.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(1,n=cn.highlightAuto(a).value)},[c,n,o,a,r,i]}class Ve extends V{constructor(e){super(),Y(this,e,Mu,Nu,K,{code:3,langtag:0})}}function Ou(s){let e;return{c(){e=L("First")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Pu(s){let e;return{c(){e=L("Second")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Iu(s){let e;return{c(){e=L("Third")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function ol(s){let e,t;return e=new pe({props:{$$slots:{default:[Lu]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},p(n,l){const o={};l&2050&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Lu(s){let e,t,n,l;return{c(){e=L("Fourth "),t=b("span"),t.textContent="\xD7"},m(o,i){v(o,e,i),v(o,t,i),n||(l=Z(t,"click",s[4]),n=!0)},p:Q,d(o){o&&w(e),o&&w(t),n=!1,l()}}}function il(s){let e,t;return e=new pe({props:{$$slots:{default:[Du]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},p(n,l){const o={};l&2052&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Du(s){let e,t,n,l;return{c(){e=L("Fifth "),t=b("span"),t.textContent="\xD7"},m(o,i){v(o,e,i),v(o,t,i),n||(l=Z(t,"click",s[5]),n=!0)},p:Q,d(o){o&&w(e),o&&w(t),n=!1,l()}}}function Fu(s){let e,t,n,l,o,i,r,a,c;e=new pe({props:{$$slots:{default:[Ou]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[Pu]},$$scope:{ctx:s}}}),o=new pe({props:{disabled:s[0],$$slots:{default:[Iu]},$$scope:{ctx:s}}});let u=s[1]&&ol(s),f=s[2]&&il(s);return{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),u&&u.c(),r=T(),f&&f.c(),a=ge()},m(d,p){S(e,d,p),v(d,t,p),S(n,d,p),v(d,l,p),S(o,d,p),v(d,i,p),u&&u.m(d,p),v(d,r,p),f&&f.m(d,p),v(d,a,p),c=!0},p(d,p){const m={};p&2048&&(m.$$scope={dirty:p,ctx:d}),e.$set(m);const _={};p&2048&&(_.$$scope={dirty:p,ctx:d}),n.$set(_);const $={};p&1&&($.disabled=d[0]),p&2048&&($.$$scope={dirty:p,ctx:d}),o.$set($),d[1]?u?(u.p(d,p),p&2&&k(u,1)):(u=ol(d),u.c(),k(u,1),u.m(r.parentNode,r)):u&&(re(),y(u,1,1,()=>{u=null}),ae()),d[2]?f?(f.p(d,p),p&4&&k(f,1)):(f=il(d),f.c(),k(f,1),f.m(a.parentNode,a)):f&&(re(),y(f,1,1,()=>{f=null}),ae())},i(d){c||(k(e.$$.fragment,d),k(n.$$.fragment,d),k(o.$$.fragment,d),k(u),k(f),c=!0)},o(d){y(e.$$.fragment,d),y(n.$$.fragment,d),y(o.$$.fragment,d),y(u),y(f),c=!1},d(d){C(e,d),d&&w(t),C(n,d),d&&w(l),C(o,d),d&&w(i),u&&u.d(d),d&&w(r),f&&f.d(d),d&&w(a)}}}function zu(s){let e;return{c(){e=b("div"),e.textContent="These are the first diamonds I ever took from my first mine."},m(t,n){v(t,e,n)},p:Q,d(t){t&&w(e)}}}function Bu(s){let e;return{c(){e=b("div"),e.textContent="The second stage supplements the first stage by adding the second rail tunnel."},m(t,n){v(t,e,n)},p:Q,d(t){t&&w(e)}}}function Hu(s){let e;return{c(){e=b("div"),e.textContent="Let's not worry about third or fourth place."},m(t,n){v(t,e,n)},p:Q,d(t){t&&w(e)}}}function rl(s){let e,t;return e=new de({props:{$$slots:{default:[ju]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ju(s){let e;return{c(){e=b("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,n){v(t,e,n)},p:Q,d(t){t&&w(e)}}}function al(s){let e,t;return e=new de({props:{$$slots:{default:[Uu]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Uu(s){let e;return{c(){e=b("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,n){v(t,e,n)},p:Q,d(t){t&&w(e)}}}function qu(s){let e,t,n,l,o,i,r,a,c,u,f;e=new st({props:{$$slots:{default:[Fu]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[zu]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[Bu]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[Hu]},$$scope:{ctx:s}}});let d=s[1]&&rl(s),p=s[2]&&al(s);return{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment),a=T(),d&&d.c(),c=T(),p&&p.c(),u=ge()},m(m,_){S(e,m,_),v(m,t,_),S(n,m,_),v(m,l,_),S(o,m,_),v(m,i,_),S(r,m,_),v(m,a,_),d&&d.m(m,_),v(m,c,_),p&&p.m(m,_),v(m,u,_),f=!0},p(m,_){const $={};_&2055&&($.$$scope={dirty:_,ctx:m}),e.$set($);const E={};_&2048&&(E.$$scope={dirty:_,ctx:m}),n.$set(E);const x={};_&2048&&(x.$$scope={dirty:_,ctx:m}),o.$set(x);const R={};_&2048&&(R.$$scope={dirty:_,ctx:m}),r.$set(R),m[1]?d?_&2&&k(d,1):(d=rl(m),d.c(),k(d,1),d.m(c.parentNode,c)):d&&(re(),y(d,1,1,()=>{d=null}),ae()),m[2]?p?_&4&&k(p,1):(p=al(m),p.c(),k(p,1),p.m(u.parentNode,u)):p&&(re(),y(p,1,1,()=>{p=null}),ae())},i(m){f||(k(e.$$.fragment,m),k(n.$$.fragment,m),k(o.$$.fragment,m),k(r.$$.fragment,m),k(d),k(p),f=!0)},o(m){y(e.$$.fragment,m),y(n.$$.fragment,m),y(o.$$.fragment,m),y(r.$$.fragment,m),y(d),y(p),f=!1},d(m){C(e,m),m&&w(t),C(n,m),m&&w(l),C(o,m),m&&w(i),C(r,m),m&&w(a),d&&d.d(m),m&&w(c),p&&p.d(m),m&&w(u)}}}function Wu(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M,O,P,D,F,j,U={class:"mb-4",$$slots:{default:[qu]},$$scope:{ctx:s}};return t=new nt({props:U}),s[6](t),P=new Ve({props:{code:`<script lang="ts">
  import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';

  let disable3 = false;
  let show4 = false;
  let show5 = false;
  let tabsRef: Tabs;
<\/script>
    
<section class="prose max-w-none my-4">
  <Tabs class="mb-4" bind:this={tabsRef}>
    <TabList>
      <Tab>First</Tab>
      <Tab>Second</Tab>
      <Tab disabled={disable3}>Third</Tab>
      {#if show4}
        <Tab>Fourth <span on:click={() => (show4 = false)}>&times;</span></Tab>
      {/if}
      {#if show5}
        <Tab>Fifth <span on:click={() => (show5 = false)}>&times;</span></Tab>
      {/if}
    </TabList>
    <TabPanel>
      <div>These are the first diamonds I ever took from my first mine.</div>
    </TabPanel>
    <TabPanel>
      <div>The second stage supplements the first stage by adding the second rail tunnel.</div>
    </TabPanel>
    <TabPanel>
      <div>Let's not worry about third or fourth place.</div>
    </TabPanel>
    {#if show4}
      <TabPanel>
        <div>The fourth is the process of Timorization through capacity-building.</div>
      </TabPanel>
    {/if}
    {#if show5}
      <TabPanel>
        <div>The fourth is the process of Timorization through capacity-building.</div>
      </TabPanel>
    {/if}
  </Tabs>

  <div class="flex items-center gap-4">
    <label><input type="checkbox" bind:checked={show4} /> Fourth</label>
    <label><input type="checkbox" bind:checked={show5} /> Fifth</label>
    <label><input type="checkbox" bind:checked={disable3} /> Disable Third</label>
    <label
      >Select&emsp;<input
        class="input max-w-[6ch]"
        type="number"
        min="-5"
        max="4"
        on:change|self={(e) => tabsRef.selectTab(+e.currentTarget.value)}
      /></label
    >
  </div>
</section>

<style lang="postcss">
  section :global(.c-tabs__tablist) {
    @apply border-blue-200;
  }

  section :global(.c-tabs__tab) {
    @apply text-blue-700;
  }

  section :global(.c-tabs__tab span) {
    @apply ml-1 text-blue-400;
  }

  section :global(.c-tabs__tab span:hover) {
    @apply text-blue-900;
  }

  section :global(.c-tabs__tab:disabled) {
    @apply text-blue-400;
  }

  section :global(.c-tabs__tab.active) {
    @apply bg-blue-200  border-blue-700;
  }

  section :global(.c-tabs__tabpanel) {
    @apply text-blue-500;
  }
</style>`}}),{c(){e=b("section"),A(t.$$.fragment),n=T(),l=b("div"),o=b("label"),i=b("input"),r=L(" Fourth"),a=T(),c=b("label"),u=b("input"),f=L(" Fifth"),d=T(),p=b("label"),m=b("input"),_=L(" Disable Third"),$=T(),E=b("label"),x=L("Select\u2003"),R=b("input"),N=T(),M=b("h3"),M.textContent="Code",O=T(),A(P.$$.fragment),g(i,"type","checkbox"),g(u,"type","checkbox"),g(m,"type","checkbox"),g(R,"class","input max-w-[6ch]"),g(R,"type","number"),g(R,"min","-5"),g(R,"max","4"),g(l,"class","flex items-center gap-4"),g(e,"class","prose max-w-none my-4 svelte-1b9uk6h")},m(W,le){v(W,e,le),S(t,e,null),h(e,n),h(e,l),h(l,o),h(o,i),i.checked=s[1],h(o,r),h(l,a),h(l,c),h(c,u),u.checked=s[2],h(c,f),h(l,d),h(l,p),h(p,m),m.checked=s[0],h(p,_),h(l,$),h(l,E),h(E,x),h(E,R),h(e,N),h(e,M),h(e,O),S(P,e,null),D=!0,F||(j=[Z(i,"change",s[7]),Z(u,"change",s[8]),Z(m,"change",s[9]),Z(R,"change",mi(s[10]))],F=!0)},p(W,[le]){const we={};le&2055&&(we.$$scope={dirty:le,ctx:W}),t.$set(we),le&2&&(i.checked=W[1]),le&4&&(u.checked=W[2]),le&1&&(m.checked=W[0])},i(W){D||(k(t.$$.fragment,W),k(P.$$.fragment,W),D=!0)},o(W){y(t.$$.fragment,W),y(P.$$.fragment,W),D=!1},d(W){W&&w(e),s[6](null),C(t),C(P),F=!1,Me(j)}}}function Gu(s,e,t){let n=!1,l=!1,o=!1,i;const r=()=>t(1,l=!1),a=()=>t(2,o=!1);function c(m){De[m?"unshift":"push"](()=>{i=m,t(3,i)})}function u(){l=this.checked,t(1,l)}function f(){o=this.checked,t(2,o)}function d(){n=this.checked,t(0,n)}return[n,l,o,i,r,a,c,u,f,d,m=>i.selectTab(+m.currentTarget.value)]}class Zu extends V{constructor(e){super(),Y(this,e,Gu,Wu,K,{})}}function Ku(s){let e;return{c(){e=L("First-A")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Xu(s){let e;return{c(){e=L("First-B")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Yu(s){let e;return{c(){e=L("First-C")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Vu(s){let e;return{c(){e=L("First-D")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Qu(s){let e;return{c(){e=L("First-E")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Ju(s){let e,t,n,l,o,i,r,a,c,u;return e=new pe({props:{$$slots:{default:[Ku]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[Xu]},$$scope:{ctx:s}}}),o=new pe({props:{disabled:!0,$$slots:{default:[Yu]},$$scope:{ctx:s}}}),r=new pe({props:{$$slots:{default:[Vu]},$$scope:{ctx:s}}}),c=new pe({props:{$$slots:{default:[Qu]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment),a=T(),A(c.$$.fragment)},m(f,d){S(e,f,d),v(f,t,d),S(n,f,d),v(f,l,d),S(o,f,d),v(f,i,d),S(r,f,d),v(f,a,d),S(c,f,d),u=!0},p(f,d){const p={};d&2&&(p.$$scope={dirty:d,ctx:f}),e.$set(p);const m={};d&2&&(m.$$scope={dirty:d,ctx:f}),n.$set(m);const _={};d&2&&(_.$$scope={dirty:d,ctx:f}),o.$set(_);const $={};d&2&&($.$$scope={dirty:d,ctx:f}),r.$set($);const E={};d&2&&(E.$$scope={dirty:d,ctx:f}),c.$set(E)},i(f){u||(k(e.$$.fragment,f),k(n.$$.fragment,f),k(o.$$.fragment,f),k(r.$$.fragment,f),k(c.$$.fragment,f),u=!0)},o(f){y(e.$$.fragment,f),y(n.$$.fragment,f),y(o.$$.fragment,f),y(r.$$.fragment,f),y(c.$$.fragment,f),u=!1},d(f){C(e,f),f&&w(t),C(n,f),f&&w(l),C(o,f),f&&w(i),C(r,f),f&&w(a),C(c,f)}}}function ef(s){let e;return{c(){e=L("Second-A")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function tf(s){let e;return{c(){e=L("Second-B")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function nf(s){let e;return{c(){e=L("Second-C")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function sf(s){let e,t,n,l,o,i;return e=new pe({props:{$$slots:{default:[ef]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[tf]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[nf]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment)},m(r,a){S(e,r,a),v(r,t,a),S(n,r,a),v(r,l,a),S(o,r,a),i=!0},p(r,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(k(e.$$.fragment,r),k(n.$$.fragment,r),k(o.$$.fragment,r),i=!0)},o(r){y(e.$$.fragment,r),y(n.$$.fragment,r),y(o.$$.fragment,r),i=!1},d(r){C(e,r),r&&w(t),C(n,r),r&&w(l),C(o,r)}}}function lf(s){let e;return{c(){e=L("Fourth-A")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function of(s){let e;return{c(){e=L("Fourth-B")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function rf(s){let e,t,n,l;return e=new pe({props:{$$slots:{default:[lf]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[of]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment)},m(o,i){S(e,o,i),v(o,t,i),S(n,o,i),l=!0},p(o,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:o}),e.$set(r);const a={};i&2&&(a.$$scope={dirty:i,ctx:o}),n.$set(a)},i(o){l||(k(e.$$.fragment,o),k(n.$$.fragment,o),l=!0)},o(o){y(e.$$.fragment,o),y(n.$$.fragment,o),l=!1},d(o){C(e,o),o&&w(t),C(n,o)}}}function af(s){let e,t=s[0]+"",n;return{c(){e=L("Fourth of Second-B. Tab: A, index "),n=L(t)},m(l,o){v(l,e,o),v(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&$e(n,t)},d(l){l&&w(e),l&&w(n)}}}function cf(s){let e,t=s[0]+"",n;return{c(){e=L("Fourth of Second-B. Tab: B, index "),n=L(t)},m(l,o){v(l,e,o),v(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&$e(n,t)},d(l){l&&w(e),l&&w(n)}}}function uf(s){let e,t,n,l,o,i;return e=new st({props:{$$slots:{default:[rf]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[af,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[cf,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment)},m(r,a){S(e,r,a),v(r,t,a),S(n,r,a),v(r,l,a),S(o,r,a),i=!0},p(r,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(k(e.$$.fragment,r),k(n.$$.fragment,r),k(o.$$.fragment,r),i=!0)},o(r){y(e.$$.fragment,r),y(n.$$.fragment,r),y(o.$$.fragment,r),i=!1},d(r){C(e,r),r&&w(t),C(n,r),r&&w(l),C(o,r)}}}function ff(s){let e,t,n=s[0]+"",l,o,i,r;return i=new nt({props:{class:"level-4",$$slots:{default:[uf]},$$scope:{ctx:s}}}),{c(){e=b("div"),t=L("Second of First-A. Tab: A, index "),l=L(n),o=T(),A(i.$$.fragment)},m(a,c){v(a,e,c),h(e,t),h(e,l),v(a,o,c),S(i,a,c),r=!0},p(a,c){(!r||c&1)&&n!==(n=a[0]+"")&&$e(l,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),i.$set(u)},i(a){r||(k(i.$$.fragment,a),r=!0)},o(a){y(i.$$.fragment,a),r=!1},d(a){a&&w(e),a&&w(o),C(i,a)}}}function df(s){let e,t=s[0]+"",n;return{c(){e=L("Second of First-A. Tab: B, index "),n=L(t)},m(l,o){v(l,e,o),v(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&$e(n,t)},d(l){l&&w(e),l&&w(n)}}}function pf(s){let e,t=s[0]+"",n;return{c(){e=L("Second of First-A. Tab: C, index "),n=L(t)},m(l,o){v(l,e,o),v(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&$e(n,t)},d(l){l&&w(e),l&&w(n)}}}function mf(s){let e,t,n,l,o,i,r,a;return e=new st({props:{$$slots:{default:[sf]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[ff,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[df,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[pf,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment)},m(c,u){S(e,c,u),v(c,t,u),S(n,c,u),v(c,l,u),S(o,c,u),v(c,i,u),S(r,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&3&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&3&&(p.$$scope={dirty:u,ctx:c}),o.$set(p);const m={};u&3&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(k(e.$$.fragment,c),k(n.$$.fragment,c),k(o.$$.fragment,c),k(r.$$.fragment,c),a=!0)},o(c){y(e.$$.fragment,c),y(n.$$.fragment,c),y(o.$$.fragment,c),y(r.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(l),C(o,c),c&&w(i),C(r,c)}}}function hf(s){let e,t,n=s[0]+"",l,o,i,r;return i=new nt({props:{class:"level-2",$$slots:{default:[mf]},$$scope:{ctx:s}}}),{c(){e=b("div"),t=L("First level. Tab: A, index "),l=L(n),o=T(),A(i.$$.fragment)},m(a,c){v(a,e,c),h(e,t),h(e,l),v(a,o,c),S(i,a,c),r=!0},p(a,c){(!r||c&1)&&n!==(n=a[0]+"")&&$e(l,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),i.$set(u)},i(a){r||(k(i.$$.fragment,a),r=!0)},o(a){y(i.$$.fragment,a),r=!1},d(a){a&&w(e),a&&w(o),C(i,a)}}}function gf(s){let e;return{c(){e=L("Third-A")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function _f(s){let e;return{c(){e=L("Third-B")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function bf(s){let e,t,n,l;return e=new pe({props:{$$slots:{default:[gf]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[_f]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment)},m(o,i){S(e,o,i),v(o,t,i),S(n,o,i),l=!0},p(o,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:o}),e.$set(r);const a={};i&2&&(a.$$scope={dirty:i,ctx:o}),n.$set(a)},i(o){l||(k(e.$$.fragment,o),k(n.$$.fragment,o),l=!0)},o(o){y(e.$$.fragment,o),y(n.$$.fragment,o),l=!1},d(o){C(e,o),o&&w(t),C(n,o)}}}function $f(s){let e,t=s[0]+"",n;return{c(){e=L("Third of First-B. Tab: A, index "),n=L(t)},m(l,o){v(l,e,o),v(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&$e(n,t)},d(l){l&&w(e),l&&w(n)}}}function wf(s){let e,t=s[0]+"",n;return{c(){e=L("Third of First-B. Tab: B, index "),n=L(t)},m(l,o){v(l,e,o),v(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&$e(n,t)},d(l){l&&w(e),l&&w(n)}}}function vf(s){let e,t,n,l,o,i;return e=new st({props:{$$slots:{default:[bf]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[$f,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[wf,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment)},m(r,a){S(e,r,a),v(r,t,a),S(n,r,a),v(r,l,a),S(o,r,a),i=!0},p(r,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(k(e.$$.fragment,r),k(n.$$.fragment,r),k(o.$$.fragment,r),i=!0)},o(r){y(e.$$.fragment,r),y(n.$$.fragment,r),y(o.$$.fragment,r),i=!1},d(r){C(e,r),r&&w(t),C(n,r),r&&w(l),C(o,r)}}}function kf(s){let e,t,n=s[0]+"",l,o,i,r;return i=new nt({props:{class:"level-3",$$slots:{default:[vf]},$$scope:{ctx:s}}}),{c(){e=b("div"),t=L("First level. Tab: B, index "),l=L(n),o=T(),A(i.$$.fragment)},m(a,c){v(a,e,c),h(e,t),h(e,l),v(a,o,c),S(i,a,c),r=!0},p(a,c){(!r||c&1)&&n!==(n=a[0]+"")&&$e(l,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),i.$set(u)},i(a){r||(k(i.$$.fragment,a),r=!0)},o(a){y(i.$$.fragment,a),r=!1},d(a){a&&w(e),a&&w(o),C(i,a)}}}function yf(s){let e,t=s[0]+"",n;return{c(){e=L("First level. Tab: C, index "),n=L(t)},m(l,o){v(l,e,o),v(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&$e(n,t)},d(l){l&&w(e),l&&w(n)}}}function Tf(s){let e,t=s[0]+"",n;return{c(){e=L("First level. Tab: D, index "),n=L(t)},m(l,o){v(l,e,o),v(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&$e(n,t)},d(l){l&&w(e),l&&w(n)}}}function xf(s){let e,t=s[0]+"",n;return{c(){e=L("First level. Tab: E, index "),n=L(t)},m(l,o){v(l,e,o),v(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&$e(n,t)},d(l){l&&w(e),l&&w(n)}}}function Ef(s){let e,t,n,l,o,i,r,a,c,u,f,d;return e=new st({props:{$$slots:{default:[Ju]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[hf,({index:p})=>({0:p}),({index:p})=>p?1:0]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[kf,({index:p})=>({0:p}),({index:p})=>p?1:0]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[yf,({index:p})=>({0:p}),({index:p})=>p?1:0]},$$scope:{ctx:s}}}),c=new de({props:{$$slots:{default:[Tf,({index:p})=>({0:p}),({index:p})=>p?1:0]},$$scope:{ctx:s}}}),f=new de({props:{$$slots:{default:[xf,({index:p})=>({0:p}),({index:p})=>p?1:0]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment),a=T(),A(c.$$.fragment),u=T(),A(f.$$.fragment)},m(p,m){S(e,p,m),v(p,t,m),S(n,p,m),v(p,l,m),S(o,p,m),v(p,i,m),S(r,p,m),v(p,a,m),S(c,p,m),v(p,u,m),S(f,p,m),d=!0},p(p,m){const _={};m&2&&(_.$$scope={dirty:m,ctx:p}),e.$set(_);const $={};m&3&&($.$$scope={dirty:m,ctx:p}),n.$set($);const E={};m&3&&(E.$$scope={dirty:m,ctx:p}),o.$set(E);const x={};m&3&&(x.$$scope={dirty:m,ctx:p}),r.$set(x);const R={};m&3&&(R.$$scope={dirty:m,ctx:p}),c.$set(R);const N={};m&3&&(N.$$scope={dirty:m,ctx:p}),f.$set(N)},i(p){d||(k(e.$$.fragment,p),k(n.$$.fragment,p),k(o.$$.fragment,p),k(r.$$.fragment,p),k(c.$$.fragment,p),k(f.$$.fragment,p),d=!0)},o(p){y(e.$$.fragment,p),y(n.$$.fragment,p),y(o.$$.fragment,p),y(r.$$.fragment,p),y(c.$$.fragment,p),y(f.$$.fragment,p),d=!1},d(p){C(e,p),p&&w(t),C(n,p),p&&w(l),C(o,p),p&&w(i),C(r,p),p&&w(a),C(c,p),p&&w(u),C(f,p)}}}function Sf(s){let e,t,n,l,o,i,r;return t=new nt({props:{class:"level-1 min-h-[280px]",$$slots:{default:[Ef]},$$scope:{ctx:s}}}),i=new Ve({props:{code:`<section class="prose max-w-none my-4">
  <Tabs class="level-1 min-h-[280px]">
    <TabList>
      <Tab>First-A</Tab>
      <Tab>First-B</Tab>
      <Tab disabled>First-C</Tab>
      <Tab>First-D</Tab>
      <Tab>First-E</Tab>
    </TabList>

    <TabPanel let:index>
      <div>First level. Tab: A, index {index}</div>
      <Tabs class="level-2">
        <TabList>
          <Tab>Second-A</Tab>
          <Tab>Second-B</Tab>
          <Tab>Second-C</Tab>
        </TabList>
        <TabPanel let:index>
          <div>Second of First-A. Tab: A, index {index}</div>
          <Tabs class="level-4">
            <TabList>
              <Tab>Fourth-A</Tab>
              <Tab>Fourth-B</Tab>
            </TabList>
            <TabPanel let:index>Fourth of Second-B. Tab: A, index {index}</TabPanel>
            <TabPanel let:index>Fourth of Second-B. Tab: B, index {index}</TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel let:index>Second of First-A. Tab: B, index {index}</TabPanel>
        <TabPanel let:index>Second of First-A. Tab: C, index {index}</TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel let:index>
      <div>First level. Tab: B, index {index}</div>
      <Tabs class="level-3">
        <TabList>
          <Tab>Third-A</Tab>
          <Tab>Third-B</Tab>
        </TabList>
        <TabPanel let:index>Third of First-B. Tab: A, index {index}</TabPanel>
        <TabPanel let:index>Third of First-B. Tab: B, index {index}</TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel let:index>First level. Tab: C, index {index}</TabPanel>
    <TabPanel let:index>First level. Tab: D, index {index}</TabPanel>
    <TabPanel let:index>First level. Tab: E, index {index}</TabPanel>
  </Tabs>
</section>

<style lang="postcss">
  section :global(.c-tabs.level-1 .c-tabs__tablist) {
    @apply border-red-200;
  }
  section :global(.c-tabs.level-1 .c-tabs__tab) {
    @apply text-red-700;
  }
  section :global(.c-tabs.level-1 .c-tabs__tab:disabled) {
    @apply text-red-400;
  }
  section :global(.c-tabs.level-1 .c-tabs__tab.active) {
    @apply bg-red-200 border-red-700;
  }

  section :global(.c-tabs.level-2 .c-tabs__tablist) {
    @apply border-green-200;
  }
  section :global(.c-tabs.level-2 .c-tabs__tab) {
    @apply text-green-700;
  }
  section :global(.c-tabs.level-2 .c-tabs__tab:disabled) {
    @apply text-green-400;
  }
  section :global(.c-tabs.level-2 .c-tabs__tab.active) {
    @apply bg-green-200 border-green-700;
  }

  section :global(.c-tabs.level-3 .c-tabs__tablist) {
    @apply border-indigo-200;
  }
  section :global(.c-tabs.level-3 .c-tabs__tab) {
    @apply text-indigo-700;
  }
  section :global(.c-tabs.level-3 .c-tabs__tab:disabled) {
    @apply text-indigo-400;
  }
  section :global(.c-tabs.level-3 .c-tabs__tab.active) {
    @apply bg-indigo-200 border-indigo-700;
  }

  section :global(.c-tabs.level-4 .c-tabs__tablist) {
    @apply border-orange-200;
  }
  section :global(.c-tabs.level-4 .c-tabs__tab) {
    @apply text-orange-700;
  }
  section :global(.c-tabs.level-4 .c-tabs__tab:disabled) {
    @apply text-orange-400;
  }
  section :global(.c-tabs.level-4 .c-tabs__tab.active) {
    @apply bg-orange-200 border-orange-700;
  }
</style>`}}),{c(){e=b("section"),A(t.$$.fragment),n=T(),l=b("h3"),l.textContent="Code",o=T(),A(i.$$.fragment),g(e,"class","prose max-w-none my-4 svelte-3sljvb")},m(a,c){v(a,e,c),S(t,e,null),h(e,n),h(e,l),h(e,o),S(i,e,null),r=!0},p(a,[c]){const u={};c&2&&(u.$$scope={dirty:c,ctx:a}),t.$set(u)},i(a){r||(k(t.$$.fragment,a),k(i.$$.fragment,a),r=!0)},o(a){y(t.$$.fragment,a),y(i.$$.fragment,a),r=!1},d(a){a&&w(e),C(t),C(i)}}}class Cf extends V{constructor(e){super(),Y(this,e,null,Sf,K,{})}}function cl(s,e,t){const n=s.slice();return n[13]=e[t],n}function ul(s,e,t){const n=s.slice();return n[17]=e[t],n}function fl(s,e,t){const n=s.slice();return n[21]=e[t],n[23]=t,n}function dl(s,e,t){const n=s.slice();return n[21]=e[t],n}function Af(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:Of,then:Mf,catch:Nf,value:24,error:20};return _n(t=s[1],n),{c(){e=ge(),n.block.c()},m(l,o){v(l,e,o),n.block.m(l,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e},p(l,o){s=l,n.ctx=s,o&2&&t!==(t=s[1])&&_n(t,n)||go(n,s,o)},d(l){l&&w(e),n.block.d(l),n.token=null,n=null}}}function Rf(s){let e,t,n;return{c(){e=b("button"),e.textContent="Request authors",g(e,"class","input")},m(l,o){v(l,e,o),t||(n=Z(e,"click",s[8]),t=!0)},p:Q,d(l){l&&w(e),t=!1,n()}}}function Nf(s){let e,t,n,l=(s[20]instanceof Error?s[20].message:s[20])+"",o;return{c(){e=b("div"),t=L("Loading authors error: "),n=b("strong"),o=L(l),g(n,"class","text-red-600"),g(e,"class","text-red-400")},m(i,r){v(i,e,r),h(e,t),h(e,n),h(n,o)},p(i,r){r&2&&l!==(l=(i[20]instanceof Error?i[20].message:i[20])+"")&&$e(o,l)},d(i){i&&w(e)}}}function Mf(s){let e,t,n,l,o,i,r,a,c,u,f=s[24],d=[];for(let p=0;p<f.length;p+=1)d[p]=pl(dl(s,f,p));return{c(){e=b("div"),t=b("select"),n=b("option"),l=L("Select author");for(let p=0;p<d.length;p+=1)d[p].c();o=T(),i=b("button"),r=L("Get quotes"),n.__value=void 0,n.value=n.__value,n.hidden=!0,g(t,"class","input"),s[2]===void 0&&Ze(()=>s[9].call(t)),g(i,"class","input"),i.disabled=a=s[2]==null},m(p,m){v(p,e,m),h(e,t),h(t,n),h(n,l);for(let _=0;_<d.length;_+=1)d[_].m(t,null);ot(t,s[2]),h(e,o),h(e,i),h(i,r),c||(u=[Z(t,"change",s[9]),Z(i,"click",s[10])],c=!0)},p(p,m){if(m&10){f=p[24];let _;for(_=0;_<f.length;_+=1){const $=dl(p,f,_);d[_]?d[_].p($,m):(d[_]=pl($),d[_].c(),d[_].m(t,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=f.length}m&6&&ot(t,p[2]),m&6&&a!==(a=p[2]==null)&&(i.disabled=a)},d(p){p&&w(e),He(d,p),c=!1,Me(u)}}}function pl(s){let e,t=s[21].name+"",n,l,o=s[21].quoteCount+"",i,r,a;return{c(){e=b("option"),n=L(t),l=L(": "),i=L(o),e.__value=r=s[21],e.value=e.__value,e.disabled=a=s[3].includes(s[21])},m(c,u){v(c,e,u),h(e,n),h(e,l),h(e,i)},p(c,u){u&2&&t!==(t=c[21].name+"")&&$e(n,t),u&2&&o!==(o=c[21].quoteCount+"")&&$e(i,o),u&2&&r!==(r=c[21])&&(e.__value=r,e.value=e.__value),u&10&&a!==(a=c[3].includes(c[21]))&&(e.disabled=a)},d(c){c&&w(e)}}}function Of(s){let e,t,n;return{c(){e=b("div"),t=T(),n=b("div"),n.textContent="Loading authors...",g(e,"class","text-blue-800 "+s[5]),g(n,"class","text-blue-800")},m(l,o){v(l,e,o),v(l,t,o),v(l,n,o)},p:Q,d(l){l&&w(e),l&&w(t),l&&w(n)}}}function ml(s){let e,t,n={class:"my-4 py-4 border-y border-gray-300",$$slots:{default:[Bf]},$$scope:{ctx:s}};return e=new nt({props:n}),s[12](e),{c(){A(e.$$.fragment)},m(l,o){S(e,l,o),t=!0},p(l,o){const i={};o&134217752&&(i.$$scope={dirty:o,ctx:l}),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){s[12](null),C(e,l)}}}function Pf(s){let e,t,n,l=s[21].name+"",o,i,r,a,c=s[21].quoteCount+"",u,f,d,p;function m(){return s[11](s[23])}return{c(){e=b("button"),e.textContent="\xD7",t=T(),n=b("span"),o=L(l),r=T(),a=b("span"),u=L(c),f=T(),g(e,"class","text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"),g(n,"class","grow text-left overflow-hidden text-ellipsis whitespace-nowrap"),g(n,"title",i=s[21].name),g(a,"class","text-xs px-1 rounded-md bg-gray-600 text-white font-bold")},m(_,$){v(_,e,$),v(_,t,$),v(_,n,$),h(n,o),v(_,r,$),v(_,a,$),h(a,u),v(_,f,$),d||(p=Z(e,"click",m),d=!0)},p(_,$){s=_,$&8&&l!==(l=s[21].name+"")&&$e(o,l),$&8&&i!==(i=s[21].name)&&g(n,"title",i),$&8&&c!==(c=s[21].quoteCount+"")&&$e(u,c)},d(_){_&&w(e),_&&w(t),_&&w(n),_&&w(r),_&&w(a),_&&w(f),d=!1,p()}}}function hl(s){let e,t;return e=new pe({props:{class:"flex items-center gap-2",$$slots:{default:[Pf]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},p(n,l){const o={};l&134217736&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function If(s){let e,t,n=s[3],l=[];for(let i=0;i<n.length;i+=1)l[i]=hl(fl(s,n,i));const o=i=>y(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=ge()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);v(i,e,r),t=!0},p(i,r){if(r&136){n=i[3];let a;for(a=0;a<n.length;a+=1){const c=fl(i,n,a);l[a]?(l[a].p(c,r),k(l[a],1)):(l[a]=hl(c),l[a].c(),k(l[a],1),l[a].m(e.parentNode,e))}for(re(),a=n.length;a<l.length;a+=1)o(a);ae()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)k(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)y(l[r]);t=!1},d(i){He(l,i),i&&w(e)}}}function Lf(s){let e,t,n,l,o,i,r=(s[20]instanceof Error?s[20].message:s[20])+"",a;return{c(){e=b("div"),t=b("div"),n=b("div"),n.textContent="Loading quotes error",l=T(),o=b("div"),i=b("strong"),a=L(r),g(n,"class","text-red-400"),g(i,"class","text-red-600"),g(t,"class","flex flex-col items-center"),g(e,"class","h-full flex items-center justify-center")},m(c,u){v(c,e,u),h(e,t),h(t,n),h(t,l),h(t,o),h(o,i),h(i,a)},p(c,u){u&16&&r!==(r=(c[20]instanceof Error?c[20].message:c[20])+"")&&$e(a,r)},d(c){c&&w(e)}}}function Df(s){let e,t=s[16],n=[];for(let l=0;l<t.length;l+=1)n[l]=gl(ul(s,t,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=ge()},m(l,o){for(let i=0;i<n.length;i+=1)n[i].m(l,o);v(l,e,o)},p(l,o){if(o&16){t=l[16];let i;for(i=0;i<t.length;i+=1){const r=ul(l,t,i);n[i]?n[i].p(r,o):(n[i]=gl(r),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=t.length}},d(l){He(n,l),l&&w(e)}}}function gl(s){let e,t,n,l,o,i=s[17].en+"",r,a,c,u=s[17].author+"",f,d;return{c(){e=b("div"),t=b("span"),t.textContent="\u201C",n=T(),l=b("div"),o=b("div"),r=L(i),a=T(),c=b("div"),f=L(u),d=T(),g(t,"class","text-gray-200 text-7xl font-bold leading-[75%] mr-2"),g(o,"class","mb-3 leading-6"),g(c,"class","font-semibold italic text-right"),g(l,"class","grow"),g(e,"class","mb-2 last:mb-0 flex items-start")},m(p,m){v(p,e,m),h(e,t),h(e,n),h(e,l),h(l,o),h(o,r),h(l,a),h(l,c),h(c,f),h(e,d)},p(p,m){m&16&&i!==(i=p[17].en+"")&&$e(r,i),m&16&&u!==(u=p[17].author+"")&&$e(f,u)},d(p){p&&w(e)}}}function Ff(s){let e,t,n,l,o;return{c(){e=b("div"),t=b("div"),n=b("div"),l=T(),o=b("div"),o.textContent="Loading quotes...",g(n,"class","text-blue-800 w-12 h-12 "+s[5]),g(o,"class","text-blue-800"),g(t,"class","flex flex-col items-center"),g(e,"class","h-full flex items-center justify-center")},m(i,r){v(i,e,r),h(e,t),h(t,n),h(t,l),h(t,o)},p:Q,d(i){i&&w(e)}}}function zf(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:Ff,then:Df,catch:Lf,value:16,error:20};return _n(e=s[13],n),{c(){n.block.c(),t=T()},m(l,o){n.block.m(l,n.anchor=o),n.mount=()=>t.parentNode,n.anchor=t,v(l,t,o)},p(l,o){s=l,n.ctx=s,o&16&&e!==(e=s[13])&&_n(e,n)||go(n,s,o)},d(l){n.block.d(l),n.token=null,n=null,l&&w(t)}}}function _l(s){let e,t;return e=new de({props:{class:"px-4",$$slots:{default:[zf]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},p(n,l){const o={};l&134217744&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Bf(s){let e,t,n,l;e=new st({props:{class:"basis-[24ch] shrink-0",$$slots:{default:[If]},$$scope:{ctx:s}}});let o=s[4],i=[];for(let a=0;a<o.length;a+=1)i[a]=_l(cl(s,o,a));const r=a=>y(i[a],1,1,()=>{i[a]=null});return{c(){A(e.$$.fragment),t=T(),n=b("div");for(let a=0;a<i.length;a+=1)i[a].c();g(n,"class","grow")},m(a,c){S(e,a,c),v(a,t,c),v(a,n,c);for(let u=0;u<i.length;u+=1)i[u].m(n,null);l=!0},p(a,c){const u={};if(c&134217736&&(u.$$scope={dirty:c,ctx:a}),e.$set(u),c&48){o=a[4];let f;for(f=0;f<o.length;f+=1){const d=cl(a,o,f);i[f]?(i[f].p(d,c),k(i[f],1)):(i[f]=_l(d),i[f].c(),k(i[f],1),i[f].m(n,null))}for(re(),f=o.length;f<i.length;f+=1)r(f);ae()}},i(a){if(!l){k(e.$$.fragment,a);for(let c=0;c<o.length;c+=1)k(i[c]);l=!0}},o(a){y(e.$$.fragment,a),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)y(i[c]);l=!1},d(a){C(e,a),a&&w(t),a&&w(n),He(i,a)}}}function Hf(s){let e,t,n,l,o,i,r,a,c,u;function f(_,$){return _[1]==null?Rf:Af}let d=f(s),p=d(s),m=s[3].length&&ml(s);return c=new Ve({props:{code:`<script lang="ts">
  let tabsRef: Tabs | undefined = undefined;
  let authorList: Promise<Author[]> | undefined = undefined;
  let authorInSelect: Author | undefined = undefined;
  let authorTabs: Author[] = [];
  let quotes: Promise<Quote[]>[] = [];
<\/script>

<section class="prose max-w-none my-4">
  <div class="flex items-center justify-center gap-2">
    {#if authorList == null}
      <button
        class="input"
        on:click={() => {
          authorList = fetchAuthors();
        }}>Request authors</button
      >
    {:else}
      {#await authorList}
        <div class="text-blue-800 {spinnerClass}" />
        <div class="text-blue-800">Loading authors...</div>
      {:then authors}
        <div>
          <select class="input" bind:value={authorInSelect}>
            <option value={undefined} hidden>Select author</option>
            {#each authors as a}
              <option value={a} disabled={authorTabs.includes(a)}>{a.name}: {a.quoteCount}</option>
            {/each}
          </select>
          <button
            class="input"
            disabled={authorInSelect == null}
            on:click={() => (addAuthorTab(authorInSelect) ? (authorInSelect = undefined) : void 0)}
            >Get quotes</button
          >
        </div>
      {:catch error}
        <div class="text-red-400">
          Loading authors error: <strong class="text-red-600"
            >{error instanceof Error ? error.message : error}</strong
          >
        </div>
      {/await}
    {/if}
  </div>
  {#if authorTabs.length}
    <Tabs class="my-4 py-4 border-y border-gray-300" bind:this={tabsRef}>
      <TabList class="basis-[24ch] shrink-0">
        {#each authorTabs as a, i}
          <Tab class="flex items-center gap-2">
            <button
              class="text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"
              on:click={() => rmAuthorTab(i)}>&times;</button
            >
            <span
              class="grow text-left overflow-hidden text-ellipsis whitespace-nowrap"
              title={a.name}>{a.name}</span
            >
            <span class="text-xs px-1 rounded-md bg-gray-600 text-white font-bold"
              >{a.quoteCount}</span
            >
          </Tab>
        {/each}
      </TabList>
      <div class="grow">
        {#each quotes as p}
          <TabPanel class="px-4">
            {#await p}
              <div class="h-full flex items-center justify-center">
                <div class="flex flex-col items-center">
                  <div class="text-blue-800 w-12 h-12 {spinnerClass}" />
                  <div class="text-blue-800">Loading quotes...</div>
                </div>
              </div>
            {:then qs}
              {#each qs as q}
                <div class="mb-2 last:mb-0 flex items-start">
                  <span class="text-gray-200 text-7xl font-bold leading-[75%] mr-2">&ldquo;</span>
                  <div class="grow">
                    <div class="mb-3 leading-6">{q.en}</div>
                    <div class="font-semibold italic text-right">{q.author}</div>
                  </div>
                </div>
              {/each}
            {:catch error}
              <div class="h-full flex items-center justify-center">
                <div class="flex flex-col items-center">
                  <div class="text-red-400">Loading quotes error</div>
                  <div>
                    <strong class="text-red-600"
                      >{error instanceof Error ? error.message : error}</strong
                    >
                  </div>
                </div>
              </div>
            {/await}
          </TabPanel>
        {/each}
      </div>
    </Tabs>
  {/if}
</section>

<style lang="postcss">
  section :global(.c-tabs) {
    @apply flex items-start;
  }

  section :global(.c-tabs__tablist) {
    @apply flex flex-col border-none;
  }

  section :global(.c-tabs__tab) {
    @apply pl-1 border-none rounded-sm;
  }

  section :global(.c-tabs__tablist),
  section :global(.c-tabs__tabpanel) {
    @apply h-[32em] overflow-y-auto;
  }
</style>`}}),{c(){e=b("section"),t=b("div"),t.innerHTML=`Thanks to the authors of <a target="_blank" href="https://github.com/skolakoda">\u0160kola koda</a>
    for the useful and convenient
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api">API</a>`,n=T(),l=b("div"),p.c(),o=T(),m&&m.c(),i=T(),r=b("h3"),r.textContent="Code",a=T(),A(c.$$.fragment),g(t,"class","mb-4 text-center"),g(l,"class","flex items-center justify-center gap-2"),g(e,"class","prose max-w-none my-4 svelte-unmfi5")},m(_,$){v(_,e,$),h(e,t),h(e,n),h(e,l),p.m(l,null),h(e,o),m&&m.m(e,null),h(e,i),h(e,r),h(e,a),S(c,e,null),u=!0},p(_,[$]){d===(d=f(_))&&p?p.p(_,$):(p.d(1),p=d(_),p&&(p.c(),p.m(l,null))),_[3].length?m?(m.p(_,$),$&8&&k(m,1)):(m=ml(_),m.c(),k(m,1),m.m(e,i)):m&&(re(),y(m,1,1,()=>{m=null}),ae())},i(_){u||(k(m),k(c.$$.fragment,_),u=!0)},o(_){y(m),y(c.$$.fragment,_),u=!1},d(_){_&&w(e),p.d(),m&&m.d(),C(c)}}}const Fo="https://programming-quotes-api.herokuapp.com";function jf(){return Ue(this,null,function*(){const s=yield fetch(Fo+"/Authors");if(s.status>=400){const n=yield s.text();throw new Error(`${s.status}: ${n||s.statusText}`)}const e=s.headers.get("content-type");if(!e||!e.includes("application/json"))throw new TypeError("Wrong content-type");const t=yield s.json();return Object.values(t).sort((n,l)=>n.name.localeCompare(l.name))})}function Uf(s){return Ue(this,null,function*(){const e=yield fetch(Fo+"/Quotes/author/"+s);if(e.status>=400){const n=yield e.text();throw new Error(`${e.status}: ${n||e.statusText}`)}const t=e.headers.get("content-type");if(!t||!t.includes("application/json"))throw new TypeError("Wrong content-type");return yield e.json()})}function qf(s,e,t){const n="w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin";let l,o,i,r=[],a=[];function c($){return $!=null&&!r.includes($)?(t(3,r=[$,...r]),t(4,a=[Uf($.name),...a]),l==null||l.selectTab(0),!0):!1}function u($){$>=0&&$<r.length&&(t(3,r=[...r.slice(0,$),...r.slice($+1)]),t(4,a=[...a.slice(0,$),...a.slice($+1)]))}const f=()=>{t(1,o=jf())};function d(){i=qt(this),t(2,i),t(1,o)}const p=()=>c(i)?t(2,i=void 0):void 0,m=$=>u($);function _($){De[$?"unshift":"push"](()=>{l=$,t(0,l)})}return[l,o,i,r,a,n,c,u,f,d,p,m,_]}class Wf extends V{constructor(e){super(),Y(this,e,qf,Hf,K,{})}}const{document:bl}=zt;function Gf(s){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Zf(s){let e;return{c(){e=L("Base example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Kf(s){let e;return{c(){e=L("Nested Example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Xf(s){let e;return{c(){e=L("Quotes Example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Yf(s){let e,t,n,l,o,i,r,a;return e=new pe({props:{$$slots:{default:[Gf]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[Zf]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[Kf]},$$scope:{ctx:s}}}),r=new pe({props:{$$slots:{default:[Xf]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment)},m(c,u){S(e,c,u),v(c,t,u),S(n,c,u),v(c,l,u),S(o,c,u),v(c,i,u),S(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),o.$set(p);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(k(e.$$.fragment,c),k(n.$$.fragment,c),k(o.$$.fragment,c),k(r.$$.fragment,c),a=!0)},o(c){y(e.$$.fragment,c),y(n.$$.fragment,c),y(o.$$.fragment,c),y(r.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(l),C(o,c),c&&w(i),C(r,c)}}}function Vf(s){let e,t;return e=new wc({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Qf(s){let e,t;return e=new Zu({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Jf(s){let e,t;return e=new Cf({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ed(s){let e,t;return e=new Wf({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function td(s){let e,t,n,l,o,i,r,a,c,u;return e=new st({props:{$$slots:{default:[Yf]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[Vf]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[Qf]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[Jf]},$$scope:{ctx:s}}}),c=new de({props:{$$slots:{default:[ed]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment),a=T(),A(c.$$.fragment)},m(f,d){S(e,f,d),v(f,t,d),S(n,f,d),v(f,l,d),S(o,f,d),v(f,i,d),S(r,f,d),v(f,a,d),S(c,f,d),u=!0},p(f,d){const p={};d&1&&(p.$$scope={dirty:d,ctx:f}),e.$set(p);const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),n.$set(m);const _={};d&1&&(_.$$scope={dirty:d,ctx:f}),o.$set(_);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),r.$set($);const E={};d&1&&(E.$$scope={dirty:d,ctx:f}),c.$set(E)},i(f){u||(k(e.$$.fragment,f),k(n.$$.fragment,f),k(o.$$.fragment,f),k(r.$$.fragment,f),k(c.$$.fragment,f),u=!0)},o(f){y(e.$$.fragment,f),y(n.$$.fragment,f),y(o.$$.fragment,f),y(r.$$.fragment,f),y(c.$$.fragment,f),u=!1},d(f){C(e,f),f&&w(t),C(n,f),f&&w(l),C(o,f),f&&w(i),C(r,f),f&&w(a),C(c,f)}}}function nd(s){let e,t,n,l,o,i,r,a,c,u,f;return bl.title=e=document.title.replace(/(•).*$/,"$1 Tabs"),u=new nt({props:{$$slots:{default:[td]},$$scope:{ctx:s}}}),{c(){t=T(),n=b("section"),l=b("a"),l.textContent="Home",o=T(),i=b("h1"),i.textContent="A set of components for organizing a tabbed interface",r=T(),a=b("ul"),a.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>with context to control tab switching</li> 
    <li><a href="https://www.npmjs.com/package/@apsc/tabs">NPM</a></li>`,c=T(),A(u.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(d,p){v(d,t,p),v(d,n,p),h(n,l),h(n,o),h(n,i),h(n,r),h(n,a),h(n,c),S(u,n,null),f=!0},p(d,[p]){(!f||p&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Tabs"))&&(bl.title=e);const m={};p&1&&(m.$$scope={dirty:p,ctx:d}),u.$set(m)},i(d){f||(k(u.$$.fragment,d),f=!0)},o(d){y(u.$$.fragment,d),f=!1},d(d){d&&w(t),d&&w(n),C(u)}}}class sd extends V{constructor(e){super(),Y(this,e,null,nd,K,{})}}var ld=`<div class="component__source">Source <code>Notifications.svelte</code></div>
<h1 class="component__name">Notifications</h1>
<div class="component__comment"><p>The <code>Notifications</code> component has one instance for the entire application. Use the <code>Notifications</code> component at the top level of your markup, before any components that send notifications.</p>
<p>The default slot (optional) of the <code>Notifications</code> component is the markup for the notification element.</p>
<pre><code class="language-tsx">&lt;Notifications /&gt;
&lt;Application /&gt;
</code></pre>
<p>The <code>Notifications</code> component exports the <code>notifications</code> custom store corresponding to the store contract.</p>
<pre><code class="language-js">{
  subscribe: Subscriber&lt;NotificationData[]&gt;,
  clear: () =&gt; void,
  push: (notification: NotificationData) =&gt; symbol,
  pop: (id: symbol) =&gt; void
}
</code></pre>
<p>You can subscribe to changes in the store, and append and remove notifications anywhere in your app.</p>
<pre><code class="language-svelte">&lt;script&gt;
  import { Notifications, notifications } from &#39;@apsc/glob-notify&#39;;
  function handleNotify() {
    notifications.push({ message: &#39;Hello from NyApp&#39; })
  }
&lt;/script&gt;
&lt;Notifications /&gt;
&lt;h1&gt;Welcome to MyApp&lt;/h1&gt;
&lt;button on:click={handleNotify}&gt;Notify&lt;/button&gt;
</code></pre>
<p>The selectors used are in simple styles in <code>style.css</code></p>
<pre><code class="language-css">.c-notifications {
  position: fixed;
  padding: 0.5rem 1rem;
  width: 50vw;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.c-notifications__item {
  background-color: silver;
  margin: 0.5rem 0;
  padding: 1rem;
  display: flex;
}
.c-notifications__item__message {
  flex-grow: 1;
}
.c-notifications__item__close {
  font-size: 2rem;
  line-height: 1.25rem;
  cursor: default;
}
.c-notifications__item__close::before {
  content: &#39;\\00D7&#39;;
}
</code></pre>
<p>There is also a <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/bootstrap-like.css"><code>bootstrap-like.css</code></a> style set.</p>
</div>
<h2 class="component-tbl-header">Typedefs</h2><table><tr><th>Name</th><th>Type</th></tr><tr><td class="typedef__name">NotificationData</td>
<td class="typedef__type"><pre><code>{
 id: symbol;
 type?: string;
 timeout?: number;
 message?: string;
}
</code></pre>
</td></tr></table>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom CSS class to add to the <code>c-notifications</code> base class for custom styling purposes</p>
</td></tr>
<tr><td class="prop__name">style</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom styles will be passed to the <code>style</code> attribute</p>
</td></tr>
<tr><td class="prop__name">transitionFn</td>
<td class="prop__type"></td>
<td class="prop__value"></td>
<td class="prop__description"><p>Transition function for notification, default <code>slide</code></p>
</td></tr>
<tr><td class="prop__name">transitionParams</td>
<td class="prop__type"><code>{}</code></td>
<td class="prop__value"><code>{}</code></td>
<td class="prop__description"><p>Transition function parameters</p>
</td></tr></table>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{ notification: NotificationData }</code></td></tr><tr><th colspan="3">Fallback</th></tr>
<tr><td class="slot__fallback" colspan="3"><pre><code>&lt;div
        transition:transitionFn={transitionParams}
        class={&#39;c-notifications__item&#39; + (notification.type ? &#39; &#39; + notification.type : &#39;&#39;)}
      &gt;
        &lt;span class=&quot;c-notifications__item__message&quot;
          &gt;{@html notification.message || &#39;No message&#39;}&lt;/span
        &gt;
        &lt;span
          role=&quot;button&quot;
          aria-label=&quot;Close notification&quot;
          class=&quot;c-notifications__item__close&quot;
          on:click={() =&gt; notifications.pop(notification.id)}
        /&gt;
      &lt;/div&gt;
</code></pre>
</td></tr></table>
<h2 class="component-tbl-header">Module exports</h2><table><tr><th>Name</th><th>Type</th><th>Description</th></tr><tr><td class="exports__name">notifications</td>
<td class="exports__type"><pre><code>{
 subscribe: Subscriber&lt;NotificationData[]&gt;;
 clear: () =&gt; void;
 push: (n: NotificationData) =&gt; symbol;
 pop: (id: symbol) =&gt; void
}
</code></pre>
</td>
<td class="exports__description">Store of notifications</td></tr></table>`;function od(s){let e,t,n;return t=new Vt({props:{source:ld}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(l,o){v(l,e,o),S(t,e,null),n=!0},p:Q,i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){l&&w(e),C(t)}}}class id extends V{constructor(e){super(),Y(this,e,null,od,K,{})}}var rd=`.c-notifications {
  position: fixed;
  padding: 0.5rem 1rem;
  width: 50vw;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.c-notifications__item {
  background-color: silver;
  margin: 0.5rem 0;
  padding: 1rem;
  display: flex;
}

.c-notifications__item__message {
  flex-grow: 1;
}

.c-notifications__item__close {
  font-size: 2rem;
  line-height: 1.25rem;
  cursor: default;
}
.c-notifications__item__close::before {
  content: '\\00D7';
}
`,ad=`.c-notifications {
  position: fixed;
  padding: 0.5rem 1rem;
  width: 50vw;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.c-notifications__item {
  margin: 0.5rem 0;
  display: flex;
  box-sizing: border-box;
  background-color: #fefefe;
  color: #636464;
  border: 1px solid #e8e8e8;
  border-radius: 0.25rem;
}

.c-notifications__item.primary {
  color: #084298;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
}

.c-notifications__item.secondary {
  color: #41464b;
  background-color: #e2e3e5;
  border-color: #d3d6d8;
}

.c-notifications__item.success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}

.c-notifications__item.danger {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}

.c-notifications__item.warning {
  color: #664d03;
  background-color: #fff3cd;
  border-color: #ffecb5;
}

.c-notifications__item.info {
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
}

.c-notifications__item.dark {
  color: #141619;
  background-color: #d3d3d4;
  border-color: #bcbebf;
}

.c-notifications__item__message {
  flex-grow: 1;
  padding: 1em 0 1em 1em;
}

.c-notifications__item__close {
  padding: 1em;
  flex-shrink: 0;
  cursor: pointer;
  opacity: 0.5;
}

.c-notifications__item__close::after {
  content: '';
  display: block;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  mask-image: url('data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22%3E%3Cpath d%3D%22M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%22 fill%3D%22currentColor%22 %2F%3E%3C%2Fsvg%3E');
  -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22%3E%3Cpath d%3D%22M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%22 fill%3D%22currentColor%22 %2F%3E%3C%2Fsvg%3E');
}

.c-notifications__item__close:hover {
  opacity: 1;
}
`;function cd(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function zo(s){const e=s-1;return e*e*e+1}function ud(s,{delay:e=0,duration:t=400,easing:n=cd,amount:l=5,opacity:o=0}={}){const i=getComputedStyle(s),r=+i.opacity,a=i.filter==="none"?"":i.filter,c=r*(1-o);return{delay:e,duration:t,easing:n,css:(u,f)=>`opacity: ${r-c*f}; filter: ${a} blur(${f*l}px);`}}function fd(s,{delay:e=0,duration:t=400,easing:n=no}={}){const l=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:n,css:o=>`opacity: ${o*l}`}}function Dt(s,{delay:e=0,duration:t=400,easing:n=zo}={}){const l=getComputedStyle(s),o=+l.opacity,i=parseFloat(l.height),r=parseFloat(l.paddingTop),a=parseFloat(l.paddingBottom),c=parseFloat(l.marginTop),u=parseFloat(l.marginBottom),f=parseFloat(l.borderTopWidth),d=parseFloat(l.borderBottomWidth);return{delay:e,duration:t,easing:n,css:p=>`overflow: hidden;opacity: ${Math.min(p*20,1)*o};height: ${p*i}px;padding-top: ${p*r}px;padding-bottom: ${p*a}px;margin-top: ${p*c}px;margin-bottom: ${p*u}px;border-top-width: ${p*f}px;border-bottom-width: ${p*d}px;`}}function dd(s,{delay:e=0,duration:t=400,easing:n=zo,start:l=0,opacity:o=0}={}){const i=getComputedStyle(s),r=+i.opacity,a=i.transform==="none"?"":i.transform,c=1-l,u=r*(1-o);return{delay:e,duration:t,easing:n,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${r-u*d}
		`}}function $l(s,e,t){const n=s.slice();return n[8]=e[t],n}const pd=s=>({notification:s&16}),wl=s=>({notification:s[8]});function md(s){let e,t,n=(s[8].message||"No message")+"",l,o,i,r,a,c,u,f;function d(){return s[7](s[8])}return{c(){e=b("div"),t=b("span"),l=T(),o=b("span"),i=T(),g(t,"class","c-notifications__item__message"),g(o,"role","button"),g(o,"aria-label","Close notification"),g(o,"class","c-notifications__item__close"),g(e,"class",r="c-notifications__item"+(s[8].type?" "+s[8].type:""))},m(p,m){v(p,e,m),h(e,t),t.innerHTML=n,h(e,l),h(e,o),h(e,i),c=!0,u||(f=Z(o,"click",d),u=!0)},p(p,m){s=p,(!c||m&16)&&n!==(n=(s[8].message||"No message")+"")&&(t.innerHTML=n),(!c||m&16&&r!==(r="c-notifications__item"+(s[8].type?" "+s[8].type:"")))&&g(e,"class",r)},i(p){c||(Ze(()=>{a||(a=ht(e,s[2],s[3],!0)),a.run(1)}),c=!0)},o(p){a||(a=ht(e,s[2],s[3],!1)),a.run(0),c=!1},d(p){p&&w(e),p&&a&&a.end(),u=!1,f()}}}function vl(s,e){let t,n;const l=e[6].default,o=ke(l,e,e[5],wl),i=o||md(e);return{key:s,first:null,c(){t=ge(),i&&i.c(),this.first=t},m(r,a){v(r,t,a),i&&i.m(r,a),n=!0},p(r,a){e=r,o?o.p&&(!n||a&48)&&Te(o,l,e,e[5],n?ye(l,e[5],a,pd):xe(e[5]),wl):i&&i.p&&(!n||a&24)&&i.p(e,n?a:-1)},i(r){n||(k(i,r),n=!0)},o(r){y(i,r),n=!1},d(r){r&&w(t),i&&i.d(r)}}}function hd(s){let e,t=[],n=new Map,l,o,i,r=s[4];const a=c=>c[8].id;for(let c=0;c<r.length;c+=1){let u=$l(s,r,c),f=a(u);n.set(f,t[c]=vl(f,u))}return{c(){e=b("div");for(let c=0;c<t.length;c+=1)t[c].c();g(e,"class",l="c-notifications"+(s[0]?" "+s[0]:"")),g(e,"style",o=s[1]||void 0)},m(c,u){v(c,e,u);for(let f=0;f<t.length;f+=1)t[f].m(e,null);i=!0},p(c,[u]){u&56&&(r=c[4],re(),t=Ei(t,u,a,1,c,r,n,e,xi,vl,null,$l),ae()),(!i||u&1&&l!==(l="c-notifications"+(c[0]?" "+c[0]:"")))&&g(e,"class",l),(!i||u&2&&o!==(o=c[1]||void 0))&&g(e,"style",o)},i(c){if(!i){for(let u=0;u<r.length;u+=1)k(t[u]);i=!0}},o(c){for(let u=0;u<t.length;u+=1)y(t[u]);i=!1},d(c){c&&w(e);for(let u=0;u<t.length;u+=1)t[u].d()}}}let pn=!1;const Tn=function(){const{subscribe:s,set:e,update:t}=Lt([]);return{subscribe:s,clear(){e([])},push(n){if(!pn)throw new Error("No Notification component instance");const l=ze({id:Symbol("Notification")},n);return t(o=>[...o,l]),n.timeout&&n.timeout>0&&setTimeout(()=>this.pop(l.id),n.timeout),l.id},pop(n){t(l=>{const o=l.findIndex(i=>i.id===n);return o>=0&&l.splice(o,1),l})}}}();function gd(s,e,t){let n,l=Q;Pt(s,Tn,d=>t(4,n=d)),s.$$.on_destroy.push(()=>l());let{$$slots:o={},$$scope:i}=e,{class:r=""}=e,{style:a=""}=e,{transitionFn:c=Dt}=e,{transitionParams:u={}}=e;An(()=>{if(pn)throw new Error("The Notifications component already has an instance");pn=!0}),Zn(()=>pn=!1);const f=d=>Tn.pop(d.id);return s.$$set=d=>{"class"in d&&t(0,r=d.class),"style"in d&&t(1,a=d.style),"transitionFn"in d&&t(2,c=d.transitionFn),"transitionParams"in d&&t(3,u=d.transitionParams),"$$scope"in d&&t(5,i=d.$$scope)},[r,a,c,u,n,i,o,f]}class _d extends V{constructor(e){super(),Y(this,e,gd,hd,K,{class:0,style:1,transitionFn:2,transitionParams:3})}}var qn=[{author:"Edsger W. Dijkstra",en:"Computer Science is no more about computers than astronomy is about telescopes."},{author:"Edsger W. Dijkstra",en:"Simplicity is prerequisite for reliability."},{author:"Edsger W. Dijkstra",en:"The computing scientist\u2019s main challenge is not to get confused by the complexities of his own making."},{author:"Edsger W. Dijkstra",en:"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},{author:"Edsger W. Dijkstra",en:"A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure \u201Eprogrammer productivity\u201C in terms of \u201Enumber of lines of code produced\u201C. In so doing they book that number on the wrong side of the ledger: We should always refer to \u201Ethe number of lines of code spent\u201C."},{author:"Tony Hoare",en:"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},{author:"Jeff Hammerbacher",en:"The best minds of my generation are thinking about how to make people click ads."},{author:"Edsger W. Dijkstra",en:"The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities."},{author:"Edsger W. Dijkstra",en:'How do we convince people that in programming simplicity and clarity \u2014 in short: what mathematicians call "elegance" \u2014 are not a dispensable luxury, but a crucial matter that decides between success and failure?'},{author:"Fred Brooks",en:"Adding manpower to a late software project makes it later."},{author:"Michael Stal",en:"Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person."},{author:"Fred Brooks",en:"Nine women can't make a baby in one month."},{author:"Jeff Sickel",en:"Deleted code is debugged code."},{author:"Ken Thompson",en:"When in doubt, use brute force."},{author:"Fred Brooks",en:"When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned."},{author:"Fred Brooks",en:"If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two."},{author:"Fred Brooks",en:"Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect."},{author:"Fred Brooks",en:"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures."},{author:"Fred Brooks",en:'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.'},{author:"Donald Knuth",en:"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%."},{author:"Ken Thompson",en:"One of my most productive days was throwing away 1,000 lines of code."},{author:"Grace Hopper",en:"One accurate measurement is worth more than a thousand expert opinions."},{author:"Fred Brooks",en:"What one programmer can do in one month, two programmers can do in two months."},{author:"Rick Osborne",en:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},{author:"John Ousterhout",en:"A program that produces incorrect results twice as fast is infinitely slower."},{author:"Poul Anderson",en:"I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated."},{author:"Robert C. Martin",en:"Cleaning code does NOT take time. NOT cleaning code does take time."},{author:"David Gelernter",en:"Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity."},{author:"Edward V. Berard",en:"Walking on water and developing software from a specification are easy if both are frozen."},{author:"Brian Kernighan",en:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},{author:"Brian Kernighan",en:"Controlling complexity is the essence of computer programming."},{author:"Chris Wenham",en:"Debugging time increases as a square of the program\u2019s size."},{author:"Seymour Cray",en:"The trouble with programmers is that you can never tell what a programmer is doing until it\u2019s too late."},{author:"Ron Jeffries",en:"Code never lies, comments sometimes do."},{author:"Laurence J. Peter",en:"Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them."},{author:"Poul-Henning Kamp",en:'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.'},{author:"Albert Einstein",en:"I have no special talent. I am only passionately curious."},{author:"Robert C. Martin",en:"The proper use of comments is to compensate for our failure to express ourself in code."},{author:"Rob Pike",en:"When there is no type hierarchy you don\u2019t have to manage the type hierarchy."},{author:"Steve Jobs",en:"Everybody should learn to program a computer, because it teaches you how to think."},{author:"Chris Sacca",en:"Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for."},{author:"Bill Gates",en:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},{author:"William Wulf",en:"More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity."},{author:"Edsger W. Dijkstra",en:"Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence."},{author:"Albert Einstein",en:"Imagination is more important than knowledge."}];function kl(s,e,t){const n=s.slice();return n[20]=e[t],n}function yl(s,e,t){const n=s.slice();return n[23]=e[t],n}function Tl(s){let e,t,n,l,o=s[23]+"",i,r,a;return{c(){e=b("label"),t=b("input"),l=T(),i=L(o),g(t,"type","radio"),g(t,"name","styles"),t.__value=n=s[23],t.value=t.__value,s[12][2].push(t),g(e,"class","mr-2 last:mr-0")},m(c,u){v(c,e,u),h(e,t),t.checked=t.__value===s[3],h(e,l),h(e,i),r||(a=Z(t,"change",s[17]),r=!0)},p(c,u){u&8&&(t.checked=t.__value===c[3])},d(c){c&&w(e),s[12][2].splice(s[12][2].indexOf(t),1),r=!1,a()}}}function xl(s){let e,t=s[20]+"",n,l;return{c(){e=b("option"),n=L(t),e.__value=l=s[20],e.value=e.__value},m(o,i){v(o,e,i),h(e,n)},p:Q,d(o){o&&w(e)}}}function bd(s){let e,t=`<style type="text/css" data-text="test">${s[7][s[3]]}</style>`,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M,O,P,D,F,j,U,W,le,we,ee,I,B,X,oe,ue,ce,Oe,Fe,Ee,he,te,Se,_e,fe,J,Pe,Re,ve,Ne,tn,pt,ie,Ct,Ie,be,Ke,Qe,At;i=new _d({props:{style:"display: flex; "+s[0]+s[1]}});let lt=Object.keys(s[7]),z=[];for(let H=0;H<lt.length;H+=1)z[H]=Tl(yl(s,lt,H));let G=s[8],ne=[];for(let H=0;H<G.length;H+=1)ne[H]=xl(kl(s,G,H));return be=new Ve({props:{code:`<script lang="ts">
  import simpleStyle from '@apsc/glob-notify/style.css?raw';
  import bootsrapStyle from '@apsc/glob-notify/bootstrap-like.css?raw';
  import { Notifications, notifications } from '@apsc/glob-notify';
  import quotes from './quotes.json';

  let quoteIndex = 0;
  $: quote = quotes[quoteIndex].en;
  $: author = quotes[quoteIndex].author;

  let hPos = 'left: 0; right: unset;';
  let vPos = 'top: 0; bottom: unset; flex-direction: column-reverse;';
  let timeout = 10_000;
  let styles = {
    simple: simpleStyle,
    bootstrap: bootsrapStyle
  };
  let stylesKey = Object.keys(styles)[0];
  const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  let type = types[0];

  function handlePushNotify({ currentTarget }: Event) {
    if (currentTarget instanceof HTMLFormElement) {
      const quote = currentTarget.elements['quote'].value;
      const author = currentTarget['author'].value;
      notifications.push({
        message: [
          quote ? \`<div>\${quote}</div>\` : '',
          author ? \`<div class="italic text-right">\${author}</div>\` : ''
        ]
          .filter((s) => !!s)
          .join(''),
        type,
        timeout
      });
      quoteIndex = quoteIndex + 1 >= quotes.length ? 0 : quoteIndex + 1;
      let ti = types.indexOf(type) + 1;
      if (ti < 0 || ti >= types.length) {
        type = types[0];
      } else {
        type = types[ti];
      }
    }
  }
<\/script>

<svelte:head>
  {@html \`<\${'style'} type="text/css" data-text="test">\${styles[stylesKey]}</style>\`}
</svelte:head>
<section class="prose max-w-none my-4">
  <Notifications style={'display: flex; ' + hPos + vPos} />
  <form
    class="not-prose w-full"
    on:submit|preventDefault={handlePushNotify}
    on:reset|preventDefault={() => notifications.clear()}
  >
    <div class="flex gap-4 items-center justify-evenly mb-4">
      <div>
        <div class="text-sm uppercase opacity-70">Side</div>
        <label
          ><input bind:group={hPos} type="radio" name="hpos" value="left: 0; right: unset;" /> left</label
        >
        <label><input bind:group={hPos} type="radio" name="hpos" value="right: 0;" /> right</label>
      </div>
      <div>
        <div class="text-sm uppercase opacity-70">Direction</div>
        <label
          ><input
            bind:group={vPos}
            type="radio"
            name="vpos"
            value="top: 0; bottom: unset; flex-direction: column-reverse;"
          /> from top</label
        >
        <label
          ><input
            bind:group={vPos}
            type="radio"
            name="vpos"
            value="top: unset; bottom: 0; flex-direction: column;"
          /> from bottom</label
        >
      </div>
      <label>
        <div class="text-sm uppercase opacity-70">Timeout</div>
        <input class="input w-[9ch]" min="0" step="100" bind:value={timeout} type="number" /></label
      >
      <div>
        <div class="text-sm uppercase opacity-70">Style</div>
        {#each Object.keys(styles) as s}
          <label class="mr-2 last:mr-0"
            ><input bind:group={stylesKey} type="radio" name="styles" value={s} /> {s}</label
          >
        {/each}
      </div>
    </div>
    <label class="block w-full mb-4">
      <textarea name="quote" value={quote} rows="3" class="input w-full" placeholder="Quote" />
    </label>
    <div class="mb-4 flex gap-4">
      <label class="block w-full">
        <input name="author" value={author} class="input w-full" type="text" placeholder="Author" />
      </label>
      <select class="input block w-full" bind:value={type}>
        {#each types as t}
          <option value={t}>{t}</option>
        {/each}
      </select>
    </div>
    <div class="mx-auto w-fit flex gap-4">
      <input class="input block w-40" type="submit" value="Notify" />
      <input class="input block w-40" type="reset" value="Clear" />
    </div>
  </form>
</section>`}}),{c(){e=new fo(!1),n=ge(),l=T(),o=b("section"),A(i.$$.fragment),r=T(),a=b("div"),a.innerHTML='This example uses quotes from the <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api">API</a>  <a target="_blank" href="https://github.com/skolakoda">\u0160kola koda</a>',c=T(),u=b("form"),f=b("div"),d=b("div"),p=b("div"),p.textContent="Side",m=T(),_=b("label"),$=b("input"),E=L(" left"),x=T(),R=b("label"),N=b("input"),M=L(" right"),O=T(),P=b("div"),D=b("div"),D.textContent="Direction",F=T(),j=b("label"),U=b("input"),W=L(" from top"),le=T(),we=b("label"),ee=b("input"),I=L(" from bottom"),B=T(),X=b("label"),oe=b("div"),oe.textContent="Timeout",ue=T(),ce=b("input"),Oe=T(),Fe=b("div"),Ee=b("div"),Ee.textContent="Style",he=T();for(let H=0;H<z.length;H+=1)z[H].c();te=T(),Se=b("label"),_e=b("textarea"),fe=T(),J=b("div"),Pe=b("label"),Re=b("input"),ve=T(),Ne=b("select");for(let H=0;H<ne.length;H+=1)ne[H].c();tn=T(),pt=b("div"),pt.innerHTML=`<input class="input block w-40" type="submit" value="Notify"/> 
      <input class="input block w-40" type="reset" value="Clear"/>`,ie=T(),Ct=b("h3"),Ct.textContent="Code",Ie=T(),A(be.$$.fragment),e.a=n,g(a,"class","mb-4 text-center"),g(p,"class","text-sm uppercase opacity-70"),g($,"type","radio"),g($,"name","hpos"),$.__value="left: 0; right: unset;",$.value=$.__value,s[12][0].push($),g(N,"type","radio"),g(N,"name","hpos"),N.__value="right: 0;",N.value=N.__value,s[12][0].push(N),g(D,"class","text-sm uppercase opacity-70"),g(U,"type","radio"),g(U,"name","vpos"),U.__value="top: 0; bottom: unset; flex-direction: column-reverse;",U.value=U.__value,s[12][1].push(U),g(ee,"type","radio"),g(ee,"name","vpos"),ee.__value="top: unset; bottom: 0; flex-direction: column;",ee.value=ee.__value,s[12][1].push(ee),g(oe,"class","text-sm uppercase opacity-70"),g(ce,"class","input w-[9ch]"),g(ce,"min","0"),g(ce,"step","100"),g(ce,"type","number"),g(Ee,"class","text-sm uppercase opacity-70"),g(f,"class","flex gap-4 items-center justify-evenly mb-4"),g(_e,"name","quote"),_e.value=s[6],g(_e,"rows","3"),g(_e,"class","input w-full"),g(_e,"placeholder","Quote"),g(Se,"class","block w-full mb-4"),g(Re,"name","author"),Re.value=s[5],g(Re,"class","input w-full"),g(Re,"type","text"),g(Re,"placeholder","Author"),g(Pe,"class","block w-full"),g(Ne,"class","input block w-full"),s[4]===void 0&&Ze(()=>s[18].call(Ne)),g(J,"class","mb-4 flex gap-4"),g(pt,"class","mx-auto w-fit flex gap-4"),g(u,"class","not-prose w-full"),g(o,"class","prose max-w-none my-4")},m(H,me){e.m(t,document.head),h(document.head,n),v(H,l,me),v(H,o,me),S(i,o,null),h(o,r),h(o,a),h(o,c),h(o,u),h(u,f),h(f,d),h(d,p),h(d,m),h(d,_),h(_,$),$.checked=$.__value===s[0],h(_,E),h(d,x),h(d,R),h(R,N),N.checked=N.__value===s[0],h(R,M),h(f,O),h(f,P),h(P,D),h(P,F),h(P,j),h(j,U),U.checked=U.__value===s[1],h(j,W),h(P,le),h(P,we),h(we,ee),ee.checked=ee.__value===s[1],h(we,I),h(f,B),h(f,X),h(X,oe),h(X,ue),h(X,ce),qe(ce,s[2]),h(f,Oe),h(f,Fe),h(Fe,Ee),h(Fe,he);for(let Le=0;Le<z.length;Le+=1)z[Le].m(Fe,null);h(u,te),h(u,Se),h(Se,_e),h(u,fe),h(u,J),h(J,Pe),h(Pe,Re),h(J,ve),h(J,Ne);for(let Le=0;Le<ne.length;Le+=1)ne[Le].m(Ne,null);ot(Ne,s[4]),h(u,tn),h(u,pt),h(o,ie),h(o,Ct),h(o,Ie),S(be,o,null),Ke=!0,Qe||(At=[Z($,"change",s[11]),Z(N,"change",s[13]),Z(U,"change",s[14]),Z(ee,"change",s[15]),Z(ce,"input",s[16]),Z(Ne,"change",s[18]),Z(u,"submit",ws(s[9])),Z(u,"reset",ws(s[19]))],Qe=!0)},p(H,[me]){(!Ke||me&8)&&t!==(t=`<style type="text/css" data-text="test">${H[7][H[3]]}</style>`)&&e.p(t);const Le={};if(me&3&&(Le.style="display: flex; "+H[0]+H[1]),i.$set(Le),me&1&&($.checked=$.__value===H[0]),me&1&&(N.checked=N.__value===H[0]),me&2&&(U.checked=U.__value===H[1]),me&2&&(ee.checked=ee.__value===H[1]),me&4&&Ye(ce.value)!==H[2]&&qe(ce,H[2]),me&136){lt=Object.keys(H[7]);let Ce;for(Ce=0;Ce<lt.length;Ce+=1){const wt=yl(H,lt,Ce);z[Ce]?z[Ce].p(wt,me):(z[Ce]=Tl(wt),z[Ce].c(),z[Ce].m(Fe,null))}for(;Ce<z.length;Ce+=1)z[Ce].d(1);z.length=lt.length}if((!Ke||me&64)&&(_e.value=H[6]),(!Ke||me&32&&Re.value!==H[5])&&(Re.value=H[5]),me&256){G=H[8];let Ce;for(Ce=0;Ce<G.length;Ce+=1){const wt=kl(H,G,Ce);ne[Ce]?ne[Ce].p(wt,me):(ne[Ce]=xl(wt),ne[Ce].c(),ne[Ce].m(Ne,null))}for(;Ce<ne.length;Ce+=1)ne[Ce].d(1);ne.length=G.length}me&272&&ot(Ne,H[4])},i(H){Ke||(k(i.$$.fragment,H),k(be.$$.fragment,H),Ke=!0)},o(H){y(i.$$.fragment,H),y(be.$$.fragment,H),Ke=!1},d(H){w(n),H&&e.d(),H&&w(l),H&&w(o),C(i),s[12][0].splice(s[12][0].indexOf($),1),s[12][0].splice(s[12][0].indexOf(N),1),s[12][1].splice(s[12][1].indexOf(U),1),s[12][1].splice(s[12][1].indexOf(ee),1),He(z,H),He(ne,H),C(be),Qe=!1,Me(At)}}}function $d(s,e,t){let n,l,o=0,i="left: 0; right: unset;",r="top: 0; bottom: unset; flex-direction: column-reverse;",a=1e4,c={simple:rd,bootstrap:ad},u=Object.keys(c)[0];const f=["primary","secondary","success","danger","warning","info","light","dark"];let d=f[0];function p({currentTarget:P}){if(P instanceof HTMLFormElement){const D=P.elements.quote.value,F=P.author.value;Tn.push({message:[D?`<div>${D}</div>`:"",F?`<div class="italic text-right">${F}</div>`:""].filter(U=>!!U).join(""),type:d,timeout:a}),t(10,o=o+1>=qn.length?0:o+1);let j=f.indexOf(d)+1;j<0||j>=f.length?t(4,d=f[0]):t(4,d=f[j])}}const m=[[],[],[]];function _(){i=this.__value,t(0,i)}function $(){i=this.__value,t(0,i)}function E(){r=this.__value,t(1,r)}function x(){r=this.__value,t(1,r)}function R(){a=Ye(this.value),t(2,a)}function N(){u=this.__value,t(3,u)}function M(){d=qt(this),t(4,d),t(8,f)}const O=()=>Tn.clear();return s.$$.update=()=>{s.$$.dirty&1024&&t(6,n=qn[o].en),s.$$.dirty&1024&&t(5,l=qn[o].author)},[i,r,a,u,d,l,n,c,f,p,o,_,m,$,E,x,R,N,M,O]}class wd extends V{constructor(e){super(),Y(this,e,$d,bd,K,{})}}const{document:El}=zt;function vd(s){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function kd(s){let e;return{c(){e=L("Base example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function yd(s){let e,t,n,l;return e=new pe({props:{$$slots:{default:[vd]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[kd]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment)},m(o,i){S(e,o,i),v(o,t,i),S(n,o,i),l=!0},p(o,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:o}),e.$set(r);const a={};i&1&&(a.$$scope={dirty:i,ctx:o}),n.$set(a)},i(o){l||(k(e.$$.fragment,o),k(n.$$.fragment,o),l=!0)},o(o){y(e.$$.fragment,o),y(n.$$.fragment,o),l=!1},d(o){C(e,o),o&&w(t),C(n,o)}}}function Td(s){let e,t;return e=new id({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function xd(s){let e,t;return e=new wd({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Ed(s){let e,t,n,l,o,i;return e=new st({props:{$$slots:{default:[yd]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[Td]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[xd]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment)},m(r,a){S(e,r,a),v(r,t,a),S(n,r,a),v(r,l,a),S(o,r,a),i=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(k(e.$$.fragment,r),k(n.$$.fragment,r),k(o.$$.fragment,r),i=!0)},o(r){y(e.$$.fragment,r),y(n.$$.fragment,r),y(o.$$.fragment,r),i=!1},d(r){C(e,r),r&&w(t),C(n,r),r&&w(l),C(o,r)}}}function Sd(s){let e,t,n,l,o,i,r,a,c,u,f;return El.title=e=document.title.replace(/(•).*$/,"$1 GlobNotify"),u=new nt({props:{$$slots:{default:[Ed]},$$scope:{ctx:s}}}),{c(){t=T(),n=b("section"),l=b("a"),l.textContent="Home",o=T(),i=b("h1"),i.textContent="Component for notifications globally for the entire application",r=T(),a=b("ul"),a.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>one instance for the entire application</li> 
    <li>with custom notification transition</li> 
    <li>custom notification element components</li> 
    <li>with configurable timeout for each notification</li> 
    <li><a href="https://www.npmjs.com/package/@apsc/glob-notify">NPM</a></li>`,c=T(),A(u.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl max-w-lg"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(d,p){v(d,t,p),v(d,n,p),h(n,l),h(n,o),h(n,i),h(n,r),h(n,a),h(n,c),S(u,n,null),f=!0},p(d,[p]){(!f||p&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 GlobNotify"))&&(El.title=e);const m={};p&1&&(m.$$scope={dirty:p,ctx:d}),u.$set(m)},i(d){f||(k(u.$$.fragment,d),f=!0)},o(d){y(u.$$.fragment,d),f=!1},d(d){d&&w(t),d&&w(n),C(u)}}}class Cd extends V{constructor(e){super(),Y(this,e,null,Sd,K,{})}}var Ad=`<div class="component__source">Source <code>ColorPicker.svelte</code></div>
<h1 class="component__name">ColorPicker</h1>
<div class="component__comment"><p>Component for picking a color with transparency. The color value is hexadecimal.</p>
<p>Dependence: <code>lodash.debounce</code></p>
<p>Inspired by:</p>
<ul>
<li><a href="https://svelte-awesome-color-picker.vercel.app/">svelte-awesome-color-picker</a></li>
<li><a href="https://github.com/efeskucuk/svelte-color-picker">svelte-color-picker</a></li>
<li><a href="https://github.com/mdbassit/Coloris">Coloris</a></li>
</ul>
<pre><code class="language-tsx">&lt;script&gt;
  let color=&#39;#f00&#39;;
&lt;/script&gt;
&lt;ColorPicker bind:color /&gt;
</code></pre>
<p>Basic styles are described in the <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/color-picker.css"><code>color-picker.css</code></a> file.</p>
<p><strong>Note!</strong> Specify the height of the <code>ColorPicker</code> component using the <code>class</code> or <code>style</code> attributes.</p>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom CSS class to add to the <code>c-color-picker</code> base class for custom styling purposes</p>
</td></tr>
<tr><td class="prop__name">style</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom styles will be passed to the <code>style</code> attribute</p>
</td></tr>
<tr><td class="prop__name">color</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>'#000'</code></td>
<td class="prop__description"><p>Color value. <strong>Reactive</strong>.<br />Note! Components only use <strong>hexadecimal</strong> colors e.g. <code>#000</code>, <code>#f1f2f3</code>.<br />Do not use a non-hexadecimal color value such as <code>red</code> or <code>rgb(128,128,128)</code>. <code>rgb()</code> or <code>hsl()</code> colors can be pre-converted to hexadecimal using the <code>rbgToHex</code> or <code>hslToHex</code> functions see <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.js">utils.js</a>.</p>
</td></tr>
<tr><td class="prop__name">debounce</td>
<td class="prop__type"><code>number</code></td>
<td class="prop__value"><code>0</code></td>
<td class="prop__description"><p>Color value update debounce interval</p>
</td></tr></table>
<hr>
<div class="component__source">Source <code>ColorEdit.svelte</code></div>
<h1 class="component__name">ColorEdit</h1>
<div class="component__comment"><p>Component for editing numeric values or a hexadecimal color string.</p>
<p>Contains buttons for switching editing modes: hex, rgba, hsla.</p>
<pre><code class="language-tsx">&lt;script&gt;
  let color=&#39;#f00&#39;;
&lt;/script&gt;
&lt;ColorEdit bind:color /&gt;
</code></pre>
<p>Basic styles are described in the <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/color-edit.css"><code>color-edit.css</code></a> file.</p>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom CSS class to add to the <code>c-color-edit</code> base class for custom styling purposes</p>
</td></tr>
<tr><td class="prop__name">style</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom styles will be passed to the style attribute</p>
</td></tr>
<tr><td class="prop__name">color</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>'#000'</code></td>
<td class="prop__description"><p>Color value. <strong>Reactive</strong>.<br />Note! Components only use <strong>hexadecimal</strong> colors e.g. <code>#000</code>, <code>#f1f2f3</code>.<br />Do not use a non-hexadecimal color value such as <code>red</code> or <code>rgb(128,128,128)</code>. <code>rgb()</code> or <code>hsl()</code> colors can be pre-converted to hexadecimal using the <code>rbgToHex</code> or <code>hslToHex</code> functions see <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.js">utils.js</a>.</p>
</td></tr></table>
<hr>
<div class="component__source">Source <code>ColorEditHex.svelte</code></div>
<h1 class="component__name">ColorEditHex</h1>
<div class="component__comment"><p>Component for editing a hexadecimal color string. Used in the <code>ColorEdit</code> component.</p>
<pre><code class="language-tsx">&lt;script&gt;
  let color=&#39;#f00&#39;;
&lt;/script&gt;
&lt;ColorEditHex bind:color /&gt;
</code></pre>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom CSS class to add to the <code>c-coloredit__input--text</code> base class for custom styling purposes</p>
</td></tr>
<tr><td class="prop__name">color</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>'#000'</code></td>
<td class="prop__description"><p>Color value. <strong>Reactive</strong>.<br />Note! Components only use <strong>hexadecimal</strong> colors e.g. <code>#000</code>, <code>#f1f2f3</code>.</p>
</td></tr>
<tr><td class="prop__name">focus</td>
<td class="prop__type"><code>() =&gt; any</code></td>
<td class="prop__value"><code>() =&gt; {     input?.focus(); }</code></td>
<td class="prop__description"><p>Focuses the input element</p>
</td></tr></table>
<hr>
<div class="component__source">Source <code>ColorEditRgba.svelte</code></div>
<h1 class="component__name">ColorEditRgba</h1>
<div class="component__comment"><p>Component for editing rgba color value. Used in the <code>ColorEdit</code> component.</p>
<pre><code class="language-tsx">&lt;script&gt;
  let color=&#39;#f00&#39;;
&lt;/script&gt;
&lt;ColorEditHsla bind:color /&gt;
</code></pre>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom CSS class to add to the <code>c-coloredit__input--number</code> base class for custom styling purposes</p>
</td></tr>
<tr><td class="prop__name">color</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>'#000'</code></td>
<td class="prop__description"><p>Color value. <strong>Reactive</strong>.<br />Note! Components only use <strong>hexadecimal</strong> colors e.g. <code>#000</code>, <code>#f1f2f3</code>.</p>
</td></tr>
<tr><td class="prop__name">focus</td>
<td class="prop__type"><code>() =&gt; any</code></td>
<td class="prop__value"><code>() =&gt; {     input?.focus(); }</code></td>
<td class="prop__description"><p>Focuses the first input element</p>
</td></tr></table>
<hr>
<div class="component__source">Source <code>ColorEditHsla.svelte</code></div>
<h1 class="component__name">ColorEditHsla</h1>
<div class="component__comment"><p>Component for editing hsla color value. Used in the <code>ColorEdit</code> component.</p>
<pre><code class="language-tsx">&lt;script&gt;
  let color=&#39;#f00&#39;;
&lt;/script&gt;
&lt;ColorEditHsla bind:color /&gt;
</code></pre>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>''</code></td>
<td class="prop__description"><p>Custom CSS class to add to the <code>c-coloredit__input--number</code> base class for custom styling purposes</p>
</td></tr>
<tr><td class="prop__name">color</td>
<td class="prop__type"><code>string</code></td>
<td class="prop__value"><code>'#000'</code></td>
<td class="prop__description"><p>Color value. <strong>Reactive</strong>.<br />Note! Components only use <strong>hexadecimal</strong> colors e.g. <code>#000</code>, <code>#f1f2f3</code>.</p>
</td></tr>
<tr><td class="prop__name">focus</td>
<td class="prop__type"><code>() =&gt; any</code></td>
<td class="prop__value"><code>() =&gt; {     input?.focus(); }</code></td>
<td class="prop__description"><p>Focuses the first input element</p>
</td></tr></table>`;function Rd(s){let e,t,n;return t=new Vt({props:{source:Ad}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(l,o){v(l,e,o),S(t,e,null),n=!0},p:Q,i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){l&&w(e),C(t)}}}class Nd extends V{constructor(e){super(),Y(this,e,null,Rd,K,{})}}function Bo(s){var t;const e=(t=/^#([0-9a-f]{3,8})$/gi.exec(s))==null?void 0:t[1];if(e!=null){if(e.length===3||e.length===4)return e.split(/([0-9a-f])/gi).filter(Boolean);if(e.length===6||e.length===8)return e.split(/([0-9a-f]{2})/gi).filter(Boolean)}}function Sl(s){try{return Bo(s)!=null}catch(e){return!1}}function et(s,e,t){return Math.max(Math.min(s,t),e)}function Md(s){return Pd(Mn(s))}function Mn(s){var n;const e=(n=Bo(s))==null?void 0:n.map(l=>l.length===1?l+l:l);if(e==null)throw new Error(`Invalid color ${s}`);const t={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return e[3]&&(t.a=Math.round(parseInt(e[3],16)/255*1e3)/1e3),t}function Od(s){const e=s.s/100,t=s.l/100,n=(1-Math.abs(2*t-1))*e,l=n*(1-Math.abs(s.h/60%2-1)),o=t-n/2;let i=0,r=0,a=0;0<=s.h&&s.h<60?(i=n,r=l,a=0):60<=s.h&&s.h<120?(i=l,r=n,a=0):120<=s.h&&s.h<180?(i=0,r=n,a=l):180<=s.h&&s.h<240?(i=0,r=l,a=n):240<=s.h&&s.h<300?(i=l,r=0,a=n):300<=s.h&&s.h<360&&(i=n,r=0,a=l),i=Math.round((i+o)*255),r=Math.round((r+o)*255),a=Math.round((a+o)*255);const c={r:i,g:r,b:a};return s.a!=null&&(c.a=s.a),c}function Pd(s){const e=s.r/255,t=s.g/255,n=s.b/255,l=Math.max(e,t,n),o=Math.min(e,t,n),i=l-o;let r=0,a=0,c=0;i===0?r=0:l===e?r=(t-n)/i%6:l===t?r=(n-e)/i+2:r=(e-t)/i+4,r=Math.round(r*60),r<0&&(r+=360),a=(l+o)/2,c=i===0?0:i/(1-Math.abs(2*a-1));const u={h:r,s:Math.round(c*100),l:Math.round(a*100)};return s.a!=null&&(u.a=s.a),u}function Id(s){return fs(Od(s))}function fs(s){const e="#"+[s.r,s.g,s.b].map(n=>et(n,0,255).toString(16).padStart(2,"0")).join(""),t=s.a!=null?Math.round(s.a*255):255;return t<255?e+Math.max(t,0).toString(16).padStart(2,"0"):e}function Ld(s){return Dd(Mn(s))}function Dd(s){const e=et(s.r,0,255)/255,t=et(s.g,0,255)/255,n=et(s.b,0,255)/255,l=Math.max(e,t,n),o=Math.min(e,t,n),i=l-o,r=l;let a=0,c=0;i&&(l===e&&(a=(t-n)/i),l===t&&(a=2+(n-e)/i),l===n&&(a=4+(e-t)/i),l&&(c=i/l)),a=a*60;const u=a<0?a+360:a,f=c*100,d=r*100;return s.a!=null&&s.a>=0?{h:u,s:f,v:d,a:et(s.a,0,1)}:{h:u,s:f,v:d}}function Wn(s){return fs(Fd(s))}function Fd(s){const e=s.s/100,t=s.v/100;let n=e*t;const l=s.h/60;let o=n*(1-Math.abs(l%2-1));const i=t-n;n=n+i,o=o+i;const r=Math.floor(l)%6,a=[n,o,i,i,o,n][r],c=[o,n,n,o,i,i][r],u=[i,i,o,n,n,o][r],f=Math.round(a*255),d=Math.round(c*255),p=Math.round(u*255);return s.a!=null?{r:f,g:d,b:p,a:s.a}:{r:f,g:d,b:p}}function Cl(s){var l;typeof s=="string"&&(s=Mn(s));const e=[.2126,.7152,.0722],t=[s.r,s.g,s.b].reduce((o,i,r)=>(i/=255,i<.03928?i/=12.92:(i=(i+.055)/1.055,i*=i),o+i*e[r]),0),n=1-((l=s.a)!=null?l:1);return t+(1-t)*n}function zd(s){let e,t,n,l;return{c(){e=b("div"),t=b("div"),g(t,"class","c-color-picker__tone--marker"),Be(t,"left",s[0]+"%"),Be(t,"top",100-s[1]+"%"),g(e,"class","c-color-picker__tone"),g(e,"tabindex","0")},m(o,i){v(o,e,i),h(e,t),n||(l=Ge(s[2].call(null,e)),n=!0)},p(o,[i]){i&1&&Be(t,"left",o[0]+"%"),i&2&&Be(t,"top",100-o[1]+"%")},i:Q,o:Q,d(o){o&&w(e),n=!1,l()}}}function Bd(s,e,t){let{s:n=0}=e,{v:l=0}=e;function o(i){function r(p){const{pageX:m,pageY:_}=p instanceof MouseEvent?p:p.changedTouches[0],{left:$,top:E,width:x,height:R}=i.getBoundingClientRect();t(0,n=et((m-$-window.scrollX)/x,0,1)*100),t(1,l=100-et((_-E-window.scrollY)/R,0,1)*100)}function a(p){r(p)}function c(){document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",c),document.removeEventListener("touchend",c),setTimeout(()=>{document.removeEventListener("click",f,{capture:!0})},0)}function u(p){i.focus(),document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",c),document.addEventListener("touchend",c),document.addEventListener("click",f,{capture:!0}),r(p),p.preventDefault()}function f(p){p.preventDefault(),p.stopPropagation()}function d(p){let _=100-l,$=n;switch(p.code){case"ArrowUp":_=et(_-1,0,100);break;case"ArrowDown":_=et(_+1,0,100),p.preventDefault();break;case"ArrowLeft":$=et($-1,0,100),p.preventDefault();break;case"ArrowRight":$=et($+1,0,100),p.preventDefault();break}$!==n&&t(0,n=$),100-_!==l&&t(1,l=100-_)}return i.addEventListener("mousedown",u),i.addEventListener("touchstart",u),i.addEventListener("keydown",d),{destroy(){c(),i.removeEventListener("mousedown",u),i.removeEventListener("touchstart",u),i.removeEventListener("keydown",d)}}}return s.$$set=i=>{"s"in i&&t(0,n=i.s),"v"in i&&t(1,l=i.v)},[n,l,o]}class Hd extends V{constructor(e){super(),Y(this,e,Bd,zd,K,{s:0,v:1})}}var jd="Expected a function",Al=0/0,Ud="[object Symbol]",qd=/^\s+|\s+$/g,Wd=/^[-+]0x[0-9a-f]+$/i,Gd=/^0b[01]+$/i,Zd=/^0o[0-7]+$/i,Kd=parseInt,Xd=typeof rn=="object"&&rn&&rn.Object===Object&&rn,Yd=typeof self=="object"&&self&&self.Object===Object&&self,Vd=Xd||Yd||Function("return this")(),Qd=Object.prototype,Jd=Qd.toString,ep=Math.max,tp=Math.min,Gn=function(){return Vd.Date.now()};function np(s,e,t){var n,l,o,i,r,a,c=0,u=!1,f=!1,d=!0;if(typeof s!="function")throw new TypeError(jd);e=Rl(e)||0,Vn(t)&&(u=!!t.leading,f="maxWait"in t,o=f?ep(Rl(t.maxWait)||0,e):o,d="trailing"in t?!!t.trailing:d);function p(O){var P=n,D=l;return n=l=void 0,c=O,i=s.apply(D,P),i}function m(O){return c=O,r=setTimeout(E,e),u?p(O):i}function _(O){var P=O-a,D=O-c,F=e-P;return f?tp(F,o-D):F}function $(O){var P=O-a,D=O-c;return a===void 0||P>=e||P<0||f&&D>=o}function E(){var O=Gn();if($(O))return x(O);r=setTimeout(E,_(O))}function x(O){return r=void 0,d&&n?p(O):(n=l=void 0,i)}function R(){r!==void 0&&clearTimeout(r),c=0,n=a=l=r=void 0}function N(){return r===void 0?i:x(Gn())}function M(){var O=Gn(),P=$(O);if(n=arguments,l=this,a=O,P){if(r===void 0)return m(a);if(f)return r=setTimeout(E,e),p(a)}return r===void 0&&(r=setTimeout(E,e)),i}return M.cancel=R,M.flush=N,M}function Vn(s){var e=typeof s;return!!s&&(e=="object"||e=="function")}function sp(s){return!!s&&typeof s=="object"}function lp(s){return typeof s=="symbol"||sp(s)&&Jd.call(s)==Ud}function Rl(s){if(typeof s=="number")return s;if(lp(s))return Al;if(Vn(s)){var e=typeof s.valueOf=="function"?s.valueOf():s;s=Vn(e)?e+"":e}if(typeof s!="string")return s===0?s:+s;s=s.replace(qd,"");var t=Gd.test(s);return t||Zd.test(s)?Kd(s.slice(2),t?2:8):Wd.test(s)?Al:+s}var op=np;function ip(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x;function R(O){s[9](O)}function N(O){s[10](O)}let M={};return s[2].s!==void 0&&(M.s=s[2].s),s[2].v!==void 0&&(M.v=s[2].v),n=new Hd({props:M}),De.push(()=>gt(n,"s",R)),De.push(()=>gt(n,"v",N)),{c(){e=b("div"),t=b("div"),A(n.$$.fragment),i=T(),r=b("div"),a=T(),c=b("div"),u=b("input"),f=T(),d=b("div"),p=b("input"),g(r,"class","c-color-picker__sample"),g(u,"type","range"),g(u,"min","0"),g(u,"max","359"),g(u,"step","1"),g(c,"class","c-color-picker__hue"),g(p,"type","range"),g(p,"min","0"),g(p,"max","1"),g(p,"step",1/255),g(d,"class","c-color-picker__alpha"),g(t,"class","c-color-picker__body"),g(e,"class",m="c-color-picker"+(s[0]?" "+s[0]:"")),g(e,"style",_="--cp-tone: "+s[4]+"; --cp-color-opacity: "+s[5]+"; --cp-color: "+s[3]+"; "+s[1])},m(O,P){v(O,e,P),h(e,t),S(n,t,null),h(t,i),h(t,r),h(t,a),h(t,c),h(c,u),qe(u,s[2].h),h(t,f),h(t,d),h(d,p),qe(p,s[2].a),$=!0,E||(x=[Z(u,"change",s[11]),Z(u,"input",s[11]),Z(p,"change",s[12]),Z(p,"input",s[12])],E=!0)},p(O,[P]){const D={};!l&&P&4&&(l=!0,D.s=O[2].s,yt(()=>l=!1)),!o&&P&4&&(o=!0,D.v=O[2].v,yt(()=>o=!1)),n.$set(D),P&4&&qe(u,O[2].h),P&4&&qe(p,O[2].a),(!$||P&1&&m!==(m="c-color-picker"+(O[0]?" "+O[0]:"")))&&g(e,"class",m),(!$||P&58&&_!==(_="--cp-tone: "+O[4]+"; --cp-color-opacity: "+O[5]+"; --cp-color: "+O[3]+"; "+O[1]))&&g(e,"style",_)},i(O){$||(k(n.$$.fragment,O),$=!0)},o(O){y(n.$$.fragment,O),$=!1},d(O){O&&w(e),C(n),E=!1,Me(x)}}}function rp(s,e,t){let{class:n=""}=e,{style:l=""}=e,{color:o="#000"}=e,{debounce:i=0}=e,r;function a(E){let{h:x,s:R,v:N,a:M=1}=Ld(E);r!=null&&x===0&&R===0&&(x=r.h),t(2,r={h:x,s:R,v:N,a:M})}let c,u,f,d;function p(E){s.$$.not_equal(r.s,E)&&(r.s=E,t(2,r))}function m(E){s.$$.not_equal(r.v,E)&&(r.v=E,t(2,r))}function _(){r.h=Ye(this.value),t(2,r)}function $(){r.a=Ye(this.value),t(2,r)}return s.$$set=E=>{"class"in E&&t(0,n=E.class),"style"in E&&t(1,l=E.style),"color"in E&&t(6,o=E.color),"debounce"in E&&t(7,i=E.debounce)},s.$$.update=()=>{s.$$.dirty&128&&t(8,c=op(E=>{t(6,o=E)},i)),s.$$.dirty&64&&a(o),s.$$.dirty&268&&(E=>{t(3,u=Wn(E)),t(4,f=Wn({h:E.h,s:100,v:100})),t(5,d=Wn({h:E.h,s:E.s,v:E.v})),c(u)})(r)},[n,l,r,u,f,d,o,i,c,p,m,_,$]}class Ho extends V{constructor(e){super(),Y(this,e,rp,ip,K,{class:0,style:1,color:6,debounce:7})}}function ap(s){let e,t,n,l;return{c(){e=b("input"),g(e,"class",t="c-coloredit__input--text"+(s[0]?" "+s[0]:"")),g(e,"type","text"),e.value=s[1]},m(o,i){v(o,e,i),s[6](e),n||(l=Z(e,"input",s[7]),n=!0)},p(o,[i]){i&1&&t!==(t="c-coloredit__input--text"+(o[0]?" "+o[0]:""))&&g(e,"class",t),i&2&&e.value!==o[1]&&(e.value=o[1])},i:Q,o:Q,d(o){o&&w(e),s[6](null),n=!1,l()}}}function cp(s,e,t){let{class:n=""}=e,{color:l="#000"}=e,o;function i(f){Sl(f)&&t(4,l=f)}let r;function a(){r==null||r.focus()}function c(f){De[f?"unshift":"push"](()=>{r=f,t(2,r)})}const u=f=>i(f.currentTarget.value);return s.$$set=f=>{"class"in f&&t(0,n=f.class),"color"in f&&t(4,l=f.color)},s.$$.update=()=>{s.$$.dirty&16&&t(1,o=Sl(l)?l:"")},[n,o,r,i,l,a,c,u]}class up extends V{constructor(e){super(),Y(this,e,cp,ap,K,{class:0,color:4,focus:5})}get focus(){return this.$$.ctx[5]}}function fp(s){let e,t,n,l,o,i,r,a,c,u,f,d,p;return{c(){e=b("input"),n=T(),l=b("input"),i=T(),r=b("input"),c=T(),u=b("input"),g(e,"class",t="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(e,"type","number"),g(e,"min","0"),g(e,"max","255"),g(e,"step","1"),e.value=s[1],g(l,"class",o="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(l,"type","number"),g(l,"min","0"),g(l,"max","255"),g(l,"step","1"),l.value=s[2],g(r,"class",a="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(r,"type","number"),g(r,"min","0"),g(r,"max","255"),g(r,"step","1"),r.value=s[3],g(u,"class",f="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(u,"type","number"),g(u,"min","0"),g(u,"max","1"),g(u,"step","0.01"),u.value=s[4]},m(m,_){v(m,e,_),s[8](e),v(m,n,_),v(m,l,_),v(m,i,_),v(m,r,_),v(m,c,_),v(m,u,_),d||(p=[Z(e,"change",s[9]),Z(l,"change",s[10]),Z(r,"change",s[11]),Z(u,"change",s[12])],d=!0)},p(m,[_]){_&1&&t!==(t="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(e,"class",t),_&2&&e.value!==m[1]&&(e.value=m[1]),_&1&&o!==(o="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(l,"class",o),_&4&&l.value!==m[2]&&(l.value=m[2]),_&1&&a!==(a="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(r,"class",a),_&8&&r.value!==m[3]&&(r.value=m[3]),_&1&&f!==(f="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(u,"class",f),_&16&&u.value!==m[4]&&(u.value=m[4])},i:Q,o:Q,d(m){m&&w(e),s[8](null),m&&w(n),m&&w(l),m&&w(i),m&&w(r),m&&w(c),m&&w(u),d=!1,Me(p)}}}function dp(s,e,t){let{class:n=""}=e,{color:l="#000"}=e,o,i,r,a;function c(x){var R;try{const N=Mn(x);t(1,o=N.r),t(2,i=N.g),t(3,r=N.b),t(4,a=(R=N.a)!=null?R:1)}catch(N){t(1,o=NaN),t(2,i=NaN),t(3,r=NaN),t(4,a=NaN)}}function u(x,R,N,M){[x,N,R,M!=null?M:1].every(O=>Number.isFinite(O))&&t(6,l=fs({r:x,g:R,b:N,a:M}))}let f;function d(){f==null||f.focus()}function p(x){De[x?"unshift":"push"](()=>{f=x,t(5,f)})}const m=x=>t(1,o=+x.currentTarget.value),_=x=>t(2,i=+x.currentTarget.value),$=x=>t(3,r=+x.currentTarget.value),E=x=>t(4,a=+x.currentTarget.value);return s.$$set=x=>{"class"in x&&t(0,n=x.class),"color"in x&&t(6,l=x.color)},s.$$.update=()=>{s.$$.dirty&64&&c(l),s.$$.dirty&30&&u(o,i,r,a)},[n,o,i,r,a,f,l,d,p,m,_,$,E]}class pp extends V{constructor(e){super(),Y(this,e,dp,fp,K,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function mp(s){let e,t,n,l,o,i,r,a,c,u,f,d,p;return{c(){e=b("input"),n=T(),l=b("input"),i=T(),r=b("input"),c=T(),u=b("input"),g(e,"class",t="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(e,"type","number"),g(e,"min","0"),g(e,"max","360"),g(e,"step","1"),e.value=s[1],g(l,"class",o="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(l,"type","number"),g(l,"min","0"),g(l,"max","100"),g(l,"step","1"),l.value=s[2],g(r,"class",a="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(r,"type","number"),g(r,"min","0"),g(r,"max","100"),g(r,"step","1"),r.value=s[3],g(u,"class",f="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(u,"type","number"),g(u,"min","0"),g(u,"max","1"),g(u,"step","0.01"),u.value=s[4]},m(m,_){v(m,e,_),s[8](e),v(m,n,_),v(m,l,_),v(m,i,_),v(m,r,_),v(m,c,_),v(m,u,_),d||(p=[Z(e,"change",s[9]),Z(l,"change",s[10]),Z(r,"change",s[11]),Z(u,"change",s[12])],d=!0)},p(m,[_]){_&1&&t!==(t="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(e,"class",t),_&2&&e.value!==m[1]&&(e.value=m[1]),_&1&&o!==(o="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(l,"class",o),_&4&&l.value!==m[2]&&(l.value=m[2]),_&1&&a!==(a="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(r,"class",a),_&8&&r.value!==m[3]&&(r.value=m[3]),_&1&&f!==(f="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(u,"class",f),_&16&&u.value!==m[4]&&(u.value=m[4])},i:Q,o:Q,d(m){m&&w(e),s[8](null),m&&w(n),m&&w(l),m&&w(i),m&&w(r),m&&w(c),m&&w(u),d=!1,Me(p)}}}function hp(s,e,t){let{class:n=""}=e,{color:l="#000"}=e,o,i,r,a;function c(x){var R;try{const N=Md(x);t(1,o=N.h),t(2,i=N.s),t(3,r=N.l),t(4,a=(R=N.a)!=null?R:1)}catch(N){t(1,o=NaN),t(2,i=NaN),t(3,r=NaN),t(4,a=NaN)}}function u(x,R,N,M){[x,R,N,M!=null?M:1].every(O=>Number.isFinite(O))&&t(6,l=Id({h:x,s:R,l:N,a:M}))}let f;function d(){f==null||f.focus()}function p(x){De[x?"unshift":"push"](()=>{f=x,t(5,f)})}const m=x=>t(1,o=+x.currentTarget.value),_=x=>t(2,i=+x.currentTarget.value),$=x=>t(3,r=+x.currentTarget.value),E=x=>t(4,a=+x.currentTarget.value);return s.$$set=x=>{"class"in x&&t(0,n=x.class),"color"in x&&t(6,l=x.color)},s.$$.update=()=>{s.$$.dirty&64&&c(l),s.$$.dirty&30&&u(o,i,r,a)},[n,o,i,r,a,f,l,d,p,m,_,$,E]}class gp extends V{constructor(e){super(),Y(this,e,hp,mp,K,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function Nl(s,e,t){const n=s.slice();return n[11]=e[t],n}function Ml(s){let e,t=s[11]+"",n;return{c(){e=b("span"),n=L(t),g(e,"class","c-color-edit__label")},m(l,o){v(l,e,o),h(e,n)},p(l,o){o&8&&t!==(t=l[11]+"")&&$e(n,t)},d(l){l&&w(e)}}}function _p(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_;function $(M){s[6](M)}var E=s[3].component;function x(M){let O={};return M[0]!==void 0&&(O.color=M[0]),{props:O}}E&&(n=new E(x(s)),De.push(()=>gt(n,"color",$)),s[7](n));let R=s[3].labels,N=[];for(let M=0;M<R.length;M+=1)N[M]=Ml(Nl(s,R,M));return{c(){e=b("div"),t=b("div"),n&&A(n.$$.fragment),o=T();for(let M=0;M<N.length;M+=1)N[M].c();i=T(),r=b("div"),a=b("button"),c=T(),u=b("button"),g(t,"class","c-color-edit__values"),Be(t,"--ce-columns",s[3].labels.length),g(a,"class","c-color-edit__button--up"),g(u,"class","c-color-edit__button--down"),g(r,"class","c-color-edit__buttons"),g(e,"class",f="c-color-edit"+(s[1]?" "+s[1]:"")),g(e,"style",d=s[2]||void 0)},m(M,O){v(M,e,O),h(e,t),n&&S(n,t,null),h(t,o);for(let P=0;P<N.length;P+=1)N[P].m(t,null);h(e,i),h(e,r),h(r,a),h(r,c),h(r,u),p=!0,m||(_=[Z(a,"click",s[8]),Z(u,"click",s[9])],m=!0)},p(M,[O]){const P={};if(!l&&O&1&&(l=!0,P.color=M[0],yt(()=>l=!1)),E!==(E=M[3].component)){if(n){re();const D=n;y(D.$$.fragment,1,0,()=>{C(D,1)}),ae()}E?(n=new E(x(M)),De.push(()=>gt(n,"color",$)),M[7](n),A(n.$$.fragment),k(n.$$.fragment,1),S(n,t,o)):n=null}else E&&n.$set(P);if(O&8){R=M[3].labels;let D;for(D=0;D<R.length;D+=1){const F=Nl(M,R,D);N[D]?N[D].p(F,O):(N[D]=Ml(F),N[D].c(),N[D].m(t,null))}for(;D<N.length;D+=1)N[D].d(1);N.length=R.length}(!p||O&8)&&Be(t,"--ce-columns",M[3].labels.length),(!p||O&2&&f!==(f="c-color-edit"+(M[1]?" "+M[1]:"")))&&g(e,"class",f),(!p||O&4&&d!==(d=M[2]||void 0))&&g(e,"style",d)},i(M){p||(n&&k(n.$$.fragment,M),p=!0)},o(M){n&&y(n.$$.fragment,M),p=!1},d(M){M&&w(e),s[7](null),n&&C(n),He(N,M),m=!1,Me(_)}}}function bp(s,e,t){let{class:n=""}=e,{style:l=""}=e,{color:o="#000"}=e;const i=[{component:up,labels:["Hex"]},{component:pp,labels:["R","G","B","A"]},{component:gp,labels:["H","S","L","A"]}];let r=i[0],a;function c(m){return Ue(this,null,function*(){let _=i.indexOf(r)+m;_<0?_=i.length-1:_>=i.length&&(_=0),t(3,r=i[_]),yield ho(),a==null||a.focus()})}function u(m){o=m,t(0,o)}function f(m){De[m?"unshift":"push"](()=>{a=m,t(4,a)})}const d=()=>c(-1),p=()=>c(1);return s.$$set=m=>{"class"in m&&t(1,n=m.class),"style"in m&&t(2,l=m.style),"color"in m&&t(0,o=m.color)},[o,n,l,r,a,c,u,f,d,p]}class jo extends V{constructor(e){super(),Y(this,e,bp,_p,K,{class:1,style:2,color:0})}}function Ol(s,e,t){const n=s.slice();return n[6]=e[t],n}function Pl(s){let e,t=s[6]+"",n,l,o;function i(){return s[5](s[6])}return{c(){e=b("button"),n=L(t),g(e,"class","input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"),Be(e,"background-color",s[6]),Be(e,"color",Cl(s[6])>.55?"inherit":"white")},m(r,a){v(r,e,a),h(e,n),l||(o=Z(e,"click",i),l=!0)},p(r,a){s=r,a&2&&t!==(t=s[6]+"")&&$e(n,t),a&2&&Be(e,"background-color",s[6]),a&2&&Be(e,"color",Cl(s[6])>.55?"inherit":"white")},d(r){r&&w(e),l=!1,o()}}}function $p(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m=s[1],_=[];for(let $=0;$<m.length;$+=1)_[$]=Pl(Ol(s,m,$));return{c(){e=b("div"),t=b("span"),t.textContent="Set color",n=T(),l=b("a"),l.textContent="randomize alpha",o=T(),i=b("span"),i.textContent="\u2022",r=T(),a=b("a"),a.textContent="reset alpha",u=T(),f=b("div");for(let $=0;$<_.length;$+=1)_[$].c();g(l,"class","text-sm"),g(l,"href","javascript:void(0)"),g(i,"class","text-blue-500"),g(a,"class","text-sm"),g(a,"href","javascript:void(0)"),g(e,"class",c=s[0]||void 0)},m($,E){v($,e,E),h(e,t),h(e,n),h(e,l),h(e,o),h(e,i),h(e,r),h(e,a),v($,u,E),v($,f,E);for(let x=0;x<_.length;x+=1)_[x].m(f,null);d||(p=[Z(l,"click",s[3]),Z(a,"click",s[4])],d=!0)},p($,[E]){if(E&1&&c!==(c=$[0]||void 0)&&g(e,"class",c),E&6){m=$[1];let x;for(x=0;x<m.length;x+=1){const R=Ol($,m,x);_[x]?_[x].p(R,E):(_[x]=Pl(R),_[x].c(),_[x].m(f,null))}for(;x<_.length;x+=1)_[x].d(1);_.length=m.length}},i:Q,o:Q,d($){$&&w(e),$&&w(u),$&&w(f),He(_,$),d=!1,Me(p)}}}function wp(s){return Uo(s).map(e=>e+Math.floor(Math.random()*255).toString(16).padStart(2,"0"))}function Uo(s){return s.map(e=>e.slice(0,7))}function vp(s,e,t){const n=es();let{class:l=""}=e,o=["#001219","#005F73","#0A9396","#94D2BD","#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226","#F72585","#B5179E","#7209B7","#560BAD","#480CA8","#3A0CA3","#3F37C9","#4361EE","#4895EF","#4CC9F0"];const i=()=>t(1,o=wp(o)),r=()=>t(1,o=Uo(o)),a=c=>n("color",c);return s.$$set=c=>{"class"in c&&t(0,l=c.class)},[l,o,n,i,r,a]}class ds extends V{constructor(e){super(),Y(this,e,vp,$p,K,{class:0})}}function kp(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M,O,P;function D(j){s[1](j)}let F={class:"basis-1/2 h-[256px] pt-2"};return s[0]!==void 0&&(F.color=s[0]),n=new Ho({props:F}),De.push(()=>gt(n,"color",D)),x=new ds({props:{class:"mt-4"}}),x.$on("color",s[2]),O=new Ve({props:{code:`<script lang="ts">
  import { ColorPicker, luminance } from '@apsc/color';
  import SampleColors from './SampleColors.svelte';
  import '@apsc/color/color-picker.css';

  let color = '#f70';
<\/script>

<section class="prose max-w-none my-4">
  <div class="flex gap-8">
    <ColorPicker class="basis-1/2 h-[256px] pt-2" bind:color />
    <div class="basis-1/2">
      <div>Current color: <code class="uppercase">{color}</code></div>
      <div class="p-2 border rounded-md">
        <div class="relative h-[1.5em]">
          <div class="bg-chess absolute left-0 top-0 right-0 bottom-0" />
          <div class="absolute left-0 top-0 right-0 bottom-0" style="background-color: {color};" />
        </div>
      </div>
      <SampleColors class="mt-4" on:color={({ detail }) => (color = detail)} />
    </div>
  </div>
</section>`}}),{c(){e=b("section"),t=b("div"),A(n.$$.fragment),o=T(),i=b("div"),r=b("div"),a=L("Current color: "),c=b("code"),u=L(s[0]),f=T(),d=b("div"),p=b("div"),m=b("div"),_=T(),$=b("div"),E=T(),A(x.$$.fragment),R=T(),N=b("h3"),N.textContent="Code",M=T(),A(O.$$.fragment),g(c,"class","uppercase"),g(m,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),g($,"class","absolute left-0 top-0 right-0 bottom-0"),Be($,"background-color",s[0]),g(p,"class","relative h-[1.5em]"),g(d,"class","p-2 border rounded-md"),g(i,"class","basis-1/2"),g(t,"class","flex gap-8"),g(e,"class","prose max-w-none my-4")},m(j,U){v(j,e,U),h(e,t),S(n,t,null),h(t,o),h(t,i),h(i,r),h(r,a),h(r,c),h(c,u),h(i,f),h(i,d),h(d,p),h(p,m),h(p,_),h(p,$),h(i,E),S(x,i,null),h(e,R),h(e,N),h(e,M),S(O,e,null),P=!0},p(j,[U]){const W={};!l&&U&1&&(l=!0,W.color=j[0],yt(()=>l=!1)),n.$set(W),(!P||U&1)&&$e(u,j[0]),(!P||U&1)&&Be($,"background-color",j[0])},i(j){P||(k(n.$$.fragment,j),k(x.$$.fragment,j),k(O.$$.fragment,j),P=!0)},o(j){y(n.$$.fragment,j),y(x.$$.fragment,j),y(O.$$.fragment,j),P=!1},d(j){j&&w(e),C(n),C(x),C(O)}}}function yp(s,e,t){let n="#f70";function l(i){n=i,t(0,n)}return[n,l,({detail:i})=>t(0,n=i)]}class Tp extends V{constructor(e){super(),Y(this,e,yp,kp,K,{})}}function xp(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M,O,P,D;function F(U){s[1](U)}let j={class:"w-full border shadow-md rounded-lg p-2"};return s[0]!==void 0&&(j.color=s[0]),l=new jo({props:j}),De.push(()=>gt(l,"color",F)),R=new ds({props:{class:"mt-4"}}),R.$on("color",s[2]),P=new Ve({props:{code:`<script lang="ts">
  import { ColorEdit } from '@apsc/color';
  import SampleColors from './SampleColors.svelte';
  import '@apsc/color/color-edit.css';

  let color = '#f70';
<\/script>

<section class="prose max-w-none my-4">
  <div class="flex gap-8">
    <div class="basis-1/2 inline-flex items-center">
      <ColorEdit class="w-full border shadow-md rounded-lg p-2" bind:color />
    </div>
    <div class="basis-1/2">
      <div>Current color: <code class="uppercase">{color}</code></div>
      <div class="p-2 border rounded-md">
        <div class="relative h-[1.5em]">
          <div class="bg-chess absolute left-0 top-0 right-0 bottom-0" />
          <div class="absolute left-0 top-0 right-0 bottom-0" style="background-color: {color};" />
        </div>
      </div>
      <SampleColors class="mt-4" on:color={({ detail }) => (color = detail)} />
    </div>
  </div>
</section>

<style lang="postcss">
  :global(.c-coloredit__input--text),
  :global(.c-coloredit__input--number) {
    @apply border border-gray-300 rounded-md;
  }
  :global(.c-color-edit__label) {
    @apply text-sm uppercase text-gray-500 mt-1;
  }
  :global(.c-color-edit__buttons) {
    @apply gap-1 text-gray-300;
  }
  :global(.c-color-edit__button--up):hover,
  :global(.c-color-edit__button--down):hover {
    @apply text-gray-500;
  }
</style>`}}),{c(){e=b("section"),t=b("div"),n=b("div"),A(l.$$.fragment),i=T(),r=b("div"),a=b("div"),c=L("Current color: "),u=b("code"),f=L(s[0]),d=T(),p=b("div"),m=b("div"),_=b("div"),$=T(),E=b("div"),x=T(),A(R.$$.fragment),N=T(),M=b("h3"),M.textContent="Code",O=T(),A(P.$$.fragment),g(n,"class","basis-1/2 inline-flex items-center"),g(u,"class","uppercase"),g(_,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),g(E,"class","absolute left-0 top-0 right-0 bottom-0"),Be(E,"background-color",s[0]),g(m,"class","relative h-[1.5em]"),g(p,"class","p-2 border rounded-md"),g(r,"class","basis-1/2"),g(t,"class","flex gap-8"),g(e,"class","prose max-w-none my-4")},m(U,W){v(U,e,W),h(e,t),h(t,n),S(l,n,null),h(t,i),h(t,r),h(r,a),h(a,c),h(a,u),h(u,f),h(r,d),h(r,p),h(p,m),h(m,_),h(m,$),h(m,E),h(r,x),S(R,r,null),h(e,N),h(e,M),h(e,O),S(P,e,null),D=!0},p(U,[W]){const le={};!o&&W&1&&(o=!0,le.color=U[0],yt(()=>o=!1)),l.$set(le),(!D||W&1)&&$e(f,U[0]),(!D||W&1)&&Be(E,"background-color",U[0])},i(U){D||(k(l.$$.fragment,U),k(R.$$.fragment,U),k(P.$$.fragment,U),D=!0)},o(U){y(l.$$.fragment,U),y(R.$$.fragment,U),y(P.$$.fragment,U),D=!1},d(U){U&&w(e),C(l),C(R),C(P)}}}function Ep(s,e,t){let n="#f70";function l(i){n=i,t(0,n)}return[n,l,({detail:i})=>t(0,n=i)]}class Sp extends V{constructor(e){super(),Y(this,e,Ep,xp,K,{})}}function Qt(s){return s.split("-")[0]}function Jt(s){return s.split("-")[1]}function On(s){return["top","bottom"].includes(Qt(s))?"x":"y"}function ps(s){return s==="y"?"height":"width"}function Il(s,e,t){let{reference:n,floating:l}=s;const o=n.x+n.width/2-l.width/2,i=n.y+n.height/2-l.height/2,r=On(e),a=ps(r),c=n[a]/2-l[a]/2,u=Qt(e),f=r==="x";let d;switch(u){case"top":d={x:o,y:n.y-l.height};break;case"bottom":d={x:o,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:i};break;case"left":d={x:n.x-l.width,y:i};break;default:d={x:n.x,y:n.y}}switch(Jt(e)){case"start":d[r]-=c*(t&&f?-1:1);break;case"end":d[r]+=c*(t&&f?-1:1);break}return d}const Cp=(s,e,t)=>Ue(ti,null,function*(){const{placement:n="bottom",strategy:l="absolute",middleware:o=[],platform:i}=t,r=yield i.isRTL==null?void 0:i.isRTL(e);let a=yield i.getElementRects({reference:s,floating:e,strategy:l}),{x:c,y:u}=Il(a,n,r),f=n,d={};for(let p=0;p<o.length;p++){const{name:m,fn:_}=o[p],{x:$,y:E,data:x,reset:R}=yield _({x:c,y:u,initialPlacement:n,placement:f,strategy:l,middlewareData:d,rects:a,platform:i,elements:{reference:s,floating:e}});if(c=$!=null?$:c,u=E!=null?E:u,d=Rt(ze({},d),{[m]:ze(ze({},d[m]),x)}),R){typeof R=="object"&&(R.placement&&(f=R.placement),R.rects&&(a=R.rects===!0?yield i.getElementRects({reference:s,floating:e,strategy:l}):R.rects),{x:c,y:u}=Il(a,f,r)),p=-1;continue}}return{x:c,y:u,placement:f,strategy:l,middlewareData:d}});function Ap(s){return ze({top:0,right:0,bottom:0,left:0},s)}function qo(s){return typeof s!="number"?Ap(s):{top:s,right:s,bottom:s,left:s}}function xn(s){return Rt(ze({},s),{top:s.y,left:s.x,right:s.x+s.width,bottom:s.y+s.height})}function Wo(s,e){return Ue(this,null,function*(){var t;e===void 0&&(e={});const{x:n,y:l,platform:o,rects:i,elements:r,strategy:a}=s,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:p=0}=e,m=qo(p),$=r[d?f==="floating"?"reference":"floating":f],E=xn(yield o.getClippingRect({element:(t=yield o.isElement==null?void 0:o.isElement($))==null||t?$:$.contextElement||(yield o.getDocumentElement==null?void 0:o.getDocumentElement(r.floating)),boundary:c,rootBoundary:u,strategy:a})),x=xn(o.convertOffsetParentRelativeRectToViewportRelativeRect?yield o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f==="floating"?Rt(ze({},i.floating),{x:n,y:l}):i.reference,offsetParent:yield o.getOffsetParent==null?void 0:o.getOffsetParent(r.floating),strategy:a}):i[f]);return{top:E.top-x.top+m.top,bottom:x.bottom-E.bottom+m.bottom,left:E.left-x.left+m.left,right:x.right-E.right+m.right}})}const Rp=Math.min,vt=Math.max;function Np(s,e,t){return vt(s,Rp(e,t))}const Go=s=>({name:"arrow",options:s,fn(t){return Ue(this,null,function*(){const{element:n,padding:l=0}=s!=null?s:{},{x:o,y:i,placement:r,rects:a,platform:c}=t;if(n==null)return{};const u=qo(l),f={x:o,y:i},d=On(r),p=Jt(r),m=ps(d),_=yield c.getDimensions(n),$=d==="y"?"top":"left",E=d==="y"?"bottom":"right",x=a.reference[m]+a.reference[d]-f[d]-a.floating[m],R=f[d]-a.reference[d],N=yield c.getOffsetParent==null?void 0:c.getOffsetParent(n);let M=N?d==="y"?N.clientHeight||0:N.clientWidth||0:0;M===0&&(M=a.floating[m]);const O=x/2-R/2,P=u[$],D=M-_[m]-u[E],F=M/2-_[m]/2+O,j=Np(P,F,D),le=(p==="start"?u[$]:u[E])>0&&F!==j&&a.reference[m]<=a.floating[m]?F<P?P-F:D-F:0;return{[d]:f[d]-le,data:{[d]:j,centerOffset:F-j}}})}}),Mp={left:"right",right:"left",bottom:"top",top:"bottom"};function En(s){return s.replace(/left|right|bottom|top/g,e=>Mp[e])}function Op(s,e,t){t===void 0&&(t=!1);const n=Jt(s),l=On(s),o=ps(l);let i=l==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(i=En(i)),{main:i,cross:En(i)}}const Pp={start:"end",end:"start"};function Ll(s){return s.replace(/start|end/g,e=>Pp[e])}function Ip(s){const e=En(s);return[Ll(s),e,Ll(e)]}const Pn=function(s){return s===void 0&&(s={}),{name:"flip",options:s,fn(t){return Ue(this,null,function*(){var n;const{placement:l,middlewareData:o,rects:i,initialPlacement:r,platform:a,elements:c}=t,j=s,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",flipAlignment:m=!0}=j,_=zn(j,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),$=Qt(l),x=d||($===r||!m?[En(r)]:Ip(r)),R=[r,...x],N=yield Wo(t,_),M=[];let O=((n=o.flip)==null?void 0:n.overflows)||[];if(u&&M.push(N[$]),f){const{main:U,cross:W}=Op(l,i,yield a.isRTL==null?void 0:a.isRTL(c.floating));M.push(N[U],N[W])}if(O=[...O,{placement:l,overflows:M}],!M.every(U=>U<=0)){var P,D;const U=((P=(D=o.flip)==null?void 0:D.index)!=null?P:0)+1,W=R[U];if(W)return{data:{index:U,overflows:O},reset:{placement:W}};let le="bottom";switch(p){case"bestFit":{var F;const we=(F=O.map(ee=>[ee,ee.overflows.filter(I=>I>0).reduce((I,B)=>I+B,0)]).sort((ee,I)=>ee[1]-I[1])[0])==null?void 0:F[0].placement;we&&(le=we);break}case"initialPlacement":le=r;break}if(l!==le)return{reset:{placement:le}}}return{}})}}};function Lp(s,e){return Ue(this,null,function*(){const{placement:t,platform:n,elements:l}=s,o=yield n.isRTL==null?void 0:n.isRTL(l.floating),i=Qt(t),r=Jt(t),a=On(t)==="x",c=["left","top"].includes(i)?-1:1,u=o&&a?-1:1,f=typeof e=="function"?e(s):e;let{mainAxis:d,crossAxis:p,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:ze({mainAxis:0,crossAxis:0,alignmentAxis:null},f);return r&&typeof m=="number"&&(p=r==="end"?m*-1:m),a?{x:p*u,y:d*c}:{x:d*c,y:p*u}})}const In=function(s){return s===void 0&&(s=0),{name:"offset",options:s,fn(t){return Ue(this,null,function*(){const{x:n,y:l}=t,o=yield Lp(t,s);return{x:n+o.x,y:l+o.y,data:o}})}}},Zo=function(s){return s===void 0&&(s={}),{name:"size",options:s,fn(t){return Ue(this,null,function*(){const{placement:n,rects:l,platform:o,elements:i}=t,M=s,{apply:r}=M,a=zn(M,["apply"]),c=yield Wo(t,a),u=Qt(n),f=Jt(n);let d,p;u==="top"||u==="bottom"?(d=u,p=f===((yield o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(p=u,d=f==="end"?"top":"bottom");const m=vt(c.left,0),_=vt(c.right,0),$=vt(c.top,0),E=vt(c.bottom,0),x={availableHeight:l.floating.height-(["left","right"].includes(n)?2*($!==0||E!==0?$+E:vt(c.top,c.bottom)):c[d]),availableWidth:l.floating.width-(["top","bottom"].includes(n)?2*(m!==0||_!==0?m+_:vt(c.left,c.right)):c[p])},R=yield o.getDimensions(i.floating);r==null||r(ze(ze({},t),x));const N=yield o.getDimensions(i.floating);return R.width!==N.width||R.height!==N.height?{reset:{rects:!0}}:{}})}}};function Ko(s){return s&&s.document&&s.location&&s.alert&&s.setInterval}function dt(s){if(s==null)return window;if(!Ko(s)){const e=s.ownerDocument;return e&&e.defaultView||window}return s}function en(s){return dt(s).getComputedStyle(s)}function ut(s){return Ko(s)?"":s?(s.nodeName||"").toLowerCase():""}function Xo(){const s=navigator.userAgentData;return s!=null&&s.brands?s.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function rt(s){return s instanceof dt(s).HTMLElement}function _t(s){return s instanceof dt(s).Element}function Dp(s){return s instanceof dt(s).Node}function ms(s){if(typeof ShadowRoot=="undefined")return!1;const e=dt(s).ShadowRoot;return s instanceof e||s instanceof ShadowRoot}function Ln(s){const{overflow:e,overflowX:t,overflowY:n}=en(s);return/auto|scroll|overlay|hidden/.test(e+n+t)}function Fp(s){return["table","td","th"].includes(ut(s))}function Yo(s){const e=/firefox/i.test(Xo()),t=en(s);return t.transform!=="none"||t.perspective!=="none"||t.contain==="paint"||["transform","perspective"].includes(t.willChange)||e&&t.willChange==="filter"||e&&(t.filter?t.filter!=="none":!1)}function Vo(){return!/^((?!chrome|android).)*safari/i.test(Xo())}const Dl=Math.min,Ut=Math.max,Sn=Math.round;function ft(s,e,t){var n,l,o,i;e===void 0&&(e=!1),t===void 0&&(t=!1);const r=s.getBoundingClientRect();let a=1,c=1;e&&rt(s)&&(a=s.offsetWidth>0&&Sn(r.width)/s.offsetWidth||1,c=s.offsetHeight>0&&Sn(r.height)/s.offsetHeight||1);const u=_t(s)?dt(s):window,f=!Vo()&&t,d=(r.left+(f&&(n=(l=u.visualViewport)==null?void 0:l.offsetLeft)!=null?n:0))/a,p=(r.top+(f&&(o=(i=u.visualViewport)==null?void 0:i.offsetTop)!=null?o:0))/c,m=r.width/a,_=r.height/c;return{width:m,height:_,top:p,right:d+m,bottom:p+_,left:d,x:d,y:p}}function $t(s){return((Dp(s)?s.ownerDocument:s.document)||window.document).documentElement}function Dn(s){return _t(s)?{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}:{scrollLeft:s.pageXOffset,scrollTop:s.pageYOffset}}function Qo(s){return ft($t(s)).left+Dn(s).scrollLeft}function zp(s){const e=ft(s);return Sn(e.width)!==s.offsetWidth||Sn(e.height)!==s.offsetHeight}function Bp(s,e,t){const n=rt(e),l=$t(e),o=ft(s,n&&zp(e),t==="fixed");let i={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(n||!n&&t!=="fixed")if((ut(e)!=="body"||Ln(l))&&(i=Dn(e)),rt(e)){const a=ft(e,!0);r.x=a.x+e.clientLeft,r.y=a.y+e.clientTop}else l&&(r.x=Qo(l));return{x:o.left+i.scrollLeft-r.x,y:o.top+i.scrollTop-r.y,width:o.width,height:o.height}}function Jo(s){return ut(s)==="html"?s:s.assignedSlot||s.parentNode||(ms(s)?s.host:null)||$t(s)}function Fl(s){return!rt(s)||getComputedStyle(s).position==="fixed"?null:s.offsetParent}function Hp(s){let e=Jo(s);for(ms(e)&&(e=e.host);rt(e)&&!["html","body"].includes(ut(e));){if(Yo(e))return e;e=e.parentNode}return null}function Qn(s){const e=dt(s);let t=Fl(s);for(;t&&Fp(t)&&getComputedStyle(t).position==="static";)t=Fl(t);return t&&(ut(t)==="html"||ut(t)==="body"&&getComputedStyle(t).position==="static"&&!Yo(t))?e:t||Hp(s)||e}function zl(s){if(rt(s))return{width:s.offsetWidth,height:s.offsetHeight};const e=ft(s);return{width:e.width,height:e.height}}function jp(s){let{rect:e,offsetParent:t,strategy:n}=s;const l=rt(t),o=$t(t);if(t===o)return e;let i={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if((l||!l&&n!=="fixed")&&((ut(t)!=="body"||Ln(o))&&(i=Dn(t)),rt(t))){const a=ft(t,!0);r.x=a.x+t.clientLeft,r.y=a.y+t.clientTop}return Rt(ze({},e),{x:e.x-i.scrollLeft+r.x,y:e.y-i.scrollTop+r.y})}function Up(s,e){const t=dt(s),n=$t(s),l=t.visualViewport;let o=n.clientWidth,i=n.clientHeight,r=0,a=0;if(l){o=l.width,i=l.height;const c=Vo();(c||!c&&e==="fixed")&&(r=l.offsetLeft,a=l.offsetTop)}return{width:o,height:i,x:r,y:a}}function qp(s){var e;const t=$t(s),n=Dn(s),l=(e=s.ownerDocument)==null?void 0:e.body,o=Ut(t.scrollWidth,t.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),i=Ut(t.scrollHeight,t.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0);let r=-n.scrollLeft+Qo(s);const a=-n.scrollTop;return en(l||t).direction==="rtl"&&(r+=Ut(t.clientWidth,l?l.clientWidth:0)-o),{width:o,height:i,x:r,y:a}}function ei(s){const e=Jo(s);return["html","body","#document"].includes(ut(e))?s.ownerDocument.body:rt(e)&&Ln(e)?e:ei(e)}function Cn(s,e){var t;e===void 0&&(e=[]);const n=ei(s),l=n===((t=s.ownerDocument)==null?void 0:t.body),o=dt(n),i=l?[o].concat(o.visualViewport||[],Ln(n)?n:[]):n,r=e.concat(i);return l?r:r.concat(Cn(i))}function Wp(s,e){const t=e==null||e.getRootNode==null?void 0:e.getRootNode();if(s!=null&&s.contains(e))return!0;if(t&&ms(t)){let n=e;do{if(n&&s===n)return!0;n=n.parentNode||n.host}while(n)}return!1}function Gp(s,e){const t=ft(s,!1,e==="fixed"),n=t.top+s.clientTop,l=t.left+s.clientLeft;return{top:n,left:l,x:l,y:n,right:l+s.clientWidth,bottom:n+s.clientHeight,width:s.clientWidth,height:s.clientHeight}}function Bl(s,e,t){return e==="viewport"?xn(Up(s,t)):_t(e)?Gp(e,t):xn(qp($t(s)))}function Zp(s){const e=Cn(s),n=["absolute","fixed"].includes(en(s).position)&&rt(s)?Qn(s):s;return _t(n)?e.filter(l=>_t(l)&&Wp(l,n)&&ut(l)!=="body"):[]}function Kp(s){let{element:e,boundary:t,rootBoundary:n,strategy:l}=s;const i=[...t==="clippingAncestors"?Zp(e):[].concat(t),n],r=i[0],a=i.reduce((c,u)=>{const f=Bl(e,u,l);return c.top=Ut(f.top,c.top),c.right=Dl(f.right,c.right),c.bottom=Dl(f.bottom,c.bottom),c.left=Ut(f.left,c.left),c},Bl(e,r,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}const Xp={getClippingRect:Kp,convertOffsetParentRelativeRectToViewportRelativeRect:jp,isElement:_t,getDimensions:zl,getOffsetParent:Qn,getDocumentElement:$t,getElementRects:s=>{let{reference:e,floating:t,strategy:n}=s;return{reference:Bp(e,Qn(t),n),floating:Rt(ze({},zl(t)),{x:0,y:0})}},getClientRects:s=>Array.from(s.getClientRects()),isRTL:s=>en(s).direction==="rtl"};function Yp(s,e,t,n){n===void 0&&(n={});const{ancestorScroll:l=!0,ancestorResize:o=!0,elementResize:i=!0,animationFrame:r=!1}=n,a=l&&!r,c=o&&!r,u=a||c?[..._t(s)?Cn(s):[],...Cn(e)]:[];u.forEach(_=>{a&&_.addEventListener("scroll",t,{passive:!0}),c&&_.addEventListener("resize",t)});let f=null;i&&(f=new ResizeObserver(t),_t(s)&&!r&&f.observe(s),f.observe(e));let d,p=r?ft(s):null;r&&m();function m(){const _=ft(s);p&&(_.x!==p.x||_.y!==p.y||_.width!==p.width||_.height!==p.height)&&t(),p=_,d=requestAnimationFrame(m)}return i||t(),()=>{var _;u.forEach($=>{a&&$.removeEventListener("scroll",t),c&&$.removeEventListener("resize",t)}),(_=f)==null||_.disconnect(),f=null,r&&cancelAnimationFrame(d)}}const Vp=(s,e,t)=>Cp(s,e,ze({platform:Xp},t));function Fn(s){const e={enable:!1,options:void 0,cleanup:null},t={reference:null,floating:null,options:void 0};n(s);function n(c){c===!0?(e.enable=!0,l()):c===!1?(o(),e.enable=!1):(l(),e.enable=!0,e.options=c)}function l(){o(),t.reference&&t.floating&&e.enable&&(e.cleanup=Yp(t.reference,t.floating,i,e.options))}function o(){e.cleanup!=null&&(e.cleanup(),e.cleanup=null)}function i(){return Ue(this,null,function*(){if(t.reference&&t.floating){const{reference:c,floating:u,options:f}=t,d=yield Vp(c,u,f);Object.assign(u.style,{position:d.strategy,left:`${d.x}px`,top:`${d.y}px`}),f!=null&&f.callback&&f.callback(d,{reference:c,floating:u})}})}function r(c){return t.reference=c,e.enable?l():i(),{destroy(){o(),t.reference=null}}}function a(c,u){return t.floating=c,t.options=u,e.enable?l():i(),{update(f){o(),t.options=f,e.enable?l():i()},destroy(){o(),t.floating=null,t.options=void 0}}}return[r,a,n]}function Yt(s,e){let t,n;[t,n]=e!=null?e:[];function l(i){t&&s.contains(i.target)&&t(i)}function o(i){n&&!s.contains(i.relatedTarget)&&n(i)}return s.addEventListener("focusin",l),s.addEventListener("focusout",o),{update(i){[t,n]=i!=null?i:[]},destroy(){s.removeEventListener("focusout",o),s.removeEventListener("focusin",l)}}}function Hl(s){let e,t,n,l,o,i,r,a,c,u,f,d,p;function m(x){s[5](x)}let _={class:"h-48 p-3",style:"--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"};s[0]!==void 0&&(_.color=s[0]),t=new Ho({props:_}),De.push(()=>gt(t,"color",m));function $(x){s[6](x)}let E={class:"p-3 text-sm"};return s[0]!==void 0&&(E.color=s[0]),r=new jo({props:E}),De.push(()=>gt(r,"color",$)),{c(){e=b("div"),A(t.$$.fragment),l=T(),o=b("div"),i=T(),A(r.$$.fragment),g(o,"class","border-t"),g(e,"class","absolute w-[240px] border rounded-lg bg-white shadow-lg")},m(x,R){v(x,e,R),S(t,e,null),h(e,l),h(e,o),h(e,i),S(r,e,null),f=!0,d||(p=Ge(c=s[3].call(null,e,{placement:"bottom-start",middleware:[Pn(),In(8)]})),d=!0)},p(x,R){const N={};!n&&R&1&&(n=!0,N.color=x[0],yt(()=>n=!1)),t.$set(N);const M={};!a&&R&1&&(a=!0,M.color=x[0],yt(()=>a=!1)),r.$set(M)},i(x){f||(k(t.$$.fragment,x),k(r.$$.fragment,x),x&&Ze(()=>{u||(u=ht(e,Dt,{},!0)),u.run(1)}),f=!0)},o(x){y(t.$$.fragment,x),y(r.$$.fragment,x),x&&(u||(u=ht(e,Dt,{},!1)),u.run(0)),f=!1},d(x){x&&w(e),C(t),C(r),x&&u&&u.end(),d=!1,p()}}}function Qp(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M,O,P,D,F,j,U,W,le,we,ee=s[1]&&Hl(s);return P=new ds({props:{class:"mt-4"}}),P.$on("color",s[8]),U=new Ve({props:{code:`<script lang="ts">
<\/script>

<section class="prose max-w-none my-4">
</section>

<style lang="postcss">
</style>`}}),{c(){e=b("section"),t=b("div"),t.innerHTML=`This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a> and
    <a href="/focus-action"><code>@apsc/flocus-action</code></a>`,n=T(),l=b("div"),o=b("div"),i=b("div"),i.textContent="Click this button to pick a color",r=T(),a=b("div"),c=b("button"),u=b("span"),f=T(),ee&&ee.c(),p=T(),m=b("div"),_=b("div"),$=L("Current color: "),E=b("code"),x=L(s[0]),R=T(),N=b("div"),M=b("div"),O=T(),A(P.$$.fragment),D=T(),F=b("h3"),F.textContent="Code",j=T(),A(U.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(u,"class","block border h-[22px] w-[10ch] bg-chess"),Be(u,"background","linear-gradient(to right, "+s[0]+" 0, "+s[0]+" 100%), var(--bg-chess-background)"),g(c,"class","input py-1"),g(o,"class","basis-1/2"),g(E,"class","uppercase"),g(M,"class","h-[1.5em] bg-chess"),Be(M,"background","linear-gradient(to right, "+s[0]+" 0, "+s[0]+" 100%), var(--bg-chess-background)"),g(N,"class","p-2 border rounded-md"),g(m,"class","basis-1/2"),g(l,"class","flex gap-8"),g(e,"class","prose max-w-none my-4")},m(I,B){v(I,e,B),h(e,t),h(e,n),h(e,l),h(l,o),h(o,i),h(o,r),h(o,a),h(a,c),h(c,u),h(a,f),ee&&ee.m(a,null),h(l,p),h(l,m),h(m,_),h(_,$),h(_,E),h(E,x),h(m,R),h(m,N),h(N,M),h(m,O),S(P,m,null),h(e,D),h(e,F),h(e,j),S(U,e,null),W=!0,le||(we=[Ge(s[2].call(null,c)),Z(c,"click",s[4]),Ge(d=Yt.call(null,a,[void 0,s[7]]))],le=!0)},p(I,[B]){(!W||B&1)&&Be(u,"background","linear-gradient(to right, "+I[0]+" 0, "+I[0]+" 100%), var(--bg-chess-background)"),I[1]?ee?(ee.p(I,B),B&2&&k(ee,1)):(ee=Hl(I),ee.c(),k(ee,1),ee.m(a,null)):ee&&(re(),y(ee,1,1,()=>{ee=null}),ae()),d&&it(d.update)&&B&2&&d.update.call(null,[void 0,I[7]]),(!W||B&1)&&$e(x,I[0]),(!W||B&1)&&Be(M,"background","linear-gradient(to right, "+I[0]+" 0, "+I[0]+" 100%), var(--bg-chess-background)")},i(I){W||(k(ee),k(P.$$.fragment,I),k(U.$$.fragment,I),W=!0)},o(I){y(ee),y(P.$$.fragment,I),y(U.$$.fragment,I),W=!1},d(I){I&&w(e),ee&&ee.d(),C(P),C(U),le=!1,Me(we)}}}function Jp(s,e,t){const[n,l]=Fn(!0);let o="#f70",i=!1;const r=()=>t(1,i=!i);function a(d){o=d,t(0,o)}function c(d){o=d,t(0,o)}return[o,i,n,l,r,a,c,()=>t(1,i=!1),({detail:d})=>t(0,o=d)]}class em extends V{constructor(e){super(),Y(this,e,Jp,Qp,K,{})}}const{document:jl}=zt;function tm(s){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function nm(s){let e;return{c(){e=L("ColorPicker example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function sm(s){let e;return{c(){e=L("ColorEdit example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function lm(s){let e;return{c(){e=L("Color input Example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function om(s){let e,t,n,l,o,i,r,a;return e=new pe({props:{$$slots:{default:[tm]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[nm]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[sm]},$$scope:{ctx:s}}}),r=new pe({props:{$$slots:{default:[lm]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment)},m(c,u){S(e,c,u),v(c,t,u),S(n,c,u),v(c,l,u),S(o,c,u),v(c,i,u),S(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),o.$set(p);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(k(e.$$.fragment,c),k(n.$$.fragment,c),k(o.$$.fragment,c),k(r.$$.fragment,c),a=!0)},o(c){y(e.$$.fragment,c),y(n.$$.fragment,c),y(o.$$.fragment,c),y(r.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(l),C(o,c),c&&w(i),C(r,c)}}}function im(s){let e,t;return e=new Nd({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function rm(s){let e,t;return e=new Tp({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function am(s){let e,t;return e=new Sp({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function cm(s){let e,t;return e=new em({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function um(s){let e,t,n,l,o,i,r,a,c,u;return e=new st({props:{$$slots:{default:[om]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[im]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[rm]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[am]},$$scope:{ctx:s}}}),c=new de({props:{$$slots:{default:[cm]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment),a=T(),A(c.$$.fragment)},m(f,d){S(e,f,d),v(f,t,d),S(n,f,d),v(f,l,d),S(o,f,d),v(f,i,d),S(r,f,d),v(f,a,d),S(c,f,d),u=!0},p(f,d){const p={};d&1&&(p.$$scope={dirty:d,ctx:f}),e.$set(p);const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),n.$set(m);const _={};d&1&&(_.$$scope={dirty:d,ctx:f}),o.$set(_);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),r.$set($);const E={};d&1&&(E.$$scope={dirty:d,ctx:f}),c.$set(E)},i(f){u||(k(e.$$.fragment,f),k(n.$$.fragment,f),k(o.$$.fragment,f),k(r.$$.fragment,f),k(c.$$.fragment,f),u=!0)},o(f){y(e.$$.fragment,f),y(n.$$.fragment,f),y(o.$$.fragment,f),y(r.$$.fragment,f),y(c.$$.fragment,f),u=!1},d(f){C(e,f),f&&w(t),C(n,f),f&&w(l),C(o,f),f&&w(i),C(r,f),f&&w(a),C(c,f)}}}function fm(s){let e,t,n,l,o,i,r,a,c,u,f;return jl.title=e=document.title.replace(/(•).*$/,"$1 Color"),u=new nt({props:{$$slots:{default:[um]},$$scope:{ctx:s}}}),{c(){t=T(),n=b("section"),l=b("a"),l.textContent="Home",o=T(),i=b("h1"),i.textContent="A set of components for picking and editing colors",r=T(),a=b("ul"),a.innerHTML=`<li>no inline styles</li> 
    <li>the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts" target="_blank">utils.d.ts</a> for definitions of types and functions</li> 
    <li><a href="https://www.npmjs.com/package/@apsc/color">NPM</a></li>`,c=T(),A(u.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(d,p){v(d,t,p),v(d,n,p),h(n,l),h(n,o),h(n,i),h(n,r),h(n,a),h(n,c),S(u,n,null),f=!0},p(d,[p]){(!f||p&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Color"))&&(jl.title=e);const m={};p&1&&(m.$$scope={dirty:p,ctx:d}),u.$set(m)},i(d){f||(k(u.$$.fragment,d),f=!0)},o(d){y(u.$$.fragment,d),f=!1},d(d){d&&w(t),d&&w(n),C(u)}}}class dm extends V{constructor(e){super(),Y(this,e,null,fm,K,{})}}var Ul=`# Action to use [Floating UI](https://floating-ui.com/) [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/floating-ui-action)

## Install

### NPM

\`\`\`sh
npm i -D @apsc/floating-ui-action
\`\`\`

### PNPM

\`\`\`sh
pnpm add -D @apsc/floating-ui-action
\`\`\`

## API

\`\`\`ts
function createFloatingUiAction(
  options: UpdateOptions
): [Action, Action, (options: UpdateOptions) => void];

// Example
const [useReference, useFloat, setAutoupdate] = createAction(true);
\`\`\`

Creates actions for use in directive \`use\`. Returns an array of three functions \`useReference\`, \`useFloating\` and \`setAutoupdate\`.

Parameter \`options\` can take values

- \`true\` -- \`autoUpdate\` will be enabled with default options
- \`object\` -- \`autoUpdate\` will be enabled with the specified options
- \`false\` -- \`autoUpdate\` will be disabled

See [\`autoUpdate\`](https://floating-ui.com/docs/autoUpdate)

Use actions \`useReference\` and \`useFloat\` in directive \`use\` on target elements.

\`\`\`svelte
<button on:click={() => (show = !show)} use:useReference>Click me</button>
{#if show}
<div use:useFloat2={{
  placement: 'bottom',
  middleware: [offset(8), flip(), shift({ padding: 8 }), arrow({ element: arrow })],
  callback: positionFloat
}}
transition:scale|local>My tooltip</div>
{/if}
\`\`\`

Action \`useFloating\` takes options as a function [\`computePosition\`](https://floating-ui.com/docs/computePosition)
with optional \`callback\` for custom element control, e.g. an arrow.

\`setAutoupdate\` allows disable, enable or change the [\`autoUpdate\`](https://floating-ui.com/docs/autoUpdate) settings at any time.

## Usage

\`\`\`svelte
<script>
  import { scale } from 'svelte/transition';
    import {
    arrow,
    flip,
    offset,
    type ComputePositionReturn,
    type Middleware
  } from '@floating-ui/dom';
  import createFloating from '@apsc/floating-ui-action';

  let show = false;
  let _arrow: HTMLElement;

  function adjustArrow(pos: ComputePositionReturn) {
    const { placement, middlewareData } = pos;
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      if (staticSide) {
        Object.assign(_arrow.style, {
          left: x != null ? \`\${x}px\` : '',
          top: y != null ? \`\${y}px\` : '',
          right: '',
          bottom: '',
          [staticSide]: '-6px'
        });
      }
    }
  }
<\/script>

<button on:click={() => (show = !show)} use:useReference>Click me</button>
{#if show}
  <div
    use:useFloating={{
      placement: 'top',
      middleware: [offset(8), flip(), arrow({ element: _arrow })],
      callback: adjustArrow
    }}
    transition:slide|local
  >
    <div bind:this={_arrow} />
    Lorem ipsum dolor sit amet consectetur adipisicing elit
  </div>
{/if}
\`\`\`
`;function pm(s){let e,t,n;return t=new Vt({props:{source:Ul.slice(Ul.search(/^[#\s]+API$/im)+1)}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(l,o){v(l,e,o),S(t,e,null),n=!0},p:Q,i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){l&&w(e),C(t)}}}class mm extends V{constructor(e){super(),Y(this,e,null,pm,K,{})}}function ql(s,e,t){const n=s.slice();return n[20]=e[t],n}function Wl(s,e,t){const n=s.slice();return n[23]=e[t],n}function Gl(s){let e,t=s[23]+"",n,l;return{c(){e=b("option"),n=L(t),e.__value=l=s[23],e.value=e.__value},m(o,i){v(o,e,i),h(e,n)},p:Q,d(o){o&&w(e)}}}function Zl(s){let e,t=s[20]+"",n,l;return{c(){e=b("option"),n=L(t),e.__value=l=s[12][s[20]],e.value=e.__value},m(o,i){v(o,e,i),h(e,n)},p:Q,d(o){o&&w(e)}}}function Kl(s){let e,t,n,l,o,i,r,a;return{c(){e=b("div"),t=b("div"),n=L(`
        Lorem ipsum dolor sit amet consectetur adipisicing elit`),g(t,"class","arrow svelte-1b5318a"),g(e,"class","tooltip not-prose svelte-1b5318a")},m(c,u){v(c,e,u),h(e,t),s[19](t),h(e,n),i=!0,r||(a=Ge(l=s[9].call(null,e,{placement:s[5],middleware:s[6],callback:s[10]})),r=!0)},p(c,u){l&&it(l.update)&&u&96&&l.update.call(null,{placement:c[5],middleware:c[6],callback:c[10]})},i(c){i||(c&&Ze(()=>{o||(o=ht(e,s[7],{},!0)),o.run(1)}),i=!0)},o(c){c&&(o||(o=ht(e,s[7],{},!1)),o.run(0)),i=!1},d(c){c&&w(e),s[19](null),c&&o&&o.end(),r=!1,a()}}}function hm(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M,O,P,D,F,j,U,W,le,we,ee=s[4]?"hide":"show",I,B,X,oe,ue,ce,Oe,Fe,Ee,he=s[11],te=[];for(let J=0;J<he.length;J+=1)te[J]=Gl(Wl(s,he,J));let Se=Object.keys(s[12]),_e=[];for(let J=0;J<Se.length;J+=1)_e[J]=Zl(ql(s,Se,J));let fe=s[4]&&Kl(s);return ce=new Ve({props:{code:`<script lang="ts"
  import { slide, scale, fade, blur } from 'svelte/transition';
  import {
    arrow,
    flip,
    offset,
    size,
    type ComputePositionReturn,
    type Middleware
  } from '@floating-ui/dom';
  import createFloating from '@apsc/floating-ui-action';

  const [useReference, useFloating] = createFloating(true);

  let _arrow: HTMLElement;
  let show = false;

  function adjustArrow(pos: ComputePositionReturn) {
    const { placement, middlewareData } = pos;
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      if (staticSide) {
        Object.assign(_arrow.style, {
          left: x != null ? \`\${x}px\` : '',
          top: y != null ? \`\${y}px\` : '',
          right: '',
          bottom: '',
          [staticSide]: '-6px'
        });
      }
    }
  }

  let _offset = 16;
  let _flip = true;
  let _sizePadding = 16;
  let middleware: Middleware[] = [];

  $: middleware = [
    offset(_offset),
    _flip && flip(),
    size({
      padding: _sizePadding,
      apply({ availableWidth, availableHeight, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: \`\${availableWidth}px\`,
          maxHeight: \`\${availableHeight}px\`
        });
      }
    }),
    _arrow && arrow({ element: _arrow })
  ].filter((m) => !!m);
<\/script>

<section class="prose max-w-none my-4">
  <div class="h-64 flex items-center justify-center border">
    <button
      use:useReference
      class="input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"
      on:click={() => (show = !show)}>Click me to {show ? 'hide' : 'show'}</button
    >
    {#if show}
      <div
        use:useFloating={{
          placement: '${s[5]}',
          middleware,
          callback: adjustArrow
        }}
        ${s[7]!=null?`transition:${s[7].name}|local`:""}
        class="tooltip not-prose"
      >
        <div class="arrow" bind:this={_arrow} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </div>
    {/if}
  </div>
</section>

<style lang="postcss">
  .tooltip {
    @apply absolute box-border bg-gray-800 text-white font-semibold py-2 px-4 rounded-md text-sm;
  }

  .tooltip .arrow {
    @apply absolute bg-gray-800 h-3 w-3 rotate-45;
  }
</style>`}}),{c(){e=b("section"),t=b("div"),n=b("label"),l=b("span"),l.textContent="placement",o=T(),i=b("select");for(let J=0;J<te.length;J+=1)te[J].c();r=T(),a=b("label"),c=b("input"),u=T(),f=b("span"),f.textContent="flip",d=T(),p=b("label"),m=b("span"),m.textContent="offset",_=T(),$=b("input"),E=T(),x=b("label"),R=b("span"),R.textContent="size padding",N=T(),M=b("input"),O=T(),P=b("label"),D=b("span"),D.textContent="transition",F=T(),j=b("select");for(let J=0;J<_e.length;J+=1)_e[J].c();U=T(),W=b("div"),le=b("button"),we=L("Click me to "),I=L(ee),B=T(),fe&&fe.c(),X=T(),oe=b("h3"),oe.textContent="Code",ue=T(),A(ce.$$.fragment),g(i,"class","input"),s[5]===void 0&&Ze(()=>s[13].call(i)),g(c,"type","checkbox"),g(a,"class","whitespace-nowrap"),g($,"type","number"),g($,"class","input w-[8ch]"),g(M,"type","number"),g(M,"class","input w-[8ch]"),g(j,"class","input"),s[7]===void 0&&Ze(()=>s[17].call(j)),g(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),g(le,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),g(W,"class","h-64 flex items-center justify-center border"),g(e,"class","prose max-w-none my-4")},m(J,Pe){v(J,e,Pe),h(e,t),h(t,n),h(n,l),h(n,o),h(n,i);for(let Re=0;Re<te.length;Re+=1)te[Re].m(i,null);ot(i,s[5]),h(t,r),h(t,a),h(a,c),c.checked=s[2],h(a,u),h(a,f),h(t,d),h(t,p),h(p,m),h(p,_),h(p,$),qe($,s[1]),h(t,E),h(t,x),h(x,R),h(x,N),h(x,M),qe(M,s[3]),h(t,O),h(t,P),h(P,D),h(P,F),h(P,j);for(let Re=0;Re<_e.length;Re+=1)_e[Re].m(j,null);ot(j,s[7]),h(e,U),h(e,W),h(W,le),h(le,we),h(le,I),h(W,B),fe&&fe.m(W,null),h(e,X),h(e,oe),h(e,ue),S(ce,e,null),Oe=!0,Fe||(Ee=[Z(i,"change",s[13]),Z(c,"change",s[14]),Z($,"input",s[15]),Z(M,"input",s[16]),Z(j,"change",s[17]),Ge(s[8].call(null,le)),Z(le,"click",s[18])],Fe=!0)},p(J,[Pe]){if(Pe&2048){he=J[11];let ve;for(ve=0;ve<he.length;ve+=1){const Ne=Wl(J,he,ve);te[ve]?te[ve].p(Ne,Pe):(te[ve]=Gl(Ne),te[ve].c(),te[ve].m(i,null))}for(;ve<te.length;ve+=1)te[ve].d(1);te.length=he.length}if(Pe&2080&&ot(i,J[5]),Pe&4&&(c.checked=J[2]),Pe&2&&Ye($.value)!==J[1]&&qe($,J[1]),Pe&8&&Ye(M.value)!==J[3]&&qe(M,J[3]),Pe&4096){Se=Object.keys(J[12]);let ve;for(ve=0;ve<Se.length;ve+=1){const Ne=ql(J,Se,ve);_e[ve]?_e[ve].p(Ne,Pe):(_e[ve]=Zl(Ne),_e[ve].c(),_e[ve].m(j,null))}for(;ve<_e.length;ve+=1)_e[ve].d(1);_e.length=Se.length}Pe&4224&&ot(j,J[7]),(!Oe||Pe&16)&&ee!==(ee=J[4]?"hide":"show")&&$e(I,ee),J[4]?fe?(fe.p(J,Pe),Pe&16&&k(fe,1)):(fe=Kl(J),fe.c(),k(fe,1),fe.m(W,null)):fe&&(re(),y(fe,1,1,()=>{fe=null}),ae());const Re={};Pe&160&&(Re.code=`<script lang="ts"
  import { slide, scale, fade, blur } from 'svelte/transition';
  import {
    arrow,
    flip,
    offset,
    size,
    type ComputePositionReturn,
    type Middleware
  } from '@floating-ui/dom';
  import createFloating from '@apsc/floating-ui-action';

  const [useReference, useFloating] = createFloating(true);

  let _arrow: HTMLElement;
  let show = false;

  function adjustArrow(pos: ComputePositionReturn) {
    const { placement, middlewareData } = pos;
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      if (staticSide) {
        Object.assign(_arrow.style, {
          left: x != null ? \`\${x}px\` : '',
          top: y != null ? \`\${y}px\` : '',
          right: '',
          bottom: '',
          [staticSide]: '-6px'
        });
      }
    }
  }

  let _offset = 16;
  let _flip = true;
  let _sizePadding = 16;
  let middleware: Middleware[] = [];

  $: middleware = [
    offset(_offset),
    _flip && flip(),
    size({
      padding: _sizePadding,
      apply({ availableWidth, availableHeight, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: \`\${availableWidth}px\`,
          maxHeight: \`\${availableHeight}px\`
        });
      }
    }),
    _arrow && arrow({ element: _arrow })
  ].filter((m) => !!m);
<\/script>

<section class="prose max-w-none my-4">
  <div class="h-64 flex items-center justify-center border">
    <button
      use:useReference
      class="input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"
      on:click={() => (show = !show)}>Click me to {show ? 'hide' : 'show'}</button
    >
    {#if show}
      <div
        use:useFloating={{
          placement: '${J[5]}',
          middleware,
          callback: adjustArrow
        }}
        ${J[7]!=null?`transition:${J[7].name}|local`:""}
        class="tooltip not-prose"
      >
        <div class="arrow" bind:this={_arrow} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </div>
    {/if}
  </div>
</section>

<style lang="postcss">
  .tooltip {
    @apply absolute box-border bg-gray-800 text-white font-semibold py-2 px-4 rounded-md text-sm;
  }

  .tooltip .arrow {
    @apply absolute bg-gray-800 h-3 w-3 rotate-45;
  }
</style>`),ce.$set(Re)},i(J){Oe||(k(fe),k(ce.$$.fragment,J),Oe=!0)},o(J){y(fe),y(ce.$$.fragment,J),Oe=!1},d(J){J&&w(e),He(te,J),He(_e,J),fe&&fe.d(),C(ce),Fe=!1,Me(Ee)}}}function gm(s,e,t){const[n,l]=Fn(!0);let o,i=!1;function r(P){const{placement:D,middlewareData:F}=P;if(F.arrow){const{x:j,y:U}=F.arrow,W={top:"bottom",right:"left",bottom:"top",left:"right"}[D.split("-")[0]];W&&Object.assign(o.style,{left:j!=null?`${j}px`:"",top:U!=null?`${U}px`:"",right:"",bottom:"",[W]:"-6px"})}}const a=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let c=a[0],u=16,f=!0,d=16,p=[],m;const _={slide:Dt,scale:dd,fade:fd,blur:ud,none:()=>({delay:0,duration:0})};function $(){c=qt(this),t(5,c),t(11,a)}function E(){f=this.checked,t(2,f)}function x(){u=Ye(this.value),t(1,u)}function R(){d=Ye(this.value),t(3,d)}function N(){m=qt(this),t(7,m),t(12,_)}const M=()=>t(4,i=!i);function O(P){De[P?"unshift":"push"](()=>{o=P,t(0,o)})}return s.$$.update=()=>{s.$$.dirty&15&&t(6,p=[In(u),f&&Pn(),Zo({padding:d,apply({availableWidth:P,availableHeight:D,elements:F}){Object.assign(F.floating.style,{maxWidth:`${P}px`,maxHeight:`${D}px`})}}),o&&Go({element:o})].filter(P=>!!P))},[o,u,f,d,i,c,p,m,n,l,r,a,_,$,E,x,R,N,M,O]}class _m extends V{constructor(e){super(),Y(this,e,gm,hm,K,{})}}function Xl(s,e,t){const n=s.slice();return n[18]=e[t],n}function Yl(s){let e,t=s[18]+"",n,l;return{c(){e=b("option"),n=L(t),e.__value=l=s[18],e.value=e.__value},m(o,i){v(o,e,i),h(e,n)},p:Q,d(o){o&&w(e)}}}function bm(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M,O,P,D,F,j=s[1]?"hide":"show",U,W,le,we,ee,I,B,X,oe,ue,ce,Oe,Fe,Ee=s[10],he=[];for(let te=0;te<Ee.length;te+=1)he[te]=Yl(Xl(s,Ee,te));return ue=new Ve({props:{code:`<script lang="ts"
  import { slide, scale, fade, blur } from 'svelte/transition';
  import {
    arrow,
    flip,
    offset,
    size,
    type ComputePositionReturn,
    type Middleware
  } from '@floating-ui/dom';
  import createFloating from '@apsc/floating-ui-action';

  const [useReference, useFloating, setAutoupdate] = createFloating(true);

  let _arrow: HTMLElement;
  let show = false;
  $: setAutoupdate(show);

  function adjustArrow(pos: ComputePositionReturn) {
    const { placement, middlewareData } = pos;
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      if (staticSide) {
        Object.assign(_arrow.style, {
          left: x != null ? \`\${x}px\` : '',
          top: y != null ? \`\${y}px\` : '',
          right: '',
          bottom: '',
          [staticSide]: '-6px'
        });
      }
    }
  }

  let _offset = 16;
  let _flip = true;
  let _sizePadding = 16;
  let middleware: Middleware[] = [];

  $: middleware = [
    offset(_offset),
    _flip && flip(),
    size({
      padding: _sizePadding,
      apply({ availableWidth, availableHeight, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: \`\${availableWidth}px\`,
          maxHeight: \`\${availableHeight}px\`
        });
      }
    }),
    _arrow && arrow({ element: _arrow })
  ].filter((m) => !!m);
<\/script>

<section class="prose max-w-none my-4">
  <div class="h-64 flex items-center justify-center border">
    <button
      use:useReference
      class="input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"
      on:click={() => (show = !show)}>Click me to {show ? 'hide' : 'show'}</button
    >
    <div
      use:useFloating={{
        placement: '${s[5]}',
        middleware,
        callback: adjustArrow
      }}
      class="tooltip not-prose"
      class:in={show}
      class:out={!show}
    >
      <div class="arrow" bind:this={_arrow} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </div>
  </div>
</section>

<style lang="postcss">
  .tooltip {
    @apply absolute bg-gray-800 text-white font-semibold py-2 px-4 rounded-md text-sm;
    transition: opacity 0.5s linear;
  }

  .tooltip.in {
    @apply opacity-100;
  }

  .tooltip.out {
    @apply opacity-0;
  }

  .tooltip .arrow {
    @apply absolute bg-gray-800 h-3 w-3 rotate-45;
  }
</style>`}}),{c(){e=b("section"),t=b("div"),n=b("label"),l=b("span"),l.textContent="placement",o=T(),i=b("select");for(let te=0;te<he.length;te+=1)he[te].c();r=T(),a=b("label"),c=b("input"),u=T(),f=b("span"),f.textContent="flip",d=T(),p=b("label"),m=b("span"),m.textContent="offset",_=T(),$=b("input"),E=T(),x=b("label"),R=b("span"),R.textContent="size padding",N=T(),M=b("input"),O=T(),P=b("div"),D=b("button"),F=L("Click me to "),U=L(j),W=T(),le=b("div"),we=b("div"),ee=L(`
      Lorem ipsum dolor sit amet consectetur adipisicing elit`),B=T(),X=b("h3"),X.textContent="Code",oe=T(),A(ue.$$.fragment),g(i,"class","input"),s[5]===void 0&&Ze(()=>s[11].call(i)),g(c,"type","checkbox"),g(a,"class","whitespace-nowrap"),g($,"type","number"),g($,"class","input w-[8ch]"),g(M,"type","number"),g(M,"class","input w-[8ch]"),g(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),g(D,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),g(we,"class","arrow svelte-1lvd4kc"),g(le,"class","tooltip not-prose svelte-1lvd4kc"),We(le,"in",s[1]),We(le,"out",!s[1]),g(P,"class","h-64 flex items-center justify-center border"),g(e,"class","prose max-w-none my-4")},m(te,Se){v(te,e,Se),h(e,t),h(t,n),h(n,l),h(n,o),h(n,i);for(let _e=0;_e<he.length;_e+=1)he[_e].m(i,null);ot(i,s[5]),h(t,r),h(t,a),h(a,c),c.checked=s[3],h(a,u),h(a,f),h(t,d),h(t,p),h(p,m),h(p,_),h(p,$),qe($,s[2]),h(t,E),h(t,x),h(x,R),h(x,N),h(x,M),qe(M,s[4]),h(e,O),h(e,P),h(P,D),h(D,F),h(D,U),h(P,W),h(P,le),h(le,we),s[16](we),h(le,ee),h(e,B),h(e,X),h(e,oe),S(ue,e,null),ce=!0,Oe||(Fe=[Z(i,"change",s[11]),Z(c,"change",s[12]),Z($,"input",s[13]),Z(M,"input",s[14]),Ge(s[7].call(null,D)),Z(D,"click",s[15]),Ge(I=s[8].call(null,le,{placement:s[5],middleware:s[6],callback:s[9]}))],Oe=!0)},p(te,[Se]){if(Se&1024){Ee=te[10];let fe;for(fe=0;fe<Ee.length;fe+=1){const J=Xl(te,Ee,fe);he[fe]?he[fe].p(J,Se):(he[fe]=Yl(J),he[fe].c(),he[fe].m(i,null))}for(;fe<he.length;fe+=1)he[fe].d(1);he.length=Ee.length}Se&1056&&ot(i,te[5]),Se&8&&(c.checked=te[3]),Se&4&&Ye($.value)!==te[2]&&qe($,te[2]),Se&16&&Ye(M.value)!==te[4]&&qe(M,te[4]),(!ce||Se&2)&&j!==(j=te[1]?"hide":"show")&&$e(U,j),I&&it(I.update)&&Se&96&&I.update.call(null,{placement:te[5],middleware:te[6],callback:te[9]}),Se&2&&We(le,"in",te[1]),Se&2&&We(le,"out",!te[1]);const _e={};Se&32&&(_e.code=`<script lang="ts"
  import { slide, scale, fade, blur } from 'svelte/transition';
  import {
    arrow,
    flip,
    offset,
    size,
    type ComputePositionReturn,
    type Middleware
  } from '@floating-ui/dom';
  import createFloating from '@apsc/floating-ui-action';

  const [useReference, useFloating, setAutoupdate] = createFloating(true);

  let _arrow: HTMLElement;
  let show = false;
  $: setAutoupdate(show);

  function adjustArrow(pos: ComputePositionReturn) {
    const { placement, middlewareData } = pos;
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      if (staticSide) {
        Object.assign(_arrow.style, {
          left: x != null ? \`\${x}px\` : '',
          top: y != null ? \`\${y}px\` : '',
          right: '',
          bottom: '',
          [staticSide]: '-6px'
        });
      }
    }
  }

  let _offset = 16;
  let _flip = true;
  let _sizePadding = 16;
  let middleware: Middleware[] = [];

  $: middleware = [
    offset(_offset),
    _flip && flip(),
    size({
      padding: _sizePadding,
      apply({ availableWidth, availableHeight, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: \`\${availableWidth}px\`,
          maxHeight: \`\${availableHeight}px\`
        });
      }
    }),
    _arrow && arrow({ element: _arrow })
  ].filter((m) => !!m);
<\/script>

<section class="prose max-w-none my-4">
  <div class="h-64 flex items-center justify-center border">
    <button
      use:useReference
      class="input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"
      on:click={() => (show = !show)}>Click me to {show ? 'hide' : 'show'}</button
    >
    <div
      use:useFloating={{
        placement: '${te[5]}',
        middleware,
        callback: adjustArrow
      }}
      class="tooltip not-prose"
      class:in={show}
      class:out={!show}
    >
      <div class="arrow" bind:this={_arrow} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </div>
  </div>
</section>

<style lang="postcss">
  .tooltip {
    @apply absolute bg-gray-800 text-white font-semibold py-2 px-4 rounded-md text-sm;
    transition: opacity 0.5s linear;
  }

  .tooltip.in {
    @apply opacity-100;
  }

  .tooltip.out {
    @apply opacity-0;
  }

  .tooltip .arrow {
    @apply absolute bg-gray-800 h-3 w-3 rotate-45;
  }
</style>`),ue.$set(_e)},i(te){ce||(k(ue.$$.fragment,te),ce=!0)},o(te){y(ue.$$.fragment,te),ce=!1},d(te){te&&w(e),He(he,te),s[16](null),C(ue),Oe=!1,Me(Fe)}}}function $m(s,e,t){const[n,l,o]=Fn(!0);let i,r=!1;function a(M){const{placement:O,middlewareData:P}=M;if(P.arrow){const{x:D,y:F}=P.arrow,j={top:"bottom",right:"left",bottom:"top",left:"right"}[O.split("-")[0]];j&&Object.assign(i.style,{left:D!=null?`${D}px`:"",top:F!=null?`${F}px`:"",right:"",bottom:"",[j]:"-6px"})}}const c=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let u=c[0],f=16,d=!0,p=16,m=[];function _(){u=qt(this),t(5,u),t(10,c)}function $(){d=this.checked,t(3,d)}function E(){f=Ye(this.value),t(2,f)}function x(){p=Ye(this.value),t(4,p)}const R=()=>t(1,r=!r);function N(M){De[M?"unshift":"push"](()=>{i=M,t(0,i)})}return s.$$.update=()=>{s.$$.dirty&2&&o(r),s.$$.dirty&29&&t(6,m=[In(f),d&&Pn(),Zo({padding:p,apply({availableWidth:M,availableHeight:O,elements:P}){Object.assign(P.floating.style,{maxWidth:`${M}px`,maxHeight:`${O}px`})}}),i&&Go({element:i})].filter(M=>!!M))},[i,r,f,d,p,u,m,n,l,a,c,_,$,E,x,R,N]}class wm extends V{constructor(e){super(),Y(this,e,$m,bm,K,{})}}const{document:Vl}=zt;function vm(s){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function km(s){let e;return{c(){e=L("Transition JS demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function ym(s){let e;return{c(){e=L("Transition CSS demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Tm(s){let e,t,n,l,o,i;return e=new pe({props:{$$slots:{default:[vm]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[km]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[ym]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment)},m(r,a){S(e,r,a),v(r,t,a),S(n,r,a),v(r,l,a),S(o,r,a),i=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(k(e.$$.fragment,r),k(n.$$.fragment,r),k(o.$$.fragment,r),i=!0)},o(r){y(e.$$.fragment,r),y(n.$$.fragment,r),y(o.$$.fragment,r),i=!1},d(r){C(e,r),r&&w(t),C(n,r),r&&w(l),C(o,r)}}}function xm(s){let e,t;return e=new mm({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Em(s){let e,t;return e=new _m({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Sm(s){let e,t;return e=new wm({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Cm(s){let e,t,n,l,o,i,r,a;return e=new st({props:{$$slots:{default:[Tm]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[xm]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[Em]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[Sm]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment)},m(c,u){S(e,c,u),v(c,t,u),S(n,c,u),v(c,l,u),S(o,c,u),v(c,i,u),S(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),o.$set(p);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(k(e.$$.fragment,c),k(n.$$.fragment,c),k(o.$$.fragment,c),k(r.$$.fragment,c),a=!0)},o(c){y(e.$$.fragment,c),y(n.$$.fragment,c),y(o.$$.fragment,c),y(r.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(l),C(o,c),c&&w(i),C(r,c)}}}function Am(s){let e,t,n,l,o,i,r,a,c,u,f;return Vl.title=e=document.title.replace(/(•).*$/,"$1 Floating UI action"),u=new nt({props:{$$slots:{default:[Cm]},$$scope:{ctx:s}}}),{c(){t=T(),n=b("section"),l=b("a"),l.textContent="Home",o=T(),i=b("h1"),i.textContent="Action to use Floating UI",r=T(),a=b("ul"),a.innerHTML=`<li>dependence <a href="https://github.com/floating-ui/floating-ui" target="_blank">@floating-ui/dom</a></li> 
    <li><a href="https://www.npmjs.com/package/@apsc/floating-ui-action">NPM</a></li>`,c=T(),A(u.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(d,p){v(d,t,p),v(d,n,p),h(n,l),h(n,o),h(n,i),h(n,r),h(n,a),h(n,c),S(u,n,null),f=!0},p(d,[p]){(!f||p&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Floating UI action"))&&(Vl.title=e);const m={};p&1&&(m.$$scope={dirty:p,ctx:d}),u.$set(m)},i(d){f||(k(u.$$.fragment,d),f=!0)},o(d){y(u.$$.fragment,d),f=!1},d(d){d&&w(t),d&&w(n),C(u)}}}class Rm extends V{constructor(e){super(),Y(this,e,null,Am,K,{})}}var Ql=`# Action to control \`focusin\` and \`focusout\` for directive \`use\` [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/focus-action)

- no dependencies
- correctly detects loss of focus with \`Tab\`

## Install

### NPM

\`\`\`sh
npm i -D @apsc/focus-action
\`\`\`

### PNPM

\`\`\`sh
pnpm add -D @apsc/focus-action
\`\`\`

## API

\`\`\`ts
let focused = false;
const focusFns = [() => (focused = true), () => (focused = false)];

<div class:focused use:useFocus={focusFns}>
  ...
</div>;
\`\`\`

Based on [\`focusin\`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event) and [\`focusout\`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event) events.

Executes callbacks when the node or its children gain or lose focus.

Ensure the \`node\` or its children [can be focused](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)
`;function Nm(s){let e,t,n;return t=new Vt({props:{source:Ql.slice(Ql.search(/^[#\s]+API$/im)+1)}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(l,o){v(l,e,o),S(t,e,null),n=!0},p:Q,i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){l&&w(e),C(t)}}}class Mm extends V{constructor(e){super(),Y(this,e,null,Nm,K,{})}}function Om(s){let e;return{c(){e=L("\xA0")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Pm(s){let e;return{c(){e=L("Try to close the dropdown block by clicking outside")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Im(s){let e;return{c(){e=L("Select")},m(t,n){v(t,e,n)},p:Q,d(t){t&&w(e)}}}function Lm(s){let e,t,n;return{c(){e=L("Selected "),t=b("small"),n=L(s[3]),g(t,"class","font-semibold text-gray-400")},m(l,o){v(l,e,o),v(l,t,o),h(t,n)},p(l,o){o&8&&$e(n,l[3])},d(l){l&&w(e),l&&w(t)}}}function Jl(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M;return{c(){e=b("div"),t=b("div"),t.textContent="Choose one of the items",n=T(),l=b("div"),o=b("label"),i=b("input"),r=T(),a=b("span"),a.textContent="Firts",c=T(),u=b("label"),f=b("input"),d=T(),p=b("span"),p.textContent="Second",m=T(),_=b("label"),$=b("input"),E=T(),x=b("span"),x.textContent="Third",g(t,"class","alert svelte-1hjb9pe"),We(t,"error",s[2]),g(i,"type","radio"),i.__value="Firts",i.value=i.__value,g(i,"name","item"),s[8][0].push(i),g(f,"type","radio"),f.__value="Second",f.value=f.__value,g(f,"name","item"),s[8][0].push(f),g($,"type","radio"),$.__value="Third",$.value=$.__value,g($,"name","item"),s[8][0].push($),g(l,"class","mt-2 flex gap-4 px-2"),g(e,"class","absolute border shadow-md rounded-md p-2 top-2 bg-white"),g(e,"tabindex","-1")},m(O,P){v(O,e,P),h(e,t),h(e,n),h(e,l),h(l,o),h(o,i),i.checked=i.__value===s[3],h(o,r),h(o,a),h(l,c),h(l,u),h(u,f),f.checked=f.__value===s[3],h(u,d),h(u,p),h(l,m),h(l,_),h(_,$),$.checked=$.__value===s[3],h(_,E),h(_,x),s[11](e),N||(M=[Z(i,"change",s[7]),Z(f,"change",s[9]),Z($,"change",s[10]),Ge(R=Yt.call(null,e,[void 0,s[4]]))],N=!0)},p(O,P){P&4&&We(t,"error",O[2]),P&8&&(i.checked=i.__value===O[3]),P&8&&(f.checked=f.__value===O[3]),P&8&&($.checked=$.__value===O[3])},d(O){O&&w(e),s[8][0].splice(s[8][0].indexOf(i),1),s[8][0].splice(s[8][0].indexOf(f),1),s[8][0].splice(s[8][0].indexOf($),1),s[11](null),N=!1,Me(M)}}}function Dm(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E;function x(F,j){return F[1]&&!F[3]?Pm:Om}let R=x(s),N=R(s);function M(F,j){return F[3]?Lm:Im}let O=M(s),P=O(s),D=s[1]&&Jl(s);return m=new Ve({props:{code:`<script lang="ts"
  import useFocus from '@apsc/focus-action';

  let show = false;
  let error = false;
  let inputs: HTMLElement | undefined = undefined;
  let selected = '';

  function handleFocusout() {
    if (selected) {
      show = false;
      error = false;
    } else {
      error = true;
    }
  }

  $: if (inputs) {
    inputs.focus();
  }
<\/script>

<section class="prose max-w-none my-4">
    <div class="w-fit mx-auto mb-4">
    {#if show && !selected}Try to close the dropdown block by clicking outside{:else}&nbsp;{/if}
  </div>
  <div class="w-fit mx-auto">
    <button class="input w-[200px]" on:click={() => (show = true)}>
      {#if selected}
        Selected <small class="font-semibold text-gray-400">{selected}</small>
      {:else}
        Select
      {/if}
    </button>
    <button class="input" disabled={show} on:click={() => (selected = '')}>Reset</button>
    <div class="relative">
      {#if show}
        <div
          class="absolute border shadow-md rounded-md p-2 top-2 bg-white"
          tabindex="-1"
          use:useFocus={[undefined, handleFocusout]}
          bind:this={inputs}
        >
          <div class="alert" class:error>Choose one of the items</div>
          <div class="mt-2 flex gap-4 px-2">
            <label>
              <input type="radio" value="Firts" bind:group={selected} name="item" />
              <span>Firts</span>
            </label>
            <label>
              <input type="radio" value="Second" bind:group={selected} name="item" />
              <span>Second</span>
            </label>
            <label>
              <input type="radio" value="Third" bind:group={selected} name="item" />
              <span>Third</span>
            </label>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<style lang="postcss">
  .alert {
    @apply bg-yellow-100 text-center p-1 rounded-md text-orange-700;
  }
  .alert.error {
    @apply bg-red-500 text-white font-semibold;
  }
</style>
`}}),{c(){e=b("section"),t=b("div"),N.c(),n=T(),l=b("div"),o=b("button"),P.c(),i=T(),r=b("button"),a=L("Reset"),c=T(),u=b("div"),D&&D.c(),f=T(),d=b("h3"),d.textContent="Code",p=T(),A(m.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(o,"class","input w-[200px]"),g(r,"class","input"),r.disabled=s[1],g(u,"class","relative"),g(l,"class","w-fit mx-auto"),g(e,"class","prose max-w-none my-4")},m(F,j){v(F,e,j),h(e,t),N.m(t,null),h(e,n),h(e,l),h(l,o),P.m(o,null),h(l,i),h(l,r),h(r,a),h(l,c),h(l,u),D&&D.m(u,null),h(e,f),h(e,d),h(e,p),S(m,e,null),_=!0,$||(E=[Z(o,"click",s[5]),Z(r,"click",s[6])],$=!0)},p(F,[j]){R!==(R=x(F))&&(N.d(1),N=R(F),N&&(N.c(),N.m(t,null))),O===(O=M(F))&&P?P.p(F,j):(P.d(1),P=O(F),P&&(P.c(),P.m(o,null))),(!_||j&2)&&(r.disabled=F[1]),F[1]?D?D.p(F,j):(D=Jl(F),D.c(),D.m(u,null)):D&&(D.d(1),D=null)},i(F){_||(k(m.$$.fragment,F),_=!0)},o(F){y(m.$$.fragment,F),_=!1},d(F){F&&w(e),N.d(),P.d(),D&&D.d(),C(m),$=!1,Me(E)}}}function Fm(s,e,t){let n=!1,l=!1,o,i="";function r(){i?(t(1,n=!1),t(2,l=!1)):t(2,l=!0)}const a=[[]],c=()=>t(1,n=!0),u=()=>t(3,i="");function f(){i=this.__value,t(3,i)}function d(){i=this.__value,t(3,i)}function p(){i=this.__value,t(3,i)}function m(_){De[_?"unshift":"push"](()=>{o=_,t(0,o)})}return s.$$.update=()=>{s.$$.dirty&1&&o&&o.focus()},[o,n,l,i,r,c,u,f,a,d,p,m]}class zm extends V{constructor(e){super(),Y(this,e,Fm,Dm,K,{})}}function eo(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E,x,R,N,M,O;return{c(){e=b("ul"),t=b("li"),n=b("button"),n.textContent="Open",l=T(),o=b("li"),i=b("button"),i.textContent="Close",r=T(),a=b("li"),c=b("button"),c.textContent="Upload",u=T(),f=b("li"),d=b("button"),d.textContent="Download",p=T(),m=b("li"),_=T(),$=b("li"),E=b("button"),E.textContent="About",g(n,"class","svelte-nxgrg9"),g(t,"class","svelte-nxgrg9"),g(i,"class","svelte-nxgrg9"),g(o,"class","svelte-nxgrg9"),g(c,"class","svelte-nxgrg9"),g(a,"class","svelte-nxgrg9"),g(d,"class","svelte-nxgrg9"),g(f,"class","svelte-nxgrg9"),g(m,"class","separator svelte-nxgrg9"),g(E,"class","svelte-nxgrg9"),g($,"class","svelte-nxgrg9"),g(e,"class","dropdown svelte-nxgrg9"),g(e,"tabindex","-1")},m(P,D){v(P,e,D),h(e,t),h(t,n),h(e,l),h(e,o),h(o,i),h(e,r),h(e,a),h(a,c),h(e,u),h(e,f),h(f,d),h(e,p),h(e,m),h(e,_),h(e,$),h($,E),N=!0,M||(O=[Z(n,"click",s[4]),Z(i,"click",s[5]),Z(c,"click",s[6]),Z(d,"click",s[7]),Z(E,"click",s[8]),Ge(x=s[2].call(null,e,{placement:"bottom-start",middleware:[Pn(),In(8)]}))],M=!0)},p:Q,i(P){N||(P&&Ze(()=>{R||(R=ht(e,Dt,{},!0)),R.run(1)}),N=!0)},o(P){P&&(R||(R=ht(e,Dt,{},!1)),R.run(0)),N=!1},d(P){P&&w(e),P&&R&&R.end(),M=!1,Me(O)}}}function Bm(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_=s[0]&&eo(s);return f=new Ve({props:{code:`<script lang="ts"
  import { offset, flip } from '@floating-ui/dom';
  import { slide } from 'svelte/transition';
  import createFloatingUiAction from '@apsc/floating-ui-action';
  import useFocus from '@apsc/focus-action';

  const [useRef, useFloat, setAutoupdate] = createFloatingUiAction(true);

  let show = false;
  $: setAutoupdate(show);
<\/script>

<section class="prose max-w-none my-4">
  <div class="w-fit mx-auto mb-4">
    This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a>
  </div>
  <div class="w-fit mx-auto" use:useFocus={[undefined, () => (show = false)]}>
    <button class="input" use:useRef on:click={() => (show = true)}>Action</button>
    {#if show}
      <ul
        class="dropdown"
        tabindex="-1"
        transition:slide|local
        use:useFloat={{
          placement: 'bottom-start',
          middleware: [flip(), offset(8)]
        }}
      >
        <li><button on:click={() => (show = false)}>Open</button></li>
        <li><button on:click={() => (show = false)}>Close</button></li>
        <li><button on:click={() => (show = false)}>Upload</button></li>
        <li><button on:click={() => (show = false)}>Download</button></li>
        <li class="separator" />
        <li><button on:click={() => (show = false)}>About</button></li>
      </ul>
    {/if}
  </div>
</section>

<style lang="postcss">
  .dropdown {
    @apply absolute border shadow-md rounded-md py-2 px-0 bg-white;
  }
  .dropdown li {
    @apply list-none p-0 m-0;
  }
  .dropdown li button {
    @apply w-full text-left px-4;
  }
  .dropdown li button:hover {
    @apply bg-blue-400 text-white;
  }
  .dropdown li.separator {
    @apply border-t my-2;
  }
</style>`}}),{c(){e=b("section"),t=b("div"),t.innerHTML='This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a>',n=T(),l=b("div"),o=b("button"),o.textContent="Action",i=T(),_&&_.c(),a=T(),c=b("h3"),c.textContent="Code",u=T(),A(f.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(o,"class","input"),g(l,"class","w-fit mx-auto"),g(e,"class","prose max-w-none my-4")},m($,E){v($,e,E),h(e,t),h(e,n),h(e,l),h(l,o),h(l,i),_&&_.m(l,null),h(e,a),h(e,c),h(e,u),S(f,e,null),d=!0,p||(m=[Ge(s[1].call(null,o)),Z(o,"click",s[3]),Ge(r=Yt.call(null,l,[void 0,s[9]]))],p=!0)},p($,[E]){$[0]?_?(_.p($,E),E&1&&k(_,1)):(_=eo($),_.c(),k(_,1),_.m(l,null)):_&&(re(),y(_,1,1,()=>{_=null}),ae()),r&&it(r.update)&&E&1&&r.update.call(null,[void 0,$[9]])},i($){d||(k(_),k(f.$$.fragment,$),d=!0)},o($){y(_),y(f.$$.fragment,$),d=!1},d($){$&&w(e),_&&_.d(),C(f),p=!1,Me(m)}}}function Hm(s,e,t){const[n,l,o]=Fn(!0);let i=!1;const r=()=>t(0,i=!0),a=()=>t(0,i=!1),c=()=>t(0,i=!1),u=()=>t(0,i=!1),f=()=>t(0,i=!1),d=()=>t(0,i=!1),p=()=>t(0,i=!1);return s.$$.update=()=>{s.$$.dirty&1&&o(i)},[i,n,l,r,a,c,u,f,d,p]}class jm extends V{constructor(e){super(),Y(this,e,Hm,Bm,K,{})}}function Um(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m,_,$,E;return m=new Ve({props:{code:`<script lang="ts"
  import useFocus from '@apsc/focus-action';

  let isActive1 = false;
  let isActive2 = false;
<\/script>

<section class="prose max-w-none my-4">
  <div class="form">
    <div class="basis-1/2">
      <fieldset
        use:useFocus={[() => (isActive1 = true), () => (isActive1 = false)]}
        class:active={isActive1}
      >
        <legend>Your details</legend>
        <label>
          <span>Name</span>
          <input type="text" class="input" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" class="input" />
        </label>
        <label>
          <span>Phone</span>
          <input type="text" class="input" />
        </label>
      </fieldset>
      <div class="mt-8">
        <button
          type="button"
          class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8"
          >Submit</button
        >
      </div>
    </div>
    <fieldset
      class="basis-1/2"
      use:useFocus={[() => (isActive2 = true), () => (isActive2 = false)]}
      class:active={isActive2}
    >
      <legend>Delivery address</legend>
      <label>
        <span>Address</span>
        <textarea rows="3" class="input" />
      </label>
      <label>
        <span>Postcode</span>
        <input type="text" class="input" />
      </label>
      <label>
        <span>Country</span>
        <input type="text" class="input" />
      </label>
    </fieldset>
  </div>
</section>

<style lang="postcss">
  .form {
    @apply flex items-start gap-5;
  }
  .form fieldset {
    @apply p-2 border ring-blue-200 rounded-md;
  }
  .form fieldset.active {
    @apply ring-blue-200 ring-2;
  }
  .form fieldset.active legend {
    @apply text-blue-600;
  }
  .form fieldset legend {
    @apply bg-white px-2;
  }
  .form label {
    @apply block;
  }
  .form label .input {
    @apply w-full;
  }
</style>`}}),{c(){e=b("section"),t=b("div"),n=b("div"),l=b("fieldset"),l.innerHTML=`<legend class="svelte-c2p0zs">Your details</legend> 
        <label class="svelte-c2p0zs"><span>Name</span> 
          <input type="text" class="input svelte-c2p0zs"/></label> 
        <label class="svelte-c2p0zs"><span>Email</span> 
          <input type="text" class="input svelte-c2p0zs"/></label> 
        <label class="svelte-c2p0zs"><span>Phone</span> 
          <input type="text" class="input svelte-c2p0zs"/></label>`,i=T(),r=b("div"),r.innerHTML='<button type="button" class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8 svelte-c2p0zs">Submit</button>',a=T(),c=b("fieldset"),c.innerHTML=`<legend class="svelte-c2p0zs">Delivery address</legend> 
      <label class="svelte-c2p0zs"><span>Address</span> 
        <textarea rows="3" class="input svelte-c2p0zs"></textarea></label> 
      <label class="svelte-c2p0zs"><span>Postcode</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Country</span> 
        <input type="text" class="input svelte-c2p0zs"/></label>`,f=T(),d=b("h3"),d.textContent="Code",p=T(),A(m.$$.fragment),g(l,"class","svelte-c2p0zs"),We(l,"active",s[0]),g(r,"class","mt-8"),g(n,"class","basis-1/2"),g(c,"class","basis-1/2 svelte-c2p0zs"),We(c,"active",s[1]),g(t,"class","form svelte-c2p0zs"),g(e,"class","prose max-w-none my-4")},m(x,R){v(x,e,R),h(e,t),h(t,n),h(n,l),h(n,i),h(n,r),h(t,a),h(t,c),h(e,f),h(e,d),h(e,p),S(m,e,null),_=!0,$||(E=[Ge(o=Yt.call(null,l,[s[2],s[3]])),Ge(u=Yt.call(null,c,[s[4],s[5]]))],$=!0)},p(x,[R]){o&&it(o.update)&&R&1&&o.update.call(null,[x[2],x[3]]),R&1&&We(l,"active",x[0]),u&&it(u.update)&&R&2&&u.update.call(null,[x[4],x[5]]),R&2&&We(c,"active",x[1])},i(x){_||(k(m.$$.fragment,x),_=!0)},o(x){y(m.$$.fragment,x),_=!1},d(x){x&&w(e),C(m),$=!1,Me(E)}}}function qm(s,e,t){let n=!1,l=!1;return[n,l,()=>t(0,n=!0),()=>t(0,n=!1),()=>t(1,l=!0),()=>t(1,l=!1)]}class Wm extends V{constructor(e){super(),Y(this,e,qm,Um,K,{})}}const{document:to}=zt;function Gm(s){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Zm(s){let e;return{c(){e=L("Reqired demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Km(s){let e;return{c(){e=L("Dropdown demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Xm(s){let e;return{c(){e=L("Style demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Ym(s){let e,t,n,l,o,i,r,a;return e=new pe({props:{$$slots:{default:[Gm]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[Zm]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[Km]},$$scope:{ctx:s}}}),r=new pe({props:{$$slots:{default:[Xm]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment)},m(c,u){S(e,c,u),v(c,t,u),S(n,c,u),v(c,l,u),S(o,c,u),v(c,i,u),S(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),o.$set(p);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(k(e.$$.fragment,c),k(n.$$.fragment,c),k(o.$$.fragment,c),k(r.$$.fragment,c),a=!0)},o(c){y(e.$$.fragment,c),y(n.$$.fragment,c),y(o.$$.fragment,c),y(r.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(l),C(o,c),c&&w(i),C(r,c)}}}function Vm(s){let e,t;return e=new Mm({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Qm(s){let e,t;return e=new zm({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Jm(s){let e,t;return e=new jm({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function eh(s){let e,t;return e=new Wm({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function th(s){let e,t,n,l,o,i,r,a,c,u;return e=new st({props:{$$slots:{default:[Ym]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[Vm]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[Qm]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[Jm]},$$scope:{ctx:s}}}),c=new de({props:{$$slots:{default:[eh]},$$scope:{ctx:s}}}),{c(){A(e.$$.fragment),t=T(),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment),a=T(),A(c.$$.fragment)},m(f,d){S(e,f,d),v(f,t,d),S(n,f,d),v(f,l,d),S(o,f,d),v(f,i,d),S(r,f,d),v(f,a,d),S(c,f,d),u=!0},p(f,d){const p={};d&1&&(p.$$scope={dirty:d,ctx:f}),e.$set(p);const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),n.$set(m);const _={};d&1&&(_.$$scope={dirty:d,ctx:f}),o.$set(_);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),r.$set($);const E={};d&1&&(E.$$scope={dirty:d,ctx:f}),c.$set(E)},i(f){u||(k(e.$$.fragment,f),k(n.$$.fragment,f),k(o.$$.fragment,f),k(r.$$.fragment,f),k(c.$$.fragment,f),u=!0)},o(f){y(e.$$.fragment,f),y(n.$$.fragment,f),y(o.$$.fragment,f),y(r.$$.fragment,f),y(c.$$.fragment,f),u=!1},d(f){C(e,f),f&&w(t),C(n,f),f&&w(l),C(o,f),f&&w(i),C(r,f),f&&w(a),C(c,f)}}}function nh(s){let e,t,n,l,o,i,r,a,c,u,f;return to.title=e=document.title.replace(/(•).*$/,"$1 Focus action"),u=new nt({props:{$$slots:{default:[th]},$$scope:{ctx:s}}}),{c(){t=T(),n=b("section"),l=b("a"),l.textContent="Home",o=T(),i=b("h1"),i.innerHTML=`Action to control <code>focusin</code> and <code>focusout</code><br/>for directive
    <code>use</code>`,r=T(),a=b("ul"),a.innerHTML=`<li>no dependencies</li> 
    <li>correctly detects loss of focus with <code>Tab</code></li>`,c=T(),A(u.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(d,p){v(d,t,p),v(d,n,p),h(n,l),h(n,o),h(n,i),h(n,r),h(n,a),h(n,c),S(u,n,null),f=!0},p(d,[p]){(!f||p&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Focus action"))&&(to.title=e);const m={};p&1&&(m.$$scope={dirty:p,ctx:d}),u.$set(m)},i(d){f||(k(u.$$.fragment,d),f=!0)},o(d){y(u.$$.fragment,d),f=!1},d(d){d&&w(t),d&&w(n),C(u)}}}class sh extends V{constructor(e){super(),Y(this,e,null,nh,K,{})}}function lh(s){let e,t;return e=new Zi({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function oh(s){let e,t;return e=new sd({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ih(s){let e,t;return e=new Cd({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function rh(s){let e,t;return e=new dm({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ah(s){let e,t;return e=new Rm({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ch(s){let e,t;return e=new sh({}),{c(){A(e.$$.fragment)},m(n,l){S(e,n,l),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function uh(s){let e,t,n,l,o,i,r,a,c,u,f,d,p,m;return n=new Mt({props:{path:"/",$$slots:{default:[lh]},$$scope:{ctx:s}}}),o=new Mt({props:{path:"/tabs",$$slots:{default:[oh]},$$scope:{ctx:s}}}),r=new Mt({props:{path:"/glob-notify",$$slots:{default:[ih]},$$scope:{ctx:s}}}),c=new Mt({props:{path:"/color",$$slots:{default:[rh]},$$scope:{ctx:s}}}),f=new Mt({props:{path:"/floating-ui-action",$$slots:{default:[ah]},$$scope:{ctx:s}}}),p=new Mt({props:{path:"/focus-action",$$slots:{default:[ch]},$$scope:{ctx:s}}}),{c(){e=T(),t=b("main"),A(n.$$.fragment),l=T(),A(o.$$.fragment),i=T(),A(r.$$.fragment),a=T(),A(c.$$.fragment),u=T(),A(f.$$.fragment),d=T(),A(p.$$.fragment),document.title="APSC \u2022 Home"},m(_,$){v(_,e,$),v(_,t,$),S(n,t,null),h(t,l),S(o,t,null),h(t,i),S(r,t,null),h(t,a),S(c,t,null),h(t,u),S(f,t,null),h(t,d),S(p,t,null),m=!0},p(_,[$]){const E={};$&1&&(E.$$scope={dirty:$,ctx:_}),n.$set(E);const x={};$&1&&(x.$$scope={dirty:$,ctx:_}),o.$set(x);const R={};$&1&&(R.$$scope={dirty:$,ctx:_}),r.$set(R);const N={};$&1&&(N.$$scope={dirty:$,ctx:_}),c.$set(N);const M={};$&1&&(M.$$scope={dirty:$,ctx:_}),f.$set(M);const O={};$&1&&(O.$$scope={dirty:$,ctx:_}),p.$set(O)},i(_){m||(k(n.$$.fragment,_),k(o.$$.fragment,_),k(r.$$.fragment,_),k(c.$$.fragment,_),k(f.$$.fragment,_),k(p.$$.fragment,_),m=!0)},o(_){y(n.$$.fragment,_),y(o.$$.fragment,_),y(r.$$.fragment,_),y(c.$$.fragment,_),y(f.$$.fragment,_),y(p.$$.fragment,_),m=!1},d(_){_&&w(e),_&&w(t),C(n),C(o),C(r),C(c),C(f),C(p)}}}function fh(s){return $n.mode.hash(),[]}class dh extends V{constructor(e){super(),Y(this,e,fh,uh,K,{})}}new dh({target:document.getElementById("app")})});export default ph();
