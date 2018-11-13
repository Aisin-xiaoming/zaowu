<template>
	<!-- bottom里面的东西直接写在shopping组件里面 -->
<!-- <div class="bottom">
	<button class="all toggleCheck" @click='toggleCheck'>全选</button>
	<p class="sum">总计:¥{{zongjia}}</p>
	<button class="buy"  >立即购买</button>
</div> -->
</template>
<script>
// import {mapState,mapGetters, mapMutations} from 'vuex'
// 	export default{
// 		computed:{
// 			...mapState(['list']),
// 			// ...mapGetters(['zongjia'])
// 			zongjia(){
// 				var zongjia2 = 0 
// 				for(let i = 0 ; i < this.checkboxList.length ; i++){
// 					if(this.checkboxList[i].count>0){
// 						console.log('f')
// 						zongjia2 +=  this.checkboxList[i].count * this.checkboxList[i].price
// 					}
// 				}
// 				return zongjia2 

// 			}
// 		},
// 		methods:{
// 			toggleCheck(){
				
// 				if(this.checkboxList.length>=0&&this.checkboxList.length!=this.list.length){
// 					//这个时候要全选
// 					this.checkboxList = this.list
// 				}else{
// 					this.checkboxList=[]
// 				}
// 			},
// 			//向外触发事件

// 		},

// 	}
</script>
<style scoped>
	/*.bottom{
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
	}*/
</style>