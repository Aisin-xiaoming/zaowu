<template>
	<div class="address">
		<ul>
			<li class="head" v-for="item in list">
				<input class="name" type="text" :value="item.name" >
				<input class="tel" type="tel" :value="item.tel" >
				<img :src="item.img" alt="sorry">
				<a class="mo">{{item.mo}}</a>
				<input class="input" type="address" :value="item.input">
				<a class="edit">{{item.edit}}</a>
			</li>
		</ul>
		<!-- item -->
		<!-- <div class="head">
			<input class="name" type="text" value="李女士" >
			<input class="tel" type="tel" value="12345678901" >
			<img src="@/assets/icon/编辑.png" alt="sorry">
		</div> -->
		<!-- <div class="head-b">
			<a class="mo">默认</a>
			<input class="input" type="address" value="河南省郑州市金水区东风路街道丰庆路博颂路文雅小区">
			<a class="edit">编辑</a>
		</div> -->
	</div>
</template>
<script>
import Moming from '@/assets/icon/编辑.png'
export default{
	data(){
		return{
			list:[
				{
					id:1,
					name:'李女士',
					tel:'15890166666',
					img:Moming,
					mo:'默认',
					input:'河南省郑州市金水区东风路街道丰庆路博颂路文雅小区',
					edit:'编辑'
				},
				{
					id:2,
					name:'赵小明',
					tel:'15890166666',
					img:Moming,
					mo:'',
					input:'河南省郑州市金水区东风路街道丰庆路博颂路文雅小区',
					edit:'编辑'
				},
				{
					id:3,
					name:'赵小明',
					tel:'15890166666',
					img:Moming,
					mo:'',
					input:'河南省郑州市金水区东风路街道丰庆路博颂路文雅小区',
					edit:'编辑'
				},
			],
		}
	},

}
	
</script>
<style scoped>
	.address{
		width: 100%;
		margin-top: 80px;
	}
	.address ul{
		width: 100%;
	}
	.address ul li{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		padding-left: 35px;
		box-sizing: border-box;
		border-bottom: 1px solid #E5E5E5;
		margin-top: 20px;
	}
	.address ul li .name{
		font-size:14px;
		width: 42px;
		margin-right: 10px;
	}
	.address ul li .tel{
		font-size: 12px;
		width: 74px;
		margin-right: 175px;
		color: #999999;
	} 
	.address ul li .mo{
		position: absolute;
		top: 25px;
		left: 35px;
		width: 25px;
		font-size: 8px;
		background: #034C46;
		margin-right: 8px;
		color: #FFFFFF;
	}
	.address ul li .input{
		width: 240px;
		font-size:10px;
		color: #999999;
		padding-left: 35px;
	}
	.address ul li .edit{
		position: absolute;
		top: 25px;
		right: 15px;
		color: #999999;
	}
</style>