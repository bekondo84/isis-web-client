<template>
     <header class="ext-header">
            <search-component></search-component>
            <actions-component :viewType="viewType" v-on:update-view-type="setSelectedViewType"></actions-component>
    </header>
</template>
<script>
const SearchComponent = () => import('./Search.vue');
const ActionsComponent = () => import('./ListActions.vue');

export default {
    props: {
      viewType: Array
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
</style>