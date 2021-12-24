<template>
	<div class="cfg-page">
		<label for="pagesize">{{ $t('pagesize.label') }}</label>
		<select name="pagesize"  @change="selectOption($event)">
			<option v-bind:value="size"  v-for="size in pageSizes" :key="size">{{ size }}</option>
		</select>
	</div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';

export default {
	inject:["eventBus"],
    computed: {
       ...mapState({
		   pageSizes: state => state.HacModule.pageSizes,
		   pagination: state => state.HacModule.paginationData
       })
	},
	methods: {
		...mapMutations({
             setPaginationdata:"setPaginationdata"
		}),
		selectOption: function(event) {
			let pagination = Object.assign({}, this.pagination);
            let value = pagination.itemsCount ;
			if (event.target.value != 'All') {
			  value = event.target.value ;
			}
			pagination.pageSize = value ;
			this.setPaginationdata(pagination);
			this.eventBus.$emit("page-size-change");
		}
	},
    created() {
		let pagination = Object.assign({}, this.pagination);
		pagination.pageSize = this.pageSizes[0] ;
		this.setPaginationdata(pagination);
	}
}
</script>
<style scoped>
   .cfg-page
   {
	   margin: 0px 5px 0px 
   }
</style>