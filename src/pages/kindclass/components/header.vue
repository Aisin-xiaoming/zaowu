<template>
	<div class="header">
		<div class="sou" @click="souClick">
			<img src="@/assets/home/return.png" alt="sorry">
		</div>
		
		<p class="title">商品详情</p>
		<a  class="copy" href="#"><img src="@/assets/icon/分享.png" alt="sorry"></a>
		<router-link class="shop" tag="div" to="/shopping">
			<img src="@/assets/home/shop.png" alt="sorry">
		</router-link>
		<!-- {{msg}} -->
	</div>
	
</template>
<script>
	export default {
		methods:{
			souClick(){
				this.$router.go(-1);
		},
	},
		data(){
			return {
				// msg:'这是一个首页的头部呀'
			}
		}
	}
</script>
<style scoped >
	.header{
		position: fixed;
		top: 0;
		left: 0;
		width: 375px;
		height: 52px;
		margin:0 auto;
		background-color: #fff;

	}
	.header p{
		font-size: 20px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		padding-top:11px;
	}
	.header .sou{
		position: absolute;
		/*display: inline-block;*/
		width: 20px;
		height: 20px;
		top:14px;
		left: 16px;
	}
	.header .copy{
		position: absolute;
		width: 22px;
		height: 22px;
		top:14px;
		right: 59px;
	}
	.header .shop{
		position: absolute;
		width: 23px;
		height: 22px;
		top:13px;
		right: 16px;
	}
</style>