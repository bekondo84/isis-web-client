<template>
     <header class="ext-header">
            <h4>{{title}}</h4>
            <search-component  
              :navNode="navNode"
              :extension="extension"></search-component>
            <actions-component 
                 :viewType="viewType" 
                 v-on:update-view-type="setSelectedViewType"
                 :navNode="navNode"
                 :actions="actions"
                 :canCreate="canCreate"
                 :canDelete="canDelete"></actions-component>
    </header>
</template>
<script>
const SearchComponent = () => import('./Search.vue');
const ActionsComponent = () => import('./ListActions.vue');

export default {
    props: {
      viewType: Array, 
      navNode : Object,
      extension: String,
      actions: Array,
      canCreate: Boolean,
      canDelete: Boolean,
      title: String
    },
    data() {
      return {

      }
    },
    components: {
        SearchComponent,
        ActionsComponent
    },
    methods: {
        setSelectedViewType: function(type) {
            this.$emit('update-view-type', type);
        }
    }

}
</script>
<style scoped>
.ext-header
{
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
}
.ext-header h4
{
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    opacity: 0.6;
    margin: 5px 0px 2px 10px;
}
</style>