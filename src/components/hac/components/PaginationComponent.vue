<template>
     <nav aria-label="Page navigation example">
		<ul class="pagination justify-content-end">
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Previous" @click="previous()">
					<span aria-hidden="true">&laquo;</span>
					<span class="sr-only">Previous</span>
				</a>
			</li>
			<li class="page-item" v-for="(d, index) in pages" :key="index"
			   v-bind:class="{active:d==paginationData.page, disabled:d=='...'}"
			   @click="selectPage(d)"><a class="page-link" href="#">{{ d }}</a></li>
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Next" @click="next()">
					<span aria-hidden="true">&raquo;</span>
					<span class="sr-only">Next</span>
				</a>
			</li>
		</ul>
	 </nav>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
	inject: ["eventBus"],
	data: function() {
		return {
             pages: []
		}
	},
   	methods: {
	    ...mapMutations({
             setPaginationdata: "setPaginationdata"
		}),
		next: function() {
			let value = this.paginationData.page ;
			let itemCount = this.paginationData.itemsCount
			let pageSize = this.paginationData.pageSize;
			let numberOfPages = parseInt((itemCount / pageSize) + ((itemCount % pageSize) > 0 ? 1 : 0));
			
			if (value != null && value != '...' && value < numberOfPages) {
				let pagination = Object.assign({}, this.paginationData);
				pagination.page = Number(this.paginationData.page) + 1;
				this.setPaginationdata(pagination);
				this.initPages();
				 this.eventBus.$emit('select-page-change');
			}
		},
		previous: function() {
			let value = this.paginationData.page;

            if (value != null && value != '...' && value > 1) {
				let pagination = Object.assign({}, this.paginationData);
				pagination.page = Number(this.paginationData.page) - 1;
				this.setPaginationdata(pagination);
				this.initPages();
				 this.eventBus.$emit('select-page-change');
			}
		},
	    selectPage: function(value) {
            if (value != null && value != '...') {
				let pagination = Object.assign({}, this.paginationData);
				pagination.page = Number(value);
				this.setPaginationdata(pagination);
				this.initPages();	
				 this.eventBus.$emit('select-page-change');			
			}
		},
       initPages: function() {
			let currentpage = this.paginationData.page ;
			let itemCount = this.paginationData.itemsCount
			let pageSize = this.paginationData.pageSize;
			let numberOfPages = parseInt((itemCount / pageSize) + ((itemCount % pageSize) > 0 ? 1 : 0));
			let pages = [] ;
			
			if (numberOfPages <=5) {
				pages = [...Array(numberOfPages+1).keys()];
			} else {
				if (currentpage < 5) {
					pages= [...Array(6).keys()];
					pages.push('...');
					pages.push(numberOfPages);
				} else if ((numberOfPages-currentpage) >= 4 ) {
					pages = [...Array(2).keys()];
					pages.push('...');
					pages.push(currentpage - 1);
					pages.push(currentpage);
					pages.push(currentpage+1);
					pages.push('...');
					pages.push(numberOfPages);
				} else {
					pages = [...Array(2).keys()];
					pages.push('...');

					for (let i=1 ; i<=5 ;i++){
						pages.push(numberOfPages - 5 + i)
					}
				}

			}
			pages.shift();
			
			this.pages.splice(0, this.pages.length) ;
			this.pages.push(...pages);			
		}
	},
	computed: {
		...mapGetters({
             paginationData: 'getPaginationData',
		}),
		...mapState({
			pageSizes: state => state.HacModule.pageSizes
		})		
	},
	created() {
		let pagination = Object.assign({}, this.paginationData);
		pagination.pageSize = Number(this.pageSizes[0]);
		this.setPaginationdata(pagination);
		this.initPages();	
		this.eventBus.$on("page-size-change",  this.initPages);		
		this.eventBus.$on("update-pagination", this.initPages);
	}
	
}
</script>
<style scoped>

</style>