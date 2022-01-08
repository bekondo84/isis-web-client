<template>
	<div  class="ext-page">
       <header-component></header-component>	
	   <div class="ext-container">
		   <menu-component></menu-component>
		   <template v-if="showList()">
		     <list-component></list-component>
		   </template>
		   <template v-if="showForm()">
		     <form-component></form-component>
		   </template>
		</div>			
	</div>
</template>
<script>
const HeaderComponent = () => import('./components/Header.vue');
const MenuComponent = () => import('./components/Menus.vue');
const ListComponent = () => import('./components/List.vue');
const FormComponent = () => import('./components/Form.vue');

export default {
	inject: ['eventBus'],
	components: {
      HeaderComponent,
	  MenuComponent,
	  ListComponent,
	  FormComponent
	},
	data() {
      return {
		  viewType: 'list'
	  }
	},
	methods: {
		showList: function(){
           return this.viewType.toLowerCase() === 'list'
		},
		showForm: function() {
            return this.viewType.toLowerCase() === 'create'
		},
       createAction: function() {
         this.viewType = 'create'
	   },
	   previous: function() {
		   this.viewType = 'list';
	   },
	   onNavigationAction: function(nav) {
		   console.log('Navigation Action recieve : '+JSON.stringify(nav))
	   }
	},
	created() {
      this.eventBus.$emit('loading-activate', false);
	  this.eventBus.$on('create-action', this.createAction);
	  this.eventBus.$on('previous-event', this.previous);
	  this.eventBus.$on('navigation-action', this.onNavigationAction)
	}
}
</script>
<style scoped>
  .ext-page
	{
		height: 100vh;
		display: flex;
		flex-flow: column;
	}
	.ext-container
	{
		flex: 1;
		width: 100%;
		display: flex;
		flex-flow: row;
		margin: 40px 0px 0px 0px;

	}
</style>