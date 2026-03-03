import{j as n,c as t}from"./index.xHctngzh.js";import"./index.DQAzCpnI.js";import{c,b as p}from"./button.RImENLQK.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=c("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=c("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=c("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);function j({className:i,...a}){return n.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:t("mx-auto flex w-full justify-center",i),...a})}function u({className:i,...a}){return n.jsx("ul",{"data-slot":"pagination-content",className:t("flex flex-row items-center gap-1",i),...a})}function l({...i}){return n.jsx("li",{"data-slot":"pagination-item",...i})}function x({className:i,isActive:a,isDisabled:s,size:r="icon",...o}){return n.jsx("a",{"aria-current":a?"page":void 0,"data-slot":"pagination-link","data-active":a,"data-disabled":s,className:t(p({variant:a?"outline":"ghost",size:r}),s&&"pointer-events-none opacity-50",i),...o})}function g({className:i,isDisabled:a,...s}){return n.jsxs(x,{"aria-label":"Go to previous page",size:"default",className:t("gap-1 px-2.5 sm:pl-2.5",i),isDisabled:a,...s,children:[n.jsx(h,{}),n.jsx("span",{className:"hidden sm:block",children:"上一页"})]})}function v({className:i,isDisabled:a,...s}){return n.jsxs(x,{"aria-label":"Go to next page",size:"default",className:t("gap-1 px-2.5 sm:pr-2.5",i),isDisabled:a,...s,children:[n.jsx("span",{className:"hidden sm:block",children:"下一页"}),n.jsx(m,{})]})}function y({className:i,...a}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:t("flex size-9 items-center justify-center",i),...a,children:[n.jsx(f,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"更多"})]})}const w=({currentPage:i,totalPages:a,baseUrl:s})=>{const r=Array.from({length:a},(e,d)=>d+1),o=e=>e===1?s:`${s}${e}`;return n.jsx(j,{children:n.jsxs(u,{className:"flex-wrap",children:[n.jsx(l,{children:n.jsx(g,{href:i>1?o(i-1):void 0,isDisabled:i===1})}),r.map(e=>n.jsx(l,{children:n.jsx(x,{href:o(e),isActive:e===i,children:e})},e)),a>5&&n.jsx(l,{children:n.jsx(y,{})}),n.jsx(l,{children:n.jsx(v,{href:i<a?o(i+1):void 0,isDisabled:i===a})})]})})};export{w as default};
