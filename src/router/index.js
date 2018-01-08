import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewTask from '@/components/NewTask'
import ViewTask from '@/components/ViewTask'
import EditTask from '@/components/EditTask'
import LoginScreen from '@/components/LoginScreen'
import RegisterScreen from '@/components/RegisterScreen'
import ProjectTasks from '@/components/ProjectTasks'
import NewProject from '@/components/NewProject'
import EditProject from '@/components/EditProject'
import firebase from 'firebase'
Vue.use(Router)
let router = new Router({
  //mode: 'history',
  routes: [{
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
      path: '/newProject',
      name: 'newproject',
      component: NewProject,
      meta: {
        auth: true
      }
    },
    {
      path: '/editProject/:project_id',
      name: 'editproject',
      component: EditProject,
      meta: {
        auth: true
      }
    },
    {
      path: '/:project_id',
      name: 'projecttasks',
      component: ProjectTasks,
      meta: {
        auth: true
      }
    },
    {
      path: '/:project_id/new',
      name: 'newtask',
      component: NewTask,
      meta: {
        auth: true
      }
    },
    {
      path: '/:project_id/:task_id',
      name: 'viewtask',
      component: ViewTask,
      meta: {
        auth: true
      }
    },
    {
      path: '/:project_id/edit/:task_id',
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
  if (auth && !user) next('/login')
  else if (!auth && user) next('/')
  else next()
})

export default router
