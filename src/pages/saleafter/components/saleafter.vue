<template>
	<div class="saleafter">
		<div class="title">服务类型</div>
		<div class="kind">
			<span>换货</span>
			<span>退货</span>
			<span>仅退款</span>
		</div>
		<div class="details">
			<img src="@/assets/kind/nei3.png" alt="sorry">
			<div class="detail">
				<p>ESSENCE</p>
				<p>女士Cozy吊带性感睡衣 </p>
				<p>价格：¥219 数量：x1</p>
			</div>
		</div>
		<div class="title">问题描述</div>
		<div class="input">
			<input  type="text" value="请您在此描述问题">
		</div>
		<div class="photo">
			<img class="img1" src="@/assets/icon/222.png" alt="sorry">
			<img class="img2" src="@/assets/icon/111.png" alt="sorry">
		</div>
		<p class="submit">提交</p>
	</div>
</template>
<script>
	export default{
		components:{
		}


	}
</script>
<style scoped>
	.saleafter{
		width: 100%;
		/*background-color: blue;*/
	}
	.saleafter .title{
		width: 65px;
		height: 22px;
		line-height: 22px;
		margin-top: 19px;
		margin-left: 19px;
		font-size: 16px;
		color: #010E0D;
		letter-spacing: 0.19px;
	}
	.saleafter .kind{
		width: 100%;
		height: 28px;
		margin-top: 25px;
	}
	.saleafter .kind span{
		display: inline-block;
		width: 78px;
		line-height: 28px;
		font-size: 14px;
		color: #494949;
		letter-spacing: 0.17px;
		text-align: center;
		border: 1px solid #BBBBBB;
		border-radius: 4px;
		margin-left: 25px;
	}
	.saleafter .details{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 335px;
		margin:70px auto;
	}
	.details img{
		width: 66px;
		height: 66px;
	}
	.details .detail{
		position: absolute;
		top: 0;
		right: 0;
		width: 235px;
	}
	.details .detail p{
		font-size: 14px;
		color: #494949;
		letter-spacing: 0.17px;
		line-height: 25px;
	}
	.saleafter .input{
		width: 335px;
		height: 155px;
		/*background-color: red;*/
		border-radius: 4px;
		margin:25px auto;
	}
	.saleafter .photo{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 32px;
		margin-top: 20px;
	}
	.saleafter .photo .img1{
		position: absolute;
		top: 0;
		left: 40px;
		width: 32px;
		height: 32px;
	}
	.saleafter .photo .img2{
		position: absolute;
		top: 0;
		left: 120px;
		width: 32px;
		height: 32px;
	}
	.saleafter .submit{
		width: 185px;
		height: 44px;
		line-height: 44px;
		text-align: center;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0.19px;
		margin:32px auto;
		background: #1C4B47;
		border-radius: 8px;
	}
</style>