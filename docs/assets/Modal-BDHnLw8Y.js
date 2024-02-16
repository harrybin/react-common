import{r as c,a as wt,R as et}from"./index-CBqU2yxZ.js";import{_ as X,c as D,b as ot,z as Wt,a as dt}from"./useThemeProps-D1TEAO31.js";import{_ as p}from"./extends-ChRHEBve.js";import{a as ut,g as pt,s as Y,r as Ut,c as H,b as ft}from"./styled-D4v9Xkq8.js";import{j as B,a as vt}from"./jsx-runtime-2xDJh5tt.js";import{T as Bt,B as Ht,u as Et,a as yt}from"./Paper-CKaXriZE.js";import{u as Gt}from"./mui-iZ_D1qOu.js";import{a as Q,s as Ct}from"./useIsFocusVisible-CgFDEMiT.js";import{_ as Kt}from"./inheritsLoose-SLCf_n8R.js";import{R as rt,r as Vt}from"./index-BtM5VmRH.js";function Rt(...t){return t.reduce((n,r)=>r==null?n:function(...i){n.apply(this,i),r.apply(this,i)},()=>{})}function w(t){return t&&t.ownerDocument||document}function ht(t){return w(t).defaultView||window}let kt=0;function jt(t){const[n,r]=c.useState(t),e=t||n;return c.useEffect(()=>{n==null&&(kt+=1,r(`mui-${kt}`))},[n]),e}const Tt=wt.useId;function se(t){if(Tt!==void 0){const n=Tt();return t??n}return jt(t)}function Xt(t){const n=t.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}const St={disabled:!1};var Yt=function(n){return n.scrollTop},Z="unmounted",W="exited",U="entering",j="entered",ct="exiting",A=function(t){Kt(n,t);function n(e,i){var o;o=t.call(this,e,i)||this;var s=i,a=s&&!s.isMounting?e.enter:e.appear,l;return o.appearStatus=null,e.in?a?(l=W,o.appearStatus=U):l=j:e.unmountOnExit||e.mountOnEnter?l=Z:l=W,o.state={status:l},o.nextCallback=null,o}n.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===Z?{status:W}:null};var r=n.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==U&&s!==j&&(o=U):(s===U||s===j)&&(o=ct)}this.updateStatus(!1,o)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},r.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===U){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:rt.findDOMNode(this);s&&Yt(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===W&&this.setState({status:Z})},r.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[rt.findDOMNode(this),a],d=l[0],v=l[1],h=this.getTimeouts(),b=a?h.appear:h.enter;if(!i&&!s||St.disabled){this.safeSetState({status:j},function(){o.props.onEntered(d)});return}this.props.onEnter(d,v),this.safeSetState({status:U},function(){o.props.onEntering(d,v),o.onTransitionEnd(b,function(){o.safeSetState({status:j},function(){o.props.onEntered(d,v)})})})},r.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:rt.findDOMNode(this);if(!o||St.disabled){this.safeSetState({status:W},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:ct},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:W},function(){i.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},r.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:rt.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],d=l[0],v=l[1];this.props.addEndListener(d,v)}i!=null&&setTimeout(this.nextCallback,i)},r.render=function(){var i=this.state.status;if(i===Z)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=X(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return et.createElement(Bt.Provider,{value:null},typeof s=="function"?s(i,a):et.cloneElement(et.Children.only(s),a))},n}(et.Component);A.contextType=Bt;A.propTypes={};function V(){}A.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:V,onEntering:V,onEntered:V,onExit:V,onExiting:V,onExited:V};A.UNMOUNTED=Z;A.EXITED=W;A.ENTERING=U;A.ENTERED=j;A.EXITING=ct;const qt=A;function Zt(t){return pt("MuiButton",t)}const Jt=ut("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),it=Jt,Qt=c.createContext({}),tn=Qt,nn=c.createContext(void 0),en=nn,on=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],rn=t=>{const{color:n,disableElevation:r,fullWidth:e,size:i,variant:o,classes:s}=t,a={root:["root",o,`${o}${D(n)}`,`size${D(i)}`,`${o}Size${D(i)}`,n==="inherit"&&"colorInherit",r&&"disableElevation",e&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${D(i)}`],endIcon:["endIcon",`iconSize${D(i)}`]},l=ft(a,Zt,s);return p({},s,l)},zt=t=>p({},t.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},t.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},t.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),sn=Y(Ht,{shouldForwardProp:t=>Ut(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.root,n[r.variant],n[`${r.variant}${D(r.color)}`],n[`size${D(r.size)}`],n[`${r.variant}Size${D(r.size)}`],r.color==="inherit"&&n.colorInherit,r.disableElevation&&n.disableElevation,r.fullWidth&&n.fullWidth]}})(({theme:t,ownerState:n})=>{var r,e;const i=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],o=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return p({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":p({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:ot(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="text"&&n.color!=="inherit"&&{backgroundColor:t.vars?`rgba(${t.vars.palette[n.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:ot(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="outlined"&&n.color!=="inherit"&&{border:`1px solid ${(t.vars||t).palette[n.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[n.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:ot(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="contained"&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:o,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},n.variant==="contained"&&n.color!=="inherit"&&{backgroundColor:(t.vars||t).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[n.color].main}}),"&:active":p({},n.variant==="contained"&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${it.focusVisible}`]:p({},n.variant==="contained"&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${it.disabled}`]:p({color:(t.vars||t).palette.action.disabled},n.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},n.variant==="contained"&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},n.variant==="text"&&{padding:"6px 8px"},n.variant==="text"&&n.color!=="inherit"&&{color:(t.vars||t).palette[n.color].main},n.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},n.variant==="outlined"&&n.color!=="inherit"&&{color:(t.vars||t).palette[n.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[n.color].mainChannel} / 0.5)`:`1px solid ${ot(t.palette[n.color].main,.5)}`},n.variant==="contained"&&{color:t.vars?t.vars.palette.text.primary:(r=(e=t.palette).getContrastText)==null?void 0:r.call(e,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:i,boxShadow:(t.vars||t).shadows[2]},n.variant==="contained"&&n.color!=="inherit"&&{color:(t.vars||t).palette[n.color].contrastText,backgroundColor:(t.vars||t).palette[n.color].main},n.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},n.size==="small"&&n.variant==="text"&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},n.size==="large"&&n.variant==="text"&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},n.size==="small"&&n.variant==="outlined"&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},n.size==="large"&&n.variant==="outlined"&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},n.size==="small"&&n.variant==="contained"&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},n.size==="large"&&n.variant==="contained"&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},n.fullWidth&&{width:"100%"})},({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${it.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${it.disabled}`]:{boxShadow:"none"}}),an=Y("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.startIcon,n[`iconSize${D(r.size)}`]]}})(({ownerState:t})=>p({display:"inherit",marginRight:8,marginLeft:-4},t.size==="small"&&{marginLeft:-2},zt(t))),ln=Y("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.endIcon,n[`iconSize${D(r.size)}`]]}})(({ownerState:t})=>p({display:"inherit",marginRight:-4,marginLeft:8},t.size==="small"&&{marginRight:-2},zt(t))),cn=c.forwardRef(function(n,r){const e=c.useContext(tn),i=c.useContext(en),o=Wt(e,n),s=dt({props:o,name:"MuiButton"}),{children:a,color:l="primary",component:d="button",className:v,disabled:h=!1,disableElevation:b=!1,disableFocusRipple:g=!1,endIcon:f,focusVisibleClassName:T,fullWidth:P=!1,size:N="medium",startIcon:S,type:u,variant:C="text"}=s,R=X(s,on),k=p({},s,{color:l,component:d,disabled:h,disableElevation:b,disableFocusRipple:g,fullWidth:P,size:N,type:u,variant:C}),E=rn(k),I=S&&B(an,{className:E.startIcon,ownerState:k,children:S}),z=f&&B(ln,{className:E.endIcon,ownerState:k,children:f}),M=i||"";return vt(sn,p({ownerState:k,className:H(e.className,E.root,v,M),component:d,disabled:h,focusRipple:!g,focusVisibleClassName:H(E.focusVisible,T),ref:r,type:u},R,{classes:E,children:[I,a,z]}))}),ae=cn;function dn(t){return typeof t=="string"}function un(t,n,r){return t===void 0||dn(t)?n:p({},n,{ownerState:p({},n.ownerState,r)})}function Ot(t,n=[]){if(t===void 0)return{};const r={};return Object.keys(t).filter(e=>e.match(/^on[A-Z]/)&&typeof t[e]=="function"&&!n.includes(e)).forEach(e=>{r[e]=t[e]}),r}function pn(t,n,r){return typeof t=="function"?t(n,r):t}function Pt(t){if(t===void 0)return{};const n={};return Object.keys(t).filter(r=>!(r.match(/^on[A-Z]/)&&typeof t[r]=="function")).forEach(r=>{n[r]=t[r]}),n}function fn(t){const{getSlotProps:n,additionalProps:r,externalSlotProps:e,externalForwardedProps:i,className:o}=t;if(!n){const g=H(r==null?void 0:r.className,o,i==null?void 0:i.className,e==null?void 0:e.className),f=p({},r==null?void 0:r.style,i==null?void 0:i.style,e==null?void 0:e.style),T=p({},r,i,e);return g.length>0&&(T.className=g),Object.keys(f).length>0&&(T.style=f),{props:T,internalRef:void 0}}const s=Ot(p({},i,e)),a=Pt(e),l=Pt(i),d=n(s),v=H(d==null?void 0:d.className,r==null?void 0:r.className,o,i==null?void 0:i.className,e==null?void 0:e.className),h=p({},d==null?void 0:d.style,r==null?void 0:r.style,i==null?void 0:i.style,e==null?void 0:e.style),b=p({},d,r,l,a);return v.length>0&&(b.className=v),Object.keys(h).length>0&&(b.style=h),{props:b,internalRef:d.ref}}const vn=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Nt(t){var n;const{elementType:r,externalSlotProps:e,ownerState:i,skipResolvingSlotProps:o=!1}=t,s=X(t,vn),a=o?{}:pn(e,i),{props:l,internalRef:d}=fn(p({},s,{externalSlotProps:a})),v=Q(d,a==null?void 0:a.ref,(n=t.additionalProps)==null?void 0:n.ref);return un(r,p({},l,{ref:v}),i)}function hn(t){const n=w(t);return n.body===t?ht(t).innerWidth>n.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function J(t,n){n?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function It(t){return parseInt(ht(t).getComputedStyle(t).paddingRight,10)||0}function xn(t){const r=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(t.tagName)!==-1,e=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return r||e}function Mt(t,n,r,e,i){const o=[n,r,...e];[].forEach.call(t.children,s=>{const a=o.indexOf(s)===-1,l=!xn(s);a&&l&&J(s,i)})}function lt(t,n){let r=-1;return t.some((e,i)=>n(e)?(r=i,!0):!1),r}function mn(t,n){const r=[],e=t.container;if(!n.disableScrollLock){if(hn(e)){const s=Xt(w(e));r.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight=`${It(e)+s}px`;const a=w(e).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{r.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${It(l)+s}px`})}let o;if(e.parentNode instanceof DocumentFragment)o=w(e).body;else{const s=e.parentElement,a=ht(e);o=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:e}r.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}return()=>{r.forEach(({value:o,el:s,property:a})=>{o?s.style.setProperty(a,o):s.style.removeProperty(a)})}}function bn(t){const n=[];return[].forEach.call(t.children,r=>{r.getAttribute("aria-hidden")==="true"&&n.push(r)}),n}class gn{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(n,r){let e=this.modals.indexOf(n);if(e!==-1)return e;e=this.modals.length,this.modals.push(n),n.modalRef&&J(n.modalRef,!1);const i=bn(r);Mt(r,n.mount,n.modalRef,i,!0);const o=lt(this.containers,s=>s.container===r);return o!==-1?(this.containers[o].modals.push(n),e):(this.containers.push({modals:[n],container:r,restore:null,hiddenSiblings:i}),e)}mount(n,r){const e=lt(this.containers,o=>o.modals.indexOf(n)!==-1),i=this.containers[e];i.restore||(i.restore=mn(i,r))}remove(n,r=!0){const e=this.modals.indexOf(n);if(e===-1)return e;const i=lt(this.containers,s=>s.modals.indexOf(n)!==-1),o=this.containers[i];if(o.modals.splice(o.modals.indexOf(n),1),this.modals.splice(e,1),o.modals.length===0)o.restore&&o.restore(),n.modalRef&&J(n.modalRef,r),Mt(o.container,n.mount,n.modalRef,o.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=o.modals[o.modals.length-1];s.modalRef&&J(s.modalRef,!1)}return e}isTopModal(n){return this.modals.length>0&&this.modals[this.modals.length-1]===n}}function En(t){return typeof t=="function"?t():t}function yn(t){return t?t.props.hasOwnProperty("in"):!1}const Cn=new gn;function Rn(t){const{container:n,disableEscapeKeyDown:r=!1,disableScrollLock:e=!1,manager:i=Cn,closeAfterTransition:o=!1,onTransitionEnter:s,onTransitionExited:a,children:l,onClose:d,open:v,rootRef:h}=t,b=c.useRef({}),g=c.useRef(null),f=c.useRef(null),T=Q(f,h),[P,N]=c.useState(!v),S=yn(l);let u=!0;(t["aria-hidden"]==="false"||t["aria-hidden"]===!1)&&(u=!1);const C=()=>w(g.current),R=()=>(b.current.modalRef=f.current,b.current.mount=g.current,b.current),k=()=>{i.mount(R(),{disableScrollLock:e}),f.current&&(f.current.scrollTop=0)},E=Et(()=>{const x=En(n)||C().body;i.add(R(),x),f.current&&k()}),I=c.useCallback(()=>i.isTopModal(R()),[i]),z=Et(x=>{g.current=x,x&&(v&&I()?k():f.current&&J(f.current,u))}),M=c.useCallback(()=>{i.remove(R(),u)},[u,i]);c.useEffect(()=>()=>{M()},[M]),c.useEffect(()=>{v?E():(!S||!o)&&M()},[v,M,S,o,E]);const _=x=>y=>{var O;(O=x.onKeyDown)==null||O.call(x,y),!(y.key!=="Escape"||y.which===229||!I())&&(r||(y.stopPropagation(),d&&d(y,"escapeKeyDown")))},F=x=>y=>{var O;(O=x.onClick)==null||O.call(x,y),y.target===y.currentTarget&&d&&d(y,"backdropClick")};return{getRootProps:(x={})=>{const y=Ot(t);delete y.onTransitionEnter,delete y.onTransitionExited;const O=p({},y,x);return p({role:"presentation"},O,{onKeyDown:_(O),ref:T})},getBackdropProps:(x={})=>{const y=x;return p({"aria-hidden":!0},y,{onClick:F(y),open:v})},getTransitionProps:()=>{const x=()=>{N(!1),s&&s()},y=()=>{N(!0),a&&a(),o&&M()};return{onEnter:Rt(x,l==null?void 0:l.props.onEnter),onExited:Rt(y,l==null?void 0:l.props.onExited)}},rootRef:T,portalRef:z,isTopModal:I,exited:P,hasTransition:S}}const kn=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Tn(t){const n=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(n)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:n}function Sn(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const n=e=>t.ownerDocument.querySelector(`input[type="radio"]${e}`);let r=n(`[name="${t.name}"]:checked`);return r||(r=n(`[name="${t.name}"]`)),r!==t}function Pn(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||Sn(t))}function Nn(t){const n=[],r=[];return Array.from(t.querySelectorAll(kn)).forEach((e,i)=>{const o=Tn(e);o===-1||!Pn(e)||(o===0?n.push(e):r.push({documentOrder:i,tabIndex:o,node:e}))}),r.sort((e,i)=>e.tabIndex===i.tabIndex?e.documentOrder-i.documentOrder:e.tabIndex-i.tabIndex).map(e=>e.node).concat(n)}function In(){return!0}function Mn(t){const{children:n,disableAutoFocus:r=!1,disableEnforceFocus:e=!1,disableRestoreFocus:i=!1,getTabbable:o=Nn,isEnabled:s=In,open:a}=t,l=c.useRef(!1),d=c.useRef(null),v=c.useRef(null),h=c.useRef(null),b=c.useRef(null),g=c.useRef(!1),f=c.useRef(null),T=Q(n.ref,f),P=c.useRef(null);c.useEffect(()=>{!a||!f.current||(g.current=!r)},[r,a]),c.useEffect(()=>{if(!a||!f.current)return;const u=w(f.current);return f.current.contains(u.activeElement)||(f.current.hasAttribute("tabIndex")||f.current.setAttribute("tabIndex","-1"),g.current&&f.current.focus()),()=>{i||(h.current&&h.current.focus&&(l.current=!0,h.current.focus()),h.current=null)}},[a]),c.useEffect(()=>{if(!a||!f.current)return;const u=w(f.current),C=E=>{P.current=E,!(e||!s()||E.key!=="Tab")&&u.activeElement===f.current&&E.shiftKey&&(l.current=!0,v.current&&v.current.focus())},R=()=>{const E=f.current;if(E===null)return;if(!u.hasFocus()||!s()||l.current){l.current=!1;return}if(E.contains(u.activeElement)||e&&u.activeElement!==d.current&&u.activeElement!==v.current)return;if(u.activeElement!==b.current)b.current=null;else if(b.current!==null)return;if(!g.current)return;let I=[];if((u.activeElement===d.current||u.activeElement===v.current)&&(I=o(f.current)),I.length>0){var z,M;const _=!!((z=P.current)!=null&&z.shiftKey&&((M=P.current)==null?void 0:M.key)==="Tab"),F=I[0],L=I[I.length-1];typeof F!="string"&&typeof L!="string"&&(_?L.focus():F.focus())}else E.focus()};u.addEventListener("focusin",R),u.addEventListener("keydown",C,!0);const k=setInterval(()=>{u.activeElement&&u.activeElement.tagName==="BODY"&&R()},50);return()=>{clearInterval(k),u.removeEventListener("focusin",R),u.removeEventListener("keydown",C,!0)}},[r,e,i,s,a,o]);const N=u=>{h.current===null&&(h.current=u.relatedTarget),g.current=!0,b.current=u.target;const C=n.props.onFocus;C&&C(u)},S=u=>{h.current===null&&(h.current=u.relatedTarget),g.current=!0};return vt(c.Fragment,{children:[B("div",{tabIndex:a?0:-1,onFocus:S,ref:d,"data-testid":"sentinelStart"}),c.cloneElement(n,{ref:T,onFocus:N}),B("div",{tabIndex:a?0:-1,onFocus:S,ref:v,"data-testid":"sentinelEnd"})]})}function $n(t){return typeof t=="function"?t():t}const Bn=c.forwardRef(function(n,r){const{children:e,container:i,disablePortal:o=!1}=n,[s,a]=c.useState(null),l=Q(c.isValidElement(e)?e.ref:null,r);if(yt(()=>{o||a($n(i)||document.body)},[i,o]),yt(()=>{if(s&&!o)return Ct(r,s),()=>{Ct(r,null)}},[r,s,o]),o){if(c.isValidElement(e)){const d={ref:l};return c.cloneElement(e,d)}return B(c.Fragment,{children:e})}return B(c.Fragment,{children:s&&Vt.createPortal(e,s)})}),zn=t=>t.scrollTop;function $t(t,n){var r,e;const{timeout:i,easing:o,style:s={}}=t;return{duration:(r=s.transitionDuration)!=null?r:typeof i=="number"?i:i[n.mode]||0,easing:(e=s.transitionTimingFunction)!=null?e:typeof o=="object"?o[n.mode]:o,delay:s.transitionDelay}}const On=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Dn={entering:{opacity:1},entered:{opacity:1}},Fn=c.forwardRef(function(n,r){const e=Gt(),i={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:o,appear:s=!0,children:a,easing:l,in:d,onEnter:v,onEntered:h,onEntering:b,onExit:g,onExited:f,onExiting:T,style:P,timeout:N=i,TransitionComponent:S=qt}=n,u=X(n,On),C=c.useRef(null),R=Q(C,a.ref,r),k=m=>$=>{if(m){const x=C.current;$===void 0?m(x):m(x,$)}},E=k(b),I=k((m,$)=>{zn(m);const x=$t({style:P,timeout:N,easing:l},{mode:"enter"});m.style.webkitTransition=e.transitions.create("opacity",x),m.style.transition=e.transitions.create("opacity",x),v&&v(m,$)}),z=k(h),M=k(T),_=k(m=>{const $=$t({style:P,timeout:N,easing:l},{mode:"exit"});m.style.webkitTransition=e.transitions.create("opacity",$),m.style.transition=e.transitions.create("opacity",$),g&&g(m)}),F=k(f);return B(S,p({appear:s,in:d,nodeRef:C,onEnter:I,onEntered:z,onEntering:E,onExit:_,onExited:F,onExiting:M,addEndListener:m=>{o&&o(C.current,m)},timeout:N},u,{children:(m,$)=>c.cloneElement(a,p({style:p({opacity:0,visibility:m==="exited"&&!d?"hidden":void 0},Dn[m],P,a.props.style),ref:R},$))}))}),Ln=Fn;function An(t){return pt("MuiBackdrop",t)}ut("MuiBackdrop",["root","invisible"]);const _n=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],wn=t=>{const{classes:n,invisible:r}=t;return ft({root:["root",r&&"invisible"]},An,n)},Wn=Y("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.root,r.invisible&&n.invisible]}})(({ownerState:t})=>p({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},t.invisible&&{backgroundColor:"transparent"})),Un=c.forwardRef(function(n,r){var e,i,o;const s=dt({props:n,name:"MuiBackdrop"}),{children:a,className:l,component:d="div",components:v={},componentsProps:h={},invisible:b=!1,open:g,slotProps:f={},slots:T={},TransitionComponent:P=Ln,transitionDuration:N}=s,S=X(s,_n),u=p({},s,{component:d,invisible:b}),C=wn(u),R=(e=f.root)!=null?e:h.root;return B(P,p({in:g,timeout:N},S,{children:B(Wn,p({"aria-hidden":!0},R,{as:(i=(o=T.root)!=null?o:v.Root)!=null?i:d,className:H(C.root,l,R==null?void 0:R.className),ownerState:p({},u,R==null?void 0:R.ownerState),classes:C,ref:r,children:a}))}))}),Hn=Un;function Gn(t){return pt("MuiModal",t)}ut("MuiModal",["root","hidden","backdrop"]);const Kn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Vn=t=>{const{open:n,exited:r,classes:e}=t;return ft({root:["root",!n&&r&&"hidden"],backdrop:["backdrop"]},Gn,e)},jn=Y("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.root,!r.open&&r.exited&&n.hidden]}})(({theme:t,ownerState:n})=>p({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0},!n.open&&n.exited&&{visibility:"hidden"})),Xn=Y(Hn,{name:"MuiModal",slot:"Backdrop",overridesResolver:(t,n)=>n.backdrop})({zIndex:-1}),Yn=c.forwardRef(function(n,r){var e,i,o,s,a,l;const d=dt({name:"MuiModal",props:n}),{BackdropComponent:v=Xn,BackdropProps:h,className:b,closeAfterTransition:g=!1,children:f,container:T,component:P,components:N={},componentsProps:S={},disableAutoFocus:u=!1,disableEnforceFocus:C=!1,disableEscapeKeyDown:R=!1,disablePortal:k=!1,disableRestoreFocus:E=!1,disableScrollLock:I=!1,hideBackdrop:z=!1,keepMounted:M=!1,onBackdropClick:_,open:F,slotProps:L,slots:m}=d,$=X(d,Kn),x=p({},d,{closeAfterTransition:g,disableAutoFocus:u,disableEnforceFocus:C,disableEscapeKeyDown:R,disablePortal:k,disableRestoreFocus:E,disableScrollLock:I,hideBackdrop:z,keepMounted:M}),{getRootProps:y,getBackdropProps:O,getTransitionProps:Dt,portalRef:Ft,isTopModal:Lt,exited:xt,hasTransition:mt}=Rn(p({},x,{rootRef:r})),q=p({},x,{exited:xt}),G=Vn(q),tt={};if(f.props.tabIndex===void 0&&(tt.tabIndex="-1"),mt){const{onEnter:K,onExited:nt}=Dt();tt.onEnter=K,tt.onExited=nt}const bt=(e=(i=m==null?void 0:m.root)!=null?i:N.Root)!=null?e:jn,gt=(o=(s=m==null?void 0:m.backdrop)!=null?s:N.Backdrop)!=null?o:v,st=(a=L==null?void 0:L.root)!=null?a:S.root,at=(l=L==null?void 0:L.backdrop)!=null?l:S.backdrop,At=Nt({elementType:bt,externalSlotProps:st,externalForwardedProps:$,getSlotProps:y,additionalProps:{ref:r,as:P},ownerState:q,className:H(b,st==null?void 0:st.className,G==null?void 0:G.root,!q.open&&q.exited&&(G==null?void 0:G.hidden))}),_t=Nt({elementType:gt,externalSlotProps:at,additionalProps:h,getSlotProps:K=>O(p({},K,{onClick:nt=>{_&&_(nt),K!=null&&K.onClick&&K.onClick(nt)}})),className:H(at==null?void 0:at.className,h==null?void 0:h.className,G==null?void 0:G.backdrop),ownerState:q});return!M&&!F&&(!mt||xt)?null:B(Bn,{ref:Ft,container:T,disablePortal:k,children:vt(bt,p({},At,{children:[!z&&v?B(gt,p({},_t)):null,B(Mn,{disableEnforceFocus:C,disableAutoFocus:u,disableRestoreFocus:E,isEnabled:Lt,open:F,children:c.cloneElement(f,tt)})]}))})}),le=Yn;export{Hn as B,Ln as F,le as M,qt as T,ae as a,Xt as b,w as c,Nt as d,$t as g,dn as i,ht as o,zn as r,se as u};
