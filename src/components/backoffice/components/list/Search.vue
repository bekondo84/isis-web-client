<template>
    <div class="ext-header-01">
        <button class="btn btn-outline-default my-2 my-sm-0"><i class="fa fa-plus-square-o"></i></button>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
</template>
<script>
export default {
    props: {
        navNode: Object,
        extension: String
    },
    data() {
      return {
          meta : null 
      }
    },
    methods: {
        typeCode: function() {
            if (this.navNode != null) {
             return this.navNode.type;
            }
            return null;
        },
        template: function() {
            if (this.navNode != null) {
              return this.navNode.template;
            }
            return null;
        }
    },
    watch: {
        async navNode(newVal, oldval) {
            if (newVal != oldval) {
                this.meta = await this.coreService.getMetaData(this.extension, this.typeCode(), 'search', 'fr', this.template());
            }
        }
    },
    inject: ['coreService'],
    async created() {
        if (this.navNode != null) {
          this.meta = await this.coreService.getMetaData(this.extension, this.typeCode(), 'search', 'fr', this.template());
        }
    }
}
</script>
<style scoped>
    .ext-header-01
{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    margin: 15px 10px 20px 10px;
    width: 70vh;
}
</style>