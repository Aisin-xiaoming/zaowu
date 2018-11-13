<template>
	<div class="collect">
		<ul class="collect-details">
			<li class="detail" v-for="detail in details">
				<img :src="detail.img" alt="sorry">
				<p>{{detail.p}}</p>
				<div class="footer">
					<span class="left">{{detail.p1}}</span>
					<span class="right">{{detail.p2}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import Moming from '@/assets/collect/collect1.png'
	export default{
		data(){
			return{
				details:[
					{
						id:11,
						img: Moming,
						p:'新款蝴蝶结高腰排扣中长裙棉质吊带露背连衣裙',
						p1:'980人收藏',
						p2:'￥299',

					},
					{
						id:22,
						img: Moming,
						p:'鳄鱼纹小方包时尚手提包百搭单肩包',
						p1:'1200人收藏',
						p2:'￥699',

					},
					{
						id:33,
						img: Moming,
						p:'Orange 	Desire白鸭绒长款羽绒服女2018秋新 款韩版加厚羽绒外套女',
						p1:'1547人收藏',
						p2:'￥1389',

					},
					{
						id:44,
						img: Moming,
						p:'全棉水洗棉四件套荷叶边简约公主风纯棉条纹 日式1.8m双人床上用品',
						p1:'2896人收藏',
						p2:'￥299',

					},
					{
						id:55,
						img: Moming,
						p:'巴黎Titlee Midtown铜镀18k金简约小众设计 冷淡风气质ins风手链女',
						p1:'773人收藏',
						p2:'￥399',

					},
					{
						id:66,
						img: Moming,
						p:'一字扣带中跟真皮露趾粗跟凉鞋女潮',
						p1:'3220人收藏',
						p2:'￥288',
					},
					{
						id:77,
						img: Moming,
						p:'LolaRose手表小表盘ob学院风小众',
						p1:'660人收藏',
						p2:'￥930',
					},
				]
			}
		}


	}
</script>
<style scoped>
.collect{
	width: 100%;
	margin-top: 11px;
}
.collect .collect-details{
	
	width: 335px;
	height: 100%;
	margin:0 auto;
	/*background-color: blue;*/
}
.collect-details .detail{
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 95px;
}
.collect-details .detail img{
	display: block;
	width: 80px;
	height: 80px;
	transform: rotate(-360deg);
}
.collect-details .detail p{
	position: absolute;
	top: 0;
	right: 0;
	width: 240px;
	font-size: 12px;
	color: #494949;
}
.collect-details .detail .footer{
	overflow: hidden;
	position: absolute;
	top: 66px;
	right: 0;
	width: 240px;
}
.collect-details .detail .footer .left{
	float: left;
}
.collect-details .detail .footer .right{
	float: right;
}
	
</style>