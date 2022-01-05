import Vue from 'vue'
import VueRouter from 'vue-router'
import HacRoutes from './hacRoutes'
import store from './../store'

Vue.use(VueRouter)

const routes = [
  ...HacRoutes,
   {path:'/login', name:'loginModule', component: () => import('./../components/backoffice/login/LogniComponent.vue')},
   {path:'/storefront', name:'storeFrontModule', component: () => import('./../components/backoffice/storefront/StoreFrontComponent.vue')},
   {path:'/:op', name:'extensionModule', component: () => import('./../components/backoffice/BackofficeConsole.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.commit("resetPaginationData");
   next();
})
export default router
