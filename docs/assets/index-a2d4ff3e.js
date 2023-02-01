var Ec=Object.defineProperty,Sc=Object.defineProperties;var xc=Object.getOwnPropertyDescriptors;var xs=Object.getOwnPropertySymbols;var ul=Object.prototype.hasOwnProperty,fl=Object.prototype.propertyIsEnumerable;var go=(n,e,t)=>e in n?Ec(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,et=(n,e)=>{for(var t in e||(e={}))ul.call(e,t)&&go(n,t,e[t]);if(xs)for(var t of xs(e))fl.call(e,t)&&go(n,t,e[t]);return n},Pn=(n,e)=>Sc(n,xc(e));var mo=(n,e)=>{var t={};for(var s in n)ul.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&xs)for(var s of xs(n))e.indexOf(s)<0&&fl.call(n,s)&&(t[s]=n[s]);return t};var Kt=(n,e,t)=>(go(n,typeof e!="symbol"?e+"":e,t),t);var ht=(n,e,t)=>new Promise((s,o)=>{var l=a=>{try{i(t.next(a))}catch(c){o(c)}},r=a=>{try{i(t.throw(a))}catch(c){o(c)}},i=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,r);i((t=t.apply(n,e)).next())});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function K(){}const ri=n=>n;function xt(n,e){for(const t in e)n[t]=e[t];return n}function Ac(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function ii(n){return n()}function dl(){return Object.create(null)}function Ae(n){n.forEach(ii)}function De(n){return typeof n=="function"}function W(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let As;function ct(n,e){return As||(As=document.createElement("a")),As.href=e,n===As.href}function Cc(n){return Object.keys(n).length===0}function ai(n,...e){if(n==null)return K;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Qt(n,e,t){n.$$.on_destroy.push(ai(e,t))}function Ce(n,e,t,s){if(n){const o=ci(n,e,t,s);return n[0](o)}}function ci(n,e,t,s){return n[1]&&s?xt(t.ctx.slice(),n[1](s(e))):t.ctx}function Ne(n,e,t,s){if(n[2]&&s){const o=n[2](s(t));if(e.dirty===void 0)return o;if(typeof o=="object"){const l=[],r=Math.max(e.dirty.length,o.length);for(let i=0;i<r;i+=1)l[i]=e.dirty[i]|o[i];return l}return e.dirty|o}return e.dirty}function Me(n,e,t,s,o,l){if(o){const r=ci(e,t,s,l);n.p(r,o)}}function Re(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let s=0;s<t;s++)e[s]=-1;return e}return-1}function ui(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Bs(n,e){const t={};e=new Set(e);for(const s in n)!e.has(s)&&s[0]!=="$"&&(t[s]=n[s]);return t}function On(n){return n==null?"":n}function Nc(n,e,t){return n.set(t),e}function Ye(n){return n&&De(n.destroy)?n.destroy:K}const fi=typeof window!="undefined";let Mc=fi?()=>window.performance.now():()=>Date.now(),Co=fi?n=>requestAnimationFrame(n):K;const zn=new Set;function di(n){zn.forEach(e=>{e.c(n)||(zn.delete(e),e.f())}),zn.size!==0&&Co(di)}function Rc(n){let e;return zn.size===0&&Co(di),{promise:new Promise(t=>{zn.add(e={c:n,f:t})}),abort(){zn.delete(e)}}}function h(n,e){n.appendChild(e)}function pi(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Pc(n){const e=_("style");return Oc(pi(n),e),e.sheet}function Oc(n,e){return h(n.head||n,e),e.sheet}function E(n,e,t){n.insertBefore(e,t||null)}function T(n){n.parentNode&&n.parentNode.removeChild(n)}function He(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function _(n){return document.createElement(n)}function Lc(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function F(n){return document.createTextNode(n)}function x(){return F(" ")}function Ee(){return F("")}function Y(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function ts(n){return function(e){return e.preventDefault(),n.call(this,e)}}function p(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function pl(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const s in e)e[s]==null?n.removeAttribute(s):s==="style"?n.style.cssText=e[s]:s==="__value"?n.value=n[s]=e[s]:t[s]&&t[s].set?n[s]=e[s]:p(n,s,e[s])}function _t(n){return n===""?null:+n}function Dc(n){return Array.from(n.childNodes)}function Ve(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function ut(n,e){n.value=e==null?"":e}function tt(n,e,t,s){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function Pt(n,e){for(let t=0;t<n.options.length;t+=1){const s=n.options[t];if(s.__value===e){s.selected=!0;return}}n.selectedIndex=-1}function ns(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}function ie(n,e,t){n.classList[t?"add":"remove"](e)}function hi(n,e,{bubbles:t=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(n,t,s,e),o}class gi{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=Lc(t.nodeName):this.e=_(t.nodeName),this.t=t,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)E(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(T)}}function ze(n,e){return new n(e)}const zs=new Map;let Fs=0;function Ic(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Bc(n,e){const t={stylesheet:Pc(e),rules:{}};return zs.set(n,t),t}function hl(n,e,t,s,o,l,r,i=0){const a=16.666/s;let c=`{
`;for(let A=0;A<=1;A+=a){const S=e+(t-e)*l(A);c+=A*100+`%{${r(S,1-S)}}
`}const u=c+`100% {${r(t,1-t)}}
}`,f=`__svelte_${Ic(u)}_${i}`,d=pi(n),{stylesheet:g,rules:m}=zs.get(d)||Bc(d,n);m[f]||(m[f]=!0,g.insertRule(`@keyframes ${f} ${u}`,g.cssRules.length));const $=n.style.animation||"";return n.style.animation=`${$?`${$}, `:""}${f} ${s}ms linear ${o}ms 1 both`,Fs+=1,f}function zc(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),o=t.length-s.length;o&&(n.style.animation=s.join(", "),Fs-=o,Fs||Fc())}function Fc(){Co(()=>{Fs||(zs.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&T(e)}),zs.clear())})}let ss;function Wt(n){ss=n}function _n(){if(!ss)throw new Error("Function called outside component initialization");return ss}function bn(n){_n().$$.on_mount.push(n)}function Hc(n){_n().$$.after_update.push(n)}function Xs(n){_n().$$.on_destroy.push(n)}function No(){const n=_n();return(e,t,{cancelable:s=!1}={})=>{const o=n.$$.callbacks[e];if(o){const l=hi(e,t,{cancelable:s});return o.slice().forEach(r=>{r.call(n,l)}),!l.defaultPrevented}return!0}}function mi(n,e){return _n().$$.context.set(n,e),e}function Qs(n){return _n().$$.context.get(n)}const Bn=[],Xe=[],Ps=[],To=[],_i=Promise.resolve();let Eo=!1;function bi(){Eo||(Eo=!0,_i.then(Ro))}function Mo(){return bi(),_i}function $t(n){Ps.push(n)}function Yt(n){To.push(n)}const _o=new Set;let Ln=0;function Ro(){if(Ln!==0)return;const n=ss;do{try{for(;Ln<Bn.length;){const e=Bn[Ln];Ln++,Wt(e),jc(e.$$)}}catch(e){throw Bn.length=0,Ln=0,e}for(Wt(null),Bn.length=0,Ln=0;Xe.length;)Xe.pop()();for(let e=0;e<Ps.length;e+=1){const t=Ps[e];_o.has(t)||(_o.add(t),t())}Ps.length=0}while(Bn.length);for(;To.length;)To.pop()();Eo=!1,_o.clear(),Wt(n)}function jc(n){if(n.fragment!==null){n.update(),Ae(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach($t)}}let Yn;function Uc(){return Yn||(Yn=Promise.resolve(),Yn.then(()=>{Yn=null})),Yn}function bo(n,e,t){n.dispatchEvent(hi(`${e?"intro":"outro"}${t}`))}const Os=new Set;let Gt;function me(){Gt={r:0,c:[],p:Gt}}function _e(){Gt.r||Ae(Gt.c),Gt=Gt.p}function v(n,e){n&&n.i&&(Os.delete(n),n.i(e))}function y(n,e,t,s){if(n&&n.o){if(Os.has(n))return;Os.add(n),Gt.c.push(()=>{Os.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const qc={duration:0};function ln(n,e,t,s){const o={direction:"both"};let l=e(n,t,o),r=s?0:1,i=null,a=null,c=null;function u(){c&&zc(n,c)}function f(g,m){const $=g.b-r;return m*=Math.abs($),{a:r,b:g.b,d:$,duration:m,start:g.start,end:g.start+m,group:g.group}}function d(g){const{delay:m=0,duration:$=300,easing:A=ri,tick:S=K,css:k}=l||qc,M={start:Mc()+m,b:g};g||(M.group=Gt,Gt.r+=1),i||a?a=M:(k&&(u(),c=hl(n,r,g,$,m,A,k)),g&&S(0,1),i=f(M,$),$t(()=>bo(n,g,"start")),Rc(R=>{if(a&&R>a.start&&(i=f(a,$),a=null,bo(n,i.b,"start"),k&&(u(),c=hl(n,r,i.b,i.duration,0,A,l.css))),i){if(R>=i.end)S(r=i.b,1-r),bo(n,i.b,"end"),a||(i.b?u():--i.group.r||Ae(i.group.c)),i=null;else if(R>=i.start){const N=R-i.start;r=i.a+i.d*A(N/i.duration),S(r,1-r)}}return!!(i||a)}))}return{run(g){De(l)?Uc().then(()=>{l=l(o),d(g)}):d(g)},end(){u(),i=a=null}}}function Hs(n,e){const t=e.token={};function s(o,l,r,i){if(e.token!==t)return;e.resolved=i;let a=e.ctx;r!==void 0&&(a=a.slice(),a[r]=i);const c=o&&(e.current=o)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==l&&f&&(me(),y(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),_e())}):e.block.d(1),c.c(),v(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[l]=c),u&&Ro()}if(Ac(n)){const o=_n();if(n.then(l=>{Wt(o),s(e.then,1,e.value,l),Wt(null)},l=>{if(Wt(o),s(e.catch,2,e.error,l),Wt(null),!e.hasCatch)throw l}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,n),!0;e.resolved=n}}function $i(n,e,t){const s=e.slice(),{resolved:o}=n;n.current===n.then&&(s[n.value]=o),n.current===n.catch&&(s[n.error]=o),n.block.p(s,t)}function Kc(n,e){y(n,1,1,()=>{e.delete(n.key)})}function Wc(n,e,t,s,o,l,r,i,a,c,u,f){let d=n.length,g=l.length,m=d;const $={};for(;m--;)$[n[m].key]=m;const A=[],S=new Map,k=new Map;for(m=g;m--;){const w=f(o,l,m),D=t(w);let B=r.get(D);B?s&&B.p(w,e):(B=c(D,w),B.c()),S.set(D,A[m]=B),D in $&&k.set(D,Math.abs(m-$[D]))}const M=new Set,R=new Set;function N(w){v(w,1),w.m(i,u),r.set(w.key,w),u=w.first,g--}for(;d&&g;){const w=A[g-1],D=n[d-1],B=w.key,q=D.key;w===D?(u=w.first,d--,g--):S.has(q)?!r.has(B)||M.has(B)?N(w):R.has(q)?d--:k.get(B)>k.get(q)?(R.add(B),N(w)):(M.add(q),d--):(a(D,r),d--)}for(;d--;){const w=n[d];S.has(w.key)||a(w,r)}for(;g;)N(A[g-1]);return A}function $n(n,e){const t={},s={},o={$$scope:1};let l=n.length;for(;l--;){const r=n[l],i=e[l];if(i){for(const a in r)a in i||(s[a]=1);for(const a in i)o[a]||(t[a]=i[a],o[a]=1);n[l]=i}else for(const a in r)o[a]=1}for(const r in s)r in t||(t[r]=void 0);return t}function qn(n){return typeof n=="object"&&n!==null?n:{}}function Lt(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function L(n){n&&n.c()}function P(n,e,t,s){const{fragment:o,after_update:l}=n.$$;o&&o.m(e,t),s||$t(()=>{const r=n.$$.on_mount.map(ii).filter(De);n.$$.on_destroy?n.$$.on_destroy.push(...r):Ae(r),n.$$.on_mount=[]}),l.forEach($t)}function O(n,e){const t=n.$$;t.fragment!==null&&(Ae(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Gc(n,e){n.$$.dirty[0]===-1&&(Bn.push(n),bi(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function G(n,e,t,s,o,l,r,i=[-1]){const a=ss;Wt(n);const c=n.$$={fragment:null,ctx:[],props:l,update:K,not_equal:o,bound:dl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:dl(),dirty:i,skip_bound:!1,root:e.target||a.$$.root};r&&r(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,d,...g)=>{const m=g.length?g[0]:d;return c.ctx&&o(c.ctx[f],c.ctx[f]=m)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](m),u&&Gc(n,f)),d}):[],c.update(),u=!0,Ae(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=Dc(e.target);c.fragment&&c.fragment.l(f),f.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&v(n.$$.fragment),P(n,e.target,e.anchor,e.customElement),Ro()}Wt(a)}class Z{$destroy(){O(this,1),this.$destroy=K}$on(e,t){if(!De(t))return K;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!Cc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Dn=[];function So(n,e){return{subscribe:fs(n,e).subscribe}}function fs(n,e=K){let t;const s=new Set;function o(i){if(W(n,i)&&(n=i,t)){const a=!Dn.length;for(const c of s)c[1](),Dn.push(c,n);if(a){for(let c=0;c<Dn.length;c+=2)Dn[c][0](Dn[c+1]);Dn.length=0}}}function l(i){o(i(n))}function r(i,a=K){const c=[i,a];return s.add(c),s.size===1&&(t=e(o)||K),i(n),()=>{s.delete(c),s.size===0&&(t(),t=null)}}return{set:o,update:l,subscribe:r}}function vi(n,e,t){const s=!Array.isArray(n),o=s?[n]:n,l=e.length<2;return So(t,r=>{let i=!1;const a=[];let c=0,u=K;const f=()=>{if(c)return;u();const g=e(s?a[0]:a,r);l?r(g):u=De(g)?g:K},d=o.map((g,m)=>ai(g,$=>{a[m]=$,c&=~(1<<m),i&&f()},()=>{c|=1<<m}));return i=!0,f(),function(){Ae(d),u()}})}const Ys=typeof location!="undefined",wi=typeof history!="undefined",Zc=wi&&typeof history.pushState=="function",ki=typeof window!="undefined",Xc=ki&&window!==window.parent,Qc=Ys&&(location.protocol==="file:"||/[-_\w]+[.][\w]+$/i.test(location.pathname)),js=ki&&wi&&Ys&&!Xc,ds=!Zc||Qc,Po="#!",Fn={array:{separator:",",format:"bracket"},convertTypes:!0,hashbang:!1,basePath:"",nesting:3,sideEffect:js};function Yc(){const n=Oo().pathname;if(!n)return"";const e=Lo(),t=Ls(n,e);return yi(t)}function Oo(){if(!Ys)return{};if(ds){const n=location.hash;return new URL(n.indexOf(Po)===0?n.substring(2):n.substring(1),"file:")}return location}function Lo(){return Ys&&ds?location.pathname:"/"}function Jc(n){ds&&(n=Po+n);const e=Lo();return(e[e.length-1]==="/"?e.substring(0,e.length-1):e)+n}function Vc(n){n=Ls(n,location.origin);const e=Lo();return n=Ls(n,e),ds&&(n=Ls(n,Po)),yi(n)}function eu(n,e,t){const{pattern:s,keys:o}=su(e,t),l=s.exec(n);return l?o.reduce((r,i,a)=>(r[i]=os(l[++a])||null,r),{}):null}function tu(n=""){return n?n.replace("?","").replace(/\+/g," ").split("&").filter(Boolean).reduce((e,t)=>{let[s,o]=t.split(/=(.*)/,2);s=decodeURIComponent(s||""),o=decodeURIComponent(o||"");let l=Ti(s,o);return e=Object.keys(l).reduce((r,i)=>{const a=os(l[i]);return r[i]?Array.isArray(r[i])?r[i]=r[i].concat(a):Object.assign(r[i],a):r[i]=a,r},e),e},{}):{}}function nu(n={}){const e=Object.keys(n).reduce((t,s)=>{if(n.hasOwnProperty(s)&&isNaN(parseInt(s,10)))if(Array.isArray(n[s]))n[s].forEach(o=>t.push(s+"[]="+encodeURIComponent(o)));else if(typeof n[s]=="object"&&n[s]!==null){let o=Ti(s,n[s]);t.push(Ei(o))}else t.push(s+"="+encodeURIComponent(n[s]));return t},[]).join("&");return e?`?${e}`:""}function yi(n){return n[0]!=="/"?"/"+n:n}function Ls(n,e){return n.indexOf(e)===0?n.substring(e.length):n}function su(n,e=!1){let t=n.split("/"),s=[],o="",l,r,i,a;for(t[0]||t.shift();i=t.shift();)l=i[0],l==="*"?(s.push("wild"),o+="/(.*)"):l===":"?(r=i.indexOf("?",1),a=i.indexOf(".",1),s.push(i.substring(1,~r?r:~a?a:i.length)),o+=~r&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(o+=(~r?"?":"")+"\\"+i.substring(a))):o+="/"+i;return{keys:s,pattern:new RegExp("^"+o+(e?"(?:$|/)":"/?$"),"i")}}function os(n){return Array.isArray(n)?(n[n.length-1]=os(n[n.length-1]),n):typeof n=="object"?Object.entries(n).reduce((e,[t,s])=>(e[t]=os(s),e),{}):n==="true"||n==="false"?n==="true":n==="null"?null:n==="undefined"?void 0:n!==""&&!isNaN(Number(n))&&Number(n).toString()===n?Number(n):n}function Ti(n,e){const t=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g;let o=t.exec(n),l=o?n.slice(0,o.index):n,r=[];l&&r.push(l);let i=0;for(;(o=s.exec(n))&&i<Fn.nesting;)i++,r.push(o[1]);return o&&r.push("["+n.slice(o.index)+"]"),ou(r,e)}function ou(n,e){let t=e;for(let s=n.length-1;s>=0;--s){let o=n[s],l;if(o==="[]")l=[].concat(t);else{l={};const r=o.charAt(0)==="["&&o.charAt(o.length-1)==="]"?o.slice(1,-1):o,i=parseInt(r,10);!isNaN(i)&&o!==r&&String(i)===r&&i>=0?(l=[],l[i]=os(t)):l[r]=t}t=l}return t}function Ei(n={},e=""){return Object.entries(n).map(([t,s])=>typeof s=="object"?Ei(s,e?e+`[${t}]`:t):[e+`[${t}]`,s].join("=")).join("&")}const lu=Si(n=>typeof n=="string"?new String(n):n),ru=Si(n=>(typeof n!="string"&&(n=nu(n.params)),Object.assign(new String(n),{params:tu(n)})));function Si(n){return e=>{const{subscribe:t,update:s,set:o}=fs(n(e));return{subscribe:t,update:l=>s(r=>n(l(r))),set:l=>o(n(l))}}}const xi=Yc(),Ai=Oo().search,Ci=Oo().hash;let $o=!0,gl=!1;const Do=lu(xi),ls=ru(Ai),Ni=fs(Ci,n=>{const e=()=>ds?Ri(location.hash):n(location.hash);return js&&Fn.sideEffect&&window.addEventListener("hashchange",e),()=>js&&Fn.sideEffect&&window.removeEventListener("hashchange",e)}),Mi=fs({}),iu=vi([Do,ls,Ni],([n,e,t],s)=>{let o=!1;return Mo().then(()=>{o||s(n.toString()+e.toString()+t.toString())}),()=>o=!0},xi+Ai+Ci);vi(Do,n=>(e="*",t)=>{const s=eu(n.toString(),e,t);return s&&Object.assign(n,{params:s}),!!s});js&&(iu.subscribe(n=>{if(Fn.sideEffect){if($o)return $o=!1;history[gl?"replaceState":"pushState"]({},null,Jc(n)),gl=!1}}),Mi.subscribe(n=>{Fn.sideEffect&&history.replaceState(n,null,location.pathname+location.search+location.hash)}),window.addEventListener("popstate",n=>{Fn.sideEffect&&($o=!0,Ri(location.href,n.state))}));function Ri(n="",e){const{pathname:t,search:s,hash:o}=new URL(Vc(n),"file:");Do.set(t),Mo().then(()=>{ls.set(s),Ni.set(o),e&&Mi.set(e)})}const gt=""+new URL("npm-logo-185f97d3.svg",import.meta.url).href;function au(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k,M,R,N,w,D,B,q,ee,te,ce,ye,$e,Oe,z,U,J,le,j,pe,ae,we,V,Se,he,qe,xe,Je,bt,je,nt,Ke,it,vt,Fe,ue,wt,Pe,be,st,Le,ne,Te,X,Q,re,ke,Qe,We,kt,cn,Gn,at,zt,xn,Zn,Xn,Rt,An,hs,At,yt,Cn,Nn,Ft,Jt,Mn,gs;return{c(){e=_("section"),t=_("h1"),t.textContent="Packages",s=x(),o=_("div"),l=_("div"),r=_("div"),r.innerHTML='<a href="?c=tabs">@apsc/tabs</a>',i=x(),a=_("a"),c=_("img"),f=x(),d=_("div"),d.textContent="A component set and context class for organizing the Tabs interface",g=x(),m=_("div"),$=_("div"),$.innerHTML='<a href="?c=glob-notify">@apsc/glob-notify</a>',A=x(),S=_("a"),k=_("img"),R=x(),N=_("div"),N.textContent="Component for notifications globally for the entire application",w=x(),D=_("div"),B=_("div"),B.innerHTML='<a href="?c=color">@apsc/color</a>',q=x(),ee=_("a"),te=_("img"),ye=x(),$e=_("div"),$e.textContent="A set of components for picking and editing colors",Oe=x(),z=_("div"),U=_("div"),J=_("div"),J.innerHTML='<a href="?c=floating-ui-action">@apsc/floating-ui-action</a>',le=x(),j=_("a"),pe=_("img"),we=x(),V=_("div"),Se=F("Floating UI (ex. Popper) action for directive "),he=_("code"),qe=F("use"),xe=x(),Je=_("div"),bt=_("div"),bt.innerHTML='<a href="?c=focus-action">@apsc/focus-action</a>',je=x(),nt=_("a"),Ke=_("img"),vt=x(),Fe=_("div"),ue=F("Action to control "),wt=_("code"),Pe=F("focusin"),be=F(` and
        `),st=_("code"),Le=F("focusout"),ne=F(" for directive "),Te=_("code"),X=F("use"),Q=x(),re=_("div"),ke=_("div"),ke.innerHTML='<a href="?c=keyboard-shortcut-action">@apsc/keyboard-shortcut-action</a>',Qe=x(),We=_("a"),kt=_("img"),Gn=x(),at=_("div"),zt=F("Action to call a function by keyboard shortcut for Svelte directive "),xn=_("code"),Zn=F("use"),Xn=x(),Rt=_("div"),An=_("div"),An.innerHTML='<a href="?c=scroll-child-action">@apsc/scroll-child-action</a>',hs=x(),At=_("a"),yt=_("img"),Nn=x(),Ft=_("div"),Jt=F("Action to scroll the child to parent viewport for Svelte directive "),Mn=_("code"),gs=F("use"),p(t,"class","font-bold my-4 pb-2 text-3xl border-b border-gray-400"),p(r,"class","pkg-tile__link svelte-1gf5keo"),ct(c.src,u=gt)||p(c,"src",u),p(c,"alt","NPM logo"),p(c,"class","svelte-1gf5keo"),p(a,"class","pkg-tile__npm svelte-1gf5keo"),p(a,"href","https://www.npmjs.com/package/@apsc/tabs"),p(a,"target","_blank"),p(a,"rel","noreferrer"),p(d,"class","pkg-tile__description svelte-1gf5keo"),p(l,"class","pkg-tile svelte-1gf5keo"),p($,"class","pkg-tile__link svelte-1gf5keo"),ct(k.src,M=gt)||p(k,"src",M),p(k,"alt","NPM logo"),p(k,"class","svelte-1gf5keo"),p(S,"class","pkg-tile__npm svelte-1gf5keo"),p(S,"href","https://www.npmjs.com/package/@apsc/glob-notify"),p(S,"target","_blank"),p(S,"rel","noreferrer"),p(N,"class","pkg-tile__description svelte-1gf5keo"),p(m,"class","pkg-tile svelte-1gf5keo"),p(B,"class","pkg-tile__link svelte-1gf5keo"),ct(te.src,ce=gt)||p(te,"src",ce),p(te,"alt","NPM logo"),p(te,"class","svelte-1gf5keo"),p(ee,"class","pkg-tile__npm svelte-1gf5keo"),p(ee,"href","https://www.npmjs.com/package/@apsc/color"),p(ee,"target","_blank"),p(ee,"rel","noreferrer"),p($e,"class","pkg-tile__description svelte-1gf5keo"),p(D,"class","pkg-tile svelte-1gf5keo"),p(o,"class","flex flex-wrap gap-6 mb-12"),p(J,"class","pkg-tile__link svelte-1gf5keo"),ct(pe.src,ae=gt)||p(pe,"src",ae),p(pe,"alt","NPM logo"),p(pe,"class","svelte-1gf5keo"),p(j,"class","pkg-tile__npm svelte-1gf5keo"),p(j,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),p(j,"target","_blank"),p(j,"rel","noreferrer"),p(he,"class",On(n[0].code)+" svelte-1gf5keo"),p(V,"class","pkg-tile__description svelte-1gf5keo"),p(U,"class","pkg-tile svelte-1gf5keo"),p(bt,"class","pkg-tile__link svelte-1gf5keo"),ct(Ke.src,it=gt)||p(Ke,"src",it),p(Ke,"alt","NPM logo"),p(Ke,"class","svelte-1gf5keo"),p(nt,"class","pkg-tile__npm svelte-1gf5keo"),p(nt,"href","https://www.npmjs.com/package/@apsc/focus-action"),p(nt,"target","_blank"),p(nt,"rel","noreferrer"),p(wt,"class",On(n[0].code)+" svelte-1gf5keo"),p(st,"class",On(n[0].code)+" svelte-1gf5keo"),p(Te,"class",On(n[0].code)+" svelte-1gf5keo"),p(Fe,"class","pkg-tile__description svelte-1gf5keo"),p(Je,"class","pkg-tile svelte-1gf5keo"),p(ke,"class","pkg-tile__link svelte-1gf5keo"),ct(kt.src,cn=gt)||p(kt,"src",cn),p(kt,"alt","NPM logo"),p(kt,"class","svelte-1gf5keo"),p(We,"class","pkg-tile__npm svelte-1gf5keo"),p(We,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),p(We,"target","_blank"),p(We,"rel","noreferrer"),p(xn,"class",On(n[0].code)+" svelte-1gf5keo"),p(at,"class","pkg-tile__description svelte-1gf5keo"),p(re,"class","pkg-tile svelte-1gf5keo"),p(An,"class","pkg-tile__link svelte-1gf5keo"),ct(yt.src,Cn=gt)||p(yt,"src",Cn),p(yt,"alt","NPM logo"),p(yt,"class","svelte-1gf5keo"),p(At,"class","pkg-tile__npm svelte-1gf5keo"),p(At,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),p(At,"target","_blank"),p(At,"rel","noreferrer"),p(Mn,"class",On(n[0].code)+" svelte-1gf5keo"),p(Ft,"class","pkg-tile__description svelte-1gf5keo"),p(Rt,"class","pkg-tile svelte-1gf5keo"),p(z,"class","flex flex-wrap gap-6 mb-12")},m(Qn,io){E(Qn,e,io),h(e,t),h(e,s),h(e,o),h(o,l),h(l,r),h(l,i),h(l,a),h(a,c),h(l,f),h(l,d),h(o,g),h(o,m),h(m,$),h(m,A),h(m,S),h(S,k),h(m,R),h(m,N),h(o,w),h(o,D),h(D,B),h(D,q),h(D,ee),h(ee,te),h(D,ye),h(D,$e),h(e,Oe),h(e,z),h(z,U),h(U,J),h(U,le),h(U,j),h(j,pe),h(U,we),h(U,V),h(V,Se),h(V,he),h(he,qe),h(z,xe),h(z,Je),h(Je,bt),h(Je,je),h(Je,nt),h(nt,Ke),h(Je,vt),h(Je,Fe),h(Fe,ue),h(Fe,wt),h(wt,Pe),h(Fe,be),h(Fe,st),h(st,Le),h(Fe,ne),h(Fe,Te),h(Te,X),h(z,Q),h(z,re),h(re,ke),h(re,Qe),h(re,We),h(We,kt),h(re,Gn),h(re,at),h(at,zt),h(at,xn),h(xn,Zn),h(z,Xn),h(z,Rt),h(Rt,An),h(Rt,hs),h(Rt,At),h(At,yt),h(Rt,Nn),h(Rt,Ft),h(Ft,Jt),h(Ft,Mn),h(Mn,gs)},p:K,i:K,o:K,d(Qn){Qn&&T(e)}}}function cu(n){return[{code:"bg-gray-200 px-1 rounded-sm"}]}class uu extends Z{constructor(e){super(),G(this,e,cu,au,W,{})}}const fu=Symbol("TABS");class jn{constructor(){Kt(this,"_tabs",[]);Kt(this,"_panels",[]);Kt(this,"_setLength",null);Kt(this,"_setActive",null);Kt(this,"_active",{index:NaN});Kt(this,"active");Kt(this,"length");this.active=So(this._active,e=>(this._setActive=e,this._setActive(this._active),()=>{this._setActive=null})),this.length=So(0,e=>(this._setLength=e,this._setLength(this._getLength()),()=>{this._setLength=null}))}_getLength(){return Math.max(this._tabs.length,this._panels.length)}push(e){const t=Symbol(e);return(e==="tab"?this._tabs:this._panels).push(t),this._setLength&&this._setLength(this._getLength()),(isNaN(this._active.index)||this._active.tab==null||this._active.panel==null)&&this.select(this._active.index||0),t}pop(e){const t=(s,o)=>{const l=s.indexOf(o);if(l<0)return!1;s.splice(l,1);const r=this._getLength();return this._setLength&&this._setLength(r),r===0?this.select(NaN):l<=this._active.index&&this.select(Math.min(this._active.index,r-1)),!0};return"tab"in e?t(this._tabs,e.tab):"panel"in e?t(this._panels,e.panel):!1}select(e){const t=o=>{let l=this._active;return isNaN(o)?l={index:NaN}:o>=0&&o<this._getLength()&&(l={index:o},this._tabs[o]&&(l.tab=this._tabs[o]),this._panels[o]&&(l.panel=this._panels[o])),l},s=o=>Object.is(this._active,o)?!1:(this._active=o,this._setActive&&this._setActive(this._active),!0);return typeof e=="number"?s(t(e)):"tab"in e&&e.tab?s(t(this._tabs.indexOf(e.tab))):"panel"in e&&e.panel?s(t(this._panels.indexOf(e.panel))):!1}}Kt(jn,"contextName",fu);function du(n){let e;const t=n[7].default,s=Ce(t,n,n[6],null);return{c(){s&&s.c()},m(o,l){s&&s.m(o,l),e=!0},p(o,[l]){s&&s.p&&(!e||l&64)&&Me(s,t,o,o[6],e?Ne(t,o[6],l,null):Re(o[6]),null)},i(o){e||(v(s,o),e=!0)},o(o){y(s,o),e=!1},d(o){s&&s.d(o)}}}function pu(n,e,t){let s,o,{$$slots:l={},$$scope:r}=e;const i=new jn;mi(jn.contextName,i);const a=i.active;Qt(n,a,d=>t(5,o=d));const c=i.length;Qt(n,c,d=>t(4,s=d));let{selected:u=NaN}=e,{length:f=0}=e;return n.$$set=d=>{"selected"in d&&t(2,u=d.selected),"length"in d&&t(3,f=d.length),"$$scope"in d&&t(6,r=d.$$scope)},n.$$.update=()=>{n.$$.dirty&32&&t(2,u=o.index),n.$$.dirty&36&&typeof u=="number"&&!i.select(u)&&t(2,u=o.index),n.$$.dirty&16&&t(3,f=s)},[a,c,u,f,s,o,r,l]}class ps extends Z{constructor(e){super(),G(this,e,pu,du,W,{selected:2,length:3})}}const hu=n=>({active:n&1}),ml=n=>({active:n[0].tab===n[1],activate:n[3]});function gu(n){let e;return{c(){e=F("Tab slot is empty")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function mu(n){let e;const t=n[5].default,s=Ce(t,n,n[4],ml),o=s||gu();return{c(){o&&o.c()},m(l,r){o&&o.m(l,r),e=!0},p(l,[r]){s&&s.p&&(!e||r&17)&&Me(s,t,l,l[4],e?Ne(t,l[4],r,hu):Re(l[4]),ml)},i(l){e||(v(o,l),e=!0)},o(l){y(o,l),e=!1},d(l){o&&o.d(l)}}}function _u(n,e,t){let s,{$$slots:o={},$$scope:l}=e;const r=Qs(jn.contextName),i=r.push("tab"),a=r.active;Qt(n,a,u=>t(0,s=u)),Xs(()=>r.pop({tab:i}));const c=()=>r.select({tab:i});return n.$$set=u=>{"$$scope"in u&&t(4,l=u.$$scope)},[s,i,a,c,l,o]}class Zt extends Z{constructor(e){super(),G(this,e,_u,mu,W,{})}}const bu=n=>({active:n&1}),_l=n=>({active:n[0].panel===n[1],activate:n[3]});function $u(n){let e;return{c(){e=F("Panel slot is empty")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function vu(n){let e;const t=n[5].default,s=Ce(t,n,n[4],_l),o=s||$u();return{c(){o&&o.c()},m(l,r){o&&o.m(l,r),e=!0},p(l,[r]){s&&s.p&&(!e||r&17)&&Me(s,t,l,l[4],e?Ne(t,l[4],r,bu):Re(l[4]),_l)},i(l){e||(v(o,l),e=!0)},o(l){y(o,l),e=!1},d(l){o&&o.d(l)}}}function wu(n,e,t){let s,{$$slots:o={},$$scope:l}=e;const r=Qs(jn.contextName),i=r.push("panel"),a=r.active;Qt(n,a,u=>t(0,s=u)),Xs(()=>r.pop({panel:i}));const c=()=>r.select({panel:i});return n.$$set=u=>{"$$scope"in u&&t(4,l=u.$$scope)},[s,i,a,c,l,o]}class Xt extends Z{constructor(e){super(),G(this,e,wu,vu,W,{})}}function ku(n){let e,t;const s=n[0].default,o=Ce(s,n,n[1],null);return{c(){e=_("section"),o&&o.c(),p(e,"class","doc-tabs")},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&2)&&Me(o,s,l,l[1],t?Ne(s,l[1],r,null):Re(l[1]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function yu(n){let e,t;return e=new ps({props:{$$slots:{default:[ku]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,[o]){const l={};o&2&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Tu(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(1,o=l.$$scope)},[s,o]}class vn extends Z{constructor(e){super(),G(this,e,Tu,yu,W,{})}}function bl(n){const e=n.parentElement;if(e&&e.scrollHeight>e.offsetHeight){const t=getComputedStyle(e),s=parseInt(t.paddingTop)||0,o=parseInt(t.paddingBottom)||0,l=e.offsetTop+s,r=e.offsetTop+e.offsetHeight-o,i=n.offsetTop-e.scrollTop,a=n.offsetTop+n.offsetHeight-e.scrollTop;return a>r?(e.scrollTop+=a-r,!0):i<l?(e.scrollTop-=l-i,!0):!1}else return!1}function $l(n){const e=n.parentElement;if(e&&e.scrollWidth>e.offsetWidth){const t=getComputedStyle(e),s=parseInt(t.paddingLeft)||0,o=parseInt(t.paddingRight)||0,l=e.offsetLeft+s,r=e.offsetLeft+e.offsetWidth-o,i=n.offsetLeft-e.scrollLeft,a=n.offsetLeft+n.offsetWidth-e.scrollLeft;return a>r?(e.scrollLeft+=a-r,!0):i<l?(e.scrollLeft-=l-i,!0):!1}else return!1}function Io(n,e){function t(s){s===!0?(bl(n),$l(n)):typeof s=="object"&&(s.x&&$l(n),s.y&&bl(n))}return t(e),{update(s){t(s)}}}function Eu(n){let e,t,s,o,l;const r=n[0].default,i=Ce(r,n,n[1],null);return{c(){e=_("button"),i&&i.c(),p(e,"class","doc-tabs__tab"),ie(e,"active",n[2])},m(a,c){E(a,e,c),i&&i.m(e,null),s=!0,o||(l=[Y(e,"click",function(){De(n[3])&&n[3].apply(this,arguments)}),Ye(t=Io.call(null,e,{x:n[2]}))],o=!0)},p(a,c){n=a,i&&i.p&&(!s||c&2)&&Me(i,r,n,n[1],s?Ne(r,n[1],c,null):Re(n[1]),null),t&&De(t.update)&&c&4&&t.update.call(null,{x:n[2]}),(!s||c&4)&&ie(e,"active",n[2])},i(a){s||(v(i,a),s=!0)},o(a){y(i,a),s=!1},d(a){a&&T(e),i&&i.d(a),o=!1,Ae(l)}}}function Su(n){let e,t;return e=new Zt({props:{$$slots:{default:[Eu,({active:s,activate:o})=>({2:s,3:o}),({active:s,activate:o})=>(s?4:0)|(o?8:0)]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,[o]){const l={};o&14&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function xu(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(1,o=l.$$scope)},[s,o]}class Ge extends Z{constructor(e){super(),G(this,e,xu,Su,W,{})}}function vl(n){let e,t,s,o,l,r,i,a,c,u;return{c(){e=_("div"),t=_("button"),s=_("span"),l=x(),r=_("button"),i=_("span"),p(s,"class","block"),tt(s,"transform","rotate(180deg)"),t.disabled=o=n[2].index===0,p(i,"class","block"),r.disabled=a=n[2].index>=n[1]-1,p(e,"class","doc-tabs__list__arrows")},m(f,d){E(f,e,d),h(e,t),h(t,s),s.innerHTML=n[6],h(e,l),h(e,r),h(r,i),i.innerHTML=n[6],c||(u=[Y(t,"click",n[10]),Y(r,"click",n[11])],c=!0)},p(f,d){d&4&&o!==(o=f[2].index===0)&&(t.disabled=o),d&6&&a!==(a=f[2].index>=f[1]-1)&&(r.disabled=a)},d(f){f&&T(e),c=!1,Ae(u)}}}function Au(n){let e,t,s,o,l,r,i;const a=n[9].default,c=Ce(a,n,n[8],null);let u=n[0]&&vl(n);return{c(){e=_("div"),t=_("div"),c&&c.c(),o=x(),u&&u.c(),p(t,"class","doc-tabs__list__tabs"),p(e,"class","doc-tabs__list")},m(f,d){E(f,e,d),h(e,t),c&&c.m(t,null),h(e,o),u&&u.m(e,null),l=!0,r||(i=Ye(s=n[7].call(null,t,n[1])),r=!0)},p(f,[d]){c&&c.p&&(!l||d&256)&&Me(c,a,f,f[8],l?Ne(a,f[8],d,null):Re(f[8]),null),s&&De(s.update)&&d&2&&s.update.call(null,f[1]),f[0]?u?u.p(f,d):(u=vl(f),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(f){l||(v(c,f),l=!0)},o(f){y(c,f),l=!1},d(f){f&&T(e),c&&c.d(f),u&&u.d(),r=!1,i()}}}function Cu(n,e,t){let s,o,{$$slots:l={},$$scope:r}=e;const i=Qs(jn.contextName),a=i.length;Qt(n,a,$=>t(1,s=$));const c=i.active;Qt(n,c,$=>t(2,o=$));const u='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="1em" height="1em"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill="currentColor"/></svg>';let f=!1;function d($,A){const S=()=>$.scrollWidth>$.offsetWidth;return t(0,f=S()),{update(){t(0,f=S())}}}const g=()=>i.select(o.index-1),m=()=>i.select(o.index+1);return n.$$set=$=>{"$$scope"in $&&t(8,r=$.$$scope)},[f,s,o,i,a,c,u,d,r,l,g,m]}class wn extends Z{constructor(e){super(),G(this,e,Cu,Au,W,{})}}const Nu=n=>({active:n&4}),wl=n=>({active:n[2]});function Mu(n){let e,t;const s=n[0].default,o=Ce(s,n,n[1],wl);return{c(){e=_("div"),o&&o.c(),p(e,"class","doc-tabs__panel"),ie(e,"active",n[2])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&6)&&Me(o,s,l,l[1],t?Ne(s,l[1],r,Nu):Re(l[1]),wl),(!t||r&4)&&ie(e,"active",l[2])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Ru(n){let e,t;return e=new Xt({props:{$$slots:{default:[Mu,({active:s})=>({2:s}),({active:s})=>s?4:0]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,[o]){const l={};o&6&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Pu(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(1,o=l.$$scope)},[s,o]}class Ze extends Z{constructor(e){super(),G(this,e,Pu,Ru,W,{})}}function Ou(n){let e,t,s,o;return{c(){e=_("a"),t=F("Home"),p(e,"class",n[0]),p(e,"href","/")},m(l,r){E(l,e,r),h(e,t),s||(o=Y(e,"click",ts(n[1])),s=!0)},p(l,[r]){r&1&&p(e,"class",l[0])},i:K,o:K,d(l){l&&T(e),s=!1,o()}}}function Lu(n,e,t){let s;Qt(n,ls,r=>t(2,s=r));let{class:o=void 0}=e;function l(){Nc(ls,s=new String(""),s)}return n.$$set=r=>{"class"in r&&t(0,o=r.class)},[o,l]}class kn extends Z{constructor(e){super(),G(this,e,Lu,Ou,W,{class:0})}}var nn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Bo={exports:{}};function zo(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(function(e){var t=n[e];typeof t=="object"&&!Object.isFrozen(t)&&zo(t)}),n}Bo.exports=zo;Bo.exports.default=zo;class kl{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Pi(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function sn(n,...e){const t=Object.create(null);for(const s in n)t[s]=n[s];return e.forEach(function(s){for(const o in s)t[o]=s[o]}),t}const Du="</span>",yl=n=>!!n.scope||n.sublanguage&&n.language,Iu=(n,{prefix:e})=>{if(n.includes(".")){const t=n.split(".");return[`${e}${t.shift()}`,...t.map((s,o)=>`${s}${"_".repeat(o+1)}`)].join(" ")}return`${e}${n}`};class Bu{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=Pi(e)}openNode(e){if(!yl(e))return;let t="";e.sublanguage?t=`language-${e.language}`:t=Iu(e.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(e){yl(e)&&(this.buffer+=Du)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Tl=(n={})=>{const e={children:[]};return Object.assign(e,n),e};class Fo{constructor(){this.rootNode=Tl(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=Tl({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(s=>this._walk(e,s)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{Fo._collapse(t)}))}}class zu extends Fo{constructor(e){super(),this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const s=e.root;s.sublanguage=!0,s.language=t,this.add(s)}toHTML(){return new Bu(this,this.options).value()}finalize(){return!0}}function rs(n){return n?typeof n=="string"?n:n.source:null}function Oi(n){return yn("(?=",n,")")}function Fu(n){return yn("(?:",n,")*")}function Hu(n){return yn("(?:",n,")?")}function yn(...n){return n.map(t=>rs(t)).join("")}function ju(n){const e=n[n.length-1];return typeof e=="object"&&e.constructor===Object?(n.splice(n.length-1,1),e):{}}function Ho(...n){return"("+(ju(n).capture?"":"?:")+n.map(s=>rs(s)).join("|")+")"}function Li(n){return new RegExp(n.toString()+"|").exec("").length-1}function Uu(n,e){const t=n&&n.exec(e);return t&&t.index===0}const qu=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function jo(n,{joinWith:e}){let t=0;return n.map(s=>{t+=1;const o=t;let l=rs(s),r="";for(;l.length>0;){const i=qu.exec(l);if(!i){r+=l;break}r+=l.substring(0,i.index),l=l.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?r+="\\"+String(Number(i[1])+o):(r+=i[0],i[0]==="("&&t++)}return r}).map(s=>`(${s})`).join(e)}const Ku=/\b\B/,Di="[a-zA-Z]\\w*",Uo="[a-zA-Z_]\\w*",Ii="\\b\\d+(\\.\\d+)?",Bi="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",zi="\\b(0b[01]+)",Wu="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Gu=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=yn(e,/.*\b/,n.binary,/\b.*/)),sn({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,s)=>{t.index!==0&&s.ignoreMatch()}},n)},is={begin:"\\\\[\\s\\S]",relevance:0},Zu={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[is]},Xu={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[is]},Qu={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Js=function(n,e,t={}){const s=sn({scope:"comment",begin:n,end:e,contains:[]},t);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=Ho("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:yn(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},Yu=Js("//","$"),Ju=Js("/\\*","\\*/"),Vu=Js("#","$"),ef={scope:"number",begin:Ii,relevance:0},tf={scope:"number",begin:Bi,relevance:0},nf={scope:"number",begin:zi,relevance:0},sf={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[is,{begin:/\[/,end:/\]/,relevance:0,contains:[is]}]}]},of={scope:"title",begin:Di,relevance:0},lf={scope:"title",begin:Uo,relevance:0},rf={begin:"\\.\\s*"+Uo,relevance:0},af=function(n){return Object.assign(n,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var Cs=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Ku,IDENT_RE:Di,UNDERSCORE_IDENT_RE:Uo,NUMBER_RE:Ii,C_NUMBER_RE:Bi,BINARY_NUMBER_RE:zi,RE_STARTERS_RE:Wu,SHEBANG:Gu,BACKSLASH_ESCAPE:is,APOS_STRING_MODE:Zu,QUOTE_STRING_MODE:Xu,PHRASAL_WORDS_MODE:Qu,COMMENT:Js,C_LINE_COMMENT_MODE:Yu,C_BLOCK_COMMENT_MODE:Ju,HASH_COMMENT_MODE:Vu,NUMBER_MODE:ef,C_NUMBER_MODE:tf,BINARY_NUMBER_MODE:nf,REGEXP_MODE:sf,TITLE_MODE:of,UNDERSCORE_TITLE_MODE:lf,METHOD_GUARD:rf,END_SAME_AS_BEGIN:af});function cf(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function uf(n,e){n.className!==void 0&&(n.scope=n.className,delete n.className)}function ff(n,e){e&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=cf,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function df(n,e){Array.isArray(n.illegal)&&(n.illegal=Ho(...n.illegal))}function pf(n,e){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function hf(n,e){n.relevance===void 0&&(n.relevance=1)}const gf=(n,e)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},n);Object.keys(n).forEach(s=>{delete n[s]}),n.keywords=t.keywords,n.begin=yn(t.beforeMatch,Oi(t.begin)),n.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},n.relevance=0,delete t.beforeMatch},mf=["of","and","for","in","not","or","if","then","parent","list","value"],_f="keyword";function Fi(n,e,t=_f){const s=Object.create(null);return typeof n=="string"?o(t,n.split(" ")):Array.isArray(n)?o(t,n):Object.keys(n).forEach(function(l){Object.assign(s,Fi(n[l],e,l))}),s;function o(l,r){e&&(r=r.map(i=>i.toLowerCase())),r.forEach(function(i){const a=i.split("|");s[a[0]]=[l,bf(a[0],a[1])]})}}function bf(n,e){return e?Number(e):$f(n)?0:1}function $f(n){return mf.includes(n.toLowerCase())}const El={},hn=n=>{console.error(n)},Sl=(n,...e)=>{console.log(`WARN: ${n}`,...e)},In=(n,e)=>{El[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),El[`${n}/${e}`]=!0)},Us=new Error;function Hi(n,e,{key:t}){let s=0;const o=n[t],l={},r={};for(let i=1;i<=e.length;i++)r[i+s]=o[i],l[i+s]=!0,s+=Li(e[i-1]);n[t]=r,n[t]._emit=l,n[t]._multi=!0}function vf(n){if(Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw hn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Us;if(typeof n.beginScope!="object"||n.beginScope===null)throw hn("beginScope must be object"),Us;Hi(n,n.begin,{key:"beginScope"}),n.begin=jo(n.begin,{joinWith:""})}}function wf(n){if(Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw hn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Us;if(typeof n.endScope!="object"||n.endScope===null)throw hn("endScope must be object"),Us;Hi(n,n.end,{key:"endScope"}),n.end=jo(n.end,{joinWith:""})}}function kf(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)}function yf(n){kf(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),vf(n),wf(n)}function Tf(n){function e(r,i){return new RegExp(rs(r),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,i]),this.matchAt+=Li(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(a=>a[1]);this.matcherRe=e(jo(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(i);if(!a)return null;const c=a.findIndex((f,d)=>d>0&&f!==void 0),u=this.matchIndexes[c];return a.splice(0,c),Object.assign(a,u)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const a=new t;return this.rules.slice(i).forEach(([c,u])=>a.addRule(c,u)),a.compile(),this.multiRegexes[i]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,a){this.rules.push([i,a]),a.type==="begin"&&this.count++}exec(i){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let c=a.exec(i);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(i)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function o(r){const i=new s;return r.contains.forEach(a=>i.addRule(a.begin,{rule:a,type:"begin"})),r.terminatorEnd&&i.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&i.addRule(r.illegal,{type:"illegal"}),i}function l(r,i){const a=r;if(r.isCompiled)return a;[uf,pf,yf,gf].forEach(u=>u(r,i)),n.compilerExtensions.forEach(u=>u(r,i)),r.__beforeBegin=null,[ff,df,hf].forEach(u=>u(r,i)),r.isCompiled=!0;let c=null;return typeof r.keywords=="object"&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),c=r.keywords.$pattern,delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=Fi(r.keywords,n.case_insensitive)),a.keywordPatternRe=e(c,!0),i&&(r.begin||(r.begin=/\B|\b/),a.beginRe=e(a.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(a.endRe=e(a.end)),a.terminatorEnd=rs(a.end)||"",r.endsWithParent&&i.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+i.terminatorEnd)),r.illegal&&(a.illegalRe=e(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(u){return Ef(u==="self"?r:u)})),r.contains.forEach(function(u){l(u,a)}),r.starts&&l(r.starts,i),a.matcher=o(a),a}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=sn(n.classNameAliases||{}),l(n)}function ji(n){return n?n.endsWithParent||ji(n.starts):!1}function Ef(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return sn(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:ji(n)?sn(n,{starts:n.starts?sn(n.starts):null}):Object.isFrozen(n)?sn(n):n}var Sf="11.7.0";class xf extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const vo=Pi,xl=sn,Al=Symbol("nomatch"),Af=7,Cf=function(n){const e=Object.create(null),t=Object.create(null),s=[];let o=!0;const l="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:zu};function a(z){return i.noHighlightRe.test(z)}function c(z){let U=z.className+" ";U+=z.parentNode?z.parentNode.className:"";const J=i.languageDetectRe.exec(U);if(J){const le=q(J[1]);return le||(Sl(l.replace("{}",J[1])),Sl("Falling back to no-highlight mode for this block.",z)),le?J[1]:"no-highlight"}return U.split(/\s+/).find(le=>a(le)||q(le))}function u(z,U,J){let le="",j="";typeof U=="object"?(le=z,J=U.ignoreIllegals,j=U.language):(In("10.7.0","highlight(lang, code, ...args) has been deprecated."),In("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),j=z,le=U),J===void 0&&(J=!0);const pe={code:le,language:j};$e("before:highlight",pe);const ae=pe.result?pe.result:f(pe.language,pe.code,J);return ae.code=pe.code,$e("after:highlight",ae),ae}function f(z,U,J,le){const j=Object.create(null);function pe(X,Q){return X.keywords[Q]}function ae(){if(!ue.keywords){Pe.addText(be);return}let X=0;ue.keywordPatternRe.lastIndex=0;let Q=ue.keywordPatternRe.exec(be),re="";for(;Q;){re+=be.substring(X,Q.index);const ke=it.case_insensitive?Q[0].toLowerCase():Q[0],Qe=pe(ue,ke);if(Qe){const[We,kt]=Qe;if(Pe.addText(re),re="",j[ke]=(j[ke]||0)+1,j[ke]<=Af&&(st+=kt),We.startsWith("_"))re+=Q[0];else{const cn=it.classNameAliases[We]||We;Pe.addKeyword(Q[0],cn)}}else re+=Q[0];X=ue.keywordPatternRe.lastIndex,Q=ue.keywordPatternRe.exec(be)}re+=be.substring(X),Pe.addText(re)}function we(){if(be==="")return;let X=null;if(typeof ue.subLanguage=="string"){if(!e[ue.subLanguage]){Pe.addText(be);return}X=f(ue.subLanguage,be,!0,wt[ue.subLanguage]),wt[ue.subLanguage]=X._top}else X=g(be,ue.subLanguage.length?ue.subLanguage:null);ue.relevance>0&&(st+=X.relevance),Pe.addSublanguage(X._emitter,X.language)}function V(){ue.subLanguage!=null?we():ae(),be=""}function Se(X,Q){let re=1;const ke=Q.length-1;for(;re<=ke;){if(!X._emit[re]){re++;continue}const Qe=it.classNameAliases[X[re]]||X[re],We=Q[re];Qe?Pe.addKeyword(We,Qe):(be=We,ae(),be=""),re++}}function he(X,Q){return X.scope&&typeof X.scope=="string"&&Pe.openNode(it.classNameAliases[X.scope]||X.scope),X.beginScope&&(X.beginScope._wrap?(Pe.addKeyword(be,it.classNameAliases[X.beginScope._wrap]||X.beginScope._wrap),be=""):X.beginScope._multi&&(Se(X.beginScope,Q),be="")),ue=Object.create(X,{parent:{value:ue}}),ue}function qe(X,Q,re){let ke=Uu(X.endRe,re);if(ke){if(X["on:end"]){const Qe=new kl(X);X["on:end"](Q,Qe),Qe.isMatchIgnored&&(ke=!1)}if(ke){for(;X.endsParent&&X.parent;)X=X.parent;return X}}if(X.endsWithParent)return qe(X.parent,Q,re)}function xe(X){return ue.matcher.regexIndex===0?(be+=X[0],1):(Te=!0,0)}function Je(X){const Q=X[0],re=X.rule,ke=new kl(re),Qe=[re.__beforeBegin,re["on:begin"]];for(const We of Qe)if(We&&(We(X,ke),ke.isMatchIgnored))return xe(Q);return re.skip?be+=Q:(re.excludeBegin&&(be+=Q),V(),!re.returnBegin&&!re.excludeBegin&&(be=Q)),he(re,X),re.returnBegin?0:Q.length}function bt(X){const Q=X[0],re=U.substring(X.index),ke=qe(ue,X,re);if(!ke)return Al;const Qe=ue;ue.endScope&&ue.endScope._wrap?(V(),Pe.addKeyword(Q,ue.endScope._wrap)):ue.endScope&&ue.endScope._multi?(V(),Se(ue.endScope,X)):Qe.skip?be+=Q:(Qe.returnEnd||Qe.excludeEnd||(be+=Q),V(),Qe.excludeEnd&&(be=Q));do ue.scope&&Pe.closeNode(),!ue.skip&&!ue.subLanguage&&(st+=ue.relevance),ue=ue.parent;while(ue!==ke.parent);return ke.starts&&he(ke.starts,X),Qe.returnEnd?0:Q.length}function je(){const X=[];for(let Q=ue;Q!==it;Q=Q.parent)Q.scope&&X.unshift(Q.scope);X.forEach(Q=>Pe.openNode(Q))}let nt={};function Ke(X,Q){const re=Q&&Q[0];if(be+=X,re==null)return V(),0;if(nt.type==="begin"&&Q.type==="end"&&nt.index===Q.index&&re===""){if(be+=U.slice(Q.index,Q.index+1),!o){const ke=new Error(`0 width match regex (${z})`);throw ke.languageName=z,ke.badRule=nt.rule,ke}return 1}if(nt=Q,Q.type==="begin")return Je(Q);if(Q.type==="illegal"&&!J){const ke=new Error('Illegal lexeme "'+re+'" for mode "'+(ue.scope||"<unnamed>")+'"');throw ke.mode=ue,ke}else if(Q.type==="end"){const ke=bt(Q);if(ke!==Al)return ke}if(Q.type==="illegal"&&re==="")return 1;if(ne>1e5&&ne>Q.index*3)throw new Error("potential infinite loop, way more iterations than matches");return be+=re,re.length}const it=q(z);if(!it)throw hn(l.replace("{}",z)),new Error('Unknown language: "'+z+'"');const vt=Tf(it);let Fe="",ue=le||vt;const wt={},Pe=new i.__emitter(i);je();let be="",st=0,Le=0,ne=0,Te=!1;try{for(ue.matcher.considerAll();;){ne++,Te?Te=!1:ue.matcher.considerAll(),ue.matcher.lastIndex=Le;const X=ue.matcher.exec(U);if(!X)break;const Q=U.substring(Le,X.index),re=Ke(Q,X);Le=X.index+re}return Ke(U.substring(Le)),Pe.closeAllNodes(),Pe.finalize(),Fe=Pe.toHTML(),{language:z,value:Fe,relevance:st,illegal:!1,_emitter:Pe,_top:ue}}catch(X){if(X.message&&X.message.includes("Illegal"))return{language:z,value:vo(U),illegal:!0,relevance:0,_illegalBy:{message:X.message,index:Le,context:U.slice(Le-100,Le+100),mode:X.mode,resultSoFar:Fe},_emitter:Pe};if(o)return{language:z,value:vo(U),illegal:!1,relevance:0,errorRaised:X,_emitter:Pe,_top:ue};throw X}}function d(z){const U={value:vo(z),illegal:!1,relevance:0,_top:r,_emitter:new i.__emitter(i)};return U._emitter.addText(z),U}function g(z,U){U=U||i.languages||Object.keys(e);const J=d(z),le=U.filter(q).filter(te).map(V=>f(V,z,!1));le.unshift(J);const j=le.sort((V,Se)=>{if(V.relevance!==Se.relevance)return Se.relevance-V.relevance;if(V.language&&Se.language){if(q(V.language).supersetOf===Se.language)return 1;if(q(Se.language).supersetOf===V.language)return-1}return 0}),[pe,ae]=j,we=pe;return we.secondBest=ae,we}function m(z,U,J){const le=U&&t[U]||J;z.classList.add("hljs"),z.classList.add(`language-${le}`)}function $(z){let U=null;const J=c(z);if(a(J))return;if($e("before:highlightElement",{el:z,language:J}),z.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(z)),i.throwUnescapedHTML))throw new xf("One of your code blocks includes unescaped HTML.",z.innerHTML);U=z;const le=U.textContent,j=J?u(le,{language:J,ignoreIllegals:!0}):g(le);z.innerHTML=j.value,m(z,J,j.language),z.result={language:j.language,re:j.relevance,relevance:j.relevance},j.secondBest&&(z.secondBest={language:j.secondBest.language,relevance:j.secondBest.relevance}),$e("after:highlightElement",{el:z,result:j,text:le})}function A(z){i=xl(i,z)}const S=()=>{R(),In("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function k(){R(),In("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let M=!1;function R(){if(document.readyState==="loading"){M=!0;return}document.querySelectorAll(i.cssSelector).forEach($)}function N(){M&&R()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",N,!1);function w(z,U){let J=null;try{J=U(n)}catch(le){if(hn("Language definition for '{}' could not be registered.".replace("{}",z)),o)hn(le);else throw le;J=r}J.name||(J.name=z),e[z]=J,J.rawDefinition=U.bind(null,n),J.aliases&&ee(J.aliases,{languageName:z})}function D(z){delete e[z];for(const U of Object.keys(t))t[U]===z&&delete t[U]}function B(){return Object.keys(e)}function q(z){return z=(z||"").toLowerCase(),e[z]||e[t[z]]}function ee(z,{languageName:U}){typeof z=="string"&&(z=[z]),z.forEach(J=>{t[J.toLowerCase()]=U})}function te(z){const U=q(z);return U&&!U.disableAutodetect}function ce(z){z["before:highlightBlock"]&&!z["before:highlightElement"]&&(z["before:highlightElement"]=U=>{z["before:highlightBlock"](Object.assign({block:U.el},U))}),z["after:highlightBlock"]&&!z["after:highlightElement"]&&(z["after:highlightElement"]=U=>{z["after:highlightBlock"](Object.assign({block:U.el},U))})}function ye(z){ce(z),s.push(z)}function $e(z,U){const J=z;s.forEach(function(le){le[J]&&le[J](U)})}function Oe(z){return In("10.7.0","highlightBlock will be removed entirely in v12.0"),In("10.7.0","Please use highlightElement now."),$(z)}Object.assign(n,{highlight:u,highlightAuto:g,highlightAll:R,highlightElement:$,highlightBlock:Oe,configure:A,initHighlighting:S,initHighlightingOnLoad:k,registerLanguage:w,unregisterLanguage:D,listLanguages:B,getLanguage:q,registerAliases:ee,autoDetection:te,inherit:xl,addPlugin:ye}),n.debugMode=function(){o=!1},n.safeMode=function(){o=!0},n.versionString=Sf,n.regex={concat:yn,lookahead:Oi,either:Ho,optional:Hu,anyNumberOfTimes:Fu};for(const z in Cs)typeof Cs[z]=="object"&&Bo.exports(Cs[z]);return Object.assign(n,Cs),n};var as=Cf({}),Nf=as;as.HighlightJS=as;as.default=as;const Ns=Nf;function Mf(n){const e=n.regex,t=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),s=/[\p{L}0-9._:-]+/u,o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},l={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},r=n.inherit(l,{begin:/\(/,end:/\)/}),i=n.inherit(n.APOS_STRING_MODE,{className:"string"}),a=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:s,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[l,a,i,r,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[l,r,a,i]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Cl="[A-Za-z$_][0-9A-Za-z$_]*",Rf=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Pf=["true","false","null","undefined","NaN","Infinity"],Ui=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],qi=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ki=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Of=["arguments","this","super","console","window","document","localStorage","module","global"],Lf=[].concat(Ki,Ui,qi);function Df(n){const e=n.regex,t=(U,{after:J})=>{const le="</"+U[0].slice(1);return U.input.indexOf(le,J)!==-1},s=Cl,o={begin:"<>",end:"</>"},l=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(U,J)=>{const le=U[0].length+U.index,j=U.input[le];if(j==="<"||j===","){J.ignoreMatch();return}j===">"&&(t(U,{after:le})||J.ignoreMatch());let pe;const ae=U.input.substring(le);if(pe=ae.match(/^\s*=/)){J.ignoreMatch();return}if((pe=ae.match(/^\s+extends\s+/))&&pe.index===0){J.ignoreMatch();return}}},i={$pattern:Cl,keyword:Rf,literal:Pf,built_in:Lf,"variable.language":Of},a="[0-9](_?[0-9])*",c=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},m={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},$={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},S={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},k=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,g,m,$,{match:/\$\d+/},f];d.contains=k.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(k)});const M=[].concat(S,d.contains),R=M.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(M)}]),N={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R},w={variants:[{match:[/class/,/\s+/,s,/\s+/,/extends/,/\s+/,e.concat(s,"(",e.concat(/\./,s),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,s],scope:{1:"keyword",3:"title.class"}}]},D={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ui,...qi]}},B={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},q={variants:[{match:[/function/,/\s+/,s,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function te(U){return e.concat("(?!",U.join("|"),")")}const ce={match:e.concat(/\b/,te([...Ki,"super","import"]),s,e.lookahead(/\(/)),className:"title.function",relevance:0},ye={begin:e.concat(/\./,e.lookahead(e.concat(s,/(?![0-9A-Za-z$_(])/))),end:s,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},$e={match:[/get|set/,/\s+/,s,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},Oe="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",z={match:[/const|var|let/,/\s+/,s,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Oe)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:D},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),B,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,g,m,$,S,{match:/\$\d+/},f,D,{className:"attr",begin:s+e.lookahead(":"),relevance:0},z,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[S,n.REGEXP_MODE,{className:"function",begin:Oe,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:l},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,n.inherit(n.TITLE_MODE,{begin:s,className:"title.function"})]},{match:/\.\.\./,relevance:0},ye,{match:"\\$"+s,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},ce,ee,w,$e,{match:/\$[(.]/}]}}const If=n=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:n.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:n.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),Bf=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],zf=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],Ff=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],Hf=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],jf=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function Uf(n){const e=n.regex,t=If(n),s={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},o="and or not only",l=/@-?\w[\w]*(-\w+)*/,r="[a-zA-Z-][a-zA-Z0-9_-]*",i=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,s,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+r,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Ff.join("|")+")"},{begin:":(:)?("+Hf.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+jf.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...i,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...i,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:e.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:l},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:o,attribute:zf.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...i,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Bf.join("|")+")\\b"}]}}const qf=n=>({highlighted:n&2}),Nl=n=>({highlighted:n[1]});function Kf(n){let e,t,s=[{"data-language":"svelte"},n[2]],o={};for(let l=0;l<s.length;l+=1)o=xt(o,s[l]);return{c(){e=_("pre"),t=_("code"),p(t,"class","hljs"),pl(e,o),ie(e,"langtag",n[0]),ie(e,"svelte-d72vtw",!0)},m(l,r){E(l,e,r),h(e,t),t.innerHTML=n[1]},p(l,r){r&2&&(t.innerHTML=l[1]),pl(e,o=$n(s,[{"data-language":"svelte"},r&4&&l[2]])),ie(e,"langtag",l[0]),ie(e,"svelte-d72vtw",!0)},d(l){l&&T(e)}}}function Wf(n){let e;const t=n[5].default,s=Ce(t,n,n[4],Nl),o=s||Kf(n);return{c(){o&&o.c()},m(l,r){o&&o.m(l,r),e=!0},p(l,[r]){s?s.p&&(!e||r&18)&&Me(s,t,l,l[4],e?Ne(t,l[4],r,qf):Re(l[4]),Nl):o&&o.p&&(!e||r&7)&&o.p(l,e?r:-1)},i(l){e||(v(o,l),e=!0)},o(l){y(o,l),e=!1},d(l){o&&o.d(l)}}}function Gf(n,e,t){let s;const o=["code","langtag"];let l=Bs(e,o),{$$slots:r={},$$scope:i}=e,{code:a}=e,{langtag:c=!1}=e;const u=No();return Ns.registerLanguage("xml",Mf),Ns.registerLanguage("javascript",Df),Ns.registerLanguage("css",Uf),Hc(()=>{s&&u("highlight",{highlighted:s})}),n.$$set=f=>{e=xt(xt({},e),ui(f)),t(2,l=Bs(e,o)),"code"in f&&t(3,a=f.code),"langtag"in f&&t(0,c=f.langtag),"$$scope"in f&&t(4,i=f.$$scope)},n.$$.update=()=>{n.$$.dirty&8&&t(1,s=Ns.highlightAuto(a).value)},[c,s,l,a,i,r]}class Zf extends Z{constructor(e){super(),G(this,e,Gf,Wf,W,{code:3,langtag:0})}}const Xf=Zf;function Qf(n){let e,t,s,o;return s=new Xf({props:{code:n[0]}}),{c(){e=_("h3"),e.textContent="Code",t=x(),L(s.$$.fragment)},m(l,r){E(l,e,r),E(l,t,r),P(s,l,r),o=!0},p(l,[r]){const i={};r&1&&(i.code=l[0]),s.$set(i)},i(l){o||(v(s.$$.fragment,l),o=!0)},o(l){y(s.$$.fragment,l),o=!1},d(l){l&&T(e),l&&T(t),O(s,l)}}}function Yf(n,e,t){let{code:s=""}=e;return n.$$set=o=>{"code"in o&&t(0,s=o.code)},[s]}class dt extends Z{constructor(e){super(),G(this,e,Yf,Qf,W,{code:0})}}function Tn(n){const e=document.title;bn(()=>document.title=n),Xs(()=>document.title=e)}const Jf=`<div class="component__source">Source <code>Tabs.svelte</code></div>
<h1 class="component__name">Tabs</h1>
<div class="component__comment"><p>This is the root component. It&#39;s a container of the <code>Tab</code> and <code>Panel</code> components. The basic structure of components is:</p>
<pre><code class="language-tsx">&lt;Tabs&gt;
  &lt;div&gt; &lt;!‐‐ optional wrapper ‐‐&gt;
    &lt;Tab&gt;A&lt;/Tab&gt;
    &lt;Tab&gt;B&lt;/Tab&gt;
  &lt;/div&gt;
  &lt;div&gt; &lt;!‐‐ optional wrapper ‐‐&gt;
    &lt;TabPanel&gt;A&lt;/TabPanel&gt;
    &lt;TabPanel&gt;B&lt;/TabPanel&gt;
  &lt;/div&gt;
&lt;/Tabs&gt;
</code></pre>
<p>But what you really need to do is fill the slots with useful items such as these:</p>
<pre><code class="language-tsx">&lt;Tabs&gt;
  &lt;Tab let:active let:activate&gt;&lt;button class:active on:click={activate}&gt;A&lt;/button&gt;&lt;/Tab&gt;
  &lt;Tab let:active let:activate&gt;&lt;button class:active on:click={activate}&gt;B&lt;/button&gt;&lt;/Tab&gt;
  &lt;TabPanel let:active&gt;
    &lt;div style:display={active ? &#39;block&#39; : &#39;none&#39;}&gt;Content of A&lt;/div&gt;
  &lt;/TabPanel&gt;
  &lt;TabPanel let:active&gt;
    &lt;div style:display={active ? &#39;block&#39; : &#39;none&#39;}&gt;Content of B&lt;/div&gt;
  &lt;/TabPanel&gt;
&lt;/Tabs&gt;
</code></pre>
<p><strong>Important!</strong></p>
<p>The <code>Tab</code> and <code>Panel</code> components are added to the end of the list during rendering. To keep the correct component order, reassign the entire tab list or use the <a href="https://svelte.dev/docs#template-syntax-key"><code>{#keys}</code></a> or <a href="https://svelte.dev/docs#template-syntax-each"><code>{#each key}</code></a>.</p>
<p>Under the hood, the component uses a <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/tabs/tabs-context.js">TabContext</a> of this type:</p>
<pre><code class="language-js">class TabsContext {
  readonly active: Readable&lt;ContextActive&gt;;
  readonly length: Readable&lt;number&gt;;
  static readonly contextName: symbol;
  push(entity: &#39;tab&#39; | &#39;panel&#39;): symbol;
  pop(entity: { tab: symbol; } | { panel: symbol; }): boolean;
  select(entity: number | { tab: symbol; } | { panel: symbol; }): boolean;
}
</code></pre>
<p>You can access the context with the code <code>getContext(TabsContext.contextName)</code>. You can also extend the class if there is a lack of functionality.</p>
</div>
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop name</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">selected</td>
<td class="prop__type"><code>number</code></td>
<td class="prop__value"></td>
<td class="prop__description"><p><strong>Reactive, read/write</strong>. The current index of the <code>Tab</code>/<code>Panel</code> pair members.
The index will not go beyond the range of the tabs, so you can safely assign a new value.</p>
</td></tr>
<tr><td class="prop__name">length</td>
<td class="prop__type"><code>number</code></td>
<td class="prop__value"><code>0</code></td>
<td class="prop__description"><p><strong>Reactive, read</strong>. The current number of <code>Tab</code>/<code>Panel</code> pair members</p>
</td></tr></table>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{}</code></td></tr></table>
<hr>
<div class="component__source">Source <code>Tab.svelte</code></div>
<h1 class="component__name">Tab</h1>
<div class="component__comment"><p>The component sends <code>active</code> and <code>activate</code> props to the slot.</p>
<ul>
<li><code>active: boolean</code> — whether the current tab is active</li>
<li><code>activate: () =&gt; void</code> — call this function to make the current tab active</li>
</ul>
</div>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{ active: {$active.tab === id}, activate: any }</code></td></tr><tr><th colspan="3">Fallback</th></tr>
<tr><td class="slot__fallback" colspan="3"><pre><code>Tab slot is empty
</code></pre>
</td></tr></table>
<hr>
<div class="component__source">Source <code>Panel.svelte</code></div>
<h1 class="component__name">Panel</h1>
<div class="component__comment"><p>The component sends <code>active</code> and <code>activate</code> props to the slot.</p>
<ul>
<li><code>active: boolean</code> — whether the current panel is active</li>
<li><code>activate: () =&gt; void</code> — call this function to make the current panel active</li>
</ul>
</div>
<h2 class="component-tbl-header">Slots</h2><table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr><tr><td class="slot__name">__default__</td>
<td class="slot__default"><code>true</code></td>
<td class="slot__props"><code>{ active: {$active.panel === id}, activate: any }</code></td></tr><tr><th colspan="3">Fallback</th></tr>
<tr><td class="slot__fallback" colspan="3"><pre><code>Panel slot is empty
</code></pre>
</td></tr></table>
`;function Vf(){const n=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||n(e)},bn(()=>{console.warn=n})}function Ml(n,e,t){const s=n.slice();return s[18]=e[t],s}function Rl(n,e,t){const s=n.slice();return s[18]=e[t],s}function Pl(n,e,t){const s=n.slice();return s[10]=e[t],s}function Ol(n,e,t){const s=n.slice();return s[13]=e[t],s[15]=t,s}function Ll(n,e,t){const s=n.slice();return s[16]=e[t],s[15]=t,s}function Dl(n,e,t){const s=n.slice();return s[7]=e[t],s}function ed(n){let e,t,s,o;const l=[od,sd,nd],r=[];function i(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=i(n),t=r[e]=l[e](n),{c(){t.c(),s=Ee()},m(a,c){r[e].m(a,c),E(a,s,c),o=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(me(),y(r[u],1,1,()=>{r[u]=null}),_e(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(s.parentNode,s))},i(a){o||(v(t),o=!0)},o(a){y(t),o=!1},d(a){r[e].d(a),a&&T(s)}}}function td(n){let e,t,s=n[1],o=[];for(let r=0;r<s.length;r+=1)o[r]=jl(Dl(n,s,r));const l=r=>y(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Ee()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);E(r,e,i),t=!0},p(r,i){if(i&34){s=r[1];let a;for(a=0;a<s.length;a+=1){const c=Dl(r,s,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=jl(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(me(),a=s.length;a<o.length;a+=1)l(a);_e()}},i(r){if(!t){for(let i=0;i<s.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)y(o[i]);t=!1},d(r){He(o,r),r&&T(e)}}}function nd(n){let e,t,s;const o=[n[6]];var l=n[5][n[0]];function r(i){let a={$$slots:{default:[id]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=xt(a,o[c]);return{props:a}}return l&&(e=ze(l,r(n))),{c(){e&&L(e.$$.fragment),t=Ee()},m(i,a){e&&P(e,i,a),E(i,t,a),s=!0},p(i,a){const c=a&64?$n(o,[qn(i[6])]):{};if(a&8388706&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5][i[0]])){if(e){me();const u=e;y(u.$$.fragment,1,0,()=>{O(u,1)}),_e()}l?(e=ze(l,r(i)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){s||(e&&v(e.$$.fragment,i),s=!0)},o(i){e&&y(e.$$.fragment,i),s=!1},d(i){i&&T(t),e&&O(e,i)}}}function sd(n){let e,t,s,o;const l=[cd,ad],r=[];function i(a,c){return a[4]?0:1}return e=i(n),t=r[e]=l[e](n),{c(){t.c(),s=Ee()},m(a,c){r[e].m(a,c),E(a,s,c),o=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(me(),y(r[u],1,1,()=>{r[u]=null}),_e(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(s.parentNode,s))},i(a){o||(v(t),o=!0)},o(a){y(t),o=!1},d(a){r[e].d(a),a&&T(s)}}}function od(n){let e,t,s;var o=n[5].table;function l(r){return{props:{$$slots:{default:[vd]},$$scope:{ctx:r}}}}return o&&(e=ze(o,l(n))),{c(){e&&L(e.$$.fragment),t=Ee()},m(r,i){e&&P(e,r,i),E(r,t,i),s=!0},p(r,i){const a={};if(i&8388716&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].table)){if(e){me();const c=e;y(c.$$.fragment,1,0,()=>{O(c,1)}),_e()}o?(e=ze(o,l(r)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){s||(e&&v(e.$$.fragment,r),s=!0)},o(r){e&&y(e.$$.fragment,r),s=!1},d(r){r&&T(t),e&&O(e,r)}}}function ld(n){let e=n[6].raw+"",t;return{c(){t=F(e)},m(s,o){E(s,t,o)},p(s,o){o&64&&e!==(e=s[6].raw+"")&&Ve(t,e)},i:K,o:K,d(s){s&&T(t)}}}function rd(n){let e,t;return e=new En({props:{tokens:n[1],renderers:n[5]}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&2&&(l.tokens=s[1]),o&32&&(l.renderers=s[5]),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function id(n){let e,t,s,o;const l=[rd,ld],r=[];function i(a,c){return a[1]?0:1}return e=i(n),t=r[e]=l[e](n),{c(){t.c(),s=Ee()},m(a,c){r[e].m(a,c),E(a,s,c),o=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(me(),y(r[u],1,1,()=>{r[u]=null}),_e(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(s.parentNode,s))},i(a){o||(v(t),o=!0)},o(a){y(t),o=!1},d(a){r[e].d(a),a&&T(s)}}}function ad(n){let e,t,s;const o=[{ordered:n[4]},n[6]];var l=n[5].list;function r(i){let a={$$slots:{default:[fd]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=xt(a,o[c]);return{props:a}}return l&&(e=ze(l,r(n))),{c(){e&&L(e.$$.fragment),t=Ee()},m(i,a){e&&P(e,i,a),E(i,t,a),s=!0},p(i,a){const c=a&80?$n(o,[a&16&&{ordered:i[4]},a&64&&qn(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].list)){if(e){me();const u=e;y(u.$$.fragment,1,0,()=>{O(u,1)}),_e()}l?(e=ze(l,r(i)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){s||(e&&v(e.$$.fragment,i),s=!0)},o(i){e&&y(e.$$.fragment,i),s=!1},d(i){i&&T(t),e&&O(e,i)}}}function cd(n){let e,t,s;const o=[{ordered:n[4]},n[6]];var l=n[5].list;function r(i){let a={$$slots:{default:[pd]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=xt(a,o[c]);return{props:a}}return l&&(e=ze(l,r(n))),{c(){e&&L(e.$$.fragment),t=Ee()},m(i,a){e&&P(e,i,a),E(i,t,a),s=!0},p(i,a){const c=a&80?$n(o,[a&16&&{ordered:i[4]},a&64&&qn(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].list)){if(e){me();const u=e;y(u.$$.fragment,1,0,()=>{O(u,1)}),_e()}l?(e=ze(l,r(i)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){s||(e&&v(e.$$.fragment,i),s=!0)},o(i){e&&y(e.$$.fragment,i),s=!1},d(i){i&&T(t),e&&O(e,i)}}}function ud(n){let e,t,s;return e=new En({props:{tokens:n[18].tokens,renderers:n[5]}}),{c(){L(e.$$.fragment),t=x()},m(o,l){P(e,o,l),E(o,t,l),s=!0},p(o,l){const r={};l&64&&(r.tokens=o[18].tokens),l&32&&(r.renderers=o[5]),e.$set(r)},i(o){s||(v(e.$$.fragment,o),s=!0)},o(o){y(e.$$.fragment,o),s=!1},d(o){O(e,o),o&&T(t)}}}function Il(n){let e,t,s;const o=[n[18]];var l=n[5].unorderedlistitem||n[5].listitem;function r(i){let a={$$slots:{default:[ud]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=xt(a,o[c]);return{props:a}}return l&&(e=ze(l,r(n))),{c(){e&&L(e.$$.fragment),t=Ee()},m(i,a){e&&P(e,i,a),E(i,t,a),s=!0},p(i,a){const c=a&64?$n(o,[qn(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].unorderedlistitem||i[5].listitem)){if(e){me();const u=e;y(u.$$.fragment,1,0,()=>{O(u,1)}),_e()}l?(e=ze(l,r(i)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){s||(e&&v(e.$$.fragment,i),s=!0)},o(i){e&&y(e.$$.fragment,i),s=!1},d(i){i&&T(t),e&&O(e,i)}}}function fd(n){let e,t,s=n[6].items,o=[];for(let r=0;r<s.length;r+=1)o[r]=Il(Ml(n,s,r));const l=r=>y(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Ee()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);E(r,e,i),t=!0},p(r,i){if(i&96){s=r[6].items;let a;for(a=0;a<s.length;a+=1){const c=Ml(r,s,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=Il(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(me(),a=s.length;a<o.length;a+=1)l(a);_e()}},i(r){if(!t){for(let i=0;i<s.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)y(o[i]);t=!1},d(r){He(o,r),r&&T(e)}}}function dd(n){let e,t,s;return e=new En({props:{tokens:n[18].tokens,renderers:n[5]}}),{c(){L(e.$$.fragment),t=x()},m(o,l){P(e,o,l),E(o,t,l),s=!0},p(o,l){const r={};l&64&&(r.tokens=o[18].tokens),l&32&&(r.renderers=o[5]),e.$set(r)},i(o){s||(v(e.$$.fragment,o),s=!0)},o(o){y(e.$$.fragment,o),s=!1},d(o){O(e,o),o&&T(t)}}}function Bl(n){let e,t,s;const o=[n[18]];var l=n[5].orderedlistitem||n[5].listitem;function r(i){let a={$$slots:{default:[dd]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=xt(a,o[c]);return{props:a}}return l&&(e=ze(l,r(n))),{c(){e&&L(e.$$.fragment),t=Ee()},m(i,a){e&&P(e,i,a),E(i,t,a),s=!0},p(i,a){const c=a&64?$n(o,[qn(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].orderedlistitem||i[5].listitem)){if(e){me();const u=e;y(u.$$.fragment,1,0,()=>{O(u,1)}),_e()}l?(e=ze(l,r(i)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){s||(e&&v(e.$$.fragment,i),s=!0)},o(i){e&&y(e.$$.fragment,i),s=!1},d(i){i&&T(t),e&&O(e,i)}}}function pd(n){let e,t,s=n[6].items,o=[];for(let r=0;r<s.length;r+=1)o[r]=Bl(Rl(n,s,r));const l=r=>y(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Ee()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);E(r,e,i),t=!0},p(r,i){if(i&96){s=r[6].items;let a;for(a=0;a<s.length;a+=1){const c=Rl(r,s,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=Bl(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(me(),a=s.length;a<o.length;a+=1)l(a);_e()}},i(r){if(!t){for(let i=0;i<s.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)y(o[i]);t=!1},d(r){He(o,r),r&&T(e)}}}function hd(n){let e,t,s;return e=new En({props:{tokens:n[16].tokens,renderers:n[5]}}),{c(){L(e.$$.fragment),t=x()},m(o,l){P(e,o,l),E(o,t,l),s=!0},p(o,l){const r={};l&4&&(r.tokens=o[16].tokens),l&32&&(r.renderers=o[5]),e.$set(r)},i(o){s||(v(e.$$.fragment,o),s=!0)},o(o){y(e.$$.fragment,o),s=!1},d(o){O(e,o),o&&T(t)}}}function zl(n){let e,t,s;var o=n[5].tablecell;function l(r){return{props:{header:!0,align:r[6].align[r[15]]||"center",$$slots:{default:[hd]},$$scope:{ctx:r}}}}return o&&(e=ze(o,l(n))),{c(){e&&L(e.$$.fragment),t=Ee()},m(r,i){e&&P(e,r,i),E(r,t,i),s=!0},p(r,i){const a={};if(i&64&&(a.align=r[6].align[r[15]]||"center"),i&8388644&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablecell)){if(e){me();const c=e;y(c.$$.fragment,1,0,()=>{O(c,1)}),_e()}o?(e=ze(o,l(r)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){s||(e&&v(e.$$.fragment,r),s=!0)},o(r){e&&y(e.$$.fragment,r),s=!1},d(r){r&&T(t),e&&O(e,r)}}}function gd(n){let e,t,s=n[2],o=[];for(let r=0;r<s.length;r+=1)o[r]=zl(Ll(n,s,r));const l=r=>y(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Ee()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);E(r,e,i),t=!0},p(r,i){if(i&100){s=r[2];let a;for(a=0;a<s.length;a+=1){const c=Ll(r,s,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=zl(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(me(),a=s.length;a<o.length;a+=1)l(a);_e()}},i(r){if(!t){for(let i=0;i<s.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)y(o[i]);t=!1},d(r){He(o,r),r&&T(e)}}}function md(n){let e,t,s;var o=n[5].tablerow;function l(r){return{props:{$$slots:{default:[gd]},$$scope:{ctx:r}}}}return o&&(e=ze(o,l(n))),{c(){e&&L(e.$$.fragment),t=Ee()},m(r,i){e&&P(e,r,i),E(r,t,i),s=!0},p(r,i){const a={};if(i&8388708&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablerow)){if(e){me();const c=e;y(c.$$.fragment,1,0,()=>{O(c,1)}),_e()}o?(e=ze(o,l(r)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){s||(e&&v(e.$$.fragment,r),s=!0)},o(r){e&&y(e.$$.fragment,r),s=!1},d(r){r&&T(t),e&&O(e,r)}}}function _d(n){let e,t;return e=new En({props:{tokens:n[13].tokens,renderers:n[5]}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&8&&(l.tokens=s[13].tokens),o&32&&(l.renderers=s[5]),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Fl(n){let e,t,s;var o=n[5].tablecell;function l(r){return{props:{header:!1,align:r[6].align[r[15]]||"center",$$slots:{default:[_d]},$$scope:{ctx:r}}}}return o&&(e=ze(o,l(n))),{c(){e&&L(e.$$.fragment),t=Ee()},m(r,i){e&&P(e,r,i),E(r,t,i),s=!0},p(r,i){const a={};if(i&64&&(a.align=r[6].align[r[15]]||"center"),i&8388648&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablecell)){if(e){me();const c=e;y(c.$$.fragment,1,0,()=>{O(c,1)}),_e()}o?(e=ze(o,l(r)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){s||(e&&v(e.$$.fragment,r),s=!0)},o(r){e&&y(e.$$.fragment,r),s=!1},d(r){r&&T(t),e&&O(e,r)}}}function bd(n){let e,t,s=n[10],o=[];for(let r=0;r<s.length;r+=1)o[r]=Fl(Ol(n,s,r));const l=r=>y(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=x()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);E(r,e,i),t=!0},p(r,i){if(i&104){s=r[10];let a;for(a=0;a<s.length;a+=1){const c=Ol(r,s,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=Fl(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(me(),a=s.length;a<o.length;a+=1)l(a);_e()}},i(r){if(!t){for(let i=0;i<s.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)y(o[i]);t=!1},d(r){He(o,r),r&&T(e)}}}function Hl(n){let e,t,s;var o=n[5].tablerow;function l(r){return{props:{$$slots:{default:[bd]},$$scope:{ctx:r}}}}return o&&(e=ze(o,l(n))),{c(){e&&L(e.$$.fragment),t=Ee()},m(r,i){e&&P(e,r,i),E(r,t,i),s=!0},p(r,i){const a={};if(i&8388712&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablerow)){if(e){me();const c=e;y(c.$$.fragment,1,0,()=>{O(c,1)}),_e()}o?(e=ze(o,l(r)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){s||(e&&v(e.$$.fragment,r),s=!0)},o(r){e&&y(e.$$.fragment,r),s=!1},d(r){r&&T(t),e&&O(e,r)}}}function $d(n){let e,t,s=n[3],o=[];for(let r=0;r<s.length;r+=1)o[r]=Hl(Pl(n,s,r));const l=r=>y(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Ee()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);E(r,e,i),t=!0},p(r,i){if(i&104){s=r[3];let a;for(a=0;a<s.length;a+=1){const c=Pl(r,s,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=Hl(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(me(),a=s.length;a<o.length;a+=1)l(a);_e()}},i(r){if(!t){for(let i=0;i<s.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)y(o[i]);t=!1},d(r){He(o,r),r&&T(e)}}}function vd(n){let e,t,s,o,l;var r=n[5].tablehead;function i(u){return{props:{$$slots:{default:[md]},$$scope:{ctx:u}}}}r&&(e=ze(r,i(n)));var a=n[5].tablebody;function c(u){return{props:{$$slots:{default:[$d]},$$scope:{ctx:u}}}}return a&&(s=ze(a,c(n))),{c(){e&&L(e.$$.fragment),t=x(),s&&L(s.$$.fragment),o=Ee()},m(u,f){e&&P(e,u,f),E(u,t,f),s&&P(s,u,f),E(u,o,f),l=!0},p(u,f){const d={};if(f&8388708&&(d.$$scope={dirty:f,ctx:u}),r!==(r=u[5].tablehead)){if(e){me();const m=e;y(m.$$.fragment,1,0,()=>{O(m,1)}),_e()}r?(e=ze(r,i(u)),L(e.$$.fragment),v(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else r&&e.$set(d);const g={};if(f&8388712&&(g.$$scope={dirty:f,ctx:u}),a!==(a=u[5].tablebody)){if(s){me();const m=s;y(m.$$.fragment,1,0,()=>{O(m,1)}),_e()}a?(s=ze(a,c(u)),L(s.$$.fragment),v(s.$$.fragment,1),P(s,o.parentNode,o)):s=null}else a&&s.$set(g)},i(u){l||(e&&v(e.$$.fragment,u),s&&v(s.$$.fragment,u),l=!0)},o(u){e&&y(e.$$.fragment,u),s&&y(s.$$.fragment,u),l=!1},d(u){e&&O(e,u),u&&T(t),u&&T(o),s&&O(s,u)}}}function jl(n){let e,t;const s=[n[7],{renderers:n[5]}];let o={};for(let l=0;l<s.length;l+=1)o=xt(o,s[l]);return e=new En({props:o}),{c(){L(e.$$.fragment)},m(l,r){P(e,l,r),t=!0},p(l,r){const i=r&34?$n(s,[r&2&&qn(l[7]),r&32&&{renderers:l[5]}]):{};e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function wd(n){let e,t,s,o;const l=[td,ed],r=[];function i(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=i(n))&&(t=r[e]=l[e](n)),{c(){t&&t.c(),s=Ee()},m(a,c){~e&&r[e].m(a,c),E(a,s,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?~e&&r[e].p(a,c):(t&&(me(),y(r[u],1,1,()=>{r[u]=null}),_e()),~e?(t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(s.parentNode,s)):t=null)},i(a){o||(v(t),o=!0)},o(a){y(t),o=!1},d(a){~e&&r[e].d(a),a&&T(s)}}}function kd(n,e,t){const s=["type","tokens","header","rows","ordered","renderers"];let o=Bs(e,s),{type:l=void 0}=e,{tokens:r=void 0}=e,{header:i=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return Vf(),n.$$set=f=>{e=xt(xt({},e),ui(f)),t(6,o=Bs(e,s)),"type"in f&&t(0,l=f.type),"tokens"in f&&t(1,r=f.tokens),"header"in f&&t(2,i=f.header),"rows"in f&&t(3,a=f.rows),"ordered"in f&&t(4,c=f.ordered),"renderers"in f&&t(5,u=f.renderers)},[l,r,i,a,c,u,o]}let En=class extends Z{constructor(e){super(),G(this,e,kd,wd,W,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}};function Wi(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Kn=Wi();function yd(n){Kn=n}const Gi=/[&<>"']/,Td=new RegExp(Gi.source,"g"),Zi=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ed=new RegExp(Zi.source,"g"),Sd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ul=n=>Sd[n];function rt(n,e){if(e){if(Gi.test(n))return n.replace(Td,Ul)}else if(Zi.test(n))return n.replace(Ed,Ul);return n}const xd=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Xi(n){return n.replace(xd,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Ad=/(^|[^\[])\^/g;function Ie(n,e){n=typeof n=="string"?n:n.source,e=e||"";const t={replace:(s,o)=>(o=o.source||o,o=o.replace(Ad,"$1"),n=n.replace(s,o),t),getRegex:()=>new RegExp(n,e)};return t}const Cd=/[^\w:]/g,Nd=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ql(n,e,t){if(n){let s;try{s=decodeURIComponent(Xi(t)).replace(Cd,"").toLowerCase()}catch(o){return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}e&&!Nd.test(t)&&(t=Od(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(s){return null}return t}const Ms={},Md=/^[^:]+:\/*[^/]*$/,Rd=/^([^:]+:)[\s\S]*$/,Pd=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Od(n,e){Ms[" "+n]||(Md.test(n)?Ms[" "+n]=n+"/":Ms[" "+n]=Ds(n,"/",!0)),n=Ms[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(Rd,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(Pd,"$1")+e:n+e}const qs={exec:function(){}};function Mt(n){let e=1,t,s;for(;e<arguments.length;e++){t=arguments[e];for(s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n}function Kl(n,e){const t=n.replace(/\|/g,(l,r,i)=>{let a=!1,c=r;for(;--c>=0&&i[c]==="\\";)a=!a;return a?"|":" |"}),s=t.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function Ds(n,e,t){const s=n.length;if(s===0)return"";let o=0;for(;o<s;){const l=n.charAt(s-o-1);if(l===e&&!t)o++;else if(l!==e&&t)o++;else break}return n.slice(0,s-o)}function Ld(n,e){if(n.indexOf(e[1])===-1)return-1;const t=n.length;let s=0,o=0;for(;o<t;o++)if(n[o]==="\\")o++;else if(n[o]===e[0])s++;else if(n[o]===e[1]&&(s--,s<0))return o;return-1}function Qi(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Wl(n,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=n),e>>=1,n+=n;return t+n}function Gl(n,e,t,s){const o=e.href,l=e.title?rt(e.title):null,r=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){s.state.inLink=!0;const i={type:"link",raw:t,href:o,title:l,text:r,tokens:s.inlineTokens(r)};return s.state.inLink=!1,i}return{type:"image",raw:t,href:o,title:l,text:rt(r)}}function Dd(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const s=t[1];return e.split(`
`).map(o=>{const l=o.match(/^\s+/);if(l===null)return o;const[r]=l;return r.length>=s.length?o.slice(s.length):o}).join(`
`)}class qo{constructor(e){this.options=e||Kn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Ds(s,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const s=t[0],o=Dd(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:o}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let s=t[2].trim();if(/#$/.test(s)){const o=Ds(s,"#");(this.options.pedantic||!o||/ $/.test(o))&&(s=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const s=t[0].replace(/^ *>[ \t]?/gm,""),o=this.lexer.state.top;this.lexer.state.top=!0;const l=this.lexer.blockTokens(s);return this.lexer.state.top=o,{type:"blockquote",raw:t[0],tokens:l,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s,o,l,r,i,a,c,u,f,d,g,m,$=t[1].trim();const A=$.length>1,S={type:"list",raw:"",ordered:A,start:A?+$.slice(0,-1):"",loose:!1,items:[]};$=A?`\\d{1,9}\\${$.slice(-1)}`:`\\${$}`,this.options.pedantic&&($=A?$:"[*+-]");const k=new RegExp(`^( {0,3}${$})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(m=!1,!(!(t=k.exec(e))||this.rules.block.hr.test(e)));){if(s=t[0],e=e.substring(s.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,R=>" ".repeat(3*R.length)),f=e.split(`
`,1)[0],this.options.pedantic?(r=2,g=u.trimLeft()):(r=t[2].search(/[^ ]/),r=r>4?1:r,g=u.slice(r),r+=t[1].length),a=!1,!u&&/^ *$/.test(f)&&(s+=f+`
`,e=e.substring(f.length+1),m=!0),!m){const R=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),N=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),w=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),D=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],f=d,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(w.test(f)||D.test(f)||R.test(f)||N.test(e)));){if(f.search(/[^ ]/)>=r||!f.trim())g+=`
`+f.slice(r);else{if(a||u.search(/[^ ]/)>=4||w.test(u)||D.test(u)||N.test(u))break;g+=`
`+f}!a&&!f.trim()&&(a=!0),s+=d+`
`,e=e.substring(d.length+1),u=f.slice(r)}}S.loose||(c?S.loose=!0:/\n *\n *$/.test(s)&&(c=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(g),o&&(l=o[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),S.items.push({type:"list_item",raw:s,task:!!o,checked:l,loose:!1,text:g}),S.raw+=s}S.items[S.items.length-1].raw=s.trimRight(),S.items[S.items.length-1].text=g.trimRight(),S.raw=S.raw.trimRight();const M=S.items.length;for(i=0;i<M;i++)if(this.lexer.state.top=!1,S.items[i].tokens=this.lexer.blockTokens(S.items[i].text,[]),!S.loose){const R=S.items[i].tokens.filter(w=>w.type==="space"),N=R.length>0&&R.some(w=>/\n.*\n/.test(w.raw));S.loose=N}if(S.loose)for(i=0;i<M;i++)S.items[i].loose=!0;return S}}html(e){const t=this.rules.block.html.exec(e);if(t){const s={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const o=this.options.sanitizer?this.options.sanitizer(t[0]):rt(t[0]);s.type="paragraph",s.text=o,s.tokens=this.lexer.inline(o)}return s}}def(e){const t=this.rules.block.def.exec(e);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",l=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:o,title:l}}}table(e){const t=this.rules.block.table.exec(e);if(t){const s={type:"table",header:Kl(t[1]).map(o=>({text:o})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=t[0];let o=s.align.length,l,r,i,a;for(l=0;l<o;l++)/^ *-+: *$/.test(s.align[l])?s.align[l]="right":/^ *:-+: *$/.test(s.align[l])?s.align[l]="center":/^ *:-+ *$/.test(s.align[l])?s.align[l]="left":s.align[l]=null;for(o=s.rows.length,l=0;l<o;l++)s.rows[l]=Kl(s.rows[l],s.header.length).map(c=>({text:c}));for(o=s.header.length,r=0;r<o;r++)s.header[r].tokens=this.lexer.inline(s.header[r].text);for(o=s.rows.length,r=0;r<o;r++)for(a=s.rows[r],i=0;i<a.length;i++)a[i].tokens=this.lexer.inline(a[i].text);return s}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:rt(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):rt(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const r=Ds(s.slice(0,-1),"\\");if((s.length-r.length)%2===0)return}else{const r=Ld(t[2],"()");if(r>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let o=t[2],l="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);r&&(o=r[1],l=r[3])}else l=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),Gl(t,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:l&&l.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){let o=(s[2]||s[1]).replace(/\s+/g," ");if(o=t[o.toLowerCase()],!o){const l=s[0].charAt(0);return{type:"text",raw:l,text:l}}return Gl(s,o,s[0],this.lexer)}}emStrong(e,t,s=""){let o=this.rules.inline.emStrong.lDelim.exec(e);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;const l=o[1]||o[2]||"";if(!l||l&&(s===""||this.rules.inline.punctuation.exec(s))){const r=o[0].length-1;let i,a,c=r,u=0;const f=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+r);(o=f.exec(t))!=null;){if(i=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!i)continue;if(a=i.length,o[3]||o[4]){c+=a;continue}else if((o[5]||o[6])&&r%3&&!((r+a)%3)){u+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+u);const d=e.slice(0,r+o.index+(o[0].length-i.length)+a);if(Math.min(r,a)%2){const m=d.slice(1,-1);return{type:"em",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}const g=d.slice(2,-2);return{type:"strong",raw:d,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let s=t[2].replace(/\n/g," ");const o=/[^ ]/.test(s),l=/^ /.test(s)&&/ $/.test(s);return o&&l&&(s=s.substring(1,s.length-1)),s=rt(s,!0),{type:"codespan",raw:t[0],text:s}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const s=this.rules.inline.autolink.exec(e);if(s){let o,l;return s[2]==="@"?(o=rt(this.options.mangle?t(s[1]):s[1]),l="mailto:"+o):(o=rt(s[1]),l=o),{type:"link",raw:s[0],text:o,href:l,tokens:[{type:"text",raw:o,text:o}]}}}url(e,t){let s;if(s=this.rules.inline.url.exec(e)){let o,l;if(s[2]==="@")o=rt(this.options.mangle?t(s[0]):s[0]),l="mailto:"+o;else{let r;do r=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(r!==s[0]);o=rt(s[0]),s[1]==="www."?l="http://"+s[0]:l=s[0]}return{type:"link",raw:s[0],text:o,href:l,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e,t){const s=this.rules.inline.text.exec(e);if(s){let o;return this.lexer.state.inRawBlock?o=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):rt(s[0]):s[0]:o=rt(this.options.smartypants?t(s[0]):s[0]),{type:"text",raw:s[0],text:o}}}}const de={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:qs,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};de._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;de._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;de.def=Ie(de.def).replace("label",de._label).replace("title",de._title).getRegex();de.bullet=/(?:[*+-]|\d{1,9}[.)])/;de.listItemStart=Ie(/^( *)(bull) */).replace("bull",de.bullet).getRegex();de.list=Ie(de.list).replace(/bull/g,de.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+de.def.source+")").getRegex();de._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";de._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;de.html=Ie(de.html,"i").replace("comment",de._comment).replace("tag",de._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();de.paragraph=Ie(de._paragraph).replace("hr",de.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de._tag).getRegex();de.blockquote=Ie(de.blockquote).replace("paragraph",de.paragraph).getRegex();de.normal=Mt({},de);de.gfm=Mt({},de.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});de.gfm.table=Ie(de.gfm.table).replace("hr",de.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de._tag).getRegex();de.gfm.paragraph=Ie(de._paragraph).replace("hr",de.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",de.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de._tag).getRegex();de.pedantic=Mt({},de.normal,{html:Ie(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",de._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:qs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ie(de.normal._paragraph).replace("hr",de.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",de.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const oe={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:qs,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:qs,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};oe._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";oe.punctuation=Ie(oe.punctuation).replace(/punctuation/g,oe._punctuation).getRegex();oe.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;oe.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;oe._comment=Ie(de._comment).replace("(?:-->|$)","-->").getRegex();oe.emStrong.lDelim=Ie(oe.emStrong.lDelim).replace(/punct/g,oe._punctuation).getRegex();oe.emStrong.rDelimAst=Ie(oe.emStrong.rDelimAst,"g").replace(/punct/g,oe._punctuation).getRegex();oe.emStrong.rDelimUnd=Ie(oe.emStrong.rDelimUnd,"g").replace(/punct/g,oe._punctuation).getRegex();oe._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;oe._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;oe._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;oe.autolink=Ie(oe.autolink).replace("scheme",oe._scheme).replace("email",oe._email).getRegex();oe._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;oe.tag=Ie(oe.tag).replace("comment",oe._comment).replace("attribute",oe._attribute).getRegex();oe._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;oe._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;oe._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;oe.link=Ie(oe.link).replace("label",oe._label).replace("href",oe._href).replace("title",oe._title).getRegex();oe.reflink=Ie(oe.reflink).replace("label",oe._label).replace("ref",de._label).getRegex();oe.nolink=Ie(oe.nolink).replace("ref",de._label).getRegex();oe.reflinkSearch=Ie(oe.reflinkSearch,"g").replace("reflink",oe.reflink).replace("nolink",oe.nolink).getRegex();oe.normal=Mt({},oe);oe.pedantic=Mt({},oe.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ie(/^!?\[(label)\]\((.*?)\)/).replace("label",oe._label).getRegex(),reflink:Ie(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",oe._label).getRegex()});oe.gfm=Mt({},oe.normal,{escape:Ie(oe.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});oe.gfm.url=Ie(oe.gfm.url,"i").replace("email",oe.gfm._extended_email).getRegex();oe.breaks=Mt({},oe.gfm,{br:Ie(oe.br).replace("{2,}","*").getRegex(),text:Ie(oe.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Id(n){return n.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Zl(n){let e="",t,s;const o=n.length;for(t=0;t<o;t++)s=n.charCodeAt(t),Math.random()>.5&&(s="x"+s.toString(16)),e+="&#"+s+";";return e}class Dt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Kn,this.options.tokenizer=this.options.tokenizer||new qo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:de.normal,inline:oe.normal};this.options.pedantic?(t.block=de.pedantic,t.inline=oe.pedantic):this.options.gfm&&(t.block=de.gfm,this.options.breaks?t.inline=oe.breaks:t.inline=oe.gfm),this.tokenizer.rules=t}static get rules(){return{block:de,inline:oe}}static lex(e,t){return new Dt(t).lex(e)}static lexInline(e,t){return new Dt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(i,a,c)=>a+"    ".repeat(c.length));let s,o,l,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(i=>(s=i.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(l=e,this.options.extensions&&this.options.extensions.startBlock){let i=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(i=Math.min(i,c))}),i<1/0&&i>=0&&(l=e.substring(0,i+1))}if(this.state.top&&(s=this.tokenizer.paragraph(l))){o=t[t.length-1],r&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),r=l.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(e){const i="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let s,o,l,r=e,i,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+Wl("a",i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+Wl("a",i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(r))!=null;)r=r.slice(0,i.index+i[0].length-2)+"++"+r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(s=u.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(e,r,c)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(e,Zl)){e=e.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e,Zl))){e=e.substring(s.raw.length),t.push(s);continue}if(l=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let d;this.options.extensions.startInline.forEach(function(g){d=g.call({lexer:this},f),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(l=e.substring(0,u+1))}if(s=this.tokenizer.inlineText(l,Id)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(c=s.raw.slice(-1)),a=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Ko{constructor(e){this.options=e||Kn}code(e,t,s){const o=(t||"").match(/\S*/)[0];if(this.options.highlight){const l=this.options.highlight(e,o);l!=null&&l!==e&&(s=!0,e=l)}return e=e.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+rt(o)+'">'+(s?e:rt(e,!0))+`</code></pre>
`:"<pre><code>"+(s?e:rt(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,s){if(e=ql(this.options.sanitize,this.options.baseUrl,e),e===null)return s;let o='<a href="'+e+'"';return t&&(o+=' title="'+t+'"'),o+=">"+s+"</a>",o}image(e,t,s){if(e=ql(this.options.sanitize,this.options.baseUrl,e),e===null)return s;let o=`<img src="${e}" alt="${s}"`;return t&&(o+=` title="${t}"`),o+=this.options.xhtml?"/>":">",o}text(e){return e}}class Yi{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,s){return""+s}image(e,t,s){return""+s}br(){return""}}class Wo{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let s=e,o=0;if(this.seen.hasOwnProperty(s)){o=this.seen[e];do o++,s=e+"-"+o;while(this.seen.hasOwnProperty(s))}return t||(this.seen[e]=o,this.seen[s]=0),s}slug(e,t={}){const s=this.serialize(e);return this.getNextSafeSlug(s,t.dryrun)}}class Ot{constructor(e){this.options=e||Kn,this.options.renderer=this.options.renderer||new Ko,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Yi,this.slugger=new Wo}static parse(e,t){return new Ot(t).parse(e)}static parseInline(e,t){return new Ot(t).parseInline(e)}parse(e,t=!0){let s="",o,l,r,i,a,c,u,f,d,g,m,$,A,S,k,M,R,N,w;const D=e.length;for(o=0;o<D;o++){if(g=e[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[g.type]&&(w=this.options.extensions.renderers[g.type].call({parser:this},g),w!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type))){s+=w||"";continue}switch(g.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{s+=this.renderer.heading(this.parseInline(g.tokens),g.depth,Xi(this.parseInline(g.tokens,this.textRenderer)),this.slugger);continue}case"code":{s+=this.renderer.code(g.text,g.lang,g.escaped);continue}case"table":{for(f="",u="",i=g.header.length,l=0;l<i;l++)u+=this.renderer.tablecell(this.parseInline(g.header[l].tokens),{header:!0,align:g.align[l]});for(f+=this.renderer.tablerow(u),d="",i=g.rows.length,l=0;l<i;l++){for(c=g.rows[l],u="",a=c.length,r=0;r<a;r++)u+=this.renderer.tablecell(this.parseInline(c[r].tokens),{header:!1,align:g.align[r]});d+=this.renderer.tablerow(u)}s+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(g.tokens),s+=this.renderer.blockquote(d);continue}case"list":{for(m=g.ordered,$=g.start,A=g.loose,i=g.items.length,d="",l=0;l<i;l++)k=g.items[l],M=k.checked,R=k.task,S="",k.task&&(N=this.renderer.checkbox(M),A?k.tokens.length>0&&k.tokens[0].type==="paragraph"?(k.tokens[0].text=N+" "+k.tokens[0].text,k.tokens[0].tokens&&k.tokens[0].tokens.length>0&&k.tokens[0].tokens[0].type==="text"&&(k.tokens[0].tokens[0].text=N+" "+k.tokens[0].tokens[0].text)):k.tokens.unshift({type:"text",text:N}):S+=N),S+=this.parse(k.tokens,A),d+=this.renderer.listitem(S,R,M);s+=this.renderer.list(d,m,$);continue}case"html":{s+=this.renderer.html(g.text);continue}case"paragraph":{s+=this.renderer.paragraph(this.parseInline(g.tokens));continue}case"text":{for(d=g.tokens?this.parseInline(g.tokens):g.text;o+1<D&&e[o+1].type==="text";)g=e[++o],d+=`
`+(g.tokens?this.parseInline(g.tokens):g.text);s+=t?this.renderer.paragraph(d):d;continue}default:{const B='Token with "'+g.type+'" type was not found.';if(this.options.silent){console.error(B);return}else throw new Error(B)}}}return s}parseInline(e,t){t=t||this.renderer;let s="",o,l,r;const i=e.length;for(o=0;o<i;o++){if(l=e[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]&&(r=this.options.extensions.renderers[l.type].call({parser:this},l),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type))){s+=r||"";continue}switch(l.type){case"escape":{s+=t.text(l.text);break}case"html":{s+=t.html(l.text);break}case"link":{s+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{s+=t.image(l.href,l.title,l.text);break}case"strong":{s+=t.strong(this.parseInline(l.tokens,t));break}case"em":{s+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{s+=t.codespan(l.text);break}case"br":{s+=t.br();break}case"del":{s+=t.del(this.parseInline(l.tokens,t));break}case"text":{s+=t.text(l.text);break}default:{const a='Token with "'+l.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return s}}function ge(n,e,t){if(typeof n=="undefined"||n===null)throw new Error("marked(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=Mt({},ge.defaults,e||{}),Qi(e),t){const o=e.highlight;let l;try{l=Dt.lex(n,e)}catch(a){return t(a)}const r=function(a){let c;if(!a)try{e.walkTokens&&ge.walkTokens(l,e.walkTokens),c=Ot.parse(l,e)}catch(u){a=u}return e.highlight=o,a?t(a):t(null,c)};if(!o||o.length<3||(delete e.highlight,!l.length))return r();let i=0;ge.walkTokens(l,function(a){a.type==="code"&&(i++,setTimeout(()=>{o(a.text,a.lang,function(c,u){if(c)return r(c);u!=null&&u!==a.text&&(a.text=u,a.escaped=!0),i--,i===0&&r()})},0))}),i===0&&r();return}function s(o){if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+rt(o.message+"",!0)+"</pre>";throw o}try{const o=Dt.lex(n,e);if(e.walkTokens){if(e.async)return Promise.all(ge.walkTokens(o,e.walkTokens)).then(()=>Ot.parse(o,e)).catch(s);ge.walkTokens(o,e.walkTokens)}return Ot.parse(o,e)}catch(o){s(o)}}ge.options=ge.setOptions=function(n){return Mt(ge.defaults,n),yd(ge.defaults),ge};ge.getDefaults=Wi;ge.defaults=Kn;ge.use=function(...n){const e=ge.defaults.extensions||{renderers:{},childTokens:{}};n.forEach(t=>{const s=Mt({},t);if(s.async=ge.defaults.async||s.async,t.extensions&&(t.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const l=e.renderers[o.name];l?e.renderers[o.name]=function(...r){let i=o.renderer.apply(this,r);return i===!1&&(i=l.apply(this,r)),i}:e.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[o.level]?e[o.level].unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),s.extensions=e),t.renderer){const o=ge.defaults.renderer||new Ko;for(const l in t.renderer){const r=o[l];o[l]=(...i)=>{let a=t.renderer[l].apply(o,i);return a===!1&&(a=r.apply(o,i)),a}}s.renderer=o}if(t.tokenizer){const o=ge.defaults.tokenizer||new qo;for(const l in t.tokenizer){const r=o[l];o[l]=(...i)=>{let a=t.tokenizer[l].apply(o,i);return a===!1&&(a=r.apply(o,i)),a}}s.tokenizer=o}if(t.walkTokens){const o=ge.defaults.walkTokens;s.walkTokens=function(l){let r=[];return r.push(t.walkTokens.call(this,l)),o&&(r=r.concat(o.call(this,l))),r}}ge.setOptions(s)})};ge.walkTokens=function(n,e){let t=[];for(const s of n)switch(t=t.concat(e.call(ge,s)),s.type){case"table":{for(const o of s.header)t=t.concat(ge.walkTokens(o.tokens,e));for(const o of s.rows)for(const l of o)t=t.concat(ge.walkTokens(l.tokens,e));break}case"list":{t=t.concat(ge.walkTokens(s.items,e));break}default:ge.defaults.extensions&&ge.defaults.extensions.childTokens&&ge.defaults.extensions.childTokens[s.type]?ge.defaults.extensions.childTokens[s.type].forEach(function(o){t=t.concat(ge.walkTokens(s[o],e))}):s.tokens&&(t=t.concat(ge.walkTokens(s.tokens,e)))}return t};ge.parseInline=function(n,e){if(typeof n=="undefined"||n===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");e=Mt({},ge.defaults,e||{}),Qi(e);try{const t=Dt.lexInline(n,e);return e.walkTokens&&ge.walkTokens(t,e.walkTokens),Ot.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+rt(t.message+"",!0)+"</pre>";throw t}};ge.Parser=Ot;ge.parser=Ot.parse;ge.Renderer=Ko;ge.TextRenderer=Yi;ge.Lexer=Dt;ge.lexer=Dt.lex;ge.Tokenizer=qo;ge.Slugger=Wo;ge.parse=ge;ge.options;ge.setOptions;ge.use;ge.walkTokens;ge.parseInline;Ot.parse;Dt.lex;const Ji={};function Bd(n){let e;return{c(){e=F(n[1])},m(t,s){E(t,e,s)},p(t,s){s&2&&Ve(e,t[1])},i:K,o:K,d(t){t&&T(e)}}}function zd(n){let e,t;const s=n[5].default,o=Ce(s,n,n[4],null);return{c(){e=_("h6"),o&&o.c(),p(e,"id",n[2])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Me(o,s,l,l[4],t?Ne(s,l[4],r,null):Re(l[4]),null),(!t||r&4)&&p(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Fd(n){let e,t;const s=n[5].default,o=Ce(s,n,n[4],null);return{c(){e=_("h5"),o&&o.c(),p(e,"id",n[2])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Me(o,s,l,l[4],t?Ne(s,l[4],r,null):Re(l[4]),null),(!t||r&4)&&p(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Hd(n){let e,t;const s=n[5].default,o=Ce(s,n,n[4],null);return{c(){e=_("h4"),o&&o.c(),p(e,"id",n[2])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Me(o,s,l,l[4],t?Ne(s,l[4],r,null):Re(l[4]),null),(!t||r&4)&&p(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function jd(n){let e,t;const s=n[5].default,o=Ce(s,n,n[4],null);return{c(){e=_("h3"),o&&o.c(),p(e,"id",n[2])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Me(o,s,l,l[4],t?Ne(s,l[4],r,null):Re(l[4]),null),(!t||r&4)&&p(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Ud(n){let e,t;const s=n[5].default,o=Ce(s,n,n[4],null);return{c(){e=_("h2"),o&&o.c(),p(e,"id",n[2])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Me(o,s,l,l[4],t?Ne(s,l[4],r,null):Re(l[4]),null),(!t||r&4)&&p(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function qd(n){let e,t;const s=n[5].default,o=Ce(s,n,n[4],null);return{c(){e=_("h1"),o&&o.c(),p(e,"id",n[2])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Me(o,s,l,l[4],t?Ne(s,l[4],r,null):Re(l[4]),null),(!t||r&4)&&p(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Kd(n){let e,t,s,o;const l=[qd,Ud,jd,Hd,Fd,zd,Bd],r=[];function i(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=i(n),t=r[e]=l[e](n),{c(){t.c(),s=Ee()},m(a,c){r[e].m(a,c),E(a,s,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(me(),y(r[u],1,1,()=>{r[u]=null}),_e(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(s.parentNode,s))},i(a){o||(v(t),o=!0)},o(a){y(t),o=!1},d(a){r[e].d(a),a&&T(s)}}}function Wd(n,e,t){let s,{$$slots:o={},$$scope:l}=e,{depth:r}=e,{raw:i}=e,{text:a}=e;const{slug:c,getOptions:u}=Qs(Ji),f=u();return n.$$set=d=>{"depth"in d&&t(0,r=d.depth),"raw"in d&&t(1,i=d.raw),"text"in d&&t(3,a=d.text),"$$scope"in d&&t(4,l=d.$$scope)},n.$$.update=()=>{n.$$.dirty&8&&t(2,s=f.headerIds?f.headerPrefix+c(a):void 0)},[r,i,s,a,l,o]}class Gd extends Z{constructor(e){super(),G(this,e,Wd,Kd,W,{depth:0,raw:1,text:3})}}function Zd(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("p"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Xd(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class Qd extends Z{constructor(e){super(),G(this,e,Xd,Zd,W,{})}}function Yd(n){let e;const t=n[3].default,s=Ce(t,n,n[2],null);return{c(){s&&s.c()},m(o,l){s&&s.m(o,l),e=!0},p(o,[l]){s&&s.p&&(!e||l&4)&&Me(s,t,o,o[2],e?Ne(t,o[2],l,null):Re(o[2]),null)},i(o){e||(v(s,o),e=!0)},o(o){y(s,o),e=!1},d(o){s&&s.d(o)}}}function Jd(n,e,t){let{$$slots:s={},$$scope:o}=e,{text:l}=e,{raw:r}=e;return n.$$set=i=>{"text"in i&&t(0,l=i.text),"raw"in i&&t(1,r=i.raw),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,s]}class Vd extends Z{constructor(e){super(),G(this,e,Jd,Yd,W,{text:0,raw:1})}}function ep(n){let e,t;return{c(){e=_("img"),ct(e.src,t=n[0])||p(e,"src",t),p(e,"title",n[1]),p(e,"alt",n[2])},m(s,o){E(s,e,o)},p(s,[o]){o&1&&!ct(e.src,t=s[0])&&p(e,"src",t),o&2&&p(e,"title",s[1]),o&4&&p(e,"alt",s[2])},i:K,o:K,d(s){s&&T(e)}}}function tp(n,e,t){let{href:s=""}=e,{title:o=void 0}=e,{text:l=""}=e;return n.$$set=r=>{"href"in r&&t(0,s=r.href),"title"in r&&t(1,o=r.title),"text"in r&&t(2,l=r.text)},[s,o,l]}class np extends Z{constructor(e){super(),G(this,e,tp,ep,W,{href:0,title:1,text:2})}}function sp(n){let e,t;const s=n[3].default,o=Ce(s,n,n[2],null);return{c(){e=_("a"),o&&o.c(),p(e,"href",n[0]),p(e,"title",n[1])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&4)&&Me(o,s,l,l[2],t?Ne(s,l[2],r,null):Re(l[2]),null),(!t||r&1)&&p(e,"href",l[0]),(!t||r&2)&&p(e,"title",l[1])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function op(n,e,t){let{$$slots:s={},$$scope:o}=e,{href:l=""}=e,{title:r=void 0}=e;return n.$$set=i=>{"href"in i&&t(0,l=i.href),"title"in i&&t(1,r=i.title),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,s]}class lp extends Z{constructor(e){super(),G(this,e,op,sp,W,{href:0,title:1})}}function rp(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("em"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function ip(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class ap extends Z{constructor(e){super(),G(this,e,ip,rp,W,{})}}function cp(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("del"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function up(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class fp extends Z{constructor(e){super(),G(this,e,up,cp,W,{})}}function dp(n){let e,t=n[0].replace(/`/g,"")+"",s;return{c(){e=_("code"),s=F(t)},m(o,l){E(o,e,l),h(e,s)},p(o,[l]){l&1&&t!==(t=o[0].replace(/`/g,"")+"")&&Ve(s,t)},i:K,o:K,d(o){o&&T(e)}}}function pp(n,e,t){let{raw:s}=e;return n.$$set=o=>{"raw"in o&&t(0,s=o.raw)},[s]}class hp extends Z{constructor(e){super(),G(this,e,pp,dp,W,{raw:0})}}function gp(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("strong"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function mp(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class _p extends Z{constructor(e){super(),G(this,e,mp,gp,W,{})}}function bp(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("table"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function $p(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class vp extends Z{constructor(e){super(),G(this,e,$p,bp,W,{})}}function wp(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("thead"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function kp(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class yp extends Z{constructor(e){super(),G(this,e,kp,wp,W,{})}}function Tp(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("tbody"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Ep(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class Sp extends Z{constructor(e){super(),G(this,e,Ep,Tp,W,{})}}function xp(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("tr"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Ap(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class Cp extends Z{constructor(e){super(),G(this,e,Ap,xp,W,{})}}function Np(n){let e,t;const s=n[3].default,o=Ce(s,n,n[2],null);return{c(){e=_("td"),o&&o.c(),p(e,"align",n[1])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&Me(o,s,l,l[2],t?Ne(s,l[2],r,null):Re(l[2]),null),(!t||r&2)&&p(e,"align",l[1])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Mp(n){let e,t;const s=n[3].default,o=Ce(s,n,n[2],null);return{c(){e=_("th"),o&&o.c(),p(e,"align",n[1])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&Me(o,s,l,l[2],t?Ne(s,l[2],r,null):Re(l[2]),null),(!t||r&2)&&p(e,"align",l[1])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Rp(n){let e,t,s,o;const l=[Mp,Np],r=[];function i(a,c){return a[0]?0:1}return e=i(n),t=r[e]=l[e](n),{c(){t.c(),s=Ee()},m(a,c){r[e].m(a,c),E(a,s,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(me(),y(r[u],1,1,()=>{r[u]=null}),_e(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(s.parentNode,s))},i(a){o||(v(t),o=!0)},o(a){y(t),o=!1},d(a){r[e].d(a),a&&T(s)}}}function Pp(n,e,t){let{$$slots:s={},$$scope:o}=e,{header:l}=e,{align:r}=e;return n.$$set=i=>{"header"in i&&t(0,l=i.header),"align"in i&&t(1,r=i.align),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,s]}class Op extends Z{constructor(e){super(),G(this,e,Pp,Rp,W,{header:0,align:1})}}function Lp(n){let e,t;const s=n[3].default,o=Ce(s,n,n[2],null);return{c(){e=_("ul"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&Me(o,s,l,l[2],t?Ne(s,l[2],r,null):Re(l[2]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Dp(n){let e,t;const s=n[3].default,o=Ce(s,n,n[2],null);return{c(){e=_("ol"),o&&o.c(),p(e,"start",n[1])},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&Me(o,s,l,l[2],t?Ne(s,l[2],r,null):Re(l[2]),null),(!t||r&2)&&p(e,"start",l[1])},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Ip(n){let e,t,s,o;const l=[Dp,Lp],r=[];function i(a,c){return a[0]?0:1}return e=i(n),t=r[e]=l[e](n),{c(){t.c(),s=Ee()},m(a,c){r[e].m(a,c),E(a,s,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(me(),y(r[u],1,1,()=>{r[u]=null}),_e(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(s.parentNode,s))},i(a){o||(v(t),o=!0)},o(a){y(t),o=!1},d(a){r[e].d(a),a&&T(s)}}}function Bp(n,e,t){let{$$slots:s={},$$scope:o}=e,{ordered:l}=e,{start:r}=e;return n.$$set=i=>{"ordered"in i&&t(0,l=i.ordered),"start"in i&&t(1,r=i.start),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,s]}class zp extends Z{constructor(e){super(),G(this,e,Bp,Ip,W,{ordered:0,start:1})}}function Fp(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("li"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Hp(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class jp extends Z{constructor(e){super(),G(this,e,Hp,Fp,W,{})}}function Up(n){let e;return{c(){e=_("hr")},m(t,s){E(t,e,s)},p:K,i:K,o:K,d(t){t&&T(e)}}}class qp extends Z{constructor(e){super(),G(this,e,null,Up,W,{})}}function Kp(n){let e,t;return{c(){e=new gi(!1),t=Ee(),e.a=t},m(s,o){e.m(n[0],s,o),E(s,t,o)},p(s,[o]){o&1&&e.p(s[0])},i:K,o:K,d(s){s&&T(t),s&&e.d()}}}function Wp(n,e,t){let{text:s}=e;return n.$$set=o=>{"text"in o&&t(0,s=o.text)},[s]}class Gp extends Z{constructor(e){super(),G(this,e,Wp,Kp,W,{text:0})}}function Zp(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("blockquote"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function Xp(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class Qp extends Z{constructor(e){super(),G(this,e,Xp,Zp,W,{})}}function Yp(n){let e,t,s;return{c(){e=_("pre"),t=_("code"),s=F(n[1]),p(e,"class",n[0])},m(o,l){E(o,e,l),h(e,t),h(t,s)},p(o,[l]){l&2&&Ve(s,o[1]),l&1&&p(e,"class",o[0])},i:K,o:K,d(o){o&&T(e)}}}function Jp(n,e,t){let{lang:s}=e,{text:o}=e;return n.$$set=l=>{"lang"in l&&t(0,s=l.lang),"text"in l&&t(1,o=l.text)},[s,o]}class Vp extends Z{constructor(e){super(),G(this,e,Jp,Yp,W,{lang:0,text:1})}}function eh(n){let e,t;const s=n[1].default,o=Ce(s,n,n[0],null);return{c(){e=_("br"),o&&o.c()},m(l,r){E(l,e,r),o&&o.m(l,r),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Me(o,s,l,l[0],t?Ne(s,l[0],r,null):Re(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&T(e),o&&o.d(l)}}}function th(n,e,t){let{$$slots:s={},$$scope:o}=e;return n.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s]}class nh extends Z{constructor(e){super(),G(this,e,th,eh,W,{})}}const sh={heading:Gd,paragraph:Qd,text:Vd,image:np,link:lp,em:ap,strong:_p,codespan:hp,del:fp,table:vp,tablehead:yp,tablebody:Sp,tablerow:Cp,tablecell:Op,list:zp,orderedlistitem:null,unorderedlistitem:null,listitem:jp,hr:qp,html:Gp,blockquote:Qp,code:Vp,br:nh},oh={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function lh(n){let e,t;return e=new En({props:{tokens:n[0],renderers:n[1]}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,[o]){const l={};o&1&&(l.tokens=s[0]),o&2&&(l.renderers=s[1]),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function rh(n,e,t){let s,o,l,r,{source:i=[]}=e,{renderers:a={}}=e,{options:c={}}=e,{isInline:u=!1}=e;const f=No();let d,g,m;return mi(Ji,{slug:$=>o?o.slug($):"",getOptions:()=>l}),bn(()=>{t(7,m=!0)}),n.$$set=$=>{"source"in $&&t(2,i=$.source),"renderers"in $&&t(3,a=$.renderers),"options"in $&&t(4,c=$.options),"isInline"in $&&t(5,u=$.isInline)},n.$$.update=()=>{n.$$.dirty&4&&t(8,s=Array.isArray(i)),n.$$.dirty&4&&(o=i?new Wo:void 0),n.$$.dirty&16&&t(9,l=et(et({},oh),c)),n.$$.dirty&869&&(s?t(0,d=i):(t(6,g=new Dt(l)),t(0,d=u?g.inlineTokens(i):g.lex(i)),f("parsed",{tokens:d}))),n.$$.dirty&8&&t(1,r=et(et({},sh),a)),n.$$.dirty&385&&m&&!s&&f("parsed",{tokens:d})},[d,r,i,a,c,u,g,m,s,l]}class Sn extends Z{constructor(e){super(),G(this,e,rh,lh,W,{source:2,renderers:3,options:4,isInline:5})}}function ih(n){let e,t,s;return t=new Sn({props:{source:Jf}}),{c(){e=_("section"),L(t.$$.fragment),p(e,"class","documentation")},m(o,l){E(o,e,l),P(t,e,null),s=!0},p:K,i(o){s||(v(t.$$.fragment,o),s=!0)},o(o){y(t.$$.fragment,o),s=!1},d(o){o&&T(e),O(t)}}}let ah=class extends Z{constructor(e){super(),G(this,e,null,ih,W,{})}};function ch(n){let e,t,s;return{c(){e=_("button"),e.textContent="First",p(e,"class","tab svelte-46fy0b"),ie(e,"active",n[11])},m(o,l){E(o,e,l),t||(s=Y(e,"click",function(){De(n[12])&&n[12].apply(this,arguments)}),t=!0)},p(o,l){n=o,l&2048&&ie(e,"active",n[11])},d(o){o&&T(e),t=!1,s()}}}function uh(n){let e,t,s;return{c(){e=_("button"),e.textContent="Second",p(e,"class","tab svelte-46fy0b"),ie(e,"active",n[11])},m(o,l){E(o,e,l),t||(s=Y(e,"click",function(){De(n[12])&&n[12].apply(this,arguments)}),t=!0)},p(o,l){n=o,l&2048&&ie(e,"active",n[11])},d(o){o&&T(e),t=!1,s()}}}function fh(n){let e,t,s,o;return{c(){e=_("button"),t=F("Third"),e.disabled=n[0],p(e,"class","tab svelte-46fy0b"),ie(e,"active",n[11])},m(l,r){E(l,e,r),h(e,t),s||(o=Y(e,"click",function(){De(n[12])&&n[12].apply(this,arguments)}),s=!0)},p(l,r){n=l,r&1&&(e.disabled=n[0]),r&2048&&ie(e,"active",n[11])},d(l){l&&T(e),s=!1,o()}}}function Xl(n){let e,t;return e=new Zt({props:{$$slots:{default:[dh,({active:s,activate:o})=>({11:s,12:o}),({active:s,activate:o})=>(s?2048:0)|(o?4096:0)]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&14338&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function dh(n){let e,t,s,o,l;return{c(){e=_("button"),t=F("Fourth "),s=_("button"),s.textContent="×",p(s,"class","svelte-46fy0b"),p(e,"class","tab svelte-46fy0b"),ie(e,"active",n[11])},m(r,i){E(r,e,i),h(e,t),h(e,s),o||(l=[Y(s,"click",ts(n[4])),Y(e,"click",function(){De(n[12])&&n[12].apply(this,arguments)})],o=!0)},p(r,i){n=r,i&2048&&ie(e,"active",n[11])},d(r){r&&T(e),o=!1,Ae(l)}}}function Ql(n){let e,t;return e=new Zt({props:{$$slots:{default:[ph,({active:s,activate:o})=>({11:s,12:o}),({active:s,activate:o})=>(s?2048:0)|(o?4096:0)]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&14340&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function ph(n){let e,t,s,o,l;return{c(){e=_("button"),t=F("Fifth "),s=_("button"),s.textContent="×",p(s,"class","svelte-46fy0b"),p(e,"class","tab svelte-46fy0b"),ie(e,"active",n[11])},m(r,i){E(r,e,i),h(e,t),h(e,s),o||(l=[Y(s,"click",ts(n[5])),Y(e,"click",function(){De(n[12])&&n[12].apply(this,arguments)})],o=!0)},p(r,i){n=r,i&2048&&ie(e,"active",n[11])},d(r){r&&T(e),o=!1,Ae(l)}}}function hh(n){let e;return{c(){e=_("div"),e.textContent="These are the first diamonds I ever took from my first mine.",p(e,"class","panel svelte-46fy0b"),ie(e,"active",n[11])},m(t,s){E(t,e,s)},p(t,s){s&2048&&ie(e,"active",t[11])},d(t){t&&T(e)}}}function gh(n){let e;return{c(){e=_("div"),e.textContent="The second stage supplements the first stage by adding the second rail tunnel.",p(e,"class","panel svelte-46fy0b"),ie(e,"active",n[11])},m(t,s){E(t,e,s)},p(t,s){s&2048&&ie(e,"active",t[11])},d(t){t&&T(e)}}}function mh(n){let e;return{c(){e=_("div"),e.textContent="Let's not worry about third or fourth place.",p(e,"class","panel svelte-46fy0b"),ie(e,"active",n[11])},m(t,s){E(t,e,s)},p(t,s){s&2048&&ie(e,"active",t[11])},d(t){t&&T(e)}}}function Yl(n){let e,t;return e=new Xt({props:{$$slots:{default:[_h,({active:s})=>({11:s}),({active:s})=>s?2048:0]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&10240&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function _h(n){let e;return{c(){e=_("div"),e.textContent="The fourth is the process of Timorization through capacity-building.",p(e,"class","panel svelte-46fy0b"),ie(e,"active",n[11])},m(t,s){E(t,e,s)},p(t,s){s&2048&&ie(e,"active",t[11])},d(t){t&&T(e)}}}function Jl(n){let e,t;return e=new Xt({props:{$$slots:{default:[bh,({active:s})=>({11:s}),({active:s})=>s?2048:0]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&10240&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function bh(n){let e;return{c(){e=_("div"),e.textContent="Strings tuned a fifth apart.",p(e,"class","panel svelte-46fy0b"),ie(e,"active",n[11])},m(t,s){E(t,e,s)},p(t,s){s&2048&&ie(e,"active",t[11])},d(t){t&&T(e)}}}function $h(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S;e=new Zt({props:{$$slots:{default:[ch,({active:w,activate:D})=>({11:w,12:D}),({active:w,activate:D})=>(w?2048:0)|(D?4096:0)]},$$scope:{ctx:n}}}),s=new Zt({props:{$$slots:{default:[uh,({active:w,activate:D})=>({11:w,12:D}),({active:w,activate:D})=>(w?2048:0)|(D?4096:0)]},$$scope:{ctx:n}}}),l=new Zt({props:{$$slots:{default:[fh,({active:w,activate:D})=>({11:w,12:D}),({active:w,activate:D})=>(w?2048:0)|(D?4096:0)]},$$scope:{ctx:n}}});let k=n[1]&&Xl(n),M=n[2]&&Ql(n);c=new Xt({props:{$$slots:{default:[hh,({active:w})=>({11:w}),({active:w})=>w?2048:0]},$$scope:{ctx:n}}}),f=new Xt({props:{$$slots:{default:[gh,({active:w})=>({11:w}),({active:w})=>w?2048:0]},$$scope:{ctx:n}}}),g=new Xt({props:{$$slots:{default:[mh,({active:w})=>({11:w}),({active:w})=>w?2048:0]},$$scope:{ctx:n}}});let R=n[1]&&Yl(n),N=n[2]&&Jl(n);return{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment),r=x(),k&&k.c(),i=x(),M&&M.c(),a=x(),L(c.$$.fragment),u=x(),L(f.$$.fragment),d=x(),L(g.$$.fragment),m=x(),R&&R.c(),$=x(),N&&N.c(),A=Ee()},m(w,D){P(e,w,D),E(w,t,D),P(s,w,D),E(w,o,D),P(l,w,D),E(w,r,D),k&&k.m(w,D),E(w,i,D),M&&M.m(w,D),E(w,a,D),P(c,w,D),E(w,u,D),P(f,w,D),E(w,d,D),P(g,w,D),E(w,m,D),R&&R.m(w,D),E(w,$,D),N&&N.m(w,D),E(w,A,D),S=!0},p(w,D){const B={};D&14336&&(B.$$scope={dirty:D,ctx:w}),e.$set(B);const q={};D&14336&&(q.$$scope={dirty:D,ctx:w}),s.$set(q);const ee={};D&14337&&(ee.$$scope={dirty:D,ctx:w}),l.$set(ee),w[1]?k?(k.p(w,D),D&2&&v(k,1)):(k=Xl(w),k.c(),v(k,1),k.m(i.parentNode,i)):k&&(me(),y(k,1,1,()=>{k=null}),_e()),w[2]?M?(M.p(w,D),D&4&&v(M,1)):(M=Ql(w),M.c(),v(M,1),M.m(a.parentNode,a)):M&&(me(),y(M,1,1,()=>{M=null}),_e());const te={};D&10240&&(te.$$scope={dirty:D,ctx:w}),c.$set(te);const ce={};D&10240&&(ce.$$scope={dirty:D,ctx:w}),f.$set(ce);const ye={};D&10240&&(ye.$$scope={dirty:D,ctx:w}),g.$set(ye),w[1]?R?(R.p(w,D),D&2&&v(R,1)):(R=Yl(w),R.c(),v(R,1),R.m($.parentNode,$)):R&&(me(),y(R,1,1,()=>{R=null}),_e()),w[2]?N?(N.p(w,D),D&4&&v(N,1)):(N=Jl(w),N.c(),v(N,1),N.m(A.parentNode,A)):N&&(me(),y(N,1,1,()=>{N=null}),_e())},i(w){S||(v(e.$$.fragment,w),v(s.$$.fragment,w),v(l.$$.fragment,w),v(k),v(M),v(c.$$.fragment,w),v(f.$$.fragment,w),v(g.$$.fragment,w),v(R),v(N),S=!0)},o(w){y(e.$$.fragment,w),y(s.$$.fragment,w),y(l.$$.fragment,w),y(k),y(M),y(c.$$.fragment,w),y(f.$$.fragment,w),y(g.$$.fragment,w),y(R),y(N),S=!1},d(w){O(e,w),w&&T(t),O(s,w),w&&T(o),O(l,w),w&&T(r),k&&k.d(w),w&&T(i),M&&M.d(w),w&&T(a),O(c,w),w&&T(u),O(f,w),w&&T(d),O(g,w),w&&T(m),R&&R.d(w),w&&T($),N&&N.d(w),w&&T(A)}}}function vh(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k,M,R,N,w,D,B;function q(te){n[6](te)}let ee={$$slots:{default:[$h]},$$scope:{ctx:n}};return n[3]!==void 0&&(ee.selected=n[3]),e=new ps({props:ee}),Xe.push(()=>Lt(e,"selected",q)),{c(){L(e.$$.fragment),s=x(),o=_("div"),o.textContent="Use these controls to operate tabs.",l=x(),r=_("div"),i=_("label"),a=_("input"),c=F(" Fourth"),u=x(),f=_("label"),d=_("input"),g=F(" Fifth"),m=x(),$=_("label"),A=_("input"),S=F(" Disable Third"),k=x(),M=_("label"),R=F("Selected "),N=_("input"),p(o,"class","py-2 border-t text-center text-gray-500"),p(a,"type","checkbox"),p(d,"type","checkbox"),p(A,"type","checkbox"),p(N,"class","input max-w-[6ch]"),p(N,"type","number"),p(r,"class","flex items-center place-content-center gap-4")},m(te,ce){P(e,te,ce),E(te,s,ce),E(te,o,ce),E(te,l,ce),E(te,r,ce),h(r,i),h(i,a),a.checked=n[1],h(i,c),h(r,u),h(r,f),h(f,d),d.checked=n[2],h(f,g),h(r,m),h(r,$),h($,A),A.checked=n[0],h($,S),h(r,k),h(r,M),h(M,R),h(M,N),ut(N,n[3]),w=!0,D||(B=[Y(a,"change",n[7]),Y(d,"change",n[8]),Y(A,"change",n[9]),Y(N,"input",n[10])],D=!0)},p(te,[ce]){const ye={};ce&8199&&(ye.$$scope={dirty:ce,ctx:te}),!t&&ce&8&&(t=!0,ye.selected=te[3],Yt(()=>t=!1)),e.$set(ye),ce&2&&(a.checked=te[1]),ce&4&&(d.checked=te[2]),ce&1&&(A.checked=te[0]),ce&8&&_t(N.value)!==te[3]&&ut(N,te[3])},i(te){w||(v(e.$$.fragment,te),w=!0)},o(te){y(e.$$.fragment,te),w=!1},d(te){O(e,te),te&&T(s),te&&T(o),te&&T(l),te&&T(r),D=!1,Ae(B)}}}function wh(n,e,t){let s=!1,o=!0,l=!0,r=NaN;const i=()=>t(1,o=!1),a=()=>t(2,l=!1);function c(m){r=m,t(3,r)}function u(){o=this.checked,t(1,o)}function f(){l=this.checked,t(2,l)}function d(){s=this.checked,t(0,s)}function g(){r=_t(this.value),t(3,r)}return[s,o,l,r,i,a,c,u,f,d,g]}let kh=class extends Z{constructor(e){super(),G(this,e,wh,vh,W,{})}};function yh(n){let e,t,s,o,l;return t=new kh({}),o=new dt({props:{code:`<script lang="ts">
  import { Tab, Panel, Tabs } from '@apsc/tabs';

  let disable3 = false;
  let show4 = true;
  let show5 = true;
  let selected = NaN;
<\/script>

<Tabs bind:selected>
  <Tab let:active let:activate
    ><button class="tab" class:active on:click={activate}>First</button></Tab
  >
  <Tab let:active let:activate
    ><button class="tab" class:active on:click={activate}>Second</button></Tab
  >
  <Tab let:active let:activate
    ><button disabled={disable3} class="tab" class:active on:click={activate}>Third</button></Tab
  >
  {#if show4}
    <Tab let:active let:activate>
      <button class="tab" class:active on:click={activate}
        >Fourth <button on:click|preventDefault={() => (show4 = false)}>&times;</button></button
      >
    </Tab>
  {/if}
  {#if show5}
    <Tab let:active let:activate>
      <button class="tab" class:active on:click={activate}
        >Fifth <button on:click|preventDefault={() => (show5 = false)}>&times;</button></button
      >
    </Tab>
  {/if}
  <Panel let:active>
    <div class="panel" class:active>
      These are the first diamonds I ever took from my first mine.
    </div></Panel
  >
  <Panel let:active>
    <div class="panel" class:active>
      The second stage supplements the first stage by adding the second rail tunnel.
    </div>
  </Panel>
  <Panel let:active>
    <div class="panel" class:active>Let's not worry about third or fourth place.</div>
  </Panel>
  {#if show4}
    <Panel let:active>
      <div class="panel" class:active>
        The fourth is the process of Timorization through capacity-building.
      </div>
    </Panel>
  {/if}
  {#if show5}
    <Panel let:active>
      <div class="panel" class:active>Strings tuned a fifth apart.</div>
    </Panel>
  {/if}
</Tabs>
<div class="py-2 border-t text-center text-gray-500">Use these controls to operate tabs.</div>
<div class="flex items-center place-content-center gap-4">
  <label><input type="checkbox" bind:checked={show4} /> Fourth</label>
  <label><input type="checkbox" bind:checked={show5} /> Fifth</label>
  <label><input type="checkbox" bind:checked={disable3} /> Disable Third</label>
  <label
    >Selected&emsp;<input class="input max-w-[6ch]" type="number" bind:value={selected} /></label
  >
</div>

<style lang="postcss">
  .tab {
    @apply appearance-none px-2 bg-blue-100 text-blue-800 rounded-md;
  }
  .tab:disabled {
    @apply bg-gray-200 text-gray-500 cursor-not-allowed;
  }
  .tab.active {
    @apply bg-blue-800 text-blue-100;
  }
  .tab button {
    @apply appearance-none border-l border-dotted border-current ml-1.5 pl-1.5;
  }
  .panel {
    @apply mt-3;
  }
  .panel:not(.active) {
    display: none;
  }
</style>`}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),L(o.$$.fragment),p(e,"class","prose max-w-none my-4")},m(r,i){E(r,e,i),P(t,e,null),h(e,s),P(o,e,null),l=!0},p:K,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(o.$$.fragment,r),l=!1},d(r){r&&T(e),O(t),O(o)}}}let Th=class extends Z{constructor(e){super(),G(this,e,null,yh,W,{})}};function Vl(n,e,t){const s=n.slice();return s[0]=e[t],s[2]=t,s}function er(n,e,t){const s=n.slice();return s[0]=e[t],s[2]=t,s}function tr(n,e,t){const s=n.slice();return s[0]=e[t],s[6]=t,s}function nr(n,e,t){const s=n.slice();return s[0]=e[t],s[6]=t,s}function Eh(n){let e,t,s,o,l,r;return{c(){e=_("button"),t=F("Tab #"),s=F(n[6]),o=x(),p(e,"class","tab level-1 svelte-jw7z4j"),ie(e,"active",n[3])},m(i,a){E(i,e,a),h(e,t),h(e,s),E(i,o,a),l||(r=Y(e,"click",function(){De(n[7])&&n[7].apply(this,arguments)}),l=!0)},p(i,a){n=i,a&8&&ie(e,"active",n[3])},d(i){i&&T(e),i&&T(o),l=!1,r()}}}function sr(n){let e,t=" ",s,o;return e=new Zt({props:{$$slots:{default:[Eh,({active:l,activate:r})=>({3:l,7:r}),({active:l,activate:r})=>(l?8:0)|(r?128:0)]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),s=F(t)},m(l,r){P(e,l,r),E(l,s,r),o=!0},p(l,r){const i={};r&648&&(i.$$scope={dirty:r,ctx:l}),e.$set(i)},i(l){o||(v(e.$$.fragment,l),o=!0)},o(l){y(e.$$.fragment,l),o=!1},d(l){O(e,l),l&&T(s)}}}function Sh(n){let e,t,s,o,l,r;return{c(){e=_("button"),t=F("Child #"),s=F(n[6]),o=x(),p(e,"class","tab level-2 svelte-jw7z4j"),ie(e,"active",n[3])},m(i,a){E(i,e,a),h(e,t),h(e,s),E(i,o,a),l||(r=Y(e,"click",function(){De(n[7])&&n[7].apply(this,arguments)}),l=!0)},p(i,a){n=i,a&8&&ie(e,"active",n[3])},d(i){i&&T(e),i&&T(o),l=!1,r()}}}function or(n){let e,t=" ",s,o;return e=new Zt({props:{$$slots:{default:[Sh,({active:l,activate:r})=>({3:l,7:r}),({active:l,activate:r})=>(l?8:0)|(r?128:0)]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),s=F(t)},m(l,r){P(e,l,r),E(l,s,r),o=!0},p(l,r){const i={};r&648&&(i.$$scope={dirty:r,ctx:l}),e.$set(i)},i(l){o||(v(e.$$.fragment,l),o=!0)},o(l){y(e.$$.fragment,l),o=!1},d(l){O(e,l),l&&T(s)}}}function xh(n){let e,t,s,o,l;return{c(){e=_("div"),t=F("Child tab #"),s=F(n[2]),o=F(" context"),l=x(),p(e,"class","panel svelte-jw7z4j"),ie(e,"active",n[3])},m(r,i){E(r,e,i),h(e,t),h(e,s),h(e,o),E(r,l,i)},p(r,i){i&8&&ie(e,"active",r[3])},d(r){r&&T(e),r&&T(l)}}}function lr(n){let e,t;return e=new Xt({props:{$$slots:{default:[xh,({active:s})=>({3:s}),({active:s})=>s?8:0]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&520&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Ah(n){let e,t,s,o={length:on},l=[];for(let u=0;u<o.length;u+=1)l[u]=or(tr(n,o,u));const r=u=>y(l[u],1,1,()=>{l[u]=null});let i={length:on},a=[];for(let u=0;u<i.length;u+=1)a[u]=lr(er(n,i,u));const c=u=>y(a[u],1,1,()=>{a[u]=null});return{c(){for(let u=0;u<l.length;u+=1)l[u].c();e=x();for(let u=0;u<a.length;u+=1)a[u].c();t=Ee()},m(u,f){for(let d=0;d<l.length;d+=1)l[d].m(u,f);E(u,e,f);for(let d=0;d<a.length;d+=1)a[d].m(u,f);E(u,t,f),s=!0},p(u,f){if(f&136){o={length:on};let d;for(d=0;d<o.length;d+=1){const g=tr(u,o,d);l[d]?(l[d].p(g,f),v(l[d],1)):(l[d]=or(g),l[d].c(),v(l[d],1),l[d].m(e.parentNode,e))}for(me(),d=o.length;d<l.length;d+=1)r(d);_e()}if(f&8){i={length:on};let d;for(d=0;d<i.length;d+=1){const g=er(u,i,d);a[d]?(a[d].p(g,f),v(a[d],1)):(a[d]=lr(g),a[d].c(),v(a[d],1),a[d].m(t.parentNode,t))}for(me(),d=i.length;d<a.length;d+=1)c(d);_e()}},i(u){if(!s){for(let f=0;f<o.length;f+=1)v(l[f]);for(let f=0;f<i.length;f+=1)v(a[f]);s=!0}},o(u){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)y(l[f]);a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)y(a[f]);s=!1},d(u){He(l,u),u&&T(e),He(a,u),u&&T(t)}}}function Ch(n){let e,t,s,o,l,r,i,a,c,u;return a=new ps({props:{$$slots:{default:[Ah]},$$scope:{ctx:n}}}),{c(){e=_("div"),t=_("div"),s=F("Tab #"),o=F(n[2]),l=F(" context. Nested tabs below"),r=x(),i=_("div"),L(a.$$.fragment),c=x(),p(i,"class","mt-3"),p(e,"class","panel svelte-jw7z4j"),ie(e,"active",n[3])},m(f,d){E(f,e,d),h(e,t),h(t,s),h(t,o),h(t,l),h(e,r),h(e,i),P(a,i,null),E(f,c,d),u=!0},p(f,d){const g={};d&520&&(g.$$scope={dirty:d,ctx:f}),a.$set(g),(!u||d&8)&&ie(e,"active",f[3])},i(f){u||(v(a.$$.fragment,f),u=!0)},o(f){y(a.$$.fragment,f),u=!1},d(f){f&&T(e),O(a),f&&T(c)}}}function rr(n){let e,t;return e=new Xt({props:{$$slots:{default:[Ch,({active:s})=>({3:s}),({active:s})=>s?8:0]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&520&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Nh(n){let e,t,s,o={length:on},l=[];for(let u=0;u<o.length;u+=1)l[u]=sr(nr(n,o,u));const r=u=>y(l[u],1,1,()=>{l[u]=null});let i={length:on},a=[];for(let u=0;u<i.length;u+=1)a[u]=rr(Vl(n,i,u));const c=u=>y(a[u],1,1,()=>{a[u]=null});return{c(){for(let u=0;u<l.length;u+=1)l[u].c();e=x();for(let u=0;u<a.length;u+=1)a[u].c();t=Ee()},m(u,f){for(let d=0;d<l.length;d+=1)l[d].m(u,f);E(u,e,f);for(let d=0;d<a.length;d+=1)a[d].m(u,f);E(u,t,f),s=!0},p(u,f){if(f&136){o={length:on};let d;for(d=0;d<o.length;d+=1){const g=nr(u,o,d);l[d]?(l[d].p(g,f),v(l[d],1)):(l[d]=sr(g),l[d].c(),v(l[d],1),l[d].m(e.parentNode,e))}for(me(),d=o.length;d<l.length;d+=1)r(d);_e()}if(f&136){i={length:on};let d;for(d=0;d<i.length;d+=1){const g=Vl(u,i,d);a[d]?(a[d].p(g,f),v(a[d],1)):(a[d]=rr(g),a[d].c(),v(a[d],1),a[d].m(t.parentNode,t))}for(me(),d=i.length;d<a.length;d+=1)c(d);_e()}},i(u){if(!s){for(let f=0;f<o.length;f+=1)v(l[f]);for(let f=0;f<i.length;f+=1)v(a[f]);s=!0}},o(u){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)y(l[f]);a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)y(a[f]);s=!1},d(u){He(l,u),u&&T(e),He(a,u),u&&T(t)}}}function Mh(n){let e,t;return e=new ps({props:{$$slots:{default:[Nh]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,[o]){const l={};o&512&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}let on=5,Rh=class extends Z{constructor(e){super(),G(this,e,null,Mh,W,{})}};function Ph(n){let e,t,s,o,l;return t=new Rh({}),o=new dt({props:{code:`<script lang="ts">
  import { Tab, Panel, Tabs } from '@apsc/tabs';
  let count = 5;
<\/script>

<Tabs>
  {#each { length: count } as _, tab}
    <Tab let:active let:activate>
      <button class="tab level-1" class:active on:click={activate}>Tab #{tab}</button>
    </Tab>{' '}
  {/each}
  {#each { length: count } as _, panel}
    <Panel let:active>
      <div class="panel" class:active>
        <div>Tab #{panel} context. Nested tabs below</div>
        <div class="mt-3">
          <Tabs>
            {#each { length: count } as _, tab}
              <Tab let:active let:activate>
                <button class="tab level-2" class:active on:click={activate}>Child #{tab}</button>
              </Tab>{' '}
            {/each}
            {#each { length: count } as _, panel}
              <Panel let:active>
                <div class="panel" class:active>Child tab #{panel} context</div>
              </Panel>
            {/each}
          </Tabs>
        </div>
      </div>
    </Panel>
  {/each}
</Tabs>

<style lang="postcss">
  .tab {
    @apply appearance-none px-2  rounded-md;
  }
  .tab.level-1 {
    @apply bg-blue-100 text-blue-800;
  }
  .tab.level-1.active {
    @apply bg-blue-800 text-blue-100;
  }
  .tab.level-2 {
    @apply bg-green-100 text-green-800;
  }
  .tab.level-2.active {
    @apply bg-green-800 text-green-100;
  }
  .panel {
    @apply mt-3;
  }
  .panel:not(.active) {
    display: none;
  }
</style>`}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),L(o.$$.fragment),p(e,"class","prose max-w-none my-4")},m(r,i){E(r,e,i),P(t,e,null),h(e,s),P(o,e,null),l=!0},p:K,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(o.$$.fragment,r),l=!1},d(r){r&&T(e),O(t),O(o)}}}let Oh=class extends Z{constructor(e){super(),G(this,e,null,Ph,W,{})}};var Ks={},Lh={get exports(){return Ks},set exports(n){Ks=n}};(function(n,e){var t=200,s="Expected a function",o="__lodash_hash_undefined__",l=1,r=2,i=1/0,a=9007199254740991,c="[object Arguments]",u="[object Array]",f="[object Boolean]",d="[object Date]",g="[object Error]",m="[object Function]",$="[object GeneratorFunction]",A="[object Map]",S="[object Number]",k="[object Object]",M="[object Promise]",R="[object RegExp]",N="[object Set]",w="[object String]",D="[object Symbol]",B="[object WeakMap]",q="[object ArrayBuffer]",ee="[object DataView]",te="[object Float32Array]",ce="[object Float64Array]",ye="[object Int8Array]",$e="[object Int16Array]",Oe="[object Int32Array]",z="[object Uint8Array]",U="[object Uint8ClampedArray]",J="[object Uint16Array]",le="[object Uint32Array]",j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/,ae=/^\./,we=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V=/[\\^$.*+?()[\]{}|]/g,Se=/\\(\\)?/g,he=/^\[object .+?Constructor\]$/,qe=/^(?:0|[1-9]\d*)$/,xe={};xe[te]=xe[ce]=xe[ye]=xe[$e]=xe[Oe]=xe[z]=xe[U]=xe[J]=xe[le]=!0,xe[c]=xe[u]=xe[q]=xe[f]=xe[ee]=xe[d]=xe[g]=xe[m]=xe[A]=xe[S]=xe[k]=xe[R]=xe[N]=xe[w]=xe[B]=!1;var Je=typeof nn=="object"&&nn&&nn.Object===Object&&nn,bt=typeof self=="object"&&self&&self.Object===Object&&self,je=Je||bt||Function("return this")(),nt=e&&!e.nodeType&&e,Ke=nt&&!0&&n&&!n.nodeType&&n,it=Ke&&Ke.exports===nt,vt=it&&Je.process,Fe=function(){try{return vt&&vt.binding("util")}catch(b){}}(),ue=Fe&&Fe.isTypedArray;function wt(b,C,I,H){for(var fe=-1,se=b?b.length:0;++fe<se;){var ve=b[fe];C(H,ve,I(ve),b)}return H}function Pe(b,C){for(var I=-1,H=b?b.length:0;++I<H;)if(C(b[I],I,b))return!0;return!1}function be(b){return function(C){return C==null?void 0:C[b]}}function st(b,C){for(var I=-1,H=Array(b);++I<b;)H[I]=C(I);return H}function Le(b){return function(C){return b(C)}}function ne(b,C){return b==null?void 0:b[C]}function Te(b){var C=!1;if(b!=null&&typeof b.toString!="function")try{C=!!(b+"")}catch(I){}return C}function X(b){var C=-1,I=Array(b.size);return b.forEach(function(H,fe){I[++C]=[fe,H]}),I}function Q(b,C){return function(I){return b(C(I))}}function re(b){var C=-1,I=Array(b.size);return b.forEach(function(H){I[++C]=H}),I}var ke=Array.prototype,Qe=Function.prototype,We=Object.prototype,kt=je["__core-js_shared__"],cn=function(){var b=/[^.]+$/.exec(kt&&kt.keys&&kt.keys.IE_PROTO||"");return b?"Symbol(src)_1."+b:""}(),Gn=Qe.toString,at=We.hasOwnProperty,zt=We.toString,xn=RegExp("^"+Gn.call(at).replace(V,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Zn=je.Symbol,Xn=je.Uint8Array,Rt=We.propertyIsEnumerable,An=ke.splice,hs=Q(Object.keys,Object),At=Rn(je,"DataView"),yt=Rn(je,"Map"),Cn=Rn(je,"Promise"),Nn=Rn(je,"Set"),Ft=Rn(je,"WeakMap"),Jt=Rn(Object,"create"),Mn=fn(At),gs=fn(yt),Qn=fn(Cn),io=fn(Nn),va=fn(Ft),ms=Zn?Zn.prototype:void 0,ao=ms?ms.valueOf:void 0,Vo=ms?ms.toString:void 0;function un(b){var C=-1,I=b?b.length:0;for(this.clear();++C<I;){var H=b[C];this.set(H[0],H[1])}}function wa(){this.__data__=Jt?Jt(null):{}}function ka(b){return this.has(b)&&delete this.__data__[b]}function ya(b){var C=this.__data__;if(Jt){var I=C[b];return I===o?void 0:I}return at.call(C,b)?C[b]:void 0}function Ta(b){var C=this.__data__;return Jt?C[b]!==void 0:at.call(C,b)}function Ea(b,C){var I=this.__data__;return I[b]=Jt&&C===void 0?o:C,this}un.prototype.clear=wa,un.prototype.delete=ka,un.prototype.get=ya,un.prototype.has=Ta,un.prototype.set=Ea;function Ht(b){var C=-1,I=b?b.length:0;for(this.clear();++C<I;){var H=b[C];this.set(H[0],H[1])}}function Sa(){this.__data__=[]}function xa(b){var C=this.__data__,I=bs(C,b);if(I<0)return!1;var H=C.length-1;return I==H?C.pop():An.call(C,I,1),!0}function Aa(b){var C=this.__data__,I=bs(C,b);return I<0?void 0:C[I][1]}function Ca(b){return bs(this.__data__,b)>-1}function Na(b,C){var I=this.__data__,H=bs(I,b);return H<0?I.push([b,C]):I[H][1]=C,this}Ht.prototype.clear=Sa,Ht.prototype.delete=xa,Ht.prototype.get=Aa,Ht.prototype.has=Ca,Ht.prototype.set=Na;function jt(b){var C=-1,I=b?b.length:0;for(this.clear();++C<I;){var H=b[C];this.set(H[0],H[1])}}function Ma(){this.__data__={hash:new un,map:new(yt||Ht),string:new un}}function Ra(b){return $s(this,b).delete(b)}function Pa(b){return $s(this,b).get(b)}function Oa(b){return $s(this,b).has(b)}function La(b,C){return $s(this,b).set(b,C),this}jt.prototype.clear=Ma,jt.prototype.delete=Ra,jt.prototype.get=Pa,jt.prototype.has=Oa,jt.prototype.set=La;function _s(b){var C=-1,I=b?b.length:0;for(this.__data__=new jt;++C<I;)this.add(b[C])}function Da(b){return this.__data__.set(b,o),this}function Ia(b){return this.__data__.has(b)}_s.prototype.add=_s.prototype.push=Da,_s.prototype.has=Ia;function Ut(b){this.__data__=new Ht(b)}function Ba(){this.__data__=new Ht}function za(b){return this.__data__.delete(b)}function Fa(b){return this.__data__.get(b)}function Ha(b){return this.__data__.has(b)}function ja(b,C){var I=this.__data__;if(I instanceof Ht){var H=I.__data__;if(!yt||H.length<t-1)return H.push([b,C]),this;I=this.__data__=new jt(H)}return I.set(b,C),this}Ut.prototype.clear=Ba,Ut.prototype.delete=za,Ut.prototype.get=Fa,Ut.prototype.has=Ha,Ut.prototype.set=ja;function Ua(b,C){var I=en(b)||il(b)?st(b.length,String):[],H=I.length,fe=!!H;for(var se in b)(C||at.call(b,se))&&!(fe&&(se=="length"||sl(se,H)))&&I.push(se);return I}function bs(b,C){for(var I=b.length;I--;)if(rl(b[I][0],C))return I;return-1}function qa(b,C,I,H){return Ka(b,function(fe,se,ve){C(H,fe,I(fe),ve)}),H}var Ka=ic(Ga),Wa=ac();function Ga(b,C){return b&&Wa(b,C,Ts)}function el(b,C){C=vs(C,b)?[C]:tl(C);for(var I=0,H=C.length;b!=null&&I<H;)b=b[ws(C[I++])];return I&&I==H?b:void 0}function Za(b){return zt.call(b)}function Xa(b,C){return b!=null&&C in Object(b)}function co(b,C,I,H,fe){return b===C?!0:b==null||C==null||!ks(b)&&!ys(C)?b!==b&&C!==C:Qa(b,C,co,I,H,fe)}function Qa(b,C,I,H,fe,se){var ve=en(b),Be=en(C),Ue=u,ot=u;ve||(Ue=Vt(b),Ue=Ue==c?k:Ue),Be||(ot=Vt(C),ot=ot==c?k:ot);var ft=Ue==k&&!Te(b),pt=ot==k&&!Te(C),lt=Ue==ot;if(lt&&!ft)return se||(se=new Ut),ve||$c(b)?nl(b,C,I,H,fe,se):cc(b,C,Ue,I,H,fe,se);if(!(fe&r)){var Tt=ft&&at.call(b,"__wrapped__"),Et=pt&&at.call(C,"__wrapped__");if(Tt||Et){var tn=Tt?b.value():b,qt=Et?C.value():C;return se||(se=new Ut),I(tn,qt,H,fe,se)}}return lt?(se||(se=new Ut),uc(b,C,I,H,fe,se)):!1}function Ya(b,C,I,H){var fe=I.length,se=fe,ve=!H;if(b==null)return!se;for(b=Object(b);fe--;){var Be=I[fe];if(ve&&Be[2]?Be[1]!==b[Be[0]]:!(Be[0]in b))return!1}for(;++fe<se;){Be=I[fe];var Ue=Be[0],ot=b[Ue],ft=Be[1];if(ve&&Be[2]){if(ot===void 0&&!(Ue in b))return!1}else{var pt=new Ut;if(H)var lt=H(ot,ft,Ue,b,C,pt);if(!(lt===void 0?co(ft,ot,H,l|r,pt):lt))return!1}}return!0}function Ja(b){if(!ks(b)||hc(b))return!1;var C=al(b)||Te(b)?xn:he;return C.test(fn(b))}function Va(b){return ys(b)&&po(b.length)&&!!xe[zt.call(b)]}function ec(b){return typeof b=="function"?b:b==null?yc:typeof b=="object"?en(b)?sc(b[0],b[1]):nc(b):Tc(b)}function tc(b){if(!gc(b))return hs(b);var C=[];for(var I in Object(b))at.call(b,I)&&I!="constructor"&&C.push(I);return C}function nc(b){var C=fc(b);return C.length==1&&C[0][2]?ll(C[0][0],C[0][1]):function(I){return I===b||Ya(I,b,C)}}function sc(b,C){return vs(b)&&ol(C)?ll(ws(b),C):function(I){var H=wc(I,b);return H===void 0&&H===C?kc(I,b):co(C,H,void 0,l|r)}}function oc(b){return function(C){return el(C,b)}}function lc(b){if(typeof b=="string")return b;if(ho(b))return Vo?Vo.call(b):"";var C=b+"";return C=="0"&&1/b==-i?"-0":C}function tl(b){return en(b)?b:mc(b)}function rc(b,C){return function(I,H){var fe=en(I)?wt:qa,se=C?C():{};return fe(I,b,ec(H),se)}}function ic(b,C){return function(I,H){if(I==null)return I;if(!fo(I))return b(I,H);for(var fe=I.length,se=C?fe:-1,ve=Object(I);(C?se--:++se<fe)&&H(ve[se],se,ve)!==!1;);return I}}function ac(b){return function(C,I,H){for(var fe=-1,se=Object(C),ve=H(C),Be=ve.length;Be--;){var Ue=ve[b?Be:++fe];if(I(se[Ue],Ue,se)===!1)break}return C}}function nl(b,C,I,H,fe,se){var ve=fe&r,Be=b.length,Ue=C.length;if(Be!=Ue&&!(ve&&Ue>Be))return!1;var ot=se.get(b);if(ot&&se.get(C))return ot==C;var ft=-1,pt=!0,lt=fe&l?new _s:void 0;for(se.set(b,C),se.set(C,b);++ft<Be;){var Tt=b[ft],Et=C[ft];if(H)var tn=ve?H(Et,Tt,ft,C,b,se):H(Tt,Et,ft,b,C,se);if(tn!==void 0){if(tn)continue;pt=!1;break}if(lt){if(!Pe(C,function(qt,dn){if(!lt.has(dn)&&(Tt===qt||I(Tt,qt,H,fe,se)))return lt.add(dn)})){pt=!1;break}}else if(!(Tt===Et||I(Tt,Et,H,fe,se))){pt=!1;break}}return se.delete(b),se.delete(C),pt}function cc(b,C,I,H,fe,se,ve){switch(I){case ee:if(b.byteLength!=C.byteLength||b.byteOffset!=C.byteOffset)return!1;b=b.buffer,C=C.buffer;case q:return!(b.byteLength!=C.byteLength||!H(new Xn(b),new Xn(C)));case f:case d:case S:return rl(+b,+C);case g:return b.name==C.name&&b.message==C.message;case R:case w:return b==C+"";case A:var Be=X;case N:var Ue=se&r;if(Be||(Be=re),b.size!=C.size&&!Ue)return!1;var ot=ve.get(b);if(ot)return ot==C;se|=l,ve.set(b,C);var ft=nl(Be(b),Be(C),H,fe,se,ve);return ve.delete(b),ft;case D:if(ao)return ao.call(b)==ao.call(C)}return!1}function uc(b,C,I,H,fe,se){var ve=fe&r,Be=Ts(b),Ue=Be.length,ot=Ts(C),ft=ot.length;if(Ue!=ft&&!ve)return!1;for(var pt=Ue;pt--;){var lt=Be[pt];if(!(ve?lt in C:at.call(C,lt)))return!1}var Tt=se.get(b);if(Tt&&se.get(C))return Tt==C;var Et=!0;se.set(b,C),se.set(C,b);for(var tn=ve;++pt<Ue;){lt=Be[pt];var qt=b[lt],dn=C[lt];if(H)var cl=ve?H(dn,qt,lt,C,b,se):H(qt,dn,lt,b,C,se);if(!(cl===void 0?qt===dn||I(qt,dn,H,fe,se):cl)){Et=!1;break}tn||(tn=lt=="constructor")}if(Et&&!tn){var Es=b.constructor,Ss=C.constructor;Es!=Ss&&"constructor"in b&&"constructor"in C&&!(typeof Es=="function"&&Es instanceof Es&&typeof Ss=="function"&&Ss instanceof Ss)&&(Et=!1)}return se.delete(b),se.delete(C),Et}function $s(b,C){var I=b.__data__;return pc(C)?I[typeof C=="string"?"string":"hash"]:I.map}function fc(b){for(var C=Ts(b),I=C.length;I--;){var H=C[I],fe=b[H];C[I]=[H,fe,ol(fe)]}return C}function Rn(b,C){var I=ne(b,C);return Ja(I)?I:void 0}var Vt=Za;(At&&Vt(new At(new ArrayBuffer(1)))!=ee||yt&&Vt(new yt)!=A||Cn&&Vt(Cn.resolve())!=M||Nn&&Vt(new Nn)!=N||Ft&&Vt(new Ft)!=B)&&(Vt=function(b){var C=zt.call(b),I=C==k?b.constructor:void 0,H=I?fn(I):void 0;if(H)switch(H){case Mn:return ee;case gs:return A;case Qn:return M;case io:return N;case va:return B}return C});function dc(b,C,I){C=vs(C,b)?[C]:tl(C);for(var H,fe=-1,ve=C.length;++fe<ve;){var se=ws(C[fe]);if(!(H=b!=null&&I(b,se)))break;b=b[se]}if(H)return H;var ve=b?b.length:0;return!!ve&&po(ve)&&sl(se,ve)&&(en(b)||il(b))}function sl(b,C){return C=C==null?a:C,!!C&&(typeof b=="number"||qe.test(b))&&b>-1&&b%1==0&&b<C}function vs(b,C){if(en(b))return!1;var I=typeof b;return I=="number"||I=="symbol"||I=="boolean"||b==null||ho(b)?!0:pe.test(b)||!j.test(b)||C!=null&&b in Object(C)}function pc(b){var C=typeof b;return C=="string"||C=="number"||C=="symbol"||C=="boolean"?b!=="__proto__":b===null}function hc(b){return!!cn&&cn in b}function gc(b){var C=b&&b.constructor,I=typeof C=="function"&&C.prototype||We;return b===I}function ol(b){return b===b&&!ks(b)}function ll(b,C){return function(I){return I==null?!1:I[b]===C&&(C!==void 0||b in Object(I))}}var mc=uo(function(b){b=vc(b);var C=[];return ae.test(b)&&C.push(""),b.replace(we,function(I,H,fe,se){C.push(fe?se.replace(Se,"$1"):H||I)}),C});function ws(b){if(typeof b=="string"||ho(b))return b;var C=b+"";return C=="0"&&1/b==-i?"-0":C}function fn(b){if(b!=null){try{return Gn.call(b)}catch(C){}try{return b+""}catch(C){}}return""}var _c=rc(function(b,C,I){at.call(b,I)?b[I].push(C):b[I]=[C]});function uo(b,C){if(typeof b!="function"||C&&typeof C!="function")throw new TypeError(s);var I=function(){var H=arguments,fe=C?C.apply(this,H):H[0],se=I.cache;if(se.has(fe))return se.get(fe);var ve=b.apply(this,H);return I.cache=se.set(fe,ve),ve};return I.cache=new(uo.Cache||jt),I}uo.Cache=jt;function rl(b,C){return b===C||b!==b&&C!==C}function il(b){return bc(b)&&at.call(b,"callee")&&(!Rt.call(b,"callee")||zt.call(b)==c)}var en=Array.isArray;function fo(b){return b!=null&&po(b.length)&&!al(b)}function bc(b){return ys(b)&&fo(b)}function al(b){var C=ks(b)?zt.call(b):"";return C==m||C==$}function po(b){return typeof b=="number"&&b>-1&&b%1==0&&b<=a}function ks(b){var C=typeof b;return!!b&&(C=="object"||C=="function")}function ys(b){return!!b&&typeof b=="object"}function ho(b){return typeof b=="symbol"||ys(b)&&zt.call(b)==D}var $c=ue?Le(ue):Va;function vc(b){return b==null?"":lc(b)}function wc(b,C,I){var H=b==null?void 0:el(b,C);return H===void 0?I:H}function kc(b,C){return b!=null&&dc(b,C,Xa)}function Ts(b){return fo(b)?Ua(b):tc(b)}function yc(b){return b}function Tc(b){return vs(b)?be(ws(b)):oc(b)}n.exports=_c})(Lh,Ks);const Vi=Ks;function ir(n,e,t){const s=n.slice();return s[13]=e[t],s}function ar(n,e,t){const s=n.slice();return s[18]=e[t],s}function cr(n,e,t){const s=n.slice();return s[22]=e[t],s[24]=t,s}function ur(n,e,t){const s=n.slice();return s[22]=e[t],s}function Dh(n){let e,t,s={ctx:n,current:null,token:null,hasCatch:!0,pending:Fh,then:zh,catch:Bh,value:26,error:21};return Hs(t=n[0],s),{c(){e=Ee(),s.block.c()},m(o,l){E(o,e,l),s.block.m(o,s.anchor=l),s.mount=()=>e.parentNode,s.anchor=e},p(o,l){n=o,s.ctx=n,l&1&&t!==(t=n[0])&&Hs(t,s)||$i(s,n,l)},d(o){o&&T(e),s.block.d(o),s.token=null,s=null}}}function Ih(n){let e,t,s;return{c(){e=_("button"),e.textContent="Request authors",p(e,"class","input")},m(o,l){E(o,e,l),t||(s=Y(e,"click",n[8]),t=!0)},p:K,d(o){o&&T(e),t=!1,s()}}}function Bh(n){let e,t,s,o=(n[21]instanceof Error?n[21].message:n[21])+"",l;return{c(){e=_("div"),t=F("Loading authors error: "),s=_("strong"),l=F(o),p(s,"class","text-red-600"),p(e,"class","text-red-400")},m(r,i){E(r,e,i),h(e,t),h(e,s),h(s,l)},p(r,i){i&1&&o!==(o=(r[21]instanceof Error?r[21].message:r[21])+"")&&Ve(l,o)},d(r){r&&T(e)}}}function zh(n){let e,t,s,o,l,r,i,a,c,u,f=n[26],d=[];for(let g=0;g<f.length;g+=1)d[g]=fr(ur(n,f,g));return{c(){e=_("div"),t=_("select"),s=_("option"),o=F("Select author");for(let g=0;g<d.length;g+=1)d[g].c();l=x(),r=_("button"),i=F("Get quotes"),s.__value=void 0,s.value=s.__value,s.hidden=!0,p(t,"class","input"),n[1]===void 0&&$t(()=>n[9].call(t)),p(r,"class","input"),r.disabled=a=n[1]==null},m(g,m){E(g,e,m),h(e,t),h(t,s),h(s,o);for(let $=0;$<d.length;$+=1)d[$].m(t,null);Pt(t,n[1]),h(e,l),h(e,r),h(r,i),c||(u=[Y(t,"change",n[9]),Y(r,"click",n[10])],c=!0)},p(g,m){if(m&5){f=g[26];let $;for($=0;$<f.length;$+=1){const A=ur(g,f,$);d[$]?d[$].p(A,m):(d[$]=fr(A),d[$].c(),d[$].m(t,null))}for(;$<d.length;$+=1)d[$].d(1);d.length=f.length}m&3&&Pt(t,g[1]),m&3&&a!==(a=g[1]==null)&&(r.disabled=a)},d(g){g&&T(e),He(d,g),c=!1,Ae(u)}}}function fr(n){let e,t=n[22].name+"",s,o,l=n[22].quoteCount+"",r,i,a;return{c(){e=_("option"),s=F(t),o=F(": "),r=F(l),e.__value=i=n[22],e.value=e.__value,e.disabled=a=n[2].includes(n[22])},m(c,u){E(c,e,u),h(e,s),h(e,o),h(e,r)},p(c,u){u&1&&t!==(t=c[22].name+"")&&Ve(s,t),u&1&&l!==(l=c[22].quoteCount+"")&&Ve(r,l),u&1&&i!==(i=c[22])&&(e.__value=i,e.value=e.__value),u&5&&a!==(a=c[2].includes(c[22]))&&(e.disabled=a)},d(c){c&&T(e)}}}function Fh(n){let e,t,s;return{c(){e=_("div"),t=x(),s=_("div"),s.textContent="Loading authors...",p(e,"class","text-blue-800 "+n[5]+" svelte-af0fhv"),p(s,"class","text-blue-800")},m(o,l){E(o,e,l),E(o,t,l),E(o,s,l)},p:K,d(o){o&&T(e),o&&T(t),o&&T(s)}}}function dr(n){let e,t,s,o;function l(i){n[12](i)}let r={$$slots:{default:[Wh]},$$scope:{ctx:n}};return n[4]!==void 0&&(r.selected=n[4]),t=new ps({props:r}),Xe.push(()=>Lt(t,"selected",l)),{c(){e=_("div"),L(t.$$.fragment),p(e,"class","my-4 py-4 border-y border-gray-300 flex items-start h-[25rem] overflow-hidden")},m(i,a){E(i,e,a),P(t,e,null),o=!0},p(i,a){const c={};a&536870924&&(c.$$scope={dirty:a,ctx:i}),!s&&a&16&&(s=!0,c.selected=i[4],Yt(()=>s=!1)),t.$set(c)},i(i){o||(v(t.$$.fragment,i),o=!0)},o(i){y(t.$$.fragment,i),o=!1},d(i){i&&T(e),O(t)}}}function Hh(n){let e,t,s,o,l=n[22].name+"",r,i,a,c,u=n[22].quoteCount+"",f,d,g,m;function $(){return n[11](n[24])}return{c(){e=_("div"),t=_("button"),t.textContent="×",s=x(),o=_("span"),r=F(l),a=x(),c=_("span"),f=F(u),d=x(),p(t,"class","text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"),p(o,"class","grow text-left overflow-hidden text-ellipsis whitespace-nowrap"),p(o,"title",i=n[22].name),p(c,"class","text-xs px-1 rounded-md bg-gray-600 text-white font-bold"),p(e,"class","tab svelte-af0fhv"),ie(e,"active",n[16])},m(A,S){E(A,e,S),h(e,t),h(e,s),h(e,o),h(o,r),h(e,a),h(e,c),h(c,f),E(A,d,S),g||(m=[Y(t,"click",$),Y(e,"click",function(){De(n[25])&&n[25].apply(this,arguments)})],g=!0)},p(A,S){n=A,S&4&&l!==(l=n[22].name+"")&&Ve(r,l),S&4&&i!==(i=n[22].name)&&p(o,"title",i),S&4&&u!==(u=n[22].quoteCount+"")&&Ve(f,u),S&65536&&ie(e,"active",n[16])},d(A){A&&T(e),A&&T(d),g=!1,Ae(m)}}}function pr(n){let e,t;return e=new Zt({props:{$$slots:{default:[Hh,({active:s,activate:o})=>({16:s,25:o}),({active:s,activate:o})=>(s?65536:0)|(o?33554432:0)]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&570490884&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function jh(n){let e,t,s,o,l,r,i=(n[21]instanceof Error?n[21].message:n[21])+"",a;return{c(){e=_("div"),t=_("div"),s=_("div"),s.textContent="Loading quotes error",o=x(),l=_("div"),r=_("strong"),a=F(i),p(s,"class","text-red-400"),p(r,"class","text-red-600"),p(t,"class","flex flex-col items-center"),p(e,"class","h-full flex items-center justify-center")},m(c,u){E(c,e,u),h(e,t),h(t,s),h(t,o),h(t,l),h(l,r),h(r,a)},p(c,u){u&8&&i!==(i=(c[21]instanceof Error?c[21].message:c[21])+"")&&Ve(a,i)},d(c){c&&T(e)}}}function Uh(n){let e,t=n[17],s=[];for(let o=0;o<t.length;o+=1)s[o]=hr(ar(n,t,o));return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=Ee()},m(o,l){for(let r=0;r<s.length;r+=1)s[r].m(o,l);E(o,e,l)},p(o,l){if(l&8){t=o[17];let r;for(r=0;r<t.length;r+=1){const i=ar(o,t,r);s[r]?s[r].p(i,l):(s[r]=hr(i),s[r].c(),s[r].m(e.parentNode,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=t.length}},d(o){He(s,o),o&&T(e)}}}function hr(n){let e,t,s,o,l,r=n[18].en+"",i,a,c,u=n[18].author+"",f,d;return{c(){e=_("div"),t=_("span"),t.textContent="“",s=x(),o=_("div"),l=_("div"),i=F(r),a=x(),c=_("div"),f=F(u),d=x(),p(t,"class","text-gray-200 text-7xl font-bold leading-[75%] mr-2"),p(l,"class","mb-3 leading-6"),p(c,"class","font-semibold italic text-right"),p(o,"class","grow"),p(e,"class","mb-2 last:mb-0 flex items-start")},m(g,m){E(g,e,m),h(e,t),h(e,s),h(e,o),h(o,l),h(l,i),h(o,a),h(o,c),h(c,f),h(e,d)},p(g,m){m&8&&r!==(r=g[18].en+"")&&Ve(i,r),m&8&&u!==(u=g[18].author+"")&&Ve(f,u)},d(g){g&&T(e)}}}function qh(n){let e,t,s,o,l;return{c(){e=_("div"),t=_("div"),s=_("div"),o=x(),l=_("div"),l.textContent="Loading quotes...",p(s,"class","text-blue-800 w-12 h-12 "+n[5]+" svelte-af0fhv"),p(l,"class","text-blue-800"),p(t,"class","flex flex-col items-center"),p(e,"class","h-full flex items-center justify-center")},m(r,i){E(r,e,i),h(e,t),h(t,s),h(t,o),h(t,l)},p:K,d(r){r&&T(e)}}}function Kh(n){let e,t,s,o={ctx:n,current:null,token:null,hasCatch:!0,pending:qh,then:Uh,catch:jh,value:17,error:21};return Hs(t=n[13],o),{c(){e=_("div"),o.block.c(),s=x(),p(e,"class","px-4 overflow-y-auto h-full panel svelte-af0fhv"),ie(e,"active",n[16])},m(l,r){E(l,e,r),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,E(l,s,r)},p(l,r){n=l,o.ctx=n,r&8&&t!==(t=n[13])&&Hs(t,o)||$i(o,n,r),r&65536&&ie(e,"active",n[16])},d(l){l&&T(e),o.block.d(),o.token=null,o=null,l&&T(s)}}}function gr(n){let e,t;return e=new Xt({props:{$$slots:{default:[Kh,({active:s})=>({16:s}),({active:s})=>s?65536:0]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},p(s,o){const l={};o&536936456&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Wh(n){let e,t,s,o,l=n[2],r=[];for(let f=0;f<l.length;f+=1)r[f]=pr(cr(n,l,f));const i=f=>y(r[f],1,1,()=>{r[f]=null});let a=n[3],c=[];for(let f=0;f<a.length;f+=1)c[f]=gr(ir(n,a,f));const u=f=>y(c[f],1,1,()=>{c[f]=null});return{c(){e=_("div");for(let f=0;f<r.length;f+=1)r[f].c();t=x(),s=_("div");for(let f=0;f<c.length;f+=1)c[f].c();p(e,"class","basis-[24ch] overflow-x-hidden shrink-0 h-full overflow-y-auto"),p(s,"class","grow h-full")},m(f,d){E(f,e,d);for(let g=0;g<r.length;g+=1)r[g].m(e,null);E(f,t,d),E(f,s,d);for(let g=0;g<c.length;g+=1)c[g].m(s,null);o=!0},p(f,d){if(d&33620100){l=f[2];let g;for(g=0;g<l.length;g+=1){const m=cr(f,l,g);r[g]?(r[g].p(m,d),v(r[g],1)):(r[g]=pr(m),r[g].c(),v(r[g],1),r[g].m(e,null))}for(me(),g=l.length;g<r.length;g+=1)i(g);_e()}if(d&65576){a=f[3];let g;for(g=0;g<a.length;g+=1){const m=ir(f,a,g);c[g]?(c[g].p(m,d),v(c[g],1)):(c[g]=gr(m),c[g].c(),v(c[g],1),c[g].m(s,null))}for(me(),g=a.length;g<c.length;g+=1)u(g);_e()}},i(f){if(!o){for(let d=0;d<l.length;d+=1)v(r[d]);for(let d=0;d<a.length;d+=1)v(c[d]);o=!0}},o(f){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)y(r[d]);c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)y(c[d]);o=!1},d(f){f&&T(e),He(r,f),f&&T(t),f&&T(s),He(c,f)}}}function Gh(n){let e,t,s,o,l,r;function i(f,d){return f[0]==null?Ih:Dh}let a=i(n),c=a(n),u=n[2].length&&dr(n);return{c(){e=_("section"),t=_("div"),t.innerHTML=`Example of vertical tab layout. <small class="line-through">Thanks to the authors of <a target="_blank" href="https://github.com/skolakoda" rel="noreferrer">Škola koda</a>
      for the useful and convenient
      <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">API</a></small>. Now the API doesn&#39;t work. JSON from the project
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">Škola koda</a> is used`,s=x(),o=_("div"),c.c(),l=x(),u&&u.c(),p(t,"class","mb-4 text-center leading-5"),p(o,"class","flex items-center justify-center gap-2"),p(e,"class","prose max-w-none my-4")},m(f,d){E(f,e,d),h(e,t),h(e,s),h(e,o),c.m(o,null),h(e,l),u&&u.m(e,null),r=!0},p(f,[d]){a===(a=i(f))&&c?c.p(f,d):(c.d(1),c=a(f),c&&(c.c(),c.m(o,null))),f[2].length?u?(u.p(f,d),d&4&&v(u,1)):(u=dr(f),u.c(),v(u,1),u.m(e,null)):u&&(me(),y(u,1,1,()=>{u=null}),_e())},i(f){r||(v(u),r=!0)},o(f){y(u),r=!1},d(f){f&&T(e),c.d(),u&&u.d()}}}const Zh="skolacoda-quotes.json",ea=100;function ta(){return ht(this,null,function*(){const n=yield fetch(Zh);if(n.status>=400){const e=yield n.text();throw new Error(`${n.status}: ${e||n.statusText}`)}return yield new Promise(e=>setTimeout(e,ea)),n.json()})}function Xh(){return ht(this,null,function*(){const n=Object.entries(Vi(yield ta(),"author")).reduce((e,[t,s])=>(e.push({name:t,quoteCount:s.length}),e),[]).sort((e,t)=>e.name.localeCompare(t.name));return yield new Promise(e=>setTimeout(e,ea)),n})}function Qh(n){return ht(this,null,function*(){var e;return(e=Vi(yield ta(),"author")[n])!=null?e:[]})}function Yh(n,e,t){const s="w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin";let o,l,r=[],i=[],a=NaN;function c(A){return A!=null&&!r.includes(A)?(t(2,r=[A,...r]),t(3,i=[Qh(A.name),...i]),t(4,a=0),!0):!1}function u(A){A>=0&&A<r.length&&(t(2,r=[...r.slice(0,A),...r.slice(A+1)]),t(3,i=[...i.slice(0,A),...i.slice(A+1)]))}const f=()=>{t(0,o=Xh())};function d(){l=ns(this),t(1,l),t(0,o)}const g=()=>c(l)?t(1,l=void 0):void 0,m=A=>u(A);function $(A){a=A,t(4,a)}return[o,l,r,i,a,s,c,u,f,d,g,m,$]}let Jh=class extends Z{constructor(e){super(),G(this,e,Yh,Gh,W,{})}};function Vh(n){let e,t,s,o,l;return t=new Jh({}),o=new dt({props:{code:`<script lang="ts" context="module">
  import groupBy from 'lodash.groupby';
  const url = 'skolacoda-quotes.json';

  interface Author {
    name: string;
    quoteCount: number;
  }

  interface Quote {
    id: string;
    author: string;
    en: string;
  }

  const fetchDelay = 100;

  async function fetchQuotesJson(): Promise<Quote[]> {
    const rs = await fetch(url);
    if (rs.status >= 400) {
      const text = await rs.text();
      throw new Error(\`\${rs.status}: \${text || rs.statusText}\`);
    }
    await new Promise((resolve) => setTimeout(resolve, fetchDelay));
    return rs.json();
  }

  async function fetchAuthors(): Promise<Author[]> {
    const authors = Object.entries(groupBy(await fetchQuotesJson(), 'author'))
      .reduce((a, [name, quotes]) => {
        a.push({ name, quoteCount: quotes.length });
        return a;
      }, [] as Author[])
      .sort((a, b) => a.name.localeCompare(b.name));
    await new Promise((resolve) => setTimeout(resolve, fetchDelay));
    return authors;
  }

  async function fetchQuotes(author: string): Promise<Quote[]> {
    return groupBy(await fetchQuotesJson(), 'author')[author] ?? [];
  }
<\/script>

<script lang="ts">
  import { Tab, Panel, Tabs } from '@apsc/tabs';

  const spinnerClass = \`w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin\`;

  let authorList: Promise<Author[]> | undefined = undefined;
  let authorInSelect: Author | undefined = undefined;
  let authorTabs: Author[] = [];
  let quotes: Promise<Quote[]>[] = [];
  let selected = NaN;

  function addAuthorTab(author: Author | undefined): boolean {
    if (author != null && !authorTabs.includes(author)) {
      authorTabs = [author, ...authorTabs];
      quotes = [fetchQuotes(author.name), ...quotes];
      selected = 0;
      return true;
    }
    return false;
  }

  function rmAuthorTab(index: number) {
    if (index >= 0 && index < authorTabs.length) {
      authorTabs = [...authorTabs.slice(0, index), ...authorTabs.slice(index + 1)];
      quotes = [...quotes.slice(0, index), ...quotes.slice(index + 1)];
    }
  }
<\/script>

<section class="prose max-w-none my-4">
  <div class="mb-4 text-center leading-5">
    Example of vertical tab layout. <small class="line-through"
      >Thanks to the authors of <a
        target="_blank"
        href="https://github.com/skolakoda"
        rel="noreferrer">Škola koda</a
      >
      for the useful and convenient
      <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer"
        >API</a
      ></small
    >. Now the API doesn't work. JSON from the project
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer"
      >Škola koda</a
    > is used
  </div>

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
    <div class="my-4 py-4 border-y border-gray-300 flex items-start h-[25rem] overflow-hidden">
      <Tabs bind:selected>
        <div class="basis-[24ch] overflow-x-hidden shrink-0 h-full overflow-y-auto">
          {#each authorTabs as a, i}
            <Tab let:active let:activate>
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div class="tab" class:active on:click={activate}>
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
              </div>
            </Tab>
          {/each}
        </div>
        <div class="grow h-full">
          {#each quotes as p}
            <Panel let:active>
              <div class="px-4 overflow-y-auto h-full panel" class:active>
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
                      <span class="text-gray-200 text-7xl font-bold leading-[75%] mr-2"
                        >&ldquo;</span
                      >
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
              </div>
            </Panel>
          {/each}
        </div>
      </Tabs>
    </div>
  {/if}
</section>

<style lang="postcss">
  .tab {
    @apply flex items-center gap-2 pl-1 pr-2 py-1 rounded-md cursor-pointer;
  }
  .tab.active {
    @apply bg-gray-200 cursor-default;
  }
  .panel:not(.active) {
    display: none;
  }
</style>
`}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),L(o.$$.fragment),p(e,"class","prose max-w-none my-4")},m(r,i){E(r,e,i),P(t,e,null),h(e,s),P(o,e,null),l=!0},p:K,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(o.$$.fragment,r),l=!1},d(r){r&&T(e),O(t),O(o)}}}let eg=class extends Z{constructor(e){super(),G(this,e,null,Vh,W,{})}};function tg(n){let e;return{c(){e=F("API")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function ng(n){let e;return{c(){e=F("Base example")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function sg(n){let e;return{c(){e=F("Nested example")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function og(n){let e;return{c(){e=F("Quotes example")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function lg(n){let e,t,s,o,l,r,i,a;return e=new Ge({props:{$$slots:{default:[tg]},$$scope:{ctx:n}}}),s=new Ge({props:{$$slots:{default:[ng]},$$scope:{ctx:n}}}),l=new Ge({props:{$$slots:{default:[sg]},$$scope:{ctx:n}}}),i=new Ge({props:{$$slots:{default:[og]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment),r=x(),L(i.$$.fragment)},m(c,u){P(e,c,u),E(c,t,u),P(s,c,u),E(c,o,u),P(l,c,u),E(c,r,u),P(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),l.$set(g);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||(v(e.$$.fragment,c),v(s.$$.fragment,c),v(l.$$.fragment,c),v(i.$$.fragment,c),a=!0)},o(c){y(e.$$.fragment,c),y(s.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!1},d(c){O(e,c),c&&T(t),O(s,c),c&&T(o),O(l,c),c&&T(r),O(i,c)}}}function rg(n){let e,t;return e=new ah({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function ig(n){let e,t;return e=new Th({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function ag(n){let e,t;return e=new Oh({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function cg(n){let e,t;return e=new eg({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function ug(n){let e,t,s,o,l,r,i,a,c,u;return e=new wn({props:{$$slots:{default:[lg]},$$scope:{ctx:n}}}),s=new Ze({props:{$$slots:{default:[rg]},$$scope:{ctx:n}}}),l=new Ze({props:{$$slots:{default:[ig]},$$scope:{ctx:n}}}),i=new Ze({props:{$$slots:{default:[ag]},$$scope:{ctx:n}}}),c=new Ze({props:{$$slots:{default:[cg]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment),r=x(),L(i.$$.fragment),a=x(),L(c.$$.fragment)},m(f,d){P(e,f,d),E(f,t,d),P(s,f,d),E(f,o,d),P(l,f,d),E(f,r,d),P(i,f,d),E(f,a,d),P(c,f,d),u=!0},p(f,d){const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),e.$set(g);const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),s.$set(m);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),l.$set($);const A={};d&1&&(A.$$scope={dirty:d,ctx:f}),i.$set(A);const S={};d&1&&(S.$$scope={dirty:d,ctx:f}),c.$set(S)},i(f){u||(v(e.$$.fragment,f),v(s.$$.fragment,f),v(l.$$.fragment,f),v(i.$$.fragment,f),v(c.$$.fragment,f),u=!0)},o(f){y(e.$$.fragment,f),y(s.$$.fragment,f),y(l.$$.fragment,f),y(i.$$.fragment,f),y(c.$$.fragment,f),u=!1},d(f){O(e,f),f&&T(t),O(s,f),f&&T(o),O(l,f),f&&T(r),O(i,f),f&&T(a),O(c,f)}}}function fg(n){let e,t,s,o,l,r,i,a,c,u,f,d,g;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[ug]},$$scope:{ctx:n}}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),o=_("h1"),o.textContent="A component set and context class for organizing the Tabs interface",l=x(),r=_("a"),i=_("img"),c=x(),u=_("ul"),u.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>with context to control tab switching</li>`,f=x(),L(d.$$.fragment),p(o,"class","text-2xl"),p(i,"class","max-w-[4em]"),ct(i.src,a=gt)||p(i,"src",a),p(i,"alt","NPM logo"),p(r,"class","float-right"),p(r,"href","https://www.npmjs.com/package/@apsc/tabs"),p(r,"target","_blank"),p(r,"rel","noreferrer"),p(u,"class","leading-6 mb-8"),p(e,"class","prose max-w-none my-4")},m(m,$){E(m,e,$),P(t,e,null),h(e,s),h(e,o),h(e,l),h(e,r),h(r,i),h(e,c),h(e,u),h(e,f),P(d,e,null),g=!0},p(m,[$]){const A={};$&1&&(A.$$scope={dirty:$,ctx:m}),d.$set(A)},i(m){g||(v(t.$$.fragment,m),v(d.$$.fragment,m),g=!0)},o(m){y(t.$$.fragment,m),y(d.$$.fragment,m),g=!1},d(m){m&&T(e),O(t),O(d)}}}function dg(n){return Tn(document.title.replace(/(•).*$/,"$1 Tabs")),[]}let pg=class extends Z{constructor(e){super(),G(this,e,dg,fg,W,{})}};const hg=`<div class="component__source">Source <code>Notifications.svelte</code></div>
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
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop name</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
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
<td class="exports__description">Store of notifications</td></tr></table>
`;function gg(n){let e,t,s;return t=new Sn({props:{source:hg}}),{c(){e=_("section"),L(t.$$.fragment),p(e,"class","documentation")},m(o,l){E(o,e,l),P(t,e,null),s=!0},p:K,i(o){s||(v(t.$$.fragment,o),s=!0)},o(o){y(t.$$.fragment,o),s=!1},d(o){o&&T(e),O(t)}}}class mg extends Z{constructor(e){super(),G(this,e,null,gg,W,{})}}const _g=`.c-notifications {
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
`,bg=`.c-notifications {
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
`;function $g(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}function na(n){const e=n-1;return e*e*e+1}function vg(n,{delay:e=0,duration:t=400,easing:s=$g,amount:o=5,opacity:l=0}={}){const r=getComputedStyle(n),i=+r.opacity,a=r.filter==="none"?"":r.filter,c=i*(1-l);return{delay:e,duration:t,easing:s,css:(u,f)=>`opacity: ${i-c*f}; filter: ${a} blur(${f*o}px);`}}function wg(n,{delay:e=0,duration:t=400,easing:s=ri}={}){const o=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:l=>`opacity: ${l*o}`}}function Un(n,{delay:e=0,duration:t=400,easing:s=na}={}){const o=getComputedStyle(n),l=+o.opacity,r=parseFloat(o.height),i=parseFloat(o.paddingTop),a=parseFloat(o.paddingBottom),c=parseFloat(o.marginTop),u=parseFloat(o.marginBottom),f=parseFloat(o.borderTopWidth),d=parseFloat(o.borderBottomWidth);return{delay:e,duration:t,easing:s,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*l};height: ${g*r}px;padding-top: ${g*i}px;padding-bottom: ${g*a}px;margin-top: ${g*c}px;margin-bottom: ${g*u}px;border-top-width: ${g*f}px;border-bottom-width: ${g*d}px;`}}function kg(n,{delay:e=0,duration:t=400,easing:s=na,start:o=0,opacity:l=0}={}){const r=getComputedStyle(n),i=+r.opacity,a=r.transform==="none"?"":r.transform,c=1-o,u=i*(1-l);return{delay:e,duration:t,easing:s,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${i-u*d}
		`}}function mr(n,e,t){const s=n.slice();return s[8]=e[t],s}const yg=n=>({notification:n&16}),_r=n=>({notification:n[8]});function Tg(n){let e,t,s=(n[8].message||"No message")+"",o,l,r,i,a,c,u,f;function d(){return n[7](n[8])}return{c(){e=_("div"),t=_("span"),o=x(),l=_("span"),r=x(),p(t,"class","c-notifications__item__message"),p(l,"role","button"),p(l,"aria-label","Close notification"),p(l,"class","c-notifications__item__close"),p(e,"class",i="c-notifications__item"+(n[8].type?" "+n[8].type:""))},m(g,m){E(g,e,m),h(e,t),t.innerHTML=s,h(e,o),h(e,l),h(e,r),c=!0,u||(f=Y(l,"click",d),u=!0)},p(g,m){n=g,(!c||m&16)&&s!==(s=(n[8].message||"No message")+"")&&(t.innerHTML=s),(!c||m&16&&i!==(i="c-notifications__item"+(n[8].type?" "+n[8].type:"")))&&p(e,"class",i)},i(g){c||($t(()=>{a||(a=ln(e,n[2],n[3],!0)),a.run(1)}),c=!0)},o(g){a||(a=ln(e,n[2],n[3],!1)),a.run(0),c=!1},d(g){g&&T(e),g&&a&&a.end(),u=!1,f()}}}function br(n,e){let t,s;const o=e[6].default,l=Ce(o,e,e[5],_r),r=l||Tg(e);return{key:n,first:null,c(){t=Ee(),r&&r.c(),this.first=t},m(i,a){E(i,t,a),r&&r.m(i,a),s=!0},p(i,a){e=i,l?l.p&&(!s||a&48)&&Me(l,o,e,e[5],s?Ne(o,e[5],a,yg):Re(e[5]),_r):r&&r.p&&(!s||a&24)&&r.p(e,s?a:-1)},i(i){s||(v(r,i),s=!0)},o(i){y(r,i),s=!1},d(i){i&&T(t),r&&r.d(i)}}}function Eg(n){let e,t=[],s=new Map,o,l,r,i=n[4];const a=c=>c[8].id;for(let c=0;c<i.length;c+=1){let u=mr(n,i,c),f=a(u);s.set(f,t[c]=br(f,u))}return{c(){e=_("div");for(let c=0;c<t.length;c+=1)t[c].c();p(e,"class",o="c-notifications"+(n[0]?" "+n[0]:"")),p(e,"style",l=n[1]||void 0)},m(c,u){E(c,e,u);for(let f=0;f<t.length;f+=1)t[f].m(e,null);r=!0},p(c,[u]){u&56&&(i=c[4],me(),t=Wc(t,u,a,1,c,i,s,e,Kc,br,null,mr),_e()),(!r||u&1&&o!==(o="c-notifications"+(c[0]?" "+c[0]:"")))&&p(e,"class",o),(!r||u&2&&l!==(l=c[1]||void 0))&&p(e,"style",l)},i(c){if(!r){for(let u=0;u<i.length;u+=1)v(t[u]);r=!0}},o(c){for(let u=0;u<t.length;u+=1)y(t[u]);r=!1},d(c){c&&T(e);for(let u=0;u<t.length;u+=1)t[u].d()}}}let Is=!1;const Ws=function(){const{subscribe:n,set:e,update:t}=fs([]);return{subscribe:n,clear(){e([])},push(s){if(!Is)throw new Error("No Notification component instance");const o=et({id:Symbol("Notification")},s);return t(l=>[...l,o]),s.timeout&&s.timeout>0&&setTimeout(()=>this.pop(o.id),s.timeout),o.id},pop(s){t(o=>{const l=o.findIndex(r=>r.id===s);return l>=0&&o.splice(l,1),o})}}}();function Sg(n,e,t){let s,o=K;Qt(n,Ws,d=>t(4,s=d)),n.$$.on_destroy.push(()=>o());let{$$slots:l={},$$scope:r}=e,{class:i=""}=e,{style:a=""}=e,{transitionFn:c=Un}=e,{transitionParams:u={}}=e;bn(()=>{if(Is)throw new Error("The Notifications component already has an instance");Is=!0}),Xs(()=>Is=!1);const f=d=>Ws.pop(d.id);return n.$$set=d=>{"class"in d&&t(0,i=d.class),"style"in d&&t(1,a=d.style),"transitionFn"in d&&t(2,c=d.transitionFn),"transitionParams"in d&&t(3,u=d.transitionParams),"$$scope"in d&&t(5,r=d.$$scope)},[i,a,c,u,s,r,l,f]}class xg extends Z{constructor(e){super(),G(this,e,Sg,Eg,W,{class:0,style:1,transitionFn:2,transitionParams:3})}}const wo=[{author:"Edsger W. Dijkstra",en:"Computer Science is no more about computers than astronomy is about telescopes."},{author:"Edsger W. Dijkstra",en:"Simplicity is prerequisite for reliability."},{author:"Edsger W. Dijkstra",en:"The computing scientist’s main challenge is not to get confused by the complexities of his own making."},{author:"Edsger W. Dijkstra",en:"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},{author:"Edsger W. Dijkstra",en:"A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent“."},{author:"Tony Hoare",en:"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},{author:"Jeff Hammerbacher",en:"The best minds of my generation are thinking about how to make people click ads."},{author:"Edsger W. Dijkstra",en:"The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities."},{author:"Edsger W. Dijkstra",en:'How do we convince people that in programming simplicity and clarity — in short: what mathematicians call "elegance" — are not a dispensable luxury, but a crucial matter that decides between success and failure?'},{author:"Fred Brooks",en:"Adding manpower to a late software project makes it later."},{author:"Michael Stal",en:"Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person."},{author:"Fred Brooks",en:"Nine women can't make a baby in one month."},{author:"Jeff Sickel",en:"Deleted code is debugged code."},{author:"Ken Thompson",en:"When in doubt, use brute force."},{author:"Fred Brooks",en:"When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned."},{author:"Fred Brooks",en:"If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two."},{author:"Fred Brooks",en:"Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect."},{author:"Fred Brooks",en:"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures."},{author:"Fred Brooks",en:'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.'},{author:"Donald Knuth",en:"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%."},{author:"Ken Thompson",en:"One of my most productive days was throwing away 1,000 lines of code."},{author:"Grace Hopper",en:"One accurate measurement is worth more than a thousand expert opinions."},{author:"Fred Brooks",en:"What one programmer can do in one month, two programmers can do in two months."},{author:"Rick Osborne",en:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},{author:"John Ousterhout",en:"A program that produces incorrect results twice as fast is infinitely slower."},{author:"Poul Anderson",en:"I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated."},{author:"Robert C. Martin",en:"Cleaning code does NOT take time. NOT cleaning code does take time."},{author:"David Gelernter",en:"Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity."},{author:"Edward V. Berard",en:"Walking on water and developing software from a specification are easy if both are frozen."},{author:"Brian Kernighan",en:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},{author:"Brian Kernighan",en:"Controlling complexity is the essence of computer programming."},{author:"Chris Wenham",en:"Debugging time increases as a square of the program’s size."},{author:"Seymour Cray",en:"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."},{author:"Ron Jeffries",en:"Code never lies, comments sometimes do."},{author:"Laurence J. Peter",en:"Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them."},{author:"Poul-Henning Kamp",en:'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.'},{author:"Albert Einstein",en:"I have no special talent. I am only passionately curious."},{author:"Robert C. Martin",en:"The proper use of comments is to compensate for our failure to express ourself in code."},{author:"Rob Pike",en:"When there is no type hierarchy you don’t have to manage the type hierarchy."},{author:"Steve Jobs",en:"Everybody should learn to program a computer, because it teaches you how to think."},{author:"Chris Sacca",en:"Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for."},{author:"Bill Gates",en:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},{author:"William Wulf",en:"More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity."},{author:"Edsger W. Dijkstra",en:"Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence."},{author:"Albert Einstein",en:"Imagination is more important than knowledge."}];function $r(n,e,t){const s=n.slice();return s[20]=e[t],s}function vr(n,e,t){const s=n.slice();return s[23]=e[t],s}function wr(n){let e,t,s,o=n[23]+"",l,r,i;return{c(){e=_("label"),t=_("input"),s=x(),l=F(o),p(t,"type","radio"),p(t,"name","styles"),t.__value=n[23],t.value=t.__value,n[12][2].push(t),p(e,"class","mr-2 last:mr-0")},m(a,c){E(a,e,c),h(e,t),t.checked=t.__value===n[3],h(e,s),h(e,l),r||(i=Y(t,"change",n[17]),r=!0)},p(a,c){c&8&&(t.checked=t.__value===a[3])},d(a){a&&T(e),n[12][2].splice(n[12][2].indexOf(t),1),r=!1,i()}}}function kr(n){let e,t=n[20]+"",s;return{c(){e=_("option"),s=F(t),e.__value=n[20],e.value=e.__value},m(o,l){E(o,e,l),h(e,s)},p:K,d(o){o&&T(e)}}}function Ag(n){let e,t=`<style type="text/css" data-text="test">${n[7][n[3]]}</style>`,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k,M,R,N,w,D,B,q,ee,te,ce,ye,$e,Oe,z,U,J,le,j,pe,ae,we,V,Se,he,qe,xe,Je,bt,je,nt,Ke,it,vt,Fe,ue,wt;l=new xg({props:{style:"display: flex; "+n[0]+n[1]}});let Pe=Object.keys(n[7]),be=[];for(let ne=0;ne<Pe.length;ne+=1)be[ne]=wr(vr(n,Pe,ne));let st=n[8],Le=[];for(let ne=0;ne<st.length;ne+=1)Le[ne]=kr($r(n,st,ne));return{c(){e=new gi(!1),s=Ee(),o=x(),L(l.$$.fragment),r=x(),i=_("div"),i.innerHTML='This example uses quotes from the <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">API</a>  <a target="_blank" rel="noreferrer" href="https://github.com/skolakoda">Škola koda</a>',a=x(),c=_("form"),u=_("div"),f=_("div"),d=_("div"),d.textContent="Side",g=x(),m=_("label"),$=_("input"),A=F(" left"),S=x(),k=_("label"),M=_("input"),R=F(" right"),N=x(),w=_("div"),D=_("div"),D.textContent="Direction",B=x(),q=_("label"),ee=_("input"),te=F(" from top"),ce=x(),ye=_("label"),$e=_("input"),Oe=F(" from bottom"),z=x(),U=_("label"),J=_("div"),J.textContent="Timeout",le=x(),j=_("input"),pe=x(),ae=_("div"),we=_("div"),we.textContent="Style",V=x();for(let ne=0;ne<be.length;ne+=1)be[ne].c();Se=x(),he=_("label"),qe=_("textarea"),xe=x(),Je=_("div"),bt=_("label"),je=_("input"),nt=x(),Ke=_("select");for(let ne=0;ne<Le.length;ne+=1)Le[ne].c();it=x(),vt=_("div"),vt.innerHTML=`<input class="input block w-40" type="submit" value="Notify"/> 
    <input class="input block w-40" type="reset" value="Clear"/>`,e.a=s,p(i,"class","mb-4 text-center"),p(d,"class","text-sm uppercase opacity-70"),p($,"type","radio"),p($,"name","hpos"),$.__value="left: 0; right: unset;",$.value=$.__value,n[12][0].push($),p(M,"type","radio"),p(M,"name","hpos"),M.__value="right: 0;",M.value=M.__value,n[12][0].push(M),p(D,"class","text-sm uppercase opacity-70"),p(ee,"type","radio"),p(ee,"name","vpos"),ee.__value="top: 0; bottom: unset; flex-direction: column-reverse;",ee.value=ee.__value,n[12][1].push(ee),p($e,"type","radio"),p($e,"name","vpos"),$e.__value="top: unset; bottom: 0; flex-direction: column;",$e.value=$e.__value,n[12][1].push($e),p(J,"class","text-sm uppercase opacity-70"),p(j,"class","input w-[9ch]"),p(j,"min","0"),p(j,"step","100"),p(j,"type","number"),p(we,"class","text-sm uppercase opacity-70"),p(u,"class","flex gap-4 items-center justify-evenly mb-4"),p(qe,"name","quote"),qe.value=n[6],p(qe,"rows","3"),p(qe,"class","input w-full"),p(qe,"placeholder","Quote"),p(he,"class","block w-full mb-4"),p(je,"name","author"),je.value=n[5],p(je,"class","input w-full"),p(je,"type","text"),p(je,"placeholder","Author"),p(bt,"class","block w-full"),p(Ke,"class","input block w-full"),n[4]===void 0&&$t(()=>n[18].call(Ke)),p(Je,"class","mb-4 flex gap-4"),p(vt,"class","mx-auto w-fit flex gap-4"),p(c,"class","not-prose w-full")},m(ne,Te){e.m(t,document.head),h(document.head,s),E(ne,o,Te),P(l,ne,Te),E(ne,r,Te),E(ne,i,Te),E(ne,a,Te),E(ne,c,Te),h(c,u),h(u,f),h(f,d),h(f,g),h(f,m),h(m,$),$.checked=$.__value===n[0],h(m,A),h(f,S),h(f,k),h(k,M),M.checked=M.__value===n[0],h(k,R),h(u,N),h(u,w),h(w,D),h(w,B),h(w,q),h(q,ee),ee.checked=ee.__value===n[1],h(q,te),h(w,ce),h(w,ye),h(ye,$e),$e.checked=$e.__value===n[1],h(ye,Oe),h(u,z),h(u,U),h(U,J),h(U,le),h(U,j),ut(j,n[2]),h(u,pe),h(u,ae),h(ae,we),h(ae,V);for(let X=0;X<be.length;X+=1)be[X].m(ae,null);h(c,Se),h(c,he),h(he,qe),h(c,xe),h(c,Je),h(Je,bt),h(bt,je),h(Je,nt),h(Je,Ke);for(let X=0;X<Le.length;X+=1)Le[X].m(Ke,null);Pt(Ke,n[4]),h(c,it),h(c,vt),Fe=!0,ue||(wt=[Y($,"change",n[11]),Y(M,"change",n[13]),Y(ee,"change",n[14]),Y($e,"change",n[15]),Y(j,"input",n[16]),Y(Ke,"change",n[18]),Y(c,"submit",ts(n[9])),Y(c,"reset",ts(n[19]))],ue=!0)},p(ne,[Te]){(!Fe||Te&8)&&t!==(t=`<style type="text/css" data-text="test">${ne[7][ne[3]]}</style>`)&&e.p(t);const X={};if(Te&3&&(X.style="display: flex; "+ne[0]+ne[1]),l.$set(X),Te&1&&($.checked=$.__value===ne[0]),Te&1&&(M.checked=M.__value===ne[0]),Te&2&&(ee.checked=ee.__value===ne[1]),Te&2&&($e.checked=$e.__value===ne[1]),Te&4&&_t(j.value)!==ne[2]&&ut(j,ne[2]),Te&136){Pe=Object.keys(ne[7]);let Q;for(Q=0;Q<Pe.length;Q+=1){const re=vr(ne,Pe,Q);be[Q]?be[Q].p(re,Te):(be[Q]=wr(re),be[Q].c(),be[Q].m(ae,null))}for(;Q<be.length;Q+=1)be[Q].d(1);be.length=Pe.length}if((!Fe||Te&64)&&(qe.value=ne[6]),(!Fe||Te&32&&je.value!==ne[5])&&(je.value=ne[5]),Te&256){st=ne[8];let Q;for(Q=0;Q<st.length;Q+=1){const re=$r(ne,st,Q);Le[Q]?Le[Q].p(re,Te):(Le[Q]=kr(re),Le[Q].c(),Le[Q].m(Ke,null))}for(;Q<Le.length;Q+=1)Le[Q].d(1);Le.length=st.length}Te&272&&Pt(Ke,ne[4])},i(ne){Fe||(v(l.$$.fragment,ne),Fe=!0)},o(ne){y(l.$$.fragment,ne),Fe=!1},d(ne){T(s),ne&&e.d(),ne&&T(o),O(l,ne),ne&&T(r),ne&&T(i),ne&&T(a),ne&&T(c),n[12][0].splice(n[12][0].indexOf($),1),n[12][0].splice(n[12][0].indexOf(M),1),n[12][1].splice(n[12][1].indexOf(ee),1),n[12][1].splice(n[12][1].indexOf($e),1),He(be,ne),He(Le,ne),ue=!1,Ae(wt)}}}function Cg(n,e,t){let s,o,l=0,r="left: 0; right: unset;",i="top: 0; bottom: unset; flex-direction: column-reverse;",a=1e4,c={simple:_g,bootstrap:bg},u=Object.keys(c)[0];const f=["primary","secondary","success","danger","warning","info","light","dark"];let d=f[0];function g({currentTarget:D}){if(D instanceof HTMLFormElement){const B=D.elements.quote.value,q=D.author.value;Ws.push({message:[B?`<div>${B}</div>`:"",q?`<div class="italic text-right">${q}</div>`:""].filter(te=>!!te).join(""),type:d,timeout:a}),t(10,l=l+1>=wo.length?0:l+1);let ee=f.indexOf(d)+1;ee<0||ee>=f.length?t(4,d=f[0]):t(4,d=f[ee])}}const m=[[],[],[]];function $(){r=this.__value,t(0,r)}function A(){r=this.__value,t(0,r)}function S(){i=this.__value,t(1,i)}function k(){i=this.__value,t(1,i)}function M(){a=_t(this.value),t(2,a)}function R(){u=this.__value,t(3,u)}function N(){d=ns(this),t(4,d),t(8,f)}const w=()=>Ws.clear();return n.$$.update=()=>{n.$$.dirty&1024&&t(6,s=wo[l].en),n.$$.dirty&1024&&t(5,o=wo[l].author)},[r,i,a,u,d,o,s,c,f,g,l,$,m,A,S,k,M,R,N,w]}let Ng=class extends Z{constructor(e){super(),G(this,e,Cg,Ag,W,{})}};function Mg(n){let e,t,s,o,l;return t=new Ng({}),o=new dt({props:{code:`<script lang="ts">
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
<Notifications style={'display: flex; ' + hPos + vPos} />
<div class="mb-4 text-center">
  This example uses quotes from the <a
    target="_blank"
    href="https://github.com/skolakoda/programming-quotes-api"
    rel="noreferrer">API</a
  > <a target="_blank" rel="noreferrer" href="https://github.com/skolakoda">Škola koda</a>
</div>
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
</form>`}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),L(o.$$.fragment),p(e,"class","prose max-w-none my-4")},m(r,i){E(r,e,i),P(t,e,null),h(e,s),P(o,e,null),l=!0},p:K,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(o.$$.fragment,r),l=!1},d(r){r&&T(e),O(t),O(o)}}}let Rg=class extends Z{constructor(e){super(),G(this,e,null,Mg,W,{})}};function Pg(n){let e;return{c(){e=F("API")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function Og(n){let e;return{c(){e=F("Base example")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function Lg(n){let e,t,s,o;return e=new Ge({props:{$$slots:{default:[Pg]},$$scope:{ctx:n}}}),s=new Ge({props:{$$slots:{default:[Og]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment)},m(l,r){P(e,l,r),E(l,t,r),P(s,l,r),o=!0},p(l,r){const i={};r&1&&(i.$$scope={dirty:r,ctx:l}),e.$set(i);const a={};r&1&&(a.$$scope={dirty:r,ctx:l}),s.$set(a)},i(l){o||(v(e.$$.fragment,l),v(s.$$.fragment,l),o=!0)},o(l){y(e.$$.fragment,l),y(s.$$.fragment,l),o=!1},d(l){O(e,l),l&&T(t),O(s,l)}}}function Dg(n){let e,t;return e=new mg({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Ig(n){let e,t;return e=new Rg({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Bg(n){let e,t,s,o,l,r;return e=new wn({props:{$$slots:{default:[Lg]},$$scope:{ctx:n}}}),s=new Ze({props:{$$slots:{default:[Dg]},$$scope:{ctx:n}}}),l=new Ze({props:{$$slots:{default:[Ig]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment)},m(i,a){P(e,i,a),E(i,t,a),P(s,i,a),E(i,o,a),P(l,i,a),r=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),s.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(v(e.$$.fragment,i),v(s.$$.fragment,i),v(l.$$.fragment,i),r=!0)},o(i){y(e.$$.fragment,i),y(s.$$.fragment,i),y(l.$$.fragment,i),r=!1},d(i){O(e,i),i&&T(t),O(s,i),i&&T(o),O(l,i)}}}function zg(n){let e,t,s,o,l,r,i,a,c,u,f,d,g;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[Bg]},$$scope:{ctx:n}}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),o=_("h1"),o.textContent="Component for notifications globally for the entire application",l=x(),r=_("a"),i=_("img"),c=x(),u=_("ul"),u.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>one instance for the entire application</li> 
    <li>with custom notification transition</li> 
    <li>custom notification element components</li> 
    <li>with configurable timeout for each notification</li>`,f=x(),L(d.$$.fragment),p(o,"class","text-2xl max-w-lg"),p(i,"class","max-w-[4em]"),ct(i.src,a=gt)||p(i,"src",a),p(i,"alt","NPM logo"),p(r,"class","float-right"),p(r,"href","https://www.npmjs.com/package/@apsc/glob-notify"),p(r,"target","_blank"),p(r,"rel","noreferrer"),p(u,"class","leading-6 mb-8"),p(e,"class","prose max-w-none my-4")},m(m,$){E(m,e,$),P(t,e,null),h(e,s),h(e,o),h(e,l),h(e,r),h(r,i),h(e,c),h(e,u),h(e,f),P(d,e,null),g=!0},p(m,[$]){const A={};$&1&&(A.$$scope={dirty:$,ctx:m}),d.$set(A)},i(m){g||(v(t.$$.fragment,m),v(d.$$.fragment,m),g=!0)},o(m){y(t.$$.fragment,m),y(d.$$.fragment,m),g=!1},d(m){m&&T(e),O(t),O(d)}}}function Fg(n){return Tn(document.title.replace(/(•).*$/,"$1 GlobNotify")),[]}let Hg=class extends Z{constructor(e){super(),G(this,e,Fg,zg,W,{})}};const jg=`<div class="component__source">Source <code>ColorPicker.svelte</code></div>
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
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop name</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
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
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop name</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
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
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop name</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
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
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop name</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
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
<h2 class="component-tbl-header">Props</h2><table><tr><th>Prop name</th><th>Type</th><th>Default value</th><th>Description</th></tr><tr><td class="prop__name">class</td>
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
</td></tr></table>`;function Ug(n){let e,t,s;return t=new Sn({props:{source:jg}}),{c(){e=_("section"),L(t.$$.fragment),p(e,"class","documentation")},m(o,l){E(o,e,l),P(t,e,null),s=!0},p:K,i(o){s||(v(t.$$.fragment,o),s=!0)},o(o){y(t.$$.fragment,o),s=!1},d(o){o&&T(e),O(t)}}}let qg=class extends Z{constructor(e){super(),G(this,e,null,Ug,W,{})}};function sa(n){var t;const e=(t=/^#([0-9a-f]{3,8})$/gi.exec(n))==null?void 0:t[1];if(e!=null){if(e.length===3||e.length===4)return e.split(/([0-9a-f])/gi).filter(Boolean);if(e.length===6||e.length===8)return e.split(/([0-9a-f]{2})/gi).filter(Boolean)}}function yr(n){try{return sa(n)!=null}catch(e){return!1}}function Ct(n,e,t){return Math.max(Math.min(n,t),e)}function Kg(n){return Gg(Vs(n))}function Vs(n){var s;const e=(s=sa(n))==null?void 0:s.map(o=>o.length===1?o+o:o);if(e==null)throw new Error(`Invalid color ${n}`);const t={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return e[3]&&(t.a=Math.round(parseInt(e[3],16)/255*1e3)/1e3),t}function Wg(n){const e=n.s/100,t=n.l/100,s=(1-Math.abs(2*t-1))*e,o=s*(1-Math.abs(n.h/60%2-1)),l=t-s/2;let r=0,i=0,a=0;0<=n.h&&n.h<60?(r=s,i=o,a=0):60<=n.h&&n.h<120?(r=o,i=s,a=0):120<=n.h&&n.h<180?(r=0,i=s,a=o):180<=n.h&&n.h<240?(r=0,i=o,a=s):240<=n.h&&n.h<300?(r=o,i=0,a=s):300<=n.h&&n.h<360&&(r=s,i=0,a=o),r=Math.round((r+l)*255),i=Math.round((i+l)*255),a=Math.round((a+l)*255);const c={r,g:i,b:a};return n.a!=null&&(c.a=n.a),c}function Gg(n){const e=n.r/255,t=n.g/255,s=n.b/255,o=Math.max(e,t,s),l=Math.min(e,t,s),r=o-l;let i=0,a=0,c=0;r===0?i=0:o===e?i=(t-s)/r%6:o===t?i=(s-e)/r+2:i=(e-t)/r+4,i=Math.round(i*60),i<0&&(i+=360),a=(o+l)/2,c=r===0?0:r/(1-Math.abs(2*a-1));const u={h:i,s:Math.round(c*100),l:Math.round(a*100)};return n.a!=null&&(u.a=n.a),u}function Zg(n){return Go(Wg(n))}function Go(n){const e="#"+[n.r,n.g,n.b].map(s=>Ct(s,0,255).toString(16).padStart(2,"0")).join(""),t=n.a!=null?Math.round(n.a*255):255;return t<255?e+Math.max(t,0).toString(16).padStart(2,"0"):e}function Xg(n){return Qg(Vs(n))}function Qg(n){const e=Ct(n.r,0,255)/255,t=Ct(n.g,0,255)/255,s=Ct(n.b,0,255)/255,o=Math.max(e,t,s),l=Math.min(e,t,s),r=o-l,i=o;let a=0,c=0;r&&(o===e&&(a=(t-s)/r),o===t&&(a=2+(s-e)/r),o===s&&(a=4+(e-t)/r),o&&(c=r/o)),a=a*60;const u=a<0?a+360:a,f=c*100,d=i*100;return n.a!=null&&n.a>=0?{h:u,s:f,v:d,a:Ct(n.a,0,1)}:{h:u,s:f,v:d}}function ko(n){return Go(Yg(n))}function Yg(n){const e=n.s/100,t=n.v/100;let s=e*t;const o=n.h/60;let l=s*(1-Math.abs(o%2-1));const r=t-s;s=s+r,l=l+r;const i=Math.floor(o)%6,a=[s,l,r,r,l,s][i],c=[l,s,s,l,r,r][i],u=[r,r,l,s,s,l][i],f=Math.round(a*255),d=Math.round(c*255),g=Math.round(u*255);return n.a!=null?{r:f,g:d,b:g,a:n.a}:{r:f,g:d,b:g}}function Tr(n){var o;typeof n=="string"&&(n=Vs(n));const e=[.2126,.7152,.0722],t=[n.r,n.g,n.b].reduce((l,r,i)=>(r/=255,r<.03928?r/=12.92:(r=(r+.055)/1.055,r*=r),l+r*e[i]),0),s=1-((o=n.a)!=null?o:1);return t+(1-t)*s}function Jg(n){let e,t,s,o;return{c(){e=_("div"),t=_("div"),p(t,"class","c-color-picker__tone--marker"),tt(t,"left",n[0]+"%"),tt(t,"top",100-n[1]+"%"),p(e,"class","c-color-picker__tone"),p(e,"tabindex","0")},m(l,r){E(l,e,r),h(e,t),s||(o=Ye(n[2].call(null,e)),s=!0)},p(l,[r]){r&1&&tt(t,"left",l[0]+"%"),r&2&&tt(t,"top",100-l[1]+"%")},i:K,o:K,d(l){l&&T(e),s=!1,o()}}}function Vg(n,e,t){let{s=0}=e,{v:o=0}=e;function l(r){function i(g){const{pageX:m,pageY:$}=g instanceof MouseEvent?g:g.changedTouches[0],{left:A,top:S,width:k,height:M}=r.getBoundingClientRect();t(0,s=Ct((m-A-window.scrollX)/k,0,1)*100),t(1,o=100-Ct(($-S-window.scrollY)/M,0,1)*100)}function a(g){i(g)}function c(){document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",c),document.removeEventListener("touchend",c),setTimeout(()=>{document.removeEventListener("click",f,{capture:!0})},0)}function u(g){r.focus(),document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",c),document.addEventListener("touchend",c),document.addEventListener("click",f,{capture:!0}),i(g),g.preventDefault()}function f(g){g.preventDefault(),g.stopPropagation()}function d(g){let $=100-o,A=s;switch(g.code){case"ArrowUp":$=Ct($-1,0,100);break;case"ArrowDown":$=Ct($+1,0,100),g.preventDefault();break;case"ArrowLeft":A=Ct(A-1,0,100),g.preventDefault();break;case"ArrowRight":A=Ct(A+1,0,100),g.preventDefault();break}A!==s&&t(0,s=A),100-$!==o&&t(1,o=100-$)}return r.addEventListener("mousedown",u),r.addEventListener("touchstart",u),r.addEventListener("keydown",d),{destroy(){c(),r.removeEventListener("mousedown",u),r.removeEventListener("touchstart",u),r.removeEventListener("keydown",d)}}}return n.$$set=r=>{"s"in r&&t(0,s=r.s),"v"in r&&t(1,o=r.v)},[s,o,l]}class em extends Z{constructor(e){super(),G(this,e,Vg,Jg,W,{s:0,v:1})}}var tm="Expected a function",Er=0/0,nm="[object Symbol]",sm=/^\s+|\s+$/g,om=/^[-+]0x[0-9a-f]+$/i,lm=/^0b[01]+$/i,rm=/^0o[0-7]+$/i,im=parseInt,am=typeof nn=="object"&&nn&&nn.Object===Object&&nn,cm=typeof self=="object"&&self&&self.Object===Object&&self,um=am||cm||Function("return this")(),fm=Object.prototype,dm=fm.toString,pm=Math.max,hm=Math.min,yo=function(){return um.Date.now()};function gm(n,e,t){var s,o,l,r,i,a,c=0,u=!1,f=!1,d=!0;if(typeof n!="function")throw new TypeError(tm);e=Sr(e)||0,xo(t)&&(u=!!t.leading,f="maxWait"in t,l=f?pm(Sr(t.maxWait)||0,e):l,d="trailing"in t?!!t.trailing:d);function g(w){var D=s,B=o;return s=o=void 0,c=w,r=n.apply(B,D),r}function m(w){return c=w,i=setTimeout(S,e),u?g(w):r}function $(w){var D=w-a,B=w-c,q=e-D;return f?hm(q,l-B):q}function A(w){var D=w-a,B=w-c;return a===void 0||D>=e||D<0||f&&B>=l}function S(){var w=yo();if(A(w))return k(w);i=setTimeout(S,$(w))}function k(w){return i=void 0,d&&s?g(w):(s=o=void 0,r)}function M(){i!==void 0&&clearTimeout(i),c=0,s=a=o=i=void 0}function R(){return i===void 0?r:k(yo())}function N(){var w=yo(),D=A(w);if(s=arguments,o=this,a=w,D){if(i===void 0)return m(a);if(f)return i=setTimeout(S,e),g(a)}return i===void 0&&(i=setTimeout(S,e)),r}return N.cancel=M,N.flush=R,N}function xo(n){var e=typeof n;return!!n&&(e=="object"||e=="function")}function mm(n){return!!n&&typeof n=="object"}function _m(n){return typeof n=="symbol"||mm(n)&&dm.call(n)==nm}function Sr(n){if(typeof n=="number")return n;if(_m(n))return Er;if(xo(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=xo(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=n.replace(sm,"");var t=lm.test(n);return t||rm.test(n)?im(n.slice(2),t?2:8):om.test(n)?Er:+n}var bm=gm;function $m(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k;function M(w){n[9](w)}function R(w){n[10](w)}let N={};return n[2].s!==void 0&&(N.s=n[2].s),n[2].v!==void 0&&(N.v=n[2].v),s=new em({props:N}),Xe.push(()=>Lt(s,"s",M)),Xe.push(()=>Lt(s,"v",R)),{c(){e=_("div"),t=_("div"),L(s.$$.fragment),r=x(),i=_("div"),a=x(),c=_("div"),u=_("input"),f=x(),d=_("div"),g=_("input"),p(i,"class","c-color-picker__sample"),p(u,"type","range"),p(u,"min","0"),p(u,"max","359"),p(u,"step","1"),p(c,"class","c-color-picker__hue"),p(g,"type","range"),p(g,"min","0"),p(g,"max","1"),p(g,"step",1/255),p(d,"class","c-color-picker__alpha"),p(t,"class","c-color-picker__body"),p(e,"class",m="c-color-picker"+(n[0]?" "+n[0]:"")),p(e,"style",$="--cp-tone: "+n[4]+"; --cp-color-opacity: "+n[5]+"; --cp-color: "+n[3]+"; "+n[1])},m(w,D){E(w,e,D),h(e,t),P(s,t,null),h(t,r),h(t,i),h(t,a),h(t,c),h(c,u),ut(u,n[2].h),h(t,f),h(t,d),h(d,g),ut(g,n[2].a),A=!0,S||(k=[Y(u,"change",n[11]),Y(u,"input",n[11]),Y(g,"change",n[12]),Y(g,"input",n[12])],S=!0)},p(w,[D]){const B={};!o&&D&4&&(o=!0,B.s=w[2].s,Yt(()=>o=!1)),!l&&D&4&&(l=!0,B.v=w[2].v,Yt(()=>l=!1)),s.$set(B),D&4&&ut(u,w[2].h),D&4&&ut(g,w[2].a),(!A||D&1&&m!==(m="c-color-picker"+(w[0]?" "+w[0]:"")))&&p(e,"class",m),(!A||D&58&&$!==($="--cp-tone: "+w[4]+"; --cp-color-opacity: "+w[5]+"; --cp-color: "+w[3]+"; "+w[1]))&&p(e,"style",$)},i(w){A||(v(s.$$.fragment,w),A=!0)},o(w){y(s.$$.fragment,w),A=!1},d(w){w&&T(e),O(s),S=!1,Ae(k)}}}function vm(n,e,t){let{class:s=""}=e,{style:o=""}=e,{color:l="#000"}=e,{debounce:r=0}=e,i;function a(S){let{h:k,s:M,v:R,a:N=1}=Xg(S);i!=null&&k===0&&M===0&&(k=i.h),t(2,i={h:k,s:M,v:R,a:N})}let c,u,f,d;function g(S){n.$$.not_equal(i.s,S)&&(i.s=S,t(2,i))}function m(S){n.$$.not_equal(i.v,S)&&(i.v=S,t(2,i))}function $(){i.h=_t(this.value),t(2,i)}function A(){i.a=_t(this.value),t(2,i)}return n.$$set=S=>{"class"in S&&t(0,s=S.class),"style"in S&&t(1,o=S.style),"color"in S&&t(6,l=S.color),"debounce"in S&&t(7,r=S.debounce)},n.$$.update=()=>{n.$$.dirty&128&&t(8,c=bm(S=>{t(6,l=S)},r)),n.$$.dirty&64&&a(l),n.$$.dirty&268&&(S=>{t(3,u=ko(S)),t(4,f=ko({h:S.h,s:100,v:100})),t(5,d=ko({h:S.h,s:S.s,v:S.v})),c(u)})(i)},[s,o,i,u,f,d,l,r,c,g,m,$,A]}class oa extends Z{constructor(e){super(),G(this,e,vm,$m,W,{class:0,style:1,color:6,debounce:7})}}function wm(n){let e,t,s,o;return{c(){e=_("input"),p(e,"class",t="c-coloredit__input--text"+(n[0]?" "+n[0]:"")),p(e,"type","text"),e.value=n[1]},m(l,r){E(l,e,r),n[6](e),s||(o=Y(e,"input",n[7]),s=!0)},p(l,[r]){r&1&&t!==(t="c-coloredit__input--text"+(l[0]?" "+l[0]:""))&&p(e,"class",t),r&2&&e.value!==l[1]&&(e.value=l[1])},i:K,o:K,d(l){l&&T(e),n[6](null),s=!1,o()}}}function km(n,e,t){let{class:s=""}=e,{color:o="#000"}=e,l;function r(f){yr(f)&&t(4,o=f)}let i;function a(){i==null||i.focus()}function c(f){Xe[f?"unshift":"push"](()=>{i=f,t(2,i)})}const u=f=>r(f.currentTarget.value);return n.$$set=f=>{"class"in f&&t(0,s=f.class),"color"in f&&t(4,o=f.color)},n.$$.update=()=>{n.$$.dirty&16&&t(1,l=yr(o)?o:"")},[s,l,i,r,o,a,c,u]}class ym extends Z{constructor(e){super(),G(this,e,km,wm,W,{class:0,color:4,focus:5})}get focus(){return this.$$.ctx[5]}}function Tm(n){let e,t,s,o,l,r,i,a,c,u,f,d,g;return{c(){e=_("input"),s=x(),o=_("input"),r=x(),i=_("input"),c=x(),u=_("input"),p(e,"class",t="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),p(e,"type","number"),p(e,"min","0"),p(e,"max","255"),p(e,"step","1"),e.value=n[1],p(o,"class",l="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),p(o,"type","number"),p(o,"min","0"),p(o,"max","255"),p(o,"step","1"),o.value=n[2],p(i,"class",a="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),p(i,"type","number"),p(i,"min","0"),p(i,"max","255"),p(i,"step","1"),i.value=n[3],p(u,"class",f="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),p(u,"type","number"),p(u,"min","0"),p(u,"max","1"),p(u,"step","0.01"),u.value=n[4]},m(m,$){E(m,e,$),n[8](e),E(m,s,$),E(m,o,$),E(m,r,$),E(m,i,$),E(m,c,$),E(m,u,$),d||(g=[Y(e,"change",n[9]),Y(o,"change",n[10]),Y(i,"change",n[11]),Y(u,"change",n[12])],d=!0)},p(m,[$]){$&1&&t!==(t="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&p(e,"class",t),$&2&&e.value!==m[1]&&(e.value=m[1]),$&1&&l!==(l="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&p(o,"class",l),$&4&&o.value!==m[2]&&(o.value=m[2]),$&1&&a!==(a="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&p(i,"class",a),$&8&&i.value!==m[3]&&(i.value=m[3]),$&1&&f!==(f="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&p(u,"class",f),$&16&&u.value!==m[4]&&(u.value=m[4])},i:K,o:K,d(m){m&&T(e),n[8](null),m&&T(s),m&&T(o),m&&T(r),m&&T(i),m&&T(c),m&&T(u),d=!1,Ae(g)}}}function Em(n,e,t){let{class:s=""}=e,{color:o="#000"}=e,l,r,i,a;function c(k){var M;try{const R=Vs(k);t(1,l=R.r),t(2,r=R.g),t(3,i=R.b),t(4,a=(M=R.a)!=null?M:1)}catch(R){t(1,l=NaN),t(2,r=NaN),t(3,i=NaN),t(4,a=NaN)}}function u(k,M,R,N){[k,R,M,N!=null?N:1].every(w=>Number.isFinite(w))&&t(6,o=Go({r:k,g:M,b:R,a:N}))}let f;function d(){f==null||f.focus()}function g(k){Xe[k?"unshift":"push"](()=>{f=k,t(5,f)})}const m=k=>t(1,l=+k.currentTarget.value),$=k=>t(2,r=+k.currentTarget.value),A=k=>t(3,i=+k.currentTarget.value),S=k=>t(4,a=+k.currentTarget.value);return n.$$set=k=>{"class"in k&&t(0,s=k.class),"color"in k&&t(6,o=k.color)},n.$$.update=()=>{n.$$.dirty&64&&c(o),n.$$.dirty&30&&u(l,r,i,a)},[s,l,r,i,a,f,o,d,g,m,$,A,S]}class Sm extends Z{constructor(e){super(),G(this,e,Em,Tm,W,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function xm(n){let e,t,s,o,l,r,i,a,c,u,f,d,g;return{c(){e=_("input"),s=x(),o=_("input"),r=x(),i=_("input"),c=x(),u=_("input"),p(e,"class",t="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),p(e,"type","number"),p(e,"min","0"),p(e,"max","360"),p(e,"step","1"),e.value=n[1],p(o,"class",l="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),p(o,"type","number"),p(o,"min","0"),p(o,"max","100"),p(o,"step","1"),o.value=n[2],p(i,"class",a="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),p(i,"type","number"),p(i,"min","0"),p(i,"max","100"),p(i,"step","1"),i.value=n[3],p(u,"class",f="c-coloredit__input--number"+(n[0]?" "+n[0]:"")),p(u,"type","number"),p(u,"min","0"),p(u,"max","1"),p(u,"step","0.01"),u.value=n[4]},m(m,$){E(m,e,$),n[8](e),E(m,s,$),E(m,o,$),E(m,r,$),E(m,i,$),E(m,c,$),E(m,u,$),d||(g=[Y(e,"change",n[9]),Y(o,"change",n[10]),Y(i,"change",n[11]),Y(u,"change",n[12])],d=!0)},p(m,[$]){$&1&&t!==(t="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&p(e,"class",t),$&2&&e.value!==m[1]&&(e.value=m[1]),$&1&&l!==(l="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&p(o,"class",l),$&4&&o.value!==m[2]&&(o.value=m[2]),$&1&&a!==(a="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&p(i,"class",a),$&8&&i.value!==m[3]&&(i.value=m[3]),$&1&&f!==(f="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&p(u,"class",f),$&16&&u.value!==m[4]&&(u.value=m[4])},i:K,o:K,d(m){m&&T(e),n[8](null),m&&T(s),m&&T(o),m&&T(r),m&&T(i),m&&T(c),m&&T(u),d=!1,Ae(g)}}}function Am(n,e,t){let{class:s=""}=e,{color:o="#000"}=e,l,r,i,a;function c(k){var M;try{const R=Kg(k);t(1,l=R.h),t(2,r=R.s),t(3,i=R.l),t(4,a=(M=R.a)!=null?M:1)}catch(R){t(1,l=NaN),t(2,r=NaN),t(3,i=NaN),t(4,a=NaN)}}function u(k,M,R,N){[k,M,R,N!=null?N:1].every(w=>Number.isFinite(w))&&t(6,o=Zg({h:k,s:M,l:R,a:N}))}let f;function d(){f==null||f.focus()}function g(k){Xe[k?"unshift":"push"](()=>{f=k,t(5,f)})}const m=k=>t(1,l=+k.currentTarget.value),$=k=>t(2,r=+k.currentTarget.value),A=k=>t(3,i=+k.currentTarget.value),S=k=>t(4,a=+k.currentTarget.value);return n.$$set=k=>{"class"in k&&t(0,s=k.class),"color"in k&&t(6,o=k.color)},n.$$.update=()=>{n.$$.dirty&64&&c(o),n.$$.dirty&30&&u(l,r,i,a)},[s,l,r,i,a,f,o,d,g,m,$,A,S]}class Cm extends Z{constructor(e){super(),G(this,e,Am,xm,W,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function xr(n,e,t){const s=n.slice();return s[11]=e[t],s}function Ar(n){let e,t=n[11]+"",s;return{c(){e=_("span"),s=F(t),p(e,"class","c-color-edit__label")},m(o,l){E(o,e,l),h(e,s)},p(o,l){l&8&&t!==(t=o[11]+"")&&Ve(s,t)},d(o){o&&T(e)}}}function Nm(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$;function A(N){n[6](N)}var S=n[3].component;function k(N){let w={};return N[0]!==void 0&&(w.color=N[0]),{props:w}}S&&(s=ze(S,k(n)),Xe.push(()=>Lt(s,"color",A)),n[7](s));let M=n[3].labels,R=[];for(let N=0;N<M.length;N+=1)R[N]=Ar(xr(n,M,N));return{c(){e=_("div"),t=_("div"),s&&L(s.$$.fragment),l=x();for(let N=0;N<R.length;N+=1)R[N].c();r=x(),i=_("div"),a=_("button"),c=x(),u=_("button"),p(t,"class","c-color-edit__values"),tt(t,"--ce-columns",n[3].labels.length),p(a,"class","c-color-edit__button--up"),p(u,"class","c-color-edit__button--down"),p(i,"class","c-color-edit__buttons"),p(e,"class",f="c-color-edit"+(n[1]?" "+n[1]:"")),p(e,"style",d=n[2]||void 0)},m(N,w){E(N,e,w),h(e,t),s&&P(s,t,null),h(t,l);for(let D=0;D<R.length;D+=1)R[D].m(t,null);h(e,r),h(e,i),h(i,a),h(i,c),h(i,u),g=!0,m||($=[Y(a,"click",n[8]),Y(u,"click",n[9])],m=!0)},p(N,[w]){const D={};if(!o&&w&1&&(o=!0,D.color=N[0],Yt(()=>o=!1)),S!==(S=N[3].component)){if(s){me();const B=s;y(B.$$.fragment,1,0,()=>{O(B,1)}),_e()}S?(s=ze(S,k(N)),Xe.push(()=>Lt(s,"color",A)),N[7](s),L(s.$$.fragment),v(s.$$.fragment,1),P(s,t,l)):s=null}else S&&s.$set(D);if(w&8){M=N[3].labels;let B;for(B=0;B<M.length;B+=1){const q=xr(N,M,B);R[B]?R[B].p(q,w):(R[B]=Ar(q),R[B].c(),R[B].m(t,null))}for(;B<R.length;B+=1)R[B].d(1);R.length=M.length}(!g||w&8)&&tt(t,"--ce-columns",N[3].labels.length),(!g||w&2&&f!==(f="c-color-edit"+(N[1]?" "+N[1]:"")))&&p(e,"class",f),(!g||w&4&&d!==(d=N[2]||void 0))&&p(e,"style",d)},i(N){g||(s&&v(s.$$.fragment,N),g=!0)},o(N){s&&y(s.$$.fragment,N),g=!1},d(N){N&&T(e),n[7](null),s&&O(s),He(R,N),m=!1,Ae($)}}}function Mm(n,e,t){let{class:s=""}=e,{style:o=""}=e,{color:l="#000"}=e;const r=[{component:ym,labels:["Hex"]},{component:Sm,labels:["R","G","B","A"]},{component:Cm,labels:["H","S","L","A"]}];let i=r[0],a;function c(m){return ht(this,null,function*(){let $=r.indexOf(i)+m;$<0?$=r.length-1:$>=r.length&&($=0),t(3,i=r[$]),yield Mo(),a==null||a.focus()})}function u(m){l=m,t(0,l)}function f(m){Xe[m?"unshift":"push"](()=>{a=m,t(4,a)})}const d=()=>c(-1),g=()=>c(1);return n.$$set=m=>{"class"in m&&t(1,s=m.class),"style"in m&&t(2,o=m.style),"color"in m&&t(0,l=m.color)},[l,s,o,i,a,c,u,f,d,g]}class la extends Z{constructor(e){super(),G(this,e,Mm,Nm,W,{class:1,style:2,color:0})}}function Cr(n,e,t){const s=n.slice();return s[6]=e[t],s}function Nr(n){let e,t=n[6]+"",s,o,l;function r(){return n[5](n[6])}return{c(){e=_("button"),s=F(t),p(e,"class","input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"),tt(e,"background-color",n[6]),tt(e,"color",Tr(n[6])>.55?"inherit":"white")},m(i,a){E(i,e,a),h(e,s),o||(l=Y(e,"click",r),o=!0)},p(i,a){n=i,a&2&&t!==(t=n[6]+"")&&Ve(s,t),a&2&&tt(e,"background-color",n[6]),a&2&&tt(e,"color",Tr(n[6])>.55?"inherit":"white")},d(i){i&&T(e),o=!1,l()}}}function Rm(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m=n[1],$=[];for(let A=0;A<m.length;A+=1)$[A]=Nr(Cr(n,m,A));return{c(){e=_("div"),t=_("span"),t.textContent="Set color",s=x(),o=_("a"),o.textContent="randomize alpha",l=x(),r=_("span"),r.textContent="•",i=x(),a=_("a"),a.textContent="reset alpha",u=x(),f=_("div");for(let A=0;A<$.length;A+=1)$[A].c();p(o,"class","text-sm"),p(o,"href","javascript:void(0)"),p(r,"class","text-blue-500"),p(a,"class","text-sm"),p(a,"href","javascript:void(0)"),p(e,"class",c=n[0]||void 0)},m(A,S){E(A,e,S),h(e,t),h(e,s),h(e,o),h(e,l),h(e,r),h(e,i),h(e,a),E(A,u,S),E(A,f,S);for(let k=0;k<$.length;k+=1)$[k].m(f,null);d||(g=[Y(o,"click",n[3]),Y(a,"click",n[4])],d=!0)},p(A,[S]){if(S&1&&c!==(c=A[0]||void 0)&&p(e,"class",c),S&6){m=A[1];let k;for(k=0;k<m.length;k+=1){const M=Cr(A,m,k);$[k]?$[k].p(M,S):($[k]=Nr(M),$[k].c(),$[k].m(f,null))}for(;k<$.length;k+=1)$[k].d(1);$.length=m.length}},i:K,o:K,d(A){A&&T(e),A&&T(u),A&&T(f),He($,A),d=!1,Ae(g)}}}function Pm(n){return ra(n).map(e=>e+Math.floor(Math.random()*255).toString(16).padStart(2,"0"))}function ra(n){return n.map(e=>e.slice(0,7))}function Om(n,e,t){const s=No();let{class:o=""}=e,l=["#001219","#005F73","#0A9396","#94D2BD","#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226","#F72585","#B5179E","#7209B7","#560BAD","#480CA8","#3A0CA3","#3F37C9","#4361EE","#4895EF","#4CC9F0"];const r=()=>t(1,l=Pm(l)),i=()=>t(1,l=ra(l)),a=c=>s("color",c);return n.$$set=c=>{"class"in c&&t(0,o=c.class)},[o,l,s,r,i,a]}class Zo extends Z{constructor(e){super(),G(this,e,Om,Rm,W,{class:0})}}function Lm(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k;function M(N){n[1](N)}let R={class:"basis-1/2 h-[256px] pt-2"};return n[0]!==void 0&&(R.color=n[0]),t=new oa({props:R}),Xe.push(()=>Lt(t,"color",M)),S=new Zo({props:{class:"mt-4"}}),S.$on("color",n[2]),{c(){e=_("div"),L(t.$$.fragment),o=x(),l=_("div"),r=_("div"),i=F("Current color: "),a=_("code"),c=F(n[0]),u=x(),f=_("div"),d=_("div"),g=_("div"),m=x(),$=_("div"),A=x(),L(S.$$.fragment),p(a,"class","uppercase"),p(g,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),p($,"class","absolute left-0 top-0 right-0 bottom-0"),tt($,"background-color",n[0]),p(d,"class","relative h-[1.5em]"),p(f,"class","p-2 border rounded-md"),p(l,"class","basis-1/2"),p(e,"class","flex gap-8")},m(N,w){E(N,e,w),P(t,e,null),h(e,o),h(e,l),h(l,r),h(r,i),h(r,a),h(a,c),h(l,u),h(l,f),h(f,d),h(d,g),h(d,m),h(d,$),h(l,A),P(S,l,null),k=!0},p(N,[w]){const D={};!s&&w&1&&(s=!0,D.color=N[0],Yt(()=>s=!1)),t.$set(D),(!k||w&1)&&Ve(c,N[0]),(!k||w&1)&&tt($,"background-color",N[0])},i(N){k||(v(t.$$.fragment,N),v(S.$$.fragment,N),k=!0)},o(N){y(t.$$.fragment,N),y(S.$$.fragment,N),k=!1},d(N){N&&T(e),O(t),O(S)}}}function Dm(n,e,t){let s="#f70";function o(r){s=r,t(0,s)}return[s,o,({detail:r})=>t(0,s=r)]}let Im=class extends Z{constructor(e){super(),G(this,e,Dm,Lm,W,{})}};function Bm(n){let e,t,s,o,l;return t=new Im({}),o=new dt({props:{code:`<script lang="ts">
  import { ColorPicker } from '@apsc/color';
  import SampleColors from '../SampleColors.svelte';
  import '@apsc/color/color-picker.css';

  let color = '#f70';
<\/script>

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
</div>`}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),L(o.$$.fragment),p(e,"class","prose max-w-none my-4")},m(r,i){E(r,e,i),P(t,e,null),h(e,s),P(o,e,null),l=!0},p:K,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(o.$$.fragment,r),l=!1},d(r){r&&T(e),O(t),O(o)}}}let zm=class extends Z{constructor(e){super(),G(this,e,null,Bm,W,{})}};function Fm(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k,M;function R(w){n[1](w)}let N={class:"w-full border shadow-md rounded-lg p-2"};return n[0]!==void 0&&(N.color=n[0]),s=new la({props:N}),Xe.push(()=>Lt(s,"color",R)),k=new Zo({props:{class:"mt-4"}}),k.$on("color",n[2]),{c(){e=_("div"),t=_("div"),L(s.$$.fragment),l=x(),r=_("div"),i=_("div"),a=F("Current color: "),c=_("code"),u=F(n[0]),f=x(),d=_("div"),g=_("div"),m=_("div"),$=x(),A=_("div"),S=x(),L(k.$$.fragment),p(t,"class","basis-1/2 inline-flex items-center"),p(c,"class","uppercase"),p(m,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),p(A,"class","absolute left-0 top-0 right-0 bottom-0"),tt(A,"background-color",n[0]),p(g,"class","relative h-[1.5em]"),p(d,"class","p-2 border rounded-md"),p(r,"class","basis-1/2"),p(e,"class","flex gap-8")},m(w,D){E(w,e,D),h(e,t),P(s,t,null),h(e,l),h(e,r),h(r,i),h(i,a),h(i,c),h(c,u),h(r,f),h(r,d),h(d,g),h(g,m),h(g,$),h(g,A),h(r,S),P(k,r,null),M=!0},p(w,[D]){const B={};!o&&D&1&&(o=!0,B.color=w[0],Yt(()=>o=!1)),s.$set(B),(!M||D&1)&&Ve(u,w[0]),(!M||D&1)&&tt(A,"background-color",w[0])},i(w){M||(v(s.$$.fragment,w),v(k.$$.fragment,w),M=!0)},o(w){y(s.$$.fragment,w),y(k.$$.fragment,w),M=!1},d(w){w&&T(e),O(s),O(k)}}}function Hm(n,e,t){let s="#f70";function o(r){s=r,t(0,s)}return[s,o,({detail:r})=>t(0,s=r)]}let jm=class extends Z{constructor(e){super(),G(this,e,Hm,Fm,W,{})}};function Um(n){let e,t,s,o,l;return t=new jm({}),o=new dt({props:{code:`<script lang="ts">
  import { ColorEdit } from '@apsc/color';
  import SampleColors from '../SampleColors.svelte';
  import '@apsc/color/color-edit.css';

  let color = '#f70';
<\/script>

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
</style>
`}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),L(o.$$.fragment),p(e,"class","prose max-w-none my-4")},m(r,i){E(r,e,i),P(t,e,null),h(e,s),P(o,e,null),l=!0},p:K,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(o.$$.fragment,r),l=!1},d(r){r&&T(e),O(t),O(o)}}}let qm=class extends Z{constructor(e){super(),G(this,e,null,Um,W,{})}};function Wn(n){return n.split("-")[1]}function Xo(n){return n==="y"?"height":"width"}function gn(n){return n.split("-")[0]}function eo(n){return["top","bottom"].includes(gn(n))?"x":"y"}function Mr(n,e,t){let{reference:s,floating:o}=n;const l=s.x+s.width/2-o.width/2,r=s.y+s.height/2-o.height/2,i=eo(e),a=Xo(i),c=s[a]/2-o[a]/2,u=gn(e),f=i==="x";let d;switch(u){case"top":d={x:l,y:s.y-o.height};break;case"bottom":d={x:l,y:s.y+s.height};break;case"right":d={x:s.x+s.width,y:r};break;case"left":d={x:s.x-o.width,y:r};break;default:d={x:s.x,y:s.y}}switch(Wn(e)){case"start":d[i]-=c*(t&&f?-1:1);break;case"end":d[i]+=c*(t&&f?-1:1);break}return d}const Km=(n,e,t)=>ht(void 0,null,function*(){const{placement:s="bottom",strategy:o="absolute",middleware:l=[],platform:r}=t,i=l.filter(Boolean),a=yield r.isRTL==null?void 0:r.isRTL(e);let c=yield r.getElementRects({reference:n,floating:e,strategy:o}),{x:u,y:f}=Mr(c,s,a),d=s,g={},m=0;for(let $=0;$<i.length;$++){const{name:A,fn:S}=i[$],{x:k,y:M,data:R,reset:N}=yield S({x:u,y:f,initialPlacement:s,placement:d,strategy:o,middlewareData:g,rects:c,platform:r,elements:{reference:n,floating:e}});if(u=k!=null?k:u,f=M!=null?M:f,g=Pn(et({},g),{[A]:et(et({},g[A]),R)}),N&&m<=50){m++,typeof N=="object"&&(N.placement&&(d=N.placement),N.rects&&(c=N.rects===!0?yield r.getElementRects({reference:n,floating:e,strategy:o}):N.rects),{x:u,y:f}=Mr(c,d,a)),$=-1;continue}}return{x:u,y:f,placement:d,strategy:o,middlewareData:g}});function Wm(n){return et({top:0,right:0,bottom:0,left:0},n)}function ia(n){return typeof n!="number"?Wm(n):{top:n,right:n,bottom:n,left:n}}function Jn(n){return Pn(et({},n),{top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height})}function aa(n,e){return ht(this,null,function*(){var t;e===void 0&&(e={});const{x:s,y:o,platform:l,rects:r,elements:i,strategy:a}=n,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:g=0}=e,m=ia(g),A=i[d?f==="floating"?"reference":"floating":f],S=Jn(yield l.getClippingRect({element:(t=yield l.isElement==null?void 0:l.isElement(A))==null||t?A:A.contextElement||(yield l.getDocumentElement==null?void 0:l.getDocumentElement(i.floating)),boundary:c,rootBoundary:u,strategy:a})),k=f==="floating"?Pn(et({},r.floating),{x:s,y:o}):r.reference,M=yield l.getOffsetParent==null?void 0:l.getOffsetParent(i.floating),R=(yield l.isElement==null?void 0:l.isElement(M))?(yield l.getScale==null?void 0:l.getScale(M))||{x:1,y:1}:{x:1,y:1},N=Jn(l.convertOffsetParentRelativeRectToViewportRelativeRect?yield l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:k,offsetParent:M,strategy:a}):k);return{top:(S.top-N.top+m.top)/R.y,bottom:(N.bottom-S.bottom+m.bottom)/R.y,left:(S.left-N.left+m.left)/R.x,right:(N.right-S.right+m.right)/R.x}})}const Gm=Math.min,pn=Math.max;function Zm(n,e,t){return pn(n,Gm(e,t))}const ca=n=>({name:"arrow",options:n,fn(t){return ht(this,null,function*(){const{element:s,padding:o=0}=n||{},{x:l,y:r,placement:i,rects:a,platform:c}=t;if(s==null)return{};const u=ia(o),f={x:l,y:r},d=eo(i),g=Xo(d),m=yield c.getDimensions(s),$=d==="y"?"top":"left",A=d==="y"?"bottom":"right",S=a.reference[g]+a.reference[d]-f[d]-a.floating[g],k=f[d]-a.reference[d],M=yield c.getOffsetParent==null?void 0:c.getOffsetParent(s);let R=M?d==="y"?M.clientHeight||0:M.clientWidth||0:0;R===0&&(R=a.floating[g]);const N=S/2-k/2,w=u[$],D=R-m[g]-u[A],B=R/2-m[g]/2+N,q=Zm(w,B,D),te=Wn(i)!=null&&B!=q&&a.reference[g]/2-(B<w?u[$]:u[A])-m[g]/2<0?B<w?w-B:D-B:0;return{[d]:f[d]-te,data:{[d]:q,centerOffset:B-q}}})}}),Xm={left:"right",right:"left",bottom:"top",top:"bottom"};function Gs(n){return n.replace(/left|right|bottom|top/g,e=>Xm[e])}function Qm(n,e,t){t===void 0&&(t=!1);const s=Wn(n),o=eo(n),l=Xo(o);let r=o==="x"?s===(t?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(r=Gs(r)),{main:r,cross:Gs(r)}}const Ym={start:"end",end:"start"};function Ao(n){return n.replace(/start|end/g,e=>Ym[e])}function Jm(n){const e=Gs(n);return[Ao(n),e,Ao(e)]}function Vm(n,e,t){const s=["left","right"],o=["right","left"],l=["top","bottom"],r=["bottom","top"];switch(n){case"top":case"bottom":return t?e?o:s:e?s:o;case"left":case"right":return e?l:r;default:return[]}}function e_(n,e,t,s){const o=Wn(n);let l=Vm(gn(n),t==="start",s);return o&&(l=l.map(r=>r+"-"+o),e&&(l=l.concat(l.map(Ao)))),l}const to=function(n){return n===void 0&&(n={}),{name:"flip",options:n,fn(t){return ht(this,null,function*(){var s;const{placement:o,middlewareData:l,rects:r,initialPlacement:i,platform:a,elements:c}=t,ce=n,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:$=!0}=ce,A=mo(ce,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),S=gn(o),k=gn(i)===i,M=yield a.isRTL==null?void 0:a.isRTL(c.floating),R=d||(k||!$?[Gs(i)]:Jm(i));!d&&m!=="none"&&R.push(...e_(i,$,m,M));const N=[i,...R],w=yield aa(t,A),D=[];let B=((s=l.flip)==null?void 0:s.overflows)||[];if(u&&D.push(w[S]),f){const{main:ye,cross:$e}=Qm(o,r,M);D.push(w[ye],w[$e])}if(B=[...B,{placement:o,overflows:D}],!D.every(ye=>ye<=0)){var q,ee;const ye=(((q=l.flip)==null?void 0:q.index)||0)+1,$e=N[ye];if($e)return{data:{index:ye,overflows:B},reset:{placement:$e}};let Oe=(ee=B.find(z=>z.overflows[0]<=0))==null?void 0:ee.placement;if(!Oe)switch(g){case"bestFit":{var te;const z=(te=B.map(U=>[U.placement,U.overflows.filter(J=>J>0).reduce((J,le)=>J+le,0)]).sort((U,J)=>U[1]-J[1])[0])==null?void 0:te[0];z&&(Oe=z);break}case"initialPlacement":Oe=i;break}if(o!==Oe)return{reset:{placement:Oe}}}return{}})}}};function t_(n,e){return ht(this,null,function*(){const{placement:t,platform:s,elements:o}=n,l=yield s.isRTL==null?void 0:s.isRTL(o.floating),r=gn(t),i=Wn(t),a=eo(t)==="x",c=["left","top"].includes(r)?-1:1,u=l&&a?-1:1,f=typeof e=="function"?e(n):e;let{mainAxis:d,crossAxis:g,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:et({mainAxis:0,crossAxis:0,alignmentAxis:null},f);return i&&typeof m=="number"&&(g=i==="end"?m*-1:m),a?{x:g*u,y:d*c}:{x:d*c,y:g*u}})}const no=function(n){return n===void 0&&(n=0),{name:"offset",options:n,fn(t){return ht(this,null,function*(){const{x:s,y:o}=t,l=yield t_(t,n);return{x:s+l.x,y:o+l.y,data:l}})}}},ua=function(n){return n===void 0&&(n={}),{name:"size",options:n,fn(t){return ht(this,null,function*(){const{placement:s,rects:o,platform:l,elements:r}=t,R=n,{apply:i=()=>{}}=R,a=mo(R,["apply"]),c=yield aa(t,a),u=gn(s),f=Wn(s);let d,g;u==="top"||u==="bottom"?(d=u,g=f===((yield l.isRTL==null?void 0:l.isRTL(r.floating))?"start":"end")?"left":"right"):(g=u,d=f==="end"?"top":"bottom");const m=pn(c.left,0),$=pn(c.right,0),A=pn(c.top,0),S=pn(c.bottom,0),k={availableHeight:o.floating.height-(["left","right"].includes(s)?2*(A!==0||S!==0?A+S:pn(c.top,c.bottom)):c[d]),availableWidth:o.floating.width-(["top","bottom"].includes(s)?2*(m!==0||$!==0?m+$:pn(c.left,c.right)):c[g])};yield i(et(et({},t),k));const M=yield l.getDimensions(r.floating);return o.floating.width!==M.width||o.floating.height!==M.height?{reset:{rects:!0}}:{}})}}};function St(n){var e;return((e=n.ownerDocument)==null?void 0:e.defaultView)||window}function It(n){return St(n).getComputedStyle(n)}const Rr=Math.min,Vn=Math.max,Zs=Math.round;function fa(n){const e=It(n);let t=parseFloat(e.width),s=parseFloat(e.height);const o=n.offsetWidth,l=n.offsetHeight,r=Zs(t)!==o||Zs(s)!==l;return r&&(t=o,s=l),{width:t,height:s,fallback:r}}function rn(n){return pa(n)?(n.nodeName||"").toLowerCase():""}let Rs;function da(){if(Rs)return Rs;const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?(Rs=n.brands.map(e=>e.brand+"/"+e.version).join(" "),Rs):navigator.userAgent}function Bt(n){return n instanceof St(n).HTMLElement}function Nt(n){return n instanceof St(n).Element}function pa(n){return n instanceof St(n).Node}function Pr(n){if(typeof ShadowRoot=="undefined")return!1;const e=St(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function so(n){const{overflow:e,overflowX:t,overflowY:s,display:o}=It(n);return/auto|scroll|overlay|hidden|clip/.test(e+s+t)&&!["inline","contents"].includes(o)}function n_(n){return["table","td","th"].includes(rn(n))}function Qo(n){const e=/firefox/i.test(da()),t=It(n),s=t.backdropFilter||t.WebkitBackdropFilter;return t.transform!=="none"||t.perspective!=="none"||(s?s!=="none":!1)||e&&t.willChange==="filter"||e&&(t.filter?t.filter!=="none":!1)||["transform","perspective"].some(o=>t.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const l=t.contain;return l!=null?l.includes(o):!1})}function ha(){return!/^((?!chrome|android).)*safari/i.test(da())}function Yo(n){return["html","body","#document"].includes(rn(n))}function ga(n){return Nt(n)?n:n.contextElement}const ma={x:1,y:1};function Hn(n){const e=ga(n);if(!Bt(e))return ma;const t=e.getBoundingClientRect(),{width:s,height:o,fallback:l}=fa(e);let r=(l?Zs(t.width):t.width)/s,i=(l?Zs(t.height):t.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!i||!Number.isFinite(i))&&(i=1),{x:r,y:i}}function mn(n,e,t,s){var o,l;e===void 0&&(e=!1),t===void 0&&(t=!1);const r=n.getBoundingClientRect(),i=ga(n);let a=ma;e&&(s?Nt(s)&&(a=Hn(s)):a=Hn(n));const c=i?St(i):window,u=!ha()&&t;let f=(r.left+(u&&((o=c.visualViewport)==null?void 0:o.offsetLeft)||0))/a.x,d=(r.top+(u&&((l=c.visualViewport)==null?void 0:l.offsetTop)||0))/a.y,g=r.width/a.x,m=r.height/a.y;if(i){const $=St(i),A=s&&Nt(s)?St(s):s;let S=$.frameElement;for(;S&&s&&A!==$;){const k=Hn(S),M=S.getBoundingClientRect(),R=getComputedStyle(S);M.x+=(S.clientLeft+parseFloat(R.paddingLeft))*k.x,M.y+=(S.clientTop+parseFloat(R.paddingTop))*k.y,f*=k.x,d*=k.y,g*=k.x,m*=k.y,f+=M.x,d+=M.y,S=St(S).frameElement}}return{width:g,height:m,top:d,right:f+g,bottom:d+m,left:f,x:f,y:d}}function an(n){return((pa(n)?n.ownerDocument:n.document)||window.document).documentElement}function oo(n){return Nt(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function s_(n){let{rect:e,offsetParent:t,strategy:s}=n;const o=Bt(t),l=an(t);if(t===l)return e;let r={scrollLeft:0,scrollTop:0},i={x:1,y:1};const a={x:0,y:0};if((o||!o&&s!=="fixed")&&((rn(t)!=="body"||so(l))&&(r=oo(t)),Bt(t))){const c=mn(t);i=Hn(t),a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}return{width:e.width*i.x,height:e.height*i.y,x:e.x*i.x-r.scrollLeft*i.x+a.x,y:e.y*i.y-r.scrollTop*i.y+a.y}}function _a(n){return mn(an(n)).left+oo(n).scrollLeft}function o_(n){const e=an(n),t=oo(n),s=n.ownerDocument.body,o=Vn(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),l=Vn(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let r=-t.scrollLeft+_a(n);const i=-t.scrollTop;return It(s).direction==="rtl"&&(r+=Vn(e.clientWidth,s.clientWidth)-o),{width:o,height:l,x:r,y:i}}function cs(n){if(rn(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Pr(n)&&n.host||an(n);return Pr(e)?e.host:e}function ba(n){const e=cs(n);return Yo(e)?e.ownerDocument.body:Bt(e)&&so(e)?e:ba(e)}function es(n,e){var t;e===void 0&&(e=[]);const s=ba(n),o=s===((t=n.ownerDocument)==null?void 0:t.body),l=St(s);return o?e.concat(l,l.visualViewport||[],so(s)?s:[]):e.concat(s,es(s))}function l_(n,e){const t=St(n),s=an(n),o=t.visualViewport;let l=s.clientWidth,r=s.clientHeight,i=0,a=0;if(o){l=o.width,r=o.height;const c=ha();(c||!c&&e==="fixed")&&(i=o.offsetLeft,a=o.offsetTop)}return{width:l,height:r,x:i,y:a}}function r_(n,e){const t=mn(n,!0,e==="fixed"),s=t.top+n.clientTop,o=t.left+n.clientLeft,l=Bt(n)?Hn(n):{x:1,y:1},r=n.clientWidth*l.x,i=n.clientHeight*l.y,a=o*l.x,c=s*l.y;return{width:r,height:i,x:a,y:c}}function Or(n,e,t){return e==="viewport"?Jn(l_(n,t)):Nt(e)?Jn(r_(e,t)):Jn(o_(an(n)))}function i_(n,e){const t=e.get(n);if(t)return t;let s=es(n).filter(i=>Nt(i)&&rn(i)!=="body"),o=null;const l=It(n).position==="fixed";let r=l?cs(n):n;for(;Nt(r)&&!Yo(r);){const i=It(r),a=Qo(r);(l?!a&&!o:!a&&i.position==="static"&&!!o&&["absolute","fixed"].includes(o.position))?s=s.filter(u=>u!==r):o=i,r=cs(r)}return e.set(n,s),s}function a_(n){let{element:e,boundary:t,rootBoundary:s,strategy:o}=n;const r=[...t==="clippingAncestors"?i_(e,this._c):[].concat(t),s],i=r[0],a=r.reduce((c,u)=>{const f=Or(e,u,o);return c.top=Vn(f.top,c.top),c.right=Rr(f.right,c.right),c.bottom=Rr(f.bottom,c.bottom),c.left=Vn(f.left,c.left),c},Or(e,i,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function c_(n){return Bt(n)?fa(n):n.getBoundingClientRect()}function Lr(n){return!Bt(n)||It(n).position==="fixed"?null:n.offsetParent}function u_(n){let e=cs(n);for(;Bt(e)&&!Yo(e);){if(Qo(e))return e;e=cs(e)}return null}function Dr(n){const e=St(n);let t=Lr(n);for(;t&&n_(t)&&It(t).position==="static";)t=Lr(t);return t&&(rn(t)==="html"||rn(t)==="body"&&It(t).position==="static"&&!Qo(t))?e:t||u_(n)||e}function f_(n,e,t){const s=Bt(e),o=an(e),l=mn(n,!0,t==="fixed",e);let r={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(s||!s&&t!=="fixed")if((rn(e)!=="body"||so(o))&&(r=oo(e)),Bt(e)){const a=mn(e,!0);i.x=a.x+e.clientLeft,i.y=a.y+e.clientTop}else o&&(i.x=_a(o));return{x:l.left+r.scrollLeft-i.x,y:l.top+r.scrollTop-i.y,width:l.width,height:l.height}}const d_={getClippingRect:a_,convertOffsetParentRelativeRectToViewportRelativeRect:s_,isElement:Nt,getDimensions:c_,getOffsetParent:Dr,getDocumentElement:an,getScale:Hn,getElementRects(n){return ht(this,null,function*(){let{reference:e,floating:t,strategy:s}=n;const o=this.getOffsetParent||Dr,l=this.getDimensions;return{reference:f_(e,yield o(t),s),floating:et({x:0,y:0},yield l(t))}})},getClientRects:n=>Array.from(n.getClientRects()),isRTL:n=>It(n).direction==="rtl"};function p_(n,e,t,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:l=!0,elementResize:r=!0,animationFrame:i=!1}=s,a=o&&!i,c=a||l?[...Nt(n)?es(n):n.contextElement?es(n.contextElement):[],...es(e)]:[];c.forEach(m=>{a&&m.addEventListener("scroll",t,{passive:!0}),l&&m.addEventListener("resize",t)});let u=null;if(r){let m=!0;u=new ResizeObserver(()=>{m||t(),m=!1}),Nt(n)&&!i&&u.observe(n),!Nt(n)&&n.contextElement&&!i&&u.observe(n.contextElement),u.observe(e)}let f,d=i?mn(n):null;i&&g();function g(){const m=mn(n);d&&(m.x!==d.x||m.y!==d.y||m.width!==d.width||m.height!==d.height)&&t(),d=m,f=requestAnimationFrame(g)}return t(),()=>{var m;c.forEach($=>{a&&$.removeEventListener("scroll",t),l&&$.removeEventListener("resize",t)}),(m=u)==null||m.disconnect(),u=null,i&&cancelAnimationFrame(f)}}const h_=(n,e,t)=>{const s=new Map,o=et({platform:d_},t),l=Pn(et({},o.platform),{_c:s});return Km(n,e,Pn(et({},o),{platform:l}))};function lo(n){const e={enable:!1,options:void 0,cleanup:null},t={reference:null,floating:null,options:void 0};s(n);function s(c){c===!0?(e.enable=!0,o()):c===!1?(l(),e.enable=!1):(o(),e.enable=!0,e.options=c)}function o(){l(),t.reference&&t.floating&&e.enable&&(e.cleanup=p_(t.reference,t.floating,r,e.options))}function l(){e.cleanup!=null&&(e.cleanup(),e.cleanup=null)}function r(){return ht(this,null,function*(){if(t.reference&&t.floating){const{reference:c,floating:u,options:f}=t,d=yield h_(c,u,f);Object.assign(u.style,{position:d.strategy,left:`${d.x}px`,top:`${d.y}px`}),f!=null&&f.callback&&f.callback(d,{reference:c,floating:u})}})}function i(c){return t.reference=c,e.enable?o():r(),{destroy(){l(),t.reference=null}}}function a(c,u){return t.floating=c,t.options=u,e.enable?o():r(),{update(f){l(),t.options=f,e.enable?o():r()},destroy(){l(),t.floating=null,t.options=void 0}}}return[i,a,s]}function us(n,e){let t,s;[t,s]=e!=null?e:[];function o(r){t&&n.contains(r.target)&&t(r)}function l(r){s&&!n.contains(r.relatedTarget)&&s(r)}return n.addEventListener("focusin",o),n.addEventListener("focusout",l),{update(r){[t,s]=r!=null?r:[]},destroy(){n.removeEventListener("focusout",l),n.removeEventListener("focusin",o)}}}function Ir(n){let e,t,s,o,l,r,i,a,c,u,f,d;function g(S){n[5](S)}let m={class:"h-48 p-3",style:"--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"};n[0]!==void 0&&(m.color=n[0]),t=new oa({props:m}),Xe.push(()=>Lt(t,"color",g));function $(S){n[6](S)}let A={class:"p-3 text-sm"};return n[0]!==void 0&&(A.color=n[0]),i=new la({props:A}),Xe.push(()=>Lt(i,"color",$)),{c(){e=_("div"),L(t.$$.fragment),o=x(),l=_("div"),r=x(),L(i.$$.fragment),p(l,"class","border-t"),p(e,"class","absolute w-[240px] border rounded-lg bg-white shadow-lg")},m(S,k){E(S,e,k),P(t,e,null),h(e,o),h(e,l),h(e,r),P(i,e,null),u=!0,f||(d=Ye(n[3].call(null,e,{placement:"bottom-start",middleware:[to(),no(8)]})),f=!0)},p(S,k){const M={};!s&&k&1&&(s=!0,M.color=S[0],Yt(()=>s=!1)),t.$set(M);const R={};!a&&k&1&&(a=!0,R.color=S[0],Yt(()=>a=!1)),i.$set(R)},i(S){u||(v(t.$$.fragment,S),v(i.$$.fragment,S),S&&$t(()=>{c||(c=ln(e,Un,{},!0)),c.run(1)}),u=!0)},o(S){y(t.$$.fragment,S),y(i.$$.fragment,S),S&&(c||(c=ln(e,Un,{},!1)),c.run(0)),u=!1},d(S){S&&T(e),O(t),O(i),S&&c&&c.end(),f=!1,d()}}}function g_(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k,M,R,N,w,D,B=n[1]&&Ir(n);return R=new Zo({props:{class:"mt-4"}}),R.$on("color",n[8]),{c(){e=_("div"),t=_("div"),s=_("div"),s.textContent="Click this button to pick a color",o=x(),l=_("div"),r=_("button"),i=_("span"),a=x(),B&&B.c(),u=x(),f=_("div"),d=_("div"),g=F("Current color: "),m=_("code"),$=F(n[0]),A=x(),S=_("div"),k=_("div"),M=x(),L(R.$$.fragment),p(i,"class","block border h-[22px] w-[10ch] bg-chess"),tt(i,"background","linear-gradient(to right, "+n[0]+" 0, "+n[0]+" 100%), var(--bg-chess-background)"),p(r,"class","input py-1"),p(t,"class","basis-1/2"),p(m,"class","uppercase"),p(k,"class","h-[1.5em] bg-chess"),tt(k,"background","linear-gradient(to right, "+n[0]+" 0, "+n[0]+" 100%), var(--bg-chess-background)"),p(S,"class","p-2 border rounded-md"),p(f,"class","basis-1/2"),p(e,"class","flex gap-8")},m(q,ee){E(q,e,ee),h(e,t),h(t,s),h(t,o),h(t,l),h(l,r),h(r,i),h(l,a),B&&B.m(l,null),h(e,u),h(e,f),h(f,d),h(d,g),h(d,m),h(m,$),h(f,A),h(f,S),h(S,k),h(f,M),P(R,f,null),N=!0,w||(D=[Ye(n[2].call(null,r)),Y(r,"click",n[4]),Ye(c=us.call(null,l,[void 0,n[7]]))],w=!0)},p(q,[ee]){(!N||ee&1)&&tt(i,"background","linear-gradient(to right, "+q[0]+" 0, "+q[0]+" 100%), var(--bg-chess-background)"),q[1]?B?(B.p(q,ee),ee&2&&v(B,1)):(B=Ir(q),B.c(),v(B,1),B.m(l,null)):B&&(me(),y(B,1,1,()=>{B=null}),_e()),c&&De(c.update)&&ee&2&&c.update.call(null,[void 0,q[7]]),(!N||ee&1)&&Ve($,q[0]),(!N||ee&1)&&tt(k,"background","linear-gradient(to right, "+q[0]+" 0, "+q[0]+" 100%), var(--bg-chess-background)")},i(q){N||(v(B),v(R.$$.fragment,q),N=!0)},o(q){y(B),y(R.$$.fragment,q),N=!1},d(q){q&&T(e),B&&B.d(),O(R),w=!1,Ae(D)}}}function m_(n,e,t){const[s,o]=lo(!0);let l="#f70",r=!1;const i=()=>t(1,r=!r);function a(d){l=d,t(0,l)}function c(d){l=d,t(0,l)}return[l,r,s,o,i,a,c,()=>t(1,r=!1),({detail:d})=>t(0,l=d)]}let __=class extends Z{constructor(e){super(),G(this,e,m_,g_,W,{})}};function b_(n){let e,t,s,o,l,r,i;return o=new __({}),r=new dt({props:{code:`<script lang="ts">
  import { slide } from 'svelte/transition';
  import { ColorPicker, ColorEdit } from '@apsc/color';
  import { flip, offset } from '@floating-ui/dom';
  import createFloationAction from '@apsc/floating-ui-action';
  import useFocus from '@apsc/focus-action';
  import SampleColors from '../SampleColors.svelte';

  const [useReference, useFloating] = createFloationAction(true);
  let color = '#f70';
  let show = false;
<\/script>

<div class="flex gap-8">
  <div class="basis-1/2">
    <div>Click this button to pick a color</div>
    <div use:useFocus={[undefined, () => (show = false)]}>
      <button class="input py-1" use:useReference on:click={() => (show = !show)}>
        <span
          class="block border h-[22px] w-[10ch] bg-chess"
          style="background: linear-gradient(to right, {color} 0, {color} 100%), var(--bg-chess-background);"
        />
      </button>
      {#if show}
        <div
          use:useFloating={{ placement: 'bottom-start', middleware: [flip(), offset(8)] }}
          transition:slide|local
          class="absolute w-[240px] border rounded-lg bg-white shadow-lg"
        >
          <ColorPicker
            bind:color
            class="h-48 p-3"
            style="--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"
          />
          <div class="border-t" />
          <ColorEdit bind:color class="p-3 text-sm" />
        </div>
      {/if}
    </div>
  </div>
  <div class="basis-1/2">
    <div>Current color: <code class="uppercase">{color}</code></div>
    <div class="p-2 border rounded-md">
      <div
        class="h-[1.5em] bg-chess"
        style="background: linear-gradient(to right, {color} 0, {color} 100%), var(--bg-chess-background);"
      />
    </div>
    <SampleColors class="mt-4" on:color={({ detail }) => (color = detail)} />
  </div>
</div>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML=`This example uses <a href="/?c=floating-ui-action"><code>@apsc/floating-ui-action</code></a> and
    <a href="/?c=focus-action"><code>@apsc/flocus-action</code></a>`,s=x(),L(o.$$.fragment),l=x(),L(r.$$.fragment),p(t,"class","w-fit mx-auto mb-4"),p(e,"class","prose max-w-none my-4")},m(a,c){E(a,e,c),h(e,t),h(e,s),P(o,e,null),h(e,l),P(r,e,null),i=!0},p:K,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){y(o.$$.fragment,a),y(r.$$.fragment,a),i=!1},d(a){a&&T(e),O(o),O(r)}}}let $_=class extends Z{constructor(e){super(),G(this,e,null,b_,W,{})}};function v_(n){let e;return{c(){e=F("API")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function w_(n){let e;return{c(){e=F("ColorPicker example")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function k_(n){let e;return{c(){e=F("ColorEdit example")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function y_(n){let e;return{c(){e=F("Color input Example")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function T_(n){let e,t,s,o,l,r,i,a;return e=new Ge({props:{$$slots:{default:[v_]},$$scope:{ctx:n}}}),s=new Ge({props:{$$slots:{default:[w_]},$$scope:{ctx:n}}}),l=new Ge({props:{$$slots:{default:[k_]},$$scope:{ctx:n}}}),i=new Ge({props:{$$slots:{default:[y_]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment),r=x(),L(i.$$.fragment)},m(c,u){P(e,c,u),E(c,t,u),P(s,c,u),E(c,o,u),P(l,c,u),E(c,r,u),P(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),l.$set(g);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||(v(e.$$.fragment,c),v(s.$$.fragment,c),v(l.$$.fragment,c),v(i.$$.fragment,c),a=!0)},o(c){y(e.$$.fragment,c),y(s.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!1},d(c){O(e,c),c&&T(t),O(s,c),c&&T(o),O(l,c),c&&T(r),O(i,c)}}}function E_(n){let e,t;return e=new qg({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function S_(n){let e,t;return e=new zm({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function x_(n){let e,t;return e=new qm({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function A_(n){let e,t;return e=new $_({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function C_(n){let e,t,s,o,l,r,i,a,c,u;return e=new wn({props:{$$slots:{default:[T_]},$$scope:{ctx:n}}}),s=new Ze({props:{$$slots:{default:[E_]},$$scope:{ctx:n}}}),l=new Ze({props:{$$slots:{default:[S_]},$$scope:{ctx:n}}}),i=new Ze({props:{$$slots:{default:[x_]},$$scope:{ctx:n}}}),c=new Ze({props:{$$slots:{default:[A_]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment),r=x(),L(i.$$.fragment),a=x(),L(c.$$.fragment)},m(f,d){P(e,f,d),E(f,t,d),P(s,f,d),E(f,o,d),P(l,f,d),E(f,r,d),P(i,f,d),E(f,a,d),P(c,f,d),u=!0},p(f,d){const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),e.$set(g);const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),s.$set(m);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),l.$set($);const A={};d&1&&(A.$$scope={dirty:d,ctx:f}),i.$set(A);const S={};d&1&&(S.$$scope={dirty:d,ctx:f}),c.$set(S)},i(f){u||(v(e.$$.fragment,f),v(s.$$.fragment,f),v(l.$$.fragment,f),v(i.$$.fragment,f),v(c.$$.fragment,f),u=!0)},o(f){y(e.$$.fragment,f),y(s.$$.fragment,f),y(l.$$.fragment,f),y(i.$$.fragment,f),y(c.$$.fragment,f),u=!1},d(f){O(e,f),f&&T(t),O(s,f),f&&T(o),O(l,f),f&&T(r),O(i,f),f&&T(a),O(c,f)}}}function N_(n){let e,t,s,o,l,r,i,a,c,u,f,d,g;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[C_]},$$scope:{ctx:n}}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),o=_("h1"),o.textContent="A set of components for picking and editing colors",l=x(),r=_("a"),i=_("img"),c=x(),u=_("ul"),u.innerHTML=`<li>no inline styles</li> 
    <li>the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts" target="_blank" rel="noreferrer">utils.d.ts</a> for definitions of types and functions</li>`,f=x(),L(d.$$.fragment),p(o,"class","text-2xl"),p(i,"class","max-w-[4em]"),ct(i.src,a=gt)||p(i,"src",a),p(i,"alt","NPM logo"),p(r,"class","float-right"),p(r,"href","https://www.npmjs.com/package/@apsc/color"),p(r,"target","_blank"),p(r,"rel","noreferrer"),p(u,"class","leading-6 mb-8"),p(e,"class","prose max-w-none my-4")},m(m,$){E(m,e,$),P(t,e,null),h(e,s),h(e,o),h(e,l),h(e,r),h(r,i),h(e,c),h(e,u),h(e,f),P(d,e,null),g=!0},p(m,[$]){const A={};$&1&&(A.$$scope={dirty:$,ctx:m}),d.$set(A)},i(m){g||(v(t.$$.fragment,m),v(d.$$.fragment,m),g=!0)},o(m){y(t.$$.fragment,m),y(d.$$.fragment,m),g=!1},d(m){m&&T(e),O(t),O(d)}}}function M_(n){return Tn(document.title.replace(/(•).*$/,"$1 Color")),[]}let R_=class extends Z{constructor(e){super(),G(this,e,M_,N_,W,{})}};const Br=`# [Floating UI](https://floating-ui.com/) action for \`use\` Svelte directive

- allows you to use both Svelte transitions and CSS transitions
- dependence [@floating-ui/dom](https://github.com/floating-ui/floating-ui)

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/?c=floating-ui-action)

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
`;function P_(n){let e,t,s;return t=new Sn({props:{source:Br.slice(Br.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),L(t.$$.fragment),p(e,"class","documentation")},m(o,l){E(o,e,l),P(t,e,null),s=!0},p:K,i(o){s||(v(t.$$.fragment,o),s=!0)},o(o){y(t.$$.fragment,o),s=!1},d(o){o&&T(e),O(t)}}}let O_=class extends Z{constructor(e){super(),G(this,e,null,P_,W,{})}};function zr(n,e,t){const s=n.slice();return s[20]=e[t],s}function Fr(n,e,t){const s=n.slice();return s[23]=e[t],s}function Hr(n){let e,t=n[23]+"",s;return{c(){e=_("option"),s=F(t),e.__value=n[23],e.value=e.__value},m(o,l){E(o,e,l),h(e,s)},p:K,d(o){o&&T(e)}}}function jr(n){let e,t=n[20]+"",s;return{c(){e=_("option"),s=F(t),e.__value=n[12][n[20]],e.value=e.__value},m(o,l){E(o,e,l),h(e,s)},p:K,d(o){o&&T(e)}}}function Ur(n){let e,t,s,o,l,r,i,a;return{c(){e=_("div"),t=_("div"),s=F(`
      Lorem ipsum dolor sit amet consectetur adipisicing elit`),p(t,"class","arrow svelte-1b5318a"),p(e,"class","tooltip not-prose svelte-1b5318a")},m(c,u){E(c,e,u),h(e,t),n[19](t),h(e,s),r=!0,i||(a=Ye(o=n[9].call(null,e,{placement:n[5],middleware:n[6],callback:n[10]})),i=!0)},p(c,u){o&&De(o.update)&&u&96&&o.update.call(null,{placement:c[5],middleware:c[6],callback:c[10]})},i(c){r||(c&&$t(()=>{l||(l=ln(e,n[7],{},!0)),l.run(1)}),r=!0)},o(c){c&&(l||(l=ln(e,n[7],{},!1)),l.run(0)),r=!1},d(c){c&&T(e),n[19](null),c&&l&&l.end(),i=!1,a()}}}function L_(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k,M,R,N,w,D,B,q,ee,te,ce,ye,$e=n[4]?"hide":"show",Oe,z,U,J,le=n[11],j=[];for(let V=0;V<le.length;V+=1)j[V]=Hr(Fr(n,le,V));let pe=Object.keys(n[12]),ae=[];for(let V=0;V<pe.length;V+=1)ae[V]=jr(zr(n,pe,V));let we=n[4]&&Ur(n);return{c(){e=_("div"),t=_("label"),s=_("span"),s.textContent="placement",o=x(),l=_("select");for(let V=0;V<j.length;V+=1)j[V].c();r=x(),i=_("label"),a=_("input"),c=x(),u=_("span"),u.textContent="flip",f=x(),d=_("label"),g=_("span"),g.textContent="offset",m=x(),$=_("input"),A=x(),S=_("label"),k=_("span"),k.textContent="size padding",M=x(),R=_("input"),N=x(),w=_("label"),D=_("span"),D.textContent="transition",B=x(),q=_("select");for(let V=0;V<ae.length;V+=1)ae[V].c();ee=x(),te=_("div"),ce=_("button"),ye=F("Click me to "),Oe=F($e),z=x(),we&&we.c(),p(l,"class","input"),n[5]===void 0&&$t(()=>n[13].call(l)),p(a,"type","checkbox"),p(i,"class","whitespace-nowrap"),p($,"type","number"),p($,"class","input w-[8ch]"),p(R,"type","number"),p(R,"class","input w-[8ch]"),p(q,"class","input"),n[7]===void 0&&$t(()=>n[17].call(q)),p(e,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),p(ce,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),p(te,"class","h-64 flex items-center justify-center border")},m(V,Se){E(V,e,Se),h(e,t),h(t,s),h(t,o),h(t,l);for(let he=0;he<j.length;he+=1)j[he].m(l,null);Pt(l,n[5]),h(e,r),h(e,i),h(i,a),a.checked=n[2],h(i,c),h(i,u),h(e,f),h(e,d),h(d,g),h(d,m),h(d,$),ut($,n[1]),h(e,A),h(e,S),h(S,k),h(S,M),h(S,R),ut(R,n[3]),h(e,N),h(e,w),h(w,D),h(w,B),h(w,q);for(let he=0;he<ae.length;he+=1)ae[he].m(q,null);Pt(q,n[7]),E(V,ee,Se),E(V,te,Se),h(te,ce),h(ce,ye),h(ce,Oe),h(te,z),we&&we.m(te,null),U||(J=[Y(l,"change",n[13]),Y(a,"change",n[14]),Y($,"input",n[15]),Y(R,"input",n[16]),Y(q,"change",n[17]),Ye(n[8].call(null,ce)),Y(ce,"click",n[18])],U=!0)},p(V,[Se]){if(Se&2048){le=V[11];let he;for(he=0;he<le.length;he+=1){const qe=Fr(V,le,he);j[he]?j[he].p(qe,Se):(j[he]=Hr(qe),j[he].c(),j[he].m(l,null))}for(;he<j.length;he+=1)j[he].d(1);j.length=le.length}if(Se&2080&&Pt(l,V[5]),Se&4&&(a.checked=V[2]),Se&2&&_t($.value)!==V[1]&&ut($,V[1]),Se&8&&_t(R.value)!==V[3]&&ut(R,V[3]),Se&4096){pe=Object.keys(V[12]);let he;for(he=0;he<pe.length;he+=1){const qe=zr(V,pe,he);ae[he]?ae[he].p(qe,Se):(ae[he]=jr(qe),ae[he].c(),ae[he].m(q,null))}for(;he<ae.length;he+=1)ae[he].d(1);ae.length=pe.length}Se&4224&&Pt(q,V[7]),Se&16&&$e!==($e=V[4]?"hide":"show")&&Ve(Oe,$e),V[4]?we?(we.p(V,Se),Se&16&&v(we,1)):(we=Ur(V),we.c(),v(we,1),we.m(te,null)):we&&(me(),y(we,1,1,()=>{we=null}),_e())},i(V){v(we)},o(V){y(we)},d(V){V&&T(e),He(j,V),He(ae,V),V&&T(ee),V&&T(te),we&&we.d(),U=!1,Ae(J)}}}function D_(n,e,t){const[s,o]=lo(!0);let l,r=!1;function i(D){const{placement:B,middlewareData:q}=D;if(q.arrow){const{x:ee,y:te}=q.arrow,ce={top:"bottom",right:"left",bottom:"top",left:"right"}[B.split("-")[0]];ce&&Object.assign(l.style,{left:ee!=null?`${ee}px`:"",top:te!=null?`${te}px`:"",right:"",bottom:"",[ce]:"-6px"})}}const a=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let c=a[0],u=16,f=!0,d=16,g=[],m;const $={slide:Un,scale:kg,fade:wg,blur:vg,none:()=>({delay:0,duration:0})};function A(){c=ns(this),t(5,c),t(11,a)}function S(){f=this.checked,t(2,f)}function k(){u=_t(this.value),t(1,u)}function M(){d=_t(this.value),t(3,d)}function R(){m=ns(this),t(7,m),t(12,$)}const N=()=>t(4,r=!r);function w(D){Xe[D?"unshift":"push"](()=>{l=D,t(0,l)})}return n.$$.update=()=>{n.$$.dirty&15&&t(6,g=[no(u),f&&to(),ua({padding:d,apply({availableWidth:D,availableHeight:B,elements:q}){Object.assign(q.floating.style,{maxWidth:`${D}px`,maxHeight:`${B}px`})}}),l&&ca({element:l})].filter(D=>!!D))},[l,u,f,d,r,c,g,m,s,o,i,a,$,A,S,k,M,R,N,w]}let I_=class extends Z{constructor(e){super(),G(this,e,D_,L_,W,{})}};function B_(n){let e,t,s,o,l;return t=new I_({}),o=new dt({props:{code:`<script lang="ts">
  import { slide, scale, fade, blur } from 'svelte/transition';
  import type { TransitionConfig } from 'svelte/transition';
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

  const placements = [
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end'
  ];
  let placement = placements[0];
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

  let transitionFn: (...args: unknown[]) => TransitionConfig;
  const transitionFns: Record<string, (...args: unknown[]) => TransitionConfig> = {
    slide,
    scale,
    fade,
    blur,
    none: () => ({ delay: 0, duration: 0 })
  };
<\/script>

<div class="mb-8 flex justify-evenly flex-wrap gap-y-3">
  <label>
    <span>placement</span>
    <select class="input" bind:value={placement}>
      {#each placements as p}
        <option value={p}>{p}</option>
      {/each}
    </select>
  </label>
  <label class="whitespace-nowrap">
    <input type="checkbox" bind:checked={_flip} />
    <span>flip</span>
  </label>
  <label>
    <span>offset</span>
    <input type="number" class="input w-[8ch]" bind:value={_offset} />
  </label>
  <label>
    <span>size padding</span>
    <input type="number" class="input w-[8ch]" bind:value={_sizePadding} />
  </label>
  <label>
    <span>transition</span>
    <select class="input" bind:value={transitionFn}>
      {#each Object.keys(transitionFns) as k}
        <option value={transitionFns[k]}>{k}</option>
      {/each}
    </select></label
  >
</div>

<div class="h-64 flex items-center justify-center border">
  <button
    use:useReference
    class="input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"
    on:click={() => (show = !show)}>Click me to {show ? 'hide' : 'show'}</button
  >
  {#if show}
    <div
      use:useFloating={{
        placement,
        middleware,
        callback: adjustArrow
      }}
      transition:transitionFn|local
      class="tooltip not-prose"
    >
      <div class="arrow" bind:this={_arrow} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </div>
  {/if}
</div>

<style lang="postcss">
  .tooltip {
    @apply absolute box-border bg-gray-800 text-white font-semibold py-2 px-4 rounded-md text-sm;
  }

  .tooltip .arrow {
    @apply absolute bg-gray-800 h-3 w-3 rotate-45;
  }
</style>
`}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),L(o.$$.fragment),p(e,"class","prose max-w-none my-4")},m(r,i){E(r,e,i),P(t,e,null),h(e,s),P(o,e,null),l=!0},p:K,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(o.$$.fragment,r),l=!1},d(r){r&&T(e),O(t),O(o)}}}let z_=class extends Z{constructor(e){super(),G(this,e,null,B_,W,{})}};function qr(n,e,t){const s=n.slice();return s[18]=e[t],s}function Kr(n){let e,t=n[18]+"",s;return{c(){e=_("option"),s=F(t),e.__value=n[18],e.value=e.__value},m(o,l){E(o,e,l),h(e,s)},p:K,d(o){o&&T(e)}}}function F_(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k,M,R,N,w,D,B,q=n[1]?"hide":"show",ee,te,ce,ye,$e,Oe,z,U,J=n[10],le=[];for(let j=0;j<J.length;j+=1)le[j]=Kr(qr(n,J,j));return{c(){e=_("div"),t=_("label"),s=_("span"),s.textContent="placement",o=x(),l=_("select");for(let j=0;j<le.length;j+=1)le[j].c();r=x(),i=_("label"),a=_("input"),c=x(),u=_("span"),u.textContent="flip",f=x(),d=_("label"),g=_("span"),g.textContent="offset",m=x(),$=_("input"),A=x(),S=_("label"),k=_("span"),k.textContent="size padding",M=x(),R=_("input"),N=x(),w=_("div"),D=_("button"),B=F("Click me to "),ee=F(q),te=x(),ce=_("div"),ye=_("div"),$e=F(`
    Lorem ipsum dolor sit amet consectetur adipisicing elit`),p(l,"class","input"),n[5]===void 0&&$t(()=>n[11].call(l)),p(a,"type","checkbox"),p(i,"class","whitespace-nowrap"),p($,"type","number"),p($,"class","input w-[8ch]"),p(R,"type","number"),p(R,"class","input w-[8ch]"),p(e,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),p(D,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),p(ye,"class","arrow svelte-1lvd4kc"),p(ce,"class","tooltip not-prose svelte-1lvd4kc"),ie(ce,"in",n[1]),ie(ce,"out",!n[1]),p(w,"class","h-64 flex items-center justify-center border")},m(j,pe){E(j,e,pe),h(e,t),h(t,s),h(t,o),h(t,l);for(let ae=0;ae<le.length;ae+=1)le[ae].m(l,null);Pt(l,n[5]),h(e,r),h(e,i),h(i,a),a.checked=n[3],h(i,c),h(i,u),h(e,f),h(e,d),h(d,g),h(d,m),h(d,$),ut($,n[2]),h(e,A),h(e,S),h(S,k),h(S,M),h(S,R),ut(R,n[4]),E(j,N,pe),E(j,w,pe),h(w,D),h(D,B),h(D,ee),h(w,te),h(w,ce),h(ce,ye),n[16](ye),h(ce,$e),z||(U=[Y(l,"change",n[11]),Y(a,"change",n[12]),Y($,"input",n[13]),Y(R,"input",n[14]),Ye(n[7].call(null,D)),Y(D,"click",n[15]),Ye(Oe=n[8].call(null,ce,{placement:n[5],middleware:n[6],callback:n[9]}))],z=!0)},p(j,[pe]){if(pe&1024){J=j[10];let ae;for(ae=0;ae<J.length;ae+=1){const we=qr(j,J,ae);le[ae]?le[ae].p(we,pe):(le[ae]=Kr(we),le[ae].c(),le[ae].m(l,null))}for(;ae<le.length;ae+=1)le[ae].d(1);le.length=J.length}pe&1056&&Pt(l,j[5]),pe&8&&(a.checked=j[3]),pe&4&&_t($.value)!==j[2]&&ut($,j[2]),pe&16&&_t(R.value)!==j[4]&&ut(R,j[4]),pe&2&&q!==(q=j[1]?"hide":"show")&&Ve(ee,q),Oe&&De(Oe.update)&&pe&96&&Oe.update.call(null,{placement:j[5],middleware:j[6],callback:j[9]}),pe&2&&ie(ce,"in",j[1]),pe&2&&ie(ce,"out",!j[1])},i:K,o:K,d(j){j&&T(e),He(le,j),j&&T(N),j&&T(w),n[16](null),z=!1,Ae(U)}}}function H_(n,e,t){const[s,o,l]=lo(!0);let r,i=!1;function a(N){const{placement:w,middlewareData:D}=N;if(D.arrow){const{x:B,y:q}=D.arrow,ee={top:"bottom",right:"left",bottom:"top",left:"right"}[w.split("-")[0]];ee&&Object.assign(r.style,{left:B!=null?`${B}px`:"",top:q!=null?`${q}px`:"",right:"",bottom:"",[ee]:"-6px"})}}const c=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let u=c[0],f=16,d=!0,g=16,m=[];function $(){u=ns(this),t(5,u),t(10,c)}function A(){d=this.checked,t(3,d)}function S(){f=_t(this.value),t(2,f)}function k(){g=_t(this.value),t(4,g)}const M=()=>t(1,i=!i);function R(N){Xe[N?"unshift":"push"](()=>{r=N,t(0,r)})}return n.$$.update=()=>{n.$$.dirty&2&&l(i),n.$$.dirty&29&&t(6,m=[no(f),d&&to(),ua({padding:g,apply({availableWidth:N,availableHeight:w,elements:D}){Object.assign(D.floating.style,{maxWidth:`${N}px`,maxHeight:`${w}px`})}}),r&&ca({element:r})].filter(N=>!!N))},[r,i,f,d,g,u,m,s,o,a,c,$,A,S,k,M,R]}let j_=class extends Z{constructor(e){super(),G(this,e,H_,F_,W,{})}};function U_(n){let e,t,s,o,l;return t=new j_({}),o=new dt({props:{code:`<script lang="ts">
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

  const placements = [
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end'
  ];
  let placement = placements[0];
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

<div class="mb-8 flex justify-evenly flex-wrap gap-y-3">
  <label>
    <span>placement</span>
    <select class="input" bind:value={placement}>
      {#each placements as p}
        <option value={p}>{p}</option>
      {/each}
    </select>
  </label>
  <label class="whitespace-nowrap">
    <input type="checkbox" bind:checked={_flip} />
    <span>flip</span>
  </label>
  <label>
    <span>offset</span>
    <input type="number" class="input w-[8ch]" bind:value={_offset} />
  </label>
  <label>
    <span>size padding</span>
    <input type="number" class="input w-[8ch]" bind:value={_sizePadding} />
  </label>
</div>

<div class="h-64 flex items-center justify-center border">
  <button
    use:useReference
    class="input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"
    on:click={() => (show = !show)}>Click me to {show ? 'hide' : 'show'}</button
  >
  <div
    use:useFloating={{
      placement,
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
</style>
`}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),L(o.$$.fragment),p(e,"class","prose max-w-none my-4")},m(r,i){E(r,e,i),P(t,e,null),h(e,s),P(o,e,null),l=!0},p:K,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(o.$$.fragment,r),l=!1},d(r){r&&T(e),O(t),O(o)}}}let q_=class extends Z{constructor(e){super(),G(this,e,null,U_,W,{})}};function K_(n){let e;return{c(){e=F("API")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function W_(n){let e;return{c(){e=F("Transition JS demo")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function G_(n){let e;return{c(){e=F("Transition CSS demo")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function Z_(n){let e,t,s,o,l,r;return e=new Ge({props:{$$slots:{default:[K_]},$$scope:{ctx:n}}}),s=new Ge({props:{$$slots:{default:[W_]},$$scope:{ctx:n}}}),l=new Ge({props:{$$slots:{default:[G_]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment)},m(i,a){P(e,i,a),E(i,t,a),P(s,i,a),E(i,o,a),P(l,i,a),r=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),s.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(v(e.$$.fragment,i),v(s.$$.fragment,i),v(l.$$.fragment,i),r=!0)},o(i){y(e.$$.fragment,i),y(s.$$.fragment,i),y(l.$$.fragment,i),r=!1},d(i){O(e,i),i&&T(t),O(s,i),i&&T(o),O(l,i)}}}function X_(n){let e,t;return e=new O_({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Q_(n){let e,t;return e=new z_({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Y_(n){let e,t;return e=new q_({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function J_(n){let e,t,s,o,l,r,i,a;return e=new wn({props:{$$slots:{default:[Z_]},$$scope:{ctx:n}}}),s=new Ze({props:{$$slots:{default:[X_]},$$scope:{ctx:n}}}),l=new Ze({props:{$$slots:{default:[Q_]},$$scope:{ctx:n}}}),i=new Ze({props:{$$slots:{default:[Y_]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment),r=x(),L(i.$$.fragment)},m(c,u){P(e,c,u),E(c,t,u),P(s,c,u),E(c,o,u),P(l,c,u),E(c,r,u),P(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),l.$set(g);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||(v(e.$$.fragment,c),v(s.$$.fragment,c),v(l.$$.fragment,c),v(i.$$.fragment,c),a=!0)},o(c){y(e.$$.fragment,c),y(s.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!1},d(c){O(e,c),c&&T(t),O(s,c),c&&T(o),O(l,c),c&&T(r),O(i,c)}}}function V_(n){let e,t,s,o,l,r,i,a,c,u,f,d,g;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[J_]},$$scope:{ctx:n}}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),o=_("h1"),o.textContent="Action to use Floating UI",l=x(),r=_("a"),i=_("img"),c=x(),u=_("ul"),u.innerHTML=`<li>allows you to use both Svelte transitions and CSS transitions</li> 
    <li>dependence <a href="https://github.com/floating-ui/floating-ui" target="_blank" rel="noreferrer">@floating-ui/dom</a></li>`,f=x(),L(d.$$.fragment),p(o,"class","text-2xl"),p(i,"class","max-w-[4em]"),ct(i.src,a=gt)||p(i,"src",a),p(i,"alt","NPM logo"),p(r,"class","float-right"),p(r,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),p(r,"target","_blank"),p(r,"rel","noreferrer"),p(u,"class","leading-6 mb-8"),p(e,"class","prose max-w-none my-4")},m(m,$){E(m,e,$),P(t,e,null),h(e,s),h(e,o),h(e,l),h(e,r),h(r,i),h(e,c),h(e,u),h(e,f),P(d,e,null),g=!0},p(m,[$]){const A={};$&1&&(A.$$scope={dirty:$,ctx:m}),d.$set(A)},i(m){g||(v(t.$$.fragment,m),v(d.$$.fragment,m),g=!0)},o(m){y(t.$$.fragment,m),y(d.$$.fragment,m),g=!1},d(m){m&&T(e),O(t),O(d)}}}function eb(n){return Tn(document.title.replace(/(•).*$/,"$1 Floating UI action")),[]}let tb=class extends Z{constructor(e){super(),G(this,e,eb,V_,W,{})}};const Wr=`# Action to control \`focusin\` and \`focusout\` for Svelte directive \`use\`

- no dependencies
- based on \`focusin\` and \`focusout\` events.
- correctly detects loss of focus with \`tab\` key

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/?c=focus-action)

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
`;function nb(n){let e,t,s;return t=new Sn({props:{source:Wr.slice(Wr.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),L(t.$$.fragment),p(e,"class","documentation")},m(o,l){E(o,e,l),P(t,e,null),s=!0},p:K,i(o){s||(v(t.$$.fragment,o),s=!0)},o(o){y(t.$$.fragment,o),s=!1},d(o){o&&T(e),O(t)}}}let sb=class extends Z{constructor(e){super(),G(this,e,null,nb,W,{})}};function ob(n){let e;return{c(){e=F(" ")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function lb(n){let e;return{c(){e=F("Try to close the dropdown block by clicking outside")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function rb(n){let e;return{c(){e=F("Select")},m(t,s){E(t,e,s)},p:K,d(t){t&&T(e)}}}function ib(n){let e,t,s;return{c(){e=F("Selected "),t=_("small"),s=F(n[3]),p(t,"class","font-semibold text-gray-400")},m(o,l){E(o,e,l),E(o,t,l),h(t,s)},p(o,l){l&8&&Ve(s,o[3])},d(o){o&&T(e),o&&T(t)}}}function Gr(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k,M,R;return{c(){e=_("div"),t=_("div"),t.textContent="Choose one of the items",s=x(),o=_("div"),l=_("label"),r=_("input"),i=x(),a=_("span"),a.textContent="Firts",c=x(),u=_("label"),f=_("input"),d=x(),g=_("span"),g.textContent="Second",m=x(),$=_("label"),A=_("input"),S=x(),k=_("span"),k.textContent="Third",p(t,"class","alert svelte-1hjb9pe"),ie(t,"error",n[2]),p(r,"type","radio"),r.__value="Firts",r.value=r.__value,p(r,"name","item"),n[8][0].push(r),p(f,"type","radio"),f.__value="Second",f.value=f.__value,p(f,"name","item"),n[8][0].push(f),p(A,"type","radio"),A.__value="Third",A.value=A.__value,p(A,"name","item"),n[8][0].push(A),p(o,"class","mt-2 flex gap-4 px-2"),p(e,"class","absolute border shadow-md rounded-md p-2 top-2 bg-white"),p(e,"tabindex","-1")},m(N,w){E(N,e,w),h(e,t),h(e,s),h(e,o),h(o,l),h(l,r),r.checked=r.__value===n[3],h(l,i),h(l,a),h(o,c),h(o,u),h(u,f),f.checked=f.__value===n[3],h(u,d),h(u,g),h(o,m),h(o,$),h($,A),A.checked=A.__value===n[3],h($,S),h($,k),n[11](e),M||(R=[Y(r,"change",n[7]),Y(f,"change",n[9]),Y(A,"change",n[10]),Ye(us.call(null,e,[void 0,n[4]]))],M=!0)},p(N,w){w&4&&ie(t,"error",N[2]),w&8&&(r.checked=r.__value===N[3]),w&8&&(f.checked=f.__value===N[3]),w&8&&(A.checked=A.__value===N[3])},d(N){N&&T(e),n[8][0].splice(n[8][0].indexOf(r),1),n[8][0].splice(n[8][0].indexOf(f),1),n[8][0].splice(n[8][0].indexOf(A),1),n[11](null),M=!1,Ae(R)}}}function ab(n){let e,t,s,o,l,r,i,a,c,u,f;function d(M,R){return M[1]&&!M[3]?lb:ob}let g=d(n),m=g(n);function $(M,R){return M[3]?ib:rb}let A=$(n),S=A(n),k=n[1]&&Gr(n);return{c(){e=_("div"),m.c(),t=x(),s=_("div"),o=_("button"),S.c(),l=x(),r=_("button"),i=F("Reset"),a=x(),c=_("div"),k&&k.c(),p(e,"class","w-fit mx-auto mb-4"),p(o,"class","input w-[200px]"),p(r,"class","input"),r.disabled=n[1],p(c,"class","relative"),p(s,"class","w-fit mx-auto")},m(M,R){E(M,e,R),m.m(e,null),E(M,t,R),E(M,s,R),h(s,o),S.m(o,null),h(s,l),h(s,r),h(r,i),h(s,a),h(s,c),k&&k.m(c,null),u||(f=[Y(o,"click",n[5]),Y(r,"click",n[6])],u=!0)},p(M,[R]){g!==(g=d(M))&&(m.d(1),m=g(M),m&&(m.c(),m.m(e,null))),A===(A=$(M))&&S?S.p(M,R):(S.d(1),S=A(M),S&&(S.c(),S.m(o,null))),R&2&&(r.disabled=M[1]),M[1]?k?k.p(M,R):(k=Gr(M),k.c(),k.m(c,null)):k&&(k.d(1),k=null)},i:K,o:K,d(M){M&&T(e),m.d(),M&&T(t),M&&T(s),S.d(),k&&k.d(),u=!1,Ae(f)}}}function cb(n,e,t){let s=!1,o=!1,l,r="";function i(){r?(t(1,s=!1),t(2,o=!1)):t(2,o=!0)}const a=[[]],c=()=>t(1,s=!0),u=()=>t(3,r="");function f(){r=this.__value,t(3,r)}function d(){r=this.__value,t(3,r)}function g(){r=this.__value,t(3,r)}function m($){Xe[$?"unshift":"push"](()=>{l=$,t(0,l)})}return n.$$.update=()=>{n.$$.dirty&1&&l&&l.focus()},[l,s,o,r,i,c,u,f,a,d,g,m]}let ub=class extends Z{constructor(e){super(),G(this,e,cb,ab,W,{})}};function fb(n){let e,t,s,o,l;return t=new ub({}),o=new dt({props:{code:`<script lang="ts">
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

<style lang="postcss">
  .alert {
    @apply bg-yellow-100 text-center p-1 rounded-md text-orange-700;
  }
  .alert.error {
    @apply bg-red-500 text-white font-semibold;
  }
</style>
`}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),L(o.$$.fragment),p(e,"class","prose max-w-none my-4")},m(r,i){E(r,e,i),P(t,e,null),h(e,s),P(o,e,null),l=!0},p:K,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(o.$$.fragment,r),l=!1},d(r){r&&T(e),O(t),O(o)}}}let db=class extends Z{constructor(e){super(),G(this,e,null,fb,W,{})}};function Zr(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S,k,M,R,N;return{c(){e=_("ul"),t=_("li"),s=_("button"),s.textContent="Open",o=x(),l=_("li"),r=_("button"),r.textContent="Close",i=x(),a=_("li"),c=_("button"),c.textContent="Upload",u=x(),f=_("li"),d=_("button"),d.textContent="Download",g=x(),m=_("li"),$=x(),A=_("li"),S=_("button"),S.textContent="About",p(s,"class","svelte-x2xhpk"),p(t,"class","svelte-x2xhpk"),p(r,"class","svelte-x2xhpk"),p(l,"class","svelte-x2xhpk"),p(c,"class","svelte-x2xhpk"),p(a,"class","svelte-x2xhpk"),p(d,"class","svelte-x2xhpk"),p(f,"class","svelte-x2xhpk"),p(m,"class","separator svelte-x2xhpk"),p(S,"class","svelte-x2xhpk"),p(A,"class","svelte-x2xhpk"),p(e,"class","dropdown svelte-x2xhpk"),p(e,"tabindex","-1")},m(w,D){E(w,e,D),h(e,t),h(t,s),h(e,o),h(e,l),h(l,r),h(e,i),h(e,a),h(a,c),h(e,u),h(e,f),h(f,d),h(e,g),h(e,m),h(e,$),h(e,A),h(A,S),M=!0,R||(N=[Y(s,"click",n[4]),Y(r,"click",n[5]),Y(c,"click",n[6]),Y(d,"click",n[7]),Y(S,"click",n[8]),Ye(n[2].call(null,e,{placement:"bottom-start",middleware:[to(),no(8)]}))],R=!0)},p:K,i(w){M||(w&&$t(()=>{k||(k=ln(e,Un,{},!0)),k.run(1)}),M=!0)},o(w){w&&(k||(k=ln(e,Un,{},!1)),k.run(0)),M=!1},d(w){w&&T(e),w&&k&&k.end(),R=!1,Ae(N)}}}function pb(n){let e,t,s,o,l,r,i=n[0]&&Zr(n);return{c(){e=_("div"),t=_("button"),t.textContent="Action",s=x(),i&&i.c(),p(t,"class","input"),p(e,"class","w-fit mx-auto")},m(a,c){E(a,e,c),h(e,t),h(e,s),i&&i.m(e,null),l||(r=[Ye(n[1].call(null,t)),Y(t,"click",n[3]),Ye(o=us.call(null,e,[void 0,n[9]]))],l=!0)},p(a,[c]){a[0]?i?(i.p(a,c),c&1&&v(i,1)):(i=Zr(a),i.c(),v(i,1),i.m(e,null)):i&&(me(),y(i,1,1,()=>{i=null}),_e()),o&&De(o.update)&&c&1&&o.update.call(null,[void 0,a[9]])},i(a){v(i)},o(a){y(i)},d(a){a&&T(e),i&&i.d(),l=!1,Ae(r)}}}function hb(n,e,t){const[s,o,l]=lo(!0);let r=!1;const i=()=>t(0,r=!0),a=()=>t(0,r=!1),c=()=>t(0,r=!1),u=()=>t(0,r=!1),f=()=>t(0,r=!1),d=()=>t(0,r=!1),g=()=>t(0,r=!1);return n.$$.update=()=>{n.$$.dirty&1&&l(r)},[r,s,o,i,a,c,u,f,d,g]}let gb=class extends Z{constructor(e){super(),G(this,e,hb,pb,W,{})}};function mb(n){let e,t,s,o,l,r,i;return o=new gb({}),r=new dt({props:{code:`<script lang="ts">
  import { offset, flip } from '@floating-ui/dom';
  import { slide } from 'svelte/transition';
  import createFloatingUiAction from '@apsc/floating-ui-action';
  import useFocus from '@apsc/focus-action';

  const [useRef, useFloat, setAutoupdate] = createFloatingUiAction(true);

  let show = false;
  $: setAutoupdate(show);
<\/script>

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
</style>
`}}),{c(){e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/?c=floating-ui-action"><code>@apsc/floating-ui-action</code></a>',s=x(),L(o.$$.fragment),l=x(),L(r.$$.fragment),p(t,"class","w-fit mx-auto mb-4"),p(e,"class","prose max-w-none my-4")},m(a,c){E(a,e,c),h(e,t),h(e,s),P(o,e,null),h(e,l),P(r,e,null),i=!0},p:K,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){y(o.$$.fragment,a),y(r.$$.fragment,a),i=!1},d(a){a&&T(e),O(o),O(r)}}}let _b=class extends Z{constructor(e){super(),G(this,e,null,mb,W,{})}};function bb(n){let e,t,s,o,l,r,i,a,c,u,f;return{c(){e=_("div"),t=_("div"),s=_("fieldset"),s.innerHTML=`<legend class="svelte-c2p0zs">Your details</legend> 
      <label class="svelte-c2p0zs"><span>Name</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Email</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Phone</span> 
        <input type="text" class="input svelte-c2p0zs"/></label>`,l=x(),r=_("div"),r.innerHTML='<button type="button" class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8 svelte-c2p0zs">Submit</button>',i=x(),a=_("fieldset"),a.innerHTML=`<legend class="svelte-c2p0zs">Delivery address</legend> 
    <label class="svelte-c2p0zs"><span>Address</span> 
      <textarea rows="3" class="input svelte-c2p0zs"></textarea></label> 
    <label class="svelte-c2p0zs"><span>Postcode</span> 
      <input type="text" class="input svelte-c2p0zs"/></label> 
    <label class="svelte-c2p0zs"><span>Country</span> 
      <input type="text" class="input svelte-c2p0zs"/></label>`,p(s,"class","svelte-c2p0zs"),ie(s,"active",n[0]),p(r,"class","mt-8"),p(t,"class","basis-1/2"),p(a,"class","basis-1/2 svelte-c2p0zs"),ie(a,"active",n[1]),p(e,"class","form svelte-c2p0zs")},m(d,g){E(d,e,g),h(e,t),h(t,s),h(t,l),h(t,r),h(e,i),h(e,a),u||(f=[Ye(o=us.call(null,s,[n[2],n[3]])),Ye(c=us.call(null,a,[n[4],n[5]]))],u=!0)},p(d,[g]){o&&De(o.update)&&g&1&&o.update.call(null,[d[2],d[3]]),g&1&&ie(s,"active",d[0]),c&&De(c.update)&&g&2&&c.update.call(null,[d[4],d[5]]),g&2&&ie(a,"active",d[1])},i:K,o:K,d(d){d&&T(e),u=!1,Ae(f)}}}function $b(n,e,t){let s=!1,o=!1;return[s,o,()=>t(0,s=!0),()=>t(0,s=!1),()=>t(1,o=!0),()=>t(1,o=!1)]}let vb=class extends Z{constructor(e){super(),G(this,e,$b,bb,W,{})}};function wb(n){let e,t,s,o,l,r,i;return o=new vb({}),r=new dt({props:{code:""}}),{c(){e=_("section"),t=_("div"),t.textContent="This example highlights a focused fieldset.",s=x(),L(o.$$.fragment),l=x(),L(r.$$.fragment),p(t,"class","mb-8 pb-2 border-b text-center text-gray-500"),p(e,"class","prose max-w-none my-4")},m(a,c){E(a,e,c),h(e,t),h(e,s),P(o,e,null),h(e,l),P(r,e,null),i=!0},p:K,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){y(o.$$.fragment,a),y(r.$$.fragment,a),i=!1},d(a){a&&T(e),O(o),O(r)}}}let kb=class extends Z{constructor(e){super(),G(this,e,null,wb,W,{})}};function yb(n){let e;return{c(){e=F("API")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function Tb(n){let e;return{c(){e=F("Required demo")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function Eb(n){let e;return{c(){e=F("Dropdown demo")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function Sb(n){let e;return{c(){e=F("Style demo")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function xb(n){let e,t,s,o,l,r,i,a;return e=new Ge({props:{$$slots:{default:[yb]},$$scope:{ctx:n}}}),s=new Ge({props:{$$slots:{default:[Tb]},$$scope:{ctx:n}}}),l=new Ge({props:{$$slots:{default:[Eb]},$$scope:{ctx:n}}}),i=new Ge({props:{$$slots:{default:[Sb]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment),r=x(),L(i.$$.fragment)},m(c,u){P(e,c,u),E(c,t,u),P(s,c,u),E(c,o,u),P(l,c,u),E(c,r,u),P(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),l.$set(g);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||(v(e.$$.fragment,c),v(s.$$.fragment,c),v(l.$$.fragment,c),v(i.$$.fragment,c),a=!0)},o(c){y(e.$$.fragment,c),y(s.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!1},d(c){O(e,c),c&&T(t),O(s,c),c&&T(o),O(l,c),c&&T(r),O(i,c)}}}function Ab(n){let e,t;return e=new sb({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Cb(n){let e,t;return e=new db({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Nb(n){let e,t;return e=new _b({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Mb(n){let e,t;return e=new kb({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Rb(n){let e,t,s,o,l,r,i,a,c,u;return e=new wn({props:{$$slots:{default:[xb]},$$scope:{ctx:n}}}),s=new Ze({props:{$$slots:{default:[Ab]},$$scope:{ctx:n}}}),l=new Ze({props:{$$slots:{default:[Cb]},$$scope:{ctx:n}}}),i=new Ze({props:{$$slots:{default:[Nb]},$$scope:{ctx:n}}}),c=new Ze({props:{$$slots:{default:[Mb]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment),r=x(),L(i.$$.fragment),a=x(),L(c.$$.fragment)},m(f,d){P(e,f,d),E(f,t,d),P(s,f,d),E(f,o,d),P(l,f,d),E(f,r,d),P(i,f,d),E(f,a,d),P(c,f,d),u=!0},p(f,d){const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),e.$set(g);const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),s.$set(m);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),l.$set($);const A={};d&1&&(A.$$scope={dirty:d,ctx:f}),i.$set(A);const S={};d&1&&(S.$$scope={dirty:d,ctx:f}),c.$set(S)},i(f){u||(v(e.$$.fragment,f),v(s.$$.fragment,f),v(l.$$.fragment,f),v(i.$$.fragment,f),v(c.$$.fragment,f),u=!0)},o(f){y(e.$$.fragment,f),y(s.$$.fragment,f),y(l.$$.fragment,f),y(i.$$.fragment,f),y(c.$$.fragment,f),u=!1},d(f){O(e,f),f&&T(t),O(s,f),f&&T(o),O(l,f),f&&T(r),O(i,f),f&&T(a),O(c,f)}}}function Pb(n){let e,t,s,o,l,r,i,a,c,u,f,d,g;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[Rb]},$$scope:{ctx:n}}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),o=_("h1"),o.innerHTML=`Action to control <code>focusin</code> and <code>focusout</code><br/>for directive
    <code>use</code>`,l=x(),r=_("a"),i=_("img"),c=x(),u=_("ul"),u.innerHTML=`<li>no dependencies</li> 
    <li>correctly detects loss of focus with <code>Tab</code></li>`,f=x(),L(d.$$.fragment),p(o,"class","text-2xl"),p(i,"class","max-w-[4em]"),ct(i.src,a=gt)||p(i,"src",a),p(i,"alt","NPM logo"),p(r,"class","float-right"),p(r,"href","https://www.npmjs.com/package/@apsc/focus-action"),p(r,"target","_blank"),p(r,"rel","noreferrer"),p(u,"class","leading-6 mb-8"),p(e,"class","prose max-w-none my-4")},m(m,$){E(m,e,$),P(t,e,null),h(e,s),h(e,o),h(e,l),h(e,r),h(r,i),h(e,c),h(e,u),h(e,f),P(d,e,null),g=!0},p(m,[$]){const A={};$&1&&(A.$$scope={dirty:$,ctx:m}),d.$set(A)},i(m){g||(v(t.$$.fragment,m),v(d.$$.fragment,m),g=!0)},o(m){y(t.$$.fragment,m),y(d.$$.fragment,m),g=!1},d(m){m&&T(e),O(t),O(d)}}}function Ob(n){return Tn(document.title.replace(/(•).*$/,"$1 Focus action")),[]}let Lb=class extends Z{constructor(e){super(),G(this,e,Ob,Pb,W,{})}};const Xr=`# Action to call a function by keyboard shortcut for Svelte directive \`use\`

- allows to reduce keyboard event handling code
- dependence [\`keyboard-event-to-string\`](https://www.npmjs.com/package/keyboard-event-to-string)

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/?c=keyboard-shortcut-action)

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
`;function Db(n){let e,t,s;return t=new Sn({props:{source:Xr.slice(Xr.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),L(t.$$.fragment),p(e,"class","documentation")},m(o,l){E(o,e,l),P(t,e,null),s=!0},p:K,i(o){s||(v(t.$$.fragment,o),s=!0)},o(o){y(t.$$.fragment,o),s=!1},d(o){o&&T(e),O(t)}}}let Ib=class extends Z{constructor(e){super(),G(this,e,null,Db,W,{})}};const $a={alt:"Alt",cmd:"Cmd",ctrl:"Ctrl",shift:"Shift",joinWith:" + ",hideKey:"never"};let ro=$a;const Bb=()=>({alphanumeric:/^Key([A-Z01-9])$/,alpha:/^Key([A-Z])$/,always:/^Key(.*)$/,never:/^(.*)$/})[ro.hideKey];function zb(n){return{character:[16,17,18,91,93,224].indexOf(n.keyCode)!==-1?null:n.code.replace(Bb(),"$1"),modifiers:{cmd:n.metaKey,ctrl:n.ctrlKey,alt:n.altKey,shift:n.shiftKey}}}function Fb(n){const e=zb(n),s=Object.entries(e.modifiers).reduce((o,[l,r])=>(r&&o.push(ro[l]),o),[]);return e.character&&s.push(e.character),s}function Hb(n){return ro=Object.assign(Object.assign({},$a),n)}const jb=n=>Fb(n).join(ro.joinWith);Hb({joinWith:"+"});function Jo(n,e){let{event:t,capture:s=!1,passive:o=!1,preventDefault:l=!1,stopImmediatePropagation:r=!1,stopPropagation:i=!1,fns:a}=e;function c(u){const f=jb(u);typeof a[f]=="function"&&(l&&u.preventDefault(),i&&u.stopPropagation(),r&&u.stopImmediatePropagation(),a[f](u))}return n.addEventListener(t,c,{capture:s,passive:o}),{destroy(){n.removeEventListener(t,c,{capture:s})},update(u){const f=t!==u.event||s!==u.capture||o!==u.passive;f&&n.removeEventListener(t,c,{capture:s}),{event:t,capture:s=!1,passive:o=!1,preventDefault:l=!1,stopImmediatePropagation:r=!1,stopPropagation:i=!1,fns:a}=u,f&&n.addEventListener(t,c,{capture:s,passive:o})}}}function Qr(n,e,t){const s=n.slice();return s[18]=e[t],s[20]=t,s}function Yr(n){let e,t=n[18]+"",s,o,l,r;function i(){return n[17](n[20])}return{c(){e=_("div"),s=F(t),o=x(),p(e,"class","beverage-item svelte-12wr8dw"),ie(e,"active",n[20]===n[1])},m(a,c){E(a,e,c),h(e,s),h(e,o),l||(r=Y(e,"click",i),l=!0)},p(a,c){n=a,c&2&&ie(e,"active",n[20]===n[1])},d(a){a&&T(e),l=!1,r()}}}function Ub(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A=n[2],S=[];for(let k=0;k<A.length;k+=1)S[k]=Yr(Qr(n,A,k));return{c(){var k;e=_("div"),t=_("div"),t.textContent="Select a beverage",s=x(),o=_("div"),l=_("input"),a=x(),c=_("button"),c.textContent="Reset",u=x(),f=_("div"),f.innerHTML=`Use the navigation buttons
    <code>ArrowUp</code>,
    <code>ArrowDown</code>,
    <code>ArrowLeft</code>,
    <code>ArrowRight</code>,
    <code>PageUp</code>,
    <code>PageDown</code>,
    <code>Home</code>,
    <code>End</code>,
    <code>Ctrl+Home</code>,
    <code>Ctrl+End</code> to select a drink`,d=x(),g=_("div");for(let M=0;M<S.length;M+=1)S[M].c();p(l,"type","text"),p(l,"class","input grow"),l.readOnly=!0,l.value=r=(k=n[2][n[1]])!=null?k:"",p(c,"type","button"),p(c,"class","input"),p(o,"class","flex"),p(f,"class","block text-sm mt-1 text-gray-500"),p(e,"class","my-4"),p(g,"class","columns-3 gap-3 border-2 border-gray-200 rounded-md p-2")},m(k,M){E(k,e,M),h(e,t),h(e,s),h(e,o),h(o,l),n[5](l),h(o,a),h(o,c),h(e,u),h(e,f),E(k,d,M),E(k,g,M);for(let R=0;R<S.length;R+=1)S[R].m(g,null);m||($=[Ye(i=Jo.call(null,l,{event:"keydown",preventDefault:!0,fns:{ArrowUp:n[6],ArrowDown:n[7],ArrowLeft:n[8],ArrowRight:n[9],PageUp:n[10],PageDown:n[11],Home:n[12],End:n[13],"Ctrl+Home":n[14],"Ctrl+End":n[15]}})),Y(c,"click",n[16])],m=!0)},p(k,[M]){var R;if(M&2&&r!==(r=(R=k[2][k[1]])!=null?R:"")&&l.value!==r&&(l.value=r),i&&De(i.update)&&M&2&&i.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:k[6],ArrowDown:k[7],ArrowLeft:k[8],ArrowRight:k[9],PageUp:k[10],PageDown:k[11],Home:k[12],End:k[13],"Ctrl+Home":k[14],"Ctrl+End":k[15]}}),M&7){A=k[2];let N;for(N=0;N<A.length;N+=1){const w=Qr(k,A,N);S[N]?S[N].p(w,M):(S[N]=Yr(w),S[N].c(),S[N].m(g,null))}for(;N<S.length;N+=1)S[N].d(1);S.length=A.length}},i:K,o:K,d(k){k&&T(e),n[5](null),k&&T(d),k&&T(g),He(S,k),m=!1,Ae($)}}}function qb(n,e,t){const s=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asiático","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","Rüdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"],o=Math.floor(s.length/3);let l;bn(()=>l.focus());let r=NaN;function i(N){if(isFinite(r)){let w=r+N;w<0?w=0:w>=s.length&&(w=s.length-1),t(1,r=w)}else t(1,r=0)}function a(N){Xe[N?"unshift":"push"](()=>{l=N,t(0,l)})}return[l,r,s,o,i,a,()=>i(-1),()=>i(1),()=>i(-o),()=>i(o),()=>i(-((r||0)%o)),()=>i(o-1-(r||0)%o),()=>t(1,r=(r||0)%o),()=>t(1,r=s.length-(o-(r||0)%o)),()=>t(1,r=0),()=>t(1,r=s.length-1),()=>{t(1,r=NaN),l.focus()},N=>{t(1,r=N),l.focus()}]}let Kb=class extends Z{constructor(e){super(),G(this,e,qb,Ub,W,{})}};function Wb(n){let e,t,s,o,l;return t=new Kb({}),o=new dt({props:{code:`<script lang="ts">
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
          PageDown: () => goToBeverage(beveragePerColumn - 1 - ((active || 0) % beveragePerColumn)),
          Home: () => (active = (active || 0) % beveragePerColumn),
          End: () =>
            (active = beverages.length - (beveragePerColumn - ((active || 0) % beveragePerColumn))),
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
  <div class="block text-sm mt-1 text-gray-500">
    Use the navigation buttons
    <code>ArrowUp</code>,
    <code>ArrowDown</code>,
    <code>ArrowLeft</code>,
    <code>ArrowRight</code>,
    <code>PageUp</code>,
    <code>PageDown</code>,
    <code>Home</code>,
    <code>End</code>,
    <code>Ctrl+Home</code>,
    <code>Ctrl+End</code> to select a drink
  </div>
</div>
<div class="columns-3 gap-3 border-2 border-gray-200  rounded-md p-2">
  {#each beverages as b, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
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

<style lang="postcss">
  .beverage-item {
    @apply px-4 py-1 rounded-md cursor-pointer;
  }
  .beverage-item.active {
    @apply bg-blue-600 text-white;
  }
</style>`}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),L(o.$$.fragment),p(e,"class","prose max-w-none my-4")},m(r,i){E(r,e,i),P(t,e,null),h(e,s),P(o,e,null),l=!0},p:K,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(o.$$.fragment,r),l=!1},d(r){r&&T(e),O(t),O(o)}}}let Gb=class extends Z{constructor(e){super(),G(this,e,null,Wb,W,{})}};function Zb(n){let e;return{c(){e=F("API")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function Xb(n){let e;return{c(){e=F("Navigation demo")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function Qb(n){let e,t,s,o;return e=new Ge({props:{$$slots:{default:[Zb]},$$scope:{ctx:n}}}),s=new Ge({props:{$$slots:{default:[Xb]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment)},m(l,r){P(e,l,r),E(l,t,r),P(s,l,r),o=!0},p(l,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:l}),e.$set(i);const a={};r&2&&(a.$$scope={dirty:r,ctx:l}),s.$set(a)},i(l){o||(v(e.$$.fragment,l),v(s.$$.fragment,l),o=!0)},o(l){y(e.$$.fragment,l),y(s.$$.fragment,l),o=!1},d(l){O(e,l),l&&T(t),O(s,l)}}}function Yb(n){let e,t;return e=new Ib({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Jr(n){let e,t;return e=new Gb({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Jb(n){let e,t,s=n[0]&&Jr();return{c(){s&&s.c(),e=Ee()},m(o,l){s&&s.m(o,l),E(o,e,l),t=!0},p(o,l){o[0]?s?l&1&&v(s,1):(s=Jr(),s.c(),v(s,1),s.m(e.parentNode,e)):s&&(me(),y(s,1,1,()=>{s=null}),_e())},i(o){t||(v(s),t=!0)},o(o){y(s),t=!1},d(o){s&&s.d(o),o&&T(e)}}}function Vb(n){let e,t,s,o,l,r;return e=new wn({props:{$$slots:{default:[Qb]},$$scope:{ctx:n}}}),s=new Ze({props:{$$slots:{default:[Yb]},$$scope:{ctx:n}}}),l=new Ze({props:{$$slots:{default:[Jb,({active:i})=>({0:i}),({active:i})=>i?1:0]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment)},m(i,a){P(e,i,a),E(i,t,a),P(s,i,a),E(i,o,a),P(l,i,a),r=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:i}),s.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(v(e.$$.fragment,i),v(s.$$.fragment,i),v(l.$$.fragment,i),r=!0)},o(i){y(e.$$.fragment,i),y(s.$$.fragment,i),y(l.$$.fragment,i),r=!1},d(i){O(e,i),i&&T(t),O(s,i),i&&T(o),O(l,i)}}}function e1(n){let e,t,s,o,l,r,i,a,c,u,f,d,g;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[Vb]},$$scope:{ctx:n}}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),o=_("h1"),o.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",l=x(),r=_("a"),i=_("img"),c=x(),u=_("ul"),u.innerHTML=`<li>allows to reduce keyboard event handling code</li> 
    <li>dependence <a href="https://www.npmjs.com/package/keyboard-event-to-string" target="_blank" rel="noreferrer">keyboard-event-to-string</a></li>`,f=x(),L(d.$$.fragment),p(o,"class","text-2xl"),p(i,"class","max-w-[4em]"),ct(i.src,a=gt)||p(i,"src",a),p(i,"alt","NPM logo"),p(r,"class","float-right"),p(r,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),p(r,"target","_blank"),p(r,"rel","noreferrer"),p(u,"class","leading-6 mb-8"),p(e,"class","prose max-w-none my-4")},m(m,$){E(m,e,$),P(t,e,null),h(e,s),h(e,o),h(e,l),h(e,r),h(r,i),h(e,c),h(e,u),h(e,f),P(d,e,null),g=!0},p(m,[$]){const A={};$&2&&(A.$$scope={dirty:$,ctx:m}),d.$set(A)},i(m){g||(v(t.$$.fragment,m),v(d.$$.fragment,m),g=!0)},o(m){y(t.$$.fragment,m),y(d.$$.fragment,m),g=!1},d(m){m&&T(e),O(t),O(d)}}}function t1(n){return Tn(document.title.replace(/(•).*$/,"$1 Keyboard shortcut action")),[]}let n1=class extends Z{constructor(e){super(),G(this,e,t1,e1,W,{})}};const Vr=`# Action to scroll the child to parent viewport Svelte directive \`use\`

- no dependencies
- useful for components like dropdown
- exports independent functions for vertical and horizontal scrolling of elements

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/?c=scroll-child-action)

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
`;function s1(n){let e,t,s;return t=new Sn({props:{source:Vr.slice(Vr.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),L(t.$$.fragment),p(e,"class","documentation")},m(o,l){E(o,e,l),P(t,e,null),s=!0},p:K,i(o){s||(v(t.$$.fragment,o),s=!0)},o(o){y(t.$$.fragment,o),s=!1},d(o){o&&T(e),O(t)}}}class o1 extends Z{constructor(e){super(),G(this,e,null,s1,W,{})}}const mt=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asiático","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","Rüdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"];function ei(n,e,t){const s=n.slice();return s[10]=e[t],s[12]=t,s}function ti(n){let e,t=n[10]+"",s,o,l,r,i;function a(){return n[9](n[12])}return{c(){e=_("div"),s=F(t),o=x(),p(e,"class","beverage-item svelte-18rp3xo"),ie(e,"active",n[12]===n[1])},m(c,u){E(c,e,u),h(e,s),h(e,o),r||(i=[Ye(l=Io.call(null,e,n[1]===n[12]?{y:!0}:!1)),Y(e,"click",a)],r=!0)},p(c,u){n=c,l&&De(l.update)&&u&2&&l.update.call(null,n[1]===n[12]?{y:!0}:!1),u&2&&ie(e,"active",n[12]===n[1])},d(c){c&&T(e),r=!1,Ae(i)}}}function l1(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A=mt,S=[];for(let k=0;k<A.length;k+=1)S[k]=ti(ei(n,A,k));return{c(){var k;e=_("div"),t=_("div"),t.textContent="Select a beverage",s=x(),o=_("div"),o.innerHTML=`use the navigation buttons
    <code>ArrowUp</code>,
    <code>ArrowDown</code>,
    <code>Home</code>,
    <code>End</code> to select a drink`,l=x(),r=_("div"),i=_("input"),u=x(),f=_("button"),f.textContent="Reset",d=x(),g=_("div");for(let M=0;M<S.length;M+=1)S[M].c();p(o,"class","text-sm leading-4 text-gray-500"),p(i,"type","text"),p(i,"class","input grow"),i.readOnly=!0,i.value=a=(k=mt[n[1]])!=null?k:"",p(f,"type","button"),p(f,"class","input ml-2"),p(r,"class","mt-2 flex"),p(g,"class","border-2 border-gray-200 rounded-md p-2 mt-2 w-48 max-h-[15.25rem] overflow-y-auto shadow-md scroll-smooth"),p(e,"class","my-2 mx-auto w-96")},m(k,M){E(k,e,M),h(e,t),h(e,s),h(e,o),h(e,l),h(e,r),h(r,i),n[3](i),h(r,u),h(r,f),h(e,d),h(e,g);for(let R=0;R<S.length;R+=1)S[R].m(g,null);m||($=[Ye(c=Jo.call(null,i,{event:"keydown",preventDefault:!0,fns:{ArrowUp:n[4],ArrowDown:n[5],Home:n[6],End:n[7]}})),Y(f,"click",n[8])],m=!0)},p(k,[M]){var R;if(M&2&&a!==(a=(R=mt[k[1]])!=null?R:"")&&i.value!==a&&(i.value=a),c&&De(c.update)&&M&2&&c.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:k[4],ArrowDown:k[5],Home:k[6],End:k[7]}}),M&3){A=mt;let N;for(N=0;N<A.length;N+=1){const w=ei(k,A,N);S[N]?S[N].p(w,M):(S[N]=ti(w),S[N].c(),S[N].m(g,null))}for(;N<S.length;N+=1)S[N].d(1);S.length=A.length}},i:K,o:K,d(k){k&&T(e),n[3](null),He(S,k),m=!1,Ae($)}}}function r1(n,e,t){let s;bn(()=>s.focus());let o=NaN;function l(g){if(isFinite(o)){let m=o+g;m<0?m=0:m>=mt.length&&(m=mt.length-1),t(1,o=m)}else t(1,o=0)}function r(g){Xe[g?"unshift":"push"](()=>{s=g,t(0,s)})}return[s,o,l,r,()=>l(-1),()=>l(1),()=>t(1,o=0),()=>t(1,o=mt.length-1),()=>{t(1,o=NaN),s.focus()},g=>{t(1,o=g),s.focus()}]}let i1=class extends Z{constructor(e){super(),G(this,e,r1,l1,W,{})}};function a1(n){let e,t,s,o,l,r,i;return o=new i1({}),r=new dt({props:{code:`<script lang="ts">
  import useKeyboardShortcut from '@apsc/keyboard-shortcut-action';
  import useScrollChild from '@apsc/scroll-child-action';
  import { onMount } from 'svelte';
  import { beverages } from '../beverages';

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

<div class="my-2 mx-auto w-96">
  <div>Select a beverage</div>
  <div class="text-sm leading-4 text-gray-500">
    use the navigation buttons
    <code>ArrowUp</code>,
    <code>ArrowDown</code>,
    <code>Home</code>,
    <code>End</code> to select a drink
  </div>
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
      <!-- svelte-ignore a11y-click-events-have-key-events -->
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/?c=keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',s=x(),L(o.$$.fragment),l=x(),L(r.$$.fragment),p(t,"class","w-fit mx-auto mb-4"),p(e,"class","prose max-w-none my-4")},m(a,c){E(a,e,c),h(e,t),h(e,s),P(o,e,null),h(e,l),P(r,e,null),i=!0},p:K,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){y(o.$$.fragment,a),y(r.$$.fragment,a),i=!1},d(a){a&&T(e),O(o),O(r)}}}let c1=class extends Z{constructor(e){super(),G(this,e,null,a1,W,{})}};function ni(n,e,t){const s=n.slice();return s[10]=e[t],s[12]=t,s}function si(n){let e,t=n[10]+"",s,o,l,r,i;function a(){return n[9](n[12])}return{c(){e=_("div"),s=F(t),o=x(),p(e,"class","beverage-item svelte-2m30if"),ie(e,"active",n[12]===n[1])},m(c,u){E(c,e,u),h(e,s),h(e,o),r||(i=[Ye(l=Io.call(null,e,n[1]===n[12]?{x:!0}:!1)),Y(e,"click",a)],r=!0)},p(c,u){n=c,l&&De(l.update)&&u&2&&l.update.call(null,n[1]===n[12]?{x:!0}:!1),u&2&&ie(e,"active",n[12]===n[1])},d(c){c&&T(e),r=!1,Ae(i)}}}function u1(n){let e,t,s,o,l,r,i,a,c,u,f,d,g,m,$,A,S=mt,k=[];for(let M=0;M<S.length;M+=1)k[M]=si(ni(n,S,M));return{c(){var M;e=_("div"),t=_("div"),s=_("div"),s.textContent="Select a beverage",o=x(),l=_("div"),l.innerHTML=`use the navigation buttons
      <code>ArrowLeft</code>,
      <code>ArrowRight</code>,
      <code>Home</code>,
      <code>End</code> to select a drink`,r=x(),i=_("div"),a=_("input"),f=x(),d=_("button"),d.textContent="Reset",g=x(),m=_("div");for(let R=0;R<k.length;R+=1)k[R].c();p(l,"class","text-sm leading-4 text-gray-500"),p(a,"type","text"),p(a,"class","input grow"),a.readOnly=!0,a.value=c=(M=mt[n[1]])!=null?M:"",p(d,"type","button"),p(d,"class","input ml-2"),p(i,"class","mt-2 flex"),p(t,"class","mx-auto w-96"),p(m,"class","border-2 border-gray-200 rounded-md p-2 mt-2 whitespace-nowrap max-w-full overflow-x-auto shadow-md scroll-smooth"),p(e,"class","my-2")},m(M,R){E(M,e,R),h(e,t),h(t,s),h(t,o),h(t,l),h(t,r),h(t,i),h(i,a),n[3](a),h(i,f),h(i,d),h(e,g),h(e,m);for(let N=0;N<k.length;N+=1)k[N].m(m,null);$||(A=[Ye(u=Jo.call(null,a,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:n[4],ArrowRight:n[5],Home:n[6],End:n[7]}})),Y(d,"click",n[8])],$=!0)},p(M,[R]){var N;if(R&2&&c!==(c=(N=mt[M[1]])!=null?N:"")&&a.value!==c&&(a.value=c),u&&De(u.update)&&R&2&&u.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:M[4],ArrowRight:M[5],Home:M[6],End:M[7]}}),R&3){S=mt;let w;for(w=0;w<S.length;w+=1){const D=ni(M,S,w);k[w]?k[w].p(D,R):(k[w]=si(D),k[w].c(),k[w].m(m,null))}for(;w<k.length;w+=1)k[w].d(1);k.length=S.length}},i:K,o:K,d(M){M&&T(e),n[3](null),He(k,M),$=!1,Ae(A)}}}function f1(n,e,t){let s;bn(()=>s.focus());let o=NaN;function l(g){if(isFinite(o)){let m=o+g;m<0?m=0:m>=mt.length&&(m=mt.length-1),t(1,o=m)}else t(1,o=0)}function r(g){Xe[g?"unshift":"push"](()=>{s=g,t(0,s)})}return[s,o,l,r,()=>l(-1),()=>l(1),()=>t(1,o=0),()=>t(1,o=mt.length-1),()=>{t(1,o=NaN),s.focus()},g=>{t(1,o=g),s.focus()}]}class d1 extends Z{constructor(e){super(),G(this,e,f1,u1,W,{})}}function p1(n){let e,t,s,o,l,r,i;return o=new d1({}),r=new dt({props:{code:`<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import 'svelte-highlight/styles/atom-one-dark.css';

  import useKeyboardShortcut from '@apsc/keyboard-shortcut-action';
  import useScrollChild from '@apsc/scroll-child-action';
  import { onMount } from 'svelte';
  import { beverages } from '../beverages';

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

<div class="my-2">
  <div class="mx-auto w-96">
    <div>Select a beverage</div>
    <div class="text-sm leading-4 text-gray-500">
      use the navigation buttons
      <code>ArrowLeft</code>,
      <code>ArrowRight</code>,
      <code>Home</code>,
      <code>End</code> to select a drink
    </div>
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
      <!-- svelte-ignore a11y-click-events-have-key-events -->
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

<style lang="postcss">
  .beverage-item {
    @apply inline-block max-w-min whitespace-normal text-center align-top leading-5 px-4 py-1 rounded-md cursor-pointer;
  }
  .beverage-item.active {
    @apply bg-blue-600 text-white;
  }
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/?c=keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',s=x(),L(o.$$.fragment),l=x(),L(r.$$.fragment),p(t,"class","w-fit mx-auto mb-4"),p(e,"class","prose max-w-none my-4")},m(a,c){E(a,e,c),h(e,t),h(e,s),P(o,e,null),h(e,l),P(r,e,null),i=!0},p:K,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){y(o.$$.fragment,a),y(r.$$.fragment,a),i=!1},d(a){a&&T(e),O(o),O(r)}}}class h1 extends Z{constructor(e){super(),G(this,e,null,p1,W,{})}}function g1(n){let e;return{c(){e=F("API")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function m1(n){let e;return{c(){e=F("Vertical demo")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function _1(n){let e;return{c(){e=F("Horizontal demo")},m(t,s){E(t,e,s)},d(t){t&&T(e)}}}function b1(n){let e,t,s,o,l,r;return e=new Ge({props:{$$slots:{default:[g1]},$$scope:{ctx:n}}}),s=new Ge({props:{$$slots:{default:[m1]},$$scope:{ctx:n}}}),l=new Ge({props:{$$slots:{default:[_1]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment)},m(i,a){P(e,i,a),E(i,t,a),P(s,i,a),E(i,o,a),P(l,i,a),r=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:i}),s.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(v(e.$$.fragment,i),v(s.$$.fragment,i),v(l.$$.fragment,i),r=!0)},o(i){y(e.$$.fragment,i),y(s.$$.fragment,i),y(l.$$.fragment,i),r=!1},d(i){O(e,i),i&&T(t),O(s,i),i&&T(o),O(l,i)}}}function $1(n){let e,t;return e=new o1({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function oi(n){let e,t;return e=new c1({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function v1(n){let e,t,s=n[0]&&oi();return{c(){s&&s.c(),e=Ee()},m(o,l){s&&s.m(o,l),E(o,e,l),t=!0},p(o,l){o[0]?s?l&1&&v(s,1):(s=oi(),s.c(),v(s,1),s.m(e.parentNode,e)):s&&(me(),y(s,1,1,()=>{s=null}),_e())},i(o){t||(v(s),t=!0)},o(o){y(s),t=!1},d(o){s&&s.d(o),o&&T(e)}}}function li(n){let e,t;return e=new h1({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function w1(n){let e,t,s=n[0]&&li();return{c(){s&&s.c(),e=Ee()},m(o,l){s&&s.m(o,l),E(o,e,l),t=!0},p(o,l){o[0]?s?l&1&&v(s,1):(s=li(),s.c(),v(s,1),s.m(e.parentNode,e)):s&&(me(),y(s,1,1,()=>{s=null}),_e())},i(o){t||(v(s),t=!0)},o(o){y(s),t=!1},d(o){s&&s.d(o),o&&T(e)}}}function k1(n){let e,t,s,o,l,r,i,a;return e=new wn({props:{$$slots:{default:[b1]},$$scope:{ctx:n}}}),s=new Ze({props:{$$slots:{default:[$1]},$$scope:{ctx:n}}}),l=new Ze({props:{$$slots:{default:[v1,({active:c})=>({0:c}),({active:c})=>c?1:0]},$$scope:{ctx:n}}}),i=new Ze({props:{$$slots:{default:[w1,({active:c})=>({0:c}),({active:c})=>c?1:0]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=x(),L(s.$$.fragment),o=x(),L(l.$$.fragment),r=x(),L(i.$$.fragment)},m(c,u){P(e,c,u),E(c,t,u),P(s,c,u),E(c,o,u),P(l,c,u),E(c,r,u),P(i,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&2&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const g={};u&3&&(g.$$scope={dirty:u,ctx:c}),l.$set(g);const m={};u&3&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||(v(e.$$.fragment,c),v(s.$$.fragment,c),v(l.$$.fragment,c),v(i.$$.fragment,c),a=!0)},o(c){y(e.$$.fragment,c),y(s.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!1},d(c){O(e,c),c&&T(t),O(s,c),c&&T(o),O(l,c),c&&T(r),O(i,c)}}}function y1(n){let e,t,s,o,l,r,i,a,c,u,f,d,g;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[k1]},$$scope:{ctx:n}}}),{c(){e=_("section"),L(t.$$.fragment),s=x(),o=_("h1"),o.innerHTML="Action to scroll the child to parent viewport Svelte directive <code>use</code>",l=x(),r=_("a"),i=_("img"),c=x(),u=_("ul"),u.innerHTML=`<li>no dependencies</li> 
    <li>useful for components like dropdown</li> 
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>`,f=x(),L(d.$$.fragment),p(o,"class","text-2xl"),p(i,"class","max-w-[4em]"),ct(i.src,a=gt)||p(i,"src",a),p(i,"alt","NPM logo"),p(r,"class","float-right"),p(r,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),p(r,"target","_blank"),p(r,"rel","noreferrer"),p(u,"class","leading-6 mb-8"),p(e,"class","prose max-w-none my-4")},m(m,$){E(m,e,$),P(t,e,null),h(e,s),h(e,o),h(e,l),h(e,r),h(r,i),h(e,c),h(e,u),h(e,f),P(d,e,null),g=!0},p(m,[$]){const A={};$&2&&(A.$$scope={dirty:$,ctx:m}),d.$set(A)},i(m){g||(v(t.$$.fragment,m),v(d.$$.fragment,m),g=!0)},o(m){y(t.$$.fragment,m),y(d.$$.fragment,m),g=!1},d(m){m&&T(e),O(t),O(d)}}}function T1(n){return Tn(document.title.replace(/(•).*$/,"$1 Scroll child action")),[]}class E1 extends Z{constructor(e){super(),G(this,e,T1,y1,W,{})}}function S1(n){let e;return{c(){e=_("h1"),e.textContent="Not found",p(e,"class","font-bold my-4 pb-2 text-3xl text-center")},m(t,s){E(t,e,s)},i:K,o:K,d(t){t&&T(e)}}}function x1(n){let e,t;return e=new E1({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function A1(n){let e,t;return e=new n1({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function C1(n){let e,t;return e=new Lb({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function N1(n){let e,t;return e=new tb({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function M1(n){let e,t;return e=new R_({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function R1(n){let e,t;return e=new Hg({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function P1(n){let e,t;return e=new pg({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function O1(n){let e,t;return e=new uu({}),{c(){L(e.$$.fragment)},m(s,o){P(e,s,o),t=!0},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function L1(n){let e,t,s,o,l;const r=[O1,P1,R1,M1,N1,C1,A1,x1,S1],i=[];function a(c,u){return u&1&&(t=null),t==null&&(t=c[0].toString()===""),t?0:c[0].params.c==="tabs"?1:c[0].params.c==="glob-notify"?2:c[0].params.c==="color"?3:c[0].params.c==="floating-ui-action"?4:c[0].params.c==="focus-action"?5:c[0].params.c==="keyboard-shortcut-action"?6:c[0].params.c==="scroll-child-action"?7:8}return s=a(n,-1),o=i[s]=r[s](n),{c(){e=_("main"),o.c()},m(c,u){E(c,e,u),i[s].m(e,null),l=!0},p(c,[u]){let f=s;s=a(c,u),s!==f&&(me(),y(i[f],1,1,()=>{i[f]=null}),_e(),o=i[s],o||(o=i[s]=r[s](c),o.c()),v(o,1),o.m(e,null))},i(c){l||(v(o),l=!0)},o(c){y(o),l=!1},d(c){c&&T(e),i[s].d()}}}function D1(n,e,t){let s;return Qt(n,ls,o=>t(0,s=o)),[s]}class I1 extends Z{constructor(e){super(),G(this,e,D1,L1,W,{})}}new I1({target:document.getElementById("app")});
