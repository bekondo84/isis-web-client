<template>
	<div v-if="error" class="bg-danger text-white text-center p-3 h3">
       <h6>{{ $t(message) }}</h6>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			error: false,
			message: ""
		}
	},
	methods: {
		handleError() {
			this.error = true ;
			this.message = "authentication.error.message";
		}
	},
	inject: ["eventBus"],
	created() {
		this.eventBus.$on("authencation-error", this.handleError)
	}
}
</script>