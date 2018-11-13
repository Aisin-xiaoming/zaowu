<template>
	<div class="kindclass">
		内衣详情评估
		<mo-header></mo-header>
		<mo-banner :detail='detail'></mo-banner>
		<mo-container></mo-container>
		<mo-particulars :love='love'></mo-particulars>
		<mo-evaluate :list='list'></mo-evaluate>
		<mo-bottom 
		@copyClick="copyClick" 
		@shoppingClick="shoppingClick"
		></mo-bottom>
		<mo-show 
		
		v-if="isShows"
		 @iconClick="iconClick"
		  @footerClick="footerClick"
		  :detail='detail'
		  :isAppear="isAppear"
		  ></mo-show>
		<router-view/>
	</div>
</template>
<script>
import MoContainer from './components/container'	
import MoHeader from './components/header'	
import MoBanner from './components/banner'	
import MoBottom from './components/bottom'	
import MoParticulars from './components/particulars'	
import MoEvaluate from './components/evaluate'
import MoShow from './components/show'
import axios from 'axios'
import {mapMutations} from 'vuex'	
export default{
	name:'kindclass',
	created(){
			this.setNavShow(false)
		},
	methods:{
		copyClick(){
				this.isShows = true,
				this.isAppears = true
		},
		shoppingClick(){
			this.isShows = true;
			this.isAppear = false

		},
		iconClick(){
			this.isShows = false
		},
		footerClick(){
			this.isShows = false;

		},
		...mapMutations({
			setNavShow:'setNavShow',
		})
	},
	data(){
		return{
			isAppear:true,
			// isShow:true,
			isShows:false,
			list:[],
			detail:{},
			love:{}
		}
	},
	created(){
		//生命周期函数
		axios.get('api/goods/detail/appraise',{
			params:{
				id:this.$route.params.id
			},
		})
		.then(res=>{
			this.list = res.data.data.goodsAppraise
			// console.log('这是evaluate组件动态插入')
			// console.log(res)
		});

		axios.get('api/goods/detail',{
			params:{
				id:this.$route.params.id
			}
		})
		.then(res=>{
			this.detail = res.data.data.goodsDetail
			console.log('这是banner组件动态插入')
			console.log(res)
		});

		axios.get('api/goods/detail',{
			params:{
				id:this.$route.params.id
			},
		})
		.then(res=>{
			// console.log('这是particulars插入')
			// console.log(res)
			this.love = res.data.data.goodsDetail
		})
	},
	components:{
		 MoContainer ,
		 MoHeader,
		 MoParticulars,
		 MoEvaluate,
		 MoBottom,
		 MoBanner,
		 MoShow
	},
	
}
	
</script>
<style scoped>
.kindclass{
	position: absolute;
	top: 0;
	left: 0;
	width: 375px;
	z-index: 8;
	background-color: yellow;

}
</style>