(this.webpackJsonpebase=this.webpackJsonpebase||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(13),s=n.n(a),c=n(17),r=n(66),i=n(33),o=n(9),l=n(34),d=n.n(l).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"b5ca5d77-73a2-4e1d-9d41-4093195e078c"},responseType:"json"}),j={get:function(e,t,n){return d.get("/users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)).then((function(e){return e.data}))}},m={employees:[],inProgress:!1,pageSize:10,totalUsersCount:0,currentPage:1,filter:{term:""}},u=function(e){return{type:"LIST_PAGE_LOADED",employees:e}},p=function(e){return{type:"ASYNC_TOGGLE",inProgress:e}},b=function(e){return{type:"SET_TOTAL_USERS_COUNT",totalUsersCount:e}},h=function(e){return{type:"SET_CURRENT_PAGE",page:e}},x=function(e){return{type:"SET_FILTER",term:e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_PAGE_LOADED":return Object(o.a)(Object(o.a)({},e),{},{employees:t.employees});case"ASYNC_TOGGLE":return Object(o.a)(Object(o.a)({},e),{},{inProgress:t.inProgress});case"SET_TOTAL_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.page});case"SET_FILTER":return Object(o.a)(Object(o.a)({},e),{},{filter:{term:t.term}});default:return e}},g=Object(r.c)(Object(r.b)({list:O}),Object(r.a)(i.a));window.store=g;var f=n(2),v=n(3),y=n(1),N=n.n(y),w=n.p+"static/media/avatarHolder.14a17919.png",S=n(0),E=function(e){var t=e.id,n=e.state;return Object(S.jsxs)("div",{className:"card m-3",style:{width:"14rem"},children:[Object(S.jsx)("img",{className:"card-img-top",src:n.photos.large||w,height:"222",alt:"avatar",style:{fontSize:0}}),Object(S.jsxs)("div",{className:"card-body h-100 d-flex flex-column justify-content-between",children:[Object(S.jsxs)("div",{className:"mb-2",children:[Object(S.jsx)("h5",{className:"card-title",children:n.name}),Object(S.jsx)("p",{className:"card-text",children:n.status||"Hi! i am React JS Junior developer"})]}),Object(S.jsx)(f.b,{className:"btn btn-outline-primary",to:"/employees/"+t,children:"More"})]})]})},C=function(e){return Object(S.jsxs)("div",{className:"d-flex justify-content-center mt-5",children:[Object(S.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(S.jsx)("span",{className:"sr-only"})}),Object(S.jsx)("h5",{className:"text-primary p-1",children:Object(S.jsx)("b",{children:e.message})})]})},k=n(19),P=function(e){var t=Object(y.useState)(""),n=Object(k.a)(t,2),a=n[0],s=n[1];return Object(S.jsx)("form",{className:"me-3",onReset:function(){a&&(s(""),e.handleSearch(""))},children:Object(S.jsxs)("div",{className:"input-group flex-nowrap",children:[Object(S.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Search"}),Object(S.jsx)("input",{name:"search",className:"form-control",type:"search","aria-label":"Search",placeholder:"Enter the name",value:a,onChange:function(t){s(t.target.value),e.handleSearch(t.target.value)}}),Object(S.jsx)("button",{className:"btn btn-outline-secondary",type:"reset",children:"Reset"})]})})},T=function(e){var t=e.totalCount,n=e.pageSize,a=e.currentPage,s=e.portionSize,c=void 0===s?10:s,r=e.term,i=e.handleClick,o=Math.ceil(t/n),l=new Array(o).fill(1).map((function(e,t){return e+t})),d=Math.ceil(o/10),j=Object(y.useState)(1),m=Object(k.a)(j,2),u=m[0],p=m[1],b=(u-1)*c+1,h=u*c;Object(y.useEffect)((function(){p(1)}),[r]);return Object(S.jsx)("nav",{"aria-label":"Page navigation example",children:Object(S.jsxs)("ul",{className:"pagination mb-0",onClick:i,children:[Object(S.jsx)("li",{className:"page-item",children:Object(S.jsx)(f.c,{className:"page-link",onClick:function(e){e.stopPropagation(),u>1&&p(u-1)},to:"#",children:"Previous"})}),l.filter((function(e){return e>=b&&e<=h})).map((function(e){return Object(S.jsx)("li",{className:a===e?"page-item active":"page-item",children:Object(S.jsx)(f.c,{className:"page-link",id:e,to:"#",children:e})},e)})),Object(S.jsx)("li",{className:"page-item",children:Object(S.jsx)(f.c,{className:"page-link",onClick:function(e){e.stopPropagation(),u<d&&p(u+1)},to:"#",children:"Next"})})]})})},R=Object(c.b)((function(e){return{employees:e.list.employees,inProgress:e.list.inProgress,totalUsersCount:e.list.totalUsersCount,currentPage:e.list.currentPage,pageSize:e.list.pageSize,term:e.list.filter.term}}),{getEmployees:function(e,t,n){return function(a){a(p(!0)),j.get(e,t,n).then((function(e){a(p(!1)),a(u(e.items)),a(b(e.totalCount))})).catch((function(e){a(p(!1)),console.log(e)})),a(h(e)),a(x(n))}}})((function(e){var t=Object.assign({},e);Object(y.useEffect)((function(){t.getEmployees(1,t.pageSize,"")}),[]);var n=function(e){return t.getEmployees(1,t.pageSize,e)};return n=function(e,t){var n;return function(){for(var a=this,s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];clearTimeout(n),n=setTimeout((function(){return e.apply(a,c)}),t)}}(n,300),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"d-flex flex-wrap justify-content-between mx-3",children:[Object(S.jsx)(P,{pageSize:t.pageSize,currentPage:t.currentPage,handleSearch:n,term:t.term}),Object(S.jsx)(T,{currentPage:t.currentPage,totalCount:t.totalUsersCount,pageSize:t.pageSize,handleClick:function(e){var n=Number(e.target.id);n!==t.currentPage&&t.getEmployees(n,t.pageSize,t.term)},term:t.term})]}),Object(S.jsx)("hr",{}),t.inProgress?Object(S.jsx)(C,{message:"Loading..."}):0!==t.employees.length?Object(S.jsx)("div",{className:"nowrap d-flex flex-wrap justify-content-start",children:t.employees.map((function(e){return Object(S.jsx)(E,{state:e,id:e.id},e.id)}))}):Object(S.jsx)("span",{className:"alert alert-secondary",children:"Employee not found"})]})})),A=n(15),_=n(16),U=n(20),L=n(18),z=function(e){Object(U.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).wrapperRef=void 0,e.setWrapperRef=function(t){e.wrapperRef=t},e.handleClickOutside=function(t){e.wrapperRef&&!e.wrapperRef.contains(t.target)&&e.props.onOutside()},e}return Object(_.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){return Object(S.jsxs)("ul",{className:"dropdown-menu dropdown-menu-dark text-small shadow show","aria-labelledby":"dropdownUser1",style:{position:"absolute",inset:"auto auto 0px 0px",margin:"0px",transform:"translate(0px, -33.65px)"},"data-popper-placement":"top-start",ref:this.setWrapperRef,children:[Object(S.jsx)("li",{children:Object(S.jsx)(f.b,{className:"dropdown-item",to:"/",children:"New project..."})}),Object(S.jsx)("li",{children:Object(S.jsx)(f.b,{className:"dropdown-item",to:"/",children:"Settings"})}),Object(S.jsx)("li",{children:Object(S.jsx)(f.b,{className:"dropdown-item",to:"/",children:"Profile"})}),Object(S.jsx)("li",{children:Object(S.jsx)("hr",{className:"dropdown-divider"})}),Object(S.jsx)("li",{children:Object(S.jsx)(f.b,{className:"dropdown-item",to:"/",children:"Sign out"})})]})}}]),n}(N.a.Component),D=n.p+"static/media/logo.d024f6dc.svg",q=function(e){Object(U.a)(n,e);var t=Object(L.a)(n);function n(e){var a;return Object(A.a)(this,n),(a=t.call(this,e)).handleClick=function(){a.setState({showDrop:!a.state.showDrop})},a.state={showDrop:!1},a}return Object(_.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("nav",{className:"d-flex flex-column justify-content-between h-100 text-white bg-dark",children:[Object(S.jsxs)("div",{children:[Object(S.jsxs)(f.b,{to:"/",className:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none",children:[Object(S.jsx)("img",{className:"bi me-2",src:D,width:"32",height:"32",alt:"img"}),Object(S.jsx)("span",{className:"fs-4",children:Object(S.jsx)("b",{children:"EBase"})})]}),Object(S.jsx)("hr",{}),Object(S.jsx)("ul",{className:"nav nav-pills flex-column mb-auto",children:Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(f.c,{to:"/employees",className:"nav-link text-white","aria-current":"page",activeClassName:"active",children:"Employees"})})})]}),Object(S.jsxs)("div",{className:"dropdown",children:[Object(S.jsx)("hr",{}),Object(S.jsx)(f.b,{to:"#",className:"d-flex align-items-center text-white text-decoration-none dropdown-toggle",id:"dropdownUser1","data-bs-toggle":"dropdown","aria-expanded":this.state.showDrop,onClick:this.handleClick,children:Object(S.jsx)("strong",{children:"Admin"})}),this.state.showDrop?Object(S.jsx)(z,{onOutside:this.handleClick}):null]})]})}}]),n}(N.a.Component),G=function(){return Object(S.jsxs)("div",{className:"text-center",style:{paddingTop:"30vh"},children:[Object(S.jsx)("h1",{children:"Oops!"}),Object(S.jsx)("h2",{children:"404 Not Found"}),Object(S.jsx)("div",{className:"mb-2",children:"Sorry, an error has occured, Requested page not found!"}),Object(S.jsxs)("div",{className:"error-actions",children:[Object(S.jsxs)(f.b,{to:"/employees",className:"btn btn-primary btn-lg me-3",children:[Object(S.jsx)("span",{className:"glyphicon glyphicon-home"}),"Show employee's list "]}),Object(S.jsxs)(f.b,{to:"/add",className:"btn btn-success btn-lg",children:[Object(S.jsx)("span",{className:"glyphicon glyphicon-envelope"}),"Add new employee "]})]})]})},I=function(){return Object(S.jsxs)("div",{className:"text-center",style:{paddingTop:"30vh"},children:[Object(S.jsx)("h1",{children:"Welcome!"}),Object(S.jsx)("h2",{children:"Watch information about employees"}),Object(S.jsx)("div",{className:"mb-2",children:"Dolor ipsum do voluptate do amet sit ut qui do reprehenderit officia. Reprehenderit do proident velit esse cupidatat exercitation sint in. Ad aliquip culpa magna culpa amet ipsum aliquip. Sunt anim ipsum ipsum dolore nulla id veniam do enim. Eu ea est velit qui fugiat labore ex. Eu Lorem non officia minim anim do aliquip laborum id proident. Irure id magna ad ex qui aliquip et ex."}),Object(S.jsxs)("div",{children:[Object(S.jsxs)(f.b,{to:"/employees",className:"btn btn-primary btn-lg me-3",children:[Object(S.jsx)("span",{className:"glyphicon glyphicon-home"}),"Show employee's list "]}),Object(S.jsxs)(f.b,{to:"/add",className:"btn btn-success btn-lg",children:[Object(S.jsx)("span",{className:"glyphicon glyphicon-envelope"}),"Add new employee "]})]})]})},W=function(){return Object(S.jsxs)("div",{className:"d-flex flex-nowrap vh-100 overflow-hidden",children:[Object(S.jsx)("aside",{className:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark",style:{width:"280px"},children:Object(S.jsx)(q,{})}),Object(S.jsx)("main",{className:"overflow-scroll w-100",children:Object(S.jsx)("div",{className:"container pt-3",children:Object(S.jsxs)(v.c,{children:[Object(S.jsx)(v.a,{exact:!0,path:"/",component:I}),Object(S.jsx)(v.a,{exact:!0,path:"/employees",component:R}),Object(S.jsx)(v.a,{component:G})]})})})]})};n(63);s.a.render(Object(S.jsx)(c.a,{store:g,children:Object(S.jsx)(f.a,{children:Object(S.jsx)(v.c,{children:Object(S.jsx)(v.a,{path:"/",component:W})})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.9ae4cc32.chunk.js.map