import{_ as g}from"./extends-CvqmdbBt.js";import{r as v}from"./index-Dl6G-zuu.js";import{j as S}from"./jsx-runtime-Du8NFWEI.js";import{c as f,a as z,_ as I}from"./useThemeProps-BUss7IIM.js";import{g as C,a as R,s as w,c as b,b as j}from"./generateUtilityClasses-DQuQ3yvh.js";function N(o){return C("MuiSvgIcon",o)}R("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const A=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],B=o=>{const{color:t,fontSize:e,classes:r}=o,i={root:["root",t!=="inherit"&&`color${f(t)}`,`fontSize${f(e)}`]};return j(i,N,r)},M=w("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.color!=="inherit"&&t[`color${f(e.color)}`],t[`fontSize${f(e.fontSize)}`]]}})(({theme:o,ownerState:t})=>{var e,r,i,p,d,a,h,m,u,l,s,c,n;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(e=o.transitions)==null||(r=e.create)==null?void 0:r.call(e,"fill",{duration:(i=o.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((p=o.typography)==null||(d=p.pxToRem)==null?void 0:d.call(p,20))||"1.25rem",medium:((a=o.typography)==null||(h=a.pxToRem)==null?void 0:h.call(a,24))||"1.5rem",large:((m=o.typography)==null||(u=m.pxToRem)==null?void 0:u.call(m,35))||"2.1875rem"}[t.fontSize],color:(l=(s=(o.vars||o).palette)==null||(s=s[t.color])==null?void 0:s.main)!=null?l:{action:(c=(o.vars||o).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(n=(o.vars||o).palette)==null||(n=n.action)==null?void 0:n.disabled,inherit:void 0}[t.color]}}),y=v.forwardRef(function(t,e){const r=z({props:t,name:"MuiSvgIcon"}),{children:i,className:p,color:d="inherit",component:a="svg",fontSize:h="medium",htmlColor:m,inheritViewBox:u=!1,titleAccess:l,viewBox:s="0 0 24 24"}=r,c=I(r,A),n=v.isValidElement(i)&&i.type==="svg",x=g({},r,{color:d,component:a,fontSize:h,instanceFontSize:t.fontSize,inheritViewBox:u,viewBox:s,hasSvgAsChild:n}),$={};u||($.viewBox=s);const _=B(x);return S.jsxs(M,g({as:a,className:b(_.root,p),focusable:"false",color:m,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:e},$,c,n&&i.props,{ownerState:x,children:[n?i.props.children:i,l?S.jsx("title",{children:l}):null]}))});y.muiName="SvgIcon";function L(o,t){function e(r,i){return S.jsx(y,g({"data-testid":`${t}Icon`,ref:i},r,{children:o}))}return e.muiName=y.muiName,v.memo(v.forwardRef(e))}export{L as c};
