(function(e,i){typeof exports=="object"&&typeof module<"u"?module.exports=i(require("vue")):typeof define=="function"&&define.amd?define(["vue"],i):(e=typeof globalThis<"u"?globalThis:e||self,e["vue3-responsive-menu"]=i(e.Vue))})(this,function(e){"use strict";for(var i=256,E=[],B=256,b;i--;)E[i]=(i+256).toString(16).substring(1);function V(c){var _=0,p=c||11;if(!b||i+p>B*2)for(b="",i=0;_<B;_++)b+=E[Math.random()*256|0];return b.substring(i,i+++p)}const x={class:"responsive-menu__items"},N=["data-rmenu-id"],z=e.createElementVNode("span",null,null,-1),C={key:0,class:"responsive-menu__submenu-items"},D=e.createElementVNode("span",null,null,-1),H={class:"responsive-menu__submenu-items"},W=e.defineComponent({__name:"ResponsiveMenu",props:{items:{type:Array,default:()=>[]},config:{type:Object,default:()=>({labelMore:"More",mode:""})}},setup(c){const _=c,p=e.ref([]),y=e.ref(null),g=e.ref(null),d=e.ref([]),f=e.ref([]),F=e.computed(()=>f.value.map(n=>({[n.id]:n})).reduce((n,r)=>({...n,...r}))),L=e.computed(()=>f.value.length?f.value.filter(n=>!n.parent&&!n.showMore):d.value),S=e.computed(()=>f.value.filter(n=>{var r;return n.wrapSubmenu?n.parent&&((r=F.value[n.parent])==null?void 0:r.showMore):n.showMore})),T=n=>f.value.filter(r=>r.parent===n);function k(n,r=null,s=!1,t=!1){const o=[];return n.forEach((l,a)=>{const u=V(6),M=a<n.length-1?k([n[a+1]],null,!0)[0].id:null,h={...l,id:u,...t&&{wrapSubmenu:t},...M&&{nextEL:M},...r&&{parent:r},...l.submenu&&{childs:l.submenu.map(m=>{const R=k([m],u,!1,l.wrapSubmenu)[0];return o.push(R),R.id})}};if(h.childs&&l.submenu&&delete h.submenu,o.push(h),l.submenu&&s){const m=k(l.submenu,u);o.push(...m)}}),o}const w=n=>p.value.find(r=>r.dataset.rmenuId===n),A=()=>{let n=d.value.filter(t=>t.childs&&t.id&&!t.wrap&&!t.wrapSubmenu).map(t=>t.id),r=0;function s(t){const o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}return d.value.map(t=>{var o;if(t.parent)return t;{const l=(o=w(t.id))==null?void 0:o.offsetWidth,a=n.reduce((M,h)=>{var m;return M+((m=w(h))==null?void 0:m.offsetWidth)},0);r=r+l;const u=r+a;return t.childs&&(n=s(t.id)),{...t,offset:l,breakpointHide:u}}})},I=()=>{var r;const n=(r=y.value)==null?void 0:r.offsetWidth;f.value=d.value.map(s=>{var o,l,a,u;let t=!1;return(o=s.childs)!=null&&o.length||(t=n<s.breakpointHide+((l=g.value)==null?void 0:l.offsetWidth)),(a=s.childs)!=null&&a.length&&(s.wrap||s.wrapSubmenu)&&(t=n<s.breakpointHide+((u=g.value)==null?void 0:u.offsetWidth)),{...s,showMore:!s.parent&&t}})};return(()=>{d.value=k(_.items),e.nextTick(()=>{d.value=A(),I(),window.addEventListener("resize",I)})})(),(n,r)=>(e.openBlock(),e.createElementBlock("nav",{ref_key:"itemsRefs",ref:y,class:e.normalizeClass([{[`responsive-menu-${c.config.mode}`]:c.config.mode},"responsive-menu"])},[e.createElementVNode("ul",x,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(L.value,(s,t)=>{var o;return e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(["responsive-menu__item",{"responsive-menu__item-submenu":(o=s.childs)==null?void 0:o.length}]),"data-rmenu-id":s.id,key:t,ref_for:!0,ref_key:"itemRefs",ref:p},[e.createTextVNode(e.toDisplayString(s.label)+" ",1),z,s.childs?(e.openBlock(),e.createElementBlock("ul",C,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(T(s.id),(l,a)=>(e.openBlock(),e.createElementBlock("li",{class:"responsive-menu__submenu-item",key:a},e.toDisplayString(l.label),1))),128))])):e.createCommentVNode("",!0)],10,N)}),128)),e.createElementVNode("li",{class:e.normalizeClass(["responsive-menu__more",{"responsive-menu__more-disabled":!S.value.length}]),ref_key:"itemMoreRef",ref:g},[e.createTextVNode(e.toDisplayString(c.config.labelMore)+" ",1),D,e.createElementVNode("ul",H,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(S.value,(s,t)=>(e.openBlock(),e.createElementBlock("li",{class:"responsive-menu__submenu-item",key:t},e.toDisplayString(s.label),1))),128))])],2)])],2))}});return{install(c){c.component("ResponsiveMenu",W)}}});
//# sourceMappingURL=vue3-responsive-menu.umd.js.map