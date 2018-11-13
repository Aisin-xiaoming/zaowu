<template>
	<div class="particulars">
		<p class="title">{{love.board}}</p>
		<p class="title1">{{love.desc1}}</p>
		<p class="title2">{{love.desc2}}</p>
		<p class="title3">{{love.desc3}}</p>
		<p class="title4">{{love.desc4}}</p>
		<p class="title5">{{love.desc4}}</p>
		<p class="title6">{{love.desc4}}</p>
		<img class="picture" src="@/assets/shopping/轮播1.png" alt="sorry">
	</div>
</template>
<script>
import {mapMutations} from 'vuex'
import axios from 'axios'
export default{
	props:{
		love:{}
	},
	created(){
		// axios.get('api/goods/detail',{
		// 	params:{
		// 		id:this.$route.params.id
		// 	},
		// })
		// .then(res=>{
		// 	// console.log('这是我的新')
		// 	// console.log(res)
		// 	this.obj = res.data.data.goodsDetail
		// })
	},
	
	data(){
		return{
			// obj:{

			// },
			
		}
	},
}
	
</script>
<style scoped>
	.particulars{
		position: absolute;
		top: 720px;
		left: 0;
		width: 375px;
		background-color: #fff;
	}
	
	.particulars p{
		height: 14px;
		line-height: 14px;
		font-size: 10px;
		color: #494949;
		text-align: center;
		padding:10px 0;
	}
	.particulars .title{
		font-size: 20px;
		color: #010E0D;
		height: 28px;
		line-height: 28px;
		letter-spacing: 2.7px;
	}
	.particulars .title1{
		height: 22px;
		line-height: 22px;
		font-size: 16px;
		color: #010E0D;
		letter-spacing: 2.7px;
	}
	.particulars .title2{
		height: 14px;
		line-height: 14px;
		font-size: 10px;
		color: #494949;
		letter-spacing: 6.8px;
	}
	.particulars .picture{
		display: block;
		width: 335px;
		height: 364px;
		margin:20px auto;
	}
	
</style>