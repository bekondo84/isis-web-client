<template>
    <header class="ext-header">
        <div class="ext-header-01">
            <h3>{{ title }}</h3>
        </div>
        <div class="ext-header-02">
            <div class="btn-group" role="group" aria-label="...">
                <button type="button" class="btn btn-default  btn-sm btn-space" @click="previous()"><i class="fa fa-external-link"></i></button>
                <button type="button" class="btn btn-default  btn-sm btn-space" v-if="canDelete"><i class="fa fa-trash"></i></button>
                <button type="button" class="btn btn-default  btn-sm  btn-space" v-for="(action, index) in actions" :key="index">
                    <span class="action-icon"><i class="fa fa-print"></i></span>
                    <span class="action-label">{{action.label}}</span>
                </button>                
            </div>
            <div class="ext-header-02-02">
                <div class="btn-group" role="group" aria-label="..." style="padding: 5px 0px 0px 5px;">                       
                <button type="button" class="btn btn-sm btn-default">Actualiser</button>
                <button type="button" class="btn btn-sm btn-primary" v-if="canCreate">Enregistrer</button>
                </div>
            </div>                                
        </div>
    </header>
</template>
<script>
export default {
    inject: ['eventBus'],
     props: {
         navNode: Object,
         item: Object,
         meta: Object
     },
     data: function() {
         return {
             saveAction: null ,
             refreshAction: null,
             removeAction: null,
             
         }
     },
     computed: {
         title : function() {
            return this.meta != null ? this.meta.title : ""; 
         },
         canCreate: function() {
             return this.meta != null ? this.meta.canCreate : false ;
         },
         canDelete: function() {
             return this.meta == null ? false : this.meta.canDelete ;
         },
         actions: function() {
             return this.meta == null ? [] : this.meta.actions ;
         }
     },
     methods: {
        previous: function() {
            //console.log('back to list page')
            this.eventBus.$emit('previous-event', this.navNode);
        },
        hasIcon: function(action) {
            return action.icon != null && action.icon != '';
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