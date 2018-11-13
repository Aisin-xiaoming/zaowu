<template>
<div class="tops">
	<router-link tag='div' to='/my' class="picture">
		<img src="@/assets/icon/返回.png" alt="sorry">
	</router-link>
	<p class="title">支付完成</p>
</div>
</template>
<script>
	export default{


	}
</script>
<style scoped>
	.tops{
		position: relative;
		left: 0;	
		top: 0;
		right: 0;
		bottom: 0;
		width: 375px;
	}
	.tops .picture{
		width: 100%;
	}
	.tops p{
		font-size: 20px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		padding-top:11px;
	}
	.tops .picture img{
		position: absolute;
		top: 14px;
		left: 15px;
	}
</style>