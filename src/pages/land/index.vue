<template>
	<div class="land">

		<mo-tops></mo-tops>
		<mo-denglu></mo-denglu>
		<mo-third class="third"></mo-third>
	</div>	
</template>
<script>
import MoTops from '@/components/tops'
import MoDenglu from './components/denglu'
import MoThird from './components/third'
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
		components:{
			MoTops,
			MoDenglu,
			MoThird

		}
	}
</script>
<style scoped>
.land{
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 375px;
	height: 100%;
}
.land .third{
	position: absolute;
	left: 73px;
	/*bottom: 50px;*/
}
	
</style>