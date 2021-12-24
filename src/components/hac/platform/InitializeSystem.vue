<template>
	<div>
		<init-component
		  :data="data"
		  :title="title">
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
				  {code:"backoffice", name:"Backoffice"},
				  {code:"isisCore", name:"Backoffice"},
				  {code:"backoffice02", name:"Backoffice"},
				  {code:"backoffice04", name:"Backoffice"},
				  {code:"backoffice05", name:"Backoffice"},
				  {code:"backoffice06", name:"Backoffice"},
				  {code:"backoffice07", name:"Backoffice"},
				  {code:"backoffice08", name:"Backoffice"}
			  ]
			},
			title: "initialize.page.title"
		}
	}
}
</script>