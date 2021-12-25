<template>
	<div class="tab-content" id="pills-tabContent">
		<div class="sc-editor-container">
			<textarea class="sc-editor" name="" v-model="scriptData.script" ></textarea>
			<div class="sc-action">
			<div>
				<input type="checkbox" v-model="scriptData.rollback"> {{$t('rollback.label')}}
			</div>
			<button class="btn btn-primary" @click="execute()">{{$t('btn.execution.label')}}</button>
			</div>                  
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	inject: ['coreService', 'eventBus'],
	props:{
       
	},
	data: function() {
		return {
           scriptData : null
		}
	},
	methods: {
		...mapGetters({
            getData: "getData"
		}),
		async execute() {
			try {
			   let data = await this.coreService.executeScript(this.scriptData);			   
			   this.eventBus.$emit('data-result', data);
			   this.eventBus.$emit('result-error', null);
			} catch(err) {
				this.eventBus.$emit('loading-activate', false);
				this.eventBus.$emit('result-error', err);
			}
		},
		onScriptDataChange() {
			this.scriptData = this.getData();
		}
	},
	created() {
		this.scriptData = this.getData();
		this.eventBus.$on("statement-type-change", this.onScriptDataChange);
	}
}
</script>
<style scoped>
.sc-editor-container
{
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    height: 57vh;
}
.sc-editor
{
    width: 96%;
	height: 45vh;
	white-space: nowrap;
	margin: 20px 10px 20px 30px;
	background: rgba(8, 0, 7, 0.81);
	color: white ;
	overflow: scroll;
}
.sc-action
{   
    width: 96%;
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
</style>
