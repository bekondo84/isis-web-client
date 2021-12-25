<template>
	<section class="sc-container">
		<div class="sc-header">
			<h3>{{ $t(title) }}</h3>
		</div>
		<div class="sc-body">
			<ul class="nav nav-pills mb-3"  role="tablist">
				<li class="nav-item">
				  <a class="nav-link active" @click="setActiveTab('tab01')"  data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">{{ $t('tab.statement.label')}}</a>
				</li>
				<li class="nav-item">
				  <a   @click="setActiveTab('tab02')" class="nav-link"  data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">{{ $t('tab.browse.label') }}</a>
				</li>
				<li class="nav-item" v-if="error != null">
				  <a   @click="setActiveTab('tab03')" class="nav-link"  data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">{{ $t('tab.output.label') }}</a>
				</li>
				<li class="nav-item">
			      <a   @click="setActiveTab('tab04')" class="nav-link"  data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">{{ $t('tab.result.label') }}</a>
				</li>
			</ul>	
			<div v-if="showtabContent('tab01')">
			  <edit-statement v-on:executeEvent="executeScript"></edit-statement>	
			</div>	
			<div v-if="showtabContent('tab02')">
				<browse-component></browse-component>
			</div>
			<div v-if="showtabContent('tab03')">
                <error-details-component
				  :message="error">

				</error-details-component>
			</div>
			<div v-if="showtabContent('tab04')">
				<result-component 
				 :datas="datas"
				 :headers="headers">
		    </result-component>
			</div>
		</div>            
	</section>
</template>
<script>
const EditStatement = () => import("./EditStatementComponent");
const BrowseComponent = () => import("./BrowseComponent");
const ResultComponent = () => import("./ResultComponent");
const ErrorDetailsComponent = () => import("./ErrorDetailsComponent");

export default {
	props: {
		title: String
	},
	inject: ['eventBus'],
	components: {
		EditStatement, BrowseComponent, ResultComponent, ErrorDetailsComponent
	},
	data: function() {
		return {
		   activeTab : "tab01",
		   headers : [],
		   datas: [],
		   error: null 
		}
	},
	methods: {
        executeScript: function(data) {
			this.$emit("executeScript", data);
		},
		showtabContent: function(tab) {
			return tab == this.activeTab ;
		},
		setActiveTab: function(tab) {
			this.activeTab = tab ;
		},
		refreshResultData(scriptResult) {
			this.headers.slice(0, this.headers.length) ;
			this.headers.push(...scriptResult.headers);
			this.datas.slice(0, this.datas.length);
			this.datas.push(...scriptResult.data);			
		},
		setError(err) {
			this.error = err ;
			if (err != null && err.response != null ) {
			   this.error = err.response.data;
			}
		}
	},created() {
		this.headers.slice(0, this.headers.length) ;
		this.datas.slice(0, this.datas.length);
		this.error = null ;
		this.eventBus.$on('data-result', this.refreshResultData);
		this.eventBus.$on('result-error', this.setError);
	}
}
</script>
<style scoped>
   @import url('./css/editor.css');
</style>