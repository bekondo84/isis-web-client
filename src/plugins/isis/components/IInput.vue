<template>
    <div>
      <label v-bind:for="id">{{ field.label }}</label>
      <input :type="field.type" class="form-control" 
             :id="id"  
             @input="handleInput" 
             :value="data[field.fieldName]"  
             :disabled="desabled"
             required />
      <div class="valid-feedback">
          Looks good!
      </div>
    </div>
</template>
<script>
export default {
    inject: ['eventBus', 'utilsService'] ,
    props: {
        field: Object,
        item : Object,
        hidden : Event
    },
    data() {
      return {
          data: {}
      }
    },
    computed: {
        id: function() {
            return this.field != null ? this.field.fieldName+'_'+Math.random()*1000 : Math.random()*1000;
        },
        desabled: function() {
            return this.field != null && !this.field.editable ;
        }
    },
    model: {
        prop: 'hidden',
        event: 'blur'
    },
    methods: {
        handleInput () {
            //this.$emit('blur', value);
            this.eventBus.$emit('data-update', this.data)
        },
        initializeData: function() {
           if (this.field != null && this.item != null) {
                let fieldName = this.field.fieldName ;
                let widget = this.field.widget ;
                
                if ("date, datetime-local, time".includes(widget)) {
                  if (this.item[fieldName] != null) {
                    this.data[fieldName] = this.utilsService.formatDate(this.item[fieldName], widget);
                  }
                } else {
                   this.data[fieldName] = this.item[fieldName]; 
                }
            }
            console.log('Initialiszation Data : '+JSON.stringify(this.data))
        },
        
    },
    created() {
        this.initializeData();        
    },
    updated() {
        this.initializeData()
    }
}
</script>
<style scoped>
   label {
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       opacity: 0.6;
       text-align: left;
   }
</style>