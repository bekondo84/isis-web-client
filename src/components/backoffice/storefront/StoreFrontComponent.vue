<template>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
				<form class="login100-form validate-form flex-sb flex-w">
					<span class="login100-form-title p-b-32">
						Extensions
					</span>

					<span class="txt1 p-b-11">
						Choose Extension
					</span>
					<div class="wrap-input100 validate-input m-b-36" data-validate = "Username is required">
						<select class="input100" name="" id="">
                            <option value="">Backoffice</option>
                            <option value="">Accounting</option>
                            <option value="">Sales</option>
                            <option value="">Supplier</option>
                            <option value="">Courrier</option>
                        </select>
						<span class="focus-input100"></span>
					</div>
					
					<span class="txt1 p-b-11">
					</span>					
					
					<div class="flex-sb-m w-full p-b-48">
						
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" @click.prevent="loadModule()">
							Load Extension
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	
	methods: {
		loadModule() {
			this.$router.push({name:'extensionModule', params:{ op:'ext-backoffice'}})
		}
	}
}
</script>
<style scoped>
 @import url('./css/styles.css');
</style>