<template>
	<div class="hac-body">
        <header @mouseover="setCurrentMenu(null)">  
            <div class="hac-header">          
                <div class="header-logo">
                    <img src="./../../assets/logo.png" class="hac_header_img" alt="" >
                    <div class="hac-header-admin">
						<div>
                           <span class="hac-greeting">{{ $t('greeting.label')}} </span>
						   <span class="hac-greeting">{{ currentUser.name }} </span> 
						</div>
                        <button @click="logout()">{{ $t('bnt.logout.label')}}</button>
                    </div>
                </div>
                <div class="header-search">
                    <div>
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    </div>
                    <div>
                        <span class="hac-env">{{ $t('environment.label')}}</span>
                        <span class="hac-env"></span>
                    </div>
                </div>
            </div>
        </header>
		<div id="hac_nav_0">
			<nav class="hac-nav-bar">
				<ul id="hac_nav_bar">
					<li class="nav-item" v-for="menu in navigationNodes" :key="menu.code" @mouseover="setCurrentMenu(menu)">
					<a class="nav-link">{{ $t(menu.code) }}</a>
					</li>
				</ul>
			</nav>
			<transition>
				<nav v-if="!hideActionsNav">
					<ul id="hac_nav">
						<li class="nav-item"  v-for="action in actionsForMenu" :key="action">
							<a class="nav-link active"  @click="navigateMenuAction(action)">{{ $t(action) }}</a>
						</li>
					</ul>
				</nav>
			</transition>
		</div>
    </div>
</template>
<script>
	import { mapState, mapMutations, mapGetters } from "vuex";
	//import Axios from 'axios';
	
	export default {
		inject: ["coreService","authenticationService"],
		data: function() {
			return {
			  activeMenu : this.currentMenu 
			}
		},
		computed: {
			...mapState({
				navigationNodes: state => state.HacModule.menus,
				currentMenu: state => state.HacModule.menu,
				currentAction: state => state.HacModule.action,
				currentUser : state => state.HacModule.currentUser
			}),
			activateActionsMenu: function() {
			   return this.currentMenu == null ? false : true ;
			},
			actionsForMenu : function() {
				if (this.currentMenu != null) {
					return this.navigationNodes.filter(m => m.code == this.currentMenu.code)[0].nodes ;
				}
				return new Array();
			},
			hideActionsNav : function() {
				return this.currentMenu == null ;
			}
			
		},
		methods: {
			...mapMutations({
				setCurrentMenu: "setCurrentMenu",
				setCurrentAction: "setCurrentAction" ,
				setCurrentUserInformation: "setCurrentUserInformation"
			}),
			...mapGetters({
				getRouteForAction: "getRouteForAction",
				getCurrentUserName: "getCurrentUserName"
			}),
			getMenuClass: function(menu) {
				return this.currentMenu!=null && this.currentMenu.code==menu.code ? 'active':'';
			},
			getActionClass: function(action) {
				return this.currentAction==action ? 'active':'';
			},
			navigateMenuAction: function(action) {
				this.setCurrentAction(action) ;

				if (this.getRouteForAction(action) != null) {
					this.$router.push({name: this.getRouteForAction(action)});
				}

				this.setCurrentMenu(null);
			},
			logout: function() {
				this.authenticationService.logout();
			}			
		},
	    async created() {	   
		   if (this.getCurrentUserName() == null) {
			  this.logout();			
		    }
	    }
	}
</script>
<style scoped>
	.hac-body 
	{
		display: flex;
		flex-flow: column wrap; 
		background: #134b5f;  
	}

	/* header */
	.hac-header 
	{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;        
	}

	.header-logo 
	{
		display: flex;
		flex-flow: row;
		align-items: flex-start;
		margin: 25px 10px 15px 10px;

	}

	.hac-greeting{
		color: white;
		opacity: 0.6;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		margin: 0px 10px 0px 0px;
	}
	div.header-logo img
	{
		width: 100%;
		height: auto;
		max-height: 70px;  ;
		
	}

	.hac-header-admin{
		margin: 0px 10px 0px 30px;
	}	
	
	div.hac-header-admin button
	{
		height: 25px;
		min-width: 80px;
		text-align: center;
		font-size: 15px;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		color: white;
		padding: 0px 10px 5px 10px;
		border-radius: 5px 5px;
		background: #2596be;
	}

	.header-search {
		margin: 25px 10px 15px 10px;
	}
	div.header-search input
	{
		width: 100%;
		margin: 0px 0px 20px 0px;
	}

	.hac-env
	{
		color: white;
		opacity: 0.6;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		margin: 20px 5px 10px 0px;
		cursor: pointer;
	}

	/* Menu bar */
	#hac_nav_0 
	{
      display: flex;
	  flex-flow: column;
	}

	#hac_nav_bar 
	{
		display: flex;
		flex-flow: row;
		background: #134b5f;
	}

	ul#hac_nav_bar li {
		list-style-type: none;
		margin: 20px 3px 0px 3px;
		background: #52717c;
		border-radius: 2px 2px;
		height: 40px;
	}

	 div.hac-header-admin h6 
	 {
         opacity: 0.6;
		 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	 }

    div.hac-header-admin button
	{
       text-transform: lowercase;
	}

	ul#hac_nav_bar li a, ul#hac_nav li a 
	{
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		text-align: center;
		color: white;
	}

	ul#hac_nav_bar li a:hover 
	{
	  opacity: 0.6;
	}

	.hac-nav-bar 
	{
		height: 60px;
	}
	/* tool bar */
	#hac_nav
	{
		display: flex;
		justify-content: flex-start;
		background: #52717c;
		margin: 0px 5px 0px 5px;
	}
	ul#hac_nav li
	{
		list-style-type: none;
	}
	ul#hac_nav li a {
		cursor: pointer;
	}
	ul#hac_nav li a:hover
	{
      opacity: 0.6;
	}
	/* transition */
	.v-leave-active 
	{
		opacity: 0;
		font-size: 0em;
		transition: all 1000ms;
	}
	.v-enter
	{
		opacity: 0;
		font-size: 0em;
	}
	.v-enter-to
	{
		opacity: 1;
		transition: all 750ms;
	}
</style>