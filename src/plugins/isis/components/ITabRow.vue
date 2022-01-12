<template>
    <div v-if="hasTabs">
        <ul class="nav nav-tabs">
            <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
                <a class="nav-link active" @click="selectTab(tab)">{{ tab.name }}</a>
            </li>            
        </ul>
        <i-tab-row-entry
           :tab="tab"
           :item="item"></i-tab-row-entry>
    </div>
</template>
<script>
import ITabRowEntry from './ITabRowEntry.vue';

export default {
  components: { ITabRowEntry },
   props: {
       tabs: Array ,
       item : Object
   },
   data() {
      return {
          tab : null
      }
   },
   computed : {
       hasTabs: function() {
           return this.tabs != null && this.tabs.length > 0 ;
       }
   },
   methods: {
       selectTab: function(tab) {
           this.tab = tab ;
       }
   },updated() {
       
       if (this.tabs != null && this.tabs.length > 0 && this.tab == null) {
           this.selectTab(this.tabs[0]);
       }
   }
}
</script>