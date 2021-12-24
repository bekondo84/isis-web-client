<template>
	<div>
		<table-component
		   :datas="datas"
		   :headers="headers"
		   :title="title">

		</table-component>
	</div>
</template>
<script>
import TableComponent from './../components/TableComponent';
export default {
	components: {
		TableComponent
	},
	data: function() {
		return {
			datas:[
			   {filename:"jdbc.log"},
			   {filename:"tomcat-233445.log"}
			],
			headers:[
               {name: "th.name.label",field:"filename",type:"text",editable:false,event:null,class:null},
               {name: "",field:"btn.download.label",type:"button",editable:false,event:"download-event",class:null}
			],
			title:"support.page.title"
		}
	}
}
</script>