<template>
	<div>
        <p class="sc-error">{{ message }}</p>
	</div>
</template>
<script>
export default {
	props: ['message']
}
</script>
<style scoped>
    .sc-error
	{
		color: red;
		text-align: inherit
	}
</style>