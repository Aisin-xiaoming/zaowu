<template>
	<div class="comset">
			
		<mo-container></mo-container>
		<router-view/>
	</div>
</template>
<script>
	import MoContainer from './components/container'
	import {mapMutations} from 'vuex'
	export default{
		created(){
			this.setNavShow(false)
			// console.log(this.setNavShow)
			// console.log('fff')
		},
		methods:{
			...mapMutations({
				setNavShow:'setNavShow'
			})
		},
		components:{
				MoContainer,
		}
	}
</script>
<style scoped lang="styl">

</style>
