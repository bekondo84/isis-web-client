<template>
	<div  class="ext-page">
       <header-component></header-component>	
	   <div class="ext-container">
		   <menu-component></menu-component>
		   <template v-if="showList()">
		     <list-component 
			    :viewType="viewMode"
				:navNode="navNode"
				:item-selected-action="setItem"></list-component>
		   </template>
		   <template v-if="showForm()">
		     <form-component 
			    :navNode="navNode"
				:item="item"></form-component>
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
		  viewType: 'list',
		  viewMode: ['list', 'view'],
		  navNode : null ,
		  item : null
	  }
	},
	methods: {
		showList: function(){
           return this.viewType.toLowerCase() === 'list'
		},
		showForm: function() {
            return this.viewType.toLowerCase() === 'view'
		},
       createAction: function() {
         this.viewType = 'view';
		 this.item = null ;
	   },
	   previous: function(nav) {
		   this.viewType = 'list';
		   this.onNavigationAction(nav);
	   },
	   onNavigationAction: function(nav) {
		   if (nav != null) {
			this.viewMode = nav.viewMode.split(',')
			this.viewType = this.viewMode[0];
			this.navNode = nav ;
		   }
	   },
	   setItem(item) {
		   this.item = item ;
		   this.viewType = 'view';
	   }
	},
	created() {
      this.eventBus.$emit('loading-activate', false);
	  this.eventBus.$on('create-action', this.createAction);
	  this.eventBus.$on('previous-event', this.previous);
	  this.eventBus.$on('navigation-action', this.onNavigationAction);
	  this.eventBus.$on('item-selected-action', this.setItem);
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