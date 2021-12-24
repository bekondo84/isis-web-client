<template>
	<div>
		<editor-component  :title="title">

		</editor-component>
	</div>
</template>
<script>
import EditorComponent from './../components/EditorComponent';
import { mapMutations ,mapGetters} from 'vuex'

export default {
	inject: ['eventBus'],
	components: {
		EditorComponent
	},
	data: function() {
		return {
			title: "script.page.title"
		}
	},
	methods: {
       ...mapMutations({
		   setData: "setData",
	   }),
	   ...mapGetters({
		   getData: "getData"
	   })
	},created() {
		let data = new Object();
		data.language = 'groovy';
		data.script = null ;
		data.rollback = false;
		this.setData(data);
		this.eventBus.$emit('statement-type-change');
	}
	
}
</script>