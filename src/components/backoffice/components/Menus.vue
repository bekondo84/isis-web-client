<template>
    <section class="ext-menu">
            <div class="ext-menu-search">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            </div>            
            <menu>
               <ul>
                   <li v-for="nav in navigations" :key="nav.pk">
                       <a  @click="nodeAction(nav)">{{nav.label}}</a>
                        <ul v-if="hasNodes(nav)">
                           <li v-for="nav2 in nav.navigations" :key="nav2.pk">
                              <a   @click="nodeAction(nav2)">{{nav2.label}}</a> 
                              <ul v-if="hasNodes(nav2)">
                                 <li v-for="nav3 in nav2.navigations" :key="nav3.pk">
                                     <a    @click="nodeAction(nav3)">
                                         {{nav3.label}}
                                     </a>
                                     <ul v-if="hasNodes(nav3)">
                                         <li v-for="nav4 in nav3.navigations" :key="nav4.pk">
                                             <a  @click="nodeAction(nav4)">
                                                 {{nav4.label}}
                                             </a>
                                             <ul v-if="hasNodes(nav4)">
                                                 <li v-for="nav5 in nav4.navigations" :key="nav5.pk">
                                                     <a  @click="nodeAction(nav5)">
                                                         {{nav5.label}}
                                                     </a>
                                                 </li>
                                             </ul>
                                         </li>
                                     </ul>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                   </li>                 
               </ul>
            </menu>
            <footer>
                Page Footer
            </footer>
        </section>
</template>
<script>
export default {
    inject: ['coreService', 'eventBus'],
    data() {
        return {
            data: null
        }
    },
    computed: {
       navigations: function() {
           if (this.data != null) {
              return this.data.navigations ;
           }
           return []
       }
    },
    methods: {
        getExtensionName: function() {
            return this.$route.path.substring(1);
        },
        hasNodes: function(nav) {
            return nav != null && nav.navigations != null && nav.navigations.length > 0 ;
        },
        nodeAction: function(nav) {

            if (!this.hasNodes(nav)) {
               this.eventBus.$emit('navigation-action', nav);
            }
            //console.log('You have click on node : '+JSON.stringify(nav))
        }
    },
    async created() {
        this.data = await this.coreService.getExtensionData(this.getExtensionName())
        console.log('Current path : '+this.getExtensionName()+" === "+JSON.stringify(this.data));
    }
}
</script>
<style scoped>
  .ext-menu
    {
        width: 300px;
        margin: 15px 0px 0px 0px;
    }
    .ext-menu-search
    {
        display: flex;
        flex-flow: row nowrap;
        margin: 0px 0px 0px 0px;
        height: 70px;
        border: ridge;
    }
    .ext-menu-search input
    {
    margin: 15px 0px 0px 0px;
    height: 32px;
    }
   
    ul {
        list-style-type: none;
    }
    menu
    {
        padding: 0px 2px 0px 0px;
        height: 73vh;
        overflow-y: scroll;
        border: thick;
    }
    menu ul
    {
      padding: 0px 0px 0px 23px;
    }
    menu ul ul
    {
        padding: 0px 0px 0px 12px;
    }
    
    footer
    {
        border: 1px solid green;
        height: 5 vh;
    }
</style>