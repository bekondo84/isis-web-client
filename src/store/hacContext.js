import hacRoute from './../components/hac/HacRoute.js'
import { eventBus } from './../main';


const hacRoutes = hacRoute();

export default {
	state: {
		menu: null,
		action: null,
		currentUser: null,
		paginationData : {page:1, pageSize:10, itemsCount: 0} ,
		data: null,
		menus: [
			{code:"platform.node",
		     nodes: ["tenant.action", "configuration.action", "system.action","extensions.action", "syst_init.action", "sys_update.action", "support.action", "pk_analyzer.action"]
			},
			{code:"monitoring.node",
		     nodes: [/*"cache.action", "database.action",*/ "cronjob.action"/*,,"jmx.mbeans.action""memory.action"*/]
			}/*,
			{code:"maintenance.node",
		     nodes: ["cleanup.action", "deployment.action"]
			}*/,
			{
				code:"console.node",
				nodes:["script.action", "jpql.action", "impex.import.action","impex.export.action"]
			}
		],
		pageSizes: ['10', '25', '50', '100', 'All']
	},
	getters: {
       getRouteForAction(state) {
		   let next = hacRoutes[state.action];
		   
		   if (next != null) {
			   return next;
		   }
		   return null;
	   },
	   getToken() {
		   let token = localStorage.getItem('token');

          if (token == null) {
			  return null;
		  }

		  return token['token_type']+' '+token['access_token'] ;
	   },
	   getCurrentUserName(state) {

		   if (state.currentUser == null) {			   
			   return null ;
		   }
		   return state.currentUser.name ;
	   },
	   getPaginationData(state) {
		   return state.paginationData;
	   },
	   getData(state) {
		   return state.data ;
	   }
	},
	mutations: {
		setCurrentMenu(currentState, menu){
			currentState.menu = menu ;
		},
		setCurrentAction(currentState, action){
			currentState.action = action ;
		},
		setCurrentUserInformation(currentState, user) {
			currentState.currentUser = user ;
		},	
		setData(currentState, data) {
            currentState.data = data ;
		},	
		setPaginationdata(currentState ,pagination) {
			
			if (pagination.page != null){
			  currentState.paginationData.page = pagination.page ;
			}
			if (pagination.pageSize != null) {
			 currentState.paginationData.pageSize = pagination.pageSize;
			}
			if (pagination.itemsCount != null) {
			 currentState.itemsCount = pagination.itemsCount;
			}
			//console.log('inside HACContext.setpaginationdata : '+JSON.stringify(this.paginationData)+" with param pageSize: "+JSON.stringify(pagination))
			eventBus.$emit("pagination-refresh")
		},
		resetPaginationData(currentState) {
			currentState.paginationData.pageSize = currentState.pageSizes[0];
			currentState.paginationData.itemsCount = 0 ;
			currentState.paginationData.page = 1 ;
		}
    },
	actions: {
	}
}