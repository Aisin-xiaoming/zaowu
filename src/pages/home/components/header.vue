<template>
	<div class="header">
		<p>ZAOWU 造物</p>
		<a class="sou" href="#"><img src="../img/sousuo.png" alt="sorry"></a>
		<a class="copy" href="#"><img src="../img/copy.png" alt="sorry"></a>
		<a class="shop" href="#"><img src="../img/shop.png" alt="sorry"></a>
		<!-- {{msg}} -->
	</div>
	
</template>
<script>
	export default {
		data(){
			return {
				// msg:'这是一个首页的头部呀'
			}
		}
	}
</script>
<style scoped >
	.header{
		position: relative;
		width: 375px;
		/*height: 52px;*/
		margin:0 auto;
		/*background-color: red;*/

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