<template>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
				<form class="login100-form validate-form flex-sb flex-w">
					<span class="login100-form-title p-b-32">
						Account Login
					</span>

					<span class="txt1 p-b-11">
						Username
					</span>
					<div class="wrap-input100 validate-input m-b-36" data-validate = "Username is required">
						<input class="input100" type="text" name="username" v-model="username">
						<span class="focus-input100"></span>
					</div>
					
					<span class="txt1 p-b-11">
						Password
					</span>
					<div class="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
						<span class="btn-show-pass">
							<i class="fa fa-eye"></i>
						</span>
						<input class="input100" type="password" name="pass" v-model="password">
						<span class="focus-input100"></span>
					</div>
					
					<div class="flex-sb-m w-full p-b-48">
						<div class="contact100-form-checkbox">
							<input class="input-checkbox100 " id="ckb1" type="checkbox" name="remember-me" >
							<label class="label-checkbox100" for="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a href="#" class="txt3">
								Forgot Password?
							</a>
						</div>
					</div>
                    <login-error></login-error>
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" @click.prevent="authenticate()">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
</template>
<script>
import Axios from 'axios'
import { mapMutations } from 'vuex'
import LoginError  from './ErrorLogin'

export default {
	inject: ["authenticationService","coreService", "eventBus"],
	components: {
      LoginError
	},
	data: function() {
		return {
            username: null ,
			password: null 
		}
	},
	methods: {
        ...mapMutations({
			setCurrentUserInformation: "setCurrentUserInformation"
		}),
		async authenticate() {
		  let token =  ( await this.authenticationService.authenticate(this.username, this.password, this.eventBus)).data;
		  localStorage.setItem('token', token['access_token']);
		  localStorage.setItem('username', this.username);
		  Axios.defaults.headers.common['Authorization'] = 'Bearer '+token['access_token'];
		  let users = await this.coreService.getUserByUsername(this.username);
		  if (users !=null && users.length > 0) {
		        this.setCurrentUserInformation(users[0]);	
		  }	
		  this.$router.push({name:'storeFrontModule'});	  
	   }
	},
	created() {
       this.eventBus.$emit('loading-activate', false);
	}
}
</script>
<style scoped>
 @import url('./css/styles.css');
</style>