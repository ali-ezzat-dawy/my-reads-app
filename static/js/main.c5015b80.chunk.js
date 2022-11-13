(this["webpackJsonpmy-reads-app"]=this["webpackJsonpmy-reads-app"]||[]).push([[0],{42:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(14),r=c.n(a),o=(c(19),c(20),c(42),c(5)),i=c(7),j=c.n(i),l=c(8),b="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var h={Accept:"application/json",Authorization:d},u=function(){return fetch("".concat(b,"/books"),{headers:h}).then((function(e){return e.json()})).then((function(e){return e.books}))},O=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(o.a)(Object(o.a)({},h),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},x=c(4),f=c(0),m=Object(n.createContext)([]);function p(e){var t=Object(n.useState)([]),c=Object(x.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)([]),o=Object(x.a)(r,2),i=o[0],b=o[1],d=Object(n.useState)([]),h=Object(x.a)(d,2),O=h[0],p=h[1],v=Object(n.useState)([]),k=Object(x.a)(v,2),g=k[0],N=k[1];function y(){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:s=e.sent,a(s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return R.apply(this,arguments)}function R(){return(R=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:b(s.filter((function(e){return"currentlyReading"===e.shelf}))),p(s.filter((function(e){return"wantToRead"===e.shelf}))),N(s.filter((function(e){return"read"===e.shelf})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){y(),w()}),[]),Object(f.jsx)(m.Provider,{value:{allBooks:s,currentlyReading:i,wantToRead:O,reads:g,getBook:w},children:e.children})}function v(e){var t=Object(n.useContext)(m).getBook;function c(){return(c=Object(l.a)(j.a.mark((function c(n){var s,a;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s=e,a=n.target.value,c.next=4,O(s,a);case 4:t();case 5:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"book",children:[Object(f.jsxs)("div",{className:"book-top",children:[Object(f.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.imageLinks&&e.imageLinks.smallThumbnail,")")}}),Object(f.jsx)("div",{className:"book-shelf-changer",children:Object(f.jsxs)("select",{onChange:function(e){return c.apply(this,arguments)},value:e.shelf,children:[Object(f.jsx)("option",{value:"move",children:"Move to..."}),Object(f.jsx)("option",{value:"currentlyReading",children:" Currently Reading"}),Object(f.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(f.jsx)("option",{value:"read",children:"Read"}),Object(f.jsx)("option",{value:"none",children:"None"})]})})]}),Object(f.jsx)("div",{className:"book-title",children:e.title||"not available"}),Object(f.jsx)("div",{className:"book-authors",children:e.authors||"not available"})]})})}function k(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"list-books-content",children:Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"bookShelf",children:[Object(f.jsx)("h2",{className:"bookShelf-title",children:e.title}),Object(f.jsx)("div",{className:"bookShelf-books",children:Object(f.jsx)("ol",{className:"books-grid",children:e.books&&e.books.map((function(e){return Object(n.createElement)(v,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}))})})]})})})})}var g=c(6);function N(){var e=Object(n.useContext)(m),t=e.currentlyReading,c=e.wantToRead,s=e.reads;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"list-books-title",children:Object(f.jsx)("h1",{children:"My Reads"})}),Object(f.jsx)(k,{title:"Currently Reading",books:t}),Object(f.jsx)(k,{title:"Want to Read",books:c}),Object(f.jsx)(k,{title:"Read",books:s}),Object(f.jsx)(g.b,{className:"btn btn-success open-search",to:"/search",children:"Search"})]})}var y=c(2);function S(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(x.a)(a,2),i=r[0],j=r[1];return Object(n.useEffect)((function(){var e,t,c=!0;i.length>0&&Promise.resolve((e=i,fetch("".concat(b,"/search"),{method:"POST",headers:Object(o.a)(Object(o.a)({},h),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then((function(e){return e.json()})).then((function(e){return e.books})))).then((function(e){c&&s(e)}));return function(){c=!1}}),[i]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-md-12",children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"search-books",children:Object(f.jsxs)("div",{className:"search-books-bar",children:[Object(f.jsx)(g.b,{className:"close-search",to:"/",children:"Close"}),Object(f.jsx)("div",{className:"search-books-input-wrapper",children:Object(f.jsx)("input",{type:"text",value:i,onChange:function(e){return j(e.target.value)},placeholder:"Search by title or author"})})]})})})})}),Object(f.jsx)("div",{className:"row",children:c.length>0&&i.length>0?c.map((function(e){return Object(f.jsx)("div",{className:"col-md-2",children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"list-books-content searchBooks",children:Object(f.jsx)("div",{children:Object(f.jsx)(v,Object(o.a)({},e))})})})},e.id)})):Object(f.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(f.jsx)("div",{children:Object(f.jsx)("h2",{children:"Please Enter Book Name"})})})})]})})}function w(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"vh-100 notFound d-flex justify-content-center align-content-center",children:Object(f.jsxs)("div",{className:"m-5",children:[Object(f.jsx)("h3",{children:"404"}),Object(f.jsx)("h4",{children:"Page Not Found!"}),Object(f.jsx)(g.b,{to:"/",className:"btn btn-info text-white",children:"Go To HomePage"})]})})})}function R(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(g.a,{children:Object(f.jsx)(p,{children:Object(f.jsxs)(y.c,{children:[Object(f.jsx)(y.a,{path:"/",element:Object(f.jsx)(N,{})}),Object(f.jsx)(y.a,{path:"/search",element:Object(f.jsx)(S,{})}),Object(f.jsx)(y.a,{path:"*",element:Object(f.jsx)(w,{})}),Object(f.jsx)(y.a,{})]})})})})}r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(R,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c5015b80.chunk.js.map