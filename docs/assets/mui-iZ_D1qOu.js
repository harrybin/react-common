import{_ as Q,x as se,v as oe,c as Z,a as re,u as ce,d as ie,T as ae,s as ue,i as le,f as fe,y as de}from"./useThemeProps-D1TEAO31.js";import{_ as E}from"./extends-ChRHEBve.js";import{r as j,R as he}from"./index-CBqU2yxZ.js";import{g as pe,a as ge,s as ye,c as be,b as me}from"./styled-D4v9Xkq8.js";import{j as ve}from"./jsx-runtime-2xDJh5tt.js";const xe=["sx"],Ce=e=>{var n,s;const t={systemProps:{},otherProps:{}},o=(n=e==null||(s=e.theme)==null?void 0:s.unstable_sxConfig)!=null?n:se;return Object.keys(e).forEach(r=>{o[r]?t.systemProps[r]=e[r]:t.otherProps[r]=e[r]}),t};function je(e){const{sx:n}=e,s=Q(e,xe),{systemProps:t,otherProps:o}=Ce(s);let r;return Array.isArray(n)?r=[t,...n]:typeof n=="function"?r=(...c)=>{const i=n(...c);return oe(i)?E({},t,i):t}:r=E({},t,n),E({},o,{sx:r})}function Se(e){return pe("MuiTypography",e)}ge("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const we=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Oe=e=>{const{align:n,gutterBottom:s,noWrap:t,paragraph:o,variant:r,classes:c}=e,i={root:["root",r,e.align!=="inherit"&&`align${Z(n)}`,s&&"gutterBottom",t&&"noWrap",o&&"paragraph"]};return me(i,Se,c)},_e=ye("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,s.variant&&n[s.variant],s.align!=="inherit"&&n[`align${Z(s.align)}`],s.noWrap&&n.noWrap,s.gutterBottom&&n.gutterBottom,s.paragraph&&n.paragraph]}})(({theme:e,ownerState:n})=>E({margin:0},n.variant==="inherit"&&{font:"inherit"},n.variant!=="inherit"&&e.typography[n.variant],n.align!=="inherit"&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})),z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},$e={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ke=e=>$e[e]||e,Me=j.forwardRef(function(n,s){const t=re({props:n,name:"MuiTypography"}),o=ke(t.color),r=je(E({},t,{color:o})),{align:c="inherit",className:i,component:a,gutterBottom:f=!1,noWrap:h=!1,paragraph:y=!1,variant:d="body1",variantMapping:u=z}=r,l=Q(r,we),p=E({},r,{align:c,color:o,className:i,component:a,gutterBottom:f,noWrap:h,paragraph:y,variant:d,variantMapping:u}),C=a||(y?"p":u[d]||z[d])||"span",x=Oe(p);return ve(_e,E({as:C,ref:s,ownerState:p,className:be(x.root,i)},l))}),Ze=Me;function X(){const e=ce(ie);return e[ae]||e}const Y=Object.fromEntries?Object.fromEntries:e=>{if(!e||!e[Symbol.iterator])throw new Error("Object.fromEntries() requires a single iterable argument");const n={};return Object.keys(e).forEach(s=>{const[t,o]=e[s];n[t]=o}),n};function P(e){return Object.keys(e)}function W(e,n){if(!e)throw new Error(n)}function I(e,n){return n}const B=e=>{const n=e.length;let s=0,t="";for(;s<n;s++){const o=e[s];if(o==null)continue;let r;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))r=B(o);else{W(!I(o,!1)),r="";for(const c in o)o[c]&&c&&(r&&(r+=" "),r+=c)}break}default:r=o}r&&(t&&(t+=" "),t+=r)}return t};function Ee(e,n){const s=j.useRef();return(!s.current||n.length!==s.current.prevDeps.length||s.current.prevDeps.map((t,o)=>t===n[o]).indexOf(!1)>=0)&&(s.current={v:e(),prevDeps:[...n]}),s.current.v}function Te(e){return e instanceof Object&&!("styles"in e)&&!("length"in e)&&!("__emotion_styles"in e)}const{createCssAndCx:Pe}=(()=>{function e(s,t,o){const r=[],c=fe(s,r,o);return r.length<2?o:c+t(r)}function n(s){const{cache:t}=s,o=(...c)=>{const i=ue(c,t.registered);le(t,i,!1);const a=`${t.key}-${i.name}`;e:{const f=c[0];if(!Te(f))break e;J.saveClassNameCSSObjectMapping(t,a,f)}return a};return{css:o,cx:(...c)=>{const i=B(c),a=J.fixClassName(t,i,o);return e(t.registered,o,a)}}}return{createCssAndCx:n}})();function K(e){const{useCache:n}=e;function s(){const t=n(),{css:o,cx:r}=Ee(()=>Pe({cache:t}),[t]);return{css:o,cx:r}}return{useCssAndCx:s}}const J=(()=>{const e=new WeakMap;return{saveClassNameCSSObjectMapping:(n,s,t)=>{let o=e.get(n);o===void 0&&(o=new Map,e.set(n,o)),o.set(s,t)},fixClassName:(()=>{function n(s){let t=!1;return s.map(([o,r])=>{if(r===void 0)return o;let c;if(t)c={"&&":r};else{c=o;for(const i in r)if(i.startsWith("@media")){t=!0;break}}return c})}return(s,t,o)=>{const r=e.get(s);return B(n(t.split(" ").map(c=>[c,r==null?void 0:r.get(c)])).map(c=>typeof c=="string"?c:o(c)))}})()}})();function A(e){if(!(e instanceof Object)||typeof e=="function")return e;const n=[];for(const s in e){const t=e[s],o=typeof t;if(!(o==="string"||o==="number"&&!isNaN(t)||o==="boolean"||t===void 0||t===null))return e;n.push(`${s}:${o}_${t}`)}return"xSqLiJdLMd9s"+n.join("|")}function D(e,n,s){if(!(n instanceof Object))return e;const t={};return P(e).forEach(o=>t[o]=s(e[o],n[o])),P(n).forEach(o=>{if(o in e)return;const r=n[o];typeof r=="string"&&(t[o]=r)}),t}const G=({classes:e,theme:n,muiStyleOverridesParams:s,css:t,cx:o,name:r})=>{var c,i;e:{if(r==="makeStyle no name"){r=void 0;break e}if(s!==void 0&&r===void 0)throw new Error("To use muiStyleOverridesParams, you must specify a name using .withName('MyComponent')")}let a;try{a=r===void 0?void 0:((i=(c=n.components)===null||c===void 0?void 0:c[r])===null||i===void 0?void 0:i.styleOverrides)||void 0}catch{}const f=j.useMemo(()=>{if(a===void 0)return;const h={};for(const y in a){const d=a[y];d instanceof Object&&(h[y]=t(typeof d=="function"?d(Object.assign({theme:n,ownerState:s==null?void 0:s.ownerState},s==null?void 0:s.props)):d))}return h},[a,A(s==null?void 0:s.props),A(s==null?void 0:s.ownerState),t]);return e=j.useMemo(()=>D(e,f,o),[e,f,o]),{classes:e}};let Ae=0;function N(e){const{useTheme:n,cache:s}=e,{useCache:t}=ee({cacheProvidedAtInception:s}),{useCssAndCx:o}=K({useCache:t});function r(i){const{name:a,uniqId:f=`${Ae++}`}=i??{},h=typeof a!="object"?a:Object.keys(a)[0];return function(y){const d=typeof y=="function"?y:()=>y;return function(l,p){const C=n();let{css:x,cx:b}=o();const _=t();let m=j.useMemo(()=>{const g={},M=typeof Proxy<"u"&&new Proxy({},{get:(v,S)=>(typeof S=="symbol"&&W(!1),g[S]=`${_.key}-${f}${h!==void 0?`-${h}`:""}-${S}-ref`)}),T=d(C,l,M||{}),$=Y(P(T).map(v=>{const S=T[v];return S.label||(S.label=`${h!==void 0?`${h}-`:""}${v}`),[v,`${x(S)}${I(v,v in g)?` ${g[v]}`:""}`]}));return P(g).forEach(v=>{v in $||($[v]=g[v])}),$},[_,x,b,C,A(l)]);{const g=p==null?void 0:p.props.classes;m=j.useMemo(()=>D(m,g,b),[m,A(g),b])}{const g=G({classes:m,css:x,cx:b,name:h??"makeStyle no name",idOfUseStyles:f,muiStyleOverridesParams:p,theme:C});g.classes!==void 0&&(m=g.classes),g.css!==void 0&&(x=g.css),g.cx!==void 0&&(b=g.cx)}return{classes:m,theme:C,css:x,cx:b}}}}function c(){const i=n(),{css:a,cx:f}=o();return{theme:i,css:a,cx:f}}return{makeStyles:r,useStyles:c}}const Ue=j.createContext(void 0),{createUseCache:ee}=(()=>{function e(){return j.useContext(Ue)}function n(s){const{cacheProvidedAtInception:t}=s;function o(){var r;const c=de(),i=e(),a=(r=t??i)!==null&&r!==void 0?r:c;if(a===null)throw new Error(["In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.","MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,","MUI needs an Emotion cache to be provided for SSR to work.","Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/","TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr"].join(`
`));return a}return{useCache:o}}return{createUseCache:n}})();function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}var V=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]]);return s};function Re(e){const{useTheme:n,cache:s}=e,{makeStyles:t}=N({useTheme:n,cache:s});function o(r,c,i){const a=typeof r=="string"?(()=>{const u=r,l=function(p){var{children:C}=p,x=V(p,["children"]);return j.createElement(u,x,C)};return Object.defineProperty(l,"name",{value:L(u)}),l})():r,f=(()=>{{const{name:l}=i??{};if(l!==void 0)return typeof l!="object"?l:Object.keys(l)[0]}let u;e:{const l=a.displayName;if(typeof l!="string"||l==="")break e;u=l}e:{if(u!==void 0)break e;const l=a.name;if(typeof l!="string"||l==="")break e;u=l}if(u!==void 0)return u=u.replace(/\$/g,"usd"),u=u.replace(/\(/g,"_").replace(/\)/g,"_"),u=u.replace(/[^a-zA-Z0-9-_]/g,"_"),u})(),h=t(Object.assign(Object.assign({},i),{name:f}))(typeof c=="function"?(u,l,p)=>H(c(u,l,p)):H(c));function y(u){for(const l in u)if(l!=="root")return!0;return!1}const d=j.forwardRef(function(u,l){const{className:p,classes:C}=u,x=V(u,["className","classes"]),{classes:b,cx:_}=h(u,{props:u}),m=_(b.root,p);return te.set(b,Object.assign(Object.assign({},b),{root:m})),he.createElement(a,Object.assign({ref:l,className:y(b)?p:m},typeof r=="string"?{}:{classes:b},x))});return f!==void 0&&(d.displayName=`${L(f)}WithStyles`,Object.defineProperty(d,"name",{value:d.displayName})),d}return o.getClasses=We,{withStyles:o}}const te=new WeakMap,F="getClasses should only be used in conjunction with withStyles";function We(e){const n=e.classes;if(n===void 0)throw new Error(F);const s=te.get(n);if(s===void 0)throw new Error(F);return s}function H(e){const n={},s={};return Object.keys(e).forEach(t=>(t.startsWith("@media")?s:n)[t]=e[t]),Object.keys(s).forEach(t=>{const o=s[t];Object.keys(o).forEach(r=>{var c;return n[r]=Object.assign(Object.assign({},(c=n[r])!==null&&c!==void 0?c:{}),{[t]:o[r]})})}),n}const Ie=!(typeof document=="object"&&typeof(document==null?void 0:document.getElementById)=="function")&&!(typeof jest<"u")&&!(typeof mocha<"u")&&!(typeof __vitest_worker__<"u");var Be=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]]);return s};function ne(e){const{useContext:n,usePlugin:s,cache:t}=e,{useCache:o}=ee({cacheProvidedAtInception:t}),{useCssAndCx:r}=K({useCache:o});return{tss:U({useContext:n,useCache:o,useCssAndCx:r,usePlugin:s??(({classes:a,cx:f,css:h})=>({classes:a,cx:f,css:h})),name:void 0,doesUseNestedSelectors:!1})}}let De=0;const R=[];function U(e){const{useContext:n,useCache:s,useCssAndCx:t,usePlugin:o,name:r,doesUseNestedSelectors:c}=e;return{withParams:()=>U(Object.assign({},e)),withName:i=>U(Object.assign(Object.assign({},e),{name:typeof i!="object"?i:Object.keys(i)[0]})),withNestedSelectors:()=>U(Object.assign(Object.assign({},e),{doesUseNestedSelectors:!0})),create:i=>{const a=`x${De++}`,f=typeof i=="function"?i:()=>i;return function(y){var d,u,l;const p=y??{},{classesOverrides:C}=p,x=Be(p,["classesOverrides"]),b=n(),{css:_,cx:m}=t(),g=s();let M=j.useMemo(()=>{const $={},v=f(Object.assign(Object.assign(Object.assign({},y),b),c?{classes:typeof Proxy>"u"?{}:new Proxy({},{get:(w,O)=>{if(typeof O=="symbol"&&W(!1),Ie){{let k=R.find(q=>q.name===r&&q.idOfUseStyles===a);k===void 0&&(k={name:r,idOfUseStyles:a,nestedSelectorRuleNames:new Set},R.push(k)),k.nestedSelectorRuleNames.add(O)}if(R.find(k=>k.name===r&&k.idOfUseStyles!==a&&k.nestedSelectorRuleNames.has(O))!==void 0)throw new Error([`tss-react: Duplicate nested selector "${O}" detected in ${r===void 0?`useStyles named "${r}"`:"anonymous useStyles function"}.`,"In SSR setups, this may lead to CSS class name collisions, causing nested selectors to target elements outside of the intended scope.",'Solution: Ensure each useStyles using nested selectors has a unique name. Use tss.withName("UniqueName").withNestedSelectors<...>()... to set a name.'].join(`
`))}return $[O]=`${g.key}-${a}${r!==void 0?`-${r}`:""}-${O}-ref`}})}:{})),S=Y(P(v).map(w=>{const O=v[w];return O.label||(O.label=`${r!==void 0?`${r}-`:""}${w}`),[w,`${_(O)}${I(w,w in $)?` ${$[w]}`:""}`]}));return P($).forEach(w=>{w in S||(S[w]=$[w])}),S},[g,_,m,A(y),...Object.values(b)]);M=j.useMemo(()=>D(M,C,m),[M,A(C),m]);const T=o(Object.assign(Object.assign({classes:M,css:_,cx:m,idOfUseStyles:a,name:r},b),x));return Object.assign({classes:(d=T.classes)!==null&&d!==void 0?d:M,css:(u=T.css)!==null&&u!==void 0?u:_,cx:(l=T.cx)!==null&&l!==void 0?l:m},b)}}}}function qe(e){return Object.assign(Object.assign({},N(e)),Re(e))}const{tss:ze}=ne({useContext:()=>({})});ze.create({});const{makeStyles:Xe,withStyles:Ye}=qe({useTheme:X}),{tss:Je}=ne({useContext:function(){return{theme:X()}},usePlugin:G});Je.create({});export{Ze as T,je as e,Xe as m,X as u};