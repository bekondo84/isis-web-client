<template>
    <div class="ext-content-body">
        <form class="needs-validation" novalidate> 
          <div v-if="common"></div>
          <i-form-row 
                :form="common" 
                :item="item">                  
          </i-form-row>
          <i-tab-row 
               :tabs="tabs"
               :item="item">
          </i-tab-row>
        </form>
    </div>
</template>
<script>
export default {
    inject: ['eventBus', 'coreService'],
    props: {
        meta : Object,
        item : Object
    },
    data() {
        return {
           data: new Object()   
        }
    },
    computed: {
       hasCommon: function() { 
          return this.meta != null && this.meta.commons.length > 0 ;
       },
       common : function() {
          return this.meta != null && this.meta.commons.length > 0 ? this.meta.commons[0] : null;
       },
       tabs : function() {
         return this.meta != null && this.meta.tabs.length > 0 ? this.meta.tabs : [] ;
       }       
    },
    methods: {
       getExtension: function() {
            return this.$route.path.substring(1);
        },
       hasTabs: function() {
            return this.meta != null && this.meta.tabs.length > 0
       }
    }
}
</script>