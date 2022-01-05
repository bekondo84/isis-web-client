
export default [
	{
		path: '/iac' ,
		name: 'HacConsole' ,
		component: () => import("../components/hac/HacConsole.vue"),
		children:[
			{name: "dashboard", path: "", component: () => import("../components/hac/dashbord/Dashbord.vue")},
			/* Platform routes*/
            {name: "profil", path: "platform/profil", component: () => import("../components/hac/platform/Profil.vue")},
			{name: "configuration", path: "platform/configuration", component: () => import("../components/hac/platform/Configuration.vue")},
			{name: "system", path: "platform/system", component: () => import("../components/hac/platform/System.vue")},
			{name: "initialize", path: "platform/initialize/system", component: () => import("../components/hac/platform/InitializeSystem.vue")},
			{name: "update", path:"platform/update/system", component: () => import("../components/hac/platform/UpdateSystem.vue")},
			{name: "support", path:"platform/support", component: () => import("../components/hac/platform/Support.vue")},
			{name: "analyzer", path:"platform/analyzer", component: () => import("../components/hac/platform/PkAnalyzer.vue")},
			{name: "extensions", path:"platform/extensions", component: () => import("../components/hac/platform/Extensions.vue")},
			/* Monitoring */
			{name: "cache", path:"monitoring/cache", component: () => import("../components/hac/monitoring/Cache.vue")},
			{name: "database", path:"monitoring/database", component: () => import("../components/hac/monitoring/Database.vue")},	
			{name: "cronjob", path:"monitoring/cronjobs", component: () => import("../components/hac/monitoring/CronJobs.vue")},	
			{name: "jmxmbeans", path:"monitoring/jmxmbeans", component: () => import("../components/hac/monitoring/JMXMbeans.vue")},
			{name: "memory", path:"monitoring/memory", component: () => import("../components/hac/monitoring/Memory.vue")},		
			/* Maintenance */
			{name: "cleanup", path:"maintenance/cleanup", component: () => import("../components/hac/maintenance/CleanUp.vue")},
			{name: "deployment", path:"maintenance/deployment", component: () => import("../components/hac/maintenance/Deployment.vue")},
			/* console */
			{name: "script", path:"console/script", component: () => import("../components/hac/console/Script.vue")},
			{name: "jpql", path:"console/jpql", component: () => import("../components/hac/console/JPQL.vue")},
			{name: "importimpex", path:"console/impex/import", component: () => import("../components/hac/console/ImpexImport.vue")},
			{name: "exportimpex", path:"console/impex/export", component: () => import("../components/hac/console/ImpexExport.vue")}
        ]
  }
]