<template>
	<div>
		<div v-if="loader">
			<loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
		</div>
		<div v-if="loginView">
			<hac-login></hac-login>
		</div>
		<div v-else>
           <hac-header></hac-header>
			<router-view />
		</div>
	</div>
</template>
<script>

import {mapState} from 'vuex';

const HacHeader = () => import("./Header");
const HacLogin = () => import("./login/HacLogin") ;	

export default {
	inject: ['eventBus'],

	data : function() {
		return {
          loader : true 
		}
	},
	computed: {
		...mapState({
            currentUser: state => state.HacModule.currentUser
		}),
		loginView: function() {
			let path = this.$route.path;
			
			if(path == '/iac' || path == '/iac/') {
				if (this.currentUser != null) {
				     return false ;
				}
				return true ;
			}
			return false ;
		}
	},
	methods: {
		showLoader(activate) {
            this.loader = activate;
		}
	},
	components: {
		HacHeader,
		HacLogin
	},
	created() {
       this.eventBus.$on('loading-activate', this.showLoader);
	}
}
</script>