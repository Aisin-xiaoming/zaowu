<template>
	<div class="find">
		<mo-container @itemClick='itemClick' @goodClick="goodClick"></mo-container>
		<mo-item v-if="isShow" class="item"></mo-item>	
		<mo-goodrecommend v-else></mo-goodrecommend>
		<bo-nav/>
		<router-view/>
	</div>
</template>
<script>
	import BoNav from '@/components/nav'
	import MoContainer from './components/container'
	import MoItem from './components/item'
	import MoGoodrecommend from './components/goodrecommend'
	export default{
		data(){
			return{
				isShow:true
			}
		},
		components:{
			BoNav,
			MoContainer,
			MoItem ,
			MoGoodrecommend,
		},
		methods:{
			itemClick(){
				this.isShow = true
			},
			goodClick(){
				this.isShow = false
			},
		}
	}
</script>
<style scoped lang="styl">
	.find{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #1C4B47;
		
	}
	.find .item{
		/*margin-bottom: 88px;*/
	}

</style>