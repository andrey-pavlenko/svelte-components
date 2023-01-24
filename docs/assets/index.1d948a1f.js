var Zi=Object.defineProperty,Vi=Object.defineProperties;var Xi=Object.getOwnPropertyDescriptors;var kn=Object.getOwnPropertySymbols;var Gs=Object.prototype.hasOwnProperty,Zs=Object.prototype.propertyIsEnumerable;var Ws=(s,e,t)=>e in s?Zi(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Ue=(s,e)=>{for(var t in e||(e={}))Gs.call(e,t)&&Ws(s,t,e[t]);if(kn)for(var t of kn(e))Zs.call(e,t)&&Ws(s,t,e[t]);return s},Gt=(s,e)=>Vi(s,Xi(e));var ss=(s,e)=>{var t={};for(var n in s)Gs.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&kn)for(var n of kn(s))e.indexOf(n)<0&&Zs.call(s,n)&&(t[n]=s[n]);return t};var Ve=(s,e,t)=>new Promise((n,l)=>{var o=a=>{try{r(t.next(a))}catch(c){l(c)}},i=a=>{try{r(t.throw(a))}catch(c){l(c)}},r=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,i);r((t=t.apply(s,e)).next())});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function ee(){}const Wo=s=>s;function rt(s,e){for(const t in e)s[t]=e[t];return s}function Yi(s){return s&&typeof s=="object"&&typeof s.then=="function"}function Go(s){return s()}function Vs(){return Object.create(null)}function Oe(s){s.forEach(Go)}function Xe(s){return typeof s=="function"}function K(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}let yn;function Ge(s,e){return yn||(yn=document.createElement("a")),yn.href=e,s===yn.href}function Qi(s){return Object.keys(s).length===0}function Zo(s,...e){if(s==null)return ee;const t=s.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Yt(s,e,t){s.$$.on_destroy.push(Zo(e,t))}function Ae(s,e,t,n){if(s){const l=Vo(s,e,t,n);return s[0](l)}}function Vo(s,e,t,n){return s[1]&&n?rt(t.ctx.slice(),s[1](n(e))):t.ctx}function Re(s,e,t,n){if(s[2]&&n){const l=s[2](n(t));if(e.dirty===void 0)return l;if(typeof l=="object"){const o=[],i=Math.max(e.dirty.length,l.length);for(let r=0;r<i;r+=1)o[r]=e.dirty[r]|l[r];return o}return e.dirty|l}return e.dirty}function Ne(s,e,t,n,l,o){if(l){const i=Vo(e,t,n,o);s.p(i,l)}}function Me(s){if(s.ctx.length>32){const e=[],t=s.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Xo(s){const e={};for(const t in s)t[0]!=="$"&&(e[t]=s[t]);return e}function Pn(s,e){const t={};e=new Set(e);for(const n in s)!e.has(n)&&n[0]!=="$"&&(t[n]=s[n]);return t}function Zt(s){return s==null?"":s}function je(s){return s&&Xe(s.destroy)?s.destroy:ee}const Yo=typeof window!="undefined";let Ji=Yo?()=>window.performance.now():()=>Date.now(),_s=Yo?s=>requestAnimationFrame(s):ee;const Qt=new Set;function Qo(s){Qt.forEach(e=>{e.c(s)||(Qt.delete(e),e.f())}),Qt.size!==0&&_s(Qo)}function er(s){let e;return Qt.size===0&&_s(Qo),{promise:new Promise(t=>{Qt.add(e={c:s,f:t})}),abort(){Qt.delete(e)}}}function p(s,e){s.appendChild(e)}function Jo(s){if(!s)return document;const e=s.getRootNode?s.getRootNode():s.ownerDocument;return e&&e.host?e:s.ownerDocument}function tr(s){const e=_("style");return nr(Jo(s),e),e.sheet}function nr(s,e){return p(s.head||s,e),e.sheet}function k(s,e,t){s.insertBefore(e,t||null)}function v(s){s.parentNode.removeChild(s)}function He(s,e){for(let t=0;t<s.length;t+=1)s[t]&&s[t].d(e)}function _(s){return document.createElement(s)}function sr(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function z(s){return document.createTextNode(s)}function T(){return z(" ")}function we(){return z("")}function G(s,e,t,n){return s.addEventListener(e,t,n),()=>s.removeEventListener(e,t,n)}function Xs(s){return function(e){return e.preventDefault(),s.call(this,e)}}function lr(s){return function(e){e.target===this&&s.call(this,e)}}function g(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function Ys(s,e){const t=Object.getOwnPropertyDescriptors(s.__proto__);for(const n in e)e[n]==null?s.removeAttribute(n):n==="style"?s.style.cssText=e[n]:n==="__value"?s.value=s[n]=e[n]:t[n]&&t[n].set?s[n]=e[n]:g(s,n,e[n])}function at(s){return s===""?null:+s}function or(s){return Array.from(s.childNodes)}function ke(s,e){e=""+e,s.wholeText!==e&&(s.data=e)}function tt(s,e){s.value=e==null?"":e}function Ke(s,e,t,n){t===null?s.style.removeProperty(e):s.style.setProperty(e,t,n?"important":"")}function gt(s,e){for(let t=0;t<s.options.length;t+=1){const n=s.options[t];if(n.__value===e){n.selected=!0;return}}s.selectedIndex=-1}function un(s){const e=s.querySelector(":checked")||s.options[0];return e&&e.__value}function Fe(s,e,t){s.classList[t?"add":"remove"](e)}function ei(s,e,{bubbles:t=!1,cancelable:n=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(s,t,n,e),l}class ti{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=sr(t.nodeName):this.e=_(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)k(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}const On=new Map;let Ln=0;function ir(s){let e=5381,t=s.length;for(;t--;)e=(e<<5)-e^s.charCodeAt(t);return e>>>0}function rr(s,e){const t={stylesheet:tr(e),rules:{}};return On.set(s,t),t}function Qs(s,e,t,n,l,o,i,r=0){const a=16.666/n;let c=`{
`;for(let $=0;$<=1;$+=a){const y=e+(t-e)*o($);c+=$*100+`%{${i(y,1-y)}}
`}const u=c+`100% {${i(t,1-t)}}
}`,f=`__svelte_${ir(u)}_${r}`,d=Jo(s),{stylesheet:h,rules:m}=On.get(d)||rr(d,s);m[f]||(m[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const b=s.style.animation||"";return s.style.animation=`${b?`${b}, `:""}${f} ${n}ms linear ${l}ms 1 both`,Ln+=1,f}function ar(s,e){const t=(s.style.animation||"").split(", "),n=t.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),l=t.length-n.length;l&&(s.style.animation=n.join(", "),Ln-=l,Ln||cr())}function cr(){_s(()=>{Ln||(On.forEach(s=>{const{ownerNode:e}=s.stylesheet;e&&v(e)}),On.clear())})}let fn;function vt(s){fn=s}function Mt(){if(!fn)throw new Error("Function called outside component initialization");return fn}function Bt(s){Mt().$$.on_mount.push(s)}function ur(s){Mt().$$.after_update.push(s)}function fs(s){Mt().$$.on_destroy.push(s)}function bs(){const s=Mt();return(e,t,{cancelable:n=!1}={})=>{const l=s.$$.callbacks[e];if(l){const o=ei(e,t,{cancelable:n});return l.slice().forEach(i=>{i.call(s,o)}),!o.defaultPrevented}return!0}}function $s(s,e){return Mt().$$.context.set(s,e),e}function tn(s){return Mt().$$.context.get(s)}function fr(s){return Mt().$$.context.has(s)}const an=[],ze=[],An=[],ds=[],ni=Promise.resolve();let ps=!1;function si(){ps||(ps=!0,ni.then(vs))}function li(){return si(),ni}function lt(s){An.push(s)}function Dt(s){ds.push(s)}const ls=new Set;let Tn=0;function vs(){const s=fn;do{for(;Tn<an.length;){const e=an[Tn];Tn++,vt(e),dr(e.$$)}for(vt(null),an.length=0,Tn=0;ze.length;)ze.pop()();for(let e=0;e<An.length;e+=1){const t=An[e];ls.has(t)||(ls.add(t),t())}An.length=0}while(an.length);for(;ds.length;)ds.pop()();ps=!1,ls.clear(),vt(s)}function dr(s){if(s.fragment!==null){s.update(),Oe(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(lt)}}let rn;function pr(){return rn||(rn=Promise.resolve(),rn.then(()=>{rn=null})),rn}function os(s,e,t){s.dispatchEvent(ei(`${e?"intro":"outro"}${t}`))}const Rn=new Set;let wt;function me(){wt={r:0,c:[],p:wt}}function he(){wt.r||Oe(wt.c),wt=wt.p}function w(s,e){s&&s.i&&(Rn.delete(s),s.i(e))}function x(s,e,t,n){if(s&&s.o){if(Rn.has(s))return;Rn.add(s),wt.c.push(()=>{Rn.delete(s),n&&(t&&s.d(1),n())}),s.o(e)}else n&&n()}const mr={duration:0};function Ct(s,e,t,n){let l=e(s,t),o=n?0:1,i=null,r=null,a=null;function c(){a&&ar(s,a)}function u(d,h){const m=d.b-o;return h*=Math.abs(m),{a:o,b:d.b,d:m,duration:h,start:d.start,end:d.start+h,group:d.group}}function f(d){const{delay:h=0,duration:m=300,easing:b=Wo,tick:$=ee,css:y}=l||mr,E={start:Ji()+h,b:d};d||(E.group=wt,wt.r+=1),i||r?r=E:(y&&(c(),a=Qs(s,o,d,m,h,b,y)),d&&$(0,1),i=u(E,m),lt(()=>os(s,d,"start")),er(M=>{if(r&&M>r.start&&(i=u(r,m),r=null,os(s,i.b,"start"),y&&(c(),a=Qs(s,o,i.b,i.duration,0,b,l.css))),i){if(M>=i.end)$(o=i.b,1-o),os(s,i.b,"end"),r||(i.b?c():--i.group.r||Oe(i.group.c)),i=null;else if(M>=i.start){const S=M-i.start;o=i.a+i.d*b(S/i.duration),$(o,1-o)}}return!!(i||r)}))}return{run(d){Xe(l)?pr().then(()=>{l=l(),f(d)}):f(d)},end(){c(),i=r=null}}}function In(s,e){const t=e.token={};function n(l,o,i,r){if(e.token!==t)return;e.resolved=r;let a=e.ctx;i!==void 0&&(a=a.slice(),a[i]=r);const c=l&&(e.current=l)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==o&&f&&(me(),x(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),he())}):e.block.d(1),c.c(),w(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[o]=c),u&&vs()}if(Yi(s)){const l=Mt();if(s.then(o=>{vt(l),n(e.then,1,e.value,o),vt(null)},o=>{if(vt(l),n(e.catch,2,e.error,o),vt(null),!e.hasCatch)throw o}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,s),!0;e.resolved=s}}function oi(s,e,t){const n=e.slice(),{resolved:l}=s;s.current===s.then&&(n[s.value]=l),s.current===s.catch&&(n[s.error]=l),s.block.p(n,t)}const Pt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function hr(s,e){x(s,1,1,()=>{e.delete(s.key)})}function gr(s,e,t,n,l,o,i,r,a,c,u,f){let d=s.length,h=o.length,m=d;const b={};for(;m--;)b[s[m].key]=m;const $=[],y=new Map,E=new Map;for(m=h;m--;){const P=f(l,o,m),O=t(P);let L=i.get(O);L?n&&L.p(P,e):(L=c(O,P),L.c()),y.set(O,$[m]=L),O in b&&E.set(O,Math.abs(m-b[O]))}const M=new Set,S=new Set;function N(P){w(P,1),P.m(r,u),i.set(P.key,P),u=P.first,h--}for(;d&&h;){const P=$[h-1],O=s[d-1],L=P.key,I=O.key;P===O?(u=P.first,d--,h--):y.has(I)?!i.has(L)||M.has(L)?N(P):S.has(I)?d--:E.get(L)>E.get(I)?(S.add(L),N(P)):(M.add(I),d--):(a(O,i),d--)}for(;d--;){const P=s[d];y.has(P.key)||a(P,i)}for(;h;)N($[h-1]);return $}function zt(s,e){const t={},n={},l={$$scope:1};let o=s.length;for(;o--;){const i=s[o],r=e[o];if(r){for(const a in i)a in r||(n[a]=1);for(const a in r)l[a]||(t[a]=r[a],l[a]=1);s[o]=r}else for(const a in i)l[a]=1}for(const i in n)i in t||(t[i]=void 0);return t}function nn(s){return typeof s=="object"&&s!==null?s:{}}function At(s,e,t){const n=s.$$.props[e];n!==void 0&&(s.$$.bound[n]=t,t(s.$$.ctx[n]))}function R(s){s&&s.c()}function C(s,e,t,n){const{fragment:l,on_mount:o,on_destroy:i,after_update:r}=s.$$;l&&l.m(e,t),n||lt(()=>{const a=o.map(Go).filter(Xe);i?i.push(...a):Oe(a),s.$$.on_mount=[]}),r.forEach(lt)}function A(s,e){const t=s.$$;t.fragment!==null&&(Oe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function _r(s,e){s.$$.dirty[0]===-1&&(an.push(s),si(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function Z(s,e,t,n,l,o,i,r=[-1]){const a=fn;vt(s);const c=s.$$={fragment:null,ctx:null,props:o,update:ee,not_equal:l,bound:Vs(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Vs(),dirty:r,skip_bound:!1,root:e.target||a.$$.root};i&&i(c.root);let u=!1;if(c.ctx=t?t(s,e.props||{},(f,d,...h)=>{const m=h.length?h[0]:d;return c.ctx&&l(c.ctx[f],c.ctx[f]=m)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](m),u&&_r(s,f)),d}):[],c.update(),u=!0,Oe(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=or(e.target);c.fragment&&c.fragment.l(f),f.forEach(v)}else c.fragment&&c.fragment.c();e.intro&&w(s.$$.fragment),C(s,e.target,e.anchor,e.customElement),vs()}vt(a)}class V{$destroy(){A(this,1),this.$destroy=ee}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const l=n.indexOf(t);l!==-1&&n.splice(l,1)}}$set(e){this.$$set&&!Qi(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Vt=[];function br(s,e){return{subscribe:Jt(s,e).subscribe}}function Jt(s,e=ee){let t;const n=new Set;function l(r){if(K(s,r)&&(s=r,t)){const a=!Vt.length;for(const c of n)c[1](),Vt.push(c,s);if(a){for(let c=0;c<Vt.length;c+=2)Vt[c][0](Vt[c+1]);Vt.length=0}}}function o(r){l(r(s))}function i(r,a=ee){const c=[r,a];return n.add(c),n.size===1&&(t=e(l)||ee),r(s),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:l,update:o,subscribe:i}}function $r(s,e,t){const n=!Array.isArray(s),l=n?[s]:s,o=e.length<2;return br(t,i=>{let r=!1;const a=[];let c=0,u=ee;const f=()=>{if(c)return;u();const h=e(n?a[0]:a,i);o?i(h):u=Xe(h)?h:ee},d=l.map((h,m)=>Zo(h,b=>{a[m]=b,c&=~(1<<m),r&&f()},()=>{c|=1<<m}));return r=!0,f(),function(){Oe(d),u()}})}function ms(s,e=!1){return s=s.slice(s.startsWith("/#")?2:0,s.endsWith("/*")?-2:void 0),s.startsWith("/")||(s="/"+s),s==="/"&&(s=""),e&&!s.endsWith("/")&&(s+="/"),s}function vr(s,e){s=ms(s,!0),e=ms(e,!0);let t=[],n={},l=!0,o=s.split("/").map(r=>r.startsWith(":")?(t.push(r.slice(1)),"([^\\/]+)"):r).join("\\/"),i=e.match(new RegExp(`^${o}$`));return i||(l=!1,i=e.match(new RegExp(`^${o}`))),i?(t.forEach((r,a)=>n[r]=i[a+1]),{exact:l,params:n,part:i[0].slice(0,-1)}):null}function ii(s,e,t){if(t==="")return s;if(t[0]==="/")return t;let n=i=>i.split("/").filter(r=>r!==""),l=n(s),o=e?n(e):[];return"/"+o.map((i,r)=>l[r]).join("/")+"/"+t}function Js(s,e,t,n){let l=[e,"data-"+e].reduce((o,i)=>{let r=s.getAttribute(i);return t&&s.removeAttribute(i),r===null?o:r},!1);return!n&&l===""?!0:l||n||!1}function wr(s){let e=s.split("&").map(t=>t.split("=")).reduce((t,n)=>{let l=n[0];if(!l)return t;let o=n.length>1?n[n.length-1]:!0;return typeof o=="string"&&o.includes(",")&&(o=o.split(",")),t[l]===void 0?t[l]=[o]:t[l].push(o),t},{});return Object.entries(e).reduce((t,n)=>(t[n[0]]=n[1].length>1?n[1]:n[1][0],t),{})}function kr(s){return Object.entries(s).map(([e,t])=>t?t===!0?e:`${e}=${Array.isArray(t)?t.join(","):t}`:null).filter(e=>e).join("&")}function el(s,e){return s?e+s:""}function ri(s){throw new Error("[Tinro] "+s)}var mt={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run(s,e,t,n){return s===this.HISTORY?e&&e():s===this.HASH?t&&t():n&&n()},getDefault(){return!window||window.location.pathname==="srcdoc"?this.MEMORY:this.HISTORY}},ws,ai,ci,Dn="",dt=yr();function yr(){let s=mt.getDefault(),e,t=i=>window.onhashchange=window.onpopstate=ws=null,n=i=>e&&e(is(s)),l=i=>{i&&(s=i),t(),s!==mt.OFF&&mt.run(s,r=>window.onpopstate=n,r=>window.onhashchange=n)&&n()},o=i=>{let r=Object.assign(is(s),i);return r.path+el(kr(r.query),"?")+el(r.hash,"#")};return{mode:l,get:i=>is(s),go(i,r){Tr(s,i,r),n()},start(i){e=i,l()},stop(){e=null,l(mt.OFF)},set(i){this.go(o(i),!i.path)},methods(){return xr(this)},base:i=>Dn=i}}function Tr(s,e,t){!t&&(ai=ci);let n=l=>history[`${t?"replace":"push"}State`]({},"",l);mt.run(s,l=>n(Dn+e),l=>n(`#${e}`),l=>ws=e)}function is(s){let e=window.location,t=mt.run(s,l=>(Dn?e.pathname.replace(Dn,""):e.pathname)+e.search+e.hash,l=>String(e.hash.slice(1)||"/"),l=>ws||"/"),n=t.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return ci=t,{url:t,from:ai,path:n[1]||"",query:wr(n[2]||""),hash:n[3]||""}}function xr(s){let e=()=>s.get().query,t=i=>s.set({query:i}),n=i=>t(i(e())),l=()=>s.get().hash,o=i=>s.set({hash:i});return{hash:{get:l,set:o,clear:()=>o("")},query:{replace:t,clear:()=>t(""),get(i){return i?e()[i]:e()},set(i,r){n(a=>(a[i]=r,a))},delete(i){n(r=>(r[i]&&delete r[i],r))}}}}var Bn=Er();function Er(){let{subscribe:s}=Jt(dt.get(),e=>{dt.start(e);let t=Sr(dt.go);return()=>{dt.stop(),t()}});return{subscribe:s,goto:dt.go,params:Cr,meta:Nr,useHashNavigation:e=>dt.mode(e?mt.HASH:mt.HISTORY),mode:{hash:()=>dt.mode(mt.HASH),history:()=>dt.mode(mt.HISTORY),memory:()=>dt.mode(mt.MEMORY)},base:dt.base,location:dt.methods()}}function Sr(s){let e=t=>{let n=t.target.closest("a[href]"),l=n&&Js(n,"target",!1,"_self"),o=n&&Js(n,"tinro-ignore"),i=t.ctrlKey||t.metaKey||t.altKey||t.shiftKey;if(l=="_self"&&!o&&!i&&n){let r=n.getAttribute("href").replace(/^\/#/,"");/^\/\/|^#|^[a-zA-Z]+:/.test(r)||(t.preventDefault(),s(r.startsWith("/")?r:n.href.replace(window.location.origin,"")))}};return addEventListener("click",e),()=>removeEventListener("click",e)}function Cr(){return tn("tinro").meta.params}var zn="tinro",Ar=ui({pattern:"",matched:!0});function Rr(s){let e=tn(zn)||Ar;(e.exact||e.fallback)&&ri(`${s.fallback?"<Route fallback>":`<Route path="${s.path}">`}  can't be inside ${e.fallback?"<Route fallback>":`<Route path="${e.path||"/"}"> with exact path`}`);let t=s.fallback?"fallbacks":"childs",n=Jt({}),l=ui({fallback:s.fallback,parent:e,update(o){l.exact=!o.path.endsWith("/*"),l.pattern=ms(`${l.parent.pattern||""}${o.path}`),l.redirect=o.redirect,l.firstmatch=o.firstmatch,l.breadcrumb=o.breadcrumb,l.match()},register:()=>(l.parent[t].add(l),()=>Ve(this,null,function*(){l.parent[t].delete(l),l.parent.activeChilds.delete(l),l.router.un&&l.router.un(),l.parent.match()})),show:()=>{s.onShow(),!l.fallback&&l.parent.activeChilds.add(l)},hide:()=>{s.onHide(),l.parent.activeChilds.delete(l)},match:()=>Ve(this,null,function*(){l.matched=!1;let{path:o,url:i,from:r,query:a}=l.router.location,c=vr(l.pattern,o);if(!l.fallback&&c&&l.redirect&&(!l.exact||l.exact&&c.exact)){let u=ii(o,l.parent.pattern,l.redirect);return Bn.goto(u,!0)}l.meta=c&&{from:r,url:i,query:a,match:c.part,pattern:l.pattern,breadcrumbs:l.parent.meta&&l.parent.meta.breadcrumbs.slice()||[],params:c.params,subscribe:n.subscribe},l.breadcrumb&&l.meta&&l.meta.breadcrumbs.push({name:l.breadcrumb,path:c.part}),n.set(l.meta),c&&!l.fallback&&(!l.exact||l.exact&&c.exact)&&(!l.parent.firstmatch||!l.parent.matched)?(s.onMeta(l.meta),l.parent.matched=!0,l.show()):l.hide(),c&&l.showFallbacks()})});return $s(zn,l),Bt(()=>l.register()),l}function Nr(){return fr(zn)?tn(zn).meta:ri("meta() function must be run inside any `<Route>` child component only")}function ui(s){let e={router:{},exact:!1,pattern:null,meta:null,parent:null,fallback:!1,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,showFallbacks(){return Ve(this,null,function*(){if(!this.fallback&&(yield li(),this.childs.size>0&&this.activeChilds.size==0||this.childs.size==0&&this.fallbacks.size>0)){let n=this;for(;n.fallbacks.size==0;)if(n=n.parent,!n)return;n&&n.fallbacks.forEach(l=>{if(l.redirect){let o=ii("/",l.parent.pattern,l.redirect);Bn.goto(o,!0)}else l.show()})}})},start(){this.router.un||(this.router.un=Bn.subscribe(n=>{this.router.location=n,this.pattern!==null&&this.match()}))},match(){this.showFallbacks()}};return Object.assign(e,s),e.start(),e}const Mr=s=>({params:s&2,meta:s&4}),tl=s=>({params:s[1],meta:s[2]});function nl(s){let e;const t=s[9].default,n=Ae(t,s,s[8],tl);return{c(){n&&n.c()},m(l,o){n&&n.m(l,o),e=!0},p(l,o){n&&n.p&&(!e||o&262)&&Ne(n,t,l,l[8],e?Re(t,l[8],o,Mr):Me(l[8]),tl)},i(l){e||(w(n,l),e=!0)},o(l){x(n,l),e=!1},d(l){n&&n.d(l)}}}function Pr(s){let e,t,n=s[0]&&nl(s);return{c(){n&&n.c(),e=we()},m(l,o){n&&n.m(l,o),k(l,e,o),t=!0},p(l,[o]){l[0]?n?(n.p(l,o),o&1&&w(n,1)):(n=nl(l),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(me(),x(n,1,1,()=>{n=null}),he())},i(l){t||(w(n),t=!0)},o(l){x(n),t=!1},d(l){n&&n.d(l),l&&v(e)}}}function Or(s,e,t){let{$$slots:n={},$$scope:l}=e,{path:o="/*"}=e,{fallback:i=!1}=e,{redirect:r=!1}=e,{firstmatch:a=!1}=e,{breadcrumb:c=null}=e,u=!1,f={},d={};const h=Rr({fallback:i,onShow(){t(0,u=!0)},onHide(){t(0,u=!1)},onMeta(m){t(2,d=m),t(1,f=d.params)}});return s.$$set=m=>{"path"in m&&t(3,o=m.path),"fallback"in m&&t(4,i=m.fallback),"redirect"in m&&t(5,r=m.redirect),"firstmatch"in m&&t(6,a=m.firstmatch),"breadcrumb"in m&&t(7,c=m.breadcrumb),"$$scope"in m&&t(8,l=m.$$scope)},s.$$.update=()=>{s.$$.dirty&232&&h.update({path:o,redirect:r,firstmatch:a,breadcrumb:c})},[u,f,d,o,i,r,a,c,l,n]}class Et extends V{constructor(e){super(),Z(this,e,Or,Pr,K,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}}const et=""+new URL("npm-logo.185f97d3.svg",import.meta.url).href;const{document:sl}=Pt;function Lr(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P,O,L,I,D,F,q,W,se,Q,B,U,J,oe,ue,ce,Pe,Ie,ye,$e,ne,Te,_e,ge,te,xe,Se,ve,Ee,ct,ut,re,We,Be,be,Ze,Qe,ft,st,H,X,le,j,fe,De,Ce,Je,Ut,Is,Ds,ln,Bs,bn,zs,Fs,xt,$n,Hs,qt,Kt,js,Us,on,qs,vn,Ks;return sl.title=e=document.title.replace(/(•).*$/,"$1 Home"),{c(){t=T(),n=_("section"),l=_("h1"),l.textContent="Packages",o=T(),i=_("div"),r=_("div"),a=_("div"),a.innerHTML='<a href="/tabs">@apsc/tabs</a>',c=T(),u=_("a"),f=_("img"),h=T(),m=_("div"),m.textContent="A set of components for organizing a tabbed interface",b=T(),$=_("div"),y=_("div"),y.innerHTML='<a href="/glob-notify">@apsc/glob-notify</a>',E=T(),M=_("a"),S=_("img"),P=T(),O=_("div"),O.textContent="Component for notifications globally for the entire application",L=T(),I=_("div"),D=_("div"),D.innerHTML='<a href="/color">@apsc/color</a>',F=T(),q=_("a"),W=_("img"),Q=T(),B=_("div"),B.textContent="A set of components for picking and editing colors",U=T(),J=_("div"),oe=_("div"),ue=_("div"),ue.innerHTML='<a href="/floating-ui-action">@apsc/floating-ui-action</a>',ce=T(),Pe=_("a"),Ie=_("img"),$e=T(),ne=_("div"),Te=z("Floating UI (ex. Popper) action for directive "),_e=_("code"),ge=z("use"),te=T(),xe=_("div"),Se=_("div"),Se.innerHTML='<a href="/focus-action">@apsc/focus-action</a>',ve=T(),Ee=_("a"),ct=_("img"),re=T(),We=_("div"),Be=z("Action to control "),be=_("code"),Ze=z("focusin"),Qe=z(` and
        `),ft=_("code"),st=z("focusout"),H=z(" for directive "),X=_("code"),le=z("use"),j=T(),fe=_("div"),De=_("div"),De.innerHTML='<a href="/keyboard-shortcut-action">@apsc/keyboard-shortcut-action</a>',Ce=T(),Je=_("a"),Ut=_("img"),Ds=T(),ln=_("div"),Bs=z("Action to call a function by keyboard shortcut for Svelte directive "),bn=_("code"),zs=z("use"),Fs=T(),xt=_("div"),$n=_("div"),$n.innerHTML='<a href="/scroll-child-action">@apsc/scroll-child-action</a>',Hs=T(),qt=_("a"),Kt=_("img"),Us=T(),on=_("div"),qs=z("Action to scroll the child to parent viewport for Svelte directive "),vn=_("code"),Ks=z("use"),g(l,"class","font-bold my-4 pb-2 text-3xl border-b border-gray-400"),g(a,"class","pkg-tile__link svelte-1gf5keo"),Ge(f.src,d=et)||g(f,"src",d),g(f,"alt","NPM logo"),g(f,"class","svelte-1gf5keo"),g(u,"class","pkg-tile__npm svelte-1gf5keo"),g(u,"href","https://www.npmjs.com/package/@apsc/tabs"),g(u,"target","_blank"),g(m,"class","pkg-tile__description svelte-1gf5keo"),g(r,"class","pkg-tile svelte-1gf5keo"),g(y,"class","pkg-tile__link svelte-1gf5keo"),Ge(S.src,N=et)||g(S,"src",N),g(S,"alt","NPM logo"),g(S,"class","svelte-1gf5keo"),g(M,"class","pkg-tile__npm svelte-1gf5keo"),g(M,"href","https://www.npmjs.com/package/@apsc/glob-notify"),g(M,"target","_blank"),g(O,"class","pkg-tile__description svelte-1gf5keo"),g($,"class","pkg-tile svelte-1gf5keo"),g(D,"class","pkg-tile__link svelte-1gf5keo"),Ge(W.src,se=et)||g(W,"src",se),g(W,"alt","NPM logo"),g(W,"class","svelte-1gf5keo"),g(q,"class","pkg-tile__npm svelte-1gf5keo"),g(q,"href","https://www.npmjs.com/package/@apsc/color"),g(q,"target","_blank"),g(B,"class","pkg-tile__description svelte-1gf5keo"),g(I,"class","pkg-tile svelte-1gf5keo"),g(i,"class","flex flex-wrap gap-6 mb-12"),g(ue,"class","pkg-tile__link svelte-1gf5keo"),Ge(Ie.src,ye=et)||g(Ie,"src",ye),g(Ie,"alt","NPM logo"),g(Ie,"class","svelte-1gf5keo"),g(Pe,"class","pkg-tile__npm svelte-1gf5keo"),g(Pe,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),g(Pe,"target","_blank"),g(_e,"class",Zt(s[0].code)+" svelte-1gf5keo"),g(ne,"class","pkg-tile__description svelte-1gf5keo"),g(oe,"class","pkg-tile svelte-1gf5keo"),g(Se,"class","pkg-tile__link svelte-1gf5keo"),Ge(ct.src,ut=et)||g(ct,"src",ut),g(ct,"alt","NPM logo"),g(ct,"class","svelte-1gf5keo"),g(Ee,"class","pkg-tile__npm svelte-1gf5keo"),g(Ee,"href","https://www.npmjs.com/package/@apsc/focus-action"),g(Ee,"target","_blank"),g(be,"class",Zt(s[0].code)+" svelte-1gf5keo"),g(ft,"class",Zt(s[0].code)+" svelte-1gf5keo"),g(X,"class",Zt(s[0].code)+" svelte-1gf5keo"),g(We,"class","pkg-tile__description svelte-1gf5keo"),g(xe,"class","pkg-tile svelte-1gf5keo"),g(De,"class","pkg-tile__link svelte-1gf5keo"),Ge(Ut.src,Is=et)||g(Ut,"src",Is),g(Ut,"alt","NPM logo"),g(Ut,"class","svelte-1gf5keo"),g(Je,"class","pkg-tile__npm svelte-1gf5keo"),g(Je,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),g(Je,"target","_blank"),g(bn,"class",Zt(s[0].code)+" svelte-1gf5keo"),g(ln,"class","pkg-tile__description svelte-1gf5keo"),g(fe,"class","pkg-tile svelte-1gf5keo"),g($n,"class","pkg-tile__link svelte-1gf5keo"),Ge(Kt.src,js=et)||g(Kt,"src",js),g(Kt,"alt","NPM logo"),g(Kt,"class","svelte-1gf5keo"),g(qt,"class","pkg-tile__npm svelte-1gf5keo"),g(qt,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),g(qt,"target","_blank"),g(vn,"class",Zt(s[0].code)+" svelte-1gf5keo"),g(on,"class","pkg-tile__description svelte-1gf5keo"),g(xt,"class","pkg-tile svelte-1gf5keo"),g(J,"class","flex flex-wrap gap-6 mb-12")},m(Wt,wn){k(Wt,t,wn),k(Wt,n,wn),p(n,l),p(n,o),p(n,i),p(i,r),p(r,a),p(r,c),p(r,u),p(u,f),p(r,h),p(r,m),p(i,b),p(i,$),p($,y),p($,E),p($,M),p(M,S),p($,P),p($,O),p(i,L),p(i,I),p(I,D),p(I,F),p(I,q),p(q,W),p(I,Q),p(I,B),p(n,U),p(n,J),p(J,oe),p(oe,ue),p(oe,ce),p(oe,Pe),p(Pe,Ie),p(oe,$e),p(oe,ne),p(ne,Te),p(ne,_e),p(_e,ge),p(J,te),p(J,xe),p(xe,Se),p(xe,ve),p(xe,Ee),p(Ee,ct),p(xe,re),p(xe,We),p(We,Be),p(We,be),p(be,Ze),p(We,Qe),p(We,ft),p(ft,st),p(We,H),p(We,X),p(X,le),p(J,j),p(J,fe),p(fe,De),p(fe,Ce),p(fe,Je),p(Je,Ut),p(fe,Ds),p(fe,ln),p(ln,Bs),p(ln,bn),p(bn,zs),p(J,Fs),p(J,xt),p(xt,$n),p(xt,Hs),p(xt,qt),p(qt,Kt),p(xt,Us),p(xt,on),p(on,qs),p(on,vn),p(vn,Ks)},p(Wt,[wn]){wn&0&&e!==(e=document.title.replace(/(•).*$/,"$1 Home"))&&(sl.title=e)},i:ee,o:ee,d(Wt){Wt&&v(t),Wt&&v(n)}}}function Ir(s){return[{code:"bg-gray-200 px-1 rounded-sm"}]}class Dr extends V{constructor(e){super(),Z(this,e,Ir,Lr,K,{})}}const ks=Symbol("TABS");function Br({mode:s,tabs:e,selectedTab:t,panels:n,selectedPanel:l,selectedTabClass:o,hiddenPanelClass:i}){const r=$r(t,a=>e.indexOf(a!=null?a:Symbol()));return{mode:s,registerTab:()=>{const a=Symbol("tab");return e.push(a),t.update(c=>c!=null?c:a),fs(()=>{const c=e.indexOf(a);c>=0&&(e.splice(c,1),t.update(u=>u===a?e[c]||e[e.length-1]:u))}),a},registerPanel:()=>{const a=Symbol("panel");return n.push(a),l.update(c=>c!=null?c:a),fs(()=>{const c=n.indexOf(a);c>=0&&(n.splice(c,1),l.update(u=>u===a?n[c]||n[n.length-1]:u))}),a},selectTab:a=>{var u;let c;typeof a=="number"?c=e.indexOf((u=e.at(a))!=null?u:Symbol()):c=e.indexOf(a),c>=0&&c<e.length&&(t.set(e[c]),l.set(n[c]))},selectedTab:t,selectedPanel:l,selectedIndex:r,selectedTabClass:o,hiddenPanelClass:i}}function zr(s){let e,t,n;const l=s[7].default,o=Ae(l,s,s[6],null);return{c(){e=_("div"),o&&o.c(),g(e,"class",t="c-tabs"+(s[0]?" "+s[0]:""))},m(i,r){k(i,e,r),o&&o.m(e,null),n=!0},p(i,[r]){o&&o.p&&(!n||r&64)&&Ne(o,l,i,i[6],n?Re(l,i[6],r,null):Me(i[6]),null),(!n||r&1&&t!==(t="c-tabs"+(i[0]?" "+i[0]:"")))&&g(e,"class",t)},i(i){n||(w(o,i),n=!0)},o(i){x(o,i),n=!1},d(i){i&&v(e),o&&o.d(i)}}}function Fr(s,e,t){let{$$slots:n={},$$scope:l}=e,{class:o=""}=e,{selectedTabClass:i="active"}=e,{hiddenPanelClass:r=""}=e,{mode:a="hide"}=e;const c=[],u=[],f=Jt(null),d=Jt(null),h=Br({mode:a,tabs:c,panels:u,selectedTab:f,selectedPanel:d,selectedTabClass:i,hiddenPanelClass:r}),m=h.selectedIndex,b=h.selectTab;return $s(ks,h),s.$$set=$=>{"class"in $&&t(0,o=$.class),"selectedTabClass"in $&&t(1,i=$.selectedTabClass),"hiddenPanelClass"in $&&t(2,r=$.hiddenPanelClass),"mode"in $&&t(3,a=$.mode),"$$scope"in $&&t(6,l=$.$$scope)},[o,i,r,a,m,b,l,n]}class ot extends V{constructor(e){super(),Z(this,e,Fr,zr,K,{class:0,selectedTabClass:1,hiddenPanelClass:2,mode:3,selectedIndex:4,selectTab:5})}get selectedIndex(){return this.$$.ctx[4]}get selectTab(){return this.$$.ctx[5]}}function Hr(s){let e,t,n;const l=s[2].default,o=Ae(l,s,s[1],null);return{c(){e=_("div"),o&&o.c(),g(e,"class",t="c-tabs__tablist"+(s[0]?" "+s[0]:""))},m(i,r){k(i,e,r),o&&o.m(e,null),n=!0},p(i,[r]){o&&o.p&&(!n||r&2)&&Ne(o,l,i,i[1],n?Re(l,i[1],r,null):Me(i[1]),null),(!n||r&1&&t!==(t="c-tabs__tablist"+(i[0]?" "+i[0]:"")))&&g(e,"class",t)},i(i){n||(w(o,i),n=!0)},o(i){x(o,i),n=!1},d(i){i&&v(e),o&&o.d(i)}}}function jr(s,e,t){let{$$slots:n={},$$scope:l}=e,{class:o=""}=e;return s.$$set=i=>{"class"in i&&t(0,o=i.class),"$$scope"in i&&t(1,l=i.$$scope)},[o,l,n]}class it extends V{constructor(e){super(),Z(this,e,jr,Hr,K,{class:0})}}const Ur=s=>({index:s&32,tabId:s&64,isActive:s&2}),ll=s=>({index:s[5],tabId:s[6],panelId:s[10],isActive:s[1]===s[10]});function ol(s){let e,t,n;const l=s[13].default,o=Ae(l,s,s[12],ll);return{c(){e=_("div"),o&&o.c(),g(e,"class",t=["c-tabs__tabpanel",s[0],s[2]].filter(il).join(" ")),g(e,"style",s[3])},m(i,r){k(i,e,r),o&&o.m(e,null),n=!0},p(i,r){o&&o.p&&(!n||r&4194)&&Ne(o,l,i,i[12],n?Re(l,i[12],r,Ur):Me(i[12]),ll),(!n||r&5&&t!==(t=["c-tabs__tabpanel",i[0],i[2]].filter(il).join(" ")))&&g(e,"class",t),(!n||r&8)&&g(e,"style",i[3])},i(i){n||(w(o,i),n=!0)},o(i){x(o,i),n=!1},d(i){i&&v(e),o&&o.d(i)}}}function qr(s){let e,t,n=!s[4]&&ol(s);return{c(){n&&n.c(),e=we()},m(l,o){n&&n.m(l,o),k(l,e,o),t=!0},p(l,[o]){l[4]?n&&(me(),x(n,1,1,()=>{n=null}),he()):n?(n.p(l,o),o&16&&w(n,1)):(n=ol(l),n.c(),w(n,1),n.m(e.parentNode,e))},i(l){t||(w(n),t=!0)},o(l){x(n),t=!1},d(l){n&&n.d(l),l&&v(e)}}}const il=s=>!!s;function Kr(s,e,t){let n,l,o,{$$slots:i={},$$scope:r}=e,{class:a=""}=e;const{mode:c,registerPanel:u,selectedPanel:f,selectedTab:d,selectedIndex:h,hiddenPanelClass:m}=tn(ks);Yt(s,f,S=>t(1,n=S)),Yt(s,d,S=>t(6,o=S)),Yt(s,h,S=>t(5,l=S));let{hiddenClass:b=m}=e;const $=u();let y="",E,M=!0;return s.$$set=S=>{"class"in S&&t(0,a=S.class),"hiddenClass"in S&&t(11,b=S.hiddenClass),"$$scope"in S&&t(12,r=S.$$scope)},s.$$.update=()=>{s.$$.dirty&2050&&function(S){S?(t(4,M=!1),t(3,E=void 0),t(2,y="")):c!=="hide"?(t(4,M=!0),t(3,E=void 0),t(2,y="")):(t(4,M=!1),b?(t(3,E=void 0),t(2,y=b)):(t(3,E="display: none"),t(2,y="")))}(n===$)},[a,n,y,E,M,l,o,f,d,h,$,b,r,i]}class de extends V{constructor(e){super(),Z(this,e,Kr,qr,K,{class:0,hiddenClass:11})}}const Wr=s=>({index:s&16,isActive:s&8}),rl=s=>({index:s[4],id:s[8],isActive:s[3]===s[8]});function Gr(s){let e,t,n,l,o;const i=s[10].default,r=Ae(i,s,s[9],rl);return{c(){e=_("button"),r&&r.c(),g(e,"class",t=["c-tabs__tab",s[0],s[3]===s[8]?s[1]:""].filter(al).join(" ")),e.disabled=s[2]},m(a,c){k(a,e,c),r&&r.m(e,null),n=!0,l||(o=G(e,"click",s[11]),l=!0)},p(a,[c]){r&&r.p&&(!n||c&536)&&Ne(r,i,a,a[9],n?Re(i,a[9],c,Wr):Me(a[9]),rl),(!n||c&11&&t!==(t=["c-tabs__tab",a[0],a[3]===a[8]?a[1]:""].filter(al).join(" ")))&&g(e,"class",t),(!n||c&4)&&(e.disabled=a[2])},i(a){n||(w(r,a),n=!0)},o(a){x(r,a),n=!1},d(a){a&&v(e),r&&r.d(a),l=!1,o()}}}const al=s=>!!s;function Zr(s,e,t){let n,l,{$$slots:o={},$$scope:i}=e,{class:r=""}=e;const{registerTab:a,selectTab:c,selectedTab:u,selectedIndex:f,selectedTabClass:d}=tn(ks);Yt(s,u,y=>t(3,n=y)),Yt(s,f,y=>t(4,l=y));let{selectedClass:h=d}=e,{disabled:m=void 0}=e;const b=a(),$=()=>c(b);return s.$$set=y=>{"class"in y&&t(0,r=y.class),"selectedClass"in y&&t(1,h=y.selectedClass),"disabled"in y&&t(2,m=y.disabled),"$$scope"in y&&t(9,i=y.$$scope)},[r,h,m,n,l,c,u,f,b,i,o,$]}class pe extends V{constructor(e){super(),Z(this,e,Zr,Gr,K,{class:0,selectedClass:1,disabled:2})}}const Vr=`<div class="component__source">Source <code>Tabs.svelte</code></div>
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
<td class="slot__props"><code>{ index: number; tabId: symbol; id: symbol; isActive: boolean }</code></td></tr></table>`;function Xr(){const s=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||s(e)},Bt(()=>{console.warn=s})}function cl(s,e,t){const n=s.slice();return n[18]=e[t],n}function ul(s,e,t){const n=s.slice();return n[18]=e[t],n}function fl(s,e,t){const n=s.slice();return n[10]=e[t],n}function dl(s,e,t){const n=s.slice();return n[13]=e[t],n[15]=t,n}function pl(s,e,t){const n=s.slice();return n[16]=e[t],n[15]=t,n}function ml(s,e,t){const n=s.slice();return n[7]=e[t],n}function Yr(s){let e,t,n,l;const o=[ta,ea,Jr],i=[];function r(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=we()},m(a,c){i[e].m(a,c),k(a,n,c),l=!0},p(a,c){let u=e;e=r(a),e===u?i[e].p(a,c):(me(),x(i[u],1,1,()=>{i[u]=null}),he(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){x(t),l=!1},d(a){i[e].d(a),a&&v(n)}}}function Qr(s){let e,t,n=s[1],l=[];for(let i=0;i<n.length;i+=1)l[i]=vl(ml(s,n,i));const o=i=>x(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=we()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);k(i,e,r),t=!0},p(i,r){if(r&34){n=i[1];let a;for(a=0;a<n.length;a+=1){const c=ml(i,n,a);l[a]?(l[a].p(c,r),w(l[a],1)):(l[a]=vl(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(me(),a=n.length;a<l.length;a+=1)o(a);he()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)w(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)x(l[r]);t=!1},d(i){He(l,i),i&&v(e)}}}function Jr(s){let e,t,n;const l=[s[6]];var o=s[5][s[0]];function i(r){let a={$$slots:{default:[la]},$$scope:{ctx:r}};for(let c=0;c<l.length;c+=1)a=rt(a,l[c]);return{props:a}}return o&&(e=new o(i(s))),{c(){e&&R(e.$$.fragment),t=we()},m(r,a){e&&C(e,r,a),k(r,t,a),n=!0},p(r,a){const c=a&64?zt(l,[nn(r[6])]):{};if(a&8388706&&(c.$$scope={dirty:a,ctx:r}),o!==(o=r[5][r[0]])){if(e){me();const u=e;x(u.$$.fragment,1,0,()=>{A(u,1)}),he()}o?(e=new o(i(r)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(r){n||(e&&w(e.$$.fragment,r),n=!0)},o(r){e&&x(e.$$.fragment,r),n=!1},d(r){r&&v(t),e&&A(e,r)}}}function ea(s){let e,t,n,l;const o=[ia,oa],i=[];function r(a,c){return a[4]?0:1}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=we()},m(a,c){i[e].m(a,c),k(a,n,c),l=!0},p(a,c){let u=e;e=r(a),e===u?i[e].p(a,c):(me(),x(i[u],1,1,()=>{i[u]=null}),he(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){x(t),l=!1},d(a){i[e].d(a),a&&v(n)}}}function ta(s){let e,t,n;var l=s[5].table;function o(i){return{props:{$$slots:{default:[_a]},$$scope:{ctx:i}}}}return l&&(e=new l(o(s))),{c(){e&&R(e.$$.fragment),t=we()},m(i,r){e&&C(e,i,r),k(i,t,r),n=!0},p(i,r){const a={};if(r&8388716&&(a.$$scope={dirty:r,ctx:i}),l!==(l=i[5].table)){if(e){me();const c=e;x(c.$$.fragment,1,0,()=>{A(c,1)}),he()}l?(e=new l(o(i)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&x(e.$$.fragment,i),n=!1},d(i){i&&v(t),e&&A(e,i)}}}function na(s){let e=s[6].raw+"",t;return{c(){t=z(e)},m(n,l){k(n,t,l)},p(n,l){l&64&&e!==(e=n[6].raw+"")&&ke(t,e)},i:ee,o:ee,d(n){n&&v(t)}}}function sa(s){let e,t;return e=new Ft({props:{tokens:s[1],renderers:s[5]}}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},p(n,l){const o={};l&2&&(o.tokens=n[1]),l&32&&(o.renderers=n[5]),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function la(s){let e,t,n,l;const o=[sa,na],i=[];function r(a,c){return a[1]?0:1}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=we()},m(a,c){i[e].m(a,c),k(a,n,c),l=!0},p(a,c){let u=e;e=r(a),e===u?i[e].p(a,c):(me(),x(i[u],1,1,()=>{i[u]=null}),he(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){x(t),l=!1},d(a){i[e].d(a),a&&v(n)}}}function oa(s){let e,t,n;const l=[{ordered:s[4]},s[6]];var o=s[5].list;function i(r){let a={$$slots:{default:[aa]},$$scope:{ctx:r}};for(let c=0;c<l.length;c+=1)a=rt(a,l[c]);return{props:a}}return o&&(e=new o(i(s))),{c(){e&&R(e.$$.fragment),t=we()},m(r,a){e&&C(e,r,a),k(r,t,a),n=!0},p(r,a){const c=a&80?zt(l,[a&16&&{ordered:r[4]},a&64&&nn(r[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),o!==(o=r[5].list)){if(e){me();const u=e;x(u.$$.fragment,1,0,()=>{A(u,1)}),he()}o?(e=new o(i(r)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(r){n||(e&&w(e.$$.fragment,r),n=!0)},o(r){e&&x(e.$$.fragment,r),n=!1},d(r){r&&v(t),e&&A(e,r)}}}function ia(s){let e,t,n;const l=[{ordered:s[4]},s[6]];var o=s[5].list;function i(r){let a={$$slots:{default:[ua]},$$scope:{ctx:r}};for(let c=0;c<l.length;c+=1)a=rt(a,l[c]);return{props:a}}return o&&(e=new o(i(s))),{c(){e&&R(e.$$.fragment),t=we()},m(r,a){e&&C(e,r,a),k(r,t,a),n=!0},p(r,a){const c=a&80?zt(l,[a&16&&{ordered:r[4]},a&64&&nn(r[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),o!==(o=r[5].list)){if(e){me();const u=e;x(u.$$.fragment,1,0,()=>{A(u,1)}),he()}o?(e=new o(i(r)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(r){n||(e&&w(e.$$.fragment,r),n=!0)},o(r){e&&x(e.$$.fragment,r),n=!1},d(r){r&&v(t),e&&A(e,r)}}}function ra(s){let e,t,n;return e=new Ft({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){R(e.$$.fragment),t=T()},m(l,o){C(e,l,o),k(l,t,o),n=!0},p(l,o){const i={};o&64&&(i.tokens=l[18].tokens),o&32&&(i.renderers=l[5]),e.$set(i)},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){x(e.$$.fragment,l),n=!1},d(l){A(e,l),l&&v(t)}}}function hl(s){let e,t,n;const l=[s[18]];var o=s[5].unorderedlistitem||s[5].listitem;function i(r){let a={$$slots:{default:[ra]},$$scope:{ctx:r}};for(let c=0;c<l.length;c+=1)a=rt(a,l[c]);return{props:a}}return o&&(e=new o(i(s))),{c(){e&&R(e.$$.fragment),t=we()},m(r,a){e&&C(e,r,a),k(r,t,a),n=!0},p(r,a){const c=a&64?zt(l,[nn(r[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),o!==(o=r[5].unorderedlistitem||r[5].listitem)){if(e){me();const u=e;x(u.$$.fragment,1,0,()=>{A(u,1)}),he()}o?(e=new o(i(r)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(r){n||(e&&w(e.$$.fragment,r),n=!0)},o(r){e&&x(e.$$.fragment,r),n=!1},d(r){r&&v(t),e&&A(e,r)}}}function aa(s){let e,t,n=s[6].items,l=[];for(let i=0;i<n.length;i+=1)l[i]=hl(cl(s,n,i));const o=i=>x(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=we()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);k(i,e,r),t=!0},p(i,r){if(r&96){n=i[6].items;let a;for(a=0;a<n.length;a+=1){const c=cl(i,n,a);l[a]?(l[a].p(c,r),w(l[a],1)):(l[a]=hl(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(me(),a=n.length;a<l.length;a+=1)o(a);he()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)w(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)x(l[r]);t=!1},d(i){He(l,i),i&&v(e)}}}function ca(s){let e,t,n;return e=new Ft({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){R(e.$$.fragment),t=T()},m(l,o){C(e,l,o),k(l,t,o),n=!0},p(l,o){const i={};o&64&&(i.tokens=l[18].tokens),o&32&&(i.renderers=l[5]),e.$set(i)},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){x(e.$$.fragment,l),n=!1},d(l){A(e,l),l&&v(t)}}}function gl(s){let e,t,n;const l=[s[18]];var o=s[5].orderedlistitem||s[5].listitem;function i(r){let a={$$slots:{default:[ca]},$$scope:{ctx:r}};for(let c=0;c<l.length;c+=1)a=rt(a,l[c]);return{props:a}}return o&&(e=new o(i(s))),{c(){e&&R(e.$$.fragment),t=we()},m(r,a){e&&C(e,r,a),k(r,t,a),n=!0},p(r,a){const c=a&64?zt(l,[nn(r[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),o!==(o=r[5].orderedlistitem||r[5].listitem)){if(e){me();const u=e;x(u.$$.fragment,1,0,()=>{A(u,1)}),he()}o?(e=new o(i(r)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(r){n||(e&&w(e.$$.fragment,r),n=!0)},o(r){e&&x(e.$$.fragment,r),n=!1},d(r){r&&v(t),e&&A(e,r)}}}function ua(s){let e,t,n=s[6].items,l=[];for(let i=0;i<n.length;i+=1)l[i]=gl(ul(s,n,i));const o=i=>x(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=we()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);k(i,e,r),t=!0},p(i,r){if(r&96){n=i[6].items;let a;for(a=0;a<n.length;a+=1){const c=ul(i,n,a);l[a]?(l[a].p(c,r),w(l[a],1)):(l[a]=gl(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(me(),a=n.length;a<l.length;a+=1)o(a);he()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)w(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)x(l[r]);t=!1},d(i){He(l,i),i&&v(e)}}}function fa(s){let e,t,n;return e=new Ft({props:{tokens:s[16].tokens,renderers:s[5]}}),{c(){R(e.$$.fragment),t=T()},m(l,o){C(e,l,o),k(l,t,o),n=!0},p(l,o){const i={};o&4&&(i.tokens=l[16].tokens),o&32&&(i.renderers=l[5]),e.$set(i)},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){x(e.$$.fragment,l),n=!1},d(l){A(e,l),l&&v(t)}}}function _l(s){let e,t,n;var l=s[5].tablecell;function o(i){return{props:{header:!0,align:i[6].align[i[15]]||"center",$$slots:{default:[fa]},$$scope:{ctx:i}}}}return l&&(e=new l(o(s))),{c(){e&&R(e.$$.fragment),t=we()},m(i,r){e&&C(e,i,r),k(i,t,r),n=!0},p(i,r){const a={};if(r&64&&(a.align=i[6].align[i[15]]||"center"),r&8388644&&(a.$$scope={dirty:r,ctx:i}),l!==(l=i[5].tablecell)){if(e){me();const c=e;x(c.$$.fragment,1,0,()=>{A(c,1)}),he()}l?(e=new l(o(i)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&x(e.$$.fragment,i),n=!1},d(i){i&&v(t),e&&A(e,i)}}}function da(s){let e,t,n=s[2],l=[];for(let i=0;i<n.length;i+=1)l[i]=_l(pl(s,n,i));const o=i=>x(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=we()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);k(i,e,r),t=!0},p(i,r){if(r&100){n=i[2];let a;for(a=0;a<n.length;a+=1){const c=pl(i,n,a);l[a]?(l[a].p(c,r),w(l[a],1)):(l[a]=_l(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(me(),a=n.length;a<l.length;a+=1)o(a);he()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)w(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)x(l[r]);t=!1},d(i){He(l,i),i&&v(e)}}}function pa(s){let e,t,n;var l=s[5].tablerow;function o(i){return{props:{$$slots:{default:[da]},$$scope:{ctx:i}}}}return l&&(e=new l(o(s))),{c(){e&&R(e.$$.fragment),t=we()},m(i,r){e&&C(e,i,r),k(i,t,r),n=!0},p(i,r){const a={};if(r&8388708&&(a.$$scope={dirty:r,ctx:i}),l!==(l=i[5].tablerow)){if(e){me();const c=e;x(c.$$.fragment,1,0,()=>{A(c,1)}),he()}l?(e=new l(o(i)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&x(e.$$.fragment,i),n=!1},d(i){i&&v(t),e&&A(e,i)}}}function ma(s){let e,t;return e=new Ft({props:{tokens:s[13].tokens,renderers:s[5]}}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},p(n,l){const o={};l&8&&(o.tokens=n[13].tokens),l&32&&(o.renderers=n[5]),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function bl(s){let e,t,n;var l=s[5].tablecell;function o(i){return{props:{header:!1,align:i[6].align[i[15]]||"center",$$slots:{default:[ma]},$$scope:{ctx:i}}}}return l&&(e=new l(o(s))),{c(){e&&R(e.$$.fragment),t=we()},m(i,r){e&&C(e,i,r),k(i,t,r),n=!0},p(i,r){const a={};if(r&64&&(a.align=i[6].align[i[15]]||"center"),r&8388648&&(a.$$scope={dirty:r,ctx:i}),l!==(l=i[5].tablecell)){if(e){me();const c=e;x(c.$$.fragment,1,0,()=>{A(c,1)}),he()}l?(e=new l(o(i)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&x(e.$$.fragment,i),n=!1},d(i){i&&v(t),e&&A(e,i)}}}function ha(s){let e,t,n=s[10],l=[];for(let i=0;i<n.length;i+=1)l[i]=bl(dl(s,n,i));const o=i=>x(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=T()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);k(i,e,r),t=!0},p(i,r){if(r&104){n=i[10];let a;for(a=0;a<n.length;a+=1){const c=dl(i,n,a);l[a]?(l[a].p(c,r),w(l[a],1)):(l[a]=bl(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(me(),a=n.length;a<l.length;a+=1)o(a);he()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)w(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)x(l[r]);t=!1},d(i){He(l,i),i&&v(e)}}}function $l(s){let e,t,n;var l=s[5].tablerow;function o(i){return{props:{$$slots:{default:[ha]},$$scope:{ctx:i}}}}return l&&(e=new l(o(s))),{c(){e&&R(e.$$.fragment),t=we()},m(i,r){e&&C(e,i,r),k(i,t,r),n=!0},p(i,r){const a={};if(r&8388712&&(a.$$scope={dirty:r,ctx:i}),l!==(l=i[5].tablerow)){if(e){me();const c=e;x(c.$$.fragment,1,0,()=>{A(c,1)}),he()}l?(e=new l(o(i)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&x(e.$$.fragment,i),n=!1},d(i){i&&v(t),e&&A(e,i)}}}function ga(s){let e,t,n=s[3],l=[];for(let i=0;i<n.length;i+=1)l[i]=$l(fl(s,n,i));const o=i=>x(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=we()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);k(i,e,r),t=!0},p(i,r){if(r&104){n=i[3];let a;for(a=0;a<n.length;a+=1){const c=fl(i,n,a);l[a]?(l[a].p(c,r),w(l[a],1)):(l[a]=$l(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(me(),a=n.length;a<l.length;a+=1)o(a);he()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)w(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)x(l[r]);t=!1},d(i){He(l,i),i&&v(e)}}}function _a(s){let e,t,n,l,o;var i=s[5].tablehead;function r(u){return{props:{$$slots:{default:[pa]},$$scope:{ctx:u}}}}i&&(e=new i(r(s)));var a=s[5].tablebody;function c(u){return{props:{$$slots:{default:[ga]},$$scope:{ctx:u}}}}return a&&(n=new a(c(s))),{c(){e&&R(e.$$.fragment),t=T(),n&&R(n.$$.fragment),l=we()},m(u,f){e&&C(e,u,f),k(u,t,f),n&&C(n,u,f),k(u,l,f),o=!0},p(u,f){const d={};if(f&8388708&&(d.$$scope={dirty:f,ctx:u}),i!==(i=u[5].tablehead)){if(e){me();const m=e;x(m.$$.fragment,1,0,()=>{A(m,1)}),he()}i?(e=new i(r(u)),R(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else i&&e.$set(d);const h={};if(f&8388712&&(h.$$scope={dirty:f,ctx:u}),a!==(a=u[5].tablebody)){if(n){me();const m=n;x(m.$$.fragment,1,0,()=>{A(m,1)}),he()}a?(n=new a(c(u)),R(n.$$.fragment),w(n.$$.fragment,1),C(n,l.parentNode,l)):n=null}else a&&n.$set(h)},i(u){o||(e&&w(e.$$.fragment,u),n&&w(n.$$.fragment,u),o=!0)},o(u){e&&x(e.$$.fragment,u),n&&x(n.$$.fragment,u),o=!1},d(u){e&&A(e,u),u&&v(t),u&&v(l),n&&A(n,u)}}}function vl(s){let e,t;const n=[s[7],{renderers:s[5]}];let l={};for(let o=0;o<n.length;o+=1)l=rt(l,n[o]);return e=new Ft({props:l}),{c(){R(e.$$.fragment)},m(o,i){C(e,o,i),t=!0},p(o,i){const r=i&34?zt(n,[i&2&&nn(o[7]),i&32&&{renderers:o[5]}]):{};e.$set(r)},i(o){t||(w(e.$$.fragment,o),t=!0)},o(o){x(e.$$.fragment,o),t=!1},d(o){A(e,o)}}}function ba(s){let e,t,n,l;const o=[Qr,Yr],i=[];function r(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=r(s))&&(t=i[e]=o[e](s)),{c(){t&&t.c(),n=we()},m(a,c){~e&&i[e].m(a,c),k(a,n,c),l=!0},p(a,[c]){let u=e;e=r(a),e===u?~e&&i[e].p(a,c):(t&&(me(),x(i[u],1,1,()=>{i[u]=null}),he()),~e?(t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n)):t=null)},i(a){l||(w(t),l=!0)},o(a){x(t),l=!1},d(a){~e&&i[e].d(a),a&&v(n)}}}function $a(s,e,t){const n=["type","tokens","header","rows","ordered","renderers"];let l=Pn(e,n),{type:o=void 0}=e,{tokens:i=void 0}=e,{header:r=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return Xr(),s.$$set=f=>{e=rt(rt({},e),Xo(f)),t(6,l=Pn(e,n)),"type"in f&&t(0,o=f.type),"tokens"in f&&t(1,i=f.tokens),"header"in f&&t(2,r=f.header),"rows"in f&&t(3,a=f.rows),"ordered"in f&&t(4,c=f.ordered),"renderers"in f&&t(5,u=f.renderers)},[o,i,r,a,c,u,l]}class Ft extends V{constructor(e){super(),Z(this,e,$a,ba,K,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}}function fi(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let sn=fi();function va(s){sn=s}const wa=/[&<>"']/,ka=/[&<>"']/g,ya=/[<>"']|&(?!#?\w+;)/,Ta=/[<>"']|&(?!#?\w+;)/g,xa={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wl=s=>xa[s];function qe(s,e){if(e){if(wa.test(s))return s.replace(ka,wl)}else if(ya.test(s))return s.replace(Ta,wl);return s}const Ea=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function di(s){return s.replace(Ea,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Sa=/(^|[^\[])\^/g;function Le(s,e){s=typeof s=="string"?s:s.source,e=e||"";const t={replace:(n,l)=>(l=l.source||l,l=l.replace(Sa,"$1"),s=s.replace(n,l),t),getRegex:()=>new RegExp(s,e)};return t}const Ca=/[^\w:]/g,Aa=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function kl(s,e,t){if(s){let n;try{n=decodeURIComponent(di(t)).replace(Ca,"").toLowerCase()}catch(l){return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!Aa.test(t)&&(t=Pa(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(n){return null}return t}const xn={},Ra=/^[^:]+:\/*[^/]*$/,Na=/^([^:]+:)[\s\S]*$/,Ma=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Pa(s,e){xn[" "+s]||(Ra.test(s)?xn[" "+s]=s+"/":xn[" "+s]=Nn(s,"/",!0)),s=xn[" "+s];const t=s.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:s.replace(Na,"$1")+e:e.charAt(0)==="/"?t?e:s.replace(Ma,"$1")+e:s+e}const Fn={exec:function(){}};function ht(s){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s}function yl(s,e){const t=s.replace(/\|/g,(o,i,r)=>{let a=!1,c=i;for(;--c>=0&&r[c]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let l=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;l<n.length;l++)n[l]=n[l].trim().replace(/\\\|/g,"|");return n}function Nn(s,e,t){const n=s.length;if(n===0)return"";let l=0;for(;l<n;){const o=s.charAt(n-l-1);if(o===e&&!t)l++;else if(o!==e&&t)l++;else break}return s.slice(0,n-l)}function Oa(s,e){if(s.indexOf(e[1])===-1)return-1;const t=s.length;let n=0,l=0;for(;l<t;l++)if(s[l]==="\\")l++;else if(s[l]===e[0])n++;else if(s[l]===e[1]&&(n--,n<0))return l;return-1}function pi(s){s&&s.sanitize&&!s.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Tl(s,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=s),e>>=1,s+=s;return t+s}function xl(s,e,t,n){const l=e.href,o=e.title?qe(e.title):null,i=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){n.state.inLink=!0;const r={type:"link",raw:t,href:l,title:o,text:i,tokens:n.inlineTokens(i)};return n.state.inLink=!1,r}return{type:"image",raw:t,href:l,title:o,text:qe(i)}}function La(s,e){const t=s.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(l=>{const o=l.match(/^\s+/);if(o===null)return l;const[i]=o;return i.length>=n.length?l.slice(n.length):l}).join(`
`)}class ys{constructor(e){this.options=e||sn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Nn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],l=La(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:l}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const l=Nn(n,"#");(this.options.pedantic||!l||/ $/.test(l))&&(n=l.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,l,o,i,r,a,c,u,f,d,h,m,b=t[1].trim();const $=b.length>1,y={type:"list",raw:"",ordered:$,start:$?+b.slice(0,-1):"",loose:!1,items:[]};b=$?`\\d{1,9}\\${b.slice(-1)}`:`\\${b}`,this.options.pedantic&&(b=$?b:"[*+-]");const E=new RegExp(`^( {0,3}${b})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(m=!1,!(!(t=E.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0],f=e.split(`
`,1)[0],this.options.pedantic?(i=2,h=u.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,h=u.slice(i),i+=t[1].length),a=!1,!u&&/^ *$/.test(f)&&(n+=f+`
`,e=e.substring(f.length+1),m=!0),!m){const S=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),N=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),P=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),O=new RegExp(`^ {0,${Math.min(3,i-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(P.test(u)||O.test(u)||S.test(u)||N.test(e)));){if(u.search(/[^ ]/)>=i||!u.trim())h+=`
`+u.slice(i);else if(!a)h+=`
`+u;else break;!a&&!u.trim()&&(a=!0),n+=d+`
`,e=e.substring(d.length+1)}}y.loose||(c?y.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(l=/^\[[ xX]\] /.exec(h),l&&(o=l[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),y.items.push({type:"list_item",raw:n,task:!!l,checked:o,loose:!1,text:h}),y.raw+=n}y.items[y.items.length-1].raw=n.trimRight(),y.items[y.items.length-1].text=h.trimRight(),y.raw=y.raw.trimRight();const M=y.items.length;for(r=0;r<M;r++){this.lexer.state.top=!1,y.items[r].tokens=this.lexer.blockTokens(y.items[r].text,[]);const S=y.items[r].tokens.filter(P=>P.type==="space"),N=S.every(P=>{const O=P.raw.split("");let L=0;for(const I of O)if(I===`
`&&(L+=1),L>1)return!0;return!1});!y.loose&&S.length&&N&&(y.loose=!0,y.items[r].loose=!0)}return y}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const l=this.options.sanitizer?this.options.sanitizer(t[0]):qe(t[0]);n.type="paragraph",n.text=l,n.tokens=this.lexer.inline(l)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const n=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:n,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:yl(t[1]).map(l=>({text:l})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let l=n.align.length,o,i,r,a;for(o=0;o<l;o++)/^ *-+: *$/.test(n.align[o])?n.align[o]="right":/^ *:-+: *$/.test(n.align[o])?n.align[o]="center":/^ *:-+ *$/.test(n.align[o])?n.align[o]="left":n.align[o]=null;for(l=n.rows.length,o=0;o<l;o++)n.rows[o]=yl(n.rows[o],n.header.length).map(c=>({text:c}));for(l=n.header.length,i=0;i<l;i++)n.header[i].tokens=this.lexer.inline(n.header[i].text);for(l=n.rows.length,i=0;i<l;i++)for(a=n.rows[i],r=0;r<a.length;r++)a[r].tokens=this.lexer.inline(a[r].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:qe(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):qe(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const i=Nn(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Oa(t[2],"()");if(i>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let l=t[2],o="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);i&&(l=i[1],o=i[3])}else o=t[3]?t[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(this.options.pedantic&&!/>$/.test(n)?l=l.slice(1):l=l.slice(1,-1)),xl(t,{href:l&&l.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let l=(n[2]||n[1]).replace(/\s+/g," ");if(l=t[l.toLowerCase()],!l||!l.href){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return xl(n,l,n[0],this.lexer)}}emStrong(e,t,n=""){let l=this.rules.inline.emStrong.lDelim.exec(e);if(!l||l[3]&&n.match(/[\p{L}\p{N}]/u))return;const o=l[1]||l[2]||"";if(!o||o&&(n===""||this.rules.inline.punctuation.exec(n))){const i=l[0].length-1;let r,a,c=i,u=0;const f=l[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+i);(l=f.exec(t))!=null;){if(r=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!r)continue;if(a=r.length,l[3]||l[4]){c+=a;continue}else if((l[5]||l[6])&&i%3&&!((i+a)%3)){u+=a;continue}if(c-=a,c>0)continue;if(a=Math.min(a,a+c+u),Math.min(i,a)%2){const h=e.slice(1,i+l.index+a);return{type:"em",raw:e.slice(0,i+l.index+a+1),text:h,tokens:this.lexer.inlineTokens(h)}}const d=e.slice(2,i+l.index+a-1);return{type:"strong",raw:e.slice(0,i+l.index+a+1),text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const l=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return l&&o&&(n=n.substring(1,n.length-1)),n=qe(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let l,o;return n[2]==="@"?(l=qe(this.options.mangle?t(n[1]):n[1]),o="mailto:"+l):(l=qe(n[1]),o=l),{type:"link",raw:n[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let l,o;if(n[2]==="@")l=qe(this.options.mangle?t(n[0]):n[0]),o="mailto:"+l;else{let i;do i=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(i!==n[0]);l=qe(n[0]),n[1]==="www."?o="http://"+l:o=l}return{type:"link",raw:n[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let l;return this.lexer.state.inRawBlock?l=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):qe(n[0]):n[0]:l=qe(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:l}}}}const ie={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Fn,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};ie._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;ie._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;ie.def=Le(ie.def).replace("label",ie._label).replace("title",ie._title).getRegex();ie.bullet=/(?:[*+-]|\d{1,9}[.)])/;ie.listItemStart=Le(/^( *)(bull) */).replace("bull",ie.bullet).getRegex();ie.list=Le(ie.list).replace(/bull/g,ie.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+ie.def.source+")").getRegex();ie._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";ie._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;ie.html=Le(ie.html,"i").replace("comment",ie._comment).replace("tag",ie._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();ie.paragraph=Le(ie._paragraph).replace("hr",ie.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ie._tag).getRegex();ie.blockquote=Le(ie.blockquote).replace("paragraph",ie.paragraph).getRegex();ie.normal=ht({},ie);ie.gfm=ht({},ie.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});ie.gfm.table=Le(ie.gfm.table).replace("hr",ie.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ie._tag).getRegex();ie.gfm.paragraph=Le(ie._paragraph).replace("hr",ie.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",ie.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ie._tag).getRegex();ie.pedantic=ht({},ie.normal,{html:Le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ie._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Fn,paragraph:Le(ie.normal._paragraph).replace("hr",ie.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ie.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const Y={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Fn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Fn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};Y._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";Y.punctuation=Le(Y.punctuation).replace(/punctuation/g,Y._punctuation).getRegex();Y.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;Y.escapedEmSt=/\\\*|\\_/g;Y._comment=Le(ie._comment).replace("(?:-->|$)","-->").getRegex();Y.emStrong.lDelim=Le(Y.emStrong.lDelim).replace(/punct/g,Y._punctuation).getRegex();Y.emStrong.rDelimAst=Le(Y.emStrong.rDelimAst,"g").replace(/punct/g,Y._punctuation).getRegex();Y.emStrong.rDelimUnd=Le(Y.emStrong.rDelimUnd,"g").replace(/punct/g,Y._punctuation).getRegex();Y._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;Y._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;Y._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;Y.autolink=Le(Y.autolink).replace("scheme",Y._scheme).replace("email",Y._email).getRegex();Y._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;Y.tag=Le(Y.tag).replace("comment",Y._comment).replace("attribute",Y._attribute).getRegex();Y._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;Y._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;Y._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;Y.link=Le(Y.link).replace("label",Y._label).replace("href",Y._href).replace("title",Y._title).getRegex();Y.reflink=Le(Y.reflink).replace("label",Y._label).replace("ref",ie._label).getRegex();Y.nolink=Le(Y.nolink).replace("ref",ie._label).getRegex();Y.reflinkSearch=Le(Y.reflinkSearch,"g").replace("reflink",Y.reflink).replace("nolink",Y.nolink).getRegex();Y.normal=ht({},Y);Y.pedantic=ht({},Y.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Le(/^!?\[(label)\]\((.*?)\)/).replace("label",Y._label).getRegex(),reflink:Le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Y._label).getRegex()});Y.gfm=ht({},Y.normal,{escape:Le(Y.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});Y.gfm.url=Le(Y.gfm.url,"i").replace("email",Y.gfm._extended_email).getRegex();Y.breaks=ht({},Y.gfm,{br:Le(Y.br).replace("{2,}","*").getRegex(),text:Le(Y.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Ia(s){return s.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function El(s){let e="",t,n;const l=s.length;for(t=0;t<l;t++)n=s.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class bt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||sn,this.options.tokenizer=this.options.tokenizer||new ys,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ie.normal,inline:Y.normal};this.options.pedantic?(t.block=ie.pedantic,t.inline=Y.pedantic):this.options.gfm&&(t.block=ie.gfm,this.options.breaks?t.inline=Y.breaks:t.inline=Y.gfm),this.tokenizer.rules=t}static get rules(){return{block:ie,inline:Y}}static lex(e,t){return new bt(t).lex(e)}static lexInline(e,t){return new bt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(r,a,c)=>a+"    ".repeat(c.length));let n,l,o,i;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>(n=r.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+n.raw,l.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+n.raw,l.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=l.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let r=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(r=Math.min(r,c))}),r<1/0&&r>=0&&(o=e.substring(0,r+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){l=t[t.length-1],i&&l.type==="paragraph"?(l.raw+=`
`+n.raw,l.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(n),i=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&l.type==="text"?(l.raw+=`
`+n.raw,l.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(n);continue}if(e){const r="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(r);break}else throw new Error(r)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,l,o,i=e,r,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)u.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+Tl("a",r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,r.index)+"["+Tl("a",r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.escapedEmSt.exec(i))!=null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&n.type==="text"&&l.type==="text"?(l.raw+=n.raw,l.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),l=t[t.length-1],l&&n.type==="text"&&l.type==="text"?(l.raw+=n.raw,l.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,i,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,El)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,El))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let d;this.options.extensions.startInline.forEach(function(h){d=h.call({lexer:this},f),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(o=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(o,Ia)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),a=!0,l=t[t.length-1],l&&l.type==="text"?(l.raw+=n.raw,l.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Ts{constructor(e){this.options=e||sn}code(e,t,n){const l=(t||"").match(/\S*/)[0];if(this.options.highlight){const o=this.options.highlight(e,l);o!=null&&o!==e&&(n=!0,e=o)}return e=e.replace(/\n$/,"")+`
`,l?'<pre><code class="'+this.options.langPrefix+qe(l,!0)+'">'+(n?e:qe(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:qe(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=kl(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let l='<a href="'+qe(e)+'"';return t&&(l+=' title="'+t+'"'),l+=">"+n+"</a>",l}image(e,t,n){if(e=kl(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let l=`<img src="${e}" alt="${n}"`;return t&&(l+=` title="${t}"`),l+=this.options.xhtml?"/>":">",l}text(e){return e}}class mi{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class xs{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,l=0;if(this.seen.hasOwnProperty(n)){l=this.seen[e];do l++,n=e+"-"+l;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=l,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class _t{constructor(e){this.options=e||sn,this.options.renderer=this.options.renderer||new Ts,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new mi,this.slugger=new xs}static parse(e,t){return new _t(t).parse(e)}static parseInline(e,t){return new _t(t).parseInline(e)}parse(e,t=!0){let n="",l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P;const O=e.length;for(l=0;l<O;l++){if(h=e[l],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(P=this.options.extensions.renderers[h.type].call({parser:this},h),P!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type))){n+=P||"";continue}switch(h.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(h.tokens),h.depth,di(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(h.text,h.lang,h.escaped);continue}case"table":{for(f="",u="",r=h.header.length,o=0;o<r;o++)u+=this.renderer.tablecell(this.parseInline(h.header[o].tokens),{header:!0,align:h.align[o]});for(f+=this.renderer.tablerow(u),d="",r=h.rows.length,o=0;o<r;o++){for(c=h.rows[o],u="",a=c.length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(c[i].tokens),{header:!1,align:h.align[i]});d+=this.renderer.tablerow(u)}n+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(h.tokens),n+=this.renderer.blockquote(d);continue}case"list":{for(m=h.ordered,b=h.start,$=h.loose,r=h.items.length,d="",o=0;o<r;o++)E=h.items[o],M=E.checked,S=E.task,y="",E.task&&(N=this.renderer.checkbox(M),$?E.tokens.length>0&&E.tokens[0].type==="paragraph"?(E.tokens[0].text=N+" "+E.tokens[0].text,E.tokens[0].tokens&&E.tokens[0].tokens.length>0&&E.tokens[0].tokens[0].type==="text"&&(E.tokens[0].tokens[0].text=N+" "+E.tokens[0].tokens[0].text)):E.tokens.unshift({type:"text",text:N}):y+=N),y+=this.parse(E.tokens,$),d+=this.renderer.listitem(y,S,M);n+=this.renderer.list(d,m,b);continue}case"html":{n+=this.renderer.html(h.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(h.tokens));continue}case"text":{for(d=h.tokens?this.parseInline(h.tokens):h.text;l+1<O&&e[l+1].type==="text";)h=e[++l],d+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);n+=t?this.renderer.paragraph(d):d;continue}default:{const L='Token with "'+h.type+'" type was not found.';if(this.options.silent){console.error(L);return}else throw new Error(L)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",l,o,i;const r=e.length;for(l=0;l<r;l++){if(o=e[l],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(i=this.options.extensions.renderers[o.type].call({parser:this},o),i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type))){n+=i||"";continue}switch(o.type){case"escape":{n+=t.text(o.text);break}case"html":{n+=t.html(o.text);break}case"link":{n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{n+=t.image(o.href,o.title,o.text);break}case"strong":{n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(o.tokens,t));break}case"text":{n+=t.text(o.text);break}default:{const a='Token with "'+o.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return n}}function ae(s,e,t){if(typeof s=="undefined"||s===null)throw new Error("marked(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=ht({},ae.defaults,e||{}),pi(e),t){const l=e.highlight;let o;try{o=bt.lex(s,e)}catch(a){return t(a)}const i=function(a){let c;if(!a)try{e.walkTokens&&ae.walkTokens(o,e.walkTokens),c=_t.parse(o,e)}catch(u){a=u}return e.highlight=l,a?t(a):t(null,c)};if(!l||l.length<3||(delete e.highlight,!o.length))return i();let r=0;ae.walkTokens(o,function(a){a.type==="code"&&(r++,setTimeout(()=>{l(a.text,a.lang,function(c,u){if(c)return i(c);u!=null&&u!==a.text&&(a.text=u,a.escaped=!0),r--,r===0&&i()})},0))}),r===0&&i();return}function n(l){if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+qe(l.message+"",!0)+"</pre>";throw l}try{const l=bt.lex(s,e);if(e.walkTokens){if(e.async)return Promise.all(ae.walkTokens(l,e.walkTokens)).then(()=>_t.parse(l,e)).catch(n);ae.walkTokens(l,e.walkTokens)}return _t.parse(l,e)}catch(l){n(l)}}ae.options=ae.setOptions=function(s){return ht(ae.defaults,s),va(ae.defaults),ae};ae.getDefaults=fi;ae.defaults=sn;ae.use=function(...s){const e=ht({},...s),t=ae.defaults.extensions||{renderers:{},childTokens:{}};let n;s.forEach(l=>{if(l.extensions&&(n=!0,l.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const i=t.renderers?t.renderers[o.name]:null;i?t.renderers[o.name]=function(...r){let a=o.renderer.apply(this,r);return a===!1&&(a=i.apply(this,r)),a}:t.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[o.level]?t[o.level].unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}o.childTokens&&(t.childTokens[o.name]=o.childTokens)})),l.renderer){const o=ae.defaults.renderer||new Ts;for(const i in l.renderer){const r=o[i];o[i]=(...a)=>{let c=l.renderer[i].apply(o,a);return c===!1&&(c=r.apply(o,a)),c}}e.renderer=o}if(l.tokenizer){const o=ae.defaults.tokenizer||new ys;for(const i in l.tokenizer){const r=o[i];o[i]=(...a)=>{let c=l.tokenizer[i].apply(o,a);return c===!1&&(c=r.apply(o,a)),c}}e.tokenizer=o}if(l.walkTokens){const o=ae.defaults.walkTokens;e.walkTokens=function(i){let r=[];return r.push(l.walkTokens.call(this,i)),o&&(r=r.concat(o.call(this,i))),r}}n&&(e.extensions=t),ae.setOptions(e)})};ae.walkTokens=function(s,e){let t=[];for(const n of s)switch(t=t.concat(e.call(ae,n)),n.type){case"table":{for(const l of n.header)t=t.concat(ae.walkTokens(l.tokens,e));for(const l of n.rows)for(const o of l)t=t.concat(ae.walkTokens(o.tokens,e));break}case"list":{t=t.concat(ae.walkTokens(n.items,e));break}default:ae.defaults.extensions&&ae.defaults.extensions.childTokens&&ae.defaults.extensions.childTokens[n.type]?ae.defaults.extensions.childTokens[n.type].forEach(function(l){t=t.concat(ae.walkTokens(n[l],e))}):n.tokens&&(t=t.concat(ae.walkTokens(n.tokens,e)))}return t};ae.parseInline=function(s,e){if(typeof s=="undefined"||s===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");e=ht({},ae.defaults,e||{}),pi(e);try{const t=bt.lexInline(s,e);return e.walkTokens&&ae.walkTokens(t,e.walkTokens),_t.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+qe(t.message+"",!0)+"</pre>";throw t}};ae.Parser=_t;ae.parser=_t.parse;ae.Renderer=Ts;ae.TextRenderer=mi;ae.Lexer=bt;ae.lexer=bt.lex;ae.Tokenizer=ys;ae.Slugger=xs;ae.parse=ae;ae.options;ae.setOptions;ae.use;ae.walkTokens;ae.parseInline;_t.parse;bt.lex;const hi={};function Da(s){let e;return{c(){e=z(s[1])},m(t,n){k(t,e,n)},p(t,n){n&2&&ke(e,t[1])},i:ee,o:ee,d(t){t&&v(e)}}}function Ba(s){let e,t;const n=s[5].default,l=Ae(n,s,s[4],null);return{c(){e=_("h6"),l&&l.c(),g(e,"id",s[2])},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Ne(l,n,o,o[4],t?Re(n,o[4],i,null):Me(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function za(s){let e,t;const n=s[5].default,l=Ae(n,s,s[4],null);return{c(){e=_("h5"),l&&l.c(),g(e,"id",s[2])},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Ne(l,n,o,o[4],t?Re(n,o[4],i,null):Me(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Fa(s){let e,t;const n=s[5].default,l=Ae(n,s,s[4],null);return{c(){e=_("h4"),l&&l.c(),g(e,"id",s[2])},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Ne(l,n,o,o[4],t?Re(n,o[4],i,null):Me(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Ha(s){let e,t;const n=s[5].default,l=Ae(n,s,s[4],null);return{c(){e=_("h3"),l&&l.c(),g(e,"id",s[2])},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Ne(l,n,o,o[4],t?Re(n,o[4],i,null):Me(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function ja(s){let e,t;const n=s[5].default,l=Ae(n,s,s[4],null);return{c(){e=_("h2"),l&&l.c(),g(e,"id",s[2])},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Ne(l,n,o,o[4],t?Re(n,o[4],i,null):Me(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Ua(s){let e,t;const n=s[5].default,l=Ae(n,s,s[4],null);return{c(){e=_("h1"),l&&l.c(),g(e,"id",s[2])},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&16)&&Ne(l,n,o,o[4],t?Re(n,o[4],i,null):Me(o[4]),null),(!t||i&4)&&g(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function qa(s){let e,t,n,l;const o=[Ua,ja,Ha,Fa,za,Ba,Da],i=[];function r(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=we()},m(a,c){i[e].m(a,c),k(a,n,c),l=!0},p(a,[c]){let u=e;e=r(a),e===u?i[e].p(a,c):(me(),x(i[u],1,1,()=>{i[u]=null}),he(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){x(t),l=!1},d(a){i[e].d(a),a&&v(n)}}}function Ka(s,e,t){let n,{$$slots:l={},$$scope:o}=e,{depth:i}=e,{raw:r}=e,{text:a}=e;const{slug:c,getOptions:u}=tn(hi),f=u();return s.$$set=d=>{"depth"in d&&t(0,i=d.depth),"raw"in d&&t(1,r=d.raw),"text"in d&&t(3,a=d.text),"$$scope"in d&&t(4,o=d.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(2,n=f.headerIds?f.headerPrefix+c(a):void 0)},[i,r,n,a,o,l]}class Wa extends V{constructor(e){super(),Z(this,e,Ka,qa,K,{depth:0,raw:1,text:3})}}function Ga(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("p"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Za(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Va extends V{constructor(e){super(),Z(this,e,Za,Ga,K,{})}}function Xa(s){let e;const t=s[3].default,n=Ae(t,s,s[2],null);return{c(){n&&n.c()},m(l,o){n&&n.m(l,o),e=!0},p(l,[o]){n&&n.p&&(!e||o&4)&&Ne(n,t,l,l[2],e?Re(t,l[2],o,null):Me(l[2]),null)},i(l){e||(w(n,l),e=!0)},o(l){x(n,l),e=!1},d(l){n&&n.d(l)}}}function Ya(s,e,t){let{$$slots:n={},$$scope:l}=e,{text:o}=e,{raw:i}=e;return s.$$set=r=>{"text"in r&&t(0,o=r.text),"raw"in r&&t(1,i=r.raw),"$$scope"in r&&t(2,l=r.$$scope)},[o,i,l,n]}class Qa extends V{constructor(e){super(),Z(this,e,Ya,Xa,K,{text:0,raw:1})}}function Ja(s){let e,t;return{c(){e=_("img"),Ge(e.src,t=s[0])||g(e,"src",t),g(e,"title",s[1]),g(e,"alt",s[2])},m(n,l){k(n,e,l)},p(n,[l]){l&1&&!Ge(e.src,t=n[0])&&g(e,"src",t),l&2&&g(e,"title",n[1]),l&4&&g(e,"alt",n[2])},i:ee,o:ee,d(n){n&&v(e)}}}function ec(s,e,t){let{href:n=""}=e,{title:l=void 0}=e,{text:o=""}=e;return s.$$set=i=>{"href"in i&&t(0,n=i.href),"title"in i&&t(1,l=i.title),"text"in i&&t(2,o=i.text)},[n,l,o]}class tc extends V{constructor(e){super(),Z(this,e,ec,Ja,K,{href:0,title:1,text:2})}}function nc(s){let e,t;const n=s[3].default,l=Ae(n,s,s[2],null);return{c(){e=_("a"),l&&l.c(),g(e,"href",s[0]),g(e,"title",s[1])},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&4)&&Ne(l,n,o,o[2],t?Re(n,o[2],i,null):Me(o[2]),null),(!t||i&1)&&g(e,"href",o[0]),(!t||i&2)&&g(e,"title",o[1])},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function sc(s,e,t){let{$$slots:n={},$$scope:l}=e,{href:o=""}=e,{title:i=void 0}=e;return s.$$set=r=>{"href"in r&&t(0,o=r.href),"title"in r&&t(1,i=r.title),"$$scope"in r&&t(2,l=r.$$scope)},[o,i,l,n]}class lc extends V{constructor(e){super(),Z(this,e,sc,nc,K,{href:0,title:1})}}function oc(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("em"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function ic(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class rc extends V{constructor(e){super(),Z(this,e,ic,oc,K,{})}}function ac(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("del"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function cc(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class uc extends V{constructor(e){super(),Z(this,e,cc,ac,K,{})}}function fc(s){let e,t=s[0].replace(/`/g,"")+"",n;return{c(){e=_("code"),n=z(t)},m(l,o){k(l,e,o),p(e,n)},p(l,[o]){o&1&&t!==(t=l[0].replace(/`/g,"")+"")&&ke(n,t)},i:ee,o:ee,d(l){l&&v(e)}}}function dc(s,e,t){let{raw:n}=e;return s.$$set=l=>{"raw"in l&&t(0,n=l.raw)},[n]}class pc extends V{constructor(e){super(),Z(this,e,dc,fc,K,{raw:0})}}function mc(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("strong"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function hc(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class gc extends V{constructor(e){super(),Z(this,e,hc,mc,K,{})}}function _c(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("table"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function bc(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class $c extends V{constructor(e){super(),Z(this,e,bc,_c,K,{})}}function vc(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("thead"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function wc(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class kc extends V{constructor(e){super(),Z(this,e,wc,vc,K,{})}}function yc(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("tbody"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Tc(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class xc extends V{constructor(e){super(),Z(this,e,Tc,yc,K,{})}}function Ec(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("tr"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Sc(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Cc extends V{constructor(e){super(),Z(this,e,Sc,Ec,K,{})}}function Ac(s){let e,t;const n=s[3].default,l=Ae(n,s,s[2],null);return{c(){e=_("td"),l&&l.c(),g(e,"align",s[1])},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&4)&&Ne(l,n,o,o[2],t?Re(n,o[2],i,null):Me(o[2]),null),(!t||i&2)&&g(e,"align",o[1])},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Rc(s){let e,t;const n=s[3].default,l=Ae(n,s,s[2],null);return{c(){e=_("th"),l&&l.c(),g(e,"align",s[1])},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&4)&&Ne(l,n,o,o[2],t?Re(n,o[2],i,null):Me(o[2]),null),(!t||i&2)&&g(e,"align",o[1])},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Nc(s){let e,t,n,l;const o=[Rc,Ac],i=[];function r(a,c){return a[0]?0:1}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=we()},m(a,c){i[e].m(a,c),k(a,n,c),l=!0},p(a,[c]){let u=e;e=r(a),e===u?i[e].p(a,c):(me(),x(i[u],1,1,()=>{i[u]=null}),he(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){x(t),l=!1},d(a){i[e].d(a),a&&v(n)}}}function Mc(s,e,t){let{$$slots:n={},$$scope:l}=e,{header:o}=e,{align:i}=e;return s.$$set=r=>{"header"in r&&t(0,o=r.header),"align"in r&&t(1,i=r.align),"$$scope"in r&&t(2,l=r.$$scope)},[o,i,l,n]}class Pc extends V{constructor(e){super(),Z(this,e,Mc,Nc,K,{header:0,align:1})}}function Oc(s){let e,t;const n=s[3].default,l=Ae(n,s,s[2],null);return{c(){e=_("ul"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&4)&&Ne(l,n,o,o[2],t?Re(n,o[2],i,null):Me(o[2]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Lc(s){let e,t;const n=s[3].default,l=Ae(n,s,s[2],null);return{c(){e=_("ol"),l&&l.c(),g(e,"start",s[1])},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,i){l&&l.p&&(!t||i&4)&&Ne(l,n,o,o[2],t?Re(n,o[2],i,null):Me(o[2]),null),(!t||i&2)&&g(e,"start",o[1])},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Ic(s){let e,t,n,l;const o=[Lc,Oc],i=[];function r(a,c){return a[0]?0:1}return e=r(s),t=i[e]=o[e](s),{c(){t.c(),n=we()},m(a,c){i[e].m(a,c),k(a,n,c),l=!0},p(a,[c]){let u=e;e=r(a),e===u?i[e].p(a,c):(me(),x(i[u],1,1,()=>{i[u]=null}),he(),t=i[e],t?t.p(a,c):(t=i[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){x(t),l=!1},d(a){i[e].d(a),a&&v(n)}}}function Dc(s,e,t){let{$$slots:n={},$$scope:l}=e,{ordered:o}=e,{start:i}=e;return s.$$set=r=>{"ordered"in r&&t(0,o=r.ordered),"start"in r&&t(1,i=r.start),"$$scope"in r&&t(2,l=r.$$scope)},[o,i,l,n]}class Bc extends V{constructor(e){super(),Z(this,e,Dc,Ic,K,{ordered:0,start:1})}}function zc(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("li"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Fc(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Hc extends V{constructor(e){super(),Z(this,e,Fc,zc,K,{})}}function jc(s){let e;return{c(){e=_("hr")},m(t,n){k(t,e,n)},p:ee,i:ee,o:ee,d(t){t&&v(e)}}}class Uc extends V{constructor(e){super(),Z(this,e,null,jc,K,{})}}function qc(s){let e,t;return{c(){e=new ti(!1),t=we(),e.a=t},m(n,l){e.m(s[0],n,l),k(n,t,l)},p(n,[l]){l&1&&e.p(n[0])},i:ee,o:ee,d(n){n&&v(t),n&&e.d()}}}function Kc(s,e,t){let{text:n}=e;return s.$$set=l=>{"text"in l&&t(0,n=l.text)},[n]}class Wc extends V{constructor(e){super(),Z(this,e,Kc,qc,K,{text:0})}}function Gc(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("blockquote"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(e,null),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function Zc(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Vc extends V{constructor(e){super(),Z(this,e,Zc,Gc,K,{})}}function Xc(s){let e,t,n;return{c(){e=_("pre"),t=_("code"),n=z(s[1]),g(e,"class",s[0])},m(l,o){k(l,e,o),p(e,t),p(t,n)},p(l,[o]){o&2&&ke(n,l[1]),o&1&&g(e,"class",l[0])},i:ee,o:ee,d(l){l&&v(e)}}}function Yc(s,e,t){let{lang:n}=e,{text:l}=e;return s.$$set=o=>{"lang"in o&&t(0,n=o.lang),"text"in o&&t(1,l=o.text)},[n,l]}class Qc extends V{constructor(e){super(),Z(this,e,Yc,Xc,K,{lang:0,text:1})}}function Jc(s){let e,t;const n=s[1].default,l=Ae(n,s,s[0],null);return{c(){e=_("br"),l&&l.c()},m(o,i){k(o,e,i),l&&l.m(o,i),t=!0},p(o,[i]){l&&l.p&&(!t||i&1)&&Ne(l,n,o,o[0],t?Re(n,o[0],i,null):Me(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){x(l,o),t=!1},d(o){o&&v(e),l&&l.d(o)}}}function eu(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class tu extends V{constructor(e){super(),Z(this,e,eu,Jc,K,{})}}const nu={heading:Wa,paragraph:Va,text:Qa,image:tc,link:lc,em:rc,strong:gc,codespan:pc,del:uc,table:$c,tablehead:kc,tablebody:xc,tablerow:Cc,tablecell:Pc,list:Bc,orderedlistitem:null,unorderedlistitem:null,listitem:Hc,hr:Uc,html:Wc,blockquote:Vc,code:Qc,br:tu},su={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function lu(s){let e,t;return e=new Ft({props:{tokens:s[0],renderers:s[1]}}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},p(n,[l]){const o={};l&1&&(o.tokens=n[0]),l&2&&(o.renderers=n[1]),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function ou(s,e,t){let n,l,o,i,{source:r=[]}=e,{renderers:a={}}=e,{options:c={}}=e,{isInline:u=!1}=e;const f=bs();let d,h,m;return $s(hi,{slug:b=>l?l.slug(b):"",getOptions:()=>o}),Bt(()=>{t(7,m=!0)}),s.$$set=b=>{"source"in b&&t(2,r=b.source),"renderers"in b&&t(3,a=b.renderers),"options"in b&&t(4,c=b.options),"isInline"in b&&t(5,u=b.isInline)},s.$$.update=()=>{s.$$.dirty&4&&t(8,n=Array.isArray(r)),s.$$.dirty&4&&(l=r?new xs:void 0),s.$$.dirty&16&&t(9,o=Ue(Ue({},su),c)),s.$$.dirty&869&&(n?t(0,d=r):(t(6,h=new bt(o)),t(0,d=u?h.inlineTokens(r):h.lex(r)),f("parsed",{tokens:d}))),s.$$.dirty&8&&t(1,i=Ue(Ue({},nu),a)),s.$$.dirty&385&&m&&!n&&f("parsed",{tokens:d})},[d,i,r,a,c,u,h,m,n,o]}class Ht extends V{constructor(e){super(),Z(this,e,ou,lu,K,{source:2,renderers:3,options:4,isInline:5})}}function iu(s){let e,t,n;return t=new Ht({props:{source:Vr}}),{c(){e=_("section"),R(t.$$.fragment),g(e,"class","documentation")},m(l,o){k(l,e,o),C(t,e,null),n=!0},p:ee,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){x(t.$$.fragment,l),n=!1},d(l){l&&v(e),A(t)}}}class ru extends V{constructor(e){super(),Z(this,e,null,iu,K,{})}}var En=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Es={exports:{}};function Ss(s){return s instanceof Map?s.clear=s.delete=s.set=function(){throw new Error("map is read-only")}:s instanceof Set&&(s.add=s.clear=s.delete=function(){throw new Error("set is read-only")}),Object.freeze(s),Object.getOwnPropertyNames(s).forEach(function(e){var t=s[e];typeof t=="object"&&!Object.isFrozen(t)&&Ss(t)}),s}Es.exports=Ss;Es.exports.default=Ss;class Sl{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function gi(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function St(s,...e){const t=Object.create(null);for(const n in s)t[n]=s[n];return e.forEach(function(n){for(const l in n)t[l]=n[l]}),t}const au="</span>",Cl=s=>!!s.scope||s.sublanguage&&s.language,cu=(s,{prefix:e})=>{if(s.includes(".")){const t=s.split(".");return[`${e}${t.shift()}`,...t.map((n,l)=>`${n}${"_".repeat(l+1)}`)].join(" ")}return`${e}${s}`};class uu{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=gi(e)}openNode(e){if(!Cl(e))return;let t="";e.sublanguage?t=`language-${e.language}`:t=cu(e.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(e){!Cl(e)||(this.buffer+=au)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Al=(s={})=>{const e={children:[]};return Object.assign(e,s),e};class Cs{constructor(){this.rootNode=Al(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=Al({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(n=>this._walk(e,n)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&(!e.children||(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{Cs._collapse(t)})))}}class fu extends Cs{constructor(e){super(),this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const n=e.root;n.sublanguage=!0,n.language=t,this.add(n)}toHTML(){return new uu(this,this.options).value()}finalize(){return!0}}function dn(s){return s?typeof s=="string"?s:s.source:null}function _i(s){return jt("(?=",s,")")}function du(s){return jt("(?:",s,")*")}function pu(s){return jt("(?:",s,")?")}function jt(...s){return s.map(t=>dn(t)).join("")}function mu(s){const e=s[s.length-1];return typeof e=="object"&&e.constructor===Object?(s.splice(s.length-1,1),e):{}}function As(...s){const e=mu(s);return"("+(e.capture?"":"?:")+s.map(n=>dn(n)).join("|")+")"}function bi(s){return new RegExp(s.toString()+"|").exec("").length-1}function hu(s,e){const t=s&&s.exec(e);return t&&t.index===0}const gu=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Rs(s,{joinWith:e}){let t=0;return s.map(n=>{t+=1;const l=t;let o=dn(n),i="";for(;o.length>0;){const r=gu.exec(o);if(!r){i+=o;break}i+=o.substring(0,r.index),o=o.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?i+="\\"+String(Number(r[1])+l):(i+=r[0],r[0]==="("&&t++)}return i}).map(n=>`(${n})`).join(e)}const _u=/\b\B/,$i="[a-zA-Z]\\w*",Ns="[a-zA-Z_]\\w*",vi="\\b\\d+(\\.\\d+)?",wi="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ki="\\b(0b[01]+)",bu="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",$u=(s={})=>{const e=/^#![ ]*\//;return s.binary&&(s.begin=jt(e,/.*\b/,s.binary,/\b.*/)),St({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,n)=>{t.index!==0&&n.ignoreMatch()}},s)},pn={begin:"\\\\[\\s\\S]",relevance:0},vu={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[pn]},wu={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[pn]},ku={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Zn=function(s,e,t={}){const n=St({scope:"comment",begin:s,end:e,contains:[]},t);n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const l=As("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return n.contains.push({begin:jt(/[ ]+/,"(",l,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},yu=Zn("//","$"),Tu=Zn("/\\*","\\*/"),xu=Zn("#","$"),Eu={scope:"number",begin:vi,relevance:0},Su={scope:"number",begin:wi,relevance:0},Cu={scope:"number",begin:ki,relevance:0},Au={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[pn,{begin:/\[/,end:/\]/,relevance:0,contains:[pn]}]}]},Ru={scope:"title",begin:$i,relevance:0},Nu={scope:"title",begin:Ns,relevance:0},Mu={begin:"\\.\\s*"+Ns,relevance:0},Pu=function(s){return Object.assign(s,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var Sn=Object.freeze({__proto__:null,MATCH_NOTHING_RE:_u,IDENT_RE:$i,UNDERSCORE_IDENT_RE:Ns,NUMBER_RE:vi,C_NUMBER_RE:wi,BINARY_NUMBER_RE:ki,RE_STARTERS_RE:bu,SHEBANG:$u,BACKSLASH_ESCAPE:pn,APOS_STRING_MODE:vu,QUOTE_STRING_MODE:wu,PHRASAL_WORDS_MODE:ku,COMMENT:Zn,C_LINE_COMMENT_MODE:yu,C_BLOCK_COMMENT_MODE:Tu,HASH_COMMENT_MODE:xu,NUMBER_MODE:Eu,C_NUMBER_MODE:Su,BINARY_NUMBER_MODE:Cu,REGEXP_MODE:Au,TITLE_MODE:Ru,UNDERSCORE_TITLE_MODE:Nu,METHOD_GUARD:Mu,END_SAME_AS_BEGIN:Pu});function Ou(s,e){s.input[s.index-1]==="."&&e.ignoreMatch()}function Lu(s,e){s.className!==void 0&&(s.scope=s.className,delete s.className)}function Iu(s,e){!e||!s.beginKeywords||(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=Ou,s.keywords=s.keywords||s.beginKeywords,delete s.beginKeywords,s.relevance===void 0&&(s.relevance=0))}function Du(s,e){!Array.isArray(s.illegal)||(s.illegal=As(...s.illegal))}function Bu(s,e){if(!!s.match){if(s.begin||s.end)throw new Error("begin & end are not supported with match");s.begin=s.match,delete s.match}}function zu(s,e){s.relevance===void 0&&(s.relevance=1)}const Fu=(s,e)=>{if(!s.beforeMatch)return;if(s.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},s);Object.keys(s).forEach(n=>{delete s[n]}),s.keywords=t.keywords,s.begin=jt(t.beforeMatch,_i(t.begin)),s.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},s.relevance=0,delete t.beforeMatch},Hu=["of","and","for","in","not","or","if","then","parent","list","value"],ju="keyword";function yi(s,e,t=ju){const n=Object.create(null);return typeof s=="string"?l(t,s.split(" ")):Array.isArray(s)?l(t,s):Object.keys(s).forEach(function(o){Object.assign(n,yi(s[o],e,o))}),n;function l(o,i){e&&(i=i.map(r=>r.toLowerCase())),i.forEach(function(r){const a=r.split("|");n[a[0]]=[o,Uu(a[0],a[1])]})}}function Uu(s,e){return e?Number(e):qu(s)?0:1}function qu(s){return Hu.includes(s.toLowerCase())}const Rl={},It=s=>{console.error(s)},Nl=(s,...e)=>{console.log(`WARN: ${s}`,...e)},Xt=(s,e)=>{Rl[`${s}/${e}`]||(console.log(`Deprecated as of ${s}. ${e}`),Rl[`${s}/${e}`]=!0)},Hn=new Error;function Ti(s,e,{key:t}){let n=0;const l=s[t],o={},i={};for(let r=1;r<=e.length;r++)i[r+n]=l[r],o[r+n]=!0,n+=bi(e[r-1]);s[t]=i,s[t]._emit=o,s[t]._multi=!0}function Ku(s){if(!!Array.isArray(s.begin)){if(s.skip||s.excludeBegin||s.returnBegin)throw It("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Hn;if(typeof s.beginScope!="object"||s.beginScope===null)throw It("beginScope must be object"),Hn;Ti(s,s.begin,{key:"beginScope"}),s.begin=Rs(s.begin,{joinWith:""})}}function Wu(s){if(!!Array.isArray(s.end)){if(s.skip||s.excludeEnd||s.returnEnd)throw It("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Hn;if(typeof s.endScope!="object"||s.endScope===null)throw It("endScope must be object"),Hn;Ti(s,s.end,{key:"endScope"}),s.end=Rs(s.end,{joinWith:""})}}function Gu(s){s.scope&&typeof s.scope=="object"&&s.scope!==null&&(s.beginScope=s.scope,delete s.scope)}function Zu(s){Gu(s),typeof s.beginScope=="string"&&(s.beginScope={_wrap:s.beginScope}),typeof s.endScope=="string"&&(s.endScope={_wrap:s.endScope}),Ku(s),Wu(s)}function Vu(s){function e(i,r){return new RegExp(dn(i),"m"+(s.case_insensitive?"i":"")+(s.unicodeRegex?"u":"")+(r?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,r]),this.matchAt+=bi(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(a=>a[1]);this.matcherRe=e(Rs(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(r);if(!a)return null;const c=a.findIndex((f,d)=>d>0&&f!==void 0),u=this.matchIndexes[c];return a.splice(0,c),Object.assign(a,u)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const a=new t;return this.rules.slice(r).forEach(([c,u])=>a.addRule(c,u)),a.compile(),this.multiRegexes[r]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,a){this.rules.push([r,a]),a.type==="begin"&&this.count++}exec(r){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let c=a.exec(r);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(r)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function l(i){const r=new n;return i.contains.forEach(a=>r.addRule(a.begin,{rule:a,type:"begin"})),i.terminatorEnd&&r.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&r.addRule(i.illegal,{type:"illegal"}),r}function o(i,r){const a=i;if(i.isCompiled)return a;[Lu,Bu,Zu,Fu].forEach(u=>u(i,r)),s.compilerExtensions.forEach(u=>u(i,r)),i.__beforeBegin=null,[Iu,Du,zu].forEach(u=>u(i,r)),i.isCompiled=!0;let c=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),c=i.keywords.$pattern,delete i.keywords.$pattern),c=c||/\w+/,i.keywords&&(i.keywords=yi(i.keywords,s.case_insensitive)),a.keywordPatternRe=e(c,!0),r&&(i.begin||(i.begin=/\B|\b/),a.beginRe=e(a.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(a.endRe=e(a.end)),a.terminatorEnd=dn(a.end)||"",i.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(a.illegalRe=e(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(u){return Xu(u==="self"?i:u)})),i.contains.forEach(function(u){o(u,a)}),i.starts&&o(i.starts,r),a.matcher=l(a),a}if(s.compilerExtensions||(s.compilerExtensions=[]),s.contains&&s.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return s.classNameAliases=St(s.classNameAliases||{}),o(s)}function xi(s){return s?s.endsWithParent||xi(s.starts):!1}function Xu(s){return s.variants&&!s.cachedVariants&&(s.cachedVariants=s.variants.map(function(e){return St(s,{variants:null},e)})),s.cachedVariants?s.cachedVariants:xi(s)?St(s,{starts:s.starts?St(s.starts):null}):Object.isFrozen(s)?St(s):s}var Yu="11.6.0";class Qu extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const rs=gi,Ml=St,Pl=Symbol("nomatch"),Ju=7,ef=function(s){const e=Object.create(null),t=Object.create(null),n=[];let l=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:fu};function a(B){return r.noHighlightRe.test(B)}function c(B){let U=B.className+" ";U+=B.parentNode?B.parentNode.className:"";const J=r.languageDetectRe.exec(U);if(J){const oe=I(J[1]);return oe||(Nl(o.replace("{}",J[1])),Nl("Falling back to no-highlight mode for this block.",B)),oe?J[1]:"no-highlight"}return U.split(/\s+/).find(oe=>a(oe)||I(oe))}function u(B,U,J){let oe="",ue="";typeof U=="object"?(oe=B,J=U.ignoreIllegals,ue=U.language):(Xt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ue=B,oe=U),J===void 0&&(J=!0);const ce={code:oe,language:ue};se("before:highlight",ce);const Pe=ce.result?ce.result:f(ce.language,ce.code,J);return Pe.code=ce.code,se("after:highlight",Pe),Pe}function f(B,U,J,oe){const ue=Object.create(null);function ce(H,X){return H.keywords[X]}function Pe(){if(!re.keywords){Be.addText(be);return}let H=0;re.keywordPatternRe.lastIndex=0;let X=re.keywordPatternRe.exec(be),le="";for(;X;){le+=be.substring(H,X.index);const j=Ee.case_insensitive?X[0].toLowerCase():X[0],fe=ce(re,j);if(fe){const[De,Ce]=fe;if(Be.addText(le),le="",ue[j]=(ue[j]||0)+1,ue[j]<=Ju&&(Ze+=Ce),De.startsWith("_"))le+=X[0];else{const Je=Ee.classNameAliases[De]||De;Be.addKeyword(X[0],Je)}}else le+=X[0];H=re.keywordPatternRe.lastIndex,X=re.keywordPatternRe.exec(be)}le+=be.substring(H),Be.addText(le)}function Ie(){if(be==="")return;let H=null;if(typeof re.subLanguage=="string"){if(!e[re.subLanguage]){Be.addText(be);return}H=f(re.subLanguage,be,!0,We[re.subLanguage]),We[re.subLanguage]=H._top}else H=h(be,re.subLanguage.length?re.subLanguage:null);re.relevance>0&&(Ze+=H.relevance),Be.addSublanguage(H._emitter,H.language)}function ye(){re.subLanguage!=null?Ie():Pe(),be=""}function $e(H,X){let le=1;const j=X.length-1;for(;le<=j;){if(!H._emit[le]){le++;continue}const fe=Ee.classNameAliases[H[le]]||H[le],De=X[le];fe?Be.addKeyword(De,fe):(be=De,Pe(),be=""),le++}}function ne(H,X){return H.scope&&typeof H.scope=="string"&&Be.openNode(Ee.classNameAliases[H.scope]||H.scope),H.beginScope&&(H.beginScope._wrap?(Be.addKeyword(be,Ee.classNameAliases[H.beginScope._wrap]||H.beginScope._wrap),be=""):H.beginScope._multi&&($e(H.beginScope,X),be="")),re=Object.create(H,{parent:{value:re}}),re}function Te(H,X,le){let j=hu(H.endRe,le);if(j){if(H["on:end"]){const fe=new Sl(H);H["on:end"](X,fe),fe.isMatchIgnored&&(j=!1)}if(j){for(;H.endsParent&&H.parent;)H=H.parent;return H}}if(H.endsWithParent)return Te(H.parent,X,le)}function _e(H){return re.matcher.regexIndex===0?(be+=H[0],1):(st=!0,0)}function ge(H){const X=H[0],le=H.rule,j=new Sl(le),fe=[le.__beforeBegin,le["on:begin"]];for(const De of fe)if(!!De&&(De(H,j),j.isMatchIgnored))return _e(X);return le.skip?be+=X:(le.excludeBegin&&(be+=X),ye(),!le.returnBegin&&!le.excludeBegin&&(be=X)),ne(le,H),le.returnBegin?0:X.length}function te(H){const X=H[0],le=U.substring(H.index),j=Te(re,H,le);if(!j)return Pl;const fe=re;re.endScope&&re.endScope._wrap?(ye(),Be.addKeyword(X,re.endScope._wrap)):re.endScope&&re.endScope._multi?(ye(),$e(re.endScope,H)):fe.skip?be+=X:(fe.returnEnd||fe.excludeEnd||(be+=X),ye(),fe.excludeEnd&&(be=X));do re.scope&&Be.closeNode(),!re.skip&&!re.subLanguage&&(Ze+=re.relevance),re=re.parent;while(re!==j.parent);return j.starts&&ne(j.starts,H),fe.returnEnd?0:X.length}function xe(){const H=[];for(let X=re;X!==Ee;X=X.parent)X.scope&&H.unshift(X.scope);H.forEach(X=>Be.openNode(X))}let Se={};function ve(H,X){const le=X&&X[0];if(be+=H,le==null)return ye(),0;if(Se.type==="begin"&&X.type==="end"&&Se.index===X.index&&le===""){if(be+=U.slice(X.index,X.index+1),!l){const j=new Error(`0 width match regex (${B})`);throw j.languageName=B,j.badRule=Se.rule,j}return 1}if(Se=X,X.type==="begin")return ge(X);if(X.type==="illegal"&&!J){const j=new Error('Illegal lexeme "'+le+'" for mode "'+(re.scope||"<unnamed>")+'"');throw j.mode=re,j}else if(X.type==="end"){const j=te(X);if(j!==Pl)return j}if(X.type==="illegal"&&le==="")return 1;if(ft>1e5&&ft>X.index*3)throw new Error("potential infinite loop, way more iterations than matches");return be+=le,le.length}const Ee=I(B);if(!Ee)throw It(o.replace("{}",B)),new Error('Unknown language: "'+B+'"');const ct=Vu(Ee);let ut="",re=oe||ct;const We={},Be=new r.__emitter(r);xe();let be="",Ze=0,Qe=0,ft=0,st=!1;try{for(re.matcher.considerAll();;){ft++,st?st=!1:re.matcher.considerAll(),re.matcher.lastIndex=Qe;const H=re.matcher.exec(U);if(!H)break;const X=U.substring(Qe,H.index),le=ve(X,H);Qe=H.index+le}return ve(U.substring(Qe)),Be.closeAllNodes(),Be.finalize(),ut=Be.toHTML(),{language:B,value:ut,relevance:Ze,illegal:!1,_emitter:Be,_top:re}}catch(H){if(H.message&&H.message.includes("Illegal"))return{language:B,value:rs(U),illegal:!0,relevance:0,_illegalBy:{message:H.message,index:Qe,context:U.slice(Qe-100,Qe+100),mode:H.mode,resultSoFar:ut},_emitter:Be};if(l)return{language:B,value:rs(U),illegal:!1,relevance:0,errorRaised:H,_emitter:Be,_top:re};throw H}}function d(B){const U={value:rs(B),illegal:!1,relevance:0,_top:i,_emitter:new r.__emitter(r)};return U._emitter.addText(B),U}function h(B,U){U=U||r.languages||Object.keys(e);const J=d(B),oe=U.filter(I).filter(F).map(ye=>f(ye,B,!1));oe.unshift(J);const ue=oe.sort((ye,$e)=>{if(ye.relevance!==$e.relevance)return $e.relevance-ye.relevance;if(ye.language&&$e.language){if(I(ye.language).supersetOf===$e.language)return 1;if(I($e.language).supersetOf===ye.language)return-1}return 0}),[ce,Pe]=ue,Ie=ce;return Ie.secondBest=Pe,Ie}function m(B,U,J){const oe=U&&t[U]||J;B.classList.add("hljs"),B.classList.add(`language-${oe}`)}function b(B){let U=null;const J=c(B);if(a(J))return;if(se("before:highlightElement",{el:B,language:J}),B.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),r.throwUnescapedHTML))throw new Qu("One of your code blocks includes unescaped HTML.",B.innerHTML);U=B;const oe=U.textContent,ue=J?u(oe,{language:J,ignoreIllegals:!0}):h(oe);B.innerHTML=ue.value,m(B,J,ue.language),B.result={language:ue.language,re:ue.relevance,relevance:ue.relevance},ue.secondBest&&(B.secondBest={language:ue.secondBest.language,relevance:ue.secondBest.relevance}),se("after:highlightElement",{el:B,result:ue,text:oe})}function $(B){r=Ml(r,B)}const y=()=>{S(),Xt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function E(){S(),Xt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let M=!1;function S(){if(document.readyState==="loading"){M=!0;return}document.querySelectorAll(r.cssSelector).forEach(b)}function N(){M&&S()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",N,!1);function P(B,U){let J=null;try{J=U(s)}catch(oe){if(It("Language definition for '{}' could not be registered.".replace("{}",B)),l)It(oe);else throw oe;J=i}J.name||(J.name=B),e[B]=J,J.rawDefinition=U.bind(null,s),J.aliases&&D(J.aliases,{languageName:B})}function O(B){delete e[B];for(const U of Object.keys(t))t[U]===B&&delete t[U]}function L(){return Object.keys(e)}function I(B){return B=(B||"").toLowerCase(),e[B]||e[t[B]]}function D(B,{languageName:U}){typeof B=="string"&&(B=[B]),B.forEach(J=>{t[J.toLowerCase()]=U})}function F(B){const U=I(B);return U&&!U.disableAutodetect}function q(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=U=>{B["before:highlightBlock"](Object.assign({block:U.el},U))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=U=>{B["after:highlightBlock"](Object.assign({block:U.el},U))})}function W(B){q(B),n.push(B)}function se(B,U){const J=B;n.forEach(function(oe){oe[J]&&oe[J](U)})}function Q(B){return Xt("10.7.0","highlightBlock will be removed entirely in v12.0"),Xt("10.7.0","Please use highlightElement now."),b(B)}Object.assign(s,{highlight:u,highlightAuto:h,highlightAll:S,highlightElement:b,highlightBlock:Q,configure:$,initHighlighting:y,initHighlightingOnLoad:E,registerLanguage:P,unregisterLanguage:O,listLanguages:L,getLanguage:I,registerAliases:D,autoDetection:F,inherit:Ml,addPlugin:W}),s.debugMode=function(){l=!1},s.safeMode=function(){l=!0},s.versionString=Yu,s.regex={concat:jt,lookahead:_i,either:As,optional:pu,anyNumberOfTimes:du};for(const B in Sn)typeof Sn[B]=="object"&&Es.exports(Sn[B]);return Object.assign(s,Sn),s};var mn=ef({}),tf=mn;mn.HighlightJS=mn;mn.default=mn;const Cn=tf;function nf(s){const e=s.regex,t=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),n=/[\p{L}0-9._:-]+/u,l={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=s.inherit(o,{begin:/\(/,end:/\)/}),r=s.inherit(s.APOS_STRING_MODE,{className:"string"}),a=s.inherit(s.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:n,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[l]},{begin:/'/,end:/'/,contains:[l]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,a,r,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,i,a,r]}]}]},s.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},l,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Ol="[A-Za-z$_][0-9A-Za-z$_]*",sf=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],lf=["true","false","null","undefined","NaN","Infinity"],Ei=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Si=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ci=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],of=["arguments","this","super","console","window","document","localStorage","module","global"],rf=[].concat(Ci,Ei,Si);function af(s){const e=s.regex,t=(U,{after:J})=>{const oe="</"+U[0].slice(1);return U.input.indexOf(oe,J)!==-1},n=Ol,l={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(U,J)=>{const oe=U[0].length+U.index,ue=U.input[oe];if(ue==="<"||ue===","){J.ignoreMatch();return}ue===">"&&(t(U,{after:oe})||J.ignoreMatch());let ce;if((ce=U.input.substring(oe).match(/^\s+extends\s+/))&&ce.index===0){J.ignoreMatch();return}}},r={$pattern:Ol,keyword:sf,literal:lf,built_in:rf,"variable.language":of},a="[0-9](_?[0-9])*",c=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},h={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},m={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"css"}},b={className:"string",begin:"`",end:"`",contains:[s.BACKSLASH_ESCAPE,d]},$=s.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),y={className:"comment",variants:[$,s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE]},E=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,h,m,b,f];d.contains=E.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(E)});const M=[].concat(y,d.contains),S=M.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(M)}]),N={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:S},P={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,e.concat(n,"(",e.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},O={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ei,...Si]}},L={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},I={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},D={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function F(U){return e.concat("(?!",U.join("|"),")")}const q={match:e.concat(/\b/,F([...Ci,"super"]),n,e.lookahead(/\(/)),className:"title.function",relevance:0},W={begin:e.concat(/\./,e.lookahead(e.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},se={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},Q="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+s.UNDERSCORE_IDENT_RE+")\\s*=>",B={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Q)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:S,CLASS_REFERENCE:O},illegal:/#(?![$_A-z])/,contains:[s.SHEBANG({label:"shebang",binary:"node",relevance:5}),L,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,h,m,b,y,f,O,{className:"attr",begin:n+e.lookahead(":"),relevance:0},B,{begin:"("+s.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[y,s.REGEXP_MODE,{className:"function",begin:Q,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:S}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:l.begin,end:l.end},{match:o},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},I,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+s.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,s.inherit(s.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},W,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},q,D,P,se,{match:/\$[(.]/}]}}const cf=s=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:s.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:s.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),uf=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],ff=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],df=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],pf=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],mf=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function hf(s){const e=s.regex,t=cf(s),n={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},l="and or not only",o=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",r=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,n,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+df.join("|")+")"},{begin:":(:)?("+pf.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+mf.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...r,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...r,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:e.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:o},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:l,attribute:ff.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...r,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+uf.join("|")+")\\b"}]}}const gf=s=>({highlighted:s&2}),Ll=s=>({highlighted:s[1]});function _f(s){let e,t,n=[{"data-language":"svelte"},s[2]],l={};for(let o=0;o<n.length;o+=1)l=rt(l,n[o]);return{c(){e=_("pre"),t=_("code"),g(t,"class","hljs"),Ys(e,l),Fe(e,"langtag",s[0]),Fe(e,"svelte-4cqgwq",!0)},m(o,i){k(o,e,i),p(e,t),t.innerHTML=s[1]},p(o,i){i&2&&(t.innerHTML=o[1]),Ys(e,l=zt(n,[{"data-language":"svelte"},i&4&&o[2]])),Fe(e,"langtag",o[0]),Fe(e,"svelte-4cqgwq",!0)},d(o){o&&v(e)}}}function bf(s){let e;const t=s[5].default,n=Ae(t,s,s[4],Ll),l=n||_f(s);return{c(){l&&l.c()},m(o,i){l&&l.m(o,i),e=!0},p(o,[i]){n?n.p&&(!e||i&18)&&Ne(n,t,o,o[4],e?Re(t,o[4],i,gf):Me(o[4]),Ll):l&&l.p&&(!e||i&7)&&l.p(o,e?i:-1)},i(o){e||(w(l,o),e=!0)},o(o){x(l,o),e=!1},d(o){l&&l.d(o)}}}function $f(s,e,t){let n;const l=["code","langtag"];let o=Pn(e,l),{$$slots:i={},$$scope:r}=e,{code:a=void 0}=e,{langtag:c=!1}=e;const u=bs();return Cn.registerLanguage("xml",nf),Cn.registerLanguage("javascript",af),Cn.registerLanguage("css",hf),ur(()=>{n&&u("highlight",{highlighted:n})}),s.$$set=f=>{e=rt(rt({},e),Xo(f)),t(2,o=Pn(e,l)),"code"in f&&t(3,a=f.code),"langtag"in f&&t(0,c=f.langtag),"$$scope"in f&&t(4,r=f.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(1,n=Cn.highlightAuto(a).value)},[c,n,o,a,r,i]}class Ye extends V{constructor(e){super(),Z(this,e,$f,bf,K,{code:3,langtag:0})}}function vf(s){let e;return{c(){e=z("First")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function wf(s){let e;return{c(){e=z("Second")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function kf(s){let e;return{c(){e=z("Third")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Il(s){let e,t;return e=new pe({props:{$$slots:{default:[yf]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},p(n,l){const o={};l&2050&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function yf(s){let e,t,n,l;return{c(){e=z("Fourth "),t=_("span"),t.textContent="\xD7"},m(o,i){k(o,e,i),k(o,t,i),n||(l=G(t,"click",s[4]),n=!0)},p:ee,d(o){o&&v(e),o&&v(t),n=!1,l()}}}function Dl(s){let e,t;return e=new pe({props:{$$slots:{default:[Tf]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},p(n,l){const o={};l&2052&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Tf(s){let e,t,n,l;return{c(){e=z("Fifth "),t=_("span"),t.textContent="\xD7"},m(o,i){k(o,e,i),k(o,t,i),n||(l=G(t,"click",s[5]),n=!0)},p:ee,d(o){o&&v(e),o&&v(t),n=!1,l()}}}function xf(s){let e,t,n,l,o,i,r,a,c;e=new pe({props:{$$slots:{default:[vf]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[wf]},$$scope:{ctx:s}}}),o=new pe({props:{disabled:s[0],$$slots:{default:[kf]},$$scope:{ctx:s}}});let u=s[1]&&Il(s),f=s[2]&&Dl(s);return{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),u&&u.c(),r=T(),f&&f.c(),a=we()},m(d,h){C(e,d,h),k(d,t,h),C(n,d,h),k(d,l,h),C(o,d,h),k(d,i,h),u&&u.m(d,h),k(d,r,h),f&&f.m(d,h),k(d,a,h),c=!0},p(d,h){const m={};h&2048&&(m.$$scope={dirty:h,ctx:d}),e.$set(m);const b={};h&2048&&(b.$$scope={dirty:h,ctx:d}),n.$set(b);const $={};h&1&&($.disabled=d[0]),h&2048&&($.$$scope={dirty:h,ctx:d}),o.$set($),d[1]?u?(u.p(d,h),h&2&&w(u,1)):(u=Il(d),u.c(),w(u,1),u.m(r.parentNode,r)):u&&(me(),x(u,1,1,()=>{u=null}),he()),d[2]?f?(f.p(d,h),h&4&&w(f,1)):(f=Dl(d),f.c(),w(f,1),f.m(a.parentNode,a)):f&&(me(),x(f,1,1,()=>{f=null}),he())},i(d){c||(w(e.$$.fragment,d),w(n.$$.fragment,d),w(o.$$.fragment,d),w(u),w(f),c=!0)},o(d){x(e.$$.fragment,d),x(n.$$.fragment,d),x(o.$$.fragment,d),x(u),x(f),c=!1},d(d){A(e,d),d&&v(t),A(n,d),d&&v(l),A(o,d),d&&v(i),u&&u.d(d),d&&v(r),f&&f.d(d),d&&v(a)}}}function Ef(s){let e;return{c(){e=_("div"),e.textContent="These are the first diamonds I ever took from my first mine."},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function Sf(s){let e;return{c(){e=_("div"),e.textContent="The second stage supplements the first stage by adding the second rail tunnel."},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function Cf(s){let e;return{c(){e=_("div"),e.textContent="Let's not worry about third or fourth place."},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function Bl(s){let e,t;return e=new de({props:{$$slots:{default:[Af]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Af(s){let e;return{c(){e=_("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function zl(s){let e,t;return e=new de({props:{$$slots:{default:[Rf]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Rf(s){let e;return{c(){e=_("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function Nf(s){let e,t,n,l,o,i,r,a,c,u,f;e=new it({props:{$$slots:{default:[xf]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[Ef]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[Sf]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[Cf]},$$scope:{ctx:s}}});let d=s[1]&&Bl(s),h=s[2]&&zl(s);return{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment),a=T(),d&&d.c(),c=T(),h&&h.c(),u=we()},m(m,b){C(e,m,b),k(m,t,b),C(n,m,b),k(m,l,b),C(o,m,b),k(m,i,b),C(r,m,b),k(m,a,b),d&&d.m(m,b),k(m,c,b),h&&h.m(m,b),k(m,u,b),f=!0},p(m,b){const $={};b&2055&&($.$$scope={dirty:b,ctx:m}),e.$set($);const y={};b&2048&&(y.$$scope={dirty:b,ctx:m}),n.$set(y);const E={};b&2048&&(E.$$scope={dirty:b,ctx:m}),o.$set(E);const M={};b&2048&&(M.$$scope={dirty:b,ctx:m}),r.$set(M),m[1]?d?b&2&&w(d,1):(d=Bl(m),d.c(),w(d,1),d.m(c.parentNode,c)):d&&(me(),x(d,1,1,()=>{d=null}),he()),m[2]?h?b&4&&w(h,1):(h=zl(m),h.c(),w(h,1),h.m(u.parentNode,u)):h&&(me(),x(h,1,1,()=>{h=null}),he())},i(m){f||(w(e.$$.fragment,m),w(n.$$.fragment,m),w(o.$$.fragment,m),w(r.$$.fragment,m),w(d),w(h),f=!0)},o(m){x(e.$$.fragment,m),x(n.$$.fragment,m),x(o.$$.fragment,m),x(r.$$.fragment,m),x(d),x(h),f=!1},d(m){A(e,m),m&&v(t),A(n,m),m&&v(l),A(o,m),m&&v(i),A(r,m),m&&v(a),d&&d.d(m),m&&v(c),h&&h.d(m),m&&v(u)}}}function Mf(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P,O,L,I,D,F,q,W={class:"mb-4",$$slots:{default:[Nf]},$$scope:{ctx:s}};return t=new ot({props:W}),s[6](t),I=new Ye({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),R(t.$$.fragment),n=T(),l=_("div"),l.textContent="Use these controls to operate tabs.",o=T(),i=_("div"),r=_("label"),a=_("input"),c=z(" Fourth"),u=T(),f=_("label"),d=_("input"),h=z(" Fifth"),m=T(),b=_("label"),$=_("input"),y=z(" Disable Third"),E=T(),M=_("label"),S=z("Select\u2003"),N=_("input"),P=T(),O=_("h3"),O.textContent="Code",L=T(),R(I.$$.fragment),g(l,"class","py-2 border-t text-center text-gray-500"),g(a,"type","checkbox"),g(d,"type","checkbox"),g($,"type","checkbox"),g(N,"class","input max-w-[6ch]"),g(N,"type","number"),g(N,"min","-5"),g(N,"max","4"),g(i,"class","flex items-center place-content-center gap-4"),g(e,"class","prose max-w-none my-4 svelte-1b9uk6h")},m(se,Q){k(se,e,Q),C(t,e,null),p(e,n),p(e,l),p(e,o),p(e,i),p(i,r),p(r,a),a.checked=s[1],p(r,c),p(i,u),p(i,f),p(f,d),d.checked=s[2],p(f,h),p(i,m),p(i,b),p(b,$),$.checked=s[0],p(b,y),p(i,E),p(i,M),p(M,S),p(M,N),p(e,P),p(e,O),p(e,L),C(I,e,null),D=!0,F||(q=[G(a,"change",s[7]),G(d,"change",s[8]),G($,"change",s[9]),G(N,"change",lr(s[10]))],F=!0)},p(se,[Q]){const B={};Q&2055&&(B.$$scope={dirty:Q,ctx:se}),t.$set(B),Q&2&&(a.checked=se[1]),Q&4&&(d.checked=se[2]),Q&1&&($.checked=se[0])},i(se){D||(w(t.$$.fragment,se),w(I.$$.fragment,se),D=!0)},o(se){x(t.$$.fragment,se),x(I.$$.fragment,se),D=!1},d(se){se&&v(e),s[6](null),A(t),A(I),F=!1,Oe(q)}}}function Pf(s,e,t){let n=!1,l=!1,o=!1,i;const r=()=>t(1,l=!1),a=()=>t(2,o=!1);function c(m){ze[m?"unshift":"push"](()=>{i=m,t(3,i)})}function u(){l=this.checked,t(1,l)}function f(){o=this.checked,t(2,o)}function d(){n=this.checked,t(0,n)}return[n,l,o,i,r,a,c,u,f,d,m=>i.selectTab(+m.currentTarget.value)]}class Of extends V{constructor(e){super(),Z(this,e,Pf,Mf,K,{})}}function Lf(s){let e;return{c(){e=z("First-A")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function If(s){let e;return{c(){e=z("First-B")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Df(s){let e;return{c(){e=z("First-C")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Bf(s){let e;return{c(){e=z("First-D")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function zf(s){let e;return{c(){e=z("First-E")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Ff(s){let e,t,n,l,o,i,r,a,c,u;return e=new pe({props:{$$slots:{default:[Lf]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[If]},$$scope:{ctx:s}}}),o=new pe({props:{disabled:!0,$$slots:{default:[Df]},$$scope:{ctx:s}}}),r=new pe({props:{$$slots:{default:[Bf]},$$scope:{ctx:s}}}),c=new pe({props:{$$slots:{default:[zf]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment),a=T(),R(c.$$.fragment)},m(f,d){C(e,f,d),k(f,t,d),C(n,f,d),k(f,l,d),C(o,f,d),k(f,i,d),C(r,f,d),k(f,a,d),C(c,f,d),u=!0},p(f,d){const h={};d&2&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const m={};d&2&&(m.$$scope={dirty:d,ctx:f}),n.$set(m);const b={};d&2&&(b.$$scope={dirty:d,ctx:f}),o.$set(b);const $={};d&2&&($.$$scope={dirty:d,ctx:f}),r.$set($);const y={};d&2&&(y.$$scope={dirty:d,ctx:f}),c.$set(y)},i(f){u||(w(e.$$.fragment,f),w(n.$$.fragment,f),w(o.$$.fragment,f),w(r.$$.fragment,f),w(c.$$.fragment,f),u=!0)},o(f){x(e.$$.fragment,f),x(n.$$.fragment,f),x(o.$$.fragment,f),x(r.$$.fragment,f),x(c.$$.fragment,f),u=!1},d(f){A(e,f),f&&v(t),A(n,f),f&&v(l),A(o,f),f&&v(i),A(r,f),f&&v(a),A(c,f)}}}function Hf(s){let e;return{c(){e=z("Second-A")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function jf(s){let e;return{c(){e=z("Second-B")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Uf(s){let e;return{c(){e=z("Second-C")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function qf(s){let e,t,n,l,o,i;return e=new pe({props:{$$slots:{default:[Hf]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[jf]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[Uf]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment)},m(r,a){C(e,r,a),k(r,t,a),C(n,r,a),k(r,l,a),C(o,r,a),i=!0},p(r,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(w(e.$$.fragment,r),w(n.$$.fragment,r),w(o.$$.fragment,r),i=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),x(o.$$.fragment,r),i=!1},d(r){A(e,r),r&&v(t),A(n,r),r&&v(l),A(o,r)}}}function Kf(s){let e;return{c(){e=z("Fourth-A")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Wf(s){let e;return{c(){e=z("Fourth-B")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Gf(s){let e,t,n,l;return e=new pe({props:{$$slots:{default:[Kf]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[Wf]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment)},m(o,i){C(e,o,i),k(o,t,i),C(n,o,i),l=!0},p(o,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:o}),e.$set(r);const a={};i&2&&(a.$$scope={dirty:i,ctx:o}),n.$set(a)},i(o){l||(w(e.$$.fragment,o),w(n.$$.fragment,o),l=!0)},o(o){x(e.$$.fragment,o),x(n.$$.fragment,o),l=!1},d(o){A(e,o),o&&v(t),A(n,o)}}}function Zf(s){let e,t=s[0]+"",n;return{c(){e=z("Fourth of Second-B. Tab: A, index "),n=z(t)},m(l,o){k(l,e,o),k(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&ke(n,t)},d(l){l&&v(e),l&&v(n)}}}function Vf(s){let e,t=s[0]+"",n;return{c(){e=z("Fourth of Second-B. Tab: B, index "),n=z(t)},m(l,o){k(l,e,o),k(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&ke(n,t)},d(l){l&&v(e),l&&v(n)}}}function Xf(s){let e,t,n,l,o,i;return e=new it({props:{$$slots:{default:[Gf]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[Zf,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[Vf,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment)},m(r,a){C(e,r,a),k(r,t,a),C(n,r,a),k(r,l,a),C(o,r,a),i=!0},p(r,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(w(e.$$.fragment,r),w(n.$$.fragment,r),w(o.$$.fragment,r),i=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),x(o.$$.fragment,r),i=!1},d(r){A(e,r),r&&v(t),A(n,r),r&&v(l),A(o,r)}}}function Yf(s){let e,t,n=s[0]+"",l,o,i,r;return i=new ot({props:{class:"level-4",$$slots:{default:[Xf]},$$scope:{ctx:s}}}),{c(){e=_("div"),t=z("Second of First-A. Tab: A, index "),l=z(n),o=T(),R(i.$$.fragment)},m(a,c){k(a,e,c),p(e,t),p(e,l),k(a,o,c),C(i,a,c),r=!0},p(a,c){(!r||c&1)&&n!==(n=a[0]+"")&&ke(l,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),i.$set(u)},i(a){r||(w(i.$$.fragment,a),r=!0)},o(a){x(i.$$.fragment,a),r=!1},d(a){a&&v(e),a&&v(o),A(i,a)}}}function Qf(s){let e,t=s[0]+"",n;return{c(){e=z("Second of First-A. Tab: B, index "),n=z(t)},m(l,o){k(l,e,o),k(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&ke(n,t)},d(l){l&&v(e),l&&v(n)}}}function Jf(s){let e,t=s[0]+"",n;return{c(){e=z("Second of First-A. Tab: C, index "),n=z(t)},m(l,o){k(l,e,o),k(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&ke(n,t)},d(l){l&&v(e),l&&v(n)}}}function ed(s){let e,t,n,l,o,i,r,a;return e=new it({props:{$$slots:{default:[qf]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[Yf,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[Qf,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[Jf,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,l,u),C(o,c,u),k(c,i,u),C(r,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&3&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const h={};u&3&&(h.$$scope={dirty:u,ctx:c}),o.$set(h);const m={};u&3&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(w(e.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(r.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(o.$$.fragment,c),x(r.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(l),A(o,c),c&&v(i),A(r,c)}}}function td(s){let e,t,n=s[0]+"",l,o,i,r;return i=new ot({props:{class:"level-2",$$slots:{default:[ed]},$$scope:{ctx:s}}}),{c(){e=_("div"),t=z("First level. Tab: A, index "),l=z(n),o=T(),R(i.$$.fragment)},m(a,c){k(a,e,c),p(e,t),p(e,l),k(a,o,c),C(i,a,c),r=!0},p(a,c){(!r||c&1)&&n!==(n=a[0]+"")&&ke(l,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),i.$set(u)},i(a){r||(w(i.$$.fragment,a),r=!0)},o(a){x(i.$$.fragment,a),r=!1},d(a){a&&v(e),a&&v(o),A(i,a)}}}function nd(s){let e;return{c(){e=z("Third-A")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function sd(s){let e;return{c(){e=z("Third-B")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function ld(s){let e,t,n,l;return e=new pe({props:{$$slots:{default:[nd]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[sd]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment)},m(o,i){C(e,o,i),k(o,t,i),C(n,o,i),l=!0},p(o,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:o}),e.$set(r);const a={};i&2&&(a.$$scope={dirty:i,ctx:o}),n.$set(a)},i(o){l||(w(e.$$.fragment,o),w(n.$$.fragment,o),l=!0)},o(o){x(e.$$.fragment,o),x(n.$$.fragment,o),l=!1},d(o){A(e,o),o&&v(t),A(n,o)}}}function od(s){let e,t=s[0]+"",n;return{c(){e=z("Third of First-B. Tab: A, index "),n=z(t)},m(l,o){k(l,e,o),k(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&ke(n,t)},d(l){l&&v(e),l&&v(n)}}}function id(s){let e,t=s[0]+"",n;return{c(){e=z("Third of First-B. Tab: B, index "),n=z(t)},m(l,o){k(l,e,o),k(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&ke(n,t)},d(l){l&&v(e),l&&v(n)}}}function rd(s){let e,t,n,l,o,i;return e=new it({props:{$$slots:{default:[ld]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[od,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[id,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment)},m(r,a){C(e,r,a),k(r,t,a),C(n,r,a),k(r,l,a),C(o,r,a),i=!0},p(r,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(w(e.$$.fragment,r),w(n.$$.fragment,r),w(o.$$.fragment,r),i=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),x(o.$$.fragment,r),i=!1},d(r){A(e,r),r&&v(t),A(n,r),r&&v(l),A(o,r)}}}function ad(s){let e,t,n=s[0]+"",l,o,i,r;return i=new ot({props:{class:"level-3",$$slots:{default:[rd]},$$scope:{ctx:s}}}),{c(){e=_("div"),t=z("First level. Tab: B, index "),l=z(n),o=T(),R(i.$$.fragment)},m(a,c){k(a,e,c),p(e,t),p(e,l),k(a,o,c),C(i,a,c),r=!0},p(a,c){(!r||c&1)&&n!==(n=a[0]+"")&&ke(l,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),i.$set(u)},i(a){r||(w(i.$$.fragment,a),r=!0)},o(a){x(i.$$.fragment,a),r=!1},d(a){a&&v(e),a&&v(o),A(i,a)}}}function cd(s){let e,t=s[0]+"",n;return{c(){e=z("First level. Tab: C, index "),n=z(t)},m(l,o){k(l,e,o),k(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&ke(n,t)},d(l){l&&v(e),l&&v(n)}}}function ud(s){let e,t=s[0]+"",n;return{c(){e=z("First level. Tab: D, index "),n=z(t)},m(l,o){k(l,e,o),k(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&ke(n,t)},d(l){l&&v(e),l&&v(n)}}}function fd(s){let e,t=s[0]+"",n;return{c(){e=z("First level. Tab: E, index "),n=z(t)},m(l,o){k(l,e,o),k(l,n,o)},p(l,o){o&1&&t!==(t=l[0]+"")&&ke(n,t)},d(l){l&&v(e),l&&v(n)}}}function dd(s){let e,t,n,l,o,i,r,a,c,u,f,d;return e=new it({props:{$$slots:{default:[Ff]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[td,({index:h})=>({0:h}),({index:h})=>h?1:0]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[ad,({index:h})=>({0:h}),({index:h})=>h?1:0]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[cd,({index:h})=>({0:h}),({index:h})=>h?1:0]},$$scope:{ctx:s}}}),c=new de({props:{$$slots:{default:[ud,({index:h})=>({0:h}),({index:h})=>h?1:0]},$$scope:{ctx:s}}}),f=new de({props:{$$slots:{default:[fd,({index:h})=>({0:h}),({index:h})=>h?1:0]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment),a=T(),R(c.$$.fragment),u=T(),R(f.$$.fragment)},m(h,m){C(e,h,m),k(h,t,m),C(n,h,m),k(h,l,m),C(o,h,m),k(h,i,m),C(r,h,m),k(h,a,m),C(c,h,m),k(h,u,m),C(f,h,m),d=!0},p(h,m){const b={};m&2&&(b.$$scope={dirty:m,ctx:h}),e.$set(b);const $={};m&3&&($.$$scope={dirty:m,ctx:h}),n.$set($);const y={};m&3&&(y.$$scope={dirty:m,ctx:h}),o.$set(y);const E={};m&3&&(E.$$scope={dirty:m,ctx:h}),r.$set(E);const M={};m&3&&(M.$$scope={dirty:m,ctx:h}),c.$set(M);const S={};m&3&&(S.$$scope={dirty:m,ctx:h}),f.$set(S)},i(h){d||(w(e.$$.fragment,h),w(n.$$.fragment,h),w(o.$$.fragment,h),w(r.$$.fragment,h),w(c.$$.fragment,h),w(f.$$.fragment,h),d=!0)},o(h){x(e.$$.fragment,h),x(n.$$.fragment,h),x(o.$$.fragment,h),x(r.$$.fragment,h),x(c.$$.fragment,h),x(f.$$.fragment,h),d=!1},d(h){A(e,h),h&&v(t),A(n,h),h&&v(l),A(o,h),h&&v(i),A(r,h),h&&v(a),A(c,h),h&&v(u),A(f,h)}}}function pd(s){let e,t,n,l,o,i,r;return t=new ot({props:{class:"level-1 min-h-[280px]",$$slots:{default:[dd]},$$scope:{ctx:s}}}),i=new Ye({props:{code:`<section class="prose max-w-none my-4">
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
</style>`}}),{c(){e=_("section"),R(t.$$.fragment),n=T(),l=_("h3"),l.textContent="Code",o=T(),R(i.$$.fragment),g(e,"class","prose max-w-none my-4 svelte-3sljvb")},m(a,c){k(a,e,c),C(t,e,null),p(e,n),p(e,l),p(e,o),C(i,e,null),r=!0},p(a,[c]){const u={};c&2&&(u.$$scope={dirty:c,ctx:a}),t.$set(u)},i(a){r||(w(t.$$.fragment,a),w(i.$$.fragment,a),r=!0)},o(a){x(t.$$.fragment,a),x(i.$$.fragment,a),r=!1},d(a){a&&v(e),A(t),A(i)}}}class md extends V{constructor(e){super(),Z(this,e,null,pd,K,{})}}function Fl(s,e,t){const n=s.slice();return n[13]=e[t],n}function Hl(s,e,t){const n=s.slice();return n[17]=e[t],n}function jl(s,e,t){const n=s.slice();return n[21]=e[t],n[23]=t,n}function Ul(s,e,t){const n=s.slice();return n[21]=e[t],n}function hd(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:$d,then:bd,catch:_d,value:24,error:20};return In(t=s[1],n),{c(){e=we(),n.block.c()},m(l,o){k(l,e,o),n.block.m(l,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e},p(l,o){s=l,n.ctx=s,o&2&&t!==(t=s[1])&&In(t,n)||oi(n,s,o)},d(l){l&&v(e),n.block.d(l),n.token=null,n=null}}}function gd(s){let e,t,n;return{c(){e=_("button"),e.textContent="Request authors",g(e,"class","input")},m(l,o){k(l,e,o),t||(n=G(e,"click",s[8]),t=!0)},p:ee,d(l){l&&v(e),t=!1,n()}}}function _d(s){let e,t,n,l=(s[20]instanceof Error?s[20].message:s[20])+"",o;return{c(){e=_("div"),t=z("Loading authors error: "),n=_("strong"),o=z(l),g(n,"class","text-red-600"),g(e,"class","text-red-400")},m(i,r){k(i,e,r),p(e,t),p(e,n),p(n,o)},p(i,r){r&2&&l!==(l=(i[20]instanceof Error?i[20].message:i[20])+"")&&ke(o,l)},d(i){i&&v(e)}}}function bd(s){let e,t,n,l,o,i,r,a,c,u,f=s[24],d=[];for(let h=0;h<f.length;h+=1)d[h]=ql(Ul(s,f,h));return{c(){e=_("div"),t=_("select"),n=_("option"),l=z("Select author");for(let h=0;h<d.length;h+=1)d[h].c();o=T(),i=_("button"),r=z("Get quotes"),n.__value=void 0,n.value=n.__value,n.hidden=!0,g(t,"class","input"),s[2]===void 0&&lt(()=>s[9].call(t)),g(i,"class","input"),i.disabled=a=s[2]==null},m(h,m){k(h,e,m),p(e,t),p(t,n),p(n,l);for(let b=0;b<d.length;b+=1)d[b].m(t,null);gt(t,s[2]),p(e,o),p(e,i),p(i,r),c||(u=[G(t,"change",s[9]),G(i,"click",s[10])],c=!0)},p(h,m){if(m&10){f=h[24];let b;for(b=0;b<f.length;b+=1){const $=Ul(h,f,b);d[b]?d[b].p($,m):(d[b]=ql($),d[b].c(),d[b].m(t,null))}for(;b<d.length;b+=1)d[b].d(1);d.length=f.length}m&6&&gt(t,h[2]),m&6&&a!==(a=h[2]==null)&&(i.disabled=a)},d(h){h&&v(e),He(d,h),c=!1,Oe(u)}}}function ql(s){let e,t=s[21].name+"",n,l,o=s[21].quoteCount+"",i,r,a;return{c(){e=_("option"),n=z(t),l=z(": "),i=z(o),e.__value=r=s[21],e.value=e.__value,e.disabled=a=s[3].includes(s[21])},m(c,u){k(c,e,u),p(e,n),p(e,l),p(e,i)},p(c,u){u&2&&t!==(t=c[21].name+"")&&ke(n,t),u&2&&o!==(o=c[21].quoteCount+"")&&ke(i,o),u&2&&r!==(r=c[21])&&(e.__value=r,e.value=e.__value),u&10&&a!==(a=c[3].includes(c[21]))&&(e.disabled=a)},d(c){c&&v(e)}}}function $d(s){let e,t,n;return{c(){e=_("div"),t=T(),n=_("div"),n.textContent="Loading authors...",g(e,"class","text-blue-800 "+s[5]),g(n,"class","text-blue-800")},m(l,o){k(l,e,o),k(l,t,o),k(l,n,o)},p:ee,d(l){l&&v(e),l&&v(t),l&&v(n)}}}function Kl(s){let e,t,n={class:"my-4 py-4 border-y border-gray-300",$$slots:{default:[Ed]},$$scope:{ctx:s}};return e=new ot({props:n}),s[12](e),{c(){R(e.$$.fragment)},m(l,o){C(e,l,o),t=!0},p(l,o){const i={};o&134217752&&(i.$$scope={dirty:o,ctx:l}),e.$set(i)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){s[12](null),A(e,l)}}}function vd(s){let e,t,n,l=s[21].name+"",o,i,r,a,c=s[21].quoteCount+"",u,f,d,h;function m(){return s[11](s[23])}return{c(){e=_("button"),e.textContent="\xD7",t=T(),n=_("span"),o=z(l),r=T(),a=_("span"),u=z(c),f=T(),g(e,"class","text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"),g(n,"class","grow text-left overflow-hidden text-ellipsis whitespace-nowrap"),g(n,"title",i=s[21].name),g(a,"class","text-xs px-1 rounded-md bg-gray-600 text-white font-bold")},m(b,$){k(b,e,$),k(b,t,$),k(b,n,$),p(n,o),k(b,r,$),k(b,a,$),p(a,u),k(b,f,$),d||(h=G(e,"click",m),d=!0)},p(b,$){s=b,$&8&&l!==(l=s[21].name+"")&&ke(o,l),$&8&&i!==(i=s[21].name)&&g(n,"title",i),$&8&&c!==(c=s[21].quoteCount+"")&&ke(u,c)},d(b){b&&v(e),b&&v(t),b&&v(n),b&&v(r),b&&v(a),b&&v(f),d=!1,h()}}}function Wl(s){let e,t;return e=new pe({props:{class:"flex items-center gap-2",$$slots:{default:[vd]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},p(n,l){const o={};l&134217736&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function wd(s){let e,t,n=s[3],l=[];for(let i=0;i<n.length;i+=1)l[i]=Wl(jl(s,n,i));const o=i=>x(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=we()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);k(i,e,r),t=!0},p(i,r){if(r&136){n=i[3];let a;for(a=0;a<n.length;a+=1){const c=jl(i,n,a);l[a]?(l[a].p(c,r),w(l[a],1)):(l[a]=Wl(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(me(),a=n.length;a<l.length;a+=1)o(a);he()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)w(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)x(l[r]);t=!1},d(i){He(l,i),i&&v(e)}}}function kd(s){let e,t,n,l,o,i,r=(s[20]instanceof Error?s[20].message:s[20])+"",a;return{c(){e=_("div"),t=_("div"),n=_("div"),n.textContent="Loading quotes error",l=T(),o=_("div"),i=_("strong"),a=z(r),g(n,"class","text-red-400"),g(i,"class","text-red-600"),g(t,"class","flex flex-col items-center"),g(e,"class","h-full flex items-center justify-center")},m(c,u){k(c,e,u),p(e,t),p(t,n),p(t,l),p(t,o),p(o,i),p(i,a)},p(c,u){u&16&&r!==(r=(c[20]instanceof Error?c[20].message:c[20])+"")&&ke(a,r)},d(c){c&&v(e)}}}function yd(s){let e,t=s[16],n=[];for(let l=0;l<t.length;l+=1)n[l]=Gl(Hl(s,t,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=we()},m(l,o){for(let i=0;i<n.length;i+=1)n[i].m(l,o);k(l,e,o)},p(l,o){if(o&16){t=l[16];let i;for(i=0;i<t.length;i+=1){const r=Hl(l,t,i);n[i]?n[i].p(r,o):(n[i]=Gl(r),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=t.length}},d(l){He(n,l),l&&v(e)}}}function Gl(s){let e,t,n,l,o,i=s[17].en+"",r,a,c,u=s[17].author+"",f,d;return{c(){e=_("div"),t=_("span"),t.textContent="\u201C",n=T(),l=_("div"),o=_("div"),r=z(i),a=T(),c=_("div"),f=z(u),d=T(),g(t,"class","text-gray-200 text-7xl font-bold leading-[75%] mr-2"),g(o,"class","mb-3 leading-6"),g(c,"class","font-semibold italic text-right"),g(l,"class","grow"),g(e,"class","mb-2 last:mb-0 flex items-start")},m(h,m){k(h,e,m),p(e,t),p(e,n),p(e,l),p(l,o),p(o,r),p(l,a),p(l,c),p(c,f),p(e,d)},p(h,m){m&16&&i!==(i=h[17].en+"")&&ke(r,i),m&16&&u!==(u=h[17].author+"")&&ke(f,u)},d(h){h&&v(e)}}}function Td(s){let e,t,n,l,o;return{c(){e=_("div"),t=_("div"),n=_("div"),l=T(),o=_("div"),o.textContent="Loading quotes...",g(n,"class","text-blue-800 w-12 h-12 "+s[5]),g(o,"class","text-blue-800"),g(t,"class","flex flex-col items-center"),g(e,"class","h-full flex items-center justify-center")},m(i,r){k(i,e,r),p(e,t),p(t,n),p(t,l),p(t,o)},p:ee,d(i){i&&v(e)}}}function xd(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:Td,then:yd,catch:kd,value:16,error:20};return In(e=s[13],n),{c(){n.block.c(),t=T()},m(l,o){n.block.m(l,n.anchor=o),n.mount=()=>t.parentNode,n.anchor=t,k(l,t,o)},p(l,o){s=l,n.ctx=s,o&16&&e!==(e=s[13])&&In(e,n)||oi(n,s,o)},d(l){n.block.d(l),n.token=null,n=null,l&&v(t)}}}function Zl(s){let e,t;return e=new de({props:{class:"px-4",$$slots:{default:[xd]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},p(n,l){const o={};l&134217744&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Ed(s){let e,t,n,l;e=new it({props:{class:"basis-[24ch] shrink-0",$$slots:{default:[wd]},$$scope:{ctx:s}}});let o=s[4],i=[];for(let a=0;a<o.length;a+=1)i[a]=Zl(Fl(s,o,a));const r=a=>x(i[a],1,1,()=>{i[a]=null});return{c(){R(e.$$.fragment),t=T(),n=_("div");for(let a=0;a<i.length;a+=1)i[a].c();g(n,"class","grow")},m(a,c){C(e,a,c),k(a,t,c),k(a,n,c);for(let u=0;u<i.length;u+=1)i[u].m(n,null);l=!0},p(a,c){const u={};if(c&134217736&&(u.$$scope={dirty:c,ctx:a}),e.$set(u),c&48){o=a[4];let f;for(f=0;f<o.length;f+=1){const d=Fl(a,o,f);i[f]?(i[f].p(d,c),w(i[f],1)):(i[f]=Zl(d),i[f].c(),w(i[f],1),i[f].m(n,null))}for(me(),f=o.length;f<i.length;f+=1)r(f);he()}},i(a){if(!l){w(e.$$.fragment,a);for(let c=0;c<o.length;c+=1)w(i[c]);l=!0}},o(a){x(e.$$.fragment,a),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)x(i[c]);l=!1},d(a){A(e,a),a&&v(t),a&&v(n),He(i,a)}}}function Sd(s){let e,t,n,l,o,i,r,a,c,u;function f(b,$){return b[1]==null?gd:hd}let d=f(s),h=d(s),m=s[3].length&&Kl(s);return c=new Ye({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML=`Example of vertical tab layout. Thanks to the authors of <a target="_blank" href="https://github.com/skolakoda">\u0160kola koda</a>
    for the useful and convenient
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api">API</a>`,n=T(),l=_("div"),h.c(),o=T(),m&&m.c(),i=T(),r=_("h3"),r.textContent="Code",a=T(),R(c.$$.fragment),g(t,"class","mb-4 text-center"),g(l,"class","flex items-center justify-center gap-2"),g(e,"class","prose max-w-none my-4 svelte-unmfi5")},m(b,$){k(b,e,$),p(e,t),p(e,n),p(e,l),h.m(l,null),p(e,o),m&&m.m(e,null),p(e,i),p(e,r),p(e,a),C(c,e,null),u=!0},p(b,[$]){d===(d=f(b))&&h?h.p(b,$):(h.d(1),h=d(b),h&&(h.c(),h.m(l,null))),b[3].length?m?(m.p(b,$),$&8&&w(m,1)):(m=Kl(b),m.c(),w(m,1),m.m(e,i)):m&&(me(),x(m,1,1,()=>{m=null}),he())},i(b){u||(w(m),w(c.$$.fragment,b),u=!0)},o(b){x(m),x(c.$$.fragment,b),u=!1},d(b){b&&v(e),h.d(),m&&m.d(),A(c)}}}const Ai="https://programming-quotes-api.herokuapp.com";function Cd(){return Ve(this,null,function*(){const s=yield fetch(Ai+"/Authors");if(s.status>=400){const n=yield s.text();throw new Error(`${s.status}: ${n||s.statusText}`)}const e=s.headers.get("content-type");if(!e||!e.includes("application/json"))throw new TypeError("Wrong content-type");const t=yield s.json();return Object.values(t).sort((n,l)=>n.name.localeCompare(l.name))})}function Ad(s){return Ve(this,null,function*(){const e=yield fetch(Ai+"/Quotes/author/"+s);if(e.status>=400){const n=yield e.text();throw new Error(`${e.status}: ${n||e.statusText}`)}const t=e.headers.get("content-type");if(!t||!t.includes("application/json"))throw new TypeError("Wrong content-type");return yield e.json()})}function Rd(s,e,t){const n="w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin";let l,o,i,r=[],a=[];function c($){return $!=null&&!r.includes($)?(t(3,r=[$,...r]),t(4,a=[Ad($.name),...a]),l==null||l.selectTab(0),!0):!1}function u($){$>=0&&$<r.length&&(t(3,r=[...r.slice(0,$),...r.slice($+1)]),t(4,a=[...a.slice(0,$),...a.slice($+1)]))}const f=()=>{t(1,o=Cd())};function d(){i=un(this),t(2,i),t(1,o)}const h=()=>c(i)?t(2,i=void 0):void 0,m=$=>u($);function b($){ze[$?"unshift":"push"](()=>{l=$,t(0,l)})}return[l,o,i,r,a,n,c,u,f,d,h,m,b]}class Nd extends V{constructor(e){super(),Z(this,e,Rd,Sd,K,{})}}const{document:Vl}=Pt;function Md(s){let e;return{c(){e=z("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Pd(s){let e;return{c(){e=z("Base example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Od(s){let e;return{c(){e=z("Nested Example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Ld(s){let e;return{c(){e=z("Quotes Example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Id(s){let e,t,n,l,o,i,r,a;return e=new pe({props:{$$slots:{default:[Md]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[Pd]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[Od]},$$scope:{ctx:s}}}),r=new pe({props:{$$slots:{default:[Ld]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,l,u),C(o,c,u),k(c,i,u),C(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),o.$set(h);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(w(e.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(r.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(o.$$.fragment,c),x(r.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(l),A(o,c),c&&v(i),A(r,c)}}}function Dd(s){let e,t;return e=new ru({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Bd(s){let e,t;return e=new Of({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function zd(s){let e,t;return e=new md({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Fd(s){let e,t;return e=new Nd({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Hd(s){let e,t,n,l,o,i,r,a,c,u;return e=new it({props:{$$slots:{default:[Id]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[Dd]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[Bd]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[zd]},$$scope:{ctx:s}}}),c=new de({props:{$$slots:{default:[Fd]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment),a=T(),R(c.$$.fragment)},m(f,d){C(e,f,d),k(f,t,d),C(n,f,d),k(f,l,d),C(o,f,d),k(f,i,d),C(r,f,d),k(f,a,d),C(c,f,d),u=!0},p(f,d){const h={};d&1&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),n.$set(m);const b={};d&1&&(b.$$scope={dirty:d,ctx:f}),o.$set(b);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),r.$set($);const y={};d&1&&(y.$$scope={dirty:d,ctx:f}),c.$set(y)},i(f){u||(w(e.$$.fragment,f),w(n.$$.fragment,f),w(o.$$.fragment,f),w(r.$$.fragment,f),w(c.$$.fragment,f),u=!0)},o(f){x(e.$$.fragment,f),x(n.$$.fragment,f),x(o.$$.fragment,f),x(r.$$.fragment,f),x(c.$$.fragment,f),u=!1},d(f){A(e,f),f&&v(t),A(n,f),f&&v(l),A(o,f),f&&v(i),A(r,f),f&&v(a),A(c,f)}}}function jd(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b;return Vl.title=e=document.title.replace(/(•).*$/,"$1 Tabs"),m=new ot({props:{$$slots:{default:[Hd]},$$scope:{ctx:s}}}),{c(){t=T(),n=_("section"),l=_("a"),l.textContent="Home",o=T(),i=_("h1"),i.textContent="A set of components for organizing a tabbed interface",r=T(),a=_("a"),c=_("img"),f=T(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>with context to control tab switching</li>`,h=T(),R(m.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl"),g(c,"class","max-w-[4em]"),Ge(c.src,u=et)||g(c,"src",u),g(c,"alt","NPM logo"),g(a,"class","float-right"),g(a,"href","https://www.npmjs.com/package/@apsc/tabs"),g(a,"target","_blank"),g(d,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m($,y){k($,t,y),k($,n,y),p(n,l),p(n,o),p(n,i),p(n,r),p(n,a),p(a,c),p(n,f),p(n,d),p(n,h),C(m,n,null),b=!0},p($,[y]){(!b||y&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Tabs"))&&(Vl.title=e);const E={};y&1&&(E.$$scope={dirty:y,ctx:$}),m.$set(E)},i($){b||(w(m.$$.fragment,$),b=!0)},o($){x(m.$$.fragment,$),b=!1},d($){$&&v(t),$&&v(n),A(m)}}}class Ud extends V{constructor(e){super(),Z(this,e,null,jd,K,{})}}const qd=`<div class="component__source">Source <code>Notifications.svelte</code></div>
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
<td class="exports__description">Store of notifications</td></tr></table>`;function Kd(s){let e,t,n;return t=new Ht({props:{source:qd}}),{c(){e=_("section"),R(t.$$.fragment),g(e,"class","documentation")},m(l,o){k(l,e,o),C(t,e,null),n=!0},p:ee,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){x(t.$$.fragment,l),n=!1},d(l){l&&v(e),A(t)}}}class Wd extends V{constructor(e){super(),Z(this,e,null,Kd,K,{})}}const Gd=`.c-notifications {
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
`,Zd=`.c-notifications {
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
`;function Vd(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function Ri(s){const e=s-1;return e*e*e+1}function Xd(s,{delay:e=0,duration:t=400,easing:n=Vd,amount:l=5,opacity:o=0}={}){const i=getComputedStyle(s),r=+i.opacity,a=i.filter==="none"?"":i.filter,c=r*(1-o);return{delay:e,duration:t,easing:n,css:(u,f)=>`opacity: ${r-c*f}; filter: ${a} blur(${f*l}px);`}}function Yd(s,{delay:e=0,duration:t=400,easing:n=Wo}={}){const l=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:n,css:o=>`opacity: ${o*l}`}}function en(s,{delay:e=0,duration:t=400,easing:n=Ri}={}){const l=getComputedStyle(s),o=+l.opacity,i=parseFloat(l.height),r=parseFloat(l.paddingTop),a=parseFloat(l.paddingBottom),c=parseFloat(l.marginTop),u=parseFloat(l.marginBottom),f=parseFloat(l.borderTopWidth),d=parseFloat(l.borderBottomWidth);return{delay:e,duration:t,easing:n,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*o};height: ${h*i}px;padding-top: ${h*r}px;padding-bottom: ${h*a}px;margin-top: ${h*c}px;margin-bottom: ${h*u}px;border-top-width: ${h*f}px;border-bottom-width: ${h*d}px;`}}function Qd(s,{delay:e=0,duration:t=400,easing:n=Ri,start:l=0,opacity:o=0}={}){const i=getComputedStyle(s),r=+i.opacity,a=i.transform==="none"?"":i.transform,c=1-l,u=r*(1-o);return{delay:e,duration:t,easing:n,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${r-u*d}
		`}}function Xl(s,e,t){const n=s.slice();return n[8]=e[t],n}const Jd=s=>({notification:s&16}),Yl=s=>({notification:s[8]});function ep(s){let e,t,n=(s[8].message||"No message")+"",l,o,i,r,a,c,u,f;function d(){return s[7](s[8])}return{c(){e=_("div"),t=_("span"),l=T(),o=_("span"),i=T(),g(t,"class","c-notifications__item__message"),g(o,"role","button"),g(o,"aria-label","Close notification"),g(o,"class","c-notifications__item__close"),g(e,"class",r="c-notifications__item"+(s[8].type?" "+s[8].type:""))},m(h,m){k(h,e,m),p(e,t),t.innerHTML=n,p(e,l),p(e,o),p(e,i),c=!0,u||(f=G(o,"click",d),u=!0)},p(h,m){s=h,(!c||m&16)&&n!==(n=(s[8].message||"No message")+"")&&(t.innerHTML=n),(!c||m&16&&r!==(r="c-notifications__item"+(s[8].type?" "+s[8].type:"")))&&g(e,"class",r)},i(h){c||(lt(()=>{a||(a=Ct(e,s[2],s[3],!0)),a.run(1)}),c=!0)},o(h){a||(a=Ct(e,s[2],s[3],!1)),a.run(0),c=!1},d(h){h&&v(e),h&&a&&a.end(),u=!1,f()}}}function Ql(s,e){let t,n;const l=e[6].default,o=Ae(l,e,e[5],Yl),i=o||ep(e);return{key:s,first:null,c(){t=we(),i&&i.c(),this.first=t},m(r,a){k(r,t,a),i&&i.m(r,a),n=!0},p(r,a){e=r,o?o.p&&(!n||a&48)&&Ne(o,l,e,e[5],n?Re(l,e[5],a,Jd):Me(e[5]),Yl):i&&i.p&&(!n||a&24)&&i.p(e,n?a:-1)},i(r){n||(w(i,r),n=!0)},o(r){x(i,r),n=!1},d(r){r&&v(t),i&&i.d(r)}}}function tp(s){let e,t=[],n=new Map,l,o,i,r=s[4];const a=c=>c[8].id;for(let c=0;c<r.length;c+=1){let u=Xl(s,r,c),f=a(u);n.set(f,t[c]=Ql(f,u))}return{c(){e=_("div");for(let c=0;c<t.length;c+=1)t[c].c();g(e,"class",l="c-notifications"+(s[0]?" "+s[0]:"")),g(e,"style",o=s[1]||void 0)},m(c,u){k(c,e,u);for(let f=0;f<t.length;f+=1)t[f].m(e,null);i=!0},p(c,[u]){u&56&&(r=c[4],me(),t=gr(t,u,a,1,c,r,n,e,hr,Ql,null,Xl),he()),(!i||u&1&&l!==(l="c-notifications"+(c[0]?" "+c[0]:"")))&&g(e,"class",l),(!i||u&2&&o!==(o=c[1]||void 0))&&g(e,"style",o)},i(c){if(!i){for(let u=0;u<r.length;u+=1)w(t[u]);i=!0}},o(c){for(let u=0;u<t.length;u+=1)x(t[u]);i=!1},d(c){c&&v(e);for(let u=0;u<t.length;u+=1)t[u].d()}}}let Mn=!1;const jn=function(){const{subscribe:s,set:e,update:t}=Jt([]);return{subscribe:s,clear(){e([])},push(n){if(!Mn)throw new Error("No Notification component instance");const l=Ue({id:Symbol("Notification")},n);return t(o=>[...o,l]),n.timeout&&n.timeout>0&&setTimeout(()=>this.pop(l.id),n.timeout),l.id},pop(n){t(l=>{const o=l.findIndex(i=>i.id===n);return o>=0&&l.splice(o,1),l})}}}();function np(s,e,t){let n,l=ee;Yt(s,jn,d=>t(4,n=d)),s.$$.on_destroy.push(()=>l());let{$$slots:o={},$$scope:i}=e,{class:r=""}=e,{style:a=""}=e,{transitionFn:c=en}=e,{transitionParams:u={}}=e;Bt(()=>{if(Mn)throw new Error("The Notifications component already has an instance");Mn=!0}),fs(()=>Mn=!1);const f=d=>jn.pop(d.id);return s.$$set=d=>{"class"in d&&t(0,r=d.class),"style"in d&&t(1,a=d.style),"transitionFn"in d&&t(2,c=d.transitionFn),"transitionParams"in d&&t(3,u=d.transitionParams),"$$scope"in d&&t(5,i=d.$$scope)},[r,a,c,u,n,i,o,f]}class sp extends V{constructor(e){super(),Z(this,e,np,tp,K,{class:0,style:1,transitionFn:2,transitionParams:3})}}const as=[{author:"Edsger W. Dijkstra",en:"Computer Science is no more about computers than astronomy is about telescopes."},{author:"Edsger W. Dijkstra",en:"Simplicity is prerequisite for reliability."},{author:"Edsger W. Dijkstra",en:"The computing scientist\u2019s main challenge is not to get confused by the complexities of his own making."},{author:"Edsger W. Dijkstra",en:"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},{author:"Edsger W. Dijkstra",en:"A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure \u201Eprogrammer productivity\u201C in terms of \u201Enumber of lines of code produced\u201C. In so doing they book that number on the wrong side of the ledger: We should always refer to \u201Ethe number of lines of code spent\u201C."},{author:"Tony Hoare",en:"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},{author:"Jeff Hammerbacher",en:"The best minds of my generation are thinking about how to make people click ads."},{author:"Edsger W. Dijkstra",en:"The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities."},{author:"Edsger W. Dijkstra",en:'How do we convince people that in programming simplicity and clarity \u2014 in short: what mathematicians call "elegance" \u2014 are not a dispensable luxury, but a crucial matter that decides between success and failure?'},{author:"Fred Brooks",en:"Adding manpower to a late software project makes it later."},{author:"Michael Stal",en:"Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person."},{author:"Fred Brooks",en:"Nine women can't make a baby in one month."},{author:"Jeff Sickel",en:"Deleted code is debugged code."},{author:"Ken Thompson",en:"When in doubt, use brute force."},{author:"Fred Brooks",en:"When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned."},{author:"Fred Brooks",en:"If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two."},{author:"Fred Brooks",en:"Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect."},{author:"Fred Brooks",en:"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures."},{author:"Fred Brooks",en:'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.'},{author:"Donald Knuth",en:"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%."},{author:"Ken Thompson",en:"One of my most productive days was throwing away 1,000 lines of code."},{author:"Grace Hopper",en:"One accurate measurement is worth more than a thousand expert opinions."},{author:"Fred Brooks",en:"What one programmer can do in one month, two programmers can do in two months."},{author:"Rick Osborne",en:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},{author:"John Ousterhout",en:"A program that produces incorrect results twice as fast is infinitely slower."},{author:"Poul Anderson",en:"I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated."},{author:"Robert C. Martin",en:"Cleaning code does NOT take time. NOT cleaning code does take time."},{author:"David Gelernter",en:"Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity."},{author:"Edward V. Berard",en:"Walking on water and developing software from a specification are easy if both are frozen."},{author:"Brian Kernighan",en:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},{author:"Brian Kernighan",en:"Controlling complexity is the essence of computer programming."},{author:"Chris Wenham",en:"Debugging time increases as a square of the program\u2019s size."},{author:"Seymour Cray",en:"The trouble with programmers is that you can never tell what a programmer is doing until it\u2019s too late."},{author:"Ron Jeffries",en:"Code never lies, comments sometimes do."},{author:"Laurence J. Peter",en:"Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them."},{author:"Poul-Henning Kamp",en:'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.'},{author:"Albert Einstein",en:"I have no special talent. I am only passionately curious."},{author:"Robert C. Martin",en:"The proper use of comments is to compensate for our failure to express ourself in code."},{author:"Rob Pike",en:"When there is no type hierarchy you don\u2019t have to manage the type hierarchy."},{author:"Steve Jobs",en:"Everybody should learn to program a computer, because it teaches you how to think."},{author:"Chris Sacca",en:"Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for."},{author:"Bill Gates",en:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},{author:"William Wulf",en:"More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity."},{author:"Edsger W. Dijkstra",en:"Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence."},{author:"Albert Einstein",en:"Imagination is more important than knowledge."}];function Jl(s,e,t){const n=s.slice();return n[20]=e[t],n}function eo(s,e,t){const n=s.slice();return n[23]=e[t],n}function to(s){let e,t,n,l=s[23]+"",o,i,r;return{c(){e=_("label"),t=_("input"),n=T(),o=z(l),g(t,"type","radio"),g(t,"name","styles"),t.__value=s[23],t.value=t.__value,s[12][2].push(t),g(e,"class","mr-2 last:mr-0")},m(a,c){k(a,e,c),p(e,t),t.checked=t.__value===s[3],p(e,n),p(e,o),i||(r=G(t,"change",s[17]),i=!0)},p(a,c){c&8&&(t.checked=t.__value===a[3])},d(a){a&&v(e),s[12][2].splice(s[12][2].indexOf(t),1),i=!1,r()}}}function no(s){let e,t=s[20]+"",n;return{c(){e=_("option"),n=z(t),e.__value=s[20],e.value=e.__value},m(l,o){k(l,e,o),p(e,n)},p:ee,d(l){l&&v(e)}}}function lp(s){let e,t=`<style type="text/css" data-text="test">${s[7][s[3]]}</style>`,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P,O,L,I,D,F,q,W,se,Q,B,U,J,oe,ue,ce,Pe,Ie,ye,$e,ne,Te,_e,ge,te,xe,Se,ve,Ee,ct,ut,re,We,Be,be,Ze,Qe,ft;i=new sp({props:{style:"display: flex; "+s[0]+s[1]}});let st=Object.keys(s[7]),H=[];for(let j=0;j<st.length;j+=1)H[j]=to(eo(s,st,j));let X=s[8],le=[];for(let j=0;j<X.length;j+=1)le[j]=no(Jl(s,X,j));return be=new Ye({props:{code:`<script lang="ts">
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
</section>`}}),{c(){e=new ti(!1),n=we(),l=T(),o=_("section"),R(i.$$.fragment),r=T(),a=_("div"),a.innerHTML='This example uses quotes from the <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api">API</a>  <a target="_blank" href="https://github.com/skolakoda">\u0160kola koda</a>',c=T(),u=_("form"),f=_("div"),d=_("div"),h=_("div"),h.textContent="Side",m=T(),b=_("label"),$=_("input"),y=z(" left"),E=T(),M=_("label"),S=_("input"),N=z(" right"),P=T(),O=_("div"),L=_("div"),L.textContent="Direction",I=T(),D=_("label"),F=_("input"),q=z(" from top"),W=T(),se=_("label"),Q=_("input"),B=z(" from bottom"),U=T(),J=_("label"),oe=_("div"),oe.textContent="Timeout",ue=T(),ce=_("input"),Pe=T(),Ie=_("div"),ye=_("div"),ye.textContent="Style",$e=T();for(let j=0;j<H.length;j+=1)H[j].c();ne=T(),Te=_("label"),_e=_("textarea"),ge=T(),te=_("div"),xe=_("label"),Se=_("input"),ve=T(),Ee=_("select");for(let j=0;j<le.length;j+=1)le[j].c();ct=T(),ut=_("div"),ut.innerHTML=`<input class="input block w-40" type="submit" value="Notify"/> 
      <input class="input block w-40" type="reset" value="Clear"/>`,re=T(),We=_("h3"),We.textContent="Code",Be=T(),R(be.$$.fragment),e.a=n,g(a,"class","mb-4 text-center"),g(h,"class","text-sm uppercase opacity-70"),g($,"type","radio"),g($,"name","hpos"),$.__value="left: 0; right: unset;",$.value=$.__value,s[12][0].push($),g(S,"type","radio"),g(S,"name","hpos"),S.__value="right: 0;",S.value=S.__value,s[12][0].push(S),g(L,"class","text-sm uppercase opacity-70"),g(F,"type","radio"),g(F,"name","vpos"),F.__value="top: 0; bottom: unset; flex-direction: column-reverse;",F.value=F.__value,s[12][1].push(F),g(Q,"type","radio"),g(Q,"name","vpos"),Q.__value="top: unset; bottom: 0; flex-direction: column;",Q.value=Q.__value,s[12][1].push(Q),g(oe,"class","text-sm uppercase opacity-70"),g(ce,"class","input w-[9ch]"),g(ce,"min","0"),g(ce,"step","100"),g(ce,"type","number"),g(ye,"class","text-sm uppercase opacity-70"),g(f,"class","flex gap-4 items-center justify-evenly mb-4"),g(_e,"name","quote"),_e.value=s[6],g(_e,"rows","3"),g(_e,"class","input w-full"),g(_e,"placeholder","Quote"),g(Te,"class","block w-full mb-4"),g(Se,"name","author"),Se.value=s[5],g(Se,"class","input w-full"),g(Se,"type","text"),g(Se,"placeholder","Author"),g(xe,"class","block w-full"),g(Ee,"class","input block w-full"),s[4]===void 0&&lt(()=>s[18].call(Ee)),g(te,"class","mb-4 flex gap-4"),g(ut,"class","mx-auto w-fit flex gap-4"),g(u,"class","not-prose w-full"),g(o,"class","prose max-w-none my-4")},m(j,fe){e.m(t,document.head),p(document.head,n),k(j,l,fe),k(j,o,fe),C(i,o,null),p(o,r),p(o,a),p(o,c),p(o,u),p(u,f),p(f,d),p(d,h),p(d,m),p(d,b),p(b,$),$.checked=$.__value===s[0],p(b,y),p(d,E),p(d,M),p(M,S),S.checked=S.__value===s[0],p(M,N),p(f,P),p(f,O),p(O,L),p(O,I),p(O,D),p(D,F),F.checked=F.__value===s[1],p(D,q),p(O,W),p(O,se),p(se,Q),Q.checked=Q.__value===s[1],p(se,B),p(f,U),p(f,J),p(J,oe),p(J,ue),p(J,ce),tt(ce,s[2]),p(f,Pe),p(f,Ie),p(Ie,ye),p(Ie,$e);for(let De=0;De<H.length;De+=1)H[De].m(Ie,null);p(u,ne),p(u,Te),p(Te,_e),p(u,ge),p(u,te),p(te,xe),p(xe,Se),p(te,ve),p(te,Ee);for(let De=0;De<le.length;De+=1)le[De].m(Ee,null);gt(Ee,s[4]),p(u,ct),p(u,ut),p(o,re),p(o,We),p(o,Be),C(be,o,null),Ze=!0,Qe||(ft=[G($,"change",s[11]),G(S,"change",s[13]),G(F,"change",s[14]),G(Q,"change",s[15]),G(ce,"input",s[16]),G(Ee,"change",s[18]),G(u,"submit",Xs(s[9])),G(u,"reset",Xs(s[19]))],Qe=!0)},p(j,[fe]){(!Ze||fe&8)&&t!==(t=`<style type="text/css" data-text="test">${j[7][j[3]]}</style>`)&&e.p(t);const De={};if(fe&3&&(De.style="display: flex; "+j[0]+j[1]),i.$set(De),fe&1&&($.checked=$.__value===j[0]),fe&1&&(S.checked=S.__value===j[0]),fe&2&&(F.checked=F.__value===j[1]),fe&2&&(Q.checked=Q.__value===j[1]),fe&4&&at(ce.value)!==j[2]&&tt(ce,j[2]),fe&136){st=Object.keys(j[7]);let Ce;for(Ce=0;Ce<st.length;Ce+=1){const Je=eo(j,st,Ce);H[Ce]?H[Ce].p(Je,fe):(H[Ce]=to(Je),H[Ce].c(),H[Ce].m(Ie,null))}for(;Ce<H.length;Ce+=1)H[Ce].d(1);H.length=st.length}if((!Ze||fe&64)&&(_e.value=j[6]),(!Ze||fe&32&&Se.value!==j[5])&&(Se.value=j[5]),fe&256){X=j[8];let Ce;for(Ce=0;Ce<X.length;Ce+=1){const Je=Jl(j,X,Ce);le[Ce]?le[Ce].p(Je,fe):(le[Ce]=no(Je),le[Ce].c(),le[Ce].m(Ee,null))}for(;Ce<le.length;Ce+=1)le[Ce].d(1);le.length=X.length}fe&272&&gt(Ee,j[4])},i(j){Ze||(w(i.$$.fragment,j),w(be.$$.fragment,j),Ze=!0)},o(j){x(i.$$.fragment,j),x(be.$$.fragment,j),Ze=!1},d(j){v(n),j&&e.d(),j&&v(l),j&&v(o),A(i),s[12][0].splice(s[12][0].indexOf($),1),s[12][0].splice(s[12][0].indexOf(S),1),s[12][1].splice(s[12][1].indexOf(F),1),s[12][1].splice(s[12][1].indexOf(Q),1),He(H,j),He(le,j),A(be),Qe=!1,Oe(ft)}}}function op(s,e,t){let n,l,o=0,i="left: 0; right: unset;",r="top: 0; bottom: unset; flex-direction: column-reverse;",a=1e4,c={simple:Gd,bootstrap:Zd},u=Object.keys(c)[0];const f=["primary","secondary","success","danger","warning","info","light","dark"];let d=f[0];function h({currentTarget:O}){if(O instanceof HTMLFormElement){const L=O.elements.quote.value,I=O.author.value;jn.push({message:[L?`<div>${L}</div>`:"",I?`<div class="italic text-right">${I}</div>`:""].filter(F=>!!F).join(""),type:d,timeout:a}),t(10,o=o+1>=as.length?0:o+1);let D=f.indexOf(d)+1;D<0||D>=f.length?t(4,d=f[0]):t(4,d=f[D])}}const m=[[],[],[]];function b(){i=this.__value,t(0,i)}function $(){i=this.__value,t(0,i)}function y(){r=this.__value,t(1,r)}function E(){r=this.__value,t(1,r)}function M(){a=at(this.value),t(2,a)}function S(){u=this.__value,t(3,u)}function N(){d=un(this),t(4,d),t(8,f)}const P=()=>jn.clear();return s.$$.update=()=>{s.$$.dirty&1024&&t(6,n=as[o].en),s.$$.dirty&1024&&t(5,l=as[o].author)},[i,r,a,u,d,l,n,c,f,h,o,b,m,$,y,E,M,S,N,P]}class ip extends V{constructor(e){super(),Z(this,e,op,lp,K,{})}}const{document:so}=Pt;function rp(s){let e;return{c(){e=z("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function ap(s){let e;return{c(){e=z("Base example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function cp(s){let e,t,n,l;return e=new pe({props:{$$slots:{default:[rp]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[ap]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment)},m(o,i){C(e,o,i),k(o,t,i),C(n,o,i),l=!0},p(o,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:o}),e.$set(r);const a={};i&1&&(a.$$scope={dirty:i,ctx:o}),n.$set(a)},i(o){l||(w(e.$$.fragment,o),w(n.$$.fragment,o),l=!0)},o(o){x(e.$$.fragment,o),x(n.$$.fragment,o),l=!1},d(o){A(e,o),o&&v(t),A(n,o)}}}function up(s){let e,t;return e=new Wd({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function fp(s){let e,t;return e=new ip({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function dp(s){let e,t,n,l,o,i;return e=new it({props:{$$slots:{default:[cp]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[up]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[fp]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment)},m(r,a){C(e,r,a),k(r,t,a),C(n,r,a),k(r,l,a),C(o,r,a),i=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(w(e.$$.fragment,r),w(n.$$.fragment,r),w(o.$$.fragment,r),i=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),x(o.$$.fragment,r),i=!1},d(r){A(e,r),r&&v(t),A(n,r),r&&v(l),A(o,r)}}}function pp(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b;return so.title=e=document.title.replace(/(•).*$/,"$1 GlobNotify"),m=new ot({props:{$$slots:{default:[dp]},$$scope:{ctx:s}}}),{c(){t=T(),n=_("section"),l=_("a"),l.textContent="Home",o=T(),i=_("h1"),i.textContent="Component for notifications globally for the entire application",r=T(),a=_("a"),c=_("img"),f=T(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>one instance for the entire application</li> 
    <li>with custom notification transition</li> 
    <li>custom notification element components</li> 
    <li>with configurable timeout for each notification</li>`,h=T(),R(m.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl max-w-lg"),g(c,"class","max-w-[4em]"),Ge(c.src,u=et)||g(c,"src",u),g(c,"alt","NPM logo"),g(a,"class","float-right"),g(a,"href","https://www.npmjs.com/package/@apsc/glob-notify"),g(a,"target","_blank"),g(d,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m($,y){k($,t,y),k($,n,y),p(n,l),p(n,o),p(n,i),p(n,r),p(n,a),p(a,c),p(n,f),p(n,d),p(n,h),C(m,n,null),b=!0},p($,[y]){(!b||y&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 GlobNotify"))&&(so.title=e);const E={};y&1&&(E.$$scope={dirty:y,ctx:$}),m.$set(E)},i($){b||(w(m.$$.fragment,$),b=!0)},o($){x(m.$$.fragment,$),b=!1},d($){$&&v(t),$&&v(n),A(m)}}}class mp extends V{constructor(e){super(),Z(this,e,null,pp,K,{})}}const hp=`<div class="component__source">Source <code>ColorPicker.svelte</code></div>
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
</td></tr></table>`;function gp(s){let e,t,n;return t=new Ht({props:{source:hp}}),{c(){e=_("section"),R(t.$$.fragment),g(e,"class","documentation")},m(l,o){k(l,e,o),C(t,e,null),n=!0},p:ee,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){x(t.$$.fragment,l),n=!1},d(l){l&&v(e),A(t)}}}class _p extends V{constructor(e){super(),Z(this,e,null,gp,K,{})}}function Ni(s){var t;const e=(t=/^#([0-9a-f]{3,8})$/gi.exec(s))==null?void 0:t[1];if(e!=null){if(e.length===3||e.length===4)return e.split(/([0-9a-f])/gi).filter(Boolean);if(e.length===6||e.length===8)return e.split(/([0-9a-f]{2})/gi).filter(Boolean)}}function lo(s){try{return Ni(s)!=null}catch(e){return!1}}function pt(s,e,t){return Math.max(Math.min(s,t),e)}function bp(s){return vp(Vn(s))}function Vn(s){var n;const e=(n=Ni(s))==null?void 0:n.map(l=>l.length===1?l+l:l);if(e==null)throw new Error(`Invalid color ${s}`);const t={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return e[3]&&(t.a=Math.round(parseInt(e[3],16)/255*1e3)/1e3),t}function $p(s){const e=s.s/100,t=s.l/100,n=(1-Math.abs(2*t-1))*e,l=n*(1-Math.abs(s.h/60%2-1)),o=t-n/2;let i=0,r=0,a=0;0<=s.h&&s.h<60?(i=n,r=l,a=0):60<=s.h&&s.h<120?(i=l,r=n,a=0):120<=s.h&&s.h<180?(i=0,r=n,a=l):180<=s.h&&s.h<240?(i=0,r=l,a=n):240<=s.h&&s.h<300?(i=l,r=0,a=n):300<=s.h&&s.h<360&&(i=n,r=0,a=l),i=Math.round((i+o)*255),r=Math.round((r+o)*255),a=Math.round((a+o)*255);const c={r:i,g:r,b:a};return s.a!=null&&(c.a=s.a),c}function vp(s){const e=s.r/255,t=s.g/255,n=s.b/255,l=Math.max(e,t,n),o=Math.min(e,t,n),i=l-o;let r=0,a=0,c=0;i===0?r=0:l===e?r=(t-n)/i%6:l===t?r=(n-e)/i+2:r=(e-t)/i+4,r=Math.round(r*60),r<0&&(r+=360),a=(l+o)/2,c=i===0?0:i/(1-Math.abs(2*a-1));const u={h:r,s:Math.round(c*100),l:Math.round(a*100)};return s.a!=null&&(u.a=s.a),u}function wp(s){return Ms($p(s))}function Ms(s){const e="#"+[s.r,s.g,s.b].map(n=>pt(n,0,255).toString(16).padStart(2,"0")).join(""),t=s.a!=null?Math.round(s.a*255):255;return t<255?e+Math.max(t,0).toString(16).padStart(2,"0"):e}function kp(s){return yp(Vn(s))}function yp(s){const e=pt(s.r,0,255)/255,t=pt(s.g,0,255)/255,n=pt(s.b,0,255)/255,l=Math.max(e,t,n),o=Math.min(e,t,n),i=l-o,r=l;let a=0,c=0;i&&(l===e&&(a=(t-n)/i),l===t&&(a=2+(n-e)/i),l===n&&(a=4+(e-t)/i),l&&(c=i/l)),a=a*60;const u=a<0?a+360:a,f=c*100,d=r*100;return s.a!=null&&s.a>=0?{h:u,s:f,v:d,a:pt(s.a,0,1)}:{h:u,s:f,v:d}}function cs(s){return Ms(Tp(s))}function Tp(s){const e=s.s/100,t=s.v/100;let n=e*t;const l=s.h/60;let o=n*(1-Math.abs(l%2-1));const i=t-n;n=n+i,o=o+i;const r=Math.floor(l)%6,a=[n,o,i,i,o,n][r],c=[o,n,n,o,i,i][r],u=[i,i,o,n,n,o][r],f=Math.round(a*255),d=Math.round(c*255),h=Math.round(u*255);return s.a!=null?{r:f,g:d,b:h,a:s.a}:{r:f,g:d,b:h}}function oo(s){var l;typeof s=="string"&&(s=Vn(s));const e=[.2126,.7152,.0722],t=[s.r,s.g,s.b].reduce((o,i,r)=>(i/=255,i<.03928?i/=12.92:(i=(i+.055)/1.055,i*=i),o+i*e[r]),0),n=1-((l=s.a)!=null?l:1);return t+(1-t)*n}function xp(s){let e,t,n,l;return{c(){e=_("div"),t=_("div"),g(t,"class","c-color-picker__tone--marker"),Ke(t,"left",s[0]+"%"),Ke(t,"top",100-s[1]+"%"),g(e,"class","c-color-picker__tone"),g(e,"tabindex","0")},m(o,i){k(o,e,i),p(e,t),n||(l=je(s[2].call(null,e)),n=!0)},p(o,[i]){i&1&&Ke(t,"left",o[0]+"%"),i&2&&Ke(t,"top",100-o[1]+"%")},i:ee,o:ee,d(o){o&&v(e),n=!1,l()}}}function Ep(s,e,t){let{s:n=0}=e,{v:l=0}=e;function o(i){function r(h){const{pageX:m,pageY:b}=h instanceof MouseEvent?h:h.changedTouches[0],{left:$,top:y,width:E,height:M}=i.getBoundingClientRect();t(0,n=pt((m-$-window.scrollX)/E,0,1)*100),t(1,l=100-pt((b-y-window.scrollY)/M,0,1)*100)}function a(h){r(h)}function c(){document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",c),document.removeEventListener("touchend",c),setTimeout(()=>{document.removeEventListener("click",f,{capture:!0})},0)}function u(h){i.focus(),document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",c),document.addEventListener("touchend",c),document.addEventListener("click",f,{capture:!0}),r(h),h.preventDefault()}function f(h){h.preventDefault(),h.stopPropagation()}function d(h){let b=100-l,$=n;switch(h.code){case"ArrowUp":b=pt(b-1,0,100);break;case"ArrowDown":b=pt(b+1,0,100),h.preventDefault();break;case"ArrowLeft":$=pt($-1,0,100),h.preventDefault();break;case"ArrowRight":$=pt($+1,0,100),h.preventDefault();break}$!==n&&t(0,n=$),100-b!==l&&t(1,l=100-b)}return i.addEventListener("mousedown",u),i.addEventListener("touchstart",u),i.addEventListener("keydown",d),{destroy(){c(),i.removeEventListener("mousedown",u),i.removeEventListener("touchstart",u),i.removeEventListener("keydown",d)}}}return s.$$set=i=>{"s"in i&&t(0,n=i.s),"v"in i&&t(1,l=i.v)},[n,l,o]}class Sp extends V{constructor(e){super(),Z(this,e,Ep,xp,K,{s:0,v:1})}}var Cp="Expected a function",io=0/0,Ap="[object Symbol]",Rp=/^\s+|\s+$/g,Np=/^[-+]0x[0-9a-f]+$/i,Mp=/^0b[01]+$/i,Pp=/^0o[0-7]+$/i,Op=parseInt,Lp=typeof En=="object"&&En&&En.Object===Object&&En,Ip=typeof self=="object"&&self&&self.Object===Object&&self,Dp=Lp||Ip||Function("return this")(),Bp=Object.prototype,zp=Bp.toString,Fp=Math.max,Hp=Math.min,us=function(){return Dp.Date.now()};function jp(s,e,t){var n,l,o,i,r,a,c=0,u=!1,f=!1,d=!0;if(typeof s!="function")throw new TypeError(Cp);e=ro(e)||0,hs(t)&&(u=!!t.leading,f="maxWait"in t,o=f?Fp(ro(t.maxWait)||0,e):o,d="trailing"in t?!!t.trailing:d);function h(P){var O=n,L=l;return n=l=void 0,c=P,i=s.apply(L,O),i}function m(P){return c=P,r=setTimeout(y,e),u?h(P):i}function b(P){var O=P-a,L=P-c,I=e-O;return f?Hp(I,o-L):I}function $(P){var O=P-a,L=P-c;return a===void 0||O>=e||O<0||f&&L>=o}function y(){var P=us();if($(P))return E(P);r=setTimeout(y,b(P))}function E(P){return r=void 0,d&&n?h(P):(n=l=void 0,i)}function M(){r!==void 0&&clearTimeout(r),c=0,n=a=l=r=void 0}function S(){return r===void 0?i:E(us())}function N(){var P=us(),O=$(P);if(n=arguments,l=this,a=P,O){if(r===void 0)return m(a);if(f)return r=setTimeout(y,e),h(a)}return r===void 0&&(r=setTimeout(y,e)),i}return N.cancel=M,N.flush=S,N}function hs(s){var e=typeof s;return!!s&&(e=="object"||e=="function")}function Up(s){return!!s&&typeof s=="object"}function qp(s){return typeof s=="symbol"||Up(s)&&zp.call(s)==Ap}function ro(s){if(typeof s=="number")return s;if(qp(s))return io;if(hs(s)){var e=typeof s.valueOf=="function"?s.valueOf():s;s=hs(e)?e+"":e}if(typeof s!="string")return s===0?s:+s;s=s.replace(Rp,"");var t=Mp.test(s);return t||Pp.test(s)?Op(s.slice(2),t?2:8):Np.test(s)?io:+s}var Kp=jp;function Wp(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E;function M(P){s[9](P)}function S(P){s[10](P)}let N={};return s[2].s!==void 0&&(N.s=s[2].s),s[2].v!==void 0&&(N.v=s[2].v),n=new Sp({props:N}),ze.push(()=>At(n,"s",M)),ze.push(()=>At(n,"v",S)),{c(){e=_("div"),t=_("div"),R(n.$$.fragment),i=T(),r=_("div"),a=T(),c=_("div"),u=_("input"),f=T(),d=_("div"),h=_("input"),g(r,"class","c-color-picker__sample"),g(u,"type","range"),g(u,"min","0"),g(u,"max","359"),g(u,"step","1"),g(c,"class","c-color-picker__hue"),g(h,"type","range"),g(h,"min","0"),g(h,"max","1"),g(h,"step",1/255),g(d,"class","c-color-picker__alpha"),g(t,"class","c-color-picker__body"),g(e,"class",m="c-color-picker"+(s[0]?" "+s[0]:"")),g(e,"style",b="--cp-tone: "+s[4]+"; --cp-color-opacity: "+s[5]+"; --cp-color: "+s[3]+"; "+s[1])},m(P,O){k(P,e,O),p(e,t),C(n,t,null),p(t,i),p(t,r),p(t,a),p(t,c),p(c,u),tt(u,s[2].h),p(t,f),p(t,d),p(d,h),tt(h,s[2].a),$=!0,y||(E=[G(u,"change",s[11]),G(u,"input",s[11]),G(h,"change",s[12]),G(h,"input",s[12])],y=!0)},p(P,[O]){const L={};!l&&O&4&&(l=!0,L.s=P[2].s,Dt(()=>l=!1)),!o&&O&4&&(o=!0,L.v=P[2].v,Dt(()=>o=!1)),n.$set(L),O&4&&tt(u,P[2].h),O&4&&tt(h,P[2].a),(!$||O&1&&m!==(m="c-color-picker"+(P[0]?" "+P[0]:"")))&&g(e,"class",m),(!$||O&58&&b!==(b="--cp-tone: "+P[4]+"; --cp-color-opacity: "+P[5]+"; --cp-color: "+P[3]+"; "+P[1]))&&g(e,"style",b)},i(P){$||(w(n.$$.fragment,P),$=!0)},o(P){x(n.$$.fragment,P),$=!1},d(P){P&&v(e),A(n),y=!1,Oe(E)}}}function Gp(s,e,t){let{class:n=""}=e,{style:l=""}=e,{color:o="#000"}=e,{debounce:i=0}=e,r;function a(y){let{h:E,s:M,v:S,a:N=1}=kp(y);r!=null&&E===0&&M===0&&(E=r.h),t(2,r={h:E,s:M,v:S,a:N})}let c,u,f,d;function h(y){s.$$.not_equal(r.s,y)&&(r.s=y,t(2,r))}function m(y){s.$$.not_equal(r.v,y)&&(r.v=y,t(2,r))}function b(){r.h=at(this.value),t(2,r)}function $(){r.a=at(this.value),t(2,r)}return s.$$set=y=>{"class"in y&&t(0,n=y.class),"style"in y&&t(1,l=y.style),"color"in y&&t(6,o=y.color),"debounce"in y&&t(7,i=y.debounce)},s.$$.update=()=>{s.$$.dirty&128&&t(8,c=Kp(y=>{t(6,o=y)},i)),s.$$.dirty&64&&a(o),s.$$.dirty&268&&(y=>{t(3,u=cs(y)),t(4,f=cs({h:y.h,s:100,v:100})),t(5,d=cs({h:y.h,s:y.s,v:y.v})),c(u)})(r)},[n,l,r,u,f,d,o,i,c,h,m,b,$]}class Mi extends V{constructor(e){super(),Z(this,e,Gp,Wp,K,{class:0,style:1,color:6,debounce:7})}}function Zp(s){let e,t,n,l;return{c(){e=_("input"),g(e,"class",t="c-coloredit__input--text"+(s[0]?" "+s[0]:"")),g(e,"type","text"),e.value=s[1]},m(o,i){k(o,e,i),s[6](e),n||(l=G(e,"input",s[7]),n=!0)},p(o,[i]){i&1&&t!==(t="c-coloredit__input--text"+(o[0]?" "+o[0]:""))&&g(e,"class",t),i&2&&e.value!==o[1]&&(e.value=o[1])},i:ee,o:ee,d(o){o&&v(e),s[6](null),n=!1,l()}}}function Vp(s,e,t){let{class:n=""}=e,{color:l="#000"}=e,o;function i(f){lo(f)&&t(4,l=f)}let r;function a(){r==null||r.focus()}function c(f){ze[f?"unshift":"push"](()=>{r=f,t(2,r)})}const u=f=>i(f.currentTarget.value);return s.$$set=f=>{"class"in f&&t(0,n=f.class),"color"in f&&t(4,l=f.color)},s.$$.update=()=>{s.$$.dirty&16&&t(1,o=lo(l)?l:"")},[n,o,r,i,l,a,c,u]}class Xp extends V{constructor(e){super(),Z(this,e,Vp,Zp,K,{class:0,color:4,focus:5})}get focus(){return this.$$.ctx[5]}}function Yp(s){let e,t,n,l,o,i,r,a,c,u,f,d,h;return{c(){e=_("input"),n=T(),l=_("input"),i=T(),r=_("input"),c=T(),u=_("input"),g(e,"class",t="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(e,"type","number"),g(e,"min","0"),g(e,"max","255"),g(e,"step","1"),e.value=s[1],g(l,"class",o="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(l,"type","number"),g(l,"min","0"),g(l,"max","255"),g(l,"step","1"),l.value=s[2],g(r,"class",a="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(r,"type","number"),g(r,"min","0"),g(r,"max","255"),g(r,"step","1"),r.value=s[3],g(u,"class",f="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(u,"type","number"),g(u,"min","0"),g(u,"max","1"),g(u,"step","0.01"),u.value=s[4]},m(m,b){k(m,e,b),s[8](e),k(m,n,b),k(m,l,b),k(m,i,b),k(m,r,b),k(m,c,b),k(m,u,b),d||(h=[G(e,"change",s[9]),G(l,"change",s[10]),G(r,"change",s[11]),G(u,"change",s[12])],d=!0)},p(m,[b]){b&1&&t!==(t="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(e,"class",t),b&2&&e.value!==m[1]&&(e.value=m[1]),b&1&&o!==(o="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(l,"class",o),b&4&&l.value!==m[2]&&(l.value=m[2]),b&1&&a!==(a="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(r,"class",a),b&8&&r.value!==m[3]&&(r.value=m[3]),b&1&&f!==(f="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(u,"class",f),b&16&&u.value!==m[4]&&(u.value=m[4])},i:ee,o:ee,d(m){m&&v(e),s[8](null),m&&v(n),m&&v(l),m&&v(i),m&&v(r),m&&v(c),m&&v(u),d=!1,Oe(h)}}}function Qp(s,e,t){let{class:n=""}=e,{color:l="#000"}=e,o,i,r,a;function c(E){var M;try{const S=Vn(E);t(1,o=S.r),t(2,i=S.g),t(3,r=S.b),t(4,a=(M=S.a)!=null?M:1)}catch(S){t(1,o=NaN),t(2,i=NaN),t(3,r=NaN),t(4,a=NaN)}}function u(E,M,S,N){[E,S,M,N!=null?N:1].every(P=>Number.isFinite(P))&&t(6,l=Ms({r:E,g:M,b:S,a:N}))}let f;function d(){f==null||f.focus()}function h(E){ze[E?"unshift":"push"](()=>{f=E,t(5,f)})}const m=E=>t(1,o=+E.currentTarget.value),b=E=>t(2,i=+E.currentTarget.value),$=E=>t(3,r=+E.currentTarget.value),y=E=>t(4,a=+E.currentTarget.value);return s.$$set=E=>{"class"in E&&t(0,n=E.class),"color"in E&&t(6,l=E.color)},s.$$.update=()=>{s.$$.dirty&64&&c(l),s.$$.dirty&30&&u(o,i,r,a)},[n,o,i,r,a,f,l,d,h,m,b,$,y]}class Jp extends V{constructor(e){super(),Z(this,e,Qp,Yp,K,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function em(s){let e,t,n,l,o,i,r,a,c,u,f,d,h;return{c(){e=_("input"),n=T(),l=_("input"),i=T(),r=_("input"),c=T(),u=_("input"),g(e,"class",t="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(e,"type","number"),g(e,"min","0"),g(e,"max","360"),g(e,"step","1"),e.value=s[1],g(l,"class",o="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(l,"type","number"),g(l,"min","0"),g(l,"max","100"),g(l,"step","1"),l.value=s[2],g(r,"class",a="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(r,"type","number"),g(r,"min","0"),g(r,"max","100"),g(r,"step","1"),r.value=s[3],g(u,"class",f="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),g(u,"type","number"),g(u,"min","0"),g(u,"max","1"),g(u,"step","0.01"),u.value=s[4]},m(m,b){k(m,e,b),s[8](e),k(m,n,b),k(m,l,b),k(m,i,b),k(m,r,b),k(m,c,b),k(m,u,b),d||(h=[G(e,"change",s[9]),G(l,"change",s[10]),G(r,"change",s[11]),G(u,"change",s[12])],d=!0)},p(m,[b]){b&1&&t!==(t="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(e,"class",t),b&2&&e.value!==m[1]&&(e.value=m[1]),b&1&&o!==(o="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(l,"class",o),b&4&&l.value!==m[2]&&(l.value=m[2]),b&1&&a!==(a="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(r,"class",a),b&8&&r.value!==m[3]&&(r.value=m[3]),b&1&&f!==(f="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(u,"class",f),b&16&&u.value!==m[4]&&(u.value=m[4])},i:ee,o:ee,d(m){m&&v(e),s[8](null),m&&v(n),m&&v(l),m&&v(i),m&&v(r),m&&v(c),m&&v(u),d=!1,Oe(h)}}}function tm(s,e,t){let{class:n=""}=e,{color:l="#000"}=e,o,i,r,a;function c(E){var M;try{const S=bp(E);t(1,o=S.h),t(2,i=S.s),t(3,r=S.l),t(4,a=(M=S.a)!=null?M:1)}catch(S){t(1,o=NaN),t(2,i=NaN),t(3,r=NaN),t(4,a=NaN)}}function u(E,M,S,N){[E,M,S,N!=null?N:1].every(P=>Number.isFinite(P))&&t(6,l=wp({h:E,s:M,l:S,a:N}))}let f;function d(){f==null||f.focus()}function h(E){ze[E?"unshift":"push"](()=>{f=E,t(5,f)})}const m=E=>t(1,o=+E.currentTarget.value),b=E=>t(2,i=+E.currentTarget.value),$=E=>t(3,r=+E.currentTarget.value),y=E=>t(4,a=+E.currentTarget.value);return s.$$set=E=>{"class"in E&&t(0,n=E.class),"color"in E&&t(6,l=E.color)},s.$$.update=()=>{s.$$.dirty&64&&c(l),s.$$.dirty&30&&u(o,i,r,a)},[n,o,i,r,a,f,l,d,h,m,b,$,y]}class nm extends V{constructor(e){super(),Z(this,e,tm,em,K,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function ao(s,e,t){const n=s.slice();return n[11]=e[t],n}function co(s){let e,t=s[11]+"",n;return{c(){e=_("span"),n=z(t),g(e,"class","c-color-edit__label")},m(l,o){k(l,e,o),p(e,n)},p(l,o){o&8&&t!==(t=l[11]+"")&&ke(n,t)},d(l){l&&v(e)}}}function sm(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b;function $(N){s[6](N)}var y=s[3].component;function E(N){let P={};return N[0]!==void 0&&(P.color=N[0]),{props:P}}y&&(n=new y(E(s)),ze.push(()=>At(n,"color",$)),s[7](n));let M=s[3].labels,S=[];for(let N=0;N<M.length;N+=1)S[N]=co(ao(s,M,N));return{c(){e=_("div"),t=_("div"),n&&R(n.$$.fragment),o=T();for(let N=0;N<S.length;N+=1)S[N].c();i=T(),r=_("div"),a=_("button"),c=T(),u=_("button"),g(t,"class","c-color-edit__values"),Ke(t,"--ce-columns",s[3].labels.length),g(a,"class","c-color-edit__button--up"),g(u,"class","c-color-edit__button--down"),g(r,"class","c-color-edit__buttons"),g(e,"class",f="c-color-edit"+(s[1]?" "+s[1]:"")),g(e,"style",d=s[2]||void 0)},m(N,P){k(N,e,P),p(e,t),n&&C(n,t,null),p(t,o);for(let O=0;O<S.length;O+=1)S[O].m(t,null);p(e,i),p(e,r),p(r,a),p(r,c),p(r,u),h=!0,m||(b=[G(a,"click",s[8]),G(u,"click",s[9])],m=!0)},p(N,[P]){const O={};if(!l&&P&1&&(l=!0,O.color=N[0],Dt(()=>l=!1)),y!==(y=N[3].component)){if(n){me();const L=n;x(L.$$.fragment,1,0,()=>{A(L,1)}),he()}y?(n=new y(E(N)),ze.push(()=>At(n,"color",$)),N[7](n),R(n.$$.fragment),w(n.$$.fragment,1),C(n,t,o)):n=null}else y&&n.$set(O);if(P&8){M=N[3].labels;let L;for(L=0;L<M.length;L+=1){const I=ao(N,M,L);S[L]?S[L].p(I,P):(S[L]=co(I),S[L].c(),S[L].m(t,null))}for(;L<S.length;L+=1)S[L].d(1);S.length=M.length}(!h||P&8)&&Ke(t,"--ce-columns",N[3].labels.length),(!h||P&2&&f!==(f="c-color-edit"+(N[1]?" "+N[1]:"")))&&g(e,"class",f),(!h||P&4&&d!==(d=N[2]||void 0))&&g(e,"style",d)},i(N){h||(n&&w(n.$$.fragment,N),h=!0)},o(N){n&&x(n.$$.fragment,N),h=!1},d(N){N&&v(e),s[7](null),n&&A(n),He(S,N),m=!1,Oe(b)}}}function lm(s,e,t){let{class:n=""}=e,{style:l=""}=e,{color:o="#000"}=e;const i=[{component:Xp,labels:["Hex"]},{component:Jp,labels:["R","G","B","A"]},{component:nm,labels:["H","S","L","A"]}];let r=i[0],a;function c(m){return Ve(this,null,function*(){let b=i.indexOf(r)+m;b<0?b=i.length-1:b>=i.length&&(b=0),t(3,r=i[b]),yield li(),a==null||a.focus()})}function u(m){o=m,t(0,o)}function f(m){ze[m?"unshift":"push"](()=>{a=m,t(4,a)})}const d=()=>c(-1),h=()=>c(1);return s.$$set=m=>{"class"in m&&t(1,n=m.class),"style"in m&&t(2,l=m.style),"color"in m&&t(0,o=m.color)},[o,n,l,r,a,c,u,f,d,h]}class Pi extends V{constructor(e){super(),Z(this,e,lm,sm,K,{class:1,style:2,color:0})}}function uo(s,e,t){const n=s.slice();return n[6]=e[t],n}function fo(s){let e,t=s[6]+"",n,l,o;function i(){return s[5](s[6])}return{c(){e=_("button"),n=z(t),g(e,"class","input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"),Ke(e,"background-color",s[6]),Ke(e,"color",oo(s[6])>.55?"inherit":"white")},m(r,a){k(r,e,a),p(e,n),l||(o=G(e,"click",i),l=!0)},p(r,a){s=r,a&2&&t!==(t=s[6]+"")&&ke(n,t),a&2&&Ke(e,"background-color",s[6]),a&2&&Ke(e,"color",oo(s[6])>.55?"inherit":"white")},d(r){r&&v(e),l=!1,o()}}}function om(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m=s[1],b=[];for(let $=0;$<m.length;$+=1)b[$]=fo(uo(s,m,$));return{c(){e=_("div"),t=_("span"),t.textContent="Set color",n=T(),l=_("a"),l.textContent="randomize alpha",o=T(),i=_("span"),i.textContent="\u2022",r=T(),a=_("a"),a.textContent="reset alpha",u=T(),f=_("div");for(let $=0;$<b.length;$+=1)b[$].c();g(l,"class","text-sm"),g(l,"href","javascript:void(0)"),g(i,"class","text-blue-500"),g(a,"class","text-sm"),g(a,"href","javascript:void(0)"),g(e,"class",c=s[0]||void 0)},m($,y){k($,e,y),p(e,t),p(e,n),p(e,l),p(e,o),p(e,i),p(e,r),p(e,a),k($,u,y),k($,f,y);for(let E=0;E<b.length;E+=1)b[E].m(f,null);d||(h=[G(l,"click",s[3]),G(a,"click",s[4])],d=!0)},p($,[y]){if(y&1&&c!==(c=$[0]||void 0)&&g(e,"class",c),y&6){m=$[1];let E;for(E=0;E<m.length;E+=1){const M=uo($,m,E);b[E]?b[E].p(M,y):(b[E]=fo(M),b[E].c(),b[E].m(f,null))}for(;E<b.length;E+=1)b[E].d(1);b.length=m.length}},i:ee,o:ee,d($){$&&v(e),$&&v(u),$&&v(f),He(b,$),d=!1,Oe(h)}}}function im(s){return Oi(s).map(e=>e+Math.floor(Math.random()*255).toString(16).padStart(2,"0"))}function Oi(s){return s.map(e=>e.slice(0,7))}function rm(s,e,t){const n=bs();let{class:l=""}=e,o=["#001219","#005F73","#0A9396","#94D2BD","#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226","#F72585","#B5179E","#7209B7","#560BAD","#480CA8","#3A0CA3","#3F37C9","#4361EE","#4895EF","#4CC9F0"];const i=()=>t(1,o=im(o)),r=()=>t(1,o=Oi(o)),a=c=>n("color",c);return s.$$set=c=>{"class"in c&&t(0,l=c.class)},[l,o,n,i,r,a]}class Ps extends V{constructor(e){super(),Z(this,e,rm,om,K,{class:0})}}function am(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P,O;function L(D){s[1](D)}let I={class:"basis-1/2 h-[256px] pt-2"};return s[0]!==void 0&&(I.color=s[0]),n=new Mi({props:I}),ze.push(()=>At(n,"color",L)),E=new Ps({props:{class:"mt-4"}}),E.$on("color",s[2]),P=new Ye({props:{code:`<script lang="ts">
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
</section>`}}),{c(){e=_("section"),t=_("div"),R(n.$$.fragment),o=T(),i=_("div"),r=_("div"),a=z("Current color: "),c=_("code"),u=z(s[0]),f=T(),d=_("div"),h=_("div"),m=_("div"),b=T(),$=_("div"),y=T(),R(E.$$.fragment),M=T(),S=_("h3"),S.textContent="Code",N=T(),R(P.$$.fragment),g(c,"class","uppercase"),g(m,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),g($,"class","absolute left-0 top-0 right-0 bottom-0"),Ke($,"background-color",s[0]),g(h,"class","relative h-[1.5em]"),g(d,"class","p-2 border rounded-md"),g(i,"class","basis-1/2"),g(t,"class","flex gap-8"),g(e,"class","prose max-w-none my-4")},m(D,F){k(D,e,F),p(e,t),C(n,t,null),p(t,o),p(t,i),p(i,r),p(r,a),p(r,c),p(c,u),p(i,f),p(i,d),p(d,h),p(h,m),p(h,b),p(h,$),p(i,y),C(E,i,null),p(e,M),p(e,S),p(e,N),C(P,e,null),O=!0},p(D,[F]){const q={};!l&&F&1&&(l=!0,q.color=D[0],Dt(()=>l=!1)),n.$set(q),(!O||F&1)&&ke(u,D[0]),(!O||F&1)&&Ke($,"background-color",D[0])},i(D){O||(w(n.$$.fragment,D),w(E.$$.fragment,D),w(P.$$.fragment,D),O=!0)},o(D){x(n.$$.fragment,D),x(E.$$.fragment,D),x(P.$$.fragment,D),O=!1},d(D){D&&v(e),A(n),A(E),A(P)}}}function cm(s,e,t){let n="#f70";function l(i){n=i,t(0,n)}return[n,l,({detail:i})=>t(0,n=i)]}class um extends V{constructor(e){super(),Z(this,e,cm,am,K,{})}}function fm(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P,O,L;function I(F){s[1](F)}let D={class:"w-full border shadow-md rounded-lg p-2"};return s[0]!==void 0&&(D.color=s[0]),l=new Pi({props:D}),ze.push(()=>At(l,"color",I)),M=new Ps({props:{class:"mt-4"}}),M.$on("color",s[2]),O=new Ye({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),t=_("div"),n=_("div"),R(l.$$.fragment),i=T(),r=_("div"),a=_("div"),c=z("Current color: "),u=_("code"),f=z(s[0]),d=T(),h=_("div"),m=_("div"),b=_("div"),$=T(),y=_("div"),E=T(),R(M.$$.fragment),S=T(),N=_("h3"),N.textContent="Code",P=T(),R(O.$$.fragment),g(n,"class","basis-1/2 inline-flex items-center"),g(u,"class","uppercase"),g(b,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),g(y,"class","absolute left-0 top-0 right-0 bottom-0"),Ke(y,"background-color",s[0]),g(m,"class","relative h-[1.5em]"),g(h,"class","p-2 border rounded-md"),g(r,"class","basis-1/2"),g(t,"class","flex gap-8"),g(e,"class","prose max-w-none my-4")},m(F,q){k(F,e,q),p(e,t),p(t,n),C(l,n,null),p(t,i),p(t,r),p(r,a),p(a,c),p(a,u),p(u,f),p(r,d),p(r,h),p(h,m),p(m,b),p(m,$),p(m,y),p(r,E),C(M,r,null),p(e,S),p(e,N),p(e,P),C(O,e,null),L=!0},p(F,[q]){const W={};!o&&q&1&&(o=!0,W.color=F[0],Dt(()=>o=!1)),l.$set(W),(!L||q&1)&&ke(f,F[0]),(!L||q&1)&&Ke(y,"background-color",F[0])},i(F){L||(w(l.$$.fragment,F),w(M.$$.fragment,F),w(O.$$.fragment,F),L=!0)},o(F){x(l.$$.fragment,F),x(M.$$.fragment,F),x(O.$$.fragment,F),L=!1},d(F){F&&v(e),A(l),A(M),A(O)}}}function dm(s,e,t){let n="#f70";function l(i){n=i,t(0,n)}return[n,l,({detail:i})=>t(0,n=i)]}class pm extends V{constructor(e){super(),Z(this,e,dm,fm,K,{})}}function gn(s){return s.split("-")[0]}function _n(s){return s.split("-")[1]}function Xn(s){return["top","bottom"].includes(gn(s))?"x":"y"}function Os(s){return s==="y"?"height":"width"}function po(s,e,t){let{reference:n,floating:l}=s;const o=n.x+n.width/2-l.width/2,i=n.y+n.height/2-l.height/2,r=Xn(e),a=Os(r),c=n[a]/2-l[a]/2,u=gn(e),f=r==="x";let d;switch(u){case"top":d={x:o,y:n.y-l.height};break;case"bottom":d={x:o,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:i};break;case"left":d={x:n.x-l.width,y:i};break;default:d={x:n.x,y:n.y}}switch(_n(e)){case"start":d[r]-=c*(t&&f?-1:1);break;case"end":d[r]+=c*(t&&f?-1:1);break}return d}const mm=(s,e,t)=>Ve(void 0,null,function*(){const{placement:n="bottom",strategy:l="absolute",middleware:o=[],platform:i}=t,r=yield i.isRTL==null?void 0:i.isRTL(e);let a=yield i.getElementRects({reference:s,floating:e,strategy:l}),{x:c,y:u}=po(a,n,r),f=n,d={},h=0;for(let m=0;m<o.length;m++){const{name:b,fn:$}=o[m],{x:y,y:E,data:M,reset:S}=yield $({x:c,y:u,initialPlacement:n,placement:f,strategy:l,middlewareData:d,rects:a,platform:i,elements:{reference:s,floating:e}});if(c=y!=null?y:c,u=E!=null?E:u,d=Gt(Ue({},d),{[b]:Ue(Ue({},d[b]),M)}),S&&h<=50){h++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(a=S.rects===!0?yield i.getElementRects({reference:s,floating:e,strategy:l}):S.rects),{x:c,y:u}=po(a,f,r)),m=-1;continue}}return{x:c,y:u,placement:f,strategy:l,middlewareData:d}});function hm(s){return Ue({top:0,right:0,bottom:0,left:0},s)}function Li(s){return typeof s!="number"?hm(s):{top:s,right:s,bottom:s,left:s}}function Un(s){return Gt(Ue({},s),{top:s.y,left:s.x,right:s.x+s.width,bottom:s.y+s.height})}function Ii(s,e){return Ve(this,null,function*(){var t;e===void 0&&(e={});const{x:n,y:l,platform:o,rects:i,elements:r,strategy:a}=s,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:h=0}=e,m=Li(h),$=r[d?f==="floating"?"reference":"floating":f],y=Un(yield o.getClippingRect({element:(t=yield o.isElement==null?void 0:o.isElement($))==null||t?$:$.contextElement||(yield o.getDocumentElement==null?void 0:o.getDocumentElement(r.floating)),boundary:c,rootBoundary:u,strategy:a})),E=Un(o.convertOffsetParentRelativeRectToViewportRelativeRect?yield o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f==="floating"?Gt(Ue({},i.floating),{x:n,y:l}):i.reference,offsetParent:yield o.getOffsetParent==null?void 0:o.getOffsetParent(r.floating),strategy:a}):i[f]);return{top:y.top-E.top+m.top,bottom:E.bottom-y.bottom+m.bottom,left:y.left-E.left+m.left,right:E.right-y.right+m.right}})}const gm=Math.min,Lt=Math.max;function _m(s,e,t){return Lt(s,gm(e,t))}const Di=s=>({name:"arrow",options:s,fn(t){return Ve(this,null,function*(){const{element:n,padding:l=0}=s!=null?s:{},{x:o,y:i,placement:r,rects:a,platform:c}=t;if(n==null)return{};const u=Li(l),f={x:o,y:i},d=Xn(r),h=_n(r),m=Os(d),b=yield c.getDimensions(n),$=d==="y"?"top":"left",y=d==="y"?"bottom":"right",E=a.reference[m]+a.reference[d]-f[d]-a.floating[m],M=f[d]-a.reference[d],S=yield c.getOffsetParent==null?void 0:c.getOffsetParent(n);let N=S?d==="y"?S.clientHeight||0:S.clientWidth||0:0;N===0&&(N=a.floating[m]);const P=E/2-M/2,O=u[$],L=N-b[m]-u[y],I=N/2-b[m]/2+P,D=_m(O,I,L),W=(h==="start"?u[$]:u[y])>0&&I!==D&&a.reference[m]<=a.floating[m]?I<O?O-I:L-I:0;return{[d]:f[d]-W,data:{[d]:D,centerOffset:I-D}}})}}),bm={left:"right",right:"left",bottom:"top",top:"bottom"};function qn(s){return s.replace(/left|right|bottom|top/g,e=>bm[e])}function $m(s,e,t){t===void 0&&(t=!1);const n=_n(s),l=Xn(s),o=Os(l);let i=l==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(i=qn(i)),{main:i,cross:qn(i)}}const vm={start:"end",end:"start"};function mo(s){return s.replace(/start|end/g,e=>vm[e])}function wm(s){const e=qn(s);return[mo(s),e,mo(e)]}const Yn=function(s){return s===void 0&&(s={}),{name:"flip",options:s,fn(t){return Ve(this,null,function*(){var n;const{placement:l,middlewareData:o,rects:i,initialPlacement:r,platform:a,elements:c}=t,D=s,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:h="bestFit",flipAlignment:m=!0}=D,b=ss(D,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),$=gn(l),E=d||($===r||!m?[qn(r)]:wm(r)),M=[r,...E],S=yield Ii(t,b),N=[];let P=((n=o.flip)==null?void 0:n.overflows)||[];if(u&&N.push(S[$]),f){const{main:F,cross:q}=$m(l,i,yield a.isRTL==null?void 0:a.isRTL(c.floating));N.push(S[F],S[q])}if(P=[...P,{placement:l,overflows:N}],!N.every(F=>F<=0)){var O,L;const F=((O=(L=o.flip)==null?void 0:L.index)!=null?O:0)+1,q=M[F];if(q)return{data:{index:F,overflows:P},reset:{placement:q}};let W="bottom";switch(h){case"bestFit":{var I;const se=(I=P.map(Q=>[Q,Q.overflows.filter(B=>B>0).reduce((B,U)=>B+U,0)]).sort((Q,B)=>Q[1]-B[1])[0])==null?void 0:I[0].placement;se&&(W=se);break}case"initialPlacement":W=r;break}if(l!==W)return{reset:{placement:W}}}return{}})}}};function km(s,e){return Ve(this,null,function*(){const{placement:t,platform:n,elements:l}=s,o=yield n.isRTL==null?void 0:n.isRTL(l.floating),i=gn(t),r=_n(t),a=Xn(t)==="x",c=["left","top"].includes(i)?-1:1,u=o&&a?-1:1,f=typeof e=="function"?e(s):e;let{mainAxis:d,crossAxis:h,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:Ue({mainAxis:0,crossAxis:0,alignmentAxis:null},f);return r&&typeof m=="number"&&(h=r==="end"?m*-1:m),a?{x:h*u,y:d*c}:{x:d*c,y:h*u}})}const Qn=function(s){return s===void 0&&(s=0),{name:"offset",options:s,fn(t){return Ve(this,null,function*(){const{x:n,y:l}=t,o=yield km(t,s);return{x:n+o.x,y:l+o.y,data:o}})}}},Bi=function(s){return s===void 0&&(s={}),{name:"size",options:s,fn(t){return Ve(this,null,function*(){const{placement:n,rects:l,platform:o,elements:i}=t,S=s,{apply:r=()=>{}}=S,a=ss(S,["apply"]),c=yield Ii(t,a),u=gn(n),f=_n(n);let d,h;u==="top"||u==="bottom"?(d=u,h=f===((yield o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(h=u,d=f==="end"?"top":"bottom");const m=Lt(c.left,0),b=Lt(c.right,0),$=Lt(c.top,0),y=Lt(c.bottom,0),E={availableHeight:l.floating.height-(["left","right"].includes(n)?2*($!==0||y!==0?$+y:Lt(c.top,c.bottom)):c[d]),availableWidth:l.floating.width-(["top","bottom"].includes(n)?2*(m!==0||b!==0?m+b:Lt(c.left,c.right)):c[h])};yield r(Ue(Ue({},t),E));const M=yield o.getDimensions(i.floating);return l.floating.width!==M.width||l.floating.height!==M.height?{reset:{rects:!0}}:{}})}}};function zi(s){return s&&s.document&&s.location&&s.alert&&s.setInterval}function Tt(s){if(s==null)return window;if(!zi(s)){const e=s.ownerDocument;return e&&e.defaultView||window}return s}function Rt(s){return Tt(s).getComputedStyle(s)}function kt(s){return zi(s)?"":s?(s.nodeName||"").toLowerCase():""}function Fi(){const s=navigator.userAgentData;return s!=null&&s.brands?s.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function $t(s){return s instanceof Tt(s).HTMLElement}function Nt(s){return s instanceof Tt(s).Element}function ym(s){return s instanceof Tt(s).Node}function Kn(s){if(typeof ShadowRoot=="undefined")return!1;const e=Tt(s).ShadowRoot;return s instanceof e||s instanceof ShadowRoot}function Jn(s){const{overflow:e,overflowX:t,overflowY:n}=Rt(s);return/auto|scroll|overlay|hidden/.test(e+n+t)}function Tm(s){return["table","td","th"].includes(kt(s))}function Hi(s){const e=/firefox/i.test(Fi()),t=Rt(s);return t.transform!=="none"||t.perspective!=="none"||t.contain==="paint"||["transform","perspective"].includes(t.willChange)||e&&t.willChange==="filter"||e&&(t.filter?t.filter!=="none":!1)}function ji(){return!/^((?!chrome|android).)*safari/i.test(Fi())}const ho=Math.min,cn=Math.max,Wn=Math.round;function yt(s,e,t){var n,l,o,i;e===void 0&&(e=!1),t===void 0&&(t=!1);const r=s.getBoundingClientRect();let a=1,c=1;e&&$t(s)&&(a=s.offsetWidth>0&&Wn(r.width)/s.offsetWidth||1,c=s.offsetHeight>0&&Wn(r.height)/s.offsetHeight||1);const u=Nt(s)?Tt(s):window,f=!ji()&&t,d=(r.left+(f&&(n=(l=u.visualViewport)==null?void 0:l.offsetLeft)!=null?n:0))/a,h=(r.top+(f&&(o=(i=u.visualViewport)==null?void 0:i.offsetTop)!=null?o:0))/c,m=r.width/a,b=r.height/c;return{width:m,height:b,top:h,right:d+m,bottom:h+b,left:d,x:d,y:h}}function Ot(s){return((ym(s)?s.ownerDocument:s.document)||window.document).documentElement}function es(s){return Nt(s)?{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}:{scrollLeft:s.pageXOffset,scrollTop:s.pageYOffset}}function Ui(s){return yt(Ot(s)).left+es(s).scrollLeft}function xm(s){const e=yt(s);return Wn(e.width)!==s.offsetWidth||Wn(e.height)!==s.offsetHeight}function Em(s,e,t){const n=$t(e),l=Ot(e),o=yt(s,n&&xm(e),t==="fixed");let i={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(n||!n&&t!=="fixed")if((kt(e)!=="body"||Jn(l))&&(i=es(e)),$t(e)){const a=yt(e,!0);r.x=a.x+e.clientLeft,r.y=a.y+e.clientTop}else l&&(r.x=Ui(l));return{x:o.left+i.scrollLeft-r.x,y:o.top+i.scrollTop-r.y,width:o.width,height:o.height}}function qi(s){return kt(s)==="html"?s:s.assignedSlot||s.parentNode||(Kn(s)?s.host:null)||Ot(s)}function go(s){return!$t(s)||Rt(s).position==="fixed"?null:s.offsetParent}function Sm(s){let e=qi(s);for(Kn(e)&&(e=e.host);$t(e)&&!["html","body"].includes(kt(e));){if(Hi(e))return e;{const t=e.parentNode;e=Kn(t)?t.host:t}}return null}function gs(s){const e=Tt(s);let t=go(s);for(;t&&Tm(t)&&Rt(t).position==="static";)t=go(t);return t&&(kt(t)==="html"||kt(t)==="body"&&Rt(t).position==="static"&&!Hi(t))?e:t||Sm(s)||e}function _o(s){if($t(s))return{width:s.offsetWidth,height:s.offsetHeight};const e=yt(s);return{width:e.width,height:e.height}}function Cm(s){let{rect:e,offsetParent:t,strategy:n}=s;const l=$t(t),o=Ot(t);if(t===o)return e;let i={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if((l||!l&&n!=="fixed")&&((kt(t)!=="body"||Jn(o))&&(i=es(t)),$t(t))){const a=yt(t,!0);r.x=a.x+t.clientLeft,r.y=a.y+t.clientTop}return Gt(Ue({},e),{x:e.x-i.scrollLeft+r.x,y:e.y-i.scrollTop+r.y})}function Am(s,e){const t=Tt(s),n=Ot(s),l=t.visualViewport;let o=n.clientWidth,i=n.clientHeight,r=0,a=0;if(l){o=l.width,i=l.height;const c=ji();(c||!c&&e==="fixed")&&(r=l.offsetLeft,a=l.offsetTop)}return{width:o,height:i,x:r,y:a}}function Rm(s){var e;const t=Ot(s),n=es(s),l=(e=s.ownerDocument)==null?void 0:e.body,o=cn(t.scrollWidth,t.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),i=cn(t.scrollHeight,t.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0);let r=-n.scrollLeft+Ui(s);const a=-n.scrollTop;return Rt(l||t).direction==="rtl"&&(r+=cn(t.clientWidth,l?l.clientWidth:0)-o),{width:o,height:i,x:r,y:a}}function Ki(s){const e=qi(s);return["html","body","#document"].includes(kt(e))?s.ownerDocument.body:$t(e)&&Jn(e)?e:Ki(e)}function Gn(s,e){var t;e===void 0&&(e=[]);const n=Ki(s),l=n===((t=s.ownerDocument)==null?void 0:t.body),o=Tt(n),i=l?[o].concat(o.visualViewport||[],Jn(n)?n:[]):n,r=e.concat(i);return l?r:r.concat(Gn(i))}function Nm(s,e){const t=e.getRootNode==null?void 0:e.getRootNode();if(s.contains(e))return!0;if(t&&Kn(t)){let n=e;do{if(n&&s===n)return!0;n=n.parentNode||n.host}while(n)}return!1}function Mm(s,e){const t=yt(s,!1,e==="fixed"),n=t.top+s.clientTop,l=t.left+s.clientLeft;return{top:n,left:l,x:l,y:n,right:l+s.clientWidth,bottom:n+s.clientHeight,width:s.clientWidth,height:s.clientHeight}}function bo(s,e,t){return e==="viewport"?Un(Am(s,t)):Nt(e)?Mm(e,t):Un(Rm(Ot(s)))}function Pm(s){const e=Gn(s),n=["absolute","fixed"].includes(Rt(s).position)&&$t(s)?gs(s):s;return Nt(n)?e.filter(l=>Nt(l)&&Nm(l,n)&&kt(l)!=="body"):[]}function Om(s){let{element:e,boundary:t,rootBoundary:n,strategy:l}=s;const i=[...t==="clippingAncestors"?Pm(e):[].concat(t),n],r=i[0],a=i.reduce((c,u)=>{const f=bo(e,u,l);return c.top=cn(f.top,c.top),c.right=ho(f.right,c.right),c.bottom=ho(f.bottom,c.bottom),c.left=cn(f.left,c.left),c},bo(e,r,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}const Lm={getClippingRect:Om,convertOffsetParentRelativeRectToViewportRelativeRect:Cm,isElement:Nt,getDimensions:_o,getOffsetParent:gs,getDocumentElement:Ot,getElementRects:s=>{let{reference:e,floating:t,strategy:n}=s;return{reference:Em(e,gs(t),n),floating:Gt(Ue({},_o(t)),{x:0,y:0})}},getClientRects:s=>Array.from(s.getClientRects()),isRTL:s=>Rt(s).direction==="rtl"};function Im(s,e,t,n){n===void 0&&(n={});const{ancestorScroll:l=!0,ancestorResize:o=!0,elementResize:i=!0,animationFrame:r=!1}=n,a=l&&!r,c=o&&!r,u=a||c?[...Nt(s)?Gn(s):[],...Gn(e)]:[];u.forEach(b=>{a&&b.addEventListener("scroll",t,{passive:!0}),c&&b.addEventListener("resize",t)});let f=null;if(i){let b=!0;f=new ResizeObserver(()=>{b||t(),b=!1}),Nt(s)&&!r&&f.observe(s),f.observe(e)}let d,h=r?yt(s):null;r&&m();function m(){const b=yt(s);h&&(b.x!==h.x||b.y!==h.y||b.width!==h.width||b.height!==h.height)&&t(),h=b,d=requestAnimationFrame(m)}return t(),()=>{var b;u.forEach($=>{a&&$.removeEventListener("scroll",t),c&&$.removeEventListener("resize",t)}),(b=f)==null||b.disconnect(),f=null,r&&cancelAnimationFrame(d)}}const Dm=(s,e,t)=>mm(s,e,Ue({platform:Lm},t));function ts(s){const e={enable:!1,options:void 0,cleanup:null},t={reference:null,floating:null,options:void 0};n(s);function n(c){c===!0?(e.enable=!0,l()):c===!1?(o(),e.enable=!1):(l(),e.enable=!0,e.options=c)}function l(){o(),t.reference&&t.floating&&e.enable&&(e.cleanup=Im(t.reference,t.floating,i,e.options))}function o(){e.cleanup!=null&&(e.cleanup(),e.cleanup=null)}function i(){return Ve(this,null,function*(){if(t.reference&&t.floating){const{reference:c,floating:u,options:f}=t,d=yield Dm(c,u,f);Object.assign(u.style,{position:d.strategy,left:`${d.x}px`,top:`${d.y}px`}),f!=null&&f.callback&&f.callback(d,{reference:c,floating:u})}})}function r(c){return t.reference=c,e.enable?l():i(),{destroy(){o(),t.reference=null}}}function a(c,u){return t.floating=c,t.options=u,e.enable?l():i(),{update(f){o(),t.options=f,e.enable?l():i()},destroy(){o(),t.floating=null,t.options=void 0}}}return[r,a,n]}function hn(s,e){let t,n;[t,n]=e!=null?e:[];function l(i){t&&s.contains(i.target)&&t(i)}function o(i){n&&!s.contains(i.relatedTarget)&&n(i)}return s.addEventListener("focusin",l),s.addEventListener("focusout",o),{update(i){[t,n]=i!=null?i:[]},destroy(){s.removeEventListener("focusout",o),s.removeEventListener("focusin",l)}}}function $o(s){let e,t,n,l,o,i,r,a,c,u,f,d;function h(y){s[5](y)}let m={class:"h-48 p-3",style:"--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"};s[0]!==void 0&&(m.color=s[0]),t=new Mi({props:m}),ze.push(()=>At(t,"color",h));function b(y){s[6](y)}let $={class:"p-3 text-sm"};return s[0]!==void 0&&($.color=s[0]),r=new Pi({props:$}),ze.push(()=>At(r,"color",b)),{c(){e=_("div"),R(t.$$.fragment),l=T(),o=_("div"),i=T(),R(r.$$.fragment),g(o,"class","border-t"),g(e,"class","absolute w-[240px] border rounded-lg bg-white shadow-lg")},m(y,E){k(y,e,E),C(t,e,null),p(e,l),p(e,o),p(e,i),C(r,e,null),u=!0,f||(d=je(s[3].call(null,e,{placement:"bottom-start",middleware:[Yn(),Qn(8)]})),f=!0)},p(y,E){const M={};!n&&E&1&&(n=!0,M.color=y[0],Dt(()=>n=!1)),t.$set(M);const S={};!a&&E&1&&(a=!0,S.color=y[0],Dt(()=>a=!1)),r.$set(S)},i(y){u||(w(t.$$.fragment,y),w(r.$$.fragment,y),y&&lt(()=>{c||(c=Ct(e,en,{},!0)),c.run(1)}),u=!0)},o(y){x(t.$$.fragment,y),x(r.$$.fragment,y),y&&(c||(c=Ct(e,en,{},!1)),c.run(0)),u=!1},d(y){y&&v(e),A(t),A(r),y&&c&&c.end(),f=!1,d()}}}function Bm(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P,O,L,I,D,F,q,W,se,Q=s[1]&&$o(s);return O=new Ps({props:{class:"mt-4"}}),O.$on("color",s[8]),F=new Ye({props:{code:`<script lang="ts">
<\/script>

<section class="prose max-w-none my-4">
</section>

<style lang="postcss">
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML=`This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a> and
    <a href="/focus-action"><code>@apsc/flocus-action</code></a>`,n=T(),l=_("div"),o=_("div"),i=_("div"),i.textContent="Click this button to pick a color",r=T(),a=_("div"),c=_("button"),u=_("span"),f=T(),Q&&Q.c(),h=T(),m=_("div"),b=_("div"),$=z("Current color: "),y=_("code"),E=z(s[0]),M=T(),S=_("div"),N=_("div"),P=T(),R(O.$$.fragment),L=T(),I=_("h3"),I.textContent="Code",D=T(),R(F.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(u,"class","block border h-[22px] w-[10ch] bg-chess"),Ke(u,"background","linear-gradient(to right, "+s[0]+" 0, "+s[0]+" 100%), var(--bg-chess-background)"),g(c,"class","input py-1"),g(o,"class","basis-1/2"),g(y,"class","uppercase"),g(N,"class","h-[1.5em] bg-chess"),Ke(N,"background","linear-gradient(to right, "+s[0]+" 0, "+s[0]+" 100%), var(--bg-chess-background)"),g(S,"class","p-2 border rounded-md"),g(m,"class","basis-1/2"),g(l,"class","flex gap-8"),g(e,"class","prose max-w-none my-4")},m(B,U){k(B,e,U),p(e,t),p(e,n),p(e,l),p(l,o),p(o,i),p(o,r),p(o,a),p(a,c),p(c,u),p(a,f),Q&&Q.m(a,null),p(l,h),p(l,m),p(m,b),p(b,$),p(b,y),p(y,E),p(m,M),p(m,S),p(S,N),p(m,P),C(O,m,null),p(e,L),p(e,I),p(e,D),C(F,e,null),q=!0,W||(se=[je(s[2].call(null,c)),G(c,"click",s[4]),je(d=hn.call(null,a,[void 0,s[7]]))],W=!0)},p(B,[U]){(!q||U&1)&&Ke(u,"background","linear-gradient(to right, "+B[0]+" 0, "+B[0]+" 100%), var(--bg-chess-background)"),B[1]?Q?(Q.p(B,U),U&2&&w(Q,1)):(Q=$o(B),Q.c(),w(Q,1),Q.m(a,null)):Q&&(me(),x(Q,1,1,()=>{Q=null}),he()),d&&Xe(d.update)&&U&2&&d.update.call(null,[void 0,B[7]]),(!q||U&1)&&ke(E,B[0]),(!q||U&1)&&Ke(N,"background","linear-gradient(to right, "+B[0]+" 0, "+B[0]+" 100%), var(--bg-chess-background)")},i(B){q||(w(Q),w(O.$$.fragment,B),w(F.$$.fragment,B),q=!0)},o(B){x(Q),x(O.$$.fragment,B),x(F.$$.fragment,B),q=!1},d(B){B&&v(e),Q&&Q.d(),A(O),A(F),W=!1,Oe(se)}}}function zm(s,e,t){const[n,l]=ts(!0);let o="#f70",i=!1;const r=()=>t(1,i=!i);function a(d){o=d,t(0,o)}function c(d){o=d,t(0,o)}return[o,i,n,l,r,a,c,()=>t(1,i=!1),({detail:d})=>t(0,o=d)]}class Fm extends V{constructor(e){super(),Z(this,e,zm,Bm,K,{})}}const{document:vo}=Pt;function Hm(s){let e;return{c(){e=z("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function jm(s){let e;return{c(){e=z("ColorPicker example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Um(s){let e;return{c(){e=z("ColorEdit example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function qm(s){let e;return{c(){e=z("Color input Example")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Km(s){let e,t,n,l,o,i,r,a;return e=new pe({props:{$$slots:{default:[Hm]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[jm]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[Um]},$$scope:{ctx:s}}}),r=new pe({props:{$$slots:{default:[qm]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,l,u),C(o,c,u),k(c,i,u),C(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),o.$set(h);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(w(e.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(r.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(o.$$.fragment,c),x(r.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(l),A(o,c),c&&v(i),A(r,c)}}}function Wm(s){let e,t;return e=new _p({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Gm(s){let e,t;return e=new um({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Zm(s){let e,t;return e=new pm({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Vm(s){let e,t;return e=new Fm({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Xm(s){let e,t,n,l,o,i,r,a,c,u;return e=new it({props:{$$slots:{default:[Km]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[Wm]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[Gm]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[Zm]},$$scope:{ctx:s}}}),c=new de({props:{$$slots:{default:[Vm]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment),a=T(),R(c.$$.fragment)},m(f,d){C(e,f,d),k(f,t,d),C(n,f,d),k(f,l,d),C(o,f,d),k(f,i,d),C(r,f,d),k(f,a,d),C(c,f,d),u=!0},p(f,d){const h={};d&1&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),n.$set(m);const b={};d&1&&(b.$$scope={dirty:d,ctx:f}),o.$set(b);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),r.$set($);const y={};d&1&&(y.$$scope={dirty:d,ctx:f}),c.$set(y)},i(f){u||(w(e.$$.fragment,f),w(n.$$.fragment,f),w(o.$$.fragment,f),w(r.$$.fragment,f),w(c.$$.fragment,f),u=!0)},o(f){x(e.$$.fragment,f),x(n.$$.fragment,f),x(o.$$.fragment,f),x(r.$$.fragment,f),x(c.$$.fragment,f),u=!1},d(f){A(e,f),f&&v(t),A(n,f),f&&v(l),A(o,f),f&&v(i),A(r,f),f&&v(a),A(c,f)}}}function Ym(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b;return vo.title=e=document.title.replace(/(•).*$/,"$1 Color"),m=new ot({props:{$$slots:{default:[Xm]},$$scope:{ctx:s}}}),{c(){t=T(),n=_("section"),l=_("a"),l.textContent="Home",o=T(),i=_("h1"),i.textContent="A set of components for picking and editing colors",r=T(),a=_("a"),c=_("img"),f=T(),d=_("ul"),d.innerHTML=`<li>no inline styles</li> 
    <li>the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts" target="_blank">utils.d.ts</a> for definitions of types and functions</li>`,h=T(),R(m.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl"),g(c,"class","max-w-[4em]"),Ge(c.src,u=et)||g(c,"src",u),g(c,"alt","NPM logo"),g(a,"class","float-right"),g(a,"href","https://www.npmjs.com/package/@apsc/color"),g(a,"target","_blank"),g(d,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m($,y){k($,t,y),k($,n,y),p(n,l),p(n,o),p(n,i),p(n,r),p(n,a),p(a,c),p(n,f),p(n,d),p(n,h),C(m,n,null),b=!0},p($,[y]){(!b||y&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Color"))&&(vo.title=e);const E={};y&1&&(E.$$scope={dirty:y,ctx:$}),m.$set(E)},i($){b||(w(m.$$.fragment,$),b=!0)},o($){x(m.$$.fragment,$),b=!1},d($){$&&v(t),$&&v(n),A(m)}}}class Qm extends V{constructor(e){super(),Z(this,e,null,Ym,K,{})}}const wo=`# [Floating UI](https://floating-ui.com/) action for \`use\` Svelte directive

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
`;function Jm(s){let e,t,n;return t=new Ht({props:{source:wo.slice(wo.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),g(e,"class","documentation")},m(l,o){k(l,e,o),C(t,e,null),n=!0},p:ee,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){x(t.$$.fragment,l),n=!1},d(l){l&&v(e),A(t)}}}class eh extends V{constructor(e){super(),Z(this,e,null,Jm,K,{})}}function ko(s,e,t){const n=s.slice();return n[20]=e[t],n}function yo(s,e,t){const n=s.slice();return n[23]=e[t],n}function To(s){let e,t=s[23]+"",n;return{c(){e=_("option"),n=z(t),e.__value=s[23],e.value=e.__value},m(l,o){k(l,e,o),p(e,n)},p:ee,d(l){l&&v(e)}}}function xo(s){let e,t=s[20]+"",n;return{c(){e=_("option"),n=z(t),e.__value=s[12][s[20]],e.value=e.__value},m(l,o){k(l,e,o),p(e,n)},p:ee,d(l){l&&v(e)}}}function Eo(s){let e,t,n,l,o,i,r,a;return{c(){e=_("div"),t=_("div"),n=z(`
        Lorem ipsum dolor sit amet consectetur adipisicing elit`),g(t,"class","arrow svelte-1b5318a"),g(e,"class","tooltip not-prose svelte-1b5318a")},m(c,u){k(c,e,u),p(e,t),s[19](t),p(e,n),i=!0,r||(a=je(l=s[9].call(null,e,{placement:s[5],middleware:s[6],callback:s[10]})),r=!0)},p(c,u){l&&Xe(l.update)&&u&96&&l.update.call(null,{placement:c[5],middleware:c[6],callback:c[10]})},i(c){i||(c&&lt(()=>{o||(o=Ct(e,s[7],{},!0)),o.run(1)}),i=!0)},o(c){c&&(o||(o=Ct(e,s[7],{},!1)),o.run(0)),i=!1},d(c){c&&v(e),s[19](null),c&&o&&o.end(),r=!1,a()}}}function th(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P,O,L,I,D,F,q,W,se,Q=s[4]?"hide":"show",B,U,J,oe,ue,ce,Pe,Ie,ye,$e=s[11],ne=[];for(let te=0;te<$e.length;te+=1)ne[te]=To(yo(s,$e,te));let Te=Object.keys(s[12]),_e=[];for(let te=0;te<Te.length;te+=1)_e[te]=xo(ko(s,Te,te));let ge=s[4]&&Eo(s);return ce=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=_("section"),t=_("div"),n=_("label"),l=_("span"),l.textContent="placement",o=T(),i=_("select");for(let te=0;te<ne.length;te+=1)ne[te].c();r=T(),a=_("label"),c=_("input"),u=T(),f=_("span"),f.textContent="flip",d=T(),h=_("label"),m=_("span"),m.textContent="offset",b=T(),$=_("input"),y=T(),E=_("label"),M=_("span"),M.textContent="size padding",S=T(),N=_("input"),P=T(),O=_("label"),L=_("span"),L.textContent="transition",I=T(),D=_("select");for(let te=0;te<_e.length;te+=1)_e[te].c();F=T(),q=_("div"),W=_("button"),se=z("Click me to "),B=z(Q),U=T(),ge&&ge.c(),J=T(),oe=_("h3"),oe.textContent="Code",ue=T(),R(ce.$$.fragment),g(i,"class","input"),s[5]===void 0&&lt(()=>s[13].call(i)),g(c,"type","checkbox"),g(a,"class","whitespace-nowrap"),g($,"type","number"),g($,"class","input w-[8ch]"),g(N,"type","number"),g(N,"class","input w-[8ch]"),g(D,"class","input"),s[7]===void 0&&lt(()=>s[17].call(D)),g(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),g(W,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),g(q,"class","h-64 flex items-center justify-center border"),g(e,"class","prose max-w-none my-4")},m(te,xe){k(te,e,xe),p(e,t),p(t,n),p(n,l),p(n,o),p(n,i);for(let Se=0;Se<ne.length;Se+=1)ne[Se].m(i,null);gt(i,s[5]),p(t,r),p(t,a),p(a,c),c.checked=s[2],p(a,u),p(a,f),p(t,d),p(t,h),p(h,m),p(h,b),p(h,$),tt($,s[1]),p(t,y),p(t,E),p(E,M),p(E,S),p(E,N),tt(N,s[3]),p(t,P),p(t,O),p(O,L),p(O,I),p(O,D);for(let Se=0;Se<_e.length;Se+=1)_e[Se].m(D,null);gt(D,s[7]),p(e,F),p(e,q),p(q,W),p(W,se),p(W,B),p(q,U),ge&&ge.m(q,null),p(e,J),p(e,oe),p(e,ue),C(ce,e,null),Pe=!0,Ie||(ye=[G(i,"change",s[13]),G(c,"change",s[14]),G($,"input",s[15]),G(N,"input",s[16]),G(D,"change",s[17]),je(s[8].call(null,W)),G(W,"click",s[18])],Ie=!0)},p(te,[xe]){if(xe&2048){$e=te[11];let ve;for(ve=0;ve<$e.length;ve+=1){const Ee=yo(te,$e,ve);ne[ve]?ne[ve].p(Ee,xe):(ne[ve]=To(Ee),ne[ve].c(),ne[ve].m(i,null))}for(;ve<ne.length;ve+=1)ne[ve].d(1);ne.length=$e.length}if(xe&2080&&gt(i,te[5]),xe&4&&(c.checked=te[2]),xe&2&&at($.value)!==te[1]&&tt($,te[1]),xe&8&&at(N.value)!==te[3]&&tt(N,te[3]),xe&4096){Te=Object.keys(te[12]);let ve;for(ve=0;ve<Te.length;ve+=1){const Ee=ko(te,Te,ve);_e[ve]?_e[ve].p(Ee,xe):(_e[ve]=xo(Ee),_e[ve].c(),_e[ve].m(D,null))}for(;ve<_e.length;ve+=1)_e[ve].d(1);_e.length=Te.length}xe&4224&&gt(D,te[7]),(!Pe||xe&16)&&Q!==(Q=te[4]?"hide":"show")&&ke(B,Q),te[4]?ge?(ge.p(te,xe),xe&16&&w(ge,1)):(ge=Eo(te),ge.c(),w(ge,1),ge.m(q,null)):ge&&(me(),x(ge,1,1,()=>{ge=null}),he());const Se={};xe&160&&(Se.code=`<script lang="ts"
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
</style>`),ce.$set(Se)},i(te){Pe||(w(ge),w(ce.$$.fragment,te),Pe=!0)},o(te){x(ge),x(ce.$$.fragment,te),Pe=!1},d(te){te&&v(e),He(ne,te),He(_e,te),ge&&ge.d(),A(ce),Ie=!1,Oe(ye)}}}function nh(s,e,t){const[n,l]=ts(!0);let o,i=!1;function r(O){const{placement:L,middlewareData:I}=O;if(I.arrow){const{x:D,y:F}=I.arrow,q={top:"bottom",right:"left",bottom:"top",left:"right"}[L.split("-")[0]];q&&Object.assign(o.style,{left:D!=null?`${D}px`:"",top:F!=null?`${F}px`:"",right:"",bottom:"",[q]:"-6px"})}}const a=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let c=a[0],u=16,f=!0,d=16,h=[],m;const b={slide:en,scale:Qd,fade:Yd,blur:Xd,none:()=>({delay:0,duration:0})};function $(){c=un(this),t(5,c),t(11,a)}function y(){f=this.checked,t(2,f)}function E(){u=at(this.value),t(1,u)}function M(){d=at(this.value),t(3,d)}function S(){m=un(this),t(7,m),t(12,b)}const N=()=>t(4,i=!i);function P(O){ze[O?"unshift":"push"](()=>{o=O,t(0,o)})}return s.$$.update=()=>{s.$$.dirty&15&&t(6,h=[Qn(u),f&&Yn(),Bi({padding:d,apply({availableWidth:O,availableHeight:L,elements:I}){Object.assign(I.floating.style,{maxWidth:`${O}px`,maxHeight:`${L}px`})}}),o&&Di({element:o})].filter(O=>!!O))},[o,u,f,d,i,c,h,m,n,l,r,a,b,$,y,E,M,S,N,P]}class sh extends V{constructor(e){super(),Z(this,e,nh,th,K,{})}}function So(s,e,t){const n=s.slice();return n[18]=e[t],n}function Co(s){let e,t=s[18]+"",n;return{c(){e=_("option"),n=z(t),e.__value=s[18],e.value=e.__value},m(l,o){k(l,e,o),p(e,n)},p:ee,d(l){l&&v(e)}}}function lh(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P,O,L,I,D=s[1]?"hide":"show",F,q,W,se,Q,B,U,J,oe,ue,ce,Pe,Ie,ye=s[10],$e=[];for(let ne=0;ne<ye.length;ne+=1)$e[ne]=Co(So(s,ye,ne));return ue=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=_("section"),t=_("div"),n=_("label"),l=_("span"),l.textContent="placement",o=T(),i=_("select");for(let ne=0;ne<$e.length;ne+=1)$e[ne].c();r=T(),a=_("label"),c=_("input"),u=T(),f=_("span"),f.textContent="flip",d=T(),h=_("label"),m=_("span"),m.textContent="offset",b=T(),$=_("input"),y=T(),E=_("label"),M=_("span"),M.textContent="size padding",S=T(),N=_("input"),P=T(),O=_("div"),L=_("button"),I=z("Click me to "),F=z(D),q=T(),W=_("div"),se=_("div"),Q=z(`
      Lorem ipsum dolor sit amet consectetur adipisicing elit`),U=T(),J=_("h3"),J.textContent="Code",oe=T(),R(ue.$$.fragment),g(i,"class","input"),s[5]===void 0&&lt(()=>s[11].call(i)),g(c,"type","checkbox"),g(a,"class","whitespace-nowrap"),g($,"type","number"),g($,"class","input w-[8ch]"),g(N,"type","number"),g(N,"class","input w-[8ch]"),g(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),g(L,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),g(se,"class","arrow svelte-1lvd4kc"),g(W,"class","tooltip not-prose svelte-1lvd4kc"),Fe(W,"in",s[1]),Fe(W,"out",!s[1]),g(O,"class","h-64 flex items-center justify-center border"),g(e,"class","prose max-w-none my-4")},m(ne,Te){k(ne,e,Te),p(e,t),p(t,n),p(n,l),p(n,o),p(n,i);for(let _e=0;_e<$e.length;_e+=1)$e[_e].m(i,null);gt(i,s[5]),p(t,r),p(t,a),p(a,c),c.checked=s[3],p(a,u),p(a,f),p(t,d),p(t,h),p(h,m),p(h,b),p(h,$),tt($,s[2]),p(t,y),p(t,E),p(E,M),p(E,S),p(E,N),tt(N,s[4]),p(e,P),p(e,O),p(O,L),p(L,I),p(L,F),p(O,q),p(O,W),p(W,se),s[16](se),p(W,Q),p(e,U),p(e,J),p(e,oe),C(ue,e,null),ce=!0,Pe||(Ie=[G(i,"change",s[11]),G(c,"change",s[12]),G($,"input",s[13]),G(N,"input",s[14]),je(s[7].call(null,L)),G(L,"click",s[15]),je(B=s[8].call(null,W,{placement:s[5],middleware:s[6],callback:s[9]}))],Pe=!0)},p(ne,[Te]){if(Te&1024){ye=ne[10];let ge;for(ge=0;ge<ye.length;ge+=1){const te=So(ne,ye,ge);$e[ge]?$e[ge].p(te,Te):($e[ge]=Co(te),$e[ge].c(),$e[ge].m(i,null))}for(;ge<$e.length;ge+=1)$e[ge].d(1);$e.length=ye.length}Te&1056&&gt(i,ne[5]),Te&8&&(c.checked=ne[3]),Te&4&&at($.value)!==ne[2]&&tt($,ne[2]),Te&16&&at(N.value)!==ne[4]&&tt(N,ne[4]),(!ce||Te&2)&&D!==(D=ne[1]?"hide":"show")&&ke(F,D),B&&Xe(B.update)&&Te&96&&B.update.call(null,{placement:ne[5],middleware:ne[6],callback:ne[9]}),(!ce||Te&2)&&Fe(W,"in",ne[1]),(!ce||Te&2)&&Fe(W,"out",!ne[1]);const _e={};Te&32&&(_e.code=`<script lang="ts"
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
</style>`),ue.$set(_e)},i(ne){ce||(w(ue.$$.fragment,ne),ce=!0)},o(ne){x(ue.$$.fragment,ne),ce=!1},d(ne){ne&&v(e),He($e,ne),s[16](null),A(ue),Pe=!1,Oe(Ie)}}}function oh(s,e,t){const[n,l,o]=ts(!0);let i,r=!1;function a(N){const{placement:P,middlewareData:O}=N;if(O.arrow){const{x:L,y:I}=O.arrow,D={top:"bottom",right:"left",bottom:"top",left:"right"}[P.split("-")[0]];D&&Object.assign(i.style,{left:L!=null?`${L}px`:"",top:I!=null?`${I}px`:"",right:"",bottom:"",[D]:"-6px"})}}const c=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let u=c[0],f=16,d=!0,h=16,m=[];function b(){u=un(this),t(5,u),t(10,c)}function $(){d=this.checked,t(3,d)}function y(){f=at(this.value),t(2,f)}function E(){h=at(this.value),t(4,h)}const M=()=>t(1,r=!r);function S(N){ze[N?"unshift":"push"](()=>{i=N,t(0,i)})}return s.$$.update=()=>{s.$$.dirty&2&&o(r),s.$$.dirty&29&&t(6,m=[Qn(f),d&&Yn(),Bi({padding:h,apply({availableWidth:N,availableHeight:P,elements:O}){Object.assign(O.floating.style,{maxWidth:`${N}px`,maxHeight:`${P}px`})}}),i&&Di({element:i})].filter(N=>!!N))},[i,r,f,d,h,u,m,n,l,a,c,b,$,y,E,M,S]}class ih extends V{constructor(e){super(),Z(this,e,oh,lh,K,{})}}const{document:Ao}=Pt;function rh(s){let e;return{c(){e=z("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function ah(s){let e;return{c(){e=z("Transition JS demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function ch(s){let e;return{c(){e=z("Transition CSS demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function uh(s){let e,t,n,l,o,i;return e=new pe({props:{$$slots:{default:[rh]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[ah]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[ch]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment)},m(r,a){C(e,r,a),k(r,t,a),C(n,r,a),k(r,l,a),C(o,r,a),i=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(w(e.$$.fragment,r),w(n.$$.fragment,r),w(o.$$.fragment,r),i=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),x(o.$$.fragment,r),i=!1},d(r){A(e,r),r&&v(t),A(n,r),r&&v(l),A(o,r)}}}function fh(s){let e,t;return e=new eh({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function dh(s){let e,t;return e=new sh({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function ph(s){let e,t;return e=new ih({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function mh(s){let e,t,n,l,o,i,r,a;return e=new it({props:{$$slots:{default:[uh]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[fh]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[dh]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[ph]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,l,u),C(o,c,u),k(c,i,u),C(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),o.$set(h);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(w(e.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(r.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(o.$$.fragment,c),x(r.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(l),A(o,c),c&&v(i),A(r,c)}}}function hh(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b;return Ao.title=e=document.title.replace(/(•).*$/,"$1 Floating UI action"),m=new ot({props:{$$slots:{default:[mh]},$$scope:{ctx:s}}}),{c(){t=T(),n=_("section"),l=_("a"),l.textContent="Home",o=T(),i=_("h1"),i.textContent="Action to use Floating UI",r=T(),a=_("a"),c=_("img"),f=T(),d=_("ul"),d.innerHTML=`<li>allows you to use both Svelte transitions and CSS transitions</li> 
    <li>dependence <a href="https://github.com/floating-ui/floating-ui" target="_blank">@floating-ui/dom</a></li>`,h=T(),R(m.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl"),g(c,"class","max-w-[4em]"),Ge(c.src,u=et)||g(c,"src",u),g(c,"alt","NPM logo"),g(a,"class","float-right"),g(a,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),g(a,"target","_blank"),g(d,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m($,y){k($,t,y),k($,n,y),p(n,l),p(n,o),p(n,i),p(n,r),p(n,a),p(a,c),p(n,f),p(n,d),p(n,h),C(m,n,null),b=!0},p($,[y]){(!b||y&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Floating UI action"))&&(Ao.title=e);const E={};y&1&&(E.$$scope={dirty:y,ctx:$}),m.$set(E)},i($){b||(w(m.$$.fragment,$),b=!0)},o($){x(m.$$.fragment,$),b=!1},d($){$&&v(t),$&&v(n),A(m)}}}class gh extends V{constructor(e){super(),Z(this,e,null,hh,K,{})}}const Ro=`# Action to control \`focusin\` and \`focusout\` for Svelte directive \`use\`

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
`;function _h(s){let e,t,n;return t=new Ht({props:{source:Ro.slice(Ro.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),g(e,"class","documentation")},m(l,o){k(l,e,o),C(t,e,null),n=!0},p:ee,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){x(t.$$.fragment,l),n=!1},d(l){l&&v(e),A(t)}}}class bh extends V{constructor(e){super(),Z(this,e,null,_h,K,{})}}function $h(s){let e;return{c(){e=z("\xA0")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function vh(s){let e;return{c(){e=z("Try to close the dropdown block by clicking outside")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function wh(s){let e;return{c(){e=z("Select")},m(t,n){k(t,e,n)},p:ee,d(t){t&&v(e)}}}function kh(s){let e,t,n;return{c(){e=z("Selected "),t=_("small"),n=z(s[3]),g(t,"class","font-semibold text-gray-400")},m(l,o){k(l,e,o),k(l,t,o),p(t,n)},p(l,o){o&8&&ke(n,l[3])},d(l){l&&v(e),l&&v(t)}}}function No(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S;return{c(){e=_("div"),t=_("div"),t.textContent="Choose one of the items",n=T(),l=_("div"),o=_("label"),i=_("input"),r=T(),a=_("span"),a.textContent="Firts",c=T(),u=_("label"),f=_("input"),d=T(),h=_("span"),h.textContent="Second",m=T(),b=_("label"),$=_("input"),y=T(),E=_("span"),E.textContent="Third",g(t,"class","alert svelte-1hjb9pe"),Fe(t,"error",s[2]),g(i,"type","radio"),i.__value="Firts",i.value=i.__value,g(i,"name","item"),s[8][0].push(i),g(f,"type","radio"),f.__value="Second",f.value=f.__value,g(f,"name","item"),s[8][0].push(f),g($,"type","radio"),$.__value="Third",$.value=$.__value,g($,"name","item"),s[8][0].push($),g(l,"class","mt-2 flex gap-4 px-2"),g(e,"class","absolute border shadow-md rounded-md p-2 top-2 bg-white"),g(e,"tabindex","-1")},m(N,P){k(N,e,P),p(e,t),p(e,n),p(e,l),p(l,o),p(o,i),i.checked=i.__value===s[3],p(o,r),p(o,a),p(l,c),p(l,u),p(u,f),f.checked=f.__value===s[3],p(u,d),p(u,h),p(l,m),p(l,b),p(b,$),$.checked=$.__value===s[3],p(b,y),p(b,E),s[11](e),M||(S=[G(i,"change",s[7]),G(f,"change",s[9]),G($,"change",s[10]),je(hn.call(null,e,[void 0,s[4]]))],M=!0)},p(N,P){P&4&&Fe(t,"error",N[2]),P&8&&(i.checked=i.__value===N[3]),P&8&&(f.checked=f.__value===N[3]),P&8&&($.checked=$.__value===N[3])},d(N){N&&v(e),s[8][0].splice(s[8][0].indexOf(i),1),s[8][0].splice(s[8][0].indexOf(f),1),s[8][0].splice(s[8][0].indexOf($),1),s[11](null),M=!1,Oe(S)}}}function yh(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y;function E(I,D){return I[1]&&!I[3]?vh:$h}let M=E(s),S=M(s);function N(I,D){return I[3]?kh:wh}let P=N(s),O=P(s),L=s[1]&&No(s);return m=new Ye({props:{code:`<script lang="ts"
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
`}}),{c(){e=_("section"),t=_("div"),S.c(),n=T(),l=_("div"),o=_("button"),O.c(),i=T(),r=_("button"),a=z("Reset"),c=T(),u=_("div"),L&&L.c(),f=T(),d=_("h3"),d.textContent="Code",h=T(),R(m.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(o,"class","input w-[200px]"),g(r,"class","input"),r.disabled=s[1],g(u,"class","relative"),g(l,"class","w-fit mx-auto"),g(e,"class","prose max-w-none my-4")},m(I,D){k(I,e,D),p(e,t),S.m(t,null),p(e,n),p(e,l),p(l,o),O.m(o,null),p(l,i),p(l,r),p(r,a),p(l,c),p(l,u),L&&L.m(u,null),p(e,f),p(e,d),p(e,h),C(m,e,null),b=!0,$||(y=[G(o,"click",s[5]),G(r,"click",s[6])],$=!0)},p(I,[D]){M!==(M=E(I))&&(S.d(1),S=M(I),S&&(S.c(),S.m(t,null))),P===(P=N(I))&&O?O.p(I,D):(O.d(1),O=P(I),O&&(O.c(),O.m(o,null))),(!b||D&2)&&(r.disabled=I[1]),I[1]?L?L.p(I,D):(L=No(I),L.c(),L.m(u,null)):L&&(L.d(1),L=null)},i(I){b||(w(m.$$.fragment,I),b=!0)},o(I){x(m.$$.fragment,I),b=!1},d(I){I&&v(e),S.d(),O.d(),L&&L.d(),A(m),$=!1,Oe(y)}}}function Th(s,e,t){let n=!1,l=!1,o,i="";function r(){i?(t(1,n=!1),t(2,l=!1)):t(2,l=!0)}const a=[[]],c=()=>t(1,n=!0),u=()=>t(3,i="");function f(){i=this.__value,t(3,i)}function d(){i=this.__value,t(3,i)}function h(){i=this.__value,t(3,i)}function m(b){ze[b?"unshift":"push"](()=>{o=b,t(0,o)})}return s.$$.update=()=>{s.$$.dirty&1&&o&&o.focus()},[o,n,l,i,r,c,u,f,a,d,h,m]}class xh extends V{constructor(e){super(),Z(this,e,Th,yh,K,{})}}function Mo(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N;return{c(){e=_("ul"),t=_("li"),n=_("button"),n.textContent="Open",l=T(),o=_("li"),i=_("button"),i.textContent="Close",r=T(),a=_("li"),c=_("button"),c.textContent="Upload",u=T(),f=_("li"),d=_("button"),d.textContent="Download",h=T(),m=_("li"),b=T(),$=_("li"),y=_("button"),y.textContent="About",g(n,"class","svelte-x2xhpk"),g(t,"class","svelte-x2xhpk"),g(i,"class","svelte-x2xhpk"),g(o,"class","svelte-x2xhpk"),g(c,"class","svelte-x2xhpk"),g(a,"class","svelte-x2xhpk"),g(d,"class","svelte-x2xhpk"),g(f,"class","svelte-x2xhpk"),g(m,"class","separator svelte-x2xhpk"),g(y,"class","svelte-x2xhpk"),g($,"class","svelte-x2xhpk"),g(e,"class","dropdown svelte-x2xhpk"),g(e,"tabindex","-1")},m(P,O){k(P,e,O),p(e,t),p(t,n),p(e,l),p(e,o),p(o,i),p(e,r),p(e,a),p(a,c),p(e,u),p(e,f),p(f,d),p(e,h),p(e,m),p(e,b),p(e,$),p($,y),M=!0,S||(N=[G(n,"click",s[4]),G(i,"click",s[5]),G(c,"click",s[6]),G(d,"click",s[7]),G(y,"click",s[8]),je(s[2].call(null,e,{placement:"bottom-start",middleware:[Yn(),Qn(8)]}))],S=!0)},p:ee,i(P){M||(P&&lt(()=>{E||(E=Ct(e,en,{},!0)),E.run(1)}),M=!0)},o(P){P&&(E||(E=Ct(e,en,{},!1)),E.run(0)),M=!1},d(P){P&&v(e),P&&E&&E.end(),S=!1,Oe(N)}}}function Eh(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b=s[0]&&Mo(s);return f=new Ye({props:{code:`<script lang="ts"
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
    @apply absolute border shadow-md rounded-md py-2 px-0 my-0 bg-white;
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a>',n=T(),l=_("div"),o=_("button"),o.textContent="Action",i=T(),b&&b.c(),a=T(),c=_("h3"),c.textContent="Code",u=T(),R(f.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(o,"class","input"),g(l,"class","w-fit mx-auto"),g(e,"class","prose max-w-none my-4")},m($,y){k($,e,y),p(e,t),p(e,n),p(e,l),p(l,o),p(l,i),b&&b.m(l,null),p(e,a),p(e,c),p(e,u),C(f,e,null),d=!0,h||(m=[je(s[1].call(null,o)),G(o,"click",s[3]),je(r=hn.call(null,l,[void 0,s[9]]))],h=!0)},p($,[y]){$[0]?b?(b.p($,y),y&1&&w(b,1)):(b=Mo($),b.c(),w(b,1),b.m(l,null)):b&&(me(),x(b,1,1,()=>{b=null}),he()),r&&Xe(r.update)&&y&1&&r.update.call(null,[void 0,$[9]])},i($){d||(w(b),w(f.$$.fragment,$),d=!0)},o($){x(b),x(f.$$.fragment,$),d=!1},d($){$&&v(e),b&&b.d(),A(f),h=!1,Oe(m)}}}function Sh(s,e,t){const[n,l,o]=ts(!0);let i=!1;const r=()=>t(0,i=!0),a=()=>t(0,i=!1),c=()=>t(0,i=!1),u=()=>t(0,i=!1),f=()=>t(0,i=!1),d=()=>t(0,i=!1),h=()=>t(0,i=!1);return s.$$.update=()=>{s.$$.dirty&1&&o(i)},[i,n,l,r,a,c,u,f,d,h]}class Ch extends V{constructor(e){super(),Z(this,e,Sh,Eh,K,{})}}function Ah(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M;return $=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.textContent="This example highlights a focused fieldset.",n=T(),l=_("div"),o=_("div"),i=_("fieldset"),i.innerHTML=`<legend class="svelte-c2p0zs">Your details</legend> 
        <label class="svelte-c2p0zs"><span>Name</span> 
          <input type="text" class="input svelte-c2p0zs"/></label> 
        <label class="svelte-c2p0zs"><span>Email</span> 
          <input type="text" class="input svelte-c2p0zs"/></label> 
        <label class="svelte-c2p0zs"><span>Phone</span> 
          <input type="text" class="input svelte-c2p0zs"/></label>`,a=T(),c=_("div"),c.innerHTML='<button type="button" class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8 svelte-c2p0zs">Submit</button>',u=T(),f=_("fieldset"),f.innerHTML=`<legend class="svelte-c2p0zs">Delivery address</legend> 
      <label class="svelte-c2p0zs"><span>Address</span> 
        <textarea rows="3" class="input svelte-c2p0zs"></textarea></label> 
      <label class="svelte-c2p0zs"><span>Postcode</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Country</span> 
        <input type="text" class="input svelte-c2p0zs"/></label>`,h=T(),m=_("h3"),m.textContent="Code",b=T(),R($.$$.fragment),g(t,"class","mb-8 pb-2 border-b text-center text-gray-500"),g(i,"class","svelte-c2p0zs"),Fe(i,"active",s[0]),g(c,"class","mt-8"),g(o,"class","basis-1/2"),g(f,"class","basis-1/2 svelte-c2p0zs"),Fe(f,"active",s[1]),g(l,"class","form svelte-c2p0zs"),g(e,"class","prose max-w-none my-4")},m(S,N){k(S,e,N),p(e,t),p(e,n),p(e,l),p(l,o),p(o,i),p(o,a),p(o,c),p(l,u),p(l,f),p(e,h),p(e,m),p(e,b),C($,e,null),y=!0,E||(M=[je(r=hn.call(null,i,[s[2],s[3]])),je(d=hn.call(null,f,[s[4],s[5]]))],E=!0)},p(S,[N]){r&&Xe(r.update)&&N&1&&r.update.call(null,[S[2],S[3]]),(!y||N&1)&&Fe(i,"active",S[0]),d&&Xe(d.update)&&N&2&&d.update.call(null,[S[4],S[5]]),(!y||N&2)&&Fe(f,"active",S[1])},i(S){y||(w($.$$.fragment,S),y=!0)},o(S){x($.$$.fragment,S),y=!1},d(S){S&&v(e),A($),E=!1,Oe(M)}}}function Rh(s,e,t){let n=!1,l=!1;return[n,l,()=>t(0,n=!0),()=>t(0,n=!1),()=>t(1,l=!0),()=>t(1,l=!1)]}class Nh extends V{constructor(e){super(),Z(this,e,Rh,Ah,K,{})}}const{document:Po}=Pt;function Mh(s){let e;return{c(){e=z("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Ph(s){let e;return{c(){e=z("Reqired demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Oh(s){let e;return{c(){e=z("Dropdown demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Lh(s){let e;return{c(){e=z("Style demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function Ih(s){let e,t,n,l,o,i,r,a;return e=new pe({props:{$$slots:{default:[Mh]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[Ph]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[Oh]},$$scope:{ctx:s}}}),r=new pe({props:{$$slots:{default:[Lh]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,l,u),C(o,c,u),k(c,i,u),C(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),o.$set(h);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(w(e.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(r.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(o.$$.fragment,c),x(r.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(l),A(o,c),c&&v(i),A(r,c)}}}function Dh(s){let e,t;return e=new bh({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Bh(s){let e,t;return e=new xh({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function zh(s){let e,t;return e=new Ch({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Fh(s){let e,t;return e=new Nh({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Hh(s){let e,t,n,l,o,i,r,a,c,u;return e=new it({props:{$$slots:{default:[Ih]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[Dh]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[Bh]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[zh]},$$scope:{ctx:s}}}),c=new de({props:{$$slots:{default:[Fh]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment),a=T(),R(c.$$.fragment)},m(f,d){C(e,f,d),k(f,t,d),C(n,f,d),k(f,l,d),C(o,f,d),k(f,i,d),C(r,f,d),k(f,a,d),C(c,f,d),u=!0},p(f,d){const h={};d&1&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),n.$set(m);const b={};d&1&&(b.$$scope={dirty:d,ctx:f}),o.$set(b);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),r.$set($);const y={};d&1&&(y.$$scope={dirty:d,ctx:f}),c.$set(y)},i(f){u||(w(e.$$.fragment,f),w(n.$$.fragment,f),w(o.$$.fragment,f),w(r.$$.fragment,f),w(c.$$.fragment,f),u=!0)},o(f){x(e.$$.fragment,f),x(n.$$.fragment,f),x(o.$$.fragment,f),x(r.$$.fragment,f),x(c.$$.fragment,f),u=!1},d(f){A(e,f),f&&v(t),A(n,f),f&&v(l),A(o,f),f&&v(i),A(r,f),f&&v(a),A(c,f)}}}function jh(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b;return Po.title=e=document.title.replace(/(•).*$/,"$1 Focus action"),m=new ot({props:{$$slots:{default:[Hh]},$$scope:{ctx:s}}}),{c(){t=T(),n=_("section"),l=_("a"),l.textContent="Home",o=T(),i=_("h1"),i.innerHTML=`Action to control <code>focusin</code> and <code>focusout</code><br/>for directive
    <code>use</code>`,r=T(),a=_("a"),c=_("img"),f=T(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>correctly detects loss of focus with <code>Tab</code></li>`,h=T(),R(m.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl"),g(c,"class","max-w-[4em]"),Ge(c.src,u=et)||g(c,"src",u),g(c,"alt","NPM logo"),g(a,"class","float-right"),g(a,"href","https://www.npmjs.com/package/@apsc/focus-action"),g(a,"target","_blank"),g(d,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m($,y){k($,t,y),k($,n,y),p(n,l),p(n,o),p(n,i),p(n,r),p(n,a),p(a,c),p(n,f),p(n,d),p(n,h),C(m,n,null),b=!0},p($,[y]){(!b||y&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Focus action"))&&(Po.title=e);const E={};y&1&&(E.$$scope={dirty:y,ctx:$}),m.$set(E)},i($){b||(w(m.$$.fragment,$),b=!0)},o($){x(m.$$.fragment,$),b=!1},d($){$&&v(t),$&&v(n),A(m)}}}class Uh extends V{constructor(e){super(),Z(this,e,null,jh,K,{})}}const Oo=`# Action to call a function by keyboard shortcut for Svelte directive \`use\`

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
`;function qh(s){let e,t,n;return t=new Ht({props:{source:Oo.slice(Oo.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),g(e,"class","documentation")},m(l,o){k(l,e,o),C(t,e,null),n=!0},p:ee,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){x(t.$$.fragment,l),n=!1},d(l){l&&v(e),A(t)}}}class Kh extends V{constructor(e){super(),Z(this,e,null,qh,K,{})}}const Wi={alt:"Alt",cmd:"Cmd",ctrl:"Ctrl",shift:"Shift",joinWith:" + ",hideKey:"never"};let ns=Wi;const Wh=()=>({alphanumeric:/^Key([A-Z01-9])$/,alpha:/^Key([A-Z])$/,always:/^Key(.*)$/,never:/^(.*)$/})[ns.hideKey];function Gh(s){return{character:[16,17,18,91,93,224].indexOf(s.keyCode)!==-1?null:s.code.replace(Wh(),"$1"),modifiers:{cmd:s.metaKey,ctrl:s.ctrlKey,alt:s.altKey,shift:s.shiftKey}}}function Zh(s){const e=Gh(s),n=Object.entries(e.modifiers).reduce((l,[o,i])=>(i&&l.push(ns[o]),l),[]);return e.character&&n.push(e.character),n}function Vh(s){return ns=Object.assign(Object.assign({},Wi),s)}const Xh=s=>Zh(s).join(ns.joinWith);Vh({joinWith:"+"});function Ls(s,e){let{event:t,capture:n=!1,passive:l=!1,preventDefault:o=!1,stopImmediatePropagation:i=!1,stopPropagation:r=!1,fns:a}=e;function c(u){const f=Xh(u);typeof a[f]=="function"&&(o&&u.preventDefault(),r&&u.stopPropagation(),i&&u.stopImmediatePropagation(),a[f](u))}return s.addEventListener(t,c,{capture:n,passive:l}),{destroy(){s.removeEventListener(t,c,{capture:n})},update(u){const f=t!==u.event||n!==u.capture||l!==u.passive;f&&s.removeEventListener(t,c,{capture:n}),{event:t,capture:n=!1,passive:l=!1,preventDefault:o=!1,stopImmediatePropagation:i=!1,stopPropagation:r=!1,fns:a}=u,f&&s.addEventListener(t,c,{capture:n,passive:l})}}}function Lo(s,e,t){const n=s.slice();return n[18]=e[t],n[20]=t,n}function Io(s){let e,t=s[18]+"",n,l,o,i;function r(){return s[17](s[20])}return{c(){e=_("div"),n=z(t),l=T(),g(e,"class","beverage-item svelte-12wr8dw"),Fe(e,"active",s[20]===s[1])},m(a,c){k(a,e,c),p(e,n),p(e,l),o||(i=G(e,"click",r),o=!0)},p(a,c){s=a,c&2&&Fe(e,"active",s[20]===s[1])},d(a){a&&v(e),o=!1,i()}}}function Yh(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P=s[2],O=[];for(let L=0;L<P.length;L+=1)O[L]=Io(Lo(s,P,L));return E=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var L;e=_("section"),t=_("div"),n=_("div"),n.textContent="Select a beverage",l=T(),o=_("div"),i=_("input"),c=T(),u=_("button"),u.textContent="Reset",f=T(),d=_("div"),d.innerHTML=`Use the navigation buttons
      <code>ArrowUp</code>,
      <code>ArrowDown</code>,
      <code>ArrowLeft</code>,
      <code>ArrowRight</code>,
      <code>PageUp</code>,
      <code>PageDown</code>,
      <code>Home</code>,
      <code>End</code>,
      <code>Ctrl+Home</code>,
      <code>Ctrl+End</code> to select a drink`,h=T(),m=_("div");for(let I=0;I<O.length;I+=1)O[I].c();b=T(),$=_("h3"),$.textContent="Code",y=T(),R(E.$$.fragment),g(i,"type","text"),g(i,"class","input grow"),i.readOnly=!0,i.value=r=(L=s[2][s[1]])!=null?L:"",g(u,"type","button"),g(u,"class","input"),g(o,"class","flex"),g(d,"class","block text-sm mt-1 text-gray-500"),g(t,"class","my-4"),g(m,"class","columns-3 gap-3 border-2 border-gray-200 rounded-md p-2"),g(e,"class","prose max-w-none my-4")},m(L,I){k(L,e,I),p(e,t),p(t,n),p(t,l),p(t,o),p(o,i),s[5](i),p(o,c),p(o,u),p(t,f),p(t,d),p(e,h),p(e,m);for(let D=0;D<O.length;D+=1)O[D].m(m,null);p(e,b),p(e,$),p(e,y),C(E,e,null),M=!0,S||(N=[je(a=Ls.call(null,i,{event:"keydown",preventDefault:!0,fns:{ArrowUp:s[6],ArrowDown:s[7],ArrowLeft:s[8],ArrowRight:s[9],PageUp:s[10],PageDown:s[11],Home:s[12],End:s[13],"Ctrl+Home":s[14],"Ctrl+End":s[15]}})),G(u,"click",s[16])],S=!0)},p(L,[I]){var D;if((!M||I&2&&r!==(r=(D=L[2][L[1]])!=null?D:"")&&i.value!==r)&&(i.value=r),a&&Xe(a.update)&&I&2&&a.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:L[6],ArrowDown:L[7],ArrowLeft:L[8],ArrowRight:L[9],PageUp:L[10],PageDown:L[11],Home:L[12],End:L[13],"Ctrl+Home":L[14],"Ctrl+End":L[15]}}),I&7){P=L[2];let F;for(F=0;F<P.length;F+=1){const q=Lo(L,P,F);O[F]?O[F].p(q,I):(O[F]=Io(q),O[F].c(),O[F].m(m,null))}for(;F<O.length;F+=1)O[F].d(1);O.length=P.length}},i(L){M||(w(E.$$.fragment,L),M=!0)},o(L){x(E.$$.fragment,L),M=!1},d(L){L&&v(e),s[5](null),He(O,L),A(E),S=!1,Oe(N)}}}function Qh(s,e,t){const n=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asi\xE1tico","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","R\xFCdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"],l=Math.floor(n.length/3);let o;Bt(()=>o.focus());let i=NaN;function r(N){if(isFinite(i)){let P=i+N;P<0?P=0:P>=n.length&&(P=n.length-1),t(1,i=P)}else t(1,i=0)}function a(N){ze[N?"unshift":"push"](()=>{o=N,t(0,o)})}return[o,i,n,l,r,a,()=>r(-1),()=>r(1),()=>r(-l),()=>r(l),()=>r(-((i||0)%l)),()=>r(l-1-(i||0)%l),()=>t(1,i=(i||0)%l),()=>t(1,i=n.length-(l-(i||0)%l)),()=>t(1,i=0),()=>t(1,i=n.length-1),()=>{t(1,i=NaN),o.focus()},N=>{t(1,i=N),o.focus()}]}class Jh extends V{constructor(e){super(),Z(this,e,Qh,Yh,K,{})}}const{document:Do}=Pt;function eg(s){let e;return{c(){e=z("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function tg(s){let e;return{c(){e=z("Navigation demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function ng(s){let e,t,n,l;return e=new pe({props:{$$slots:{default:[eg]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[tg]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment)},m(o,i){C(e,o,i),k(o,t,i),C(n,o,i),l=!0},p(o,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:o}),e.$set(r);const a={};i&1&&(a.$$scope={dirty:i,ctx:o}),n.$set(a)},i(o){l||(w(e.$$.fragment,o),w(n.$$.fragment,o),l=!0)},o(o){x(e.$$.fragment,o),x(n.$$.fragment,o),l=!1},d(o){A(e,o),o&&v(t),A(n,o)}}}function sg(s){let e,t;return e=new Kh({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function lg(s){let e,t;return e=new Jh({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function og(s){let e,t,n,l,o,i;return e=new it({props:{$$slots:{default:[ng]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[sg]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[lg]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment)},m(r,a){C(e,r,a),k(r,t,a),C(n,r,a),k(r,l,a),C(o,r,a),i=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(w(e.$$.fragment,r),w(n.$$.fragment,r),w(o.$$.fragment,r),i=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),x(o.$$.fragment,r),i=!1},d(r){A(e,r),r&&v(t),A(n,r),r&&v(l),A(o,r)}}}function ig(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b;return Do.title=e=document.title.replace(/(•).*$/,"$1 Keyboard shortcut action"),m=new ot({props:{mode:"remove",$$slots:{default:[og]},$$scope:{ctx:s}}}),{c(){t=T(),n=_("section"),l=_("a"),l.textContent="Home",o=T(),i=_("h1"),i.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",r=T(),a=_("a"),c=_("img"),f=T(),d=_("ul"),d.innerHTML=`<li>allows to reduce keyboard event handling code</li> 
    <li>dependence <a href="https://www.npmjs.com/package/keyboard-event-to-string" target="_blank">keyboard-event-to-string</a></li>`,h=T(),R(m.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl"),g(c,"class","max-w-[4em]"),Ge(c.src,u=et)||g(c,"src",u),g(c,"alt","NPM logo"),g(a,"class","float-right"),g(a,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),g(a,"target","_blank"),g(d,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m($,y){k($,t,y),k($,n,y),p(n,l),p(n,o),p(n,i),p(n,r),p(n,a),p(a,c),p(n,f),p(n,d),p(n,h),C(m,n,null),b=!0},p($,[y]){(!b||y&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Keyboard shortcut action"))&&(Do.title=e);const E={};y&1&&(E.$$scope={dirty:y,ctx:$}),m.$set(E)},i($){b||(w(m.$$.fragment,$),b=!0)},o($){x(m.$$.fragment,$),b=!1},d($){$&&v(t),$&&v(n),A(m)}}}class rg extends V{constructor(e){super(),Z(this,e,null,ig,K,{})}}const Bo=`# Action to scroll the child to parent viewport Svelte directive \`use\`

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
`;function ag(s){let e,t,n;return t=new Ht({props:{source:Bo.slice(Bo.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),g(e,"class","documentation")},m(l,o){k(l,e,o),C(t,e,null),n=!0},p:ee,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){x(t.$$.fragment,l),n=!1},d(l){l&&v(e),A(t)}}}class cg extends V{constructor(e){super(),Z(this,e,null,ag,K,{})}}function zo(s){const e=s.parentElement;if(e&&e.scrollHeight>e.offsetHeight){const t=getComputedStyle(e),n=parseInt(t.paddingTop)||0,l=parseInt(t.paddingBottom)||0,o=e.offsetTop+n,i=e.offsetTop+e.offsetHeight-l,r=s.offsetTop-e.scrollTop,a=s.offsetTop+s.offsetHeight-e.scrollTop;return a>i?(e.scrollTop+=a-i,!0):r<o?(e.scrollTop-=o-r,!0):!1}else return!1}function Fo(s){const e=s.parentElement;if(e&&e.scrollWidth>e.offsetWidth){const t=getComputedStyle(e),n=parseInt(t.paddingLeft)||0,l=parseInt(t.paddingRight)||0,o=e.offsetLeft+n,i=e.offsetLeft+e.offsetWidth-l,r=s.offsetLeft-e.scrollLeft,a=s.offsetLeft+s.offsetWidth-e.scrollLeft;return a>i?(e.scrollLeft+=a-i,!0):r<o?(e.scrollLeft-=o-r,!0):!1}else return!1}function Gi(s,e){function t(n){n===!0?(zo(s),Fo(s)):typeof n=="object"&&(n.x&&Fo(s),n.y&&zo(s))}return t(e),{update(n){t(n)}}}const nt=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asi\xE1tico","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","R\xFCdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"];function Ho(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function jo(s){let e,t=s[10]+"",n,l,o,i,r;function a(){return s[9](s[12])}return{c(){e=_("div"),n=z(t),l=T(),g(e,"class","beverage-item svelte-18rp3xo"),Fe(e,"active",s[12]===s[1])},m(c,u){k(c,e,u),p(e,n),p(e,l),i||(r=[je(o=Gi.call(null,e,s[1]===s[12]?{y:!0}:!1)),G(e,"click",a)],i=!0)},p(c,u){s=c,o&&Xe(o.update)&&u&2&&o.update.call(null,s[1]===s[12]?{y:!0}:!1),u&2&&Fe(e,"active",s[12]===s[1])},d(c){c&&v(e),i=!1,Oe(r)}}}function ug(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P,O,L=nt,I=[];for(let D=0;D<L.length;D+=1)I[D]=jo(Ho(s,L,D));return S=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var D;e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=T(),l=_("div"),o=_("div"),o.textContent="Select a beverage",i=T(),r=_("div"),r.innerHTML=`use the navigation buttons
      <code>ArrowUp</code>,
      <code>ArrowDown</code>,
      <code>Home</code>,
      <code>End</code> to select a drink`,a=T(),c=_("div"),u=_("input"),h=T(),m=_("button"),m.textContent="Reset",b=T(),$=_("div");for(let F=0;F<I.length;F+=1)I[F].c();y=T(),E=_("h3"),E.textContent="Code",M=T(),R(S.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(r,"class","text-sm leading-4 text-gray-500"),g(u,"type","text"),g(u,"class","input grow"),u.readOnly=!0,u.value=f=(D=nt[s[1]])!=null?D:"",g(m,"type","button"),g(m,"class","input ml-2"),g(c,"class","mt-2 flex"),g($,"class","border-2 border-gray-200 rounded-md p-2 mt-2 w-48 max-h-[15.25rem] overflow-y-auto shadow-md scroll-smooth"),g(l,"class","my-2 mx-auto w-96"),g(e,"class","prose max-w-none my-4")},m(D,F){k(D,e,F),p(e,t),p(e,n),p(e,l),p(l,o),p(l,i),p(l,r),p(l,a),p(l,c),p(c,u),s[3](u),p(c,h),p(c,m),p(l,b),p(l,$);for(let q=0;q<I.length;q+=1)I[q].m($,null);p(e,y),p(e,E),p(e,M),C(S,e,null),N=!0,P||(O=[je(d=Ls.call(null,u,{event:"keydown",preventDefault:!0,fns:{ArrowUp:s[4],ArrowDown:s[5],Home:s[6],End:s[7]}})),G(m,"click",s[8])],P=!0)},p(D,[F]){var q;if((!N||F&2&&f!==(f=(q=nt[D[1]])!=null?q:"")&&u.value!==f)&&(u.value=f),d&&Xe(d.update)&&F&2&&d.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:D[4],ArrowDown:D[5],Home:D[6],End:D[7]}}),F&3){L=nt;let W;for(W=0;W<L.length;W+=1){const se=Ho(D,L,W);I[W]?I[W].p(se,F):(I[W]=jo(se),I[W].c(),I[W].m($,null))}for(;W<I.length;W+=1)I[W].d(1);I.length=L.length}},i(D){N||(w(S.$$.fragment,D),N=!0)},o(D){x(S.$$.fragment,D),N=!1},d(D){D&&v(e),s[3](null),He(I,D),A(S),P=!1,Oe(O)}}}function fg(s,e,t){let n;Bt(()=>n.focus());let l=NaN;function o(h){if(isFinite(l)){let m=l+h;m<0?m=0:m>=nt.length&&(m=nt.length-1),t(1,l=m)}else t(1,l=0)}function i(h){ze[h?"unshift":"push"](()=>{n=h,t(0,n)})}return[n,l,o,i,()=>o(-1),()=>o(1),()=>t(1,l=0),()=>t(1,l=nt.length-1),()=>{t(1,l=NaN),n.focus()},h=>{t(1,l=h),n.focus()}]}class dg extends V{constructor(e){super(),Z(this,e,fg,ug,K,{})}}function Uo(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function qo(s){let e,t=s[10]+"",n,l,o,i,r;function a(){return s[9](s[12])}return{c(){e=_("div"),n=z(t),l=T(),g(e,"class","beverage-item svelte-2m30if"),Fe(e,"active",s[12]===s[1])},m(c,u){k(c,e,u),p(e,n),p(e,l),i||(r=[je(o=Gi.call(null,e,s[1]===s[12]?{x:!0}:!1)),G(e,"click",a)],i=!0)},p(c,u){s=c,o&&Xe(o.update)&&u&2&&o.update.call(null,s[1]===s[12]?{x:!0}:!1),u&2&&Fe(e,"active",s[12]===s[1])},d(c){c&&v(e),i=!1,Oe(r)}}}function pg(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E,M,S,N,P,O,L,I=nt,D=[];for(let F=0;F<I.length;F+=1)D[F]=qo(Uo(s,I,F));return N=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var F;e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=T(),l=_("div"),o=_("div"),i=_("div"),i.textContent="Select a beverage",r=T(),a=_("div"),a.innerHTML=`use the navigation buttons
        <code>ArrowLeft</code>,
        <code>ArrowRight</code>,
        <code>Home</code>,
        <code>End</code> to select a drink`,c=T(),u=_("div"),f=_("input"),m=T(),b=_("button"),b.textContent="Reset",$=T(),y=_("div");for(let q=0;q<D.length;q+=1)D[q].c();E=T(),M=_("h3"),M.textContent="Code",S=T(),R(N.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(a,"class","text-sm leading-4 text-gray-500"),g(f,"type","text"),g(f,"class","input grow"),f.readOnly=!0,f.value=d=(F=nt[s[1]])!=null?F:"",g(b,"type","button"),g(b,"class","input ml-2"),g(u,"class","mt-2 flex"),g(o,"class","mx-auto w-96"),g(y,"class","border-2 border-gray-200 rounded-md p-2 mt-2 whitespace-nowrap max-w-full overflow-x-auto shadow-md scroll-smooth"),g(l,"class","my-2"),g(e,"class","prose max-w-none my-4")},m(F,q){k(F,e,q),p(e,t),p(e,n),p(e,l),p(l,o),p(o,i),p(o,r),p(o,a),p(o,c),p(o,u),p(u,f),s[3](f),p(u,m),p(u,b),p(l,$),p(l,y);for(let W=0;W<D.length;W+=1)D[W].m(y,null);p(e,E),p(e,M),p(e,S),C(N,e,null),P=!0,O||(L=[je(h=Ls.call(null,f,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:s[4],ArrowRight:s[5],Home:s[6],End:s[7]}})),G(b,"click",s[8])],O=!0)},p(F,[q]){var W;if((!P||q&2&&d!==(d=(W=nt[F[1]])!=null?W:"")&&f.value!==d)&&(f.value=d),h&&Xe(h.update)&&q&2&&h.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:F[4],ArrowRight:F[5],Home:F[6],End:F[7]}}),q&3){I=nt;let se;for(se=0;se<I.length;se+=1){const Q=Uo(F,I,se);D[se]?D[se].p(Q,q):(D[se]=qo(Q),D[se].c(),D[se].m(y,null))}for(;se<D.length;se+=1)D[se].d(1);D.length=I.length}},i(F){P||(w(N.$$.fragment,F),P=!0)},o(F){x(N.$$.fragment,F),P=!1},d(F){F&&v(e),s[3](null),He(D,F),A(N),O=!1,Oe(L)}}}function mg(s,e,t){let n;Bt(()=>n.focus());let l=NaN;function o(h){if(isFinite(l)){let m=l+h;m<0?m=0:m>=nt.length&&(m=nt.length-1),t(1,l=m)}else t(1,l=0)}function i(h){ze[h?"unshift":"push"](()=>{n=h,t(0,n)})}return[n,l,o,i,()=>o(-1),()=>o(1),()=>t(1,l=0),()=>t(1,l=nt.length-1),()=>{t(1,l=NaN),n.focus()},h=>{t(1,l=h),n.focus()}]}class hg extends V{constructor(e){super(),Z(this,e,mg,pg,K,{})}}const{document:Ko}=Pt;function gg(s){let e;return{c(){e=z("API")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function _g(s){let e;return{c(){e=z("Vertical demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function bg(s){let e;return{c(){e=z("Horizontal demo")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function $g(s){let e,t,n,l,o,i;return e=new pe({props:{$$slots:{default:[gg]},$$scope:{ctx:s}}}),n=new pe({props:{$$slots:{default:[_g]},$$scope:{ctx:s}}}),o=new pe({props:{$$slots:{default:[bg]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment)},m(r,a){C(e,r,a),k(r,t,a),C(n,r,a),k(r,l,a),C(o,r,a),i=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:r}),o.$set(f)},i(r){i||(w(e.$$.fragment,r),w(n.$$.fragment,r),w(o.$$.fragment,r),i=!0)},o(r){x(e.$$.fragment,r),x(n.$$.fragment,r),x(o.$$.fragment,r),i=!1},d(r){A(e,r),r&&v(t),A(n,r),r&&v(l),A(o,r)}}}function vg(s){let e,t;return e=new cg({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function wg(s){let e,t;return e=new dg({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function kg(s){let e,t;return e=new hg({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function yg(s){let e,t,n,l,o,i,r,a;return e=new it({props:{$$slots:{default:[$g]},$$scope:{ctx:s}}}),n=new de({props:{$$slots:{default:[vg]},$$scope:{ctx:s}}}),o=new de({props:{$$slots:{default:[wg]},$$scope:{ctx:s}}}),r=new de({props:{$$slots:{default:[kg]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=T(),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment)},m(c,u){C(e,c,u),k(c,t,u),C(n,c,u),k(c,l,u),C(o,c,u),k(c,i,u),C(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),o.$set(h);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m)},i(c){a||(w(e.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(r.$$.fragment,c),a=!0)},o(c){x(e.$$.fragment,c),x(n.$$.fragment,c),x(o.$$.fragment,c),x(r.$$.fragment,c),a=!1},d(c){A(e,c),c&&v(t),A(n,c),c&&v(l),A(o,c),c&&v(i),A(r,c)}}}function Tg(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b;return Ko.title=e=document.title.replace(/(•).*$/,"$1 Scroll child action"),m=new ot({props:{mode:"remove",$$slots:{default:[yg]},$$scope:{ctx:s}}}),{c(){t=T(),n=_("section"),l=_("a"),l.textContent="Home",o=T(),i=_("h1"),i.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",r=T(),a=_("a"),c=_("img"),f=T(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>useful for components like dropdown</li> 
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>`,h=T(),R(m.$$.fragment),g(l,"class","float-right"),g(l,"href","/"),g(i,"class","text-2xl"),g(c,"class","max-w-[4em]"),Ge(c.src,u=et)||g(c,"src",u),g(c,"alt","NPM logo"),g(a,"class","float-right"),g(a,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),g(a,"target","_blank"),g(d,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m($,y){k($,t,y),k($,n,y),p(n,l),p(n,o),p(n,i),p(n,r),p(n,a),p(a,c),p(n,f),p(n,d),p(n,h),C(m,n,null),b=!0},p($,[y]){(!b||y&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Scroll child action"))&&(Ko.title=e);const E={};y&1&&(E.$$scope={dirty:y,ctx:$}),m.$set(E)},i($){b||(w(m.$$.fragment,$),b=!0)},o($){x(m.$$.fragment,$),b=!1},d($){$&&v(t),$&&v(n),A(m)}}}class xg extends V{constructor(e){super(),Z(this,e,null,Tg,K,{})}}function Eg(s){let e,t;return e=new Dr({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Sg(s){let e,t;return e=new Ud({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Cg(s){let e,t;return e=new mp({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Ag(s){let e,t;return e=new Qm({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Rg(s){let e,t;return e=new gh({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Ng(s){let e,t;return e=new Uh({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Mg(s){let e,t;return e=new rg({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Pg(s){let e,t;return e=new xg({}),{c(){R(e.$$.fragment)},m(n,l){C(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Og(s){let e,t,n,l,o,i,r,a,c,u,f,d,h,m,b,$,y,E;return n=new Et({props:{path:"/",$$slots:{default:[Eg]},$$scope:{ctx:s}}}),o=new Et({props:{path:"/tabs",$$slots:{default:[Sg]},$$scope:{ctx:s}}}),r=new Et({props:{path:"/glob-notify",$$slots:{default:[Cg]},$$scope:{ctx:s}}}),c=new Et({props:{path:"/color",$$slots:{default:[Ag]},$$scope:{ctx:s}}}),f=new Et({props:{path:"/floating-ui-action",$$slots:{default:[Rg]},$$scope:{ctx:s}}}),h=new Et({props:{path:"/focus-action",$$slots:{default:[Ng]},$$scope:{ctx:s}}}),b=new Et({props:{path:"/keyboard-shortcut-action",$$slots:{default:[Mg]},$$scope:{ctx:s}}}),y=new Et({props:{path:"/scroll-child-action",$$slots:{default:[Pg]},$$scope:{ctx:s}}}),{c(){e=T(),t=_("main"),R(n.$$.fragment),l=T(),R(o.$$.fragment),i=T(),R(r.$$.fragment),a=T(),R(c.$$.fragment),u=T(),R(f.$$.fragment),d=T(),R(h.$$.fragment),m=T(),R(b.$$.fragment),$=T(),R(y.$$.fragment),document.title="APSC \u2022 Home"},m(M,S){k(M,e,S),k(M,t,S),C(n,t,null),p(t,l),C(o,t,null),p(t,i),C(r,t,null),p(t,a),C(c,t,null),p(t,u),C(f,t,null),p(t,d),C(h,t,null),p(t,m),C(b,t,null),p(t,$),C(y,t,null),E=!0},p(M,[S]){const N={};S&1&&(N.$$scope={dirty:S,ctx:M}),n.$set(N);const P={};S&1&&(P.$$scope={dirty:S,ctx:M}),o.$set(P);const O={};S&1&&(O.$$scope={dirty:S,ctx:M}),r.$set(O);const L={};S&1&&(L.$$scope={dirty:S,ctx:M}),c.$set(L);const I={};S&1&&(I.$$scope={dirty:S,ctx:M}),f.$set(I);const D={};S&1&&(D.$$scope={dirty:S,ctx:M}),h.$set(D);const F={};S&1&&(F.$$scope={dirty:S,ctx:M}),b.$set(F);const q={};S&1&&(q.$$scope={dirty:S,ctx:M}),y.$set(q)},i(M){E||(w(n.$$.fragment,M),w(o.$$.fragment,M),w(r.$$.fragment,M),w(c.$$.fragment,M),w(f.$$.fragment,M),w(h.$$.fragment,M),w(b.$$.fragment,M),w(y.$$.fragment,M),E=!0)},o(M){x(n.$$.fragment,M),x(o.$$.fragment,M),x(r.$$.fragment,M),x(c.$$.fragment,M),x(f.$$.fragment,M),x(h.$$.fragment,M),x(b.$$.fragment,M),x(y.$$.fragment,M),E=!1},d(M){M&&v(e),M&&v(t),A(n),A(o),A(r),A(c),A(f),A(h),A(b),A(y)}}}function Lg(s){return Bn.mode.hash(),[]}class Ig extends V{constructor(e){super(),Z(this,e,Lg,Og,K,{})}}new Ig({target:document.getElementById("app")});
