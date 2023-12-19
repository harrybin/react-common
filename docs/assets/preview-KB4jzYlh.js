import{j as i,a as h}from"./jsx-runtime-5BUNAZ9W.js";import{m as y,l as v,_ as S,T as d,u as T,b as x}from"./useThemeProps-Ia60plnu.js";import{_ as c}from"./extends-E30VzY7q.js";import{r as l}from"./index-4g5l5LRQ.js";import{G as _}from"./GlobalStyles-d8L2P4df.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-wSdy2EG9.js";const C=l.createContext(null),g=C;function b(){return l.useContext(g)}const E=typeof Symbol=="function"&&Symbol.for,M=E?Symbol.for("mui.nested"):"__THEME_NESTED__";function k(e,o){return typeof o=="function"?o(e):c({},e,o)}function $(e){const{children:o,theme:t}=e,r=b(),n=l.useMemo(()=>{const s=r===null?t:k(r,t);return s!=null&&(s[M]=r!==null),s},[t,r]);return i(g.Provider,{value:n,children:o})}const f={};function p(e,o,t,r=!1){return l.useMemo(()=>{const n=e&&o[e]||o;if(typeof t=="function"){const s=t(n),a=e?c({},o,{[e]:s}):s;return r?()=>a:a}return e?c({},o,{[e]:t}):c({},o,t)},[e,o,t,r])}function P(e){const{children:o,theme:t,themeId:r}=e,n=y(f),s=b()||f,a=p(r,n,t),u=p(r,s,t,!0);return i($,{theme:u,children:i(v.Provider,{value:a,children:o})})}const j=["theme"];function O(e){let{theme:o}=e,t=S(e,j);const r=o[d];return i(P,c({},t,{themeId:r?d:void 0,theme:r||o}))}const W=(e,o)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!e.vars&&{colorScheme:e.palette.mode}),z=e=>c({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),B=(e,o=!1)=>{var t;const r={};o&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([a,u])=>{var m;r[e.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:(m=u.palette)==null?void 0:m.mode}});let n=c({html:W(e,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:c({margin:0},z(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const s=(t=e.components)==null||(t=t.MuiCssBaseline)==null?void 0:t.styleOverrides;return s&&(n=[n,s]),n};function w(e){const o=T({props:e,name:"MuiCssBaseline"}),{children:t,enableColorScheme:r=!1}=o;return h(l.Fragment,{children:[i(_,{styles:n=>B(n,r)}),t]})}const D=x({}),Z={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},F=e=>h(O,{theme:D,children:[i(w,{}),i(e,{})]}),q=[F];export{q as decorators,Z as default,F as withMuiTheme};
