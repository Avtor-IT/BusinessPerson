import{Z as o,j as s,H as n}from"./index-CKaufg0w.js";import{u as d,a as x}from"./hooks-Bp0nOQ8k.js";import{T as a}from"./Typography-DO0TQFhO.js";const c=({id:r})=>{const{data:e,isLoading:t}=d(r),i=o();return t?s.jsx(n,{children:"Загрузка чата..."}):s.jsxs(n,{marginY:"16px",onClick:()=>i(r),sx:{cursor:"pointer"},children:[s.jsx(a,{variant:"M24",children:e.result.users[0].name}),s.jsx(a,{variant:"L16",children:e.result.messages[0].text})]})},p=()=>{const{data:r,isLoading:e}=x();return e?s.jsx("div",{children:"Загрузка чатов..."}):s.jsx("div",{children:r.result.map(t=>s.jsx(c,{id:t.CHAT_ID},t.CHAT_ID))})},m=()=>s.jsxs("div",{children:[s.jsx(a,{component:"h1",children:"Appeals page"}),s.jsx(p,{})]});export{m as default};