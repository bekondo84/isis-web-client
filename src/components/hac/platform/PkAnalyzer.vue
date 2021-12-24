<template>
	<div class="pk-analyzer-container">
       <section>
          <div class="pk-analyze-header">
              <h3>{{ $t('pkanalyzer.page.title') }}</h3>
              <div>
                  <label for="pk_value">{{ $t('input.pktoanalyse.label') }}</label>
                  <input type="number" name="pk_value" v-model="primaryKey">
              </div>
              <div>
                <button class="btn btn-primary" @click="getMetaType(primaryKey)">Executer</button>
              </div>
          </div>
       </section>
       <section v-if="showResult">
          <div class="pk-analyzer-body">
             <ul class="pk-analyzer-item-01">
                 <li>
                     {{$t('pk_is.label')}} 
                     <ul class="pk-analyzer-item-02">
                         <li>{{ primaryKey }}</li>
                     </ul>
                 </li>
                 <li>
                     {{$t('typecode.label')}}
                     <ul class="pk-analyzer-item-02">
                         <li>{{ data.code }}</li>
                     </ul>
                 </li>
				 <li>
                     {{ $t('modelname.label') }}
                     <ul class="pk-analyzer-item-02">
                         <li>{{ data.typeName }}</li>
                     </ul>
                 </li>
                 <li>
                     {{ $t('creationtime.label')}}
                     <ul class="pk-analyzer-item-02">
                         <li>{{ data.dateCreation }}</li>
                     </ul>
                 </li>
             </ul>
          </div>
       </section>
    </div>
</template>
<script>
export default {
    inject: ['coreService', 'eventBus'] ,
	data: function() {
		return {
           primaryKey: null ,
           data : {}
		}
	},
	computed: {
		showResult: function() {
           return this.data != null && this.data.pk !=null ;
		}
	},
	methods: {
        async getMetaType(primaryKey) {
             let data = await this.coreService.getMetaTypeForPk(primaryKey);
             console.log('Data recieve :::::: '+JSON.stringify(data));
             if (data == null ){
                this.eventBus.$emit('no-result-found')
             }
             this.data = data ;
        }
	}
}
</script>
<style scoped>
   @import url('./css/pkAnalyzer.css');
</style>