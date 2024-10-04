var j=e=>{throw TypeError(e)};var M=(e,s,t)=>s.has(e)||j("Cannot "+t);var i=(e,s,t)=>(M(e,s,"read from private field"),t?t.call(e):s.get(e)),v=(e,s,t)=>s.has(e)?j("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),x=(e,s,t,r)=>(M(e,s,"write to private field"),r?r.call(e,t):s.set(e,t),t),y=(e,s,t)=>(M(e,s,"access private method"),t);import{I as R,J as K,K as C,M as N,N as U,O as F,r as d,P as q,Q as I,U as T,V as _,W as k,X as A,Y as D,Z as z,j as u}from"./index-CKaufg0w.js";var b,f,o,l,p,w,O,P,J=(P=class extends R{constructor(s,t){super();v(this,p);v(this,b);v(this,f);v(this,o);v(this,l);x(this,b,s),this.setOptions(t),this.bindMethods(),y(this,p,w).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(s){var r;const t=this.options;this.options=i(this,b).defaultMutationOptions(s),K(this.options,t)||i(this,b).getMutationCache().notify({type:"observerOptionsUpdated",mutation:i(this,o),observer:this}),t!=null&&t.mutationKey&&this.options.mutationKey&&C(t.mutationKey)!==C(this.options.mutationKey)?this.reset():((r=i(this,o))==null?void 0:r.state.status)==="pending"&&i(this,o).setOptions(this.options)}onUnsubscribe(){var s;this.hasListeners()||(s=i(this,o))==null||s.removeObserver(this)}onMutationUpdate(s){y(this,p,w).call(this),y(this,p,O).call(this,s)}getCurrentResult(){return i(this,f)}reset(){var s;(s=i(this,o))==null||s.removeObserver(this),x(this,o,void 0),y(this,p,w).call(this),y(this,p,O).call(this)}mutate(s,t){var r;return x(this,l,t),(r=i(this,o))==null||r.removeObserver(this),x(this,o,i(this,b).getMutationCache().build(i(this,b),this.options)),i(this,o).addObserver(this),i(this,o).execute(s)}},b=new WeakMap,f=new WeakMap,o=new WeakMap,l=new WeakMap,p=new WeakSet,w=function(){var t;const s=((t=i(this,o))==null?void 0:t.state)??N();x(this,f,{...s,isPending:s.status==="pending",isSuccess:s.status==="success",isError:s.status==="error",isIdle:s.status==="idle",mutate:this.mutate,reset:this.reset})},O=function(s){U.batch(()=>{var t,r,a,g,h,n,E,c;if(i(this,l)&&this.hasListeners()){const m=i(this,f).variables,S=i(this,f).context;(s==null?void 0:s.type)==="success"?((r=(t=i(this,l)).onSuccess)==null||r.call(t,s.data,m,S),(g=(a=i(this,l)).onSettled)==null||g.call(a,s.data,null,m,S)):(s==null?void 0:s.type)==="error"&&((n=(h=i(this,l)).onError)==null||n.call(h,s.error,m,S),(c=(E=i(this,l)).onSettled)==null||c.call(E,void 0,s.error,m,S))}this.listeners.forEach(m=>{m(i(this,f))})})},P);function Q(e,s){const t=F(),[r]=d.useState(()=>new J(t,e));d.useEffect(()=>{r.setOptions(e)},[r,e]);const a=d.useSyncExternalStore(d.useCallback(h=>r.subscribe(U.batchCalls(h)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),g=d.useCallback((h,n)=>{r.mutate(h,n).catch(q)},[r]);if(a.error&&I(r.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:g,mutateAsync:a.mutate}}const W="_loginForm_17urm_1",L={loginForm:W},$=async e=>{const s=new k;try{const t=await s.Post(`${T}${_.JWT_CREATE}`,e);if(t&&t.access)return sessionStorage.setItem("access",t.access),sessionStorage.setItem("refresh",t.refresh),t.access}catch(t){throw console.error("Login failed:",t),t.response.status===401?Error("Unauthorized"):Error(t.response.status)}},V=()=>{const e=A();return Q({mutationFn:async s=>await $(s),onSuccess:s=>{e(D(s))}})},Z=()=>{const[e,s]=d.useState(""),[t,r]=d.useState(""),[a,g]=d.useState(""),h=z(),n=V(),E=c=>{if(c&&c.preventDefault(),!e||!t){g("Введите имя и пароль");return}const m={username:e,password:t};n.mutate(m)};return d.useEffect(()=>{if(n.error){n.error.message==="Unauthorized"?g("Пользователь не найден"):(console.log(n.error),g("Ошибка при входе в аккаунт. Повторите попытку позже."));return}n.data&&h("/",{replace:!0})},[n,h]),u.jsxs("div",{className:L.LoginPage,children:[u.jsx("h1",{children:"Login page"}),u.jsxs("form",{className:L.loginForm,onSubmit:E,children:[u.jsxs("label",{children:["Login:"," ",u.jsx("input",{type:"text",placeholder:"enter login",onChange:c=>s(c.target.value),disabled:n.isPending,required:!0})]}),u.jsx("br",{}),u.jsxs("label",{children:["Password:"," ",u.jsx("input",{type:"password",placeholder:"enter password",onChange:c=>r(c.target.value),required:!0})]}),u.jsx("p",{children:a}),u.jsx("button",{disabled:n.isPending,children:"Enter"})]})]})};export{Z as default};