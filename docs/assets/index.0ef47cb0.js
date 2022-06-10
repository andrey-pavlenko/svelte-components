var Vl=Object.defineProperty,Xl=Object.defineProperties;var Ql=Object.getOwnPropertyDescriptors;var vn=Object.getOwnPropertySymbols;var Wo=Object.prototype.hasOwnProperty,Go=Object.prototype.propertyIsEnumerable;var Ko=(o,e,t)=>e in o?Vl(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,He=(o,e)=>{for(var t in e||(e={}))Wo.call(e,t)&&Ko(o,t,e[t]);if(vn)for(var t of vn(e))Go.call(e,t)&&Ko(o,t,e[t]);return o},zt=(o,e)=>Xl(o,Ql(e));var eo=(o,e)=>{var t={};for(var n in o)Wo.call(o,n)&&e.indexOf(n)<0&&(t[n]=o[n]);if(o!=null&&vn)for(var n of vn(o))e.indexOf(n)<0&&Go.call(o,n)&&(t[n]=o[n]);return t};var Jl=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var Ye=(o,e,t)=>new Promise((n,s)=>{var r=a=>{try{i(t.next(a))}catch(c){s(c)}},l=a=>{try{i(t.throw(a))}catch(c){s(c)}},i=a=>a.done?n(a.value):Promise.resolve(a.value).then(r,l);i((t=t.apply(o,e)).next())});var Kh=Jl(Yl=>{const ei=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};ei();function ee(){}const Kr=o=>o;function it(o,e){for(const t in e)o[t]=e[t];return o}function ti(o){return o&&typeof o=="object"&&typeof o.then=="function"}function Wr(o){return o()}function Zo(){return Object.create(null)}function ze(o){o.forEach(Wr)}function Ve(o){return typeof o=="function"}function K(o,e){return o!=o?e==e:o!==e||o&&typeof o=="object"||typeof o=="function"}let $n;function Ge(o,e){return $n||($n=document.createElement("a")),$n.href=e,o===$n.href}function ni(o){return Object.keys(o).length===0}function Gr(o,...e){if(o==null)return ee;const t=o.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Vt(o,e,t){o.$$.on_destroy.push(Gr(e,t))}function Ae(o,e,t,n){if(o){const s=Zr(o,e,t,n);return o[0](s)}}function Zr(o,e,t,n){return o[1]&&n?it(t.ctx.slice(),o[1](n(e))):t.ctx}function Re(o,e,t,n){if(o[2]&&n){const s=o[2](n(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],l=Math.max(e.dirty.length,s.length);for(let i=0;i<l;i+=1)r[i]=e.dirty[i]|s[i];return r}return e.dirty|s}return e.dirty}function Ne(o,e,t,n,s,r){if(s){const l=Zr(e,t,n,r);o.p(l,s)}}function Me(o){if(o.ctx.length>32){const e=[],t=o.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Yr(o){const e={};for(const t in o)t[0]!=="$"&&(e[t]=o[t]);return e}function Nn(o,e){const t={};e=new Set(e);for(const n in o)!e.has(n)&&n[0]!=="$"&&(t[n]=o[n]);return t}function Gt(o){return o==null?"":o}function Ue(o){return o&&Ve(o.destroy)?o.destroy:ee}const Vr=typeof window!="undefined";let oi=Vr?()=>window.performance.now():()=>Date.now(),mo=Vr?o=>requestAnimationFrame(o):ee;const Xt=new Set;function Xr(o){Xt.forEach(e=>{e.c(o)||(Xt.delete(e),e.f())}),Xt.size!==0&&mo(Xr)}function si(o){let e;return Xt.size===0&&mo(Xr),{promise:new Promise(t=>{Xt.add(e={c:o,f:t})}),abort(){Xt.delete(e)}}}function d(o,e){o.appendChild(e)}function Qr(o){if(!o)return document;const e=o.getRootNode?o.getRootNode():o.ownerDocument;return e&&e.host?e:o.ownerDocument}function ri(o){const e=b("style");return li(Qr(o),e),e.sheet}function li(o,e){d(o.head||o,e)}function k(o,e,t){o.insertBefore(e,t||null)}function v(o){o.parentNode.removeChild(o)}function Fe(o,e){for(let t=0;t<o.length;t+=1)o[t]&&o[t].d(e)}function b(o){return document.createElement(o)}function ii(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function j(o){return document.createTextNode(o)}function y(){return j(" ")}function $e(){return j("")}function G(o,e,t,n){return o.addEventListener(e,t,n),()=>o.removeEventListener(e,t,n)}function Yo(o){return function(e){return e.preventDefault(),o.call(this,e)}}function ai(o){return function(e){e.target===this&&o.call(this,e)}}function h(o,e,t){t==null?o.removeAttribute(e):o.getAttribute(e)!==t&&o.setAttribute(e,t)}function Vo(o,e){const t=Object.getOwnPropertyDescriptors(o.__proto__);for(const n in e)e[n]==null?o.removeAttribute(n):n==="style"?o.style.cssText=e[n]:n==="__value"?o.value=o[n]=e[n]:t[n]&&t[n].set?o[n]=e[n]:h(o,n,e[n])}function at(o){return o===""?null:+o}function ci(o){return Array.from(o.childNodes)}function ke(o,e){e=""+e,o.wholeText!==e&&(o.data=e)}function tt(o,e){o.value=e==null?"":e}function Ke(o,e,t,n){t===null?o.style.removeProperty(e):o.style.setProperty(e,t,n?"important":"")}function ht(o,e){for(let t=0;t<o.options.length;t+=1){const n=o.options[t];if(n.__value===e){n.selected=!0;return}}o.selectedIndex=-1}function cn(o){const e=o.querySelector(":checked")||o.options[0];return e&&e.__value}function Be(o,e,t){o.classList[t?"add":"remove"](e)}function Jr(o,e,{bubbles:t=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(o,t,n,e),s}class el{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=ii(t.nodeName):this.e=b(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)k(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}const Mn=new Map;let Pn=0;function ui(o){let e=5381,t=o.length;for(;t--;)e=(e<<5)-e^o.charCodeAt(t);return e>>>0}function fi(o,e){const t={stylesheet:ri(e),rules:{}};return Mn.set(o,t),t}function Xo(o,e,t,n,s,r,l,i=0){const a=16.666/n;let c=`{
`;for(let w=0;w<=1;w+=a){const T=e+(t-e)*r(w);c+=w*100+`%{${l(T,1-T)}}
`}const u=c+`100% {${l(t,1-t)}}
}`,f=`__svelte_${ui(u)}_${i}`,p=Qr(o),{stylesheet:m,rules:g}=Mn.get(p)||fi(p,o);g[f]||(g[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const _=o.style.animation||"";return o.style.animation=`${_?`${_}, `:""}${f} ${n}ms linear ${s}ms 1 both`,Pn+=1,f}function pi(o,e){const t=(o.style.animation||"").split(", "),n=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-n.length;s&&(o.style.animation=n.join(", "),Pn-=s,Pn||di())}function di(){mo(()=>{Pn||(Mn.forEach(o=>{const{stylesheet:e}=o;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);o.rules={}}),Mn.clear())})}let un;function wt(o){un=o}function Nt(){if(!un)throw new Error("Function called outside component initialization");return un}function Dt(o){Nt().$$.on_mount.push(o)}function gi(o){Nt().$$.after_update.push(o)}function ao(o){Nt().$$.on_destroy.push(o)}function ho(){const o=Nt();return(e,t,{cancelable:n=!1}={})=>{const s=o.$$.callbacks[e];if(s){const r=Jr(e,t,{cancelable:n});return s.slice().forEach(l=>{l.call(o,r)}),!r.defaultPrevented}return!0}}function bo(o,e){return Nt().$$.context.set(o,e),e}function en(o){return Nt().$$.context.get(o)}function mi(o){return Nt().$$.context.has(o)}const ln=[],je=[],En=[],co=[],tl=Promise.resolve();let uo=!1;function nl(){uo||(uo=!0,tl.then(_o))}function ol(){return nl(),tl}function st(o){En.push(o)}function Lt(o){co.push(o)}const to=new Set;let kn=0;function _o(){const o=un;do{for(;kn<ln.length;){const e=ln[kn];kn++,wt(e),hi(e.$$)}for(wt(null),ln.length=0,kn=0;je.length;)je.pop()();for(let e=0;e<En.length;e+=1){const t=En[e];to.has(t)||(to.add(t),t())}En.length=0}while(ln.length);for(;co.length;)co.pop()();uo=!1,to.clear(),wt(o)}function hi(o){if(o.fragment!==null){o.update(),ze(o.before_update);const e=o.dirty;o.dirty=[-1],o.fragment&&o.fragment.p(o.ctx,e),o.after_update.forEach(st)}}let rn;function bi(){return rn||(rn=Promise.resolve(),rn.then(()=>{rn=null})),rn}function no(o,e,t){o.dispatchEvent(Jr(`${e?"intro":"outro"}${t}`))}const Cn=new Set;let vt;function ge(){vt={r:0,c:[],p:vt}}function me(){vt.r||ze(vt.c),vt=vt.p}function $(o,e){o&&o.i&&(Cn.delete(o),o.i(e))}function x(o,e,t,n){if(o&&o.o){if(Cn.has(o))return;Cn.add(o),vt.c.push(()=>{Cn.delete(o),n&&(t&&o.d(1),n())}),o.o(e)}}const _i={duration:0};function Ct(o,e,t,n){let s=e(o,t),r=n?0:1,l=null,i=null,a=null;function c(){a&&pi(o,a)}function u(p,m){const g=p.b-r;return m*=Math.abs(g),{a:r,b:p.b,d:g,duration:m,start:p.start,end:p.start+m,group:p.group}}function f(p){const{delay:m=0,duration:g=300,easing:_=Kr,tick:w=ee,css:T}=s||_i,S={start:oi()+m,b:p};p||(S.group=vt,vt.r+=1),l||i?i=S:(T&&(c(),a=Xo(o,r,p,g,m,_,T)),p&&w(0,1),l=u(S,g),st(()=>no(o,p,"start")),si(N=>{if(i&&N>i.start&&(l=u(i,g),i=null,no(o,l.b,"start"),T&&(c(),a=Xo(o,r,l.b,l.duration,0,_,s.css))),l){if(N>=l.end)w(r=l.b,1-r),no(o,l.b,"end"),i||(l.b?c():--l.group.r||ze(l.group.c)),l=null;else if(N>=l.start){const E=N-l.start;r=l.a+l.d*_(E/l.duration),w(r,1-r)}}return!!(l||i)}))}return{run(p){Ve(s)?bi().then(()=>{s=s(),f(p)}):f(p)},end(){c(),l=i=null}}}function zn(o,e){const t=e.token={};function n(s,r,l,i){if(e.token!==t)return;e.resolved=i;let a=e.ctx;l!==void 0&&(a=a.slice(),a[l]=i);const c=s&&(e.current=s)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,p)=>{p!==r&&f&&(ge(),x(f,1,1,()=>{e.blocks[p]===f&&(e.blocks[p]=null)}),me())}):e.block.d(1),c.c(),$(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[r]=c),u&&_o()}if(ti(o)){const s=Nt();if(o.then(r=>{wt(s),n(e.then,1,e.value,r),wt(null)},r=>{if(wt(s),n(e.catch,2,e.error,r),wt(null),!e.hasCatch)throw r}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,o),!0;e.resolved=o}}function sl(o,e,t){const n=e.slice(),{resolved:s}=o;o.current===o.then&&(n[o.value]=s),o.current===o.catch&&(n[o.error]=s),o.block.p(n,t)}const Mt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function wi(o,e){x(o,1,1,()=>{e.delete(o.key)})}function vi(o,e,t,n,s,r,l,i,a,c,u,f){let p=o.length,m=r.length,g=p;const _={};for(;g--;)_[o[g].key]=g;const w=[],T=new Map,S=new Map;for(g=m;g--;){const P=f(s,r,g),z=t(P);let O=l.get(z);O?n&&O.p(P,e):(O=c(z,P),O.c()),T.set(z,w[g]=O),z in _&&S.set(z,Math.abs(g-_[z]))}const N=new Set,E=new Set;function M(P){$(P,1),P.m(i,u),l.set(P.key,P),u=P.first,m--}for(;p&&m;){const P=w[m-1],z=o[p-1],O=P.key,I=z.key;P===z?(u=P.first,p--,m--):T.has(I)?!l.has(O)||N.has(O)?M(P):E.has(I)?p--:S.get(O)>S.get(I)?(E.add(O),M(P)):(N.add(I),p--):(a(z,l),p--)}for(;p--;){const P=o[p];T.has(P.key)||a(P,l)}for(;m;)M(w[m-1]);return w}function jt(o,e){const t={},n={},s={$$scope:1};let r=o.length;for(;r--;){const l=o[r],i=e[r];if(i){for(const a in l)a in i||(n[a]=1);for(const a in i)s[a]||(t[a]=i[a],s[a]=1);o[r]=i}else for(const a in l)s[a]=1}for(const l in n)l in t||(t[l]=void 0);return t}function tn(o){return typeof o=="object"&&o!==null?o:{}}function At(o,e,t){const n=o.$$.props[e];n!==void 0&&(o.$$.bound[n]=t,t(o.$$.ctx[n]))}function R(o){o&&o.c()}function C(o,e,t,n){const{fragment:s,on_mount:r,on_destroy:l,after_update:i}=o.$$;s&&s.m(e,t),n||st(()=>{const a=r.map(Wr).filter(Ve);l?l.push(...a):ze(a),o.$$.on_mount=[]}),i.forEach(st)}function A(o,e){const t=o.$$;t.fragment!==null&&(ze(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function $i(o,e){o.$$.dirty[0]===-1&&(ln.push(o),nl(),o.$$.dirty.fill(0)),o.$$.dirty[e/31|0]|=1<<e%31}function Z(o,e,t,n,s,r,l,i=[-1]){const a=un;wt(o);const c=o.$$={fragment:null,ctx:null,props:r,update:ee,not_equal:s,bound:Zo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Zo(),dirty:i,skip_bound:!1,root:e.target||a.$$.root};l&&l(c.root);let u=!1;if(c.ctx=t?t(o,e.props||{},(f,p,...m)=>{const g=m.length?m[0]:p;return c.ctx&&s(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&$i(o,f)),p}):[],c.update(),u=!0,ze(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=ci(e.target);c.fragment&&c.fragment.l(f),f.forEach(v)}else c.fragment&&c.fragment.c();e.intro&&$(o.$$.fragment),C(o,e.target,e.anchor,e.customElement),_o()}wt(a)}class Y{$destroy(){A(this,1),this.$destroy=ee}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!ni(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Zt=[];function ki(o,e){return{subscribe:Qt(o,e).subscribe}}function Qt(o,e=ee){let t;const n=new Set;function s(i){if(K(o,i)&&(o=i,t)){const a=!Zt.length;for(const c of n)c[1](),Zt.push(c,o);if(a){for(let c=0;c<Zt.length;c+=2)Zt[c][0](Zt[c+1]);Zt.length=0}}}function r(i){s(i(o))}function l(i,a=ee){const c=[i,a];return n.add(c),n.size===1&&(t=e(s)||ee),i(o),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:l}}function yi(o,e,t){const n=!Array.isArray(o),s=n?[o]:o,r=e.length<2;return ki(t,l=>{let i=!1;const a=[];let c=0,u=ee;const f=()=>{if(c)return;u();const m=e(n?a[0]:a,l);r?l(m):u=Ve(m)?m:ee},p=s.map((m,g)=>Gr(m,_=>{a[g]=_,c&=~(1<<g),i&&f()},()=>{c|=1<<g}));return i=!0,f(),function(){ze(p),u()}})}function fo(o,e=!1){return o=o.slice(o.startsWith("/#")?2:0,o.endsWith("/*")?-2:void 0),o.startsWith("/")||(o="/"+o),o==="/"&&(o=""),e&&!o.endsWith("/")&&(o+="/"),o}function xi(o,e){o=fo(o,!0),e=fo(e,!0);let t=[],n={},s=!0,r=o.split("/").map(i=>i.startsWith(":")?(t.push(i.slice(1)),"([^\\/]+)"):i).join("\\/"),l=e.match(new RegExp(`^${r}$`));return l||(s=!1,l=e.match(new RegExp(`^${r}`))),l?(t.forEach((i,a)=>n[i]=l[a+1]),{exact:s,params:n,part:l[0].slice(0,-1)}):null}function rl(o,e,t){if(t==="")return o;if(t[0]==="/")return t;let n=l=>l.split("/").filter(i=>i!==""),s=n(o),r=e?n(e):[];return"/"+r.map((l,i)=>s[i]).join("/")+"/"+t}function Qo(o,e,t,n){let s=[e,"data-"+e].reduce((r,l)=>{let i=o.getAttribute(l);return t&&o.removeAttribute(l),i===null?r:i},!1);return!n&&s===""?!0:s||n||!1}function Ti(o){let e=o.split("&").map(t=>t.split("=")).reduce((t,n)=>{let s=n[0];if(!s)return t;let r=n.length>1?n[n.length-1]:!0;return typeof r=="string"&&r.includes(",")&&(r=r.split(",")),t[s]===void 0?t[s]=[r]:t[s].push(r),t},{});return Object.entries(e).reduce((t,n)=>(t[n[0]]=n[1].length>1?n[1]:n[1][0],t),{})}function Si(o){return Object.entries(o).map(([e,t])=>t?t===!0?e:`${e}=${Array.isArray(t)?t.join(","):t}`:null).filter(e=>e).join("&")}function Jo(o,e){return o?e+o:""}function ll(o){throw new Error("[Tinro] "+o)}var gt={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run(o,e,t,n){return o===this.HISTORY?e&&e():o===this.HASH?t&&t():n&&n()},getDefault(){return!window||window.location.pathname==="srcdoc"?this.MEMORY:this.HISTORY}},wo,il,al,On="",pt=Ei();function Ei(){let o=gt.getDefault(),e,t=l=>window.onhashchange=window.onpopstate=wo=null,n=l=>e&&e(oo(o)),s=l=>{l&&(o=l),t(),o!==gt.OFF&&gt.run(o,i=>window.onpopstate=n,i=>window.onhashchange=n)&&n()},r=l=>{let i=Object.assign(oo(o),l);return i.path+Jo(Si(i.query),"?")+Jo(i.hash,"#")};return{mode:s,get:l=>oo(o),go(l,i){Ci(o,l,i),n()},start(l){e=l,s()},stop(){e=null,s(gt.OFF)},set(l){this.go(r(l),!l.path)},methods(){return Ai(this)},base:l=>On=l}}function Ci(o,e,t){!t&&(il=al);let n=s=>history[`${t?"replace":"push"}State`]({},"",s);gt.run(o,s=>n(On+e),s=>n(`#${e}`),s=>wo=e)}function oo(o){let e=window.location,t=gt.run(o,s=>(On?e.pathname.replace(On,""):e.pathname)+e.search+e.hash,s=>String(e.hash.slice(1)||"/"),s=>wo||"/"),n=t.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return al=t,{url:t,from:il,path:n[1]||"",query:Ti(n[2]||""),hash:n[3]||""}}function Ai(o){let e=()=>o.get().query,t=l=>o.set({query:l}),n=l=>t(l(e())),s=()=>o.get().hash,r=l=>o.set({hash:l});return{hash:{get:s,set:r,clear:()=>r("")},query:{replace:t,clear:()=>t(""),get(l){return l?e()[l]:e()},set(l,i){n(a=>(a[l]=i,a))},delete(l){n(i=>(i[l]&&delete i[l],i))}}}}var In=Ri();function Ri(){let{subscribe:o}=Qt(pt.get(),e=>{pt.start(e);let t=Ni(pt.go);return()=>{pt.stop(),t()}});return{subscribe:o,goto:pt.go,params:Mi,meta:Oi,useHashNavigation:e=>pt.mode(e?gt.HASH:gt.HISTORY),mode:{hash:()=>pt.mode(gt.HASH),history:()=>pt.mode(gt.HISTORY),memory:()=>pt.mode(gt.MEMORY)},base:pt.base,location:pt.methods()}}function Ni(o){let e=t=>{let n=t.target.closest("a[href]"),s=n&&Qo(n,"target",!1,"_self"),r=n&&Qo(n,"tinro-ignore"),l=t.ctrlKey||t.metaKey||t.altKey||t.shiftKey;if(s=="_self"&&!r&&!l&&n){let i=n.getAttribute("href").replace(/^\/#/,"");/^\/\/|^#|^[a-zA-Z]+:/.test(i)||(t.preventDefault(),o(i.startsWith("/")?i:n.href.replace(window.location.origin,"")))}};return addEventListener("click",e),()=>removeEventListener("click",e)}function Mi(){return en("tinro").meta.params}var Ln="tinro",Pi=cl({pattern:"",matched:!0});function zi(o){let e=en(Ln)||Pi;(e.exact||e.fallback)&&ll(`${o.fallback?"<Route fallback>":`<Route path="${o.path}">`}  can't be inside ${e.fallback?"<Route fallback>":`<Route path="${e.path||"/"}"> with exact path`}`);let t=o.fallback?"fallbacks":"childs",n=Qt({}),s=cl({fallback:o.fallback,parent:e,update(r){s.exact=!r.path.endsWith("/*"),s.pattern=fo(`${s.parent.pattern||""}${r.path}`),s.redirect=r.redirect,s.firstmatch=r.firstmatch,s.breadcrumb=r.breadcrumb,s.match()},register:()=>(s.parent[t].add(s),()=>Ye(this,null,function*(){s.parent[t].delete(s),s.parent.activeChilds.delete(s),s.router.un&&s.router.un(),s.parent.match()})),show:()=>{o.onShow(),!s.fallback&&s.parent.activeChilds.add(s)},hide:()=>{o.onHide(),s.parent.activeChilds.delete(s)},match:()=>Ye(this,null,function*(){s.matched=!1;let{path:r,url:l,from:i,query:a}=s.router.location,c=xi(s.pattern,r);if(!s.fallback&&c&&s.redirect&&(!s.exact||s.exact&&c.exact)){let u=rl(r,s.parent.pattern,s.redirect);return In.goto(u,!0)}s.meta=c&&{from:i,url:l,query:a,match:c.part,pattern:s.pattern,breadcrumbs:s.parent.meta&&s.parent.meta.breadcrumbs.slice()||[],params:c.params,subscribe:n.subscribe},s.breadcrumb&&s.meta&&s.meta.breadcrumbs.push({name:s.breadcrumb,path:c.part}),n.set(s.meta),c&&!s.fallback&&(!s.exact||s.exact&&c.exact)&&(!s.parent.firstmatch||!s.parent.matched)?(o.onMeta(s.meta),s.parent.matched=!0,s.show()):s.hide(),c&&s.showFallbacks()})});return bo(Ln,s),Dt(()=>s.register()),s}function Oi(){return mi(Ln)?en(Ln).meta:ll("meta() function must be run inside any `<Route>` child component only")}function cl(o){let e={router:{},exact:!1,pattern:null,meta:null,parent:null,fallback:!1,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,showFallbacks(){return Ye(this,null,function*(){if(!this.fallback&&(yield ol(),this.childs.size>0&&this.activeChilds.size==0||this.childs.size==0&&this.fallbacks.size>0)){let n=this;for(;n.fallbacks.size==0;)if(n=n.parent,!n)return;n&&n.fallbacks.forEach(s=>{if(s.redirect){let r=rl("/",s.parent.pattern,s.redirect);In.goto(r,!0)}else s.show()})}})},start(){this.router.un||(this.router.un=In.subscribe(n=>{this.router.location=n,this.pattern!==null&&this.match()}))},match(){this.showFallbacks()}};return Object.assign(e,o),e.start(),e}const Ii=o=>({params:o&2,meta:o&4}),es=o=>({params:o[1],meta:o[2]});function ts(o){let e;const t=o[9].default,n=Ae(t,o,o[8],es);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&262)&&Ne(n,t,s,s[8],e?Re(t,s[8],r,Ii):Me(s[8]),es)},i(s){e||($(n,s),e=!0)},o(s){x(n,s),e=!1},d(s){n&&n.d(s)}}}function Li(o){let e,t,n=o[0]&&ts(o);return{c(){n&&n.c(),e=$e()},m(s,r){n&&n.m(s,r),k(s,e,r),t=!0},p(s,[r]){s[0]?n?(n.p(s,r),r&1&&$(n,1)):(n=ts(s),n.c(),$(n,1),n.m(e.parentNode,e)):n&&(ge(),x(n,1,1,()=>{n=null}),me())},i(s){t||($(n),t=!0)},o(s){x(n),t=!1},d(s){n&&n.d(s),s&&v(e)}}}function Di(o,e,t){let{$$slots:n={},$$scope:s}=e,{path:r="/*"}=e,{fallback:l=!1}=e,{redirect:i=!1}=e,{firstmatch:a=!1}=e,{breadcrumb:c=null}=e,u=!1,f={},p={};const m=zi({fallback:l,onShow(){t(0,u=!0)},onHide(){t(0,u=!1)},onMeta(g){t(2,p=g),t(1,f=p.params)}});return o.$$set=g=>{"path"in g&&t(3,r=g.path),"fallback"in g&&t(4,l=g.fallback),"redirect"in g&&t(5,i=g.redirect),"firstmatch"in g&&t(6,a=g.firstmatch),"breadcrumb"in g&&t(7,c=g.breadcrumb),"$$scope"in g&&t(8,s=g.$$scope)},o.$$.update=()=>{o.$$.dirty&232&&m.update({path:r,redirect:i,firstmatch:a,breadcrumb:c})},[u,f,p,r,l,i,a,c,s,n]}class St extends Y{constructor(e){super(),Z(this,e,Di,Li,K,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}}var et="./assets/npm-logo.185f97d3.svg";const{document:ns}=Mt;function ji(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P,z,O,I,L,B,q,W,oe,Q,D,U,J,re,ce,fe,Pe,Ie,ye,we,ne,xe,be,he,te,Te,Ee,ve,Se,ct,ut,ie,We,De,_e,Ze,Qe,ft,ot,F,V,se,H,ue,Le,Ce,Je,Ut,Oo,Io,on,Lo,hn,Do,jo,Tt,bn,Bo,qt,Kt,Fo,Ho,sn,Uo,_n,qo;return ns.title=e=document.title.replace(/(•).*$/,"$1 Home"),{c(){t=y(),n=b("section"),s=b("h1"),s.textContent="Packages",r=y(),l=b("div"),i=b("div"),a=b("div"),a.innerHTML='<a href="/tabs">@apsc/tabs</a>',c=y(),u=b("a"),f=b("img"),m=y(),g=b("div"),g.textContent="A set of components for organizing a tabbed interface",_=y(),w=b("div"),T=b("div"),T.innerHTML='<a href="/glob-notify">@apsc/glob-notify</a>',S=y(),N=b("a"),E=b("img"),P=y(),z=b("div"),z.textContent="Component for notifications globally for the entire application",O=y(),I=b("div"),L=b("div"),L.innerHTML='<a href="/color">@apsc/color</a>',B=y(),q=b("a"),W=b("img"),Q=y(),D=b("div"),D.textContent="A set of components for picking and editing colors",U=y(),J=b("div"),re=b("div"),ce=b("div"),ce.innerHTML='<a href="/floating-ui-action">@apsc/floating-ui-action</a>',fe=y(),Pe=b("a"),Ie=b("img"),we=y(),ne=b("div"),xe=j("Floating UI (ex. Popper) action for directive "),be=b("code"),he=j("use"),te=y(),Te=b("div"),Ee=b("div"),Ee.innerHTML='<a href="/focus-action">@apsc/focus-action</a>',ve=y(),Se=b("a"),ct=b("img"),ie=y(),We=b("div"),De=j("Action to control "),_e=b("code"),Ze=j("focusin"),Qe=j(` and
        `),ft=b("code"),ot=j("focusout"),F=j(" for directive "),V=b("code"),se=j("use"),H=y(),ue=b("div"),Le=b("div"),Le.innerHTML='<a href="/keyboard-shortcut-action">@apsc/keyboard-shortcut-action</a>',Ce=y(),Je=b("a"),Ut=b("img"),Io=y(),on=b("div"),Lo=j("Action to call a function by keyboard shortcut for Svelte directive "),hn=b("code"),Do=j("use"),jo=y(),Tt=b("div"),bn=b("div"),bn.innerHTML='<a href="/scroll-child-action">@apsc/scroll-child-action</a>',Bo=y(),qt=b("a"),Kt=b("img"),Ho=y(),sn=b("div"),Uo=j("Action to scroll the child to parent viewport for Svelte directive "),_n=b("code"),qo=j("use"),h(s,"class","font-bold my-4 pb-2 text-3xl border-b border-gray-400"),h(a,"class","pkg-tile__link svelte-1gf5keo"),Ge(f.src,p=et)||h(f,"src",p),h(f,"alt","NPM logo"),h(f,"class","svelte-1gf5keo"),h(u,"class","pkg-tile__npm svelte-1gf5keo"),h(u,"href","https://www.npmjs.com/package/@apsc/tabs"),h(u,"target","_blank"),h(g,"class","pkg-tile__description svelte-1gf5keo"),h(i,"class","pkg-tile svelte-1gf5keo"),h(T,"class","pkg-tile__link svelte-1gf5keo"),Ge(E.src,M=et)||h(E,"src",M),h(E,"alt","NPM logo"),h(E,"class","svelte-1gf5keo"),h(N,"class","pkg-tile__npm svelte-1gf5keo"),h(N,"href","https://www.npmjs.com/package/@apsc/glob-notify"),h(N,"target","_blank"),h(z,"class","pkg-tile__description svelte-1gf5keo"),h(w,"class","pkg-tile svelte-1gf5keo"),h(L,"class","pkg-tile__link svelte-1gf5keo"),Ge(W.src,oe=et)||h(W,"src",oe),h(W,"alt","NPM logo"),h(W,"class","svelte-1gf5keo"),h(q,"class","pkg-tile__npm svelte-1gf5keo"),h(q,"href","https://www.npmjs.com/package/@apsc/color"),h(q,"target","_blank"),h(D,"class","pkg-tile__description svelte-1gf5keo"),h(I,"class","pkg-tile svelte-1gf5keo"),h(l,"class","flex flex-wrap gap-6 mb-12"),h(ce,"class","pkg-tile__link svelte-1gf5keo"),Ge(Ie.src,ye=et)||h(Ie,"src",ye),h(Ie,"alt","NPM logo"),h(Ie,"class","svelte-1gf5keo"),h(Pe,"class","pkg-tile__npm svelte-1gf5keo"),h(Pe,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),h(Pe,"target","_blank"),h(be,"class",Gt(o[0].code)+" svelte-1gf5keo"),h(ne,"class","pkg-tile__description svelte-1gf5keo"),h(re,"class","pkg-tile svelte-1gf5keo"),h(Ee,"class","pkg-tile__link svelte-1gf5keo"),Ge(ct.src,ut=et)||h(ct,"src",ut),h(ct,"alt","NPM logo"),h(ct,"class","svelte-1gf5keo"),h(Se,"class","pkg-tile__npm svelte-1gf5keo"),h(Se,"href","https://www.npmjs.com/package/@apsc/focus-action"),h(Se,"target","_blank"),h(_e,"class",Gt(o[0].code)+" svelte-1gf5keo"),h(ft,"class",Gt(o[0].code)+" svelte-1gf5keo"),h(V,"class",Gt(o[0].code)+" svelte-1gf5keo"),h(We,"class","pkg-tile__description svelte-1gf5keo"),h(Te,"class","pkg-tile svelte-1gf5keo"),h(Le,"class","pkg-tile__link svelte-1gf5keo"),Ge(Ut.src,Oo=et)||h(Ut,"src",Oo),h(Ut,"alt","NPM logo"),h(Ut,"class","svelte-1gf5keo"),h(Je,"class","pkg-tile__npm svelte-1gf5keo"),h(Je,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),h(Je,"target","_blank"),h(hn,"class",Gt(o[0].code)+" svelte-1gf5keo"),h(on,"class","pkg-tile__description svelte-1gf5keo"),h(ue,"class","pkg-tile svelte-1gf5keo"),h(bn,"class","pkg-tile__link svelte-1gf5keo"),Ge(Kt.src,Fo=et)||h(Kt,"src",Fo),h(Kt,"alt","NPM logo"),h(Kt,"class","svelte-1gf5keo"),h(qt,"class","pkg-tile__npm svelte-1gf5keo"),h(qt,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),h(qt,"target","_blank"),h(_n,"class",Gt(o[0].code)+" svelte-1gf5keo"),h(sn,"class","pkg-tile__description svelte-1gf5keo"),h(Tt,"class","pkg-tile svelte-1gf5keo"),h(J,"class","flex flex-wrap gap-6 mb-12")},m(Wt,wn){k(Wt,t,wn),k(Wt,n,wn),d(n,s),d(n,r),d(n,l),d(l,i),d(i,a),d(i,c),d(i,u),d(u,f),d(i,m),d(i,g),d(l,_),d(l,w),d(w,T),d(w,S),d(w,N),d(N,E),d(w,P),d(w,z),d(l,O),d(l,I),d(I,L),d(I,B),d(I,q),d(q,W),d(I,Q),d(I,D),d(n,U),d(n,J),d(J,re),d(re,ce),d(re,fe),d(re,Pe),d(Pe,Ie),d(re,we),d(re,ne),d(ne,xe),d(ne,be),d(be,he),d(J,te),d(J,Te),d(Te,Ee),d(Te,ve),d(Te,Se),d(Se,ct),d(Te,ie),d(Te,We),d(We,De),d(We,_e),d(_e,Ze),d(We,Qe),d(We,ft),d(ft,ot),d(We,F),d(We,V),d(V,se),d(J,H),d(J,ue),d(ue,Le),d(ue,Ce),d(ue,Je),d(Je,Ut),d(ue,Io),d(ue,on),d(on,Lo),d(on,hn),d(hn,Do),d(J,jo),d(J,Tt),d(Tt,bn),d(Tt,Bo),d(Tt,qt),d(qt,Kt),d(Tt,Ho),d(Tt,sn),d(sn,Uo),d(sn,_n),d(_n,qo)},p(Wt,[wn]){wn&0&&e!==(e=document.title.replace(/(•).*$/,"$1 Home"))&&(ns.title=e)},i:ee,o:ee,d(Wt){Wt&&v(t),Wt&&v(n)}}}function Bi(o){return[{code:"bg-gray-200 px-1 rounded-sm"}]}class Fi extends Y{constructor(e){super(),Z(this,e,Bi,ji,K,{})}}const vo=Symbol("TABS");function Hi({mode:o,tabs:e,selectedTab:t,panels:n,selectedPanel:s,selectedTabClass:r,hiddenPanelClass:l}){const i=yi(t,a=>e.indexOf(a!=null?a:Symbol()));return{mode:o,registerTab:()=>{const a=Symbol("tab");return e.push(a),t.update(c=>c!=null?c:a),ao(()=>{const c=e.indexOf(a);c>=0&&(e.splice(c,1),t.update(u=>u===a?e[c]||e[e.length-1]:u))}),a},registerPanel:()=>{const a=Symbol("panel");return n.push(a),s.update(c=>c!=null?c:a),ao(()=>{const c=n.indexOf(a);c>=0&&(n.splice(c,1),s.update(u=>u===a?n[c]||n[n.length-1]:u))}),a},selectTab:a=>{var u;let c;typeof a=="number"?c=e.indexOf((u=e.at(a))!=null?u:Symbol()):c=e.indexOf(a),c>=0&&c<e.length&&(t.set(e[c]),s.set(n[c]))},selectedTab:t,selectedPanel:s,selectedIndex:i,selectedTabClass:r,hiddenPanelClass:l}}function Ui(o){let e,t,n;const s=o[7].default,r=Ae(s,o,o[6],null);return{c(){e=b("div"),r&&r.c(),h(e,"class",t="c-tabs"+(o[0]?" "+o[0]:""))},m(l,i){k(l,e,i),r&&r.m(e,null),n=!0},p(l,[i]){r&&r.p&&(!n||i&64)&&Ne(r,s,l,l[6],n?Re(s,l[6],i,null):Me(l[6]),null),(!n||i&1&&t!==(t="c-tabs"+(l[0]?" "+l[0]:"")))&&h(e,"class",t)},i(l){n||($(r,l),n=!0)},o(l){x(r,l),n=!1},d(l){l&&v(e),r&&r.d(l)}}}function qi(o,e,t){let{$$slots:n={},$$scope:s}=e,{class:r=""}=e,{selectedTabClass:l="active"}=e,{hiddenPanelClass:i=""}=e,{mode:a="hide"}=e;const c=[],u=[],f=Qt(null),p=Qt(null),m=Hi({mode:a,tabs:c,panels:u,selectedTab:f,selectedPanel:p,selectedTabClass:l,hiddenPanelClass:i}),g=m.selectedIndex,_=m.selectTab;return bo(vo,m),o.$$set=w=>{"class"in w&&t(0,r=w.class),"selectedTabClass"in w&&t(1,l=w.selectedTabClass),"hiddenPanelClass"in w&&t(2,i=w.hiddenPanelClass),"mode"in w&&t(3,a=w.mode),"$$scope"in w&&t(6,s=w.$$scope)},[r,l,i,a,g,_,s,n]}class rt extends Y{constructor(e){super(),Z(this,e,qi,Ui,K,{class:0,selectedTabClass:1,hiddenPanelClass:2,mode:3,selectedIndex:4,selectTab:5})}get selectedIndex(){return this.$$.ctx[4]}get selectTab(){return this.$$.ctx[5]}}function Ki(o){let e,t,n;const s=o[2].default,r=Ae(s,o,o[1],null);return{c(){e=b("div"),r&&r.c(),h(e,"class",t="c-tabs__tablist"+(o[0]?" "+o[0]:""))},m(l,i){k(l,e,i),r&&r.m(e,null),n=!0},p(l,[i]){r&&r.p&&(!n||i&2)&&Ne(r,s,l,l[1],n?Re(s,l[1],i,null):Me(l[1]),null),(!n||i&1&&t!==(t="c-tabs__tablist"+(l[0]?" "+l[0]:"")))&&h(e,"class",t)},i(l){n||($(r,l),n=!0)},o(l){x(r,l),n=!1},d(l){l&&v(e),r&&r.d(l)}}}function Wi(o,e,t){let{$$slots:n={},$$scope:s}=e,{class:r=""}=e;return o.$$set=l=>{"class"in l&&t(0,r=l.class),"$$scope"in l&&t(1,s=l.$$scope)},[r,s,n]}class lt extends Y{constructor(e){super(),Z(this,e,Wi,Ki,K,{class:0})}}const Gi=o=>({index:o&32,tabId:o&64,isActive:o&2}),os=o=>({index:o[5],tabId:o[6],panelId:o[10],isActive:o[1]===o[10]});function ss(o){let e,t,n;const s=o[13].default,r=Ae(s,o,o[12],os);return{c(){e=b("div"),r&&r.c(),h(e,"class",t=["c-tabs__tabpanel",o[0],o[2]].filter(rs).join(" ")),h(e,"style",o[3])},m(l,i){k(l,e,i),r&&r.m(e,null),n=!0},p(l,i){r&&r.p&&(!n||i&4194)&&Ne(r,s,l,l[12],n?Re(s,l[12],i,Gi):Me(l[12]),os),(!n||i&5&&t!==(t=["c-tabs__tabpanel",l[0],l[2]].filter(rs).join(" ")))&&h(e,"class",t),(!n||i&8)&&h(e,"style",l[3])},i(l){n||($(r,l),n=!0)},o(l){x(r,l),n=!1},d(l){l&&v(e),r&&r.d(l)}}}function Zi(o){let e,t,n=!o[4]&&ss(o);return{c(){n&&n.c(),e=$e()},m(s,r){n&&n.m(s,r),k(s,e,r),t=!0},p(s,[r]){s[4]?n&&(ge(),x(n,1,1,()=>{n=null}),me()):n?(n.p(s,r),r&16&&$(n,1)):(n=ss(s),n.c(),$(n,1),n.m(e.parentNode,e))},i(s){t||($(n),t=!0)},o(s){x(n),t=!1},d(s){n&&n.d(s),s&&v(e)}}}const rs=o=>!!o;function Yi(o,e,t){let n,s,r,{$$slots:l={},$$scope:i}=e,{class:a=""}=e;const{mode:c,registerPanel:u,selectedPanel:f,selectedTab:p,selectedIndex:m,hiddenPanelClass:g}=en(vo);Vt(o,f,E=>t(1,n=E)),Vt(o,p,E=>t(6,r=E)),Vt(o,m,E=>t(5,s=E));let{hiddenClass:_=g}=e;const w=u();let T="",S,N=!0;return o.$$set=E=>{"class"in E&&t(0,a=E.class),"hiddenClass"in E&&t(11,_=E.hiddenClass),"$$scope"in E&&t(12,i=E.$$scope)},o.$$.update=()=>{o.$$.dirty&2050&&function(E){E?(t(4,N=!1),t(3,S=void 0),t(2,T="")):c!=="hide"?(t(4,N=!0),t(3,S=void 0),t(2,T="")):(t(4,N=!1),_?(t(3,S=void 0),t(2,T=_)):(t(3,S="display: none"),t(2,T="")))}(n===w)},[a,n,T,S,N,s,r,f,p,m,w,_,i,l]}class pe extends Y{constructor(e){super(),Z(this,e,Yi,Zi,K,{class:0,hiddenClass:11})}}const Vi=o=>({index:o&16,isActive:o&8}),ls=o=>({index:o[4],id:o[8],isActive:o[3]===o[8]});function Xi(o){let e,t,n,s,r;const l=o[10].default,i=Ae(l,o,o[9],ls);return{c(){e=b("button"),i&&i.c(),h(e,"class",t=["c-tabs__tab",o[0],o[3]===o[8]?o[1]:""].filter(is).join(" ")),e.disabled=o[2]},m(a,c){k(a,e,c),i&&i.m(e,null),n=!0,s||(r=G(e,"click",o[11]),s=!0)},p(a,[c]){i&&i.p&&(!n||c&536)&&Ne(i,l,a,a[9],n?Re(l,a[9],c,Vi):Me(a[9]),ls),(!n||c&11&&t!==(t=["c-tabs__tab",a[0],a[3]===a[8]?a[1]:""].filter(is).join(" ")))&&h(e,"class",t),(!n||c&4)&&(e.disabled=a[2])},i(a){n||($(i,a),n=!0)},o(a){x(i,a),n=!1},d(a){a&&v(e),i&&i.d(a),s=!1,r()}}}const is=o=>!!o;function Qi(o,e,t){let n,s,{$$slots:r={},$$scope:l}=e,{class:i=""}=e;const{registerTab:a,selectTab:c,selectedTab:u,selectedIndex:f,selectedTabClass:p}=en(vo);Vt(o,u,T=>t(3,n=T)),Vt(o,f,T=>t(4,s=T));let{selectedClass:m=p}=e,{disabled:g=void 0}=e;const _=a(),w=()=>c(_);return o.$$set=T=>{"class"in T&&t(0,i=T.class),"selectedClass"in T&&t(1,m=T.selectedClass),"disabled"in T&&t(2,g=T.disabled),"$$scope"in T&&t(9,l=T.$$scope)},[i,m,g,n,s,c,u,f,_,l,r,w]}class de extends Y{constructor(e){super(),Z(this,e,Qi,Xi,K,{class:0,selectedClass:1,disabled:2})}}var Ji=`<div class="component__source">Source <code>Tabs.svelte</code></div>
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
<p>Basic styles are described in the <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/tabs/style.css" target="_blank"><code>style.css</code></a> file.</p>
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
<td class="prop__description"><p><code>TabPanel</code> hiding and showing mode.<br /><code>remove</code>: The panel will be removed from the DOM.
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
<td class="slot__props"><code>{ index: number; id: symbol; isActive: boolean }</code></td></tr></table>
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
<td class="slot__props"><code>{ index: number; tabId: symbol; id: symbol; isActive: boolean }</code></td></tr></table>`;function ea(){const o=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||o(e)},Dt(()=>{console.warn=o})}function as(o,e,t){const n=o.slice();return n[18]=e[t],n}function cs(o,e,t){const n=o.slice();return n[18]=e[t],n}function us(o,e,t){const n=o.slice();return n[10]=e[t],n}function fs(o,e,t){const n=o.slice();return n[13]=e[t],n[15]=t,n}function ps(o,e,t){const n=o.slice();return n[16]=e[t],n[15]=t,n}function ds(o,e,t){const n=o.slice();return n[7]=e[t],n}function ta(o){let e,t,n,s;const r=[ra,sa,oa],l=[];function i(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),k(a,n,c),s=!0},p(a,c){let u=e;e=i(a),e===u?l[e].p(a,c):(ge(),x(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){x(t),s=!1},d(a){l[e].d(a),a&&v(n)}}}function na(o){let e,t,n=o[1],s=[];for(let l=0;l<n.length;l+=1)s[l]=ws(ds(o,n,l));const r=l=>x(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);k(l,e,i),t=!0},p(l,i){if(i&34){n=l[1];let a;for(a=0;a<n.length;a+=1){const c=ds(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=ws(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(ge(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)x(s[i]);t=!1},d(l){Fe(s,l),l&&v(e)}}}function oa(o){let e,t,n;const s=[o[6]];var r=o[5][o[0]];function l(i){let a={$$slots:{default:[aa]},$$scope:{ctx:i}};for(let c=0;c<s.length;c+=1)a=it(a,s[c]);return{props:a}}return r&&(e=new r(l(o))),{c(){e&&R(e.$$.fragment),t=$e()},m(i,a){e&&C(e,i,a),k(i,t,a),n=!0},p(i,a){const c=a&64?jt(s,[tn(i[6])]):{};if(a&8388706&&(c.$$scope={dirty:a,ctx:i}),r!==(r=i[5][i[0]])){if(e){ge();const u=e;x(u.$$.fragment,1,0,()=>{A(u,1)}),me()}r?(e=new r(l(i)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&x(e.$$.fragment,i),n=!1},d(i){i&&v(t),e&&A(e,i)}}}function sa(o){let e,t,n,s;const r=[ua,ca],l=[];function i(a,c){return a[4]?0:1}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),k(a,n,c),s=!0},p(a,c){let u=e;e=i(a),e===u?l[e].p(a,c):(ge(),x(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){x(t),s=!1},d(a){l[e].d(a),a&&v(n)}}}function ra(o){let e,t,n;var s=o[5].table;function r(l){return{props:{$$slots:{default:[$a]},$$scope:{ctx:l}}}}return s&&(e=new s(r(o))),{c(){e&&R(e.$$.fragment),t=$e()},m(l,i){e&&C(e,l,i),k(l,t,i),n=!0},p(l,i){const a={};if(i&8388716&&(a.$$scope={dirty:i,ctx:l}),s!==(s=l[5].table)){if(e){ge();const c=e;x(c.$$.fragment,1,0,()=>{A(c,1)}),me()}s?(e=new s(r(l)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else s&&e.$set(a)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&x(e.$$.fragment,l),n=!1},d(l){l&&v(t),e&&A(e,l)}}}function la(o){let e=o[6].raw+"",t;return{c(){t=j(e)},m(n,s){k(n,t,s)},p(n,s){s&64&&e!==(e=n[6].raw+"")&&ke(t,e)},i:ee,o:ee,d(n){n&&v(t)}}}function ia(o){let e,t;return e=new Bt({props:{tokens:o[1],renderers:o[5]}}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},p(n,s){const r={};s&2&&(r.tokens=n[1]),s&32&&(r.renderers=n[5]),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function aa(o){let e,t,n,s;const r=[ia,la],l=[];function i(a,c){return a[1]?0:1}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),k(a,n,c),s=!0},p(a,c){let u=e;e=i(a),e===u?l[e].p(a,c):(ge(),x(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){x(t),s=!1},d(a){l[e].d(a),a&&v(n)}}}function ca(o){let e,t,n;const s=[{ordered:o[4]},o[6]];var r=o[5].list;function l(i){let a={$$slots:{default:[pa]},$$scope:{ctx:i}};for(let c=0;c<s.length;c+=1)a=it(a,s[c]);return{props:a}}return r&&(e=new r(l(o))),{c(){e&&R(e.$$.fragment),t=$e()},m(i,a){e&&C(e,i,a),k(i,t,a),n=!0},p(i,a){const c=a&80?jt(s,[a&16&&{ordered:i[4]},a&64&&tn(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),r!==(r=i[5].list)){if(e){ge();const u=e;x(u.$$.fragment,1,0,()=>{A(u,1)}),me()}r?(e=new r(l(i)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&x(e.$$.fragment,i),n=!1},d(i){i&&v(t),e&&A(e,i)}}}function ua(o){let e,t,n;const s=[{ordered:o[4]},o[6]];var r=o[5].list;function l(i){let a={$$slots:{default:[ga]},$$scope:{ctx:i}};for(let c=0;c<s.length;c+=1)a=it(a,s[c]);return{props:a}}return r&&(e=new r(l(o))),{c(){e&&R(e.$$.fragment),t=$e()},m(i,a){e&&C(e,i,a),k(i,t,a),n=!0},p(i,a){const c=a&80?jt(s,[a&16&&{ordered:i[4]},a&64&&tn(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),r!==(r=i[5].list)){if(e){ge();const u=e;x(u.$$.fragment,1,0,()=>{A(u,1)}),me()}r?(e=new r(l(i)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&x(e.$$.fragment,i),n=!1},d(i){i&&v(t),e&&A(e,i)}}}function fa(o){let e,t,n;return e=new Bt({props:{tokens:o[18].tokens,renderers:o[5]}}),{c(){R(e.$$.fragment),t=y()},m(s,r){C(e,s,r),k(s,t,r),n=!0},p(s,r){const l={};r&64&&(l.tokens=s[18].tokens),r&32&&(l.renderers=s[5]),e.$set(l)},i(s){n||($(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){A(e,s),s&&v(t)}}}function gs(o){let e,t,n;const s=[o[18]];var r=o[5].unorderedlistitem||o[5].listitem;function l(i){let a={$$slots:{default:[fa]},$$scope:{ctx:i}};for(let c=0;c<s.length;c+=1)a=it(a,s[c]);return{props:a}}return r&&(e=new r(l(o))),{c(){e&&R(e.$$.fragment),t=$e()},m(i,a){e&&C(e,i,a),k(i,t,a),n=!0},p(i,a){const c=a&64?jt(s,[tn(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),r!==(r=i[5].unorderedlistitem||i[5].listitem)){if(e){ge();const u=e;x(u.$$.fragment,1,0,()=>{A(u,1)}),me()}r?(e=new r(l(i)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&x(e.$$.fragment,i),n=!1},d(i){i&&v(t),e&&A(e,i)}}}function pa(o){let e,t,n=o[6].items,s=[];for(let l=0;l<n.length;l+=1)s[l]=gs(as(o,n,l));const r=l=>x(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);k(l,e,i),t=!0},p(l,i){if(i&96){n=l[6].items;let a;for(a=0;a<n.length;a+=1){const c=as(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=gs(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(ge(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)x(s[i]);t=!1},d(l){Fe(s,l),l&&v(e)}}}function da(o){let e,t,n;return e=new Bt({props:{tokens:o[18].tokens,renderers:o[5]}}),{c(){R(e.$$.fragment),t=y()},m(s,r){C(e,s,r),k(s,t,r),n=!0},p(s,r){const l={};r&64&&(l.tokens=s[18].tokens),r&32&&(l.renderers=s[5]),e.$set(l)},i(s){n||($(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){A(e,s),s&&v(t)}}}function ms(o){let e,t,n;const s=[o[18]];var r=o[5].orderedlistitem||o[5].listitem;function l(i){let a={$$slots:{default:[da]},$$scope:{ctx:i}};for(let c=0;c<s.length;c+=1)a=it(a,s[c]);return{props:a}}return r&&(e=new r(l(o))),{c(){e&&R(e.$$.fragment),t=$e()},m(i,a){e&&C(e,i,a),k(i,t,a),n=!0},p(i,a){const c=a&64?jt(s,[tn(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),r!==(r=i[5].orderedlistitem||i[5].listitem)){if(e){ge();const u=e;x(u.$$.fragment,1,0,()=>{A(u,1)}),me()}r?(e=new r(l(i)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&x(e.$$.fragment,i),n=!1},d(i){i&&v(t),e&&A(e,i)}}}function ga(o){let e,t,n=o[6].items,s=[];for(let l=0;l<n.length;l+=1)s[l]=ms(cs(o,n,l));const r=l=>x(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);k(l,e,i),t=!0},p(l,i){if(i&96){n=l[6].items;let a;for(a=0;a<n.length;a+=1){const c=cs(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=ms(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(ge(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)x(s[i]);t=!1},d(l){Fe(s,l),l&&v(e)}}}function ma(o){let e,t,n;return e=new Bt({props:{tokens:o[16].tokens,renderers:o[5]}}),{c(){R(e.$$.fragment),t=y()},m(s,r){C(e,s,r),k(s,t,r),n=!0},p(s,r){const l={};r&4&&(l.tokens=s[16].tokens),r&32&&(l.renderers=s[5]),e.$set(l)},i(s){n||($(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){A(e,s),s&&v(t)}}}function hs(o){let e,t,n;var s=o[5].tablecell;function r(l){return{props:{header:!0,align:l[6].align[l[15]]||"center",$$slots:{default:[ma]},$$scope:{ctx:l}}}}return s&&(e=new s(r(o))),{c(){e&&R(e.$$.fragment),t=$e()},m(l,i){e&&C(e,l,i),k(l,t,i),n=!0},p(l,i){const a={};if(i&64&&(a.align=l[6].align[l[15]]||"center"),i&8388644&&(a.$$scope={dirty:i,ctx:l}),s!==(s=l[5].tablecell)){if(e){ge();const c=e;x(c.$$.fragment,1,0,()=>{A(c,1)}),me()}s?(e=new s(r(l)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else s&&e.$set(a)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&x(e.$$.fragment,l),n=!1},d(l){l&&v(t),e&&A(e,l)}}}function ha(o){let e,t,n=o[2],s=[];for(let l=0;l<n.length;l+=1)s[l]=hs(ps(o,n,l));const r=l=>x(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);k(l,e,i),t=!0},p(l,i){if(i&100){n=l[2];let a;for(a=0;a<n.length;a+=1){const c=ps(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=hs(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(ge(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)x(s[i]);t=!1},d(l){Fe(s,l),l&&v(e)}}}function ba(o){let e,t,n;var s=o[5].tablerow;function r(l){return{props:{$$slots:{default:[ha]},$$scope:{ctx:l}}}}return s&&(e=new s(r(o))),{c(){e&&R(e.$$.fragment),t=$e()},m(l,i){e&&C(e,l,i),k(l,t,i),n=!0},p(l,i){const a={};if(i&8388708&&(a.$$scope={dirty:i,ctx:l}),s!==(s=l[5].tablerow)){if(e){ge();const c=e;x(c.$$.fragment,1,0,()=>{A(c,1)}),me()}s?(e=new s(r(l)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else s&&e.$set(a)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&x(e.$$.fragment,l),n=!1},d(l){l&&v(t),e&&A(e,l)}}}function _a(o){let e,t;return e=new Bt({props:{tokens:o[13].tokens,renderers:o[5]}}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},p(n,s){const r={};s&8&&(r.tokens=n[13].tokens),s&32&&(r.renderers=n[5]),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function bs(o){let e,t,n;var s=o[5].tablecell;function r(l){return{props:{header:!1,align:l[6].align[l[15]]||"center",$$slots:{default:[_a]},$$scope:{ctx:l}}}}return s&&(e=new s(r(o))),{c(){e&&R(e.$$.fragment),t=$e()},m(l,i){e&&C(e,l,i),k(l,t,i),n=!0},p(l,i){const a={};if(i&64&&(a.align=l[6].align[l[15]]||"center"),i&8388648&&(a.$$scope={dirty:i,ctx:l}),s!==(s=l[5].tablecell)){if(e){ge();const c=e;x(c.$$.fragment,1,0,()=>{A(c,1)}),me()}s?(e=new s(r(l)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else s&&e.$set(a)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&x(e.$$.fragment,l),n=!1},d(l){l&&v(t),e&&A(e,l)}}}function wa(o){let e,t,n=o[10],s=[];for(let l=0;l<n.length;l+=1)s[l]=bs(fs(o,n,l));const r=l=>x(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=y()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);k(l,e,i),t=!0},p(l,i){if(i&104){n=l[10];let a;for(a=0;a<n.length;a+=1){const c=fs(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=bs(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(ge(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)x(s[i]);t=!1},d(l){Fe(s,l),l&&v(e)}}}function _s(o){let e,t,n;var s=o[5].tablerow;function r(l){return{props:{$$slots:{default:[wa]},$$scope:{ctx:l}}}}return s&&(e=new s(r(o))),{c(){e&&R(e.$$.fragment),t=$e()},m(l,i){e&&C(e,l,i),k(l,t,i),n=!0},p(l,i){const a={};if(i&8388712&&(a.$$scope={dirty:i,ctx:l}),s!==(s=l[5].tablerow)){if(e){ge();const c=e;x(c.$$.fragment,1,0,()=>{A(c,1)}),me()}s?(e=new s(r(l)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else s&&e.$set(a)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&x(e.$$.fragment,l),n=!1},d(l){l&&v(t),e&&A(e,l)}}}function va(o){let e,t,n=o[3],s=[];for(let l=0;l<n.length;l+=1)s[l]=_s(us(o,n,l));const r=l=>x(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);k(l,e,i),t=!0},p(l,i){if(i&104){n=l[3];let a;for(a=0;a<n.length;a+=1){const c=us(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=_s(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(ge(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)x(s[i]);t=!1},d(l){Fe(s,l),l&&v(e)}}}function $a(o){let e,t,n,s,r;var l=o[5].tablehead;function i(u){return{props:{$$slots:{default:[ba]},$$scope:{ctx:u}}}}l&&(e=new l(i(o)));var a=o[5].tablebody;function c(u){return{props:{$$slots:{default:[va]},$$scope:{ctx:u}}}}return a&&(n=new a(c(o))),{c(){e&&R(e.$$.fragment),t=y(),n&&R(n.$$.fragment),s=$e()},m(u,f){e&&C(e,u,f),k(u,t,f),n&&C(n,u,f),k(u,s,f),r=!0},p(u,f){const p={};if(f&8388708&&(p.$$scope={dirty:f,ctx:u}),l!==(l=u[5].tablehead)){if(e){ge();const g=e;x(g.$$.fragment,1,0,()=>{A(g,1)}),me()}l?(e=new l(i(u)),R(e.$$.fragment),$(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else l&&e.$set(p);const m={};if(f&8388712&&(m.$$scope={dirty:f,ctx:u}),a!==(a=u[5].tablebody)){if(n){ge();const g=n;x(g.$$.fragment,1,0,()=>{A(g,1)}),me()}a?(n=new a(c(u)),R(n.$$.fragment),$(n.$$.fragment,1),C(n,s.parentNode,s)):n=null}else a&&n.$set(m)},i(u){r||(e&&$(e.$$.fragment,u),n&&$(n.$$.fragment,u),r=!0)},o(u){e&&x(e.$$.fragment,u),n&&x(n.$$.fragment,u),r=!1},d(u){e&&A(e,u),u&&v(t),u&&v(s),n&&A(n,u)}}}function ws(o){let e,t;const n=[o[7],{renderers:o[5]}];let s={};for(let r=0;r<n.length;r+=1)s=it(s,n[r]);return e=new Bt({props:s}),{c(){R(e.$$.fragment)},m(r,l){C(e,r,l),t=!0},p(r,l){const i=l&34?jt(n,[l&2&&tn(r[7]),l&32&&{renderers:r[5]}]):{};e.$set(i)},i(r){t||($(e.$$.fragment,r),t=!0)},o(r){x(e.$$.fragment,r),t=!1},d(r){A(e,r)}}}function ka(o){let e,t,n,s;const r=[na,ta],l=[];function i(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=i(o))&&(t=l[e]=r[e](o)),{c(){t&&t.c(),n=$e()},m(a,c){~e&&l[e].m(a,c),k(a,n,c),s=!0},p(a,[c]){let u=e;e=i(a),e===u?~e&&l[e].p(a,c):(t&&(ge(),x(l[u],1,1,()=>{l[u]=null}),me()),~e?(t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n)):t=null)},i(a){s||($(t),s=!0)},o(a){x(t),s=!1},d(a){~e&&l[e].d(a),a&&v(n)}}}function ya(o,e,t){const n=["type","tokens","header","rows","ordered","renderers"];let s=Nn(e,n),{type:r=void 0}=e,{tokens:l=void 0}=e,{header:i=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return ea(),o.$$set=f=>{e=it(it({},e),Yr(f)),t(6,s=Nn(e,n)),"type"in f&&t(0,r=f.type),"tokens"in f&&t(1,l=f.tokens),"header"in f&&t(2,i=f.header),"rows"in f&&t(3,a=f.rows),"ordered"in f&&t(4,c=f.ordered),"renderers"in f&&t(5,u=f.renderers)},[r,l,i,a,c,u,s]}class Bt extends Y{constructor(e){super(),Z(this,e,ya,ka,K,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}}function ul(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let nn=ul();function xa(o){nn=o}const Ta=/[&<>"']/,Sa=/[&<>"']/g,Ea=/[<>"']|&(?!#?\w+;)/,Ca=/[<>"']|&(?!#?\w+;)/g,Aa={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vs=o=>Aa[o];function qe(o,e){if(e){if(Ta.test(o))return o.replace(Sa,vs)}else if(Ea.test(o))return o.replace(Ca,vs);return o}const Ra=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function fl(o){return o.replace(Ra,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Na=/(^|[^\[])\^/g;function Oe(o,e){o=typeof o=="string"?o:o.source,e=e||"";const t={replace:(n,s)=>(s=s.source||s,s=s.replace(Na,"$1"),o=o.replace(n,s),t),getRegex:()=>new RegExp(o,e)};return t}const Ma=/[^\w:]/g,Pa=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function $s(o,e,t){if(o){let n;try{n=decodeURIComponent(fl(t)).replace(Ma,"").toLowerCase()}catch(s){return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!Pa.test(t)&&(t=La(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(n){return null}return t}const yn={},za=/^[^:]+:\/*[^/]*$/,Oa=/^([^:]+:)[\s\S]*$/,Ia=/^([^:]+:\/*[^/]*)[\s\S]*$/;function La(o,e){yn[" "+o]||(za.test(o)?yn[" "+o]=o+"/":yn[" "+o]=An(o,"/",!0)),o=yn[" "+o];const t=o.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:o.replace(Oa,"$1")+e:e.charAt(0)==="/"?t?e:o.replace(Ia,"$1")+e:o+e}const Dn={exec:function(){}};function mt(o){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o}function ks(o,e){const t=o.replace(/\|/g,(r,l,i)=>{let a=!1,c=l;for(;--c>=0&&i[c]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function An(o,e,t){const n=o.length;if(n===0)return"";let s=0;for(;s<n;){const r=o.charAt(n-s-1);if(r===e&&!t)s++;else if(r!==e&&t)s++;else break}return o.slice(0,n-s)}function Da(o,e){if(o.indexOf(e[1])===-1)return-1;const t=o.length;let n=0,s=0;for(;s<t;s++)if(o[s]==="\\")s++;else if(o[s]===e[0])n++;else if(o[s]===e[1]&&(n--,n<0))return s;return-1}function pl(o){o&&o.sanitize&&!o.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function ys(o,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=o),e>>=1,o+=o;return t+o}function xs(o,e,t,n){const s=e.href,r=e.title?qe(e.title):null,l=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){n.state.inLink=!0;const i={type:"link",raw:t,href:s,title:r,text:l,tokens:n.inlineTokens(l,[])};return n.state.inLink=!1,i}return{type:"image",raw:t,href:s,title:r,text:qe(l)}}function ja(o,e){const t=o.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(s=>{const r=s.match(/^\s+/);if(r===null)return s;const[l]=r;return l.length>=n.length?s.slice(n.length):s}).join(`
`)}class $o{constructor(e){this.options=e||nn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:An(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=ja(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const r=An(n,"#");(this.options.pedantic||!r||/ $/.test(r))&&(n=r.trim())}const s={type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,s,r,l,i,a,c,u,f,p,m,g,_=t[1].trim();const w=_.length>1,T={type:"list",raw:"",ordered:w,start:w?+_.slice(0,-1):"",loose:!1,items:[]};_=w?`\\d{1,9}\\${_.slice(-1)}`:`\\${_}`,this.options.pedantic&&(_=w?_:"[*+-]");const S=new RegExp(`^( {0,3}${_})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,!(!(t=S.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0],f=e.split(`
`,1)[0],this.options.pedantic?(l=2,m=u.trimLeft()):(l=t[2].search(/[^ ]/),l=l>4?1:l,m=u.slice(l),l+=t[1].length),a=!1,!u&&/^ *$/.test(f)&&(n+=f+`
`,e=e.substring(f.length+1),g=!0),!g){const E=new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),M=new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;e&&(p=e.split(`
`,1)[0],u=p,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(E.test(u)||M.test(e)));){if(u.search(/[^ ]/)>=l||!u.trim())m+=`
`+u.slice(l);else if(!a)m+=`
`+u;else break;!a&&!u.trim()&&(a=!0),n+=p+`
`,e=e.substring(p.length+1)}}T.loose||(c?T.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(m),s&&(r=s[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),T.items.push({type:"list_item",raw:n,task:!!s,checked:r,loose:!1,text:m}),T.raw+=n}T.items[T.items.length-1].raw=n.trimRight(),T.items[T.items.length-1].text=m.trimRight(),T.raw=T.raw.trimRight();const N=T.items.length;for(i=0;i<N;i++){this.lexer.state.top=!1,T.items[i].tokens=this.lexer.blockTokens(T.items[i].text,[]);const E=T.items[i].tokens.filter(P=>P.type==="space"),M=E.every(P=>{const z=P.raw.split("");let O=0;for(const I of z)if(I===`
`&&(O+=1),O>1)return!0;return!1});!T.loose&&E.length&&M&&(T.loose=!0,T.items[i].loose=!0)}return T}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(n.type="paragraph",n.text=this.options.sanitizer?this.options.sanitizer(t[0]):qe(t[0]),n.tokens=[],this.lexer.inline(n.text,n.tokens)),n}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const n=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:n,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:ks(t[1]).map(s=>({text:s})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let s=n.align.length,r,l,i,a;for(r=0;r<s;r++)/^ *-+: *$/.test(n.align[r])?n.align[r]="right":/^ *:-+: *$/.test(n.align[r])?n.align[r]="center":/^ *:-+ *$/.test(n.align[r])?n.align[r]="left":n.align[r]=null;for(s=n.rows.length,r=0;r<s;r++)n.rows[r]=ks(n.rows[r],n.header.length).map(c=>({text:c}));for(s=n.header.length,l=0;l<s;l++)n.header[l].tokens=[],this.lexer.inline(n.header[l].text,n.header[l].tokens);for(s=n.rows.length,l=0;l<s;l++)for(a=n.rows[l],i=0;i<a.length;i++)a[i].tokens=[],this.lexer.inline(a[i].text,a[i].tokens);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const n={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}text(e){const t=this.rules.block.text.exec(e);if(t){const n={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:qe(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):qe(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const l=An(n.slice(0,-1),"\\");if((n.length-l.length)%2===0)return}else{const l=Da(t[2],"()");if(l>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);l&&(s=l[1],r=l[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),xs(t,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(/\s+/g," ");if(s=t[s.toLowerCase()],!s||!s.href){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return xs(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;const r=s[1]||s[2]||"";if(!r||r&&(n===""||this.rules.inline.punctuation.exec(n))){const l=s[0].length-1;let i,a,c=l,u=0;const f=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+l);(s=f.exec(t))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(a=i.length,s[3]||s[4]){c+=a;continue}else if((s[5]||s[6])&&l%3&&!((l+a)%3)){u+=a;continue}if(c-=a,c>0)continue;if(a=Math.min(a,a+c+u),Math.min(l,a)%2){const m=e.slice(1,l+s.index+a);return{type:"em",raw:e.slice(0,l+s.index+a+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}const p=e.slice(2,l+s.index+a-1);return{type:"strong",raw:e.slice(0,l+s.index+a+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const s=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return s&&r&&(n=n.substring(1,n.length-1)),n=qe(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let s,r;return n[2]==="@"?(s=qe(this.options.mangle?t(n[1]):n[1]),r="mailto:"+s):(s=qe(n[1]),r=s),{type:"link",raw:n[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let s,r;if(n[2]==="@")s=qe(this.options.mangle?t(n[0]):n[0]),r="mailto:"+s;else{let l;do l=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(l!==n[0]);s=qe(n[0]),n[1]==="www."?r="http://"+s:r=s}return{type:"link",raw:n[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):qe(n[0]):n[0]:s=qe(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:s}}}}const le={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Dn,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};le._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;le._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;le.def=Oe(le.def).replace("label",le._label).replace("title",le._title).getRegex();le.bullet=/(?:[*+-]|\d{1,9}[.)])/;le.listItemStart=Oe(/^( *)(bull) */).replace("bull",le.bullet).getRegex();le.list=Oe(le.list).replace(/bull/g,le.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+le.def.source+")").getRegex();le._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";le._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;le.html=Oe(le.html,"i").replace("comment",le._comment).replace("tag",le._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();le.paragraph=Oe(le._paragraph).replace("hr",le.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",le._tag).getRegex();le.blockquote=Oe(le.blockquote).replace("paragraph",le.paragraph).getRegex();le.normal=mt({},le);le.gfm=mt({},le.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});le.gfm.table=Oe(le.gfm.table).replace("hr",le.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",le._tag).getRegex();le.gfm.paragraph=Oe(le._paragraph).replace("hr",le.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",le.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",le._tag).getRegex();le.pedantic=mt({},le.normal,{html:Oe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",le._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Dn,paragraph:Oe(le.normal._paragraph).replace("hr",le.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",le.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const X={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Dn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Dn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};X._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";X.punctuation=Oe(X.punctuation).replace(/punctuation/g,X._punctuation).getRegex();X.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;X.escapedEmSt=/\\\*|\\_/g;X._comment=Oe(le._comment).replace("(?:-->|$)","-->").getRegex();X.emStrong.lDelim=Oe(X.emStrong.lDelim).replace(/punct/g,X._punctuation).getRegex();X.emStrong.rDelimAst=Oe(X.emStrong.rDelimAst,"g").replace(/punct/g,X._punctuation).getRegex();X.emStrong.rDelimUnd=Oe(X.emStrong.rDelimUnd,"g").replace(/punct/g,X._punctuation).getRegex();X._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;X._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;X._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;X.autolink=Oe(X.autolink).replace("scheme",X._scheme).replace("email",X._email).getRegex();X._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;X.tag=Oe(X.tag).replace("comment",X._comment).replace("attribute",X._attribute).getRegex();X._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;X._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;X._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;X.link=Oe(X.link).replace("label",X._label).replace("href",X._href).replace("title",X._title).getRegex();X.reflink=Oe(X.reflink).replace("label",X._label).replace("ref",le._label).getRegex();X.nolink=Oe(X.nolink).replace("ref",le._label).getRegex();X.reflinkSearch=Oe(X.reflinkSearch,"g").replace("reflink",X.reflink).replace("nolink",X.nolink).getRegex();X.normal=mt({},X);X.pedantic=mt({},X.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Oe(/^!?\[(label)\]\((.*?)\)/).replace("label",X._label).getRegex(),reflink:Oe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",X._label).getRegex()});X.gfm=mt({},X.normal,{escape:Oe(X.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});X.gfm.url=Oe(X.gfm.url,"i").replace("email",X.gfm._extended_email).getRegex();X.breaks=mt({},X.gfm,{br:Oe(X.br).replace("{2,}","*").getRegex(),text:Oe(X.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Ba(o){return o.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Ts(o){let e="",t,n;const s=o.length;for(t=0;t<s;t++)n=o.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class bt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nn,this.options.tokenizer=this.options.tokenizer||new $o,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:le.normal,inline:X.normal};this.options.pedantic?(t.block=le.pedantic,t.inline=X.pedantic):this.options.gfm&&(t.block=le.gfm,this.options.breaks?t.inline=X.breaks:t.inline=X.gfm),this.tokenizer.rules=t}static get rules(){return{block:le,inline:X}}static lex(e,t){return new bt(t).lex(e)}static lexInline(e,t){return new bt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(i,a,c)=>a+"    ".repeat(c.length));let n,s,r,l;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(i=>(n=i.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let i=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(i=Math.min(i,c))}),i<1/0&&i>=0&&(r=e.substring(0,i+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){s=t[t.length-1],l&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),l=r.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){const i="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,s,r,l=e,i,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)u.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+ys("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,i.index)+"["+ys("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(l))!=null;)l=l.slice(0,i.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,l,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,Ts)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,Ts))){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let p;this.options.extensions.startInline.forEach(function(m){p=m.call({lexer:this},f),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(r=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(r,Ba)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),a=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class ko{constructor(e){this.options=e||nn}code(e,t,n){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(e,s);r!=null&&r!==e&&(n=!0,e=r)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+qe(s,!0)+'">'+(n?e:qe(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:qe(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n,s){if(this.options.headerIds){const r=this.options.headerPrefix+s.slug(n);return`<h${t} id="${r}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const s=t?"ol":"ul",r=t&&n!==1?' start="'+n+'"':"";return"<"+s+r+`>
`+e+"</"+s+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=$s(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let s='<a href="'+qe(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){if(e=$s(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class dl{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class yo{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,s=0;if(this.seen.hasOwnProperty(n)){s=this.seen[e];do s++,n=e+"-"+s;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=s,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class $t{constructor(e){this.options=e||nn,this.options.renderer=this.options.renderer||new ko,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new dl,this.slugger=new yo}static parse(e,t){return new $t(t).parse(e)}static parseInline(e,t){return new $t(t).parseInline(e)}parse(e,t=!0){let n="",s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P;const z=e.length;for(s=0;s<z;s++){if(m=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]&&(P=this.options.extensions.renderers[m.type].call({parser:this},m),P!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type))){n+=P||"";continue}switch(m.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(m.tokens),m.depth,fl(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(m.text,m.lang,m.escaped);continue}case"table":{for(f="",u="",i=m.header.length,r=0;r<i;r++)u+=this.renderer.tablecell(this.parseInline(m.header[r].tokens),{header:!0,align:m.align[r]});for(f+=this.renderer.tablerow(u),p="",i=m.rows.length,r=0;r<i;r++){for(c=m.rows[r],u="",a=c.length,l=0;l<a;l++)u+=this.renderer.tablecell(this.parseInline(c[l].tokens),{header:!1,align:m.align[l]});p+=this.renderer.tablerow(u)}n+=this.renderer.table(f,p);continue}case"blockquote":{p=this.parse(m.tokens),n+=this.renderer.blockquote(p);continue}case"list":{for(g=m.ordered,_=m.start,w=m.loose,i=m.items.length,p="",r=0;r<i;r++)S=m.items[r],N=S.checked,E=S.task,T="",S.task&&(M=this.renderer.checkbox(N),w?S.tokens.length>0&&S.tokens[0].type==="paragraph"?(S.tokens[0].text=M+" "+S.tokens[0].text,S.tokens[0].tokens&&S.tokens[0].tokens.length>0&&S.tokens[0].tokens[0].type==="text"&&(S.tokens[0].tokens[0].text=M+" "+S.tokens[0].tokens[0].text)):S.tokens.unshift({type:"text",text:M}):T+=M),T+=this.parse(S.tokens,w),p+=this.renderer.listitem(T,E,N);n+=this.renderer.list(p,g,_);continue}case"html":{n+=this.renderer.html(m.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(m.tokens));continue}case"text":{for(p=m.tokens?this.parseInline(m.tokens):m.text;s+1<z&&e[s+1].type==="text";)m=e[++s],p+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);n+=t?this.renderer.paragraph(p):p;continue}default:{const O='Token with "'+m.type+'" type was not found.';if(this.options.silent){console.error(O);return}else throw new Error(O)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",s,r,l;const i=e.length;for(s=0;s<i;s++){if(r=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(l=this.options.extensions.renderers[r.type].call({parser:this},r),l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))){n+=l||"";continue}switch(r.type){case"escape":{n+=t.text(r.text);break}case"html":{n+=t.html(r.text);break}case"link":{n+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{n+=t.image(r.href,r.title,r.text);break}case"strong":{n+=t.strong(this.parseInline(r.tokens,t));break}case"em":{n+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{n+=t.codespan(r.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(r.tokens,t));break}case"text":{n+=t.text(r.text);break}default:{const a='Token with "'+r.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return n}}function ae(o,e,t){if(typeof o=="undefined"||o===null)throw new Error("marked(): input parameter is undefined or null");if(typeof o!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=mt({},ae.defaults,e||{}),pl(e),t){const n=e.highlight;let s;try{s=bt.lex(o,e)}catch(i){return t(i)}const r=function(i){let a;if(!i)try{e.walkTokens&&ae.walkTokens(s,e.walkTokens),a=$t.parse(s,e)}catch(c){i=c}return e.highlight=n,i?t(i):t(null,a)};if(!n||n.length<3||(delete e.highlight,!s.length))return r();let l=0;ae.walkTokens(s,function(i){i.type==="code"&&(l++,setTimeout(()=>{n(i.text,i.lang,function(a,c){if(a)return r(a);c!=null&&c!==i.text&&(i.text=c,i.escaped=!0),l--,l===0&&r()})},0))}),l===0&&r();return}try{const n=bt.lex(o,e);return e.walkTokens&&ae.walkTokens(n,e.walkTokens),$t.parse(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+qe(n.message+"",!0)+"</pre>";throw n}}ae.options=ae.setOptions=function(o){return mt(ae.defaults,o),xa(ae.defaults),ae};ae.getDefaults=ul;ae.defaults=nn;ae.use=function(...o){const e=mt({},...o),t=ae.defaults.extensions||{renderers:{},childTokens:{}};let n;o.forEach(s=>{if(s.extensions&&(n=!0,s.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const l=t.renderers?t.renderers[r.name]:null;l?t.renderers[r.name]=function(...i){let a=r.renderer.apply(this,i);return a===!1&&(a=l.apply(this,i)),a}:t.renderers[r.name]=r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[r.level]?t[r.level].unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}r.childTokens&&(t.childTokens[r.name]=r.childTokens)})),s.renderer){const r=ae.defaults.renderer||new ko;for(const l in s.renderer){const i=r[l];r[l]=(...a)=>{let c=s.renderer[l].apply(r,a);return c===!1&&(c=i.apply(r,a)),c}}e.renderer=r}if(s.tokenizer){const r=ae.defaults.tokenizer||new $o;for(const l in s.tokenizer){const i=r[l];r[l]=(...a)=>{let c=s.tokenizer[l].apply(r,a);return c===!1&&(c=i.apply(r,a)),c}}e.tokenizer=r}if(s.walkTokens){const r=ae.defaults.walkTokens;e.walkTokens=function(l){s.walkTokens.call(this,l),r&&r.call(this,l)}}n&&(e.extensions=t),ae.setOptions(e)})};ae.walkTokens=function(o,e){for(const t of o)switch(e.call(ae,t),t.type){case"table":{for(const n of t.header)ae.walkTokens(n.tokens,e);for(const n of t.rows)for(const s of n)ae.walkTokens(s.tokens,e);break}case"list":{ae.walkTokens(t.items,e);break}default:ae.defaults.extensions&&ae.defaults.extensions.childTokens&&ae.defaults.extensions.childTokens[t.type]?ae.defaults.extensions.childTokens[t.type].forEach(function(n){ae.walkTokens(t[n],e)}):t.tokens&&ae.walkTokens(t.tokens,e)}};ae.parseInline=function(o,e){if(typeof o=="undefined"||o===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof o!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected");e=mt({},ae.defaults,e||{}),pl(e);try{const t=bt.lexInline(o,e);return e.walkTokens&&ae.walkTokens(t,e.walkTokens),$t.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+qe(t.message+"",!0)+"</pre>";throw t}};ae.Parser=$t;ae.parser=$t.parse;ae.Renderer=ko;ae.TextRenderer=dl;ae.Lexer=bt;ae.lexer=bt.lex;ae.Tokenizer=$o;ae.Slugger=yo;ae.parse=ae;ae.options;ae.setOptions;ae.use;ae.walkTokens;ae.parseInline;$t.parse;bt.lex;const gl={};function Fa(o){let e;return{c(){e=j(o[1])},m(t,n){k(t,e,n)},p(t,n){n&2&&ke(e,t[1])},i:ee,o:ee,d(t){t&&v(e)}}}function Ha(o){let e,t;const n=o[5].default,s=Ae(n,o,o[4],null);return{c(){e=b("h6"),s&&s.c(),h(e,"id",o[2])},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ne(s,n,r,r[4],t?Re(n,r[4],l,null):Me(r[4]),null),(!t||l&4)&&h(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Ua(o){let e,t;const n=o[5].default,s=Ae(n,o,o[4],null);return{c(){e=b("h5"),s&&s.c(),h(e,"id",o[2])},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ne(s,n,r,r[4],t?Re(n,r[4],l,null):Me(r[4]),null),(!t||l&4)&&h(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function qa(o){let e,t;const n=o[5].default,s=Ae(n,o,o[4],null);return{c(){e=b("h4"),s&&s.c(),h(e,"id",o[2])},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ne(s,n,r,r[4],t?Re(n,r[4],l,null):Me(r[4]),null),(!t||l&4)&&h(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Ka(o){let e,t;const n=o[5].default,s=Ae(n,o,o[4],null);return{c(){e=b("h3"),s&&s.c(),h(e,"id",o[2])},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ne(s,n,r,r[4],t?Re(n,r[4],l,null):Me(r[4]),null),(!t||l&4)&&h(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Wa(o){let e,t;const n=o[5].default,s=Ae(n,o,o[4],null);return{c(){e=b("h2"),s&&s.c(),h(e,"id",o[2])},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ne(s,n,r,r[4],t?Re(n,r[4],l,null):Me(r[4]),null),(!t||l&4)&&h(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Ga(o){let e,t;const n=o[5].default,s=Ae(n,o,o[4],null);return{c(){e=b("h1"),s&&s.c(),h(e,"id",o[2])},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ne(s,n,r,r[4],t?Re(n,r[4],l,null):Me(r[4]),null),(!t||l&4)&&h(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Za(o){let e,t,n,s;const r=[Ga,Wa,Ka,qa,Ua,Ha,Fa],l=[];function i(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),k(a,n,c),s=!0},p(a,[c]){let u=e;e=i(a),e===u?l[e].p(a,c):(ge(),x(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){x(t),s=!1},d(a){l[e].d(a),a&&v(n)}}}function Ya(o,e,t){let n,{$$slots:s={},$$scope:r}=e,{depth:l}=e,{raw:i}=e,{text:a}=e;const{slug:c,getOptions:u}=en(gl),f=u();return o.$$set=p=>{"depth"in p&&t(0,l=p.depth),"raw"in p&&t(1,i=p.raw),"text"in p&&t(3,a=p.text),"$$scope"in p&&t(4,r=p.$$scope)},o.$$.update=()=>{o.$$.dirty&8&&t(2,n=f.headerIds?f.headerPrefix+c(a):void 0)},[l,i,n,a,r,s]}class Va extends Y{constructor(e){super(),Z(this,e,Ya,Za,K,{depth:0,raw:1,text:3})}}function Xa(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("p"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Qa(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Ja extends Y{constructor(e){super(),Z(this,e,Qa,Xa,K,{})}}function ec(o){let e;const t=o[3].default,n=Ae(t,o,o[2],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,[r]){n&&n.p&&(!e||r&4)&&Ne(n,t,s,s[2],e?Re(t,s[2],r,null):Me(s[2]),null)},i(s){e||($(n,s),e=!0)},o(s){x(n,s),e=!1},d(s){n&&n.d(s)}}}function tc(o,e,t){let{$$slots:n={},$$scope:s}=e,{text:r}=e,{raw:l}=e;return o.$$set=i=>{"text"in i&&t(0,r=i.text),"raw"in i&&t(1,l=i.raw),"$$scope"in i&&t(2,s=i.$$scope)},[r,l,s,n]}class nc extends Y{constructor(e){super(),Z(this,e,tc,ec,K,{text:0,raw:1})}}function oc(o){let e,t;return{c(){e=b("img"),Ge(e.src,t=o[0])||h(e,"src",t),h(e,"title",o[1]),h(e,"alt",o[2])},m(n,s){k(n,e,s)},p(n,[s]){s&1&&!Ge(e.src,t=n[0])&&h(e,"src",t),s&2&&h(e,"title",n[1]),s&4&&h(e,"alt",n[2])},i:ee,o:ee,d(n){n&&v(e)}}}function sc(o,e,t){let{href:n=""}=e,{title:s=void 0}=e,{text:r=""}=e;return o.$$set=l=>{"href"in l&&t(0,n=l.href),"title"in l&&t(1,s=l.title),"text"in l&&t(2,r=l.text)},[n,s,r]}class rc extends Y{constructor(e){super(),Z(this,e,sc,oc,K,{href:0,title:1,text:2})}}function lc(o){let e,t;const n=o[3].default,s=Ae(n,o,o[2],null);return{c(){e=b("a"),s&&s.c(),h(e,"href",o[0]),h(e,"title",o[1])},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&4)&&Ne(s,n,r,r[2],t?Re(n,r[2],l,null):Me(r[2]),null),(!t||l&1)&&h(e,"href",r[0]),(!t||l&2)&&h(e,"title",r[1])},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function ic(o,e,t){let{$$slots:n={},$$scope:s}=e,{href:r=""}=e,{title:l=void 0}=e;return o.$$set=i=>{"href"in i&&t(0,r=i.href),"title"in i&&t(1,l=i.title),"$$scope"in i&&t(2,s=i.$$scope)},[r,l,s,n]}class ac extends Y{constructor(e){super(),Z(this,e,ic,lc,K,{href:0,title:1})}}function cc(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("em"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function uc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class fc extends Y{constructor(e){super(),Z(this,e,uc,cc,K,{})}}function pc(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("del"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function dc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class gc extends Y{constructor(e){super(),Z(this,e,dc,pc,K,{})}}function mc(o){let e,t=o[0].replace(/`/g,"")+"",n;return{c(){e=b("code"),n=j(t)},m(s,r){k(s,e,r),d(e,n)},p(s,[r]){r&1&&t!==(t=s[0].replace(/`/g,"")+"")&&ke(n,t)},i:ee,o:ee,d(s){s&&v(e)}}}function hc(o,e,t){let{raw:n}=e;return o.$$set=s=>{"raw"in s&&t(0,n=s.raw)},[n]}class bc extends Y{constructor(e){super(),Z(this,e,hc,mc,K,{raw:0})}}function _c(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("strong"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function wc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class vc extends Y{constructor(e){super(),Z(this,e,wc,_c,K,{})}}function $c(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("table"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function kc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class yc extends Y{constructor(e){super(),Z(this,e,kc,$c,K,{})}}function xc(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("thead"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Tc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Sc extends Y{constructor(e){super(),Z(this,e,Tc,xc,K,{})}}function Ec(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("tbody"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Cc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Ac extends Y{constructor(e){super(),Z(this,e,Cc,Ec,K,{})}}function Rc(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("tr"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Nc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Mc extends Y{constructor(e){super(),Z(this,e,Nc,Rc,K,{})}}function Pc(o){let e,t;const n=o[3].default,s=Ae(n,o,o[2],null);return{c(){e=b("td"),s&&s.c(),h(e,"align",o[1])},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&4)&&Ne(s,n,r,r[2],t?Re(n,r[2],l,null):Me(r[2]),null),(!t||l&2)&&h(e,"align",r[1])},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function zc(o){let e,t;const n=o[3].default,s=Ae(n,o,o[2],null);return{c(){e=b("th"),s&&s.c(),h(e,"align",o[1])},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&4)&&Ne(s,n,r,r[2],t?Re(n,r[2],l,null):Me(r[2]),null),(!t||l&2)&&h(e,"align",r[1])},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Oc(o){let e,t,n,s;const r=[zc,Pc],l=[];function i(a,c){return a[0]?0:1}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),k(a,n,c),s=!0},p(a,[c]){let u=e;e=i(a),e===u?l[e].p(a,c):(ge(),x(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){x(t),s=!1},d(a){l[e].d(a),a&&v(n)}}}function Ic(o,e,t){let{$$slots:n={},$$scope:s}=e,{header:r}=e,{align:l}=e;return o.$$set=i=>{"header"in i&&t(0,r=i.header),"align"in i&&t(1,l=i.align),"$$scope"in i&&t(2,s=i.$$scope)},[r,l,s,n]}class Lc extends Y{constructor(e){super(),Z(this,e,Ic,Oc,K,{header:0,align:1})}}function Dc(o){let e,t;const n=o[3].default,s=Ae(n,o,o[2],null);return{c(){e=b("ul"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&4)&&Ne(s,n,r,r[2],t?Re(n,r[2],l,null):Me(r[2]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function jc(o){let e,t;const n=o[3].default,s=Ae(n,o,o[2],null);return{c(){e=b("ol"),s&&s.c(),h(e,"start",o[1])},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&4)&&Ne(s,n,r,r[2],t?Re(n,r[2],l,null):Me(r[2]),null),(!t||l&2)&&h(e,"start",r[1])},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Bc(o){let e,t,n,s;const r=[jc,Dc],l=[];function i(a,c){return a[0]?0:1}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),k(a,n,c),s=!0},p(a,[c]){let u=e;e=i(a),e===u?l[e].p(a,c):(ge(),x(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){x(t),s=!1},d(a){l[e].d(a),a&&v(n)}}}function Fc(o,e,t){let{$$slots:n={},$$scope:s}=e,{ordered:r}=e,{start:l}=e;return o.$$set=i=>{"ordered"in i&&t(0,r=i.ordered),"start"in i&&t(1,l=i.start),"$$scope"in i&&t(2,s=i.$$scope)},[r,l,s,n]}class Hc extends Y{constructor(e){super(),Z(this,e,Fc,Bc,K,{ordered:0,start:1})}}function Uc(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("li"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function qc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Kc extends Y{constructor(e){super(),Z(this,e,qc,Uc,K,{})}}function Wc(o){let e;return{c(){e=b("hr")},m(t,n){k(t,e,n)},p:ee,i:ee,o:ee,d(t){t&&v(e)}}}class Gc extends Y{constructor(e){super(),Z(this,e,null,Wc,K,{})}}function Zc(o){let e,t;return{c(){e=new el(!1),t=$e(),e.a=t},m(n,s){e.m(o[0],n,s),k(n,t,s)},p(n,[s]){s&1&&e.p(n[0])},i:ee,o:ee,d(n){n&&v(t),n&&e.d()}}}function Yc(o,e,t){let{text:n}=e;return o.$$set=s=>{"text"in s&&t(0,n=s.text)},[n]}class Vc extends Y{constructor(e){super(),Z(this,e,Yc,Zc,K,{text:0})}}function Xc(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("blockquote"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function Qc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Jc extends Y{constructor(e){super(),Z(this,e,Qc,Xc,K,{})}}function eu(o){let e,t,n;return{c(){e=b("pre"),t=b("code"),n=j(o[1]),h(e,"class",o[0])},m(s,r){k(s,e,r),d(e,t),d(t,n)},p(s,[r]){r&2&&ke(n,s[1]),r&1&&h(e,"class",s[0])},i:ee,o:ee,d(s){s&&v(e)}}}function tu(o,e,t){let{lang:n}=e,{text:s}=e;return o.$$set=r=>{"lang"in r&&t(0,n=r.lang),"text"in r&&t(1,s=r.text)},[n,s]}class nu extends Y{constructor(e){super(),Z(this,e,tu,eu,K,{lang:0,text:1})}}function ou(o){let e,t;const n=o[1].default,s=Ae(n,o,o[0],null);return{c(){e=b("br"),s&&s.c()},m(r,l){k(r,e,l),s&&s.m(r,l),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ne(s,n,r,r[0],t?Re(n,r[0],l,null):Me(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){x(s,r),t=!1},d(r){r&&v(e),s&&s.d(r)}}}function su(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class ru extends Y{constructor(e){super(),Z(this,e,su,ou,K,{})}}const lu={heading:Va,paragraph:Ja,text:nc,image:rc,link:ac,em:fc,strong:vc,codespan:bc,del:gc,table:yc,tablehead:Sc,tablebody:Ac,tablerow:Mc,tablecell:Lc,list:Hc,orderedlistitem:null,unorderedlistitem:null,listitem:Kc,hr:Gc,html:Vc,blockquote:Jc,code:nu,br:ru},iu={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function au(o){let e,t;return e=new Bt({props:{tokens:o[0],renderers:o[1]}}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},p(n,[s]){const r={};s&1&&(r.tokens=n[0]),s&2&&(r.renderers=n[1]),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function cu(o,e,t){let n,s,r,{source:l=""}=e,{renderers:i={}}=e,{options:a={}}=e,{isInline:c=!1}=e;const u=ho();let f,p,m;return bo(gl,{slug:g=>n?n.slug(g):"",getOptions:()=>s}),Dt(()=>{t(7,m=!0)}),o.$$set=g=>{"source"in g&&t(2,l=g.source),"renderers"in g&&t(3,i=g.renderers),"options"in g&&t(4,a=g.options),"isInline"in g&&t(5,c=g.isInline)},o.$$.update=()=>{o.$$.dirty&4&&(n=l?new yo:void 0),o.$$.dirty&16&&t(8,s=He(He({},iu),a)),o.$$.dirty&357&&(t(6,p=new bt(s)),t(0,f=c?p.inlineTokens(l):p.lex(l)),u("parsed",{tokens:f})),o.$$.dirty&8&&t(1,r=He(He({},lu),i)),o.$$.dirty&129&&m&&u("parsed",{tokens:f})},[f,r,l,i,a,c,p,m,s]}class Ft extends Y{constructor(e){super(),Z(this,e,cu,au,K,{source:2,renderers:3,options:4,isInline:5})}}function uu(o){let e,t,n;return t=new Ft({props:{source:Ji}}),{c(){e=b("section"),R(t.$$.fragment),h(e,"class","documentation")},m(s,r){k(s,e,r),C(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){x(t.$$.fragment,s),n=!1},d(s){s&&v(e),A(t)}}}class fu extends Y{constructor(e){super(),Z(this,e,null,uu,K,{})}}var xn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},xo={exports:{}};function To(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(function(e){var t=o[e];typeof t=="object"&&!Object.isFrozen(t)&&To(t)}),o}xo.exports=To;xo.exports.default=To;var pu=xo.exports;class Ss{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ml(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Et(o,...e){const t=Object.create(null);for(const n in o)t[n]=o[n];return e.forEach(function(n){for(const s in n)t[s]=n[s]}),t}const du="</span>",Es=o=>!!o.kind,gu=(o,{prefix:e})=>{if(o.includes(".")){const t=o.split(".");return[`${e}${t.shift()}`,...t.map((n,s)=>`${n}${"_".repeat(s+1)}`)].join(" ")}return`${e}${o}`};class mu{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=ml(e)}openNode(e){if(!Es(e))return;let t=e.kind;e.sublanguage?t=`language-${t}`:t=gu(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){!Es(e)||(this.buffer+=du)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class So{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(n=>this._walk(e,n)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&(!e.children||(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{So._collapse(t)})))}}class hu extends So{constructor(e){super(),this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new mu(this,this.options).value()}finalize(){return!0}}function fn(o){return o?typeof o=="string"?o:o.source:null}function hl(o){return Ht("(?=",o,")")}function bu(o){return Ht("(?:",o,")*")}function _u(o){return Ht("(?:",o,")?")}function Ht(...o){return o.map(t=>fn(t)).join("")}function wu(o){const e=o[o.length-1];return typeof e=="object"&&e.constructor===Object?(o.splice(o.length-1,1),e):{}}function Eo(...o){const e=wu(o);return"("+(e.capture?"":"?:")+o.map(n=>fn(n)).join("|")+")"}function bl(o){return new RegExp(o.toString()+"|").exec("").length-1}function vu(o,e){const t=o&&o.exec(e);return t&&t.index===0}const $u=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Co(o,{joinWith:e}){let t=0;return o.map(n=>{t+=1;const s=t;let r=fn(n),l="";for(;r.length>0;){const i=$u.exec(r);if(!i){l+=r;break}l+=r.substring(0,i.index),r=r.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?l+="\\"+String(Number(i[1])+s):(l+=i[0],i[0]==="("&&t++)}return l}).map(n=>`(${n})`).join(e)}const ku=/\b\B/,_l="[a-zA-Z]\\w*",Ao="[a-zA-Z_]\\w*",wl="\\b\\d+(\\.\\d+)?",vl="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",$l="\\b(0b[01]+)",yu="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",xu=(o={})=>{const e=/^#![ ]*\//;return o.binary&&(o.begin=Ht(e,/.*\b/,o.binary,/\b.*/)),Et({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,n)=>{t.index!==0&&n.ignoreMatch()}},o)},pn={begin:"\\\\[\\s\\S]",relevance:0},Tu={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[pn]},Su={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[pn]},Eu={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},qn=function(o,e,t={}){const n=Et({scope:"comment",begin:o,end:e,contains:[]},t);n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=Eo("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return n.contains.push({begin:Ht(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},Cu=qn("//","$"),Au=qn("/\\*","\\*/"),Ru=qn("#","$"),Nu={scope:"number",begin:wl,relevance:0},Mu={scope:"number",begin:vl,relevance:0},Pu={scope:"number",begin:$l,relevance:0},zu={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[pn,{begin:/\[/,end:/\]/,relevance:0,contains:[pn]}]}]},Ou={scope:"title",begin:_l,relevance:0},Iu={scope:"title",begin:Ao,relevance:0},Lu={begin:"\\.\\s*"+Ao,relevance:0},Du=function(o){return Object.assign(o,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var Tn=Object.freeze({__proto__:null,MATCH_NOTHING_RE:ku,IDENT_RE:_l,UNDERSCORE_IDENT_RE:Ao,NUMBER_RE:wl,C_NUMBER_RE:vl,BINARY_NUMBER_RE:$l,RE_STARTERS_RE:yu,SHEBANG:xu,BACKSLASH_ESCAPE:pn,APOS_STRING_MODE:Tu,QUOTE_STRING_MODE:Su,PHRASAL_WORDS_MODE:Eu,COMMENT:qn,C_LINE_COMMENT_MODE:Cu,C_BLOCK_COMMENT_MODE:Au,HASH_COMMENT_MODE:Ru,NUMBER_MODE:Nu,C_NUMBER_MODE:Mu,BINARY_NUMBER_MODE:Pu,REGEXP_MODE:zu,TITLE_MODE:Ou,UNDERSCORE_TITLE_MODE:Iu,METHOD_GUARD:Lu,END_SAME_AS_BEGIN:Du});function ju(o,e){o.input[o.index-1]==="."&&e.ignoreMatch()}function Bu(o,e){o.className!==void 0&&(o.scope=o.className,delete o.className)}function Fu(o,e){!e||!o.beginKeywords||(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ju,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function Hu(o,e){!Array.isArray(o.illegal)||(o.illegal=Eo(...o.illegal))}function Uu(o,e){if(!!o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function qu(o,e){o.relevance===void 0&&(o.relevance=1)}const Ku=(o,e)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},o);Object.keys(o).forEach(n=>{delete o[n]}),o.keywords=t.keywords,o.begin=Ht(t.beforeMatch,hl(t.begin)),o.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},o.relevance=0,delete t.beforeMatch},Wu=["of","and","for","in","not","or","if","then","parent","list","value"],Gu="keyword";function kl(o,e,t=Gu){const n=Object.create(null);return typeof o=="string"?s(t,o.split(" ")):Array.isArray(o)?s(t,o):Object.keys(o).forEach(function(r){Object.assign(n,kl(o[r],e,r))}),n;function s(r,l){e&&(l=l.map(i=>i.toLowerCase())),l.forEach(function(i){const a=i.split("|");n[a[0]]=[r,Zu(a[0],a[1])]})}}function Zu(o,e){return e?Number(e):Yu(o)?0:1}function Yu(o){return Wu.includes(o.toLowerCase())}const Cs={},It=o=>{console.error(o)},As=(o,...e)=>{console.log(`WARN: ${o}`,...e)},Yt=(o,e)=>{Cs[`${o}/${e}`]||(console.log(`Deprecated as of ${o}. ${e}`),Cs[`${o}/${e}`]=!0)},jn=new Error;function yl(o,e,{key:t}){let n=0;const s=o[t],r={},l={};for(let i=1;i<=e.length;i++)l[i+n]=s[i],r[i+n]=!0,n+=bl(e[i-1]);o[t]=l,o[t]._emit=r,o[t]._multi=!0}function Vu(o){if(!!Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw It("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),jn;if(typeof o.beginScope!="object"||o.beginScope===null)throw It("beginScope must be object"),jn;yl(o,o.begin,{key:"beginScope"}),o.begin=Co(o.begin,{joinWith:""})}}function Xu(o){if(!!Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw It("skip, excludeEnd, returnEnd not compatible with endScope: {}"),jn;if(typeof o.endScope!="object"||o.endScope===null)throw It("endScope must be object"),jn;yl(o,o.end,{key:"endScope"}),o.end=Co(o.end,{joinWith:""})}}function Qu(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function Ju(o){Qu(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),Vu(o),Xu(o)}function ef(o){function e(l,i){return new RegExp(fn(l),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,i]),this.matchAt+=bl(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(a=>a[1]);this.matcherRe=e(Co(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(i);if(!a)return null;const c=a.findIndex((f,p)=>p>0&&f!==void 0),u=this.matchIndexes[c];return a.splice(0,c),Object.assign(a,u)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const a=new t;return this.rules.slice(i).forEach(([c,u])=>a.addRule(c,u)),a.compile(),this.multiRegexes[i]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,a){this.rules.push([i,a]),a.type==="begin"&&this.count++}exec(i){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let c=a.exec(i);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(i)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function s(l){const i=new n;return l.contains.forEach(a=>i.addRule(a.begin,{rule:a,type:"begin"})),l.terminatorEnd&&i.addRule(l.terminatorEnd,{type:"end"}),l.illegal&&i.addRule(l.illegal,{type:"illegal"}),i}function r(l,i){const a=l;if(l.isCompiled)return a;[Bu,Uu,Ju,Ku].forEach(u=>u(l,i)),o.compilerExtensions.forEach(u=>u(l,i)),l.__beforeBegin=null,[Fu,Hu,qu].forEach(u=>u(l,i)),l.isCompiled=!0;let c=null;return typeof l.keywords=="object"&&l.keywords.$pattern&&(l.keywords=Object.assign({},l.keywords),c=l.keywords.$pattern,delete l.keywords.$pattern),c=c||/\w+/,l.keywords&&(l.keywords=kl(l.keywords,o.case_insensitive)),a.keywordPatternRe=e(c,!0),i&&(l.begin||(l.begin=/\B|\b/),a.beginRe=e(a.begin),!l.end&&!l.endsWithParent&&(l.end=/\B|\b/),l.end&&(a.endRe=e(a.end)),a.terminatorEnd=fn(a.end)||"",l.endsWithParent&&i.terminatorEnd&&(a.terminatorEnd+=(l.end?"|":"")+i.terminatorEnd)),l.illegal&&(a.illegalRe=e(l.illegal)),l.contains||(l.contains=[]),l.contains=[].concat(...l.contains.map(function(u){return tf(u==="self"?l:u)})),l.contains.forEach(function(u){r(u,a)}),l.starts&&r(l.starts,i),a.matcher=s(a),a}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=Et(o.classNameAliases||{}),r(o)}function xl(o){return o?o.endsWithParent||xl(o.starts):!1}function tf(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(e){return Et(o,{variants:null},e)})),o.cachedVariants?o.cachedVariants:xl(o)?Et(o,{starts:o.starts?Et(o.starts):null}):Object.isFrozen(o)?Et(o):o}var nf="11.5.0";class of extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const so=ml,Rs=Et,Ns=Symbol("nomatch"),sf=7,rf=function(o){const e=Object.create(null),t=Object.create(null),n=[];let s=!0;const r="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:hu};function a(D){return i.noHighlightRe.test(D)}function c(D){let U=D.className+" ";U+=D.parentNode?D.parentNode.className:"";const J=i.languageDetectRe.exec(U);if(J){const re=I(J[1]);return re||(As(r.replace("{}",J[1])),As("Falling back to no-highlight mode for this block.",D)),re?J[1]:"no-highlight"}return U.split(/\s+/).find(re=>a(re)||I(re))}function u(D,U,J){let re="",ce="";typeof U=="object"?(re=D,J=U.ignoreIllegals,ce=U.language):(Yt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Yt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ce=D,re=U),J===void 0&&(J=!0);const fe={code:re,language:ce};oe("before:highlight",fe);const Pe=fe.result?fe.result:f(fe.language,fe.code,J);return Pe.code=fe.code,oe("after:highlight",Pe),Pe}function f(D,U,J,re){const ce=Object.create(null);function fe(F,V){return F.keywords[V]}function Pe(){if(!ie.keywords){De.addText(_e);return}let F=0;ie.keywordPatternRe.lastIndex=0;let V=ie.keywordPatternRe.exec(_e),se="";for(;V;){se+=_e.substring(F,V.index);const H=Se.case_insensitive?V[0].toLowerCase():V[0],ue=fe(ie,H);if(ue){const[Le,Ce]=ue;if(De.addText(se),se="",ce[H]=(ce[H]||0)+1,ce[H]<=sf&&(Ze+=Ce),Le.startsWith("_"))se+=V[0];else{const Je=Se.classNameAliases[Le]||Le;De.addKeyword(V[0],Je)}}else se+=V[0];F=ie.keywordPatternRe.lastIndex,V=ie.keywordPatternRe.exec(_e)}se+=_e.substr(F),De.addText(se)}function Ie(){if(_e==="")return;let F=null;if(typeof ie.subLanguage=="string"){if(!e[ie.subLanguage]){De.addText(_e);return}F=f(ie.subLanguage,_e,!0,We[ie.subLanguage]),We[ie.subLanguage]=F._top}else F=m(_e,ie.subLanguage.length?ie.subLanguage:null);ie.relevance>0&&(Ze+=F.relevance),De.addSublanguage(F._emitter,F.language)}function ye(){ie.subLanguage!=null?Ie():Pe(),_e=""}function we(F,V){let se=1;const H=V.length-1;for(;se<=H;){if(!F._emit[se]){se++;continue}const ue=Se.classNameAliases[F[se]]||F[se],Le=V[se];ue?De.addKeyword(Le,ue):(_e=Le,Pe(),_e=""),se++}}function ne(F,V){return F.scope&&typeof F.scope=="string"&&De.openNode(Se.classNameAliases[F.scope]||F.scope),F.beginScope&&(F.beginScope._wrap?(De.addKeyword(_e,Se.classNameAliases[F.beginScope._wrap]||F.beginScope._wrap),_e=""):F.beginScope._multi&&(we(F.beginScope,V),_e="")),ie=Object.create(F,{parent:{value:ie}}),ie}function xe(F,V,se){let H=vu(F.endRe,se);if(H){if(F["on:end"]){const ue=new Ss(F);F["on:end"](V,ue),ue.isMatchIgnored&&(H=!1)}if(H){for(;F.endsParent&&F.parent;)F=F.parent;return F}}if(F.endsWithParent)return xe(F.parent,V,se)}function be(F){return ie.matcher.regexIndex===0?(_e+=F[0],1):(ot=!0,0)}function he(F){const V=F[0],se=F.rule,H=new Ss(se),ue=[se.__beforeBegin,se["on:begin"]];for(const Le of ue)if(!!Le&&(Le(F,H),H.isMatchIgnored))return be(V);return se.skip?_e+=V:(se.excludeBegin&&(_e+=V),ye(),!se.returnBegin&&!se.excludeBegin&&(_e=V)),ne(se,F),se.returnBegin?0:V.length}function te(F){const V=F[0],se=U.substr(F.index),H=xe(ie,F,se);if(!H)return Ns;const ue=ie;ie.endScope&&ie.endScope._wrap?(ye(),De.addKeyword(V,ie.endScope._wrap)):ie.endScope&&ie.endScope._multi?(ye(),we(ie.endScope,F)):ue.skip?_e+=V:(ue.returnEnd||ue.excludeEnd||(_e+=V),ye(),ue.excludeEnd&&(_e=V));do ie.scope&&De.closeNode(),!ie.skip&&!ie.subLanguage&&(Ze+=ie.relevance),ie=ie.parent;while(ie!==H.parent);return H.starts&&ne(H.starts,F),ue.returnEnd?0:V.length}function Te(){const F=[];for(let V=ie;V!==Se;V=V.parent)V.scope&&F.unshift(V.scope);F.forEach(V=>De.openNode(V))}let Ee={};function ve(F,V){const se=V&&V[0];if(_e+=F,se==null)return ye(),0;if(Ee.type==="begin"&&V.type==="end"&&Ee.index===V.index&&se===""){if(_e+=U.slice(V.index,V.index+1),!s){const H=new Error(`0 width match regex (${D})`);throw H.languageName=D,H.badRule=Ee.rule,H}return 1}if(Ee=V,V.type==="begin")return he(V);if(V.type==="illegal"&&!J){const H=new Error('Illegal lexeme "'+se+'" for mode "'+(ie.scope||"<unnamed>")+'"');throw H.mode=ie,H}else if(V.type==="end"){const H=te(V);if(H!==Ns)return H}if(V.type==="illegal"&&se==="")return 1;if(ft>1e5&&ft>V.index*3)throw new Error("potential infinite loop, way more iterations than matches");return _e+=se,se.length}const Se=I(D);if(!Se)throw It(r.replace("{}",D)),new Error('Unknown language: "'+D+'"');const ct=ef(Se);let ut="",ie=re||ct;const We={},De=new i.__emitter(i);Te();let _e="",Ze=0,Qe=0,ft=0,ot=!1;try{for(ie.matcher.considerAll();;){ft++,ot?ot=!1:ie.matcher.considerAll(),ie.matcher.lastIndex=Qe;const F=ie.matcher.exec(U);if(!F)break;const V=U.substring(Qe,F.index),se=ve(V,F);Qe=F.index+se}return ve(U.substr(Qe)),De.closeAllNodes(),De.finalize(),ut=De.toHTML(),{language:D,value:ut,relevance:Ze,illegal:!1,_emitter:De,_top:ie}}catch(F){if(F.message&&F.message.includes("Illegal"))return{language:D,value:so(U),illegal:!0,relevance:0,_illegalBy:{message:F.message,index:Qe,context:U.slice(Qe-100,Qe+100),mode:F.mode,resultSoFar:ut},_emitter:De};if(s)return{language:D,value:so(U),illegal:!1,relevance:0,errorRaised:F,_emitter:De,_top:ie};throw F}}function p(D){const U={value:so(D),illegal:!1,relevance:0,_top:l,_emitter:new i.__emitter(i)};return U._emitter.addText(D),U}function m(D,U){U=U||i.languages||Object.keys(e);const J=p(D),re=U.filter(I).filter(B).map(ye=>f(ye,D,!1));re.unshift(J);const ce=re.sort((ye,we)=>{if(ye.relevance!==we.relevance)return we.relevance-ye.relevance;if(ye.language&&we.language){if(I(ye.language).supersetOf===we.language)return 1;if(I(we.language).supersetOf===ye.language)return-1}return 0}),[fe,Pe]=ce,Ie=fe;return Ie.secondBest=Pe,Ie}function g(D,U,J){const re=U&&t[U]||J;D.classList.add("hljs"),D.classList.add(`language-${re}`)}function _(D){let U=null;const J=c(D);if(a(J))return;if(oe("before:highlightElement",{el:D,language:J}),D.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(D)),i.throwUnescapedHTML))throw new of("One of your code blocks includes unescaped HTML.",D.innerHTML);U=D;const re=U.textContent,ce=J?u(re,{language:J,ignoreIllegals:!0}):m(re);D.innerHTML=ce.value,g(D,J,ce.language),D.result={language:ce.language,re:ce.relevance,relevance:ce.relevance},ce.secondBest&&(D.secondBest={language:ce.secondBest.language,relevance:ce.secondBest.relevance}),oe("after:highlightElement",{el:D,result:ce,text:re})}function w(D){i=Rs(i,D)}const T=()=>{E(),Yt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function S(){E(),Yt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let N=!1;function E(){if(document.readyState==="loading"){N=!0;return}document.querySelectorAll(i.cssSelector).forEach(_)}function M(){N&&E()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",M,!1);function P(D,U){let J=null;try{J=U(o)}catch(re){if(It("Language definition for '{}' could not be registered.".replace("{}",D)),s)It(re);else throw re;J=l}J.name||(J.name=D),e[D]=J,J.rawDefinition=U.bind(null,o),J.aliases&&L(J.aliases,{languageName:D})}function z(D){delete e[D];for(const U of Object.keys(t))t[U]===D&&delete t[U]}function O(){return Object.keys(e)}function I(D){return D=(D||"").toLowerCase(),e[D]||e[t[D]]}function L(D,{languageName:U}){typeof D=="string"&&(D=[D]),D.forEach(J=>{t[J.toLowerCase()]=U})}function B(D){const U=I(D);return U&&!U.disableAutodetect}function q(D){D["before:highlightBlock"]&&!D["before:highlightElement"]&&(D["before:highlightElement"]=U=>{D["before:highlightBlock"](Object.assign({block:U.el},U))}),D["after:highlightBlock"]&&!D["after:highlightElement"]&&(D["after:highlightElement"]=U=>{D["after:highlightBlock"](Object.assign({block:U.el},U))})}function W(D){q(D),n.push(D)}function oe(D,U){const J=D;n.forEach(function(re){re[J]&&re[J](U)})}function Q(D){return Yt("10.7.0","highlightBlock will be removed entirely in v12.0"),Yt("10.7.0","Please use highlightElement now."),_(D)}Object.assign(o,{highlight:u,highlightAuto:m,highlightAll:E,highlightElement:_,highlightBlock:Q,configure:w,initHighlighting:T,initHighlightingOnLoad:S,registerLanguage:P,unregisterLanguage:z,listLanguages:O,getLanguage:I,registerAliases:L,autoDetection:B,inherit:Rs,addPlugin:W}),o.debugMode=function(){s=!1},o.safeMode=function(){s=!0},o.versionString=nf,o.regex={concat:Ht,lookahead:hl,either:Eo,optional:_u,anyNumberOfTimes:bu};for(const D in Tn)typeof Tn[D]=="object"&&pu(Tn[D]);return Object.assign(o,Tn),o};var dn=rf({}),lf=dn;dn.HighlightJS=dn;dn.default=dn;var Sn=lf;function af(o){const e=o.regex,t=e.concat(/[A-Z_]/,e.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),n=/[A-Za-z0-9._:-]+/,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},l=o.inherit(r,{begin:/\(/,end:/\)/}),i=o.inherit(o.APOS_STRING_MODE,{className:"string"}),a=o.inherit(o.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:n,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,a,i,l,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,l,a,i]}]}]},o.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Ms="[A-Za-z$_][0-9A-Za-z$_]*",cf=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],uf=["true","false","null","undefined","NaN","Infinity"],Tl=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Sl=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],El=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ff=["arguments","this","super","console","window","document","localStorage","module","global"],pf=[].concat(El,Tl,Sl);function df(o){const e=o.regex,t=(U,{after:J})=>{const re="</"+U[0].slice(1);return U.input.indexOf(re,J)!==-1},n=Ms,s={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(U,J)=>{const re=U[0].length+U.index,ce=U.input[re];if(ce==="<"||ce===","){J.ignoreMatch();return}ce===">"&&(t(U,{after:re})||J.ignoreMatch());let fe;if((fe=U.input.substr(re).match(/^\s+extends\s+/))&&fe.index===0){J.ignoreMatch();return}}},i={$pattern:Ms,keyword:cf,literal:uf,built_in:pf,"variable.language":ff},a="[0-9](_?[0-9])*",c=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},g={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,p],subLanguage:"css"}},_={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,p]},w=o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),T={className:"comment",variants:[w,o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},S=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,m,g,_,f];p.contains=S.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(S)});const N=[].concat(T,p.contains),E=N.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(N)}]),M={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:E},P={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,e.concat(n,"(",e.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},z={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Tl,...Sl]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},I={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[M],illegal:/%/},L={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function B(U){return e.concat("(?!",U.join("|"),")")}const q={match:e.concat(/\b/,B([...El,"super"]),n,e.lookahead(/\(/)),className:"title.function",relevance:0},W={begin:e.concat(/\./,e.lookahead(e.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},oe={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},M]},Q="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",D={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Q)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[M]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:E,CLASS_REFERENCE:z},illegal:/#(?![$_A-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,m,g,_,T,f,z,{className:"attr",begin:n+e.lookahead(":"),relevance:0},D,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,o.REGEXP_MODE,{className:"function",begin:Q,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:E}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:r},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}]},I,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[M,o.inherit(o.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},W,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[M]},q,L,P,oe,{match:/\$[(.]/}]}}const gf=o=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:o.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:o.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),mf=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],hf=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],bf=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],_f=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],wf=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function vf(o){const e=o.regex,t=gf(o),n={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},s="and or not only",r=/@-?\w[\w]*(-\w+)*/,l="[a-zA-Z-][a-zA-Z0-9_-]*",i=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,n,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+l,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+bf.join("|")+")"},{begin:":(:)?("+_f.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+wf.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...i,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:e.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:r},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:s,attribute:hf.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...i,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+mf.join("|")+")\\b"}]}}const $f=o=>({highlighted:o&2}),Ps=o=>({highlighted:o[1]});function kf(o){let e,t,n=[{"data-language":"svelte"},o[2]],s={};for(let r=0;r<n.length;r+=1)s=it(s,n[r]);return{c(){e=b("pre"),t=b("code"),h(t,"class","hljs"),Vo(e,s),Be(e,"langtag",o[0]),Be(e,"svelte-1xjucv4",!0)},m(r,l){k(r,e,l),d(e,t),t.innerHTML=o[1]},p(r,l){l&2&&(t.innerHTML=r[1]),Vo(e,s=jt(n,[{"data-language":"svelte"},l&4&&r[2]])),Be(e,"langtag",r[0]),Be(e,"svelte-1xjucv4",!0)},d(r){r&&v(e)}}}function yf(o){let e;const t=o[5].default,n=Ae(t,o,o[4],Ps),s=n||kf(o);return{c(){s&&s.c()},m(r,l){s&&s.m(r,l),e=!0},p(r,[l]){n?n.p&&(!e||l&18)&&Ne(n,t,r,r[4],e?Re(t,r[4],l,$f):Me(r[4]),Ps):s&&s.p&&(!e||l&7)&&s.p(r,e?l:-1)},i(r){e||($(s,r),e=!0)},o(r){x(s,r),e=!1},d(r){s&&s.d(r)}}}function xf(o,e,t){let n;const s=["code","langtag"];let r=Nn(e,s),{$$slots:l={},$$scope:i}=e,{code:a=void 0}=e,{langtag:c=!1}=e;const u=ho();return Sn.registerLanguage("xml",af),Sn.registerLanguage("javascript",df),Sn.registerLanguage("css",vf),gi(()=>{n&&u("highlight",{highlighted:n})}),o.$$set=f=>{e=it(it({},e),Yr(f)),t(2,r=Nn(e,s)),"code"in f&&t(3,a=f.code),"langtag"in f&&t(0,c=f.langtag),"$$scope"in f&&t(4,i=f.$$scope)},o.$$.update=()=>{o.$$.dirty&8&&t(1,n=Sn.highlightAuto(a).value)},[c,n,r,a,i,l]}class Xe extends Y{constructor(e){super(),Z(this,e,xf,yf,K,{code:3,langtag:0})}}function Tf(o){let e;return{c(){e=j("First")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Sf(o){let e;return{c(){e=j("Second")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Ef(o){let e;return{c(){e=j("Third")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function zs(o){let e,t;return e=new de({props:{$$slots:{default:[Cf]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},p(n,s){const r={};s&2050&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Cf(o){let e,t,n,s;return{c(){e=j("Fourth "),t=b("span"),t.textContent="\xD7"},m(r,l){k(r,e,l),k(r,t,l),n||(s=G(t,"click",o[4]),n=!0)},p:ee,d(r){r&&v(e),r&&v(t),n=!1,s()}}}function Os(o){let e,t;return e=new de({props:{$$slots:{default:[Af]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},p(n,s){const r={};s&2052&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Af(o){let e,t,n,s;return{c(){e=j("Fifth "),t=b("span"),t.textContent="\xD7"},m(r,l){k(r,e,l),k(r,t,l),n||(s=G(t,"click",o[5]),n=!0)},p:ee,d(r){r&&v(e),r&&v(t),n=!1,s()}}}function Rf(o){let e,t,n,s,r,l,i,a,c;e=new de({props:{$$slots:{default:[Tf]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Sf]},$$scope:{ctx:o}}}),r=new de({props:{disabled:o[0],$$slots:{default:[Ef]},$$scope:{ctx:o}}});let u=o[1]&&zs(o),f=o[2]&&Os(o);return{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),u&&u.c(),i=y(),f&&f.c(),a=$e()},m(p,m){C(e,p,m),k(p,t,m),C(n,p,m),k(p,s,m),C(r,p,m),k(p,l,m),u&&u.m(p,m),k(p,i,m),f&&f.m(p,m),k(p,a,m),c=!0},p(p,m){const g={};m&2048&&(g.$$scope={dirty:m,ctx:p}),e.$set(g);const _={};m&2048&&(_.$$scope={dirty:m,ctx:p}),n.$set(_);const w={};m&1&&(w.disabled=p[0]),m&2048&&(w.$$scope={dirty:m,ctx:p}),r.$set(w),p[1]?u?(u.p(p,m),m&2&&$(u,1)):(u=zs(p),u.c(),$(u,1),u.m(i.parentNode,i)):u&&(ge(),x(u,1,1,()=>{u=null}),me()),p[2]?f?(f.p(p,m),m&4&&$(f,1)):(f=Os(p),f.c(),$(f,1),f.m(a.parentNode,a)):f&&(ge(),x(f,1,1,()=>{f=null}),me())},i(p){c||($(e.$$.fragment,p),$(n.$$.fragment,p),$(r.$$.fragment,p),$(u),$(f),c=!0)},o(p){x(e.$$.fragment,p),x(n.$$.fragment,p),x(r.$$.fragment,p),x(u),x(f),c=!1},d(p){A(e,p),p&&v(t),A(n,p),p&&v(s),A(r,p),p&&v(l),u&&u.d(p),p&&v(i),f&&f.d(p),p&&v(a)}}}function Nf(o){let e;return{c(){e=b("div"),e.textContent="These are the first diamonds I ever took from my first mine."},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function Mf(o){let e;return{c(){e=b("div"),e.textContent="The second stage supplements the first stage by adding the second rail tunnel."},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function Pf(o){let e;return{c(){e=b("div"),e.textContent="Let's not worry about third or fourth place."},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function Is(o){let e,t;return e=new pe({props:{$$slots:{default:[zf]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function zf(o){let e;return{c(){e=b("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function Ls(o){let e,t;return e=new pe({props:{$$slots:{default:[Of]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Of(o){let e;return{c(){e=b("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function If(o){let e,t,n,s,r,l,i,a,c,u,f;e=new lt({props:{$$slots:{default:[Rf]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Nf]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[Mf]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[Pf]},$$scope:{ctx:o}}});let p=o[1]&&Is(o),m=o[2]&&Ls(o);return{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment),a=y(),p&&p.c(),c=y(),m&&m.c(),u=$e()},m(g,_){C(e,g,_),k(g,t,_),C(n,g,_),k(g,s,_),C(r,g,_),k(g,l,_),C(i,g,_),k(g,a,_),p&&p.m(g,_),k(g,c,_),m&&m.m(g,_),k(g,u,_),f=!0},p(g,_){const w={};_&2055&&(w.$$scope={dirty:_,ctx:g}),e.$set(w);const T={};_&2048&&(T.$$scope={dirty:_,ctx:g}),n.$set(T);const S={};_&2048&&(S.$$scope={dirty:_,ctx:g}),r.$set(S);const N={};_&2048&&(N.$$scope={dirty:_,ctx:g}),i.$set(N),g[1]?p?_&2&&$(p,1):(p=Is(g),p.c(),$(p,1),p.m(c.parentNode,c)):p&&(ge(),x(p,1,1,()=>{p=null}),me()),g[2]?m?_&4&&$(m,1):(m=Ls(g),m.c(),$(m,1),m.m(u.parentNode,u)):m&&(ge(),x(m,1,1,()=>{m=null}),me())},i(g){f||($(e.$$.fragment,g),$(n.$$.fragment,g),$(r.$$.fragment,g),$(i.$$.fragment,g),$(p),$(m),f=!0)},o(g){x(e.$$.fragment,g),x(n.$$.fragment,g),x(r.$$.fragment,g),x(i.$$.fragment,g),x(p),x(m),f=!1},d(g){A(e,g),g&&v(t),A(n,g),g&&v(s),A(r,g),g&&v(l),A(i,g),g&&v(a),p&&p.d(g),g&&v(c),m&&m.d(g),g&&v(u)}}}function Lf(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P,z,O,I,L,B,q,W={class:"mb-4",$$slots:{default:[If]},$$scope:{ctx:o}};return t=new rt({props:W}),o[6](t),I=new Xe({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=b("section"),R(t.$$.fragment),n=y(),s=b("div"),s.textContent="Use these controls to operate tabs.",r=y(),l=b("div"),i=b("label"),a=b("input"),c=j(" Fourth"),u=y(),f=b("label"),p=b("input"),m=j(" Fifth"),g=y(),_=b("label"),w=b("input"),T=j(" Disable Third"),S=y(),N=b("label"),E=j("Select\u2003"),M=b("input"),P=y(),z=b("h3"),z.textContent="Code",O=y(),R(I.$$.fragment),h(s,"class","py-2 border-t text-center text-gray-500"),h(a,"type","checkbox"),h(p,"type","checkbox"),h(w,"type","checkbox"),h(M,"class","input max-w-[6ch]"),h(M,"type","number"),h(M,"min","-5"),h(M,"max","4"),h(l,"class","flex items-center place-content-center gap-4"),h(e,"class","prose max-w-none my-4 svelte-1b9uk6h")},m(oe,Q){k(oe,e,Q),C(t,e,null),d(e,n),d(e,s),d(e,r),d(e,l),d(l,i),d(i,a),a.checked=o[1],d(i,c),d(l,u),d(l,f),d(f,p),p.checked=o[2],d(f,m),d(l,g),d(l,_),d(_,w),w.checked=o[0],d(_,T),d(l,S),d(l,N),d(N,E),d(N,M),d(e,P),d(e,z),d(e,O),C(I,e,null),L=!0,B||(q=[G(a,"change",o[7]),G(p,"change",o[8]),G(w,"change",o[9]),G(M,"change",ai(o[10]))],B=!0)},p(oe,[Q]){const D={};Q&2055&&(D.$$scope={dirty:Q,ctx:oe}),t.$set(D),Q&2&&(a.checked=oe[1]),Q&4&&(p.checked=oe[2]),Q&1&&(w.checked=oe[0])},i(oe){L||($(t.$$.fragment,oe),$(I.$$.fragment,oe),L=!0)},o(oe){x(t.$$.fragment,oe),x(I.$$.fragment,oe),L=!1},d(oe){oe&&v(e),o[6](null),A(t),A(I),B=!1,ze(q)}}}function Df(o,e,t){let n=!1,s=!1,r=!1,l;const i=()=>t(1,s=!1),a=()=>t(2,r=!1);function c(g){je[g?"unshift":"push"](()=>{l=g,t(3,l)})}function u(){s=this.checked,t(1,s)}function f(){r=this.checked,t(2,r)}function p(){n=this.checked,t(0,n)}return[n,s,r,l,i,a,c,u,f,p,g=>l.selectTab(+g.currentTarget.value)]}class jf extends Y{constructor(e){super(),Z(this,e,Df,Lf,K,{})}}function Bf(o){let e;return{c(){e=j("First-A")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Ff(o){let e;return{c(){e=j("First-B")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Hf(o){let e;return{c(){e=j("First-C")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Uf(o){let e;return{c(){e=j("First-D")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function qf(o){let e;return{c(){e=j("First-E")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Kf(o){let e,t,n,s,r,l,i,a,c,u;return e=new de({props:{$$slots:{default:[Bf]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Ff]},$$scope:{ctx:o}}}),r=new de({props:{disabled:!0,$$slots:{default:[Hf]},$$scope:{ctx:o}}}),i=new de({props:{$$slots:{default:[Uf]},$$scope:{ctx:o}}}),c=new de({props:{$$slots:{default:[qf]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment),a=y(),R(c.$$.fragment)},m(f,p){C(e,f,p),k(f,t,p),C(n,f,p),k(f,s,p),C(r,f,p),k(f,l,p),C(i,f,p),k(f,a,p),C(c,f,p),u=!0},p(f,p){const m={};p&2&&(m.$$scope={dirty:p,ctx:f}),e.$set(m);const g={};p&2&&(g.$$scope={dirty:p,ctx:f}),n.$set(g);const _={};p&2&&(_.$$scope={dirty:p,ctx:f}),r.$set(_);const w={};p&2&&(w.$$scope={dirty:p,ctx:f}),i.$set(w);const T={};p&2&&(T.$$scope={dirty:p,ctx:f}),c.$set(T)},i(f){u||($(e.$$.fragment,f),$(n.$$.fragment,f),$(r.$$.fragment,f),$(i.$$.fragment,f),$(c.$$.fragment,f),u=!0)},o(f){x(e.$$.fragment,f),x(n.$$.fragment,f),x(r.$$.fragment,f),x(i.$$.fragment,f),x(c.$$.fragment,f),u=!1},d(f){A(e,f),f&&v(t),A(n,f),f&&v(s),A(r,f),f&&v(l),A(i,f),f&&v(a),A(c,f)}}}function Wf(o){let e;return{c(){e=j("Second-A")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Gf(o){let e;return{c(){e=j("Second-B")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Zf(o){let e;return{c(){e=j("Second-C")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Yf(o){let e,t,n,s,r,l;return e=new de({props:{$$slots:{default:[Wf]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Gf]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[Zf]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment)},m(i,a){C(e,i,a),k(i,t,a),C(n,i,a),k(i,s,a),C(r,i,a),l=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){x(e.$$.fragment,i),x(n.$$.fragment,i),x(r.$$.fragment,i),l=!1},d(i){A(e,i),i&&v(t),A(n,i),i&&v(s),A(r,i)}}}function Vf(o){let e;return{c(){e=j("Fourth-A")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Xf(o){let e;return{c(){e=j("Fourth-B")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Qf(o){let e,t,n,s;return e=new de({props:{$$slots:{default:[Vf]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Xf]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment)},m(r,l){C(e,r,l),k(r,t,l),C(n,r,l),s=!0},p(r,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:r}),e.$set(i);const a={};l&2&&(a.$$scope={dirty:l,ctx:r}),n.$set(a)},i(r){s||($(e.$$.fragment,r),$(n.$$.fragment,r),s=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),s=!1},d(r){A(e,r),r&&v(t),A(n,r)}}}function Jf(o){let e,t=o[0]+"",n;return{c(){e=j("Fourth of Second-B. Tab: A, index "),n=j(t)},m(s,r){k(s,e,r),k(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ke(n,t)},d(s){s&&v(e),s&&v(n)}}}function ep(o){let e,t=o[0]+"",n;return{c(){e=j("Fourth of Second-B. Tab: B, index "),n=j(t)},m(s,r){k(s,e,r),k(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ke(n,t)},d(s){s&&v(e),s&&v(n)}}}function tp(o){let e,t,n,s,r,l;return e=new lt({props:{$$slots:{default:[Qf]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Jf,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[ep,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment)},m(i,a){C(e,i,a),k(i,t,a),C(n,i,a),k(i,s,a),C(r,i,a),l=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){x(e.$$.fragment,i),x(n.$$.fragment,i),x(r.$$.fragment,i),l=!1},d(i){A(e,i),i&&v(t),A(n,i),i&&v(s),A(r,i)}}}function np(o){let e,t,n=o[0]+"",s,r,l,i;return l=new rt({props:{class:"level-4",$$slots:{default:[tp]},$$scope:{ctx:o}}}),{c(){e=b("div"),t=j("Second of First-A. Tab: A, index "),s=j(n),r=y(),R(l.$$.fragment)},m(a,c){k(a,e,c),d(e,t),d(e,s),k(a,r,c),C(l,a,c),i=!0},p(a,c){(!i||c&1)&&n!==(n=a[0]+"")&&ke(s,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),l.$set(u)},i(a){i||($(l.$$.fragment,a),i=!0)},o(a){x(l.$$.fragment,a),i=!1},d(a){a&&v(e),a&&v(r),A(l,a)}}}function op(o){let e,t=o[0]+"",n;return{c(){e=j("Second of First-A. Tab: B, index "),n=j(t)},m(s,r){k(s,e,r),k(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ke(n,t)},d(s){s&&v(e),s&&v(n)}}}function sp(o){let e,t=o[0]+"",n;return{c(){e=j("Second of First-A. Tab: C, index "),n=j(t)},m(s,r){k(s,e,r),k(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ke(n,t)},d(s){s&&v(e),s&&v(n)}}}function rp(o){let e,t,n,s,r,l,i,a;return e=new lt({props:{$$slots:{default:[Yf]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[np,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[op,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[sp,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,s,u),C(r,c,u),k(c,l,u),C(i,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&3&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const m={};u&3&&(m.$$scope={dirty:u,ctx:c}),r.$set(m);const g={};u&3&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(r.$$.fragment,c),x(i.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(s),A(r,c),c&&v(l),A(i,c)}}}function lp(o){let e,t,n=o[0]+"",s,r,l,i;return l=new rt({props:{class:"level-2",$$slots:{default:[rp]},$$scope:{ctx:o}}}),{c(){e=b("div"),t=j("First level. Tab: A, index "),s=j(n),r=y(),R(l.$$.fragment)},m(a,c){k(a,e,c),d(e,t),d(e,s),k(a,r,c),C(l,a,c),i=!0},p(a,c){(!i||c&1)&&n!==(n=a[0]+"")&&ke(s,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),l.$set(u)},i(a){i||($(l.$$.fragment,a),i=!0)},o(a){x(l.$$.fragment,a),i=!1},d(a){a&&v(e),a&&v(r),A(l,a)}}}function ip(o){let e;return{c(){e=j("Third-A")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function ap(o){let e;return{c(){e=j("Third-B")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function cp(o){let e,t,n,s;return e=new de({props:{$$slots:{default:[ip]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[ap]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment)},m(r,l){C(e,r,l),k(r,t,l),C(n,r,l),s=!0},p(r,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:r}),e.$set(i);const a={};l&2&&(a.$$scope={dirty:l,ctx:r}),n.$set(a)},i(r){s||($(e.$$.fragment,r),$(n.$$.fragment,r),s=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),s=!1},d(r){A(e,r),r&&v(t),A(n,r)}}}function up(o){let e,t=o[0]+"",n;return{c(){e=j("Third of First-B. Tab: A, index "),n=j(t)},m(s,r){k(s,e,r),k(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ke(n,t)},d(s){s&&v(e),s&&v(n)}}}function fp(o){let e,t=o[0]+"",n;return{c(){e=j("Third of First-B. Tab: B, index "),n=j(t)},m(s,r){k(s,e,r),k(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ke(n,t)},d(s){s&&v(e),s&&v(n)}}}function pp(o){let e,t,n,s,r,l;return e=new lt({props:{$$slots:{default:[cp]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[up,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[fp,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment)},m(i,a){C(e,i,a),k(i,t,a),C(n,i,a),k(i,s,a),C(r,i,a),l=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){x(e.$$.fragment,i),x(n.$$.fragment,i),x(r.$$.fragment,i),l=!1},d(i){A(e,i),i&&v(t),A(n,i),i&&v(s),A(r,i)}}}function dp(o){let e,t,n=o[0]+"",s,r,l,i;return l=new rt({props:{class:"level-3",$$slots:{default:[pp]},$$scope:{ctx:o}}}),{c(){e=b("div"),t=j("First level. Tab: B, index "),s=j(n),r=y(),R(l.$$.fragment)},m(a,c){k(a,e,c),d(e,t),d(e,s),k(a,r,c),C(l,a,c),i=!0},p(a,c){(!i||c&1)&&n!==(n=a[0]+"")&&ke(s,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),l.$set(u)},i(a){i||($(l.$$.fragment,a),i=!0)},o(a){x(l.$$.fragment,a),i=!1},d(a){a&&v(e),a&&v(r),A(l,a)}}}function gp(o){let e,t=o[0]+"",n;return{c(){e=j("First level. Tab: C, index "),n=j(t)},m(s,r){k(s,e,r),k(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ke(n,t)},d(s){s&&v(e),s&&v(n)}}}function mp(o){let e,t=o[0]+"",n;return{c(){e=j("First level. Tab: D, index "),n=j(t)},m(s,r){k(s,e,r),k(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ke(n,t)},d(s){s&&v(e),s&&v(n)}}}function hp(o){let e,t=o[0]+"",n;return{c(){e=j("First level. Tab: E, index "),n=j(t)},m(s,r){k(s,e,r),k(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ke(n,t)},d(s){s&&v(e),s&&v(n)}}}function bp(o){let e,t,n,s,r,l,i,a,c,u,f,p;return e=new lt({props:{$$slots:{default:[Kf]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[lp,({index:m})=>({0:m}),({index:m})=>m?1:0]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[dp,({index:m})=>({0:m}),({index:m})=>m?1:0]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[gp,({index:m})=>({0:m}),({index:m})=>m?1:0]},$$scope:{ctx:o}}}),c=new pe({props:{$$slots:{default:[mp,({index:m})=>({0:m}),({index:m})=>m?1:0]},$$scope:{ctx:o}}}),f=new pe({props:{$$slots:{default:[hp,({index:m})=>({0:m}),({index:m})=>m?1:0]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment),a=y(),R(c.$$.fragment),u=y(),R(f.$$.fragment)},m(m,g){C(e,m,g),k(m,t,g),C(n,m,g),k(m,s,g),C(r,m,g),k(m,l,g),C(i,m,g),k(m,a,g),C(c,m,g),k(m,u,g),C(f,m,g),p=!0},p(m,g){const _={};g&2&&(_.$$scope={dirty:g,ctx:m}),e.$set(_);const w={};g&3&&(w.$$scope={dirty:g,ctx:m}),n.$set(w);const T={};g&3&&(T.$$scope={dirty:g,ctx:m}),r.$set(T);const S={};g&3&&(S.$$scope={dirty:g,ctx:m}),i.$set(S);const N={};g&3&&(N.$$scope={dirty:g,ctx:m}),c.$set(N);const E={};g&3&&(E.$$scope={dirty:g,ctx:m}),f.$set(E)},i(m){p||($(e.$$.fragment,m),$(n.$$.fragment,m),$(r.$$.fragment,m),$(i.$$.fragment,m),$(c.$$.fragment,m),$(f.$$.fragment,m),p=!0)},o(m){x(e.$$.fragment,m),x(n.$$.fragment,m),x(r.$$.fragment,m),x(i.$$.fragment,m),x(c.$$.fragment,m),x(f.$$.fragment,m),p=!1},d(m){A(e,m),m&&v(t),A(n,m),m&&v(s),A(r,m),m&&v(l),A(i,m),m&&v(a),A(c,m),m&&v(u),A(f,m)}}}function _p(o){let e,t,n,s,r,l,i;return t=new rt({props:{class:"level-1 min-h-[280px]",$$slots:{default:[bp]},$$scope:{ctx:o}}}),l=new Xe({props:{code:`<section class="prose max-w-none my-4">
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
</style>`}}),{c(){e=b("section"),R(t.$$.fragment),n=y(),s=b("h3"),s.textContent="Code",r=y(),R(l.$$.fragment),h(e,"class","prose max-w-none my-4 svelte-3sljvb")},m(a,c){k(a,e,c),C(t,e,null),d(e,n),d(e,s),d(e,r),C(l,e,null),i=!0},p(a,[c]){const u={};c&2&&(u.$$scope={dirty:c,ctx:a}),t.$set(u)},i(a){i||($(t.$$.fragment,a),$(l.$$.fragment,a),i=!0)},o(a){x(t.$$.fragment,a),x(l.$$.fragment,a),i=!1},d(a){a&&v(e),A(t),A(l)}}}class wp extends Y{constructor(e){super(),Z(this,e,null,_p,K,{})}}function Ds(o,e,t){const n=o.slice();return n[13]=e[t],n}function js(o,e,t){const n=o.slice();return n[17]=e[t],n}function Bs(o,e,t){const n=o.slice();return n[21]=e[t],n[23]=t,n}function Fs(o,e,t){const n=o.slice();return n[21]=e[t],n}function vp(o){let e,t,n={ctx:o,current:null,token:null,hasCatch:!0,pending:xp,then:yp,catch:kp,value:24,error:20};return zn(t=o[1],n),{c(){e=$e(),n.block.c()},m(s,r){k(s,e,r),n.block.m(s,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e},p(s,r){o=s,n.ctx=o,r&2&&t!==(t=o[1])&&zn(t,n)||sl(n,o,r)},d(s){s&&v(e),n.block.d(s),n.token=null,n=null}}}function $p(o){let e,t,n;return{c(){e=b("button"),e.textContent="Request authors",h(e,"class","input")},m(s,r){k(s,e,r),t||(n=G(e,"click",o[8]),t=!0)},p:ee,d(s){s&&v(e),t=!1,n()}}}function kp(o){let e,t,n,s=(o[20]instanceof Error?o[20].message:o[20])+"",r;return{c(){e=b("div"),t=j("Loading authors error: "),n=b("strong"),r=j(s),h(n,"class","text-red-600"),h(e,"class","text-red-400")},m(l,i){k(l,e,i),d(e,t),d(e,n),d(n,r)},p(l,i){i&2&&s!==(s=(l[20]instanceof Error?l[20].message:l[20])+"")&&ke(r,s)},d(l){l&&v(e)}}}function yp(o){let e,t,n,s,r,l,i,a,c,u,f=o[24],p=[];for(let m=0;m<f.length;m+=1)p[m]=Hs(Fs(o,f,m));return{c(){e=b("div"),t=b("select"),n=b("option"),s=j("Select author");for(let m=0;m<p.length;m+=1)p[m].c();r=y(),l=b("button"),i=j("Get quotes"),n.__value=void 0,n.value=n.__value,n.hidden=!0,h(t,"class","input"),o[2]===void 0&&st(()=>o[9].call(t)),h(l,"class","input"),l.disabled=a=o[2]==null},m(m,g){k(m,e,g),d(e,t),d(t,n),d(n,s);for(let _=0;_<p.length;_+=1)p[_].m(t,null);ht(t,o[2]),d(e,r),d(e,l),d(l,i),c||(u=[G(t,"change",o[9]),G(l,"click",o[10])],c=!0)},p(m,g){if(g&10){f=m[24];let _;for(_=0;_<f.length;_+=1){const w=Fs(m,f,_);p[_]?p[_].p(w,g):(p[_]=Hs(w),p[_].c(),p[_].m(t,null))}for(;_<p.length;_+=1)p[_].d(1);p.length=f.length}g&6&&ht(t,m[2]),g&6&&a!==(a=m[2]==null)&&(l.disabled=a)},d(m){m&&v(e),Fe(p,m),c=!1,ze(u)}}}function Hs(o){let e,t=o[21].name+"",n,s,r=o[21].quoteCount+"",l,i,a;return{c(){e=b("option"),n=j(t),s=j(": "),l=j(r),e.__value=i=o[21],e.value=e.__value,e.disabled=a=o[3].includes(o[21])},m(c,u){k(c,e,u),d(e,n),d(e,s),d(e,l)},p(c,u){u&2&&t!==(t=c[21].name+"")&&ke(n,t),u&2&&r!==(r=c[21].quoteCount+"")&&ke(l,r),u&2&&i!==(i=c[21])&&(e.__value=i,e.value=e.__value),u&10&&a!==(a=c[3].includes(c[21]))&&(e.disabled=a)},d(c){c&&v(e)}}}function xp(o){let e,t,n;return{c(){e=b("div"),t=y(),n=b("div"),n.textContent="Loading authors...",h(e,"class","text-blue-800 "+o[5]),h(n,"class","text-blue-800")},m(s,r){k(s,e,r),k(s,t,r),k(s,n,r)},p:ee,d(s){s&&v(e),s&&v(t),s&&v(n)}}}function Us(o){let e,t,n={class:"my-4 py-4 border-y border-gray-300",$$slots:{default:[Np]},$$scope:{ctx:o}};return e=new rt({props:n}),o[12](e),{c(){R(e.$$.fragment)},m(s,r){C(e,s,r),t=!0},p(s,r){const l={};r&134217752&&(l.$$scope={dirty:r,ctx:s}),e.$set(l)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){x(e.$$.fragment,s),t=!1},d(s){o[12](null),A(e,s)}}}function Tp(o){let e,t,n,s=o[21].name+"",r,l,i,a,c=o[21].quoteCount+"",u,f,p,m;function g(){return o[11](o[23])}return{c(){e=b("button"),e.textContent="\xD7",t=y(),n=b("span"),r=j(s),i=y(),a=b("span"),u=j(c),f=y(),h(e,"class","text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"),h(n,"class","grow text-left overflow-hidden text-ellipsis whitespace-nowrap"),h(n,"title",l=o[21].name),h(a,"class","text-xs px-1 rounded-md bg-gray-600 text-white font-bold")},m(_,w){k(_,e,w),k(_,t,w),k(_,n,w),d(n,r),k(_,i,w),k(_,a,w),d(a,u),k(_,f,w),p||(m=G(e,"click",g),p=!0)},p(_,w){o=_,w&8&&s!==(s=o[21].name+"")&&ke(r,s),w&8&&l!==(l=o[21].name)&&h(n,"title",l),w&8&&c!==(c=o[21].quoteCount+"")&&ke(u,c)},d(_){_&&v(e),_&&v(t),_&&v(n),_&&v(i),_&&v(a),_&&v(f),p=!1,m()}}}function qs(o){let e,t;return e=new de({props:{class:"flex items-center gap-2",$$slots:{default:[Tp]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},p(n,s){const r={};s&134217736&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Sp(o){let e,t,n=o[3],s=[];for(let l=0;l<n.length;l+=1)s[l]=qs(Bs(o,n,l));const r=l=>x(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);k(l,e,i),t=!0},p(l,i){if(i&136){n=l[3];let a;for(a=0;a<n.length;a+=1){const c=Bs(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=qs(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(ge(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)x(s[i]);t=!1},d(l){Fe(s,l),l&&v(e)}}}function Ep(o){let e,t,n,s,r,l,i=(o[20]instanceof Error?o[20].message:o[20])+"",a;return{c(){e=b("div"),t=b("div"),n=b("div"),n.textContent="Loading quotes error",s=y(),r=b("div"),l=b("strong"),a=j(i),h(n,"class","text-red-400"),h(l,"class","text-red-600"),h(t,"class","flex flex-col items-center"),h(e,"class","h-full flex items-center justify-center")},m(c,u){k(c,e,u),d(e,t),d(t,n),d(t,s),d(t,r),d(r,l),d(l,a)},p(c,u){u&16&&i!==(i=(c[20]instanceof Error?c[20].message:c[20])+"")&&ke(a,i)},d(c){c&&v(e)}}}function Cp(o){let e,t=o[16],n=[];for(let s=0;s<t.length;s+=1)n[s]=Ks(js(o,t,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=$e()},m(s,r){for(let l=0;l<n.length;l+=1)n[l].m(s,r);k(s,e,r)},p(s,r){if(r&16){t=s[16];let l;for(l=0;l<t.length;l+=1){const i=js(s,t,l);n[l]?n[l].p(i,r):(n[l]=Ks(i),n[l].c(),n[l].m(e.parentNode,e))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}},d(s){Fe(n,s),s&&v(e)}}}function Ks(o){let e,t,n,s,r,l=o[17].en+"",i,a,c,u=o[17].author+"",f,p;return{c(){e=b("div"),t=b("span"),t.textContent="\u201C",n=y(),s=b("div"),r=b("div"),i=j(l),a=y(),c=b("div"),f=j(u),p=y(),h(t,"class","text-gray-200 text-7xl font-bold leading-[75%] mr-2"),h(r,"class","mb-3 leading-6"),h(c,"class","font-semibold italic text-right"),h(s,"class","grow"),h(e,"class","mb-2 last:mb-0 flex items-start")},m(m,g){k(m,e,g),d(e,t),d(e,n),d(e,s),d(s,r),d(r,i),d(s,a),d(s,c),d(c,f),d(e,p)},p(m,g){g&16&&l!==(l=m[17].en+"")&&ke(i,l),g&16&&u!==(u=m[17].author+"")&&ke(f,u)},d(m){m&&v(e)}}}function Ap(o){let e,t,n,s,r;return{c(){e=b("div"),t=b("div"),n=b("div"),s=y(),r=b("div"),r.textContent="Loading quotes...",h(n,"class","text-blue-800 w-12 h-12 "+o[5]),h(r,"class","text-blue-800"),h(t,"class","flex flex-col items-center"),h(e,"class","h-full flex items-center justify-center")},m(l,i){k(l,e,i),d(e,t),d(t,n),d(t,s),d(t,r)},p:ee,d(l){l&&v(e)}}}function Rp(o){let e,t,n={ctx:o,current:null,token:null,hasCatch:!0,pending:Ap,then:Cp,catch:Ep,value:16,error:20};return zn(e=o[13],n),{c(){n.block.c(),t=y()},m(s,r){n.block.m(s,n.anchor=r),n.mount=()=>t.parentNode,n.anchor=t,k(s,t,r)},p(s,r){o=s,n.ctx=o,r&16&&e!==(e=o[13])&&zn(e,n)||sl(n,o,r)},d(s){n.block.d(s),n.token=null,n=null,s&&v(t)}}}function Ws(o){let e,t;return e=new pe({props:{class:"px-4",$$slots:{default:[Rp]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},p(n,s){const r={};s&134217744&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Np(o){let e,t,n,s;e=new lt({props:{class:"basis-[24ch] shrink-0",$$slots:{default:[Sp]},$$scope:{ctx:o}}});let r=o[4],l=[];for(let a=0;a<r.length;a+=1)l[a]=Ws(Ds(o,r,a));const i=a=>x(l[a],1,1,()=>{l[a]=null});return{c(){R(e.$$.fragment),t=y(),n=b("div");for(let a=0;a<l.length;a+=1)l[a].c();h(n,"class","grow")},m(a,c){C(e,a,c),k(a,t,c),k(a,n,c);for(let u=0;u<l.length;u+=1)l[u].m(n,null);s=!0},p(a,c){const u={};if(c&134217736&&(u.$$scope={dirty:c,ctx:a}),e.$set(u),c&48){r=a[4];let f;for(f=0;f<r.length;f+=1){const p=Ds(a,r,f);l[f]?(l[f].p(p,c),$(l[f],1)):(l[f]=Ws(p),l[f].c(),$(l[f],1),l[f].m(n,null))}for(ge(),f=r.length;f<l.length;f+=1)i(f);me()}},i(a){if(!s){$(e.$$.fragment,a);for(let c=0;c<r.length;c+=1)$(l[c]);s=!0}},o(a){x(e.$$.fragment,a),l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)x(l[c]);s=!1},d(a){A(e,a),a&&v(t),a&&v(n),Fe(l,a)}}}function Mp(o){let e,t,n,s,r,l,i,a,c,u;function f(_,w){return _[1]==null?$p:vp}let p=f(o),m=p(o),g=o[3].length&&Us(o);return c=new Xe({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=b("section"),t=b("div"),t.innerHTML=`Example of vertical tab layout. Thanks to the authors of <a target="_blank" href="https://github.com/skolakoda">\u0160kola koda</a>
    for the useful and convenient
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api">API</a>`,n=y(),s=b("div"),m.c(),r=y(),g&&g.c(),l=y(),i=b("h3"),i.textContent="Code",a=y(),R(c.$$.fragment),h(t,"class","mb-4 text-center"),h(s,"class","flex items-center justify-center gap-2"),h(e,"class","prose max-w-none my-4 svelte-unmfi5")},m(_,w){k(_,e,w),d(e,t),d(e,n),d(e,s),m.m(s,null),d(e,r),g&&g.m(e,null),d(e,l),d(e,i),d(e,a),C(c,e,null),u=!0},p(_,[w]){p===(p=f(_))&&m?m.p(_,w):(m.d(1),m=p(_),m&&(m.c(),m.m(s,null))),_[3].length?g?(g.p(_,w),w&8&&$(g,1)):(g=Us(_),g.c(),$(g,1),g.m(e,l)):g&&(ge(),x(g,1,1,()=>{g=null}),me())},i(_){u||($(g),$(c.$$.fragment,_),u=!0)},o(_){x(g),x(c.$$.fragment,_),u=!1},d(_){_&&v(e),m.d(),g&&g.d(),A(c)}}}const Cl="https://programming-quotes-api.herokuapp.com";function Pp(){return Ye(this,null,function*(){const o=yield fetch(Cl+"/Authors");if(o.status>=400){const n=yield o.text();throw new Error(`${o.status}: ${n||o.statusText}`)}const e=o.headers.get("content-type");if(!e||!e.includes("application/json"))throw new TypeError("Wrong content-type");const t=yield o.json();return Object.values(t).sort((n,s)=>n.name.localeCompare(s.name))})}function zp(o){return Ye(this,null,function*(){const e=yield fetch(Cl+"/Quotes/author/"+o);if(e.status>=400){const n=yield e.text();throw new Error(`${e.status}: ${n||e.statusText}`)}const t=e.headers.get("content-type");if(!t||!t.includes("application/json"))throw new TypeError("Wrong content-type");return yield e.json()})}function Op(o,e,t){const n="w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin";let s,r,l,i=[],a=[];function c(w){return w!=null&&!i.includes(w)?(t(3,i=[w,...i]),t(4,a=[zp(w.name),...a]),s==null||s.selectTab(0),!0):!1}function u(w){w>=0&&w<i.length&&(t(3,i=[...i.slice(0,w),...i.slice(w+1)]),t(4,a=[...a.slice(0,w),...a.slice(w+1)]))}const f=()=>{t(1,r=Pp())};function p(){l=cn(this),t(2,l),t(1,r)}const m=()=>c(l)?t(2,l=void 0):void 0,g=w=>u(w);function _(w){je[w?"unshift":"push"](()=>{s=w,t(0,s)})}return[s,r,l,i,a,n,c,u,f,p,m,g,_]}class Ip extends Y{constructor(e){super(),Z(this,e,Op,Mp,K,{})}}const{document:Gs}=Mt;function Lp(o){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Dp(o){let e;return{c(){e=j("Base example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function jp(o){let e;return{c(){e=j("Nested Example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Bp(o){let e;return{c(){e=j("Quotes Example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Fp(o){let e,t,n,s,r,l,i,a;return e=new de({props:{$$slots:{default:[Lp]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Dp]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[jp]},$$scope:{ctx:o}}}),i=new de({props:{$$slots:{default:[Bp]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,s,u),C(r,c,u),k(c,l,u),C(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(r.$$.fragment,c),x(i.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(s),A(r,c),c&&v(l),A(i,c)}}}function Hp(o){let e,t;return e=new fu({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Up(o){let e,t;return e=new jf({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function qp(o){let e,t;return e=new wp({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Kp(o){let e,t;return e=new Ip({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Wp(o){let e,t,n,s,r,l,i,a,c,u;return e=new lt({props:{$$slots:{default:[Fp]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Hp]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[Up]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[qp]},$$scope:{ctx:o}}}),c=new pe({props:{$$slots:{default:[Kp]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment),a=y(),R(c.$$.fragment)},m(f,p){C(e,f,p),k(f,t,p),C(n,f,p),k(f,s,p),C(r,f,p),k(f,l,p),C(i,f,p),k(f,a,p),C(c,f,p),u=!0},p(f,p){const m={};p&1&&(m.$$scope={dirty:p,ctx:f}),e.$set(m);const g={};p&1&&(g.$$scope={dirty:p,ctx:f}),n.$set(g);const _={};p&1&&(_.$$scope={dirty:p,ctx:f}),r.$set(_);const w={};p&1&&(w.$$scope={dirty:p,ctx:f}),i.$set(w);const T={};p&1&&(T.$$scope={dirty:p,ctx:f}),c.$set(T)},i(f){u||($(e.$$.fragment,f),$(n.$$.fragment,f),$(r.$$.fragment,f),$(i.$$.fragment,f),$(c.$$.fragment,f),u=!0)},o(f){x(e.$$.fragment,f),x(n.$$.fragment,f),x(r.$$.fragment,f),x(i.$$.fragment,f),x(c.$$.fragment,f),u=!1},d(f){A(e,f),f&&v(t),A(n,f),f&&v(s),A(r,f),f&&v(l),A(i,f),f&&v(a),A(c,f)}}}function Gp(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_;return Gs.title=e=document.title.replace(/(•).*$/,"$1 Tabs"),g=new rt({props:{$$slots:{default:[Wp]},$$scope:{ctx:o}}}),{c(){t=y(),n=b("section"),s=b("a"),s.textContent="Home",r=y(),l=b("h1"),l.textContent="A set of components for organizing a tabbed interface",i=y(),a=b("a"),c=b("img"),f=y(),p=b("ul"),p.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>with context to control tab switching</li>`,m=y(),R(g.$$.fragment),h(s,"class","float-right"),h(s,"href","/"),h(l,"class","text-2xl"),h(c,"class","max-w-[4em]"),Ge(c.src,u=et)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/tabs"),h(a,"target","_blank"),h(p,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m(w,T){k(w,t,T),k(w,n,T),d(n,s),d(n,r),d(n,l),d(n,i),d(n,a),d(a,c),d(n,f),d(n,p),d(n,m),C(g,n,null),_=!0},p(w,[T]){(!_||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Tabs"))&&(Gs.title=e);const S={};T&1&&(S.$$scope={dirty:T,ctx:w}),g.$set(S)},i(w){_||($(g.$$.fragment,w),_=!0)},o(w){x(g.$$.fragment,w),_=!1},d(w){w&&v(t),w&&v(n),A(g)}}}class Zp extends Y{constructor(e){super(),Z(this,e,null,Gp,K,{})}}var Yp=`<div class="component__source">Source <code>Notifications.svelte</code></div>
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
<p>The package exports two style sheets: <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/style.css" target="_blank"><code>style.css</code></a> and <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/bootstrap-like.css" target="_blank"><code>bootstrap-like.css</code></a>.</p>
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
<td class="exports__description">Store of notifications</td></tr></table>`;function Vp(o){let e,t,n;return t=new Ft({props:{source:Yp}}),{c(){e=b("section"),R(t.$$.fragment),h(e,"class","documentation")},m(s,r){k(s,e,r),C(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){x(t.$$.fragment,s),n=!1},d(s){s&&v(e),A(t)}}}class Xp extends Y{constructor(e){super(),Z(this,e,null,Vp,K,{})}}var Qp=`.c-notifications {
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
`,Jp=`.c-notifications {
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
`;function ed(o){return o<.5?4*o*o*o:.5*Math.pow(2*o-2,3)+1}function Al(o){const e=o-1;return e*e*e+1}function td(o,{delay:e=0,duration:t=400,easing:n=ed,amount:s=5,opacity:r=0}={}){const l=getComputedStyle(o),i=+l.opacity,a=l.filter==="none"?"":l.filter,c=i*(1-r);return{delay:e,duration:t,easing:n,css:(u,f)=>`opacity: ${i-c*f}; filter: ${a} blur(${f*s}px);`}}function nd(o,{delay:e=0,duration:t=400,easing:n=Kr}={}){const s=+getComputedStyle(o).opacity;return{delay:e,duration:t,easing:n,css:r=>`opacity: ${r*s}`}}function Jt(o,{delay:e=0,duration:t=400,easing:n=Al}={}){const s=getComputedStyle(o),r=+s.opacity,l=parseFloat(s.height),i=parseFloat(s.paddingTop),a=parseFloat(s.paddingBottom),c=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),f=parseFloat(s.borderTopWidth),p=parseFloat(s.borderBottomWidth);return{delay:e,duration:t,easing:n,css:m=>`overflow: hidden;opacity: ${Math.min(m*20,1)*r};height: ${m*l}px;padding-top: ${m*i}px;padding-bottom: ${m*a}px;margin-top: ${m*c}px;margin-bottom: ${m*u}px;border-top-width: ${m*f}px;border-bottom-width: ${m*p}px;`}}function od(o,{delay:e=0,duration:t=400,easing:n=Al,start:s=0,opacity:r=0}={}){const l=getComputedStyle(o),i=+l.opacity,a=l.transform==="none"?"":l.transform,c=1-s,u=i*(1-r);return{delay:e,duration:t,easing:n,css:(f,p)=>`
			transform: ${a} scale(${1-c*p});
			opacity: ${i-u*p}
		`}}function Zs(o,e,t){const n=o.slice();return n[8]=e[t],n}const sd=o=>({notification:o&16}),Ys=o=>({notification:o[8]});function rd(o){let e,t,n=(o[8].message||"No message")+"",s,r,l,i,a,c,u,f;function p(){return o[7](o[8])}return{c(){e=b("div"),t=b("span"),s=y(),r=b("span"),l=y(),h(t,"class","c-notifications__item__message"),h(r,"role","button"),h(r,"aria-label","Close notification"),h(r,"class","c-notifications__item__close"),h(e,"class",i="c-notifications__item"+(o[8].type?" "+o[8].type:""))},m(m,g){k(m,e,g),d(e,t),t.innerHTML=n,d(e,s),d(e,r),d(e,l),c=!0,u||(f=G(r,"click",p),u=!0)},p(m,g){o=m,(!c||g&16)&&n!==(n=(o[8].message||"No message")+"")&&(t.innerHTML=n),(!c||g&16&&i!==(i="c-notifications__item"+(o[8].type?" "+o[8].type:"")))&&h(e,"class",i)},i(m){c||(st(()=>{a||(a=Ct(e,o[2],o[3],!0)),a.run(1)}),c=!0)},o(m){a||(a=Ct(e,o[2],o[3],!1)),a.run(0),c=!1},d(m){m&&v(e),m&&a&&a.end(),u=!1,f()}}}function Vs(o,e){let t,n;const s=e[6].default,r=Ae(s,e,e[5],Ys),l=r||rd(e);return{key:o,first:null,c(){t=$e(),l&&l.c(),this.first=t},m(i,a){k(i,t,a),l&&l.m(i,a),n=!0},p(i,a){e=i,r?r.p&&(!n||a&48)&&Ne(r,s,e,e[5],n?Re(s,e[5],a,sd):Me(e[5]),Ys):l&&l.p&&(!n||a&24)&&l.p(e,n?a:-1)},i(i){n||($(l,i),n=!0)},o(i){x(l,i),n=!1},d(i){i&&v(t),l&&l.d(i)}}}function ld(o){let e,t=[],n=new Map,s,r,l,i=o[4];const a=c=>c[8].id;for(let c=0;c<i.length;c+=1){let u=Zs(o,i,c),f=a(u);n.set(f,t[c]=Vs(f,u))}return{c(){e=b("div");for(let c=0;c<t.length;c+=1)t[c].c();h(e,"class",s="c-notifications"+(o[0]?" "+o[0]:"")),h(e,"style",r=o[1]||void 0)},m(c,u){k(c,e,u);for(let f=0;f<t.length;f+=1)t[f].m(e,null);l=!0},p(c,[u]){u&56&&(i=c[4],ge(),t=vi(t,u,a,1,c,i,n,e,wi,Vs,null,Zs),me()),(!l||u&1&&s!==(s="c-notifications"+(c[0]?" "+c[0]:"")))&&h(e,"class",s),(!l||u&2&&r!==(r=c[1]||void 0))&&h(e,"style",r)},i(c){if(!l){for(let u=0;u<i.length;u+=1)$(t[u]);l=!0}},o(c){for(let u=0;u<t.length;u+=1)x(t[u]);l=!1},d(c){c&&v(e);for(let u=0;u<t.length;u+=1)t[u].d()}}}let Rn=!1;const Bn=function(){const{subscribe:o,set:e,update:t}=Qt([]);return{subscribe:o,clear(){e([])},push(n){if(!Rn)throw new Error("No Notification component instance");const s=He({id:Symbol("Notification")},n);return t(r=>[...r,s]),n.timeout&&n.timeout>0&&setTimeout(()=>this.pop(s.id),n.timeout),s.id},pop(n){t(s=>{const r=s.findIndex(l=>l.id===n);return r>=0&&s.splice(r,1),s})}}}();function id(o,e,t){let n,s=ee;Vt(o,Bn,p=>t(4,n=p)),o.$$.on_destroy.push(()=>s());let{$$slots:r={},$$scope:l}=e,{class:i=""}=e,{style:a=""}=e,{transitionFn:c=Jt}=e,{transitionParams:u={}}=e;Dt(()=>{if(Rn)throw new Error("The Notifications component already has an instance");Rn=!0}),ao(()=>Rn=!1);const f=p=>Bn.pop(p.id);return o.$$set=p=>{"class"in p&&t(0,i=p.class),"style"in p&&t(1,a=p.style),"transitionFn"in p&&t(2,c=p.transitionFn),"transitionParams"in p&&t(3,u=p.transitionParams),"$$scope"in p&&t(5,l=p.$$scope)},[i,a,c,u,n,l,r,f]}class ad extends Y{constructor(e){super(),Z(this,e,id,ld,K,{class:0,style:1,transitionFn:2,transitionParams:3})}}var ro=[{author:"Edsger W. Dijkstra",en:"Computer Science is no more about computers than astronomy is about telescopes."},{author:"Edsger W. Dijkstra",en:"Simplicity is prerequisite for reliability."},{author:"Edsger W. Dijkstra",en:"The computing scientist\u2019s main challenge is not to get confused by the complexities of his own making."},{author:"Edsger W. Dijkstra",en:"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},{author:"Edsger W. Dijkstra",en:"A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure \u201Eprogrammer productivity\u201C in terms of \u201Enumber of lines of code produced\u201C. In so doing they book that number on the wrong side of the ledger: We should always refer to \u201Ethe number of lines of code spent\u201C."},{author:"Tony Hoare",en:"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},{author:"Jeff Hammerbacher",en:"The best minds of my generation are thinking about how to make people click ads."},{author:"Edsger W. Dijkstra",en:"The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities."},{author:"Edsger W. Dijkstra",en:'How do we convince people that in programming simplicity and clarity \u2014 in short: what mathematicians call "elegance" \u2014 are not a dispensable luxury, but a crucial matter that decides between success and failure?'},{author:"Fred Brooks",en:"Adding manpower to a late software project makes it later."},{author:"Michael Stal",en:"Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person."},{author:"Fred Brooks",en:"Nine women can't make a baby in one month."},{author:"Jeff Sickel",en:"Deleted code is debugged code."},{author:"Ken Thompson",en:"When in doubt, use brute force."},{author:"Fred Brooks",en:"When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned."},{author:"Fred Brooks",en:"If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two."},{author:"Fred Brooks",en:"Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect."},{author:"Fred Brooks",en:"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures."},{author:"Fred Brooks",en:'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.'},{author:"Donald Knuth",en:"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%."},{author:"Ken Thompson",en:"One of my most productive days was throwing away 1,000 lines of code."},{author:"Grace Hopper",en:"One accurate measurement is worth more than a thousand expert opinions."},{author:"Fred Brooks",en:"What one programmer can do in one month, two programmers can do in two months."},{author:"Rick Osborne",en:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},{author:"John Ousterhout",en:"A program that produces incorrect results twice as fast is infinitely slower."},{author:"Poul Anderson",en:"I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated."},{author:"Robert C. Martin",en:"Cleaning code does NOT take time. NOT cleaning code does take time."},{author:"David Gelernter",en:"Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity."},{author:"Edward V. Berard",en:"Walking on water and developing software from a specification are easy if both are frozen."},{author:"Brian Kernighan",en:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},{author:"Brian Kernighan",en:"Controlling complexity is the essence of computer programming."},{author:"Chris Wenham",en:"Debugging time increases as a square of the program\u2019s size."},{author:"Seymour Cray",en:"The trouble with programmers is that you can never tell what a programmer is doing until it\u2019s too late."},{author:"Ron Jeffries",en:"Code never lies, comments sometimes do."},{author:"Laurence J. Peter",en:"Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them."},{author:"Poul-Henning Kamp",en:'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.'},{author:"Albert Einstein",en:"I have no special talent. I am only passionately curious."},{author:"Robert C. Martin",en:"The proper use of comments is to compensate for our failure to express ourself in code."},{author:"Rob Pike",en:"When there is no type hierarchy you don\u2019t have to manage the type hierarchy."},{author:"Steve Jobs",en:"Everybody should learn to program a computer, because it teaches you how to think."},{author:"Chris Sacca",en:"Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for."},{author:"Bill Gates",en:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},{author:"William Wulf",en:"More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity."},{author:"Edsger W. Dijkstra",en:"Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence."},{author:"Albert Einstein",en:"Imagination is more important than knowledge."}];function Xs(o,e,t){const n=o.slice();return n[20]=e[t],n}function Qs(o,e,t){const n=o.slice();return n[23]=e[t],n}function Js(o){let e,t,n,s,r=o[23]+"",l,i,a;return{c(){e=b("label"),t=b("input"),s=y(),l=j(r),h(t,"type","radio"),h(t,"name","styles"),t.__value=n=o[23],t.value=t.__value,o[12][2].push(t),h(e,"class","mr-2 last:mr-0")},m(c,u){k(c,e,u),d(e,t),t.checked=t.__value===o[3],d(e,s),d(e,l),i||(a=G(t,"change",o[17]),i=!0)},p(c,u){u&8&&(t.checked=t.__value===c[3])},d(c){c&&v(e),o[12][2].splice(o[12][2].indexOf(t),1),i=!1,a()}}}function er(o){let e,t=o[20]+"",n,s;return{c(){e=b("option"),n=j(t),e.__value=s=o[20],e.value=e.__value},m(r,l){k(r,e,l),d(e,n)},p:ee,d(r){r&&v(e)}}}function cd(o){let e,t=`<style type="text/css" data-text="test">${o[7][o[3]]}</style>`,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P,z,O,I,L,B,q,W,oe,Q,D,U,J,re,ce,fe,Pe,Ie,ye,we,ne,xe,be,he,te,Te,Ee,ve,Se,ct,ut,ie,We,De,_e,Ze,Qe,ft;l=new ad({props:{style:"display: flex; "+o[0]+o[1]}});let ot=Object.keys(o[7]),F=[];for(let H=0;H<ot.length;H+=1)F[H]=Js(Qs(o,ot,H));let V=o[8],se=[];for(let H=0;H<V.length;H+=1)se[H]=er(Xs(o,V,H));return _e=new Xe({props:{code:`<script lang="ts">
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
</section>`}}),{c(){e=new el(!1),n=$e(),s=y(),r=b("section"),R(l.$$.fragment),i=y(),a=b("div"),a.innerHTML='This example uses quotes from the <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api">API</a>  <a target="_blank" href="https://github.com/skolakoda">\u0160kola koda</a>',c=y(),u=b("form"),f=b("div"),p=b("div"),m=b("div"),m.textContent="Side",g=y(),_=b("label"),w=b("input"),T=j(" left"),S=y(),N=b("label"),E=b("input"),M=j(" right"),P=y(),z=b("div"),O=b("div"),O.textContent="Direction",I=y(),L=b("label"),B=b("input"),q=j(" from top"),W=y(),oe=b("label"),Q=b("input"),D=j(" from bottom"),U=y(),J=b("label"),re=b("div"),re.textContent="Timeout",ce=y(),fe=b("input"),Pe=y(),Ie=b("div"),ye=b("div"),ye.textContent="Style",we=y();for(let H=0;H<F.length;H+=1)F[H].c();ne=y(),xe=b("label"),be=b("textarea"),he=y(),te=b("div"),Te=b("label"),Ee=b("input"),ve=y(),Se=b("select");for(let H=0;H<se.length;H+=1)se[H].c();ct=y(),ut=b("div"),ut.innerHTML=`<input class="input block w-40" type="submit" value="Notify"/> 
      <input class="input block w-40" type="reset" value="Clear"/>`,ie=y(),We=b("h3"),We.textContent="Code",De=y(),R(_e.$$.fragment),e.a=n,h(a,"class","mb-4 text-center"),h(m,"class","text-sm uppercase opacity-70"),h(w,"type","radio"),h(w,"name","hpos"),w.__value="left: 0; right: unset;",w.value=w.__value,o[12][0].push(w),h(E,"type","radio"),h(E,"name","hpos"),E.__value="right: 0;",E.value=E.__value,o[12][0].push(E),h(O,"class","text-sm uppercase opacity-70"),h(B,"type","radio"),h(B,"name","vpos"),B.__value="top: 0; bottom: unset; flex-direction: column-reverse;",B.value=B.__value,o[12][1].push(B),h(Q,"type","radio"),h(Q,"name","vpos"),Q.__value="top: unset; bottom: 0; flex-direction: column;",Q.value=Q.__value,o[12][1].push(Q),h(re,"class","text-sm uppercase opacity-70"),h(fe,"class","input w-[9ch]"),h(fe,"min","0"),h(fe,"step","100"),h(fe,"type","number"),h(ye,"class","text-sm uppercase opacity-70"),h(f,"class","flex gap-4 items-center justify-evenly mb-4"),h(be,"name","quote"),be.value=o[6],h(be,"rows","3"),h(be,"class","input w-full"),h(be,"placeholder","Quote"),h(xe,"class","block w-full mb-4"),h(Ee,"name","author"),Ee.value=o[5],h(Ee,"class","input w-full"),h(Ee,"type","text"),h(Ee,"placeholder","Author"),h(Te,"class","block w-full"),h(Se,"class","input block w-full"),o[4]===void 0&&st(()=>o[18].call(Se)),h(te,"class","mb-4 flex gap-4"),h(ut,"class","mx-auto w-fit flex gap-4"),h(u,"class","not-prose w-full"),h(r,"class","prose max-w-none my-4")},m(H,ue){e.m(t,document.head),d(document.head,n),k(H,s,ue),k(H,r,ue),C(l,r,null),d(r,i),d(r,a),d(r,c),d(r,u),d(u,f),d(f,p),d(p,m),d(p,g),d(p,_),d(_,w),w.checked=w.__value===o[0],d(_,T),d(p,S),d(p,N),d(N,E),E.checked=E.__value===o[0],d(N,M),d(f,P),d(f,z),d(z,O),d(z,I),d(z,L),d(L,B),B.checked=B.__value===o[1],d(L,q),d(z,W),d(z,oe),d(oe,Q),Q.checked=Q.__value===o[1],d(oe,D),d(f,U),d(f,J),d(J,re),d(J,ce),d(J,fe),tt(fe,o[2]),d(f,Pe),d(f,Ie),d(Ie,ye),d(Ie,we);for(let Le=0;Le<F.length;Le+=1)F[Le].m(Ie,null);d(u,ne),d(u,xe),d(xe,be),d(u,he),d(u,te),d(te,Te),d(Te,Ee),d(te,ve),d(te,Se);for(let Le=0;Le<se.length;Le+=1)se[Le].m(Se,null);ht(Se,o[4]),d(u,ct),d(u,ut),d(r,ie),d(r,We),d(r,De),C(_e,r,null),Ze=!0,Qe||(ft=[G(w,"change",o[11]),G(E,"change",o[13]),G(B,"change",o[14]),G(Q,"change",o[15]),G(fe,"input",o[16]),G(Se,"change",o[18]),G(u,"submit",Yo(o[9])),G(u,"reset",Yo(o[19]))],Qe=!0)},p(H,[ue]){(!Ze||ue&8)&&t!==(t=`<style type="text/css" data-text="test">${H[7][H[3]]}</style>`)&&e.p(t);const Le={};if(ue&3&&(Le.style="display: flex; "+H[0]+H[1]),l.$set(Le),ue&1&&(w.checked=w.__value===H[0]),ue&1&&(E.checked=E.__value===H[0]),ue&2&&(B.checked=B.__value===H[1]),ue&2&&(Q.checked=Q.__value===H[1]),ue&4&&at(fe.value)!==H[2]&&tt(fe,H[2]),ue&136){ot=Object.keys(H[7]);let Ce;for(Ce=0;Ce<ot.length;Ce+=1){const Je=Qs(H,ot,Ce);F[Ce]?F[Ce].p(Je,ue):(F[Ce]=Js(Je),F[Ce].c(),F[Ce].m(Ie,null))}for(;Ce<F.length;Ce+=1)F[Ce].d(1);F.length=ot.length}if((!Ze||ue&64)&&(be.value=H[6]),(!Ze||ue&32&&Ee.value!==H[5])&&(Ee.value=H[5]),ue&256){V=H[8];let Ce;for(Ce=0;Ce<V.length;Ce+=1){const Je=Xs(H,V,Ce);se[Ce]?se[Ce].p(Je,ue):(se[Ce]=er(Je),se[Ce].c(),se[Ce].m(Se,null))}for(;Ce<se.length;Ce+=1)se[Ce].d(1);se.length=V.length}ue&272&&ht(Se,H[4])},i(H){Ze||($(l.$$.fragment,H),$(_e.$$.fragment,H),Ze=!0)},o(H){x(l.$$.fragment,H),x(_e.$$.fragment,H),Ze=!1},d(H){v(n),H&&e.d(),H&&v(s),H&&v(r),A(l),o[12][0].splice(o[12][0].indexOf(w),1),o[12][0].splice(o[12][0].indexOf(E),1),o[12][1].splice(o[12][1].indexOf(B),1),o[12][1].splice(o[12][1].indexOf(Q),1),Fe(F,H),Fe(se,H),A(_e),Qe=!1,ze(ft)}}}function ud(o,e,t){let n,s,r=0,l="left: 0; right: unset;",i="top: 0; bottom: unset; flex-direction: column-reverse;",a=1e4,c={simple:Qp,bootstrap:Jp},u=Object.keys(c)[0];const f=["primary","secondary","success","danger","warning","info","light","dark"];let p=f[0];function m({currentTarget:z}){if(z instanceof HTMLFormElement){const O=z.elements.quote.value,I=z.author.value;Bn.push({message:[O?`<div>${O}</div>`:"",I?`<div class="italic text-right">${I}</div>`:""].filter(B=>!!B).join(""),type:p,timeout:a}),t(10,r=r+1>=ro.length?0:r+1);let L=f.indexOf(p)+1;L<0||L>=f.length?t(4,p=f[0]):t(4,p=f[L])}}const g=[[],[],[]];function _(){l=this.__value,t(0,l)}function w(){l=this.__value,t(0,l)}function T(){i=this.__value,t(1,i)}function S(){i=this.__value,t(1,i)}function N(){a=at(this.value),t(2,a)}function E(){u=this.__value,t(3,u)}function M(){p=cn(this),t(4,p),t(8,f)}const P=()=>Bn.clear();return o.$$.update=()=>{o.$$.dirty&1024&&t(6,n=ro[r].en),o.$$.dirty&1024&&t(5,s=ro[r].author)},[l,i,a,u,p,s,n,c,f,m,r,_,g,w,T,S,N,E,M,P]}class fd extends Y{constructor(e){super(),Z(this,e,ud,cd,K,{})}}const{document:tr}=Mt;function pd(o){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function dd(o){let e;return{c(){e=j("Base example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function gd(o){let e,t,n,s;return e=new de({props:{$$slots:{default:[pd]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[dd]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment)},m(r,l){C(e,r,l),k(r,t,l),C(n,r,l),s=!0},p(r,l){const i={};l&1&&(i.$$scope={dirty:l,ctx:r}),e.$set(i);const a={};l&1&&(a.$$scope={dirty:l,ctx:r}),n.$set(a)},i(r){s||($(e.$$.fragment,r),$(n.$$.fragment,r),s=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),s=!1},d(r){A(e,r),r&&v(t),A(n,r)}}}function md(o){let e,t;return e=new Xp({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function hd(o){let e,t;return e=new fd({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function bd(o){let e,t,n,s,r,l;return e=new lt({props:{$$slots:{default:[gd]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[md]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[hd]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment)},m(i,a){C(e,i,a),k(i,t,a),C(n,i,a),k(i,s,a),C(r,i,a),l=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){x(e.$$.fragment,i),x(n.$$.fragment,i),x(r.$$.fragment,i),l=!1},d(i){A(e,i),i&&v(t),A(n,i),i&&v(s),A(r,i)}}}function _d(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_;return tr.title=e=document.title.replace(/(•).*$/,"$1 GlobNotify"),g=new rt({props:{$$slots:{default:[bd]},$$scope:{ctx:o}}}),{c(){t=y(),n=b("section"),s=b("a"),s.textContent="Home",r=y(),l=b("h1"),l.textContent="Component for notifications globally for the entire application",i=y(),a=b("a"),c=b("img"),f=y(),p=b("ul"),p.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>one instance for the entire application</li> 
    <li>with custom notification transition</li> 
    <li>custom notification element components</li> 
    <li>with configurable timeout for each notification</li>`,m=y(),R(g.$$.fragment),h(s,"class","float-right"),h(s,"href","/"),h(l,"class","text-2xl max-w-lg"),h(c,"class","max-w-[4em]"),Ge(c.src,u=et)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/glob-notify"),h(a,"target","_blank"),h(p,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m(w,T){k(w,t,T),k(w,n,T),d(n,s),d(n,r),d(n,l),d(n,i),d(n,a),d(a,c),d(n,f),d(n,p),d(n,m),C(g,n,null),_=!0},p(w,[T]){(!_||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 GlobNotify"))&&(tr.title=e);const S={};T&1&&(S.$$scope={dirty:T,ctx:w}),g.$set(S)},i(w){_||($(g.$$.fragment,w),_=!0)},o(w){x(g.$$.fragment,w),_=!1},d(w){w&&v(t),w&&v(n),A(g)}}}class wd extends Y{constructor(e){super(),Z(this,e,null,_d,K,{})}}var vd=`<div class="component__source">Source <code>ColorPicker.svelte</code></div>
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
<p>Basic styles are described in the <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/color-picker.css" target="_blank"><code>color-picker.css</code></a> file.</p>
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
<p>Basic styles are described in the  <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/color-edit.css" target="_blank"><code>color-edit.css</code></a> file.</p>
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
</td></tr></table>`;function $d(o){let e,t,n;return t=new Ft({props:{source:vd}}),{c(){e=b("section"),R(t.$$.fragment),h(e,"class","documentation")},m(s,r){k(s,e,r),C(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){x(t.$$.fragment,s),n=!1},d(s){s&&v(e),A(t)}}}class kd extends Y{constructor(e){super(),Z(this,e,null,$d,K,{})}}function Rl(o){var t;const e=(t=/^#([0-9a-f]{3,8})$/gi.exec(o))==null?void 0:t[1];if(e!=null){if(e.length===3||e.length===4)return e.split(/([0-9a-f])/gi).filter(Boolean);if(e.length===6||e.length===8)return e.split(/([0-9a-f]{2})/gi).filter(Boolean)}}function nr(o){try{return Rl(o)!=null}catch(e){return!1}}function dt(o,e,t){return Math.max(Math.min(o,t),e)}function yd(o){return Td(Kn(o))}function Kn(o){var n;const e=(n=Rl(o))==null?void 0:n.map(s=>s.length===1?s+s:s);if(e==null)throw new Error(`Invalid color ${o}`);const t={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return e[3]&&(t.a=Math.round(parseInt(e[3],16)/255*1e3)/1e3),t}function xd(o){const e=o.s/100,t=o.l/100,n=(1-Math.abs(2*t-1))*e,s=n*(1-Math.abs(o.h/60%2-1)),r=t-n/2;let l=0,i=0,a=0;0<=o.h&&o.h<60?(l=n,i=s,a=0):60<=o.h&&o.h<120?(l=s,i=n,a=0):120<=o.h&&o.h<180?(l=0,i=n,a=s):180<=o.h&&o.h<240?(l=0,i=s,a=n):240<=o.h&&o.h<300?(l=s,i=0,a=n):300<=o.h&&o.h<360&&(l=n,i=0,a=s),l=Math.round((l+r)*255),i=Math.round((i+r)*255),a=Math.round((a+r)*255);const c={r:l,g:i,b:a};return o.a!=null&&(c.a=o.a),c}function Td(o){const e=o.r/255,t=o.g/255,n=o.b/255,s=Math.max(e,t,n),r=Math.min(e,t,n),l=s-r;let i=0,a=0,c=0;l===0?i=0:s===e?i=(t-n)/l%6:s===t?i=(n-e)/l+2:i=(e-t)/l+4,i=Math.round(i*60),i<0&&(i+=360),a=(s+r)/2,c=l===0?0:l/(1-Math.abs(2*a-1));const u={h:i,s:Math.round(c*100),l:Math.round(a*100)};return o.a!=null&&(u.a=o.a),u}function Sd(o){return Ro(xd(o))}function Ro(o){const e="#"+[o.r,o.g,o.b].map(n=>dt(n,0,255).toString(16).padStart(2,"0")).join(""),t=o.a!=null?Math.round(o.a*255):255;return t<255?e+Math.max(t,0).toString(16).padStart(2,"0"):e}function Ed(o){return Cd(Kn(o))}function Cd(o){const e=dt(o.r,0,255)/255,t=dt(o.g,0,255)/255,n=dt(o.b,0,255)/255,s=Math.max(e,t,n),r=Math.min(e,t,n),l=s-r,i=s;let a=0,c=0;l&&(s===e&&(a=(t-n)/l),s===t&&(a=2+(n-e)/l),s===n&&(a=4+(e-t)/l),s&&(c=l/s)),a=a*60;const u=a<0?a+360:a,f=c*100,p=i*100;return o.a!=null&&o.a>=0?{h:u,s:f,v:p,a:dt(o.a,0,1)}:{h:u,s:f,v:p}}function lo(o){return Ro(Ad(o))}function Ad(o){const e=o.s/100,t=o.v/100;let n=e*t;const s=o.h/60;let r=n*(1-Math.abs(s%2-1));const l=t-n;n=n+l,r=r+l;const i=Math.floor(s)%6,a=[n,r,l,l,r,n][i],c=[r,n,n,r,l,l][i],u=[l,l,r,n,n,r][i],f=Math.round(a*255),p=Math.round(c*255),m=Math.round(u*255);return o.a!=null?{r:f,g:p,b:m,a:o.a}:{r:f,g:p,b:m}}function or(o){var s;typeof o=="string"&&(o=Kn(o));const e=[.2126,.7152,.0722],t=[o.r,o.g,o.b].reduce((r,l,i)=>(l/=255,l<.03928?l/=12.92:(l=(l+.055)/1.055,l*=l),r+l*e[i]),0),n=1-((s=o.a)!=null?s:1);return t+(1-t)*n}function Rd(o){let e,t,n,s;return{c(){e=b("div"),t=b("div"),h(t,"class","c-color-picker__tone--marker"),Ke(t,"left",o[0]+"%"),Ke(t,"top",100-o[1]+"%"),h(e,"class","c-color-picker__tone"),h(e,"tabindex","0")},m(r,l){k(r,e,l),d(e,t),n||(s=Ue(o[2].call(null,e)),n=!0)},p(r,[l]){l&1&&Ke(t,"left",r[0]+"%"),l&2&&Ke(t,"top",100-r[1]+"%")},i:ee,o:ee,d(r){r&&v(e),n=!1,s()}}}function Nd(o,e,t){let{s:n=0}=e,{v:s=0}=e;function r(l){function i(m){const{pageX:g,pageY:_}=m instanceof MouseEvent?m:m.changedTouches[0],{left:w,top:T,width:S,height:N}=l.getBoundingClientRect();t(0,n=dt((g-w-window.scrollX)/S,0,1)*100),t(1,s=100-dt((_-T-window.scrollY)/N,0,1)*100)}function a(m){i(m)}function c(){document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",c),document.removeEventListener("touchend",c),setTimeout(()=>{document.removeEventListener("click",f,{capture:!0})},0)}function u(m){l.focus(),document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",c),document.addEventListener("touchend",c),document.addEventListener("click",f,{capture:!0}),i(m),m.preventDefault()}function f(m){m.preventDefault(),m.stopPropagation()}function p(m){let _=100-s,w=n;switch(m.code){case"ArrowUp":_=dt(_-1,0,100);break;case"ArrowDown":_=dt(_+1,0,100),m.preventDefault();break;case"ArrowLeft":w=dt(w-1,0,100),m.preventDefault();break;case"ArrowRight":w=dt(w+1,0,100),m.preventDefault();break}w!==n&&t(0,n=w),100-_!==s&&t(1,s=100-_)}return l.addEventListener("mousedown",u),l.addEventListener("touchstart",u),l.addEventListener("keydown",p),{destroy(){c(),l.removeEventListener("mousedown",u),l.removeEventListener("touchstart",u),l.removeEventListener("keydown",p)}}}return o.$$set=l=>{"s"in l&&t(0,n=l.s),"v"in l&&t(1,s=l.v)},[n,s,r]}class Md extends Y{constructor(e){super(),Z(this,e,Nd,Rd,K,{s:0,v:1})}}var Pd="Expected a function",sr=0/0,zd="[object Symbol]",Od=/^\s+|\s+$/g,Id=/^[-+]0x[0-9a-f]+$/i,Ld=/^0b[01]+$/i,Dd=/^0o[0-7]+$/i,jd=parseInt,Bd=typeof xn=="object"&&xn&&xn.Object===Object&&xn,Fd=typeof self=="object"&&self&&self.Object===Object&&self,Hd=Bd||Fd||Function("return this")(),Ud=Object.prototype,qd=Ud.toString,Kd=Math.max,Wd=Math.min,io=function(){return Hd.Date.now()};function Gd(o,e,t){var n,s,r,l,i,a,c=0,u=!1,f=!1,p=!0;if(typeof o!="function")throw new TypeError(Pd);e=rr(e)||0,po(t)&&(u=!!t.leading,f="maxWait"in t,r=f?Kd(rr(t.maxWait)||0,e):r,p="trailing"in t?!!t.trailing:p);function m(P){var z=n,O=s;return n=s=void 0,c=P,l=o.apply(O,z),l}function g(P){return c=P,i=setTimeout(T,e),u?m(P):l}function _(P){var z=P-a,O=P-c,I=e-z;return f?Wd(I,r-O):I}function w(P){var z=P-a,O=P-c;return a===void 0||z>=e||z<0||f&&O>=r}function T(){var P=io();if(w(P))return S(P);i=setTimeout(T,_(P))}function S(P){return i=void 0,p&&n?m(P):(n=s=void 0,l)}function N(){i!==void 0&&clearTimeout(i),c=0,n=a=s=i=void 0}function E(){return i===void 0?l:S(io())}function M(){var P=io(),z=w(P);if(n=arguments,s=this,a=P,z){if(i===void 0)return g(a);if(f)return i=setTimeout(T,e),m(a)}return i===void 0&&(i=setTimeout(T,e)),l}return M.cancel=N,M.flush=E,M}function po(o){var e=typeof o;return!!o&&(e=="object"||e=="function")}function Zd(o){return!!o&&typeof o=="object"}function Yd(o){return typeof o=="symbol"||Zd(o)&&qd.call(o)==zd}function rr(o){if(typeof o=="number")return o;if(Yd(o))return sr;if(po(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=po(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=o.replace(Od,"");var t=Ld.test(o);return t||Dd.test(o)?jd(o.slice(2),t?2:8):Id.test(o)?sr:+o}var Vd=Gd;function Xd(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S;function N(P){o[9](P)}function E(P){o[10](P)}let M={};return o[2].s!==void 0&&(M.s=o[2].s),o[2].v!==void 0&&(M.v=o[2].v),n=new Md({props:M}),je.push(()=>At(n,"s",N)),je.push(()=>At(n,"v",E)),{c(){e=b("div"),t=b("div"),R(n.$$.fragment),l=y(),i=b("div"),a=y(),c=b("div"),u=b("input"),f=y(),p=b("div"),m=b("input"),h(i,"class","c-color-picker__sample"),h(u,"type","range"),h(u,"min","0"),h(u,"max","359"),h(u,"step","1"),h(c,"class","c-color-picker__hue"),h(m,"type","range"),h(m,"min","0"),h(m,"max","1"),h(m,"step",1/255),h(p,"class","c-color-picker__alpha"),h(t,"class","c-color-picker__body"),h(e,"class",g="c-color-picker"+(o[0]?" "+o[0]:"")),h(e,"style",_="--cp-tone: "+o[4]+"; --cp-color-opacity: "+o[5]+"; --cp-color: "+o[3]+"; "+o[1])},m(P,z){k(P,e,z),d(e,t),C(n,t,null),d(t,l),d(t,i),d(t,a),d(t,c),d(c,u),tt(u,o[2].h),d(t,f),d(t,p),d(p,m),tt(m,o[2].a),w=!0,T||(S=[G(u,"change",o[11]),G(u,"input",o[11]),G(m,"change",o[12]),G(m,"input",o[12])],T=!0)},p(P,[z]){const O={};!s&&z&4&&(s=!0,O.s=P[2].s,Lt(()=>s=!1)),!r&&z&4&&(r=!0,O.v=P[2].v,Lt(()=>r=!1)),n.$set(O),z&4&&tt(u,P[2].h),z&4&&tt(m,P[2].a),(!w||z&1&&g!==(g="c-color-picker"+(P[0]?" "+P[0]:"")))&&h(e,"class",g),(!w||z&58&&_!==(_="--cp-tone: "+P[4]+"; --cp-color-opacity: "+P[5]+"; --cp-color: "+P[3]+"; "+P[1]))&&h(e,"style",_)},i(P){w||($(n.$$.fragment,P),w=!0)},o(P){x(n.$$.fragment,P),w=!1},d(P){P&&v(e),A(n),T=!1,ze(S)}}}function Qd(o,e,t){let{class:n=""}=e,{style:s=""}=e,{color:r="#000"}=e,{debounce:l=0}=e,i;function a(T){let{h:S,s:N,v:E,a:M=1}=Ed(T);i!=null&&S===0&&N===0&&(S=i.h),t(2,i={h:S,s:N,v:E,a:M})}let c,u,f,p;function m(T){o.$$.not_equal(i.s,T)&&(i.s=T,t(2,i))}function g(T){o.$$.not_equal(i.v,T)&&(i.v=T,t(2,i))}function _(){i.h=at(this.value),t(2,i)}function w(){i.a=at(this.value),t(2,i)}return o.$$set=T=>{"class"in T&&t(0,n=T.class),"style"in T&&t(1,s=T.style),"color"in T&&t(6,r=T.color),"debounce"in T&&t(7,l=T.debounce)},o.$$.update=()=>{o.$$.dirty&128&&t(8,c=Vd(T=>{t(6,r=T)},l)),o.$$.dirty&64&&a(r),o.$$.dirty&268&&(T=>{t(3,u=lo(T)),t(4,f=lo({h:T.h,s:100,v:100})),t(5,p=lo({h:T.h,s:T.s,v:T.v})),c(u)})(i)},[n,s,i,u,f,p,r,l,c,m,g,_,w]}class Nl extends Y{constructor(e){super(),Z(this,e,Qd,Xd,K,{class:0,style:1,color:6,debounce:7})}}function Jd(o){let e,t,n,s;return{c(){e=b("input"),h(e,"class",t="c-coloredit__input--text"+(o[0]?" "+o[0]:"")),h(e,"type","text"),e.value=o[1]},m(r,l){k(r,e,l),o[6](e),n||(s=G(e,"input",o[7]),n=!0)},p(r,[l]){l&1&&t!==(t="c-coloredit__input--text"+(r[0]?" "+r[0]:""))&&h(e,"class",t),l&2&&e.value!==r[1]&&(e.value=r[1])},i:ee,o:ee,d(r){r&&v(e),o[6](null),n=!1,s()}}}function eg(o,e,t){let{class:n=""}=e,{color:s="#000"}=e,r;function l(f){nr(f)&&t(4,s=f)}let i;function a(){i==null||i.focus()}function c(f){je[f?"unshift":"push"](()=>{i=f,t(2,i)})}const u=f=>l(f.currentTarget.value);return o.$$set=f=>{"class"in f&&t(0,n=f.class),"color"in f&&t(4,s=f.color)},o.$$.update=()=>{o.$$.dirty&16&&t(1,r=nr(s)?s:"")},[n,r,i,l,s,a,c,u]}class tg extends Y{constructor(e){super(),Z(this,e,eg,Jd,K,{class:0,color:4,focus:5})}get focus(){return this.$$.ctx[5]}}function ng(o){let e,t,n,s,r,l,i,a,c,u,f,p,m;return{c(){e=b("input"),n=y(),s=b("input"),l=y(),i=b("input"),c=y(),u=b("input"),h(e,"class",t="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),h(e,"type","number"),h(e,"min","0"),h(e,"max","255"),h(e,"step","1"),e.value=o[1],h(s,"class",r="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),h(s,"type","number"),h(s,"min","0"),h(s,"max","255"),h(s,"step","1"),s.value=o[2],h(i,"class",a="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),h(i,"type","number"),h(i,"min","0"),h(i,"max","255"),h(i,"step","1"),i.value=o[3],h(u,"class",f="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),h(u,"type","number"),h(u,"min","0"),h(u,"max","1"),h(u,"step","0.01"),u.value=o[4]},m(g,_){k(g,e,_),o[8](e),k(g,n,_),k(g,s,_),k(g,l,_),k(g,i,_),k(g,c,_),k(g,u,_),p||(m=[G(e,"change",o[9]),G(s,"change",o[10]),G(i,"change",o[11]),G(u,"change",o[12])],p=!0)},p(g,[_]){_&1&&t!==(t="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(e,"class",t),_&2&&e.value!==g[1]&&(e.value=g[1]),_&1&&r!==(r="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(s,"class",r),_&4&&s.value!==g[2]&&(s.value=g[2]),_&1&&a!==(a="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(i,"class",a),_&8&&i.value!==g[3]&&(i.value=g[3]),_&1&&f!==(f="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(u,"class",f),_&16&&u.value!==g[4]&&(u.value=g[4])},i:ee,o:ee,d(g){g&&v(e),o[8](null),g&&v(n),g&&v(s),g&&v(l),g&&v(i),g&&v(c),g&&v(u),p=!1,ze(m)}}}function og(o,e,t){let{class:n=""}=e,{color:s="#000"}=e,r,l,i,a;function c(S){var N;try{const E=Kn(S);t(1,r=E.r),t(2,l=E.g),t(3,i=E.b),t(4,a=(N=E.a)!=null?N:1)}catch(E){t(1,r=NaN),t(2,l=NaN),t(3,i=NaN),t(4,a=NaN)}}function u(S,N,E,M){[S,E,N,M!=null?M:1].every(P=>Number.isFinite(P))&&t(6,s=Ro({r:S,g:N,b:E,a:M}))}let f;function p(){f==null||f.focus()}function m(S){je[S?"unshift":"push"](()=>{f=S,t(5,f)})}const g=S=>t(1,r=+S.currentTarget.value),_=S=>t(2,l=+S.currentTarget.value),w=S=>t(3,i=+S.currentTarget.value),T=S=>t(4,a=+S.currentTarget.value);return o.$$set=S=>{"class"in S&&t(0,n=S.class),"color"in S&&t(6,s=S.color)},o.$$.update=()=>{o.$$.dirty&64&&c(s),o.$$.dirty&30&&u(r,l,i,a)},[n,r,l,i,a,f,s,p,m,g,_,w,T]}class sg extends Y{constructor(e){super(),Z(this,e,og,ng,K,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function rg(o){let e,t,n,s,r,l,i,a,c,u,f,p,m;return{c(){e=b("input"),n=y(),s=b("input"),l=y(),i=b("input"),c=y(),u=b("input"),h(e,"class",t="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),h(e,"type","number"),h(e,"min","0"),h(e,"max","360"),h(e,"step","1"),e.value=o[1],h(s,"class",r="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),h(s,"type","number"),h(s,"min","0"),h(s,"max","100"),h(s,"step","1"),s.value=o[2],h(i,"class",a="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),h(i,"type","number"),h(i,"min","0"),h(i,"max","100"),h(i,"step","1"),i.value=o[3],h(u,"class",f="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),h(u,"type","number"),h(u,"min","0"),h(u,"max","1"),h(u,"step","0.01"),u.value=o[4]},m(g,_){k(g,e,_),o[8](e),k(g,n,_),k(g,s,_),k(g,l,_),k(g,i,_),k(g,c,_),k(g,u,_),p||(m=[G(e,"change",o[9]),G(s,"change",o[10]),G(i,"change",o[11]),G(u,"change",o[12])],p=!0)},p(g,[_]){_&1&&t!==(t="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(e,"class",t),_&2&&e.value!==g[1]&&(e.value=g[1]),_&1&&r!==(r="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(s,"class",r),_&4&&s.value!==g[2]&&(s.value=g[2]),_&1&&a!==(a="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(i,"class",a),_&8&&i.value!==g[3]&&(i.value=g[3]),_&1&&f!==(f="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(u,"class",f),_&16&&u.value!==g[4]&&(u.value=g[4])},i:ee,o:ee,d(g){g&&v(e),o[8](null),g&&v(n),g&&v(s),g&&v(l),g&&v(i),g&&v(c),g&&v(u),p=!1,ze(m)}}}function lg(o,e,t){let{class:n=""}=e,{color:s="#000"}=e,r,l,i,a;function c(S){var N;try{const E=yd(S);t(1,r=E.h),t(2,l=E.s),t(3,i=E.l),t(4,a=(N=E.a)!=null?N:1)}catch(E){t(1,r=NaN),t(2,l=NaN),t(3,i=NaN),t(4,a=NaN)}}function u(S,N,E,M){[S,N,E,M!=null?M:1].every(P=>Number.isFinite(P))&&t(6,s=Sd({h:S,s:N,l:E,a:M}))}let f;function p(){f==null||f.focus()}function m(S){je[S?"unshift":"push"](()=>{f=S,t(5,f)})}const g=S=>t(1,r=+S.currentTarget.value),_=S=>t(2,l=+S.currentTarget.value),w=S=>t(3,i=+S.currentTarget.value),T=S=>t(4,a=+S.currentTarget.value);return o.$$set=S=>{"class"in S&&t(0,n=S.class),"color"in S&&t(6,s=S.color)},o.$$.update=()=>{o.$$.dirty&64&&c(s),o.$$.dirty&30&&u(r,l,i,a)},[n,r,l,i,a,f,s,p,m,g,_,w,T]}class ig extends Y{constructor(e){super(),Z(this,e,lg,rg,K,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function lr(o,e,t){const n=o.slice();return n[11]=e[t],n}function ir(o){let e,t=o[11]+"",n;return{c(){e=b("span"),n=j(t),h(e,"class","c-color-edit__label")},m(s,r){k(s,e,r),d(e,n)},p(s,r){r&8&&t!==(t=s[11]+"")&&ke(n,t)},d(s){s&&v(e)}}}function ag(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_;function w(M){o[6](M)}var T=o[3].component;function S(M){let P={};return M[0]!==void 0&&(P.color=M[0]),{props:P}}T&&(n=new T(S(o)),je.push(()=>At(n,"color",w)),o[7](n));let N=o[3].labels,E=[];for(let M=0;M<N.length;M+=1)E[M]=ir(lr(o,N,M));return{c(){e=b("div"),t=b("div"),n&&R(n.$$.fragment),r=y();for(let M=0;M<E.length;M+=1)E[M].c();l=y(),i=b("div"),a=b("button"),c=y(),u=b("button"),h(t,"class","c-color-edit__values"),Ke(t,"--ce-columns",o[3].labels.length),h(a,"class","c-color-edit__button--up"),h(u,"class","c-color-edit__button--down"),h(i,"class","c-color-edit__buttons"),h(e,"class",f="c-color-edit"+(o[1]?" "+o[1]:"")),h(e,"style",p=o[2]||void 0)},m(M,P){k(M,e,P),d(e,t),n&&C(n,t,null),d(t,r);for(let z=0;z<E.length;z+=1)E[z].m(t,null);d(e,l),d(e,i),d(i,a),d(i,c),d(i,u),m=!0,g||(_=[G(a,"click",o[8]),G(u,"click",o[9])],g=!0)},p(M,[P]){const z={};if(!s&&P&1&&(s=!0,z.color=M[0],Lt(()=>s=!1)),T!==(T=M[3].component)){if(n){ge();const O=n;x(O.$$.fragment,1,0,()=>{A(O,1)}),me()}T?(n=new T(S(M)),je.push(()=>At(n,"color",w)),M[7](n),R(n.$$.fragment),$(n.$$.fragment,1),C(n,t,r)):n=null}else T&&n.$set(z);if(P&8){N=M[3].labels;let O;for(O=0;O<N.length;O+=1){const I=lr(M,N,O);E[O]?E[O].p(I,P):(E[O]=ir(I),E[O].c(),E[O].m(t,null))}for(;O<E.length;O+=1)E[O].d(1);E.length=N.length}(!m||P&8)&&Ke(t,"--ce-columns",M[3].labels.length),(!m||P&2&&f!==(f="c-color-edit"+(M[1]?" "+M[1]:"")))&&h(e,"class",f),(!m||P&4&&p!==(p=M[2]||void 0))&&h(e,"style",p)},i(M){m||(n&&$(n.$$.fragment,M),m=!0)},o(M){n&&x(n.$$.fragment,M),m=!1},d(M){M&&v(e),o[7](null),n&&A(n),Fe(E,M),g=!1,ze(_)}}}function cg(o,e,t){let{class:n=""}=e,{style:s=""}=e,{color:r="#000"}=e;const l=[{component:tg,labels:["Hex"]},{component:sg,labels:["R","G","B","A"]},{component:ig,labels:["H","S","L","A"]}];let i=l[0],a;function c(g){return Ye(this,null,function*(){let _=l.indexOf(i)+g;_<0?_=l.length-1:_>=l.length&&(_=0),t(3,i=l[_]),yield ol(),a==null||a.focus()})}function u(g){r=g,t(0,r)}function f(g){je[g?"unshift":"push"](()=>{a=g,t(4,a)})}const p=()=>c(-1),m=()=>c(1);return o.$$set=g=>{"class"in g&&t(1,n=g.class),"style"in g&&t(2,s=g.style),"color"in g&&t(0,r=g.color)},[r,n,s,i,a,c,u,f,p,m]}class Ml extends Y{constructor(e){super(),Z(this,e,cg,ag,K,{class:1,style:2,color:0})}}function ar(o,e,t){const n=o.slice();return n[6]=e[t],n}function cr(o){let e,t=o[6]+"",n,s,r;function l(){return o[5](o[6])}return{c(){e=b("button"),n=j(t),h(e,"class","input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"),Ke(e,"background-color",o[6]),Ke(e,"color",or(o[6])>.55?"inherit":"white")},m(i,a){k(i,e,a),d(e,n),s||(r=G(e,"click",l),s=!0)},p(i,a){o=i,a&2&&t!==(t=o[6]+"")&&ke(n,t),a&2&&Ke(e,"background-color",o[6]),a&2&&Ke(e,"color",or(o[6])>.55?"inherit":"white")},d(i){i&&v(e),s=!1,r()}}}function ug(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g=o[1],_=[];for(let w=0;w<g.length;w+=1)_[w]=cr(ar(o,g,w));return{c(){e=b("div"),t=b("span"),t.textContent="Set color",n=y(),s=b("a"),s.textContent="randomize alpha",r=y(),l=b("span"),l.textContent="\u2022",i=y(),a=b("a"),a.textContent="reset alpha",u=y(),f=b("div");for(let w=0;w<_.length;w+=1)_[w].c();h(s,"class","text-sm"),h(s,"href","javascript:void(0)"),h(l,"class","text-blue-500"),h(a,"class","text-sm"),h(a,"href","javascript:void(0)"),h(e,"class",c=o[0]||void 0)},m(w,T){k(w,e,T),d(e,t),d(e,n),d(e,s),d(e,r),d(e,l),d(e,i),d(e,a),k(w,u,T),k(w,f,T);for(let S=0;S<_.length;S+=1)_[S].m(f,null);p||(m=[G(s,"click",o[3]),G(a,"click",o[4])],p=!0)},p(w,[T]){if(T&1&&c!==(c=w[0]||void 0)&&h(e,"class",c),T&6){g=w[1];let S;for(S=0;S<g.length;S+=1){const N=ar(w,g,S);_[S]?_[S].p(N,T):(_[S]=cr(N),_[S].c(),_[S].m(f,null))}for(;S<_.length;S+=1)_[S].d(1);_.length=g.length}},i:ee,o:ee,d(w){w&&v(e),w&&v(u),w&&v(f),Fe(_,w),p=!1,ze(m)}}}function fg(o){return Pl(o).map(e=>e+Math.floor(Math.random()*255).toString(16).padStart(2,"0"))}function Pl(o){return o.map(e=>e.slice(0,7))}function pg(o,e,t){const n=ho();let{class:s=""}=e,r=["#001219","#005F73","#0A9396","#94D2BD","#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226","#F72585","#B5179E","#7209B7","#560BAD","#480CA8","#3A0CA3","#3F37C9","#4361EE","#4895EF","#4CC9F0"];const l=()=>t(1,r=fg(r)),i=()=>t(1,r=Pl(r)),a=c=>n("color",c);return o.$$set=c=>{"class"in c&&t(0,s=c.class)},[s,r,n,l,i,a]}class No extends Y{constructor(e){super(),Z(this,e,pg,ug,K,{class:0})}}function dg(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P,z;function O(L){o[1](L)}let I={class:"basis-1/2 h-[256px] pt-2"};return o[0]!==void 0&&(I.color=o[0]),n=new Nl({props:I}),je.push(()=>At(n,"color",O)),S=new No({props:{class:"mt-4"}}),S.$on("color",o[2]),P=new Xe({props:{code:`<script lang="ts">
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
</section>`}}),{c(){e=b("section"),t=b("div"),R(n.$$.fragment),r=y(),l=b("div"),i=b("div"),a=j("Current color: "),c=b("code"),u=j(o[0]),f=y(),p=b("div"),m=b("div"),g=b("div"),_=y(),w=b("div"),T=y(),R(S.$$.fragment),N=y(),E=b("h3"),E.textContent="Code",M=y(),R(P.$$.fragment),h(c,"class","uppercase"),h(g,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),h(w,"class","absolute left-0 top-0 right-0 bottom-0"),Ke(w,"background-color",o[0]),h(m,"class","relative h-[1.5em]"),h(p,"class","p-2 border rounded-md"),h(l,"class","basis-1/2"),h(t,"class","flex gap-8"),h(e,"class","prose max-w-none my-4")},m(L,B){k(L,e,B),d(e,t),C(n,t,null),d(t,r),d(t,l),d(l,i),d(i,a),d(i,c),d(c,u),d(l,f),d(l,p),d(p,m),d(m,g),d(m,_),d(m,w),d(l,T),C(S,l,null),d(e,N),d(e,E),d(e,M),C(P,e,null),z=!0},p(L,[B]){const q={};!s&&B&1&&(s=!0,q.color=L[0],Lt(()=>s=!1)),n.$set(q),(!z||B&1)&&ke(u,L[0]),(!z||B&1)&&Ke(w,"background-color",L[0])},i(L){z||($(n.$$.fragment,L),$(S.$$.fragment,L),$(P.$$.fragment,L),z=!0)},o(L){x(n.$$.fragment,L),x(S.$$.fragment,L),x(P.$$.fragment,L),z=!1},d(L){L&&v(e),A(n),A(S),A(P)}}}function gg(o,e,t){let n="#f70";function s(l){n=l,t(0,n)}return[n,s,({detail:l})=>t(0,n=l)]}class mg extends Y{constructor(e){super(),Z(this,e,gg,dg,K,{})}}function hg(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P,z,O;function I(B){o[1](B)}let L={class:"w-full border shadow-md rounded-lg p-2"};return o[0]!==void 0&&(L.color=o[0]),s=new Ml({props:L}),je.push(()=>At(s,"color",I)),N=new No({props:{class:"mt-4"}}),N.$on("color",o[2]),z=new Xe({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=b("section"),t=b("div"),n=b("div"),R(s.$$.fragment),l=y(),i=b("div"),a=b("div"),c=j("Current color: "),u=b("code"),f=j(o[0]),p=y(),m=b("div"),g=b("div"),_=b("div"),w=y(),T=b("div"),S=y(),R(N.$$.fragment),E=y(),M=b("h3"),M.textContent="Code",P=y(),R(z.$$.fragment),h(n,"class","basis-1/2 inline-flex items-center"),h(u,"class","uppercase"),h(_,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),h(T,"class","absolute left-0 top-0 right-0 bottom-0"),Ke(T,"background-color",o[0]),h(g,"class","relative h-[1.5em]"),h(m,"class","p-2 border rounded-md"),h(i,"class","basis-1/2"),h(t,"class","flex gap-8"),h(e,"class","prose max-w-none my-4")},m(B,q){k(B,e,q),d(e,t),d(t,n),C(s,n,null),d(t,l),d(t,i),d(i,a),d(a,c),d(a,u),d(u,f),d(i,p),d(i,m),d(m,g),d(g,_),d(g,w),d(g,T),d(i,S),C(N,i,null),d(e,E),d(e,M),d(e,P),C(z,e,null),O=!0},p(B,[q]){const W={};!r&&q&1&&(r=!0,W.color=B[0],Lt(()=>r=!1)),s.$set(W),(!O||q&1)&&ke(f,B[0]),(!O||q&1)&&Ke(T,"background-color",B[0])},i(B){O||($(s.$$.fragment,B),$(N.$$.fragment,B),$(z.$$.fragment,B),O=!0)},o(B){x(s.$$.fragment,B),x(N.$$.fragment,B),x(z.$$.fragment,B),O=!1},d(B){B&&v(e),A(s),A(N),A(z)}}}function bg(o,e,t){let n="#f70";function s(l){n=l,t(0,n)}return[n,s,({detail:l})=>t(0,n=l)]}class _g extends Y{constructor(e){super(),Z(this,e,bg,hg,K,{})}}function Wn(o){return o.split("-")[0]}function Gn(o){return o.split("-")[1]}function Mo(o){return["top","bottom"].includes(Wn(o))?"x":"y"}function zl(o){return o==="y"?"height":"width"}function wg(o){return He({top:0,right:0,bottom:0,left:0},o)}function Ol(o){return typeof o!="number"?wg(o):{top:o,right:o,bottom:o,left:o}}function ur(o){return zt(He({},o),{top:o.y,left:o.x,right:o.x+o.width,bottom:o.y+o.height})}function Il(o,e){return Ye(this,null,function*(){var t;e===void 0&&(e={});const{x:n,y:s,platform:r,rects:l,elements:i,strategy:a}=o,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=e,g=Ol(m),w=i[p?f==="floating"?"reference":"floating":f],T=ur(yield r.getClippingRect({element:(t=yield r.isElement==null?void 0:r.isElement(w))==null||t?w:w.contextElement||(yield r.getDocumentElement==null?void 0:r.getDocumentElement(i.floating)),boundary:c,rootBoundary:u,strategy:a})),S=ur(r.convertOffsetParentRelativeRectToViewportRelativeRect?yield r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f==="floating"?zt(He({},l.floating),{x:n,y:s}):l.reference,offsetParent:yield r.getOffsetParent==null?void 0:r.getOffsetParent(i.floating),strategy:a}):l[f]);return{top:T.top-S.top+g.top,bottom:S.bottom-T.bottom+g.bottom,left:T.left-S.left+g.left,right:S.right-T.right+g.right}})}const vg=Math.min,Ot=Math.max;function $g(o,e,t){return Ot(o,vg(e,t))}const Ll=o=>({name:"arrow",options:o,fn(t){return Ye(this,null,function*(){const{element:n,padding:s=0}=o!=null?o:{},{x:r,y:l,placement:i,rects:a,platform:c}=t;if(n==null)return{};const u=Ol(s),f={x:r,y:l},p=Mo(i),m=Gn(i),g=zl(p),_=yield c.getDimensions(n),w=p==="y"?"top":"left",T=p==="y"?"bottom":"right",S=a.reference[g]+a.reference[p]-f[p]-a.floating[g],N=f[p]-a.reference[p],E=yield c.getOffsetParent==null?void 0:c.getOffsetParent(n);let M=E?p==="y"?E.clientHeight||0:E.clientWidth||0:0;M===0&&(M=a.floating[g]);const P=S/2-N/2,z=u[w],O=M-_[g]-u[T],I=M/2-_[g]/2+P,L=$g(z,I,O),W=(m==="start"?u[w]:u[T])>0&&I!==L&&a.reference[g]<=a.floating[g]?I<z?z-I:O-I:0;return{[p]:f[p]-W,data:{[p]:L,centerOffset:I-L}}})}}),kg={left:"right",right:"left",bottom:"top",top:"bottom"};function Fn(o){return o.replace(/left|right|bottom|top/g,e=>kg[e])}function yg(o,e,t){t===void 0&&(t=!1);const n=Gn(o),s=Mo(o),r=zl(s);let l=s==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=Fn(l)),{main:l,cross:Fn(l)}}const xg={start:"end",end:"start"};function fr(o){return o.replace(/start|end/g,e=>xg[e])}function Tg(o){const e=Fn(o);return[fr(o),e,fr(e)]}const Zn=function(o){return o===void 0&&(o={}),{name:"flip",options:o,fn(t){return Ye(this,null,function*(){var n;const{placement:s,middlewareData:r,rects:l,initialPlacement:i,platform:a,elements:c}=t,L=o,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",flipAlignment:g=!0}=L,_=eo(L,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),w=Wn(s),S=p||(w===i||!g?[Fn(i)]:Tg(i)),N=[i,...S],E=yield Il(t,_),M=[];let P=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&M.push(E[w]),f){const{main:B,cross:q}=yg(s,l,yield a.isRTL==null?void 0:a.isRTL(c.floating));M.push(E[B],E[q])}if(P=[...P,{placement:s,overflows:M}],!M.every(B=>B<=0)){var z,O;const B=((z=(O=r.flip)==null?void 0:O.index)!=null?z:0)+1,q=N[B];if(q)return{data:{index:B,overflows:P},reset:{placement:q}};let W="bottom";switch(m){case"bestFit":{var I;const oe=(I=P.map(Q=>[Q,Q.overflows.filter(D=>D>0).reduce((D,U)=>D+U,0)]).sort((Q,D)=>Q[1]-D[1])[0])==null?void 0:I[0].placement;oe&&(W=oe);break}case"initialPlacement":W=i;break}if(s!==W)return{reset:{placement:W}}}return{}})}}};function Sg(o,e){return Ye(this,null,function*(){const{placement:t,platform:n,elements:s}=o,r=yield n.isRTL==null?void 0:n.isRTL(s.floating),l=Wn(t),i=Gn(t),a=Mo(t)==="x",c=["left","top"].includes(l)?-1:1,u=r&&a?-1:1,f=typeof e=="function"?e(o):e;let{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:He({mainAxis:0,crossAxis:0,alignmentAxis:null},f);return i&&typeof g=="number"&&(m=i==="end"?g*-1:g),a?{x:m*u,y:p*c}:{x:p*c,y:m*u}})}const Yn=function(o){return o===void 0&&(o=0),{name:"offset",options:o,fn(t){return Ye(this,null,function*(){const{x:n,y:s}=t,r=yield Sg(t,o);return{x:n+r.x,y:s+r.y,data:r}})}}},Dl=function(o){return o===void 0&&(o={}),{name:"size",options:o,fn(t){return Ye(this,null,function*(){const{placement:n,rects:s,platform:r,elements:l}=t,M=o,{apply:i}=M,a=eo(M,["apply"]),c=yield Il(t,a),u=Wn(n),f=Gn(n);let p,m;u==="top"||u==="bottom"?(p=u,m=f===((yield r.isRTL==null?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(m=u,p=f==="end"?"top":"bottom");const g=Ot(c.left,0),_=Ot(c.right,0),w=Ot(c.top,0),T=Ot(c.bottom,0),S={availableHeight:s.floating.height-(["left","right"].includes(n)?2*(w!==0||T!==0?w+T:Ot(c.top,c.bottom)):c[p]),availableWidth:s.floating.width-(["top","bottom"].includes(n)?2*(g!==0||_!==0?g+_:Ot(c.left,c.right)):c[m])},N=yield r.getDimensions(l.floating);i==null||i(He(He({},t),S));const E=yield r.getDimensions(l.floating);return N.width!==E.width||N.height!==E.height?{reset:{rects:!0}}:{}})}}};function jl(o){return o.split("-")[0]}function Eg(o){return o.split("-")[1]}function Cg(o){return["top","bottom"].includes(jl(o))?"x":"y"}function Ag(o){return o==="y"?"height":"width"}function pr(o,e,t){let{reference:n,floating:s}=o;const r=n.x+n.width/2-s.width/2,l=n.y+n.height/2-s.height/2,i=Cg(e),a=Ag(i),c=n[a]/2-s[a]/2,u=jl(e),f=i==="x";let p;switch(u){case"top":p={x:r,y:n.y-s.height};break;case"bottom":p={x:r,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:l};break;case"left":p={x:n.x-s.width,y:l};break;default:p={x:n.x,y:n.y}}switch(Eg(e)){case"start":p[i]-=c*(t&&f?-1:1);break;case"end":p[i]+=c*(t&&f?-1:1);break}return p}const Rg=(o,e,t)=>Ye(Yl,null,function*(){const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:l}=t,i=yield l.isRTL==null?void 0:l.isRTL(e);let a=yield l.getElementRects({reference:o,floating:e,strategy:s}),{x:c,y:u}=pr(a,n,i),f=n,p={};for(let m=0;m<r.length;m++){const{name:g,fn:_}=r[m],{x:w,y:T,data:S,reset:N}=yield _({x:c,y:u,initialPlacement:n,placement:f,strategy:s,middlewareData:p,rects:a,platform:l,elements:{reference:o,floating:e}});if(c=w!=null?w:c,u=T!=null?T:u,p=zt(He({},p),{[g]:He(He({},p[g]),S)}),N){typeof N=="object"&&(N.placement&&(f=N.placement),N.rects&&(a=N.rects===!0?yield l.getElementRects({reference:o,floating:e,strategy:s}):N.rects),{x:c,y:u}=pr(a,f,i)),m=-1;continue}}return{x:c,y:u,placement:f,strategy:s,middlewareData:p}});function dr(o){return zt(He({},o),{top:o.y,left:o.x,right:o.x+o.width,bottom:o.y+o.height})}function Bl(o){return o&&o.document&&o.location&&o.alert&&o.setInterval}function xt(o){if(o==null)return window;if(!Bl(o)){const e=o.ownerDocument;return e&&e.defaultView||window}return o}function mn(o){return xt(o).getComputedStyle(o)}function kt(o){return Bl(o)?"":o?(o.nodeName||"").toLowerCase():""}function Fl(){const o=navigator.userAgentData;return o!=null&&o.brands?o.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function _t(o){return o instanceof xt(o).HTMLElement}function Rt(o){return o instanceof xt(o).Element}function Ng(o){return o instanceof xt(o).Node}function Po(o){if(typeof ShadowRoot=="undefined")return!1;const e=xt(o).ShadowRoot;return o instanceof e||o instanceof ShadowRoot}function Vn(o){const{overflow:e,overflowX:t,overflowY:n}=mn(o);return/auto|scroll|overlay|hidden/.test(e+n+t)}function Mg(o){return["table","td","th"].includes(kt(o))}function Hl(o){const e=/firefox/i.test(Fl()),t=mn(o);return t.transform!=="none"||t.perspective!=="none"||t.contain==="paint"||["transform","perspective"].includes(t.willChange)||e&&t.willChange==="filter"||e&&(t.filter?t.filter!=="none":!1)}function Ul(){return!/^((?!chrome|android).)*safari/i.test(Fl())}const gr=Math.min,an=Math.max,Hn=Math.round;function yt(o,e,t){var n,s,r,l;e===void 0&&(e=!1),t===void 0&&(t=!1);const i=o.getBoundingClientRect();let a=1,c=1;e&&_t(o)&&(a=o.offsetWidth>0&&Hn(i.width)/o.offsetWidth||1,c=o.offsetHeight>0&&Hn(i.height)/o.offsetHeight||1);const u=Rt(o)?xt(o):window,f=!Ul()&&t,p=(i.left+(f&&(n=(s=u.visualViewport)==null?void 0:s.offsetLeft)!=null?n:0))/a,m=(i.top+(f&&(r=(l=u.visualViewport)==null?void 0:l.offsetTop)!=null?r:0))/c,g=i.width/a,_=i.height/c;return{width:g,height:_,top:m,right:p+g,bottom:m+_,left:p,x:p,y:m}}function Pt(o){return((Ng(o)?o.ownerDocument:o.document)||window.document).documentElement}function Xn(o){return Rt(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:{scrollLeft:o.pageXOffset,scrollTop:o.pageYOffset}}function ql(o){return yt(Pt(o)).left+Xn(o).scrollLeft}function Pg(o){const e=yt(o);return Hn(e.width)!==o.offsetWidth||Hn(e.height)!==o.offsetHeight}function zg(o,e,t){const n=_t(e),s=Pt(e),r=yt(o,n&&Pg(e),t==="fixed");let l={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(n||!n&&t!=="fixed")if((kt(e)!=="body"||Vn(s))&&(l=Xn(e)),_t(e)){const a=yt(e,!0);i.x=a.x+e.clientLeft,i.y=a.y+e.clientTop}else s&&(i.x=ql(s));return{x:r.left+l.scrollLeft-i.x,y:r.top+l.scrollTop-i.y,width:r.width,height:r.height}}function Kl(o){return kt(o)==="html"?o:o.assignedSlot||o.parentNode||(Po(o)?o.host:null)||Pt(o)}function mr(o){return!_t(o)||getComputedStyle(o).position==="fixed"?null:o.offsetParent}function Og(o){let e=Kl(o);for(Po(e)&&(e=e.host);_t(e)&&!["html","body"].includes(kt(e));){if(Hl(e))return e;e=e.parentNode}return null}function go(o){const e=xt(o);let t=mr(o);for(;t&&Mg(t)&&getComputedStyle(t).position==="static";)t=mr(t);return t&&(kt(t)==="html"||kt(t)==="body"&&getComputedStyle(t).position==="static"&&!Hl(t))?e:t||Og(o)||e}function hr(o){if(_t(o))return{width:o.offsetWidth,height:o.offsetHeight};const e=yt(o);return{width:e.width,height:e.height}}function Ig(o){let{rect:e,offsetParent:t,strategy:n}=o;const s=_t(t),r=Pt(t);if(t===r)return e;let l={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if((s||!s&&n!=="fixed")&&((kt(t)!=="body"||Vn(r))&&(l=Xn(t)),_t(t))){const a=yt(t,!0);i.x=a.x+t.clientLeft,i.y=a.y+t.clientTop}return zt(He({},e),{x:e.x-l.scrollLeft+i.x,y:e.y-l.scrollTop+i.y})}function Lg(o,e){const t=xt(o),n=Pt(o),s=t.visualViewport;let r=n.clientWidth,l=n.clientHeight,i=0,a=0;if(s){r=s.width,l=s.height;const c=Ul();(c||!c&&e==="fixed")&&(i=s.offsetLeft,a=s.offsetTop)}return{width:r,height:l,x:i,y:a}}function Dg(o){var e;const t=Pt(o),n=Xn(o),s=(e=o.ownerDocument)==null?void 0:e.body,r=an(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),l=an(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0);let i=-n.scrollLeft+ql(o);const a=-n.scrollTop;return mn(s||t).direction==="rtl"&&(i+=an(t.clientWidth,s?s.clientWidth:0)-r),{width:r,height:l,x:i,y:a}}function Wl(o){const e=Kl(o);return["html","body","#document"].includes(kt(e))?o.ownerDocument.body:_t(e)&&Vn(e)?e:Wl(e)}function Un(o,e){var t;e===void 0&&(e=[]);const n=Wl(o),s=n===((t=o.ownerDocument)==null?void 0:t.body),r=xt(n),l=s?[r].concat(r.visualViewport||[],Vn(n)?n:[]):n,i=e.concat(l);return s?i:i.concat(Un(l))}function jg(o,e){const t=e==null||e.getRootNode==null?void 0:e.getRootNode();if(o!=null&&o.contains(e))return!0;if(t&&Po(t)){let n=e;do{if(n&&o===n)return!0;n=n.parentNode||n.host}while(n)}return!1}function Bg(o,e){const t=yt(o,!1,e==="fixed"),n=t.top+o.clientTop,s=t.left+o.clientLeft;return{top:n,left:s,x:s,y:n,right:s+o.clientWidth,bottom:n+o.clientHeight,width:o.clientWidth,height:o.clientHeight}}function br(o,e,t){return e==="viewport"?dr(Lg(o,t)):Rt(e)?Bg(e,t):dr(Dg(Pt(o)))}function Fg(o){const e=Un(o),n=["absolute","fixed"].includes(mn(o).position)&&_t(o)?go(o):o;return Rt(n)?e.filter(s=>Rt(s)&&jg(s,n)&&kt(s)!=="body"):[]}function Hg(o){let{element:e,boundary:t,rootBoundary:n,strategy:s}=o;const l=[...t==="clippingAncestors"?Fg(e):[].concat(t),n],i=l[0],a=l.reduce((c,u)=>{const f=br(e,u,s);return c.top=an(f.top,c.top),c.right=gr(f.right,c.right),c.bottom=gr(f.bottom,c.bottom),c.left=an(f.left,c.left),c},br(e,i,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}const Ug={getClippingRect:Hg,convertOffsetParentRelativeRectToViewportRelativeRect:Ig,isElement:Rt,getDimensions:hr,getOffsetParent:go,getDocumentElement:Pt,getElementRects:o=>{let{reference:e,floating:t,strategy:n}=o;return{reference:zg(e,go(t),n),floating:zt(He({},hr(t)),{x:0,y:0})}},getClientRects:o=>Array.from(o.getClientRects()),isRTL:o=>mn(o).direction==="rtl"};function qg(o,e,t,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:i=!1}=n,a=s&&!i,c=r&&!i,u=a||c?[...Rt(o)?Un(o):[],...Un(e)]:[];u.forEach(_=>{a&&_.addEventListener("scroll",t,{passive:!0}),c&&_.addEventListener("resize",t)});let f=null;l&&(f=new ResizeObserver(t),Rt(o)&&!i&&f.observe(o),f.observe(e));let p,m=i?yt(o):null;i&&g();function g(){const _=yt(o);m&&(_.x!==m.x||_.y!==m.y||_.width!==m.width||_.height!==m.height)&&t(),m=_,p=requestAnimationFrame(g)}return l||t(),()=>{var _;u.forEach(w=>{a&&w.removeEventListener("scroll",t),c&&w.removeEventListener("resize",t)}),(_=f)==null||_.disconnect(),f=null,i&&cancelAnimationFrame(p)}}const Kg=(o,e,t)=>Rg(o,e,He({platform:Ug},t));function Qn(o){const e={enable:!1,options:void 0,cleanup:null},t={reference:null,floating:null,options:void 0};n(o);function n(c){c===!0?(e.enable=!0,s()):c===!1?(r(),e.enable=!1):(s(),e.enable=!0,e.options=c)}function s(){r(),t.reference&&t.floating&&e.enable&&(e.cleanup=qg(t.reference,t.floating,l,e.options))}function r(){e.cleanup!=null&&(e.cleanup(),e.cleanup=null)}function l(){return Ye(this,null,function*(){if(t.reference&&t.floating){const{reference:c,floating:u,options:f}=t,p=yield Kg(c,u,f);Object.assign(u.style,{position:p.strategy,left:`${p.x}px`,top:`${p.y}px`}),f!=null&&f.callback&&f.callback(p,{reference:c,floating:u})}})}function i(c){return t.reference=c,e.enable?s():l(),{destroy(){r(),t.reference=null}}}function a(c,u){return t.floating=c,t.options=u,e.enable?s():l(),{update(f){r(),t.options=f,e.enable?s():l()},destroy(){r(),t.floating=null,t.options=void 0}}}return[i,a,n]}function gn(o,e){let t,n;[t,n]=e!=null?e:[];function s(l){t&&o.contains(l.target)&&t(l)}function r(l){n&&!o.contains(l.relatedTarget)&&n(l)}return o.addEventListener("focusin",s),o.addEventListener("focusout",r),{update(l){[t,n]=l!=null?l:[]},destroy(){o.removeEventListener("focusout",r),o.removeEventListener("focusin",s)}}}function _r(o){let e,t,n,s,r,l,i,a,c,u,f,p,m;function g(S){o[5](S)}let _={class:"h-48 p-3",style:"--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"};o[0]!==void 0&&(_.color=o[0]),t=new Nl({props:_}),je.push(()=>At(t,"color",g));function w(S){o[6](S)}let T={class:"p-3 text-sm"};return o[0]!==void 0&&(T.color=o[0]),i=new Ml({props:T}),je.push(()=>At(i,"color",w)),{c(){e=b("div"),R(t.$$.fragment),s=y(),r=b("div"),l=y(),R(i.$$.fragment),h(r,"class","border-t"),h(e,"class","absolute w-[240px] border rounded-lg bg-white shadow-lg")},m(S,N){k(S,e,N),C(t,e,null),d(e,s),d(e,r),d(e,l),C(i,e,null),f=!0,p||(m=Ue(c=o[3].call(null,e,{placement:"bottom-start",middleware:[Zn(),Yn(8)]})),p=!0)},p(S,N){const E={};!n&&N&1&&(n=!0,E.color=S[0],Lt(()=>n=!1)),t.$set(E);const M={};!a&&N&1&&(a=!0,M.color=S[0],Lt(()=>a=!1)),i.$set(M)},i(S){f||($(t.$$.fragment,S),$(i.$$.fragment,S),S&&st(()=>{u||(u=Ct(e,Jt,{},!0)),u.run(1)}),f=!0)},o(S){x(t.$$.fragment,S),x(i.$$.fragment,S),S&&(u||(u=Ct(e,Jt,{},!1)),u.run(0)),f=!1},d(S){S&&v(e),A(t),A(i),S&&u&&u.end(),p=!1,m()}}}function Wg(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P,z,O,I,L,B,q,W,oe,Q=o[1]&&_r(o);return z=new No({props:{class:"mt-4"}}),z.$on("color",o[8]),B=new Xe({props:{code:`<script lang="ts">
<\/script>

<section class="prose max-w-none my-4">
</section>

<style lang="postcss">
</style>`}}),{c(){e=b("section"),t=b("div"),t.innerHTML=`This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a> and
    <a href="/focus-action"><code>@apsc/flocus-action</code></a>`,n=y(),s=b("div"),r=b("div"),l=b("div"),l.textContent="Click this button to pick a color",i=y(),a=b("div"),c=b("button"),u=b("span"),f=y(),Q&&Q.c(),m=y(),g=b("div"),_=b("div"),w=j("Current color: "),T=b("code"),S=j(o[0]),N=y(),E=b("div"),M=b("div"),P=y(),R(z.$$.fragment),O=y(),I=b("h3"),I.textContent="Code",L=y(),R(B.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(u,"class","block border h-[22px] w-[10ch] bg-chess"),Ke(u,"background","linear-gradient(to right, "+o[0]+" 0, "+o[0]+" 100%), var(--bg-chess-background)"),h(c,"class","input py-1"),h(r,"class","basis-1/2"),h(T,"class","uppercase"),h(M,"class","h-[1.5em] bg-chess"),Ke(M,"background","linear-gradient(to right, "+o[0]+" 0, "+o[0]+" 100%), var(--bg-chess-background)"),h(E,"class","p-2 border rounded-md"),h(g,"class","basis-1/2"),h(s,"class","flex gap-8"),h(e,"class","prose max-w-none my-4")},m(D,U){k(D,e,U),d(e,t),d(e,n),d(e,s),d(s,r),d(r,l),d(r,i),d(r,a),d(a,c),d(c,u),d(a,f),Q&&Q.m(a,null),d(s,m),d(s,g),d(g,_),d(_,w),d(_,T),d(T,S),d(g,N),d(g,E),d(E,M),d(g,P),C(z,g,null),d(e,O),d(e,I),d(e,L),C(B,e,null),q=!0,W||(oe=[Ue(o[2].call(null,c)),G(c,"click",o[4]),Ue(p=gn.call(null,a,[void 0,o[7]]))],W=!0)},p(D,[U]){(!q||U&1)&&Ke(u,"background","linear-gradient(to right, "+D[0]+" 0, "+D[0]+" 100%), var(--bg-chess-background)"),D[1]?Q?(Q.p(D,U),U&2&&$(Q,1)):(Q=_r(D),Q.c(),$(Q,1),Q.m(a,null)):Q&&(ge(),x(Q,1,1,()=>{Q=null}),me()),p&&Ve(p.update)&&U&2&&p.update.call(null,[void 0,D[7]]),(!q||U&1)&&ke(S,D[0]),(!q||U&1)&&Ke(M,"background","linear-gradient(to right, "+D[0]+" 0, "+D[0]+" 100%), var(--bg-chess-background)")},i(D){q||($(Q),$(z.$$.fragment,D),$(B.$$.fragment,D),q=!0)},o(D){x(Q),x(z.$$.fragment,D),x(B.$$.fragment,D),q=!1},d(D){D&&v(e),Q&&Q.d(),A(z),A(B),W=!1,ze(oe)}}}function Gg(o,e,t){const[n,s]=Qn(!0);let r="#f70",l=!1;const i=()=>t(1,l=!l);function a(p){r=p,t(0,r)}function c(p){r=p,t(0,r)}return[r,l,n,s,i,a,c,()=>t(1,l=!1),({detail:p})=>t(0,r=p)]}class Zg extends Y{constructor(e){super(),Z(this,e,Gg,Wg,K,{})}}const{document:wr}=Mt;function Yg(o){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Vg(o){let e;return{c(){e=j("ColorPicker example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Xg(o){let e;return{c(){e=j("ColorEdit example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Qg(o){let e;return{c(){e=j("Color input Example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Jg(o){let e,t,n,s,r,l,i,a;return e=new de({props:{$$slots:{default:[Yg]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Vg]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[Xg]},$$scope:{ctx:o}}}),i=new de({props:{$$slots:{default:[Qg]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,s,u),C(r,c,u),k(c,l,u),C(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(r.$$.fragment,c),x(i.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(s),A(r,c),c&&v(l),A(i,c)}}}function em(o){let e,t;return e=new kd({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function tm(o){let e,t;return e=new mg({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function nm(o){let e,t;return e=new _g({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function om(o){let e,t;return e=new Zg({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function sm(o){let e,t,n,s,r,l,i,a,c,u;return e=new lt({props:{$$slots:{default:[Jg]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[em]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[tm]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[nm]},$$scope:{ctx:o}}}),c=new pe({props:{$$slots:{default:[om]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment),a=y(),R(c.$$.fragment)},m(f,p){C(e,f,p),k(f,t,p),C(n,f,p),k(f,s,p),C(r,f,p),k(f,l,p),C(i,f,p),k(f,a,p),C(c,f,p),u=!0},p(f,p){const m={};p&1&&(m.$$scope={dirty:p,ctx:f}),e.$set(m);const g={};p&1&&(g.$$scope={dirty:p,ctx:f}),n.$set(g);const _={};p&1&&(_.$$scope={dirty:p,ctx:f}),r.$set(_);const w={};p&1&&(w.$$scope={dirty:p,ctx:f}),i.$set(w);const T={};p&1&&(T.$$scope={dirty:p,ctx:f}),c.$set(T)},i(f){u||($(e.$$.fragment,f),$(n.$$.fragment,f),$(r.$$.fragment,f),$(i.$$.fragment,f),$(c.$$.fragment,f),u=!0)},o(f){x(e.$$.fragment,f),x(n.$$.fragment,f),x(r.$$.fragment,f),x(i.$$.fragment,f),x(c.$$.fragment,f),u=!1},d(f){A(e,f),f&&v(t),A(n,f),f&&v(s),A(r,f),f&&v(l),A(i,f),f&&v(a),A(c,f)}}}function rm(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_;return wr.title=e=document.title.replace(/(•).*$/,"$1 Color"),g=new rt({props:{$$slots:{default:[sm]},$$scope:{ctx:o}}}),{c(){t=y(),n=b("section"),s=b("a"),s.textContent="Home",r=y(),l=b("h1"),l.textContent="A set of components for picking and editing colors",i=y(),a=b("a"),c=b("img"),f=y(),p=b("ul"),p.innerHTML=`<li>no inline styles</li> 
    <li>the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts" target="_blank">utils.d.ts</a> for definitions of types and functions</li>`,m=y(),R(g.$$.fragment),h(s,"class","float-right"),h(s,"href","/"),h(l,"class","text-2xl"),h(c,"class","max-w-[4em]"),Ge(c.src,u=et)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/color"),h(a,"target","_blank"),h(p,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m(w,T){k(w,t,T),k(w,n,T),d(n,s),d(n,r),d(n,l),d(n,i),d(n,a),d(a,c),d(n,f),d(n,p),d(n,m),C(g,n,null),_=!0},p(w,[T]){(!_||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Color"))&&(wr.title=e);const S={};T&1&&(S.$$scope={dirty:T,ctx:w}),g.$set(S)},i(w){_||($(g.$$.fragment,w),_=!0)},o(w){x(g.$$.fragment,w),_=!1},d(w){w&&v(t),w&&v(n),A(g)}}}class lm extends Y{constructor(e){super(),Z(this,e,null,rm,K,{})}}var vr=`# [Floating UI](https://floating-ui.com/) action for \`use\` Svelte directive

- allows you to use both Svelte transitions and CSS transitions
- dependence [@floating-ui/dom](https://github.com/floating-ui/floating-ui)

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/floating-ui-action)

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
`;function im(o){let e,t,n;return t=new Ft({props:{source:vr.slice(vr.search(/^[#\s]+API$/im)+1)}}),{c(){e=b("section"),R(t.$$.fragment),h(e,"class","documentation")},m(s,r){k(s,e,r),C(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){x(t.$$.fragment,s),n=!1},d(s){s&&v(e),A(t)}}}class am extends Y{constructor(e){super(),Z(this,e,null,im,K,{})}}function $r(o,e,t){const n=o.slice();return n[20]=e[t],n}function kr(o,e,t){const n=o.slice();return n[23]=e[t],n}function yr(o){let e,t=o[23]+"",n,s;return{c(){e=b("option"),n=j(t),e.__value=s=o[23],e.value=e.__value},m(r,l){k(r,e,l),d(e,n)},p:ee,d(r){r&&v(e)}}}function xr(o){let e,t=o[20]+"",n,s;return{c(){e=b("option"),n=j(t),e.__value=s=o[12][o[20]],e.value=e.__value},m(r,l){k(r,e,l),d(e,n)},p:ee,d(r){r&&v(e)}}}function Tr(o){let e,t,n,s,r,l,i,a;return{c(){e=b("div"),t=b("div"),n=j(`
        Lorem ipsum dolor sit amet consectetur adipisicing elit`),h(t,"class","arrow svelte-1b5318a"),h(e,"class","tooltip not-prose svelte-1b5318a")},m(c,u){k(c,e,u),d(e,t),o[19](t),d(e,n),l=!0,i||(a=Ue(s=o[9].call(null,e,{placement:o[5],middleware:o[6],callback:o[10]})),i=!0)},p(c,u){s&&Ve(s.update)&&u&96&&s.update.call(null,{placement:c[5],middleware:c[6],callback:c[10]})},i(c){l||(c&&st(()=>{r||(r=Ct(e,o[7],{},!0)),r.run(1)}),l=!0)},o(c){c&&(r||(r=Ct(e,o[7],{},!1)),r.run(0)),l=!1},d(c){c&&v(e),o[19](null),c&&r&&r.end(),i=!1,a()}}}function cm(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P,z,O,I,L,B,q,W,oe,Q=o[4]?"hide":"show",D,U,J,re,ce,fe,Pe,Ie,ye,we=o[11],ne=[];for(let te=0;te<we.length;te+=1)ne[te]=yr(kr(o,we,te));let xe=Object.keys(o[12]),be=[];for(let te=0;te<xe.length;te+=1)be[te]=xr($r(o,xe,te));let he=o[4]&&Tr(o);return fe=new Xe({props:{code:`<script lang="ts"
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
          placement: '${o[5]}',
          middleware,
          callback: adjustArrow
        }}
        ${o[7]!=null?`transition:${o[7].name}|local`:""}
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
</style>`}}),{c(){e=b("section"),t=b("div"),n=b("label"),s=b("span"),s.textContent="placement",r=y(),l=b("select");for(let te=0;te<ne.length;te+=1)ne[te].c();i=y(),a=b("label"),c=b("input"),u=y(),f=b("span"),f.textContent="flip",p=y(),m=b("label"),g=b("span"),g.textContent="offset",_=y(),w=b("input"),T=y(),S=b("label"),N=b("span"),N.textContent="size padding",E=y(),M=b("input"),P=y(),z=b("label"),O=b("span"),O.textContent="transition",I=y(),L=b("select");for(let te=0;te<be.length;te+=1)be[te].c();B=y(),q=b("div"),W=b("button"),oe=j("Click me to "),D=j(Q),U=y(),he&&he.c(),J=y(),re=b("h3"),re.textContent="Code",ce=y(),R(fe.$$.fragment),h(l,"class","input"),o[5]===void 0&&st(()=>o[13].call(l)),h(c,"type","checkbox"),h(a,"class","whitespace-nowrap"),h(w,"type","number"),h(w,"class","input w-[8ch]"),h(M,"type","number"),h(M,"class","input w-[8ch]"),h(L,"class","input"),o[7]===void 0&&st(()=>o[17].call(L)),h(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),h(W,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),h(q,"class","h-64 flex items-center justify-center border"),h(e,"class","prose max-w-none my-4")},m(te,Te){k(te,e,Te),d(e,t),d(t,n),d(n,s),d(n,r),d(n,l);for(let Ee=0;Ee<ne.length;Ee+=1)ne[Ee].m(l,null);ht(l,o[5]),d(t,i),d(t,a),d(a,c),c.checked=o[2],d(a,u),d(a,f),d(t,p),d(t,m),d(m,g),d(m,_),d(m,w),tt(w,o[1]),d(t,T),d(t,S),d(S,N),d(S,E),d(S,M),tt(M,o[3]),d(t,P),d(t,z),d(z,O),d(z,I),d(z,L);for(let Ee=0;Ee<be.length;Ee+=1)be[Ee].m(L,null);ht(L,o[7]),d(e,B),d(e,q),d(q,W),d(W,oe),d(W,D),d(q,U),he&&he.m(q,null),d(e,J),d(e,re),d(e,ce),C(fe,e,null),Pe=!0,Ie||(ye=[G(l,"change",o[13]),G(c,"change",o[14]),G(w,"input",o[15]),G(M,"input",o[16]),G(L,"change",o[17]),Ue(o[8].call(null,W)),G(W,"click",o[18])],Ie=!0)},p(te,[Te]){if(Te&2048){we=te[11];let ve;for(ve=0;ve<we.length;ve+=1){const Se=kr(te,we,ve);ne[ve]?ne[ve].p(Se,Te):(ne[ve]=yr(Se),ne[ve].c(),ne[ve].m(l,null))}for(;ve<ne.length;ve+=1)ne[ve].d(1);ne.length=we.length}if(Te&2080&&ht(l,te[5]),Te&4&&(c.checked=te[2]),Te&2&&at(w.value)!==te[1]&&tt(w,te[1]),Te&8&&at(M.value)!==te[3]&&tt(M,te[3]),Te&4096){xe=Object.keys(te[12]);let ve;for(ve=0;ve<xe.length;ve+=1){const Se=$r(te,xe,ve);be[ve]?be[ve].p(Se,Te):(be[ve]=xr(Se),be[ve].c(),be[ve].m(L,null))}for(;ve<be.length;ve+=1)be[ve].d(1);be.length=xe.length}Te&4224&&ht(L,te[7]),(!Pe||Te&16)&&Q!==(Q=te[4]?"hide":"show")&&ke(D,Q),te[4]?he?(he.p(te,Te),Te&16&&$(he,1)):(he=Tr(te),he.c(),$(he,1),he.m(q,null)):he&&(ge(),x(he,1,1,()=>{he=null}),me());const Ee={};Te&160&&(Ee.code=`<script lang="ts"
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
          placement: '${te[5]}',
          middleware,
          callback: adjustArrow
        }}
        ${te[7]!=null?`transition:${te[7].name}|local`:""}
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
</style>`),fe.$set(Ee)},i(te){Pe||($(he),$(fe.$$.fragment,te),Pe=!0)},o(te){x(he),x(fe.$$.fragment,te),Pe=!1},d(te){te&&v(e),Fe(ne,te),Fe(be,te),he&&he.d(),A(fe),Ie=!1,ze(ye)}}}function um(o,e,t){const[n,s]=Qn(!0);let r,l=!1;function i(z){const{placement:O,middlewareData:I}=z;if(I.arrow){const{x:L,y:B}=I.arrow,q={top:"bottom",right:"left",bottom:"top",left:"right"}[O.split("-")[0]];q&&Object.assign(r.style,{left:L!=null?`${L}px`:"",top:B!=null?`${B}px`:"",right:"",bottom:"",[q]:"-6px"})}}const a=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let c=a[0],u=16,f=!0,p=16,m=[],g;const _={slide:Jt,scale:od,fade:nd,blur:td,none:()=>({delay:0,duration:0})};function w(){c=cn(this),t(5,c),t(11,a)}function T(){f=this.checked,t(2,f)}function S(){u=at(this.value),t(1,u)}function N(){p=at(this.value),t(3,p)}function E(){g=cn(this),t(7,g),t(12,_)}const M=()=>t(4,l=!l);function P(z){je[z?"unshift":"push"](()=>{r=z,t(0,r)})}return o.$$.update=()=>{o.$$.dirty&15&&t(6,m=[Yn(u),f&&Zn(),Dl({padding:p,apply({availableWidth:z,availableHeight:O,elements:I}){Object.assign(I.floating.style,{maxWidth:`${z}px`,maxHeight:`${O}px`})}}),r&&Ll({element:r})].filter(z=>!!z))},[r,u,f,p,l,c,m,g,n,s,i,a,_,w,T,S,N,E,M,P]}class fm extends Y{constructor(e){super(),Z(this,e,um,cm,K,{})}}function Sr(o,e,t){const n=o.slice();return n[18]=e[t],n}function Er(o){let e,t=o[18]+"",n,s;return{c(){e=b("option"),n=j(t),e.__value=s=o[18],e.value=e.__value},m(r,l){k(r,e,l),d(e,n)},p:ee,d(r){r&&v(e)}}}function pm(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P,z,O,I,L=o[1]?"hide":"show",B,q,W,oe,Q,D,U,J,re,ce,fe,Pe,Ie,ye=o[10],we=[];for(let ne=0;ne<ye.length;ne+=1)we[ne]=Er(Sr(o,ye,ne));return ce=new Xe({props:{code:`<script lang="ts"
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
        placement: '${o[5]}',
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
</style>`}}),{c(){e=b("section"),t=b("div"),n=b("label"),s=b("span"),s.textContent="placement",r=y(),l=b("select");for(let ne=0;ne<we.length;ne+=1)we[ne].c();i=y(),a=b("label"),c=b("input"),u=y(),f=b("span"),f.textContent="flip",p=y(),m=b("label"),g=b("span"),g.textContent="offset",_=y(),w=b("input"),T=y(),S=b("label"),N=b("span"),N.textContent="size padding",E=y(),M=b("input"),P=y(),z=b("div"),O=b("button"),I=j("Click me to "),B=j(L),q=y(),W=b("div"),oe=b("div"),Q=j(`
      Lorem ipsum dolor sit amet consectetur adipisicing elit`),U=y(),J=b("h3"),J.textContent="Code",re=y(),R(ce.$$.fragment),h(l,"class","input"),o[5]===void 0&&st(()=>o[11].call(l)),h(c,"type","checkbox"),h(a,"class","whitespace-nowrap"),h(w,"type","number"),h(w,"class","input w-[8ch]"),h(M,"type","number"),h(M,"class","input w-[8ch]"),h(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),h(O,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),h(oe,"class","arrow svelte-1lvd4kc"),h(W,"class","tooltip not-prose svelte-1lvd4kc"),Be(W,"in",o[1]),Be(W,"out",!o[1]),h(z,"class","h-64 flex items-center justify-center border"),h(e,"class","prose max-w-none my-4")},m(ne,xe){k(ne,e,xe),d(e,t),d(t,n),d(n,s),d(n,r),d(n,l);for(let be=0;be<we.length;be+=1)we[be].m(l,null);ht(l,o[5]),d(t,i),d(t,a),d(a,c),c.checked=o[3],d(a,u),d(a,f),d(t,p),d(t,m),d(m,g),d(m,_),d(m,w),tt(w,o[2]),d(t,T),d(t,S),d(S,N),d(S,E),d(S,M),tt(M,o[4]),d(e,P),d(e,z),d(z,O),d(O,I),d(O,B),d(z,q),d(z,W),d(W,oe),o[16](oe),d(W,Q),d(e,U),d(e,J),d(e,re),C(ce,e,null),fe=!0,Pe||(Ie=[G(l,"change",o[11]),G(c,"change",o[12]),G(w,"input",o[13]),G(M,"input",o[14]),Ue(o[7].call(null,O)),G(O,"click",o[15]),Ue(D=o[8].call(null,W,{placement:o[5],middleware:o[6],callback:o[9]}))],Pe=!0)},p(ne,[xe]){if(xe&1024){ye=ne[10];let he;for(he=0;he<ye.length;he+=1){const te=Sr(ne,ye,he);we[he]?we[he].p(te,xe):(we[he]=Er(te),we[he].c(),we[he].m(l,null))}for(;he<we.length;he+=1)we[he].d(1);we.length=ye.length}xe&1056&&ht(l,ne[5]),xe&8&&(c.checked=ne[3]),xe&4&&at(w.value)!==ne[2]&&tt(w,ne[2]),xe&16&&at(M.value)!==ne[4]&&tt(M,ne[4]),(!fe||xe&2)&&L!==(L=ne[1]?"hide":"show")&&ke(B,L),D&&Ve(D.update)&&xe&96&&D.update.call(null,{placement:ne[5],middleware:ne[6],callback:ne[9]}),xe&2&&Be(W,"in",ne[1]),xe&2&&Be(W,"out",!ne[1]);const be={};xe&32&&(be.code=`<script lang="ts"
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
        placement: '${ne[5]}',
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
</style>`),ce.$set(be)},i(ne){fe||($(ce.$$.fragment,ne),fe=!0)},o(ne){x(ce.$$.fragment,ne),fe=!1},d(ne){ne&&v(e),Fe(we,ne),o[16](null),A(ce),Pe=!1,ze(Ie)}}}function dm(o,e,t){const[n,s,r]=Qn(!0);let l,i=!1;function a(M){const{placement:P,middlewareData:z}=M;if(z.arrow){const{x:O,y:I}=z.arrow,L={top:"bottom",right:"left",bottom:"top",left:"right"}[P.split("-")[0]];L&&Object.assign(l.style,{left:O!=null?`${O}px`:"",top:I!=null?`${I}px`:"",right:"",bottom:"",[L]:"-6px"})}}const c=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let u=c[0],f=16,p=!0,m=16,g=[];function _(){u=cn(this),t(5,u),t(10,c)}function w(){p=this.checked,t(3,p)}function T(){f=at(this.value),t(2,f)}function S(){m=at(this.value),t(4,m)}const N=()=>t(1,i=!i);function E(M){je[M?"unshift":"push"](()=>{l=M,t(0,l)})}return o.$$.update=()=>{o.$$.dirty&2&&r(i),o.$$.dirty&29&&t(6,g=[Yn(f),p&&Zn(),Dl({padding:m,apply({availableWidth:M,availableHeight:P,elements:z}){Object.assign(z.floating.style,{maxWidth:`${M}px`,maxHeight:`${P}px`})}}),l&&Ll({element:l})].filter(M=>!!M))},[l,i,f,p,m,u,g,n,s,a,c,_,w,T,S,N,E]}class gm extends Y{constructor(e){super(),Z(this,e,dm,pm,K,{})}}const{document:Cr}=Mt;function mm(o){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function hm(o){let e;return{c(){e=j("Transition JS demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function bm(o){let e;return{c(){e=j("Transition CSS demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function _m(o){let e,t,n,s,r,l;return e=new de({props:{$$slots:{default:[mm]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[hm]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[bm]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment)},m(i,a){C(e,i,a),k(i,t,a),C(n,i,a),k(i,s,a),C(r,i,a),l=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){x(e.$$.fragment,i),x(n.$$.fragment,i),x(r.$$.fragment,i),l=!1},d(i){A(e,i),i&&v(t),A(n,i),i&&v(s),A(r,i)}}}function wm(o){let e,t;return e=new am({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function vm(o){let e,t;return e=new fm({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function $m(o){let e,t;return e=new gm({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function km(o){let e,t,n,s,r,l,i,a;return e=new lt({props:{$$slots:{default:[_m]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[wm]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[vm]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[$m]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,s,u),C(r,c,u),k(c,l,u),C(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(r.$$.fragment,c),x(i.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(s),A(r,c),c&&v(l),A(i,c)}}}function ym(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_;return Cr.title=e=document.title.replace(/(•).*$/,"$1 Floating UI action"),g=new rt({props:{$$slots:{default:[km]},$$scope:{ctx:o}}}),{c(){t=y(),n=b("section"),s=b("a"),s.textContent="Home",r=y(),l=b("h1"),l.textContent="Action to use Floating UI",i=y(),a=b("a"),c=b("img"),f=y(),p=b("ul"),p.innerHTML=`<li>allows you to use both Svelte transitions and CSS transitions</li> 
    <li>dependence <a href="https://github.com/floating-ui/floating-ui" target="_blank">@floating-ui/dom</a></li>`,m=y(),R(g.$$.fragment),h(s,"class","float-right"),h(s,"href","/"),h(l,"class","text-2xl"),h(c,"class","max-w-[4em]"),Ge(c.src,u=et)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),h(a,"target","_blank"),h(p,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m(w,T){k(w,t,T),k(w,n,T),d(n,s),d(n,r),d(n,l),d(n,i),d(n,a),d(a,c),d(n,f),d(n,p),d(n,m),C(g,n,null),_=!0},p(w,[T]){(!_||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Floating UI action"))&&(Cr.title=e);const S={};T&1&&(S.$$scope={dirty:T,ctx:w}),g.$set(S)},i(w){_||($(g.$$.fragment,w),_=!0)},o(w){x(g.$$.fragment,w),_=!1},d(w){w&&v(t),w&&v(n),A(g)}}}class xm extends Y{constructor(e){super(),Z(this,e,null,ym,K,{})}}var Ar=`# Action to control \`focusin\` and \`focusout\` for Svelte directive \`use\`

- no dependencies
- based on \`focusin\` and \`focusout\` events.
- correctly detects loss of focus with \`tab\` key

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/focus-action)

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
`;function Tm(o){let e,t,n;return t=new Ft({props:{source:Ar.slice(Ar.search(/^[#\s]+API$/im)+1)}}),{c(){e=b("section"),R(t.$$.fragment),h(e,"class","documentation")},m(s,r){k(s,e,r),C(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){x(t.$$.fragment,s),n=!1},d(s){s&&v(e),A(t)}}}class Sm extends Y{constructor(e){super(),Z(this,e,null,Tm,K,{})}}function Em(o){let e;return{c(){e=j("\xA0")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Cm(o){let e;return{c(){e=j("Try to close the dropdown block by clicking outside")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Am(o){let e;return{c(){e=j("Select")},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function Rm(o){let e,t,n;return{c(){e=j("Selected "),t=b("small"),n=j(o[3]),h(t,"class","font-semibold text-gray-400")},m(s,r){k(s,e,r),k(s,t,r),d(t,n)},p(s,r){r&8&&ke(n,s[3])},d(s){s&&v(e),s&&v(t)}}}function Rr(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M;return{c(){e=b("div"),t=b("div"),t.textContent="Choose one of the items",n=y(),s=b("div"),r=b("label"),l=b("input"),i=y(),a=b("span"),a.textContent="Firts",c=y(),u=b("label"),f=b("input"),p=y(),m=b("span"),m.textContent="Second",g=y(),_=b("label"),w=b("input"),T=y(),S=b("span"),S.textContent="Third",h(t,"class","alert svelte-1hjb9pe"),Be(t,"error",o[2]),h(l,"type","radio"),l.__value="Firts",l.value=l.__value,h(l,"name","item"),o[8][0].push(l),h(f,"type","radio"),f.__value="Second",f.value=f.__value,h(f,"name","item"),o[8][0].push(f),h(w,"type","radio"),w.__value="Third",w.value=w.__value,h(w,"name","item"),o[8][0].push(w),h(s,"class","mt-2 flex gap-4 px-2"),h(e,"class","absolute border shadow-md rounded-md p-2 top-2 bg-white"),h(e,"tabindex","-1")},m(P,z){k(P,e,z),d(e,t),d(e,n),d(e,s),d(s,r),d(r,l),l.checked=l.__value===o[3],d(r,i),d(r,a),d(s,c),d(s,u),d(u,f),f.checked=f.__value===o[3],d(u,p),d(u,m),d(s,g),d(s,_),d(_,w),w.checked=w.__value===o[3],d(_,T),d(_,S),o[11](e),E||(M=[G(l,"change",o[7]),G(f,"change",o[9]),G(w,"change",o[10]),Ue(N=gn.call(null,e,[void 0,o[4]]))],E=!0)},p(P,z){z&4&&Be(t,"error",P[2]),z&8&&(l.checked=l.__value===P[3]),z&8&&(f.checked=f.__value===P[3]),z&8&&(w.checked=w.__value===P[3])},d(P){P&&v(e),o[8][0].splice(o[8][0].indexOf(l),1),o[8][0].splice(o[8][0].indexOf(f),1),o[8][0].splice(o[8][0].indexOf(w),1),o[11](null),E=!1,ze(M)}}}function Nm(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T;function S(I,L){return I[1]&&!I[3]?Cm:Em}let N=S(o),E=N(o);function M(I,L){return I[3]?Rm:Am}let P=M(o),z=P(o),O=o[1]&&Rr(o);return g=new Xe({props:{code:`<script lang="ts"
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
`}}),{c(){e=b("section"),t=b("div"),E.c(),n=y(),s=b("div"),r=b("button"),z.c(),l=y(),i=b("button"),a=j("Reset"),c=y(),u=b("div"),O&&O.c(),f=y(),p=b("h3"),p.textContent="Code",m=y(),R(g.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(r,"class","input w-[200px]"),h(i,"class","input"),i.disabled=o[1],h(u,"class","relative"),h(s,"class","w-fit mx-auto"),h(e,"class","prose max-w-none my-4")},m(I,L){k(I,e,L),d(e,t),E.m(t,null),d(e,n),d(e,s),d(s,r),z.m(r,null),d(s,l),d(s,i),d(i,a),d(s,c),d(s,u),O&&O.m(u,null),d(e,f),d(e,p),d(e,m),C(g,e,null),_=!0,w||(T=[G(r,"click",o[5]),G(i,"click",o[6])],w=!0)},p(I,[L]){N!==(N=S(I))&&(E.d(1),E=N(I),E&&(E.c(),E.m(t,null))),P===(P=M(I))&&z?z.p(I,L):(z.d(1),z=P(I),z&&(z.c(),z.m(r,null))),(!_||L&2)&&(i.disabled=I[1]),I[1]?O?O.p(I,L):(O=Rr(I),O.c(),O.m(u,null)):O&&(O.d(1),O=null)},i(I){_||($(g.$$.fragment,I),_=!0)},o(I){x(g.$$.fragment,I),_=!1},d(I){I&&v(e),E.d(),z.d(),O&&O.d(),A(g),w=!1,ze(T)}}}function Mm(o,e,t){let n=!1,s=!1,r,l="";function i(){l?(t(1,n=!1),t(2,s=!1)):t(2,s=!0)}const a=[[]],c=()=>t(1,n=!0),u=()=>t(3,l="");function f(){l=this.__value,t(3,l)}function p(){l=this.__value,t(3,l)}function m(){l=this.__value,t(3,l)}function g(_){je[_?"unshift":"push"](()=>{r=_,t(0,r)})}return o.$$.update=()=>{o.$$.dirty&1&&r&&r.focus()},[r,n,s,l,i,c,u,f,a,p,m,g]}class Pm extends Y{constructor(e){super(),Z(this,e,Mm,Nm,K,{})}}function Nr(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P;return{c(){e=b("ul"),t=b("li"),n=b("button"),n.textContent="Open",s=y(),r=b("li"),l=b("button"),l.textContent="Close",i=y(),a=b("li"),c=b("button"),c.textContent="Upload",u=y(),f=b("li"),p=b("button"),p.textContent="Download",m=y(),g=b("li"),_=y(),w=b("li"),T=b("button"),T.textContent="About",h(n,"class","svelte-nxgrg9"),h(t,"class","svelte-nxgrg9"),h(l,"class","svelte-nxgrg9"),h(r,"class","svelte-nxgrg9"),h(c,"class","svelte-nxgrg9"),h(a,"class","svelte-nxgrg9"),h(p,"class","svelte-nxgrg9"),h(f,"class","svelte-nxgrg9"),h(g,"class","separator svelte-nxgrg9"),h(T,"class","svelte-nxgrg9"),h(w,"class","svelte-nxgrg9"),h(e,"class","dropdown svelte-nxgrg9"),h(e,"tabindex","-1")},m(z,O){k(z,e,O),d(e,t),d(t,n),d(e,s),d(e,r),d(r,l),d(e,i),d(e,a),d(a,c),d(e,u),d(e,f),d(f,p),d(e,m),d(e,g),d(e,_),d(e,w),d(w,T),E=!0,M||(P=[G(n,"click",o[4]),G(l,"click",o[5]),G(c,"click",o[6]),G(p,"click",o[7]),G(T,"click",o[8]),Ue(S=o[2].call(null,e,{placement:"bottom-start",middleware:[Zn(),Yn(8)]}))],M=!0)},p:ee,i(z){E||(z&&st(()=>{N||(N=Ct(e,Jt,{},!0)),N.run(1)}),E=!0)},o(z){z&&(N||(N=Ct(e,Jt,{},!1)),N.run(0)),E=!1},d(z){z&&v(e),z&&N&&N.end(),M=!1,ze(P)}}}function zm(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_=o[0]&&Nr(o);return f=new Xe({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=b("section"),t=b("div"),t.innerHTML='This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a>',n=y(),s=b("div"),r=b("button"),r.textContent="Action",l=y(),_&&_.c(),a=y(),c=b("h3"),c.textContent="Code",u=y(),R(f.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(r,"class","input"),h(s,"class","w-fit mx-auto"),h(e,"class","prose max-w-none my-4")},m(w,T){k(w,e,T),d(e,t),d(e,n),d(e,s),d(s,r),d(s,l),_&&_.m(s,null),d(e,a),d(e,c),d(e,u),C(f,e,null),p=!0,m||(g=[Ue(o[1].call(null,r)),G(r,"click",o[3]),Ue(i=gn.call(null,s,[void 0,o[9]]))],m=!0)},p(w,[T]){w[0]?_?(_.p(w,T),T&1&&$(_,1)):(_=Nr(w),_.c(),$(_,1),_.m(s,null)):_&&(ge(),x(_,1,1,()=>{_=null}),me()),i&&Ve(i.update)&&T&1&&i.update.call(null,[void 0,w[9]])},i(w){p||($(_),$(f.$$.fragment,w),p=!0)},o(w){x(_),x(f.$$.fragment,w),p=!1},d(w){w&&v(e),_&&_.d(),A(f),m=!1,ze(g)}}}function Om(o,e,t){const[n,s,r]=Qn(!0);let l=!1;const i=()=>t(0,l=!0),a=()=>t(0,l=!1),c=()=>t(0,l=!1),u=()=>t(0,l=!1),f=()=>t(0,l=!1),p=()=>t(0,l=!1),m=()=>t(0,l=!1);return o.$$.update=()=>{o.$$.dirty&1&&r(l)},[l,n,s,i,a,c,u,f,p,m]}class Im extends Y{constructor(e){super(),Z(this,e,Om,zm,K,{})}}function Lm(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N;return w=new Xe({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=b("section"),t=b("div"),t.textContent="This example highlights a focused fieldset.",n=y(),s=b("div"),r=b("div"),l=b("fieldset"),l.innerHTML=`<legend class="svelte-c2p0zs">Your details</legend> 
        <label class="svelte-c2p0zs"><span>Name</span> 
          <input type="text" class="input svelte-c2p0zs"/></label> 
        <label class="svelte-c2p0zs"><span>Email</span> 
          <input type="text" class="input svelte-c2p0zs"/></label> 
        <label class="svelte-c2p0zs"><span>Phone</span> 
          <input type="text" class="input svelte-c2p0zs"/></label>`,a=y(),c=b("div"),c.innerHTML='<button type="button" class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8 svelte-c2p0zs">Submit</button>',u=y(),f=b("fieldset"),f.innerHTML=`<legend class="svelte-c2p0zs">Delivery address</legend> 
      <label class="svelte-c2p0zs"><span>Address</span> 
        <textarea rows="3" class="input svelte-c2p0zs"></textarea></label> 
      <label class="svelte-c2p0zs"><span>Postcode</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Country</span> 
        <input type="text" class="input svelte-c2p0zs"/></label>`,m=y(),g=b("h3"),g.textContent="Code",_=y(),R(w.$$.fragment),h(t,"class","mb-8 pb-2 border-b text-center text-gray-500"),h(l,"class","svelte-c2p0zs"),Be(l,"active",o[0]),h(c,"class","mt-8"),h(r,"class","basis-1/2"),h(f,"class","basis-1/2 svelte-c2p0zs"),Be(f,"active",o[1]),h(s,"class","form svelte-c2p0zs"),h(e,"class","prose max-w-none my-4")},m(E,M){k(E,e,M),d(e,t),d(e,n),d(e,s),d(s,r),d(r,l),d(r,a),d(r,c),d(s,u),d(s,f),d(e,m),d(e,g),d(e,_),C(w,e,null),T=!0,S||(N=[Ue(i=gn.call(null,l,[o[2],o[3]])),Ue(p=gn.call(null,f,[o[4],o[5]]))],S=!0)},p(E,[M]){i&&Ve(i.update)&&M&1&&i.update.call(null,[E[2],E[3]]),M&1&&Be(l,"active",E[0]),p&&Ve(p.update)&&M&2&&p.update.call(null,[E[4],E[5]]),M&2&&Be(f,"active",E[1])},i(E){T||($(w.$$.fragment,E),T=!0)},o(E){x(w.$$.fragment,E),T=!1},d(E){E&&v(e),A(w),S=!1,ze(N)}}}function Dm(o,e,t){let n=!1,s=!1;return[n,s,()=>t(0,n=!0),()=>t(0,n=!1),()=>t(1,s=!0),()=>t(1,s=!1)]}class jm extends Y{constructor(e){super(),Z(this,e,Dm,Lm,K,{})}}const{document:Mr}=Mt;function Bm(o){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Fm(o){let e;return{c(){e=j("Reqired demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Hm(o){let e;return{c(){e=j("Dropdown demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Um(o){let e;return{c(){e=j("Style demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function qm(o){let e,t,n,s,r,l,i,a;return e=new de({props:{$$slots:{default:[Bm]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Fm]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[Hm]},$$scope:{ctx:o}}}),i=new de({props:{$$slots:{default:[Um]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,s,u),C(r,c,u),k(c,l,u),C(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(r.$$.fragment,c),x(i.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(s),A(r,c),c&&v(l),A(i,c)}}}function Km(o){let e,t;return e=new Sm({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Wm(o){let e,t;return e=new Pm({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Gm(o){let e,t;return e=new Im({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Zm(o){let e,t;return e=new jm({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Ym(o){let e,t,n,s,r,l,i,a,c,u;return e=new lt({props:{$$slots:{default:[qm]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Km]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[Wm]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[Gm]},$$scope:{ctx:o}}}),c=new pe({props:{$$slots:{default:[Zm]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment),a=y(),R(c.$$.fragment)},m(f,p){C(e,f,p),k(f,t,p),C(n,f,p),k(f,s,p),C(r,f,p),k(f,l,p),C(i,f,p),k(f,a,p),C(c,f,p),u=!0},p(f,p){const m={};p&1&&(m.$$scope={dirty:p,ctx:f}),e.$set(m);const g={};p&1&&(g.$$scope={dirty:p,ctx:f}),n.$set(g);const _={};p&1&&(_.$$scope={dirty:p,ctx:f}),r.$set(_);const w={};p&1&&(w.$$scope={dirty:p,ctx:f}),i.$set(w);const T={};p&1&&(T.$$scope={dirty:p,ctx:f}),c.$set(T)},i(f){u||($(e.$$.fragment,f),$(n.$$.fragment,f),$(r.$$.fragment,f),$(i.$$.fragment,f),$(c.$$.fragment,f),u=!0)},o(f){x(e.$$.fragment,f),x(n.$$.fragment,f),x(r.$$.fragment,f),x(i.$$.fragment,f),x(c.$$.fragment,f),u=!1},d(f){A(e,f),f&&v(t),A(n,f),f&&v(s),A(r,f),f&&v(l),A(i,f),f&&v(a),A(c,f)}}}function Vm(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_;return Mr.title=e=document.title.replace(/(•).*$/,"$1 Focus action"),g=new rt({props:{$$slots:{default:[Ym]},$$scope:{ctx:o}}}),{c(){t=y(),n=b("section"),s=b("a"),s.textContent="Home",r=y(),l=b("h1"),l.innerHTML=`Action to control <code>focusin</code> and <code>focusout</code><br/>for directive
    <code>use</code>`,i=y(),a=b("a"),c=b("img"),f=y(),p=b("ul"),p.innerHTML=`<li>no dependencies</li> 
    <li>correctly detects loss of focus with <code>Tab</code></li>`,m=y(),R(g.$$.fragment),h(s,"class","float-right"),h(s,"href","/"),h(l,"class","text-2xl"),h(c,"class","max-w-[4em]"),Ge(c.src,u=et)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/focus-action"),h(a,"target","_blank"),h(p,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m(w,T){k(w,t,T),k(w,n,T),d(n,s),d(n,r),d(n,l),d(n,i),d(n,a),d(a,c),d(n,f),d(n,p),d(n,m),C(g,n,null),_=!0},p(w,[T]){(!_||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Focus action"))&&(Mr.title=e);const S={};T&1&&(S.$$scope={dirty:T,ctx:w}),g.$set(S)},i(w){_||($(g.$$.fragment,w),_=!0)},o(w){x(g.$$.fragment,w),_=!1},d(w){w&&v(t),w&&v(n),A(g)}}}class Xm extends Y{constructor(e){super(),Z(this,e,null,Vm,K,{})}}var Pr=`# Action to call a function by keyboard shortcut for Svelte directive \`use\`

- allows to reduce keyboard event handling code
- dependence [\`keyboard-event-to-string\`](https://www.npmjs.com/package/keyboard-event-to-string)

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/keyboard-shortcut-action)

## Install

### NPM

\`\`\`sh
npm i -D @apsc/keyboard-shortcut-action
\`\`\`

### PNPM

\`\`\`sh
pnpm add -D @apsc/keyboard-shortcut-action
\`\`\`

## API

\`\`\`ts
let active = 0;
const items = [...Array(20).keys()].map((i) => ({
  id: i + 1,
  message: \`Text #\${(i + 1).toString().padStart(2, '0')}\`
}));

<div
  tabindex="0"
  use:useKeyboardShortcut={{
    event: 'keydown',
    preventDefault: true,
    fns: {
      'Ctrl+ArrowUp': () => (active = 0),
      'ArrowUp': () => (active = Math.max(0, active - 1)),
      'Ctrl+ArrowDown': () => (active = items.length - 1),
      'ArrowDown': () => (active = Math.min(items.length - 1, active + 1))
    }
  }}
>
  {#each items as item, index}
    <div class:active={active === index}>{item.id} {item.message}</div>
  {/each}
</div>
\`\`\`

#### useKeyboardShortcut options

\`\`\`ts
export interface UseKeyboardShortcutOptions {
  event: 'keypress' | 'keydown' | 'keyup';
  capture?: boolean; // default false
  passive?: boolean; // default false
  preventDefault?: boolean; // default false
  stopPropagation?: boolean; // default false
  stopImmediatePropagation?: boolean; // default false
  fns: Record<string, (event: KeyboardEvent) => void>;
}
\`\`\`

#### Lifecycle

The action attaches a handler to the corresponding event \`options.event\` with parameters

- \`capture\`
- \`passive\`

The handler converts event to \`shortcut\` using package [\`keyboard-event-to-string\`](https://www.npmjs.com/package/keyboard-event-to-string).

If function \`options.fns[shortcut]\` exists then handler executes

- \`event.preventDefault()\` if \`options.preventDefault == true\`
- \`event.stopPropagation()\` if \`options.stopPropagation == true\`
- \`event.stopImmediatePropagation()\` if \`options.stopImmediatePropagation == true\`

After it calls \`options.fns[shortcut](event)\`.

**Note!** The action modifies [global options](https://github.com/ndp-software/keyboard-event-to-string#options)

\`\`\`js
setOptions({ joinWith: '+' });
\`\`\`

Therefore, the shortcut obtained in the action are \`Ctrl+A\` instead \`Ctrl + A\`.
`;function Qm(o){let e,t,n;return t=new Ft({props:{source:Pr.slice(Pr.search(/^[#\s]+API$/im)+1)}}),{c(){e=b("section"),R(t.$$.fragment),h(e,"class","documentation")},m(s,r){k(s,e,r),C(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){x(t.$$.fragment,s),n=!1},d(s){s&&v(e),A(t)}}}class Jm extends Y{constructor(e){super(),Z(this,e,null,Qm,K,{})}}const Gl={alt:"Alt",cmd:"Cmd",ctrl:"Ctrl",shift:"Shift",joinWith:" + ",hideKey:"never"};let Jn=Gl;const eh=()=>({alphanumeric:/^Key([A-Z01-9])$/,alpha:/^Key([A-Z])$/,always:/^Key(.*)$/,never:/^(.*)$/})[Jn.hideKey];function th(o){return{character:[16,17,18,91,93,224].indexOf(o.keyCode)!==-1?null:o.code.replace(eh(),"$1"),modifiers:{cmd:o.metaKey,ctrl:o.ctrlKey,alt:o.altKey,shift:o.shiftKey}}}function nh(o){const e=th(o),n=Object.entries(e.modifiers).reduce((s,[r,l])=>(l&&s.push(Jn[r]),s),[]);return e.character&&n.push(e.character),n}function oh(o){return Jn=Object.assign(Object.assign({},Gl),o)}const sh=o=>nh(o).join(Jn.joinWith);oh({joinWith:"+"});function zo(o,e){let{event:t,capture:n=!1,passive:s=!1,preventDefault:r=!1,stopImmediatePropagation:l=!1,stopPropagation:i=!1,fns:a}=e;function c(u){const f=sh(u);typeof a[f]=="function"&&(r&&u.preventDefault(),i&&u.stopPropagation(),l&&u.stopImmediatePropagation(),a[f](u))}return o.addEventListener(t,c,{capture:n,passive:s}),{destroy(){o.removeEventListener(t,c,{capture:n})},update(u){const f=t!==u.event||n!==u.capture||s!==u.passive;f&&o.removeEventListener(t,c,{capture:n}),{event:t,capture:n=!1,passive:s=!1,preventDefault:r=!1,stopImmediatePropagation:l=!1,stopPropagation:i=!1,fns:a}=u,f&&o.addEventListener(t,c,{capture:n,passive:s})}}}function zr(o,e,t){const n=o.slice();return n[18]=e[t],n[20]=t,n}function Or(o){let e,t=o[18]+"",n,s,r,l;function i(){return o[17](o[20])}return{c(){e=b("div"),n=j(t),s=y(),h(e,"class","beverage-item svelte-12wr8dw"),Be(e,"active",o[20]===o[1])},m(a,c){k(a,e,c),d(e,n),d(e,s),r||(l=G(e,"click",i),r=!0)},p(a,c){o=a,c&2&&Be(e,"active",o[20]===o[1])},d(a){a&&v(e),r=!1,l()}}}function rh(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P=o[2],z=[];for(let O=0;O<P.length;O+=1)z[O]=Or(zr(o,P,O));return S=new Xe({props:{code:`<script lang="ts"
  import useKeyboardShortcut from '@apsc/keyboard-shortcut-action';
  import { onMount } from 'svelte';

  const beverages = [ ... ];
  const beveragePerColumn = Math.floor(beverages.length / 3);

  let autofocus: HTMLInputElement;
  onMount(() => autofocus.focus());

  let active = NaN;

  function goToBeverage(offset: number) {
    if (isFinite(active)) {
      let _active = active + offset;
      if (_active < 0) {
        _active = 0;
      } else if (_active >= beverages.length) {
        _active = beverages.length - 1;
      }
      active = _active;
    } else {
      active = 0;
    }
  }

<\/script>

<section class="prose max-w-none my-4">
  <div class="my-4">
    <div>Select a beverage</div>
    <div class="flex">
      <input
        bind:this={autofocus}
        type="text"
        class="input grow"
        readonly
        value={beverages[active] ?? ''}
        use:useKeyboardShortcut={{
          event: 'keydown',
          preventDefault: true,
          fns: {
            ArrowUp: () => goToBeverage(-1),
            ArrowDown: () => goToBeverage(1),
            ArrowLeft: () => goToBeverage(-beveragePerColumn),
            ArrowRight: () => goToBeverage(beveragePerColumn),
            PageUp: () => goToBeverage(-((active || 0) % beveragePerColumn)),
            PageDown: () =>
              goToBeverage(beveragePerColumn - 1 - ((active || 0) % beveragePerColumn)),
            Home: () => (active = (active || 0) % beveragePerColumn),
            End: () =>
              (active =
                beverages.length - (beveragePerColumn - ((active || 0) % beveragePerColumn))),
            'Ctrl+Home': () => (active = 0),
            'Ctrl+End': () => (active = beverages.length - 1)
          }
        }}
      />
      <button
        type="button"
        class="input"
        on:click={() => {
          active = NaN;
          autofocus.focus();
        }}>Reset</button
      >
    </div>
  </div>
  <div class="columns-3 gap-3 border rounded-sm p-2">
    {#each beverages as b, index}
      <div
        class="beverage-item"
        on:click={() => {
          active = index;
          autofocus.focus();
        }}
        class:active={index === active}
      >
        {b}
      </div>
    {/each}
  </div>
</section>

<style lang="postcss">
  .beverage-item {
    @apply px-4 py-1 rounded-md cursor-pointer;
  }
  .beverage-item.active {
    @apply bg-blue-600 text-white;
  }
</style>`}}),{c(){var O;e=b("section"),t=b("div"),n=b("div"),n.textContent="Select a beverage",s=y(),r=b("div"),l=b("input"),c=y(),u=b("button"),u.textContent="Reset",f=y(),p=b("div"),p.innerHTML=`Use the navigation buttons
      <code>ArrowUp</code>,
      <code>ArrowDown</code>,
      <code>ArrowLeft</code>,
      <code>ArrowRight</code>,
      <code>PageUp</code>,
      <code>PageDown</code>,
      <code>Home</code>,
      <code>End</code>,
      <code>Ctrl+Home</code>,
      <code>Ctrl+End</code> to select a drink`,m=y(),g=b("div");for(let I=0;I<z.length;I+=1)z[I].c();_=y(),w=b("h3"),w.textContent="Code",T=y(),R(S.$$.fragment),h(l,"type","text"),h(l,"class","input grow"),l.readOnly=!0,l.value=i=(O=o[2][o[1]])!=null?O:"",h(u,"type","button"),h(u,"class","input"),h(r,"class","flex"),h(p,"class","block text-sm mt-1 text-gray-500"),h(t,"class","my-4"),h(g,"class","columns-3 gap-3 border-2 border-gray-200 rounded-md p-2"),h(e,"class","prose max-w-none my-4")},m(O,I){k(O,e,I),d(e,t),d(t,n),d(t,s),d(t,r),d(r,l),o[5](l),d(r,c),d(r,u),d(t,f),d(t,p),d(e,m),d(e,g);for(let L=0;L<z.length;L+=1)z[L].m(g,null);d(e,_),d(e,w),d(e,T),C(S,e,null),N=!0,E||(M=[Ue(a=zo.call(null,l,{event:"keydown",preventDefault:!0,fns:{ArrowUp:o[6],ArrowDown:o[7],ArrowLeft:o[8],ArrowRight:o[9],PageUp:o[10],PageDown:o[11],Home:o[12],End:o[13],"Ctrl+Home":o[14],"Ctrl+End":o[15]}})),G(u,"click",o[16])],E=!0)},p(O,[I]){var L;if((!N||I&2&&i!==(i=(L=O[2][O[1]])!=null?L:"")&&l.value!==i)&&(l.value=i),a&&Ve(a.update)&&I&2&&a.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:O[6],ArrowDown:O[7],ArrowLeft:O[8],ArrowRight:O[9],PageUp:O[10],PageDown:O[11],Home:O[12],End:O[13],"Ctrl+Home":O[14],"Ctrl+End":O[15]}}),I&7){P=O[2];let B;for(B=0;B<P.length;B+=1){const q=zr(O,P,B);z[B]?z[B].p(q,I):(z[B]=Or(q),z[B].c(),z[B].m(g,null))}for(;B<z.length;B+=1)z[B].d(1);z.length=P.length}},i(O){N||($(S.$$.fragment,O),N=!0)},o(O){x(S.$$.fragment,O),N=!1},d(O){O&&v(e),o[5](null),Fe(z,O),A(S),E=!1,ze(M)}}}function lh(o,e,t){const n=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asi\xE1tico","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","R\xFCdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"],s=Math.floor(n.length/3);let r;Dt(()=>r.focus());let l=NaN;function i(M){if(isFinite(l)){let P=l+M;P<0?P=0:P>=n.length&&(P=n.length-1),t(1,l=P)}else t(1,l=0)}function a(M){je[M?"unshift":"push"](()=>{r=M,t(0,r)})}return[r,l,n,s,i,a,()=>i(-1),()=>i(1),()=>i(-s),()=>i(s),()=>i(-((l||0)%s)),()=>i(s-1-(l||0)%s),()=>t(1,l=(l||0)%s),()=>t(1,l=n.length-(s-(l||0)%s)),()=>t(1,l=0),()=>t(1,l=n.length-1),()=>{t(1,l=NaN),r.focus()},M=>{t(1,l=M),r.focus()}]}class ih extends Y{constructor(e){super(),Z(this,e,lh,rh,K,{})}}const{document:Ir}=Mt;function ah(o){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function ch(o){let e;return{c(){e=j("Navigation demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function uh(o){let e,t,n,s;return e=new de({props:{$$slots:{default:[ah]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[ch]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment)},m(r,l){C(e,r,l),k(r,t,l),C(n,r,l),s=!0},p(r,l){const i={};l&1&&(i.$$scope={dirty:l,ctx:r}),e.$set(i);const a={};l&1&&(a.$$scope={dirty:l,ctx:r}),n.$set(a)},i(r){s||($(e.$$.fragment,r),$(n.$$.fragment,r),s=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),s=!1},d(r){A(e,r),r&&v(t),A(n,r)}}}function fh(o){let e,t;return e=new Jm({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function ph(o){let e,t;return e=new ih({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function dh(o){let e,t,n,s,r,l;return e=new lt({props:{$$slots:{default:[uh]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[fh]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[ph]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment)},m(i,a){C(e,i,a),k(i,t,a),C(n,i,a),k(i,s,a),C(r,i,a),l=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){x(e.$$.fragment,i),x(n.$$.fragment,i),x(r.$$.fragment,i),l=!1},d(i){A(e,i),i&&v(t),A(n,i),i&&v(s),A(r,i)}}}function gh(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_;return Ir.title=e=document.title.replace(/(•).*$/,"$1 Keyboard shortcut action"),g=new rt({props:{mode:"remove",$$slots:{default:[dh]},$$scope:{ctx:o}}}),{c(){t=y(),n=b("section"),s=b("a"),s.textContent="Home",r=y(),l=b("h1"),l.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",i=y(),a=b("a"),c=b("img"),f=y(),p=b("ul"),p.innerHTML=`<li>allows to reduce keyboard event handling code</li> 
    <li>dependence <a href="https://www.npmjs.com/package/keyboard-event-to-string" target="_blank">keyboard-event-to-string</a></li>`,m=y(),R(g.$$.fragment),h(s,"class","float-right"),h(s,"href","/"),h(l,"class","text-2xl"),h(c,"class","max-w-[4em]"),Ge(c.src,u=et)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),h(a,"target","_blank"),h(p,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m(w,T){k(w,t,T),k(w,n,T),d(n,s),d(n,r),d(n,l),d(n,i),d(n,a),d(a,c),d(n,f),d(n,p),d(n,m),C(g,n,null),_=!0},p(w,[T]){(!_||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Keyboard shortcut action"))&&(Ir.title=e);const S={};T&1&&(S.$$scope={dirty:T,ctx:w}),g.$set(S)},i(w){_||($(g.$$.fragment,w),_=!0)},o(w){x(g.$$.fragment,w),_=!1},d(w){w&&v(t),w&&v(n),A(g)}}}class mh extends Y{constructor(e){super(),Z(this,e,null,gh,K,{})}}var Lr=`# Action to scroll the child to parent viewport Svelte directive \`use\`

- no dependencies
- useful for components like dropdown
- exports independent functions for vertical and horizontal scrolling of elements

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/scroll-child-action)

## Install

### NPM

\`\`\`sh
npm i -D @apsc/scroll-child-action
\`\`\`

### PNPM

\`\`\`sh
pnpm add -D @apsc/scroll-child-action
\`\`\`

## API

\`\`\`tsx
let active = 0;
const items = [...Array(20).keys()].map((i) => ({
  id: i + 1,
  message: \`Text #\${(i + 1).toString().padStart(2, '0')}\`
}));

<div>
  {#each items as item, index}
    <div class="cmp-item" use:useScrollChild={active === index} class:active={active === index}>
      {item.id}
      {item.message}
    </div>
  {/each}
</div>
\`\`\`

### Action options

\`\`\`ts
export type UseScrollChildOptions = boolean | { x?: boolean; y?: boolean };
\`\`\`

- \`true\` -- scrolling both vertically and horizontally
- \`{ x: true, y: true }\` -- scrolling both vertically and horizontally
- \`{ x: true }\` -- scrolling only horizontally
- \`{ y: true }\` -- scrolling only vertically
- else -- don't scroll

## Exports

\`\`\`ts
export default function useScrollChild(node: HTMLElement, options: UseScrollChildOptions);
\`\`\`

## Additional exports

\`\`\`ts
export function scrollChildIntoParentVertical(el: HTMLElement): boolean;
export function scrollChildIntoParentHorizontal(el: HTMLElement): boolean;
\`\`\`
`;function hh(o){let e,t,n;return t=new Ft({props:{source:Lr.slice(Lr.search(/^[#\s]+API$/im)+1)}}),{c(){e=b("section"),R(t.$$.fragment),h(e,"class","documentation")},m(s,r){k(s,e,r),C(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){x(t.$$.fragment,s),n=!1},d(s){s&&v(e),A(t)}}}class bh extends Y{constructor(e){super(),Z(this,e,null,hh,K,{})}}function Dr(o){const e=o.parentElement;if(e&&e.offsetHeight>e.clientHeight){const t=getComputedStyle(e),n=parseInt(t.paddingTop)||0,s=parseInt(t.paddingBottom)||0,r=e.offsetTop+n,l=e.offsetTop+e.offsetHeight-s,i=o.offsetTop-e.scrollTop,a=o.offsetTop+o.offsetHeight-e.scrollTop;return a>l?(e.scrollTop+=a-l,!0):i<r?(e.scrollTop-=r-i,!0):!1}else return!1}function jr(o){const e=o.parentElement;if(e&&e.offsetWidth>e.clientWidth){const t=getComputedStyle(e),n=parseInt(t.paddingLeft)||0,s=parseInt(t.paddingRight)||0,r=e.offsetLeft+n,l=e.offsetLeft+e.offsetWidth-s,i=o.offsetLeft-e.scrollLeft,a=o.offsetLeft+o.offsetWidth-e.scrollLeft;return a>l?(e.scrollLeft+=a-l,!0):i<r?(e.scrollLeft-=r-i,!0):!1}else return!1}function Zl(o,e){function t(n){n===!0?(Dr(o),jr(o)):typeof n=="object"&&(n.x&&jr(o),n.y&&Dr(o))}return t(e),{update(n){t(n)}}}const nt=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asi\xE1tico","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","R\xFCdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"];function Br(o,e,t){const n=o.slice();return n[10]=e[t],n[12]=t,n}function Fr(o){let e,t=o[10]+"",n,s,r,l,i;function a(){return o[9](o[12])}return{c(){e=b("div"),n=j(t),s=y(),h(e,"class","beverage-item svelte-18rp3xo"),Be(e,"active",o[12]===o[1])},m(c,u){k(c,e,u),d(e,n),d(e,s),l||(i=[Ue(r=Zl.call(null,e,o[1]===o[12]?{y:!0}:!1)),G(e,"click",a)],l=!0)},p(c,u){o=c,r&&Ve(r.update)&&u&2&&r.update.call(null,o[1]===o[12]?{y:!0}:!1),u&2&&Be(e,"active",o[12]===o[1])},d(c){c&&v(e),l=!1,ze(i)}}}function _h(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P,z,O=nt,I=[];for(let L=0;L<O.length;L+=1)I[L]=Fr(Br(o,O,L));return E=new Xe({props:{code:`<script lang="ts"
  import useKeyboardShortcut from '@apsc/keyboard-shortcut-action';
  import useScrollChild from '@apsc/scroll-child-action';
  import { onMount } from 'svelte';
  import { beverages } from './beverages';

  let autofocus: HTMLInputElement;
  onMount(() => autofocus.focus());

  let active = NaN;

  function goToBeverage(offset: number) {
    if (isFinite(active)) {
      let _active = active + offset;
      if (_active < 0) {
        _active = 0;
      } else if (_active >= beverages.length) {
        _active = beverages.length - 1;
      }
      active = _active;
    } else {
      active = 0;
    }
  }
<\/script>

<section class="prose max-w-none my-4">
  <div class="my-2 mx-auto w-96">
    <div>Select a beverage</div>
    <div class="mt-2 flex">
      <input
        bind:this={autofocus}
        type="text"
        class="input grow"
        readonly
        value={beverages[active] ?? ''}
        use:useKeyboardShortcut={{
          event: 'keydown',
          preventDefault: true,
          fns: {
            ArrowUp: () => goToBeverage(-1),
            ArrowDown: () => goToBeverage(1),
            Home: () => (active = 0),
            End: () => (active = beverages.length - 1)
          }
        }}
      />
      <button
        type="button"
        class="input ml-2"
        on:click={() => {
          active = NaN;
          autofocus.focus();
        }}>Reset</button
      >
    </div>
    <div
      class="border-2 border-gray-200 rounded-md p-2 mt-2 w-48 max-h-[15.25rem] overflow-y-auto shadow-md scroll-smooth"
    >
      {#each beverages as b, index}
        <div
          class="beverage-item"
          use:useScrollChild={active === index ? { y: true } : false}
          on:click={() => {
            active = index;
            autofocus.focus();
          }}
          class:active={index === active}
        >
          {b}
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  .beverage-item {
    @apply px-4 py-1 rounded-md cursor-pointer leading-5;
  }
  .beverage-item:not(:first-child) {
    @apply px-4 py-1 mt-2 rounded-md cursor-pointer leading-5;
  }
  .beverage-item.active {
    @apply bg-blue-600 text-white;
  }
</style>`}}),{c(){var L;e=b("section"),t=b("div"),t.innerHTML='This example uses <a href="/keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=y(),s=b("div"),r=b("div"),r.textContent="Select a beverage",l=y(),i=b("div"),i.innerHTML=`use the navigation buttons
      <code>ArrowUp</code>,
      <code>ArrowDown</code>,
      <code>Home</code>,
      <code>End</code> to select a drink`,a=y(),c=b("div"),u=b("input"),m=y(),g=b("button"),g.textContent="Reset",_=y(),w=b("div");for(let B=0;B<I.length;B+=1)I[B].c();T=y(),S=b("h3"),S.textContent="Code",N=y(),R(E.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(i,"class","text-sm leading-4 text-gray-500"),h(u,"type","text"),h(u,"class","input grow"),u.readOnly=!0,u.value=f=(L=nt[o[1]])!=null?L:"",h(g,"type","button"),h(g,"class","input ml-2"),h(c,"class","mt-2 flex"),h(w,"class","border-2 border-gray-200 rounded-md p-2 mt-2 w-48 max-h-[15.25rem] overflow-y-auto shadow-md scroll-smooth"),h(s,"class","my-2 mx-auto w-96"),h(e,"class","prose max-w-none my-4")},m(L,B){k(L,e,B),d(e,t),d(e,n),d(e,s),d(s,r),d(s,l),d(s,i),d(s,a),d(s,c),d(c,u),o[3](u),d(c,m),d(c,g),d(s,_),d(s,w);for(let q=0;q<I.length;q+=1)I[q].m(w,null);d(e,T),d(e,S),d(e,N),C(E,e,null),M=!0,P||(z=[Ue(p=zo.call(null,u,{event:"keydown",preventDefault:!0,fns:{ArrowUp:o[4],ArrowDown:o[5],Home:o[6],End:o[7]}})),G(g,"click",o[8])],P=!0)},p(L,[B]){var q;if((!M||B&2&&f!==(f=(q=nt[L[1]])!=null?q:"")&&u.value!==f)&&(u.value=f),p&&Ve(p.update)&&B&2&&p.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:L[4],ArrowDown:L[5],Home:L[6],End:L[7]}}),B&3){O=nt;let W;for(W=0;W<O.length;W+=1){const oe=Br(L,O,W);I[W]?I[W].p(oe,B):(I[W]=Fr(oe),I[W].c(),I[W].m(w,null))}for(;W<I.length;W+=1)I[W].d(1);I.length=O.length}},i(L){M||($(E.$$.fragment,L),M=!0)},o(L){x(E.$$.fragment,L),M=!1},d(L){L&&v(e),o[3](null),Fe(I,L),A(E),P=!1,ze(z)}}}function wh(o,e,t){let n;Dt(()=>n.focus());let s=NaN;function r(m){if(isFinite(s)){let g=s+m;g<0?g=0:g>=nt.length&&(g=nt.length-1),t(1,s=g)}else t(1,s=0)}function l(m){je[m?"unshift":"push"](()=>{n=m,t(0,n)})}return[n,s,r,l,()=>r(-1),()=>r(1),()=>t(1,s=0),()=>t(1,s=nt.length-1),()=>{t(1,s=NaN),n.focus()},m=>{t(1,s=m),n.focus()}]}class vh extends Y{constructor(e){super(),Z(this,e,wh,_h,K,{})}}function Hr(o,e,t){const n=o.slice();return n[10]=e[t],n[12]=t,n}function Ur(o){let e,t=o[10]+"",n,s,r,l,i;function a(){return o[9](o[12])}return{c(){e=b("div"),n=j(t),s=y(),h(e,"class","beverage-item svelte-2m30if"),Be(e,"active",o[12]===o[1])},m(c,u){k(c,e,u),d(e,n),d(e,s),l||(i=[Ue(r=Zl.call(null,e,o[1]===o[12]?{x:!0}:!1)),G(e,"click",a)],l=!0)},p(c,u){o=c,r&&Ve(r.update)&&u&2&&r.update.call(null,o[1]===o[12]?{x:!0}:!1),u&2&&Be(e,"active",o[12]===o[1])},d(c){c&&v(e),l=!1,ze(i)}}}function $h(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S,N,E,M,P,z,O,I=nt,L=[];for(let B=0;B<I.length;B+=1)L[B]=Ur(Hr(o,I,B));return M=new Xe({props:{code:`<script lang="ts"
  import useKeyboardShortcut from '@apsc/keyboard-shortcut-action';
  import useScrollChild from '@apsc/scroll-child-action';
  import { onMount } from 'svelte';
  import { beverages } from './beverages';

  let autofocus: HTMLInputElement;
  onMount(() => autofocus.focus());

  let active = NaN;

  function goToBeverage(offset: number) {
    if (isFinite(active)) {
      let _active = active + offset;
      if (_active < 0) {
        _active = 0;
      } else if (_active >= beverages.length) {
        _active = beverages.length - 1;
      }
      active = _active;
    } else {
      active = 0;
    }
  }
<\/script>

<section class="prose max-w-none my-4">
  </div>
  <div class="my-2">
    <div class="mx-auto w-96">
      <div>Select a beverage</div>
      <div class="mt-2 flex">
        <input
          bind:this={autofocus}
          type="text"
          class="input grow"
          readonly
          value={beverages[active] ?? ''}
          use:useKeyboardShortcut={{
            event: 'keydown',
            preventDefault: true,
            fns: {
              ArrowLeft: () => goToBeverage(-1),
              ArrowRight: () => goToBeverage(1),
              Home: () => (active = 0),
              End: () => (active = beverages.length - 1)
            }
          }}
        />
        <button
          type="button"
          class="input ml-2"
          on:click={() => {
            active = NaN;
            autofocus.focus();
          }}>Reset</button
        >
      </div>
    </div>
    <div
      class="border-2 border-gray-200 rounded-md p-2 mt-2 whitespace-nowrap max-w-full overflow-x-auto shadow-md scroll-smooth"
    >
      {#each beverages as b, index}
        <div
          class="beverage-item"
          use:useScrollChild={active === index ? { x: true } : false}
          on:click={() => {
            active = index;
            autofocus.focus();
          }}
          class:active={index === active}
        >
          {b}
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  .beverage-item {
    @apply inline-block max-w-min whitespace-normal text-center align-top leading-5 px-4 py-1 rounded-md cursor-pointer;
  }
  .beverage-item.active {
    @apply bg-blue-600 text-white;
  }
</style>`}}),{c(){var B;e=b("section"),t=b("div"),t.innerHTML='This example uses <a href="/keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=y(),s=b("div"),r=b("div"),l=b("div"),l.textContent="Select a beverage",i=y(),a=b("div"),a.innerHTML=`use the navigation buttons
        <code>ArrowLeft</code>,
        <code>ArrowRight</code>,
        <code>Home</code>,
        <code>End</code> to select a drink`,c=y(),u=b("div"),f=b("input"),g=y(),_=b("button"),_.textContent="Reset",w=y(),T=b("div");for(let q=0;q<L.length;q+=1)L[q].c();S=y(),N=b("h3"),N.textContent="Code",E=y(),R(M.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(a,"class","text-sm leading-4 text-gray-500"),h(f,"type","text"),h(f,"class","input grow"),f.readOnly=!0,f.value=p=(B=nt[o[1]])!=null?B:"",h(_,"type","button"),h(_,"class","input ml-2"),h(u,"class","mt-2 flex"),h(r,"class","mx-auto w-96"),h(T,"class","border-2 border-gray-200 rounded-md p-2 mt-2 whitespace-nowrap max-w-full overflow-x-auto shadow-md scroll-smooth"),h(s,"class","my-2"),h(e,"class","prose max-w-none my-4")},m(B,q){k(B,e,q),d(e,t),d(e,n),d(e,s),d(s,r),d(r,l),d(r,i),d(r,a),d(r,c),d(r,u),d(u,f),o[3](f),d(u,g),d(u,_),d(s,w),d(s,T);for(let W=0;W<L.length;W+=1)L[W].m(T,null);d(e,S),d(e,N),d(e,E),C(M,e,null),P=!0,z||(O=[Ue(m=zo.call(null,f,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:o[4],ArrowRight:o[5],Home:o[6],End:o[7]}})),G(_,"click",o[8])],z=!0)},p(B,[q]){var W;if((!P||q&2&&p!==(p=(W=nt[B[1]])!=null?W:"")&&f.value!==p)&&(f.value=p),m&&Ve(m.update)&&q&2&&m.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:B[4],ArrowRight:B[5],Home:B[6],End:B[7]}}),q&3){I=nt;let oe;for(oe=0;oe<I.length;oe+=1){const Q=Hr(B,I,oe);L[oe]?L[oe].p(Q,q):(L[oe]=Ur(Q),L[oe].c(),L[oe].m(T,null))}for(;oe<L.length;oe+=1)L[oe].d(1);L.length=I.length}},i(B){P||($(M.$$.fragment,B),P=!0)},o(B){x(M.$$.fragment,B),P=!1},d(B){B&&v(e),o[3](null),Fe(L,B),A(M),z=!1,ze(O)}}}function kh(o,e,t){let n;Dt(()=>n.focus());let s=NaN;function r(m){if(isFinite(s)){let g=s+m;g<0?g=0:g>=nt.length&&(g=nt.length-1),t(1,s=g)}else t(1,s=0)}function l(m){je[m?"unshift":"push"](()=>{n=m,t(0,n)})}return[n,s,r,l,()=>r(-1),()=>r(1),()=>t(1,s=0),()=>t(1,s=nt.length-1),()=>{t(1,s=NaN),n.focus()},m=>{t(1,s=m),n.focus()}]}class yh extends Y{constructor(e){super(),Z(this,e,kh,$h,K,{})}}const{document:qr}=Mt;function xh(o){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Th(o){let e;return{c(){e=j("Vertical demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Sh(o){let e;return{c(){e=j("Horizontal demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Eh(o){let e,t,n,s,r,l;return e=new de({props:{$$slots:{default:[xh]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Th]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[Sh]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment)},m(i,a){C(e,i,a),k(i,t,a),C(n,i,a),k(i,s,a),C(r,i,a),l=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){x(e.$$.fragment,i),x(n.$$.fragment,i),x(r.$$.fragment,i),l=!1},d(i){A(e,i),i&&v(t),A(n,i),i&&v(s),A(r,i)}}}function Ch(o){let e,t;return e=new bh({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Ah(o){let e,t;return e=new vh({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Rh(o){let e,t;return e=new yh({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Nh(o){let e,t,n,s,r,l,i,a;return e=new lt({props:{$$slots:{default:[Eh]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Ch]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[Ah]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[Rh]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment),t=y(),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,s,u),C(r,c,u),k(c,l,u),C(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(r.$$.fragment,c),x(i.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(s),A(r,c),c&&v(l),A(i,c)}}}function Mh(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_;return qr.title=e=document.title.replace(/(•).*$/,"$1 Scroll child action"),g=new rt({props:{mode:"remove",$$slots:{default:[Nh]},$$scope:{ctx:o}}}),{c(){t=y(),n=b("section"),s=b("a"),s.textContent="Home",r=y(),l=b("h1"),l.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",i=y(),a=b("a"),c=b("img"),f=y(),p=b("ul"),p.innerHTML=`<li>no dependencies</li> 
    <li>useful for components like dropdown</li> 
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>`,m=y(),R(g.$$.fragment),h(s,"class","float-right"),h(s,"href","/"),h(l,"class","text-2xl"),h(c,"class","max-w-[4em]"),Ge(c.src,u=et)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),h(a,"target","_blank"),h(p,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m(w,T){k(w,t,T),k(w,n,T),d(n,s),d(n,r),d(n,l),d(n,i),d(n,a),d(a,c),d(n,f),d(n,p),d(n,m),C(g,n,null),_=!0},p(w,[T]){(!_||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Scroll child action"))&&(qr.title=e);const S={};T&1&&(S.$$scope={dirty:T,ctx:w}),g.$set(S)},i(w){_||($(g.$$.fragment,w),_=!0)},o(w){x(g.$$.fragment,w),_=!1},d(w){w&&v(t),w&&v(n),A(g)}}}class Ph extends Y{constructor(e){super(),Z(this,e,null,Mh,K,{})}}function zh(o){let e,t;return e=new Fi({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Oh(o){let e,t;return e=new Zp({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Ih(o){let e,t;return e=new wd({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Lh(o){let e,t;return e=new lm({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Dh(o){let e,t;return e=new xm({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function jh(o){let e,t;return e=new Xm({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Bh(o){let e,t;return e=new mh({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Fh(o){let e,t;return e=new Ph({}),{c(){R(e.$$.fragment)},m(n,s){C(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Hh(o){let e,t,n,s,r,l,i,a,c,u,f,p,m,g,_,w,T,S;return n=new St({props:{path:"/",$$slots:{default:[zh]},$$scope:{ctx:o}}}),r=new St({props:{path:"/tabs",$$slots:{default:[Oh]},$$scope:{ctx:o}}}),i=new St({props:{path:"/glob-notify",$$slots:{default:[Ih]},$$scope:{ctx:o}}}),c=new St({props:{path:"/color",$$slots:{default:[Lh]},$$scope:{ctx:o}}}),f=new St({props:{path:"/floating-ui-action",$$slots:{default:[Dh]},$$scope:{ctx:o}}}),m=new St({props:{path:"/focus-action",$$slots:{default:[jh]},$$scope:{ctx:o}}}),_=new St({props:{path:"/keyboard-shortcut-action",$$slots:{default:[Bh]},$$scope:{ctx:o}}}),T=new St({props:{path:"/scroll-child-action",$$slots:{default:[Fh]},$$scope:{ctx:o}}}),{c(){e=y(),t=b("main"),R(n.$$.fragment),s=y(),R(r.$$.fragment),l=y(),R(i.$$.fragment),a=y(),R(c.$$.fragment),u=y(),R(f.$$.fragment),p=y(),R(m.$$.fragment),g=y(),R(_.$$.fragment),w=y(),R(T.$$.fragment),document.title="APSC \u2022 Home"},m(N,E){k(N,e,E),k(N,t,E),C(n,t,null),d(t,s),C(r,t,null),d(t,l),C(i,t,null),d(t,a),C(c,t,null),d(t,u),C(f,t,null),d(t,p),C(m,t,null),d(t,g),C(_,t,null),d(t,w),C(T,t,null),S=!0},p(N,[E]){const M={};E&1&&(M.$$scope={dirty:E,ctx:N}),n.$set(M);const P={};E&1&&(P.$$scope={dirty:E,ctx:N}),r.$set(P);const z={};E&1&&(z.$$scope={dirty:E,ctx:N}),i.$set(z);const O={};E&1&&(O.$$scope={dirty:E,ctx:N}),c.$set(O);const I={};E&1&&(I.$$scope={dirty:E,ctx:N}),f.$set(I);const L={};E&1&&(L.$$scope={dirty:E,ctx:N}),m.$set(L);const B={};E&1&&(B.$$scope={dirty:E,ctx:N}),_.$set(B);const q={};E&1&&(q.$$scope={dirty:E,ctx:N}),T.$set(q)},i(N){S||($(n.$$.fragment,N),$(r.$$.fragment,N),$(i.$$.fragment,N),$(c.$$.fragment,N),$(f.$$.fragment,N),$(m.$$.fragment,N),$(_.$$.fragment,N),$(T.$$.fragment,N),S=!0)},o(N){x(n.$$.fragment,N),x(r.$$.fragment,N),x(i.$$.fragment,N),x(c.$$.fragment,N),x(f.$$.fragment,N),x(m.$$.fragment,N),x(_.$$.fragment,N),x(T.$$.fragment,N),S=!1},d(N){N&&v(e),N&&v(t),A(n),A(r),A(i),A(c),A(f),A(m),A(_),A(T)}}}function Uh(o){return In.mode.hash(),[]}class qh extends Y{constructor(e){super(),Z(this,e,Uh,Hh,K,{})}}new qh({target:document.getElementById("app")})});export default Kh();
