<template>
	<div class="comset">
		<div class="head">
			<router-link tag='div' to='/my'><img src="@/assets/icon/返回.png" alt="sorry"></router-link>
			<p>通用设置 </p>
		</div>
		<ul class="event">
			<li>
				<p>新消息提醒</p>
				<img src="@/assets/icon/返回灰.png" alt="sorry">
			</li>
			<li>
				<p>清除图片缓存</p>
				<img src="@/assets/icon/返回灰.png" alt="sorry">
			</li>
			<li>
				<p>反馈与建议</p>
				<img src="@/assets/icon/返回灰.png" alt="sorry">
			</li>
		</ul>
	</div>
</template>
<script>
import {mapMutations} from 'vuex'
	export default{
		created(){
			this.setNavShow(false)
		},
		methods:{
			...mapMutations({
				setNavShow:'setNavShow'
			}),
		},
	}
</script>
<style scoped>
	.comset{
		width: 375px;
		/*background-color: red;*/
	}
	.comset .head{
		position: relative;
		width: 100%;
		height: 43px;
		line-height: 43px;
		border-bottom: 1px solid #E5E5E5;
	}
	.comset .head img{
		position: absolute;
		top: 12px;
		left: 15px;
	}
	.comset .head p{
		font-size: 18px;
		text-align: center;
	}
	.comset ul{
		width: 100%;
		height: 181px;
		/*background-color: yellow;*/
	}
	.comset ul li{
		position: relative;
		width: 100%;
		height: 60px;
		line-height: 60px;
	}
	.comset ul li p{
		position: absolute;
		left: 19px;	
		font-size: 16px;
		text-align: center;
	}
	.comset ul li img{
		position: absolute;
		top: 20px;
		right: 20px;
	}
</style>