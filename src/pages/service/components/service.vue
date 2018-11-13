<template>
	<div class="onlineconsult">
		<div class="box girl">
			<img class="girlimg" src="@/assets/collect/horse.png" alt="sorry">
			<p class="girlp">亲爱的造物用户，您已经进入人工服务</p>
		</div>
		<div class="box boy">
			<p class="boyp">儿童房装饰品小摆件仿真动物支架鲸鱼摆件</p>
			<img class="boyimg" src="@/assets/collect/head.png" alt="sorry">
		</div>
		<div class="box girl">
			<img class="girlimg" src="@/assets/collect/horse.png" alt="sorry">
			<p class="girlp girlpp">小独角兽觅觅很高兴为您服务，请问有什么可以帮您？</p>
		</div>
	</div>
</template>
<script>

	export default{
	}
</script>
<style lang="" scoped>
	.onlineconsult{
		width: 100%;
		/*background-color: red;*/
	}
	.onlineconsult .box{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		margin-top: 60px;
	}
	.onlineconsult .box img{
		width: 55px;
		height: 55px;
	}
	.onlineconsult .box .girlimg{
		position: absolute;
		top: 0;
		left: 20px;
		
	}
	.onlineconsult .box p{
		height: 50px;
		line-height: 50px;
		font-size: 13px;
		color: #494949;
		background-color: #F7F7F7;
		border-radius: 4px;
	}
	.onlineconsult .box .girlp{
		position: absolute;
		top: 10px;
		left: 100px;
		
	}
	.onlineconsult .box .girlpp{
		width: 220px;
	}
	.onlineconsult .box .boyimg{
		position: absolute;
		top: 0;
		right: 10px;
	}
	.onlineconsult .box .boyp{
		position: absolute;
		top: 10px;
		right: 100px;
	}
</style>
