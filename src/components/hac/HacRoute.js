const hacRoutes =
{
	/* Plaform Routes */
   'configuration.action': 'configuration',
   'syst_init.action': 'initialize',
   'pk_analyzer.action':'analyzer',
   'tenant.action':'profil',
   'support.action':'support',
   'system.action': 'system',
   'sys_update.action':'update',
   'extensions.action':'extensions',
   /* Monitoring Routes */
   'cache.action':'cache' ,
   'database.action': 'database',
   'cronjob.action': 'cronjob',
   'jmx.mbeans.action': 'jmxmbeans',
   'memory.action': 'memory',
   /* Maintenance */ 
   'cleanup.action': 'cleanup',
   'deployment.action': 'deployment',
   //Console
   'script.action': 'script',
   'jpql.action': 'jpql',
   'impex.import.action': 'importimpex',
   'impex.export.action': 'exportimpex'   
}


export default function() {
   return hacRoutes ;
}