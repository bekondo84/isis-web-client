import Vue from 'vue'
import VueRouter from 'vue-router'
import HacRoutes from './hacRoutes'
import store from './../store'

Vue.use(VueRouter)

const routes = [
  ...HacRoutes
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
