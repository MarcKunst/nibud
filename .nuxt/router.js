import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b0239de0 = () => interopDefault(import('../pages/current_debt.vue' /* webpackChunkName: "pages/current_debt" */))
const _7358c5e7 = () => interopDefault(import('../pages/loan.vue' /* webpackChunkName: "pages/loan" */))
const _665aa7eb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/current_debt",
    component: _b0239de0,
    name: "current_debt"
  }, {
    path: "/loan",
    component: _7358c5e7,
    name: "loan"
  }, {
    path: "/",
    component: _665aa7eb,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
