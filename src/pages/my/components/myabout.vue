<template>
	<div class="my-about">
		<ul>
			<router-link tag='li' to='/address' class="titles">
				<img class="pic" src="@/assets/my/about.png" alt="sorry">
				<p class="tp">收货地址</p>
				<img class="arrow"  src="@/assets/my/arrow.png" alt="sorry">
			</router-link>
			<router-link tag='li' to='/discount' class="titles">
				<img class="pic" src="@/assets/my/about1.png" alt="sorry">
				<p class="tp">我的优惠券</p>
				<img class="arrow"  src="@/assets/my/arrow.png" alt="sorry">
			</router-link>
			<router-link tag='li' to='/account' class="titles">
				<img class="pic" src="@/assets/my/about2.png" alt="sorry">
				<p class="tp">账户与安全</p>
				<img class="arrow"  src="@/assets/my/arrow.png" alt="sorry">
			</router-link>
			<router-link tag='li' to='/service' class="titles">
				<img class="pic" src="@/assets/my/about3.png" alt="sorry">
				<p class="tp">联系客服</p>
				<img class="arrow"  src="@/assets/my/arrow.png" alt="sorry">
			</router-link>
			<router-link tag='li' to='/about' class="titles">
				<img class="pic" src="@/assets/my/about5.png" alt="sorry">
				<p class="tp">关于造物</p>
				<img class="arrow"  src="@/assets/my/arrow.png" alt="sorry">
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
	.my-about{
		width: 336px;
		height: 280px;
		/*background-color: blue;*/
	}
	.my-about ul{
		width: 100%;
		height: 100%;
	}
	.my-about ul li{
		position: relative;
		width: 100%;
		height: 56px;
	}
	.my-about ul li .pic{
		position: absolute;
		left: 0;
		top: 10px;
		width: 22px;
		height: 22px;
	}
	.my-about ul li p{
		position: absolute;
		top: 12px;
		left:35px;
		font-size: 16px;
		height: 22px;
		text-align: center;
	}
	.my-about ul li .arrow{
		position: absolute;
		top: 12px;
		right: 15px;
 	}
</style>