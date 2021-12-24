<template>
	<div>
		<table-component 
		   :title="title"
		   :datas="datas"
		   :headers="headers">
		</table-component>
	</div>
</template>
<script>
const tableComponent = () => import("./../components/TableComponent");

export default {
	components: {
		tableComponent
	},
	data: function() {
		return {
			datas: [

			],
			headers: [
               {name: "th.name.label",field:"code",type:"text",editable:false,event:null,class:null},
                {name: "th.version.label",field:"version",type:"text",editable:true,event:null,class:null},
                {name: "th.type.label",field:"type",type:"text",editable:false,event:null,class:null}
			],
			title: "extensions.page.title"
		}
	},
	methods: {
		
	}
}
</script>