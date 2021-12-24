<template>
	<div>
		<editor-component
		  :title="title">

		</editor-component>
	</div>
</template>
<script>
import { mapMutations ,mapGetters} from 'vuex'
import EditorComponent from './../components/EditorComponent'

export default {
	inject: ['eventBus'],
	components: {
		EditorComponent
	},
	data: function() {
		return {
			title: "impeximport.page.title",
			data : {
				language: "impex",
				script : null 
			}
		}
	},
	methods: {
       ...mapMutations({
		   setData: "setData",
	   }),
	   ...mapGetters({
		   getData: "getData"
	   })
	},
	created() {		
		let data = new Object();
		data.language = 'impex';
		data.script = null ;
		data.rollback = false;
		this.setData(data);
        this.eventBus.$emit('statement-type-change');
	}
}
</script>