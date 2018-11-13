<template>
	<div class="bottom">
		<div class="xin" >
			<img src="@/assets/icon/collectxin.png" alt="sorry">
		</div>
		<img class="service" src="@/assets/icon/service.png" alt="sorry">
		<span @click="copyClick"  class="copy" >加入购物车</span>
		<span @click="shoppingClick" class="shopping" >立即购买</span>
	</div>
	
</template>
<script>
	export default {
		
		
		data(){
			return {
				// msg:'这是一个首页的头部呀'
			}
		},
		methods:{
			//向父发送事件
			copyClick(){

				this.$emit('copyClick');
			},
			shoppingClick(){
				this.$emit('shoppingClick');
			}
		}
	}
</script>
<style scoped >
	.bottom{
		z-index: 1000;
		position: fixed;
		bottom:0;
		right: 0;
		width: 100%;
		height: 52px;
		margin:0 auto;
		background-color: #fff;

	}
	
	.bottom .xin{
		position: absolute;
		left: 14px;
		bottom: 8px;
	}
	.bottom .service{
		position: absolute;
		left:60px;
		bottom:8px;
	}
	.bottom span{
		width: 113px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border: 1px	 solid #1C4B47;
		border-radius: 4px;
		font-size: 15px;
	}
	.bottom .copy{
		position: absolute;
		left: 125px;
		bottom: 3px;
		color: #1C4B47;
		
	}
	.bottom .shopping{
		position: absolute;
		bottom: 3px;
		right: 16px;
		background: #1C4B47;
		color: #FFFFFF;
	}
</style>