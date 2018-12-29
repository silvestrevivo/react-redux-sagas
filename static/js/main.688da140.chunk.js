(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(11),c=a.n(s),u=a(18),i=a(19),l=a(23),o=a(20),m=a(24),p=a(22),f={GET_USERS_REQUEST:"users/get_users_request",GET_USERS_SUCCESS:"users/get_users_success"},d=function(e){var t=e.items;return{type:f.GET_USERS_SUCCESS,payload:{items:t}}},h=a(6),E=function(e){var t=e.users;return n.a.createElement(h.f,null,t.sort(function(e,t){return e.firstName>t.firstName?1:e.firstName<t.firstName?-1:e.lastName<t.lastName?1:e.lastName>t.lastName?-1:0}).map(function(e){return n.a.createElement(h.g,{key:e.id},n.a.createElement("section",{style:{display:"flex"}},n.a.createElement("div",{style:{flexGrow:1,margin:"auto 0"}},e.firstName," ",e.lastName),n.a.createElement("div",null,n.a.createElement(h.a,{outline:!0,color:"danger"},"Delete"))))}))},b=a(40),S=a(21),v={firstName:"",lastName:""},N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state=v,a.handleState=function(e){var t=e.target,r=t.name,n=t.value;a.setState(Object(S.a)({},r,n))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,r=t.firstName,n=t.lastName;(0,a.props.onSubmit)({firstName:r,lastName:n}),a.setState(Object(b.a)({},v))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName;return n.a.createElement(h.b,{onSubmit:this.handleSubmit},n.a.createElement(h.c,null,n.a.createElement(h.e,null,"First Name"),n.a.createElement(h.d,{required:!0,type:"text",value:t,name:"firstName",placeholder:"First Name",onChange:this.handleState}),n.a.createElement(h.e,null,"Last Name"),n.a.createElement(h.d,{required:!0,type:"text",value:a,name:"lastName",placeholder:"Last Name",onChange:this.handleState})),n.a.createElement(h.c,null,n.a.createElement(h.a,{block:!0,outline:!0,type:"submit",color:"primary"},"Create")))}}]),t}(r.Component),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){var t=e.firstName,a=e.lastName;console.log("app",t,a)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersRequest()}},{key:"render",value:function(){var e=this.props.users;return n.a.createElement("div",{style:{margin:"0px auto",padding:"20px",maxWidth:"600px"}},n.a.createElement(N,{onSubmit:this.handleSubmit}),n.a.createElement(E,{users:e.items}))}}]),t}(r.Component),j=Object(p.b)(function(e){return{users:e.users}},{getUsersRequest:function(){return{type:f.GET_USERS_REQUEST}}})(g),O=(a(52),a(16)),y=a.n(O),w=a(13),x={items:[]};var _=Object(w.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.GET_USERS_SUCCESS:return{items:t.payload.items};default:return e}}}),U=a(41),k=a(12),C=a.n(k),R=a(42),T=a(9),G=function(){return y.a.get("/users",{params:{limit:1e3}})},q=C.a.mark(L),D=C.a.mark(Q);function L(){var e;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(T.b)(G);case 3:return e=t.sent,console.log("result comming from saga",e.data.data),t.next=7,Object(T.d)(d({items:e.data.data}));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("error comming from saga",t.t0);case 12:case"end":return t.stop()}},q,this,[[0,9]])}function Q(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.e)(f.GET_USERS_REQUEST,L);case 2:case"end":return e.stop()}},D,this)}var A=[Object(T.c)(Q)],F=C.a.mark(J);function J(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)(Object(R.a)(A));case 2:case"end":return e.stop()}},F,this)}y.a.defaults.withCredentials=!0,y.a.defaults.baseURL="http://rem-rest-api.herokuapp.com/api";var B=Object(U.a)(),I=Object(w.d)(_,Object(w.a)(B));B.run(J),c.a.render(n.a.createElement(p.a,{store:I},n.a.createElement(j,null)),document.getElementById("root"))}},[[43,2,1]]]);
//# sourceMappingURL=main.688da140.chunk.js.map