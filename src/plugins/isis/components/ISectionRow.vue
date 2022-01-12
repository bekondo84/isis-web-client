<template>   
        <fieldset>
            <legend>{{title}}</legend>
            <div class="form-row">
                <template v-for="(field, index) in fields" >
                    <template v-if="isInputType(field)" >
                        <i-form-input 
                        :key="index"
                        :field="field"
                        :item="item"
                        class="col-md-4 mb-3"
                        ></i-form-input>
                    </template>
                </template> 
            </div> 
        </fieldset>    
</template>
<script>
export default {
    props : {
        section : Object ,
        item: Object
    },
    computed: {
        fields: function() {
            return this.section != null && this.section.fields.length > 0 ? this.section.fields : [];
        },
        title: function() {
            return this.section != null ? this.section.name : "";
        }
    },
    methods: {
        isInputType: function(field) {
           return field.widget=='text' 
                  || field.widget=='number' 
                  || field.widget=='date'
                  || field.widget == 'datetime' 
                  || field.widget == 'time';
       },
       getFieldId(field, index) {
           return field.fieldName+(Math.random()*1000 + index)
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