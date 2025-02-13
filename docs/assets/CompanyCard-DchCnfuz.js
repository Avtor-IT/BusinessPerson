import{g as H,d as O,s as E,b as x,P as $,r as f,u as I,_ as R,j as t,e as G,f as A,Q as ce,E as L,S as j,T as b,O as le,B as Z,l as ue,J as de,L as D,R as z,A as F}from"./index-CF0m55Cn.js";import{a as pe,g as fe,d as T,o as S,l as he,e as N,u as ve,f as xe,G as ge,C as K,h as Ce,i as me,T as ke,n as je}from"./useCompanies-Cd-24Vuk.js";const _=e=>{let n;return e<1?n=5.11916*e**2:n=4.5*Math.log(e+1)+2,(n/100).toFixed(2)};function be(e){return O("MuiPaper",e)}H("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const ye=["className","component","elevation","square","variant"],we=e=>{const{square:n,elevation:o,variant:r,classes:i}=e,s={root:["root",r,!n&&"rounded",r==="elevation"&&`elevation${o}`]};return A(s,be,i)},Ee=E("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[o.variant],!o.square&&n.rounded,o.variant==="elevation"&&n[`elevation${o.elevation}`]]}})(({theme:e,ownerState:n})=>{var o;return x({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!n.square&&{borderRadius:e.shape.borderRadius},n.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},n.variant==="elevation"&&x({boxShadow:(e.vars||e).shadows[n.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${$("#fff",_(n.elevation))}, ${$("#fff",_(n.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[n.elevation]}))}),Re=f.forwardRef(function(n,o){const r=I({props:n,name:"MuiPaper"}),{className:i,component:s="div",elevation:c=1,square:u=!1,variant:p="elevation"}=r,C=R(r,ye),h=x({},r,{component:s,elevation:c,square:u,variant:p}),v=we(h);return t.jsx(Ee,x({as:s,ownerState:h,className:G(v.root,i),ref:o},C))});function W(e){return e.substring(2).toLowerCase()}function Le(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function Me(e){const{children:n,disableReactTree:o=!1,mouseEvent:r="onClick",onClickAway:i,touchEvent:s="onTouchEnd"}=e,c=f.useRef(!1),u=f.useRef(null),p=f.useRef(!1),C=f.useRef(!1);f.useEffect(()=>(setTimeout(()=>{p.current=!0},0),()=>{p.current=!1}),[]);const h=pe(fe(n),u),v=T(d=>{const g=C.current;C.current=!1;const k=S(u.current);if(!p.current||!u.current||"clientX"in d&&Le(d,k))return;if(c.current){c.current=!1;return}let a;d.composedPath?a=d.composedPath().indexOf(u.current)>-1:a=!k.documentElement.contains(d.target)||u.current.contains(d.target),!a&&(o||!g)&&i(d)}),w=d=>g=>{C.current=!0;const k=n.props[d];k&&k(g)},y={ref:h};return s!==!1&&(y[s]=w(s)),f.useEffect(()=>{if(s!==!1){const d=W(s),g=S(u.current),k=()=>{c.current=!0};return g.addEventListener(d,v),g.addEventListener("touchmove",k),()=>{g.removeEventListener(d,v),g.removeEventListener("touchmove",k)}}},[v,s]),r!==!1&&(y[r]=w(r)),f.useEffect(()=>{if(r!==!1){const d=W(r),g=S(u.current);return g.addEventListener(d,v),()=>{g.removeEventListener(d,v)}}},[v,r]),t.jsx(f.Fragment,{children:f.cloneElement(n,y)})}function Pe(e={}){const{autoHideDuration:n=null,disableWindowBlurListener:o=!1,onClose:r,open:i,resumeHideDuration:s}=e,c=he();f.useEffect(()=>{if(!i)return;function a(l){l.defaultPrevented||(l.key==="Escape"||l.key==="Esc")&&(r==null||r(l,"escapeKeyDown"))}return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[i,r]);const u=T((a,l)=>{r==null||r(a,l)}),p=T(a=>{!r||a==null||c.start(a,()=>{u(null,"timeout")})});f.useEffect(()=>(i&&p(n),c.clear),[i,n,p,c]);const C=a=>{r==null||r(a,"clickaway")},h=c.clear,v=f.useCallback(()=>{n!=null&&p(s??n*.5)},[n,s,p]),w=a=>l=>{const m=a.onBlur;m==null||m(l),v()},y=a=>l=>{const m=a.onFocus;m==null||m(l),h()},d=a=>l=>{const m=a.onMouseEnter;m==null||m(l),h()},g=a=>l=>{const m=a.onMouseLeave;m==null||m(l),v()};return f.useEffect(()=>{if(!o&&i)return window.addEventListener("focus",v),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",h)}},[o,i,v,h]),{getRootProps:(a={})=>{const l=x({},N(e),N(a));return x({role:"presentation"},a,l,{onBlur:w(l),onFocus:y(l),onMouseEnter:d(l),onMouseLeave:g(l)})},onClickAway:C}}function Se(e){return O("MuiSnackbarContent",e)}H("MuiSnackbarContent",["root","message","action"]);const Te=["action","className","message","role"],He=e=>{const{classes:n}=e;return A({root:["root"],action:["action"],message:["message"]},Se,n)},Oe=E(Re,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,o=ce(e.palette.background.default,n);return x({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(o),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),Ie=E("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),Ae=E("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Be=f.forwardRef(function(n,o){const r=I({props:n,name:"MuiSnackbarContent"}),{action:i,className:s,message:c,role:u="alert"}=r,p=R(r,Te),C=r,h=He(C);return t.jsxs(Oe,x({role:u,square:!0,elevation:6,className:G(h.root,s),ownerState:C,ref:o},p,{children:[t.jsx(Ie,{className:h.message,ownerState:C,children:c}),i?t.jsx(Ae,{className:h.action,ownerState:C,children:i}):null]}))});function Ve(e){return O("MuiSnackbar",e)}H("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const $e=["onEnter","onExited"],De=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],ze=e=>{const{classes:n,anchorOrigin:o}=e,r={root:["root",`anchorOrigin${L(o.vertical)}${L(o.horizontal)}`]};return A(r,Ve,n)},U=E("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`anchorOrigin${L(o.anchorOrigin.vertical)}${L(o.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const o={left:"50%",right:"auto",transform:"translateX(-50%)"};return x({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:x({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&o,n.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},n.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Fe=f.forwardRef(function(n,o){const r=I({props:n,name:"MuiSnackbar"}),i=ve(),s={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:c,anchorOrigin:{vertical:u,horizontal:p}={vertical:"bottom",horizontal:"left"},autoHideDuration:C=null,children:h,className:v,ClickAwayListenerProps:w,ContentProps:y,disableWindowBlurListener:d=!1,message:g,open:k,TransitionComponent:a=ge,transitionDuration:l=s,TransitionProps:{onEnter:m,onExited:B}={}}=r,J=R(r.TransitionProps,$e),Q=R(r,De),M=x({},r,{anchorOrigin:{vertical:u,horizontal:p},autoHideDuration:C,disableWindowBlurListener:d,TransitionComponent:a,transitionDuration:l}),ee=ze(M),{getRootProps:ne,onClickAway:te}=Pe(x({},M)),[oe,V]=f.useState(!0),re=xe({elementType:U,getSlotProps:ne,externalForwardedProps:Q,ownerState:M,additionalProps:{ref:o},className:[ee.root,v]}),se=P=>{V(!0),B&&B(P)},ae=(P,ie)=>{V(!1),m&&m(P,ie)};return!k&&oe?null:t.jsx(Me,x({onClickAway:te},w,{children:t.jsx(U,x({},re,{children:t.jsx(a,x({appear:!0,in:k,timeout:l,direction:u==="top"?"down":"up",onEnter:ae,onExited:se},J,{children:h||t.jsx(Be,x({message:g,action:c},y))}))}))}))}),Ne=({text:e})=>t.jsx(K,{style:{height:"100%",padding:"24px"},children:t.jsx(j,{alignItems:"center",height:"100%",justifyContent:"center",children:t.jsx(b,{variant:"M24",children:e||"Ошибка"})})}),X=({children:e,textToCopy:n,snackabarProps:o,...r})=>{const[i,s]=le.useState(!1),c=()=>{n&&navigator.clipboard.writeText(n).then(()=>{s(!0)})},u=p=>{p!=="clickaway"&&s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(Z,{variant:"unStyled",onClick:c,...r,children:e}),t.jsx(Fe,{open:i,autoHideDuration:3e3,onClose:u,message:"Текст скопирован",...o})]})},Y=({width:e,height:n,color:o,status:r,theme:i,...s})=>{const c=i==="dark"?{defaultStroke:"white",hover:"white",active:"white"}:{defaultStroke:"#3D3F4C",hover:"#3D3F4C",active:"#3D3F4C"},u=p=>{switch(p){case"hover":return t.jsxs(t.Fragment,{children:[t.jsx("path",{opacity:"0.4",d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z",fill:o||c.hover,stroke:"none"}),t.jsx("path",{d:"M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z",fill:o||c.hover,stroke:"none"})]});case"active":return t.jsx("path",{d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z",fill:o||c.active,stroke:"none"});default:return t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8 12H16",stroke:o||c.defaultStroke,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 16V8",stroke:o||c.defaultStroke,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",stroke:o||c.defaultStroke,strokeLinecap:"round",strokeLinejoin:"round"})]})}};return t.jsx("svg",{width:e||"24",height:n||"24",fill:"none",viewBox:"0 0 24 24",...s,children:u(r)})},q=({children:e,startIcon:n,endIcon:o=t.jsx(Y,{}),...r})=>t.jsxs(Z,{variant:"unStyled",...r,children:[n,e,o]}),_e=({...e})=>t.jsx(X,{textToCopy:"0276142588",children:t.jsxs(j,{direction:"row",gap:1,alignItems:"center",color:"var(--tertiary)",...e,children:[t.jsx(b,{variant:"R20",children:"ИНН:"}),t.jsx(b,{variant:"R16",children:"0276142588"})]})}),We=({...e})=>t.jsx(X,{textToCopy:"12345678",children:t.jsxs(j,{direction:"row",gap:1,alignItems:"center",color:"var(--tertiary)",...e,children:[t.jsx(b,{variant:"R20",children:"КПП:"}),t.jsx(b,{variant:"R16",children:"12345678"})]})}),Ue=({width:e,height:n,stroke:o,strokeWidth:r,...i})=>t.jsx("svg",{width:e||"24",height:n||"24",viewBox:"0 0 24 24",...i,fill:"none",children:t.jsx("path",{d:"M22.7 13.5L20.7005 11.5L18.7 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.3019 3 18.1885 4.77814 19.7545 7.42909M12 7V12L15 14",stroke:o||"white",strokeWidth:r||"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),qe=()=>t.jsx(K,{sx:{padding:"16px !important",minWidth:"244px"},children:t.jsxs(j,{justifyContent:"space-between",alignItems:"stretch",height:"100%",children:[t.jsxs(j,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[t.jsx(b,{variant:"M20",children:"Баланс"}),t.jsx(q,{icon:t.jsx(Y,{})})]}),t.jsxs(j,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[t.jsx(q,{icon:t.jsx(Ue,{stroke:"var(--secondary)"})}),t.jsx(b,{variant:"R20",children:"7 112 002 ₽"})]})]})}),Ge=({title:e})=>e?e.length<15?{title:e}:t.jsx(Ce,{title:e,placement:"top-start",children:t.jsx(ue,{children:e.slice(0,15)+"..."})}):(console.error("Company title is not defined"),null),Xe=({documents:e=!0,...n})=>{const{data:o,isError:r,isLoading:i}=me(),s=f.useMemo(()=>{if(o)return o[0]},[o]);return r?t.jsx(Ne,{text:"Ошибка при загрузке компании"}):i?t.jsx(de,{variant:"rectangular",...n,sx:{borderRadius:"16px",minHeight:"192px"}}):t.jsx(ke,{sx:{paddingTop:"24px !important"},title:t.jsx(D,{style:{zIndex:1},to:z[F.COMPANY],children:t.jsx(Ge,{title:s==null?void 0:s.TITLE})}),...n,children:t.jsxs(j,{height:"100%",direction:"row",alignItems:"stretch",justifyContent:"space-between",children:[t.jsx(j,{flexGrow:1,justifyContent:"space-between",children:e?t.jsxs(j,{flexGrow:1,justifyContent:"end",children:[t.jsx(je,{style:{left:-238,top:112},sx:{background:"linear-gradient(157deg, rgba(81,73,150,1) 0%, rgba(255,255,255,1) 100%) !important"}}),t.jsx(b,{variant:"R20",style:{zIndex:"1",color:"#fff"},children:t.jsx(D,{to:`${z[F.COMPANY]}/${s==null?void 0:s.TITLE}/documents`,state:{company:s},children:"Мои документы"})})]}):t.jsxs(j,{gap:"4px",justifyContent:"end",flexGrow:1,children:[t.jsx(_e,{}),t.jsx(We,{})]})}),t.jsx(qe,{})]})})};export{Y as A,X as C,Ne as E,Xe as a};
