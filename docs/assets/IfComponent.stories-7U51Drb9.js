import{r as c,R as O}from"./index-Dl6G-zuu.js";import{a as V,_ as A,c as d,b as B,n as k,o as T}from"./useThemeProps-BUss7IIM.js";import{_ as s}from"./extends-CvqmdbBt.js";import{a as Z,g as D,s as $,c as G,b as J}from"./generateUtilityClasses-DQuQ3yvh.js";import{r as ee,m as oe,a as te,P as re}from"./Paper-DTh6-10o.js";import{a as ne}from"./useIsFocusVisible-XSBmG5-q.js";import{c as z}from"./createSvgIcon-CLT4jpHP.js";import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{B as se}from"./ButtonBase-CnE_FBWA.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";function ae(e){return V}const le=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],ie=["component","slots","slotProps"],ce=["component"];function E(e,t){const{className:r,elementType:o,ownerState:a,externalForwardedProps:i,getSlotOwnerState:p,internalForwardedProps:m}=t,g=A(t,le),{component:u,slots:f={[e]:void 0},slotProps:x={[e]:void 0}}=i,y=A(i,ie),v=f[e]||o,I=ee(x[e],a),C=oe(s({className:r},g,{externalForwardedProps:e==="root"?y:void 0,externalSlotProps:I})),{props:{component:P},internalRef:N}=C,M=A(C.props,ce),j=ne(N,I==null?void 0:I.ref,t.ref),l=p?p(M):{},R=s({},a,l),b=e==="root"?P||u:P,h=te(v,s({},e==="root"&&!u&&!f[e]&&m,e!=="root"&&!f[e]&&m,M,b&&{as:b},{ref:j}),R);return Object.keys(l).forEach(w=>{delete h[w]}),[v,h]}function de(e){return D("MuiAlert",e)}const pe=Z("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),_=pe;function ue(e){return D("MuiIconButton",e)}const me=Z("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),ge=["edge","children","className","color","disabled","disableFocusRipple","size"],fe=e=>{const{classes:t,disabled:r,color:o,edge:a,size:i}=e,p={root:["root",r&&"disabled",o!=="default"&&`color${d(o)}`,a&&`edge${d(a)}`,`size${d(i)}`]};return J(p,ue,t)},ve=$(se,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.color!=="default"&&t[`color${d(r.color)}`],r.edge&&t[`edge${d(r.edge)}`],t[`size${d(r.size)}`]]}})(({theme:e,ownerState:t})=>s({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:B(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var r;const o=(r=(e.vars||e).palette)==null?void 0:r[t.color];return s({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&s({color:o==null?void 0:o.main},!t.disableRipple&&{"&:hover":s({},o&&{backgroundColor:e.vars?`rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:B(o.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${me.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),Ce=c.forwardRef(function(t,r){const o=V({props:t,name:"MuiIconButton"}),{edge:a=!1,children:i,className:p,color:m="default",disabled:g=!1,disableFocusRipple:u=!1,size:f="medium"}=o,x=A(o,ge),y=s({},o,{edge:a,color:m,disabled:g,disableFocusRipple:u,size:f}),v=fe(y);return n.jsx(ve,s({className:G(v.root,p),centerRipple:!0,focusRipple:!u,disabled:g,ref:r},x,{ownerState:y,children:i}))}),Re=Ce,xe=z(n.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),ye=z(n.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Ie=z(n.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),be=z(n.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Se=z(n.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Ae=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],$e=ae(),ze=e=>{const{variant:t,color:r,severity:o,classes:a}=e,i={root:["root",`color${d(r||o)}`,`${t}${d(r||o)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return J(i,de,a)},Pe=$(re,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${d(r.color||r.severity)}`]]}})(({theme:e})=>{const t=e.palette.mode==="light"?k:T,r=e.palette.mode==="light"?T:k;return s({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${o}Color`]:t(e.palette[o].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${o}StandardBg`]:r(e.palette[o].light,.9),[`& .${_.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}}})),...Object.entries(e.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${o}Color`]:t(e.palette[o].light,.6),border:`1px solid ${(e.vars||e).palette[o].light}`,[`& .${_.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}}})),...Object.entries(e.palette).filter(([,o])=>o.main&&o.dark).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:s({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${o}FilledColor`],backgroundColor:e.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[o].dark:e.palette[o].main,color:e.palette.getContrastText(e.palette[o].main)})}))]})}),Me=$("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),he=$("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),L=$("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),F={success:n.jsx(xe,{fontSize:"inherit"}),warning:n.jsx(ye,{fontSize:"inherit"}),error:n.jsx(Ie,{fontSize:"inherit"}),info:n.jsx(be,{fontSize:"inherit"})},Ne=c.forwardRef(function(t,r){const o=$e({props:t,name:"MuiAlert"}),{action:a,children:i,className:p,closeText:m="Close",color:g,components:u={},componentsProps:f={},icon:x,iconMapping:y=F,onClose:v,role:I="alert",severity:C="success",slotProps:P={},slots:N={},variant:M="standard"}=o,j=A(o,Ae),l=s({},o,{color:g,severity:C,variant:M,colorSeverity:g||C}),R=ze(l),b={slots:s({closeButton:u.CloseButton,closeIcon:u.CloseIcon},N),slotProps:s({},f,P)},[h,w]=E("closeButton",{elementType:Re,externalForwardedProps:b,ownerState:l}),[X,Y]=E("closeIcon",{elementType:Se,externalForwardedProps:b,ownerState:l});return n.jsxs(Pe,s({role:I,elevation:0,ownerState:l,className:G(R.root,p),ref:r},j,{children:[x!==!1?n.jsx(Me,{ownerState:l,className:R.icon,children:x||y[C]||F[C]}):null,n.jsx(he,{ownerState:l,className:R.message,children:i}),a!=null?n.jsx(L,{ownerState:l,className:R.action,children:a}):null,a==null&&v?n.jsx(L,{ownerState:l,className:R.action,children:n.jsx(h,s({size:"small","aria-label":m,title:m,color:"inherit",onClick:v},w,{children:n.jsx(X,s({fontSize:"small"},Y))}))}):null]}))}),W=Ne;function K(e){return e.cond?c.createElement(c.Fragment,null,e.children):e.else?c.createElement(c.Fragment,null,e.else):c.createElement(c.Fragment,null)}const Q=c.memo(K);K.__docgenInfo={description:"",methods:[],displayName:"IfComp",props:{cond:{required:!0,tsType:{name:"union",raw:"boolean | string | null | undefined | unknown",elements:[{name:"boolean"},{name:"string"},{name:"null"},{name:"undefined"},{name:"unknown"}]},description:""},else:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""}}};const He={title:"React Common Components/Components/If",component:Q,argTypes:{cond:{control:"boolean"}}},je=e=>O.createElement(Q,{...e}),S=je.bind({});S.args={cond:!0,else:O.createElement(W,{severity:"error"},"Condition is false"),children:O.createElement(W,{severity:"success"},"Condition is true")};var U,H,q;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:"args => <If {...args} />",...(q=(H=S.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};const qe=["IfStory"];export{S as IfStory,qe as __namedExportsOrder,He as default};
