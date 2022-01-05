<template>
    <div class="ext-header-02">
        <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-success  btn-sm btn-space" @click="newAction()"><i class="fa fa-plus"></i></button>
            <button type="button" class="btn btn-danger  btn-sm  btn-space"><i class="fa fa-trash"></i></button>
        </div>
        <div class="ext-header-02-02">
            <div class="btn-group" role="group" aria-label="...">
                <button type="button" class="btn btn-default  btn-sm btn-space"  v-for="(view, index) in viewType" :key="index"  @click="setSelectedViewType(view)">
                    <i v-if="isListType(view)"   class="fa fa-list-alt"></i>
                    <i v-if="isKabanType(view)" class="fa fa-th"></i>
                    <i v-if="isCalendarType(view)" class="fa fa-calendar"></i>
                </button>
            </div>
        </div>                   
    </div>
</template>
<script>

export default {
    inject: ['eventBus'] ,
    props: {
        viewType : Array
    } ,
    data: function() {
       return {
         selectViewType: 'list'
       }
    },
    methods: {
        newAction: function() {
           this.eventBus.$emit('create-action')
        },
        deleteAction: function() {
           this.eventBus$$emit('delete-items-action')        },
        isListType: function(view) {
            return view != null && view.toLowerCase() === 'list';
        },
        isKabanType: function(view) {
            return view != null && view.toLowerCase() === 'kaban' ;
        },
        isCalendarType: function(view) {
            return view != null && view.toLowerCase() === 'calendar' 
        },
        setSelectedViewType(type) {
           // console.log('setSeletedViewType with '+type)
            this.selectViewType = type ;
            this.$emit('update-view-type', this.selectViewType);
        }
    },
    created() {
        console.log('List Actions : '+this.viewType);
        this.$emit('update-view-type', this.selectViewType);
    }
}
</script>
<style scoped>
.ext-header-02
{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    padding: 0px 5px 0px 8px;
}
.btn-space
{
    margin: 5px 6px 5px 2px;
}
.btn-space2 
{
    
}
</style>