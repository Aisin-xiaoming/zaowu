<template>
	<div class="orderdetails">
		<div class="top">
			<img class="icon" src="@/assets/icon/进行中.png" alt="sorry">
			<p class="details">订单状态：已发货</p>
		</div>
		<div class="top">
			<img class="icon" src="@/assets/icon/777.png" alt="sorry">
			<p class="details">河南省郑州市北环公司派件员 李明 正在为您派件</p>
			<div class="times">
				<span class="day">09-14</span>
				<span class="time">19:30</span>
			</div>
		</div>
		<div class="top">
			<img class="icon" src="@/assets/icon/定位.png" alt="sorry">
			<!-- <div class="des"> -->
			<p class="details">
				<span>收货人：小仙女</span>
				<span>13245687654</span>
			</p>
			
			<p class="details1">收货地址：河南省 郑州市 金水区 东风路街道 丰庆博颂路文雅小区</p>
			<!-- </div> -->
		</div>
		<div class="clothes">
			<p class="head">
				<span>订单编号：2217896</span>
				<span class="head-r">已发货</span>
			</p>
			<img src="@/assets/kind/nei1.png" alt="sorry">
			<div class="des">
				<p>
					<span>ESSENCE</span>
					<span class="money">¥ 219</span>
				</p>
				<p>
					<span>女士Cozy圆领吊带性感睡衣</span>
					<span class="money">X 2</span>
				</p>
				<p class="zong">  合计：¥ 438 </p>
				<p class="footer">
					<span>查看物流</span>
					<span>确认收货</span>
				</p>
			</div>
		</div>
		<div class="bottom-money">
			<span>运费</span>
			<span class="qian">¥0.00</span>
		</div>
		<div class="bottom-money">
			<span>优惠</span>
			<span class="qian">¥0.00</span>
		</div>
		<div class="bottom-money">
			<span>实付款（含运费）</span>
			<span class="qian">¥ 438</span>
		</div>
		<div class="bottom-times">
			<p>订单编号：2217896</p>
			<p>下单时间：2018-09-16 19:00:03</p>
			<p>发货时间：2018-09-16 20:00:02</p>
		</div>
		<div class="bottom-way">
			<p class="ways-l">
				<img class="img-l" src="@/assets/icon/service.png" alt="sorry">
				<span>联系客服</span>
			</p>
			<p class="ways-r">
				<img class="img-r" src="@/assets/icon/咨询.png" alt="sorry">
				<span>拨打电话</span>
			</p>
		</div>
	</div>
</template>
<script>
	export default{
		components:{
		}


	}
</script>
<style scoped>
	.orderdetails{
		width: 100%;
	}
	.orderdetails .top{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		margin-top: 28px;
		border-bottom:1px solid #E5E5E5;

	}
	.top img{
		position: absolute;
		top: 10px;
		left: 20px;
		width: 20px;
		height: 20px;
	}
	.top .details{
		position: absolute;
		top: 0;
		left: 60px;
		font-size: 14px;
		color: #010E0D;
		line-height: 22px;
	}
	.top .details1{
		position: absolute;
		top: 20px;
		left: 60px;
	}
	.top .times{
		position: absolute;
		top: 20px;
		left: 60px;
	}
	.orderdetails .clothes{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 335px;
		height: 186px;
		background: #F9F9F9;
		border-radius: 4px;
		margin:22px auto;
	}
	.orderdetails .clothes .head{
		width: 100%;
		height: 20px;
		line-height: 20px;
		font-size: 14px;
		color: #494949;
	}
	.orderdetails .clothes .head .head-r{
		padding-left: 150px;
	}
	.orderdetails .clothes img{
		width: 75px;
		height: 75px;
		padding-top: 10px;
	}
	.orderdetails .clothes .des{
		position: absolute;
		right: 0;
		bottom: 0;
		width: 235px;
		height: 150px;
	}
	.orderdetails .clothes .des p{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		font-size: 14px;
		color: #494949;
		line-height: 20px;
	}
	.orderdetails .clothes .des p .money{
		position: absolute;
		top: 0;
		right: 10px;
	}
	.orderdetails .clothes .des .zong{
		position: absolute;
		top: 110px;
		left: 150px;
	}
	.orderdetails .clothes .des .footer{
		position: absolute;
		top: 130px;
		left: 60px;
	}
	.orderdetails .clothes .des .footer span{
		display: inline-block;
		width: 78px;
		height: 28px;
		line-height: 28px;
		border: 1px solid #999999;
		border-radius: 100px;
		font-size: 12px;
		color: #494949;
		text-align: center;
	}
	.orderdetails .bottom-money{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 335px;
		height: 22px;
		margin:0 auto;
	}
	.orderdetails .bottom-money .qian{
		position: absolute;
		bottom: 0;
		right: 10px;
	}
	.orderdetails .bottom-times{
		width: 335px;
		height: 22px;
		line-height: 22px;
		font-size: 16px;
		color: #494949;
		margin:25px auto;
	}
	.orderdetails .bottom-way{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 335px;
		height: 22px;
		margin:50px auto;
	}
	.orderdetails .bottom-way .ways-l{
		position: absolute;
		top: 10px;
		left: 0;
	}
	.orderdetails .bottom-way .ways-r{
		position: absolute;
		top: 10px;
		right: 0;
	}
</style>