import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      cacheTo: ['info', 'page-b']
    },
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
  },
  {
    path: '/page-a',
    name: 'page-a',
    component: () => import(/* webpackChunkName: "page-a" */ '../views/PageA.vue')
  },
  {
    path: '/page-b',
    name: 'page-b',
    meta: {
      cacheTo: ['info', 'page-c']
    },
    component: () => import(/* webpackChunkName: "page-b" */ '../views/PageB.vue')
  },
  {
    path: '/page-c',
    name: 'page-c',
    component: () => import(/* webpackChunkName: "page-c" */ '../views/PageC.vue')
  },
  {
    path: '/form',
    name: 'page-form',
    meta: {
      cacheTo: ['page-address']
    },
    component: () => import(/* webpackChunkName: "page-form" */ '../views/Form.vue')
  },
  {
    path: '/address',
    name: 'page-address',
    component: () => import(/* webpackChunkName: "address" */ '../views/Address.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
