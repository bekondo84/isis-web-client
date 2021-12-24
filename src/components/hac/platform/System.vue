<template>
	<div>
		<table-component
		   v-bind:datas="datas"
		   v-bind:headers="headers"
		   v-bind:title="title">

		</table-component>
	</div>
</template>
<script>
import TableComponent from './../components/TableComponent';
import { mapMutations, mapState, mapGetters } from 'vuex' ;

export default {
	inject: ['coreService','eventBus'],
	data : function() {
       return {
		   headers:[
			   {name:"th.name.label", field:"key", type:"text",editable:false,event:null,class:null},
			   {name:"th.version.label", field:"value", type:"text",editable:false,event:null,class:null}			   
		   ],
		   datas :[],
		   title :'system.page.title'
	   }
	},
	components: {
		TableComponent
	},
	computed: {
        ...mapState({
			paginationData: state => state.HacModule.paginationData,
			pageSizes: state => state.HacModule.pageSizes
		})
		
	},
	methods: {
	  ...mapMutations({
		  setPaginationdata: "setPaginationdata",
		  resetPaginationData: "resetPaginationData"
	  }),
	  ...mapGetters({
			getPaginationData: "getPaginationData"
		}),
       async getSystemInformations() {
		    //console.log('System ::::: On pagination-refresh : '+JSON.stringify(this.getPaginationData()));
			let data = await this.coreService.getSystemInformations(null, this.getPaginationData());	
			
			if (data != null ) {

				if (data.data.length>0) {
				  this.datas.splice(0, this.datas.length);
			      this.datas.push(...data.data);
				}				
			}
			
		}
	},
	async created() {
		//this.resetPaginationData();
		await this.getSystemInformations();
		this.eventBus.$on("page-size-change",  this.getSystemInformations);
		this.eventBus.$on('select-page-change', this.getSystemInformations);
	}
}
</script>