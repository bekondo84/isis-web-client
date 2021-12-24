<template>
   <div>
      <table-component
         :datas="datas"
         :headers="headers"
         :title="title"
         v-on:cfg-save-event="saveProperty"
         >

      </table-component>
   </div>
</template>
<script>
import TableComponent from './../components/TableComponent';
import { mapMutations, mapState, mapGetters } from 'vuex';

export default {
    inject: ['coreService','eventBus'],
    components: {
       TableComponent
    },
    data : function() {
        return {
            title:"configuration.page.title",
            headers : [
                {name: "th.name.label",field:"key",type:"text",editable:false,event:null,class:null},
                {name: "th.value.label",field:"value",type:"text",editable:true,event:null,class:"btn btn-sm btn-danger"},
                {name: "",field:"btn.save.label",type:"button",editable:false,event:"cfg-save-event",class:null}
            ],
            datas : []
        }
    },
    computed:{
      ...mapState({
            paginationData: state => state.HacModule.paginationData,
			      pageSizes: state => state.HacModule.pageSizes
      })
    },
    methods: {
        ...mapMutations({
           setPaginationdata: "setPaginationdata",
           resetPaginationData: "resetPaginationData"
        }),
        ...mapGetters({
          getPaginationData: "getPaginationData"
        }),
        isTextField : function(prop) {
            return prop.type=='text';
        },
        isButtonField : function(prop) {
            return prop.type=='button' && prop.event != null ;
        },
        saveProperty : function(data) {
           console.log('Save row :'+data);
        },
        async getEnvironmentProperties() {
          let data = await this.coreService.getEnvironmentProperties(null, this.getPaginationData());	
          
          if (data != null ) {

            if (data.data.length>0) {
              this.datas.splice(0, this.datas.length);
                this.datas.push(...data.data);
            }            
          }
          
        }
    },
    async created() {
        //this.resetPaginationData();
        await this.getEnvironmentProperties();
        this.eventBus.$on("page-size-change",  this.getEnvironmentProperties);
        this.eventBus.$on('select-page-change', this.getEnvironmentProperties);
    }
}
</script> 
<style scoped>
  @import url('./css/styles.css');
</style>