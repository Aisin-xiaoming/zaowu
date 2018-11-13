<template>
	<div class="show">
		<div class="show-top" >
			<img class="topimg" src="@/assets/kind/nei4.png" alt="sorry">
			<!-- <img class="topimg" :src="detail.imgList[0].imgList" alt="sorry"> -->
			<div class="title">
				<p>{{detail.board}}</p>
				<p>女士Cozy圆领吊带性感睡衣</p>
				<p>¥{{detail.price}}</p>
				<p>仅剩10件</p>
			</div>
			<img @click="iconClick" class="icon" src="@/assets/icon/close.png" alt="sorry">
			<div class="zong">
				
				<div class="box color">
					<span class="titles">颜色</span>
					<img class="arrow" src="@/assets/icon/返回.png" alt="sorry">
					<span class="dian-l"></span>
					<span class="dian-r"></span>
				</div>
				<div class="box style">
					<span class="titles">规格</span>
					<img class="arrow" src="@/assets/icon/返回.png" alt="sorry">
					<span class="letter s">S</span>
					<span class="letter m">M</span>
					<span class="letter l">L</span>
				</div>
				<div class="box number">
					<span class="titles">数量</span>
					<img class="arrow" src="@/assets/icon/返回.png" alt="sorry">
				</div>
			</div>
		</div>
		<div v-if="isAppear" class="footer" @click="footerClick">确定</div>
		<router-link v-else  class="footer"  tag="div" to="/shopconfirm">确定</router-link>
	</div>
	
</template>
<script>
 import {mapMutations} from 'vuex'
	export default {
		props:{
			detail:{},
			isAppear:{},

		},
		data(){
			return {

				// msg:'这是一个首页的头部呀'
			}
		},
		methods:{
			//向外触发弗雷坚挺的事件;
			iconClick(){
				this.$emit('iconClick');
			},
			footerClick(){
				 var item2 = Object.assign({},this.detail,{count:1})//只深拷贝第一层。第二层的东西是浅拷贝
				this.addList1(item2)
				this.$emit('footerClick')
			},
			...mapMutations({
				addList1:'addList'
			})
		}
	}
</script>
<style scoped >
	.show{
		z-index: 20;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 620px;
		background:rgba(0,0,0,.5);
		
	}
	.show .footer{
		position: absolute;
		bottom: 0;
		right: 90px;
		width: 177px;
		height: 40px;
		line-height: 40px;
		background: #1C4B47;
		border-radius: 4px;
		font-size: 15px;
		color: #FFFFFF;
		text-align: center;
	}
	.show .show-top{
		position: absolute;
		top: 200px;
		left: 20px;
		width: 333px;
		height: 500px;
		background-color: #fff;
		border-radius: 8px;
	}
	.show .show-top .zong{
		margin-top: 150px;
	}
	.show .show-top .zong .box{
		position: relative;
		top: 0;
		left: 0;
		padding-left: 20px;
		float: left;
		width: 333px;
		height: 70px;
		background-color: pink;
		box-sizing: border-box;
	}
	.show .show-top .zong .box .titles{
		padding-right: 20px;
		font-size: 14px;
		color: #000000;
	}
	.show .show-top .zong .box .arrow{
		transform: rotate(-91deg);
	}
	.show .show-top .zong .box .dian-l{
		position: absolute;
		top: 20px;
		left: 36px;
		width: 35px;
		height: 35px;
		background: #EBE7DC;
		border-radius: 20px;
	}

	.show .show-top .zong .box .dian-r{
		position: absolute;
		top: 20px;
		left: 100px;
		width: 35px;
		height: 35px;
		background: #101010;
		border-radius: 20px;
	}
	.show .show-top .zong .box .letter{
		width: 40px;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		color: #000000;
		background: #FFFFFF;
		border-radius: 4px;
		text-align: center;
	}
	.show .show-top .zong .box .s{
		position: absolute;
		top: 20px;
		left: 20px;
	}
	.show .show-top .zong .box .m{
		position: absolute;
		top: 20px;
		left: 100px;
	}
	.show .show-top .zong .box .l{
		position: absolute;
		top: 20px;
		left: 180px;
	}
	.show .show-top .zong .box .figure{
		width: 22px;
		height: 22px;
		line-height: 22px;
		background: #FFFFFF;
		border-radius: 1px;
		font-size: 14px;
		color: #000000;
		text-align: center;
	}
	.show .show-top .zong .box .j{
		position: absolute;
		top: 20px;
		left: 16px;
	}
	.show .show-top .zong .box .q{
		position: absolute;
		top: 20px;
		left: 50px;
	}
	.show .show-top .zong .box .k{
		position: absolute;
		top: 20px;
		left: 80px;
	}
	.show .show-top .title{
		position: absolute;
		top: 20px;
		right: 0;
		width: 180px;
		height: 100px;
		line-height: 30px;
		font-size: 12px;
		color: #494949;
	}
	.show .show-top .topimg{
		position: absolute;
		top: 20px;
		left: 16px;
		width: 114px;
		height: 114px;
	}
	.show .show-top .icon{
		position: absolute;
		top: 20px;
		left: 300px;
		width: 17px;
		height: 17px;
	}
</style>