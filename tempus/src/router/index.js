import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewTask from '@/components/NewTask'
import ViewTask from '@/components/ViewTask'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
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
    }
  ]
})
