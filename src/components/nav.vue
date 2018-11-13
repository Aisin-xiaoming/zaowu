<template>
	<div class="nav-box">
		<ul class="nav">
			<router-link tag='li' to='/' exact>
				<div class="icon icon1"></div>
				<!-- <img src="../pages/home/img/icon1.png" alt="sorry"> --><p>首页</p>
			</router-link>
			<router-link tag='li' to='/kind'>
				<div class="icon icon2"></div>
				<!-- <img src="../pages/home/img/icon2.png" alt="sorry"> --><p>分类</p></router-link>
			<router-link tag='li' to='/find'>
				<div class="icon icon3"></div>
				<!-- <img src="../pages/home/img/icon3.png" alt="sorry"> --><p>发现</p></router-link>
			<router-link tag='li' to='/my'>
				<div class="icon icon4"></div>
				<!-- <img src="../pages/home/img/icon4.png" alt="sorry"> --><p>我的</p></router-link>
			<!-- <li>分类</li>
			<li>发现</li> -->
		</ul>

	</div>
</template>
<script>
import Moming from '@/pages/home/img/icon1.png'
	import {mapMutations} from 'vuex'
	export default{
		created(){
			this.setNavShow(true)
			// console.log(this.setNavShow)
			// console.log('fff')
		},
		methods:{
			...mapMutations({
				setNavShow:'setNavShow'
			})
		},
	}
</script>
<style scoped lang="styl">
	.nav-box{
		width: 375px;
		height: 100%;
	}
	.nav-box .nav{
		z-index: 500;
		position: fixed;
		bottom:0;
		left: 0;
		/*width: 100%;*/
		width: 375px;
		background-color pink
		/*background-color: #fff;*/
		height: 83px;
		overflow: hidden;
		li.router-link-active p{
			color: #1C4B47;
		}
		li.router-link-active .icon1{
			margin-left: 33px;
			background-repeat:no-repeat;
			background: url('../assets/icon/gray1.png');

		}
		li.router-link-active .icon2{
			margin-left: 33px;
			background-repeat:no-repeat;
			background: url('../assets/icon/gray2.png');
		}
		li.router-link-active .icon3{
			margin-left: 33px;
			background-repeat:no-repeat;
			background: url('../assets/icon/gray3.png');
		}
		li.router-link-active .icon4{
			margin-left: 33px;
			background-repeat:no-repeat;
			background: url('../assets/icon/gray4.png');
		}
		li{
			float: left;
			width: 25%;
			height: 100%;
			text-align: center;
			.icon{
				margin-top: 16px;
				width: 29px;
				height: 29px;
			}p{
				font-size: 12px;
				margin-top: 5px;
			}
			.icon1{
				margin-left: 33px;
				background: url('../assets/icon/icon.png');
				
			}

			.icon2{
				margin-left: 33px;
				background: url('../pages/home/img/icon2.png');
			}
			.icon3{
				margin-left: 33px;
				background: url('../pages/home/img/icon3.png');
			}
			.icon4{
				margin-left: 33px;
				background: url('../pages/home/img/icon4.png');
			}
		}
	}

</style>