function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function c(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function i(t,e,n,r,o,s,c){const l=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(l){const o=a(e,n,r,c);t.p(o,l)}}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const p=new Set;function h(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),0!==p.size&&d(h)}function m(t){let e;return 0===p.size&&d(h),{promise:new Promise(n=>{p.add(e={c:t,f:n})}),abort(){p.delete(e)}}}function g(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function w(){return x(" ")}function _(){return x("")}function E(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t){return Array.from(t.childNodes)}function j(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?y(e):v(e)}function A(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return x(e)}function R(t){return A(t," ")}function P(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e=document.body){return Array.from(e.querySelectorAll(t))}const L=new Set;let N,O=0;function M(t,e,n,r,o,s,c,l=0){const a=16.666/r;let i="{\n";for(let t=0;t<=1;t+=a){const r=e+(n-e)*s(t);i+=100*t+`%{${c(r,1-r)}}\n`}const u=i+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,d=t.ownerDocument;L.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${r}ms linear ${o}ms 1 both`,O+=1,f}function I(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),O-=o,O||d(()=>{O||(L.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),L.clear())}))}function q(t){N=t}function T(){if(!N)throw new Error("Function called outside component initialization");return N}const U=[],D=[],H=[],B=[],V=Promise.resolve();let F=!1;function z(t){H.push(t)}let G=!1;const J=new Set;function W(){if(!G){G=!0;do{for(let t=0;t<U.length;t+=1){const e=U[t];q(e),K(e.$$)}for(U.length=0;D.length;)D.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];J.has(e)||(J.add(e),e())}H.length=0}while(U.length);for(;B.length;)B.pop()();F=!1,G=!1,J.clear()}}function K(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let Y;function X(){return Y||(Y=Promise.resolve(),Y.then(()=>{Y=null})),Y}function Q(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const Z=new Set;let tt;function et(){tt={r:0,c:[],p:tt}}function nt(){tt.r||s(tt.c),tt=tt.p}function rt(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function ot(t,e,n,r){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push(()=>{Z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const st={duration:0};function ct(n,r,o){let s,l,a=r(n,o),i=!1,u=0;function d(){s&&I(n,s)}function p(){const{delay:r=0,duration:o=300,easing:c=e,tick:p=t,css:h}=a||st;h&&(s=M(n,0,1,o,r,c,h,u++)),p(0,1);const g=f()+r,$=g+o;l&&l.abort(),i=!0,z(()=>Q(n,!0,"start")),l=m(t=>{if(i){if(t>=$)return p(1,0),Q(n,!0,"end"),d(),i=!1;if(t>=g){const e=c((t-g)/o);p(e,1-e)}}return i})}let h=!1;return{start(){h||(I(n),c(a)?(a=a(),X().then(p)):p())},invalidate(){h=!1},end(){i&&(d(),i=!1)}}}function lt(n,r,o){let l,a=r(n,o),i=!0;const u=tt;function d(){const{delay:r=0,duration:o=300,easing:c=e,tick:d=t,css:p}=a||st;p&&(l=M(n,1,0,o,r,c,p));const h=f()+r,g=h+o;z(()=>Q(n,!1,"start")),m(t=>{if(i){if(t>=g)return d(0,1),Q(n,!1,"end"),--u.r||s(u.c),!1;if(t>=h){const e=c((t-h)/o);d(1-e,e)}}return i})}return u.r+=1,c(a)?X().then(()=>{a=a(),d()}):d(),{end(t){t&&a.tick&&a.tick(1,0),i&&(l&&I(n,l),i=!1)}}}function at(n,r,o,l){let a=r(n,o),i=l?0:1,u=null,d=null,p=null;function h(){p&&I(n,p)}function g(t,e){const n=t.b-i;return e*=Math.abs(n),{a:i,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(r){const{delay:o=0,duration:c=300,easing:l=e,tick:$=t,css:b}=a||st,v={start:f()+o,b:r};r||(v.group=tt,tt.r+=1),u?d=v:(b&&(h(),p=M(n,i,r,c,o,l,b)),r&&$(0,1),u=g(v,c),z(()=>Q(n,r,"start")),m(t=>{if(d&&t>d.start&&(u=g(d,c),d=null,Q(n,u.b,"start"),b&&(h(),p=M(n,i,u.b,u.duration,0,l,a.css))),u)if(t>=u.end)$(i=u.b,1-i),Q(n,u.b,"end"),d||(u.b?h():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;i=u.a+u.d*l(e/u.duration),$(i,1-i)}return!(!u&&!d)}))}return{run(t){c(a)?X().then(()=>{a=a(),$(t)}):$(t)},end(){h(),u=d=null}}}function it(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],l=e[s];if(l){for(const t in c)t in l||(r[t]=1);for(const t in l)o[t]||(n[t]=l[t],o[t]=1);t[s]=l}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function ut(t){return"object"==typeof t&&null!==t?t:{}}function ft(t){t&&t.c()}function dt(t,e){t&&t.l(e)}function pt(t,e,n){const{fragment:o,on_mount:l,on_destroy:a,after_update:i}=t.$$;o&&o.m(e,n),z(()=>{const e=l.map(r).filter(c);a?a.push(...e):s(e),t.$$.on_mount=[]}),i.forEach(z)}function ht(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(U.push(t),F||(F=!0,V.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(e,n,r,c,l,a,i=[-1]){const u=N;q(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:i,skip_bound:!1};let p=!1;if(d.ctx=r?r(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&mt(e,t)),n}):[],d.update(),p=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=S(n.target);d.fragment&&d.fragment.l(t),t.forEach(b)}else d.fragment&&d.fragment.c();n.intro&&rt(e.$$.fragment),pt(e,n.target,n.anchor),W()}q(u)}class $t{$destroy(){ht(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const bt=[];function vt(e,n=t){let r;const o=[];function s(t){if(l(e,t)&&(e=t,r)){const t=!bt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),bt.push(n,e)}if(t){for(let t=0;t<bt.length;t+=2)bt[t][0](bt[t+1]);bt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,l=t){const a=[c,l];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const yt={};function xt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function wt(t){const e=t-1;return e*e*e+1}function _t(t,{delay:e=0,duration:n=400,easing:r=xt,amount:o=5,opacity:s=0}){const c=getComputedStyle(t),l=+c.opacity,a="none"===c.filter?"":c.filter,i=l*(1-s);return{delay:e,duration:n,easing:r,css:(t,e)=>`opacity: ${l-i*e}; filter: ${a} blur(${e*o}px);`}}function Et(t,{delay:n=0,duration:r=400,easing:o=e}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>"opacity: "+t*s}}function kt(t,{delay:e=0,duration:n=400,easing:r=wt}){const o=getComputedStyle(t),s=+o.opacity,c=parseFloat(o.height),l=parseFloat(o.paddingTop),a=parseFloat(o.paddingBottom),i=parseFloat(o.marginTop),u=parseFloat(o.marginBottom),f=parseFloat(o.borderTopWidth),d=parseFloat(o.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*s};height: ${t*c}px;padding-top: ${t*l}px;padding-bottom: ${t*a}px;margin-top: ${t*i}px;margin-bottom: ${t*u}px;border-top-width: ${t*f}px;border-bottom-width: ${t*d}px;`}}function St(t){let e,n,r,o,s,c,l,a,i,u,f,d,p,h,m,y,_,E,P,C,L,N,O,M,I,q=void 0===t[0]&&jt(),T="about"===t[0]&&At(),U="experience"===t[0]&&Rt(),D="projects"===t[0]&&Pt();return{c(){e=v("div"),n=v("div"),r=v("a"),o=x("Home\n\t\t\t"),q&&q.c(),s=w(),c=v("a"),l=x("About Me\n\t\t\t"),T&&T.c(),a=w(),i=v("a"),u=x("Experience\n\t\t\t"),U&&U.c(),f=w(),d=v("a"),p=x("Projects\n\t\t\t"),D&&D.c(),m=w(),y=v("div"),_=v("a"),E=v("img"),C=w(),L=v("a"),N=v("img"),this.h()},l(t){e=j(t,"DIV",{class:!0});var h=S(e);n=j(h,"DIV",{class:!0});var g=S(n);r=j(g,"A",{href:!0,class:!0});var $=S(r);o=A($,"Home\n\t\t\t"),q&&q.l($),$.forEach(b),s=R(g),c=j(g,"A",{href:!0,class:!0});var v=S(c);l=A(v,"About Me\n\t\t\t"),T&&T.l(v),v.forEach(b),a=R(g),i=j(g,"A",{href:!0,class:!0});var x=S(i);u=A(x,"Experience\n\t\t\t"),U&&U.l(x),x.forEach(b),f=R(g),d=j(g,"A",{href:!0,class:!0});var w=S(d);p=A(w,"Projects\n\t\t\t"),D&&D.l(w),w.forEach(b),g.forEach(b),h.forEach(b),m=R(t),y=j(t,"DIV",{class:!0});var k=S(y);_=j(k,"A",{target:!0,href:!0});var P=S(_);E=j(P,"IMG",{class:!0,src:!0,alt:!0}),P.forEach(b),C=R(k),L=j(k,"A",{target:!0,href:!0});var O=S(L);N=j(O,"IMG",{class:!0,src:!0,alt:!0}),O.forEach(b),k.forEach(b),this.h()},h(){k(r,"href","/"),k(r,"class","block mt-4 lg:inline-block lg:mt-0 text-2xl text-black-200 mr-8 lg:hover:font-semibold"),k(c,"href","/about"),k(c,"class","block mt-4 lg:inline-block lg:mt-0 text-2xl text-black-200 mr-8 lg:hover:font-semibold"),k(i,"href","/experience"),k(i,"class","block mt-4 lg:inline-block lg:mt-0 text-2xl text-black-200 mr-8 lg:hover:font-semibold"),k(d,"href","/projects"),k(d,"class","block mt-4 lg:inline-block lg:mt-0 text-2xl text-black-200 mr-8 lg:hover:font-semibold"),k(n,"class","font-display lg:flex lg:justify-center text-sm lg:flex-grow"),k(e,"class","w-5/6 block flex-grow lg:flex lg:items-center lg:w-auto select-none"),k(E,"class","object-contain h-16 w-16 p-4"),E.src!==(P="linkedin.png")&&k(E,"src","linkedin.png"),k(E,"alt","LinkedIn"),k(_,"target","_blank"),k(_,"href","https://www.linkedin.com/in/rohiltuli/"),k(N,"class","object-contain h-16 w-16 p-4"),N.src!==(O="github.png")&&k(N,"src","github.png"),k(N,"alt","GitHub"),k(L,"target","_blank"),k(L,"href","https://github.com/rohilt"),k(y,"class","w-1/2 lg:w-1/6 justify-begin lg:justify-end flex self-end lg:self-auto mt-6 lg:mt-0 lg:items-center select-none")},m(t,h){$(t,e,h),g(e,n),g(n,r),g(r,o),q&&q.m(r,null),g(n,s),g(n,c),g(c,l),T&&T.m(c,null),g(n,a),g(n,i),g(i,u),U&&U.m(i,null),g(n,f),g(n,d),g(d,p),D&&D.m(d,null),$(t,m,h),$(t,y,h),g(y,_),g(_,E),g(y,C),g(y,L),g(L,N),I=!0},p(t,e){void 0===t[0]?q?1&e&&rt(q,1):(q=jt(),q.c(),rt(q,1),q.m(r,null)):q&&(et(),ot(q,1,1,()=>{q=null}),nt()),"about"===t[0]?T?1&e&&rt(T,1):(T=At(),T.c(),rt(T,1),T.m(c,null)):T&&(et(),ot(T,1,1,()=>{T=null}),nt()),"experience"===t[0]?U?1&e&&rt(U,1):(U=Rt(),U.c(),rt(U,1),U.m(i,null)):U&&(et(),ot(U,1,1,()=>{U=null}),nt()),"projects"===t[0]?D?1&e&&rt(D,1):(D=Pt(),D.c(),rt(D,1),D.m(d,null)):D&&(et(),ot(D,1,1,()=>{D=null}),nt())},i(t){I||(rt(q),rt(T),rt(U),rt(D),z(()=>{h||(h=at(e,kt,{},!0)),h.run(1)}),z(()=>{M||(M=at(y,kt,{},!0)),M.run(1)}),I=!0)},o(t){ot(q),ot(T),ot(U),ot(D),h||(h=at(e,kt,{},!1)),h.run(0),M||(M=at(y,kt,{},!1)),M.run(0),I=!1},d(t){t&&b(e),q&&q.d(),T&&T.d(),U&&U.d(),D&&D.d(),t&&h&&h.end(),t&&b(m),t&&b(y),t&&M&&M.end()}}}function jt(t){let e,n,r,o;return{c(){e=v("img"),this.h()},l(t){e=j(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){k(e,"class","hidden lg:block object-contain h-2 w-10 mx-auto"),e.src!==(n="underline.svg")&&k(e,"src","underline.svg"),k(e,"alt","_")},m(t,n){$(t,e,n),o=!0},i(t){o||(z(()=>{r||(r=at(e,Et,{},!0)),r.run(1)}),o=!0)},o(t){r||(r=at(e,Et,{},!1)),r.run(0),o=!1},d(t){t&&b(e),t&&r&&r.end()}}}function At(t){let e,n,r,o;return{c(){e=v("img"),this.h()},l(t){e=j(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){k(e,"class","hidden lg:block object-contain h-2 w-10 mx-auto"),e.src!==(n="underline.svg")&&k(e,"src","underline.svg"),k(e,"alt","_")},m(t,n){$(t,e,n),o=!0},i(t){o||(z(()=>{r||(r=at(e,Et,{},!0)),r.run(1)}),o=!0)},o(t){r||(r=at(e,Et,{},!1)),r.run(0),o=!1},d(t){t&&b(e),t&&r&&r.end()}}}function Rt(t){let e,n,r,o;return{c(){e=v("img"),this.h()},l(t){e=j(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){k(e,"class","hidden lg:block object-contain h-2 w-10 mx-auto"),e.src!==(n="underline.svg")&&k(e,"src","underline.svg"),k(e,"alt","_")},m(t,n){$(t,e,n),o=!0},i(t){o||(z(()=>{r||(r=at(e,Et,{},!0)),r.run(1)}),o=!0)},o(t){r||(r=at(e,Et,{},!1)),r.run(0),o=!1},d(t){t&&b(e),t&&r&&r.end()}}}function Pt(t){let e,n,r,o;return{c(){e=v("img"),this.h()},l(t){e=j(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){k(e,"class","hidden lg:block object-contain h-2 w-10 mx-auto"),e.src!==(n="underline.svg")&&k(e,"src","underline.svg"),k(e,"alt","_")},m(t,n){$(t,e,n),o=!0},i(t){o||(z(()=>{r||(r=at(e,Et,{},!0)),r.run(1)}),o=!0)},o(t){r||(r=at(e,Et,{},!1)),r.run(0),o=!1},d(t){t&&b(e),t&&r&&r.end()}}}function Ct(t){let e,n,r,o,c,l,a,i,u,f,d,p,h,m,_;z(t[3]);let P=t[2]&&St(t);return{c(){e=v("nav"),n=v("span"),r=x("R/T"),o=w(),c=v("div"),l=v("button"),a=y("svg"),i=y("title"),u=x("Menu"),f=y("path"),d=w(),P&&P.c(),this.h()},l(t){e=j(t,"NAV",{class:!0});var s=S(e);n=j(s,"SPAN",{class:!0});var p=S(n);r=A(p,"R/T"),p.forEach(b),o=R(s),c=j(s,"DIV",{class:!0});var h=S(c);l=j(h,"BUTTON",{class:!0});var m=S(l);a=j(m,"svg",{class:!0,viewBox:!0,xmlns:!0},1);var g=S(a);i=j(g,"title",{},1);var $=S(i);u=A($,"Menu"),$.forEach(b),f=j(g,"path",{d:!0},1),S(f).forEach(b),g.forEach(b),m.forEach(b),h.forEach(b),d=R(s),P&&P.l(s),s.forEach(b),this.h()},h(){k(n,"class","w-1/6 text-black ml-3 mr-6 font-semibold font-display text-5xl select-none"),k(f,"d","M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"),k(a,"class","fill-current h-5 w-5"),k(a,"viewBox","0 0 20 20"),k(a,"xmlns","http://www.w3.org/2000/svg"),k(l,"class","flex items-center px-3 py-2 text-black-200 border-black-400 lg:hover:text-gray-500"),k(c,"class","block lg:hidden select-none"),k(e,"class","flex sticky top-0 items-center justify-between flex-wrap bg-white p-4 shadow z-10 bg-card-bg")},m(s,p){$(s,e,p),g(e,n),g(n,r),g(e,o),g(e,c),g(c,l),g(l,a),g(a,i),g(i,u),g(a,f),g(e,d),P&&P.m(e,null),h=!0,m||(_=[E(window,"resize",t[3]),E(l,"click",t[4])],m=!0)},p(t,[n]){t[2]?P?(P.p(t,n),4&n&&rt(P,1)):(P=St(t),P.c(),rt(P,1),P.m(e,null)):P&&(et(),ot(P,1,1,()=>{P=null}),nt())},i(t){h||(rt(P),z(()=>{p||(p=at(e,kt,{},!0)),p.run(1)}),h=!0)},o(t){ot(P),p||(p=at(e,kt,{},!1)),p.run(0),h=!1},d(t){t&&b(e),P&&P.d(),t&&p&&p.end(),m=!1,s(_)}}}function Lt(t,e,n){let r=0,{segment:o}=e;let s;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment)},t.$$.update=()=>{2&t.$$.dirty&&n(2,s=r>=1024)},[o,r,s,function(){n(1,r=window.innerWidth)},()=>n(2,s=!s)]}class Nt extends $t{constructor(t){super(),gt(this,t,Lt,Ct,l,{segment:0})}}function Ot(t){let e,n,r,o;e=new Nt({props:{segment:t[0]}});const s=t[2].default,c=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){ft(e.$$.fragment),n=w(),r=v("main"),c&&c.c(),this.h()},l(t){dt(e.$$.fragment,t),n=R(t),r=j(t,"MAIN",{class:!0});var o=S(r);c&&c.l(o),o.forEach(b),this.h()},h(){k(r,"class","svelte-jeyhwo")},m(t,s){pt(e,t,s),$(t,n,s),$(t,r,s),c&&c.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),c&&c.p&&2&n&&i(c,s,t,t[1],n,null,null)},i(t){o||(rt(e.$$.fragment,t),rt(c,t),o=!0)},o(t){ot(e.$$.fragment,t),ot(c,t),o=!1},d(t){ht(e,t),t&&b(n),t&&b(r),c&&c.d(t)}}}function Mt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class It extends $t{constructor(t){super(),gt(this,t,Mt,Ot,l,{segment:0})}}function qt(t){let e,n,r=t[1].stack+"";return{c(){e=v("pre"),n=x(r)},l(t){e=j(t,"PRE",{});var o=S(e);n=A(o,r),o.forEach(b)},m(t,r){$(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&P(n,r)},d(t){t&&b(e)}}}function Tt(e){let n,r,o,s,c,l,a,i,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&qt(e);return{c(){r=w(),o=v("h1"),s=x(e[0]),c=w(),l=v("p"),a=x(f),i=w(),d&&d.c(),u=_(),this.h()},l(t){C('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(b),r=R(t),o=j(t,"H1",{class:!0});var n=S(o);s=A(n,e[0]),n.forEach(b),c=R(t),l=j(t,"P",{class:!0});var p=S(l);a=A(p,f),p.forEach(b),i=R(t),d&&d.l(t),u=_(),this.h()},h(){k(o,"class","svelte-8od9u6"),k(l,"class","svelte-8od9u6")},m(t,e){$(t,r,e),$(t,o,e),g(o,s),$(t,c,e),$(t,l,e),g(l,a),$(t,i,e),d&&d.m(t,e),$(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&P(s,t[0]),2&e&&f!==(f=t[1].message+"")&&P(a,f),t[2]&&t[1].stack?d?d.p(t,e):(d=qt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&b(r),t&&b(o),t&&b(c),t&&b(l),t&&b(i),d&&d.d(t),t&&b(u)}}}function Ut(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class Dt extends $t{constructor(t){super(),gt(this,t,Ut,Tt,l,{status:0,error:1})}}function Ht(t){let e,r,o;const s=[t[4].props];var c=t[4].component;function l(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(l())),{c(){e&&ft(e.$$.fragment),r=_()},l(t){e&&dt(e.$$.fragment,t),r=_()},m(t,n){e&&pt(e,t,n),$(t,r,n),o=!0},p(t,n){const o=16&n?it(s,[ut(t[4].props)]):{};if(c!==(c=t[4].component)){if(e){et();const t=e;ot(t.$$.fragment,1,0,()=>{ht(t,1)}),nt()}c?(e=new c(l()),ft(e.$$.fragment),rt(e.$$.fragment,1),pt(e,r.parentNode,r)):e=null}else c&&e.$set(o)},i(t){o||(e&&rt(e.$$.fragment,t),o=!0)},o(t){e&&ot(e.$$.fragment,t),o=!1},d(t){t&&b(r),e&&ht(e,t)}}}function Bt(t){let e,n;return e=new Dt({props:{error:t[0],status:t[1]}}),{c(){ft(e.$$.fragment)},l(t){dt(e.$$.fragment,t)},m(t,r){pt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){ht(e,t)}}}function Vt(t){let e,n,r,o;const s=[Bt,Ht],c=[];function l(t,e){return t[0]?0:1}return e=l(t),n=c[e]=s[e](t),{c(){n.c(),r=_()},l(t){n.l(t),r=_()},m(t,n){c[e].m(t,n),$(t,r,n),o=!0},p(t,o){let a=e;e=l(t),e===a?c[e].p(t,o):(et(),ot(c[a],1,1,()=>{c[a]=null}),nt(),n=c[e],n||(n=c[e]=s[e](t),n.c()),rt(n,1),n.m(r.parentNode,r))},i(t){o||(rt(n),o=!0)},o(t){ot(n),o=!1},d(t){c[e].d(t),t&&b(r)}}}function Ft(t){let e,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Vt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new It({props:s}),{c(){ft(e.$$.fragment)},l(t){dt(e.$$.fragment,t)},m(t,n){pt(e,t,n),r=!0},p(t,[n]){const r=12&n?it(o,[4&n&&{segment:t[2][0]},8&n&&ut(t[3].props)]):{};147&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(rt(e.$$.fragment,t),r=!0)},o(t){ot(e.$$.fragment,t),r=!1},d(t){ht(e,t)}}}function zt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:l}=e,{level1:a=null}=e,{notify:i}=e;var u,f,d;return u=i,T().$$.after_update.push(u),f=yt,d=r,T().$$.context.set(f,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,l=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,i=t.notify)},[o,s,c,l,a,r,i]}class Gt extends $t{constructor(t){super(),gt(this,t,zt,Ft,l,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Jt=[],Wt=[{js:()=>import("./index.dfcc3947.js"),css:[]},{js:()=>import("./experience.ae9db6f7.js"),css:[]},{js:()=>import("./projects.bd20849d.js"),css:[]},{js:()=>import("./about.d7b12e8d.js"),css:[]}],Kt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/experience\/?$/,parts:[{i:1}]},{pattern:/^\/projects\/?$/,parts:[{i:2}]},{pattern:/^\/about\/?$/,parts:[{i:3}]}];function Yt(t,e={noscroll:!1,replaceState:!1}){const n=he(new URL(t,document.baseURI));return n?(fe[e.replaceState?"replaceState":"pushState"]({id:ie},"",t),ge(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const Xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Qt,Zt,te,ee=!1,ne=[],re="{}";const oe={page:function(t){const e=vt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:vt(null),session:vt(Xt&&Xt.session)};let se,ce;oe.session.subscribe(async t=>{if(se=t,!ee)return;ce=!0;const e=he(new URL(location.href)),n=Zt={},{redirect:r,props:o,branch:s}=await be(e);n===Zt&&await $e(r,s,o,e.page)});let le,ae=null;let ie,ue=1;const fe="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},de={};function pe(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function he(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Xt.baseUrl))return null;let e=t.pathname.slice(Xt.baseUrl.length);if(""===e&&(e="/"),!Jt.some(t=>t.test(e)))for(let n=0;n<Kt.length;n+=1){const r=Kt[n],o=r.pattern.exec(e);if(o){const n=pe(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},l={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:l}}}}function me(){return{x:pageXOffset,y:pageYOffset}}async function ge(t,e,n,r){if(e)ie=e;else{const t=me();de[ie]=t,e=ie=++ue,de[ie]=n?t:{x:0,y:0}}ie=e,Qt&&oe.preloading.set(!0);const o=ae&&ae.href===t.href?ae.promise:be(t);ae=null;const s=Zt={},{redirect:c,props:l,branch:a}=await o;if(s===Zt&&(await $e(c,a,l,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=de[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}de[ie]=t,t&&scrollTo(t.x,t.y)}}async function $e(t,e,n,r){if(t)return Yt(t.location,{replaceState:!0});oe.page.set(r),oe.preloading.set(!1),Qt?Qt.$set(n):(n.stores={page:{subscribe:oe.page.subscribe},preloading:{subscribe:oe.preloading.subscribe},session:oe.session},n.level0={props:await te},n.notify=oe.page.notify,Qt=new Gt({target:le,props:n,hydrate:!0})),ne=e,re=JSON.stringify(r.query),ee=!0,ce=!1}async function be(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!te){const t=()=>{};te=Xt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},se)}let l,a=1;try{const o=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;l=await Promise.all(e.parts.map(async(e,l)=>{const f=r[l];if(function(t,e,n,r){if(r!==re)return!0;const o=ne[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(l,f,i,o)&&(u=!0),s.segments[a]=r[l+1],!e)return{segment:f};const d=a++;if(!ce&&!u&&ne[l]&&ne[l].part===e.i)return ne[l];u=!1;const{default:p,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(ve);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Wt[e.i]);let m;return m=ee||!Xt.preloaded[l+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},se):{}:Xt.preloaded[l+1],s["level"+d]={component:p,props:m,segment:f,match:i,part:e.i}}))}catch(t){s.error=t,s.status=500,l=[]}return{redirect:o,props:s,branch:l}}function ve(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function ye(t){const e=he(new URL(t,document.baseURI));if(e)return ae&&t===ae.href||function(t,e){ae={href:t,promise:e}}(t,be(e)),ae.promise}let xe;function we(t){clearTimeout(xe),xe=setTimeout(()=>{_e(t)},20)}function _e(t){const e=ke(t.target);e&&"prefetch"===e.rel&&ye(e.href)}function Ee(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ke(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=he(o);if(s){ge(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),fe.pushState({id:ie},"",o.href)}}function ke(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Se(t){if(de[ie]=me(),t.state){const e=he(new URL(location.href));e?ge(e,t.state.id):location.href=location.href}else ue=ue+1,function(t){ie=t}(ue),fe.replaceState({id:ie},"",location.href)}var je;je={target:document.querySelector("#sapper")},"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",()=>{fe.scrollRestoration="auto"}),addEventListener("load",()=>{fe.scrollRestoration="manual"}),function(t){le=t}(je.target),addEventListener("click",Ee),addEventListener("popstate",Se),addEventListener("touchstart",_e),addEventListener("mousemove",we),Promise.resolve().then(()=>{const{hash:t,href:e}=location;fe.replaceState({id:ue},"",e);const n=new URL(location.href);if(Xt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:l}=Xt;te||(te=s&&s[0]),$e(null,[],{error:l,status:c,session:o,level0:{props:te},level1:{props:{status:c,error:l},component:Dt},segments:s},{host:e,path:n,query:pe(r),params:{}})}();const r=he(n);return r?ge(r,ue,!0,t):void 0});export{$t as S,w as a,j as b,R as c,b as d,v as e,S as f,A as g,k as h,gt as i,$ as j,g as k,E as l,lt as m,t as n,z as o,ct as p,C as q,_t as r,l as s,x as t,Et as u,Yt as v};
