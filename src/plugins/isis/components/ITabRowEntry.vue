<template>
    <div>
        <template v-for="(form, index) in forms">
            <i-form-row 
               :form="form" 
               :key="index"
               :item="item">
            </i-form-row>
        </template>
    </div>
</template>
<script>
import IFormRow from './IFormRow.vue';

export default {
    props: ['tab', 'item'],
    components: {
       IFormRow
    },
    data() {
        return {
            forms : Array
        }
    },
    methods: {
       setForms : function(tab) {
           this.forms = tab != null && tab.forms.length > 0 ? tab.forms : [];
       }
    },
    watch: {
        tab: function(newVal) {
            this.setForms(newVal);
        }
    },
    created() {
        this.forms = this.setForms(this.tab);
    }
}
</script>
<style scoped>

</style>