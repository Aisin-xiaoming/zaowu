<template>
	<div class="home">
		home页面
		<bo-header/>
		<mo-betterscroll class="wrapper">
			<div>
				
				<bo-container/>
				<bo-banner/>
			</div>
		</mo-betterscroll>
		<!-- <bo-nav></bo-nav> -->
	</div>
</template>
<script>
import MoBetterscroll from '@/components/betterscroll'
	// import BoNav from '@/components/nav'
	import BoHeader from '@/components/header'
	import BoBanner from './components/banner'
	import BoContainer from './components/container'
	import {mapMutations} from 'vuex'
	export default{
		created(){
			this.setNavShow(true)
			// console.log(this.setNavShow)
			// console.log('fff')
		},
		methods:{
			...mapMutations({
				setNavShow:'setNavShow'
			}),
			handleClick(){
				this.$router.go(-1)
			}
		},
		components:{
			MoBetterscroll,
			// BoNav,
			BoHeader,
			BoBanner,
			BoContainer
		},
	}
</script>
<style scoped lang="styl">
	.wrapper{
		height: 100px;
	}

</style>