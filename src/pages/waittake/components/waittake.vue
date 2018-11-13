<template>
	<div class="myheader">
		<ul>
			<li class="list" v-for="item in list">
				<p class="title">{{item.title}}</p>
				<p class="des">{{item.des}}</p>
				<img class="img" :src="item.img" alt="sorry">
			</li>
		</ul>
	</div>
</template>
<script>
import Moming from '@/assets/icon/返回灰.png'
	export default{
		data(){
			return{
				list:[
					{
						id:1,
						title:'头像',
						des:'xiaoxiannv',
						img:Moming
					},
					{
						id:2,
						title:'昵称',
						des:'小仙女',
						img:Moming
					},
					{
						id:3,
						title:'生日',
						des:'1995-12-7',
						img:Moming
					},
					{
						id:4,
						title:'性别',
						des:'女',
						img:Moming
					},
				],
			}
		},
		components:{
		}


	}
</script>
<style scoped>
	.myheader{
		height: 100%;
	}
	.myheader ul{
		width: 100%;
	}
	.myheader ul li{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;	
		height: 60px;
	}
	.myheader ul li .title{
		position: absolute;
		top: 26px;
		left: 20px;
		font-size: 16px;
		color: #494949;
	}
	.myheader ul li .des{
		position: absolute;
		top: 26px;
		right: 30px;
		font-size: 16px;
		color: #A1A1A1;
	}
	.myheader ul li img{
		position: absolute;
		top: 26px;
		right: 15px;
	}
</style>