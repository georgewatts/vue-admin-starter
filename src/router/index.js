import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Dashboard - Home'
      }
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Dashboard - Home'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title !== undefined) {
    document.title = to.meta.title
  } else {
    document.title = 'Dashboard'
  }
  next()
})

export default router
