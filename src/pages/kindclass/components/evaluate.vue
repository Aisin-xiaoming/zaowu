<template>
	<div class="evaluate">
		<div class='list' v-for="item in list" :key="item.id"> 
			<div class="about">
				
				<p class="title">{{item.name}}</p>
				<p class="time">{{item.date}}</p>
				<p class="des">{{item.ping}}</p>
			</div>
			<!-- <img class="avatar" :src="list.Avatar" alt="sorry"> -->
		</div>
	</div>
</template>
<script>
import Moming from '@/assets/shopping/评论1.png'
import {mapMutations} from 'vuex'
import axios from 'axios'
export default{
	props:{
		list:{

		}
	},
	data(){
		return{
		}
	},
}
	
</script>
<style scoped>
	.evaluate{
		position: absolute;
		top: 1400px;
		left: 0;
		width: 375px;
		/*height: 700px;*/
		background-color: #fff;
	}
	.evaluate .list{
		width: 343px;
		height: 111px;
		padding:30px 0;
		margin:0 auto;
	}
	.evaluate .list .avatar{
		width: 20px;
		height: 20px;
	}
	.list .about{
		width: 375px;
	}
	.list .about .title{
		height: 25px;
		line-height: 25px;
		font-size: 18px;
		color: #000000;
	}
	.list .about .time{
		height: 20px;
		line-height: 20px;
		font-size: 14px;
		color: #767676;
	}
	.list .about .des{
		line-height: 20px;
		font-size: 12px;
		color: #494949;
		letter-spacing: 2px;
		line-height: 20px;
	}
</style>