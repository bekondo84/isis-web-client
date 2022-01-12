<template>
   <div>
       <div class="form-row">
          <template  v-for="(field, index) in fields" >
                <template v-if="isInputType(field)" >
                    <i-form-input 
                    :key="index"
                    :field="field"
                    :item="item"
                    class="col-md-4 mb-3"></i-form-input>
                </template>
          </template>
       </div>
       <template  v-for="(section, index) in sections">
           <i-section-row 
                 :key="index"
                 :section="section"
                 :item="item">
           </i-section-row>
       </template>
   </div>    
</template>
<script>
import IFormInput from './IInput.vue';
export default {
  components: { IFormInput },
    props: {
        form : Object,
        item : Object
    },
    computed: {
        fields : function() {
            return this.hasFields(this.form) ? this.form.fields : [];
        },
        sections: function() {
            return this.hasSections(this.form) ? this.form.sections : [];
        }
    },
    methods: {
       hasFields: function() {
            return this.form != null && this.form.fields.length > 0 ;
       },
       isInputType: function(field) {
           return field.widget=='text' 
                  || field.widget=='number' 
                  || field.widget=='date'
                  || field.widget == 'datetime-local' 
                  || field.widget == 'time';
       },
       getFieldId(field, index) {
           return field.fieldName+(Math.random()*1000 + index)
       },
       hasSections: function() {
           return this.form != null && this.form.sections.length > 0 ;
       }

    }
}
</script>
<style scoped>
   div.form-row 
   {
       margin: 5px 10px 10px 10px ;
   }
</style>
