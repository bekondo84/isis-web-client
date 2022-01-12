import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import loader from 'vue-ui-preloader'
import App from './App.vue'
import router from './router'
import store from './store'
import  AuthenticationService   from './services/authenticationService'

import IsisFormPlugin from './plugins/isis'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
import 'popmotion/dist/popmotion.global.min.js'
import i18n from './i18n'
import IsisCoreService from './services/isisCoreService'
import UtilsService from './services/UtilsService'

export const eventBus = new Vue();

Vue.config.productionTip = false
Vue.use(loader)
Vue.use(IsisFormPlugin)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  provide: function() {
    return {
      eventBus: eventBus,
      authenticationService: new AuthenticationService(),
      coreService: new IsisCoreService(store) ,
      utilsService: new UtilsService()
    }
  }
}).$mount('#app')
