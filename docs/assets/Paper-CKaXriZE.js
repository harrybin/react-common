import{_ as $}from"./extends-ChRHEBve.js";import{_ as H,a as ne,b as pe}from"./useThemeProps-D1TEAO31.js";import{r as l,R as q}from"./index-CBqU2yxZ.js";import{c as g,a as oe,s as G,g as Re,b as Me}from"./styled-D4v9Xkq8.js";import{j as S,a as Oe}from"./jsx-runtime-2xDJh5tt.js";import{k as ie}from"./emotion-react.browser.esm-DmQE6hI-.js";import{b as Ae,a as de,u as Ke}from"./useIsFocusVisible-CgFDEMiT.js";import{_ as qe,a as Xe}from"./inheritsLoose-SLCf_n8R.js";const Ye=typeof window<"u"?l.useLayoutEffect:l.useEffect;function W(e){const t=l.useRef(e);return Ye(()=>{t.current=e}),l.useRef((...n)=>(0,t.current)(...n)).current}const fe=q.createContext(null);function re(e,t){var n=function(o){return t&&l.isValidElement(o)?t(o):o},s=Object.create(null);return e&&l.Children.map(e,function(i){return i}).forEach(function(i){s[i.key]=n(i)}),s}function We(e,t){e=e||{},t=t||{};function n(f){return f in t?t[f]:e[f]}var s=Object.create(null),i=[];for(var o in e)o in t?i.length&&(s[o]=i,i=[]):i.push(o);var r,c={};for(var u in t){if(s[u])for(r=0;r<s[u].length;r++){var p=s[u][r];c[s[u][r]]=n(p)}c[u]=n(u)}for(r=0;r<i.length;r++)c[i[r]]=n(i[r]);return c}function F(e,t,n){return n[t]!=null?n[t]:e.props[t]}function He(e,t){return re(e.children,function(n){return l.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:F(n,"appear",e),enter:F(n,"enter",e),exit:F(n,"exit",e)})})}function Ge(e,t,n){var s=re(e.children),i=We(t,s);return Object.keys(i).forEach(function(o){var r=i[o];if(l.isValidElement(r)){var c=o in t,u=o in s,p=t[o],f=l.isValidElement(p)&&!p.props.in;u&&(!c||f)?i[o]=l.cloneElement(r,{onExited:n.bind(null,r),in:!0,exit:F(r,"exit",e),enter:F(r,"enter",e)}):!u&&c&&!f?i[o]=l.cloneElement(r,{in:!1}):u&&c&&l.isValidElement(p)&&(i[o]=l.cloneElement(r,{onExited:n.bind(null,r),in:p.props.in,exit:F(r,"exit",e),enter:F(r,"enter",e)}))}}),i}var Je=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Qe={component:"div",childFactory:function(t){return t}},ae=function(e){qe(t,e);function t(s,i){var o;o=e.call(this,s,i)||this;var r=o.handleExited.bind(Xe(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,o){var r=o.children,c=o.handleExited,u=o.firstRender;return{children:u?He(i,c):Ge(i,r,c),firstRender:!1}},n.handleExited=function(i,o){var r=re(this.props.children);i.key in r||(i.props.onExited&&i.props.onExited(o),this.mounted&&this.setState(function(c){var u=$({},c.children);return delete u[i.key],{children:u}}))},n.render=function(){var i=this.props,o=i.component,r=i.childFactory,c=H(i,["component","childFactory"]),u=this.state.contextValue,p=Je(this.state.children).map(r);return delete c.appear,delete c.enter,delete c.exit,o===null?q.createElement(fe.Provider,{value:u},p):q.createElement(fe.Provider,{value:u},q.createElement(o,c,p))},t}(q.Component);ae.propTypes={};ae.defaultProps=Qe;const Ze=ae;function et(e){const{className:t,classes:n,pulsate:s=!1,rippleX:i,rippleY:o,rippleSize:r,in:c,onExited:u,timeout:p}=e,[f,m]=l.useState(!1),b=g(t,n.ripple,n.rippleVisible,s&&n.ripplePulsate),T={width:r,height:r,top:-(r/2)+o,left:-(r/2)+i},h=g(n.child,f&&n.childLeaving,s&&n.childPulsate);return!c&&!f&&m(!0),l.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),S("span",{className:b,style:T,children:S("span",{className:h})})}const v=oe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),tt=["center","classes","className"];let J=e=>e,he,me,ve,be;const te=550,nt=80,ot=ie(he||(he=J`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),it=ie(me||(me=J`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),rt=ie(ve||(ve=J`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),at=G("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),st=G(et,{name:"MuiTouchRipple",slot:"Ripple"})(be||(be=J`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),v.rippleVisible,ot,te,({theme:e})=>e.transitions.easing.easeInOut,v.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,v.child,v.childLeaving,it,te,({theme:e})=>e.transitions.easing.easeInOut,v.childPulsate,rt,({theme:e})=>e.transitions.easing.easeInOut),lt=l.forwardRef(function(t,n){const s=ne({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:r}=s,c=H(s,tt),[u,p]=l.useState([]),f=l.useRef(0),m=l.useRef(null);l.useEffect(()=>{m.current&&(m.current(),m.current=null)},[u]);const b=l.useRef(!1),T=Ae(),h=l.useRef(null),R=l.useRef(null),j=l.useCallback(d=>{const{pulsate:M,rippleX:y,rippleY:L,rippleSize:_,cb:O}=d;p(x=>[...x,S(st,{classes:{ripple:g(o.ripple,v.ripple),rippleVisible:g(o.rippleVisible,v.rippleVisible),ripplePulsate:g(o.ripplePulsate,v.ripplePulsate),child:g(o.child,v.child),childLeaving:g(o.childLeaving,v.childLeaving),childPulsate:g(o.childPulsate,v.childPulsate)},timeout:te,pulsate:M,rippleX:y,rippleY:L,rippleSize:_},f.current)]),f.current+=1,m.current=O},[o]),I=l.useCallback((d={},M={},y=()=>{})=>{const{pulsate:L=!1,center:_=i||M.pulsate,fakeElement:O=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const x=O?null:R.current,B=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let E,k,D;if(_||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)E=Math.round(B.width/2),k=Math.round(B.height/2);else{const{clientX:w,clientY:P}=d.touches&&d.touches.length>0?d.touches[0]:d;E=Math.round(w-B.left),k=Math.round(P-B.top)}if(_)D=Math.sqrt((2*B.width**2+B.height**2)/3),D%2===0&&(D+=1);else{const w=Math.max(Math.abs((x?x.clientWidth:0)-E),E)*2+2,P=Math.max(Math.abs((x?x.clientHeight:0)-k),k)*2+2;D=Math.sqrt(w**2+P**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{j({pulsate:L,rippleX:E,rippleY:k,rippleSize:D,cb:y})},T.start(nt,()=>{h.current&&(h.current(),h.current=null)})):j({pulsate:L,rippleX:E,rippleY:k,rippleSize:D,cb:y})},[i,j,T]),z=l.useCallback(()=>{I({},{pulsate:!0})},[I]),U=l.useCallback((d,M)=>{if(T.clear(),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,T.start(0,()=>{U(d,M)});return}h.current=null,p(y=>y.length>0?y.slice(1):y),m.current=M},[T]);return l.useImperativeHandle(n,()=>({pulsate:z,start:I,stop:U}),[z,I,U]),S(at,$({className:g(v.root,o.root,r),ref:R},c,{children:S(Ze,{component:null,exit:!0,children:u})}))}),ut=lt;function ct(e){return Re("MuiButtonBase",e)}const pt=oe("MuiButtonBase",["root","disabled","focusVisible"]),dt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ft=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:s,classes:i}=e,r=Me({root:["root",t&&"disabled",n&&"focusVisible"]},ct,i);return n&&s&&(r.root+=` ${s}`),r},ht=G("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=l.forwardRef(function(t,n){const s=ne({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:r,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:m=!1,focusRipple:b=!1,LinkComponent:T="a",onBlur:h,onClick:R,onContextMenu:j,onDragLeave:I,onFocus:z,onFocusVisible:U,onKeyDown:d,onKeyUp:M,onMouseDown:y,onMouseLeave:L,onMouseUp:_,onTouchEnd:O,onTouchMove:x,onTouchStart:B,tabIndex:E=0,TouchRippleProps:k,touchRippleRef:D,type:w}=s,P=H(s,dt),A=l.useRef(null),C=l.useRef(null),ye=de(C,D),{isFocusVisibleRef:se,onFocus:xe,onBlur:Ce,ref:Te}=Ke(),[N,X]=l.useState(!1);p&&N&&X(!1),l.useImperativeHandle(i,()=>({focusVisible:()=>{X(!0),A.current.focus()}}),[]);const[Q,Ee]=l.useState(!1);l.useEffect(()=>{Ee(!0)},[]);const Pe=Q&&!f&&!p;l.useEffect(()=>{N&&b&&!f&&Q&&C.current.pulsate()},[f,b,N,Q]);function V(a,ue,ze=m){return W(ce=>(ue&&ue(ce),!ze&&C.current&&C.current[a](ce),!0))}const Ve=V("start",y),$e=V("stop",j),Be=V("stop",I),ke=V("stop",_),De=V("stop",a=>{N&&a.preventDefault(),L&&L(a)}),Le=V("start",B),we=V("stop",O),Ne=V("stop",x),Fe=V("stop",a=>{Ce(a),se.current===!1&&X(!1),h&&h(a)},!1),Se=W(a=>{A.current||(A.current=a.currentTarget),xe(a),se.current===!0&&(X(!0),U&&U(a)),z&&z(a)}),Z=()=>{const a=A.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},ee=l.useRef(!1),Ie=W(a=>{b&&!ee.current&&N&&C.current&&a.key===" "&&(ee.current=!0,C.current.stop(a,()=>{C.current.start(a)})),a.target===a.currentTarget&&Z()&&a.key===" "&&a.preventDefault(),d&&d(a),a.target===a.currentTarget&&Z()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),Ue=W(a=>{b&&a.key===" "&&C.current&&N&&!a.defaultPrevented&&(ee.current=!1,C.current.stop(a,()=>{C.current.pulsate(a)})),M&&M(a),R&&a.target===a.currentTarget&&Z()&&a.key===" "&&!a.defaultPrevented&&R(a)});let Y=u;Y==="button"&&(P.href||P.to)&&(Y=T);const K={};Y==="button"?(K.type=w===void 0?"button":w,K.disabled=p):(!P.href&&!P.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const _e=de(n,Te,A),le=$({},s,{centerRipple:o,component:u,disabled:p,disableRipple:f,disableTouchRipple:m,focusRipple:b,tabIndex:E,focusVisible:N}),je=ft(le);return Oe(ht,$({as:Y,className:g(je.root,c),ownerState:le,onBlur:Fe,onClick:R,onContextMenu:$e,onFocus:Se,onKeyDown:Ie,onKeyUp:Ue,onMouseDown:Ve,onMouseLeave:De,onMouseUp:ke,onDragLeave:Be,onTouchEnd:we,onTouchMove:Ne,onTouchStart:Le,ref:_e,tabIndex:p?-1:E,type:w},K,P,{children:[r,Pe?S(ut,$({ref:ye,center:o},k)):null]}))}),kt=mt,ge=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function vt(e){return Re("MuiPaper",e)}oe("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const bt=["className","component","elevation","square","variant"],gt=e=>{const{square:t,elevation:n,variant:s,classes:i}=e,o={root:["root",s,!t&&"rounded",s==="elevation"&&`elevation${n}`]};return Me(o,vt,i)},Rt=G("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return $({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&$({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${pe("#fff",ge(t.elevation))}, ${pe("#fff",ge(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Mt=l.forwardRef(function(t,n){const s=ne({props:t,name:"MuiPaper"}),{className:i,component:o="div",elevation:r=1,square:c=!1,variant:u="elevation"}=s,p=H(s,bt),f=$({},s,{component:o,elevation:r,square:c,variant:u}),m=gt(f);return S(Rt,$({as:o,ownerState:f,className:g(m.root,i),ref:n},p))}),Dt=Mt;export{kt as B,Dt as P,fe as T,Ye as a,W as u};
