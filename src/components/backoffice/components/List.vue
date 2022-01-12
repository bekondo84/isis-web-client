<template>
   <section class="ext-content">
      <header-component :viewType="viewType"
                        v-on:update-view-type="setCurrentViewType"
                        :navNode="navNode"
                        :extension="extension"
                        :actions="actions"
                        :canCreate="canCreate"
                        :canDelete="canDelete"
                        :title="title"></header-component>
      <div class="ext-content-body">
            <template v-if="showList()">
                <table-data-component 
                        :data="data"
                        :header="header"
                        v-on:select-all-items="selectAllItems">
              </table-data-component>  
            </template>
            <template v-if="showKaban()">
                <kaban-data-component></kaban-data-component>
            </template>
            <template v-if="showCalendar()">
                <calendar-data-component></calendar-data-component>
            </template>
              
      </div>
   </section>
</template>
<script>

const HeaderComponent = () => import('./list/ListHeader.vue');
const TableDataComponent = () => import('./list/TableData.vue');
const KabanDataComponent = () => import('./list/KabanData.vue');
const CalendarDataComponent = () => import('./list/CalendarData.vue');

export default {
    props: {
       viewType: Array ,
       navNode : Object
    },
    inject: ['eventBus', 'coreService'],
    components: {
        HeaderComponent ,
        TableDataComponent,
        KabanDataComponent,
        CalendarDataComponent
    },
    data() {
        return {
            currentViewType: 'list',
            meta: null,
            data: [ ] ,
            header : []   
        }
    },
    computed: {
         extension: function() {
            return this.$route.path.substring(1);
        },
        actions: function() {
            if (this.meta != null) {
                return this.meta.actions;
            }
            return []
        },
        canCreate: function() {
            if (this.meta != null) {
                return this.meta.canCreate ;
            }
            return false;
        },
        canDelete: function() {
            if (this.meta != null) {
                return this.meta.canDelete ;
            }
            return false;
        },
        title: function() {
            if (this.meta != null ) {
                return this.meta.title ;
            }
            return null;
        }
       
    },
    methods: {
        itemSelectedAction: function(item) {
            this.$emit('item-selected-action', item);
        },
        showList: function() {
            return this.currentViewType.toLowerCase() === 'list';
        },
         showKaban: function() {
            return this.currentViewType.toLowerCase() === 'kaban';
        },
         showCalendar: function() {
            return this.currentViewType.toLowerCase() === 'calendar';
        },
        setCurrentViewType(type) {
            this.currentViewType = type; 
        },
        selectAllItems: function(selected) {
            this.data.forEach(item => item.selected = selected);                       
            //console.log('Update viewType detected with value : '+selected);
        },
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
        },
        getExtension: function() {
            return this.$route.path.substring(1);
        },
        async getMetaData() {
            this.meta = await this.coreService.getMetaData(this.getExtension(), this.typeCode(), 'list', 'fr', this.template());
            this.header = this.meta.columns;
        },
        async getDatas() {
            let path = null ;
            if (this.navNode != null && this.navNode.path != null && this.navNode.path != '') {
                path = this.navNode.path;
            } else {
                path =  this.getExtension()+"/core/"+this.typeCode();
            }
            this.data = await this.coreService.getDatas(path, null, null);
        }

    },
    watch: {
      async navNode() {
           //console.log('NavNode value changed detected : '+newVal+" :: "+oldVal)
           await this.getMetaData();
           await this.getDatas();
      }
    },
    async created() {
        if (this.navNode != null) {
           await  this.getMetaData();
           this.getDatas();
        }
    }
}
</script>

<style scoped>
.ext-content
{
    display: flex;
    flex-flow: column nowrap;
    overflow-y: auto;
   flex: 1;
   margin: 16px 1px 10px 1px;
}
.ext-content-body
{
    flex: 1;
    /*border: 1px solid yellow;*/
}
</style>