(function(){"use strict";var t={287:function(t,e,s){var o=s(471),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],a={name:"App"},i=a,c=s(656),u=(0,c.A)(i,n,r,!1,null,null,null),l=u.exports,p=s(173),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-container"},[e("div",{staticClass:"typing-container"},[e("p",{staticClass:"typing-text"},[t._v(t._s(t.typingText))])]),e("h1",{staticClass:"title"},[t._v("Anontalk!")]),e("div",{staticClass:"login"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e("div",[e("label",{attrs:{for:"username"}},[t._v("用户名:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),e("div",[e("label",{attrs:{for:"password"}},[t._v("密码:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("button",{attrs:{type:"submit"}},[t._v("登录")])]),e("button",{on:{click:t.goToRegister}},[t._v("注册")])])])},d=[],h=s(275),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"exit-button",on:{click:t.exitPage}},[e("button",[t._v("退出")])])},g=[],f={name:"ExitButton",methods:{async exitPage(){try{await h.A.post("/api/logout"),window.close(),window.location.href="about:blank"}catch(t){console.error("Error logging out:",t),alert("登出失败，请重试")}}}},y=f,w=(0,c.A)(y,v,g,!1,null,"6e06df22",null),b=w.exports,_={name:"Login",data(){return{username:"",password:"",typingText:""}},mounted(){this.startTypingEffect("我与世界相遇，世界充满梦想  ----欢迎来到 Anontalk 聊天室")},methods:{async login(){try{const t=await h.A.post("/api/login",{username:this.username,password:this.password});if(t.data.success){const e=t.data.user.id;this.$router.push({path:"/home",query:{userId:e}})}else alert("用户名或密码错误")}catch(t){console.error("Error logging in:",t),alert("登录失败，请重试")}},goToRegister(){this.$router.push("/register")},startTypingEffect(t){let e=0;const s=150,o=()=>{e<t.length&&(this.typingText+=t.charAt(e),e++,setTimeout(o,s))};o()}}},C=_,x=(0,c.A)(C,m,d,!1,null,null,null),k=x.exports,I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"register-container"},[e("h1",{staticClass:"title"},[t._v("Anontalk!")]),e("div",{staticClass:"register"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[e("div",[e("label",{attrs:{for:"phone"}},[t._v("手机号:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",id:"phone",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),e("div",[e("label",{attrs:{for:"username"}},[t._v("用户名:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),e("div",[e("label",{attrs:{for:"password"}},[t._v("密码:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("div",[e("label",{attrs:{for:"conpassword"}},[t._v("确认密码:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.conpassword,expression:"conpassword"}],attrs:{type:"password",id:"conpassword",required:""},domProps:{value:t.conpassword},on:{input:function(e){e.target.composing||(t.conpassword=e.target.value)}}})]),e("button",{attrs:{type:"submit"}},[t._v("注册")]),e("p",{staticClass:"typing-text2"},[t._v(t._s(t.typingText2))])])]),e("ExtiButton")],1)},P=[];const E=h.A.create({baseURL:"http://localhost:8089/api",headers:{"Content-Type":"application/json"}}),T=async t=>{try{const e=await E.post("/register",t);return e.data}catch(e){throw console.error("Error creating user:",e),e}},S=async(t,e)=>{try{const s=await E.put(`/users/${t}`,e);return s.data}catch(s){throw console.error("Error updating user:",s),s}},A=async t=>{try{const e=await E.get(`/users/${t}`);return e.data}catch(e){throw console.error("Error fetching user data:",e),e}};var $={name:"Register",components:{ExitButton:b},data(){return{phone:"",username:"",password:"",conpassword:"",typingText2:""}},mounted(){this.startTypingEffect2("加入我们，获得不一样的交友体验~")},methods:{async register(){if(this.password!==this.conpassword)return void alert("密码和确认密码不一致");const t={phone:this.phone,username:this.username,password:this.password};try{const e=await T(t);console.log("User created successfully:",e),this.$router.push("/home")}catch(e){console.error("Error creating user:",e),alert("注册失败，请重试")}},startTypingEffect2(t){let e=0;const s=100,o=()=>{e<t.length&&(this.typingText2+=t.charAt(e),e++,setTimeout(o,s))};o()}}},q=$,M=(0,c.A)(q,I,P,!1,null,null,null),N=M.exports,U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h2",{staticClass:"home-title"},[t._v("欢迎来到主页喵 ^_^")]),e("h3",{staticClass:"home-subtitle"},[t._v("请选择匹配模式：")]),e("div",{staticClass:"sidebar"},[e("button",{staticClass:"icon-button",on:{click:t.goToSettings}},[e("img",{staticClass:"button-icon",attrs:{src:s(501),alt:"个人设置"}}),e("span",[t._v("个人设置")])]),e("button",{staticClass:"icon-button",on:{click:t.goToSquare}},[e("img",{staticClass:"button-icon",attrs:{src:s(851),alt:"交友广场"}}),e("span",[t._v("交友广场")])])]),e("div",{staticClass:"main-content"},[e("div",{staticClass:"buttons-container"},[e("button",{staticClass:"match-button",on:{click:t.matchNormalUser}},[e("img",{staticClass:"button-icon",attrs:{src:s(783),alt:"普通用户匹配"}}),e("span",[t._v("普通用户匹配")])]),e("button",{staticClass:"match-button",on:{click:t.matchVipUser}},[e("img",{staticClass:"button-icon",attrs:{src:s(265),alt:"会员用户匹配"}}),e("span",[t._v("会员用户匹配")])])])]),e("ExitButton")],1)},O=[];const B=h.A.create({baseURL:"http://localhost:8089/api",headers:{"Content-Type":"application/json"}}),j=async()=>{try{const t=await B.get("/match?type=normal");return t.data}catch(t){throw console.error("Error matching normal user:",t),t}},D=async()=>{try{const t=await B.get("/match?type=vip");return t.data}catch(t){throw console.error("Error matching VIP user:",t),t}};var R={name:"Home",components:{ExitButton:b},methods:{async matchNormalUser(){try{const t=await j();this.$router.push({path:"/chat",query:{type:"normal",user:t.id}})}catch(t){console.error("Error matching normal user:",t),alert("匹配失败，请重试")}},async matchVipUser(){try{const t=await D();this.$router.push({path:"/chat",query:{type:"vip",user:t.id}})}catch(t){console.error("Error matching VIP user:",t),alert("匹配失败，请重试")}},goToSettings(){this.$router.push("/settings")},goToSquare(){this.$router.push("/square")}}},L=R,V=(0,c.A)(L,U,O,!1,null,"40cfeeee",null),H=V.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"chat"},[e("div",{staticClass:"header"},[e("h2",[t._v("聊天界面")]),e("p",[t._v("匹配类型: "+t._s(t.matchType))])]),e("div",{staticClass:"sidebar"},[e("button",{staticClass:"icon-button",on:{click:t.goToSettings}},[e("img",{staticClass:"button-icon",attrs:{src:s(501),alt:"个人设置"}}),e("span",[t._v("个人设置")])]),e("button",{staticClass:"icon-button",on:{click:t.goToSquare}},[e("img",{staticClass:"button-icon",attrs:{src:s(851),alt:"交友广场"}}),e("span",[t._v("交友广场")])])]),e("div",{staticClass:"chat-container"},[e("div",{staticClass:"chat-box"},[e("div",{staticClass:"chat-header"},[e("span",[t._v("聊天")]),e("button",{on:{click:t.closeChat}},[t._v("X")])]),e("div",{staticClass:"chat-content"},t._l(t.messages,(function(s,o){return e("div",{key:o,class:{"my-message":s.isMine,"other-message":!s.isMine}},[t._v(" "+t._s(s.text)+" ")])})),0),e("div",{staticClass:"chat-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newMessage,expression:"newMessage"}],attrs:{type:"text",placeholder:"输入消息..."},domProps:{value:t.newMessage},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage.apply(null,arguments)},input:function(e){e.target.composing||(t.newMessage=e.target.value)}}}),e("button",{on:{click:t.sendMessage}},[t._v("发送")])]),e("button",{on:{click:t.loadChatHistory}},[t._v("聊天记录")])])]),e("ExitButton")],1)},F=[],X=s(667);const z=h.A.create({baseURL:"http://localhost:8089/api/messages",headers:{"Content-Type":"application/json"}}),G=async t=>{try{const e=await z.get(`/${t}`);return e.data}catch(e){throw console.error("Error fetching chat history:",e),e}};var J={name:"Chat",components:{ExitButton:b},data(){return{messages:[],newMessage:"",socket:null,currentUserId:localStorage.getItem("currentUserId")}},computed:{matchType(){return this.$route.query.type}},async mounted(){this.socket=(0,X.Ay)("http://localhost:3000"),this.socket.on("message",(t=>{this.messages.push({text:t,isMine:!1}),console.log("Received message:",t)}));const t=this.$route.query.user;try{const e=await G(t);this.messages=e.map((t=>({text:t.text,isMine:t.senderId===this.currentUserId})))}catch(e){console.error("Error fetching chat history:",e)}},methods:{sendMessage(){if(""!==this.newMessage.trim()){const t={chatId:this.$route.query.user,senderId:this.currentUserId,text:this.newMessage};this.socket.emit("message",t),this.messages.push({text:this.newMessage,isMine:!0}),this.newMessage=""}},closeChat(){console.log("Closing chat"),this.socket.disconnect(),this.$router.push("/home")},goToSettings(){this.$router.push("/settings")},goToSquare(){this.$router.push("/square")}},beforeDestroy(){this.socket&&this.socket.disconnect()}},K=J,Q=(0,c.A)(K,W,F,!1,null,"c82e56cc",null),Y=Q.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"settings"},[e("h2",[t._v("个人设置")]),e("div",{staticClass:"settings-section"},[e("h3",[t._v("个人信息")]),e("form",{on:{submit:function(e){return e.preventDefault(),t.updatePersonalInfo.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"userId"}},[t._v("用户ID")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],attrs:{type:"text",id:"userId",disabled:""},domProps:{value:t.userId},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"username"}},[t._v("用户名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.personalInfo.username,expression:"personalInfo.username"}],attrs:{type:"text",id:"username"},domProps:{value:t.personalInfo.username},on:{input:function(e){e.target.composing||t.$set(t.personalInfo,"username",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"gender"}},[t._v("性别")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.personalInfo.gender,expression:"personalInfo.gender"}],attrs:{id:"gender"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.personalInfo,"gender",e.target.multiple?s:s[0])}}},[e("option",{attrs:{value:"male"}},[t._v("男")]),e("option",{attrs:{value:"female"}},[t._v("女")]),e("option",{attrs:{value:"other"}},[t._v("其他")])])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"hobbies"}},[t._v("爱好")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.personalInfo.hobbies,expression:"personalInfo.hobbies"}],attrs:{type:"text",id:"hobbies"},domProps:{value:t.personalInfo.hobbies},on:{input:function(e){e.target.composing||t.$set(t.personalInfo,"hobbies",e.target.value)}}})]),e("button",{attrs:{type:"submit"}},[t._v("保存个人信息")])])]),e("div",{staticClass:"settings-section"},[e("h3",[t._v("账号安全")]),e("form",{on:{submit:function(e){return e.preventDefault(),t.updateAccountSecurity.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("新密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountSecurity.password,expression:"accountSecurity.password"}],attrs:{type:"password",id:"password"},domProps:{value:t.accountSecurity.password},on:{input:function(e){e.target.composing||t.$set(t.accountSecurity,"password",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"phone"}},[t._v("手机号")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountSecurity.phone,expression:"accountSecurity.phone"}],attrs:{type:"text",id:"phone"},domProps:{value:t.accountSecurity.phone},on:{input:function(e){e.target.composing||t.$set(t.accountSecurity,"phone",e.target.value)}}})]),e("button",{attrs:{type:"submit"}},[t._v("保存账号安全设置")])])]),e("ExitButton")],1)},tt=[],et={name:"Settings",components:{ExitButton:b},data(){return{userId:0,personalInfo:{username:"",gender:"",hobbies:""},accountSecurity:{password:"",phone:""}}},async created(){const t=localStorage.getItem("currentUserId");if(t)try{const e=await A(t);this.userId=e.id,this.personalInfo.username=e.username,this.personalInfo.gender=e.gender,this.personalInfo.hobbies=e.hobbies,this.accountSecurity.phone=e.phone}catch(e){console.error("Error fetching user data:",e)}},methods:{async updatePersonalInfo(){const t={username:this.personalInfo.username,gender:this.personalInfo.gender,hobbies:this.personalInfo.hobbies};try{const e=await S(this.userId,t);console.log("更新个人信息:",e),alert("个人信息已更新")}catch(e){console.error("Error updating personal info:",e),alert("更新个人信息失败，请重试")}},async updateAccountSecurity(){const t={password:this.accountSecurity.password,phone:this.accountSecurity.phone};try{const e=await S(this.userId,t);console.log("更新账号安全设置:",e),alert("账号安全设置已更新")}catch(e){console.error("Error updating account security:",e),alert("更新账号安全设置失败，请重试")}}}},st=et,ot=(0,c.A)(st,Z,tt,!1,null,"467d1a2c",null),nt=ot.exports,rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"square"},[e("button",{staticClass:"back-button",on:{click:t.goBack}},[e("img",{staticClass:"button-icon",attrs:{src:s(935),alt:"返回"}}),e("span",[t._v("返回")])]),e("h2",{staticClass:"animated-title"},[t._v("交友广场")]),e("div",{staticClass:"content"},[e("div",{staticClass:"posts"},[e("h3",[t._v("帖子")]),e("div",{staticClass:"post-grid"},t._l(t.posts,(function(s,o){return e("div",{key:o,staticClass:"post",on:{click:function(e){return t.viewPost(s)}}},[e("h4",[t._v(t._s(s.title))]),e("p",[t._v(t._s(s.content))])])})),0)]),e("div",{staticClass:"post-form"},[e("h3",[t._v("发帖")]),e("form",{on:{submit:function(e){return e.preventDefault(),t.submitPost.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("标题")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.title,expression:"newPost.title"}],attrs:{type:"text",id:"title",required:""},domProps:{value:t.newPost.title},on:{input:function(e){e.target.composing||t.$set(t.newPost,"title",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"content"}},[t._v("内容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPost.content,expression:"newPost.content"}],attrs:{id:"content",required:""},domProps:{value:t.newPost.content},on:{input:function(e){e.target.composing||t.$set(t.newPost,"content",e.target.value)}}})]),e("button",{attrs:{type:"submit"}},[t._v("发布")])])])])])},at=[];const it=h.A.create({baseURL:"http://localhost:8089/api/posts",headers:{"Content-Type":"application/json"}}),ct=async t=>{try{const e=await it.post("/",t);return e.data}catch(e){throw console.error("Error creating post:",e),e}},ut=async()=>{try{const t=await it.get("/");return t.data}catch(t){throw console.error("Error fetching posts:",t),t}},lt=async t=>{try{const e=await it.get(`/${t}`);return e.data}catch(e){throw console.error("Error fetching post:",e),e}},pt=async(t,e)=>{try{const s=await it.post(`/${t}/like`,null,{params:{username:e}});return s.data}catch(s){throw console.error("Error liking post:",s),s}},mt=async(t,e)=>{try{const s=await it.post(`/${t}/comment`,e);return s.data}catch(s){throw console.error("Error commenting on post:",s),s}};var dt={name:"Square",data(){return{newPost:{title:"",content:""},posts:[]}},async created(){this.posts=await ut()},methods:{async submitPost(){if(this.newPost.title&&this.newPost.content){const e={...this.newPost,username:localStorage.getItem("currentUserId")};try{const t=await ct(e);this.posts.push(t),this.newPost.title="",this.newPost.content=""}catch(t){console.error("Error creating post:",t)}}},viewPost(t){this.$router.push({name:"PostDetail",params:{post:t}})},goBack(){this.$router.go(-1)}}},ht=dt,vt=(0,c.A)(ht,rt,at,!1,null,"21ff4942",null),gt=vt.exports,ft=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"typewriter"},[e("h1",[t._v(t._s(t.typewriterText))])]),e("div",{staticClass:"post-detail"},[e("h2",[t._v(t._s(t.post.title))]),e("p",[t._v(t._s(t.post.content))]),e("div",{staticClass:"actions"},[e("button",{staticClass:"like-button",on:{click:t.likePost}},[t._v("点赞 "+t._s(t.likes))])]),e("div",{staticClass:"comments"},[e("h3",[t._v("评论区不是无人区，请文明发言~")]),t._l(t.comments,(function(s,o){return e("div",{key:o,staticClass:"comment"},[e("p",[t._v(t._s(s))])])}))],2),e("form",{staticClass:"comment-form",on:{submit:function(e){return e.preventDefault(),t.addComment.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"comment"}},[t._v("添加评论")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment,expression:"newComment"}],attrs:{type:"text",id:"comment",required:""},domProps:{value:t.newComment},on:{input:function(e){e.target.composing||(t.newComment=e.target.value)}}})]),e("button",{staticClass:"submit-button",attrs:{type:"submit"}},[t._v("发布评论")])]),e("button",{staticClass:"back-button",on:{click:t.goBack}},[e("img",{staticClass:"button-icon",attrs:{src:s(935),alt:"返回"}}),e("span",[t._v("返回")])])])])},yt=[],wt={name:"PostDetail",data(){return{post:{},likes:0,comments:[],newComment:"",typewriterText:""}},async created(){const t=this.$route.params.post.id,e=await lt(t);this.post=e,this.likes=e.likes.length,this.comments=e.comments},mounted(){this.typeWriterEffect("天空的飞鸟飞的那么遥远")},methods:{async likePost(){const t=this.post.id,e=localStorage.getItem("currentUserId"),s=await pt(t,e);this.likes=s.likes.length},async addComment(){if(this.newComment){const t=this.post.id,e={username:localStorage.getItem("currentUserId"),content:this.newComment},s=await mt(t,e);this.comments=s.comments,this.newComment=""}},goBack(){this.$router.push("/square")},typeWriterEffect(t){let e=0;const s=100,o=()=>{e<t.length&&(this.typewriterText+=t.charAt(e),e++,setTimeout(o,s))};o()}}},bt=wt,_t=(0,c.A)(bt,ft,yt,!1,null,"f02c6f32",null),Ct=_t.exports;o.Ay.use(p.Ay);const xt=[{path:"/",component:k},{path:"/register",component:N},{path:"/home",component:H},{path:"/chat",component:Y},{path:"/settings",component:nt},{path:"/square",component:gt},{path:"/post/:id",name:"PostDetail",component:Ct,props:!0}],kt=new p.Ay({routes:xt});var It=kt;o.Ay.config.productionTip=!1,new o.Ay({router:It,render:t=>t(l)}).$mount("#app")},935:function(t,e,s){t.exports=s.p+"img/back-icon.c8b809ad.png"},783:function(t,e,s){t.exports=s.p+"img/normal-user-icon.124e69f0.png"},501:function(t,e,s){t.exports=s.p+"img/settings-icon.d00d964f.png"},851:function(t,e,s){t.exports=s.p+"img/square-icon.17f9bc72.png"},265:function(t,e,s){t.exports=s.p+"img/vip-user-icon.659dccc7.png"}},e={};function s(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,o,n,r){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],n=t[l][1],r=t[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(s.O).every((function(t){return s.O[t](o[c])}))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){t.splice(l--,1);var u=n();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[o,n,r]}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,r,a=o[0],i=o[1],c=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(c)var l=c(s)}for(e&&e(o);u<a.length;u++)r=a[u],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(l)},o=self["webpackChunkanontalk2"]=self["webpackChunkanontalk2"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[504],(function(){return s(287)}));o=s.O(o)})();
//# sourceMappingURL=app-legacy.edbd1b04.js.map