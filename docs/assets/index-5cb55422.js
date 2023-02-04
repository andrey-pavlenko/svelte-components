var zc=Object.defineProperty,Hc=Object.defineProperties;var Fc=Object.getOwnPropertyDescriptors;var ps=Object.getOwnPropertySymbols;var sl=Object.prototype.hasOwnProperty,ol=Object.prototype.propertyIsEnumerable;var oo=(s,e,t)=>e in s?zc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Xe=(s,e)=>{for(var t in e||(e={}))sl.call(e,t)&&oo(s,t,e[t]);if(ps)for(var t of ps(e))ol.call(e,t)&&oo(s,t,e[t]);return s},vn=(s,e)=>Hc(s,Fc(e));var lo=(s,e)=>{var t={};for(var n in s)sl.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&ps)for(var n of ps(s))e.indexOf(n)<0&&ol.call(s,n)&&(t[n]=s[n]);return t};var Bt=(s,e,t)=>(oo(s,typeof e!="symbol"?e+"":e,t),t);var ct=(s,e,t)=>new Promise((n,o)=>{var l=a=>{try{i(t.next(a))}catch(c){o(c)}},r=a=>{try{i(t.throw(a))}catch(c){o(c)}},i=a=>a.done?n(a.value):Promise.resolve(a.value).then(l,r);i((t=t.apply(s,e)).next())});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function q(){}const ui=s=>s;function _t(s,e){for(const t in e)s[t]=e[t];return s}function jc(s){return!!s&&(typeof s=="object"||typeof s=="function")&&typeof s.then=="function"}function fi(s){return s()}function ll(){return Object.create(null)}function ye(s){s.forEach(fi)}function Re(s){return typeof s=="function"}function j(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}let hs;function Cn(s,e){return hs||(hs=document.createElement("a")),hs.href=e,s===hs.href}function Uc(s){return Object.keys(s).length===0}function di(s,...e){if(s==null)return q;const t=s.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ft(s,e,t){s.$$.on_destroy.push(di(e,t))}function Se(s,e,t,n){if(s){const o=pi(s,e,t,n);return s[0](o)}}function pi(s,e,t,n){return s[1]&&n?_t(t.ctx.slice(),s[1](n(e))):t.ctx}function xe(s,e,t,n){if(s[2]&&n){const o=s[2](n(t));if(e.dirty===void 0)return o;if(typeof o=="object"){const l=[],r=Math.max(e.dirty.length,o.length);for(let i=0;i<r;i+=1)l[i]=e.dirty[i]|o[i];return l}return e.dirty|o}return e.dirty}function Ae(s,e,t,n,o,l){if(o){const r=pi(e,t,n,l);s.p(r,o)}}function Ce(s){if(s.ctx.length>32){const e=[],t=s.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function hi(s){const e={};for(const t in s)t[0]!=="$"&&(e[t]=s[t]);return e}function Ts(s,e){const t={};e=new Set(e);for(const n in s)!e.has(n)&&n[0]!=="$"&&(t[n]=s[n]);return t}function qc(s,e,t){return s.set(t),e}function Ke(s){return s&&Re(s.destroy)?s.destroy:q}const mi=typeof window!="undefined";let Kc=mi?()=>window.performance.now():()=>Date.now(),wo=mi?s=>requestAnimationFrame(s):q;const Sn=new Set;function gi(s){Sn.forEach(e=>{e.c(s)||(Sn.delete(e),e.f())}),Sn.size!==0&&wo(gi)}function Wc(s){let e;return Sn.size===0&&wo(gi),{promise:new Promise(t=>{Sn.add(e={c:s,f:t})}),abort(){Sn.delete(e)}}}function h(s,e){s.appendChild(e)}function _i(s){if(!s)return document;const e=s.getRootNode?s.getRootNode():s.ownerDocument;return e&&e.host?e:s.ownerDocument}function Gc(s){const e=g("style");return Zc(_i(s),e),e.sheet}function Zc(s,e){return h(s.head||s,e),e.sheet}function S(s,e,t){s.insertBefore(e,t||null)}function E(s){s.parentNode&&s.parentNode.removeChild(s)}function Le(s,e){for(let t=0;t<s.length;t+=1)s[t]&&s[t].d(e)}function g(s){return document.createElement(s)}function Qc(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function H(s){return document.createTextNode(s)}function C(){return H(" ")}function Te(){return H("")}function Z(s,e,t,n){return s.addEventListener(e,t,n),()=>s.removeEventListener(e,t,n)}function Un(s){return function(e){return e.preventDefault(),s.call(this,e)}}function m(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function rl(s,e){const t=Object.getOwnPropertyDescriptors(s.__proto__);for(const n in e)e[n]==null?s.removeAttribute(n):n==="style"?s.style.cssText=e[n]:n==="__value"?s.value=s[n]=e[n]:t[n]&&t[n].set?s[n]=e[n]:m(s,n,e[n])}function tt(s){return s===""?null:+s}function Xc(s){return Array.from(s.childNodes)}function Ze(s,e){e=""+e,s.wholeText!==e&&(s.data=e)}function Ge(s,e){s.value=e==null?"":e}function Je(s,e,t,n){t===null?s.style.removeProperty(e):s.style.setProperty(e,t,n?"important":"")}function St(s,e){for(let t=0;t<s.options.length;t+=1){const n=s.options[t];if(n.__value===e){n.selected=!0;return}}s.selectedIndex=-1}function qn(s){const e=s.querySelector(":checked")||s.options[0];return e&&e.__value}function le(s,e,t){s.classList[t?"add":"remove"](e)}function bi(s,e,{bubbles:t=!1,cancelable:n=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(s,t,n,e),o}class $i{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=Qc(t.nodeName):this.e=g(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)S(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}function ze(s,e){return new s(e)}const Es=new Map;let Ss=0;function Jc(s){let e=5381,t=s.length;for(;t--;)e=(e<<5)-e^s.charCodeAt(t);return e>>>0}function Yc(s,e){const t={stylesheet:Gc(e),rules:{}};return Es.set(s,t),t}function il(s,e,t,n,o,l,r,i=0){const a=16.666/n;let c=`{
`;for(let A=0;A<=1;A+=a){const w=e+(t-e)*l(A);c+=A*100+`%{${r(w,1-w)}}
`}const u=c+`100% {${r(t,1-t)}}
}`,f=`__svelte_${Jc(u)}_${i}`,d=_i(s),{stylesheet:p,rules:_}=Es.get(d)||Yc(d,s);_[f]||(_[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const k=s.style.animation||"";return s.style.animation=`${k?`${k}, `:""}${f} ${n}ms linear ${o}ms 1 both`,Ss+=1,f}function Vc(s,e){const t=(s.style.animation||"").split(", "),n=t.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),o=t.length-n.length;o&&(s.style.animation=n.join(", "),Ss-=o,Ss||eu())}function eu(){wo(()=>{Ss||(Es.forEach(s=>{const{ownerNode:e}=s.stylesheet;e&&E(e)}),Es.clear())})}let Kn;function zt(s){Kn=s}function rn(){if(!Kn)throw new Error("Function called outside component initialization");return Kn}function an(s){rn().$$.on_mount.push(s)}function tu(s){rn().$$.after_update.push(s)}function Ls(s){rn().$$.on_destroy.push(s)}function ko(){const s=rn();return(e,t,{cancelable:n=!1}={})=>{const o=s.$$.callbacks[e];if(o){const l=bi(e,t,{cancelable:n});return o.slice().forEach(r=>{r.call(s,l)}),!l.defaultPrevented}return!0}}function vi(s,e){return rn().$$.context.set(s,e),e}function Ds(s){return rn().$$.context.get(s)}const En=[],Fe=[],$s=[],mo=[],wi=Promise.resolve();let go=!1;function ki(){go||(go=!0,wi.then(To))}function yo(){return ki(),wi}function pt(s){$s.push(s)}function kt(s){mo.push(s)}const ro=new Set;let wn=0;function To(){if(wn!==0)return;const s=Kn;do{try{for(;wn<En.length;){const e=En[wn];wn++,zt(e),nu(e.$$)}}catch(e){throw En.length=0,wn=0,e}for(zt(null),En.length=0,wn=0;Fe.length;)Fe.pop()();for(let e=0;e<$s.length;e+=1){const t=$s[e];ro.has(t)||(ro.add(t),t())}$s.length=0}while(En.length);for(;mo.length;)mo.pop()();go=!1,ro.clear(),zt(s)}function nu(s){if(s.fragment!==null){s.update(),ye(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(pt)}}let zn;function su(){return zn||(zn=Promise.resolve(),zn.then(()=>{zn=null})),zn}function io(s,e,t){s.dispatchEvent(bi(`${e?"intro":"outro"}${t}`))}const vs=new Set;let Ht;function de(){Ht={r:0,c:[],p:Ht}}function pe(){Ht.r||ye(Ht.c),Ht=Ht.p}function v(s,e){s&&s.i&&(vs.delete(s),s.i(e))}function T(s,e,t,n){if(s&&s.o){if(vs.has(s))return;vs.add(s),Ht.c.push(()=>{vs.delete(s),n&&(t&&s.d(1),n())}),s.o(e)}else n&&n()}const ou={duration:0};function Xt(s,e,t,n){const o={direction:"both"};let l=e(s,t,o),r=n?0:1,i=null,a=null,c=null;function u(){c&&Vc(s,c)}function f(p,_){const k=p.b-r;return _*=Math.abs(k),{a:r,b:p.b,d:k,duration:_,start:p.start,end:p.start+_,group:p.group}}function d(p){const{delay:_=0,duration:k=300,easing:A=ui,tick:w=q,css:$}=l||ou,x={start:Kc()+_,b:p};p||(x.group=Ht,Ht.r+=1),i||a?a=x:($&&(u(),c=il(s,r,p,k,_,A,$)),p&&w(0,1),i=f(x,k),pt(()=>io(s,p,"start")),Wc(R=>{if(a&&R>a.start&&(i=f(a,k),a=null,io(s,i.b,"start"),$&&(u(),c=il(s,r,i.b,i.duration,0,A,l.css))),i){if(R>=i.end)w(r=i.b,1-r),io(s,i.b,"end"),a||(i.b?u():--i.group.r||ye(i.group.c)),i=null;else if(R>=i.start){const N=R-i.start;r=i.a+i.d*A(N/i.duration),w(r,1-r)}}return!!(i||a)}))}return{run(p){Re(l)?su().then(()=>{l=l(o),d(p)}):d(p)},end(){u(),i=a=null}}}function xs(s,e){const t=e.token={};function n(o,l,r,i){if(e.token!==t)return;e.resolved=i;let a=e.ctx;r!==void 0&&(a=a.slice(),a[r]=i);const c=o&&(e.current=o)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==l&&f&&(de(),T(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),pe())}):e.block.d(1),c.c(),v(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[l]=c),u&&To()}if(jc(s)){const o=rn();if(s.then(l=>{zt(o),n(e.then,1,e.value,l),zt(null)},l=>{if(zt(o),n(e.catch,2,e.error,l),zt(null),!e.hasCatch)throw l}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,s),!0;e.resolved=s}}function yi(s,e,t){const n=e.slice(),{resolved:o}=s;s.current===s.then&&(n[s.value]=o),s.current===s.catch&&(n[s.error]=o),s.block.p(n,t)}function lu(s,e){T(s,1,1,()=>{e.delete(s.key)})}function ru(s,e,t,n,o,l,r,i,a,c,u,f){let d=s.length,p=l.length,_=d;const k={};for(;_--;)k[s[_].key]=_;const A=[],w=new Map,$=new Map;for(_=p;_--;){const y=f(o,l,_),D=t(y);let B=r.get(D);B?n&&B.p(y,e):(B=c(D,y),B.c()),w.set(D,A[_]=B),D in k&&$.set(D,Math.abs(_-k[D]))}const x=new Set,R=new Set;function N(y){v(y,1),y.m(i,u),r.set(y.key,y),u=y.first,p--}for(;d&&p;){const y=A[p-1],D=s[d-1],B=y.key,G=D.key;y===D?(u=y.first,d--,p--):w.has(G)?!r.has(B)||x.has(B)?N(y):R.has(G)?d--:$.get(B)>$.get(G)?(R.add(B),N(y)):(x.add(G),d--):(a(D,r),d--)}for(;d--;){const y=s[d];w.has(y.key)||a(y,r)}for(;p;)N(A[p-1]);return A}function cn(s,e){const t={},n={},o={$$scope:1};let l=s.length;for(;l--;){const r=s[l],i=e[l];if(i){for(const a in r)a in i||(n[a]=1);for(const a in i)o[a]||(t[a]=i[a],o[a]=1);s[l]=i}else for(const a in r)o[a]=1}for(const r in n)r in t||(t[r]=void 0);return t}function Rn(s){return typeof s=="object"&&s!==null?s:{}}function bt(s,e,t){const n=s.$$.props[e];n!==void 0&&(s.$$.bound[n]=t,t(s.$$.ctx[n]))}function L(s){s&&s.c()}function O(s,e,t,n){const{fragment:o,after_update:l}=s.$$;o&&o.m(e,t),n||pt(()=>{const r=s.$$.on_mount.map(fi).filter(Re);s.$$.on_destroy?s.$$.on_destroy.push(...r):ye(r),s.$$.on_mount=[]}),l.forEach(pt)}function P(s,e){const t=s.$$;t.fragment!==null&&(ye(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function iu(s,e){s.$$.dirty[0]===-1&&(En.push(s),ki(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function K(s,e,t,n,o,l,r,i=[-1]){const a=Kn;zt(s);const c=s.$$={fragment:null,ctx:[],props:l,update:q,not_equal:o,bound:ll(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ll(),dirty:i,skip_bound:!1,root:e.target||a.$$.root};r&&r(c.root);let u=!1;if(c.ctx=t?t(s,e.props||{},(f,d,...p)=>{const _=p.length?p[0]:d;return c.ctx&&o(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),u&&iu(s,f)),d}):[],c.update(),u=!0,ye(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Xc(e.target);c.fragment&&c.fragment.l(f),f.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&v(s.$$.fragment),O(s,e.target,e.anchor,e.customElement),To()}zt(a)}class W{$destroy(){P(this,1),this.$destroy=q}$on(e,t){if(!Re(t))return q;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const o=n.indexOf(t);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!Uc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const kn=[];function _o(s,e){return{subscribe:Vn(s,e).subscribe}}function Vn(s,e=q){let t;const n=new Set;function o(i){if(j(s,i)&&(s=i,t)){const a=!kn.length;for(const c of n)c[1](),kn.push(c,s);if(a){for(let c=0;c<kn.length;c+=2)kn[c][0](kn[c+1]);kn.length=0}}}function l(i){o(i(s))}function r(i,a=q){const c=[i,a];return n.add(c),n.size===1&&(t=e(o)||q),i(s),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:o,update:l,subscribe:r}}function Ti(s,e,t){const n=!Array.isArray(s),o=n?[s]:s,l=e.length<2;return _o(t,r=>{let i=!1;const a=[];let c=0,u=q;const f=()=>{if(c)return;u();const p=e(n?a[0]:a,r);l?r(p):u=Re(p)?p:q},d=o.map((p,_)=>di(p,k=>{a[_]=k,c&=~(1<<_),i&&f()},()=>{c|=1<<_}));return i=!0,f(),function(){ye(d),u()}})}const Is=typeof location!="undefined",Ei=typeof history!="undefined",au=Ei&&typeof history.pushState=="function",Si=typeof window!="undefined",cu=Si&&window!==window.parent,uu=Is&&(location.protocol==="file:"||/[-_\w]+[.][\w]+$/i.test(location.pathname)),As=Si&&Ei&&Is&&!cu,es=!au||uu,Eo="#!",xn={array:{separator:",",format:"bracket"},convertTypes:!0,hashbang:!1,basePath:"",nesting:3,sideEffect:As};function fu(){const s=So().pathname;if(!s)return"";const e=xo(),t=ws(s,e);return xi(t)}function So(){if(!Is)return{};if(es){const s=location.hash;return new URL(s.indexOf(Eo)===0?s.substring(2):s.substring(1),"file:")}return location}function xo(){return Is&&es?location.pathname:"/"}function du(s){es&&(s=Eo+s);const e=xo();return(e[e.length-1]==="/"?e.substring(0,e.length-1):e)+s}function pu(s){s=ws(s,location.origin);const e=xo();return s=ws(s,e),es&&(s=ws(s,Eo)),xi(s)}function hu(s,e,t){const{pattern:n,keys:o}=_u(e,t),l=n.exec(s);return l?o.reduce((r,i,a)=>(r[i]=Wn(l[++a])||null,r),{}):null}function mu(s=""){return s?s.replace("?","").replace(/\+/g," ").split("&").filter(Boolean).reduce((e,t)=>{let[n,o]=t.split(/=(.*)/,2);n=decodeURIComponent(n||""),o=decodeURIComponent(o||"");let l=Ai(n,o);return e=Object.keys(l).reduce((r,i)=>{const a=Wn(l[i]);return r[i]?Array.isArray(r[i])?r[i]=r[i].concat(a):Object.assign(r[i],a):r[i]=a,r},e),e},{}):{}}function gu(s={}){const e=Object.keys(s).reduce((t,n)=>{if(s.hasOwnProperty(n)&&isNaN(parseInt(n,10)))if(Array.isArray(s[n]))s[n].forEach(o=>t.push(n+"[]="+encodeURIComponent(o)));else if(typeof s[n]=="object"&&s[n]!==null){let o=Ai(n,s[n]);t.push(Ci(o))}else t.push(n+"="+encodeURIComponent(s[n]));return t},[]).join("&");return e?`?${e}`:""}function xi(s){return s[0]!=="/"?"/"+s:s}function ws(s,e){return s.indexOf(e)===0?s.substring(e.length):s}function _u(s,e=!1){let t=s.split("/"),n=[],o="",l,r,i,a;for(t[0]||t.shift();i=t.shift();)l=i[0],l==="*"?(n.push("wild"),o+="/(.*)"):l===":"?(r=i.indexOf("?",1),a=i.indexOf(".",1),n.push(i.substring(1,~r?r:~a?a:i.length)),o+=~r&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(o+=(~r?"?":"")+"\\"+i.substring(a))):o+="/"+i;return{keys:n,pattern:new RegExp("^"+o+(e?"(?:$|/)":"/?$"),"i")}}function Wn(s){return Array.isArray(s)?(s[s.length-1]=Wn(s[s.length-1]),s):typeof s=="object"?Object.entries(s).reduce((e,[t,n])=>(e[t]=Wn(n),e),{}):s==="true"||s==="false"?s==="true":s==="null"?null:s==="undefined"?void 0:s!==""&&!isNaN(Number(s))&&Number(s).toString()===s?Number(s):s}function Ai(s,e){const t=/(\[[^[\]]*])/,n=/(\[[^[\]]*])/g;let o=t.exec(s),l=o?s.slice(0,o.index):s,r=[];l&&r.push(l);let i=0;for(;(o=n.exec(s))&&i<xn.nesting;)i++,r.push(o[1]);return o&&r.push("["+s.slice(o.index)+"]"),bu(r,e)}function bu(s,e){let t=e;for(let n=s.length-1;n>=0;--n){let o=s[n],l;if(o==="[]")l=[].concat(t);else{l={};const r=o.charAt(0)==="["&&o.charAt(o.length-1)==="]"?o.slice(1,-1):o,i=parseInt(r,10);!isNaN(i)&&o!==r&&String(i)===r&&i>=0?(l=[],l[i]=Wn(t)):l[r]=t}t=l}return t}function Ci(s={},e=""){return Object.entries(s).map(([t,n])=>typeof n=="object"?Ci(n,e?e+`[${t}]`:t):[e+`[${t}]`,n].join("=")).join("&")}const $u=Ni(s=>typeof s=="string"?new String(s):s),vu=Ni(s=>(typeof s!="string"&&(s=gu(s.params)),Object.assign(new String(s),{params:mu(s)})));function Ni(s){return e=>{const{subscribe:t,update:n,set:o}=Vn(s(e));return{subscribe:t,update:l=>n(r=>s(l(r))),set:l=>o(s(l))}}}const Mi=fu(),Ri=So().search,Oi=So().hash;let ao=!0,al=!1;const Ao=$u(Mi),Gn=vu(Ri),Pi=Vn(Oi,s=>{const e=()=>es?Di(location.hash):s(location.hash);return As&&xn.sideEffect&&window.addEventListener("hashchange",e),()=>As&&xn.sideEffect&&window.removeEventListener("hashchange",e)}),Li=Vn({}),wu=Ti([Ao,Gn,Pi],([s,e,t],n)=>{let o=!1;return yo().then(()=>{o||n(s.toString()+e.toString()+t.toString())}),()=>o=!0},Mi+Ri+Oi);Ti(Ao,s=>(e="*",t)=>{const n=hu(s.toString(),e,t);return n&&Object.assign(s,{params:n}),!!n});As&&(wu.subscribe(s=>{if(xn.sideEffect){if(ao)return ao=!1;history[al?"replaceState":"pushState"]({},null,du(s)),al=!1}}),Li.subscribe(s=>{xn.sideEffect&&history.replaceState(s,null,location.pathname+location.search+location.hash)}),window.addEventListener("popstate",s=>{xn.sideEffect&&(ao=!0,Di(location.href,s.state))}));function Di(s="",e){const{pathname:t,search:n,hash:o}=new URL(pu(s),"file:");Ao.set(t),yo().then(()=>{Gn.set(n),Pi.set(o),e&&Li.set(e)})}const Ii=""+new URL("npm-logo-185f97d3.svg",import.meta.url).href,Bi=""+new URL("github-logo-32aab48a.svg",import.meta.url).href;function cl(s,e,t){const n=s.slice();return n[0]=e[t],n}function ul(s){let e,t,n,o,l,r,i,a,c,u,f,d,p=s[0].name+"",_,k,A,w=s[0].description+"",$;return{c(){e=g("div"),t=g("div"),n=g("a"),o=g("img"),r=C(),i=g("a"),a=g("img"),u=C(),f=g("div"),d=g("a"),_=H(p),k=C(),A=g("div"),$=C(),m(o,"class","max-w-[3.75em] mx-auto my-1"),Cn(o.src,l=Ii)||m(o,"src",l),m(o,"alt","NPM logo"),m(n,"class","block"),m(n,"href",s[0].npm),m(n,"target","_blank"),m(n,"rel","noreferrer"),m(a,"class","max-h-[1.75em] mx-auto my-1"),Cn(a.src,c=Bi)||m(a,"src",c),m(a,"alt","GitHub logo"),m(i,"class","block"),m(i,"href",s[0].github),m(i,"target","_blank"),m(i,"rel","noreferrer"),m(t,"class","float-right ml-2 mb-1"),m(d,"href",s[0].link),m(f,"class","text-xl break-words mb-4"),m(A,"class","clear-right"),m(e,"class","h-full box-border px-4 py-2 border-2 rounded-lg shadow-md")},m(x,R){S(x,e,R),h(e,t),h(t,n),h(n,o),h(t,r),h(t,i),h(i,a),h(e,u),h(e,f),h(f,d),h(d,_),h(e,k),h(e,A),A.innerHTML=w,h(e,$)},p:q,d(x){x&&E(e)}}}function ku(s){let e,t,n,o,l=bo,r=[];for(let i=0;i<l.length;i+=1)r[i]=ul(cl(s,l,i));return{c(){e=g("section"),t=g("h1"),t.textContent="Packages",n=C(),o=g("div");for(let i=0;i<r.length;i+=1)r[i].c();m(t,"class","font-bold my-4 pb-2 text-3xl border-b border-gray-400"),m(o,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-fr gap-4")},m(i,a){S(i,e,a),h(e,t),h(e,n),h(e,o);for(let c=0;c<r.length;c+=1)r[c].m(o,null)},p(i,[a]){if(a&0){l=bo;let c;for(c=0;c<l.length;c+=1){const u=cl(i,l,c);r[c]?r[c].p(u,a):(r[c]=ul(u),r[c].c(),r[c].m(o,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=l.length}},i:q,o:q,d(i){i&&E(e),Le(r,i)}}}const yn={code:"bg-gray-100 text-red-800 px-1 py-0.5 rounded-sm"},bo=[{name:"@apsc/tabs",link:"?c=tabs",npm:"https://www.npmjs.com/package/@apsc/tabs",github:"https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/tabs",description:"A component set and context class for organizing the Tabs interface"},{name:"@apsc/glob-notify",link:"?c=glob-notify",npm:"https://www.npmjs.com/package/@apsc/glob-notify",github:"https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/glob-notify",description:"Component for notifications globally for the entire application"},{name:"@apsc/color",link:"?c=color",npm:"https://www.npmjs.com/package/@apsc/color",github:"https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/color",description:"A set of components for picking and editing colors"},{name:"@apsc/floating-ui-action",link:"?c=floating-ui-action",npm:"https://www.npmjs.com/package/@apsc/floating-ui-action",github:"https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/floating-ui-action",description:`Floating UI (ex. Popper) action for directive <code class="${yn.code}">use</code>`},{name:"@apsc/focus-action",link:"?c=focus-action",npm:"https://www.npmjs.com/package/@apsc/focus-action",github:"https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/focus-action",description:`Action to control <code class="${yn.code}">focusin</code> and
        <code class="${yn.code}">focusout</code> for directive <code class="${yn.code}">use</code>`},{name:"@apsc/keyboard-shortcut-action",link:"?c=keyboard-shortcut-action",npm:"https://www.npmjs.com/package/@apsc/keyboard-shortcut-action",github:"https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/keyboard-shortcut-action",description:`Action to call a function by keyboard shortcut for Svelte directive <code class="${yn.code}">use</code>`},{name:"@apsc/scroll-child-action",link:"?c=scroll-child-action",npm:"https://www.npmjs.com/package/@apsc/scroll-child-action",github:"https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/scroll-child-action",description:`Action to scroll the child to parent viewport for Svelte directive <code class="${yn.code}">use</code>`}];function un(s){return bo.find(e=>e.name===s)}class yu extends W{constructor(e){super(),K(this,e,null,ku,j,{})}}const Tu=Symbol("TABS");class Nn{constructor(){Bt(this,"_tabs",[]);Bt(this,"_panels",[]);Bt(this,"_setLength",null);Bt(this,"_setActive",null);Bt(this,"_active",{index:NaN});Bt(this,"active");Bt(this,"length");this.active=_o(this._active,e=>(this._setActive=e,this._setActive(this._active),()=>{this._setActive=null})),this.length=_o(0,e=>(this._setLength=e,this._setLength(this._getLength()),()=>{this._setLength=null}))}_getLength(){return Math.max(this._tabs.length,this._panels.length)}push(e){const t=Symbol(e);return(e==="tab"?this._tabs:this._panels).push(t),this._setLength&&this._setLength(this._getLength()),(isNaN(this._active.index)||this._active.tab==null||this._active.panel==null)&&this.select(this._active.index||0),t}pop(e){const t=(n,o)=>{const l=n.indexOf(o);if(l<0)return!1;n.splice(l,1);const r=this._getLength();return this._setLength&&this._setLength(r),r===0?this.select(NaN):l<=this._active.index&&this.select(Math.min(this._active.index,r-1)),!0};return"tab"in e?t(this._tabs,e.tab):"panel"in e?t(this._panels,e.panel):!1}select(e){const t=o=>{let l=this._active;return isNaN(o)?l={index:NaN}:o>=0&&o<this._getLength()&&(l={index:o},this._tabs[o]&&(l.tab=this._tabs[o]),this._panels[o]&&(l.panel=this._panels[o])),l},n=o=>Object.is(this._active,o)?!1:(this._active=o,this._setActive&&this._setActive(this._active),!0);return typeof e=="number"?n(t(e)):"tab"in e&&e.tab?n(t(this._tabs.indexOf(e.tab))):"panel"in e&&e.panel?n(t(this._panels.indexOf(e.panel))):!1}}Bt(Nn,"contextName",Tu);function Eu(s){let e;const t=s[7].default,n=Se(t,s,s[6],null);return{c(){n&&n.c()},m(o,l){n&&n.m(o,l),e=!0},p(o,[l]){n&&n.p&&(!e||l&64)&&Ae(n,t,o,o[6],e?xe(t,o[6],l,null):Ce(o[6]),null)},i(o){e||(v(n,o),e=!0)},o(o){T(n,o),e=!1},d(o){n&&n.d(o)}}}function Su(s,e,t){let n,o,{$$slots:l={},$$scope:r}=e;const i=new Nn;vi(Nn.contextName,i);const a=i.active;Ft(s,a,d=>t(5,o=d));const c=i.length;Ft(s,c,d=>t(4,n=d));let{selected:u=NaN}=e,{length:f=0}=e;return s.$$set=d=>{"selected"in d&&t(2,u=d.selected),"length"in d&&t(3,f=d.length),"$$scope"in d&&t(6,r=d.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(2,u=o.index),s.$$.dirty&36&&typeof u=="number"&&!i.select(u)&&t(2,u=o.index),s.$$.dirty&16&&t(3,f=n)},[a,c,u,f,n,o,r,l]}class On extends W{constructor(e){super(),K(this,e,Su,Eu,j,{selected:2,length:3})}}const xu=s=>({active:s&1}),fl=s=>({active:s[0].tab===s[1],activate:s[3]});function Au(s){let e;return{c(){e=H("Tab slot is empty")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function Cu(s){let e;const t=s[5].default,n=Se(t,s,s[4],fl),o=n||Au();return{c(){o&&o.c()},m(l,r){o&&o.m(l,r),e=!0},p(l,[r]){n&&n.p&&(!e||r&17)&&Ae(n,t,l,l[4],e?xe(t,l[4],r,xu):Ce(l[4]),fl)},i(l){e||(v(o,l),e=!0)},o(l){T(o,l),e=!1},d(l){o&&o.d(l)}}}function Nu(s,e,t){let n,{$$slots:o={},$$scope:l}=e;const r=Ds(Nn.contextName),i=r.push("tab"),a=r.active;Ft(s,a,u=>t(0,n=u)),Ls(()=>r.pop({tab:i}));const c=()=>r.select({tab:i});return s.$$set=u=>{"$$scope"in u&&t(4,l=u.$$scope)},[n,i,a,c,l,o]}class xt extends W{constructor(e){super(),K(this,e,Nu,Cu,j,{})}}const Mu=s=>({active:s&1}),dl=s=>({active:s[0].panel===s[1],activate:s[3]});function Ru(s){let e;return{c(){e=H("Panel slot is empty")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function Ou(s){let e;const t=s[5].default,n=Se(t,s,s[4],dl),o=n||Ru();return{c(){o&&o.c()},m(l,r){o&&o.m(l,r),e=!0},p(l,[r]){n&&n.p&&(!e||r&17)&&Ae(n,t,l,l[4],e?xe(t,l[4],r,Mu):Ce(l[4]),dl)},i(l){e||(v(o,l),e=!0)},o(l){T(o,l),e=!1},d(l){o&&o.d(l)}}}function Pu(s,e,t){let n,{$$slots:o={},$$scope:l}=e;const r=Ds(Nn.contextName),i=r.push("panel"),a=r.active;Ft(s,a,u=>t(0,n=u)),Ls(()=>r.pop({panel:i}));const c=()=>r.select({panel:i});return s.$$set=u=>{"$$scope"in u&&t(4,l=u.$$scope)},[n,i,a,c,l,o]}class At extends W{constructor(e){super(),K(this,e,Pu,Ou,j,{})}}function Lu(s){let e,t;const n=s[0].default,o=Se(n,s,s[1],null);return{c(){e=g("section"),o&&o.c(),m(e,"class","doc-tabs")},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&2)&&Ae(o,n,l,l[1],t?xe(n,l[1],r,null):Ce(l[1]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Du(s){let e,t;return e=new On({props:{$$slots:{default:[Lu]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,[o]){const l={};o&2&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Iu(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(1,o=l.$$scope)},[n,o]}class fn extends W{constructor(e){super(),K(this,e,Iu,Du,j,{})}}function pl(s){const e=s.parentElement;if(e&&e.scrollHeight>e.offsetHeight){const t=getComputedStyle(e),n=parseInt(t.paddingTop)||0,o=parseInt(t.paddingBottom)||0,l=e.offsetTop+n,r=e.offsetTop+e.offsetHeight-o,i=s.offsetTop-e.scrollTop,a=s.offsetTop+s.offsetHeight-e.scrollTop;return a>r?(e.scrollTop+=a-r,!0):i<l?(e.scrollTop-=l-i,!0):!1}else return!1}function hl(s){const e=s.parentElement;if(e&&e.scrollWidth>e.offsetWidth){const t=getComputedStyle(e),n=parseInt(t.paddingLeft)||0,o=parseInt(t.paddingRight)||0,l=e.offsetLeft+n,r=e.offsetLeft+e.offsetWidth-o,i=s.offsetLeft-e.scrollLeft,a=s.offsetLeft+s.offsetWidth-e.scrollLeft;return a>r?(e.scrollLeft+=a-r,!0):i<l?(e.scrollLeft-=l-i,!0):!1}else return!1}function Bs(s,e){function t(n){n===!0?(pl(s),hl(s)):typeof n=="object"&&(n.x&&hl(s),n.y&&pl(s))}return t(e),{update(n){t(n)}}}function Bu(s){let e,t,n,o,l;const r=s[0].default,i=Se(r,s,s[1],null);return{c(){e=g("button"),i&&i.c(),m(e,"class","doc-tabs__tab"),le(e,"active",s[2])},m(a,c){S(a,e,c),i&&i.m(e,null),n=!0,o||(l=[Z(e,"click",function(){Re(s[3])&&s[3].apply(this,arguments)}),Ke(t=Bs.call(null,e,{x:s[2]}))],o=!0)},p(a,c){s=a,i&&i.p&&(!n||c&2)&&Ae(i,r,s,s[1],n?xe(r,s[1],c,null):Ce(s[1]),null),t&&Re(t.update)&&c&4&&t.update.call(null,{x:s[2]}),(!n||c&4)&&le(e,"active",s[2])},i(a){n||(v(i,a),n=!0)},o(a){T(i,a),n=!1},d(a){a&&E(e),i&&i.d(a),o=!1,ye(l)}}}function zu(s){let e,t;return e=new xt({props:{$$slots:{default:[Bu,({active:n,activate:o})=>({2:n,3:o}),({active:n,activate:o})=>(n?4:0)|(o?8:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,[o]){const l={};o&14&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Hu(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(1,o=l.$$scope)},[n,o]}class Ue extends W{constructor(e){super(),K(this,e,Hu,zu,j,{})}}function ml(s){let e,t,n,o,l,r,i,a,c,u;return{c(){e=g("div"),t=g("button"),n=g("span"),l=C(),r=g("button"),i=g("span"),m(n,"class","block"),Je(n,"transform","rotate(180deg)"),t.disabled=o=s[2].index===0,m(i,"class","block"),r.disabled=a=s[2].index>=s[1]-1,m(e,"class","doc-tabs__list__arrows")},m(f,d){S(f,e,d),h(e,t),h(t,n),n.innerHTML=s[6],h(e,l),h(e,r),h(r,i),i.innerHTML=s[6],c||(u=[Z(t,"click",s[10]),Z(r,"click",s[11])],c=!0)},p(f,d){d&4&&o!==(o=f[2].index===0)&&(t.disabled=o),d&6&&a!==(a=f[2].index>=f[1]-1)&&(r.disabled=a)},d(f){f&&E(e),c=!1,ye(u)}}}function Fu(s){let e,t,n,o,l,r,i;const a=s[9].default,c=Se(a,s,s[8],null);let u=s[0]&&ml(s);return{c(){e=g("div"),t=g("div"),c&&c.c(),o=C(),u&&u.c(),m(t,"class","doc-tabs__list__tabs"),m(e,"class","doc-tabs__list")},m(f,d){S(f,e,d),h(e,t),c&&c.m(t,null),h(e,o),u&&u.m(e,null),l=!0,r||(i=Ke(n=s[7].call(null,t,s[1])),r=!0)},p(f,[d]){c&&c.p&&(!l||d&256)&&Ae(c,a,f,f[8],l?xe(a,f[8],d,null):Ce(f[8]),null),n&&Re(n.update)&&d&2&&n.update.call(null,f[1]),f[0]?u?u.p(f,d):(u=ml(f),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(f){l||(v(c,f),l=!0)},o(f){T(c,f),l=!1},d(f){f&&E(e),c&&c.d(f),u&&u.d(),r=!1,i()}}}function ju(s,e,t){let n,o,{$$slots:l={},$$scope:r}=e;const i=Ds(Nn.contextName),a=i.length;Ft(s,a,k=>t(1,n=k));const c=i.active;Ft(s,c,k=>t(2,o=k));const u='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="1em" height="1em"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill="currentColor"/></svg>';let f=!1;function d(k,A){function w(){t(0,f=k.scrollWidth>k.offsetWidth)}return w(),window.addEventListener("resize",w),{update(){w()},destroy(){window.removeEventListener("resize",w)}}}const p=()=>i.select(o.index-1),_=()=>i.select(o.index+1);return s.$$set=k=>{"$$scope"in k&&t(8,r=k.$$scope)},[f,n,o,i,a,c,u,d,r,l,p,_]}class dn extends W{constructor(e){super(),K(this,e,ju,Fu,j,{})}}const Uu=s=>({active:s&4}),gl=s=>({active:s[2]});function qu(s){let e,t;const n=s[0].default,o=Se(n,s,s[1],gl);return{c(){e=g("div"),o&&o.c(),m(e,"class","doc-tabs__panel"),le(e,"active",s[2])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&6)&&Ae(o,n,l,l[1],t?xe(n,l[1],r,Uu):Ce(l[1]),gl),(!t||r&4)&&le(e,"active",l[2])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Ku(s){let e,t;return e=new At({props:{$$slots:{default:[qu,({active:n})=>({2:n}),({active:n})=>n?4:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,[o]){const l={};o&6&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Wu(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(1,o=l.$$scope)},[n,o]}class qe extends W{constructor(e){super(),K(this,e,Wu,Ku,j,{})}}var Wt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Co={exports:{}};function No(s){return s instanceof Map?s.clear=s.delete=s.set=function(){throw new Error("map is read-only")}:s instanceof Set&&(s.add=s.clear=s.delete=function(){throw new Error("set is read-only")}),Object.freeze(s),Object.getOwnPropertyNames(s).forEach(function(e){var t=s[e];typeof t=="object"&&!Object.isFrozen(t)&&No(t)}),s}Co.exports=No;Co.exports.default=No;class _l{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function zi(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Gt(s,...e){const t=Object.create(null);for(const n in s)t[n]=s[n];return e.forEach(function(n){for(const o in n)t[o]=n[o]}),t}const Gu="</span>",bl=s=>!!s.scope||s.sublanguage&&s.language,Zu=(s,{prefix:e})=>{if(s.includes(".")){const t=s.split(".");return[`${e}${t.shift()}`,...t.map((n,o)=>`${n}${"_".repeat(o+1)}`)].join(" ")}return`${e}${s}`};class Qu{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=zi(e)}openNode(e){if(!bl(e))return;let t="";e.sublanguage?t=`language-${e.language}`:t=Zu(e.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(e){bl(e)&&(this.buffer+=Gu)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const $l=(s={})=>{const e={children:[]};return Object.assign(e,s),e};class Mo{constructor(){this.rootNode=$l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=$l({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(n=>this._walk(e,n)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{Mo._collapse(t)}))}}class Xu extends Mo{constructor(e){super(),this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const n=e.root;n.sublanguage=!0,n.language=t,this.add(n)}toHTML(){return new Qu(this,this.options).value()}finalize(){return!0}}function Zn(s){return s?typeof s=="string"?s:s.source:null}function Hi(s){return pn("(?=",s,")")}function Ju(s){return pn("(?:",s,")*")}function Yu(s){return pn("(?:",s,")?")}function pn(...s){return s.map(t=>Zn(t)).join("")}function Vu(s){const e=s[s.length-1];return typeof e=="object"&&e.constructor===Object?(s.splice(s.length-1,1),e):{}}function Ro(...s){return"("+(Vu(s).capture?"":"?:")+s.map(n=>Zn(n)).join("|")+")"}function Fi(s){return new RegExp(s.toString()+"|").exec("").length-1}function ef(s,e){const t=s&&s.exec(e);return t&&t.index===0}const tf=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Oo(s,{joinWith:e}){let t=0;return s.map(n=>{t+=1;const o=t;let l=Zn(n),r="";for(;l.length>0;){const i=tf.exec(l);if(!i){r+=l;break}r+=l.substring(0,i.index),l=l.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?r+="\\"+String(Number(i[1])+o):(r+=i[0],i[0]==="("&&t++)}return r}).map(n=>`(${n})`).join(e)}const nf=/\b\B/,ji="[a-zA-Z]\\w*",Po="[a-zA-Z_]\\w*",Ui="\\b\\d+(\\.\\d+)?",qi="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ki="\\b(0b[01]+)",sf="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",of=(s={})=>{const e=/^#![ ]*\//;return s.binary&&(s.begin=pn(e,/.*\b/,s.binary,/\b.*/)),Gt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,n)=>{t.index!==0&&n.ignoreMatch()}},s)},Qn={begin:"\\\\[\\s\\S]",relevance:0},lf={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Qn]},rf={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Qn]},af={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},zs=function(s,e,t={}){const n=Gt({scope:"comment",begin:s,end:e,contains:[]},t);n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=Ro("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return n.contains.push({begin:pn(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},cf=zs("//","$"),uf=zs("/\\*","\\*/"),ff=zs("#","$"),df={scope:"number",begin:Ui,relevance:0},pf={scope:"number",begin:qi,relevance:0},hf={scope:"number",begin:Ki,relevance:0},mf={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Qn,{begin:/\[/,end:/\]/,relevance:0,contains:[Qn]}]}]},gf={scope:"title",begin:ji,relevance:0},_f={scope:"title",begin:Po,relevance:0},bf={begin:"\\.\\s*"+Po,relevance:0},$f=function(s){return Object.assign(s,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var ms=Object.freeze({__proto__:null,MATCH_NOTHING_RE:nf,IDENT_RE:ji,UNDERSCORE_IDENT_RE:Po,NUMBER_RE:Ui,C_NUMBER_RE:qi,BINARY_NUMBER_RE:Ki,RE_STARTERS_RE:sf,SHEBANG:of,BACKSLASH_ESCAPE:Qn,APOS_STRING_MODE:lf,QUOTE_STRING_MODE:rf,PHRASAL_WORDS_MODE:af,COMMENT:zs,C_LINE_COMMENT_MODE:cf,C_BLOCK_COMMENT_MODE:uf,HASH_COMMENT_MODE:ff,NUMBER_MODE:df,C_NUMBER_MODE:pf,BINARY_NUMBER_MODE:hf,REGEXP_MODE:mf,TITLE_MODE:gf,UNDERSCORE_TITLE_MODE:_f,METHOD_GUARD:bf,END_SAME_AS_BEGIN:$f});function vf(s,e){s.input[s.index-1]==="."&&e.ignoreMatch()}function wf(s,e){s.className!==void 0&&(s.scope=s.className,delete s.className)}function kf(s,e){e&&s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=vf,s.keywords=s.keywords||s.beginKeywords,delete s.beginKeywords,s.relevance===void 0&&(s.relevance=0))}function yf(s,e){Array.isArray(s.illegal)&&(s.illegal=Ro(...s.illegal))}function Tf(s,e){if(s.match){if(s.begin||s.end)throw new Error("begin & end are not supported with match");s.begin=s.match,delete s.match}}function Ef(s,e){s.relevance===void 0&&(s.relevance=1)}const Sf=(s,e)=>{if(!s.beforeMatch)return;if(s.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},s);Object.keys(s).forEach(n=>{delete s[n]}),s.keywords=t.keywords,s.begin=pn(t.beforeMatch,Hi(t.begin)),s.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},s.relevance=0,delete t.beforeMatch},xf=["of","and","for","in","not","or","if","then","parent","list","value"],Af="keyword";function Wi(s,e,t=Af){const n=Object.create(null);return typeof s=="string"?o(t,s.split(" ")):Array.isArray(s)?o(t,s):Object.keys(s).forEach(function(l){Object.assign(n,Wi(s[l],e,l))}),n;function o(l,r){e&&(r=r.map(i=>i.toLowerCase())),r.forEach(function(i){const a=i.split("|");n[a[0]]=[l,Cf(a[0],a[1])]})}}function Cf(s,e){return e?Number(e):Nf(s)?0:1}function Nf(s){return xf.includes(s.toLowerCase())}const vl={},sn=s=>{console.error(s)},wl=(s,...e)=>{console.log(`WARN: ${s}`,...e)},Tn=(s,e)=>{vl[`${s}/${e}`]||(console.log(`Deprecated as of ${s}. ${e}`),vl[`${s}/${e}`]=!0)},Cs=new Error;function Gi(s,e,{key:t}){let n=0;const o=s[t],l={},r={};for(let i=1;i<=e.length;i++)r[i+n]=o[i],l[i+n]=!0,n+=Fi(e[i-1]);s[t]=r,s[t]._emit=l,s[t]._multi=!0}function Mf(s){if(Array.isArray(s.begin)){if(s.skip||s.excludeBegin||s.returnBegin)throw sn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Cs;if(typeof s.beginScope!="object"||s.beginScope===null)throw sn("beginScope must be object"),Cs;Gi(s,s.begin,{key:"beginScope"}),s.begin=Oo(s.begin,{joinWith:""})}}function Rf(s){if(Array.isArray(s.end)){if(s.skip||s.excludeEnd||s.returnEnd)throw sn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Cs;if(typeof s.endScope!="object"||s.endScope===null)throw sn("endScope must be object"),Cs;Gi(s,s.end,{key:"endScope"}),s.end=Oo(s.end,{joinWith:""})}}function Of(s){s.scope&&typeof s.scope=="object"&&s.scope!==null&&(s.beginScope=s.scope,delete s.scope)}function Pf(s){Of(s),typeof s.beginScope=="string"&&(s.beginScope={_wrap:s.beginScope}),typeof s.endScope=="string"&&(s.endScope={_wrap:s.endScope}),Mf(s),Rf(s)}function Lf(s){function e(r,i){return new RegExp(Zn(r),"m"+(s.case_insensitive?"i":"")+(s.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,i]),this.matchAt+=Fi(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(a=>a[1]);this.matcherRe=e(Oo(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(i);if(!a)return null;const c=a.findIndex((f,d)=>d>0&&f!==void 0),u=this.matchIndexes[c];return a.splice(0,c),Object.assign(a,u)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const a=new t;return this.rules.slice(i).forEach(([c,u])=>a.addRule(c,u)),a.compile(),this.multiRegexes[i]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,a){this.rules.push([i,a]),a.type==="begin"&&this.count++}exec(i){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let c=a.exec(i);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(i)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function o(r){const i=new n;return r.contains.forEach(a=>i.addRule(a.begin,{rule:a,type:"begin"})),r.terminatorEnd&&i.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&i.addRule(r.illegal,{type:"illegal"}),i}function l(r,i){const a=r;if(r.isCompiled)return a;[wf,Tf,Pf,Sf].forEach(u=>u(r,i)),s.compilerExtensions.forEach(u=>u(r,i)),r.__beforeBegin=null,[kf,yf,Ef].forEach(u=>u(r,i)),r.isCompiled=!0;let c=null;return typeof r.keywords=="object"&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),c=r.keywords.$pattern,delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=Wi(r.keywords,s.case_insensitive)),a.keywordPatternRe=e(c,!0),i&&(r.begin||(r.begin=/\B|\b/),a.beginRe=e(a.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(a.endRe=e(a.end)),a.terminatorEnd=Zn(a.end)||"",r.endsWithParent&&i.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+i.terminatorEnd)),r.illegal&&(a.illegalRe=e(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(u){return Df(u==="self"?r:u)})),r.contains.forEach(function(u){l(u,a)}),r.starts&&l(r.starts,i),a.matcher=o(a),a}if(s.compilerExtensions||(s.compilerExtensions=[]),s.contains&&s.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return s.classNameAliases=Gt(s.classNameAliases||{}),l(s)}function Zi(s){return s?s.endsWithParent||Zi(s.starts):!1}function Df(s){return s.variants&&!s.cachedVariants&&(s.cachedVariants=s.variants.map(function(e){return Gt(s,{variants:null},e)})),s.cachedVariants?s.cachedVariants:Zi(s)?Gt(s,{starts:s.starts?Gt(s.starts):null}):Object.isFrozen(s)?Gt(s):s}var If="11.7.0";class Bf extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const co=zi,kl=Gt,yl=Symbol("nomatch"),zf=7,Hf=function(s){const e=Object.create(null),t=Object.create(null),n=[];let o=!0;const l="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Xu};function a(z){return i.noHighlightRe.test(z)}function c(z){let Q=z.className+" ";Q+=z.parentNode?z.parentNode.className:"";const Y=i.languageDetectRe.exec(Q);if(Y){const ne=G(Y[1]);return ne||(wl(l.replace("{}",Y[1])),wl("Falling back to no-highlight mode for this block.",z)),ne?Y[1]:"no-highlight"}return Q.split(/\s+/).find(ne=>a(ne)||G(ne))}function u(z,Q,Y){let ne="",U="";typeof Q=="object"?(ne=z,Y=Q.ignoreIllegals,U=Q.language):(Tn("10.7.0","highlight(lang, code, ...args) has been deprecated."),Tn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),U=z,ne=Q),Y===void 0&&(Y=!0);const ge={code:ne,language:U};$e("before:highlight",ge);const ie=ge.result?ge.result:f(ge.language,ge.code,Y);return ie.code=ge.code,$e("after:highlight",ie),ie}function f(z,Q,Y,ne){const U=Object.create(null);function ge(X,J){return X.keywords[J]}function ie(){if(!fe.keywords){Pe.addText(be);return}let X=0;fe.keywordPatternRe.lastIndex=0;let J=fe.keywordPatternRe.exec(be),me="";for(;J;){me+=be.substring(X,J.index);const Ne=ft.case_insensitive?J[0].toLowerCase():J[0],Ye=ge(fe,Ne);if(Ye){const[it,Dn]=Ye;if(Pe.addText(me),me="",U[Ne]=(U[Ne]||0)+1,U[Ne]<=zf&&(dt+=Dn),it.startsWith("_"))me+=J[0];else{const ts=ft.classNameAliases[it]||it;Pe.addKeyword(J[0],ts)}}else me+=J[0];X=fe.keywordPatternRe.lastIndex,J=fe.keywordPatternRe.exec(be)}me+=be.substring(X),Pe.addText(me)}function ke(){if(be==="")return;let X=null;if(typeof fe.subLanguage=="string"){if(!e[fe.subLanguage]){Pe.addText(be);return}X=f(fe.subLanguage,be,!0,Yt[fe.subLanguage]),Yt[fe.subLanguage]=X._top}else X=p(be,fe.subLanguage.length?fe.subLanguage:null);fe.relevance>0&&(dt+=X.relevance),Pe.addSublanguage(X._emitter,X.language)}function V(){fe.subLanguage!=null?ke():ie(),be=""}function Ee(X,J){let me=1;const Ne=J.length-1;for(;me<=Ne;){if(!X._emit[me]){me++;continue}const Ye=ft.classNameAliases[X[me]]||X[me],it=J[me];Ye?Pe.addKeyword(it,Ye):(be=it,ie(),be=""),me++}}function _e(X,J){return X.scope&&typeof X.scope=="string"&&Pe.openNode(ft.classNameAliases[X.scope]||X.scope),X.beginScope&&(X.beginScope._wrap?(Pe.addKeyword(be,ft.classNameAliases[X.beginScope._wrap]||X.beginScope._wrap),be=""):X.beginScope._multi&&(Ee(X.beginScope,J),be="")),fe=Object.create(X,{parent:{value:fe}}),fe}function Qe(X,J,me){let Ne=ef(X.endRe,me);if(Ne){if(X["on:end"]){const Ye=new _l(X);X["on:end"](J,Ye),Ye.isMatchIgnored&&(Ne=!1)}if(Ne){for(;X.endsParent&&X.parent;)X=X.parent;return X}}if(X.endsWithParent)return Qe(X.parent,J,me)}function Me(X){return fe.matcher.regexIndex===0?(be+=X[0],1):(Oe=!0,0)}function $t(X){const J=X[0],me=X.rule,Ne=new _l(me),Ye=[me.__beforeBegin,me["on:begin"]];for(const it of Ye)if(it&&(it(X,Ne),Ne.isMatchIgnored))return Me(J);return me.skip?be+=J:(me.excludeBegin&&(be+=J),V(),!me.returnBegin&&!me.excludeBegin&&(be=J)),_e(me,X),me.returnBegin?0:J.length}function jt(X){const J=X[0],me=Q.substring(X.index),Ne=Qe(fe,X,me);if(!Ne)return yl;const Ye=fe;fe.endScope&&fe.endScope._wrap?(V(),Pe.addKeyword(J,fe.endScope._wrap)):fe.endScope&&fe.endScope._multi?(V(),Ee(fe.endScope,X)):Ye.skip?be+=J:(Ye.returnEnd||Ye.excludeEnd||(be+=J),V(),Ye.excludeEnd&&(be=J));do fe.scope&&Pe.closeNode(),!fe.skip&&!fe.subLanguage&&(dt+=fe.relevance),fe=fe.parent;while(fe!==Ne.parent);return Ne.starts&&_e(Ne.starts,X),Ye.returnEnd?0:J.length}function We(){const X=[];for(let J=fe;J!==ft;J=J.parent)J.scope&&X.unshift(J.scope);X.forEach(J=>Pe.openNode(J))}let Tt={};function ot(X,J){const me=J&&J[0];if(be+=X,me==null)return V(),0;if(Tt.type==="begin"&&J.type==="end"&&Tt.index===J.index&&me===""){if(be+=Q.slice(J.index,J.index+1),!o){const Ne=new Error(`0 width match regex (${z})`);throw Ne.languageName=z,Ne.badRule=Tt.rule,Ne}return 1}if(Tt=J,J.type==="begin")return $t(J);if(J.type==="illegal"&&!Y){const Ne=new Error('Illegal lexeme "'+me+'" for mode "'+(fe.scope||"<unnamed>")+'"');throw Ne.mode=fe,Ne}else if(J.type==="end"){const Ne=jt(J);if(Ne!==yl)return Ne}if(J.type==="illegal"&&me==="")return 1;if(se>1e5&&se>J.index*3)throw new Error("potential infinite loop, way more iterations than matches");return be+=me,me.length}const ft=G(z);if(!ft)throw sn(l.replace("{}",z)),new Error('Unknown language: "'+z+'"');const Ot=Lf(ft);let rt="",fe=ne||Ot;const Yt={},Pe=new i.__emitter(i);We();let be="",dt=0,He=0,se=0,Oe=!1;try{for(fe.matcher.considerAll();;){se++,Oe?Oe=!1:fe.matcher.considerAll(),fe.matcher.lastIndex=He;const X=fe.matcher.exec(Q);if(!X)break;const J=Q.substring(He,X.index),me=ot(J,X);He=X.index+me}return ot(Q.substring(He)),Pe.closeAllNodes(),Pe.finalize(),rt=Pe.toHTML(),{language:z,value:rt,relevance:dt,illegal:!1,_emitter:Pe,_top:fe}}catch(X){if(X.message&&X.message.includes("Illegal"))return{language:z,value:co(Q),illegal:!0,relevance:0,_illegalBy:{message:X.message,index:He,context:Q.slice(He-100,He+100),mode:X.mode,resultSoFar:rt},_emitter:Pe};if(o)return{language:z,value:co(Q),illegal:!1,relevance:0,errorRaised:X,_emitter:Pe,_top:fe};throw X}}function d(z){const Q={value:co(z),illegal:!1,relevance:0,_top:r,_emitter:new i.__emitter(i)};return Q._emitter.addText(z),Q}function p(z,Q){Q=Q||i.languages||Object.keys(e);const Y=d(z),ne=Q.filter(G).filter(re).map(V=>f(V,z,!1));ne.unshift(Y);const U=ne.sort((V,Ee)=>{if(V.relevance!==Ee.relevance)return Ee.relevance-V.relevance;if(V.language&&Ee.language){if(G(V.language).supersetOf===Ee.language)return 1;if(G(Ee.language).supersetOf===V.language)return-1}return 0}),[ge,ie]=U,ke=ge;return ke.secondBest=ie,ke}function _(z,Q,Y){const ne=Q&&t[Q]||Y;z.classList.add("hljs"),z.classList.add(`language-${ne}`)}function k(z){let Q=null;const Y=c(z);if(a(Y))return;if($e("before:highlightElement",{el:z,language:Y}),z.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(z)),i.throwUnescapedHTML))throw new Bf("One of your code blocks includes unescaped HTML.",z.innerHTML);Q=z;const ne=Q.textContent,U=Y?u(ne,{language:Y,ignoreIllegals:!0}):p(ne);z.innerHTML=U.value,_(z,Y,U.language),z.result={language:U.language,re:U.relevance,relevance:U.relevance},U.secondBest&&(z.secondBest={language:U.secondBest.language,relevance:U.secondBest.relevance}),$e("after:highlightElement",{el:z,result:U,text:ne})}function A(z){i=kl(i,z)}const w=()=>{R(),Tn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function $(){R(),Tn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let x=!1;function R(){if(document.readyState==="loading"){x=!0;return}document.querySelectorAll(i.cssSelector).forEach(k)}function N(){x&&R()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",N,!1);function y(z,Q){let Y=null;try{Y=Q(s)}catch(ne){if(sn("Language definition for '{}' could not be registered.".replace("{}",z)),o)sn(ne);else throw ne;Y=r}Y.name||(Y.name=z),e[z]=Y,Y.rawDefinition=Q.bind(null,s),Y.aliases&&oe(Y.aliases,{languageName:z})}function D(z){delete e[z];for(const Q of Object.keys(t))t[Q]===z&&delete t[Q]}function B(){return Object.keys(e)}function G(z){return z=(z||"").toLowerCase(),e[z]||e[t[z]]}function oe(z,{languageName:Q}){typeof z=="string"&&(z=[z]),z.forEach(Y=>{t[Y.toLowerCase()]=Q})}function re(z){const Q=G(z);return Q&&!Q.disableAutodetect}function ue(z){z["before:highlightBlock"]&&!z["before:highlightElement"]&&(z["before:highlightElement"]=Q=>{z["before:highlightBlock"](Object.assign({block:Q.el},Q))}),z["after:highlightBlock"]&&!z["after:highlightElement"]&&(z["after:highlightElement"]=Q=>{z["after:highlightBlock"](Object.assign({block:Q.el},Q))})}function ve(z){ue(z),n.push(z)}function $e(z,Q){const Y=z;n.forEach(function(ne){ne[Y]&&ne[Y](Q)})}function Ie(z){return Tn("10.7.0","highlightBlock will be removed entirely in v12.0"),Tn("10.7.0","Please use highlightElement now."),k(z)}Object.assign(s,{highlight:u,highlightAuto:p,highlightAll:R,highlightElement:k,highlightBlock:Ie,configure:A,initHighlighting:w,initHighlightingOnLoad:$,registerLanguage:y,unregisterLanguage:D,listLanguages:B,getLanguage:G,registerAliases:oe,autoDetection:re,inherit:kl,addPlugin:ve}),s.debugMode=function(){o=!1},s.safeMode=function(){o=!0},s.versionString=If,s.regex={concat:pn,lookahead:Hi,either:Ro,optional:Yu,anyNumberOfTimes:Ju};for(const z in ms)typeof ms[z]=="object"&&Co.exports(ms[z]);return Object.assign(s,ms),s};var Xn=Hf({}),Ff=Xn;Xn.HighlightJS=Xn;Xn.default=Xn;const gs=Ff;function jf(s){const e=s.regex,t=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),n=/[\p{L}0-9._:-]+/u,o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},l={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},r=s.inherit(l,{begin:/\(/,end:/\)/}),i=s.inherit(s.APOS_STRING_MODE,{className:"string"}),a=s.inherit(s.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:n,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[l,a,i,r,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[l,r,a,i]}]}]},s.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Tl="[A-Za-z$_][0-9A-Za-z$_]*",Uf=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],qf=["true","false","null","undefined","NaN","Infinity"],Qi=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Xi=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ji=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Kf=["arguments","this","super","console","window","document","localStorage","module","global"],Wf=[].concat(Ji,Qi,Xi);function Gf(s){const e=s.regex,t=(Q,{after:Y})=>{const ne="</"+Q[0].slice(1);return Q.input.indexOf(ne,Y)!==-1},n=Tl,o={begin:"<>",end:"</>"},l=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(Q,Y)=>{const ne=Q[0].length+Q.index,U=Q.input[ne];if(U==="<"||U===","){Y.ignoreMatch();return}U===">"&&(t(Q,{after:ne})||Y.ignoreMatch());let ge;const ie=Q.input.substring(ne);if(ge=ie.match(/^\s*=/)){Y.ignoreMatch();return}if((ge=ie.match(/^\s+extends\s+/))&&ge.index===0){Y.ignoreMatch();return}}},i={$pattern:Tl,keyword:Uf,literal:qf,built_in:Wf,"variable.language":Kf},a="[0-9](_?[0-9])*",c=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"css"}},k={className:"string",begin:"`",end:"`",contains:[s.BACKSLASH_ESCAPE,d]},w={className:"comment",variants:[s.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE]},$=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,p,_,k,{match:/\$\d+/},f];d.contains=$.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat($)});const x=[].concat(w,d.contains),R=x.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(x)}]),N={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R},y={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,e.concat(n,"(",e.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},D={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Qi,...Xi]}},B={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},G={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},oe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function re(Q){return e.concat("(?!",Q.join("|"),")")}const ue={match:e.concat(/\b/,re([...Ji,"super","import"]),n,e.lookahead(/\(/)),className:"title.function",relevance:0},ve={begin:e.concat(/\./,e.lookahead(e.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},$e={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},Ie="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+s.UNDERSCORE_IDENT_RE+")\\s*=>",z={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Ie)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:D},illegal:/#(?![$_A-z])/,contains:[s.SHEBANG({label:"shebang",binary:"node",relevance:5}),B,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,p,_,k,w,{match:/\$\d+/},f,D,{className:"attr",begin:n+e.lookahead(":"),relevance:0},z,{begin:"("+s.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[w,s.REGEXP_MODE,{className:"function",begin:Ie,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:l},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},G,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+s.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,s.inherit(s.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},ve,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},ue,oe,y,$e,{match:/\$[(.]/}]}}const Zf=s=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:s.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:s.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),Qf=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Xf=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],Jf=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],Yf=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],Vf=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function ed(s){const e=s.regex,t=Zf(s),n={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},o="and or not only",l=/@-?\w[\w]*(-\w+)*/,r="[a-zA-Z-][a-zA-Z0-9_-]*",i=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,n,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+r,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Jf.join("|")+")"},{begin:":(:)?("+Yf.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Vf.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...i,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...i,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:e.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:l},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:o,attribute:Xf.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...i,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Qf.join("|")+")\\b"}]}}const td=s=>({highlighted:s&2}),El=s=>({highlighted:s[1]});function nd(s){let e,t,n=[{"data-language":"svelte"},s[2]],o={};for(let l=0;l<n.length;l+=1)o=_t(o,n[l]);return{c(){e=g("pre"),t=g("code"),m(t,"class","hljs"),rl(e,o),le(e,"langtag",s[0]),le(e,"svelte-d72vtw",!0)},m(l,r){S(l,e,r),h(e,t),t.innerHTML=s[1]},p(l,r){r&2&&(t.innerHTML=l[1]),rl(e,o=cn(n,[{"data-language":"svelte"},r&4&&l[2]])),le(e,"langtag",l[0]),le(e,"svelte-d72vtw",!0)},d(l){l&&E(e)}}}function sd(s){let e;const t=s[5].default,n=Se(t,s,s[4],El),o=n||nd(s);return{c(){o&&o.c()},m(l,r){o&&o.m(l,r),e=!0},p(l,[r]){n?n.p&&(!e||r&18)&&Ae(n,t,l,l[4],e?xe(t,l[4],r,td):Ce(l[4]),El):o&&o.p&&(!e||r&7)&&o.p(l,e?r:-1)},i(l){e||(v(o,l),e=!0)},o(l){T(o,l),e=!1},d(l){o&&o.d(l)}}}function od(s,e,t){let n;const o=["code","langtag"];let l=Ts(e,o),{$$slots:r={},$$scope:i}=e,{code:a}=e,{langtag:c=!1}=e;const u=ko();return gs.registerLanguage("xml",jf),gs.registerLanguage("javascript",Gf),gs.registerLanguage("css",ed),tu(()=>{n&&u("highlight",{highlighted:n})}),s.$$set=f=>{e=_t(_t({},e),hi(f)),t(2,l=Ts(e,o)),"code"in f&&t(3,a=f.code),"langtag"in f&&t(0,c=f.langtag),"$$scope"in f&&t(4,i=f.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(1,n=gs.highlightAuto(a).value)},[c,n,l,a,i,r]}class ld extends W{constructor(e){super(),K(this,e,od,sd,j,{code:3,langtag:0})}}const rd=ld;function id(s){let e,t,n,o;return n=new rd({props:{code:s[0]}}),{c(){e=g("h3"),e.textContent="Code",t=C(),L(n.$$.fragment)},m(l,r){S(l,e,r),S(l,t,r),O(n,l,r),o=!0},p(l,[r]){const i={};r&1&&(i.code=l[0]),n.$set(i)},i(l){o||(v(n.$$.fragment,l),o=!0)},o(l){T(n.$$.fragment,l),o=!1},d(l){l&&E(e),l&&E(t),P(n,l)}}}function ad(s,e,t){let{code:n=""}=e;return s.$$set=o=>{"code"in o&&t(0,n=o.code)},[n]}class st extends W{constructor(e){super(),K(this,e,ad,id,j,{code:0})}}function hn(s){const e=document.title;an(()=>document.title=s),Ls(()=>document.title=e)}const cd=`<div class="component__source">Source <code>Tabs.svelte</code></div>
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
`;function ud(){const s=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||s(e)},an(()=>{console.warn=s})}function Sl(s,e,t){const n=s.slice();return n[18]=e[t],n}function xl(s,e,t){const n=s.slice();return n[18]=e[t],n}function Al(s,e,t){const n=s.slice();return n[10]=e[t],n}function Cl(s,e,t){const n=s.slice();return n[13]=e[t],n[15]=t,n}function Nl(s,e,t){const n=s.slice();return n[16]=e[t],n[15]=t,n}function Ml(s,e,t){const n=s.slice();return n[7]=e[t],n}function fd(s){let e,t,n,o;const l=[md,hd,pd],r=[];function i(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Te()},m(a,c){r[e].m(a,c),S(a,n,c),o=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(de(),T(r[u],1,1,()=>{r[u]=null}),pe(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(n.parentNode,n))},i(a){o||(v(t),o=!0)},o(a){T(t),o=!1},d(a){r[e].d(a),a&&E(n)}}}function dd(s){let e,t,n=s[1],o=[];for(let r=0;r<n.length;r+=1)o[r]=Il(Ml(s,n,r));const l=r=>T(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Te()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);S(r,e,i),t=!0},p(r,i){if(i&34){n=r[1];let a;for(a=0;a<n.length;a+=1){const c=Ml(r,n,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=Il(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(de(),a=n.length;a<o.length;a+=1)l(a);pe()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)T(o[i]);t=!1},d(r){Le(o,r),r&&E(e)}}}function pd(s){let e,t,n;const o=[s[6]];var l=s[5][s[0]];function r(i){let a={$$slots:{default:[bd]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=_t(a,o[c]);return{props:a}}return l&&(e=ze(l,r(s))),{c(){e&&L(e.$$.fragment),t=Te()},m(i,a){e&&O(e,i,a),S(i,t,a),n=!0},p(i,a){const c=a&64?cn(o,[Rn(i[6])]):{};if(a&8388706&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5][i[0]])){if(e){de();const u=e;T(u.$$.fragment,1,0,()=>{P(u,1)}),pe()}l?(e=ze(l,r(i)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){n||(e&&v(e.$$.fragment,i),n=!0)},o(i){e&&T(e.$$.fragment,i),n=!1},d(i){i&&E(t),e&&P(e,i)}}}function hd(s){let e,t,n,o;const l=[vd,$d],r=[];function i(a,c){return a[4]?0:1}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Te()},m(a,c){r[e].m(a,c),S(a,n,c),o=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(de(),T(r[u],1,1,()=>{r[u]=null}),pe(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(n.parentNode,n))},i(a){o||(v(t),o=!0)},o(a){T(t),o=!1},d(a){r[e].d(a),a&&E(n)}}}function md(s){let e,t,n;var o=s[5].table;function l(r){return{props:{$$slots:{default:[Md]},$$scope:{ctx:r}}}}return o&&(e=ze(o,l(s))),{c(){e&&L(e.$$.fragment),t=Te()},m(r,i){e&&O(e,r,i),S(r,t,i),n=!0},p(r,i){const a={};if(i&8388716&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].table)){if(e){de();const c=e;T(c.$$.fragment,1,0,()=>{P(c,1)}),pe()}o?(e=ze(o,l(r)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){n||(e&&v(e.$$.fragment,r),n=!0)},o(r){e&&T(e.$$.fragment,r),n=!1},d(r){r&&E(t),e&&P(e,r)}}}function gd(s){let e=s[6].raw+"",t;return{c(){t=H(e)},m(n,o){S(n,t,o)},p(n,o){o&64&&e!==(e=n[6].raw+"")&&Ze(t,e)},i:q,o:q,d(n){n&&E(t)}}}function _d(s){let e,t;return e=new mn({props:{tokens:s[1],renderers:s[5]}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&2&&(l.tokens=n[1]),o&32&&(l.renderers=n[5]),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function bd(s){let e,t,n,o;const l=[_d,gd],r=[];function i(a,c){return a[1]?0:1}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Te()},m(a,c){r[e].m(a,c),S(a,n,c),o=!0},p(a,c){let u=e;e=i(a),e===u?r[e].p(a,c):(de(),T(r[u],1,1,()=>{r[u]=null}),pe(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(n.parentNode,n))},i(a){o||(v(t),o=!0)},o(a){T(t),o=!1},d(a){r[e].d(a),a&&E(n)}}}function $d(s){let e,t,n;const o=[{ordered:s[4]},s[6]];var l=s[5].list;function r(i){let a={$$slots:{default:[kd]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=_t(a,o[c]);return{props:a}}return l&&(e=ze(l,r(s))),{c(){e&&L(e.$$.fragment),t=Te()},m(i,a){e&&O(e,i,a),S(i,t,a),n=!0},p(i,a){const c=a&80?cn(o,[a&16&&{ordered:i[4]},a&64&&Rn(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].list)){if(e){de();const u=e;T(u.$$.fragment,1,0,()=>{P(u,1)}),pe()}l?(e=ze(l,r(i)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){n||(e&&v(e.$$.fragment,i),n=!0)},o(i){e&&T(e.$$.fragment,i),n=!1},d(i){i&&E(t),e&&P(e,i)}}}function vd(s){let e,t,n;const o=[{ordered:s[4]},s[6]];var l=s[5].list;function r(i){let a={$$slots:{default:[Td]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=_t(a,o[c]);return{props:a}}return l&&(e=ze(l,r(s))),{c(){e&&L(e.$$.fragment),t=Te()},m(i,a){e&&O(e,i,a),S(i,t,a),n=!0},p(i,a){const c=a&80?cn(o,[a&16&&{ordered:i[4]},a&64&&Rn(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].list)){if(e){de();const u=e;T(u.$$.fragment,1,0,()=>{P(u,1)}),pe()}l?(e=ze(l,r(i)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){n||(e&&v(e.$$.fragment,i),n=!0)},o(i){e&&T(e.$$.fragment,i),n=!1},d(i){i&&E(t),e&&P(e,i)}}}function wd(s){let e,t,n;return e=new mn({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){L(e.$$.fragment),t=C()},m(o,l){O(e,o,l),S(o,t,l),n=!0},p(o,l){const r={};l&64&&(r.tokens=o[18].tokens),l&32&&(r.renderers=o[5]),e.$set(r)},i(o){n||(v(e.$$.fragment,o),n=!0)},o(o){T(e.$$.fragment,o),n=!1},d(o){P(e,o),o&&E(t)}}}function Rl(s){let e,t,n;const o=[s[18]];var l=s[5].unorderedlistitem||s[5].listitem;function r(i){let a={$$slots:{default:[wd]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=_t(a,o[c]);return{props:a}}return l&&(e=ze(l,r(s))),{c(){e&&L(e.$$.fragment),t=Te()},m(i,a){e&&O(e,i,a),S(i,t,a),n=!0},p(i,a){const c=a&64?cn(o,[Rn(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].unorderedlistitem||i[5].listitem)){if(e){de();const u=e;T(u.$$.fragment,1,0,()=>{P(u,1)}),pe()}l?(e=ze(l,r(i)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){n||(e&&v(e.$$.fragment,i),n=!0)},o(i){e&&T(e.$$.fragment,i),n=!1},d(i){i&&E(t),e&&P(e,i)}}}function kd(s){let e,t,n=s[6].items,o=[];for(let r=0;r<n.length;r+=1)o[r]=Rl(Sl(s,n,r));const l=r=>T(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Te()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);S(r,e,i),t=!0},p(r,i){if(i&96){n=r[6].items;let a;for(a=0;a<n.length;a+=1){const c=Sl(r,n,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=Rl(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(de(),a=n.length;a<o.length;a+=1)l(a);pe()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)T(o[i]);t=!1},d(r){Le(o,r),r&&E(e)}}}function yd(s){let e,t,n;return e=new mn({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){L(e.$$.fragment),t=C()},m(o,l){O(e,o,l),S(o,t,l),n=!0},p(o,l){const r={};l&64&&(r.tokens=o[18].tokens),l&32&&(r.renderers=o[5]),e.$set(r)},i(o){n||(v(e.$$.fragment,o),n=!0)},o(o){T(e.$$.fragment,o),n=!1},d(o){P(e,o),o&&E(t)}}}function Ol(s){let e,t,n;const o=[s[18]];var l=s[5].orderedlistitem||s[5].listitem;function r(i){let a={$$slots:{default:[yd]},$$scope:{ctx:i}};for(let c=0;c<o.length;c+=1)a=_t(a,o[c]);return{props:a}}return l&&(e=ze(l,r(s))),{c(){e&&L(e.$$.fragment),t=Te()},m(i,a){e&&O(e,i,a),S(i,t,a),n=!0},p(i,a){const c=a&64?cn(o,[Rn(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),l!==(l=i[5].orderedlistitem||i[5].listitem)){if(e){de();const u=e;T(u.$$.fragment,1,0,()=>{P(u,1)}),pe()}l?(e=ze(l,r(i)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else l&&e.$set(c)},i(i){n||(e&&v(e.$$.fragment,i),n=!0)},o(i){e&&T(e.$$.fragment,i),n=!1},d(i){i&&E(t),e&&P(e,i)}}}function Td(s){let e,t,n=s[6].items,o=[];for(let r=0;r<n.length;r+=1)o[r]=Ol(xl(s,n,r));const l=r=>T(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Te()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);S(r,e,i),t=!0},p(r,i){if(i&96){n=r[6].items;let a;for(a=0;a<n.length;a+=1){const c=xl(r,n,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=Ol(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(de(),a=n.length;a<o.length;a+=1)l(a);pe()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)T(o[i]);t=!1},d(r){Le(o,r),r&&E(e)}}}function Ed(s){let e,t,n;return e=new mn({props:{tokens:s[16].tokens,renderers:s[5]}}),{c(){L(e.$$.fragment),t=C()},m(o,l){O(e,o,l),S(o,t,l),n=!0},p(o,l){const r={};l&4&&(r.tokens=o[16].tokens),l&32&&(r.renderers=o[5]),e.$set(r)},i(o){n||(v(e.$$.fragment,o),n=!0)},o(o){T(e.$$.fragment,o),n=!1},d(o){P(e,o),o&&E(t)}}}function Pl(s){let e,t,n;var o=s[5].tablecell;function l(r){return{props:{header:!0,align:r[6].align[r[15]]||"center",$$slots:{default:[Ed]},$$scope:{ctx:r}}}}return o&&(e=ze(o,l(s))),{c(){e&&L(e.$$.fragment),t=Te()},m(r,i){e&&O(e,r,i),S(r,t,i),n=!0},p(r,i){const a={};if(i&64&&(a.align=r[6].align[r[15]]||"center"),i&8388644&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablecell)){if(e){de();const c=e;T(c.$$.fragment,1,0,()=>{P(c,1)}),pe()}o?(e=ze(o,l(r)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){n||(e&&v(e.$$.fragment,r),n=!0)},o(r){e&&T(e.$$.fragment,r),n=!1},d(r){r&&E(t),e&&P(e,r)}}}function Sd(s){let e,t,n=s[2],o=[];for(let r=0;r<n.length;r+=1)o[r]=Pl(Nl(s,n,r));const l=r=>T(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Te()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);S(r,e,i),t=!0},p(r,i){if(i&100){n=r[2];let a;for(a=0;a<n.length;a+=1){const c=Nl(r,n,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=Pl(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(de(),a=n.length;a<o.length;a+=1)l(a);pe()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)T(o[i]);t=!1},d(r){Le(o,r),r&&E(e)}}}function xd(s){let e,t,n;var o=s[5].tablerow;function l(r){return{props:{$$slots:{default:[Sd]},$$scope:{ctx:r}}}}return o&&(e=ze(o,l(s))),{c(){e&&L(e.$$.fragment),t=Te()},m(r,i){e&&O(e,r,i),S(r,t,i),n=!0},p(r,i){const a={};if(i&8388708&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablerow)){if(e){de();const c=e;T(c.$$.fragment,1,0,()=>{P(c,1)}),pe()}o?(e=ze(o,l(r)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){n||(e&&v(e.$$.fragment,r),n=!0)},o(r){e&&T(e.$$.fragment,r),n=!1},d(r){r&&E(t),e&&P(e,r)}}}function Ad(s){let e,t;return e=new mn({props:{tokens:s[13].tokens,renderers:s[5]}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&8&&(l.tokens=n[13].tokens),o&32&&(l.renderers=n[5]),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Ll(s){let e,t,n;var o=s[5].tablecell;function l(r){return{props:{header:!1,align:r[6].align[r[15]]||"center",$$slots:{default:[Ad]},$$scope:{ctx:r}}}}return o&&(e=ze(o,l(s))),{c(){e&&L(e.$$.fragment),t=Te()},m(r,i){e&&O(e,r,i),S(r,t,i),n=!0},p(r,i){const a={};if(i&64&&(a.align=r[6].align[r[15]]||"center"),i&8388648&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablecell)){if(e){de();const c=e;T(c.$$.fragment,1,0,()=>{P(c,1)}),pe()}o?(e=ze(o,l(r)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){n||(e&&v(e.$$.fragment,r),n=!0)},o(r){e&&T(e.$$.fragment,r),n=!1},d(r){r&&E(t),e&&P(e,r)}}}function Cd(s){let e,t,n=s[10],o=[];for(let r=0;r<n.length;r+=1)o[r]=Ll(Cl(s,n,r));const l=r=>T(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=C()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);S(r,e,i),t=!0},p(r,i){if(i&104){n=r[10];let a;for(a=0;a<n.length;a+=1){const c=Cl(r,n,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=Ll(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(de(),a=n.length;a<o.length;a+=1)l(a);pe()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)T(o[i]);t=!1},d(r){Le(o,r),r&&E(e)}}}function Dl(s){let e,t,n;var o=s[5].tablerow;function l(r){return{props:{$$slots:{default:[Cd]},$$scope:{ctx:r}}}}return o&&(e=ze(o,l(s))),{c(){e&&L(e.$$.fragment),t=Te()},m(r,i){e&&O(e,r,i),S(r,t,i),n=!0},p(r,i){const a={};if(i&8388712&&(a.$$scope={dirty:i,ctx:r}),o!==(o=r[5].tablerow)){if(e){de();const c=e;T(c.$$.fragment,1,0,()=>{P(c,1)}),pe()}o?(e=ze(o,l(r)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else o&&e.$set(a)},i(r){n||(e&&v(e.$$.fragment,r),n=!0)},o(r){e&&T(e.$$.fragment,r),n=!1},d(r){r&&E(t),e&&P(e,r)}}}function Nd(s){let e,t,n=s[3],o=[];for(let r=0;r<n.length;r+=1)o[r]=Dl(Al(s,n,r));const l=r=>T(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=Te()},m(r,i){for(let a=0;a<o.length;a+=1)o[a].m(r,i);S(r,e,i),t=!0},p(r,i){if(i&104){n=r[3];let a;for(a=0;a<n.length;a+=1){const c=Al(r,n,a);o[a]?(o[a].p(c,i),v(o[a],1)):(o[a]=Dl(c),o[a].c(),v(o[a],1),o[a].m(e.parentNode,e))}for(de(),a=n.length;a<o.length;a+=1)l(a);pe()}},i(r){if(!t){for(let i=0;i<n.length;i+=1)v(o[i]);t=!0}},o(r){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)T(o[i]);t=!1},d(r){Le(o,r),r&&E(e)}}}function Md(s){let e,t,n,o,l;var r=s[5].tablehead;function i(u){return{props:{$$slots:{default:[xd]},$$scope:{ctx:u}}}}r&&(e=ze(r,i(s)));var a=s[5].tablebody;function c(u){return{props:{$$slots:{default:[Nd]},$$scope:{ctx:u}}}}return a&&(n=ze(a,c(s))),{c(){e&&L(e.$$.fragment),t=C(),n&&L(n.$$.fragment),o=Te()},m(u,f){e&&O(e,u,f),S(u,t,f),n&&O(n,u,f),S(u,o,f),l=!0},p(u,f){const d={};if(f&8388708&&(d.$$scope={dirty:f,ctx:u}),r!==(r=u[5].tablehead)){if(e){de();const _=e;T(_.$$.fragment,1,0,()=>{P(_,1)}),pe()}r?(e=ze(r,i(u)),L(e.$$.fragment),v(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else r&&e.$set(d);const p={};if(f&8388712&&(p.$$scope={dirty:f,ctx:u}),a!==(a=u[5].tablebody)){if(n){de();const _=n;T(_.$$.fragment,1,0,()=>{P(_,1)}),pe()}a?(n=ze(a,c(u)),L(n.$$.fragment),v(n.$$.fragment,1),O(n,o.parentNode,o)):n=null}else a&&n.$set(p)},i(u){l||(e&&v(e.$$.fragment,u),n&&v(n.$$.fragment,u),l=!0)},o(u){e&&T(e.$$.fragment,u),n&&T(n.$$.fragment,u),l=!1},d(u){e&&P(e,u),u&&E(t),u&&E(o),n&&P(n,u)}}}function Il(s){let e,t;const n=[s[7],{renderers:s[5]}];let o={};for(let l=0;l<n.length;l+=1)o=_t(o,n[l]);return e=new mn({props:o}),{c(){L(e.$$.fragment)},m(l,r){O(e,l,r),t=!0},p(l,r){const i=r&34?cn(n,[r&2&&Rn(l[7]),r&32&&{renderers:l[5]}]):{};e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Rd(s){let e,t,n,o;const l=[dd,fd],r=[];function i(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=i(s))&&(t=r[e]=l[e](s)),{c(){t&&t.c(),n=Te()},m(a,c){~e&&r[e].m(a,c),S(a,n,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?~e&&r[e].p(a,c):(t&&(de(),T(r[u],1,1,()=>{r[u]=null}),pe()),~e?(t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(n.parentNode,n)):t=null)},i(a){o||(v(t),o=!0)},o(a){T(t),o=!1},d(a){~e&&r[e].d(a),a&&E(n)}}}function Od(s,e,t){const n=["type","tokens","header","rows","ordered","renderers"];let o=Ts(e,n),{type:l=void 0}=e,{tokens:r=void 0}=e,{header:i=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return ud(),s.$$set=f=>{e=_t(_t({},e),hi(f)),t(6,o=Ts(e,n)),"type"in f&&t(0,l=f.type),"tokens"in f&&t(1,r=f.tokens),"header"in f&&t(2,i=f.header),"rows"in f&&t(3,a=f.rows),"ordered"in f&&t(4,c=f.ordered),"renderers"in f&&t(5,u=f.renderers)},[l,r,i,a,c,u,o]}let mn=class extends W{constructor(e){super(),K(this,e,Od,Rd,j,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}};function Yi(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Pn=Yi();function Pd(s){Pn=s}const Vi=/[&<>"']/,Ld=new RegExp(Vi.source,"g"),ea=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Dd=new RegExp(ea.source,"g"),Id={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Bl=s=>Id[s];function nt(s,e){if(e){if(Vi.test(s))return s.replace(Ld,Bl)}else if(ea.test(s))return s.replace(Dd,Bl);return s}const Bd=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ta(s){return s.replace(Bd,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const zd=/(^|[^\[])\^/g;function De(s,e){s=typeof s=="string"?s:s.source,e=e||"";const t={replace:(n,o)=>(o=o.source||o,o=o.replace(zd,"$1"),s=s.replace(n,o),t),getRegex:()=>new RegExp(s,e)};return t}const Hd=/[^\w:]/g,Fd=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function zl(s,e,t){if(s){let n;try{n=decodeURIComponent(ta(t)).replace(Hd,"").toLowerCase()}catch(o){return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!Fd.test(t)&&(t=Kd(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(n){return null}return t}const _s={},jd=/^[^:]+:\/*[^/]*$/,Ud=/^([^:]+:)[\s\S]*$/,qd=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Kd(s,e){_s[" "+s]||(jd.test(s)?_s[" "+s]=s+"/":_s[" "+s]=ks(s,"/",!0)),s=_s[" "+s];const t=s.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:s.replace(Ud,"$1")+e:e.charAt(0)==="/"?t?e:s.replace(qd,"$1")+e:s+e}const Ns={exec:function(){}};function yt(s){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s}function Hl(s,e){const t=s.replace(/\|/g,(l,r,i)=>{let a=!1,c=r;for(;--c>=0&&i[c]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let o=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;o<n.length;o++)n[o]=n[o].trim().replace(/\\\|/g,"|");return n}function ks(s,e,t){const n=s.length;if(n===0)return"";let o=0;for(;o<n;){const l=s.charAt(n-o-1);if(l===e&&!t)o++;else if(l!==e&&t)o++;else break}return s.slice(0,n-o)}function Wd(s,e){if(s.indexOf(e[1])===-1)return-1;const t=s.length;let n=0,o=0;for(;o<t;o++)if(s[o]==="\\")o++;else if(s[o]===e[0])n++;else if(s[o]===e[1]&&(n--,n<0))return o;return-1}function na(s){s&&s.sanitize&&!s.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Fl(s,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=s),e>>=1,s+=s;return t+s}function jl(s,e,t,n){const o=e.href,l=e.title?nt(e.title):null,r=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){n.state.inLink=!0;const i={type:"link",raw:t,href:o,title:l,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,i}return{type:"image",raw:t,href:o,title:l,text:nt(r)}}function Gd(s,e){const t=s.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(o=>{const l=o.match(/^\s+/);if(l===null)return o;const[r]=l;return r.length>=n.length?o.slice(n.length):o}).join(`
`)}class Lo{constructor(e){this.options=e||Pn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ks(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],o=Gd(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:o}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const o=ks(n,"#");(this.options.pedantic||!o||/ $/.test(o))&&(n=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,""),o=this.lexer.state.top;this.lexer.state.top=!0;const l=this.lexer.blockTokens(n);return this.lexer.state.top=o,{type:"blockquote",raw:t[0],tokens:l,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,o,l,r,i,a,c,u,f,d,p,_,k=t[1].trim();const A=k.length>1,w={type:"list",raw:"",ordered:A,start:A?+k.slice(0,-1):"",loose:!1,items:[]};k=A?`\\d{1,9}\\${k.slice(-1)}`:`\\${k}`,this.options.pedantic&&(k=A?k:"[*+-]");const $=new RegExp(`^( {0,3}${k})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(_=!1,!(!(t=$.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,R=>" ".repeat(3*R.length)),f=e.split(`
`,1)[0],this.options.pedantic?(r=2,p=u.trimLeft()):(r=t[2].search(/[^ ]/),r=r>4?1:r,p=u.slice(r),r+=t[1].length),a=!1,!u&&/^ *$/.test(f)&&(n+=f+`
`,e=e.substring(f.length+1),_=!0),!_){const R=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),N=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),y=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),D=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],f=d,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(y.test(f)||D.test(f)||R.test(f)||N.test(e)));){if(f.search(/[^ ]/)>=r||!f.trim())p+=`
`+f.slice(r);else{if(a||u.search(/[^ ]/)>=4||y.test(u)||D.test(u)||N.test(u))break;p+=`
`+f}!a&&!f.trim()&&(a=!0),n+=d+`
`,e=e.substring(d.length+1),u=f.slice(r)}}w.loose||(c?w.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(p),o&&(l=o[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),w.items.push({type:"list_item",raw:n,task:!!o,checked:l,loose:!1,text:p}),w.raw+=n}w.items[w.items.length-1].raw=n.trimRight(),w.items[w.items.length-1].text=p.trimRight(),w.raw=w.raw.trimRight();const x=w.items.length;for(i=0;i<x;i++)if(this.lexer.state.top=!1,w.items[i].tokens=this.lexer.blockTokens(w.items[i].text,[]),!w.loose){const R=w.items[i].tokens.filter(y=>y.type==="space"),N=R.length>0&&R.some(y=>/\n.*\n/.test(y.raw));w.loose=N}if(w.loose)for(i=0;i<x;i++)w.items[i].loose=!0;return w}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const o=this.options.sanitizer?this.options.sanitizer(t[0]):nt(t[0]);n.type="paragraph",n.text=o,n.tokens=this.lexer.inline(o)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",l=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:o,title:l}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:Hl(t[1]).map(o=>({text:o})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let o=n.align.length,l,r,i,a;for(l=0;l<o;l++)/^ *-+: *$/.test(n.align[l])?n.align[l]="right":/^ *:-+: *$/.test(n.align[l])?n.align[l]="center":/^ *:-+ *$/.test(n.align[l])?n.align[l]="left":n.align[l]=null;for(o=n.rows.length,l=0;l<o;l++)n.rows[l]=Hl(n.rows[l],n.header.length).map(c=>({text:c}));for(o=n.header.length,r=0;r<o;r++)n.header[r].tokens=this.lexer.inline(n.header[r].text);for(o=n.rows.length,r=0;r<o;r++)for(a=n.rows[r],i=0;i<a.length;i++)a[i].tokens=this.lexer.inline(a[i].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:nt(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):nt(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=ks(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=Wd(t[2],"()");if(r>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let o=t[2],l="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);r&&(o=r[1],l=r[3])}else l=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(n)?o=o.slice(1):o=o.slice(1,-1)),jl(t,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:l&&l.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let o=(n[2]||n[1]).replace(/\s+/g," ");if(o=t[o.toLowerCase()],!o){const l=n[0].charAt(0);return{type:"text",raw:l,text:l}}return jl(n,o,n[0],this.lexer)}}emStrong(e,t,n=""){let o=this.rules.inline.emStrong.lDelim.exec(e);if(!o||o[3]&&n.match(/[\p{L}\p{N}]/u))return;const l=o[1]||o[2]||"";if(!l||l&&(n===""||this.rules.inline.punctuation.exec(n))){const r=o[0].length-1;let i,a,c=r,u=0;const f=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+r);(o=f.exec(t))!=null;){if(i=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!i)continue;if(a=i.length,o[3]||o[4]){c+=a;continue}else if((o[5]||o[6])&&r%3&&!((r+a)%3)){u+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+u);const d=e.slice(0,r+o.index+(o[0].length-i.length)+a);if(Math.min(r,a)%2){const _=d.slice(1,-1);return{type:"em",raw:d,text:_,tokens:this.lexer.inlineTokens(_)}}const p=d.slice(2,-2);return{type:"strong",raw:d,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const o=/[^ ]/.test(n),l=/^ /.test(n)&&/ $/.test(n);return o&&l&&(n=n.substring(1,n.length-1)),n=nt(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let o,l;return n[2]==="@"?(o=nt(this.options.mangle?t(n[1]):n[1]),l="mailto:"+o):(o=nt(n[1]),l=o),{type:"link",raw:n[0],text:o,href:l,tokens:[{type:"text",raw:o,text:o}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let o,l;if(n[2]==="@")o=nt(this.options.mangle?t(n[0]):n[0]),l="mailto:"+o;else{let r;do r=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(r!==n[0]);o=nt(n[0]),n[1]==="www."?l="http://"+n[0]:l=n[0]}return{type:"link",raw:n[0],text:o,href:l,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let o;return this.lexer.state.inRawBlock?o=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):nt(n[0]):n[0]:o=nt(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:o}}}}const ce={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ns,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};ce._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;ce._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;ce.def=De(ce.def).replace("label",ce._label).replace("title",ce._title).getRegex();ce.bullet=/(?:[*+-]|\d{1,9}[.)])/;ce.listItemStart=De(/^( *)(bull) */).replace("bull",ce.bullet).getRegex();ce.list=De(ce.list).replace(/bull/g,ce.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+ce.def.source+")").getRegex();ce._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";ce._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;ce.html=De(ce.html,"i").replace("comment",ce._comment).replace("tag",ce._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();ce.paragraph=De(ce._paragraph).replace("hr",ce.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ce._tag).getRegex();ce.blockquote=De(ce.blockquote).replace("paragraph",ce.paragraph).getRegex();ce.normal=yt({},ce);ce.gfm=yt({},ce.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});ce.gfm.table=De(ce.gfm.table).replace("hr",ce.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ce._tag).getRegex();ce.gfm.paragraph=De(ce._paragraph).replace("hr",ce.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",ce.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ce._tag).getRegex();ce.pedantic=yt({},ce.normal,{html:De(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ce._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ns,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:De(ce.normal._paragraph).replace("hr",ce.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ce.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const te={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ns,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ns,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};te._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";te.punctuation=De(te.punctuation).replace(/punctuation/g,te._punctuation).getRegex();te.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;te.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;te._comment=De(ce._comment).replace("(?:-->|$)","-->").getRegex();te.emStrong.lDelim=De(te.emStrong.lDelim).replace(/punct/g,te._punctuation).getRegex();te.emStrong.rDelimAst=De(te.emStrong.rDelimAst,"g").replace(/punct/g,te._punctuation).getRegex();te.emStrong.rDelimUnd=De(te.emStrong.rDelimUnd,"g").replace(/punct/g,te._punctuation).getRegex();te._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;te._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;te._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;te.autolink=De(te.autolink).replace("scheme",te._scheme).replace("email",te._email).getRegex();te._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;te.tag=De(te.tag).replace("comment",te._comment).replace("attribute",te._attribute).getRegex();te._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;te._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;te._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;te.link=De(te.link).replace("label",te._label).replace("href",te._href).replace("title",te._title).getRegex();te.reflink=De(te.reflink).replace("label",te._label).replace("ref",ce._label).getRegex();te.nolink=De(te.nolink).replace("ref",ce._label).getRegex();te.reflinkSearch=De(te.reflinkSearch,"g").replace("reflink",te.reflink).replace("nolink",te.nolink).getRegex();te.normal=yt({},te);te.pedantic=yt({},te.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:De(/^!?\[(label)\]\((.*?)\)/).replace("label",te._label).getRegex(),reflink:De(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",te._label).getRegex()});te.gfm=yt({},te.normal,{escape:De(te.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});te.gfm.url=De(te.gfm.url,"i").replace("email",te.gfm._extended_email).getRegex();te.breaks=yt({},te.gfm,{br:De(te.br).replace("{2,}","*").getRegex(),text:De(te.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Zd(s){return s.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Ul(s){let e="",t,n;const o=s.length;for(t=0;t<o;t++)n=s.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class Rt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Pn,this.options.tokenizer=this.options.tokenizer||new Lo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ce.normal,inline:te.normal};this.options.pedantic?(t.block=ce.pedantic,t.inline=te.pedantic):this.options.gfm&&(t.block=ce.gfm,this.options.breaks?t.inline=te.breaks:t.inline=te.gfm),this.tokenizer.rules=t}static get rules(){return{block:ce,inline:te}}static lex(e,t){return new Rt(t).lex(e)}static lexInline(e,t){return new Rt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(i,a,c)=>a+"    ".repeat(c.length));let n,o,l,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(i=>(n=i.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+n.raw,o.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+n.raw,o.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(l=e,this.options.extensions&&this.options.extensions.startBlock){let i=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(i=Math.min(i,c))}),i<1/0&&i>=0&&(l=e.substring(0,i+1))}if(this.state.top&&(n=this.tokenizer.paragraph(l))){o=t[t.length-1],r&&o.type==="paragraph"?(o.raw+=`
`+n.raw,o.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(n),r=l.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+n.raw,o.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(n);continue}if(e){const i="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,o,l,r=e,i,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+Fl("a",i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+Fl("a",i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(r))!=null;)r=r.slice(0,i.index+i[0].length-2)+"++"+r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),o=t[t.length-1],o&&n.type==="text"&&o.type==="text"?(o.raw+=n.raw,o.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),o=t[t.length-1],o&&n.type==="text"&&o.type==="text"?(o.raw+=n.raw,o.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,Ul)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,Ul))){e=e.substring(n.raw.length),t.push(n);continue}if(l=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let d;this.options.extensions.startInline.forEach(function(p){d=p.call({lexer:this},f),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(l=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(l,Zd)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),a=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=n.raw,o.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Do{constructor(e){this.options=e||Pn}code(e,t,n){const o=(t||"").match(/\S*/)[0];if(this.options.highlight){const l=this.options.highlight(e,o);l!=null&&l!==e&&(n=!0,e=l)}return e=e.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+nt(o)+'">'+(n?e:nt(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:nt(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=zl(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let o='<a href="'+e+'"';return t&&(o+=' title="'+t+'"'),o+=">"+n+"</a>",o}image(e,t,n){if(e=zl(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${t}"`),o+=this.options.xhtml?"/>":">",o}text(e){return e}}class sa{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class Io{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,o=0;if(this.seen.hasOwnProperty(n)){o=this.seen[e];do o++,n=e+"-"+o;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=o,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class Ct{constructor(e){this.options=e||Pn,this.options.renderer=this.options.renderer||new Do,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new sa,this.slugger=new Io}static parse(e,t){return new Ct(t).parse(e)}static parseInline(e,t){return new Ct(t).parseInline(e)}parse(e,t=!0){let n="",o,l,r,i,a,c,u,f,d,p,_,k,A,w,$,x,R,N,y;const D=e.length;for(o=0;o<D;o++){if(p=e[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(y=this.options.extensions.renderers[p.type].call({parser:this},p),y!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){n+=y||"";continue}switch(p.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(p.tokens),p.depth,ta(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(f="",u="",i=p.header.length,l=0;l<i;l++)u+=this.renderer.tablecell(this.parseInline(p.header[l].tokens),{header:!0,align:p.align[l]});for(f+=this.renderer.tablerow(u),d="",i=p.rows.length,l=0;l<i;l++){for(c=p.rows[l],u="",a=c.length,r=0;r<a;r++)u+=this.renderer.tablecell(this.parseInline(c[r].tokens),{header:!1,align:p.align[r]});d+=this.renderer.tablerow(u)}n+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(p.tokens),n+=this.renderer.blockquote(d);continue}case"list":{for(_=p.ordered,k=p.start,A=p.loose,i=p.items.length,d="",l=0;l<i;l++)$=p.items[l],x=$.checked,R=$.task,w="",$.task&&(N=this.renderer.checkbox(x),A?$.tokens.length>0&&$.tokens[0].type==="paragraph"?($.tokens[0].text=N+" "+$.tokens[0].text,$.tokens[0].tokens&&$.tokens[0].tokens.length>0&&$.tokens[0].tokens[0].type==="text"&&($.tokens[0].tokens[0].text=N+" "+$.tokens[0].tokens[0].text)):$.tokens.unshift({type:"text",text:N}):w+=N),w+=this.parse($.tokens,A),d+=this.renderer.listitem(w,R,x);n+=this.renderer.list(d,_,k);continue}case"html":{n+=this.renderer.html(p.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(d=p.tokens?this.parseInline(p.tokens):p.text;o+1<D&&e[o+1].type==="text";)p=e[++o],d+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);n+=t?this.renderer.paragraph(d):d;continue}default:{const B='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(B);return}else throw new Error(B)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",o,l,r;const i=e.length;for(o=0;o<i;o++){if(l=e[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]&&(r=this.options.extensions.renderers[l.type].call({parser:this},l),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type))){n+=r||"";continue}switch(l.type){case"escape":{n+=t.text(l.text);break}case"html":{n+=t.html(l.text);break}case"link":{n+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{n+=t.image(l.href,l.title,l.text);break}case"strong":{n+=t.strong(this.parseInline(l.tokens,t));break}case"em":{n+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{n+=t.codespan(l.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(l.tokens,t));break}case"text":{n+=t.text(l.text);break}default:{const a='Token with "'+l.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return n}}function he(s,e,t){if(typeof s=="undefined"||s===null)throw new Error("marked(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=yt({},he.defaults,e||{}),na(e),t){const o=e.highlight;let l;try{l=Rt.lex(s,e)}catch(a){return t(a)}const r=function(a){let c;if(!a)try{e.walkTokens&&he.walkTokens(l,e.walkTokens),c=Ct.parse(l,e)}catch(u){a=u}return e.highlight=o,a?t(a):t(null,c)};if(!o||o.length<3||(delete e.highlight,!l.length))return r();let i=0;he.walkTokens(l,function(a){a.type==="code"&&(i++,setTimeout(()=>{o(a.text,a.lang,function(c,u){if(c)return r(c);u!=null&&u!==a.text&&(a.text=u,a.escaped=!0),i--,i===0&&r()})},0))}),i===0&&r();return}function n(o){if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+nt(o.message+"",!0)+"</pre>";throw o}try{const o=Rt.lex(s,e);if(e.walkTokens){if(e.async)return Promise.all(he.walkTokens(o,e.walkTokens)).then(()=>Ct.parse(o,e)).catch(n);he.walkTokens(o,e.walkTokens)}return Ct.parse(o,e)}catch(o){n(o)}}he.options=he.setOptions=function(s){return yt(he.defaults,s),Pd(he.defaults),he};he.getDefaults=Yi;he.defaults=Pn;he.use=function(...s){const e=he.defaults.extensions||{renderers:{},childTokens:{}};s.forEach(t=>{const n=yt({},t);if(n.async=he.defaults.async||n.async,t.extensions&&(t.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const l=e.renderers[o.name];l?e.renderers[o.name]=function(...r){let i=o.renderer.apply(this,r);return i===!1&&(i=l.apply(this,r)),i}:e.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[o.level]?e[o.level].unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),n.extensions=e),t.renderer){const o=he.defaults.renderer||new Do;for(const l in t.renderer){const r=o[l];o[l]=(...i)=>{let a=t.renderer[l].apply(o,i);return a===!1&&(a=r.apply(o,i)),a}}n.renderer=o}if(t.tokenizer){const o=he.defaults.tokenizer||new Lo;for(const l in t.tokenizer){const r=o[l];o[l]=(...i)=>{let a=t.tokenizer[l].apply(o,i);return a===!1&&(a=r.apply(o,i)),a}}n.tokenizer=o}if(t.walkTokens){const o=he.defaults.walkTokens;n.walkTokens=function(l){let r=[];return r.push(t.walkTokens.call(this,l)),o&&(r=r.concat(o.call(this,l))),r}}he.setOptions(n)})};he.walkTokens=function(s,e){let t=[];for(const n of s)switch(t=t.concat(e.call(he,n)),n.type){case"table":{for(const o of n.header)t=t.concat(he.walkTokens(o.tokens,e));for(const o of n.rows)for(const l of o)t=t.concat(he.walkTokens(l.tokens,e));break}case"list":{t=t.concat(he.walkTokens(n.items,e));break}default:he.defaults.extensions&&he.defaults.extensions.childTokens&&he.defaults.extensions.childTokens[n.type]?he.defaults.extensions.childTokens[n.type].forEach(function(o){t=t.concat(he.walkTokens(n[o],e))}):n.tokens&&(t=t.concat(he.walkTokens(n.tokens,e)))}return t};he.parseInline=function(s,e){if(typeof s=="undefined"||s===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");e=yt({},he.defaults,e||{}),na(e);try{const t=Rt.lexInline(s,e);return e.walkTokens&&he.walkTokens(t,e.walkTokens),Ct.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+nt(t.message+"",!0)+"</pre>";throw t}};he.Parser=Ct;he.parser=Ct.parse;he.Renderer=Do;he.TextRenderer=sa;he.Lexer=Rt;he.lexer=Rt.lex;he.Tokenizer=Lo;he.Slugger=Io;he.parse=he;he.options;he.setOptions;he.use;he.walkTokens;he.parseInline;Ct.parse;Rt.lex;const oa={};function Qd(s){let e;return{c(){e=H(s[1])},m(t,n){S(t,e,n)},p(t,n){n&2&&Ze(e,t[1])},i:q,o:q,d(t){t&&E(e)}}}function Xd(s){let e,t;const n=s[5].default,o=Se(n,s,s[4],null);return{c(){e=g("h6"),o&&o.c(),m(e,"id",s[2])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Ae(o,n,l,l[4],t?xe(n,l[4],r,null):Ce(l[4]),null),(!t||r&4)&&m(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Jd(s){let e,t;const n=s[5].default,o=Se(n,s,s[4],null);return{c(){e=g("h5"),o&&o.c(),m(e,"id",s[2])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Ae(o,n,l,l[4],t?xe(n,l[4],r,null):Ce(l[4]),null),(!t||r&4)&&m(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Yd(s){let e,t;const n=s[5].default,o=Se(n,s,s[4],null);return{c(){e=g("h4"),o&&o.c(),m(e,"id",s[2])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Ae(o,n,l,l[4],t?xe(n,l[4],r,null):Ce(l[4]),null),(!t||r&4)&&m(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Vd(s){let e,t;const n=s[5].default,o=Se(n,s,s[4],null);return{c(){e=g("h3"),o&&o.c(),m(e,"id",s[2])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Ae(o,n,l,l[4],t?xe(n,l[4],r,null):Ce(l[4]),null),(!t||r&4)&&m(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function ep(s){let e,t;const n=s[5].default,o=Se(n,s,s[4],null);return{c(){e=g("h2"),o&&o.c(),m(e,"id",s[2])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Ae(o,n,l,l[4],t?xe(n,l[4],r,null):Ce(l[4]),null),(!t||r&4)&&m(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function tp(s){let e,t;const n=s[5].default,o=Se(n,s,s[4],null);return{c(){e=g("h1"),o&&o.c(),m(e,"id",s[2])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&16)&&Ae(o,n,l,l[4],t?xe(n,l[4],r,null):Ce(l[4]),null),(!t||r&4)&&m(e,"id",l[2])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function np(s){let e,t,n,o;const l=[tp,ep,Vd,Yd,Jd,Xd,Qd],r=[];function i(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Te()},m(a,c){r[e].m(a,c),S(a,n,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(de(),T(r[u],1,1,()=>{r[u]=null}),pe(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(n.parentNode,n))},i(a){o||(v(t),o=!0)},o(a){T(t),o=!1},d(a){r[e].d(a),a&&E(n)}}}function sp(s,e,t){let n,{$$slots:o={},$$scope:l}=e,{depth:r}=e,{raw:i}=e,{text:a}=e;const{slug:c,getOptions:u}=Ds(oa),f=u();return s.$$set=d=>{"depth"in d&&t(0,r=d.depth),"raw"in d&&t(1,i=d.raw),"text"in d&&t(3,a=d.text),"$$scope"in d&&t(4,l=d.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(2,n=f.headerIds?f.headerPrefix+c(a):void 0)},[r,i,n,a,l,o]}class op extends W{constructor(e){super(),K(this,e,sp,np,j,{depth:0,raw:1,text:3})}}function lp(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("p"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function rp(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class ip extends W{constructor(e){super(),K(this,e,rp,lp,j,{})}}function ap(s){let e;const t=s[3].default,n=Se(t,s,s[2],null);return{c(){n&&n.c()},m(o,l){n&&n.m(o,l),e=!0},p(o,[l]){n&&n.p&&(!e||l&4)&&Ae(n,t,o,o[2],e?xe(t,o[2],l,null):Ce(o[2]),null)},i(o){e||(v(n,o),e=!0)},o(o){T(n,o),e=!1},d(o){n&&n.d(o)}}}function cp(s,e,t){let{$$slots:n={},$$scope:o}=e,{text:l}=e,{raw:r}=e;return s.$$set=i=>{"text"in i&&t(0,l=i.text),"raw"in i&&t(1,r=i.raw),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,n]}class up extends W{constructor(e){super(),K(this,e,cp,ap,j,{text:0,raw:1})}}function fp(s){let e,t;return{c(){e=g("img"),Cn(e.src,t=s[0])||m(e,"src",t),m(e,"title",s[1]),m(e,"alt",s[2])},m(n,o){S(n,e,o)},p(n,[o]){o&1&&!Cn(e.src,t=n[0])&&m(e,"src",t),o&2&&m(e,"title",n[1]),o&4&&m(e,"alt",n[2])},i:q,o:q,d(n){n&&E(e)}}}function dp(s,e,t){let{href:n=""}=e,{title:o=void 0}=e,{text:l=""}=e;return s.$$set=r=>{"href"in r&&t(0,n=r.href),"title"in r&&t(1,o=r.title),"text"in r&&t(2,l=r.text)},[n,o,l]}class pp extends W{constructor(e){super(),K(this,e,dp,fp,j,{href:0,title:1,text:2})}}function hp(s){let e,t;const n=s[3].default,o=Se(n,s,s[2],null);return{c(){e=g("a"),o&&o.c(),m(e,"href",s[0]),m(e,"title",s[1])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&4)&&Ae(o,n,l,l[2],t?xe(n,l[2],r,null):Ce(l[2]),null),(!t||r&1)&&m(e,"href",l[0]),(!t||r&2)&&m(e,"title",l[1])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function mp(s,e,t){let{$$slots:n={},$$scope:o}=e,{href:l=""}=e,{title:r=void 0}=e;return s.$$set=i=>{"href"in i&&t(0,l=i.href),"title"in i&&t(1,r=i.title),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,n]}class gp extends W{constructor(e){super(),K(this,e,mp,hp,j,{href:0,title:1})}}function _p(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("em"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function bp(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class $p extends W{constructor(e){super(),K(this,e,bp,_p,j,{})}}function vp(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("del"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function wp(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class kp extends W{constructor(e){super(),K(this,e,wp,vp,j,{})}}function yp(s){let e,t=s[0].replace(/`/g,"")+"",n;return{c(){e=g("code"),n=H(t)},m(o,l){S(o,e,l),h(e,n)},p(o,[l]){l&1&&t!==(t=o[0].replace(/`/g,"")+"")&&Ze(n,t)},i:q,o:q,d(o){o&&E(e)}}}function Tp(s,e,t){let{raw:n}=e;return s.$$set=o=>{"raw"in o&&t(0,n=o.raw)},[n]}class Ep extends W{constructor(e){super(),K(this,e,Tp,yp,j,{raw:0})}}function Sp(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("strong"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function xp(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Ap extends W{constructor(e){super(),K(this,e,xp,Sp,j,{})}}function Cp(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("table"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Np(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Mp extends W{constructor(e){super(),K(this,e,Np,Cp,j,{})}}function Rp(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("thead"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Op(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Pp extends W{constructor(e){super(),K(this,e,Op,Rp,j,{})}}function Lp(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("tbody"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Dp(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Ip extends W{constructor(e){super(),K(this,e,Dp,Lp,j,{})}}function Bp(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("tr"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function zp(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Hp extends W{constructor(e){super(),K(this,e,zp,Bp,j,{})}}function Fp(s){let e,t;const n=s[3].default,o=Se(n,s,s[2],null);return{c(){e=g("td"),o&&o.c(),m(e,"align",s[1])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&Ae(o,n,l,l[2],t?xe(n,l[2],r,null):Ce(l[2]),null),(!t||r&2)&&m(e,"align",l[1])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function jp(s){let e,t;const n=s[3].default,o=Se(n,s,s[2],null);return{c(){e=g("th"),o&&o.c(),m(e,"align",s[1])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&Ae(o,n,l,l[2],t?xe(n,l[2],r,null):Ce(l[2]),null),(!t||r&2)&&m(e,"align",l[1])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Up(s){let e,t,n,o;const l=[jp,Fp],r=[];function i(a,c){return a[0]?0:1}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Te()},m(a,c){r[e].m(a,c),S(a,n,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(de(),T(r[u],1,1,()=>{r[u]=null}),pe(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(n.parentNode,n))},i(a){o||(v(t),o=!0)},o(a){T(t),o=!1},d(a){r[e].d(a),a&&E(n)}}}function qp(s,e,t){let{$$slots:n={},$$scope:o}=e,{header:l}=e,{align:r}=e;return s.$$set=i=>{"header"in i&&t(0,l=i.header),"align"in i&&t(1,r=i.align),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,n]}class Kp extends W{constructor(e){super(),K(this,e,qp,Up,j,{header:0,align:1})}}function Wp(s){let e,t;const n=s[3].default,o=Se(n,s,s[2],null);return{c(){e=g("ul"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&Ae(o,n,l,l[2],t?xe(n,l[2],r,null):Ce(l[2]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Gp(s){let e,t;const n=s[3].default,o=Se(n,s,s[2],null);return{c(){e=g("ol"),o&&o.c(),m(e,"start",s[1])},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,r){o&&o.p&&(!t||r&4)&&Ae(o,n,l,l[2],t?xe(n,l[2],r,null):Ce(l[2]),null),(!t||r&2)&&m(e,"start",l[1])},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Zp(s){let e,t,n,o;const l=[Gp,Wp],r=[];function i(a,c){return a[0]?0:1}return e=i(s),t=r[e]=l[e](s),{c(){t.c(),n=Te()},m(a,c){r[e].m(a,c),S(a,n,c),o=!0},p(a,[c]){let u=e;e=i(a),e===u?r[e].p(a,c):(de(),T(r[u],1,1,()=>{r[u]=null}),pe(),t=r[e],t?t.p(a,c):(t=r[e]=l[e](a),t.c()),v(t,1),t.m(n.parentNode,n))},i(a){o||(v(t),o=!0)},o(a){T(t),o=!1},d(a){r[e].d(a),a&&E(n)}}}function Qp(s,e,t){let{$$slots:n={},$$scope:o}=e,{ordered:l}=e,{start:r}=e;return s.$$set=i=>{"ordered"in i&&t(0,l=i.ordered),"start"in i&&t(1,r=i.start),"$$scope"in i&&t(2,o=i.$$scope)},[l,r,o,n]}class Xp extends W{constructor(e){super(),K(this,e,Qp,Zp,j,{ordered:0,start:1})}}function Jp(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("li"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function Yp(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class Vp extends W{constructor(e){super(),K(this,e,Yp,Jp,j,{})}}function eh(s){let e;return{c(){e=g("hr")},m(t,n){S(t,e,n)},p:q,i:q,o:q,d(t){t&&E(e)}}}class th extends W{constructor(e){super(),K(this,e,null,eh,j,{})}}function nh(s){let e,t;return{c(){e=new $i(!1),t=Te(),e.a=t},m(n,o){e.m(s[0],n,o),S(n,t,o)},p(n,[o]){o&1&&e.p(n[0])},i:q,o:q,d(n){n&&E(t),n&&e.d()}}}function sh(s,e,t){let{text:n}=e;return s.$$set=o=>{"text"in o&&t(0,n=o.text)},[n]}class oh extends W{constructor(e){super(),K(this,e,sh,nh,j,{text:0})}}function lh(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("blockquote"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(e,null),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function rh(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class ih extends W{constructor(e){super(),K(this,e,rh,lh,j,{})}}function ah(s){let e,t,n;return{c(){e=g("pre"),t=g("code"),n=H(s[1]),m(e,"class",s[0])},m(o,l){S(o,e,l),h(e,t),h(t,n)},p(o,[l]){l&2&&Ze(n,o[1]),l&1&&m(e,"class",o[0])},i:q,o:q,d(o){o&&E(e)}}}function ch(s,e,t){let{lang:n}=e,{text:o}=e;return s.$$set=l=>{"lang"in l&&t(0,n=l.lang),"text"in l&&t(1,o=l.text)},[n,o]}class uh extends W{constructor(e){super(),K(this,e,ch,ah,j,{lang:0,text:1})}}function fh(s){let e,t;const n=s[1].default,o=Se(n,s,s[0],null);return{c(){e=g("br"),o&&o.c()},m(l,r){S(l,e,r),o&&o.m(l,r),t=!0},p(l,[r]){o&&o.p&&(!t||r&1)&&Ae(o,n,l,l[0],t?xe(n,l[0],r,null):Ce(l[0]),null)},i(l){t||(v(o,l),t=!0)},o(l){T(o,l),t=!1},d(l){l&&E(e),o&&o.d(l)}}}function dh(s,e,t){let{$$slots:n={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class ph extends W{constructor(e){super(),K(this,e,dh,fh,j,{})}}const hh={heading:op,paragraph:ip,text:up,image:pp,link:gp,em:$p,strong:Ap,codespan:Ep,del:kp,table:Mp,tablehead:Pp,tablebody:Ip,tablerow:Hp,tablecell:Kp,list:Xp,orderedlistitem:null,unorderedlistitem:null,listitem:Vp,hr:th,html:oh,blockquote:ih,code:uh,br:ph},mh={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function gh(s){let e,t;return e=new mn({props:{tokens:s[0],renderers:s[1]}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,[o]){const l={};o&1&&(l.tokens=n[0]),o&2&&(l.renderers=n[1]),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function _h(s,e,t){let n,o,l,r,{source:i=[]}=e,{renderers:a={}}=e,{options:c={}}=e,{isInline:u=!1}=e;const f=ko();let d,p,_;return vi(oa,{slug:k=>o?o.slug(k):"",getOptions:()=>l}),an(()=>{t(7,_=!0)}),s.$$set=k=>{"source"in k&&t(2,i=k.source),"renderers"in k&&t(3,a=k.renderers),"options"in k&&t(4,c=k.options),"isInline"in k&&t(5,u=k.isInline)},s.$$.update=()=>{s.$$.dirty&4&&t(8,n=Array.isArray(i)),s.$$.dirty&4&&(o=i?new Io:void 0),s.$$.dirty&16&&t(9,l=Xe(Xe({},mh),c)),s.$$.dirty&869&&(n?t(0,d=i):(t(6,p=new Rt(l)),t(0,d=u?p.inlineTokens(i):p.lex(i)),f("parsed",{tokens:d}))),s.$$.dirty&8&&t(1,r=Xe(Xe({},hh),a)),s.$$.dirty&385&&_&&!n&&f("parsed",{tokens:d})},[d,r,i,a,c,u,p,_,n,l]}class gn extends W{constructor(e){super(),K(this,e,_h,gh,j,{source:2,renderers:3,options:4,isInline:5})}}function bh(s){let e,t,n;return t=new gn({props:{source:cd}}),{c(){e=g("section"),L(t.$$.fragment),m(e,"class","documentation")},m(o,l){S(o,e,l),O(t,e,null),n=!0},p:q,i(o){n||(v(t.$$.fragment,o),n=!0)},o(o){T(t.$$.fragment,o),n=!1},d(o){o&&E(e),P(t)}}}let $h=class extends W{constructor(e){super(),K(this,e,null,bh,j,{})}};function vh(s){let e,t,n;return{c(){e=g("button"),e.textContent="First",m(e,"class","tab svelte-46fy0b"),le(e,"active",s[11])},m(o,l){S(o,e,l),t||(n=Z(e,"click",function(){Re(s[12])&&s[12].apply(this,arguments)}),t=!0)},p(o,l){s=o,l&2048&&le(e,"active",s[11])},d(o){o&&E(e),t=!1,n()}}}function wh(s){let e,t,n;return{c(){e=g("button"),e.textContent="Second",m(e,"class","tab svelte-46fy0b"),le(e,"active",s[11])},m(o,l){S(o,e,l),t||(n=Z(e,"click",function(){Re(s[12])&&s[12].apply(this,arguments)}),t=!0)},p(o,l){s=o,l&2048&&le(e,"active",s[11])},d(o){o&&E(e),t=!1,n()}}}function kh(s){let e,t,n,o;return{c(){e=g("button"),t=H("Third"),e.disabled=s[0],m(e,"class","tab svelte-46fy0b"),le(e,"active",s[11])},m(l,r){S(l,e,r),h(e,t),n||(o=Z(e,"click",function(){Re(s[12])&&s[12].apply(this,arguments)}),n=!0)},p(l,r){s=l,r&1&&(e.disabled=s[0]),r&2048&&le(e,"active",s[11])},d(l){l&&E(e),n=!1,o()}}}function ql(s){let e,t;return e=new xt({props:{$$slots:{default:[yh,({active:n,activate:o})=>({11:n,12:o}),({active:n,activate:o})=>(n?2048:0)|(o?4096:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&14338&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function yh(s){let e,t,n,o,l;return{c(){e=g("button"),t=H("Fourth "),n=g("button"),n.textContent="×",m(n,"class","svelte-46fy0b"),m(e,"class","tab svelte-46fy0b"),le(e,"active",s[11])},m(r,i){S(r,e,i),h(e,t),h(e,n),o||(l=[Z(n,"click",Un(s[4])),Z(e,"click",function(){Re(s[12])&&s[12].apply(this,arguments)})],o=!0)},p(r,i){s=r,i&2048&&le(e,"active",s[11])},d(r){r&&E(e),o=!1,ye(l)}}}function Kl(s){let e,t;return e=new xt({props:{$$slots:{default:[Th,({active:n,activate:o})=>({11:n,12:o}),({active:n,activate:o})=>(n?2048:0)|(o?4096:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&14340&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Th(s){let e,t,n,o,l;return{c(){e=g("button"),t=H("Fifth "),n=g("button"),n.textContent="×",m(n,"class","svelte-46fy0b"),m(e,"class","tab svelte-46fy0b"),le(e,"active",s[11])},m(r,i){S(r,e,i),h(e,t),h(e,n),o||(l=[Z(n,"click",Un(s[5])),Z(e,"click",function(){Re(s[12])&&s[12].apply(this,arguments)})],o=!0)},p(r,i){s=r,i&2048&&le(e,"active",s[11])},d(r){r&&E(e),o=!1,ye(l)}}}function Eh(s){let e;return{c(){e=g("div"),e.textContent="These are the first diamonds I ever took from my first mine.",m(e,"class","panel svelte-46fy0b"),le(e,"active",s[11])},m(t,n){S(t,e,n)},p(t,n){n&2048&&le(e,"active",t[11])},d(t){t&&E(e)}}}function Sh(s){let e;return{c(){e=g("div"),e.textContent="The second stage supplements the first stage by adding the second rail tunnel.",m(e,"class","panel svelte-46fy0b"),le(e,"active",s[11])},m(t,n){S(t,e,n)},p(t,n){n&2048&&le(e,"active",t[11])},d(t){t&&E(e)}}}function xh(s){let e;return{c(){e=g("div"),e.textContent="Let's not worry about third or fourth place.",m(e,"class","panel svelte-46fy0b"),le(e,"active",s[11])},m(t,n){S(t,e,n)},p(t,n){n&2048&&le(e,"active",t[11])},d(t){t&&E(e)}}}function Wl(s){let e,t;return e=new At({props:{$$slots:{default:[Ah,({active:n})=>({11:n}),({active:n})=>n?2048:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&10240&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Ah(s){let e;return{c(){e=g("div"),e.textContent="The fourth is the process of Timorization through capacity-building.",m(e,"class","panel svelte-46fy0b"),le(e,"active",s[11])},m(t,n){S(t,e,n)},p(t,n){n&2048&&le(e,"active",t[11])},d(t){t&&E(e)}}}function Gl(s){let e,t;return e=new At({props:{$$slots:{default:[Ch,({active:n})=>({11:n}),({active:n})=>n?2048:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&10240&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Ch(s){let e;return{c(){e=g("div"),e.textContent="Strings tuned a fifth apart.",m(e,"class","panel svelte-46fy0b"),le(e,"active",s[11])},m(t,n){S(t,e,n)},p(t,n){n&2048&&le(e,"active",t[11])},d(t){t&&E(e)}}}function Nh(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w;e=new xt({props:{$$slots:{default:[vh,({active:y,activate:D})=>({11:y,12:D}),({active:y,activate:D})=>(y?2048:0)|(D?4096:0)]},$$scope:{ctx:s}}}),n=new xt({props:{$$slots:{default:[wh,({active:y,activate:D})=>({11:y,12:D}),({active:y,activate:D})=>(y?2048:0)|(D?4096:0)]},$$scope:{ctx:s}}}),l=new xt({props:{$$slots:{default:[kh,({active:y,activate:D})=>({11:y,12:D}),({active:y,activate:D})=>(y?2048:0)|(D?4096:0)]},$$scope:{ctx:s}}});let $=s[1]&&ql(s),x=s[2]&&Kl(s);c=new At({props:{$$slots:{default:[Eh,({active:y})=>({11:y}),({active:y})=>y?2048:0]},$$scope:{ctx:s}}}),f=new At({props:{$$slots:{default:[Sh,({active:y})=>({11:y}),({active:y})=>y?2048:0]},$$scope:{ctx:s}}}),p=new At({props:{$$slots:{default:[xh,({active:y})=>({11:y}),({active:y})=>y?2048:0]},$$scope:{ctx:s}}});let R=s[1]&&Wl(s),N=s[2]&&Gl(s);return{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment),r=C(),$&&$.c(),i=C(),x&&x.c(),a=C(),L(c.$$.fragment),u=C(),L(f.$$.fragment),d=C(),L(p.$$.fragment),_=C(),R&&R.c(),k=C(),N&&N.c(),A=Te()},m(y,D){O(e,y,D),S(y,t,D),O(n,y,D),S(y,o,D),O(l,y,D),S(y,r,D),$&&$.m(y,D),S(y,i,D),x&&x.m(y,D),S(y,a,D),O(c,y,D),S(y,u,D),O(f,y,D),S(y,d,D),O(p,y,D),S(y,_,D),R&&R.m(y,D),S(y,k,D),N&&N.m(y,D),S(y,A,D),w=!0},p(y,D){const B={};D&14336&&(B.$$scope={dirty:D,ctx:y}),e.$set(B);const G={};D&14336&&(G.$$scope={dirty:D,ctx:y}),n.$set(G);const oe={};D&14337&&(oe.$$scope={dirty:D,ctx:y}),l.$set(oe),y[1]?$?($.p(y,D),D&2&&v($,1)):($=ql(y),$.c(),v($,1),$.m(i.parentNode,i)):$&&(de(),T($,1,1,()=>{$=null}),pe()),y[2]?x?(x.p(y,D),D&4&&v(x,1)):(x=Kl(y),x.c(),v(x,1),x.m(a.parentNode,a)):x&&(de(),T(x,1,1,()=>{x=null}),pe());const re={};D&10240&&(re.$$scope={dirty:D,ctx:y}),c.$set(re);const ue={};D&10240&&(ue.$$scope={dirty:D,ctx:y}),f.$set(ue);const ve={};D&10240&&(ve.$$scope={dirty:D,ctx:y}),p.$set(ve),y[1]?R?(R.p(y,D),D&2&&v(R,1)):(R=Wl(y),R.c(),v(R,1),R.m(k.parentNode,k)):R&&(de(),T(R,1,1,()=>{R=null}),pe()),y[2]?N?(N.p(y,D),D&4&&v(N,1)):(N=Gl(y),N.c(),v(N,1),N.m(A.parentNode,A)):N&&(de(),T(N,1,1,()=>{N=null}),pe())},i(y){w||(v(e.$$.fragment,y),v(n.$$.fragment,y),v(l.$$.fragment,y),v($),v(x),v(c.$$.fragment,y),v(f.$$.fragment,y),v(p.$$.fragment,y),v(R),v(N),w=!0)},o(y){T(e.$$.fragment,y),T(n.$$.fragment,y),T(l.$$.fragment,y),T($),T(x),T(c.$$.fragment,y),T(f.$$.fragment,y),T(p.$$.fragment,y),T(R),T(N),w=!1},d(y){P(e,y),y&&E(t),P(n,y),y&&E(o),P(l,y),y&&E(r),$&&$.d(y),y&&E(i),x&&x.d(y),y&&E(a),P(c,y),y&&E(u),P(f,y),y&&E(d),P(p,y),y&&E(_),R&&R.d(y),y&&E(k),N&&N.d(y),y&&E(A)}}}function Mh(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$,x,R,N,y,D,B;function G(re){s[6](re)}let oe={$$slots:{default:[Nh]},$$scope:{ctx:s}};return s[3]!==void 0&&(oe.selected=s[3]),e=new On({props:oe}),Fe.push(()=>bt(e,"selected",G)),{c(){L(e.$$.fragment),n=C(),o=g("div"),o.textContent="Use these controls to operate tabs.",l=C(),r=g("div"),i=g("label"),a=g("input"),c=H(" Fourth"),u=C(),f=g("label"),d=g("input"),p=H(" Fifth"),_=C(),k=g("label"),A=g("input"),w=H(" Disable Third"),$=C(),x=g("label"),R=H("Selected "),N=g("input"),m(o,"class","py-2 border-t text-center text-gray-500"),m(a,"type","checkbox"),m(d,"type","checkbox"),m(A,"type","checkbox"),m(N,"class","input max-w-[6ch]"),m(N,"type","number"),m(r,"class","flex items-center place-content-center gap-4")},m(re,ue){O(e,re,ue),S(re,n,ue),S(re,o,ue),S(re,l,ue),S(re,r,ue),h(r,i),h(i,a),a.checked=s[1],h(i,c),h(r,u),h(r,f),h(f,d),d.checked=s[2],h(f,p),h(r,_),h(r,k),h(k,A),A.checked=s[0],h(k,w),h(r,$),h(r,x),h(x,R),h(x,N),Ge(N,s[3]),y=!0,D||(B=[Z(a,"change",s[7]),Z(d,"change",s[8]),Z(A,"change",s[9]),Z(N,"input",s[10])],D=!0)},p(re,[ue]){const ve={};ue&8199&&(ve.$$scope={dirty:ue,ctx:re}),!t&&ue&8&&(t=!0,ve.selected=re[3],kt(()=>t=!1)),e.$set(ve),ue&2&&(a.checked=re[1]),ue&4&&(d.checked=re[2]),ue&1&&(A.checked=re[0]),ue&8&&tt(N.value)!==re[3]&&Ge(N,re[3])},i(re){y||(v(e.$$.fragment,re),y=!0)},o(re){T(e.$$.fragment,re),y=!1},d(re){P(e,re),re&&E(n),re&&E(o),re&&E(l),re&&E(r),D=!1,ye(B)}}}function Rh(s,e,t){let n=!1,o=!0,l=!0,r=NaN;const i=()=>t(1,o=!1),a=()=>t(2,l=!1);function c(_){r=_,t(3,r)}function u(){o=this.checked,t(1,o)}function f(){l=this.checked,t(2,l)}function d(){n=this.checked,t(0,n)}function p(){r=tt(this.value),t(3,r)}return[n,o,l,r,i,a,c,u,f,d,p]}let Oh=class extends W{constructor(e){super(),K(this,e,Rh,Mh,j,{})}};function Ph(s){let e,t,n,o,l;return t=new Oh({}),o=new st({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),L(o.$$.fragment),m(e,"class","prose max-w-none my-4")},m(r,i){S(r,e,i),O(t,e,null),h(e,n),O(o,e,null),l=!0},p:q,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T(o.$$.fragment,r),l=!1},d(r){r&&E(e),P(t),P(o)}}}let Lh=class extends W{constructor(e){super(),K(this,e,null,Ph,j,{})}};function Zl(s,e,t){const n=s.slice();return n[0]=e[t],n[2]=t,n}function Ql(s,e,t){const n=s.slice();return n[0]=e[t],n[2]=t,n}function Xl(s,e,t){const n=s.slice();return n[0]=e[t],n[6]=t,n}function Jl(s,e,t){const n=s.slice();return n[0]=e[t],n[6]=t,n}function Dh(s){let e,t,n,o,l,r;return{c(){e=g("button"),t=H("Tab #"),n=H(s[6]),o=C(),m(e,"class","tab level-1 svelte-jw7z4j"),le(e,"active",s[3])},m(i,a){S(i,e,a),h(e,t),h(e,n),S(i,o,a),l||(r=Z(e,"click",function(){Re(s[7])&&s[7].apply(this,arguments)}),l=!0)},p(i,a){s=i,a&8&&le(e,"active",s[3])},d(i){i&&E(e),i&&E(o),l=!1,r()}}}function Yl(s){let e,t=" ",n,o;return e=new xt({props:{$$slots:{default:[Dh,({active:l,activate:r})=>({3:l,7:r}),({active:l,activate:r})=>(l?8:0)|(r?128:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),n=H(t)},m(l,r){O(e,l,r),S(l,n,r),o=!0},p(l,r){const i={};r&648&&(i.$$scope={dirty:r,ctx:l}),e.$set(i)},i(l){o||(v(e.$$.fragment,l),o=!0)},o(l){T(e.$$.fragment,l),o=!1},d(l){P(e,l),l&&E(n)}}}function Ih(s){let e,t,n,o,l,r;return{c(){e=g("button"),t=H("Child #"),n=H(s[6]),o=C(),m(e,"class","tab level-2 svelte-jw7z4j"),le(e,"active",s[3])},m(i,a){S(i,e,a),h(e,t),h(e,n),S(i,o,a),l||(r=Z(e,"click",function(){Re(s[7])&&s[7].apply(this,arguments)}),l=!0)},p(i,a){s=i,a&8&&le(e,"active",s[3])},d(i){i&&E(e),i&&E(o),l=!1,r()}}}function Vl(s){let e,t=" ",n,o;return e=new xt({props:{$$slots:{default:[Ih,({active:l,activate:r})=>({3:l,7:r}),({active:l,activate:r})=>(l?8:0)|(r?128:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),n=H(t)},m(l,r){O(e,l,r),S(l,n,r),o=!0},p(l,r){const i={};r&648&&(i.$$scope={dirty:r,ctx:l}),e.$set(i)},i(l){o||(v(e.$$.fragment,l),o=!0)},o(l){T(e.$$.fragment,l),o=!1},d(l){P(e,l),l&&E(n)}}}function Bh(s){let e,t,n,o,l;return{c(){e=g("div"),t=H("Child tab #"),n=H(s[2]),o=H(" context"),l=C(),m(e,"class","panel svelte-jw7z4j"),le(e,"active",s[3])},m(r,i){S(r,e,i),h(e,t),h(e,n),h(e,o),S(r,l,i)},p(r,i){i&8&&le(e,"active",r[3])},d(r){r&&E(e),r&&E(l)}}}function er(s){let e,t;return e=new At({props:{$$slots:{default:[Bh,({active:n})=>({3:n}),({active:n})=>n?8:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&520&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function zh(s){let e,t,n,o={length:Zt},l=[];for(let u=0;u<o.length;u+=1)l[u]=Vl(Xl(s,o,u));const r=u=>T(l[u],1,1,()=>{l[u]=null});let i={length:Zt},a=[];for(let u=0;u<i.length;u+=1)a[u]=er(Ql(s,i,u));const c=u=>T(a[u],1,1,()=>{a[u]=null});return{c(){for(let u=0;u<l.length;u+=1)l[u].c();e=C();for(let u=0;u<a.length;u+=1)a[u].c();t=Te()},m(u,f){for(let d=0;d<l.length;d+=1)l[d].m(u,f);S(u,e,f);for(let d=0;d<a.length;d+=1)a[d].m(u,f);S(u,t,f),n=!0},p(u,f){if(f&136){o={length:Zt};let d;for(d=0;d<o.length;d+=1){const p=Xl(u,o,d);l[d]?(l[d].p(p,f),v(l[d],1)):(l[d]=Vl(p),l[d].c(),v(l[d],1),l[d].m(e.parentNode,e))}for(de(),d=o.length;d<l.length;d+=1)r(d);pe()}if(f&8){i={length:Zt};let d;for(d=0;d<i.length;d+=1){const p=Ql(u,i,d);a[d]?(a[d].p(p,f),v(a[d],1)):(a[d]=er(p),a[d].c(),v(a[d],1),a[d].m(t.parentNode,t))}for(de(),d=i.length;d<a.length;d+=1)c(d);pe()}},i(u){if(!n){for(let f=0;f<o.length;f+=1)v(l[f]);for(let f=0;f<i.length;f+=1)v(a[f]);n=!0}},o(u){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)T(l[f]);a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)T(a[f]);n=!1},d(u){Le(l,u),u&&E(e),Le(a,u),u&&E(t)}}}function Hh(s){let e,t,n,o,l,r,i,a,c,u;return a=new On({props:{$$slots:{default:[zh]},$$scope:{ctx:s}}}),{c(){e=g("div"),t=g("div"),n=H("Tab #"),o=H(s[2]),l=H(" context. Nested tabs below"),r=C(),i=g("div"),L(a.$$.fragment),c=C(),m(i,"class","mt-3"),m(e,"class","panel svelte-jw7z4j"),le(e,"active",s[3])},m(f,d){S(f,e,d),h(e,t),h(t,n),h(t,o),h(t,l),h(e,r),h(e,i),O(a,i,null),S(f,c,d),u=!0},p(f,d){const p={};d&520&&(p.$$scope={dirty:d,ctx:f}),a.$set(p),(!u||d&8)&&le(e,"active",f[3])},i(f){u||(v(a.$$.fragment,f),u=!0)},o(f){T(a.$$.fragment,f),u=!1},d(f){f&&E(e),P(a),f&&E(c)}}}function tr(s){let e,t;return e=new At({props:{$$slots:{default:[Hh,({active:n})=>({3:n}),({active:n})=>n?8:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&520&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Fh(s){let e,t,n,o={length:Zt},l=[];for(let u=0;u<o.length;u+=1)l[u]=Yl(Jl(s,o,u));const r=u=>T(l[u],1,1,()=>{l[u]=null});let i={length:Zt},a=[];for(let u=0;u<i.length;u+=1)a[u]=tr(Zl(s,i,u));const c=u=>T(a[u],1,1,()=>{a[u]=null});return{c(){for(let u=0;u<l.length;u+=1)l[u].c();e=C();for(let u=0;u<a.length;u+=1)a[u].c();t=Te()},m(u,f){for(let d=0;d<l.length;d+=1)l[d].m(u,f);S(u,e,f);for(let d=0;d<a.length;d+=1)a[d].m(u,f);S(u,t,f),n=!0},p(u,f){if(f&136){o={length:Zt};let d;for(d=0;d<o.length;d+=1){const p=Jl(u,o,d);l[d]?(l[d].p(p,f),v(l[d],1)):(l[d]=Yl(p),l[d].c(),v(l[d],1),l[d].m(e.parentNode,e))}for(de(),d=o.length;d<l.length;d+=1)r(d);pe()}if(f&136){i={length:Zt};let d;for(d=0;d<i.length;d+=1){const p=Zl(u,i,d);a[d]?(a[d].p(p,f),v(a[d],1)):(a[d]=tr(p),a[d].c(),v(a[d],1),a[d].m(t.parentNode,t))}for(de(),d=i.length;d<a.length;d+=1)c(d);pe()}},i(u){if(!n){for(let f=0;f<o.length;f+=1)v(l[f]);for(let f=0;f<i.length;f+=1)v(a[f]);n=!0}},o(u){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)T(l[f]);a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)T(a[f]);n=!1},d(u){Le(l,u),u&&E(e),Le(a,u),u&&E(t)}}}function jh(s){let e,t;return e=new On({props:{$$slots:{default:[Fh]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,[o]){const l={};o&512&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}let Zt=5,Uh=class extends W{constructor(e){super(),K(this,e,null,jh,j,{})}};function qh(s){let e,t,n,o,l;return t=new Uh({}),o=new st({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),L(o.$$.fragment),m(e,"class","prose max-w-none my-4")},m(r,i){S(r,e,i),O(t,e,null),h(e,n),O(o,e,null),l=!0},p:q,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T(o.$$.fragment,r),l=!1},d(r){r&&E(e),P(t),P(o)}}}let Kh=class extends W{constructor(e){super(),K(this,e,null,qh,j,{})}};var Ms={},Wh={get exports(){return Ms},set exports(s){Ms=s}};(function(s,e){var t=200,n="Expected a function",o="__lodash_hash_undefined__",l=1,r=2,i=1/0,a=9007199254740991,c="[object Arguments]",u="[object Array]",f="[object Boolean]",d="[object Date]",p="[object Error]",_="[object Function]",k="[object GeneratorFunction]",A="[object Map]",w="[object Number]",$="[object Object]",x="[object Promise]",R="[object RegExp]",N="[object Set]",y="[object String]",D="[object Symbol]",B="[object WeakMap]",G="[object ArrayBuffer]",oe="[object DataView]",re="[object Float32Array]",ue="[object Float64Array]",ve="[object Int8Array]",$e="[object Int16Array]",Ie="[object Int32Array]",z="[object Uint8Array]",Q="[object Uint8ClampedArray]",Y="[object Uint16Array]",ne="[object Uint32Array]",U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ge=/^\w*$/,ie=/^\./,ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V=/[\\^$.*+?()[\]{}|]/g,Ee=/\\(\\)?/g,_e=/^\[object .+?Constructor\]$/,Qe=/^(?:0|[1-9]\d*)$/,Me={};Me[re]=Me[ue]=Me[ve]=Me[$e]=Me[Ie]=Me[z]=Me[Q]=Me[Y]=Me[ne]=!0,Me[c]=Me[u]=Me[G]=Me[f]=Me[oe]=Me[d]=Me[p]=Me[_]=Me[A]=Me[w]=Me[$]=Me[R]=Me[N]=Me[y]=Me[B]=!1;var $t=typeof Wt=="object"&&Wt&&Wt.Object===Object&&Wt,jt=typeof self=="object"&&self&&self.Object===Object&&self,We=$t||jt||Function("return this")(),Tt=e&&!e.nodeType&&e,ot=Tt&&!0&&s&&!s.nodeType&&s,ft=ot&&ot.exports===Tt,Ot=ft&&$t.process,rt=function(){try{return Ot&&Ot.binding("util")}catch(b){}}(),fe=rt&&rt.isTypedArray;function Yt(b,M,I,F){for(var ae=-1,ee=b?b.length:0;++ae<ee;){var we=b[ae];M(F,we,I(we),b)}return F}function Pe(b,M){for(var I=-1,F=b?b.length:0;++I<F;)if(M(b[I],I,b))return!0;return!1}function be(b){return function(M){return M==null?void 0:M[b]}}function dt(b,M){for(var I=-1,F=Array(b);++I<b;)F[I]=M(I);return F}function He(b){return function(M){return b(M)}}function se(b,M){return b==null?void 0:b[M]}function Oe(b){var M=!1;if(b!=null&&typeof b.toString!="function")try{M=!!(b+"")}catch(I){}return M}function X(b){var M=-1,I=Array(b.size);return b.forEach(function(F,ae){I[++M]=[ae,F]}),I}function J(b,M){return function(I){return b(M(I))}}function me(b){var M=-1,I=Array(b.size);return b.forEach(function(F){I[++M]=F}),I}var Ne=Array.prototype,Ye=Function.prototype,it=Object.prototype,Dn=We["__core-js_shared__"],ts=function(){var b=/[^.]+$/.exec(Dn&&Dn.keys&&Dn.keys.IE_PROTO||"");return b?"Symbol(src)_1."+b:""}(),Uo=Ye.toString,Et=it.hasOwnProperty,bn=it.toString,Sa=RegExp("^"+Uo.call(Et).replace(V,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qo=We.Symbol,Ko=We.Uint8Array,xa=it.propertyIsEnumerable,Aa=Ne.splice,Ca=J(Object.keys,Object),Zs=$n(We,"DataView"),In=$n(We,"Map"),Qs=$n(We,"Promise"),Xs=$n(We,"Set"),Js=$n(We,"WeakMap"),Bn=$n(Object,"create"),Na=en(Zs),Ma=en(In),Ra=en(Qs),Oa=en(Xs),Pa=en(Js),ns=qo?qo.prototype:void 0,Ys=ns?ns.valueOf:void 0,Wo=ns?ns.toString:void 0;function Vt(b){var M=-1,I=b?b.length:0;for(this.clear();++M<I;){var F=b[M];this.set(F[0],F[1])}}function La(){this.__data__=Bn?Bn(null):{}}function Da(b){return this.has(b)&&delete this.__data__[b]}function Ia(b){var M=this.__data__;if(Bn){var I=M[b];return I===o?void 0:I}return Et.call(M,b)?M[b]:void 0}function Ba(b){var M=this.__data__;return Bn?M[b]!==void 0:Et.call(M,b)}function za(b,M){var I=this.__data__;return I[b]=Bn&&M===void 0?o:M,this}Vt.prototype.clear=La,Vt.prototype.delete=Da,Vt.prototype.get=Ia,Vt.prototype.has=Ba,Vt.prototype.set=za;function Pt(b){var M=-1,I=b?b.length:0;for(this.clear();++M<I;){var F=b[M];this.set(F[0],F[1])}}function Ha(){this.__data__=[]}function Fa(b){var M=this.__data__,I=os(M,b);if(I<0)return!1;var F=M.length-1;return I==F?M.pop():Aa.call(M,I,1),!0}function ja(b){var M=this.__data__,I=os(M,b);return I<0?void 0:M[I][1]}function Ua(b){return os(this.__data__,b)>-1}function qa(b,M){var I=this.__data__,F=os(I,b);return F<0?I.push([b,M]):I[F][1]=M,this}Pt.prototype.clear=Ha,Pt.prototype.delete=Fa,Pt.prototype.get=ja,Pt.prototype.has=Ua,Pt.prototype.set=qa;function Lt(b){var M=-1,I=b?b.length:0;for(this.clear();++M<I;){var F=b[M];this.set(F[0],F[1])}}function Ka(){this.__data__={hash:new Vt,map:new(In||Pt),string:new Vt}}function Wa(b){return ls(this,b).delete(b)}function Ga(b){return ls(this,b).get(b)}function Za(b){return ls(this,b).has(b)}function Qa(b,M){return ls(this,b).set(b,M),this}Lt.prototype.clear=Ka,Lt.prototype.delete=Wa,Lt.prototype.get=Ga,Lt.prototype.has=Za,Lt.prototype.set=Qa;function ss(b){var M=-1,I=b?b.length:0;for(this.__data__=new Lt;++M<I;)this.add(b[M])}function Xa(b){return this.__data__.set(b,o),this}function Ja(b){return this.__data__.has(b)}ss.prototype.add=ss.prototype.push=Xa,ss.prototype.has=Ja;function Dt(b){this.__data__=new Pt(b)}function Ya(){this.__data__=new Pt}function Va(b){return this.__data__.delete(b)}function ec(b){return this.__data__.get(b)}function tc(b){return this.__data__.has(b)}function nc(b,M){var I=this.__data__;if(I instanceof Pt){var F=I.__data__;if(!In||F.length<t-1)return F.push([b,M]),this;I=this.__data__=new Lt(F)}return I.set(b,M),this}Dt.prototype.clear=Ya,Dt.prototype.delete=Va,Dt.prototype.get=ec,Dt.prototype.has=tc,Dt.prototype.set=nc;function sc(b,M){var I=qt(b)||el(b)?dt(b.length,String):[],F=I.length,ae=!!F;for(var ee in b)(M||Et.call(b,ee))&&!(ae&&(ee=="length"||Xo(ee,F)))&&I.push(ee);return I}function os(b,M){for(var I=b.length;I--;)if(Vo(b[I][0],M))return I;return-1}function oc(b,M,I,F){return lc(b,function(ae,ee,we){M(F,ae,I(ae),we)}),F}var lc=wc(ic),rc=kc();function ic(b,M){return b&&rc(b,M,us)}function Go(b,M){M=rs(M,b)?[M]:Zo(M);for(var I=0,F=M.length;b!=null&&I<F;)b=b[is(M[I++])];return I&&I==F?b:void 0}function ac(b){return bn.call(b)}function cc(b,M){return b!=null&&M in Object(b)}function Vs(b,M,I,F,ae){return b===M?!0:b==null||M==null||!as(b)&&!cs(M)?b!==b&&M!==M:uc(b,M,Vs,I,F,ae)}function uc(b,M,I,F,ae,ee){var we=qt(b),Be=qt(M),je=u,Ve=u;we||(je=Ut(b),je=je==c?$:je),Be||(Ve=Ut(M),Ve=Ve==c?$:Ve);var lt=je==$&&!Oe(b),at=Ve==$&&!Oe(M),et=je==Ve;if(et&&!lt)return ee||(ee=new Dt),we||Oc(b)?Qo(b,M,I,F,ae,ee):yc(b,M,je,I,F,ae,ee);if(!(ae&r)){var ht=lt&&Et.call(b,"__wrapped__"),mt=at&&Et.call(M,"__wrapped__");if(ht||mt){var Kt=ht?b.value():b,It=mt?M.value():M;return ee||(ee=new Dt),I(Kt,It,F,ae,ee)}}return et?(ee||(ee=new Dt),Tc(b,M,I,F,ae,ee)):!1}function fc(b,M,I,F){var ae=I.length,ee=ae,we=!F;if(b==null)return!ee;for(b=Object(b);ae--;){var Be=I[ae];if(we&&Be[2]?Be[1]!==b[Be[0]]:!(Be[0]in b))return!1}for(;++ae<ee;){Be=I[ae];var je=Be[0],Ve=b[je],lt=Be[1];if(we&&Be[2]){if(Ve===void 0&&!(je in b))return!1}else{var at=new Dt;if(F)var et=F(Ve,lt,je,b,M,at);if(!(et===void 0?Vs(lt,Ve,F,l|r,at):et))return!1}}return!0}function dc(b){if(!as(b)||Ac(b))return!1;var M=tl(b)||Oe(b)?Sa:_e;return M.test(en(b))}function pc(b){return cs(b)&&no(b.length)&&!!Me[bn.call(b)]}function hc(b){return typeof b=="function"?b:b==null?Ic:typeof b=="object"?qt(b)?_c(b[0],b[1]):gc(b):Bc(b)}function mc(b){if(!Cc(b))return Ca(b);var M=[];for(var I in Object(b))Et.call(b,I)&&I!="constructor"&&M.push(I);return M}function gc(b){var M=Ec(b);return M.length==1&&M[0][2]?Yo(M[0][0],M[0][1]):function(I){return I===b||fc(I,b,M)}}function _c(b,M){return rs(b)&&Jo(M)?Yo(is(b),M):function(I){var F=Lc(I,b);return F===void 0&&F===M?Dc(I,b):Vs(M,F,void 0,l|r)}}function bc(b){return function(M){return Go(M,b)}}function $c(b){if(typeof b=="string")return b;if(so(b))return Wo?Wo.call(b):"";var M=b+"";return M=="0"&&1/b==-i?"-0":M}function Zo(b){return qt(b)?b:Nc(b)}function vc(b,M){return function(I,F){var ae=qt(I)?Yt:oc,ee=M?M():{};return ae(I,b,hc(F),ee)}}function wc(b,M){return function(I,F){if(I==null)return I;if(!to(I))return b(I,F);for(var ae=I.length,ee=M?ae:-1,we=Object(I);(M?ee--:++ee<ae)&&F(we[ee],ee,we)!==!1;);return I}}function kc(b){return function(M,I,F){for(var ae=-1,ee=Object(M),we=F(M),Be=we.length;Be--;){var je=we[b?Be:++ae];if(I(ee[je],je,ee)===!1)break}return M}}function Qo(b,M,I,F,ae,ee){var we=ae&r,Be=b.length,je=M.length;if(Be!=je&&!(we&&je>Be))return!1;var Ve=ee.get(b);if(Ve&&ee.get(M))return Ve==M;var lt=-1,at=!0,et=ae&l?new ss:void 0;for(ee.set(b,M),ee.set(M,b);++lt<Be;){var ht=b[lt],mt=M[lt];if(F)var Kt=we?F(mt,ht,lt,M,b,ee):F(ht,mt,lt,b,M,ee);if(Kt!==void 0){if(Kt)continue;at=!1;break}if(et){if(!Pe(M,function(It,tn){if(!et.has(tn)&&(ht===It||I(ht,It,F,ae,ee)))return et.add(tn)})){at=!1;break}}else if(!(ht===mt||I(ht,mt,F,ae,ee))){at=!1;break}}return ee.delete(b),ee.delete(M),at}function yc(b,M,I,F,ae,ee,we){switch(I){case oe:if(b.byteLength!=M.byteLength||b.byteOffset!=M.byteOffset)return!1;b=b.buffer,M=M.buffer;case G:return!(b.byteLength!=M.byteLength||!F(new Ko(b),new Ko(M)));case f:case d:case w:return Vo(+b,+M);case p:return b.name==M.name&&b.message==M.message;case R:case y:return b==M+"";case A:var Be=X;case N:var je=ee&r;if(Be||(Be=me),b.size!=M.size&&!je)return!1;var Ve=we.get(b);if(Ve)return Ve==M;ee|=l,we.set(b,M);var lt=Qo(Be(b),Be(M),F,ae,ee,we);return we.delete(b),lt;case D:if(Ys)return Ys.call(b)==Ys.call(M)}return!1}function Tc(b,M,I,F,ae,ee){var we=ae&r,Be=us(b),je=Be.length,Ve=us(M),lt=Ve.length;if(je!=lt&&!we)return!1;for(var at=je;at--;){var et=Be[at];if(!(we?et in M:Et.call(M,et)))return!1}var ht=ee.get(b);if(ht&&ee.get(M))return ht==M;var mt=!0;ee.set(b,M),ee.set(M,b);for(var Kt=we;++at<je;){et=Be[at];var It=b[et],tn=M[et];if(F)var nl=we?F(tn,It,et,M,b,ee):F(It,tn,et,b,M,ee);if(!(nl===void 0?It===tn||I(It,tn,F,ae,ee):nl)){mt=!1;break}Kt||(Kt=et=="constructor")}if(mt&&!Kt){var fs=b.constructor,ds=M.constructor;fs!=ds&&"constructor"in b&&"constructor"in M&&!(typeof fs=="function"&&fs instanceof fs&&typeof ds=="function"&&ds instanceof ds)&&(mt=!1)}return ee.delete(b),ee.delete(M),mt}function ls(b,M){var I=b.__data__;return xc(M)?I[typeof M=="string"?"string":"hash"]:I.map}function Ec(b){for(var M=us(b),I=M.length;I--;){var F=M[I],ae=b[F];M[I]=[F,ae,Jo(ae)]}return M}function $n(b,M){var I=se(b,M);return dc(I)?I:void 0}var Ut=ac;(Zs&&Ut(new Zs(new ArrayBuffer(1)))!=oe||In&&Ut(new In)!=A||Qs&&Ut(Qs.resolve())!=x||Xs&&Ut(new Xs)!=N||Js&&Ut(new Js)!=B)&&(Ut=function(b){var M=bn.call(b),I=M==$?b.constructor:void 0,F=I?en(I):void 0;if(F)switch(F){case Na:return oe;case Ma:return A;case Ra:return x;case Oa:return N;case Pa:return B}return M});function Sc(b,M,I){M=rs(M,b)?[M]:Zo(M);for(var F,ae=-1,we=M.length;++ae<we;){var ee=is(M[ae]);if(!(F=b!=null&&I(b,ee)))break;b=b[ee]}if(F)return F;var we=b?b.length:0;return!!we&&no(we)&&Xo(ee,we)&&(qt(b)||el(b))}function Xo(b,M){return M=M==null?a:M,!!M&&(typeof b=="number"||Qe.test(b))&&b>-1&&b%1==0&&b<M}function rs(b,M){if(qt(b))return!1;var I=typeof b;return I=="number"||I=="symbol"||I=="boolean"||b==null||so(b)?!0:ge.test(b)||!U.test(b)||M!=null&&b in Object(M)}function xc(b){var M=typeof b;return M=="string"||M=="number"||M=="symbol"||M=="boolean"?b!=="__proto__":b===null}function Ac(b){return!!ts&&ts in b}function Cc(b){var M=b&&b.constructor,I=typeof M=="function"&&M.prototype||it;return b===I}function Jo(b){return b===b&&!as(b)}function Yo(b,M){return function(I){return I==null?!1:I[b]===M&&(M!==void 0||b in Object(I))}}var Nc=eo(function(b){b=Pc(b);var M=[];return ie.test(b)&&M.push(""),b.replace(ke,function(I,F,ae,ee){M.push(ae?ee.replace(Ee,"$1"):F||I)}),M});function is(b){if(typeof b=="string"||so(b))return b;var M=b+"";return M=="0"&&1/b==-i?"-0":M}function en(b){if(b!=null){try{return Uo.call(b)}catch(M){}try{return b+""}catch(M){}}return""}var Mc=vc(function(b,M,I){Et.call(b,I)?b[I].push(M):b[I]=[M]});function eo(b,M){if(typeof b!="function"||M&&typeof M!="function")throw new TypeError(n);var I=function(){var F=arguments,ae=M?M.apply(this,F):F[0],ee=I.cache;if(ee.has(ae))return ee.get(ae);var we=b.apply(this,F);return I.cache=ee.set(ae,we),we};return I.cache=new(eo.Cache||Lt),I}eo.Cache=Lt;function Vo(b,M){return b===M||b!==b&&M!==M}function el(b){return Rc(b)&&Et.call(b,"callee")&&(!xa.call(b,"callee")||bn.call(b)==c)}var qt=Array.isArray;function to(b){return b!=null&&no(b.length)&&!tl(b)}function Rc(b){return cs(b)&&to(b)}function tl(b){var M=as(b)?bn.call(b):"";return M==_||M==k}function no(b){return typeof b=="number"&&b>-1&&b%1==0&&b<=a}function as(b){var M=typeof b;return!!b&&(M=="object"||M=="function")}function cs(b){return!!b&&typeof b=="object"}function so(b){return typeof b=="symbol"||cs(b)&&bn.call(b)==D}var Oc=fe?He(fe):pc;function Pc(b){return b==null?"":$c(b)}function Lc(b,M,I){var F=b==null?void 0:Go(b,M);return F===void 0?I:F}function Dc(b,M){return b!=null&&Sc(b,M,cc)}function us(b){return to(b)?sc(b):mc(b)}function Ic(b){return b}function Bc(b){return rs(b)?be(is(b)):bc(b)}s.exports=Mc})(Wh,Ms);const la=Ms;function nr(s,e,t){const n=s.slice();return n[13]=e[t],n}function sr(s,e,t){const n=s.slice();return n[18]=e[t],n}function or(s,e,t){const n=s.slice();return n[22]=e[t],n[24]=t,n}function lr(s,e,t){const n=s.slice();return n[22]=e[t],n}function Gh(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:Jh,then:Xh,catch:Qh,value:26,error:21};return xs(t=s[0],n),{c(){e=Te(),n.block.c()},m(o,l){S(o,e,l),n.block.m(o,n.anchor=l),n.mount=()=>e.parentNode,n.anchor=e},p(o,l){s=o,n.ctx=s,l&1&&t!==(t=s[0])&&xs(t,n)||yi(n,s,l)},d(o){o&&E(e),n.block.d(o),n.token=null,n=null}}}function Zh(s){let e,t,n;return{c(){e=g("button"),e.textContent="Request authors",m(e,"class","input")},m(o,l){S(o,e,l),t||(n=Z(e,"click",s[8]),t=!0)},p:q,d(o){o&&E(e),t=!1,n()}}}function Qh(s){let e,t,n,o=(s[21]instanceof Error?s[21].message:s[21])+"",l;return{c(){e=g("div"),t=H("Loading authors error: "),n=g("strong"),l=H(o),m(n,"class","text-red-600"),m(e,"class","text-red-400")},m(r,i){S(r,e,i),h(e,t),h(e,n),h(n,l)},p(r,i){i&1&&o!==(o=(r[21]instanceof Error?r[21].message:r[21])+"")&&Ze(l,o)},d(r){r&&E(e)}}}function Xh(s){let e,t,n,o,l,r,i,a,c,u,f=s[26],d=[];for(let p=0;p<f.length;p+=1)d[p]=rr(lr(s,f,p));return{c(){e=g("div"),t=g("select"),n=g("option"),o=H("Select author");for(let p=0;p<d.length;p+=1)d[p].c();l=C(),r=g("button"),i=H("Get quotes"),n.__value=void 0,n.value=n.__value,n.hidden=!0,m(t,"class","input"),s[1]===void 0&&pt(()=>s[9].call(t)),m(r,"class","input"),r.disabled=a=s[1]==null},m(p,_){S(p,e,_),h(e,t),h(t,n),h(n,o);for(let k=0;k<d.length;k+=1)d[k].m(t,null);St(t,s[1]),h(e,l),h(e,r),h(r,i),c||(u=[Z(t,"change",s[9]),Z(r,"click",s[10])],c=!0)},p(p,_){if(_&5){f=p[26];let k;for(k=0;k<f.length;k+=1){const A=lr(p,f,k);d[k]?d[k].p(A,_):(d[k]=rr(A),d[k].c(),d[k].m(t,null))}for(;k<d.length;k+=1)d[k].d(1);d.length=f.length}_&3&&St(t,p[1]),_&3&&a!==(a=p[1]==null)&&(r.disabled=a)},d(p){p&&E(e),Le(d,p),c=!1,ye(u)}}}function rr(s){let e,t=s[22].name+"",n,o,l=s[22].quoteCount+"",r,i,a;return{c(){e=g("option"),n=H(t),o=H(": "),r=H(l),e.__value=i=s[22],e.value=e.__value,e.disabled=a=s[2].includes(s[22])},m(c,u){S(c,e,u),h(e,n),h(e,o),h(e,r)},p(c,u){u&1&&t!==(t=c[22].name+"")&&Ze(n,t),u&1&&l!==(l=c[22].quoteCount+"")&&Ze(r,l),u&1&&i!==(i=c[22])&&(e.__value=i,e.value=e.__value),u&5&&a!==(a=c[2].includes(c[22]))&&(e.disabled=a)},d(c){c&&E(e)}}}function Jh(s){let e,t,n;return{c(){e=g("div"),t=C(),n=g("div"),n.textContent="Loading authors...",m(e,"class","text-blue-800 "+s[5]+" svelte-af0fhv"),m(n,"class","text-blue-800")},m(o,l){S(o,e,l),S(o,t,l),S(o,n,l)},p:q,d(o){o&&E(e),o&&E(t),o&&E(n)}}}function ir(s){let e,t,n,o;function l(i){s[12](i)}let r={$$slots:{default:[sm]},$$scope:{ctx:s}};return s[4]!==void 0&&(r.selected=s[4]),t=new On({props:r}),Fe.push(()=>bt(t,"selected",l)),{c(){e=g("div"),L(t.$$.fragment),m(e,"class","my-4 py-4 border-y border-gray-300 flex items-start h-[25rem] overflow-hidden")},m(i,a){S(i,e,a),O(t,e,null),o=!0},p(i,a){const c={};a&536870924&&(c.$$scope={dirty:a,ctx:i}),!n&&a&16&&(n=!0,c.selected=i[4],kt(()=>n=!1)),t.$set(c)},i(i){o||(v(t.$$.fragment,i),o=!0)},o(i){T(t.$$.fragment,i),o=!1},d(i){i&&E(e),P(t)}}}function Yh(s){let e,t,n,o,l=s[22].name+"",r,i,a,c,u=s[22].quoteCount+"",f,d,p,_;function k(){return s[11](s[24])}return{c(){e=g("div"),t=g("button"),t.textContent="×",n=C(),o=g("span"),r=H(l),a=C(),c=g("span"),f=H(u),d=C(),m(t,"class","text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"),m(o,"class","grow text-left overflow-hidden text-ellipsis whitespace-nowrap"),m(o,"title",i=s[22].name),m(c,"class","text-xs px-1 rounded-md bg-gray-600 text-white font-bold"),m(e,"class","tab svelte-af0fhv"),le(e,"active",s[16])},m(A,w){S(A,e,w),h(e,t),h(e,n),h(e,o),h(o,r),h(e,a),h(e,c),h(c,f),S(A,d,w),p||(_=[Z(t,"click",k),Z(e,"click",function(){Re(s[25])&&s[25].apply(this,arguments)})],p=!0)},p(A,w){s=A,w&4&&l!==(l=s[22].name+"")&&Ze(r,l),w&4&&i!==(i=s[22].name)&&m(o,"title",i),w&4&&u!==(u=s[22].quoteCount+"")&&Ze(f,u),w&65536&&le(e,"active",s[16])},d(A){A&&E(e),A&&E(d),p=!1,ye(_)}}}function ar(s){let e,t;return e=new xt({props:{$$slots:{default:[Yh,({active:n,activate:o})=>({16:n,25:o}),({active:n,activate:o})=>(n?65536:0)|(o?33554432:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&570490884&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Vh(s){let e,t,n,o,l,r,i=(s[21]instanceof Error?s[21].message:s[21])+"",a;return{c(){e=g("div"),t=g("div"),n=g("div"),n.textContent="Loading quotes error",o=C(),l=g("div"),r=g("strong"),a=H(i),m(n,"class","text-red-400"),m(r,"class","text-red-600"),m(t,"class","flex flex-col items-center"),m(e,"class","h-full flex items-center justify-center")},m(c,u){S(c,e,u),h(e,t),h(t,n),h(t,o),h(t,l),h(l,r),h(r,a)},p(c,u){u&8&&i!==(i=(c[21]instanceof Error?c[21].message:c[21])+"")&&Ze(a,i)},d(c){c&&E(e)}}}function em(s){let e,t=s[17],n=[];for(let o=0;o<t.length;o+=1)n[o]=cr(sr(s,t,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=Te()},m(o,l){for(let r=0;r<n.length;r+=1)n[r].m(o,l);S(o,e,l)},p(o,l){if(l&8){t=o[17];let r;for(r=0;r<t.length;r+=1){const i=sr(o,t,r);n[r]?n[r].p(i,l):(n[r]=cr(i),n[r].c(),n[r].m(e.parentNode,e))}for(;r<n.length;r+=1)n[r].d(1);n.length=t.length}},d(o){Le(n,o),o&&E(e)}}}function cr(s){let e,t,n,o,l,r=s[18].en+"",i,a,c,u=s[18].author+"",f,d;return{c(){e=g("div"),t=g("span"),t.textContent="“",n=C(),o=g("div"),l=g("div"),i=H(r),a=C(),c=g("div"),f=H(u),d=C(),m(t,"class","text-gray-200 text-7xl font-bold leading-[75%] mr-2"),m(l,"class","mb-3 leading-6"),m(c,"class","font-semibold italic text-right"),m(o,"class","grow"),m(e,"class","mb-2 last:mb-0 flex items-start")},m(p,_){S(p,e,_),h(e,t),h(e,n),h(e,o),h(o,l),h(l,i),h(o,a),h(o,c),h(c,f),h(e,d)},p(p,_){_&8&&r!==(r=p[18].en+"")&&Ze(i,r),_&8&&u!==(u=p[18].author+"")&&Ze(f,u)},d(p){p&&E(e)}}}function tm(s){let e,t,n,o,l;return{c(){e=g("div"),t=g("div"),n=g("div"),o=C(),l=g("div"),l.textContent="Loading quotes...",m(n,"class","text-blue-800 w-12 h-12 "+s[5]+" svelte-af0fhv"),m(l,"class","text-blue-800"),m(t,"class","flex flex-col items-center"),m(e,"class","h-full flex items-center justify-center")},m(r,i){S(r,e,i),h(e,t),h(t,n),h(t,o),h(t,l)},p:q,d(r){r&&E(e)}}}function nm(s){let e,t,n,o={ctx:s,current:null,token:null,hasCatch:!0,pending:tm,then:em,catch:Vh,value:17,error:21};return xs(t=s[13],o),{c(){e=g("div"),o.block.c(),n=C(),m(e,"class","px-4 overflow-y-auto h-full panel svelte-af0fhv"),le(e,"active",s[16])},m(l,r){S(l,e,r),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,S(l,n,r)},p(l,r){s=l,o.ctx=s,r&8&&t!==(t=s[13])&&xs(t,o)||yi(o,s,r),r&65536&&le(e,"active",s[16])},d(l){l&&E(e),o.block.d(),o.token=null,o=null,l&&E(n)}}}function ur(s){let e,t;return e=new At({props:{$$slots:{default:[nm,({active:n})=>({16:n}),({active:n})=>n?65536:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&536936456&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function sm(s){let e,t,n,o,l=s[2],r=[];for(let f=0;f<l.length;f+=1)r[f]=ar(or(s,l,f));const i=f=>T(r[f],1,1,()=>{r[f]=null});let a=s[3],c=[];for(let f=0;f<a.length;f+=1)c[f]=ur(nr(s,a,f));const u=f=>T(c[f],1,1,()=>{c[f]=null});return{c(){e=g("div");for(let f=0;f<r.length;f+=1)r[f].c();t=C(),n=g("div");for(let f=0;f<c.length;f+=1)c[f].c();m(e,"class","basis-[24ch] overflow-x-hidden shrink-0 h-full overflow-y-auto"),m(n,"class","grow h-full")},m(f,d){S(f,e,d);for(let p=0;p<r.length;p+=1)r[p].m(e,null);S(f,t,d),S(f,n,d);for(let p=0;p<c.length;p+=1)c[p].m(n,null);o=!0},p(f,d){if(d&33620100){l=f[2];let p;for(p=0;p<l.length;p+=1){const _=or(f,l,p);r[p]?(r[p].p(_,d),v(r[p],1)):(r[p]=ar(_),r[p].c(),v(r[p],1),r[p].m(e,null))}for(de(),p=l.length;p<r.length;p+=1)i(p);pe()}if(d&65576){a=f[3];let p;for(p=0;p<a.length;p+=1){const _=nr(f,a,p);c[p]?(c[p].p(_,d),v(c[p],1)):(c[p]=ur(_),c[p].c(),v(c[p],1),c[p].m(n,null))}for(de(),p=a.length;p<c.length;p+=1)u(p);pe()}},i(f){if(!o){for(let d=0;d<l.length;d+=1)v(r[d]);for(let d=0;d<a.length;d+=1)v(c[d]);o=!0}},o(f){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)T(r[d]);c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)T(c[d]);o=!1},d(f){f&&E(e),Le(r,f),f&&E(t),f&&E(n),Le(c,f)}}}function om(s){let e,t,n,o,l,r;function i(f,d){return f[0]==null?Zh:Gh}let a=i(s),c=a(s),u=s[2].length&&ir(s);return{c(){e=g("section"),t=g("div"),t.innerHTML=`Example of vertical tab layout. <small class="line-through">Thanks to the authors of <a target="_blank" href="https://github.com/skolakoda" rel="noreferrer">Škola koda</a>
      for the useful and convenient
      <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">API</a></small>. Now the API doesn&#39;t work. JSON from the project
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">Škola koda</a> is used`,n=C(),o=g("div"),c.c(),l=C(),u&&u.c(),m(t,"class","mb-4 text-center leading-5"),m(o,"class","flex items-center justify-center gap-2"),m(e,"class","prose max-w-none my-4")},m(f,d){S(f,e,d),h(e,t),h(e,n),h(e,o),c.m(o,null),h(e,l),u&&u.m(e,null),r=!0},p(f,[d]){a===(a=i(f))&&c?c.p(f,d):(c.d(1),c=a(f),c&&(c.c(),c.m(o,null))),f[2].length?u?(u.p(f,d),d&4&&v(u,1)):(u=ir(f),u.c(),v(u,1),u.m(e,null)):u&&(de(),T(u,1,1,()=>{u=null}),pe())},i(f){r||(v(u),r=!0)},o(f){T(u),r=!1},d(f){f&&E(e),c.d(),u&&u.d()}}}const lm="skolacoda-quotes.json",ra=100;function ia(){return ct(this,null,function*(){const s=yield fetch(lm);if(s.status>=400){const e=yield s.text();throw new Error(`${s.status}: ${e||s.statusText}`)}return yield new Promise(e=>setTimeout(e,ra)),s.json()})}function rm(){return ct(this,null,function*(){const s=Object.entries(la(yield ia(),"author")).reduce((e,[t,n])=>(e.push({name:t,quoteCount:n.length}),e),[]).sort((e,t)=>e.name.localeCompare(t.name));return yield new Promise(e=>setTimeout(e,ra)),s})}function im(s){return ct(this,null,function*(){var e;return(e=la(yield ia(),"author")[s])!=null?e:[]})}function am(s,e,t){const n="w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin";let o,l,r=[],i=[],a=NaN;function c(A){return A!=null&&!r.includes(A)?(t(2,r=[A,...r]),t(3,i=[im(A.name),...i]),t(4,a=0),!0):!1}function u(A){A>=0&&A<r.length&&(t(2,r=[...r.slice(0,A),...r.slice(A+1)]),t(3,i=[...i.slice(0,A),...i.slice(A+1)]))}const f=()=>{t(0,o=rm())};function d(){l=qn(this),t(1,l),t(0,o)}const p=()=>c(l)?t(1,l=void 0):void 0,_=A=>u(A);function k(A){a=A,t(4,a)}return[o,l,r,i,a,n,c,u,f,d,p,_,k]}let cm=class extends W{constructor(e){super(),K(this,e,am,om,j,{})}};function um(s){let e,t,n,o,l;return t=new cm({}),o=new st({props:{code:`<script lang="ts" context="module">
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
`}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),L(o.$$.fragment),m(e,"class","prose max-w-none my-4")},m(r,i){S(r,e,i),O(t,e,null),h(e,n),O(o,e,null),l=!0},p:q,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T(o.$$.fragment,r),l=!1},d(r){r&&E(e),P(t),P(o)}}}let fm=class extends W{constructor(e){super(),K(this,e,null,um,j,{})}};function fr(s,e,t){const n=s.slice();return n[11]=e[t],n[13]=t,n}function dr(s,e,t){const n=s.slice();return n[11]=e[t],n[13]=t,n}function pr(s){let e,t,n,o;function l(a){s[7](a)}function r(a){s[8](a)}let i={$$slots:{default:[hm]},$$scope:{ctx:s}};return s[2]!==void 0&&(i.selected=s[2]),s[3]!==void 0&&(i.length=s[3]),e=new On({props:i}),Fe.push(()=>bt(e,"selected",l)),Fe.push(()=>bt(e,"length",r)),{c(){L(e.$$.fragment)},m(a,c){O(e,a,c),o=!0},p(a,c){const u={};c&131087&&(u.$$scope={dirty:c,ctx:a}),!t&&c&4&&(t=!0,u.selected=a[2],kt(()=>t=!1)),!n&&c&8&&(n=!0,u.length=a[3],kt(()=>n=!1)),e.$set(u)},i(a){o||(v(e.$$.fragment,a),o=!0)},o(a){T(e.$$.fragment,a),o=!1},d(a){P(e,a)}}}function dm(s){let e,t,n,o,l,r,i;return{c(){e=g("button"),t=H("Tab #"),n=H(s[13]),l=C(),m(e,"class","svelte-wogwwx"),le(e,"active",s[14])},m(a,c){S(a,e,c),h(e,t),h(e,n),S(a,l,c),r||(i=[Z(e,"click",function(){Re(s[16])&&s[16].apply(this,arguments)}),Ke(o=Bs.call(null,e,{x:s[14]}))],r=!0)},p(a,c){s=a,o&&Re(o.update)&&c&16384&&o.update.call(null,{x:s[14]}),c&16384&&le(e,"active",s[14])},d(a){a&&E(e),a&&E(l),r=!1,ye(i)}}}function hr(s){let e,t;return e=new xt({props:{$$slots:{default:[dm,({active:n,activate:o})=>({14:n,16:o}),({active:n,activate:o})=>(n?16384:0)|(o?65536:0)]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&212992&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function mr(s){let e,t,n,o,l,r,i,a,c,u;return{c(){e=g("div"),t=g("button"),n=H("‹"),l=C(),r=g("button"),i=H("›"),t.disabled=o=s[2]===0,m(t,"class","svelte-wogwwx"),r.disabled=a=s[2]>=s[3]-1,m(r,"class","svelte-wogwwx"),m(e,"class","arrows svelte-wogwwx")},m(f,d){S(f,e,d),h(e,t),h(t,n),h(e,l),h(e,r),h(r,i),c||(u=[Z(t,"click",s[5]),Z(r,"click",s[6])],c=!0)},p(f,d){d&4&&o!==(o=f[2]===0)&&(t.disabled=o),d&12&&a!==(a=f[2]>=f[3]-1)&&(r.disabled=a)},d(f){f&&E(e),c=!1,ye(u)}}}function pm(s){let e,t,n,o,l,r,i;return{c(){e=g("div"),t=g("div"),n=H("Tab content #"),o=H(s[13]),l=C(),r=g("div"),r.textContent=`Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias unde minus expedita
              saepe dolorem accusamus molestias omnis repellat architecto, voluptate ullam rem et
              nihil exercitationem corporis, earum quasi accusantium.`,i=C(),m(t,"class","text-lg text-black mb-2"),m(r,"class","text-gray-500 text-sm mb-2"),m(e,"class","panel svelte-wogwwx"),le(e,"active",s[14])},m(a,c){S(a,e,c),h(e,t),h(t,n),h(t,o),h(e,l),h(e,r),S(a,i,c)},p(a,c){c&16384&&le(e,"active",a[14])},d(a){a&&E(e),a&&E(i)}}}function gr(s){let e,t;return e=new At({props:{$$slots:{default:[pm,({active:n})=>({14:n}),({active:n})=>n?16384:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const l={};o&147456&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function hm(s){let e,t,n,o,l,r,i,a,c,u={length:s[0]},f=[];for(let w=0;w<u.length;w+=1)f[w]=hr(dr(s,u,w));const d=w=>T(f[w],1,1,()=>{f[w]=null});let p=s[1]&&mr(s),_={length:s[0]},k=[];for(let w=0;w<_.length;w+=1)k[w]=gr(fr(s,_,w));const A=w=>T(k[w],1,1,()=>{k[w]=null});return{c(){e=g("div"),t=g("div");for(let w=0;w<f.length;w+=1)f[w].c();o=C(),p&&p.c(),l=C();for(let w=0;w<k.length;w+=1)k[w].c();r=Te(),m(t,"class","tabs svelte-wogwwx"),le(t,"is-overflow",s[1]),m(e,"class","tabs-list svelte-wogwwx")},m(w,$){S(w,e,$),h(e,t);for(let x=0;x<f.length;x+=1)f[x].m(t,null);h(e,o),p&&p.m(e,null),S(w,l,$);for(let x=0;x<k.length;x+=1)k[x].m(w,$);S(w,r,$),i=!0,a||(c=Ke(n=s[4].call(null,t,s[3])),a=!0)},p(w,$){if($&81921){u={length:w[0]};let x;for(x=0;x<u.length;x+=1){const R=dr(w,u,x);f[x]?(f[x].p(R,$),v(f[x],1)):(f[x]=hr(R),f[x].c(),v(f[x],1),f[x].m(t,null))}for(de(),x=u.length;x<f.length;x+=1)d(x);pe()}if(n&&Re(n.update)&&$&8&&n.update.call(null,w[3]),(!i||$&2)&&le(t,"is-overflow",w[1]),w[1]?p?p.p(w,$):(p=mr(w),p.c(),p.m(e,null)):p&&(p.d(1),p=null),$&16385){_={length:w[0]};let x;for(x=0;x<_.length;x+=1){const R=fr(w,_,x);k[x]?(k[x].p(R,$),v(k[x],1)):(k[x]=gr(R),k[x].c(),v(k[x],1),k[x].m(r.parentNode,r))}for(de(),x=_.length;x<k.length;x+=1)A(x);pe()}},i(w){if(!i){for(let $=0;$<u.length;$+=1)v(f[$]);for(let $=0;$<_.length;$+=1)v(k[$]);i=!0}},o(w){f=f.filter(Boolean);for(let $=0;$<f.length;$+=1)T(f[$]);k=k.filter(Boolean);for(let $=0;$<k.length;$+=1)T(k[$]);i=!1},d(w){w&&E(e),Le(f,w),p&&p.d(),w&&E(l),Le(k,w),w&&E(r),a=!1,c()}}}function mm(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$,x,R,N=s[0]>0&&pr(s);return{c(){e=g("section"),N&&N.c(),t=C(),n=g("section"),o=g("label"),l=g("span"),l.textContent="Number of tabs",r=C(),i=g("input"),a=C(),c=g("label"),u=g("input"),f=C(),d=g("span"),d.textContent="Is overflow",p=C(),_=g("label"),k=g("span"),k.textContent="Selected index",A=C(),w=g("input"),m(e,"class","demo svelte-wogwwx"),m(i,"class","input max-w-[7ch]"),m(i,"min","1"),m(i,"type","number"),m(o,"class","svelte-wogwwx"),m(u,"class","input"),m(u,"type","checkbox"),u.disabled=!0,u.checked=s[1],m(c,"class","svelte-wogwwx"),m(w,"class","input max-w-[7ch]"),m(w,"type","number"),m(_,"class","svelte-wogwwx"),m(n,"class","controls svelte-wogwwx")},m(y,D){S(y,e,D),N&&N.m(e,null),S(y,t,D),S(y,n,D),h(n,o),h(o,l),h(o,r),h(o,i),Ge(i,s[0]),h(n,a),h(n,c),h(c,u),h(c,f),h(c,d),h(n,p),h(n,_),h(_,k),h(_,A),h(_,w),Ge(w,s[2]),$=!0,x||(R=[Z(i,"input",s[9]),Z(w,"input",s[10])],x=!0)},p(y,[D]){y[0]>0?N?(N.p(y,D),D&1&&v(N,1)):(N=pr(y),N.c(),v(N,1),N.m(e,null)):N&&(de(),T(N,1,1,()=>{N=null}),pe()),D&1&&tt(i.value)!==y[0]&&Ge(i,y[0]),(!$||D&2)&&(u.checked=y[1]),D&4&&tt(w.value)!==y[2]&&Ge(w,y[2])},i(y){$||(v(N),$=!0)},o(y){T(N),$=!1},d(y){y&&E(e),N&&N.d(),y&&E(t),y&&E(n),x=!1,ye(R)}}}function gm(s,e,t){let n=25,o=!1,l=NaN,r=0;function i(_,k){const A=()=>_.scrollWidth>_.offsetWidth;return t(1,o=A()),{update(){t(1,o=A())}}}const a=()=>t(2,l--,l),c=()=>t(2,l++,l);function u(_){l=_,t(2,l)}function f(_){r=_,t(3,r)}function d(){n=tt(this.value),t(0,n)}function p(){l=tt(this.value),t(2,l)}return[n,o,l,r,i,a,c,u,f,d,p]}let _m=class extends W{constructor(e){super(),K(this,e,gm,mm,j,{})}};function bm(s){let e,t,n,o,l,r,i;return o=new _m({}),r=new st({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=g("section"),t=g("div"),t.innerHTML='This example uses <a href="./?c=scroll-child-action"><code>@apsc/scroll-child-action</code></a>',n=C(),L(o.$$.fragment),l=C(),L(r.$$.fragment),m(t,"class","w-fit mx-auto mb-4"),m(e,"class","prose max-w-none my-4")},m(a,c){S(a,e,c),h(e,t),h(e,n),O(o,e,null),h(e,l),O(r,e,null),i=!0},p:q,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){T(o.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),P(o),P(r)}}}let $m=class extends W{constructor(e){super(),K(this,e,null,bm,j,{})}};function _r(s){let e,t,n,o;return{c(){e=g("a"),t=g("img"),m(t,"class","w-[3.75em] mx-auto my-0"),Cn(t.src,n=Ii)||m(t,"src",n),m(t,"alt","NPM logo"),m(e,"class","block"),m(e,"href",o=s[1].npm),m(e,"target","_blank"),m(e,"rel","noreferrer")},m(l,r){S(l,e,r),h(e,t)},p(l,r){r&2&&o!==(o=l[1].npm)&&m(e,"href",o)},d(l){l&&E(e)}}}function br(s){let e,t,n,o;return{c(){e=g("a"),t=g("img"),m(t,"class","h-[2em] mx-auto my-0"),Cn(t.src,n=Bi)||m(t,"src",n),m(t,"alt","NPM logo"),m(e,"class","block"),m(e,"href",o=s[1].github),m(e,"target","_blank"),m(e,"rel","noreferrer")},m(l,r){S(l,e,r),h(e,t)},p(l,r){r&2&&o!==(o=l[1].github)&&m(e,"href",o)},d(l){l&&E(e)}}}function vm(s){let e,t,n,o,l,r,i,a=s[1].npm&&_r(s),c=s[1].github&&br(s);return{c(){e=g("div"),t=g("a"),t.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg> 
    <span>Home</span>`,n=C(),a&&a.c(),o=C(),c&&c.c(),m(t,"class","flex items-center gap-1"),m(t,"href","/"),m(e,"class",l="w-fit space-y-2"+(s[0]?" "+s[0]:""))},m(u,f){S(u,e,f),h(e,t),h(e,n),a&&a.m(e,null),h(e,o),c&&c.m(e,null),r||(i=Z(t,"click",Un(s[2])),r=!0)},p(u,[f]){u[1].npm?a?a.p(u,f):(a=_r(u),a.c(),a.m(e,o)):a&&(a.d(1),a=null),u[1].github?c?c.p(u,f):(c=br(u),c.c(),c.m(e,null)):c&&(c.d(1),c=null),f&1&&l!==(l="w-fit space-y-2"+(u[0]?" "+u[0]:""))&&m(e,"class",l)},i:q,o:q,d(u){u&&E(e),a&&a.d(),c&&c.d(),r=!1,i()}}}function wm(s,e,t){let n;Ft(s,Gn,i=>t(3,n=i));let{class:o=void 0}=e,{links:l={npm:"",github:""}}=e;function r(){qc(Gn,n=new String(""),n)}return s.$$set=i=>{"class"in i&&t(0,o=i.class),"links"in i&&t(1,l=i.links)},[o,l,r]}class _n extends W{constructor(e){super(),K(this,e,wm,vm,j,{class:0,links:1})}}function km(s){let e;return{c(){e=H("API")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function ym(s){let e;return{c(){e=H("Base example")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function Tm(s){let e;return{c(){e=H("Nested example")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function Em(s){let e;return{c(){e=H("Scrolling tabs")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function Sm(s){let e;return{c(){e=H("Quotes example")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function xm(s){let e,t,n,o,l,r,i,a,c,u;return e=new Ue({props:{$$slots:{default:[km]},$$scope:{ctx:s}}}),n=new Ue({props:{$$slots:{default:[ym]},$$scope:{ctx:s}}}),l=new Ue({props:{$$slots:{default:[Tm]},$$scope:{ctx:s}}}),i=new Ue({props:{$$slots:{default:[Em]},$$scope:{ctx:s}}}),c=new Ue({props:{$$slots:{default:[Sm]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment),r=C(),L(i.$$.fragment),a=C(),L(c.$$.fragment)},m(f,d){O(e,f,d),S(f,t,d),O(n,f,d),S(f,o,d),O(l,f,d),S(f,r,d),O(i,f,d),S(f,a,d),O(c,f,d),u=!0},p(f,d){const p={};d&4&&(p.$$scope={dirty:d,ctx:f}),e.$set(p);const _={};d&4&&(_.$$scope={dirty:d,ctx:f}),n.$set(_);const k={};d&4&&(k.$$scope={dirty:d,ctx:f}),l.$set(k);const A={};d&4&&(A.$$scope={dirty:d,ctx:f}),i.$set(A);const w={};d&4&&(w.$$scope={dirty:d,ctx:f}),c.$set(w)},i(f){u||(v(e.$$.fragment,f),v(n.$$.fragment,f),v(l.$$.fragment,f),v(i.$$.fragment,f),v(c.$$.fragment,f),u=!0)},o(f){T(e.$$.fragment,f),T(n.$$.fragment,f),T(l.$$.fragment,f),T(i.$$.fragment,f),T(c.$$.fragment,f),u=!1},d(f){P(e,f),f&&E(t),P(n,f),f&&E(o),P(l,f),f&&E(r),P(i,f),f&&E(a),P(c,f)}}}function Am(s){let e,t;return e=new $h({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Cm(s){let e,t;return e=new Lh({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Nm(s){let e,t;return e=new Kh({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function $r(s){let e,t;return e=new $m({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Mm(s){let e,t,n=s[1]&&$r();return{c(){n&&n.c(),e=Te()},m(o,l){n&&n.m(o,l),S(o,e,l),t=!0},p(o,l){o[1]?n?l&2&&v(n,1):(n=$r(),n.c(),v(n,1),n.m(e.parentNode,e)):n&&(de(),T(n,1,1,()=>{n=null}),pe())},i(o){t||(v(n),t=!0)},o(o){T(n),t=!1},d(o){n&&n.d(o),o&&E(e)}}}function Rm(s){let e,t;return e=new fm({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Om(s){let e,t,n,o,l,r,i,a,c,u,f,d;return e=new dn({props:{$$slots:{default:[xm]},$$scope:{ctx:s}}}),n=new qe({props:{$$slots:{default:[Am]},$$scope:{ctx:s}}}),l=new qe({props:{$$slots:{default:[Cm]},$$scope:{ctx:s}}}),i=new qe({props:{$$slots:{default:[Nm]},$$scope:{ctx:s}}}),c=new qe({props:{$$slots:{default:[Mm,({active:p})=>({1:p}),({active:p})=>p?2:0]},$$scope:{ctx:s}}}),f=new qe({props:{$$slots:{default:[Rm]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment),r=C(),L(i.$$.fragment),a=C(),L(c.$$.fragment),u=C(),L(f.$$.fragment)},m(p,_){O(e,p,_),S(p,t,_),O(n,p,_),S(p,o,_),O(l,p,_),S(p,r,_),O(i,p,_),S(p,a,_),O(c,p,_),S(p,u,_),O(f,p,_),d=!0},p(p,_){const k={};_&4&&(k.$$scope={dirty:_,ctx:p}),e.$set(k);const A={};_&4&&(A.$$scope={dirty:_,ctx:p}),n.$set(A);const w={};_&4&&(w.$$scope={dirty:_,ctx:p}),l.$set(w);const $={};_&4&&($.$$scope={dirty:_,ctx:p}),i.$set($);const x={};_&6&&(x.$$scope={dirty:_,ctx:p}),c.$set(x);const R={};_&4&&(R.$$scope={dirty:_,ctx:p}),f.$set(R)},i(p){d||(v(e.$$.fragment,p),v(n.$$.fragment,p),v(l.$$.fragment,p),v(i.$$.fragment,p),v(c.$$.fragment,p),v(f.$$.fragment,p),d=!0)},o(p){T(e.$$.fragment,p),T(n.$$.fragment,p),T(l.$$.fragment,p),T(i.$$.fragment,p),T(c.$$.fragment,p),T(f.$$.fragment,p),d=!1},d(p){P(e,p),p&&E(t),P(n,p),p&&E(o),P(l,p),p&&E(r),P(i,p),p&&E(a),P(c,p),p&&E(u),P(f,p)}}}function Pm(s){let e,t,n,o,l,r,i,a,c;return t=new _n({props:{class:"float-right after:clear-right",links:{npm:s[0].npm,github:s[0].github}}}),a=new fn({props:{$$slots:{default:[Om]},$$scope:{ctx:s}}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),o=g("h1"),o.textContent="A component set and context class for organizing the Tabs interface",l=C(),r=g("ul"),r.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>with context to control tab switching</li>`,i=C(),L(a.$$.fragment),m(o,"class","text-2xl"),m(r,"class","leading-6 mb-8"),m(e,"class","prose max-w-none my-4")},m(u,f){S(u,e,f),O(t,e,null),h(e,n),h(e,o),h(e,l),h(e,r),h(e,i),O(a,e,null),c=!0},p(u,[f]){const d={};f&4&&(d.$$scope={dirty:f,ctx:u}),a.$set(d)},i(u){c||(v(t.$$.fragment,u),v(a.$$.fragment,u),c=!0)},o(u){T(t.$$.fragment,u),T(a.$$.fragment,u),c=!1},d(u){u&&E(e),P(t),P(a)}}}function Lm(s){const e=un("@apsc/tabs");return hn(document.title.replace(/(•).*$/,"$1 Tabs")),[e]}let Dm=class extends W{constructor(e){super(),K(this,e,Lm,Pm,j,{})}};const Im=`<div class="component__source">Source <code>Notifications.svelte</code></div>
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
`;function Bm(s){let e,t,n;return t=new gn({props:{source:Im}}),{c(){e=g("section"),L(t.$$.fragment),m(e,"class","documentation")},m(o,l){S(o,e,l),O(t,e,null),n=!0},p:q,i(o){n||(v(t.$$.fragment,o),n=!0)},o(o){T(t.$$.fragment,o),n=!1},d(o){o&&E(e),P(t)}}}class zm extends W{constructor(e){super(),K(this,e,null,Bm,j,{})}}const Hm=`.c-notifications {
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
`,Fm=`.c-notifications {
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
`;function jm(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function aa(s){const e=s-1;return e*e*e+1}function Um(s,{delay:e=0,duration:t=400,easing:n=jm,amount:o=5,opacity:l=0}={}){const r=getComputedStyle(s),i=+r.opacity,a=r.filter==="none"?"":r.filter,c=i*(1-l);return{delay:e,duration:t,easing:n,css:(u,f)=>`opacity: ${i-c*f}; filter: ${a} blur(${f*o}px);`}}function qm(s,{delay:e=0,duration:t=400,easing:n=ui}={}){const o=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:n,css:l=>`opacity: ${l*o}`}}function Mn(s,{delay:e=0,duration:t=400,easing:n=aa}={}){const o=getComputedStyle(s),l=+o.opacity,r=parseFloat(o.height),i=parseFloat(o.paddingTop),a=parseFloat(o.paddingBottom),c=parseFloat(o.marginTop),u=parseFloat(o.marginBottom),f=parseFloat(o.borderTopWidth),d=parseFloat(o.borderBottomWidth);return{delay:e,duration:t,easing:n,css:p=>`overflow: hidden;opacity: ${Math.min(p*20,1)*l};height: ${p*r}px;padding-top: ${p*i}px;padding-bottom: ${p*a}px;margin-top: ${p*c}px;margin-bottom: ${p*u}px;border-top-width: ${p*f}px;border-bottom-width: ${p*d}px;`}}function Km(s,{delay:e=0,duration:t=400,easing:n=aa,start:o=0,opacity:l=0}={}){const r=getComputedStyle(s),i=+r.opacity,a=r.transform==="none"?"":r.transform,c=1-o,u=i*(1-l);return{delay:e,duration:t,easing:n,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${i-u*d}
		`}}function vr(s,e,t){const n=s.slice();return n[8]=e[t],n}const Wm=s=>({notification:s&16}),wr=s=>({notification:s[8]});function Gm(s){let e,t,n=(s[8].message||"No message")+"",o,l,r,i,a,c,u,f;function d(){return s[7](s[8])}return{c(){e=g("div"),t=g("span"),o=C(),l=g("span"),r=C(),m(t,"class","c-notifications__item__message"),m(l,"role","button"),m(l,"aria-label","Close notification"),m(l,"class","c-notifications__item__close"),m(e,"class",i="c-notifications__item"+(s[8].type?" "+s[8].type:""))},m(p,_){S(p,e,_),h(e,t),t.innerHTML=n,h(e,o),h(e,l),h(e,r),c=!0,u||(f=Z(l,"click",d),u=!0)},p(p,_){s=p,(!c||_&16)&&n!==(n=(s[8].message||"No message")+"")&&(t.innerHTML=n),(!c||_&16&&i!==(i="c-notifications__item"+(s[8].type?" "+s[8].type:"")))&&m(e,"class",i)},i(p){c||(pt(()=>{a||(a=Xt(e,s[2],s[3],!0)),a.run(1)}),c=!0)},o(p){a||(a=Xt(e,s[2],s[3],!1)),a.run(0),c=!1},d(p){p&&E(e),p&&a&&a.end(),u=!1,f()}}}function kr(s,e){let t,n;const o=e[6].default,l=Se(o,e,e[5],wr),r=l||Gm(e);return{key:s,first:null,c(){t=Te(),r&&r.c(),this.first=t},m(i,a){S(i,t,a),r&&r.m(i,a),n=!0},p(i,a){e=i,l?l.p&&(!n||a&48)&&Ae(l,o,e,e[5],n?xe(o,e[5],a,Wm):Ce(e[5]),wr):r&&r.p&&(!n||a&24)&&r.p(e,n?a:-1)},i(i){n||(v(r,i),n=!0)},o(i){T(r,i),n=!1},d(i){i&&E(t),r&&r.d(i)}}}function Zm(s){let e,t=[],n=new Map,o,l,r,i=s[4];const a=c=>c[8].id;for(let c=0;c<i.length;c+=1){let u=vr(s,i,c),f=a(u);n.set(f,t[c]=kr(f,u))}return{c(){e=g("div");for(let c=0;c<t.length;c+=1)t[c].c();m(e,"class",o="c-notifications"+(s[0]?" "+s[0]:"")),m(e,"style",l=s[1]||void 0)},m(c,u){S(c,e,u);for(let f=0;f<t.length;f+=1)t[f].m(e,null);r=!0},p(c,[u]){u&56&&(i=c[4],de(),t=ru(t,u,a,1,c,i,n,e,lu,kr,null,vr),pe()),(!r||u&1&&o!==(o="c-notifications"+(c[0]?" "+c[0]:"")))&&m(e,"class",o),(!r||u&2&&l!==(l=c[1]||void 0))&&m(e,"style",l)},i(c){if(!r){for(let u=0;u<i.length;u+=1)v(t[u]);r=!0}},o(c){for(let u=0;u<t.length;u+=1)T(t[u]);r=!1},d(c){c&&E(e);for(let u=0;u<t.length;u+=1)t[u].d()}}}let ys=!1;const Rs=function(){const{subscribe:s,set:e,update:t}=Vn([]);return{subscribe:s,clear(){e([])},push(n){if(!ys)throw new Error("No Notification component instance");const o=Xe({id:Symbol("Notification")},n);return t(l=>[...l,o]),n.timeout&&n.timeout>0&&setTimeout(()=>this.pop(o.id),n.timeout),o.id},pop(n){t(o=>{const l=o.findIndex(r=>r.id===n);return l>=0&&o.splice(l,1),o})}}}();function Qm(s,e,t){let n,o=q;Ft(s,Rs,d=>t(4,n=d)),s.$$.on_destroy.push(()=>o());let{$$slots:l={},$$scope:r}=e,{class:i=""}=e,{style:a=""}=e,{transitionFn:c=Mn}=e,{transitionParams:u={}}=e;an(()=>{if(ys)throw new Error("The Notifications component already has an instance");ys=!0}),Ls(()=>ys=!1);const f=d=>Rs.pop(d.id);return s.$$set=d=>{"class"in d&&t(0,i=d.class),"style"in d&&t(1,a=d.style),"transitionFn"in d&&t(2,c=d.transitionFn),"transitionParams"in d&&t(3,u=d.transitionParams),"$$scope"in d&&t(5,r=d.$$scope)},[i,a,c,u,n,r,l,f]}class Xm extends W{constructor(e){super(),K(this,e,Qm,Zm,j,{class:0,style:1,transitionFn:2,transitionParams:3})}}const uo=[{author:"Edsger W. Dijkstra",en:"Computer Science is no more about computers than astronomy is about telescopes."},{author:"Edsger W. Dijkstra",en:"Simplicity is prerequisite for reliability."},{author:"Edsger W. Dijkstra",en:"The computing scientist’s main challenge is not to get confused by the complexities of his own making."},{author:"Edsger W. Dijkstra",en:"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},{author:"Edsger W. Dijkstra",en:"A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent“."},{author:"Tony Hoare",en:"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},{author:"Jeff Hammerbacher",en:"The best minds of my generation are thinking about how to make people click ads."},{author:"Edsger W. Dijkstra",en:"The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities."},{author:"Edsger W. Dijkstra",en:'How do we convince people that in programming simplicity and clarity — in short: what mathematicians call "elegance" — are not a dispensable luxury, but a crucial matter that decides between success and failure?'},{author:"Fred Brooks",en:"Adding manpower to a late software project makes it later."},{author:"Michael Stal",en:"Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person."},{author:"Fred Brooks",en:"Nine women can't make a baby in one month."},{author:"Jeff Sickel",en:"Deleted code is debugged code."},{author:"Ken Thompson",en:"When in doubt, use brute force."},{author:"Fred Brooks",en:"When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned."},{author:"Fred Brooks",en:"If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two."},{author:"Fred Brooks",en:"Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect."},{author:"Fred Brooks",en:"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures."},{author:"Fred Brooks",en:'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.'},{author:"Donald Knuth",en:"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%."},{author:"Ken Thompson",en:"One of my most productive days was throwing away 1,000 lines of code."},{author:"Grace Hopper",en:"One accurate measurement is worth more than a thousand expert opinions."},{author:"Fred Brooks",en:"What one programmer can do in one month, two programmers can do in two months."},{author:"Rick Osborne",en:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},{author:"John Ousterhout",en:"A program that produces incorrect results twice as fast is infinitely slower."},{author:"Poul Anderson",en:"I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated."},{author:"Robert C. Martin",en:"Cleaning code does NOT take time. NOT cleaning code does take time."},{author:"David Gelernter",en:"Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity."},{author:"Edward V. Berard",en:"Walking on water and developing software from a specification are easy if both are frozen."},{author:"Brian Kernighan",en:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},{author:"Brian Kernighan",en:"Controlling complexity is the essence of computer programming."},{author:"Chris Wenham",en:"Debugging time increases as a square of the program’s size."},{author:"Seymour Cray",en:"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."},{author:"Ron Jeffries",en:"Code never lies, comments sometimes do."},{author:"Laurence J. Peter",en:"Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them."},{author:"Poul-Henning Kamp",en:'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.'},{author:"Albert Einstein",en:"I have no special talent. I am only passionately curious."},{author:"Robert C. Martin",en:"The proper use of comments is to compensate for our failure to express ourself in code."},{author:"Rob Pike",en:"When there is no type hierarchy you don’t have to manage the type hierarchy."},{author:"Steve Jobs",en:"Everybody should learn to program a computer, because it teaches you how to think."},{author:"Chris Sacca",en:"Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for."},{author:"Bill Gates",en:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},{author:"William Wulf",en:"More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity."},{author:"Edsger W. Dijkstra",en:"Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence."},{author:"Albert Einstein",en:"Imagination is more important than knowledge."}];function yr(s,e,t){const n=s.slice();return n[20]=e[t],n}function Tr(s,e,t){const n=s.slice();return n[23]=e[t],n}function Er(s){let e,t,n,o=s[23]+"",l,r,i;return{c(){e=g("label"),t=g("input"),n=C(),l=H(o),m(t,"type","radio"),m(t,"name","styles"),t.__value=s[23],t.value=t.__value,s[12][2].push(t),m(e,"class","mr-2 last:mr-0")},m(a,c){S(a,e,c),h(e,t),t.checked=t.__value===s[3],h(e,n),h(e,l),r||(i=Z(t,"change",s[17]),r=!0)},p(a,c){c&8&&(t.checked=t.__value===a[3])},d(a){a&&E(e),s[12][2].splice(s[12][2].indexOf(t),1),r=!1,i()}}}function Sr(s){let e,t=s[20]+"",n;return{c(){e=g("option"),n=H(t),e.__value=s[20],e.value=e.__value},m(o,l){S(o,e,l),h(e,n)},p:q,d(o){o&&E(e)}}}function Jm(s){let e,t=`<style type="text/css" data-text="test">${s[7][s[3]]}</style>`,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$,x,R,N,y,D,B,G,oe,re,ue,ve,$e,Ie,z,Q,Y,ne,U,ge,ie,ke,V,Ee,_e,Qe,Me,$t,jt,We,Tt,ot,ft,Ot,rt,fe,Yt;l=new Xm({props:{style:"display: flex; "+s[0]+s[1]}});let Pe=Object.keys(s[7]),be=[];for(let se=0;se<Pe.length;se+=1)be[se]=Er(Tr(s,Pe,se));let dt=s[8],He=[];for(let se=0;se<dt.length;se+=1)He[se]=Sr(yr(s,dt,se));return{c(){e=new $i(!1),n=Te(),o=C(),L(l.$$.fragment),r=C(),i=g("div"),i.innerHTML='This example uses quotes from the <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer">API</a>  <a target="_blank" rel="noreferrer" href="https://github.com/skolakoda">Škola koda</a>',a=C(),c=g("form"),u=g("div"),f=g("div"),d=g("div"),d.textContent="Side",p=C(),_=g("label"),k=g("input"),A=H(" left"),w=C(),$=g("label"),x=g("input"),R=H(" right"),N=C(),y=g("div"),D=g("div"),D.textContent="Direction",B=C(),G=g("label"),oe=g("input"),re=H(" from top"),ue=C(),ve=g("label"),$e=g("input"),Ie=H(" from bottom"),z=C(),Q=g("label"),Y=g("div"),Y.textContent="Timeout",ne=C(),U=g("input"),ge=C(),ie=g("div"),ke=g("div"),ke.textContent="Style",V=C();for(let se=0;se<be.length;se+=1)be[se].c();Ee=C(),_e=g("label"),Qe=g("textarea"),Me=C(),$t=g("div"),jt=g("label"),We=g("input"),Tt=C(),ot=g("select");for(let se=0;se<He.length;se+=1)He[se].c();ft=C(),Ot=g("div"),Ot.innerHTML=`<input class="input block w-40" type="submit" value="Notify"/> 
    <input class="input block w-40" type="reset" value="Clear"/>`,e.a=n,m(i,"class","mb-4 text-center"),m(d,"class","text-sm uppercase opacity-70"),m(k,"type","radio"),m(k,"name","hpos"),k.__value="left: 0; right: unset;",k.value=k.__value,s[12][0].push(k),m(x,"type","radio"),m(x,"name","hpos"),x.__value="right: 0;",x.value=x.__value,s[12][0].push(x),m(D,"class","text-sm uppercase opacity-70"),m(oe,"type","radio"),m(oe,"name","vpos"),oe.__value="top: 0; bottom: unset; flex-direction: column-reverse;",oe.value=oe.__value,s[12][1].push(oe),m($e,"type","radio"),m($e,"name","vpos"),$e.__value="top: unset; bottom: 0; flex-direction: column;",$e.value=$e.__value,s[12][1].push($e),m(Y,"class","text-sm uppercase opacity-70"),m(U,"class","input w-[9ch]"),m(U,"min","0"),m(U,"step","100"),m(U,"type","number"),m(ke,"class","text-sm uppercase opacity-70"),m(u,"class","flex gap-4 items-center justify-evenly mb-4"),m(Qe,"name","quote"),Qe.value=s[6],m(Qe,"rows","3"),m(Qe,"class","input w-full"),m(Qe,"placeholder","Quote"),m(_e,"class","block w-full mb-4"),m(We,"name","author"),We.value=s[5],m(We,"class","input w-full"),m(We,"type","text"),m(We,"placeholder","Author"),m(jt,"class","block w-full"),m(ot,"class","input block w-full"),s[4]===void 0&&pt(()=>s[18].call(ot)),m($t,"class","mb-4 flex gap-4"),m(Ot,"class","mx-auto w-fit flex gap-4"),m(c,"class","not-prose w-full")},m(se,Oe){e.m(t,document.head),h(document.head,n),S(se,o,Oe),O(l,se,Oe),S(se,r,Oe),S(se,i,Oe),S(se,a,Oe),S(se,c,Oe),h(c,u),h(u,f),h(f,d),h(f,p),h(f,_),h(_,k),k.checked=k.__value===s[0],h(_,A),h(f,w),h(f,$),h($,x),x.checked=x.__value===s[0],h($,R),h(u,N),h(u,y),h(y,D),h(y,B),h(y,G),h(G,oe),oe.checked=oe.__value===s[1],h(G,re),h(y,ue),h(y,ve),h(ve,$e),$e.checked=$e.__value===s[1],h(ve,Ie),h(u,z),h(u,Q),h(Q,Y),h(Q,ne),h(Q,U),Ge(U,s[2]),h(u,ge),h(u,ie),h(ie,ke),h(ie,V);for(let X=0;X<be.length;X+=1)be[X].m(ie,null);h(c,Ee),h(c,_e),h(_e,Qe),h(c,Me),h(c,$t),h($t,jt),h(jt,We),h($t,Tt),h($t,ot);for(let X=0;X<He.length;X+=1)He[X].m(ot,null);St(ot,s[4]),h(c,ft),h(c,Ot),rt=!0,fe||(Yt=[Z(k,"change",s[11]),Z(x,"change",s[13]),Z(oe,"change",s[14]),Z($e,"change",s[15]),Z(U,"input",s[16]),Z(ot,"change",s[18]),Z(c,"submit",Un(s[9])),Z(c,"reset",Un(s[19]))],fe=!0)},p(se,[Oe]){(!rt||Oe&8)&&t!==(t=`<style type="text/css" data-text="test">${se[7][se[3]]}</style>`)&&e.p(t);const X={};if(Oe&3&&(X.style="display: flex; "+se[0]+se[1]),l.$set(X),Oe&1&&(k.checked=k.__value===se[0]),Oe&1&&(x.checked=x.__value===se[0]),Oe&2&&(oe.checked=oe.__value===se[1]),Oe&2&&($e.checked=$e.__value===se[1]),Oe&4&&tt(U.value)!==se[2]&&Ge(U,se[2]),Oe&136){Pe=Object.keys(se[7]);let J;for(J=0;J<Pe.length;J+=1){const me=Tr(se,Pe,J);be[J]?be[J].p(me,Oe):(be[J]=Er(me),be[J].c(),be[J].m(ie,null))}for(;J<be.length;J+=1)be[J].d(1);be.length=Pe.length}if((!rt||Oe&64)&&(Qe.value=se[6]),(!rt||Oe&32&&We.value!==se[5])&&(We.value=se[5]),Oe&256){dt=se[8];let J;for(J=0;J<dt.length;J+=1){const me=yr(se,dt,J);He[J]?He[J].p(me,Oe):(He[J]=Sr(me),He[J].c(),He[J].m(ot,null))}for(;J<He.length;J+=1)He[J].d(1);He.length=dt.length}Oe&272&&St(ot,se[4])},i(se){rt||(v(l.$$.fragment,se),rt=!0)},o(se){T(l.$$.fragment,se),rt=!1},d(se){E(n),se&&e.d(),se&&E(o),P(l,se),se&&E(r),se&&E(i),se&&E(a),se&&E(c),s[12][0].splice(s[12][0].indexOf(k),1),s[12][0].splice(s[12][0].indexOf(x),1),s[12][1].splice(s[12][1].indexOf(oe),1),s[12][1].splice(s[12][1].indexOf($e),1),Le(be,se),Le(He,se),fe=!1,ye(Yt)}}}function Ym(s,e,t){let n,o,l=0,r="left: 0; right: unset;",i="top: 0; bottom: unset; flex-direction: column-reverse;",a=1e4,c={simple:Hm,bootstrap:Fm},u=Object.keys(c)[0];const f=["primary","secondary","success","danger","warning","info","light","dark"];let d=f[0];function p({currentTarget:D}){if(D instanceof HTMLFormElement){const B=D.elements.quote.value,G=D.author.value;Rs.push({message:[B?`<div>${B}</div>`:"",G?`<div class="italic text-right">${G}</div>`:""].filter(re=>!!re).join(""),type:d,timeout:a}),t(10,l=l+1>=uo.length?0:l+1);let oe=f.indexOf(d)+1;oe<0||oe>=f.length?t(4,d=f[0]):t(4,d=f[oe])}}const _=[[],[],[]];function k(){r=this.__value,t(0,r)}function A(){r=this.__value,t(0,r)}function w(){i=this.__value,t(1,i)}function $(){i=this.__value,t(1,i)}function x(){a=tt(this.value),t(2,a)}function R(){u=this.__value,t(3,u)}function N(){d=qn(this),t(4,d),t(8,f)}const y=()=>Rs.clear();return s.$$.update=()=>{s.$$.dirty&1024&&t(6,n=uo[l].en),s.$$.dirty&1024&&t(5,o=uo[l].author)},[r,i,a,u,d,o,n,c,f,p,l,k,_,A,w,$,x,R,N,y]}let Vm=class extends W{constructor(e){super(),K(this,e,Ym,Jm,j,{})}};function eg(s){let e,t,n,o,l;return t=new Vm({}),o=new st({props:{code:`<script lang="ts">
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
</form>`}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),L(o.$$.fragment),m(e,"class","prose max-w-none my-4")},m(r,i){S(r,e,i),O(t,e,null),h(e,n),O(o,e,null),l=!0},p:q,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T(o.$$.fragment,r),l=!1},d(r){r&&E(e),P(t),P(o)}}}let tg=class extends W{constructor(e){super(),K(this,e,null,eg,j,{})}};function ng(s){let e;return{c(){e=H("API")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function sg(s){let e;return{c(){e=H("Base example")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function og(s){let e,t,n,o;return e=new Ue({props:{$$slots:{default:[ng]},$$scope:{ctx:s}}}),n=new Ue({props:{$$slots:{default:[sg]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment)},m(l,r){O(e,l,r),S(l,t,r),O(n,l,r),o=!0},p(l,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:l}),e.$set(i);const a={};r&2&&(a.$$scope={dirty:r,ctx:l}),n.$set(a)},i(l){o||(v(e.$$.fragment,l),v(n.$$.fragment,l),o=!0)},o(l){T(e.$$.fragment,l),T(n.$$.fragment,l),o=!1},d(l){P(e,l),l&&E(t),P(n,l)}}}function lg(s){let e,t;return e=new zm({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function rg(s){let e,t;return e=new tg({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function ig(s){let e,t,n,o,l,r;return e=new dn({props:{$$slots:{default:[og]},$$scope:{ctx:s}}}),n=new qe({props:{$$slots:{default:[lg]},$$scope:{ctx:s}}}),l=new qe({props:{$$slots:{default:[rg]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment)},m(i,a){O(e,i,a),S(i,t,a),O(n,i,a),S(i,o,a),O(l,i,a),r=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(v(e.$$.fragment,i),v(n.$$.fragment,i),v(l.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&E(t),P(n,i),i&&E(o),P(l,i)}}}function ag(s){let e,t,n,o,l,r,i,a,c;return t=new _n({props:{class:"float-right after:clear-right",links:{npm:s[0].npm,github:s[0].github}}}),a=new fn({props:{$$slots:{default:[ig]},$$scope:{ctx:s}}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),o=g("h1"),o.textContent="Component for notifications globally for the entire application",l=C(),r=g("ul"),r.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>one instance for the entire application</li> 
    <li>with custom notification transition</li> 
    <li>custom notification element components</li> 
    <li>with configurable timeout for each notification</li>`,i=C(),L(a.$$.fragment),m(o,"class","text-2xl max-w-lg"),m(r,"class","leading-6 mb-8"),m(e,"class","prose max-w-none my-4")},m(u,f){S(u,e,f),O(t,e,null),h(e,n),h(e,o),h(e,l),h(e,r),h(e,i),O(a,e,null),c=!0},p(u,[f]){const d={};f&2&&(d.$$scope={dirty:f,ctx:u}),a.$set(d)},i(u){c||(v(t.$$.fragment,u),v(a.$$.fragment,u),c=!0)},o(u){T(t.$$.fragment,u),T(a.$$.fragment,u),c=!1},d(u){u&&E(e),P(t),P(a)}}}function cg(s){const e=un("@apsc/glob-notify");return hn(document.title.replace(/(•).*$/,"$1 GlobNotify")),[e]}let ug=class extends W{constructor(e){super(),K(this,e,cg,ag,j,{})}};const fg=`<div class="component__source">Source <code>ColorPicker.svelte</code></div>
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
`;function dg(s){let e,t,n;return t=new gn({props:{source:fg}}),{c(){e=g("section"),L(t.$$.fragment),m(e,"class","documentation")},m(o,l){S(o,e,l),O(t,e,null),n=!0},p:q,i(o){n||(v(t.$$.fragment,o),n=!0)},o(o){T(t.$$.fragment,o),n=!1},d(o){o&&E(e),P(t)}}}let pg=class extends W{constructor(e){super(),K(this,e,null,dg,j,{})}};function ca(s){var t;const e=(t=/^#([0-9a-f]{3,8})$/gi.exec(s))==null?void 0:t[1];if(e!=null){if(e.length===3||e.length===4)return e.split(/([0-9a-f])/gi).filter(Boolean);if(e.length===6||e.length===8)return e.split(/([0-9a-f]{2})/gi).filter(Boolean)}}function xr(s){try{return ca(s)!=null}catch(e){return!1}}function vt(s,e,t){return Math.max(Math.min(s,t),e)}function hg(s){return gg(Hs(s))}function Hs(s){var n;const e=(n=ca(s))==null?void 0:n.map(o=>o.length===1?o+o:o);if(e==null)throw new Error(`Invalid color ${s}`);const t={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return e[3]&&(t.a=Math.round(parseInt(e[3],16)/255*1e3)/1e3),t}function mg(s){const e=s.s/100,t=s.l/100,n=(1-Math.abs(2*t-1))*e,o=n*(1-Math.abs(s.h/60%2-1)),l=t-n/2;let r=0,i=0,a=0;0<=s.h&&s.h<60?(r=n,i=o,a=0):60<=s.h&&s.h<120?(r=o,i=n,a=0):120<=s.h&&s.h<180?(r=0,i=n,a=o):180<=s.h&&s.h<240?(r=0,i=o,a=n):240<=s.h&&s.h<300?(r=o,i=0,a=n):300<=s.h&&s.h<360&&(r=n,i=0,a=o),r=Math.round((r+l)*255),i=Math.round((i+l)*255),a=Math.round((a+l)*255);const c={r,g:i,b:a};return s.a!=null&&(c.a=s.a),c}function gg(s){const e=s.r/255,t=s.g/255,n=s.b/255,o=Math.max(e,t,n),l=Math.min(e,t,n),r=o-l;let i=0,a=0,c=0;r===0?i=0:o===e?i=(t-n)/r%6:o===t?i=(n-e)/r+2:i=(e-t)/r+4,i=Math.round(i*60),i<0&&(i+=360),a=(o+l)/2,c=r===0?0:r/(1-Math.abs(2*a-1));const u={h:i,s:Math.round(c*100),l:Math.round(a*100)};return s.a!=null&&(u.a=s.a),u}function _g(s){return Bo(mg(s))}function Bo(s){const e="#"+[s.r,s.g,s.b].map(n=>vt(n,0,255).toString(16).padStart(2,"0")).join(""),t=s.a!=null?Math.round(s.a*255):255;return t<255?e+Math.max(t,0).toString(16).padStart(2,"0"):e}function bg(s){return $g(Hs(s))}function $g(s){const e=vt(s.r,0,255)/255,t=vt(s.g,0,255)/255,n=vt(s.b,0,255)/255,o=Math.max(e,t,n),l=Math.min(e,t,n),r=o-l,i=o;let a=0,c=0;r&&(o===e&&(a=(t-n)/r),o===t&&(a=2+(n-e)/r),o===n&&(a=4+(e-t)/r),o&&(c=r/o)),a=a*60;const u=a<0?a+360:a,f=c*100,d=i*100;return s.a!=null&&s.a>=0?{h:u,s:f,v:d,a:vt(s.a,0,1)}:{h:u,s:f,v:d}}function fo(s){return Bo(vg(s))}function vg(s){const e=s.s/100,t=s.v/100;let n=e*t;const o=s.h/60;let l=n*(1-Math.abs(o%2-1));const r=t-n;n=n+r,l=l+r;const i=Math.floor(o)%6,a=[n,l,r,r,l,n][i],c=[l,n,n,l,r,r][i],u=[r,r,l,n,n,l][i],f=Math.round(a*255),d=Math.round(c*255),p=Math.round(u*255);return s.a!=null?{r:f,g:d,b:p,a:s.a}:{r:f,g:d,b:p}}function Ar(s){var o;typeof s=="string"&&(s=Hs(s));const e=[.2126,.7152,.0722],t=[s.r,s.g,s.b].reduce((l,r,i)=>(r/=255,r<.03928?r/=12.92:(r=(r+.055)/1.055,r*=r),l+r*e[i]),0),n=1-((o=s.a)!=null?o:1);return t+(1-t)*n}function wg(s){let e,t,n,o;return{c(){e=g("div"),t=g("div"),m(t,"class","c-color-picker__tone--marker"),Je(t,"left",s[0]+"%"),Je(t,"top",100-s[1]+"%"),m(e,"class","c-color-picker__tone"),m(e,"tabindex","0")},m(l,r){S(l,e,r),h(e,t),n||(o=Ke(s[2].call(null,e)),n=!0)},p(l,[r]){r&1&&Je(t,"left",l[0]+"%"),r&2&&Je(t,"top",100-l[1]+"%")},i:q,o:q,d(l){l&&E(e),n=!1,o()}}}function kg(s,e,t){let{s:n=0}=e,{v:o=0}=e;function l(r){function i(p){const{pageX:_,pageY:k}=p instanceof MouseEvent?p:p.changedTouches[0],{left:A,top:w,width:$,height:x}=r.getBoundingClientRect();t(0,n=vt((_-A-window.scrollX)/$,0,1)*100),t(1,o=100-vt((k-w-window.scrollY)/x,0,1)*100)}function a(p){i(p)}function c(){document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",c),document.removeEventListener("touchend",c),setTimeout(()=>{document.removeEventListener("click",f,{capture:!0})},0)}function u(p){r.focus(),document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",c),document.addEventListener("touchend",c),document.addEventListener("click",f,{capture:!0}),i(p),p.preventDefault()}function f(p){p.preventDefault(),p.stopPropagation()}function d(p){let k=100-o,A=n;switch(p.code){case"ArrowUp":k=vt(k-1,0,100);break;case"ArrowDown":k=vt(k+1,0,100),p.preventDefault();break;case"ArrowLeft":A=vt(A-1,0,100),p.preventDefault();break;case"ArrowRight":A=vt(A+1,0,100),p.preventDefault();break}A!==n&&t(0,n=A),100-k!==o&&t(1,o=100-k)}return r.addEventListener("mousedown",u),r.addEventListener("touchstart",u),r.addEventListener("keydown",d),{destroy(){c(),r.removeEventListener("mousedown",u),r.removeEventListener("touchstart",u),r.removeEventListener("keydown",d)}}}return s.$$set=r=>{"s"in r&&t(0,n=r.s),"v"in r&&t(1,o=r.v)},[n,o,l]}class yg extends W{constructor(e){super(),K(this,e,kg,wg,j,{s:0,v:1})}}var Tg="Expected a function",Cr=0/0,Eg="[object Symbol]",Sg=/^\s+|\s+$/g,xg=/^[-+]0x[0-9a-f]+$/i,Ag=/^0b[01]+$/i,Cg=/^0o[0-7]+$/i,Ng=parseInt,Mg=typeof Wt=="object"&&Wt&&Wt.Object===Object&&Wt,Rg=typeof self=="object"&&self&&self.Object===Object&&self,Og=Mg||Rg||Function("return this")(),Pg=Object.prototype,Lg=Pg.toString,Dg=Math.max,Ig=Math.min,po=function(){return Og.Date.now()};function Bg(s,e,t){var n,o,l,r,i,a,c=0,u=!1,f=!1,d=!0;if(typeof s!="function")throw new TypeError(Tg);e=Nr(e)||0,$o(t)&&(u=!!t.leading,f="maxWait"in t,l=f?Dg(Nr(t.maxWait)||0,e):l,d="trailing"in t?!!t.trailing:d);function p(y){var D=n,B=o;return n=o=void 0,c=y,r=s.apply(B,D),r}function _(y){return c=y,i=setTimeout(w,e),u?p(y):r}function k(y){var D=y-a,B=y-c,G=e-D;return f?Ig(G,l-B):G}function A(y){var D=y-a,B=y-c;return a===void 0||D>=e||D<0||f&&B>=l}function w(){var y=po();if(A(y))return $(y);i=setTimeout(w,k(y))}function $(y){return i=void 0,d&&n?p(y):(n=o=void 0,r)}function x(){i!==void 0&&clearTimeout(i),c=0,n=a=o=i=void 0}function R(){return i===void 0?r:$(po())}function N(){var y=po(),D=A(y);if(n=arguments,o=this,a=y,D){if(i===void 0)return _(a);if(f)return i=setTimeout(w,e),p(a)}return i===void 0&&(i=setTimeout(w,e)),r}return N.cancel=x,N.flush=R,N}function $o(s){var e=typeof s;return!!s&&(e=="object"||e=="function")}function zg(s){return!!s&&typeof s=="object"}function Hg(s){return typeof s=="symbol"||zg(s)&&Lg.call(s)==Eg}function Nr(s){if(typeof s=="number")return s;if(Hg(s))return Cr;if($o(s)){var e=typeof s.valueOf=="function"?s.valueOf():s;s=$o(e)?e+"":e}if(typeof s!="string")return s===0?s:+s;s=s.replace(Sg,"");var t=Ag.test(s);return t||Cg.test(s)?Ng(s.slice(2),t?2:8):xg.test(s)?Cr:+s}var Fg=Bg;function jg(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$;function x(y){s[9](y)}function R(y){s[10](y)}let N={};return s[2].s!==void 0&&(N.s=s[2].s),s[2].v!==void 0&&(N.v=s[2].v),n=new yg({props:N}),Fe.push(()=>bt(n,"s",x)),Fe.push(()=>bt(n,"v",R)),{c(){e=g("div"),t=g("div"),L(n.$$.fragment),r=C(),i=g("div"),a=C(),c=g("div"),u=g("input"),f=C(),d=g("div"),p=g("input"),m(i,"class","c-color-picker__sample"),m(u,"type","range"),m(u,"min","0"),m(u,"max","359"),m(u,"step","1"),m(c,"class","c-color-picker__hue"),m(p,"type","range"),m(p,"min","0"),m(p,"max","1"),m(p,"step",1/255),m(d,"class","c-color-picker__alpha"),m(t,"class","c-color-picker__body"),m(e,"class",_="c-color-picker"+(s[0]?" "+s[0]:"")),m(e,"style",k="--cp-tone: "+s[4]+"; --cp-color-opacity: "+s[5]+"; --cp-color: "+s[3]+"; "+s[1])},m(y,D){S(y,e,D),h(e,t),O(n,t,null),h(t,r),h(t,i),h(t,a),h(t,c),h(c,u),Ge(u,s[2].h),h(t,f),h(t,d),h(d,p),Ge(p,s[2].a),A=!0,w||($=[Z(u,"change",s[11]),Z(u,"input",s[11]),Z(p,"change",s[12]),Z(p,"input",s[12])],w=!0)},p(y,[D]){const B={};!o&&D&4&&(o=!0,B.s=y[2].s,kt(()=>o=!1)),!l&&D&4&&(l=!0,B.v=y[2].v,kt(()=>l=!1)),n.$set(B),D&4&&Ge(u,y[2].h),D&4&&Ge(p,y[2].a),(!A||D&1&&_!==(_="c-color-picker"+(y[0]?" "+y[0]:"")))&&m(e,"class",_),(!A||D&58&&k!==(k="--cp-tone: "+y[4]+"; --cp-color-opacity: "+y[5]+"; --cp-color: "+y[3]+"; "+y[1]))&&m(e,"style",k)},i(y){A||(v(n.$$.fragment,y),A=!0)},o(y){T(n.$$.fragment,y),A=!1},d(y){y&&E(e),P(n),w=!1,ye($)}}}function Ug(s,e,t){let{class:n=""}=e,{style:o=""}=e,{color:l="#000"}=e,{debounce:r=0}=e,i;function a(w){let{h:$,s:x,v:R,a:N=1}=bg(w);i!=null&&$===0&&x===0&&($=i.h),t(2,i={h:$,s:x,v:R,a:N})}let c,u,f,d;function p(w){s.$$.not_equal(i.s,w)&&(i.s=w,t(2,i))}function _(w){s.$$.not_equal(i.v,w)&&(i.v=w,t(2,i))}function k(){i.h=tt(this.value),t(2,i)}function A(){i.a=tt(this.value),t(2,i)}return s.$$set=w=>{"class"in w&&t(0,n=w.class),"style"in w&&t(1,o=w.style),"color"in w&&t(6,l=w.color),"debounce"in w&&t(7,r=w.debounce)},s.$$.update=()=>{s.$$.dirty&128&&t(8,c=Fg(w=>{t(6,l=w)},r)),s.$$.dirty&64&&a(l),s.$$.dirty&268&&(w=>{t(3,u=fo(w)),t(4,f=fo({h:w.h,s:100,v:100})),t(5,d=fo({h:w.h,s:w.s,v:w.v})),c(u)})(i)},[n,o,i,u,f,d,l,r,c,p,_,k,A]}class ua extends W{constructor(e){super(),K(this,e,Ug,jg,j,{class:0,style:1,color:6,debounce:7})}}function qg(s){let e,t,n,o;return{c(){e=g("input"),m(e,"class",t="c-coloredit__input--text"+(s[0]?" "+s[0]:"")),m(e,"type","text"),e.value=s[1]},m(l,r){S(l,e,r),s[6](e),n||(o=Z(e,"input",s[7]),n=!0)},p(l,[r]){r&1&&t!==(t="c-coloredit__input--text"+(l[0]?" "+l[0]:""))&&m(e,"class",t),r&2&&e.value!==l[1]&&(e.value=l[1])},i:q,o:q,d(l){l&&E(e),s[6](null),n=!1,o()}}}function Kg(s,e,t){let{class:n=""}=e,{color:o="#000"}=e,l;function r(f){xr(f)&&t(4,o=f)}let i;function a(){i==null||i.focus()}function c(f){Fe[f?"unshift":"push"](()=>{i=f,t(2,i)})}const u=f=>r(f.currentTarget.value);return s.$$set=f=>{"class"in f&&t(0,n=f.class),"color"in f&&t(4,o=f.color)},s.$$.update=()=>{s.$$.dirty&16&&t(1,l=xr(o)?o:"")},[n,l,i,r,o,a,c,u]}class Wg extends W{constructor(e){super(),K(this,e,Kg,qg,j,{class:0,color:4,focus:5})}get focus(){return this.$$.ctx[5]}}function Gg(s){let e,t,n,o,l,r,i,a,c,u,f,d,p;return{c(){e=g("input"),n=C(),o=g("input"),r=C(),i=g("input"),c=C(),u=g("input"),m(e,"class",t="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),m(e,"type","number"),m(e,"min","0"),m(e,"max","255"),m(e,"step","1"),e.value=s[1],m(o,"class",l="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),m(o,"type","number"),m(o,"min","0"),m(o,"max","255"),m(o,"step","1"),o.value=s[2],m(i,"class",a="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),m(i,"type","number"),m(i,"min","0"),m(i,"max","255"),m(i,"step","1"),i.value=s[3],m(u,"class",f="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),m(u,"type","number"),m(u,"min","0"),m(u,"max","1"),m(u,"step","0.01"),u.value=s[4]},m(_,k){S(_,e,k),s[8](e),S(_,n,k),S(_,o,k),S(_,r,k),S(_,i,k),S(_,c,k),S(_,u,k),d||(p=[Z(e,"change",s[9]),Z(o,"change",s[10]),Z(i,"change",s[11]),Z(u,"change",s[12])],d=!0)},p(_,[k]){k&1&&t!==(t="c-coloredit__input--number"+(_[0]?" "+_[0]:""))&&m(e,"class",t),k&2&&e.value!==_[1]&&(e.value=_[1]),k&1&&l!==(l="c-coloredit__input--number"+(_[0]?" "+_[0]:""))&&m(o,"class",l),k&4&&o.value!==_[2]&&(o.value=_[2]),k&1&&a!==(a="c-coloredit__input--number"+(_[0]?" "+_[0]:""))&&m(i,"class",a),k&8&&i.value!==_[3]&&(i.value=_[3]),k&1&&f!==(f="c-coloredit__input--number"+(_[0]?" "+_[0]:""))&&m(u,"class",f),k&16&&u.value!==_[4]&&(u.value=_[4])},i:q,o:q,d(_){_&&E(e),s[8](null),_&&E(n),_&&E(o),_&&E(r),_&&E(i),_&&E(c),_&&E(u),d=!1,ye(p)}}}function Zg(s,e,t){let{class:n=""}=e,{color:o="#000"}=e,l,r,i,a;function c($){var x;try{const R=Hs($);t(1,l=R.r),t(2,r=R.g),t(3,i=R.b),t(4,a=(x=R.a)!=null?x:1)}catch(R){t(1,l=NaN),t(2,r=NaN),t(3,i=NaN),t(4,a=NaN)}}function u($,x,R,N){[$,R,x,N!=null?N:1].every(y=>Number.isFinite(y))&&t(6,o=Bo({r:$,g:x,b:R,a:N}))}let f;function d(){f==null||f.focus()}function p($){Fe[$?"unshift":"push"](()=>{f=$,t(5,f)})}const _=$=>t(1,l=+$.currentTarget.value),k=$=>t(2,r=+$.currentTarget.value),A=$=>t(3,i=+$.currentTarget.value),w=$=>t(4,a=+$.currentTarget.value);return s.$$set=$=>{"class"in $&&t(0,n=$.class),"color"in $&&t(6,o=$.color)},s.$$.update=()=>{s.$$.dirty&64&&c(o),s.$$.dirty&30&&u(l,r,i,a)},[n,l,r,i,a,f,o,d,p,_,k,A,w]}class Qg extends W{constructor(e){super(),K(this,e,Zg,Gg,j,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function Xg(s){let e,t,n,o,l,r,i,a,c,u,f,d,p;return{c(){e=g("input"),n=C(),o=g("input"),r=C(),i=g("input"),c=C(),u=g("input"),m(e,"class",t="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),m(e,"type","number"),m(e,"min","0"),m(e,"max","360"),m(e,"step","1"),e.value=s[1],m(o,"class",l="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),m(o,"type","number"),m(o,"min","0"),m(o,"max","100"),m(o,"step","1"),o.value=s[2],m(i,"class",a="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),m(i,"type","number"),m(i,"min","0"),m(i,"max","100"),m(i,"step","1"),i.value=s[3],m(u,"class",f="c-coloredit__input--number"+(s[0]?" "+s[0]:"")),m(u,"type","number"),m(u,"min","0"),m(u,"max","1"),m(u,"step","0.01"),u.value=s[4]},m(_,k){S(_,e,k),s[8](e),S(_,n,k),S(_,o,k),S(_,r,k),S(_,i,k),S(_,c,k),S(_,u,k),d||(p=[Z(e,"change",s[9]),Z(o,"change",s[10]),Z(i,"change",s[11]),Z(u,"change",s[12])],d=!0)},p(_,[k]){k&1&&t!==(t="c-coloredit__input--number"+(_[0]?" "+_[0]:""))&&m(e,"class",t),k&2&&e.value!==_[1]&&(e.value=_[1]),k&1&&l!==(l="c-coloredit__input--number"+(_[0]?" "+_[0]:""))&&m(o,"class",l),k&4&&o.value!==_[2]&&(o.value=_[2]),k&1&&a!==(a="c-coloredit__input--number"+(_[0]?" "+_[0]:""))&&m(i,"class",a),k&8&&i.value!==_[3]&&(i.value=_[3]),k&1&&f!==(f="c-coloredit__input--number"+(_[0]?" "+_[0]:""))&&m(u,"class",f),k&16&&u.value!==_[4]&&(u.value=_[4])},i:q,o:q,d(_){_&&E(e),s[8](null),_&&E(n),_&&E(o),_&&E(r),_&&E(i),_&&E(c),_&&E(u),d=!1,ye(p)}}}function Jg(s,e,t){let{class:n=""}=e,{color:o="#000"}=e,l,r,i,a;function c($){var x;try{const R=hg($);t(1,l=R.h),t(2,r=R.s),t(3,i=R.l),t(4,a=(x=R.a)!=null?x:1)}catch(R){t(1,l=NaN),t(2,r=NaN),t(3,i=NaN),t(4,a=NaN)}}function u($,x,R,N){[$,x,R,N!=null?N:1].every(y=>Number.isFinite(y))&&t(6,o=_g({h:$,s:x,l:R,a:N}))}let f;function d(){f==null||f.focus()}function p($){Fe[$?"unshift":"push"](()=>{f=$,t(5,f)})}const _=$=>t(1,l=+$.currentTarget.value),k=$=>t(2,r=+$.currentTarget.value),A=$=>t(3,i=+$.currentTarget.value),w=$=>t(4,a=+$.currentTarget.value);return s.$$set=$=>{"class"in $&&t(0,n=$.class),"color"in $&&t(6,o=$.color)},s.$$.update=()=>{s.$$.dirty&64&&c(o),s.$$.dirty&30&&u(l,r,i,a)},[n,l,r,i,a,f,o,d,p,_,k,A,w]}class Yg extends W{constructor(e){super(),K(this,e,Jg,Xg,j,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function Mr(s,e,t){const n=s.slice();return n[11]=e[t],n}function Rr(s){let e,t=s[11]+"",n;return{c(){e=g("span"),n=H(t),m(e,"class","c-color-edit__label")},m(o,l){S(o,e,l),h(e,n)},p(o,l){l&8&&t!==(t=o[11]+"")&&Ze(n,t)},d(o){o&&E(e)}}}function Vg(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k;function A(N){s[6](N)}var w=s[3].component;function $(N){let y={};return N[0]!==void 0&&(y.color=N[0]),{props:y}}w&&(n=ze(w,$(s)),Fe.push(()=>bt(n,"color",A)),s[7](n));let x=s[3].labels,R=[];for(let N=0;N<x.length;N+=1)R[N]=Rr(Mr(s,x,N));return{c(){e=g("div"),t=g("div"),n&&L(n.$$.fragment),l=C();for(let N=0;N<R.length;N+=1)R[N].c();r=C(),i=g("div"),a=g("button"),c=C(),u=g("button"),m(t,"class","c-color-edit__values"),Je(t,"--ce-columns",s[3].labels.length),m(a,"class","c-color-edit__button--up"),m(u,"class","c-color-edit__button--down"),m(i,"class","c-color-edit__buttons"),m(e,"class",f="c-color-edit"+(s[1]?" "+s[1]:"")),m(e,"style",d=s[2]||void 0)},m(N,y){S(N,e,y),h(e,t),n&&O(n,t,null),h(t,l);for(let D=0;D<R.length;D+=1)R[D].m(t,null);h(e,r),h(e,i),h(i,a),h(i,c),h(i,u),p=!0,_||(k=[Z(a,"click",s[8]),Z(u,"click",s[9])],_=!0)},p(N,[y]){const D={};if(!o&&y&1&&(o=!0,D.color=N[0],kt(()=>o=!1)),w!==(w=N[3].component)){if(n){de();const B=n;T(B.$$.fragment,1,0,()=>{P(B,1)}),pe()}w?(n=ze(w,$(N)),Fe.push(()=>bt(n,"color",A)),N[7](n),L(n.$$.fragment),v(n.$$.fragment,1),O(n,t,l)):n=null}else w&&n.$set(D);if(y&8){x=N[3].labels;let B;for(B=0;B<x.length;B+=1){const G=Mr(N,x,B);R[B]?R[B].p(G,y):(R[B]=Rr(G),R[B].c(),R[B].m(t,null))}for(;B<R.length;B+=1)R[B].d(1);R.length=x.length}(!p||y&8)&&Je(t,"--ce-columns",N[3].labels.length),(!p||y&2&&f!==(f="c-color-edit"+(N[1]?" "+N[1]:"")))&&m(e,"class",f),(!p||y&4&&d!==(d=N[2]||void 0))&&m(e,"style",d)},i(N){p||(n&&v(n.$$.fragment,N),p=!0)},o(N){n&&T(n.$$.fragment,N),p=!1},d(N){N&&E(e),s[7](null),n&&P(n),Le(R,N),_=!1,ye(k)}}}function e_(s,e,t){let{class:n=""}=e,{style:o=""}=e,{color:l="#000"}=e;const r=[{component:Wg,labels:["Hex"]},{component:Qg,labels:["R","G","B","A"]},{component:Yg,labels:["H","S","L","A"]}];let i=r[0],a;function c(_){return ct(this,null,function*(){let k=r.indexOf(i)+_;k<0?k=r.length-1:k>=r.length&&(k=0),t(3,i=r[k]),yield yo(),a==null||a.focus()})}function u(_){l=_,t(0,l)}function f(_){Fe[_?"unshift":"push"](()=>{a=_,t(4,a)})}const d=()=>c(-1),p=()=>c(1);return s.$$set=_=>{"class"in _&&t(1,n=_.class),"style"in _&&t(2,o=_.style),"color"in _&&t(0,l=_.color)},[l,n,o,i,a,c,u,f,d,p]}class fa extends W{constructor(e){super(),K(this,e,e_,Vg,j,{class:1,style:2,color:0})}}function Or(s,e,t){const n=s.slice();return n[6]=e[t],n}function Pr(s){let e,t=s[6]+"",n,o,l;function r(){return s[5](s[6])}return{c(){e=g("button"),n=H(t),m(e,"class","input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"),Je(e,"background-color",s[6]),Je(e,"color",Ar(s[6])>.55?"inherit":"white")},m(i,a){S(i,e,a),h(e,n),o||(l=Z(e,"click",r),o=!0)},p(i,a){s=i,a&2&&t!==(t=s[6]+"")&&Ze(n,t),a&2&&Je(e,"background-color",s[6]),a&2&&Je(e,"color",Ar(s[6])>.55?"inherit":"white")},d(i){i&&E(e),o=!1,l()}}}function t_(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_=s[1],k=[];for(let A=0;A<_.length;A+=1)k[A]=Pr(Or(s,_,A));return{c(){e=g("div"),t=g("span"),t.textContent="Set color",n=C(),o=g("a"),o.textContent="randomize alpha",l=C(),r=g("span"),r.textContent="•",i=C(),a=g("a"),a.textContent="reset alpha",u=C(),f=g("div");for(let A=0;A<k.length;A+=1)k[A].c();m(o,"class","text-sm"),m(o,"href","javascript:void(0)"),m(r,"class","text-blue-500"),m(a,"class","text-sm"),m(a,"href","javascript:void(0)"),m(e,"class",c=s[0]||void 0)},m(A,w){S(A,e,w),h(e,t),h(e,n),h(e,o),h(e,l),h(e,r),h(e,i),h(e,a),S(A,u,w),S(A,f,w);for(let $=0;$<k.length;$+=1)k[$].m(f,null);d||(p=[Z(o,"click",s[3]),Z(a,"click",s[4])],d=!0)},p(A,[w]){if(w&1&&c!==(c=A[0]||void 0)&&m(e,"class",c),w&6){_=A[1];let $;for($=0;$<_.length;$+=1){const x=Or(A,_,$);k[$]?k[$].p(x,w):(k[$]=Pr(x),k[$].c(),k[$].m(f,null))}for(;$<k.length;$+=1)k[$].d(1);k.length=_.length}},i:q,o:q,d(A){A&&E(e),A&&E(u),A&&E(f),Le(k,A),d=!1,ye(p)}}}function n_(s){return da(s).map(e=>e+Math.floor(Math.random()*255).toString(16).padStart(2,"0"))}function da(s){return s.map(e=>e.slice(0,7))}function s_(s,e,t){const n=ko();let{class:o=""}=e,l=["#001219","#005F73","#0A9396","#94D2BD","#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226","#F72585","#B5179E","#7209B7","#560BAD","#480CA8","#3A0CA3","#3F37C9","#4361EE","#4895EF","#4CC9F0"];const r=()=>t(1,l=n_(l)),i=()=>t(1,l=da(l)),a=c=>n("color",c);return s.$$set=c=>{"class"in c&&t(0,o=c.class)},[o,l,n,r,i,a]}class zo extends W{constructor(e){super(),K(this,e,s_,t_,j,{class:0})}}function o_(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$;function x(N){s[1](N)}let R={class:"basis-1/2 h-[256px] pt-2"};return s[0]!==void 0&&(R.color=s[0]),t=new ua({props:R}),Fe.push(()=>bt(t,"color",x)),w=new zo({props:{class:"mt-4"}}),w.$on("color",s[2]),{c(){e=g("div"),L(t.$$.fragment),o=C(),l=g("div"),r=g("div"),i=H("Current color: "),a=g("code"),c=H(s[0]),u=C(),f=g("div"),d=g("div"),p=g("div"),_=C(),k=g("div"),A=C(),L(w.$$.fragment),m(a,"class","uppercase"),m(p,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),m(k,"class","absolute left-0 top-0 right-0 bottom-0"),Je(k,"background-color",s[0]),m(d,"class","relative h-[1.5em]"),m(f,"class","p-2 border rounded-md"),m(l,"class","basis-1/2"),m(e,"class","flex gap-8")},m(N,y){S(N,e,y),O(t,e,null),h(e,o),h(e,l),h(l,r),h(r,i),h(r,a),h(a,c),h(l,u),h(l,f),h(f,d),h(d,p),h(d,_),h(d,k),h(l,A),O(w,l,null),$=!0},p(N,[y]){const D={};!n&&y&1&&(n=!0,D.color=N[0],kt(()=>n=!1)),t.$set(D),(!$||y&1)&&Ze(c,N[0]),(!$||y&1)&&Je(k,"background-color",N[0])},i(N){$||(v(t.$$.fragment,N),v(w.$$.fragment,N),$=!0)},o(N){T(t.$$.fragment,N),T(w.$$.fragment,N),$=!1},d(N){N&&E(e),P(t),P(w)}}}function l_(s,e,t){let n="#f70";function o(r){n=r,t(0,n)}return[n,o,({detail:r})=>t(0,n=r)]}let r_=class extends W{constructor(e){super(),K(this,e,l_,o_,j,{})}};function i_(s){let e,t,n,o,l;return t=new r_({}),o=new st({props:{code:`<script lang="ts">
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
</div>`}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),L(o.$$.fragment),m(e,"class","prose max-w-none my-4")},m(r,i){S(r,e,i),O(t,e,null),h(e,n),O(o,e,null),l=!0},p:q,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T(o.$$.fragment,r),l=!1},d(r){r&&E(e),P(t),P(o)}}}let a_=class extends W{constructor(e){super(),K(this,e,null,i_,j,{})}};function c_(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$,x;function R(y){s[1](y)}let N={class:"w-full border shadow-md rounded-lg p-2"};return s[0]!==void 0&&(N.color=s[0]),n=new fa({props:N}),Fe.push(()=>bt(n,"color",R)),$=new zo({props:{class:"mt-4"}}),$.$on("color",s[2]),{c(){e=g("div"),t=g("div"),L(n.$$.fragment),l=C(),r=g("div"),i=g("div"),a=H("Current color: "),c=g("code"),u=H(s[0]),f=C(),d=g("div"),p=g("div"),_=g("div"),k=C(),A=g("div"),w=C(),L($.$$.fragment),m(t,"class","basis-1/2 inline-flex items-center"),m(c,"class","uppercase"),m(_,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),m(A,"class","absolute left-0 top-0 right-0 bottom-0"),Je(A,"background-color",s[0]),m(p,"class","relative h-[1.5em]"),m(d,"class","p-2 border rounded-md"),m(r,"class","basis-1/2"),m(e,"class","flex gap-8")},m(y,D){S(y,e,D),h(e,t),O(n,t,null),h(e,l),h(e,r),h(r,i),h(i,a),h(i,c),h(c,u),h(r,f),h(r,d),h(d,p),h(p,_),h(p,k),h(p,A),h(r,w),O($,r,null),x=!0},p(y,[D]){const B={};!o&&D&1&&(o=!0,B.color=y[0],kt(()=>o=!1)),n.$set(B),(!x||D&1)&&Ze(u,y[0]),(!x||D&1)&&Je(A,"background-color",y[0])},i(y){x||(v(n.$$.fragment,y),v($.$$.fragment,y),x=!0)},o(y){T(n.$$.fragment,y),T($.$$.fragment,y),x=!1},d(y){y&&E(e),P(n),P($)}}}function u_(s,e,t){let n="#f70";function o(r){n=r,t(0,n)}return[n,o,({detail:r})=>t(0,n=r)]}let f_=class extends W{constructor(e){super(),K(this,e,u_,c_,j,{})}};function d_(s){let e,t,n,o,l;return t=new f_({}),o=new st({props:{code:`<script lang="ts">
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
`}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),L(o.$$.fragment),m(e,"class","prose max-w-none my-4")},m(r,i){S(r,e,i),O(t,e,null),h(e,n),O(o,e,null),l=!0},p:q,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T(o.$$.fragment,r),l=!1},d(r){r&&E(e),P(t),P(o)}}}let p_=class extends W{constructor(e){super(),K(this,e,null,d_,j,{})}};function Ln(s){return s.split("-")[1]}function Ho(s){return s==="y"?"height":"width"}function on(s){return s.split("-")[0]}function Fs(s){return["top","bottom"].includes(on(s))?"x":"y"}function Lr(s,e,t){let{reference:n,floating:o}=s;const l=n.x+n.width/2-o.width/2,r=n.y+n.height/2-o.height/2,i=Fs(e),a=Ho(i),c=n[a]/2-o[a]/2,u=i==="x";let f;switch(on(e)){case"top":f={x:l,y:n.y-o.height};break;case"bottom":f={x:l,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:r};break;case"left":f={x:n.x-o.width,y:r};break;default:f={x:n.x,y:n.y}}switch(Ln(e)){case"start":f[i]-=c*(t&&u?-1:1);break;case"end":f[i]+=c*(t&&u?-1:1)}return f}const h_=(s,e,t)=>ct(void 0,null,function*(){const{placement:n="bottom",strategy:o="absolute",middleware:l=[],platform:r}=t,i=l.filter(Boolean),a=yield r.isRTL==null?void 0:r.isRTL(e);let c=yield r.getElementRects({reference:s,floating:e,strategy:o}),{x:u,y:f}=Lr(c,n,a),d=n,p={},_=0;for(let k=0;k<i.length;k++){const{name:A,fn:w}=i[k],{x:$,y:x,data:R,reset:N}=yield w({x:u,y:f,initialPlacement:n,placement:d,strategy:o,middlewareData:p,rects:c,platform:r,elements:{reference:s,floating:e}});u=$!=null?$:u,f=x!=null?x:f,p=vn(Xe({},p),{[A]:Xe(Xe({},p[A]),R)}),N&&_<=50&&(_++,typeof N=="object"&&(N.placement&&(d=N.placement),N.rects&&(c=N.rects===!0?yield r.getElementRects({reference:s,floating:e,strategy:o}):N.rects),{x:u,y:f}=Lr(c,d,a)),k=-1)}return{x:u,y:f,placement:d,strategy:o,middlewareData:p}});function pa(s){return typeof s!="number"?function(e){return Xe({top:0,right:0,bottom:0,left:0},e)}(s):{top:s,right:s,bottom:s,left:s}}function Hn(s){return vn(Xe({},s),{top:s.y,left:s.x,right:s.x+s.width,bottom:s.y+s.height})}function ha(s,e){return ct(this,null,function*(){var t;e===void 0&&(e={});const{x:n,y:o,platform:l,rects:r,elements:i,strategy:a}=s,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:p=0}=e,_=pa(p),k=i[d?f==="floating"?"reference":"floating":f],A=Hn(yield l.getClippingRect({element:(t=yield l.isElement==null?void 0:l.isElement(k))==null||t?k:k.contextElement||(yield l.getDocumentElement==null?void 0:l.getDocumentElement(i.floating)),boundary:c,rootBoundary:u,strategy:a})),w=f==="floating"?vn(Xe({},r.floating),{x:n,y:o}):r.reference,$=yield l.getOffsetParent==null?void 0:l.getOffsetParent(i.floating),x=(yield l.isElement==null?void 0:l.isElement($))&&(yield l.getScale==null?void 0:l.getScale($))||{x:1,y:1},R=Hn(l.convertOffsetParentRelativeRectToViewportRelativeRect?yield l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:$,strategy:a}):w);return{top:(A.top-R.top+_.top)/x.y,bottom:(R.bottom-A.bottom+_.bottom)/x.y,left:(A.left-R.left+_.left)/x.x,right:(R.right-A.right+_.right)/x.x}})}const m_=Math.min,nn=Math.max;function g_(s,e,t){return nn(s,m_(e,t))}const ma=s=>({name:"arrow",options:s,fn(t){return ct(this,null,function*(){const{element:n,padding:o=0}=s||{},{x:l,y:r,placement:i,rects:a,platform:c}=t;if(n==null)return{};const u=pa(o),f={x:l,y:r},d=Fs(i),p=Ho(d),_=yield c.getDimensions(n),k=d==="y"?"top":"left",A=d==="y"?"bottom":"right",w=a.reference[p]+a.reference[d]-f[d]-a.floating[p],$=f[d]-a.reference[d],x=yield c.getOffsetParent==null?void 0:c.getOffsetParent(n);let R=x?d==="y"?x.clientHeight||0:x.clientWidth||0:0;R===0&&(R=a.floating[p]);const N=w/2-$/2,y=u[k],D=R-_[p]-u[A],B=R/2-_[p]/2+N,G=g_(y,B,D),oe=Ln(i)!=null&&B!=G&&a.reference[p]/2-(B<y?u[k]:u[A])-_[p]/2<0;return{[d]:f[d]-(oe?B<y?y-B:D-B:0),data:{[d]:G,centerOffset:B-G}}})}}),__=["top","right","bottom","left"];__.reduce((s,e)=>s.concat(e,e+"-start",e+"-end"),[]);const b_={left:"right",right:"left",bottom:"top",top:"bottom"};function Os(s){return s.replace(/left|right|bottom|top/g,e=>b_[e])}function $_(s,e,t){t===void 0&&(t=!1);const n=Ln(s),o=Fs(s),l=Ho(o);let r=o==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(r=Os(r)),{main:r,cross:Os(r)}}const v_={start:"end",end:"start"};function ho(s){return s.replace(/start|end/g,e=>v_[e])}const js=function(s){return s===void 0&&(s={}),{name:"flip",options:s,fn(t){return ct(this,null,function*(){var n;const{placement:o,middlewareData:l,rects:r,initialPlacement:i,platform:a,elements:c}=t,ue=s,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:k=!0}=ue,A=lo(ue,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),w=on(o),$=on(i)===i,x=yield a.isRTL==null?void 0:a.isRTL(c.floating),R=d||($||!k?[Os(i)]:function(ve){const $e=Os(ve);return[ho(ve),$e,ho($e)]}(i));d||_==="none"||R.push(...function(ve,$e,Ie,z){const Q=Ln(ve);let Y=function(ne,U,ge){const ie=["left","right"],ke=["right","left"],V=["top","bottom"],Ee=["bottom","top"];switch(ne){case"top":case"bottom":return ge?U?ke:ie:U?ie:ke;case"left":case"right":return U?V:Ee;default:return[]}}(on(ve),Ie==="start",z);return Q&&(Y=Y.map(ne=>ne+"-"+Q),$e&&(Y=Y.concat(Y.map(ho)))),Y}(i,k,_,x));const N=[i,...R],y=yield ha(t,A),D=[];let B=((n=l.flip)==null?void 0:n.overflows)||[];if(u&&D.push(y[w]),f){const{main:ve,cross:$e}=$_(o,r,x);D.push(y[ve],y[$e])}if(B=[...B,{placement:o,overflows:D}],!D.every(ve=>ve<=0)){var G,oe;const ve=(((G=l.flip)==null?void 0:G.index)||0)+1,$e=N[ve];if($e)return{data:{index:ve,overflows:B},reset:{placement:$e}};let Ie=(oe=B.find(z=>z.overflows[0]<=0))==null?void 0:oe.placement;if(!Ie)switch(p){case"bestFit":{var re;const z=(re=B.map(Q=>[Q.placement,Q.overflows.filter(Y=>Y>0).reduce((Y,ne)=>Y+ne,0)]).sort((Q,Y)=>Q[1]-Y[1])[0])==null?void 0:re[0];z&&(Ie=z);break}case"initialPlacement":Ie=i}if(o!==Ie)return{reset:{placement:Ie}}}return{}})}}},Us=function(s){return s===void 0&&(s=0),{name:"offset",options:s,fn(t){return ct(this,null,function*(){const{x:n,y:o}=t,l=yield function(r,i){return ct(this,null,function*(){const{placement:a,platform:c,elements:u}=r,f=yield c.isRTL==null?void 0:c.isRTL(u.floating),d=on(a),p=Ln(a),_=Fs(a)==="x",k=["left","top"].includes(d)?-1:1,A=f&&_?-1:1,w=typeof i=="function"?i(r):i;let{mainAxis:$,crossAxis:x,alignmentAxis:R}=typeof w=="number"?{mainAxis:w,crossAxis:0,alignmentAxis:null}:Xe({mainAxis:0,crossAxis:0,alignmentAxis:null},w);return p&&typeof R=="number"&&(x=p==="end"?-1*R:R),_?{x:x*A,y:$*k}:{x:$*k,y:x*A}})}(t,s);return{x:n+l.x,y:o+l.y,data:l}})}}},ga=function(s){return s===void 0&&(s={}),{name:"size",options:s,fn(t){return ct(this,null,function*(){const{placement:n,rects:o,platform:l,elements:r}=t,R=s,{apply:i=()=>{}}=R,a=lo(R,["apply"]),c=yield ha(t,a),u=on(n),f=Ln(n);let d,p;u==="top"||u==="bottom"?(d=u,p=f===((yield l.isRTL==null?void 0:l.isRTL(r.floating))?"start":"end")?"left":"right"):(p=u,d=f==="end"?"top":"bottom");const _=nn(c.left,0),k=nn(c.right,0),A=nn(c.top,0),w=nn(c.bottom,0),$={availableHeight:o.floating.height-(["left","right"].includes(n)?2*(A!==0||w!==0?A+w:nn(c.top,c.bottom)):c[d]),availableWidth:o.floating.width-(["top","bottom"].includes(n)?2*(_!==0||k!==0?_+k:nn(c.left,c.right)):c[p])};yield i(Xe(Xe({},t),$));const x=yield l.getDimensions(r.floating);return o.floating.width!==x.width||o.floating.height!==x.height?{reset:{rects:!0}}:{}})}}};function gt(s){var e;return((e=s.ownerDocument)==null?void 0:e.defaultView)||window}function Nt(s){return gt(s).getComputedStyle(s)}const Dr=Math.min,Fn=Math.max,Ps=Math.round;function _a(s){const e=Nt(s);let t=parseFloat(e.width),n=parseFloat(e.height);const o=s.offsetWidth,l=s.offsetHeight,r=Ps(t)!==o||Ps(n)!==l;return r&&(t=o,n=l),{width:t,height:n,fallback:r}}function Jt(s){return $a(s)?(s.nodeName||"").toLowerCase():""}let bs;function ba(){if(bs)return bs;const s=navigator.userAgentData;return s&&Array.isArray(s.brands)?(bs=s.brands.map(e=>e.brand+"/"+e.version).join(" "),bs):navigator.userAgent}function Mt(s){return s instanceof gt(s).HTMLElement}function wt(s){return s instanceof gt(s).Element}function $a(s){return s instanceof gt(s).Node}function Ir(s){return typeof ShadowRoot=="undefined"?!1:s instanceof gt(s).ShadowRoot||s instanceof ShadowRoot}function qs(s){const{overflow:e,overflowX:t,overflowY:n,display:o}=Nt(s);return/auto|scroll|overlay|hidden|clip/.test(e+n+t)&&!["inline","contents"].includes(o)}function w_(s){return["table","td","th"].includes(Jt(s))}function vo(s){const e=/firefox/i.test(ba()),t=Nt(s),n=t.backdropFilter||t.WebkitBackdropFilter;return t.transform!=="none"||t.perspective!=="none"||!!n&&n!=="none"||e&&t.willChange==="filter"||e&&!!t.filter&&t.filter!=="none"||["transform","perspective"].some(o=>t.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const l=t.contain;return l!=null&&l.includes(o)})}function va(){return!/^((?!chrome|android).)*safari/i.test(ba())}function Fo(s){return["html","body","#document"].includes(Jt(s))}function wa(s){return wt(s)?s:s.contextElement}const ka={x:1,y:1};function An(s){const e=wa(s);if(!Mt(e))return ka;const t=e.getBoundingClientRect(),{width:n,height:o,fallback:l}=_a(e);let r=(l?Ps(t.width):t.width)/n,i=(l?Ps(t.height):t.height)/o;return r&&Number.isFinite(r)||(r=1),i&&Number.isFinite(i)||(i=1),{x:r,y:i}}function ln(s,e,t,n){var o,l;e===void 0&&(e=!1),t===void 0&&(t=!1);const r=s.getBoundingClientRect(),i=wa(s);let a=ka;e&&(n?wt(n)&&(a=An(n)):a=An(s));const c=i?gt(i):window,u=!va()&&t;let f=(r.left+(u&&((o=c.visualViewport)==null?void 0:o.offsetLeft)||0))/a.x,d=(r.top+(u&&((l=c.visualViewport)==null?void 0:l.offsetTop)||0))/a.y,p=r.width/a.x,_=r.height/a.y;if(i){const k=gt(i),A=n&&wt(n)?gt(n):n;let w=k.frameElement;for(;w&&n&&A!==k;){const $=An(w),x=w.getBoundingClientRect(),R=getComputedStyle(w);x.x+=(w.clientLeft+parseFloat(R.paddingLeft))*$.x,x.y+=(w.clientTop+parseFloat(R.paddingTop))*$.y,f*=$.x,d*=$.y,p*=$.x,_*=$.y,f+=x.x,d+=x.y,w=gt(w).frameElement}}return{width:p,height:_,top:d,right:f+p,bottom:d+_,left:f,x:f,y:d}}function Qt(s){return(($a(s)?s.ownerDocument:s.document)||window.document).documentElement}function Ks(s){return wt(s)?{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}:{scrollLeft:s.pageXOffset,scrollTop:s.pageYOffset}}function ya(s){return ln(Qt(s)).left+Ks(s).scrollLeft}function Jn(s){if(Jt(s)==="html")return s;const e=s.assignedSlot||s.parentNode||Ir(s)&&s.host||Qt(s);return Ir(e)?e.host:e}function Ta(s){const e=Jn(s);return Fo(e)?e.ownerDocument.body:Mt(e)&&qs(e)?e:Ta(e)}function jn(s,e){var t;e===void 0&&(e=[]);const n=Ta(s),o=n===((t=s.ownerDocument)==null?void 0:t.body),l=gt(n);return o?e.concat(l,l.visualViewport||[],qs(n)?n:[]):e.concat(n,jn(n))}function Br(s,e,t){return e==="viewport"?Hn(function(n,o){const l=gt(n),r=Qt(n),i=l.visualViewport;let a=r.clientWidth,c=r.clientHeight,u=0,f=0;if(i){a=i.width,c=i.height;const d=va();(d||!d&&o==="fixed")&&(u=i.offsetLeft,f=i.offsetTop)}return{width:a,height:c,x:u,y:f}}(s,t)):wt(e)?Hn(function(n,o){const l=ln(n,!0,o==="fixed"),r=l.top+n.clientTop,i=l.left+n.clientLeft,a=Mt(n)?An(n):{x:1,y:1};return{width:n.clientWidth*a.x,height:n.clientHeight*a.y,x:i*a.x,y:r*a.y}}(e,t)):Hn(function(n){const o=Qt(n),l=Ks(n),r=n.ownerDocument.body,i=Fn(o.scrollWidth,o.clientWidth,r.scrollWidth,r.clientWidth),a=Fn(o.scrollHeight,o.clientHeight,r.scrollHeight,r.clientHeight);let c=-l.scrollLeft+ya(n);const u=-l.scrollTop;return Nt(r).direction==="rtl"&&(c+=Fn(o.clientWidth,r.clientWidth)-i),{width:i,height:a,x:c,y:u}}(Qt(s)))}function zr(s){return Mt(s)&&Nt(s).position!=="fixed"?s.offsetParent:null}function Hr(s){const e=gt(s);let t=zr(s);for(;t&&w_(t)&&Nt(t).position==="static";)t=zr(t);return t&&(Jt(t)==="html"||Jt(t)==="body"&&Nt(t).position==="static"&&!vo(t))?e:t||function(n){let o=Jn(n);for(;Mt(o)&&!Fo(o);){if(vo(o))return o;o=Jn(o)}return null}(s)||e}function k_(s,e,t){const n=Mt(e),o=Qt(e),l=ln(s,!0,t==="fixed",e);let r={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(n||!n&&t!=="fixed")if((Jt(e)!=="body"||qs(o))&&(r=Ks(e)),Mt(e)){const a=ln(e,!0);i.x=a.x+e.clientLeft,i.y=a.y+e.clientTop}else o&&(i.x=ya(o));return{x:l.left+r.scrollLeft-i.x,y:l.top+r.scrollTop-i.y,width:l.width,height:l.height}}const y_={getClippingRect:function(s){let{element:e,boundary:t,rootBoundary:n,strategy:o}=s;const l=t==="clippingAncestors"?function(c,u){const f=u.get(c);if(f)return f;let d=jn(c).filter(A=>wt(A)&&Jt(A)!=="body"),p=null;const _=Nt(c).position==="fixed";let k=_?Jn(c):c;for(;wt(k)&&!Fo(k);){const A=Nt(k),w=vo(k);(_?w||p:w||A.position!=="static"||!p||!["absolute","fixed"].includes(p.position))?p=A:d=d.filter($=>$!==k),k=Jn(k)}return u.set(c,d),d}(e,this._c):[].concat(t),r=[...l,n],i=r[0],a=r.reduce((c,u)=>{const f=Br(e,u,o);return c.top=Fn(f.top,c.top),c.right=Dr(f.right,c.right),c.bottom=Dr(f.bottom,c.bottom),c.left=Fn(f.left,c.left),c},Br(e,i,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(s){let{rect:e,offsetParent:t,strategy:n}=s;const o=Mt(t),l=Qt(t);if(t===l)return e;let r={scrollLeft:0,scrollTop:0},i={x:1,y:1};const a={x:0,y:0};if((o||!o&&n!=="fixed")&&((Jt(t)!=="body"||qs(l))&&(r=Ks(t)),Mt(t))){const c=ln(t);i=An(t),a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}return{width:e.width*i.x,height:e.height*i.y,x:e.x*i.x-r.scrollLeft*i.x+a.x,y:e.y*i.y-r.scrollTop*i.y+a.y}},isElement:wt,getDimensions:function(s){return Mt(s)?_a(s):s.getBoundingClientRect()},getOffsetParent:Hr,getDocumentElement:Qt,getScale:An,getElementRects(s){return ct(this,null,function*(){let{reference:e,floating:t,strategy:n}=s;const o=this.getOffsetParent||Hr,l=this.getDimensions;return{reference:k_(e,yield o(t),n),floating:Xe({x:0,y:0},yield l(t))}})},getClientRects:s=>Array.from(s.getClientRects()),isRTL:s=>Nt(s).direction==="rtl"};function T_(s,e,t,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:l=!0,elementResize:r=!0,animationFrame:i=!1}=n,a=o&&!i,c=a||l?[...wt(s)?jn(s):s.contextElement?jn(s.contextElement):[],...jn(e)]:[];c.forEach(p=>{a&&p.addEventListener("scroll",t,{passive:!0}),l&&p.addEventListener("resize",t)});let u,f=null;if(r){let p=!0;f=new ResizeObserver(()=>{p||t(),p=!1}),wt(s)&&!i&&f.observe(s),wt(s)||!s.contextElement||i||f.observe(s.contextElement),f.observe(e)}let d=i?ln(s):null;return i&&function p(){const _=ln(s);!d||_.x===d.x&&_.y===d.y&&_.width===d.width&&_.height===d.height||t(),d=_,u=requestAnimationFrame(p)}(),t(),()=>{var p;c.forEach(_=>{a&&_.removeEventListener("scroll",t),l&&_.removeEventListener("resize",t)}),(p=f)==null||p.disconnect(),f=null,i&&cancelAnimationFrame(u)}}const E_=(s,e,t)=>{const n=new Map,o=Xe({platform:y_},t),l=vn(Xe({},o.platform),{_c:n});return h_(s,e,vn(Xe({},o),{platform:l}))};function Ws(s){const e={enable:!1,options:void 0,cleanup:null},t={reference:null,floating:null,options:void 0};n(s);function n(c){c===!0?(e.enable=!0,o()):c===!1?(l(),e.enable=!1):(o(),e.enable=!0,e.options=c)}function o(){l(),t.reference&&t.floating&&e.enable&&(e.cleanup=T_(t.reference,t.floating,r,e.options))}function l(){e.cleanup!=null&&(e.cleanup(),e.cleanup=null)}function r(){return ct(this,null,function*(){if(t.reference&&t.floating){const{reference:c,floating:u,options:f}=t,d=yield E_(c,u,f);Object.assign(u.style,{position:d.strategy,left:`${d.x}px`,top:`${d.y}px`}),f!=null&&f.callback&&f.callback(d,{reference:c,floating:u})}})}function i(c){return t.reference=c,e.enable?o():r(),{destroy(){l(),t.reference=null}}}function a(c,u){return t.floating=c,t.options=u,e.enable?o():r(),{update(f){l(),t.options=f,e.enable?o():r()},destroy(){l(),t.floating=null,t.options=void 0}}}return[i,a,n]}function Yn(s,e){let t,n;[t,n]=e!=null?e:[];function o(r){t&&s.contains(r.target)&&t(r)}function l(r){n&&!s.contains(r.relatedTarget)&&n(r)}return s.addEventListener("focusin",o),s.addEventListener("focusout",l),{update(r){[t,n]=r!=null?r:[]},destroy(){s.removeEventListener("focusout",l),s.removeEventListener("focusin",o)}}}function Fr(s){let e,t,n,o,l,r,i,a,c,u,f,d;function p(w){s[5](w)}let _={class:"h-48 p-3",style:"--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"};s[0]!==void 0&&(_.color=s[0]),t=new ua({props:_}),Fe.push(()=>bt(t,"color",p));function k(w){s[6](w)}let A={class:"p-3 text-sm"};return s[0]!==void 0&&(A.color=s[0]),i=new fa({props:A}),Fe.push(()=>bt(i,"color",k)),{c(){e=g("div"),L(t.$$.fragment),o=C(),l=g("div"),r=C(),L(i.$$.fragment),m(l,"class","border-t"),m(e,"class","absolute w-[240px] border rounded-lg bg-white shadow-lg")},m(w,$){S(w,e,$),O(t,e,null),h(e,o),h(e,l),h(e,r),O(i,e,null),u=!0,f||(d=Ke(s[3].call(null,e,{placement:"bottom-start",middleware:[js(),Us(8)]})),f=!0)},p(w,$){const x={};!n&&$&1&&(n=!0,x.color=w[0],kt(()=>n=!1)),t.$set(x);const R={};!a&&$&1&&(a=!0,R.color=w[0],kt(()=>a=!1)),i.$set(R)},i(w){u||(v(t.$$.fragment,w),v(i.$$.fragment,w),w&&pt(()=>{c||(c=Xt(e,Mn,{},!0)),c.run(1)}),u=!0)},o(w){T(t.$$.fragment,w),T(i.$$.fragment,w),w&&(c||(c=Xt(e,Mn,{},!1)),c.run(0)),u=!1},d(w){w&&E(e),P(t),P(i),w&&c&&c.end(),f=!1,d()}}}function S_(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$,x,R,N,y,D,B=s[1]&&Fr(s);return R=new zo({props:{class:"mt-4"}}),R.$on("color",s[8]),{c(){e=g("div"),t=g("div"),n=g("div"),n.textContent="Click this button to pick a color",o=C(),l=g("div"),r=g("button"),i=g("span"),a=C(),B&&B.c(),u=C(),f=g("div"),d=g("div"),p=H("Current color: "),_=g("code"),k=H(s[0]),A=C(),w=g("div"),$=g("div"),x=C(),L(R.$$.fragment),m(i,"class","block border h-[22px] w-[10ch] bg-chess"),Je(i,"background","linear-gradient(to right, "+s[0]+" 0, "+s[0]+" 100%), var(--bg-chess-background)"),m(r,"class","input py-1"),m(t,"class","basis-1/2"),m(_,"class","uppercase"),m($,"class","h-[1.5em] bg-chess"),Je($,"background","linear-gradient(to right, "+s[0]+" 0, "+s[0]+" 100%), var(--bg-chess-background)"),m(w,"class","p-2 border rounded-md"),m(f,"class","basis-1/2"),m(e,"class","flex gap-8")},m(G,oe){S(G,e,oe),h(e,t),h(t,n),h(t,o),h(t,l),h(l,r),h(r,i),h(l,a),B&&B.m(l,null),h(e,u),h(e,f),h(f,d),h(d,p),h(d,_),h(_,k),h(f,A),h(f,w),h(w,$),h(f,x),O(R,f,null),N=!0,y||(D=[Ke(s[2].call(null,r)),Z(r,"click",s[4]),Ke(c=Yn.call(null,l,[void 0,s[7]]))],y=!0)},p(G,[oe]){(!N||oe&1)&&Je(i,"background","linear-gradient(to right, "+G[0]+" 0, "+G[0]+" 100%), var(--bg-chess-background)"),G[1]?B?(B.p(G,oe),oe&2&&v(B,1)):(B=Fr(G),B.c(),v(B,1),B.m(l,null)):B&&(de(),T(B,1,1,()=>{B=null}),pe()),c&&Re(c.update)&&oe&2&&c.update.call(null,[void 0,G[7]]),(!N||oe&1)&&Ze(k,G[0]),(!N||oe&1)&&Je($,"background","linear-gradient(to right, "+G[0]+" 0, "+G[0]+" 100%), var(--bg-chess-background)")},i(G){N||(v(B),v(R.$$.fragment,G),N=!0)},o(G){T(B),T(R.$$.fragment,G),N=!1},d(G){G&&E(e),B&&B.d(),P(R),y=!1,ye(D)}}}function x_(s,e,t){const[n,o]=Ws(!0);let l="#f70",r=!1;const i=()=>t(1,r=!r);function a(d){l=d,t(0,l)}function c(d){l=d,t(0,l)}return[l,r,n,o,i,a,c,()=>t(1,r=!1),({detail:d})=>t(0,l=d)]}let A_=class extends W{constructor(e){super(),K(this,e,x_,S_,j,{})}};function C_(s){let e,t,n,o,l,r,i;return o=new A_({}),r=new st({props:{code:`<script lang="ts">
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
</div>`}}),{c(){e=g("section"),t=g("div"),t.innerHTML=`This example uses <a href="./?c=floating-ui-action"><code>@apsc/floating-ui-action</code></a>
    and
    <a href="./?c=focus-action"><code>@apsc/flocus-action</code></a>`,n=C(),L(o.$$.fragment),l=C(),L(r.$$.fragment),m(t,"class","w-fit mx-auto mb-4"),m(e,"class","prose max-w-none my-4")},m(a,c){S(a,e,c),h(e,t),h(e,n),O(o,e,null),h(e,l),O(r,e,null),i=!0},p:q,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){T(o.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),P(o),P(r)}}}let N_=class extends W{constructor(e){super(),K(this,e,null,C_,j,{})}};function M_(s){let e;return{c(){e=H("API")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function R_(s){let e;return{c(){e=H("ColorPicker example")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function O_(s){let e;return{c(){e=H("ColorEdit example")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function P_(s){let e;return{c(){e=H("Color input Example")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function L_(s){let e,t,n,o,l,r,i,a;return e=new Ue({props:{$$slots:{default:[M_]},$$scope:{ctx:s}}}),n=new Ue({props:{$$slots:{default:[R_]},$$scope:{ctx:s}}}),l=new Ue({props:{$$slots:{default:[O_]},$$scope:{ctx:s}}}),i=new Ue({props:{$$slots:{default:[P_]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment),r=C(),L(i.$$.fragment)},m(c,u){O(e,c,u),S(c,t,u),O(n,c,u),S(c,o,u),O(l,c,u),S(c,r,u),O(i,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&2&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&2&&(p.$$scope={dirty:u,ctx:c}),l.$set(p);const _={};u&2&&(_.$$scope={dirty:u,ctx:c}),i.$set(_)},i(c){a||(v(e.$$.fragment,c),v(n.$$.fragment,c),v(l.$$.fragment,c),v(i.$$.fragment,c),a=!0)},o(c){T(e.$$.fragment,c),T(n.$$.fragment,c),T(l.$$.fragment,c),T(i.$$.fragment,c),a=!1},d(c){P(e,c),c&&E(t),P(n,c),c&&E(o),P(l,c),c&&E(r),P(i,c)}}}function D_(s){let e,t;return e=new pg({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function I_(s){let e,t;return e=new a_({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function B_(s){let e,t;return e=new p_({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function z_(s){let e,t;return e=new N_({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function H_(s){let e,t,n,o,l,r,i,a,c,u;return e=new dn({props:{$$slots:{default:[L_]},$$scope:{ctx:s}}}),n=new qe({props:{$$slots:{default:[D_]},$$scope:{ctx:s}}}),l=new qe({props:{$$slots:{default:[I_]},$$scope:{ctx:s}}}),i=new qe({props:{$$slots:{default:[B_]},$$scope:{ctx:s}}}),c=new qe({props:{$$slots:{default:[z_]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment),r=C(),L(i.$$.fragment),a=C(),L(c.$$.fragment)},m(f,d){O(e,f,d),S(f,t,d),O(n,f,d),S(f,o,d),O(l,f,d),S(f,r,d),O(i,f,d),S(f,a,d),O(c,f,d),u=!0},p(f,d){const p={};d&2&&(p.$$scope={dirty:d,ctx:f}),e.$set(p);const _={};d&2&&(_.$$scope={dirty:d,ctx:f}),n.$set(_);const k={};d&2&&(k.$$scope={dirty:d,ctx:f}),l.$set(k);const A={};d&2&&(A.$$scope={dirty:d,ctx:f}),i.$set(A);const w={};d&2&&(w.$$scope={dirty:d,ctx:f}),c.$set(w)},i(f){u||(v(e.$$.fragment,f),v(n.$$.fragment,f),v(l.$$.fragment,f),v(i.$$.fragment,f),v(c.$$.fragment,f),u=!0)},o(f){T(e.$$.fragment,f),T(n.$$.fragment,f),T(l.$$.fragment,f),T(i.$$.fragment,f),T(c.$$.fragment,f),u=!1},d(f){P(e,f),f&&E(t),P(n,f),f&&E(o),P(l,f),f&&E(r),P(i,f),f&&E(a),P(c,f)}}}function F_(s){let e,t,n,o,l,r,i,a,c;return t=new _n({props:{class:"float-right after:clear-right",links:{npm:s[0].npm,github:s[0].github}}}),a=new fn({props:{$$slots:{default:[H_]},$$scope:{ctx:s}}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),o=g("h1"),o.textContent="A set of components for picking and editing colors",l=C(),r=g("ul"),r.innerHTML=`<li>no inline styles</li> 
    <li>the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts" target="_blank" rel="noreferrer">utils.d.ts</a> for definitions of types and functions</li>`,i=C(),L(a.$$.fragment),m(o,"class","text-2xl"),m(r,"class","leading-6 mb-8"),m(e,"class","prose max-w-none my-4")},m(u,f){S(u,e,f),O(t,e,null),h(e,n),h(e,o),h(e,l),h(e,r),h(e,i),O(a,e,null),c=!0},p(u,[f]){const d={};f&2&&(d.$$scope={dirty:f,ctx:u}),a.$set(d)},i(u){c||(v(t.$$.fragment,u),v(a.$$.fragment,u),c=!0)},o(u){T(t.$$.fragment,u),T(a.$$.fragment,u),c=!1},d(u){u&&E(e),P(t),P(a)}}}function j_(s){const e=un("@apsc/color");return hn(document.title.replace(/(•).*$/,"$1 Color")),[e]}let U_=class extends W{constructor(e){super(),K(this,e,j_,F_,j,{})}};const jr=`# [Floating UI](https://floating-ui.com/) action for \`use\` Svelte directive

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
`;function q_(s){let e,t,n;return t=new gn({props:{source:jr.slice(jr.search(/^[#\s]+API$/im)+1)}}),{c(){e=g("section"),L(t.$$.fragment),m(e,"class","documentation")},m(o,l){S(o,e,l),O(t,e,null),n=!0},p:q,i(o){n||(v(t.$$.fragment,o),n=!0)},o(o){T(t.$$.fragment,o),n=!1},d(o){o&&E(e),P(t)}}}let K_=class extends W{constructor(e){super(),K(this,e,null,q_,j,{})}};function Ur(s,e,t){const n=s.slice();return n[20]=e[t],n}function qr(s,e,t){const n=s.slice();return n[23]=e[t],n}function Kr(s){let e,t=s[23]+"",n;return{c(){e=g("option"),n=H(t),e.__value=s[23],e.value=e.__value},m(o,l){S(o,e,l),h(e,n)},p:q,d(o){o&&E(e)}}}function Wr(s){let e,t=s[20]+"",n;return{c(){e=g("option"),n=H(t),e.__value=s[12][s[20]],e.value=e.__value},m(o,l){S(o,e,l),h(e,n)},p:q,d(o){o&&E(e)}}}function Gr(s){let e,t,n,o,l,r,i,a;return{c(){e=g("div"),t=g("div"),n=H(`
      Lorem ipsum dolor sit amet consectetur adipisicing elit`),m(t,"class","arrow svelte-1b5318a"),m(e,"class","tooltip not-prose svelte-1b5318a")},m(c,u){S(c,e,u),h(e,t),s[19](t),h(e,n),r=!0,i||(a=Ke(o=s[9].call(null,e,{placement:s[5],middleware:s[6],callback:s[10]})),i=!0)},p(c,u){o&&Re(o.update)&&u&96&&o.update.call(null,{placement:c[5],middleware:c[6],callback:c[10]})},i(c){r||(c&&pt(()=>{l||(l=Xt(e,s[7],{},!0)),l.run(1)}),r=!0)},o(c){c&&(l||(l=Xt(e,s[7],{},!1)),l.run(0)),r=!1},d(c){c&&E(e),s[19](null),c&&l&&l.end(),i=!1,a()}}}function W_(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$,x,R,N,y,D,B,G,oe,re,ue,ve,$e=s[4]?"hide":"show",Ie,z,Q,Y,ne=s[11],U=[];for(let V=0;V<ne.length;V+=1)U[V]=Kr(qr(s,ne,V));let ge=Object.keys(s[12]),ie=[];for(let V=0;V<ge.length;V+=1)ie[V]=Wr(Ur(s,ge,V));let ke=s[4]&&Gr(s);return{c(){e=g("div"),t=g("label"),n=g("span"),n.textContent="placement",o=C(),l=g("select");for(let V=0;V<U.length;V+=1)U[V].c();r=C(),i=g("label"),a=g("input"),c=C(),u=g("span"),u.textContent="flip",f=C(),d=g("label"),p=g("span"),p.textContent="offset",_=C(),k=g("input"),A=C(),w=g("label"),$=g("span"),$.textContent="size padding",x=C(),R=g("input"),N=C(),y=g("label"),D=g("span"),D.textContent="transition",B=C(),G=g("select");for(let V=0;V<ie.length;V+=1)ie[V].c();oe=C(),re=g("div"),ue=g("button"),ve=H("Click me to "),Ie=H($e),z=C(),ke&&ke.c(),m(l,"class","input"),s[5]===void 0&&pt(()=>s[13].call(l)),m(a,"type","checkbox"),m(i,"class","whitespace-nowrap"),m(k,"type","number"),m(k,"class","input w-[8ch]"),m(R,"type","number"),m(R,"class","input w-[8ch]"),m(G,"class","input"),s[7]===void 0&&pt(()=>s[17].call(G)),m(e,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),m(ue,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),m(re,"class","h-64 flex items-center justify-center border")},m(V,Ee){S(V,e,Ee),h(e,t),h(t,n),h(t,o),h(t,l);for(let _e=0;_e<U.length;_e+=1)U[_e].m(l,null);St(l,s[5]),h(e,r),h(e,i),h(i,a),a.checked=s[2],h(i,c),h(i,u),h(e,f),h(e,d),h(d,p),h(d,_),h(d,k),Ge(k,s[1]),h(e,A),h(e,w),h(w,$),h(w,x),h(w,R),Ge(R,s[3]),h(e,N),h(e,y),h(y,D),h(y,B),h(y,G);for(let _e=0;_e<ie.length;_e+=1)ie[_e].m(G,null);St(G,s[7]),S(V,oe,Ee),S(V,re,Ee),h(re,ue),h(ue,ve),h(ue,Ie),h(re,z),ke&&ke.m(re,null),Q||(Y=[Z(l,"change",s[13]),Z(a,"change",s[14]),Z(k,"input",s[15]),Z(R,"input",s[16]),Z(G,"change",s[17]),Ke(s[8].call(null,ue)),Z(ue,"click",s[18])],Q=!0)},p(V,[Ee]){if(Ee&2048){ne=V[11];let _e;for(_e=0;_e<ne.length;_e+=1){const Qe=qr(V,ne,_e);U[_e]?U[_e].p(Qe,Ee):(U[_e]=Kr(Qe),U[_e].c(),U[_e].m(l,null))}for(;_e<U.length;_e+=1)U[_e].d(1);U.length=ne.length}if(Ee&2080&&St(l,V[5]),Ee&4&&(a.checked=V[2]),Ee&2&&tt(k.value)!==V[1]&&Ge(k,V[1]),Ee&8&&tt(R.value)!==V[3]&&Ge(R,V[3]),Ee&4096){ge=Object.keys(V[12]);let _e;for(_e=0;_e<ge.length;_e+=1){const Qe=Ur(V,ge,_e);ie[_e]?ie[_e].p(Qe,Ee):(ie[_e]=Wr(Qe),ie[_e].c(),ie[_e].m(G,null))}for(;_e<ie.length;_e+=1)ie[_e].d(1);ie.length=ge.length}Ee&4224&&St(G,V[7]),Ee&16&&$e!==($e=V[4]?"hide":"show")&&Ze(Ie,$e),V[4]?ke?(ke.p(V,Ee),Ee&16&&v(ke,1)):(ke=Gr(V),ke.c(),v(ke,1),ke.m(re,null)):ke&&(de(),T(ke,1,1,()=>{ke=null}),pe())},i(V){v(ke)},o(V){T(ke)},d(V){V&&E(e),Le(U,V),Le(ie,V),V&&E(oe),V&&E(re),ke&&ke.d(),Q=!1,ye(Y)}}}function G_(s,e,t){const[n,o]=Ws(!0);let l,r=!1;function i(D){const{placement:B,middlewareData:G}=D;if(G.arrow){const{x:oe,y:re}=G.arrow,ue={top:"bottom",right:"left",bottom:"top",left:"right"}[B.split("-")[0]];ue&&Object.assign(l.style,{left:oe!=null?`${oe}px`:"",top:re!=null?`${re}px`:"",right:"",bottom:"",[ue]:"-6px"})}}const a=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let c=a[0],u=16,f=!0,d=16,p=[],_;const k={slide:Mn,scale:Km,fade:qm,blur:Um,none:()=>({delay:0,duration:0})};function A(){c=qn(this),t(5,c),t(11,a)}function w(){f=this.checked,t(2,f)}function $(){u=tt(this.value),t(1,u)}function x(){d=tt(this.value),t(3,d)}function R(){_=qn(this),t(7,_),t(12,k)}const N=()=>t(4,r=!r);function y(D){Fe[D?"unshift":"push"](()=>{l=D,t(0,l)})}return s.$$.update=()=>{s.$$.dirty&15&&t(6,p=[Us(u),f&&js(),ga({padding:d,apply({availableWidth:D,availableHeight:B,elements:G}){Object.assign(G.floating.style,{maxWidth:`${D}px`,maxHeight:`${B}px`})}}),l&&ma({element:l})].filter(D=>!!D))},[l,u,f,d,r,c,p,_,n,o,i,a,k,A,w,$,x,R,N,y]}let Z_=class extends W{constructor(e){super(),K(this,e,G_,W_,j,{})}};function Q_(s){let e,t,n,o,l;return t=new Z_({}),o=new st({props:{code:`<script lang="ts">
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
`}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),L(o.$$.fragment),m(e,"class","prose max-w-none my-4")},m(r,i){S(r,e,i),O(t,e,null),h(e,n),O(o,e,null),l=!0},p:q,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T(o.$$.fragment,r),l=!1},d(r){r&&E(e),P(t),P(o)}}}let X_=class extends W{constructor(e){super(),K(this,e,null,Q_,j,{})}};function Zr(s,e,t){const n=s.slice();return n[18]=e[t],n}function Qr(s){let e,t=s[18]+"",n;return{c(){e=g("option"),n=H(t),e.__value=s[18],e.value=e.__value},m(o,l){S(o,e,l),h(e,n)},p:q,d(o){o&&E(e)}}}function J_(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$,x,R,N,y,D,B,G=s[1]?"hide":"show",oe,re,ue,ve,$e,Ie,z,Q,Y=s[10],ne=[];for(let U=0;U<Y.length;U+=1)ne[U]=Qr(Zr(s,Y,U));return{c(){e=g("div"),t=g("label"),n=g("span"),n.textContent="placement",o=C(),l=g("select");for(let U=0;U<ne.length;U+=1)ne[U].c();r=C(),i=g("label"),a=g("input"),c=C(),u=g("span"),u.textContent="flip",f=C(),d=g("label"),p=g("span"),p.textContent="offset",_=C(),k=g("input"),A=C(),w=g("label"),$=g("span"),$.textContent="size padding",x=C(),R=g("input"),N=C(),y=g("div"),D=g("button"),B=H("Click me to "),oe=H(G),re=C(),ue=g("div"),ve=g("div"),$e=H(`
    Lorem ipsum dolor sit amet consectetur adipisicing elit`),m(l,"class","input"),s[5]===void 0&&pt(()=>s[11].call(l)),m(a,"type","checkbox"),m(i,"class","whitespace-nowrap"),m(k,"type","number"),m(k,"class","input w-[8ch]"),m(R,"type","number"),m(R,"class","input w-[8ch]"),m(e,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),m(D,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),m(ve,"class","arrow svelte-1lvd4kc"),m(ue,"class","tooltip not-prose svelte-1lvd4kc"),le(ue,"in",s[1]),le(ue,"out",!s[1]),m(y,"class","h-64 flex items-center justify-center border")},m(U,ge){S(U,e,ge),h(e,t),h(t,n),h(t,o),h(t,l);for(let ie=0;ie<ne.length;ie+=1)ne[ie].m(l,null);St(l,s[5]),h(e,r),h(e,i),h(i,a),a.checked=s[3],h(i,c),h(i,u),h(e,f),h(e,d),h(d,p),h(d,_),h(d,k),Ge(k,s[2]),h(e,A),h(e,w),h(w,$),h(w,x),h(w,R),Ge(R,s[4]),S(U,N,ge),S(U,y,ge),h(y,D),h(D,B),h(D,oe),h(y,re),h(y,ue),h(ue,ve),s[16](ve),h(ue,$e),z||(Q=[Z(l,"change",s[11]),Z(a,"change",s[12]),Z(k,"input",s[13]),Z(R,"input",s[14]),Ke(s[7].call(null,D)),Z(D,"click",s[15]),Ke(Ie=s[8].call(null,ue,{placement:s[5],middleware:s[6],callback:s[9]}))],z=!0)},p(U,[ge]){if(ge&1024){Y=U[10];let ie;for(ie=0;ie<Y.length;ie+=1){const ke=Zr(U,Y,ie);ne[ie]?ne[ie].p(ke,ge):(ne[ie]=Qr(ke),ne[ie].c(),ne[ie].m(l,null))}for(;ie<ne.length;ie+=1)ne[ie].d(1);ne.length=Y.length}ge&1056&&St(l,U[5]),ge&8&&(a.checked=U[3]),ge&4&&tt(k.value)!==U[2]&&Ge(k,U[2]),ge&16&&tt(R.value)!==U[4]&&Ge(R,U[4]),ge&2&&G!==(G=U[1]?"hide":"show")&&Ze(oe,G),Ie&&Re(Ie.update)&&ge&96&&Ie.update.call(null,{placement:U[5],middleware:U[6],callback:U[9]}),ge&2&&le(ue,"in",U[1]),ge&2&&le(ue,"out",!U[1])},i:q,o:q,d(U){U&&E(e),Le(ne,U),U&&E(N),U&&E(y),s[16](null),z=!1,ye(Q)}}}function Y_(s,e,t){const[n,o,l]=Ws(!0);let r,i=!1;function a(N){const{placement:y,middlewareData:D}=N;if(D.arrow){const{x:B,y:G}=D.arrow,oe={top:"bottom",right:"left",bottom:"top",left:"right"}[y.split("-")[0]];oe&&Object.assign(r.style,{left:B!=null?`${B}px`:"",top:G!=null?`${G}px`:"",right:"",bottom:"",[oe]:"-6px"})}}const c=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let u=c[0],f=16,d=!0,p=16,_=[];function k(){u=qn(this),t(5,u),t(10,c)}function A(){d=this.checked,t(3,d)}function w(){f=tt(this.value),t(2,f)}function $(){p=tt(this.value),t(4,p)}const x=()=>t(1,i=!i);function R(N){Fe[N?"unshift":"push"](()=>{r=N,t(0,r)})}return s.$$.update=()=>{s.$$.dirty&2&&l(i),s.$$.dirty&29&&t(6,_=[Us(f),d&&js(),ga({padding:p,apply({availableWidth:N,availableHeight:y,elements:D}){Object.assign(D.floating.style,{maxWidth:`${N}px`,maxHeight:`${y}px`})}}),r&&ma({element:r})].filter(N=>!!N))},[r,i,f,d,p,u,_,n,o,a,c,k,A,w,$,x,R]}let V_=class extends W{constructor(e){super(),K(this,e,Y_,J_,j,{})}};function eb(s){let e,t,n,o,l;return t=new V_({}),o=new st({props:{code:`<script lang="ts">
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
`}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),L(o.$$.fragment),m(e,"class","prose max-w-none my-4")},m(r,i){S(r,e,i),O(t,e,null),h(e,n),O(o,e,null),l=!0},p:q,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T(o.$$.fragment,r),l=!1},d(r){r&&E(e),P(t),P(o)}}}let tb=class extends W{constructor(e){super(),K(this,e,null,eb,j,{})}};function nb(s){let e;return{c(){e=H("API")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function sb(s){let e;return{c(){e=H("Transition JS demo")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function ob(s){let e;return{c(){e=H("Transition CSS demo")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function lb(s){let e,t,n,o,l,r;return e=new Ue({props:{$$slots:{default:[nb]},$$scope:{ctx:s}}}),n=new Ue({props:{$$slots:{default:[sb]},$$scope:{ctx:s}}}),l=new Ue({props:{$$slots:{default:[ob]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment)},m(i,a){O(e,i,a),S(i,t,a),O(n,i,a),S(i,o,a),O(l,i,a),r=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(v(e.$$.fragment,i),v(n.$$.fragment,i),v(l.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&E(t),P(n,i),i&&E(o),P(l,i)}}}function rb(s){let e,t;return e=new K_({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function ib(s){let e,t;return e=new X_({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function ab(s){let e,t;return e=new tb({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function cb(s){let e,t,n,o,l,r,i,a;return e=new dn({props:{$$slots:{default:[lb]},$$scope:{ctx:s}}}),n=new qe({props:{$$slots:{default:[rb]},$$scope:{ctx:s}}}),l=new qe({props:{$$slots:{default:[ib]},$$scope:{ctx:s}}}),i=new qe({props:{$$slots:{default:[ab]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment),r=C(),L(i.$$.fragment)},m(c,u){O(e,c,u),S(c,t,u),O(n,c,u),S(c,o,u),O(l,c,u),S(c,r,u),O(i,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&2&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&2&&(p.$$scope={dirty:u,ctx:c}),l.$set(p);const _={};u&2&&(_.$$scope={dirty:u,ctx:c}),i.$set(_)},i(c){a||(v(e.$$.fragment,c),v(n.$$.fragment,c),v(l.$$.fragment,c),v(i.$$.fragment,c),a=!0)},o(c){T(e.$$.fragment,c),T(n.$$.fragment,c),T(l.$$.fragment,c),T(i.$$.fragment,c),a=!1},d(c){P(e,c),c&&E(t),P(n,c),c&&E(o),P(l,c),c&&E(r),P(i,c)}}}function ub(s){let e,t,n,o,l,r,i,a,c;return t=new _n({props:{class:"float-right after:clear-right",links:{npm:s[0].npm,github:s[0].github}}}),a=new fn({props:{$$slots:{default:[cb]},$$scope:{ctx:s}}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),o=g("h1"),o.textContent="Action to use Floating UI",l=C(),r=g("ul"),r.innerHTML=`<li>allows you to use both Svelte transitions and CSS transitions</li> 
    <li>dependence <a href="https://github.com/floating-ui/floating-ui" target="_blank" rel="noreferrer">@floating-ui/dom</a></li>`,i=C(),L(a.$$.fragment),m(o,"class","text-2xl"),m(r,"class","leading-6 mb-8"),m(e,"class","prose max-w-none my-4")},m(u,f){S(u,e,f),O(t,e,null),h(e,n),h(e,o),h(e,l),h(e,r),h(e,i),O(a,e,null),c=!0},p(u,[f]){const d={};f&2&&(d.$$scope={dirty:f,ctx:u}),a.$set(d)},i(u){c||(v(t.$$.fragment,u),v(a.$$.fragment,u),c=!0)},o(u){T(t.$$.fragment,u),T(a.$$.fragment,u),c=!1},d(u){u&&E(e),P(t),P(a)}}}function fb(s){const e=un("@apsc/floating-ui-action");return hn(document.title.replace(/(•).*$/,"$1 Floating UI action")),[e]}let db=class extends W{constructor(e){super(),K(this,e,fb,ub,j,{})}};const Xr=`# Action to control \`focusin\` and \`focusout\` for Svelte directive \`use\`

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
`;function pb(s){let e,t,n;return t=new gn({props:{source:Xr.slice(Xr.search(/^[#\s]+API$/im)+1)}}),{c(){e=g("section"),L(t.$$.fragment),m(e,"class","documentation")},m(o,l){S(o,e,l),O(t,e,null),n=!0},p:q,i(o){n||(v(t.$$.fragment,o),n=!0)},o(o){T(t.$$.fragment,o),n=!1},d(o){o&&E(e),P(t)}}}let hb=class extends W{constructor(e){super(),K(this,e,null,pb,j,{})}};function mb(s){let e;return{c(){e=H(" ")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function gb(s){let e;return{c(){e=H("Try to close the dropdown block by clicking outside")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function _b(s){let e;return{c(){e=H("Select")},m(t,n){S(t,e,n)},p:q,d(t){t&&E(e)}}}function bb(s){let e,t,n;return{c(){e=H("Selected "),t=g("small"),n=H(s[3]),m(t,"class","font-semibold text-gray-400")},m(o,l){S(o,e,l),S(o,t,l),h(t,n)},p(o,l){l&8&&Ze(n,o[3])},d(o){o&&E(e),o&&E(t)}}}function Jr(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$,x,R;return{c(){e=g("div"),t=g("div"),t.textContent="Choose one of the items",n=C(),o=g("div"),l=g("label"),r=g("input"),i=C(),a=g("span"),a.textContent="Firts",c=C(),u=g("label"),f=g("input"),d=C(),p=g("span"),p.textContent="Second",_=C(),k=g("label"),A=g("input"),w=C(),$=g("span"),$.textContent="Third",m(t,"class","alert svelte-1hjb9pe"),le(t,"error",s[2]),m(r,"type","radio"),r.__value="Firts",r.value=r.__value,m(r,"name","item"),s[8][0].push(r),m(f,"type","radio"),f.__value="Second",f.value=f.__value,m(f,"name","item"),s[8][0].push(f),m(A,"type","radio"),A.__value="Third",A.value=A.__value,m(A,"name","item"),s[8][0].push(A),m(o,"class","mt-2 flex gap-4 px-2"),m(e,"class","absolute border shadow-md rounded-md p-2 top-2 bg-white"),m(e,"tabindex","-1")},m(N,y){S(N,e,y),h(e,t),h(e,n),h(e,o),h(o,l),h(l,r),r.checked=r.__value===s[3],h(l,i),h(l,a),h(o,c),h(o,u),h(u,f),f.checked=f.__value===s[3],h(u,d),h(u,p),h(o,_),h(o,k),h(k,A),A.checked=A.__value===s[3],h(k,w),h(k,$),s[11](e),x||(R=[Z(r,"change",s[7]),Z(f,"change",s[9]),Z(A,"change",s[10]),Ke(Yn.call(null,e,[void 0,s[4]]))],x=!0)},p(N,y){y&4&&le(t,"error",N[2]),y&8&&(r.checked=r.__value===N[3]),y&8&&(f.checked=f.__value===N[3]),y&8&&(A.checked=A.__value===N[3])},d(N){N&&E(e),s[8][0].splice(s[8][0].indexOf(r),1),s[8][0].splice(s[8][0].indexOf(f),1),s[8][0].splice(s[8][0].indexOf(A),1),s[11](null),x=!1,ye(R)}}}function $b(s){let e,t,n,o,l,r,i,a,c,u,f;function d(x,R){return x[1]&&!x[3]?gb:mb}let p=d(s),_=p(s);function k(x,R){return x[3]?bb:_b}let A=k(s),w=A(s),$=s[1]&&Jr(s);return{c(){e=g("div"),_.c(),t=C(),n=g("div"),o=g("button"),w.c(),l=C(),r=g("button"),i=H("Reset"),a=C(),c=g("div"),$&&$.c(),m(e,"class","w-fit mx-auto mb-4"),m(o,"class","input w-[200px]"),m(r,"class","input"),r.disabled=s[1],m(c,"class","relative"),m(n,"class","w-fit mx-auto")},m(x,R){S(x,e,R),_.m(e,null),S(x,t,R),S(x,n,R),h(n,o),w.m(o,null),h(n,l),h(n,r),h(r,i),h(n,a),h(n,c),$&&$.m(c,null),u||(f=[Z(o,"click",s[5]),Z(r,"click",s[6])],u=!0)},p(x,[R]){p!==(p=d(x))&&(_.d(1),_=p(x),_&&(_.c(),_.m(e,null))),A===(A=k(x))&&w?w.p(x,R):(w.d(1),w=A(x),w&&(w.c(),w.m(o,null))),R&2&&(r.disabled=x[1]),x[1]?$?$.p(x,R):($=Jr(x),$.c(),$.m(c,null)):$&&($.d(1),$=null)},i:q,o:q,d(x){x&&E(e),_.d(),x&&E(t),x&&E(n),w.d(),$&&$.d(),u=!1,ye(f)}}}function vb(s,e,t){let n=!1,o=!1,l,r="";function i(){r?(t(1,n=!1),t(2,o=!1)):t(2,o=!0)}const a=[[]],c=()=>t(1,n=!0),u=()=>t(3,r="");function f(){r=this.__value,t(3,r)}function d(){r=this.__value,t(3,r)}function p(){r=this.__value,t(3,r)}function _(k){Fe[k?"unshift":"push"](()=>{l=k,t(0,l)})}return s.$$.update=()=>{s.$$.dirty&1&&l&&l.focus()},[l,n,o,r,i,c,u,f,a,d,p,_]}let wb=class extends W{constructor(e){super(),K(this,e,vb,$b,j,{})}};function kb(s){let e,t,n,o,l;return t=new wb({}),o=new st({props:{code:`<script lang="ts">
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
`}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),L(o.$$.fragment),m(e,"class","prose max-w-none my-4")},m(r,i){S(r,e,i),O(t,e,null),h(e,n),O(o,e,null),l=!0},p:q,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T(o.$$.fragment,r),l=!1},d(r){r&&E(e),P(t),P(o)}}}let yb=class extends W{constructor(e){super(),K(this,e,null,kb,j,{})}};function Yr(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w,$,x,R,N;return{c(){e=g("ul"),t=g("li"),n=g("button"),n.textContent="Open",o=C(),l=g("li"),r=g("button"),r.textContent="Close",i=C(),a=g("li"),c=g("button"),c.textContent="Upload",u=C(),f=g("li"),d=g("button"),d.textContent="Download",p=C(),_=g("li"),k=C(),A=g("li"),w=g("button"),w.textContent="About",m(n,"class","svelte-x2xhpk"),m(t,"class","svelte-x2xhpk"),m(r,"class","svelte-x2xhpk"),m(l,"class","svelte-x2xhpk"),m(c,"class","svelte-x2xhpk"),m(a,"class","svelte-x2xhpk"),m(d,"class","svelte-x2xhpk"),m(f,"class","svelte-x2xhpk"),m(_,"class","separator svelte-x2xhpk"),m(w,"class","svelte-x2xhpk"),m(A,"class","svelte-x2xhpk"),m(e,"class","dropdown svelte-x2xhpk"),m(e,"tabindex","-1")},m(y,D){S(y,e,D),h(e,t),h(t,n),h(e,o),h(e,l),h(l,r),h(e,i),h(e,a),h(a,c),h(e,u),h(e,f),h(f,d),h(e,p),h(e,_),h(e,k),h(e,A),h(A,w),x=!0,R||(N=[Z(n,"click",s[4]),Z(r,"click",s[5]),Z(c,"click",s[6]),Z(d,"click",s[7]),Z(w,"click",s[8]),Ke(s[2].call(null,e,{placement:"bottom-start",middleware:[js(),Us(8)]}))],R=!0)},p:q,i(y){x||(y&&pt(()=>{$||($=Xt(e,Mn,{},!0)),$.run(1)}),x=!0)},o(y){y&&($||($=Xt(e,Mn,{},!1)),$.run(0)),x=!1},d(y){y&&E(e),y&&$&&$.end(),R=!1,ye(N)}}}function Tb(s){let e,t,n,o,l,r,i=s[0]&&Yr(s);return{c(){e=g("div"),t=g("button"),t.textContent="Action",n=C(),i&&i.c(),m(t,"class","input"),m(e,"class","w-fit mx-auto")},m(a,c){S(a,e,c),h(e,t),h(e,n),i&&i.m(e,null),l||(r=[Ke(s[1].call(null,t)),Z(t,"click",s[3]),Ke(o=Yn.call(null,e,[void 0,s[9]]))],l=!0)},p(a,[c]){a[0]?i?(i.p(a,c),c&1&&v(i,1)):(i=Yr(a),i.c(),v(i,1),i.m(e,null)):i&&(de(),T(i,1,1,()=>{i=null}),pe()),o&&Re(o.update)&&c&1&&o.update.call(null,[void 0,a[9]])},i(a){v(i)},o(a){T(i)},d(a){a&&E(e),i&&i.d(),l=!1,ye(r)}}}function Eb(s,e,t){const[n,o,l]=Ws(!0);let r=!1;const i=()=>t(0,r=!0),a=()=>t(0,r=!1),c=()=>t(0,r=!1),u=()=>t(0,r=!1),f=()=>t(0,r=!1),d=()=>t(0,r=!1),p=()=>t(0,r=!1);return s.$$.update=()=>{s.$$.dirty&1&&l(r)},[r,n,o,i,a,c,u,f,d,p]}let Sb=class extends W{constructor(e){super(),K(this,e,Eb,Tb,j,{})}};function xb(s){let e,t,n,o,l,r,i;return o=new Sb({}),r=new st({props:{code:`<script lang="ts">
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
`}}),{c(){e=g("section"),t=g("div"),t.innerHTML='This example uses <a href="./?c=floating-ui-action"><code>@apsc/floating-ui-action</code></a>',n=C(),L(o.$$.fragment),l=C(),L(r.$$.fragment),m(t,"class","w-fit mx-auto mb-4"),m(e,"class","prose max-w-none my-4")},m(a,c){S(a,e,c),h(e,t),h(e,n),O(o,e,null),h(e,l),O(r,e,null),i=!0},p:q,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){T(o.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),P(o),P(r)}}}let Ab=class extends W{constructor(e){super(),K(this,e,null,xb,j,{})}};function Cb(s){let e,t,n,o,l,r,i,a,c,u,f;return{c(){e=g("div"),t=g("div"),n=g("fieldset"),n.innerHTML=`<legend class="svelte-c2p0zs">Your details</legend> 
      <label class="svelte-c2p0zs"><span>Name</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Email</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Phone</span> 
        <input type="text" class="input svelte-c2p0zs"/></label>`,l=C(),r=g("div"),r.innerHTML='<button type="button" class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8 svelte-c2p0zs">Submit</button>',i=C(),a=g("fieldset"),a.innerHTML=`<legend class="svelte-c2p0zs">Delivery address</legend> 
    <label class="svelte-c2p0zs"><span>Address</span> 
      <textarea rows="3" class="input svelte-c2p0zs"></textarea></label> 
    <label class="svelte-c2p0zs"><span>Postcode</span> 
      <input type="text" class="input svelte-c2p0zs"/></label> 
    <label class="svelte-c2p0zs"><span>Country</span> 
      <input type="text" class="input svelte-c2p0zs"/></label>`,m(n,"class","svelte-c2p0zs"),le(n,"active",s[0]),m(r,"class","mt-8"),m(t,"class","basis-1/2"),m(a,"class","basis-1/2 svelte-c2p0zs"),le(a,"active",s[1]),m(e,"class","form svelte-c2p0zs")},m(d,p){S(d,e,p),h(e,t),h(t,n),h(t,l),h(t,r),h(e,i),h(e,a),u||(f=[Ke(o=Yn.call(null,n,[s[2],s[3]])),Ke(c=Yn.call(null,a,[s[4],s[5]]))],u=!0)},p(d,[p]){o&&Re(o.update)&&p&1&&o.update.call(null,[d[2],d[3]]),p&1&&le(n,"active",d[0]),c&&Re(c.update)&&p&2&&c.update.call(null,[d[4],d[5]]),p&2&&le(a,"active",d[1])},i:q,o:q,d(d){d&&E(e),u=!1,ye(f)}}}function Nb(s,e,t){let n=!1,o=!1;return[n,o,()=>t(0,n=!0),()=>t(0,n=!1),()=>t(1,o=!0),()=>t(1,o=!1)]}let Mb=class extends W{constructor(e){super(),K(this,e,Nb,Cb,j,{})}};function Rb(s){let e,t,n,o,l,r,i;return o=new Mb({}),r=new st({props:{code:""}}),{c(){e=g("section"),t=g("div"),t.textContent="This example highlights a focused fieldset.",n=C(),L(o.$$.fragment),l=C(),L(r.$$.fragment),m(t,"class","mb-8 pb-2 border-b text-center text-gray-500"),m(e,"class","prose max-w-none my-4")},m(a,c){S(a,e,c),h(e,t),h(e,n),O(o,e,null),h(e,l),O(r,e,null),i=!0},p:q,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){T(o.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),P(o),P(r)}}}let Ob=class extends W{constructor(e){super(),K(this,e,null,Rb,j,{})}};function Pb(s){let e;return{c(){e=H("API")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function Lb(s){let e;return{c(){e=H("Required demo")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function Db(s){let e;return{c(){e=H("Dropdown demo")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function Ib(s){let e;return{c(){e=H("Style demo")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function Bb(s){let e,t,n,o,l,r,i,a;return e=new Ue({props:{$$slots:{default:[Pb]},$$scope:{ctx:s}}}),n=new Ue({props:{$$slots:{default:[Lb]},$$scope:{ctx:s}}}),l=new Ue({props:{$$slots:{default:[Db]},$$scope:{ctx:s}}}),i=new Ue({props:{$$slots:{default:[Ib]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment),r=C(),L(i.$$.fragment)},m(c,u){O(e,c,u),S(c,t,u),O(n,c,u),S(c,o,u),O(l,c,u),S(c,r,u),O(i,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&2&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&2&&(p.$$scope={dirty:u,ctx:c}),l.$set(p);const _={};u&2&&(_.$$scope={dirty:u,ctx:c}),i.$set(_)},i(c){a||(v(e.$$.fragment,c),v(n.$$.fragment,c),v(l.$$.fragment,c),v(i.$$.fragment,c),a=!0)},o(c){T(e.$$.fragment,c),T(n.$$.fragment,c),T(l.$$.fragment,c),T(i.$$.fragment,c),a=!1},d(c){P(e,c),c&&E(t),P(n,c),c&&E(o),P(l,c),c&&E(r),P(i,c)}}}function zb(s){let e,t;return e=new hb({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Hb(s){let e,t;return e=new yb({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Fb(s){let e,t;return e=new Ab({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function jb(s){let e,t;return e=new Ob({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Ub(s){let e,t,n,o,l,r,i,a,c,u;return e=new dn({props:{$$slots:{default:[Bb]},$$scope:{ctx:s}}}),n=new qe({props:{$$slots:{default:[zb]},$$scope:{ctx:s}}}),l=new qe({props:{$$slots:{default:[Hb]},$$scope:{ctx:s}}}),i=new qe({props:{$$slots:{default:[Fb]},$$scope:{ctx:s}}}),c=new qe({props:{$$slots:{default:[jb]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment),r=C(),L(i.$$.fragment),a=C(),L(c.$$.fragment)},m(f,d){O(e,f,d),S(f,t,d),O(n,f,d),S(f,o,d),O(l,f,d),S(f,r,d),O(i,f,d),S(f,a,d),O(c,f,d),u=!0},p(f,d){const p={};d&2&&(p.$$scope={dirty:d,ctx:f}),e.$set(p);const _={};d&2&&(_.$$scope={dirty:d,ctx:f}),n.$set(_);const k={};d&2&&(k.$$scope={dirty:d,ctx:f}),l.$set(k);const A={};d&2&&(A.$$scope={dirty:d,ctx:f}),i.$set(A);const w={};d&2&&(w.$$scope={dirty:d,ctx:f}),c.$set(w)},i(f){u||(v(e.$$.fragment,f),v(n.$$.fragment,f),v(l.$$.fragment,f),v(i.$$.fragment,f),v(c.$$.fragment,f),u=!0)},o(f){T(e.$$.fragment,f),T(n.$$.fragment,f),T(l.$$.fragment,f),T(i.$$.fragment,f),T(c.$$.fragment,f),u=!1},d(f){P(e,f),f&&E(t),P(n,f),f&&E(o),P(l,f),f&&E(r),P(i,f),f&&E(a),P(c,f)}}}function qb(s){let e,t,n,o,l,r,i,a,c;return t=new _n({props:{class:"float-right after:clear-right",links:{npm:s[0].npm,github:s[0].github}}}),a=new fn({props:{$$slots:{default:[Ub]},$$scope:{ctx:s}}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),o=g("h1"),o.innerHTML=`Action to control <code>focusin</code> and <code>focusout</code><br/>for directive
    <code>use</code>`,l=C(),r=g("ul"),r.innerHTML=`<li>no dependencies</li> 
    <li>correctly detects loss of focus with <code>Tab</code></li>`,i=C(),L(a.$$.fragment),m(o,"class","text-2xl"),m(r,"class","leading-6 mb-8"),m(e,"class","prose max-w-none my-4")},m(u,f){S(u,e,f),O(t,e,null),h(e,n),h(e,o),h(e,l),h(e,r),h(e,i),O(a,e,null),c=!0},p(u,[f]){const d={};f&2&&(d.$$scope={dirty:f,ctx:u}),a.$set(d)},i(u){c||(v(t.$$.fragment,u),v(a.$$.fragment,u),c=!0)},o(u){T(t.$$.fragment,u),T(a.$$.fragment,u),c=!1},d(u){u&&E(e),P(t),P(a)}}}function Kb(s){const e=un("@apsc/focus-action");return hn(document.title.replace(/(•).*$/,"$1 Focus action")),[e]}let Wb=class extends W{constructor(e){super(),K(this,e,Kb,qb,j,{})}};const Vr=`# Action to call a function by keyboard shortcut for Svelte directive \`use\`

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
`;function Gb(s){let e,t,n;return t=new gn({props:{source:Vr.slice(Vr.search(/^[#\s]+API$/im)+1)}}),{c(){e=g("section"),L(t.$$.fragment),m(e,"class","documentation")},m(o,l){S(o,e,l),O(t,e,null),n=!0},p:q,i(o){n||(v(t.$$.fragment,o),n=!0)},o(o){T(t.$$.fragment,o),n=!1},d(o){o&&E(e),P(t)}}}let Zb=class extends W{constructor(e){super(),K(this,e,null,Gb,j,{})}};const Ea={alt:"Alt",cmd:"Cmd",ctrl:"Ctrl",shift:"Shift",joinWith:" + ",hideKey:"never"};let Gs=Ea;const Qb=()=>({alphanumeric:/^Key([A-Z01-9])$/,alpha:/^Key([A-Z])$/,always:/^Key(.*)$/,never:/^(.*)$/})[Gs.hideKey];function Xb(s){return{character:[16,17,18,91,93,224].indexOf(s.keyCode)!==-1?null:s.code.replace(Qb(),"$1"),modifiers:{cmd:s.metaKey,ctrl:s.ctrlKey,alt:s.altKey,shift:s.shiftKey}}}function Jb(s){const e=Xb(s),n=Object.entries(e.modifiers).reduce((o,[l,r])=>(r&&o.push(Gs[l]),o),[]);return e.character&&n.push(e.character),n}function Yb(s){return Gs=Object.assign(Object.assign({},Ea),s)}const Vb=s=>Jb(s).join(Gs.joinWith);Yb({joinWith:"+"});function jo(s,e){let{event:t,capture:n=!1,passive:o=!1,preventDefault:l=!1,stopImmediatePropagation:r=!1,stopPropagation:i=!1,fns:a}=e;function c(u){const f=Vb(u);typeof a[f]=="function"&&(l&&u.preventDefault(),i&&u.stopPropagation(),r&&u.stopImmediatePropagation(),a[f](u))}return s.addEventListener(t,c,{capture:n,passive:o}),{destroy(){s.removeEventListener(t,c,{capture:n})},update(u){const f=t!==u.event||n!==u.capture||o!==u.passive;f&&s.removeEventListener(t,c,{capture:n}),{event:t,capture:n=!1,passive:o=!1,preventDefault:l=!1,stopImmediatePropagation:r=!1,stopPropagation:i=!1,fns:a}=u,f&&s.addEventListener(t,c,{capture:n,passive:o})}}}function ei(s,e,t){const n=s.slice();return n[18]=e[t],n[20]=t,n}function ti(s){let e,t=s[18]+"",n,o,l,r;function i(){return s[17](s[20])}return{c(){e=g("div"),n=H(t),o=C(),m(e,"class","beverage-item svelte-12wr8dw"),le(e,"active",s[20]===s[1])},m(a,c){S(a,e,c),h(e,n),h(e,o),l||(r=Z(e,"click",i),l=!0)},p(a,c){s=a,c&2&&le(e,"active",s[20]===s[1])},d(a){a&&E(e),l=!1,r()}}}function e1(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A=s[2],w=[];for(let $=0;$<A.length;$+=1)w[$]=ti(ei(s,A,$));return{c(){var $;e=g("div"),t=g("div"),t.textContent="Select a beverage",n=C(),o=g("div"),l=g("input"),a=C(),c=g("button"),c.textContent="Reset",u=C(),f=g("div"),f.innerHTML=`Use the navigation buttons
    <code>ArrowUp</code>,
    <code>ArrowDown</code>,
    <code>ArrowLeft</code>,
    <code>ArrowRight</code>,
    <code>PageUp</code>,
    <code>PageDown</code>,
    <code>Home</code>,
    <code>End</code>,
    <code>Ctrl+Home</code>,
    <code>Ctrl+End</code> to select a drink`,d=C(),p=g("div");for(let x=0;x<w.length;x+=1)w[x].c();m(l,"type","text"),m(l,"class","input grow"),l.readOnly=!0,l.value=r=($=s[2][s[1]])!=null?$:"",m(c,"type","button"),m(c,"class","input"),m(o,"class","flex"),m(f,"class","block text-sm mt-1 text-gray-500"),m(e,"class","my-4"),m(p,"class","columns-3 gap-3 border-2 border-gray-200 rounded-md p-2")},m($,x){S($,e,x),h(e,t),h(e,n),h(e,o),h(o,l),s[5](l),h(o,a),h(o,c),h(e,u),h(e,f),S($,d,x),S($,p,x);for(let R=0;R<w.length;R+=1)w[R].m(p,null);_||(k=[Ke(i=jo.call(null,l,{event:"keydown",preventDefault:!0,fns:{ArrowUp:s[6],ArrowDown:s[7],ArrowLeft:s[8],ArrowRight:s[9],PageUp:s[10],PageDown:s[11],Home:s[12],End:s[13],"Ctrl+Home":s[14],"Ctrl+End":s[15]}})),Z(c,"click",s[16])],_=!0)},p($,[x]){var R;if(x&2&&r!==(r=(R=$[2][$[1]])!=null?R:"")&&l.value!==r&&(l.value=r),i&&Re(i.update)&&x&2&&i.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:$[6],ArrowDown:$[7],ArrowLeft:$[8],ArrowRight:$[9],PageUp:$[10],PageDown:$[11],Home:$[12],End:$[13],"Ctrl+Home":$[14],"Ctrl+End":$[15]}}),x&7){A=$[2];let N;for(N=0;N<A.length;N+=1){const y=ei($,A,N);w[N]?w[N].p(y,x):(w[N]=ti(y),w[N].c(),w[N].m(p,null))}for(;N<w.length;N+=1)w[N].d(1);w.length=A.length}},i:q,o:q,d($){$&&E(e),s[5](null),$&&E(d),$&&E(p),Le(w,$),_=!1,ye(k)}}}function t1(s,e,t){const n=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asiático","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","Rüdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"],o=Math.floor(n.length/3);let l;an(()=>l.focus());let r=NaN;function i(N){if(isFinite(r)){let y=r+N;y<0?y=0:y>=n.length&&(y=n.length-1),t(1,r=y)}else t(1,r=0)}function a(N){Fe[N?"unshift":"push"](()=>{l=N,t(0,l)})}return[l,r,n,o,i,a,()=>i(-1),()=>i(1),()=>i(-o),()=>i(o),()=>i(-((r||0)%o)),()=>i(o-1-(r||0)%o),()=>t(1,r=(r||0)%o),()=>t(1,r=n.length-(o-(r||0)%o)),()=>t(1,r=0),()=>t(1,r=n.length-1),()=>{t(1,r=NaN),l.focus()},N=>{t(1,r=N),l.focus()}]}let n1=class extends W{constructor(e){super(),K(this,e,t1,e1,j,{})}};function s1(s){let e,t,n,o,l;return t=new n1({}),o=new st({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),L(o.$$.fragment),m(e,"class","prose max-w-none my-4")},m(r,i){S(r,e,i),O(t,e,null),h(e,n),O(o,e,null),l=!0},p:q,i(r){l||(v(t.$$.fragment,r),v(o.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T(o.$$.fragment,r),l=!1},d(r){r&&E(e),P(t),P(o)}}}let o1=class extends W{constructor(e){super(),K(this,e,null,s1,j,{})}};function l1(s){let e;return{c(){e=H("API")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function r1(s){let e;return{c(){e=H("Navigation demo")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function i1(s){let e,t,n,o;return e=new Ue({props:{$$slots:{default:[l1]},$$scope:{ctx:s}}}),n=new Ue({props:{$$slots:{default:[r1]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment)},m(l,r){O(e,l,r),S(l,t,r),O(n,l,r),o=!0},p(l,r){const i={};r&4&&(i.$$scope={dirty:r,ctx:l}),e.$set(i);const a={};r&4&&(a.$$scope={dirty:r,ctx:l}),n.$set(a)},i(l){o||(v(e.$$.fragment,l),v(n.$$.fragment,l),o=!0)},o(l){T(e.$$.fragment,l),T(n.$$.fragment,l),o=!1},d(l){P(e,l),l&&E(t),P(n,l)}}}function a1(s){let e,t;return e=new Zb({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function ni(s){let e,t;return e=new o1({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function c1(s){let e,t,n=s[1]&&ni();return{c(){n&&n.c(),e=Te()},m(o,l){n&&n.m(o,l),S(o,e,l),t=!0},p(o,l){o[1]?n?l&2&&v(n,1):(n=ni(),n.c(),v(n,1),n.m(e.parentNode,e)):n&&(de(),T(n,1,1,()=>{n=null}),pe())},i(o){t||(v(n),t=!0)},o(o){T(n),t=!1},d(o){n&&n.d(o),o&&E(e)}}}function u1(s){let e,t,n,o,l,r;return e=new dn({props:{$$slots:{default:[i1]},$$scope:{ctx:s}}}),n=new qe({props:{$$slots:{default:[a1]},$$scope:{ctx:s}}}),l=new qe({props:{$$slots:{default:[c1,({active:i})=>({1:i}),({active:i})=>i?2:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment)},m(i,a){O(e,i,a),S(i,t,a),O(n,i,a),S(i,o,a),O(l,i,a),r=!0},p(i,a){const c={};a&4&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&4&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&6&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(v(e.$$.fragment,i),v(n.$$.fragment,i),v(l.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&E(t),P(n,i),i&&E(o),P(l,i)}}}function f1(s){let e,t,n,o,l,r,i,a,c;return t=new _n({props:{class:"float-right after:clear-right",links:{npm:s[0].npm,github:s[0].github}}}),a=new fn({props:{$$slots:{default:[u1]},$$scope:{ctx:s}}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),o=g("h1"),o.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",l=C(),r=g("ul"),r.innerHTML=`<li>allows to reduce keyboard event handling code</li> 
    <li>dependence <a href="https://www.npmjs.com/package/keyboard-event-to-string" target="_blank" rel="noreferrer">keyboard-event-to-string</a></li>`,i=C(),L(a.$$.fragment),m(o,"class","text-2xl"),m(r,"class","leading-6 mb-8"),m(e,"class","prose max-w-none my-4")},m(u,f){S(u,e,f),O(t,e,null),h(e,n),h(e,o),h(e,l),h(e,r),h(e,i),O(a,e,null),c=!0},p(u,[f]){const d={};f&4&&(d.$$scope={dirty:f,ctx:u}),a.$set(d)},i(u){c||(v(t.$$.fragment,u),v(a.$$.fragment,u),c=!0)},o(u){T(t.$$.fragment,u),T(a.$$.fragment,u),c=!1},d(u){u&&E(e),P(t),P(a)}}}function d1(s){const e=un("@apsc/keyboard-shortcut-action");return hn(document.title.replace(/(•).*$/,"$1 Keyboard shortcut action")),[e]}let p1=class extends W{constructor(e){super(),K(this,e,d1,f1,j,{})}};const si=`# Action to scroll the child to parent viewport Svelte directive \`use\`

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
`;function h1(s){let e,t,n;return t=new gn({props:{source:si.slice(si.search(/^[#\s]+API$/im)+1)}}),{c(){e=g("section"),L(t.$$.fragment),m(e,"class","documentation")},m(o,l){S(o,e,l),O(t,e,null),n=!0},p:q,i(o){n||(v(t.$$.fragment,o),n=!0)},o(o){T(t.$$.fragment,o),n=!1},d(o){o&&E(e),P(t)}}}class m1 extends W{constructor(e){super(),K(this,e,null,h1,j,{})}}const ut=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asiático","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","Rüdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"];function oi(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function li(s){let e,t=s[10]+"",n,o,l,r,i;function a(){return s[9](s[12])}return{c(){e=g("div"),n=H(t),o=C(),m(e,"class","beverage-item svelte-18rp3xo"),le(e,"active",s[12]===s[1])},m(c,u){S(c,e,u),h(e,n),h(e,o),r||(i=[Ke(l=Bs.call(null,e,s[1]===s[12]?{y:!0}:!1)),Z(e,"click",a)],r=!0)},p(c,u){s=c,l&&Re(l.update)&&u&2&&l.update.call(null,s[1]===s[12]?{y:!0}:!1),u&2&&le(e,"active",s[12]===s[1])},d(c){c&&E(e),r=!1,ye(i)}}}function g1(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A=ut,w=[];for(let $=0;$<A.length;$+=1)w[$]=li(oi(s,A,$));return{c(){var $;e=g("div"),t=g("div"),t.textContent="Select a beverage",n=C(),o=g("div"),o.innerHTML=`use the navigation buttons
    <code>ArrowUp</code>,
    <code>ArrowDown</code>,
    <code>Home</code>,
    <code>End</code> to select a drink`,l=C(),r=g("div"),i=g("input"),u=C(),f=g("button"),f.textContent="Reset",d=C(),p=g("div");for(let x=0;x<w.length;x+=1)w[x].c();m(o,"class","text-sm leading-4 text-gray-500"),m(i,"type","text"),m(i,"class","input grow"),i.readOnly=!0,i.value=a=($=ut[s[1]])!=null?$:"",m(f,"type","button"),m(f,"class","input ml-2"),m(r,"class","mt-2 flex"),m(p,"class","border-2 border-gray-200 rounded-md p-2 mt-2 w-48 max-h-[15.25rem] overflow-y-auto shadow-md scroll-smooth"),m(e,"class","my-2 mx-auto w-96")},m($,x){S($,e,x),h(e,t),h(e,n),h(e,o),h(e,l),h(e,r),h(r,i),s[3](i),h(r,u),h(r,f),h(e,d),h(e,p);for(let R=0;R<w.length;R+=1)w[R].m(p,null);_||(k=[Ke(c=jo.call(null,i,{event:"keydown",preventDefault:!0,fns:{ArrowUp:s[4],ArrowDown:s[5],Home:s[6],End:s[7]}})),Z(f,"click",s[8])],_=!0)},p($,[x]){var R;if(x&2&&a!==(a=(R=ut[$[1]])!=null?R:"")&&i.value!==a&&(i.value=a),c&&Re(c.update)&&x&2&&c.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:$[4],ArrowDown:$[5],Home:$[6],End:$[7]}}),x&3){A=ut;let N;for(N=0;N<A.length;N+=1){const y=oi($,A,N);w[N]?w[N].p(y,x):(w[N]=li(y),w[N].c(),w[N].m(p,null))}for(;N<w.length;N+=1)w[N].d(1);w.length=A.length}},i:q,o:q,d($){$&&E(e),s[3](null),Le(w,$),_=!1,ye(k)}}}function _1(s,e,t){let n;an(()=>n.focus());let o=NaN;function l(p){if(isFinite(o)){let _=o+p;_<0?_=0:_>=ut.length&&(_=ut.length-1),t(1,o=_)}else t(1,o=0)}function r(p){Fe[p?"unshift":"push"](()=>{n=p,t(0,n)})}return[n,o,l,r,()=>l(-1),()=>l(1),()=>t(1,o=0),()=>t(1,o=ut.length-1),()=>{t(1,o=NaN),n.focus()},p=>{t(1,o=p),n.focus()}]}let b1=class extends W{constructor(e){super(),K(this,e,_1,g1,j,{})}};function $1(s){let e,t,n,o,l,r,i;return o=new b1({}),r=new st({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=g("section"),t=g("div"),t.innerHTML='This example uses <a href="./?c=keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=C(),L(o.$$.fragment),l=C(),L(r.$$.fragment),m(t,"class","w-fit mx-auto mb-4"),m(e,"class","prose max-w-none my-4")},m(a,c){S(a,e,c),h(e,t),h(e,n),O(o,e,null),h(e,l),O(r,e,null),i=!0},p:q,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){T(o.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),P(o),P(r)}}}let v1=class extends W{constructor(e){super(),K(this,e,null,$1,j,{})}};function ri(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function ii(s){let e,t=s[10]+"",n,o,l,r,i;function a(){return s[9](s[12])}return{c(){e=g("div"),n=H(t),o=C(),m(e,"class","beverage-item svelte-2m30if"),le(e,"active",s[12]===s[1])},m(c,u){S(c,e,u),h(e,n),h(e,o),r||(i=[Ke(l=Bs.call(null,e,s[1]===s[12]?{x:!0}:!1)),Z(e,"click",a)],r=!0)},p(c,u){s=c,l&&Re(l.update)&&u&2&&l.update.call(null,s[1]===s[12]?{x:!0}:!1),u&2&&le(e,"active",s[12]===s[1])},d(c){c&&E(e),r=!1,ye(i)}}}function w1(s){let e,t,n,o,l,r,i,a,c,u,f,d,p,_,k,A,w=ut,$=[];for(let x=0;x<w.length;x+=1)$[x]=ii(ri(s,w,x));return{c(){var x;e=g("div"),t=g("div"),n=g("div"),n.textContent="Select a beverage",o=C(),l=g("div"),l.innerHTML=`use the navigation buttons
      <code>ArrowLeft</code>,
      <code>ArrowRight</code>,
      <code>Home</code>,
      <code>End</code> to select a drink`,r=C(),i=g("div"),a=g("input"),f=C(),d=g("button"),d.textContent="Reset",p=C(),_=g("div");for(let R=0;R<$.length;R+=1)$[R].c();m(l,"class","text-sm leading-4 text-gray-500"),m(a,"type","text"),m(a,"class","input grow"),a.readOnly=!0,a.value=c=(x=ut[s[1]])!=null?x:"",m(d,"type","button"),m(d,"class","input ml-2"),m(i,"class","mt-2 flex"),m(t,"class","mx-auto w-96"),m(_,"class","border-2 border-gray-200 rounded-md p-2 mt-2 whitespace-nowrap max-w-full overflow-x-auto shadow-md scroll-smooth"),m(e,"class","my-2")},m(x,R){S(x,e,R),h(e,t),h(t,n),h(t,o),h(t,l),h(t,r),h(t,i),h(i,a),s[3](a),h(i,f),h(i,d),h(e,p),h(e,_);for(let N=0;N<$.length;N+=1)$[N].m(_,null);k||(A=[Ke(u=jo.call(null,a,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:s[4],ArrowRight:s[5],Home:s[6],End:s[7]}})),Z(d,"click",s[8])],k=!0)},p(x,[R]){var N;if(R&2&&c!==(c=(N=ut[x[1]])!=null?N:"")&&a.value!==c&&(a.value=c),u&&Re(u.update)&&R&2&&u.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:x[4],ArrowRight:x[5],Home:x[6],End:x[7]}}),R&3){w=ut;let y;for(y=0;y<w.length;y+=1){const D=ri(x,w,y);$[y]?$[y].p(D,R):($[y]=ii(D),$[y].c(),$[y].m(_,null))}for(;y<$.length;y+=1)$[y].d(1);$.length=w.length}},i:q,o:q,d(x){x&&E(e),s[3](null),Le($,x),k=!1,ye(A)}}}function k1(s,e,t){let n;an(()=>n.focus());let o=NaN;function l(p){if(isFinite(o)){let _=o+p;_<0?_=0:_>=ut.length&&(_=ut.length-1),t(1,o=_)}else t(1,o=0)}function r(p){Fe[p?"unshift":"push"](()=>{n=p,t(0,n)})}return[n,o,l,r,()=>l(-1),()=>l(1),()=>t(1,o=0),()=>t(1,o=ut.length-1),()=>{t(1,o=NaN),n.focus()},p=>{t(1,o=p),n.focus()}]}class y1 extends W{constructor(e){super(),K(this,e,k1,w1,j,{})}}function T1(s){let e,t,n,o,l,r,i;return o=new y1({}),r=new st({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=g("section"),t=g("div"),t.innerHTML='This example uses <a href="./?c=keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=C(),L(o.$$.fragment),l=C(),L(r.$$.fragment),m(t,"class","w-fit mx-auto mb-4"),m(e,"class","prose max-w-none my-4")},m(a,c){S(a,e,c),h(e,t),h(e,n),O(o,e,null),h(e,l),O(r,e,null),i=!0},p:q,i(a){i||(v(o.$$.fragment,a),v(r.$$.fragment,a),i=!0)},o(a){T(o.$$.fragment,a),T(r.$$.fragment,a),i=!1},d(a){a&&E(e),P(o),P(r)}}}class E1 extends W{constructor(e){super(),K(this,e,null,T1,j,{})}}function S1(s){let e;return{c(){e=H("API")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function x1(s){let e;return{c(){e=H("Vertical demo")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function A1(s){let e;return{c(){e=H("Horizontal demo")},m(t,n){S(t,e,n)},d(t){t&&E(e)}}}function C1(s){let e,t,n,o,l,r;return e=new Ue({props:{$$slots:{default:[S1]},$$scope:{ctx:s}}}),n=new Ue({props:{$$slots:{default:[x1]},$$scope:{ctx:s}}}),l=new Ue({props:{$$slots:{default:[A1]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment)},m(i,a){O(e,i,a),S(i,t,a),O(n,i,a),S(i,o,a),O(l,i,a),r=!0},p(i,a){const c={};a&4&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&4&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&4&&(f.$$scope={dirty:a,ctx:i}),l.$set(f)},i(i){r||(v(e.$$.fragment,i),v(n.$$.fragment,i),v(l.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(l.$$.fragment,i),r=!1},d(i){P(e,i),i&&E(t),P(n,i),i&&E(o),P(l,i)}}}function N1(s){let e,t;return e=new m1({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function ai(s){let e,t;return e=new v1({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function M1(s){let e,t,n=s[1]&&ai();return{c(){n&&n.c(),e=Te()},m(o,l){n&&n.m(o,l),S(o,e,l),t=!0},p(o,l){o[1]?n?l&2&&v(n,1):(n=ai(),n.c(),v(n,1),n.m(e.parentNode,e)):n&&(de(),T(n,1,1,()=>{n=null}),pe())},i(o){t||(v(n),t=!0)},o(o){T(n),t=!1},d(o){n&&n.d(o),o&&E(e)}}}function ci(s){let e,t;return e=new E1({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function R1(s){let e,t,n=s[1]&&ci();return{c(){n&&n.c(),e=Te()},m(o,l){n&&n.m(o,l),S(o,e,l),t=!0},p(o,l){o[1]?n?l&2&&v(n,1):(n=ci(),n.c(),v(n,1),n.m(e.parentNode,e)):n&&(de(),T(n,1,1,()=>{n=null}),pe())},i(o){t||(v(n),t=!0)},o(o){T(n),t=!1},d(o){n&&n.d(o),o&&E(e)}}}function O1(s){let e,t,n,o,l,r,i,a;return e=new dn({props:{$$slots:{default:[C1]},$$scope:{ctx:s}}}),n=new qe({props:{$$slots:{default:[N1]},$$scope:{ctx:s}}}),l=new qe({props:{$$slots:{default:[M1,({active:c})=>({1:c}),({active:c})=>c?2:0]},$$scope:{ctx:s}}}),i=new qe({props:{$$slots:{default:[R1,({active:c})=>({1:c}),({active:c})=>c?2:0]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment),t=C(),L(n.$$.fragment),o=C(),L(l.$$.fragment),r=C(),L(i.$$.fragment)},m(c,u){O(e,c,u),S(c,t,u),O(n,c,u),S(c,o,u),O(l,c,u),S(c,r,u),O(i,c,u),a=!0},p(c,u){const f={};u&4&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const d={};u&4&&(d.$$scope={dirty:u,ctx:c}),n.$set(d);const p={};u&6&&(p.$$scope={dirty:u,ctx:c}),l.$set(p);const _={};u&6&&(_.$$scope={dirty:u,ctx:c}),i.$set(_)},i(c){a||(v(e.$$.fragment,c),v(n.$$.fragment,c),v(l.$$.fragment,c),v(i.$$.fragment,c),a=!0)},o(c){T(e.$$.fragment,c),T(n.$$.fragment,c),T(l.$$.fragment,c),T(i.$$.fragment,c),a=!1},d(c){P(e,c),c&&E(t),P(n,c),c&&E(o),P(l,c),c&&E(r),P(i,c)}}}function P1(s){let e,t,n,o,l,r,i,a,c;return t=new _n({props:{class:"float-right after:clear-right",links:{npm:s[0].npm,github:s[0].github}}}),a=new fn({props:{$$slots:{default:[O1]},$$scope:{ctx:s}}}),{c(){e=g("section"),L(t.$$.fragment),n=C(),o=g("h1"),o.innerHTML="Action to scroll the child to parent viewport Svelte directive <code>use</code>",l=C(),r=g("ul"),r.innerHTML=`<li>no dependencies</li> 
    <li>useful for components like dropdown</li> 
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>`,i=C(),L(a.$$.fragment),m(o,"class","text-2xl"),m(r,"class","leading-6 mb-8"),m(e,"class","prose max-w-none my-4")},m(u,f){S(u,e,f),O(t,e,null),h(e,n),h(e,o),h(e,l),h(e,r),h(e,i),O(a,e,null),c=!0},p(u,[f]){const d={};f&4&&(d.$$scope={dirty:f,ctx:u}),a.$set(d)},i(u){c||(v(t.$$.fragment,u),v(a.$$.fragment,u),c=!0)},o(u){T(t.$$.fragment,u),T(a.$$.fragment,u),c=!1},d(u){u&&E(e),P(t),P(a)}}}function L1(s){const e=un("@apsc/scroll-child-action");return hn(document.title.replace(/(•).*$/,"$1 Scroll child action")),[e]}class D1 extends W{constructor(e){super(),K(this,e,L1,P1,j,{})}}function I1(s){let e;return{c(){e=g("h1"),e.textContent="Not found",m(e,"class","font-bold my-4 pb-2 text-3xl text-center")},m(t,n){S(t,e,n)},i:q,o:q,d(t){t&&E(e)}}}function B1(s){let e,t;return e=new D1({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function z1(s){let e,t;return e=new p1({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function H1(s){let e,t;return e=new Wb({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function F1(s){let e,t;return e=new db({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function j1(s){let e,t;return e=new U_({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function U1(s){let e,t;return e=new ug({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function q1(s){let e,t;return e=new Dm({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function K1(s){let e,t;return e=new yu({}),{c(){L(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function W1(s){let e,t,n,o,l;const r=[K1,q1,U1,j1,F1,H1,z1,B1,I1],i=[];function a(c,u){return u&1&&(t=null),t==null&&(t=c[0].toString()===""),t?0:c[0].params.c==="tabs"?1:c[0].params.c==="glob-notify"?2:c[0].params.c==="color"?3:c[0].params.c==="floating-ui-action"?4:c[0].params.c==="focus-action"?5:c[0].params.c==="keyboard-shortcut-action"?6:c[0].params.c==="scroll-child-action"?7:8}return n=a(s,-1),o=i[n]=r[n](s),{c(){e=g("main"),o.c()},m(c,u){S(c,e,u),i[n].m(e,null),l=!0},p(c,[u]){let f=n;n=a(c,u),n!==f&&(de(),T(i[f],1,1,()=>{i[f]=null}),pe(),o=i[n],o||(o=i[n]=r[n](c),o.c()),v(o,1),o.m(e,null))},i(c){l||(v(o),l=!0)},o(c){T(o),l=!1},d(c){c&&E(e),i[n].d()}}}function G1(s,e,t){let n;return Ft(s,Gn,o=>t(0,n=o)),[n]}class Z1 extends W{constructor(e){super(),K(this,e,G1,W1,j,{})}}new Z1({target:document.getElementById("app")});
