var Rc=Object.defineProperty,Pc=Object.defineProperties;var Oc=Object.getOwnPropertyDescriptors;var Ss=Object.getOwnPropertySymbols;var co=Object.prototype.hasOwnProperty,uo=Object.prototype.propertyIsEnumerable;var ml=(s,e,t)=>e in s?Rc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,tt=(s,e)=>{for(var t in e||(e={}))co.call(e,t)&&ml(s,t,e[t]);if(Ss)for(var t of Ss(e))uo.call(e,t)&&ml(s,t,e[t]);return s},Pn=(s,e)=>Pc(s,Oc(e));var gl=(s,e)=>{var t={};for(var n in s)co.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&Ss)for(var n of Ss(s))e.indexOf(n)<0&&uo.call(s,n)&&(t[n]=s[n]);return t};var Zt=(s,e,t)=>(ml(s,typeof e!="symbol"?e+"":e,t),t);var mt=(s,e,t)=>new Promise((n,l)=>{var o=a=>{try{i(t.next(a))}catch(c){l(c)}},r=a=>{try{i(t.throw(a))}catch(c){l(c)}},i=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,r);i((t=t.apply(s,e)).next())});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function K(){}const pi=s=>s;function St(s,e){for(const t in e)s[t]=e[t];return s}function Lc(s){return!!s&&(typeof s=="object"||typeof s=="function")&&typeof s.then=="function"}function hi(s){return s()}function fo(){return Object.create(null)}function Te(s){s.forEach(hi)}function Oe(s){return typeof s=="function"}function q(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}let As;function ft(s,e){return As||(As=document.createElement("a")),As.href=e,s===As.href}function Dc(s){return Object.keys(s).length===0}function mi(s,...e){if(s==null)return K;const t=s.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Jt(s,e,t){s.$$.on_destroy.push(mi(e,t))}function Ce(s,e,t,n){if(s){const l=gi(s,e,t,n);return s[0](l)}}function gi(s,e,t,n){return s[1]&&n?St(t.ctx.slice(),s[1](n(e))):t.ctx}function Ne(s,e,t,n){if(s[2]&&n){const l=s[2](n(t));if(e.dirty===void 0)return l;if(typeof l=="object"){const o=[],r=Math.max(e.dirty.length,l.length);for(let i=0;i<r;i+=1)o[i]=e.dirty[i]|l[i];return o}return e.dirty|l}return e.dirty}function Me(s,e,t,n,l,o){if(l){const r=gi(e,t,n,o);s.p(r,l)}}function Re(s){if(s.ctx.length>32){const e=[],t=s.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function _i(s){const e={};for(const t in s)t[0]!=="$"&&(e[t]=s[t]);return e}function Bs(s,e){const t={};e=new Set(e);for(const n in s)!e.has(n)&&n[0]!=="$"&&(t[n]=s[n]);return t}function On(s){return s==null?"":s}function Ic(s,e,t){return s.set(t),e}function Ge(s){return s&&Oe(s.destroy)?s.destroy:K}const bi=typeof window!="undefined";let Bc=bi?()=>window.performance.now():()=>Date.now(),Nl=bi?s=>requestAnimationFrame(s):K;const zn=new Set;function $i(s){zn.forEach(e=>{e.c(s)||(zn.delete(e),e.f())}),zn.size!==0&&Nl($i)}function zc(s){let e;return zn.size===0&&Nl($i),{promise:new Promise(t=>{zn.add(e={c:s,f:t})}),abort(){zn.delete(e)}}}function m(s,e){s.appendChild(e)}function vi(s){if(!s)return document;const e=s.getRootNode?s.getRootNode():s.ownerDocument;return e&&e.host?e:s.ownerDocument}function Hc(s){const e=_("style");return Fc(vi(s),e),e.sheet}function Fc(s,e){return m(s.head||s,e),e.sheet}function x(s,e,t){s.insertBefore(e,t||null)}function E(s){s.parentNode&&s.parentNode.removeChild(s)}function He(s,e){for(let t=0;t<s.length;t+=1)s[t]&&s[t].d(e)}function _(s){return document.createElement(s)}function jc(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function H(s){return document.createTextNode(s)}function A(){return H(" ")}function Ee(){return H("")}function J(s,e,t,n){return s.addEventListener(e,t,n),()=>s.removeEventListener(e,t,n)}function ns(s){return function(e){return e.preventDefault(),s.call(this,e)}}function h(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function po(s,e){const t=Object.getOwnPropertyDescriptors(s.__proto__);for(const n in e)e[n]==null?s.removeAttribute(n):n==="style"?s.style.cssText=e[n]:n==="__value"?s.value=s[n]=e[n]:t[n]&&t[n].set?s[n]=e[n]:h(s,n,e[n])}function it(s){return s===""?null:+s}function Uc(s){return Array.from(s.childNodes)}function et(s,e){e=""+e,s.wholeText!==e&&(s.data=e)}function Ve(s,e){s.value=e==null?"":e}function nt(s,e,t,n){t===null?s.style.removeProperty(e):s.style.setProperty(e,t,n?"important":"")}function Lt(s,e){for(let t=0;t<s.options.length;t+=1){const n=s.options[t];if(n.__value===e){n.selected=!0;return}}s.selectedIndex=-1}function ss(s){const e=s.querySelector(":checked")||s.options[0];return e&&e.__value}function re(s,e,t){s.classList[t?"add":"remove"](e)}function wi(s,e,{bubbles:t=!1,cancelable:n=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(s,t,n,e),l}class ki{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=jc(t.nodeName):this.e=_(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)x(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}function ze(s,e){return new s(e)}const zs=new Map;let Hs=0;function qc(s){let e=5381,t=s.length;for(;t--;)e=(e<<5)-e^s.charCodeAt(t);return e>>>0}function Kc(s,e){const t={stylesheet:Hc(e),rules:{}};return zs.set(s,t),t}function ho(s,e,t,n,l,o,r,i=0){const a=16.666/n;let c=`{
`;for(let C=0;C<=1;C+=a){const k=e+(t-e)*o(C);c+=C*100+`%{${r(k,1-k)}}
`}const u=c+`100% {${r(t,1-t)}}
}`,f=`__svelte_${qc(u)}_${i}`,d=vi(s),{stylesheet:p,rules:g}=zs.get(d)||Kc(d,s);g[f]||(g[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const $=s.style.animation||"";return s.style.animation=`${$?`${$}, `:""}${f} ${n}ms linear ${l}ms 1 both`,Hs+=1,f}function Wc(s,e){const t=(s.style.animation||"").split(", "),n=t.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),l=t.length-n.length;l&&(s.style.animation=n.join(", "),Hs-=l,Hs||Gc())}function Gc(){Nl(()=>{Hs||(zs.forEach(s=>{const{ownerNode:e}=s.stylesheet;e&&E(e)}),zs.clear())})}let ls;function Qt(s){ls=s}function _n(){if(!ls)throw new Error("Function called outside component initialization");return ls}function bn(s){_n().$$.on_mount.push(s)}function Zc(s){_n().$$.after_update.push(s)}function Qs(s){_n().$$.on_destroy.push(s)}function Ml(){const s=_n();return(e,t,{cancelable:n=!1}={})=>{const l=s.$$.callbacks[e];if(l){const o=wi(e,t,{cancelable:n});return l.slice().forEach(r=>{r.call(s,o)}),!o.defaultPrevented}return!0}}function yi(s,e){return _n().$$.context.set(s,e),e}function Xs(s){return _n().$$.context.get(s)}const Bn=[],je=[],Ps=[],El=[],Ti=Promise.resolve();let xl=!1;function Ei(){xl||(xl=!0,Ti.then(Pl))}function Rl(){return Ei(),Ti}function $t(s){Ps.push(s)}function Rt(s){El.push(s)}const _l=new Set;let Ln=0;function Pl(){if(Ln!==0)return;const s=ls;do{try{for(;Ln<Bn.length;){const e=Bn[Ln];Ln++,Qt(e),Qc(e.$$)}}catch(e){throw Bn.length=0,Ln=0,e}for(Qt(null),Bn.length=0,Ln=0;je.length;)je.pop()();for(let e=0;e<Ps.length;e+=1){const t=Ps[e];_l.has(t)||(_l.add(t),t())}Ps.length=0}while(Bn.length);for(;El.length;)El.pop()();xl=!1,_l.clear(),Qt(s)}function Qc(s){if(s.fragment!==null){s.update(),Te(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach($t)}}let Yn;function Xc(){return Yn||(Yn=Promise.resolve(),Yn.then(()=>{Yn=null})),Yn}function bl(s,e,t){s.dispatchEvent(wi(`${e?"intro":"outro"}${t}`))}const Os=new Set;let Xt;function he(){Xt={r:0,c:[],p:Xt}}function me(){Xt.r||Te(Xt.c),Xt=Xt.p}function w(s,e){s&&s.i&&(Os.delete(s),s.i(e))}function T(s,e,t,n){if(s&&s.o){if(Os.has(s))return;Os.add(s),Xt.c.push(()=>{Os.delete(s),n&&(t&&s.d(1),n())}),s.o(e)}else n&&n()}const Jc={duration:0};function rn(s,e,t,n){const l={direction:"both"};let o=e(s,t,l),r=n?0:1,i=null,a=null,c=null;function u(){c&&Wc(s,c)}function f(p,g){const $=p.b-r;return g*=Math.abs($),{a:r,b:p.b,d:$,duration:g,start:p.start,end:p.start+g,group:p.group}}function d(p){const{delay:g=0,duration:$=300,easing:C=pi,tick:k=K,css:v}=o||Jc,S={start:Bc()+g,b:p};p||(S.group=Xt,Xt.r+=1),i||a?a=S:(v&&(u(),c=ho(s,r,p,$,g,C,v)),p&&k(0,1),i=f(S,$),$t(()=>bl(s,p,"start")),zc(R=>{if(a&&R>a.start&&(i=f(a,$),a=null,bl(s,i.b,"start"),v&&(u(),c=ho(s,r,i.b,i.duration,0,C,o.css))),i){if(R>=i.end)k(r=i.b,1-r),bl(s,i.b,"end"),a||(i.b?u():--i.group.r||Te(i.group.c)),i=null;else if(R>=i.start){const N=R-i.start;r=i.a+i.d*C(N/i.duration),k(r,1-r)}}return!!(i||a)}))}return{run(p){Oe(o)?Xc().then(()=>{o=o(l),d(p)}):d(p)},end(){u(),i=a=null}}}function Fs(s,e){const t=e.token={};function n(l,o,r,i){if(e.token!==t)return;e.resolved=i;let a=e.ctx;r!==void 0&&(a=a.slice(),a[r]=i);const c=l&&(e.current=l)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==o&&f&&(he(),T(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),me())}):e.block.d(1),c.c(),w(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[o]=c),u&&Pl()}if(Lc(s)){const l=_n();if(s.then(o=>{Qt(l),n(e.then,1,e.value,o),Qt(null)},o=>{if(Qt(l),n(e.catch,2,e.error,o),Qt(null),!e.hasCatch)throw o}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,s),!0;e.resolved=s}}function xi(s,e,t){const n=e.slice(),{resolved:l}=s;s.current===s.then&&(n[s.value]=l),s.current===s.catch&&(n[s.error]=l),s.block.p(n,t)}function Yc(s,e){T(s,1,1,()=>{e.delete(s.key)})}function Vc(s,e,t,n,l,o,r,i,a,c,u,f){let d=s.length,p=o.length,g=d;const $={};for(;g--;)$[s[g].key]=g;const C=[],k=new Map,v=new Map;for(g=p;g--;){const y=f(l,o,g),D=t(y);let B=r.get(D);B?n&&B.p(y,e):(B=c(D,y),B.c()),k.set(D,C[g]=B),D in $&&v.set(D,Math.abs(g-$[D]))}const S=new Set,R=new Set;function N(y){w(y,1),y.m(i,u),r.set(y.key,y),u=y.first,p--}for(;d&&p;){const y=C[p-1],D=s[d-1],B=y.key,Z=D.key;y===D?(u=y.first,d--,p--):k.has(Z)?!r.has(B)||S.has(B)?N(y):R.has(Z)?d--:v.get(B)>v.get(Z)?(R.add(B),N(y)):(S.add(Z),d--):(a(D,r),d--)}for(;d--;){const y=s[d];k.has(y.key)||a(y,r)}for(;p;)N(C[p-1]);return C}function $n(s,e){const t={},n={},l={$$scope:1};let o=s.length;for(;o--;){const r=s[o],i=e[o];if(i){for(const a in r)a in i||(n[a]=1);for(const a in i)l[a]||(t[a]=i[a],l[a]=1);s[o]=i}else for(const a in r)l[a]=1}for(const r in n)r in t||(t[r]=void 0);return t}function qn(s){return typeof s=="object"&&s!==null?s:{}}function At(s,e,t){const n=s.$$.props[e];n!==void 0&&(s.$$.bound[n]=t,t(s.$$.ctx[n]))}function L(s){s&&s.c()}function P(s,e,t,n){const{fragment:l,after_update:o}=s.$$;l&&l.m(e,t),n||$t(()=>{const r=s.$$.on_mount.map(hi).filter(Oe);s.$$.on_destroy?s.$$.on_destroy.push(...r):Te(r),s.$$.on_mount=[]}),o.forEach($t)}function O(s,e){const t=s.$$;t.fragment!==null&&(Te(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function eu(s,e){s.$$.dirty[0]===-1&&(Bn.push(s),Ei(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function W(s,e,t,n,l,o,r,i=[-1]){const a=ls;Qt(s);const c=s.$$={fragment:null,ctx:[],props:o,update:K,not_equal:l,bound:fo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:fo(),dirty:i,skip_bound:!1,root:e.target||a.$$.root};r&&r(c.root);let u=!1;if(c.ctx=t?t(s,e.props||{},(f,d,...p)=>{const g=p.length?p[0]:d;return c.ctx&&l(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&eu(s,f)),d}):[],c.update(),u=!0,Te(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Uc(e.target);c.fragment&&c.fragment.l(f),f.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&w(s.$$.fragment),P(s,e.target,e.anchor,e.customElement),Pl()}Qt(a)}class G{$destroy(){O(this,1),this.$destroy=K}$on(e,t){if(!Oe(t))return K;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const l=n.indexOf(t);l!==-1&&n.splice(l,1)}}$set(e){this.$$set&&!Dc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Dn=[];function Sl(s,e){return{subscribe:ds(s,e).subscribe}}function ds(s,e=K){let t;const n=new Set;function l(i){if(q(s,i)&&(s=i,t)){const a=!Dn.length;for(const c of n)c[1](),Dn.push(c,s);if(a){for(let c=0;c<Dn.length;c+=2)Dn[c][0](Dn[c+1]);Dn.length=0}}}function o(i){l(i(s))}function r(i,a=K){const c=[i,a];return n.add(c),n.size===1&&(t=e(l)||K),i(s),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:l,update:o,subscribe:r}}function Si(s,e,t){const n=!Array.isArray(s),l=n?[s]:s,o=e.length<2;return Sl(t,r=>{let i=!1;const a=[];let c=0,u=K;const f=()=>{if(c)return;u();const p=e(n?a[0]:a,r);o?r(p):u=Oe(p)?p:K},d=l.map((p,g)=>mi(p,$=>{a[g]=$,c&=~(1<<g),i&&f()},()=>{c|=1<<g}));return i=!0,f(),function(){Te(d),u()}})}const Js=typeof location!="undefined",Ai=typeof history!="undefined",tu=Ai&&typeof history.pushState=="function",Ci=typeof window!="undefined",nu=Ci&&window!==window.parent,su=Js&&(location.protocol==="file:"||/[-_\w]+[.][\w]+$/i.test(location.pathname)),js=Ci&&Ai&&Js&&!nu,ps=!tu||su,Ol="#!",Hn={array:{separator:",",format:"bracket"},convertTypes:!0,hashbang:!1,basePath:"",nesting:3,sideEffect:js};function lu(){const s=Ll().pathname;if(!s)return"";const e=Dl(),t=Ls(s,e);return Ni(t)}function Ll(){if(!Js)return{};if(ps){const s=location.hash;return new URL(s.indexOf(Ol)===0?s.substring(2):s.substring(1),"file:")}return location}function Dl(){return Js&&ps?location.pathname:"/"}function ou(s){ps&&(s=Ol+s);const e=Dl();return(e[e.length-1]==="/"?e.substring(0,e.length-1):e)+s}function ru(s){s=Ls(s,location.origin);const e=Dl();return s=Ls(s,e),ps&&(s=Ls(s,Ol)),Ni(s)}function iu(s,e,t){const{pattern:n,keys:l}=uu(e,t),o=n.exec(s);return o?l.reduce((r,i,a)=>(r[i]=os(o[++a])||null,r),{}):null}function au(s=""){return s?s.replace("?","").replace(/\+/g," ").split("&").filter(Boolean).reduce((e,t)=>{let[n,l]=t.split(/=(.*)/,2);n=decodeURIComponent(n||""),l=decodeURIComponent(l||"");let o=Mi(n,l);return e=Object.keys(o).reduce((r,i)=>{const a=os(o[i]);return r[i]?Array.isArray(r[i])?r[i]=r[i].concat(a):Object.assign(r[i],a):r[i]=a,r},e),e},{}):{}}function cu(s={}){const e=Object.keys(s).reduce((t,n)=>{if(s.hasOwnProperty(n)&&isNaN(parseInt(n,10)))if(Array.isArray(s[n]))s[n].forEach(l=>t.push(n+"[]="+encodeURIComponent(l)));else if(typeof s[n]=="object"&&s[n]!==null){let l=Mi(n,s[n]);t.push(Ri(l))}else t.push(n+"="+encodeURIComponent(s[n]));return t},[]).join("&");return e?`?${e}`:""}function Ni(s){return s[0]!=="/"?"/"+s:s}function Ls(s,e){return s.indexOf(e)===0?s.substring(e.length):s}function uu(s,e=!1){let t=s.split("/"),n=[],l="",o,r,i,a;for(t[0]||t.shift();i=t.shift();)o=i[0],o==="*"?(n.push("wild"),l+="/(.*)"):o===":"?(r=i.indexOf("?",1),a=i.indexOf(".",1),n.push(i.substring(1,~r?r:~a?a:i.length)),l+=~r&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(l+=(~r?"?":"")+"\\"+i.substring(a))):l+="/"+i;return{keys:n,pattern:new RegExp("^"+l+(e?"(?:$|/)":"/?$"),"i")}}function os(s){return Array.isArray(s)?(s[s.length-1]=os(s[s.length-1]),s):typeof s=="object"?Object.entries(s).reduce((e,[t,n])=>(e[t]=os(n),e),{}):s==="true"||s==="false"?s==="true":s==="null"?null:s==="undefined"?void 0:s!==""&&!isNaN(Number(s))&&Number(s).toString()===s?Number(s):s}function Mi(s,e){const t=/(\[[^[\]]*])/,n=/(\[[^[\]]*])/g;let l=t.exec(s),o=l?s.slice(0,l.index):s,r=[];o&&r.push(o);let i=0;for(;(l=n.exec(s))&&i<Hn.nesting;)i++,r.push(l[1]);return l&&r.push("["+s.slice(l.index)+"]"),fu(r,e)}function fu(s,e){let t=e;for(let n=s.length-1;n>=0;--n){let l=s[n],o;if(l==="[]")o=[].concat(t);else{o={};const r=l.charAt(0)==="["&&l.charAt(l.length-1)==="]"?l.slice(1,-1):l,i=parseInt(r,10);!isNaN(i)&&l!==r&&String(i)===r&&i>=0?(o=[],o[i]=os(t)):o[r]=t}t=o}return t}function Ri(s={},e=""){return Object.entries(s).map(([t,n])=>typeof n=="object"?Ri(n,e?e+`[${t}]`:t):[e+`[${t}]`,n].join("=")).join("&")}const du=Pi(s=>typeof s=="string"?new String(s):s),pu=Pi(s=>(typeof s!="string"&&(s=cu(s.params)),Object.assign(new String(s),{params:au(s)})));function Pi(s){return e=>{const{subscribe:t,update:n,set:l}=ds(s(e));return{subscribe:t,update:o=>n(r=>s(o(r))),set:o=>l(s(o))}}}const Oi=lu(),Li=Ll().search,Di=Ll().hash;let $l=!0,mo=!1;const Il=du(Oi),rs=pu(Li),Ii=ds(Di,s=>{const e=()=>ps?zi(location.hash):s(location.hash);return js&&Hn.sideEffect&&window.addEventListener("hashchange",e),()=>js&&Hn.sideEffect&&window.removeEventListener("hashchange",e)}),Bi=ds({}),hu=Si([Il,rs,Ii],([s,e,t],n)=>{let l=!1;return Rl().then(()=>{l||n(s.toString()+e.toString()+t.toString())}),()=>l=!0},Oi+Li+Di);Si(Il,s=>(e="*",t)=>{const n=iu(s.toString(),e,t);return n&&Object.assign(s,{params:n}),!!n});js&&(hu.subscribe(s=>{if(Hn.sideEffect){if($l)return $l=!1;history[mo?"replaceState":"pushState"]({},null,ou(s)),mo=!1}}),Bi.subscribe(s=>{Hn.sideEffect&&history.replaceState(s,null,location.pathname+location.search+location.hash)}),window.addEventListener("popstate",s=>{Hn.sideEffect&&($l=!0,zi(location.href,s.state))}));function zi(s="",e){const{pathname:t,search:n,hash:l}=new URL(ru(s),"file:");Il.set(t),Rl().then(()=>{rs.set(n),Ii.set(l),e&&Bi.set(e)})}const gt=""+new URL("npm-logo-185f97d3.svg",import.meta.url).href;function mu(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S,R,N,y,D,B,Z,ee,oe,ce,ve,be,Le,z,U,Y,te,F,pe,ie,we,V,xe,ge,Ze,Ae,Ye,bt,Ue,st,Qe,ct,vt,Fe,ue,wt,Pe,$e,lt,De,ne,Se,Q,X,ae,ye,Je,Xe,kt,cn,Zn,ut,jt,Sn,Qn,Xn,Ot,An,hs,Ct,yt,Cn,Nn,Ut,Yt,Mn,ms;return{c(){e=_("section"),t=_("h1"),t.textContent="Packages",n=A(),l=_("div"),o=_("div"),r=_("div"),r.innerHTML='<a href="?c=tabs">@apsc/tabs</a>',i=A(),a=_("a"),c=_("img"),f=A(),d=_("div"),d.textContent="A component set and context class for organizing the Tabs interface",p=A(),g=_("div"),$=_("div"),$.innerHTML='<a href="?c=glob-notify">@apsc/glob-notify</a>',C=A(),k=_("a"),v=_("img"),R=A(),N=_("div"),N.textContent="Component for notifications globally for the entire application",y=A(),D=_("div"),B=_("div"),B.innerHTML='<a href="?c=color">@apsc/color</a>',Z=A(),ee=_("a"),oe=_("img"),ve=A(),be=_("div"),be.textContent="A set of components for picking and editing colors",Le=A(),z=_("div"),U=_("div"),Y=_("div"),Y.innerHTML='<a href="?c=floating-ui-action">@apsc/floating-ui-action</a>',te=A(),F=_("a"),pe=_("img"),we=A(),V=_("div"),xe=H("Floating UI (ex. Popper) action for directive "),ge=_("code"),Ze=H("use"),Ae=A(),Ye=_("div"),bt=_("div"),bt.innerHTML='<a href="?c=focus-action">@apsc/focus-action</a>',Ue=A(),st=_("a"),Qe=_("img"),vt=A(),Fe=_("div"),ue=H("Action to control "),wt=_("code"),Pe=H("focusin"),$e=H(` and
        `),lt=_("code"),De=H("focusout"),ne=H(" for directive "),Se=_("code"),Q=H("use"),X=A(),ae=_("div"),ye=_("div"),ye.innerHTML='<a href="?c=keyboard-shortcut-action">@apsc/keyboard-shortcut-action</a>',Je=A(),Xe=_("a"),kt=_("img"),Zn=A(),ut=_("div"),jt=H("Action to call a function by keyboard shortcut for Svelte directive "),Sn=_("code"),Qn=H("use"),Xn=A(),Ot=_("div"),An=_("div"),An.innerHTML='<a href="?c=scroll-child-action">@apsc/scroll-child-action</a>',hs=A(),Ct=_("a"),yt=_("img"),Nn=A(),Ut=_("div"),Yt=H("Action to scroll the child to parent viewport for Svelte directive "),Mn=_("code"),ms=H("use"),h(t,"class","font-bold my-4 pb-2 text-3xl border-b border-gray-400"),h(r,"class","pkg-tile__link svelte-1gf5keo"),ft(c.src,u=gt)||h(c,"src",u),h(c,"alt","NPM logo"),h(c,"class","svelte-1gf5keo"),h(a,"class","pkg-tile__npm svelte-1gf5keo"),h(a,"href","https://www.npmjs.com/package/@apsc/tabs"),h(a,"target","_blank"),h(a,"rel","noreferrer"),h(d,"class","pkg-tile__description svelte-1gf5keo"),h(o,"class","pkg-tile svelte-1gf5keo"),h($,"class","pkg-tile__link svelte-1gf5keo"),ft(v.src,S=gt)||h(v,"src",S),h(v,"alt","NPM logo"),h(v,"class","svelte-1gf5keo"),h(k,"class","pkg-tile__npm svelte-1gf5keo"),h(k,"href","https://www.npmjs.com/package/@apsc/glob-notify"),h(k,"target","_blank"),h(k,"rel","noreferrer"),h(N,"class","pkg-tile__description svelte-1gf5keo"),h(g,"class","pkg-tile svelte-1gf5keo"),h(B,"class","pkg-tile__link svelte-1gf5keo"),ft(oe.src,ce=gt)||h(oe,"src",ce),h(oe,"alt","NPM logo"),h(oe,"class","svelte-1gf5keo"),h(ee,"class","pkg-tile__npm svelte-1gf5keo"),h(ee,"href","https://www.npmjs.com/package/@apsc/color"),h(ee,"target","_blank"),h(ee,"rel","noreferrer"),h(be,"class","pkg-tile__description svelte-1gf5keo"),h(D,"class","pkg-tile svelte-1gf5keo"),h(l,"class","flex flex-wrap gap-6 mb-12"),h(Y,"class","pkg-tile__link svelte-1gf5keo"),ft(pe.src,ie=gt)||h(pe,"src",ie),h(pe,"alt","NPM logo"),h(pe,"class","svelte-1gf5keo"),h(F,"class","pkg-tile__npm svelte-1gf5keo"),h(F,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),h(F,"target","_blank"),h(F,"rel","noreferrer"),h(ge,"class",On(s[0].code)+" svelte-1gf5keo"),h(V,"class","pkg-tile__description svelte-1gf5keo"),h(U,"class","pkg-tile svelte-1gf5keo"),h(bt,"class","pkg-tile__link svelte-1gf5keo"),ft(Qe.src,ct=gt)||h(Qe,"src",ct),h(Qe,"alt","NPM logo"),h(Qe,"class","svelte-1gf5keo"),h(st,"class","pkg-tile__npm svelte-1gf5keo"),h(st,"href","https://www.npmjs.com/package/@apsc/focus-action"),h(st,"target","_blank"),h(st,"rel","noreferrer"),h(wt,"class",On(s[0].code)+" svelte-1gf5keo"),h(lt,"class",On(s[0].code)+" svelte-1gf5keo"),h(Se,"class",On(s[0].code)+" svelte-1gf5keo"),h(Fe,"class","pkg-tile__description svelte-1gf5keo"),h(Ye,"class","pkg-tile svelte-1gf5keo"),h(ye,"class","pkg-tile__link svelte-1gf5keo"),ft(kt.src,cn=gt)||h(kt,"src",cn),h(kt,"alt","NPM logo"),h(kt,"class","svelte-1gf5keo"),h(Xe,"class","pkg-tile__npm svelte-1gf5keo"),h(Xe,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),h(Xe,"target","_blank"),h(Xe,"rel","noreferrer"),h(Sn,"class",On(s[0].code)+" svelte-1gf5keo"),h(ut,"class","pkg-tile__description svelte-1gf5keo"),h(ae,"class","pkg-tile svelte-1gf5keo"),h(An,"class","pkg-tile__link svelte-1gf5keo"),ft(yt.src,Cn=gt)||h(yt,"src",Cn),h(yt,"alt","NPM logo"),h(yt,"class","svelte-1gf5keo"),h(Ct,"class","pkg-tile__npm svelte-1gf5keo"),h(Ct,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),h(Ct,"target","_blank"),h(Ct,"rel","noreferrer"),h(Mn,"class",On(s[0].code)+" svelte-1gf5keo"),h(Ut,"class","pkg-tile__description svelte-1gf5keo"),h(Ot,"class","pkg-tile svelte-1gf5keo"),h(z,"class","flex flex-wrap gap-6 mb-12")},m(Jn,al){x(Jn,e,al),m(e,t),m(e,n),m(e,l),m(l,o),m(o,r),m(o,i),m(o,a),m(a,c),m(o,f),m(o,d),m(l,p),m(l,g),m(g,$),m(g,C),m(g,k),m(k,v),m(g,R),m(g,N),m(l,y),m(l,D),m(D,B),m(D,Z),m(D,ee),m(ee,oe),m(D,ve),m(D,be),m(e,Le),m(e,z),m(z,U),m(U,Y),m(U,te),m(U,F),m(F,pe),m(U,we),m(U,V),m(V,xe),m(V,ge),m(ge,Ze),m(z,Ae),m(z,Ye),m(Ye,bt),m(Ye,Ue),m(Ye,st),m(st,Qe),m(Ye,vt),m(Ye,Fe),m(Fe,ue),m(Fe,wt),m(wt,Pe),m(Fe,$e),m(Fe,lt),m(lt,De),m(Fe,ne),m(Fe,Se),m(Se,Q),m(z,X),m(z,ae),m(ae,ye),m(ae,Je),m(ae,Xe),m(Xe,kt),m(ae,Zn),m(ae,ut),m(ut,jt),m(ut,Sn),m(Sn,Qn),m(z,Xn),m(z,Ot),m(Ot,An),m(Ot,hs),m(Ot,Ct),m(Ct,yt),m(Ot,Nn),m(Ot,Ut),m(Ut,Yt),m(Ut,Mn),m(Mn,ms)},p:K,i:K,o:K,d(Jn){Jn&&E(e)}}}function gu(s){return[{code:"bg-gray-200 px-1 rounded-sm"}]}class _u extends G{constructor(e){super(),W(this,e,gu,mu,q,{})}}const bu=Symbol("TABS");class jn{constructor(){Zt(this,"_tabs",[]);Zt(this,"_panels",[]);Zt(this,"_setLength",null);Zt(this,"_setActive",null);Zt(this,"_active",{index:NaN});Zt(this,"active");Zt(this,"length");this.active=Sl(this._active,e=>(this._setActive=e,this._setActive(this._active),()=>{this._setActive=null})),this.length=Sl(0,e=>(this._setLength=e,this._setLength(this._getLength()),()=>{this._setLength=null}))}_getLength(){return Math.max(this._tabs.length,this._panels.length)}push(e){const t=Symbol(e);return(e==="tab"?this._tabs:this._panels).push(t),this._setLength&&this._setLength(this._getLength()),(isNaN(this._active.index)||this._active.tab==null||this._active.panel==null)&&this.select(this._active.index||0),t}pop(e){const t=(n,l)=>{const o=n.indexOf(l);if(o<0)return!1;n.splice(o,1);const r=this._getLength();return this._setLength&&this._setLength(r),r===0?this.select(NaN):o<=this._active.index&&this.select(Math.min(this._active.index,r-1)),!0};return"tab"in e?t(this._tabs,e.tab):"panel"in e?t(this._panels,e.panel):!1}select(e){const t=l=>{let o=this._active;return isNaN(l)?o={index:NaN}:l>=0&&l<this._getLength()&&(o={index:l},this._tabs[l]&&(o.tab=this._tabs[l]),this._panels[l]&&(o.panel=this._panels[l])),o},n=l=>Object.is(this._active,l)?!1:(this._active=l,this._setActive&&this._setActive(this._active),!0);return typeof e=="number"?n(t(e)):"tab"in e&&e.tab?n(t(this._tabs.indexOf(e.tab))):"panel"in e&&e.panel?n(t(this._panels.indexOf(e.panel))):!1}}Zt(jn,"contextName",bu);function $u(s){let e;const t=s[7].default,n=Ce(t,s,s[6],null);return{c(){n&&n.c()},m(l,o){n&&n.m(l,o),e=!0},p(l,[o]){n&&n.p&&(!e||o&64)&&Me(n,t,l,l[6],e?Ne(t,l[6],o,null):Re(l[6]),null)},i(l){e||(w(n,l),e=!0)},o(l){T(n,l),e=!1},d(l){n&&n.d(l)}}}function vu(s,e,t){let n,l,{$$slots:o={},$$scope:r}=e;const i=new jn;yi(jn.contextName,i);const a=i.active;Jt(s,a,d=>t(5,l=d));const c=i.length;Jt(s,c,d=>t(4,n=d));let{selected:u=NaN}=e,{length:f=0}=e;return s.$$set=d=>{"selected"in d&&t(2,u=d.selected),"length"in d&&t(3,f=d.length),"$$scope"in d&&t(6,r=d.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(2,u=l.index),s.$$.dirty&36&&typeof u=="number"&&!i.select(u)&&t(2,u=l.index),s.$$.dirty&16&&t(3,f=n)},[a,c,u,f,n,l,r,o]}class Kn extends G{constructor(e){super(),W(this,e,vu,$u,q,{selected:2,length:3})}}const wu=s=>({active:s&1}),go=s=>({active:s[0].tab===s[1],activate:s[3]});function ku(s){let e;return{c(){e=H("Tab slot is empty")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function yu(s){let e;const t=s[5].default,n=Ce(t,s,s[4],go),l=n||ku();return{c(){l&&l.c()},m(o,r){l&&l.m(o,r),e=!0},p(o,[r]){n&&n.p&&(!e||r&17)&&Me(n,t,o,o[4],e?Ne(t,o[4],r,wu):Re(o[4]),go)},i(o){e||(w(l,o),e=!0)},o(o){T(l,o),e=!1},d(o){l&&l.d(o)}}}function Tu(s,e,t){let n,{$$slots:l={},$$scope:o}=e;const r=Xs(jn.contextName),i=r.push("tab"),a=r.active;Jt(s,a,u=>t(0,n=u)),Qs(()=>r.pop({tab:i}));const c=()=>r.select({tab:i});return s.$$set=u=>{"$$scope"in u&&t(4,o=u.$$scope)},[n,i,a,c,o,l]}class Dt extends G{constructor(e){super(),W(this,e,Tu,yu,q,{})}}const Eu=s=>({active:s&1}),_o=s=>({active:s[0].panel===s[1],activate:s[3]});function xu(s){let e;return{c(){e=H("Panel slot is empty")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function Su(s){let e;const t=s[5].default,n=Ce(t,s,s[4],_o),l=n||xu();return{c(){l&&l.c()},m(o,r){l&&l.m(o,r),e=!0},p(o,[r]){n&&n.p&&(!e||r&17)&&Me(n,t,o,o[4],e?Ne(t,o[4],r,Eu):Re(o[4]),_o)},i(o){e||(w(l,o),e=!0)},o(o){T(l,o),e=!1},d(o){l&&l.d(o)}}}function Au(s,e,t){let n,{$$slots:l={},$$scope:o}=e;const r=Xs(jn.contextName),i=r.push("panel"),a=r.active;Jt(s,a,u=>t(0,n=u)),Qs(()=>r.pop({panel:i}));const c=()=>r.select({panel:i});return s.$$set=u=>{"$$scope"in u&&t(4,o=u.$$scope)},[n,i,a,c,o,l]}class It extends G{constructor(e){super(),W(this,e,Au,Su,q,{})}}function Cu(s){let e,t;const n=s[0].default,l=Ce(n,s,s[1],null);return{c(){e=_("section"),l&&l.c(),h(e,"class","doc-tabs")},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&2)&&Me(l,n,o,o[1],t?Ne(n,o[1],r,null):Re(o[1]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Nu(s){let e,t;return e=new Kn({props:{$$slots:{default:[Cu]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,[l]){const o={};l&2&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Mu(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(1,l=o.$$scope)},[n,l]}class vn extends G{constructor(e){super(),W(this,e,Mu,Nu,q,{})}}function bo(s){const e=s.parentElement;if(e&&e.scrollHeight>e.offsetHeight){const t=getComputedStyle(e),n=parseInt(t.paddingTop)||0,l=parseInt(t.paddingBottom)||0,o=e.offsetTop+n,r=e.offsetTop+e.offsetHeight-l,i=s.offsetTop-e.scrollTop,a=s.offsetTop+s.offsetHeight-e.scrollTop;return a>r?(e.scrollTop+=a-r,!0):i<o?(e.scrollTop-=o-i,!0):!1}else return!1}function $o(s){const e=s.parentElement;if(e&&e.scrollWidth>e.offsetWidth){const t=getComputedStyle(e),n=parseInt(t.paddingLeft)||0,l=parseInt(t.paddingRight)||0,o=e.offsetLeft+n,r=e.offsetLeft+e.offsetWidth-l,i=s.offsetLeft-e.scrollLeft,a=s.offsetLeft+s.offsetWidth-e.scrollLeft;return a>r?(e.scrollLeft+=a-r,!0):i<o?(e.scrollLeft-=o-i,!0):!1}else return!1}function Ys(s,e){function t(n){n===!0?(bo(s),$o(s)):typeof n=="object"&&(n.x&&$o(s),n.y&&bo(s))}return t(e),{update(n){t(n)}}}function Ru(s){let e,t,n,l,o;const r=s[0].default,i=Ce(r,s,s[1],null);return{c(){e=_("button"),i&&i.c(),h(e,"class","doc-tabs__tab"),re(e,"active",s[2])},m(a,c){x(a,e,c),i&&i.m(e,null),n=!0,l||(o=[J(e,"click",function(){Oe(s[3])&&s[3].apply(this,arguments)}),Ge(t=Ys.call(null,e,{x:s[2]}))],l=!0)},p(a,c){s=a,i&&i.p&&(!n||c&2)&&Me(i,r,s,s[1],n?Ne(r,s[1],c,null):Re(s[1]),null),t&&Oe(t.update)&&c&4&&t.update.call(null,{x:s[2]}),(!n||c&4)&&re(e,"active",s[2])},i(a){n||(w(i,a),n=!0)},o(a){T(i,a),n=!1},d(a){a&&E(e),i&&i.d(a),l=!1,Te(o)}}}function Pu(s){let e,t;return e=new Dt({props:{$$slots:{default:[Ru,({active:n,activate:l})=>({2:n,3:l}),({active:n,activate:l})=>(n?4:0)|(l?8:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,[l]){const o={};l&14&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Ou(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(1,l=o.$$scope)},[n,l]}class Ke extends G{constructor(e){super(),W(this,e,Ou,Pu,q,{})}}function vo(s){let e,t,n,l,o,r,i,a,c,u;return{c(){e=_("div"),t=_("button"),n=_("span"),o=A(),r=_("button"),i=_("span"),h(n,"class","block"),nt(n,"transform","rotate(180deg)"),t.disabled=l=s[2].index===0,h(i,"class","block"),r.disabled=a=s[2].index>=s[1]-1,h(e,"class","doc-tabs__list__arrows")},m(f,d){x(f,e,d),m(e,t),m(t,n),n.innerHTML=s[6],m(e,o),m(e,r),m(r,i),i.innerHTML=s[6],c||(u=[J(t,"click",s[10]),J(r,"click",s[11])],c=!0)},p(f,d){d&4&&l!==(l=f[2].index===0)&&(t.disabled=l),d&6&&a!==(a=f[2].index>=f[1]-1)&&(r.disabled=a)},d(f){f&&E(e),c=!1,Te(u)}}}function Lu(s){let e,t,n,l,o,r,i;const a=s[9].default,c=Ce(a,s,s[8],null);let u=s[0]&&vo(s);return{c(){e=_("div"),t=_("div"),c&&c.c(),l=A(),u&&u.c(),h(t,"class","doc-tabs__list__tabs"),h(e,"class","doc-tabs__list")},m(f,d){x(f,e,d),m(e,t),c&&c.m(t,null),m(e,l),u&&u.m(e,null),o=!0,r||(i=Ge(n=s[7].call(null,t,s[1])),r=!0)},p(f,[d]){c&&c.p&&(!o||d&256)&&Me(c,a,f,f[8],o?Ne(a,f[8],d,null):Re(f[8]),null),n&&Oe(n.update)&&d&2&&n.update.call(null,f[1]),f[0]?u?u.p(f,d):(u=vo(f),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(f){o||(w(c,f),o=!0)},o(f){T(c,f),o=!1},d(f){f&&E(e),c&&c.d(f),u&&u.d(),r=!1,i()}}}function Du(s,e,t){let n,l,{$$slots:o={},$$scope:r}=e;const i=Xs(jn.contextName),a=i.length;Jt(s,a,$=>t(1,n=$));const c=i.active;Jt(s,c,$=>t(2,l=$));const u='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="1em" height="1em"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill="currentColor"/></svg>';let f=!1;function d($,C){const k=()=>$.scrollWidth>$.offsetWidth;return t(0,f=k()),{update(){t(0,f=k())}}}const p=()=>i.select(l.index-1),g=()=>i.select(l.index+1);return s.$$set=$=>{"$$scope"in $&&t(8,r=$.$$scope)},[f,n,l,i,a,c,u,d,r,o,p,g]}class wn extends G{constructor(e){super(),W(this,e,Du,Lu,q,{})}}const Iu=s=>({active:s&4}),wo=s=>({active:s[2]});function Bu(s){let e,t;const n=s[0].default,l=Ce(n,s,s[1],wo);return{c(){e=_("div"),l&&l.c(),h(e,"class","doc-tabs__panel"),re(e,"active",s[2])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&6)&&Me(l,n,o,o[1],t?Ne(n,o[1],r,Iu):Re(o[1]),wo),(!t||r&4)&&re(e,"active",o[2])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function zu(s){let e,t;return e=new It({props:{$$slots:{default:[Bu,({active:n})=>({2:n}),({active:n})=>n?4:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,[l]){const o={};l&6&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Hu(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(1,l=o.$$scope)},[n,l]}class We extends G{constructor(e){super(),W(this,e,Hu,zu,q,{})}}function Fu(s){let e,t,n,l;return{c(){e=_("a"),t=H("Home"),h(e,"class",s[0]),h(e,"href","/")},m(o,r){x(o,e,r),m(e,t),n||(l=J(e,"click",ns(s[1])),n=!0)},p(o,[r]){r&1&&h(e,"class",o[0])},i:K,o:K,d(o){o&&E(e),n=!1,l()}}}function ju(s,e,t){let n;Jt(s,rs,r=>t(2,n=r));let{class:l=void 0}=e;function o(){Ic(rs,n=new String(""),n)}return s.$$set=r=>{"class"in r&&t(0,l=r.class)},[l,o]}class kn extends G{constructor(e){super(),W(this,e,ju,Fu,q,{class:0})}}var nn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Bl={exports:{}};function zl(s){return s instanceof Map?s.clear=s.delete=s.set=function(){throw new Error("map is read-only")}:s instanceof Set&&(s.add=s.clear=s.delete=function(){throw new Error("set is read-only")}),Object.freeze(s),Object.getOwnPropertyNames(s).forEach(function(e){var t=s[e];typeof t=="object"&&!Object.isFrozen(t)&&zl(t)}),s}Bl.exports=zl;Bl.exports.default=zl;class ko{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Hi(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function sn(s,...e){const t=Object.create(null);for(const n in s)t[n]=s[n];return e.forEach(function(n){for(const l in n)t[l]=n[l]}),t}const Uu="</span>",yo=s=>!!s.scope||s.sublanguage&&s.language,qu=(s,{prefix:e})=>{if(s.includes(".")){const t=s.split(".");return[`${e}${t.shift()}`,...t.map((n,l)=>`${n}${"_".repeat(l+1)}`)].join(" ")}return`${e}${s}`};class Ku{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=Hi(e)}openNode(e){if(!yo(e))return;let t="";e.sublanguage?t=`language-${e.language}`:t=qu(e.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(e){yo(e)&&(this.buffer+=Uu)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const To=(s={})=>{const e={children:[]};return Object.assign(e,s),e};class Hl{constructor(){this.rootNode=To(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=To({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(n=>this._walk(e,n)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{Hl._collapse(t)}))}}class Wu extends Hl{constructor(e){super(),this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const n=e.root;n.sublanguage=!0,n.language=t,this.add(n)}toHTML(){return new Ku(this,this.options).value()}finalize(){return!0}}function is(s){return s?typeof s=="string"?s:s.source:null}function Fi(s){return yn("(?=",s,")")}function Gu(s){return yn("(?:",s,")*")}function Zu(s){return yn("(?:",s,")?")}function yn(...s){return s.map(t=>is(t)).join("")}function Qu(s){const e=s[s.length-1];return typeof e=="object"&&e.constructor===Object?(s.splice(s.length-1,1),e):{}}function Fl(...s){return"("+(Qu(s).capture?"":"?:")+s.map(n=>is(n)).join("|")+")"}function ji(s){return new RegExp(s.toString()+"|").exec("").length-1}function Xu(s,e){const t=s&&s.exec(e);return t&&t.index===0}const Ju=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function jl(s,{joinWith:e}){let t=0;return s.map(n=>{t+=1;const l=t;let o=is(n),r="";for(;o.length>0;){const i=Ju.exec(o);if(!i){r+=o;break}r+=o.substring(0,i.index),o=o.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?r+="\\"+String(Number(i[1])+l):(r+=i[0],i[0]==="("&&t++)}return r}).map(n=>`(${n})`).join(e)}const Yu=/\b\B/,Ui="[a-zA-Z]\\w*",Ul="[a-zA-Z_]\\w*",qi="\\b\\d+(\\.\\d+)?",Ki="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Wi="\\b(0b[01]+)",Vu="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",ef=(s={})=>{const e=/^#![ ]*\//;return s.binary&&(s.begin=yn(e,/.*\b/,s.binary,/\b.*/)),sn({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,n)=>{t.index!==0&&n.ignoreMatch()}},s)},as={begin:"\\\\[\\s\\S]",relevance:0},tf={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[as]},nf={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[as]},sf={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Vs=function(s,e,t={}){const n=sn({scope:"comment",begin:s,end:e,contains:[]},t);n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const l=Fl("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return n.contains.push({begin:yn(/[ ]+/,"(",l,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},lf=Vs("//","$"),of=Vs("/\\*","\\*/"),rf=Vs("#","$"),af={scope:"number",begin:qi,relevance:0},cf={scope:"number",begin:Ki,relevance:0},uf={scope:"number",begin:Wi,relevance:0},ff={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[as,{begin:/\[/,end:/\]/,relevance:0,contains:[as]}]}]},df={scope:"title",begin:Ui,relevance:0},pf={scope:"title",begin:Ul,relevance:0},hf={begin:"\\.\\s*"+Ul,relevance:0},mf=function(s){return Object.assign(s,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var Cs=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Yu,IDENT_RE:Ui,UNDERSCORE_IDENT_RE:Ul,NUMBER_RE:qi,C_NUMBER_RE:Ki,BINARY_NUMBER_RE:Wi,RE_STARTERS_RE:Vu,SHEBANG:ef,BACKSLASH_ESCAPE:as,APOS_STRING_MODE:tf,QUOTE_STRING_MODE:nf,PHRASAL_WORDS_MODE:sf,COMMENT:Vs,C_LINE_COMMENT_MODE:lf,C_BLOCK_COMMENT_MODE:of,HASH_COMMENT_MODE:rf,NUMBER_MODE:af,C_NUMBER_MODE:cf,BINARY_NUMBER_MODE:uf,REGEXP_MODE:ff,TITLE_MODE:df,UNDERSCORE_TITLE_MODE:pf,METHOD_GUARD:hf,END_SAME_AS_BEGIN:mf});function gf(s,e){s.input[s.index-1]==="."&&e.ignoreMatch()}function _f(s,e){s.className!==void 0&&(s.scope=s.className,delete s.className)}function bf(s,e){e&&s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=gf,s.keywords=s.keywords||s.beginKeywords,delete s.beginKeywords,s.relevance===void 0&&(s.relevance=0))}function $f(s,e){Array.isArray(s.illegal)&&(s.illegal=Fl(...s.illegal))}function vf(s,e){if(s.match){if(s.begin||s.end)throw new Error("begin & end are not supported with match");s.begin=s.match,delete s.match}}function wf(s,e){s.relevance===void 0&&(s.relevance=1)}const kf=(s,e)=>{if(!s.beforeMatch)return;if(s.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},s);Object.keys(s).forEach(n=>{delete s[n]}),s.keywords=t.keywords,s.begin=yn(t.beforeMatch,Fi(t.begin)),s.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},s.relevance=0,delete t.beforeMatch},yf=["of","and","for","in","not","or","if","then","parent","list","value"],Tf="keyword";function Gi(s,e,t=Tf){const n=Object.create(null);return typeof s=="string"?l(t,s.split(" ")):Array.isArray(s)?l(t,s):Object.keys(s).forEach(function(o){Object.assign(n,Gi(s[o],e,o))}),n;function l(o,r){e&&(r=r.map(i=>i.toLowerCase())),r.forEach(function(i){const a=i.split("|");n[a[0]]=[o,Ef(a[0],a[1])]})}}function Ef(s,e){return e?Number(e):xf(s)?0:1}function xf(s){return yf.includes(s.toLowerCase())}const Eo={},hn=s=>{console.error(s)},xo=(s,...e)=>{console.log(`WARN: ${s}`,...e)},In=(s,e)=>{Eo[`${s}/${e}`]||(console.log(`Deprecated as of ${s}. ${e}`),Eo[`${s}/${e}`]=!0)},Us=new Error;function Zi(s,e,{key:t}){let n=0;const l=s[t],o={},r={};for(let i=1;i<=e.length;i++)r[i+n]=l[i],o[i+n]=!0,n+=ji(e[i-1]);s[t]=r,s[t]._emit=o,s[t]._multi=!0}function Sf(s){if(Array.isArray(s.begin)){if(s.skip||s.excludeBegin||s.returnBegin)throw hn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Us;if(typeof s.beginScope!="object"||s.beginScope===null)throw hn("beginScope must be object"),Us;Zi(s,s.begin,{key:"beginScope"}),s.begin=jl(s.begin,{joinWith:""})}}function Af(s){if(Array.isArray(s.end)){if(s.skip||s.excludeEnd||s.returnEnd)throw hn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Us;if(typeof s.endScope!="object"||s.endScope===null)throw hn("endScope must be object"),Us;Zi(s,s.end,{key:"endScope"}),s.end=jl(s.end,{joinWith:""})}}function Cf(s){s.scope&&typeof s.scope=="object"&&s.scope!==null&&(s.beginScope=s.scope,delete s.scope)}function Nf(s){Cf(s),typeof s.beginScope=="string"&&(s.beginScope={_wrap:s.beginScope}),typeof s.endScope=="string"&&(s.endScope={_wrap:s.endScope}),Sf(s),Af(s)}function Mf(s){function e(r,i){return new RegExp(is(r),"m"+(s.case_insensitive?"i":"")+(s.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,i]),this.matchAt+=ji(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(a=>a[1]);this.matcherRe=e(jl(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(i);if(!a)return null;const c=a.findIndex((f,d)=>d>0&&f!==void 0),u=this.matchIndexes[c];return a.splice(0,c),Object.assign(a,u)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const a=new t;return this.rules.slice(i).forEach(([c,u])=>a.addRule(c,u)),a.compile(),this.multiRegexes[i]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,a){this.rules.push([i,a]),a.type==="begin"&&this.count++}exec(i){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let c=a.exec(i);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(i)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function l(r){const i=new n;return r.contains.forEach(a=>i.addRule(a.begin,{rule:a,type:"begin"})),r.terminatorEnd&&i.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&i.addRule(r.illegal,{type:"illegal"}),i}function o(r,i){const a=r;if(r.isCompiled)return a;[_f,vf,Nf,kf].forEach(u=>u(r,i)),s.compilerExtensions.forEach(u=>u(r,i)),r.__beforeBegin=null,[bf,$f,wf].forEach(u=>u(r,i)),r.isCompiled=!0;let c=null;return typeof r.keywords=="object"&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),c=r.keywords.$pattern,delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=Gi(r.keywords,s.case_insensitive)),a.keywordPatternRe=e(c,!0),i&&(r.begin||(r.begin=/\B|\b/),a.beginRe=e(a.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(a.endRe=e(a.end)),a.terminatorEnd=is(a.end)||"",r.endsWithParent&&i.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+i.terminatorEnd)),r.illegal&&(a.illegalRe=e(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(u){return Rf(u==="self"?r:u)})),r.contains.forEach(function(u){o(u,a)}),r.starts&&o(r.starts,i),a.matcher=l(a),a}if(s.compilerExtensions||(s.compilerExtensions=[]),s.contains&&s.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return s.classNameAliases=sn(s.classNameAliases||{}),o(s)}function Qi(s){return s?s.endsWithParent||Qi(s.starts):!1}function Rf(s){return s.variants&&!s.cachedVariants&&(s.cachedVariants=s.variants.map(function(e){return sn(s,{variants:null},e)})),s.cachedVariants?s.cachedVariants:Qi(s)?sn(s,{starts:s.starts?sn(s.starts):null}):Object.isFrozen(s)?sn(s):s}var Pf="11.7.0";class Of extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const vl=Hi,So=sn,Ao=Symbol("nomatch"),Lf=7,Df=function(s){const e=Object.create(null),t=Object.create(null),n=[];let l=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Wu};function a(z){return i.noHighlightRe.test(z)}function c(z){let U=z.className+" ";U+=z.parentNode?z.parentNode.className:"";const Y=i.languageDetectRe.exec(U);if(Y){const te=Z(Y[1]);return te||(xo(o.replace("{}",Y[1])),xo("Falling back to no-highlight mode for this block.",z)),te?Y[1]:"no-highlight"}return U.split(/\s+/).find(te=>a(te)||Z(te))}function u(z,U,Y){let te="",F="";typeof U=="object"?(te=z,Y=U.ignoreIllegals,F=U.language):(In("10.7.0","highlight(lang, code, ...args) has been deprecated."),In("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),F=z,te=U),Y===void 0&&(Y=!0);const pe={code:te,language:F};be("before:highlight",pe);const ie=pe.result?pe.result:f(pe.language,pe.code,Y);return ie.code=pe.code,be("after:highlight",ie),ie}function f(z,U,Y,te){const F=Object.create(null);function pe(Q,X){return Q.keywords[X]}function ie(){if(!ue.keywords){Pe.addText($e);return}let Q=0;ue.keywordPatternRe.lastIndex=0;let X=ue.keywordPatternRe.exec($e),ae="";for(;X;){ae+=$e.substring(Q,X.index);const ye=ct.case_insensitive?X[0].toLowerCase():X[0],Je=pe(ue,ye);if(Je){const[Xe,kt]=Je;if(Pe.addText(ae),ae="",F[ye]=(F[ye]||0)+1,F[ye]<=Lf&&(lt+=kt),Xe.startsWith("_"))ae+=X[0];else{const cn=ct.classNameAliases[Xe]||Xe;Pe.addKeyword(X[0],cn)}}else ae+=X[0];Q=ue.keywordPatternRe.lastIndex,X=ue.keywordPatternRe.exec($e)}ae+=$e.substring(Q),Pe.addText(ae)}function we(){if($e==="")return;let Q=null;if(typeof ue.subLanguage=="string"){if(!e[ue.subLanguage]){Pe.addText($e);return}Q=f(ue.subLanguage,$e,!0,wt[ue.subLanguage]),wt[ue.subLanguage]=Q._top}else Q=p($e,ue.subLanguage.length?ue.subLanguage:null);ue.relevance>0&&(lt+=Q.relevance),Pe.addSublanguage(Q._emitter,Q.language)}function V(){ue.subLanguage!=null?we():ie(),$e=""}function xe(Q,X){let ae=1;const ye=X.length-1;for(;ae<=ye;){if(!Q._emit[ae]){ae++;continue}const Je=ct.classNameAliases[Q[ae]]||Q[ae],Xe=X[ae];Je?Pe.addKeyword(Xe,Je):($e=Xe,ie(),$e=""),ae++}}function ge(Q,X){return Q.scope&&typeof Q.scope=="string"&&Pe.openNode(ct.classNameAliases[Q.scope]||Q.scope),Q.beginScope&&(Q.beginScope._wrap?(Pe.addKeyword($e,ct.classNameAliases[Q.beginScope._wrap]||Q.beginScope._wrap),$e=""):Q.beginScope._multi&&(xe(Q.beginScope,X),$e="")),ue=Object.create(Q,{parent:{value:ue}}),ue}function Ze(Q,X,ae){let ye=Xu(Q.endRe,ae);if(ye){if(Q["on:end"]){const Je=new ko(Q);Q["on:end"](X,Je),Je.isMatchIgnored&&(ye=!1)}if(ye){for(;Q.endsParent&&Q.parent;)Q=Q.parent;return Q}}if(Q.endsWithParent)return Ze(Q.parent,X,ae)}function Ae(Q){return ue.matcher.regexIndex===0?($e+=Q[0],1):(Se=!0,0)}function Ye(Q){const X=Q[0],ae=Q.rule,ye=new ko(ae),Je=[ae.__beforeBegin,ae["on:begin"]];for(const Xe of Je)if(Xe&&(Xe(Q,ye),ye.isMatchIgnored))return Ae(X);return ae.skip?$e+=X:(ae.excludeBegin&&($e+=X),V(),!ae.returnBegin&&!ae.excludeBegin&&($e=X)),ge(ae,Q),ae.returnBegin?0:X.length}function bt(Q){const X=Q[0],ae=U.substring(Q.index),ye=Ze(ue,Q,ae);if(!ye)return Ao;const Je=ue;ue.endScope&&ue.endScope._wrap?(V(),Pe.addKeyword(X,ue.endScope._wrap)):ue.endScope&&ue.endScope._multi?(V(),xe(ue.endScope,Q)):Je.skip?$e+=X:(Je.returnEnd||Je.excludeEnd||($e+=X),V(),Je.excludeEnd&&($e=X));do ue.scope&&Pe.closeNode(),!ue.skip&&!ue.subLanguage&&(lt+=ue.relevance),ue=ue.parent;while(ue!==ye.parent);return ye.starts&&ge(ye.starts,Q),Je.returnEnd?0:X.length}function Ue(){const Q=[];for(let X=ue;X!==ct;X=X.parent)X.scope&&Q.unshift(X.scope);Q.forEach(X=>Pe.openNode(X))}let st={};function Qe(Q,X){const ae=X&&X[0];if($e+=Q,ae==null)return V(),0;if(st.type==="begin"&&X.type==="end"&&st.index===X.index&&ae===""){if($e+=U.slice(X.index,X.index+1),!l){const ye=new Error(`0 width match regex (${z})`);throw ye.languageName=z,ye.badRule=st.rule,ye}return 1}if(st=X,X.type==="begin")return Ye(X);if(X.type==="illegal"&&!Y){const ye=new Error('Illegal lexeme "'+ae+'" for mode "'+(ue.scope||"<unnamed>")+'"');throw ye.mode=ue,ye}else if(X.type==="end"){const ye=bt(X);if(ye!==Ao)return ye}if(X.type==="illegal"&&ae==="")return 1;if(ne>1e5&&ne>X.index*3)throw new Error("potential infinite loop, way more iterations than matches");return $e+=ae,ae.length}const ct=Z(z);if(!ct)throw hn(o.replace("{}",z)),new Error('Unknown language: "'+z+'"');const vt=Mf(ct);let Fe="",ue=te||vt;const wt={},Pe=new i.__emitter(i);Ue();let $e="",lt=0,De=0,ne=0,Se=!1;try{for(ue.matcher.considerAll();;){ne++,Se?Se=!1:ue.matcher.considerAll(),ue.matcher.lastIndex=De;const Q=ue.matcher.exec(U);if(!Q)break;const X=U.substring(De,Q.index),ae=Qe(X,Q);De=Q.index+ae}return Qe(U.substring(De)),Pe.closeAllNodes(),Pe.finalize(),Fe=Pe.toHTML(),{language:z,value:Fe,relevance:lt,illegal:!1,_emitter:Pe,_top:ue}}catch(Q){if(Q.message&&Q.message.includes("Illegal"))return{language:z,value:vl(U),illegal:!0,relevance:0,_illegalBy:{message:Q.message,index:De,context:U.slice(De-100,De+100),mode:Q.mode,resultSoFar:Fe},_emitter:Pe};if(l)return{language:z,value:vl(U),illegal:!1,relevance:0,errorRaised:Q,_emitter:Pe,_top:ue};throw Q}}function d(z){const U={value:vl(z),illegal:!1,relevance:0,_top:r,_emitter:new i.__emitter(i)};return U._emitter.addText(z),U}function p(z,U){U=U||i.languages||Object.keys(e);const Y=d(z),te=U.filter(Z).filter(oe).map(V=>f(V,z,!1));te.unshift(Y);const F=te.sort((V,xe)=>{if(V.relevance!==xe.relevance)return xe.relevance-V.relevance;if(V.language&&xe.language){if(Z(V.language).supersetOf===xe.language)return 1;if(Z(xe.language).supersetOf===V.language)return-1}return 0}),[pe,ie]=F,we=pe;return we.secondBest=ie,we}function g(z,U,Y){const te=U&&t[U]||Y;z.classList.add("hljs"),z.classList.add(`language-${te}`)}function $(z){let U=null;const Y=c(z);if(a(Y))return;if(be("before:highlightElement",{el:z,language:Y}),z.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(z)),i.throwUnescapedHTML))throw new Of("One of your code blocks includes unescaped HTML.",z.innerHTML);U=z;const te=U.textContent,F=Y?u(te,{language:Y,ignoreIllegals:!0}):p(te);z.innerHTML=F.value,g(z,Y,F.language),z.result={language:F.language,re:F.relevance,relevance:F.relevance},F.secondBest&&(z.secondBest={language:F.secondBest.language,relevance:F.secondBest.relevance}),be("after:highlightElement",{el:z,result:F,text:te})}function C(z){i=So(i,z)}const k=()=>{R(),In("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function v(){R(),In("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let S=!1;function R(){if(document.readyState==="loading"){S=!0;return}document.querySelectorAll(i.cssSelector).forEach($)}function N(){S&&R()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",N,!1);function y(z,U){let Y=null;try{Y=U(s)}catch(te){if(hn("Language definition for '{}' could not be registered.".replace("{}",z)),l)hn(te);else throw te;Y=r}Y.name||(Y.name=z),e[z]=Y,Y.rawDefinition=U.bind(null,s),Y.aliases&&ee(Y.aliases,{languageName:z})}function D(z){delete e[z];for(const U of Object.keys(t))t[U]===z&&delete t[U]}function B(){return Object.keys(e)}function Z(z){return z=(z||"").toLowerCase(),e[z]||e[t[z]]}function ee(z,{languageName:U}){typeof z=="string"&&(z=[z]),z.forEach(Y=>{t[Y.toLowerCase()]=U})}function oe(z){const U=Z(z);return U&&!U.disableAutodetect}function ce(z){z["before:highlightBlock"]&&!z["before:highlightElement"]&&(z["before:highlightElement"]=U=>{z["before:highlightBlock"](Object.assign({block:U.el},U))}),z["after:highlightBlock"]&&!z["after:highlightElement"]&&(z["after:highlightElement"]=U=>{z["after:highlightBlock"](Object.assign({block:U.el},U))})}function ve(z){ce(z),n.push(z)}function be(z,U){const Y=z;n.forEach(function(te){te[Y]&&te[Y](U)})}function Le(z){return In("10.7.0","highlightBlock will be removed entirely in v12.0"),In("10.7.0","Please use highlightElement now."),$(z)}Object.assign(s,{highlight:u,highlightAuto:p,highlightAll:R,highlightElement:$,highlightBlock:Le,configure:C,initHighlighting:k,initHighlightingOnLoad:v,registerLanguage:y,unregisterLanguage:D,listLanguages:B,getLanguage:Z,registerAliases:ee,autoDetection:oe,inherit:So,addPlugin:ve}),s.debugMode=function(){l=!1},s.safeMode=function(){l=!0},s.versionString=Pf,s.regex={concat:yn,lookahead:Fi,either:Fl,optional:Zu,anyNumberOfTimes:Gu};for(const z in Cs)typeof Cs[z]=="object"&&Bl.exports(Cs[z]);return Object.assign(s,Cs),s};var cs=Df({}),If=cs;cs.HighlightJS=cs;cs.default=cs;const Ns=If;function Bf(s){const e=s.regex,t=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),n=/[\p{L}0-9._:-]+/u,l={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},r=s.inherit(o,{begin:/\(/,end:/\)/}),i=s.inherit(s.APOS_STRING_MODE,{className:"string"}),a=s.inherit(s.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:n,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[l]},{begin:/'/,end:/'/,contains:[l]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,a,i,r,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,r,a,i]}]}]},s.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},l,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Co="[A-Za-z$_][0-9A-Za-z$_]*",zf=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Hf=["true","false","null","undefined","NaN","Infinity"],Xi=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Ji=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Yi=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Ff=["arguments","this","super","console","window","document","localStorage","module","global"],jf=[].concat(Yi,Xi,Ji);function Uf(s){const e=s.regex,t=(U,{after:Y})=>{const te="</"+U[0].slice(1);return U.input.indexOf(te,Y)!==-1},n=Co,l={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(U,Y)=>{const te=U[0].length+U.index,F=U.input[te];if(F==="<"||F===","){Y.ignoreMatch();return}F===">"&&(t(U,{after:te})||Y.ignoreMatch());let pe;const ie=U.input.substring(te);if(pe=ie.match(/^\s*=/)){Y.ignoreMatch();return}if((pe=ie.match(/^\s+extends\s+/))&&pe.index===0){Y.ignoreMatch();return}}},i={$pattern:Co,keyword:zf,literal:Hf,built_in:jf,"variable.language":Ff},a="[0-9](_?[0-9])*",c=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},g={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"css"}},$={className:"string",begin:"`",end:"`",contains:[s.BACKSLASH_ESCAPE,d]},k={className:"comment",variants:[s.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE]},v=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,p,g,$,{match:/\$\d+/},f];d.contains=v.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(v)});const S=[].concat(k,d.contains),R=S.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(S)}]),N={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R},y={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,e.concat(n,"(",e.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},D={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Xi,...Ji]}},B={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Z={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function oe(U){return e.concat("(?!",U.join("|"),")")}const ce={match:e.concat(/\b/,oe([...Yi,"super","import"]),n,e.lookahead(/\(/)),className:"title.function",relevance:0},ve={begin:e.concat(/\./,e.lookahead(e.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},be={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},Le="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+s.UNDERSCORE_IDENT_RE+")\\s*=>",z={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Le)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:D},illegal:/#(?![$_A-z])/,contains:[s.SHEBANG({label:"shebang",binary:"node",relevance:5}),B,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,p,g,$,k,{match:/\$\d+/},f,D,{className:"attr",begin:n+e.lookahead(":"),relevance:0},z,{begin:"("+s.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[k,s.REGEXP_MODE,{className:"function",begin:Le,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:l.begin,end:l.end},{match:o},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},Z,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+s.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,s.inherit(s.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},ve,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},ce,ee,y,be,{match:/\$[(.]/}]}}const qf=s=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:s.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:s.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),Kf=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Wf=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],Gf=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],Zf=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],Qf=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function Xf(s){const e=s.regex,t=qf(s),n={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},l="and or not only",o=/@-?\w[\w]*(-\w+)*/,r="[a-zA-Z-][a-zA-Z0-9_-]*",i=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,n,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+r,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Gf.join("|")+")"},{begin:":(:)?("+Zf.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Qf.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...i,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...i,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:e.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:o},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:l,attribute:Wf.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...i,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Kf.join("|")+")\\b"}]}}const Jf=s=>({highlighted:s&2}),No=s=>({highlighted:s[1]});function Yf(s){let e,t,n=[{"data-language":"svelte"},s[2]],l={};for(let o=0;o<n.length;o+=1)l=St(l,n[o]);return{c(){e=_("pre"),t=_("code"),h(t,"class","hljs"),po(e,l),re(e,"langtag",s[0]),re(e,"svelte-d72vtw",!0)},m(o,r){x(o,e,r),m(e,t),t.innerHTML=s[1]},p(o,r){r&2&&(t.innerHTML=o[1]),po(e,l=$n(n,[{"data-language":"svelte"},r&4&&o[2]])),re(e,"langtag",o[0]),re(e,"svelte-d72vtw",!0)},d(o){o&&E(e)}}}function Vf(s){let e;const t=s[5].default,n=Ce(t,s,s[4],No),l=n||Yf(s);return{c(){l&&l.c()},m(o,r){l&&l.m(o,r),e=!0},p(o,[r]){n?n.p&&(!e||r&18)&&Me(n,t,o,o[4],e?Ne(t,o[4],r,Jf):Re(o[4]),No):l&&l.p&&(!e||r&7)&&l.p(o,e?r:-1)},i(o){e||(w(l,o),e=!0)},o(o){T(l,o),e=!1},d(o){l&&l.d(o)}}}function ed(s,e,t){let n;const l=["code","langtag"];let o=Bs(e,l),{$$slots:r={},$$scope:i}=e,{code:a}=e,{langtag:c=!1}=e;const u=Ml();return Ns.registerLanguage("xml",Bf),Ns.registerLanguage("javascript",Uf),Ns.registerLanguage("css",Xf),Zc(()=>{n&&u("highlight",{highlighted:n})}),s.$$set=f=>{e=St(St({},e),_i(f)),t(2,o=Bs(e,l)),"code"in f&&t(3,a=f.code),"langtag"in f&&t(0,c=f.langtag),"$$scope"in f&&t(4,i=f.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(1,n=Ns.highlightAuto(a).value)},[c,n,o,a,i,r]}class td extends G{constructor(e){super(),W(this,e,ed,Vf,q,{code:3,langtag:0})}}const nd=td;function sd(s){let e,t,n,l;return n=new nd({props:{code:s[0]}}),{c(){e=_("h3"),e.textContent="Code",t=A(),L(n.$$.fragment)},m(o,r){x(o,e,r),x(o,t,r),P(n,o,r),l=!0},p(o,[r]){const i={};r&1&&(i.code=o[0]),n.$set(i)},i(o){l||(w(n.$$.fragment,o),l=!0)},o(o){T(n.$$.fragment,o),l=!1},d(o){o&&E(e),o&&E(t),O(n,o)}}}function ld(s,e,t){let{code:n=""}=e;return s.$$set=l=>{"code"in l&&t(0,n=l.code)},[n]}class dt extends G{constructor(e){super(),W(this,e,ld,sd,q,{code:0})}}function Tn(s){const e=document.title;bn(()=>document.title=s),Qs(()=>document.title=e)}const od=`<div class="component__source">Source <code>Tabs.svelte</code></div>
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
`;function rd(){const s=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||s(e)},bn(()=>{console.warn=s})}function Mo(s,e,t){const n=s.slice();return n[18]=e[t],n}function Ro(s,e,t){const n=s.slice();return n[18]=e[t],n}function Po(s,e,t){const n=s.slice();return n[10]=e[t],n}function Oo(s,e,t){const n=s.slice();return n[13]=e[t],n[15]=t,n}function Lo(s,e,t){const n=s.slice();return n[16]=e[t],n[15]=t,n}function Do(s,e,t){const n=s.slice();return n[7]=e[t],n}function id(s){let e,t,n,l;const o=[fd,ud,cd],r=[];function i(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=i(s),t=r[e]=o[e](s),{c(){t.c(),n=Ee()},m(a,c){r[e].m(a,c),x(a,n,c),l=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(he(),T(r[u],1,1,()=>{r[u]=null}),me(),t=r[e],t?t.p(a,c):(t=r[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){T(t),l=!1},d(a){r[e].d(a),a&&E(n)}}}function ad(s){let e,t,n=s[1],l=[];for(let r=0;r<n.length;r+=1)l[r]=jo(Do(s,n,r));const o=r=>T(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=Ee()},m(r,i){for(let a=0;a<l.length;a+=1)l[a].m(r,i);x(r,e,i),t=!0},p(r,i){if(i&34){n=r[1];let a;for(a=0;a<n.length;a+=1){const c=Do(r,n,a);l[a]?(l[a].p(c,i),w(l[a],1)):(l[a]=jo(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(he(),a=n.length;a<l.length;a+=1)o(a);me()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)w(l[i]);t=!0}},o(r){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)T(l[i]);t=!1},d(r){He(l,r),r&&E(e)}}}function cd(s){let e,t,n;const l=[s[6]];var o=s[5][s[0]];function r(i){let a={$$slots:{default:[hd]},$$scope:{ctx:i}};for(let c=0;c<l.length;c+=1)a=St(a,l[c]);return{props:a}}return o&&(e=ze(o,r(s))),{c(){e&&L(e.$$.fragment),t=Ee()},m(i,a){e&&P(e,i,a),x(i,t,a),n=!0},p(i,a){const c=a&64?$n(l,[qn(i[6])]):{};if(a&8388706&&(c.$$scope={dirty:a,ctx:i}),o!==(o=i[5][i[0]])){if(e){he();const u=e;T(u.$$.fragment,1,0,()=>{O(u,1)}),me()}o?(e=ze(o,r(i)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&T(e.$$.fragment,i),n=!1},d(i){i&&E(t),e&&O(e,i)}}}function ud(s){let e,t,n,l;const o=[gd,md],r=[];function i(a,c){return a[4]?0:1}return e=i(s),t=r[e]=o[e](s),{c(){t.c(),n=Ee()},m(a,c){r[e].m(a,c),x(a,n,c),l=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(he(),T(r[u],1,1,()=>{r[u]=null}),me(),t=r[e],t?t.p(a,c):(t=r[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){T(t),l=!1},d(a){r[e].d(a),a&&E(n)}}}function fd(s){let e,t,n;var l=s[5].table;function o(r){return{props:{$$slots:{default:[Sd]},$$scope:{ctx:r}}}}return l&&(e=ze(l,o(s))),{c(){e&&L(e.$$.fragment),t=Ee()},m(r,i){e&&P(e,r,i),x(r,t,i),n=!0},p(r,i){const a={};if(i&8388716&&(a.$$scope={dirty:i,ctx:r}),l!==(l=r[5].table)){if(e){he();const c=e;T(c.$$.fragment,1,0,()=>{O(c,1)}),me()}l?(e=ze(l,o(r)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(r){n||(e&&w(e.$$.fragment,r),n=!0)},o(r){e&&T(e.$$.fragment,r),n=!1},d(r){r&&E(t),e&&O(e,r)}}}function dd(s){let e=s[6].raw+"",t;return{c(){t=H(e)},m(n,l){x(n,t,l)},p(n,l){l&64&&e!==(e=n[6].raw+"")&&et(t,e)},i:K,o:K,d(n){n&&E(t)}}}function pd(s){let e,t;return e=new En({props:{tokens:s[1],renderers:s[5]}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&2&&(o.tokens=n[1]),l&32&&(o.renderers=n[5]),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function hd(s){let e,t,n,l;const o=[pd,dd],r=[];function i(a,c){return a[1]?0:1}return e=i(s),t=r[e]=o[e](s),{c(){t.c(),n=Ee()},m(a,c){r[e].m(a,c),x(a,n,c),l=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(he(),T(r[u],1,1,()=>{r[u]=null}),me(),t=r[e],t?t.p(a,c):(t=r[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){T(t),l=!1},d(a){r[e].d(a),a&&E(n)}}}function md(s){let e,t,n;const l=[{ordered:s[4]},s[6]];var o=s[5].list;function r(i){let a={$$slots:{default:[bd]},$$scope:{ctx:i}};for(let c=0;c<l.length;c+=1)a=St(a,l[c]);return{props:a}}return o&&(e=ze(o,r(s))),{c(){e&&L(e.$$.fragment),t=Ee()},m(i,a){e&&P(e,i,a),x(i,t,a),n=!0},p(i,a){const c=a&80?$n(l,[a&16&&{ordered:i[4]},a&64&&qn(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),o!==(o=i[5].list)){if(e){he();const u=e;T(u.$$.fragment,1,0,()=>{O(u,1)}),me()}o?(e=ze(o,r(i)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&T(e.$$.fragment,i),n=!1},d(i){i&&E(t),e&&O(e,i)}}}function gd(s){let e,t,n;const l=[{ordered:s[4]},s[6]];var o=s[5].list;function r(i){let a={$$slots:{default:[vd]},$$scope:{ctx:i}};for(let c=0;c<l.length;c+=1)a=St(a,l[c]);return{props:a}}return o&&(e=ze(o,r(s))),{c(){e&&L(e.$$.fragment),t=Ee()},m(i,a){e&&P(e,i,a),x(i,t,a),n=!0},p(i,a){const c=a&80?$n(l,[a&16&&{ordered:i[4]},a&64&&qn(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),o!==(o=i[5].list)){if(e){he();const u=e;T(u.$$.fragment,1,0,()=>{O(u,1)}),me()}o?(e=ze(o,r(i)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&T(e.$$.fragment,i),n=!1},d(i){i&&E(t),e&&O(e,i)}}}function _d(s){let e,t,n;return e=new En({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){L(e.$$.fragment),t=A()},m(l,o){P(e,l,o),x(l,t,o),n=!0},p(l,o){const r={};o&64&&(r.tokens=l[18].tokens),o&32&&(r.renderers=l[5]),e.$set(r)},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){O(e,l),l&&E(t)}}}function Io(s){let e,t,n;const l=[s[18]];var o=s[5].unorderedlistitem||s[5].listitem;function r(i){let a={$$slots:{default:[_d]},$$scope:{ctx:i}};for(let c=0;c<l.length;c+=1)a=St(a,l[c]);return{props:a}}return o&&(e=ze(o,r(s))),{c(){e&&L(e.$$.fragment),t=Ee()},m(i,a){e&&P(e,i,a),x(i,t,a),n=!0},p(i,a){const c=a&64?$n(l,[qn(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),o!==(o=i[5].unorderedlistitem||i[5].listitem)){if(e){he();const u=e;T(u.$$.fragment,1,0,()=>{O(u,1)}),me()}o?(e=ze(o,r(i)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&T(e.$$.fragment,i),n=!1},d(i){i&&E(t),e&&O(e,i)}}}function bd(s){let e,t,n=s[6].items,l=[];for(let r=0;r<n.length;r+=1)l[r]=Io(Mo(s,n,r));const o=r=>T(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=Ee()},m(r,i){for(let a=0;a<l.length;a+=1)l[a].m(r,i);x(r,e,i),t=!0},p(r,i){if(i&96){n=r[6].items;let a;for(a=0;a<n.length;a+=1){const c=Mo(r,n,a);l[a]?(l[a].p(c,i),w(l[a],1)):(l[a]=Io(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(he(),a=n.length;a<l.length;a+=1)o(a);me()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)w(l[i]);t=!0}},o(r){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)T(l[i]);t=!1},d(r){He(l,r),r&&E(e)}}}function $d(s){let e,t,n;return e=new En({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){L(e.$$.fragment),t=A()},m(l,o){P(e,l,o),x(l,t,o),n=!0},p(l,o){const r={};o&64&&(r.tokens=l[18].tokens),o&32&&(r.renderers=l[5]),e.$set(r)},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){O(e,l),l&&E(t)}}}function Bo(s){let e,t,n;const l=[s[18]];var o=s[5].orderedlistitem||s[5].listitem;function r(i){let a={$$slots:{default:[$d]},$$scope:{ctx:i}};for(let c=0;c<l.length;c+=1)a=St(a,l[c]);return{props:a}}return o&&(e=ze(o,r(s))),{c(){e&&L(e.$$.fragment),t=Ee()},m(i,a){e&&P(e,i,a),x(i,t,a),n=!0},p(i,a){const c=a&64?$n(l,[qn(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),o!==(o=i[5].orderedlistitem||i[5].listitem)){if(e){he();const u=e;T(u.$$.fragment,1,0,()=>{O(u,1)}),me()}o?(e=ze(o,r(i)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&T(e.$$.fragment,i),n=!1},d(i){i&&E(t),e&&O(e,i)}}}function vd(s){let e,t,n=s[6].items,l=[];for(let r=0;r<n.length;r+=1)l[r]=Bo(Ro(s,n,r));const o=r=>T(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=Ee()},m(r,i){for(let a=0;a<l.length;a+=1)l[a].m(r,i);x(r,e,i),t=!0},p(r,i){if(i&96){n=r[6].items;let a;for(a=0;a<n.length;a+=1){const c=Ro(r,n,a);l[a]?(l[a].p(c,i),w(l[a],1)):(l[a]=Bo(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(he(),a=n.length;a<l.length;a+=1)o(a);me()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)w(l[i]);t=!0}},o(r){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)T(l[i]);t=!1},d(r){He(l,r),r&&E(e)}}}function wd(s){let e,t,n;return e=new En({props:{tokens:s[16].tokens,renderers:s[5]}}),{c(){L(e.$$.fragment),t=A()},m(l,o){P(e,l,o),x(l,t,o),n=!0},p(l,o){const r={};o&4&&(r.tokens=l[16].tokens),o&32&&(r.renderers=l[5]),e.$set(r)},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){O(e,l),l&&E(t)}}}function zo(s){let e,t,n;var l=s[5].tablecell;function o(r){return{props:{header:!0,align:r[6].align[r[15]]||"center",$$slots:{default:[wd]},$$scope:{ctx:r}}}}return l&&(e=ze(l,o(s))),{c(){e&&L(e.$$.fragment),t=Ee()},m(r,i){e&&P(e,r,i),x(r,t,i),n=!0},p(r,i){const a={};if(i&64&&(a.align=r[6].align[r[15]]||"center"),i&8388644&&(a.$$scope={dirty:i,ctx:r}),l!==(l=r[5].tablecell)){if(e){he();const c=e;T(c.$$.fragment,1,0,()=>{O(c,1)}),me()}l?(e=ze(l,o(r)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(r){n||(e&&w(e.$$.fragment,r),n=!0)},o(r){e&&T(e.$$.fragment,r),n=!1},d(r){r&&E(t),e&&O(e,r)}}}function kd(s){let e,t,n=s[2],l=[];for(let r=0;r<n.length;r+=1)l[r]=zo(Lo(s,n,r));const o=r=>T(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=Ee()},m(r,i){for(let a=0;a<l.length;a+=1)l[a].m(r,i);x(r,e,i),t=!0},p(r,i){if(i&100){n=r[2];let a;for(a=0;a<n.length;a+=1){const c=Lo(r,n,a);l[a]?(l[a].p(c,i),w(l[a],1)):(l[a]=zo(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(he(),a=n.length;a<l.length;a+=1)o(a);me()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)w(l[i]);t=!0}},o(r){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)T(l[i]);t=!1},d(r){He(l,r),r&&E(e)}}}function yd(s){let e,t,n;var l=s[5].tablerow;function o(r){return{props:{$$slots:{default:[kd]},$$scope:{ctx:r}}}}return l&&(e=ze(l,o(s))),{c(){e&&L(e.$$.fragment),t=Ee()},m(r,i){e&&P(e,r,i),x(r,t,i),n=!0},p(r,i){const a={};if(i&8388708&&(a.$$scope={dirty:i,ctx:r}),l!==(l=r[5].tablerow)){if(e){he();const c=e;T(c.$$.fragment,1,0,()=>{O(c,1)}),me()}l?(e=ze(l,o(r)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(r){n||(e&&w(e.$$.fragment,r),n=!0)},o(r){e&&T(e.$$.fragment,r),n=!1},d(r){r&&E(t),e&&O(e,r)}}}function Td(s){let e,t;return e=new En({props:{tokens:s[13].tokens,renderers:s[5]}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&8&&(o.tokens=n[13].tokens),l&32&&(o.renderers=n[5]),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Ho(s){let e,t,n;var l=s[5].tablecell;function o(r){return{props:{header:!1,align:r[6].align[r[15]]||"center",$$slots:{default:[Td]},$$scope:{ctx:r}}}}return l&&(e=ze(l,o(s))),{c(){e&&L(e.$$.fragment),t=Ee()},m(r,i){e&&P(e,r,i),x(r,t,i),n=!0},p(r,i){const a={};if(i&64&&(a.align=r[6].align[r[15]]||"center"),i&8388648&&(a.$$scope={dirty:i,ctx:r}),l!==(l=r[5].tablecell)){if(e){he();const c=e;T(c.$$.fragment,1,0,()=>{O(c,1)}),me()}l?(e=ze(l,o(r)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(r){n||(e&&w(e.$$.fragment,r),n=!0)},o(r){e&&T(e.$$.fragment,r),n=!1},d(r){r&&E(t),e&&O(e,r)}}}function Ed(s){let e,t,n=s[10],l=[];for(let r=0;r<n.length;r+=1)l[r]=Ho(Oo(s,n,r));const o=r=>T(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=A()},m(r,i){for(let a=0;a<l.length;a+=1)l[a].m(r,i);x(r,e,i),t=!0},p(r,i){if(i&104){n=r[10];let a;for(a=0;a<n.length;a+=1){const c=Oo(r,n,a);l[a]?(l[a].p(c,i),w(l[a],1)):(l[a]=Ho(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(he(),a=n.length;a<l.length;a+=1)o(a);me()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)w(l[i]);t=!0}},o(r){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)T(l[i]);t=!1},d(r){He(l,r),r&&E(e)}}}function Fo(s){let e,t,n;var l=s[5].tablerow;function o(r){return{props:{$$slots:{default:[Ed]},$$scope:{ctx:r}}}}return l&&(e=ze(l,o(s))),{c(){e&&L(e.$$.fragment),t=Ee()},m(r,i){e&&P(e,r,i),x(r,t,i),n=!0},p(r,i){const a={};if(i&8388712&&(a.$$scope={dirty:i,ctx:r}),l!==(l=r[5].tablerow)){if(e){he();const c=e;T(c.$$.fragment,1,0,()=>{O(c,1)}),me()}l?(e=ze(l,o(r)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else l&&e.$set(a)},i(r){n||(e&&w(e.$$.fragment,r),n=!0)},o(r){e&&T(e.$$.fragment,r),n=!1},d(r){r&&E(t),e&&O(e,r)}}}function xd(s){let e,t,n=s[3],l=[];for(let r=0;r<n.length;r+=1)l[r]=Fo(Po(s,n,r));const o=r=>T(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=Ee()},m(r,i){for(let a=0;a<l.length;a+=1)l[a].m(r,i);x(r,e,i),t=!0},p(r,i){if(i&104){n=r[3];let a;for(a=0;a<n.length;a+=1){const c=Po(r,n,a);l[a]?(l[a].p(c,i),w(l[a],1)):(l[a]=Fo(c),l[a].c(),w(l[a],1),l[a].m(e.parentNode,e))}for(he(),a=n.length;a<l.length;a+=1)o(a);me()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)w(l[i]);t=!0}},o(r){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)T(l[i]);t=!1},d(r){He(l,r),r&&E(e)}}}function Sd(s){let e,t,n,l,o;var r=s[5].tablehead;function i(u){return{props:{$$slots:{default:[yd]},$$scope:{ctx:u}}}}r&&(e=ze(r,i(s)));var a=s[5].tablebody;function c(u){return{props:{$$slots:{default:[xd]},$$scope:{ctx:u}}}}return a&&(n=ze(a,c(s))),{c(){e&&L(e.$$.fragment),t=A(),n&&L(n.$$.fragment),l=Ee()},m(u,f){e&&P(e,u,f),x(u,t,f),n&&P(n,u,f),x(u,l,f),o=!0},p(u,f){const d={};if(f&8388708&&(d.$$scope={dirty:f,ctx:u}),r!==(r=u[5].tablehead)){if(e){he();const g=e;T(g.$$.fragment,1,0,()=>{O(g,1)}),me()}r?(e=ze(r,i(u)),L(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else r&&e.$set(d);const p={};if(f&8388712&&(p.$$scope={dirty:f,ctx:u}),a!==(a=u[5].tablebody)){if(n){he();const g=n;T(g.$$.fragment,1,0,()=>{O(g,1)}),me()}a?(n=ze(a,c(u)),L(n.$$.fragment),w(n.$$.fragment,1),P(n,l.parentNode,l)):n=null}else a&&n.$set(p)},i(u){o||(e&&w(e.$$.fragment,u),n&&w(n.$$.fragment,u),o=!0)},o(u){e&&T(e.$$.fragment,u),n&&T(n.$$.fragment,u),o=!1},d(u){e&&O(e,u),u&&E(t),u&&E(l),n&&O(n,u)}}}function jo(s){let e,t;const n=[s[7],{renderers:s[5]}];let l={};for(let o=0;o<n.length;o+=1)l=St(l,n[o]);return e=new En({props:l}),{c(){L(e.$$.fragment)},m(o,r){P(e,o,r),t=!0},p(o,r){const i=r&34?$n(n,[r&2&&qn(o[7]),r&32&&{renderers:o[5]}]):{};e.$set(i)},i(o){t||(w(e.$$.fragment,o),t=!0)},o(o){T(e.$$.fragment,o),t=!1},d(o){O(e,o)}}}function Ad(s){let e,t,n,l;const o=[ad,id],r=[];function i(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=i(s))&&(t=r[e]=o[e](s)),{c(){t&&t.c(),n=Ee()},m(a,c){~e&&r[e].m(a,c),x(a,n,c),l=!0},p(a,[c]){let u=e;e=i(a),e===u?~e&&r[e].p(a,c):(t&&(he(),T(r[u],1,1,()=>{r[u]=null}),me()),~e?(t=r[e],t?t.p(a,c):(t=r[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n)):t=null)},i(a){l||(w(t),l=!0)},o(a){T(t),l=!1},d(a){~e&&r[e].d(a),a&&E(n)}}}function Cd(s,e,t){const n=["type","tokens","header","rows","ordered","renderers"];let l=Bs(e,n),{type:o=void 0}=e,{tokens:r=void 0}=e,{header:i=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return rd(),s.$$set=f=>{e=St(St({},e),_i(f)),t(6,l=Bs(e,n)),"type"in f&&t(0,o=f.type),"tokens"in f&&t(1,r=f.tokens),"header"in f&&t(2,i=f.header),"rows"in f&&t(3,a=f.rows),"ordered"in f&&t(4,c=f.ordered),"renderers"in f&&t(5,u=f.renderers)},[o,r,i,a,c,u,l]}let En=class extends G{constructor(e){super(),W(this,e,Cd,Ad,q,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}};function Vi(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Wn=Vi();function Nd(s){Wn=s}const ea=/[&<>"']/,Md=new RegExp(ea.source,"g"),ta=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Rd=new RegExp(ta.source,"g"),Pd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Uo=s=>Pd[s];function at(s,e){if(e){if(ea.test(s))return s.replace(Md,Uo)}else if(ta.test(s))return s.replace(Rd,Uo);return s}const Od=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function na(s){return s.replace(Od,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Ld=/(^|[^\[])\^/g;function Ie(s,e){s=typeof s=="string"?s:s.source,e=e||"";const t={replace:(n,l)=>(l=l.source||l,l=l.replace(Ld,"$1"),s=s.replace(n,l),t),getRegex:()=>new RegExp(s,e)};return t}const Dd=/[^\w:]/g,Id=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function qo(s,e,t){if(s){let n;try{n=decodeURIComponent(na(t)).replace(Dd,"").toLowerCase()}catch(l){return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!Id.test(t)&&(t=Fd(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(n){return null}return t}const Ms={},Bd=/^[^:]+:\/*[^/]*$/,zd=/^([^:]+:)[\s\S]*$/,Hd=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Fd(s,e){Ms[" "+s]||(Bd.test(s)?Ms[" "+s]=s+"/":Ms[" "+s]=Ds(s,"/",!0)),s=Ms[" "+s];const t=s.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:s.replace(zd,"$1")+e:e.charAt(0)==="/"?t?e:s.replace(Hd,"$1")+e:s+e}const qs={exec:function(){}};function Pt(s){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s}function Ko(s,e){const t=s.replace(/\|/g,(o,r,i)=>{let a=!1,c=r;for(;--c>=0&&i[c]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let l=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;l<n.length;l++)n[l]=n[l].trim().replace(/\\\|/g,"|");return n}function Ds(s,e,t){const n=s.length;if(n===0)return"";let l=0;for(;l<n;){const o=s.charAt(n-l-1);if(o===e&&!t)l++;else if(o!==e&&t)l++;else break}return s.slice(0,n-l)}function jd(s,e){if(s.indexOf(e[1])===-1)return-1;const t=s.length;let n=0,l=0;for(;l<t;l++)if(s[l]==="\\")l++;else if(s[l]===e[0])n++;else if(s[l]===e[1]&&(n--,n<0))return l;return-1}function sa(s){s&&s.sanitize&&!s.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Wo(s,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=s),e>>=1,s+=s;return t+s}function Go(s,e,t,n){const l=e.href,o=e.title?at(e.title):null,r=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){n.state.inLink=!0;const i={type:"link",raw:t,href:l,title:o,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,i}return{type:"image",raw:t,href:l,title:o,text:at(r)}}function Ud(s,e){const t=s.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(l=>{const o=l.match(/^\s+/);if(o===null)return l;const[r]=o;return r.length>=n.length?l.slice(n.length):l}).join(`
`)}class ql{constructor(e){this.options=e||Wn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Ds(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],l=Ud(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:l}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const l=Ds(n,"#");(this.options.pedantic||!l||/ $/.test(l))&&(n=l.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,""),l=this.lexer.state.top;this.lexer.state.top=!0;const o=this.lexer.blockTokens(n);return this.lexer.state.top=l,{type:"blockquote",raw:t[0],tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,l,o,r,i,a,c,u,f,d,p,g,$=t[1].trim();const C=$.length>1,k={type:"list",raw:"",ordered:C,start:C?+$.slice(0,-1):"",loose:!1,items:[]};$=C?`\\d{1,9}\\${$.slice(-1)}`:`\\${$}`,this.options.pedantic&&($=C?$:"[*+-]");const v=new RegExp(`^( {0,3}${$})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,!(!(t=v.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,R=>" ".repeat(3*R.length)),f=e.split(`
`,1)[0],this.options.pedantic?(r=2,p=u.trimLeft()):(r=t[2].search(/[^ ]/),r=r>4?1:r,p=u.slice(r),r+=t[1].length),a=!1,!u&&/^ *$/.test(f)&&(n+=f+`
`,e=e.substring(f.length+1),g=!0),!g){const R=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),N=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),y=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),D=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],f=d,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(y.test(f)||D.test(f)||R.test(f)||N.test(e)));){if(f.search(/[^ ]/)>=r||!f.trim())p+=`
`+f.slice(r);else{if(a||u.search(/[^ ]/)>=4||y.test(u)||D.test(u)||N.test(u))break;p+=`
`+f}!a&&!f.trim()&&(a=!0),n+=d+`
`,e=e.substring(d.length+1),u=f.slice(r)}}k.loose||(c?k.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(l=/^\[[ xX]\] /.exec(p),l&&(o=l[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),k.items.push({type:"list_item",raw:n,task:!!l,checked:o,loose:!1,text:p}),k.raw+=n}k.items[k.items.length-1].raw=n.trimRight(),k.items[k.items.length-1].text=p.trimRight(),k.raw=k.raw.trimRight();const S=k.items.length;for(i=0;i<S;i++)if(this.lexer.state.top=!1,k.items[i].tokens=this.lexer.blockTokens(k.items[i].text,[]),!k.loose){const R=k.items[i].tokens.filter(y=>y.type==="space"),N=R.length>0&&R.some(y=>/\n.*\n/.test(y.raw));k.loose=N}if(k.loose)for(i=0;i<S;i++)k.items[i].loose=!0;return k}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const l=this.options.sanitizer?this.options.sanitizer(t[0]):at(t[0]);n.type="paragraph",n.text=l,n.tokens=this.lexer.inline(l)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),l=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:l,title:o}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:Ko(t[1]).map(l=>({text:l})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let l=n.align.length,o,r,i,a;for(o=0;o<l;o++)/^ *-+: *$/.test(n.align[o])?n.align[o]="right":/^ *:-+: *$/.test(n.align[o])?n.align[o]="center":/^ *:-+ *$/.test(n.align[o])?n.align[o]="left":n.align[o]=null;for(l=n.rows.length,o=0;o<l;o++)n.rows[o]=Ko(n.rows[o],n.header.length).map(c=>({text:c}));for(l=n.header.length,r=0;r<l;r++)n.header[r].tokens=this.lexer.inline(n.header[r].text);for(l=n.rows.length,r=0;r<l;r++)for(a=n.rows[r],i=0;i<a.length;i++)a[i].tokens=this.lexer.inline(a[i].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:at(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):at(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=Ds(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=jd(t[2],"()");if(r>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let l=t[2],o="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);r&&(l=r[1],o=r[3])}else o=t[3]?t[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(this.options.pedantic&&!/>$/.test(n)?l=l.slice(1):l=l.slice(1,-1)),Go(t,{href:l&&l.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let l=(n[2]||n[1]).replace(/\s+/g," ");if(l=t[l.toLowerCase()],!l){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Go(n,l,n[0],this.lexer)}}emStrong(e,t,n=""){let l=this.rules.inline.emStrong.lDelim.exec(e);if(!l||l[3]&&n.match(/[\p{L}\p{N}]/u))return;const o=l[1]||l[2]||"";if(!o||o&&(n===""||this.rules.inline.punctuation.exec(n))){const r=l[0].length-1;let i,a,c=r,u=0;const f=l[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+r);(l=f.exec(t))!=null;){if(i=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!i)continue;if(a=i.length,l[3]||l[4]){c+=a;continue}else if((l[5]||l[6])&&r%3&&!((r+a)%3)){u+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+u);const d=e.slice(0,r+l.index+(l[0].length-i.length)+a);if(Math.min(r,a)%2){const g=d.slice(1,-1);return{type:"em",raw:d,text:g,tokens:this.lexer.inlineTokens(g)}}const p=d.slice(2,-2);return{type:"strong",raw:d,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const l=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return l&&o&&(n=n.substring(1,n.length-1)),n=at(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let l,o;return n[2]==="@"?(l=at(this.options.mangle?t(n[1]):n[1]),o="mailto:"+l):(l=at(n[1]),o=l),{type:"link",raw:n[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let l,o;if(n[2]==="@")l=at(this.options.mangle?t(n[0]):n[0]),o="mailto:"+l;else{let r;do r=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(r!==n[0]);l=at(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let l;return this.lexer.state.inRawBlock?l=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):at(n[0]):n[0]:l=at(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:l}}}}const de={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:qs,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};de._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;de._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;de.def=Ie(de.def).replace("label",de._label).replace("title",de._title).getRegex();de.bullet=/(?:[*+-]|\d{1,9}[.)])/;de.listItemStart=Ie(/^( *)(bull) */).replace("bull",de.bullet).getRegex();de.list=Ie(de.list).replace(/bull/g,de.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+de.def.source+")").getRegex();de._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";de._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;de.html=Ie(de.html,"i").replace("comment",de._comment).replace("tag",de._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();de.paragraph=Ie(de._paragraph).replace("hr",de.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de._tag).getRegex();de.blockquote=Ie(de.blockquote).replace("paragraph",de.paragraph).getRegex();de.normal=Pt({},de);de.gfm=Pt({},de.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});de.gfm.table=Ie(de.gfm.table).replace("hr",de.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de._tag).getRegex();de.gfm.paragraph=Ie(de._paragraph).replace("hr",de.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",de.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de._tag).getRegex();de.pedantic=Pt({},de.normal,{html:Ie(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",de._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:qs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ie(de.normal._paragraph).replace("hr",de.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",de.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const le={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:qs,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:qs,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};le._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";le.punctuation=Ie(le.punctuation).replace(/punctuation/g,le._punctuation).getRegex();le.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;le.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;le._comment=Ie(de._comment).replace("(?:-->|$)","-->").getRegex();le.emStrong.lDelim=Ie(le.emStrong.lDelim).replace(/punct/g,le._punctuation).getRegex();le.emStrong.rDelimAst=Ie(le.emStrong.rDelimAst,"g").replace(/punct/g,le._punctuation).getRegex();le.emStrong.rDelimUnd=Ie(le.emStrong.rDelimUnd,"g").replace(/punct/g,le._punctuation).getRegex();le._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;le._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;le._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;le.autolink=Ie(le.autolink).replace("scheme",le._scheme).replace("email",le._email).getRegex();le._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;le.tag=Ie(le.tag).replace("comment",le._comment).replace("attribute",le._attribute).getRegex();le._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;le._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;le._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;le.link=Ie(le.link).replace("label",le._label).replace("href",le._href).replace("title",le._title).getRegex();le.reflink=Ie(le.reflink).replace("label",le._label).replace("ref",de._label).getRegex();le.nolink=Ie(le.nolink).replace("ref",de._label).getRegex();le.reflinkSearch=Ie(le.reflinkSearch,"g").replace("reflink",le.reflink).replace("nolink",le.nolink).getRegex();le.normal=Pt({},le);le.pedantic=Pt({},le.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ie(/^!?\[(label)\]\((.*?)\)/).replace("label",le._label).getRegex(),reflink:Ie(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",le._label).getRegex()});le.gfm=Pt({},le.normal,{escape:Ie(le.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});le.gfm.url=Ie(le.gfm.url,"i").replace("email",le.gfm._extended_email).getRegex();le.breaks=Pt({},le.gfm,{br:Ie(le.br).replace("{2,}","*").getRegex(),text:Ie(le.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function qd(s){return s.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Zo(s){let e="",t,n;const l=s.length;for(t=0;t<l;t++)n=s.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class Ft{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Wn,this.options.tokenizer=this.options.tokenizer||new ql,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:de.normal,inline:le.normal};this.options.pedantic?(t.block=de.pedantic,t.inline=le.pedantic):this.options.gfm&&(t.block=de.gfm,this.options.breaks?t.inline=le.breaks:t.inline=le.gfm),this.tokenizer.rules=t}static get rules(){return{block:de,inline:le}}static lex(e,t){return new Ft(t).lex(e)}static lexInline(e,t){return new Ft(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(i,a,c)=>a+"    ".repeat(c.length));let n,l,o,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(i=>(n=i.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+n.raw,l.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+n.raw,l.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=l.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let i=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(i=Math.min(i,c))}),i<1/0&&i>=0&&(o=e.substring(0,i+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){l=t[t.length-1],r&&l.type==="paragraph"?(l.raw+=`
`+n.raw,l.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(n),r=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&l.type==="text"?(l.raw+=`
`+n.raw,l.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(n);continue}if(e){const i="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,l,o,r=e,i,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+Wo("a",i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+Wo("a",i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(r))!=null;)r=r.slice(0,i.index+i[0].length-2)+"++"+r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),l=t[t.length-1],l&&n.type==="text"&&l.type==="text"?(l.raw+=n.raw,l.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),l=t[t.length-1],l&&n.type==="text"&&l.type==="text"?(l.raw+=n.raw,l.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,Zo)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,Zo))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let d;this.options.extensions.startInline.forEach(function(p){d=p.call({lexer:this},f),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(o=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(o,qd)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),a=!0,l=t[t.length-1],l&&l.type==="text"?(l.raw+=n.raw,l.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Kl{constructor(e){this.options=e||Wn}code(e,t,n){const l=(t||"").match(/\S*/)[0];if(this.options.highlight){const o=this.options.highlight(e,l);o!=null&&o!==e&&(n=!0,e=o)}return e=e.replace(/\n$/,"")+`
`,l?'<pre><code class="'+this.options.langPrefix+at(l)+'">'+(n?e:at(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:at(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=qo(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let l='<a href="'+e+'"';return t&&(l+=' title="'+t+'"'),l+=">"+n+"</a>",l}image(e,t,n){if(e=qo(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let l=`<img src="${e}" alt="${n}"`;return t&&(l+=` title="${t}"`),l+=this.options.xhtml?"/>":">",l}text(e){return e}}class la{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class Wl{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,l=0;if(this.seen.hasOwnProperty(n)){l=this.seen[e];do l++,n=e+"-"+l;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=l,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class Bt{constructor(e){this.options=e||Wn,this.options.renderer=this.options.renderer||new Kl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new la,this.slugger=new Wl}static parse(e,t){return new Bt(t).parse(e)}static parseInline(e,t){return new Bt(t).parseInline(e)}parse(e,t=!0){let n="",l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S,R,N,y;const D=e.length;for(l=0;l<D;l++){if(p=e[l],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(y=this.options.extensions.renderers[p.type].call({parser:this},p),y!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){n+=y||"";continue}switch(p.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(p.tokens),p.depth,na(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(f="",u="",i=p.header.length,o=0;o<i;o++)u+=this.renderer.tablecell(this.parseInline(p.header[o].tokens),{header:!0,align:p.align[o]});for(f+=this.renderer.tablerow(u),d="",i=p.rows.length,o=0;o<i;o++){for(c=p.rows[o],u="",a=c.length,r=0;r<a;r++)u+=this.renderer.tablecell(this.parseInline(c[r].tokens),{header:!1,align:p.align[r]});d+=this.renderer.tablerow(u)}n+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(p.tokens),n+=this.renderer.blockquote(d);continue}case"list":{for(g=p.ordered,$=p.start,C=p.loose,i=p.items.length,d="",o=0;o<i;o++)v=p.items[o],S=v.checked,R=v.task,k="",v.task&&(N=this.renderer.checkbox(S),C?v.tokens.length>0&&v.tokens[0].type==="paragraph"?(v.tokens[0].text=N+" "+v.tokens[0].text,v.tokens[0].tokens&&v.tokens[0].tokens.length>0&&v.tokens[0].tokens[0].type==="text"&&(v.tokens[0].tokens[0].text=N+" "+v.tokens[0].tokens[0].text)):v.tokens.unshift({type:"text",text:N}):k+=N),k+=this.parse(v.tokens,C),d+=this.renderer.listitem(k,R,S);n+=this.renderer.list(d,g,$);continue}case"html":{n+=this.renderer.html(p.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(d=p.tokens?this.parseInline(p.tokens):p.text;l+1<D&&e[l+1].type==="text";)p=e[++l],d+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);n+=t?this.renderer.paragraph(d):d;continue}default:{const B='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(B);return}else throw new Error(B)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",l,o,r;const i=e.length;for(l=0;l<i;l++){if(o=e[l],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(r=this.options.extensions.renderers[o.type].call({parser:this},o),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type))){n+=r||"";continue}switch(o.type){case"escape":{n+=t.text(o.text);break}case"html":{n+=t.html(o.text);break}case"link":{n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{n+=t.image(o.href,o.title,o.text);break}case"strong":{n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(o.tokens,t));break}case"text":{n+=t.text(o.text);break}default:{const a='Token with "'+o.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return n}}function _e(s,e,t){if(typeof s=="undefined"||s===null)throw new Error("marked(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=Pt({},_e.defaults,e||{}),sa(e),t){const l=e.highlight;let o;try{o=Ft.lex(s,e)}catch(a){return t(a)}const r=function(a){let c;if(!a)try{e.walkTokens&&_e.walkTokens(o,e.walkTokens),c=Bt.parse(o,e)}catch(u){a=u}return e.highlight=l,a?t(a):t(null,c)};if(!l||l.length<3||(delete e.highlight,!o.length))return r();let i=0;_e.walkTokens(o,function(a){a.type==="code"&&(i++,setTimeout(()=>{l(a.text,a.lang,function(c,u){if(c)return r(c);u!=null&&u!==a.text&&(a.text=u,a.escaped=!0),i--,i===0&&r()})},0))}),i===0&&r();return}function n(l){if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+at(l.message+"",!0)+"</pre>";throw l}try{const l=Ft.lex(s,e);if(e.walkTokens){if(e.async)return Promise.all(_e.walkTokens(l,e.walkTokens)).then(()=>Bt.parse(l,e)).catch(n);_e.walkTokens(l,e.walkTokens)}return Bt.parse(l,e)}catch(l){n(l)}}_e.options=_e.setOptions=function(s){return Pt(_e.defaults,s),Nd(_e.defaults),_e};_e.getDefaults=Vi;_e.defaults=Wn;_e.use=function(...s){const e=_e.defaults.extensions||{renderers:{},childTokens:{}};s.forEach(t=>{const n=Pt({},t);if(n.async=_e.defaults.async||n.async,t.extensions&&(t.extensions.forEach(l=>{if(!l.name)throw new Error("extension name required");if(l.renderer){const o=e.renderers[l.name];o?e.renderers[l.name]=function(...r){let i=l.renderer.apply(this,r);return i===!1&&(i=o.apply(this,r)),i}:e.renderers[l.name]=l.renderer}if(l.tokenizer){if(!l.level||l.level!=="block"&&l.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[l.level]?e[l.level].unshift(l.tokenizer):e[l.level]=[l.tokenizer],l.start&&(l.level==="block"?e.startBlock?e.startBlock.push(l.start):e.startBlock=[l.start]:l.level==="inline"&&(e.startInline?e.startInline.push(l.start):e.startInline=[l.start]))}l.childTokens&&(e.childTokens[l.name]=l.childTokens)}),n.extensions=e),t.renderer){const l=_e.defaults.renderer||new Kl;for(const o in t.renderer){const r=l[o];l[o]=(...i)=>{let a=t.renderer[o].apply(l,i);return a===!1&&(a=r.apply(l,i)),a}}n.renderer=l}if(t.tokenizer){const l=_e.defaults.tokenizer||new ql;for(const o in t.tokenizer){const r=l[o];l[o]=(...i)=>{let a=t.tokenizer[o].apply(l,i);return a===!1&&(a=r.apply(l,i)),a}}n.tokenizer=l}if(t.walkTokens){const l=_e.defaults.walkTokens;n.walkTokens=function(o){let r=[];return r.push(t.walkTokens.call(this,o)),l&&(r=r.concat(l.call(this,o))),r}}_e.setOptions(n)})};_e.walkTokens=function(s,e){let t=[];for(const n of s)switch(t=t.concat(e.call(_e,n)),n.type){case"table":{for(const l of n.header)t=t.concat(_e.walkTokens(l.tokens,e));for(const l of n.rows)for(const o of l)t=t.concat(_e.walkTokens(o.tokens,e));break}case"list":{t=t.concat(_e.walkTokens(n.items,e));break}default:_e.defaults.extensions&&_e.defaults.extensions.childTokens&&_e.defaults.extensions.childTokens[n.type]?_e.defaults.extensions.childTokens[n.type].forEach(function(l){t=t.concat(_e.walkTokens(n[l],e))}):n.tokens&&(t=t.concat(_e.walkTokens(n.tokens,e)))}return t};_e.parseInline=function(s,e){if(typeof s=="undefined"||s===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");e=Pt({},_e.defaults,e||{}),sa(e);try{const t=Ft.lexInline(s,e);return e.walkTokens&&_e.walkTokens(t,e.walkTokens),Bt.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+at(t.message+"",!0)+"</pre>";throw t}};_e.Parser=Bt;_e.parser=Bt.parse;_e.Renderer=Kl;_e.TextRenderer=la;_e.Lexer=Ft;_e.lexer=Ft.lex;_e.Tokenizer=ql;_e.Slugger=Wl;_e.parse=_e;_e.options;_e.setOptions;_e.use;_e.walkTokens;_e.parseInline;Bt.parse;Ft.lex;const oa={};function Kd(s){let e;return{c(){e=H(s[1])},m(t,n){x(t,e,n)},p(t,n){n&2&&et(e,t[1])},i:K,o:K,d(t){t&&E(e)}}}function Wd(s){let e,t;const n=s[5].default,l=Ce(n,s,s[4],null);return{c(){e=_("h6"),l&&l.c(),h(e,"id",s[2])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&16)&&Me(l,n,o,o[4],t?Ne(n,o[4],r,null):Re(o[4]),null),(!t||r&4)&&h(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Gd(s){let e,t;const n=s[5].default,l=Ce(n,s,s[4],null);return{c(){e=_("h5"),l&&l.c(),h(e,"id",s[2])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&16)&&Me(l,n,o,o[4],t?Ne(n,o[4],r,null):Re(o[4]),null),(!t||r&4)&&h(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Zd(s){let e,t;const n=s[5].default,l=Ce(n,s,s[4],null);return{c(){e=_("h4"),l&&l.c(),h(e,"id",s[2])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&16)&&Me(l,n,o,o[4],t?Ne(n,o[4],r,null):Re(o[4]),null),(!t||r&4)&&h(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Qd(s){let e,t;const n=s[5].default,l=Ce(n,s,s[4],null);return{c(){e=_("h3"),l&&l.c(),h(e,"id",s[2])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&16)&&Me(l,n,o,o[4],t?Ne(n,o[4],r,null):Re(o[4]),null),(!t||r&4)&&h(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Xd(s){let e,t;const n=s[5].default,l=Ce(n,s,s[4],null);return{c(){e=_("h2"),l&&l.c(),h(e,"id",s[2])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&16)&&Me(l,n,o,o[4],t?Ne(n,o[4],r,null):Re(o[4]),null),(!t||r&4)&&h(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Jd(s){let e,t;const n=s[5].default,l=Ce(n,s,s[4],null);return{c(){e=_("h1"),l&&l.c(),h(e,"id",s[2])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&16)&&Me(l,n,o,o[4],t?Ne(n,o[4],r,null):Re(o[4]),null),(!t||r&4)&&h(e,"id",o[2])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Yd(s){let e,t,n,l;const o=[Jd,Xd,Qd,Zd,Gd,Wd,Kd],r=[];function i(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=i(s),t=r[e]=o[e](s),{c(){t.c(),n=Ee()},m(a,c){r[e].m(a,c),x(a,n,c),l=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(he(),T(r[u],1,1,()=>{r[u]=null}),me(),t=r[e],t?t.p(a,c):(t=r[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){T(t),l=!1},d(a){r[e].d(a),a&&E(n)}}}function Vd(s,e,t){let n,{$$slots:l={},$$scope:o}=e,{depth:r}=e,{raw:i}=e,{text:a}=e;const{slug:c,getOptions:u}=Xs(oa),f=u();return s.$$set=d=>{"depth"in d&&t(0,r=d.depth),"raw"in d&&t(1,i=d.raw),"text"in d&&t(3,a=d.text),"$$scope"in d&&t(4,o=d.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(2,n=f.headerIds?f.headerPrefix+c(a):void 0)},[r,i,n,a,o,l]}class ep extends G{constructor(e){super(),W(this,e,Vd,Yd,q,{depth:0,raw:1,text:3})}}function tp(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("p"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function np(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class sp extends G{constructor(e){super(),W(this,e,np,tp,q,{})}}function lp(s){let e;const t=s[3].default,n=Ce(t,s,s[2],null);return{c(){n&&n.c()},m(l,o){n&&n.m(l,o),e=!0},p(l,[o]){n&&n.p&&(!e||o&4)&&Me(n,t,l,l[2],e?Ne(t,l[2],o,null):Re(l[2]),null)},i(l){e||(w(n,l),e=!0)},o(l){T(n,l),e=!1},d(l){n&&n.d(l)}}}function op(s,e,t){let{$$slots:n={},$$scope:l}=e,{text:o}=e,{raw:r}=e;return s.$$set=i=>{"text"in i&&t(0,o=i.text),"raw"in i&&t(1,r=i.raw),"$$scope"in i&&t(2,l=i.$$scope)},[o,r,l,n]}class rp extends G{constructor(e){super(),W(this,e,op,lp,q,{text:0,raw:1})}}function ip(s){let e,t;return{c(){e=_("img"),ft(e.src,t=s[0])||h(e,"src",t),h(e,"title",s[1]),h(e,"alt",s[2])},m(n,l){x(n,e,l)},p(n,[l]){l&1&&!ft(e.src,t=n[0])&&h(e,"src",t),l&2&&h(e,"title",n[1]),l&4&&h(e,"alt",n[2])},i:K,o:K,d(n){n&&E(e)}}}function ap(s,e,t){let{href:n=""}=e,{title:l=void 0}=e,{text:o=""}=e;return s.$$set=r=>{"href"in r&&t(0,n=r.href),"title"in r&&t(1,l=r.title),"text"in r&&t(2,o=r.text)},[n,l,o]}class cp extends G{constructor(e){super(),W(this,e,ap,ip,q,{href:0,title:1,text:2})}}function up(s){let e,t;const n=s[3].default,l=Ce(n,s,s[2],null);return{c(){e=_("a"),l&&l.c(),h(e,"href",s[0]),h(e,"title",s[1])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&4)&&Me(l,n,o,o[2],t?Ne(n,o[2],r,null):Re(o[2]),null),(!t||r&1)&&h(e,"href",o[0]),(!t||r&2)&&h(e,"title",o[1])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function fp(s,e,t){let{$$slots:n={},$$scope:l}=e,{href:o=""}=e,{title:r=void 0}=e;return s.$$set=i=>{"href"in i&&t(0,o=i.href),"title"in i&&t(1,r=i.title),"$$scope"in i&&t(2,l=i.$$scope)},[o,r,l,n]}class dp extends G{constructor(e){super(),W(this,e,fp,up,q,{href:0,title:1})}}function pp(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("em"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function hp(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class mp extends G{constructor(e){super(),W(this,e,hp,pp,q,{})}}function gp(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("del"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function _p(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class bp extends G{constructor(e){super(),W(this,e,_p,gp,q,{})}}function $p(s){let e,t=s[0].replace(/`/g,"")+"",n;return{c(){e=_("code"),n=H(t)},m(l,o){x(l,e,o),m(e,n)},p(l,[o]){o&1&&t!==(t=l[0].replace(/`/g,"")+"")&&et(n,t)},i:K,o:K,d(l){l&&E(e)}}}function vp(s,e,t){let{raw:n}=e;return s.$$set=l=>{"raw"in l&&t(0,n=l.raw)},[n]}class wp extends G{constructor(e){super(),W(this,e,vp,$p,q,{raw:0})}}function kp(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("strong"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function yp(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Tp extends G{constructor(e){super(),W(this,e,yp,kp,q,{})}}function Ep(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("table"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function xp(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Sp extends G{constructor(e){super(),W(this,e,xp,Ep,q,{})}}function Ap(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("thead"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Cp(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Np extends G{constructor(e){super(),W(this,e,Cp,Ap,q,{})}}function Mp(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("tbody"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Rp(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Pp extends G{constructor(e){super(),W(this,e,Rp,Mp,q,{})}}function Op(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("tr"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Lp(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Dp extends G{constructor(e){super(),W(this,e,Lp,Op,q,{})}}function Ip(s){let e,t;const n=s[3].default,l=Ce(n,s,s[2],null);return{c(){e=_("td"),l&&l.c(),h(e,"align",s[1])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&4)&&Me(l,n,o,o[2],t?Ne(n,o[2],r,null):Re(o[2]),null),(!t||r&2)&&h(e,"align",o[1])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Bp(s){let e,t;const n=s[3].default,l=Ce(n,s,s[2],null);return{c(){e=_("th"),l&&l.c(),h(e,"align",s[1])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&4)&&Me(l,n,o,o[2],t?Ne(n,o[2],r,null):Re(o[2]),null),(!t||r&2)&&h(e,"align",o[1])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function zp(s){let e,t,n,l;const o=[Bp,Ip],r=[];function i(a,c){return a[0]?0:1}return e=i(s),t=r[e]=o[e](s),{c(){t.c(),n=Ee()},m(a,c){r[e].m(a,c),x(a,n,c),l=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(he(),T(r[u],1,1,()=>{r[u]=null}),me(),t=r[e],t?t.p(a,c):(t=r[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){T(t),l=!1},d(a){r[e].d(a),a&&E(n)}}}function Hp(s,e,t){let{$$slots:n={},$$scope:l}=e,{header:o}=e,{align:r}=e;return s.$$set=i=>{"header"in i&&t(0,o=i.header),"align"in i&&t(1,r=i.align),"$$scope"in i&&t(2,l=i.$$scope)},[o,r,l,n]}class Fp extends G{constructor(e){super(),W(this,e,Hp,zp,q,{header:0,align:1})}}function jp(s){let e,t;const n=s[3].default,l=Ce(n,s,s[2],null);return{c(){e=_("ul"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&4)&&Me(l,n,o,o[2],t?Ne(n,o[2],r,null):Re(o[2]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Up(s){let e,t;const n=s[3].default,l=Ce(n,s,s[2],null);return{c(){e=_("ol"),l&&l.c(),h(e,"start",s[1])},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,r){l&&l.p&&(!t||r&4)&&Me(l,n,o,o[2],t?Ne(n,o[2],r,null):Re(o[2]),null),(!t||r&2)&&h(e,"start",o[1])},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function qp(s){let e,t,n,l;const o=[Up,jp],r=[];function i(a,c){return a[0]?0:1}return e=i(s),t=r[e]=o[e](s),{c(){t.c(),n=Ee()},m(a,c){r[e].m(a,c),x(a,n,c),l=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(he(),T(r[u],1,1,()=>{r[u]=null}),me(),t=r[e],t?t.p(a,c):(t=r[e]=o[e](a),t.c()),w(t,1),t.m(n.parentNode,n))},i(a){l||(w(t),l=!0)},o(a){T(t),l=!1},d(a){r[e].d(a),a&&E(n)}}}function Kp(s,e,t){let{$$slots:n={},$$scope:l}=e,{ordered:o}=e,{start:r}=e;return s.$$set=i=>{"ordered"in i&&t(0,o=i.ordered),"start"in i&&t(1,r=i.start),"$$scope"in i&&t(2,l=i.$$scope)},[o,r,l,n]}class Wp extends G{constructor(e){super(),W(this,e,Kp,qp,q,{ordered:0,start:1})}}function Gp(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("li"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function Zp(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class Qp extends G{constructor(e){super(),W(this,e,Zp,Gp,q,{})}}function Xp(s){let e;return{c(){e=_("hr")},m(t,n){x(t,e,n)},p:K,i:K,o:K,d(t){t&&E(e)}}}class Jp extends G{constructor(e){super(),W(this,e,null,Xp,q,{})}}function Yp(s){let e,t;return{c(){e=new ki(!1),t=Ee(),e.a=t},m(n,l){e.m(s[0],n,l),x(n,t,l)},p(n,[l]){l&1&&e.p(n[0])},i:K,o:K,d(n){n&&E(t),n&&e.d()}}}function Vp(s,e,t){let{text:n}=e;return s.$$set=l=>{"text"in l&&t(0,n=l.text)},[n]}class eh extends G{constructor(e){super(),W(this,e,Vp,Yp,q,{text:0})}}function th(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("blockquote"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(e,null),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function nh(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class sh extends G{constructor(e){super(),W(this,e,nh,th,q,{})}}function lh(s){let e,t,n;return{c(){e=_("pre"),t=_("code"),n=H(s[1]),h(e,"class",s[0])},m(l,o){x(l,e,o),m(e,t),m(t,n)},p(l,[o]){o&2&&et(n,l[1]),o&1&&h(e,"class",l[0])},i:K,o:K,d(l){l&&E(e)}}}function oh(s,e,t){let{lang:n}=e,{text:l}=e;return s.$$set=o=>{"lang"in o&&t(0,n=o.lang),"text"in o&&t(1,l=o.text)},[n,l]}class rh extends G{constructor(e){super(),W(this,e,oh,lh,q,{lang:0,text:1})}}function ih(s){let e,t;const n=s[1].default,l=Ce(n,s,s[0],null);return{c(){e=_("br"),l&&l.c()},m(o,r){x(o,e,r),l&&l.m(o,r),t=!0},p(o,[r]){l&&l.p&&(!t||r&1)&&Me(l,n,o,o[0],t?Ne(n,o[0],r,null):Re(o[0]),null)},i(o){t||(w(l,o),t=!0)},o(o){T(l,o),t=!1},d(o){o&&E(e),l&&l.d(o)}}}function ah(s,e,t){let{$$slots:n={},$$scope:l}=e;return s.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,n]}class ch extends G{constructor(e){super(),W(this,e,ah,ih,q,{})}}const uh={heading:ep,paragraph:sp,text:rp,image:cp,link:dp,em:mp,strong:Tp,codespan:wp,del:bp,table:Sp,tablehead:Np,tablebody:Pp,tablerow:Dp,tablecell:Fp,list:Wp,orderedlistitem:null,unorderedlistitem:null,listitem:Qp,hr:Jp,html:eh,blockquote:sh,code:rh,br:ch},fh={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function dh(s){let e,t;return e=new En({props:{tokens:s[0],renderers:s[1]}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,[l]){const o={};l&1&&(o.tokens=n[0]),l&2&&(o.renderers=n[1]),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function ph(s,e,t){let n,l,o,r,{source:i=[]}=e,{renderers:a={}}=e,{options:c={}}=e,{isInline:u=!1}=e;const f=Ml();let d,p,g;return yi(oa,{slug:$=>l?l.slug($):"",getOptions:()=>o}),bn(()=>{t(7,g=!0)}),s.$$set=$=>{"source"in $&&t(2,i=$.source),"renderers"in $&&t(3,a=$.renderers),"options"in $&&t(4,c=$.options),"isInline"in $&&t(5,u=$.isInline)},s.$$.update=()=>{s.$$.dirty&4&&t(8,n=Array.isArray(i)),s.$$.dirty&4&&(l=i?new Wl:void 0),s.$$.dirty&16&&t(9,o=tt(tt({},fh),c)),s.$$.dirty&869&&(n?t(0,d=i):(t(6,p=new Ft(o)),t(0,d=u?p.inlineTokens(i):p.lex(i)),f("parsed",{tokens:d}))),s.$$.dirty&8&&t(1,r=tt(tt({},uh),a)),s.$$.dirty&385&&g&&!n&&f("parsed",{tokens:d})},[d,r,i,a,c,u,p,g,n,o]}class xn extends G{constructor(e){super(),W(this,e,ph,dh,q,{source:2,renderers:3,options:4,isInline:5})}}function hh(s){let e,t,n;return t=new xn({props:{source:od}}),{c(){e=_("section"),L(t.$$.fragment),h(e,"class","documentation")},m(l,o){x(l,e,o),P(t,e,null),n=!0},p:K,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){T(t.$$.fragment,l),n=!1},d(l){l&&E(e),O(t)}}}let mh=class extends G{constructor(e){super(),W(this,e,null,hh,q,{})}};function gh(s){let e,t,n;return{c(){e=_("button"),e.textContent="First",h(e,"class","tab svelte-46fy0b"),re(e,"active",s[11])},m(l,o){x(l,e,o),t||(n=J(e,"click",function(){Oe(s[12])&&s[12].apply(this,arguments)}),t=!0)},p(l,o){s=l,o&2048&&re(e,"active",s[11])},d(l){l&&E(e),t=!1,n()}}}function _h(s){let e,t,n;return{c(){e=_("button"),e.textContent="Second",h(e,"class","tab svelte-46fy0b"),re(e,"active",s[11])},m(l,o){x(l,e,o),t||(n=J(e,"click",function(){Oe(s[12])&&s[12].apply(this,arguments)}),t=!0)},p(l,o){s=l,o&2048&&re(e,"active",s[11])},d(l){l&&E(e),t=!1,n()}}}function bh(s){let e,t,n,l;return{c(){e=_("button"),t=H("Third"),e.disabled=s[0],h(e,"class","tab svelte-46fy0b"),re(e,"active",s[11])},m(o,r){x(o,e,r),m(e,t),n||(l=J(e,"click",function(){Oe(s[12])&&s[12].apply(this,arguments)}),n=!0)},p(o,r){s=o,r&1&&(e.disabled=s[0]),r&2048&&re(e,"active",s[11])},d(o){o&&E(e),n=!1,l()}}}function Qo(s){let e,t;return e=new Dt({props:{$$slots:{default:[$h,({active:n,activate:l})=>({11:n,12:l}),({active:n,activate:l})=>(n?2048:0)|(l?4096:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&14338&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function $h(s){let e,t,n,l,o;return{c(){e=_("button"),t=H("Fourth "),n=_("button"),n.textContent="×",h(n,"class","svelte-46fy0b"),h(e,"class","tab svelte-46fy0b"),re(e,"active",s[11])},m(r,i){x(r,e,i),m(e,t),m(e,n),l||(o=[J(n,"click",ns(s[4])),J(e,"click",function(){Oe(s[12])&&s[12].apply(this,arguments)})],l=!0)},p(r,i){s=r,i&2048&&re(e,"active",s[11])},d(r){r&&E(e),l=!1,Te(o)}}}function Xo(s){let e,t;return e=new Dt({props:{$$slots:{default:[vh,({active:n,activate:l})=>({11:n,12:l}),({active:n,activate:l})=>(n?2048:0)|(l?4096:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&14340&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function vh(s){let e,t,n,l,o;return{c(){e=_("button"),t=H("Fifth "),n=_("button"),n.textContent="×",h(n,"class","svelte-46fy0b"),h(e,"class","tab svelte-46fy0b"),re(e,"active",s[11])},m(r,i){x(r,e,i),m(e,t),m(e,n),l||(o=[J(n,"click",ns(s[5])),J(e,"click",function(){Oe(s[12])&&s[12].apply(this,arguments)})],l=!0)},p(r,i){s=r,i&2048&&re(e,"active",s[11])},d(r){r&&E(e),l=!1,Te(o)}}}function wh(s){let e;return{c(){e=_("div"),e.textContent="These are the first diamonds I ever took from my first mine.",h(e,"class","panel svelte-46fy0b"),re(e,"active",s[11])},m(t,n){x(t,e,n)},p(t,n){n&2048&&re(e,"active",t[11])},d(t){t&&E(e)}}}function kh(s){let e;return{c(){e=_("div"),e.textContent="The second stage supplements the first stage by adding the second rail tunnel.",h(e,"class","panel svelte-46fy0b"),re(e,"active",s[11])},m(t,n){x(t,e,n)},p(t,n){n&2048&&re(e,"active",t[11])},d(t){t&&E(e)}}}function yh(s){let e;return{c(){e=_("div"),e.textContent="Let's not worry about third or fourth place.",h(e,"class","panel svelte-46fy0b"),re(e,"active",s[11])},m(t,n){x(t,e,n)},p(t,n){n&2048&&re(e,"active",t[11])},d(t){t&&E(e)}}}function Jo(s){let e,t;return e=new It({props:{$$slots:{default:[Th,({active:n})=>({11:n}),({active:n})=>n?2048:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&10240&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Th(s){let e;return{c(){e=_("div"),e.textContent="The fourth is the process of Timorization through capacity-building.",h(e,"class","panel svelte-46fy0b"),re(e,"active",s[11])},m(t,n){x(t,e,n)},p(t,n){n&2048&&re(e,"active",t[11])},d(t){t&&E(e)}}}function Yo(s){let e,t;return e=new It({props:{$$slots:{default:[Eh,({active:n})=>({11:n}),({active:n})=>n?2048:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&10240&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Eh(s){let e;return{c(){e=_("div"),e.textContent="Strings tuned a fifth apart.",h(e,"class","panel svelte-46fy0b"),re(e,"active",s[11])},m(t,n){x(t,e,n)},p(t,n){n&2048&&re(e,"active",t[11])},d(t){t&&E(e)}}}function xh(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k;e=new Dt({props:{$$slots:{default:[gh,({active:y,activate:D})=>({11:y,12:D}),({active:y,activate:D})=>(y?2048:0)|(D?4096:0)]},$$scope:{ctx:s}}}),n=new Dt({props:{$$slots:{default:[_h,({active:y,activate:D})=>({11:y,12:D}),({active:y,activate:D})=>(y?2048:0)|(D?4096:0)]},$$scope:{ctx:s}}}),o=new Dt({props:{$$slots:{default:[bh,({active:y,activate:D})=>({11:y,12:D}),({active:y,activate:D})=>(y?2048:0)|(D?4096:0)]},$$scope:{ctx:s}}});let v=s[1]&&Qo(s),S=s[2]&&Xo(s);c=new It({props:{$$slots:{default:[wh,({active:y})=>({11:y}),({active:y})=>y?2048:0]},$$scope:{ctx:s}}}),f=new It({props:{$$slots:{default:[kh,({active:y})=>({11:y}),({active:y})=>y?2048:0]},$$scope:{ctx:s}}}),p=new It({props:{$$slots:{default:[yh,({active:y})=>({11:y}),({active:y})=>y?2048:0]},$$scope:{ctx:s}}});let R=s[1]&&Jo(s),N=s[2]&&Yo(s);return{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment),r=A(),v&&v.c(),i=A(),S&&S.c(),a=A(),L(c.$$.fragment),u=A(),L(f.$$.fragment),d=A(),L(p.$$.fragment),g=A(),R&&R.c(),$=A(),N&&N.c(),C=Ee()},m(y,D){P(e,y,D),x(y,t,D),P(n,y,D),x(y,l,D),P(o,y,D),x(y,r,D),v&&v.m(y,D),x(y,i,D),S&&S.m(y,D),x(y,a,D),P(c,y,D),x(y,u,D),P(f,y,D),x(y,d,D),P(p,y,D),x(y,g,D),R&&R.m(y,D),x(y,$,D),N&&N.m(y,D),x(y,C,D),k=!0},p(y,D){const B={};D&14336&&(B.$$scope={dirty:D,ctx:y}),e.$set(B);const Z={};D&14336&&(Z.$$scope={dirty:D,ctx:y}),n.$set(Z);const ee={};D&14337&&(ee.$$scope={dirty:D,ctx:y}),o.$set(ee),y[1]?v?(v.p(y,D),D&2&&w(v,1)):(v=Qo(y),v.c(),w(v,1),v.m(i.parentNode,i)):v&&(he(),T(v,1,1,()=>{v=null}),me()),y[2]?S?(S.p(y,D),D&4&&w(S,1)):(S=Xo(y),S.c(),w(S,1),S.m(a.parentNode,a)):S&&(he(),T(S,1,1,()=>{S=null}),me());const oe={};D&10240&&(oe.$$scope={dirty:D,ctx:y}),c.$set(oe);const ce={};D&10240&&(ce.$$scope={dirty:D,ctx:y}),f.$set(ce);const ve={};D&10240&&(ve.$$scope={dirty:D,ctx:y}),p.$set(ve),y[1]?R?(R.p(y,D),D&2&&w(R,1)):(R=Jo(y),R.c(),w(R,1),R.m($.parentNode,$)):R&&(he(),T(R,1,1,()=>{R=null}),me()),y[2]?N?(N.p(y,D),D&4&&w(N,1)):(N=Yo(y),N.c(),w(N,1),N.m(C.parentNode,C)):N&&(he(),T(N,1,1,()=>{N=null}),me())},i(y){k||(w(e.$$.fragment,y),w(n.$$.fragment,y),w(o.$$.fragment,y),w(v),w(S),w(c.$$.fragment,y),w(f.$$.fragment,y),w(p.$$.fragment,y),w(R),w(N),k=!0)},o(y){T(e.$$.fragment,y),T(n.$$.fragment,y),T(o.$$.fragment,y),T(v),T(S),T(c.$$.fragment,y),T(f.$$.fragment,y),T(p.$$.fragment,y),T(R),T(N),k=!1},d(y){O(e,y),y&&E(t),O(n,y),y&&E(l),O(o,y),y&&E(r),v&&v.d(y),y&&E(i),S&&S.d(y),y&&E(a),O(c,y),y&&E(u),O(f,y),y&&E(d),O(p,y),y&&E(g),R&&R.d(y),y&&E($),N&&N.d(y),y&&E(C)}}}function Sh(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S,R,N,y,D,B;function Z(oe){s[6](oe)}let ee={$$slots:{default:[xh]},$$scope:{ctx:s}};return s[3]!==void 0&&(ee.selected=s[3]),e=new Kn({props:ee}),je.push(()=>At(e,"selected",Z)),{c(){L(e.$$.fragment),n=A(),l=_("div"),l.textContent="Use these controls to operate tabs.",o=A(),r=_("div"),i=_("label"),a=_("input"),c=H(" Fourth"),u=A(),f=_("label"),d=_("input"),p=H(" Fifth"),g=A(),$=_("label"),C=_("input"),k=H(" Disable Third"),v=A(),S=_("label"),R=H("Selected "),N=_("input"),h(l,"class","py-2 border-t text-center text-gray-500"),h(a,"type","checkbox"),h(d,"type","checkbox"),h(C,"type","checkbox"),h(N,"class","input max-w-[6ch]"),h(N,"type","number"),h(r,"class","flex items-center place-content-center gap-4")},m(oe,ce){P(e,oe,ce),x(oe,n,ce),x(oe,l,ce),x(oe,o,ce),x(oe,r,ce),m(r,i),m(i,a),a.checked=s[1],m(i,c),m(r,u),m(r,f),m(f,d),d.checked=s[2],m(f,p),m(r,g),m(r,$),m($,C),C.checked=s[0],m($,k),m(r,v),m(r,S),m(S,R),m(S,N),Ve(N,s[3]),y=!0,D||(B=[J(a,"change",s[7]),J(d,"change",s[8]),J(C,"change",s[9]),J(N,"input",s[10])],D=!0)},p(oe,[ce]){const ve={};ce&8199&&(ve.$$scope={dirty:ce,ctx:oe}),!t&&ce&8&&(t=!0,ve.selected=oe[3],Rt(()=>t=!1)),e.$set(ve),ce&2&&(a.checked=oe[1]),ce&4&&(d.checked=oe[2]),ce&1&&(C.checked=oe[0]),ce&8&&it(N.value)!==oe[3]&&Ve(N,oe[3])},i(oe){y||(w(e.$$.fragment,oe),y=!0)},o(oe){T(e.$$.fragment,oe),y=!1},d(oe){O(e,oe),oe&&E(n),oe&&E(l),oe&&E(o),oe&&E(r),D=!1,Te(B)}}}function Ah(s,e,t){let n=!1,l=!0,o=!0,r=NaN;const i=()=>t(1,l=!1),a=()=>t(2,o=!1);function c(g){r=g,t(3,r)}function u(){l=this.checked,t(1,l)}function f(){o=this.checked,t(2,o)}function d(){n=this.checked,t(0,n)}function p(){r=it(this.value),t(3,r)}return[n,l,o,r,i,a,c,u,f,d,p]}let Ch=class extends G{constructor(e){super(),W(this,e,Ah,Sh,q,{})}};function Nh(s){let e,t,n,l,o;return t=new Ch({}),l=new dt({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),L(l.$$.fragment),h(e,"class","prose max-w-none my-4")},m(r,i){x(r,e,i),P(t,e,null),m(e,n),P(l,e,null),o=!0},p:K,i(r){o||(w(t.$$.fragment,r),w(l.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),T(l.$$.fragment,r),o=!1},d(r){r&&E(e),O(t),O(l)}}}let Mh=class extends G{constructor(e){super(),W(this,e,null,Nh,q,{})}};function Vo(s,e,t){const n=s.slice();return n[0]=e[t],n[2]=t,n}function er(s,e,t){const n=s.slice();return n[0]=e[t],n[2]=t,n}function tr(s,e,t){const n=s.slice();return n[0]=e[t],n[6]=t,n}function nr(s,e,t){const n=s.slice();return n[0]=e[t],n[6]=t,n}function Rh(s){let e,t,n,l,o,r;return{c(){e=_("button"),t=H("Tab #"),n=H(s[6]),l=A(),h(e,"class","tab level-1 svelte-jw7z4j"),re(e,"active",s[3])},m(i,a){x(i,e,a),m(e,t),m(e,n),x(i,l,a),o||(r=J(e,"click",function(){Oe(s[7])&&s[7].apply(this,arguments)}),o=!0)},p(i,a){s=i,a&8&&re(e,"active",s[3])},d(i){i&&E(e),i&&E(l),o=!1,r()}}}function sr(s){let e,t=" ",n,l;return e=new Dt({props:{$$slots:{default:[Rh,({active:o,activate:r})=>({3:o,7:r}),({active:o,activate:r})=>(o?8:0)|(r?128:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),n=H(t)},m(o,r){P(e,o,r),x(o,n,r),l=!0},p(o,r){const i={};r&648&&(i.$$scope={dirty:r,ctx:o}),e.$set(i)},i(o){l||(w(e.$$.fragment,o),l=!0)},o(o){T(e.$$.fragment,o),l=!1},d(o){O(e,o),o&&E(n)}}}function Ph(s){let e,t,n,l,o,r;return{c(){e=_("button"),t=H("Child #"),n=H(s[6]),l=A(),h(e,"class","tab level-2 svelte-jw7z4j"),re(e,"active",s[3])},m(i,a){x(i,e,a),m(e,t),m(e,n),x(i,l,a),o||(r=J(e,"click",function(){Oe(s[7])&&s[7].apply(this,arguments)}),o=!0)},p(i,a){s=i,a&8&&re(e,"active",s[3])},d(i){i&&E(e),i&&E(l),o=!1,r()}}}function lr(s){let e,t=" ",n,l;return e=new Dt({props:{$$slots:{default:[Ph,({active:o,activate:r})=>({3:o,7:r}),({active:o,activate:r})=>(o?8:0)|(r?128:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),n=H(t)},m(o,r){P(e,o,r),x(o,n,r),l=!0},p(o,r){const i={};r&648&&(i.$$scope={dirty:r,ctx:o}),e.$set(i)},i(o){l||(w(e.$$.fragment,o),l=!0)},o(o){T(e.$$.fragment,o),l=!1},d(o){O(e,o),o&&E(n)}}}function Oh(s){let e,t,n,l,o;return{c(){e=_("div"),t=H("Child tab #"),n=H(s[2]),l=H(" context"),o=A(),h(e,"class","panel svelte-jw7z4j"),re(e,"active",s[3])},m(r,i){x(r,e,i),m(e,t),m(e,n),m(e,l),x(r,o,i)},p(r,i){i&8&&re(e,"active",r[3])},d(r){r&&E(e),r&&E(o)}}}function or(s){let e,t;return e=new It({props:{$$slots:{default:[Oh,({active:n})=>({3:n}),({active:n})=>n?8:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&520&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Lh(s){let e,t,n,l={length:ln},o=[];for(let u=0;u<l.length;u+=1)o[u]=lr(tr(s,l,u));const r=u=>T(o[u],1,1,()=>{o[u]=null});let i={length:ln},a=[];for(let u=0;u<i.length;u+=1)a[u]=or(er(s,i,u));const c=u=>T(a[u],1,1,()=>{a[u]=null});return{c(){for(let u=0;u<o.length;u+=1)o[u].c();e=A();for(let u=0;u<a.length;u+=1)a[u].c();t=Ee()},m(u,f){for(let d=0;d<o.length;d+=1)o[d].m(u,f);x(u,e,f);for(let d=0;d<a.length;d+=1)a[d].m(u,f);x(u,t,f),n=!0},p(u,f){if(f&136){l={length:ln};let d;for(d=0;d<l.length;d+=1){const p=tr(u,l,d);o[d]?(o[d].p(p,f),w(o[d],1)):(o[d]=lr(p),o[d].c(),w(o[d],1),o[d].m(e.parentNode,e))}for(he(),d=l.length;d<o.length;d+=1)r(d);me()}if(f&8){i={length:ln};let d;for(d=0;d<i.length;d+=1){const p=er(u,i,d);a[d]?(a[d].p(p,f),w(a[d],1)):(a[d]=or(p),a[d].c(),w(a[d],1),a[d].m(t.parentNode,t))}for(he(),d=i.length;d<a.length;d+=1)c(d);me()}},i(u){if(!n){for(let f=0;f<l.length;f+=1)w(o[f]);for(let f=0;f<i.length;f+=1)w(a[f]);n=!0}},o(u){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)T(o[f]);a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)T(a[f]);n=!1},d(u){He(o,u),u&&E(e),He(a,u),u&&E(t)}}}function Dh(s){let e,t,n,l,o,r,i,a,c,u;return a=new Kn({props:{$$slots:{default:[Lh]},$$scope:{ctx:s}}}),{c(){e=_("div"),t=_("div"),n=H("Tab #"),l=H(s[2]),o=H(" context. Nested tabs below"),r=A(),i=_("div"),L(a.$$.fragment),c=A(),h(i,"class","mt-3"),h(e,"class","panel svelte-jw7z4j"),re(e,"active",s[3])},m(f,d){x(f,e,d),m(e,t),m(t,n),m(t,l),m(t,o),m(e,r),m(e,i),P(a,i,null),x(f,c,d),u=!0},p(f,d){const p={};d&520&&(p.$$scope={dirty:d,ctx:f}),a.$set(p),(!u||d&8)&&re(e,"active",f[3])},i(f){u||(w(a.$$.fragment,f),u=!0)},o(f){T(a.$$.fragment,f),u=!1},d(f){f&&E(e),O(a),f&&E(c)}}}function rr(s){let e,t;return e=new It({props:{$$slots:{default:[Dh,({active:n})=>({3:n}),({active:n})=>n?8:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&520&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Ih(s){let e,t,n,l={length:ln},o=[];for(let u=0;u<l.length;u+=1)o[u]=sr(nr(s,l,u));const r=u=>T(o[u],1,1,()=>{o[u]=null});let i={length:ln},a=[];for(let u=0;u<i.length;u+=1)a[u]=rr(Vo(s,i,u));const c=u=>T(a[u],1,1,()=>{a[u]=null});return{c(){for(let u=0;u<o.length;u+=1)o[u].c();e=A();for(let u=0;u<a.length;u+=1)a[u].c();t=Ee()},m(u,f){for(let d=0;d<o.length;d+=1)o[d].m(u,f);x(u,e,f);for(let d=0;d<a.length;d+=1)a[d].m(u,f);x(u,t,f),n=!0},p(u,f){if(f&136){l={length:ln};let d;for(d=0;d<l.length;d+=1){const p=nr(u,l,d);o[d]?(o[d].p(p,f),w(o[d],1)):(o[d]=sr(p),o[d].c(),w(o[d],1),o[d].m(e.parentNode,e))}for(he(),d=l.length;d<o.length;d+=1)r(d);me()}if(f&136){i={length:ln};let d;for(d=0;d<i.length;d+=1){const p=Vo(u,i,d);a[d]?(a[d].p(p,f),w(a[d],1)):(a[d]=rr(p),a[d].c(),w(a[d],1),a[d].m(t.parentNode,t))}for(he(),d=i.length;d<a.length;d+=1)c(d);me()}},i(u){if(!n){for(let f=0;f<l.length;f+=1)w(o[f]);for(let f=0;f<i.length;f+=1)w(a[f]);n=!0}},o(u){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)T(o[f]);a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)T(a[f]);n=!1},d(u){He(o,u),u&&E(e),He(a,u),u&&E(t)}}}function Bh(s){let e,t;return e=new Kn({props:{$$slots:{default:[Ih]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,[l]){const o={};l&512&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}let ln=5,zh=class extends G{constructor(e){super(),W(this,e,null,Bh,q,{})}};function Hh(s){let e,t,n,l,o;return t=new zh({}),l=new dt({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),L(l.$$.fragment),h(e,"class","prose max-w-none my-4")},m(r,i){x(r,e,i),P(t,e,null),m(e,n),P(l,e,null),o=!0},p:K,i(r){o||(w(t.$$.fragment,r),w(l.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),T(l.$$.fragment,r),o=!1},d(r){r&&E(e),O(t),O(l)}}}let Fh=class extends G{constructor(e){super(),W(this,e,null,Hh,q,{})}};var Ks={},jh={get exports(){return Ks},set exports(s){Ks=s}};(function(s,e){var t=200,n="Expected a function",l="__lodash_hash_undefined__",o=1,r=2,i=1/0,a=9007199254740991,c="[object Arguments]",u="[object Array]",f="[object Boolean]",d="[object Date]",p="[object Error]",g="[object Function]",$="[object GeneratorFunction]",C="[object Map]",k="[object Number]",v="[object Object]",S="[object Promise]",R="[object RegExp]",N="[object Set]",y="[object String]",D="[object Symbol]",B="[object WeakMap]",Z="[object ArrayBuffer]",ee="[object DataView]",oe="[object Float32Array]",ce="[object Float64Array]",ve="[object Int8Array]",be="[object Int16Array]",Le="[object Int32Array]",z="[object Uint8Array]",U="[object Uint8ClampedArray]",Y="[object Uint16Array]",te="[object Uint32Array]",F=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/,ie=/^\./,we=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V=/[\\^$.*+?()[\]{}|]/g,xe=/\\(\\)?/g,ge=/^\[object .+?Constructor\]$/,Ze=/^(?:0|[1-9]\d*)$/,Ae={};Ae[oe]=Ae[ce]=Ae[ve]=Ae[be]=Ae[Le]=Ae[z]=Ae[U]=Ae[Y]=Ae[te]=!0,Ae[c]=Ae[u]=Ae[Z]=Ae[f]=Ae[ee]=Ae[d]=Ae[p]=Ae[g]=Ae[C]=Ae[k]=Ae[v]=Ae[R]=Ae[N]=Ae[y]=Ae[B]=!1;var Ye=typeof nn=="object"&&nn&&nn.Object===Object&&nn,bt=typeof self=="object"&&self&&self.Object===Object&&self,Ue=Ye||bt||Function("return this")(),st=e&&!e.nodeType&&e,Qe=st&&!0&&s&&!s.nodeType&&s,ct=Qe&&Qe.exports===st,vt=ct&&Ye.process,Fe=function(){try{return vt&&vt.binding("util")}catch(b){}}(),ue=Fe&&Fe.isTypedArray;function wt(b,M,I,j){for(var fe=-1,se=b?b.length:0;++fe<se;){var ke=b[fe];M(j,ke,I(ke),b)}return j}function Pe(b,M){for(var I=-1,j=b?b.length:0;++I<j;)if(M(b[I],I,b))return!0;return!1}function $e(b){return function(M){return M==null?void 0:M[b]}}function lt(b,M){for(var I=-1,j=Array(b);++I<b;)j[I]=M(I);return j}function De(b){return function(M){return b(M)}}function ne(b,M){return b==null?void 0:b[M]}function Se(b){var M=!1;if(b!=null&&typeof b.toString!="function")try{M=!!(b+"")}catch(I){}return M}function Q(b){var M=-1,I=Array(b.size);return b.forEach(function(j,fe){I[++M]=[fe,j]}),I}function X(b,M){return function(I){return b(M(I))}}function ae(b){var M=-1,I=Array(b.size);return b.forEach(function(j){I[++M]=j}),I}var ye=Array.prototype,Je=Function.prototype,Xe=Object.prototype,kt=Ue["__core-js_shared__"],cn=function(){var b=/[^.]+$/.exec(kt&&kt.keys&&kt.keys.IE_PROTO||"");return b?"Symbol(src)_1."+b:""}(),Zn=Je.toString,ut=Xe.hasOwnProperty,jt=Xe.toString,Sn=RegExp("^"+Zn.call(ut).replace(V,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qn=Ue.Symbol,Xn=Ue.Uint8Array,Ot=Xe.propertyIsEnumerable,An=ye.splice,hs=X(Object.keys,Object),Ct=Rn(Ue,"DataView"),yt=Rn(Ue,"Map"),Cn=Rn(Ue,"Promise"),Nn=Rn(Ue,"Set"),Ut=Rn(Ue,"WeakMap"),Yt=Rn(Object,"create"),Mn=fn(Ct),ms=fn(yt),Jn=fn(Cn),al=fn(Nn),Sa=fn(Ut),gs=Qn?Qn.prototype:void 0,cl=gs?gs.valueOf:void 0,Yl=gs?gs.toString:void 0;function un(b){var M=-1,I=b?b.length:0;for(this.clear();++M<I;){var j=b[M];this.set(j[0],j[1])}}function Aa(){this.__data__=Yt?Yt(null):{}}function Ca(b){return this.has(b)&&delete this.__data__[b]}function Na(b){var M=this.__data__;if(Yt){var I=M[b];return I===l?void 0:I}return ut.call(M,b)?M[b]:void 0}function Ma(b){var M=this.__data__;return Yt?M[b]!==void 0:ut.call(M,b)}function Ra(b,M){var I=this.__data__;return I[b]=Yt&&M===void 0?l:M,this}un.prototype.clear=Aa,un.prototype.delete=Ca,un.prototype.get=Na,un.prototype.has=Ma,un.prototype.set=Ra;function qt(b){var M=-1,I=b?b.length:0;for(this.clear();++M<I;){var j=b[M];this.set(j[0],j[1])}}function Pa(){this.__data__=[]}function Oa(b){var M=this.__data__,I=bs(M,b);if(I<0)return!1;var j=M.length-1;return I==j?M.pop():An.call(M,I,1),!0}function La(b){var M=this.__data__,I=bs(M,b);return I<0?void 0:M[I][1]}function Da(b){return bs(this.__data__,b)>-1}function Ia(b,M){var I=this.__data__,j=bs(I,b);return j<0?I.push([b,M]):I[j][1]=M,this}qt.prototype.clear=Pa,qt.prototype.delete=Oa,qt.prototype.get=La,qt.prototype.has=Da,qt.prototype.set=Ia;function Kt(b){var M=-1,I=b?b.length:0;for(this.clear();++M<I;){var j=b[M];this.set(j[0],j[1])}}function Ba(){this.__data__={hash:new un,map:new(yt||qt),string:new un}}function za(b){return $s(this,b).delete(b)}function Ha(b){return $s(this,b).get(b)}function Fa(b){return $s(this,b).has(b)}function ja(b,M){return $s(this,b).set(b,M),this}Kt.prototype.clear=Ba,Kt.prototype.delete=za,Kt.prototype.get=Ha,Kt.prototype.has=Fa,Kt.prototype.set=ja;function _s(b){var M=-1,I=b?b.length:0;for(this.__data__=new Kt;++M<I;)this.add(b[M])}function Ua(b){return this.__data__.set(b,l),this}function qa(b){return this.__data__.has(b)}_s.prototype.add=_s.prototype.push=Ua,_s.prototype.has=qa;function Wt(b){this.__data__=new qt(b)}function Ka(){this.__data__=new qt}function Wa(b){return this.__data__.delete(b)}function Ga(b){return this.__data__.get(b)}function Za(b){return this.__data__.has(b)}function Qa(b,M){var I=this.__data__;if(I instanceof qt){var j=I.__data__;if(!yt||j.length<t-1)return j.push([b,M]),this;I=this.__data__=new Kt(j)}return I.set(b,M),this}Wt.prototype.clear=Ka,Wt.prototype.delete=Wa,Wt.prototype.get=Ga,Wt.prototype.has=Za,Wt.prototype.set=Qa;function Xa(b,M){var I=en(b)||ro(b)?lt(b.length,String):[],j=I.length,fe=!!j;for(var se in b)(M||ut.call(b,se))&&!(fe&&(se=="length"||no(se,j)))&&I.push(se);return I}function bs(b,M){for(var I=b.length;I--;)if(oo(b[I][0],M))return I;return-1}function Ja(b,M,I,j){return Ya(b,function(fe,se,ke){M(j,fe,I(fe),ke)}),j}var Ya=hc(ec),Va=mc();function ec(b,M){return b&&Va(b,M,Ts)}function Vl(b,M){M=vs(M,b)?[M]:eo(M);for(var I=0,j=M.length;b!=null&&I<j;)b=b[ws(M[I++])];return I&&I==j?b:void 0}function tc(b){return jt.call(b)}function nc(b,M){return b!=null&&M in Object(b)}function ul(b,M,I,j,fe){return b===M?!0:b==null||M==null||!ks(b)&&!ys(M)?b!==b&&M!==M:sc(b,M,ul,I,j,fe)}function sc(b,M,I,j,fe,se){var ke=en(b),Be=en(M),qe=u,ot=u;ke||(qe=Vt(b),qe=qe==c?v:qe),Be||(ot=Vt(M),ot=ot==c?v:ot);var pt=qe==v&&!Se(b),ht=ot==v&&!Se(M),rt=qe==ot;if(rt&&!pt)return se||(se=new Wt),ke||xc(b)?to(b,M,I,j,fe,se):gc(b,M,qe,I,j,fe,se);if(!(fe&r)){var Tt=pt&&ut.call(b,"__wrapped__"),Et=ht&&ut.call(M,"__wrapped__");if(Tt||Et){var tn=Tt?b.value():b,Gt=Et?M.value():M;return se||(se=new Wt),I(tn,Gt,j,fe,se)}}return rt?(se||(se=new Wt),_c(b,M,I,j,fe,se)):!1}function lc(b,M,I,j){var fe=I.length,se=fe,ke=!j;if(b==null)return!se;for(b=Object(b);fe--;){var Be=I[fe];if(ke&&Be[2]?Be[1]!==b[Be[0]]:!(Be[0]in b))return!1}for(;++fe<se;){Be=I[fe];var qe=Be[0],ot=b[qe],pt=Be[1];if(ke&&Be[2]){if(ot===void 0&&!(qe in b))return!1}else{var ht=new Wt;if(j)var rt=j(ot,pt,qe,b,M,ht);if(!(rt===void 0?ul(pt,ot,j,o|r,ht):rt))return!1}}return!0}function oc(b){if(!ks(b)||wc(b))return!1;var M=io(b)||Se(b)?Sn:ge;return M.test(fn(b))}function rc(b){return ys(b)&&pl(b.length)&&!!Ae[jt.call(b)]}function ic(b){return typeof b=="function"?b:b==null?Nc:typeof b=="object"?en(b)?uc(b[0],b[1]):cc(b):Mc(b)}function ac(b){if(!kc(b))return hs(b);var M=[];for(var I in Object(b))ut.call(b,I)&&I!="constructor"&&M.push(I);return M}function cc(b){var M=bc(b);return M.length==1&&M[0][2]?lo(M[0][0],M[0][1]):function(I){return I===b||lc(I,b,M)}}function uc(b,M){return vs(b)&&so(M)?lo(ws(b),M):function(I){var j=Ac(I,b);return j===void 0&&j===M?Cc(I,b):ul(M,j,void 0,o|r)}}function fc(b){return function(M){return Vl(M,b)}}function dc(b){if(typeof b=="string")return b;if(hl(b))return Yl?Yl.call(b):"";var M=b+"";return M=="0"&&1/b==-i?"-0":M}function eo(b){return en(b)?b:yc(b)}function pc(b,M){return function(I,j){var fe=en(I)?wt:Ja,se=M?M():{};return fe(I,b,ic(j),se)}}function hc(b,M){return function(I,j){if(I==null)return I;if(!dl(I))return b(I,j);for(var fe=I.length,se=M?fe:-1,ke=Object(I);(M?se--:++se<fe)&&j(ke[se],se,ke)!==!1;);return I}}function mc(b){return function(M,I,j){for(var fe=-1,se=Object(M),ke=j(M),Be=ke.length;Be--;){var qe=ke[b?Be:++fe];if(I(se[qe],qe,se)===!1)break}return M}}function to(b,M,I,j,fe,se){var ke=fe&r,Be=b.length,qe=M.length;if(Be!=qe&&!(ke&&qe>Be))return!1;var ot=se.get(b);if(ot&&se.get(M))return ot==M;var pt=-1,ht=!0,rt=fe&o?new _s:void 0;for(se.set(b,M),se.set(M,b);++pt<Be;){var Tt=b[pt],Et=M[pt];if(j)var tn=ke?j(Et,Tt,pt,M,b,se):j(Tt,Et,pt,b,M,se);if(tn!==void 0){if(tn)continue;ht=!1;break}if(rt){if(!Pe(M,function(Gt,dn){if(!rt.has(dn)&&(Tt===Gt||I(Tt,Gt,j,fe,se)))return rt.add(dn)})){ht=!1;break}}else if(!(Tt===Et||I(Tt,Et,j,fe,se))){ht=!1;break}}return se.delete(b),se.delete(M),ht}function gc(b,M,I,j,fe,se,ke){switch(I){case ee:if(b.byteLength!=M.byteLength||b.byteOffset!=M.byteOffset)return!1;b=b.buffer,M=M.buffer;case Z:return!(b.byteLength!=M.byteLength||!j(new Xn(b),new Xn(M)));case f:case d:case k:return oo(+b,+M);case p:return b.name==M.name&&b.message==M.message;case R:case y:return b==M+"";case C:var Be=Q;case N:var qe=se&r;if(Be||(Be=ae),b.size!=M.size&&!qe)return!1;var ot=ke.get(b);if(ot)return ot==M;se|=o,ke.set(b,M);var pt=to(Be(b),Be(M),j,fe,se,ke);return ke.delete(b),pt;case D:if(cl)return cl.call(b)==cl.call(M)}return!1}function _c(b,M,I,j,fe,se){var ke=fe&r,Be=Ts(b),qe=Be.length,ot=Ts(M),pt=ot.length;if(qe!=pt&&!ke)return!1;for(var ht=qe;ht--;){var rt=Be[ht];if(!(ke?rt in M:ut.call(M,rt)))return!1}var Tt=se.get(b);if(Tt&&se.get(M))return Tt==M;var Et=!0;se.set(b,M),se.set(M,b);for(var tn=ke;++ht<qe;){rt=Be[ht];var Gt=b[rt],dn=M[rt];if(j)var ao=ke?j(dn,Gt,rt,M,b,se):j(Gt,dn,rt,b,M,se);if(!(ao===void 0?Gt===dn||I(Gt,dn,j,fe,se):ao)){Et=!1;break}tn||(tn=rt=="constructor")}if(Et&&!tn){var Es=b.constructor,xs=M.constructor;Es!=xs&&"constructor"in b&&"constructor"in M&&!(typeof Es=="function"&&Es instanceof Es&&typeof xs=="function"&&xs instanceof xs)&&(Et=!1)}return se.delete(b),se.delete(M),Et}function $s(b,M){var I=b.__data__;return vc(M)?I[typeof M=="string"?"string":"hash"]:I.map}function bc(b){for(var M=Ts(b),I=M.length;I--;){var j=M[I],fe=b[j];M[I]=[j,fe,so(fe)]}return M}function Rn(b,M){var I=ne(b,M);return oc(I)?I:void 0}var Vt=tc;(Ct&&Vt(new Ct(new ArrayBuffer(1)))!=ee||yt&&Vt(new yt)!=C||Cn&&Vt(Cn.resolve())!=S||Nn&&Vt(new Nn)!=N||Ut&&Vt(new Ut)!=B)&&(Vt=function(b){var M=jt.call(b),I=M==v?b.constructor:void 0,j=I?fn(I):void 0;if(j)switch(j){case Mn:return ee;case ms:return C;case Jn:return S;case al:return N;case Sa:return B}return M});function $c(b,M,I){M=vs(M,b)?[M]:eo(M);for(var j,fe=-1,ke=M.length;++fe<ke;){var se=ws(M[fe]);if(!(j=b!=null&&I(b,se)))break;b=b[se]}if(j)return j;var ke=b?b.length:0;return!!ke&&pl(ke)&&no(se,ke)&&(en(b)||ro(b))}function no(b,M){return M=M==null?a:M,!!M&&(typeof b=="number"||Ze.test(b))&&b>-1&&b%1==0&&b<M}function vs(b,M){if(en(b))return!1;var I=typeof b;return I=="number"||I=="symbol"||I=="boolean"||b==null||hl(b)?!0:pe.test(b)||!F.test(b)||M!=null&&b in Object(M)}function vc(b){var M=typeof b;return M=="string"||M=="number"||M=="symbol"||M=="boolean"?b!=="__proto__":b===null}function wc(b){return!!cn&&cn in b}function kc(b){var M=b&&b.constructor,I=typeof M=="function"&&M.prototype||Xe;return b===I}function so(b){return b===b&&!ks(b)}function lo(b,M){return function(I){return I==null?!1:I[b]===M&&(M!==void 0||b in Object(I))}}var yc=fl(function(b){b=Sc(b);var M=[];return ie.test(b)&&M.push(""),b.replace(we,function(I,j,fe,se){M.push(fe?se.replace(xe,"$1"):j||I)}),M});function ws(b){if(typeof b=="string"||hl(b))return b;var M=b+"";return M=="0"&&1/b==-i?"-0":M}function fn(b){if(b!=null){try{return Zn.call(b)}catch(M){}try{return b+""}catch(M){}}return""}var Tc=pc(function(b,M,I){ut.call(b,I)?b[I].push(M):b[I]=[M]});function fl(b,M){if(typeof b!="function"||M&&typeof M!="function")throw new TypeError(n);var I=function(){var j=arguments,fe=M?M.apply(this,j):j[0],se=I.cache;if(se.has(fe))return se.get(fe);var ke=b.apply(this,j);return I.cache=se.set(fe,ke),ke};return I.cache=new(fl.Cache||Kt),I}fl.Cache=Kt;function oo(b,M){return b===M||b!==b&&M!==M}function ro(b){return Ec(b)&&ut.call(b,"callee")&&(!Ot.call(b,"callee")||jt.call(b)==c)}var en=Array.isArray;function dl(b){return b!=null&&pl(b.length)&&!io(b)}function Ec(b){return ys(b)&&dl(b)}function io(b){var M=ks(b)?jt.call(b):"";return M==g||M==$}function pl(b){return typeof b=="number"&&b>-1&&b%1==0&&b<=a}function ks(b){var M=typeof b;return!!b&&(M=="object"||M=="function")}function ys(b){return!!b&&typeof b=="object"}function hl(b){return typeof b=="symbol"||ys(b)&&jt.call(b)==D}var xc=ue?De(ue):rc;function Sc(b){return b==null?"":dc(b)}function Ac(b,M,I){var j=b==null?void 0:Vl(b,M);return j===void 0?I:j}function Cc(b,M){return b!=null&&$c(b,M,nc)}function Ts(b){return dl(b)?Xa(b):ac(b)}function Nc(b){return b}function Mc(b){return vs(b)?$e(ws(b)):fc(b)}s.exports=Tc})(jh,Ks);const ra=Ks;function ir(s,e,t){const n=s.slice();return n[13]=e[t],n}function ar(s,e,t){const n=s.slice();return n[18]=e[t],n}function cr(s,e,t){const n=s.slice();return n[22]=e[t],n[24]=t,n}function ur(s,e,t){const n=s.slice();return n[22]=e[t],n}function Uh(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:Gh,then:Wh,catch:Kh,value:26,error:21};return Fs(t=s[0],n),{c(){e=Ee(),n.block.c()},m(l,o){x(l,e,o),n.block.m(l,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e},p(l,o){s=l,n.ctx=s,o&1&&t!==(t=s[0])&&Fs(t,n)||xi(n,s,o)},d(l){l&&E(e),n.block.d(l),n.token=null,n=null}}}function qh(s){let e,t,n;return{c(){e=_("button"),e.textContent="Request authors",h(e,"class","input")},m(l,o){x(l,e,o),t||(n=J(e,"click",s[8]),t=!0)},p:K,d(l){l&&E(e),t=!1,n()}}}function Kh(s){let e,t,n,l=(s[21]instanceof Error?s[21].message:s[21])+"",o;return{c(){e=_("div"),t=H("Loading authors error: "),n=_("strong"),o=H(l),h(n,"class","text-red-600"),h(e,"class","text-red-400")},m(r,i){x(r,e,i),m(e,t),m(e,n),m(n,o)},p(r,i){i&1&&l!==(l=(r[21]instanceof Error?r[21].message:r[21])+"")&&et(o,l)},d(r){r&&E(e)}}}function Wh(s){let e,t,n,l,o,r,i,a,c,u,f=s[26],d=[];for(let p=0;p<f.length;p+=1)d[p]=fr(ur(s,f,p));return{c(){e=_("div"),t=_("select"),n=_("option"),l=H("Select author");for(let p=0;p<d.length;p+=1)d[p].c();o=A(),r=_("button"),i=H("Get quotes"),n.__value=void 0,n.value=n.__value,n.hidden=!0,h(t,"class","input"),s[1]===void 0&&$t(()=>s[9].call(t)),h(r,"class","input"),r.disabled=a=s[1]==null},m(p,g){x(p,e,g),m(e,t),m(t,n),m(n,l);for(let $=0;$<d.length;$+=1)d[$].m(t,null);Lt(t,s[1]),m(e,o),m(e,r),m(r,i),c||(u=[J(t,"change",s[9]),J(r,"click",s[10])],c=!0)},p(p,g){if(g&5){f=p[26];let $;for($=0;$<f.length;$+=1){const C=ur(p,f,$);d[$]?d[$].p(C,g):(d[$]=fr(C),d[$].c(),d[$].m(t,null))}for(;$<d.length;$+=1)d[$].d(1);d.length=f.length}g&3&&Lt(t,p[1]),g&3&&a!==(a=p[1]==null)&&(r.disabled=a)},d(p){p&&E(e),He(d,p),c=!1,Te(u)}}}function fr(s){let e,t=s[22].name+"",n,l,o=s[22].quoteCount+"",r,i,a;return{c(){e=_("option"),n=H(t),l=H(": "),r=H(o),e.__value=i=s[22],e.value=e.__value,e.disabled=a=s[2].includes(s[22])},m(c,u){x(c,e,u),m(e,n),m(e,l),m(e,r)},p(c,u){u&1&&t!==(t=c[22].name+"")&&et(n,t),u&1&&o!==(o=c[22].quoteCount+"")&&et(r,o),u&1&&i!==(i=c[22])&&(e.__value=i,e.value=e.__value),u&5&&a!==(a=c[2].includes(c[22]))&&(e.disabled=a)},d(c){c&&E(e)}}}function Gh(s){let e,t,n;return{c(){e=_("div"),t=A(),n=_("div"),n.textContent="Loading authors...",h(e,"class","text-blue-800 "+s[5]+" svelte-af0fhv"),h(n,"class","text-blue-800")},m(l,o){x(l,e,o),x(l,t,o),x(l,n,o)},p:K,d(l){l&&E(e),l&&E(t),l&&E(n)}}}function dr(s){let e,t,n,l;function o(i){s[12](i)}let r={$$slots:{default:[Vh]},$$scope:{ctx:s}};return s[4]!==void 0&&(r.selected=s[4]),t=new Kn({props:r}),je.push(()=>At(t,"selected",o)),{c(){e=_("div"),L(t.$$.fragment),h(e,"class","my-4 py-4 border-y border-gray-300 flex items-start h-[25rem] overflow-hidden")},m(i,a){x(i,e,a),P(t,e,null),l=!0},p(i,a){const c={};a&536870924&&(c.$$scope={dirty:a,ctx:i}),!n&&a&16&&(n=!0,c.selected=i[4],Rt(()=>n=!1)),t.$set(c)},i(i){l||(w(t.$$.fragment,i),l=!0)},o(i){T(t.$$.fragment,i),l=!1},d(i){i&&E(e),O(t)}}}function Zh(s){let e,t,n,l,o=s[22].name+"",r,i,a,c,u=s[22].quoteCount+"",f,d,p,g;function $(){return s[11](s[24])}return{c(){e=_("div"),t=_("button"),t.textContent="×",n=A(),l=_("span"),r=H(o),a=A(),c=_("span"),f=H(u),d=A(),h(t,"class","text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"),h(l,"class","grow text-left overflow-hidden text-ellipsis whitespace-nowrap"),h(l,"title",i=s[22].name),h(c,"class","text-xs px-1 rounded-md bg-gray-600 text-white font-bold"),h(e,"class","tab svelte-af0fhv"),re(e,"active",s[16])},m(C,k){x(C,e,k),m(e,t),m(e,n),m(e,l),m(l,r),m(e,a),m(e,c),m(c,f),x(C,d,k),p||(g=[J(t,"click",$),J(e,"click",function(){Oe(s[25])&&s[25].apply(this,arguments)})],p=!0)},p(C,k){s=C,k&4&&o!==(o=s[22].name+"")&&et(r,o),k&4&&i!==(i=s[22].name)&&h(l,"title",i),k&4&&u!==(u=s[22].quoteCount+"")&&et(f,u),k&65536&&re(e,"active",s[16])},d(C){C&&E(e),C&&E(d),p=!1,Te(g)}}}function pr(s){let e,t;return e=new Dt({props:{$$slots:{default:[Zh,({active:n,activate:l})=>({16:n,25:l}),({active:n,activate:l})=>(n?65536:0)|(l?33554432:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&570490884&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Qh(s){let e,t,n,l,o,r,i=(s[21]instanceof Error?s[21].message:s[21])+"",a;return{c(){e=_("div"),t=_("div"),n=_("div"),n.textContent="Loading quotes error",l=A(),o=_("div"),r=_("strong"),a=H(i),h(n,"class","text-red-400"),h(r,"class","text-red-600"),h(t,"class","flex flex-col items-center"),h(e,"class","h-full flex items-center justify-center")},m(c,u){x(c,e,u),m(e,t),m(t,n),m(t,l),m(t,o),m(o,r),m(r,a)},p(c,u){u&8&&i!==(i=(c[21]instanceof Error?c[21].message:c[21])+"")&&et(a,i)},d(c){c&&E(e)}}}function Xh(s){let e,t=s[17],n=[];for(let l=0;l<t.length;l+=1)n[l]=hr(ar(s,t,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=Ee()},m(l,o){for(let r=0;r<n.length;r+=1)n[r].m(l,o);x(l,e,o)},p(l,o){if(o&8){t=l[17];let r;for(r=0;r<t.length;r+=1){const i=ar(l,t,r);n[r]?n[r].p(i,o):(n[r]=hr(i),n[r].c(),n[r].m(e.parentNode,e))}for(;r<n.length;r+=1)n[r].d(1);n.length=t.length}},d(l){He(n,l),l&&E(e)}}}function hr(s){let e,t,n,l,o,r=s[18].en+"",i,a,c,u=s[18].author+"",f,d;return{c(){e=_("div"),t=_("span"),t.textContent="“",n=A(),l=_("div"),o=_("div"),i=H(r),a=A(),c=_("div"),f=H(u),d=A(),h(t,"class","text-gray-200 text-7xl font-bold leading-[75%] mr-2"),h(o,"class","mb-3 leading-6"),h(c,"class","font-semibold italic text-right"),h(l,"class","grow"),h(e,"class","mb-2 last:mb-0 flex items-start")},m(p,g){x(p,e,g),m(e,t),m(e,n),m(e,l),m(l,o),m(o,i),m(l,a),m(l,c),m(c,f),m(e,d)},p(p,g){g&8&&r!==(r=p[18].en+"")&&et(i,r),g&8&&u!==(u=p[18].author+"")&&et(f,u)},d(p){p&&E(e)}}}function Jh(s){let e,t,n,l,o;return{c(){e=_("div"),t=_("div"),n=_("div"),l=A(),o=_("div"),o.textContent="Loading quotes...",h(n,"class","text-blue-800 w-12 h-12 "+s[5]+" svelte-af0fhv"),h(o,"class","text-blue-800"),h(t,"class","flex flex-col items-center"),h(e,"class","h-full flex items-center justify-center")},m(r,i){x(r,e,i),m(e,t),m(t,n),m(t,l),m(t,o)},p:K,d(r){r&&E(e)}}}function Yh(s){let e,t,n,l={ctx:s,current:null,token:null,hasCatch:!0,pending:Jh,then:Xh,catch:Qh,value:17,error:21};return Fs(t=s[13],l),{c(){e=_("div"),l.block.c(),n=A(),h(e,"class","px-4 overflow-y-auto h-full panel svelte-af0fhv"),re(e,"active",s[16])},m(o,r){x(o,e,r),l.block.m(e,l.anchor=null),l.mount=()=>e,l.anchor=null,x(o,n,r)},p(o,r){s=o,l.ctx=s,r&8&&t!==(t=s[13])&&Fs(t,l)||xi(l,s,r),r&65536&&re(e,"active",s[16])},d(o){o&&E(e),l.block.d(),l.token=null,l=null,o&&E(n)}}}function mr(s){let e,t;return e=new It({props:{$$slots:{default:[Yh,({active:n})=>({16:n}),({active:n})=>n?65536:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&536936456&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Vh(s){let e,t,n,l,o=s[2],r=[];for(let f=0;f<o.length;f+=1)r[f]=pr(cr(s,o,f));const i=f=>T(r[f],1,1,()=>{r[f]=null});let a=s[3],c=[];for(let f=0;f<a.length;f+=1)c[f]=mr(ir(s,a,f));const u=f=>T(c[f],1,1,()=>{c[f]=null});return{c(){e=_("div");for(let f=0;f<r.length;f+=1)r[f].c();t=A(),n=_("div");for(let f=0;f<c.length;f+=1)c[f].c();h(e,"class","basis-[24ch] overflow-x-hidden shrink-0 h-full overflow-y-auto"),h(n,"class","grow h-full")},m(f,d){x(f,e,d);for(let p=0;p<r.length;p+=1)r[p].m(e,null);x(f,t,d),x(f,n,d);for(let p=0;p<c.length;p+=1)c[p].m(n,null);l=!0},p(f,d){if(d&33620100){o=f[2];let p;for(p=0;p<o.length;p+=1){const g=cr(f,o,p);r[p]?(r[p].p(g,d),w(r[p],1)):(r[p]=pr(g),r[p].c(),w(r[p],1),r[p].m(e,null))}for(he(),p=o.length;p<r.length;p+=1)i(p);me()}if(d&65576){a=f[3];let p;for(p=0;p<a.length;p+=1){const g=ir(f,a,p);c[p]?(c[p].p(g,d),w(c[p],1)):(c[p]=mr(g),c[p].c(),w(c[p],1),c[p].m(n,null))}for(he(),p=a.length;p<c.length;p+=1)u(p);me()}},i(f){if(!l){for(let d=0;d<o.length;d+=1)w(r[d]);for(let d=0;d<a.length;d+=1)w(c[d]);l=!0}},o(f){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)T(r[d]);c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)T(c[d]);l=!1},d(f){f&&E(e),He(r,f),f&&E(t),f&&E(n),He(c,f)}}}function em(s){let e,t,n,l,o,r;function i(f,d){return f[0]==null?qh:Uh}let a=i(s),c=a(s),u=s[2].length&&dr(s);return{c(){e=_("section"),t=_("div"),t.innerHTML=`Example of vertical tab layout. <small class="line-through">Thanks to the authors of <a target="_blank" href="https://github.com/skolakoda" rel="noreferrer">Škola koda</a>
      for the useful and convenient
      <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">API</a></small>. Now the API doesn&#39;t work. JSON from the project
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">Škola koda</a> is used`,n=A(),l=_("div"),c.c(),o=A(),u&&u.c(),h(t,"class","mb-4 text-center leading-5"),h(l,"class","flex items-center justify-center gap-2"),h(e,"class","prose max-w-none my-4")},m(f,d){x(f,e,d),m(e,t),m(e,n),m(e,l),c.m(l,null),m(e,o),u&&u.m(e,null),r=!0},p(f,[d]){a===(a=i(f))&&c?c.p(f,d):(c.d(1),c=a(f),c&&(c.c(),c.m(l,null))),f[2].length?u?(u.p(f,d),d&4&&w(u,1)):(u=dr(f),u.c(),w(u,1),u.m(e,null)):u&&(he(),T(u,1,1,()=>{u=null}),me())},i(f){r||(w(u),r=!0)},o(f){T(u),r=!1},d(f){f&&E(e),c.d(),u&&u.d()}}}const tm="skolacoda-quotes.json",ia=100;function aa(){return mt(this,null,function*(){const s=yield fetch(tm);if(s.status>=400){const e=yield s.text();throw new Error(`${s.status}: ${e||s.statusText}`)}return yield new Promise(e=>setTimeout(e,ia)),s.json()})}function nm(){return mt(this,null,function*(){const s=Object.entries(ra(yield aa(),"author")).reduce((e,[t,n])=>(e.push({name:t,quoteCount:n.length}),e),[]).sort((e,t)=>e.name.localeCompare(t.name));return yield new Promise(e=>setTimeout(e,ia)),s})}function sm(s){return mt(this,null,function*(){var e;return(e=ra(yield aa(),"author")[s])!=null?e:[]})}function lm(s,e,t){const n="w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin";let l,o,r=[],i=[],a=NaN;function c(C){return C!=null&&!r.includes(C)?(t(2,r=[C,...r]),t(3,i=[sm(C.name),...i]),t(4,a=0),!0):!1}function u(C){C>=0&&C<r.length&&(t(2,r=[...r.slice(0,C),...r.slice(C+1)]),t(3,i=[...i.slice(0,C),...i.slice(C+1)]))}const f=()=>{t(0,l=nm())};function d(){o=ss(this),t(1,o),t(0,l)}const p=()=>c(o)?t(1,o=void 0):void 0,g=C=>u(C);function $(C){a=C,t(4,a)}return[l,o,r,i,a,n,c,u,f,d,p,g,$]}let om=class extends G{constructor(e){super(),W(this,e,lm,em,q,{})}};function rm(s){let e,t,n,l,o;return t=new om({}),l=new dt({props:{code:`<script lang="ts" context="module">
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
`}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),L(l.$$.fragment),h(e,"class","prose max-w-none my-4")},m(r,i){x(r,e,i),P(t,e,null),m(e,n),P(l,e,null),o=!0},p:K,i(r){o||(w(t.$$.fragment,r),w(l.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),T(l.$$.fragment,r),o=!1},d(r){r&&E(e),O(t),O(l)}}}let im=class extends G{constructor(e){super(),W(this,e,null,rm,q,{})}};function gr(s,e,t){const n=s.slice();return n[11]=e[t],n[13]=t,n}function _r(s,e,t){const n=s.slice();return n[11]=e[t],n[13]=t,n}function br(s){let e,t,n,l;function o(a){s[7](a)}function r(a){s[8](a)}let i={$$slots:{default:[um]},$$scope:{ctx:s}};return s[2]!==void 0&&(i.selected=s[2]),s[3]!==void 0&&(i.length=s[3]),e=new Kn({props:i}),je.push(()=>At(e,"selected",o)),je.push(()=>At(e,"length",r)),{c(){L(e.$$.fragment)},m(a,c){P(e,a,c),l=!0},p(a,c){const u={};c&131087&&(u.$$scope={dirty:c,ctx:a}),!t&&c&4&&(t=!0,u.selected=a[2],Rt(()=>t=!1)),!n&&c&8&&(n=!0,u.length=a[3],Rt(()=>n=!1)),e.$set(u)},i(a){l||(w(e.$$.fragment,a),l=!0)},o(a){T(e.$$.fragment,a),l=!1},d(a){O(e,a)}}}function am(s){let e,t,n,l,o,r,i;return{c(){e=_("button"),t=H("Tab #"),n=H(s[13]),o=A(),h(e,"class","svelte-wogwwx"),re(e,"active",s[14])},m(a,c){x(a,e,c),m(e,t),m(e,n),x(a,o,c),r||(i=[J(e,"click",function(){Oe(s[16])&&s[16].apply(this,arguments)}),Ge(l=Ys.call(null,e,{x:s[14]}))],r=!0)},p(a,c){s=a,l&&Oe(l.update)&&c&16384&&l.update.call(null,{x:s[14]}),c&16384&&re(e,"active",s[14])},d(a){a&&E(e),a&&E(o),r=!1,Te(i)}}}function $r(s){let e,t;return e=new Dt({props:{$$slots:{default:[am,({active:n,activate:l})=>({14:n,16:l}),({active:n,activate:l})=>(n?16384:0)|(l?65536:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&212992&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function vr(s){let e,t,n,l,o,r,i,a,c,u;return{c(){e=_("div"),t=_("button"),n=H("‹"),o=A(),r=_("button"),i=H("›"),t.disabled=l=s[2]===0,h(t,"class","svelte-wogwwx"),r.disabled=a=s[2]>=s[3]-1,h(r,"class","svelte-wogwwx"),h(e,"class","arrows svelte-wogwwx")},m(f,d){x(f,e,d),m(e,t),m(t,n),m(e,o),m(e,r),m(r,i),c||(u=[J(t,"click",s[5]),J(r,"click",s[6])],c=!0)},p(f,d){d&4&&l!==(l=f[2]===0)&&(t.disabled=l),d&12&&a!==(a=f[2]>=f[3]-1)&&(r.disabled=a)},d(f){f&&E(e),c=!1,Te(u)}}}function cm(s){let e,t,n,l,o,r,i;return{c(){e=_("div"),t=_("div"),n=H("Tab content #"),l=H(s[13]),o=A(),r=_("div"),r.textContent=`Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias unde minus expedita
              saepe dolorem accusamus molestias omnis repellat architecto, voluptate ullam rem et
              nihil exercitationem corporis, earum quasi accusantium.`,i=A(),h(t,"class","text-lg text-black mb-2"),h(r,"class","text-gray-500 text-sm mb-2"),h(e,"class","panel svelte-wogwwx"),re(e,"active",s[14])},m(a,c){x(a,e,c),m(e,t),m(t,n),m(t,l),m(e,o),m(e,r),x(a,i,c)},p(a,c){c&16384&&re(e,"active",a[14])},d(a){a&&E(e),a&&E(i)}}}function wr(s){let e,t;return e=new It({props:{$$slots:{default:[cm,({active:n})=>({14:n}),({active:n})=>n?16384:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},p(n,l){const o={};l&147456&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function um(s){let e,t,n,l,o,r,i,a,c,u={length:s[0]},f=[];for(let k=0;k<u.length;k+=1)f[k]=$r(_r(s,u,k));const d=k=>T(f[k],1,1,()=>{f[k]=null});let p=s[1]&&vr(s),g={length:s[0]},$=[];for(let k=0;k<g.length;k+=1)$[k]=wr(gr(s,g,k));const C=k=>T($[k],1,1,()=>{$[k]=null});return{c(){e=_("div"),t=_("div");for(let k=0;k<f.length;k+=1)f[k].c();l=A(),p&&p.c(),o=A();for(let k=0;k<$.length;k+=1)$[k].c();r=Ee(),h(t,"class","tabs svelte-wogwwx"),re(t,"is-overflow",s[1]),h(e,"class","tabs-list svelte-wogwwx")},m(k,v){x(k,e,v),m(e,t);for(let S=0;S<f.length;S+=1)f[S].m(t,null);m(e,l),p&&p.m(e,null),x(k,o,v);for(let S=0;S<$.length;S+=1)$[S].m(k,v);x(k,r,v),i=!0,a||(c=Ge(n=s[4].call(null,t,s[3])),a=!0)},p(k,v){if(v&81921){u={length:k[0]};let S;for(S=0;S<u.length;S+=1){const R=_r(k,u,S);f[S]?(f[S].p(R,v),w(f[S],1)):(f[S]=$r(R),f[S].c(),w(f[S],1),f[S].m(t,null))}for(he(),S=u.length;S<f.length;S+=1)d(S);me()}if(n&&Oe(n.update)&&v&8&&n.update.call(null,k[3]),(!i||v&2)&&re(t,"is-overflow",k[1]),k[1]?p?p.p(k,v):(p=vr(k),p.c(),p.m(e,null)):p&&(p.d(1),p=null),v&16385){g={length:k[0]};let S;for(S=0;S<g.length;S+=1){const R=gr(k,g,S);$[S]?($[S].p(R,v),w($[S],1)):($[S]=wr(R),$[S].c(),w($[S],1),$[S].m(r.parentNode,r))}for(he(),S=g.length;S<$.length;S+=1)C(S);me()}},i(k){if(!i){for(let v=0;v<u.length;v+=1)w(f[v]);for(let v=0;v<g.length;v+=1)w($[v]);i=!0}},o(k){f=f.filter(Boolean);for(let v=0;v<f.length;v+=1)T(f[v]);$=$.filter(Boolean);for(let v=0;v<$.length;v+=1)T($[v]);i=!1},d(k){k&&E(e),He(f,k),p&&p.d(),k&&E(o),He($,k),k&&E(r),a=!1,c()}}}function fm(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S,R,N=s[0]>0&&br(s);return{c(){e=_("section"),N&&N.c(),t=A(),n=_("section"),l=_("label"),o=_("span"),o.textContent="Number of tabs",r=A(),i=_("input"),a=A(),c=_("label"),u=_("input"),f=A(),d=_("span"),d.textContent="Is overflow",p=A(),g=_("label"),$=_("span"),$.textContent="Selected index",C=A(),k=_("input"),h(e,"class","demo svelte-wogwwx"),h(i,"class","input max-w-[7ch]"),h(i,"min","1"),h(i,"type","number"),h(l,"class","svelte-wogwwx"),h(u,"class","input"),h(u,"type","checkbox"),u.disabled=!0,u.checked=s[1],h(c,"class","svelte-wogwwx"),h(k,"class","input max-w-[7ch]"),h(k,"type","number"),h(g,"class","svelte-wogwwx"),h(n,"class","controls svelte-wogwwx")},m(y,D){x(y,e,D),N&&N.m(e,null),x(y,t,D),x(y,n,D),m(n,l),m(l,o),m(l,r),m(l,i),Ve(i,s[0]),m(n,a),m(n,c),m(c,u),m(c,f),m(c,d),m(n,p),m(n,g),m(g,$),m(g,C),m(g,k),Ve(k,s[2]),v=!0,S||(R=[J(i,"input",s[9]),J(k,"input",s[10])],S=!0)},p(y,[D]){y[0]>0?N?(N.p(y,D),D&1&&w(N,1)):(N=br(y),N.c(),w(N,1),N.m(e,null)):N&&(he(),T(N,1,1,()=>{N=null}),me()),D&1&&it(i.value)!==y[0]&&Ve(i,y[0]),(!v||D&2)&&(u.checked=y[1]),D&4&&it(k.value)!==y[2]&&Ve(k,y[2])},i(y){v||(w(N),v=!0)},o(y){T(N),v=!1},d(y){y&&E(e),N&&N.d(),y&&E(t),y&&E(n),S=!1,Te(R)}}}function dm(s,e,t){let n=25,l=!1,o=NaN,r=0;function i(g,$){const C=()=>g.scrollWidth>g.offsetWidth;return t(1,l=C()),{update(){t(1,l=C())}}}const a=()=>t(2,o--,o),c=()=>t(2,o++,o);function u(g){o=g,t(2,o)}function f(g){r=g,t(3,r)}function d(){n=it(this.value),t(0,n)}function p(){o=it(this.value),t(2,o)}return[n,l,o,r,i,a,c,u,f,d,p]}let pm=class extends G{constructor(e){super(),W(this,e,dm,fm,q,{})}};function hm(s){let e,t,n,l,o,r,i;return l=new pm({}),r=new dt({props:{code:`<script lang="ts">
  import { Tabs, Tab, Panel } from '@apsc/tabs';
  import scrollAction from '@apsc/scroll-child-action';

  let count = 25;
  let isOverflow = false;
  let selected = NaN;
  let length = 0;

  function detectOverflow(node: HTMLElement, _: number) {
    const checkOverflow = () => node.scrollWidth > node.offsetWidth;
    isOverflow = checkOverflow();
    return {
      update() {
        isOverflow = checkOverflow();
      }
    };
  }
<\/script>

<section class="demo">
  {#if count > 0}
    <Tabs bind:selected bind:length>
      <div class="tabs-list">
        <div class="tabs" use:detectOverflow={count} class:is-overflow={isOverflow}>
          {#each { length: count } as _, i}
            <Tab let:active let:activate>
              <button class:active on:click={activate} use:scrollAction={{ x: active }}
                >Tab #{i}</button
              >
            </Tab>
          {/each}
        </div>
        {#if isOverflow}
          <div class="arrows">
            <button disabled={selected === 0} on:click={() => selected--}>‹</button>
            <button disabled={selected >= length - 1} on:click={() => selected++}>›</button>
          </div>
        {/if}
      </div>
      {#each { length: count } as _, i}
        <Panel let:active>
          <div class="panel" class:active>
            <div class="text-lg text-black mb-2">Tab content #{i}</div>
            <div class="text-gray-500 text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias unde minus expedita
              saepe dolorem accusamus molestias omnis repellat architecto, voluptate ullam rem et
              nihil exercitationem corporis, earum quasi accusantium.
            </div>
          </div>
        </Panel>
      {/each}
    </Tabs>
  {/if}
</section>

<section class="controls">
  <label>
    <span>Number of tabs</span>
    <input class="input max-w-[7ch]" min="1" type="number" bind:value={count} />
  </label>
  <label>
    <input class="input" type="checkbox" disabled checked={isOverflow} />
    <span>Is overflow</span>
  </label>
  <label>
    <span>Selected index</span>
    <input class="input max-w-[7ch]" type="number" bind:value={selected} />
  </label>
</section>

<style lang="postcss">
  .demo {
    @apply my-4 border-y;
  }
  .tabs-list {
    @apply flex my-4 pb-2 border-b-2 border-indigo-200;
  }
  .tabs {
    @apply grow items-center flex whitespace-nowrap overflow-hidden gap-1;
  }
  .tabs.is-overflow {
    @apply pr-4;
  }
  .tabs button {
    @apply appearance-none px-2 rounded-md bg-indigo-200 text-indigo-800;
  }
  .tabs button.active {
    @apply bg-indigo-800 text-indigo-100;
  }
  .arrows {
    @apply pl-1 relative flex items-center gap-0.5;
  }
  .arrows::before {
    content: '';
    right: 100%;
    @apply absolute top-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-white;
  }
  .arrows button {
    @apply appearance-none text-2xl leading-4 px-1 pt-0.5 pb-1 rounded-[0.25rem] bg-indigo-400 text-white;
  }
  .arrows button:disabled {
    @apply bg-gray-400 text-gray-200 cursor-not-allowed;
  }
  .arrows button:not(:disabled):hover {
    @apply bg-indigo-800;
  }
  .panel:not(.active) {
    display: none;
  }
  .controls {
    @apply w-fit mx-auto flex gap-4;
  }
  .controls label {
    @apply flex items-center gap-2;
  }
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="./?c=scroll-child-action"><code>@apsc/scroll-child-action</code></a>',n=A(),L(l.$$.fragment),o=A(),L(r.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(e,"class","prose max-w-none my-4")},m(a,c){x(a,e,c),m(e,t),m(e,n),P(l,e,null),m(e,o),P(r,e,null),i=!0},p:K,i(a){i||(w(l.$$.fragment,a),w(r.$$.fragment,a),i=!0)},o(a){T(l.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),O(l),O(r)}}}let mm=class extends G{constructor(e){super(),W(this,e,null,hm,q,{})}};function gm(s){let e;return{c(){e=H("API")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function _m(s){let e;return{c(){e=H("Base example")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function bm(s){let e;return{c(){e=H("Nested example")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function $m(s){let e;return{c(){e=H("Scrolling tabs")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function vm(s){let e;return{c(){e=H("Quotes example")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function wm(s){let e,t,n,l,o,r,i,a,c,u;return e=new Ke({props:{$$slots:{default:[gm]},$$scope:{ctx:s}}}),n=new Ke({props:{$$slots:{default:[_m]},$$scope:{ctx:s}}}),o=new Ke({props:{$$slots:{default:[bm]},$$scope:{ctx:s}}}),i=new Ke({props:{$$slots:{default:[$m]},$$scope:{ctx:s}}}),c=new Ke({props:{$$slots:{default:[vm]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment),r=A(),L(i.$$.fragment),a=A(),L(c.$$.fragment)},m(f,d){P(e,f,d),x(f,t,d),P(n,f,d),x(f,l,d),P(o,f,d),x(f,r,d),P(i,f,d),x(f,a,d),P(c,f,d),u=!0},p(f,d){const p={};d&2&&(p.$$scope={dirty:d,ctx:f}),e.$set(p);const g={};d&2&&(g.$$scope={dirty:d,ctx:f}),n.$set(g);const $={};d&2&&($.$$scope={dirty:d,ctx:f}),o.$set($);const C={};d&2&&(C.$$scope={dirty:d,ctx:f}),i.$set(C);const k={};d&2&&(k.$$scope={dirty:d,ctx:f}),c.$set(k)},i(f){u||(w(e.$$.fragment,f),w(n.$$.fragment,f),w(o.$$.fragment,f),w(i.$$.fragment,f),w(c.$$.fragment,f),u=!0)},o(f){T(e.$$.fragment,f),T(n.$$.fragment,f),T(o.$$.fragment,f),T(i.$$.fragment,f),T(c.$$.fragment,f),u=!1},d(f){O(e,f),f&&E(t),O(n,f),f&&E(l),O(o,f),f&&E(r),O(i,f),f&&E(a),O(c,f)}}}function km(s){let e,t;return e=new mh({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function ym(s){let e,t;return e=new Mh({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Tm(s){let e,t;return e=new Fh({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function kr(s){let e,t;return e=new mm({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Em(s){let e,t,n=s[0]&&kr();return{c(){n&&n.c(),e=Ee()},m(l,o){n&&n.m(l,o),x(l,e,o),t=!0},p(l,o){l[0]?n?o&1&&w(n,1):(n=kr(),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(he(),T(n,1,1,()=>{n=null}),me())},i(l){t||(w(n),t=!0)},o(l){T(n),t=!1},d(l){n&&n.d(l),l&&E(e)}}}function xm(s){let e,t;return e=new im({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Sm(s){let e,t,n,l,o,r,i,a,c,u,f,d;return e=new wn({props:{$$slots:{default:[wm]},$$scope:{ctx:s}}}),n=new We({props:{$$slots:{default:[km]},$$scope:{ctx:s}}}),o=new We({props:{$$slots:{default:[ym]},$$scope:{ctx:s}}}),i=new We({props:{$$slots:{default:[Tm]},$$scope:{ctx:s}}}),c=new We({props:{$$slots:{default:[Em,({active:p})=>({0:p}),({active:p})=>p?1:0]},$$scope:{ctx:s}}}),f=new We({props:{$$slots:{default:[xm]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment),r=A(),L(i.$$.fragment),a=A(),L(c.$$.fragment),u=A(),L(f.$$.fragment)},m(p,g){P(e,p,g),x(p,t,g),P(n,p,g),x(p,l,g),P(o,p,g),x(p,r,g),P(i,p,g),x(p,a,g),P(c,p,g),x(p,u,g),P(f,p,g),d=!0},p(p,g){const $={};g&2&&($.$$scope={dirty:g,ctx:p}),e.$set($);const C={};g&2&&(C.$$scope={dirty:g,ctx:p}),n.$set(C);const k={};g&2&&(k.$$scope={dirty:g,ctx:p}),o.$set(k);const v={};g&2&&(v.$$scope={dirty:g,ctx:p}),i.$set(v);const S={};g&3&&(S.$$scope={dirty:g,ctx:p}),c.$set(S);const R={};g&2&&(R.$$scope={dirty:g,ctx:p}),f.$set(R)},i(p){d||(w(e.$$.fragment,p),w(n.$$.fragment,p),w(o.$$.fragment,p),w(i.$$.fragment,p),w(c.$$.fragment,p),w(f.$$.fragment,p),d=!0)},o(p){T(e.$$.fragment,p),T(n.$$.fragment,p),T(o.$$.fragment,p),T(i.$$.fragment,p),T(c.$$.fragment,p),T(f.$$.fragment,p),d=!1},d(p){O(e,p),p&&E(t),O(n,p),p&&E(l),O(o,p),p&&E(r),O(i,p),p&&E(a),O(c,p),p&&E(u),O(f,p)}}}function Am(s){let e,t,n,l,o,r,i,a,c,u,f,d,p;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[Sm]},$$scope:{ctx:s}}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),l=_("h1"),l.textContent="A component set and context class for organizing the Tabs interface",o=A(),r=_("a"),i=_("img"),c=A(),u=_("ul"),u.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>with context to control tab switching</li>`,f=A(),L(d.$$.fragment),h(l,"class","text-2xl"),h(i,"class","max-w-[4em]"),ft(i.src,a=gt)||h(i,"src",a),h(i,"alt","NPM logo"),h(r,"class","float-right"),h(r,"href","https://www.npmjs.com/package/@apsc/tabs"),h(r,"target","_blank"),h(r,"rel","noreferrer"),h(u,"class","leading-6 mb-8"),h(e,"class","prose max-w-none my-4")},m(g,$){x(g,e,$),P(t,e,null),m(e,n),m(e,l),m(e,o),m(e,r),m(r,i),m(e,c),m(e,u),m(e,f),P(d,e,null),p=!0},p(g,[$]){const C={};$&2&&(C.$$scope={dirty:$,ctx:g}),d.$set(C)},i(g){p||(w(t.$$.fragment,g),w(d.$$.fragment,g),p=!0)},o(g){T(t.$$.fragment,g),T(d.$$.fragment,g),p=!1},d(g){g&&E(e),O(t),O(d)}}}function Cm(s){return Tn(document.title.replace(/(•).*$/,"$1 Tabs")),[]}let Nm=class extends G{constructor(e){super(),W(this,e,Cm,Am,q,{})}};const Mm=`<div class="component__source">Source <code>Notifications.svelte</code></div>
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
`;function Rm(s){let e,t,n;return t=new xn({props:{source:Mm}}),{c(){e=_("section"),L(t.$$.fragment),h(e,"class","documentation")},m(l,o){x(l,e,o),P(t,e,null),n=!0},p:K,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){T(t.$$.fragment,l),n=!1},d(l){l&&E(e),O(t)}}}class Pm extends G{constructor(e){super(),W(this,e,null,Rm,q,{})}}const Om=`.c-notifications {
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
`,Lm=`.c-notifications {
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
`;function Dm(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function ca(s){const e=s-1;return e*e*e+1}function Im(s,{delay:e=0,duration:t=400,easing:n=Dm,amount:l=5,opacity:o=0}={}){const r=getComputedStyle(s),i=+r.opacity,a=r.filter==="none"?"":r.filter,c=i*(1-o);return{delay:e,duration:t,easing:n,css:(u,f)=>`opacity: ${i-c*f}; filter: ${a} blur(${f*l}px);`}}function Bm(s,{delay:e=0,duration:t=400,easing:n=pi}={}){const l=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:n,css:o=>`opacity: ${o*l}`}}function Un(s,{delay:e=0,duration:t=400,easing:n=ca}={}){const l=getComputedStyle(s),o=+l.opacity,r=parseFloat(l.height),i=parseFloat(l.paddingTop),a=parseFloat(l.paddingBottom),c=parseFloat(l.marginTop),u=parseFloat(l.marginBottom),f=parseFloat(l.borderTopWidth),d=parseFloat(l.borderBottomWidth);return{delay:e,duration:t,easing:n,css:p=>`overflow: hidden;opacity: ${Math.min(p*20,1)*o};height: ${p*r}px;padding-top: ${p*i}px;padding-bottom: ${p*a}px;margin-top: ${p*c}px;margin-bottom: ${p*u}px;border-top-width: ${p*f}px;border-bottom-width: ${p*d}px;`}}function zm(s,{delay:e=0,duration:t=400,easing:n=ca,start:l=0,opacity:o=0}={}){const r=getComputedStyle(s),i=+r.opacity,a=r.transform==="none"?"":r.transform,c=1-l,u=i*(1-o);return{delay:e,duration:t,easing:n,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${i-u*d}
		`}}function yr(s,e,t){const n=s.slice();return n[8]=e[t],n}const Hm=s=>({notification:s&16}),Tr=s=>({notification:s[8]});function Fm(s){let e,t,n=(s[8].message||"No message")+"",l,o,r,i,a,c,u,f;function d(){return s[7](s[8])}return{c(){e=_("div"),t=_("span"),l=A(),o=_("span"),r=A(),h(t,"class","c-notifications__item__message"),h(o,"role","button"),h(o,"aria-label","Close notification"),h(o,"class","c-notifications__item__close"),h(e,"class",i="c-notifications__item"+(s[8].type?" "+s[8].type:""))},m(p,g){x(p,e,g),m(e,t),t.innerHTML=n,m(e,l),m(e,o),m(e,r),c=!0,u||(f=J(o,"click",d),u=!0)},p(p,g){s=p,(!c||g&16)&&n!==(n=(s[8].message||"No message")+"")&&(t.innerHTML=n),(!c||g&16&&i!==(i="c-notifications__item"+(s[8].type?" "+s[8].type:"")))&&h(e,"class",i)},i(p){c||($t(()=>{a||(a=rn(e,s[2],s[3],!0)),a.run(1)}),c=!0)},o(p){a||(a=rn(e,s[2],s[3],!1)),a.run(0),c=!1},d(p){p&&E(e),p&&a&&a.end(),u=!1,f()}}}function Er(s,e){let t,n;const l=e[6].default,o=Ce(l,e,e[5],Tr),r=o||Fm(e);return{key:s,first:null,c(){t=Ee(),r&&r.c(),this.first=t},m(i,a){x(i,t,a),r&&r.m(i,a),n=!0},p(i,a){e=i,o?o.p&&(!n||a&48)&&Me(o,l,e,e[5],n?Ne(l,e[5],a,Hm):Re(e[5]),Tr):r&&r.p&&(!n||a&24)&&r.p(e,n?a:-1)},i(i){n||(w(r,i),n=!0)},o(i){T(r,i),n=!1},d(i){i&&E(t),r&&r.d(i)}}}function jm(s){let e,t=[],n=new Map,l,o,r,i=s[4];const a=c=>c[8].id;for(let c=0;c<i.length;c+=1){let u=yr(s,i,c),f=a(u);n.set(f,t[c]=Er(f,u))}return{c(){e=_("div");for(let c=0;c<t.length;c+=1)t[c].c();h(e,"class",l="c-notifications"+(s[0]?" "+s[0]:"")),h(e,"style",o=s[1]||void 0)},m(c,u){x(c,e,u);for(let f=0;f<t.length;f+=1)t[f].m(e,null);r=!0},p(c,[u]){u&56&&(i=c[4],he(),t=Vc(t,u,a,1,c,i,n,e,Yc,Er,null,yr),me()),(!r||u&1&&l!==(l="c-notifications"+(c[0]?" "+c[0]:"")))&&h(e,"class",l),(!r||u&2&&o!==(o=c[1]||void 0))&&h(e,"style",o)},i(c){if(!r){for(let u=0;u<i.length;u+=1)w(t[u]);r=!0}},o(c){for(let u=0;u<t.length;u+=1)T(t[u]);r=!1},d(c){c&&E(e);for(let u=0;u<t.length;u+=1)t[u].d()}}}let Is=!1;const Ws=function(){const{subscribe:s,set:e,update:t}=ds([]);return{subscribe:s,clear(){e([])},push(n){if(!Is)throw new Error("No Notification component instance");const l=tt({id:Symbol("Notification")},n);return t(o=>[...o,l]),n.timeout&&n.timeout>0&&setTimeout(()=>this.pop(l.id),n.timeout),l.id},pop(n){t(l=>{const o=l.findIndex(r=>r.id===n);return o>=0&&l.splice(o,1),l})}}}();function Um(s,e,t){let n,l=K;Jt(s,Ws,d=>t(4,n=d)),s.$$.on_destroy.push(()=>l());let{$$slots:o={},$$scope:r}=e,{class:i=""}=e,{style:a=""}=e,{transitionFn:c=Un}=e,{transitionParams:u={}}=e;bn(()=>{if(Is)throw new Error("The Notifications component already has an instance");Is=!0}),Qs(()=>Is=!1);const f=d=>Ws.pop(d.id);return s.$$set=d=>{"class"in d&&t(0,i=d.class),"style"in d&&t(1,a=d.style),"transitionFn"in d&&t(2,c=d.transitionFn),"transitionParams"in d&&t(3,u=d.transitionParams),"$$scope"in d&&t(5,r=d.$$scope)},[i,a,c,u,n,r,o,f]}class qm extends G{constructor(e){super(),W(this,e,Um,jm,q,{class:0,style:1,transitionFn:2,transitionParams:3})}}const wl=[{author:"Edsger W. Dijkstra",en:"Computer Science is no more about computers than astronomy is about telescopes."},{author:"Edsger W. Dijkstra",en:"Simplicity is prerequisite for reliability."},{author:"Edsger W. Dijkstra",en:"The computing scientist’s main challenge is not to get confused by the complexities of his own making."},{author:"Edsger W. Dijkstra",en:"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},{author:"Edsger W. Dijkstra",en:"A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent“."},{author:"Tony Hoare",en:"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},{author:"Jeff Hammerbacher",en:"The best minds of my generation are thinking about how to make people click ads."},{author:"Edsger W. Dijkstra",en:"The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities."},{author:"Edsger W. Dijkstra",en:'How do we convince people that in programming simplicity and clarity — in short: what mathematicians call "elegance" — are not a dispensable luxury, but a crucial matter that decides between success and failure?'},{author:"Fred Brooks",en:"Adding manpower to a late software project makes it later."},{author:"Michael Stal",en:"Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person."},{author:"Fred Brooks",en:"Nine women can't make a baby in one month."},{author:"Jeff Sickel",en:"Deleted code is debugged code."},{author:"Ken Thompson",en:"When in doubt, use brute force."},{author:"Fred Brooks",en:"When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned."},{author:"Fred Brooks",en:"If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two."},{author:"Fred Brooks",en:"Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect."},{author:"Fred Brooks",en:"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures."},{author:"Fred Brooks",en:'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.'},{author:"Donald Knuth",en:"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%."},{author:"Ken Thompson",en:"One of my most productive days was throwing away 1,000 lines of code."},{author:"Grace Hopper",en:"One accurate measurement is worth more than a thousand expert opinions."},{author:"Fred Brooks",en:"What one programmer can do in one month, two programmers can do in two months."},{author:"Rick Osborne",en:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},{author:"John Ousterhout",en:"A program that produces incorrect results twice as fast is infinitely slower."},{author:"Poul Anderson",en:"I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated."},{author:"Robert C. Martin",en:"Cleaning code does NOT take time. NOT cleaning code does take time."},{author:"David Gelernter",en:"Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity."},{author:"Edward V. Berard",en:"Walking on water and developing software from a specification are easy if both are frozen."},{author:"Brian Kernighan",en:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},{author:"Brian Kernighan",en:"Controlling complexity is the essence of computer programming."},{author:"Chris Wenham",en:"Debugging time increases as a square of the program’s size."},{author:"Seymour Cray",en:"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."},{author:"Ron Jeffries",en:"Code never lies, comments sometimes do."},{author:"Laurence J. Peter",en:"Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them."},{author:"Poul-Henning Kamp",en:'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.'},{author:"Albert Einstein",en:"I have no special talent. I am only passionately curious."},{author:"Robert C. Martin",en:"The proper use of comments is to compensate for our failure to express ourself in code."},{author:"Rob Pike",en:"When there is no type hierarchy you don’t have to manage the type hierarchy."},{author:"Steve Jobs",en:"Everybody should learn to program a computer, because it teaches you how to think."},{author:"Chris Sacca",en:"Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for."},{author:"Bill Gates",en:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},{author:"William Wulf",en:"More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity."},{author:"Edsger W. Dijkstra",en:"Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence."},{author:"Albert Einstein",en:"Imagination is more important than knowledge."}];function xr(s,e,t){const n=s.slice();return n[20]=e[t],n}function Sr(s,e,t){const n=s.slice();return n[23]=e[t],n}function Ar(s){let e,t,n,l=s[23]+"",o,r,i;return{c(){e=_("label"),t=_("input"),n=A(),o=H(l),h(t,"type","radio"),h(t,"name","styles"),t.__value=s[23],t.value=t.__value,s[12][2].push(t),h(e,"class","mr-2 last:mr-0")},m(a,c){x(a,e,c),m(e,t),t.checked=t.__value===s[3],m(e,n),m(e,o),r||(i=J(t,"change",s[17]),r=!0)},p(a,c){c&8&&(t.checked=t.__value===a[3])},d(a){a&&E(e),s[12][2].splice(s[12][2].indexOf(t),1),r=!1,i()}}}function Cr(s){let e,t=s[20]+"",n;return{c(){e=_("option"),n=H(t),e.__value=s[20],e.value=e.__value},m(l,o){x(l,e,o),m(e,n)},p:K,d(l){l&&E(e)}}}function Km(s){let e,t=`<style type="text/css" data-text="test">${s[7][s[3]]}</style>`,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S,R,N,y,D,B,Z,ee,oe,ce,ve,be,Le,z,U,Y,te,F,pe,ie,we,V,xe,ge,Ze,Ae,Ye,bt,Ue,st,Qe,ct,vt,Fe,ue,wt;o=new qm({props:{style:"display: flex; "+s[0]+s[1]}});let Pe=Object.keys(s[7]),$e=[];for(let ne=0;ne<Pe.length;ne+=1)$e[ne]=Ar(Sr(s,Pe,ne));let lt=s[8],De=[];for(let ne=0;ne<lt.length;ne+=1)De[ne]=Cr(xr(s,lt,ne));return{c(){e=new ki(!1),n=Ee(),l=A(),L(o.$$.fragment),r=A(),i=_("div"),i.innerHTML='This example uses quotes from the <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">API</a>  <a target="_blank" rel="noreferrer" href="https://github.com/skolakoda">Škola koda</a>',a=A(),c=_("form"),u=_("div"),f=_("div"),d=_("div"),d.textContent="Side",p=A(),g=_("label"),$=_("input"),C=H(" left"),k=A(),v=_("label"),S=_("input"),R=H(" right"),N=A(),y=_("div"),D=_("div"),D.textContent="Direction",B=A(),Z=_("label"),ee=_("input"),oe=H(" from top"),ce=A(),ve=_("label"),be=_("input"),Le=H(" from bottom"),z=A(),U=_("label"),Y=_("div"),Y.textContent="Timeout",te=A(),F=_("input"),pe=A(),ie=_("div"),we=_("div"),we.textContent="Style",V=A();for(let ne=0;ne<$e.length;ne+=1)$e[ne].c();xe=A(),ge=_("label"),Ze=_("textarea"),Ae=A(),Ye=_("div"),bt=_("label"),Ue=_("input"),st=A(),Qe=_("select");for(let ne=0;ne<De.length;ne+=1)De[ne].c();ct=A(),vt=_("div"),vt.innerHTML=`<input class="input block w-40" type="submit" value="Notify"/> 
    <input class="input block w-40" type="reset" value="Clear"/>`,e.a=n,h(i,"class","mb-4 text-center"),h(d,"class","text-sm uppercase opacity-70"),h($,"type","radio"),h($,"name","hpos"),$.__value="left: 0; right: unset;",$.value=$.__value,s[12][0].push($),h(S,"type","radio"),h(S,"name","hpos"),S.__value="right: 0;",S.value=S.__value,s[12][0].push(S),h(D,"class","text-sm uppercase opacity-70"),h(ee,"type","radio"),h(ee,"name","vpos"),ee.__value="top: 0; bottom: unset; flex-direction: column-reverse;",ee.value=ee.__value,s[12][1].push(ee),h(be,"type","radio"),h(be,"name","vpos"),be.__value="top: unset; bottom: 0; flex-direction: column;",be.value=be.__value,s[12][1].push(be),h(Y,"class","text-sm uppercase opacity-70"),h(F,"class","input w-[9ch]"),h(F,"min","0"),h(F,"step","100"),h(F,"type","number"),h(we,"class","text-sm uppercase opacity-70"),h(u,"class","flex gap-4 items-center justify-evenly mb-4"),h(Ze,"name","quote"),Ze.value=s[6],h(Ze,"rows","3"),h(Ze,"class","input w-full"),h(Ze,"placeholder","Quote"),h(ge,"class","block w-full mb-4"),h(Ue,"name","author"),Ue.value=s[5],h(Ue,"class","input w-full"),h(Ue,"type","text"),h(Ue,"placeholder","Author"),h(bt,"class","block w-full"),h(Qe,"class","input block w-full"),s[4]===void 0&&$t(()=>s[18].call(Qe)),h(Ye,"class","mb-4 flex gap-4"),h(vt,"class","mx-auto w-fit flex gap-4"),h(c,"class","not-prose w-full")},m(ne,Se){e.m(t,document.head),m(document.head,n),x(ne,l,Se),P(o,ne,Se),x(ne,r,Se),x(ne,i,Se),x(ne,a,Se),x(ne,c,Se),m(c,u),m(u,f),m(f,d),m(f,p),m(f,g),m(g,$),$.checked=$.__value===s[0],m(g,C),m(f,k),m(f,v),m(v,S),S.checked=S.__value===s[0],m(v,R),m(u,N),m(u,y),m(y,D),m(y,B),m(y,Z),m(Z,ee),ee.checked=ee.__value===s[1],m(Z,oe),m(y,ce),m(y,ve),m(ve,be),be.checked=be.__value===s[1],m(ve,Le),m(u,z),m(u,U),m(U,Y),m(U,te),m(U,F),Ve(F,s[2]),m(u,pe),m(u,ie),m(ie,we),m(ie,V);for(let Q=0;Q<$e.length;Q+=1)$e[Q].m(ie,null);m(c,xe),m(c,ge),m(ge,Ze),m(c,Ae),m(c,Ye),m(Ye,bt),m(bt,Ue),m(Ye,st),m(Ye,Qe);for(let Q=0;Q<De.length;Q+=1)De[Q].m(Qe,null);Lt(Qe,s[4]),m(c,ct),m(c,vt),Fe=!0,ue||(wt=[J($,"change",s[11]),J(S,"change",s[13]),J(ee,"change",s[14]),J(be,"change",s[15]),J(F,"input",s[16]),J(Qe,"change",s[18]),J(c,"submit",ns(s[9])),J(c,"reset",ns(s[19]))],ue=!0)},p(ne,[Se]){(!Fe||Se&8)&&t!==(t=`<style type="text/css" data-text="test">${ne[7][ne[3]]}</style>`)&&e.p(t);const Q={};if(Se&3&&(Q.style="display: flex; "+ne[0]+ne[1]),o.$set(Q),Se&1&&($.checked=$.__value===ne[0]),Se&1&&(S.checked=S.__value===ne[0]),Se&2&&(ee.checked=ee.__value===ne[1]),Se&2&&(be.checked=be.__value===ne[1]),Se&4&&it(F.value)!==ne[2]&&Ve(F,ne[2]),Se&136){Pe=Object.keys(ne[7]);let X;for(X=0;X<Pe.length;X+=1){const ae=Sr(ne,Pe,X);$e[X]?$e[X].p(ae,Se):($e[X]=Ar(ae),$e[X].c(),$e[X].m(ie,null))}for(;X<$e.length;X+=1)$e[X].d(1);$e.length=Pe.length}if((!Fe||Se&64)&&(Ze.value=ne[6]),(!Fe||Se&32&&Ue.value!==ne[5])&&(Ue.value=ne[5]),Se&256){lt=ne[8];let X;for(X=0;X<lt.length;X+=1){const ae=xr(ne,lt,X);De[X]?De[X].p(ae,Se):(De[X]=Cr(ae),De[X].c(),De[X].m(Qe,null))}for(;X<De.length;X+=1)De[X].d(1);De.length=lt.length}Se&272&&Lt(Qe,ne[4])},i(ne){Fe||(w(o.$$.fragment,ne),Fe=!0)},o(ne){T(o.$$.fragment,ne),Fe=!1},d(ne){E(n),ne&&e.d(),ne&&E(l),O(o,ne),ne&&E(r),ne&&E(i),ne&&E(a),ne&&E(c),s[12][0].splice(s[12][0].indexOf($),1),s[12][0].splice(s[12][0].indexOf(S),1),s[12][1].splice(s[12][1].indexOf(ee),1),s[12][1].splice(s[12][1].indexOf(be),1),He($e,ne),He(De,ne),ue=!1,Te(wt)}}}function Wm(s,e,t){let n,l,o=0,r="left: 0; right: unset;",i="top: 0; bottom: unset; flex-direction: column-reverse;",a=1e4,c={simple:Om,bootstrap:Lm},u=Object.keys(c)[0];const f=["primary","secondary","success","danger","warning","info","light","dark"];let d=f[0];function p({currentTarget:D}){if(D instanceof HTMLFormElement){const B=D.elements.quote.value,Z=D.author.value;Ws.push({message:[B?`<div>${B}</div>`:"",Z?`<div class="italic text-right">${Z}</div>`:""].filter(oe=>!!oe).join(""),type:d,timeout:a}),t(10,o=o+1>=wl.length?0:o+1);let ee=f.indexOf(d)+1;ee<0||ee>=f.length?t(4,d=f[0]):t(4,d=f[ee])}}const g=[[],[],[]];function $(){r=this.__value,t(0,r)}function C(){r=this.__value,t(0,r)}function k(){i=this.__value,t(1,i)}function v(){i=this.__value,t(1,i)}function S(){a=it(this.value),t(2,a)}function R(){u=this.__value,t(3,u)}function N(){d=ss(this),t(4,d),t(8,f)}const y=()=>Ws.clear();return s.$$.update=()=>{s.$$.dirty&1024&&t(6,n=wl[o].en),s.$$.dirty&1024&&t(5,l=wl[o].author)},[r,i,a,u,d,l,n,c,f,p,o,$,g,C,k,v,S,R,N,y]}let Gm=class extends G{constructor(e){super(),W(this,e,Wm,Km,q,{})}};function Zm(s){let e,t,n,l,o;return t=new Gm({}),l=new dt({props:{code:`<script lang="ts">
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
</form>`}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),L(l.$$.fragment),h(e,"class","prose max-w-none my-4")},m(r,i){x(r,e,i),P(t,e,null),m(e,n),P(l,e,null),o=!0},p:K,i(r){o||(w(t.$$.fragment,r),w(l.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),T(l.$$.fragment,r),o=!1},d(r){r&&E(e),O(t),O(l)}}}let Qm=class extends G{constructor(e){super(),W(this,e,null,Zm,q,{})}};function Xm(s){let e;return{c(){e=H("API")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function Jm(s){let e;return{c(){e=H("Base example")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function Ym(s){let e,t,n,l;return e=new Ke({props:{$$slots:{default:[Xm]},$$scope:{ctx:s}}}),n=new Ke({props:{$$slots:{default:[Jm]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment)},m(o,r){P(e,o,r),x(o,t,r),P(n,o,r),l=!0},p(o,r){const i={};r&1&&(i.$$scope={dirty:r,ctx:o}),e.$set(i);const a={};r&1&&(a.$$scope={dirty:r,ctx:o}),n.$set(a)},i(o){l||(w(e.$$.fragment,o),w(n.$$.fragment,o),l=!0)},o(o){T(e.$$.fragment,o),T(n.$$.fragment,o),l=!1},d(o){O(e,o),o&&E(t),O(n,o)}}}function Vm(s){let e,t;return e=new Pm({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function eg(s){let e,t;return e=new Qm({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function tg(s){let e,t,n,l,o,r;return e=new wn({props:{$$slots:{default:[Ym]},$$scope:{ctx:s}}}),n=new We({props:{$$slots:{default:[Vm]},$$scope:{ctx:s}}}),o=new We({props:{$$slots:{default:[eg]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment)},m(i,a){P(e,i,a),x(i,t,a),P(n,i,a),x(i,l,a),P(o,i,a),r=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),o.$set(f)},i(i){r||(w(e.$$.fragment,i),w(n.$$.fragment,i),w(o.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(o.$$.fragment,i),r=!1},d(i){O(e,i),i&&E(t),O(n,i),i&&E(l),O(o,i)}}}function ng(s){let e,t,n,l,o,r,i,a,c,u,f,d,p;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[tg]},$$scope:{ctx:s}}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),l=_("h1"),l.textContent="Component for notifications globally for the entire application",o=A(),r=_("a"),i=_("img"),c=A(),u=_("ul"),u.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>one instance for the entire application</li> 
    <li>with custom notification transition</li> 
    <li>custom notification element components</li> 
    <li>with configurable timeout for each notification</li>`,f=A(),L(d.$$.fragment),h(l,"class","text-2xl max-w-lg"),h(i,"class","max-w-[4em]"),ft(i.src,a=gt)||h(i,"src",a),h(i,"alt","NPM logo"),h(r,"class","float-right"),h(r,"href","https://www.npmjs.com/package/@apsc/glob-notify"),h(r,"target","_blank"),h(r,"rel","noreferrer"),h(u,"class","leading-6 mb-8"),h(e,"class","prose max-w-none my-4")},m(g,$){x(g,e,$),P(t,e,null),m(e,n),m(e,l),m(e,o),m(e,r),m(r,i),m(e,c),m(e,u),m(e,f),P(d,e,null),p=!0},p(g,[$]){const C={};$&1&&(C.$$scope={dirty:$,ctx:g}),d.$set(C)},i(g){p||(w(t.$$.fragment,g),w(d.$$.fragment,g),p=!0)},o(g){T(t.$$.fragment,g),T(d.$$.fragment,g),p=!1},d(g){g&&E(e),O(t),O(d)}}}function sg(s){return Tn(document.title.replace(/(•).*$/,"$1 GlobNotify")),[]}let lg=class extends G{constructor(e){super(),W(this,e,sg,ng,q,{})}};const og=`<div class="component__source">Source <code>ColorPicker.svelte</code></div>
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
</td></tr></table>
`;function rg(s){let e,t,n;return t=new xn({props:{source:og}}),{c(){e=_("section"),L(t.$$.fragment),h(e,"class","documentation")},m(l,o){x(l,e,o),P(t,e,null),n=!0},p:K,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){T(t.$$.fragment,l),n=!1},d(l){l&&E(e),O(t)}}}let ig=class extends G{constructor(e){super(),W(this,e,null,rg,q,{})}};function ua(s){var t;const e=(t=/^#([0-9a-f]{3,8})$/gi.exec(s))==null?void 0:t[1];if(e!=null){if(e.length===3||e.length===4)return e.split(/([0-9a-f])/gi).filter(Boolean);if(e.length===6||e.length===8)return e.split(/([0-9a-f]{2})/gi).filter(Boolean)}}function Nr(s){try{return ua(s)!=null}catch(e){return!1}}function Nt(s,e,t){return Math.max(Math.min(s,t),e)}function ag(s){return ug(el(s))}function el(s){var n;const e=(n=ua(s))==null?void 0:n.map(l=>l.length===1?l+l:l);if(e==null)throw new Error(`Invalid color ${s}`);const t={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return e[3]&&(t.a=Math.round(parseInt(e[3],16)/255*1e3)/1e3),t}function cg(s){const e=s.s/100,t=s.l/100,n=(1-Math.abs(2*t-1))*e,l=n*(1-Math.abs(s.h/60%2-1)),o=t-n/2;let r=0,i=0,a=0;0<=s.h&&s.h<60?(r=n,i=l,a=0):60<=s.h&&s.h<120?(r=l,i=n,a=0):120<=s.h&&s.h<180?(r=0,i=n,a=l):180<=s.h&&s.h<240?(r=0,i=l,a=n):240<=s.h&&s.h<300?(r=l,i=0,a=n):300<=s.h&&s.h<360&&(r=n,i=0,a=l),r=Math.round((r+o)*255),i=Math.round((i+o)*255),a=Math.round((a+o)*255);const c={r,g:i,b:a};return s.a!=null&&(c.a=s.a),c}function ug(s){const e=s.r/255,t=s.g/255,n=s.b/255,l=Math.max(e,t,n),o=Math.min(e,t,n),r=l-o;let i=0,a=0,c=0;r===0?i=0:l===e?i=(t-n)/r%6:l===t?i=(n-e)/r+2:i=(e-t)/r+4,i=Math.round(i*60),i<0&&(i+=360),a=(l+o)/2,c=r===0?0:r/(1-Math.abs(2*a-1));const u={h:i,s:Math.round(c*100),l:Math.round(a*100)};return s.a!=null&&(u.a=s.a),u}function fg(s){return Gl(cg(s))}function Gl(s){const e="#"+[s.r,s.g,s.b].map(n=>Nt(n,0,255).toString(16).padStart(2,"0")).join(""),t=s.a!=null?Math.round(s.a*255):255;return t<255?e+Math.max(t,0).toString(16).padStart(2,"0"):e}function dg(s){return pg(el(s))}function pg(s){const e=Nt(s.r,0,255)/255,t=Nt(s.g,0,255)/255,n=Nt(s.b,0,255)/255,l=Math.max(e,t,n),o=Math.min(e,t,n),r=l-o,i=l;let a=0,c=0;r&&(l===e&&(a=(t-n)/r),l===t&&(a=2+(n-e)/r),l===n&&(a=4+(e-t)/r),l&&(c=r/l)),a=a*60;const u=a<0?a+360:a,f=c*100,d=i*100;return s.a!=null&&s.a>=0?{h:u,s:f,v:d,a:Nt(s.a,0,1)}:{h:u,s:f,v:d}}function kl(s){return Gl(hg(s))}function hg(s){const e=s.s/100,t=s.v/100;let n=e*t;const l=s.h/60;let o=n*(1-Math.abs(l%2-1));const r=t-n;n=n+r,o=o+r;const i=Math.floor(l)%6,a=[n,o,r,r,o,n][i],c=[o,n,n,o,r,r][i],u=[r,r,o,n,n,o][i],f=Math.round(a*255),d=Math.round(c*255),p=Math.round(u*255);return s.a!=null?{r:f,g:d,b:p,a:s.a}:{r:f,g:d,b:p}}function Mr(s){var l;typeof s=="string"&&(s=el(s));const e=[.2126,.7152,.0722],t=[s.r,s.g,s.b].reduce((o,r,i)=>(r/=255,r<.03928?r/=12.92:(r=(r+.055)/1.055,r*=r),o+r*e[i]),0),n=1-((l=s.a)!=null?l:1);return t+(1-t)*n}function mg(s){let e,t,n,l;return{c(){e=_("div"),t=_("div"),h(t,"class","c-color-picker__tone--marker"),nt(t,"left",s[0]+"%"),nt(t,"top",100-s[1]+"%"),h(e,"class","c-color-picker__tone"),h(e,"tabindex","0")},m(o,r){x(o,e,r),m(e,t),n||(l=Ge(s[2].call(null,e)),n=!0)},p(o,[r]){r&1&&nt(t,"left",o[0]+"%"),r&2&&nt(t,"top",100-o[1]+"%")},i:K,o:K,d(o){o&&E(e),n=!1,l()}}}function gg(s,e,t){let{s:n=0}=e,{v:l=0}=e;function o(r){function i(p){const{pageX:g,pageY:$}=p instanceof MouseEvent?p:p.changedTouches[0],{left:C,top:k,width:v,height:S}=r.getBoundingClientRect();t(0,n=Nt((g-C-window.scrollX)/v,0,1)*100),t(1,l=100-Nt(($-k-window.scrollY)/S,0,1)*100)}function a(p){i(p)}function c(){document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",c),document.removeEventListener("touchend",c),setTimeout(()=>{document.removeEventListener("click",f,{capture:!0})},0)}function u(p){r.focus(),document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",c),document.addEventListener("touchend",c),document.addEventListener("click",f,{capture:!0}),i(p),p.preventDefault()}function f(p){p.preventDefault(),p.stopPropagation()}function d(p){let $=100-l,C=n;switch(p.code){case"ArrowUp":$=Nt($-1,0,100);break;case"ArrowDown":$=Nt($+1,0,100),p.preventDefault();break;case"ArrowLeft":C=Nt(C-1,0,100),p.preventDefault();break;case"ArrowRight":C=Nt(C+1,0,100),p.preventDefault();break}C!==n&&t(0,n=C),100-$!==l&&t(1,l=100-$)}return r.addEventListener("mousedown",u),r.addEventListener("touchstart",u),r.addEventListener("keydown",d),{destroy(){c(),r.removeEventListener("mousedown",u),r.removeEventListener("touchstart",u),r.removeEventListener("keydown",d)}}}return s.$$set=r=>{"s"in r&&t(0,n=r.s),"v"in r&&t(1,l=r.v)},[n,l,o]}class _g extends G{constructor(e){super(),W(this,e,gg,mg,q,{s:0,v:1})}}var bg="Expected a function",Rr=0/0,$g="[object Symbol]",vg=/^\s+|\s+$/g,wg=/^[-+]0x[0-9a-f]+$/i,kg=/^0b[01]+$/i,yg=/^0o[0-7]+$/i,Tg=parseInt,Eg=typeof nn=="object"&&nn&&nn.Object===Object&&nn,xg=typeof self=="object"&&self&&self.Object===Object&&self,Sg=Eg||xg||Function("return this")(),Ag=Object.prototype,Cg=Ag.toString,Ng=Math.max,Mg=Math.min,yl=function(){return Sg.Date.now()};function Rg(s,e,t){var n,l,o,r,i,a,c=0,u=!1,f=!1,d=!0;if(typeof s!="function")throw new TypeError(bg);e=Pr(e)||0,Al(t)&&(u=!!t.leading,f="maxWait"in t,o=f?Ng(Pr(t.maxWait)||0,e):o,d="trailing"in t?!!t.trailing:d);function p(y){var D=n,B=l;return n=l=void 0,c=y,r=s.apply(B,D),r}function g(y){return c=y,i=setTimeout(k,e),u?p(y):r}function $(y){var D=y-a,B=y-c,Z=e-D;return f?Mg(Z,o-B):Z}function C(y){var D=y-a,B=y-c;return a===void 0||D>=e||D<0||f&&B>=o}function k(){var y=yl();if(C(y))return v(y);i=setTimeout(k,$(y))}function v(y){return i=void 0,d&&n?p(y):(n=l=void 0,r)}function S(){i!==void 0&&clearTimeout(i),c=0,n=a=l=i=void 0}function R(){return i===void 0?r:v(yl())}function N(){var y=yl(),D=C(y);if(n=arguments,l=this,a=y,D){if(i===void 0)return g(a);if(f)return i=setTimeout(k,e),p(a)}return i===void 0&&(i=setTimeout(k,e)),r}return N.cancel=S,N.flush=R,N}function Al(s){var e=typeof s;return!!s&&(e=="object"||e=="function")}function Pg(s){return!!s&&typeof s=="object"}function Og(s){return typeof s=="symbol"||Pg(s)&&Cg.call(s)==$g}function Pr(s){if(typeof s=="number")return s;if(Og(s))return Rr;if(Al(s)){var e=typeof s.valueOf=="function"?s.valueOf():s;s=Al(e)?e+"":e}if(typeof s!="string")return s===0?s:+s;s=s.replace(vg,"");var t=kg.test(s);return t||yg.test(s)?Tg(s.slice(2),t?2:8):wg.test(s)?Rr:+s}var Lg=Rg;function Dg(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v;function S(y){s[9](y)}function R(y){s[10](y)}let N={};return s[2].s!==void 0&&(N.s=s[2].s),s[2].v!==void 0&&(N.v=s[2].v),n=new _g({props:N}),je.push(()=>At(n,"s",S)),je.push(()=>At(n,"v",R)),{c(){e=_("div"),t=_("div"),L(n.$$.fragment),r=A(),i=_("div"),a=A(),c=_("div"),u=_("input"),f=A(),d=_("div"),p=_("input"),h(i,"class","c-color-picker__sample"),h(u,"type","range"),h(u,"min","0"),h(u,"max","359"),h(u,"step","1"),h(c,"class","c-color-picker__hue"),h(p,"type","range"),h(p,"min","0"),h(p,"max","1"),h(p,"step",1/255),h(d,"class","c-color-picker__alpha"),h(t,"class","c-color-picker__body"),h(e,"class",g="c-color-picker"+(s[0]?" "+s[0]:"")),h(e,"style",$="--cp-tone: "+s[4]+"; --cp-color-opacity: "+s[5]+"; --cp-color: "+s[3]+"; "+s[1])},m(y,D){x(y,e,D),m(e,t),P(n,t,null),m(t,r),m(t,i),m(t,a),m(t,c),m(c,u),Ve(u,s[2].h),m(t,f),m(t,d),m(d,p),Ve(p,s[2].a),C=!0,k||(v=[J(u,"change",s[11]),J(u,"input",s[11]),J(p,"change",s[12]),J(p,"input",s[12])],k=!0)},p(y,[D]){const B={};!l&&D&4&&(l=!0,B.s=y[2].s,Rt(()=>l=!1)),!o&&D&4&&(o=!0,B.v=y[2].v,Rt(()=>o=!1)),n.$set(B),D&4&&Ve(u,y[2].h),D&4&&Ve(p,y[2].a),(!C||D&1&&g!==(g="c-color-picker"+(y[0]?" "+y[0]:"")))&&h(e,"class",g),(!C||D&58&&$!==($="--cp-tone: "+y[4]+"; --cp-color-opacity: "+y[5]+"; --cp-color: "+y[3]+"; "+y[1]))&&h(e,"style",$)},i(y){C||(w(n.$$.fragment,y),C=!0)},o(y){T(n.$$.fragment,y),C=!1},d(y){y&&E(e),O(n),k=!1,Te(v)}}}function Ig(s,e,t){let{class:n=""}=e,{style:l=""}=e,{color:o="#000"}=e,{debounce:r=0}=e,i;function a(k){let{h:v,s:S,v:R,a:N=1}=dg(k);i!=null&&v===0&&S===0&&(v=i.h),t(2,i={h:v,s:S,v:R,a:N})}let c,u,f,d;function p(k){s.$$.not_equal(i.s,k)&&(i.s=k,t(2,i))}function g(k){s.$$.not_equal(i.v,k)&&(i.v=k,t(2,i))}function $(){i.h=it(this.value),t(2,i)}function C(){i.a=it(this.value),t(2,i)}return s.$$set=k=>{"class"in k&&t(0,n=k.class),"style"in k&&t(1,l=k.style),"color"in k&&t(6,o=k.color),"debounce"in k&&t(7,r=k.debounce)},s.$$.update=()=>{s.$$.dirty&128&&t(8,c=Lg(k=>{t(6,o=k)},r)),s.$$.dirty&64&&a(o),s.$$.dirty&268&&(k=>{t(3,u=kl(k)),t(4,f=kl({h:k.h,s:100,v:100})),t(5,d=kl({h:k.h,s:k.s,v:k.v})),c(u)})(i)},[n,l,i,u,f,d,o,r,c,p,g,$,C]}class fa extends G{constructor(e){super(),W(this,e,Ig,Dg,q,{class:0,style:1,color:6,debounce:7})}}function Bg(s){let e,t,n,l;return{c(){e=_("input"),h(e,"class",t="c-coloredit__input--text"+(s[0]?" "+s[0]:"")),h(e,"type","text"),e.value=s[1]},m(o,r){x(o,e,r),s[6](e),n||(l=J(e,"input",s[7]),n=!0)},p(o,[r]){r&1&&t!==(t="c-coloredit__input--text"+(o[0]?" "+o[0]:""))&&h(e,"class",t),r&2&&e.value!==o[1]&&(e.value=o[1])},i:K,o:K,d(o){o&&E(e),s[6](null),n=!1,l()}}}function zg(s,e,t){let{class:n=""}=e,{color:l="#000"}=e,o;function r(f){Nr(f)&&t(4,l=f)}let i;function a(){i==null||i.focus()}function c(f){je[f?"unshift":"push"](()=>{i=f,t(2,i)})}const u=f=>r(f.currentTarget.value);return s.$$set=f=>{"class"in f&&t(0,n=f.class),"color"in f&&t(4,l=f.color)},s.$$.update=()=>{s.$$.dirty&16&&t(1,o=Nr(l)?l:"")},[n,o,i,r,l,a,c,u]}class Hg extends G{constructor(e){super(),W(this,e,zg,Bg,q,{class:0,color:4,focus:5})}get focus(){return this.$$.ctx[5]}}function Fg(s){let e,t,n,l,o,r,i,a,c,u,f,d,p;return{c(){e=_("input"),n=A(),l=_("input"),r=A(),i=_("input"),c=A(),u=_("input"),h(e,"class",t="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(e,"type","number"),h(e,"min","0"),h(e,"max","255"),h(e,"step","1"),e.value=s[1],h(l,"class",o="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(l,"type","number"),h(l,"min","0"),h(l,"max","255"),h(l,"step","1"),l.value=s[2],h(i,"class",a="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(i,"type","number"),h(i,"min","0"),h(i,"max","255"),h(i,"step","1"),i.value=s[3],h(u,"class",f="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(u,"type","number"),h(u,"min","0"),h(u,"max","1"),h(u,"step","0.01"),u.value=s[4]},m(g,$){x(g,e,$),s[8](e),x(g,n,$),x(g,l,$),x(g,r,$),x(g,i,$),x(g,c,$),x(g,u,$),d||(p=[J(e,"change",s[9]),J(l,"change",s[10]),J(i,"change",s[11]),J(u,"change",s[12])],d=!0)},p(g,[$]){$&1&&t!==(t="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(e,"class",t),$&2&&e.value!==g[1]&&(e.value=g[1]),$&1&&o!==(o="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(l,"class",o),$&4&&l.value!==g[2]&&(l.value=g[2]),$&1&&a!==(a="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(i,"class",a),$&8&&i.value!==g[3]&&(i.value=g[3]),$&1&&f!==(f="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(u,"class",f),$&16&&u.value!==g[4]&&(u.value=g[4])},i:K,o:K,d(g){g&&E(e),s[8](null),g&&E(n),g&&E(l),g&&E(r),g&&E(i),g&&E(c),g&&E(u),d=!1,Te(p)}}}function jg(s,e,t){let{class:n=""}=e,{color:l="#000"}=e,o,r,i,a;function c(v){var S;try{const R=el(v);t(1,o=R.r),t(2,r=R.g),t(3,i=R.b),t(4,a=(S=R.a)!=null?S:1)}catch(R){t(1,o=NaN),t(2,r=NaN),t(3,i=NaN),t(4,a=NaN)}}function u(v,S,R,N){[v,R,S,N!=null?N:1].every(y=>Number.isFinite(y))&&t(6,l=Gl({r:v,g:S,b:R,a:N}))}let f;function d(){f==null||f.focus()}function p(v){je[v?"unshift":"push"](()=>{f=v,t(5,f)})}const g=v=>t(1,o=+v.currentTarget.value),$=v=>t(2,r=+v.currentTarget.value),C=v=>t(3,i=+v.currentTarget.value),k=v=>t(4,a=+v.currentTarget.value);return s.$$set=v=>{"class"in v&&t(0,n=v.class),"color"in v&&t(6,l=v.color)},s.$$.update=()=>{s.$$.dirty&64&&c(l),s.$$.dirty&30&&u(o,r,i,a)},[n,o,r,i,a,f,l,d,p,g,$,C,k]}class Ug extends G{constructor(e){super(),W(this,e,jg,Fg,q,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function qg(s){let e,t,n,l,o,r,i,a,c,u,f,d,p;return{c(){e=_("input"),n=A(),l=_("input"),r=A(),i=_("input"),c=A(),u=_("input"),h(e,"class",t="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(e,"type","number"),h(e,"min","0"),h(e,"max","360"),h(e,"step","1"),e.value=s[1],h(l,"class",o="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(l,"type","number"),h(l,"min","0"),h(l,"max","100"),h(l,"step","1"),l.value=s[2],h(i,"class",a="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(i,"type","number"),h(i,"min","0"),h(i,"max","100"),h(i,"step","1"),i.value=s[3],h(u,"class",f="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(u,"type","number"),h(u,"min","0"),h(u,"max","1"),h(u,"step","0.01"),u.value=s[4]},m(g,$){x(g,e,$),s[8](e),x(g,n,$),x(g,l,$),x(g,r,$),x(g,i,$),x(g,c,$),x(g,u,$),d||(p=[J(e,"change",s[9]),J(l,"change",s[10]),J(i,"change",s[11]),J(u,"change",s[12])],d=!0)},p(g,[$]){$&1&&t!==(t="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(e,"class",t),$&2&&e.value!==g[1]&&(e.value=g[1]),$&1&&o!==(o="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(l,"class",o),$&4&&l.value!==g[2]&&(l.value=g[2]),$&1&&a!==(a="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(i,"class",a),$&8&&i.value!==g[3]&&(i.value=g[3]),$&1&&f!==(f="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(u,"class",f),$&16&&u.value!==g[4]&&(u.value=g[4])},i:K,o:K,d(g){g&&E(e),s[8](null),g&&E(n),g&&E(l),g&&E(r),g&&E(i),g&&E(c),g&&E(u),d=!1,Te(p)}}}function Kg(s,e,t){let{class:n=""}=e,{color:l="#000"}=e,o,r,i,a;function c(v){var S;try{const R=ag(v);t(1,o=R.h),t(2,r=R.s),t(3,i=R.l),t(4,a=(S=R.a)!=null?S:1)}catch(R){t(1,o=NaN),t(2,r=NaN),t(3,i=NaN),t(4,a=NaN)}}function u(v,S,R,N){[v,S,R,N!=null?N:1].every(y=>Number.isFinite(y))&&t(6,l=fg({h:v,s:S,l:R,a:N}))}let f;function d(){f==null||f.focus()}function p(v){je[v?"unshift":"push"](()=>{f=v,t(5,f)})}const g=v=>t(1,o=+v.currentTarget.value),$=v=>t(2,r=+v.currentTarget.value),C=v=>t(3,i=+v.currentTarget.value),k=v=>t(4,a=+v.currentTarget.value);return s.$$set=v=>{"class"in v&&t(0,n=v.class),"color"in v&&t(6,l=v.color)},s.$$.update=()=>{s.$$.dirty&64&&c(l),s.$$.dirty&30&&u(o,r,i,a)},[n,o,r,i,a,f,l,d,p,g,$,C,k]}class Wg extends G{constructor(e){super(),W(this,e,Kg,qg,q,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function Or(s,e,t){const n=s.slice();return n[11]=e[t],n}function Lr(s){let e,t=s[11]+"",n;return{c(){e=_("span"),n=H(t),h(e,"class","c-color-edit__label")},m(l,o){x(l,e,o),m(e,n)},p(l,o){o&8&&t!==(t=l[11]+"")&&et(n,t)},d(l){l&&E(e)}}}function Gg(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$;function C(N){s[6](N)}var k=s[3].component;function v(N){let y={};return N[0]!==void 0&&(y.color=N[0]),{props:y}}k&&(n=ze(k,v(s)),je.push(()=>At(n,"color",C)),s[7](n));let S=s[3].labels,R=[];for(let N=0;N<S.length;N+=1)R[N]=Lr(Or(s,S,N));return{c(){e=_("div"),t=_("div"),n&&L(n.$$.fragment),o=A();for(let N=0;N<R.length;N+=1)R[N].c();r=A(),i=_("div"),a=_("button"),c=A(),u=_("button"),h(t,"class","c-color-edit__values"),nt(t,"--ce-columns",s[3].labels.length),h(a,"class","c-color-edit__button--up"),h(u,"class","c-color-edit__button--down"),h(i,"class","c-color-edit__buttons"),h(e,"class",f="c-color-edit"+(s[1]?" "+s[1]:"")),h(e,"style",d=s[2]||void 0)},m(N,y){x(N,e,y),m(e,t),n&&P(n,t,null),m(t,o);for(let D=0;D<R.length;D+=1)R[D].m(t,null);m(e,r),m(e,i),m(i,a),m(i,c),m(i,u),p=!0,g||($=[J(a,"click",s[8]),J(u,"click",s[9])],g=!0)},p(N,[y]){const D={};if(!l&&y&1&&(l=!0,D.color=N[0],Rt(()=>l=!1)),k!==(k=N[3].component)){if(n){he();const B=n;T(B.$$.fragment,1,0,()=>{O(B,1)}),me()}k?(n=ze(k,v(N)),je.push(()=>At(n,"color",C)),N[7](n),L(n.$$.fragment),w(n.$$.fragment,1),P(n,t,o)):n=null}else k&&n.$set(D);if(y&8){S=N[3].labels;let B;for(B=0;B<S.length;B+=1){const Z=Or(N,S,B);R[B]?R[B].p(Z,y):(R[B]=Lr(Z),R[B].c(),R[B].m(t,null))}for(;B<R.length;B+=1)R[B].d(1);R.length=S.length}(!p||y&8)&&nt(t,"--ce-columns",N[3].labels.length),(!p||y&2&&f!==(f="c-color-edit"+(N[1]?" "+N[1]:"")))&&h(e,"class",f),(!p||y&4&&d!==(d=N[2]||void 0))&&h(e,"style",d)},i(N){p||(n&&w(n.$$.fragment,N),p=!0)},o(N){n&&T(n.$$.fragment,N),p=!1},d(N){N&&E(e),s[7](null),n&&O(n),He(R,N),g=!1,Te($)}}}function Zg(s,e,t){let{class:n=""}=e,{style:l=""}=e,{color:o="#000"}=e;const r=[{component:Hg,labels:["Hex"]},{component:Ug,labels:["R","G","B","A"]},{component:Wg,labels:["H","S","L","A"]}];let i=r[0],a;function c(g){return mt(this,null,function*(){let $=r.indexOf(i)+g;$<0?$=r.length-1:$>=r.length&&($=0),t(3,i=r[$]),yield Rl(),a==null||a.focus()})}function u(g){o=g,t(0,o)}function f(g){je[g?"unshift":"push"](()=>{a=g,t(4,a)})}const d=()=>c(-1),p=()=>c(1);return s.$$set=g=>{"class"in g&&t(1,n=g.class),"style"in g&&t(2,l=g.style),"color"in g&&t(0,o=g.color)},[o,n,l,i,a,c,u,f,d,p]}class da extends G{constructor(e){super(),W(this,e,Zg,Gg,q,{class:1,style:2,color:0})}}function Dr(s,e,t){const n=s.slice();return n[6]=e[t],n}function Ir(s){let e,t=s[6]+"",n,l,o;function r(){return s[5](s[6])}return{c(){e=_("button"),n=H(t),h(e,"class","input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"),nt(e,"background-color",s[6]),nt(e,"color",Mr(s[6])>.55?"inherit":"white")},m(i,a){x(i,e,a),m(e,n),l||(o=J(e,"click",r),l=!0)},p(i,a){s=i,a&2&&t!==(t=s[6]+"")&&et(n,t),a&2&&nt(e,"background-color",s[6]),a&2&&nt(e,"color",Mr(s[6])>.55?"inherit":"white")},d(i){i&&E(e),l=!1,o()}}}function Qg(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g=s[1],$=[];for(let C=0;C<g.length;C+=1)$[C]=Ir(Dr(s,g,C));return{c(){e=_("div"),t=_("span"),t.textContent="Set color",n=A(),l=_("a"),l.textContent="randomize alpha",o=A(),r=_("span"),r.textContent="•",i=A(),a=_("a"),a.textContent="reset alpha",u=A(),f=_("div");for(let C=0;C<$.length;C+=1)$[C].c();h(l,"class","text-sm"),h(l,"href","javascript:void(0)"),h(r,"class","text-blue-500"),h(a,"class","text-sm"),h(a,"href","javascript:void(0)"),h(e,"class",c=s[0]||void 0)},m(C,k){x(C,e,k),m(e,t),m(e,n),m(e,l),m(e,o),m(e,r),m(e,i),m(e,a),x(C,u,k),x(C,f,k);for(let v=0;v<$.length;v+=1)$[v].m(f,null);d||(p=[J(l,"click",s[3]),J(a,"click",s[4])],d=!0)},p(C,[k]){if(k&1&&c!==(c=C[0]||void 0)&&h(e,"class",c),k&6){g=C[1];let v;for(v=0;v<g.length;v+=1){const S=Dr(C,g,v);$[v]?$[v].p(S,k):($[v]=Ir(S),$[v].c(),$[v].m(f,null))}for(;v<$.length;v+=1)$[v].d(1);$.length=g.length}},i:K,o:K,d(C){C&&E(e),C&&E(u),C&&E(f),He($,C),d=!1,Te(p)}}}function Xg(s){return pa(s).map(e=>e+Math.floor(Math.random()*255).toString(16).padStart(2,"0"))}function pa(s){return s.map(e=>e.slice(0,7))}function Jg(s,e,t){const n=Ml();let{class:l=""}=e,o=["#001219","#005F73","#0A9396","#94D2BD","#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226","#F72585","#B5179E","#7209B7","#560BAD","#480CA8","#3A0CA3","#3F37C9","#4361EE","#4895EF","#4CC9F0"];const r=()=>t(1,o=Xg(o)),i=()=>t(1,o=pa(o)),a=c=>n("color",c);return s.$$set=c=>{"class"in c&&t(0,l=c.class)},[l,o,n,r,i,a]}class Zl extends G{constructor(e){super(),W(this,e,Jg,Qg,q,{class:0})}}function Yg(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v;function S(N){s[1](N)}let R={class:"basis-1/2 h-[256px] pt-2"};return s[0]!==void 0&&(R.color=s[0]),t=new fa({props:R}),je.push(()=>At(t,"color",S)),k=new Zl({props:{class:"mt-4"}}),k.$on("color",s[2]),{c(){e=_("div"),L(t.$$.fragment),l=A(),o=_("div"),r=_("div"),i=H("Current color: "),a=_("code"),c=H(s[0]),u=A(),f=_("div"),d=_("div"),p=_("div"),g=A(),$=_("div"),C=A(),L(k.$$.fragment),h(a,"class","uppercase"),h(p,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),h($,"class","absolute left-0 top-0 right-0 bottom-0"),nt($,"background-color",s[0]),h(d,"class","relative h-[1.5em]"),h(f,"class","p-2 border rounded-md"),h(o,"class","basis-1/2"),h(e,"class","flex gap-8")},m(N,y){x(N,e,y),P(t,e,null),m(e,l),m(e,o),m(o,r),m(r,i),m(r,a),m(a,c),m(o,u),m(o,f),m(f,d),m(d,p),m(d,g),m(d,$),m(o,C),P(k,o,null),v=!0},p(N,[y]){const D={};!n&&y&1&&(n=!0,D.color=N[0],Rt(()=>n=!1)),t.$set(D),(!v||y&1)&&et(c,N[0]),(!v||y&1)&&nt($,"background-color",N[0])},i(N){v||(w(t.$$.fragment,N),w(k.$$.fragment,N),v=!0)},o(N){T(t.$$.fragment,N),T(k.$$.fragment,N),v=!1},d(N){N&&E(e),O(t),O(k)}}}function Vg(s,e,t){let n="#f70";function l(r){n=r,t(0,n)}return[n,l,({detail:r})=>t(0,n=r)]}let e_=class extends G{constructor(e){super(),W(this,e,Vg,Yg,q,{})}};function t_(s){let e,t,n,l,o;return t=new e_({}),l=new dt({props:{code:`<script lang="ts">
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
</div>`}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),L(l.$$.fragment),h(e,"class","prose max-w-none my-4")},m(r,i){x(r,e,i),P(t,e,null),m(e,n),P(l,e,null),o=!0},p:K,i(r){o||(w(t.$$.fragment,r),w(l.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),T(l.$$.fragment,r),o=!1},d(r){r&&E(e),O(t),O(l)}}}let n_=class extends G{constructor(e){super(),W(this,e,null,t_,q,{})}};function s_(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S;function R(y){s[1](y)}let N={class:"w-full border shadow-md rounded-lg p-2"};return s[0]!==void 0&&(N.color=s[0]),n=new da({props:N}),je.push(()=>At(n,"color",R)),v=new Zl({props:{class:"mt-4"}}),v.$on("color",s[2]),{c(){e=_("div"),t=_("div"),L(n.$$.fragment),o=A(),r=_("div"),i=_("div"),a=H("Current color: "),c=_("code"),u=H(s[0]),f=A(),d=_("div"),p=_("div"),g=_("div"),$=A(),C=_("div"),k=A(),L(v.$$.fragment),h(t,"class","basis-1/2 inline-flex items-center"),h(c,"class","uppercase"),h(g,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),h(C,"class","absolute left-0 top-0 right-0 bottom-0"),nt(C,"background-color",s[0]),h(p,"class","relative h-[1.5em]"),h(d,"class","p-2 border rounded-md"),h(r,"class","basis-1/2"),h(e,"class","flex gap-8")},m(y,D){x(y,e,D),m(e,t),P(n,t,null),m(e,o),m(e,r),m(r,i),m(i,a),m(i,c),m(c,u),m(r,f),m(r,d),m(d,p),m(p,g),m(p,$),m(p,C),m(r,k),P(v,r,null),S=!0},p(y,[D]){const B={};!l&&D&1&&(l=!0,B.color=y[0],Rt(()=>l=!1)),n.$set(B),(!S||D&1)&&et(u,y[0]),(!S||D&1)&&nt(C,"background-color",y[0])},i(y){S||(w(n.$$.fragment,y),w(v.$$.fragment,y),S=!0)},o(y){T(n.$$.fragment,y),T(v.$$.fragment,y),S=!1},d(y){y&&E(e),O(n),O(v)}}}function l_(s,e,t){let n="#f70";function l(r){n=r,t(0,n)}return[n,l,({detail:r})=>t(0,n=r)]}let o_=class extends G{constructor(e){super(),W(this,e,l_,s_,q,{})}};function r_(s){let e,t,n,l,o;return t=new o_({}),l=new dt({props:{code:`<script lang="ts">
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
`}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),L(l.$$.fragment),h(e,"class","prose max-w-none my-4")},m(r,i){x(r,e,i),P(t,e,null),m(e,n),P(l,e,null),o=!0},p:K,i(r){o||(w(t.$$.fragment,r),w(l.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),T(l.$$.fragment,r),o=!1},d(r){r&&E(e),O(t),O(l)}}}let i_=class extends G{constructor(e){super(),W(this,e,null,r_,q,{})}};function Gn(s){return s.split("-")[1]}function Ql(s){return s==="y"?"height":"width"}function mn(s){return s.split("-")[0]}function tl(s){return["top","bottom"].includes(mn(s))?"x":"y"}function Br(s,e,t){let{reference:n,floating:l}=s;const o=n.x+n.width/2-l.width/2,r=n.y+n.height/2-l.height/2,i=tl(e),a=Ql(i),c=n[a]/2-l[a]/2,u=i==="x";let f;switch(mn(e)){case"top":f={x:o,y:n.y-l.height};break;case"bottom":f={x:o,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:r};break;case"left":f={x:n.x-l.width,y:r};break;default:f={x:n.x,y:n.y}}switch(Gn(e)){case"start":f[i]-=c*(t&&u?-1:1);break;case"end":f[i]+=c*(t&&u?-1:1)}return f}const a_=(s,e,t)=>mt(void 0,null,function*(){const{placement:n="bottom",strategy:l="absolute",middleware:o=[],platform:r}=t,i=o.filter(Boolean),a=yield r.isRTL==null?void 0:r.isRTL(e);let c=yield r.getElementRects({reference:s,floating:e,strategy:l}),{x:u,y:f}=Br(c,n,a),d=n,p={},g=0;for(let $=0;$<i.length;$++){const{name:C,fn:k}=i[$],{x:v,y:S,data:R,reset:N}=yield k({x:u,y:f,initialPlacement:n,placement:d,strategy:l,middlewareData:p,rects:c,platform:r,elements:{reference:s,floating:e}});u=v!=null?v:u,f=S!=null?S:f,p=Pn(tt({},p),{[C]:tt(tt({},p[C]),R)}),N&&g<=50&&(g++,typeof N=="object"&&(N.placement&&(d=N.placement),N.rects&&(c=N.rects===!0?yield r.getElementRects({reference:s,floating:e,strategy:l}):N.rects),{x:u,y:f}=Br(c,d,a)),$=-1)}return{x:u,y:f,placement:d,strategy:l,middlewareData:p}});function ha(s){return typeof s!="number"?function(e){return tt({top:0,right:0,bottom:0,left:0},e)}(s):{top:s,right:s,bottom:s,left:s}}function Vn(s){return Pn(tt({},s),{top:s.y,left:s.x,right:s.x+s.width,bottom:s.y+s.height})}function ma(s,e){return mt(this,null,function*(){var t;e===void 0&&(e={});const{x:n,y:l,platform:o,rects:r,elements:i,strategy:a}=s,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:p=0}=e,g=ha(p),$=i[d?f==="floating"?"reference":"floating":f],C=Vn(yield o.getClippingRect({element:(t=yield o.isElement==null?void 0:o.isElement($))==null||t?$:$.contextElement||(yield o.getDocumentElement==null?void 0:o.getDocumentElement(i.floating)),boundary:c,rootBoundary:u,strategy:a})),k=f==="floating"?Pn(tt({},r.floating),{x:n,y:l}):r.reference,v=yield o.getOffsetParent==null?void 0:o.getOffsetParent(i.floating),S=(yield o.isElement==null?void 0:o.isElement(v))&&(yield o.getScale==null?void 0:o.getScale(v))||{x:1,y:1},R=Vn(o.convertOffsetParentRelativeRectToViewportRelativeRect?yield o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:k,offsetParent:v,strategy:a}):k);return{top:(C.top-R.top+g.top)/S.y,bottom:(R.bottom-C.bottom+g.bottom)/S.y,left:(C.left-R.left+g.left)/S.x,right:(R.right-C.right+g.right)/S.x}})}const c_=Math.min,pn=Math.max;function u_(s,e,t){return pn(s,c_(e,t))}const ga=s=>({name:"arrow",options:s,fn(t){return mt(this,null,function*(){const{element:n,padding:l=0}=s||{},{x:o,y:r,placement:i,rects:a,platform:c}=t;if(n==null)return{};const u=ha(l),f={x:o,y:r},d=tl(i),p=Ql(d),g=yield c.getDimensions(n),$=d==="y"?"top":"left",C=d==="y"?"bottom":"right",k=a.reference[p]+a.reference[d]-f[d]-a.floating[p],v=f[d]-a.reference[d],S=yield c.getOffsetParent==null?void 0:c.getOffsetParent(n);let R=S?d==="y"?S.clientHeight||0:S.clientWidth||0:0;R===0&&(R=a.floating[p]);const N=k/2-v/2,y=u[$],D=R-g[p]-u[C],B=R/2-g[p]/2+N,Z=u_(y,B,D),ee=Gn(i)!=null&&B!=Z&&a.reference[p]/2-(B<y?u[$]:u[C])-g[p]/2<0;return{[d]:f[d]-(ee?B<y?y-B:D-B:0),data:{[d]:Z,centerOffset:B-Z}}})}}),f_=["top","right","bottom","left"];f_.reduce((s,e)=>s.concat(e,e+"-start",e+"-end"),[]);const d_={left:"right",right:"left",bottom:"top",top:"bottom"};function Gs(s){return s.replace(/left|right|bottom|top/g,e=>d_[e])}function p_(s,e,t){t===void 0&&(t=!1);const n=Gn(s),l=tl(s),o=Ql(l);let r=l==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(r=Gs(r)),{main:r,cross:Gs(r)}}const h_={start:"end",end:"start"};function Tl(s){return s.replace(/start|end/g,e=>h_[e])}const nl=function(s){return s===void 0&&(s={}),{name:"flip",options:s,fn(t){return mt(this,null,function*(){var n;const{placement:l,middlewareData:o,rects:r,initialPlacement:i,platform:a,elements:c}=t,ce=s,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:$=!0}=ce,C=gl(ce,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),k=mn(l),v=mn(i)===i,S=yield a.isRTL==null?void 0:a.isRTL(c.floating),R=d||(v||!$?[Gs(i)]:function(ve){const be=Gs(ve);return[Tl(ve),be,Tl(be)]}(i));d||g==="none"||R.push(...function(ve,be,Le,z){const U=Gn(ve);let Y=function(te,F,pe){const ie=["left","right"],we=["right","left"],V=["top","bottom"],xe=["bottom","top"];switch(te){case"top":case"bottom":return pe?F?we:ie:F?ie:we;case"left":case"right":return F?V:xe;default:return[]}}(mn(ve),Le==="start",z);return U&&(Y=Y.map(te=>te+"-"+U),be&&(Y=Y.concat(Y.map(Tl)))),Y}(i,$,g,S));const N=[i,...R],y=yield ma(t,C),D=[];let B=((n=o.flip)==null?void 0:n.overflows)||[];if(u&&D.push(y[k]),f){const{main:ve,cross:be}=p_(l,r,S);D.push(y[ve],y[be])}if(B=[...B,{placement:l,overflows:D}],!D.every(ve=>ve<=0)){var Z,ee;const ve=(((Z=o.flip)==null?void 0:Z.index)||0)+1,be=N[ve];if(be)return{data:{index:ve,overflows:B},reset:{placement:be}};let Le=(ee=B.find(z=>z.overflows[0]<=0))==null?void 0:ee.placement;if(!Le)switch(p){case"bestFit":{var oe;const z=(oe=B.map(U=>[U.placement,U.overflows.filter(Y=>Y>0).reduce((Y,te)=>Y+te,0)]).sort((U,Y)=>U[1]-Y[1])[0])==null?void 0:oe[0];z&&(Le=z);break}case"initialPlacement":Le=i}if(l!==Le)return{reset:{placement:Le}}}return{}})}}},sl=function(s){return s===void 0&&(s=0),{name:"offset",options:s,fn(t){return mt(this,null,function*(){const{x:n,y:l}=t,o=yield function(r,i){return mt(this,null,function*(){const{placement:a,platform:c,elements:u}=r,f=yield c.isRTL==null?void 0:c.isRTL(u.floating),d=mn(a),p=Gn(a),g=tl(a)==="x",$=["left","top"].includes(d)?-1:1,C=f&&g?-1:1,k=typeof i=="function"?i(r):i;let{mainAxis:v,crossAxis:S,alignmentAxis:R}=typeof k=="number"?{mainAxis:k,crossAxis:0,alignmentAxis:null}:tt({mainAxis:0,crossAxis:0,alignmentAxis:null},k);return p&&typeof R=="number"&&(S=p==="end"?-1*R:R),g?{x:S*C,y:v*$}:{x:v*$,y:S*C}})}(t,s);return{x:n+o.x,y:l+o.y,data:o}})}}},_a=function(s){return s===void 0&&(s={}),{name:"size",options:s,fn(t){return mt(this,null,function*(){const{placement:n,rects:l,platform:o,elements:r}=t,R=s,{apply:i=()=>{}}=R,a=gl(R,["apply"]),c=yield ma(t,a),u=mn(n),f=Gn(n);let d,p;u==="top"||u==="bottom"?(d=u,p=f===((yield o.isRTL==null?void 0:o.isRTL(r.floating))?"start":"end")?"left":"right"):(p=u,d=f==="end"?"top":"bottom");const g=pn(c.left,0),$=pn(c.right,0),C=pn(c.top,0),k=pn(c.bottom,0),v={availableHeight:l.floating.height-(["left","right"].includes(n)?2*(C!==0||k!==0?C+k:pn(c.top,c.bottom)):c[d]),availableWidth:l.floating.width-(["top","bottom"].includes(n)?2*(g!==0||$!==0?g+$:pn(c.left,c.right)):c[p])};yield i(tt(tt({},t),v));const S=yield o.getDimensions(r.floating);return l.floating.width!==S.width||l.floating.height!==S.height?{reset:{rects:!0}}:{}})}}};function xt(s){var e;return((e=s.ownerDocument)==null?void 0:e.defaultView)||window}function zt(s){return xt(s).getComputedStyle(s)}const zr=Math.min,es=Math.max,Zs=Math.round;function ba(s){const e=zt(s);let t=parseFloat(e.width),n=parseFloat(e.height);const l=s.offsetWidth,o=s.offsetHeight,r=Zs(t)!==l||Zs(n)!==o;return r&&(t=l,n=o),{width:t,height:n,fallback:r}}function an(s){return va(s)?(s.nodeName||"").toLowerCase():""}let Rs;function $a(){if(Rs)return Rs;const s=navigator.userAgentData;return s&&Array.isArray(s.brands)?(Rs=s.brands.map(e=>e.brand+"/"+e.version).join(" "),Rs):navigator.userAgent}function Ht(s){return s instanceof xt(s).HTMLElement}function Mt(s){return s instanceof xt(s).Element}function va(s){return s instanceof xt(s).Node}function Hr(s){return typeof ShadowRoot=="undefined"?!1:s instanceof xt(s).ShadowRoot||s instanceof ShadowRoot}function ll(s){const{overflow:e,overflowX:t,overflowY:n,display:l}=zt(s);return/auto|scroll|overlay|hidden|clip/.test(e+n+t)&&!["inline","contents"].includes(l)}function m_(s){return["table","td","th"].includes(an(s))}function Cl(s){const e=/firefox/i.test($a()),t=zt(s),n=t.backdropFilter||t.WebkitBackdropFilter;return t.transform!=="none"||t.perspective!=="none"||!!n&&n!=="none"||e&&t.willChange==="filter"||e&&!!t.filter&&t.filter!=="none"||["transform","perspective"].some(l=>t.willChange.includes(l))||["paint","layout","strict","content"].some(l=>{const o=t.contain;return o!=null&&o.includes(l)})}function wa(){return!/^((?!chrome|android).)*safari/i.test($a())}function Xl(s){return["html","body","#document"].includes(an(s))}function ka(s){return Mt(s)?s:s.contextElement}const ya={x:1,y:1};function Fn(s){const e=ka(s);if(!Ht(e))return ya;const t=e.getBoundingClientRect(),{width:n,height:l,fallback:o}=ba(e);let r=(o?Zs(t.width):t.width)/n,i=(o?Zs(t.height):t.height)/l;return r&&Number.isFinite(r)||(r=1),i&&Number.isFinite(i)||(i=1),{x:r,y:i}}function gn(s,e,t,n){var l,o;e===void 0&&(e=!1),t===void 0&&(t=!1);const r=s.getBoundingClientRect(),i=ka(s);let a=ya;e&&(n?Mt(n)&&(a=Fn(n)):a=Fn(s));const c=i?xt(i):window,u=!wa()&&t;let f=(r.left+(u&&((l=c.visualViewport)==null?void 0:l.offsetLeft)||0))/a.x,d=(r.top+(u&&((o=c.visualViewport)==null?void 0:o.offsetTop)||0))/a.y,p=r.width/a.x,g=r.height/a.y;if(i){const $=xt(i),C=n&&Mt(n)?xt(n):n;let k=$.frameElement;for(;k&&n&&C!==$;){const v=Fn(k),S=k.getBoundingClientRect(),R=getComputedStyle(k);S.x+=(k.clientLeft+parseFloat(R.paddingLeft))*v.x,S.y+=(k.clientTop+parseFloat(R.paddingTop))*v.y,f*=v.x,d*=v.y,p*=v.x,g*=v.y,f+=S.x,d+=S.y,k=xt(k).frameElement}}return{width:p,height:g,top:d,right:f+p,bottom:d+g,left:f,x:f,y:d}}function on(s){return((va(s)?s.ownerDocument:s.document)||window.document).documentElement}function ol(s){return Mt(s)?{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}:{scrollLeft:s.pageXOffset,scrollTop:s.pageYOffset}}function Ta(s){return gn(on(s)).left+ol(s).scrollLeft}function us(s){if(an(s)==="html")return s;const e=s.assignedSlot||s.parentNode||Hr(s)&&s.host||on(s);return Hr(e)?e.host:e}function Ea(s){const e=us(s);return Xl(e)?e.ownerDocument.body:Ht(e)&&ll(e)?e:Ea(e)}function ts(s,e){var t;e===void 0&&(e=[]);const n=Ea(s),l=n===((t=s.ownerDocument)==null?void 0:t.body),o=xt(n);return l?e.concat(o,o.visualViewport||[],ll(n)?n:[]):e.concat(n,ts(n))}function Fr(s,e,t){return e==="viewport"?Vn(function(n,l){const o=xt(n),r=on(n),i=o.visualViewport;let a=r.clientWidth,c=r.clientHeight,u=0,f=0;if(i){a=i.width,c=i.height;const d=wa();(d||!d&&l==="fixed")&&(u=i.offsetLeft,f=i.offsetTop)}return{width:a,height:c,x:u,y:f}}(s,t)):Mt(e)?Vn(function(n,l){const o=gn(n,!0,l==="fixed"),r=o.top+n.clientTop,i=o.left+n.clientLeft,a=Ht(n)?Fn(n):{x:1,y:1};return{width:n.clientWidth*a.x,height:n.clientHeight*a.y,x:i*a.x,y:r*a.y}}(e,t)):Vn(function(n){const l=on(n),o=ol(n),r=n.ownerDocument.body,i=es(l.scrollWidth,l.clientWidth,r.scrollWidth,r.clientWidth),a=es(l.scrollHeight,l.clientHeight,r.scrollHeight,r.clientHeight);let c=-o.scrollLeft+Ta(n);const u=-o.scrollTop;return zt(r).direction==="rtl"&&(c+=es(l.clientWidth,r.clientWidth)-i),{width:i,height:a,x:c,y:u}}(on(s)))}function jr(s){return Ht(s)&&zt(s).position!=="fixed"?s.offsetParent:null}function Ur(s){const e=xt(s);let t=jr(s);for(;t&&m_(t)&&zt(t).position==="static";)t=jr(t);return t&&(an(t)==="html"||an(t)==="body"&&zt(t).position==="static"&&!Cl(t))?e:t||function(n){let l=us(n);for(;Ht(l)&&!Xl(l);){if(Cl(l))return l;l=us(l)}return null}(s)||e}function g_(s,e,t){const n=Ht(e),l=on(e),o=gn(s,!0,t==="fixed",e);let r={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(n||!n&&t!=="fixed")if((an(e)!=="body"||ll(l))&&(r=ol(e)),Ht(e)){const a=gn(e,!0);i.x=a.x+e.clientLeft,i.y=a.y+e.clientTop}else l&&(i.x=Ta(l));return{x:o.left+r.scrollLeft-i.x,y:o.top+r.scrollTop-i.y,width:o.width,height:o.height}}const __={getClippingRect:function(s){let{element:e,boundary:t,rootBoundary:n,strategy:l}=s;const o=t==="clippingAncestors"?function(c,u){const f=u.get(c);if(f)return f;let d=ts(c).filter(C=>Mt(C)&&an(C)!=="body"),p=null;const g=zt(c).position==="fixed";let $=g?us(c):c;for(;Mt($)&&!Xl($);){const C=zt($),k=Cl($);(g?k||p:k||C.position!=="static"||!p||!["absolute","fixed"].includes(p.position))?p=C:d=d.filter(v=>v!==$),$=us($)}return u.set(c,d),d}(e,this._c):[].concat(t),r=[...o,n],i=r[0],a=r.reduce((c,u)=>{const f=Fr(e,u,l);return c.top=es(f.top,c.top),c.right=zr(f.right,c.right),c.bottom=zr(f.bottom,c.bottom),c.left=es(f.left,c.left),c},Fr(e,i,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(s){let{rect:e,offsetParent:t,strategy:n}=s;const l=Ht(t),o=on(t);if(t===o)return e;let r={scrollLeft:0,scrollTop:0},i={x:1,y:1};const a={x:0,y:0};if((l||!l&&n!=="fixed")&&((an(t)!=="body"||ll(o))&&(r=ol(t)),Ht(t))){const c=gn(t);i=Fn(t),a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}return{width:e.width*i.x,height:e.height*i.y,x:e.x*i.x-r.scrollLeft*i.x+a.x,y:e.y*i.y-r.scrollTop*i.y+a.y}},isElement:Mt,getDimensions:function(s){return Ht(s)?ba(s):s.getBoundingClientRect()},getOffsetParent:Ur,getDocumentElement:on,getScale:Fn,getElementRects(s){return mt(this,null,function*(){let{reference:e,floating:t,strategy:n}=s;const l=this.getOffsetParent||Ur,o=this.getDimensions;return{reference:g_(e,yield l(t),n),floating:tt({x:0,y:0},yield o(t))}})},getClientRects:s=>Array.from(s.getClientRects()),isRTL:s=>zt(s).direction==="rtl"};function b_(s,e,t,n){n===void 0&&(n={});const{ancestorScroll:l=!0,ancestorResize:o=!0,elementResize:r=!0,animationFrame:i=!1}=n,a=l&&!i,c=a||o?[...Mt(s)?ts(s):s.contextElement?ts(s.contextElement):[],...ts(e)]:[];c.forEach(p=>{a&&p.addEventListener("scroll",t,{passive:!0}),o&&p.addEventListener("resize",t)});let u,f=null;if(r){let p=!0;f=new ResizeObserver(()=>{p||t(),p=!1}),Mt(s)&&!i&&f.observe(s),Mt(s)||!s.contextElement||i||f.observe(s.contextElement),f.observe(e)}let d=i?gn(s):null;return i&&function p(){const g=gn(s);!d||g.x===d.x&&g.y===d.y&&g.width===d.width&&g.height===d.height||t(),d=g,u=requestAnimationFrame(p)}(),t(),()=>{var p;c.forEach(g=>{a&&g.removeEventListener("scroll",t),o&&g.removeEventListener("resize",t)}),(p=f)==null||p.disconnect(),f=null,i&&cancelAnimationFrame(u)}}const $_=(s,e,t)=>{const n=new Map,l=tt({platform:__},t),o=Pn(tt({},l.platform),{_c:n});return a_(s,e,Pn(tt({},l),{platform:o}))};function rl(s){const e={enable:!1,options:void 0,cleanup:null},t={reference:null,floating:null,options:void 0};n(s);function n(c){c===!0?(e.enable=!0,l()):c===!1?(o(),e.enable=!1):(l(),e.enable=!0,e.options=c)}function l(){o(),t.reference&&t.floating&&e.enable&&(e.cleanup=b_(t.reference,t.floating,r,e.options))}function o(){e.cleanup!=null&&(e.cleanup(),e.cleanup=null)}function r(){return mt(this,null,function*(){if(t.reference&&t.floating){const{reference:c,floating:u,options:f}=t,d=yield $_(c,u,f);Object.assign(u.style,{position:d.strategy,left:`${d.x}px`,top:`${d.y}px`}),f!=null&&f.callback&&f.callback(d,{reference:c,floating:u})}})}function i(c){return t.reference=c,e.enable?l():r(),{destroy(){o(),t.reference=null}}}function a(c,u){return t.floating=c,t.options=u,e.enable?l():r(),{update(f){o(),t.options=f,e.enable?l():r()},destroy(){o(),t.floating=null,t.options=void 0}}}return[i,a,n]}function fs(s,e){let t,n;[t,n]=e!=null?e:[];function l(r){t&&s.contains(r.target)&&t(r)}function o(r){n&&!s.contains(r.relatedTarget)&&n(r)}return s.addEventListener("focusin",l),s.addEventListener("focusout",o),{update(r){[t,n]=r!=null?r:[]},destroy(){s.removeEventListener("focusout",o),s.removeEventListener("focusin",l)}}}function qr(s){let e,t,n,l,o,r,i,a,c,u,f,d;function p(k){s[5](k)}let g={class:"h-48 p-3",style:"--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"};s[0]!==void 0&&(g.color=s[0]),t=new fa({props:g}),je.push(()=>At(t,"color",p));function $(k){s[6](k)}let C={class:"p-3 text-sm"};return s[0]!==void 0&&(C.color=s[0]),i=new da({props:C}),je.push(()=>At(i,"color",$)),{c(){e=_("div"),L(t.$$.fragment),l=A(),o=_("div"),r=A(),L(i.$$.fragment),h(o,"class","border-t"),h(e,"class","absolute w-[240px] border rounded-lg bg-white shadow-lg")},m(k,v){x(k,e,v),P(t,e,null),m(e,l),m(e,o),m(e,r),P(i,e,null),u=!0,f||(d=Ge(s[3].call(null,e,{placement:"bottom-start",middleware:[nl(),sl(8)]})),f=!0)},p(k,v){const S={};!n&&v&1&&(n=!0,S.color=k[0],Rt(()=>n=!1)),t.$set(S);const R={};!a&&v&1&&(a=!0,R.color=k[0],Rt(()=>a=!1)),i.$set(R)},i(k){u||(w(t.$$.fragment,k),w(i.$$.fragment,k),k&&$t(()=>{c||(c=rn(e,Un,{},!0)),c.run(1)}),u=!0)},o(k){T(t.$$.fragment,k),T(i.$$.fragment,k),k&&(c||(c=rn(e,Un,{},!1)),c.run(0)),u=!1},d(k){k&&E(e),O(t),O(i),k&&c&&c.end(),f=!1,d()}}}function v_(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S,R,N,y,D,B=s[1]&&qr(s);return R=new Zl({props:{class:"mt-4"}}),R.$on("color",s[8]),{c(){e=_("div"),t=_("div"),n=_("div"),n.textContent="Click this button to pick a color",l=A(),o=_("div"),r=_("button"),i=_("span"),a=A(),B&&B.c(),u=A(),f=_("div"),d=_("div"),p=H("Current color: "),g=_("code"),$=H(s[0]),C=A(),k=_("div"),v=_("div"),S=A(),L(R.$$.fragment),h(i,"class","block border h-[22px] w-[10ch] bg-chess"),nt(i,"background","linear-gradient(to right, "+s[0]+" 0, "+s[0]+" 100%), var(--bg-chess-background)"),h(r,"class","input py-1"),h(t,"class","basis-1/2"),h(g,"class","uppercase"),h(v,"class","h-[1.5em] bg-chess"),nt(v,"background","linear-gradient(to right, "+s[0]+" 0, "+s[0]+" 100%), var(--bg-chess-background)"),h(k,"class","p-2 border rounded-md"),h(f,"class","basis-1/2"),h(e,"class","flex gap-8")},m(Z,ee){x(Z,e,ee),m(e,t),m(t,n),m(t,l),m(t,o),m(o,r),m(r,i),m(o,a),B&&B.m(o,null),m(e,u),m(e,f),m(f,d),m(d,p),m(d,g),m(g,$),m(f,C),m(f,k),m(k,v),m(f,S),P(R,f,null),N=!0,y||(D=[Ge(s[2].call(null,r)),J(r,"click",s[4]),Ge(c=fs.call(null,o,[void 0,s[7]]))],y=!0)},p(Z,[ee]){(!N||ee&1)&&nt(i,"background","linear-gradient(to right, "+Z[0]+" 0, "+Z[0]+" 100%), var(--bg-chess-background)"),Z[1]?B?(B.p(Z,ee),ee&2&&w(B,1)):(B=qr(Z),B.c(),w(B,1),B.m(o,null)):B&&(he(),T(B,1,1,()=>{B=null}),me()),c&&Oe(c.update)&&ee&2&&c.update.call(null,[void 0,Z[7]]),(!N||ee&1)&&et($,Z[0]),(!N||ee&1)&&nt(v,"background","linear-gradient(to right, "+Z[0]+" 0, "+Z[0]+" 100%), var(--bg-chess-background)")},i(Z){N||(w(B),w(R.$$.fragment,Z),N=!0)},o(Z){T(B),T(R.$$.fragment,Z),N=!1},d(Z){Z&&E(e),B&&B.d(),O(R),y=!1,Te(D)}}}function w_(s,e,t){const[n,l]=rl(!0);let o="#f70",r=!1;const i=()=>t(1,r=!r);function a(d){o=d,t(0,o)}function c(d){o=d,t(0,o)}return[o,r,n,l,i,a,c,()=>t(1,r=!1),({detail:d})=>t(0,o=d)]}let k_=class extends G{constructor(e){super(),W(this,e,w_,v_,q,{})}};function y_(s){let e,t,n,l,o,r,i;return l=new k_({}),r=new dt({props:{code:`<script lang="ts">
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
</div>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML=`This example uses <a href="./?c=floating-ui-action"><code>@apsc/floating-ui-action</code></a>
    and
    <a href="./?c=focus-action"><code>@apsc/flocus-action</code></a>`,n=A(),L(l.$$.fragment),o=A(),L(r.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(e,"class","prose max-w-none my-4")},m(a,c){x(a,e,c),m(e,t),m(e,n),P(l,e,null),m(e,o),P(r,e,null),i=!0},p:K,i(a){i||(w(l.$$.fragment,a),w(r.$$.fragment,a),i=!0)},o(a){T(l.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),O(l),O(r)}}}let T_=class extends G{constructor(e){super(),W(this,e,null,y_,q,{})}};function E_(s){let e;return{c(){e=H("API")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function x_(s){let e;return{c(){e=H("ColorPicker example")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function S_(s){let e;return{c(){e=H("ColorEdit example")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function A_(s){let e;return{c(){e=H("Color input Example")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function C_(s){let e,t,n,l,o,r,i,a;return e=new Ke({props:{$$slots:{default:[E_]},$$scope:{ctx:s}}}),n=new Ke({props:{$$slots:{default:[x_]},$$scope:{ctx:s}}}),o=new Ke({props:{$$slots:{default:[S_]},$$scope:{ctx:s}}}),i=new Ke({props:{$$slots:{default:[A_]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment),r=A(),L(i.$$.fragment)},m(c,u){P(e,c,u),x(c,t,u),P(n,c,u),x(c,l,u),P(o,c,u),x(c,r,u),P(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),o.$set(p);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||(w(e.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(i.$$.fragment,c),a=!0)},o(c){T(e.$$.fragment,c),T(n.$$.fragment,c),T(o.$$.fragment,c),T(i.$$.fragment,c),a=!1},d(c){O(e,c),c&&E(t),O(n,c),c&&E(l),O(o,c),c&&E(r),O(i,c)}}}function N_(s){let e,t;return e=new ig({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function M_(s){let e,t;return e=new n_({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function R_(s){let e,t;return e=new i_({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function P_(s){let e,t;return e=new T_({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function O_(s){let e,t,n,l,o,r,i,a,c,u;return e=new wn({props:{$$slots:{default:[C_]},$$scope:{ctx:s}}}),n=new We({props:{$$slots:{default:[N_]},$$scope:{ctx:s}}}),o=new We({props:{$$slots:{default:[M_]},$$scope:{ctx:s}}}),i=new We({props:{$$slots:{default:[R_]},$$scope:{ctx:s}}}),c=new We({props:{$$slots:{default:[P_]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment),r=A(),L(i.$$.fragment),a=A(),L(c.$$.fragment)},m(f,d){P(e,f,d),x(f,t,d),P(n,f,d),x(f,l,d),P(o,f,d),x(f,r,d),P(i,f,d),x(f,a,d),P(c,f,d),u=!0},p(f,d){const p={};d&1&&(p.$$scope={dirty:d,ctx:f}),e.$set(p);const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),n.$set(g);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),o.$set($);const C={};d&1&&(C.$$scope={dirty:d,ctx:f}),i.$set(C);const k={};d&1&&(k.$$scope={dirty:d,ctx:f}),c.$set(k)},i(f){u||(w(e.$$.fragment,f),w(n.$$.fragment,f),w(o.$$.fragment,f),w(i.$$.fragment,f),w(c.$$.fragment,f),u=!0)},o(f){T(e.$$.fragment,f),T(n.$$.fragment,f),T(o.$$.fragment,f),T(i.$$.fragment,f),T(c.$$.fragment,f),u=!1},d(f){O(e,f),f&&E(t),O(n,f),f&&E(l),O(o,f),f&&E(r),O(i,f),f&&E(a),O(c,f)}}}function L_(s){let e,t,n,l,o,r,i,a,c,u,f,d,p;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[O_]},$$scope:{ctx:s}}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),l=_("h1"),l.textContent="A set of components for picking and editing colors",o=A(),r=_("a"),i=_("img"),c=A(),u=_("ul"),u.innerHTML=`<li>no inline styles</li> 
    <li>the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts" target="_blank" rel="noreferrer">utils.d.ts</a> for definitions of types and functions</li>`,f=A(),L(d.$$.fragment),h(l,"class","text-2xl"),h(i,"class","max-w-[4em]"),ft(i.src,a=gt)||h(i,"src",a),h(i,"alt","NPM logo"),h(r,"class","float-right"),h(r,"href","https://www.npmjs.com/package/@apsc/color"),h(r,"target","_blank"),h(r,"rel","noreferrer"),h(u,"class","leading-6 mb-8"),h(e,"class","prose max-w-none my-4")},m(g,$){x(g,e,$),P(t,e,null),m(e,n),m(e,l),m(e,o),m(e,r),m(r,i),m(e,c),m(e,u),m(e,f),P(d,e,null),p=!0},p(g,[$]){const C={};$&1&&(C.$$scope={dirty:$,ctx:g}),d.$set(C)},i(g){p||(w(t.$$.fragment,g),w(d.$$.fragment,g),p=!0)},o(g){T(t.$$.fragment,g),T(d.$$.fragment,g),p=!1},d(g){g&&E(e),O(t),O(d)}}}function D_(s){return Tn(document.title.replace(/(•).*$/,"$1 Color")),[]}let I_=class extends G{constructor(e){super(),W(this,e,D_,L_,q,{})}};const Kr=`# [Floating UI](https://floating-ui.com/) action for \`use\` Svelte directive

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
`;function B_(s){let e,t,n;return t=new xn({props:{source:Kr.slice(Kr.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),L(t.$$.fragment),h(e,"class","documentation")},m(l,o){x(l,e,o),P(t,e,null),n=!0},p:K,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){T(t.$$.fragment,l),n=!1},d(l){l&&E(e),O(t)}}}let z_=class extends G{constructor(e){super(),W(this,e,null,B_,q,{})}};function Wr(s,e,t){const n=s.slice();return n[20]=e[t],n}function Gr(s,e,t){const n=s.slice();return n[23]=e[t],n}function Zr(s){let e,t=s[23]+"",n;return{c(){e=_("option"),n=H(t),e.__value=s[23],e.value=e.__value},m(l,o){x(l,e,o),m(e,n)},p:K,d(l){l&&E(e)}}}function Qr(s){let e,t=s[20]+"",n;return{c(){e=_("option"),n=H(t),e.__value=s[12][s[20]],e.value=e.__value},m(l,o){x(l,e,o),m(e,n)},p:K,d(l){l&&E(e)}}}function Xr(s){let e,t,n,l,o,r,i,a;return{c(){e=_("div"),t=_("div"),n=H(`
      Lorem ipsum dolor sit amet consectetur adipisicing elit`),h(t,"class","arrow svelte-1b5318a"),h(e,"class","tooltip not-prose svelte-1b5318a")},m(c,u){x(c,e,u),m(e,t),s[19](t),m(e,n),r=!0,i||(a=Ge(l=s[9].call(null,e,{placement:s[5],middleware:s[6],callback:s[10]})),i=!0)},p(c,u){l&&Oe(l.update)&&u&96&&l.update.call(null,{placement:c[5],middleware:c[6],callback:c[10]})},i(c){r||(c&&$t(()=>{o||(o=rn(e,s[7],{},!0)),o.run(1)}),r=!0)},o(c){c&&(o||(o=rn(e,s[7],{},!1)),o.run(0)),r=!1},d(c){c&&E(e),s[19](null),c&&o&&o.end(),i=!1,a()}}}function H_(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S,R,N,y,D,B,Z,ee,oe,ce,ve,be=s[4]?"hide":"show",Le,z,U,Y,te=s[11],F=[];for(let V=0;V<te.length;V+=1)F[V]=Zr(Gr(s,te,V));let pe=Object.keys(s[12]),ie=[];for(let V=0;V<pe.length;V+=1)ie[V]=Qr(Wr(s,pe,V));let we=s[4]&&Xr(s);return{c(){e=_("div"),t=_("label"),n=_("span"),n.textContent="placement",l=A(),o=_("select");for(let V=0;V<F.length;V+=1)F[V].c();r=A(),i=_("label"),a=_("input"),c=A(),u=_("span"),u.textContent="flip",f=A(),d=_("label"),p=_("span"),p.textContent="offset",g=A(),$=_("input"),C=A(),k=_("label"),v=_("span"),v.textContent="size padding",S=A(),R=_("input"),N=A(),y=_("label"),D=_("span"),D.textContent="transition",B=A(),Z=_("select");for(let V=0;V<ie.length;V+=1)ie[V].c();ee=A(),oe=_("div"),ce=_("button"),ve=H("Click me to "),Le=H(be),z=A(),we&&we.c(),h(o,"class","input"),s[5]===void 0&&$t(()=>s[13].call(o)),h(a,"type","checkbox"),h(i,"class","whitespace-nowrap"),h($,"type","number"),h($,"class","input w-[8ch]"),h(R,"type","number"),h(R,"class","input w-[8ch]"),h(Z,"class","input"),s[7]===void 0&&$t(()=>s[17].call(Z)),h(e,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),h(ce,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),h(oe,"class","h-64 flex items-center justify-center border")},m(V,xe){x(V,e,xe),m(e,t),m(t,n),m(t,l),m(t,o);for(let ge=0;ge<F.length;ge+=1)F[ge].m(o,null);Lt(o,s[5]),m(e,r),m(e,i),m(i,a),a.checked=s[2],m(i,c),m(i,u),m(e,f),m(e,d),m(d,p),m(d,g),m(d,$),Ve($,s[1]),m(e,C),m(e,k),m(k,v),m(k,S),m(k,R),Ve(R,s[3]),m(e,N),m(e,y),m(y,D),m(y,B),m(y,Z);for(let ge=0;ge<ie.length;ge+=1)ie[ge].m(Z,null);Lt(Z,s[7]),x(V,ee,xe),x(V,oe,xe),m(oe,ce),m(ce,ve),m(ce,Le),m(oe,z),we&&we.m(oe,null),U||(Y=[J(o,"change",s[13]),J(a,"change",s[14]),J($,"input",s[15]),J(R,"input",s[16]),J(Z,"change",s[17]),Ge(s[8].call(null,ce)),J(ce,"click",s[18])],U=!0)},p(V,[xe]){if(xe&2048){te=V[11];let ge;for(ge=0;ge<te.length;ge+=1){const Ze=Gr(V,te,ge);F[ge]?F[ge].p(Ze,xe):(F[ge]=Zr(Ze),F[ge].c(),F[ge].m(o,null))}for(;ge<F.length;ge+=1)F[ge].d(1);F.length=te.length}if(xe&2080&&Lt(o,V[5]),xe&4&&(a.checked=V[2]),xe&2&&it($.value)!==V[1]&&Ve($,V[1]),xe&8&&it(R.value)!==V[3]&&Ve(R,V[3]),xe&4096){pe=Object.keys(V[12]);let ge;for(ge=0;ge<pe.length;ge+=1){const Ze=Wr(V,pe,ge);ie[ge]?ie[ge].p(Ze,xe):(ie[ge]=Qr(Ze),ie[ge].c(),ie[ge].m(Z,null))}for(;ge<ie.length;ge+=1)ie[ge].d(1);ie.length=pe.length}xe&4224&&Lt(Z,V[7]),xe&16&&be!==(be=V[4]?"hide":"show")&&et(Le,be),V[4]?we?(we.p(V,xe),xe&16&&w(we,1)):(we=Xr(V),we.c(),w(we,1),we.m(oe,null)):we&&(he(),T(we,1,1,()=>{we=null}),me())},i(V){w(we)},o(V){T(we)},d(V){V&&E(e),He(F,V),He(ie,V),V&&E(ee),V&&E(oe),we&&we.d(),U=!1,Te(Y)}}}function F_(s,e,t){const[n,l]=rl(!0);let o,r=!1;function i(D){const{placement:B,middlewareData:Z}=D;if(Z.arrow){const{x:ee,y:oe}=Z.arrow,ce={top:"bottom",right:"left",bottom:"top",left:"right"}[B.split("-")[0]];ce&&Object.assign(o.style,{left:ee!=null?`${ee}px`:"",top:oe!=null?`${oe}px`:"",right:"",bottom:"",[ce]:"-6px"})}}const a=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let c=a[0],u=16,f=!0,d=16,p=[],g;const $={slide:Un,scale:zm,fade:Bm,blur:Im,none:()=>({delay:0,duration:0})};function C(){c=ss(this),t(5,c),t(11,a)}function k(){f=this.checked,t(2,f)}function v(){u=it(this.value),t(1,u)}function S(){d=it(this.value),t(3,d)}function R(){g=ss(this),t(7,g),t(12,$)}const N=()=>t(4,r=!r);function y(D){je[D?"unshift":"push"](()=>{o=D,t(0,o)})}return s.$$.update=()=>{s.$$.dirty&15&&t(6,p=[sl(u),f&&nl(),_a({padding:d,apply({availableWidth:D,availableHeight:B,elements:Z}){Object.assign(Z.floating.style,{maxWidth:`${D}px`,maxHeight:`${B}px`})}}),o&&ga({element:o})].filter(D=>!!D))},[o,u,f,d,r,c,p,g,n,l,i,a,$,C,k,v,S,R,N,y]}let j_=class extends G{constructor(e){super(),W(this,e,F_,H_,q,{})}};function U_(s){let e,t,n,l,o;return t=new j_({}),l=new dt({props:{code:`<script lang="ts">
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
`}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),L(l.$$.fragment),h(e,"class","prose max-w-none my-4")},m(r,i){x(r,e,i),P(t,e,null),m(e,n),P(l,e,null),o=!0},p:K,i(r){o||(w(t.$$.fragment,r),w(l.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),T(l.$$.fragment,r),o=!1},d(r){r&&E(e),O(t),O(l)}}}let q_=class extends G{constructor(e){super(),W(this,e,null,U_,q,{})}};function Jr(s,e,t){const n=s.slice();return n[18]=e[t],n}function Yr(s){let e,t=s[18]+"",n;return{c(){e=_("option"),n=H(t),e.__value=s[18],e.value=e.__value},m(l,o){x(l,e,o),m(e,n)},p:K,d(l){l&&E(e)}}}function K_(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S,R,N,y,D,B,Z=s[1]?"hide":"show",ee,oe,ce,ve,be,Le,z,U,Y=s[10],te=[];for(let F=0;F<Y.length;F+=1)te[F]=Yr(Jr(s,Y,F));return{c(){e=_("div"),t=_("label"),n=_("span"),n.textContent="placement",l=A(),o=_("select");for(let F=0;F<te.length;F+=1)te[F].c();r=A(),i=_("label"),a=_("input"),c=A(),u=_("span"),u.textContent="flip",f=A(),d=_("label"),p=_("span"),p.textContent="offset",g=A(),$=_("input"),C=A(),k=_("label"),v=_("span"),v.textContent="size padding",S=A(),R=_("input"),N=A(),y=_("div"),D=_("button"),B=H("Click me to "),ee=H(Z),oe=A(),ce=_("div"),ve=_("div"),be=H(`
    Lorem ipsum dolor sit amet consectetur adipisicing elit`),h(o,"class","input"),s[5]===void 0&&$t(()=>s[11].call(o)),h(a,"type","checkbox"),h(i,"class","whitespace-nowrap"),h($,"type","number"),h($,"class","input w-[8ch]"),h(R,"type","number"),h(R,"class","input w-[8ch]"),h(e,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),h(D,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),h(ve,"class","arrow svelte-1lvd4kc"),h(ce,"class","tooltip not-prose svelte-1lvd4kc"),re(ce,"in",s[1]),re(ce,"out",!s[1]),h(y,"class","h-64 flex items-center justify-center border")},m(F,pe){x(F,e,pe),m(e,t),m(t,n),m(t,l),m(t,o);for(let ie=0;ie<te.length;ie+=1)te[ie].m(o,null);Lt(o,s[5]),m(e,r),m(e,i),m(i,a),a.checked=s[3],m(i,c),m(i,u),m(e,f),m(e,d),m(d,p),m(d,g),m(d,$),Ve($,s[2]),m(e,C),m(e,k),m(k,v),m(k,S),m(k,R),Ve(R,s[4]),x(F,N,pe),x(F,y,pe),m(y,D),m(D,B),m(D,ee),m(y,oe),m(y,ce),m(ce,ve),s[16](ve),m(ce,be),z||(U=[J(o,"change",s[11]),J(a,"change",s[12]),J($,"input",s[13]),J(R,"input",s[14]),Ge(s[7].call(null,D)),J(D,"click",s[15]),Ge(Le=s[8].call(null,ce,{placement:s[5],middleware:s[6],callback:s[9]}))],z=!0)},p(F,[pe]){if(pe&1024){Y=F[10];let ie;for(ie=0;ie<Y.length;ie+=1){const we=Jr(F,Y,ie);te[ie]?te[ie].p(we,pe):(te[ie]=Yr(we),te[ie].c(),te[ie].m(o,null))}for(;ie<te.length;ie+=1)te[ie].d(1);te.length=Y.length}pe&1056&&Lt(o,F[5]),pe&8&&(a.checked=F[3]),pe&4&&it($.value)!==F[2]&&Ve($,F[2]),pe&16&&it(R.value)!==F[4]&&Ve(R,F[4]),pe&2&&Z!==(Z=F[1]?"hide":"show")&&et(ee,Z),Le&&Oe(Le.update)&&pe&96&&Le.update.call(null,{placement:F[5],middleware:F[6],callback:F[9]}),pe&2&&re(ce,"in",F[1]),pe&2&&re(ce,"out",!F[1])},i:K,o:K,d(F){F&&E(e),He(te,F),F&&E(N),F&&E(y),s[16](null),z=!1,Te(U)}}}function W_(s,e,t){const[n,l,o]=rl(!0);let r,i=!1;function a(N){const{placement:y,middlewareData:D}=N;if(D.arrow){const{x:B,y:Z}=D.arrow,ee={top:"bottom",right:"left",bottom:"top",left:"right"}[y.split("-")[0]];ee&&Object.assign(r.style,{left:B!=null?`${B}px`:"",top:Z!=null?`${Z}px`:"",right:"",bottom:"",[ee]:"-6px"})}}const c=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let u=c[0],f=16,d=!0,p=16,g=[];function $(){u=ss(this),t(5,u),t(10,c)}function C(){d=this.checked,t(3,d)}function k(){f=it(this.value),t(2,f)}function v(){p=it(this.value),t(4,p)}const S=()=>t(1,i=!i);function R(N){je[N?"unshift":"push"](()=>{r=N,t(0,r)})}return s.$$.update=()=>{s.$$.dirty&2&&o(i),s.$$.dirty&29&&t(6,g=[sl(f),d&&nl(),_a({padding:p,apply({availableWidth:N,availableHeight:y,elements:D}){Object.assign(D.floating.style,{maxWidth:`${N}px`,maxHeight:`${y}px`})}}),r&&ga({element:r})].filter(N=>!!N))},[r,i,f,d,p,u,g,n,l,a,c,$,C,k,v,S,R]}let G_=class extends G{constructor(e){super(),W(this,e,W_,K_,q,{})}};function Z_(s){let e,t,n,l,o;return t=new G_({}),l=new dt({props:{code:`<script lang="ts">
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
`}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),L(l.$$.fragment),h(e,"class","prose max-w-none my-4")},m(r,i){x(r,e,i),P(t,e,null),m(e,n),P(l,e,null),o=!0},p:K,i(r){o||(w(t.$$.fragment,r),w(l.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),T(l.$$.fragment,r),o=!1},d(r){r&&E(e),O(t),O(l)}}}let Q_=class extends G{constructor(e){super(),W(this,e,null,Z_,q,{})}};function X_(s){let e;return{c(){e=H("API")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function J_(s){let e;return{c(){e=H("Transition JS demo")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function Y_(s){let e;return{c(){e=H("Transition CSS demo")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function V_(s){let e,t,n,l,o,r;return e=new Ke({props:{$$slots:{default:[X_]},$$scope:{ctx:s}}}),n=new Ke({props:{$$slots:{default:[J_]},$$scope:{ctx:s}}}),o=new Ke({props:{$$slots:{default:[Y_]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment)},m(i,a){P(e,i,a),x(i,t,a),P(n,i,a),x(i,l,a),P(o,i,a),r=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),o.$set(f)},i(i){r||(w(e.$$.fragment,i),w(n.$$.fragment,i),w(o.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(o.$$.fragment,i),r=!1},d(i){O(e,i),i&&E(t),O(n,i),i&&E(l),O(o,i)}}}function eb(s){let e,t;return e=new z_({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function tb(s){let e,t;return e=new q_({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function nb(s){let e,t;return e=new Q_({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function sb(s){let e,t,n,l,o,r,i,a;return e=new wn({props:{$$slots:{default:[V_]},$$scope:{ctx:s}}}),n=new We({props:{$$slots:{default:[eb]},$$scope:{ctx:s}}}),o=new We({props:{$$slots:{default:[tb]},$$scope:{ctx:s}}}),i=new We({props:{$$slots:{default:[nb]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment),r=A(),L(i.$$.fragment)},m(c,u){P(e,c,u),x(c,t,u),P(n,c,u),x(c,l,u),P(o,c,u),x(c,r,u),P(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),o.$set(p);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||(w(e.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(i.$$.fragment,c),a=!0)},o(c){T(e.$$.fragment,c),T(n.$$.fragment,c),T(o.$$.fragment,c),T(i.$$.fragment,c),a=!1},d(c){O(e,c),c&&E(t),O(n,c),c&&E(l),O(o,c),c&&E(r),O(i,c)}}}function lb(s){let e,t,n,l,o,r,i,a,c,u,f,d,p;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[sb]},$$scope:{ctx:s}}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),l=_("h1"),l.textContent="Action to use Floating UI",o=A(),r=_("a"),i=_("img"),c=A(),u=_("ul"),u.innerHTML=`<li>allows you to use both Svelte transitions and CSS transitions</li> 
    <li>dependence <a href="https://github.com/floating-ui/floating-ui" target="_blank" rel="noreferrer">@floating-ui/dom</a></li>`,f=A(),L(d.$$.fragment),h(l,"class","text-2xl"),h(i,"class","max-w-[4em]"),ft(i.src,a=gt)||h(i,"src",a),h(i,"alt","NPM logo"),h(r,"class","float-right"),h(r,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),h(r,"target","_blank"),h(r,"rel","noreferrer"),h(u,"class","leading-6 mb-8"),h(e,"class","prose max-w-none my-4")},m(g,$){x(g,e,$),P(t,e,null),m(e,n),m(e,l),m(e,o),m(e,r),m(r,i),m(e,c),m(e,u),m(e,f),P(d,e,null),p=!0},p(g,[$]){const C={};$&1&&(C.$$scope={dirty:$,ctx:g}),d.$set(C)},i(g){p||(w(t.$$.fragment,g),w(d.$$.fragment,g),p=!0)},o(g){T(t.$$.fragment,g),T(d.$$.fragment,g),p=!1},d(g){g&&E(e),O(t),O(d)}}}function ob(s){return Tn(document.title.replace(/(•).*$/,"$1 Floating UI action")),[]}let rb=class extends G{constructor(e){super(),W(this,e,ob,lb,q,{})}};const Vr=`# Action to control \`focusin\` and \`focusout\` for Svelte directive \`use\`

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
`;function ib(s){let e,t,n;return t=new xn({props:{source:Vr.slice(Vr.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),L(t.$$.fragment),h(e,"class","documentation")},m(l,o){x(l,e,o),P(t,e,null),n=!0},p:K,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){T(t.$$.fragment,l),n=!1},d(l){l&&E(e),O(t)}}}let ab=class extends G{constructor(e){super(),W(this,e,null,ib,q,{})}};function cb(s){let e;return{c(){e=H(" ")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function ub(s){let e;return{c(){e=H("Try to close the dropdown block by clicking outside")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function fb(s){let e;return{c(){e=H("Select")},m(t,n){x(t,e,n)},p:K,d(t){t&&E(e)}}}function db(s){let e,t,n;return{c(){e=H("Selected "),t=_("small"),n=H(s[3]),h(t,"class","font-semibold text-gray-400")},m(l,o){x(l,e,o),x(l,t,o),m(t,n)},p(l,o){o&8&&et(n,l[3])},d(l){l&&E(e),l&&E(t)}}}function ei(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S,R;return{c(){e=_("div"),t=_("div"),t.textContent="Choose one of the items",n=A(),l=_("div"),o=_("label"),r=_("input"),i=A(),a=_("span"),a.textContent="Firts",c=A(),u=_("label"),f=_("input"),d=A(),p=_("span"),p.textContent="Second",g=A(),$=_("label"),C=_("input"),k=A(),v=_("span"),v.textContent="Third",h(t,"class","alert svelte-1hjb9pe"),re(t,"error",s[2]),h(r,"type","radio"),r.__value="Firts",r.value=r.__value,h(r,"name","item"),s[8][0].push(r),h(f,"type","radio"),f.__value="Second",f.value=f.__value,h(f,"name","item"),s[8][0].push(f),h(C,"type","radio"),C.__value="Third",C.value=C.__value,h(C,"name","item"),s[8][0].push(C),h(l,"class","mt-2 flex gap-4 px-2"),h(e,"class","absolute border shadow-md rounded-md p-2 top-2 bg-white"),h(e,"tabindex","-1")},m(N,y){x(N,e,y),m(e,t),m(e,n),m(e,l),m(l,o),m(o,r),r.checked=r.__value===s[3],m(o,i),m(o,a),m(l,c),m(l,u),m(u,f),f.checked=f.__value===s[3],m(u,d),m(u,p),m(l,g),m(l,$),m($,C),C.checked=C.__value===s[3],m($,k),m($,v),s[11](e),S||(R=[J(r,"change",s[7]),J(f,"change",s[9]),J(C,"change",s[10]),Ge(fs.call(null,e,[void 0,s[4]]))],S=!0)},p(N,y){y&4&&re(t,"error",N[2]),y&8&&(r.checked=r.__value===N[3]),y&8&&(f.checked=f.__value===N[3]),y&8&&(C.checked=C.__value===N[3])},d(N){N&&E(e),s[8][0].splice(s[8][0].indexOf(r),1),s[8][0].splice(s[8][0].indexOf(f),1),s[8][0].splice(s[8][0].indexOf(C),1),s[11](null),S=!1,Te(R)}}}function pb(s){let e,t,n,l,o,r,i,a,c,u,f;function d(S,R){return S[1]&&!S[3]?ub:cb}let p=d(s),g=p(s);function $(S,R){return S[3]?db:fb}let C=$(s),k=C(s),v=s[1]&&ei(s);return{c(){e=_("div"),g.c(),t=A(),n=_("div"),l=_("button"),k.c(),o=A(),r=_("button"),i=H("Reset"),a=A(),c=_("div"),v&&v.c(),h(e,"class","w-fit mx-auto mb-4"),h(l,"class","input w-[200px]"),h(r,"class","input"),r.disabled=s[1],h(c,"class","relative"),h(n,"class","w-fit mx-auto")},m(S,R){x(S,e,R),g.m(e,null),x(S,t,R),x(S,n,R),m(n,l),k.m(l,null),m(n,o),m(n,r),m(r,i),m(n,a),m(n,c),v&&v.m(c,null),u||(f=[J(l,"click",s[5]),J(r,"click",s[6])],u=!0)},p(S,[R]){p!==(p=d(S))&&(g.d(1),g=p(S),g&&(g.c(),g.m(e,null))),C===(C=$(S))&&k?k.p(S,R):(k.d(1),k=C(S),k&&(k.c(),k.m(l,null))),R&2&&(r.disabled=S[1]),S[1]?v?v.p(S,R):(v=ei(S),v.c(),v.m(c,null)):v&&(v.d(1),v=null)},i:K,o:K,d(S){S&&E(e),g.d(),S&&E(t),S&&E(n),k.d(),v&&v.d(),u=!1,Te(f)}}}function hb(s,e,t){let n=!1,l=!1,o,r="";function i(){r?(t(1,n=!1),t(2,l=!1)):t(2,l=!0)}const a=[[]],c=()=>t(1,n=!0),u=()=>t(3,r="");function f(){r=this.__value,t(3,r)}function d(){r=this.__value,t(3,r)}function p(){r=this.__value,t(3,r)}function g($){je[$?"unshift":"push"](()=>{o=$,t(0,o)})}return s.$$.update=()=>{s.$$.dirty&1&&o&&o.focus()},[o,n,l,r,i,c,u,f,a,d,p,g]}let mb=class extends G{constructor(e){super(),W(this,e,hb,pb,q,{})}};function gb(s){let e,t,n,l,o;return t=new mb({}),l=new dt({props:{code:`<script lang="ts">
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
`}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),L(l.$$.fragment),h(e,"class","prose max-w-none my-4")},m(r,i){x(r,e,i),P(t,e,null),m(e,n),P(l,e,null),o=!0},p:K,i(r){o||(w(t.$$.fragment,r),w(l.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),T(l.$$.fragment,r),o=!1},d(r){r&&E(e),O(t),O(l)}}}let _b=class extends G{constructor(e){super(),W(this,e,null,gb,q,{})}};function ti(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k,v,S,R,N;return{c(){e=_("ul"),t=_("li"),n=_("button"),n.textContent="Open",l=A(),o=_("li"),r=_("button"),r.textContent="Close",i=A(),a=_("li"),c=_("button"),c.textContent="Upload",u=A(),f=_("li"),d=_("button"),d.textContent="Download",p=A(),g=_("li"),$=A(),C=_("li"),k=_("button"),k.textContent="About",h(n,"class","svelte-x2xhpk"),h(t,"class","svelte-x2xhpk"),h(r,"class","svelte-x2xhpk"),h(o,"class","svelte-x2xhpk"),h(c,"class","svelte-x2xhpk"),h(a,"class","svelte-x2xhpk"),h(d,"class","svelte-x2xhpk"),h(f,"class","svelte-x2xhpk"),h(g,"class","separator svelte-x2xhpk"),h(k,"class","svelte-x2xhpk"),h(C,"class","svelte-x2xhpk"),h(e,"class","dropdown svelte-x2xhpk"),h(e,"tabindex","-1")},m(y,D){x(y,e,D),m(e,t),m(t,n),m(e,l),m(e,o),m(o,r),m(e,i),m(e,a),m(a,c),m(e,u),m(e,f),m(f,d),m(e,p),m(e,g),m(e,$),m(e,C),m(C,k),S=!0,R||(N=[J(n,"click",s[4]),J(r,"click",s[5]),J(c,"click",s[6]),J(d,"click",s[7]),J(k,"click",s[8]),Ge(s[2].call(null,e,{placement:"bottom-start",middleware:[nl(),sl(8)]}))],R=!0)},p:K,i(y){S||(y&&$t(()=>{v||(v=rn(e,Un,{},!0)),v.run(1)}),S=!0)},o(y){y&&(v||(v=rn(e,Un,{},!1)),v.run(0)),S=!1},d(y){y&&E(e),y&&v&&v.end(),R=!1,Te(N)}}}function bb(s){let e,t,n,l,o,r,i=s[0]&&ti(s);return{c(){e=_("div"),t=_("button"),t.textContent="Action",n=A(),i&&i.c(),h(t,"class","input"),h(e,"class","w-fit mx-auto")},m(a,c){x(a,e,c),m(e,t),m(e,n),i&&i.m(e,null),o||(r=[Ge(s[1].call(null,t)),J(t,"click",s[3]),Ge(l=fs.call(null,e,[void 0,s[9]]))],o=!0)},p(a,[c]){a[0]?i?(i.p(a,c),c&1&&w(i,1)):(i=ti(a),i.c(),w(i,1),i.m(e,null)):i&&(he(),T(i,1,1,()=>{i=null}),me()),l&&Oe(l.update)&&c&1&&l.update.call(null,[void 0,a[9]])},i(a){w(i)},o(a){T(i)},d(a){a&&E(e),i&&i.d(),o=!1,Te(r)}}}function $b(s,e,t){const[n,l,o]=rl(!0);let r=!1;const i=()=>t(0,r=!0),a=()=>t(0,r=!1),c=()=>t(0,r=!1),u=()=>t(0,r=!1),f=()=>t(0,r=!1),d=()=>t(0,r=!1),p=()=>t(0,r=!1);return s.$$.update=()=>{s.$$.dirty&1&&o(r)},[r,n,l,i,a,c,u,f,d,p]}let vb=class extends G{constructor(e){super(),W(this,e,$b,bb,q,{})}};function wb(s){let e,t,n,l,o,r,i;return l=new vb({}),r=new dt({props:{code:`<script lang="ts">
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
`}}),{c(){e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="./?c=floating-ui-action"><code>@apsc/floating-ui-action</code></a>',n=A(),L(l.$$.fragment),o=A(),L(r.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(e,"class","prose max-w-none my-4")},m(a,c){x(a,e,c),m(e,t),m(e,n),P(l,e,null),m(e,o),P(r,e,null),i=!0},p:K,i(a){i||(w(l.$$.fragment,a),w(r.$$.fragment,a),i=!0)},o(a){T(l.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),O(l),O(r)}}}let kb=class extends G{constructor(e){super(),W(this,e,null,wb,q,{})}};function yb(s){let e,t,n,l,o,r,i,a,c,u,f;return{c(){e=_("div"),t=_("div"),n=_("fieldset"),n.innerHTML=`<legend class="svelte-c2p0zs">Your details</legend> 
      <label class="svelte-c2p0zs"><span>Name</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Email</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Phone</span> 
        <input type="text" class="input svelte-c2p0zs"/></label>`,o=A(),r=_("div"),r.innerHTML='<button type="button" class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8 svelte-c2p0zs">Submit</button>',i=A(),a=_("fieldset"),a.innerHTML=`<legend class="svelte-c2p0zs">Delivery address</legend> 
    <label class="svelte-c2p0zs"><span>Address</span> 
      <textarea rows="3" class="input svelte-c2p0zs"></textarea></label> 
    <label class="svelte-c2p0zs"><span>Postcode</span> 
      <input type="text" class="input svelte-c2p0zs"/></label> 
    <label class="svelte-c2p0zs"><span>Country</span> 
      <input type="text" class="input svelte-c2p0zs"/></label>`,h(n,"class","svelte-c2p0zs"),re(n,"active",s[0]),h(r,"class","mt-8"),h(t,"class","basis-1/2"),h(a,"class","basis-1/2 svelte-c2p0zs"),re(a,"active",s[1]),h(e,"class","form svelte-c2p0zs")},m(d,p){x(d,e,p),m(e,t),m(t,n),m(t,o),m(t,r),m(e,i),m(e,a),u||(f=[Ge(l=fs.call(null,n,[s[2],s[3]])),Ge(c=fs.call(null,a,[s[4],s[5]]))],u=!0)},p(d,[p]){l&&Oe(l.update)&&p&1&&l.update.call(null,[d[2],d[3]]),p&1&&re(n,"active",d[0]),c&&Oe(c.update)&&p&2&&c.update.call(null,[d[4],d[5]]),p&2&&re(a,"active",d[1])},i:K,o:K,d(d){d&&E(e),u=!1,Te(f)}}}function Tb(s,e,t){let n=!1,l=!1;return[n,l,()=>t(0,n=!0),()=>t(0,n=!1),()=>t(1,l=!0),()=>t(1,l=!1)]}let Eb=class extends G{constructor(e){super(),W(this,e,Tb,yb,q,{})}};function xb(s){let e,t,n,l,o,r,i;return l=new Eb({}),r=new dt({props:{code:""}}),{c(){e=_("section"),t=_("div"),t.textContent="This example highlights a focused fieldset.",n=A(),L(l.$$.fragment),o=A(),L(r.$$.fragment),h(t,"class","mb-8 pb-2 border-b text-center text-gray-500"),h(e,"class","prose max-w-none my-4")},m(a,c){x(a,e,c),m(e,t),m(e,n),P(l,e,null),m(e,o),P(r,e,null),i=!0},p:K,i(a){i||(w(l.$$.fragment,a),w(r.$$.fragment,a),i=!0)},o(a){T(l.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),O(l),O(r)}}}let Sb=class extends G{constructor(e){super(),W(this,e,null,xb,q,{})}};function Ab(s){let e;return{c(){e=H("API")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function Cb(s){let e;return{c(){e=H("Required demo")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function Nb(s){let e;return{c(){e=H("Dropdown demo")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function Mb(s){let e;return{c(){e=H("Style demo")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function Rb(s){let e,t,n,l,o,r,i,a;return e=new Ke({props:{$$slots:{default:[Ab]},$$scope:{ctx:s}}}),n=new Ke({props:{$$slots:{default:[Cb]},$$scope:{ctx:s}}}),o=new Ke({props:{$$slots:{default:[Nb]},$$scope:{ctx:s}}}),i=new Ke({props:{$$slots:{default:[Mb]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment),r=A(),L(i.$$.fragment)},m(c,u){P(e,c,u),x(c,t,u),P(n,c,u),x(c,l,u),P(o,c,u),x(c,r,u),P(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),o.$set(p);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||(w(e.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(i.$$.fragment,c),a=!0)},o(c){T(e.$$.fragment,c),T(n.$$.fragment,c),T(o.$$.fragment,c),T(i.$$.fragment,c),a=!1},d(c){O(e,c),c&&E(t),O(n,c),c&&E(l),O(o,c),c&&E(r),O(i,c)}}}function Pb(s){let e,t;return e=new ab({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Ob(s){let e,t;return e=new _b({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Lb(s){let e,t;return e=new kb({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Db(s){let e,t;return e=new Sb({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Ib(s){let e,t,n,l,o,r,i,a,c,u;return e=new wn({props:{$$slots:{default:[Rb]},$$scope:{ctx:s}}}),n=new We({props:{$$slots:{default:[Pb]},$$scope:{ctx:s}}}),o=new We({props:{$$slots:{default:[Ob]},$$scope:{ctx:s}}}),i=new We({props:{$$slots:{default:[Lb]},$$scope:{ctx:s}}}),c=new We({props:{$$slots:{default:[Db]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment),r=A(),L(i.$$.fragment),a=A(),L(c.$$.fragment)},m(f,d){P(e,f,d),x(f,t,d),P(n,f,d),x(f,l,d),P(o,f,d),x(f,r,d),P(i,f,d),x(f,a,d),P(c,f,d),u=!0},p(f,d){const p={};d&1&&(p.$$scope={dirty:d,ctx:f}),e.$set(p);const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),n.$set(g);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),o.$set($);const C={};d&1&&(C.$$scope={dirty:d,ctx:f}),i.$set(C);const k={};d&1&&(k.$$scope={dirty:d,ctx:f}),c.$set(k)},i(f){u||(w(e.$$.fragment,f),w(n.$$.fragment,f),w(o.$$.fragment,f),w(i.$$.fragment,f),w(c.$$.fragment,f),u=!0)},o(f){T(e.$$.fragment,f),T(n.$$.fragment,f),T(o.$$.fragment,f),T(i.$$.fragment,f),T(c.$$.fragment,f),u=!1},d(f){O(e,f),f&&E(t),O(n,f),f&&E(l),O(o,f),f&&E(r),O(i,f),f&&E(a),O(c,f)}}}function Bb(s){let e,t,n,l,o,r,i,a,c,u,f,d,p;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[Ib]},$$scope:{ctx:s}}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),l=_("h1"),l.innerHTML=`Action to control <code>focusin</code> and <code>focusout</code><br/>for directive
    <code>use</code>`,o=A(),r=_("a"),i=_("img"),c=A(),u=_("ul"),u.innerHTML=`<li>no dependencies</li> 
    <li>correctly detects loss of focus with <code>Tab</code></li>`,f=A(),L(d.$$.fragment),h(l,"class","text-2xl"),h(i,"class","max-w-[4em]"),ft(i.src,a=gt)||h(i,"src",a),h(i,"alt","NPM logo"),h(r,"class","float-right"),h(r,"href","https://www.npmjs.com/package/@apsc/focus-action"),h(r,"target","_blank"),h(r,"rel","noreferrer"),h(u,"class","leading-6 mb-8"),h(e,"class","prose max-w-none my-4")},m(g,$){x(g,e,$),P(t,e,null),m(e,n),m(e,l),m(e,o),m(e,r),m(r,i),m(e,c),m(e,u),m(e,f),P(d,e,null),p=!0},p(g,[$]){const C={};$&1&&(C.$$scope={dirty:$,ctx:g}),d.$set(C)},i(g){p||(w(t.$$.fragment,g),w(d.$$.fragment,g),p=!0)},o(g){T(t.$$.fragment,g),T(d.$$.fragment,g),p=!1},d(g){g&&E(e),O(t),O(d)}}}function zb(s){return Tn(document.title.replace(/(•).*$/,"$1 Focus action")),[]}let Hb=class extends G{constructor(e){super(),W(this,e,zb,Bb,q,{})}};const ni=`# Action to call a function by keyboard shortcut for Svelte directive \`use\`

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
`;function Fb(s){let e,t,n;return t=new xn({props:{source:ni.slice(ni.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),L(t.$$.fragment),h(e,"class","documentation")},m(l,o){x(l,e,o),P(t,e,null),n=!0},p:K,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){T(t.$$.fragment,l),n=!1},d(l){l&&E(e),O(t)}}}let jb=class extends G{constructor(e){super(),W(this,e,null,Fb,q,{})}};const xa={alt:"Alt",cmd:"Cmd",ctrl:"Ctrl",shift:"Shift",joinWith:" + ",hideKey:"never"};let il=xa;const Ub=()=>({alphanumeric:/^Key([A-Z01-9])$/,alpha:/^Key([A-Z])$/,always:/^Key(.*)$/,never:/^(.*)$/})[il.hideKey];function qb(s){return{character:[16,17,18,91,93,224].indexOf(s.keyCode)!==-1?null:s.code.replace(Ub(),"$1"),modifiers:{cmd:s.metaKey,ctrl:s.ctrlKey,alt:s.altKey,shift:s.shiftKey}}}function Kb(s){const e=qb(s),n=Object.entries(e.modifiers).reduce((l,[o,r])=>(r&&l.push(il[o]),l),[]);return e.character&&n.push(e.character),n}function Wb(s){return il=Object.assign(Object.assign({},xa),s)}const Gb=s=>Kb(s).join(il.joinWith);Wb({joinWith:"+"});function Jl(s,e){let{event:t,capture:n=!1,passive:l=!1,preventDefault:o=!1,stopImmediatePropagation:r=!1,stopPropagation:i=!1,fns:a}=e;function c(u){const f=Gb(u);typeof a[f]=="function"&&(o&&u.preventDefault(),i&&u.stopPropagation(),r&&u.stopImmediatePropagation(),a[f](u))}return s.addEventListener(t,c,{capture:n,passive:l}),{destroy(){s.removeEventListener(t,c,{capture:n})},update(u){const f=t!==u.event||n!==u.capture||l!==u.passive;f&&s.removeEventListener(t,c,{capture:n}),{event:t,capture:n=!1,passive:l=!1,preventDefault:o=!1,stopImmediatePropagation:r=!1,stopPropagation:i=!1,fns:a}=u,f&&s.addEventListener(t,c,{capture:n,passive:l})}}}function si(s,e,t){const n=s.slice();return n[18]=e[t],n[20]=t,n}function li(s){let e,t=s[18]+"",n,l,o,r;function i(){return s[17](s[20])}return{c(){e=_("div"),n=H(t),l=A(),h(e,"class","beverage-item svelte-12wr8dw"),re(e,"active",s[20]===s[1])},m(a,c){x(a,e,c),m(e,n),m(e,l),o||(r=J(e,"click",i),o=!0)},p(a,c){s=a,c&2&&re(e,"active",s[20]===s[1])},d(a){a&&E(e),o=!1,r()}}}function Zb(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C=s[2],k=[];for(let v=0;v<C.length;v+=1)k[v]=li(si(s,C,v));return{c(){var v;e=_("div"),t=_("div"),t.textContent="Select a beverage",n=A(),l=_("div"),o=_("input"),a=A(),c=_("button"),c.textContent="Reset",u=A(),f=_("div"),f.innerHTML=`Use the navigation buttons
    <code>ArrowUp</code>,
    <code>ArrowDown</code>,
    <code>ArrowLeft</code>,
    <code>ArrowRight</code>,
    <code>PageUp</code>,
    <code>PageDown</code>,
    <code>Home</code>,
    <code>End</code>,
    <code>Ctrl+Home</code>,
    <code>Ctrl+End</code> to select a drink`,d=A(),p=_("div");for(let S=0;S<k.length;S+=1)k[S].c();h(o,"type","text"),h(o,"class","input grow"),o.readOnly=!0,o.value=r=(v=s[2][s[1]])!=null?v:"",h(c,"type","button"),h(c,"class","input"),h(l,"class","flex"),h(f,"class","block text-sm mt-1 text-gray-500"),h(e,"class","my-4"),h(p,"class","columns-3 gap-3 border-2 border-gray-200 rounded-md p-2")},m(v,S){x(v,e,S),m(e,t),m(e,n),m(e,l),m(l,o),s[5](o),m(l,a),m(l,c),m(e,u),m(e,f),x(v,d,S),x(v,p,S);for(let R=0;R<k.length;R+=1)k[R].m(p,null);g||($=[Ge(i=Jl.call(null,o,{event:"keydown",preventDefault:!0,fns:{ArrowUp:s[6],ArrowDown:s[7],ArrowLeft:s[8],ArrowRight:s[9],PageUp:s[10],PageDown:s[11],Home:s[12],End:s[13],"Ctrl+Home":s[14],"Ctrl+End":s[15]}})),J(c,"click",s[16])],g=!0)},p(v,[S]){var R;if(S&2&&r!==(r=(R=v[2][v[1]])!=null?R:"")&&o.value!==r&&(o.value=r),i&&Oe(i.update)&&S&2&&i.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:v[6],ArrowDown:v[7],ArrowLeft:v[8],ArrowRight:v[9],PageUp:v[10],PageDown:v[11],Home:v[12],End:v[13],"Ctrl+Home":v[14],"Ctrl+End":v[15]}}),S&7){C=v[2];let N;for(N=0;N<C.length;N+=1){const y=si(v,C,N);k[N]?k[N].p(y,S):(k[N]=li(y),k[N].c(),k[N].m(p,null))}for(;N<k.length;N+=1)k[N].d(1);k.length=C.length}},i:K,o:K,d(v){v&&E(e),s[5](null),v&&E(d),v&&E(p),He(k,v),g=!1,Te($)}}}function Qb(s,e,t){const n=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asiático","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","Rüdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"],l=Math.floor(n.length/3);let o;bn(()=>o.focus());let r=NaN;function i(N){if(isFinite(r)){let y=r+N;y<0?y=0:y>=n.length&&(y=n.length-1),t(1,r=y)}else t(1,r=0)}function a(N){je[N?"unshift":"push"](()=>{o=N,t(0,o)})}return[o,r,n,l,i,a,()=>i(-1),()=>i(1),()=>i(-l),()=>i(l),()=>i(-((r||0)%l)),()=>i(l-1-(r||0)%l),()=>t(1,r=(r||0)%l),()=>t(1,r=n.length-(l-(r||0)%l)),()=>t(1,r=0),()=>t(1,r=n.length-1),()=>{t(1,r=NaN),o.focus()},N=>{t(1,r=N),o.focus()}]}let Xb=class extends G{constructor(e){super(),W(this,e,Qb,Zb,q,{})}};function Jb(s){let e,t,n,l,o;return t=new Xb({}),l=new dt({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),L(l.$$.fragment),h(e,"class","prose max-w-none my-4")},m(r,i){x(r,e,i),P(t,e,null),m(e,n),P(l,e,null),o=!0},p:K,i(r){o||(w(t.$$.fragment,r),w(l.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),T(l.$$.fragment,r),o=!1},d(r){r&&E(e),O(t),O(l)}}}let Yb=class extends G{constructor(e){super(),W(this,e,null,Jb,q,{})}};function Vb(s){let e;return{c(){e=H("API")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function e1(s){let e;return{c(){e=H("Navigation demo")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function t1(s){let e,t,n,l;return e=new Ke({props:{$$slots:{default:[Vb]},$$scope:{ctx:s}}}),n=new Ke({props:{$$slots:{default:[e1]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment)},m(o,r){P(e,o,r),x(o,t,r),P(n,o,r),l=!0},p(o,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:o}),e.$set(i);const a={};r&2&&(a.$$scope={dirty:r,ctx:o}),n.$set(a)},i(o){l||(w(e.$$.fragment,o),w(n.$$.fragment,o),l=!0)},o(o){T(e.$$.fragment,o),T(n.$$.fragment,o),l=!1},d(o){O(e,o),o&&E(t),O(n,o)}}}function n1(s){let e,t;return e=new jb({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function oi(s){let e,t;return e=new Yb({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function s1(s){let e,t,n=s[0]&&oi();return{c(){n&&n.c(),e=Ee()},m(l,o){n&&n.m(l,o),x(l,e,o),t=!0},p(l,o){l[0]?n?o&1&&w(n,1):(n=oi(),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(he(),T(n,1,1,()=>{n=null}),me())},i(l){t||(w(n),t=!0)},o(l){T(n),t=!1},d(l){n&&n.d(l),l&&E(e)}}}function l1(s){let e,t,n,l,o,r;return e=new wn({props:{$$slots:{default:[t1]},$$scope:{ctx:s}}}),n=new We({props:{$$slots:{default:[n1]},$$scope:{ctx:s}}}),o=new We({props:{$$slots:{default:[s1,({active:i})=>({0:i}),({active:i})=>i?1:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment)},m(i,a){P(e,i,a),x(i,t,a),P(n,i,a),x(i,l,a),P(o,i,a),r=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:i}),o.$set(f)},i(i){r||(w(e.$$.fragment,i),w(n.$$.fragment,i),w(o.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(o.$$.fragment,i),r=!1},d(i){O(e,i),i&&E(t),O(n,i),i&&E(l),O(o,i)}}}function o1(s){let e,t,n,l,o,r,i,a,c,u,f,d,p;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[l1]},$$scope:{ctx:s}}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),l=_("h1"),l.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",o=A(),r=_("a"),i=_("img"),c=A(),u=_("ul"),u.innerHTML=`<li>allows to reduce keyboard event handling code</li> 
    <li>dependence <a href="https://www.npmjs.com/package/keyboard-event-to-string" target="_blank" rel="noreferrer">keyboard-event-to-string</a></li>`,f=A(),L(d.$$.fragment),h(l,"class","text-2xl"),h(i,"class","max-w-[4em]"),ft(i.src,a=gt)||h(i,"src",a),h(i,"alt","NPM logo"),h(r,"class","float-right"),h(r,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),h(r,"target","_blank"),h(r,"rel","noreferrer"),h(u,"class","leading-6 mb-8"),h(e,"class","prose max-w-none my-4")},m(g,$){x(g,e,$),P(t,e,null),m(e,n),m(e,l),m(e,o),m(e,r),m(r,i),m(e,c),m(e,u),m(e,f),P(d,e,null),p=!0},p(g,[$]){const C={};$&2&&(C.$$scope={dirty:$,ctx:g}),d.$set(C)},i(g){p||(w(t.$$.fragment,g),w(d.$$.fragment,g),p=!0)},o(g){T(t.$$.fragment,g),T(d.$$.fragment,g),p=!1},d(g){g&&E(e),O(t),O(d)}}}function r1(s){return Tn(document.title.replace(/(•).*$/,"$1 Keyboard shortcut action")),[]}let i1=class extends G{constructor(e){super(),W(this,e,r1,o1,q,{})}};const ri=`# Action to scroll the child to parent viewport Svelte directive \`use\`

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
`;function a1(s){let e,t,n;return t=new xn({props:{source:ri.slice(ri.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),L(t.$$.fragment),h(e,"class","documentation")},m(l,o){x(l,e,o),P(t,e,null),n=!0},p:K,i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){T(t.$$.fragment,l),n=!1},d(l){l&&E(e),O(t)}}}class c1 extends G{constructor(e){super(),W(this,e,null,a1,q,{})}}const _t=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asiático","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","Rüdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"];function ii(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function ai(s){let e,t=s[10]+"",n,l,o,r,i;function a(){return s[9](s[12])}return{c(){e=_("div"),n=H(t),l=A(),h(e,"class","beverage-item svelte-18rp3xo"),re(e,"active",s[12]===s[1])},m(c,u){x(c,e,u),m(e,n),m(e,l),r||(i=[Ge(o=Ys.call(null,e,s[1]===s[12]?{y:!0}:!1)),J(e,"click",a)],r=!0)},p(c,u){s=c,o&&Oe(o.update)&&u&2&&o.update.call(null,s[1]===s[12]?{y:!0}:!1),u&2&&re(e,"active",s[12]===s[1])},d(c){c&&E(e),r=!1,Te(i)}}}function u1(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C=_t,k=[];for(let v=0;v<C.length;v+=1)k[v]=ai(ii(s,C,v));return{c(){var v;e=_("div"),t=_("div"),t.textContent="Select a beverage",n=A(),l=_("div"),l.innerHTML=`use the navigation buttons
    <code>ArrowUp</code>,
    <code>ArrowDown</code>,
    <code>Home</code>,
    <code>End</code> to select a drink`,o=A(),r=_("div"),i=_("input"),u=A(),f=_("button"),f.textContent="Reset",d=A(),p=_("div");for(let S=0;S<k.length;S+=1)k[S].c();h(l,"class","text-sm leading-4 text-gray-500"),h(i,"type","text"),h(i,"class","input grow"),i.readOnly=!0,i.value=a=(v=_t[s[1]])!=null?v:"",h(f,"type","button"),h(f,"class","input ml-2"),h(r,"class","mt-2 flex"),h(p,"class","border-2 border-gray-200 rounded-md p-2 mt-2 w-48 max-h-[15.25rem] overflow-y-auto shadow-md scroll-smooth"),h(e,"class","my-2 mx-auto w-96")},m(v,S){x(v,e,S),m(e,t),m(e,n),m(e,l),m(e,o),m(e,r),m(r,i),s[3](i),m(r,u),m(r,f),m(e,d),m(e,p);for(let R=0;R<k.length;R+=1)k[R].m(p,null);g||($=[Ge(c=Jl.call(null,i,{event:"keydown",preventDefault:!0,fns:{ArrowUp:s[4],ArrowDown:s[5],Home:s[6],End:s[7]}})),J(f,"click",s[8])],g=!0)},p(v,[S]){var R;if(S&2&&a!==(a=(R=_t[v[1]])!=null?R:"")&&i.value!==a&&(i.value=a),c&&Oe(c.update)&&S&2&&c.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:v[4],ArrowDown:v[5],Home:v[6],End:v[7]}}),S&3){C=_t;let N;for(N=0;N<C.length;N+=1){const y=ii(v,C,N);k[N]?k[N].p(y,S):(k[N]=ai(y),k[N].c(),k[N].m(p,null))}for(;N<k.length;N+=1)k[N].d(1);k.length=C.length}},i:K,o:K,d(v){v&&E(e),s[3](null),He(k,v),g=!1,Te($)}}}function f1(s,e,t){let n;bn(()=>n.focus());let l=NaN;function o(p){if(isFinite(l)){let g=l+p;g<0?g=0:g>=_t.length&&(g=_t.length-1),t(1,l=g)}else t(1,l=0)}function r(p){je[p?"unshift":"push"](()=>{n=p,t(0,n)})}return[n,l,o,r,()=>o(-1),()=>o(1),()=>t(1,l=0),()=>t(1,l=_t.length-1),()=>{t(1,l=NaN),n.focus()},p=>{t(1,l=p),n.focus()}]}let d1=class extends G{constructor(e){super(),W(this,e,f1,u1,q,{})}};function p1(s){let e,t,n,l,o,r,i;return l=new d1({}),r=new dt({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="./?c=keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=A(),L(l.$$.fragment),o=A(),L(r.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(e,"class","prose max-w-none my-4")},m(a,c){x(a,e,c),m(e,t),m(e,n),P(l,e,null),m(e,o),P(r,e,null),i=!0},p:K,i(a){i||(w(l.$$.fragment,a),w(r.$$.fragment,a),i=!0)},o(a){T(l.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),O(l),O(r)}}}let h1=class extends G{constructor(e){super(),W(this,e,null,p1,q,{})}};function ci(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function ui(s){let e,t=s[10]+"",n,l,o,r,i;function a(){return s[9](s[12])}return{c(){e=_("div"),n=H(t),l=A(),h(e,"class","beverage-item svelte-2m30if"),re(e,"active",s[12]===s[1])},m(c,u){x(c,e,u),m(e,n),m(e,l),r||(i=[Ge(o=Ys.call(null,e,s[1]===s[12]?{x:!0}:!1)),J(e,"click",a)],r=!0)},p(c,u){s=c,o&&Oe(o.update)&&u&2&&o.update.call(null,s[1]===s[12]?{x:!0}:!1),u&2&&re(e,"active",s[12]===s[1])},d(c){c&&E(e),r=!1,Te(i)}}}function m1(s){let e,t,n,l,o,r,i,a,c,u,f,d,p,g,$,C,k=_t,v=[];for(let S=0;S<k.length;S+=1)v[S]=ui(ci(s,k,S));return{c(){var S;e=_("div"),t=_("div"),n=_("div"),n.textContent="Select a beverage",l=A(),o=_("div"),o.innerHTML=`use the navigation buttons
      <code>ArrowLeft</code>,
      <code>ArrowRight</code>,
      <code>Home</code>,
      <code>End</code> to select a drink`,r=A(),i=_("div"),a=_("input"),f=A(),d=_("button"),d.textContent="Reset",p=A(),g=_("div");for(let R=0;R<v.length;R+=1)v[R].c();h(o,"class","text-sm leading-4 text-gray-500"),h(a,"type","text"),h(a,"class","input grow"),a.readOnly=!0,a.value=c=(S=_t[s[1]])!=null?S:"",h(d,"type","button"),h(d,"class","input ml-2"),h(i,"class","mt-2 flex"),h(t,"class","mx-auto w-96"),h(g,"class","border-2 border-gray-200 rounded-md p-2 mt-2 whitespace-nowrap max-w-full overflow-x-auto shadow-md scroll-smooth"),h(e,"class","my-2")},m(S,R){x(S,e,R),m(e,t),m(t,n),m(t,l),m(t,o),m(t,r),m(t,i),m(i,a),s[3](a),m(i,f),m(i,d),m(e,p),m(e,g);for(let N=0;N<v.length;N+=1)v[N].m(g,null);$||(C=[Ge(u=Jl.call(null,a,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:s[4],ArrowRight:s[5],Home:s[6],End:s[7]}})),J(d,"click",s[8])],$=!0)},p(S,[R]){var N;if(R&2&&c!==(c=(N=_t[S[1]])!=null?N:"")&&a.value!==c&&(a.value=c),u&&Oe(u.update)&&R&2&&u.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:S[4],ArrowRight:S[5],Home:S[6],End:S[7]}}),R&3){k=_t;let y;for(y=0;y<k.length;y+=1){const D=ci(S,k,y);v[y]?v[y].p(D,R):(v[y]=ui(D),v[y].c(),v[y].m(g,null))}for(;y<v.length;y+=1)v[y].d(1);v.length=k.length}},i:K,o:K,d(S){S&&E(e),s[3](null),He(v,S),$=!1,Te(C)}}}function g1(s,e,t){let n;bn(()=>n.focus());let l=NaN;function o(p){if(isFinite(l)){let g=l+p;g<0?g=0:g>=_t.length&&(g=_t.length-1),t(1,l=g)}else t(1,l=0)}function r(p){je[p?"unshift":"push"](()=>{n=p,t(0,n)})}return[n,l,o,r,()=>o(-1),()=>o(1),()=>t(1,l=0),()=>t(1,l=_t.length-1),()=>{t(1,l=NaN),n.focus()},p=>{t(1,l=p),n.focus()}]}class _1 extends G{constructor(e){super(),W(this,e,g1,m1,q,{})}}function b1(s){let e,t,n,l,o,r,i;return l=new _1({}),r=new dt({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="./?c=keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=A(),L(l.$$.fragment),o=A(),L(r.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(e,"class","prose max-w-none my-4")},m(a,c){x(a,e,c),m(e,t),m(e,n),P(l,e,null),m(e,o),P(r,e,null),i=!0},p:K,i(a){i||(w(l.$$.fragment,a),w(r.$$.fragment,a),i=!0)},o(a){T(l.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),O(l),O(r)}}}class $1 extends G{constructor(e){super(),W(this,e,null,b1,q,{})}}function v1(s){let e;return{c(){e=H("API")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function w1(s){let e;return{c(){e=H("Vertical demo")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function k1(s){let e;return{c(){e=H("Horizontal demo")},m(t,n){x(t,e,n)},d(t){t&&E(e)}}}function y1(s){let e,t,n,l,o,r;return e=new Ke({props:{$$slots:{default:[v1]},$$scope:{ctx:s}}}),n=new Ke({props:{$$slots:{default:[w1]},$$scope:{ctx:s}}}),o=new Ke({props:{$$slots:{default:[k1]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment)},m(i,a){P(e,i,a),x(i,t,a),P(n,i,a),x(i,l,a),P(o,i,a),r=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:i}),o.$set(f)},i(i){r||(w(e.$$.fragment,i),w(n.$$.fragment,i),w(o.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(o.$$.fragment,i),r=!1},d(i){O(e,i),i&&E(t),O(n,i),i&&E(l),O(o,i)}}}function T1(s){let e,t;return e=new c1({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function fi(s){let e,t;return e=new h1({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function E1(s){let e,t,n=s[0]&&fi();return{c(){n&&n.c(),e=Ee()},m(l,o){n&&n.m(l,o),x(l,e,o),t=!0},p(l,o){l[0]?n?o&1&&w(n,1):(n=fi(),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(he(),T(n,1,1,()=>{n=null}),me())},i(l){t||(w(n),t=!0)},o(l){T(n),t=!1},d(l){n&&n.d(l),l&&E(e)}}}function di(s){let e,t;return e=new $1({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function x1(s){let e,t,n=s[0]&&di();return{c(){n&&n.c(),e=Ee()},m(l,o){n&&n.m(l,o),x(l,e,o),t=!0},p(l,o){l[0]?n?o&1&&w(n,1):(n=di(),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(he(),T(n,1,1,()=>{n=null}),me())},i(l){t||(w(n),t=!0)},o(l){T(n),t=!1},d(l){n&&n.d(l),l&&E(e)}}}function S1(s){let e,t,n,l,o,r,i,a;return e=new wn({props:{$$slots:{default:[y1]},$$scope:{ctx:s}}}),n=new We({props:{$$slots:{default:[T1]},$$scope:{ctx:s}}}),o=new We({props:{$$slots:{default:[E1,({active:c})=>({0:c}),({active:c})=>c?1:0]},$$scope:{ctx:s}}}),i=new We({props:{$$slots:{default:[x1,({active:c})=>({0:c}),({active:c})=>c?1:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=A(),L(n.$$.fragment),l=A(),L(o.$$.fragment),r=A(),L(i.$$.fragment)},m(c,u){P(e,c,u),x(c,t,u),P(n,c,u),x(c,l,u),P(o,c,u),x(c,r,u),P(i,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&2&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&3&&(p.$$scope={dirty:u,ctx:c}),o.$set(p);const g={};u&3&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||(w(e.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(i.$$.fragment,c),a=!0)},o(c){T(e.$$.fragment,c),T(n.$$.fragment,c),T(o.$$.fragment,c),T(i.$$.fragment,c),a=!1},d(c){O(e,c),c&&E(t),O(n,c),c&&E(l),O(o,c),c&&E(r),O(i,c)}}}function A1(s){let e,t,n,l,o,r,i,a,c,u,f,d,p;return t=new kn({props:{class:"float-right"}}),d=new vn({props:{$$slots:{default:[S1]},$$scope:{ctx:s}}}),{c(){e=_("section"),L(t.$$.fragment),n=A(),l=_("h1"),l.innerHTML="Action to scroll the child to parent viewport Svelte directive <code>use</code>",o=A(),r=_("a"),i=_("img"),c=A(),u=_("ul"),u.innerHTML=`<li>no dependencies</li> 
    <li>useful for components like dropdown</li> 
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>`,f=A(),L(d.$$.fragment),h(l,"class","text-2xl"),h(i,"class","max-w-[4em]"),ft(i.src,a=gt)||h(i,"src",a),h(i,"alt","NPM logo"),h(r,"class","float-right"),h(r,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),h(r,"target","_blank"),h(r,"rel","noreferrer"),h(u,"class","leading-6 mb-8"),h(e,"class","prose max-w-none my-4")},m(g,$){x(g,e,$),P(t,e,null),m(e,n),m(e,l),m(e,o),m(e,r),m(r,i),m(e,c),m(e,u),m(e,f),P(d,e,null),p=!0},p(g,[$]){const C={};$&2&&(C.$$scope={dirty:$,ctx:g}),d.$set(C)},i(g){p||(w(t.$$.fragment,g),w(d.$$.fragment,g),p=!0)},o(g){T(t.$$.fragment,g),T(d.$$.fragment,g),p=!1},d(g){g&&E(e),O(t),O(d)}}}function C1(s){return Tn(document.title.replace(/(•).*$/,"$1 Scroll child action")),[]}class N1 extends G{constructor(e){super(),W(this,e,C1,A1,q,{})}}function M1(s){let e;return{c(){e=_("h1"),e.textContent="Not found",h(e,"class","font-bold my-4 pb-2 text-3xl text-center")},m(t,n){x(t,e,n)},i:K,o:K,d(t){t&&E(e)}}}function R1(s){let e,t;return e=new N1({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function P1(s){let e,t;return e=new i1({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function O1(s){let e,t;return e=new Hb({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function L1(s){let e,t;return e=new rb({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function D1(s){let e,t;return e=new I_({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function I1(s){let e,t;return e=new lg({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function B1(s){let e,t;return e=new Nm({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function z1(s){let e,t;return e=new _u({}),{c(){L(e.$$.fragment)},m(n,l){P(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function H1(s){let e,t,n,l,o;const r=[z1,B1,I1,D1,L1,O1,P1,R1,M1],i=[];function a(c,u){return u&1&&(t=null),t==null&&(t=c[0].toString()===""),t?0:c[0].params.c==="tabs"?1:c[0].params.c==="glob-notify"?2:c[0].params.c==="color"?3:c[0].params.c==="floating-ui-action"?4:c[0].params.c==="focus-action"?5:c[0].params.c==="keyboard-shortcut-action"?6:c[0].params.c==="scroll-child-action"?7:8}return n=a(s,-1),l=i[n]=r[n](s),{c(){e=_("main"),l.c()},m(c,u){x(c,e,u),i[n].m(e,null),o=!0},p(c,[u]){let f=n;n=a(c,u),n!==f&&(he(),T(i[f],1,1,()=>{i[f]=null}),me(),l=i[n],l||(l=i[n]=r[n](c),l.c()),w(l,1),l.m(e,null))},i(c){o||(w(l),o=!0)},o(c){T(l),o=!1},d(c){c&&E(e),i[n].d()}}}function F1(s,e,t){let n;return Jt(s,rs,l=>t(0,n=l)),[n]}class j1 extends G{constructor(e){super(),W(this,e,F1,H1,q,{})}}new j1({target:document.getElementById("app")});
