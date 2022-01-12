import Vue from 'vue';
import Vuex from 'vuex';
import HacModule from "./hacContext";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     data : null 
  },
  mutations: {
     
  },
  getters: {
      
  },
  actions: {
  },
  modules: {
    HacModule
  }
})
