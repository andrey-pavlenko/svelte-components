var El=Object.defineProperty,Cl=Object.defineProperties;var Al=Object.getOwnPropertyDescriptors;var rn=Object.getOwnPropertySymbols;var yo=Object.prototype.hasOwnProperty,ko=Object.prototype.propertyIsEnumerable;var vo=(o,e,t)=>e in o?El(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,He=(o,e)=>{for(var t in e||(e={}))yo.call(e,t)&&vo(o,t,e[t]);if(rn)for(var t of rn(e))ko.call(e,t)&&vo(o,t,e[t]);return o},At=(o,e)=>Cl(o,Al(e));var Bn=(o,e)=>{var t={};for(var n in o)yo.call(o,n)&&e.indexOf(n)<0&&(t[n]=o[n]);if(o!=null&&rn)for(var n of rn(o))e.indexOf(n)<0&&ko.call(o,n)&&(t[n]=o[n]);return t};var Rl=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var Ge=(o,e,t)=>new Promise((n,s)=>{var r=a=>{try{i(t.next(a))}catch(c){s(c)}},l=a=>{try{i(t.throw(a))}catch(c){s(c)}},i=a=>a.done?n(a.value):Promise.resolve(a.value).then(r,l);i((t=t.apply(o,e)).next())});var yg=Rl(Sl=>{const Nl=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Nl();function ee(){}const yr=o=>o;function nt(o,e){for(const t in e)o[t]=e[t];return o}function Ml(o){return o&&typeof o=="object"&&typeof o.then=="function"}function kr(o){return o()}function xo(){return Object.create(null)}function Re(o){o.forEach(kr)}function Ze(o){return typeof o=="function"}function K(o,e){return o!=o?e==e:o!==e||o&&typeof o=="object"||typeof o=="function"}let ln;function To(o,e){return ln||(ln=document.createElement("a")),ln.href=e,o===ln.href}function Pl(o){return Object.keys(o).length===0}function xr(o,...e){if(o==null)return ee;const t=o.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ht(o,e,t){o.$$.on_destroy.push(xr(e,t))}function Se(o,e,t,n){if(o){const s=Tr(o,e,t,n);return o[0](s)}}function Tr(o,e,t,n){return o[1]&&n?nt(t.ctx.slice(),o[1](n(e))):t.ctx}function Ee(o,e,t,n){if(o[2]&&n){const s=o[2](n(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],l=Math.max(e.dirty.length,s.length);for(let i=0;i<l;i+=1)r[i]=e.dirty[i]|s[i];return r}return e.dirty|s}return e.dirty}function Ce(o,e,t,n,s,r){if(s){const l=Tr(e,t,n,r);o.p(l,s)}}function Ae(o){if(o.ctx.length>32){const e=[],t=o.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Sr(o){const e={};for(const t in o)t[0]!=="$"&&(e[t]=o[t]);return e}function bn(o,e){const t={};e=new Set(e);for(const n in o)!e.has(n)&&n[0]!=="$"&&(t[n]=o[n]);return t}function Ue(o){return o&&Ze(o.destroy)?o.destroy:ee}const Er=typeof window!="undefined";let zl=Er?()=>window.performance.now():()=>Date.now(),eo=Er?o=>requestAnimationFrame(o):ee;const Ut=new Set;function Cr(o){Ut.forEach(e=>{e.c(o)||(Ut.delete(e),e.f())}),Ut.size!==0&&eo(Cr)}function Ol(o){let e;return Ut.size===0&&eo(Cr),{promise:new Promise(t=>{Ut.add(e={c:o,f:t})}),abort(){Ut.delete(e)}}}function h(o,e){o.appendChild(e)}function Ar(o){if(!o)return document;const e=o.getRootNode?o.getRootNode():o.ownerDocument;return e&&e.host?e:o.ownerDocument}function Il(o){const e=b("style");return Ll(Ar(o),e),e.sheet}function Ll(o,e){h(o.head||o,e)}function v(o,e,t){o.insertBefore(e,t||null)}function w(o){o.parentNode.removeChild(o)}function Fe(o,e){for(let t=0;t<o.length;t+=1)o[t]&&o[t].d(e)}function b(o){return document.createElement(o)}function Dl(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function L(o){return document.createTextNode(o)}function x(){return L(" ")}function $e(){return L("")}function G(o,e,t,n){return o.addEventListener(e,t,n),()=>o.removeEventListener(e,t,n)}function So(o){return function(e){return e.preventDefault(),o.call(this,e)}}function jl(o){return function(e){e.target===this&&o.call(this,e)}}function g(o,e,t){t==null?o.removeAttribute(e):o.getAttribute(e)!==t&&o.setAttribute(e,t)}function Eo(o,e){const t=Object.getOwnPropertyDescriptors(o.__proto__);for(const n in e)e[n]==null?o.removeAttribute(n):n==="style"?o.style.cssText=e[n]:n==="__value"?o.value=o[n]=e[n]:t[n]&&t[n].set?o[n]=e[n]:g(o,n,e[n])}function ot(o){return o===""?null:+o}function Bl(o){return Array.from(o.childNodes)}function ye(o,e){e=""+e,o.wholeText!==e&&(o.data=e)}function Ve(o,e){o.value=e==null?"":e}function Ke(o,e,t,n){t===null?o.style.removeProperty(e):o.style.setProperty(e,t,n?"important":"")}function ft(o,e){for(let t=0;t<o.options.length;t+=1){const n=o.options[t];if(n.__value===e){n.selected=!0;return}}o.selectedIndex=-1}function Qt(o){const e=o.querySelector(":checked")||o.options[0];return e&&e.__value}function Be(o,e,t){o.classList[t?"add":"remove"](e)}function Rr(o,e,{bubbles:t=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(o,t,n,e),s}class Nr{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=Dl(t.nodeName):this.e=b(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}const _n=new Map;let wn=0;function Fl(o){let e=5381,t=o.length;for(;t--;)e=(e<<5)-e^o.charCodeAt(t);return e>>>0}function Hl(o,e){const t={stylesheet:Il(e),rules:{}};return _n.set(o,t),t}function Co(o,e,t,n,s,r,l,i=0){const a=16.666/n;let c=`{
`;for(let y=0;y<=1;y+=a){const T=e+(t-e)*r(y);c+=y*100+`%{${l(T,1-T)}}
`}const u=c+`100% {${l(t,1-t)}}
}`,f=`__svelte_${Fl(u)}_${i}`,p=Ar(o),{stylesheet:d,rules:m}=_n.get(p)||Hl(p,o);m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const _=o.style.animation||"";return o.style.animation=`${_?`${_}, `:""}${f} ${n}ms linear ${s}ms 1 both`,wn+=1,f}function Ul(o,e){const t=(o.style.animation||"").split(", "),n=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-n.length;s&&(o.style.animation=n.join(", "),wn-=s,wn||ql())}function ql(){eo(()=>{wn||(_n.forEach(o=>{const{stylesheet:e}=o;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);o.rules={}}),_n.clear())})}let Jt;function ht(o){Jt=o}function Tt(){if(!Jt)throw new Error("Function called outside component initialization");return Jt}function Pt(o){Tt().$$.on_mount.push(o)}function Kl(o){Tt().$$.after_update.push(o)}function Zn(o){Tt().$$.on_destroy.push(o)}function to(){const o=Tt();return(e,t,{cancelable:n=!1}={})=>{const s=o.$$.callbacks[e];if(s){const r=Rr(e,t,{cancelable:n});return s.slice().forEach(l=>{l.call(o,r)}),!r.defaultPrevented}return!0}}function no(o,e){return Tt().$$.context.set(o,e),e}function Wt(o){return Tt().$$.context.get(o)}function Wl(o){return Tt().$$.context.has(o)}const Vt=[],Le=[],dn=[],Yn=[],Mr=Promise.resolve();let Vn=!1;function Pr(){Vn||(Vn=!0,Mr.then(oo))}function zr(){return Pr(),Mr}function Qe(o){dn.push(o)}function Mt(o){Yn.push(o)}const Fn=new Set;let an=0;function oo(){const o=Jt;do{for(;an<Vt.length;){const e=Vt[an];an++,ht(e),Gl(e.$$)}for(ht(null),Vt.length=0,an=0;Le.length;)Le.pop()();for(let e=0;e<dn.length;e+=1){const t=dn[e];Fn.has(t)||(Fn.add(t),t())}dn.length=0}while(Vt.length);for(;Yn.length;)Yn.pop()();Vn=!1,Fn.clear(),ht(o)}function Gl(o){if(o.fragment!==null){o.update(),Re(o.before_update);const e=o.dirty;o.dirty=[-1],o.fragment&&o.fragment.p(o.ctx,e),o.after_update.forEach(Qe)}}let Yt;function Zl(){return Yt||(Yt=Promise.resolve(),Yt.then(()=>{Yt=null})),Yt}function Hn(o,e,t){o.dispatchEvent(Rr(`${e?"intro":"outro"}${t}`))}const hn=new Set;let mt;function he(){mt={r:0,c:[],p:mt}}function me(){mt.r||Re(mt.c),mt=mt.p}function $(o,e){o&&o.i&&(hn.delete(o),o.i(e))}function k(o,e,t,n){if(o&&o.o){if(hn.has(o))return;hn.add(o),mt.c.push(()=>{hn.delete(o),n&&(t&&o.d(1),n())}),o.o(e)}}const Yl={duration:0};function yt(o,e,t,n){let s=e(o,t),r=n?0:1,l=null,i=null,a=null;function c(){a&&Ul(o,a)}function u(p,d){const m=p.b-r;return d*=Math.abs(m),{a:r,b:p.b,d:m,duration:d,start:p.start,end:p.start+d,group:p.group}}function f(p){const{delay:d=0,duration:m=300,easing:_=yr,tick:y=ee,css:T}=s||Yl,S={start:zl()+d,b:p};p||(S.group=mt,mt.r+=1),l||i?i=S:(T&&(c(),a=Co(o,r,p,m,d,_,T)),p&&y(0,1),l=u(S,m),Qe(()=>Hn(o,p,"start")),Ol(N=>{if(i&&N>i.start&&(l=u(i,m),i=null,Hn(o,l.b,"start"),T&&(c(),a=Co(o,r,l.b,l.duration,0,_,s.css))),l){if(N>=l.end)y(r=l.b,1-r),Hn(o,l.b,"end"),i||(l.b?c():--l.group.r||Re(l.group.c)),l=null;else if(N>=l.start){const R=N-l.start;r=l.a+l.d*_(R/l.duration),y(r,1-r)}}return!!(l||i)}))}return{run(p){Ze(s)?Zl().then(()=>{s=s(),f(p)}):f(p)},end(){c(),l=i=null}}}function $n(o,e){const t=e.token={};function n(s,r,l,i){if(e.token!==t)return;e.resolved=i;let a=e.ctx;l!==void 0&&(a=a.slice(),a[l]=i);const c=s&&(e.current=s)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,p)=>{p!==r&&f&&(he(),k(f,1,1,()=>{e.blocks[p]===f&&(e.blocks[p]=null)}),me())}):e.block.d(1),c.c(),$(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[r]=c),u&&oo()}if(Ml(o)){const s=Tt();if(o.then(r=>{ht(s),n(e.then,1,e.value,r),ht(null)},r=>{if(ht(s),n(e.catch,2,e.error,r),ht(null),!e.hasCatch)throw r}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,o),!0;e.resolved=o}}function Or(o,e,t){const n=e.slice(),{resolved:s}=o;o.current===o.then&&(n[o.value]=s),o.current===o.catch&&(n[o.error]=s),o.block.p(n,t)}const St=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Vl(o,e){k(o,1,1,()=>{e.delete(o.key)})}function Xl(o,e,t,n,s,r,l,i,a,c,u,f){let p=o.length,d=r.length,m=p;const _={};for(;m--;)_[o[m].key]=m;const y=[],T=new Map,S=new Map;for(m=d;m--;){const P=f(s,r,m),z=t(P);let O=l.get(z);O?n&&O.p(P,e):(O=c(z,P),O.c()),T.set(z,y[m]=O),z in _&&S.set(z,Math.abs(m-_[z]))}const N=new Set,R=new Set;function M(P){$(P,1),P.m(i,u),l.set(P.key,P),u=P.first,d--}for(;p&&d;){const P=y[d-1],z=o[p-1],O=P.key,I=z.key;P===z?(u=P.first,p--,d--):T.has(I)?!l.has(O)||N.has(O)?M(P):R.has(I)?p--:S.get(O)>S.get(I)?(R.add(O),M(P)):(N.add(I),p--):(a(z,l),p--)}for(;p--;){const P=o[p];T.has(P.key)||a(P,l)}for(;d;)M(y[d-1]);return y}function zt(o,e){const t={},n={},s={$$scope:1};let r=o.length;for(;r--;){const l=o[r],i=e[r];if(i){for(const a in l)a in i||(n[a]=1);for(const a in i)s[a]||(t[a]=i[a],s[a]=1);o[r]=i}else for(const a in l)s[a]=1}for(const l in n)l in t||(t[l]=void 0);return t}function Gt(o){return typeof o=="object"&&o!==null?o:{}}function kt(o,e,t){const n=o.$$.props[e];n!==void 0&&(o.$$.bound[n]=t,t(o.$$.ctx[n]))}function A(o){o&&o.c()}function E(o,e,t,n){const{fragment:s,on_mount:r,on_destroy:l,after_update:i}=o.$$;s&&s.m(e,t),n||Qe(()=>{const a=r.map(kr).filter(Ze);l?l.push(...a):Re(a),o.$$.on_mount=[]}),i.forEach(Qe)}function C(o,e){const t=o.$$;t.fragment!==null&&(Re(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ql(o,e){o.$$.dirty[0]===-1&&(Vt.push(o),Pr(),o.$$.dirty.fill(0)),o.$$.dirty[e/31|0]|=1<<e%31}function Z(o,e,t,n,s,r,l,i=[-1]){const a=Jt;ht(o);const c=o.$$={fragment:null,ctx:null,props:r,update:ee,not_equal:s,bound:xo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:xo(),dirty:i,skip_bound:!1,root:e.target||a.$$.root};l&&l(c.root);let u=!1;if(c.ctx=t?t(o,e.props||{},(f,p,...d)=>{const m=d.length?d[0]:p;return c.ctx&&s(c.ctx[f],c.ctx[f]=m)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](m),u&&Ql(o,f)),p}):[],c.update(),u=!0,Re(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Bl(e.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&$(o.$$.fragment),E(o,e.target,e.anchor,e.customElement),oo()}ht(a)}class Y{$destroy(){C(this,1),this.$destroy=ee}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Pl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Bt=[];function Jl(o,e){return{subscribe:qt(o,e).subscribe}}function qt(o,e=ee){let t;const n=new Set;function s(i){if(K(o,i)&&(o=i,t)){const a=!Bt.length;for(const c of n)c[1](),Bt.push(c,o);if(a){for(let c=0;c<Bt.length;c+=2)Bt[c][0](Bt[c+1]);Bt.length=0}}}function r(i){s(i(o))}function l(i,a=ee){const c=[i,a];return n.add(c),n.size===1&&(t=e(s)||ee),i(o),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:l}}function ei(o,e,t){const n=!Array.isArray(o),s=n?[o]:o,r=e.length<2;return Jl(t,l=>{let i=!1;const a=[];let c=0,u=ee;const f=()=>{if(c)return;u();const d=e(n?a[0]:a,l);r?l(d):u=Ze(d)?d:ee},p=s.map((d,m)=>xr(d,_=>{a[m]=_,c&=~(1<<m),i&&f()},()=>{c|=1<<m}));return i=!0,f(),function(){Re(p),u()}})}function Xn(o,e=!1){return o=o.slice(o.startsWith("/#")?2:0,o.endsWith("/*")?-2:void 0),o.startsWith("/")||(o="/"+o),o==="/"&&(o=""),e&&!o.endsWith("/")&&(o+="/"),o}function ti(o,e){o=Xn(o,!0),e=Xn(e,!0);let t=[],n={},s=!0,r=o.split("/").map(i=>i.startsWith(":")?(t.push(i.slice(1)),"([^\\/]+)"):i).join("\\/"),l=e.match(new RegExp(`^${r}$`));return l||(s=!1,l=e.match(new RegExp(`^${r}`))),l?(t.forEach((i,a)=>n[i]=l[a+1]),{exact:s,params:n,part:l[0].slice(0,-1)}):null}function Ir(o,e,t){if(t==="")return o;if(t[0]==="/")return t;let n=l=>l.split("/").filter(i=>i!==""),s=n(o),r=e?n(e):[];return"/"+r.map((l,i)=>s[i]).join("/")+"/"+t}function Ao(o,e,t,n){let s=[e,"data-"+e].reduce((r,l)=>{let i=o.getAttribute(l);return t&&o.removeAttribute(l),i===null?r:i},!1);return!n&&s===""?!0:s||n||!1}function ni(o){let e=o.split("&").map(t=>t.split("=")).reduce((t,n)=>{let s=n[0];if(!s)return t;let r=n.length>1?n[n.length-1]:!0;return typeof r=="string"&&r.includes(",")&&(r=r.split(",")),t[s]===void 0?t[s]=[r]:t[s].push(r),t},{});return Object.entries(e).reduce((t,n)=>(t[n[0]]=n[1].length>1?n[1]:n[1][0],t),{})}function oi(o){return Object.entries(o).map(([e,t])=>t?t===!0?e:`${e}=${Array.isArray(t)?t.join(","):t}`:null).filter(e=>e).join("&")}function Ro(o,e){return o?e+o:""}function Lr(o){throw new Error("[Tinro] "+o)}var it={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run(o,e,t,n){return o===this.HISTORY?e&&e():o===this.HASH?t&&t():n&&n()},getDefault(){return!window||window.location.pathname==="srcdoc"?this.MEMORY:this.HISTORY}},so,Dr,jr,vn="",rt=si();function si(){let o=it.getDefault(),e,t=l=>window.onhashchange=window.onpopstate=so=null,n=l=>e&&e(Un(o)),s=l=>{l&&(o=l),t(),o!==it.OFF&&it.run(o,i=>window.onpopstate=n,i=>window.onhashchange=n)&&n()},r=l=>{let i=Object.assign(Un(o),l);return i.path+Ro(oi(i.query),"?")+Ro(i.hash,"#")};return{mode:s,get:l=>Un(o),go(l,i){ri(o,l,i),n()},start(l){e=l,s()},stop(){e=null,s(it.OFF)},set(l){this.go(r(l),!l.path)},methods(){return li(this)},base:l=>vn=l}}function ri(o,e,t){!t&&(Dr=jr);let n=s=>history[`${t?"replace":"push"}State`]({},"",s);it.run(o,s=>n(vn+e),s=>n(`#${e}`),s=>so=e)}function Un(o){let e=window.location,t=it.run(o,s=>(vn?e.pathname.replace(vn,""):e.pathname)+e.search+e.hash,s=>String(e.hash.slice(1)||"/"),s=>so||"/"),n=t.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return jr=t,{url:t,from:Dr,path:n[1]||"",query:ni(n[2]||""),hash:n[3]||""}}function li(o){let e=()=>o.get().query,t=l=>o.set({query:l}),n=l=>t(l(e())),s=()=>o.get().hash,r=l=>o.set({hash:l});return{hash:{get:s,set:r,clear:()=>r("")},query:{replace:t,clear:()=>t(""),get(l){return l?e()[l]:e()},set(l,i){n(a=>(a[l]=i,a))},delete(l){n(i=>(i[l]&&delete i[l],i))}}}}var yn=ii();function ii(){let{subscribe:o}=qt(rt.get(),e=>{rt.start(e);let t=ai(rt.go);return()=>{rt.stop(),t()}});return{subscribe:o,goto:rt.go,params:ci,meta:pi,useHashNavigation:e=>rt.mode(e?it.HASH:it.HISTORY),mode:{hash:()=>rt.mode(it.HASH),history:()=>rt.mode(it.HISTORY),memory:()=>rt.mode(it.MEMORY)},base:rt.base,location:rt.methods()}}function ai(o){let e=t=>{let n=t.target.closest("a[href]"),s=n&&Ao(n,"target",!1,"_self"),r=n&&Ao(n,"tinro-ignore"),l=t.ctrlKey||t.metaKey||t.altKey||t.shiftKey;if(s=="_self"&&!r&&!l&&n){let i=n.getAttribute("href").replace(/^\/#/,"");/^\/\/|^#|^[a-zA-Z]+:/.test(i)||(t.preventDefault(),o(i.startsWith("/")?i:n.href.replace(window.location.origin,"")))}};return addEventListener("click",e),()=>removeEventListener("click",e)}function ci(){return Wt("tinro").meta.params}var kn="tinro",ui=Br({pattern:"",matched:!0});function fi(o){let e=Wt(kn)||ui;(e.exact||e.fallback)&&Lr(`${o.fallback?"<Route fallback>":`<Route path="${o.path}">`}  can't be inside ${e.fallback?"<Route fallback>":`<Route path="${e.path||"/"}"> with exact path`}`);let t=o.fallback?"fallbacks":"childs",n=qt({}),s=Br({fallback:o.fallback,parent:e,update(r){s.exact=!r.path.endsWith("/*"),s.pattern=Xn(`${s.parent.pattern||""}${r.path}`),s.redirect=r.redirect,s.firstmatch=r.firstmatch,s.breadcrumb=r.breadcrumb,s.match()},register:()=>(s.parent[t].add(s),()=>Ge(this,null,function*(){s.parent[t].delete(s),s.parent.activeChilds.delete(s),s.router.un&&s.router.un(),s.parent.match()})),show:()=>{o.onShow(),!s.fallback&&s.parent.activeChilds.add(s)},hide:()=>{o.onHide(),s.parent.activeChilds.delete(s)},match:()=>Ge(this,null,function*(){s.matched=!1;let{path:r,url:l,from:i,query:a}=s.router.location,c=ti(s.pattern,r);if(!s.fallback&&c&&s.redirect&&(!s.exact||s.exact&&c.exact)){let u=Ir(r,s.parent.pattern,s.redirect);return yn.goto(u,!0)}s.meta=c&&{from:i,url:l,query:a,match:c.part,pattern:s.pattern,breadcrumbs:s.parent.meta&&s.parent.meta.breadcrumbs.slice()||[],params:c.params,subscribe:n.subscribe},s.breadcrumb&&s.meta&&s.meta.breadcrumbs.push({name:s.breadcrumb,path:c.part}),n.set(s.meta),c&&!s.fallback&&(!s.exact||s.exact&&c.exact)&&(!s.parent.firstmatch||!s.parent.matched)?(o.onMeta(s.meta),s.parent.matched=!0,s.show()):s.hide(),c&&s.showFallbacks()})});return no(kn,s),Pt(()=>s.register()),s}function pi(){return Wl(kn)?Wt(kn).meta:Lr("meta() function must be run inside any `<Route>` child component only")}function Br(o){let e={router:{},exact:!1,pattern:null,meta:null,parent:null,fallback:!1,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,showFallbacks(){return Ge(this,null,function*(){if(!this.fallback&&(yield zr(),this.childs.size>0&&this.activeChilds.size==0||this.childs.size==0&&this.fallbacks.size>0)){let n=this;for(;n.fallbacks.size==0;)if(n=n.parent,!n)return;n&&n.fallbacks.forEach(s=>{if(s.redirect){let r=Ir("/",s.parent.pattern,s.redirect);yn.goto(r,!0)}else s.show()})}})},start(){this.router.un||(this.router.un=yn.subscribe(n=>{this.router.location=n,this.pattern!==null&&this.match()}))},match(){this.showFallbacks()}};return Object.assign(e,o),e.start(),e}const di=o=>({params:o&2,meta:o&4}),No=o=>({params:o[1],meta:o[2]});function Mo(o){let e;const t=o[9].default,n=Se(t,o,o[8],No);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&262)&&Ce(n,t,s,s[8],e?Ee(t,s[8],r,di):Ae(s[8]),No)},i(s){e||($(n,s),e=!0)},o(s){k(n,s),e=!1},d(s){n&&n.d(s)}}}function hi(o){let e,t,n=o[0]&&Mo(o);return{c(){n&&n.c(),e=$e()},m(s,r){n&&n.m(s,r),v(s,e,r),t=!0},p(s,[r]){s[0]?n?(n.p(s,r),r&1&&$(n,1)):(n=Mo(s),n.c(),$(n,1),n.m(e.parentNode,e)):n&&(he(),k(n,1,1,()=>{n=null}),me())},i(s){t||($(n),t=!0)},o(s){k(n),t=!1},d(s){n&&n.d(s),s&&w(e)}}}function mi(o,e,t){let{$$slots:n={},$$scope:s}=e,{path:r="/*"}=e,{fallback:l=!1}=e,{redirect:i=!1}=e,{firstmatch:a=!1}=e,{breadcrumb:c=null}=e,u=!1,f={},p={};const d=fi({fallback:l,onShow(){t(0,u=!0)},onHide(){t(0,u=!1)},onMeta(m){t(2,p=m),t(1,f=p.params)}});return o.$$set=m=>{"path"in m&&t(3,r=m.path),"fallback"in m&&t(4,l=m.fallback),"redirect"in m&&t(5,i=m.redirect),"firstmatch"in m&&t(6,a=m.firstmatch),"breadcrumb"in m&&t(7,c=m.breadcrumb),"$$scope"in m&&t(8,s=m.$$scope)},o.$$.update=()=>{o.$$.dirty&232&&d.update({path:r,redirect:i,firstmatch:a,breadcrumb:c})},[u,f,p,r,l,i,a,c,s,n]}class $t extends Y{constructor(e){super(),Z(this,e,mi,hi,K,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}}const{document:Po}=St;function gi(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P,z,O,I,D,j,q,X,ne,W,B,H,oe,re,ue,ce,ze,Ie,ke,be,te,xe,fe,ge,Q,Oe,Te,_e,Ne,ct;return Po.title=e=document.title.replace(/(•).*$/,"$1 Home"),{c(){t=x(),n=b("section"),s=b("h1"),s.textContent="Packages",r=x(),l=b("ul"),i=b("li"),i.innerHTML=`<a href="/tabs">Tabs</a> \u2013 A set of components for organizing a tabbed interface
      <a href="https://www.npmjs.com/package/@apsc/tabs" target="_blank">NPM</a>`,a=x(),c=b("li"),c.innerHTML=`<a href="/glob-notify">GlobNotify</a> \u2013 Component for notifications globally for the
      entire application
      <a href="https://www.npmjs.com/package/@apsc/glob-notify" target="_blank">NPM</a>`,u=x(),f=b("li"),p=b("a"),p.textContent="Floating UI",d=L(`
      action for directive `),m=b("code"),_=L("use"),y=x(),T=b("a"),T.textContent="NPM",S=x(),N=b("li"),R=b("a"),R.textContent="Action",M=L(` to control
      `),P=b("code"),z=L("focusin"),O=L(`
      and
      `),I=b("code"),D=L("focusout"),j=L(`
      for directive `),q=b("code"),X=L("use"),ne=x(),W=b("a"),W.textContent="NPM",B=x(),H=b("li"),H.innerHTML=`<a href="/color">Color</a> \u2013 A set of components for picking and editing colors
      <a href="https://www.npmjs.com/package/@apsc/color" target="_blank">NPM</a>`,oe=x(),re=b("li"),ue=L("Action to call a function by "),ce=b("a"),ce.textContent="keyboard shortcut",ze=L(` for
      Svelte directive `),Ie=b("code"),ke=L("use"),be=x(),te=b("a"),te.textContent="NPM",xe=x(),fe=b("li"),ge=L("Action "),Q=b("a"),Q.textContent="to scroll the child",Oe=L(` to parent viewport for Svelte
      directive `),Te=b("code"),_e=L("use"),Ne=x(),ct=b("a"),ct.textContent="NPM",g(s,"class","font-bold my-4 pb-2 text-3xl border-b border-gray-400"),g(p,"href","/floating-ui-action"),g(m,"class",o[0].code),g(T,"href","https://www.npmjs.com/package/@apsc/floating-ui-action"),g(T,"target","_blank"),g(R,"href","/focus-action"),g(P,"class",o[0].code),g(I,"class",o[0].code),g(q,"class",o[0].code),g(W,"href","https://www.npmjs.com/package/@apsc/focus-action"),g(W,"target","_blank"),g(ce,"href","/keyboard-shortcut-action"),g(Ie,"class",o[0].code),g(te,"href","https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"),g(te,"target","_blank"),g(Q,"href","/scroll-child-action"),g(Te,"class",o[0].code),g(ct,"href","https://www.npmjs.com/package/@apsc/scroll-child-action"),g(ct,"target","_blank")},m(We,ie){v(We,t,ie),v(We,n,ie),h(n,s),h(n,r),h(n,l),h(l,i),h(l,a),h(l,c),h(l,u),h(l,f),h(f,p),h(f,d),h(f,m),h(m,_),h(f,y),h(f,T),h(l,S),h(l,N),h(N,R),h(N,M),h(N,P),h(P,z),h(N,O),h(N,I),h(I,D),h(N,j),h(N,q),h(q,X),h(N,ne),h(N,W),h(l,B),h(l,H),h(l,oe),h(l,re),h(re,ue),h(re,ce),h(re,ze),h(re,Ie),h(Ie,ke),h(re,be),h(re,te),h(l,xe),h(l,fe),h(fe,ge),h(fe,Q),h(fe,Oe),h(fe,Te),h(Te,_e),h(fe,Ne),h(fe,ct)},p(We,[ie]){ie&0&&e!==(e=document.title.replace(/(•).*$/,"$1 Home"))&&(Po.title=e)},i:ee,o:ee,d(We){We&&w(t),We&&w(n)}}}function bi(o){return[{code:"bg-gray-200 px-1 rounded-sm"}]}class _i extends Y{constructor(e){super(),Z(this,e,bi,gi,K,{})}}const ro=Symbol("TABS");function wi({mode:o,tabs:e,selectedTab:t,panels:n,selectedPanel:s,selectedTabClass:r,hiddenPanelClass:l}){const i=ei(t,a=>e.indexOf(a!=null?a:Symbol()));return{mode:o,registerTab:()=>{const a=Symbol("tab");return e.push(a),t.update(c=>c!=null?c:a),Zn(()=>{const c=e.indexOf(a);c>=0&&(e.splice(c,1),t.update(u=>u===a?e[c]||e[e.length-1]:u))}),a},registerPanel:()=>{const a=Symbol("panel");return n.push(a),s.update(c=>c!=null?c:a),Zn(()=>{const c=n.indexOf(a);c>=0&&(n.splice(c,1),s.update(u=>u===a?n[c]||n[n.length-1]:u))}),a},selectTab:a=>{var u;let c;typeof a=="number"?c=e.indexOf((u=e.at(a))!=null?u:Symbol()):c=e.indexOf(a),c>=0&&c<e.length&&(t.set(e[c]),s.set(n[c]))},selectedTab:t,selectedPanel:s,selectedIndex:i,selectedTabClass:r,hiddenPanelClass:l}}function $i(o){let e,t,n;const s=o[7].default,r=Se(s,o,o[6],null);return{c(){e=b("div"),r&&r.c(),g(e,"class",t="c-tabs"+(o[0]?" "+o[0]:""))},m(l,i){v(l,e,i),r&&r.m(e,null),n=!0},p(l,[i]){r&&r.p&&(!n||i&64)&&Ce(r,s,l,l[6],n?Ee(s,l[6],i,null):Ae(l[6]),null),(!n||i&1&&t!==(t="c-tabs"+(l[0]?" "+l[0]:"")))&&g(e,"class",t)},i(l){n||($(r,l),n=!0)},o(l){k(r,l),n=!1},d(l){l&&w(e),r&&r.d(l)}}}function vi(o,e,t){let{$$slots:n={},$$scope:s}=e,{class:r=""}=e,{selectedTabClass:l="active"}=e,{hiddenPanelClass:i=""}=e,{mode:a="hide"}=e;const c=[],u=[],f=qt(null),p=qt(null),d=wi({mode:a,tabs:c,panels:u,selectedTab:f,selectedPanel:p,selectedTabClass:l,hiddenPanelClass:i}),m=d.selectedIndex,_=d.selectTab;return no(ro,d),o.$$set=y=>{"class"in y&&t(0,r=y.class),"selectedTabClass"in y&&t(1,l=y.selectedTabClass),"hiddenPanelClass"in y&&t(2,i=y.hiddenPanelClass),"mode"in y&&t(3,a=y.mode),"$$scope"in y&&t(6,s=y.$$scope)},[r,l,i,a,m,_,s,n]}class Je extends Y{constructor(e){super(),Z(this,e,vi,$i,K,{class:0,selectedTabClass:1,hiddenPanelClass:2,mode:3,selectedIndex:4,selectTab:5})}get selectedIndex(){return this.$$.ctx[4]}get selectTab(){return this.$$.ctx[5]}}function yi(o){let e,t,n;const s=o[2].default,r=Se(s,o,o[1],null);return{c(){e=b("div"),r&&r.c(),g(e,"class",t="c-tabs__tablist"+(o[0]?" "+o[0]:""))},m(l,i){v(l,e,i),r&&r.m(e,null),n=!0},p(l,[i]){r&&r.p&&(!n||i&2)&&Ce(r,s,l,l[1],n?Ee(s,l[1],i,null):Ae(l[1]),null),(!n||i&1&&t!==(t="c-tabs__tablist"+(l[0]?" "+l[0]:"")))&&g(e,"class",t)},i(l){n||($(r,l),n=!0)},o(l){k(r,l),n=!1},d(l){l&&w(e),r&&r.d(l)}}}function ki(o,e,t){let{$$slots:n={},$$scope:s}=e,{class:r=""}=e;return o.$$set=l=>{"class"in l&&t(0,r=l.class),"$$scope"in l&&t(1,s=l.$$scope)},[r,s,n]}class et extends Y{constructor(e){super(),Z(this,e,ki,yi,K,{class:0})}}const xi=o=>({index:o&32,tabId:o&64,isActive:o&2}),zo=o=>({index:o[5],tabId:o[6],panelId:o[10],isActive:o[1]===o[10]});function Oo(o){let e,t,n;const s=o[13].default,r=Se(s,o,o[12],zo);return{c(){e=b("div"),r&&r.c(),g(e,"class",t=["c-tabs__tabpanel",o[0],o[2]].filter(Io).join(" ")),g(e,"style",o[3])},m(l,i){v(l,e,i),r&&r.m(e,null),n=!0},p(l,i){r&&r.p&&(!n||i&4194)&&Ce(r,s,l,l[12],n?Ee(s,l[12],i,xi):Ae(l[12]),zo),(!n||i&5&&t!==(t=["c-tabs__tabpanel",l[0],l[2]].filter(Io).join(" ")))&&g(e,"class",t),(!n||i&8)&&g(e,"style",l[3])},i(l){n||($(r,l),n=!0)},o(l){k(r,l),n=!1},d(l){l&&w(e),r&&r.d(l)}}}function Ti(o){let e,t,n=!o[4]&&Oo(o);return{c(){n&&n.c(),e=$e()},m(s,r){n&&n.m(s,r),v(s,e,r),t=!0},p(s,[r]){s[4]?n&&(he(),k(n,1,1,()=>{n=null}),me()):n?(n.p(s,r),r&16&&$(n,1)):(n=Oo(s),n.c(),$(n,1),n.m(e.parentNode,e))},i(s){t||($(n),t=!0)},o(s){k(n),t=!1},d(s){n&&n.d(s),s&&w(e)}}}const Io=o=>!!o;function Si(o,e,t){let n,s,r,{$$slots:l={},$$scope:i}=e,{class:a=""}=e;const{mode:c,registerPanel:u,selectedPanel:f,selectedTab:p,selectedIndex:d,hiddenPanelClass:m}=Wt(ro);Ht(o,f,R=>t(1,n=R)),Ht(o,p,R=>t(6,r=R)),Ht(o,d,R=>t(5,s=R));let{hiddenClass:_=m}=e;const y=u();let T="",S,N=!0;return o.$$set=R=>{"class"in R&&t(0,a=R.class),"hiddenClass"in R&&t(11,_=R.hiddenClass),"$$scope"in R&&t(12,i=R.$$scope)},o.$$.update=()=>{o.$$.dirty&2050&&function(R){R?(t(4,N=!1),t(3,S=void 0),t(2,T="")):c!=="hide"?(t(4,N=!0),t(3,S=void 0),t(2,T="")):(t(4,N=!1),_?(t(3,S=void 0),t(2,T=_)):(t(3,S="display: none"),t(2,T="")))}(n===y)},[a,n,T,S,N,s,r,f,p,d,y,_,i,l]}class pe extends Y{constructor(e){super(),Z(this,e,Si,Ti,K,{class:0,hiddenClass:11})}}const Ei=o=>({index:o&16,isActive:o&8}),Lo=o=>({index:o[4],id:o[8],isActive:o[3]===o[8]});function Ci(o){let e,t,n,s,r;const l=o[10].default,i=Se(l,o,o[9],Lo);return{c(){e=b("button"),i&&i.c(),g(e,"class",t=["c-tabs__tab",o[0],o[3]===o[8]?o[1]:""].filter(Do).join(" ")),e.disabled=o[2]},m(a,c){v(a,e,c),i&&i.m(e,null),n=!0,s||(r=G(e,"click",o[11]),s=!0)},p(a,[c]){i&&i.p&&(!n||c&536)&&Ce(i,l,a,a[9],n?Ee(l,a[9],c,Ei):Ae(a[9]),Lo),(!n||c&11&&t!==(t=["c-tabs__tab",a[0],a[3]===a[8]?a[1]:""].filter(Do).join(" ")))&&g(e,"class",t),(!n||c&4)&&(e.disabled=a[2])},i(a){n||($(i,a),n=!0)},o(a){k(i,a),n=!1},d(a){a&&w(e),i&&i.d(a),s=!1,r()}}}const Do=o=>!!o;function Ai(o,e,t){let n,s,{$$slots:r={},$$scope:l}=e,{class:i=""}=e;const{registerTab:a,selectTab:c,selectedTab:u,selectedIndex:f,selectedTabClass:p}=Wt(ro);Ht(o,u,T=>t(3,n=T)),Ht(o,f,T=>t(4,s=T));let{selectedClass:d=p}=e,{disabled:m=void 0}=e;const _=a(),y=()=>c(_);return o.$$set=T=>{"class"in T&&t(0,i=T.class),"selectedClass"in T&&t(1,d=T.selectedClass),"disabled"in T&&t(2,m=T.disabled),"$$scope"in T&&t(9,l=T.$$scope)},[i,d,m,n,s,c,u,f,_,l,r,y]}class de extends Y{constructor(e){super(),Z(this,e,Ai,Ci,K,{class:0,selectedClass:1,disabled:2})}}var Ri=`<div class="component__source">Source <code>Tabs.svelte</code></div>
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
<td class="slot__props"><code>{ index: number; tabId: symbol; id: symbol; isActive: boolean }</code></td></tr></table>`;function Ni(){const o=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||o(e)},Pt(()=>{console.warn=o})}function jo(o,e,t){const n=o.slice();return n[18]=e[t],n}function Bo(o,e,t){const n=o.slice();return n[18]=e[t],n}function Fo(o,e,t){const n=o.slice();return n[10]=e[t],n}function Ho(o,e,t){const n=o.slice();return n[13]=e[t],n[15]=t,n}function Uo(o,e,t){const n=o.slice();return n[16]=e[t],n[15]=t,n}function qo(o,e,t){const n=o.slice();return n[7]=e[t],n}function Mi(o){let e,t,n,s;const r=[Ii,Oi,zi],l=[];function i(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),v(a,n,c),s=!0},p(a,c){let u=e;e=i(a),e===u?l[e].p(a,c):(he(),k(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){k(t),s=!1},d(a){l[e].d(a),a&&w(n)}}}function Pi(o){let e,t,n=o[1],s=[];for(let l=0;l<n.length;l+=1)s[l]=Vo(qo(o,n,l));const r=l=>k(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);v(l,e,i),t=!0},p(l,i){if(i&34){n=l[1];let a;for(a=0;a<n.length;a+=1){const c=qo(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=Vo(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(he(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)k(s[i]);t=!1},d(l){Fe(s,l),l&&w(e)}}}function zi(o){let e,t,n;const s=[o[6]];var r=o[5][o[0]];function l(i){let a={$$slots:{default:[ji]},$$scope:{ctx:i}};for(let c=0;c<s.length;c+=1)a=nt(a,s[c]);return{props:a}}return r&&(e=new r(l(o))),{c(){e&&A(e.$$.fragment),t=$e()},m(i,a){e&&E(e,i,a),v(i,t,a),n=!0},p(i,a){const c=a&64?zt(s,[Gt(i[6])]):{};if(a&8388706&&(c.$$scope={dirty:a,ctx:i}),r!==(r=i[5][i[0]])){if(e){he();const u=e;k(u.$$.fragment,1,0,()=>{C(u,1)}),me()}r?(e=new r(l(i)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&k(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&C(e,i)}}}function Oi(o){let e,t,n,s;const r=[Fi,Bi],l=[];function i(a,c){return a[4]?0:1}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),v(a,n,c),s=!0},p(a,c){let u=e;e=i(a),e===u?l[e].p(a,c):(he(),k(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){k(t),s=!1},d(a){l[e].d(a),a&&w(n)}}}function Ii(o){let e,t,n;var s=o[5].table;function r(l){return{props:{$$slots:{default:[Qi]},$$scope:{ctx:l}}}}return s&&(e=new s(r(o))),{c(){e&&A(e.$$.fragment),t=$e()},m(l,i){e&&E(e,l,i),v(l,t,i),n=!0},p(l,i){const a={};if(i&8388716&&(a.$$scope={dirty:i,ctx:l}),s!==(s=l[5].table)){if(e){he();const c=e;k(c.$$.fragment,1,0,()=>{C(c,1)}),me()}s?(e=new s(r(l)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else s&&e.$set(a)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&k(e.$$.fragment,l),n=!1},d(l){l&&w(t),e&&C(e,l)}}}function Li(o){let e=o[6].raw+"",t;return{c(){t=L(e)},m(n,s){v(n,t,s)},p(n,s){s&64&&e!==(e=n[6].raw+"")&&ye(t,e)},i:ee,o:ee,d(n){n&&w(t)}}}function Di(o){let e,t;return e=new Ot({props:{tokens:o[1],renderers:o[5]}}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,s){const r={};s&2&&(r.tokens=n[1]),s&32&&(r.renderers=n[5]),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ji(o){let e,t,n,s;const r=[Di,Li],l=[];function i(a,c){return a[1]?0:1}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),v(a,n,c),s=!0},p(a,c){let u=e;e=i(a),e===u?l[e].p(a,c):(he(),k(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){k(t),s=!1},d(a){l[e].d(a),a&&w(n)}}}function Bi(o){let e,t,n;const s=[{ordered:o[4]},o[6]];var r=o[5].list;function l(i){let a={$$slots:{default:[Ui]},$$scope:{ctx:i}};for(let c=0;c<s.length;c+=1)a=nt(a,s[c]);return{props:a}}return r&&(e=new r(l(o))),{c(){e&&A(e.$$.fragment),t=$e()},m(i,a){e&&E(e,i,a),v(i,t,a),n=!0},p(i,a){const c=a&80?zt(s,[a&16&&{ordered:i[4]},a&64&&Gt(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),r!==(r=i[5].list)){if(e){he();const u=e;k(u.$$.fragment,1,0,()=>{C(u,1)}),me()}r?(e=new r(l(i)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&k(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&C(e,i)}}}function Fi(o){let e,t,n;const s=[{ordered:o[4]},o[6]];var r=o[5].list;function l(i){let a={$$slots:{default:[Ki]},$$scope:{ctx:i}};for(let c=0;c<s.length;c+=1)a=nt(a,s[c]);return{props:a}}return r&&(e=new r(l(o))),{c(){e&&A(e.$$.fragment),t=$e()},m(i,a){e&&E(e,i,a),v(i,t,a),n=!0},p(i,a){const c=a&80?zt(s,[a&16&&{ordered:i[4]},a&64&&Gt(i[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),r!==(r=i[5].list)){if(e){he();const u=e;k(u.$$.fragment,1,0,()=>{C(u,1)}),me()}r?(e=new r(l(i)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&k(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&C(e,i)}}}function Hi(o){let e,t,n;return e=new Ot({props:{tokens:o[18].tokens,renderers:o[5]}}),{c(){A(e.$$.fragment),t=x()},m(s,r){E(e,s,r),v(s,t,r),n=!0},p(s,r){const l={};r&64&&(l.tokens=s[18].tokens),r&32&&(l.renderers=s[5]),e.$set(l)},i(s){n||($(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){C(e,s),s&&w(t)}}}function Ko(o){let e,t,n;const s=[o[18]];var r=o[5].unorderedlistitem||o[5].listitem;function l(i){let a={$$slots:{default:[Hi]},$$scope:{ctx:i}};for(let c=0;c<s.length;c+=1)a=nt(a,s[c]);return{props:a}}return r&&(e=new r(l(o))),{c(){e&&A(e.$$.fragment),t=$e()},m(i,a){e&&E(e,i,a),v(i,t,a),n=!0},p(i,a){const c=a&64?zt(s,[Gt(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),r!==(r=i[5].unorderedlistitem||i[5].listitem)){if(e){he();const u=e;k(u.$$.fragment,1,0,()=>{C(u,1)}),me()}r?(e=new r(l(i)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&k(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&C(e,i)}}}function Ui(o){let e,t,n=o[6].items,s=[];for(let l=0;l<n.length;l+=1)s[l]=Ko(jo(o,n,l));const r=l=>k(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);v(l,e,i),t=!0},p(l,i){if(i&96){n=l[6].items;let a;for(a=0;a<n.length;a+=1){const c=jo(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=Ko(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(he(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)k(s[i]);t=!1},d(l){Fe(s,l),l&&w(e)}}}function qi(o){let e,t,n;return e=new Ot({props:{tokens:o[18].tokens,renderers:o[5]}}),{c(){A(e.$$.fragment),t=x()},m(s,r){E(e,s,r),v(s,t,r),n=!0},p(s,r){const l={};r&64&&(l.tokens=s[18].tokens),r&32&&(l.renderers=s[5]),e.$set(l)},i(s){n||($(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){C(e,s),s&&w(t)}}}function Wo(o){let e,t,n;const s=[o[18]];var r=o[5].orderedlistitem||o[5].listitem;function l(i){let a={$$slots:{default:[qi]},$$scope:{ctx:i}};for(let c=0;c<s.length;c+=1)a=nt(a,s[c]);return{props:a}}return r&&(e=new r(l(o))),{c(){e&&A(e.$$.fragment),t=$e()},m(i,a){e&&E(e,i,a),v(i,t,a),n=!0},p(i,a){const c=a&64?zt(s,[Gt(i[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:i}),r!==(r=i[5].orderedlistitem||i[5].listitem)){if(e){he();const u=e;k(u.$$.fragment,1,0,()=>{C(u,1)}),me()}r?(e=new r(l(i)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&k(e.$$.fragment,i),n=!1},d(i){i&&w(t),e&&C(e,i)}}}function Ki(o){let e,t,n=o[6].items,s=[];for(let l=0;l<n.length;l+=1)s[l]=Wo(Bo(o,n,l));const r=l=>k(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);v(l,e,i),t=!0},p(l,i){if(i&96){n=l[6].items;let a;for(a=0;a<n.length;a+=1){const c=Bo(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=Wo(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(he(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)k(s[i]);t=!1},d(l){Fe(s,l),l&&w(e)}}}function Wi(o){let e,t,n;return e=new Ot({props:{tokens:o[16].tokens,renderers:o[5]}}),{c(){A(e.$$.fragment),t=x()},m(s,r){E(e,s,r),v(s,t,r),n=!0},p(s,r){const l={};r&4&&(l.tokens=s[16].tokens),r&32&&(l.renderers=s[5]),e.$set(l)},i(s){n||($(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){C(e,s),s&&w(t)}}}function Go(o){let e,t,n;var s=o[5].tablecell;function r(l){return{props:{header:!0,align:l[6].align[l[15]]||"center",$$slots:{default:[Wi]},$$scope:{ctx:l}}}}return s&&(e=new s(r(o))),{c(){e&&A(e.$$.fragment),t=$e()},m(l,i){e&&E(e,l,i),v(l,t,i),n=!0},p(l,i){const a={};if(i&64&&(a.align=l[6].align[l[15]]||"center"),i&8388644&&(a.$$scope={dirty:i,ctx:l}),s!==(s=l[5].tablecell)){if(e){he();const c=e;k(c.$$.fragment,1,0,()=>{C(c,1)}),me()}s?(e=new s(r(l)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else s&&e.$set(a)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&k(e.$$.fragment,l),n=!1},d(l){l&&w(t),e&&C(e,l)}}}function Gi(o){let e,t,n=o[2],s=[];for(let l=0;l<n.length;l+=1)s[l]=Go(Uo(o,n,l));const r=l=>k(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);v(l,e,i),t=!0},p(l,i){if(i&100){n=l[2];let a;for(a=0;a<n.length;a+=1){const c=Uo(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=Go(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(he(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)k(s[i]);t=!1},d(l){Fe(s,l),l&&w(e)}}}function Zi(o){let e,t,n;var s=o[5].tablerow;function r(l){return{props:{$$slots:{default:[Gi]},$$scope:{ctx:l}}}}return s&&(e=new s(r(o))),{c(){e&&A(e.$$.fragment),t=$e()},m(l,i){e&&E(e,l,i),v(l,t,i),n=!0},p(l,i){const a={};if(i&8388708&&(a.$$scope={dirty:i,ctx:l}),s!==(s=l[5].tablerow)){if(e){he();const c=e;k(c.$$.fragment,1,0,()=>{C(c,1)}),me()}s?(e=new s(r(l)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else s&&e.$set(a)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&k(e.$$.fragment,l),n=!1},d(l){l&&w(t),e&&C(e,l)}}}function Yi(o){let e,t;return e=new Ot({props:{tokens:o[13].tokens,renderers:o[5]}}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,s){const r={};s&8&&(r.tokens=n[13].tokens),s&32&&(r.renderers=n[5]),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Zo(o){let e,t,n;var s=o[5].tablecell;function r(l){return{props:{header:!1,align:l[6].align[l[15]]||"center",$$slots:{default:[Yi]},$$scope:{ctx:l}}}}return s&&(e=new s(r(o))),{c(){e&&A(e.$$.fragment),t=$e()},m(l,i){e&&E(e,l,i),v(l,t,i),n=!0},p(l,i){const a={};if(i&64&&(a.align=l[6].align[l[15]]||"center"),i&8388648&&(a.$$scope={dirty:i,ctx:l}),s!==(s=l[5].tablecell)){if(e){he();const c=e;k(c.$$.fragment,1,0,()=>{C(c,1)}),me()}s?(e=new s(r(l)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else s&&e.$set(a)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&k(e.$$.fragment,l),n=!1},d(l){l&&w(t),e&&C(e,l)}}}function Vi(o){let e,t,n=o[10],s=[];for(let l=0;l<n.length;l+=1)s[l]=Zo(Ho(o,n,l));const r=l=>k(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=x()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);v(l,e,i),t=!0},p(l,i){if(i&104){n=l[10];let a;for(a=0;a<n.length;a+=1){const c=Ho(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=Zo(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(he(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)k(s[i]);t=!1},d(l){Fe(s,l),l&&w(e)}}}function Yo(o){let e,t,n;var s=o[5].tablerow;function r(l){return{props:{$$slots:{default:[Vi]},$$scope:{ctx:l}}}}return s&&(e=new s(r(o))),{c(){e&&A(e.$$.fragment),t=$e()},m(l,i){e&&E(e,l,i),v(l,t,i),n=!0},p(l,i){const a={};if(i&8388712&&(a.$$scope={dirty:i,ctx:l}),s!==(s=l[5].tablerow)){if(e){he();const c=e;k(c.$$.fragment,1,0,()=>{C(c,1)}),me()}s?(e=new s(r(l)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else s&&e.$set(a)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&k(e.$$.fragment,l),n=!1},d(l){l&&w(t),e&&C(e,l)}}}function Xi(o){let e,t,n=o[3],s=[];for(let l=0;l<n.length;l+=1)s[l]=Yo(Fo(o,n,l));const r=l=>k(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);v(l,e,i),t=!0},p(l,i){if(i&104){n=l[3];let a;for(a=0;a<n.length;a+=1){const c=Fo(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=Yo(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(he(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)k(s[i]);t=!1},d(l){Fe(s,l),l&&w(e)}}}function Qi(o){let e,t,n,s,r;var l=o[5].tablehead;function i(u){return{props:{$$slots:{default:[Zi]},$$scope:{ctx:u}}}}l&&(e=new l(i(o)));var a=o[5].tablebody;function c(u){return{props:{$$slots:{default:[Xi]},$$scope:{ctx:u}}}}return a&&(n=new a(c(o))),{c(){e&&A(e.$$.fragment),t=x(),n&&A(n.$$.fragment),s=$e()},m(u,f){e&&E(e,u,f),v(u,t,f),n&&E(n,u,f),v(u,s,f),r=!0},p(u,f){const p={};if(f&8388708&&(p.$$scope={dirty:f,ctx:u}),l!==(l=u[5].tablehead)){if(e){he();const m=e;k(m.$$.fragment,1,0,()=>{C(m,1)}),me()}l?(e=new l(i(u)),A(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else l&&e.$set(p);const d={};if(f&8388712&&(d.$$scope={dirty:f,ctx:u}),a!==(a=u[5].tablebody)){if(n){he();const m=n;k(m.$$.fragment,1,0,()=>{C(m,1)}),me()}a?(n=new a(c(u)),A(n.$$.fragment),$(n.$$.fragment,1),E(n,s.parentNode,s)):n=null}else a&&n.$set(d)},i(u){r||(e&&$(e.$$.fragment,u),n&&$(n.$$.fragment,u),r=!0)},o(u){e&&k(e.$$.fragment,u),n&&k(n.$$.fragment,u),r=!1},d(u){e&&C(e,u),u&&w(t),u&&w(s),n&&C(n,u)}}}function Vo(o){let e,t;const n=[o[7],{renderers:o[5]}];let s={};for(let r=0;r<n.length;r+=1)s=nt(s,n[r]);return e=new Ot({props:s}),{c(){A(e.$$.fragment)},m(r,l){E(e,r,l),t=!0},p(r,l){const i=l&34?zt(n,[l&2&&Gt(r[7]),l&32&&{renderers:r[5]}]):{};e.$set(i)},i(r){t||($(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function Ji(o){let e,t,n,s;const r=[Pi,Mi],l=[];function i(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=i(o))&&(t=l[e]=r[e](o)),{c(){t&&t.c(),n=$e()},m(a,c){~e&&l[e].m(a,c),v(a,n,c),s=!0},p(a,[c]){let u=e;e=i(a),e===u?~e&&l[e].p(a,c):(t&&(he(),k(l[u],1,1,()=>{l[u]=null}),me()),~e?(t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n)):t=null)},i(a){s||($(t),s=!0)},o(a){k(t),s=!1},d(a){~e&&l[e].d(a),a&&w(n)}}}function ea(o,e,t){const n=["type","tokens","header","rows","ordered","renderers"];let s=bn(e,n),{type:r=void 0}=e,{tokens:l=void 0}=e,{header:i=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return Ni(),o.$$set=f=>{e=nt(nt({},e),Sr(f)),t(6,s=bn(e,n)),"type"in f&&t(0,r=f.type),"tokens"in f&&t(1,l=f.tokens),"header"in f&&t(2,i=f.header),"rows"in f&&t(3,a=f.rows),"ordered"in f&&t(4,c=f.ordered),"renderers"in f&&t(5,u=f.renderers)},[r,l,i,a,c,u,s]}class Ot extends Y{constructor(e){super(),Z(this,e,ea,Ji,K,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}}function Fr(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Zt=Fr();function ta(o){Zt=o}const na=/[&<>"']/,oa=/[&<>"']/g,sa=/[<>"']|&(?!#?\w+;)/,ra=/[<>"']|&(?!#?\w+;)/g,la={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xo=o=>la[o];function qe(o,e){if(e){if(na.test(o))return o.replace(oa,Xo)}else if(sa.test(o))return o.replace(ra,Xo);return o}const ia=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Hr(o){return o.replace(ia,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const aa=/(^|[^\[])\^/g;function Pe(o,e){o=typeof o=="string"?o:o.source,e=e||"";const t={replace:(n,s)=>(s=s.source||s,s=s.replace(aa,"$1"),o=o.replace(n,s),t),getRegex:()=>new RegExp(o,e)};return t}const ca=/[^\w:]/g,ua=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Qo(o,e,t){if(o){let n;try{n=decodeURIComponent(Hr(t)).replace(ca,"").toLowerCase()}catch(s){return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!ua.test(t)&&(t=ha(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(n){return null}return t}const cn={},fa=/^[^:]+:\/*[^/]*$/,pa=/^([^:]+:)[\s\S]*$/,da=/^([^:]+:\/*[^/]*)[\s\S]*$/;function ha(o,e){cn[" "+o]||(fa.test(o)?cn[" "+o]=o+"/":cn[" "+o]=mn(o,"/",!0)),o=cn[" "+o];const t=o.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:o.replace(pa,"$1")+e:e.charAt(0)==="/"?t?e:o.replace(da,"$1")+e:o+e}const xn={exec:function(){}};function at(o){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o}function Jo(o,e){const t=o.replace(/\|/g,(r,l,i)=>{let a=!1,c=l;for(;--c>=0&&i[c]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function mn(o,e,t){const n=o.length;if(n===0)return"";let s=0;for(;s<n;){const r=o.charAt(n-s-1);if(r===e&&!t)s++;else if(r!==e&&t)s++;else break}return o.slice(0,n-s)}function ma(o,e){if(o.indexOf(e[1])===-1)return-1;const t=o.length;let n=0,s=0;for(;s<t;s++)if(o[s]==="\\")s++;else if(o[s]===e[0])n++;else if(o[s]===e[1]&&(n--,n<0))return s;return-1}function Ur(o){o&&o.sanitize&&!o.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function es(o,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=o),e>>=1,o+=o;return t+o}function ts(o,e,t,n){const s=e.href,r=e.title?qe(e.title):null,l=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){n.state.inLink=!0;const i={type:"link",raw:t,href:s,title:r,text:l,tokens:n.inlineTokens(l,[])};return n.state.inLink=!1,i}return{type:"image",raw:t,href:s,title:r,text:qe(l)}}function ga(o,e){const t=o.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(s=>{const r=s.match(/^\s+/);if(r===null)return s;const[l]=r;return l.length>=n.length?s.slice(n.length):s}).join(`
`)}class lo{constructor(e){this.options=e||Zt}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:mn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=ga(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const r=mn(n,"#");(this.options.pedantic||!r||/ $/.test(r))&&(n=r.trim())}const s={type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,s,r,l,i,a,c,u,f,p,d,m,_=t[1].trim();const y=_.length>1,T={type:"list",raw:"",ordered:y,start:y?+_.slice(0,-1):"",loose:!1,items:[]};_=y?`\\d{1,9}\\${_.slice(-1)}`:`\\${_}`,this.options.pedantic&&(_=y?_:"[*+-]");const S=new RegExp(`^( {0,3}${_})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(m=!1,!(!(t=S.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0],f=e.split(`
`,1)[0],this.options.pedantic?(l=2,d=u.trimLeft()):(l=t[2].search(/[^ ]/),l=l>4?1:l,d=u.slice(l),l+=t[1].length),a=!1,!u&&/^ *$/.test(f)&&(n+=f+`
`,e=e.substring(f.length+1),m=!0),!m){const R=new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),M=new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;e&&(p=e.split(`
`,1)[0],u=p,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(R.test(u)||M.test(e)));){if(u.search(/[^ ]/)>=l||!u.trim())d+=`
`+u.slice(l);else if(!a)d+=`
`+u;else break;!a&&!u.trim()&&(a=!0),n+=p+`
`,e=e.substring(p.length+1)}}T.loose||(c?T.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(d),s&&(r=s[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),T.items.push({type:"list_item",raw:n,task:!!s,checked:r,loose:!1,text:d}),T.raw+=n}T.items[T.items.length-1].raw=n.trimRight(),T.items[T.items.length-1].text=d.trimRight(),T.raw=T.raw.trimRight();const N=T.items.length;for(i=0;i<N;i++){this.lexer.state.top=!1,T.items[i].tokens=this.lexer.blockTokens(T.items[i].text,[]);const R=T.items[i].tokens.filter(P=>P.type==="space"),M=R.every(P=>{const z=P.raw.split("");let O=0;for(const I of z)if(I===`
`&&(O+=1),O>1)return!0;return!1});!T.loose&&R.length&&M&&(T.loose=!0,T.items[i].loose=!0)}return T}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(n.type="paragraph",n.text=this.options.sanitizer?this.options.sanitizer(t[0]):qe(t[0]),n.tokens=[],this.lexer.inline(n.text,n.tokens)),n}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const n=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:n,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:Jo(t[1]).map(s=>({text:s})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let s=n.align.length,r,l,i,a;for(r=0;r<s;r++)/^ *-+: *$/.test(n.align[r])?n.align[r]="right":/^ *:-+: *$/.test(n.align[r])?n.align[r]="center":/^ *:-+ *$/.test(n.align[r])?n.align[r]="left":n.align[r]=null;for(s=n.rows.length,r=0;r<s;r++)n.rows[r]=Jo(n.rows[r],n.header.length).map(c=>({text:c}));for(s=n.header.length,l=0;l<s;l++)n.header[l].tokens=[],this.lexer.inline(n.header[l].text,n.header[l].tokens);for(s=n.rows.length,l=0;l<s;l++)for(a=n.rows[l],i=0;i<a.length;i++)a[i].tokens=[],this.lexer.inline(a[i].text,a[i].tokens);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const n={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}text(e){const t=this.rules.block.text.exec(e);if(t){const n={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:qe(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):qe(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const l=mn(n.slice(0,-1),"\\");if((n.length-l.length)%2===0)return}else{const l=ma(t[2],"()");if(l>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);l&&(s=l[1],r=l[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),ts(t,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(/\s+/g," ");if(s=t[s.toLowerCase()],!s||!s.href){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return ts(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;const r=s[1]||s[2]||"";if(!r||r&&(n===""||this.rules.inline.punctuation.exec(n))){const l=s[0].length-1;let i,a,c=l,u=0;const f=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+l);(s=f.exec(t))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(a=i.length,s[3]||s[4]){c+=a;continue}else if((s[5]||s[6])&&l%3&&!((l+a)%3)){u+=a;continue}if(c-=a,c>0)continue;if(a=Math.min(a,a+c+u),Math.min(l,a)%2){const d=e.slice(1,l+s.index+a);return{type:"em",raw:e.slice(0,l+s.index+a+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}const p=e.slice(2,l+s.index+a-1);return{type:"strong",raw:e.slice(0,l+s.index+a+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const s=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return s&&r&&(n=n.substring(1,n.length-1)),n=qe(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let s,r;return n[2]==="@"?(s=qe(this.options.mangle?t(n[1]):n[1]),r="mailto:"+s):(s=qe(n[1]),r=s),{type:"link",raw:n[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let s,r;if(n[2]==="@")s=qe(this.options.mangle?t(n[0]):n[0]),r="mailto:"+s;else{let l;do l=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(l!==n[0]);s=qe(n[0]),n[1]==="www."?r="http://"+s:r=s}return{type:"link",raw:n[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):qe(n[0]):n[0]:s=qe(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:s}}}}const le={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:xn,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};le._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;le._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;le.def=Pe(le.def).replace("label",le._label).replace("title",le._title).getRegex();le.bullet=/(?:[*+-]|\d{1,9}[.)])/;le.listItemStart=Pe(/^( *)(bull) */).replace("bull",le.bullet).getRegex();le.list=Pe(le.list).replace(/bull/g,le.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+le.def.source+")").getRegex();le._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";le._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;le.html=Pe(le.html,"i").replace("comment",le._comment).replace("tag",le._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();le.paragraph=Pe(le._paragraph).replace("hr",le.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",le._tag).getRegex();le.blockquote=Pe(le.blockquote).replace("paragraph",le.paragraph).getRegex();le.normal=at({},le);le.gfm=at({},le.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});le.gfm.table=Pe(le.gfm.table).replace("hr",le.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",le._tag).getRegex();le.gfm.paragraph=Pe(le._paragraph).replace("hr",le.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",le.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",le._tag).getRegex();le.pedantic=at({},le.normal,{html:Pe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",le._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:xn,paragraph:Pe(le.normal._paragraph).replace("hr",le.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",le.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const V={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:xn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:xn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};V._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";V.punctuation=Pe(V.punctuation).replace(/punctuation/g,V._punctuation).getRegex();V.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;V.escapedEmSt=/\\\*|\\_/g;V._comment=Pe(le._comment).replace("(?:-->|$)","-->").getRegex();V.emStrong.lDelim=Pe(V.emStrong.lDelim).replace(/punct/g,V._punctuation).getRegex();V.emStrong.rDelimAst=Pe(V.emStrong.rDelimAst,"g").replace(/punct/g,V._punctuation).getRegex();V.emStrong.rDelimUnd=Pe(V.emStrong.rDelimUnd,"g").replace(/punct/g,V._punctuation).getRegex();V._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;V._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;V._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;V.autolink=Pe(V.autolink).replace("scheme",V._scheme).replace("email",V._email).getRegex();V._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;V.tag=Pe(V.tag).replace("comment",V._comment).replace("attribute",V._attribute).getRegex();V._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;V._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;V._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;V.link=Pe(V.link).replace("label",V._label).replace("href",V._href).replace("title",V._title).getRegex();V.reflink=Pe(V.reflink).replace("label",V._label).replace("ref",le._label).getRegex();V.nolink=Pe(V.nolink).replace("ref",le._label).getRegex();V.reflinkSearch=Pe(V.reflinkSearch,"g").replace("reflink",V.reflink).replace("nolink",V.nolink).getRegex();V.normal=at({},V);V.pedantic=at({},V.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Pe(/^!?\[(label)\]\((.*?)\)/).replace("label",V._label).getRegex(),reflink:Pe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",V._label).getRegex()});V.gfm=at({},V.normal,{escape:Pe(V.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});V.gfm.url=Pe(V.gfm.url,"i").replace("email",V.gfm._extended_email).getRegex();V.breaks=at({},V.gfm,{br:Pe(V.br).replace("{2,}","*").getRegex(),text:Pe(V.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function ba(o){return o.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function ns(o){let e="",t,n;const s=o.length;for(t=0;t<s;t++)n=o.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class pt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Zt,this.options.tokenizer=this.options.tokenizer||new lo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:le.normal,inline:V.normal};this.options.pedantic?(t.block=le.pedantic,t.inline=V.pedantic):this.options.gfm&&(t.block=le.gfm,this.options.breaks?t.inline=V.breaks:t.inline=V.gfm),this.tokenizer.rules=t}static get rules(){return{block:le,inline:V}}static lex(e,t){return new pt(t).lex(e)}static lexInline(e,t){return new pt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(i,a,c)=>a+"    ".repeat(c.length));let n,s,r,l;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(i=>(n=i.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let i=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(i=Math.min(i,c))}),i<1/0&&i>=0&&(r=e.substring(0,i+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){s=t[t.length-1],l&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),l=r.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){const i="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,s,r,l=e,i,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)u.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+es("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,i.index)+"["+es("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(l))!=null;)l=l.slice(0,i.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,l,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,ns)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,ns))){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let p;this.options.extensions.startInline.forEach(function(d){p=d.call({lexer:this},f),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(r=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(r,ba)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),a=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class io{constructor(e){this.options=e||Zt}code(e,t,n){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(e,s);r!=null&&r!==e&&(n=!0,e=r)}return e=e.replace(/\n$/,"")+`
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=Qo(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let s='<a href="'+qe(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){if(e=Qo(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class qr{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class ao{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,s=0;if(this.seen.hasOwnProperty(n)){s=this.seen[e];do s++,n=e+"-"+s;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=s,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class gt{constructor(e){this.options=e||Zt,this.options.renderer=this.options.renderer||new io,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new qr,this.slugger=new ao}static parse(e,t){return new gt(t).parse(e)}static parseInline(e,t){return new gt(t).parseInline(e)}parse(e,t=!0){let n="",s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P;const z=e.length;for(s=0;s<z;s++){if(d=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(P=this.options.extensions.renderers[d.type].call({parser:this},d),P!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){n+=P||"";continue}switch(d.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(d.tokens),d.depth,Hr(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(f="",u="",i=d.header.length,r=0;r<i;r++)u+=this.renderer.tablecell(this.parseInline(d.header[r].tokens),{header:!0,align:d.align[r]});for(f+=this.renderer.tablerow(u),p="",i=d.rows.length,r=0;r<i;r++){for(c=d.rows[r],u="",a=c.length,l=0;l<a;l++)u+=this.renderer.tablecell(this.parseInline(c[l].tokens),{header:!1,align:d.align[l]});p+=this.renderer.tablerow(u)}n+=this.renderer.table(f,p);continue}case"blockquote":{p=this.parse(d.tokens),n+=this.renderer.blockquote(p);continue}case"list":{for(m=d.ordered,_=d.start,y=d.loose,i=d.items.length,p="",r=0;r<i;r++)S=d.items[r],N=S.checked,R=S.task,T="",S.task&&(M=this.renderer.checkbox(N),y?S.tokens.length>0&&S.tokens[0].type==="paragraph"?(S.tokens[0].text=M+" "+S.tokens[0].text,S.tokens[0].tokens&&S.tokens[0].tokens.length>0&&S.tokens[0].tokens[0].type==="text"&&(S.tokens[0].tokens[0].text=M+" "+S.tokens[0].tokens[0].text)):S.tokens.unshift({type:"text",text:M}):T+=M),T+=this.parse(S.tokens,y),p+=this.renderer.listitem(T,R,N);n+=this.renderer.list(p,m,_);continue}case"html":{n+=this.renderer.html(d.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(p=d.tokens?this.parseInline(d.tokens):d.text;s+1<z&&e[s+1].type==="text";)d=e[++s],p+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);n+=t?this.renderer.paragraph(p):p;continue}default:{const O='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(O);return}else throw new Error(O)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",s,r,l;const i=e.length;for(s=0;s<i;s++){if(r=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(l=this.options.extensions.renderers[r.type].call({parser:this},r),l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))){n+=l||"";continue}switch(r.type){case"escape":{n+=t.text(r.text);break}case"html":{n+=t.html(r.text);break}case"link":{n+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{n+=t.image(r.href,r.title,r.text);break}case"strong":{n+=t.strong(this.parseInline(r.tokens,t));break}case"em":{n+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{n+=t.codespan(r.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(r.tokens,t));break}case"text":{n+=t.text(r.text);break}default:{const a='Token with "'+r.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return n}}function ae(o,e,t){if(typeof o=="undefined"||o===null)throw new Error("marked(): input parameter is undefined or null");if(typeof o!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=at({},ae.defaults,e||{}),Ur(e),t){const n=e.highlight;let s;try{s=pt.lex(o,e)}catch(i){return t(i)}const r=function(i){let a;if(!i)try{e.walkTokens&&ae.walkTokens(s,e.walkTokens),a=gt.parse(s,e)}catch(c){i=c}return e.highlight=n,i?t(i):t(null,a)};if(!n||n.length<3||(delete e.highlight,!s.length))return r();let l=0;ae.walkTokens(s,function(i){i.type==="code"&&(l++,setTimeout(()=>{n(i.text,i.lang,function(a,c){if(a)return r(a);c!=null&&c!==i.text&&(i.text=c,i.escaped=!0),l--,l===0&&r()})},0))}),l===0&&r();return}try{const n=pt.lex(o,e);return e.walkTokens&&ae.walkTokens(n,e.walkTokens),gt.parse(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+qe(n.message+"",!0)+"</pre>";throw n}}ae.options=ae.setOptions=function(o){return at(ae.defaults,o),ta(ae.defaults),ae};ae.getDefaults=Fr;ae.defaults=Zt;ae.use=function(...o){const e=at({},...o),t=ae.defaults.extensions||{renderers:{},childTokens:{}};let n;o.forEach(s=>{if(s.extensions&&(n=!0,s.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const l=t.renderers?t.renderers[r.name]:null;l?t.renderers[r.name]=function(...i){let a=r.renderer.apply(this,i);return a===!1&&(a=l.apply(this,i)),a}:t.renderers[r.name]=r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[r.level]?t[r.level].unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}r.childTokens&&(t.childTokens[r.name]=r.childTokens)})),s.renderer){const r=ae.defaults.renderer||new io;for(const l in s.renderer){const i=r[l];r[l]=(...a)=>{let c=s.renderer[l].apply(r,a);return c===!1&&(c=i.apply(r,a)),c}}e.renderer=r}if(s.tokenizer){const r=ae.defaults.tokenizer||new lo;for(const l in s.tokenizer){const i=r[l];r[l]=(...a)=>{let c=s.tokenizer[l].apply(r,a);return c===!1&&(c=i.apply(r,a)),c}}e.tokenizer=r}if(s.walkTokens){const r=ae.defaults.walkTokens;e.walkTokens=function(l){s.walkTokens.call(this,l),r&&r.call(this,l)}}n&&(e.extensions=t),ae.setOptions(e)})};ae.walkTokens=function(o,e){for(const t of o)switch(e.call(ae,t),t.type){case"table":{for(const n of t.header)ae.walkTokens(n.tokens,e);for(const n of t.rows)for(const s of n)ae.walkTokens(s.tokens,e);break}case"list":{ae.walkTokens(t.items,e);break}default:ae.defaults.extensions&&ae.defaults.extensions.childTokens&&ae.defaults.extensions.childTokens[t.type]?ae.defaults.extensions.childTokens[t.type].forEach(function(n){ae.walkTokens(t[n],e)}):t.tokens&&ae.walkTokens(t.tokens,e)}};ae.parseInline=function(o,e){if(typeof o=="undefined"||o===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof o!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected");e=at({},ae.defaults,e||{}),Ur(e);try{const t=pt.lexInline(o,e);return e.walkTokens&&ae.walkTokens(t,e.walkTokens),gt.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+qe(t.message+"",!0)+"</pre>";throw t}};ae.Parser=gt;ae.parser=gt.parse;ae.Renderer=io;ae.TextRenderer=qr;ae.Lexer=pt;ae.lexer=pt.lex;ae.Tokenizer=lo;ae.Slugger=ao;ae.parse=ae;ae.options;ae.setOptions;ae.use;ae.walkTokens;ae.parseInline;gt.parse;pt.lex;const Kr={};function _a(o){let e;return{c(){e=L(o[1])},m(t,n){v(t,e,n)},p(t,n){n&2&&ye(e,t[1])},i:ee,o:ee,d(t){t&&w(e)}}}function wa(o){let e,t;const n=o[5].default,s=Se(n,o,o[4],null);return{c(){e=b("h6"),s&&s.c(),g(e,"id",o[2])},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ce(s,n,r,r[4],t?Ee(n,r[4],l,null):Ae(r[4]),null),(!t||l&4)&&g(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function $a(o){let e,t;const n=o[5].default,s=Se(n,o,o[4],null);return{c(){e=b("h5"),s&&s.c(),g(e,"id",o[2])},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ce(s,n,r,r[4],t?Ee(n,r[4],l,null):Ae(r[4]),null),(!t||l&4)&&g(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function va(o){let e,t;const n=o[5].default,s=Se(n,o,o[4],null);return{c(){e=b("h4"),s&&s.c(),g(e,"id",o[2])},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ce(s,n,r,r[4],t?Ee(n,r[4],l,null):Ae(r[4]),null),(!t||l&4)&&g(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function ya(o){let e,t;const n=o[5].default,s=Se(n,o,o[4],null);return{c(){e=b("h3"),s&&s.c(),g(e,"id",o[2])},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ce(s,n,r,r[4],t?Ee(n,r[4],l,null):Ae(r[4]),null),(!t||l&4)&&g(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function ka(o){let e,t;const n=o[5].default,s=Se(n,o,o[4],null);return{c(){e=b("h2"),s&&s.c(),g(e,"id",o[2])},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ce(s,n,r,r[4],t?Ee(n,r[4],l,null):Ae(r[4]),null),(!t||l&4)&&g(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function xa(o){let e,t;const n=o[5].default,s=Se(n,o,o[4],null);return{c(){e=b("h1"),s&&s.c(),g(e,"id",o[2])},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&16)&&Ce(s,n,r,r[4],t?Ee(n,r[4],l,null):Ae(r[4]),null),(!t||l&4)&&g(e,"id",r[2])},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function Ta(o){let e,t,n,s;const r=[xa,ka,ya,va,$a,wa,_a],l=[];function i(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),v(a,n,c),s=!0},p(a,[c]){let u=e;e=i(a),e===u?l[e].p(a,c):(he(),k(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){k(t),s=!1},d(a){l[e].d(a),a&&w(n)}}}function Sa(o,e,t){let n,{$$slots:s={},$$scope:r}=e,{depth:l}=e,{raw:i}=e,{text:a}=e;const{slug:c,getOptions:u}=Wt(Kr),f=u();return o.$$set=p=>{"depth"in p&&t(0,l=p.depth),"raw"in p&&t(1,i=p.raw),"text"in p&&t(3,a=p.text),"$$scope"in p&&t(4,r=p.$$scope)},o.$$.update=()=>{o.$$.dirty&8&&t(2,n=f.headerIds?f.headerPrefix+c(a):void 0)},[l,i,n,a,r,s]}class Ea extends Y{constructor(e){super(),Z(this,e,Sa,Ta,K,{depth:0,raw:1,text:3})}}function Ca(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("p"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function Aa(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Ra extends Y{constructor(e){super(),Z(this,e,Aa,Ca,K,{})}}function Na(o){let e;const t=o[3].default,n=Se(t,o,o[2],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,[r]){n&&n.p&&(!e||r&4)&&Ce(n,t,s,s[2],e?Ee(t,s[2],r,null):Ae(s[2]),null)},i(s){e||($(n,s),e=!0)},o(s){k(n,s),e=!1},d(s){n&&n.d(s)}}}function Ma(o,e,t){let{$$slots:n={},$$scope:s}=e,{text:r}=e,{raw:l}=e;return o.$$set=i=>{"text"in i&&t(0,r=i.text),"raw"in i&&t(1,l=i.raw),"$$scope"in i&&t(2,s=i.$$scope)},[r,l,s,n]}class Pa extends Y{constructor(e){super(),Z(this,e,Ma,Na,K,{text:0,raw:1})}}function za(o){let e,t;return{c(){e=b("img"),To(e.src,t=o[0])||g(e,"src",t),g(e,"title",o[1]),g(e,"alt",o[2])},m(n,s){v(n,e,s)},p(n,[s]){s&1&&!To(e.src,t=n[0])&&g(e,"src",t),s&2&&g(e,"title",n[1]),s&4&&g(e,"alt",n[2])},i:ee,o:ee,d(n){n&&w(e)}}}function Oa(o,e,t){let{href:n=""}=e,{title:s=void 0}=e,{text:r=""}=e;return o.$$set=l=>{"href"in l&&t(0,n=l.href),"title"in l&&t(1,s=l.title),"text"in l&&t(2,r=l.text)},[n,s,r]}class Ia extends Y{constructor(e){super(),Z(this,e,Oa,za,K,{href:0,title:1,text:2})}}function La(o){let e,t;const n=o[3].default,s=Se(n,o,o[2],null);return{c(){e=b("a"),s&&s.c(),g(e,"href",o[0]),g(e,"title",o[1])},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&4)&&Ce(s,n,r,r[2],t?Ee(n,r[2],l,null):Ae(r[2]),null),(!t||l&1)&&g(e,"href",r[0]),(!t||l&2)&&g(e,"title",r[1])},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function Da(o,e,t){let{$$slots:n={},$$scope:s}=e,{href:r=""}=e,{title:l=void 0}=e;return o.$$set=i=>{"href"in i&&t(0,r=i.href),"title"in i&&t(1,l=i.title),"$$scope"in i&&t(2,s=i.$$scope)},[r,l,s,n]}class ja extends Y{constructor(e){super(),Z(this,e,Da,La,K,{href:0,title:1})}}function Ba(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("em"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function Fa(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Ha extends Y{constructor(e){super(),Z(this,e,Fa,Ba,K,{})}}function Ua(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("del"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function qa(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Ka extends Y{constructor(e){super(),Z(this,e,qa,Ua,K,{})}}function Wa(o){let e,t=o[0].replace(/`/g,"")+"",n;return{c(){e=b("code"),n=L(t)},m(s,r){v(s,e,r),h(e,n)},p(s,[r]){r&1&&t!==(t=s[0].replace(/`/g,"")+"")&&ye(n,t)},i:ee,o:ee,d(s){s&&w(e)}}}function Ga(o,e,t){let{raw:n}=e;return o.$$set=s=>{"raw"in s&&t(0,n=s.raw)},[n]}class Za extends Y{constructor(e){super(),Z(this,e,Ga,Wa,K,{raw:0})}}function Ya(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("strong"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function Va(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Xa extends Y{constructor(e){super(),Z(this,e,Va,Ya,K,{})}}function Qa(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("table"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function Ja(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class ec extends Y{constructor(e){super(),Z(this,e,Ja,Qa,K,{})}}function tc(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("thead"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function nc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class oc extends Y{constructor(e){super(),Z(this,e,nc,tc,K,{})}}function sc(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("tbody"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function rc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class lc extends Y{constructor(e){super(),Z(this,e,rc,sc,K,{})}}function ic(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("tr"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function ac(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class cc extends Y{constructor(e){super(),Z(this,e,ac,ic,K,{})}}function uc(o){let e,t;const n=o[3].default,s=Se(n,o,o[2],null);return{c(){e=b("td"),s&&s.c(),g(e,"align",o[1])},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&4)&&Ce(s,n,r,r[2],t?Ee(n,r[2],l,null):Ae(r[2]),null),(!t||l&2)&&g(e,"align",r[1])},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function fc(o){let e,t;const n=o[3].default,s=Se(n,o,o[2],null);return{c(){e=b("th"),s&&s.c(),g(e,"align",o[1])},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&4)&&Ce(s,n,r,r[2],t?Ee(n,r[2],l,null):Ae(r[2]),null),(!t||l&2)&&g(e,"align",r[1])},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function pc(o){let e,t,n,s;const r=[fc,uc],l=[];function i(a,c){return a[0]?0:1}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),v(a,n,c),s=!0},p(a,[c]){let u=e;e=i(a),e===u?l[e].p(a,c):(he(),k(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){k(t),s=!1},d(a){l[e].d(a),a&&w(n)}}}function dc(o,e,t){let{$$slots:n={},$$scope:s}=e,{header:r}=e,{align:l}=e;return o.$$set=i=>{"header"in i&&t(0,r=i.header),"align"in i&&t(1,l=i.align),"$$scope"in i&&t(2,s=i.$$scope)},[r,l,s,n]}class hc extends Y{constructor(e){super(),Z(this,e,dc,pc,K,{header:0,align:1})}}function mc(o){let e,t;const n=o[3].default,s=Se(n,o,o[2],null);return{c(){e=b("ul"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&4)&&Ce(s,n,r,r[2],t?Ee(n,r[2],l,null):Ae(r[2]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function gc(o){let e,t;const n=o[3].default,s=Se(n,o,o[2],null);return{c(){e=b("ol"),s&&s.c(),g(e,"start",o[1])},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,l){s&&s.p&&(!t||l&4)&&Ce(s,n,r,r[2],t?Ee(n,r[2],l,null):Ae(r[2]),null),(!t||l&2)&&g(e,"start",r[1])},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function bc(o){let e,t,n,s;const r=[gc,mc],l=[];function i(a,c){return a[0]?0:1}return e=i(o),t=l[e]=r[e](o),{c(){t.c(),n=$e()},m(a,c){l[e].m(a,c),v(a,n,c),s=!0},p(a,[c]){let u=e;e=i(a),e===u?l[e].p(a,c):(he(),k(l[u],1,1,()=>{l[u]=null}),me(),t=l[e],t?t.p(a,c):(t=l[e]=r[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){k(t),s=!1},d(a){l[e].d(a),a&&w(n)}}}function _c(o,e,t){let{$$slots:n={},$$scope:s}=e,{ordered:r}=e,{start:l}=e;return o.$$set=i=>{"ordered"in i&&t(0,r=i.ordered),"start"in i&&t(1,l=i.start),"$$scope"in i&&t(2,s=i.$$scope)},[r,l,s,n]}class wc extends Y{constructor(e){super(),Z(this,e,_c,bc,K,{ordered:0,start:1})}}function $c(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("li"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function vc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class yc extends Y{constructor(e){super(),Z(this,e,vc,$c,K,{})}}function kc(o){let e;return{c(){e=b("hr")},m(t,n){v(t,e,n)},p:ee,i:ee,o:ee,d(t){t&&w(e)}}}class xc extends Y{constructor(e){super(),Z(this,e,null,kc,K,{})}}function Tc(o){let e,t;return{c(){e=new Nr(!1),t=$e(),e.a=t},m(n,s){e.m(o[0],n,s),v(n,t,s)},p(n,[s]){s&1&&e.p(n[0])},i:ee,o:ee,d(n){n&&w(t),n&&e.d()}}}function Sc(o,e,t){let{text:n}=e;return o.$$set=s=>{"text"in s&&t(0,n=s.text)},[n]}class Ec extends Y{constructor(e){super(),Z(this,e,Sc,Tc,K,{text:0})}}function Cc(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("blockquote"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(e,null),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function Ac(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Rc extends Y{constructor(e){super(),Z(this,e,Ac,Cc,K,{})}}function Nc(o){let e,t,n;return{c(){e=b("pre"),t=b("code"),n=L(o[1]),g(e,"class",o[0])},m(s,r){v(s,e,r),h(e,t),h(t,n)},p(s,[r]){r&2&&ye(n,s[1]),r&1&&g(e,"class",s[0])},i:ee,o:ee,d(s){s&&w(e)}}}function Mc(o,e,t){let{lang:n}=e,{text:s}=e;return o.$$set=r=>{"lang"in r&&t(0,n=r.lang),"text"in r&&t(1,s=r.text)},[n,s]}class Pc extends Y{constructor(e){super(),Z(this,e,Mc,Nc,K,{lang:0,text:1})}}function zc(o){let e,t;const n=o[1].default,s=Se(n,o,o[0],null);return{c(){e=b("br"),s&&s.c()},m(r,l){v(r,e,l),s&&s.m(r,l),t=!0},p(r,[l]){s&&s.p&&(!t||l&1)&&Ce(s,n,r,r[0],t?Ee(n,r[0],l,null):Ae(r[0]),null)},i(r){t||($(s,r),t=!0)},o(r){k(s,r),t=!1},d(r){r&&w(e),s&&s.d(r)}}}function Oc(o,e,t){let{$$slots:n={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,n]}class Ic extends Y{constructor(e){super(),Z(this,e,Oc,zc,K,{})}}const Lc={heading:Ea,paragraph:Ra,text:Pa,image:Ia,link:ja,em:Ha,strong:Xa,codespan:Za,del:Ka,table:ec,tablehead:oc,tablebody:lc,tablerow:cc,tablecell:hc,list:wc,orderedlistitem:null,unorderedlistitem:null,listitem:yc,hr:xc,html:Ec,blockquote:Rc,code:Pc,br:Ic},Dc={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function jc(o){let e,t;return e=new Ot({props:{tokens:o[0],renderers:o[1]}}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,[s]){const r={};s&1&&(r.tokens=n[0]),s&2&&(r.renderers=n[1]),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Bc(o,e,t){let n,s,r,{source:l=""}=e,{renderers:i={}}=e,{options:a={}}=e,{isInline:c=!1}=e;const u=to();let f,p,d;return no(Kr,{slug:m=>n?n.slug(m):"",getOptions:()=>s}),Pt(()=>{t(7,d=!0)}),o.$$set=m=>{"source"in m&&t(2,l=m.source),"renderers"in m&&t(3,i=m.renderers),"options"in m&&t(4,a=m.options),"isInline"in m&&t(5,c=m.isInline)},o.$$.update=()=>{o.$$.dirty&4&&(n=l?new ao:void 0),o.$$.dirty&16&&t(8,s=He(He({},Dc),a)),o.$$.dirty&357&&(t(6,p=new pt(s)),t(0,f=c?p.inlineTokens(l):p.lex(l)),u("parsed",{tokens:f})),o.$$.dirty&8&&t(1,r=He(He({},Lc),i)),o.$$.dirty&129&&d&&u("parsed",{tokens:f})},[f,r,l,i,a,c,p,d,s]}class It extends Y{constructor(e){super(),Z(this,e,Bc,jc,K,{source:2,renderers:3,options:4,isInline:5})}}function Fc(o){let e,t,n;return t=new It({props:{source:Ri}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(s,r){v(s,e,r),E(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){s&&w(e),C(t)}}}class Hc extends Y{constructor(e){super(),Z(this,e,null,Fc,K,{})}}var un=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},co={exports:{}};function uo(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(function(e){var t=o[e];typeof t=="object"&&!Object.isFrozen(t)&&uo(t)}),o}co.exports=uo;co.exports.default=uo;var Uc=co.exports;class os{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Wr(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function vt(o,...e){const t=Object.create(null);for(const n in o)t[n]=o[n];return e.forEach(function(n){for(const s in n)t[s]=n[s]}),t}const qc="</span>",ss=o=>!!o.kind,Kc=(o,{prefix:e})=>{if(o.includes(".")){const t=o.split(".");return[`${e}${t.shift()}`,...t.map((n,s)=>`${n}${"_".repeat(s+1)}`)].join(" ")}return`${e}${o}`};class Wc{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=Wr(e)}openNode(e){if(!ss(e))return;let t=e.kind;e.sublanguage?t=`language-${t}`:t=Kc(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){!ss(e)||(this.buffer+=qc)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class fo{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(n=>this._walk(e,n)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&(!e.children||(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{fo._collapse(t)})))}}class Gc extends fo{constructor(e){super(),this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new Wc(this,this.options).value()}finalize(){return!0}}function en(o){return o?typeof o=="string"?o:o.source:null}function Gr(o){return Lt("(?=",o,")")}function Zc(o){return Lt("(?:",o,")*")}function Yc(o){return Lt("(?:",o,")?")}function Lt(...o){return o.map(t=>en(t)).join("")}function Vc(o){const e=o[o.length-1];return typeof e=="object"&&e.constructor===Object?(o.splice(o.length-1,1),e):{}}function po(...o){const e=Vc(o);return"("+(e.capture?"":"?:")+o.map(n=>en(n)).join("|")+")"}function Zr(o){return new RegExp(o.toString()+"|").exec("").length-1}function Xc(o,e){const t=o&&o.exec(e);return t&&t.index===0}const Qc=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ho(o,{joinWith:e}){let t=0;return o.map(n=>{t+=1;const s=t;let r=en(n),l="";for(;r.length>0;){const i=Qc.exec(r);if(!i){l+=r;break}l+=r.substring(0,i.index),r=r.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?l+="\\"+String(Number(i[1])+s):(l+=i[0],i[0]==="("&&t++)}return l}).map(n=>`(${n})`).join(e)}const Jc=/\b\B/,Yr="[a-zA-Z]\\w*",mo="[a-zA-Z_]\\w*",Vr="\\b\\d+(\\.\\d+)?",Xr="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Qr="\\b(0b[01]+)",eu="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",tu=(o={})=>{const e=/^#![ ]*\//;return o.binary&&(o.begin=Lt(e,/.*\b/,o.binary,/\b.*/)),vt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,n)=>{t.index!==0&&n.ignoreMatch()}},o)},tn={begin:"\\\\[\\s\\S]",relevance:0},nu={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[tn]},ou={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[tn]},su={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Rn=function(o,e,t={}){const n=vt({scope:"comment",begin:o,end:e,contains:[]},t);n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=po("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return n.contains.push({begin:Lt(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},ru=Rn("//","$"),lu=Rn("/\\*","\\*/"),iu=Rn("#","$"),au={scope:"number",begin:Vr,relevance:0},cu={scope:"number",begin:Xr,relevance:0},uu={scope:"number",begin:Qr,relevance:0},fu={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[tn,{begin:/\[/,end:/\]/,relevance:0,contains:[tn]}]}]},pu={scope:"title",begin:Yr,relevance:0},du={scope:"title",begin:mo,relevance:0},hu={begin:"\\.\\s*"+mo,relevance:0},mu=function(o){return Object.assign(o,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var fn=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Jc,IDENT_RE:Yr,UNDERSCORE_IDENT_RE:mo,NUMBER_RE:Vr,C_NUMBER_RE:Xr,BINARY_NUMBER_RE:Qr,RE_STARTERS_RE:eu,SHEBANG:tu,BACKSLASH_ESCAPE:tn,APOS_STRING_MODE:nu,QUOTE_STRING_MODE:ou,PHRASAL_WORDS_MODE:su,COMMENT:Rn,C_LINE_COMMENT_MODE:ru,C_BLOCK_COMMENT_MODE:lu,HASH_COMMENT_MODE:iu,NUMBER_MODE:au,C_NUMBER_MODE:cu,BINARY_NUMBER_MODE:uu,REGEXP_MODE:fu,TITLE_MODE:pu,UNDERSCORE_TITLE_MODE:du,METHOD_GUARD:hu,END_SAME_AS_BEGIN:mu});function gu(o,e){o.input[o.index-1]==="."&&e.ignoreMatch()}function bu(o,e){o.className!==void 0&&(o.scope=o.className,delete o.className)}function _u(o,e){!e||!o.beginKeywords||(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=gu,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function wu(o,e){!Array.isArray(o.illegal)||(o.illegal=po(...o.illegal))}function $u(o,e){if(!!o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function vu(o,e){o.relevance===void 0&&(o.relevance=1)}const yu=(o,e)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},o);Object.keys(o).forEach(n=>{delete o[n]}),o.keywords=t.keywords,o.begin=Lt(t.beforeMatch,Gr(t.begin)),o.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},o.relevance=0,delete t.beforeMatch},ku=["of","and","for","in","not","or","if","then","parent","list","value"],xu="keyword";function Jr(o,e,t=xu){const n=Object.create(null);return typeof o=="string"?s(t,o.split(" ")):Array.isArray(o)?s(t,o):Object.keys(o).forEach(function(r){Object.assign(n,Jr(o[r],e,r))}),n;function s(r,l){e&&(l=l.map(i=>i.toLowerCase())),l.forEach(function(i){const a=i.split("|");n[a[0]]=[r,Tu(a[0],a[1])]})}}function Tu(o,e){return e?Number(e):Su(o)?0:1}function Su(o){return ku.includes(o.toLowerCase())}const rs={},Nt=o=>{console.error(o)},ls=(o,...e)=>{console.log(`WARN: ${o}`,...e)},Ft=(o,e)=>{rs[`${o}/${e}`]||(console.log(`Deprecated as of ${o}. ${e}`),rs[`${o}/${e}`]=!0)},Tn=new Error;function el(o,e,{key:t}){let n=0;const s=o[t],r={},l={};for(let i=1;i<=e.length;i++)l[i+n]=s[i],r[i+n]=!0,n+=Zr(e[i-1]);o[t]=l,o[t]._emit=r,o[t]._multi=!0}function Eu(o){if(!!Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw Nt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Tn;if(typeof o.beginScope!="object"||o.beginScope===null)throw Nt("beginScope must be object"),Tn;el(o,o.begin,{key:"beginScope"}),o.begin=ho(o.begin,{joinWith:""})}}function Cu(o){if(!!Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw Nt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Tn;if(typeof o.endScope!="object"||o.endScope===null)throw Nt("endScope must be object"),Tn;el(o,o.end,{key:"endScope"}),o.end=ho(o.end,{joinWith:""})}}function Au(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function Ru(o){Au(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),Eu(o),Cu(o)}function Nu(o){function e(l,i){return new RegExp(en(l),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,i]),this.matchAt+=Zr(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(a=>a[1]);this.matcherRe=e(ho(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(i);if(!a)return null;const c=a.findIndex((f,p)=>p>0&&f!==void 0),u=this.matchIndexes[c];return a.splice(0,c),Object.assign(a,u)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const a=new t;return this.rules.slice(i).forEach(([c,u])=>a.addRule(c,u)),a.compile(),this.multiRegexes[i]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,a){this.rules.push([i,a]),a.type==="begin"&&this.count++}exec(i){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let c=a.exec(i);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(i)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function s(l){const i=new n;return l.contains.forEach(a=>i.addRule(a.begin,{rule:a,type:"begin"})),l.terminatorEnd&&i.addRule(l.terminatorEnd,{type:"end"}),l.illegal&&i.addRule(l.illegal,{type:"illegal"}),i}function r(l,i){const a=l;if(l.isCompiled)return a;[bu,$u,Ru,yu].forEach(u=>u(l,i)),o.compilerExtensions.forEach(u=>u(l,i)),l.__beforeBegin=null,[_u,wu,vu].forEach(u=>u(l,i)),l.isCompiled=!0;let c=null;return typeof l.keywords=="object"&&l.keywords.$pattern&&(l.keywords=Object.assign({},l.keywords),c=l.keywords.$pattern,delete l.keywords.$pattern),c=c||/\w+/,l.keywords&&(l.keywords=Jr(l.keywords,o.case_insensitive)),a.keywordPatternRe=e(c,!0),i&&(l.begin||(l.begin=/\B|\b/),a.beginRe=e(a.begin),!l.end&&!l.endsWithParent&&(l.end=/\B|\b/),l.end&&(a.endRe=e(a.end)),a.terminatorEnd=en(a.end)||"",l.endsWithParent&&i.terminatorEnd&&(a.terminatorEnd+=(l.end?"|":"")+i.terminatorEnd)),l.illegal&&(a.illegalRe=e(l.illegal)),l.contains||(l.contains=[]),l.contains=[].concat(...l.contains.map(function(u){return Mu(u==="self"?l:u)})),l.contains.forEach(function(u){r(u,a)}),l.starts&&r(l.starts,i),a.matcher=s(a),a}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=vt(o.classNameAliases||{}),r(o)}function tl(o){return o?o.endsWithParent||tl(o.starts):!1}function Mu(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(e){return vt(o,{variants:null},e)})),o.cachedVariants?o.cachedVariants:tl(o)?vt(o,{starts:o.starts?vt(o.starts):null}):Object.isFrozen(o)?vt(o):o}var Pu="11.5.0";class zu extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const qn=Wr,is=vt,as=Symbol("nomatch"),Ou=7,Iu=function(o){const e=Object.create(null),t=Object.create(null),n=[];let s=!0;const r="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Gc};function a(B){return i.noHighlightRe.test(B)}function c(B){let H=B.className+" ";H+=B.parentNode?B.parentNode.className:"";const oe=i.languageDetectRe.exec(H);if(oe){const re=I(oe[1]);return re||(ls(r.replace("{}",oe[1])),ls("Falling back to no-highlight mode for this block.",B)),re?oe[1]:"no-highlight"}return H.split(/\s+/).find(re=>a(re)||I(re))}function u(B,H,oe){let re="",ue="";typeof H=="object"?(re=B,oe=H.ignoreIllegals,ue=H.language):(Ft("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ft("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ue=B,re=H),oe===void 0&&(oe=!0);const ce={code:re,language:ue};ne("before:highlight",ce);const ze=ce.result?ce.result:f(ce.language,ce.code,oe);return ze.code=ce.code,ne("after:highlight",ze),ze}function f(B,H,oe,re){const ue=Object.create(null);function ce(F,J){return F.keywords[J]}function ze(){if(!ie.keywords){De.addText(ve);return}let F=0;ie.keywordPatternRe.lastIndex=0;let J=ie.keywordPatternRe.exec(ve),se="";for(;J;){se+=ve.substring(F,J.index);const U=Ne.case_insensitive?J[0].toLowerCase():J[0],we=ce(ie,U);if(we){const[je,Me]=we;if(De.addText(se),se="",ue[U]=(ue[U]||0)+1,ue[U]<=Ou&&(tt+=Me),je.startsWith("_"))se+=J[0];else{const Ct=Ne.classNameAliases[je]||je;De.addKeyword(J[0],Ct)}}else se+=J[0];F=ie.keywordPatternRe.lastIndex,J=ie.keywordPatternRe.exec(ve)}se+=ve.substr(F),De.addText(se)}function Ie(){if(ve==="")return;let F=null;if(typeof ie.subLanguage=="string"){if(!e[ie.subLanguage]){De.addText(ve);return}F=f(ie.subLanguage,ve,!0,Dt[ie.subLanguage]),Dt[ie.subLanguage]=F._top}else F=d(ve,ie.subLanguage.length?ie.subLanguage:null);ie.relevance>0&&(tt+=F.relevance),De.addSublanguage(F._emitter,F.language)}function ke(){ie.subLanguage!=null?Ie():ze(),ve=""}function be(F,J){let se=1;const U=J.length-1;for(;se<=U;){if(!F._emit[se]){se++;continue}const we=Ne.classNameAliases[F[se]]||F[se],je=J[se];we?De.addKeyword(je,we):(ve=je,ze(),ve=""),se++}}function te(F,J){return F.scope&&typeof F.scope=="string"&&De.openNode(Ne.classNameAliases[F.scope]||F.scope),F.beginScope&&(F.beginScope._wrap?(De.addKeyword(ve,Ne.classNameAliases[F.beginScope._wrap]||F.beginScope._wrap),ve=""):F.beginScope._multi&&(be(F.beginScope,J),ve="")),ie=Object.create(F,{parent:{value:ie}}),ie}function xe(F,J,se){let U=Xc(F.endRe,se);if(U){if(F["on:end"]){const we=new os(F);F["on:end"](J,we),we.isMatchIgnored&&(U=!1)}if(U){for(;F.endsParent&&F.parent;)F=F.parent;return F}}if(F.endsWithParent)return xe(F.parent,J,se)}function fe(F){return ie.matcher.regexIndex===0?(ve+=F[0],1):(ut=!0,0)}function ge(F){const J=F[0],se=F.rule,U=new os(se),we=[se.__beforeBegin,se["on:begin"]];for(const je of we)if(!!je&&(je(F,U),U.isMatchIgnored))return fe(J);return se.skip?ve+=J:(se.excludeBegin&&(ve+=J),ke(),!se.returnBegin&&!se.excludeBegin&&(ve=J)),te(se,F),se.returnBegin?0:J.length}function Q(F){const J=F[0],se=H.substr(F.index),U=xe(ie,F,se);if(!U)return as;const we=ie;ie.endScope&&ie.endScope._wrap?(ke(),De.addKeyword(J,ie.endScope._wrap)):ie.endScope&&ie.endScope._multi?(ke(),be(ie.endScope,F)):we.skip?ve+=J:(we.returnEnd||we.excludeEnd||(ve+=J),ke(),we.excludeEnd&&(ve=J));do ie.scope&&De.closeNode(),!ie.skip&&!ie.subLanguage&&(tt+=ie.relevance),ie=ie.parent;while(ie!==U.parent);return U.starts&&te(U.starts,F),we.returnEnd?0:J.length}function Oe(){const F=[];for(let J=ie;J!==Ne;J=J.parent)J.scope&&F.unshift(J.scope);F.forEach(J=>De.openNode(J))}let Te={};function _e(F,J){const se=J&&J[0];if(ve+=F,se==null)return ke(),0;if(Te.type==="begin"&&J.type==="end"&&Te.index===J.index&&se===""){if(ve+=H.slice(J.index,J.index+1),!s){const U=new Error(`0 width match regex (${B})`);throw U.languageName=B,U.badRule=Te.rule,U}return 1}if(Te=J,J.type==="begin")return ge(J);if(J.type==="illegal"&&!oe){const U=new Error('Illegal lexeme "'+se+'" for mode "'+(ie.scope||"<unnamed>")+'"');throw U.mode=ie,U}else if(J.type==="end"){const U=Q(J);if(U!==as)return U}if(J.type==="illegal"&&se==="")return 1;if(jt>1e5&&jt>J.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ve+=se,se.length}const Ne=I(B);if(!Ne)throw Nt(r.replace("{}",B)),new Error('Unknown language: "'+B+'"');const ct=Nu(Ne);let We="",ie=re||ct;const Dt={},De=new i.__emitter(i);Oe();let ve="",tt=0,st=0,jt=0,ut=!1;try{for(ie.matcher.considerAll();;){jt++,ut?ut=!1:ie.matcher.considerAll(),ie.matcher.lastIndex=st;const F=ie.matcher.exec(H);if(!F)break;const J=H.substring(st,F.index),se=_e(J,F);st=F.index+se}return _e(H.substr(st)),De.closeAllNodes(),De.finalize(),We=De.toHTML(),{language:B,value:We,relevance:tt,illegal:!1,_emitter:De,_top:ie}}catch(F){if(F.message&&F.message.includes("Illegal"))return{language:B,value:qn(H),illegal:!0,relevance:0,_illegalBy:{message:F.message,index:st,context:H.slice(st-100,st+100),mode:F.mode,resultSoFar:We},_emitter:De};if(s)return{language:B,value:qn(H),illegal:!1,relevance:0,errorRaised:F,_emitter:De,_top:ie};throw F}}function p(B){const H={value:qn(B),illegal:!1,relevance:0,_top:l,_emitter:new i.__emitter(i)};return H._emitter.addText(B),H}function d(B,H){H=H||i.languages||Object.keys(e);const oe=p(B),re=H.filter(I).filter(j).map(ke=>f(ke,B,!1));re.unshift(oe);const ue=re.sort((ke,be)=>{if(ke.relevance!==be.relevance)return be.relevance-ke.relevance;if(ke.language&&be.language){if(I(ke.language).supersetOf===be.language)return 1;if(I(be.language).supersetOf===ke.language)return-1}return 0}),[ce,ze]=ue,Ie=ce;return Ie.secondBest=ze,Ie}function m(B,H,oe){const re=H&&t[H]||oe;B.classList.add("hljs"),B.classList.add(`language-${re}`)}function _(B){let H=null;const oe=c(B);if(a(oe))return;if(ne("before:highlightElement",{el:B,language:oe}),B.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),i.throwUnescapedHTML))throw new zu("One of your code blocks includes unescaped HTML.",B.innerHTML);H=B;const re=H.textContent,ue=oe?u(re,{language:oe,ignoreIllegals:!0}):d(re);B.innerHTML=ue.value,m(B,oe,ue.language),B.result={language:ue.language,re:ue.relevance,relevance:ue.relevance},ue.secondBest&&(B.secondBest={language:ue.secondBest.language,relevance:ue.secondBest.relevance}),ne("after:highlightElement",{el:B,result:ue,text:re})}function y(B){i=is(i,B)}const T=()=>{R(),Ft("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function S(){R(),Ft("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let N=!1;function R(){if(document.readyState==="loading"){N=!0;return}document.querySelectorAll(i.cssSelector).forEach(_)}function M(){N&&R()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",M,!1);function P(B,H){let oe=null;try{oe=H(o)}catch(re){if(Nt("Language definition for '{}' could not be registered.".replace("{}",B)),s)Nt(re);else throw re;oe=l}oe.name||(oe.name=B),e[B]=oe,oe.rawDefinition=H.bind(null,o),oe.aliases&&D(oe.aliases,{languageName:B})}function z(B){delete e[B];for(const H of Object.keys(t))t[H]===B&&delete t[H]}function O(){return Object.keys(e)}function I(B){return B=(B||"").toLowerCase(),e[B]||e[t[B]]}function D(B,{languageName:H}){typeof B=="string"&&(B=[B]),B.forEach(oe=>{t[oe.toLowerCase()]=H})}function j(B){const H=I(B);return H&&!H.disableAutodetect}function q(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=H=>{B["before:highlightBlock"](Object.assign({block:H.el},H))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=H=>{B["after:highlightBlock"](Object.assign({block:H.el},H))})}function X(B){q(B),n.push(B)}function ne(B,H){const oe=B;n.forEach(function(re){re[oe]&&re[oe](H)})}function W(B){return Ft("10.7.0","highlightBlock will be removed entirely in v12.0"),Ft("10.7.0","Please use highlightElement now."),_(B)}Object.assign(o,{highlight:u,highlightAuto:d,highlightAll:R,highlightElement:_,highlightBlock:W,configure:y,initHighlighting:T,initHighlightingOnLoad:S,registerLanguage:P,unregisterLanguage:z,listLanguages:O,getLanguage:I,registerAliases:D,autoDetection:j,inherit:is,addPlugin:X}),o.debugMode=function(){s=!1},o.safeMode=function(){s=!0},o.versionString=Pu,o.regex={concat:Lt,lookahead:Gr,either:po,optional:Yc,anyNumberOfTimes:Zc};for(const B in fn)typeof fn[B]=="object"&&Uc(fn[B]);return Object.assign(o,fn),o};var nn=Iu({}),Lu=nn;nn.HighlightJS=nn;nn.default=nn;var pn=Lu;function Du(o){const e=o.regex,t=e.concat(/[A-Z_]/,e.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),n=/[A-Za-z0-9._:-]+/,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},l=o.inherit(r,{begin:/\(/,end:/\)/}),i=o.inherit(o.APOS_STRING_MODE,{className:"string"}),a=o.inherit(o.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:n,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,a,i,l,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,l,a,i]}]}]},o.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const cs="[A-Za-z$_][0-9A-Za-z$_]*",ju=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Bu=["true","false","null","undefined","NaN","Infinity"],nl=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ol=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],sl=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Fu=["arguments","this","super","console","window","document","localStorage","module","global"],Hu=[].concat(sl,nl,ol);function Uu(o){const e=o.regex,t=(H,{after:oe})=>{const re="</"+H[0].slice(1);return H.input.indexOf(re,oe)!==-1},n=cs,s={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(H,oe)=>{const re=H[0].length+H.index,ue=H.input[re];if(ue==="<"||ue===","){oe.ignoreMatch();return}ue===">"&&(t(H,{after:re})||oe.ignoreMatch());let ce;if((ce=H.input.substr(re).match(/^\s+extends\s+/))&&ce.index===0){oe.ignoreMatch();return}}},i={$pattern:cs,keyword:ju,literal:Bu,built_in:Hu,"variable.language":Fu},a="[0-9](_?[0-9])*",c=`\\.(${a})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},d={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},m={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,p],subLanguage:"css"}},_={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,p]},y=o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),T={className:"comment",variants:[y,o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},S=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,d,m,_,f];p.contains=S.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(S)});const N=[].concat(T,p.contains),R=N.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(N)}]),M={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R},P={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,e.concat(n,"(",e.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},z={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...nl,...ol]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},I={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[M],illegal:/%/},D={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function j(H){return e.concat("(?!",H.join("|"),")")}const q={match:e.concat(/\b/,j([...sl,"super"]),n,e.lookahead(/\(/)),className:"title.function",relevance:0},X={begin:e.concat(/\./,e.lookahead(e.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ne={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},M]},W="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",B={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(W)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[M]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:z},illegal:/#(?![$_A-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,d,m,_,T,f,z,{className:"attr",begin:n+e.lookahead(":"),relevance:0},B,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,o.REGEXP_MODE,{className:"function",begin:W,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:r},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}]},I,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[M,o.inherit(o.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},X,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[M]},q,D,P,ne,{match:/\$[(.]/}]}}const qu=o=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:o.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:o.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),Ku=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Wu=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],Gu=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],Zu=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],Yu=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function Vu(o){const e=o.regex,t=qu(o),n={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},s="and or not only",r=/@-?\w[\w]*(-\w+)*/,l="[a-zA-Z-][a-zA-Z0-9_-]*",i=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,n,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+l,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Gu.join("|")+")"},{begin:":(:)?("+Zu.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Yu.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...i,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:e.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:r},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:s,attribute:Wu.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...i,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Ku.join("|")+")\\b"}]}}const Xu=o=>({highlighted:o&2}),us=o=>({highlighted:o[1]});function Qu(o){let e,t,n=[{"data-language":"svelte"},o[2]],s={};for(let r=0;r<n.length;r+=1)s=nt(s,n[r]);return{c(){e=b("pre"),t=b("code"),g(t,"class","hljs"),Eo(e,s),Be(e,"langtag",o[0]),Be(e,"svelte-1xjucv4",!0)},m(r,l){v(r,e,l),h(e,t),t.innerHTML=o[1]},p(r,l){l&2&&(t.innerHTML=r[1]),Eo(e,s=zt(n,[{"data-language":"svelte"},l&4&&r[2]])),Be(e,"langtag",r[0]),Be(e,"svelte-1xjucv4",!0)},d(r){r&&w(e)}}}function Ju(o){let e;const t=o[5].default,n=Se(t,o,o[4],us),s=n||Qu(o);return{c(){s&&s.c()},m(r,l){s&&s.m(r,l),e=!0},p(r,[l]){n?n.p&&(!e||l&18)&&Ce(n,t,r,r[4],e?Ee(t,r[4],l,Xu):Ae(r[4]),us):s&&s.p&&(!e||l&7)&&s.p(r,e?l:-1)},i(r){e||($(s,r),e=!0)},o(r){k(s,r),e=!1},d(r){s&&s.d(r)}}}function ef(o,e,t){let n;const s=["code","langtag"];let r=bn(e,s),{$$slots:l={},$$scope:i}=e,{code:a=void 0}=e,{langtag:c=!1}=e;const u=to();return pn.registerLanguage("xml",Du),pn.registerLanguage("javascript",Uu),pn.registerLanguage("css",Vu),Kl(()=>{n&&u("highlight",{highlighted:n})}),o.$$set=f=>{e=nt(nt({},e),Sr(f)),t(2,r=bn(e,s)),"code"in f&&t(3,a=f.code),"langtag"in f&&t(0,c=f.langtag),"$$scope"in f&&t(4,i=f.$$scope)},o.$$.update=()=>{o.$$.dirty&8&&t(1,n=pn.highlightAuto(a).value)},[c,n,r,a,i,l]}class Ye extends Y{constructor(e){super(),Z(this,e,ef,Ju,K,{code:3,langtag:0})}}function tf(o){let e;return{c(){e=L("First")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function nf(o){let e;return{c(){e=L("Second")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function of(o){let e;return{c(){e=L("Third")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function fs(o){let e,t;return e=new de({props:{$$slots:{default:[sf]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,s){const r={};s&2050&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function sf(o){let e,t,n,s;return{c(){e=L("Fourth "),t=b("span"),t.textContent="\xD7"},m(r,l){v(r,e,l),v(r,t,l),n||(s=G(t,"click",o[4]),n=!0)},p:ee,d(r){r&&w(e),r&&w(t),n=!1,s()}}}function ps(o){let e,t;return e=new de({props:{$$slots:{default:[rf]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,s){const r={};s&2052&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function rf(o){let e,t,n,s;return{c(){e=L("Fifth "),t=b("span"),t.textContent="\xD7"},m(r,l){v(r,e,l),v(r,t,l),n||(s=G(t,"click",o[5]),n=!0)},p:ee,d(r){r&&w(e),r&&w(t),n=!1,s()}}}function lf(o){let e,t,n,s,r,l,i,a,c;e=new de({props:{$$slots:{default:[tf]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[nf]},$$scope:{ctx:o}}}),r=new de({props:{disabled:o[0],$$slots:{default:[of]},$$scope:{ctx:o}}});let u=o[1]&&fs(o),f=o[2]&&ps(o);return{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),u&&u.c(),i=x(),f&&f.c(),a=$e()},m(p,d){E(e,p,d),v(p,t,d),E(n,p,d),v(p,s,d),E(r,p,d),v(p,l,d),u&&u.m(p,d),v(p,i,d),f&&f.m(p,d),v(p,a,d),c=!0},p(p,d){const m={};d&2048&&(m.$$scope={dirty:d,ctx:p}),e.$set(m);const _={};d&2048&&(_.$$scope={dirty:d,ctx:p}),n.$set(_);const y={};d&1&&(y.disabled=p[0]),d&2048&&(y.$$scope={dirty:d,ctx:p}),r.$set(y),p[1]?u?(u.p(p,d),d&2&&$(u,1)):(u=fs(p),u.c(),$(u,1),u.m(i.parentNode,i)):u&&(he(),k(u,1,1,()=>{u=null}),me()),p[2]?f?(f.p(p,d),d&4&&$(f,1)):(f=ps(p),f.c(),$(f,1),f.m(a.parentNode,a)):f&&(he(),k(f,1,1,()=>{f=null}),me())},i(p){c||($(e.$$.fragment,p),$(n.$$.fragment,p),$(r.$$.fragment,p),$(u),$(f),c=!0)},o(p){k(e.$$.fragment,p),k(n.$$.fragment,p),k(r.$$.fragment,p),k(u),k(f),c=!1},d(p){C(e,p),p&&w(t),C(n,p),p&&w(s),C(r,p),p&&w(l),u&&u.d(p),p&&w(i),f&&f.d(p),p&&w(a)}}}function af(o){let e;return{c(){e=b("div"),e.textContent="These are the first diamonds I ever took from my first mine."},m(t,n){v(t,e,n)},p:ee,d(t){t&&w(e)}}}function cf(o){let e;return{c(){e=b("div"),e.textContent="The second stage supplements the first stage by adding the second rail tunnel."},m(t,n){v(t,e,n)},p:ee,d(t){t&&w(e)}}}function uf(o){let e;return{c(){e=b("div"),e.textContent="Let's not worry about third or fourth place."},m(t,n){v(t,e,n)},p:ee,d(t){t&&w(e)}}}function ds(o){let e,t;return e=new pe({props:{$$slots:{default:[ff]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ff(o){let e;return{c(){e=b("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,n){v(t,e,n)},p:ee,d(t){t&&w(e)}}}function hs(o){let e,t;return e=new pe({props:{$$slots:{default:[pf]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function pf(o){let e;return{c(){e=b("div"),e.textContent="The fourth is the process of Timorization through capacity-building."},m(t,n){v(t,e,n)},p:ee,d(t){t&&w(e)}}}function df(o){let e,t,n,s,r,l,i,a,c,u,f;e=new et({props:{$$slots:{default:[lf]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[af]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[cf]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[uf]},$$scope:{ctx:o}}});let p=o[1]&&ds(o),d=o[2]&&hs(o);return{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment),a=x(),p&&p.c(),c=x(),d&&d.c(),u=$e()},m(m,_){E(e,m,_),v(m,t,_),E(n,m,_),v(m,s,_),E(r,m,_),v(m,l,_),E(i,m,_),v(m,a,_),p&&p.m(m,_),v(m,c,_),d&&d.m(m,_),v(m,u,_),f=!0},p(m,_){const y={};_&2055&&(y.$$scope={dirty:_,ctx:m}),e.$set(y);const T={};_&2048&&(T.$$scope={dirty:_,ctx:m}),n.$set(T);const S={};_&2048&&(S.$$scope={dirty:_,ctx:m}),r.$set(S);const N={};_&2048&&(N.$$scope={dirty:_,ctx:m}),i.$set(N),m[1]?p?_&2&&$(p,1):(p=ds(m),p.c(),$(p,1),p.m(c.parentNode,c)):p&&(he(),k(p,1,1,()=>{p=null}),me()),m[2]?d?_&4&&$(d,1):(d=hs(m),d.c(),$(d,1),d.m(u.parentNode,u)):d&&(he(),k(d,1,1,()=>{d=null}),me())},i(m){f||($(e.$$.fragment,m),$(n.$$.fragment,m),$(r.$$.fragment,m),$(i.$$.fragment,m),$(p),$(d),f=!0)},o(m){k(e.$$.fragment,m),k(n.$$.fragment,m),k(r.$$.fragment,m),k(i.$$.fragment,m),k(p),k(d),f=!1},d(m){C(e,m),m&&w(t),C(n,m),m&&w(s),C(r,m),m&&w(l),C(i,m),m&&w(a),p&&p.d(m),m&&w(c),d&&d.d(m),m&&w(u)}}}function hf(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P,z,O,I,D,j,q,X={class:"mb-4",$$slots:{default:[df]},$$scope:{ctx:o}};return t=new Je({props:X}),o[6](t),I=new Ye({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=b("section"),A(t.$$.fragment),n=x(),s=b("div"),s.textContent="Use these controls to operate tabs.",r=x(),l=b("div"),i=b("label"),a=b("input"),c=L(" Fourth"),u=x(),f=b("label"),p=b("input"),d=L(" Fifth"),m=x(),_=b("label"),y=b("input"),T=L(" Disable Third"),S=x(),N=b("label"),R=L("Select\u2003"),M=b("input"),P=x(),z=b("h3"),z.textContent="Code",O=x(),A(I.$$.fragment),g(s,"class","py-2 border-t text-center text-gray-500"),g(a,"type","checkbox"),g(p,"type","checkbox"),g(y,"type","checkbox"),g(M,"class","input max-w-[6ch]"),g(M,"type","number"),g(M,"min","-5"),g(M,"max","4"),g(l,"class","flex items-center place-content-center gap-4"),g(e,"class","prose max-w-none my-4 svelte-1b9uk6h")},m(ne,W){v(ne,e,W),E(t,e,null),h(e,n),h(e,s),h(e,r),h(e,l),h(l,i),h(i,a),a.checked=o[1],h(i,c),h(l,u),h(l,f),h(f,p),p.checked=o[2],h(f,d),h(l,m),h(l,_),h(_,y),y.checked=o[0],h(_,T),h(l,S),h(l,N),h(N,R),h(N,M),h(e,P),h(e,z),h(e,O),E(I,e,null),D=!0,j||(q=[G(a,"change",o[7]),G(p,"change",o[8]),G(y,"change",o[9]),G(M,"change",jl(o[10]))],j=!0)},p(ne,[W]){const B={};W&2055&&(B.$$scope={dirty:W,ctx:ne}),t.$set(B),W&2&&(a.checked=ne[1]),W&4&&(p.checked=ne[2]),W&1&&(y.checked=ne[0])},i(ne){D||($(t.$$.fragment,ne),$(I.$$.fragment,ne),D=!0)},o(ne){k(t.$$.fragment,ne),k(I.$$.fragment,ne),D=!1},d(ne){ne&&w(e),o[6](null),C(t),C(I),j=!1,Re(q)}}}function mf(o,e,t){let n=!1,s=!1,r=!1,l;const i=()=>t(1,s=!1),a=()=>t(2,r=!1);function c(m){Le[m?"unshift":"push"](()=>{l=m,t(3,l)})}function u(){s=this.checked,t(1,s)}function f(){r=this.checked,t(2,r)}function p(){n=this.checked,t(0,n)}return[n,s,r,l,i,a,c,u,f,p,m=>l.selectTab(+m.currentTarget.value)]}class gf extends Y{constructor(e){super(),Z(this,e,mf,hf,K,{})}}function bf(o){let e;return{c(){e=L("First-A")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function _f(o){let e;return{c(){e=L("First-B")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function wf(o){let e;return{c(){e=L("First-C")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function $f(o){let e;return{c(){e=L("First-D")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function vf(o){let e;return{c(){e=L("First-E")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function yf(o){let e,t,n,s,r,l,i,a,c,u;return e=new de({props:{$$slots:{default:[bf]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[_f]},$$scope:{ctx:o}}}),r=new de({props:{disabled:!0,$$slots:{default:[wf]},$$scope:{ctx:o}}}),i=new de({props:{$$slots:{default:[$f]},$$scope:{ctx:o}}}),c=new de({props:{$$slots:{default:[vf]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment),a=x(),A(c.$$.fragment)},m(f,p){E(e,f,p),v(f,t,p),E(n,f,p),v(f,s,p),E(r,f,p),v(f,l,p),E(i,f,p),v(f,a,p),E(c,f,p),u=!0},p(f,p){const d={};p&2&&(d.$$scope={dirty:p,ctx:f}),e.$set(d);const m={};p&2&&(m.$$scope={dirty:p,ctx:f}),n.$set(m);const _={};p&2&&(_.$$scope={dirty:p,ctx:f}),r.$set(_);const y={};p&2&&(y.$$scope={dirty:p,ctx:f}),i.$set(y);const T={};p&2&&(T.$$scope={dirty:p,ctx:f}),c.$set(T)},i(f){u||($(e.$$.fragment,f),$(n.$$.fragment,f),$(r.$$.fragment,f),$(i.$$.fragment,f),$(c.$$.fragment,f),u=!0)},o(f){k(e.$$.fragment,f),k(n.$$.fragment,f),k(r.$$.fragment,f),k(i.$$.fragment,f),k(c.$$.fragment,f),u=!1},d(f){C(e,f),f&&w(t),C(n,f),f&&w(s),C(r,f),f&&w(l),C(i,f),f&&w(a),C(c,f)}}}function kf(o){let e;return{c(){e=L("Second-A")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function xf(o){let e;return{c(){e=L("Second-B")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Tf(o){let e;return{c(){e=L("Second-C")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Sf(o){let e,t,n,s,r,l;return e=new de({props:{$$slots:{default:[kf]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[xf]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[Tf]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment)},m(i,a){E(e,i,a),v(i,t,a),E(n,i,a),v(i,s,a),E(r,i,a),l=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){k(e.$$.fragment,i),k(n.$$.fragment,i),k(r.$$.fragment,i),l=!1},d(i){C(e,i),i&&w(t),C(n,i),i&&w(s),C(r,i)}}}function Ef(o){let e;return{c(){e=L("Fourth-A")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Cf(o){let e;return{c(){e=L("Fourth-B")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Af(o){let e,t,n,s;return e=new de({props:{$$slots:{default:[Ef]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Cf]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment)},m(r,l){E(e,r,l),v(r,t,l),E(n,r,l),s=!0},p(r,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:r}),e.$set(i);const a={};l&2&&(a.$$scope={dirty:l,ctx:r}),n.$set(a)},i(r){s||($(e.$$.fragment,r),$(n.$$.fragment,r),s=!0)},o(r){k(e.$$.fragment,r),k(n.$$.fragment,r),s=!1},d(r){C(e,r),r&&w(t),C(n,r)}}}function Rf(o){let e,t=o[0]+"",n;return{c(){e=L("Fourth of Second-B. Tab: A, index "),n=L(t)},m(s,r){v(s,e,r),v(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ye(n,t)},d(s){s&&w(e),s&&w(n)}}}function Nf(o){let e,t=o[0]+"",n;return{c(){e=L("Fourth of Second-B. Tab: B, index "),n=L(t)},m(s,r){v(s,e,r),v(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ye(n,t)},d(s){s&&w(e),s&&w(n)}}}function Mf(o){let e,t,n,s,r,l;return e=new et({props:{$$slots:{default:[Af]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Rf,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[Nf,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment)},m(i,a){E(e,i,a),v(i,t,a),E(n,i,a),v(i,s,a),E(r,i,a),l=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){k(e.$$.fragment,i),k(n.$$.fragment,i),k(r.$$.fragment,i),l=!1},d(i){C(e,i),i&&w(t),C(n,i),i&&w(s),C(r,i)}}}function Pf(o){let e,t,n=o[0]+"",s,r,l,i;return l=new Je({props:{class:"level-4",$$slots:{default:[Mf]},$$scope:{ctx:o}}}),{c(){e=b("div"),t=L("Second of First-A. Tab: A, index "),s=L(n),r=x(),A(l.$$.fragment)},m(a,c){v(a,e,c),h(e,t),h(e,s),v(a,r,c),E(l,a,c),i=!0},p(a,c){(!i||c&1)&&n!==(n=a[0]+"")&&ye(s,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),l.$set(u)},i(a){i||($(l.$$.fragment,a),i=!0)},o(a){k(l.$$.fragment,a),i=!1},d(a){a&&w(e),a&&w(r),C(l,a)}}}function zf(o){let e,t=o[0]+"",n;return{c(){e=L("Second of First-A. Tab: B, index "),n=L(t)},m(s,r){v(s,e,r),v(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ye(n,t)},d(s){s&&w(e),s&&w(n)}}}function Of(o){let e,t=o[0]+"",n;return{c(){e=L("Second of First-A. Tab: C, index "),n=L(t)},m(s,r){v(s,e,r),v(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ye(n,t)},d(s){s&&w(e),s&&w(n)}}}function If(o){let e,t,n,s,r,l,i,a;return e=new et({props:{$$slots:{default:[Sf]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Pf,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[zf,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[Of,({index:c})=>({0:c}),({index:c})=>c?1:0]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment)},m(c,u){E(e,c,u),v(c,t,u),E(n,c,u),v(c,s,u),E(r,c,u),v(c,l,u),E(i,c,u),a=!0},p(c,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&3&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const d={};u&3&&(d.$$scope={dirty:u,ctx:c}),r.$set(d);const m={};u&3&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){k(e.$$.fragment,c),k(n.$$.fragment,c),k(r.$$.fragment,c),k(i.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(s),C(r,c),c&&w(l),C(i,c)}}}function Lf(o){let e,t,n=o[0]+"",s,r,l,i;return l=new Je({props:{class:"level-2",$$slots:{default:[If]},$$scope:{ctx:o}}}),{c(){e=b("div"),t=L("First level. Tab: A, index "),s=L(n),r=x(),A(l.$$.fragment)},m(a,c){v(a,e,c),h(e,t),h(e,s),v(a,r,c),E(l,a,c),i=!0},p(a,c){(!i||c&1)&&n!==(n=a[0]+"")&&ye(s,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),l.$set(u)},i(a){i||($(l.$$.fragment,a),i=!0)},o(a){k(l.$$.fragment,a),i=!1},d(a){a&&w(e),a&&w(r),C(l,a)}}}function Df(o){let e;return{c(){e=L("Third-A")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function jf(o){let e;return{c(){e=L("Third-B")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Bf(o){let e,t,n,s;return e=new de({props:{$$slots:{default:[Df]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[jf]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment)},m(r,l){E(e,r,l),v(r,t,l),E(n,r,l),s=!0},p(r,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:r}),e.$set(i);const a={};l&2&&(a.$$scope={dirty:l,ctx:r}),n.$set(a)},i(r){s||($(e.$$.fragment,r),$(n.$$.fragment,r),s=!0)},o(r){k(e.$$.fragment,r),k(n.$$.fragment,r),s=!1},d(r){C(e,r),r&&w(t),C(n,r)}}}function Ff(o){let e,t=o[0]+"",n;return{c(){e=L("Third of First-B. Tab: A, index "),n=L(t)},m(s,r){v(s,e,r),v(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ye(n,t)},d(s){s&&w(e),s&&w(n)}}}function Hf(o){let e,t=o[0]+"",n;return{c(){e=L("Third of First-B. Tab: B, index "),n=L(t)},m(s,r){v(s,e,r),v(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ye(n,t)},d(s){s&&w(e),s&&w(n)}}}function Uf(o){let e,t,n,s,r,l;return e=new et({props:{$$slots:{default:[Bf]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Ff,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[Hf,({index:i})=>({0:i}),({index:i})=>i?1:0]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment)},m(i,a){E(e,i,a),v(i,t,a),E(n,i,a),v(i,s,a),E(r,i,a),l=!0},p(i,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&3&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&3&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){k(e.$$.fragment,i),k(n.$$.fragment,i),k(r.$$.fragment,i),l=!1},d(i){C(e,i),i&&w(t),C(n,i),i&&w(s),C(r,i)}}}function qf(o){let e,t,n=o[0]+"",s,r,l,i;return l=new Je({props:{class:"level-3",$$slots:{default:[Uf]},$$scope:{ctx:o}}}),{c(){e=b("div"),t=L("First level. Tab: B, index "),s=L(n),r=x(),A(l.$$.fragment)},m(a,c){v(a,e,c),h(e,t),h(e,s),v(a,r,c),E(l,a,c),i=!0},p(a,c){(!i||c&1)&&n!==(n=a[0]+"")&&ye(s,n);const u={};c&3&&(u.$$scope={dirty:c,ctx:a}),l.$set(u)},i(a){i||($(l.$$.fragment,a),i=!0)},o(a){k(l.$$.fragment,a),i=!1},d(a){a&&w(e),a&&w(r),C(l,a)}}}function Kf(o){let e,t=o[0]+"",n;return{c(){e=L("First level. Tab: C, index "),n=L(t)},m(s,r){v(s,e,r),v(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ye(n,t)},d(s){s&&w(e),s&&w(n)}}}function Wf(o){let e,t=o[0]+"",n;return{c(){e=L("First level. Tab: D, index "),n=L(t)},m(s,r){v(s,e,r),v(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ye(n,t)},d(s){s&&w(e),s&&w(n)}}}function Gf(o){let e,t=o[0]+"",n;return{c(){e=L("First level. Tab: E, index "),n=L(t)},m(s,r){v(s,e,r),v(s,n,r)},p(s,r){r&1&&t!==(t=s[0]+"")&&ye(n,t)},d(s){s&&w(e),s&&w(n)}}}function Zf(o){let e,t,n,s,r,l,i,a,c,u,f,p;return e=new et({props:{$$slots:{default:[yf]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Lf,({index:d})=>({0:d}),({index:d})=>d?1:0]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[qf,({index:d})=>({0:d}),({index:d})=>d?1:0]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[Kf,({index:d})=>({0:d}),({index:d})=>d?1:0]},$$scope:{ctx:o}}}),c=new pe({props:{$$slots:{default:[Wf,({index:d})=>({0:d}),({index:d})=>d?1:0]},$$scope:{ctx:o}}}),f=new pe({props:{$$slots:{default:[Gf,({index:d})=>({0:d}),({index:d})=>d?1:0]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment),a=x(),A(c.$$.fragment),u=x(),A(f.$$.fragment)},m(d,m){E(e,d,m),v(d,t,m),E(n,d,m),v(d,s,m),E(r,d,m),v(d,l,m),E(i,d,m),v(d,a,m),E(c,d,m),v(d,u,m),E(f,d,m),p=!0},p(d,m){const _={};m&2&&(_.$$scope={dirty:m,ctx:d}),e.$set(_);const y={};m&3&&(y.$$scope={dirty:m,ctx:d}),n.$set(y);const T={};m&3&&(T.$$scope={dirty:m,ctx:d}),r.$set(T);const S={};m&3&&(S.$$scope={dirty:m,ctx:d}),i.$set(S);const N={};m&3&&(N.$$scope={dirty:m,ctx:d}),c.$set(N);const R={};m&3&&(R.$$scope={dirty:m,ctx:d}),f.$set(R)},i(d){p||($(e.$$.fragment,d),$(n.$$.fragment,d),$(r.$$.fragment,d),$(i.$$.fragment,d),$(c.$$.fragment,d),$(f.$$.fragment,d),p=!0)},o(d){k(e.$$.fragment,d),k(n.$$.fragment,d),k(r.$$.fragment,d),k(i.$$.fragment,d),k(c.$$.fragment,d),k(f.$$.fragment,d),p=!1},d(d){C(e,d),d&&w(t),C(n,d),d&&w(s),C(r,d),d&&w(l),C(i,d),d&&w(a),C(c,d),d&&w(u),C(f,d)}}}function Yf(o){let e,t,n,s,r,l,i;return t=new Je({props:{class:"level-1 min-h-[280px]",$$slots:{default:[Zf]},$$scope:{ctx:o}}}),l=new Ye({props:{code:`<section class="prose max-w-none my-4">
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
</style>`}}),{c(){e=b("section"),A(t.$$.fragment),n=x(),s=b("h3"),s.textContent="Code",r=x(),A(l.$$.fragment),g(e,"class","prose max-w-none my-4 svelte-3sljvb")},m(a,c){v(a,e,c),E(t,e,null),h(e,n),h(e,s),h(e,r),E(l,e,null),i=!0},p(a,[c]){const u={};c&2&&(u.$$scope={dirty:c,ctx:a}),t.$set(u)},i(a){i||($(t.$$.fragment,a),$(l.$$.fragment,a),i=!0)},o(a){k(t.$$.fragment,a),k(l.$$.fragment,a),i=!1},d(a){a&&w(e),C(t),C(l)}}}class Vf extends Y{constructor(e){super(),Z(this,e,null,Yf,K,{})}}function ms(o,e,t){const n=o.slice();return n[13]=e[t],n}function gs(o,e,t){const n=o.slice();return n[17]=e[t],n}function bs(o,e,t){const n=o.slice();return n[21]=e[t],n[23]=t,n}function _s(o,e,t){const n=o.slice();return n[21]=e[t],n}function Xf(o){let e,t,n={ctx:o,current:null,token:null,hasCatch:!0,pending:tp,then:ep,catch:Jf,value:24,error:20};return $n(t=o[1],n),{c(){e=$e(),n.block.c()},m(s,r){v(s,e,r),n.block.m(s,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e},p(s,r){o=s,n.ctx=o,r&2&&t!==(t=o[1])&&$n(t,n)||Or(n,o,r)},d(s){s&&w(e),n.block.d(s),n.token=null,n=null}}}function Qf(o){let e,t,n;return{c(){e=b("button"),e.textContent="Request authors",g(e,"class","input")},m(s,r){v(s,e,r),t||(n=G(e,"click",o[8]),t=!0)},p:ee,d(s){s&&w(e),t=!1,n()}}}function Jf(o){let e,t,n,s=(o[20]instanceof Error?o[20].message:o[20])+"",r;return{c(){e=b("div"),t=L("Loading authors error: "),n=b("strong"),r=L(s),g(n,"class","text-red-600"),g(e,"class","text-red-400")},m(l,i){v(l,e,i),h(e,t),h(e,n),h(n,r)},p(l,i){i&2&&s!==(s=(l[20]instanceof Error?l[20].message:l[20])+"")&&ye(r,s)},d(l){l&&w(e)}}}function ep(o){let e,t,n,s,r,l,i,a,c,u,f=o[24],p=[];for(let d=0;d<f.length;d+=1)p[d]=ws(_s(o,f,d));return{c(){e=b("div"),t=b("select"),n=b("option"),s=L("Select author");for(let d=0;d<p.length;d+=1)p[d].c();r=x(),l=b("button"),i=L("Get quotes"),n.__value=void 0,n.value=n.__value,n.hidden=!0,g(t,"class","input"),o[2]===void 0&&Qe(()=>o[9].call(t)),g(l,"class","input"),l.disabled=a=o[2]==null},m(d,m){v(d,e,m),h(e,t),h(t,n),h(n,s);for(let _=0;_<p.length;_+=1)p[_].m(t,null);ft(t,o[2]),h(e,r),h(e,l),h(l,i),c||(u=[G(t,"change",o[9]),G(l,"click",o[10])],c=!0)},p(d,m){if(m&10){f=d[24];let _;for(_=0;_<f.length;_+=1){const y=_s(d,f,_);p[_]?p[_].p(y,m):(p[_]=ws(y),p[_].c(),p[_].m(t,null))}for(;_<p.length;_+=1)p[_].d(1);p.length=f.length}m&6&&ft(t,d[2]),m&6&&a!==(a=d[2]==null)&&(l.disabled=a)},d(d){d&&w(e),Fe(p,d),c=!1,Re(u)}}}function ws(o){let e,t=o[21].name+"",n,s,r=o[21].quoteCount+"",l,i,a;return{c(){e=b("option"),n=L(t),s=L(": "),l=L(r),e.__value=i=o[21],e.value=e.__value,e.disabled=a=o[3].includes(o[21])},m(c,u){v(c,e,u),h(e,n),h(e,s),h(e,l)},p(c,u){u&2&&t!==(t=c[21].name+"")&&ye(n,t),u&2&&r!==(r=c[21].quoteCount+"")&&ye(l,r),u&2&&i!==(i=c[21])&&(e.__value=i,e.value=e.__value),u&10&&a!==(a=c[3].includes(c[21]))&&(e.disabled=a)},d(c){c&&w(e)}}}function tp(o){let e,t,n;return{c(){e=b("div"),t=x(),n=b("div"),n.textContent="Loading authors...",g(e,"class","text-blue-800 "+o[5]),g(n,"class","text-blue-800")},m(s,r){v(s,e,r),v(s,t,r),v(s,n,r)},p:ee,d(s){s&&w(e),s&&w(t),s&&w(n)}}}function $s(o){let e,t,n={class:"my-4 py-4 border-y border-gray-300",$$slots:{default:[ap]},$$scope:{ctx:o}};return e=new Je({props:n}),o[12](e),{c(){A(e.$$.fragment)},m(s,r){E(e,s,r),t=!0},p(s,r){const l={};r&134217752&&(l.$$scope={dirty:r,ctx:s}),e.$set(l)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){k(e.$$.fragment,s),t=!1},d(s){o[12](null),C(e,s)}}}function np(o){let e,t,n,s=o[21].name+"",r,l,i,a,c=o[21].quoteCount+"",u,f,p,d;function m(){return o[11](o[23])}return{c(){e=b("button"),e.textContent="\xD7",t=x(),n=b("span"),r=L(s),i=x(),a=b("span"),u=L(c),f=x(),g(e,"class","text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"),g(n,"class","grow text-left overflow-hidden text-ellipsis whitespace-nowrap"),g(n,"title",l=o[21].name),g(a,"class","text-xs px-1 rounded-md bg-gray-600 text-white font-bold")},m(_,y){v(_,e,y),v(_,t,y),v(_,n,y),h(n,r),v(_,i,y),v(_,a,y),h(a,u),v(_,f,y),p||(d=G(e,"click",m),p=!0)},p(_,y){o=_,y&8&&s!==(s=o[21].name+"")&&ye(r,s),y&8&&l!==(l=o[21].name)&&g(n,"title",l),y&8&&c!==(c=o[21].quoteCount+"")&&ye(u,c)},d(_){_&&w(e),_&&w(t),_&&w(n),_&&w(i),_&&w(a),_&&w(f),p=!1,d()}}}function vs(o){let e,t;return e=new de({props:{class:"flex items-center gap-2",$$slots:{default:[np]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,s){const r={};s&134217736&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function op(o){let e,t,n=o[3],s=[];for(let l=0;l<n.length;l+=1)s[l]=vs(bs(o,n,l));const r=l=>k(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$e()},m(l,i){for(let a=0;a<s.length;a+=1)s[a].m(l,i);v(l,e,i),t=!0},p(l,i){if(i&136){n=l[3];let a;for(a=0;a<n.length;a+=1){const c=bs(l,n,a);s[a]?(s[a].p(c,i),$(s[a],1)):(s[a]=vs(c),s[a].c(),$(s[a],1),s[a].m(e.parentNode,e))}for(he(),a=n.length;a<s.length;a+=1)r(a);me()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)$(s[i]);t=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)k(s[i]);t=!1},d(l){Fe(s,l),l&&w(e)}}}function sp(o){let e,t,n,s,r,l,i=(o[20]instanceof Error?o[20].message:o[20])+"",a;return{c(){e=b("div"),t=b("div"),n=b("div"),n.textContent="Loading quotes error",s=x(),r=b("div"),l=b("strong"),a=L(i),g(n,"class","text-red-400"),g(l,"class","text-red-600"),g(t,"class","flex flex-col items-center"),g(e,"class","h-full flex items-center justify-center")},m(c,u){v(c,e,u),h(e,t),h(t,n),h(t,s),h(t,r),h(r,l),h(l,a)},p(c,u){u&16&&i!==(i=(c[20]instanceof Error?c[20].message:c[20])+"")&&ye(a,i)},d(c){c&&w(e)}}}function rp(o){let e,t=o[16],n=[];for(let s=0;s<t.length;s+=1)n[s]=ys(gs(o,t,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=$e()},m(s,r){for(let l=0;l<n.length;l+=1)n[l].m(s,r);v(s,e,r)},p(s,r){if(r&16){t=s[16];let l;for(l=0;l<t.length;l+=1){const i=gs(s,t,l);n[l]?n[l].p(i,r):(n[l]=ys(i),n[l].c(),n[l].m(e.parentNode,e))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}},d(s){Fe(n,s),s&&w(e)}}}function ys(o){let e,t,n,s,r,l=o[17].en+"",i,a,c,u=o[17].author+"",f,p;return{c(){e=b("div"),t=b("span"),t.textContent="\u201C",n=x(),s=b("div"),r=b("div"),i=L(l),a=x(),c=b("div"),f=L(u),p=x(),g(t,"class","text-gray-200 text-7xl font-bold leading-[75%] mr-2"),g(r,"class","mb-3 leading-6"),g(c,"class","font-semibold italic text-right"),g(s,"class","grow"),g(e,"class","mb-2 last:mb-0 flex items-start")},m(d,m){v(d,e,m),h(e,t),h(e,n),h(e,s),h(s,r),h(r,i),h(s,a),h(s,c),h(c,f),h(e,p)},p(d,m){m&16&&l!==(l=d[17].en+"")&&ye(i,l),m&16&&u!==(u=d[17].author+"")&&ye(f,u)},d(d){d&&w(e)}}}function lp(o){let e,t,n,s,r;return{c(){e=b("div"),t=b("div"),n=b("div"),s=x(),r=b("div"),r.textContent="Loading quotes...",g(n,"class","text-blue-800 w-12 h-12 "+o[5]),g(r,"class","text-blue-800"),g(t,"class","flex flex-col items-center"),g(e,"class","h-full flex items-center justify-center")},m(l,i){v(l,e,i),h(e,t),h(t,n),h(t,s),h(t,r)},p:ee,d(l){l&&w(e)}}}function ip(o){let e,t,n={ctx:o,current:null,token:null,hasCatch:!0,pending:lp,then:rp,catch:sp,value:16,error:20};return $n(e=o[13],n),{c(){n.block.c(),t=x()},m(s,r){n.block.m(s,n.anchor=r),n.mount=()=>t.parentNode,n.anchor=t,v(s,t,r)},p(s,r){o=s,n.ctx=o,r&16&&e!==(e=o[13])&&$n(e,n)||Or(n,o,r)},d(s){n.block.d(s),n.token=null,n=null,s&&w(t)}}}function ks(o){let e,t;return e=new pe({props:{class:"px-4",$$slots:{default:[ip]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,s){const r={};s&134217744&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ap(o){let e,t,n,s;e=new et({props:{class:"basis-[24ch] shrink-0",$$slots:{default:[op]},$$scope:{ctx:o}}});let r=o[4],l=[];for(let a=0;a<r.length;a+=1)l[a]=ks(ms(o,r,a));const i=a=>k(l[a],1,1,()=>{l[a]=null});return{c(){A(e.$$.fragment),t=x(),n=b("div");for(let a=0;a<l.length;a+=1)l[a].c();g(n,"class","grow")},m(a,c){E(e,a,c),v(a,t,c),v(a,n,c);for(let u=0;u<l.length;u+=1)l[u].m(n,null);s=!0},p(a,c){const u={};if(c&134217736&&(u.$$scope={dirty:c,ctx:a}),e.$set(u),c&48){r=a[4];let f;for(f=0;f<r.length;f+=1){const p=ms(a,r,f);l[f]?(l[f].p(p,c),$(l[f],1)):(l[f]=ks(p),l[f].c(),$(l[f],1),l[f].m(n,null))}for(he(),f=r.length;f<l.length;f+=1)i(f);me()}},i(a){if(!s){$(e.$$.fragment,a);for(let c=0;c<r.length;c+=1)$(l[c]);s=!0}},o(a){k(e.$$.fragment,a),l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)k(l[c]);s=!1},d(a){C(e,a),a&&w(t),a&&w(n),Fe(l,a)}}}function cp(o){let e,t,n,s,r,l,i,a,c,u;function f(_,y){return _[1]==null?Qf:Xf}let p=f(o),d=p(o),m=o[3].length&&$s(o);return c=new Ye({props:{code:`<script lang="ts">
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
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api">API</a>`,n=x(),s=b("div"),d.c(),r=x(),m&&m.c(),l=x(),i=b("h3"),i.textContent="Code",a=x(),A(c.$$.fragment),g(t,"class","mb-4 text-center"),g(s,"class","flex items-center justify-center gap-2"),g(e,"class","prose max-w-none my-4 svelte-unmfi5")},m(_,y){v(_,e,y),h(e,t),h(e,n),h(e,s),d.m(s,null),h(e,r),m&&m.m(e,null),h(e,l),h(e,i),h(e,a),E(c,e,null),u=!0},p(_,[y]){p===(p=f(_))&&d?d.p(_,y):(d.d(1),d=p(_),d&&(d.c(),d.m(s,null))),_[3].length?m?(m.p(_,y),y&8&&$(m,1)):(m=$s(_),m.c(),$(m,1),m.m(e,l)):m&&(he(),k(m,1,1,()=>{m=null}),me())},i(_){u||($(m),$(c.$$.fragment,_),u=!0)},o(_){k(m),k(c.$$.fragment,_),u=!1},d(_){_&&w(e),d.d(),m&&m.d(),C(c)}}}const rl="https://programming-quotes-api.herokuapp.com";function up(){return Ge(this,null,function*(){const o=yield fetch(rl+"/Authors");if(o.status>=400){const n=yield o.text();throw new Error(`${o.status}: ${n||o.statusText}`)}const e=o.headers.get("content-type");if(!e||!e.includes("application/json"))throw new TypeError("Wrong content-type");const t=yield o.json();return Object.values(t).sort((n,s)=>n.name.localeCompare(s.name))})}function fp(o){return Ge(this,null,function*(){const e=yield fetch(rl+"/Quotes/author/"+o);if(e.status>=400){const n=yield e.text();throw new Error(`${e.status}: ${n||e.statusText}`)}const t=e.headers.get("content-type");if(!t||!t.includes("application/json"))throw new TypeError("Wrong content-type");return yield e.json()})}function pp(o,e,t){const n="w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin";let s,r,l,i=[],a=[];function c(y){return y!=null&&!i.includes(y)?(t(3,i=[y,...i]),t(4,a=[fp(y.name),...a]),s==null||s.selectTab(0),!0):!1}function u(y){y>=0&&y<i.length&&(t(3,i=[...i.slice(0,y),...i.slice(y+1)]),t(4,a=[...a.slice(0,y),...a.slice(y+1)]))}const f=()=>{t(1,r=up())};function p(){l=Qt(this),t(2,l),t(1,r)}const d=()=>c(l)?t(2,l=void 0):void 0,m=y=>u(y);function _(y){Le[y?"unshift":"push"](()=>{s=y,t(0,s)})}return[s,r,l,i,a,n,c,u,f,p,d,m,_]}class dp extends Y{constructor(e){super(),Z(this,e,pp,cp,K,{})}}const{document:xs}=St;function hp(o){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function mp(o){let e;return{c(){e=L("Base example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function gp(o){let e;return{c(){e=L("Nested Example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function bp(o){let e;return{c(){e=L("Quotes Example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function _p(o){let e,t,n,s,r,l,i,a;return e=new de({props:{$$slots:{default:[hp]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[mp]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[gp]},$$scope:{ctx:o}}}),i=new de({props:{$$slots:{default:[bp]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment)},m(c,u){E(e,c,u),v(c,t,u),E(n,c,u),v(c,s,u),E(r,c,u),v(c,l,u),E(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),r.$set(d);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){k(e.$$.fragment,c),k(n.$$.fragment,c),k(r.$$.fragment,c),k(i.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(s),C(r,c),c&&w(l),C(i,c)}}}function wp(o){let e,t;return e=new Hc({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function $p(o){let e,t;return e=new gf({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function vp(o){let e,t;return e=new Vf({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function yp(o){let e,t;return e=new dp({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function kp(o){let e,t,n,s,r,l,i,a,c,u;return e=new et({props:{$$slots:{default:[_p]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[wp]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[$p]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[vp]},$$scope:{ctx:o}}}),c=new pe({props:{$$slots:{default:[yp]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment),a=x(),A(c.$$.fragment)},m(f,p){E(e,f,p),v(f,t,p),E(n,f,p),v(f,s,p),E(r,f,p),v(f,l,p),E(i,f,p),v(f,a,p),E(c,f,p),u=!0},p(f,p){const d={};p&1&&(d.$$scope={dirty:p,ctx:f}),e.$set(d);const m={};p&1&&(m.$$scope={dirty:p,ctx:f}),n.$set(m);const _={};p&1&&(_.$$scope={dirty:p,ctx:f}),r.$set(_);const y={};p&1&&(y.$$scope={dirty:p,ctx:f}),i.$set(y);const T={};p&1&&(T.$$scope={dirty:p,ctx:f}),c.$set(T)},i(f){u||($(e.$$.fragment,f),$(n.$$.fragment,f),$(r.$$.fragment,f),$(i.$$.fragment,f),$(c.$$.fragment,f),u=!0)},o(f){k(e.$$.fragment,f),k(n.$$.fragment,f),k(r.$$.fragment,f),k(i.$$.fragment,f),k(c.$$.fragment,f),u=!1},d(f){C(e,f),f&&w(t),C(n,f),f&&w(s),C(r,f),f&&w(l),C(i,f),f&&w(a),C(c,f)}}}function xp(o){let e,t,n,s,r,l,i,a,c,u,f;return xs.title=e=document.title.replace(/(•).*$/,"$1 Tabs"),u=new Je({props:{$$slots:{default:[kp]},$$scope:{ctx:o}}}),{c(){t=x(),n=b("section"),s=b("a"),s.textContent="Home",r=x(),l=b("h1"),l.textContent="A set of components for organizing a tabbed interface",i=x(),a=b("ul"),a.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>with context to control tab switching</li> 
    <li><a href="https://www.npmjs.com/package/@apsc/tabs">NPM</a></li>`,c=x(),A(u.$$.fragment),g(s,"class","float-right"),g(s,"href","/"),g(l,"class","text-2xl"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(p,d){v(p,t,d),v(p,n,d),h(n,s),h(n,r),h(n,l),h(n,i),h(n,a),h(n,c),E(u,n,null),f=!0},p(p,[d]){(!f||d&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Tabs"))&&(xs.title=e);const m={};d&1&&(m.$$scope={dirty:d,ctx:p}),u.$set(m)},i(p){f||($(u.$$.fragment,p),f=!0)},o(p){k(u.$$.fragment,p),f=!1},d(p){p&&w(t),p&&w(n),C(u)}}}class Tp extends Y{constructor(e){super(),Z(this,e,null,xp,K,{})}}var Sp=`<div class="component__source">Source <code>Notifications.svelte</code></div>
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
<td class="exports__description">Store of notifications</td></tr></table>`;function Ep(o){let e,t,n;return t=new It({props:{source:Sp}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(s,r){v(s,e,r),E(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){s&&w(e),C(t)}}}class Cp extends Y{constructor(e){super(),Z(this,e,null,Ep,K,{})}}var Ap=`.c-notifications {
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
`,Rp=`.c-notifications {
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
`;function Np(o){return o<.5?4*o*o*o:.5*Math.pow(2*o-2,3)+1}function ll(o){const e=o-1;return e*e*e+1}function Mp(o,{delay:e=0,duration:t=400,easing:n=Np,amount:s=5,opacity:r=0}={}){const l=getComputedStyle(o),i=+l.opacity,a=l.filter==="none"?"":l.filter,c=i*(1-r);return{delay:e,duration:t,easing:n,css:(u,f)=>`opacity: ${i-c*f}; filter: ${a} blur(${f*s}px);`}}function Pp(o,{delay:e=0,duration:t=400,easing:n=yr}={}){const s=+getComputedStyle(o).opacity;return{delay:e,duration:t,easing:n,css:r=>`opacity: ${r*s}`}}function Kt(o,{delay:e=0,duration:t=400,easing:n=ll}={}){const s=getComputedStyle(o),r=+s.opacity,l=parseFloat(s.height),i=parseFloat(s.paddingTop),a=parseFloat(s.paddingBottom),c=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),f=parseFloat(s.borderTopWidth),p=parseFloat(s.borderBottomWidth);return{delay:e,duration:t,easing:n,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*r};height: ${d*l}px;padding-top: ${d*i}px;padding-bottom: ${d*a}px;margin-top: ${d*c}px;margin-bottom: ${d*u}px;border-top-width: ${d*f}px;border-bottom-width: ${d*p}px;`}}function zp(o,{delay:e=0,duration:t=400,easing:n=ll,start:s=0,opacity:r=0}={}){const l=getComputedStyle(o),i=+l.opacity,a=l.transform==="none"?"":l.transform,c=1-s,u=i*(1-r);return{delay:e,duration:t,easing:n,css:(f,p)=>`
			transform: ${a} scale(${1-c*p});
			opacity: ${i-u*p}
		`}}function Ts(o,e,t){const n=o.slice();return n[8]=e[t],n}const Op=o=>({notification:o&16}),Ss=o=>({notification:o[8]});function Ip(o){let e,t,n=(o[8].message||"No message")+"",s,r,l,i,a,c,u,f;function p(){return o[7](o[8])}return{c(){e=b("div"),t=b("span"),s=x(),r=b("span"),l=x(),g(t,"class","c-notifications__item__message"),g(r,"role","button"),g(r,"aria-label","Close notification"),g(r,"class","c-notifications__item__close"),g(e,"class",i="c-notifications__item"+(o[8].type?" "+o[8].type:""))},m(d,m){v(d,e,m),h(e,t),t.innerHTML=n,h(e,s),h(e,r),h(e,l),c=!0,u||(f=G(r,"click",p),u=!0)},p(d,m){o=d,(!c||m&16)&&n!==(n=(o[8].message||"No message")+"")&&(t.innerHTML=n),(!c||m&16&&i!==(i="c-notifications__item"+(o[8].type?" "+o[8].type:"")))&&g(e,"class",i)},i(d){c||(Qe(()=>{a||(a=yt(e,o[2],o[3],!0)),a.run(1)}),c=!0)},o(d){a||(a=yt(e,o[2],o[3],!1)),a.run(0),c=!1},d(d){d&&w(e),d&&a&&a.end(),u=!1,f()}}}function Es(o,e){let t,n;const s=e[6].default,r=Se(s,e,e[5],Ss),l=r||Ip(e);return{key:o,first:null,c(){t=$e(),l&&l.c(),this.first=t},m(i,a){v(i,t,a),l&&l.m(i,a),n=!0},p(i,a){e=i,r?r.p&&(!n||a&48)&&Ce(r,s,e,e[5],n?Ee(s,e[5],a,Op):Ae(e[5]),Ss):l&&l.p&&(!n||a&24)&&l.p(e,n?a:-1)},i(i){n||($(l,i),n=!0)},o(i){k(l,i),n=!1},d(i){i&&w(t),l&&l.d(i)}}}function Lp(o){let e,t=[],n=new Map,s,r,l,i=o[4];const a=c=>c[8].id;for(let c=0;c<i.length;c+=1){let u=Ts(o,i,c),f=a(u);n.set(f,t[c]=Es(f,u))}return{c(){e=b("div");for(let c=0;c<t.length;c+=1)t[c].c();g(e,"class",s="c-notifications"+(o[0]?" "+o[0]:"")),g(e,"style",r=o[1]||void 0)},m(c,u){v(c,e,u);for(let f=0;f<t.length;f+=1)t[f].m(e,null);l=!0},p(c,[u]){u&56&&(i=c[4],he(),t=Xl(t,u,a,1,c,i,n,e,Vl,Es,null,Ts),me()),(!l||u&1&&s!==(s="c-notifications"+(c[0]?" "+c[0]:"")))&&g(e,"class",s),(!l||u&2&&r!==(r=c[1]||void 0))&&g(e,"style",r)},i(c){if(!l){for(let u=0;u<i.length;u+=1)$(t[u]);l=!0}},o(c){for(let u=0;u<t.length;u+=1)k(t[u]);l=!1},d(c){c&&w(e);for(let u=0;u<t.length;u+=1)t[u].d()}}}let gn=!1;const Sn=function(){const{subscribe:o,set:e,update:t}=qt([]);return{subscribe:o,clear(){e([])},push(n){if(!gn)throw new Error("No Notification component instance");const s=He({id:Symbol("Notification")},n);return t(r=>[...r,s]),n.timeout&&n.timeout>0&&setTimeout(()=>this.pop(s.id),n.timeout),s.id},pop(n){t(s=>{const r=s.findIndex(l=>l.id===n);return r>=0&&s.splice(r,1),s})}}}();function Dp(o,e,t){let n,s=ee;Ht(o,Sn,p=>t(4,n=p)),o.$$.on_destroy.push(()=>s());let{$$slots:r={},$$scope:l}=e,{class:i=""}=e,{style:a=""}=e,{transitionFn:c=Kt}=e,{transitionParams:u={}}=e;Pt(()=>{if(gn)throw new Error("The Notifications component already has an instance");gn=!0}),Zn(()=>gn=!1);const f=p=>Sn.pop(p.id);return o.$$set=p=>{"class"in p&&t(0,i=p.class),"style"in p&&t(1,a=p.style),"transitionFn"in p&&t(2,c=p.transitionFn),"transitionParams"in p&&t(3,u=p.transitionParams),"$$scope"in p&&t(5,l=p.$$scope)},[i,a,c,u,n,l,r,f]}class jp extends Y{constructor(e){super(),Z(this,e,Dp,Lp,K,{class:0,style:1,transitionFn:2,transitionParams:3})}}var Kn=[{author:"Edsger W. Dijkstra",en:"Computer Science is no more about computers than astronomy is about telescopes."},{author:"Edsger W. Dijkstra",en:"Simplicity is prerequisite for reliability."},{author:"Edsger W. Dijkstra",en:"The computing scientist\u2019s main challenge is not to get confused by the complexities of his own making."},{author:"Edsger W. Dijkstra",en:"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},{author:"Edsger W. Dijkstra",en:"A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure \u201Eprogrammer productivity\u201C in terms of \u201Enumber of lines of code produced\u201C. In so doing they book that number on the wrong side of the ledger: We should always refer to \u201Ethe number of lines of code spent\u201C."},{author:"Tony Hoare",en:"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},{author:"Jeff Hammerbacher",en:"The best minds of my generation are thinking about how to make people click ads."},{author:"Edsger W. Dijkstra",en:"The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities."},{author:"Edsger W. Dijkstra",en:'How do we convince people that in programming simplicity and clarity \u2014 in short: what mathematicians call "elegance" \u2014 are not a dispensable luxury, but a crucial matter that decides between success and failure?'},{author:"Fred Brooks",en:"Adding manpower to a late software project makes it later."},{author:"Michael Stal",en:"Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person."},{author:"Fred Brooks",en:"Nine women can't make a baby in one month."},{author:"Jeff Sickel",en:"Deleted code is debugged code."},{author:"Ken Thompson",en:"When in doubt, use brute force."},{author:"Fred Brooks",en:"When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned."},{author:"Fred Brooks",en:"If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two."},{author:"Fred Brooks",en:"Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect."},{author:"Fred Brooks",en:"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures."},{author:"Fred Brooks",en:'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.'},{author:"Donald Knuth",en:"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%."},{author:"Ken Thompson",en:"One of my most productive days was throwing away 1,000 lines of code."},{author:"Grace Hopper",en:"One accurate measurement is worth more than a thousand expert opinions."},{author:"Fred Brooks",en:"What one programmer can do in one month, two programmers can do in two months."},{author:"Rick Osborne",en:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},{author:"John Ousterhout",en:"A program that produces incorrect results twice as fast is infinitely slower."},{author:"Poul Anderson",en:"I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated."},{author:"Robert C. Martin",en:"Cleaning code does NOT take time. NOT cleaning code does take time."},{author:"David Gelernter",en:"Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity."},{author:"Edward V. Berard",en:"Walking on water and developing software from a specification are easy if both are frozen."},{author:"Brian Kernighan",en:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},{author:"Brian Kernighan",en:"Controlling complexity is the essence of computer programming."},{author:"Chris Wenham",en:"Debugging time increases as a square of the program\u2019s size."},{author:"Seymour Cray",en:"The trouble with programmers is that you can never tell what a programmer is doing until it\u2019s too late."},{author:"Ron Jeffries",en:"Code never lies, comments sometimes do."},{author:"Laurence J. Peter",en:"Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them."},{author:"Poul-Henning Kamp",en:'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.'},{author:"Albert Einstein",en:"I have no special talent. I am only passionately curious."},{author:"Robert C. Martin",en:"The proper use of comments is to compensate for our failure to express ourself in code."},{author:"Rob Pike",en:"When there is no type hierarchy you don\u2019t have to manage the type hierarchy."},{author:"Steve Jobs",en:"Everybody should learn to program a computer, because it teaches you how to think."},{author:"Chris Sacca",en:"Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for."},{author:"Bill Gates",en:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},{author:"William Wulf",en:"More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity."},{author:"Edsger W. Dijkstra",en:"Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence."},{author:"Albert Einstein",en:"Imagination is more important than knowledge."}];function Cs(o,e,t){const n=o.slice();return n[20]=e[t],n}function As(o,e,t){const n=o.slice();return n[23]=e[t],n}function Rs(o){let e,t,n,s,r=o[23]+"",l,i,a;return{c(){e=b("label"),t=b("input"),s=x(),l=L(r),g(t,"type","radio"),g(t,"name","styles"),t.__value=n=o[23],t.value=t.__value,o[12][2].push(t),g(e,"class","mr-2 last:mr-0")},m(c,u){v(c,e,u),h(e,t),t.checked=t.__value===o[3],h(e,s),h(e,l),i||(a=G(t,"change",o[17]),i=!0)},p(c,u){u&8&&(t.checked=t.__value===c[3])},d(c){c&&w(e),o[12][2].splice(o[12][2].indexOf(t),1),i=!1,a()}}}function Ns(o){let e,t=o[20]+"",n,s;return{c(){e=b("option"),n=L(t),e.__value=s=o[20],e.value=e.__value},m(r,l){v(r,e,l),h(e,n)},p:ee,d(r){r&&w(e)}}}function Bp(o){let e,t=`<style type="text/css" data-text="test">${o[7][o[3]]}</style>`,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P,z,O,I,D,j,q,X,ne,W,B,H,oe,re,ue,ce,ze,Ie,ke,be,te,xe,fe,ge,Q,Oe,Te,_e,Ne,ct,We,ie,Dt,De,ve,tt,st,jt;l=new jp({props:{style:"display: flex; "+o[0]+o[1]}});let ut=Object.keys(o[7]),F=[];for(let U=0;U<ut.length;U+=1)F[U]=Rs(As(o,ut,U));let J=o[8],se=[];for(let U=0;U<J.length;U+=1)se[U]=Ns(Cs(o,J,U));return ve=new Ye({props:{code:`<script lang="ts">
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
</section>`}}),{c(){e=new Nr(!1),n=$e(),s=x(),r=b("section"),A(l.$$.fragment),i=x(),a=b("div"),a.innerHTML='This example uses quotes from the <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api">API</a>  <a target="_blank" href="https://github.com/skolakoda">\u0160kola koda</a>',c=x(),u=b("form"),f=b("div"),p=b("div"),d=b("div"),d.textContent="Side",m=x(),_=b("label"),y=b("input"),T=L(" left"),S=x(),N=b("label"),R=b("input"),M=L(" right"),P=x(),z=b("div"),O=b("div"),O.textContent="Direction",I=x(),D=b("label"),j=b("input"),q=L(" from top"),X=x(),ne=b("label"),W=b("input"),B=L(" from bottom"),H=x(),oe=b("label"),re=b("div"),re.textContent="Timeout",ue=x(),ce=b("input"),ze=x(),Ie=b("div"),ke=b("div"),ke.textContent="Style",be=x();for(let U=0;U<F.length;U+=1)F[U].c();te=x(),xe=b("label"),fe=b("textarea"),ge=x(),Q=b("div"),Oe=b("label"),Te=b("input"),_e=x(),Ne=b("select");for(let U=0;U<se.length;U+=1)se[U].c();ct=x(),We=b("div"),We.innerHTML=`<input class="input block w-40" type="submit" value="Notify"/> 
      <input class="input block w-40" type="reset" value="Clear"/>`,ie=x(),Dt=b("h3"),Dt.textContent="Code",De=x(),A(ve.$$.fragment),e.a=n,g(a,"class","mb-4 text-center"),g(d,"class","text-sm uppercase opacity-70"),g(y,"type","radio"),g(y,"name","hpos"),y.__value="left: 0; right: unset;",y.value=y.__value,o[12][0].push(y),g(R,"type","radio"),g(R,"name","hpos"),R.__value="right: 0;",R.value=R.__value,o[12][0].push(R),g(O,"class","text-sm uppercase opacity-70"),g(j,"type","radio"),g(j,"name","vpos"),j.__value="top: 0; bottom: unset; flex-direction: column-reverse;",j.value=j.__value,o[12][1].push(j),g(W,"type","radio"),g(W,"name","vpos"),W.__value="top: unset; bottom: 0; flex-direction: column;",W.value=W.__value,o[12][1].push(W),g(re,"class","text-sm uppercase opacity-70"),g(ce,"class","input w-[9ch]"),g(ce,"min","0"),g(ce,"step","100"),g(ce,"type","number"),g(ke,"class","text-sm uppercase opacity-70"),g(f,"class","flex gap-4 items-center justify-evenly mb-4"),g(fe,"name","quote"),fe.value=o[6],g(fe,"rows","3"),g(fe,"class","input w-full"),g(fe,"placeholder","Quote"),g(xe,"class","block w-full mb-4"),g(Te,"name","author"),Te.value=o[5],g(Te,"class","input w-full"),g(Te,"type","text"),g(Te,"placeholder","Author"),g(Oe,"class","block w-full"),g(Ne,"class","input block w-full"),o[4]===void 0&&Qe(()=>o[18].call(Ne)),g(Q,"class","mb-4 flex gap-4"),g(We,"class","mx-auto w-fit flex gap-4"),g(u,"class","not-prose w-full"),g(r,"class","prose max-w-none my-4")},m(U,we){e.m(t,document.head),h(document.head,n),v(U,s,we),v(U,r,we),E(l,r,null),h(r,i),h(r,a),h(r,c),h(r,u),h(u,f),h(f,p),h(p,d),h(p,m),h(p,_),h(_,y),y.checked=y.__value===o[0],h(_,T),h(p,S),h(p,N),h(N,R),R.checked=R.__value===o[0],h(N,M),h(f,P),h(f,z),h(z,O),h(z,I),h(z,D),h(D,j),j.checked=j.__value===o[1],h(D,q),h(z,X),h(z,ne),h(ne,W),W.checked=W.__value===o[1],h(ne,B),h(f,H),h(f,oe),h(oe,re),h(oe,ue),h(oe,ce),Ve(ce,o[2]),h(f,ze),h(f,Ie),h(Ie,ke),h(Ie,be);for(let je=0;je<F.length;je+=1)F[je].m(Ie,null);h(u,te),h(u,xe),h(xe,fe),h(u,ge),h(u,Q),h(Q,Oe),h(Oe,Te),h(Q,_e),h(Q,Ne);for(let je=0;je<se.length;je+=1)se[je].m(Ne,null);ft(Ne,o[4]),h(u,ct),h(u,We),h(r,ie),h(r,Dt),h(r,De),E(ve,r,null),tt=!0,st||(jt=[G(y,"change",o[11]),G(R,"change",o[13]),G(j,"change",o[14]),G(W,"change",o[15]),G(ce,"input",o[16]),G(Ne,"change",o[18]),G(u,"submit",So(o[9])),G(u,"reset",So(o[19]))],st=!0)},p(U,[we]){(!tt||we&8)&&t!==(t=`<style type="text/css" data-text="test">${U[7][U[3]]}</style>`)&&e.p(t);const je={};if(we&3&&(je.style="display: flex; "+U[0]+U[1]),l.$set(je),we&1&&(y.checked=y.__value===U[0]),we&1&&(R.checked=R.__value===U[0]),we&2&&(j.checked=j.__value===U[1]),we&2&&(W.checked=W.__value===U[1]),we&4&&ot(ce.value)!==U[2]&&Ve(ce,U[2]),we&136){ut=Object.keys(U[7]);let Me;for(Me=0;Me<ut.length;Me+=1){const Ct=As(U,ut,Me);F[Me]?F[Me].p(Ct,we):(F[Me]=Rs(Ct),F[Me].c(),F[Me].m(Ie,null))}for(;Me<F.length;Me+=1)F[Me].d(1);F.length=ut.length}if((!tt||we&64)&&(fe.value=U[6]),(!tt||we&32&&Te.value!==U[5])&&(Te.value=U[5]),we&256){J=U[8];let Me;for(Me=0;Me<J.length;Me+=1){const Ct=Cs(U,J,Me);se[Me]?se[Me].p(Ct,we):(se[Me]=Ns(Ct),se[Me].c(),se[Me].m(Ne,null))}for(;Me<se.length;Me+=1)se[Me].d(1);se.length=J.length}we&272&&ft(Ne,U[4])},i(U){tt||($(l.$$.fragment,U),$(ve.$$.fragment,U),tt=!0)},o(U){k(l.$$.fragment,U),k(ve.$$.fragment,U),tt=!1},d(U){w(n),U&&e.d(),U&&w(s),U&&w(r),C(l),o[12][0].splice(o[12][0].indexOf(y),1),o[12][0].splice(o[12][0].indexOf(R),1),o[12][1].splice(o[12][1].indexOf(j),1),o[12][1].splice(o[12][1].indexOf(W),1),Fe(F,U),Fe(se,U),C(ve),st=!1,Re(jt)}}}function Fp(o,e,t){let n,s,r=0,l="left: 0; right: unset;",i="top: 0; bottom: unset; flex-direction: column-reverse;",a=1e4,c={simple:Ap,bootstrap:Rp},u=Object.keys(c)[0];const f=["primary","secondary","success","danger","warning","info","light","dark"];let p=f[0];function d({currentTarget:z}){if(z instanceof HTMLFormElement){const O=z.elements.quote.value,I=z.author.value;Sn.push({message:[O?`<div>${O}</div>`:"",I?`<div class="italic text-right">${I}</div>`:""].filter(j=>!!j).join(""),type:p,timeout:a}),t(10,r=r+1>=Kn.length?0:r+1);let D=f.indexOf(p)+1;D<0||D>=f.length?t(4,p=f[0]):t(4,p=f[D])}}const m=[[],[],[]];function _(){l=this.__value,t(0,l)}function y(){l=this.__value,t(0,l)}function T(){i=this.__value,t(1,i)}function S(){i=this.__value,t(1,i)}function N(){a=ot(this.value),t(2,a)}function R(){u=this.__value,t(3,u)}function M(){p=Qt(this),t(4,p),t(8,f)}const P=()=>Sn.clear();return o.$$.update=()=>{o.$$.dirty&1024&&t(6,n=Kn[r].en),o.$$.dirty&1024&&t(5,s=Kn[r].author)},[l,i,a,u,p,s,n,c,f,d,r,_,m,y,T,S,N,R,M,P]}class Hp extends Y{constructor(e){super(),Z(this,e,Fp,Bp,K,{})}}const{document:Ms}=St;function Up(o){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function qp(o){let e;return{c(){e=L("Base example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Kp(o){let e,t,n,s;return e=new de({props:{$$slots:{default:[Up]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[qp]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment)},m(r,l){E(e,r,l),v(r,t,l),E(n,r,l),s=!0},p(r,l){const i={};l&1&&(i.$$scope={dirty:l,ctx:r}),e.$set(i);const a={};l&1&&(a.$$scope={dirty:l,ctx:r}),n.$set(a)},i(r){s||($(e.$$.fragment,r),$(n.$$.fragment,r),s=!0)},o(r){k(e.$$.fragment,r),k(n.$$.fragment,r),s=!1},d(r){C(e,r),r&&w(t),C(n,r)}}}function Wp(o){let e,t;return e=new Cp({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Gp(o){let e,t;return e=new Hp({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Zp(o){let e,t,n,s,r,l;return e=new et({props:{$$slots:{default:[Kp]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Wp]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[Gp]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment)},m(i,a){E(e,i,a),v(i,t,a),E(n,i,a),v(i,s,a),E(r,i,a),l=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){k(e.$$.fragment,i),k(n.$$.fragment,i),k(r.$$.fragment,i),l=!1},d(i){C(e,i),i&&w(t),C(n,i),i&&w(s),C(r,i)}}}function Yp(o){let e,t,n,s,r,l,i,a,c,u,f;return Ms.title=e=document.title.replace(/(•).*$/,"$1 GlobNotify"),u=new Je({props:{$$slots:{default:[Zp]},$$scope:{ctx:o}}}),{c(){t=x(),n=b("section"),s=b("a"),s.textContent="Home",r=x(),l=b("h1"),l.textContent="Component for notifications globally for the entire application",i=x(),a=b("ul"),a.innerHTML=`<li>no dependencies</li> 
    <li>no inline styles</li> 
    <li>one instance for the entire application</li> 
    <li>with custom notification transition</li> 
    <li>custom notification element components</li> 
    <li>with configurable timeout for each notification</li> 
    <li><a href="https://www.npmjs.com/package/@apsc/glob-notify">NPM</a></li>`,c=x(),A(u.$$.fragment),g(s,"class","float-right"),g(s,"href","/"),g(l,"class","text-2xl max-w-lg"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(p,d){v(p,t,d),v(p,n,d),h(n,s),h(n,r),h(n,l),h(n,i),h(n,a),h(n,c),E(u,n,null),f=!0},p(p,[d]){(!f||d&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 GlobNotify"))&&(Ms.title=e);const m={};d&1&&(m.$$scope={dirty:d,ctx:p}),u.$set(m)},i(p){f||($(u.$$.fragment,p),f=!0)},o(p){k(u.$$.fragment,p),f=!1},d(p){p&&w(t),p&&w(n),C(u)}}}class Vp extends Y{constructor(e){super(),Z(this,e,null,Yp,K,{})}}var Xp=`<div class="component__source">Source <code>ColorPicker.svelte</code></div>
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
</td></tr></table>`;function Qp(o){let e,t,n;return t=new It({props:{source:Xp}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(s,r){v(s,e,r),E(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){s&&w(e),C(t)}}}class Jp extends Y{constructor(e){super(),Z(this,e,null,Qp,K,{})}}function il(o){var t;const e=(t=/^#([0-9a-f]{3,8})$/gi.exec(o))==null?void 0:t[1];if(e!=null){if(e.length===3||e.length===4)return e.split(/([0-9a-f])/gi).filter(Boolean);if(e.length===6||e.length===8)return e.split(/([0-9a-f]{2})/gi).filter(Boolean)}}function Ps(o){try{return il(o)!=null}catch(e){return!1}}function lt(o,e,t){return Math.max(Math.min(o,t),e)}function ed(o){return nd(Nn(o))}function Nn(o){var n;const e=(n=il(o))==null?void 0:n.map(s=>s.length===1?s+s:s);if(e==null)throw new Error(`Invalid color ${o}`);const t={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return e[3]&&(t.a=Math.round(parseInt(e[3],16)/255*1e3)/1e3),t}function td(o){const e=o.s/100,t=o.l/100,n=(1-Math.abs(2*t-1))*e,s=n*(1-Math.abs(o.h/60%2-1)),r=t-n/2;let l=0,i=0,a=0;0<=o.h&&o.h<60?(l=n,i=s,a=0):60<=o.h&&o.h<120?(l=s,i=n,a=0):120<=o.h&&o.h<180?(l=0,i=n,a=s):180<=o.h&&o.h<240?(l=0,i=s,a=n):240<=o.h&&o.h<300?(l=s,i=0,a=n):300<=o.h&&o.h<360&&(l=n,i=0,a=s),l=Math.round((l+r)*255),i=Math.round((i+r)*255),a=Math.round((a+r)*255);const c={r:l,g:i,b:a};return o.a!=null&&(c.a=o.a),c}function nd(o){const e=o.r/255,t=o.g/255,n=o.b/255,s=Math.max(e,t,n),r=Math.min(e,t,n),l=s-r;let i=0,a=0,c=0;l===0?i=0:s===e?i=(t-n)/l%6:s===t?i=(n-e)/l+2:i=(e-t)/l+4,i=Math.round(i*60),i<0&&(i+=360),a=(s+r)/2,c=l===0?0:l/(1-Math.abs(2*a-1));const u={h:i,s:Math.round(c*100),l:Math.round(a*100)};return o.a!=null&&(u.a=o.a),u}function od(o){return go(td(o))}function go(o){const e="#"+[o.r,o.g,o.b].map(n=>lt(n,0,255).toString(16).padStart(2,"0")).join(""),t=o.a!=null?Math.round(o.a*255):255;return t<255?e+Math.max(t,0).toString(16).padStart(2,"0"):e}function sd(o){return rd(Nn(o))}function rd(o){const e=lt(o.r,0,255)/255,t=lt(o.g,0,255)/255,n=lt(o.b,0,255)/255,s=Math.max(e,t,n),r=Math.min(e,t,n),l=s-r,i=s;let a=0,c=0;l&&(s===e&&(a=(t-n)/l),s===t&&(a=2+(n-e)/l),s===n&&(a=4+(e-t)/l),s&&(c=l/s)),a=a*60;const u=a<0?a+360:a,f=c*100,p=i*100;return o.a!=null&&o.a>=0?{h:u,s:f,v:p,a:lt(o.a,0,1)}:{h:u,s:f,v:p}}function Wn(o){return go(ld(o))}function ld(o){const e=o.s/100,t=o.v/100;let n=e*t;const s=o.h/60;let r=n*(1-Math.abs(s%2-1));const l=t-n;n=n+l,r=r+l;const i=Math.floor(s)%6,a=[n,r,l,l,r,n][i],c=[r,n,n,r,l,l][i],u=[l,l,r,n,n,r][i],f=Math.round(a*255),p=Math.round(c*255),d=Math.round(u*255);return o.a!=null?{r:f,g:p,b:d,a:o.a}:{r:f,g:p,b:d}}function zs(o){var s;typeof o=="string"&&(o=Nn(o));const e=[.2126,.7152,.0722],t=[o.r,o.g,o.b].reduce((r,l,i)=>(l/=255,l<.03928?l/=12.92:(l=(l+.055)/1.055,l*=l),r+l*e[i]),0),n=1-((s=o.a)!=null?s:1);return t+(1-t)*n}function id(o){let e,t,n,s;return{c(){e=b("div"),t=b("div"),g(t,"class","c-color-picker__tone--marker"),Ke(t,"left",o[0]+"%"),Ke(t,"top",100-o[1]+"%"),g(e,"class","c-color-picker__tone"),g(e,"tabindex","0")},m(r,l){v(r,e,l),h(e,t),n||(s=Ue(o[2].call(null,e)),n=!0)},p(r,[l]){l&1&&Ke(t,"left",r[0]+"%"),l&2&&Ke(t,"top",100-r[1]+"%")},i:ee,o:ee,d(r){r&&w(e),n=!1,s()}}}function ad(o,e,t){let{s:n=0}=e,{v:s=0}=e;function r(l){function i(d){const{pageX:m,pageY:_}=d instanceof MouseEvent?d:d.changedTouches[0],{left:y,top:T,width:S,height:N}=l.getBoundingClientRect();t(0,n=lt((m-y-window.scrollX)/S,0,1)*100),t(1,s=100-lt((_-T-window.scrollY)/N,0,1)*100)}function a(d){i(d)}function c(){document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",c),document.removeEventListener("touchend",c),setTimeout(()=>{document.removeEventListener("click",f,{capture:!0})},0)}function u(d){l.focus(),document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",c),document.addEventListener("touchend",c),document.addEventListener("click",f,{capture:!0}),i(d),d.preventDefault()}function f(d){d.preventDefault(),d.stopPropagation()}function p(d){let _=100-s,y=n;switch(d.code){case"ArrowUp":_=lt(_-1,0,100);break;case"ArrowDown":_=lt(_+1,0,100),d.preventDefault();break;case"ArrowLeft":y=lt(y-1,0,100),d.preventDefault();break;case"ArrowRight":y=lt(y+1,0,100),d.preventDefault();break}y!==n&&t(0,n=y),100-_!==s&&t(1,s=100-_)}return l.addEventListener("mousedown",u),l.addEventListener("touchstart",u),l.addEventListener("keydown",p),{destroy(){c(),l.removeEventListener("mousedown",u),l.removeEventListener("touchstart",u),l.removeEventListener("keydown",p)}}}return o.$$set=l=>{"s"in l&&t(0,n=l.s),"v"in l&&t(1,s=l.v)},[n,s,r]}class cd extends Y{constructor(e){super(),Z(this,e,ad,id,K,{s:0,v:1})}}var ud="Expected a function",Os=0/0,fd="[object Symbol]",pd=/^\s+|\s+$/g,dd=/^[-+]0x[0-9a-f]+$/i,hd=/^0b[01]+$/i,md=/^0o[0-7]+$/i,gd=parseInt,bd=typeof un=="object"&&un&&un.Object===Object&&un,_d=typeof self=="object"&&self&&self.Object===Object&&self,wd=bd||_d||Function("return this")(),$d=Object.prototype,vd=$d.toString,yd=Math.max,kd=Math.min,Gn=function(){return wd.Date.now()};function xd(o,e,t){var n,s,r,l,i,a,c=0,u=!1,f=!1,p=!0;if(typeof o!="function")throw new TypeError(ud);e=Is(e)||0,Qn(t)&&(u=!!t.leading,f="maxWait"in t,r=f?yd(Is(t.maxWait)||0,e):r,p="trailing"in t?!!t.trailing:p);function d(P){var z=n,O=s;return n=s=void 0,c=P,l=o.apply(O,z),l}function m(P){return c=P,i=setTimeout(T,e),u?d(P):l}function _(P){var z=P-a,O=P-c,I=e-z;return f?kd(I,r-O):I}function y(P){var z=P-a,O=P-c;return a===void 0||z>=e||z<0||f&&O>=r}function T(){var P=Gn();if(y(P))return S(P);i=setTimeout(T,_(P))}function S(P){return i=void 0,p&&n?d(P):(n=s=void 0,l)}function N(){i!==void 0&&clearTimeout(i),c=0,n=a=s=i=void 0}function R(){return i===void 0?l:S(Gn())}function M(){var P=Gn(),z=y(P);if(n=arguments,s=this,a=P,z){if(i===void 0)return m(a);if(f)return i=setTimeout(T,e),d(a)}return i===void 0&&(i=setTimeout(T,e)),l}return M.cancel=N,M.flush=R,M}function Qn(o){var e=typeof o;return!!o&&(e=="object"||e=="function")}function Td(o){return!!o&&typeof o=="object"}function Sd(o){return typeof o=="symbol"||Td(o)&&vd.call(o)==fd}function Is(o){if(typeof o=="number")return o;if(Sd(o))return Os;if(Qn(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=Qn(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=o.replace(pd,"");var t=hd.test(o);return t||md.test(o)?gd(o.slice(2),t?2:8):dd.test(o)?Os:+o}var Ed=xd;function Cd(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S;function N(P){o[9](P)}function R(P){o[10](P)}let M={};return o[2].s!==void 0&&(M.s=o[2].s),o[2].v!==void 0&&(M.v=o[2].v),n=new cd({props:M}),Le.push(()=>kt(n,"s",N)),Le.push(()=>kt(n,"v",R)),{c(){e=b("div"),t=b("div"),A(n.$$.fragment),l=x(),i=b("div"),a=x(),c=b("div"),u=b("input"),f=x(),p=b("div"),d=b("input"),g(i,"class","c-color-picker__sample"),g(u,"type","range"),g(u,"min","0"),g(u,"max","359"),g(u,"step","1"),g(c,"class","c-color-picker__hue"),g(d,"type","range"),g(d,"min","0"),g(d,"max","1"),g(d,"step",1/255),g(p,"class","c-color-picker__alpha"),g(t,"class","c-color-picker__body"),g(e,"class",m="c-color-picker"+(o[0]?" "+o[0]:"")),g(e,"style",_="--cp-tone: "+o[4]+"; --cp-color-opacity: "+o[5]+"; --cp-color: "+o[3]+"; "+o[1])},m(P,z){v(P,e,z),h(e,t),E(n,t,null),h(t,l),h(t,i),h(t,a),h(t,c),h(c,u),Ve(u,o[2].h),h(t,f),h(t,p),h(p,d),Ve(d,o[2].a),y=!0,T||(S=[G(u,"change",o[11]),G(u,"input",o[11]),G(d,"change",o[12]),G(d,"input",o[12])],T=!0)},p(P,[z]){const O={};!s&&z&4&&(s=!0,O.s=P[2].s,Mt(()=>s=!1)),!r&&z&4&&(r=!0,O.v=P[2].v,Mt(()=>r=!1)),n.$set(O),z&4&&Ve(u,P[2].h),z&4&&Ve(d,P[2].a),(!y||z&1&&m!==(m="c-color-picker"+(P[0]?" "+P[0]:"")))&&g(e,"class",m),(!y||z&58&&_!==(_="--cp-tone: "+P[4]+"; --cp-color-opacity: "+P[5]+"; --cp-color: "+P[3]+"; "+P[1]))&&g(e,"style",_)},i(P){y||($(n.$$.fragment,P),y=!0)},o(P){k(n.$$.fragment,P),y=!1},d(P){P&&w(e),C(n),T=!1,Re(S)}}}function Ad(o,e,t){let{class:n=""}=e,{style:s=""}=e,{color:r="#000"}=e,{debounce:l=0}=e,i;function a(T){let{h:S,s:N,v:R,a:M=1}=sd(T);i!=null&&S===0&&N===0&&(S=i.h),t(2,i={h:S,s:N,v:R,a:M})}let c,u,f,p;function d(T){o.$$.not_equal(i.s,T)&&(i.s=T,t(2,i))}function m(T){o.$$.not_equal(i.v,T)&&(i.v=T,t(2,i))}function _(){i.h=ot(this.value),t(2,i)}function y(){i.a=ot(this.value),t(2,i)}return o.$$set=T=>{"class"in T&&t(0,n=T.class),"style"in T&&t(1,s=T.style),"color"in T&&t(6,r=T.color),"debounce"in T&&t(7,l=T.debounce)},o.$$.update=()=>{o.$$.dirty&128&&t(8,c=Ed(T=>{t(6,r=T)},l)),o.$$.dirty&64&&a(r),o.$$.dirty&268&&(T=>{t(3,u=Wn(T)),t(4,f=Wn({h:T.h,s:100,v:100})),t(5,p=Wn({h:T.h,s:T.s,v:T.v})),c(u)})(i)},[n,s,i,u,f,p,r,l,c,d,m,_,y]}class al extends Y{constructor(e){super(),Z(this,e,Ad,Cd,K,{class:0,style:1,color:6,debounce:7})}}function Rd(o){let e,t,n,s;return{c(){e=b("input"),g(e,"class",t="c-coloredit__input--text"+(o[0]?" "+o[0]:"")),g(e,"type","text"),e.value=o[1]},m(r,l){v(r,e,l),o[6](e),n||(s=G(e,"input",o[7]),n=!0)},p(r,[l]){l&1&&t!==(t="c-coloredit__input--text"+(r[0]?" "+r[0]:""))&&g(e,"class",t),l&2&&e.value!==r[1]&&(e.value=r[1])},i:ee,o:ee,d(r){r&&w(e),o[6](null),n=!1,s()}}}function Nd(o,e,t){let{class:n=""}=e,{color:s="#000"}=e,r;function l(f){Ps(f)&&t(4,s=f)}let i;function a(){i==null||i.focus()}function c(f){Le[f?"unshift":"push"](()=>{i=f,t(2,i)})}const u=f=>l(f.currentTarget.value);return o.$$set=f=>{"class"in f&&t(0,n=f.class),"color"in f&&t(4,s=f.color)},o.$$.update=()=>{o.$$.dirty&16&&t(1,r=Ps(s)?s:"")},[n,r,i,l,s,a,c,u]}class Md extends Y{constructor(e){super(),Z(this,e,Nd,Rd,K,{class:0,color:4,focus:5})}get focus(){return this.$$.ctx[5]}}function Pd(o){let e,t,n,s,r,l,i,a,c,u,f,p,d;return{c(){e=b("input"),n=x(),s=b("input"),l=x(),i=b("input"),c=x(),u=b("input"),g(e,"class",t="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),g(e,"type","number"),g(e,"min","0"),g(e,"max","255"),g(e,"step","1"),e.value=o[1],g(s,"class",r="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),g(s,"type","number"),g(s,"min","0"),g(s,"max","255"),g(s,"step","1"),s.value=o[2],g(i,"class",a="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),g(i,"type","number"),g(i,"min","0"),g(i,"max","255"),g(i,"step","1"),i.value=o[3],g(u,"class",f="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),g(u,"type","number"),g(u,"min","0"),g(u,"max","1"),g(u,"step","0.01"),u.value=o[4]},m(m,_){v(m,e,_),o[8](e),v(m,n,_),v(m,s,_),v(m,l,_),v(m,i,_),v(m,c,_),v(m,u,_),p||(d=[G(e,"change",o[9]),G(s,"change",o[10]),G(i,"change",o[11]),G(u,"change",o[12])],p=!0)},p(m,[_]){_&1&&t!==(t="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(e,"class",t),_&2&&e.value!==m[1]&&(e.value=m[1]),_&1&&r!==(r="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(s,"class",r),_&4&&s.value!==m[2]&&(s.value=m[2]),_&1&&a!==(a="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(i,"class",a),_&8&&i.value!==m[3]&&(i.value=m[3]),_&1&&f!==(f="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(u,"class",f),_&16&&u.value!==m[4]&&(u.value=m[4])},i:ee,o:ee,d(m){m&&w(e),o[8](null),m&&w(n),m&&w(s),m&&w(l),m&&w(i),m&&w(c),m&&w(u),p=!1,Re(d)}}}function zd(o,e,t){let{class:n=""}=e,{color:s="#000"}=e,r,l,i,a;function c(S){var N;try{const R=Nn(S);t(1,r=R.r),t(2,l=R.g),t(3,i=R.b),t(4,a=(N=R.a)!=null?N:1)}catch(R){t(1,r=NaN),t(2,l=NaN),t(3,i=NaN),t(4,a=NaN)}}function u(S,N,R,M){[S,R,N,M!=null?M:1].every(P=>Number.isFinite(P))&&t(6,s=go({r:S,g:N,b:R,a:M}))}let f;function p(){f==null||f.focus()}function d(S){Le[S?"unshift":"push"](()=>{f=S,t(5,f)})}const m=S=>t(1,r=+S.currentTarget.value),_=S=>t(2,l=+S.currentTarget.value),y=S=>t(3,i=+S.currentTarget.value),T=S=>t(4,a=+S.currentTarget.value);return o.$$set=S=>{"class"in S&&t(0,n=S.class),"color"in S&&t(6,s=S.color)},o.$$.update=()=>{o.$$.dirty&64&&c(s),o.$$.dirty&30&&u(r,l,i,a)},[n,r,l,i,a,f,s,p,d,m,_,y,T]}class Od extends Y{constructor(e){super(),Z(this,e,zd,Pd,K,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function Id(o){let e,t,n,s,r,l,i,a,c,u,f,p,d;return{c(){e=b("input"),n=x(),s=b("input"),l=x(),i=b("input"),c=x(),u=b("input"),g(e,"class",t="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),g(e,"type","number"),g(e,"min","0"),g(e,"max","360"),g(e,"step","1"),e.value=o[1],g(s,"class",r="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),g(s,"type","number"),g(s,"min","0"),g(s,"max","100"),g(s,"step","1"),s.value=o[2],g(i,"class",a="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),g(i,"type","number"),g(i,"min","0"),g(i,"max","100"),g(i,"step","1"),i.value=o[3],g(u,"class",f="c-coloredit__input--number"+(o[0]?" "+o[0]:"")),g(u,"type","number"),g(u,"min","0"),g(u,"max","1"),g(u,"step","0.01"),u.value=o[4]},m(m,_){v(m,e,_),o[8](e),v(m,n,_),v(m,s,_),v(m,l,_),v(m,i,_),v(m,c,_),v(m,u,_),p||(d=[G(e,"change",o[9]),G(s,"change",o[10]),G(i,"change",o[11]),G(u,"change",o[12])],p=!0)},p(m,[_]){_&1&&t!==(t="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(e,"class",t),_&2&&e.value!==m[1]&&(e.value=m[1]),_&1&&r!==(r="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(s,"class",r),_&4&&s.value!==m[2]&&(s.value=m[2]),_&1&&a!==(a="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(i,"class",a),_&8&&i.value!==m[3]&&(i.value=m[3]),_&1&&f!==(f="c-coloredit__input--number"+(m[0]?" "+m[0]:""))&&g(u,"class",f),_&16&&u.value!==m[4]&&(u.value=m[4])},i:ee,o:ee,d(m){m&&w(e),o[8](null),m&&w(n),m&&w(s),m&&w(l),m&&w(i),m&&w(c),m&&w(u),p=!1,Re(d)}}}function Ld(o,e,t){let{class:n=""}=e,{color:s="#000"}=e,r,l,i,a;function c(S){var N;try{const R=ed(S);t(1,r=R.h),t(2,l=R.s),t(3,i=R.l),t(4,a=(N=R.a)!=null?N:1)}catch(R){t(1,r=NaN),t(2,l=NaN),t(3,i=NaN),t(4,a=NaN)}}function u(S,N,R,M){[S,N,R,M!=null?M:1].every(P=>Number.isFinite(P))&&t(6,s=od({h:S,s:N,l:R,a:M}))}let f;function p(){f==null||f.focus()}function d(S){Le[S?"unshift":"push"](()=>{f=S,t(5,f)})}const m=S=>t(1,r=+S.currentTarget.value),_=S=>t(2,l=+S.currentTarget.value),y=S=>t(3,i=+S.currentTarget.value),T=S=>t(4,a=+S.currentTarget.value);return o.$$set=S=>{"class"in S&&t(0,n=S.class),"color"in S&&t(6,s=S.color)},o.$$.update=()=>{o.$$.dirty&64&&c(s),o.$$.dirty&30&&u(r,l,i,a)},[n,r,l,i,a,f,s,p,d,m,_,y,T]}class Dd extends Y{constructor(e){super(),Z(this,e,Ld,Id,K,{class:0,color:6,focus:7})}get focus(){return this.$$.ctx[7]}}function Ls(o,e,t){const n=o.slice();return n[11]=e[t],n}function Ds(o){let e,t=o[11]+"",n;return{c(){e=b("span"),n=L(t),g(e,"class","c-color-edit__label")},m(s,r){v(s,e,r),h(e,n)},p(s,r){r&8&&t!==(t=s[11]+"")&&ye(n,t)},d(s){s&&w(e)}}}function jd(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_;function y(M){o[6](M)}var T=o[3].component;function S(M){let P={};return M[0]!==void 0&&(P.color=M[0]),{props:P}}T&&(n=new T(S(o)),Le.push(()=>kt(n,"color",y)),o[7](n));let N=o[3].labels,R=[];for(let M=0;M<N.length;M+=1)R[M]=Ds(Ls(o,N,M));return{c(){e=b("div"),t=b("div"),n&&A(n.$$.fragment),r=x();for(let M=0;M<R.length;M+=1)R[M].c();l=x(),i=b("div"),a=b("button"),c=x(),u=b("button"),g(t,"class","c-color-edit__values"),Ke(t,"--ce-columns",o[3].labels.length),g(a,"class","c-color-edit__button--up"),g(u,"class","c-color-edit__button--down"),g(i,"class","c-color-edit__buttons"),g(e,"class",f="c-color-edit"+(o[1]?" "+o[1]:"")),g(e,"style",p=o[2]||void 0)},m(M,P){v(M,e,P),h(e,t),n&&E(n,t,null),h(t,r);for(let z=0;z<R.length;z+=1)R[z].m(t,null);h(e,l),h(e,i),h(i,a),h(i,c),h(i,u),d=!0,m||(_=[G(a,"click",o[8]),G(u,"click",o[9])],m=!0)},p(M,[P]){const z={};if(!s&&P&1&&(s=!0,z.color=M[0],Mt(()=>s=!1)),T!==(T=M[3].component)){if(n){he();const O=n;k(O.$$.fragment,1,0,()=>{C(O,1)}),me()}T?(n=new T(S(M)),Le.push(()=>kt(n,"color",y)),M[7](n),A(n.$$.fragment),$(n.$$.fragment,1),E(n,t,r)):n=null}else T&&n.$set(z);if(P&8){N=M[3].labels;let O;for(O=0;O<N.length;O+=1){const I=Ls(M,N,O);R[O]?R[O].p(I,P):(R[O]=Ds(I),R[O].c(),R[O].m(t,null))}for(;O<R.length;O+=1)R[O].d(1);R.length=N.length}(!d||P&8)&&Ke(t,"--ce-columns",M[3].labels.length),(!d||P&2&&f!==(f="c-color-edit"+(M[1]?" "+M[1]:"")))&&g(e,"class",f),(!d||P&4&&p!==(p=M[2]||void 0))&&g(e,"style",p)},i(M){d||(n&&$(n.$$.fragment,M),d=!0)},o(M){n&&k(n.$$.fragment,M),d=!1},d(M){M&&w(e),o[7](null),n&&C(n),Fe(R,M),m=!1,Re(_)}}}function Bd(o,e,t){let{class:n=""}=e,{style:s=""}=e,{color:r="#000"}=e;const l=[{component:Md,labels:["Hex"]},{component:Od,labels:["R","G","B","A"]},{component:Dd,labels:["H","S","L","A"]}];let i=l[0],a;function c(m){return Ge(this,null,function*(){let _=l.indexOf(i)+m;_<0?_=l.length-1:_>=l.length&&(_=0),t(3,i=l[_]),yield zr(),a==null||a.focus()})}function u(m){r=m,t(0,r)}function f(m){Le[m?"unshift":"push"](()=>{a=m,t(4,a)})}const p=()=>c(-1),d=()=>c(1);return o.$$set=m=>{"class"in m&&t(1,n=m.class),"style"in m&&t(2,s=m.style),"color"in m&&t(0,r=m.color)},[r,n,s,i,a,c,u,f,p,d]}class cl extends Y{constructor(e){super(),Z(this,e,Bd,jd,K,{class:1,style:2,color:0})}}function js(o,e,t){const n=o.slice();return n[6]=e[t],n}function Bs(o){let e,t=o[6]+"",n,s,r;function l(){return o[5](o[6])}return{c(){e=b("button"),n=L(t),g(e,"class","input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"),Ke(e,"background-color",o[6]),Ke(e,"color",zs(o[6])>.55?"inherit":"white")},m(i,a){v(i,e,a),h(e,n),s||(r=G(e,"click",l),s=!0)},p(i,a){o=i,a&2&&t!==(t=o[6]+"")&&ye(n,t),a&2&&Ke(e,"background-color",o[6]),a&2&&Ke(e,"color",zs(o[6])>.55?"inherit":"white")},d(i){i&&w(e),s=!1,r()}}}function Fd(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m=o[1],_=[];for(let y=0;y<m.length;y+=1)_[y]=Bs(js(o,m,y));return{c(){e=b("div"),t=b("span"),t.textContent="Set color",n=x(),s=b("a"),s.textContent="randomize alpha",r=x(),l=b("span"),l.textContent="\u2022",i=x(),a=b("a"),a.textContent="reset alpha",u=x(),f=b("div");for(let y=0;y<_.length;y+=1)_[y].c();g(s,"class","text-sm"),g(s,"href","javascript:void(0)"),g(l,"class","text-blue-500"),g(a,"class","text-sm"),g(a,"href","javascript:void(0)"),g(e,"class",c=o[0]||void 0)},m(y,T){v(y,e,T),h(e,t),h(e,n),h(e,s),h(e,r),h(e,l),h(e,i),h(e,a),v(y,u,T),v(y,f,T);for(let S=0;S<_.length;S+=1)_[S].m(f,null);p||(d=[G(s,"click",o[3]),G(a,"click",o[4])],p=!0)},p(y,[T]){if(T&1&&c!==(c=y[0]||void 0)&&g(e,"class",c),T&6){m=y[1];let S;for(S=0;S<m.length;S+=1){const N=js(y,m,S);_[S]?_[S].p(N,T):(_[S]=Bs(N),_[S].c(),_[S].m(f,null))}for(;S<_.length;S+=1)_[S].d(1);_.length=m.length}},i:ee,o:ee,d(y){y&&w(e),y&&w(u),y&&w(f),Fe(_,y),p=!1,Re(d)}}}function Hd(o){return ul(o).map(e=>e+Math.floor(Math.random()*255).toString(16).padStart(2,"0"))}function ul(o){return o.map(e=>e.slice(0,7))}function Ud(o,e,t){const n=to();let{class:s=""}=e,r=["#001219","#005F73","#0A9396","#94D2BD","#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226","#F72585","#B5179E","#7209B7","#560BAD","#480CA8","#3A0CA3","#3F37C9","#4361EE","#4895EF","#4CC9F0"];const l=()=>t(1,r=Hd(r)),i=()=>t(1,r=ul(r)),a=c=>n("color",c);return o.$$set=c=>{"class"in c&&t(0,s=c.class)},[s,r,n,l,i,a]}class bo extends Y{constructor(e){super(),Z(this,e,Ud,Fd,K,{class:0})}}function qd(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P,z;function O(D){o[1](D)}let I={class:"basis-1/2 h-[256px] pt-2"};return o[0]!==void 0&&(I.color=o[0]),n=new al({props:I}),Le.push(()=>kt(n,"color",O)),S=new bo({props:{class:"mt-4"}}),S.$on("color",o[2]),P=new Ye({props:{code:`<script lang="ts">
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
</section>`}}),{c(){e=b("section"),t=b("div"),A(n.$$.fragment),r=x(),l=b("div"),i=b("div"),a=L("Current color: "),c=b("code"),u=L(o[0]),f=x(),p=b("div"),d=b("div"),m=b("div"),_=x(),y=b("div"),T=x(),A(S.$$.fragment),N=x(),R=b("h3"),R.textContent="Code",M=x(),A(P.$$.fragment),g(c,"class","uppercase"),g(m,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),g(y,"class","absolute left-0 top-0 right-0 bottom-0"),Ke(y,"background-color",o[0]),g(d,"class","relative h-[1.5em]"),g(p,"class","p-2 border rounded-md"),g(l,"class","basis-1/2"),g(t,"class","flex gap-8"),g(e,"class","prose max-w-none my-4")},m(D,j){v(D,e,j),h(e,t),E(n,t,null),h(t,r),h(t,l),h(l,i),h(i,a),h(i,c),h(c,u),h(l,f),h(l,p),h(p,d),h(d,m),h(d,_),h(d,y),h(l,T),E(S,l,null),h(e,N),h(e,R),h(e,M),E(P,e,null),z=!0},p(D,[j]){const q={};!s&&j&1&&(s=!0,q.color=D[0],Mt(()=>s=!1)),n.$set(q),(!z||j&1)&&ye(u,D[0]),(!z||j&1)&&Ke(y,"background-color",D[0])},i(D){z||($(n.$$.fragment,D),$(S.$$.fragment,D),$(P.$$.fragment,D),z=!0)},o(D){k(n.$$.fragment,D),k(S.$$.fragment,D),k(P.$$.fragment,D),z=!1},d(D){D&&w(e),C(n),C(S),C(P)}}}function Kd(o,e,t){let n="#f70";function s(l){n=l,t(0,n)}return[n,s,({detail:l})=>t(0,n=l)]}class Wd extends Y{constructor(e){super(),Z(this,e,Kd,qd,K,{})}}function Gd(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P,z,O;function I(j){o[1](j)}let D={class:"w-full border shadow-md rounded-lg p-2"};return o[0]!==void 0&&(D.color=o[0]),s=new cl({props:D}),Le.push(()=>kt(s,"color",I)),N=new bo({props:{class:"mt-4"}}),N.$on("color",o[2]),z=new Ye({props:{code:`<script lang="ts">
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
</style>`}}),{c(){e=b("section"),t=b("div"),n=b("div"),A(s.$$.fragment),l=x(),i=b("div"),a=b("div"),c=L("Current color: "),u=b("code"),f=L(o[0]),p=x(),d=b("div"),m=b("div"),_=b("div"),y=x(),T=b("div"),S=x(),A(N.$$.fragment),R=x(),M=b("h3"),M.textContent="Code",P=x(),A(z.$$.fragment),g(n,"class","basis-1/2 inline-flex items-center"),g(u,"class","uppercase"),g(_,"class","bg-chess absolute left-0 top-0 right-0 bottom-0"),g(T,"class","absolute left-0 top-0 right-0 bottom-0"),Ke(T,"background-color",o[0]),g(m,"class","relative h-[1.5em]"),g(d,"class","p-2 border rounded-md"),g(i,"class","basis-1/2"),g(t,"class","flex gap-8"),g(e,"class","prose max-w-none my-4")},m(j,q){v(j,e,q),h(e,t),h(t,n),E(s,n,null),h(t,l),h(t,i),h(i,a),h(a,c),h(a,u),h(u,f),h(i,p),h(i,d),h(d,m),h(m,_),h(m,y),h(m,T),h(i,S),E(N,i,null),h(e,R),h(e,M),h(e,P),E(z,e,null),O=!0},p(j,[q]){const X={};!r&&q&1&&(r=!0,X.color=j[0],Mt(()=>r=!1)),s.$set(X),(!O||q&1)&&ye(f,j[0]),(!O||q&1)&&Ke(T,"background-color",j[0])},i(j){O||($(s.$$.fragment,j),$(N.$$.fragment,j),$(z.$$.fragment,j),O=!0)},o(j){k(s.$$.fragment,j),k(N.$$.fragment,j),k(z.$$.fragment,j),O=!1},d(j){j&&w(e),C(s),C(N),C(z)}}}function Zd(o,e,t){let n="#f70";function s(l){n=l,t(0,n)}return[n,s,({detail:l})=>t(0,n=l)]}class Yd extends Y{constructor(e){super(),Z(this,e,Zd,Gd,K,{})}}function Mn(o){return o.split("-")[0]}function Pn(o){return o.split("-")[1]}function _o(o){return["top","bottom"].includes(Mn(o))?"x":"y"}function fl(o){return o==="y"?"height":"width"}function Vd(o){return He({top:0,right:0,bottom:0,left:0},o)}function pl(o){return typeof o!="number"?Vd(o):{top:o,right:o,bottom:o,left:o}}function Fs(o){return At(He({},o),{top:o.y,left:o.x,right:o.x+o.width,bottom:o.y+o.height})}function dl(o,e){return Ge(this,null,function*(){var t;e===void 0&&(e={});const{x:n,y:s,platform:r,rects:l,elements:i,strategy:a}=o,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:d=0}=e,m=pl(d),y=i[p?f==="floating"?"reference":"floating":f],T=Fs(yield r.getClippingRect({element:(t=yield r.isElement==null?void 0:r.isElement(y))==null||t?y:y.contextElement||(yield r.getDocumentElement==null?void 0:r.getDocumentElement(i.floating)),boundary:c,rootBoundary:u,strategy:a})),S=Fs(r.convertOffsetParentRelativeRectToViewportRelativeRect?yield r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f==="floating"?At(He({},l.floating),{x:n,y:s}):l.reference,offsetParent:yield r.getOffsetParent==null?void 0:r.getOffsetParent(i.floating),strategy:a}):l[f]);return{top:T.top-S.top+m.top,bottom:S.bottom-T.bottom+m.bottom,left:T.left-S.left+m.left,right:S.right-T.right+m.right}})}const Xd=Math.min,Rt=Math.max;function Qd(o,e,t){return Rt(o,Xd(e,t))}const hl=o=>({name:"arrow",options:o,fn(t){return Ge(this,null,function*(){const{element:n,padding:s=0}=o!=null?o:{},{x:r,y:l,placement:i,rects:a,platform:c}=t;if(n==null)return{};const u=pl(s),f={x:r,y:l},p=_o(i),d=Pn(i),m=fl(p),_=yield c.getDimensions(n),y=p==="y"?"top":"left",T=p==="y"?"bottom":"right",S=a.reference[m]+a.reference[p]-f[p]-a.floating[m],N=f[p]-a.reference[p],R=yield c.getOffsetParent==null?void 0:c.getOffsetParent(n);let M=R?p==="y"?R.clientHeight||0:R.clientWidth||0:0;M===0&&(M=a.floating[m]);const P=S/2-N/2,z=u[y],O=M-_[m]-u[T],I=M/2-_[m]/2+P,D=Qd(z,I,O),X=(d==="start"?u[y]:u[T])>0&&I!==D&&a.reference[m]<=a.floating[m]?I<z?z-I:O-I:0;return{[p]:f[p]-X,data:{[p]:D,centerOffset:I-D}}})}}),Jd={left:"right",right:"left",bottom:"top",top:"bottom"};function En(o){return o.replace(/left|right|bottom|top/g,e=>Jd[e])}function eh(o,e,t){t===void 0&&(t=!1);const n=Pn(o),s=_o(o),r=fl(s);let l=s==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=En(l)),{main:l,cross:En(l)}}const th={start:"end",end:"start"};function Hs(o){return o.replace(/start|end/g,e=>th[e])}function nh(o){const e=En(o);return[Hs(o),e,Hs(e)]}const zn=function(o){return o===void 0&&(o={}),{name:"flip",options:o,fn(t){return Ge(this,null,function*(){var n;const{placement:s,middlewareData:r,rects:l,initialPlacement:i,platform:a,elements:c}=t,D=o,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:d="bestFit",flipAlignment:m=!0}=D,_=Bn(D,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),y=Mn(s),S=p||(y===i||!m?[En(i)]:nh(i)),N=[i,...S],R=yield dl(t,_),M=[];let P=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&M.push(R[y]),f){const{main:j,cross:q}=eh(s,l,yield a.isRTL==null?void 0:a.isRTL(c.floating));M.push(R[j],R[q])}if(P=[...P,{placement:s,overflows:M}],!M.every(j=>j<=0)){var z,O;const j=((z=(O=r.flip)==null?void 0:O.index)!=null?z:0)+1,q=N[j];if(q)return{data:{index:j,overflows:P},reset:{placement:q}};let X="bottom";switch(d){case"bestFit":{var I;const ne=(I=P.map(W=>[W,W.overflows.filter(B=>B>0).reduce((B,H)=>B+H,0)]).sort((W,B)=>W[1]-B[1])[0])==null?void 0:I[0].placement;ne&&(X=ne);break}case"initialPlacement":X=i;break}if(s!==X)return{reset:{placement:X}}}return{}})}}};function oh(o,e){return Ge(this,null,function*(){const{placement:t,platform:n,elements:s}=o,r=yield n.isRTL==null?void 0:n.isRTL(s.floating),l=Mn(t),i=Pn(t),a=_o(t)==="x",c=["left","top"].includes(l)?-1:1,u=r&&a?-1:1,f=typeof e=="function"?e(o):e;let{mainAxis:p,crossAxis:d,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:He({mainAxis:0,crossAxis:0,alignmentAxis:null},f);return i&&typeof m=="number"&&(d=i==="end"?m*-1:m),a?{x:d*u,y:p*c}:{x:p*c,y:d*u}})}const On=function(o){return o===void 0&&(o=0),{name:"offset",options:o,fn(t){return Ge(this,null,function*(){const{x:n,y:s}=t,r=yield oh(t,o);return{x:n+r.x,y:s+r.y,data:r}})}}},ml=function(o){return o===void 0&&(o={}),{name:"size",options:o,fn(t){return Ge(this,null,function*(){const{placement:n,rects:s,platform:r,elements:l}=t,M=o,{apply:i}=M,a=Bn(M,["apply"]),c=yield dl(t,a),u=Mn(n),f=Pn(n);let p,d;u==="top"||u==="bottom"?(p=u,d=f===((yield r.isRTL==null?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(d=u,p=f==="end"?"top":"bottom");const m=Rt(c.left,0),_=Rt(c.right,0),y=Rt(c.top,0),T=Rt(c.bottom,0),S={availableHeight:s.floating.height-(["left","right"].includes(n)?2*(y!==0||T!==0?y+T:Rt(c.top,c.bottom)):c[p]),availableWidth:s.floating.width-(["top","bottom"].includes(n)?2*(m!==0||_!==0?m+_:Rt(c.left,c.right)):c[d])},N=yield r.getDimensions(l.floating);i==null||i(He(He({},t),S));const R=yield r.getDimensions(l.floating);return N.width!==R.width||N.height!==R.height?{reset:{rects:!0}}:{}})}}};function gl(o){return o.split("-")[0]}function sh(o){return o.split("-")[1]}function rh(o){return["top","bottom"].includes(gl(o))?"x":"y"}function lh(o){return o==="y"?"height":"width"}function Us(o,e,t){let{reference:n,floating:s}=o;const r=n.x+n.width/2-s.width/2,l=n.y+n.height/2-s.height/2,i=rh(e),a=lh(i),c=n[a]/2-s[a]/2,u=gl(e),f=i==="x";let p;switch(u){case"top":p={x:r,y:n.y-s.height};break;case"bottom":p={x:r,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:l};break;case"left":p={x:n.x-s.width,y:l};break;default:p={x:n.x,y:n.y}}switch(sh(e)){case"start":p[i]-=c*(t&&f?-1:1);break;case"end":p[i]+=c*(t&&f?-1:1);break}return p}const ih=(o,e,t)=>Ge(Sl,null,function*(){const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:l}=t,i=yield l.isRTL==null?void 0:l.isRTL(e);let a=yield l.getElementRects({reference:o,floating:e,strategy:s}),{x:c,y:u}=Us(a,n,i),f=n,p={};for(let d=0;d<r.length;d++){const{name:m,fn:_}=r[d],{x:y,y:T,data:S,reset:N}=yield _({x:c,y:u,initialPlacement:n,placement:f,strategy:s,middlewareData:p,rects:a,platform:l,elements:{reference:o,floating:e}});if(c=y!=null?y:c,u=T!=null?T:u,p=At(He({},p),{[m]:He(He({},p[m]),S)}),N){typeof N=="object"&&(N.placement&&(f=N.placement),N.rects&&(a=N.rects===!0?yield l.getElementRects({reference:o,floating:e,strategy:s}):N.rects),{x:c,y:u}=Us(a,f,i)),d=-1;continue}}return{x:c,y:u,placement:f,strategy:s,middlewareData:p}});function qs(o){return At(He({},o),{top:o.y,left:o.x,right:o.x+o.width,bottom:o.y+o.height})}function bl(o){return o&&o.document&&o.location&&o.alert&&o.setInterval}function wt(o){if(o==null)return window;if(!bl(o)){const e=o.ownerDocument;return e&&e.defaultView||window}return o}function sn(o){return wt(o).getComputedStyle(o)}function bt(o){return bl(o)?"":o?(o.nodeName||"").toLowerCase():""}function _l(){const o=navigator.userAgentData;return o!=null&&o.brands?o.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function dt(o){return o instanceof wt(o).HTMLElement}function xt(o){return o instanceof wt(o).Element}function ah(o){return o instanceof wt(o).Node}function wo(o){if(typeof ShadowRoot=="undefined")return!1;const e=wt(o).ShadowRoot;return o instanceof e||o instanceof ShadowRoot}function In(o){const{overflow:e,overflowX:t,overflowY:n}=sn(o);return/auto|scroll|overlay|hidden/.test(e+n+t)}function ch(o){return["table","td","th"].includes(bt(o))}function wl(o){const e=/firefox/i.test(_l()),t=sn(o);return t.transform!=="none"||t.perspective!=="none"||t.contain==="paint"||["transform","perspective"].includes(t.willChange)||e&&t.willChange==="filter"||e&&(t.filter?t.filter!=="none":!1)}function $l(){return!/^((?!chrome|android).)*safari/i.test(_l())}const Ks=Math.min,Xt=Math.max,Cn=Math.round;function _t(o,e,t){var n,s,r,l;e===void 0&&(e=!1),t===void 0&&(t=!1);const i=o.getBoundingClientRect();let a=1,c=1;e&&dt(o)&&(a=o.offsetWidth>0&&Cn(i.width)/o.offsetWidth||1,c=o.offsetHeight>0&&Cn(i.height)/o.offsetHeight||1);const u=xt(o)?wt(o):window,f=!$l()&&t,p=(i.left+(f&&(n=(s=u.visualViewport)==null?void 0:s.offsetLeft)!=null?n:0))/a,d=(i.top+(f&&(r=(l=u.visualViewport)==null?void 0:l.offsetTop)!=null?r:0))/c,m=i.width/a,_=i.height/c;return{width:m,height:_,top:d,right:p+m,bottom:d+_,left:p,x:p,y:d}}function Et(o){return((ah(o)?o.ownerDocument:o.document)||window.document).documentElement}function Ln(o){return xt(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:{scrollLeft:o.pageXOffset,scrollTop:o.pageYOffset}}function vl(o){return _t(Et(o)).left+Ln(o).scrollLeft}function uh(o){const e=_t(o);return Cn(e.width)!==o.offsetWidth||Cn(e.height)!==o.offsetHeight}function fh(o,e,t){const n=dt(e),s=Et(e),r=_t(o,n&&uh(e),t==="fixed");let l={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(n||!n&&t!=="fixed")if((bt(e)!=="body"||In(s))&&(l=Ln(e)),dt(e)){const a=_t(e,!0);i.x=a.x+e.clientLeft,i.y=a.y+e.clientTop}else s&&(i.x=vl(s));return{x:r.left+l.scrollLeft-i.x,y:r.top+l.scrollTop-i.y,width:r.width,height:r.height}}function yl(o){return bt(o)==="html"?o:o.assignedSlot||o.parentNode||(wo(o)?o.host:null)||Et(o)}function Ws(o){return!dt(o)||getComputedStyle(o).position==="fixed"?null:o.offsetParent}function ph(o){let e=yl(o);for(wo(e)&&(e=e.host);dt(e)&&!["html","body"].includes(bt(e));){if(wl(e))return e;e=e.parentNode}return null}function Jn(o){const e=wt(o);let t=Ws(o);for(;t&&ch(t)&&getComputedStyle(t).position==="static";)t=Ws(t);return t&&(bt(t)==="html"||bt(t)==="body"&&getComputedStyle(t).position==="static"&&!wl(t))?e:t||ph(o)||e}function Gs(o){if(dt(o))return{width:o.offsetWidth,height:o.offsetHeight};const e=_t(o);return{width:e.width,height:e.height}}function dh(o){let{rect:e,offsetParent:t,strategy:n}=o;const s=dt(t),r=Et(t);if(t===r)return e;let l={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if((s||!s&&n!=="fixed")&&((bt(t)!=="body"||In(r))&&(l=Ln(t)),dt(t))){const a=_t(t,!0);i.x=a.x+t.clientLeft,i.y=a.y+t.clientTop}return At(He({},e),{x:e.x-l.scrollLeft+i.x,y:e.y-l.scrollTop+i.y})}function hh(o,e){const t=wt(o),n=Et(o),s=t.visualViewport;let r=n.clientWidth,l=n.clientHeight,i=0,a=0;if(s){r=s.width,l=s.height;const c=$l();(c||!c&&e==="fixed")&&(i=s.offsetLeft,a=s.offsetTop)}return{width:r,height:l,x:i,y:a}}function mh(o){var e;const t=Et(o),n=Ln(o),s=(e=o.ownerDocument)==null?void 0:e.body,r=Xt(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),l=Xt(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0);let i=-n.scrollLeft+vl(o);const a=-n.scrollTop;return sn(s||t).direction==="rtl"&&(i+=Xt(t.clientWidth,s?s.clientWidth:0)-r),{width:r,height:l,x:i,y:a}}function kl(o){const e=yl(o);return["html","body","#document"].includes(bt(e))?o.ownerDocument.body:dt(e)&&In(e)?e:kl(e)}function An(o,e){var t;e===void 0&&(e=[]);const n=kl(o),s=n===((t=o.ownerDocument)==null?void 0:t.body),r=wt(n),l=s?[r].concat(r.visualViewport||[],In(n)?n:[]):n,i=e.concat(l);return s?i:i.concat(An(l))}function gh(o,e){const t=e==null||e.getRootNode==null?void 0:e.getRootNode();if(o!=null&&o.contains(e))return!0;if(t&&wo(t)){let n=e;do{if(n&&o===n)return!0;n=n.parentNode||n.host}while(n)}return!1}function bh(o,e){const t=_t(o,!1,e==="fixed"),n=t.top+o.clientTop,s=t.left+o.clientLeft;return{top:n,left:s,x:s,y:n,right:s+o.clientWidth,bottom:n+o.clientHeight,width:o.clientWidth,height:o.clientHeight}}function Zs(o,e,t){return e==="viewport"?qs(hh(o,t)):xt(e)?bh(e,t):qs(mh(Et(o)))}function _h(o){const e=An(o),n=["absolute","fixed"].includes(sn(o).position)&&dt(o)?Jn(o):o;return xt(n)?e.filter(s=>xt(s)&&gh(s,n)&&bt(s)!=="body"):[]}function wh(o){let{element:e,boundary:t,rootBoundary:n,strategy:s}=o;const l=[...t==="clippingAncestors"?_h(e):[].concat(t),n],i=l[0],a=l.reduce((c,u)=>{const f=Zs(e,u,s);return c.top=Xt(f.top,c.top),c.right=Ks(f.right,c.right),c.bottom=Ks(f.bottom,c.bottom),c.left=Xt(f.left,c.left),c},Zs(e,i,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}const $h={getClippingRect:wh,convertOffsetParentRelativeRectToViewportRelativeRect:dh,isElement:xt,getDimensions:Gs,getOffsetParent:Jn,getDocumentElement:Et,getElementRects:o=>{let{reference:e,floating:t,strategy:n}=o;return{reference:fh(e,Jn(t),n),floating:At(He({},Gs(t)),{x:0,y:0})}},getClientRects:o=>Array.from(o.getClientRects()),isRTL:o=>sn(o).direction==="rtl"};function vh(o,e,t,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:i=!1}=n,a=s&&!i,c=r&&!i,u=a||c?[...xt(o)?An(o):[],...An(e)]:[];u.forEach(_=>{a&&_.addEventListener("scroll",t,{passive:!0}),c&&_.addEventListener("resize",t)});let f=null;l&&(f=new ResizeObserver(t),xt(o)&&!i&&f.observe(o),f.observe(e));let p,d=i?_t(o):null;i&&m();function m(){const _=_t(o);d&&(_.x!==d.x||_.y!==d.y||_.width!==d.width||_.height!==d.height)&&t(),d=_,p=requestAnimationFrame(m)}return l||t(),()=>{var _;u.forEach(y=>{a&&y.removeEventListener("scroll",t),c&&y.removeEventListener("resize",t)}),(_=f)==null||_.disconnect(),f=null,i&&cancelAnimationFrame(p)}}const yh=(o,e,t)=>ih(o,e,He({platform:$h},t));function Dn(o){const e={enable:!1,options:void 0,cleanup:null},t={reference:null,floating:null,options:void 0};n(o);function n(c){c===!0?(e.enable=!0,s()):c===!1?(r(),e.enable=!1):(s(),e.enable=!0,e.options=c)}function s(){r(),t.reference&&t.floating&&e.enable&&(e.cleanup=vh(t.reference,t.floating,l,e.options))}function r(){e.cleanup!=null&&(e.cleanup(),e.cleanup=null)}function l(){return Ge(this,null,function*(){if(t.reference&&t.floating){const{reference:c,floating:u,options:f}=t,p=yield yh(c,u,f);Object.assign(u.style,{position:p.strategy,left:`${p.x}px`,top:`${p.y}px`}),f!=null&&f.callback&&f.callback(p,{reference:c,floating:u})}})}function i(c){return t.reference=c,e.enable?s():l(),{destroy(){r(),t.reference=null}}}function a(c,u){return t.floating=c,t.options=u,e.enable?s():l(),{update(f){r(),t.options=f,e.enable?s():l()},destroy(){r(),t.floating=null,t.options=void 0}}}return[i,a,n]}function on(o,e){let t,n;[t,n]=e!=null?e:[];function s(l){t&&o.contains(l.target)&&t(l)}function r(l){n&&!o.contains(l.relatedTarget)&&n(l)}return o.addEventListener("focusin",s),o.addEventListener("focusout",r),{update(l){[t,n]=l!=null?l:[]},destroy(){o.removeEventListener("focusout",r),o.removeEventListener("focusin",s)}}}function Ys(o){let e,t,n,s,r,l,i,a,c,u,f,p,d;function m(S){o[5](S)}let _={class:"h-48 p-3",style:"--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"};o[0]!==void 0&&(_.color=o[0]),t=new al({props:_}),Le.push(()=>kt(t,"color",m));function y(S){o[6](S)}let T={class:"p-3 text-sm"};return o[0]!==void 0&&(T.color=o[0]),i=new cl({props:T}),Le.push(()=>kt(i,"color",y)),{c(){e=b("div"),A(t.$$.fragment),s=x(),r=b("div"),l=x(),A(i.$$.fragment),g(r,"class","border-t"),g(e,"class","absolute w-[240px] border rounded-lg bg-white shadow-lg")},m(S,N){v(S,e,N),E(t,e,null),h(e,s),h(e,r),h(e,l),E(i,e,null),f=!0,p||(d=Ue(c=o[3].call(null,e,{placement:"bottom-start",middleware:[zn(),On(8)]})),p=!0)},p(S,N){const R={};!n&&N&1&&(n=!0,R.color=S[0],Mt(()=>n=!1)),t.$set(R);const M={};!a&&N&1&&(a=!0,M.color=S[0],Mt(()=>a=!1)),i.$set(M)},i(S){f||($(t.$$.fragment,S),$(i.$$.fragment,S),S&&Qe(()=>{u||(u=yt(e,Kt,{},!0)),u.run(1)}),f=!0)},o(S){k(t.$$.fragment,S),k(i.$$.fragment,S),S&&(u||(u=yt(e,Kt,{},!1)),u.run(0)),f=!1},d(S){S&&w(e),C(t),C(i),S&&u&&u.end(),p=!1,d()}}}function kh(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P,z,O,I,D,j,q,X,ne,W=o[1]&&Ys(o);return z=new bo({props:{class:"mt-4"}}),z.$on("color",o[8]),j=new Ye({props:{code:`<script lang="ts">
<\/script>

<section class="prose max-w-none my-4">
</section>

<style lang="postcss">
</style>`}}),{c(){e=b("section"),t=b("div"),t.innerHTML=`This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a> and
    <a href="/focus-action"><code>@apsc/flocus-action</code></a>`,n=x(),s=b("div"),r=b("div"),l=b("div"),l.textContent="Click this button to pick a color",i=x(),a=b("div"),c=b("button"),u=b("span"),f=x(),W&&W.c(),d=x(),m=b("div"),_=b("div"),y=L("Current color: "),T=b("code"),S=L(o[0]),N=x(),R=b("div"),M=b("div"),P=x(),A(z.$$.fragment),O=x(),I=b("h3"),I.textContent="Code",D=x(),A(j.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(u,"class","block border h-[22px] w-[10ch] bg-chess"),Ke(u,"background","linear-gradient(to right, "+o[0]+" 0, "+o[0]+" 100%), var(--bg-chess-background)"),g(c,"class","input py-1"),g(r,"class","basis-1/2"),g(T,"class","uppercase"),g(M,"class","h-[1.5em] bg-chess"),Ke(M,"background","linear-gradient(to right, "+o[0]+" 0, "+o[0]+" 100%), var(--bg-chess-background)"),g(R,"class","p-2 border rounded-md"),g(m,"class","basis-1/2"),g(s,"class","flex gap-8"),g(e,"class","prose max-w-none my-4")},m(B,H){v(B,e,H),h(e,t),h(e,n),h(e,s),h(s,r),h(r,l),h(r,i),h(r,a),h(a,c),h(c,u),h(a,f),W&&W.m(a,null),h(s,d),h(s,m),h(m,_),h(_,y),h(_,T),h(T,S),h(m,N),h(m,R),h(R,M),h(m,P),E(z,m,null),h(e,O),h(e,I),h(e,D),E(j,e,null),q=!0,X||(ne=[Ue(o[2].call(null,c)),G(c,"click",o[4]),Ue(p=on.call(null,a,[void 0,o[7]]))],X=!0)},p(B,[H]){(!q||H&1)&&Ke(u,"background","linear-gradient(to right, "+B[0]+" 0, "+B[0]+" 100%), var(--bg-chess-background)"),B[1]?W?(W.p(B,H),H&2&&$(W,1)):(W=Ys(B),W.c(),$(W,1),W.m(a,null)):W&&(he(),k(W,1,1,()=>{W=null}),me()),p&&Ze(p.update)&&H&2&&p.update.call(null,[void 0,B[7]]),(!q||H&1)&&ye(S,B[0]),(!q||H&1)&&Ke(M,"background","linear-gradient(to right, "+B[0]+" 0, "+B[0]+" 100%), var(--bg-chess-background)")},i(B){q||($(W),$(z.$$.fragment,B),$(j.$$.fragment,B),q=!0)},o(B){k(W),k(z.$$.fragment,B),k(j.$$.fragment,B),q=!1},d(B){B&&w(e),W&&W.d(),C(z),C(j),X=!1,Re(ne)}}}function xh(o,e,t){const[n,s]=Dn(!0);let r="#f70",l=!1;const i=()=>t(1,l=!l);function a(p){r=p,t(0,r)}function c(p){r=p,t(0,r)}return[r,l,n,s,i,a,c,()=>t(1,l=!1),({detail:p})=>t(0,r=p)]}class Th extends Y{constructor(e){super(),Z(this,e,xh,kh,K,{})}}const{document:Vs}=St;function Sh(o){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Eh(o){let e;return{c(){e=L("ColorPicker example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Ch(o){let e;return{c(){e=L("ColorEdit example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Ah(o){let e;return{c(){e=L("Color input Example")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Rh(o){let e,t,n,s,r,l,i,a;return e=new de({props:{$$slots:{default:[Sh]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Eh]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[Ch]},$$scope:{ctx:o}}}),i=new de({props:{$$slots:{default:[Ah]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment)},m(c,u){E(e,c,u),v(c,t,u),E(n,c,u),v(c,s,u),E(r,c,u),v(c,l,u),E(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),r.$set(d);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){k(e.$$.fragment,c),k(n.$$.fragment,c),k(r.$$.fragment,c),k(i.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(s),C(r,c),c&&w(l),C(i,c)}}}function Nh(o){let e,t;return e=new Jp({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Mh(o){let e,t;return e=new Wd({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Ph(o){let e,t;return e=new Yd({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function zh(o){let e,t;return e=new Th({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Oh(o){let e,t,n,s,r,l,i,a,c,u;return e=new et({props:{$$slots:{default:[Rh]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Nh]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[Mh]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[Ph]},$$scope:{ctx:o}}}),c=new pe({props:{$$slots:{default:[zh]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment),a=x(),A(c.$$.fragment)},m(f,p){E(e,f,p),v(f,t,p),E(n,f,p),v(f,s,p),E(r,f,p),v(f,l,p),E(i,f,p),v(f,a,p),E(c,f,p),u=!0},p(f,p){const d={};p&1&&(d.$$scope={dirty:p,ctx:f}),e.$set(d);const m={};p&1&&(m.$$scope={dirty:p,ctx:f}),n.$set(m);const _={};p&1&&(_.$$scope={dirty:p,ctx:f}),r.$set(_);const y={};p&1&&(y.$$scope={dirty:p,ctx:f}),i.$set(y);const T={};p&1&&(T.$$scope={dirty:p,ctx:f}),c.$set(T)},i(f){u||($(e.$$.fragment,f),$(n.$$.fragment,f),$(r.$$.fragment,f),$(i.$$.fragment,f),$(c.$$.fragment,f),u=!0)},o(f){k(e.$$.fragment,f),k(n.$$.fragment,f),k(r.$$.fragment,f),k(i.$$.fragment,f),k(c.$$.fragment,f),u=!1},d(f){C(e,f),f&&w(t),C(n,f),f&&w(s),C(r,f),f&&w(l),C(i,f),f&&w(a),C(c,f)}}}function Ih(o){let e,t,n,s,r,l,i,a,c,u,f;return Vs.title=e=document.title.replace(/(•).*$/,"$1 Color"),u=new Je({props:{$$slots:{default:[Oh]},$$scope:{ctx:o}}}),{c(){t=x(),n=b("section"),s=b("a"),s.textContent="Home",r=x(),l=b("h1"),l.textContent="A set of components for picking and editing colors",i=x(),a=b("ul"),a.innerHTML=`<li>no inline styles</li> 
    <li>the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts" target="_blank">utils.d.ts</a> for definitions of types and functions</li> 
    <li><a href="https://www.npmjs.com/package/@apsc/color">NPM</a></li>`,c=x(),A(u.$$.fragment),g(s,"class","float-right"),g(s,"href","/"),g(l,"class","text-2xl"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(p,d){v(p,t,d),v(p,n,d),h(n,s),h(n,r),h(n,l),h(n,i),h(n,a),h(n,c),E(u,n,null),f=!0},p(p,[d]){(!f||d&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Color"))&&(Vs.title=e);const m={};d&1&&(m.$$scope={dirty:d,ctx:p}),u.$set(m)},i(p){f||($(u.$$.fragment,p),f=!0)},o(p){k(u.$$.fragment,p),f=!1},d(p){p&&w(t),p&&w(n),C(u)}}}class Lh extends Y{constructor(e){super(),Z(this,e,null,Ih,K,{})}}var Xs=`# [Floating UI](https://floating-ui.com/) action for \`use\` Svelte directive

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
`;function Dh(o){let e,t,n;return t=new It({props:{source:Xs.slice(Xs.search(/^[#\s]+API$/im)+1)}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(s,r){v(s,e,r),E(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){s&&w(e),C(t)}}}class jh extends Y{constructor(e){super(),Z(this,e,null,Dh,K,{})}}function Qs(o,e,t){const n=o.slice();return n[20]=e[t],n}function Js(o,e,t){const n=o.slice();return n[23]=e[t],n}function er(o){let e,t=o[23]+"",n,s;return{c(){e=b("option"),n=L(t),e.__value=s=o[23],e.value=e.__value},m(r,l){v(r,e,l),h(e,n)},p:ee,d(r){r&&w(e)}}}function tr(o){let e,t=o[20]+"",n,s;return{c(){e=b("option"),n=L(t),e.__value=s=o[12][o[20]],e.value=e.__value},m(r,l){v(r,e,l),h(e,n)},p:ee,d(r){r&&w(e)}}}function nr(o){let e,t,n,s,r,l,i,a;return{c(){e=b("div"),t=b("div"),n=L(`
        Lorem ipsum dolor sit amet consectetur adipisicing elit`),g(t,"class","arrow svelte-1b5318a"),g(e,"class","tooltip not-prose svelte-1b5318a")},m(c,u){v(c,e,u),h(e,t),o[19](t),h(e,n),l=!0,i||(a=Ue(s=o[9].call(null,e,{placement:o[5],middleware:o[6],callback:o[10]})),i=!0)},p(c,u){s&&Ze(s.update)&&u&96&&s.update.call(null,{placement:c[5],middleware:c[6],callback:c[10]})},i(c){l||(c&&Qe(()=>{r||(r=yt(e,o[7],{},!0)),r.run(1)}),l=!0)},o(c){c&&(r||(r=yt(e,o[7],{},!1)),r.run(0)),l=!1},d(c){c&&w(e),o[19](null),c&&r&&r.end(),i=!1,a()}}}function Bh(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P,z,O,I,D,j,q,X,ne,W=o[4]?"hide":"show",B,H,oe,re,ue,ce,ze,Ie,ke,be=o[11],te=[];for(let Q=0;Q<be.length;Q+=1)te[Q]=er(Js(o,be,Q));let xe=Object.keys(o[12]),fe=[];for(let Q=0;Q<xe.length;Q+=1)fe[Q]=tr(Qs(o,xe,Q));let ge=o[4]&&nr(o);return ce=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=b("section"),t=b("div"),n=b("label"),s=b("span"),s.textContent="placement",r=x(),l=b("select");for(let Q=0;Q<te.length;Q+=1)te[Q].c();i=x(),a=b("label"),c=b("input"),u=x(),f=b("span"),f.textContent="flip",p=x(),d=b("label"),m=b("span"),m.textContent="offset",_=x(),y=b("input"),T=x(),S=b("label"),N=b("span"),N.textContent="size padding",R=x(),M=b("input"),P=x(),z=b("label"),O=b("span"),O.textContent="transition",I=x(),D=b("select");for(let Q=0;Q<fe.length;Q+=1)fe[Q].c();j=x(),q=b("div"),X=b("button"),ne=L("Click me to "),B=L(W),H=x(),ge&&ge.c(),oe=x(),re=b("h3"),re.textContent="Code",ue=x(),A(ce.$$.fragment),g(l,"class","input"),o[5]===void 0&&Qe(()=>o[13].call(l)),g(c,"type","checkbox"),g(a,"class","whitespace-nowrap"),g(y,"type","number"),g(y,"class","input w-[8ch]"),g(M,"type","number"),g(M,"class","input w-[8ch]"),g(D,"class","input"),o[7]===void 0&&Qe(()=>o[17].call(D)),g(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),g(X,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),g(q,"class","h-64 flex items-center justify-center border"),g(e,"class","prose max-w-none my-4")},m(Q,Oe){v(Q,e,Oe),h(e,t),h(t,n),h(n,s),h(n,r),h(n,l);for(let Te=0;Te<te.length;Te+=1)te[Te].m(l,null);ft(l,o[5]),h(t,i),h(t,a),h(a,c),c.checked=o[2],h(a,u),h(a,f),h(t,p),h(t,d),h(d,m),h(d,_),h(d,y),Ve(y,o[1]),h(t,T),h(t,S),h(S,N),h(S,R),h(S,M),Ve(M,o[3]),h(t,P),h(t,z),h(z,O),h(z,I),h(z,D);for(let Te=0;Te<fe.length;Te+=1)fe[Te].m(D,null);ft(D,o[7]),h(e,j),h(e,q),h(q,X),h(X,ne),h(X,B),h(q,H),ge&&ge.m(q,null),h(e,oe),h(e,re),h(e,ue),E(ce,e,null),ze=!0,Ie||(ke=[G(l,"change",o[13]),G(c,"change",o[14]),G(y,"input",o[15]),G(M,"input",o[16]),G(D,"change",o[17]),Ue(o[8].call(null,X)),G(X,"click",o[18])],Ie=!0)},p(Q,[Oe]){if(Oe&2048){be=Q[11];let _e;for(_e=0;_e<be.length;_e+=1){const Ne=Js(Q,be,_e);te[_e]?te[_e].p(Ne,Oe):(te[_e]=er(Ne),te[_e].c(),te[_e].m(l,null))}for(;_e<te.length;_e+=1)te[_e].d(1);te.length=be.length}if(Oe&2080&&ft(l,Q[5]),Oe&4&&(c.checked=Q[2]),Oe&2&&ot(y.value)!==Q[1]&&Ve(y,Q[1]),Oe&8&&ot(M.value)!==Q[3]&&Ve(M,Q[3]),Oe&4096){xe=Object.keys(Q[12]);let _e;for(_e=0;_e<xe.length;_e+=1){const Ne=Qs(Q,xe,_e);fe[_e]?fe[_e].p(Ne,Oe):(fe[_e]=tr(Ne),fe[_e].c(),fe[_e].m(D,null))}for(;_e<fe.length;_e+=1)fe[_e].d(1);fe.length=xe.length}Oe&4224&&ft(D,Q[7]),(!ze||Oe&16)&&W!==(W=Q[4]?"hide":"show")&&ye(B,W),Q[4]?ge?(ge.p(Q,Oe),Oe&16&&$(ge,1)):(ge=nr(Q),ge.c(),$(ge,1),ge.m(q,null)):ge&&(he(),k(ge,1,1,()=>{ge=null}),me());const Te={};Oe&160&&(Te.code=`<script lang="ts"
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
</style>`),ce.$set(Te)},i(Q){ze||($(ge),$(ce.$$.fragment,Q),ze=!0)},o(Q){k(ge),k(ce.$$.fragment,Q),ze=!1},d(Q){Q&&w(e),Fe(te,Q),Fe(fe,Q),ge&&ge.d(),C(ce),Ie=!1,Re(ke)}}}function Fh(o,e,t){const[n,s]=Dn(!0);let r,l=!1;function i(z){const{placement:O,middlewareData:I}=z;if(I.arrow){const{x:D,y:j}=I.arrow,q={top:"bottom",right:"left",bottom:"top",left:"right"}[O.split("-")[0]];q&&Object.assign(r.style,{left:D!=null?`${D}px`:"",top:j!=null?`${j}px`:"",right:"",bottom:"",[q]:"-6px"})}}const a=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let c=a[0],u=16,f=!0,p=16,d=[],m;const _={slide:Kt,scale:zp,fade:Pp,blur:Mp,none:()=>({delay:0,duration:0})};function y(){c=Qt(this),t(5,c),t(11,a)}function T(){f=this.checked,t(2,f)}function S(){u=ot(this.value),t(1,u)}function N(){p=ot(this.value),t(3,p)}function R(){m=Qt(this),t(7,m),t(12,_)}const M=()=>t(4,l=!l);function P(z){Le[z?"unshift":"push"](()=>{r=z,t(0,r)})}return o.$$.update=()=>{o.$$.dirty&15&&t(6,d=[On(u),f&&zn(),ml({padding:p,apply({availableWidth:z,availableHeight:O,elements:I}){Object.assign(I.floating.style,{maxWidth:`${z}px`,maxHeight:`${O}px`})}}),r&&hl({element:r})].filter(z=>!!z))},[r,u,f,p,l,c,d,m,n,s,i,a,_,y,T,S,N,R,M,P]}class Hh extends Y{constructor(e){super(),Z(this,e,Fh,Bh,K,{})}}function or(o,e,t){const n=o.slice();return n[18]=e[t],n}function sr(o){let e,t=o[18]+"",n,s;return{c(){e=b("option"),n=L(t),e.__value=s=o[18],e.value=e.__value},m(r,l){v(r,e,l),h(e,n)},p:ee,d(r){r&&w(e)}}}function Uh(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P,z,O,I,D=o[1]?"hide":"show",j,q,X,ne,W,B,H,oe,re,ue,ce,ze,Ie,ke=o[10],be=[];for(let te=0;te<ke.length;te+=1)be[te]=sr(or(o,ke,te));return ue=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=b("section"),t=b("div"),n=b("label"),s=b("span"),s.textContent="placement",r=x(),l=b("select");for(let te=0;te<be.length;te+=1)be[te].c();i=x(),a=b("label"),c=b("input"),u=x(),f=b("span"),f.textContent="flip",p=x(),d=b("label"),m=b("span"),m.textContent="offset",_=x(),y=b("input"),T=x(),S=b("label"),N=b("span"),N.textContent="size padding",R=x(),M=b("input"),P=x(),z=b("div"),O=b("button"),I=L("Click me to "),j=L(D),q=x(),X=b("div"),ne=b("div"),W=L(`
      Lorem ipsum dolor sit amet consectetur adipisicing elit`),H=x(),oe=b("h3"),oe.textContent="Code",re=x(),A(ue.$$.fragment),g(l,"class","input"),o[5]===void 0&&Qe(()=>o[11].call(l)),g(c,"type","checkbox"),g(a,"class","whitespace-nowrap"),g(y,"type","number"),g(y,"class","input w-[8ch]"),g(M,"type","number"),g(M,"class","input w-[8ch]"),g(t,"class","mb-8 flex justify-evenly flex-wrap gap-y-3"),g(O,"class","input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"),g(ne,"class","arrow svelte-1lvd4kc"),g(X,"class","tooltip not-prose svelte-1lvd4kc"),Be(X,"in",o[1]),Be(X,"out",!o[1]),g(z,"class","h-64 flex items-center justify-center border"),g(e,"class","prose max-w-none my-4")},m(te,xe){v(te,e,xe),h(e,t),h(t,n),h(n,s),h(n,r),h(n,l);for(let fe=0;fe<be.length;fe+=1)be[fe].m(l,null);ft(l,o[5]),h(t,i),h(t,a),h(a,c),c.checked=o[3],h(a,u),h(a,f),h(t,p),h(t,d),h(d,m),h(d,_),h(d,y),Ve(y,o[2]),h(t,T),h(t,S),h(S,N),h(S,R),h(S,M),Ve(M,o[4]),h(e,P),h(e,z),h(z,O),h(O,I),h(O,j),h(z,q),h(z,X),h(X,ne),o[16](ne),h(X,W),h(e,H),h(e,oe),h(e,re),E(ue,e,null),ce=!0,ze||(Ie=[G(l,"change",o[11]),G(c,"change",o[12]),G(y,"input",o[13]),G(M,"input",o[14]),Ue(o[7].call(null,O)),G(O,"click",o[15]),Ue(B=o[8].call(null,X,{placement:o[5],middleware:o[6],callback:o[9]}))],ze=!0)},p(te,[xe]){if(xe&1024){ke=te[10];let ge;for(ge=0;ge<ke.length;ge+=1){const Q=or(te,ke,ge);be[ge]?be[ge].p(Q,xe):(be[ge]=sr(Q),be[ge].c(),be[ge].m(l,null))}for(;ge<be.length;ge+=1)be[ge].d(1);be.length=ke.length}xe&1056&&ft(l,te[5]),xe&8&&(c.checked=te[3]),xe&4&&ot(y.value)!==te[2]&&Ve(y,te[2]),xe&16&&ot(M.value)!==te[4]&&Ve(M,te[4]),(!ce||xe&2)&&D!==(D=te[1]?"hide":"show")&&ye(j,D),B&&Ze(B.update)&&xe&96&&B.update.call(null,{placement:te[5],middleware:te[6],callback:te[9]}),xe&2&&Be(X,"in",te[1]),xe&2&&Be(X,"out",!te[1]);const fe={};xe&32&&(fe.code=`<script lang="ts"
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
</style>`),ue.$set(fe)},i(te){ce||($(ue.$$.fragment,te),ce=!0)},o(te){k(ue.$$.fragment,te),ce=!1},d(te){te&&w(e),Fe(be,te),o[16](null),C(ue),ze=!1,Re(Ie)}}}function qh(o,e,t){const[n,s,r]=Dn(!0);let l,i=!1;function a(M){const{placement:P,middlewareData:z}=M;if(z.arrow){const{x:O,y:I}=z.arrow,D={top:"bottom",right:"left",bottom:"top",left:"right"}[P.split("-")[0]];D&&Object.assign(l.style,{left:O!=null?`${O}px`:"",top:I!=null?`${I}px`:"",right:"",bottom:"",[D]:"-6px"})}}const c=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"];let u=c[0],f=16,p=!0,d=16,m=[];function _(){u=Qt(this),t(5,u),t(10,c)}function y(){p=this.checked,t(3,p)}function T(){f=ot(this.value),t(2,f)}function S(){d=ot(this.value),t(4,d)}const N=()=>t(1,i=!i);function R(M){Le[M?"unshift":"push"](()=>{l=M,t(0,l)})}return o.$$.update=()=>{o.$$.dirty&2&&r(i),o.$$.dirty&29&&t(6,m=[On(f),p&&zn(),ml({padding:d,apply({availableWidth:M,availableHeight:P,elements:z}){Object.assign(z.floating.style,{maxWidth:`${M}px`,maxHeight:`${P}px`})}}),l&&hl({element:l})].filter(M=>!!M))},[l,i,f,p,d,u,m,n,s,a,c,_,y,T,S,N,R]}class Kh extends Y{constructor(e){super(),Z(this,e,qh,Uh,K,{})}}const{document:rr}=St;function Wh(o){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Gh(o){let e;return{c(){e=L("Transition JS demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Zh(o){let e;return{c(){e=L("Transition CSS demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Yh(o){let e,t,n,s,r,l;return e=new de({props:{$$slots:{default:[Wh]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Gh]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[Zh]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment)},m(i,a){E(e,i,a),v(i,t,a),E(n,i,a),v(i,s,a),E(r,i,a),l=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){k(e.$$.fragment,i),k(n.$$.fragment,i),k(r.$$.fragment,i),l=!1},d(i){C(e,i),i&&w(t),C(n,i),i&&w(s),C(r,i)}}}function Vh(o){let e,t;return e=new jh({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Xh(o){let e,t;return e=new Hh({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Qh(o){let e,t;return e=new Kh({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Jh(o){let e,t,n,s,r,l,i,a;return e=new et({props:{$$slots:{default:[Yh]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Vh]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[Xh]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[Qh]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment)},m(c,u){E(e,c,u),v(c,t,u),E(n,c,u),v(c,s,u),E(r,c,u),v(c,l,u),E(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),r.$set(d);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){k(e.$$.fragment,c),k(n.$$.fragment,c),k(r.$$.fragment,c),k(i.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(s),C(r,c),c&&w(l),C(i,c)}}}function em(o){let e,t,n,s,r,l,i,a,c,u,f;return rr.title=e=document.title.replace(/(•).*$/,"$1 Floating UI action"),u=new Je({props:{$$slots:{default:[Jh]},$$scope:{ctx:o}}}),{c(){t=x(),n=b("section"),s=b("a"),s.textContent="Home",r=x(),l=b("h1"),l.textContent="Action to use Floating UI",i=x(),a=b("ul"),a.innerHTML=`<li>allows you to use both Svelte transitions and CSS transitions</li> 
    <li>dependence <a href="https://github.com/floating-ui/floating-ui" target="_blank">@floating-ui/dom</a></li> 
    <li><a href="https://www.npmjs.com/package/@apsc/floating-ui-action">NPM</a></li>`,c=x(),A(u.$$.fragment),g(s,"class","float-right"),g(s,"href","/"),g(l,"class","text-2xl"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(p,d){v(p,t,d),v(p,n,d),h(n,s),h(n,r),h(n,l),h(n,i),h(n,a),h(n,c),E(u,n,null),f=!0},p(p,[d]){(!f||d&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Floating UI action"))&&(rr.title=e);const m={};d&1&&(m.$$scope={dirty:d,ctx:p}),u.$set(m)},i(p){f||($(u.$$.fragment,p),f=!0)},o(p){k(u.$$.fragment,p),f=!1},d(p){p&&w(t),p&&w(n),C(u)}}}class tm extends Y{constructor(e){super(),Z(this,e,null,em,K,{})}}var lr=`# Action to control \`focusin\` and \`focusout\` for Svelte directive \`use\`

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
`;function nm(o){let e,t,n;return t=new It({props:{source:lr.slice(lr.search(/^[#\s]+API$/im)+1)}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(s,r){v(s,e,r),E(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){s&&w(e),C(t)}}}class om extends Y{constructor(e){super(),Z(this,e,null,nm,K,{})}}function sm(o){let e;return{c(){e=L("\xA0")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function rm(o){let e;return{c(){e=L("Try to close the dropdown block by clicking outside")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function lm(o){let e;return{c(){e=L("Select")},m(t,n){v(t,e,n)},p:ee,d(t){t&&w(e)}}}function im(o){let e,t,n;return{c(){e=L("Selected "),t=b("small"),n=L(o[3]),g(t,"class","font-semibold text-gray-400")},m(s,r){v(s,e,r),v(s,t,r),h(t,n)},p(s,r){r&8&&ye(n,s[3])},d(s){s&&w(e),s&&w(t)}}}function ir(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M;return{c(){e=b("div"),t=b("div"),t.textContent="Choose one of the items",n=x(),s=b("div"),r=b("label"),l=b("input"),i=x(),a=b("span"),a.textContent="Firts",c=x(),u=b("label"),f=b("input"),p=x(),d=b("span"),d.textContent="Second",m=x(),_=b("label"),y=b("input"),T=x(),S=b("span"),S.textContent="Third",g(t,"class","alert svelte-1hjb9pe"),Be(t,"error",o[2]),g(l,"type","radio"),l.__value="Firts",l.value=l.__value,g(l,"name","item"),o[8][0].push(l),g(f,"type","radio"),f.__value="Second",f.value=f.__value,g(f,"name","item"),o[8][0].push(f),g(y,"type","radio"),y.__value="Third",y.value=y.__value,g(y,"name","item"),o[8][0].push(y),g(s,"class","mt-2 flex gap-4 px-2"),g(e,"class","absolute border shadow-md rounded-md p-2 top-2 bg-white"),g(e,"tabindex","-1")},m(P,z){v(P,e,z),h(e,t),h(e,n),h(e,s),h(s,r),h(r,l),l.checked=l.__value===o[3],h(r,i),h(r,a),h(s,c),h(s,u),h(u,f),f.checked=f.__value===o[3],h(u,p),h(u,d),h(s,m),h(s,_),h(_,y),y.checked=y.__value===o[3],h(_,T),h(_,S),o[11](e),R||(M=[G(l,"change",o[7]),G(f,"change",o[9]),G(y,"change",o[10]),Ue(N=on.call(null,e,[void 0,o[4]]))],R=!0)},p(P,z){z&4&&Be(t,"error",P[2]),z&8&&(l.checked=l.__value===P[3]),z&8&&(f.checked=f.__value===P[3]),z&8&&(y.checked=y.__value===P[3])},d(P){P&&w(e),o[8][0].splice(o[8][0].indexOf(l),1),o[8][0].splice(o[8][0].indexOf(f),1),o[8][0].splice(o[8][0].indexOf(y),1),o[11](null),R=!1,Re(M)}}}function am(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T;function S(I,D){return I[1]&&!I[3]?rm:sm}let N=S(o),R=N(o);function M(I,D){return I[3]?im:lm}let P=M(o),z=P(o),O=o[1]&&ir(o);return m=new Ye({props:{code:`<script lang="ts"
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
`}}),{c(){e=b("section"),t=b("div"),R.c(),n=x(),s=b("div"),r=b("button"),z.c(),l=x(),i=b("button"),a=L("Reset"),c=x(),u=b("div"),O&&O.c(),f=x(),p=b("h3"),p.textContent="Code",d=x(),A(m.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(r,"class","input w-[200px]"),g(i,"class","input"),i.disabled=o[1],g(u,"class","relative"),g(s,"class","w-fit mx-auto"),g(e,"class","prose max-w-none my-4")},m(I,D){v(I,e,D),h(e,t),R.m(t,null),h(e,n),h(e,s),h(s,r),z.m(r,null),h(s,l),h(s,i),h(i,a),h(s,c),h(s,u),O&&O.m(u,null),h(e,f),h(e,p),h(e,d),E(m,e,null),_=!0,y||(T=[G(r,"click",o[5]),G(i,"click",o[6])],y=!0)},p(I,[D]){N!==(N=S(I))&&(R.d(1),R=N(I),R&&(R.c(),R.m(t,null))),P===(P=M(I))&&z?z.p(I,D):(z.d(1),z=P(I),z&&(z.c(),z.m(r,null))),(!_||D&2)&&(i.disabled=I[1]),I[1]?O?O.p(I,D):(O=ir(I),O.c(),O.m(u,null)):O&&(O.d(1),O=null)},i(I){_||($(m.$$.fragment,I),_=!0)},o(I){k(m.$$.fragment,I),_=!1},d(I){I&&w(e),R.d(),z.d(),O&&O.d(),C(m),y=!1,Re(T)}}}function cm(o,e,t){let n=!1,s=!1,r,l="";function i(){l?(t(1,n=!1),t(2,s=!1)):t(2,s=!0)}const a=[[]],c=()=>t(1,n=!0),u=()=>t(3,l="");function f(){l=this.__value,t(3,l)}function p(){l=this.__value,t(3,l)}function d(){l=this.__value,t(3,l)}function m(_){Le[_?"unshift":"push"](()=>{r=_,t(0,r)})}return o.$$.update=()=>{o.$$.dirty&1&&r&&r.focus()},[r,n,s,l,i,c,u,f,a,p,d,m]}class um extends Y{constructor(e){super(),Z(this,e,cm,am,K,{})}}function ar(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P;return{c(){e=b("ul"),t=b("li"),n=b("button"),n.textContent="Open",s=x(),r=b("li"),l=b("button"),l.textContent="Close",i=x(),a=b("li"),c=b("button"),c.textContent="Upload",u=x(),f=b("li"),p=b("button"),p.textContent="Download",d=x(),m=b("li"),_=x(),y=b("li"),T=b("button"),T.textContent="About",g(n,"class","svelte-nxgrg9"),g(t,"class","svelte-nxgrg9"),g(l,"class","svelte-nxgrg9"),g(r,"class","svelte-nxgrg9"),g(c,"class","svelte-nxgrg9"),g(a,"class","svelte-nxgrg9"),g(p,"class","svelte-nxgrg9"),g(f,"class","svelte-nxgrg9"),g(m,"class","separator svelte-nxgrg9"),g(T,"class","svelte-nxgrg9"),g(y,"class","svelte-nxgrg9"),g(e,"class","dropdown svelte-nxgrg9"),g(e,"tabindex","-1")},m(z,O){v(z,e,O),h(e,t),h(t,n),h(e,s),h(e,r),h(r,l),h(e,i),h(e,a),h(a,c),h(e,u),h(e,f),h(f,p),h(e,d),h(e,m),h(e,_),h(e,y),h(y,T),R=!0,M||(P=[G(n,"click",o[4]),G(l,"click",o[5]),G(c,"click",o[6]),G(p,"click",o[7]),G(T,"click",o[8]),Ue(S=o[2].call(null,e,{placement:"bottom-start",middleware:[zn(),On(8)]}))],M=!0)},p:ee,i(z){R||(z&&Qe(()=>{N||(N=yt(e,Kt,{},!0)),N.run(1)}),R=!0)},o(z){z&&(N||(N=yt(e,Kt,{},!1)),N.run(0)),R=!1},d(z){z&&w(e),z&&N&&N.end(),M=!1,Re(P)}}}function fm(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_=o[0]&&ar(o);return f=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=b("section"),t=b("div"),t.innerHTML='This example uses <a href="/floating-ui-action"><code>@apsc/floating-ui-action</code></a>',n=x(),s=b("div"),r=b("button"),r.textContent="Action",l=x(),_&&_.c(),a=x(),c=b("h3"),c.textContent="Code",u=x(),A(f.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(r,"class","input"),g(s,"class","w-fit mx-auto"),g(e,"class","prose max-w-none my-4")},m(y,T){v(y,e,T),h(e,t),h(e,n),h(e,s),h(s,r),h(s,l),_&&_.m(s,null),h(e,a),h(e,c),h(e,u),E(f,e,null),p=!0,d||(m=[Ue(o[1].call(null,r)),G(r,"click",o[3]),Ue(i=on.call(null,s,[void 0,o[9]]))],d=!0)},p(y,[T]){y[0]?_?(_.p(y,T),T&1&&$(_,1)):(_=ar(y),_.c(),$(_,1),_.m(s,null)):_&&(he(),k(_,1,1,()=>{_=null}),me()),i&&Ze(i.update)&&T&1&&i.update.call(null,[void 0,y[9]])},i(y){p||($(_),$(f.$$.fragment,y),p=!0)},o(y){k(_),k(f.$$.fragment,y),p=!1},d(y){y&&w(e),_&&_.d(),C(f),d=!1,Re(m)}}}function pm(o,e,t){const[n,s,r]=Dn(!0);let l=!1;const i=()=>t(0,l=!0),a=()=>t(0,l=!1),c=()=>t(0,l=!1),u=()=>t(0,l=!1),f=()=>t(0,l=!1),p=()=>t(0,l=!1),d=()=>t(0,l=!1);return o.$$.update=()=>{o.$$.dirty&1&&r(l)},[l,n,s,i,a,c,u,f,p,d]}class dm extends Y{constructor(e){super(),Z(this,e,pm,fm,K,{})}}function hm(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N;return y=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){e=b("section"),t=b("div"),t.textContent="This example highlights a focused fieldset.",n=x(),s=b("div"),r=b("div"),l=b("fieldset"),l.innerHTML=`<legend class="svelte-c2p0zs">Your details</legend> 
        <label class="svelte-c2p0zs"><span>Name</span> 
          <input type="text" class="input svelte-c2p0zs"/></label> 
        <label class="svelte-c2p0zs"><span>Email</span> 
          <input type="text" class="input svelte-c2p0zs"/></label> 
        <label class="svelte-c2p0zs"><span>Phone</span> 
          <input type="text" class="input svelte-c2p0zs"/></label>`,a=x(),c=b("div"),c.innerHTML='<button type="button" class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8 svelte-c2p0zs">Submit</button>',u=x(),f=b("fieldset"),f.innerHTML=`<legend class="svelte-c2p0zs">Delivery address</legend> 
      <label class="svelte-c2p0zs"><span>Address</span> 
        <textarea rows="3" class="input svelte-c2p0zs"></textarea></label> 
      <label class="svelte-c2p0zs"><span>Postcode</span> 
        <input type="text" class="input svelte-c2p0zs"/></label> 
      <label class="svelte-c2p0zs"><span>Country</span> 
        <input type="text" class="input svelte-c2p0zs"/></label>`,d=x(),m=b("h3"),m.textContent="Code",_=x(),A(y.$$.fragment),g(t,"class","mb-8 pb-2 border-b text-center text-gray-500"),g(l,"class","svelte-c2p0zs"),Be(l,"active",o[0]),g(c,"class","mt-8"),g(r,"class","basis-1/2"),g(f,"class","basis-1/2 svelte-c2p0zs"),Be(f,"active",o[1]),g(s,"class","form svelte-c2p0zs"),g(e,"class","prose max-w-none my-4")},m(R,M){v(R,e,M),h(e,t),h(e,n),h(e,s),h(s,r),h(r,l),h(r,a),h(r,c),h(s,u),h(s,f),h(e,d),h(e,m),h(e,_),E(y,e,null),T=!0,S||(N=[Ue(i=on.call(null,l,[o[2],o[3]])),Ue(p=on.call(null,f,[o[4],o[5]]))],S=!0)},p(R,[M]){i&&Ze(i.update)&&M&1&&i.update.call(null,[R[2],R[3]]),M&1&&Be(l,"active",R[0]),p&&Ze(p.update)&&M&2&&p.update.call(null,[R[4],R[5]]),M&2&&Be(f,"active",R[1])},i(R){T||($(y.$$.fragment,R),T=!0)},o(R){k(y.$$.fragment,R),T=!1},d(R){R&&w(e),C(y),S=!1,Re(N)}}}function mm(o,e,t){let n=!1,s=!1;return[n,s,()=>t(0,n=!0),()=>t(0,n=!1),()=>t(1,s=!0),()=>t(1,s=!1)]}class gm extends Y{constructor(e){super(),Z(this,e,mm,hm,K,{})}}const{document:cr}=St;function bm(o){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function _m(o){let e;return{c(){e=L("Reqired demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function wm(o){let e;return{c(){e=L("Dropdown demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function $m(o){let e;return{c(){e=L("Style demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function vm(o){let e,t,n,s,r,l,i,a;return e=new de({props:{$$slots:{default:[bm]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[_m]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[wm]},$$scope:{ctx:o}}}),i=new de({props:{$$slots:{default:[$m]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment)},m(c,u){E(e,c,u),v(c,t,u),E(n,c,u),v(c,s,u),E(r,c,u),v(c,l,u),E(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),r.$set(d);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){k(e.$$.fragment,c),k(n.$$.fragment,c),k(r.$$.fragment,c),k(i.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(s),C(r,c),c&&w(l),C(i,c)}}}function ym(o){let e,t;return e=new om({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function km(o){let e,t;return e=new um({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function xm(o){let e,t;return e=new dm({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Tm(o){let e,t;return e=new gm({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Sm(o){let e,t,n,s,r,l,i,a,c,u;return e=new et({props:{$$slots:{default:[vm]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[ym]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[km]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[xm]},$$scope:{ctx:o}}}),c=new pe({props:{$$slots:{default:[Tm]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment),a=x(),A(c.$$.fragment)},m(f,p){E(e,f,p),v(f,t,p),E(n,f,p),v(f,s,p),E(r,f,p),v(f,l,p),E(i,f,p),v(f,a,p),E(c,f,p),u=!0},p(f,p){const d={};p&1&&(d.$$scope={dirty:p,ctx:f}),e.$set(d);const m={};p&1&&(m.$$scope={dirty:p,ctx:f}),n.$set(m);const _={};p&1&&(_.$$scope={dirty:p,ctx:f}),r.$set(_);const y={};p&1&&(y.$$scope={dirty:p,ctx:f}),i.$set(y);const T={};p&1&&(T.$$scope={dirty:p,ctx:f}),c.$set(T)},i(f){u||($(e.$$.fragment,f),$(n.$$.fragment,f),$(r.$$.fragment,f),$(i.$$.fragment,f),$(c.$$.fragment,f),u=!0)},o(f){k(e.$$.fragment,f),k(n.$$.fragment,f),k(r.$$.fragment,f),k(i.$$.fragment,f),k(c.$$.fragment,f),u=!1},d(f){C(e,f),f&&w(t),C(n,f),f&&w(s),C(r,f),f&&w(l),C(i,f),f&&w(a),C(c,f)}}}function Em(o){let e,t,n,s,r,l,i,a,c,u,f;return cr.title=e=document.title.replace(/(•).*$/,"$1 Focus action"),u=new Je({props:{$$slots:{default:[Sm]},$$scope:{ctx:o}}}),{c(){t=x(),n=b("section"),s=b("a"),s.textContent="Home",r=x(),l=b("h1"),l.innerHTML=`Action to control <code>focusin</code> and <code>focusout</code><br/>for directive
    <code>use</code>`,i=x(),a=b("ul"),a.innerHTML=`<li>no dependencies</li> 
    <li>correctly detects loss of focus with <code>Tab</code></li>`,c=x(),A(u.$$.fragment),g(s,"class","float-right"),g(s,"href","/"),g(l,"class","text-2xl"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(p,d){v(p,t,d),v(p,n,d),h(n,s),h(n,r),h(n,l),h(n,i),h(n,a),h(n,c),E(u,n,null),f=!0},p(p,[d]){(!f||d&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Focus action"))&&(cr.title=e);const m={};d&1&&(m.$$scope={dirty:d,ctx:p}),u.$set(m)},i(p){f||($(u.$$.fragment,p),f=!0)},o(p){k(u.$$.fragment,p),f=!1},d(p){p&&w(t),p&&w(n),C(u)}}}class Cm extends Y{constructor(e){super(),Z(this,e,null,Em,K,{})}}var ur=`# Action to call a function by keyboard shortcut for Svelte directive \`use\`

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
`;function Am(o){let e,t,n;return t=new It({props:{source:ur.slice(ur.search(/^[#\s]+API$/im)+1)}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(s,r){v(s,e,r),E(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){s&&w(e),C(t)}}}class Rm extends Y{constructor(e){super(),Z(this,e,null,Am,K,{})}}const xl={alt:"Alt",cmd:"Cmd",ctrl:"Ctrl",shift:"Shift",joinWith:" + ",hideKey:"never"};let jn=xl;const Nm=()=>({alphanumeric:/^Key([A-Z01-9])$/,alpha:/^Key([A-Z])$/,always:/^Key(.*)$/,never:/^(.*)$/})[jn.hideKey];function Mm(o){return{character:[16,17,18,91,93,224].indexOf(o.keyCode)!==-1?null:o.code.replace(Nm(),"$1"),modifiers:{cmd:o.metaKey,ctrl:o.ctrlKey,alt:o.altKey,shift:o.shiftKey}}}function Pm(o){const e=Mm(o),n=Object.entries(e.modifiers).reduce((s,[r,l])=>(l&&s.push(jn[r]),s),[]);return e.character&&n.push(e.character),n}function zm(o){return jn=Object.assign(Object.assign({},xl),o)}const Om=o=>Pm(o).join(jn.joinWith);zm({joinWith:"+"});function $o(o,e){let{event:t,capture:n=!1,passive:s=!1,preventDefault:r=!1,stopImmediatePropagation:l=!1,stopPropagation:i=!1,fns:a}=e;function c(u){const f=Om(u);typeof a[f]=="function"&&(r&&u.preventDefault(),i&&u.stopPropagation(),l&&u.stopImmediatePropagation(),a[f](u))}return o.addEventListener(t,c,{capture:n,passive:s}),{destroy(){o.removeEventListener(t,c,{capture:n})},update(u){const f=t!==u.event||n!==u.capture||s!==u.passive;f&&o.removeEventListener(t,c,{capture:n}),{event:t,capture:n=!1,passive:s=!1,preventDefault:r=!1,stopImmediatePropagation:l=!1,stopPropagation:i=!1,fns:a}=u,f&&o.addEventListener(t,c,{capture:n,passive:s})}}}function fr(o,e,t){const n=o.slice();return n[18]=e[t],n[20]=t,n}function pr(o){let e,t=o[18]+"",n,s,r,l;function i(){return o[17](o[20])}return{c(){e=b("div"),n=L(t),s=x(),g(e,"class","beverage-item svelte-12wr8dw"),Be(e,"active",o[20]===o[1])},m(a,c){v(a,e,c),h(e,n),h(e,s),r||(l=G(e,"click",i),r=!0)},p(a,c){o=a,c&2&&Be(e,"active",o[20]===o[1])},d(a){a&&w(e),r=!1,l()}}}function Im(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P=o[2],z=[];for(let O=0;O<P.length;O+=1)z[O]=pr(fr(o,P,O));return S=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var O;e=b("section"),t=b("div"),n=b("div"),n.textContent="Select a beverage",s=x(),r=b("div"),l=b("input"),c=x(),u=b("button"),u.textContent="Reset",f=x(),p=b("div"),p.innerHTML=`Use the navigation buttons
      <code>ArrowUp</code>,
      <code>ArrowDown</code>,
      <code>ArrowLeft</code>,
      <code>ArrowRight</code>,
      <code>PageUp</code>,
      <code>PageDown</code>,
      <code>Home</code>,
      <code>End</code>,
      <code>Ctrl+Home</code>,
      <code>Ctrl+End</code> to select a drink`,d=x(),m=b("div");for(let I=0;I<z.length;I+=1)z[I].c();_=x(),y=b("h3"),y.textContent="Code",T=x(),A(S.$$.fragment),g(l,"type","text"),g(l,"class","input grow"),l.readOnly=!0,l.value=i=(O=o[2][o[1]])!=null?O:"",g(u,"type","button"),g(u,"class","input"),g(r,"class","flex"),g(p,"class","block text-sm mt-1 text-gray-500"),g(t,"class","my-4"),g(m,"class","columns-3 gap-3 border-2 border-gray-200 rounded-md p-2"),g(e,"class","prose max-w-none my-4")},m(O,I){v(O,e,I),h(e,t),h(t,n),h(t,s),h(t,r),h(r,l),o[5](l),h(r,c),h(r,u),h(t,f),h(t,p),h(e,d),h(e,m);for(let D=0;D<z.length;D+=1)z[D].m(m,null);h(e,_),h(e,y),h(e,T),E(S,e,null),N=!0,R||(M=[Ue(a=$o.call(null,l,{event:"keydown",preventDefault:!0,fns:{ArrowUp:o[6],ArrowDown:o[7],ArrowLeft:o[8],ArrowRight:o[9],PageUp:o[10],PageDown:o[11],Home:o[12],End:o[13],"Ctrl+Home":o[14],"Ctrl+End":o[15]}})),G(u,"click",o[16])],R=!0)},p(O,[I]){var D;if((!N||I&2&&i!==(i=(D=O[2][O[1]])!=null?D:"")&&l.value!==i)&&(l.value=i),a&&Ze(a.update)&&I&2&&a.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:O[6],ArrowDown:O[7],ArrowLeft:O[8],ArrowRight:O[9],PageUp:O[10],PageDown:O[11],Home:O[12],End:O[13],"Ctrl+Home":O[14],"Ctrl+End":O[15]}}),I&7){P=O[2];let j;for(j=0;j<P.length;j+=1){const q=fr(O,P,j);z[j]?z[j].p(q,I):(z[j]=pr(q),z[j].c(),z[j].m(m,null))}for(;j<z.length;j+=1)z[j].d(1);z.length=P.length}},i(O){N||($(S.$$.fragment,O),N=!0)},o(O){k(S.$$.fragment,O),N=!1},d(O){O&&w(e),o[5](null),Fe(z,O),C(S),R=!1,Re(M)}}}function Lm(o,e,t){const n=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asi\xE1tico","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","R\xFCdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"],s=Math.floor(n.length/3);let r;Pt(()=>r.focus());let l=NaN;function i(M){if(isFinite(l)){let P=l+M;P<0?P=0:P>=n.length&&(P=n.length-1),t(1,l=P)}else t(1,l=0)}function a(M){Le[M?"unshift":"push"](()=>{r=M,t(0,r)})}return[r,l,n,s,i,a,()=>i(-1),()=>i(1),()=>i(-s),()=>i(s),()=>i(-((l||0)%s)),()=>i(s-1-(l||0)%s),()=>t(1,l=(l||0)%s),()=>t(1,l=n.length-(s-(l||0)%s)),()=>t(1,l=0),()=>t(1,l=n.length-1),()=>{t(1,l=NaN),r.focus()},M=>{t(1,l=M),r.focus()}]}class Dm extends Y{constructor(e){super(),Z(this,e,Lm,Im,K,{})}}const{document:dr}=St;function jm(o){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Bm(o){let e;return{c(){e=L("Navigation demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function Fm(o){let e,t,n,s;return e=new de({props:{$$slots:{default:[jm]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[Bm]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment)},m(r,l){E(e,r,l),v(r,t,l),E(n,r,l),s=!0},p(r,l){const i={};l&1&&(i.$$scope={dirty:l,ctx:r}),e.$set(i);const a={};l&1&&(a.$$scope={dirty:l,ctx:r}),n.$set(a)},i(r){s||($(e.$$.fragment,r),$(n.$$.fragment,r),s=!0)},o(r){k(e.$$.fragment,r),k(n.$$.fragment,r),s=!1},d(r){C(e,r),r&&w(t),C(n,r)}}}function Hm(o){let e,t;return e=new Rm({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Um(o){let e,t;return e=new Dm({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function qm(o){let e,t,n,s,r,l;return e=new et({props:{$$slots:{default:[Fm]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[Hm]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[Um]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment)},m(i,a){E(e,i,a),v(i,t,a),E(n,i,a),v(i,s,a),E(r,i,a),l=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){k(e.$$.fragment,i),k(n.$$.fragment,i),k(r.$$.fragment,i),l=!1},d(i){C(e,i),i&&w(t),C(n,i),i&&w(s),C(r,i)}}}function Km(o){let e,t,n,s,r,l,i,a,c,u,f;return dr.title=e=document.title.replace(/(•).*$/,"$1 Keyboard shortcut action"),u=new Je({props:{mode:"remove",$$slots:{default:[qm]},$$scope:{ctx:o}}}),{c(){t=x(),n=b("section"),s=b("a"),s.textContent="Home",r=x(),l=b("h1"),l.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",i=x(),a=b("ul"),a.innerHTML=`<li>allows to reduce keyboard event handling code</li> 
    <li>dependence <a href="https://www.npmjs.com/package/keyboard-event-to-string" target="_blank">keyboard-event-to-string</a></li>`,c=x(),A(u.$$.fragment),g(s,"class","float-right"),g(s,"href","/"),g(l,"class","text-2xl"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(p,d){v(p,t,d),v(p,n,d),h(n,s),h(n,r),h(n,l),h(n,i),h(n,a),h(n,c),E(u,n,null),f=!0},p(p,[d]){(!f||d&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Keyboard shortcut action"))&&(dr.title=e);const m={};d&1&&(m.$$scope={dirty:d,ctx:p}),u.$set(m)},i(p){f||($(u.$$.fragment,p),f=!0)},o(p){k(u.$$.fragment,p),f=!1},d(p){p&&w(t),p&&w(n),C(u)}}}class Wm extends Y{constructor(e){super(),Z(this,e,null,Km,K,{})}}var hr=`# Action to scroll the child to parent viewport Svelte directive \`use\`

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
`;function Gm(o){let e,t,n;return t=new It({props:{source:hr.slice(hr.search(/^[#\s]+API$/im)+1)}}),{c(){e=b("section"),A(t.$$.fragment),g(e,"class","documentation")},m(s,r){v(s,e,r),E(t,e,null),n=!0},p:ee,i(s){n||($(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){s&&w(e),C(t)}}}class Zm extends Y{constructor(e){super(),Z(this,e,null,Gm,K,{})}}function mr(o){const e=o.parentElement;if(e&&e.offsetHeight>e.clientHeight){const t=getComputedStyle(e),n=parseInt(t.paddingTop)||0,s=parseInt(t.paddingBottom)||0,r=e.offsetTop+n,l=e.offsetTop+e.offsetHeight-s,i=o.offsetTop-e.scrollTop,a=o.offsetTop+o.offsetHeight-e.scrollTop;return a>l?(e.scrollTop+=a-l,!0):i<r?(e.scrollTop-=r-i,!0):!1}else return!1}function gr(o){const e=o.parentElement;if(e&&e.offsetWidth>e.clientWidth){const t=getComputedStyle(e),n=parseInt(t.paddingLeft)||0,s=parseInt(t.paddingRight)||0,r=e.offsetLeft+n,l=e.offsetLeft+e.offsetWidth-s,i=o.offsetLeft-e.scrollLeft,a=o.offsetLeft+o.offsetWidth-e.scrollLeft;return a>l?(e.scrollLeft+=a-l,!0):i<r?(e.scrollLeft-=r-i,!0):!1}else return!1}function Tl(o,e){function t(n){n===!0?(mr(o),gr(o)):typeof n=="object"&&(n.x&&gr(o),n.y&&mr(o))}return t(e),{update(n){t(n)}}}const Xe=["Beer","Carnation Instant Breakfast","Coffee","Energy drink","Grapefruit juice","Hot chocolate","Instant breakfast","Lassi","Milk","Orange juice","Salep, or saloop","Sarabba","Soy milk","Tea","Tomato juice","Aleberry","Anijsmelk","Apple cider","Asi\xE1tico","Atole","Bajigur","Bandrek","Blackberry demitasse","Blue Blazer","Bouillon","Butter tea","Caudle","Coffee","Hot egg drinks","Espresso","Hot ginger cordial","Greyana rakiya","Grog","Herbal tea","Hot buttered rum","Hot chocolate","Hot toddy","Irish coffee","Hot lemonade","Job's tears","Malted milk","Mate cocido","Mulled wine","Posset","Postum","R\xFCdesheimer Kaffee","Sake","Salep","Sassafras tea","Smoking Bishop","Soda","Spiced punch","Tea","Wedang Jahe"];function br(o,e,t){const n=o.slice();return n[10]=e[t],n[12]=t,n}function _r(o){let e,t=o[10]+"",n,s,r,l,i;function a(){return o[9](o[12])}return{c(){e=b("div"),n=L(t),s=x(),g(e,"class","beverage-item svelte-18rp3xo"),Be(e,"active",o[12]===o[1])},m(c,u){v(c,e,u),h(e,n),h(e,s),l||(i=[Ue(r=Tl.call(null,e,o[1]===o[12]?{y:!0}:!1)),G(e,"click",a)],l=!0)},p(c,u){o=c,r&&Ze(r.update)&&u&2&&r.update.call(null,o[1]===o[12]?{y:!0}:!1),u&2&&Be(e,"active",o[12]===o[1])},d(c){c&&w(e),l=!1,Re(i)}}}function Ym(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P,z,O=Xe,I=[];for(let D=0;D<O.length;D+=1)I[D]=_r(br(o,O,D));return R=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var D;e=b("section"),t=b("div"),t.innerHTML='This example uses <a href="/keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=x(),s=b("div"),r=b("div"),r.textContent="Select a beverage",l=x(),i=b("div"),i.innerHTML=`use the navigation buttons
      <code>ArrowUp</code>,
      <code>ArrowDown</code>,
      <code>Home</code>,
      <code>End</code> to select a drink`,a=x(),c=b("div"),u=b("input"),d=x(),m=b("button"),m.textContent="Reset",_=x(),y=b("div");for(let j=0;j<I.length;j+=1)I[j].c();T=x(),S=b("h3"),S.textContent="Code",N=x(),A(R.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(i,"class","text-sm leading-4 text-gray-500"),g(u,"type","text"),g(u,"class","input grow"),u.readOnly=!0,u.value=f=(D=Xe[o[1]])!=null?D:"",g(m,"type","button"),g(m,"class","input ml-2"),g(c,"class","mt-2 flex"),g(y,"class","border-2 border-gray-200 rounded-md p-2 mt-2 w-48 max-h-[15.25rem] overflow-y-auto shadow-md scroll-smooth"),g(s,"class","my-2 mx-auto w-96"),g(e,"class","prose max-w-none my-4")},m(D,j){v(D,e,j),h(e,t),h(e,n),h(e,s),h(s,r),h(s,l),h(s,i),h(s,a),h(s,c),h(c,u),o[3](u),h(c,d),h(c,m),h(s,_),h(s,y);for(let q=0;q<I.length;q+=1)I[q].m(y,null);h(e,T),h(e,S),h(e,N),E(R,e,null),M=!0,P||(z=[Ue(p=$o.call(null,u,{event:"keydown",preventDefault:!0,fns:{ArrowUp:o[4],ArrowDown:o[5],Home:o[6],End:o[7]}})),G(m,"click",o[8])],P=!0)},p(D,[j]){var q;if((!M||j&2&&f!==(f=(q=Xe[D[1]])!=null?q:"")&&u.value!==f)&&(u.value=f),p&&Ze(p.update)&&j&2&&p.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowUp:D[4],ArrowDown:D[5],Home:D[6],End:D[7]}}),j&3){O=Xe;let X;for(X=0;X<O.length;X+=1){const ne=br(D,O,X);I[X]?I[X].p(ne,j):(I[X]=_r(ne),I[X].c(),I[X].m(y,null))}for(;X<I.length;X+=1)I[X].d(1);I.length=O.length}},i(D){M||($(R.$$.fragment,D),M=!0)},o(D){k(R.$$.fragment,D),M=!1},d(D){D&&w(e),o[3](null),Fe(I,D),C(R),P=!1,Re(z)}}}function Vm(o,e,t){let n;Pt(()=>n.focus());let s=NaN;function r(d){if(isFinite(s)){let m=s+d;m<0?m=0:m>=Xe.length&&(m=Xe.length-1),t(1,s=m)}else t(1,s=0)}function l(d){Le[d?"unshift":"push"](()=>{n=d,t(0,n)})}return[n,s,r,l,()=>r(-1),()=>r(1),()=>t(1,s=0),()=>t(1,s=Xe.length-1),()=>{t(1,s=NaN),n.focus()},d=>{t(1,s=d),n.focus()}]}class Xm extends Y{constructor(e){super(),Z(this,e,Vm,Ym,K,{})}}function wr(o,e,t){const n=o.slice();return n[10]=e[t],n[12]=t,n}function $r(o){let e,t=o[10]+"",n,s,r,l,i;function a(){return o[9](o[12])}return{c(){e=b("div"),n=L(t),s=x(),g(e,"class","beverage-item svelte-2m30if"),Be(e,"active",o[12]===o[1])},m(c,u){v(c,e,u),h(e,n),h(e,s),l||(i=[Ue(r=Tl.call(null,e,o[1]===o[12]?{x:!0}:!1)),G(e,"click",a)],l=!0)},p(c,u){o=c,r&&Ze(r.update)&&u&2&&r.update.call(null,o[1]===o[12]?{x:!0}:!1),u&2&&Be(e,"active",o[12]===o[1])},d(c){c&&w(e),l=!1,Re(i)}}}function Qm(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S,N,R,M,P,z,O,I=Xe,D=[];for(let j=0;j<I.length;j+=1)D[j]=$r(wr(o,I,j));return M=new Ye({props:{code:`<script lang="ts"
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
</style>`}}),{c(){var j;e=b("section"),t=b("div"),t.innerHTML='This example uses <a href="/keyboard-shortcut-action"><code>@apsc/keyboard-shortcut-action</code></a>',n=x(),s=b("div"),r=b("div"),l=b("div"),l.textContent="Select a beverage",i=x(),a=b("div"),a.innerHTML=`use the navigation buttons
        <code>ArrowLeft</code>,
        <code>ArrowRight</code>,
        <code>Home</code>,
        <code>End</code> to select a drink`,c=x(),u=b("div"),f=b("input"),m=x(),_=b("button"),_.textContent="Reset",y=x(),T=b("div");for(let q=0;q<D.length;q+=1)D[q].c();S=x(),N=b("h3"),N.textContent="Code",R=x(),A(M.$$.fragment),g(t,"class","w-fit mx-auto mb-4"),g(a,"class","text-sm leading-4 text-gray-500"),g(f,"type","text"),g(f,"class","input grow"),f.readOnly=!0,f.value=p=(j=Xe[o[1]])!=null?j:"",g(_,"type","button"),g(_,"class","input ml-2"),g(u,"class","mt-2 flex"),g(r,"class","mx-auto w-96"),g(T,"class","border-2 border-gray-200 rounded-md p-2 mt-2 whitespace-nowrap max-w-full overflow-x-auto shadow-md scroll-smooth"),g(s,"class","my-2"),g(e,"class","prose max-w-none my-4")},m(j,q){v(j,e,q),h(e,t),h(e,n),h(e,s),h(s,r),h(r,l),h(r,i),h(r,a),h(r,c),h(r,u),h(u,f),o[3](f),h(u,m),h(u,_),h(s,y),h(s,T);for(let X=0;X<D.length;X+=1)D[X].m(T,null);h(e,S),h(e,N),h(e,R),E(M,e,null),P=!0,z||(O=[Ue(d=$o.call(null,f,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:o[4],ArrowRight:o[5],Home:o[6],End:o[7]}})),G(_,"click",o[8])],z=!0)},p(j,[q]){var X;if((!P||q&2&&p!==(p=(X=Xe[j[1]])!=null?X:"")&&f.value!==p)&&(f.value=p),d&&Ze(d.update)&&q&2&&d.update.call(null,{event:"keydown",preventDefault:!0,fns:{ArrowLeft:j[4],ArrowRight:j[5],Home:j[6],End:j[7]}}),q&3){I=Xe;let ne;for(ne=0;ne<I.length;ne+=1){const W=wr(j,I,ne);D[ne]?D[ne].p(W,q):(D[ne]=$r(W),D[ne].c(),D[ne].m(T,null))}for(;ne<D.length;ne+=1)D[ne].d(1);D.length=I.length}},i(j){P||($(M.$$.fragment,j),P=!0)},o(j){k(M.$$.fragment,j),P=!1},d(j){j&&w(e),o[3](null),Fe(D,j),C(M),z=!1,Re(O)}}}function Jm(o,e,t){let n;Pt(()=>n.focus());let s=NaN;function r(d){if(isFinite(s)){let m=s+d;m<0?m=0:m>=Xe.length&&(m=Xe.length-1),t(1,s=m)}else t(1,s=0)}function l(d){Le[d?"unshift":"push"](()=>{n=d,t(0,n)})}return[n,s,r,l,()=>r(-1),()=>r(1),()=>t(1,s=0),()=>t(1,s=Xe.length-1),()=>{t(1,s=NaN),n.focus()},d=>{t(1,s=d),n.focus()}]}class eg extends Y{constructor(e){super(),Z(this,e,Jm,Qm,K,{})}}const{document:vr}=St;function tg(o){let e;return{c(){e=L("API")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function ng(o){let e;return{c(){e=L("Vertical demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function og(o){let e;return{c(){e=L("Horizontal demo")},m(t,n){v(t,e,n)},d(t){t&&w(e)}}}function sg(o){let e,t,n,s,r,l;return e=new de({props:{$$slots:{default:[tg]},$$scope:{ctx:o}}}),n=new de({props:{$$slots:{default:[ng]},$$scope:{ctx:o}}}),r=new de({props:{$$slots:{default:[og]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment)},m(i,a){E(e,i,a),v(i,t,a),E(n,i,a),v(i,s,a),E(r,i,a),l=!0},p(i,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:i}),e.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),n.$set(u);const f={};a&1&&(f.$$scope={dirty:a,ctx:i}),r.$set(f)},i(i){l||($(e.$$.fragment,i),$(n.$$.fragment,i),$(r.$$.fragment,i),l=!0)},o(i){k(e.$$.fragment,i),k(n.$$.fragment,i),k(r.$$.fragment,i),l=!1},d(i){C(e,i),i&&w(t),C(n,i),i&&w(s),C(r,i)}}}function rg(o){let e,t;return e=new Zm({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function lg(o){let e,t;return e=new Xm({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ig(o){let e,t;return e=new eg({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ag(o){let e,t,n,s,r,l,i,a;return e=new et({props:{$$slots:{default:[sg]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[rg]},$$scope:{ctx:o}}}),r=new pe({props:{$$slots:{default:[lg]},$$scope:{ctx:o}}}),i=new pe({props:{$$slots:{default:[ig]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=x(),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment)},m(c,u){E(e,c,u),v(c,t,u),E(n,c,u),v(c,s,u),E(r,c,u),v(c,l,u),E(i,c,u),a=!0},p(c,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),e.$set(f);const p={};u&1&&(p.$$scope={dirty:u,ctx:c}),n.$set(p);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),r.$set(d);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),i.$set(m)},i(c){a||($(e.$$.fragment,c),$(n.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),a=!0)},o(c){k(e.$$.fragment,c),k(n.$$.fragment,c),k(r.$$.fragment,c),k(i.$$.fragment,c),a=!1},d(c){C(e,c),c&&w(t),C(n,c),c&&w(s),C(r,c),c&&w(l),C(i,c)}}}function cg(o){let e,t,n,s,r,l,i,a,c,u,f;return vr.title=e=document.title.replace(/(•).*$/,"$1 Scroll child action"),u=new Je({props:{mode:"remove",$$slots:{default:[ag]},$$scope:{ctx:o}}}),{c(){t=x(),n=b("section"),s=b("a"),s.textContent="Home",r=x(),l=b("h1"),l.innerHTML="Action to call a function by keyboard shortcut for Svelte directive <code>use</code>",i=x(),a=b("ul"),a.innerHTML=`<li>no dependencies</li> 
    <li>useful for components like dropdown</li> 
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>`,c=x(),A(u.$$.fragment),g(s,"class","float-right"),g(s,"href","/"),g(l,"class","text-2xl"),g(a,"class","leading-6 mb-8"),g(n,"class","prose max-w-none my-4")},m(p,d){v(p,t,d),v(p,n,d),h(n,s),h(n,r),h(n,l),h(n,i),h(n,a),h(n,c),E(u,n,null),f=!0},p(p,[d]){(!f||d&0)&&e!==(e=document.title.replace(/(•).*$/,"$1 Scroll child action"))&&(vr.title=e);const m={};d&1&&(m.$$scope={dirty:d,ctx:p}),u.$set(m)},i(p){f||($(u.$$.fragment,p),f=!0)},o(p){k(u.$$.fragment,p),f=!1},d(p){p&&w(t),p&&w(n),C(u)}}}class ug extends Y{constructor(e){super(),Z(this,e,null,cg,K,{})}}function fg(o){let e,t;return e=new _i({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function pg(o){let e,t;return e=new Tp({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function dg(o){let e,t;return e=new Vp({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function hg(o){let e,t;return e=new Lh({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function mg(o){let e,t;return e=new tm({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function gg(o){let e,t;return e=new Cm({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function bg(o){let e,t;return e=new Wm({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function _g(o){let e,t;return e=new ug({}),{c(){A(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function wg(o){let e,t,n,s,r,l,i,a,c,u,f,p,d,m,_,y,T,S;return n=new $t({props:{path:"/",$$slots:{default:[fg]},$$scope:{ctx:o}}}),r=new $t({props:{path:"/tabs",$$slots:{default:[pg]},$$scope:{ctx:o}}}),i=new $t({props:{path:"/glob-notify",$$slots:{default:[dg]},$$scope:{ctx:o}}}),c=new $t({props:{path:"/color",$$slots:{default:[hg]},$$scope:{ctx:o}}}),f=new $t({props:{path:"/floating-ui-action",$$slots:{default:[mg]},$$scope:{ctx:o}}}),d=new $t({props:{path:"/focus-action",$$slots:{default:[gg]},$$scope:{ctx:o}}}),_=new $t({props:{path:"/keyboard-shortcut-action",$$slots:{default:[bg]},$$scope:{ctx:o}}}),T=new $t({props:{path:"/scroll-child-action",$$slots:{default:[_g]},$$scope:{ctx:o}}}),{c(){e=x(),t=b("main"),A(n.$$.fragment),s=x(),A(r.$$.fragment),l=x(),A(i.$$.fragment),a=x(),A(c.$$.fragment),u=x(),A(f.$$.fragment),p=x(),A(d.$$.fragment),m=x(),A(_.$$.fragment),y=x(),A(T.$$.fragment),document.title="APSC \u2022 Home"},m(N,R){v(N,e,R),v(N,t,R),E(n,t,null),h(t,s),E(r,t,null),h(t,l),E(i,t,null),h(t,a),E(c,t,null),h(t,u),E(f,t,null),h(t,p),E(d,t,null),h(t,m),E(_,t,null),h(t,y),E(T,t,null),S=!0},p(N,[R]){const M={};R&1&&(M.$$scope={dirty:R,ctx:N}),n.$set(M);const P={};R&1&&(P.$$scope={dirty:R,ctx:N}),r.$set(P);const z={};R&1&&(z.$$scope={dirty:R,ctx:N}),i.$set(z);const O={};R&1&&(O.$$scope={dirty:R,ctx:N}),c.$set(O);const I={};R&1&&(I.$$scope={dirty:R,ctx:N}),f.$set(I);const D={};R&1&&(D.$$scope={dirty:R,ctx:N}),d.$set(D);const j={};R&1&&(j.$$scope={dirty:R,ctx:N}),_.$set(j);const q={};R&1&&(q.$$scope={dirty:R,ctx:N}),T.$set(q)},i(N){S||($(n.$$.fragment,N),$(r.$$.fragment,N),$(i.$$.fragment,N),$(c.$$.fragment,N),$(f.$$.fragment,N),$(d.$$.fragment,N),$(_.$$.fragment,N),$(T.$$.fragment,N),S=!0)},o(N){k(n.$$.fragment,N),k(r.$$.fragment,N),k(i.$$.fragment,N),k(c.$$.fragment,N),k(f.$$.fragment,N),k(d.$$.fragment,N),k(_.$$.fragment,N),k(T.$$.fragment,N),S=!1},d(N){N&&w(e),N&&w(t),C(n),C(r),C(i),C(c),C(f),C(d),C(_),C(T)}}}function $g(o){return yn.mode.hash(),[]}class vg extends Y{constructor(e){super(),Z(this,e,$g,wg,K,{})}}new vg({target:document.getElementById("app")})});export default yg();
