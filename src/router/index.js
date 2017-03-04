import Vue from 'vue'
import Router from 'vue-router'
import Context from '@/components/Context'
import Task1 from '@/tasks/Task1_cxd_1'
import Task2 from '@/tasks/Task2_cxd_2'
import Task3 from '@/tasks/Task3_cxd_3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Context',
      component: Context
    }, {
      path: '/task1',
      name: 'Task1',
      component: Task1
    }, {
      path: '/task2',
      name: 'Task2',
      component: Task2
    }, {
      path: '/task3',
      name: 'Task3',
      component: Task3
    }
  ]
})
