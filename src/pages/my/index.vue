<template>
	<div class="my">
		<mo-header></mo-header>
		<mo-container class='my-container'></mo-container>
		<mo-collect class="my-collect"></mo-collect>
		<mo-myabout class="my-about"></mo-myabout>
		<!-- <bo-nav></bo-nav> -->
	</div>
</template>
<script>
	// import BoNav from '@/components/nav'
	import MoHeader from './components/header'
	import MoContainer from './components/container'
	import MoCollect from './components/collect'
	import MoMyabout from './components/myabout'
	import {mapMutations} from 'vuex'
	export default{
		created(){
			this.setNavShow(true)
		},
		methods:{
			...mapMutations({
				setNavShow:'setNavShow'
			})
		},
		components:{
			// BoNav,
			MoHeader,
			MoContainer,
			MoCollect,
			MoMyabout
		}
	}
</script>
<style scoped lang="styl">
	.my{
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		padding-bottom: 83px;
	}
	.my .my-container{
		position: absolute;
		top:165px;
		left: 19px;
	}
	.my .my-collect{
		position: absolute;
		top: 295px;
		left: 19px;
	}
	.my .my-about{
		position: absolute;
		top:415px;
		left: 19px;
		margin-bottom: 88px;
	}
	

</style>