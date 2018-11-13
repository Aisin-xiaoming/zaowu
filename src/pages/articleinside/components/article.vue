<template>
	<div class="article">
	<p class="title">一起来观看 Wes Anderson的色彩回旋舞</p>
	<p class="title1">	对称I色彩I构图 </p>
	<img class="scene" src="@/assets/find/jing.png" alt="sorry">
	<p class="author">auth：刘辛越</p>
	<p class="footer-title">风格即永存</p>
	<div class="footer-img">
		<img src="@/assets/find/home.png" alt="sorry">
		<img src="@/assets/find/timg.png" alt="sorry">
	</div>
	<input class="footer-input" type="text" value="发表你的观点吧">
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	.article{
		width: 100%;
		margin-top: 70px;
		/*background-color: red;*/
	}
	
	.article .title{
		width: 280px;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #010E0D;
		text-align: center;
		margin:10px auto 10px;
		letter-spacing: 0.2px;

	}
	.article .title1{
		font-size: 12px;
		text-align: center;
		color: #999999;
		letter-spacing: 0.7px;
	}
	.article .scene{
		display: block;
		width: 186px;
		margin:5px auto 0;
	}
	.article .author{
		position: absolute;
		top: 270px;
		right: 30px;
		width: 203px;
		font-size: 12px;
		color: #999999;
		text-align: center;
	}
	.article .footer-title{
		position: absolute;
		top: 330px;
		left: 55px;
		font-size: 18px;
		color: #010E0D;
		text-align: center;
	}
	.article .footer-img{
		width: 278px;
		margin:88px auto 0;
	}
	.article .footer-input{
		position: absolute;
		bottom: 2px;
		left: 30px;
		width: 220px;
		height: 22px;
		font-size: 12px;
		color: #585858;
		border: 1px solid #999999;
		text-align: center;
	}
</style>