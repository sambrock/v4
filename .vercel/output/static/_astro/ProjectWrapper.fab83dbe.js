function v(){}function R(e,t){for(const n in t)e[n]=t[n];return e}function L(e){return e()}function A(){return Object.create(null)}function p(e){e.forEach(L)}function B(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function V(e){return Object.keys(e).length===0}function W(e,t,n,l){if(e){const r=O(e,t,n,l);return e[0](r)}}function O(e,t,n,l){return e[1]&&l?R(n.ctx.slice(),e[1](l(t))):n.ctx}function X(e,t,n,l){if(e[2]&&l){const r=e[2](l(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const c=[],i=Math.max(t.dirty.length,r.length);for(let o=0;o<i;o+=1)c[o]=t.dirty[o]|r[o];return c}return t.dirty|r}return t.dirty}function Y(e,t,n,l,r,c){if(r){const i=O(t,n,l,c);e.p(i,r)}}function z(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}let x=!1;function F(){x=!0}function G(){x=!1}function J(e,t,n,l){for(;e<t;){const r=e+(t-e>>1);n(r)<=l?e=r+1:t=r}return e}function K(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const u=[];for(let s=0;s<t.length;s++){const a=t[s];a.claim_order!==void 0&&u.push(a)}t=u}const n=new Int32Array(t.length+1),l=new Int32Array(t.length);n[0]=-1;let r=0;for(let u=0;u<t.length;u++){const s=t[u].claim_order,a=(r>0&&t[n[r]].claim_order<=s?r+1:J(1,r,y=>t[n[y]].claim_order,s))-1;l[u]=n[a]+1;const f=a+1;n[f]=u,r=Math.max(f,r)}const c=[],i=[];let o=t.length-1;for(let u=n[r]+1;u!=0;u=l[u-1]){for(c.push(t[u-1]);o>=u;o--)i.push(t[o]);o--}for(;o>=0;o--)i.push(t[o]);c.reverse(),i.sort((u,s)=>u.claim_order-s.claim_order);for(let u=0,s=0;u<i.length;u++){for(;s<c.length&&i[u].claim_order>=c[s].claim_order;)s++;const a=s<c.length?c[s]:null;e.insertBefore(i[u],a)}}function Q(e,t){if(x){for(K(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function T(e,t,n){x&&!n?Q(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function P(e){return document.createElement(e)}function C(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function Z(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function q(e){return Array.from(e.childNodes)}function U(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function ee(e,t,n,l,r=!1){U(e);const c=(()=>{for(let i=e.claim_info.last_index;i<e.length;i++){const o=e[i];if(t(o)){const u=n(o);return u===void 0?e.splice(i,1):e[i]=u,r||(e.claim_info.last_index=i),o}}for(let i=e.claim_info.last_index-1;i>=0;i--){const o=e[i];if(t(o)){const u=n(o);return u===void 0?e.splice(i,1):e[i]=u,r?u===void 0&&e.claim_info.last_index--:e.claim_info.last_index=i,o}}return l()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function te(e,t,n,l){return ee(e,r=>r.nodeName===t,r=>{const c=[];for(let i=0;i<r.attributes.length;i++){const o=r.attributes[i];n[o.name]||c.push(o.name)}c.forEach(i=>r.removeAttribute(i))},()=>l(t))}function ne(e,t,n){return te(e,t,n,P)}let N;function m(e){N=e}const _=[],w=[];let h=[];const k=[],ie=Promise.resolve();let E=!1;function le(){E||(E=!0,ie.then(D))}function M(e){h.push(e)}const b=new Set;let d=0;function D(){if(d!==0)return;const e=N;do{try{for(;d<_.length;){const t=_[d];d++,m(t),re(t.$$)}}catch(t){throw _.length=0,d=0,t}for(m(null),_.length=0,d=0;w.length;)w.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];b.has(n)||(b.add(n),n())}h.length=0}while(_.length);for(;k.length;)k.pop()();E=!1,b.clear(),m(e)}function re(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function oe(e){const t=[],n=[];h.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),h=t}const g=new Set;let ue;function I(e,t){e&&e.i&&(g.delete(e),e.i(t))}function ce(e,t,n,l){if(e&&e.o){if(g.has(e))return;g.add(e),ue.c.push(()=>{g.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}const se=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...se];function fe(e,t,n,l){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),l||M(()=>{const i=e.$$.on_mount.map(L).filter(B);e.$$.on_destroy?e.$$.on_destroy.push(...i):p(i),e.$$.on_mount=[]}),c.forEach(M)}function ae(e,t){const n=e.$$;n.fragment!==null&&(oe(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&(_.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(e,t,n,l,r,c,i,o=[-1]){const u=N;m(e);const s=e.$$={fragment:null,ctx:[],props:c,update:v,not_equal:r,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:A(),dirty:o,skip_bound:!1,root:t.target||u.$$.root};i&&i(s.root);let a=!1;if(s.ctx=n?n(e,t.props||{},(f,y,...S)=>{const j=S.length?S[0]:y;return s.ctx&&r(s.ctx[f],s.ctx[f]=j)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](j),a&&de(e,f)),y}):[],s.update(),a=!0,p(s.before_update),s.fragment=l?l(s.ctx):!1,t.target){if(t.hydrate){F();const f=q(t.target);s.fragment&&s.fragment.l(f),f.forEach($)}else s.fragment&&s.fragment.c();t.intro&&I(e.$$.fragment),fe(e,t.target,t.anchor,t.customElement),G(),D()}m(u)}class he{$destroy(){ae(this,1),this.$destroy=v}$on(t,n){if(!B(n))return v;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!V(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function me(e){let t,n,l,r;const c=e[6].default,i=W(c,e,e[5],null);return{c(){t=P("div"),i&&i.c(),this.h()},l(o){t=ne(o,"DIV",{class:!0});var u=q(t);i&&i.l(u),u.forEach($),this.h()},h(){Z(t,"class","relative rounded-xl")},m(o,u){T(o,t,u),i&&i.m(t,null),e[7](t),n=!0,l||(r=[C(t,"mousemove",e[1]),C(t,"mouseleave",e[2])],l=!0)},p(o,[u]){i&&i.p&&(!n||u&32)&&Y(i,c,o,o[5],n?X(c,o[5],u,null):z(o[5]),null)},i(o){n||(I(i,o),n=!0)},o(o){ce(i,o),n=!1},d(o){o&&$(t),i&&i.d(o),e[7](null),l=!1,p(r)}}}function pe(e,t,n){let{$$slots:l={},$$scope:r}=t,c,i=0,o=0;const u=f=>{c?.classList.add("cursor-shine"),n(3,i=Math.floor(f.clientX-c?.getBoundingClientRect().left)),n(4,o=Math.floor(f.clientY-c?.getBoundingClientRect().top))},s=()=>{c?.classList.remove("cursor-shine")};function a(f){w[f?"unshift":"push"](()=>{c=f,n(0,c)})}return e.$$set=f=>{"$$scope"in f&&n(5,r=f.$$scope)},e.$$.update=()=>{e.$$.dirty&25&&(c?.style.setProperty("--cursor-y",`${o}px`),c?.style.setProperty("--cursor-x",`${i}px`))},[c,u,s,i,o,r,l,a]}class ye extends he{constructor(t){super(),_e(this,t,pe,me,H,{})}}export{ye as default};
