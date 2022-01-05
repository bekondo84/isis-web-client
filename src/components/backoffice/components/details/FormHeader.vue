<template>
    <header class="ext-header">
        <div class="ext-header-01">
            <h3>{{ title }}</h3>
        </div>
        <div class="ext-header-02">
            <div class="btn-group" role="group" aria-label="...">
                <button type="button" class="btn btn-default  btn-sm btn-space"><i class="fa fa-trash"></i></button>
                <button type="button" class="btn btn-default  btn-sm  btn-space"><i class="fa fa-refresh"></i></button>
                <button type="button" class="btn btn-default  btn-sm  btn-space"><i class="fa fa-print"></i></button>
                </div>
            <div class="ext-header-02-02">
                <div class="btn-group" role="group" aria-label="..." style="padding: 5px 0px 0px 5px;">                       
                <button type="button" class="btn btn-sm btn-default">Actualiser</button>
                <button type="button" class="btn btn-sm btn-primary">Enregistrer</button>
                </div>
            </div>                                
        </div>
    </header>
</template>
<script>
export default {
     props: {
         title: String ,
         actions: Array
     },
     data: function() {
         return {
             saveAction: null ,
             refreshAction: null,
             removeAction: null,
             
         }
     },
     created() {
         console.log('Action recues : '+JSON.stringify(this.actions))
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

    .ext-header-01
    {
        border-bottom: 1px solid darkgrey;
        width: 100%;
    }
    .ext-header-01 h3
    {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin: 10px 0px 10px 10px;
        font-size: 18px;
        opacity: 0.6;
        text-align: left;
    }
    .ext-header-02-03
    {
        border-top: 1px solid darkgrey;
        border-bottom: 1px solid darkgrey;
        width: 100%;
    }
    .ext-header-02
    {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        width: 100%;
        padding: 0px 5px 0px 8px;
        border-bottom: 1px solid darkgrey;
    }
    .btn-space
    {
        margin: 5px 6px 5px 2px;
    }
</style>