<template>
	<div>
		<editor-component :title="title"></editor-component>
	</div>
</template>
<script>
const EditorComponent = () => import("./../components/EditorComponent");
import { mapMutations ,mapGetters} from 'vuex'

export default {
	inject: ['eventBus'],
	components: {
		EditorComponent
	},
	data: function() {
		return {
			title: "impexexport.page.title"
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
		data.language = 'export';
		data.script = null ;
		data.rollback = false;
		this.setData(data);
		this.eventBus.$emit('statement-type-change');
	}
}
</script>