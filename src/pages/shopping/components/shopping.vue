<template>
	<div class="shopping">
		<ul class="shopping-list">
			<li class="list" v-for="item in list" :key="item.id">
				<input type="checkbox" v-model='checkboxList' :value='item' >
				<!-- <img :src="item.imgList[0].imgList" alt="sorry"> -->
				<img class="topimg" src="@/assets/kind/nei2.png" alt="sorry">
				<div class="des">
					<p>商品为:{{item.board}}</p>
					<p>描述为:{{item.desc1}}</p>
					<p class="last">单价为:{{item.price}}</p>
					<!-- <span class="number">{{item.span}}</span> -->
					<span class="figure j" @click="lessClick(item)">-</span>
					<span class="figure q">{{item.count}}</span>
					<span class="figure k" @click="addClick(item)">+</span>
				</div>
			</li>
		</ul>
		<!-- <h2>总价为:{{zongjia}}</h2> -->
		<div class="possible">
			<span class="line-l"></span>
			<p class="like">你可能还会喜欢</p>
			<span class="line-r"></span>
		</div>
		<ul class="footer">
			<li class="item" v-for="item in items":key="item.id">
				<img :src="item.img" alt="sorry">
				<p class="title">{{item.p7}}</p>
				<p class="title1">{{item.p8}}</p>
			</li>
		</ul>
		<div class="bottom">
			<button class="all toggleCheck" @click='toggleCheck'>全选</button>
			<p class="sum">总计:¥{{zongjia}}</p>
			<router-link class="buy" tag='div' to='shopconfirm' >立即购买</router-link>
		</div>
	</div>
</template>
<script>
import Moming from '@/assets/kind/nei5.png'
import Momin from '@/assets/kind/nei6.png'
import {mapState,mapGetters, mapMutations} from 'vuex'
	export default{
		computed:{
			...mapState(['list']),
			// ...mapGetters(['zongjia']),
			zongjia(){
				var zongjia2 = 0 
				for(let i = 0 ; i < this.checkboxList.length ; i++){
					if(this.checkboxList[i].count>0){
						console.log('checkboxList的次数哦')
						zongjia2 +=  this.checkboxList[i].count * this.checkboxList[i].price
					}
				}
				return zongjia2 

			}
			
		},
		methods:{
			addClick(item){
				var item2 = Object.assign({},item,{count:1})//只深拷贝第一层。第二层的东西是浅拷贝
				this.addList(item2)
			},
			lessClick(item){
				var item2 = Object.assign({},item,{count:-1})//只深拷贝第一层。第二层的东西是浅拷贝
				this.lessList(item2)
			},
			toggleCheck(){
				
				if(this.checkboxList.length>=0&&this.checkboxList.length!=this.list.length){
					//这个时候要全选
					this.checkboxList = this.list
				}else{
					this.checkboxList=[]
				}
			},
			...mapMutations({
				addList:'addList',
				lessList:'lessList',
			})
		},
		data(){
			return{
				checkboxList:[],
				count:1,
				items:[
				{
					id:11,
					img:Moming,
					p7:'TRIUMPU',
					p8:'文胸内裤套装'
				},
				{
					id:22,
					img:Moming,
					p7:'ESSENCE',
					p8:'女士Cozy圆领吊带性感'
				},
				],
			}
		},

	}
</script>
<style scoped>
	.shopping{
		width: 100%;
		/*background-color: blue;*/
		background-color: #fff;
	}
	.shopping .footer{
		width: 100%;
	}
	.shopping .footer .item{
		position: relative;
		top: 0;
		left: 0;
		float: left;
		margin-top: 22px;
		width: 50%;
		height: 160px;
		/*background-color: red;*/
	}
	.shopping .footer .item img{
		position: absolute;
		top: 0;
		left: 20px;
		width: 129px;
		height: 129px;
	}
	.shopping .footer .item .title{
		position: absolute;
		top: 130px;
		left: 60px;
		font-size: 12px;
		color: #494949;
	}
	.shopping .footer .item .title1{
		position: absolute;
		top: 145px;
		left: 40px;
		font-size: 12px;
		color: #494949;
	}
	.shopping .shopping-list{
		width: 100%;
	}
	.shopping .shopping-list .list{
		position: relative;
		top: 0;
		left: 0;
		width: 350px;
		height: 114px;
		margin:25px auto;
		background: #FFFFFF;
		border-radius: 4px;
		background-color: red;
	}
	.shopping .possible{
		position: relative;
		top: 0;
		left: 0;
		height: 20px;
	}
	.shopping .possible .like{
		
		font-size: 14px;
		color: #010E0D;
		text-align: center;
	}
	.shopping .possible .line-l{
		position: absolute;
		top: 25%;
		left: 0;
		display: block;
		width: 130px;
		height: 2px;
		background-color:#E5E5E5; 
	}
	.shopping .possible .line-r{
		position: absolute;
		top: 25%;
		right: 0;
		display: block;
		width: 130px;
		height: 2px;
		background-color:#E5E5E5; 
	}
	.shopping-list .list img{
		position: absolute;
		top: 20px;
		left: 30px;
		width: 76px;
		height: 76px;
	}
	.shopping-list .list .des{
		position: absolute;
		top: 20px;
		left: 120px;
		width: 235px;
		height: 114px;
		padding-top:10px;
	}
	.shopping-list .list .des p{
		font-size: 12px;
		color: #494949;
		line-height: 20px;
	}
	.shopping-list .list .des .last{
		font-size: 14px;
		color: #1C4B47;
	}
	.shopping-list .list .des span{
		position: absolute;
		top: 50px;
		right: 0;
		font-size: 15px;
		color: #000000;
	}

	.shopping-list .list .des .figure{
		width: 22px;
		height: 22px;
		line-height: 22px;
		background: #FFFFFF;
		border-radius: 1px;
		font-size: 14px;
		color: #000000;
		text-align: center;
	}
	.shopping-list .list .des .j{
		position: absolute;
		right: 70px;
		bottom: 20px;
	}
	.shopping-list .list .des .q{
		position: absolute;
		right: 40px;
		bottom: 20px;
	}
	.shopping-list .list .des .k{
		position: absolute;
		right: 10px;
		bottom: 20px;
	}
	.shopping .bottom{
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 50px;
		background-color: #fff;
	}
	.bottom .all{
		position: absolute;
		top: 10px;
		left: 20px;
		font-size: 18px;
		color: #010E0D;
		line-height: 25px;
	}
	.bottom .sum{
		position: absolute;
		top: 10px;
		left: 120px;
		font-size: 16px;
		color: #1C4B47;
	}
	.bottom .buy{
		position: absolute;
		top: 0;
		right: 20px;
		width: 113px;
		height: 40px;
		line-height: 40px;
		background: #1C4B47;
		border-radius: 4px;
		font-size: 15px;
		color: #FFFFFF;
		text-align: center;
	}
</style>