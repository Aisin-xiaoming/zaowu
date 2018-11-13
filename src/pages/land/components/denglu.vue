<template>
	<div class="zulang">
		<div class="contant">
			<input class="tel" type="value" value="请输入账号或手机号">
		</div>
		<div class="contant">
			<input class="tel" type="value" value="请输入密码">
		</div>
		<div class="denglu">
			<p>登录</p>
		</div>
		<div class="select">
			<router-link tag='p' to='/login' class="zhu">注册账户</router-link>
			<router-link tag='p' to='/' class="forget">忘记密码</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
	.zulang{
		position: absolute;
		top: 265px;
		left: 66px;
		width: 100%;
		height: 100px;
		/*background-color: red;*/
	}
	.zulang .contant{
		margin-top: 23px;
		width: 239px;
		border-bottom: 1px solid #BDBDBD;
	}
	.zulang .contant .tel{
		width: 126px;
		font-size:14px;
		color: #A4A4A4;
		margin-bottom: 5px;
	}
	.zulang .denglu{
		margin-top: 28px;
		width: 243px;
		height: 44px;
		line-height: 44px;
		background: #1C4B47;
		border-radius: 4px;
	}
	.zulang .denglu p{
		font-size: 16px;
		color: #FFFFFF;
		text-align: center;
	}
	.zulang .select{
		overflow: hidden;
		margin-top: 16px;
		width: 243px;
	}
	.zulang .select p{
		width: 53px;
		height: 18px;
		font-size:13px;
	}
	.zulang .select .zhu{
		float: left;
	}
	.zulang .select .forget{
		float: right;
	}
</style>