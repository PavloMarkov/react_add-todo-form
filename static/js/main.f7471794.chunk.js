(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),r=a(7),s=a(4),c=a(8),l=a(3),o=a.n(l),d=a(1),u=a(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo,a=t.id,n=t.completed,i=t.title,r=t.user;return Object(u.jsxs)("article",{"data-id":"".concat(a),className:o()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:i}),r&&Object(u.jsx)(m,{user:r})]},a)},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=(a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){var t=h.find((function(t){return t.id===e.userId}));return Object(c.a)(Object(c.a)({},e),{},{user:t||null})})),p=function(){var e=Object(d.useState)("0"),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(d.useState)(""),c=Object(s.a)(i,2),l=c[0],m=c[1],j=Object(d.useState)(f),p=Object(s.a)(j,2),O=p[0],x=p[1],v=Object(d.useState)(!1),N=Object(s.a)(v,2),y=N[0],S=N[1],g="0"===a;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"title",children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),S(!0),function(){if(l.trim().length&&"0"!==a){var e=h.find((function(e){return e.id===+a}));if(e){var t=Math.max.apply(Math,Object(r.a)(O.map((function(e){return e.id}))));x((function(a){return[].concat(Object(r.a)(a),[{user:e,id:t+1,title:l,completed:!1,userId:e.id}])})),S(!1),m(""),n("0")}}}()},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"todoTitle",className:"label",children:"Title"}),Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"write the Title of todo",value:l,id:"todoTitle",className:o()("input",{"is-danger":y&&!l}),onChange:function(e){var t=e.target.value.replace(/[.*+!@#&%^?^${}()|[\]\\]/g,"");m(t)}}),y&&!l&&Object(u.jsx)("span",{className:"error span",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"userTodo",className:"label",children:"User:"}),Object(u.jsx)("div",{className:o()("select",{"is-danger":y&&g}),children:Object(u.jsxs)("select",{"data-cy":"userSelect",value:a,id:"userTodo",onChange:function(e){return n(e.target.value)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),y&&g&&Object(u.jsx)("div",{children:Object(u.jsx)("span",{className:"error span",children:"Please choose a user"})})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",className:"button",children:"Add"})]}),Object(u.jsx)(b,{todos:O})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f7471794.chunk.js.map