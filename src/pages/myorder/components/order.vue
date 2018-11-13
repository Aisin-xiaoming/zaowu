<template>
	<div class="order">
		<ul class="order-top">
			<li><a href="#">全部</a></li>
			<li><a href="#">待付款</a></li>
			<li><a href="#">待收货</a></li>
			<li><a href="#">已完成</a></li>
		</ul>
		<ul class="order-details">
			<li class="detail" v-for="item in items">
				<div class="title">
					<p class="order">{{item.p}}</p>
					<p class="state">{{item.p1}}</p>
				</div>
				<router-link tag="div" to="/myorderdetails"> 

					<img :src="item.img" alt="sorry">
				</router-link>
				<div class="box">
					<div  class="desl">
						<p class="desl-l">{{item.p2}}</p>
						<p class="desl-l">{{item.p4}}</p>
					</div>
					<div class="desr">
						<p class="desr-r">{{item.p3}}</p>
						<p class="desr-r">{{item.p5}}</p>
					</div>
					<div class="zongsum">
						<span class="sum">{{item.p6}}</span>
						<span class="money">{{item.p7}}</span>
					</div>
					<div class="bottom">
						<router-link tag="span" to="/myorderlocation">
						<span class="check">{{item.a}}</span>
						</router-link>
						<a class="check">{{item.a1}}</a>
					</div>
					
				</div>
				
			</li>
		</ul>
	</div>
</template>
<script>
import Moming from '@/assets/kind/nei1.png'
import Momin from '@/assets/kind/nei4.png'
	export default{
		data(){
			return{
				items:[
					{
						id:1,
						p:'订单编号：2217896',
						p1:'已发货',
						img: Moming,
						p2:'ESSENCE',
						p3:'¥ 219',
						p4:'女士Cozy圆领吊带性感睡衣',
						p5:'X 2',
						p6:'合计：',
						p7:'¥ 438',
						a:'查看物流',
						a1:'确认收货',
					},
					{
						id:2,
						p:'订单编号：2217897',
						p1:'已发货',
						img: Momin,
						p2:'LAPERLA',
						p3:'¥ 159',
						p4:'女士Bra-top蕾丝美背无钢圈',
						p5:'X 1',
						p6:'合计：',
						p7:'¥ 159',
						a:'查看物流',
						a1:'确认收货',
					},
					{
						id:3,
						p:'订单编号：2217898',
						p1:'已发货',
						img: Moming,
						p2:'JUDYHUA',
						p3:'¥ 399',
						p4:'女士高端网纱无钢圈文胸',
						p5:'X 1',
						p6:'合计：',
						p7:'¥ 399',
						a:'查看物流',
						a1:'确认收货',
					},
				],
			}
		},

	}
</script>
<style scoped>
	.order{
		margin-top: 57px;
		width: 100%;
		background: #F4F4F4;
	}
	.order .order-top{
		width: 100%;
		height: 22px;
		/*background-color: blue;*/
	}
	.order-top li{
		float: left;
		width: 25%;
	}
	.order-top li a{
		display: block;
		font-size: 16px;
		color: #1C4B47;
		margin-top: 22px;
		margin-left:  20px;
	}
	.order .order-details{
		width: 335px;
		height: 100%;
		/*background-color: blue;*/
		margin:0 auto ;
	}
	.order-details li{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 180px;
		border-radius: 4px;
		background: #FFFFFF;
		/*background-color: red;*/
	}
	.order-details li img{
		margin-top: 5px;
		width: 77px;
		height: 77px;
	}
	.order-details li .box{
		position: absolute;
		top: 30px;
		right: 0;
		height: 166px;
		width: 235px;
	}
	.order-details li .box .desl{
		position: absolute;
		top: 0;
		left: 0;
		width: 172px;
	}
	.order-details li .box .desr{
		position: absolute;
		top: 0;
		right: 0;
		width: 36px;
	}
	.order-details li .box .zongsum{
		position: absolute;
		top: 70px;
		right: 0;
	}
	.order-details li .box .bottom{
		position: absolute;
		top: 100px;
		right: 0;
	}
	.order-details li .box .bottom .check{
		display: inline-block;
		width: 78px;
		height: 28px;
		line-height: 28px;
		font-size: 12px;
		color: #494949;
		text-align: center;
		border: 1px solid #999999;
		border-radius: 100px;
	}
	.order-details li p{
		font-size: 14px;
	}
	.order-details li .title{
		width: 100%;
		height: 20px;
	}
	.title .state{
		position: absolute;
		top: 2px;
		right: 0;
		color: #034C46;
	}
</style>