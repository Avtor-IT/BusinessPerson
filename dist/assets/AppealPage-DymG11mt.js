import{$ as o,j as r,H as t,a0 as d,B as c}from"./index-CKaufg0w.js";import{u}from"./hooks-Bp0nOQ8k.js";import{T as n}from"./Typography-DO0TQFhO.js";const h=()=>{const i=o(),{data:e,isLoading:s}=u(i.chatId);return s?r.jsx(t,{children:"is loading"}):r.jsxs(t,{marginY:"8px",children:[e.result.messages.filter(a=>a.author_id!==0).reverse().map(a=>r.jsxs(t,{marginY:"16px",children:[r.jsx(n,{variant:"L20",component:"div",children:a.text}),r.jsx(n,{variant:"L16",children:new Date(a.date).toLocaleDateString("ru-RU",{day:"numeric",month:"long",hour:"numeric",minute:"numeric"})}),r.jsxs(n,{variant:"L16",children:[" ","- ",a.author_id]})]},a.id)),r.jsx(t,{marginY:"16px",children:r.jsx(d,{afterPlaceholder:r.jsx(c,{children:"Отправить"})})})]})};export{h as default};
