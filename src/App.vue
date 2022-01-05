<template>
  <div id="app">
    <div v-if="loader">
			<loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
		</div>
    <router-view/>
  </div>
</template>

<script>
//import Axios from 'axios';
export default {
  
  inject: ['authenticationService', 'eventBus'] ,
  data : function() {
      return {
         loader : true 
      }
  },
  methods: {
    showLoader(activate) {
            this.loader = activate;
		}
  },
	created() {
       this.eventBus.$on('loading-activate', this.showLoader);
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
