<template>
    <table class="table table-striped table-hover table-sm">
        <thead>
            <tr>
                <th scope="col"><input type="checkbox" v-model="selected" @click="selectAll()"></th>
                <th scope="col" v-for="(prop, index) in header" :key="index">{{prop.label}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data"  :key="item.pk">
                <th scope="row"><input type="checkbox" v-model="item.selected"></th>
                <td v-for="(prop, index) in header" :key="index" @click="selectItem(item)">{{item[prop.fieldName]}}</td>            
            </tr>
        </tbody>
    </table>                  
</template>
<script>
export default {
    inject: ['eventBus'] ,
    props: {
        data: Array,
        header: Array
    },
    data: function() {
        return  {
        selected : false
      }
    },
    methods: {
        selectAll: function() {
            this.selected = !this.selected ;
            this.$emit('select-all-items', this.selected);
        },
        selectItem: function(item) {
            this.eventBus.$emit('item-selected-action', item) ;
        }
    }
}
</script>
<style scoped>
   td {
       cursor: pointer;
   }
</style>