var dc=Object.defineProperty,pc=Object.defineProperties;var mc=Object.getOwnPropertyDescriptors;var gs=Object.getOwnPropertySymbols;var Jo=Object.prototype.hasOwnProperty,Vo=Object.prototype.propertyIsEnumerable;var Yo=(s,e,t)=>e in s?dc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Je=(s,e)=>{for(var t in e||(e={}))Jo.call(e,t)&&Yo(s,t,e[t]);if(gs)for(var t of gs(e))Vo.call(e,t)&&Yo(s,t,e[t]);return s},bn=(s,e)=>pc(s,mc(e));var eo=(s,e)=>{var t={};for(var n in s)Jo.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&gs)for(var n of gs(s))e.indexOf(n)<0&&Vo.call(s,n)&&(t[n]=s[n]);return t};var wt=(s,e,t)=>new Promise((n,o)=>{var l=a=>{try{i(t.next(a))}catch(c){o(c)}},r=a=>{try{i(t.throw(a))}catch(c){o(c)}},i=a=>a.done?n(a.value):Promise.resolve(a.value).then(l,r);i((t=t.apply(s,e)).next())});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function le(){}const Zr=s=>s;function Et(s,e){for(const t in e)s[t]=e[t];return s}function hc(s){return!!s&&(typeof s=="object"||typeof s=="function")&&typeof s.then=="function"}function Xr(s){return s()}function el(){return Object.create(null)}function je(s){s.forEach(Xr)}function ut(s){return typeof s=="function"}function V(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}let _s;function ct(s,e){return _s||(_s=document.createElement("a")),_s.href=e,s===_s.href}function gc(s){return Object.keys(s).length===0}function Qr(s,...e){if(s==null)return le;const t=s.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function vn(s,e,t){s.$$.on_destroy.push(Qr(e,t))}function Be(s,e,t,n){if(s){const o=Yr(s,e,t,n);return s[0](o)}}function Yr(s,e,t,n){return s[1]&&n?Et(t.ctx.slice(),s[1](n(e))):t.ctx}function Fe(s,e,t,n){if(s[2]&&n){const o=s[2](n(t));if(e.dirty===void 0)return o;if(typeof o=="object"){const l=[],r=Math.max(e.dirty.length,o.length);for(let i=0;i<r;i+=1)l[i]=e.dirty[i]|o[i];return l}return e.dirty|o}return e.dirty}function ze(s,e,t,n,o,l){if(o){const r=Yr(e,t,n,l);s.p(r,o)}}function He(s){if(s.ctx.length>32){const e=[],t=s.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Jr(s){const e={};for(const t in s)t[0]!=="$"&&(e[t]=s[t]);return e}function Ss(s,e){const t={};e=new Set(e);for(const n in s)!e.has(n)&&n[0]!=="$"&&(t[n]=s[n]);return t}function Rn(s){return s==null?"":s}function Ve(s){return s&&ut(s.destroy)?s.destroy:le}const Vr=typeof window!="undefined";let _c=Vr?()=>window.performance.now():()=>Date.now(),ho=Vr?s=>requestAnimationFrame(s):le;const Dn=new Set;function ei(s){Dn.forEach(e=>{e.c(s)||(Dn.delete(e),e.f())}),Dn.size!==0&&ho(ei)}function bc(s){let e;return Dn.size===0&&ho(ei),{promise:new Promise(t=>{Dn.add(e={c:s,f:t})}),abort(){Dn.delete(e)}}}function p(s,e){s.appendChild(e)}function ti(s){if(!s)return document;const e=s.getRootNode?s.getRootNode():s.ownerDocument;return e&&e.host?e:s.ownerDocument}function $c(s){const e=_("style");return vc(ti(s),e),e.sheet}function vc(s,e){return p(s.head||s,e),e.sheet}function k(s,e,t){s.insertBefore(e,t||null)}function w(s){s.parentNode&&s.parentNode.removeChild(s)}function Ye(s,e){for(let t=0;t<s.length;t+=1)s[t]&&s[t].d(e)}function _(s){return document.createElement(s)}function wc(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function j(s){return document.createTextNode(s)}function x(){return j(" ")}function Le(){return j("")}function J(s,e,t,n){return s.addEventListener(e,t,n),()=>s.removeEventListener(e,t,n)}function tl(s){return function(e){return e.preventDefault(),s.call(this,e)}}function kc(s){return function(e){e.target===this&&s.call(this,e)}}function h(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function nl(s,e){const t=Object.getOwnPropertyDescriptors(s.__proto__);for(const n in e)e[n]==null?s.removeAttribute(n):n==="style"?s.style.cssText=e[n]:n==="__value"?s.value=s[n]=e[n]:t[n]&&t[n].set?s[n]=e[n]:h(s,n,e[n])}function At(s){return s===""?null:+s}function yc(s){return Array.from(s.childNodes)}function Ie(s,e){e=""+e,s.wholeText!==e&&(s.data=e)}function _t(s,e){s.value=e==null?"":e}function ot(s,e,t,n){t===null?s.style.removeProperty(e):s.style.setProperty(e,t,n?"important":"")}function Ot(s,e){for(let t=0;t<s.options.length;t+=1){const n=s.options[t];if(n.__value===e){n.selected=!0;return}}s.selectedIndex=-1}function Gn(s){const e=s.querySelector(":checked")||s.options[0];return e&&e.__value}function Qe(s,e,t){s.classList[t?"add":"remove"](e)}function ni(s,e,{bubbles:t=!1,cancelable:n=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(s,t,n,e),o}class si{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=wc(t.nodeName):this.e=_(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)k(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}function Ge(s,e){return new s(e)}const Es=new Map;let As=0;function Tc(s){let e=5381,t=s.length;for(;t--;)e=(e<<5)-e^s.charCodeAt(t);return e>>>0}function xc(s,e){const t={stylesheet:$c(e),rules:{}};return Es.set(s,t),t}function sl(s,e,t,n,o,l,r,i=0){const a=16.666/n;let c=`{
`;for(let $=0;$<=1;$+=a){const T=e+(t-e)*l($);c+=$*100+`%{${r(T,1-T)}}
`}const u=c+`100% {${r(t,1-t)}}
}`,f=`__svelte_${Tc(u)}_${i}`,d=ti(s),{stylesheet:m,rules:g}=Es.get(d)||xc(d,s);g[f]||(g[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const b=s.style.animation||"";return s.style.animation=`${b?`${b}, `:""}${f} ${n}ms linear ${o}ms 1 both`,As+=1,f}function Sc(s,e){const t=(s.style.animation||"").split(", "),n=t.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),o=t.length-n.length;o&&(s.style.animation=n.join(", "),As-=o,As||Ec())}function Ec(){ho(()=>{As||(Es.forEach(s=>{const{ownerNode:e}=s.stylesheet;e&&w(e)}),Es.clear())})}let Zn;function qt(s){Zn=s}function Tn(){if(!Zn)throw new Error("Function called outside component initialization");return Zn}function Hn(s){Tn().$$.on_mount.push(s)}function Ac(s){Tn().$$.after_update.push(s)}function ao(s){Tn().$$.on_destroy.push(s)}function go(){const s=Tn();return(e,t,{cancelable:n=!1}={})=>{const o=s.$$.callbacks[e];if(o){const l=ni(e,t,{cancelable:n});return o.slice().forEach(r=>{r.call(s,l)}),!l.defaultPrevented}return!0}}function oi(s,e){return Tn().$$.context.set(s,e),e}function _o(s){return Tn().$$.context.get(s)}const Ln=[],Xe=[],ws=[],co=[],li=Promise.resolve();let uo=!1;function ri(){uo||(uo=!0,li.then($o))}function bo(){return ri(),li}function kt(s){ws.push(s)}function kn(s){co.push(s)}const to=new Set;let Mn=0;function $o(){if(Mn!==0)return;const s=Zn;do{try{for(;Mn<Ln.length;){const e=Ln[Mn];Mn++,qt(e),Cc(e.$$)}}catch(e){throw Ln.length=0,Mn=0,e}for(qt(null),Ln.length=0,Mn=0;Xe.length;)Xe.pop()();for(let e=0;e<ws.length;e+=1){const t=ws[e];to.has(t)||(to.add(t),t())}ws.length=0}while(Ln.length);for(;co.length;)co.pop()();uo=!1,to.clear(),qt(s)}function Cc(s){if(s.fragment!==null){s.update(),je(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(kt)}}let qn;function Nc(){return qn||(qn=Promise.resolve(),qn.then(()=>{qn=null})),qn}function no(s,e,t){s.dispatchEvent(ni(`${e?"intro":"outro"}${t}`))}const ks=new Set;let Wt;function ye(){Wt={r:0,c:[],p:Wt}}function Te(){Wt.r||je(Wt.c),Wt=Wt.p}function y(s,e){s&&s.i&&(ks.delete(s),s.i(e))}function S(s,e,t,n){if(s&&s.o){if(ks.has(s))return;ks.add(s),Wt.c.push(()=>{ks.delete(s),n&&(t&&s.d(1),n())}),s.o(e)}else n&&n()}const Pc={duration:0};function ln(s,e,t,n){const o={direction:"both"};let l=e(s,t,o),r=n?0:1,i=null,a=null,c=null;function u(){c&&Sc(s,c)}function f(m,g){const b=m.b-r;return g*=Math.abs(b),{a:r,b:m.b,d:b,duration:g,start:m.start,end:m.start+g,group:m.group}}function d(m){const{delay:g=0,duration:b=300,easing:$=Zr,tick:T=le,css:E}=l||Pc,D={start:_c()+g,b:m};m||(D.group=Wt,Wt.r+=1),i||a?a=D:(E&&(u(),c=sl(s,r,m,b,g,$,E)),m&&T(0,1),i=f(D,b),kt(()=>no(s,m,"start")),bc(C=>{if(a&&C>a.start&&(i=f(a,b),a=null,no(s,i.b,"start"),E&&(u(),c=sl(s,r,i.b,i.duration,0,$,l.css))),i){if(C>=i.end)T(r=i.b,1-r),no(s,i.b,"end"),a||(i.b?u():--i.group.r||je(i.group.c)),i=null;else if(C>=i.start){const M=C-i.start;r=i.a+i.d*$(M/i.duration),T(r,1-r)}}return!!(i||a)}))}return{run(m){ut(l)?Nc().then(()=>{l=l(o),d(m)}):d(m)},end(){u(),i=a=null}}}function Cs(s,e){const t=e.token={};function n(o,l,r,i){if(e.token!==t)return;e.resolved=i;let a=e.ctx;r!==void 0&&(a=a.slice(),a[r]=i);const c=o&&(e.current=o)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==l&&f&&(ye(),S(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),Te())}):e.block.d(1),c.c(),y(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[l]=c),u&&$o()}if(hc(s)){const o=Tn();if(s.then(l=>{qt(o),n(e.then,1,e.value,l),qt(null)},l=>{if(qt(o),n(e.catch,2,e.error,l),qt(null),!e.hasCatch)throw l}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,s),!0;e.resolved=s}}function ii(s,e,t){const n=e.slice(),{resolved:o}=s;s.current===s.then&&(n[s.value]=o),s.current===s.catch&&(n[s.error]=o),s.block.p(n,t)}const un=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Rc(s,e){S(s,1,1,()=>{e.delete(s.key)})}function Mc(s,e,t,n,o,l,r,i,a,c,u,f){let d=s.length,m=l.length,g=d;const b={};for(;g--;)b[s[g].key]=g;const $=[],T=new Map,E=new Map;for(g=m;g--;){const O=f(o,l,g),I=t(O);let L=r.get(I);L?n&&L.p(O,e):(L=c(I,O),L.c()),T.set(I,$[g]=L),I in b&&E.set(I,Math.abs(g-b[I]))}const D=new Set,C=new Set;function M(O){y(O,1),O.m(i,u),r.set(O.key,O),u=O.first,m--}for(;d&&m;){const O=$[m-1],I=s[d-1],L=O.key,F=I.key;O===I?(u=O.first,d--,m--):T.has(F)?!r.has(L)||D.has(L)?M(O):C.has(F)?d--:E.get(L)>E.get(F)?(C.add(L),M(O)):(D.add(F),d--):(a(I,r),d--)}for(;d--;){const O=s[d];T.has(O.key)||a(O,r)}for(;m;)M($[m-1]);return $}function xn(s,e){const t={},n={},o={$$scope:1};let l=s.length;for(;l--;){const r=s[l],i=e[l];if(i){for(const a in r)a in i||(n[a]=1);for(const a in i)o[a]||(t[a]=i[a],o[a]=1);s[l]=i}else for(const a in r)o[a]=1}for(const r in n)r in t||(t[r]=void 0);return t}function jn(s){return typeof s=="object"&&s!==null?s:{}}function rn(s,e,t){const n=s.$$.props[e];n!==void 0&&(s.$$.bound[n]=t,t(s.$$.ctx[n]))}function R(s){s&&s.c()}function N(s,e,t,n){const{fragment:o,after_update:l}=s.$$;o&&o.m(e,t),n||kt(()=>{const r=s.$$.on_mount.map(Xr).filter(ut);s.$$.on_destroy?s.$$.on_destroy.push(...r):je(r),s.$$.on_mount=[]}),l.forEach(kt)}function P(s,e){const t=s.$$;t.fragment!==null&&(je(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Oc(s,e){s.$$.dirty[0]===-1&&(Ln.push(s),ri(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function ee(s,e,t,n,o,l,r,i=[-1]){const a=Zn;qt(s);const c=s.$$={fragment:null,ctx:[],props:l,update:le,not_equal:o,bound:el(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:el(),dirty:i,skip_bound:!1,root:e.target||a.$$.root};r&&r(c.root);let u=!1;if(c.ctx=t?t(s,e.props||{},(f,d,...m)=>{const g=m.length?m[0]:d;return c.ctx&&o(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&Oc(s,f)),d}):[],c.update(),u=!0,je(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=yc(e.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&y(s.$$.fragment),N(s,e.target,e.anchor,e.customElement),$o()}qt(a)}class te{$destroy(){P(this,1),this.$destroy=le}$on(e,t){if(!ut(t))return le;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const o=n.indexOf(t);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!gc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const On=[];function Ic(s,e){return{subscribe:yn(s,e).subscribe}}function yn(s,e=le){let t;const n=new Set;function o(i){if(V(s,i)&&(s=i,t)){const a=!On.length;for(const c of n)c[1](),On.push(c,s);if(a){for(let c=0;c<On.length;c+=2)On[c][0](On[c+1]);On.length=0}}}function l(i){o(i(s))}function r(i,a=le){const c=[i,a];return n.add(c),n.size===1&&(t=e(o)||le),i(s),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:o,update:l,subscribe:r}}function vo(s,e,t){const n=!Array.isArray(s),o=n?[s]:s,l=e.length<2;return Ic(t,r=>{let i=!1;const a=[];let c=0,u=le;const f=()=>{if(c)return;u();const m=e(n?a[0]:a,r);l?r(m):u=ut(m)?m:le},d=o.map((m,g)=>Qr(m,b=>{a[g]=b,c&=~(1<<g),i&&f()},()=>{c|=1<<g}));return i=!0,f(),function(){je(d),u()}})}const Fs=typeof location!="undefined",ai=typeof history!="undefined",Lc=ai&&typeof history.pushState=="function",ci=typeof window!="undefined",Dc=ci&&window!==window.parent,Bc=Fs&&(location.protocol==="file:"||/[-_\w]+[.][\w]+$/i.test(location.pathname)),Ns=ci&&ai&&Fs&&!Dc,es=!Lc||Bc,wo="#!",Bn={array:{separator:",",format:"bracket"},convertTypes:!0,hashbang:!1,basePath:"",nesting:3,sideEffect:Ns};function Fc(){const s=ko().pathname;if(!s)return"";const e=yo(),t=ys(s,e);return ui(t)}function ko(){if(!Fs)return{};if(es){const s=location.hash;return new URL(s.indexOf(wo)===0?s.substring(2):s.substring(1),"file:")}return location}function yo(){return Fs&&es?location.pathname:"/"}function zc(s){es&&(s=wo+s);const e=yo();return(e[e.length-1]==="/"?e.substring(0,e.length-1):e)+s}function Hc(s){s=ys(s,location.origin);const e=yo();return s=ys(s,e),es&&(s=ys(s,wo)),ui(s)}function jc(s,e,t){const{pattern:n,keys:o}=qc(e,t),l=n.exec(s);return l?o.reduce((r,i,a)=>(r[i]=Xn(l[++a])||null,r),{}):null}function Uc(s=""){return s?s.replace("?","").replace(/\+/g," ").split("&").filter(Boolean).reduce((e,t)=>{let[n,o]=t.split(/=(.*)/,2);n=decodeURIComponent(n||""),o=decodeURIComponent(o||"");let l=fi(n,o);return e=Object.keys(l).reduce((r,i)=>{const a=Xn(l[i]);return r[i]?Array.isArray(r[i])?r[i]=r[i].concat(a):Object.assign(r[i],a):r[i]=a,r},e),e},{}):{}}function Kc(s={}){const e=Object.keys(s).reduce((t,n)=>{if(s.hasOwnProperty(n)&&isNaN(parseInt(n,10)))if(Array.isArray(s[n]))s[n].forEach(o=>t.push(n+"[]="+encodeURIComponent(o)));else if(typeof s[n]=="object"&&s[n]!==null){let o=fi(n,s[n]);t.push(di(o))}else t.push(n+"="+encodeURIComponent(s[n]));return t},[]).join("&");return e?`?${e}`:""}function ui(s){return s[0]!=="/"?"/"+s:s}function ys(s,e){return s.indexOf(e)===0?s.substring(e.length):s}function qc(s,e=!1){let t=s.split("/"),n=[],o="",l,r,i,a;for(t[0]||t.shift();i=t.shift();)l=i[0],l==="*"?(n.push("wild"),o+="/(.*)"):l===":"?(r=i.indexOf("?",1),a=i.indexOf(".",1),n.push(i.substring(1,~r?r:~a?a:i.length)),o+=~r&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(o+=(~r?"?":"")+"\\"+i.substring(a))):o+="/"+i;return{keys:n,pattern:new RegExp("^"+o+(e?"(?:$|/)":"/?$"),"i")}}function Xn(s){return Array.isArray(s)?(s[s.length-1]=Xn(s[s.length-1]),s):typeof s=="object"?Object.entries(s).reduce((e,[t,n])=>(e[t]=Xn(n),e),{}):s==="true"||s==="false"?s==="true":s==="null"?null:s==="undefined"?void 0:s!==""&&!isNaN(Number(s))&&Number(s).toString()===s?Number(s):s}function fi(s,e){const t=/(\[[^[\]]*])/,n=/(\[[^[\]]*])/g;let o=t.exec(s),l=o?s.slice(0,o.index):s,r=[];l&&r.push(l);let i=0;for(;(o=n.exec(s))&&i<Bn.nesting;)i++,r.push(o[1]);return o&&r.push("["+s.slice(o.index)+"]"),Wc(r,e)}function Wc(s,e){let t=e;for(let n=s.length-1;n>=0;--n){let o=s[n],l;if(o==="[]")l=[].concat(t);else{l={};const r=o.charAt(0)==="["&&o.charAt(o.length-1)==="]"?o.slice(1,-1):o,i=parseInt(r,10);!isNaN(i)&&o!==r&&String(i)===r&&i>=0?(l=[],l[i]=Xn(t)):l[r]=t}t=l}return t}function di(s={},e=""){return Object.entries(s).map(([t,n])=>typeof n=="object"?di(n,e?e+`[${t}]`:t):[e+`[${t}]`,n].join("=")).join("&")}const Gc=pi(s=>typeof s=="string"?new String(s):s),Zc=pi(s=>(typeof s!="string"&&(s=Kc(s.params)),Object.assign(new String(s),{params:Uc(s)})));function pi(s){return e=>{const{subscribe:t,update:n,set:o}=yn(s(e));return{subscribe:t,update:l=>n(r=>s(l(r))),set:l=>o(s(l))}}}const mi=Fc(),hi=ko().search,gi=ko().hash;let so=!0,ol=!1;const To=Gc(mi),xo=Zc(hi),_i=yn(gi,s=>{const e=()=>es?$i(location.hash):s(location.hash);return Ns&&Bn.sideEffect&&window.addEventListener("hashchange",e),()=>Ns&&Bn.sideEffect&&window.removeEventListener("hashchange",e)}),bi=yn({}),Xc=vo([To,xo,_i],([s,e,t],n)=>{let o=!1;return bo().then(()=>{o||n(s.toString()+e.toString()+t.toString())}),()=>o=!0},mi+hi+gi);vo(To,s=>(e="*",t)=>{const n=jc(s.toString(),e,t);return n&&Object.assign(s,{params:n}),!!n});Ns&&(Xc.subscribe(s=>{if(Bn.sideEffect){if(so)return so=!1;history[ol?"replaceState":"pushState"]({},null,zc(s)),ol=!1}}),bi.subscribe(s=>{Bn.sideEffect&&history.replaceState(s,null,location.pathname+location.search+location.hash)}),window.addEventListener("popstate",s=>{Bn.sideEffect&&(so=!0,$i(location.href,s.state))}));function $i(s="",e){const{pathname:t,search:n,hash:o}=new URL(Hc(s),"file:");To.set(t),bo().then(()=>{xo.set(n),_i.set(o),e&&bi.set(e)})}const gt=""+new URL("npm-logo-185f97d3.svg",import.meta.url).href;const{document:ll}=un;function Qc(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O,I,L,F,z,U,Z,Y,re,oe,H,W,X,fe,_e,ge,Ce,Ue,Re,Se,ce,Me,ie,$e,ae,ve,Oe,Ae,Ne,pt,mt,de,et,qe,xe,lt,at,$t,rt,q,Q,ue,G,be,De,Pe,tt,Bt,vt,Ft,dn,Kn,pn,ns,ss,Rt,Qt,Yt,Ct,Mt,Cn,Jt,mn,os,Nn,ls;return ll.title=e=document.title.replace(/(•).*$/,"$1 Home"),{c(){t=x(),n=_("section"),o=_("h1"),o.textContent="Packages",l=x(),r=_("div"),i=_("div"),a=_("div"),a.innerHTML='<a href="?c=tabs">@apsc/tabs</a>',c=x(),u=_("a"),f=_("img"),m=x(),g=_("div"),g.textContent="A set of components for organizing a tabbed interface",b=x(),$=_("div"),T=_("div"),T.innerHTML='<a href="?c=glob-notify">@apsc/glob-notify</a>',E=x(),D=_("a"),C=_("img"),O=x(),I=_("div"),I.textContent="Component for notifications globally for the entire application",L=x(),F=_("div"),z=_("div"),z.innerHTML='<a href="?c=color">@apsc/color</a>',U=x(),Z=_("a"),Y=_("img"),oe=x(),H=_("div"),H.textContent="A set of components for picking and editing colors",W=x(),X=_("div"),fe=_("div"),_e=_("div"),_e.innerHTML='<a href="?c=floating-ui-action">@apsc/floating-ui-action</a>',ge=x(),Ce=_("a"),Ue=_("img"),Se=x(),ce=_("div"),Me=j("Floating UI (ex. Popper) action for directive "),ie=_("code"),$e=j("use"),ae=x(),ve=_("div"),Oe=_("div"),Oe.innerHTML='<a href="?c=focus-action">@apsc/focus-action</a>',Ae=x(),Ne=_("a"),pt=_("img"),de=x(),et=_("div"),qe=j("Action to control "),xe=_("code"),lt=j("focusin"),at=j(` and
        `),$t=_("code"),rt=j("focusout"),q=j(" for directive "),Q=_("code"),ue=j("use"),G=x(),be=_("div"),De=_("div"),De.innerHTML='<a href="?c=keyboard-shortcut-action">@apsc/keyboard-shortcut-action</a>',Pe=x(),tt=_("a"),Bt=_("img"),Ft=x(),dn=_("div"),Kn=j("Action to call a function by keyboard shortcut for Svelte directive "),pn=_("code"),ns=j("use"),ss=x(),Rt=_("div"),Qt=_("div"),Qt.innerHTML='<a href="?c=scroll-child-action">@apsc/scroll-child-action</a>',Yt=x(),Ct=_("a"),Mt=_("img"),Jt=x(),mn=_("div"),os=j("Action to scroll the child to parent viewport for Svelte directive "),Nn=_("code"),ls=j("use"),h(o,"class","font-bold my-4 pb-2 text-3xl border-b border-gray-400"),h(a,"class","pkg-tile__link svelte-1gf5keo"),ct(f.src,d=gt)||h(f,"src",d),h(f,"alt","NPM logo"),h(f,"class","svelte-1gf5keo"),h(u,"class","pkg-tile__npm svelte-1gf5keo"),h(u,"href","https://www.npmjs.com/package/@apsc/tabs"),h(u,"target","_blank"),h(u,"rel","noreferrer"),h(g,"class","pkg-tile__description svelte-1gf5keo"),h(i,"class","pkg-tile svelte-1gf5keo"),h(T,"class","pkg-tile__link svelte-1gf5keo"),ct(C.src,M=gt)||h(C,"src",M),h(C,"alt","NPM logo"),h(C,"class","svelte-1gf5keo"),h(D,"class","pkg-tile__npm svelte-1gf5keo"),h(D,"href","https://www.npmjs.com/package/@apsc/glob-notify"),h(D,"target","_blank"),h(D,"rel","noreferrer"),h(I,"class","pkg-tile__description svelte-1gf5keo"),h($,"class","pkg-tile svelte-1gf5keo"),h(z,"class","pkg-tile__link svelte-1gf5keo"),ct(Y.src,re=gt)||h(Y,"src",re),h(Y,"alt","NPM logo"),h(Y,"class","svelte-1gf5keo"),h(Z,"class","pkg-tile__npm svelte-1gf5keo"),h(Z,"href","https://www.npmjs.com/package/@apsc/color"),h(Z,"target","_blank"),h(Z,"rel","noreferrer"),h(H,"class","pkg-tile__description svelte-1gf5keo"),h(F,"class","pkg-tile svelte-1gf5keo"),h(r,"class","flex flex-wrap gap-6 mb-12"),h(_e,"class","pkg-tile__link svelte-1gf5keo"),ct(Ue.src,Re=gt)||h(Ue,"src",Re),h(Ue,"alt","NPM logo"),h(Ue,"class","svelte-1gf5keo"),h(Ce,"class","pkg-tile__npm svelte-1gf5keo"),h(Ce,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),h(Ce,"target","_blank"),h(Ce,"rel","noreferrer"),h(ie,"class",Rn(s[0].code)+" svelte-1gf5keo"),h(ce,"class","pkg-tile__description svelte-1gf5keo"),h(fe,"class","pkg-tile svelte-1gf5keo"),h(Oe,"class","pkg-tile__link svelte-1gf5keo"),ct(pt.src,mt=gt)||h(pt,"src",mt),h(pt,"alt","NPM logo"),h(pt,"class","svelte-1gf5keo"),h(Ne,"class","pkg-tile__npm svelte-1gf5keo"),h(Ne,"href","https://www.npmjs.com/package/@apsc/focus-action"),h(Ne,"target","_blank"),h(Ne,"rel","noreferrer"),h(xe,"class",Rn(s[0].code)+" svelte-1gf5keo"),h($t,"class",Rn(s[0].code)+" svelte-1gf5keo"),h(Q,"class",Rn(s[0].code)+" svelte-1gf5keo"),h(et,"class","pkg-tile__description svelte-1gf5keo"),h(ve,"class","pkg-tile svelte-1gf5keo"),h(De,"class","pkg-tile__link svelte-1gf5keo"),ct(Bt.src,vt=gt)||h(Bt,"src",vt),h(Bt,"alt","NPM logo"),h(Bt,"class","svelte-1gf5keo"),h(tt,"class","pkg-tile__npm svelte-1gf5keo"),h(tt,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),h(tt,"target","_blank"),h(tt,"rel","noreferrer"),h(pn,"class",Rn(s[0].code)+" svelte-1gf5keo"),h(dn,"class","pkg-tile__description svelte-1gf5keo"),h(be,"class","pkg-tile svelte-1gf5keo"),h(Qt,"class","pkg-tile__link svelte-1gf5keo"),ct(Mt.src,Cn=gt)||h(Mt,"src",Cn),h(Mt,"alt","NPM logo"),h(Mt,"class","svelte-1gf5keo"),h(Ct,"class","pkg-tile__npm svelte-1gf5keo"),h(Ct,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),h(Ct,"target","_blank"),h(Ct,"rel","noreferrer"),h(Nn,"class",Rn(s[0].code)+" svelte-1gf5keo"),h(mn,"class","pkg-tile__description svelte-1gf5keo"),h(Rt,"class","pkg-tile svelte-1gf5keo"),h(X,"class","flex flex-wrap gap-6 mb-12")},m(Vt,zt){k(Vt,t,zt),k(Vt,n,zt),p(n,o),p(n,l),p(n,r),p(r,i),p(i,a),p(i,c),p(i,u),p(u,f),p(i,m),p(i,g),p(r,b),p(r,$),p($,T),p($,E),p($,D),p(D,C),p($,O),p($,I),p(r,L),p(r,F),p(F,z),p(F,U),p(F,Z),p(Z,Y),p(F,oe),p(F,H),p(n,W),p(n,X),p(X,fe),p(fe,_e),p(fe,ge),p(fe,Ce),p(Ce,Ue),p(fe,Se),p(fe,ce),p(ce,Me),p(ce,ie),p(ie,$e),p(X,ae),p(X,ve),p(ve,Oe),p(ve,Ae),p(ve,Ne),p(Ne,pt),p(ve,de),p(ve,et),p(et,qe),p(et,xe),p(xe,lt),p(et,at),p(et,$t),p($t,rt),p(et,q),p(et,Q),p(Q,ue),p(X,G),p(X,be),p(be,De),p(be,Pe),p(be,tt),p(tt,Bt),p(be,Ft),p(be,dn),p(dn,Kn),p(dn,pn),p(pn,ns),p(X,ss),p(X,Rt),p(Rt,Qt),p(Rt,Yt),p(Rt,Ct),p(Ct,Mt),p(Rt,Jt),p(Rt,mn),p(mn,os),p(mn,Nn),p(Nn,ls)},p(Vt,[zt]){zt&0&&e!==(e=document.title.replace(/(•).*$/,"$1 Home"))&&(ll.title=e)},i:le,o:le,d(Vt){Vt&&w(t),Vt&&w(n)}}}function Yc(s){return[{code:"bg-gray-200 px-1 rounded-sm"}]}class Jc extends te{constructor(e){super(),ee(this,e,Yc,Qc,V,{})}}const So=Symbol("TABS");function Vc({mode:s,tabs:e,selectedTab:t,panels:n,selectedPanel:o,selectedTabClass:l,hiddenPanelClass:r}){const i=vo(t,a=>e.indexOf(a!=null?a:Symbol()));return{mode:s,registerTab:()=>{const a=Symbol("tab");return e.push(a),t.update(c=>c!=null?c:a),ao(()=>{const c=e.indexOf(a);c>=0&&(e.splice(c,1),t.update(u=>u===a?e[c]||e[e.length-1]:u))}),a},registerPanel:()=>{const a=Symbol("panel");return n.push(a),o.update(c=>c!=null?c:a),ao(()=>{const c=n.indexOf(a);c>=0&&(n.splice(c,1),o.update(u=>u===a?n[c]||n[n.length-1]:u))}),a},selectTab:a=>{var u;let c;typeof a=="number"?c=e.indexOf((u=e.at(a))!=null?u:Symbol()):c=e.indexOf(a),c>=0&&c<e.length&&(t.set(e[c]),o.set(n[c]))},selectedTab:t,selectedPanel:o,selectedIndex:i,selectedTabClass:l,hiddenPanelClass:r}}function eu(s){let e,t,n;const o=s[7].default,l=Be(o,s,s[6],null);return{c(){e=_("div"),l&&l.c(),h(e,"class",t="c-tabs"+(s[0]?" "+s[0]:""))},m(r,i){k(r,e,i),l&&l.m(e,null),n=!0},p(r,[i]){l&&l.p&&(!n||i&64)&&ze(l,o,r,r[6],n?Fe(o,r[6],i,null):He(r[6]),null),(!n||i&1&&t!==(t="c-tabs"+(r[0]?" "+r[0]:"")))&&h(e,"class",t)},i(r){n||(y(l,r),n=!0)},o(r){S(l,r),n=!1},d(r){r&&w(e),l&&l.d(r)}}}function tu(s,e,t){let{$$slots:n={},$$scope:o}=e,{class:l=""}=e,{selectedTabClass:r="active"}=e,{hiddenPanelClass:i=""}=e,{mode:a="hide"}=e;const c=[],u=[],f=yn(null),d=yn(null),m=Vc({mode:a,tabs:c,panels:u,selectedTab:f,selectedPanel:d,selectedTabClass:r,hiddenPanelClass:i}),g=m.selectedIndex,b=m.selectTab;return oi(So,m),s.$$set=$=>{"class"in $&&t(0,l=$.class),"selectedTabClass"in $&&t(1,r=$.selectedTabClass),"hiddenPanelClass"in $&&t(2,i=$.hiddenPanelClass),"mode"in $&&t(3,a=$.mode),"$$scope"in $&&t(6,o=$.$$scope)},[l,r,i,a,g,b,o,n]}class yt extends te{constructor(e){super(),ee(this,e,tu,eu,V,{class:0,selectedTabClass:1,hiddenPanelClass:2,mode:3,selectedIndex:4,selectTab:5})}get selectedIndex(){return this.$$.ctx[4]}get selectTab(){return this.$$.ctx[5]}}function nu(s){let e,t,n;const o=s[2].default,l=Be(o,s,s[1],null);return{c(){e=_("div"),l&&l.c(),h(e,"class",t="c-tabs__tablist"+(s[0]?" "+s[0]:""))},m(r,i){k(r,e,i),l&&l.m(e,null),n=!0},p(r,[i]){l&&l.p&&(!n||i&2)&&ze(l,o,r,r[1],n?Fe(o,r[1],i,null):He(r[1]),null),(!n||i&1&&t!==(t="c-tabs__tablist"+(r[0]?" "+r[0]:"")))&&h(e,"class",t)},i(r){n||(y(l,r),n=!0)},o(r){S(l,r),n=!1},d(r){r&&w(e),l&&l.d(r)}}}function su(s,e,t){let{$$slots:n={},$$scope:o}=e,{class:l=""}=e;return s.$$set=r=>{"class"in r&&t(0,l=r.class),"$$scope"in r&&t(1,o=r.$$scope)},[l,o,n]}let Tt=class extends te{constructor(e){super(),ee(this,e,su,nu,V,{class:0})}};const ou=s=>({index:s&32,tabId:s&64,isActive:s&2}),rl=s=>({index:s[5],tabId:s[6],panelId:s[10],isActive:s[1]===s[10]});function il(s){let e,t,n;const o=s[13].default,l=Be(o,s,s[12],rl);return{c(){e=_("div"),l&&l.c(),h(e,"class",t=["c-tabs__tabpanel",s[0],s[2]].filter(al).join(" ")),h(e,"style",s[3])},m(r,i){k(r,e,i),l&&l.m(e,null),n=!0},p(r,i){l&&l.p&&(!n||i&4194)&&ze(l,o,r,r[12],n?Fe(o,r[12],i,ou):He(r[12]),rl),(!n||i&5&&t!==(t=["c-tabs__tabpanel",r[0],r[2]].filter(al).join(" ")))&&h(e,"class",t),(!n||i&8)&&h(e,"style",r[3])},i(r){n||(y(l,r),n=!0)},o(r){S(l,r),n=!1},d(r){r&&w(e),l&&l.d(r)}}}function lu(s){let e,t,n=!s[4]&&il(s);return{c(){n&&n.c(),e=Le()},m(o,l){n&&n.m(o,l),k(o,e,l),t=!0},p(o,[l]){o[4]?n&&(ye(),S(n,1,1,()=>{n=null}),Te()):n?(n.p(o,l),l&16&&y(n,1)):(n=il(o),n.c(),y(n,1),n.m(e.parentNode,e))},i(o){t||(y(n),t=!0)},o(o){S(n),t=!1},d(o){n&&n.d(o),o&&w(e)}}}const al=s=>!!s;function ru(s,e,t){let n,o,l,{$$slots:r={},$$scope:i}=e,{class:a=""}=e;const{mode:c,registerPanel:u,selectedPanel:f,selectedTab:d,selectedIndex:m,hiddenPanelClass:g}=_o(So);vn(s,f,C=>t(1,n=C)),vn(s,d,C=>t(6,l=C)),vn(s,m,C=>t(5,o=C));let{hiddenClass:b=g}=e;const $=u();let T="",E,D=!0;return s.$$set=C=>{"class"in C&&t(0,a=C.class),"hiddenClass"in C&&t(11,b=C.hiddenClass),"$$scope"in C&&t(12,i=C.$$scope)},s.$$.update=()=>{s.$$.dirty&2050&&function(C){C?(t(4,D=!1),t(3,E=void 0),t(2,T="")):c!=="hide"?(t(4,D=!0),t(3,E=void 0),t(2,T="")):(t(4,D=!1),b?(t(3,E=void 0),t(2,T=b)):(t(3,E="display: none"),t(2,T="")))}(n===$)},[a,n,T,E,D,o,l,f,d,m,$,b,i,r]}class we extends te{constructor(e){super(),ee(this,e,ru,lu,V,{class:0,hiddenClass:11})}}const iu=s=>({index:s&16,isActive:s&8}),cl=s=>({index:s[4],id:s[8],isActive:s[3]===s[8]});function au(s){let e,t,n,o,l;const r=s[10].default,i=Be(r,s,s[9],cl);return{c(){e=_("button"),i&&i.c(),h(e,"class",t=["c-tabs__tab",s[0],s[3]===s[8]?s[1]:""].filter(ul).join(" ")),e.disabled=s[2]},m(a,c){k(a,e,c),i&&i.m(e,null),n=!0,o||(l=J(e,"click",s[11]),o=!0)},p(a,[c]){i&&i.p&&(!n||c&536)&&ze(i,r,a,a[9],n?Fe(r,a[9],c,iu):He(a[9]),cl),(!n||c&11&&t!==(t=["c-tabs__tab",a[0],a[3]===a[8]?a[1]:""].filter(ul).join(" ")))&&h(e,"class",t),(!n||c&4)&&(e.disabled=a[2])},i(a){n||(y(i,a),n=!0)},o(a){S(i,a),n=!1},d(a){a&&w(e),i&&i.d(a),o=!1,l()}}}const ul=s=>!!s;function cu(s,e,t){let n,o,{$$slots:l={},$$scope:r}=e,{class:i=""}=e;const{registerTab:a,selectTab:c,selectedTab:u,selectedIndex:f,selectedTabClass:d}=_o(So);vn(s,u,T=>t(3,n=T)),vn(s,f,T=>t(4,o=T));let{selectedClass:m=d}=e,{disabled:g=void 0}=e;const b=a(),$=()=>c(b);return s.$$set=T=>{"class"in T&&t(0,i=T.class),"selectedClass"in T&&t(1,m=T.selectedClass),"disabled"in T&&t(2,g=T.disabled),"$$scope"in T&&t(9,r=T.$$scope)},[i,m,g,n,o,c,u,f,b,r,l,$]}class ke extends te{constructor(e){super(),ee(this,e,cu,au,V,{class:0,selectedClass:1,disabled:2})}}const uu=`<div class="component__source">Source <code>Tabs.svelte</code></div>
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
<td class="slot__props"><code>{ index: number; tabId: symbol; id: symbol; isActive: boolean }</code></td></tr></table>`;function fu(){const s=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||s(e)},Hn(()=>{console.warn=s})}function fl(s,e,t){const n=s.slice();return n[18]=e[t],n}function dl(s,e,t){const n=s.slice();return n[18]=e[t],n}function pl(s,e,t){const n=s.slice();return n[10]=e[t],n}function ml(s,e,t){const n=s.slice();return n[13]=e[t],n[15]=t,n}function hl(s,e,t){const n=s.slice();return n[16]=e[t],n[15]=t,n}function gl(s,e,t){const n=s.slice();return n[7]=e[t],n}function du(s){let e,t,n,o;const l=[gu,hu,mu],r=[];function i(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Le()},m(a,c){r[e].m(a,c),k(a,n,c),o=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(ye(),S(r[u],1,1,()=>{r[u]=null}),Te(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),y(t,1),t.m(n.parentNode,n))},i(a){o||(y(t),o=!0)},o(a){S(t),o=!1},d(a){r[e].d(a),a&&w(n)}}}function pu(s){let e,t,n=s[1],o=[];for(let r=0;r<n.length;r+=1)o[r]=kl(gl(s,n,r));const l=r=>S(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Le()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);k(r,e,i),t=!0},p(r,i){if(i&34){n=r[1];let a;for(a=0;a<n.length;a+=1){const c=gl(r,n,a);o[a]?(o[a].p(c,i),y(o[a],1)):(o[a]=kl(c),o[a].c(),y(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=n.length;a<o.length;a+=1)l(a);Te()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)y(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)S(o[i]);t=!1},d(r){Ye(o,r),r&&w(e)}}}function mu(s){let e,t,n;const o=[s[6]];var l=s[5][s[0]];function r(i){let a={$$slots:{default:[$u]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=Et(a,o[c]);return{props:a}}return l&&(e=Ge(l,r(s))),{c(){e&&R(e.$$.fragment),t=Le()},m(i,a){e&&N(e,i,a),k(i,t,a),n=!0},p(i,a){const c=a&64?xn(o,[jn(i[6])]):{};if(a&8388706&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5][i[0]])){if(e){ye();const u=e;S(u.$$.fragment,1,0,()=>{P(u,1)}),Te()}l?(e=Ge(l,r(i)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){n||(e&&y(e.$$.fragment,i),n=!0)},o(i){e&&S(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&P(e,i)}}}function hu(s){let e,t,n,o;const l=[wu,vu],r=[];function i(a,c){return a[4]?0:1}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Le()},m(a,c){r[e].m(a,c),k(a,n,c),o=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(ye(),S(r[u],1,1,()=>{r[u]=null}),Te(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),y(t,1),t.m(n.parentNode,n))},i(a){o||(y(t),o=!0)},o(a){S(t),o=!1},d(a){r[e].d(a),a&&w(n)}}}function gu(s){let e,t,n;var o=s[5].table;function l(r){return{props:{$$slots:{default:[Ru]},$$scope:{ctx:r}}}}return o&&(e=Ge(o,l(s))),{c(){e&&R(e.$$.fragment),t=Le()},m(r,i){e&&N(e,r,i),k(r,t,i),n=!0},p(r,i){const a={};if(i&8388716&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].table)){if(e){ye();const c=e;S(c.$$.fragment,1,0,()=>{P(c,1)}),Te()}o?(e=Ge(o,l(r)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){n||(e&&y(e.$$.fragment,r),n=!0)},o(r){e&&S(e.$$.fragment,r),n=!1},d(r){r&&w(t),e&&P(e,r)}}}function _u(s){let e=s[6].raw+"",t;return{c(){t=j(e)},m(n,o){k(n,t,o)},p(n,o){o&64&&e!==(e=n[6].raw+"")&&Ie(t,e)},i:le,o:le,d(n){n&&w(t)}}}function bu(s){let e,t;return e=new Sn({props:{tokens:s[1],renderers:s[5]}}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},p(n,o){const l={};o&2&&(l.tokens=n[1]),o&32&&(l.renderers=n[5]),e.$set(l)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function $u(s){let e,t,n,o;const l=[bu,_u],r=[];function i(a,c){return a[1]?0:1}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Le()},m(a,c){r[e].m(a,c),k(a,n,c),o=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(ye(),S(r[u],1,1,()=>{r[u]=null}),Te(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),y(t,1),t.m(n.parentNode,n))},i(a){o||(y(t),o=!0)},o(a){S(t),o=!1},d(a){r[e].d(a),a&&w(n)}}}function vu(s){let e,t,n;const o=[{ordered:s[4]},s[6]];var l=s[5].list;function r(i){let a={$$slots:{default:[yu]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=Et(a,o[c]);return{props:a}}return l&&(e=Ge(l,r(s))),{c(){e&&R(e.$$.fragment),t=Le()},m(i,a){e&&N(e,i,a),k(i,t,a),n=!0},p(i,a){const c=a&80?xn(o,[a&16&&{ordered:i[4]},a&64&&jn(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].list)){if(e){ye();const u=e;S(u.$$.fragment,1,0,()=>{P(u,1)}),Te()}l?(e=Ge(l,r(i)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){n||(e&&y(e.$$.fragment,i),n=!0)},o(i){e&&S(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&P(e,i)}}}function wu(s){let e,t,n;const o=[{ordered:s[4]},s[6]];var l=s[5].list;function r(i){let a={$$slots:{default:[xu]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=Et(a,o[c]);return{props:a}}return l&&(e=Ge(l,r(s))),{c(){e&&R(e.$$.fragment),t=Le()},m(i,a){e&&N(e,i,a),k(i,t,a),n=!0},p(i,a){const c=a&80?xn(o,[a&16&&{ordered:i[4]},a&64&&jn(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].list)){if(e){ye();const u=e;S(u.$$.fragment,1,0,()=>{P(u,1)}),Te()}l?(e=Ge(l,r(i)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){n||(e&&y(e.$$.fragment,i),n=!0)},o(i){e&&S(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&P(e,i)}}}function ku(s){let e,t,n;return e=new Sn({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){R(e.$$.fragment),t=x()},m(o,l){N(e,o,l),k(o,t,l),n=!0},p(o,l){const r={};l&64&&(r.tokens=o[18].tokens),l&32&&(r.renderers=o[5]),e.$set(r)},i(o){n||(y(e.$$.fragment,o),n=!0)},o(o){S(e.$$.fragment,o),n=!1},d(o){P(e,o),o&&w(t)}}}function _l(s){let e,t,n;const o=[s[18]];var l=s[5].unorderedlistitem||s[5].listitem;function r(i){let a={$$slots:{default:[ku]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=Et(a,o[c]);return{props:a}}return l&&(e=Ge(l,r(s))),{c(){e&&R(e.$$.fragment),t=Le()},m(i,a){e&&N(e,i,a),k(i,t,a),n=!0},p(i,a){const c=a&64?xn(o,[jn(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].unorderedlistitem||i[5].listitem)){if(e){ye();const u=e;S(u.$$.fragment,1,0,()=>{P(u,1)}),Te()}l?(e=Ge(l,r(i)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){n||(e&&y(e.$$.fragment,i),n=!0)},o(i){e&&S(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&P(e,i)}}}function yu(s){let e,t,n=s[6].items,o=[];for(let r=0;r<n.length;r+=1)o[r]=_l(fl(s,n,r));const l=r=>S(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Le()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);k(r,e,i),t=!0},p(r,i){if(i&96){n=r[6].items;let a;for(a=0;a<n.length;a+=1){const c=fl(r,n,a);o[a]?(o[a].p(c,i),y(o[a],1)):(o[a]=_l(c),o[a].c(),y(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=n.length;a<o.length;a+=1)l(a);Te()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)y(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)S(o[i]);t=!1},d(r){Ye(o,r),r&&w(e)}}}function Tu(s){let e,t,n;return e=new Sn({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){R(e.$$.fragment),t=x()},m(o,l){N(e,o,l),k(o,t,l),n=!0},p(o,l){const r={};l&64&&(r.tokens=o[18].tokens),l&32&&(r.renderers=o[5]),e.$set(r)},i(o){n||(y(e.$$.fragment,o),n=!0)},o(o){S(e.$$.fragment,o),n=!1},d(o){P(e,o),o&&w(t)}}}function bl(s){let e,t,n;const o=[s[18]];var l=s[5].orderedlistitem||s[5].listitem;function r(i){let a={$$slots:{default:[Tu]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=Et(a,o[c]);return{props:a}}return l&&(e=Ge(l,r(s))),{c(){e&&R(e.$$.fragment),t=Le()},m(i,a){e&&N(e,i,a),k(i,t,a),n=!0},p(i,a){const c=a&64?xn(o,[jn(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].orderedlistitem||i[5].listitem)){if(e){ye();const u=e;S(u.$$.fragment,1,0,()=>{P(u,1)}),Te()}l?(e=Ge(l,r(i)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){n||(e&&y(e.$$.fragment,i),n=!0)},o(i){e&&S(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&P(e,i)}}}function xu(s){let e,t,n=s[6].items,o=[];for(let r=0;r<n.length;r+=1)o[r]=bl(dl(s,n,r));const l=r=>S(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Le()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);k(r,e,i),t=!0},p(r,i){if(i&96){n=r[6].items;let a;for(a=0;a<n.length;a+=1){const c=dl(r,n,a);o[a]?(o[a].p(c,i),y(o[a],1)):(o[a]=bl(c),o[a].c(),y(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=n.length;a<o.length;a+=1)l(a);Te()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)y(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)S(o[i]);t=!1},d(r){Ye(o,r),r&&w(e)}}}function Su(s){let e,t,n;return e=new Sn({props:{tokens:s[16].tokens,renderers:s[5]}}),{c(){R(e.$$.fragment),t=x()},m(o,l){N(e,o,l),k(o,t,l),n=!0},p(o,l){const r={};l&4&&(r.tokens=o[16].tokens),l&32&&(r.renderers=o[5]),e.$set(r)},i(o){n||(y(e.$$.fragment,o),n=!0)},o(o){S(e.$$.fragment,o),n=!1},d(o){P(e,o),o&&w(t)}}}function $l(s){let e,t,n;var o=s[5].tablecell;function l(r){return{props:{header:!0,align:r[6].align[r[15]]||"center",$$slots:{default:[Su]},$$scope:{ctx:r}}}}return o&&(e=Ge(o,l(s))),{c(){e&&R(e.$$.fragment),t=Le()},m(r,i){e&&N(e,r,i),k(r,t,i),n=!0},p(r,i){const a={};if(i&64&&(a.align=r[6].align[r[15]]||"center"),i&8388644&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablecell)){if(e){ye();const c=e;S(c.$$.fragment,1,0,()=>{P(c,1)}),Te()}o?(e=Ge(o,l(r)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){n||(e&&y(e.$$.fragment,r),n=!0)},o(r){e&&S(e.$$.fragment,r),n=!1},d(r){r&&w(t),e&&P(e,r)}}}function Eu(s){let e,t,n=s[2],o=[];for(let r=0;r<n.length;r+=1)o[r]=$l(hl(s,n,r));const l=r=>S(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Le()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);k(r,e,i),t=!0},p(r,i){if(i&100){n=r[2];let a;for(a=0;a<n.length;a+=1){const c=hl(r,n,a);o[a]?(o[a].p(c,i),y(o[a],1)):(o[a]=$l(c),o[a].c(),y(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=n.length;a<o.length;a+=1)l(a);Te()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)y(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)S(o[i]);t=!1},d(r){Ye(o,r),r&&w(e)}}}function Au(s){let e,t,n;var o=s[5].tablerow;function l(r){return{props:{$$slots:{default:[Eu]},$$scope:{ctx:r}}}}return o&&(e=Ge(o,l(s))),{c(){e&&R(e.$$.fragment),t=Le()},m(r,i){e&&N(e,r,i),k(r,t,i),n=!0},p(r,i){const a={};if(i&8388708&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablerow)){if(e){ye();const c=e;S(c.$$.fragment,1,0,()=>{P(c,1)}),Te()}o?(e=Ge(o,l(r)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){n||(e&&y(e.$$.fragment,r),n=!0)},o(r){e&&S(e.$$.fragment,r),n=!1},d(r){r&&w(t),e&&P(e,r)}}}function Cu(s){let e,t;return e=new Sn({props:{tokens:s[13].tokens,renderers:s[5]}}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},p(n,o){const l={};o&8&&(l.tokens=n[13].tokens),o&32&&(l.renderers=n[5]),e.$set(l)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function vl(s){let e,t,n;var o=s[5].tablecell;function l(r){return{props:{header:!1,align:r[6].align[r[15]]||"center",$$slots:{default:[Cu]},$$scope:{ctx:r}}}}return o&&(e=Ge(o,l(s))),{c(){e&&R(e.$$.fragment),t=Le()},m(r,i){e&&N(e,r,i),k(r,t,i),n=!0},p(r,i){const a={};if(i&64&&(a.align=r[6].align[r[15]]||"center"),i&8388648&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablecell)){if(e){ye();const c=e;S(c.$$.fragment,1,0,()=>{P(c,1)}),Te()}o?(e=Ge(o,l(r)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){n||(e&&y(e.$$.fragment,r),n=!0)},o(r){e&&S(e.$$.fragment,r),n=!1},d(r){r&&w(t),e&&P(e,r)}}}function Nu(s){let e,t,n=s[10],o=[];for(let r=0;r<n.length;r+=1)o[r]=vl(ml(s,n,r));const l=r=>S(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=x()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);k(r,e,i),t=!0},p(r,i){if(i&104){n=r[10];let a;for(a=0;a<n.length;a+=1){const c=ml(r,n,a);o[a]?(o[a].p(c,i),y(o[a],1)):(o[a]=vl(c),o[a].c(),y(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=n.length;a<o.length;a+=1)l(a);Te()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)y(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)S(o[i]);t=!1},d(r){Ye(o,r),r&&w(e)}}}function wl(s){let e,t,n;var o=s[5].tablerow;function l(r){return{props:{$$slots:{default:[Nu]},$$scope:{ctx:r}}}}return o&&(e=Ge(o,l(s))),{c(){e&&R(e.$$.fragment),t=Le()},m(r,i){e&&N(e,r,i),k(r,t,i),n=!0},p(r,i){const a={};if(i&8388712&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablerow)){if(e){ye();const c=e;S(c.$$.fragment,1,0,()=>{P(c,1)}),Te()}o?(e=Ge(o,l(r)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){n||(e&&y(e.$$.fragment,r),n=!0)},o(r){e&&S(e.$$.fragment,r),n=!1},d(r){r&&w(t),e&&P(e,r)}}}function Pu(s){let e,t,n=s[3],o=[];for(let r=0;r<n.length;r+=1)o[r]=wl(pl(s,n,r));const l=r=>S(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Le()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);k(r,e,i),t=!0},p(r,i){if(i&104){n=r[3];let a;for(a=0;a<n.length;a+=1){const c=pl(r,n,a);o[a]?(o[a].p(c,i),y(o[a],1)):(o[a]=wl(c),o[a].c(),y(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=n.length;a<o.length;a+=1)l(a);Te()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)y(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)S(o[i]);t=!1},d(r){Ye(o,r),r&&w(e)}}}function Ru(s){let e,t,n,o,l;var r=s[5].tablehead;function i(u){return{props:{$$slots:{default:[Au]},$$scope:{ctx:u}}}}r&&(e=Ge(r,i(s)));var a=s[5].tablebody;function c(u){return{props:{$$slots:{default:[Pu]},$$scope:{ctx:u}}}}return a&&(n=Ge(a,c(s))),{c(){e&&R(e.$$.fragment),t=x(),n&&R(n.$$.fragment),o=Le()},m(u,f){e&&N(e,u,f),k(u,t,f),n&&N(n,u,f),k(u,o,f),l=!0},p(u,f){const d={};if(f&8388708&&(d.$$scope={dirty:f,ctx:u}),r!==(r=u[5].tablehead)){if(e){ye();const g=e;S(g.$$.fragment,1,0,()=>{P(g,1)}),Te()}r?(e=Ge(r,i(u)),R(e.$$.fragment),y(e.$$.fragment,1),N(e,t.parentNode,t)):e=null}else r&&e.$set(d);const m={};if(f&8388712&&(m.$$scope={dirty:f,ctx:u}),a!==(a=u[5].tablebody)){if(n){ye();const g=n;S(g.$$.fragment,1,0,()=>{P(g,1)}),Te()}a?(n=Ge(a,c(u)),R(n.$$.fragment),y(n.$$.fragment,1),N(n,o.parentNode,o)):n=null}else a&&n.$set(m)},i(u){l||(e&&y(e.$$.fragment,u),n&&y(n.$$.fragment,u),l=!0)},o(u){e&&S(e.$$.fragment,u),n&&S(n.$$.fragment,u),l=!1},d(u){e&&P(e,u),u&&w(t),u&&w(o),n&&P(n,u)}}}function kl(s){let e,t;const n=[s[7],{renderers:s[5]}];let o={};for(let l=0;l<n.length;l+=1)o=Et(o,n[l]);return e=new Sn({props:o}),{c(){R(e.$$.fragment)},m(l,r){N(e,l,r),t=!0},p(l,r){const i=r&34?xn(n,[r&2&&jn(l[7]),r&32&&{renderers:l[5]}]):{};e.$set(i)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Mu(s){let e,t,n,o;const l=[pu,du],r=[];function i(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=i(s))&&(t=r[e]=l[e](s)),{c(){t&&t.c(),n=Le()},m(a,c){~e&&r[e].m(a,c),k(a,n,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?~e&&r[e].p(a,c):(t&&(ye(),S(r[u],1,1,()=>{r[u]=null}),Te()),~e?(t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),y(t,1),t.m(n.parentNode,n)):t=null)},i(a){o||(y(t),o=!0)},o(a){S(t),o=!1},d(a){~e&&r[e].d(a),a&&w(n)}}}function Ou(s,e,t){const n=["type","tokens","header","rows","ordered","renderers"];let o=Ss(e,n),{type:l=void 0}=e,{tokens:r=void 0}=e,{header:i=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return fu(),s.$$set=f=>{e=Et(Et({},e),Jr(f)),t(6,o=Ss(e,n)),"type"in f&&t(0,l=f.type),"tokens"in f&&t(1,r=f.tokens),"header"in f&&t(2,i=f.header),"rows"in f&&t(3,a=f.rows),"ordered"in f&&t(4,c=f.ordered),"renderers"in f&&t(5,u=f.renderers)},[l,r,i,a,c,u,o]}let Sn=class extends te{constructor(e){super(),ee(this,e,Ou,Mu,V,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}};function vi(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Un=vi();function Iu(s){Un=s}const wi=/[&<>"']/,Lu=new RegExp(wi.source,"g"),ki=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Du=new RegExp(ki.source,"g"),Bu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},yl=s=>Bu[s];function it(s,e){if(e){if(wi.test(s))return s.replace(Lu,yl)}else if(ki.test(s))return s.replace(Du,yl);return s}const Fu=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function yi(s){return s.replace(Fu,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const zu=/(^|[^\[])\^/g;function Ke(s,e){s=typeof s=="string"?s:s.source,e=e||"";const t={replace:(n,o)=>(o=o.source||o,o=o.replace(zu,"$1"),s=s.replace(n,o),t),getRegex:()=>new RegExp(s,e)};return t}const Hu=/[^\w:]/g,ju=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Tl(s,e,t){if(s){let n;try{n=decodeURIComponent(yi(t)).replace(Hu,"").toLowerCase()}catch(o){return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!ju.test(t)&&(t=Wu(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(n){return null}return t}const bs={},Uu=/^[^:]+:\/*[^/]*$/,Ku=/^([^:]+:)[\s\S]*$/,qu=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Wu(s,e){bs[" "+s]||(Uu.test(s)?bs[" "+s]=s+"/":bs[" "+s]=Ts(s,"/",!0)),s=bs[" "+s];const t=s.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:s.replace(Ku,"$1")+e:e.charAt(0)==="/"?t?e:s.replace(qu,"$1")+e:s+e}const Ps={exec:function(){}};function Pt(s){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s}function xl(s,e){const t=s.replace(/\|/g,(l,r,i)=>{let a=!1,c=r;for(;--c>=0&&i[c]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let o=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;o<n.length;o++)n[o]=n[o].trim().replace(/\\\|/g,"|");return n}function Ts(s,e,t){const n=s.length;if(n===0)return"";let o=0;for(;o<n;){const l=s.charAt(n-o-1);if(l===e&&!t)o++;else if(l!==e&&t)o++;else break}return s.slice(0,n-o)}function Gu(s,e){if(s.indexOf(e[1])===-1)return-1;const t=s.length;let n=0,o=0;for(;o<t;o++)if(s[o]==="\\")o++;else if(s[o]===e[0])n++;else if(s[o]===e[1]&&(n--,n<0))return o;return-1}function Ti(s){s&&s.sanitize&&!s.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Sl(s,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=s),e>>=1,s+=s;return t+s}function El(s,e,t,n){const o=e.href,l=e.title?it(e.title):null,r=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){n.state.inLink=!0;const i={type:"link",raw:t,href:o,title:l,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,i}return{type:"image",raw:t,href:o,title:l,text:it(r)}}function Zu(s,e){const t=s.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(o=>{const l=o.match(/^\s+/);if(l===null)return o;const[r]=l;return r.length>=n.length?o.slice(n.length):o}).join(`
`)}class Eo{constructor(e){this.options=e||Un}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Ts(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],o=Zu(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:o}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const o=Ts(n,"#");(this.options.pedantic||!o||/ $/.test(o))&&(n=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,""),o=this.lexer.state.top;this.lexer.state.top=!0;const l=this.lexer.blockTokens(n);return this.lexer.state.top=o,{type:"blockquote",raw:t[0],tokens:l,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,o,l,r,i,a,c,u,f,d,m,g,b=t[1].trim();const $=b.length>1,T={type:"list",raw:"",ordered:$,start:$?+b.slice(0,-1):"",loose:!1,items:[]};b=$?`\\d{1,9}\\${b.slice(-1)}`:`\\${b}`,this.options.pedantic&&(b=$?b:"[*+-]");const E=new RegExp(`^( {0,3}${b})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,!(!(t=E.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,C=>" ".repeat(3*C.length)),f=e.split(`
`,1)[0],this.options.pedantic?(r=2,m=u.trimLeft()):(r=t[2].search(/[^ ]/),r=r>4?1:r,m=u.slice(r),r+=t[1].length),a=!1,!u&&/^ *$/.test(f)&&(n+=f+`
`,e=e.substring(f.length+1),g=!0),!g){const C=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),M=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),O=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),I=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],f=d,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(O.test(f)||I.test(f)||C.test(f)||M.test(e)));){if(f.search(/[^ ]/)>=r||!f.trim())m+=`
`+f.slice(r);else{if(a||u.search(/[^ ]/)>=4||O.test(u)||I.test(u)||M.test(u))break;m+=`
`+f}!a&&!f.trim()&&(a=!0),n+=d+`
`,e=e.substring(d.length+1),u=f.slice(r)}}T.loose||(c?T.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(m),o&&(l=o[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),T.items.push({type:"list_item",raw:n,task:!!o,checked:l,loose:!1,text:m}),T.raw+=n}T.items[T.items.length-1].raw=n.trimRight(),T.items[T.items.length-1].text=m.trimRight(),T.raw=T.raw.trimRight();const D=T.items.length;for(i=0;i<D;i++)if(this.lexer.state.top=!1,T.items[i].tokens=this.lexer.blockTokens(T.items[i].text,[]),!T.loose){const C=T.items[i].tokens.filter(O=>O.type==="space"),M=C.length>0&&C.some(O=>/\n.*\n/.test(O.raw));T.loose=M}if(T.loose)for(i=0;i<D;i++)T.items[i].loose=!0;return T}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const o=this.options.sanitizer?this.options.sanitizer(t[0]):it(t[0]);n.type="paragraph",n.text=o,n.tokens=this.lexer.inline(o)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",l=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:o,title:l}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:xl(t[1]).map(o=>({text:o})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let o=n.align.length,l,r,i,a;for(l=0;l<o;l++)/^ *-+: *$/.test(n.align[l])?n.align[l]="right":/^ *:-+: *$/.test(n.align[l])?n.align[l]="center":/^ *:-+ *$/.test(n.align[l])?n.align[l]="left":n.align[l]=null;for(o=n.rows.length,l=0;l<o;l++)n.rows[l]=xl(n.rows[l],n.header.length).map(c=>({text:c}));for(o=n.header.length,r=0;r<o;r++)n.header[r].tokens=this.lexer.inline(n.header[r].text);for(o=n.rows.length,r=0;r<o;r++)for(a=n.rows[r],i=0;i<a.length;i++)a[i].tokens=this.lexer.inline(a[i].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:it(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):it(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=Ts(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=Gu(t[2],"()");if(r>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let o=t[2],l="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);r&&(o=r[1],l=r[3])}else l=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(n)?o=o.slice(1):o=o.slice(1,-1)),El(t,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:l&&l.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let o=(n[2]||n[1]).replace(/\s+/g," ");if(o=t[o.toLowerCase()],!o){const l=n[0].charAt(0);return{type:"text",raw:l,text:l}}return El(n,o,n[0],this.lexer)}}emStrong(e,t,n=""){let o=this.rules.inline.emStrong.lDelim.exec(e);if(!o||o[3]&&n.match(/[\p{L}\p{N}]/u))return;const l=o[1]||o[2]||"";if(!l||l&&(n===""||this.rules.inline.punctuation.exec(n))){const r=o[0].length-1;let i,a,c=r,u=0;const f=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+r);(o=f.exec(t))!=null;){if(i=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!i)continue;if(a=i.length,o[3]||o[4]){c+=a;continue}else if((o[5]||o[6])&&r%3&&!((r+a)%3)){u+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+u);const d=e.slice(0,r+o.index+(o[0].length-i.length)+a);if(Math.min(r,a)%2){const g=d.slice(1,-1);return{type:"em",raw:d,text:g,tokens:this.lexer.inlineTokens(g)}}const m=d.slice(2,-2);return{type:"strong",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const o=/[^ ]/.test(n),l=/^ /.test(n)&&/ $/.test(n);return o&&l&&(n=n.substring(1,n.length-1)),n=it(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let o,l;return n[2]==="@"?(o=it(this.options.mangle?t(n[1]):n[1]),l="mailto:"+o):(o=it(n[1]),l=o),{type:"link",raw:n[0],text:o,href:l,tokens:[{type:"text",raw:o,text:o}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let o,l;if(n[2]==="@")o=it(this.options.mangle?t(n[0]):n[0]),l="mailto:"+o;else{let r;do r=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(r!==n[0]);o=it(n[0]),n[1]==="www."?l="http://"+n[0]:l=n[0]}return{type:"link",raw:n[0],text:o,href:l,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let o;return this.lexer.state.inRawBlock?o=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):it(n[0]):n[0]:o=it(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:o}}}}const me={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ps,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};me._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;me._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;me.def=Ke(me.def).replace("label",me._label).replace("title",me._title).getRegex();me.bullet=/(?:[*+-]|\d{1,9}[.)])/;me.listItemStart=Ke(/^( *)(bull) */).replace("bull",me.bullet).getRegex();me.list=Ke(me.list).replace(/bull/g,me.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+me.def.source+")").getRegex();me._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";me._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;me.html=Ke(me.html,"i").replace("comment",me._comment).replace("tag",me._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();me.paragraph=Ke(me._paragraph).replace("hr",me.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",me._tag).getRegex();me.blockquote=Ke(me.blockquote).replace("paragraph",me.paragraph).getRegex();me.normal=Pt({},me);me.gfm=Pt({},me.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});me.gfm.table=Ke(me.gfm.table).replace("hr",me.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",me._tag).getRegex();me.gfm.paragraph=Ke(me._paragraph).replace("hr",me.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",me.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",me._tag).getRegex();me.pedantic=Pt({},me.normal,{html:Ke(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",me._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ps,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ke(me.normal._paragraph).replace("hr",me.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",me.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const se={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ps,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ps,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};se._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";se.punctuation=Ke(se.punctuation).replace(/punctuation/g,se._punctuation).getRegex();se.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;se.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;se._comment=Ke(me._comment).replace("(?:-->|$)","-->").getRegex();se.emStrong.lDelim=Ke(se.emStrong.lDelim).replace(/punct/g,se._punctuation).getRegex();se.emStrong.rDelimAst=Ke(se.emStrong.rDelimAst,"g").replace(/punct/g,se._punctuation).getRegex();se.emStrong.rDelimUnd=Ke(se.emStrong.rDelimUnd,"g").replace(/punct/g,se._punctuation).getRegex();se._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;se._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;se._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;se.autolink=Ke(se.autolink).replace("scheme",se._scheme).replace("email",se._email).getRegex();se._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;se.tag=Ke(se.tag).replace("comment",se._comment).replace("attribute",se._attribute).getRegex();se._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;se._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;se._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;se.link=Ke(se.link).replace("label",se._label).replace("href",se._href).replace("title",se._title).getRegex();se.reflink=Ke(se.reflink).replace("label",se._label).replace("ref",me._label).getRegex();se.nolink=Ke(se.nolink).replace("ref",me._label).getRegex();se.reflinkSearch=Ke(se.reflinkSearch,"g").replace("reflink",se.reflink).replace("nolink",se.nolink).getRegex();se.normal=Pt({},se);se.pedantic=Pt({},se.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ke(/^!?\[(label)\]\((.*?)\)/).replace("label",se._label).getRegex(),reflink:Ke(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",se._label).getRegex()});se.gfm=Pt({},se.normal,{escape:Ke(se.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});se.gfm.url=Ke(se.gfm.url,"i").replace("email",se.gfm._extended_email).getRegex();se.breaks=Pt({},se.gfm,{br:Ke(se.br).replace("{2,}","*").getRegex(),text:Ke(se.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Xu(s){return s.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Al(s){let e="",t,n;const o=s.length;for(t=0;t<o;t++)n=s.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class Lt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Un,this.options.tokenizer=this.options.tokenizer||new Eo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:me.normal,inline:se.normal};this.options.pedantic?(t.block=me.pedantic,t.inline=se.pedantic):this.options.gfm&&(t.block=me.gfm,this.options.breaks?t.inline=se.breaks:t.inline=se.gfm),this.tokenizer.rules=t}static get rules(){return{block:me,inline:se}}static lex(e,t){return new Lt(t).lex(e)}static lexInline(e,t){return new Lt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(i,a,c)=>a+"    ".repeat(c.length));let n,o,l,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(i=>(n=i.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+n.raw,o.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+n.raw,o.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(l=e,this.options.extensions&&this.options.extensions.startBlock){let i=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(i=Math.min(i,c))}),i<1/0&&i>=0&&(l=e.substring(0,i+1))}if(this.state.top&&(n=this.tokenizer.paragraph(l))){o=t[t.length-1],r&&o.type==="paragraph"?(o.raw+=`
`+n.raw,o.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(n),r=l.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+n.raw,o.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(n);continue}if(e){const i="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,o,l,r=e,i,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+Sl("a",i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+Sl("a",i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(r))!=null;)r=r.slice(0,i.index+i[0].length-2)+"++"+r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),o=t[t.length-1],o&&n.type==="text"&&o.type==="text"?(o.raw+=n.raw,o.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),o=t[t.length-1],o&&n.type==="text"&&o.type==="text"?(o.raw+=n.raw,o.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,Al)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,Al))){e=e.substring(n.raw.length),t.push(n);continue}if(l=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let d;this.options.extensions.startInline.forEach(function(m){d=m.call({lexer:this},f),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(l=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(l,Xu)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),a=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=n.raw,o.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Ao{constructor(e){this.options=e||Un}code(e,t,n){const o=(t||"").match(/\S*/)[0];if(this.options.highlight){const l=this.options.highlight(e,o);l!=null&&l!==e&&(n=!0,e=l)}return e=e.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+it(o)+'">'+(n?e:it(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:it(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n,o){if(this.options.headerIds){const l=this.options.headerPrefix+o.slug(n);return`<h${t} id="${l}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const o=t?"ol":"ul",l=t&&n!==1?' start="'+n+'"':"";return"<"+o+l+`>
`+e+"</"+o+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=Tl(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let o='<a href="'+e+'"';return t&&(o+=' title="'+t+'"'),o+=">"+n+"</a>",o}image(e,t,n){if(e=Tl(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${t}"`),o+=this.options.xhtml?"/>":">",o}text(e){return e}}class xi{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class Co{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,o=0;if(this.seen.hasOwnProperty(n)){o=this.seen[e];do o++,n=e+"-"+o;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=o,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class It{constructor(e){this.options=e||Un,this.options.renderer=this.options.renderer||new Ao,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new xi,this.slugger=new Co}static parse(e,t){return new It(t).parse(e)}static parseInline(e,t){return new It(t).parseInline(e)}parse(e,t=!0){let n="",o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O;const I=e.length;for(o=0;o<I;o++){if(m=e[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]&&(O=this.options.extensions.renderers[m.type].call({parser:this},m),O!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type))){n+=O||"";continue}switch(m.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(m.tokens),m.depth,yi(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(m.text,m.lang,m.escaped);continue}case"table":{for(f="",u="",i=m.header.length,l=0;l<i;l++)u+=this.renderer.tablecell(this.parseInline(m.header[l].tokens),{header:!0,align:m.align[l]});for(f+=this.renderer.tablerow(u),d="",i=m.rows.length,l=0;l<i;l++){for(c=m.rows[l],u="",a=c.length,r=0;r<a;r++)u+=this.renderer.tablecell(this.parseInline(c[r].tokens),{header:!1,align:m.align[r]});d+=this.renderer.tablerow(u)}n+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(m.tokens),n+=this.renderer.blockquote(d);continue}case"list":{for(g=m.ordered,b=m.start,$=m.loose,i=m.items.length,d="",l=0;l<i;l++)E=m.items[l],D=E.checked,C=E.task,T="",E.task&&(M=this.renderer.checkbox(D),$?E.tokens.length>0&&E.tokens[0].type==="paragraph"?(E.tokens[0].text=M+" "+E.tokens[0].text,E.tokens[0].tokens&&E.tokens[0].tokens.length>0&&E.tokens[0].tokens[0].type==="text"&&(E.tokens[0].tokens[0].text=M+" "+E.tokens[0].tokens[0].text)):E.tokens.unshift({type:"text",text:M}):T+=M),T+=this.parse(E.tokens,$),d+=this.renderer.listitem(T,C,D);n+=this.renderer.list(d,g,b);continue}case"html":{n+=this.renderer.html(m.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(m.tokens));continue}case"text":{for(d=m.tokens?this.parseInline(m.tokens):m.text;o+1<I&&e[o+1].type==="text";)m=e[++o],d+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);n+=t?this.renderer.paragraph(d):d;continue}default:{const L='Token with "'+m.type+'" type was not found.';if(this.options.silent){console.error(L);return}else throw new Error(L)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",o,l,r;const i=e.length;for(o=0;o<i;o++){if(l=e[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]&&(r=this.options.extensions.renderers[l.type].call({parser:this},l),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type))){n+=r||"";continue}switch(l.type){case"escape":{n+=t.text(l.text);break}case"html":{n+=t.html(l.text);break}case"link":{n+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{n+=t.image(l.href,l.title,l.text);break}case"strong":{n+=t.strong(this.parseInline(l.tokens,t));break}case"em":{n+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{n+=t.codespan(l.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(l.tokens,t));break}case"text":{n+=t.text(l.text);break}default:{const a='Token with "'+l.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return n}}function he(s,e,t){if(typeof s=="undefined"||s===null)throw new Error("marked(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=Pt({},he.defaults,e||{}),Ti(e),t){const o=e.highlight;let l;try{l=Lt.lex(s,e)}catch(a){return t(a)}const r=function(a){let c;if(!a)try{e.walkTokens&&he.walkTokens(l,e.walkTokens),c=It.parse(l,e)}catch(u){a=u}return e.highlight=o,a?t(a):t(null,c)};if(!o||o.length<3||(delete e.highlight,!l.length))return r();let i=0;he.walkTokens(l,function(a){a.type==="code"&&(i++,setTimeout(()=>{o(a.text,a.lang,function(c,u){if(c)return r(c);u!=null&&u!==a.text&&(a.text=u,a.escaped=!0),i--,i===0&&r()})},0))}),i===0&&r();return}function n(o){if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+it(o.message+"",!0)+"</pre>";throw o}try{const o=Lt.lex(s,e);if(e.walkTokens){if(e.async)return Promise.all(he.walkTokens(o,e.walkTokens)).then(()=>It.parse(o,e)).catch(n);he.walkTokens(o,e.walkTokens)}return It.parse(o,e)}catch(o){n(o)}}he.options=he.setOptions=function(s){return Pt(he.defaults,s),Iu(he.defaults),he};he.getDefaults=vi;he.defaults=Un;he.use=function(...s){const e=he.defaults.extensions||{renderers:{},childTokens:{}};s.forEach(t=>{const n=Pt({},t);if(n.async=he.defaults.async||n.async,t.extensions&&(t.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const l=e.renderers[o.name];l?e.renderers[o.name]=function(...r){let i=o.renderer.apply(this,r);return i===!1&&(i=l.apply(this,r)),i}:e.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[o.level]?e[o.level].unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),n.extensions=e),t.renderer){const o=he.defaults.renderer||new Ao;for(const l in t.renderer){const r=o[l];o[l]=(...i)=>{let a=t.renderer[l].apply(o,i);return a===!1&&(a=r.apply(o,i)),a}}n.renderer=o}if(t.tokenizer){const o=he.defaults.tokenizer||new Eo;for(const l in t.tokenizer){const r=o[l];o[l]=(...i)=>{let a=t.tokenizer[l].apply(o,i);return a===!1&&(a=r.apply(o,i)),a}}n.tokenizer=o}if(t.walkTokens){const o=he.defaults.walkTokens;n.walkTokens=function(l){let r=[];return r.push(t.walkTokens.call(this,l)),o&&(r=r.concat(o.call(this,l))),r}}he.setOptions(n)})};he.walkTokens=function(s,e){let t=[];for(const n of s)switch(t=t.concat(e.call(he,n)),n.type){case"table":{for(const o of n.header)t=t.concat(he.walkTokens(o.tokens,e));for(const o of n.rows)for(const l of o)t=t.concat(he.walkTokens(l.tokens,e));break}case"list":{t=t.concat(he.walkTokens(n.items,e));break}default:he.defaults.extensions&&he.defaults.extensions.childTokens&&he.defaults.extensions.childTokens[n.type]?he.defaults.extensions.childTokens[n.type].forEach(function(o){t=t.concat(he.walkTokens(n[o],e))}):n.tokens&&(t=t.concat(he.walkTokens(n.tokens,e)))}return t};he.parseInline=function(s,e){if(typeof s=="undefined"||s===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");e=Pt({},he.defaults,e||{}),Ti(e);try{const t=Lt.lexInline(s,e);return e.walkTokens&&he.walkTokens(t,e.walkTokens),It.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+it(t.message+"",!0)+"</pre>";throw t}};he.Parser=It;he.parser=It.parse;he.Renderer=Ao;he.TextRenderer=xi;he.Lexer=Lt;he.lexer=Lt.lex;he.Tokenizer=Eo;he.Slugger=Co;he.parse=he;he.options;he.setOptions;he.use;he.walkTokens;he.parseInline;It.parse;Lt.lex;const Si={};function Qu(s){let e;return{c(){e=j(s[1])},m(t,n){k(t,e,n)},p(t,n){n&2&&Ie(e,t[1])},i:le,o:le,d(t){t&&w(e)}}}function Yu(s){let e,t;const n=s[5].default,o=Be(n,s,s[4],null);return{c(){e=_("h6"),o&&o.c(),h(e,"id",s[2])},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&ze(o,n,l,l[4],t?Fe(n,l[4],r,null):He(l[4]),null),(!t||r&4)&&h(e,"id",l[2])},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function Ju(s){let e,t;const n=s[5].default,o=Be(n,s,s[4],null);return{c(){e=_("h5"),o&&o.c(),h(e,"id",s[2])},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&ze(o,n,l,l[4],t?Fe(n,l[4],r,null):He(l[4]),null),(!t||r&4)&&h(e,"id",l[2])},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function Vu(s){let e,t;const n=s[5].default,o=Be(n,s,s[4],null);return{c(){e=_("h4"),o&&o.c(),h(e,"id",s[2])},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&ze(o,n,l,l[4],t?Fe(n,l[4],r,null):He(l[4]),null),(!t||r&4)&&h(e,"id",l[2])},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function ef(s){let e,t;const n=s[5].default,o=Be(n,s,s[4],null);return{c(){e=_("h3"),o&&o.c(),h(e,"id",s[2])},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&ze(o,n,l,l[4],t?Fe(n,l[4],r,null):He(l[4]),null),(!t||r&4)&&h(e,"id",l[2])},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function tf(s){let e,t;const n=s[5].default,o=Be(n,s,s[4],null);return{c(){e=_("h2"),o&&o.c(),h(e,"id",s[2])},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&ze(o,n,l,l[4],t?Fe(n,l[4],r,null):He(l[4]),null),(!t||r&4)&&h(e,"id",l[2])},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function nf(s){let e,t;const n=s[5].default,o=Be(n,s,s[4],null);return{c(){e=_("h1"),o&&o.c(),h(e,"id",s[2])},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&ze(o,n,l,l[4],t?Fe(n,l[4],r,null):He(l[4]),null),(!t||r&4)&&h(e,"id",l[2])},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function sf(s){let e,t,n,o;const l=[nf,tf,ef,Vu,Ju,Yu,Qu],r=[];function i(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Le()},m(a,c){r[e].m(a,c),k(a,n,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(ye(),S(r[u],1,1,()=>{r[u]=null}),Te(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),y(t,1),t.m(n.parentNode,n))},i(a){o||(y(t),o=!0)},o(a){S(t),o=!1},d(a){r[e].d(a),a&&w(n)}}}function of(s,e,t){let n,{$$slots:o={},$$scope:l}=e,{depth:r}=e,{raw:i}=e,{text:a}=e;const{slug:c,getOptions:u}=_o(Si),f=u();return s.$$set=d=>{"depth"in d&&t(0,r=d.depth),"raw"in d&&t(1,i=d.raw),"text"in d&&t(3,a=d.text),"$$scope"in d&&t(4,l=d.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(2,n=f.headerIds?f.headerPrefix+c(a):void 0)},[r,i,n,a,l,o]}class lf extends te{constructor(e){super(),ee(this,e,of,sf,V,{depth:0,raw:1,text:3})}}function rf(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("p"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function af(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class cf extends te{constructor(e){super(),ee(this,e,af,rf,V,{})}}function uf(s){let e;const t=s[3].default,n=Be(t,s,s[2],null);return{c(){n&&n.c()},m(o,l){n&&n.m(o,l),e=!0},p(o,[l]){n&&n.p&&(!e||l&4)&&ze(n,t,o,o[2],e?Fe(t,o[2],l,null):He(o[2]),null)},i(o){e||(y(n,o),e=!0)},o(o){S(n,o),e=!1},d(o){n&&n.d(o)}}}function ff(s,e,t){let{$$slots:n={},$$scope:o}=e,{text:l}=e,{raw:r}=e;return s.$$set=i=>{"text"in i&&t(0,l=i.text),"raw"in i&&t(1,r=i.raw),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,n]}class df extends te{constructor(e){super(),ee(this,e,ff,uf,V,{text:0,raw:1})}}function pf(s){let e,t;return{c(){e=_("img"),ct(e.src,t=s[0])||h(e,"src",t),h(e,"title",s[1]),h(e,"alt",s[2])},m(n,o){k(n,e,o)},p(n,[o]){o&1&&!ct(e.src,t=n[0])&&h(e,"src",t),o&2&&h(e,"title",n[1]),o&4&&h(e,"alt",n[2])},i:le,o:le,d(n){n&&w(e)}}}function mf(s,e,t){let{href:n=""}=e,{title:o=void 0}=e,{text:l=""}=e;return s.$$set=r=>{"href"in r&&t(0,n=r.href),"title"in r&&t(1,o=r.title),"text"in r&&t(2,l=r.text)},[n,o,l]}class hf extends te{constructor(e){super(),ee(this,e,mf,pf,V,{href:0,title:1,text:2})}}function gf(s){let e,t;const n=s[3].default,o=Be(n,s,s[2],null);return{c(){e=_("a"),o&&o.c(),h(e,"href",s[0]),h(e,"title",s[1])},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&4)&&ze(o,n,l,l[2],t?Fe(n,l[2],r,null):He(l[2]),null),(!t||r&1)&&h(e,"href",l[0]),(!t||r&2)&&h(e,"title",l[1])},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function _f(s,e,t){let{$$slots:n={},$$scope:o}=e,{href:l=""}=e,{title:r=void 0}=e;return s.$$set=i=>{"href"in i&&t(0,l=i.href),"title"in i&&t(1,r=i.title),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,n]}class bf extends te{constructor(e){super(),ee(this,e,_f,gf,V,{href:0,title:1})}}function $f(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("em"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function vf(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class wf extends te{constructor(e){super(),ee(this,e,vf,$f,V,{})}}function kf(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("del"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function yf(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Tf extends te{constructor(e){super(),ee(this,e,yf,kf,V,{})}}function xf(s){let e,t=s[0].replace(/`/g,"")+"",n;return{c(){e=_("code"),n=j(t)},m(o,l){k(o,e,l),p(e,n)},p(o,[l]){l&1&&t!==(t=o[0].replace(/`/g,"")+"")&&Ie(n,t)},i:le,o:le,d(o){o&&w(e)}}}function Sf(s,e,t){let{raw:n}=e;return s.$$set=o=>{"raw"in o&&t(0,n=o.raw)},[n]}class Ef extends te{constructor(e){super(),ee(this,e,Sf,xf,V,{raw:0})}}function Af(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("strong"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function Cf(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Nf extends te{constructor(e){super(),ee(this,e,Cf,Af,V,{})}}function Pf(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("table"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function Rf(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Mf extends te{constructor(e){super(),ee(this,e,Rf,Pf,V,{})}}function Of(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("thead"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function If(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Lf extends te{constructor(e){super(),ee(this,e,If,Of,V,{})}}function Df(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("tbody"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function Bf(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Ff extends te{constructor(e){super(),ee(this,e,Bf,Df,V,{})}}function zf(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("tr"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function Hf(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class jf extends te{constructor(e){super(),ee(this,e,Hf,zf,V,{})}}function Uf(s){let e,t;const n=s[3].default,o=Be(n,s,s[2],null);return{c(){e=_("td"),o&&o.c(),h(e,"align",s[1])},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&ze(o,n,l,l[2],t?Fe(n,l[2],r,null):He(l[2]),null),(!t||r&2)&&h(e,"align",l[1])},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function Kf(s){let e,t;const n=s[3].default,o=Be(n,s,s[2],null);return{c(){e=_("th"),o&&o.c(),h(e,"align",s[1])},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&ze(o,n,l,l[2],t?Fe(n,l[2],r,null):He(l[2]),null),(!t||r&2)&&h(e,"align",l[1])},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function qf(s){let e,t,n,o;const l=[Kf,Uf],r=[];function i(a,c){return a[0]?0:1}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Le()},m(a,c){r[e].m(a,c),k(a,n,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(ye(),S(r[u],1,1,()=>{r[u]=null}),Te(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),y(t,1),t.m(n.parentNode,n))},i(a){o||(y(t),o=!0)},o(a){S(t),o=!1},d(a){r[e].d(a),a&&w(n)}}}function Wf(s,e,t){let{$$slots:n={},$$scope:o}=e,{header:l}=e,{align:r}=e;return s.$$set=i=>{"header"in i&&t(0,l=i.header),"align"in i&&t(1,r=i.align),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,n]}class Gf extends te{constructor(e){super(),ee(this,e,Wf,qf,V,{header:0,align:1})}}function Zf(s){let e,t;const n=s[3].default,o=Be(n,s,s[2],null);return{c(){e=_("ul"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&ze(o,n,l,l[2],t?Fe(n,l[2],r,null):He(l[2]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function Xf(s){let e,t;const n=s[3].default,o=Be(n,s,s[2],null);return{c(){e=_("ol"),o&&o.c(),h(e,"start",s[1])},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&ze(o,n,l,l[2],t?Fe(n,l[2],r,null):He(l[2]),null),(!t||r&2)&&h(e,"start",l[1])},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function Qf(s){let e,t,n,o;const l=[Xf,Zf],r=[];function i(a,c){return a[0]?0:1}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Le()},m(a,c){r[e].m(a,c),k(a,n,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(ye(),S(r[u],1,1,()=>{r[u]=null}),Te(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),y(t,1),t.m(n.parentNode,n))},i(a){o||(y(t),o=!0)},o(a){S(t),o=!1},d(a){r[e].d(a),a&&w(n)}}}function Yf(s,e,t){let{$$slots:n={},$$scope:o}=e,{ordered:l}=e,{start:r}=e;return s.$$set=i=>{"ordered"in i&&t(0,l=i.ordered),"start"in i&&t(1,r=i.start),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,n]}class Jf extends te{constructor(e){super(),ee(this,e,Yf,Qf,V,{ordered:0,start:1})}}function Vf(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("li"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function ed(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class td extends te{constructor(e){super(),ee(this,e,ed,Vf,V,{})}}function nd(s){let e;return{c(){e=_("hr")},m(t,n){k(t,e,n)},p:le,i:le,o:le,d(t){t&&w(e)}}}class sd extends te{constructor(e){super(),ee(this,e,null,nd,V,{})}}function od(s){let e,t;return{c(){e=new si(!1),t=Le(),e.a=t},m(n,o){e.m(s[0],n,o),k(n,t,o)},p(n,[o]){o&1&&e.p(n[0])},i:le,o:le,d(n){n&&w(t),n&&e.d()}}}function ld(s,e,t){let{text:n}=e;return s.$$set=o=>{"text"in o&&t(0,n=o.text)},[n]}class rd extends te{constructor(e){super(),ee(this,e,ld,od,V,{text:0})}}function id(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("blockquote"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function ad(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class cd extends te{constructor(e){super(),ee(this,e,ad,id,V,{})}}function ud(s){let e,t,n;return{c(){e=_("pre"),t=_("code"),n=j(s[1]),h(e,"class",s[0])},m(o,l){k(o,e,l),p(e,t),p(t,n)},p(o,[l]){l&2&&Ie(n,o[1]),l&1&&h(e,"class",o[0])},i:le,o:le,d(o){o&&w(e)}}}function fd(s,e,t){let{lang:n}=e,{text:o}=e;return s.$$set=l=>{"lang"in l&&t(0,n=l.lang),"text"in l&&t(1,o=l.text)},[n,o]}class dd extends te{constructor(e){super(),ee(this,e,fd,ud,V,{lang:0,text:1})}}function pd(s){let e,t;const n=s[1].default,o=Be(n,s,s[0],null);return{c(){e=_("br"),o&&o.c()},m(l,r){k(l,e,r),o&&o.m(l,r),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&ze(o,n,l,l[0],t?Fe(n,l[0],r,null):He(l[0]),null)},i(l){t||(y(o,l),t=!0)},o(l){S(o,l),t=!1},d(l){l&&w(e),o&&o.d(l)}}}function md(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class hd extends te{constructor(e){super(),ee(this,e,md,pd,V,{})}}const gd={heading:lf,paragraph:cf,text:df,image:hf,link:bf,em:wf,strong:Nf,codespan:Ef,del:Tf,table:Mf,tablehead:Lf,tablebody:Ff,tablerow:jf,tablecell:Gf,list:Jf,orderedlistitem:null,unorderedlistitem:null,listitem:td,hr:sd,html:rd,blockquote:cd,code:dd,br:hd},_d={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function bd(s){let e,t;return e=new Sn({props:{tokens:s[0],renderers:s[1]}}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},p(n,[o]){const l={};o&1&&(l.tokens=n[0]),o&2&&(l.renderers=n[1]),e.$set(l)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function $d(s,e,t){let n,o,l,r,{source:i=[]}=e,{renderers:a={}}=e,{options:c={}}=e,{isInline:u=!1}=e;const f=go();let d,m,g;return oi(Si,{slug:b=>o?o.slug(b):"",getOptions:()=>l}),Hn(()=>{t(7,g=!0)}),s.$$set=b=>{"source"in b&&t(2,i=b.source),"renderers"in b&&t(3,a=b.renderers),"options"in b&&t(4,c=b.options),"isInline"in b&&t(5,u=b.isInline)},s.$$.update=()=>{s.$$.dirty&4&&t(8,n=Array.isArray(i)),s.$$.dirty&4&&(o=i?new Co:void 0),s.$$.dirty&16&&t(9,l=Je(Je({},_d),c)),s.$$.dirty&869&&(n?t(0,d=i):(t(6,m=new Lt(l)),t(0,d=u?m.inlineTokens(i):m.lex(i)),f("parsed",{tokens:d}))),s.$$.dirty&8&&t(1,r=Je(Je({},gd),a)),s.$$.dirty&385&&g&&!n&&f("parsed",{tokens:d})},[d,r,i,a,c,u,m,g,n,l]}class En extends te{constructor(e){super(),ee(this,e,$d,bd,V,{source:2,renderers:3,options:4,isInline:5})}}function vd(s){let e,t,n;return t=new En({props:{source:uu}}),{c(){e=_("section"),R(t.$$.fragment),h(e,"class","documentation")},m(o,l){k(o,e,l),N(t,e,null),n=!0},p:le,i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){S(t.$$.fragment,o),n=!1},d(o){o&&w(e),P(t)}}}let wd=class extends te{constructor(e){super(),ee(this,e,null,vd,V,{})}};var sn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},No={exports:{}};function Po(s){return s instanceof Map?s.clear=s.delete=s.set=function(){throw new Error("map is read-only")}:s instanceof Set&&(s.add=s.clear=s.delete=function(){throw new Error("set is read-only")}),Object.freeze(s),Object.getOwnPropertyNames(s).forEach(function(e){var t=s[e];typeof t=="object"&&!Object.isFrozen(t)&&Po(t)}),s}No.exports=Po;No.exports.default=Po;class Cl{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ei(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function on(s,...e){const t=Object.create(null);for(const n in s)t[n]=s[n];return e.forEach(function(n){for(const o in n)t[o]=n[o]}),t}const kd="</span>",Nl=s=>!!s.scope||s.sublanguage&&s.language,yd=(s,{prefix:e})=>{if(s.includes(".")){const t=s.split(".");return[`${e}${t.shift()}`,...t.map((n,o)=>`${n}${"_".repeat(o+1)}`)].join(" ")}return`${e}${s}`};class Td{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=Ei(e)}openNode(e){if(!Nl(e))return;let t="";e.sublanguage?t=`language-${e.language}`:t=yd(e.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(e){Nl(e)&&(this.buffer+=kd)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Pl=(s={})=>{const e={children:[]};return Object.assign(e,s),e};class Ro{constructor(){this.rootNode=Pl(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=Pl({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(n=>this._walk(e,n)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{Ro._collapse(t)}))}}class xd extends Ro{constructor(e){super(),this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const n=e.root;n.sublanguage=!0,n.language=t,this.add(n)}toHTML(){return new Td(this,this.options).value()}finalize(){return!0}}function Qn(s){return s?typeof s=="string"?s:s.source:null}function Ai(s){return An("(?=",s,")")}function Sd(s){return An("(?:",s,")*")}function Ed(s){return An("(?:",s,")?")}function An(...s){return s.map(t=>Qn(t)).join("")}function Ad(s){const e=s[s.length-1];return typeof e=="object"&&e.constructor===Object?(s.splice(s.length-1,1),e):{}}function Mo(...s){return"("+(Ad(s).capture?"":"?:")+s.map(n=>Qn(n)).join("|")+")"}function Ci(s){return new RegExp(s.toString()+"|").exec("").length-1}function Cd(s,e){const t=s&&s.exec(e);return t&&t.index===0}const Nd=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Oo(s,{joinWith:e}){let t=0;return s.map(n=>{t+=1;const o=t;let l=Qn(n),r="";for(;l.length>0;){const i=Nd.exec(l);if(!i){r+=l;break}r+=l.substring(0,i.index),l=l.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?r+="\\"+String(Number(i[1])+o):(r+=i[0],i[0]==="("&&t++)}return r}).map(n=>`(${n})`).join(e)}const Pd=/\b\B/,Ni="[a-zA-Z]\\w*",Io="[a-zA-Z_]\\w*",Pi="\\b\\d+(\\.\\d+)?",Ri="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Mi="\\b(0b[01]+)",Rd="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Md=(s={})=>{const e=/^#![ ]*\//;return s.binary&&(s.begin=An(e,/.*\b/,s.binary,/\b.*/)),on({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,n)=>{t.index!==0&&n.ignoreMatch()}},s)},Yn={begin:"\\\\[\\s\\S]",relevance:0},Od={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Yn]},Id={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Yn]},Ld={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},zs=function(s,e,t={}){const n=on({scope:"comment",begin:s,end:e,contains:[]},t);n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=Mo("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return n.contains.push({begin:An(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},Dd=zs("//","$"),Bd=zs("/\\*","\\*/"),Fd=zs("#","$"),zd={scope:"number",begin:Pi,relevance:0},Hd={scope:"number",begin:Ri,relevance:0},jd={scope:"number",begin:Mi,relevance:0},Ud={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Yn,{begin:/\[/,end:/\]/,relevance:0,contains:[Yn]}]}]},Kd={scope:"title",begin:Ni,relevance:0},qd={scope:"title",begin:Io,relevance:0},Wd={begin:"\\.\\s*"+Io,relevance:0},Gd=function(s){return Object.assign(s,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var $s=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Pd,IDENT_RE:Ni,UNDERSCORE_IDENT_RE:Io,NUMBER_RE:Pi,C_NUMBER_RE:Ri,BINARY_NUMBER_RE:Mi,RE_STARTERS_RE:Rd,SHEBANG:Md,BACKSLASH_ESCAPE:Yn,APOS_STRING_MODE:Od,QUOTE_STRING_MODE:Id,PHRASAL_WORDS_MODE:Ld,COMMENT:zs,C_LINE_COMMENT_MODE:Dd,C_BLOCK_COMMENT_MODE:Bd,HASH_COMMENT_MODE:Fd,NUMBER_MODE:zd,C_NUMBER_MODE:Hd,BINARY_NUMBER_MODE:jd,REGEXP_MODE:Ud,TITLE_MODE:Kd,UNDERSCORE_TITLE_MODE:qd,METHOD_GUARD:Wd,END_SAME_AS_BEGIN:Gd});function Zd(s,e){s.input[s.index-1]==="."&&e.ignoreMatch()}function Xd(s,e){s.className!==void 0&&(s.scope=s.className,delete s.className)}function Qd(s,e){e&&s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=Zd,s.keywords=s.keywords||s.beginKeywords,delete s.beginKeywords,s.relevance===void 0&&(s.relevance=0))}function Yd(s,e){Array.isArray(s.illegal)&&(s.illegal=Mo(...s.illegal))}function Jd(s,e){if(s.match){if(s.begin||s.end)throw new Error("begin & end are not supported with match");s.begin=s.match,delete s.match}}function Vd(s,e){s.relevance===void 0&&(s.relevance=1)}const ep=(s,e)=>{if(!s.beforeMatch)return;if(s.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},s);Object.keys(s).forEach(n=>{delete s[n]}),s.keywords=t.keywords,s.begin=An(t.beforeMatch,Ai(t.begin)),s.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},s.relevance=0,delete t.beforeMatch},tp=["of","and","for","in","not","or","if","then","parent","list","value"],np="keyword";function Oi(s,e,t=np){const n=Object.create(null);return typeof s=="string"?o(t,s.split(" ")):Array.isArray(s)?o(t,s):Object.keys(s).forEach(function(l){Object.assign(n,Oi(s[l],e,l))}),n;function o(l,r){e&&(r=r.map(i=>i.toLowerCase())),r.forEach(function(i){const a=i.split("|");n[a[0]]=[l,sp(a[0],a[1])]})}}function sp(s,e){return e?Number(e):op(s)?0:1}function op(s){return tp.includes(s.toLowerCase())}const Rl={},wn=s=>{console.error(s)},Ml=(s,...e)=>{console.log(`WARN: ${s}`,...e)},In=(s,e)=>{Rl[`${s}/${e}`]||(console.log(`Deprecated as of ${s}. ${e}`),Rl[`${s}/${e}`]=!0)},Rs=new Error;function Ii(s,e,{key:t}){let n=0;const o=s[t],l={},r={};for(let i=1;i<=e.length;i++)r[i+n]=o[i],l[i+n]=!0,n+=Ci(e[i-1]);s[t]=r,s[t]._emit=l,s[t]._multi=!0}function lp(s){if(Array.isArray(s.begin)){if(s.skip||s.excludeBegin||s.returnBegin)throw wn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Rs;if(typeof s.beginScope!="object"||s.beginScope===null)throw wn("beginScope must be object"),Rs;Ii(s,s.begin,{key:"beginScope"}),s.begin=Oo(s.begin,{joinWith:""})}}function rp(s){if(Array.isArray(s.end)){if(s.skip||s.excludeEnd||s.returnEnd)throw wn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Rs;if(typeof s.endScope!="object"||s.endScope===null)throw wn("endScope must be object"),Rs;Ii(s,s.end,{key:"endScope"}),s.end=Oo(s.end,{joinWith:""})}}function ip(s){s.scope&&typeof s.scope=="object"&&s.scope!==null&&(s.beginScope=s.scope,delete s.scope)}function ap(s){ip(s),typeof s.beginScope=="string"&&(s.beginScope={_wrap:s.beginScope}),typeof s.endScope=="string"&&(s.endScope={_wrap:s.endScope}),lp(s),rp(s)}function cp(s){function e(r,i){return new RegExp(Qn(r),"m"+(s.case_insensitive?"i":"")+(s.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,i]),this.matchAt+=Ci(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(a=>a[1]);this.matcherRe=e(Oo(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(i);if(!a)return null;const c=a.findIndex((f,d)=>d>0&&f!==void 0),u=this.matchIndexes[c];return a.splice(0,c),Object.assign(a,u)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const a=new t;return this.rules.slice(i).forEach(([c,u])=>a.addRule(c,u)),a.compile(),this.multiRegexes[i]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,a){this.rules.push([i,a]),a.type==="begin"&&this.count++}exec(i){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let c=a.exec(i);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(i)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function o(r){const i=new n;return r.contains.forEach(a=>i.addRule(a.begin,{rule:a,type:"begin"})),r.terminatorEnd&&i.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&i.addRule(r.illegal,{type:"illegal"}),i}function l(r,i){const a=r;if(r.isCompiled)return a;[Xd,Jd,ap,ep].forEach(u=>u(r,i)),s.compilerExtensions.forEach(u=>u(r,i)),r.__beforeBegin=null,[Qd,Yd,Vd].forEach(u=>u(r,i)),r.isCompiled=!0;let c=null;return typeof r.keywords=="object"&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),c=r.keywords.$pattern,delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=Oi(r.keywords,s.case_insensitive)),a.keywordPatternRe=e(c,!0),i&&(r.begin||(r.begin=/\B|\b/),a.beginRe=e(a.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(a.endRe=e(a.end)),a.terminatorEnd=Qn(a.end)||"",r.endsWithParent&&i.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+i.terminatorEnd)),r.illegal&&(a.illegalRe=e(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(u){return up(u==="self"?r:u)})),r.contains.forEach(function(u){l(u,a)}),r.starts&&l(r.starts,i),a.matcher=o(a),a}if(s.compilerExtensions||(s.compilerExtensions=[]),s.contains&&s.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return s.classNameAliases=on(s.classNameAliases||{}),l(s)}function Li(s){return s?s.endsWithParent||Li(s.starts):!1}function up(s){return s.variants&&!s.cachedVariants&&(s.cachedVariants=s.variants.map(function(e){return on(s,{variants:null},e)})),s.cachedVariants?s.cachedVariants:Li(s)?on(s,{starts:s.starts?on(s.starts):null}):Object.isFrozen(s)?on(s):s}var fp="11.7.0";class dp extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const oo=Ei,Ol=on,Il=Symbol("nomatch"),pp=7,mp=function(s){const e=Object.create(null),t=Object.create(null),n=[];let o=!0;const l="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:xd};function a(H){return i.noHighlightRe.test(H)}function c(H){let W=H.className+" ";W+=H.parentNode?H.parentNode.className:"";const X=i.languageDetectRe.exec(W);if(X){const fe=F(X[1]);return fe||(Ml(l.replace("{}",X[1])),Ml("Falling back to no-highlight mode for this block.",H)),fe?X[1]:"no-highlight"}return W.split(/\s+/).find(fe=>a(fe)||F(fe))}function u(H,W,X){let fe="",_e="";typeof W=="object"?(fe=H,X=W.ignoreIllegals,_e=W.language):(In("10.7.0","highlight(lang, code, ...args) has been deprecated."),In("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),_e=H,fe=W),X===void 0&&(X=!0);const ge={code:fe,language:_e};re("before:highlight",ge);const Ce=ge.result?ge.result:f(ge.language,ge.code,X);return Ce.code=ge.code,re("after:highlight",Ce),Ce}function f(H,W,X,fe){const _e=Object.create(null);function ge(q,Q){return q.keywords[Q]}function Ce(){if(!de.keywords){qe.addText(xe);return}let q=0;de.keywordPatternRe.lastIndex=0;let Q=de.keywordPatternRe.exec(xe),ue="";for(;Q;){ue+=xe.substring(q,Q.index);const G=Ne.case_insensitive?Q[0].toLowerCase():Q[0],be=ge(de,G);if(be){const[De,Pe]=be;if(qe.addText(ue),ue="",_e[G]=(_e[G]||0)+1,_e[G]<=pp&&(lt+=Pe),De.startsWith("_"))ue+=Q[0];else{const tt=Ne.classNameAliases[De]||De;qe.addKeyword(Q[0],tt)}}else ue+=Q[0];q=de.keywordPatternRe.lastIndex,Q=de.keywordPatternRe.exec(xe)}ue+=xe.substring(q),qe.addText(ue)}function Ue(){if(xe==="")return;let q=null;if(typeof de.subLanguage=="string"){if(!e[de.subLanguage]){qe.addText(xe);return}q=f(de.subLanguage,xe,!0,et[de.subLanguage]),et[de.subLanguage]=q._top}else q=m(xe,de.subLanguage.length?de.subLanguage:null);de.relevance>0&&(lt+=q.relevance),qe.addSublanguage(q._emitter,q.language)}function Re(){de.subLanguage!=null?Ue():Ce(),xe=""}function Se(q,Q){let ue=1;const G=Q.length-1;for(;ue<=G;){if(!q._emit[ue]){ue++;continue}const be=Ne.classNameAliases[q[ue]]||q[ue],De=Q[ue];be?qe.addKeyword(De,be):(xe=De,Ce(),xe=""),ue++}}function ce(q,Q){return q.scope&&typeof q.scope=="string"&&qe.openNode(Ne.classNameAliases[q.scope]||q.scope),q.beginScope&&(q.beginScope._wrap?(qe.addKeyword(xe,Ne.classNameAliases[q.beginScope._wrap]||q.beginScope._wrap),xe=""):q.beginScope._multi&&(Se(q.beginScope,Q),xe="")),de=Object.create(q,{parent:{value:de}}),de}function Me(q,Q,ue){let G=Cd(q.endRe,ue);if(G){if(q["on:end"]){const be=new Cl(q);q["on:end"](Q,be),be.isMatchIgnored&&(G=!1)}if(G){for(;q.endsParent&&q.parent;)q=q.parent;return q}}if(q.endsWithParent)return Me(q.parent,Q,ue)}function ie(q){return de.matcher.regexIndex===0?(xe+=q[0],1):(rt=!0,0)}function $e(q){const Q=q[0],ue=q.rule,G=new Cl(ue),be=[ue.__beforeBegin,ue["on:begin"]];for(const De of be)if(De&&(De(q,G),G.isMatchIgnored))return ie(Q);return ue.skip?xe+=Q:(ue.excludeBegin&&(xe+=Q),Re(),!ue.returnBegin&&!ue.excludeBegin&&(xe=Q)),ce(ue,q),ue.returnBegin?0:Q.length}function ae(q){const Q=q[0],ue=W.substring(q.index),G=Me(de,q,ue);if(!G)return Il;const be=de;de.endScope&&de.endScope._wrap?(Re(),qe.addKeyword(Q,de.endScope._wrap)):de.endScope&&de.endScope._multi?(Re(),Se(de.endScope,q)):be.skip?xe+=Q:(be.returnEnd||be.excludeEnd||(xe+=Q),Re(),be.excludeEnd&&(xe=Q));do de.scope&&qe.closeNode(),!de.skip&&!de.subLanguage&&(lt+=de.relevance),de=de.parent;while(de!==G.parent);return G.starts&&ce(G.starts,q),be.returnEnd?0:Q.length}function ve(){const q=[];for(let Q=de;Q!==Ne;Q=Q.parent)Q.scope&&q.unshift(Q.scope);q.forEach(Q=>qe.openNode(Q))}let Oe={};function Ae(q,Q){const ue=Q&&Q[0];if(xe+=q,ue==null)return Re(),0;if(Oe.type==="begin"&&Q.type==="end"&&Oe.index===Q.index&&ue===""){if(xe+=W.slice(Q.index,Q.index+1),!o){const G=new Error(`0 width match regex (${H})`);throw G.languageName=H,G.badRule=Oe.rule,G}return 1}if(Oe=Q,Q.type==="begin")return $e(Q);if(Q.type==="illegal"&&!X){const G=new Error('Illegal lexeme "'+ue+'" for mode "'+(de.scope||"<unnamed>")+'"');throw G.mode=de,G}else if(Q.type==="end"){const G=ae(Q);if(G!==Il)return G}if(Q.type==="illegal"&&ue==="")return 1;if($t>1e5&&$t>Q.index*3)throw new Error("potential infinite loop, way more iterations than matches");return xe+=ue,ue.length}const Ne=F(H);if(!Ne)throw wn(l.replace("{}",H)),new Error('Unknown language: "'+H+'"');const pt=cp(Ne);let mt="",de=fe||pt;const et={},qe=new i.__emitter(i);ve();let xe="",lt=0,at=0,$t=0,rt=!1;try{for(de.matcher.considerAll();;){$t++,rt?rt=!1:de.matcher.considerAll(),de.matcher.lastIndex=at;const q=de.matcher.exec(W);if(!q)break;const Q=W.substring(at,q.index),ue=Ae(Q,q);at=q.index+ue}return Ae(W.substring(at)),qe.closeAllNodes(),qe.finalize(),mt=qe.toHTML(),{language:H,value:mt,relevance:lt,illegal:!1,_emitter:qe,_top:de}}catch(q){if(q.message&&q.message.includes("Illegal"))return{language:H,value:oo(W),illegal:!0,relevance:0,_illegalBy:{message:q.message,index:at,context:W.slice(at-100,at+100),mode:q.mode,resultSoFar:mt},_emitter:qe};if(o)return{language:H,value:oo(W),illegal:!1,relevance:0,errorRaised:q,_emitter:qe,_top:de};throw q}}function d(H){const W={value:oo(H),illegal:!1,relevance:0,_top:r,_emitter:new i.__emitter(i)};return W._emitter.addText(H),W}function m(H,W){W=W||i.languages||Object.keys(e);const X=d(H),fe=W.filter(F).filter(U).map(Re=>f(Re,H,!1));fe.unshift(X);const _e=fe.sort((Re,Se)=>{if(Re.relevance!==Se.relevance)return Se.relevance-Re.relevance;if(Re.language&&Se.language){if(F(Re.language).supersetOf===Se.language)return 1;if(F(Se.language).supersetOf===Re.language)return-1}return 0}),[ge,Ce]=_e,Ue=ge;return Ue.secondBest=Ce,Ue}function g(H,W,X){const fe=W&&t[W]||X;H.classList.add("hljs"),H.classList.add(`language-${fe}`)}function b(H){let W=null;const X=c(H);if(a(X))return;if(re("before:highlightElement",{el:H,language:X}),H.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(H)),i.throwUnescapedHTML))throw new dp("One of your code blocks includes unescaped HTML.",H.innerHTML);W=H;const fe=W.textContent,_e=X?u(fe,{language:X,ignoreIllegals:!0}):m(fe);H.innerHTML=_e.value,g(H,X,_e.language),H.result={language:_e.language,re:_e.relevance,relevance:_e.relevance},_e.secondBest&&(H.secondBest={language:_e.secondBest.language,relevance:_e.secondBest.relevance}),re("after:highlightElement",{el:H,result:_e,text:fe})}function $(H){i=Ol(i,H)}const T=()=>{C(),In("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function E(){C(),In("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let D=!1;function C(){if(document.readyState==="loading"){D=!0;return}document.querySelectorAll(i.cssSelector).forEach(b)}function M(){D&&C()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",M,!1);function O(H,W){let X=null;try{X=W(s)}catch(fe){if(wn("Language definition for '{}' could not be registered.".replace("{}",H)),o)wn(fe);else throw fe;X=r}X.name||(X.name=H),e[H]=X,X.rawDefinition=W.bind(null,s),X.aliases&&z(X.aliases,{languageName:H})}function I(H){delete e[H];for(const W of Object.keys(t))t[W]===H&&delete t[W]}function L(){return Object.keys(e)}function F(H){return H=(H||"").toLowerCase(),e[H]||e[t[H]]}function z(H,{languageName:W}){typeof H=="string"&&(H=[H]),H.forEach(X=>{t[X.toLowerCase()]=W})}function U(H){const W=F(H);return W&&!W.disableAutodetect}function Z(H){H["before:highlightBlock"]&&!H["before:highlightElement"]&&(H["before:highlightElement"]=W=>{H["before:highlightBlock"](Object.assign({block:W.el},W))}),H["after:highlightBlock"]&&!H["after:highlightElement"]&&(H["after:highlightElement"]=W=>{H["after:highlightBlock"](Object.assign({block:W.el},W))})}function Y(H){Z(H),n.push(H)}function re(H,W){const X=H;n.forEach(function(fe){fe[X]&&fe[X](W)})}function oe(H){return In("10.7.0","highlightBlock will be removed entirely in v12.0"),In("10.7.0","Please use highlightElement now."),b(H)}Object.assign(s,{highlight:u,highlightAuto:m,highlightAll:C,highlightElement:b,highlightBlock:oe,configure:$,initHighlighting:T,initHighlightingOnLoad:E,registerLanguage:O,unregisterLanguage:I,listLanguages:L,getLanguage:F,registerAliases:z,autoDetection:U,inherit:Ol,addPlugin:Y}),s.debugMode=function(){o=!1},s.safeMode=function(){o=!0},s.versionString=fp,s.regex={concat:An,lookahead:Ai,either:Mo,optional:Ed,anyNumberOfTimes:Sd};for(const H in $s)typeof $s[H]=="object"&&No.exports($s[H]);return Object.assign(s,$s),s};var Jn=mp({}),hp=Jn;Jn.HighlightJS=Jn;Jn.default=Jn;const vs=hp;function gp(s){const e=s.regex,t=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),n=/[\p{L}0-9._:-]+/u,o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},l={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},r=s.inherit(l,{begin:/\(/,end:/\)/}),i=s.inherit(s.APOS_STRING_MODE,{className:"string"}),a=s.inherit(s.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:n,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[l,a,i,r,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[l,r,a,i]}]}]},s.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Ll="[A-Za-z$_][0-9A-Za-z$_]*",_p=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],bp=["true","false","null","undefined","NaN","Infinity"],Di=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Bi=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Fi=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],$p=["arguments","this","super","console","window","document","localStorage","module","global"],vp=[].concat(Fi,Di,Bi);function wp(s){const e=s.regex,t=(W,{after:X})=>{const fe="</"+W[0].slice(1);return W.input.indexOf(fe,X)!==-1},n=Ll,o={begin:"<>",end:"</>"},l=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(W,X)=>{const fe=W[0].length+W.index,_e=W.input[fe];if(_e==="<"||_e===","){X.ignoreMatch();return}_e===">"&&(t(W,{after:fe})||X.ignoreMatch());let ge;const Ce=W.input.substring(fe);if(ge=Ce.match(/^\s*=/)){X.ignoreMatch();return}if((ge=Ce.match(/^\s+extends\s+/))&&ge.index===0){X.ignoreMatch();return}}},i={$pattern:Ll,keyword:_p,literal:bp,built_in:vp,"variable.language":$p},a="[0-9](_?[0-9])*",c=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},g={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"css"}},b={className:"string",begin:"`",end:"`",contains:[s.BACKSLASH_ESCAPE,d]},T={className:"comment",variants:[s.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE]},E=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,m,g,b,{match:/\$\d+/},f];d.contains=E.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(E)});const D=[].concat(T,d.contains),C=D.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(D)}]),M={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:C},O={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,e.concat(n,"(",e.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},I={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Di,...Bi]}},L={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},F={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[M],illegal:/%/},z={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function U(W){return e.concat("(?!",W.join("|"),")")}const Z={match:e.concat(/\b/,U([...Fi,"super","import"]),n,e.lookahead(/\(/)),className:"title.function",relevance:0},Y={begin:e.concat(/\./,e.lookahead(e.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},re={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},M]},oe="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+s.UNDERSCORE_IDENT_RE+")\\s*=>",H={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(oe)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[M]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:C,CLASS_REFERENCE:I},illegal:/#(?![$_A-z])/,contains:[s.SHEBANG({label:"shebang",binary:"node",relevance:5}),L,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,m,g,b,T,{match:/\$\d+/},f,I,{className:"attr",begin:n+e.lookahead(":"),relevance:0},H,{begin:"("+s.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,s.REGEXP_MODE,{className:"function",begin:oe,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:C}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:l},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},F,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+s.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[M,s.inherit(s.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},Y,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[M]},Z,z,O,re,{match:/\$[(.]/}]}}const kp=s=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:s.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:s.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),yp=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Tp=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],xp=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],Sp=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],Ep=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function Ap(s){const e=s.regex,t=kp(s),n={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},o="and or not only",l=/@-?\w[\w]*(-\w+)*/,r="[a-zA-Z-][a-zA-Z0-9_-]*",i=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,n,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+r,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+xp.join("|")+")"},{begin:":(:)?("+Sp.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Ep.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...i,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...i,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:e.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:l},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:o,attribute:Tp.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...i,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+yp.join("|")+")\\b"}]}}const Cp=s=>({highlighted:s&2}),Dl=s=>({highlighted:s[1]});function Np(s){let e,t,n=[{"data-language":"svelte"},s[2]],o={};for(let l=0;l<n.length;l+=1)o=Et(o,n[l]);return{c(){e=_("pre"),t=_("code"),h(t,"class","hljs"),nl(e,o),Qe(e,"langtag",s[0]),Qe(e,"svelte-d72vtw",!0)},m(l,r){k(l,e,r),p(e,t),t.innerHTML=s[1]},p(l,r){r&2&&(t.innerHTML=l[1]),nl(e,o=xn(n,[{"data-language":"svelte"},r&4&&l[2]])),Qe(e,"langtag",l[0]),Qe(e,"svelte-d72vtw",!0)},d(l){l&&w(e)}}}function Pp(s){let e;const t=s[5].default,n=Be(t,s,s[4],Dl),o=n||Np(s);return{c(){o&&o.c()},m(l,r){o&&o.m(l,r),e=!0},p(l,[r]){n?n.p&&(!e||r&18)&&ze(n,t,l,l[4],e?Fe(t,l[4],r,Cp):He(l[4]),Dl):o&&o.p&&(!e||r&7)&&o.p(l,e?r:-1)},i(l){e||(y(o,l),e=!0)},o(l){S(o,l),e=!1},d(l){o&&o.d(l)}}}function Rp(s,e,t){let n;const o=["code","langtag"];let l=Ss(e,o),{$$slots:r={},$$scope:i}=e,{code:a}=e,{langtag:c=!1}=e;const u=go();return vs.registerLanguage("xml",gp),vs.registerLanguage("javascript",wp),vs.registerLanguage("css",Ap),Ac(()=>{n&&u("highlight",{highlighted:n})}),s.$$set=f=>{e=Et(Et({},e),Jr(f)),t(2,l=Ss(e,o)),"code"in f&&t(3,a=f.code),"langtag"in f&&t(0,c=f.langtag),"$$scope"in f&&t(4,i=f.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(1,n=vs.highlightAuto(a).value)},[c,n,l,a,i,r]}class Mp extends te{constructor(e){super(),ee(this,e,Rp,Pp,V,{code:3,langtag:0})}}const dt=Mp;function Op(s){let e;return{c(){e=j("First")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Ip(s){let e;return{c(){e=j("Second")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Lp(s){let e;return{c(){e=j("Third")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Bl(s){let e,t;return e=new ke({props:{$$slots:{default:[Dp]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},p(n,o){const l={};o&2050&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Dp(s){let e,t,n,o;return{c(){e=j("Fourth "),t=_("span"),t.textContent="×"},m(l,r){k(l,e,r),k(l,t,r),n||(o=J(t,"click",s[4]),n=!0)},p:le,d(l){l&&w(e),l&&w(t),n=!1,o()}}}function Fl(s){let e,t;return e=new ke({props:{$$slots:{default:[Bp]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},p(n,o){const l={};o&2052&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Bp(s){let e,t,n,o;return{c(){e=j("Fifth "),t=_("span"),t.textContent="×"},m(l,r){k(l,e,r),k(l,t,r),n||(o=J(t,"click",s[5]),n=!0)},p:le,d(l){l&&w(e),l&&w(t),n=!1,o()}}}function Fp(s){let e,t,n,o,l,r,i,a,c;e=new ke({props:{$$slots:{default:[Op]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[Ip]},$$scope:{ctx:s}}}),l=new ke({props:{disabled:s[0],$$slots:{default:[Lp]},$$scope:{ctx:s}}});let u=s[1]&&Bl(s),f=s[2]&&Fl(s);return{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),u&&u.c(),i=x(),f&&f.c(),a=Le()},m(d,m){N(e,d,m),k(d,t,m),N(n,d,m),k(d,o,m),N(l,d,m),k(d,r,m),u&&u.m(d,m),k(d,i,m),f&&f.m(d,m),k(d,a,m),c=!0},p(d,m){const g={};m&2048&&(g.$$scope={dirty:m,ctx:d}),e.$set(g);const b={};m&2048&&(b.$$scope={dirty:m,ctx:d}),n.$set(b);const $={};m&1&&($.disabled=d[0]),m&2048&&($.$$scope={dirty:m,ctx:d}),l.$set($),d[1]?u?(u.p(d,m),m&2&&y(u,1)):(u=Bl(d),u.c(),y(u,1),u.m(i.parentNode,i)):u&&(ye(),S(u,1,1,()=>{u=null}),Te()),d[2]?f?(f.p(d,m),m&4&&y(f,1)):(f=Fl(d),f.c(),y(f,1),f.m(a.parentNode,a)):f&&(ye(),S(f,1,1,()=>{f=null}),Te())},i(d){c||(y(e.$$.fragment,d),y(n.$$.fragment,d),y(l.$$.fragment,d),y(u),y(f),c=!0)},o(d){S(e.$$.fragment,d),S(n.$$.fragment,d),S(l.$$.fragment,d),S(u),S(f),c=!1},d(d){P(e,d),d&&w(t),P(n,d),d&&w(o),P(l,d),d&&w(r),u&&u.d(d),d&&w(i),f&&f.d(d),d&&w(a)}}}function zp(s){let e;return{c(){e=_("div"),e.textContent="These are the first diamonds I ever took from my first mine."},m(t,n){k(t,e,n)},p:le,d(t){t&&w(e)}}}function Hp(s){let e;return{c(){e=_("div"),e.textContent="The second stage supplements the first stage by adding the second rail tunnel."},m(t,n){k(t,e,n)},p:le,d(t){t&&w(e)}}}function jp(s){let e;return{c(){e=_("div"),e.textContent="Let's not worry about third or fourth place."},m(t,n){k(t,e,n)},p:le,d(t){t&&w(e)}}}function zl(s){let e,t;return e=new we({props:{$$slots:{default:[Up]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Up(s){let e;return{c(){e=_("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,n){k(t,e,n)},p:le,d(t){t&&w(e)}}}function Hl(s){let e,t;return e=new we({props:{$$slots:{default:[Kp]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Kp(s){let e;return{c(){e=_("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,n){k(t,e,n)},p:le,d(t){t&&w(e)}}}function qp(s){let e,t,n,o,l,r,i,a,c,u,f;e=new Tt({props:{$$slots:{default:[Fp]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[zp]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[Hp]},$$scope:{ctx:s}}}),i=new we({props:{$$slots:{default:[jp]},$$scope:{ctx:s}}});let d=s[1]&&zl(s),m=s[2]&&Hl(s);return{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment),a=x(),d&&d.c(),c=x(),m&&m.c(),u=Le()},m(g,b){N(e,g,b),k(g,t,b),N(n,g,b),k(g,o,b),N(l,g,b),k(g,r,b),N(i,g,b),k(g,a,b),d&&d.m(g,b),k(g,c,b),m&&m.m(g,b),k(g,u,b),f=!0},p(g,b){const $={};b&2055&&($.$$scope={dirty:b,ctx:g}),e.$set($);const T={};b&2048&&(T.$$scope={dirty:b,ctx:g}),n.$set(T);const E={};b&2048&&(E.$$scope={dirty:b,ctx:g}),l.$set(E);const D={};b&2048&&(D.$$scope={dirty:b,ctx:g}),i.$set(D),g[1]?d?b&2&&y(d,1):(d=zl(g),d.c(),y(d,1),d.m(c.parentNode,c)):d&&(ye(),S(d,1,1,()=>{d=null}),Te()),g[2]?m?b&4&&y(m,1):(m=Hl(g),m.c(),y(m,1),m.m(u.parentNode,u)):m&&(ye(),S(m,1,1,()=>{m=null}),Te())},i(g){f||(y(e.$$.fragment,g),y(n.$$.fragment,g),y(l.$$.fragment,g),y(i.$$.fragment,g),y(d),y(m),f=!0)},o(g){S(e.$$.fragment,g),S(n.$$.fragment,g),S(l.$$.fragment,g),S(i.$$.fragment,g),S(d),S(m),f=!1},d(g){P(e,g),g&&w(t),P(n,g),g&&w(o),P(l,g),g&&w(r),P(i,g),g&&w(a),d&&d.d(g),g&&w(c),m&&m.d(g),g&&w(u)}}}function Wp(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O,I,L,F,z,U,Z,Y={class:"mb-4",$$slots:{default:[qp]},$$scope:{ctx:s}};return t=new yt({props:Y}),s[6](t),F=new dt({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),R(t.$$.fragment),n=x(),o=_("div"),o.textContent="Use these controls to operate tabs.",l=x(),r=_("div"),i=_("label"),a=_("input"),c=j(" Fourth"),u=x(),f=_("label"),d=_("input"),m=j(" Fifth"),g=x(),b=_("label"),$=_("input"),T=j(" Disable Third"),E=x(),D=_("label"),C=j("Select "),M=_("input"),O=x(),I=_("h3"),I.textContent="Code",L=x(),R(F.$$.fragment),h(o,"class","py-2 border-t text-center text-gray-500"),h(a,"type","checkbox"),h(d,"type","checkbox"),h($,"type","checkbox"),h(M,"class","input max-w-[6ch]"),h(M,"type","number"),h(M,"min","-5"),h(M,"max","4"),h(r,"class","flex items-center place-content-center gap-4"),h(e,"class","prose max-w-none my-4 svelte-1b9uk6h")},m(re,oe){k(re,e,oe),N(t,e,null),p(e,n),p(e,o),p(e,l),p(e,r),p(r,i),p(i,a),a.checked=s[1],p(i,c),p(r,u),p(r,f),p(f,d),d.checked=s[2],p(f,m),p(r,g),p(r,b),p(b,$),$.checked=s[0],p(b,T),p(r,E),p(r,D),p(D,C),p(D,M),p(e,O),p(e,I),p(e,L),N(F,e,null),z=!0,U||(Z=[J(a,"change",s[7]),J(d,"change",s[8]),J($,"change",s[9]),J(M,"change",kc(s[10]))],U=!0)},p(re,[oe]){const H={};oe&2055&&(H.$$scope={dirty:oe,ctx:re}),t.$set(H),oe&2&&(a.checked=re[1]),oe&4&&(d.checked=re[2]),oe&1&&($.checked=re[0])},i(re){z||(y(t.$$.fragment,re),y(F.$$.fragment,re),z=!0)},o(re){S(t.$$.fragment,re),S(F.$$.fragment,re),z=!1},d(re){re&&w(e),s[6](null),P(t),P(F),U=!1,je(Z)}}}function Gp(s,e,t){let n=!1,o=!1,l=!1,r;const i=()=>t(1,o=!1),a=()=>t(2,l=!1);function c(g){Xe[g?"unshift":"push"](()=>{r=g,t(3,r)})}function u(){o=this.checked,t(1,o)}function f(){l=this.checked,t(2,l)}function d(){n=this.checked,t(0,n)}return[n,o,l,r,i,a,c,u,f,d,g=>r.selectTab(+g.currentTarget.value)]}let Zp=class extends te{constructor(e){super(),ee(this,e,Gp,Wp,V,{})}};function Xp(s){let e;return{c(){e=j("First-A")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Qp(s){let e;return{c(){e=j("First-B")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Yp(s){let e;return{c(){e=j("First-C")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Jp(s){let e;return{c(){e=j("First-D")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Vp(s){let e;return{c(){e=j("First-E")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function em(s){let e,t,n,o,l,r,i,a,c,u;return e=new ke({props:{$$slots:{default:[Xp]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[Qp]},$$scope:{ctx:s}}}),l=new ke({props:{disabled:!0,$$slots:{default:[Yp]},$$scope:{ctx:s}}}),i=new ke({props:{$$slots:{default:[Jp]},$$scope:{ctx:s}}}),c=new ke({props:{$$slots:{default:[Vp]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment),a=x(),R(c.$$.fragment)},m(f,d){N(e,f,d),k(f,t,d),N(n,f,d),k(f,o,d),N(l,f,d),k(f,r,d),N(i,f,d),k(f,a,d),N(c,f,d),u=!0},p(f,d){const m={};d&2&&(m.$$scope={dirty:d,ctx:f}),e.$set(m);const g={};d&2&&(g.$$scope={dirty:d,ctx:f}),n.$set(g);const b={};d&2&&(b.$$scope={dirty:d,ctx:f}),l.$set(b);const $={};d&2&&($.$$scope={dirty:d,ctx:f}),i.$set($);const T={};d&2&&(T.$$scope={dirty:d,ctx:f}),c.$set(T)},i(f){u||(y(e.$$.fragment,f),y(n.$$.fragment,f),y(l.$$.fragment,f),y(i.$$.fragment,f),y(c.$$.fragment,f),u=!0)},o(f){S(e.$$.fragment,f),S(n.$$.fragment,f),S(l.$$.fragment,f),S(i.$$.fragment,f),S(c.$$.fragment,f),u=!1},d(f){P(e,f),f&&w(t),P(n,f),f&&w(o),P(l,f),f&&w(r),P(i,f),f&&w(a),P(c,f)}}}function tm(s){let e;return{c(){e=j("Second-A")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function nm(s){let e;return{c(){e=j("Second-B")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function sm(s){let e;return{c(){e=j("Second-C")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function om(s){let e,t,n,o,l,r;return e=new ke({props:{$$slots:{default:[tm]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[nm]},$$scope:{ctx:s}}}),l=new ke({props:{$$slots:{default:[sm]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment)},m(i,a){N(e,i,a),k(i,t,a),N(n,i,a),k(i,o,a),N(l,i,a),r=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(y(e.$$.fragment,i),y(n.$$.fragment,i),y(l.$$.fragment,i),r=!0)},o(i){S(e.$$.fragment,i),S(n.$$.fragment,i),S(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&w(t),P(n,i),i&&w(o),P(l,i)}}}function lm(s){let e;return{c(){e=j("Fourth-A")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function rm(s){let e;return{c(){e=j("Fourth-B")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function im(s){let e,t,n,o;return e=new ke({props:{$$slots:{default:[lm]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[rm]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment)},m(l,r){N(e,l,r),k(l,t,r),N(n,l,r),o=!0},p(l,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:l}),e.$set(i);const a={};r&2&&(a.$$scope={dirty:r,ctx:l}),n.$set(a)},i(l){o||(y(e.$$.fragment,l),y(n.$$.fragment,l),o=!0)},o(l){S(e.$$.fragment,l),S(n.$$.fragment,l),o=!1},d(l){P(e,l),l&&w(t),P(n,l)}}}function am(s){let e,t=s[0]+"",n;return{c(){e=j("Fourth of Second-B. Tab: A, index "),n=j(t)},m(o,l){k(o,e,l),k(o,n,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Ie(n,t)},d(o){o&&w(e),o&&w(n)}}}function cm(s){let e,t=s[0]+"",n;return{c(){e=j("Fourth of Second-B. Tab: B, index "),n=j(t)},m(o,l){k(o,e,l),k(o,n,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Ie(n,t)},d(o){o&&w(e),o&&w(n)}}}function um(s){let e,t,n,o,l,r;return e=new Tt({props:{$$slots:{default:[im]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[am,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[cm,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment)},m(i,a){N(e,i,a),k(i,t,a),N(n,i,a),k(i,o,a),N(l,i,a),r=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(y(e.$$.fragment,i),y(n.$$.fragment,i),y(l.$$.fragment,i),r=!0)},o(i){S(e.$$.fragment,i),S(n.$$.fragment,i),S(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&w(t),P(n,i),i&&w(o),P(l,i)}}}function fm(s){let e,t,n=s[0]+"",o,l,r,i;return r=new yt({props:{class:"level-4",$$slots:{default:[um]},$$scope:{ctx:s}}}),{c(){e=_("div"),t=j("Second of First-A. Tab: A, index "),o=j(n),l=x(),R(r.$$.fragment)},m(a,c){k(a,e,c),p(e,t),p(e,o),k(a,l,c),N(r,a,c),i=!0},p(a,c){(!i||c&1)&&n!==(n=a[0]+"")&&Ie(o,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),r.$set(u)},i(a){i||(y(r.$$.fragment,a),i=!0)},o(a){S(r.$$.fragment,a),i=!1},d(a){a&&w(e),a&&w(l),P(r,a)}}}function dm(s){let e,t=s[0]+"",n;return{c(){e=j("Second of First-A. Tab: B, index "),n=j(t)},m(o,l){k(o,e,l),k(o,n,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Ie(n,t)},d(o){o&&w(e),o&&w(n)}}}function pm(s){let e,t=s[0]+"",n;return{c(){e=j("Second of First-A. Tab: C, index "),n=j(t)},m(o,l){k(o,e,l),k(o,n,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Ie(n,t)},d(o){o&&w(e),o&&w(n)}}}function mm(s){let e,t,n,o,l,r,i,a;return e=new Tt({props:{$$slots:{default:[om]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[fm,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[dm,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:s}}}),i=new we({props:{$$slots:{default:[pm,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment)},m(c,u){N(e,c,u),k(c,t,u),N(n,c,u),k(c,o,u),N(l,c,u),k(c,r,u),N(i,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&3&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const m={};u&3&&(m.$$scope={dirty:u,ctx:c}),l.$set(m);const g={};u&3&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||(y(e.$$.fragment,c),y(n.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(n.$$.fragment,c),S(l.$$.fragment,c),S(i.$$.fragment,c),a=!1},d(c){P(e,c),c&&w(t),P(n,c),c&&w(o),P(l,c),c&&w(r),P(i,c)}}}function hm(s){let e,t,n=s[0]+"",o,l,r,i;return r=new yt({props:{class:"level-2",$$slots:{default:[mm]},$$scope:{ctx:s}}}),{c(){e=_("div"),t=j("First level. Tab: A, index "),o=j(n),l=x(),R(r.$$.fragment)},m(a,c){k(a,e,c),p(e,t),p(e,o),k(a,l,c),N(r,a,c),i=!0},p(a,c){(!i||c&1)&&n!==(n=a[0]+"")&&Ie(o,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),r.$set(u)},i(a){i||(y(r.$$.fragment,a),i=!0)},o(a){S(r.$$.fragment,a),i=!1},d(a){a&&w(e),a&&w(l),P(r,a)}}}function gm(s){let e;return{c(){e=j("Third-A")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function _m(s){let e;return{c(){e=j("Third-B")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function bm(s){let e,t,n,o;return e=new ke({props:{$$slots:{default:[gm]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[_m]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment)},m(l,r){N(e,l,r),k(l,t,r),N(n,l,r),o=!0},p(l,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:l}),e.$set(i);const a={};r&2&&(a.$$scope={dirty:r,ctx:l}),n.$set(a)},i(l){o||(y(e.$$.fragment,l),y(n.$$.fragment,l),o=!0)},o(l){S(e.$$.fragment,l),S(n.$$.fragment,l),o=!1},d(l){P(e,l),l&&w(t),P(n,l)}}}function $m(s){let e,t=s[0]+"",n;return{c(){e=j("Third of First-B. Tab: A, index "),n=j(t)},m(o,l){k(o,e,l),k(o,n,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Ie(n,t)},d(o){o&&w(e),o&&w(n)}}}function vm(s){let e,t=s[0]+"",n;return{c(){e=j("Third of First-B. Tab: B, index "),n=j(t)},m(o,l){k(o,e,l),k(o,n,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Ie(n,t)},d(o){o&&w(e),o&&w(n)}}}function wm(s){let e,t,n,o,l,r;return e=new Tt({props:{$$slots:{default:[bm]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[$m,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[vm,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment)},m(i,a){N(e,i,a),k(i,t,a),N(n,i,a),k(i,o,a),N(l,i,a),r=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(y(e.$$.fragment,i),y(n.$$.fragment,i),y(l.$$.fragment,i),r=!0)},o(i){S(e.$$.fragment,i),S(n.$$.fragment,i),S(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&w(t),P(n,i),i&&w(o),P(l,i)}}}function km(s){let e,t,n=s[0]+"",o,l,r,i;return r=new yt({props:{class:"level-3",$$slots:{default:[wm]},$$scope:{ctx:s}}}),{c(){e=_("div"),t=j("First level. Tab: B, index "),o=j(n),l=x(),R(r.$$.fragment)},m(a,c){k(a,e,c),p(e,t),p(e,o),k(a,l,c),N(r,a,c),i=!0},p(a,c){(!i||c&1)&&n!==(n=a[0]+"")&&Ie(o,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),r.$set(u)},i(a){i||(y(r.$$.fragment,a),i=!0)},o(a){S(r.$$.fragment,a),i=!1},d(a){a&&w(e),a&&w(l),P(r,a)}}}function ym(s){let e,t=s[0]+"",n;return{c(){e=j("First level. Tab: C, index "),n=j(t)},m(o,l){k(o,e,l),k(o,n,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Ie(n,t)},d(o){o&&w(e),o&&w(n)}}}function Tm(s){let e,t=s[0]+"",n;return{c(){e=j("First level. Tab: D, index "),n=j(t)},m(o,l){k(o,e,l),k(o,n,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Ie(n,t)},d(o){o&&w(e),o&&w(n)}}}function xm(s){let e,t=s[0]+"",n;return{c(){e=j("First level. Tab: E, index "),n=j(t)},m(o,l){k(o,e,l),k(o,n,l)},p(o,l){l&1&&t!==(t=o[0]+"")&&Ie(n,t)},d(o){o&&w(e),o&&w(n)}}}function Sm(s){let e,t,n,o,l,r,i,a,c,u,f,d;return e=new Tt({props:{$$slots:{default:[em]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[hm,({index:m})=>({0:m}),({index:m})=>m?1:0]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[km,({index:m})=>({0:m}),({index:m})=>m?1:0]},$$scope:{ctx:s}}}),i=new we({props:{$$slots:{default:[ym,({index:m})=>({0:m}),({index:m})=>m?1:0]},$$scope:{ctx:s}}}),c=new we({props:{$$slots:{default:[Tm,({index:m})=>({0:m}),({index:m})=>m?1:0]},$$scope:{ctx:s}}}),f=new we({props:{$$slots:{default:[xm,({index:m})=>({0:m}),({index:m})=>m?1:0]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment),a=x(),R(c.$$.fragment),u=x(),R(f.$$.fragment)},m(m,g){N(e,m,g),k(m,t,g),N(n,m,g),k(m,o,g),N(l,m,g),k(m,r,g),N(i,m,g),k(m,a,g),N(c,m,g),k(m,u,g),N(f,m,g),d=!0},p(m,g){const b={};g&2&&(b.$$scope={dirty:g,ctx:m}),e.$set(b);const $={};g&3&&($.$$scope={dirty:g,ctx:m}),n.$set($);const T={};g&3&&(T.$$scope={dirty:g,ctx:m}),l.$set(T);const E={};g&3&&(E.$$scope={dirty:g,ctx:m}),i.$set(E);const D={};g&3&&(D.$$scope={dirty:g,ctx:m}),c.$set(D);const C={};g&3&&(C.$$scope={dirty:g,ctx:m}),f.$set(C)},i(m){d||(y(e.$$.fragment,m),y(n.$$.fragment,m),y(l.$$.fragment,m),y(i.$$.fragment,m),y(c.$$.fragment,m),y(f.$$.fragment,m),d=!0)},o(m){S(e.$$.fragment,m),S(n.$$.fragment,m),S(l.$$.fragment,m),S(i.$$.fragment,m),S(c.$$.fragment,m),S(f.$$.fragment,m),d=!1},d(m){P(e,m),m&&w(t),P(n,m),m&&w(o),P(l,m),m&&w(r),P(i,m),m&&w(a),P(c,m),m&&w(u),P(f,m)}}}function Em(s){let e,t,n,o,l,r,i;return t=new yt({props:{class:"level-1 min-h-[280px]",$$slots:{default:[Sm]},$$scope:{ctx:s}}}),r=new dt({props:{code:`<section class="prose max-w-none my-4">
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
</style>`}}),{c(){e=_("section"),R(t.$$.fragment),n=x(),o=_("h3"),o.textContent="Code",l=x(),R(r.$$.fragment),h(e,"class","prose max-w-none my-4 svelte-3sljvb")},m(a,c){k(a,e,c),N(t,e,null),p(e,n),p(e,o),p(e,l),N(r,e,null),i=!0},p(a,[c]){const u={};c&2&&(u.$$scope={dirty:c,ctx:a}),t.$set(u)},i(a){i||(y(t.$$.fragment,a),y(r.$$.fragment,a),i=!0)},o(a){S(t.$$.fragment,a),S(r.$$.fragment,a),i=!1},d(a){a&&w(e),P(t),P(r)}}}class Am extends te{constructor(e){super(),ee(this,e,null,Em,V,{})}}var Ms={},Cm={get exports(){return Ms},set exports(s){Ms=s}};(function(s,e){var t=200,n="Expected a function",o="__lodash_hash_undefined__",l=1,r=2,i=1/0,a=9007199254740991,c="[object Arguments]",u="[object Array]",f="[object Boolean]",d="[object Date]",m="[object Error]",g="[object Function]",b="[object GeneratorFunction]",$="[object Map]",T="[object Number]",E="[object Object]",D="[object Promise]",C="[object RegExp]",M="[object Set]",O="[object String]",I="[object Symbol]",L="[object WeakMap]",F="[object ArrayBuffer]",z="[object DataView]",U="[object Float32Array]",Z="[object Float64Array]",Y="[object Int8Array]",re="[object Int16Array]",oe="[object Int32Array]",H="[object Uint8Array]",W="[object Uint8ClampedArray]",X="[object Uint16Array]",fe="[object Uint32Array]",_e=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ge=/^\w*$/,Ce=/^\./,Ue=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Re=/[\\^$.*+?()[\]{}|]/g,Se=/\\(\\)?/g,ce=/^\[object .+?Constructor\]$/,Me=/^(?:0|[1-9]\d*)$/,ie={};ie[U]=ie[Z]=ie[Y]=ie[re]=ie[oe]=ie[H]=ie[W]=ie[X]=ie[fe]=!0,ie[c]=ie[u]=ie[F]=ie[f]=ie[z]=ie[d]=ie[m]=ie[g]=ie[$]=ie[T]=ie[E]=ie[C]=ie[M]=ie[O]=ie[L]=!1;var $e=typeof sn=="object"&&sn&&sn.Object===Object&&sn,ae=typeof self=="object"&&self&&self.Object===Object&&self,ve=$e||ae||Function("return this")(),Oe=e&&!e.nodeType&&e,Ae=Oe&&!0&&s&&!s.nodeType&&s,Ne=Ae&&Ae.exports===Oe,pt=Ne&&$e.process,mt=function(){try{return pt&&pt.binding("util")}catch(v){}}(),de=mt&&mt.isTypedArray;function et(v,A,B,K){for(var pe=-1,ne=v?v.length:0;++pe<ne;){var Ee=v[pe];A(K,Ee,B(Ee),v)}return K}function qe(v,A){for(var B=-1,K=v?v.length:0;++B<K;)if(A(v[B],B,v))return!0;return!1}function xe(v){return function(A){return A==null?void 0:A[v]}}function lt(v,A){for(var B=-1,K=Array(v);++B<v;)K[B]=A(B);return K}function at(v){return function(A){return v(A)}}function $t(v,A){return v==null?void 0:v[A]}function rt(v){var A=!1;if(v!=null&&typeof v.toString!="function")try{A=!!(v+"")}catch(B){}return A}function q(v){var A=-1,B=Array(v.size);return v.forEach(function(K,pe){B[++A]=[pe,K]}),B}function Q(v,A){return function(B){return v(A(B))}}function ue(v){var A=-1,B=Array(v.size);return v.forEach(function(K){B[++A]=K}),B}var G=Array.prototype,be=Function.prototype,De=Object.prototype,Pe=ve["__core-js_shared__"],tt=function(){var v=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||"");return v?"Symbol(src)_1."+v:""}(),Bt=be.toString,vt=De.hasOwnProperty,Ft=De.toString,dn=RegExp("^"+Bt.call(vt).replace(Re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Kn=ve.Symbol,pn=ve.Uint8Array,ns=De.propertyIsEnumerable,ss=G.splice,Rt=Q(Object.keys,Object),Qt=Pn(ve,"DataView"),Yt=Pn(ve,"Map"),Ct=Pn(ve,"Promise"),Mt=Pn(ve,"Set"),Cn=Pn(ve,"WeakMap"),Jt=Pn(Object,"create"),mn=gn(Qt),os=gn(Yt),Nn=gn(Ct),ls=gn(Mt),Vt=gn(Cn),zt=Kn?Kn.prototype:void 0,Zs=zt?zt.valueOf:void 0,zo=zt?zt.toString:void 0;function hn(v){var A=-1,B=v?v.length:0;for(this.clear();++A<B;){var K=v[A];this.set(K[0],K[1])}}function aa(){this.__data__=Jt?Jt(null):{}}function ca(v){return this.has(v)&&delete this.__data__[v]}function ua(v){var A=this.__data__;if(Jt){var B=A[v];return B===o?void 0:B}return vt.call(A,v)?A[v]:void 0}function fa(v){var A=this.__data__;return Jt?A[v]!==void 0:vt.call(A,v)}function da(v,A){var B=this.__data__;return B[v]=Jt&&A===void 0?o:A,this}hn.prototype.clear=aa,hn.prototype.delete=ca,hn.prototype.get=ua,hn.prototype.has=fa,hn.prototype.set=da;function Ht(v){var A=-1,B=v?v.length:0;for(this.clear();++A<B;){var K=v[A];this.set(K[0],K[1])}}function pa(){this.__data__=[]}function ma(v){var A=this.__data__,B=is(A,v);if(B<0)return!1;var K=A.length-1;return B==K?A.pop():ss.call(A,B,1),!0}function ha(v){var A=this.__data__,B=is(A,v);return B<0?void 0:A[B][1]}function ga(v){return is(this.__data__,v)>-1}function _a(v,A){var B=this.__data__,K=is(B,v);return K<0?B.push([v,A]):B[K][1]=A,this}Ht.prototype.clear=pa,Ht.prototype.delete=ma,Ht.prototype.get=ha,Ht.prototype.has=ga,Ht.prototype.set=_a;function jt(v){var A=-1,B=v?v.length:0;for(this.clear();++A<B;){var K=v[A];this.set(K[0],K[1])}}function ba(){this.__data__={hash:new hn,map:new(Yt||Ht),string:new hn}}function $a(v){return as(this,v).delete(v)}function va(v){return as(this,v).get(v)}function wa(v){return as(this,v).has(v)}function ka(v,A){return as(this,v).set(v,A),this}jt.prototype.clear=ba,jt.prototype.delete=$a,jt.prototype.get=va,jt.prototype.has=wa,jt.prototype.set=ka;function rs(v){var A=-1,B=v?v.length:0;for(this.__data__=new jt;++A<B;)this.add(v[A])}function ya(v){return this.__data__.set(v,o),this}function Ta(v){return this.__data__.has(v)}rs.prototype.add=rs.prototype.push=ya,rs.prototype.has=Ta;function Ut(v){this.__data__=new Ht(v)}function xa(){this.__data__=new Ht}function Sa(v){return this.__data__.delete(v)}function Ea(v){return this.__data__.get(v)}function Aa(v){return this.__data__.has(v)}function Ca(v,A){var B=this.__data__;if(B instanceof Ht){var K=B.__data__;if(!Yt||K.length<t-1)return K.push([v,A]),this;B=this.__data__=new jt(K)}return B.set(v,A),this}Ut.prototype.clear=xa,Ut.prototype.delete=Sa,Ut.prototype.get=Ea,Ut.prototype.has=Aa,Ut.prototype.set=Ca;function Na(v,A){var B=tn(v)||Zo(v)?lt(v.length,String):[],K=B.length,pe=!!K;for(var ne in v)(A||vt.call(v,ne))&&!(pe&&(ne=="length"||Ko(ne,K)))&&B.push(ne);return B}function is(v,A){for(var B=v.length;B--;)if(Go(v[B][0],A))return B;return-1}function Pa(v,A,B,K){return Ra(v,function(pe,ne,Ee){A(K,pe,B(pe),Ee)}),K}var Ra=Za(Oa),Ma=Xa();function Oa(v,A){return v&&Ma(v,A,ps)}function Ho(v,A){A=cs(A,v)?[A]:jo(A);for(var B=0,K=A.length;v!=null&&B<K;)v=v[us(A[B++])];return B&&B==K?v:void 0}function Ia(v){return Ft.call(v)}function La(v,A){return v!=null&&A in Object(v)}function Xs(v,A,B,K,pe){return v===A?!0:v==null||A==null||!fs(v)&&!ds(A)?v!==v&&A!==A:Da(v,A,Xs,B,K,pe)}function Da(v,A,B,K,pe,ne){var Ee=tn(v),We=tn(A),Ze=u,nt=u;Ee||(Ze=en(v),Ze=Ze==c?E:Ze),We||(nt=en(A),nt=nt==c?E:nt);var ft=Ze==E&&!rt(v),ht=nt==E&&!rt(A),st=Ze==nt;if(st&&!ft)return ne||(ne=new Ut),Ee||rc(v)?Uo(v,A,B,K,pe,ne):Qa(v,A,Ze,B,K,pe,ne);if(!(pe&r)){var xt=ft&&vt.call(v,"__wrapped__"),St=ht&&vt.call(A,"__wrapped__");if(xt||St){var nn=xt?v.value():v,Kt=St?A.value():A;return ne||(ne=new Ut),B(nn,Kt,K,pe,ne)}}return st?(ne||(ne=new Ut),Ya(v,A,B,K,pe,ne)):!1}function Ba(v,A,B,K){var pe=B.length,ne=pe,Ee=!K;if(v==null)return!ne;for(v=Object(v);pe--;){var We=B[pe];if(Ee&&We[2]?We[1]!==v[We[0]]:!(We[0]in v))return!1}for(;++pe<ne;){We=B[pe];var Ze=We[0],nt=v[Ze],ft=We[1];if(Ee&&We[2]){if(nt===void 0&&!(Ze in v))return!1}else{var ht=new Ut;if(K)var st=K(nt,ft,Ze,v,A,ht);if(!(st===void 0?Xs(ft,nt,K,l|r,ht):st))return!1}}return!0}function Fa(v){if(!fs(v)||tc(v))return!1;var A=Xo(v)||rt(v)?dn:ce;return A.test(gn(v))}function za(v){return ds(v)&&Js(v.length)&&!!ie[Ft.call(v)]}function Ha(v){return typeof v=="function"?v:v==null?uc:typeof v=="object"?tn(v)?Ka(v[0],v[1]):Ua(v):fc(v)}function ja(v){if(!nc(v))return Rt(v);var A=[];for(var B in Object(v))vt.call(v,B)&&B!="constructor"&&A.push(B);return A}function Ua(v){var A=Ja(v);return A.length==1&&A[0][2]?Wo(A[0][0],A[0][1]):function(B){return B===v||Ba(B,v,A)}}function Ka(v,A){return cs(v)&&qo(A)?Wo(us(v),A):function(B){var K=ac(B,v);return K===void 0&&K===A?cc(B,v):Xs(A,K,void 0,l|r)}}function qa(v){return function(A){return Ho(A,v)}}function Wa(v){if(typeof v=="string")return v;if(Vs(v))return zo?zo.call(v):"";var A=v+"";return A=="0"&&1/v==-i?"-0":A}function jo(v){return tn(v)?v:sc(v)}function Ga(v,A){return function(B,K){var pe=tn(B)?et:Pa,ne=A?A():{};return pe(B,v,Ha(K),ne)}}function Za(v,A){return function(B,K){if(B==null)return B;if(!Ys(B))return v(B,K);for(var pe=B.length,ne=A?pe:-1,Ee=Object(B);(A?ne--:++ne<pe)&&K(Ee[ne],ne,Ee)!==!1;);return B}}function Xa(v){return function(A,B,K){for(var pe=-1,ne=Object(A),Ee=K(A),We=Ee.length;We--;){var Ze=Ee[v?We:++pe];if(B(ne[Ze],Ze,ne)===!1)break}return A}}function Uo(v,A,B,K,pe,ne){var Ee=pe&r,We=v.length,Ze=A.length;if(We!=Ze&&!(Ee&&Ze>We))return!1;var nt=ne.get(v);if(nt&&ne.get(A))return nt==A;var ft=-1,ht=!0,st=pe&l?new rs:void 0;for(ne.set(v,A),ne.set(A,v);++ft<We;){var xt=v[ft],St=A[ft];if(K)var nn=Ee?K(St,xt,ft,A,v,ne):K(xt,St,ft,v,A,ne);if(nn!==void 0){if(nn)continue;ht=!1;break}if(st){if(!qe(A,function(Kt,_n){if(!st.has(_n)&&(xt===Kt||B(xt,Kt,K,pe,ne)))return st.add(_n)})){ht=!1;break}}else if(!(xt===St||B(xt,St,K,pe,ne))){ht=!1;break}}return ne.delete(v),ne.delete(A),ht}function Qa(v,A,B,K,pe,ne,Ee){switch(B){case z:if(v.byteLength!=A.byteLength||v.byteOffset!=A.byteOffset)return!1;v=v.buffer,A=A.buffer;case F:return!(v.byteLength!=A.byteLength||!K(new pn(v),new pn(A)));case f:case d:case T:return Go(+v,+A);case m:return v.name==A.name&&v.message==A.message;case C:case O:return v==A+"";case $:var We=q;case M:var Ze=ne&r;if(We||(We=ue),v.size!=A.size&&!Ze)return!1;var nt=Ee.get(v);if(nt)return nt==A;ne|=l,Ee.set(v,A);var ft=Uo(We(v),We(A),K,pe,ne,Ee);return Ee.delete(v),ft;case I:if(Zs)return Zs.call(v)==Zs.call(A)}return!1}function Ya(v,A,B,K,pe,ne){var Ee=pe&r,We=ps(v),Ze=We.length,nt=ps(A),ft=nt.length;if(Ze!=ft&&!Ee)return!1;for(var ht=Ze;ht--;){var st=We[ht];if(!(Ee?st in A:vt.call(A,st)))return!1}var xt=ne.get(v);if(xt&&ne.get(A))return xt==A;var St=!0;ne.set(v,A),ne.set(A,v);for(var nn=Ee;++ht<Ze;){st=We[ht];var Kt=v[st],_n=A[st];if(K)var Qo=Ee?K(_n,Kt,st,A,v,ne):K(Kt,_n,st,v,A,ne);if(!(Qo===void 0?Kt===_n||B(Kt,_n,K,pe,ne):Qo)){St=!1;break}nn||(nn=st=="constructor")}if(St&&!nn){var ms=v.constructor,hs=A.constructor;ms!=hs&&"constructor"in v&&"constructor"in A&&!(typeof ms=="function"&&ms instanceof ms&&typeof hs=="function"&&hs instanceof hs)&&(St=!1)}return ne.delete(v),ne.delete(A),St}function as(v,A){var B=v.__data__;return ec(A)?B[typeof A=="string"?"string":"hash"]:B.map}function Ja(v){for(var A=ps(v),B=A.length;B--;){var K=A[B],pe=v[K];A[B]=[K,pe,qo(pe)]}return A}function Pn(v,A){var B=$t(v,A);return Fa(B)?B:void 0}var en=Ia;(Qt&&en(new Qt(new ArrayBuffer(1)))!=z||Yt&&en(new Yt)!=$||Ct&&en(Ct.resolve())!=D||Mt&&en(new Mt)!=M||Cn&&en(new Cn)!=L)&&(en=function(v){var A=Ft.call(v),B=A==E?v.constructor:void 0,K=B?gn(B):void 0;if(K)switch(K){case mn:return z;case os:return $;case Nn:return D;case ls:return M;case Vt:return L}return A});function Va(v,A,B){A=cs(A,v)?[A]:jo(A);for(var K,pe=-1,Ee=A.length;++pe<Ee;){var ne=us(A[pe]);if(!(K=v!=null&&B(v,ne)))break;v=v[ne]}if(K)return K;var Ee=v?v.length:0;return!!Ee&&Js(Ee)&&Ko(ne,Ee)&&(tn(v)||Zo(v))}function Ko(v,A){return A=A==null?a:A,!!A&&(typeof v=="number"||Me.test(v))&&v>-1&&v%1==0&&v<A}function cs(v,A){if(tn(v))return!1;var B=typeof v;return B=="number"||B=="symbol"||B=="boolean"||v==null||Vs(v)?!0:ge.test(v)||!_e.test(v)||A!=null&&v in Object(A)}function ec(v){var A=typeof v;return A=="string"||A=="number"||A=="symbol"||A=="boolean"?v!=="__proto__":v===null}function tc(v){return!!tt&&tt in v}function nc(v){var A=v&&v.constructor,B=typeof A=="function"&&A.prototype||De;return v===B}function qo(v){return v===v&&!fs(v)}function Wo(v,A){return function(B){return B==null?!1:B[v]===A&&(A!==void 0||v in Object(B))}}var sc=Qs(function(v){v=ic(v);var A=[];return Ce.test(v)&&A.push(""),v.replace(Ue,function(B,K,pe,ne){A.push(pe?ne.replace(Se,"$1"):K||B)}),A});function us(v){if(typeof v=="string"||Vs(v))return v;var A=v+"";return A=="0"&&1/v==-i?"-0":A}function gn(v){if(v!=null){try{return Bt.call(v)}catch(A){}try{return v+""}catch(A){}}return""}var oc=Ga(function(v,A,B){vt.call(v,B)?v[B].push(A):v[B]=[A]});function Qs(v,A){if(typeof v!="function"||A&&typeof A!="function")throw new TypeError(n);var B=function(){var K=arguments,pe=A?A.apply(this,K):K[0],ne=B.cache;if(ne.has(pe))return ne.get(pe);var Ee=v.apply(this,K);return B.cache=ne.set(pe,Ee),Ee};return B.cache=new(Qs.Cache||jt),B}Qs.Cache=jt;function Go(v,A){return v===A||v!==v&&A!==A}function Zo(v){return lc(v)&&vt.call(v,"callee")&&(!ns.call(v,"callee")||Ft.call(v)==c)}var tn=Array.isArray;function Ys(v){return v!=null&&Js(v.length)&&!Xo(v)}function lc(v){return ds(v)&&Ys(v)}function Xo(v){var A=fs(v)?Ft.call(v):"";return A==g||A==b}function Js(v){return typeof v=="number"&&v>-1&&v%1==0&&v<=a}function fs(v){var A=typeof v;return!!v&&(A=="object"||A=="function")}function ds(v){return!!v&&typeof v=="object"}function Vs(v){return typeof v=="symbol"||ds(v)&&Ft.call(v)==I}var rc=de?at(de):za;function ic(v){return v==null?"":Wa(v)}function ac(v,A,B){var K=v==null?void 0:Ho(v,A);return K===void 0?B:K}function cc(v,A){return v!=null&&Va(v,A,La)}function ps(v){return Ys(v)?Na(v):ja(v)}function uc(v){return v}function fc(v){return cs(v)?xe(us(v)):qa(v)}s.exports=oc})(Cm,Ms);const zi=Ms;function jl(s,e,t){const n=s.slice();return n[13]=e[t],n}function Ul(s,e,t){const n=s.slice();return n[17]=e[t],n}function Kl(s,e,t){const n=s.slice();return n[21]=e[t],n[23]=t,n}function ql(s,e,t){const n=s.slice();return n[21]=e[t],n}function Nm(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:Om,then:Mm,catch:Rm,value:24,error:20};return Cs(t=s[1],n),{c(){e=Le(),n.block.c()},m(o,l){k(o,e,l),n.block.m(o,n.anchor=l),n.mount=()=>e.parentNode,n.anchor=e},p(o,l){s=o,n.ctx=s,l&2&&t!==(t=s[1])&&Cs(t,n)||ii(n,s,l)},d(o){o&&w(e),n.block.d(o),n.token=null,n=null}}}function Pm(s){let e,t,n;return{c(){e=_("button"),e.textContent="Request authors",h(e,"class","input")},m(o,l){k(o,e,l),t||(n=J(e,"click",s[8]),t=!0)},p:le,d(o){o&&w(e),t=!1,n()}}}function Rm(s){let e,t,n,o=(s[20]instanceof Error?s[20].message:s[20])+"",l;return{c(){e=_("div"),t=j("Loading authors error: "),n=_("strong"),l=j(o),h(n,"class","text-red-600"),h(e,"class","text-red-400")},m(r,i){k(r,e,i),p(e,t),p(e,n),p(n,l)},p(r,i){i&2&&o!==(o=(r[20]instanceof Error?r[20].message:r[20])+"")&&Ie(l,o)},d(r){r&&w(e)}}}function Mm(s){let e,t,n,o,l,r,i,a,c,u,f=s[24],d=[];for(let m=0;m<f.length;m+=1)d[m]=Wl(ql(s,f,m));return{c(){e=_("div"),t=_("select"),n=_("option"),o=j("Select author");for(let m=0;m<d.length;m+=1)d[m].c();l=x(),r=_("button"),i=j("Get quotes"),n.__value=void 0,n.value=n.__value,n.hidden=!0,h(t,"class","input"),s[2]===void 0&&kt(()=>s[9].call(t)),h(r,"class","input"),r.disabled=a=s[2]==null},m(m,g){k(m,e,g),p(e,t),p(t,n),p(n,o);for(let b=0;b<d.length;b+=1)d[b].m(t,null);Ot(t,s[2]),p(e,l),p(e,r),p(r,i),c||(u=[J(t,"change",s[9]),J(r,"click",s[10])],c=!0)},p(m,g){if(g&10){f=m[24];let b;for(b=0;b<f.length;b+=1){const $=ql(m,f,b);d[b]?d[b].p($,g):(d[b]=Wl($),d[b].c(),d[b].m(t,null))}for(;b<d.length;b+=1)d[b].d(1);d.length=f.length}g&6&&Ot(t,m[2]),g&6&&a!==(a=m[2]==null)&&(r.disabled=a)},d(m){m&&w(e),Ye(d,m),c=!1,je(u)}}}function Wl(s){let e,t=s[21].name+"",n,o,l=s[21].quoteCount+"",r,i,a;return{c(){e=_("option"),n=j(t),o=j(": "),r=j(l),e.__value=i=s[21],e.value=e.__value,e.disabled=a=s[3].includes(s[21])},m(c,u){k(c,e,u),p(e,n),p(e,o),p(e,r)},p(c,u){u&2&&t!==(t=c[21].name+"")&&Ie(n,t),u&2&&l!==(l=c[21].quoteCount+"")&&Ie(r,l),u&2&&i!==(i=c[21])&&(e.__value=i,e.value=e.__value),u&10&&a!==(a=c[3].includes(c[21]))&&(e.disabled=a)},d(c){c&&w(e)}}}function Om(s){let e,t,n;return{c(){e=_("div"),t=x(),n=_("div"),n.textContent="Loading authors...",h(e,"class","text-blue-800 "+s[5]),h(n,"class","text-blue-800")},m(o,l){k(o,e,l),k(o,t,l),k(o,n,l)},p:le,d(o){o&&w(e),o&&w(t),o&&w(n)}}}function Gl(s){let e,t,n={class:"my-4 py-4 border-y border-gray-300",$$slots:{default:[Hm]},$$scope:{ctx:s}};return e=new yt({props:n}),s[12](e),{c(){R(e.$$.fragment)},m(o,l){N(e,o,l),t=!0},p(o,l){const r={};l&134217752&&(r.$$scope={dirty:l,ctx:o}),e.$set(r)},i(o){t||(y(e.$$.fragment,o),t=!0)},o(o){S(e.$$.fragment,o),t=!1},d(o){s[12](null),P(e,o)}}}function Im(s){let e,t,n,o=s[21].name+"",l,r,i,a,c=s[21].quoteCount+"",u,f,d,m;function g(){return s[11](s[23])}return{c(){e=_("button"),e.textContent="×",t=x(),n=_("span"),l=j(o),i=x(),a=_("span"),u=j(c),f=x(),h(e,"class","text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"),h(n,"class","grow text-left overflow-hidden text-ellipsis whitespace-nowrap"),h(n,"title",r=s[21].name),h(a,"class","text-xs px-1 rounded-md bg-gray-600 text-white font-bold")},m(b,$){k(b,e,$),k(b,t,$),k(b,n,$),p(n,l),k(b,i,$),k(b,a,$),p(a,u),k(b,f,$),d||(m=J(e,"click",g),d=!0)},p(b,$){s=b,$&8&&o!==(o=s[21].name+"")&&Ie(l,o),$&8&&r!==(r=s[21].name)&&h(n,"title",r),$&8&&c!==(c=s[21].quoteCount+"")&&Ie(u,c)},d(b){b&&w(e),b&&w(t),b&&w(n),b&&w(i),b&&w(a),b&&w(f),d=!1,m()}}}function Zl(s){let e,t;return e=new ke({props:{class:"flex items-center gap-2",$$slots:{default:[Im]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},p(n,o){const l={};o&134217736&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Lm(s){let e,t,n=s[3],o=[];for(let r=0;r<n.length;r+=1)o[r]=Zl(Kl(s,n,r));const l=r=>S(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Le()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);k(r,e,i),t=!0},p(r,i){if(i&136){n=r[3];let a;for(a=0;a<n.length;a+=1){const c=Kl(r,n,a);o[a]?(o[a].p(c,i),y(o[a],1)):(o[a]=Zl(c),o[a].c(),y(o[a],1),o[a].m(e.parentNode,e))}for(ye(),a=n.length;a<o.length;a+=1)l(a);Te()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)y(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)S(o[i]);t=!1},d(r){Ye(o,r),r&&w(e)}}}function Dm(s){let e,t,n,o,l,r,i=(s[20]instanceof Error?s[20].message:s[20])+"",a;return{c(){e=_("div"),t=_("div"),n=_("div"),n.textContent="Loading quotes error",o=x(),l=_("div"),r=_("strong"),a=j(i),h(n,"class","text-red-400"),h(r,"class","text-red-600"),h(t,"class","flex flex-col items-center"),h(e,"class","h-full flex items-center justify-center")},m(c,u){k(c,e,u),p(e,t),p(t,n),p(t,o),p(t,l),p(l,r),p(r,a)},p(c,u){u&16&&i!==(i=(c[20]instanceof Error?c[20].message:c[20])+"")&&Ie(a,i)},d(c){c&&w(e)}}}function Bm(s){let e,t=s[16],n=[];for(let o=0;o<t.length;o+=1)n[o]=Xl(Ul(s,t,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=Le()},m(o,l){for(let r=0;r<n.length;r+=1)n[r].m(o,l);k(o,e,l)},p(o,l){if(l&16){t=o[16];let r;for(r=0;r<t.length;r+=1){const i=Ul(o,t,r);n[r]?n[r].p(i,l):(n[r]=Xl(i),n[r].c(),n[r].m(e.parentNode,e))}for(;r<n.length;r+=1)n[r].d(1);n.length=t.length}},d(o){Ye(n,o),o&&w(e)}}}function Xl(s){let e,t,n,o,l,r=s[17].en+"",i,a,c,u=s[17].author+"",f,d;return{c(){e=_("div"),t=_("span"),t.textContent="“",n=x(),o=_("div"),l=_("div"),i=j(r),a=x(),c=_("div"),f=j(u),d=x(),h(t,"class","text-gray-200 text-7xl font-bold leading-[75%] mr-2"),h(l,"class","mb-3 leading-6"),h(c,"class","font-semibold italic text-right"),h(o,"class","grow"),h(e,"class","mb-2 last:mb-0 flex items-start")},m(m,g){k(m,e,g),p(e,t),p(e,n),p(e,o),p(o,l),p(l,i),p(o,a),p(o,c),p(c,f),p(e,d)},p(m,g){g&16&&r!==(r=m[17].en+"")&&Ie(i,r),g&16&&u!==(u=m[17].author+"")&&Ie(f,u)},d(m){m&&w(e)}}}function Fm(s){let e,t,n,o,l;return{c(){e=_("div"),t=_("div"),n=_("div"),o=x(),l=_("div"),l.textContent="Loading quotes...",h(n,"class","text-blue-800 w-12 h-12 "+s[5]),h(l,"class","text-blue-800"),h(t,"class","flex flex-col items-center"),h(e,"class","h-full flex items-center justify-center")},m(r,i){k(r,e,i),p(e,t),p(t,n),p(t,o),p(t,l)},p:le,d(r){r&&w(e)}}}function zm(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:Fm,then:Bm,catch:Dm,value:16,error:20};return Cs(e=s[13],n),{c(){n.block.c(),t=x()},m(o,l){n.block.m(o,n.anchor=l),n.mount=()=>t.parentNode,n.anchor=t,k(o,t,l)},p(o,l){s=o,n.ctx=s,l&16&&e!==(e=s[13])&&Cs(e,n)||ii(n,s,l)},d(o){n.block.d(o),n.token=null,n=null,o&&w(t)}}}function Ql(s){let e,t;return e=new we({props:{class:"px-4",$$slots:{default:[zm]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},p(n,o){const l={};o&134217744&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Hm(s){let e,t,n,o;e=new Tt({props:{class:"basis-[24ch] shrink-0",$$slots:{default:[Lm]},$$scope:{ctx:s}}});let l=s[4],r=[];for(let a=0;a<l.length;a+=1)r[a]=Ql(jl(s,l,a));const i=a=>S(r[a],1,1,()=>{r[a]=null});return{c(){R(e.$$.fragment),t=x(),n=_("div");for(let a=0;a<r.length;a+=1)r[a].c();h(n,"class","grow")},m(a,c){N(e,a,c),k(a,t,c),k(a,n,c);for(let u=0;u<r.length;u+=1)r[u].m(n,null);o=!0},p(a,c){const u={};if(c&134217736&&(u.$$scope={dirty:c,ctx:a}),e.$set(u),c&48){l=a[4];let f;for(f=0;f<l.length;f+=1){const d=jl(a,l,f);r[f]?(r[f].p(d,c),y(r[f],1)):(r[f]=Ql(d),r[f].c(),y(r[f],1),r[f].m(n,null))}for(ye(),f=l.length;f<r.length;f+=1)i(f);Te()}},i(a){if(!o){y(e.$$.fragment,a);for(let c=0;c<l.length;c+=1)y(r[c]);o=!0}},o(a){S(e.$$.fragment,a),r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)S(r[c]);o=!1},d(a){P(e,a),a&&w(t),a&&w(n),Ye(r,a)}}}function jm(s){let e,t,n,o,l,r,i,a,c,u;function f(b,$){return b[1]==null?Pm:Nm}let d=f(s),m=d(s),g=s[3].length&&Gl(s);return c=new dt({props:{code:`<script lang="ts">
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
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">Škola koda</a> is used`,n=x(),o=_("div"),m.c(),l=x(),g&&g.c(),r=x(),i=_("h3"),i.textContent="Code",a=x(),R(c.$$.fragment),h(t,"class","mb-4 text-center leading-5"),h(o,"class","flex items-center justify-center gap-2"),h(e,"class","prose max-w-none my-4 svelte-unmfi5")},m(b,$){k(b,e,$),p(e,t),p(e,n),p(e,o),m.m(o,null),p(e,l),g&&g.m(e,null),p(e,r),p(e,i),p(e,a),N(c,e,null),u=!0},p(b,[$]){d===(d=f(b))&&m?m.p(b,$):(m.d(1),m=d(b),m&&(m.c(),m.m(o,null))),b[3].length?g?(g.p(b,$),$&8&&y(g,1)):(g=Gl(b),g.c(),y(g,1),g.m(e,r)):g&&(ye(),S(g,1,1,()=>{g=null}),Te())},i(b){u||(y(g),y(c.$$.fragment,b),u=!0)},o(b){S(g),S(c.$$.fragment,b),u=!1},d(b){b&&w(e),m.d(),g&&g.d(),P(c)}}}const Um="skolacoda-quotes.json";function Hi(){return wt(this,null,function*(){const s=yield fetch(Um);if(s.status>=400){const e=yield s.text();throw new Error(`${s.status}: ${e||s.statusText}`)}return s.json()})}function Km(){return wt(this,null,function*(){return Object.entries(zi(yield Hi(),"author")).reduce((e,[t,n])=>(e.push({name:t,quoteCount:n.length}),e),[]).sort((e,t)=>e.name.localeCompare(t.name))})}function qm(s){return wt(this,null,function*(){var e;return(e=zi(yield Hi(),"author")[s])!=null?e:[]})}function Wm(s,e,t){const n="w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin";let o,l,r,i=[],a=[];function c($){return $!=null&&!i.includes($)?(t(3,i=[$,...i]),t(4,a=[qm($.name),...a]),o==null||o.selectTab(0),!0):!1}function u($){$>=0&&$<i.length&&(t(3,i=[...i.slice(0,$),...i.slice($+1)]),t(4,a=[...a.slice(0,$),...a.slice($+1)]))}const f=()=>{t(1,l=Km())};function d(){r=Gn(this),t(2,r),t(1,l)}const m=()=>c(r)?t(2,r=void 0):void 0,g=$=>u($);function b($){Xe[$?"unshift":"push"](()=>{o=$,t(0,o)})}return[o,l,r,i,a,n,c,u,f,d,m,g,b]}class Gm extends te{constructor(e){super(),ee(this,e,Wm,jm,V,{})}}const{document:Yl}=un;function Zm(s){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Xm(s){let e;return{c(){e=j("Base example")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Qm(s){let e;return{c(){e=j("Nested Example")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Ym(s){let e;return{c(){e=j("Quotes Example")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Jm(s){let e,t,n,o,l,r,i,a;return e=new ke({props:{$$slots:{default:[Zm]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[Xm]},$$scope:{ctx:s}}}),l=new ke({props:{$$slots:{default:[Qm]},$$scope:{ctx:s}}}),i=new ke({props:{$$slots:{default:[Ym]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment)},m(c,u){N(e,c,u),k(c,t,u),N(n,c,u),k(c,o,u),N(l,c,u),k(c,r,u),N(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),l.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||(y(e.$$.fragment,c),y(n.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(n.$$.fragment,c),S(l.$$.fragment,c),S(i.$$.fragment,c),a=!1},d(c){P(e,c),c&&w(t),P(n,c),c&&w(o),P(l,c),c&&w(r),P(i,c)}}}function Vm(s){let e,t;return e=new wd({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function eh(s){let e,t;return e=new Zp({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function th(s){let e,t;return e=new Am({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function nh(s){let e,t;return e=new Gm({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function sh(s){let e,t,n,o,l,r,i,a,c,u;return e=new Tt({props:{$$slots:{default:[Jm]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[Vm]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[eh]},$$scope:{ctx:s}}}),i=new we({props:{$$slots:{default:[th]},$$scope:{ctx:s}}}),c=new we({props:{$$slots:{default:[nh]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment),a=x(),R(c.$$.fragment)},m(f,d){N(e,f,d),k(f,t,d),N(n,f,d),k(f,o,d),N(l,f,d),k(f,r,d),N(i,f,d),k(f,a,d),N(c,f,d),u=!0},p(f,d){const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),e.$set(m);const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),n.$set(g);const b={};d&1&&(b.$$scope={dirty:d,ctx:f}),l.$set(b);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),i.$set($);const T={};d&1&&(T.$$scope={dirty:d,ctx:f}),c.$set(T)},i(f){u||(y(e.$$.fragment,f),y(n.$$.fragment,f),y(l.$$.fragment,f),y(i.$$.fragment,f),y(c.$$.fragment,f),u=!0)},o(f){S(e.$$.fragment,f),S(n.$$.fragment,f),S(l.$$.fragment,f),S(i.$$.fragment,f),S(c.$$.fragment,f),u=!1},d(f){P(e,f),f&&w(t),P(n,f),f&&w(o),P(l,f),f&&w(r),P(i,f),f&&w(a),P(c,f)}}}function oh(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b;return Yl.title=e=document.title.replace(/(•).*$/,"$1 Tabs"),g=new yt({props:{$$slots:{default:[sh]},$$scope:{ctx:s}}}),{c(){t=x(),n=_("section"),o=_("a"),o.textContent="Home",l=x(),r=_("h1"),r.textContent="A set of components for organizing a tabbed interface",i=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>with context to control tab switching</li>`,m=x(),R(g.$$.fragment),h(o,"class","float-right"),h(o,"href","/"),h(r,"class","text-2xl"),h(c,"class","max-w-[4em]"),ct(c.src,u=gt)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/tabs"),h(a,"target","_blank"),h(a,"rel","noreferrer"),h(d,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m($,T){k($,t,T),k($,n,T),p(n,o),p(n,l),p(n,r),p(n,i),p(n,a),p(a,c),p(n,f),p(n,d),p(n,m),N(g,n,null),b=!0},p($,[T]){(!b||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Tabs"))&&(Yl.title=e);const E={};T&1&&(E.$$scope={dirty:T,ctx:$}),g.$set(E)},i($){b||(y(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&w(t),$&&w(n),P(g)}}}let lh=class extends te{constructor(e){super(),ee(this,e,null,oh,V,{})}};const rh=`<div class="component__source">Source <code>Notifications.svelte</code></div>
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
<td class="exports__description">Store of notifications</td></tr></table>`;function ih(s){let e,t,n;return t=new En({props:{source:rh}}),{c(){e=_("section"),R(t.$$.fragment),h(e,"class","documentation")},m(o,l){k(o,e,l),N(t,e,null),n=!0},p:le,i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){S(t.$$.fragment,o),n=!1},d(o){o&&w(e),P(t)}}}class ah extends te{constructor(e){super(),ee(this,e,null,ih,V,{})}}const ch=`.c-notifications {
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
`,uh=`.c-notifications {
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
`;function fh(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function ji(s){const e=s-1;return e*e*e+1}function dh(s,{delay:e=0,duration:t=400,easing:n=fh,amount:o=5,opacity:l=0}={}){const r=getComputedStyle(s),i=+r.opacity,a=r.filter==="none"?"":r.filter,c=i*(1-l);return{delay:e,duration:t,easing:n,css:(u,f)=>`opacity: ${i-c*f}; filter: ${a} blur(${f*o}px);`}}function ph(s,{delay:e=0,duration:t=400,easing:n=Zr}={}){const o=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:n,css:l=>`opacity: ${l*o}`}}function Fn(s,{delay:e=0,duration:t=400,easing:n=ji}={}){const o=getComputedStyle(s),l=+o.opacity,r=parseFloat(o.height),i=parseFloat(o.paddingTop),a=parseFloat(o.paddingBottom),c=parseFloat(o.marginTop),u=parseFloat(o.marginBottom),f=parseFloat(o.borderTopWidth),d=parseFloat(o.borderBottomWidth);return{delay:e,duration:t,easing:n,css:m=>`overflow: hidden;opacity: ${Math.min(m*20,1)*l};height: ${m*r}px;padding-top: ${m*i}px;padding-bottom: ${m*a}px;margin-top: ${m*c}px;margin-bottom: ${m*u}px;border-top-width: ${m*f}px;border-bottom-width: ${m*d}px;`}}function mh(s,{delay:e=0,duration:t=400,easing:n=ji,start:o=0,opacity:l=0}={}){const r=getComputedStyle(s),i=+r.opacity,a=r.transform==="none"?"":r.transform,c=1-o,u=i*(1-l);return{delay:e,duration:t,easing:n,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${i-u*d}
		`}}function Jl(s,e,t){const n=s.slice();return n[8]=e[t],n}const hh=s=>({notification:s&16}),Vl=s=>({notification:s[8]});function gh(s){let e,t,n=(s[8].message||"No message")+"",o,l,r,i,a,c,u,f;function d(){return s[7](s[8])}return{c(){e=_("div"),t=_("span"),o=x(),l=_("span"),r=x(),h(t,"class","c-notifications__item__message"),h(l,"role","button"),h(l,"aria-label","Close notification"),h(l,"class","c-notifications__item__close"),h(e,"class",i="c-notifications__item"+(s[8].type?" "+s[8].type:""))},m(m,g){k(m,e,g),p(e,t),t.innerHTML=n,p(e,o),p(e,l),p(e,r),c=!0,u||(f=J(l,"click",d),u=!0)},p(m,g){s=m,(!c||g&16)&&n!==(n=(s[8].message||"No message")+"")&&(t.innerHTML=n),(!c||g&16&&i!==(i="c-notifications__item"+(s[8].type?" "+s[8].type:"")))&&h(e,"class",i)},i(m){c||(kt(()=>{a||(a=ln(e,s[2],s[3],!0)),a.run(1)}),c=!0)},o(m){a||(a=ln(e,s[2],s[3],!1)),a.run(0),c=!1},d(m){m&&w(e),m&&a&&a.end(),u=!1,f()}}}function er(s,e){let t,n;const o=e[6].default,l=Be(o,e,e[5],Vl),r=l||gh(e);return{key:s,first:null,c(){t=Le(),r&&r.c(),this.first=t},m(i,a){k(i,t,a),r&&r.m(i,a),n=!0},p(i,a){e=i,l?l.p&&(!n||a&48)&&ze(l,o,e,e[5],n?Fe(o,e[5],a,hh):He(e[5]),Vl):r&&r.p&&(!n||a&24)&&r.p(e,n?a:-1)},i(i){n||(y(r,i),n=!0)},o(i){S(r,i),n=!1},d(i){i&&w(t),r&&r.d(i)}}}function _h(s){let e,t=[],n=new Map,o,l,r,i=s[4];const a=c=>c[8].id;for(let c=0;c<i.length;c+=1){let u=Jl(s,i,c),f=a(u);n.set(f,t[c]=er(f,u))}return{c(){e=_("div");for(let c=0;c<t.length;c+=1)t[c].c();h(e,"class",o="c-notifications"+(s[0]?" "+s[0]:"")),h(e,"style",l=s[1]||void 0)},m(c,u){k(c,e,u);for(let f=0;f<t.length;f+=1)t[f].m(e,null);r=!0},p(c,[u]){u&56&&(i=c[4],ye(),t=Mc(t,u,a,1,c,i,n,e,Rc,er,null,Jl),Te()),(!r||u&1&&o!==(o="c-notifications"+(c[0]?" "+c[0]:"")))&&h(e,"class",o),(!r||u&2&&l!==(l=c[1]||void 0))&&h(e,"style",l)},i(c){if(!r){for(let u=0;u<i.length;u+=1)y(t[u]);r=!0}},o(c){for(let u=0;u<t.length;u+=1)S(t[u]);r=!1},d(c){c&&w(e);for(let u=0;u<t.length;u+=1)t[u].d()}}}let xs=!1;const Os=function(){const{subscribe:s,set:e,update:t}=yn([]);return{subscribe:s,clear(){e([])},push(n){if(!xs)throw new Error("No Notification component instance");const o=Je({id:Symbol("Notification")},n);return t(l=>[...l,o]),n.timeout&&n.timeout>0&&setTimeout(()=>this.pop(o.id),n.timeout),o.id},pop(n){t(o=>{const l=o.findIndex(r=>r.id===n);return l>=0&&o.splice(l,1),o})}}}();function bh(s,e,t){let n,o=le;vn(s,Os,d=>t(4,n=d)),s.$$.on_destroy.push(()=>o());let{$$slots:l={},$$scope:r}=e,{class:i=""}=e,{style:a=""}=e,{transitionFn:c=Fn}=e,{transitionParams:u={}}=e;Hn(()=>{if(xs)throw new Error("The Notifications component already has an instance");xs=!0}),ao(()=>xs=!1);const f=d=>Os.pop(d.id);return s.$$set=d=>{"class"in d&&t(0,i=d.class),"style"in d&&t(1,a=d.style),"transitionFn"in d&&t(2,c=d.transitionFn),"transitionParams"in d&&t(3,u=d.transitionParams),"$$scope"in d&&t(5,r=d.$$scope)},[i,a,c,u,n,r,l,f]}class $h extends te{constructor(e){super(),ee(this,e,bh,_h,V,{class:0,style:1,transitionFn:2,transitionParams:3})}}const lo=[{author:"Edsger W. Dijkstra",en:"Computer Science is no more about computers than astronomy is about telescopes."},{author:"Edsger W. Dijkstra",en:"Simplicity is prerequisite for reliability."},{author:"Edsger W. Dijkstra",en:"The computing scientist’s main challenge is not to get confused by the complexities of his own making."},{author:"Edsger W. Dijkstra",en:"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},{author:"Edsger W. Dijkstra",en:"A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent“."},{author:"Tony Hoare",en:"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},{author:"Jeff Hammerbacher",en:"The best minds of my generation are thinking about how to make people click ads."},{author:"Edsger W. Dijkstra",en:"The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities."},{author:"Edsger W. Dijkstra",en:'How do we convince people that in programming simplicity and clarity — in short: what mathematicians call "elegance" — are not a dispensable luxury, but a crucial matter that decides between success and failure?'},{author:"Fred Brooks",en:"Adding manpower to a late software project makes it later."},{author:"Michael Stal",en:"Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person."},{author:"Fred Brooks",en:"Nine women can't make a baby in one month."},{author:"Jeff Sickel",en:"Deleted code is debugged code."},{author:"Ken Thompson",en:"When in doubt, use brute force."},{author:"Fred Brooks",en:"When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned."},{author:"Fred Brooks",en:"If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two."},{author:"Fred Brooks",en:"Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect."},{author:"Fred Brooks",en:"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures."},{author:"Fred Brooks",en:'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.'},{author:"Donald Knuth",en:"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%."},{author:"Ken Thompson",en:"One of my most productive days was throwing away 1,000 lines of code."},{author:"Grace Hopper",en:"One accurate measurement is worth more than a thousand expert opinions."},{author:"Fred Brooks",en:"What one programmer can do in one month, two programmers can do in two months."},{author:"Rick Osborne",en:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},{author:"John Ousterhout",en:"A program that produces incorrect results twice as fast is infinitely slower."},{author:"Poul Anderson",en:"I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated."},{author:"Robert C. Martin",en:"Cleaning code does NOT take time. NOT cleaning code does take time."},{author:"David Gelernter",en:"Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity."},{author:"Edward V. Berard",en:"Walking on water and developing software from a specification are easy if both are frozen."},{author:"Brian Kernighan",en:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},{author:"Brian Kernighan",en:"Controlling complexity is the essence of computer programming."},{author:"Chris Wenham",en:"Debugging time increases as a square of the program’s size."},{author:"Seymour Cray",en:"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."},{author:"Ron Jeffries",en:"Code never lies, comments sometimes do."},{author:"Laurence J. Peter",en:"Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them."},{author:"Poul-Henning Kamp",en:'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.'},{author:"Albert Einstein",en:"I have no special talent. I am only passionately curious."},{author:"Robert C. Martin",en:"The proper use of comments is to compensate for our failure to express ourself in code."},{author:"Rob Pike",en:"When there is no type hierarchy you don’t have to manage the type hierarchy."},{author:"Steve Jobs",en:"Everybody should learn to program a computer, because it teaches you how to think."},{author:"Chris Sacca",en:"Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for."},{author:"Bill Gates",en:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},{author:"William Wulf",en:"More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity."},{author:"Edsger W. Dijkstra",en:"Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence."},{author:"Albert Einstein",en:"Imagination is more important than knowledge."}];function tr(s,e,t){const n=s.slice();return n[20]=e[t],n}function nr(s,e,t){const n=s.slice();return n[23]=e[t],n}function sr(s){let e,t,n,o=s[23]+"",l,r,i;return{c(){e=_("label"),t=_("input"),n=x(),l=j(o),h(t,"type","radio"),h(t,"name","styles"),t.__value=s[23],t.value=t.__value,s[12][2].push(t),h(e,"class","mr-2 last:mr-0")},m(a,c){k(a,e,c),p(e,t),t.checked=t.__value===s[3],p(e,n),p(e,l),r||(i=J(t,"change",s[17]),r=!0)},p(a,c){c&8&&(t.checked=t.__value===a[3])},d(a){a&&w(e),s[12][2].splice(s[12][2].indexOf(t),1),r=!1,i()}}}function or(s){let e,t=s[20]+"",n;return{c(){e=_("option"),n=j(t),e.__value=s[20],e.value=e.__value},m(o,l){k(o,e,l),p(e,n)},p:le,d(o){o&&w(e)}}}function vh(s){let e,t=`<style type="text/css" data-text="test">${s[7][s[3]]}</style>`,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O,I,L,F,z,U,Z,Y,re,oe,H,W,X,fe,_e,ge,Ce,Ue,Re,Se,ce,Me,ie,$e,ae,ve,Oe,Ae,Ne,pt,mt,de,et,qe,xe,lt,at,$t;r=new $h({props:{style:"display: flex; "+s[0]+s[1]}});let rt=Object.keys(s[7]),q=[];for(let G=0;G<rt.length;G+=1)q[G]=sr(nr(s,rt,G));let Q=s[8],ue=[];for(let G=0;G<Q.length;G+=1)ue[G]=or(tr(s,Q,G));return xe=new dt({props:{code:`<script lang="ts">
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
</section>`}}),{c(){e=new si(!1),n=Le(),o=x(),l=_("section"),R(r.$$.fragment),i=x(),a=_("div"),a.innerHTML='This example uses quotes from the <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">API</a>  <a target="_blank" rel="noreferrer" href="https://github.com/skolakoda">Škola koda</a>',c=x(),u=_("form"),f=_("div"),d=_("div"),m=_("div"),m.textContent="Side",g=x(),b=_("label"),$=_("input"),T=j(" left"),E=x(),D=_("label"),C=_("input"),M=j(" right"),O=x(),I=_("div"),L=_("div"),L.textContent="Direction",F=x(),z=_("label"),U=_("input"),Z=j(" from top"),Y=x(),re=_("label"),oe=_("input"),H=j(" from bottom"),W=x(),X=_("label"),fe=_("div"),fe.textContent="Timeout",_e=x(),ge=_("input"),Ce=x(),Ue=_("div"),Re=_("div"),Re.textContent="Style",Se=x();for(let G=0;G<q.length;G+=1)q[G].c();ce=x(),Me=_("label"),ie=_("textarea"),$e=x(),ae=_("div"),ve=_("label"),Oe=_("input"),Ae=x(),Ne=_("select");for(let G=0;G<ue.length;G+=1)ue[G].c();pt=x(),mt=_("div"),mt.innerHTML=`<input class="input block w-40" type="submit" value="Notify"/> 
      <input class="input block w-40" type="reset" value="Clear"/>`,de=x(),et=_("h3"),et.textContent="Code",qe=x(),R(xe.$$.fragment),e.a=n,h(a,"class","mb-4 text-center"),h(m,"class","text-sm uppercase opacity-70"),h($,"type","radio"),h($,"name","hpos"),$.__value="left: 0; right: unset;",$.value=$.__value,s[12][0].push($),h(C,"type","radio"),h(C,"name","hpos"),C.__value="right: 0;",C.value=C.__value,s[12][0].push(C),h(L,"class","text-sm uppercase opacity-70"),h(U,"type","radio"),h(U,"name","vpos"),U.__value="top: 0; bottom: unset; flex-direction: column-reverse;",U.value=U.__value,s[12][1].push(U),h(oe,"type","radio"),h(oe,"name","vpos"),oe.__value="top: unset; bottom: 0; flex-direction: column;",oe.value=oe.__value,s[12][1].push(oe),h(fe,"class","text-sm uppercase opacity-70"),h(ge,"class","input w-[9ch]"),h(ge,"min","0"),h(ge,"step","100"),h(ge,"type","number"),h(Re,"class","text-sm uppercase opacity-70"),h(f,"class","flex gap-4 items-center justify-evenly mb-4"),h(ie,"name","quote"),ie.value=s[6],h(ie,"rows","3"),h(ie,"class","input w-full"),h(ie,"placeholder","Quote"),h(Me,"class","block w-full mb-4"),h(Oe,"name","author"),Oe.value=s[5],h(Oe,"class","input w-full"),h(Oe,"type","text"),h(Oe,"placeholder","Author"),h(ve,"class","block w-full"),h(Ne,"class","input block w-full"),s[4]===void 0&&kt(()=>s[18].call(Ne)),h(ae,"class","mb-4 flex gap-4"),h(mt,"class","mx-auto w-fit flex gap-4"),h(u,"class","not-prose w-full"),h(l,"class","prose max-w-none my-4")},m(G,be){e.m(t,document.head),p(document.head,n),k(G,o,be),k(G,l,be),N(r,l,null),p(l,i),p(l,a),p(l,c),p(l,u),p(u,f),p(f,d),p(d,m),p(d,g),p(d,b),p(b,$),$.checked=$.__value===s[0],p(b,T),p(d,E),p(d,D),p(D,C),C.checked=C.__value===s[0],p(D,M),p(f,O),p(f,I),p(I,L),p(I,F),p(I,z),p(z,U),U.checked=U.__value===s[1],p(z,Z),p(I,Y),p(I,re),p(re,oe),oe.checked=oe.__value===s[1],p(re,H),p(f,W),p(f,X),p(X,fe),p(X,_e),p(X,ge),_t(ge,s[2]),p(f,Ce),p(f,Ue),p(Ue,Re),p(Ue,Se);for(let De=0;De<q.length;De+=1)q[De].m(Ue,null);p(u,ce),p(u,Me),p(Me,ie),p(u,$e),p(u,ae),p(ae,ve),p(ve,Oe),p(ae,Ae),p(ae,Ne);for(let De=0;De<ue.length;De+=1)ue[De].m(Ne,null);Ot(Ne,s[4]),p(u,pt),p(u,mt),p(l,de),p(l,et),p(l,qe),N(xe,l,null),lt=!0,at||($t=[J($,"change",s[11]),J(C,"change",s[13]),J(U,"change",s[14]),J(oe,"change",s[15]),J(ge,"input",s[16]),J(Ne,"change",s[18]),J(u,"submit",tl(s[9])),J(u,"reset",tl(s[19]))],at=!0)},p(G,[be]){(!lt||be&8)&&t!==(t=`<style type="text/css" data-text="test">${G[7][G[3]]}</style>`)&&e.p(t);const De={};if(be&3&&(De.style="display: flex; "+G[0]+G[1]),r.$set(De),be&1&&($.checked=$.__value===G[0]),be&1&&(C.checked=C.__value===G[0]),be&2&&(U.checked=U.__value===G[1]),be&2&&(oe.checked=oe.__value===G[1]),be&4&&At(ge.value)!==G[2]&&_t(ge,G[2]),be&136){rt=Object.keys(G[7]);let Pe;for(Pe=0;Pe<rt.length;Pe+=1){const tt=nr(G,rt,Pe);q[Pe]?q[Pe].p(tt,be):(q[Pe]=sr(tt),q[Pe].c(),q[Pe].m(Ue,null))}for(;Pe<q.length;Pe+=1)q[Pe].d(1);q.length=rt.length}if((!lt||be&64)&&(ie.value=G[6]),(!lt||be&32&&Oe.value!==G[5])&&(Oe.value=G[5]),be&256){Q=G[8];let Pe;for(Pe=0;Pe<Q.length;Pe+=1){const tt=tr(G,Q,Pe);ue[Pe]?ue[Pe].p(tt,be):(ue[Pe]=or(tt),ue[Pe].c(),ue[Pe].m(Ne,null))}for(;Pe<ue.length;Pe+=1)ue[Pe].d(1);ue.length=Q.length}be&272&&Ot(Ne,G[4])},i(G){lt||(y(r.$$.fragment,G),y(xe.$$.fragment,G),lt=!0)},o(G){S(r.$$.fragment,G),S(xe.$$.fragment,G),lt=!1},d(G){w(n),G&&e.d(),G&&w(o),G&&w(l),P(r),s[12][0].splice(s[12][0].indexOf($),1),s[12][0].splice(s[12][0].indexOf(C),1),s[12][1].splice(s[12][1].indexOf(U),1),s[12][1].splice(s[12][1].indexOf(oe),1),Ye(q,G),Ye(ue,G),P(xe),at=!1,je($t)}}}function wh(s,e,t){let n,o,l=0,r="left: 0; right: unset;",i="top: 0; bottom: unset; flex-direction: column-reverse;",a=1e4,c={simple:ch,bootstrap:uh},u=Object.keys(c)[0];const f=["primary","secondary","success","danger","warning","info","light","dark"];let d=f[0];function m({currentTarget:I}){if(I instanceof HTMLFormElement){const L=I.elements.quote.value,F=I.author.value;Os.push({message:[L?`<div>${L}</div>`:"",F?`<div class="italic text-right">${F}</div>`:""].filter(U=>!!U).join(""),type:d,timeout:a}),t(10,l=l+1>=lo.length?0:l+1);let z=f.indexOf(d)+1;z<0||z>=f.length?t(4,d=f[0]):t(4,d=f[z])}}const g=[[],[],[]];function b(){r=this.__value,t(0,r)}function $(){r=this.__value,t(0,r)}function T(){i=this.__value,t(1,i)}function E(){i=this.__value,t(1,i)}function D(){a=At(this.value),t(2,a)}function C(){u=this.__value,t(3,u)}function M(){d=Gn(this),t(4,d),t(8,f)}const O=()=>Os.clear();return s.$$.update=()=>{s.$$.dirty&1024&&t(6,n=lo[l].en),s.$$.dirty&1024&&t(5,o=lo[l].author)},[r,i,a,u,d,o,n,c,f,m,l,b,g,$,T,E,D,C,M,O]}class kh extends te{constructor(e){super(),ee(this,e,wh,vh,V,{})}}const{document:lr}=un;function yh(s){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Th(s){let e;return{c(){e=j("Base example")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function xh(s){let e,t,n,o;return e=new ke({props:{$$slots:{default:[yh]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[Th]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment)},m(l,r){N(e,l,r),k(l,t,r),N(n,l,r),o=!0},p(l,r){const i={};r&1&&(i.$$scope={dirty:r,ctx:l}),e.$set(i);const a={};r&1&&(a.$$scope={dirty:r,ctx:l}),n.$set(a)},i(l){o||(y(e.$$.fragment,l),y(n.$$.fragment,l),o=!0)},o(l){S(e.$$.fragment,l),S(n.$$.fragment,l),o=!1},d(l){P(e,l),l&&w(t),P(n,l)}}}function Sh(s){let e,t;return e=new ah({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Eh(s){let e,t;return e=new kh({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Ah(s){let e,t,n,o,l,r;return e=new Tt({props:{$$slots:{default:[xh]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[Sh]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[Eh]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment)},m(i,a){N(e,i,a),k(i,t,a),N(n,i,a),k(i,o,a),N(l,i,a),r=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(y(e.$$.fragment,i),y(n.$$.fragment,i),y(l.$$.fragment,i),r=!0)},o(i){S(e.$$.fragment,i),S(n.$$.fragment,i),S(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&w(t),P(n,i),i&&w(o),P(l,i)}}}function Ch(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b;return lr.title=e=document.title.replace(/(•).*$/,"$1 GlobNotify"),g=new yt({props:{$$slots:{default:[Ah]},$$scope:{ctx:s}}}),{c(){t=x(),n=_("section"),o=_("a"),o.textContent="Home",l=x(),r=_("h1"),r.textContent="Component for notifications globally for the entire application",i=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>one instance for the entire application</li> 
    <li>with custom notification transition</li> 
    <li>custom notification element components</li> 
    <li>with configurable timeout for each notification</li>`,m=x(),R(g.$$.fragment),h(o,"class","float-right"),h(o,"href","/"),h(r,"class","text-2xl max-w-lg"),h(c,"class","max-w-[4em]"),ct(c.src,u=gt)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/glob-notify"),h(a,"target","_blank"),h(a,"rel","noreferrer"),h(d,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m($,T){k($,t,T),k($,n,T),p(n,o),p(n,l),p(n,r),p(n,i),p(n,a),p(a,c),p(n,f),p(n,d),p(n,m),N(g,n,null),b=!0},p($,[T]){(!b||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 GlobNotify"))&&(lr.title=e);const E={};T&1&&(E.$$scope={dirty:T,ctx:$}),g.$set(E)},i($){b||(y(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&w(t),$&&w(n),P(g)}}}let Nh=class extends te{constructor(e){super(),ee(this,e,null,Ch,V,{})}};const Ph=`<div class="component__source">Source <code>ColorPicker.svelte</code></div>
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
</td></tr></table>`;function Rh(s){let e,t,n;return t=new En({props:{source:Ph}}),{c(){e=_("section"),R(t.$$.fragment),h(e,"class","documentation")},m(o,l){k(o,e,l),N(t,e,null),n=!0},p:le,i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){S(t.$$.fragment,o),n=!1},d(o){o&&w(e),P(t)}}}let Mh=class extends te{constructor(e){super(),ee(this,e,null,Rh,V,{})}};function Ui(s){var t;const e=(t=/^#([0-9a-f]{3,8})$/gi.exec(s))==null?void 0:t[1];if(e!=null){if(e.length===3||e.length===4)return e.split(/([0-9a-f])/gi).filter(Boolean);if(e.length===6||e.length===8)return e.split(/([0-9a-f]{2})/gi).filter(Boolean)}}function rr(s){try{return Ui(s)!=null}catch(e){return!1}}function Nt(s,e,t){return Math.max(Math.min(s,t),e)}function Oh(s){return Lh(Hs(s))}function Hs(s){var n;const e=(n=Ui(s))==null?void 0:n.map(o=>o.length===1?o+o:o);if(e==null)throw new Error(`Invalid color ${s}`);const t={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return e[3]&&(t.a=Math.round(parseInt(e[3],16)/255*1e3)/1e3),t}function Ih(s){const e=s.s/100,t=s.l/100,n=(1-Math.abs(2*t-1))*e,o=n*(1-Math.abs(s.h/60%2-1)),l=t-n/2;let r=0,i=0,a=0;0<=s.h&&s.h<60?(r=n,i=o,a=0):60<=s.h&&s.h<120?(r=o,i=n,a=0):120<=s.h&&s.h<180?(r=0,i=n,a=o):180<=s.h&&s.h<240?(r=0,i=o,a=n):240<=s.h&&s.h<300?(r=o,i=0,a=n):300<=s.h&&s.h<360&&(r=n,i=0,a=o),r=Math.round((r+l)*255),i=Math.round((i+l)*255),a=Math.round((a+l)*255);const c={r,g:i,b:a};return s.a!=null&&(c.a=s.a),c}function Lh(s){const e=s.r/255,t=s.g/255,n=s.b/255,o=Math.max(e,t,n),l=Math.min(e,t,n),r=o-l;let i=0,a=0,c=0;r===0?i=0:o===e?i=(t-n)/r%6:o===t?i=(n-e)/r+2:i=(e-t)/r+4,i=Math.round(i*60),i<0&&(i+=360),a=(o+l)/2,c=r===0?0:r/(1-Math.abs(2*a-1));const u={h:i,s:Math.round(c*100),l:Math.round(a*100)};return s.a!=null&&(u.a=s.a),u}function Dh(s){return Lo(Ih(s))}function Lo(s){const e="#"+[s.r,s.g,s.b].map(n=>Nt(n,0,255).toString(16).padStart(2,"0")).join(""),t=s.a!=null?Math.round(s.a*255):255;return t<255?e+Math.max(t,0).toString(16).padStart(2,"0"):e}function Bh(s){return Fh(Hs(s))}function Fh(s){const e=Nt(s.r,0,255)/255,t=Nt(s.g,0,255)/255,n=Nt(s.b,0,255)/255,o=Math.max(e,t,n),l=Math.min(e,t,n),r=o-l,i=o;let a=0,c=0;r&&(o===e&&(a=(t-n)/r),o===t&&(a=2+(n-e)/r),o===n&&(a=4+(e-t)/r),o&&(c=r/o)),a=a*60;const u=a<0?a+360:a,f=c*100,d=i*100;return s.a!=null&&s.a>=0?{h:u,s:f,v:d,a:Nt(s.a,0,1)}:{h:u,s:f,v:d}}function ro(s){return Lo(zh(s))}function zh(s){const e=s.s/100,t=s.v/100;let n=e*t;const o=s.h/60;let l=n*(1-Math.abs(o%2-1));const r=t-n;n=n+r,l=l+r;const i=Math.floor(o)%6,a=[n,l,r,r,l,n][i],c=[l,n,n,l,r,r][i],u=[r,r,l,n,n,l][i],f=Math.round(a*255),d=Math.round(c*255),m=Math.round(u*255);return s.a!=null?{r:f,g:d,b:m,a:s.a}:{r:f,g:d,b:m}}function ir(s){var o;typeof s=="string"&&(s=Hs(s));const e=[.2126,.7152,.0722],t=[s.r,s.g,s.b].reduce((l,r,i)=>(r/=255,r<.03928?r/=12.92:(r=(r+.055)/1.055,r*=r),l+r*e[i]),0),n=1-((o=s.a)!=null?o:1);return t+(1-t)*n}function Hh(s){let e,t,n,o;return{c(){e=_("div"),t=_("div"),h(t,"class","c-color-picker__tone--marker"),ot(t,"left",s[0]+"%"),ot(t,"top",100-s[1]+"%"),h(e,"class","c-color-picker__tone"),h(e,"tabindex","0")},m(l,r){k(l,e,r),p(e,t),n||(o=Ve(s[2].call(null,e)),n=!0)},p(l,[r]){r&1&&ot(t,"left",l[0]+"%"),r&2&&ot(t,"top",100-l[1]+"%")},i:le,o:le,d(l){l&&w(e),n=!1,o()}}}function jh(s,e,t){let{s:n=0}=e,{v:o=0}=e;function l(r){function i(m){const{pageX:g,pageY:b}=m instanceof MouseEvent?m:m.changedTouches[0],{left:$,top:T,width:E,height:D}=r.getBoundingClientRect();t(0,n=Nt((g-$-window.scrollX)/E,0,1)*100),t(1,o=100-Nt((b-T-window.scrollY)/D,0,1)*100)}function a(m){i(m)}function c(){document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",c),document.removeEventListener("touchend",c),setTimeout(()=>{document.removeEventListener("click",f,{capture:!0})},0)}function u(m){r.focus(),document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",c),document.addEventListener("touchend",c),document.addEventListener("click",f,{capture:!0}),i(m),m.preventDefault()}function f(m){m.preventDefault(),m.stopPropagation()}function d(m){let b=100-o,$=n;switch(m.code){case"ArrowUp":b=Nt(b-1,0,100);break;case"ArrowDown":b=Nt(b+1,0,100),m.preventDefault();break;case"ArrowLeft":$=Nt($-1,0,100),m.preventDefault();break;case"ArrowRight":$=Nt($+1,0,100),m.preventDefault();break}$!==n&&t(0,n=$),100-b!==o&&t(1,o=100-b)}return r.addEventListener("mousedown",u),r.addEventListener("touchstart",u),r.addEventListener("keydown",d),{destroy(){c(),r.removeEventListener("mousedown",u),r.removeEventListener("touchstart",u),r.removeEventListener("keydown",d)}}}return s.$$set=r=>{"s"in r&&t(0,n=r.s),"v"in r&&t(1,o=r.v)},[n,o,l]}class Uh extends te{constructor(e){super(),ee(this,e,jh,Hh,V,{s:0,v:1})}}var Kh="Expected a function",ar=0/0,qh="[object Symbol]",Wh=/^\s+|\s+$/g,Gh=/^[-+]0x[0-9a-f]+$/i,Zh=/^0b[01]+$/i,Xh=/^0o[0-7]+$/i,Qh=parseInt,Yh=typeof sn=="object"&&sn&&sn.Object===Object&&sn,Jh=typeof self=="object"&&self&&self.Object===Object&&self,Vh=Yh||Jh||Function("return this")(),eg=Object.prototype,tg=eg.toString,ng=Math.max,sg=Math.min,io=function(){return Vh.Date.now()};function og(s,e,t){var n,o,l,r,i,a,c=0,u=!1,f=!1,d=!0;if(typeof s!="function")throw new TypeError(Kh);e=cr(e)||0,fo(t)&&(u=!!t.leading,f="maxWait"in t,l=f?ng(cr(t.maxWait)||0,e):l,d="trailing"in t?!!t.trailing:d);function m(O){var I=n,L=o;return n=o=void 0,c=O,r=s.apply(L,I),r}function g(O){return c=O,i=setTimeout(T,e),u?m(O):r}function b(O){var I=O-a,L=O-c,F=e-I;return f?sg(F,l-L):F}function $(O){var I=O-a,L=O-c;return a===void 0||I>=e||I<0||f&&L>=l}function T(){var O=io();if($(O))return E(O);i=setTimeout(T,b(O))}function E(O){return i=void 0,d&&n?m(O):(n=o=void 0,r)}function D(){i!==void 0&&clearTimeout(i),c=0,n=a=o=i=void 0}function C(){return i===void 0?r:E(io())}function M(){var O=io(),I=$(O);if(n=arguments,o=this,a=O,I){if(i===void 0)return g(a);if(f)return i=setTimeout(T,e),m(a)}return i===void 0&&(i=setTimeout(T,e)),r}return M.cancel=D,M.flush=C,M}function fo(s){var e=typeof s;return!!s&&(e=="object"||e=="function")}function lg(s){return!!s&&typeof s=="object"}function rg(s){return typeof s=="symbol"||lg(s)&&tg.call(s)==qh}function cr(s){if(typeof s=="number")return s;if(rg(s))return ar;if(fo(s)){var e=typeof s.valueOf=="function"?s.valueOf():s;s=fo(e)?e+"":e}if(typeof s!="string")return s===0?s:+s;s=s.replace(Wh,"");var t=Zh.test(s);return t||Xh.test(s)?Qh(s.slice(2),t?2:8):Gh.test(s)?ar:+s}var ig=og;function ag(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E;function D(O){s[9](O)}function C(O){s[10](O)}let M={};return s[2].s!==void 0&&(M.s=s[2].s),s[2].v!==void 0&&(M.v=s[2].v),n=new Uh({props:M}),Xe.push(()=>rn(n,"s",D)),Xe.push(()=>rn(n,"v",C)),{c(){e=_("div"),t=_("div"),R(n.$$.fragment),r=x(),i=_("div"),a=x(),c=_("div"),u=_("input"),f=x(),d=_("div"),m=_("input"),h(i,"class","c-color-picker__sample"),h(u,"type","range"),h(u,"min","0"),h(u,"max","359"),h(u,"step","1"),h(c,"class","c-color-picker__hue"),h(m,"type","range"),h(m,"min","0"),h(m,"max","1"),h(m,"step",1/255),h(d,"class","c-color-picker__alpha"),h(t,"class","c-color-picker__body"),h(e,"class",g="c-color-picker"+(s[0]?" "+s[0]:"")),h(e,"style",b="--cp-tone: "+s[4]+"; --cp-color-opacity: "+s[5]+"; --cp-color: "+s[3]+"; "+s[1])},m(O,I){k(O,e,I),p(e,t),N(n,t,null),p(t,r),p(t,i),p(t,a),p(t,c),p(c,u),_t(u,s[2].h),p(t,f),p(t,d),p(d,m),_t(m,s[2].a),$=!0,T||(E=[J(u,"change",s[11]),J(u,"input",s[11]),J(m,"change",s[12]),J(m,"input",s[12])],T=!0)},p(O,[I]){const L={};!o&&I&4&&(o=!0,L.s=O[2].s,kn(()=>o=!1)),!l&&I&4&&(l=!0,L.v=O[2].v,kn(()=>l=!1)),n.$set(L),I&4&&_t(u,O[2].h),I&4&&_t(m,O[2].a),(!$||I&1&&g!==(g="c-color-picker"+(O[0]?" "+O[0]:"")))&&h(e,"class",g),(!$||I&58&&b!==(b="--cp-tone: "+O[4]+"; --cp-color-opacity: "+O[5]+"; --cp-color: "+O[3]+"; "+O[1]))&&h(e,"style",b)},i(O){$||(y(n.$$.fragment,O),$=!0)},o(O){S(n.$$.fragment,O),$=!1},d(O){O&&w(e),P(n),T=!1,je(E)}}}function cg(s,e,t){let{class:n=""}=e,{style:o=""}=e,{color:l="#000"}=e,{debounce:r=0}=e,i;function a(T){let{h:E,s:D,v:C,a:M=1}=Bh(T);i!=null&&E===0&&D===0&&(E=i.h),t(2,i={h:E,s:D,v:C,a:M})}let c,u,f,d;function m(T){s.$$.not_equal(i.s,T)&&(i.s=T,t(2,i))}function g(T){s.$$.not_equal(i.v,T)&&(i.v=T,t(2,i))}function b(){i.h=At(this.value),t(2,i)}function $(){i.a=At(this.value),t(2,i)}return s.$$set=T=>{"class"in T&&t(0,n=T.class),"style"in T&&t(1,o=T.style),"color"in T&&t(6,l=T.color),"debounce"in T&&t(7,r=T.debounce)},s.$$.update=()=>{s.$$.dirty&128&&t(8,c=ig(T=>{t(6,l=T)},r)),s.$$.dirty&64&&a(l),s.$$.dirty&268&&(T=>{t(3,u=ro(T)),t(4,f=ro({h:T.h,s:100,v:100})),t(5,d=ro({h:T.h,s:T.s,v:T.v})),c(u)})(i)},[n,o,i,u,f,d,l,r,c,m,g,b,$]}class Ki extends te{constructor(e){super(),ee(this,e,cg,ag,V,{class:0,style:1,color:6,debounce:7})}}function ug(s){let e,t,n,o;return{c(){e=_("input"),h(e,"class",t="c-coloredit__input--text"+(s[0]?" "+s[0]:"")),h(e,"type","text"),e.value=s[1]},m(l,r){k(l,e,r),s[6](e),n||(o=J(e,"input",s[7]),n=!0)},p(l,[r]){r&1&&t!==(t="c-coloredit__input--text"+(l[0]?" "+l[0]:""))&&h(e,"class",t),r&2&&e.value!==l[1]&&(e.value=l[1])},i:le,o:le,d(l){l&&w(e),s[6](null),n=!1,o()}}}function fg(s,e,t){let{class:n=""}=e,{color:o="#000"}=e,l;function r(f){rr(f)&&t(4,o=f)}let i;function a(){i==null||i.focus()}function c(f){Xe[f?"unshift":"push"](()=>{i=f,t(2,i)})}const u=f=>r(f.currentTarget.value);return s.$$set=f=>{"class"in f&&t(0,n=f.class),"color"in f&&t(4,o=f.color)},s.$$.update=()=>{s.$$.dirty&16&&t(1,l=rr(o)?o:"")},[n,l,i,r,o,a,c,u]}class dg extends te{constructor(e){super(),ee(this,e,fg,ug,V,{class:0,color:4,focus:5})}get focus(){return this.$$.ctx[5]}}function pg(s){let e,t,n,o,l,r,i,a,c,u,f,d,m;return{c(){e=_("input"),n=x(),o=_("input"),r=x(),i=_("input"),c=x(),u=_("input"),h(e,"class",t="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(e,"type","number"),h(e,"min","0"),h(e,"max","255"),h(e,"step","1"),e.value=s[1],h(o,"class",l="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(o,"type","number"),h(o,"min","0"),h(o,"max","255"),h(o,"step","1"),o.value=s[2],h(i,"class",a="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(i,"type","number"),h(i,"min","0"),h(i,"max","255"),h(i,"step","1"),i.value=s[3],h(u,"class",f="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(u,"type","number"),h(u,"min","0"),h(u,"max","1"),h(u,"step","0.01"),u.value=s[4]},m(g,b){k(g,e,b),s[8](e),k(g,n,b),k(g,o,b),k(g,r,b),k(g,i,b),k(g,c,b),k(g,u,b),d||(m=[J(e,"change",s[9]),J(o,"change",s[10]),J(i,"change",s[11]),J(u,"change",s[12])],d=!0)},p(g,[b]){b&1&&t!==(t="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(e,"class",t),b&2&&e.value!==g[1]&&(e.value=g[1]),b&1&&l!==(l="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(o,"class",l),b&4&&o.value!==g[2]&&(o.value=g[2]),b&1&&a!==(a="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(i,"class",a),b&8&&i.value!==g[3]&&(i.value=g[3]),b&1&&f!==(f="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(u,"class",f),b&16&&u.value!==g[4]&&(u.value=g[4])},i:le,o:le,d(g){g&&w(e),s[8](null),g&&w(n),g&&w(o),g&&w(r),g&&w(i),g&&w(c),g&&w(u),d=!1,je(m)}}}function mg(s,e,t){let{class:n=""}=e,{color:o="#000"}=e,l,r,i,a;function c(E){var D;try{const C=Hs(E);t(1,l=C.r),t(2,r=C.g),t(3,i=C.b),t(4,a=(D=C.a)!=null?D:1)}catch(C){t(1,l=NaN),t(2,r=NaN),t(3,i=NaN),t(4,a=NaN)}}function u(E,D,C,M){[E,C,D,M!=null?M:1].every(O=>Number.isFinite(O))&&t(6,o=Lo({r:E,g:D,b:C,a:M}))}let f;function d(){f==null||f.focus()}function m(E){Xe[E?"unshift":"push"](()=>{f=E,t(5,f)})}const g=E=>t(1,l=+E.currentTarget.value),b=E=>t(2,r=+E.currentTarget.value),$=E=>t(3,i=+E.currentTarget.value),T=E=>t(4,a=+E.currentTarget.value);return s.$$set=E=>{"class"in E&&t(0,n=E.class),"color"in E&&t(6,o=E.color)},s.$$.update=()=>{s.$$.dirty&64&&c(o),s.$$.dirty&30&&u(l,r,i,a)},[n,l,r,i,a,f,o,d,m,g,b,$,T]}class hg extends te{constructor(e){super(),ee(this,e,mg,pg,V,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function gg(s){let e,t,n,o,l,r,i,a,c,u,f,d,m;return{c(){e=_("input"),n=x(),o=_("input"),r=x(),i=_("input"),c=x(),u=_("input"),h(e,"class",t="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(e,"type","number"),h(e,"min","0"),h(e,"max","360"),h(e,"step","1"),e.value=s[1],h(o,"class",l="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(o,"type","number"),h(o,"min","0"),h(o,"max","100"),h(o,"step","1"),o.value=s[2],h(i,"class",a="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(i,"type","number"),h(i,"min","0"),h(i,"max","100"),h(i,"step","1"),i.value=s[3],h(u,"class",f="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),h(u,"type","number"),h(u,"min","0"),h(u,"max","1"),h(u,"step","0.01"),u.value=s[4]},m(g,b){k(g,e,b),s[8](e),k(g,n,b),k(g,o,b),k(g,r,b),k(g,i,b),k(g,c,b),k(g,u,b),d||(m=[J(e,"change",s[9]),J(o,"change",s[10]),J(i,"change",s[11]),J(u,"change",s[12])],d=!0)},p(g,[b]){b&1&&t!==(t="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(e,"class",t),b&2&&e.value!==g[1]&&(e.value=g[1]),b&1&&l!==(l="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(o,"class",l),b&4&&o.value!==g[2]&&(o.value=g[2]),b&1&&a!==(a="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(i,"class",a),b&8&&i.value!==g[3]&&(i.value=g[3]),b&1&&f!==(f="c-coloredit__input--number"+(g[0]?" "+g[0]:""))&&h(u,"class",f),b&16&&u.value!==g[4]&&(u.value=g[4])},i:le,o:le,d(g){g&&w(e),s[8](null),g&&w(n),g&&w(o),g&&w(r),g&&w(i),g&&w(c),g&&w(u),d=!1,je(m)}}}function _g(s,e,t){let{class:n=""}=e,{color:o="#000"}=e,l,r,i,a;function c(E){var D;try{const C=Oh(E);t(1,l=C.h),t(2,r=C.s),t(3,i=C.l),t(4,a=(D=C.a)!=null?D:1)}catch(C){t(1,l=NaN),t(2,r=NaN),t(3,i=NaN),t(4,a=NaN)}}function u(E,D,C,M){[E,D,C,M!=null?M:1].every(O=>Number.isFinite(O))&&t(6,o=Dh({h:E,s:D,l:C,a:M}))}let f;function d(){f==null||f.focus()}function m(E){Xe[E?"unshift":"push"](()=>{f=E,t(5,f)})}const g=E=>t(1,l=+E.currentTarget.value),b=E=>t(2,r=+E.currentTarget.value),$=E=>t(3,i=+E.currentTarget.value),T=E=>t(4,a=+E.currentTarget.value);return s.$$set=E=>{"class"in E&&t(0,n=E.class),"color"in E&&t(6,o=E.color)},s.$$.update=()=>{s.$$.dirty&64&&c(o),s.$$.dirty&30&&u(l,r,i,a)},[n,l,r,i,a,f,o,d,m,g,b,$,T]}class bg extends te{constructor(e){super(),ee(this,e,_g,gg,V,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function ur(s,e,t){const n=s.slice();return n[11]=e[t],n}function fr(s){let e,t=s[11]+"",n;return{c(){e=_("span"),n=j(t),h(e,"class","c-color-edit__label")},m(o,l){k(o,e,l),p(e,n)},p(o,l){l&8&&t!==(t=o[11]+"")&&Ie(n,t)},d(o){o&&w(e)}}}function $g(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b;function $(M){s[6](M)}var T=s[3].component;function E(M){let O={};return M[0]!==void 0&&(O.color=M[0]),{props:O}}T&&(n=Ge(T,E(s)),Xe.push(()=>rn(n,"color",$)),s[7](n));let D=s[3].labels,C=[];for(let M=0;M<D.length;M+=1)C[M]=fr(ur(s,D,M));return{c(){e=_("div"),t=_("div"),n&&R(n.$$.fragment),l=x();for(let M=0;M<C.length;M+=1)C[M].c();r=x(),i=_("div"),a=_("button"),c=x(),u=_("button"),h(t,"class","c-color-edit__values"),ot(t,"--ce-columns",s[3].labels.length),h(a,"class","c-color-edit__button--up"),h(u,"class","c-color-edit__button--down"),h(i,"class","c-color-edit__buttons"),h(e,"class",f="c-color-edit"+(s[1]?" "+s[1]:"")),h(e,"style",d=s[2]||void 0)},m(M,O){k(M,e,O),p(e,t),n&&N(n,t,null),p(t,l);for(let I=0;I<C.length;I+=1)C[I].m(t,null);p(e,r),p(e,i),p(i,a),p(i,c),p(i,u),m=!0,g||(b=[J(a,"click",s[8]),J(u,"click",s[9])],g=!0)},p(M,[O]){const I={};if(!o&&O&1&&(o=!0,I.color=M[0],kn(()=>o=!1)),T!==(T=M[3].component)){if(n){ye();const L=n;S(L.$$.fragment,1,0,()=>{P(L,1)}),Te()}T?(n=Ge(T,E(M)),Xe.push(()=>rn(n,"color",$)),M[7](n),R(n.$$.fragment),y(n.$$.fragment,1),N(n,t,l)):n=null}else T&&n.$set(I);if(O&8){D=M[3].labels;let L;for(L=0;L<D.length;L+=1){const F=ur(M,D,L);C[L]?C[L].p(F,O):(C[L]=fr(F),C[L].c(),C[L].m(t,null))}for(;L<C.length;L+=1)C[L].d(1);C.length=D.length}(!m||O&8)&&ot(t,"--ce-columns",M[3].labels.length),(!m||O&2&&f!==(f="c-color-edit"+(M[1]?" "+M[1]:"")))&&h(e,"class",f),(!m||O&4&&d!==(d=M[2]||void 0))&&h(e,"style",d)},i(M){m||(n&&y(n.$$.fragment,M),m=!0)},o(M){n&&S(n.$$.fragment,M),m=!1},d(M){M&&w(e),s[7](null),n&&P(n),Ye(C,M),g=!1,je(b)}}}function vg(s,e,t){let{class:n=""}=e,{style:o=""}=e,{color:l="#000"}=e;const r=[{component:dg,labels:["Hex"]},{component:hg,labels:["R","G","B","A"]},{component:bg,labels:["H","S","L","A"]}];let i=r[0],a;function c(g){return wt(this,null,function*(){let b=r.indexOf(i)+g;b<0?b=r.length-1:b>=r.length&&(b=0),t(3,i=r[b]),yield bo(),a==null||a.focus()})}function u(g){l=g,t(0,l)}function f(g){Xe[g?"unshift":"push"](()=>{a=g,t(4,a)})}const d=()=>c(-1),m=()=>c(1);return s.$$set=g=>{"class"in g&&t(1,n=g.class),"style"in g&&t(2,o=g.style),"color"in g&&t(0,l=g.color)},[l,n,o,i,a,c,u,f,d,m]}class qi extends te{constructor(e){super(),ee(this,e,vg,$g,V,{class:1,style:2,color:0})}}function dr(s,e,t){const n=s.slice();return n[6]=e[t],n}function pr(s){let e,t=s[6]+"",n,o,l;function r(){return s[5](s[6])}return{c(){e=_("button"),n=j(t),h(e,"class","input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"),ot(e,"background-color",s[6]),ot(e,"color",ir(s[6])>.55?"inherit":"white")},m(i,a){k(i,e,a),p(e,n),o||(l=J(e,"click",r),o=!0)},p(i,a){s=i,a&2&&t!==(t=s[6]+"")&&Ie(n,t),a&2&&ot(e,"background-color",s[6]),a&2&&ot(e,"color",ir(s[6])>.55?"inherit":"white")},d(i){i&&w(e),o=!1,l()}}}function wg(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g=s[1],b=[];for(let $=0;$<g.length;$+=1)b[$]=pr(dr(s,g,$));return{c(){e=_("div"),t=_("span"),t.textContent="Set color",n=x(),o=_("a"),o.textContent="randomize alpha",l=x(),r=_("span"),r.textContent="•",i=x(),a=_("a"),a.textContent="reset alpha",u=x(),f=_("div");for(let $=0;$<b.length;$+=1)b[$].c();h(o,"class","text-sm"),h(o,"href","javascript:void(0)"),h(r,"class","text-blue-500"),h(a,"class","text-sm"),h(a,"href","javascript:void(0)"),h(e,"class",c=s[0]||void 0)},m($,T){k($,e,T),p(e,t),p(e,n),p(e,o),p(e,l),p(e,r),p(e,i),p(e,a),k($,u,T),k($,f,T);for(let E=0;E<b.length;E+=1)b[E].m(f,null);d||(m=[J(o,"click",s[3]),J(a,"click",s[4])],d=!0)},p($,[T]){if(T&1&&c!==(c=$[0]||void 0)&&h(e,"class",c),T&6){g=$[1];let E;for(E=0;E<g.length;E+=1){const D=dr($,g,E);b[E]?b[E].p(D,T):(b[E]=pr(D),b[E].c(),b[E].m(f,null))}for(;E<b.length;E+=1)b[E].d(1);b.length=g.length}},i:le,o:le,d($){$&&w(e),$&&w(u),$&&w(f),Ye(b,$),d=!1,je(m)}}}function kg(s){return Wi(s).map(e=>e+Math.floor(Math.random()*255).toString(16).padStart(2,"0"))}function Wi(s){return s.map(e=>e.slice(0,7))}function yg(s,e,t){const n=go();let{class:o=""}=e,l=["#001219","#005F73","#0A9396","#94D2BD","#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226","#F72585","#B5179E","#7209B7","#560BAD","#480CA8","#3A0CA3","#3F37C9","#4361EE","#4895EF","#4CC9F0"];const r=()=>t(1,l=kg(l)),i=()=>t(1,l=Wi(l)),a=c=>n("color",c);return s.$$set=c=>{"class"in c&&t(0,o=c.class)},[o,l,n,r,i,a]}class Do extends te{constructor(e){super(),ee(this,e,yg,wg,V,{class:0})}}function Tg(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O,I;function L(z){s[1](z)}let F={class:"basis-1/2 h-[256px] pt-2"};return s[0]!==void 0&&(F.color=s[0]),n=new Ki({props:F}),Xe.push(()=>rn(n,"color",L)),E=new Do({props:{class:"mt-4"}}),E.$on("color",s[2]),O=new dt({props:{code:`<script lang="ts">
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
</section>`}}),{c(){e=_("section"),t=_("div"),R(n.$$.fragment),l=x(),r=_("div"),i=_("div"),a=j("Current color: "),c=_("code"),u=j(s[0]),f=x(),d=_("div"),m=_("div"),g=_("div"),b=x(),$=_("div"),T=x(),R(E.$$.fragment),D=x(),C=_("h3"),C.textContent="Code",M=x(),R(O.$$.fragment),h(c,"class","uppercase"),h(g,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),h($,"class","absolute left-0 top-0 right-0 bottom-0"),ot($,"background-color",s[0]),h(m,"class","relative h-[1.5em]"),h(d,"class","p-2 border rounded-md"),h(r,"class","basis-1/2"),h(t,"class","flex gap-8"),h(e,"class","prose max-w-none my-4")},m(z,U){k(z,e,U),p(e,t),N(n,t,null),p(t,l),p(t,r),p(r,i),p(i,a),p(i,c),p(c,u),p(r,f),p(r,d),p(d,m),p(m,g),p(m,b),p(m,$),p(r,T),N(E,r,null),p(e,D),p(e,C),p(e,M),N(O,e,null),I=!0},p(z,[U]){const Z={};!o&&U&1&&(o=!0,Z.color=z[0],kn(()=>o=!1)),n.$set(Z),(!I||U&1)&&Ie(u,z[0]),(!I||U&1)&&ot($,"background-color",z[0])},i(z){I||(y(n.$$.fragment,z),y(E.$$.fragment,z),y(O.$$.fragment,z),I=!0)},o(z){S(n.$$.fragment,z),S(E.$$.fragment,z),S(O.$$.fragment,z),I=!1},d(z){z&&w(e),P(n),P(E),P(O)}}}function xg(s,e,t){let n="#f70";function o(r){n=r,t(0,n)}return[n,o,({detail:r})=>t(0,n=r)]}class Sg extends te{constructor(e){super(),ee(this,e,xg,Tg,V,{})}}function Eg(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O,I,L;function F(U){s[1](U)}let z={class:"w-full border shadow-md rounded-lg p-2"};return s[0]!==void 0&&(z.color=s[0]),o=new qi({props:z}),Xe.push(()=>rn(o,"color",F)),D=new Do({props:{class:"mt-4"}}),D.$on("color",s[2]),I=new dt({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=_("section"),t=_("div"),n=_("div"),R(o.$$.fragment),r=x(),i=_("div"),a=_("div"),c=j("Current color: "),u=_("code"),f=j(s[0]),d=x(),m=_("div"),g=_("div"),b=_("div"),$=x(),T=_("div"),E=x(),R(D.$$.fragment),C=x(),M=_("h3"),M.textContent="Code",O=x(),R(I.$$.fragment),h(n,"class","basis-1/2 inline-flex items-center"),h(u,"class","uppercase"),h(b,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),h(T,"class","absolute left-0 top-0 right-0 bottom-0"),ot(T,"background-color",s[0]),h(g,"class","relative h-[1.5em]"),h(m,"class","p-2 border rounded-md"),h(i,"class","basis-1/2"),h(t,"class","flex gap-8"),h(e,"class","prose max-w-none my-4")},m(U,Z){k(U,e,Z),p(e,t),p(t,n),N(o,n,null),p(t,r),p(t,i),p(i,a),p(a,c),p(a,u),p(u,f),p(i,d),p(i,m),p(m,g),p(g,b),p(g,$),p(g,T),p(i,E),N(D,i,null),p(e,C),p(e,M),p(e,O),N(I,e,null),L=!0},p(U,[Z]){const Y={};!l&&Z&1&&(l=!0,Y.color=U[0],kn(()=>l=!1)),o.$set(Y),(!L||Z&1)&&Ie(f,U[0]),(!L||Z&1)&&ot(T,"background-color",U[0])},i(U){L||(y(o.$$.fragment,U),y(D.$$.fragment,U),y(I.$$.fragment,U),L=!0)},o(U){S(o.$$.fragment,U),S(D.$$.fragment,U),S(I.$$.fragment,U),L=!1},d(U){U&&w(e),P(o),P(D),P(I)}}}function Ag(s,e,t){let n="#f70";function o(r){n=r,t(0,n)}return[n,o,({detail:r})=>t(0,n=r)]}class Cg extends te{constructor(e){super(),ee(this,e,Ag,Eg,V,{})}}function ts(s){return s.split("-")[1]}function Gi(s){return s==="y"?"height":"width"}function zn(s){return s.split("-")[0]}function Bo(s){return["top","bottom"].includes(zn(s))?"x":"y"}function Ng(s){return Je({top:0,right:0,bottom:0,left:0},s)}function Zi(s){return typeof s!="number"?Ng(s):{top:s,right:s,bottom:s,left:s}}function mr(s){return bn(Je({},s),{top:s.y,left:s.x,right:s.x+s.width,bottom:s.y+s.height})}function Xi(s,e){return wt(this,null,function*(){var t;e===void 0&&(e={});const{x:n,y:o,platform:l,rects:r,elements:i,strategy:a}=s,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:m=0}=e,g=Zi(m),$=i[d?f==="floating"?"reference":"floating":f],T=mr(yield l.getClippingRect({element:(t=yield l.isElement==null?void 0:l.isElement($))==null||t?$:$.contextElement||(yield l.getDocumentElement==null?void 0:l.getDocumentElement(i.floating)),boundary:c,rootBoundary:u,strategy:a})),E=f==="floating"?bn(Je({},r.floating),{x:n,y:o}):r.reference,D=yield l.getOffsetParent==null?void 0:l.getOffsetParent(i.floating),C=(yield l.isElement==null?void 0:l.isElement(D))?(yield l.getScale==null?void 0:l.getScale(D))||{x:1,y:1}:{x:1,y:1},M=mr(l.convertOffsetParentRelativeRectToViewportRelativeRect?yield l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:E,offsetParent:D,strategy:a}):E);return{top:(T.top-M.top+g.top)/C.y,bottom:(M.bottom-T.bottom+g.bottom)/C.y,left:(T.left-M.left+g.left)/C.x,right:(M.right-T.right+g.right)/C.x}})}const Pg=Math.min,$n=Math.max;function Rg(s,e,t){return $n(s,Pg(e,t))}const Qi=s=>({name:"arrow",options:s,fn(t){return wt(this,null,function*(){const{element:n,padding:o=0}=s||{},{x:l,y:r,placement:i,rects:a,platform:c}=t;if(n==null)return{};const u=Zi(o),f={x:l,y:r},d=Bo(i),m=Gi(d),g=yield c.getDimensions(n),b=d==="y"?"top":"left",$=d==="y"?"bottom":"right",T=a.reference[m]+a.reference[d]-f[d]-a.floating[m],E=f[d]-a.reference[d],D=yield c.getOffsetParent==null?void 0:c.getOffsetParent(n);let C=D?d==="y"?D.clientHeight||0:D.clientWidth||0:0;C===0&&(C=a.floating[m]);const M=T/2-E/2,O=u[b],I=C-g[m]-u[$],L=C/2-g[m]/2+M,F=Rg(O,L,I),U=ts(i)!=null&&L!=F&&a.reference[m]/2-(L<O?u[b]:u[$])-g[m]/2<0?L<O?O-L:I-L:0;return{[d]:f[d]-U,data:{[d]:F,centerOffset:L-F}}})}}),Mg={left:"right",right:"left",bottom:"top",top:"bottom"};function Is(s){return s.replace(/left|right|bottom|top/g,e=>Mg[e])}function Og(s,e,t){t===void 0&&(t=!1);const n=ts(s),o=Bo(s),l=Gi(o);let r=o==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(r=Is(r)),{main:r,cross:Is(r)}}const Ig={start:"end",end:"start"};function po(s){return s.replace(/start|end/g,e=>Ig[e])}function Lg(s){const e=Is(s);return[po(s),e,po(e)]}function Dg(s,e,t){const n=["left","right"],o=["right","left"],l=["top","bottom"],r=["bottom","top"];switch(s){case"top":case"bottom":return t?e?o:n:e?n:o;case"left":case"right":return e?l:r;default:return[]}}function Bg(s,e,t,n){const o=ts(s);let l=Dg(zn(s),t==="start",n);return o&&(l=l.map(r=>r+"-"+o),e&&(l=l.concat(l.map(po)))),l}const js=function(s){return s===void 0&&(s={}),{name:"flip",options:s,fn(t){return wt(this,null,function*(){var n;const{placement:o,middlewareData:l,rects:r,initialPlacement:i,platform:a,elements:c}=t,U=s,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0}=U,$=eo(U,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),T=zn(o),E=zn(i)===i,D=yield a.isRTL==null?void 0:a.isRTL(c.floating),C=d||(E||!b?[Is(i)]:Lg(i));!d&&g!=="none"&&C.push(...Bg(i,b,g,D));const M=[i,...C],O=yield Xi(t,$),I=[];let L=((n=l.flip)==null?void 0:n.overflows)||[];if(u&&I.push(O[T]),f){const{main:Z,cross:Y}=Og(o,r,D);I.push(O[Z],O[Y])}if(L=[...L,{placement:o,overflows:I}],!I.every(Z=>Z<=0)){var F;const Z=(((F=l.flip)==null?void 0:F.index)||0)+1,Y=M[Z];if(Y)return{data:{index:Z,overflows:L},reset:{placement:Y}};let re="bottom";switch(m){case"bestFit":{var z;const oe=(z=L.map(H=>[H,H.overflows.filter(W=>W>0).reduce((W,X)=>W+X,0)]).sort((H,W)=>H[1]-W[1])[0])==null?void 0:z[0].placement;oe&&(re=oe);break}case"initialPlacement":re=i;break}if(o!==re)return{reset:{placement:re}}}return{}})}}};function Fg(s,e){return wt(this,null,function*(){const{placement:t,platform:n,elements:o}=s,l=yield n.isRTL==null?void 0:n.isRTL(o.floating),r=zn(t),i=ts(t),a=Bo(t)==="x",c=["left","top"].includes(r)?-1:1,u=l&&a?-1:1,f=typeof e=="function"?e(s):e;let{mainAxis:d,crossAxis:m,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:Je({mainAxis:0,crossAxis:0,alignmentAxis:null},f);return i&&typeof g=="number"&&(m=i==="end"?g*-1:g),a?{x:m*u,y:d*c}:{x:d*c,y:m*u}})}const Us=function(s){return s===void 0&&(s=0),{name:"offset",options:s,fn(t){return wt(this,null,function*(){const{x:n,y:o}=t,l=yield Fg(t,s);return{x:n+l.x,y:o+l.y,data:l}})}}},Yi=function(s){return s===void 0&&(s={}),{name:"size",options:s,fn(t){return wt(this,null,function*(){const{placement:n,rects:o,platform:l,elements:r}=t,C=s,{apply:i=()=>{}}=C,a=eo(C,["apply"]),c=yield Xi(t,a),u=zn(n),f=ts(n);let d,m;u==="top"||u==="bottom"?(d=u,m=f===((yield l.isRTL==null?void 0:l.isRTL(r.floating))?"start":"end")?"left":"right"):(m=u,d=f==="end"?"top":"bottom");const g=$n(c.left,0),b=$n(c.right,0),$=$n(c.top,0),T=$n(c.bottom,0),E={availableHeight:o.floating.height-(["left","right"].includes(n)?2*($!==0||T!==0?$+T:$n(c.top,c.bottom)):c[d]),availableWidth:o.floating.width-(["top","bottom"].includes(n)?2*(g!==0||b!==0?g+b:$n(c.left,c.right)):c[m])};yield i(Je(Je({},t),E));const D=yield l.getDimensions(r.floating);return o.floating.width!==D.width||o.floating.height!==D.height?{reset:{rects:!0}}:{}})}}};function Ji(s){return s.split("-")[0]}function zg(s){return s.split("-")[1]}function Hg(s){return["top","bottom"].includes(Ji(s))?"x":"y"}function jg(s){return s==="y"?"height":"width"}function hr(s,e,t){let{reference:n,floating:o}=s;const l=n.x+n.width/2-o.width/2,r=n.y+n.height/2-o.height/2,i=Hg(e),a=jg(i),c=n[a]/2-o[a]/2,u=Ji(e),f=i==="x";let d;switch(u){case"top":d={x:l,y:n.y-o.height};break;case"bottom":d={x:l,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:r};break;case"left":d={x:n.x-o.width,y:r};break;default:d={x:n.x,y:n.y}}switch(zg(e)){case"start":d[i]-=c*(t&&f?-1:1);break;case"end":d[i]+=c*(t&&f?-1:1);break}return d}const Ug=(s,e,t)=>wt(void 0,null,function*(){const{placement:n="bottom",strategy:o="absolute",middleware:l=[],platform:r}=t,i=yield r.isRTL==null?void 0:r.isRTL(e);let a=yield r.getElementRects({reference:s,floating:e,strategy:o}),{x:c,y:u}=hr(a,n,i),f=n,d={},m=0;for(let g=0;g<l.length;g++){const{name:b,fn:$}=l[g],{x:T,y:E,data:D,reset:C}=yield $({x:c,y:u,initialPlacement:n,placement:f,strategy:o,middlewareData:d,rects:a,platform:r,elements:{reference:s,floating:e}});if(c=T!=null?T:c,u=E!=null?E:u,d=bn(Je({},d),{[b]:Je(Je({},d[b]),D)}),C&&m<=50){m++,typeof C=="object"&&(C.placement&&(f=C.placement),C.rects&&(a=C.rects===!0?yield r.getElementRects({reference:s,floating:e,strategy:o}):C.rects),{x:c,y:u}=hr(a,f,i)),g=-1;continue}}return{x:c,y:u,placement:f,strategy:o,middlewareData:d}});function gr(s){return bn(Je({},s),{top:s.y,left:s.x,right:s.x+s.width,bottom:s.y+s.height})}function Vi(s){return s&&s.document&&s.location&&s.alert&&s.setInterval}function Xt(s){if(s==null)return window;if(!Vi(s)){const e=s.ownerDocument;return e&&e.defaultView||window}return s}function an(s){return Xt(s).getComputedStyle(s)}function Gt(s){return Vi(s)?"":s?(s.nodeName||"").toLowerCase():""}function ea(){const s=navigator.userAgentData;return s!=null&&s.brands?s.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function Dt(s){return s instanceof Xt(s).HTMLElement}function cn(s){return s instanceof Xt(s).Element}function Kg(s){return s instanceof Xt(s).Node}function Ls(s){if(typeof ShadowRoot=="undefined")return!1;const e=Xt(s).ShadowRoot;return s instanceof e||s instanceof ShadowRoot}function Ks(s){const{overflow:e,overflowX:t,overflowY:n}=an(s);return/auto|scroll|overlay|hidden/.test(e+n+t)}function qg(s){return["table","td","th"].includes(Gt(s))}function ta(s){const e=/firefox/i.test(ea()),t=an(s);return t.transform!=="none"||t.perspective!=="none"||t.contain==="paint"||["transform","perspective"].includes(t.willChange)||e&&t.willChange==="filter"||e&&(t.filter?t.filter!=="none":!1)}function na(){return!/^((?!chrome|android).)*safari/i.test(ea())}const _r=Math.min,Wn=Math.max,Ds=Math.round;function Zt(s,e,t){var n,o,l,r;e===void 0&&(e=!1),t===void 0&&(t=!1);const i=s.getBoundingClientRect();let a=1,c=1;e&&Dt(s)&&(a=s.offsetWidth>0&&Ds(i.width)/s.offsetWidth||1,c=s.offsetHeight>0&&Ds(i.height)/s.offsetHeight||1);const u=cn(s)?Xt(s):window,f=!na()&&t,d=(i.left+(f&&(n=(o=u.visualViewport)==null?void 0:o.offsetLeft)!=null?n:0))/a,m=(i.top+(f&&(l=(r=u.visualViewport)==null?void 0:r.offsetTop)!=null?l:0))/c,g=i.width/a,b=i.height/c;return{width:g,height:b,top:m,right:d+g,bottom:m+b,left:d,x:d,y:m}}function fn(s){return((Kg(s)?s.ownerDocument:s.document)||window.document).documentElement}function qs(s){return cn(s)?{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}:{scrollLeft:s.pageXOffset,scrollTop:s.pageYOffset}}function sa(s){return Zt(fn(s)).left+qs(s).scrollLeft}function Wg(s){const e=Zt(s);return Ds(e.width)!==s.offsetWidth||Ds(e.height)!==s.offsetHeight}function Gg(s,e,t){const n=Dt(e),o=fn(e),l=Zt(s,n&&Wg(e),t==="fixed");let r={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(n||!n&&t!=="fixed")if((Gt(e)!=="body"||Ks(o))&&(r=qs(e)),Dt(e)){const a=Zt(e,!0);i.x=a.x+e.clientLeft,i.y=a.y+e.clientTop}else o&&(i.x=sa(o));return{x:l.left+r.scrollLeft-i.x,y:l.top+r.scrollTop-i.y,width:l.width,height:l.height}}function oa(s){return Gt(s)==="html"?s:s.assignedSlot||s.parentNode||(Ls(s)?s.host:null)||fn(s)}function br(s){return!Dt(s)||an(s).position==="fixed"?null:s.offsetParent}function Zg(s){let e=oa(s);for(Ls(e)&&(e=e.host);Dt(e)&&!["html","body"].includes(Gt(e));){if(ta(e))return e;{const t=e.parentNode;e=Ls(t)?t.host:t}}return null}function mo(s){const e=Xt(s);let t=br(s);for(;t&&qg(t)&&an(t).position==="static";)t=br(t);return t&&(Gt(t)==="html"||Gt(t)==="body"&&an(t).position==="static"&&!ta(t))?e:t||Zg(s)||e}function $r(s){if(Dt(s))return{width:s.offsetWidth,height:s.offsetHeight};const e=Zt(s);return{width:e.width,height:e.height}}function Xg(s){let{rect:e,offsetParent:t,strategy:n}=s;const o=Dt(t),l=fn(t);if(t===l)return e;let r={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if((o||!o&&n!=="fixed")&&((Gt(t)!=="body"||Ks(l))&&(r=qs(t)),Dt(t))){const a=Zt(t,!0);i.x=a.x+t.clientLeft,i.y=a.y+t.clientTop}return bn(Je({},e),{x:e.x-r.scrollLeft+i.x,y:e.y-r.scrollTop+i.y})}function Qg(s,e){const t=Xt(s),n=fn(s),o=t.visualViewport;let l=n.clientWidth,r=n.clientHeight,i=0,a=0;if(o){l=o.width,r=o.height;const c=na();(c||!c&&e==="fixed")&&(i=o.offsetLeft,a=o.offsetTop)}return{width:l,height:r,x:i,y:a}}function Yg(s){var e;const t=fn(s),n=qs(s),o=(e=s.ownerDocument)==null?void 0:e.body,l=Wn(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),r=Wn(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let i=-n.scrollLeft+sa(s);const a=-n.scrollTop;return an(o||t).direction==="rtl"&&(i+=Wn(t.clientWidth,o?o.clientWidth:0)-l),{width:l,height:r,x:i,y:a}}function la(s){const e=oa(s);return["html","body","#document"].includes(Gt(e))?s.ownerDocument.body:Dt(e)&&Ks(e)?e:la(e)}function Bs(s,e){var t;e===void 0&&(e=[]);const n=la(s),o=n===((t=s.ownerDocument)==null?void 0:t.body),l=Xt(n),r=o?[l].concat(l.visualViewport||[],Ks(n)?n:[]):n,i=e.concat(r);return o?i:i.concat(Bs(r))}function Jg(s,e){const t=e.getRootNode==null?void 0:e.getRootNode();if(s.contains(e))return!0;if(t&&Ls(t)){let n=e;do{if(n&&s===n)return!0;n=n.parentNode||n.host}while(n)}return!1}function Vg(s,e){const t=Zt(s,!1,e==="fixed"),n=t.top+s.clientTop,o=t.left+s.clientLeft;return{top:n,left:o,x:o,y:n,right:o+s.clientWidth,bottom:n+s.clientHeight,width:s.clientWidth,height:s.clientHeight}}function vr(s,e,t){return e==="viewport"?gr(Qg(s,t)):cn(e)?Vg(e,t):gr(Yg(fn(s)))}function e_(s){const e=Bs(s),n=["absolute","fixed"].includes(an(s).position)&&Dt(s)?mo(s):s;return cn(n)?e.filter(o=>cn(o)&&Jg(o,n)&&Gt(o)!=="body"):[]}function t_(s){let{element:e,boundary:t,rootBoundary:n,strategy:o}=s;const r=[...t==="clippingAncestors"?e_(e):[].concat(t),n],i=r[0],a=r.reduce((c,u)=>{const f=vr(e,u,o);return c.top=Wn(f.top,c.top),c.right=_r(f.right,c.right),c.bottom=_r(f.bottom,c.bottom),c.left=Wn(f.left,c.left),c},vr(e,i,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}const n_={getClippingRect:t_,convertOffsetParentRelativeRectToViewportRelativeRect:Xg,isElement:cn,getDimensions:$r,getOffsetParent:mo,getDocumentElement:fn,getElementRects:s=>{let{reference:e,floating:t,strategy:n}=s;return{reference:Gg(e,mo(t),n),floating:bn(Je({},$r(t)),{x:0,y:0})}},getClientRects:s=>Array.from(s.getClientRects()),isRTL:s=>an(s).direction==="rtl"};function s_(s,e,t,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:l=!0,elementResize:r=!0,animationFrame:i=!1}=n,a=o&&!i,c=l&&!i,u=a||c?[...cn(s)?Bs(s):[],...Bs(e)]:[];u.forEach(b=>{a&&b.addEventListener("scroll",t,{passive:!0}),c&&b.addEventListener("resize",t)});let f=null;if(r){let b=!0;f=new ResizeObserver(()=>{b||t(),b=!1}),cn(s)&&!i&&f.observe(s),f.observe(e)}let d,m=i?Zt(s):null;i&&g();function g(){const b=Zt(s);m&&(b.x!==m.x||b.y!==m.y||b.width!==m.width||b.height!==m.height)&&t(),m=b,d=requestAnimationFrame(g)}return t(),()=>{var b;u.forEach($=>{a&&$.removeEventListener("scroll",t),c&&$.removeEventListener("resize",t)}),(b=f)==null||b.disconnect(),f=null,i&&cancelAnimationFrame(d)}}const o_=(s,e,t)=>Ug(s,e,Je({platform:n_},t));function Ws(s){const e={enable:!1,options:void 0,cleanup:null},t={reference:null,floating:null,options:void 0};n(s);function n(c){c===!0?(e.enable=!0,o()):c===!1?(l(),e.enable=!1):(o(),e.enable=!0,e.options=c)}function o(){l(),t.reference&&t.floating&&e.enable&&(e.cleanup=s_(t.reference,t.floating,r,e.options))}function l(){e.cleanup!=null&&(e.cleanup(),e.cleanup=null)}function r(){return wt(this,null,function*(){if(t.reference&&t.floating){const{reference:c,floating:u,options:f}=t,d=yield o_(c,u,f);Object.assign(u.style,{position:d.strategy,left:`${d.x}px`,top:`${d.y}px`}),f!=null&&f.callback&&f.callback(d,{reference:c,floating:u})}})}function i(c){return t.reference=c,e.enable?o():r(),{destroy(){l(),t.reference=null}}}function a(c,u){return t.floating=c,t.options=u,e.enable?o():r(),{update(f){l(),t.options=f,e.enable?o():r()},destroy(){l(),t.floating=null,t.options=void 0}}}return[i,a,n]}function Vn(s,e){let t,n;[t,n]=e!=null?e:[];function o(r){t&&s.contains(r.target)&&t(r)}function l(r){n&&!s.contains(r.relatedTarget)&&n(r)}return s.addEventListener("focusin",o),s.addEventListener("focusout",l),{update(r){[t,n]=r!=null?r:[]},destroy(){s.removeEventListener("focusout",l),s.removeEventListener("focusin",o)}}}function wr(s){let e,t,n,o,l,r,i,a,c,u,f,d;function m(T){s[5](T)}let g={class:"h-48 p-3",style:"--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"};s[0]!==void 0&&(g.color=s[0]),t=new Ki({props:g}),Xe.push(()=>rn(t,"color",m));function b(T){s[6](T)}let $={class:"p-3 text-sm"};return s[0]!==void 0&&($.color=s[0]),i=new qi({props:$}),Xe.push(()=>rn(i,"color",b)),{c(){e=_("div"),R(t.$$.fragment),o=x(),l=_("div"),r=x(),R(i.$$.fragment),h(l,"class","border-t"),h(e,"class","absolute w-[240px] border rounded-lg bg-white shadow-lg")},m(T,E){k(T,e,E),N(t,e,null),p(e,o),p(e,l),p(e,r),N(i,e,null),u=!0,f||(d=Ve(s[3].call(null,e,{placement:"bottom-start",middleware:[js(),Us(8)]})),f=!0)},p(T,E){const D={};!n&&E&1&&(n=!0,D.color=T[0],kn(()=>n=!1)),t.$set(D);const C={};!a&&E&1&&(a=!0,C.color=T[0],kn(()=>a=!1)),i.$set(C)},i(T){u||(y(t.$$.fragment,T),y(i.$$.fragment,T),T&&kt(()=>{c||(c=ln(e,Fn,{},!0)),c.run(1)}),u=!0)},o(T){S(t.$$.fragment,T),S(i.$$.fragment,T),T&&(c||(c=ln(e,Fn,{},!1)),c.run(0)),u=!1},d(T){T&&w(e),P(t),P(i),T&&c&&c.end(),f=!1,d()}}}function l_(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O,I,L,F,z,U,Z,Y,re,oe=s[1]&&wr(s);return I=new Do({props:{class:"mt-4"}}),I.$on("color",s[8]),U=new dt({props:{code:`<script lang="ts">
<\/script>

<section class="prose max-w-none my-4">
</section>

<style lang="postcss">
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML=`This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a> and
    <a href="/focus-action"><code>@apsc/flocus-action</code></a>`,n=x(),o=_("div"),l=_("div"),r=_("div"),r.textContent="Click this button to pick a color",i=x(),a=_("div"),c=_("button"),u=_("span"),f=x(),oe&&oe.c(),m=x(),g=_("div"),b=_("div"),$=j("Current color: "),T=_("code"),E=j(s[0]),D=x(),C=_("div"),M=_("div"),O=x(),R(I.$$.fragment),L=x(),F=_("h3"),F.textContent="Code",z=x(),R(U.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(u,"class","block border h-[22px] w-[10ch] bg-chess"),ot(u,"background","linear-gradient(to right, "+s[0]+" 0, "+s[0]+" 100%), var(--bg-chess-background)"),h(c,"class","input py-1"),h(l,"class","basis-1/2"),h(T,"class","uppercase"),h(M,"class","h-[1.5em] bg-chess"),ot(M,"background","linear-gradient(to right, "+s[0]+" 0, "+s[0]+" 100%), var(--bg-chess-background)"),h(C,"class","p-2 border rounded-md"),h(g,"class","basis-1/2"),h(o,"class","flex gap-8"),h(e,"class","prose max-w-none my-4")},m(H,W){k(H,e,W),p(e,t),p(e,n),p(e,o),p(o,l),p(l,r),p(l,i),p(l,a),p(a,c),p(c,u),p(a,f),oe&&oe.m(a,null),p(o,m),p(o,g),p(g,b),p(b,$),p(b,T),p(T,E),p(g,D),p(g,C),p(C,M),p(g,O),N(I,g,null),p(e,L),p(e,F),p(e,z),N(U,e,null),Z=!0,Y||(re=[Ve(s[2].call(null,c)),J(c,"click",s[4]),Ve(d=Vn.call(null,a,[void 0,s[7]]))],Y=!0)},p(H,[W]){(!Z||W&1)&&ot(u,"background","linear-gradient(to right, "+H[0]+" 0, "+H[0]+" 100%), var(--bg-chess-background)"),H[1]?oe?(oe.p(H,W),W&2&&y(oe,1)):(oe=wr(H),oe.c(),y(oe,1),oe.m(a,null)):oe&&(ye(),S(oe,1,1,()=>{oe=null}),Te()),d&&ut(d.update)&&W&2&&d.update.call(null,[void 0,H[7]]),(!Z||W&1)&&Ie(E,H[0]),(!Z||W&1)&&ot(M,"background","linear-gradient(to right, "+H[0]+" 0, "+H[0]+" 100%), var(--bg-chess-background)")},i(H){Z||(y(oe),y(I.$$.fragment,H),y(U.$$.fragment,H),Z=!0)},o(H){S(oe),S(I.$$.fragment,H),S(U.$$.fragment,H),Z=!1},d(H){H&&w(e),oe&&oe.d(),P(I),P(U),Y=!1,je(re)}}}function r_(s,e,t){const[n,o]=Ws(!0);let l="#f70",r=!1;const i=()=>t(1,r=!r);function a(d){l=d,t(0,l)}function c(d){l=d,t(0,l)}return[l,r,n,o,i,a,c,()=>t(1,r=!1),({detail:d})=>t(0,l=d)]}class i_ extends te{constructor(e){super(),ee(this,e,r_,l_,V,{})}}const{document:kr}=un;function a_(s){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function c_(s){let e;return{c(){e=j("ColorPicker example")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function u_(s){let e;return{c(){e=j("ColorEdit example")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function f_(s){let e;return{c(){e=j("Color input Example")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function d_(s){let e,t,n,o,l,r,i,a;return e=new ke({props:{$$slots:{default:[a_]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[c_]},$$scope:{ctx:s}}}),l=new ke({props:{$$slots:{default:[u_]},$$scope:{ctx:s}}}),i=new ke({props:{$$slots:{default:[f_]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment)},m(c,u){N(e,c,u),k(c,t,u),N(n,c,u),k(c,o,u),N(l,c,u),k(c,r,u),N(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),l.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||(y(e.$$.fragment,c),y(n.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(n.$$.fragment,c),S(l.$$.fragment,c),S(i.$$.fragment,c),a=!1},d(c){P(e,c),c&&w(t),P(n,c),c&&w(o),P(l,c),c&&w(r),P(i,c)}}}function p_(s){let e,t;return e=new Mh({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function m_(s){let e,t;return e=new Sg({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function h_(s){let e,t;return e=new Cg({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function g_(s){let e,t;return e=new i_({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function __(s){let e,t,n,o,l,r,i,a,c,u;return e=new Tt({props:{$$slots:{default:[d_]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[p_]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[m_]},$$scope:{ctx:s}}}),i=new we({props:{$$slots:{default:[h_]},$$scope:{ctx:s}}}),c=new we({props:{$$slots:{default:[g_]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment),a=x(),R(c.$$.fragment)},m(f,d){N(e,f,d),k(f,t,d),N(n,f,d),k(f,o,d),N(l,f,d),k(f,r,d),N(i,f,d),k(f,a,d),N(c,f,d),u=!0},p(f,d){const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),e.$set(m);const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),n.$set(g);const b={};d&1&&(b.$$scope={dirty:d,ctx:f}),l.$set(b);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),i.$set($);const T={};d&1&&(T.$$scope={dirty:d,ctx:f}),c.$set(T)},i(f){u||(y(e.$$.fragment,f),y(n.$$.fragment,f),y(l.$$.fragment,f),y(i.$$.fragment,f),y(c.$$.fragment,f),u=!0)},o(f){S(e.$$.fragment,f),S(n.$$.fragment,f),S(l.$$.fragment,f),S(i.$$.fragment,f),S(c.$$.fragment,f),u=!1},d(f){P(e,f),f&&w(t),P(n,f),f&&w(o),P(l,f),f&&w(r),P(i,f),f&&w(a),P(c,f)}}}function b_(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b;return kr.title=e=document.title.replace(/(•).*$/,"$1 Color"),g=new yt({props:{$$slots:{default:[__]},$$scope:{ctx:s}}}),{c(){t=x(),n=_("section"),o=_("a"),o.textContent="Home",l=x(),r=_("h1"),r.textContent="A set of components for picking and editing colors",i=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>no inline styles</li> 
    <li>the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts" target="_blank" rel="noreferrer">utils.d.ts</a> for definitions of types and functions</li>`,m=x(),R(g.$$.fragment),h(o,"class","float-right"),h(o,"href","/"),h(r,"class","text-2xl"),h(c,"class","max-w-[4em]"),ct(c.src,u=gt)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/color"),h(a,"target","_blank"),h(a,"rel","noreferrer"),h(d,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m($,T){k($,t,T),k($,n,T),p(n,o),p(n,l),p(n,r),p(n,i),p(n,a),p(a,c),p(n,f),p(n,d),p(n,m),N(g,n,null),b=!0},p($,[T]){(!b||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Color"))&&(kr.title=e);const E={};T&1&&(E.$$scope={dirty:T,ctx:$}),g.$set(E)},i($){b||(y(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&w(t),$&&w(n),P(g)}}}let $_=class extends te{constructor(e){super(),ee(this,e,null,b_,V,{})}};const yr=`# [Floating UI](https://floating-ui.com/) action for \`use\` Svelte directive

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
`;function v_(s){let e,t,n;return t=new En({props:{source:yr.slice(yr.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),h(e,"class","documentation")},m(o,l){k(o,e,l),N(t,e,null),n=!0},p:le,i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){S(t.$$.fragment,o),n=!1},d(o){o&&w(e),P(t)}}}let w_=class extends te{constructor(e){super(),ee(this,e,null,v_,V,{})}};function Tr(s,e,t){const n=s.slice();return n[20]=e[t],n}function xr(s,e,t){const n=s.slice();return n[23]=e[t],n}function Sr(s){let e,t=s[23]+"",n;return{c(){e=_("option"),n=j(t),e.__value=s[23],e.value=e.__value},m(o,l){k(o,e,l),p(e,n)},p:le,d(o){o&&w(e)}}}function Er(s){let e,t=s[20]+"",n;return{c(){e=_("option"),n=j(t),e.__value=s[12][s[20]],e.value=e.__value},m(o,l){k(o,e,l),p(e,n)},p:le,d(o){o&&w(e)}}}function Ar(s){let e,t,n,o,l,r,i,a;return{c(){e=_("div"),t=_("div"),n=j(`
        Lorem ipsum dolor sit amet consectetur adipisicing elit`),h(t,"class","arrow svelte-1b5318a"),h(e,"class","tooltip not-prose svelte-1b5318a")},m(c,u){k(c,e,u),p(e,t),s[19](t),p(e,n),r=!0,i||(a=Ve(o=s[9].call(null,e,{placement:s[5],middleware:s[6],callback:s[10]})),i=!0)},p(c,u){o&&ut(o.update)&&u&96&&o.update.call(null,{placement:c[5],middleware:c[6],callback:c[10]})},i(c){r||(c&&kt(()=>{l||(l=ln(e,s[7],{},!0)),l.run(1)}),r=!0)},o(c){c&&(l||(l=ln(e,s[7],{},!1)),l.run(0)),r=!1},d(c){c&&w(e),s[19](null),c&&l&&l.end(),i=!1,a()}}}function k_(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O,I,L,F,z,U,Z,Y,re,oe=s[4]?"hide":"show",H,W,X,fe,_e,ge,Ce,Ue,Re,Se=s[11],ce=[];for(let ae=0;ae<Se.length;ae+=1)ce[ae]=Sr(xr(s,Se,ae));let Me=Object.keys(s[12]),ie=[];for(let ae=0;ae<Me.length;ae+=1)ie[ae]=Er(Tr(s,Me,ae));let $e=s[4]&&Ar(s);return ge=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=_("section"),t=_("div"),n=_("label"),o=_("span"),o.textContent="placement",l=x(),r=_("select");for(let ae=0;ae<ce.length;ae+=1)ce[ae].c();i=x(),a=_("label"),c=_("input"),u=x(),f=_("span"),f.textContent="flip",d=x(),m=_("label"),g=_("span"),g.textContent="offset",b=x(),$=_("input"),T=x(),E=_("label"),D=_("span"),D.textContent="size padding",C=x(),M=_("input"),O=x(),I=_("label"),L=_("span"),L.textContent="transition",F=x(),z=_("select");for(let ae=0;ae<ie.length;ae+=1)ie[ae].c();U=x(),Z=_("div"),Y=_("button"),re=j("Click me to "),H=j(oe),W=x(),$e&&$e.c(),X=x(),fe=_("h3"),fe.textContent="Code",_e=x(),R(ge.$$.fragment),h(r,"class","input"),s[5]===void 0&&kt(()=>s[13].call(r)),h(c,"type","checkbox"),h(a,"class","whitespace-nowrap"),h($,"type","number"),h($,"class","input w-[8ch]"),h(M,"type","number"),h(M,"class","input w-[8ch]"),h(z,"class","input"),s[7]===void 0&&kt(()=>s[17].call(z)),h(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),h(Y,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),h(Z,"class","h-64 flex items-center justify-center border"),h(e,"class","prose max-w-none my-4")},m(ae,ve){k(ae,e,ve),p(e,t),p(t,n),p(n,o),p(n,l),p(n,r);for(let Oe=0;Oe<ce.length;Oe+=1)ce[Oe].m(r,null);Ot(r,s[5]),p(t,i),p(t,a),p(a,c),c.checked=s[2],p(a,u),p(a,f),p(t,d),p(t,m),p(m,g),p(m,b),p(m,$),_t($,s[1]),p(t,T),p(t,E),p(E,D),p(E,C),p(E,M),_t(M,s[3]),p(t,O),p(t,I),p(I,L),p(I,F),p(I,z);for(let Oe=0;Oe<ie.length;Oe+=1)ie[Oe].m(z,null);Ot(z,s[7]),p(e,U),p(e,Z),p(Z,Y),p(Y,re),p(Y,H),p(Z,W),$e&&$e.m(Z,null),p(e,X),p(e,fe),p(e,_e),N(ge,e,null),Ce=!0,Ue||(Re=[J(r,"change",s[13]),J(c,"change",s[14]),J($,"input",s[15]),J(M,"input",s[16]),J(z,"change",s[17]),Ve(s[8].call(null,Y)),J(Y,"click",s[18])],Ue=!0)},p(ae,[ve]){if(ve&2048){Se=ae[11];let Ae;for(Ae=0;Ae<Se.length;Ae+=1){const Ne=xr(ae,Se,Ae);ce[Ae]?ce[Ae].p(Ne,ve):(ce[Ae]=Sr(Ne),ce[Ae].c(),ce[Ae].m(r,null))}for(;Ae<ce.length;Ae+=1)ce[Ae].d(1);ce.length=Se.length}if(ve&2080&&Ot(r,ae[5]),ve&4&&(c.checked=ae[2]),ve&2&&At($.value)!==ae[1]&&_t($,ae[1]),ve&8&&At(M.value)!==ae[3]&&_t(M,ae[3]),ve&4096){Me=Object.keys(ae[12]);let Ae;for(Ae=0;Ae<Me.length;Ae+=1){const Ne=Tr(ae,Me,Ae);ie[Ae]?ie[Ae].p(Ne,ve):(ie[Ae]=Er(Ne),ie[Ae].c(),ie[Ae].m(z,null))}for(;Ae<ie.length;Ae+=1)ie[Ae].d(1);ie.length=Me.length}ve&4224&&Ot(z,ae[7]),(!Ce||ve&16)&&oe!==(oe=ae[4]?"hide":"show")&&Ie(H,oe),ae[4]?$e?($e.p(ae,ve),ve&16&&y($e,1)):($e=Ar(ae),$e.c(),y($e,1),$e.m(Z,null)):$e&&(ye(),S($e,1,1,()=>{$e=null}),Te());const Oe={};ve&160&&(Oe.code=`<script lang="ts"
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
          placement: '${ae[5]}',
          middleware,
          callback: adjustArrow
        }}
        ${ae[7]!=null?`transition:${ae[7].name}|local`:""}
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
</style>`),ge.$set(Oe)},i(ae){Ce||(y($e),y(ge.$$.fragment,ae),Ce=!0)},o(ae){S($e),S(ge.$$.fragment,ae),Ce=!1},d(ae){ae&&w(e),Ye(ce,ae),Ye(ie,ae),$e&&$e.d(),P(ge),Ue=!1,je(Re)}}}function y_(s,e,t){const[n,o]=Ws(!0);let l,r=!1;function i(I){const{placement:L,middlewareData:F}=I;if(F.arrow){const{x:z,y:U}=F.arrow,Z={top:"bottom",right:"left",bottom:"top",left:"right"}[L.split("-")[0]];Z&&Object.assign(l.style,{left:z!=null?`${z}px`:"",top:U!=null?`${U}px`:"",right:"",bottom:"",[Z]:"-6px"})}}const a=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let c=a[0],u=16,f=!0,d=16,m=[],g;const b={slide:Fn,scale:mh,fade:ph,blur:dh,none:()=>({delay:0,duration:0})};function $(){c=Gn(this),t(5,c),t(11,a)}function T(){f=this.checked,t(2,f)}function E(){u=At(this.value),t(1,u)}function D(){d=At(this.value),t(3,d)}function C(){g=Gn(this),t(7,g),t(12,b)}const M=()=>t(4,r=!r);function O(I){Xe[I?"unshift":"push"](()=>{l=I,t(0,l)})}return s.$$.update=()=>{s.$$.dirty&15&&t(6,m=[Us(u),f&&js(),Yi({padding:d,apply({availableWidth:I,availableHeight:L,elements:F}){Object.assign(F.floating.style,{maxWidth:`${I}px`,maxHeight:`${L}px`})}}),l&&Qi({element:l})].filter(I=>!!I))},[l,u,f,d,r,c,m,g,n,o,i,a,b,$,T,E,D,C,M,O]}class T_ extends te{constructor(e){super(),ee(this,e,y_,k_,V,{})}}function Cr(s,e,t){const n=s.slice();return n[18]=e[t],n}function Nr(s){let e,t=s[18]+"",n;return{c(){e=_("option"),n=j(t),e.__value=s[18],e.value=e.__value},m(o,l){k(o,e,l),p(e,n)},p:le,d(o){o&&w(e)}}}function x_(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O,I,L,F,z=s[1]?"hide":"show",U,Z,Y,re,oe,H,W,X,fe,_e,ge,Ce,Ue,Re=s[10],Se=[];for(let ce=0;ce<Re.length;ce+=1)Se[ce]=Nr(Cr(s,Re,ce));return _e=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=_("section"),t=_("div"),n=_("label"),o=_("span"),o.textContent="placement",l=x(),r=_("select");for(let ce=0;ce<Se.length;ce+=1)Se[ce].c();i=x(),a=_("label"),c=_("input"),u=x(),f=_("span"),f.textContent="flip",d=x(),m=_("label"),g=_("span"),g.textContent="offset",b=x(),$=_("input"),T=x(),E=_("label"),D=_("span"),D.textContent="size padding",C=x(),M=_("input"),O=x(),I=_("div"),L=_("button"),F=j("Click me to "),U=j(z),Z=x(),Y=_("div"),re=_("div"),oe=j(`
      Lorem ipsum dolor sit amet consectetur adipisicing elit`),W=x(),X=_("h3"),X.textContent="Code",fe=x(),R(_e.$$.fragment),h(r,"class","input"),s[5]===void 0&&kt(()=>s[11].call(r)),h(c,"type","checkbox"),h(a,"class","whitespace-nowrap"),h($,"type","number"),h($,"class","input w-[8ch]"),h(M,"type","number"),h(M,"class","input w-[8ch]"),h(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),h(L,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),h(re,"class","arrow svelte-1lvd4kc"),h(Y,"class","tooltip not-prose svelte-1lvd4kc"),Qe(Y,"in",s[1]),Qe(Y,"out",!s[1]),h(I,"class","h-64 flex items-center justify-center border"),h(e,"class","prose max-w-none my-4")},m(ce,Me){k(ce,e,Me),p(e,t),p(t,n),p(n,o),p(n,l),p(n,r);for(let ie=0;ie<Se.length;ie+=1)Se[ie].m(r,null);Ot(r,s[5]),p(t,i),p(t,a),p(a,c),c.checked=s[3],p(a,u),p(a,f),p(t,d),p(t,m),p(m,g),p(m,b),p(m,$),_t($,s[2]),p(t,T),p(t,E),p(E,D),p(E,C),p(E,M),_t(M,s[4]),p(e,O),p(e,I),p(I,L),p(L,F),p(L,U),p(I,Z),p(I,Y),p(Y,re),s[16](re),p(Y,oe),p(e,W),p(e,X),p(e,fe),N(_e,e,null),ge=!0,Ce||(Ue=[J(r,"change",s[11]),J(c,"change",s[12]),J($,"input",s[13]),J(M,"input",s[14]),Ve(s[7].call(null,L)),J(L,"click",s[15]),Ve(H=s[8].call(null,Y,{placement:s[5],middleware:s[6],callback:s[9]}))],Ce=!0)},p(ce,[Me]){if(Me&1024){Re=ce[10];let $e;for($e=0;$e<Re.length;$e+=1){const ae=Cr(ce,Re,$e);Se[$e]?Se[$e].p(ae,Me):(Se[$e]=Nr(ae),Se[$e].c(),Se[$e].m(r,null))}for(;$e<Se.length;$e+=1)Se[$e].d(1);Se.length=Re.length}Me&1056&&Ot(r,ce[5]),Me&8&&(c.checked=ce[3]),Me&4&&At($.value)!==ce[2]&&_t($,ce[2]),Me&16&&At(M.value)!==ce[4]&&_t(M,ce[4]),(!ge||Me&2)&&z!==(z=ce[1]?"hide":"show")&&Ie(U,z),H&&ut(H.update)&&Me&96&&H.update.call(null,{placement:ce[5],middleware:ce[6],callback:ce[9]}),(!ge||Me&2)&&Qe(Y,"in",ce[1]),(!ge||Me&2)&&Qe(Y,"out",!ce[1]);const ie={};Me&32&&(ie.code=`<script lang="ts"
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
        placement: '${ce[5]}',
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
</style>`),_e.$set(ie)},i(ce){ge||(y(_e.$$.fragment,ce),ge=!0)},o(ce){S(_e.$$.fragment,ce),ge=!1},d(ce){ce&&w(e),Ye(Se,ce),s[16](null),P(_e),Ce=!1,je(Ue)}}}function S_(s,e,t){const[n,o,l]=Ws(!0);let r,i=!1;function a(M){const{placement:O,middlewareData:I}=M;if(I.arrow){const{x:L,y:F}=I.arrow,z={top:"bottom",right:"left",bottom:"top",left:"right"}[O.split("-")[0]];z&&Object.assign(r.style,{left:L!=null?`${L}px`:"",top:F!=null?`${F}px`:"",right:"",bottom:"",[z]:"-6px"})}}const c=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let u=c[0],f=16,d=!0,m=16,g=[];function b(){u=Gn(this),t(5,u),t(10,c)}function $(){d=this.checked,t(3,d)}function T(){f=At(this.value),t(2,f)}function E(){m=At(this.value),t(4,m)}const D=()=>t(1,i=!i);function C(M){Xe[M?"unshift":"push"](()=>{r=M,t(0,r)})}return s.$$.update=()=>{s.$$.dirty&2&&l(i),s.$$.dirty&29&&t(6,g=[Us(f),d&&js(),Yi({padding:m,apply({availableWidth:M,availableHeight:O,elements:I}){Object.assign(I.floating.style,{maxWidth:`${M}px`,maxHeight:`${O}px`})}}),r&&Qi({element:r})].filter(M=>!!M))},[r,i,f,d,m,u,g,n,o,a,c,b,$,T,E,D,C]}class E_ extends te{constructor(e){super(),ee(this,e,S_,x_,V,{})}}const{document:Pr}=un;function A_(s){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function C_(s){let e;return{c(){e=j("Transition JS demo")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function N_(s){let e;return{c(){e=j("Transition CSS demo")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function P_(s){let e,t,n,o,l,r;return e=new ke({props:{$$slots:{default:[A_]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[C_]},$$scope:{ctx:s}}}),l=new ke({props:{$$slots:{default:[N_]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment)},m(i,a){N(e,i,a),k(i,t,a),N(n,i,a),k(i,o,a),N(l,i,a),r=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(y(e.$$.fragment,i),y(n.$$.fragment,i),y(l.$$.fragment,i),r=!0)},o(i){S(e.$$.fragment,i),S(n.$$.fragment,i),S(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&w(t),P(n,i),i&&w(o),P(l,i)}}}function R_(s){let e,t;return e=new w_({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function M_(s){let e,t;return e=new T_({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function O_(s){let e,t;return e=new E_({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function I_(s){let e,t,n,o,l,r,i,a;return e=new Tt({props:{$$slots:{default:[P_]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[R_]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[M_]},$$scope:{ctx:s}}}),i=new we({props:{$$slots:{default:[O_]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment)},m(c,u){N(e,c,u),k(c,t,u),N(n,c,u),k(c,o,u),N(l,c,u),k(c,r,u),N(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),l.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||(y(e.$$.fragment,c),y(n.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(n.$$.fragment,c),S(l.$$.fragment,c),S(i.$$.fragment,c),a=!1},d(c){P(e,c),c&&w(t),P(n,c),c&&w(o),P(l,c),c&&w(r),P(i,c)}}}function L_(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b;return Pr.title=e=document.title.replace(/(•).*$/,"$1 Floating UI action"),g=new yt({props:{$$slots:{default:[I_]},$$scope:{ctx:s}}}),{c(){t=x(),n=_("section"),o=_("a"),o.textContent="Home",l=x(),r=_("h1"),r.textContent="Action to use Floating UI",i=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>allows you to use both Svelte transitions and CSS transitions</li> 
    <li>dependence <a href="https://github.com/floating-ui/floating-ui" target="_blank" rel="noreferrer">@floating-ui/dom</a></li>`,m=x(),R(g.$$.fragment),h(o,"class","float-right"),h(o,"href","/"),h(r,"class","text-2xl"),h(c,"class","max-w-[4em]"),ct(c.src,u=gt)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),h(a,"target","_blank"),h(a,"rel","noreferrer"),h(d,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m($,T){k($,t,T),k($,n,T),p(n,o),p(n,l),p(n,r),p(n,i),p(n,a),p(a,c),p(n,f),p(n,d),p(n,m),N(g,n,null),b=!0},p($,[T]){(!b||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Floating UI action"))&&(Pr.title=e);const E={};T&1&&(E.$$scope={dirty:T,ctx:$}),g.$set(E)},i($){b||(y(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&w(t),$&&w(n),P(g)}}}let D_=class extends te{constructor(e){super(),ee(this,e,null,L_,V,{})}};const Rr=`# Action to control \`focusin\` and \`focusout\` for Svelte directive \`use\`

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
`;function B_(s){let e,t,n;return t=new En({props:{source:Rr.slice(Rr.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),h(e,"class","documentation")},m(o,l){k(o,e,l),N(t,e,null),n=!0},p:le,i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){S(t.$$.fragment,o),n=!1},d(o){o&&w(e),P(t)}}}let F_=class extends te{constructor(e){super(),ee(this,e,null,B_,V,{})}};function z_(s){let e;return{c(){e=j(" ")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function H_(s){let e;return{c(){e=j("Try to close the dropdown block by clicking outside")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function j_(s){let e;return{c(){e=j("Select")},m(t,n){k(t,e,n)},p:le,d(t){t&&w(e)}}}function U_(s){let e,t,n;return{c(){e=j("Selected "),t=_("small"),n=j(s[3]),h(t,"class","font-semibold text-gray-400")},m(o,l){k(o,e,l),k(o,t,l),p(t,n)},p(o,l){l&8&&Ie(n,o[3])},d(o){o&&w(e),o&&w(t)}}}function Mr(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C;return{c(){e=_("div"),t=_("div"),t.textContent="Choose one of the items",n=x(),o=_("div"),l=_("label"),r=_("input"),i=x(),a=_("span"),a.textContent="Firts",c=x(),u=_("label"),f=_("input"),d=x(),m=_("span"),m.textContent="Second",g=x(),b=_("label"),$=_("input"),T=x(),E=_("span"),E.textContent="Third",h(t,"class","alert svelte-1hjb9pe"),Qe(t,"error",s[2]),h(r,"type","radio"),r.__value="Firts",r.value=r.__value,h(r,"name","item"),s[8][0].push(r),h(f,"type","radio"),f.__value="Second",f.value=f.__value,h(f,"name","item"),s[8][0].push(f),h($,"type","radio"),$.__value="Third",$.value=$.__value,h($,"name","item"),s[8][0].push($),h(o,"class","mt-2 flex gap-4 px-2"),h(e,"class","absolute border shadow-md rounded-md p-2 top-2 bg-white"),h(e,"tabindex","-1")},m(M,O){k(M,e,O),p(e,t),p(e,n),p(e,o),p(o,l),p(l,r),r.checked=r.__value===s[3],p(l,i),p(l,a),p(o,c),p(o,u),p(u,f),f.checked=f.__value===s[3],p(u,d),p(u,m),p(o,g),p(o,b),p(b,$),$.checked=$.__value===s[3],p(b,T),p(b,E),s[11](e),D||(C=[J(r,"change",s[7]),J(f,"change",s[9]),J($,"change",s[10]),Ve(Vn.call(null,e,[void 0,s[4]]))],D=!0)},p(M,O){O&4&&Qe(t,"error",M[2]),O&8&&(r.checked=r.__value===M[3]),O&8&&(f.checked=f.__value===M[3]),O&8&&($.checked=$.__value===M[3])},d(M){M&&w(e),s[8][0].splice(s[8][0].indexOf(r),1),s[8][0].splice(s[8][0].indexOf(f),1),s[8][0].splice(s[8][0].indexOf($),1),s[11](null),D=!1,je(C)}}}function K_(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T;function E(F,z){return F[1]&&!F[3]?H_:z_}let D=E(s),C=D(s);function M(F,z){return F[3]?U_:j_}let O=M(s),I=O(s),L=s[1]&&Mr(s);return g=new dt({props:{code:`<script lang="ts"
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
`}}),{c(){e=_("section"),t=_("div"),C.c(),n=x(),o=_("div"),l=_("button"),I.c(),r=x(),i=_("button"),a=j("Reset"),c=x(),u=_("div"),L&&L.c(),f=x(),d=_("h3"),d.textContent="Code",m=x(),R(g.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(l,"class","input w-[200px]"),h(i,"class","input"),i.disabled=s[1],h(u,"class","relative"),h(o,"class","w-fit mx-auto"),h(e,"class","prose max-w-none my-4")},m(F,z){k(F,e,z),p(e,t),C.m(t,null),p(e,n),p(e,o),p(o,l),I.m(l,null),p(o,r),p(o,i),p(i,a),p(o,c),p(o,u),L&&L.m(u,null),p(e,f),p(e,d),p(e,m),N(g,e,null),b=!0,$||(T=[J(l,"click",s[5]),J(i,"click",s[6])],$=!0)},p(F,[z]){D!==(D=E(F))&&(C.d(1),C=D(F),C&&(C.c(),C.m(t,null))),O===(O=M(F))&&I?I.p(F,z):(I.d(1),I=O(F),I&&(I.c(),I.m(l,null))),(!b||z&2)&&(i.disabled=F[1]),F[1]?L?L.p(F,z):(L=Mr(F),L.c(),L.m(u,null)):L&&(L.d(1),L=null)},i(F){b||(y(g.$$.fragment,F),b=!0)},o(F){S(g.$$.fragment,F),b=!1},d(F){F&&w(e),C.d(),I.d(),L&&L.d(),P(g),$=!1,je(T)}}}function q_(s,e,t){let n=!1,o=!1,l,r="";function i(){r?(t(1,n=!1),t(2,o=!1)):t(2,o=!0)}const a=[[]],c=()=>t(1,n=!0),u=()=>t(3,r="");function f(){r=this.__value,t(3,r)}function d(){r=this.__value,t(3,r)}function m(){r=this.__value,t(3,r)}function g(b){Xe[b?"unshift":"push"](()=>{l=b,t(0,l)})}return s.$$.update=()=>{s.$$.dirty&1&&l&&l.focus()},[l,n,o,r,i,c,u,f,a,d,m,g]}class W_ extends te{constructor(e){super(),ee(this,e,q_,K_,V,{})}}function Or(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M;return{c(){e=_("ul"),t=_("li"),n=_("button"),n.textContent="Open",o=x(),l=_("li"),r=_("button"),r.textContent="Close",i=x(),a=_("li"),c=_("button"),c.textContent="Upload",u=x(),f=_("li"),d=_("button"),d.textContent="Download",m=x(),g=_("li"),b=x(),$=_("li"),T=_("button"),T.textContent="About",h(n,"class","svelte-x2xhpk"),h(t,"class","svelte-x2xhpk"),h(r,"class","svelte-x2xhpk"),h(l,"class","svelte-x2xhpk"),h(c,"class","svelte-x2xhpk"),h(a,"class","svelte-x2xhpk"),h(d,"class","svelte-x2xhpk"),h(f,"class","svelte-x2xhpk"),h(g,"class","separator svelte-x2xhpk"),h(T,"class","svelte-x2xhpk"),h($,"class","svelte-x2xhpk"),h(e,"class","dropdown svelte-x2xhpk"),h(e,"tabindex","-1")},m(O,I){k(O,e,I),p(e,t),p(t,n),p(e,o),p(e,l),p(l,r),p(e,i),p(e,a),p(a,c),p(e,u),p(e,f),p(f,d),p(e,m),p(e,g),p(e,b),p(e,$),p($,T),D=!0,C||(M=[J(n,"click",s[4]),J(r,"click",s[5]),J(c,"click",s[6]),J(d,"click",s[7]),J(T,"click",s[8]),Ve(s[2].call(null,e,{placement:"bottom-start",middleware:[js(),Us(8)]}))],C=!0)},p:le,i(O){D||(O&&kt(()=>{E||(E=ln(e,Fn,{},!0)),E.run(1)}),D=!0)},o(O){O&&(E||(E=ln(e,Fn,{},!1)),E.run(0)),D=!1},d(O){O&&w(e),O&&E&&E.end(),C=!1,je(M)}}}function G_(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b=s[0]&&Or(s);return f=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a>',n=x(),o=_("div"),l=_("button"),l.textContent="Action",r=x(),b&&b.c(),a=x(),c=_("h3"),c.textContent="Code",u=x(),R(f.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(l,"class","input"),h(o,"class","w-fit mx-auto"),h(e,"class","prose max-w-none my-4")},m($,T){k($,e,T),p(e,t),p(e,n),p(e,o),p(o,l),p(o,r),b&&b.m(o,null),p(e,a),p(e,c),p(e,u),N(f,e,null),d=!0,m||(g=[Ve(s[1].call(null,l)),J(l,"click",s[3]),Ve(i=Vn.call(null,o,[void 0,s[9]]))],m=!0)},p($,[T]){$[0]?b?(b.p($,T),T&1&&y(b,1)):(b=Or($),b.c(),y(b,1),b.m(o,null)):b&&(ye(),S(b,1,1,()=>{b=null}),Te()),i&&ut(i.update)&&T&1&&i.update.call(null,[void 0,$[9]])},i($){d||(y(b),y(f.$$.fragment,$),d=!0)},o($){S(b),S(f.$$.fragment,$),d=!1},d($){$&&w(e),b&&b.d(),P(f),m=!1,je(g)}}}function Z_(s,e,t){const[n,o,l]=Ws(!0);let r=!1;const i=()=>t(0,r=!0),a=()=>t(0,r=!1),c=()=>t(0,r=!1),u=()=>t(0,r=!1),f=()=>t(0,r=!1),d=()=>t(0,r=!1),m=()=>t(0,r=!1);return s.$$.update=()=>{s.$$.dirty&1&&l(r)},[r,n,o,i,a,c,u,f,d,m]}class X_ extends te{constructor(e){super(),ee(this,e,Z_,G_,V,{})}}function Q_(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D;return $=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=_("section"),t=_("div"),t.textContent="This example highlights a focused fieldset.",n=x(),o=_("div"),l=_("div"),r=_("fieldset"),r.innerHTML=`<legend class="svelte-c2p0zs">Your details</legend> 
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
        <input type="text" class="input svelte-c2p0zs"/></label>`,m=x(),g=_("h3"),g.textContent="Code",b=x(),R($.$$.fragment),h(t,"class","mb-8 pb-2 border-b text-center text-gray-500"),h(r,"class","svelte-c2p0zs"),Qe(r,"active",s[0]),h(c,"class","mt-8"),h(l,"class","basis-1/2"),h(f,"class","basis-1/2 svelte-c2p0zs"),Qe(f,"active",s[1]),h(o,"class","form svelte-c2p0zs"),h(e,"class","prose max-w-none my-4")},m(C,M){k(C,e,M),p(e,t),p(e,n),p(e,o),p(o,l),p(l,r),p(l,a),p(l,c),p(o,u),p(o,f),p(e,m),p(e,g),p(e,b),N($,e,null),T=!0,E||(D=[Ve(i=Vn.call(null,r,[s[2],s[3]])),Ve(d=Vn.call(null,f,[s[4],s[5]]))],E=!0)},p(C,[M]){i&&ut(i.update)&&M&1&&i.update.call(null,[C[2],C[3]]),(!T||M&1)&&Qe(r,"active",C[0]),d&&ut(d.update)&&M&2&&d.update.call(null,[C[4],C[5]]),(!T||M&2)&&Qe(f,"active",C[1])},i(C){T||(y($.$$.fragment,C),T=!0)},o(C){S($.$$.fragment,C),T=!1},d(C){C&&w(e),P($),E=!1,je(D)}}}function Y_(s,e,t){let n=!1,o=!1;return[n,o,()=>t(0,n=!0),()=>t(0,n=!1),()=>t(1,o=!0),()=>t(1,o=!1)]}class J_ extends te{constructor(e){super(),ee(this,e,Y_,Q_,V,{})}}const{document:Ir}=un;function V_(s){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function eb(s){let e;return{c(){e=j("Reqired demo")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function tb(s){let e;return{c(){e=j("Dropdown demo")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function nb(s){let e;return{c(){e=j("Style demo")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function sb(s){let e,t,n,o,l,r,i,a;return e=new ke({props:{$$slots:{default:[V_]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[eb]},$$scope:{ctx:s}}}),l=new ke({props:{$$slots:{default:[tb]},$$scope:{ctx:s}}}),i=new ke({props:{$$slots:{default:[nb]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment)},m(c,u){N(e,c,u),k(c,t,u),N(n,c,u),k(c,o,u),N(l,c,u),k(c,r,u),N(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),l.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||(y(e.$$.fragment,c),y(n.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(n.$$.fragment,c),S(l.$$.fragment,c),S(i.$$.fragment,c),a=!1},d(c){P(e,c),c&&w(t),P(n,c),c&&w(o),P(l,c),c&&w(r),P(i,c)}}}function ob(s){let e,t;return e=new F_({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function lb(s){let e,t;return e=new W_({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function rb(s){let e,t;return e=new X_({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function ib(s){let e,t;return e=new J_({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function ab(s){let e,t,n,o,l,r,i,a,c,u;return e=new Tt({props:{$$slots:{default:[sb]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[ob]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[lb]},$$scope:{ctx:s}}}),i=new we({props:{$$slots:{default:[rb]},$$scope:{ctx:s}}}),c=new we({props:{$$slots:{default:[ib]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment),a=x(),R(c.$$.fragment)},m(f,d){N(e,f,d),k(f,t,d),N(n,f,d),k(f,o,d),N(l,f,d),k(f,r,d),N(i,f,d),k(f,a,d),N(c,f,d),u=!0},p(f,d){const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),e.$set(m);const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),n.$set(g);const b={};d&1&&(b.$$scope={dirty:d,ctx:f}),l.$set(b);const $={};d&1&&($.$$scope={dirty:d,ctx:f}),i.$set($);const T={};d&1&&(T.$$scope={dirty:d,ctx:f}),c.$set(T)},i(f){u||(y(e.$$.fragment,f),y(n.$$.fragment,f),y(l.$$.fragment,f),y(i.$$.fragment,f),y(c.$$.fragment,f),u=!0)},o(f){S(e.$$.fragment,f),S(n.$$.fragment,f),S(l.$$.fragment,f),S(i.$$.fragment,f),S(c.$$.fragment,f),u=!1},d(f){P(e,f),f&&w(t),P(n,f),f&&w(o),P(l,f),f&&w(r),P(i,f),f&&w(a),P(c,f)}}}function cb(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b;return Ir.title=e=document.title.replace(/(•).*$/,"$1 Focus action"),g=new yt({props:{$$slots:{default:[ab]},$$scope:{ctx:s}}}),{c(){t=x(),n=_("section"),o=_("a"),o.textContent="Home",l=x(),r=_("h1"),r.innerHTML=`Action to control <code>focusin</code> and <code>focusout</code><br/>for directive
    <code>use</code>`,i=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>correctly detects loss of focus with <code>Tab</code></li>`,m=x(),R(g.$$.fragment),h(o,"class","float-right"),h(o,"href","/"),h(r,"class","text-2xl"),h(c,"class","max-w-[4em]"),ct(c.src,u=gt)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/focus-action"),h(a,"target","_blank"),h(a,"rel","noreferrer"),h(d,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m($,T){k($,t,T),k($,n,T),p(n,o),p(n,l),p(n,r),p(n,i),p(n,a),p(a,c),p(n,f),p(n,d),p(n,m),N(g,n,null),b=!0},p($,[T]){(!b||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Focus action"))&&(Ir.title=e);const E={};T&1&&(E.$$scope={dirty:T,ctx:$}),g.$set(E)},i($){b||(y(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&w(t),$&&w(n),P(g)}}}let ub=class extends te{constructor(e){super(),ee(this,e,null,cb,V,{})}};const Lr=`# Action to call a function by keyboard shortcut for Svelte directive \`use\`

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
`;function fb(s){let e,t,n;return t=new En({props:{source:Lr.slice(Lr.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),h(e,"class","documentation")},m(o,l){k(o,e,l),N(t,e,null),n=!0},p:le,i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){S(t.$$.fragment,o),n=!1},d(o){o&&w(e),P(t)}}}let db=class extends te{constructor(e){super(),ee(this,e,null,fb,V,{})}};const ra={alt:"Alt",cmd:"Cmd",ctrl:"Ctrl",shift:"Shift",joinWith:" + ",hideKey:"never"};let Gs=ra;const pb=()=>({alphanumeric:/^Key([A-Z01-9])$/,alpha:/^Key([A-Z])$/,always:/^Key(.*)$/,never:/^(.*)$/})[Gs.hideKey];function mb(s){return{character:[16,17,18,91,93,224].indexOf(s.keyCode)!==-1?null:s.code.replace(pb(),"$1"),modifiers:{cmd:s.metaKey,ctrl:s.ctrlKey,alt:s.altKey,shift:s.shiftKey}}}function hb(s){const e=mb(s),n=Object.entries(e.modifiers).reduce((o,[l,r])=>(r&&o.push(Gs[l]),o),[]);return e.character&&n.push(e.character),n}function gb(s){return Gs=Object.assign(Object.assign({},ra),s)}const _b=s=>hb(s).join(Gs.joinWith);gb({joinWith:"+"});function Fo(s,e){let{event:t,capture:n=!1,passive:o=!1,preventDefault:l=!1,stopImmediatePropagation:r=!1,stopPropagation:i=!1,fns:a}=e;function c(u){const f=_b(u);typeof a[f]=="function"&&(l&&u.preventDefault(),i&&u.stopPropagation(),r&&u.stopImmediatePropagation(),a[f](u))}return s.addEventListener(t,c,{capture:n,passive:o}),{destroy(){s.removeEventListener(t,c,{capture:n})},update(u){const f=t!==u.event||n!==u.capture||o!==u.passive;f&&s.removeEventListener(t,c,{capture:n}),{event:t,capture:n=!1,passive:o=!1,preventDefault:l=!1,stopImmediatePropagation:r=!1,stopPropagation:i=!1,fns:a}=u,f&&s.addEventListener(t,c,{capture:n,passive:o})}}}function Dr(s,e,t){const n=s.slice();return n[18]=e[t],n[20]=t,n}function Br(s){let e,t=s[18]+"",n,o,l,r;function i(){return s[17](s[20])}return{c(){e=_("div"),n=j(t),o=x(),h(e,"class","beverage-item svelte-12wr8dw"),Qe(e,"active",s[20]===s[1])},m(a,c){k(a,e,c),p(e,n),p(e,o),l||(r=J(e,"click",i),l=!0)},p(a,c){s=a,c&2&&Qe(e,"active",s[20]===s[1])},d(a){a&&w(e),l=!1,r()}}}function bb(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O=s[2],I=[];for(let L=0;L<O.length;L+=1)I[L]=Br(Dr(s,O,L));return E=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var L;e=_("section"),t=_("div"),n=_("div"),n.textContent="Select a beverage",o=x(),l=_("div"),r=_("input"),c=x(),u=_("button"),u.textContent="Reset",f=x(),d=_("div"),d.innerHTML=`Use the navigation buttons
      <code>ArrowUp</code>,
      <code>ArrowDown</code>,
      <code>ArrowLeft</code>,
      <code>ArrowRight</code>,
      <code>PageUp</code>,
      <code>PageDown</code>,
      <code>Home</code>,
      <code>End</code>,
      <code>Ctrl+Home</code>,
      <code>Ctrl+End</code> to select a drink`,m=x(),g=_("div");for(let F=0;F<I.length;F+=1)I[F].c();b=x(),$=_("h3"),$.textContent="Code",T=x(),R(E.$$.fragment),h(r,"type","text"),h(r,"class","input grow"),r.readOnly=!0,r.value=i=(L=s[2][s[1]])!=null?L:"",h(u,"type","button"),h(u,"class","input"),h(l,"class","flex"),h(d,"class","block text-sm mt-1 text-gray-500"),h(t,"class","my-4"),h(g,"class","columns-3 gap-3 border-2 border-gray-200 rounded-md p-2"),h(e,"class","prose max-w-none my-4")},m(L,F){k(L,e,F),p(e,t),p(t,n),p(t,o),p(t,l),p(l,r),s[5](r),p(l,c),p(l,u),p(t,f),p(t,d),p(e,m),p(e,g);for(let z=0;z<I.length;z+=1)I[z].m(g,null);p(e,b),p(e,$),p(e,T),N(E,e,null),D=!0,C||(M=[Ve(a=Fo.call(null,r,{event:"keydown",preventDefault:!0,fns:{ArrowUp:s[6],ArrowDown:s[7],ArrowLeft:s[8],ArrowRight:s[9],PageUp:s[10],PageDown:s[11],Home:s[12],End:s[13],"Ctrl+Home":s[14],"Ctrl+End":s[15]}})),J(u,"click",s[16])],C=!0)},p(L,[F]){var z;if((!D||F&2&&i!==(i=(z=L[2][L[1]])!=null?z:"")&&r.value!==i)&&(r.value=i),a&&ut(a.update)&&F&2&&a.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:L[6],ArrowDown:L[7],ArrowLeft:L[8],ArrowRight:L[9],PageUp:L[10],PageDown:L[11],Home:L[12],End:L[13],"Ctrl+Home":L[14],"Ctrl+End":L[15]}}),F&7){O=L[2];let U;for(U=0;U<O.length;U+=1){const Z=Dr(L,O,U);I[U]?I[U].p(Z,F):(I[U]=Br(Z),I[U].c(),I[U].m(g,null))}for(;U<I.length;U+=1)I[U].d(1);I.length=O.length}},i(L){D||(y(E.$$.fragment,L),D=!0)},o(L){S(E.$$.fragment,L),D=!1},d(L){L&&w(e),s[5](null),Ye(I,L),P(E),C=!1,je(M)}}}function $b(s,e,t){const n=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asiático","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","Rüdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"],o=Math.floor(n.length/3);let l;Hn(()=>l.focus());let r=NaN;function i(M){if(isFinite(r)){let O=r+M;O<0?O=0:O>=n.length&&(O=n.length-1),t(1,r=O)}else t(1,r=0)}function a(M){Xe[M?"unshift":"push"](()=>{l=M,t(0,l)})}return[l,r,n,o,i,a,()=>i(-1),()=>i(1),()=>i(-o),()=>i(o),()=>i(-((r||0)%o)),()=>i(o-1-(r||0)%o),()=>t(1,r=(r||0)%o),()=>t(1,r=n.length-(o-(r||0)%o)),()=>t(1,r=0),()=>t(1,r=n.length-1),()=>{t(1,r=NaN),l.focus()},M=>{t(1,r=M),l.focus()}]}class vb extends te{constructor(e){super(),ee(this,e,$b,bb,V,{})}}const{document:Fr}=un;function wb(s){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function kb(s){let e;return{c(){e=j("Navigation demo")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function yb(s){let e,t,n,o;return e=new ke({props:{$$slots:{default:[wb]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[kb]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment)},m(l,r){N(e,l,r),k(l,t,r),N(n,l,r),o=!0},p(l,r){const i={};r&1&&(i.$$scope={dirty:r,ctx:l}),e.$set(i);const a={};r&1&&(a.$$scope={dirty:r,ctx:l}),n.$set(a)},i(l){o||(y(e.$$.fragment,l),y(n.$$.fragment,l),o=!0)},o(l){S(e.$$.fragment,l),S(n.$$.fragment,l),o=!1},d(l){P(e,l),l&&w(t),P(n,l)}}}function Tb(s){let e,t;return e=new db({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function xb(s){let e,t;return e=new vb({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Sb(s){let e,t,n,o,l,r;return e=new Tt({props:{$$slots:{default:[yb]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[Tb]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[xb]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment)},m(i,a){N(e,i,a),k(i,t,a),N(n,i,a),k(i,o,a),N(l,i,a),r=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(y(e.$$.fragment,i),y(n.$$.fragment,i),y(l.$$.fragment,i),r=!0)},o(i){S(e.$$.fragment,i),S(n.$$.fragment,i),S(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&w(t),P(n,i),i&&w(o),P(l,i)}}}function Eb(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b;return Fr.title=e=document.title.replace(/(•).*$/,"$1 Keyboard shortcut action"),g=new yt({props:{mode:"remove",$$slots:{default:[Sb]},$$scope:{ctx:s}}}),{c(){t=x(),n=_("section"),o=_("a"),o.textContent="Home",l=x(),r=_("h1"),r.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",i=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>allows to reduce keyboard event handling code</li> 
    <li>dependence <a href="https://www.npmjs.com/package/keyboard-event-to-string" target="_blank" rel="noreferrer">keyboard-event-to-string</a></li>`,m=x(),R(g.$$.fragment),h(o,"class","float-right"),h(o,"href","/"),h(r,"class","text-2xl"),h(c,"class","max-w-[4em]"),ct(c.src,u=gt)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),h(a,"target","_blank"),h(a,"rel","noreferrer"),h(d,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m($,T){k($,t,T),k($,n,T),p(n,o),p(n,l),p(n,r),p(n,i),p(n,a),p(a,c),p(n,f),p(n,d),p(n,m),N(g,n,null),b=!0},p($,[T]){(!b||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Keyboard shortcut action"))&&(Fr.title=e);const E={};T&1&&(E.$$scope={dirty:T,ctx:$}),g.$set(E)},i($){b||(y(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&w(t),$&&w(n),P(g)}}}let Ab=class extends te{constructor(e){super(),ee(this,e,null,Eb,V,{})}};const zr=`# Action to scroll the child to parent viewport Svelte directive \`use\`

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
`;function Cb(s){let e,t,n;return t=new En({props:{source:zr.slice(zr.search(/^[#\s]+API$/im)+1)}}),{c(){e=_("section"),R(t.$$.fragment),h(e,"class","documentation")},m(o,l){k(o,e,l),N(t,e,null),n=!0},p:le,i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){S(t.$$.fragment,o),n=!1},d(o){o&&w(e),P(t)}}}class Nb extends te{constructor(e){super(),ee(this,e,null,Cb,V,{})}}function Hr(s){const e=s.parentElement;if(e&&e.scrollHeight>e.offsetHeight){const t=getComputedStyle(e),n=parseInt(t.paddingTop)||0,o=parseInt(t.paddingBottom)||0,l=e.offsetTop+n,r=e.offsetTop+e.offsetHeight-o,i=s.offsetTop-e.scrollTop,a=s.offsetTop+s.offsetHeight-e.scrollTop;return a>r?(e.scrollTop+=a-r,!0):i<l?(e.scrollTop-=l-i,!0):!1}else return!1}function jr(s){const e=s.parentElement;if(e&&e.scrollWidth>e.offsetWidth){const t=getComputedStyle(e),n=parseInt(t.paddingLeft)||0,o=parseInt(t.paddingRight)||0,l=e.offsetLeft+n,r=e.offsetLeft+e.offsetWidth-o,i=s.offsetLeft-e.scrollLeft,a=s.offsetLeft+s.offsetWidth-e.scrollLeft;return a>r?(e.scrollLeft+=a-r,!0):i<l?(e.scrollLeft-=l-i,!0):!1}else return!1}function ia(s,e){function t(n){n===!0?(Hr(s),jr(s)):typeof n=="object"&&(n.x&&jr(s),n.y&&Hr(s))}return t(e),{update(n){t(n)}}}const bt=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asiático","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","Rüdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"];function Ur(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function Kr(s){let e,t=s[10]+"",n,o,l,r,i;function a(){return s[9](s[12])}return{c(){e=_("div"),n=j(t),o=x(),h(e,"class","beverage-item svelte-18rp3xo"),Qe(e,"active",s[12]===s[1])},m(c,u){k(c,e,u),p(e,n),p(e,o),r||(i=[Ve(l=ia.call(null,e,s[1]===s[12]?{y:!0}:!1)),J(e,"click",a)],r=!0)},p(c,u){s=c,l&&ut(l.update)&&u&2&&l.update.call(null,s[1]===s[12]?{y:!0}:!1),u&2&&Qe(e,"active",s[12]===s[1])},d(c){c&&w(e),r=!1,je(i)}}}function Pb(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O,I,L=bt,F=[];for(let z=0;z<L.length;z+=1)F[z]=Kr(Ur(s,L,z));return C=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var z;e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=x(),o=_("div"),l=_("div"),l.textContent="Select a beverage",r=x(),i=_("div"),i.innerHTML=`use the navigation buttons
      <code>ArrowUp</code>,
      <code>ArrowDown</code>,
      <code>Home</code>,
      <code>End</code> to select a drink`,a=x(),c=_("div"),u=_("input"),m=x(),g=_("button"),g.textContent="Reset",b=x(),$=_("div");for(let U=0;U<F.length;U+=1)F[U].c();T=x(),E=_("h3"),E.textContent="Code",D=x(),R(C.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(i,"class","text-sm leading-4 text-gray-500"),h(u,"type","text"),h(u,"class","input grow"),u.readOnly=!0,u.value=f=(z=bt[s[1]])!=null?z:"",h(g,"type","button"),h(g,"class","input ml-2"),h(c,"class","mt-2 flex"),h($,"class","border-2 border-gray-200 rounded-md p-2 mt-2 w-48 max-h-[15.25rem] overflow-y-auto shadow-md scroll-smooth"),h(o,"class","my-2 mx-auto w-96"),h(e,"class","prose max-w-none my-4")},m(z,U){k(z,e,U),p(e,t),p(e,n),p(e,o),p(o,l),p(o,r),p(o,i),p(o,a),p(o,c),p(c,u),s[3](u),p(c,m),p(c,g),p(o,b),p(o,$);for(let Z=0;Z<F.length;Z+=1)F[Z].m($,null);p(e,T),p(e,E),p(e,D),N(C,e,null),M=!0,O||(I=[Ve(d=Fo.call(null,u,{event:"keydown",preventDefault:!0,fns:{ArrowUp:s[4],ArrowDown:s[5],Home:s[6],End:s[7]}})),J(g,"click",s[8])],O=!0)},p(z,[U]){var Z;if((!M||U&2&&f!==(f=(Z=bt[z[1]])!=null?Z:"")&&u.value!==f)&&(u.value=f),d&&ut(d.update)&&U&2&&d.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:z[4],ArrowDown:z[5],Home:z[6],End:z[7]}}),U&3){L=bt;let Y;for(Y=0;Y<L.length;Y+=1){const re=Ur(z,L,Y);F[Y]?F[Y].p(re,U):(F[Y]=Kr(re),F[Y].c(),F[Y].m($,null))}for(;Y<F.length;Y+=1)F[Y].d(1);F.length=L.length}},i(z){M||(y(C.$$.fragment,z),M=!0)},o(z){S(C.$$.fragment,z),M=!1},d(z){z&&w(e),s[3](null),Ye(F,z),P(C),O=!1,je(I)}}}function Rb(s,e,t){let n;Hn(()=>n.focus());let o=NaN;function l(m){if(isFinite(o)){let g=o+m;g<0?g=0:g>=bt.length&&(g=bt.length-1),t(1,o=g)}else t(1,o=0)}function r(m){Xe[m?"unshift":"push"](()=>{n=m,t(0,n)})}return[n,o,l,r,()=>l(-1),()=>l(1),()=>t(1,o=0),()=>t(1,o=bt.length-1),()=>{t(1,o=NaN),n.focus()},m=>{t(1,o=m),n.focus()}]}class Mb extends te{constructor(e){super(),ee(this,e,Rb,Pb,V,{})}}function qr(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function Wr(s){let e,t=s[10]+"",n,o,l,r,i;function a(){return s[9](s[12])}return{c(){e=_("div"),n=j(t),o=x(),h(e,"class","beverage-item svelte-2m30if"),Qe(e,"active",s[12]===s[1])},m(c,u){k(c,e,u),p(e,n),p(e,o),r||(i=[Ve(l=ia.call(null,e,s[1]===s[12]?{x:!0}:!1)),J(e,"click",a)],r=!0)},p(c,u){s=c,l&&ut(l.update)&&u&2&&l.update.call(null,s[1]===s[12]?{x:!0}:!1),u&2&&Qe(e,"active",s[12]===s[1])},d(c){c&&w(e),r=!1,je(i)}}}function Ob(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b,$,T,E,D,C,M,O,I,L,F=bt,z=[];for(let U=0;U<F.length;U+=1)z[U]=Wr(qr(s,F,U));return M=new dt({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var U;e=_("section"),t=_("div"),t.innerHTML='This example uses <a href="/keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=x(),o=_("div"),l=_("div"),r=_("div"),r.textContent="Select a beverage",i=x(),a=_("div"),a.innerHTML=`use the navigation buttons
        <code>ArrowLeft</code>,
        <code>ArrowRight</code>,
        <code>Home</code>,
        <code>End</code> to select a drink`,c=x(),u=_("div"),f=_("input"),g=x(),b=_("button"),b.textContent="Reset",$=x(),T=_("div");for(let Z=0;Z<z.length;Z+=1)z[Z].c();E=x(),D=_("h3"),D.textContent="Code",C=x(),R(M.$$.fragment),h(t,"class","w-fit mx-auto mb-4"),h(a,"class","text-sm leading-4 text-gray-500"),h(f,"type","text"),h(f,"class","input grow"),f.readOnly=!0,f.value=d=(U=bt[s[1]])!=null?U:"",h(b,"type","button"),h(b,"class","input ml-2"),h(u,"class","mt-2 flex"),h(l,"class","mx-auto w-96"),h(T,"class","border-2 border-gray-200 rounded-md p-2 mt-2 whitespace-nowrap max-w-full overflow-x-auto shadow-md scroll-smooth"),h(o,"class","my-2"),h(e,"class","prose max-w-none my-4")},m(U,Z){k(U,e,Z),p(e,t),p(e,n),p(e,o),p(o,l),p(l,r),p(l,i),p(l,a),p(l,c),p(l,u),p(u,f),s[3](f),p(u,g),p(u,b),p(o,$),p(o,T);for(let Y=0;Y<z.length;Y+=1)z[Y].m(T,null);p(e,E),p(e,D),p(e,C),N(M,e,null),O=!0,I||(L=[Ve(m=Fo.call(null,f,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:s[4],ArrowRight:s[5],Home:s[6],End:s[7]}})),J(b,"click",s[8])],I=!0)},p(U,[Z]){var Y;if((!O||Z&2&&d!==(d=(Y=bt[U[1]])!=null?Y:"")&&f.value!==d)&&(f.value=d),m&&ut(m.update)&&Z&2&&m.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:U[4],ArrowRight:U[5],Home:U[6],End:U[7]}}),Z&3){F=bt;let re;for(re=0;re<F.length;re+=1){const oe=qr(U,F,re);z[re]?z[re].p(oe,Z):(z[re]=Wr(oe),z[re].c(),z[re].m(T,null))}for(;re<z.length;re+=1)z[re].d(1);z.length=F.length}},i(U){O||(y(M.$$.fragment,U),O=!0)},o(U){S(M.$$.fragment,U),O=!1},d(U){U&&w(e),s[3](null),Ye(z,U),P(M),I=!1,je(L)}}}function Ib(s,e,t){let n;Hn(()=>n.focus());let o=NaN;function l(m){if(isFinite(o)){let g=o+m;g<0?g=0:g>=bt.length&&(g=bt.length-1),t(1,o=g)}else t(1,o=0)}function r(m){Xe[m?"unshift":"push"](()=>{n=m,t(0,n)})}return[n,o,l,r,()=>l(-1),()=>l(1),()=>t(1,o=0),()=>t(1,o=bt.length-1),()=>{t(1,o=NaN),n.focus()},m=>{t(1,o=m),n.focus()}]}class Lb extends te{constructor(e){super(),ee(this,e,Ib,Ob,V,{})}}const{document:Gr}=un;function Db(s){let e;return{c(){e=j("API")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Bb(s){let e;return{c(){e=j("Vertical demo")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Fb(s){let e;return{c(){e=j("Horizontal demo")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function zb(s){let e,t,n,o,l,r;return e=new ke({props:{$$slots:{default:[Db]},$$scope:{ctx:s}}}),n=new ke({props:{$$slots:{default:[Bb]},$$scope:{ctx:s}}}),l=new ke({props:{$$slots:{default:[Fb]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment)},m(i,a){N(e,i,a),k(i,t,a),N(n,i,a),k(i,o,a),N(l,i,a),r=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(y(e.$$.fragment,i),y(n.$$.fragment,i),y(l.$$.fragment,i),r=!0)},o(i){S(e.$$.fragment,i),S(n.$$.fragment,i),S(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&w(t),P(n,i),i&&w(o),P(l,i)}}}function Hb(s){let e,t;return e=new Nb({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function jb(s){let e,t;return e=new Mb({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Ub(s){let e,t;return e=new Lb({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Kb(s){let e,t,n,o,l,r,i,a;return e=new Tt({props:{$$slots:{default:[zb]},$$scope:{ctx:s}}}),n=new we({props:{$$slots:{default:[Hb]},$$scope:{ctx:s}}}),l=new we({props:{$$slots:{default:[jb]},$$scope:{ctx:s}}}),i=new we({props:{$$slots:{default:[Ub]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),t=x(),R(n.$$.fragment),o=x(),R(l.$$.fragment),r=x(),R(i.$$.fragment)},m(c,u){N(e,c,u),k(c,t,u),N(n,c,u),k(c,o,u),N(l,c,u),k(c,r,u),N(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),l.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),i.$set(g)},i(c){a||(y(e.$$.fragment,c),y(n.$$.fragment,c),y(l.$$.fragment,c),y(i.$$.fragment,c),a=!0)},o(c){S(e.$$.fragment,c),S(n.$$.fragment,c),S(l.$$.fragment,c),S(i.$$.fragment,c),a=!1},d(c){P(e,c),c&&w(t),P(n,c),c&&w(o),P(l,c),c&&w(r),P(i,c)}}}function qb(s){let e,t,n,o,l,r,i,a,c,u,f,d,m,g,b;return Gr.title=e=document.title.replace(/(•).*$/,"$1 Scroll child action"),g=new yt({props:{mode:"remove",$$slots:{default:[Kb]},$$scope:{ctx:s}}}),{c(){t=x(),n=_("section"),o=_("a"),o.textContent="Home",l=x(),r=_("h1"),r.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",i=x(),a=_("a"),c=_("img"),f=x(),d=_("ul"),d.innerHTML=`<li>no dependencies</li> 
    <li>useful for components like dropdown</li> 
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>`,m=x(),R(g.$$.fragment),h(o,"class","float-right"),h(o,"href","/"),h(r,"class","text-2xl"),h(c,"class","max-w-[4em]"),ct(c.src,u=gt)||h(c,"src",u),h(c,"alt","NPM logo"),h(a,"class","float-right"),h(a,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),h(a,"target","_blank"),h(a,"rel","noreferrer"),h(d,"class","leading-6 mb-8"),h(n,"class","prose max-w-none my-4")},m($,T){k($,t,T),k($,n,T),p(n,o),p(n,l),p(n,r),p(n,i),p(n,a),p(a,c),p(n,f),p(n,d),p(n,m),N(g,n,null),b=!0},p($,[T]){(!b||T&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Scroll child action"))&&(Gr.title=e);const E={};T&1&&(E.$$scope={dirty:T,ctx:$}),g.$set(E)},i($){b||(y(g.$$.fragment,$),b=!0)},o($){S(g.$$.fragment,$),b=!1},d($){$&&w(t),$&&w(n),P(g)}}}class Wb extends te{constructor(e){super(),ee(this,e,null,qb,V,{})}}function Gb(s){let e;return{c(){e=_("h1"),e.textContent="Not found",h(e,"class","font-bold my-4 pb-2 text-3xl text-center")},m(t,n){k(t,e,n)},i:le,o:le,d(t){t&&w(e)}}}function Zb(s){let e,t;return e=new Wb({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Xb(s){let e,t;return e=new Ab({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Qb(s){let e,t;return e=new ub({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Yb(s){let e,t;return e=new D_({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Jb(s){let e,t;return e=new $_({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Vb(s){let e,t;return e=new Nh({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function e$(s){let e,t;return e=new lh({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function t$(s){let e,t;return e=new Jc({}),{c(){R(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function n$(s){let e,t,n,o,l,r;const i=[t$,e$,Vb,Jb,Yb,Qb,Xb,Zb,Gb],a=[];function c(u,f){return f&1&&(n=null),n==null&&(n=u[0].toString()===""),n?0:u[0].params.c==="tabs"?1:u[0].params.c==="glob-notify"?2:u[0].params.c==="color"?3:u[0].params.c==="floating-ui-action"?4:u[0].params.c==="focus-action"?5:u[0].params.c==="keyboard-shortcut-action"?6:u[0].params.c==="scroll-child-action"?7:8}return o=c(s,-1),l=a[o]=i[o](s),{c(){e=x(),t=_("main"),l.c(),document.title="APSC • Home"},m(u,f){k(u,e,f),k(u,t,f),a[o].m(t,null),r=!0},p(u,[f]){let d=o;o=c(u,f),o!==d&&(ye(),S(a[d],1,1,()=>{a[d]=null}),Te(),l=a[o],l||(l=a[o]=i[o](u),l.c()),y(l,1),l.m(t,null))},i(u){r||(y(l),r=!0)},o(u){S(l),r=!1},d(u){u&&w(e),u&&w(t),a[o].d()}}}function s$(s,e,t){let n;return vn(s,xo,o=>t(0,n=o)),[n]}class o$ extends te{constructor(e){super(),ee(this,e,s$,n$,V,{})}}new o$({target:document.getElementById("app")});
