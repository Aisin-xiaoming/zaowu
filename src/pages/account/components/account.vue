<template>
	<div class="account">
		<ul class="account-list">
			<li class="list" v-for=" list in lists">
				<p>{{list.p}}</p>
				<img :src="list.img" alt="sorry">
			</li>
		</ul>
		<div class="out">
			
			<a href="#">退出登录</a>
		</div>
	</div>
</template>
<script>
import Moming from '@/assets/icon/返回灰.png'
	export default{
		data(){
			return{
				lists:[
					{
						id:1,
						p:'个人资料',
						img:Moming,
					},
					{
						id:2,
						p:'修改绑定手机',
						img:Moming,
					},
					{
						id:3,
						p:'设置登录密码',
						img:Moming,
					},
					{
						id:4,
						p:'微信账号',
						img:Moming,
					},
					{
						id:5,
						p:'QQ账号',
						img:Moming,
					},
					{
						id:6,
						p:'支付绑定',
						img:Moming,
					},
				],
			}
		},
	}
</script>
<style scoped>
	.account{
		width: 100%;
	}
	.account .account-list{
		width: 100%;
		/*background-color: red;*/
	}
	.account .account-list .list{
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 60px;
		border-bottom:  1px solid #D8D6D6;
	}
	.account .account-list .list p{
		font-size: 16px;
		color: #494949;
		margin-left: 20px;
		line-height: 60px;
	}
	.account .account-list .list img{
		position: absolute;
		top: 20px;
		right:15px;

	}
	.account .out{
		width: 185px;
		height: 44px;
		background: #1C4B47;
		border-radius: 4px;
		margin: 35px auto;
	}
	.account .out a{
		display: block;
		font-size: 16px;
		color: #FFFFFF;
		line-height: 44px;
		text-align: center;
	}
</style>