<template>
	<div class="banners">
		
		<div class="banner">
			 <swiper :options="swiperOption" ref="mySwiper" class='sw'>
			    <!-- slides -->
			    <swiper-slide class='slide'>
			    	<img src="@/assets/shopping/轮播1.png" alt="sorry">
			    </swiper-slide>
			    <swiper-slide class='slide'>
			    	<img src="@/assets/shopping/轮播1.png" alt="sorry">
			    </swiper-slide>
			    <swiper-slide class='slide'>
			    	<img src="@/assets/shopping/轮播1.png" alt="sorry">
			    </swiper-slide>
			 </swiper>
		</div>
		<div class="des" v-for="item of detail"  :key=item.id>
			<p class="title">{{detail.board}}</p>
			<p class="detail">{{detail.desc1}}</p>
			<p class="money">{{detail.price}}</p>
		</div>
	</div>
</template>
<script>
import {mapMutations} from 'vuex'
	export default {
		props:{
			detail:{

			}
		},
		data(){
			return {
				swiperOption: {//swiper3
			      autoplay: 3000,
			      speed: 1000,
			      height:500,
			      spaceBetween:20
			    }
			}
		},
		methods:{
    ...mapMutations({
      addList1:'addList'
    })
  }
	}
</script>
<style scoped>
	.banners{
		position: absolute;
			top: 0;
			left: 0;
			width: 375px;
			background-color: #f8f8f8;
			
	}
	.banners .banner{
		position: absolute;
		top: 0;
		left: 0;
		width: 375px;
		height:383px;
		background-color: #f8f8f8;
		margin-top: 40px;
		
	}
	.banners .banner .sw{
		height: 100%;
		top:20px;
		padding:0 50px;
	}
	.banners .des{
		position: absolute;
		top: 285px;
		left: 0;
		width:375px;
		height: 400px;
		background: #A6B4A3;
	}
	.des p{
		font-size: 20px;
		color: #FFFFFF;
	}
	.des .title{
		position: absolute;
		top: 240px;
		left: 150px;
	}
	.des .detail{
		position: absolute;
		top: 270px;
		left: 64px;
	}
	.des .money{
		position: absolute;
		top: 300px;
		left: 155px;
		font-size: 24px;
	}	
</style>