<template>
<div class="tops">
	<div class="picture" @click="pictureClick">
		<img src="@/assets/icon/返回.png" alt="sorry">
	</div>
	<p class="title">物流详情</p>
</div>
</template>
<script>
	export default{
		methods:{
			pictureClick(){
				this.$router.go(-1);
			}
		},

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