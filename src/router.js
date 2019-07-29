import Vue from 'vue'
import Router from 'vue-router'
import auth from './services/auth'

Vue.use(Router)

//Export all routes by array to import on sidebar
export const routes = {
  path: '/panel',
  name: 'panel',
  component: () => import('./Panel.vue'),
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: {
        icon: 'HomeIcon'
      }
    },
    {
      path: 'about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: 'charts',
      name: 'charts',
      component: () => import('./views/Charts.vue'),
      meta: {
        icon: 'PieChartIcon'
      }
    },
    {
      name: 'notifications',
      path: 'notifications',
      component: () => import('./views/Notifications.vue'),
      meta: {
        icon: 'StarIcon'
      }
    }
  ],
  meta: {
    needAuth: true
  }
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        needAuth: false
      }
    },
    ...[routes]
  ]
})

auth(router)

export default router
