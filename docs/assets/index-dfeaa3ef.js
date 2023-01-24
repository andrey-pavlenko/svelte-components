var pc=Object.defineProperty,hc=Object.defineProperties;var mc=Object.getOwnPropertyDescriptors;var Ss=Object.getOwnPropertySymbols;var ll=Object.prototype.hasOwnProperty,il=Object.prototype.propertyIsEnumerable;var ol=(n,e,t)=>e in n?pc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,et=(n,e)=>{for(var t in e||(e={}))ll.call(e,t)&&ol(n,t,e[t]);if(Ss)for(var t of Ss(e))il.call(e,t)&&ol(n,t,e[t]);return n},_n=(n,e)=>hc(n,mc(e));var co=(n,e)=>{var t={};for(var s in n)ll.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&Ss)for(var s of Ss(n))e.indexOf(s)<0&&il.call(n,s)&&(t[s]=n[s]);return t};var gc=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var vt=(n,e,t)=>new Promise((s,o)=>{var l=a=>{try{r(t.next(a))}catch(c){o(c)}},i=a=>{try{r(t.throw(a))}catch(c){o(c)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,i);r((t=t.apply(n,e)).next())});var r$=gc(ga=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function re(){}const tr=n=>n;function Et(n,e){for(const t in e)n[t]=e[t];return n}function _c(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function nr(n){return n()}function rl(){return Object.create(null)}function Ue(n){n.forEach(nr)}function ct(n){return typeof n=="function"}function J(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Es;function at(n,e){return Es||(Es=document.createElement("a")),Es.href=e,n===Es.href}function bc(n){return Object.keys(n).length===0}function sr(n,...e){if(n==null)return re;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function $n(n,e,t){n.$$.on_destroy.push(sr(e,t))}function Fe(n,e,t,s){if(n){const o=or(n,e,t,s);return n[0](o)}}function or(n,e,t,s){return n[1]&&s?Et(t.ctx.slice(),n[1](s(e))):t.ctx}function ze(n,e,t,s){if(n[2]&&s){const o=n[2](s(t));if(e.dirty===void 0)return o;if(typeof o=="object"){const l=[],i=Math.max(e.dirty.length,o.length);for(let r=0;r<i;r+=1)l[r]=e.dirty[r]|o[r];return l}return e.dirty|o}return e.dirty}function He(n,e,t,s,o,l){if(o){const i=or(e,t,s,l);n.p(i,o)}}function je(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let s=0;s<t;s++)e[s]=-1;return e}return-1}function lr(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Ls(n,e){const t={};e=new Set(e);for(const s in n)!e.has(s)&&s[0]!=="$"&&(t[s]=n[s]);return t}function Dn(n){return n==null?"":n}function tt(n){return n&&ct(n.destroy)?n.destroy:re}const ir=typeof window!="undefined";let $c=ir?()=>window.performance.now():()=>Date.now(),To=ir?n=>requestAnimationFrame(n):re;const jn=new Set;function rr(n){jn.forEach(e=>{e.c(n)||(jn.delete(e),e.f())}),jn.size!==0&&To(rr)}function vc(n){let e;return jn.size===0&&To(rr),{promise:new Promise(t=>{jn.add(e={c:n,f:t})}),abort(){jn.delete(e)}}}function p(n,e){n.appendChild(e)}function ar(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function wc(n){const e=_("style");return kc(ar(n),e),e.sheet}function kc(n,e){return p(n.head||n,e),e.sheet}function y(n,e,t){n.insertBefore(e,t||null)}function k(n){n.parentNode&&n.parentNode.removeChild(n)}function Je(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function _(n){return document.createElement(n)}function yc(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function F(n){return document.createTextNode(n)}function x(){return F(" ")}function Ie(){return F("")}function Y(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function al(n){return function(e){return e.preventDefault(),n.call(this,e)}}function Tc(n){return function(e){e.target===this&&n.call(this,e)}}function m(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function cl(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const s in e)e[s]==null?n.removeAttribute(s):s==="style"?n.style.cssText=e[s]:s==="__value"?n.value=n[s]=e[s]:t[s]&&t[s].set?n[s]=e[s]:m(n,s,e[s])}function At(n){return n===""?null:+n}function xc(n){return Array.from(n.childNodes)}function Oe(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function gt(n,e){n.value=e==null?"":e}function ot(n,e,t,s){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function Dt(n,e){for(let t=0;t<n.options.length;t+=1){const s=n.options[t];if(s.__value===e){s.selected=!0;return}}n.selectedIndex=-1}function es(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}function Ye(n,e,t){n.classList[t?"add":"remove"](e)}function cr(n,e,{bubbles:t=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(n,t,s,e),o}class ur{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=yc(t.nodeName):this.e=_(t.nodeName),this.t=t,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)y(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(k)}}function We(n,e){return new n(e)}const Ds=new Map;let Bs=0;function Sc(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Ec(n,e){const t={stylesheet:wc(e),rules:{}};return Ds.set(n,t),t}function ul(n,e,t,s,o,l,i,r=0){const a=16.666/s;let c=`{
`;for(let $=0;$<=1;$+=a){const w=e+(t-e)*l($);c+=$*100+`%{${i(w,1-w)}}
`}const u=c+`100% {${i(t,1-t)}}
}`,f=`__svelte_${Sc(u)}_${r}`,d=ar(n),{stylesheet:h,rules:g}=Ds.get(d)||Ec(d,n);g[f]||(g[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const b=n.style.animation||"";return n.style.animation=`${b?`${b}, `:""}${f} ${s}ms linear ${o}ms 1 both`,Bs+=1,f}function Ac(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),o=t.length-s.length;o&&(n.style.animation=s.join(", "),Bs-=o,Bs||Cc())}function Cc(){To(()=>{Bs||(Ds.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&k(e)}),Ds.clear())})}let ts;function Gt(n){ts=n}function yn(){if(!ts)throw new Error("Function called outside component initialization");return ts}function Wn(n){yn().$$.on_mount.push(n)}function Pc(n){yn().$$.after_update.push(n)}function bo(n){yn().$$.on_destroy.push(n)}function xo(){const n=yn();return(e,t,{cancelable:s=!1}={})=>{const o=n.$$.callbacks[e];if(o){const l=cr(e,t,{cancelable:s});return o.slice().forEach(i=>{i.call(n,l)}),!l.defaultPrevented}return!0}}function fr(n,e){return yn().$$.context.set(n,e),e}function So(n){return yn().$$.context.get(n)}const Hn=[],Qe=[],Ns=[],$o=[],dr=Promise.resolve();let vo=!1;function pr(){vo||(vo=!0,dr.then(Ao))}function Eo(){return pr(),dr}function wt(n){Ns.push(n)}function wn(n){$o.push(n)}const uo=new Set;let Bn=0;function Ao(){if(Bn!==0)return;const n=ts;do{try{for(;Bn<Hn.length;){const e=Hn[Bn];Bn++,Gt(e),Nc(e.$$)}}catch(e){throw Hn.length=0,Bn=0,e}for(Gt(null),Hn.length=0,Bn=0;Qe.length;)Qe.pop()();for(let e=0;e<Ns.length;e+=1){const t=Ns[e];uo.has(t)||(uo.add(t),t())}Ns.length=0}while(Hn.length);for(;$o.length;)$o.pop()();vo=!1,uo.clear(),Gt(n)}function Nc(n){if(n.fragment!==null){n.update(),Ue(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(wt)}}let Jn;function Rc(){return Jn||(Jn=Promise.resolve(),Jn.then(()=>{Jn=null})),Jn}function fo(n,e,t){n.dispatchEvent(cr(`${e?"intro":"outro"}${t}`))}const Rs=new Set;let Zt;function ye(){Zt={r:0,c:[],p:Zt}}function Te(){Zt.r||Ue(Zt.c),Zt=Zt.p}function T(n,e){n&&n.i&&(Rs.delete(n),n.i(e))}function S(n,e,t,s){if(n&&n.o){if(Rs.has(n))return;Rs.add(n),Zt.c.push(()=>{Rs.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const Mc={duration:0};function rn(n,e,t,s){const o={direction:"both"};let l=e(n,t,o),i=s?0:1,r=null,a=null,c=null;function u(){c&&Ac(n,c)}function f(h,g){const b=h.b-i;return g*=Math.abs(b),{a:i,b:h.b,d:b,duration:g,start:h.start,end:h.start+g,group:h.group}}function d(h){const{delay:g=0,duration:b=300,easing:$=tr,tick:w=re,css:E}=l||Mc,D={start:$c()+g,b:h};h||(D.group=Zt,Zt.r+=1),r||a?a=D:(E&&(u(),c=ul(n,i,h,b,g,$,E)),h&&w(0,1),r=f(D,b),wt(()=>fo(n,h,"start")),vc(C=>{if(a&&C>a.start&&(r=f(a,b),a=null,fo(n,r.b,"start"),E&&(u(),c=ul(n,i,r.b,r.duration,0,$,l.css))),r){if(C>=r.end)w(i=r.b,1-i),fo(n,r.b,"end"),a||(r.b?u():--r.group.r||Ue(r.group.c)),r=null;else if(C>=r.start){const M=C-r.start;i=r.a+r.d*$(M/r.duration),w(i,1-i)}}return!!(r||a)}))}return{run(h){ct(l)?Rc().then(()=>{l=l(o),d(h)}):d(h)},end(){u(),r=a=null}}}function Fs(n,e){const t=e.token={};function s(o,l,i,r){if(e.token!==t)return;e.resolved=r;let a=e.ctx;i!==void 0&&(a=a.slice(),a[i]=r);const c=o&&(e.current=o)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==l&&f&&(ye(),S(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),Te())}):e.block.d(1),c.c(),T(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[l]=c),u&&Ao()}if(_c(n)){const o=yn();if(n.then(l=>{Gt(o),s(e.then,1,e.value,l),Gt(null)},l=>{if(Gt(o),s(e.catch,2,e.error,l),Gt(null),!e.hasCatch)throw l}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,n),!0;e.resolved=n}}function hr(n,e,t){const s=e.slice(),{resolved:o}=n;n.current===n.then&&(s[n.value]=o),n.current===n.catch&&(s[n.error]=o),n.block.p(s,t)}const fn=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Oc(n,e){S(n,1,1,()=>{e.delete(n.key)})}function Ic(n,e,t,s,o,l,i,r,a,c,u,f){let d=n.length,h=l.length,g=d;const b={};for(;g--;)b[n[g].key]=g;const $=[],w=new Map,E=new Map;for(g=h;g--;){const O=f(o,l,g),L=t(O);let I=i.get(L);I?s&&I.p(O,e):(I=c(L,O),I.c()),w.set(L,$[g]=I),L in b&&E.set(L,Math.abs(g-b[L]))}const D=new Set,C=new Set;function M(O){T(O,1),O.m(r,u),i.set(O.key,O),u=O.first,h--}for(;d&&h;){const O=$[h-1],L=n[d-1],I=O.key,j=L.key;O===L?(u=O.first,d--,h--):w.has(j)?!i.has(I)||D.has(I)?M(O):C.has(j)?d--:E.get(I)>E.get(j)?(C.add(I),M(O)):(D.add(j),d--):(a(L,i),d--)}for(;d--;){const O=n[d];w.has(O.key)||a(O,i)}for(;h;)M($[h-1]);return $}function Tn(n,e){const t={},s={},o={$$scope:1};let l=n.length;for(;l--;){const i=n[l],r=e[l];if(r){for(const a in i)a in r||(s[a]=1);for(const a in r)o[a]||(t[a]=r[a],o[a]=1);n[l]=r}else for(const a in i)o[a]=1}for(const i in s)i in t||(t[i]=void 0);return t}function Gn(n){return typeof n=="object"&&n!==null?n:{}}function an(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function R(n){n&&n.c()}function P(n,e,t,s){const{fragment:o,after_update:l}=n.$$;o&&o.m(e,t),s||wt(()=>{const i=n.$$.on_mount.map(nr).filter(ct);n.$$.on_destroy?n.$$.on_destroy.push(...i):Ue(i),n.$$.on_mount=[]}),l.forEach(wt)}function N(n,e){const t=n.$$;t.fragment!==null&&(Ue(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Lc(n,e){n.$$.dirty[0]===-1&&(Hn.push(n),pr(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ne(n,e,t,s,o,l,i,r=[-1]){const a=ts;Gt(n);const c=n.$$={fragment:null,ctx:[],props:l,update:re,not_equal:o,bound:rl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:rl(),dirty:r,skip_bound:!1,root:e.target||a.$$.root};i&&i(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,d,...h)=>{const g=h.length?h[0]:d;return c.ctx&&o(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&Lc(n,f)),d}):[],c.update(),u=!0,Ue(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=xc(e.target);c.fragment&&c.fragment.l(f),f.forEach(k)}else c.fragment&&c.fragment.c();e.intro&&T(n.$$.fragment),P(n,e.target,e.anchor,e.customElement),Ao()}Gt(a)}class se{$destroy(){N(this,1),this.$destroy=re}$on(e,t){if(!ct(t))return re;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!bc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Fn=[];function Dc(n,e){return{subscribe:kn(n,e).subscribe}}function kn(n,e=re){let t;const s=new Set;function o(r){if(J(n,r)&&(n=r,t)){const a=!Fn.length;for(const c of s)c[1](),Fn.push(c,n);if(a){for(let c=0;c<Fn.length;c+=2)Fn[c][0](Fn[c+1]);Fn.length=0}}}function l(r){o(r(n))}function i(r,a=re){const c=[r,a];return s.add(c),s.size===1&&(t=e(o)||re),r(n),()=>{s.delete(c),s.size===0&&(t(),t=null)}}return{set:o,update:l,subscribe:i}}function Co(n,e,t){const s=!Array.isArray(n),o=s?[n]:n,l=e.length<2;return Dc(t,i=>{let r=!1;const a=[];let c=0,u=re;const f=()=>{if(c)return;u();const h=e(s?a[0]:a,i);l?i(h):u=ct(h)?h:re},d=o.map((h,g)=>sr(h,b=>{a[g]=b,c&=~(1<<g),r&&f()},()=>{c|=1<<g}));return r=!0,f(),function(){Ue(d),u()}})}const Xs=typeof location!="undefined",mr=typeof history!="undefined",Bc=mr&&typeof history.pushState=="function",gr=typeof window!="undefined",Fc=gr&&window!==window.parent,zc=Xs&&(location.protocol==="file:"||/[-_\w]+[.][\w]+$/i.test(location.pathname)),zs=gr&&mr&&Xs&&!Fc,rs=!Bc||zc,Po="#!",Un={array:{separator:",",format:"bracket"},convertTypes:!0,hashbang:!1,basePath:"",nesting:3,sideEffect:zs};function Hc(){const n=No().pathname;if(!n)return"";const e=Ro(),t=Ms(n,e);return _r(t)}function No(){if(!Xs)return{};if(rs){const n=location.hash;return new URL(n.indexOf(Po)===0?n.substring(2):n.substring(1),"file:")}return location}function Ro(){return Xs&&rs?location.pathname:"/"}function jc(n){rs&&(n=Po+n);const e=Ro();return(e[e.length-1]==="/"?e.substring(0,e.length-1):e)+n}function Uc(n){n=Ms(n,location.origin);const e=Ro();return n=Ms(n,e),rs&&(n=Ms(n,Po)),_r(n)}function Kc(n,e,t){const{pattern:s,keys:o}=Gc(e,t),l=s.exec(n);return l?o.reduce((i,r,a)=>(i[r]=ns(l[++a])||null,i),{}):null}function qc(n=""){return n?n.replace("?","").replace(/\+/g," ").split("&").filter(Boolean).reduce((e,t)=>{let[s,o]=t.split(/=(.*)/,2);s=decodeURIComponent(s||""),o=decodeURIComponent(o||"");let l=br(s,o);return e=Object.keys(l).reduce((i,r)=>{const a=ns(l[r]);return i[r]?Array.isArray(i[r])?i[r]=i[r].concat(a):Object.assign(i[r],a):i[r]=a,i},e),e},{}):{}}function Wc(n={}){const e=Object.keys(n).reduce((t,s)=>{if(n.hasOwnProperty(s)&&isNaN(parseInt(s,10)))if(Array.isArray(n[s]))n[s].forEach(o=>t.push(s+"[]="+encodeURIComponent(o)));else if(typeof n[s]=="object"&&n[s]!==null){let o=br(s,n[s]);t.push($r(o))}else t.push(s+"="+encodeURIComponent(n[s]));return t},[]).join("&");return e?`?${e}`:""}function _r(n){return n[0]!=="/"?"/"+n:n}function Ms(n,e){return n.indexOf(e)===0?n.substring(e.length):n}function Gc(n,e=!1){let t=n.split("/"),s=[],o="",l,i,r,a;for(t[0]||t.shift();r=t.shift();)l=r[0],l==="*"?(s.push("wild"),o+="/(.*)"):l===":"?(i=r.indexOf("?",1),a=r.indexOf(".",1),s.push(r.substring(1,~i?i:~a?a:r.length)),o+=~i&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(o+=(~i?"?":"")+"\\"+r.substring(a))):o+="/"+r;return{keys:s,pattern:new RegExp("^"+o+(e?"(?:$|/)":"/?$"),"i")}}function ns(n){return Array.isArray(n)?(n[n.length-1]=ns(n[n.length-1]),n):typeof n=="object"?Object.entries(n).reduce((e,[t,s])=>(e[t]=ns(s),e),{}):n==="true"||n==="false"?n==="true":n==="null"?null:n==="undefined"?void 0:n!==""&&!isNaN(Number(n))&&Number(n).toString()===n?Number(n):n}function br(n,e){const t=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g;let o=t.exec(n),l=o?n.slice(0,o.index):n,i=[];l&&i.push(l);let r=0;for(;(o=s.exec(n))&&r<Un.nesting;)r++,i.push(o[1]);return o&&i.push("["+n.slice(o.index)+"]"),Zc(i,e)}function Zc(n,e){let t=e;for(let s=n.length-1;s>=0;--s){let o=n[s],l;if(o==="[]")l=[].concat(t);else{l={};const i=o.charAt(0)==="["&&o.charAt(o.length-1)==="]"?o.slice(1,-1):o,r=parseInt(i,10);!isNaN(r)&&o!==i&&String(r)===i&&r>=0?(l=[],l[r]=ns(t)):l[i]=t}t=l}return t}function $r(n={},e=""){return Object.entries(n).map(([t,s])=>typeof s=="object"?$r(s,e?e+`[${t}]`:t):[e+`[${t}]`,s].join("=")).join("&")}const Xc=vr(n=>typeof n=="string"?new String(n):n),Qc=vr(n=>(typeof n!="string"&&(n=Wc(n.params)),Object.assign(new String(n),{params:qc(n)})));function vr(n){return e=>{const{subscribe:t,update:s,set:o}=kn(n(e));return{subscribe:t,update:l=>s(i=>n(l(i))),set:l=>o(n(l))}}}const wr=Hc(),kr=No().search,yr=No().hash;let po=!0,fl=!1;const Mo=Xc(wr),Tr=Qc(kr),xr=kn(yr,n=>{const e=()=>rs?Er(location.hash):n(location.hash);return zs&&Un.sideEffect&&window.addEventListener("hashchange",e),()=>zs&&Un.sideEffect&&window.removeEventListener("hashchange",e)}),Sr=kn({}),Yc=Co([Mo,Tr,xr],([n,e,t],s)=>{let o=!1;return Eo().then(()=>{o||s(n.toString()+e.toString()+t.toString())}),()=>o=!0},wr+kr+yr),Jc=Co(Mo,n=>(e="*",t)=>{const s=Kc(n.toString(),e,t);return s&&Object.assign(n,{params:s}),!!s});zs&&(Yc.subscribe(n=>{if(Un.sideEffect){if(po)return po=!1;history[fl?"replaceState":"pushState"]({},null,jc(n)),fl=!1}}),Sr.subscribe(n=>{Un.sideEffect&&history.replaceState(n,null,location.pathname+location.search+location.hash)}),window.addEventListener("popstate",n=>{Un.sideEffect&&(po=!0,Er(location.href,n.state))}));function Er(n="",e){const{pathname:t,search:s,hash:o}=new URL(Uc(n),"file:");Mo.set(t),Eo().then(()=>{Tr.set(s),xr.set(o),e&&Sr.set(e)})}const mt="/svelte-components/assets/npm-logo-185f97d3.svg",{document:dl}=fn;function Vc(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O,L,I,j,z,U,Z,X,ie,V,H,G,ee,fe,be,ge,Le,Ge,ve,_e,ae,Pe,ce,$e,Q,Ee,De,Ce,Re,Ot,it,de,Ct,Me,xe,Ve,rt,Pt,Xe,K,te,ue,W,Se,Be,Ne,bt,pn,$t,Ht,An,Xn,Qn,It,Cn,cs,Nt,Tt,Pn,Nn,jt,Jt,Rn,us,fs,Lt,Mn,Ut,On,Yn,ut,Vt,ds,ps,hn,hs,pt,ms;return dl.title=e=document.title.replace(/(•).*$/,"$1 Home"),{c(){t=x(),s=_("section"),o=_("h1"),o.textContent="Packages",l=x(),i=_("div"),r=_("div"),a=_("div"),c=_("a"),u=F("@apsc/tabs"),f=x(),d=_("a"),h=_("img"),b=x(),$=_("div"),$.textContent="A set of components for organizing a tabbed interface",w=x(),E=_("div"),D=_("div"),C=_("a"),M=F("@apsc/glob-notify"),O=x(),L=_("a"),I=_("img"),z=x(),U=_("div"),U.textContent="Component for notifications globally for the entire application",Z=x(),X=_("div"),ie=_("div"),V=_("a"),H=F("@apsc/color"),G=x(),ee=_("a"),fe=_("img"),ge=x(),Le=_("div"),Le.textContent="A set of components for picking and editing colors",Ge=x(),ve=_("div"),_e=_("div"),ae=_("div"),Pe=_("a"),ce=F("@apsc/floating-ui-action"),$e=x(),Q=_("a"),Ee=_("img"),Ce=x(),Re=_("div"),Ot=F("Floating UI (ex. Popper) action for directive "),it=_("code"),de=F("use"),Ct=x(),Me=_("div"),xe=_("div"),Ve=_("a"),rt=F("@apsc/focus-action"),Pt=x(),Xe=_("a"),K=_("img"),ue=x(),W=_("div"),Se=F("Action to control "),Be=_("code"),Ne=F("focusin"),bt=F(` and
        `),pn=_("code"),$t=F("focusout"),Ht=F(" for directive "),An=_("code"),Xn=F("use"),Qn=x(),It=_("div"),Cn=_("div"),Cn.innerHTML='<a href="/keyboard-shortcut-action">@apsc/keyboard-shortcut-action</a>',cs=x(),Nt=_("a"),Tt=_("img"),Nn=x(),jt=_("div"),Jt=F("Action to call a function by keyboard shortcut for Svelte directive "),Rn=_("code"),us=F("use"),fs=x(),Lt=_("div"),Mn=_("div"),Ut=_("a"),On=F("@apsc/scroll-child-action"),Yn=x(),ut=_("a"),Vt=_("img"),ps=x(),hn=_("div"),hs=F("Action to scroll the child to parent viewport for Svelte directive "),pt=_("code"),ms=F("use"),m(o,"class","font-bold my-4 pb-2 text-3xl border-b border-gray-400"),m(c,"href",n[1]+"/tabs"),m(a,"class","pkg-tile__link svelte-1gf5keo"),at(h.src,g=mt)||m(h,"src",g),m(h,"alt","NPM logo"),m(h,"class","svelte-1gf5keo"),m(d,"class","pkg-tile__npm svelte-1gf5keo"),m(d,"href","https://www.npmjs.com/package/@apsc/tabs"),m(d,"target","_blank"),m(d,"rel","noreferrer"),m($,"class","pkg-tile__description svelte-1gf5keo"),m(r,"class","pkg-tile svelte-1gf5keo"),m(C,"href",n[1]+"/glob-notify"),m(D,"class","pkg-tile__link svelte-1gf5keo"),at(I.src,j=mt)||m(I,"src",j),m(I,"alt","NPM logo"),m(I,"class","svelte-1gf5keo"),m(L,"class","pkg-tile__npm svelte-1gf5keo"),m(L,"href","https://www.npmjs.com/package/@apsc/glob-notify"),m(L,"target","_blank"),m(L,"rel","noreferrer"),m(U,"class","pkg-tile__description svelte-1gf5keo"),m(E,"class","pkg-tile svelte-1gf5keo"),m(V,"href",n[1]+"/color"),m(ie,"class","pkg-tile__link svelte-1gf5keo"),at(fe.src,be=mt)||m(fe,"src",be),m(fe,"alt","NPM logo"),m(fe,"class","svelte-1gf5keo"),m(ee,"class","pkg-tile__npm svelte-1gf5keo"),m(ee,"href","https://www.npmjs.com/package/@apsc/color"),m(ee,"target","_blank"),m(ee,"rel","noreferrer"),m(Le,"class","pkg-tile__description svelte-1gf5keo"),m(X,"class","pkg-tile svelte-1gf5keo"),m(i,"class","flex flex-wrap gap-6 mb-12"),m(Pe,"href",n[1]+"/floating-ui-action"),m(ae,"class","pkg-tile__link svelte-1gf5keo"),at(Ee.src,De=mt)||m(Ee,"src",De),m(Ee,"alt","NPM logo"),m(Ee,"class","svelte-1gf5keo"),m(Q,"class","pkg-tile__npm svelte-1gf5keo"),m(Q,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),m(Q,"target","_blank"),m(Q,"rel","noreferrer"),m(it,"class",Dn(n[0].code)+" svelte-1gf5keo"),m(Re,"class","pkg-tile__description svelte-1gf5keo"),m(_e,"class","pkg-tile svelte-1gf5keo"),m(Ve,"href",n[1]+"/focus-action"),m(xe,"class","pkg-tile__link svelte-1gf5keo"),at(K.src,te=mt)||m(K,"src",te),m(K,"alt","NPM logo"),m(K,"class","svelte-1gf5keo"),m(Xe,"class","pkg-tile__npm svelte-1gf5keo"),m(Xe,"href","https://www.npmjs.com/package/@apsc/focus-action"),m(Xe,"target","_blank"),m(Xe,"rel","noreferrer"),m(Be,"class",Dn(n[0].code)+" svelte-1gf5keo"),m(pn,"class",Dn(n[0].code)+" svelte-1gf5keo"),m(An,"class",Dn(n[0].code)+" svelte-1gf5keo"),m(W,"class","pkg-tile__description svelte-1gf5keo"),m(Me,"class","pkg-tile svelte-1gf5keo"),m(Cn,"class","pkg-tile__link svelte-1gf5keo"),at(Tt.src,Pn=mt)||m(Tt,"src",Pn),m(Tt,"alt","NPM logo"),m(Tt,"class","svelte-1gf5keo"),m(Nt,"class","pkg-tile__npm svelte-1gf5keo"),m(Nt,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),m(Nt,"target","_blank"),m(Nt,"rel","noreferrer"),m(Rn,"class",Dn(n[0].code)+" svelte-1gf5keo"),m(jt,"class","pkg-tile__description svelte-1gf5keo"),m(It,"class","pkg-tile svelte-1gf5keo"),m(Ut,"href",n[1]+"/scroll-child-action"),m(Mn,"class","pkg-tile__link svelte-1gf5keo"),at(Vt.src,ds=mt)||m(Vt,"src",ds),m(Vt,"alt","NPM logo"),m(Vt,"class","svelte-1gf5keo"),m(ut,"class","pkg-tile__npm svelte-1gf5keo"),m(ut,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),m(ut,"target","_blank"),m(ut,"rel","noreferrer"),m(pt,"class",Dn(n[0].code)+" svelte-1gf5keo"),m(hn,"class","pkg-tile__description svelte-1gf5keo"),m(Lt,"class","pkg-tile svelte-1gf5keo"),m(ve,"class","flex flex-wrap gap-6 mb-12")},m(en,In){y(en,t,In),y(en,s,In),p(s,o),p(s,l),p(s,i),p(i,r),p(r,a),p(a,c),p(c,u),p(r,f),p(r,d),p(d,h),p(r,b),p(r,$),p(i,w),p(i,E),p(E,D),p(D,C),p(C,M),p(E,O),p(E,L),p(L,I),p(E,z),p(E,U),p(i,Z),p(i,X),p(X,ie),p(ie,V),p(V,H),p(X,G),p(X,ee),p(ee,fe),p(X,ge),p(X,Le),p(s,Ge),p(s,ve),p(ve,_e),p(_e,ae),p(ae,Pe),p(Pe,ce),p(_e,$e),p(_e,Q),p(Q,Ee),p(_e,Ce),p(_e,Re),p(Re,Ot),p(Re,it),p(it,de),p(ve,Ct),p(ve,Me),p(Me,xe),p(xe,Ve),p(Ve,rt),p(Me,Pt),p(Me,Xe),p(Xe,K),p(Me,ue),p(Me,W),p(W,Se),p(W,Be),p(Be,Ne),p(W,bt),p(W,pn),p(pn,$t),p(W,Ht),p(W,An),p(An,Xn),p(ve,Qn),p(ve,It),p(It,Cn),p(It,cs),p(It,Nt),p(Nt,Tt),p(It,Nn),p(It,jt),p(jt,Jt),p(jt,Rn),p(Rn,us),p(ve,fs),p(ve,Lt),p(Lt,Mn),p(Mn,Ut),p(Ut,On),p(Lt,Yn),p(Lt,ut),p(ut,Vt),p(Lt,ps),p(Lt,hn),p(hn,hs),p(hn,pt),p(pt,ms)},p(en,[In]){In&0&&e!==(e=document.title.replace(/(•).*$/,"$1 Home"))&&(dl.title=e)},i:re,o:re,d(en){en&&k(t),en&&k(s)}}}function eu(n){return[{code:"bg-gray-200 px-1 rounded-sm"},"/svelte-components"]}class tu extends se{constructor(e){super(),ne(this,e,eu,Vc,J,{})}}const Oo=Symbol("TABS");function nu({mode:n,tabs:e,selectedTab:t,panels:s,selectedPanel:o,selectedTabClass:l,hiddenPanelClass:i}){const r=Co(t,a=>e.indexOf(a!=null?a:Symbol()));return{mode:n,registerTab:()=>{const a=Symbol("tab");return e.push(a),t.update(c=>c!=null?c:a),bo(()=>{const c=e.indexOf(a);c>=0&&(e.splice(c,1),t.update(u=>u===a?e[c]||e[e.length-1]:u))}),a},registerPanel:()=>{const a=Symbol("panel");return s.push(a),o.update(c=>c!=null?c:a),bo(()=>{const c=s.indexOf(a);c>=0&&(s.splice(c,1),o.update(u=>u===a?s[c]||s[s.length-1]:u))}),a},selectTab:a=>{var u;let c;typeof a=="number"?c=e.indexOf((u=e.at(a))!=null?u:Symbol()):c=e.indexOf(a),c>=0&&c<e.length&&(t.set(e[c]),o.set(s[c]))},selectedTab:t,selectedPanel:o,selectedIndex:r,selectedTabClass:l,hiddenPanelClass:i}}function su(n){let e,t,s;const o=n[7].default,l=Fe(o,n,n[6],null);return{c(){e=_("div"),l&&l.c(),m(e,"class",t="c-tabs"+(n[0]?" "+n[0]:""))},m(i,r){y(i,e,r),l&&l.m(e,null),s=!0},p(i,[r]){l&&l.p&&(!s||r&64)&&He(l,o,i,i[6],s?ze(o,i[6],r,null):je(i[6]),null),(!s||r&1&&t!==(t="c-tabs"+(i[0]?" "+i[0]:"")))&&m(e,"class",t)},i(i){s||(T(l,i),s=!0)},o(i){S(l,i),s=!1},d(i){i&&k(e),l&&l.d(i)}}}function ou(n,e,t){let{$$slots:s={},$$scope:o}=e,{class:l=""}=e,{selectedTabClass:i="active"}=e,{hiddenPanelClass:r=""}=e,{mode:a="hide"}=e;const c=[],u=[],f=kn(null),d=kn(null),h=nu({mode:a,tabs:c,panels:u,selectedTab:f,selectedPanel:d,selectedTabClass:i,hiddenPanelClass:r}),g=h.selectedIndex,b=h.selectTab;return fr(Oo,h),n.$$set=$=>{"class"in $&&t(0,l=$.class),"selectedTabClass"in $&&t(1,i=$.selectedTabClass),"hiddenPanelClass"in $&&t(2,r=$.hiddenPanelClass),"mode"in $&&t(3,a=$.mode),"$$scope"in $&&t(6,o=$.$$scope)},[l,i,r,a,g,b,o,s]}class kt extends se{constructor(e){super(),ne(this,e,ou,su,J,{class:0,selectedTabClass:1,hiddenPanelClass:2,mode:3,selectedIndex:4,selectTab:5})}get selectedIndex(){return this.$$.ctx[4]}get selectTab(){return this.$$.ctx[5]}}function lu(n){let e,t,s;const o=n[2].default,l=Fe(o,n,n[1],null);return{c(){e=_("div"),l&&l.c(),m(e,"class",t="c-tabs__tablist"+(n[0]?" "+n[0]:""))},m(i,r){y(i,e,r),l&&l.m(e,null),s=!0},p(i,[r]){l&&l.p&&(!s||r&2)&&He(l,o,i,i[1],s?ze(o,i[1],r,null):je(i[1]),null),(!s||r&1&&t!==(t="c-tabs__tablist"+(i[0]?" "+i[0]:"")))&&m(e,"class",t)},i(i){s||(T(l,i),s=!0)},o(i){S(l,i),s=!1},d(i){i&&k(e),l&&l.d(i)}}}function iu(n,e,t){let{$$slots:s={},$$scope:o}=e,{class:l=""}=e;return n.$$set=i=>{"class"in i&&t(0,l=i.class),"$$scope"in i&&t(1,o=i.$$scope)},[l,o,s]}let yt=class extends se{constructor(e){super(),ne(this,e,iu,lu,J,{class:0})}};const ru=n=>({index:n&32,tabId:n&64,isActive:n&2}),pl=n=>({index:n[5],tabId:n[6],panelId:n[10],isActive:n[1]===n[10]});function hl(n){let e,t,s;const o=n[13].default,l=Fe(o,n,n[12],pl);return{c(){e=_("div"),l&&l.c(),m(e,"class",t=["c-tabs__tabpanel",n[0],n[2]].filter(ml).join(" ")),m(e,"style",n[3])},m(i,r){y(i,e,r),l&&l.m(e,null),s=!0},p(i,r){l&&l.p&&(!s||r&4194)&&He(l,o,i,i[12],s?ze(o,i[12],r,ru):je(i[12]),pl),(!s||r&5&&t!==(t=["c-tabs__tabpanel",i[0],i[2]].filter(ml).join(" ")))&&m(e,"class",t),(!s||r&8)&&m(e,"style",i[3])},i(i){s||(T(l,i),s=!0)},o(i){S(l,i),s=!1},d(i){i&&k(e),l&&l.d(i)}}}function au(n){let e,t,s=!n[4]&&hl(n);return{c(){s&&s.c(),e=Ie()},m(o,l){s&&s.m(o,l),y(o,e,l),t=!0},p(o,[l]){o[4]?s&&(ye(),S(s,1,1,()=>{s=null}),Te()):s?(s.p(o,l),l&16&&T(s,1)):(s=hl(o),s.c(),T(s,1),s.m(e.parentNode,e))},i(o){t||(T(s),t=!0)},o(o){S(s),t=!1},d(o){s&&s.d(o),o&&k(e)}}}const ml=n=>!!n;function cu(n,e,t){let s,o,l,{$$slots:i={},$$scope:r}=e,{class:a=""}=e;const{mode:c,registerPanel:u,selectedPanel:f,selectedTab:d,selectedIndex:h,hiddenPanelClass:g}=So(Oo);$n(n,f,C=>t(1,s=C)),$n(n,d,C=>t(6,l=C)),$n(n,h,C=>t(5,o=C));let{hiddenClass:b=g}=e;const $=u();let w="",E,D=!0;return n.$$set=C=>{"class"in C&&t(0,a=C.class),"hiddenClass"in C&&t(11,b=C.hiddenClass),"$$scope"in C&&t(12,r=C.$$scope)},n.$$.update=()=>{n.$$.dirty&2050&&function(C){C?(t(4,D=!1),t(3,E=void 0),t(2,w="")):c!=="hide"?(t(4,D=!0),t(3,E=void 0),t(2,w="")):(t(4,D=!1),b?(t(3,E=void 0),t(2,w=b)):(t(3,E="display: none"),t(2,w="")))}(s===$)},[a,s,w,E,D,o,l,f,d,h,$,b,r,i]}class we extends se{constructor(e){super(),ne(this,e,cu,au,J,{class:0,hiddenClass:11})}}const uu=n=>({index:n&16,isActive:n&8}),gl=n=>({index:n[4],id:n[8],isActive:n[3]===n[8]});function fu(n){let e,t,s,o,l;const i=n[10].default,r=Fe(i,n,n[9],gl);return{c(){e=_("button"),r&&r.c(),m(e,"class",t=["c-tabs__tab",n[0],n[3]===n[8]?n[1]:""].filter(_l).join(" ")),e.disabled=n[2]},m(a,c){y(a,e,c),r&&r.m(e,null),s=!0,o||(l=Y(e,"click",n[11]),o=!0)},p(a,[c]){r&&r.p&&(!s||c&536)&&He(r,i,a,a[9],s?ze(i,a[9],c,uu):je(a[9]),gl),(!s||c&11&&t!==(t=["c-tabs__tab",a[0],a[3]===a[8]?a[1]:""].filter(_l).join(" ")))&&m(e,"class",t),(!s||c&4)&&(e.disabled=a[2])},i(a){s||(T(r,a),s=!0)},o(a){S(r,a),s=!1},d(a){a&&k(e),r&&r.d(a),o=!1,l()}}}const _l=n=>!!n;function du(n,e,t){let s,o,{$$slots:l={},$$scope:i}=e,{class:r=""}=e;const{registerTab:a,selectTab:c,selectedTab:u,selectedIndex:f,selectedTabClass:d}=So(Oo);$n(n,u,w=>t(3,s=w)),$n(n,f,w=>t(4,o=w));let{selectedClass:h=d}=e,{disabled:g=void 0}=e;const b=a(),$=()=>c(b);return n.$$set=w=>{"class"in w&&t(0,r=w.class),"selectedClass"in w&&t(1,h=w.selectedClass),"disabled"in w&&t(2,g=w.disabled),"$$scope"in w&&t(9,i=w.$$scope)},[r,h,g,s,o,c,u,f,b,i,l,$]}class ke extends se{constructor(e){super(),ne(this,e,du,fu,J,{class:0,selectedClass:1,disabled:2})}}const pu=`<div class="component__source">Source <code>Tabs.svelte</code></div>
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
<td class="slot__props"><code>{ index: number; tabId: symbol; id: symbol; isActive: boolean }</code></td></tr></table>`;function hu(){const n=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||n(e)},Wn(()=>{console.warn=n})}function bl(n,e,t){const s=n.slice();return s[18]=e[t],s}function $l(n,e,t){const s=n.slice();return s[18]=e[t],s}function vl(n,e,t){const s=n.slice();return s[10]=e[t],s}function wl(n,e,t){const s=n.slice();return s[13]=e[t],s[15]=t,s}function kl(n,e,t){const s=n.slice();return s[16]=e[t],s[15]=t,s}function yl(n,e,t){const s=n.slice();return s[7]=e[t],s}function mu(n){let e,t,s,o;const l=[$u,bu,_u],i=[];function r(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=r(n),t=i[e]=l[e](n),{c(){t.c(),s=Ie()},m(a,c){i[e].m(a,c),y(a,s,c),o=!0},p(a,c){let u=e;e=r(a),e===u?i[e].p(a,c):(ye(),S(i[u],1,1,()=>{i[u]=null}),Te(),t=i[e],t?t.p(a,c):(t=i[e]=l[e](a),t.c()),T(t,1),t.m(s.parentNode,s))},i(a){o||(T(t),o=!0)},o(a){S(t),o=!1},d(a){i[e].d(a),a&&k(s)}}}function gu(n){let e,t,s=n[1],o=[];for(let i=0;i<s.length;i+=1)o[i]=Cl(yl(n,s,i));const l=i=>S(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Ie()},m(i,r){for(let a=0;a<o.length;a+=1)o[a].m(i,r);y(i,e,r),t=!0},p(i,r){if(r&34){s=i[1];let a;for(a=0;a<s.length;a+=1){const c=yl(i,s,a);o[a]?(o[a].p(c,r),T(o[a],1)):(o[a]=Cl(c),o[a].c(),T(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=s.length;a<o.length;a+=1)l(a);Te()}},i(i){if(!t){for(let r=0;r<s.length;r+=1)T(o[r]);t=!0}},o(i){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)S(o[r]);t=!1},d(i){Je(o,i),i&&k(e)}}}function _u(n){let e,t,s;const o=[n[6]];var l=n[5][n[0]];function i(r){let a={$$slots:{default:[ku]},$$scope:{ctx:r}};for(let c=0;c<o.length;c+=1)a=Et(a,o[c]);return{props:a}}return l&&(e=We(l,i(n))),{c(){e&&R(e.$$.fragment),t=Ie()},m(r,a){e&&P(e,r,a),y(r,t,a),s=!0},p(r,a){const c=a&64?Tn(o,[Gn(r[6])]):{};if(a&8388706&&(c.$$scope={dirty:a,ctx:r}),l!==(l=r[5][r[0]])){if(e){ye();const u=e;S(u.$$.fragment,1,0,()=>{N(u,1)}),Te()}l?(e=We(l,i(r)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&S(e.$$.fragment,r),s=!1},d(r){r&&k(t),e&&N(e,r)}}}function bu(n){let e,t,s,o;const l=[Tu,yu],i=[];function r(a,c){return a[4]?0:1}return e=r(n),t=i[e]=l[e](n),{c(){t.c(),s=Ie()},m(a,c){i[e].m(a,c),y(a,s,c),o=!0},p(a,c){let u=e;e=r(a),e===u?i[e].p(a,c):(ye(),S(i[u],1,1,()=>{i[u]=null}),Te(),t=i[e],t?t.p(a,c):(t=i[e]=l[e](a),t.c()),T(t,1),t.m(s.parentNode,s))},i(a){o||(T(t),o=!0)},o(a){S(t),o=!1},d(a){i[e].d(a),a&&k(s)}}}function $u(n){let e,t,s;var o=n[5].table;function l(i){return{props:{$$slots:{default:[Iu]},$$scope:{ctx:i}}}}return o&&(e=We(o,l(n))),{c(){e&&R(e.$$.fragment),t=Ie()},m(i,r){e&&P(e,i,r),y(i,t,r),s=!0},p(i,r){const a={};if(r&8388716&&(a.$$scope={dirty:r,ctx:i}),o!==(o=i[5].table)){if(e){ye();const c=e;S(c.$$.fragment,1,0,()=>{N(c,1)}),Te()}o?(e=We(o,l(i)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(i){s||(e&&T(e.$$.fragment,i),s=!0)},o(i){e&&S(e.$$.fragment,i),s=!1},d(i){i&&k(t),e&&N(e,i)}}}function vu(n){let e=n[6].raw+"",t;return{c(){t=F(e)},m(s,o){y(s,t,o)},p(s,o){o&64&&e!==(e=s[6].raw+"")&&Oe(t,e)},i:re,o:re,d(s){s&&k(t)}}}function wu(n){let e,t;return e=new xn({props:{tokens:n[1],renderers:n[5]}}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&2&&(l.tokens=s[1]),o&32&&(l.renderers=s[5]),e.$set(l)},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function ku(n){let e,t,s,o;const l=[wu,vu],i=[];function r(a,c){return a[1]?0:1}return e=r(n),t=i[e]=l[e](n),{c(){t.c(),s=Ie()},m(a,c){i[e].m(a,c),y(a,s,c),o=!0},p(a,c){let u=e;e=r(a),e===u?i[e].p(a,c):(ye(),S(i[u],1,1,()=>{i[u]=null}),Te(),t=i[e],t?t.p(a,c):(t=i[e]=l[e](a),t.c()),T(t,1),t.m(s.parentNode,s))},i(a){o||(T(t),o=!0)},o(a){S(t),o=!1},d(a){i[e].d(a),a&&k(s)}}}function yu(n){let e,t,s;const o=[{ordered:n[4]},n[6]];var l=n[5].list;function i(r){let a={$$slots:{default:[Su]},$$scope:{ctx:r}};for(let c=0;c<o.length;c+=1)a=Et(a,o[c]);return{props:a}}return l&&(e=We(l,i(n))),{c(){e&&R(e.$$.fragment),t=Ie()},m(r,a){e&&P(e,r,a),y(r,t,a),s=!0},p(r,a){const c=a&80?Tn(o,[a&16&&{ordered:r[4]},a&64&&Gn(r[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),l!==(l=r[5].list)){if(e){ye();const u=e;S(u.$$.fragment,1,0,()=>{N(u,1)}),Te()}l?(e=We(l,i(r)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&S(e.$$.fragment,r),s=!1},d(r){r&&k(t),e&&N(e,r)}}}function Tu(n){let e,t,s;const o=[{ordered:n[4]},n[6]];var l=n[5].list;function i(r){let a={$$slots:{default:[Au]},$$scope:{ctx:r}};for(let c=0;c<o.length;c+=1)a=Et(a,o[c]);return{props:a}}return l&&(e=We(l,i(n))),{c(){e&&R(e.$$.fragment),t=Ie()},m(r,a){e&&P(e,r,a),y(r,t,a),s=!0},p(r,a){const c=a&80?Tn(o,[a&16&&{ordered:r[4]},a&64&&Gn(r[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),l!==(l=r[5].list)){if(e){ye();const u=e;S(u.$$.fragment,1,0,()=>{N(u,1)}),Te()}l?(e=We(l,i(r)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&S(e.$$.fragment,r),s=!1},d(r){r&&k(t),e&&N(e,r)}}}function xu(n){let e,t,s;return e=new xn({props:{tokens:n[18].tokens,renderers:n[5]}}),{c(){R(e.$$.fragment),t=x()},m(o,l){P(e,o,l),y(o,t,l),s=!0},p(o,l){const i={};l&64&&(i.tokens=o[18].tokens),l&32&&(i.renderers=o[5]),e.$set(i)},i(o){s||(T(e.$$.fragment,o),s=!0)},o(o){S(e.$$.fragment,o),s=!1},d(o){N(e,o),o&&k(t)}}}function Tl(n){let e,t,s;const o=[n[18]];var l=n[5].unorderedlistitem||n[5].listitem;function i(r){let a={$$slots:{default:[xu]},$$scope:{ctx:r}};for(let c=0;c<o.length;c+=1)a=Et(a,o[c]);return{props:a}}return l&&(e=We(l,i(n))),{c(){e&&R(e.$$.fragment),t=Ie()},m(r,a){e&&P(e,r,a),y(r,t,a),s=!0},p(r,a){const c=a&64?Tn(o,[Gn(r[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),l!==(l=r[5].unorderedlistitem||r[5].listitem)){if(e){ye();const u=e;S(u.$$.fragment,1,0,()=>{N(u,1)}),Te()}l?(e=We(l,i(r)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&S(e.$$.fragment,r),s=!1},d(r){r&&k(t),e&&N(e,r)}}}function Su(n){let e,t,s=n[6].items,o=[];for(let i=0;i<s.length;i+=1)o[i]=Tl(bl(n,s,i));const l=i=>S(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Ie()},m(i,r){for(let a=0;a<o.length;a+=1)o[a].m(i,r);y(i,e,r),t=!0},p(i,r){if(r&96){s=i[6].items;let a;for(a=0;a<s.length;a+=1){const c=bl(i,s,a);o[a]?(o[a].p(c,r),T(o[a],1)):(o[a]=Tl(c),o[a].c(),T(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=s.length;a<o.length;a+=1)l(a);Te()}},i(i){if(!t){for(let r=0;r<s.length;r+=1)T(o[r]);t=!0}},o(i){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)S(o[r]);t=!1},d(i){Je(o,i),i&&k(e)}}}function Eu(n){let e,t,s;return e=new xn({props:{tokens:n[18].tokens,renderers:n[5]}}),{c(){R(e.$$.fragment),t=x()},m(o,l){P(e,o,l),y(o,t,l),s=!0},p(o,l){const i={};l&64&&(i.tokens=o[18].tokens),l&32&&(i.renderers=o[5]),e.$set(i)},i(o){s||(T(e.$$.fragment,o),s=!0)},o(o){S(e.$$.fragment,o),s=!1},d(o){N(e,o),o&&k(t)}}}function xl(n){let e,t,s;const o=[n[18]];var l=n[5].orderedlistitem||n[5].listitem;function i(r){let a={$$slots:{default:[Eu]},$$scope:{ctx:r}};for(let c=0;c<o.length;c+=1)a=Et(a,o[c]);return{props:a}}return l&&(e=We(l,i(n))),{c(){e&&R(e.$$.fragment),t=Ie()},m(r,a){e&&P(e,r,a),y(r,t,a),s=!0},p(r,a){const c=a&64?Tn(o,[Gn(r[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:r}),l!==(l=r[5].orderedlistitem||r[5].listitem)){if(e){ye();const u=e;S(u.$$.fragment,1,0,()=>{N(u,1)}),Te()}l?(e=We(l,i(r)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&S(e.$$.fragment,r),s=!1},d(r){r&&k(t),e&&N(e,r)}}}function Au(n){let e,t,s=n[6].items,o=[];for(let i=0;i<s.length;i+=1)o[i]=xl($l(n,s,i));const l=i=>S(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Ie()},m(i,r){for(let a=0;a<o.length;a+=1)o[a].m(i,r);y(i,e,r),t=!0},p(i,r){if(r&96){s=i[6].items;let a;for(a=0;a<s.length;a+=1){const c=$l(i,s,a);o[a]?(o[a].p(c,r),T(o[a],1)):(o[a]=xl(c),o[a].c(),T(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=s.length;a<o.length;a+=1)l(a);Te()}},i(i){if(!t){for(let r=0;r<s.length;r+=1)T(o[r]);t=!0}},o(i){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)S(o[r]);t=!1},d(i){Je(o,i),i&&k(e)}}}function Cu(n){let e,t,s;return e=new xn({props:{tokens:n[16].tokens,renderers:n[5]}}),{c(){R(e.$$.fragment),t=x()},m(o,l){P(e,o,l),y(o,t,l),s=!0},p(o,l){const i={};l&4&&(i.tokens=o[16].tokens),l&32&&(i.renderers=o[5]),e.$set(i)},i(o){s||(T(e.$$.fragment,o),s=!0)},o(o){S(e.$$.fragment,o),s=!1},d(o){N(e,o),o&&k(t)}}}function Sl(n){let e,t,s;var o=n[5].tablecell;function l(i){return{props:{header:!0,align:i[6].align[i[15]]||"center",$$slots:{default:[Cu]},$$scope:{ctx:i}}}}return o&&(e=We(o,l(n))),{c(){e&&R(e.$$.fragment),t=Ie()},m(i,r){e&&P(e,i,r),y(i,t,r),s=!0},p(i,r){const a={};if(r&64&&(a.align=i[6].align[i[15]]||"center"),r&8388644&&(a.$$scope={dirty:r,ctx:i}),o!==(o=i[5].tablecell)){if(e){ye();const c=e;S(c.$$.fragment,1,0,()=>{N(c,1)}),Te()}o?(e=We(o,l(i)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(i){s||(e&&T(e.$$.fragment,i),s=!0)},o(i){e&&S(e.$$.fragment,i),s=!1},d(i){i&&k(t),e&&N(e,i)}}}function Pu(n){let e,t,s=n[2],o=[];for(let i=0;i<s.length;i+=1)o[i]=Sl(kl(n,s,i));const l=i=>S(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Ie()},m(i,r){for(let a=0;a<o.length;a+=1)o[a].m(i,r);y(i,e,r),t=!0},p(i,r){if(r&100){s=i[2];let a;for(a=0;a<s.length;a+=1){const c=kl(i,s,a);o[a]?(o[a].p(c,r),T(o[a],1)):(o[a]=Sl(c),o[a].c(),T(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=s.length;a<o.length;a+=1)l(a);Te()}},i(i){if(!t){for(let r=0;r<s.length;r+=1)T(o[r]);t=!0}},o(i){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)S(o[r]);t=!1},d(i){Je(o,i),i&&k(e)}}}function Nu(n){let e,t,s;var o=n[5].tablerow;function l(i){return{props:{$$slots:{default:[Pu]},$$scope:{ctx:i}}}}return o&&(e=We(o,l(n))),{c(){e&&R(e.$$.fragment),t=Ie()},m(i,r){e&&P(e,i,r),y(i,t,r),s=!0},p(i,r){const a={};if(r&8388708&&(a.$$scope={dirty:r,ctx:i}),o!==(o=i[5].tablerow)){if(e){ye();const c=e;S(c.$$.fragment,1,0,()=>{N(c,1)}),Te()}o?(e=We(o,l(i)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(i){s||(e&&T(e.$$.fragment,i),s=!0)},o(i){e&&S(e.$$.fragment,i),s=!1},d(i){i&&k(t),e&&N(e,i)}}}function Ru(n){let e,t;return e=new xn({props:{tokens:n[13].tokens,renderers:n[5]}}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&8&&(l.tokens=s[13].tokens),o&32&&(l.renderers=s[5]),e.$set(l)},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function El(n){let e,t,s;var o=n[5].tablecell;function l(i){return{props:{header:!1,align:i[6].align[i[15]]||"center",$$slots:{default:[Ru]},$$scope:{ctx:i}}}}return o&&(e=We(o,l(n))),{c(){e&&R(e.$$.fragment),t=Ie()},m(i,r){e&&P(e,i,r),y(i,t,r),s=!0},p(i,r){const a={};if(r&64&&(a.align=i[6].align[i[15]]||"center"),r&8388648&&(a.$$scope={dirty:r,ctx:i}),o!==(o=i[5].tablecell)){if(e){ye();const c=e;S(c.$$.fragment,1,0,()=>{N(c,1)}),Te()}o?(e=We(o,l(i)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(i){s||(e&&T(e.$$.fragment,i),s=!0)},o(i){e&&S(e.$$.fragment,i),s=!1},d(i){i&&k(t),e&&N(e,i)}}}function Mu(n){let e,t,s=n[10],o=[];for(let i=0;i<s.length;i+=1)o[i]=El(wl(n,s,i));const l=i=>S(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=x()},m(i,r){for(let a=0;a<o.length;a+=1)o[a].m(i,r);y(i,e,r),t=!0},p(i,r){if(r&104){s=i[10];let a;for(a=0;a<s.length;a+=1){const c=wl(i,s,a);o[a]?(o[a].p(c,r),T(o[a],1)):(o[a]=El(c),o[a].c(),T(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=s.length;a<o.length;a+=1)l(a);Te()}},i(i){if(!t){for(let r=0;r<s.length;r+=1)T(o[r]);t=!0}},o(i){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)S(o[r]);t=!1},d(i){Je(o,i),i&&k(e)}}}function Al(n){let e,t,s;var o=n[5].tablerow;function l(i){return{props:{$$slots:{default:[Mu]},$$scope:{ctx:i}}}}return o&&(e=We(o,l(n))),{c(){e&&R(e.$$.fragment),t=Ie()},m(i,r){e&&P(e,i,r),y(i,t,r),s=!0},p(i,r){const a={};if(r&8388712&&(a.$$scope={dirty:r,ctx:i}),o!==(o=i[5].tablerow)){if(e){ye();const c=e;S(c.$$.fragment,1,0,()=>{N(c,1)}),Te()}o?(e=We(o,l(i)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(i){s||(e&&T(e.$$.fragment,i),s=!0)},o(i){e&&S(e.$$.fragment,i),s=!1},d(i){i&&k(t),e&&N(e,i)}}}function Ou(n){let e,t,s=n[3],o=[];for(let i=0;i<s.length;i+=1)o[i]=Al(vl(n,s,i));const l=i=>S(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Ie()},m(i,r){for(let a=0;a<o.length;a+=1)o[a].m(i,r);y(i,e,r),t=!0},p(i,r){if(r&104){s=i[3];let a;for(a=0;a<s.length;a+=1){const c=vl(i,s,a);o[a]?(o[a].p(c,r),T(o[a],1)):(o[a]=Al(c),o[a].c(),T(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=s.length;a<o.length;a+=1)l(a);Te()}},i(i){if(!t){for(let r=0;r<s.length;r+=1)T(o[r]);t=!0}},o(i){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)S(o[r]);t=!1},d(i){Je(o,i),i&&k(e)}}}function Iu(n){let e,t,s,o,l;var i=n[5].tablehead;function r(u){return{props:{$$slots:{default:[Nu]},$$scope:{ctx:u}}}}i&&(e=We(i,r(n)));var a=n[5].tablebody;function c(u){return{props:{$$slots:{default:[Ou]},$$scope:{ctx:u}}}}return a&&(s=We(a,c(n))),{c(){e&&R(e.$$.fragment),t=x(),s&&R(s.$$.fragment),o=Ie()},m(u,f){e&&P(e,u,f),y(u,t,f),s&&P(s,u,f),y(u,o,f),l=!0},p(u,f){const d={};if(f&8388708&&(d.$$scope={dirty:f,ctx:u}),i!==(i=u[5].tablehead)){if(e){ye();const g=e;S(g.$$.fragment,1,0,()=>{N(g,1)}),Te()}i?(e=We(i,r(u)),R(e.$$.fragment),T(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else i&&e.$set(d);const h={};if(f&8388712&&(h.$$scope={dirty:f,ctx:u}),a!==(a=u[5].tablebody)){if(s){ye();const g=s;S(g.$$.fragment,1,0,()=>{N(g,1)}),Te()}a?(s=We(a,c(u)),R(s.$$.fragment),T(s.$$.fragment,1),P(s,o.parentNode,o)):s=null}else a&&s.$set(h)},i(u){l||(e&&T(e.$$.fragment,u),s&&T(s.$$.fragment,u),l=!0)},o(u){e&&S(e.$$.fragment,u),s&&S(s.$$.fragment,u),l=!1},d(u){e&&N(e,u),u&&k(t),u&&k(o),s&&N(s,u)}}}function Cl(n){let e,t;const s=[n[7],{renderers:n[5]}];let o={};for(let l=0;l<s.length;l+=1)o=Et(o,s[l]);return e=new xn({props:o}),{c(){R(e.$$.fragment)},m(l,i){P(e,l,i),t=!0},p(l,i){const r=i&34?Tn(s,[i&2&&Gn(l[7]),i&32&&{renderers:l[5]}]):{};e.$set(r)},i(l){t||(T(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function Lu(n){let e,t,s,o;const l=[gu,mu],i=[];function r(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=r(n))&&(t=i[e]=l[e](n)),{c(){t&&t.c(),s=Ie()},m(a,c){~e&&i[e].m(a,c),y(a,s,c),o=!0},p(a,[c]){let u=e;e=r(a),e===u?~e&&i[e].p(a,c):(t&&(ye(),S(i[u],1,1,()=>{i[u]=null}),Te()),~e?(t=i[e],t?t.p(a,c):(t=i[e]=l[e](a),t.c()),T(t,1),t.m(s.parentNode,s)):t=null)},i(a){o||(T(t),o=!0)},o(a){S(t),o=!1},d(a){~e&&i[e].d(a),a&&k(s)}}}function Du(n,e,t){const s=["type","tokens","header","rows","ordered","renderers"];let o=Ls(e,s),{type:l=void 0}=e,{tokens:i=void 0}=e,{header:r=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return hu(),n.$$set=f=>{e=Et(Et({},e),lr(f)),t(6,o=Ls(e,s)),"type"in f&&t(0,l=f.type),"tokens"in f&&t(1,i=f.tokens),"header"in f&&t(2,r=f.header),"rows"in f&&t(3,a=f.rows),"ordered"in f&&t(4,c=f.ordered),"renderers"in f&&t(5,u=f.renderers)},[l,i,r,a,c,u,o]}let xn=class extends se{constructor(e){super(),ne(this,e,Du,Lu,J,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}};function Ar(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Zn=Ar();function Bu(n){Zn=n}const Cr=/[&<>"']/,Fu=new RegExp(Cr.source,"g"),Pr=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,zu=new RegExp(Pr.source,"g"),Hu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pl=n=>Hu[n];function lt(n,e){if(e){if(Cr.test(n))return n.replace(Fu,Pl)}else if(Pr.test(n))return n.replace(zu,Pl);return n}const ju=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Nr(n){return n.replace(ju,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Uu=/(^|[^\[])\^/g;function Ke(n,e){n=typeof n=="string"?n:n.source,e=e||"";const t={replace:(s,o)=>(o=o.source||o,o=o.replace(Uu,"$1"),n=n.replace(s,o),t),getRegex:()=>new RegExp(n,e)};return t}const Ku=/[^\w:]/g,qu=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Nl(n,e,t){if(n){let s;try{s=decodeURIComponent(Nr(t)).replace(Ku,"").toLowerCase()}catch(o){return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}e&&!qu.test(t)&&(t=Xu(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(s){return null}return t}const As={},Wu=/^[^:]+:\/*[^/]*$/,Gu=/^([^:]+:)[\s\S]*$/,Zu=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Xu(n,e){As[" "+n]||(Wu.test(n)?As[" "+n]=n+"/":As[" "+n]=Os(n,"/",!0)),n=As[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(Gu,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(Zu,"$1")+e:n+e}const Hs={exec:function(){}};function Mt(n){let e=1,t,s;for(;e<arguments.length;e++){t=arguments[e];for(s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n}function Rl(n,e){const t=n.replace(/\|/g,(l,i,r)=>{let a=!1,c=i;for(;--c>=0&&r[c]==="\\";)a=!a;return a?"|":" |"}),s=t.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function Os(n,e,t){const s=n.length;if(s===0)return"";let o=0;for(;o<s;){const l=n.charAt(s-o-1);if(l===e&&!t)o++;else if(l!==e&&t)o++;else break}return n.slice(0,s-o)}function Qu(n,e){if(n.indexOf(e[1])===-1)return-1;const t=n.length;let s=0,o=0;for(;o<t;o++)if(n[o]==="\\")o++;else if(n[o]===e[0])s++;else if(n[o]===e[1]&&(s--,s<0))return o;return-1}function Rr(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Ml(n,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=n),e>>=1,n+=n;return t+n}function Ol(n,e,t,s){const o=e.href,l=e.title?lt(e.title):null,i=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){s.state.inLink=!0;const r={type:"link",raw:t,href:o,title:l,text:i,tokens:s.inlineTokens(i)};return s.state.inLink=!1,r}return{type:"image",raw:t,href:o,title:l,text:lt(i)}}function Yu(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const s=t[1];return e.split(`
`).map(o=>{const l=o.match(/^\s+/);if(l===null)return o;const[i]=l;return i.length>=s.length?o.slice(s.length):o}).join(`
`)}class Io{constructor(e){this.options=e||Zn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Os(s,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const s=t[0],o=Yu(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:o}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let s=t[2].trim();if(/#$/.test(s)){const o=Os(s,"#");(this.options.pedantic||!o||/ $/.test(o))&&(s=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const s=t[0].replace(/^ *>[ \t]?/gm,""),o=this.lexer.state.top;this.lexer.state.top=!0;const l=this.lexer.blockTokens(s);return this.lexer.state.top=o,{type:"blockquote",raw:t[0],tokens:l,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s,o,l,i,r,a,c,u,f,d,h,g,b=t[1].trim();const $=b.length>1,w={type:"list",raw:"",ordered:$,start:$?+b.slice(0,-1):"",loose:!1,items:[]};b=$?`\\d{1,9}\\${b.slice(-1)}`:`\\${b}`,this.options.pedantic&&(b=$?b:"[*+-]");const E=new RegExp(`^( {0,3}${b})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,!(!(t=E.exec(e))||this.rules.block.hr.test(e)));){if(s=t[0],e=e.substring(s.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,C=>" ".repeat(3*C.length)),f=e.split(`
`,1)[0],this.options.pedantic?(i=2,h=u.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,h=u.slice(i),i+=t[1].length),a=!1,!u&&/^ *$/.test(f)&&(s+=f+`
`,e=e.substring(f.length+1),g=!0),!g){const C=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),M=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),O=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),L=new RegExp(`^ {0,${Math.min(3,i-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],f=d,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(O.test(f)||L.test(f)||C.test(f)||M.test(e)));){if(f.search(/[^ ]/)>=i||!f.trim())h+=`
`+f.slice(i);else{if(a||u.search(/[^ ]/)>=4||O.test(u)||L.test(u)||M.test(u))break;h+=`
`+f}!a&&!f.trim()&&(a=!0),s+=d+`
`,e=e.substring(d.length+1),u=f.slice(i)}}w.loose||(c?w.loose=!0:/\n *\n *$/.test(s)&&(c=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(h),o&&(l=o[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),w.items.push({type:"list_item",raw:s,task:!!o,checked:l,loose:!1,text:h}),w.raw+=s}w.items[w.items.length-1].raw=s.trimRight(),w.items[w.items.length-1].text=h.trimRight(),w.raw=w.raw.trimRight();const D=w.items.length;for(r=0;r<D;r++)if(this.lexer.state.top=!1,w.items[r].tokens=this.lexer.blockTokens(w.items[r].text,[]),!w.loose){const C=w.items[r].tokens.filter(O=>O.type==="space"),M=C.length>0&&C.some(O=>/\n.*\n/.test(O.raw));w.loose=M}if(w.loose)for(r=0;r<D;r++)w.items[r].loose=!0;return w}}html(e){const t=this.rules.block.html.exec(e);if(t){const s={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const o=this.options.sanitizer?this.options.sanitizer(t[0]):lt(t[0]);s.type="paragraph",s.text=o,s.tokens=this.lexer.inline(o)}return s}}def(e){const t=this.rules.block.def.exec(e);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",l=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:o,title:l}}}table(e){const t=this.rules.block.table.exec(e);if(t){const s={type:"table",header:Rl(t[1]).map(o=>({text:o})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=t[0];let o=s.align.length,l,i,r,a;for(l=0;l<o;l++)/^ *-+: *$/.test(s.align[l])?s.align[l]="right":/^ *:-+: *$/.test(s.align[l])?s.align[l]="center":/^ *:-+ *$/.test(s.align[l])?s.align[l]="left":s.align[l]=null;for(o=s.rows.length,l=0;l<o;l++)s.rows[l]=Rl(s.rows[l],s.header.length).map(c=>({text:c}));for(o=s.header.length,i=0;i<o;i++)s.header[i].tokens=this.lexer.inline(s.header[i].text);for(o=s.rows.length,i=0;i<o;i++)for(a=s.rows[i],r=0;r<a.length;r++)a[r].tokens=this.lexer.inline(a[r].text);return s}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:lt(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):lt(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const i=Os(s.slice(0,-1),"\\");if((s.length-i.length)%2===0)return}else{const i=Qu(t[2],"()");if(i>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let o=t[2],l="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);i&&(o=i[1],l=i[3])}else l=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),Ol(t,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:l&&l.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){let o=(s[2]||s[1]).replace(/\s+/g," ");if(o=t[o.toLowerCase()],!o){const l=s[0].charAt(0);return{type:"text",raw:l,text:l}}return Ol(s,o,s[0],this.lexer)}}emStrong(e,t,s=""){let o=this.rules.inline.emStrong.lDelim.exec(e);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;const l=o[1]||o[2]||"";if(!l||l&&(s===""||this.rules.inline.punctuation.exec(s))){const i=o[0].length-1;let r,a,c=i,u=0;const f=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+i);(o=f.exec(t))!=null;){if(r=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!r)continue;if(a=r.length,o[3]||o[4]){c+=a;continue}else if((o[5]||o[6])&&i%3&&!((i+a)%3)){u+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+u);const d=e.slice(0,i+o.index+(o[0].length-r.length)+a);if(Math.min(i,a)%2){const g=d.slice(1,-1);return{type:"em",raw:d,text:g,tokens:this.lexer.inlineTokens(g)}}const h=d.slice(2,-2);return{type:"strong",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let s=t[2].replace(/\n/g," ");const o=/[^ ]/.test(s),l=/^ /.test(s)&&/ $/.test(s);return o&&l&&(s=s.substring(1,s.length-1)),s=lt(s,!0),{type:"codespan",raw:t[0],text:s}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const s=this.rules.inline.autolink.exec(e);if(s){let o,l;return s[2]==="@"?(o=lt(this.options.mangle?t(s[1]):s[1]),l="mailto:"+o):(o=lt(s[1]),l=o),{type:"link",raw:s[0],text:o,href:l,tokens:[{type:"text",raw:o,text:o}]}}}url(e,t){let s;if(s=this.rules.inline.url.exec(e)){let o,l;if(s[2]==="@")o=lt(this.options.mangle?t(s[0]):s[0]),l="mailto:"+o;else{let i;do i=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(i!==s[0]);o=lt(s[0]),s[1]==="www."?l="http://"+s[0]:l=s[0]}return{type:"link",raw:s[0],text:o,href:l,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e,t){const s=this.rules.inline.text.exec(e);if(s){let o;return this.lexer.state.inRawBlock?o=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):lt(s[0]):s[0]:o=lt(this.options.smartypants?t(s[0]):s[0]),{type:"text",raw:s[0],text:o}}}}const he={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Hs,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};he._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;he._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;he.def=Ke(he.def).replace("label",he._label).replace("title",he._title).getRegex();he.bullet=/(?:[*+-]|\d{1,9}[.)])/;he.listItemStart=Ke(/^( *)(bull) */).replace("bull",he.bullet).getRegex();he.list=Ke(he.list).replace(/bull/g,he.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+he.def.source+")").getRegex();he._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";he._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;he.html=Ke(he.html,"i").replace("comment",he._comment).replace("tag",he._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();he.paragraph=Ke(he._paragraph).replace("hr",he.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",he._tag).getRegex();he.blockquote=Ke(he.blockquote).replace("paragraph",he.paragraph).getRegex();he.normal=Mt({},he);he.gfm=Mt({},he.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});he.gfm.table=Ke(he.gfm.table).replace("hr",he.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",he._tag).getRegex();he.gfm.paragraph=Ke(he._paragraph).replace("hr",he.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",he.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",he._tag).getRegex();he.pedantic=Mt({},he.normal,{html:Ke(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",he._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Hs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ke(he.normal._paragraph).replace("hr",he.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",he.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const le={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Hs,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Hs,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};le._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";le.punctuation=Ke(le.punctuation).replace(/punctuation/g,le._punctuation).getRegex();le.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;le.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;le._comment=Ke(he._comment).replace("(?:-->|$)","-->").getRegex();le.emStrong.lDelim=Ke(le.emStrong.lDelim).replace(/punct/g,le._punctuation).getRegex();le.emStrong.rDelimAst=Ke(le.emStrong.rDelimAst,"g").replace(/punct/g,le._punctuation).getRegex();le.emStrong.rDelimUnd=Ke(le.emStrong.rDelimUnd,"g").replace(/punct/g,le._punctuation).getRegex();le._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;le._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;le._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;le.autolink=Ke(le.autolink).replace("scheme",le._scheme).replace("email",le._email).getRegex();le._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;le.tag=Ke(le.tag).replace("comment",le._comment).replace("attribute",le._attribute).getRegex();le._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;le._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;le._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;le.link=Ke(le.link).replace("label",le._label).replace("href",le._href).replace("title",le._title).getRegex();le.reflink=Ke(le.reflink).replace("label",le._label).replace("ref",he._label).getRegex();le.nolink=Ke(le.nolink).replace("ref",he._label).getRegex();le.reflinkSearch=Ke(le.reflinkSearch,"g").replace("reflink",le.reflink).replace("nolink",le.nolink).getRegex();le.normal=Mt({},le);le.pedantic=Mt({},le.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ke(/^!?\[(label)\]\((.*?)\)/).replace("label",le._label).getRegex(),reflink:Ke(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",le._label).getRegex()});le.gfm=Mt({},le.normal,{escape:Ke(le.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});le.gfm.url=Ke(le.gfm.url,"i").replace("email",le.gfm._extended_email).getRegex();le.breaks=Mt({},le.gfm,{br:Ke(le.br).replace("{2,}","*").getRegex(),text:Ke(le.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Ju(n){return n.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Il(n){let e="",t,s;const o=n.length;for(t=0;t<o;t++)s=n.charCodeAt(t),Math.random()>.5&&(s="x"+s.toString(16)),e+="&#"+s+";";return e}class Ft{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Zn,this.options.tokenizer=this.options.tokenizer||new Io,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:he.normal,inline:le.normal};this.options.pedantic?(t.block=he.pedantic,t.inline=le.pedantic):this.options.gfm&&(t.block=he.gfm,this.options.breaks?t.inline=le.breaks:t.inline=le.gfm),this.tokenizer.rules=t}static get rules(){return{block:he,inline:le}}static lex(e,t){return new Ft(t).lex(e)}static lexInline(e,t){return new Ft(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(r,a,c)=>a+"    ".repeat(c.length));let s,o,l,i;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>(s=r.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(l=e,this.options.extensions&&this.options.extensions.startBlock){let r=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(r=Math.min(r,c))}),r<1/0&&r>=0&&(l=e.substring(0,r+1))}if(this.state.top&&(s=this.tokenizer.paragraph(l))){o=t[t.length-1],i&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),i=l.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(e){const r="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(r);break}else throw new Error(r)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let s,o,l,i=e,r,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)u.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+Ml("a",r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,r.index)+"["+Ml("a",r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.escapedEmSt.exec(i))!=null;)i=i.slice(0,r.index+r[0].length-2)+"++"+i.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(s=u.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(e,i,c)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(e,Il)){e=e.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e,Il))){e=e.substring(s.raw.length),t.push(s);continue}if(l=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let d;this.options.extensions.startInline.forEach(function(h){d=h.call({lexer:this},f),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(l=e.substring(0,u+1))}if(s=this.tokenizer.inlineText(l,Ju)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(c=s.raw.slice(-1)),a=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Lo{constructor(e){this.options=e||Zn}code(e,t,s){const o=(t||"").match(/\S*/)[0];if(this.options.highlight){const l=this.options.highlight(e,o);l!=null&&l!==e&&(s=!0,e=l)}return e=e.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+lt(o)+'">'+(s?e:lt(e,!0))+`</code></pre>
`:"<pre><code>"+(s?e:lt(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,s,o){if(this.options.headerIds){const l=this.options.headerPrefix+o.slug(s);return`<h${t} id="${l}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,s){const o=t?"ol":"ul",l=t&&s!==1?' start="'+s+'"':"";return"<"+o+l+`>
`+e+"</"+o+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+e+`</${s}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,s){if(e=Nl(this.options.sanitize,this.options.baseUrl,e),e===null)return s;let o='<a href="'+e+'"';return t&&(o+=' title="'+t+'"'),o+=">"+s+"</a>",o}image(e,t,s){if(e=Nl(this.options.sanitize,this.options.baseUrl,e),e===null)return s;let o=`<img src="${e}" alt="${s}"`;return t&&(o+=` title="${t}"`),o+=this.options.xhtml?"/>":">",o}text(e){return e}}class Mr{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,s){return""+s}image(e,t,s){return""+s}br(){return""}}class Do{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let s=e,o=0;if(this.seen.hasOwnProperty(s)){o=this.seen[e];do o++,s=e+"-"+o;while(this.seen.hasOwnProperty(s))}return t||(this.seen[e]=o,this.seen[s]=0),s}slug(e,t={}){const s=this.serialize(e);return this.getNextSafeSlug(s,t.dryrun)}}class Bt{constructor(e){this.options=e||Zn,this.options.renderer=this.options.renderer||new Lo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Mr,this.slugger=new Do}static parse(e,t){return new Bt(t).parse(e)}static parseInline(e,t){return new Bt(t).parseInline(e)}parse(e,t=!0){let s="",o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O;const L=e.length;for(o=0;o<L;o++){if(h=e[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(O=this.options.extensions.renderers[h.type].call({parser:this},h),O!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type))){s+=O||"";continue}switch(h.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{s+=this.renderer.heading(this.parseInline(h.tokens),h.depth,Nr(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue}case"code":{s+=this.renderer.code(h.text,h.lang,h.escaped);continue}case"table":{for(f="",u="",r=h.header.length,l=0;l<r;l++)u+=this.renderer.tablecell(this.parseInline(h.header[l].tokens),{header:!0,align:h.align[l]});for(f+=this.renderer.tablerow(u),d="",r=h.rows.length,l=0;l<r;l++){for(c=h.rows[l],u="",a=c.length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(c[i].tokens),{header:!1,align:h.align[i]});d+=this.renderer.tablerow(u)}s+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(h.tokens),s+=this.renderer.blockquote(d);continue}case"list":{for(g=h.ordered,b=h.start,$=h.loose,r=h.items.length,d="",l=0;l<r;l++)E=h.items[l],D=E.checked,C=E.task,w="",E.task&&(M=this.renderer.checkbox(D),$?E.tokens.length>0&&E.tokens[0].type==="paragraph"?(E.tokens[0].text=M+" "+E.tokens[0].text,E.tokens[0].tokens&&E.tokens[0].tokens.length>0&&E.tokens[0].tokens[0].type==="text"&&(E.tokens[0].tokens[0].text=M+" "+E.tokens[0].tokens[0].text)):E.tokens.unshift({type:"text",text:M}):w+=M),w+=this.parse(E.tokens,$),d+=this.renderer.listitem(w,C,D);s+=this.renderer.list(d,g,b);continue}case"html":{s+=this.renderer.html(h.text);continue}case"paragraph":{s+=this.renderer.paragraph(this.parseInline(h.tokens));continue}case"text":{for(d=h.tokens?this.parseInline(h.tokens):h.text;o+1<L&&e[o+1].type==="text";)h=e[++o],d+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);s+=t?this.renderer.paragraph(d):d;continue}default:{const I='Token with "'+h.type+'" type was not found.';if(this.options.silent){console.error(I);return}else throw new Error(I)}}}return s}parseInline(e,t){t=t||this.renderer;let s="",o,l,i;const r=e.length;for(o=0;o<r;o++){if(l=e[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]&&(i=this.options.extensions.renderers[l.type].call({parser:this},l),i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type))){s+=i||"";continue}switch(l.type){case"escape":{s+=t.text(l.text);break}case"html":{s+=t.html(l.text);break}case"link":{s+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{s+=t.image(l.href,l.title,l.text);break}case"strong":{s+=t.strong(this.parseInline(l.tokens,t));break}case"em":{s+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{s+=t.codespan(l.text);break}case"br":{s+=t.br();break}case"del":{s+=t.del(this.parseInline(l.tokens,t));break}case"text":{s+=t.text(l.text);break}default:{const a='Token with "'+l.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return s}}function me(n,e,t){if(typeof n=="undefined"||n===null)throw new Error("marked(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=Mt({},me.defaults,e||{}),Rr(e),t){const o=e.highlight;let l;try{l=Ft.lex(n,e)}catch(a){return t(a)}const i=function(a){let c;if(!a)try{e.walkTokens&&me.walkTokens(l,e.walkTokens),c=Bt.parse(l,e)}catch(u){a=u}return e.highlight=o,a?t(a):t(null,c)};if(!o||o.length<3||(delete e.highlight,!l.length))return i();let r=0;me.walkTokens(l,function(a){a.type==="code"&&(r++,setTimeout(()=>{o(a.text,a.lang,function(c,u){if(c)return i(c);u!=null&&u!==a.text&&(a.text=u,a.escaped=!0),r--,r===0&&i()})},0))}),r===0&&i();return}function s(o){if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+lt(o.message+"",!0)+"</pre>";throw o}try{const o=Ft.lex(n,e);if(e.walkTokens){if(e.async)return Promise.all(me.walkTokens(o,e.walkTokens)).then(()=>Bt.parse(o,e)).catch(s);me.walkTokens(o,e.walkTokens)}return Bt.parse(o,e)}catch(o){s(o)}}me.options=me.setOptions=function(n){return Mt(me.defaults,n),Bu(me.defaults),me};me.getDefaults=Ar;me.defaults=Zn;me.use=function(...n){const e=me.defaults.extensions||{renderers:{},childTokens:{}};n.forEach(t=>{const s=Mt({},t);if(s.async=me.defaults.async||s.async,t.extensions&&(t.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const l=e.renderers[o.name];l?e.renderers[o.name]=function(...i){let r=o.renderer.apply(this,i);return r===!1&&(r=l.apply(this,i)),r}:e.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[o.level]?e[o.level].unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),s.extensions=e),t.renderer){const o=me.defaults.renderer||new Lo;for(const l in t.renderer){const i=o[l];o[l]=(...r)=>{let a=t.renderer[l].apply(o,r);return a===!1&&(a=i.apply(o,r)),a}}s.renderer=o}if(t.tokenizer){const o=me.defaults.tokenizer||new Io;for(const l in t.tokenizer){const i=o[l];o[l]=(...r)=>{let a=t.tokenizer[l].apply(o,r);return a===!1&&(a=i.apply(o,r)),a}}s.tokenizer=o}if(t.walkTokens){const o=me.defaults.walkTokens;s.walkTokens=function(l){let i=[];return i.push(t.walkTokens.call(this,l)),o&&(i=i.concat(o.call(this,l))),i}}me.setOptions(s)})};me.walkTokens=function(n,e){let t=[];for(const s of n)switch(t=t.concat(e.call(me,s)),s.type){case"table":{for(const o of s.header)t=t.concat(me.walkTokens(o.tokens,e));for(const o of s.rows)for(const l of o)t=t.concat(me.walkTokens(l.tokens,e));break}case"list":{t=t.concat(me.walkTokens(s.items,e));break}default:me.defaults.extensions&&me.defaults.extensions.childTokens&&me.defaults.extensions.childTokens[s.type]?me.defaults.extensions.childTokens[s.type].forEach(function(o){t=t.concat(me.walkTokens(s[o],e))}):s.tokens&&(t=t.concat(me.walkTokens(s.tokens,e)))}return t};me.parseInline=function(n,e){if(typeof n=="undefined"||n===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");e=Mt({},me.defaults,e||{}),Rr(e);try{const t=Ft.lexInline(n,e);return e.walkTokens&&me.walkTokens(t,e.walkTokens),Bt.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+lt(t.message+"",!0)+"</pre>";throw t}};me.Parser=Bt;me.parser=Bt.parse;me.Renderer=Lo;me.TextRenderer=Mr;me.Lexer=Ft;me.lexer=Ft.lex;me.Tokenizer=Io;me.Slugger=Do;me.parse=me;me.options;me.setOptions;me.use;me.walkTokens;me.parseInline;Bt.parse;Ft.lex;const Or={};function Vu(n){let e;return{c(){e=F(n[1])},m(t,s){y(t,e,s)},p(t,s){s&2&&Oe(e,t[1])},i:re,o:re,d(t){t&&k(e)}}}function ef(n){let e,t;const s=n[5].default,o=Fe(s,n,n[4],null);return{c(){e=_("h6"),o&&o.c(),m(e,"id",n[2])},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,i){o&&o.p&&(!t||i&16)&&He(o,s,l,l[4],t?ze(s,l[4],i,null):je(l[4]),null),(!t||i&4)&&m(e,"id",l[2])},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function tf(n){let e,t;const s=n[5].default,o=Fe(s,n,n[4],null);return{c(){e=_("h5"),o&&o.c(),m(e,"id",n[2])},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,i){o&&o.p&&(!t||i&16)&&He(o,s,l,l[4],t?ze(s,l[4],i,null):je(l[4]),null),(!t||i&4)&&m(e,"id",l[2])},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function nf(n){let e,t;const s=n[5].default,o=Fe(s,n,n[4],null);return{c(){e=_("h4"),o&&o.c(),m(e,"id",n[2])},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,i){o&&o.p&&(!t||i&16)&&He(o,s,l,l[4],t?ze(s,l[4],i,null):je(l[4]),null),(!t||i&4)&&m(e,"id",l[2])},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function sf(n){let e,t;const s=n[5].default,o=Fe(s,n,n[4],null);return{c(){e=_("h3"),o&&o.c(),m(e,"id",n[2])},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,i){o&&o.p&&(!t||i&16)&&He(o,s,l,l[4],t?ze(s,l[4],i,null):je(l[4]),null),(!t||i&4)&&m(e,"id",l[2])},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function of(n){let e,t;const s=n[5].default,o=Fe(s,n,n[4],null);return{c(){e=_("h2"),o&&o.c(),m(e,"id",n[2])},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,i){o&&o.p&&(!t||i&16)&&He(o,s,l,l[4],t?ze(s,l[4],i,null):je(l[4]),null),(!t||i&4)&&m(e,"id",l[2])},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function lf(n){let e,t;const s=n[5].default,o=Fe(s,n,n[4],null);return{c(){e=_("h1"),o&&o.c(),m(e,"id",n[2])},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,i){o&&o.p&&(!t||i&16)&&He(o,s,l,l[4],t?ze(s,l[4],i,null):je(l[4]),null),(!t||i&4)&&m(e,"id",l[2])},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function rf(n){let e,t,s,o;const l=[lf,of,sf,nf,tf,ef,Vu],i=[];function r(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=r(n),t=i[e]=l[e](n),{c(){t.c(),s=Ie()},m(a,c){i[e].m(a,c),y(a,s,c),o=!0},p(a,[c]){let u=e;e=r(a),e===u?i[e].p(a,c):(ye(),S(i[u],1,1,()=>{i[u]=null}),Te(),t=i[e],t?t.p(a,c):(t=i[e]=l[e](a),t.c()),T(t,1),t.m(s.parentNode,s))},i(a){o||(T(t),o=!0)},o(a){S(t),o=!1},d(a){i[e].d(a),a&&k(s)}}}function af(n,e,t){let s,{$$slots:o={},$$scope:l}=e,{depth:i}=e,{raw:r}=e,{text:a}=e;const{slug:c,getOptions:u}=So(Or),f=u();return n.$$set=d=>{"depth"in d&&t(0,i=d.depth),"raw"in d&&t(1,r=d.raw),"text"in d&&t(3,a=d.text),"$$scope"in d&&t(4,l=d.$$scope)},n.$$.update=()=>{n.$$.dirty&8&&t(2,s=f.headerIds?f.headerPrefix+c(a):void 0)},[i,r,s,a,l,o]}class cf extends se{constructor(e){super(),ne(this,e,af,rf,J,{depth:0,raw:1,text:3})}}function uf(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("p"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function ff(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class df extends se{constructor(e){super(),ne(this,e,ff,uf,J,{})}}function pf(n){let e;const t=n[3].default,s=Fe(t,n,n[2],null);return{c(){s&&s.c()},m(o,l){s&&s.m(o,l),e=!0},p(o,[l]){s&&s.p&&(!e||l&4)&&He(s,t,o,o[2],e?ze(t,o[2],l,null):je(o[2]),null)},i(o){e||(T(s,o),e=!0)},o(o){S(s,o),e=!1},d(o){s&&s.d(o)}}}function hf(n,e,t){let{$$slots:s={},$$scope:o}=e,{text:l}=e,{raw:i}=e;return n.$$set=r=>{"text"in r&&t(0,l=r.text),"raw"in r&&t(1,i=r.raw),"$$scope"in r&&t(2,o=r.$$scope)},[l,i,o,s]}class mf extends se{constructor(e){super(),ne(this,e,hf,pf,J,{text:0,raw:1})}}function gf(n){let e,t;return{c(){e=_("img"),at(e.src,t=n[0])||m(e,"src",t),m(e,"title",n[1]),m(e,"alt",n[2])},m(s,o){y(s,e,o)},p(s,[o]){o&1&&!at(e.src,t=s[0])&&m(e,"src",t),o&2&&m(e,"title",s[1]),o&4&&m(e,"alt",s[2])},i:re,o:re,d(s){s&&k(e)}}}function _f(n,e,t){let{href:s=""}=e,{title:o=void 0}=e,{text:l=""}=e;return n.$$set=i=>{"href"in i&&t(0,s=i.href),"title"in i&&t(1,o=i.title),"text"in i&&t(2,l=i.text)},[s,o,l]}class bf extends se{constructor(e){super(),ne(this,e,_f,gf,J,{href:0,title:1,text:2})}}function $f(n){let e,t;const s=n[3].default,o=Fe(s,n,n[2],null);return{c(){e=_("a"),o&&o.c(),m(e,"href",n[0]),m(e,"title",n[1])},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&4)&&He(o,s,l,l[2],t?ze(s,l[2],i,null):je(l[2]),null),(!t||i&1)&&m(e,"href",l[0]),(!t||i&2)&&m(e,"title",l[1])},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function vf(n,e,t){let{$$slots:s={},$$scope:o}=e,{href:l=""}=e,{title:i=void 0}=e;return n.$$set=r=>{"href"in r&&t(0,l=r.href),"title"in r&&t(1,i=r.title),"$$scope"in r&&t(2,o=r.$$scope)},[l,i,o,s]}class wf extends se{constructor(e){super(),ne(this,e,vf,$f,J,{href:0,title:1})}}function kf(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("em"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function yf(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class Tf extends se{constructor(e){super(),ne(this,e,yf,kf,J,{})}}function xf(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("del"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function Sf(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class Ef extends se{constructor(e){super(),ne(this,e,Sf,xf,J,{})}}function Af(n){let e,t=n[0].replace(/`/g,"")+"",s;return{c(){e=_("code"),s=F(t)},m(o,l){y(o,e,l),p(e,s)},p(o,[l]){l&1&&t!==(t=o[0].replace(/`/g,"")+"")&&Oe(s,t)},i:re,o:re,d(o){o&&k(e)}}}function Cf(n,e,t){let{raw:s}=e;return n.$$set=o=>{"raw"in o&&t(0,s=o.raw)},[s]}class Pf extends se{constructor(e){super(),ne(this,e,Cf,Af,J,{raw:0})}}function Nf(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("strong"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function Rf(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class Mf extends se{constructor(e){super(),ne(this,e,Rf,Nf,J,{})}}function Of(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("table"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function If(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class Lf extends se{constructor(e){super(),ne(this,e,If,Of,J,{})}}function Df(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("thead"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function Bf(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class Ff extends se{constructor(e){super(),ne(this,e,Bf,Df,J,{})}}function zf(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("tbody"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function Hf(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class jf extends se{constructor(e){super(),ne(this,e,Hf,zf,J,{})}}function Uf(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("tr"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function Kf(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class qf extends se{constructor(e){super(),ne(this,e,Kf,Uf,J,{})}}function Wf(n){let e,t;const s=n[3].default,o=Fe(s,n,n[2],null);return{c(){e=_("td"),o&&o.c(),m(e,"align",n[1])},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,i){o&&o.p&&(!t||i&4)&&He(o,s,l,l[2],t?ze(s,l[2],i,null):je(l[2]),null),(!t||i&2)&&m(e,"align",l[1])},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function Gf(n){let e,t;const s=n[3].default,o=Fe(s,n,n[2],null);return{c(){e=_("th"),o&&o.c(),m(e,"align",n[1])},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,i){o&&o.p&&(!t||i&4)&&He(o,s,l,l[2],t?ze(s,l[2],i,null):je(l[2]),null),(!t||i&2)&&m(e,"align",l[1])},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function Zf(n){let e,t,s,o;const l=[Gf,Wf],i=[];function r(a,c){return a[0]?0:1}return e=r(n),t=i[e]=l[e](n),{c(){t.c(),s=Ie()},m(a,c){i[e].m(a,c),y(a,s,c),o=!0},p(a,[c]){let u=e;e=r(a),e===u?i[e].p(a,c):(ye(),S(i[u],1,1,()=>{i[u]=null}),Te(),t=i[e],t?t.p(a,c):(t=i[e]=l[e](a),t.c()),T(t,1),t.m(s.parentNode,s))},i(a){o||(T(t),o=!0)},o(a){S(t),o=!1},d(a){i[e].d(a),a&&k(s)}}}function Xf(n,e,t){let{$$slots:s={},$$scope:o}=e,{header:l}=e,{align:i}=e;return n.$$set=r=>{"header"in r&&t(0,l=r.header),"align"in r&&t(1,i=r.align),"$$scope"in r&&t(2,o=r.$$scope)},[l,i,o,s]}class Qf extends se{constructor(e){super(),ne(this,e,Xf,Zf,J,{header:0,align:1})}}function Yf(n){let e,t;const s=n[3].default,o=Fe(s,n,n[2],null);return{c(){e=_("ul"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,i){o&&o.p&&(!t||i&4)&&He(o,s,l,l[2],t?ze(s,l[2],i,null):je(l[2]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function Jf(n){let e,t;const s=n[3].default,o=Fe(s,n,n[2],null);return{c(){e=_("ol"),o&&o.c(),m(e,"start",n[1])},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,i){o&&o.p&&(!t||i&4)&&He(o,s,l,l[2],t?ze(s,l[2],i,null):je(l[2]),null),(!t||i&2)&&m(e,"start",l[1])},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function Vf(n){let e,t,s,o;const l=[Jf,Yf],i=[];function r(a,c){return a[0]?0:1}return e=r(n),t=i[e]=l[e](n),{c(){t.c(),s=Ie()},m(a,c){i[e].m(a,c),y(a,s,c),o=!0},p(a,[c]){let u=e;e=r(a),e===u?i[e].p(a,c):(ye(),S(i[u],1,1,()=>{i[u]=null}),Te(),t=i[e],t?t.p(a,c):(t=i[e]=l[e](a),t.c()),T(t,1),t.m(s.parentNode,s))},i(a){o||(T(t),o=!0)},o(a){S(t),o=!1},d(a){i[e].d(a),a&&k(s)}}}function ed(n,e,t){let{$$slots:s={},$$scope:o}=e,{ordered:l}=e,{start:i}=e;return n.$$set=r=>{"ordered"in r&&t(0,l=r.ordered),"start"in r&&t(1,i=r.start),"$$scope"in r&&t(2,o=r.$$scope)},[l,i,o,s]}class td extends se{constructor(e){super(),ne(this,e,ed,Vf,J,{ordered:0,start:1})}}function nd(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("li"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function sd(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class od extends se{constructor(e){super(),ne(this,e,sd,nd,J,{})}}function ld(n){let e;return{c(){e=_("hr")},m(t,s){y(t,e,s)},p:re,i:re,o:re,d(t){t&&k(e)}}}class id extends se{constructor(e){super(),ne(this,e,null,ld,J,{})}}function rd(n){let e,t;return{c(){e=new ur(!1),t=Ie(),e.a=t},m(s,o){e.m(n[0],s,o),y(s,t,o)},p(s,[o]){o&1&&e.p(s[0])},i:re,o:re,d(s){s&&k(t),s&&e.d()}}}function ad(n,e,t){let{text:s}=e;return n.$$set=o=>{"text"in o&&t(0,s=o.text)},[s]}class cd extends se{constructor(e){super(),ne(this,e,ad,rd,J,{text:0})}}function ud(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("blockquote"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(e,null),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function fd(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class dd extends se{constructor(e){super(),ne(this,e,fd,ud,J,{})}}function pd(n){let e,t,s;return{c(){e=_("pre"),t=_("code"),s=F(n[1]),m(e,"class",n[0])},m(o,l){y(o,e,l),p(e,t),p(t,s)},p(o,[l]){l&2&&Oe(s,o[1]),l&1&&m(e,"class",o[0])},i:re,o:re,d(o){o&&k(e)}}}function hd(n,e,t){let{lang:s}=e,{text:o}=e;return n.$$set=l=>{"lang"in l&&t(0,s=l.lang),"text"in l&&t(1,o=l.text)},[s,o]}class md extends se{constructor(e){super(),ne(this,e,hd,pd,J,{lang:0,text:1})}}function gd(n){let e,t;const s=n[1].default,o=Fe(s,n,n[0],null);return{c(){e=_("br"),o&&o.c()},m(l,i){y(l,e,i),o&&o.m(l,i),t=!0},p(l,[i]){o&&o.p&&(!t||i&1)&&He(o,s,l,l[0],t?ze(s,l[0],i,null):je(l[0]),null)},i(l){t||(T(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&k(e),o&&o.d(l)}}}function _d(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class bd extends se{constructor(e){super(),ne(this,e,_d,gd,J,{})}}const $d={heading:cf,paragraph:df,text:mf,image:bf,link:wf,em:Tf,strong:Mf,codespan:Pf,del:Ef,table:Lf,tablehead:Ff,tablebody:jf,tablerow:qf,tablecell:Qf,list:td,orderedlistitem:null,unorderedlistitem:null,listitem:od,hr:id,html:cd,blockquote:dd,code:md,br:bd},vd={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function wd(n){let e,t;return e=new xn({props:{tokens:n[0],renderers:n[1]}}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,[o]){const l={};o&1&&(l.tokens=s[0]),o&2&&(l.renderers=s[1]),e.$set(l)},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function kd(n,e,t){let s,o,l,i,{source:r=[]}=e,{renderers:a={}}=e,{options:c={}}=e,{isInline:u=!1}=e;const f=xo();let d,h,g;return fr(Or,{slug:b=>o?o.slug(b):"",getOptions:()=>l}),Wn(()=>{t(7,g=!0)}),n.$$set=b=>{"source"in b&&t(2,r=b.source),"renderers"in b&&t(3,a=b.renderers),"options"in b&&t(4,c=b.options),"isInline"in b&&t(5,u=b.isInline)},n.$$.update=()=>{n.$$.dirty&4&&t(8,s=Array.isArray(r)),n.$$.dirty&4&&(o=r?new Do:void 0),n.$$.dirty&16&&t(9,l=et(et({},vd),c)),n.$$.dirty&869&&(s?t(0,d=r):(t(6,h=new Ft(l)),t(0,d=u?h.inlineTokens(r):h.lex(r)),f("parsed",{tokens:d}))),n.$$.dirty&8&&t(1,i=et(et({},$d),a)),n.$$.dirty&385&&g&&!s&&f("parsed",{tokens:d})},[d,i,r,a,c,u,h,g,s,l]}class Sn extends se{constructor(e){super(),ne(this,e,kd,wd,J,{source:2,renderers:3,options:4,isInline:5})}}function yd(n){let e,t,s;return t=new Sn({props:{source:pu}}),{c(){e=_("section"),R(t.$$.fragment),m(e,"class","documentation")},m(o,l){y(o,e,l),P(t,e,null),s=!0},p:re,i(o){s||(T(t.$$.fragment,o),s=!0)},o(o){S(t.$$.fragment,o),s=!1},d(o){o&&k(e),N(t)}}}let Td=class extends se{constructor(e){super(),ne(this,e,null,yd,J,{})}};var on=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Bo={exports:{}};function Fo(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(function(e){var t=n[e];typeof t=="object"&&!Object.isFrozen(t)&&Fo(t)}),n}Bo.exports=Fo;Bo.exports.default=Fo;class Ll{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ir(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function ln(n,...e){const t=Object.create(null);for(const s in n)t[s]=n[s];return e.forEach(function(s){for(const o in s)t[o]=s[o]}),t}const xd="</span>",Dl=n=>!!n.scope||n.sublanguage&&n.language,Sd=(n,{prefix:e})=>{if(n.includes(".")){const t=n.split(".");return[`${e}${t.shift()}`,...t.map((s,o)=>`${s}${"_".repeat(o+1)}`)].join(" ")}return`${e}${n}`};class Ed{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=Ir(e)}openNode(e){if(!Dl(e))return;let t="";e.sublanguage?t=`language-${e.language}`:t=Sd(e.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(e){Dl(e)&&(this.buffer+=xd)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Bl=(n={})=>{const e={children:[]};return Object.assign(e,n),e};class zo{constructor(){this.rootNode=Bl(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=Bl({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(s=>this._walk(e,s)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{zo._collapse(t)}))}}class Ad extends zo{constructor(e){super(),this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const s=e.root;s.sublanguage=!0,s.language=t,this.add(s)}toHTML(){return new Ed(this,this.options).value()}finalize(){return!0}}function ss(n){return n?typeof n=="string"?n:n.source:null}function Lr(n){return En("(?=",n,")")}function Cd(n){return En("(?:",n,")*")}function Pd(n){return En("(?:",n,")?")}function En(...n){return n.map(t=>ss(t)).join("")}function Nd(n){const e=n[n.length-1];return typeof e=="object"&&e.constructor===Object?(n.splice(n.length-1,1),e):{}}function Ho(...n){return"("+(Nd(n).capture?"":"?:")+n.map(s=>ss(s)).join("|")+")"}function Dr(n){return new RegExp(n.toString()+"|").exec("").length-1}function Rd(n,e){const t=n&&n.exec(e);return t&&t.index===0}const Md=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function jo(n,{joinWith:e}){let t=0;return n.map(s=>{t+=1;const o=t;let l=ss(s),i="";for(;l.length>0;){const r=Md.exec(l);if(!r){i+=l;break}i+=l.substring(0,r.index),l=l.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?i+="\\"+String(Number(r[1])+o):(i+=r[0],r[0]==="("&&t++)}return i}).map(s=>`(${s})`).join(e)}const Od=/\b\B/,Br="[a-zA-Z]\\w*",Uo="[a-zA-Z_]\\w*",Fr="\\b\\d+(\\.\\d+)?",zr="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Hr="\\b(0b[01]+)",Id="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ld=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=En(e,/.*\b/,n.binary,/\b.*/)),ln({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,s)=>{t.index!==0&&s.ignoreMatch()}},n)},os={begin:"\\\\[\\s\\S]",relevance:0},Dd={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[os]},Bd={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[os]},Fd={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Qs=function(n,e,t={}){const s=ln({scope:"comment",begin:n,end:e,contains:[]},t);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=Ho("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:En(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},zd=Qs("//","$"),Hd=Qs("/\\*","\\*/"),jd=Qs("#","$"),Ud={scope:"number",begin:Fr,relevance:0},Kd={scope:"number",begin:zr,relevance:0},qd={scope:"number",begin:Hr,relevance:0},Wd={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[os,{begin:/\[/,end:/\]/,relevance:0,contains:[os]}]}]},Gd={scope:"title",begin:Br,relevance:0},Zd={scope:"title",begin:Uo,relevance:0},Xd={begin:"\\.\\s*"+Uo,relevance:0},Qd=function(n){return Object.assign(n,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var Cs=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Od,IDENT_RE:Br,UNDERSCORE_IDENT_RE:Uo,NUMBER_RE:Fr,C_NUMBER_RE:zr,BINARY_NUMBER_RE:Hr,RE_STARTERS_RE:Id,SHEBANG:Ld,BACKSLASH_ESCAPE:os,APOS_STRING_MODE:Dd,QUOTE_STRING_MODE:Bd,PHRASAL_WORDS_MODE:Fd,COMMENT:Qs,C_LINE_COMMENT_MODE:zd,C_BLOCK_COMMENT_MODE:Hd,HASH_COMMENT_MODE:jd,NUMBER_MODE:Ud,C_NUMBER_MODE:Kd,BINARY_NUMBER_MODE:qd,REGEXP_MODE:Wd,TITLE_MODE:Gd,UNDERSCORE_TITLE_MODE:Zd,METHOD_GUARD:Xd,END_SAME_AS_BEGIN:Qd});function Yd(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function Jd(n,e){n.className!==void 0&&(n.scope=n.className,delete n.className)}function Vd(n,e){e&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=Yd,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function ep(n,e){Array.isArray(n.illegal)&&(n.illegal=Ho(...n.illegal))}function tp(n,e){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function np(n,e){n.relevance===void 0&&(n.relevance=1)}const sp=(n,e)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},n);Object.keys(n).forEach(s=>{delete n[s]}),n.keywords=t.keywords,n.begin=En(t.beforeMatch,Lr(t.begin)),n.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},n.relevance=0,delete t.beforeMatch},op=["of","and","for","in","not","or","if","then","parent","list","value"],lp="keyword";function jr(n,e,t=lp){const s=Object.create(null);return typeof n=="string"?o(t,n.split(" ")):Array.isArray(n)?o(t,n):Object.keys(n).forEach(function(l){Object.assign(s,jr(n[l],e,l))}),s;function o(l,i){e&&(i=i.map(r=>r.toLowerCase())),i.forEach(function(r){const a=r.split("|");s[a[0]]=[l,ip(a[0],a[1])]})}}function ip(n,e){return e?Number(e):rp(n)?0:1}function rp(n){return op.includes(n.toLowerCase())}const Fl={},vn=n=>{console.error(n)},zl=(n,...e)=>{console.log(`WARN: ${n}`,...e)},zn=(n,e)=>{Fl[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),Fl[`${n}/${e}`]=!0)},js=new Error;function Ur(n,e,{key:t}){let s=0;const o=n[t],l={},i={};for(let r=1;r<=e.length;r++)i[r+s]=o[r],l[r+s]=!0,s+=Dr(e[r-1]);n[t]=i,n[t]._emit=l,n[t]._multi=!0}function ap(n){if(Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw vn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),js;if(typeof n.beginScope!="object"||n.beginScope===null)throw vn("beginScope must be object"),js;Ur(n,n.begin,{key:"beginScope"}),n.begin=jo(n.begin,{joinWith:""})}}function cp(n){if(Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw vn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),js;if(typeof n.endScope!="object"||n.endScope===null)throw vn("endScope must be object"),js;Ur(n,n.end,{key:"endScope"}),n.end=jo(n.end,{joinWith:""})}}function up(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)}function fp(n){up(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),ap(n),cp(n)}function dp(n){function e(i,r){return new RegExp(ss(i),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(r?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,r]),this.matchAt+=Dr(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(a=>a[1]);this.matcherRe=e(jo(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(r);if(!a)return null;const c=a.findIndex((f,d)=>d>0&&f!==void 0),u=this.matchIndexes[c];return a.splice(0,c),Object.assign(a,u)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const a=new t;return this.rules.slice(r).forEach(([c,u])=>a.addRule(c,u)),a.compile(),this.multiRegexes[r]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,a){this.rules.push([r,a]),a.type==="begin"&&this.count++}exec(r){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let c=a.exec(r);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(r)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function o(i){const r=new s;return i.contains.forEach(a=>r.addRule(a.begin,{rule:a,type:"begin"})),i.terminatorEnd&&r.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&r.addRule(i.illegal,{type:"illegal"}),r}function l(i,r){const a=i;if(i.isCompiled)return a;[Jd,tp,fp,sp].forEach(u=>u(i,r)),n.compilerExtensions.forEach(u=>u(i,r)),i.__beforeBegin=null,[Vd,ep,np].forEach(u=>u(i,r)),i.isCompiled=!0;let c=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),c=i.keywords.$pattern,delete i.keywords.$pattern),c=c||/\w+/,i.keywords&&(i.keywords=jr(i.keywords,n.case_insensitive)),a.keywordPatternRe=e(c,!0),r&&(i.begin||(i.begin=/\B|\b/),a.beginRe=e(a.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(a.endRe=e(a.end)),a.terminatorEnd=ss(a.end)||"",i.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(a.illegalRe=e(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(u){return pp(u==="self"?i:u)})),i.contains.forEach(function(u){l(u,a)}),i.starts&&l(i.starts,r),a.matcher=o(a),a}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=ln(n.classNameAliases||{}),l(n)}function Kr(n){return n?n.endsWithParent||Kr(n.starts):!1}function pp(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return ln(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:Kr(n)?ln(n,{starts:n.starts?ln(n.starts):null}):Object.isFrozen(n)?ln(n):n}var hp="11.7.0";class mp extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const ho=Ir,Hl=ln,jl=Symbol("nomatch"),gp=7,_p=function(n){const e=Object.create(null),t=Object.create(null),s=[];let o=!0;const l="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Ad};function a(H){return r.noHighlightRe.test(H)}function c(H){let G=H.className+" ";G+=H.parentNode?H.parentNode.className:"";const ee=r.languageDetectRe.exec(G);if(ee){const fe=j(ee[1]);return fe||(zl(l.replace("{}",ee[1])),zl("Falling back to no-highlight mode for this block.",H)),fe?ee[1]:"no-highlight"}return G.split(/\s+/).find(fe=>a(fe)||j(fe))}function u(H,G,ee){let fe="",be="";typeof G=="object"?(fe=H,ee=G.ignoreIllegals,be=G.language):(zn("10.7.0","highlight(lang, code, ...args) has been deprecated."),zn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),be=H,fe=G),ee===void 0&&(ee=!0);const ge={code:fe,language:be};ie("before:highlight",ge);const Le=ge.result?ge.result:f(ge.language,ge.code,ee);return Le.code=ge.code,ie("after:highlight",Le),Le}function f(H,G,ee,fe){const be=Object.create(null);function ge(K,te){return K.keywords[te]}function Le(){if(!de.keywords){Me.addText(xe);return}let K=0;de.keywordPatternRe.lastIndex=0;let te=de.keywordPatternRe.exec(xe),ue="";for(;te;){ue+=xe.substring(K,te.index);const W=Re.case_insensitive?te[0].toLowerCase():te[0],Se=ge(de,W);if(Se){const[Be,Ne]=Se;if(Me.addText(ue),ue="",be[W]=(be[W]||0)+1,be[W]<=gp&&(Ve+=Ne),Be.startsWith("_"))ue+=te[0];else{const bt=Re.classNameAliases[Be]||Be;Me.addKeyword(te[0],bt)}}else ue+=te[0];K=de.keywordPatternRe.lastIndex,te=de.keywordPatternRe.exec(xe)}ue+=xe.substring(K),Me.addText(ue)}function Ge(){if(xe==="")return;let K=null;if(typeof de.subLanguage=="string"){if(!e[de.subLanguage]){Me.addText(xe);return}K=f(de.subLanguage,xe,!0,Ct[de.subLanguage]),Ct[de.subLanguage]=K._top}else K=h(xe,de.subLanguage.length?de.subLanguage:null);de.relevance>0&&(Ve+=K.relevance),Me.addSublanguage(K._emitter,K.language)}function ve(){de.subLanguage!=null?Ge():Le(),xe=""}function _e(K,te){let ue=1;const W=te.length-1;for(;ue<=W;){if(!K._emit[ue]){ue++;continue}const Se=Re.classNameAliases[K[ue]]||K[ue],Be=te[ue];Se?Me.addKeyword(Be,Se):(xe=Be,Le(),xe=""),ue++}}function ae(K,te){return K.scope&&typeof K.scope=="string"&&Me.openNode(Re.classNameAliases[K.scope]||K.scope),K.beginScope&&(K.beginScope._wrap?(Me.addKeyword(xe,Re.classNameAliases[K.beginScope._wrap]||K.beginScope._wrap),xe=""):K.beginScope._multi&&(_e(K.beginScope,te),xe="")),de=Object.create(K,{parent:{value:de}}),de}function Pe(K,te,ue){let W=Rd(K.endRe,ue);if(W){if(K["on:end"]){const Se=new Ll(K);K["on:end"](te,Se),Se.isMatchIgnored&&(W=!1)}if(W){for(;K.endsParent&&K.parent;)K=K.parent;return K}}if(K.endsWithParent)return Pe(K.parent,te,ue)}function ce(K){return de.matcher.regexIndex===0?(xe+=K[0],1):(Xe=!0,0)}function $e(K){const te=K[0],ue=K.rule,W=new Ll(ue),Se=[ue.__beforeBegin,ue["on:begin"]];for(const Be of Se)if(Be&&(Be(K,W),W.isMatchIgnored))return ce(te);return ue.skip?xe+=te:(ue.excludeBegin&&(xe+=te),ve(),!ue.returnBegin&&!ue.excludeBegin&&(xe=te)),ae(ue,K),ue.returnBegin?0:te.length}function Q(K){const te=K[0],ue=G.substring(K.index),W=Pe(de,K,ue);if(!W)return jl;const Se=de;de.endScope&&de.endScope._wrap?(ve(),Me.addKeyword(te,de.endScope._wrap)):de.endScope&&de.endScope._multi?(ve(),_e(de.endScope,K)):Se.skip?xe+=te:(Se.returnEnd||Se.excludeEnd||(xe+=te),ve(),Se.excludeEnd&&(xe=te));do de.scope&&Me.closeNode(),!de.skip&&!de.subLanguage&&(Ve+=de.relevance),de=de.parent;while(de!==W.parent);return W.starts&&ae(W.starts,K),Se.returnEnd?0:te.length}function Ee(){const K=[];for(let te=de;te!==Re;te=te.parent)te.scope&&K.unshift(te.scope);K.forEach(te=>Me.openNode(te))}let De={};function Ce(K,te){const ue=te&&te[0];if(xe+=K,ue==null)return ve(),0;if(De.type==="begin"&&te.type==="end"&&De.index===te.index&&ue===""){if(xe+=G.slice(te.index,te.index+1),!o){const W=new Error(`0 width match regex (${H})`);throw W.languageName=H,W.badRule=De.rule,W}return 1}if(De=te,te.type==="begin")return $e(te);if(te.type==="illegal"&&!ee){const W=new Error('Illegal lexeme "'+ue+'" for mode "'+(de.scope||"<unnamed>")+'"');throw W.mode=de,W}else if(te.type==="end"){const W=Q(te);if(W!==jl)return W}if(te.type==="illegal"&&ue==="")return 1;if(Pt>1e5&&Pt>te.index*3)throw new Error("potential infinite loop, way more iterations than matches");return xe+=ue,ue.length}const Re=j(H);if(!Re)throw vn(l.replace("{}",H)),new Error('Unknown language: "'+H+'"');const Ot=dp(Re);let it="",de=fe||Ot;const Ct={},Me=new r.__emitter(r);Ee();let xe="",Ve=0,rt=0,Pt=0,Xe=!1;try{for(de.matcher.considerAll();;){Pt++,Xe?Xe=!1:de.matcher.considerAll(),de.matcher.lastIndex=rt;const K=de.matcher.exec(G);if(!K)break;const te=G.substring(rt,K.index),ue=Ce(te,K);rt=K.index+ue}return Ce(G.substring(rt)),Me.closeAllNodes(),Me.finalize(),it=Me.toHTML(),{language:H,value:it,relevance:Ve,illegal:!1,_emitter:Me,_top:de}}catch(K){if(K.message&&K.message.includes("Illegal"))return{language:H,value:ho(G),illegal:!0,relevance:0,_illegalBy:{message:K.message,index:rt,context:G.slice(rt-100,rt+100),mode:K.mode,resultSoFar:it},_emitter:Me};if(o)return{language:H,value:ho(G),illegal:!1,relevance:0,errorRaised:K,_emitter:Me,_top:de};throw K}}function d(H){const G={value:ho(H),illegal:!1,relevance:0,_top:i,_emitter:new r.__emitter(r)};return G._emitter.addText(H),G}function h(H,G){G=G||r.languages||Object.keys(e);const ee=d(H),fe=G.filter(j).filter(U).map(ve=>f(ve,H,!1));fe.unshift(ee);const be=fe.sort((ve,_e)=>{if(ve.relevance!==_e.relevance)return _e.relevance-ve.relevance;if(ve.language&&_e.language){if(j(ve.language).supersetOf===_e.language)return 1;if(j(_e.language).supersetOf===ve.language)return-1}return 0}),[ge,Le]=be,Ge=ge;return Ge.secondBest=Le,Ge}function g(H,G,ee){const fe=G&&t[G]||ee;H.classList.add("hljs"),H.classList.add(`language-${fe}`)}function b(H){let G=null;const ee=c(H);if(a(ee))return;if(ie("before:highlightElement",{el:H,language:ee}),H.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(H)),r.throwUnescapedHTML))throw new mp("One of your code blocks includes unescaped HTML.",H.innerHTML);G=H;const fe=G.textContent,be=ee?u(fe,{language:ee,ignoreIllegals:!0}):h(fe);H.innerHTML=be.value,g(H,ee,be.language),H.result={language:be.language,re:be.relevance,relevance:be.relevance},be.secondBest&&(H.secondBest={language:be.secondBest.language,relevance:be.secondBest.relevance}),ie("after:highlightElement",{el:H,result:be,text:fe})}function $(H){r=Hl(r,H)}const w=()=>{C(),zn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function E(){C(),zn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let D=!1;function C(){if(document.readyState==="loading"){D=!0;return}document.querySelectorAll(r.cssSelector).forEach(b)}function M(){D&&C()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",M,!1);function O(H,G){let ee=null;try{ee=G(n)}catch(fe){if(vn("Language definition for '{}' could not be registered.".replace("{}",H)),o)vn(fe);else throw fe;ee=i}ee.name||(ee.name=H),e[H]=ee,ee.rawDefinition=G.bind(null,n),ee.aliases&&z(ee.aliases,{languageName:H})}function L(H){delete e[H];for(const G of Object.keys(t))t[G]===H&&delete t[G]}function I(){return Object.keys(e)}function j(H){return H=(H||"").toLowerCase(),e[H]||e[t[H]]}function z(H,{languageName:G}){typeof H=="string"&&(H=[H]),H.forEach(ee=>{t[ee.toLowerCase()]=G})}function U(H){const G=j(H);return G&&!G.disableAutodetect}function Z(H){H["before:highlightBlock"]&&!H["before:highlightElement"]&&(H["before:highlightElement"]=G=>{H["before:highlightBlock"](Object.assign({block:G.el},G))}),H["after:highlightBlock"]&&!H["after:highlightElement"]&&(H["after:highlightElement"]=G=>{H["after:highlightBlock"](Object.assign({block:G.el},G))})}function X(H){Z(H),s.push(H)}function ie(H,G){const ee=H;s.forEach(function(fe){fe[ee]&&fe[ee](G)})}function V(H){return zn("10.7.0","highlightBlock will be removed entirely in v12.0"),zn("10.7.0","Please use highlightElement now."),b(H)}Object.assign(n,{highlight:u,highlightAuto:h,highlightAll:C,highlightElement:b,highlightBlock:V,configure:$,initHighlighting:w,initHighlightingOnLoad:E,registerLanguage:O,unregisterLanguage:L,listLanguages:I,getLanguage:j,registerAliases:z,autoDetection:U,inherit:Hl,addPlugin:X}),n.debugMode=function(){o=!1},n.safeMode=function(){o=!0},n.versionString=hp,n.regex={concat:En,lookahead:Lr,either:Ho,optional:Pd,anyNumberOfTimes:Cd};for(const H in Cs)typeof Cs[H]=="object"&&Bo.exports(Cs[H]);return Object.assign(n,Cs),n};var ls=_p({}),bp=ls;ls.HighlightJS=ls;ls.default=ls;const Ps=bp;function $p(n){const e=n.regex,t=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),s=/[\p{L}0-9._:-]+/u,o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},l={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=n.inherit(l,{begin:/\(/,end:/\)/}),r=n.inherit(n.APOS_STRING_MODE,{className:"string"}),a=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:s,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[l,a,r,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[l,i,a,r]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Ul="[A-Za-z$_][0-9A-Za-z$_]*",vp=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],wp=["true","false","null","undefined","NaN","Infinity"],qr=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Wr=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Gr=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],kp=["arguments","this","super","console","window","document","localStorage","module","global"],yp=[].concat(Gr,qr,Wr);function Tp(n){const e=n.regex,t=(G,{after:ee})=>{const fe="</"+G[0].slice(1);return G.input.indexOf(fe,ee)!==-1},s=Ul,o={begin:"<>",end:"</>"},l=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(G,ee)=>{const fe=G[0].length+G.index,be=G.input[fe];if(be==="<"||be===","){ee.ignoreMatch();return}be===">"&&(t(G,{after:fe})||ee.ignoreMatch());let ge;const Le=G.input.substring(fe);if(ge=Le.match(/^\s*=/)){ee.ignoreMatch();return}if((ge=Le.match(/^\s+extends\s+/))&&ge.index===0){ee.ignoreMatch();return}}},r={$pattern:Ul,keyword:vp,literal:wp,built_in:yp,"variable.language":kp},a="[0-9](_?[0-9])*",c=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},h={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},g={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},b={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},w={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},E=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,g,b,{match:/\$\d+/},f];d.contains=E.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(E)});const D=[].concat(w,d.contains),C=D.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(D)}]),M={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:C},O={variants:[{match:[/class/,/\s+/,s,/\s+/,/extends/,/\s+/,e.concat(s,"(",e.concat(/\./,s),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,s],scope:{1:"keyword",3:"title.class"}}]},L={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...qr,...Wr]}},I={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},j={variants:[{match:[/function/,/\s+/,s,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[M],illegal:/%/},z={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function U(G){return e.concat("(?!",G.join("|"),")")}const Z={match:e.concat(/\b/,U([...Gr,"super","import"]),s,e.lookahead(/\(/)),className:"title.function",relevance:0},X={begin:e.concat(/\./,e.lookahead(e.concat(s,/(?![0-9A-Za-z$_(])/))),end:s,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ie={match:[/get|set/,/\s+/,s,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},M]},V="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",H={match:[/const|var|let/,/\s+/,s,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(V)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[M]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:C,CLASS_REFERENCE:L},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),I,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,g,b,w,{match:/\$\d+/},f,L,{className:"attr",begin:s+e.lookahead(":"),relevance:0},H,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[w,n.REGEXP_MODE,{className:"function",begin:V,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:C}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:l},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},j,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[M,n.inherit(n.TITLE_MODE,{begin:s,className:"title.function"})]},{match:/\.\.\./,relevance:0},X,{match:"\\$"+s,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[M]},Z,z,O,ie,{match:/\$[(.]/}]}}const xp=n=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:n.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:n.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),Sp=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Ep=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],Ap=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],Cp=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],Pp=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function Np(n){const e=n.regex,t=xp(n),s={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},o="and or not only",l=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",r=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,s,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Ap.join("|")+")"},{begin:":(:)?("+Cp.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Pp.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...r,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...r,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:e.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:l},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:o,attribute:Ep.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...r,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Sp.join("|")+")\\b"}]}}const Rp=n=>({highlighted:n&2}),Kl=n=>({highlighted:n[1]});function Mp(n){let e,t,s=[{"data-language":"svelte"},n[2]],o={};for(let l=0;l<s.length;l+=1)o=Et(o,s[l]);return{c(){e=_("pre"),t=_("code"),m(t,"class","hljs"),cl(e,o),Ye(e,"langtag",n[0]),Ye(e,"svelte-d72vtw",!0)},m(l,i){y(l,e,i),p(e,t),t.innerHTML=n[1]},p(l,i){i&2&&(t.innerHTML=l[1]),cl(e,o=Tn(s,[{"data-language":"svelte"},i&4&&l[2]])),Ye(e,"langtag",l[0]),Ye(e,"svelte-d72vtw",!0)},d(l){l&&k(e)}}}function Op(n){let e;const t=n[5].default,s=Fe(t,n,n[4],Kl),o=s||Mp(n);return{c(){o&&o.c()},m(l,i){o&&o.m(l,i),e=!0},p(l,[i]){s?s.p&&(!e||i&18)&&He(s,t,l,l[4],e?ze(t,l[4],i,Rp):je(l[4]),Kl):o&&o.p&&(!e||i&7)&&o.p(l,e?i:-1)},i(l){e||(T(o,l),e=!0)},o(l){S(o,l),e=!1},d(l){o&&o.d(l)}}}function Ip(n,e,t){let s;const o=["code","langtag"];let l=Ls(e,o),{$$slots:i={},$$scope:r}=e,{code:a}=e,{langtag:c=!1}=e;const u=xo();return Ps.registerLanguage("xml",$p),Ps.registerLanguage("javascript",Tp),Ps.registerLanguage("css",Np),Pc(()=>{s&&u("highlight",{highlighted:s})}),n.$$set=f=>{e=Et(Et({},e),lr(f)),t(2,l=Ls(e,o)),"code"in f&&t(3,a=f.code),"langtag"in f&&t(0,c=f.langtag),"$$scope"in f&&t(4,r=f.$$scope)},n.$$.update=()=>{n.$$.dirty&8&&t(1,s=Ps.highlightAuto(a).value)},[c,s,l,a,r,i]}class Lp extends se{constructor(e){super(),ne(this,e,Ip,Op,J,{code:3,langtag:0})}}const dt=Lp;function Dp(n){let e;return{c(){e=F("First")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function Bp(n){let e;return{c(){e=F("Second")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function Fp(n){let e;return{c(){e=F("Third")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function ql(n){let e,t;return e=new ke({props:{$$slots:{default:[zp]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&2050&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function zp(n){let e,t,s,o;return{c(){e=F("Fourth "),t=_("span"),t.textContent="×"},m(l,i){y(l,e,i),y(l,t,i),s||(o=Y(t,"click",n[4]),s=!0)},p:re,d(l){l&&k(e),l&&k(t),s=!1,o()}}}function Wl(n){let e,t;return e=new ke({props:{$$slots:{default:[Hp]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&2052&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Hp(n){let e,t,s,o;return{c(){e=F("Fifth "),t=_("span"),t.textContent="×"},m(l,i){y(l,e,i),y(l,t,i),s||(o=Y(t,"click",n[5]),s=!0)},p:re,d(l){l&&k(e),l&&k(t),s=!1,o()}}}function jp(n){let e,t,s,o,l,i,r,a,c;e=new ke({props:{$$slots:{default:[Dp]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[Bp]},$$scope:{ctx:n}}}),l=new ke({props:{disabled:n[0],$$slots:{default:[Fp]},$$scope:{ctx:n}}});let u=n[1]&&ql(n),f=n[2]&&Wl(n);return{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),u&&u.c(),r=x(),f&&f.c(),a=Ie()},m(d,h){P(e,d,h),y(d,t,h),P(s,d,h),y(d,o,h),P(l,d,h),y(d,i,h),u&&u.m(d,h),y(d,r,h),f&&f.m(d,h),y(d,a,h),c=!0},p(d,h){const g={};h&2048&&(g.$$scope={dirty:h,ctx:d}),e.$set(g);const b={};h&2048&&(b.$$scope={dirty:h,ctx:d}),s.$set(b);const $={};h&1&&($.disabled=d[0]),h&2048&&($.$$scope={dirty:h,ctx:d}),l.$set($),d[1]?u?(u.p(d,h),h&2&&T(u,1)):(u=ql(d),u.c(),T(u,1),u.m(r.parentNode,r)):u&&(ye(),S(u,1,1,()=>{u=null}),Te()),d[2]?f?(f.p(d,h),h&4&&T(f,1)):(f=Wl(d),f.c(),T(f,1),f.m(a.parentNode,a)):f&&(ye(),S(f,1,1,()=>{f=null}),Te())},i(d){c||(T(e.$$.fragment,d),T(s.$$.fragment,d),T(l.$$.fragment,d),T(u),T(f),c=!0)},o(d){S(e.$$.fragment,d),S(s.$$.fragment,d),S(l.$$.fragment,d),S(u),S(f),c=!1},d(d){N(e,d),d&&k(t),N(s,d),d&&k(o),N(l,d),d&&k(i),u&&u.d(d),d&&k(r),f&&f.d(d),d&&k(a)}}}function Up(n){let e;return{c(){e=_("div"),e.textContent="These are the first diamonds I ever took from my first mine."},m(t,s){y(t,e,s)},p:re,d(t){t&&k(e)}}}function Kp(n){let e;return{c(){e=_("div"),e.textContent="The second stage supplements the first stage by adding the second rail tunnel."},m(t,s){y(t,e,s)},p:re,d(t){t&&k(e)}}}function qp(n){let e;return{c(){e=_("div"),e.textContent="Let's not worry about third or fourth place."},m(t,s){y(t,e,s)},p:re,d(t){t&&k(e)}}}function Gl(n){let e,t;return e=new we({props:{$$slots:{default:[Wp]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Wp(n){let e;return{c(){e=_("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,s){y(t,e,s)},p:re,d(t){t&&k(e)}}}function Zl(n){let e,t;return e=new we({props:{$$slots:{default:[Gp]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Gp(n){let e;return{c(){e=_("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,s){y(t,e,s)},p:re,d(t){t&&k(e)}}}function Zp(n){let e,t,s,o,l,i,r,a,c,u,f;e=new yt({props:{$$slots:{default:[jp]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[Up]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[Kp]},$$scope:{ctx:n}}}),r=new we({props:{$$slots:{default:[qp]},$$scope:{ctx:n}}});let d=n[1]&&Gl(n),h=n[2]&&Zl(n);return{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment),a=x(),d&&d.c(),c=x(),h&&h.c(),u=Ie()},m(g,b){P(e,g,b),y(g,t,b),P(s,g,b),y(g,o,b),P(l,g,b),y(g,i,b),P(r,g,b),y(g,a,b),d&&d.m(g,b),y(g,c,b),h&&h.m(g,b),y(g,u,b),f=!0},p(g,b){const $={};b&2055&&($.$$scope={dirty:b,ctx:g}),e.$set($);const w={};b&2048&&(w.$$scope={dirty:b,ctx:g}),s.$set(w);const E={};b&2048&&(E.$$scope={dirty:b,ctx:g}),l.$set(E);const D={};b&2048&&(D.$$scope={dirty:b,ctx:g}),r.$set(D),g[1]?d?b&2&&T(d,1):(d=Gl(g),d.c(),T(d,1),d.m(c.parentNode,c)):d&&(ye(),S(d,1,1,()=>{d=null}),Te()),g[2]?h?b&4&&T(h,1):(h=Zl(g),h.c(),T(h,1),h.m(u.parentNode,u)):h&&(ye(),S(h,1,1,()=>{h=null}),Te())},i(g){f||(T(e.$$.fragment,g),T(s.$$.fragment,g),T(l.$$.fragment,g),T(r.$$.fragment,g),T(d),T(h),f=!0)},o(g){S(e.$$.fragment,g),S(s.$$.fragment,g),S(l.$$.fragment,g),S(r.$$.fragment,g),S(d),S(h),f=!1},d(g){N(e,g),g&&k(t),N(s,g),g&&k(o),N(l,g),g&&k(i),N(r,g),g&&k(a),d&&d.d(g),g&&k(c),h&&h.d(g),g&&k(u)}}}function Xp(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O,L,I,j,z,U,Z,X={class:"mb-4",$$slots:{default:[Zp]},$$scope:{ctx:n}};return t=new kt({props:X}),n[6](t),j=new dt({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),R(t.$$.fragment),s=x(),o=_("div"),o.textContent="Use these controls to operate tabs.",l=x(),i=_("div"),r=_("label"),a=_("input"),c=F(" Fourth"),u=x(),f=_("label"),d=_("input"),h=F(" Fifth"),g=x(),b=_("label"),$=_("input"),w=F(" Disable Third"),E=x(),D=_("label"),C=F("Select "),M=_("input"),O=x(),L=_("h3"),L.textContent="Code",I=x(),R(j.$$.fragment),m(o,"class","py-2 border-t text-center text-gray-500"),m(a,"type","checkbox"),m(d,"type","checkbox"),m($,"type","checkbox"),m(M,"class","input max-w-[6ch]"),m(M,"type","number"),m(M,"min","-5"),m(M,"max","4"),m(i,"class","flex items-center place-content-center gap-4"),m(e,"class","prose max-w-none my-4 svelte-1b9uk6h")},m(ie,V){y(ie,e,V),P(t,e,null),p(e,s),p(e,o),p(e,l),p(e,i),p(i,r),p(r,a),a.checked=n[1],p(r,c),p(i,u),p(i,f),p(f,d),d.checked=n[2],p(f,h),p(i,g),p(i,b),p(b,$),$.checked=n[0],p(b,w),p(i,E),p(i,D),p(D,C),p(D,M),p(e,O),p(e,L),p(e,I),P(j,e,null),z=!0,U||(Z=[Y(a,"change",n[7]),Y(d,"change",n[8]),Y($,"change",n[9]),Y(M,"change",Tc(n[10]))],U=!0)},p(ie,[V]){const H={};V&2055&&(H.$$scope={dirty:V,ctx:ie}),t.$set(H),V&2&&(a.checked=ie[1]),V&4&&(d.checked=ie[2]),V&1&&($.checked=ie[0])},i(ie){z||(T(t.$$.fragment,ie),T(j.$$.fragment,ie),z=!0)},o(ie){S(t.$$.fragment,ie),S(j.$$.fragment,ie),z=!1},d(ie){ie&&k(e),n[6](null),N(t),N(j),U=!1,Ue(Z)}}}function Qp(n,e,t){let s=!1,o=!1,l=!1,i;const r=()=>t(1,o=!1),a=()=>t(2,l=!1);function c(g){Qe[g?"unshift":"push"](()=>{i=g,t(3,i)})}function u(){o=this.checked,t(1,o)}function f(){l=this.checked,t(2,l)}function d(){s=this.checked,t(0,s)}return[s,o,l,i,r,a,c,u,f,d,g=>i.selectTab(+g.currentTarget.value)]}let Yp=class extends se{constructor(e){super(),ne(this,e,Qp,Xp,J,{})}};function Jp(n){let e;return{c(){e=F("First-A")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function Vp(n){let e;return{c(){e=F("First-B")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function eh(n){let e;return{c(){e=F("First-C")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function th(n){let e;return{c(){e=F("First-D")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function nh(n){let e;return{c(){e=F("First-E")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function sh(n){let e,t,s,o,l,i,r,a,c,u;return e=new ke({props:{$$slots:{default:[Jp]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[Vp]},$$scope:{ctx:n}}}),l=new ke({props:{disabled:!0,$$slots:{default:[eh]},$$scope:{ctx:n}}}),r=new ke({props:{$$slots:{default:[th]},$$scope:{ctx:n}}}),c=new ke({props:{$$slots:{default:[nh]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment),a=x(),R(c.$$.fragment)},m(f,d){P(e,f,d),y(f,t,d),P(s,f,d),y(f,o,d),P(l,f,d),y(f,i,d),P(r,f,d),y(f,a,d),P(c,f,d),u=!0},p(f,d){const h={};d&2&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const g={};d&2&&(g.$$scope={dirty:d,ctx:f}),s.$set(g);const b={};d&2&&(b.$$scope={dirty:d,ctx:f}),l.$set(b);const $={};d&2&&($.$$scope={dirty:d,ctx:f}),r.$set($);const w={};d&2&&(w.$$scope={dirty:d,ctx:f}),c.$set(w)},i(f){u||(T(e.$$.fragment,f),T(s.$$.fragment,f),T(l.$$.fragment,f),T(r.$$.fragment,f),T(c.$$.fragment,f),u=!0)},o(f){S(e.$$.fragment,f),S(s.$$.fragment,f),S(l.$$.fragment,f),S(r.$$.fragment,f),S(c.$$.fragment,f),u=!1},d(f){N(e,f),f&&k(t),N(s,f),f&&k(o),N(l,f),f&&k(i),N(r,f),f&&k(a),N(c,f)}}}function oh(n){let e;return{c(){e=F("Second-A")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function lh(n){let e;return{c(){e=F("Second-B")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function ih(n){let e;return{c(){e=F("Second-C")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function rh(n){let e,t,s,o,l,i;return e=new ke({props:{$$slots:{default:[oh]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[lh]},$$scope:{ctx:n}}}),l=new ke({props:{$$slots:{default:[ih]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment)},m(r,a){P(e,r,a),y(r,t,a),P(s,r,a),y(r,o,a),P(l,r,a),i=!0},p(r,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:r}),s.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i(r){i||(T(e.$$.fragment,r),T(s.$$.fragment,r),T(l.$$.fragment,r),i=!0)},o(r){S(e.$$.fragment,r),S(s.$$.fragment,r),S(l.$$.fragment,r),i=!1},d(r){N(e,r),r&&k(t),N(s,r),r&&k(o),N(l,r)}}}function ah(n){let e;return{c(){e=F("Fourth-A")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function ch(n){let e;return{c(){e=F("Fourth-B")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function uh(n){let e,t,s,o;return e=new ke({props:{$$slots:{default:[ah]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[ch]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment)},m(l,i){P(e,l,i),y(l,t,i),P(s,l,i),o=!0},p(l,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:l}),e.$set(r);const a={};i&2&&(a.$$scope={dirty:i,ctx:l}),s.$set(a)},i(l){o||(T(e.$$.fragment,l),T(s.$$.fragment,l),o=!0)},o(l){S(e.$$.fragment,l),S(s.$$.fragment,l),o=!1},d(l){N(e,l),l&&k(t),N(s,l)}}}function fh(n){let e,t=n[0]+"",s;return{c(){e=F("Fourth of Second-B. Tab: A, index "),s=F(t)},m(o,l){y(o,e,l),y(o,s,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Oe(s,t)},d(o){o&&k(e),o&&k(s)}}}function dh(n){let e,t=n[0]+"",s;return{c(){e=F("Fourth of Second-B. Tab: B, index "),s=F(t)},m(o,l){y(o,e,l),y(o,s,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Oe(s,t)},d(o){o&&k(e),o&&k(s)}}}function ph(n){let e,t,s,o,l,i;return e=new yt({props:{$$slots:{default:[uh]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[fh,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[dh,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment)},m(r,a){P(e,r,a),y(r,t,a),P(s,r,a),y(r,o,a),P(l,r,a),i=!0},p(r,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:r}),s.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i(r){i||(T(e.$$.fragment,r),T(s.$$.fragment,r),T(l.$$.fragment,r),i=!0)},o(r){S(e.$$.fragment,r),S(s.$$.fragment,r),S(l.$$.fragment,r),i=!1},d(r){N(e,r),r&&k(t),N(s,r),r&&k(o),N(l,r)}}}function hh(n){let e,t,s=n[0]+"",o,l,i,r;return i=new kt({props:{class:"level-4",$$slots:{default:[ph]},$$scope:{ctx:n}}}),{c(){e=_("div"),t=F("Second of First-A. Tab: A, index "),o=F(s),l=x(),R(i.$$.fragment)},m(a,c){y(a,e,c),p(e,t),p(e,o),y(a,l,c),P(i,a,c),r=!0},p(a,c){(!r||c&1)&&s!==(s=a[0]+"")&&Oe(o,s);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),i.$set(u)},i(a){r||(T(i.$$.fragment,a),r=!0)},o(a){S(i.$$.fragment,a),r=!1},d(a){a&&k(e),a&&k(l),N(i,a)}}}function mh(n){let e,t=n[0]+"",s;return{c(){e=F("Second of First-A. Tab: B, index "),s=F(t)},m(o,l){y(o,e,l),y(o,s,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Oe(s,t)},d(o){o&&k(e),o&&k(s)}}}function gh(n){let e,t=n[0]+"",s;return{c(){e=F("Second of First-A. Tab: C, index "),s=F(t)},m(o,l){y(o,e,l),y(o,s,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Oe(s,t)},d(o){o&&k(e),o&&k(s)}}}function _h(n){let e,t,s,o,l,i,r,a;return e=new yt({props:{$$slots:{default:[rh]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[hh,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[mh,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:n}}}),r=new we({props:{$$slots:{default:[gh,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment)},m(c,u){P(e,c,u),y(c,t,u),P(s,c,u),y(c,o,u),P(l,c,u),y(c,i,u),P(r,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&3&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const h={};u&3&&(h.$$scope={dirty:u,ctx:c}),l.$set(h);const g={};u&3&&(g.$$scope={dirty:u,ctx:c}),r.$set(g)},i(c){a||(T(e.$$.fragment,c),T(s.$$.fragment,c),T(l.$$.fragment,c),T(r.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(s.$$.fragment,c),S(l.$$.fragment,c),S(r.$$.fragment,c),a=!1},d(c){N(e,c),c&&k(t),N(s,c),c&&k(o),N(l,c),c&&k(i),N(r,c)}}}function bh(n){let e,t,s=n[0]+"",o,l,i,r;return i=new kt({props:{class:"level-2",$$slots:{default:[_h]},$$scope:{ctx:n}}}),{c(){e=_("div"),t=F("First level. Tab: A, index "),o=F(s),l=x(),R(i.$$.fragment)},m(a,c){y(a,e,c),p(e,t),p(e,o),y(a,l,c),P(i,a,c),r=!0},p(a,c){(!r||c&1)&&s!==(s=a[0]+"")&&Oe(o,s);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),i.$set(u)},i(a){r||(T(i.$$.fragment,a),r=!0)},o(a){S(i.$$.fragment,a),r=!1},d(a){a&&k(e),a&&k(l),N(i,a)}}}function $h(n){let e;return{c(){e=F("Third-A")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function vh(n){let e;return{c(){e=F("Third-B")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function wh(n){let e,t,s,o;return e=new ke({props:{$$slots:{default:[$h]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[vh]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment)},m(l,i){P(e,l,i),y(l,t,i),P(s,l,i),o=!0},p(l,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:l}),e.$set(r);const a={};i&2&&(a.$$scope={dirty:i,ctx:l}),s.$set(a)},i(l){o||(T(e.$$.fragment,l),T(s.$$.fragment,l),o=!0)},o(l){S(e.$$.fragment,l),S(s.$$.fragment,l),o=!1},d(l){N(e,l),l&&k(t),N(s,l)}}}function kh(n){let e,t=n[0]+"",s;return{c(){e=F("Third of First-B. Tab: A, index "),s=F(t)},m(o,l){y(o,e,l),y(o,s,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Oe(s,t)},d(o){o&&k(e),o&&k(s)}}}function yh(n){let e,t=n[0]+"",s;return{c(){e=F("Third of First-B. Tab: B, index "),s=F(t)},m(o,l){y(o,e,l),y(o,s,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Oe(s,t)},d(o){o&&k(e),o&&k(s)}}}function Th(n){let e,t,s,o,l,i;return e=new yt({props:{$$slots:{default:[wh]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[kh,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[yh,({index:r})=>({0:r}),({index:r})=>r?1:0]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment)},m(r,a){P(e,r,a),y(r,t,a),P(s,r,a),y(r,o,a),P(l,r,a),i=!0},p(r,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:r}),s.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i(r){i||(T(e.$$.fragment,r),T(s.$$.fragment,r),T(l.$$.fragment,r),i=!0)},o(r){S(e.$$.fragment,r),S(s.$$.fragment,r),S(l.$$.fragment,r),i=!1},d(r){N(e,r),r&&k(t),N(s,r),r&&k(o),N(l,r)}}}function xh(n){let e,t,s=n[0]+"",o,l,i,r;return i=new kt({props:{class:"level-3",$$slots:{default:[Th]},$$scope:{ctx:n}}}),{c(){e=_("div"),t=F("First level. Tab: B, index "),o=F(s),l=x(),R(i.$$.fragment)},m(a,c){y(a,e,c),p(e,t),p(e,o),y(a,l,c),P(i,a,c),r=!0},p(a,c){(!r||c&1)&&s!==(s=a[0]+"")&&Oe(o,s);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),i.$set(u)},i(a){r||(T(i.$$.fragment,a),r=!0)},o(a){S(i.$$.fragment,a),r=!1},d(a){a&&k(e),a&&k(l),N(i,a)}}}function Sh(n){let e,t=n[0]+"",s;return{c(){e=F("First level. Tab: C, index "),s=F(t)},m(o,l){y(o,e,l),y(o,s,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Oe(s,t)},d(o){o&&k(e),o&&k(s)}}}function Eh(n){let e,t=n[0]+"",s;return{c(){e=F("First level. Tab: D, index "),s=F(t)},m(o,l){y(o,e,l),y(o,s,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Oe(s,t)},d(o){o&&k(e),o&&k(s)}}}function Ah(n){let e,t=n[0]+"",s;return{c(){e=F("First level. Tab: E, index "),s=F(t)},m(o,l){y(o,e,l),y(o,s,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Oe(s,t)},d(o){o&&k(e),o&&k(s)}}}function Ch(n){let e,t,s,o,l,i,r,a,c,u,f,d;return e=new yt({props:{$$slots:{default:[sh]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[bh,({index:h})=>({0:h}),({index:h})=>h?1:0]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[xh,({index:h})=>({0:h}),({index:h})=>h?1:0]},$$scope:{ctx:n}}}),r=new we({props:{$$slots:{default:[Sh,({index:h})=>({0:h}),({index:h})=>h?1:0]},$$scope:{ctx:n}}}),c=new we({props:{$$slots:{default:[Eh,({index:h})=>({0:h}),({index:h})=>h?1:0]},$$scope:{ctx:n}}}),f=new we({props:{$$slots:{default:[Ah,({index:h})=>({0:h}),({index:h})=>h?1:0]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment),a=x(),R(c.$$.fragment),u=x(),R(f.$$.fragment)},m(h,g){P(e,h,g),y(h,t,g),P(s,h,g),y(h,o,g),P(l,h,g),y(h,i,g),P(r,h,g),y(h,a,g),P(c,h,g),y(h,u,g),P(f,h,g),d=!0},p(h,g){const b={};g&2&&(b.$$scope={dirty:g,ctx:h}),e.$set(b);const $={};g&3&&($.$$scope={dirty:g,ctx:h}),s.$set($);const w={};g&3&&(w.$$scope={dirty:g,ctx:h}),l.$set(w);const E={};g&3&&(E.$$scope={dirty:g,ctx:h}),r.$set(E);const D={};g&3&&(D.$$scope={dirty:g,ctx:h}),c.$set(D);const C={};g&3&&(C.$$scope={dirty:g,ctx:h}),f.$set(C)},i(h){d||(T(e.$$.fragment,h),T(s.$$.fragment,h),T(l.$$.fragment,h),T(r.$$.fragment,h),T(c.$$.fragment,h),T(f.$$.fragment,h),d=!0)},o(h){S(e.$$.fragment,h),S(s.$$.fragment,h),S(l.$$.fragment,h),S(r.$$.fragment,h),S(c.$$.fragment,h),S(f.$$.fragment,h),d=!1},d(h){N(e,h),h&&k(t),N(s,h),h&&k(o),N(l,h),h&&k(i),N(r,h),h&&k(a),N(c,h),h&&k(u),N(f,h)}}}function Ph(n){let e,t,s,o,l,i,r;return t=new kt({props:{class:"level-1 min-h-[280px]",$$slots:{default:[Ch]},$$scope:{ctx:n}}}),i=new dt({props:{code:`<section class="prose max-w-none my-4">
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
</style>`}}),{c(){e=_("section"),R(t.$$.fragment),s=x(),o=_("h3"),o.textContent="Code",l=x(),R(i.$$.fragment),m(e,"class","prose max-w-none my-4 svelte-3sljvb")},m(a,c){y(a,e,c),P(t,e,null),p(e,s),p(e,o),p(e,l),P(i,e,null),r=!0},p(a,[c]){const u={};c&2&&(u.$$scope={dirty:c,ctx:a}),t.$set(u)},i(a){r||(T(t.$$.fragment,a),T(i.$$.fragment,a),r=!0)},o(a){S(t.$$.fragment,a),S(i.$$.fragment,a),r=!1},d(a){a&&k(e),N(t),N(i)}}}class Nh extends se{constructor(e){super(),ne(this,e,null,Ph,J,{})}}var Us={},Rh={get exports(){return Us},set exports(n){Us=n}};(function(n,e){var t=200,s="Expected a function",o="__lodash_hash_undefined__",l=1,i=2,r=1/0,a=9007199254740991,c="[object Arguments]",u="[object Array]",f="[object Boolean]",d="[object Date]",h="[object Error]",g="[object Function]",b="[object GeneratorFunction]",$="[object Map]",w="[object Number]",E="[object Object]",D="[object Promise]",C="[object RegExp]",M="[object Set]",O="[object String]",L="[object Symbol]",I="[object WeakMap]",j="[object ArrayBuffer]",z="[object DataView]",U="[object Float32Array]",Z="[object Float64Array]",X="[object Int8Array]",ie="[object Int16Array]",V="[object Int32Array]",H="[object Uint8Array]",G="[object Uint8ClampedArray]",ee="[object Uint16Array]",fe="[object Uint32Array]",be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ge=/^\w*$/,Le=/^\./,Ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ve=/[\\^$.*+?()[\]{}|]/g,_e=/\\(\\)?/g,ae=/^\[object .+?Constructor\]$/,Pe=/^(?:0|[1-9]\d*)$/,ce={};ce[U]=ce[Z]=ce[X]=ce[ie]=ce[V]=ce[H]=ce[G]=ce[ee]=ce[fe]=!0,ce[c]=ce[u]=ce[j]=ce[f]=ce[z]=ce[d]=ce[h]=ce[g]=ce[$]=ce[w]=ce[E]=ce[C]=ce[M]=ce[O]=ce[I]=!1;var $e=typeof on=="object"&&on&&on.Object===Object&&on,Q=typeof self=="object"&&self&&self.Object===Object&&self,Ee=$e||Q||Function("return this")(),De=e&&!e.nodeType&&e,Ce=De&&!0&&n&&!n.nodeType&&n,Re=Ce&&Ce.exports===De,Ot=Re&&$e.process,it=function(){try{return Ot&&Ot.binding("util")}catch(v){}}(),de=it&&it.isTypedArray;function Ct(v,A,B,q){for(var pe=-1,oe=v?v.length:0;++pe<oe;){var Ae=v[pe];A(q,Ae,B(Ae),v)}return q}function Me(v,A){for(var B=-1,q=v?v.length:0;++B<q;)if(A(v[B],B,v))return!0;return!1}function xe(v){return function(A){return A==null?void 0:A[v]}}function Ve(v,A){for(var B=-1,q=Array(v);++B<v;)q[B]=A(B);return q}function rt(v){return function(A){return v(A)}}function Pt(v,A){return v==null?void 0:v[A]}function Xe(v){var A=!1;if(v!=null&&typeof v.toString!="function")try{A=!!(v+"")}catch(B){}return A}function K(v){var A=-1,B=Array(v.size);return v.forEach(function(q,pe){B[++A]=[pe,q]}),B}function te(v,A){return function(B){return v(A(B))}}function ue(v){var A=-1,B=Array(v.size);return v.forEach(function(q){B[++A]=q}),B}var W=Array.prototype,Se=Function.prototype,Be=Object.prototype,Ne=Ee["__core-js_shared__"],bt=function(){var v=/[^.]+$/.exec(Ne&&Ne.keys&&Ne.keys.IE_PROTO||"");return v?"Symbol(src)_1."+v:""}(),pn=Se.toString,$t=Be.hasOwnProperty,Ht=Be.toString,An=RegExp("^"+pn.call($t).replace(ve,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Xn=Ee.Symbol,Qn=Ee.Uint8Array,It=Be.propertyIsEnumerable,Cn=W.splice,cs=te(Object.keys,Object),Nt=Ln(Ee,"DataView"),Tt=Ln(Ee,"Map"),Pn=Ln(Ee,"Promise"),Nn=Ln(Ee,"Set"),jt=Ln(Ee,"WeakMap"),Jt=Ln(Object,"create"),Rn=mn(Nt),us=mn(Tt),fs=mn(Pn),Lt=mn(Nn),Mn=mn(jt),Ut=Xn?Xn.prototype:void 0,On=Ut?Ut.valueOf:void 0,Yn=Ut?Ut.toString:void 0;function ut(v){var A=-1,B=v?v.length:0;for(this.clear();++A<B;){var q=v[A];this.set(q[0],q[1])}}function Vt(){this.__data__=Jt?Jt(null):{}}function ds(v){return this.has(v)&&delete this.__data__[v]}function ps(v){var A=this.__data__;if(Jt){var B=A[v];return B===o?void 0:B}return $t.call(A,v)?A[v]:void 0}function hn(v){var A=this.__data__;return Jt?A[v]!==void 0:$t.call(A,v)}function hs(v,A){var B=this.__data__;return B[v]=Jt&&A===void 0?o:A,this}ut.prototype.clear=Vt,ut.prototype.delete=ds,ut.prototype.get=ps,ut.prototype.has=hn,ut.prototype.set=hs;function pt(v){var A=-1,B=v?v.length:0;for(this.clear();++A<B;){var q=v[A];this.set(q[0],q[1])}}function ms(){this.__data__=[]}function en(v){var A=this.__data__,B=_s(A,v);if(B<0)return!1;var q=A.length-1;return B==q?A.pop():Cn.call(A,B,1),!0}function In(v){var A=this.__data__,B=_s(A,v);return B<0?void 0:A[B][1]}function _a(v){return _s(this.__data__,v)>-1}function ba(v,A){var B=this.__data__,q=_s(B,v);return q<0?B.push([v,A]):B[q][1]=A,this}pt.prototype.clear=ms,pt.prototype.delete=en,pt.prototype.get=In,pt.prototype.has=_a,pt.prototype.set=ba;function Kt(v){var A=-1,B=v?v.length:0;for(this.clear();++A<B;){var q=v[A];this.set(q[0],q[1])}}function $a(){this.__data__={hash:new ut,map:new(Tt||pt),string:new ut}}function va(v){return bs(this,v).delete(v)}function wa(v){return bs(this,v).get(v)}function ka(v){return bs(this,v).has(v)}function ya(v,A){return bs(this,v).set(v,A),this}Kt.prototype.clear=$a,Kt.prototype.delete=va,Kt.prototype.get=wa,Kt.prototype.has=ka,Kt.prototype.set=ya;function gs(v){var A=-1,B=v?v.length:0;for(this.__data__=new Kt;++A<B;)this.add(v[A])}function Ta(v){return this.__data__.set(v,o),this}function xa(v){return this.__data__.has(v)}gs.prototype.add=gs.prototype.push=Ta,gs.prototype.has=xa;function qt(v){this.__data__=new pt(v)}function Sa(){this.__data__=new pt}function Ea(v){return this.__data__.delete(v)}function Aa(v){return this.__data__.get(v)}function Ca(v){return this.__data__.has(v)}function Pa(v,A){var B=this.__data__;if(B instanceof pt){var q=B.__data__;if(!Tt||q.length<t-1)return q.push([v,A]),this;B=this.__data__=new Kt(q)}return B.set(v,A),this}qt.prototype.clear=Sa,qt.prototype.delete=Ea,qt.prototype.get=Aa,qt.prototype.has=Ca,qt.prototype.set=Pa;function Na(v,A){var B=nn(v)||tl(v)?Ve(v.length,String):[],q=B.length,pe=!!q;for(var oe in v)(A||$t.call(v,oe))&&!(pe&&(oe=="length"||Yo(oe,q)))&&B.push(oe);return B}function _s(v,A){for(var B=v.length;B--;)if(el(v[B][0],A))return B;return-1}function Ra(v,A,B,q){return Ma(v,function(pe,oe,Ae){A(q,pe,B(pe),Ae)}),q}var Ma=Xa(Ia),Oa=Qa();function Ia(v,A){return v&&Oa(v,A,ys)}function Zo(v,A){A=$s(A,v)?[A]:Xo(A);for(var B=0,q=A.length;v!=null&&B<q;)v=v[vs(A[B++])];return B&&B==q?v:void 0}function La(v){return Ht.call(v)}function Da(v,A){return v!=null&&A in Object(v)}function oo(v,A,B,q,pe){return v===A?!0:v==null||A==null||!ws(v)&&!ks(A)?v!==v&&A!==A:Ba(v,A,oo,B,q,pe)}function Ba(v,A,B,q,pe,oe){var Ae=nn(v),qe=nn(A),Ze=u,nt=u;Ae||(Ze=tn(v),Ze=Ze==c?E:Ze),qe||(nt=tn(A),nt=nt==c?E:nt);var ft=Ze==E&&!Xe(v),ht=nt==E&&!Xe(A),st=Ze==nt;if(st&&!ft)return oe||(oe=new qt),Ae||rc(v)?Qo(v,A,B,q,pe,oe):Ya(v,A,Ze,B,q,pe,oe);if(!(pe&i)){var xt=ft&&$t.call(v,"__wrapped__"),St=ht&&$t.call(A,"__wrapped__");if(xt||St){var sn=xt?v.value():v,Wt=St?A.value():A;return oe||(oe=new qt),B(sn,Wt,q,pe,oe)}}return st?(oe||(oe=new qt),Ja(v,A,B,q,pe,oe)):!1}function Fa(v,A,B,q){var pe=B.length,oe=pe,Ae=!q;if(v==null)return!oe;for(v=Object(v);pe--;){var qe=B[pe];if(Ae&&qe[2]?qe[1]!==v[qe[0]]:!(qe[0]in v))return!1}for(;++pe<oe;){qe=B[pe];var Ze=qe[0],nt=v[Ze],ft=qe[1];if(Ae&&qe[2]){if(nt===void 0&&!(Ze in v))return!1}else{var ht=new qt;if(q)var st=q(nt,ft,Ze,v,A,ht);if(!(st===void 0?oo(ft,nt,q,l|i,ht):st))return!1}}return!0}function za(v){if(!ws(v)||nc(v))return!1;var A=nl(v)||Xe(v)?An:ae;return A.test(mn(v))}function Ha(v){return ks(v)&&ro(v.length)&&!!ce[Ht.call(v)]}function ja(v){return typeof v=="function"?v:v==null?fc:typeof v=="object"?nn(v)?qa(v[0],v[1]):Ka(v):dc(v)}function Ua(v){if(!sc(v))return cs(v);var A=[];for(var B in Object(v))$t.call(v,B)&&B!="constructor"&&A.push(B);return A}function Ka(v){var A=Va(v);return A.length==1&&A[0][2]?Vo(A[0][0],A[0][1]):function(B){return B===v||Fa(B,v,A)}}function qa(v,A){return $s(v)&&Jo(A)?Vo(vs(v),A):function(B){var q=cc(B,v);return q===void 0&&q===A?uc(B,v):oo(A,q,void 0,l|i)}}function Wa(v){return function(A){return Zo(A,v)}}function Ga(v){if(typeof v=="string")return v;if(ao(v))return Yn?Yn.call(v):"";var A=v+"";return A=="0"&&1/v==-r?"-0":A}function Xo(v){return nn(v)?v:oc(v)}function Za(v,A){return function(B,q){var pe=nn(B)?Ct:Ra,oe=A?A():{};return pe(B,v,ja(q),oe)}}function Xa(v,A){return function(B,q){if(B==null)return B;if(!io(B))return v(B,q);for(var pe=B.length,oe=A?pe:-1,Ae=Object(B);(A?oe--:++oe<pe)&&q(Ae[oe],oe,Ae)!==!1;);return B}}function Qa(v){return function(A,B,q){for(var pe=-1,oe=Object(A),Ae=q(A),qe=Ae.length;qe--;){var Ze=Ae[v?qe:++pe];if(B(oe[Ze],Ze,oe)===!1)break}return A}}function Qo(v,A,B,q,pe,oe){var Ae=pe&i,qe=v.length,Ze=A.length;if(qe!=Ze&&!(Ae&&Ze>qe))return!1;var nt=oe.get(v);if(nt&&oe.get(A))return nt==A;var ft=-1,ht=!0,st=pe&l?new gs:void 0;for(oe.set(v,A),oe.set(A,v);++ft<qe;){var xt=v[ft],St=A[ft];if(q)var sn=Ae?q(St,xt,ft,A,v,oe):q(xt,St,ft,v,A,oe);if(sn!==void 0){if(sn)continue;ht=!1;break}if(st){if(!Me(A,function(Wt,gn){if(!st.has(gn)&&(xt===Wt||B(xt,Wt,q,pe,oe)))return st.add(gn)})){ht=!1;break}}else if(!(xt===St||B(xt,St,q,pe,oe))){ht=!1;break}}return oe.delete(v),oe.delete(A),ht}function Ya(v,A,B,q,pe,oe,Ae){switch(B){case z:if(v.byteLength!=A.byteLength||v.byteOffset!=A.byteOffset)return!1;v=v.buffer,A=A.buffer;case j:return!(v.byteLength!=A.byteLength||!q(new Qn(v),new Qn(A)));case f:case d:case w:return el(+v,+A);case h:return v.name==A.name&&v.message==A.message;case C:case O:return v==A+"";case $:var qe=K;case M:var Ze=oe&i;if(qe||(qe=ue),v.size!=A.size&&!Ze)return!1;var nt=Ae.get(v);if(nt)return nt==A;oe|=l,Ae.set(v,A);var ft=Qo(qe(v),qe(A),q,pe,oe,Ae);return Ae.delete(v),ft;case L:if(On)return On.call(v)==On.call(A)}return!1}function Ja(v,A,B,q,pe,oe){var Ae=pe&i,qe=ys(v),Ze=qe.length,nt=ys(A),ft=nt.length;if(Ze!=ft&&!Ae)return!1;for(var ht=Ze;ht--;){var st=qe[ht];if(!(Ae?st in A:$t.call(A,st)))return!1}var xt=oe.get(v);if(xt&&oe.get(A))return xt==A;var St=!0;oe.set(v,A),oe.set(A,v);for(var sn=Ae;++ht<Ze;){st=qe[ht];var Wt=v[st],gn=A[st];if(q)var sl=Ae?q(gn,Wt,st,A,v,oe):q(Wt,gn,st,v,A,oe);if(!(sl===void 0?Wt===gn||B(Wt,gn,q,pe,oe):sl)){St=!1;break}sn||(sn=st=="constructor")}if(St&&!sn){var Ts=v.constructor,xs=A.constructor;Ts!=xs&&"constructor"in v&&"constructor"in A&&!(typeof Ts=="function"&&Ts instanceof Ts&&typeof xs=="function"&&xs instanceof xs)&&(St=!1)}return oe.delete(v),oe.delete(A),St}function bs(v,A){var B=v.__data__;return tc(A)?B[typeof A=="string"?"string":"hash"]:B.map}function Va(v){for(var A=ys(v),B=A.length;B--;){var q=A[B],pe=v[q];A[B]=[q,pe,Jo(pe)]}return A}function Ln(v,A){var B=Pt(v,A);return za(B)?B:void 0}var tn=La;(Nt&&tn(new Nt(new ArrayBuffer(1)))!=z||Tt&&tn(new Tt)!=$||Pn&&tn(Pn.resolve())!=D||Nn&&tn(new Nn)!=M||jt&&tn(new jt)!=I)&&(tn=function(v){var A=Ht.call(v),B=A==E?v.constructor:void 0,q=B?mn(B):void 0;if(q)switch(q){case Rn:return z;case us:return $;case fs:return D;case Lt:return M;case Mn:return I}return A});function ec(v,A,B){A=$s(A,v)?[A]:Xo(A);for(var q,pe=-1,Ae=A.length;++pe<Ae;){var oe=vs(A[pe]);if(!(q=v!=null&&B(v,oe)))break;v=v[oe]}if(q)return q;var Ae=v?v.length:0;return!!Ae&&ro(Ae)&&Yo(oe,Ae)&&(nn(v)||tl(v))}function Yo(v,A){return A=A==null?a:A,!!A&&(typeof v=="number"||Pe.test(v))&&v>-1&&v%1==0&&v<A}function $s(v,A){if(nn(v))return!1;var B=typeof v;return B=="number"||B=="symbol"||B=="boolean"||v==null||ao(v)?!0:ge.test(v)||!be.test(v)||A!=null&&v in Object(A)}function tc(v){var A=typeof v;return A=="string"||A=="number"||A=="symbol"||A=="boolean"?v!=="__proto__":v===null}function nc(v){return!!bt&&bt in v}function sc(v){var A=v&&v.constructor,B=typeof A=="function"&&A.prototype||Be;return v===B}function Jo(v){return v===v&&!ws(v)}function Vo(v,A){return function(B){return B==null?!1:B[v]===A&&(A!==void 0||v in Object(B))}}var oc=lo(function(v){v=ac(v);var A=[];return Le.test(v)&&A.push(""),v.replace(Ge,function(B,q,pe,oe){A.push(pe?oe.replace(_e,"$1"):q||B)}),A});function vs(v){if(typeof v=="string"||ao(v))return v;var A=v+"";return A=="0"&&1/v==-r?"-0":A}function mn(v){if(v!=null){try{return pn.call(v)}catch(A){}try{return v+""}catch(A){}}return""}var lc=Za(function(v,A,B){$t.call(v,B)?v[B].push(A):v[B]=[A]});function lo(v,A){if(typeof v!="function"||A&&typeof A!="function")throw new TypeError(s);var B=function(){var q=arguments,pe=A?A.apply(this,q):q[0],oe=B.cache;if(oe.has(pe))return oe.get(pe);var Ae=v.apply(this,q);return B.cache=oe.set(pe,Ae),Ae};return B.cache=new(lo.Cache||Kt),B}lo.Cache=Kt;function el(v,A){return v===A||v!==v&&A!==A}function tl(v){return ic(v)&&$t.call(v,"callee")&&(!It.call(v,"callee")||Ht.call(v)==c)}var nn=Array.isArray;function io(v){return v!=null&&ro(v.length)&&!nl(v)}function ic(v){return ks(v)&&io(v)}function nl(v){var A=ws(v)?Ht.call(v):"";return A==g||A==b}function ro(v){return typeof v=="number"&&v>-1&&v%1==0&&v<=a}function ws(v){var A=typeof v;return!!v&&(A=="object"||A=="function")}function ks(v){return!!v&&typeof v=="object"}function ao(v){return typeof v=="symbol"||ks(v)&&Ht.call(v)==L}var rc=de?rt(de):Ha;function ac(v){return v==null?"":Ga(v)}function cc(v,A,B){var q=v==null?void 0:Zo(v,A);return q===void 0?B:q}function uc(v,A){return v!=null&&ec(v,A,Da)}function ys(v){return io(v)?Na(v):Ua(v)}function fc(v){return v}function dc(v){return $s(v)?xe(vs(v)):Wa(v)}n.exports=lc})(Rh,Us);const Zr=Us;function Xl(n,e,t){const s=n.slice();return s[13]=e[t],s}function Ql(n,e,t){const s=n.slice();return s[17]=e[t],s}function Yl(n,e,t){const s=n.slice();return s[21]=e[t],s[23]=t,s}function Jl(n,e,t){const s=n.slice();return s[21]=e[t],s}function Mh(n){let e,t,s={ctx:n,current:null,token:null,hasCatch:!0,pending:Dh,then:Lh,catch:Ih,value:24,error:20};return Fs(t=n[1],s),{c(){e=Ie(),s.block.c()},m(o,l){y(o,e,l),s.block.m(o,s.anchor=l),s.mount=()=>e.parentNode,s.anchor=e},p(o,l){n=o,s.ctx=n,l&2&&t!==(t=n[1])&&Fs(t,s)||hr(s,n,l)},d(o){o&&k(e),s.block.d(o),s.token=null,s=null}}}function Oh(n){let e,t,s;return{c(){e=_("button"),e.textContent="Request authors",m(e,"class","input")},m(o,l){y(o,e,l),t||(s=Y(e,"click",n[8]),t=!0)},p:re,d(o){o&&k(e),t=!1,s()}}}function Ih(n){let e,t,s,o=(n[20]instanceof Error?n[20].message:n[20])+"",l;return{c(){e=_("div"),t=F("Loading authors error: "),s=_("strong"),l=F(o),m(s,"class","text-red-600"),m(e,"class","text-red-400")},m(i,r){y(i,e,r),p(e,t),p(e,s),p(s,l)},p(i,r){r&2&&o!==(o=(i[20]instanceof Error?i[20].message:i[20])+"")&&Oe(l,o)},d(i){i&&k(e)}}}function Lh(n){let e,t,s,o,l,i,r,a,c,u,f=n[24],d=[];for(let h=0;h<f.length;h+=1)d[h]=Vl(Jl(n,f,h));return{c(){e=_("div"),t=_("select"),s=_("option"),o=F("Select author");for(let h=0;h<d.length;h+=1)d[h].c();l=x(),i=_("button"),r=F("Get quotes"),s.__value=void 0,s.value=s.__value,s.hidden=!0,m(t,"class","input"),n[2]===void 0&&wt(()=>n[9].call(t)),m(i,"class","input"),i.disabled=a=n[2]==null},m(h,g){y(h,e,g),p(e,t),p(t,s),p(s,o);for(let b=0;b<d.length;b+=1)d[b].m(t,null);Dt(t,n[2]),p(e,l),p(e,i),p(i,r),c||(u=[Y(t,"change",n[9]),Y(i,"click",n[10])],c=!0)},p(h,g){if(g&10){f=h[24];let b;for(b=0;b<f.length;b+=1){const $=Jl(h,f,b);d[b]?d[b].p($,g):(d[b]=Vl($),d[b].c(),d[b].m(t,null))}for(;b<d.length;b+=1)d[b].d(1);d.length=f.length}g&6&&Dt(t,h[2]),g&6&&a!==(a=h[2]==null)&&(i.disabled=a)},d(h){h&&k(e),Je(d,h),c=!1,Ue(u)}}}function Vl(n){let e,t=n[21].name+"",s,o,l=n[21].quoteCount+"",i,r,a;return{c(){e=_("option"),s=F(t),o=F(": "),i=F(l),e.__value=r=n[21],e.value=e.__value,e.disabled=a=n[3].includes(n[21])},m(c,u){y(c,e,u),p(e,s),p(e,o),p(e,i)},p(c,u){u&2&&t!==(t=c[21].name+"")&&Oe(s,t),u&2&&l!==(l=c[21].quoteCount+"")&&Oe(i,l),u&2&&r!==(r=c[21])&&(e.__value=r,e.value=e.__value),u&10&&a!==(a=c[3].includes(c[21]))&&(e.disabled=a)},d(c){c&&k(e)}}}function Dh(n){let e,t,s;return{c(){e=_("div"),t=x(),s=_("div"),s.textContent="Loading authors...",m(e,"class","text-blue-800 "+n[5]),m(s,"class","text-blue-800")},m(o,l){y(o,e,l),y(o,t,l),y(o,s,l)},p:re,d(o){o&&k(e),o&&k(t),o&&k(s)}}}function ei(n){let e,t,s={class:"my-4 py-4 border-y border-gray-300",$$slots:{default:[Kh]},$$scope:{ctx:n}};return e=new kt({props:s}),n[12](e),{c(){R(e.$$.fragment)},m(o,l){P(e,o,l),t=!0},p(o,l){const i={};l&134217752&&(i.$$scope={dirty:l,ctx:o}),e.$set(i)},i(o){t||(T(e.$$.fragment,o),t=!0)},o(o){S(e.$$.fragment,o),t=!1},d(o){n[12](null),N(e,o)}}}function Bh(n){let e,t,s,o=n[21].name+"",l,i,r,a,c=n[21].quoteCount+"",u,f,d,h;function g(){return n[11](n[23])}return{c(){e=_("button"),e.textContent="×",t=x(),s=_("span"),l=F(o),r=x(),a=_("span"),u=F(c),f=x(),m(e,"class","text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"),m(s,"class","grow text-left overflow-hidden text-ellipsis whitespace-nowrap"),m(s,"title",i=n[21].name),m(a,"class","text-xs px-1 rounded-md bg-gray-600 text-white font-bold")},m(b,$){y(b,e,$),y(b,t,$),y(b,s,$),p(s,l),y(b,r,$),y(b,a,$),p(a,u),y(b,f,$),d||(h=Y(e,"click",g),d=!0)},p(b,$){n=b,$&8&&o!==(o=n[21].name+"")&&Oe(l,o),$&8&&i!==(i=n[21].name)&&m(s,"title",i),$&8&&c!==(c=n[21].quoteCount+"")&&Oe(u,c)},d(b){b&&k(e),b&&k(t),b&&k(s),b&&k(r),b&&k(a),b&&k(f),d=!1,h()}}}function ti(n){let e,t;return e=new ke({props:{class:"flex items-center gap-2",$$slots:{default:[Bh]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&134217736&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Fh(n){let e,t,s=n[3],o=[];for(let i=0;i<s.length;i+=1)o[i]=ti(Yl(n,s,i));const l=i=>S(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Ie()},m(i,r){for(let a=0;a<o.length;a+=1)o[a].m(i,r);y(i,e,r),t=!0},p(i,r){if(r&136){s=i[3];let a;for(a=0;a<s.length;a+=1){const c=Yl(i,s,a);o[a]?(o[a].p(c,r),T(o[a],1)):(o[a]=ti(c),o[a].c(),T(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=s.length;a<o.length;a+=1)l(a);Te()}},i(i){if(!t){for(let r=0;r<s.length;r+=1)T(o[r]);t=!0}},o(i){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)S(o[r]);t=!1},d(i){Je(o,i),i&&k(e)}}}function zh(n){let e,t,s,o,l,i,r=(n[20]instanceof Error?n[20].message:n[20])+"",a;return{c(){e=_("div"),t=_("div"),s=_("div"),s.textContent="Loading quotes error",o=x(),l=_("div"),i=_("strong"),a=F(r),m(s,"class","text-red-400"),m(i,"class","text-red-600"),m(t,"class","flex flex-col items-center"),m(e,"class","h-full flex items-center justify-center")},m(c,u){y(c,e,u),p(e,t),p(t,s),p(t,o),p(t,l),p(l,i),p(i,a)},p(c,u){u&16&&r!==(r=(c[20]instanceof Error?c[20].message:c[20])+"")&&Oe(a,r)},d(c){c&&k(e)}}}function Hh(n){let e,t=n[16],s=[];for(let o=0;o<t.length;o+=1)s[o]=ni(Ql(n,t,o));return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=Ie()},m(o,l){for(let i=0;i<s.length;i+=1)s[i].m(o,l);y(o,e,l)},p(o,l){if(l&16){t=o[16];let i;for(i=0;i<t.length;i+=1){const r=Ql(o,t,i);s[i]?s[i].p(r,l):(s[i]=ni(r),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=t.length}},d(o){Je(s,o),o&&k(e)}}}function ni(n){let e,t,s,o,l,i=n[17].en+"",r,a,c,u=n[17].author+"",f,d;return{c(){e=_("div"),t=_("span"),t.textContent="“",s=x(),o=_("div"),l=_("div"),r=F(i),a=x(),c=_("div"),f=F(u),d=x(),m(t,"class","text-gray-200 text-7xl font-bold leading-[75%] mr-2"),m(l,"class","mb-3 leading-6"),m(c,"class","font-semibold italic text-right"),m(o,"class","grow"),m(e,"class","mb-2 last:mb-0 flex items-start")},m(h,g){y(h,e,g),p(e,t),p(e,s),p(e,o),p(o,l),p(l,r),p(o,a),p(o,c),p(c,f),p(e,d)},p(h,g){g&16&&i!==(i=h[17].en+"")&&Oe(r,i),g&16&&u!==(u=h[17].author+"")&&Oe(f,u)},d(h){h&&k(e)}}}function jh(n){let e,t,s,o,l;return{c(){e=_("div"),t=_("div"),s=_("div"),o=x(),l=_("div"),l.textContent="Loading quotes...",m(s,"class","text-blue-800 w-12 h-12 "+n[5]),m(l,"class","text-blue-800"),m(t,"class","flex flex-col items-center"),m(e,"class","h-full flex items-center justify-center")},m(i,r){y(i,e,r),p(e,t),p(t,s),p(t,o),p(t,l)},p:re,d(i){i&&k(e)}}}function Uh(n){let e,t,s={ctx:n,current:null,token:null,hasCatch:!0,pending:jh,then:Hh,catch:zh,value:16,error:20};return Fs(e=n[13],s),{c(){s.block.c(),t=x()},m(o,l){s.block.m(o,s.anchor=l),s.mount=()=>t.parentNode,s.anchor=t,y(o,t,l)},p(o,l){n=o,s.ctx=n,l&16&&e!==(e=n[13])&&Fs(e,s)||hr(s,n,l)},d(o){s.block.d(o),s.token=null,s=null,o&&k(t)}}}function si(n){let e,t;return e=new we({props:{class:"px-4",$$slots:{default:[Uh]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&134217744&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Kh(n){let e,t,s,o;e=new yt({props:{class:"basis-[24ch] shrink-0",$$slots:{default:[Fh]},$$scope:{ctx:n}}});let l=n[4],i=[];for(let a=0;a<l.length;a+=1)i[a]=si(Xl(n,l,a));const r=a=>S(i[a],1,1,()=>{i[a]=null});return{c(){R(e.$$.fragment),t=x(),s=_("div");for(let a=0;a<i.length;a+=1)i[a].c();m(s,"class","grow")},m(a,c){P(e,a,c),y(a,t,c),y(a,s,c);for(let u=0;u<i.length;u+=1)i[u].m(s,null);o=!0},p(a,c){const u={};if(c&134217736&&(u.$$scope={dirty:c,ctx:a}),e.$set(u),c&48){l=a[4];let f;for(f=0;f<l.length;f+=1){const d=Xl(a,l,f);i[f]?(i[f].p(d,c),T(i[f],1)):(i[f]=si(d),i[f].c(),T(i[f],1),i[f].m(s,null))}for(ye(),f=l.length;f<i.length;f+=1)r(f);Te()}},i(a){if(!o){T(e.$$.fragment,a);for(let c=0;c<l.length;c+=1)T(i[c]);o=!0}},o(a){S(e.$$.fragment,a),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)S(i[c]);o=!1},d(a){N(e,a),a&&k(t),a&&k(s),Je(i,a)}}}function qh(n){let e,t,s,o,l,i,r,a,c,u;function f(b,$){return b[1]==null?Oh:Mh}let d=f(n),h=d(n),g=n[3].length&&ei(n);return c=new dt({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML=`Example of vertical tab layout. <small class="line-through">Thanks to the authors of <a target="_blank" href="https://github.com/skolakoda" rel="noreferrer">Škola koda</a>
      for the useful and convenient
      <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">API</a></small>. Now the API doesn&#39;t work. JSON from the project
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">Škola koda</a> is used`,s=x(),o=_("div"),h.c(),l=x(),g&&g.c(),i=x(),r=_("h3"),r.textContent="Code",a=x(),R(c.$$.fragment),m(t,"class","mb-4 text-center leading-5"),m(o,"class","flex items-center justify-center gap-2"),m(e,"class","prose max-w-none my-4 svelte-unmfi5")},m(b,$){y(b,e,$),p(e,t),p(e,s),p(e,o),h.m(o,null),p(e,l),g&&g.m(e,null),p(e,i),p(e,r),p(e,a),P(c,e,null),u=!0},p(b,[$]){d===(d=f(b))&&h?h.p(b,$):(h.d(1),h=d(b),h&&(h.c(),h.m(o,null))),b[3].length?g?(g.p(b,$),$&8&&T(g,1)):(g=ei(b),g.c(),T(g,1),g.m(e,i)):g&&(ye(),S(g,1,1,()=>{g=null}),Te())},i(b){u||(T(g),T(c.$$.fragment,b),u=!0)},o(b){S(g),S(c.$$.fragment,b),u=!1},d(b){b&&k(e),h.d(),g&&g.d(),N(c)}}}const Wh="/svelte-components/skolacoda-quotes.json";function Xr(){return vt(this,null,function*(){const n=yield fetch(Wh);if(n.status>=400){const e=yield n.text();throw new Error(`${n.status}: ${e||n.statusText}`)}return n.json()})}function Gh(){return vt(this,null,function*(){return Object.entries(Zr(yield Xr(),"author")).reduce((e,[t,s])=>(e.push({name:t,quoteCount:s.length}),e),[]).sort((e,t)=>e.name.localeCompare(t.name))})}function Zh(n){return vt(this,null,function*(){var e;return(e=Zr(yield Xr(),"author")[n])!=null?e:[]})}function Xh(n,e,t){const s="w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin";let o,l,i,r=[],a=[];function c($){return $!=null&&!r.includes($)?(t(3,r=[$,...r]),t(4,a=[Zh($.name),...a]),o==null||o.selectTab(0),!0):!1}function u($){$>=0&&$<r.length&&(t(3,r=[...r.slice(0,$),...r.slice($+1)]),t(4,a=[...a.slice(0,$),...a.slice($+1)]))}const f=()=>{t(1,l=Gh())};function d(){i=es(this),t(2,i),t(1,l)}const h=()=>c(i)?t(2,i=void 0):void 0,g=$=>u($);function b($){Qe[$?"unshift":"push"](()=>{o=$,t(0,o)})}return[o,l,i,r,a,s,c,u,f,d,h,g,b]}class Qh extends se{constructor(e){super(),ne(this,e,Xh,qh,J,{})}}const{document:oi}=fn;function Yh(n){let e;return{c(){e=F("API")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function Jh(n){let e;return{c(){e=F("Base example")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function Vh(n){let e;return{c(){e=F("Nested Example")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function em(n){let e;return{c(){e=F("Quotes Example")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function tm(n){let e,t,s,o,l,i,r,a;return e=new ke({props:{$$slots:{default:[Yh]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[Jh]},$$scope:{ctx:n}}}),l=new ke({props:{$$slots:{default:[Vh]},$$scope:{ctx:n}}}),r=new ke({props:{$$slots:{default:[em]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment)},m(c,u){P(e,c,u),y(c,t,u),P(s,c,u),y(c,o,u),P(l,c,u),y(c,i,u),P(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),l.$set(h);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),r.$set(g)},i(c){a||(T(e.$$.fragment,c),T(s.$$.fragment,c),T(l.$$.fragment,c),T(r.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(s.$$.fragment,c),S(l.$$.fragment,c),S(r.$$.fragment,c),a=!1},d(c){N(e,c),c&&k(t),N(s,c),c&&k(o),N(l,c),c&&k(i),N(r,c)}}}function nm(n){let e,t;return e=new Td({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function sm(n){let e,t;return e=new Yp({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function om(n){let e,t;return e=new Nh({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function lm(n){let e,t;return e=new Qh({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function im(n){let e,t,s,o,l,i,r,a,c,u;return e=new yt({props:{$$slots:{default:[tm]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[nm]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[sm]},$$scope:{ctx:n}}}),r=new we({props:{$$slots:{default:[om]},$$scope:{ctx:n}}}),c=new we({props:{$$slots:{default:[lm]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment),a=x(),R(c.$$.fragment)},m(f,d){P(e,f,d),y(f,t,d),P(s,f,d),y(f,o,d),P(l,f,d),y(f,i,d),P(r,f,d),y(f,a,d),P(c,f,d),u=!0},p(f,d){const h={};d&1&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),s.$set(g);const b={};d&1&&(b.$$scope={dirty:d,ctx:f}),l.$set(b);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),r.$set($);const w={};d&1&&(w.$$scope={dirty:d,ctx:f}),c.$set(w)},i(f){u||(T(e.$$.fragment,f),T(s.$$.fragment,f),T(l.$$.fragment,f),T(r.$$.fragment,f),T(c.$$.fragment,f),u=!0)},o(f){S(e.$$.fragment,f),S(s.$$.fragment,f),S(l.$$.fragment,f),S(r.$$.fragment,f),S(c.$$.fragment,f),u=!1},d(f){N(e,f),f&&k(t),N(s,f),f&&k(o),N(l,f),f&&k(i),N(r,f),f&&k(a),N(c,f)}}}function rm(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b;return oi.title=e=document.title.replace(/(•).*$/,"$1 Tabs"),g=new kt({props:{$$slots:{default:[im]},$$scope:{ctx:n}}}),{c(){t=x(),s=_("section"),o=_("a"),o.textContent="Home",l=x(),i=_("h1"),i.textContent="A set of components for organizing a tabbed interface",r=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>with context to control tab switching</li>`,h=x(),R(g.$$.fragment),m(o,"class","float-right"),m(o,"href","/"),m(i,"class","text-2xl"),m(c,"class","max-w-[4em]"),at(c.src,u=mt)||m(c,"src",u),m(c,"alt","NPM logo"),m(a,"class","float-right"),m(a,"href","https://www.npmjs.com/package/@apsc/tabs"),m(a,"target","_blank"),m(a,"rel","noreferrer"),m(d,"class","leading-6 mb-8"),m(s,"class","prose max-w-none my-4")},m($,w){y($,t,w),y($,s,w),p(s,o),p(s,l),p(s,i),p(s,r),p(s,a),p(a,c),p(s,f),p(s,d),p(s,h),P(g,s,null),b=!0},p($,[w]){(!b||w&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Tabs"))&&(oi.title=e);const E={};w&1&&(E.$$scope={dirty:w,ctx:$}),g.$set(E)},i($){b||(T(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&k(t),$&&k(s),N(g)}}}let am=class extends se{constructor(e){super(),ne(this,e,null,rm,J,{})}};const cm=`<div class="component__source">Source <code>Notifications.svelte</code></div>
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
<td class="exports__description">Store of notifications</td></tr></table>`;function um(n){let e,t,s;return t=new Sn({props:{source:cm}}),{c(){e=_("section"),R(t.$$.fragment),m(e,"class","documentation")},m(o,l){y(o,e,l),P(t,e,null),s=!0},p:re,i(o){s||(T(t.$$.fragment,o),s=!0)},o(o){S(t.$$.fragment,o),s=!1},d(o){o&&k(e),N(t)}}}class fm extends se{constructor(e){super(),ne(this,e,null,um,J,{})}}const dm=`.c-notifications {
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
`,pm=`.c-notifications {
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
`;function hm(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}function Qr(n){const e=n-1;return e*e*e+1}function mm(n,{delay:e=0,duration:t=400,easing:s=hm,amount:o=5,opacity:l=0}={}){const i=getComputedStyle(n),r=+i.opacity,a=i.filter==="none"?"":i.filter,c=r*(1-l);return{delay:e,duration:t,easing:s,css:(u,f)=>`opacity: ${r-c*f}; filter: ${a} blur(${f*o}px);`}}function gm(n,{delay:e=0,duration:t=400,easing:s=tr}={}){const o=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:l=>`opacity: ${l*o}`}}function Kn(n,{delay:e=0,duration:t=400,easing:s=Qr}={}){const o=getComputedStyle(n),l=+o.opacity,i=parseFloat(o.height),r=parseFloat(o.paddingTop),a=parseFloat(o.paddingBottom),c=parseFloat(o.marginTop),u=parseFloat(o.marginBottom),f=parseFloat(o.borderTopWidth),d=parseFloat(o.borderBottomWidth);return{delay:e,duration:t,easing:s,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*l};height: ${h*i}px;padding-top: ${h*r}px;padding-bottom: ${h*a}px;margin-top: ${h*c}px;margin-bottom: ${h*u}px;border-top-width: ${h*f}px;border-bottom-width: ${h*d}px;`}}function _m(n,{delay:e=0,duration:t=400,easing:s=Qr,start:o=0,opacity:l=0}={}){const i=getComputedStyle(n),r=+i.opacity,a=i.transform==="none"?"":i.transform,c=1-o,u=r*(1-l);return{delay:e,duration:t,easing:s,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${r-u*d}
		`}}function li(n,e,t){const s=n.slice();return s[8]=e[t],s}const bm=n=>({notification:n&16}),ii=n=>({notification:n[8]});function $m(n){let e,t,s=(n[8].message||"No message")+"",o,l,i,r,a,c,u,f;function d(){return n[7](n[8])}return{c(){e=_("div"),t=_("span"),o=x(),l=_("span"),i=x(),m(t,"class","c-notifications__item__message"),m(l,"role","button"),m(l,"aria-label","Close notification"),m(l,"class","c-notifications__item__close"),m(e,"class",r="c-notifications__item"+(n[8].type?" "+n[8].type:""))},m(h,g){y(h,e,g),p(e,t),t.innerHTML=s,p(e,o),p(e,l),p(e,i),c=!0,u||(f=Y(l,"click",d),u=!0)},p(h,g){n=h,(!c||g&16)&&s!==(s=(n[8].message||"No message")+"")&&(t.innerHTML=s),(!c||g&16&&r!==(r="c-notifications__item"+(n[8].type?" "+n[8].type:"")))&&m(e,"class",r)},i(h){c||(wt(()=>{a||(a=rn(e,n[2],n[3],!0)),a.run(1)}),c=!0)},o(h){a||(a=rn(e,n[2],n[3],!1)),a.run(0),c=!1},d(h){h&&k(e),h&&a&&a.end(),u=!1,f()}}}function ri(n,e){let t,s;const o=e[6].default,l=Fe(o,e,e[5],ii),i=l||$m(e);return{key:n,first:null,c(){t=Ie(),i&&i.c(),this.first=t},m(r,a){y(r,t,a),i&&i.m(r,a),s=!0},p(r,a){e=r,l?l.p&&(!s||a&48)&&He(l,o,e,e[5],s?ze(o,e[5],a,bm):je(e[5]),ii):i&&i.p&&(!s||a&24)&&i.p(e,s?a:-1)},i(r){s||(T(i,r),s=!0)},o(r){S(i,r),s=!1},d(r){r&&k(t),i&&i.d(r)}}}function vm(n){let e,t=[],s=new Map,o,l,i,r=n[4];const a=c=>c[8].id;for(let c=0;c<r.length;c+=1){let u=li(n,r,c),f=a(u);s.set(f,t[c]=ri(f,u))}return{c(){e=_("div");for(let c=0;c<t.length;c+=1)t[c].c();m(e,"class",o="c-notifications"+(n[0]?" "+n[0]:"")),m(e,"style",l=n[1]||void 0)},m(c,u){y(c,e,u);for(let f=0;f<t.length;f+=1)t[f].m(e,null);i=!0},p(c,[u]){u&56&&(r=c[4],ye(),t=Ic(t,u,a,1,c,r,s,e,Oc,ri,null,li),Te()),(!i||u&1&&o!==(o="c-notifications"+(c[0]?" "+c[0]:"")))&&m(e,"class",o),(!i||u&2&&l!==(l=c[1]||void 0))&&m(e,"style",l)},i(c){if(!i){for(let u=0;u<r.length;u+=1)T(t[u]);i=!0}},o(c){for(let u=0;u<t.length;u+=1)S(t[u]);i=!1},d(c){c&&k(e);for(let u=0;u<t.length;u+=1)t[u].d()}}}let Is=!1;const Ks=function(){const{subscribe:n,set:e,update:t}=kn([]);return{subscribe:n,clear(){e([])},push(s){if(!Is)throw new Error("No Notification component instance");const o=et({id:Symbol("Notification")},s);return t(l=>[...l,o]),s.timeout&&s.timeout>0&&setTimeout(()=>this.pop(o.id),s.timeout),o.id},pop(s){t(o=>{const l=o.findIndex(i=>i.id===s);return l>=0&&o.splice(l,1),o})}}}();function wm(n,e,t){let s,o=re;$n(n,Ks,d=>t(4,s=d)),n.$$.on_destroy.push(()=>o());let{$$slots:l={},$$scope:i}=e,{class:r=""}=e,{style:a=""}=e,{transitionFn:c=Kn}=e,{transitionParams:u={}}=e;Wn(()=>{if(Is)throw new Error("The Notifications component already has an instance");Is=!0}),bo(()=>Is=!1);const f=d=>Ks.pop(d.id);return n.$$set=d=>{"class"in d&&t(0,r=d.class),"style"in d&&t(1,a=d.style),"transitionFn"in d&&t(2,c=d.transitionFn),"transitionParams"in d&&t(3,u=d.transitionParams),"$$scope"in d&&t(5,i=d.$$scope)},[r,a,c,u,s,i,l,f]}class km extends se{constructor(e){super(),ne(this,e,wm,vm,J,{class:0,style:1,transitionFn:2,transitionParams:3})}}const mo=[{author:"Edsger W. Dijkstra",en:"Computer Science is no more about computers than astronomy is about telescopes."},{author:"Edsger W. Dijkstra",en:"Simplicity is prerequisite for reliability."},{author:"Edsger W. Dijkstra",en:"The computing scientist’s main challenge is not to get confused by the complexities of his own making."},{author:"Edsger W. Dijkstra",en:"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},{author:"Edsger W. Dijkstra",en:"A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent“."},{author:"Tony Hoare",en:"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},{author:"Jeff Hammerbacher",en:"The best minds of my generation are thinking about how to make people click ads."},{author:"Edsger W. Dijkstra",en:"The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities."},{author:"Edsger W. Dijkstra",en:'How do we convince people that in programming simplicity and clarity — in short: what mathematicians call "elegance" — are not a dispensable luxury, but a crucial matter that decides between success and failure?'},{author:"Fred Brooks",en:"Adding manpower to a late software project makes it later."},{author:"Michael Stal",en:"Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person."},{author:"Fred Brooks",en:"Nine women can't make a baby in one month."},{author:"Jeff Sickel",en:"Deleted code is debugged code."},{author:"Ken Thompson",en:"When in doubt, use brute force."},{author:"Fred Brooks",en:"When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned."},{author:"Fred Brooks",en:"If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two."},{author:"Fred Brooks",en:"Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect."},{author:"Fred Brooks",en:"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures."},{author:"Fred Brooks",en:'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.'},{author:"Donald Knuth",en:"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%."},{author:"Ken Thompson",en:"One of my most productive days was throwing away 1,000 lines of code."},{author:"Grace Hopper",en:"One accurate measurement is worth more than a thousand expert opinions."},{author:"Fred Brooks",en:"What one programmer can do in one month, two programmers can do in two months."},{author:"Rick Osborne",en:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},{author:"John Ousterhout",en:"A program that produces incorrect results twice as fast is infinitely slower."},{author:"Poul Anderson",en:"I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated."},{author:"Robert C. Martin",en:"Cleaning code does NOT take time. NOT cleaning code does take time."},{author:"David Gelernter",en:"Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity."},{author:"Edward V. Berard",en:"Walking on water and developing software from a specification are easy if both are frozen."},{author:"Brian Kernighan",en:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},{author:"Brian Kernighan",en:"Controlling complexity is the essence of computer programming."},{author:"Chris Wenham",en:"Debugging time increases as a square of the program’s size."},{author:"Seymour Cray",en:"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."},{author:"Ron Jeffries",en:"Code never lies, comments sometimes do."},{author:"Laurence J. Peter",en:"Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them."},{author:"Poul-Henning Kamp",en:'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.'},{author:"Albert Einstein",en:"I have no special talent. I am only passionately curious."},{author:"Robert C. Martin",en:"The proper use of comments is to compensate for our failure to express ourself in code."},{author:"Rob Pike",en:"When there is no type hierarchy you don’t have to manage the type hierarchy."},{author:"Steve Jobs",en:"Everybody should learn to program a computer, because it teaches you how to think."},{author:"Chris Sacca",en:"Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for."},{author:"Bill Gates",en:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},{author:"William Wulf",en:"More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity."},{author:"Edsger W. Dijkstra",en:"Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence."},{author:"Albert Einstein",en:"Imagination is more important than knowledge."}];function ai(n,e,t){const s=n.slice();return s[20]=e[t],s}function ci(n,e,t){const s=n.slice();return s[23]=e[t],s}function ui(n){let e,t,s,o=n[23]+"",l,i,r;return{c(){e=_("label"),t=_("input"),s=x(),l=F(o),m(t,"type","radio"),m(t,"name","styles"),t.__value=n[23],t.value=t.__value,n[12][2].push(t),m(e,"class","mr-2 last:mr-0")},m(a,c){y(a,e,c),p(e,t),t.checked=t.__value===n[3],p(e,s),p(e,l),i||(r=Y(t,"change",n[17]),i=!0)},p(a,c){c&8&&(t.checked=t.__value===a[3])},d(a){a&&k(e),n[12][2].splice(n[12][2].indexOf(t),1),i=!1,r()}}}function fi(n){let e,t=n[20]+"",s;return{c(){e=_("option"),s=F(t),e.__value=n[20],e.value=e.__value},m(o,l){y(o,e,l),p(e,s)},p:re,d(o){o&&k(e)}}}function ym(n){let e,t=`<style type="text/css" data-text="test">${n[7][n[3]]}</style>`,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O,L,I,j,z,U,Z,X,ie,V,H,G,ee,fe,be,ge,Le,Ge,ve,_e,ae,Pe,ce,$e,Q,Ee,De,Ce,Re,Ot,it,de,Ct,Me,xe,Ve,rt,Pt;i=new km({props:{style:"display: flex; "+n[0]+n[1]}});let Xe=Object.keys(n[7]),K=[];for(let W=0;W<Xe.length;W+=1)K[W]=ui(ci(n,Xe,W));let te=n[8],ue=[];for(let W=0;W<te.length;W+=1)ue[W]=fi(ai(n,te,W));return xe=new dt({props:{code:`<script lang="ts">
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
</section>`}}),{c(){e=new ur(!1),s=Ie(),o=x(),l=_("section"),R(i.$$.fragment),r=x(),a=_("div"),a.innerHTML='This example uses quotes from the <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">API</a>  <a target="_blank" rel="noreferrer" href="https://github.com/skolakoda">Škola koda</a>',c=x(),u=_("form"),f=_("div"),d=_("div"),h=_("div"),h.textContent="Side",g=x(),b=_("label"),$=_("input"),w=F(" left"),E=x(),D=_("label"),C=_("input"),M=F(" right"),O=x(),L=_("div"),I=_("div"),I.textContent="Direction",j=x(),z=_("label"),U=_("input"),Z=F(" from top"),X=x(),ie=_("label"),V=_("input"),H=F(" from bottom"),G=x(),ee=_("label"),fe=_("div"),fe.textContent="Timeout",be=x(),ge=_("input"),Le=x(),Ge=_("div"),ve=_("div"),ve.textContent="Style",_e=x();for(let W=0;W<K.length;W+=1)K[W].c();ae=x(),Pe=_("label"),ce=_("textarea"),$e=x(),Q=_("div"),Ee=_("label"),De=_("input"),Ce=x(),Re=_("select");for(let W=0;W<ue.length;W+=1)ue[W].c();Ot=x(),it=_("div"),it.innerHTML=`<input class="input block w-40" type="submit" value="Notify"/> 
      <input class="input block w-40" type="reset" value="Clear"/>`,de=x(),Ct=_("h3"),Ct.textContent="Code",Me=x(),R(xe.$$.fragment),e.a=s,m(a,"class","mb-4 text-center"),m(h,"class","text-sm uppercase opacity-70"),m($,"type","radio"),m($,"name","hpos"),$.__value="left: 0; right: unset;",$.value=$.__value,n[12][0].push($),m(C,"type","radio"),m(C,"name","hpos"),C.__value="right: 0;",C.value=C.__value,n[12][0].push(C),m(I,"class","text-sm uppercase opacity-70"),m(U,"type","radio"),m(U,"name","vpos"),U.__value="top: 0; bottom: unset; flex-direction: column-reverse;",U.value=U.__value,n[12][1].push(U),m(V,"type","radio"),m(V,"name","vpos"),V.__value="top: unset; bottom: 0; flex-direction: column;",V.value=V.__value,n[12][1].push(V),m(fe,"class","text-sm uppercase opacity-70"),m(ge,"class","input w-[9ch]"),m(ge,"min","0"),m(ge,"step","100"),m(ge,"type","number"),m(ve,"class","text-sm uppercase opacity-70"),m(f,"class","flex gap-4 items-center justify-evenly mb-4"),m(ce,"name","quote"),ce.value=n[6],m(ce,"rows","3"),m(ce,"class","input w-full"),m(ce,"placeholder","Quote"),m(Pe,"class","block w-full mb-4"),m(De,"name","author"),De.value=n[5],m(De,"class","input w-full"),m(De,"type","text"),m(De,"placeholder","Author"),m(Ee,"class","block w-full"),m(Re,"class","input block w-full"),n[4]===void 0&&wt(()=>n[18].call(Re)),m(Q,"class","mb-4 flex gap-4"),m(it,"class","mx-auto w-fit flex gap-4"),m(u,"class","not-prose w-full"),m(l,"class","prose max-w-none my-4")},m(W,Se){e.m(t,document.head),p(document.head,s),y(W,o,Se),y(W,l,Se),P(i,l,null),p(l,r),p(l,a),p(l,c),p(l,u),p(u,f),p(f,d),p(d,h),p(d,g),p(d,b),p(b,$),$.checked=$.__value===n[0],p(b,w),p(d,E),p(d,D),p(D,C),C.checked=C.__value===n[0],p(D,M),p(f,O),p(f,L),p(L,I),p(L,j),p(L,z),p(z,U),U.checked=U.__value===n[1],p(z,Z),p(L,X),p(L,ie),p(ie,V),V.checked=V.__value===n[1],p(ie,H),p(f,G),p(f,ee),p(ee,fe),p(ee,be),p(ee,ge),gt(ge,n[2]),p(f,Le),p(f,Ge),p(Ge,ve),p(Ge,_e);for(let Be=0;Be<K.length;Be+=1)K[Be].m(Ge,null);p(u,ae),p(u,Pe),p(Pe,ce),p(u,$e),p(u,Q),p(Q,Ee),p(Ee,De),p(Q,Ce),p(Q,Re);for(let Be=0;Be<ue.length;Be+=1)ue[Be].m(Re,null);Dt(Re,n[4]),p(u,Ot),p(u,it),p(l,de),p(l,Ct),p(l,Me),P(xe,l,null),Ve=!0,rt||(Pt=[Y($,"change",n[11]),Y(C,"change",n[13]),Y(U,"change",n[14]),Y(V,"change",n[15]),Y(ge,"input",n[16]),Y(Re,"change",n[18]),Y(u,"submit",al(n[9])),Y(u,"reset",al(n[19]))],rt=!0)},p(W,[Se]){(!Ve||Se&8)&&t!==(t=`<style type="text/css" data-text="test">${W[7][W[3]]}</style>`)&&e.p(t);const Be={};if(Se&3&&(Be.style="display: flex; "+W[0]+W[1]),i.$set(Be),Se&1&&($.checked=$.__value===W[0]),Se&1&&(C.checked=C.__value===W[0]),Se&2&&(U.checked=U.__value===W[1]),Se&2&&(V.checked=V.__value===W[1]),Se&4&&At(ge.value)!==W[2]&&gt(ge,W[2]),Se&136){Xe=Object.keys(W[7]);let Ne;for(Ne=0;Ne<Xe.length;Ne+=1){const bt=ci(W,Xe,Ne);K[Ne]?K[Ne].p(bt,Se):(K[Ne]=ui(bt),K[Ne].c(),K[Ne].m(Ge,null))}for(;Ne<K.length;Ne+=1)K[Ne].d(1);K.length=Xe.length}if((!Ve||Se&64)&&(ce.value=W[6]),(!Ve||Se&32&&De.value!==W[5])&&(De.value=W[5]),Se&256){te=W[8];let Ne;for(Ne=0;Ne<te.length;Ne+=1){const bt=ai(W,te,Ne);ue[Ne]?ue[Ne].p(bt,Se):(ue[Ne]=fi(bt),ue[Ne].c(),ue[Ne].m(Re,null))}for(;Ne<ue.length;Ne+=1)ue[Ne].d(1);ue.length=te.length}Se&272&&Dt(Re,W[4])},i(W){Ve||(T(i.$$.fragment,W),T(xe.$$.fragment,W),Ve=!0)},o(W){S(i.$$.fragment,W),S(xe.$$.fragment,W),Ve=!1},d(W){k(s),W&&e.d(),W&&k(o),W&&k(l),N(i),n[12][0].splice(n[12][0].indexOf($),1),n[12][0].splice(n[12][0].indexOf(C),1),n[12][1].splice(n[12][1].indexOf(U),1),n[12][1].splice(n[12][1].indexOf(V),1),Je(K,W),Je(ue,W),N(xe),rt=!1,Ue(Pt)}}}function Tm(n,e,t){let s,o,l=0,i="left: 0; right: unset;",r="top: 0; bottom: unset; flex-direction: column-reverse;",a=1e4,c={simple:dm,bootstrap:pm},u=Object.keys(c)[0];const f=["primary","secondary","success","danger","warning","info","light","dark"];let d=f[0];function h({currentTarget:L}){if(L instanceof HTMLFormElement){const I=L.elements.quote.value,j=L.author.value;Ks.push({message:[I?`<div>${I}</div>`:"",j?`<div class="italic text-right">${j}</div>`:""].filter(U=>!!U).join(""),type:d,timeout:a}),t(10,l=l+1>=mo.length?0:l+1);let z=f.indexOf(d)+1;z<0||z>=f.length?t(4,d=f[0]):t(4,d=f[z])}}const g=[[],[],[]];function b(){i=this.__value,t(0,i)}function $(){i=this.__value,t(0,i)}function w(){r=this.__value,t(1,r)}function E(){r=this.__value,t(1,r)}function D(){a=At(this.value),t(2,a)}function C(){u=this.__value,t(3,u)}function M(){d=es(this),t(4,d),t(8,f)}const O=()=>Ks.clear();return n.$$.update=()=>{n.$$.dirty&1024&&t(6,s=mo[l].en),n.$$.dirty&1024&&t(5,o=mo[l].author)},[i,r,a,u,d,o,s,c,f,h,l,b,g,$,w,E,D,C,M,O]}class xm extends se{constructor(e){super(),ne(this,e,Tm,ym,J,{})}}const{document:di}=fn;function Sm(n){let e;return{c(){e=F("API")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function Em(n){let e;return{c(){e=F("Base example")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function Am(n){let e,t,s,o;return e=new ke({props:{$$slots:{default:[Sm]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[Em]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment)},m(l,i){P(e,l,i),y(l,t,i),P(s,l,i),o=!0},p(l,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:l}),e.$set(r);const a={};i&1&&(a.$$scope={dirty:i,ctx:l}),s.$set(a)},i(l){o||(T(e.$$.fragment,l),T(s.$$.fragment,l),o=!0)},o(l){S(e.$$.fragment,l),S(s.$$.fragment,l),o=!1},d(l){N(e,l),l&&k(t),N(s,l)}}}function Cm(n){let e,t;return e=new fm({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Pm(n){let e,t;return e=new xm({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Nm(n){let e,t,s,o,l,i;return e=new yt({props:{$$slots:{default:[Am]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[Cm]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[Pm]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment)},m(r,a){P(e,r,a),y(r,t,a),P(s,r,a),y(r,o,a),P(l,r,a),i=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),s.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i(r){i||(T(e.$$.fragment,r),T(s.$$.fragment,r),T(l.$$.fragment,r),i=!0)},o(r){S(e.$$.fragment,r),S(s.$$.fragment,r),S(l.$$.fragment,r),i=!1},d(r){N(e,r),r&&k(t),N(s,r),r&&k(o),N(l,r)}}}function Rm(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b;return di.title=e=document.title.replace(/(•).*$/,"$1 GlobNotify"),g=new kt({props:{$$slots:{default:[Nm]},$$scope:{ctx:n}}}),{c(){t=x(),s=_("section"),o=_("a"),o.textContent="Home",l=x(),i=_("h1"),i.textContent="Component for notifications globally for the entire application",r=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>one instance for the entire application</li> 
    <li>with custom notification transition</li> 
    <li>custom notification element components</li> 
    <li>with configurable timeout for each notification</li>`,h=x(),R(g.$$.fragment),m(o,"class","float-right"),m(o,"href","/"),m(i,"class","text-2xl max-w-lg"),m(c,"class","max-w-[4em]"),at(c.src,u=mt)||m(c,"src",u),m(c,"alt","NPM logo"),m(a,"class","float-right"),m(a,"href","https://www.npmjs.com/package/@apsc/glob-notify"),m(a,"target","_blank"),m(a,"rel","noreferrer"),m(d,"class","leading-6 mb-8"),m(s,"class","prose max-w-none my-4")},m($,w){y($,t,w),y($,s,w),p(s,o),p(s,l),p(s,i),p(s,r),p(s,a),p(a,c),p(s,f),p(s,d),p(s,h),P(g,s,null),b=!0},p($,[w]){(!b||w&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 GlobNotify"))&&(di.title=e);const E={};w&1&&(E.$$scope={dirty:w,ctx:$}),g.$set(E)},i($){b||(T(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&k(t),$&&k(s),N(g)}}}let Mm=class extends se{constructor(e){super(),ne(this,e,null,Rm,J,{})}};const Om=`<div class="component__source">Source <code>ColorPicker.svelte</code></div>
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
</td></tr></table>`;function Im(n){let e,t,s;return t=new Sn({props:{source:Om}}),{c(){e=_("section"),R(t.$$.fragment),m(e,"class","documentation")},m(o,l){y(o,e,l),P(t,e,null),s=!0},p:re,i(o){s||(T(t.$$.fragment,o),s=!0)},o(o){S(t.$$.fragment,o),s=!1},d(o){o&&k(e),N(t)}}}let Lm=class extends se{constructor(e){super(),ne(this,e,null,Im,J,{})}};function Yr(n){var t;const e=(t=/^#([0-9a-f]{3,8})$/gi.exec(n))==null?void 0:t[1];if(e!=null){if(e.length===3||e.length===4)return e.split(/([0-9a-f])/gi).filter(Boolean);if(e.length===6||e.length===8)return e.split(/([0-9a-f]{2})/gi).filter(Boolean)}}function pi(n){try{return Yr(n)!=null}catch(e){return!1}}function Rt(n,e,t){return Math.max(Math.min(n,t),e)}function Dm(n){return Fm(Ys(n))}function Ys(n){var s;const e=(s=Yr(n))==null?void 0:s.map(o=>o.length===1?o+o:o);if(e==null)throw new Error(`Invalid color ${n}`);const t={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return e[3]&&(t.a=Math.round(parseInt(e[3],16)/255*1e3)/1e3),t}function Bm(n){const e=n.s/100,t=n.l/100,s=(1-Math.abs(2*t-1))*e,o=s*(1-Math.abs(n.h/60%2-1)),l=t-s/2;let i=0,r=0,a=0;0<=n.h&&n.h<60?(i=s,r=o,a=0):60<=n.h&&n.h<120?(i=o,r=s,a=0):120<=n.h&&n.h<180?(i=0,r=s,a=o):180<=n.h&&n.h<240?(i=0,r=o,a=s):240<=n.h&&n.h<300?(i=o,r=0,a=s):300<=n.h&&n.h<360&&(i=s,r=0,a=o),i=Math.round((i+l)*255),r=Math.round((r+l)*255),a=Math.round((a+l)*255);const c={r:i,g:r,b:a};return n.a!=null&&(c.a=n.a),c}function Fm(n){const e=n.r/255,t=n.g/255,s=n.b/255,o=Math.max(e,t,s),l=Math.min(e,t,s),i=o-l;let r=0,a=0,c=0;i===0?r=0:o===e?r=(t-s)/i%6:o===t?r=(s-e)/i+2:r=(e-t)/i+4,r=Math.round(r*60),r<0&&(r+=360),a=(o+l)/2,c=i===0?0:i/(1-Math.abs(2*a-1));const u={h:r,s:Math.round(c*100),l:Math.round(a*100)};return n.a!=null&&(u.a=n.a),u}function zm(n){return Ko(Bm(n))}function Ko(n){const e="#"+[n.r,n.g,n.b].map(s=>Rt(s,0,255).toString(16).padStart(2,"0")).join(""),t=n.a!=null?Math.round(n.a*255):255;return t<255?e+Math.max(t,0).toString(16).padStart(2,"0"):e}function Hm(n){return jm(Ys(n))}function jm(n){const e=Rt(n.r,0,255)/255,t=Rt(n.g,0,255)/255,s=Rt(n.b,0,255)/255,o=Math.max(e,t,s),l=Math.min(e,t,s),i=o-l,r=o;let a=0,c=0;i&&(o===e&&(a=(t-s)/i),o===t&&(a=2+(s-e)/i),o===s&&(a=4+(e-t)/i),o&&(c=i/o)),a=a*60;const u=a<0?a+360:a,f=c*100,d=r*100;return n.a!=null&&n.a>=0?{h:u,s:f,v:d,a:Rt(n.a,0,1)}:{h:u,s:f,v:d}}function go(n){return Ko(Um(n))}function Um(n){const e=n.s/100,t=n.v/100;let s=e*t;const o=n.h/60;let l=s*(1-Math.abs(o%2-1));const i=t-s;s=s+i,l=l+i;const r=Math.floor(o)%6,a=[s,l,i,i,l,s][r],c=[l,s,s,l,i,i][r],u=[i,i,l,s,s,l][r],f=Math.round(a*255),d=Math.round(c*255),h=Math.round(u*255);return n.a!=null?{r:f,g:d,b:h,a:n.a}:{r:f,g:d,b:h}}function hi(n){var o;typeof n=="string"&&(n=Ys(n));const e=[.2126,.7152,.0722],t=[n.r,n.g,n.b].reduce((l,i,r)=>(i/=255,i<.03928?i/=12.92:(i=(i+.055)/1.055,i*=i),l+i*e[r]),0),s=1-((o=n.a)!=null?o:1);return t+(1-t)*s}function Km(n){let e,t,s,o;return{c(){e=_("div"),t=_("div"),m(t,"class","c-color-picker__tone--marker"),ot(t,"left",n[0]+"%"),ot(t,"top",100-n[1]+"%"),m(e,"class","c-color-picker__tone"),m(e,"tabindex","0")},m(l,i){y(l,e,i),p(e,t),s||(o=tt(n[2].call(null,e)),s=!0)},p(l,[i]){i&1&&ot(t,"left",l[0]+"%"),i&2&&ot(t,"top",100-l[1]+"%")},i:re,o:re,d(l){l&&k(e),s=!1,o()}}}function qm(n,e,t){let{s=0}=e,{v:o=0}=e;function l(i){function r(h){const{pageX:g,pageY:b}=h instanceof MouseEvent?h:h.changedTouches[0],{left:$,top:w,width:E,height:D}=i.getBoundingClientRect();t(0,s=Rt((g-$-window.scrollX)/E,0,1)*100),t(1,o=100-Rt((b-w-window.scrollY)/D,0,1)*100)}function a(h){r(h)}function c(){document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",c),document.removeEventListener("touchend",c),setTimeout(()=>{document.removeEventListener("click",f,{capture:!0})},0)}function u(h){i.focus(),document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",c),document.addEventListener("touchend",c),document.addEventListener("click",f,{capture:!0}),r(h),h.preventDefault()}function f(h){h.preventDefault(),h.stopPropagation()}function d(h){let b=100-o,$=s;switch(h.code){case"ArrowUp":b=Rt(b-1,0,100);break;case"ArrowDown":b=Rt(b+1,0,100),h.preventDefault();break;case"ArrowLeft":$=Rt($-1,0,100),h.preventDefault();break;case"ArrowRight":$=Rt($+1,0,100),h.preventDefault();break}$!==s&&t(0,s=$),100-b!==o&&t(1,o=100-b)}return i.addEventListener("mousedown",u),i.addEventListener("touchstart",u),i.addEventListener("keydown",d),{destroy(){c(),i.removeEventListener("mousedown",u),i.removeEventListener("touchstart",u),i.removeEventListener("keydown",d)}}}return n.$$set=i=>{"s"in i&&t(0,s=i.s),"v"in i&&t(1,o=i.v)},[s,o,l]}class Wm extends se{constructor(e){super(),ne(this,e,qm,Km,J,{s:0,v:1})}}var Gm="Expected a function",mi=0/0,Zm="[object Symbol]",Xm=/^\s+|\s+$/g,Qm=/^[-+]0x[0-9a-f]+$/i,Ym=/^0b[01]+$/i,Jm=/^0o[0-7]+$/i,Vm=parseInt,eg=typeof on=="object"&&on&&on.Object===Object&&on,tg=typeof self=="object"&&self&&self.Object===Object&&self,ng=eg||tg||Function("return this")(),sg=Object.prototype,og=sg.toString,lg=Math.max,ig=Math.min,_o=function(){return ng.Date.now()};function rg(n,e,t){var s,o,l,i,r,a,c=0,u=!1,f=!1,d=!0;if(typeof n!="function")throw new TypeError(Gm);e=gi(e)||0,wo(t)&&(u=!!t.leading,f="maxWait"in t,l=f?lg(gi(t.maxWait)||0,e):l,d="trailing"in t?!!t.trailing:d);function h(O){var L=s,I=o;return s=o=void 0,c=O,i=n.apply(I,L),i}function g(O){return c=O,r=setTimeout(w,e),u?h(O):i}function b(O){var L=O-a,I=O-c,j=e-L;return f?ig(j,l-I):j}function $(O){var L=O-a,I=O-c;return a===void 0||L>=e||L<0||f&&I>=l}function w(){var O=_o();if($(O))return E(O);r=setTimeout(w,b(O))}function E(O){return r=void 0,d&&s?h(O):(s=o=void 0,i)}function D(){r!==void 0&&clearTimeout(r),c=0,s=a=o=r=void 0}function C(){return r===void 0?i:E(_o())}function M(){var O=_o(),L=$(O);if(s=arguments,o=this,a=O,L){if(r===void 0)return g(a);if(f)return r=setTimeout(w,e),h(a)}return r===void 0&&(r=setTimeout(w,e)),i}return M.cancel=D,M.flush=C,M}function wo(n){var e=typeof n;return!!n&&(e=="object"||e=="function")}function ag(n){return!!n&&typeof n=="object"}function cg(n){return typeof n=="symbol"||ag(n)&&og.call(n)==Zm}function gi(n){if(typeof n=="number")return n;if(cg(n))return mi;if(wo(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=wo(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=n.replace(Xm,"");var t=Ym.test(n);return t||Jm.test(n)?Vm(n.slice(2),t?2:8):Qm.test(n)?mi:+n}var ug=rg;function fg(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E;function D(O){n[9](O)}function C(O){n[10](O)}let M={};return n[2].s!==void 0&&(M.s=n[2].s),n[2].v!==void 0&&(M.v=n[2].v),s=new Wm({props:M}),Qe.push(()=>an(s,"s",D)),Qe.push(()=>an(s,"v",C)),{c(){e=_("div"),t=_("div"),R(s.$$.fragment),i=x(),r=_("div"),a=x(),c=_("div"),u=_("input"),f=x(),d=_("div"),h=_("input"),m(r,"class","c-color-picker__sample"),m(u,"type","range"),m(u,"min","0"),m(u,"max","359"),m(u,"step","1"),m(c,"class","c-color-picker__hue"),m(h,"type","range"),m(h,"min","0"),m(h,"max","1"),m(h,"step",1/255),m(d,"class","c-color-picker__alpha"),m(t,"class","c-color-picker__body"),m(e,"class",g="c-color-picker"+(n[0]?" "+n[0]:"")),m(e,"style",b="--cp-tone: "+n[4]+"; --cp-color-opacity: "+n[5]+"; --cp-color: "+n[3]+"; "+n[1])},m(O,L){y(O,e,L),p(e,t),P(s,t,null),p(t,i),p(t,r),p(t,a),p(t,c),p(c,u),gt(u,n[2].h),p(t,f),p(t,d),p(d,h),gt(h,n[2].a),$=!0,w||(E=[Y(u,"change",n[11]),Y(u,"input",n[11]),Y(h,"change",n[12]),Y(h,"input",n[12])],w=!0)},p(O,[L]){const I={};!o&&L&4&&(o=!0,I.s=O[2].s,wn(()=>o=!1)),!l&&L&4&&(l=!0,I.v=O[2].v,wn(()=>l=!1)),s.$set(I),L&4&&gt(u,O[2].h),L&4&&gt(h,O[2].a),(!$||L&1&&g!==(g="c-color-picker"+(O[0]?" "+O[0]:"")))&&m(e,"class",g),(!$||L&58&&b!==(b="--cp-tone: "+O[4]+"; --cp-color-opacity: "+O[5]+"; --cp-color: "+O[3]+"; "+O[1]))&&m(e,"style",b)},i(O){$||(T(s.$$.fragment,O),$=!0)},o(O){S(s.$$.fragment,O),$=!1},d(O){O&&k(e),N(s),w=!1,Ue(E)}}}function dg(n,e,t){let{class:s=""}=e,{style:o=""}=e,{color:l="#000"}=e,{debounce:i=0}=e,r;function a(w){let{h:E,s:D,v:C,a:M=1}=Hm(w);r!=null&&E===0&&D===0&&(E=r.h),t(2,r={h:E,s:D,v:C,a:M})}let c,u,f,d;function h(w){n.$$.not_equal(r.s,w)&&(r.s=w,t(2,r))}function g(w){n.$$.not_equal(r.v,w)&&(r.v=w,t(2,r))}function b(){r.h=At(this.value),t(2,r)}function $(){r.a=At(this.value),t(2,r)}return n.$$set=w=>{"class"in w&&t(0,s=w.class),"style"in w&&t(1,o=w.style),"color"in w&&t(6,l=w.color),"debounce"in w&&t(7,i=w.debounce)},n.$$.update=()=>{n.$$.dirty&128&&t(8,c=ug(w=>{t(6,l=w)},i)),n.$$.dirty&64&&a(l),n.$$.dirty&268&&(w=>{t(3,u=go(w)),t(4,f=go({h:w.h,s:100,v:100})),t(5,d=go({h:w.h,s:w.s,v:w.v})),c(u)})(r)},[s,o,r,u,f,d,l,i,c,h,g,b,$]}class Jr extends se{constructor(e){super(),ne(this,e,dg,fg,J,{class:0,style:1,color:6,debounce:7})}}function pg(n){let e,t,s,o;return{c(){e=_("input"),m(e,"class",t="c-coloredit__input--text"+(n[0]?" "+n[0]:"")),m(e,"type","text"),e.value=n[1]},m(l,i){y(l,e,i),n[6](e),s||(o=Y(e,"input",n[7]),s=!0)},p(l,[i]){i&1&&t!==(t="c-coloredit__input--text"+(l[0]?" "+l[0]:""))&&m(e,"class",t),i&2&&e.value!==l[1]&&(e.value=l[1])},i:re,o:re,d(l){l&&k(e),n[6](null),s=!1,o()}}}function hg(n,e,t){let{class:s=""}=e,{color:o="#000"}=e,l;function i(f){pi(f)&&t(4,o=f)}let r;function a(){r==null||r.focus()}function c(f){Qe[f?"unshift":"push"](()=>{r=f,t(2,r)})}const u=f=>i(f.currentTarget.value);return n.$$set=f=>{"class"in f&&t(0,s=f.class),"color"in f&&t(4,o=f.color)},n.$$.update=()=>{n.$$.dirty&16&&t(1,l=pi(o)?o:"")},[s,l,r,i,o,a,c,u]}class mg extends se{constructor(e){super(),ne(this,e,hg,pg,J,{class:0,color:4,focus:5})}get focus(){return this.$$.ctx[5]}}function gg(n){let e,t,s,o,l,i,r,a,c,u,f,d,h;return{c(){e=_("input"),s=x(),o=_("input"),i=x(),r=_("input"),c=x(),u=_("input"),m(e,"class",t="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),m(e,"type","number"),m(e,"min","0"),m(e,"max","255"),m(e,"step","1"),e.value=n[1],m(o,"class",l="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),m(o,"type","number"),m(o,"min","0"),m(o,"max","255"),m(o,"step","1"),o.value=n[2],m(r,"class",a="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),m(r,"type","number"),m(r,"min","0"),m(r,"max","255"),m(r,"step","1"),r.value=n[3],m(u,"class",f="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),m(u,"type","number"),m(u,"min","0"),m(u,"max","1"),m(u,"step","0.01"),u.value=n[4]},m(g,b){y(g,e,b),n[8](e),y(g,s,b),y(g,o,b),y(g,i,b),y(g,r,b),y(g,c,b),y(g,u,b),d||(h=[Y(e,"change",n[9]),Y(o,"change",n[10]),Y(r,"change",n[11]),Y(u,"change",n[12])],d=!0)},p(g,[b]){b&1&&t!==(t="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&m(e,"class",t),b&2&&e.value!==g[1]&&(e.value=g[1]),b&1&&l!==(l="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&m(o,"class",l),b&4&&o.value!==g[2]&&(o.value=g[2]),b&1&&a!==(a="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&m(r,"class",a),b&8&&r.value!==g[3]&&(r.value=g[3]),b&1&&f!==(f="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&m(u,"class",f),b&16&&u.value!==g[4]&&(u.value=g[4])},i:re,o:re,d(g){g&&k(e),n[8](null),g&&k(s),g&&k(o),g&&k(i),g&&k(r),g&&k(c),g&&k(u),d=!1,Ue(h)}}}function _g(n,e,t){let{class:s=""}=e,{color:o="#000"}=e,l,i,r,a;function c(E){var D;try{const C=Ys(E);t(1,l=C.r),t(2,i=C.g),t(3,r=C.b),t(4,a=(D=C.a)!=null?D:1)}catch(C){t(1,l=NaN),t(2,i=NaN),t(3,r=NaN),t(4,a=NaN)}}function u(E,D,C,M){[E,C,D,M!=null?M:1].every(O=>Number.isFinite(O))&&t(6,o=Ko({r:E,g:D,b:C,a:M}))}let f;function d(){f==null||f.focus()}function h(E){Qe[E?"unshift":"push"](()=>{f=E,t(5,f)})}const g=E=>t(1,l=+E.currentTarget.value),b=E=>t(2,i=+E.currentTarget.value),$=E=>t(3,r=+E.currentTarget.value),w=E=>t(4,a=+E.currentTarget.value);return n.$$set=E=>{"class"in E&&t(0,s=E.class),"color"in E&&t(6,o=E.color)},n.$$.update=()=>{n.$$.dirty&64&&c(o),n.$$.dirty&30&&u(l,i,r,a)},[s,l,i,r,a,f,o,d,h,g,b,$,w]}class bg extends se{constructor(e){super(),ne(this,e,_g,gg,J,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function $g(n){let e,t,s,o,l,i,r,a,c,u,f,d,h;return{c(){e=_("input"),s=x(),o=_("input"),i=x(),r=_("input"),c=x(),u=_("input"),m(e,"class",t="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),m(e,"type","number"),m(e,"min","0"),m(e,"max","360"),m(e,"step","1"),e.value=n[1],m(o,"class",l="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),m(o,"type","number"),m(o,"min","0"),m(o,"max","100"),m(o,"step","1"),o.value=n[2],m(r,"class",a="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),m(r,"type","number"),m(r,"min","0"),m(r,"max","100"),m(r,"step","1"),r.value=n[3],m(u,"class",f="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),m(u,"type","number"),m(u,"min","0"),m(u,"max","1"),m(u,"step","0.01"),u.value=n[4]},m(g,b){y(g,e,b),n[8](e),y(g,s,b),y(g,o,b),y(g,i,b),y(g,r,b),y(g,c,b),y(g,u,b),d||(h=[Y(e,"change",n[9]),Y(o,"change",n[10]),Y(r,"change",n[11]),Y(u,"change",n[12])],d=!0)},p(g,[b]){b&1&&t!==(t="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&m(e,"class",t),b&2&&e.value!==g[1]&&(e.value=g[1]),b&1&&l!==(l="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&m(o,"class",l),b&4&&o.value!==g[2]&&(o.value=g[2]),b&1&&a!==(a="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&m(r,"class",a),b&8&&r.value!==g[3]&&(r.value=g[3]),b&1&&f!==(f="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&m(u,"class",f),b&16&&u.value!==g[4]&&(u.value=g[4])},i:re,o:re,d(g){g&&k(e),n[8](null),g&&k(s),g&&k(o),g&&k(i),g&&k(r),g&&k(c),g&&k(u),d=!1,Ue(h)}}}function vg(n,e,t){let{class:s=""}=e,{color:o="#000"}=e,l,i,r,a;function c(E){var D;try{const C=Dm(E);t(1,l=C.h),t(2,i=C.s),t(3,r=C.l),t(4,a=(D=C.a)!=null?D:1)}catch(C){t(1,l=NaN),t(2,i=NaN),t(3,r=NaN),t(4,a=NaN)}}function u(E,D,C,M){[E,D,C,M!=null?M:1].every(O=>Number.isFinite(O))&&t(6,o=zm({h:E,s:D,l:C,a:M}))}let f;function d(){f==null||f.focus()}function h(E){Qe[E?"unshift":"push"](()=>{f=E,t(5,f)})}const g=E=>t(1,l=+E.currentTarget.value),b=E=>t(2,i=+E.currentTarget.value),$=E=>t(3,r=+E.currentTarget.value),w=E=>t(4,a=+E.currentTarget.value);return n.$$set=E=>{"class"in E&&t(0,s=E.class),"color"in E&&t(6,o=E.color)},n.$$.update=()=>{n.$$.dirty&64&&c(o),n.$$.dirty&30&&u(l,i,r,a)},[s,l,i,r,a,f,o,d,h,g,b,$,w]}class wg extends se{constructor(e){super(),ne(this,e,vg,$g,J,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function _i(n,e,t){const s=n.slice();return s[11]=e[t],s}function bi(n){let e,t=n[11]+"",s;return{c(){e=_("span"),s=F(t),m(e,"class","c-color-edit__label")},m(o,l){y(o,e,l),p(e,s)},p(o,l){l&8&&t!==(t=o[11]+"")&&Oe(s,t)},d(o){o&&k(e)}}}function kg(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b;function $(M){n[6](M)}var w=n[3].component;function E(M){let O={};return M[0]!==void 0&&(O.color=M[0]),{props:O}}w&&(s=We(w,E(n)),Qe.push(()=>an(s,"color",$)),n[7](s));let D=n[3].labels,C=[];for(let M=0;M<D.length;M+=1)C[M]=bi(_i(n,D,M));return{c(){e=_("div"),t=_("div"),s&&R(s.$$.fragment),l=x();for(let M=0;M<C.length;M+=1)C[M].c();i=x(),r=_("div"),a=_("button"),c=x(),u=_("button"),m(t,"class","c-color-edit__values"),ot(t,"--ce-columns",n[3].labels.length),m(a,"class","c-color-edit__button--up"),m(u,"class","c-color-edit__button--down"),m(r,"class","c-color-edit__buttons"),m(e,"class",f="c-color-edit"+(n[1]?" "+n[1]:"")),m(e,"style",d=n[2]||void 0)},m(M,O){y(M,e,O),p(e,t),s&&P(s,t,null),p(t,l);for(let L=0;L<C.length;L+=1)C[L].m(t,null);p(e,i),p(e,r),p(r,a),p(r,c),p(r,u),h=!0,g||(b=[Y(a,"click",n[8]),Y(u,"click",n[9])],g=!0)},p(M,[O]){const L={};if(!o&&O&1&&(o=!0,L.color=M[0],wn(()=>o=!1)),w!==(w=M[3].component)){if(s){ye();const I=s;S(I.$$.fragment,1,0,()=>{N(I,1)}),Te()}w?(s=We(w,E(M)),Qe.push(()=>an(s,"color",$)),M[7](s),R(s.$$.fragment),T(s.$$.fragment,1),P(s,t,l)):s=null}else w&&s.$set(L);if(O&8){D=M[3].labels;let I;for(I=0;I<D.length;I+=1){const j=_i(M,D,I);C[I]?C[I].p(j,O):(C[I]=bi(j),C[I].c(),C[I].m(t,null))}for(;I<C.length;I+=1)C[I].d(1);C.length=D.length}(!h||O&8)&&ot(t,"--ce-columns",M[3].labels.length),(!h||O&2&&f!==(f="c-color-edit"+(M[1]?" "+M[1]:"")))&&m(e,"class",f),(!h||O&4&&d!==(d=M[2]||void 0))&&m(e,"style",d)},i(M){h||(s&&T(s.$$.fragment,M),h=!0)},o(M){s&&S(s.$$.fragment,M),h=!1},d(M){M&&k(e),n[7](null),s&&N(s),Je(C,M),g=!1,Ue(b)}}}function yg(n,e,t){let{class:s=""}=e,{style:o=""}=e,{color:l="#000"}=e;const i=[{component:mg,labels:["Hex"]},{component:bg,labels:["R","G","B","A"]},{component:wg,labels:["H","S","L","A"]}];let r=i[0],a;function c(g){return vt(this,null,function*(){let b=i.indexOf(r)+g;b<0?b=i.length-1:b>=i.length&&(b=0),t(3,r=i[b]),yield Eo(),a==null||a.focus()})}function u(g){l=g,t(0,l)}function f(g){Qe[g?"unshift":"push"](()=>{a=g,t(4,a)})}const d=()=>c(-1),h=()=>c(1);return n.$$set=g=>{"class"in g&&t(1,s=g.class),"style"in g&&t(2,o=g.style),"color"in g&&t(0,l=g.color)},[l,s,o,r,a,c,u,f,d,h]}class Vr extends se{constructor(e){super(),ne(this,e,yg,kg,J,{class:1,style:2,color:0})}}function $i(n,e,t){const s=n.slice();return s[6]=e[t],s}function vi(n){let e,t=n[6]+"",s,o,l;function i(){return n[5](n[6])}return{c(){e=_("button"),s=F(t),m(e,"class","input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"),ot(e,"background-color",n[6]),ot(e,"color",hi(n[6])>.55?"inherit":"white")},m(r,a){y(r,e,a),p(e,s),o||(l=Y(e,"click",i),o=!0)},p(r,a){n=r,a&2&&t!==(t=n[6]+"")&&Oe(s,t),a&2&&ot(e,"background-color",n[6]),a&2&&ot(e,"color",hi(n[6])>.55?"inherit":"white")},d(r){r&&k(e),o=!1,l()}}}function Tg(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g=n[1],b=[];for(let $=0;$<g.length;$+=1)b[$]=vi($i(n,g,$));return{c(){e=_("div"),t=_("span"),t.textContent="Set color",s=x(),o=_("a"),o.textContent="randomize alpha",l=x(),i=_("span"),i.textContent="•",r=x(),a=_("a"),a.textContent="reset alpha",u=x(),f=_("div");for(let $=0;$<b.length;$+=1)b[$].c();m(o,"class","text-sm"),m(o,"href","javascript:void(0)"),m(i,"class","text-blue-500"),m(a,"class","text-sm"),m(a,"href","javascript:void(0)"),m(e,"class",c=n[0]||void 0)},m($,w){y($,e,w),p(e,t),p(e,s),p(e,o),p(e,l),p(e,i),p(e,r),p(e,a),y($,u,w),y($,f,w);for(let E=0;E<b.length;E+=1)b[E].m(f,null);d||(h=[Y(o,"click",n[3]),Y(a,"click",n[4])],d=!0)},p($,[w]){if(w&1&&c!==(c=$[0]||void 0)&&m(e,"class",c),w&6){g=$[1];let E;for(E=0;E<g.length;E+=1){const D=$i($,g,E);b[E]?b[E].p(D,w):(b[E]=vi(D),b[E].c(),b[E].m(f,null))}for(;E<b.length;E+=1)b[E].d(1);b.length=g.length}},i:re,o:re,d($){$&&k(e),$&&k(u),$&&k(f),Je(b,$),d=!1,Ue(h)}}}function xg(n){return ea(n).map(e=>e+Math.floor(Math.random()*255).toString(16).padStart(2,"0"))}function ea(n){return n.map(e=>e.slice(0,7))}function Sg(n,e,t){const s=xo();let{class:o=""}=e,l=["#001219","#005F73","#0A9396","#94D2BD","#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226","#F72585","#B5179E","#7209B7","#560BAD","#480CA8","#3A0CA3","#3F37C9","#4361EE","#4895EF","#4CC9F0"];const i=()=>t(1,l=xg(l)),r=()=>t(1,l=ea(l)),a=c=>s("color",c);return n.$$set=c=>{"class"in c&&t(0,o=c.class)},[o,l,s,i,r,a]}class qo extends se{constructor(e){super(),ne(this,e,Sg,Tg,J,{class:0})}}function Eg(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O,L;function I(z){n[1](z)}let j={class:"basis-1/2 h-[256px] pt-2"};return n[0]!==void 0&&(j.color=n[0]),s=new Jr({props:j}),Qe.push(()=>an(s,"color",I)),E=new qo({props:{class:"mt-4"}}),E.$on("color",n[2]),O=new dt({props:{code:`<script lang="ts">
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
</section>`}}),{c(){e=_("section"),t=_("div"),R(s.$$.fragment),l=x(),i=_("div"),r=_("div"),a=F("Current color: "),c=_("code"),u=F(n[0]),f=x(),d=_("div"),h=_("div"),g=_("div"),b=x(),$=_("div"),w=x(),R(E.$$.fragment),D=x(),C=_("h3"),C.textContent="Code",M=x(),R(O.$$.fragment),m(c,"class","uppercase"),m(g,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),m($,"class","absolute left-0 top-0 right-0 bottom-0"),ot($,"background-color",n[0]),m(h,"class","relative h-[1.5em]"),m(d,"class","p-2 border rounded-md"),m(i,"class","basis-1/2"),m(t,"class","flex gap-8"),m(e,"class","prose max-w-none my-4")},m(z,U){y(z,e,U),p(e,t),P(s,t,null),p(t,l),p(t,i),p(i,r),p(r,a),p(r,c),p(c,u),p(i,f),p(i,d),p(d,h),p(h,g),p(h,b),p(h,$),p(i,w),P(E,i,null),p(e,D),p(e,C),p(e,M),P(O,e,null),L=!0},p(z,[U]){const Z={};!o&&U&1&&(o=!0,Z.color=z[0],wn(()=>o=!1)),s.$set(Z),(!L||U&1)&&Oe(u,z[0]),(!L||U&1)&&ot($,"background-color",z[0])},i(z){L||(T(s.$$.fragment,z),T(E.$$.fragment,z),T(O.$$.fragment,z),L=!0)},o(z){S(s.$$.fragment,z),S(E.$$.fragment,z),S(O.$$.fragment,z),L=!1},d(z){z&&k(e),N(s),N(E),N(O)}}}function Ag(n,e,t){let s="#f70";function o(i){s=i,t(0,s)}return[s,o,({detail:i})=>t(0,s=i)]}class Cg extends se{constructor(e){super(),ne(this,e,Ag,Eg,J,{})}}function Pg(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O,L,I;function j(U){n[1](U)}let z={class:"w-full border shadow-md rounded-lg p-2"};return n[0]!==void 0&&(z.color=n[0]),o=new Vr({props:z}),Qe.push(()=>an(o,"color",j)),D=new qo({props:{class:"mt-4"}}),D.$on("color",n[2]),L=new dt({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),t=_("div"),s=_("div"),R(o.$$.fragment),i=x(),r=_("div"),a=_("div"),c=F("Current color: "),u=_("code"),f=F(n[0]),d=x(),h=_("div"),g=_("div"),b=_("div"),$=x(),w=_("div"),E=x(),R(D.$$.fragment),C=x(),M=_("h3"),M.textContent="Code",O=x(),R(L.$$.fragment),m(s,"class","basis-1/2 inline-flex items-center"),m(u,"class","uppercase"),m(b,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),m(w,"class","absolute left-0 top-0 right-0 bottom-0"),ot(w,"background-color",n[0]),m(g,"class","relative h-[1.5em]"),m(h,"class","p-2 border rounded-md"),m(r,"class","basis-1/2"),m(t,"class","flex gap-8"),m(e,"class","prose max-w-none my-4")},m(U,Z){y(U,e,Z),p(e,t),p(t,s),P(o,s,null),p(t,i),p(t,r),p(r,a),p(a,c),p(a,u),p(u,f),p(r,d),p(r,h),p(h,g),p(g,b),p(g,$),p(g,w),p(r,E),P(D,r,null),p(e,C),p(e,M),p(e,O),P(L,e,null),I=!0},p(U,[Z]){const X={};!l&&Z&1&&(l=!0,X.color=U[0],wn(()=>l=!1)),o.$set(X),(!I||Z&1)&&Oe(f,U[0]),(!I||Z&1)&&ot(w,"background-color",U[0])},i(U){I||(T(o.$$.fragment,U),T(D.$$.fragment,U),T(L.$$.fragment,U),I=!0)},o(U){S(o.$$.fragment,U),S(D.$$.fragment,U),S(L.$$.fragment,U),I=!1},d(U){U&&k(e),N(o),N(D),N(L)}}}function Ng(n,e,t){let s="#f70";function o(i){s=i,t(0,s)}return[s,o,({detail:i})=>t(0,s=i)]}class Rg extends se{constructor(e){super(),ne(this,e,Ng,Pg,J,{})}}function as(n){return n.split("-")[1]}function ta(n){return n==="y"?"height":"width"}function qn(n){return n.split("-")[0]}function Wo(n){return["top","bottom"].includes(qn(n))?"x":"y"}function Mg(n){return et({top:0,right:0,bottom:0,left:0},n)}function na(n){return typeof n!="number"?Mg(n):{top:n,right:n,bottom:n,left:n}}function wi(n){return _n(et({},n),{top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height})}function sa(n,e){return vt(this,null,function*(){var t;e===void 0&&(e={});const{x:s,y:o,platform:l,rects:i,elements:r,strategy:a}=n,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:h=0}=e,g=na(h),$=r[d?f==="floating"?"reference":"floating":f],w=wi(yield l.getClippingRect({element:(t=yield l.isElement==null?void 0:l.isElement($))==null||t?$:$.contextElement||(yield l.getDocumentElement==null?void 0:l.getDocumentElement(r.floating)),boundary:c,rootBoundary:u,strategy:a})),E=f==="floating"?_n(et({},i.floating),{x:s,y:o}):i.reference,D=yield l.getOffsetParent==null?void 0:l.getOffsetParent(r.floating),C=(yield l.isElement==null?void 0:l.isElement(D))?(yield l.getScale==null?void 0:l.getScale(D))||{x:1,y:1}:{x:1,y:1},M=wi(l.convertOffsetParentRelativeRectToViewportRelativeRect?yield l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:E,offsetParent:D,strategy:a}):E);return{top:(w.top-M.top+g.top)/C.y,bottom:(M.bottom-w.bottom+g.bottom)/C.y,left:(w.left-M.left+g.left)/C.x,right:(M.right-w.right+g.right)/C.x}})}const Og=Math.min,bn=Math.max;function Ig(n,e,t){return bn(n,Og(e,t))}const oa=n=>({name:"arrow",options:n,fn(t){return vt(this,null,function*(){const{element:s,padding:o=0}=n||{},{x:l,y:i,placement:r,rects:a,platform:c}=t;if(s==null)return{};const u=na(o),f={x:l,y:i},d=Wo(r),h=ta(d),g=yield c.getDimensions(s),b=d==="y"?"top":"left",$=d==="y"?"bottom":"right",w=a.reference[h]+a.reference[d]-f[d]-a.floating[h],E=f[d]-a.reference[d],D=yield c.getOffsetParent==null?void 0:c.getOffsetParent(s);let C=D?d==="y"?D.clientHeight||0:D.clientWidth||0:0;C===0&&(C=a.floating[h]);const M=w/2-E/2,O=u[b],L=C-g[h]-u[$],I=C/2-g[h]/2+M,j=Ig(O,I,L),U=as(r)!=null&&I!=j&&a.reference[h]/2-(I<O?u[b]:u[$])-g[h]/2<0?I<O?O-I:L-I:0;return{[d]:f[d]-U,data:{[d]:j,centerOffset:I-j}}})}}),Lg={left:"right",right:"left",bottom:"top",top:"bottom"};function qs(n){return n.replace(/left|right|bottom|top/g,e=>Lg[e])}function Dg(n,e,t){t===void 0&&(t=!1);const s=as(n),o=Wo(n),l=ta(o);let i=o==="x"?s===(t?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(i=qs(i)),{main:i,cross:qs(i)}}const Bg={start:"end",end:"start"};function ko(n){return n.replace(/start|end/g,e=>Bg[e])}function Fg(n){const e=qs(n);return[ko(n),e,ko(e)]}function zg(n,e,t){const s=["left","right"],o=["right","left"],l=["top","bottom"],i=["bottom","top"];switch(n){case"top":case"bottom":return t?e?o:s:e?s:o;case"left":case"right":return e?l:i;default:return[]}}function Hg(n,e,t,s){const o=as(n);let l=zg(qn(n),t==="start",s);return o&&(l=l.map(i=>i+"-"+o),e&&(l=l.concat(l.map(ko)))),l}const Js=function(n){return n===void 0&&(n={}),{name:"flip",options:n,fn(t){return vt(this,null,function*(){var s;const{placement:o,middlewareData:l,rects:i,initialPlacement:r,platform:a,elements:c}=t,U=n,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0}=U,$=co(U,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),w=qn(o),E=qn(r)===r,D=yield a.isRTL==null?void 0:a.isRTL(c.floating),C=d||(E||!b?[qs(r)]:Fg(r));!d&&g!=="none"&&C.push(...Hg(r,b,g,D));const M=[r,...C],O=yield sa(t,$),L=[];let I=((s=l.flip)==null?void 0:s.overflows)||[];if(u&&L.push(O[w]),f){const{main:Z,cross:X}=Dg(o,i,D);L.push(O[Z],O[X])}if(I=[...I,{placement:o,overflows:L}],!L.every(Z=>Z<=0)){var j;const Z=(((j=l.flip)==null?void 0:j.index)||0)+1,X=M[Z];if(X)return{data:{index:Z,overflows:I},reset:{placement:X}};let ie="bottom";switch(h){case"bestFit":{var z;const V=(z=I.map(H=>[H,H.overflows.filter(G=>G>0).reduce((G,ee)=>G+ee,0)]).sort((H,G)=>H[1]-G[1])[0])==null?void 0:z[0].placement;V&&(ie=V);break}case"initialPlacement":ie=r;break}if(o!==ie)return{reset:{placement:ie}}}return{}})}}};function jg(n,e){return vt(this,null,function*(){const{placement:t,platform:s,elements:o}=n,l=yield s.isRTL==null?void 0:s.isRTL(o.floating),i=qn(t),r=as(t),a=Wo(t)==="x",c=["left","top"].includes(i)?-1:1,u=l&&a?-1:1,f=typeof e=="function"?e(n):e;let{mainAxis:d,crossAxis:h,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:et({mainAxis:0,crossAxis:0,alignmentAxis:null},f);return r&&typeof g=="number"&&(h=r==="end"?g*-1:g),a?{x:h*u,y:d*c}:{x:d*c,y:h*u}})}const Vs=function(n){return n===void 0&&(n=0),{name:"offset",options:n,fn(t){return vt(this,null,function*(){const{x:s,y:o}=t,l=yield jg(t,n);return{x:s+l.x,y:o+l.y,data:l}})}}},la=function(n){return n===void 0&&(n={}),{name:"size",options:n,fn(t){return vt(this,null,function*(){const{placement:s,rects:o,platform:l,elements:i}=t,C=n,{apply:r=()=>{}}=C,a=co(C,["apply"]),c=yield sa(t,a),u=qn(s),f=as(s);let d,h;u==="top"||u==="bottom"?(d=u,h=f===((yield l.isRTL==null?void 0:l.isRTL(i.floating))?"start":"end")?"left":"right"):(h=u,d=f==="end"?"top":"bottom");const g=bn(c.left,0),b=bn(c.right,0),$=bn(c.top,0),w=bn(c.bottom,0),E={availableHeight:o.floating.height-(["left","right"].includes(s)?2*($!==0||w!==0?$+w:bn(c.top,c.bottom)):c[d]),availableWidth:o.floating.width-(["top","bottom"].includes(s)?2*(g!==0||b!==0?g+b:bn(c.left,c.right)):c[h])};yield r(et(et({},t),E));const D=yield l.getDimensions(i.floating);return o.floating.width!==D.width||o.floating.height!==D.height?{reset:{rects:!0}}:{}})}}};function ia(n){return n.split("-")[0]}function Ug(n){return n.split("-")[1]}function Kg(n){return["top","bottom"].includes(ia(n))?"x":"y"}function qg(n){return n==="y"?"height":"width"}function ki(n,e,t){let{reference:s,floating:o}=n;const l=s.x+s.width/2-o.width/2,i=s.y+s.height/2-o.height/2,r=Kg(e),a=qg(r),c=s[a]/2-o[a]/2,u=ia(e),f=r==="x";let d;switch(u){case"top":d={x:l,y:s.y-o.height};break;case"bottom":d={x:l,y:s.y+s.height};break;case"right":d={x:s.x+s.width,y:i};break;case"left":d={x:s.x-o.width,y:i};break;default:d={x:s.x,y:s.y}}switch(Ug(e)){case"start":d[r]-=c*(t&&f?-1:1);break;case"end":d[r]+=c*(t&&f?-1:1);break}return d}const Wg=(n,e,t)=>vt(ga,null,function*(){const{placement:s="bottom",strategy:o="absolute",middleware:l=[],platform:i}=t,r=yield i.isRTL==null?void 0:i.isRTL(e);let a=yield i.getElementRects({reference:n,floating:e,strategy:o}),{x:c,y:u}=ki(a,s,r),f=s,d={},h=0;for(let g=0;g<l.length;g++){const{name:b,fn:$}=l[g],{x:w,y:E,data:D,reset:C}=yield $({x:c,y:u,initialPlacement:s,placement:f,strategy:o,middlewareData:d,rects:a,platform:i,elements:{reference:n,floating:e}});if(c=w!=null?w:c,u=E!=null?E:u,d=_n(et({},d),{[b]:et(et({},d[b]),D)}),C&&h<=50){h++,typeof C=="object"&&(C.placement&&(f=C.placement),C.rects&&(a=C.rects===!0?yield i.getElementRects({reference:n,floating:e,strategy:o}):C.rects),{x:c,y:u}=ki(a,f,r)),g=-1;continue}}return{x:c,y:u,placement:f,strategy:o,middlewareData:d}});function yi(n){return _n(et({},n),{top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height})}function ra(n){return n&&n.document&&n.location&&n.alert&&n.setInterval}function Yt(n){if(n==null)return window;if(!ra(n)){const e=n.ownerDocument;return e&&e.defaultView||window}return n}function cn(n){return Yt(n).getComputedStyle(n)}function Xt(n){return ra(n)?"":n?(n.nodeName||"").toLowerCase():""}function aa(){const n=navigator.userAgentData;return n!=null&&n.brands?n.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function zt(n){return n instanceof Yt(n).HTMLElement}function un(n){return n instanceof Yt(n).Element}function Gg(n){return n instanceof Yt(n).Node}function Ws(n){if(typeof ShadowRoot=="undefined")return!1;const e=Yt(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function eo(n){const{overflow:e,overflowX:t,overflowY:s}=cn(n);return/auto|scroll|overlay|hidden/.test(e+s+t)}function Zg(n){return["table","td","th"].includes(Xt(n))}function ca(n){const e=/firefox/i.test(aa()),t=cn(n);return t.transform!=="none"||t.perspective!=="none"||t.contain==="paint"||["transform","perspective"].includes(t.willChange)||e&&t.willChange==="filter"||e&&(t.filter?t.filter!=="none":!1)}function ua(){return!/^((?!chrome|android).)*safari/i.test(aa())}const Ti=Math.min,Vn=Math.max,Gs=Math.round;function Qt(n,e,t){var s,o,l,i;e===void 0&&(e=!1),t===void 0&&(t=!1);const r=n.getBoundingClientRect();let a=1,c=1;e&&zt(n)&&(a=n.offsetWidth>0&&Gs(r.width)/n.offsetWidth||1,c=n.offsetHeight>0&&Gs(r.height)/n.offsetHeight||1);const u=un(n)?Yt(n):window,f=!ua()&&t,d=(r.left+(f&&(s=(o=u.visualViewport)==null?void 0:o.offsetLeft)!=null?s:0))/a,h=(r.top+(f&&(l=(i=u.visualViewport)==null?void 0:i.offsetTop)!=null?l:0))/c,g=r.width/a,b=r.height/c;return{width:g,height:b,top:h,right:d+g,bottom:h+b,left:d,x:d,y:h}}function dn(n){return((Gg(n)?n.ownerDocument:n.document)||window.document).documentElement}function to(n){return un(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function fa(n){return Qt(dn(n)).left+to(n).scrollLeft}function Xg(n){const e=Qt(n);return Gs(e.width)!==n.offsetWidth||Gs(e.height)!==n.offsetHeight}function Qg(n,e,t){const s=zt(e),o=dn(e),l=Qt(n,s&&Xg(e),t==="fixed");let i={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(s||!s&&t!=="fixed")if((Xt(e)!=="body"||eo(o))&&(i=to(e)),zt(e)){const a=Qt(e,!0);r.x=a.x+e.clientLeft,r.y=a.y+e.clientTop}else o&&(r.x=fa(o));return{x:l.left+i.scrollLeft-r.x,y:l.top+i.scrollTop-r.y,width:l.width,height:l.height}}function da(n){return Xt(n)==="html"?n:n.assignedSlot||n.parentNode||(Ws(n)?n.host:null)||dn(n)}function xi(n){return!zt(n)||cn(n).position==="fixed"?null:n.offsetParent}function Yg(n){let e=da(n);for(Ws(e)&&(e=e.host);zt(e)&&!["html","body"].includes(Xt(e));){if(ca(e))return e;{const t=e.parentNode;e=Ws(t)?t.host:t}}return null}function yo(n){const e=Yt(n);let t=xi(n);for(;t&&Zg(t)&&cn(t).position==="static";)t=xi(t);return t&&(Xt(t)==="html"||Xt(t)==="body"&&cn(t).position==="static"&&!ca(t))?e:t||Yg(n)||e}function Si(n){if(zt(n))return{width:n.offsetWidth,height:n.offsetHeight};const e=Qt(n);return{width:e.width,height:e.height}}function Jg(n){let{rect:e,offsetParent:t,strategy:s}=n;const o=zt(t),l=dn(t);if(t===l)return e;let i={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if((o||!o&&s!=="fixed")&&((Xt(t)!=="body"||eo(l))&&(i=to(t)),zt(t))){const a=Qt(t,!0);r.x=a.x+t.clientLeft,r.y=a.y+t.clientTop}return _n(et({},e),{x:e.x-i.scrollLeft+r.x,y:e.y-i.scrollTop+r.y})}function Vg(n,e){const t=Yt(n),s=dn(n),o=t.visualViewport;let l=s.clientWidth,i=s.clientHeight,r=0,a=0;if(o){l=o.width,i=o.height;const c=ua();(c||!c&&e==="fixed")&&(r=o.offsetLeft,a=o.offsetTop)}return{width:l,height:i,x:r,y:a}}function e_(n){var e;const t=dn(n),s=to(n),o=(e=n.ownerDocument)==null?void 0:e.body,l=Vn(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Vn(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let r=-s.scrollLeft+fa(n);const a=-s.scrollTop;return cn(o||t).direction==="rtl"&&(r+=Vn(t.clientWidth,o?o.clientWidth:0)-l),{width:l,height:i,x:r,y:a}}function pa(n){const e=da(n);return["html","body","#document"].includes(Xt(e))?n.ownerDocument.body:zt(e)&&eo(e)?e:pa(e)}function Zs(n,e){var t;e===void 0&&(e=[]);const s=pa(n),o=s===((t=n.ownerDocument)==null?void 0:t.body),l=Yt(s),i=o?[l].concat(l.visualViewport||[],eo(s)?s:[]):s,r=e.concat(i);return o?r:r.concat(Zs(i))}function t_(n,e){const t=e.getRootNode==null?void 0:e.getRootNode();if(n.contains(e))return!0;if(t&&Ws(t)){let s=e;do{if(s&&n===s)return!0;s=s.parentNode||s.host}while(s)}return!1}function n_(n,e){const t=Qt(n,!1,e==="fixed"),s=t.top+n.clientTop,o=t.left+n.clientLeft;return{top:s,left:o,x:o,y:s,right:o+n.clientWidth,bottom:s+n.clientHeight,width:n.clientWidth,height:n.clientHeight}}function Ei(n,e,t){return e==="viewport"?yi(Vg(n,t)):un(e)?n_(e,t):yi(e_(dn(n)))}function s_(n){const e=Zs(n),s=["absolute","fixed"].includes(cn(n).position)&&zt(n)?yo(n):n;return un(s)?e.filter(o=>un(o)&&t_(o,s)&&Xt(o)!=="body"):[]}function o_(n){let{element:e,boundary:t,rootBoundary:s,strategy:o}=n;const i=[...t==="clippingAncestors"?s_(e):[].concat(t),s],r=i[0],a=i.reduce((c,u)=>{const f=Ei(e,u,o);return c.top=Vn(f.top,c.top),c.right=Ti(f.right,c.right),c.bottom=Ti(f.bottom,c.bottom),c.left=Vn(f.left,c.left),c},Ei(e,r,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}const l_={getClippingRect:o_,convertOffsetParentRelativeRectToViewportRelativeRect:Jg,isElement:un,getDimensions:Si,getOffsetParent:yo,getDocumentElement:dn,getElementRects:n=>{let{reference:e,floating:t,strategy:s}=n;return{reference:Qg(e,yo(t),s),floating:_n(et({},Si(t)),{x:0,y:0})}},getClientRects:n=>Array.from(n.getClientRects()),isRTL:n=>cn(n).direction==="rtl"};function i_(n,e,t,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:l=!0,elementResize:i=!0,animationFrame:r=!1}=s,a=o&&!r,c=l&&!r,u=a||c?[...un(n)?Zs(n):[],...Zs(e)]:[];u.forEach(b=>{a&&b.addEventListener("scroll",t,{passive:!0}),c&&b.addEventListener("resize",t)});let f=null;if(i){let b=!0;f=new ResizeObserver(()=>{b||t(),b=!1}),un(n)&&!r&&f.observe(n),f.observe(e)}let d,h=r?Qt(n):null;r&&g();function g(){const b=Qt(n);h&&(b.x!==h.x||b.y!==h.y||b.width!==h.width||b.height!==h.height)&&t(),h=b,d=requestAnimationFrame(g)}return t(),()=>{var b;u.forEach($=>{a&&$.removeEventListener("scroll",t),c&&$.removeEventListener("resize",t)}),(b=f)==null||b.disconnect(),f=null,r&&cancelAnimationFrame(d)}}const r_=(n,e,t)=>Wg(n,e,et({platform:l_},t));function no(n){const e={enable:!1,options:void 0,cleanup:null},t={reference:null,floating:null,options:void 0};s(n);function s(c){c===!0?(e.enable=!0,o()):c===!1?(l(),e.enable=!1):(o(),e.enable=!0,e.options=c)}function o(){l(),t.reference&&t.floating&&e.enable&&(e.cleanup=i_(t.reference,t.floating,i,e.options))}function l(){e.cleanup!=null&&(e.cleanup(),e.cleanup=null)}function i(){return vt(this,null,function*(){if(t.reference&&t.floating){const{reference:c,floating:u,options:f}=t,d=yield r_(c,u,f);Object.assign(u.style,{position:d.strategy,left:`${d.x}px`,top:`${d.y}px`}),f!=null&&f.callback&&f.callback(d,{reference:c,floating:u})}})}function r(c){return t.reference=c,e.enable?o():i(),{destroy(){l(),t.reference=null}}}function a(c,u){return t.floating=c,t.options=u,e.enable?o():i(),{update(f){l(),t.options=f,e.enable?o():i()},destroy(){l(),t.floating=null,t.options=void 0}}}return[r,a,s]}function is(n,e){let t,s;[t,s]=e!=null?e:[];function o(i){t&&n.contains(i.target)&&t(i)}function l(i){s&&!n.contains(i.relatedTarget)&&s(i)}return n.addEventListener("focusin",o),n.addEventListener("focusout",l),{update(i){[t,s]=i!=null?i:[]},destroy(){n.removeEventListener("focusout",l),n.removeEventListener("focusin",o)}}}function Ai(n){let e,t,s,o,l,i,r,a,c,u,f,d;function h(w){n[5](w)}let g={class:"h-48 p-3",style:"--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"};n[0]!==void 0&&(g.color=n[0]),t=new Jr({props:g}),Qe.push(()=>an(t,"color",h));function b(w){n[6](w)}let $={class:"p-3 text-sm"};return n[0]!==void 0&&($.color=n[0]),r=new Vr({props:$}),Qe.push(()=>an(r,"color",b)),{c(){e=_("div"),R(t.$$.fragment),o=x(),l=_("div"),i=x(),R(r.$$.fragment),m(l,"class","border-t"),m(e,"class","absolute w-[240px] border rounded-lg bg-white shadow-lg")},m(w,E){y(w,e,E),P(t,e,null),p(e,o),p(e,l),p(e,i),P(r,e,null),u=!0,f||(d=tt(n[3].call(null,e,{placement:"bottom-start",middleware:[Js(),Vs(8)]})),f=!0)},p(w,E){const D={};!s&&E&1&&(s=!0,D.color=w[0],wn(()=>s=!1)),t.$set(D);const C={};!a&&E&1&&(a=!0,C.color=w[0],wn(()=>a=!1)),r.$set(C)},i(w){u||(T(t.$$.fragment,w),T(r.$$.fragment,w),w&&wt(()=>{c||(c=rn(e,Kn,{},!0)),c.run(1)}),u=!0)},o(w){S(t.$$.fragment,w),S(r.$$.fragment,w),w&&(c||(c=rn(e,Kn,{},!1)),c.run(0)),u=!1},d(w){w&&k(e),N(t),N(r),w&&c&&c.end(),f=!1,d()}}}function a_(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O,L,I,j,z,U,Z,X,ie,V=n[1]&&Ai(n);return L=new qo({props:{class:"mt-4"}}),L.$on("color",n[8]),U=new dt({props:{code:`<script lang="ts">
<\/script>

<section class="prose max-w-none my-4">
</section>

<style lang="postcss">
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML=`This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a> and
    <a href="/focus-action"><code>@apsc/flocus-action</code></a>`,s=x(),o=_("div"),l=_("div"),i=_("div"),i.textContent="Click this button to pick a color",r=x(),a=_("div"),c=_("button"),u=_("span"),f=x(),V&&V.c(),h=x(),g=_("div"),b=_("div"),$=F("Current color: "),w=_("code"),E=F(n[0]),D=x(),C=_("div"),M=_("div"),O=x(),R(L.$$.fragment),I=x(),j=_("h3"),j.textContent="Code",z=x(),R(U.$$.fragment),m(t,"class","w-fit mx-auto mb-4"),m(u,"class","block border h-[22px] w-[10ch] bg-chess"),ot(u,"background","linear-gradient(to right, "+n[0]+" 0, "+n[0]+" 100%), var(--bg-chess-background)"),m(c,"class","input py-1"),m(l,"class","basis-1/2"),m(w,"class","uppercase"),m(M,"class","h-[1.5em] bg-chess"),ot(M,"background","linear-gradient(to right, "+n[0]+" 0, "+n[0]+" 100%), var(--bg-chess-background)"),m(C,"class","p-2 border rounded-md"),m(g,"class","basis-1/2"),m(o,"class","flex gap-8"),m(e,"class","prose max-w-none my-4")},m(H,G){y(H,e,G),p(e,t),p(e,s),p(e,o),p(o,l),p(l,i),p(l,r),p(l,a),p(a,c),p(c,u),p(a,f),V&&V.m(a,null),p(o,h),p(o,g),p(g,b),p(b,$),p(b,w),p(w,E),p(g,D),p(g,C),p(C,M),p(g,O),P(L,g,null),p(e,I),p(e,j),p(e,z),P(U,e,null),Z=!0,X||(ie=[tt(n[2].call(null,c)),Y(c,"click",n[4]),tt(d=is.call(null,a,[void 0,n[7]]))],X=!0)},p(H,[G]){(!Z||G&1)&&ot(u,"background","linear-gradient(to right, "+H[0]+" 0, "+H[0]+" 100%), var(--bg-chess-background)"),H[1]?V?(V.p(H,G),G&2&&T(V,1)):(V=Ai(H),V.c(),T(V,1),V.m(a,null)):V&&(ye(),S(V,1,1,()=>{V=null}),Te()),d&&ct(d.update)&&G&2&&d.update.call(null,[void 0,H[7]]),(!Z||G&1)&&Oe(E,H[0]),(!Z||G&1)&&ot(M,"background","linear-gradient(to right, "+H[0]+" 0, "+H[0]+" 100%), var(--bg-chess-background)")},i(H){Z||(T(V),T(L.$$.fragment,H),T(U.$$.fragment,H),Z=!0)},o(H){S(V),S(L.$$.fragment,H),S(U.$$.fragment,H),Z=!1},d(H){H&&k(e),V&&V.d(),N(L),N(U),X=!1,Ue(ie)}}}function c_(n,e,t){const[s,o]=no(!0);let l="#f70",i=!1;const r=()=>t(1,i=!i);function a(d){l=d,t(0,l)}function c(d){l=d,t(0,l)}return[l,i,s,o,r,a,c,()=>t(1,i=!1),({detail:d})=>t(0,l=d)]}class u_ extends se{constructor(e){super(),ne(this,e,c_,a_,J,{})}}const{document:Ci}=fn;function f_(n){let e;return{c(){e=F("API")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function d_(n){let e;return{c(){e=F("ColorPicker example")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function p_(n){let e;return{c(){e=F("ColorEdit example")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function h_(n){let e;return{c(){e=F("Color input Example")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function m_(n){let e,t,s,o,l,i,r,a;return e=new ke({props:{$$slots:{default:[f_]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[d_]},$$scope:{ctx:n}}}),l=new ke({props:{$$slots:{default:[p_]},$$scope:{ctx:n}}}),r=new ke({props:{$$slots:{default:[h_]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment)},m(c,u){P(e,c,u),y(c,t,u),P(s,c,u),y(c,o,u),P(l,c,u),y(c,i,u),P(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),l.$set(h);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),r.$set(g)},i(c){a||(T(e.$$.fragment,c),T(s.$$.fragment,c),T(l.$$.fragment,c),T(r.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(s.$$.fragment,c),S(l.$$.fragment,c),S(r.$$.fragment,c),a=!1},d(c){N(e,c),c&&k(t),N(s,c),c&&k(o),N(l,c),c&&k(i),N(r,c)}}}function g_(n){let e,t;return e=new Lm({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function __(n){let e,t;return e=new Cg({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function b_(n){let e,t;return e=new Rg({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function $_(n){let e,t;return e=new u_({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function v_(n){let e,t,s,o,l,i,r,a,c,u;return e=new yt({props:{$$slots:{default:[m_]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[g_]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[__]},$$scope:{ctx:n}}}),r=new we({props:{$$slots:{default:[b_]},$$scope:{ctx:n}}}),c=new we({props:{$$slots:{default:[$_]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment),a=x(),R(c.$$.fragment)},m(f,d){P(e,f,d),y(f,t,d),P(s,f,d),y(f,o,d),P(l,f,d),y(f,i,d),P(r,f,d),y(f,a,d),P(c,f,d),u=!0},p(f,d){const h={};d&1&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),s.$set(g);const b={};d&1&&(b.$$scope={dirty:d,ctx:f}),l.$set(b);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),r.$set($);const w={};d&1&&(w.$$scope={dirty:d,ctx:f}),c.$set(w)},i(f){u||(T(e.$$.fragment,f),T(s.$$.fragment,f),T(l.$$.fragment,f),T(r.$$.fragment,f),T(c.$$.fragment,f),u=!0)},o(f){S(e.$$.fragment,f),S(s.$$.fragment,f),S(l.$$.fragment,f),S(r.$$.fragment,f),S(c.$$.fragment,f),u=!1},d(f){N(e,f),f&&k(t),N(s,f),f&&k(o),N(l,f),f&&k(i),N(r,f),f&&k(a),N(c,f)}}}function w_(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b;return Ci.title=e=document.title.replace(/(•).*$/,"$1 Color"),g=new kt({props:{$$slots:{default:[v_]},$$scope:{ctx:n}}}),{c(){t=x(),s=_("section"),o=_("a"),o.textContent="Home",l=x(),i=_("h1"),i.textContent="A set of components for picking and editing colors",r=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>no inline styles</li> 
    <li>the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts" target="_blank" rel="noreferrer">utils.d.ts</a> for definitions of types and functions</li>`,h=x(),R(g.$$.fragment),m(o,"class","float-right"),m(o,"href","/"),m(i,"class","text-2xl"),m(c,"class","max-w-[4em]"),at(c.src,u=mt)||m(c,"src",u),m(c,"alt","NPM logo"),m(a,"class","float-right"),m(a,"href","https://www.npmjs.com/package/@apsc/color"),m(a,"target","_blank"),m(a,"rel","noreferrer"),m(d,"class","leading-6 mb-8"),m(s,"class","prose max-w-none my-4")},m($,w){y($,t,w),y($,s,w),p(s,o),p(s,l),p(s,i),p(s,r),p(s,a),p(a,c),p(s,f),p(s,d),p(s,h),P(g,s,null),b=!0},p($,[w]){(!b||w&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Color"))&&(Ci.title=e);const E={};w&1&&(E.$$scope={dirty:w,ctx:$}),g.$set(E)},i($){b||(T(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&k(t),$&&k(s),N(g)}}}let k_=class extends se{constructor(e){super(),ne(this,e,null,w_,J,{})}};const Pi=`# [Floating UI](https://floating-ui.com/) action for \`use\` Svelte directive

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
`;function y_(n){let e,t,s;return t=new Sn({props:{source:Pi.slice(Pi.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),m(e,"class","documentation")},m(o,l){y(o,e,l),P(t,e,null),s=!0},p:re,i(o){s||(T(t.$$.fragment,o),s=!0)},o(o){S(t.$$.fragment,o),s=!1},d(o){o&&k(e),N(t)}}}let T_=class extends se{constructor(e){super(),ne(this,e,null,y_,J,{})}};function Ni(n,e,t){const s=n.slice();return s[20]=e[t],s}function Ri(n,e,t){const s=n.slice();return s[23]=e[t],s}function Mi(n){let e,t=n[23]+"",s;return{c(){e=_("option"),s=F(t),e.__value=n[23],e.value=e.__value},m(o,l){y(o,e,l),p(e,s)},p:re,d(o){o&&k(e)}}}function Oi(n){let e,t=n[20]+"",s;return{c(){e=_("option"),s=F(t),e.__value=n[12][n[20]],e.value=e.__value},m(o,l){y(o,e,l),p(e,s)},p:re,d(o){o&&k(e)}}}function Ii(n){let e,t,s,o,l,i,r,a;return{c(){e=_("div"),t=_("div"),s=F(`
        Lorem ipsum dolor sit amet consectetur adipisicing elit`),m(t,"class","arrow svelte-1b5318a"),m(e,"class","tooltip not-prose svelte-1b5318a")},m(c,u){y(c,e,u),p(e,t),n[19](t),p(e,s),i=!0,r||(a=tt(o=n[9].call(null,e,{placement:n[5],middleware:n[6],callback:n[10]})),r=!0)},p(c,u){o&&ct(o.update)&&u&96&&o.update.call(null,{placement:c[5],middleware:c[6],callback:c[10]})},i(c){i||(c&&wt(()=>{l||(l=rn(e,n[7],{},!0)),l.run(1)}),i=!0)},o(c){c&&(l||(l=rn(e,n[7],{},!1)),l.run(0)),i=!1},d(c){c&&k(e),n[19](null),c&&l&&l.end(),r=!1,a()}}}function x_(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O,L,I,j,z,U,Z,X,ie,V=n[4]?"hide":"show",H,G,ee,fe,be,ge,Le,Ge,ve,_e=n[11],ae=[];for(let Q=0;Q<_e.length;Q+=1)ae[Q]=Mi(Ri(n,_e,Q));let Pe=Object.keys(n[12]),ce=[];for(let Q=0;Q<Pe.length;Q+=1)ce[Q]=Oi(Ni(n,Pe,Q));let $e=n[4]&&Ii(n);return ge=new dt({props:{code:`<script lang="ts"
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
          placement: '${n[5]}',
          middleware,
          callback: adjustArrow
        }}
        ${n[7]!=null?`transition:${n[7].name}|local`:""}
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
</style>`}}),{c(){e=_("section"),t=_("div"),s=_("label"),o=_("span"),o.textContent="placement",l=x(),i=_("select");for(let Q=0;Q<ae.length;Q+=1)ae[Q].c();r=x(),a=_("label"),c=_("input"),u=x(),f=_("span"),f.textContent="flip",d=x(),h=_("label"),g=_("span"),g.textContent="offset",b=x(),$=_("input"),w=x(),E=_("label"),D=_("span"),D.textContent="size padding",C=x(),M=_("input"),O=x(),L=_("label"),I=_("span"),I.textContent="transition",j=x(),z=_("select");for(let Q=0;Q<ce.length;Q+=1)ce[Q].c();U=x(),Z=_("div"),X=_("button"),ie=F("Click me to "),H=F(V),G=x(),$e&&$e.c(),ee=x(),fe=_("h3"),fe.textContent="Code",be=x(),R(ge.$$.fragment),m(i,"class","input"),n[5]===void 0&&wt(()=>n[13].call(i)),m(c,"type","checkbox"),m(a,"class","whitespace-nowrap"),m($,"type","number"),m($,"class","input w-[8ch]"),m(M,"type","number"),m(M,"class","input w-[8ch]"),m(z,"class","input"),n[7]===void 0&&wt(()=>n[17].call(z)),m(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),m(X,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),m(Z,"class","h-64 flex items-center justify-center border"),m(e,"class","prose max-w-none my-4")},m(Q,Ee){y(Q,e,Ee),p(e,t),p(t,s),p(s,o),p(s,l),p(s,i);for(let De=0;De<ae.length;De+=1)ae[De].m(i,null);Dt(i,n[5]),p(t,r),p(t,a),p(a,c),c.checked=n[2],p(a,u),p(a,f),p(t,d),p(t,h),p(h,g),p(h,b),p(h,$),gt($,n[1]),p(t,w),p(t,E),p(E,D),p(E,C),p(E,M),gt(M,n[3]),p(t,O),p(t,L),p(L,I),p(L,j),p(L,z);for(let De=0;De<ce.length;De+=1)ce[De].m(z,null);Dt(z,n[7]),p(e,U),p(e,Z),p(Z,X),p(X,ie),p(X,H),p(Z,G),$e&&$e.m(Z,null),p(e,ee),p(e,fe),p(e,be),P(ge,e,null),Le=!0,Ge||(ve=[Y(i,"change",n[13]),Y(c,"change",n[14]),Y($,"input",n[15]),Y(M,"input",n[16]),Y(z,"change",n[17]),tt(n[8].call(null,X)),Y(X,"click",n[18])],Ge=!0)},p(Q,[Ee]){if(Ee&2048){_e=Q[11];let Ce;for(Ce=0;Ce<_e.length;Ce+=1){const Re=Ri(Q,_e,Ce);ae[Ce]?ae[Ce].p(Re,Ee):(ae[Ce]=Mi(Re),ae[Ce].c(),ae[Ce].m(i,null))}for(;Ce<ae.length;Ce+=1)ae[Ce].d(1);ae.length=_e.length}if(Ee&2080&&Dt(i,Q[5]),Ee&4&&(c.checked=Q[2]),Ee&2&&At($.value)!==Q[1]&&gt($,Q[1]),Ee&8&&At(M.value)!==Q[3]&&gt(M,Q[3]),Ee&4096){Pe=Object.keys(Q[12]);let Ce;for(Ce=0;Ce<Pe.length;Ce+=1){const Re=Ni(Q,Pe,Ce);ce[Ce]?ce[Ce].p(Re,Ee):(ce[Ce]=Oi(Re),ce[Ce].c(),ce[Ce].m(z,null))}for(;Ce<ce.length;Ce+=1)ce[Ce].d(1);ce.length=Pe.length}Ee&4224&&Dt(z,Q[7]),(!Le||Ee&16)&&V!==(V=Q[4]?"hide":"show")&&Oe(H,V),Q[4]?$e?($e.p(Q,Ee),Ee&16&&T($e,1)):($e=Ii(Q),$e.c(),T($e,1),$e.m(Z,null)):$e&&(ye(),S($e,1,1,()=>{$e=null}),Te());const De={};Ee&160&&(De.code=`<script lang="ts"
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
          placement: '${Q[5]}',
          middleware,
          callback: adjustArrow
        }}
        ${Q[7]!=null?`transition:${Q[7].name}|local`:""}
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
</style>`),ge.$set(De)},i(Q){Le||(T($e),T(ge.$$.fragment,Q),Le=!0)},o(Q){S($e),S(ge.$$.fragment,Q),Le=!1},d(Q){Q&&k(e),Je(ae,Q),Je(ce,Q),$e&&$e.d(),N(ge),Ge=!1,Ue(ve)}}}function S_(n,e,t){const[s,o]=no(!0);let l,i=!1;function r(L){const{placement:I,middlewareData:j}=L;if(j.arrow){const{x:z,y:U}=j.arrow,Z={top:"bottom",right:"left",bottom:"top",left:"right"}[I.split("-")[0]];Z&&Object.assign(l.style,{left:z!=null?`${z}px`:"",top:U!=null?`${U}px`:"",right:"",bottom:"",[Z]:"-6px"})}}const a=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let c=a[0],u=16,f=!0,d=16,h=[],g;const b={slide:Kn,scale:_m,fade:gm,blur:mm,none:()=>({delay:0,duration:0})};function $(){c=es(this),t(5,c),t(11,a)}function w(){f=this.checked,t(2,f)}function E(){u=At(this.value),t(1,u)}function D(){d=At(this.value),t(3,d)}function C(){g=es(this),t(7,g),t(12,b)}const M=()=>t(4,i=!i);function O(L){Qe[L?"unshift":"push"](()=>{l=L,t(0,l)})}return n.$$.update=()=>{n.$$.dirty&15&&t(6,h=[Vs(u),f&&Js(),la({padding:d,apply({availableWidth:L,availableHeight:I,elements:j}){Object.assign(j.floating.style,{maxWidth:`${L}px`,maxHeight:`${I}px`})}}),l&&oa({element:l})].filter(L=>!!L))},[l,u,f,d,i,c,h,g,s,o,r,a,b,$,w,E,D,C,M,O]}class E_ extends se{constructor(e){super(),ne(this,e,S_,x_,J,{})}}function Li(n,e,t){const s=n.slice();return s[18]=e[t],s}function Di(n){let e,t=n[18]+"",s;return{c(){e=_("option"),s=F(t),e.__value=n[18],e.value=e.__value},m(o,l){y(o,e,l),p(e,s)},p:re,d(o){o&&k(e)}}}function A_(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O,L,I,j,z=n[1]?"hide":"show",U,Z,X,ie,V,H,G,ee,fe,be,ge,Le,Ge,ve=n[10],_e=[];for(let ae=0;ae<ve.length;ae+=1)_e[ae]=Di(Li(n,ve,ae));return be=new dt({props:{code:`<script lang="ts"
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
        placement: '${n[5]}',
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
</style>`}}),{c(){e=_("section"),t=_("div"),s=_("label"),o=_("span"),o.textContent="placement",l=x(),i=_("select");for(let ae=0;ae<_e.length;ae+=1)_e[ae].c();r=x(),a=_("label"),c=_("input"),u=x(),f=_("span"),f.textContent="flip",d=x(),h=_("label"),g=_("span"),g.textContent="offset",b=x(),$=_("input"),w=x(),E=_("label"),D=_("span"),D.textContent="size padding",C=x(),M=_("input"),O=x(),L=_("div"),I=_("button"),j=F("Click me to "),U=F(z),Z=x(),X=_("div"),ie=_("div"),V=F(`
      Lorem ipsum dolor sit amet consectetur adipisicing elit`),G=x(),ee=_("h3"),ee.textContent="Code",fe=x(),R(be.$$.fragment),m(i,"class","input"),n[5]===void 0&&wt(()=>n[11].call(i)),m(c,"type","checkbox"),m(a,"class","whitespace-nowrap"),m($,"type","number"),m($,"class","input w-[8ch]"),m(M,"type","number"),m(M,"class","input w-[8ch]"),m(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),m(I,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),m(ie,"class","arrow svelte-1lvd4kc"),m(X,"class","tooltip not-prose svelte-1lvd4kc"),Ye(X,"in",n[1]),Ye(X,"out",!n[1]),m(L,"class","h-64 flex items-center justify-center border"),m(e,"class","prose max-w-none my-4")},m(ae,Pe){y(ae,e,Pe),p(e,t),p(t,s),p(s,o),p(s,l),p(s,i);for(let ce=0;ce<_e.length;ce+=1)_e[ce].m(i,null);Dt(i,n[5]),p(t,r),p(t,a),p(a,c),c.checked=n[3],p(a,u),p(a,f),p(t,d),p(t,h),p(h,g),p(h,b),p(h,$),gt($,n[2]),p(t,w),p(t,E),p(E,D),p(E,C),p(E,M),gt(M,n[4]),p(e,O),p(e,L),p(L,I),p(I,j),p(I,U),p(L,Z),p(L,X),p(X,ie),n[16](ie),p(X,V),p(e,G),p(e,ee),p(e,fe),P(be,e,null),ge=!0,Le||(Ge=[Y(i,"change",n[11]),Y(c,"change",n[12]),Y($,"input",n[13]),Y(M,"input",n[14]),tt(n[7].call(null,I)),Y(I,"click",n[15]),tt(H=n[8].call(null,X,{placement:n[5],middleware:n[6],callback:n[9]}))],Le=!0)},p(ae,[Pe]){if(Pe&1024){ve=ae[10];let $e;for($e=0;$e<ve.length;$e+=1){const Q=Li(ae,ve,$e);_e[$e]?_e[$e].p(Q,Pe):(_e[$e]=Di(Q),_e[$e].c(),_e[$e].m(i,null))}for(;$e<_e.length;$e+=1)_e[$e].d(1);_e.length=ve.length}Pe&1056&&Dt(i,ae[5]),Pe&8&&(c.checked=ae[3]),Pe&4&&At($.value)!==ae[2]&&gt($,ae[2]),Pe&16&&At(M.value)!==ae[4]&&gt(M,ae[4]),(!ge||Pe&2)&&z!==(z=ae[1]?"hide":"show")&&Oe(U,z),H&&ct(H.update)&&Pe&96&&H.update.call(null,{placement:ae[5],middleware:ae[6],callback:ae[9]}),(!ge||Pe&2)&&Ye(X,"in",ae[1]),(!ge||Pe&2)&&Ye(X,"out",!ae[1]);const ce={};Pe&32&&(ce.code=`<script lang="ts"
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
        placement: '${ae[5]}',
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
</style>`),be.$set(ce)},i(ae){ge||(T(be.$$.fragment,ae),ge=!0)},o(ae){S(be.$$.fragment,ae),ge=!1},d(ae){ae&&k(e),Je(_e,ae),n[16](null),N(be),Le=!1,Ue(Ge)}}}function C_(n,e,t){const[s,o,l]=no(!0);let i,r=!1;function a(M){const{placement:O,middlewareData:L}=M;if(L.arrow){const{x:I,y:j}=L.arrow,z={top:"bottom",right:"left",bottom:"top",left:"right"}[O.split("-")[0]];z&&Object.assign(i.style,{left:I!=null?`${I}px`:"",top:j!=null?`${j}px`:"",right:"",bottom:"",[z]:"-6px"})}}const c=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let u=c[0],f=16,d=!0,h=16,g=[];function b(){u=es(this),t(5,u),t(10,c)}function $(){d=this.checked,t(3,d)}function w(){f=At(this.value),t(2,f)}function E(){h=At(this.value),t(4,h)}const D=()=>t(1,r=!r);function C(M){Qe[M?"unshift":"push"](()=>{i=M,t(0,i)})}return n.$$.update=()=>{n.$$.dirty&2&&l(r),n.$$.dirty&29&&t(6,g=[Vs(f),d&&Js(),la({padding:h,apply({availableWidth:M,availableHeight:O,elements:L}){Object.assign(L.floating.style,{maxWidth:`${M}px`,maxHeight:`${O}px`})}}),i&&oa({element:i})].filter(M=>!!M))},[i,r,f,d,h,u,g,s,o,a,c,b,$,w,E,D,C]}class P_ extends se{constructor(e){super(),ne(this,e,C_,A_,J,{})}}const{document:Bi}=fn;function N_(n){let e;return{c(){e=F("API")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function R_(n){let e;return{c(){e=F("Transition JS demo")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function M_(n){let e;return{c(){e=F("Transition CSS demo")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function O_(n){let e,t,s,o,l,i;return e=new ke({props:{$$slots:{default:[N_]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[R_]},$$scope:{ctx:n}}}),l=new ke({props:{$$slots:{default:[M_]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment)},m(r,a){P(e,r,a),y(r,t,a),P(s,r,a),y(r,o,a),P(l,r,a),i=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),s.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i(r){i||(T(e.$$.fragment,r),T(s.$$.fragment,r),T(l.$$.fragment,r),i=!0)},o(r){S(e.$$.fragment,r),S(s.$$.fragment,r),S(l.$$.fragment,r),i=!1},d(r){N(e,r),r&&k(t),N(s,r),r&&k(o),N(l,r)}}}function I_(n){let e,t;return e=new T_({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function L_(n){let e,t;return e=new E_({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function D_(n){let e,t;return e=new P_({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function B_(n){let e,t,s,o,l,i,r,a;return e=new yt({props:{$$slots:{default:[O_]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[I_]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[L_]},$$scope:{ctx:n}}}),r=new we({props:{$$slots:{default:[D_]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment)},m(c,u){P(e,c,u),y(c,t,u),P(s,c,u),y(c,o,u),P(l,c,u),y(c,i,u),P(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),l.$set(h);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),r.$set(g)},i(c){a||(T(e.$$.fragment,c),T(s.$$.fragment,c),T(l.$$.fragment,c),T(r.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(s.$$.fragment,c),S(l.$$.fragment,c),S(r.$$.fragment,c),a=!1},d(c){N(e,c),c&&k(t),N(s,c),c&&k(o),N(l,c),c&&k(i),N(r,c)}}}function F_(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b;return Bi.title=e=document.title.replace(/(•).*$/,"$1 Floating UI action"),g=new kt({props:{$$slots:{default:[B_]},$$scope:{ctx:n}}}),{c(){t=x(),s=_("section"),o=_("a"),o.textContent="Home",l=x(),i=_("h1"),i.textContent="Action to use Floating UI",r=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>allows you to use both Svelte transitions and CSS transitions</li> 
    <li>dependence <a href="https://github.com/floating-ui/floating-ui" target="_blank" rel="noreferrer">@floating-ui/dom</a></li>`,h=x(),R(g.$$.fragment),m(o,"class","float-right"),m(o,"href","/"),m(i,"class","text-2xl"),m(c,"class","max-w-[4em]"),at(c.src,u=mt)||m(c,"src",u),m(c,"alt","NPM logo"),m(a,"class","float-right"),m(a,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),m(a,"target","_blank"),m(a,"rel","noreferrer"),m(d,"class","leading-6 mb-8"),m(s,"class","prose max-w-none my-4")},m($,w){y($,t,w),y($,s,w),p(s,o),p(s,l),p(s,i),p(s,r),p(s,a),p(a,c),p(s,f),p(s,d),p(s,h),P(g,s,null),b=!0},p($,[w]){(!b||w&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Floating UI action"))&&(Bi.title=e);const E={};w&1&&(E.$$scope={dirty:w,ctx:$}),g.$set(E)},i($){b||(T(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&k(t),$&&k(s),N(g)}}}let z_=class extends se{constructor(e){super(),ne(this,e,null,F_,J,{})}};const Fi=`# Action to control \`focusin\` and \`focusout\` for Svelte directive \`use\`

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
`;function H_(n){let e,t,s;return t=new Sn({props:{source:Fi.slice(Fi.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),m(e,"class","documentation")},m(o,l){y(o,e,l),P(t,e,null),s=!0},p:re,i(o){s||(T(t.$$.fragment,o),s=!0)},o(o){S(t.$$.fragment,o),s=!1},d(o){o&&k(e),N(t)}}}let j_=class extends se{constructor(e){super(),ne(this,e,null,H_,J,{})}};function U_(n){let e;return{c(){e=F(" ")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function K_(n){let e;return{c(){e=F("Try to close the dropdown block by clicking outside")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function q_(n){let e;return{c(){e=F("Select")},m(t,s){y(t,e,s)},p:re,d(t){t&&k(e)}}}function W_(n){let e,t,s;return{c(){e=F("Selected "),t=_("small"),s=F(n[3]),m(t,"class","font-semibold text-gray-400")},m(o,l){y(o,e,l),y(o,t,l),p(t,s)},p(o,l){l&8&&Oe(s,o[3])},d(o){o&&k(e),o&&k(t)}}}function zi(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C;return{c(){e=_("div"),t=_("div"),t.textContent="Choose one of the items",s=x(),o=_("div"),l=_("label"),i=_("input"),r=x(),a=_("span"),a.textContent="Firts",c=x(),u=_("label"),f=_("input"),d=x(),h=_("span"),h.textContent="Second",g=x(),b=_("label"),$=_("input"),w=x(),E=_("span"),E.textContent="Third",m(t,"class","alert svelte-1hjb9pe"),Ye(t,"error",n[2]),m(i,"type","radio"),i.__value="Firts",i.value=i.__value,m(i,"name","item"),n[8][0].push(i),m(f,"type","radio"),f.__value="Second",f.value=f.__value,m(f,"name","item"),n[8][0].push(f),m($,"type","radio"),$.__value="Third",$.value=$.__value,m($,"name","item"),n[8][0].push($),m(o,"class","mt-2 flex gap-4 px-2"),m(e,"class","absolute border shadow-md rounded-md p-2 top-2 bg-white"),m(e,"tabindex","-1")},m(M,O){y(M,e,O),p(e,t),p(e,s),p(e,o),p(o,l),p(l,i),i.checked=i.__value===n[3],p(l,r),p(l,a),p(o,c),p(o,u),p(u,f),f.checked=f.__value===n[3],p(u,d),p(u,h),p(o,g),p(o,b),p(b,$),$.checked=$.__value===n[3],p(b,w),p(b,E),n[11](e),D||(C=[Y(i,"change",n[7]),Y(f,"change",n[9]),Y($,"change",n[10]),tt(is.call(null,e,[void 0,n[4]]))],D=!0)},p(M,O){O&4&&Ye(t,"error",M[2]),O&8&&(i.checked=i.__value===M[3]),O&8&&(f.checked=f.__value===M[3]),O&8&&($.checked=$.__value===M[3])},d(M){M&&k(e),n[8][0].splice(n[8][0].indexOf(i),1),n[8][0].splice(n[8][0].indexOf(f),1),n[8][0].splice(n[8][0].indexOf($),1),n[11](null),D=!1,Ue(C)}}}function G_(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w;function E(j,z){return j[1]&&!j[3]?K_:U_}let D=E(n),C=D(n);function M(j,z){return j[3]?W_:q_}let O=M(n),L=O(n),I=n[1]&&zi(n);return g=new dt({props:{code:`<script lang="ts"
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
`}}),{c(){e=_("section"),t=_("div"),C.c(),s=x(),o=_("div"),l=_("button"),L.c(),i=x(),r=_("button"),a=F("Reset"),c=x(),u=_("div"),I&&I.c(),f=x(),d=_("h3"),d.textContent="Code",h=x(),R(g.$$.fragment),m(t,"class","w-fit mx-auto mb-4"),m(l,"class","input w-[200px]"),m(r,"class","input"),r.disabled=n[1],m(u,"class","relative"),m(o,"class","w-fit mx-auto"),m(e,"class","prose max-w-none my-4")},m(j,z){y(j,e,z),p(e,t),C.m(t,null),p(e,s),p(e,o),p(o,l),L.m(l,null),p(o,i),p(o,r),p(r,a),p(o,c),p(o,u),I&&I.m(u,null),p(e,f),p(e,d),p(e,h),P(g,e,null),b=!0,$||(w=[Y(l,"click",n[5]),Y(r,"click",n[6])],$=!0)},p(j,[z]){D!==(D=E(j))&&(C.d(1),C=D(j),C&&(C.c(),C.m(t,null))),O===(O=M(j))&&L?L.p(j,z):(L.d(1),L=O(j),L&&(L.c(),L.m(l,null))),(!b||z&2)&&(r.disabled=j[1]),j[1]?I?I.p(j,z):(I=zi(j),I.c(),I.m(u,null)):I&&(I.d(1),I=null)},i(j){b||(T(g.$$.fragment,j),b=!0)},o(j){S(g.$$.fragment,j),b=!1},d(j){j&&k(e),C.d(),L.d(),I&&I.d(),N(g),$=!1,Ue(w)}}}function Z_(n,e,t){let s=!1,o=!1,l,i="";function r(){i?(t(1,s=!1),t(2,o=!1)):t(2,o=!0)}const a=[[]],c=()=>t(1,s=!0),u=()=>t(3,i="");function f(){i=this.__value,t(3,i)}function d(){i=this.__value,t(3,i)}function h(){i=this.__value,t(3,i)}function g(b){Qe[b?"unshift":"push"](()=>{l=b,t(0,l)})}return n.$$.update=()=>{n.$$.dirty&1&&l&&l.focus()},[l,s,o,i,r,c,u,f,a,d,h,g]}class X_ extends se{constructor(e){super(),ne(this,e,Z_,G_,J,{})}}function Hi(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M;return{c(){e=_("ul"),t=_("li"),s=_("button"),s.textContent="Open",o=x(),l=_("li"),i=_("button"),i.textContent="Close",r=x(),a=_("li"),c=_("button"),c.textContent="Upload",u=x(),f=_("li"),d=_("button"),d.textContent="Download",h=x(),g=_("li"),b=x(),$=_("li"),w=_("button"),w.textContent="About",m(s,"class","svelte-x2xhpk"),m(t,"class","svelte-x2xhpk"),m(i,"class","svelte-x2xhpk"),m(l,"class","svelte-x2xhpk"),m(c,"class","svelte-x2xhpk"),m(a,"class","svelte-x2xhpk"),m(d,"class","svelte-x2xhpk"),m(f,"class","svelte-x2xhpk"),m(g,"class","separator svelte-x2xhpk"),m(w,"class","svelte-x2xhpk"),m($,"class","svelte-x2xhpk"),m(e,"class","dropdown svelte-x2xhpk"),m(e,"tabindex","-1")},m(O,L){y(O,e,L),p(e,t),p(t,s),p(e,o),p(e,l),p(l,i),p(e,r),p(e,a),p(a,c),p(e,u),p(e,f),p(f,d),p(e,h),p(e,g),p(e,b),p(e,$),p($,w),D=!0,C||(M=[Y(s,"click",n[4]),Y(i,"click",n[5]),Y(c,"click",n[6]),Y(d,"click",n[7]),Y(w,"click",n[8]),tt(n[2].call(null,e,{placement:"bottom-start",middleware:[Js(),Vs(8)]}))],C=!0)},p:re,i(O){D||(O&&wt(()=>{E||(E=rn(e,Kn,{},!0)),E.run(1)}),D=!0)},o(O){O&&(E||(E=rn(e,Kn,{},!1)),E.run(0)),D=!1},d(O){O&&k(e),O&&E&&E.end(),C=!1,Ue(M)}}}function Q_(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b=n[0]&&Hi(n);return f=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a>',s=x(),o=_("div"),l=_("button"),l.textContent="Action",i=x(),b&&b.c(),a=x(),c=_("h3"),c.textContent="Code",u=x(),R(f.$$.fragment),m(t,"class","w-fit mx-auto mb-4"),m(l,"class","input"),m(o,"class","w-fit mx-auto"),m(e,"class","prose max-w-none my-4")},m($,w){y($,e,w),p(e,t),p(e,s),p(e,o),p(o,l),p(o,i),b&&b.m(o,null),p(e,a),p(e,c),p(e,u),P(f,e,null),d=!0,h||(g=[tt(n[1].call(null,l)),Y(l,"click",n[3]),tt(r=is.call(null,o,[void 0,n[9]]))],h=!0)},p($,[w]){$[0]?b?(b.p($,w),w&1&&T(b,1)):(b=Hi($),b.c(),T(b,1),b.m(o,null)):b&&(ye(),S(b,1,1,()=>{b=null}),Te()),r&&ct(r.update)&&w&1&&r.update.call(null,[void 0,$[9]])},i($){d||(T(b),T(f.$$.fragment,$),d=!0)},o($){S(b),S(f.$$.fragment,$),d=!1},d($){$&&k(e),b&&b.d(),N(f),h=!1,Ue(g)}}}function Y_(n,e,t){const[s,o,l]=no(!0);let i=!1;const r=()=>t(0,i=!0),a=()=>t(0,i=!1),c=()=>t(0,i=!1),u=()=>t(0,i=!1),f=()=>t(0,i=!1),d=()=>t(0,i=!1),h=()=>t(0,i=!1);return n.$$.update=()=>{n.$$.dirty&1&&l(i)},[i,s,o,r,a,c,u,f,d,h]}class J_ extends se{constructor(e){super(),ne(this,e,Y_,Q_,J,{})}}function V_(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D;return $=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.textContent="This example highlights a focused fieldset.",s=x(),o=_("div"),l=_("div"),i=_("fieldset"),i.innerHTML=`<legend class="svelte-c2p0zs">Your details</legend> 
        <label class="svelte-c2p0zs"><span>Name</span> 
          <input type="text" class="input svelte-c2p0zs"/></label> 
        <label class="svelte-c2p0zs"><span>Email</span> 
          <input type="text" class="input svelte-c2p0zs"/></label> 
        <label class="svelte-c2p0zs"><span>Phone</span> 
          <input type="text" class="input svelte-c2p0zs"/></label>`,a=x(),c=_("div"),c.innerHTML='<button type="button" class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8 svelte-c2p0zs">Submit</button>',u=x(),f=_("fieldset"),f.innerHTML=`<legend class="svelte-c2p0zs">Delivery address</legend> 
      <label class="svelte-c2p0zs"><span>Address</span> 
        <textarea rows="3" class="input svelte-c2p0zs"></textarea></label> 
      <label class="svelte-c2p0zs"><span>Postcode</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Country</span> 
        <input type="text" class="input svelte-c2p0zs"/></label>`,h=x(),g=_("h3"),g.textContent="Code",b=x(),R($.$$.fragment),m(t,"class","mb-8 pb-2 border-b text-center text-gray-500"),m(i,"class","svelte-c2p0zs"),Ye(i,"active",n[0]),m(c,"class","mt-8"),m(l,"class","basis-1/2"),m(f,"class","basis-1/2 svelte-c2p0zs"),Ye(f,"active",n[1]),m(o,"class","form svelte-c2p0zs"),m(e,"class","prose max-w-none my-4")},m(C,M){y(C,e,M),p(e,t),p(e,s),p(e,o),p(o,l),p(l,i),p(l,a),p(l,c),p(o,u),p(o,f),p(e,h),p(e,g),p(e,b),P($,e,null),w=!0,E||(D=[tt(r=is.call(null,i,[n[2],n[3]])),tt(d=is.call(null,f,[n[4],n[5]]))],E=!0)},p(C,[M]){r&&ct(r.update)&&M&1&&r.update.call(null,[C[2],C[3]]),(!w||M&1)&&Ye(i,"active",C[0]),d&&ct(d.update)&&M&2&&d.update.call(null,[C[4],C[5]]),(!w||M&2)&&Ye(f,"active",C[1])},i(C){w||(T($.$$.fragment,C),w=!0)},o(C){S($.$$.fragment,C),w=!1},d(C){C&&k(e),N($),E=!1,Ue(D)}}}function eb(n,e,t){let s=!1,o=!1;return[s,o,()=>t(0,s=!0),()=>t(0,s=!1),()=>t(1,o=!0),()=>t(1,o=!1)]}class tb extends se{constructor(e){super(),ne(this,e,eb,V_,J,{})}}const{document:ji}=fn;function nb(n){let e;return{c(){e=F("API")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function sb(n){let e;return{c(){e=F("Reqired demo")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function ob(n){let e;return{c(){e=F("Dropdown demo")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function lb(n){let e;return{c(){e=F("Style demo")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function ib(n){let e,t,s,o,l,i,r,a;return e=new ke({props:{$$slots:{default:[nb]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[sb]},$$scope:{ctx:n}}}),l=new ke({props:{$$slots:{default:[ob]},$$scope:{ctx:n}}}),r=new ke({props:{$$slots:{default:[lb]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment)},m(c,u){P(e,c,u),y(c,t,u),P(s,c,u),y(c,o,u),P(l,c,u),y(c,i,u),P(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),l.$set(h);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),r.$set(g)},i(c){a||(T(e.$$.fragment,c),T(s.$$.fragment,c),T(l.$$.fragment,c),T(r.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(s.$$.fragment,c),S(l.$$.fragment,c),S(r.$$.fragment,c),a=!1},d(c){N(e,c),c&&k(t),N(s,c),c&&k(o),N(l,c),c&&k(i),N(r,c)}}}function rb(n){let e,t;return e=new j_({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function ab(n){let e,t;return e=new X_({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function cb(n){let e,t;return e=new J_({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function ub(n){let e,t;return e=new tb({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function fb(n){let e,t,s,o,l,i,r,a,c,u;return e=new yt({props:{$$slots:{default:[ib]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[rb]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[ab]},$$scope:{ctx:n}}}),r=new we({props:{$$slots:{default:[cb]},$$scope:{ctx:n}}}),c=new we({props:{$$slots:{default:[ub]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment),a=x(),R(c.$$.fragment)},m(f,d){P(e,f,d),y(f,t,d),P(s,f,d),y(f,o,d),P(l,f,d),y(f,i,d),P(r,f,d),y(f,a,d),P(c,f,d),u=!0},p(f,d){const h={};d&1&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),s.$set(g);const b={};d&1&&(b.$$scope={dirty:d,ctx:f}),l.$set(b);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),r.$set($);const w={};d&1&&(w.$$scope={dirty:d,ctx:f}),c.$set(w)},i(f){u||(T(e.$$.fragment,f),T(s.$$.fragment,f),T(l.$$.fragment,f),T(r.$$.fragment,f),T(c.$$.fragment,f),u=!0)},o(f){S(e.$$.fragment,f),S(s.$$.fragment,f),S(l.$$.fragment,f),S(r.$$.fragment,f),S(c.$$.fragment,f),u=!1},d(f){N(e,f),f&&k(t),N(s,f),f&&k(o),N(l,f),f&&k(i),N(r,f),f&&k(a),N(c,f)}}}function db(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b;return ji.title=e=document.title.replace(/(•).*$/,"$1 Focus action"),g=new kt({props:{$$slots:{default:[fb]},$$scope:{ctx:n}}}),{c(){t=x(),s=_("section"),o=_("a"),o.textContent="Home",l=x(),i=_("h1"),i.innerHTML=`Action to control <code>focusin</code> and <code>focusout</code><br/>for directive
    <code>use</code>`,r=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>correctly detects loss of focus with <code>Tab</code></li>`,h=x(),R(g.$$.fragment),m(o,"class","float-right"),m(o,"href","/"),m(i,"class","text-2xl"),m(c,"class","max-w-[4em]"),at(c.src,u=mt)||m(c,"src",u),m(c,"alt","NPM logo"),m(a,"class","float-right"),m(a,"href","https://www.npmjs.com/package/@apsc/focus-action"),m(a,"target","_blank"),m(a,"rel","noreferrer"),m(d,"class","leading-6 mb-8"),m(s,"class","prose max-w-none my-4")},m($,w){y($,t,w),y($,s,w),p(s,o),p(s,l),p(s,i),p(s,r),p(s,a),p(a,c),p(s,f),p(s,d),p(s,h),P(g,s,null),b=!0},p($,[w]){(!b||w&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Focus action"))&&(ji.title=e);const E={};w&1&&(E.$$scope={dirty:w,ctx:$}),g.$set(E)},i($){b||(T(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&k(t),$&&k(s),N(g)}}}let pb=class extends se{constructor(e){super(),ne(this,e,null,db,J,{})}};const Ui=`# Action to call a function by keyboard shortcut for Svelte directive \`use\`

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
`;function hb(n){let e,t,s;return t=new Sn({props:{source:Ui.slice(Ui.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),m(e,"class","documentation")},m(o,l){y(o,e,l),P(t,e,null),s=!0},p:re,i(o){s||(T(t.$$.fragment,o),s=!0)},o(o){S(t.$$.fragment,o),s=!1},d(o){o&&k(e),N(t)}}}let mb=class extends se{constructor(e){super(),ne(this,e,null,hb,J,{})}};const ha={alt:"Alt",cmd:"Cmd",ctrl:"Ctrl",shift:"Shift",joinWith:" + ",hideKey:"never"};let so=ha;const gb=()=>({alphanumeric:/^Key([A-Z01-9])$/,alpha:/^Key([A-Z])$/,always:/^Key(.*)$/,never:/^(.*)$/})[so.hideKey];function _b(n){return{character:[16,17,18,91,93,224].indexOf(n.keyCode)!==-1?null:n.code.replace(gb(),"$1"),modifiers:{cmd:n.metaKey,ctrl:n.ctrlKey,alt:n.altKey,shift:n.shiftKey}}}function bb(n){const e=_b(n),s=Object.entries(e.modifiers).reduce((o,[l,i])=>(i&&o.push(so[l]),o),[]);return e.character&&s.push(e.character),s}function $b(n){return so=Object.assign(Object.assign({},ha),n)}const vb=n=>bb(n).join(so.joinWith);$b({joinWith:"+"});function Go(n,e){let{event:t,capture:s=!1,passive:o=!1,preventDefault:l=!1,stopImmediatePropagation:i=!1,stopPropagation:r=!1,fns:a}=e;function c(u){const f=vb(u);typeof a[f]=="function"&&(l&&u.preventDefault(),r&&u.stopPropagation(),i&&u.stopImmediatePropagation(),a[f](u))}return n.addEventListener(t,c,{capture:s,passive:o}),{destroy(){n.removeEventListener(t,c,{capture:s})},update(u){const f=t!==u.event||s!==u.capture||o!==u.passive;f&&n.removeEventListener(t,c,{capture:s}),{event:t,capture:s=!1,passive:o=!1,preventDefault:l=!1,stopImmediatePropagation:i=!1,stopPropagation:r=!1,fns:a}=u,f&&n.addEventListener(t,c,{capture:s,passive:o})}}}function Ki(n,e,t){const s=n.slice();return s[18]=e[t],s[20]=t,s}function qi(n){let e,t=n[18]+"",s,o,l,i;function r(){return n[17](n[20])}return{c(){e=_("div"),s=F(t),o=x(),m(e,"class","beverage-item svelte-12wr8dw"),Ye(e,"active",n[20]===n[1])},m(a,c){y(a,e,c),p(e,s),p(e,o),l||(i=Y(e,"click",r),l=!0)},p(a,c){n=a,c&2&&Ye(e,"active",n[20]===n[1])},d(a){a&&k(e),l=!1,i()}}}function wb(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O=n[2],L=[];for(let I=0;I<O.length;I+=1)L[I]=qi(Ki(n,O,I));return E=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var I;e=_("section"),t=_("div"),s=_("div"),s.textContent="Select a beverage",o=x(),l=_("div"),i=_("input"),c=x(),u=_("button"),u.textContent="Reset",f=x(),d=_("div"),d.innerHTML=`Use the navigation buttons
      <code>ArrowUp</code>,
      <code>ArrowDown</code>,
      <code>ArrowLeft</code>,
      <code>ArrowRight</code>,
      <code>PageUp</code>,
      <code>PageDown</code>,
      <code>Home</code>,
      <code>End</code>,
      <code>Ctrl+Home</code>,
      <code>Ctrl+End</code> to select a drink`,h=x(),g=_("div");for(let j=0;j<L.length;j+=1)L[j].c();b=x(),$=_("h3"),$.textContent="Code",w=x(),R(E.$$.fragment),m(i,"type","text"),m(i,"class","input grow"),i.readOnly=!0,i.value=r=(I=n[2][n[1]])!=null?I:"",m(u,"type","button"),m(u,"class","input"),m(l,"class","flex"),m(d,"class","block text-sm mt-1 text-gray-500"),m(t,"class","my-4"),m(g,"class","columns-3 gap-3 border-2 border-gray-200 rounded-md p-2"),m(e,"class","prose max-w-none my-4")},m(I,j){y(I,e,j),p(e,t),p(t,s),p(t,o),p(t,l),p(l,i),n[5](i),p(l,c),p(l,u),p(t,f),p(t,d),p(e,h),p(e,g);for(let z=0;z<L.length;z+=1)L[z].m(g,null);p(e,b),p(e,$),p(e,w),P(E,e,null),D=!0,C||(M=[tt(a=Go.call(null,i,{event:"keydown",preventDefault:!0,fns:{ArrowUp:n[6],ArrowDown:n[7],ArrowLeft:n[8],ArrowRight:n[9],PageUp:n[10],PageDown:n[11],Home:n[12],End:n[13],"Ctrl+Home":n[14],"Ctrl+End":n[15]}})),Y(u,"click",n[16])],C=!0)},p(I,[j]){var z;if((!D||j&2&&r!==(r=(z=I[2][I[1]])!=null?z:"")&&i.value!==r)&&(i.value=r),a&&ct(a.update)&&j&2&&a.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:I[6],ArrowDown:I[7],ArrowLeft:I[8],ArrowRight:I[9],PageUp:I[10],PageDown:I[11],Home:I[12],End:I[13],"Ctrl+Home":I[14],"Ctrl+End":I[15]}}),j&7){O=I[2];let U;for(U=0;U<O.length;U+=1){const Z=Ki(I,O,U);L[U]?L[U].p(Z,j):(L[U]=qi(Z),L[U].c(),L[U].m(g,null))}for(;U<L.length;U+=1)L[U].d(1);L.length=O.length}},i(I){D||(T(E.$$.fragment,I),D=!0)},o(I){S(E.$$.fragment,I),D=!1},d(I){I&&k(e),n[5](null),Je(L,I),N(E),C=!1,Ue(M)}}}function kb(n,e,t){const s=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asiático","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","Rüdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"],o=Math.floor(s.length/3);let l;Wn(()=>l.focus());let i=NaN;function r(M){if(isFinite(i)){let O=i+M;O<0?O=0:O>=s.length&&(O=s.length-1),t(1,i=O)}else t(1,i=0)}function a(M){Qe[M?"unshift":"push"](()=>{l=M,t(0,l)})}return[l,i,s,o,r,a,()=>r(-1),()=>r(1),()=>r(-o),()=>r(o),()=>r(-((i||0)%o)),()=>r(o-1-(i||0)%o),()=>t(1,i=(i||0)%o),()=>t(1,i=s.length-(o-(i||0)%o)),()=>t(1,i=0),()=>t(1,i=s.length-1),()=>{t(1,i=NaN),l.focus()},M=>{t(1,i=M),l.focus()}]}class yb extends se{constructor(e){super(),ne(this,e,kb,wb,J,{})}}const{document:Wi}=fn;function Tb(n){let e;return{c(){e=F("API")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function xb(n){let e;return{c(){e=F("Navigation demo")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function Sb(n){let e,t,s,o;return e=new ke({props:{$$slots:{default:[Tb]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[xb]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment)},m(l,i){P(e,l,i),y(l,t,i),P(s,l,i),o=!0},p(l,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:l}),e.$set(r);const a={};i&1&&(a.$$scope={dirty:i,ctx:l}),s.$set(a)},i(l){o||(T(e.$$.fragment,l),T(s.$$.fragment,l),o=!0)},o(l){S(e.$$.fragment,l),S(s.$$.fragment,l),o=!1},d(l){N(e,l),l&&k(t),N(s,l)}}}function Eb(n){let e,t;return e=new mb({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Ab(n){let e,t;return e=new yb({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Cb(n){let e,t,s,o,l,i;return e=new yt({props:{$$slots:{default:[Sb]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[Eb]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[Ab]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment)},m(r,a){P(e,r,a),y(r,t,a),P(s,r,a),y(r,o,a),P(l,r,a),i=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),s.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i(r){i||(T(e.$$.fragment,r),T(s.$$.fragment,r),T(l.$$.fragment,r),i=!0)},o(r){S(e.$$.fragment,r),S(s.$$.fragment,r),S(l.$$.fragment,r),i=!1},d(r){N(e,r),r&&k(t),N(s,r),r&&k(o),N(l,r)}}}function Pb(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b;return Wi.title=e=document.title.replace(/(•).*$/,"$1 Keyboard shortcut action"),g=new kt({props:{mode:"remove",$$slots:{default:[Cb]},$$scope:{ctx:n}}}),{c(){t=x(),s=_("section"),o=_("a"),o.textContent="Home",l=x(),i=_("h1"),i.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",r=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>allows to reduce keyboard event handling code</li> 
    <li>dependence <a href="https://www.npmjs.com/package/keyboard-event-to-string" target="_blank" rel="noreferrer">keyboard-event-to-string</a></li>`,h=x(),R(g.$$.fragment),m(o,"class","float-right"),m(o,"href","/"),m(i,"class","text-2xl"),m(c,"class","max-w-[4em]"),at(c.src,u=mt)||m(c,"src",u),m(c,"alt","NPM logo"),m(a,"class","float-right"),m(a,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),m(a,"target","_blank"),m(a,"rel","noreferrer"),m(d,"class","leading-6 mb-8"),m(s,"class","prose max-w-none my-4")},m($,w){y($,t,w),y($,s,w),p(s,o),p(s,l),p(s,i),p(s,r),p(s,a),p(a,c),p(s,f),p(s,d),p(s,h),P(g,s,null),b=!0},p($,[w]){(!b||w&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Keyboard shortcut action"))&&(Wi.title=e);const E={};w&1&&(E.$$scope={dirty:w,ctx:$}),g.$set(E)},i($){b||(T(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&k(t),$&&k(s),N(g)}}}let Nb=class extends se{constructor(e){super(),ne(this,e,null,Pb,J,{})}};const Gi=`# Action to scroll the child to parent viewport Svelte directive \`use\`

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
`;function Rb(n){let e,t,s;return t=new Sn({props:{source:Gi.slice(Gi.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),m(e,"class","documentation")},m(o,l){y(o,e,l),P(t,e,null),s=!0},p:re,i(o){s||(T(t.$$.fragment,o),s=!0)},o(o){S(t.$$.fragment,o),s=!1},d(o){o&&k(e),N(t)}}}class Mb extends se{constructor(e){super(),ne(this,e,null,Rb,J,{})}}function Zi(n){const e=n.parentElement;if(e&&e.scrollHeight>e.offsetHeight){const t=getComputedStyle(e),s=parseInt(t.paddingTop)||0,o=parseInt(t.paddingBottom)||0,l=e.offsetTop+s,i=e.offsetTop+e.offsetHeight-o,r=n.offsetTop-e.scrollTop,a=n.offsetTop+n.offsetHeight-e.scrollTop;return a>i?(e.scrollTop+=a-i,!0):r<l?(e.scrollTop-=l-r,!0):!1}else return!1}function Xi(n){const e=n.parentElement;if(e&&e.scrollWidth>e.offsetWidth){const t=getComputedStyle(e),s=parseInt(t.paddingLeft)||0,o=parseInt(t.paddingRight)||0,l=e.offsetLeft+s,i=e.offsetLeft+e.offsetWidth-o,r=n.offsetLeft-e.scrollLeft,a=n.offsetLeft+n.offsetWidth-e.scrollLeft;return a>i?(e.scrollLeft+=a-i,!0):r<l?(e.scrollLeft-=l-r,!0):!1}else return!1}function ma(n,e){function t(s){s===!0?(Zi(n),Xi(n)):typeof s=="object"&&(s.x&&Xi(n),s.y&&Zi(n))}return t(e),{update(s){t(s)}}}const _t=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asiático","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","Rüdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"];function Qi(n,e,t){const s=n.slice();return s[10]=e[t],s[12]=t,s}function Yi(n){let e,t=n[10]+"",s,o,l,i,r;function a(){return n[9](n[12])}return{c(){e=_("div"),s=F(t),o=x(),m(e,"class","beverage-item svelte-18rp3xo"),Ye(e,"active",n[12]===n[1])},m(c,u){y(c,e,u),p(e,s),p(e,o),i||(r=[tt(l=ma.call(null,e,n[1]===n[12]?{y:!0}:!1)),Y(e,"click",a)],i=!0)},p(c,u){n=c,l&&ct(l.update)&&u&2&&l.update.call(null,n[1]===n[12]?{y:!0}:!1),u&2&&Ye(e,"active",n[12]===n[1])},d(c){c&&k(e),i=!1,Ue(r)}}}function Ob(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O,L,I=_t,j=[];for(let z=0;z<I.length;z+=1)j[z]=Yi(Qi(n,I,z));return C=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var z;e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',s=x(),o=_("div"),l=_("div"),l.textContent="Select a beverage",i=x(),r=_("div"),r.innerHTML=`use the navigation buttons
      <code>ArrowUp</code>,
      <code>ArrowDown</code>,
      <code>Home</code>,
      <code>End</code> to select a drink`,a=x(),c=_("div"),u=_("input"),h=x(),g=_("button"),g.textContent="Reset",b=x(),$=_("div");for(let U=0;U<j.length;U+=1)j[U].c();w=x(),E=_("h3"),E.textContent="Code",D=x(),R(C.$$.fragment),m(t,"class","w-fit mx-auto mb-4"),m(r,"class","text-sm leading-4 text-gray-500"),m(u,"type","text"),m(u,"class","input grow"),u.readOnly=!0,u.value=f=(z=_t[n[1]])!=null?z:"",m(g,"type","button"),m(g,"class","input ml-2"),m(c,"class","mt-2 flex"),m($,"class","border-2 border-gray-200 rounded-md p-2 mt-2 w-48 max-h-[15.25rem] overflow-y-auto shadow-md scroll-smooth"),m(o,"class","my-2 mx-auto w-96"),m(e,"class","prose max-w-none my-4")},m(z,U){y(z,e,U),p(e,t),p(e,s),p(e,o),p(o,l),p(o,i),p(o,r),p(o,a),p(o,c),p(c,u),n[3](u),p(c,h),p(c,g),p(o,b),p(o,$);for(let Z=0;Z<j.length;Z+=1)j[Z].m($,null);p(e,w),p(e,E),p(e,D),P(C,e,null),M=!0,O||(L=[tt(d=Go.call(null,u,{event:"keydown",preventDefault:!0,fns:{ArrowUp:n[4],ArrowDown:n[5],Home:n[6],End:n[7]}})),Y(g,"click",n[8])],O=!0)},p(z,[U]){var Z;if((!M||U&2&&f!==(f=(Z=_t[z[1]])!=null?Z:"")&&u.value!==f)&&(u.value=f),d&&ct(d.update)&&U&2&&d.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:z[4],ArrowDown:z[5],Home:z[6],End:z[7]}}),U&3){I=_t;let X;for(X=0;X<I.length;X+=1){const ie=Qi(z,I,X);j[X]?j[X].p(ie,U):(j[X]=Yi(ie),j[X].c(),j[X].m($,null))}for(;X<j.length;X+=1)j[X].d(1);j.length=I.length}},i(z){M||(T(C.$$.fragment,z),M=!0)},o(z){S(C.$$.fragment,z),M=!1},d(z){z&&k(e),n[3](null),Je(j,z),N(C),O=!1,Ue(L)}}}function Ib(n,e,t){let s;Wn(()=>s.focus());let o=NaN;function l(h){if(isFinite(o)){let g=o+h;g<0?g=0:g>=_t.length&&(g=_t.length-1),t(1,o=g)}else t(1,o=0)}function i(h){Qe[h?"unshift":"push"](()=>{s=h,t(0,s)})}return[s,o,l,i,()=>l(-1),()=>l(1),()=>t(1,o=0),()=>t(1,o=_t.length-1),()=>{t(1,o=NaN),s.focus()},h=>{t(1,o=h),s.focus()}]}class Lb extends se{constructor(e){super(),ne(this,e,Ib,Ob,J,{})}}function Ji(n,e,t){const s=n.slice();return s[10]=e[t],s[12]=t,s}function Vi(n){let e,t=n[10]+"",s,o,l,i,r;function a(){return n[9](n[12])}return{c(){e=_("div"),s=F(t),o=x(),m(e,"class","beverage-item svelte-2m30if"),Ye(e,"active",n[12]===n[1])},m(c,u){y(c,e,u),p(e,s),p(e,o),i||(r=[tt(l=ma.call(null,e,n[1]===n[12]?{x:!0}:!1)),Y(e,"click",a)],i=!0)},p(c,u){n=c,l&&ct(l.update)&&u&2&&l.update.call(null,n[1]===n[12]?{x:!0}:!1),u&2&&Ye(e,"active",n[12]===n[1])},d(c){c&&k(e),i=!1,Ue(r)}}}function Db(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b,$,w,E,D,C,M,O,L,I,j=_t,z=[];for(let U=0;U<j.length;U+=1)z[U]=Vi(Ji(n,j,U));return M=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var U;e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',s=x(),o=_("div"),l=_("div"),i=_("div"),i.textContent="Select a beverage",r=x(),a=_("div"),a.innerHTML=`use the navigation buttons
        <code>ArrowLeft</code>,
        <code>ArrowRight</code>,
        <code>Home</code>,
        <code>End</code> to select a drink`,c=x(),u=_("div"),f=_("input"),g=x(),b=_("button"),b.textContent="Reset",$=x(),w=_("div");for(let Z=0;Z<z.length;Z+=1)z[Z].c();E=x(),D=_("h3"),D.textContent="Code",C=x(),R(M.$$.fragment),m(t,"class","w-fit mx-auto mb-4"),m(a,"class","text-sm leading-4 text-gray-500"),m(f,"type","text"),m(f,"class","input grow"),f.readOnly=!0,f.value=d=(U=_t[n[1]])!=null?U:"",m(b,"type","button"),m(b,"class","input ml-2"),m(u,"class","mt-2 flex"),m(l,"class","mx-auto w-96"),m(w,"class","border-2 border-gray-200 rounded-md p-2 mt-2 whitespace-nowrap max-w-full overflow-x-auto shadow-md scroll-smooth"),m(o,"class","my-2"),m(e,"class","prose max-w-none my-4")},m(U,Z){y(U,e,Z),p(e,t),p(e,s),p(e,o),p(o,l),p(l,i),p(l,r),p(l,a),p(l,c),p(l,u),p(u,f),n[3](f),p(u,g),p(u,b),p(o,$),p(o,w);for(let X=0;X<z.length;X+=1)z[X].m(w,null);p(e,E),p(e,D),p(e,C),P(M,e,null),O=!0,L||(I=[tt(h=Go.call(null,f,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:n[4],ArrowRight:n[5],Home:n[6],End:n[7]}})),Y(b,"click",n[8])],L=!0)},p(U,[Z]){var X;if((!O||Z&2&&d!==(d=(X=_t[U[1]])!=null?X:"")&&f.value!==d)&&(f.value=d),h&&ct(h.update)&&Z&2&&h.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:U[4],ArrowRight:U[5],Home:U[6],End:U[7]}}),Z&3){j=_t;let ie;for(ie=0;ie<j.length;ie+=1){const V=Ji(U,j,ie);z[ie]?z[ie].p(V,Z):(z[ie]=Vi(V),z[ie].c(),z[ie].m(w,null))}for(;ie<z.length;ie+=1)z[ie].d(1);z.length=j.length}},i(U){O||(T(M.$$.fragment,U),O=!0)},o(U){S(M.$$.fragment,U),O=!1},d(U){U&&k(e),n[3](null),Je(z,U),N(M),L=!1,Ue(I)}}}function Bb(n,e,t){let s;Wn(()=>s.focus());let o=NaN;function l(h){if(isFinite(o)){let g=o+h;g<0?g=0:g>=_t.length&&(g=_t.length-1),t(1,o=g)}else t(1,o=0)}function i(h){Qe[h?"unshift":"push"](()=>{s=h,t(0,s)})}return[s,o,l,i,()=>l(-1),()=>l(1),()=>t(1,o=0),()=>t(1,o=_t.length-1),()=>{t(1,o=NaN),s.focus()},h=>{t(1,o=h),s.focus()}]}class Fb extends se{constructor(e){super(),ne(this,e,Bb,Db,J,{})}}const{document:er}=fn;function zb(n){let e;return{c(){e=F("API")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function Hb(n){let e;return{c(){e=F("Vertical demo")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function jb(n){let e;return{c(){e=F("Horizontal demo")},m(t,s){y(t,e,s)},d(t){t&&k(e)}}}function Ub(n){let e,t,s,o,l,i;return e=new ke({props:{$$slots:{default:[zb]},$$scope:{ctx:n}}}),s=new ke({props:{$$slots:{default:[Hb]},$$scope:{ctx:n}}}),l=new ke({props:{$$slots:{default:[jb]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment)},m(r,a){P(e,r,a),y(r,t,a),P(s,r,a),y(r,o,a),P(l,r,a),i=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),s.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i(r){i||(T(e.$$.fragment,r),T(s.$$.fragment,r),T(l.$$.fragment,r),i=!0)},o(r){S(e.$$.fragment,r),S(s.$$.fragment,r),S(l.$$.fragment,r),i=!1},d(r){N(e,r),r&&k(t),N(s,r),r&&k(o),N(l,r)}}}function Kb(n){let e,t;return e=new Mb({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function qb(n){let e,t;return e=new Lb({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Wb(n){let e,t;return e=new Fb({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Gb(n){let e,t,s,o,l,i,r,a;return e=new yt({props:{$$slots:{default:[Ub]},$$scope:{ctx:n}}}),s=new we({props:{$$slots:{default:[Kb]},$$scope:{ctx:n}}}),l=new we({props:{$$slots:{default:[qb]},$$scope:{ctx:n}}}),r=new we({props:{$$slots:{default:[Wb]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=x(),R(s.$$.fragment),o=x(),R(l.$$.fragment),i=x(),R(r.$$.fragment)},m(c,u){P(e,c,u),y(c,t,u),P(s,c,u),y(c,o,u),P(l,c,u),y(c,i,u),P(r,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),l.$set(h);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),r.$set(g)},i(c){a||(T(e.$$.fragment,c),T(s.$$.fragment,c),T(l.$$.fragment,c),T(r.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(s.$$.fragment,c),S(l.$$.fragment,c),S(r.$$.fragment,c),a=!1},d(c){N(e,c),c&&k(t),N(s,c),c&&k(o),N(l,c),c&&k(i),N(r,c)}}}function Zb(n){let e,t,s,o,l,i,r,a,c,u,f,d,h,g,b;return er.title=e=document.title.replace(/(•).*$/,"$1 Scroll child action"),g=new kt({props:{mode:"remove",$$slots:{default:[Gb]},$$scope:{ctx:n}}}),{c(){t=x(),s=_("section"),o=_("a"),o.textContent="Home",l=x(),i=_("h1"),i.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",r=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>useful for components like dropdown</li> 
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>`,h=x(),R(g.$$.fragment),m(o,"class","float-right"),m(o,"href","/"),m(i,"class","text-2xl"),m(c,"class","max-w-[4em]"),at(c.src,u=mt)||m(c,"src",u),m(c,"alt","NPM logo"),m(a,"class","float-right"),m(a,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),m(a,"target","_blank"),m(a,"rel","noreferrer"),m(d,"class","leading-6 mb-8"),m(s,"class","prose max-w-none my-4")},m($,w){y($,t,w),y($,s,w),p(s,o),p(s,l),p(s,i),p(s,r),p(s,a),p(a,c),p(s,f),p(s,d),p(s,h),P(g,s,null),b=!0},p($,[w]){(!b||w&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Scroll child action"))&&(er.title=e);const E={};w&1&&(E.$$scope={dirty:w,ctx:$}),g.$set(E)},i($){b||(T(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&k(t),$&&k(s),N(g)}}}class Xb extends se{constructor(e){super(),ne(this,e,null,Zb,J,{})}}function Qb(n){let e,t;return e=new Xb({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Yb(n){let e,t;return e=new Nb({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Jb(n){let e,t;return e=new pb({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Vb(n){let e,t;return e=new z_({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function e$(n){let e,t;return e=new k_({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function t$(n){let e,t;return e=new Mm({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function n$(n){let e,t;return e=new am({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function s$(n){let e,t;return e=new tu({}),{c(){R(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function o$(n){let e,t,s,o,l,i,r,a,c,u,f,d,h;const g=[s$,n$,t$,e$,Vb,Jb,Yb,Qb],b=[];function $(w,E){return E&1&&(s=null),E&1&&(o=null),E&1&&(l=null),E&1&&(i=null),E&1&&(r=null),E&1&&(a=null),E&1&&(c=null),E&1&&(u=null),s==null&&(s=!!w[0](`${w[1]}/`)),s?0:(o==null&&(o=!!w[0](`${w[1]}/tabs`)),o?1:(l==null&&(l=!!w[0](`${w[1]}/glob-notify`)),l?2:(i==null&&(i=!!w[0](`${w[1]}/color`)),i?3:(r==null&&(r=!!w[0](`${w[1]}/floating-ui-action`)),r?4:(a==null&&(a=!!w[0](`${w[1]}/focus-action`)),a?5:(c==null&&(c=!!w[0](`${w[1]}/keyboard-shortcut-action`)),c?6:(u==null&&(u=!!w[0](`${w[1]}/scroll-child-action`)),u?7:-1)))))))}return~(f=$(n,-1))&&(d=b[f]=g[f](n)),{c(){e=x(),t=_("main"),d&&d.c(),document.title="APSC • Home"},m(w,E){y(w,e,E),y(w,t,E),~f&&b[f].m(t,null),h=!0},p(w,[E]){let D=f;f=$(w,E),f!==D&&(d&&(ye(),S(b[D],1,1,()=>{b[D]=null}),Te()),~f?(d=b[f],d||(d=b[f]=g[f](w),d.c()),T(d,1),d.m(t,null)):d=null)},i(w){h||(T(d),h=!0)},o(w){S(d),h=!1},d(w){w&&k(e),w&&k(t),~f&&b[f].d()}}}function l$(n,e,t){let s;return $n(n,Jc,l=>t(0,s=l)),[s,"/svelte-components"]}class i$ extends se{constructor(e){super(),ne(this,e,l$,o$,J,{})}}new i$({target:document.getElementById("app")})});export default r$();
