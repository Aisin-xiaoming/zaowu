<template>
	<div class="header">
		<router-link tag='div' to='/my' class="sou">
			<img src="@/assets/icon/返回.png" alt="sorry">
		</router-link>
		<p v-if='isTitle' class="title">我的收货地址</p>
		<p v-else class="title">我的订单</p>
		<a v-if='isShop' class="shop" href="#"><img src="@/assets/icon/添加图标.png" alt="sorry"></a>
		<a v-else class="shop" href="#"><img src="@/assets/home/sousuo.png" alt="sorry"></a>
	</div>
	
</template>
<script>
	export default {
		props:{
			isShop:{
				default:true
			},
			isTitle:{
				default:true
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
		border-bottom: 1px solid #E5E5E5;

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