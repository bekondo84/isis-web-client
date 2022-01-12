<template>
    <section class="ext-content">
       <form-header
         :navNode="navNode"
         :meta="meta"></form-header>
       <form-content 
          :meta="meta"
          :item="data">

       </form-content>
    </section>
</template>
<script>
const FormHeader = () => import('./details/FormHeader.vue');
const FormContent = () => import('./details/FormDetail.vue')

export default {
    inject: ['coreService', 'eventBus'] ,
    props: {
      navNode: Object,
      item : Object
    },
    components: {
        FormHeader ,
        FormContent
    },
    data() {
        return {
            title: null,
           actions: [],
           data: null ,
           meta : null
        }
    },methods: {
        actionType: function() {
            return this.item == null ? 'create' : 'update';
        },
         typeCode: function() {
            if (this.navNode != null) {
             return this.navNode.type;
            }
            return null;
        },
        template: function() {
            if (this.navNode != null) {
              return this.navNode.template;
            }
            return null;
        },
        getExtension: function() {
            return this.$route.path.substring(1);
        },
        async getMetaData() {
            this.meta = await this.coreService.getMetaData(this.getExtension(), this.typeCode(), 'view', 'fr', this.template());
        },
        async getData() {
           // console.log('this.getData() Form.vue : '+this.meta+" :::: "+this.item)
          if (this.meta != null) {
            let path = this.getExtension()+"/core/new/"+this.meta.type ;
            if (this.item != null && this.item.pk != null) {
               path  = this.getExtension()+"/core/"+this.meta.type+"/"+this.item.pk
            }
            this.data =  await this.coreService.getDatas(path, null, null)
          }
       },
       updateData: function(val) {
          if (val != null) {
            Object.keys(val).forEach(key => {
                 this.data[key] = val[key];
            });
          }         
       }
    },
    async created() {
        this.eventBus.$on('data-update', this.updateData);
        this.data = this.item ;
         await this.getMetaData();
         await this.getData();
    }
}
</script>
<style scoped>
  .ext-content
  {
        display: flex;
        flex-flow: column nowrap;
        overflow-y: auto;
    flex: 1;
    margin: 16px 1px 10px 1px;
  }
</style>