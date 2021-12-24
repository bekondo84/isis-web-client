<template>
	 <div class="tab-content" id="pills-tabContent">
		<div class="sc-editor-container">
			<input type="file"> 
			<div>
			<div class="sc-checkbox">
				<input type="checkbox" v-model="data.filename"> {{$t('rollback.label')}}
			</div>
			<button class="btn btn-primary"  @click="loadFile()">{{ $t('btn.loadfile.label') }}</button>
			</div>                  
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			data: {
				filename:null,
				rollback: false
			}
		}
	}
}
</script>
<style scoped>
	.sc-editor-container
	{
		height: 57vh;
		margin: 30px 0px 10px 30px;
	}
	.sc-editor
	{
		width: 80%;
		height: 45vh;
		margin: 20px 10px 20px 30px;
	}
	.sc-action
	{   
		width: 80%;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		margin: 0px 30px 0px 30px;
	}

	.sc-action button
	{
		height: 30px;
		padding: 2px 10px 2px 10px;
	}
	/* Section browse */
	.sc-editor-container input[type="file"]
	{
		width: 500px;
		margin: 0px 0px 30px 0px;
	}
	.sc-checkbox
	{
		margin: 0px 0px 30px 0px;
	}
</style>