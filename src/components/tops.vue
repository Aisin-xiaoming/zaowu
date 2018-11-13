<template>
	<div class="tops">
		<router-link tag='div' to='/my' class="picture">
			<img src="@/assets/icon/返回.png" alt="sorry">
		</router-link>
		<div class="logo">
			<img src="@/assets/loginlang/1.png" alt="sorry">
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.tops{
		position: relative;
		left: 0;	
		top: 0;
		right: 0;
		bottom: 0;
		width: 375px;
		/*height: 888px;*/
		/*background-color: blue;*/
	}
	.tops .picture{
		width:375px;
	}
	.tops .picture img{
		position: absolute;
		top: 14px;
		left: 15px;
	}
	.tops .logo{
		width: 100%;
	}
	.tops .logo img{
		position: absolute;
		display: block;
		width: 151px;
		height: 152px;
		top: 71px;
		left: 111px;
	}
</style>