import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d518fa5 = () => interopDefault(import('../pages/budget-form.vue' /* webpackChunkName: "pages/budget-form" */))
const _10d70c4a = () => interopDefault(import('../pages/budget-intro.vue' /* webpackChunkName: "pages/budget-intro" */))
const _b0239de0 = () => interopDefault(import('../pages/current_debt.vue' /* webpackChunkName: "pages/current_debt" */))
const _0883aa70 = () => interopDefault(import('../pages/debt-result.vue' /* webpackChunkName: "pages/debt-result" */))
const _30a17142 = () => interopDefault(import('../pages/graduate.vue' /* webpackChunkName: "pages/graduate" */))
const _7358c5e7 = () => interopDefault(import('../pages/loan.vue' /* webpackChunkName: "pages/loan" */))
const _773f0ff2 = () => interopDefault(import('../pages/prev-duration.vue' /* webpackChunkName: "pages/prev-duration" */))
const _7d0f9fab = () => interopDefault(import('../pages/testimonials.vue' /* webpackChunkName: "pages/testimonials" */))
const _665aa7eb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/budget-form",
    component: _7d518fa5,
    name: "budget-form"
  }, {
    path: "/budget-intro",
    component: _10d70c4a,
    name: "budget-intro"
  }, {
    path: "/current_debt",
    component: _b0239de0,
    name: "current_debt"
  }, {
    path: "/debt-result",
    component: _0883aa70,
    name: "debt-result"
  }, {
    path: "/graduate",
    component: _30a17142,
    name: "graduate"
  }, {
    path: "/loan",
    component: _7358c5e7,
    name: "loan"
  }, {
    path: "/prev-duration",
    component: _773f0ff2,
    name: "prev-duration"
  }, {
    path: "/testimonials",
    component: _7d0f9fab,
    name: "testimonials"
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
