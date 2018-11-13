<template>
	<div class="my-collect">
		<router-link tag='div' to='/mycollect' class="title">
			<p>我的收藏</p>
			<img  src="@/assets/my/arrow.png" alt="sorry">
		</router-link>
		<ul>
			<router-link tag='li' to='/' class="titles">
				<img class="pic" src="@/assets/my/cang1.png" alt="sorry">
				<p class="tp">物品</p>
			</router-link>
			<router-link tag='li' to='/' class="titles">
				<img class="pic" src="@/assets/my/cang2.png" alt="sorry">
				<p class="tp">品牌</p>
			</router-link>
			<router-link tag='li' to='/' class="titles">
				<img class="pic" src="@/assets/my/cang3.png" alt="sorry">
				<p class="tp">文章</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
	.my-collect{
		overflow: hidden;
		width: 336px;
		height: 119px;
		border-radius: 4px;
		/*background-color: blue;*/
	}
	.my-collect .title{
		position: relative;
		top: 0;
		left: 0;
		width: 336px;
		height: 38px;
		line-height: 38px;
		border-bottom: 1px solid #E5E5E5;
	}
	.my-collect .title p{
		position: absolute;
		text-indent: 20px;
		font-size: 16px;
	}
	.my-collect .title img{
		position: absolute;
		top: 9px;
		right: 15px;
	}
	.my-collect ul{
		width: 100%;
		height: 79px;
	}
	.my-collect ul li{
		float: left;
		width: 112px;
		height: 40px;
		margin-top: 14px;
	}
	.my-collect ul li img{
		width: 28px;
		height: 28px;
		padding:0 45px;
	}
	.my-collect ul li p{
		font-size: 14px;
		text-align: center;
		margin-top: 10px;
	}
	
</style>