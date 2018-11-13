<template>
	<div class="login">
		<router-link tag='div' to='/my' class="picture">
			<img src="@/assets/icon/返回.png" alt="sorry">
		</router-link>
		<div class="logo">
			<img src="@/assets/loginlang/1.png" alt="sorry">
		</div>
		<div class="contant">
			<input class="tel" type="value" value="请输入手机号">
			<a href="#">获取验证码</a>
		</div>
		<div class="code">
		<input  type="value" value="请输入验证码">
		</div>
		<div class="footer">
			<p>注册</p>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	.login{
		position: relative;
		left: 0;	
		top: 0;
		right: 0;
		bottom: 0;
		width: 375px;
		/*height: 888px;*/
		/*background-color: blue;*/
	}
	.login .picture{
		width: 100%;
	}
	.login .picture img{
		position: absolute;
		top: 14px;
		left: 15px;
	}
	.login .logo{
		width: 100%;
	}
	.login .logo img{
		position: absolute;
		width: 151px;
		height: 152px;
		top: 71px;
		left: 111px;
	}
	.login .contant{
		position: absolute;
		top: 290px;
		left: 68px;
		width: 241px;
		border-bottom: 1px solid #BDBDBD;
	}
	.login .contant .tel{
		width: 84px;
		font-size:14px;
		color: #A4A4A4;
		margin-bottom: 2px;
	}
	.login .contant a{
		font-size:14px;
		color: #A4A4A4;
		margin-left: 75px;
		background-color: #1C4B47;
	}
	.login .code{
		position: absolute;
		top: 340px;
		left: 68px;
		width: 241px;
		border-bottom: 1px solid #BDBDBD;
	}
	.login .code input{
		width: 84px;
		font-size:14px;
		color: #A4A4A4;
		margin-bottom: 2px;
	}
	.login .footer{
		position: absolute;
		top: 400px;
		left: 68px;
		width: 243px;
		height: 44px;
		line-height: 44px;
		background: #1C4B47;
		border-radius: 4px;
	}
	.login .footer p{
		font-size: 16px;
		color: #FFFFFF;
		text-align: center;
	}

</style>