<template>
	<div class="init-container">
        <section>
            <div class="init-header">
                <h3>{{ $t(title) }}</h3>
                <button class="btn btn-primary">{{ $t(buttonLabel) }}</button>
                <div class="init-header-db">
                    <ul>
                        <li>
                            <h4>{{ $t('database.pool')}}</h4><span>{{data.dataPool}}</span>
                        </li>
                        <li>
                            <h4>{{ $t('database.name')}}</h4><span>{{data.schema}}</span>
                        </li>
                        <li>
                            <h4>{{ $t('database.url') }}</h4><span>{{data.databaseName}}</span>
                        </li>
                        <li>
                            <h4>{{ $t('database.useraccount')}}</h4><span>{{data.userAccount}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <div class="init-body">
                <h3>{{$t('settings.section.title')}}</h3>
                <div>
                  <input type="checkbox"> {{ $t('toggle.name') }}
                </div>
               <ul>
                   <li v-for="prop in data.extensions" :key="prop.code">
                       <input type="checkbox"> {{prop.name}}
                   </li>                   
               </ul>
            </div>
        </section>
    </div>
</template>
<script>
export default {
	props: {
		data:Object,
        title: String,
        type : String
    },
    computed: {
        buttonLabel: function() {

            if (this.type != null && this.type == 'update') {
                return 'btn.update.label';
            }
            return 'btn.initialize.label';
        }
    }
}
</script>
<style scoped>
 @import url('./css/init_styles.css');
</style>