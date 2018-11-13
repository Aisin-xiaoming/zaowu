<template>
	<div class="top">
		<router-link tag='div' to='/find' class="return">
			<img src="@/assets/icon/返回.png" alt="sorry">
		</router-link>
		<p class="title">好物推荐</p>
		<router-link tag='div' to='/find' class='share'>
			<img src="@/assets/icon/分享.png" alt="sorry">
		</router-link>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	.top{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
	}
	.top .return{
		position: absolute;
		top: 12px;
		left: 12px;
	}
	.top p{
		font-size: 18px;
		color: #010E0D;
		text-align: center;
		margin-top:12px;
	}
	.top .share{
		position: absolute;
		top: 12px;
		right: 18px;
	}
</style>