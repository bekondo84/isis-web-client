<template>
   <section class="ext-content">
      <header-component :viewType="viewType"
                        v-on:update-view-type="setCurrentViewType"></header-component>
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
    inject: ['eventBus'],
    components: {
        HeaderComponent ,
        TableDataComponent,
        KabanDataComponent,
        CalendarDataComponent
    },
    data() {
        return {
            currentViewType: 'list',
            data: [
                {pk:12345,name:'Bekondo',surname:'Kangue Dieunedort', email:'bekondo84@gmail.com',phone:'+237 695427874', selected:false},
                {pk:12346,name:'Bekondo',surname:'Kangue Dieunedort', email:'bekondo84@gmail.com',phone:'+237 695427874', selected:false},
                {pk:12347,name:'Bekondo',surname:'Kangue Dieunedort', email:'bekondo84@gmail.com',phone:'+237 695427874', selected:false},
                {pk:12348,name:'Bekondo',surname:'Kangue Dieunedort', email:'bekondo84@gmail.com',phone:'+237 695427874', selected:false},
                {pk:12349,name:'Bekondo',surname:'Kangue Dieunedort', email:'bekondo84@gmail.com',phone:'+237 695427874', selected:false},
                {pk:12344,name:'Bekondo',surname:'Kangue Dieunedort', email:'bekondo84@gmail.com',phone:'+237 695427874', selected:false}
            ] ,
            header: [
                   {name:'pk', type:String,title:'PK'},
                   {name:'name', type:String,title:'Name'},
                   {name:'surname', type:String,title:'Surname'},
                   {name:'email', type:String,title:'E-Mail'},
                   {name:'phone', type:String,title:'Phone'}
                ],
            viewType: ['list', 'kaban', 'Calendar']
        }
    },
    methods: {
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
        }

    },
    created() {
        
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