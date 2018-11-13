<template>
	<div class="login">
		<mo-zhuce></mo-zhuce>
	</div>
</template>
<script>
import MoZhuce from './components/zhuce'
import {mapMutations} from 'vuex'
export default{
	created(){
		this.setNavShow(false)
	},
	methods:{
		...mapMutations({
			setNavShow:'setNavShow'
		})
	},
	components :{

		MoZhuce,

	}

}
	
</script>
<style scoped>
	
</style>