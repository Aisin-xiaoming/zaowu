<template>
	<div class="container">
		<ul class="shen">
			<li v-for="(img,index) in items"   @click="finditem(index)" class="find-item">
				<img :src="img.img" alt="sorry" >
				<ul class="items" v-show="img.isShow">
					<router-link v-for="titem in titems" :key="titem.id" tag='li' :to="/kind/+titem.id">
						<p>{{titem.p}}</p>
						<img :src="titem.arrow" alt="sorry">
					</router-link>
				</ul>	
			</li>
		</ul>
	</div>	
</template>
<script>
import Moming from "@/assets/kind/Group.png" 
import Momin from "@/assets/kind/Group1.png" 
import Momi from "@/assets/kind/Group 2.png" 
import Mom from "@/assets/kind/Group 3.png" 
import Mon from "@/assets/kind/Group 4.png" 
import Moarrow from "@/assets/kind/arrow.png" 
	export default{
		data (){
			return{
				isShow:true,
				items:[
					{
						id:1,
						isShow:false,
						img:Moming
					},
					{
						id:2,
						isShow:false,
						img:Momin
					},
					{
						id:3,
						isShow:false,
						img:Momi
					},
					{
						id:4,
						isShow:false,
						img:Mom

					},
					{
						id:5,
						isShow:false,
						img:Mon
					}

				],
				titems:[
					{	
						id:11,
						p:'全部',
						arrow: Moarrow
					},
					{	
						id:22,
						p:'睡衣',
						arrow:Moarrow
					},
					{
						id:33,
						p:'浴袍',
						arrow:Moarrow
					},
					{	id:44,
						p:'内衣',
						arrow:Moarrow
					},
					{	id:55,
						p:'其他',
						arrow:Moarrow
					}
				],
			}
			
		},
		methods:{
			finditem:function(index){
				this.items[index].isShow=!this.items[index].isShow;
				console.log(index);
			}
		},
	}
</script>
<style scoped>
	.container{
		margin-top: 13.5px;
		width: 100%;
	}
	.container .shen{
		margin-bottom: 88px;
	}
	.shen .find-item{
		width: 100%;
		padding:5px 0;
	}
	.shen .find-item img{
		display: block;
		margin:0 auto;
	}
	.find-item .items{
		overflow: hidden;
		width: 100%;
	}
	.find-item .items li{
		width: 100%;
		height: 22px;
		padding-top: 11px;
		padding-bottom: 6px;
		border-bottom:1px solid  #D8D6D6;
	}
	.items li>p{
		float: left;
		font-size: 16px;
		color: #494949;
	}
	.items li>img{
		float: right;

	}
</style>