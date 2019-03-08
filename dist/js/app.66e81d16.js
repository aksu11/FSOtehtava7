(function(t){function e(e){for(var n,i,a=e[0],u=e[1],c=e[2],d=0,p=[];d<a.length;d++)i=a[d],o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0200":function(t,e,r){"use strict";var n=r("7984"),o=r.n(n);o.a},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"0937":function(t,e,r){},"13f7":function(t,e,r){},"2ee9":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n,o=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",[r("NavBar"),r("router-view")],1)])},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav"},[r("router-link",{staticClass:"solu",attrs:{to:"/",id:"otsikko"}},[t._v("Blog application")]),r("nav",{staticClass:"solu",attrs:{id:"linkit"}},[r("router-link",{attrs:{to:"/users"}},[t._v("Users")]),t._v(" |\n    "),r("router-link",{attrs:{to:"/blogs"}},[t._v("Blogs")])],1),t.loggedUser?r("span",{staticClass:"solu",attrs:{id:"logged"}},[t._v("\n    "+t._s(t.loggedUser.username)+" logged in\n    "),r("button",{attrs:{id:"nappi"},on:{click:t.toggleVisibility}},[t._v(t._s(t.formVisibility))]),r("button",{attrs:{id:"nappi"},on:{click:t.logOut}},[t._v("Log out")])]):t._e()],1)},u=[],c={name:"navBar",computed:{loggedUser:function(){return this.$store.state.loggedUser},formVisibility:function(){return this.$store.state.formVisibility?"Don't create":"Create new"}},methods:{logOut:function(){var t=this;window.localStorage.removeItem("loggedBlogUser"),this.$store.dispatch("notify",{content:"You have logged out, bye bye",isError:!1}),setTimeout(function(){t.$store.commit("LOG_OUT"),t.$router.push("/")},3e3)},toggleVisibility:function(){this.$store.commit("CHANGE_FORM_VISIBILITY",!this.$store.state.formVisibility)}}},l=c,d=(r("e1a6"),r("2877")),p=Object(d["a"])(l,a,u,!1,null,"a8e474a0",null),m=p.exports,g={name:"app",components:{NavBar:m}},f=g,h=(r("034f"),Object(d["a"])(f,s,i,!1,null,null,null)),v=h.exports,b=r("8c4f"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Notification"),r("h2",[t._v("Log in to application")]),r("form",{attrs:{autoComplete:"on"},on:{submit:function(e){return e.preventDefault(),t.logIn(e)}}},[r("div",[t._v("Käyttäjätunnus:")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"username",autoComplete:"shipping username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),r("br"),r("div",[t._v("Salasana:")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password",autoComplete:"shipping password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("br"),r("button",{attrs:{id:"nappi",type:"submit"}},[t._v("Log in")])])],1)},w=[],y=r("f499"),k=r.n(y),O=(r("96cf"),r("3b8d")),B=r("bd86"),x=r("bc3a"),$=r.n(x),E="/api/blogs",U=function(){try{var t=$.a.get(E);return t.then(function(t){return t.data})}catch(e){return e.response.data}},R=function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.get("".concat(E,"/user/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),I=function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.get("".concat(E,"/blog/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),C=function(t){"bearer ".concat(t)},S=function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e){var r,n,o,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=JSON.parse(window.localStorage.getItem("loggedBlogUser")),n="bearer ".concat(r.token),o={headers:{authorization:n}},t.prev=3,t.next=6,$.a.post(E,e,o);case 6:return s=t.sent,t.abrupt("return",s.data);case 10:return t.prev=10,t.t0=t["catch"](3),t.abrupt("return",t.t0.response.data);case 13:case"end":return t.stop()}},t,this,[[3,10]])}));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e){var r,n,o,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=JSON.parse(window.localStorage.getItem("loggedBlogUser")),n="bearer ".concat(r.token),o={headers:{authorization:n}},t.prev=3,t.next=6,$.a.delete("".concat(E,"/").concat(e),o);case 6:return s=t.sent,t.abrupt("return",s.data);case 10:return t.prev=10,t.t0=t["catch"](3),t.abrupt("return",t.t0.response.data);case 13:case"end":return t.stop()}},t,this,[[3,10]])}));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e){var r,n,o,s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=JSON.parse(window.localStorage.getItem("loggedBlogUser")),n="bearer ".concat(r.token),o={headers:{authorization:n}},s={comment:e.comment},t.prev=4,t.next=7,$.a.put("".concat(E,"/").concat(e.id,"/comment"),s,o);case 7:return i=t.sent,t.abrupt("return",i.data);case 11:return t.prev=11,t.t0=t["catch"](4),t.abrupt("return",t.t0.response.data);case 14:case"end":return t.stop()}},t,this,[[4,11]])}));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.put("".concat(E,"/").concat(e,"/like"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",t.t0.response.data);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),V=(n={getAll:U,create:S,addComment:N,setToken:C,remove:j,getByUser:R},Object(B["a"])(n,"addComment",N),Object(B["a"])(n,"getOne",I),Object(B["a"])(n,"likeBlog",T),n),A="/api/login",L=function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.a.post(A,e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),G={login:L},P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"message",class:{error:t.message.isError&&t.message.content,added:!t.message.isError&&t.message.content}},[t._v(t._s(t.message.content))])},D=[],F={name:"Notification",computed:{message:function(){return this.$store.state.message.length>0?this.$store.state.message[0]:{}}}},M=F,Y=(r("efef"),Object(d["a"])(M,P,D,!1,null,null,null)),J=Y.exports,H={name:"home",data:function(){return{username:"",password:""}},components:{Notification:J},computed:{loggedUser:function(){return this.$store.state.loggedUser}},methods:{logIn:function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.login({username:this.username,password:this.password});case 3:e=t.sent,this.$store.commit("LOG_IN",e),this.$store.dispatch("notify",{content:"You have logged in as "+e.username+" and will be redirected...",isError:!1}),this.$store.commit("CHANGE_FORM_VISIBILITY",!1),this.$store.dispatch("initUsers"),this.$store.dispatch("initBlogs"),this.username="",this.password="",V.setToken(e.token),window.localStorage.setItem("loggedBlogUser",k()(e)),setTimeout(function(){r.$router.push("/users")},3e3),t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0),this.$store.dispatch("notify",{content:"Invalid password or username",isError:!0});case 20:case"end":return t.stop()}},t,this,[[0,16]])}));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=this,e=window.localStorage.getItem("loggedBlogUser");if(e){var r=JSON.parse(e);this.$store.commit("LOG_IN",r),this.$store.dispatch("notify",{content:"You have logged in as "+r.username+" and will be redirected...",isError:!1}),this.$store.commit("CHANGE_FORM_VISIBILITY",!1),this.$store.dispatch("initUsers"),this.$store.dispatch("initBlogs"),V.setToken(r.token),setTimeout(function(){t.$router.push("/users")},3e3)}}},z=H,K=(r("0200"),Object(d["a"])(z,_,w,!1,null,"8369630e",null)),q=K.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"users"},[r("Notification"),t._m(0),r("table",{attrs:{id:"taulu"}},t._l(t.users,function(e){return r("tbody",{key:e.id},[r("tr",[r("td",{attrs:{id:"solu1"}},[r("router-link",{attrs:{to:{name:"singleUser",params:{id:e.id}},id:"solu1"}},[t._v(t._s(e.username))])],1),r("td",{attrs:{id:"solu2"}},[t._v(t._s(e.blogs.length))])])])}),0),t.visibility?r("AddBlogForm"):t._e()],1)},W=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"otsikko"}},[r("span",{staticClass:"sp"},[r("th",[t._v("Users")])]),r("span",{staticClass:"sp"},[r("th",[t._v("Blogs added")])])])}],X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"addBlogForm"},[r("h2",[t._v("Lisää blogi")]),t.loggedUser?r("form",{attrs:{autoComplete:"on"},on:{submit:function(e){return e.preventDefault(),t.addBlog(e)}}},[r("table",{staticClass:"taulu"},[r("tbody",[r("tr",[r("td",{staticClass:"vasen"},[t._v("Title:")]),r("td",{staticClass:"oikea"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),r("tr",[r("td",{staticClass:"vasen"},[t._v("Author:")]),r("td",{staticClass:"oikea"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})])]),r("tr",[r("td",{staticClass:"vasen"},[t._v("URL:")]),r("td",{staticClass:"oikea"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})])])])]),r("button",{attrs:{id:"nappi",type:"submit"}},[t._v("Add Blog")])]):t._e()])},Z=[],tt={name:"addBlogForm",data:function(){return{title:"",author:"",url:""}},computed:{loggedUser:function(){return this.$store.state.loggedUser}},methods:{addBlog:function(){var t={title:this.title,author:this.author,url:this.url,comments:[]};this.$store.dispatch("addBlog",t),this.title="",this.author="",this.url="",this.$router.push("/blogs")}}},et=tt,rt=(r("fff0"),Object(d["a"])(et,X,Z,!1,null,"963f052a",null)),nt=rt.exports,ot={name:"users",components:{AddBlogForm:nt,Notification:J},computed:{users:function(){return this.$store.state.users},visibility:function(){return this.$store.state.formVisibility}},created:function(){window.localStorage.getItem("loggedBlogUser")||this.$router.push("/")}},st=ot,it=(r("c0b3"),Object(d["a"])(st,Q,W,!1,null,"535f6f46",null)),at=it.exports,ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Notification"),r("div",{attrs:{id:"blogs"}},[r("h2",[t._v("Blogs")]),r("table",t._l(t.blogs,function(e,n){return r("tbody",{key:n},[r("tr",[r("td",[r("router-link",{attrs:{to:{name:"singleBlog",params:{id:e.id}},id:"link"}},[r("span",{attrs:{id:"title"}},[t._v(t._s(e.title))])]),r("span",{attrs:{id:"author"}},[t._v(t._s(e.author))])],1)])])}),0),t.visibility?r("AddBlogForm"):t._e()],1)],1)},ct=[],lt={name:"blogs",components:{AddBlogForm:nt,Notification:J},computed:{blogs:function(){return this.$store.state.blogs},visibility:function(){return this.$store.state.formVisibility}},created:function(){window.localStorage.getItem("loggedBlogUser")||this.$router.push("/")}},dt=lt,pt=(r("8f33"),Object(d["a"])(dt,ut,ct,!1,null,"50f5d778",null)),mt=pt.exports,gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"singleBlog"}},[r("Notification"),r("h2",[t._v(t._s(t.blog.title)+" "+t._s(t.blog.author))]),r("div",{staticClass:"solu"},[r("a",{attrs:{href:"//"+t.blog.url,target:"_blank"}},[t._v(t._s(t.blog.url))])]),r("div",{staticClass:"solu"},[t._v(t._s(t.blog.likes)+" likes "),r("button",{on:{click:t.like}},[t._v("Like")])]),r("div",{staticClass:"solu"},[t._v("added by\n    "),r("router-link",{staticClass:"link",attrs:{to:{name:"singleUser",params:{id:t.blog.user._id}}}},[t._v(t._s(t.blog.user.username))]),t.deleteVisibility?r("button",{on:{click:t.remove}},[t._v("Delete")]):t._e()],1),r("div",[r("h3",[t._v("Comments")]),r("button",{attrs:{id:"add"},on:{click:t.addComment}},[t._v(t._s(t.commentVisibility?"Don't add":"Add comment"))])]),t.commentVisibility?r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{rows:"5",placeholder:"max 150 characters"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),r("button",{on:{click:t.send}},[t._v("Send")])]):t._e(),r("div",t._l(t.blog.comments,function(e){return r("div",{key:e._id,staticClass:"comment"},[t._v("\n        - "),r("span",{attrs:{id:"green"}},[t._v(t._s(e.content))]),t._v(" by \n        "),r("router-link",{staticClass:"link",attrs:{to:{name:"singleUser",params:{id:e.userId}}}},[t._v(t._s(e.username))])],1)}),0),t.formVisibility?r("AddBlogForm"):t._e()],1)},ft=[],ht=(r("7514"),{name:"SingleBlog",props:["id"],data:function(){return{comment:"",commentVisibility:!1}},components:{AddBlogForm:nt,Notification:J},computed:{blog:function(){var t=this;return this.$store.state.blogs.find(function(e){return e.id===t.id})},formVisibility:function(){return this.$store.state.formVisibility},loggedUser:function(){return this.$store.state.user},deleteVisibility:function(){return this.blog.user._id===this.$store.state.loggedUser.id}},methods:{addComment:function(){this.commentVisibility=!this.commentVisibility,this.comment=""},send:function(){if(console.log(this.blog),this.comment.length>150)this.$store.dispatch("notify",{content:"Too long comment, max 150 characters",isError:!0});else if(this.comment.length>0){var t={id:this.id,comment:this.comment};this.$store.dispatch("commentBlog",t),this.comment="",this.commentVisibility=!1}else this.$store.dispatch("notify",{content:"Empty comment field",isError:!0})},like:function(){this.$store.dispatch("likeBlog",this.blog.id)},remove:function(){this.blog.user._id===this.$store.state.loggedUser.id&&this.$store.dispatch("removeBlog",this.blog.id),this.$router.push("/blogs")}},created:function(){window.localStorage.getItem("loggedBlogUser")||this.$router.push("/")}}),vt=ht,bt=(r("8eec"),Object(d["a"])(vt,gt,ft,!1,null,"33374e60",null)),_t=bt.exports,wt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"singleUser"},[r("Notification"),r("h2",[t._v(t._s(t.user.username))]),r("h3",[t._v("Added blogs")]),r("table",t._l(t.user.blogs,function(e){return r("tbody",{key:e._id},[r("tr",[r("td",[r("router-link",{attrs:{to:{name:"singleBlog",params:{id:e._id}},id:"link"}},[r("span",{attrs:{id:"title"}},[t._v(t._s(e.title))])]),r("span",{attrs:{id:"author"}},[t._v(t._s(e.author))])],1)])])}),0),t.visibility?r("AddBlogForm"):t._e()],1)},yt=[],kt={name:"singleUser",props:["id"],components:{AddBlogForm:nt,Notification:J},computed:{user:function(){var t=this;return this.$store.state.users.find(function(e){return e.id===t.id})},visibility:function(){return this.$store.state.formVisibility}},created:function(){window.localStorage.getItem("loggedBlogUser")||this.$router.push("/")}},Ot=kt,Bt=(r("c40b"),Object(d["a"])(Ot,wt,yt,!1,null,"efe61aac",null)),xt=Bt.exports;o["a"].use(b["a"]);var $t=new b["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:q},{path:"/users",name:"users",component:at},{path:"/blogs",name:"blogs",component:mt},{path:"/blogs/:id",name:"singleBlog",props:!0,component:_t},{path:"/users/:id",name:"singleUser",props:!0,component:xt}]}),Et=(r("55dd"),r("2f62")),Ut="/api/users",Rt=function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.a.get(Ut);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),It=function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.a.get(Ut+"/"+e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),Ct={getUsers:Rt,getById:It},St=r("0e44");o["a"].use(Et["a"]);var jt=new Et["a"].Store({plugins:[Object(St["a"])()],state:{loggedUser:null,users:[],blogs:[],formVisibility:!1,message:[]},mutations:{ADD_BLOG:function(t,e){t.blogs.push(e);var r=t.users.find(function(t){return t.id===e.user._id}),n={_id:e.id,title:e.title,author:e.author};r.blogs.push(n);var o=t.users.filter(function(t){return t.id!==e.user._id});o.push(r),t.users=o,t.formVisibility=!1},CHANGE_FORM_VISIBILITY:function(t,e){t.formVisibility=e},INIT_BLOGS:function(t,e){t.blogs=e.sort(function(t,e){return e.likes-t.likes})},INIT_USERS:function(t,e){t.users=e},LOG_IN:function(t,e){t.loggedUser=e},LOG_OUT:function(t){t.loggedUser=null,t.users=[],t.blogs=[],t.message=[],t.formVisibility=!1},ADD_MESSAGE:function(t,e){var r=t.message;r.push(e),t.message=r},REDUCE_MESSAGE:function(t){var e=t.message;e.shift(),t.message=e},REMOVE_BLOG:function(t,e){console.log(e);var r=t.blogs.filter(function(t){return t.id!==e.id});t.blogs=r;var n=t.users.find(function(t){return t.id===e.user._id});console.log("Poistetun lisääjä: ",n);var o=n.blogs.filter(function(t){return t._id!==e.id});console.log("blogit poiston jälkeen: ",o),n.blogs=o;var s=t.users.filter(function(t){return t.id!==n.id}),i=s.concat(n);t.users=i},UPDATE_BLOG:function(t,e){var r=t.blogs.filter(function(t){return t.id!==e.id}),n=r.concat(e);t.blogs=n.sort(function(t,e){return e.likes-t.likes})}},actions:{addBlog:function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.create(r);case 2:n=t.sent,n.hasOwnProperty("error")?e.dispatch("notify",{content:"There was an error: "+n.error,isError:!0}):(e.commit("ADD_BLOG",n),e.dispatch("notify",{content:"You added new blog; '"+n.title+"' by "+n.author,isError:!1}));case 4:case"end":return t.stop()}},t,this)}));function e(e,r){return t.apply(this,arguments)}return e}(),commentBlog:function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(r),t.next=3,V.addComment(r);case 3:n=t.sent,n.hasOwnProperty("error")?e.dispatch("notify",{content:"There was an error: "+newBlog.error,isError:!0}):(e.commit("UPDATE_BLOG",n),e.dispatch("notify",{content:"You commented blog '"+n.title+"' by "+n.author,isError:!1}));case 5:case"end":return t.stop()}},t,this)}));function e(e,r){return t.apply(this,arguments)}return e}(),initBlogs:function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.getAll();case 2:r=t.sent,r.hasOwnProperty("error")?e.dispatch("notify",{content:"There was an error: "+r.error,isError:!0}):e.commit("INIT_BLOGS",r);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),likeBlog:function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.likeBlog(r);case 2:n=t.sent,n.hasOwnProperty("error")?e.dispatch("notify",{content:"There was an error: "+n.error,isError:!0}):(e.commit("UPDATE_BLOG",n),e.dispatch("notify",{content:"You liked a blog '"+n.title+"' by "+n.author,isError:!1}));case 4:case"end":return t.stop()}},t,this)}));function e(e,r){return t.apply(this,arguments)}return e}(),removeBlog:function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.remove(r);case 2:n=t.sent,console.log("poistettu: ",n),n.hasOwnProperty("error")?e.dispatch("notify",{content:"There was an error: "+n.error,isError:!0}):(e.commit("REMOVE_BLOG",n),e.dispatch("notify",{content:"You removed blog '"+n.title+"' by "+n.author,isError:!1}));case 5:case"end":return t.stop()}},t,this)}));function e(e,r){return t.apply(this,arguments)}return e}(),initUsers:function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ct.getUsers();case 2:r=t.sent,r.hasOwnProperty("error")?e.dispatch("notify",{content:"There was an error: "+r.error,isError:!0}):e.commit("INIT_USERS",r);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),notify:function(t,e){t.commit("ADD_MESSAGE",e),setTimeout(function(){t.commit("REDUCE_MESSAGE")},5e3)}}});o["a"].config.productionTip=!0,new o["a"]({router:$t,store:jt,render:function(t){return t(v)}}).$mount("#app")},"63d0":function(t,e,r){},"64a9":function(t,e,r){},"76f5":function(t,e,r){},7984:function(t,e,r){},"8eec":function(t,e,r){"use strict";var n=r("76f5"),o=r.n(n);o.a},"8f33":function(t,e,r){"use strict";var n=r("0937"),o=r.n(n);o.a},"9c58":function(t,e,r){},c0b3:function(t,e,r){"use strict";var n=r("2ee9"),o=r.n(n);o.a},c40b:function(t,e,r){"use strict";var n=r("ebb4"),o=r.n(n);o.a},e1a6:function(t,e,r){"use strict";var n=r("63d0"),o=r.n(n);o.a},ebb4:function(t,e,r){},efef:function(t,e,r){"use strict";var n=r("13f7"),o=r.n(n);o.a},fff0:function(t,e,r){"use strict";var n=r("9c58"),o=r.n(n);o.a}});
//# sourceMappingURL=app.66e81d16.js.map