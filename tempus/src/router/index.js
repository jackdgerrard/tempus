import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewTask from '@/components/NewTask'
import ViewTask from '@/components/ViewTask'
import EditTask from '@/components/EditTask'
import LoginScreen from '@/components/LoginScreen'
import RegisterScreen from '@/components/RegisterScreen'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/register',
      name: 'registerScreen',
      component: RegisterScreen
    },
    {
      path: '/login',
      name: 'loginScreen',
      component: LoginScreen
    },
    {
      path: '/new',
      name: 'newtask',
      component: NewTask
    },
    {
      path: '/:task_id',
      name: 'viewtask',
      component: ViewTask
    },
    {
      path: '/edit/:task_id',
      name: 'edittask',
      component: EditTask
    }
  ]
})
