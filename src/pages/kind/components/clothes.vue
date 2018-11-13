<template>
	<div class="clothes">
		<mo-header :isSou='false' :isTitle='false' :isCopy='false'></mo-header>
		<ul class="clothes-top">
			<li class="title">新品</li>
			<li class="title">销量</li>
			<li class="title">价格</li>
			<li class="title">筛选</li>
		</ul>
		<ul class="clothes-topsx">
			<li class="xtitle">无痕</li>
			<li class="xtitle">美背</li>
			<li class="xtitle">运动</li>
			<li class="xtitle">性感</li>
		</ul>
		<ul class="clothes-classify">
			<router-link class="classify" v-for="item of items " tag="li" :to="{name:'KindClothesDetial',params:{id:$route.params.id,id2:item.id}}" :key="item.id">	<!-- <router-link class="classify" v-for="item of items " tag="li" :to="'/kind/'+$route.params.id+'/'+item.id" :key="item.id"> -->
				<!-- 模拟图片动态插入比较难看,先插入固定的静态图片 -->
				<!-- <img :src="item.img" alt="sorry"> -->
				<img class="topimg" src="@/assets/kind/nei3.png" alt="sorry">
				<p>{{item.board}}</p>
				<p>{{item.desc}}</p>
				<p class="money">{{item.price}}</p>
			</router-link>
		</ul>
		<router-view></router-view>
		<!-- <bo-nav/> -->
	</div>
</template>
<script>
import Moming from '@/assets/kind/nei1.png'
import Momin  from  '@/assets/kind/nei2.png'
import Momi  from  '@/assets/kind/nei3.png'
import Mom  from  '@/assets/kind/nei4.png'
import Mo5  from  '@/assets/kind/nei5.png'
import Mo6  from  '@/assets/kind/nei6.png'
	// import BoNav from '@/components/nav'
	import MoHeader from '@/components/header'
	import axios from 'axios'
	import {mapMutations} from 'vuex'
	export default{
		//动态传值，mock模拟后台接口传值；
		created(){
			this.setNavShow(true),
			axios.get('api/goods/list',{
				params:{
					id:this.$route.params.id
				},
			})
			.then(res=>{
			// console.log('这是我的内衣动态插入')
			// console.log(res)
			this.items = res.data.data.goodsList
			})
		},
		methods:{
			...mapMutations({
				setNavShow:'setNavShow'
			})
		},
		data(){
			return{
				items:[],
				// items :[
    //     {
    //       id:31,
    //       img:Moming,
    //       p1:"NEIWAI",
    //       p2:"Cozy女士家居服莫代尔",
    //       p3:"¥399"
    //     },
    //     {
    //       id:32,
    //       img:Momin,
    //       p1:"TRIUMPU",
    //       p2:"文胸内裤套装",
    //       p3:"¥299"
    //     },
    //     {
    //       id:33,
    //       img:Mom,
    //       p1:"ESSENCE",
    //       p2:"女士Cozy圆领吊带性感",
    //       p3:"¥219"
    //     },
    //     {
    //       id:34,
    //       img:Momi,
    //       p1:"LAPERLA",
    //       p2:"女士Bra-top蕾丝美背无",
    //       p3:"¥159"
    //     },
    //     {
    //       id:35,
    //       img:Mo5,
    //       p1:"CRYSTALS",
    //       p2:"零敏洛丽无钢圈内衣",
    //       p3:"¥159"
    //     },
    //     {
    //       id:36,
    //       img:Mo6,
    //       p1:"JUDYHUA",
    //       p2:"女士高端网纱交叠无钢",
    //       p3:"¥359"
    //     }
    //   ]
			}
		},
		components :{
			 // BoNav ,
			MoHeader
		},
	}
</script>
<style scoped>
.clothes{
	position: absolute;
	top: 0;
	left: 0;
	background-color: #F9F9F9;
	width: 100%;
}
.clothes .clothes-top{
	width: 100%;
	height: 44px;
	margin-left: 34px;
}
.clothes-top .title{
	float: left;
	width: 28px;
	height: 20px;
	font-size: 14px;
	color: #010E0D;
	margin-top:58px;
	margin-right: 65px;
}
.clothes-topsx{
	overflow: hidden;
	width: 100%;
	margin-left: 40px;
	margin-top: 50px;
}
.clothes-topsx .xtitle{
	float: left;
	width: 51px;
	height: 23px;
	background: #F9F9F9;
	border-radius: 1px;
	margin-right: 37px;
}
img{
	width: 100%;
}
.clothes-classify{
	overflow: hidden;
	width:100%;
	margin-left: 32px;
}
.clothes-classify .classify{
	float: left;
	width: 129px;
	height: 190px;
	margin-right: 45px;
}
.clothes-classify .classify p{
	font-size: 12px;
	color: #494949;
	line-height: 17px;
	text-align: center;
}
.clothes-classify .classify .money{
	color: #000;
}
</style>