<template>
	<div class="agood">
		<img class="beauty" src="@/assets/find/beauty.png" alt="sorry">
		<p class="look">可居家可外出的cozy look。它适合床，沙发，咖啡
	店，美术馆，森林公园…… ​​​​</p>
		<img class="beauty1" src="@/assets/find/beauty1.png" alt="sorry">
		<div class="footer-title">
			<p class="many">￥ 475.80</p>
			<p class="title">查看详情</p>
		</div>
		<p class="bottom">Foundation无缝吊带＆In Bed睡裤与睡袍</p>
		<p class="bottom-d">一套舒适的家居服，是我们缓解疲劳与想家情绪的最</p>
		<p class="bottom-dd">佳良品。直筒罗纹睡裤，蓬松柔软，搭配同色系的无</p>

	</div>
</template>
<script>
	export default{
		data(){
			return{

		}
	}
}
</script>
<style scoped>
	.agood{
		width: 100%;
		/*background-color: red;*/
	}
	.agood .beauty{
		display: block;
		width: 335px;
		margin:43px auto 0;
	}
	.agood .look{
		margin:17px auto ;
		width: 333px;
		font-size: 14px;
		color: #494949;
		letter-spacing: 0.71px;
	}
	.agood .beauty1{
		display: block;
		width: 335px;
		margin:0 auto;
	}
	.agood .footer-title{
		width: 100%;
	}
	.footer-title .many{
		position: absolute;
		top: 560px;
		left: 17px;
		font-size: 11px;
	}
	.footer-title .title{
		position: absolute;
		top: 560px;
		right: 25px;
		font-size: 11px;
	}
	.agood .bottom{
		position: absolute;
		top: 585px;
		left: 17px;
		font-size: 14px;
		color: #010E0D;
		letter-spacing: 0.71px;
	}
	.agood .bottom-d{
		position: absolute;
		top: 610px;
		left: 17px;
		font-size: 14px;
		color: #1F1F1F;
	}
	.agood .bottom-dd{
		position: absolute;
		top: 630px;
		left: 17px;
		font-size: 14px;
		color: #1F1F1F;
	}
</style>