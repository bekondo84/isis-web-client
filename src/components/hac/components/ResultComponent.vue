<template>
    <div class="cfg_body" style="height: 56vh;">
       <section class="cfg-flex-item-2">
        <div class="cfg-table-container">
           <table class="table table-striped table-hover table-sm text-center">
               <thead>
                   <tr>
                       <th v-for="(prop, index) in headers" :key="index" class="text-center">{{ $t(prop) }}</th>
                   </tr>
               </thead>
               <tbody class="cfg-table-body">                   
                    <tr v-for="(row, index) in datas" :key="index" >
                        <td v-for="(prop, index) in headers" :key="index"  class="pt-3-half" >
                            {{ getRowData(row, prop) }}
                        </td>                        
                    </tr>                   
              </tbody>
           </table> 
        </div>
       </section>      
    </div>
</template>
<script>

export default {
    props: {
        datas: Array,
        headers: Array         
    },
    data : function() {
        return {
           
        }
    },
    methods: {
        
        getRowData: function(row , field) {           
           return row[field] ;
        }
    },
    created() {
      
    }
}
</script> 
<style scoped>
  @import url('./css/styles.css');
</style>