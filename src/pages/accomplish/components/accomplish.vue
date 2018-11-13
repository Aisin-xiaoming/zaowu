<template>
	<div class="accomplish">
		<div class="icon"></div>
		<p>恭喜您支付成功</p>
		<router-link class="look" tag="div" to="/myorder">查看我的订单</router-link>
		<router-link class="return" tag="div" to="/">返回首页</router-link>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
.accomplish{
	width: 100%;
}
.accomplish .icon{
	width: 88px;
	height: 88px;
	background:url('../../../assets/icon/分组.png');
	margin:150px auto 30px;
}
.accomplish  p{
	font-size: 20px;
	color: #494949;
	text-align: center;
}
.accomplish .look{
	width: 230px;
	height: 60px;
	line-height: 60px;
	background: #1C4B47;
	border-radius: 4px;
	font-size: 20px;
	color: #FFFFFF;
	text-align: center;
	margin: 60px auto 20px;
}
.accomplish .return{
	width: 230px;
	height: 60px;
	line-height: 60px;
	border: 1px solid #E5E5E5;
	border-radius: 4px;
	font-size: 20px;
	text-align: center;
	margin:0 auto;
}
</style>