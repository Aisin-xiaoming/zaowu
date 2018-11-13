<template>
	<div class="goodrecommend">
		<ul>
			<router-link v-for="item in items" :key="item.id" class="box" tag='div' to='/find/agoodinside'>
			<!-- <li v-for="item in items" class="box"> -->
				<img :src="item.img" alt="sorry">
				<p>{{item.p}}</p>
				<p class="p1">{{item.p1}}</p>
			<!-- </li> -->
			</router-link>
		</ul>
	</div>
</template>
<script>
import Moimg from '@/assets/find/fu1.png'
import Moim from '@/assets/find/fu2.png'
import Moi from '@/assets/find/fu3.png'
export default{
	data(){
		return{
			items:[
			{
				id:1,
				p:'NEIWAI2019秋 | 针织新品优惠',
				p1:'和Jennifer领略NEIWAI，感受自潮不熄',
				img:Moimg
			},
			{
				id:2,
				p:'Paola Paronetto | 手作摆件艺术',
				p1:'这个开启丹麦设计新时代的品牌值得Pick',
				img:Moim
			},
			{
				id:3,
				img:Moi
			},
			]
		}
	}
}
	
</script>
<style scoped>
	.goodrecommend{
		position: absolute;
		top: 42px;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		background-color: #fff;
	}
	.goodrecommend ul{
		width: 100%;

	}
	.goodrecommend ul .box{
		width: 100%;
		height: 240px;
	}
	.box img{
		width: 100%;
		height: 160px;
	}
	.box p{
		font-size: 16px;
		text-align: center;
		margin-top: 10px;
	}
	.box .p1{
		font-size: 12px;
		color: #494949;
	}
</style>