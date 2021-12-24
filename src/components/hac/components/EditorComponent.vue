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
				<li class="nav-item">
				<a   @click="setActiveTab('tab03')" class="nav-link"  data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">{{ $t('tab.result.label') }}</a>
				</li>
			</ul>	
			<div v-if="showtabContent('tab01')">
			  <edit-statement v-on:executeEvent="executeScript"></edit-statement>	
			</div>	
			<div v-if="showtabContent('tab02')">
				<browse-component></browse-component>
			</div>
		</div>            
	</section>
</template>
<script>
const EditStatement = () => import("./EditStatementComponent");
const BrowseComponent = () => import("./BrowseComponent");

export default {
	props: {
		title: String
	},
	components: {
		EditStatement, BrowseComponent
	},
	data: function() {
		return {
		   activeTab : "tab01"
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
		}
	}
}
</script>
<style scoped>
   @import url('./css/editor.css');
</style>