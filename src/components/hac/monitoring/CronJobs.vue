<template>
	<div>
		<table-component
		  :title="title"
		  :headers="headers"
		  :datas="datas"
		  v-bind:cj-abort-event="cronJobAbort">
		</table-component>
	</div>
</template>
<script>
import { mapMutations, mapState } from 'vuex' ;

const TableComponent = () => import("./../components/TableComponent");

export default {
	inject:['coreService', 'eventBus'],
	components: {
		TableComponent
	},
	data: function() {
		return {
			title: "cronjobs.page.title",
			headers: [
				{name: "th.name.label",field:"code",type:"text",editable:false,event:null,class:null},
                {name: "th.status.label",field:"status.code",type:"text",editable:false,event:null,class:null},
                {name: "",field:"btn.abort.label",type:"button",editable:false,event:"cj-abort-event",class:null}
			],
			datas: []
		}
	},
	computed: {
		 ...mapState({
			paginationData: state => state.HacModule.paginationData,
			pageSizes: state => state.HacModule.pageSizes
		})
	},
	methods: {
		...mapMutations({
			setPaginationdata: "setPaginationdata" ,
			resetPaginationData: "resetPaginationData"
	  	}),
		async getCronJobs() {
            let result = await this.coreService.getCronJob(null, this.paginationData);	
			// console.log('Cron job result : '+JSON.stringify(result));
			if (result != null ) {

				if (result.data.length>0) {
				  this.datas.splice(0, this.datas.length);
			      this.datas.push(...result.data);
				}				
			}
		},
		cronJobAbort: function(data) {
			console.log('Cron job abort request detected : '+JSON.stringify(data))
		}
	},
	async created() {
		  //this.resetPaginationData();
          await this.getCronJobs();
		  this.eventBus.$on("page-size-change",  this.getCronJobs);
		  this.eventBus.$on('select-page-change', this.getCronJobs);
	}
}
</script>