<template>
    <table class="table table-striped table-hover table-sm">
        <thead>
            <tr>
                <th scope="col"><input type="checkbox" v-model="selected" @click="selectAll()"></th>
                <th scope="col" v-for="(prop, index) in header" :key="index">{{prop.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data"  :key="item.pk">
                <th scope="row"><input type="checkbox" v-model="item.selected"></th>
                <td v-for="(prop, index) in header" :key="index">{{item[prop.name]}}</td>            
            </tr>
        </tbody>
    </table>                  
</template>
<script>
export default {
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
        }
    }
}
</script>
<style scoped>
   td {
       cursor: pointer;
   }
</style>