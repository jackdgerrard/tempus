webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("Sazm"),n=s.n(i);s("3VHS");var l=n.a.initializeApp({apiKey:"AIzaSyDcILDzdq07zABF5IjubMpPVwKZ-SMEeEM",authDomain:"tempusvuejs.firebaseapp.com",databaseURL:"https://tempusvuejs.firebaseio.com",projectId:"tempusvuejs",storageBucket:"tempusvuejs.appspot.com",messagingSenderId:"527943828063"}).firestore(),r=s("NYxO"),o={name:"navbar",methods:{logout:function(){n.a.auth().signOut().then(()=>{this.$store.state.authorized=!1,this.$router.replace("login")})}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"nav-wrapper z-depth-4"},[s("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v("Tempus")]),t._v(" "),s("ul",{staticClass:"right ",attrs:{id:"nav-mobile"}},[s("li",[this.$store.state.authorized?t._e():s("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),s("li",[this.$store.state.authorized?t._e():s("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1),t._v(" "),s("li",[this.$store.state.authorized?s("router-link",{attrs:{to:"/"},nativeOn:{click:function(e){t.logout(e)}}},[t._v("Logout")]):t._e()],1)])],1)},staticRenderFns:[]},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"page-footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col l6 s12"},[s("h5",[t._v("Tempus")]),t._v(" "),s("p",[t._v("Created by: "),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/Snowbird4"}},[t._v("Rokas")]),s("br"),t._v(" and "),s("a",{attrs:{href:"http://jackdgerrard.github.io"}},[t._v("Jack")])])]),t._v(" "),s("div",{staticClass:"col l4 offset-l2 s12"},[s("h5",{staticClass:"white-text"},[t._v("Using:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://firebase.google.com/"}},[t._v("Firebase")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://materializecss.com/"}},[t._v("Materialize")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.JS")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://slack.com/"}},[t._v("Slack")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com"}},[t._v("GitHub")])])])])])]),t._v(" "),s("div",{staticClass:"footer-copyright"},[s("div",{staticClass:"container"},[t._v("\r\n            © 2014 Tempus Project\r\n            ")])])])}]},u={name:"app",components:{Navbar:s("VU/8")(o,d,!1,null,null,null).exports,Footer:s("VU/8")({name:"footer"},c,!1,null,null,null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"}),this._v(" "),e("router-view"),this._v(" "),e("Footer")],1)},staticRenderFns:[]},v=s("VU/8")(u,p,!1,null,null,null).exports,m=s("/ocq"),h={name:"dashboard",data:()=>({tasks:[]}),created(){l.collection("Tasks").get().then(t=>{t.forEach(t=>{const e={id:t.id,task_id:t.data().task_id,name:t.data().name,desc:t.data().desc,completed:t.data().completed,assignee:t.data().assignee,date:t.data().date,type:t.data().type};this.tasks.push(e)})})}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"dashboard page-footer z-depth-4"}},[s("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.tasks,function(e){return s("li",{key:e.id,staticClass:"collection-item"},[s("div",{staticClass:"chip"},[t._v("#"+t._s(e.task_id))]),t._v("\n      "+t._s(e.name)+"\n      "),s("router-link",{staticClass:"secondary-content",attrs:{to:{name:"viewtask",params:{task_id:e.task_id}}}},[s("i",{staticClass:"fa fa-arrow-right"})])],1)})],2),t._v(" "),s("div",{staticClass:"fixed-action-btn"},[s("router-link",{staticClass:"btn-floating btn-large waves-effect waves-light",attrs:{to:"/new"}},[s("i",{staticClass:"material-icons"},[t._v("add")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h5",[this._v("Tasks")])])}]},g=s("VU/8")(h,_,!1,null,null,null).exports,f={name:"newTask",data:()=>({task_id:null,name:null,desc:null,completed:!1,assignee:null,date:null,type:null}),methods:{creatTask(){l.collection("Tasks").add({task_id:this.task_id,name:this.name,desc:this.desc,completed:this.completed,assignee:this.assignee,date:this.date,type:this.type}).then(t=>this.$router.push("/"))}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-footer z-depth-4",attrs:{id:"newTask"}},[s("div",{staticClass:"container"},[s("h3",[t._v("Add new Task")]),t._v(" "),s("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.creatTask(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task_id,expression:"task_id"}],attrs:{type:"text",required:""},domProps:{value:t.task_id},on:{input:function(e){e.target.composing||(t.task_id=e.target.value)}}}),t._v(" "),s("label",[t._v("Task ID#")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("label",[t._v("Task name")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],attrs:{type:"text"},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}}),t._v(" "),s("label",[t._v("Description")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.assignee,expression:"assignee"}],attrs:{type:"text"},domProps:{value:t.assignee},on:{input:function(e){e.target.composing||(t.assignee=e.target.value)}}}),t._v(" "),s("label",[t._v("Assigned person")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{type:"text"},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}}),t._v(" "),s("label",[t._v("Type")])])]),t._v(" "),s("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),s("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v(" Cancel ")])],1)])])},staticRenderFns:[]},C=s("VU/8")(f,k,!1,null,null,null).exports,w={name:"viewTask",data:()=>({task_id:null,name:null,desc:null,completed:!1,assignee:null,date:null,type:null}),beforeRouteEnter(t,e,s){l.collection("Tasks").where("task_id","==",t.params.task_id).get().then(t=>{t.forEach(t=>{s(e=>{e.task_id=t.data().task_id,e.name=t.data().name,e.desc=t.data().desc,e.completed=t.data().completed,e.assignee=t.data().assignee,e.date=t.data().date,e.type=t.data().type})})})},watch:{$route:"fetchData"},methods:{fetchData(){l.collection("Tasks").where("task_id","==",this.$route.params.task_id).get().then(t=>{t.forEach(t=>{this.task_id=t.id,this.name=t.data().name,this.desc=t.data().desc,this.completed=t.data().completed,this.assignee=t.data().assignee,this.date=t.data().date,this.type=t.data().type})})},deleteTask(){l.collection("Tasks").where("task_id","==",this.$route.params.task_id).get().then(t=>{t.forEach(t=>{t.ref.delete(),this.$router.push("/")})})}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-footer z-depth-4",attrs:{id:"viewtask"}},[e("ul",{staticClass:"collection with-header"},[e("li",{staticClass:"collection-header"},[e("h4",[this._v(this._s(this.name))])]),this._v(" "),e("li",{staticClass:"collection-item"},[this._v(" Date created: "+this._s(this.date))]),this._v(" "),e("li",{staticClass:"collection-item"},[this._v(" Type: "+this._s(this.type))]),this._v(" "),e("li",{staticClass:"collection-item"},[this._v(" Completed: "+this._s(this.completed))]),this._v(" "),e("li",{staticClass:"collection-item"},[this._v(" Description: "+this._s(this.desc))]),this._v(" "),e("li",{staticClass:"collection-item"},[this._v(" Assigned: "+this._s(this.assignee))]),this._v(" "),e("li",{staticClass:"collection-item"},[this._v(" Task ID: "+this._s(this.task_id))]),this._v(" "),e("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[this._v("Back ")]),this._v(" "),e("button",{staticClass:"btn red",on:{click:this.deleteTask}},[this._v("Delete")])],1),this._v(" "),e("div",{staticClass:"fixed-action-btn"},[e("router-link",{staticClass:"btn-floating btn-large blue",attrs:{to:{name:"edittask",params:{task_id:this.task_id}}}},[e("i",{staticClass:"fa fa-pencil"})])],1)])},staticRenderFns:[]},y=s("VU/8")(w,b,!1,null,null,null).exports,x={name:"editTask",data:()=>({task_id:null,name:null,desc:null,completed:!1,assignee:null,date:null,type:null}),beforeRouteEnter(t,e,s){l.collection("Tasks").where("task_id","==",t.params.task_id).get().then(t=>{t.forEach(t=>{s(e=>{e.task_id=t.data().task_id,e.name=t.data().name,e.desc=t.data().desc,e.completed=t.data().completed,e.assignee=t.data().assignee,e.date=t.data().date,e.type=t.data().type})})})},watch:{$route:"fetchData"},methods:{fetchData(){l.collection("Tasks").where("task_id","==",this.$route.params.task_id).get().then(t=>{t.forEach(t=>{this.task_id=t.id,this.name=t.data().name,this.desc=t.data().desc,this.completed=t.data().completed,this.assignee=t.data().assignee,this.date=t.data().date,this.type=t.data().type})})},updateTask(){l.collection("Tasks").where("task_id","==",this.$route.params.task_id).get().then(t=>{t.forEach(t=>{t.ref.update({task_id:this.task_id,name:this.name,desc:this.desc,completed:this.completed,assignee:this.assignee,date:this.date,type:this.type}).then(()=>{this.$router.push({name:"viewtask",params:{task_id:this.task_id}})})})})}}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"editTask page-footer z-depth-4"}},[s("h3",[t._v("Add new Task")]),t._v(" "),s("div",{staticClass:"row"},[s("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.updateTask(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task_id,expression:"task_id"}],attrs:{type:"text",disabled:"",required:""},domProps:{value:t.task_id},on:{input:function(e){e.target.composing||(t.task_id=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],attrs:{type:"text"},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.assignee,expression:"assignee"}],attrs:{type:"text"},domProps:{value:t.assignee},on:{input:function(e){e.target.composing||(t.assignee=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{type:"text"},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),s("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v(" Cancel ")])],1)])])},staticRenderFns:[]},$=s("VU/8")(x,T,!1,null,null,null).exports,E={name:"loginScreen",data:()=>({email:null,pass:null}),methods:{login(){n.a.auth().signInWithEmailAndPassword(this.email,this.pass).then(t=>{this.$store.state.authorized=!0,this.$router.push("/")},t=>{Materialize.toast(t.message,2e3)})}}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-footer z-depth-4",attrs:{id:"loginScreen"}},[t._m(0),t._v(" "),s("div",{staticClass:"container"},[s("h2",[t._v(" Log in ")]),t._v(" "),s("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.login(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("label",[t._v("Email")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],attrs:{type:"password",required:""},domProps:{value:t.pass},on:{input:function(e){e.target.composing||(t.pass=e.target.value)}}}),t._v(" "),s("label",[t._v("Password")])])]),t._v(" "),s("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Login")]),t._v(" "),s("router-link",{staticClass:"btn",attrs:{to:"/register"}},[t._v(" Register ")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Login: rokas.mikalauskas95@gmail.com "),e("br"),this._v(" Password: root123 "),e("br")])}]},P=s("VU/8")(E,z,!1,null,null,null).exports,N={name:"registerScreen",data:()=>({email:null,pass:null}),methods:{register(){n.a.auth().createUserWithEmailAndPassword(this.email,this.pass).then(t=>{this.$router.push("/")},t=>{Materialize.toast(t.message,2e3)})}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-footer z-depth-4",attrs:{id:"registerScreen"}},[s("div",{staticClass:"container"},[s("h2",[t._v(" Register ")]),t._v(" "),s("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.register(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("label",[t._v("Email")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],attrs:{type:"password",required:""},domProps:{value:t.pass},on:{input:function(e){e.target.composing||(t.pass=e.target.value)}}}),t._v(" "),s("label",[t._v("Password")])])]),t._v(" "),s("button",{staticClass:"btn red",attrs:{type:"submit"}},[t._v("Register")])])])])},staticRenderFns:[]},D=s("VU/8")(N,S,!1,null,null,null).exports;a.a.use(m.a);let R=new m.a({routes:[{path:"/",name:"dashboard",component:g,meta:{auth:!0}},{path:"/register",name:"registerScreen",component:D,meta:{auth:!1}},{path:"/login",name:"loginScreen",component:P,meta:{auth:!1}},{path:"/new",name:"newtask",component:C,meta:{auth:!0}},{path:"/:task_id",name:"viewtask",component:y,meta:{auth:!0}},{path:"/edit/:task_id",name:"edittask",component:$,meta:{auth:!0}}]});R.beforeEach((t,e,s)=>{let a=n.a.auth().currentUser,i=t.matched.some(t=>t.meta.auth);i&&!a?s("/login"):!i&&a?s("/"):s()});var U=R;a.a.config.productionTip=!1,a.a.use(r.a);const F=new r.a.Store({state:{authorized:!1}});let A;n.a.auth().onAuthStateChanged(t=>{n.a.auth().currentUser?F.state.authorized=!0:F.state.authorized=!1,A||(A=new a.a({el:"#app",router:U,store:F,template:"<App/>",components:{App:v}}))})}},["NHnr"]);
//# sourceMappingURL=app.26a4250932db0b43f855.js.map