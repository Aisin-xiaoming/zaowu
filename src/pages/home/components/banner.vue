<template>
	<div class="banner">
		 <swiper :options="swiperOption" ref="mySwiper" class='sw'>
		    <!-- slides -->
		    <swiper-slide class='slide'>
		    	<img src="../img/第一张.png" alt="sorry">
		    </swiper-slide>
		    <swiper-slide class='slide'>
		    	<img src="../img/第二张.png" alt="sorry">
		    </swiper-slide>
		    <swiper-slide class='slide'>
		    	<img src="../img/第三张.png" alt="sorry">
		    </swiper-slide>
		   <!--  <swiper-slide><img src="../img/" alt="sorry">I'm Slide 4</swiper-slide>
		    <swiper-slide><img src="" alt="sorry">I'm Slide 5</swiper-slide>
		    <swiper-slide><img src="" alt="sorry">I'm Slide 6</swiper-slide>
		    <swiper-slide><img src="" alt="sorry">I'm Slide 7</swiper-slide> -->
		    <!-- Optional controls -->
		 </swiper>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				// msg:'这是一个首页的头部呀',
				swiperOption: {//swiper3
			      autoplay: 3000,
			      speed: 1000,
			      height:500,
			      spaceBetween:20
			    }
			}
		}
	}
</script>
<style scoped>
	.banner{
		width: 100%;
		height: 394px;
		background-color: #f8f8f8
		
	}
	.sw{
		height: 100%;
		padding:0 50px;
		}
</style>