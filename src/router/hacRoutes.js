
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
			{name: "initialize", path: "platform/initialize", component: () => import("../components/hac/platform/InitializeSystem.vue")},
			{name: "update", path:"platform/update", component: () => import("../components/hac/platform/UpdateSystem.vue")},
			{name: "support", path:"platform/support", component: () => import("../components/hac/platform/Support.vue")},
			{name: "analyzer", path:"platform/analyzer", component: () => import("../components/hac/platform/PkAnalyzer.vue")},
			{name: "extensions", path:"platform/extensions", component: () => import("../components/hac/platform/Extensions.vue")},
			/* Monitoring */
			{name: "cache", path:"platform/cache", component: () => import("../components/hac/monitoring/Cache.vue")},
			{name: "database", path:"platform/database", component: () => import("../components/hac/monitoring/Database.vue")},	
			{name: "cronjob", path:"platform/cronjobs", component: () => import("../components/hac/monitoring/CronJobs.vue")},	
			{name: "jmxmbeans", path:"platform/jmxmbeans", component: () => import("../components/hac/monitoring/JMXMbeans.vue")},
			{name: "memory", path:"platform/memory", component: () => import("../components/hac/monitoring/Memory.vue")},		
			/* Maintenance */
			{name: "cleanup", path:"platform/cleanup", component: () => import("../components/hac/maintenance/CleanUp.vue")},
			{name: "deployment", path:"platform/deployment", component: () => import("../components/hac/maintenance/Deployment.vue")},
			/* console */
			{name: "script", path:"platform/script", component: () => import("../components/hac/console/Script.vue")},
			{name: "jpql", path:"platform/jpql", component: () => import("../components/hac/console/JPQL.vue")},
			{name: "importimpex", path:"platform/importimpex", component: () => import("../components/hac/console/ImpexImport.vue")},
			{name: "exportimpex", path:"platform/exportimpex", component: () => import("../components/hac/console/ImpexExport.vue")},
			{name: "dashboard", path:"", component: () => import("../components/hac/dashbord/Dashbord.vue")}
        ]
  }
]