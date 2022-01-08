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
        typeCode : String ,
        template : String
    },
    data() {
      return {
          data : null 
      }
    },
    inject: ['coreService'],
    async created() {
      // this.data = await this.coreService.getMetaData(this.typeCode, 'search', 'fr', this.template);
       console.log('Search data fect for type : '+this.typeCode)
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