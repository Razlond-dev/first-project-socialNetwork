(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){if(!e)return"Field is required"}},125:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(498);t.a=function(){return r.a.createElement("div",{className:"preloader"},r.a.createElement(c.a,{size:"large"}))}},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(122),r=n(0),c=n.n(r),i=n(232),u=n.n(i),o=function(e){return function(t){var n=t.input,r=t.meta,i=Object(a.a)(t,["input","meta"]),o=r.touched&&r.error;return c.a.createElement("div",{className:o?u.a.error:""},c.a.createElement(e,Object.assign({},n,i)),o&&c.a.createElement("span",null,r.error))}}},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return v})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return w}));var a=n(24),r=n.n(a),c=n(42),i=n(79),u=n(9),o=n(83),l=n(33),s=function(e){return l.c.get("profile/"+e).then((function(e){return e.data}))},d=function(e){return l.c.get("profile/status/"+e).then((function(e){return e.data}))},m=function(e){return l.c.put("profile/status",{status:e}).then((function(e){return e.data}))},f=function(e){var t=new FormData;return t.append("avatar",e),l.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},p=function(e){return l.c.put("profile",e).then((function(e){return e.data}))},E={posts:[{id:1,message:"Hey, how are you?",likesCount:9},{id:2,message:"You are the best!",likesCount:140},{id:3,message:"Right now, adding posts to the specific profile aren't available yet and the current posts are hardcoded :(",likesCount:1}],newPostText:"",profile:null,status:""},h={addPostCreator:function(e){return{type:"ADD-POST",newPost:e}},setUserProfile:function(e){return{type:"SET_USER_PROFILE",profile:e}},setUserStatus:function(e){return{type:"SET_USER_STATUS",status:e}},deletePost:function(e){return{type:"DELETE_POST",id:e}},savePhotoSuccess:function(e){return{type:"SAVE_PHOTO_SUCCESS",photos:e}},updateNewPostTextCreator:function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:a=t.sent,n(h.setUserProfile(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:a=t.sent,n(h.setUserStatus(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(e);case 3:0===t.sent.resultCode&&n(h.setUserStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:0===(a=t.sent).resultCode&&n(h.savePhotoSuccess(a.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.userId,t.next=3,p(e);case 3:if(0!==(i=t.sent).resultCode){t.next=12;break}if(null==c){t.next=9;break}n(g(c)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(o.a)("editProfile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[{id:5,message:t.newPost,likesCount:0}]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(u.a)(Object(u.a)({},e),{},{newPostText:t.newText});case"SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET_USER_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:Object(i.a)(e.posts.filter((function(e){return e.id!=t.id})))});case"SAVE_PHOTO_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(79),r=n(9),c={dialogs:[{id:1,name:"Dimych",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},{id:2,name:"Lena",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},{id:3,name:"Andrew",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},{id:4,name:"Nastya",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},{id:5,name:"Yana",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},{id:6,name:"Diana",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"}],messages:[{id:1,message:"Hey, how are you?"},{id:2,message:"Good, how are you?"},{id:3,message:"Unfortunately chatting is not available yet. Will be released in the future with socket.io"}]},i={addMessageCreator:function(e){return{type:"ADD-MESSAGE",newMessageText:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:7,message:t.newMessageText}])});default:return e}}},208:function(e,t,n){"use strict";t.a=n.p+"static/media/userPhoto.8c049e35.png"},232:function(e,t,n){e.exports={error:"formControls_error__2klEN"}},287:function(e,t,n){},288:function(e,t,n){},33:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a,r,c=n(233),i=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a25da4cd-7dea-4af1-9083-41bac44635bc"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(a||(a={})),function(e){e[e.Success=0]="Success",e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}))},496:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),i=n.n(c);n(287),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(175),o=n(176),l=n(230),s=n(227),d=(n(288),n(50)),m=n(31),f=function(e){return r.a.createElement("div",null,"Settings")},p=function(e){return r.a.createElement("div",null,"News")},E=function(e){return r.a.createElement("div",null,"Music")},h=n(26),g=n(225),b=n(226),v=n(123),O=n(172),w=n(24),j=n.n(w),y=n(42),S=n(9),_=n(83),k=n(33),T=function(){return k.c.get("security/get-captcha-url").then((function(e){return e.data}))},C=function(){return k.c.get("auth/me").then((function(e){return e.data}))},U=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return k.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},P=function(){return k.c.delete("auth/login")},L={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},x=function(e,t,n,a){return{type:"SET_USER_DATA",data:{email:t,userId:e,login:n,isAuth:a}}},I=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",captchaUrl:e}},R=function(){return function(){var e=Object(y.a)(j.a.mark((function e(t){var n,a,r,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:(n=e.sent).resultCode===k.a.Success&&(a=n.data,r=a.id,c=a.login,i=a.email,t(x(r,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){return function(){var e=Object(y.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,a=n.url,t(I(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(S.a)(Object(S.a)({},e),t.data);case"GET_CAPTCHA_URL_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},G=Object(O.a)("input"),F=Object(b.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(g.a,{placeholder:"Email",type:"text",name:"email",component:G,validate:v.a})),r.a.createElement("div",null,r.a.createElement(g.a,{placeholder:"Password",type:"password",name:"password",component:G,validate:v.a})),r.a.createElement("div",null,r.a.createElement(g.a,{type:"checkbox",name:"rememberMe",component:"input"})," Remember me"),e.captchaUrl&&r.a.createElement("img",{src:e.captchaUrl}),e.captchaUrl&&r.a.createElement(g.a,{placeholder:"Symbols from image",name:"captcha",component:G,validate:v.a}),e.error?r.a.createElement("div",{className:"formSummaryError"}," ",e.error," "):null,r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),D=function(){var e=Object(h.c)(),t=Object(h.d)((function(e){return e.auth.captchaUrl}));if(Object(h.d)((function(e){return e.auth.isAuth})))return r.a.createElement(m.a,{to:"/profile"});return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(F,{captchaUrl:t,onSubmit:function(t){var n,a,r,c;e((n=t.email,a=t.password,r=t.rememberMe,c=t.captcha,function(){var e=Object(y.a)(j.a.mark((function e(t){var i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(n,a,r,c);case 2:(i=e.sent).resultCode===k.a.Success?t(R()):i.resultCode>=k.b.CaptchaIsRequired?t(A()):(u=i.messages.length>0?i.messages[0]:"Some error",t(Object(_.a)("login",{_error:u})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}}))},W={initialised:!1},M=function(){return{type:"INITIALISED_SUCCESS"}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALISED_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{initialised:!0});default:return e}},z=n(29),q=n(125),V=n(206),X=n(173),Y={friends:[{id:1,name:"Dimych",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},{id:2,name:"Lena",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},{id:3,name:"Andrew",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},{id:4,name:"Nastya",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},{id:5,name:"Yana",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},{id:6,name:"Diana",avatarURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"}]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;return e},J=n(79),K={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return k.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===a?"":"&friend=".concat(a))).then((function(e){return e.data}))},unfollow:function(e){return k.c.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return k.c.post("follow/".concat(e)).then((function(e){return e.data}))}},Q={users:[],pageSize:10,totalUsersCount:21,currentPage:1,isFetching:!1,followinInProgress:[],filter:{term:"",friend:null}},$=function(e){return{type:"FOLLOW",userId:e}},Z=function(e){return{type:"UNFOLLOW",userId:e}},ee=function(e){return{type:"SET_USERS",users:e}},te=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},ne=function(e){return{type:"SET_FILTER",payload:e}},ae=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},re=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},ce=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ie=function(e,t,n){return function(){var a=Object(y.a)(j.a.mark((function a(r){var c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(re(!0)),r(te(e)),r(ne(n)),a.next=5,K.getUsers(e,t,n.term,n.friend);case 5:c=a.sent,r(re(!1)),r(ee(c.items)),r(ae(c.totalCount));case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},ue=function(){var e=Object(y.a)(j.a.mark((function e(t,n,a,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(ce(!0,t)),e.next=3,a(t);case 3:0==e.sent.resultCode&&n(r(t)),n(ce(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(S.a)(Object(S.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(S.a)(Object(S.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case"SET_FILTER":return Object(S.a)(Object(S.a)({},e),{},{filter:t.payload});case"SET_TOTAL_USERS_COUNT":return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{followinInProgress:t.isFetching?[].concat(Object(J.a)(e.followinInProgress),[t.userId]):e.followinInProgress.filter((function(e){return e!=t.userId}))});default:return e}},le=n(236),se=n(229),de=Object(z.c)({profilePage:X.b,dialogsPage:V.b,sidebar:B,usersPage:oe,auth:N,form:se.a,app:H}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,fe=Object(z.e)(de,me(Object(z.a)(le.a))),pe=n(122),Ee=n(208),he=function(e){var t=e.user,n=Object(pe.a)(e,["user"]);return r.a.createElement("div",{style:{width:400,display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{padding:10}},r.a.createElement(d.c,{to:"/profile/"+t.id},r.a.createElement("img",{style:{width:130,height:130,borderRadius:65},src:null!=t.photos.small?t.photos.small:Ee.a,alt:"avatar"}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.unfollow(t.id)}},"unfollow"):r.a.createElement("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.follow(t.id)}},"follow"))),r.a.createElement("div",{style:{width:200,textAlign:"start",display:"flex",justifyContent:"start",marginTop:40,color:"white"}},r.a.createElement("span",null,r.a.createElement("div",null,"Name: ",t.name),t.status?r.a.createElement("div",null,"Status: ",t.status):r.a.createElement("div",null,"User status is empty")),r.a.createElement("span",null)))},ge=n(114),be=function(e){return e.usersPage.users},ve=function(e){return e.usersPage.pageSize},Oe=function(e){return e.usersPage.totalUsersCount},we=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.isFetching},ye=function(e){return e.usersPage.followinInProgress},Se=function(e){return e.usersPage.filter},_e=n(506),ke=function(e){return{}},Te=r.a.memo((function(e){var t=Object(h.d)(Se);return r.a.createElement("div",null,r.a.createElement(ge.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:ke,onSubmit:function(t,n){var a=n.setSubmitting,r={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(r),a(!1)}},(function(e){e.values;var t=e.isSubmitting;return r.a.createElement(ge.b,{style:{display:"flex",flexDirection:"column"}},r.a.createElement(ge.a,{title:"Search by username",type:"text",name:"term",style:{margin:10}}),r.a.createElement(ge.a,{name:"friend",as:"select",style:{margin:10}},r.a.createElement("option",{value:"null"},"All"),r.a.createElement("option",{value:"true"},"Only followed"),r.a.createElement("option",{value:"false"},"Only unfollowed")),r.a.createElement("button",{type:"submit",disabled:t},r.a.createElement(_e.a,null)," Find"))})))})),Ce=n(239),Ue=n.n(Ce),Pe=n(501),Le=function(){var e=Object(m.f)(),t=Object(h.c)(),n=Object(h.d)(be),c=Object(h.d)(Oe),i=Object(h.d)(we),u=Object(h.d)(ve),o=Object(h.d)(Se),l=Object(h.d)(ye);Object(a.useEffect)((function(){var n=Ue.a.parse(e.location.search),a=i,r=o;n.page&&(a=Number(n.page)),n.term&&(r=Object(S.a)(Object(S.a)({},r),{},{term:n.term})),n.friend&&(r=Object(S.a)(Object(S.a)({},r),{},{friend:"null"===n.friend?null:"true"===n.friend})),t(ie(a,u,r))}),[]),Object(a.useEffect)((function(){e.push({pathname:"/users",search:"?term=".concat(o.term,"&friend=").concat(o.friend,"&page=").concat(i)})}),[o,i]);var s=function(e){t(function(e){return function(){var t=Object(y.a)(j.a.mark((function t(n){var a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=K.follow.bind(K),r=$,t.next=4,ue(e,n,a,r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},d=function(e){t(function(e){return function(){var t=Object(y.a)(j.a.mark((function t(n){var a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=K.unfollow.bind(K),r=Z,t.next=4,ue(e,n,a,r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return r.a.createElement("div",{style:{padding:50}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:10}},r.a.createElement(Pe.a,{showQuickJumper:!0,defaultCurrent:1,total:c,onChange:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;t(ie(e+1,n,o))}}),r.a.createElement(Te,{onFilterChanged:function(e){t(ie(1,u,e))}})),r.a.createElement("div",null,n.map((function(e){return r.a.createElement(he,{key:e.id,user:e,followingInProgress:l,unfollow:d,follow:s})}))))},xe=function(e){var t=Object(h.d)(je);return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(q.a,null):null,r.a.createElement(Le,null))},Ie=(n(449),n(500)),Re=n(502),Ae=n(507),Ne=n(508),Ge=n(509),Fe=function(e){return e.auth.isAuth},De=function(e){return e.auth.login},We=n(504),Me=n(505),He=n(503),ze=n(252),qe=n.n(ze),Ve=function(){var e=Ie.a.Header,t=Object(h.d)(Fe),n=Object(h.d)(De),a=Object(h.c)();return r.a.createElement(e,{className:"site-layout-sub-header-background",style:{padding:0}},r.a.createElement(We.a,null,r.a.createElement(Me.a,{span:19}),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(Me.a,{span:1},r.a.createElement(d.b,{to:"/profile"},r.a.createElement(qe.a,{style:{backgroundColor:"#87d068"},icon:r.a.createElement(Ae.a,null)}))),r.a.createElement(Me.a,{span:4},r.a.createElement("div",{style:{color:"#fff"}},n," ",r.a.createElement(He.a,{style:{marginLeft:10},onClick:function(){a(function(){var e=Object(y.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:e.sent.data.resultCode===k.a.Success&&t(x(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log out")," "))):r.a.createElement(Me.a,{span:5},r.a.createElement("div",null,r.a.createElement(He.a,{style:{marginRight:15}},r.a.createElement(d.b,{to:"/login"},"Login")),r.a.createElement(He.a,null,r.a.createElement("a",{target:"_blank",href:"https://social-network.samuraijs.com/signUp"},"Create an account"))))))},Xe=n.p+"static/media/logo.e7c70288.png",Ye=Ie.a.Content,Be=Ie.a.Footer,Je=Ie.a.Sider,Ke=r.a.lazy((function(){return n.e(4).then(n.bind(null,516))})),Qe=r.a.lazy((function(){return n.e(3).then(n.bind(null,515))})),$e=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initialiseApp(),window.addEventListener("error",(function(e){return console.log("Error occurred: "+e.error.message),!1}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("error",(function(e){return console.log("Error occurred: "+e.error.message),!1}))}},{key:"render",value:function(){return this.props.initialised?r.a.createElement(Ie.a,null,r.a.createElement(Je,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)}},r.a.createElement(Re.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"]},r.a.createElement(Re.a.Item,{key:"logo",style:{height:100}},r.a.createElement(d.c,{to:"/profile",activeClassName:"activeLink"},r.a.createElement("div",null,r.a.createElement("img",{style:{height:125,objectFit:"contain"},src:Xe}))," ")),r.a.createElement(Re.a.Item,{key:"1",icon:r.a.createElement(Ae.a,null)},r.a.createElement(d.c,{to:"/profile",activeClassName:"activeLink"},"Profile")),r.a.createElement(Re.a.Item,{key:"2",icon:r.a.createElement(Ne.a,null)},r.a.createElement(d.c,{to:"/dialogs",activeClassName:"activeLink"},"Messages")),r.a.createElement(Re.a.Item,{key:"3",icon:r.a.createElement(Ge.a,null)},r.a.createElement(d.c,{to:"/users",activeClassName:"activeLink"},"Users")))),r.a.createElement(Ie.a,null,r.a.createElement(Ve,null),r.a.createElement(Ye,{style:{margin:"24px 16px 0"}},r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(m.a,{to:"/profile"})}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Qe,null)}}),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(Ke,null)}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(xe,{pageTitle:"Users"})}}),r.a.createElement(m.b,{path:"/news",render:p}),r.a.createElement(m.b,{path:"/music",render:E}),r.a.createElement(m.b,{path:"/settings",render:f}))))),r.a.createElement(Be,{style:{textAlign:"center"}},"\xa92020 Created by Nazar Pidhirnyi"))):r.a.createElement(q.a,null)}}]),n}(r.a.Component),Ze=Object(z.d)(m.g,Object(h.b)((function(e){return{initialised:e.app.initialised}}),{initialiseApp:function(){return function(e){var t=e(R());Promise.all([t]).then((function(){e(M())}))}}}))($e),et=function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,{store:fe},r.a.createElement(Ze,null)))};i.a.render(r.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[496,1,2]]]);
//# sourceMappingURL=main.4f2698b2.chunk.js.map