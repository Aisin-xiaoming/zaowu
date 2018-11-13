<template>
	<div class="find-item">
		<router-link v-for="item in items" :key= "item.id" tag='div' to='/find/articleinside' class="case">
			<div>{{item.div}}</div>
			<p>{{item.p}}</p>
			<img :src="item.img" alt="sorry">
		</router-link>



	</div>
</template>
<script>
	import Moimg from '@/assets/find/1.png'
	export default{
		data (){
			return{
				items:[
				{
					id:1,
					div:"一起来观看WesAnderson的色彩回旋舞",
					p:"对称I色彩I构图 ",
					img:Moimg 
				},
				{	
					id:2,
					div:"你离英剧里的下午茶，还差了这些",
					p:"对称I色彩I构图 ",
					img:Moimg

				},
				{	
					id:3,
					div:"你离英剧里的下午茶，还差了这些",
					p:"对称I色彩I构图 ",
					img:Moimg

				},
				{
					id:4,
					div:"一起来观看WesAnderson的色彩回旋舞",
					p:"对称I色彩I构图 ",
					img:Moimg 
				},
				]
			}
		}
	}
</script>
<style scoped>
	.find-item{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 375px;
		/*height: 723px;*/
		perspective: 100px;
		/*transform-style: preserve-3d;*/
		/*perspective-origin: 50% 50%;*/

	}
	.find-item .case{
		position: absolute;
		left: 8px;
		top: 170px;
		background-color: #fff;
		width: 359px;
		height: 473px;
		border-radius: 8px;
		margin:0 auto;
	}
	.find-item .case:nth-child(1){
		z-index: 6;
	}
	.find-item .case:nth-child(2){
		z-index: 5;
		transform: translateY(-70px) translateZ(-6px) ;
	}
	.find-item .case:nth-child(3){
		z-index: 4;
		transform: translateY(-120px) translateZ(-12px) ;
	}
	.find-item .case:nth-child(4){
		z-index: 3;
		transform: translateY(-170px) translateZ(-16px) ;
	}
	.find-item .case div{
		width: 220px;
		font-size: 18px;
		line-height: 25px;
		text-align: center;
		margin:0 auto;
		margin-top: 30px;
	}
	.find-item .case p{
		font-size: 12px;
		color: #999999;
		text-align: center;
	}
	.find-item .case img{
		display: block;
		width: 265px;
		height: 358px;
		margin:0 auto;
	}
</style>