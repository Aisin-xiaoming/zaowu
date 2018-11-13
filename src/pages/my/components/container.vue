<template>
	<div class="my-container">
		<router-link tag='div' to='/myorder' class="title">
			<p>我的订单</p>
			<img  src="@/assets/my/arrow.png" alt="sorry">
		</router-link>
		<ul>
			<router-link tag='li' to='/shopconfirm' class="titles">
				<img class="pic" src="@/assets/my/fu1.png" alt="sorry">
				<p class="tp">待付款</p>
			</router-link>
			<router-link tag='li' to='/myorderdetails' class="titles">
				<img class="pic" src="@/assets/my/shou2.png" alt="sorry">
				<p class="tp">待收货</p>
			</router-link>
			<router-link tag='li' to='/accomplish' class="titles">
				<img class="pic" src="@/assets/my/wan3.png" alt="sorry">
				<p class="tp">已完成</p>
			</router-link>
			<router-link tag='li' to='/saleafter' class="titles">
				<img class="pic" src="@/assets/my/shou4.png" alt="sorry">
				<p class="tp">售后</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
.my-container{
	overflow: hidden;
	width: 336px;
	height:119px;
	border-radius: 4px;
	background: #FFFFFF;
	/*background-color: red;*/
}
.my-container .title{
	position: relative;
	top: 0;
	left: 0;
	width: 336px;
	height: 38px;
	line-height: 38px;
	border-bottom: 1px solid #E5E5E5;
}
.my-container .title p{
	position: absolute;
	text-indent: 20px;
	font-size: 16px;

}
.my-container .title img{
	position: absolute;
	right: 15px;
	top: 10px;
}
.my-container ul{
	width: 100%;
	height: 79px;
}
.my-container ul li{
	margin-top: 13px;
	width: 84px;
	height: 79px;
	float: left;
}
.my-container ul li img{
	width: 28px;
	height: 28px;
	padding:0 25px;

}
.my-container ul li p{
	margin-top: 10px;
	font-size:14px;
	text-align: center;
}
</style>