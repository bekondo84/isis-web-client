<template>
	<div>		
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
	//inject: ['eventBus'],

	data : function() {
		return {
          
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
		
	},
	components: {
		HacHeader,
		HacLogin
	}
}
</script>