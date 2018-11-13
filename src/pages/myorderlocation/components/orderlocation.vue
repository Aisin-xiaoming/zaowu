<template>
	<div class="orderlocation">
		<div class="top">
			<img src="@/assets/kind/nei1.png" alt="sorry">
			<p>订单正在为您派送中</p>
		</div>
		<div class="line-d">
			<div class="line"></div>
		</div>
		<div class="encoding">圆通速递：12336799788938937</div>
		<ul class="location">
			<li class="item" v-for="item in list" :key="item.id">
				<div class="style-l">
					<span class="day">{{item.day}}</span>
					<span class="hours">{{item.hours}}</span>
				</div>
				<img :src="item.img" alt="sorry">
				<div class="style-r">
					<span class="title">{{item.title}}</span>
					<span class="address">{{item.address}}</span>
				</div>
				<div class="line"></div>
			</li>
		</ul>
	</div>
</template>
<script>
import Moming from '@/assets/icon/777.png'
export default{
	data(){
		return{
			list:[
			{
				id:1,
				img:Moming,
				day:'09-16',
				hours:'18:30',
				title:'派送中',
				address:'河南省郑州市北环派件员 李明 正在为您派件'
			},
			{
				id:2,
				img:Moming,
				day:'09-16',
				hours:'18:30',
				title:'派送中',
				address:'河南省郑州市北环派件员 李明 正在为您派件'
			},
			{
				id:3,
				img:Moming,
				day:'09-16',
				hours:'18:30',
				title:'派送中',
				address:'河南省郑州市北环派件员 李明 正在为您派件'
			},
			{
				id:4,
				img:Moming,
				day:'09-16',
				hours:'18:30',
				title:'派送中',
				address:'河南省郑州市北环派件员 李明 正在为您派件'
			},
			{
				id:5,
				img:Moming,
				day:'09-16',
				hours:'18:30',
				title:'派送中',
				address:'河南省郑州市北环派件员 李明 正在为您派件'
			},
			{
				id:6,
				img:Moming,
				day:'09-16',
				hours:'18:30',
				title:'派送中',
				address:'河南省郑州市北环派件员 李明 正在为您派件'
			},
			{
				id:7,
				img:Moming,
				day:'09-16',
				hours:'18:30',
				title:'派送中',
				address:'河南省郑州市北环派件员 李明 正在为您派件'
			},

			],
		}
	},
}
	
</script>
<style scoped>
	.orderlocation{
		width: 100%;
		/*background-color: red;*/
	}
	.orderlocation .top{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 65px;
		margin-top: 20px;
		
	}
	.orderlocation .top img{
		width: 65px;
		height: 65px;
		padding-left: 35px;
	}
	.orderlocation .top p{
		position: absolute;
		top: 25px;
		left: 125px;
		height: 20px;	
	}
	.orderlocation .line-d{
		margin:0 auto; 
		width: 300px;
		height: 6px;
		background: #F2F2F2;
		border-radius: 4px;
	}
	.orderlocation .line{
		width: 250px;
		height: 6px;
		margin-top: 20px;
		border-radius: 4px;
		background-image: linear-gradient(-90deg, #43B4AA 0%, #2F928A 60%, #1C4B47 100%);
	}
	.orderlocation .encoding{
		height: 20px;
		font-size: 14px;
		color: #494949;
		margin-top: 25px;
		padding-left: 40px;
	}
	.orderlocation .location{
		width: 375px；
		
	}
	.orderlocation .location img{
		width: 23px;
		height: 23px;
		padding-left: 8px;
	}
	.orderlocation .location li{
		position: relative;
		float: left;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 40px;
		margin-top: 20px;
		/*background-color: pink;*/
	}
	.orderlocation .location li:last-child .line{
		display: none;
	}
	.orderlocation .location .line{
		position: absolute;
		top: 0;
		left: 66px;
		width: 2px;
		height: 35px;
		background-color:#999;
	}
	.orderlocation .location .style-l{
		padding-left: 18px;
		width: 40px;

	}
	.orderlocation .location .style-l span{
		float: left;
	}
	.orderlocation .location .style-r span{
		
	}
	.orderlocation .location .style-r .title{
		position: absolute;
		top: 0;
		left: 100px;
		font-size: 16px;
		color: #034C46;
	}
	.orderlocation .location .style-r .address{
		position: absolute;
		top: 20px;
		left: 100px;
		font-size: 13px;
		color: #034C46;
	}
</style>