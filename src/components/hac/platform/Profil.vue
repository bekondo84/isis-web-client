<template>
	<div>
		<profil-component 
		       v-bind:datas="datas" 
			   v-bind:headers="headers"
			   :title="title">
		</profil-component>
	</div>
</template>
<script>
import ProfilComponent from './../components/TableComponent';
export default {
	components: {
		ProfilComponent
	},
	data : function() {
		return {
			 title:"profil.page.title",
            headers : [
                {name: "th.name.label",field:"id",type:"text",editable:false,event:null,class:null},
                {name: "th.status.label",field:"status",type:"img",editable:false,event:null,class:null},
                {name: "th.driver.label",field:"driver",type:"text",editable:false,event:null,class:null}
            ],
            datas : [
                {id: "master", status:"./../../../assets/ok.png" ,driver:"Mysql Database Engine : "}
            ]
		}
	},
	created() {
		console.log('Greate Profil component');
	}
}
</script>