<template>
	<div class="about">
		<img class="top" src="@/assets/collect/horse.png" alt="sorry">
		<p class="title">造物1.1.01</p>
		<ul class="about-list">
			<li class="list" v-for=" list in lists" :key="list.id">
				<p>{{list.p}}</p>
				<img :src="list.img" alt="sorry">
			</li>
		</ul>
	</div>
</template>
<script>
import Moming from '@/assets/icon/返回灰.png'
	export default{
		data(){
			return{
				lists:[
					{
						id:1,
						p:'隐私声明',
						img:Moming
					},
					{
						id:2,
						p:'官方网站',
						img:Moming
					},
					{
						id:3,
						p:'版本更新',
						img:Moming
					},
					{
						id:4,
						p:'分享APP',
						img:Moming
					},
				],
			}
		},
	}
</script>
<style scoped>
	.about{
		width: 100%;
		margin-top: 45px;
		/*background-color: blue;*/
	}
	.about .top{
		width: 68px;
		height: 68px;
		display: block;
		margin:0 auto;
	}
	.about .title{
		font-size: 12px;
		color: #494949;
		text-align: center;
		margin-top: 4px;
	}
	.about .about-list{
		width: 100%;
		height: 200px;
		margin-top: 32px;
		/*background-color: purple;*/

	}
	.about .about-list .list{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
	}
	.list p{
		margin-left: 19px;
		font-size: 16px;
		color: #494949;
		line-height: 50px;
	}
	.list img{
		position: absolute;
		top: 15px;
		right: 15px;

	}
</style>