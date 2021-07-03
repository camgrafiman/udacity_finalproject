(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{53:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(38),s=c.n(r),i=c(8),o=(c(53),c(1)),l=function(){var e=Object(i.b)().logout;return Object(o.jsx)("button",{onClick:function(){return e({returnTo:window.location.origin})},children:"Logout"})},j=function(){var e=Object(i.b)(),t=e.user,c=e.isAuthenticated;return e.isLoading?Object(o.jsx)("div",{children:"Loading..."}):c&&Object(o.jsxs)("div",{className:"profilePage",children:[Object(o.jsx)("img",{src:t.picture,alt:t.name}),Object(o.jsxs)("h2",{children:["Welcome, ",t.name]}),Object(o.jsxs)("p",{children:["Email: ",t.email]}),Object(o.jsx)("code",{children:JSON.stringify(t,null,2)})]})},u=(c(55),c(15)),b=c(7),d=c(6),h=c(40),p=c(23),m=c(18),O=[{title:"Home",path:"/",icon:Object(o.jsx)(p.b,{}),cName:"nav-text",type:"internal"},{title:"Login",path:"/login",icon:Object(o.jsx)(m.a,{}),cName:"nav-text",type:"internal"},{title:"Profile",path:"/profile",icon:Object(o.jsx)(m.e,{}),cName:"nav-text",type:"internal"},{title:"Categories",path:"/categories",icon:Object(o.jsx)(m.c,{}),cName:"nav-text",type:"internal"},{title:"Shows",path:"/shows",icon:Object(o.jsx)(m.f,{}),cName:"nav-text",type:"internal"},{title:"Characters",path:"/characters",icon:Object(o.jsx)(m.d,{}),cName:"nav-text",type:"internal"}],x=[{title:"Logout",path:"/logout",icon:Object(o.jsx)(m.b,{}),cName:"nav-text",type:"internal"}],g=(c(56),c(0)),f=function(){var e=Object(i.b)(),t=e.user,c=e.isAuthenticated;return e.isLoading?Object(o.jsx)("div",{children:"Loading..."}):c&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:t.picture,alt:t.name,className:"profileImg"}),Object(o.jsxs)("h2",{className:"profileText",children:["Welcome, ",t.name]}),Object(o.jsx)("p",{className:"profileEmail",children:t.email})]})};function v(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(i.b)(),s=r.isAuthenticated,l=r.logout,j=function(){return a(!c)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(g.b.Provider,{value:{color:"#fff"},children:[Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)(u.b,{to:"#",className:"menu-bars",children:Object(o.jsx)(h.a,{onClick:j})}),Object(o.jsx)("div",{className:"profile",children:s?Object(o.jsx)(f,{className:"loggedIn"}):Object(o.jsx)("div",{className:"loggedOut",children:"You are not logged."})})]}),Object(o.jsx)("nav",{className:c?"nav-menu active":"nav-menu",children:Object(o.jsxs)("ul",{className:"nav-menu-items",onClick:j,children:[Object(o.jsx)("li",{className:"navbar-toggle",children:Object(o.jsx)(u.b,{to:"#",className:"menu-bars",children:Object(o.jsx)(p.a,{onClick:j})})}),O.map((function(e,t){return Object(o.jsx)("li",{className:e.cName,children:Object(o.jsxs)(u.b,{to:e.path,children:[e.icon,Object(o.jsx)("span",{children:e.title})]})},t)})),s?x.map((function(e,t){return Object(o.jsx)("li",{className:e.cName,children:Object(o.jsxs)(u.b,{to:e.path,onClick:function(){return l({returnTo:window.location.origin})},children:[e.icon,Object(o.jsx)("span",{children:e.title})]})},t)})):null]})})]})})}var y=c(41),N=c.n(y);function _(e){var t=e.isAuthenticated,c=Object(n.useState)(),a=Object(d.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){return console.log("useEffect fired!"),N.a.get("".concat("https://udacity-camgrafiman2.herokuapp.com/api")).then((function(e){var t=e.data;s(t)})),function(){console.log("Home unmounted.")}}),[]),console.log(t?"Yes, authenticated":"not authenticated"),Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)("h6",{children:"Home"}),Object(o.jsx)("br",{}),Object(o.jsx)("pre",{children:'Info from the "/api" main endpoint '}),Object(o.jsx)("code",{children:JSON.stringify(r,2,null)}),Object(o.jsxs)("p",{children:["Welcome to my app. please",Object(o.jsx)("span",{className:"sub",children:"register"})," to access this information:"]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Characters"}),Object(o.jsx)("li",{children:"Shows"}),Object(o.jsx)("li",{children:"Categories"})]})]})}var w=c(3),S=c(4),F=c.n(S),k=c(5),T=c(13),C="https://udacity-camgrafiman2.herokuapp.com/api";function A(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(d.a)(r,2),l=s[0],j=s[1],u=Object(n.useState)(!1),b=Object(d.a)(u,2),h=b[0],p=b[1],m=Object(n.useState)(!1),O=Object(d.a)(m,2),x=O[0],g=O[1],f=Object(i.b)(),v=(f.user,f.isAuthenticated),y=f.getAccessTokenSilently,N=Object(T.a)({mode:"onBlur"}),_=N.register,S=(N.errors,N.handleSubmit),A=Object(T.a)({mode:"onBlur"}),E=A.register,q=(A.errors,A.handleSubmit),B=Object(T.a)({mode:"onBlur"}),D=B.register,L=(B.errors,B.handleSubmit),P=function(){var e=Object(k.a)(F.a.mark((function e(){var t,c,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:return t=e.sent,e.next=6,fetch("".concat(C,"/categories"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 6:return c=e.sent,e.next=9,c.json();case 9:n=e.sent,a(n),console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),a(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(k.a)(F.a.mark((function e(t){var c,n,r,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={cat_type:t.cat_type},console.log(c),e.prev=2,e.next=5,y();case 5:return n=e.sent,e.next=8,fetch("".concat(C,"/categories"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(c)});case 8:return r=e.sent,e.next=11,r.json();case 11:(s=e.sent).error||!1===s.success?j(!0):(a(s),console.log(s)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(k.a)(F.a.mark((function e(t){var c,n,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),c={cat_type:t.cat_type},e.prev=2,e.next=5,y();case 5:return n=e.sent,e.next=8,fetch("".concat(C,"/categories/").concat(t.item_id),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(c)});case 8:return a=e.sent,e.next=11,a.json();case 11:(r=e.sent).error||!1===r.success?p(!0):(alert(r),console.log(r)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(k.a)(F.a.mark((function e(t){var c,n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:return c=e.sent,e.next=6,fetch("".concat(C,"/categories/").concat(t.item_id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify(t)});case 6:return n=e.sent,e.next=9,n.json();case 9:(a=e.sent).error||!1===a.success?g(!0):(alert(a),console.log(a)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return console.log(v?"Yes, authenticated":"not authenticated"),Object(o.jsxs)("div",{className:"categories",children:[Object(o.jsx)("h3",{children:"Categories"}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"READ"}),Object(o.jsx)("button",{className:"button",onClick:function(){return P()},children:"Get Categories Secured Data"}),Object(o.jsx)("ul",{children:c.categories?c.categories.map((function(e,t){return Object(o.jsxs)("li",{children:["id: ",e.id," | ",e.cat_type]},t)})):Object(o.jsx)("li",{children:"Loading..."},1)})]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"CREATE"}),Object(o.jsxs)("form",{id:"create",onSubmit:S(J),children:[Object(o.jsx)("label",{htmlFor:"cat_type",children:"Category type:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"cat_type",type:"text"},_("cat_type")),{},{required:!0})),Object(o.jsx)("input",{className:"button",type:"submit",value:"Post category"})]}),l?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"error",children:"Fetch Failed, You don't have permissions."})}):null]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"UPDATE"}),Object(o.jsxs)("form",{id:"update",onSubmit:q(Y),children:[Object(o.jsx)("label",{htmlFor:"number",children:"Select id to update:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({type:"number"},E("item_id")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"cat_type",children:"New name for Category type:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({type:"text"},E("cat_type")),{},{required:!0})),Object(o.jsx)("input",{className:"button",type:"submit",value:"Update category"})]}),h?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"error",children:"Fetch Failed, You don't have permissions."})}):null]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"DELETE"}),Object(o.jsxs)("form",{id:"delete",onSubmit:L(z),children:[Object(o.jsx)("label",{htmlFor:"number",children:"Select id to delete"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({type:"number"},D("item_id")),{},{required:!0})),Object(o.jsx)("input",{className:"button buttonred",type:"submit",value:"Delete category"})]}),x?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"error",children:"Fetch Failed, You don't have permissions."})}):null]})]})]})}var E="https://udacity-camgrafiman2.herokuapp.com/api";function q(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(d.a)(r,2),l=s[0],j=s[1],u=Object(n.useState)(!1),b=Object(d.a)(u,2),h=b[0],p=b[1],m=Object(n.useState)(!1),O=Object(d.a)(m,2),x=O[0],g=O[1],f=Object(i.b)(),v=(f.user,f.isAuthenticated),y=f.getAccessTokenSilently,N=Object(T.a)({mode:"onBlur"}),_=N.register,S=(N.errors,N.handleSubmit),C=Object(T.a)({mode:"onBlur"}),A=C.register,q=(C.errors,C.handleSubmit),B=Object(T.a)({mode:"onBlur"}),D=B.register,L=(B.errors,B.handleSubmit),P=function(){var e=Object(k.a)(F.a.mark((function e(){var t,c,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:return t=e.sent,e.next=6,fetch("".concat(E,"/shows"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 6:return c=e.sent,e.next=9,c.json();case 9:n=e.sent,a(n),console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),a(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(k.a)(F.a.mark((function e(t){var c,n,r,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={title:t.title,show_type:t.show_type,show_description:t.show_description,release_date:parseInt(t.release_date),rating:parseFloat(t.rating)},e.prev=1,e.next=4,y();case 4:return n=e.sent,e.next=7,fetch("".concat(E,"/shows"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(c)});case 7:return r=e.sent,e.next=10,r.json();case 10:(s=e.sent).error||!1===s.success?j(!0):(a(s),console.log(s)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(k.a)(F.a.mark((function e(t){var c,n,a,r,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.item_to_update,n={title:t.title,show_type:t.show_type,show_description:t.show_description,release_date:parseInt(t.release_date),rating:parseFloat(t.rating)},e.prev=2,e.next=5,y();case 5:return a=e.sent,e.next=8,fetch("".concat(E,"/shows/").concat(c),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(n)});case 8:return r=e.sent,e.next=11,r.json();case 11:(s=e.sent).error||!1===s.success?p(!0):(alert("data changed sucesfully"),console.log(s)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(k.a)(F.a.mark((function e(t){var c,n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:return c=e.sent,e.next=6,fetch("".concat(E,"/shows/").concat(t.item_id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify(t)});case 6:return n=e.sent,e.next=9,n.json();case 9:(a=e.sent).error||!1===a.success||403===a.status_code?g(!0):(alert("show data deleted ",t.item_id),console.log(a)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return console.log(v?"Yes, authenticated":"not authenticated"),Object(o.jsxs)("div",{className:"shows",children:[Object(o.jsx)("h3",{children:"Shows"}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"READ"}),Object(o.jsx)("button",{className:"button",onClick:function(){return P()},children:"Get shows Secured Data - Full info:"}),Object(o.jsx)("ul",{children:c.shows?c.shows.map((function(e,t){return Object(o.jsxs)("li",{children:["  id: ",e.id," | title: ",e.title," | show type: ",e.show_type," | description: ",e.show_description," | release date: ",e.release_date," | rating: ",e.rating," "]},t)})):Object(o.jsx)("li",{children:"Click up to retrieve information"},1)})]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"CREATE"}),Object(o.jsxs)("form",{id:"create",onSubmit:S(J),children:[Object(o.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"title",type:"text"},_("title")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"show_type",children:"Show Type:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"show_type",type:"text"},_("show_type")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"show_description",type:"text"},_("show_description")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"release_date",children:"Release date (year):"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"release_date",type:"number"},_("release_date")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"rating",children:"Rating"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"image",type:"range",step:"0.1",min:"0.0",max:"5.0"},_("rating")),{},{required:!0})),Object(o.jsx)("input",{className:"button",type:"submit",value:"Post show"})]}),l?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"error",children:"Fetch Failed, You don't have permissions."})}):null]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"UPDATE"}),Object(o.jsxs)("form",{id:"update",onSubmit:q(Y),children:[Object(o.jsx)("label",{htmlFor:"item_to_update",children:"Show ID to update:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"item_to_update",type:"number"},A("item_to_update")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"title",type:"text"},A("title")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"show_type",children:"Show Type:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"show_type",type:"text"},A("show_type")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"show_description",type:"text"},A("show_description")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"release_date",children:"Release date (year):"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"release_date",type:"number"},A("release_date")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"rating",children:"Rating"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"image",type:"range",step:"0.1",min:"0.0",max:"5.0"},A("rating")),{},{required:!0})),Object(o.jsx)("input",{className:"button",type:"submit",value:"Update show"})]}),h?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"error",children:"Fetch Failed, You don't have permissions."})}):null]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"DELETE"}),Object(o.jsxs)("form",{id:"delete",onSubmit:L(z),children:[Object(o.jsx)("label",{htmlFor:"number",children:"Select id to delete"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({type:"number"},D("item_id")),{},{required:!0})),Object(o.jsx)("input",{className:"button buttonred",type:"submit",value:"Delete category"})]}),x?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"error",children:"Fetch Failed, You don't have permissions."})}):null]})]})]})}var B="https://udacity-camgrafiman2.herokuapp.com/api";function D(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(d.a)(r,2),l=s[0],j=s[1],u=Object(n.useState)(!1),b=Object(d.a)(u,2),h=b[0],p=b[1],m=Object(n.useState)(!1),O=Object(d.a)(m,2),x=O[0],g=O[1],f=Object(i.b)(),v=(f.user,f.isAuthenticated),y=f.getAccessTokenSilently,N=Object(T.a)({mode:"onBlur"}),_=N.register,S=(N.errors,N.handleSubmit),C=Object(T.a)({mode:"onBlur"}),A=C.register,E=(C.errors,C.handleSubmit),q=Object(T.a)({mode:"onBlur"}),D=q.register,L=(q.errors,q.handleSubmit),P=function(){var e=Object(k.a)(F.a.mark((function e(){var t,c,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:return t=e.sent,e.next=6,fetch("".concat(B,"/characters"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 6:return c=e.sent,e.next=9,c.json();case 9:n=e.sent,a(n),console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),a(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(k.a)(F.a.mark((function e(){var t,c,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:return t=e.sent,e.next=6,fetch("".concat(B,"/characters-full"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 6:return c=e.sent,e.next=9,c.json();case 9:n=e.sent,a(n),console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),a(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(k.a)(F.a.mark((function e(t){var c,n,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,y();case 4:return c=e.sent,e.next=7,fetch("".concat(B,"/characters"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify(t)});case 7:return n=e.sent,e.next=10,n.json();case 10:(r=e.sent).error||!1===r.success?j(!0):(a(r),console.log(r)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(k.a)(F.a.mark((function e(t){var c,n,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.item_to_update,delete t.item_to_update,e.prev=2,e.next=5,y();case 5:return n=e.sent,e.next=8,fetch("".concat(B,"/characters/").concat(c),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)});case 8:return a=e.sent,e.next=11,a.json();case 11:(r=e.sent).error||!1===r.success?p(!0):(alert("data changed sucesfully"),console.log(r)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(k.a)(F.a.mark((function e(t){var c,n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:return c=e.sent,e.next=6,fetch("".concat(B,"/characters/").concat(t.item_id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify(t)});case 6:return n=e.sent,e.next=9,n.json();case 9:(a=e.sent).error||!1===a.success||403===a.status_code?g(!0):(alert(a),console.log(a)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return console.log(v?"Yes, authenticated":"not authenticated"),Object(o.jsxs)("div",{className:"characters",children:[Object(o.jsx)("h3",{children:"Characters"}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"READ"}),Object(o.jsx)("button",{className:"button",onClick:function(){return J()},children:"Get characters Secured Data - Full info:"}),Object(o.jsx)("ul",{children:c.characters?c.characters.map((function(e,t){return Object(o.jsxs)("li",{children:[" ",Object(o.jsx)("img",{src:e.image,alt:e.name,className:"character_image"})," id: ",e.id," | name: ",e.name," | character name: ",e.character_name," | age: ",e.age," | gender: ",e.gender," "]},t)})):Object(o.jsx)("li",{children:"Loading..."},1)}),Object(o.jsx)("button",{className:"button",onClick:function(){return P()},children:"Get characters Secured Data:"}),Object(o.jsx)("ul",{children:c.characters?c.characters.map((function(e,t){return Object(o.jsxs)("li",{children:[" id: ",e.id," | character name: ",e.character_name," | gender: ",e.gender," "]},t)})):Object(o.jsx)("li",{children:"Loading..."},1)})]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"CREATE"}),Object(o.jsxs)("form",{id:"create",onSubmit:S(Y),children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"name",type:"text"},_("name")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"character_name",children:"Character Name:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"character_name",type:"text"},_("character_name")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"age",children:"Age:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"age",type:"number"},_("age")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"gender",children:"Gender:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"gender",type:"text"},_("gender")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"image",children:"Image route:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"image",type:"text"},_("image")),{},{required:!0})),Object(o.jsx)("input",{className:"button",type:"submit",value:"Post character"})]}),l?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"error",children:"Fetch Failed, You don't have permissions."})}):null]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"UPDATE"}),Object(o.jsxs)("form",{id:"update",onSubmit:E(z),children:[Object(o.jsx)("label",{htmlFor:"item_to_update",children:"Choose Item ID to update:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"item_to_update",type:"number"},A("item_to_update")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"name",type:"text"},A("name")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"character_name",children:"Character Name:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"character_name",type:"text"},A("character_name")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"age",children:"Age:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"age",type:"number"},A("age")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"gender",children:"Gender:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"gender",type:"text"},A("gender")),{},{required:!0})),Object(o.jsx)("label",{htmlFor:"image",children:"Image route:"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({name:"image",type:"text"},A("image")),{},{required:!0})),Object(o.jsx)("input",{className:"button",type:"submit",value:"Update character"})]}),h?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"error",children:"Fetch Failed, You don't have permissions."})}):null]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h2",{children:"DELETE"}),Object(o.jsxs)("form",{id:"delete",onSubmit:L(I),children:[Object(o.jsx)("label",{htmlFor:"number",children:"Select id to delete"}),Object(o.jsx)("input",Object(w.a)(Object(w.a)({type:"number"},D("item_id")),{},{required:!0})),Object(o.jsx)("input",{className:"button buttonred",type:"submit",value:"Delete category"})]}),x?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"error",children:"Fetch Failed, You don't have permissions."})}):null]})]})]})}var L=c(42);function P(){return Object(o.jsx)("div",{children:"Loading..."})}var J=["component"],Y=function(e){var t=e.component,c=Object(L.a)(e,J);return Object(o.jsx)(b.a,Object(w.a)({component:Object(i.c)(t,{onRedirecting:function(){return Object(o.jsx)(P,{})}})},c))};var z=function(){var e=Object(i.b)().isAuthenticated;return Object(o.jsxs)(u.a,{children:[Object(o.jsx)(v,{}),Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/",exact:!0,component:_,props:e}),Object(o.jsx)(Y,{path:"/login",component:j}),Object(o.jsx)(b.a,{path:"/logout",component:l}),Object(o.jsx)(Y,{path:"/profile",component:j}),Object(o.jsx)(b.a,{path:"/categories",component:A}),Object(o.jsx)(b.a,{path:"/shows",component:q}),Object(o.jsx)(b.a,{path:"/characters",component:D})]}),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header"})})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(i.a,{domain:"dev-x-camgrafiman.eu.auth0.com",clientId:"5ZS8KXmgybaB3cgBGJ9KhXZuyomuTvnR",redirectUri:window.location.origin,audience:"finalprojectapi",children:Object(o.jsx)(z,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.1908f57d.chunk.js.map