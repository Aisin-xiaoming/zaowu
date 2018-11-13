<template>
	<div class="third">
		<div class="top">
			<span class="left"></span><p>第三方登录</p><span class="right"></span>
		</div>
		<ul class="footer">
			<router-link tag='li' to='/login' class="zhu">
				<img class="first" src="@/assets/loginlang/Group 14.png" alt="sorry">
			</router-link>
			<router-link tag='li' to='/login' class="zhu">
				<img src="@/assets/loginlang/Group.png" alt="sorry">
			</router-link>
			<router-link tag='li' to='/login' class="zhu">
				<img src="@/assets/loginlang/Group 3.png" alt="sorry">
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
.third{
	position: absolute;
	top: 500px;
	left: 162px;
	width: 243px;
}
.third .top{
	position: relative;	
	top: 0;
	left: 0;
	height: 20px;
	width: 100%;
	text-align: center;
}
.third .top p{
	position: absolute; 
	left: 88px;
	top: 0;
	width: 66px;
	height: 18px;
	font-size:13px;
	text-align: center;
	float: left;
}
.third .top .left{
	position: absolute;
	top: 6px;
	left: 0;
	width: 77px;
	height: 2px;
	background-color: #BDBDBD;
}
.third .top .right{
	position: absolute;
	top: 6px;
	right: 0;
	width: 77px;
	height: 2px;
	background-color: #BDBDBD;
}
.third .footer{
	width: 100%;
}
.third .footer li{
	float: left;
	width: 33.33%;
	height: 100%;
}
</style>