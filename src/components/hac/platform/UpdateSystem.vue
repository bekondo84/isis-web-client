<template>
	<div>
		<init-component
		  :data="data"
		  :title="title"
		  type="update">
		</init-component>
	</div>
</template>
<script>
import InitComponent from './../components/InitComponent';
export default {
	components: {
		InitComponent
	},
	data: function() {
		return {
			data : {
			 dataPool: "Isis",
			 schema: "isis_db",
			 databaseName :"jdbc:mysql://localhost:3306/isis_db?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC",
			 userAccount:"SA",
              extensions:[
				  {code:"backoffice02", name:"Backoffice"},
				  {code:"backoffice01", name:"Backoffice"},
				  {code:"backoffice03", name:"Backoffice"},
				  {code:"backoffice04", name:"Backoffice"},
				  {code:"backoffice05", name:"Backoffice"},
				  {code:"backoffice06", name:"Backoffice"},
				  {code:"backoffice07", name:"Backoffice"},
				  {code:"backoffice", name:"Backoffice"}
			  ]
			},
			title: "update.page.title"
		}
	}
}
</script>