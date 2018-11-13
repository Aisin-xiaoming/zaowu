<template>
	<div class="confirm">
		<div class="add">
			<p>添加收货地址</p>
			<img src="@/assets/icon/返回灰.png" alt="sorry">
		</div>
		<div class="des">
			<img src="@/assets/kind/nei1.png" alt="sorry">
			<div class="title">
				<p>ESSENCE</p>
				<p>女士Cozy圆领吊带性感睡衣</p>
				<p>
					<span class="span money">¥219</span>
				 	<span class="span number">x 2</span> 
				</p>
			</div>
		</div>
		<div class="discounts">
			<p>优惠券</p>
			<img src="@/assets/icon/返回灰.png" alt="sorry">
		</div>
		<div class="beizhu">
			<span>备注</span>
			<span>选填</span>
		</div>
		<div class="zong">
			<span class="l">商品总额</span>
			<span class="r">¥438</span>
		</div>
		<div class="freight">
			<span>运费</span>
			<span>¥10.0</span>
		</div>
		<div class="pocket">
			<span>实付金额</span>
			<span>¥448</span>
		</div>
		<div class="fmoney">
			<div class="box wx">
			<img src="@/assets/icon/微信.png" alt="sorry">
			<p class="title">微信支付</p>
			<p class="title1">微信安全支付</p>
		</div>
			<div class="box zfb">
				<img src="@/assets/icon/支付宝.png" alt="sorry">
				<p class="title">支付宝支付</p>
				<p class="title1">支付宝安全支付</p>
			</div>
		</div>
		<div class="payment">立即支付 ¥448</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
.confirm{
	width: 100%;
	/*background-color: red;*/
}
	.confirm .add{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 22px;
	}
	.confirm .add p{
		position: absolute;
		top: 0;
		left: 18px;
		font-size: 16px;
		color: #010E0D;
		line-height: 22px;
	}
	.confirm .add img{
		position: absolute;
		top: 0;
		right:18px;
	}
	.confirm .des{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 335px;
		height: 115px;
		background-color: #fff;
		margin:25px auto;
	}
	.confirm .des img{
		position: absolute;
		top: 19px;
		left: 25px;
		width: 78px;
		height: 78px;
	}
	.confirm .des .title{
		position: absolute;
		top: 30px;
		left: 115px;
	}
	.confirm .des .title p{
		font-size: 14px;
		color: #494949;
		line-height: 20px;
	}
	.confirm .des .title p .span{
		font-size: 16px;
		color: #1C4B47;
	}
	.confirm .des .title p .number{
		padding-left:145px;
	}
	.confirm .discounts{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 22px;
	}
	.confirm .discounts p{
		position: absolute;
		top: 0;
		left: 18px;
		font-size: 16px;
		color: #010E0D;
		line-height: 22px;
	}
	.confirm .discounts img{
		position: absolute;
		top: 0;
		right:18px;
	}
	.confirm .beizhu{
		padding-left: 20px;
		margin-top: 32px;
		width: 100%;
		height: 22px;
		box-sizing: border-box;
		/*防止padding撑大盒子加box-sizing: border-box;
		*/
	}
	.confirm .beizhu span{
		font-size: 16px;
		color: #494949;
	}
	.confirm .zong{
		margin-top: 35px;
		padding-left: 20px;
		box-sizing: border-box;
		width: 100%;
		height: 22px;
	}
	.confirm .zong span{
		font-size: 16px;
		color: #494949;
	}
	.confirm .freight{
		margin-top: 35px;
		padding-left: 20px;
		box-sizing: border-box;
		width: 100%;
		height: 22px;
	}
	.confirm .freight span{
		font-size: 16px;
		color: #494949;
	}
	.confirm .pocket{
		margin-top: 35px;
		padding-left: 235px;
		box-sizing: border-box;
		width: 100%;
		height: 22px;
	}
	.confirm .pocket span{
		font-size: 16px;
		color: #000000;
	}
	.confirm .fmoney{
		/*overflow: hidden;*/
		width: 335px;
		height: 125px;
		margin:35px auto;
		/*background-color: pink;*/
	}
	.confirm .fmoney .box{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 60px;
		float: left;
	}
	.confirm .fmoney .box img{
		position: absolute;
		top: 20px;
		left: 6px;
	}
	.confirm .fmoney .box p{
		font-size: 14px;
		color: #010E0D;
		line-height: 20px;
	}
	.confirm .fmoney .box .title{
		position: absolute;
		top: 12px;
		left: 50px;
	}
	.confirm .fmoney .box .title1{
		position: absolute;
		top: 35px;
		left: 50px;
	}
	.confirm .payment{
		width: 185px;
		height: 44px;
		line-height: 44px;
		background: #1C4B47;
		border: 1px solid #979797;
		border-radius: 4px;
		margin:0 auto;
		font-size: 14px;
		color: #FFFFFF;
		text-align: center;
	}
</style>