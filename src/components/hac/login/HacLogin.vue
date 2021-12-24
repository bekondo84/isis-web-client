<template>
	<div id="login_page">
        <header>
            <div id="login_header">
                <img src="./../../../assets/logo.png" class="login-img" alt="" width="200" height="150">
                <h1>Isis administration console</h1>
            </div>            
        </header>
        <section>
            <div class="login_body">
				<error-login></error-login>
                <div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="username"  aria-describedby="emailHelp" placeholder="Username">
                      </div>
                      <div class="form-group">
                        <input type="password" v-model="password" class="form-control form-control-login"  placeholder="Password">
                      </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input">
                        <label class="form-check-label" for="exampleCheck1">{{ $t('rememberme.label')}}</label>
                      </div>
                      <button  class="btn btn-login" @click="authenticate()">{{ $t('login.btn.label') }}</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Axios from 'axios';
import ErrorLogin from './LoginError';
import { mapMutations } from 'vuex';

export default {
	components: {
		ErrorLogin
	},
	inject: ["authenticationService","coreService", "eventBus"],
	data: function() {
		return {
			username: null ,
			password: null ,
			token: null 
		}
	}, 
	methods: {
	   ...mapMutations({
            setCurrentUserInformation: "setCurrentUserInformation"
	   }),
       async authenticate() {
		  this.token =  ( await this.authenticationService.authenticate(this.username, this.password, this.eventBus)).data;
		  localStorage.setItem('token', this.token['access_token']);
		  localStorage.setItem('username', this.username);
		  Axios.defaults.headers.common['Authorization'] = 'Bearer '+this.token['access_token'];
		  let users = await this.coreService.getUserByUsername(this.username);
		  if (users !=null && users.length > 0) {
		        this.setCurrentUserInformation(users[0]);	
          }		  
	   }

	},
	created() {
		this.eventBus.$emit('loading-activate', false)
	}
}
</script>
<style scoped>
	#login_page
	{
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #134b5f;
	}

	#login_header
	{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items:center ;
		margin-bottom: 50px;
	}
	#login_page h1 
	{
		margin-top: 10px;
		text-align: center;
		color: white;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-size: 24px;    
	}

	.btn-login
	{
		background: yellow ;
		width: 150px;
		padding: 10px 15px 5px 15px;
		text-transform: uppercase;
		margin-top: 15px;
	}
	.form-check-label 
	{
		color: white;

	}
 
</style>