<template>
    <div class="cfg_body">
       <section class="cfg-flex-item-1">
          <div class="cfg-page-name">
              <h1>{{ $t(title)}}</h1>
          </div>
          <div class="cfg_search_bar"> 
              <page-sizes-component  v-on:refreshData="refreshData()"></page-sizes-component>           
              <div class="cfg-search">
                  <label for="search">{{ $t('search.label')}}</label>
                  <input type="search" name="search" placeholder="search">
              </div>
          </div>
       </section>
       <section class="cfg-flex-item-2">
        <div class="cfg-table-container">
           <table class="table table-striped table-hover table-sm text-center">
               <thead>
                   <tr>
                       <th v-for="prop in headers" :key="prop.name" class="text-center">{{ $t(prop.name) }}</th>
                   </tr>
               </thead>
               <tbody class="cfg-table-body">                   
                    <tr v-for="(row, index) in datas" :key="index" >
                        <td v-for="prop in headers" :key="prop.name" v-bind:contenteditable="prop.editable" class="pt-3-half" >
                            <span v-if="isTextField(prop)">{{ getRowData(row, prop.field) }}</span>
                            <button v-if="isButtonField(prop)"  class="btn btn-sm btn-danger"  @click="exectueAction(prop, row)">
                                {{ $t(prop.field) }}
                            </button>
                            <img v-if="isImageField(prop)" v-bind:src="row[prop.field]" alt="">
                        </td>                        
                    </tr>                   
              </tbody>
           </table> 
        </div>
       </section>
       <section class="cfg-flex-item-3">
          <pagination-component></pagination-component>
       </section>
    </div>
</template>
<script>
import { mapMutations /* , mapGetters*/} from 'vuex';
import PageSizesComponent from './../components/PageSizesComponent';
import PaginationComponent from './../components/PaginationComponent';

export default {
    inject: ["eventBus"],
    props: {
        datas: Array,
        headers: Array,
        title : String         
    },
    components: {
      PageSizesComponent,
      PaginationComponent
    },
    data : function() {
        return {
           
        }
    },
    methods: {
        ...mapMutations({
            setPaginationdata: "setPaginationdata"
		}),
        getRowData: function(row , field) {
           let fields = field.split('.');
           if (fields.length == 1) {
               return row[field];
           }
           let data = row ;
           for (let index=0; index < fields.length; index++) {
               data = data[fields[index]];
           }
           return data ;
        },
        active: function(row, prop) {
             
             if (prop.state != null) {
                 return prop.state(row, prop);
             }
             return true;
        },
        isTextField : function(prop) {
            return prop.type=='text';
        },
        isButtonField : function(prop) {
            return prop.type=='button' && prop.event != null ;
        },
        isImageField: function(prop) {
            return prop.type=='img' ;
        },
        exectueAction : function(prop, data) {
            this.$emit(prop.event, data);
        },
        refreshData: function() {
            console.log('Caling PageSiesComponent')
        },
        setPaginationData(pagination) {
			this.setPaginationdata(pagination);
		}
    },
    created() {
      this.eventBus.$on('update-pagination', this.setPaginationData)
    }
}
</script> 
<style scoped>
  @import url('./css/styles.css');
</style>