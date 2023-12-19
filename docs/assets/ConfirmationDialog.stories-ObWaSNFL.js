import{j as c,a as P}from"./jsx-runtime-5BUNAZ9W.js";import{u as te,m as ae}from"./mui-zV4sgmXq.js";import{r as p}from"./index-4g5l5LRQ.js";import{c as m,u as D,_ as y}from"./useThemeProps-Ia60plnu.js";import{_ as l}from"./extends-E30VzY7q.js";import{a as v,g as k,s as u,c as g,b as W}from"./styled-4Q6D5YVj.js";import{B as ie,M as ne,u as le,F as re,a as V}from"./Modal-pRtQ1UC-.js";import{P as H}from"./ButtonBase-vWU56o3e.js";import{T as O}from"./Typography-51fFmjlr.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./useIsFocusVisible-fsKM_sRC.js";import"./inheritsLoose-N4InywQs.js";import"./index-jmm5gWkb.js";import"./emotion-react.browser.esm-wSdy2EG9.js";function se(e){return k("MuiDialog",e)}const ce=v("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),_=ce,de=p.createContext({}),j=de,pe=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ue=u(ie,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),me=e=>{const{classes:o,scroll:t,maxWidth:a,fullWidth:i,fullScreen:r}=e,s={root:["root"],container:["container",`scroll${m(t)}`],paper:["paper",`paperScroll${m(t)}`,`paperWidth${m(String(a))}`,i&&"paperFullWidth",r&&"paperFullScreen"]};return W(s,se,o)},ge=u(ne,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),fe=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.container,o[`scroll${m(t.scroll)}`]]}})(({ownerState:e})=>l({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),he=u(H,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.paper,o[`scrollPaper${m(t.scroll)}`],o[`paperWidth${m(String(t.maxWidth))}`],t.fullWidth&&o.paperFullWidth,t.fullScreen&&o.paperFullScreen]}})(({theme:e,ownerState:o})=>l({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${_.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[o.maxWidth]}${e.breakpoints.unit}`,[`&.${_.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${_.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),xe=p.forwardRef(function(o,t){const a=D({props:o,name:"MuiDialog"}),i=te(),r={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":s,"aria-labelledby":n,BackdropComponent:d,BackdropProps:f,children:B,className:S,disableEscapeKeyDown:w=!1,fullScreen:E=!1,fullWidth:Y=!1,maxWidth:K="sm",onBackdropClick:N,onClose:$,open:L,PaperComponent:X=H,PaperProps:A={},scroll:z="paper",TransitionComponent:G=re,transitionDuration:F=r,TransitionProps:J}=a,Q=y(a,pe),C=l({},a,{disableEscapeKeyDown:w,fullScreen:E,fullWidth:Y,maxWidth:K,scroll:z}),M=me(C),T=p.useRef(),Z=h=>{T.current=h.target===h.currentTarget},ee=h=>{T.current&&(T.current=null,N&&N(h),$&&$(h,"backdropClick"))},R=le(n),oe=p.useMemo(()=>({titleId:R}),[R]);return c(ge,l({className:g(M.root,S),closeAfterTransition:!0,components:{Backdrop:ue},componentsProps:{backdrop:l({transitionDuration:F,as:d},f)},disableEscapeKeyDown:w,onClose:$,open:L,ref:t,onClick:ee,ownerState:C},Q,{children:c(G,l({appear:!0,in:L,timeout:F,role:"presentation"},J,{children:c(fe,{className:g(M.container),onMouseDown:Z,ownerState:C,children:c(he,l({as:X,elevation:24,role:"dialog","aria-describedby":s,"aria-labelledby":R},A,{className:g(M.paper,A.className),ownerState:C,children:c(j.Provider,{value:oe,children:B})}))})}))}))}),be=xe;function Ce(e){return k("MuiDialogActions",e)}v("MuiDialogActions",["root","spacing"]);const De=["className","disableSpacing"],ye=e=>{const{classes:o,disableSpacing:t}=e;return W({root:["root",!t&&"spacing"]},Ce,o)},ve=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disableSpacing&&o.spacing]}})(({ownerState:e})=>l({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),ke=p.forwardRef(function(o,t){const a=D({props:o,name:"MuiDialogActions"}),{className:i,disableSpacing:r=!1}=a,s=y(a,De),n=l({},a,{disableSpacing:r}),d=ye(n);return c(ve,l({className:g(d.root,i),ownerState:n,ref:t},s))}),We=ke;function Be(e){return k("MuiDialogContent",e)}v("MuiDialogContent",["root","dividers"]);function Se(e){return k("MuiDialogTitle",e)}const $e=v("MuiDialogTitle",["root"]),Me=$e,Te=["className","dividers"],Re=e=>{const{classes:o,dividers:t}=e;return W({root:["root",t&&"dividers"]},Be,o)},Pe=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.dividers&&o.dividers]}})(({theme:e,ownerState:o})=>l({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${Me.root} + &`]:{paddingTop:0}})),_e=p.forwardRef(function(o,t){const a=D({props:o,name:"MuiDialogContent"}),{className:i,dividers:r=!1}=a,s=y(a,Te),n=l({},a,{dividers:r}),d=Re(n);return c(Pe,l({className:g(d.root,i),ownerState:n,ref:t},s))}),we=_e,Ne=["className","id"],Le=e=>{const{classes:o}=e;return W({root:["root"]},Se,o)},Ae=u(O,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),Fe=p.forwardRef(function(o,t){const a=D({props:o,name:"MuiDialogTitle"}),{className:i,id:r}=a,s=y(a,Ne),n=a,d=Le(n),{titleId:f=r}=p.useContext(j);return c(Ae,l({component:"h2",className:g(d.root,i),ownerState:n,ref:t,variant:"h6",id:r??f},s))}),Ve=Fe,qe=ae()(e=>({header:{background:e.palette.primary.main,color:e.palette.primary.contrastText},dialogContent:{padding:e.spacing(1)},dialogContentFull:{padding:e.spacing(0)}}));function b(e){const{classes:o}=qe(),{title:t,text:a,onClose:i,open:r,leftButtonLabel:s,rightButtonLabel:n,isRightButtonHighlighted:d,...f}=e,B=()=>{i&&i(!1)},S=()=>{i&&i(!0)};return P(be,{disableEscapeKeyDown:!0,fullScreen:e.fullScreen,maxWidth:e.maxWidth??"xs","aria-labelledby":"confirmation-dialog-title",open:r,onClose:void 0,...f,children:[c(Ve,{id:"confirmation-dialog-title",className:o.header,children:t}),P(we,{dividers:!0,className:e.fullScreen?o.dialogContentFull:o.dialogContent,children:[a&&c(O,{children:typeof a=="string"?a:a()}),e.children]}),P(We,{children:[s!==void 0&&c(V,{id:"button_confirmOk",onClick:S,color:"primary",variant:e.isRightButtonHighlighted?"text":"contained",disabled:e.leftButtonDisabled,children:s!==""?s:"common_ok"}),n!==void 0&&c(V,{id:"button_confirmCancel",variant:e.isRightButtonHighlighted?"contained":"text",autoFocus:!0,onClick:B,color:"primary",children:n!==""?n:"common_cancel"})]})]})}b.defaultProps={title:"",text:"",leftButtonLabel:"",rightButtonLabel:void 0};try{b.displayName="ConfirmationDialog",b.__docgenInfo={description:"",displayName:"ConfirmationDialog",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string | (() => string)"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"ConfirmationDialogCloseHandler"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},leftButtonLabel:{defaultValue:{value:""},description:`The left button caption.
If undefined button is not shown.
If empty string (''), the default caption value "Cancel" is used.
Default value: undefined.`,name:"leftButtonLabel",required:!1,type:{name:"{string}"}},leftButtonDisabled:{defaultValue:null,description:"",name:"leftButtonDisabled",required:!1,type:{name:"boolean"}},rightButtonLabel:{defaultValue:{value:"undefined"},description:`The right button caption.
If undefined button is not shown.
If empty string (''), the default caption value "Ok" is used.
Default value: '' (--> Ok).`,name:"rightButtonLabel",required:!1,type:{name:"{string}"}},isRightButtonHighlighted:{defaultValue:null,description:"",name:"isRightButtonHighlighted",required:!1,type:{name:"boolean"}},fullScreen:{defaultValue:null,description:"",name:"fullScreen",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ConfirmationDialogMaxWidth"}}}}}catch{}const oo={title:"React Common Components/Components/Confirmation Dialog",component:b},Ie=e=>c(b,{...e}),x=Ie.bind({});x.args={open:!1,title:"Confirmation Dialog",text:"Are you sure?",leftButtonLabel:"Ok",rightButtonLabel:"Cancel"};var q,I,U;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:"args => <ConfirmationDialog {...args} />",...(U=(I=x.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const to=["ConfirmationDialogStory"];export{x as ConfirmationDialogStory,to as __namedExportsOrder,oo as default};