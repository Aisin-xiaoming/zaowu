<template>
	<div class="my-header">
		<img src="@/assets/my/zhu.png" alt="sorry">
		<router-link tag='div' to='/waittake'><img class="horse" src="@/assets/my/icon.png" alt="sorry"></router-link>
		<router-link tag='div' to='/comset'><img class="icon" src="@/assets/my/icon1.png" alt="sorry"></router-link>
		<div class="login">
			<router-link tag='div' to='/login'><p class="zhu">注册</p></router-link>
			<router-link tag='div' to='/land'><p>登录</p></router-link>
		</div>

	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
	.my-header{
		overflow: hidden;
		position: relative;
		width: 375px;
		height: 192px;
		background-color: red;
	}
	.my-header .horse{
		position: absolute;
		left: 150px;
		top: 10px;
	}
	.my-header .icon{
		position: absolute;
		top: 10px;
		right: 18px;
	}
	.my-header .login{
		position: absolute;
		left: 140px;
		bottom: 56px;
		width: 94px;
		height: 32px;
		line-height: 32px;	
		background: #FFFFFF;

	}
	.login>div{
		float: left;
	}
	.login>div>p{
		width: 45px;
		font-size: 14px;
		text-align: center;
	}
	.login>div .zhu{
		border-right: 1px solid #999999;
	}
	

	
</style>