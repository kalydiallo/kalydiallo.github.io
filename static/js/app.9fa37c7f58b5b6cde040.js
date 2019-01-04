webpackJsonp([1],{EUBf:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),s=a("kxiW"),n=a.n(s),r={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{logout:function(){var e=this;n.a.auth().signOut().then(function(){e.$router.go({path:e.$router.path})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrapper green"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v(" GSA Database Template ")]),e._v(" "),a("ul",{staticClass:"right"},[e.isLoggedIn?a("li",[a("span",{staticClass:"email black-text"},[e._v(e._s(e.currentUser))])]):e._e(),e._v(" "),e.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Dashboard")])],1):e._e(),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),e._v(" "),e.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Logout")])]):e._e()])],1)])])},staticRenderFns:[]};var l={name:"App",components:{Navbar:a("VU/8")(r,o,!1,function(e){a("EUBf")},"data-v-3e533dbc",null).exports}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},c=a("VU/8")(l,m,!1,null,null,null).exports,u=a("/ocq"),d=(a("881v"),n.a.initializeApp({apiKey:"AIzaSyA3AupakPU7Cwc6xL3Lq_vfNKGL6K4_VIU",authDomain:"gsa-database.firebaseapp.com",databaseURL:"https://gsa-database.firebaseio.com",projectId:"gsa-database",storageBucket:"gsa-database.appspot.com",messagingSenderId:"974148588019"}).firestore()),p={name:"dashboard",data:function(){return{members:[]}},created:function(){var e=this;d.collection("GSA").orderBy("major").get().then(function(t){t.forEach(function(t){var a={id:t.id,member_id:t.data().gsa_id,name:t.data().name,email:t.data().email,phone:t.data().phone,major:t.data().major,position:t.data().position};e.members.push(a)})})}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.members,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.major))]),e._v("\n    "+e._s(t.member_id)+": "+e._s(t.name)+"\n\n    "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-Member",params:{member_id:t.member_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Members")])])}]},_=a("VU/8")(p,v,!1,null,null,null).exports,h={name:"new-member",data:function(){return{gsa_id:null,name:null,major:null,email:null,phone:null,position:null}},methods:{saveMember:function(){var e=this;d.collection("GSA").add({gsa_id:this.member_id,name:this.name,major:this.major,email:this.email,phone:this.phone,position:this.position}).then(function(t){e.$router.push("/")}).catch(function(e){return console.log(err)})}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-member"}},[a("h3",[e._v("New Member")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveMember(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.member_id,expression:"member_id"}],attrs:{type:"text",required:""},domProps:{value:e.member_id},on:{input:function(t){t.target.composing||(e.member_id=t.target.value)}}}),e._v(" "),a("label",[e._v("GSA Member ID#")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.major,expression:"major"}],attrs:{type:"text",required:""},domProps:{value:e.major},on:{input:function(t){t.target.composing||(e.major=t.target.value)}}}),e._v(" "),a("label",[e._v("major")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",[e._v("email")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),a("label",[e._v("Phone")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v("position (NA if 'none')")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},g=a("VU/8")(h,f,!1,null,null,null).exports,b={name:"view-member",data:function(){return{gsa_id:null,name:null,email:null,major:null,phone:null,position:null}},beforeRouteEnter:function(e,t,a){d.collection("GSA").where("gsa_id","==",e.params.member_id).get().then(function(e){e.forEach(function(e){a(function(t){t.member_id=e.data().gsa_id,t.name=e.data().name,t.email=e.data().email,t.major=e.data().major,t.phone=e.data().phone,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;d.collection("GSA").where("gsa_id","==",this.$route.params.member_id).get().then(function(t){t.forEach(function(t){e.member_id=t.data().gsa_id,e.name=t.data().name,e.email=t.data().email,e.major=t.data().major,e.phone=t.data().phone,e.position=t.data().position})})},deletehim:function(){var e=this;confirm("Are you sure?")&&d.collection("GSA").where("gsa_id","==",this.$route.params.member_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-member"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[a("b",[e._v("GSA Member ID#:")]),e._v(" "+e._s(e.member_id))]),e._v(" "),a("li",{staticClass:"collection-item"},[a("b",[e._v("major:")]),e._v(" "+e._s(e.major))]),e._v(" "),a("li",{staticClass:"collection-item"},[a("b",[e._v("email:")]),e._v(" "+e._s(e.email))]),e._v(" "),a("li",{staticClass:"collection-item"},[a("b",[e._v("phone:")]),e._v(" "+e._s(e.phone))]),e._v(" "),a("li",{staticClass:"collection-item"},[a("b",[e._v("position:")]),e._v(" "+e._s(e.position))])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deletehim}},[e._v("Delete")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-member",params:{member_id:e.member_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},C=a("VU/8")(b,w,!1,null,null,null).exports,x={name:"edit-member",data:function(){return{gsa_id:null,name:null,email:null,major:null,phone:null,position:null}},beforeRouteEnter:function(e,t,a){d.collection("GSA").where("gsa_id","==",e.params.member_id).get().then(function(e){e.forEach(function(e){a(function(t){t.member_id=e.data().gsa_id,t.name=e.data().name,t.email=e.data().email,t.major=e.data().major,t.phone=e.data().phone,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;d.collection("GSA").where("gsa_id","==",this.$route.params.member_id).get().then(function(t){t.forEach(function(t){e.member_id=t.data().gsa_id,e.name=t.data().name,e.email=t.data().email,e.major=t.data().major,e.phone=t.data().phone,e.position=t.data().position})})},updateMember:function(){var e=this;d.collection("GSA").where("gsa_id","==",this.$route.params.member_id).get().then(function(t){t.forEach(function(t){t.ref.update({gsa_id:e.member_id,name:e.name,major:e.major,email:e.email,phone:e.phone,position:e.position}).then(function(){e.$router.push({name:"view-Member",params:{gsa_id:e.member_id}})})})})}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-member"}},[a("h3",[e._v("Edit Member")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateMember(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.member_id,expression:"member_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.member_id},on:{input:function(t){t.target.composing||(e.member_id=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.major,expression:"major"}],attrs:{type:"text",placeholder:"major",required:""},domProps:{value:e.major},on:{input:function(t){t.target.composing||(e.major=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"phone",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",placeholder:"position (NA if 'none')",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},j=a("VU/8")(x,y,!1,null,null,null).exports,A={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){alert("you are logged in as $(user.email)"),t.$router.go({path:t.$router.path})},function(e){alert(e.message)}),e.preventDefault()}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel green white-text center"},[a("h3",[e._v("Login")]),e._v(" "),a("form",[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:e.login}},[e._v("Login")])])])])])])])},staticRenderFns:[]},E=a("VU/8")(A,k,!1,null,null,null).exports,$={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){alert("Account created for $(user.email)"),t.$router.go({path:t.$router.path})},function(e){alert(e.message)}),e.preventDefault()}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[e._v("Register")]),e._v(" "),a("form",[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:e.register}},[e._v("Register")])])])])])])])},staticRenderFns:[]},P=a("VU/8")($,N,!1,null,null,null).exports;i.a.use(u.a);var q=new u.a({routes:[{path:"/",name:"dashboard",component:_,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:E,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:P,meta:{requiresGuest:!0}},{path:"/new",name:"new-Member",component:g,meta:{requiresAuth:!0}},{path:"/:member_id",name:"view-Member",component:C,meta:{requiresAuth:!0}},{path:"/edit/:member_id",name:"edit-member",component:j,meta:{requiresAuth:!0}}]});q.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?n.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&n.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()});var U=q;i.a.config.productionTip=!1;var S=void 0;n.a.auth().onAuthStateChanged(function(e){S||(S=new i.a({el:"#app",router:U,components:{App:c},template:"<App/>"}))})}},["NHnr"]);
//# sourceMappingURL=app.9fa37c7f58b5b6cde040.js.map