import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewTask from '@/components/NewTask'
import ViewTask from '@/components/ViewTask'
import EditTask from '@/components/EditTask'
import LoginScreen from '@/components/LoginScreen'
import RegisterScreen from '@/components/RegisterScreen'
import firebase from 'firebase'
Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        auth: true
      }
    },
    {
      path: '/register',
      name: 'registerScreen',
      component: RegisterScreen,
      meta: {
        auth: false
      }
    },
    {
      path: '/login',
      name: 'loginScreen',
      component: LoginScreen,
      meta: {
        auth: false
      }
    },
    {
      path: '/new',
      name: 'newtask',
      component: NewTask,
      meta: {
        auth: true
      }
    },
    {
      path: '/:task_id',
      name: 'viewtask',
      component: ViewTask,
      meta: {
        auth: true
      }
    },
    {
      path: '/edit/:task_id',
      name: 'edittask',
      component: EditTask,
      meta: {
        auth: true
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser
  let auth = to.matched.some(record => record.meta.auth)
  console.log(firebase.auth().currentUser)
  if (auth && !user) next('/login')
  else if (!auth && user) next('/')
  else next()
})

export default router
