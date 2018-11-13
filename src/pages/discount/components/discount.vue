<template>
	<div class="discount">
		<ul discount-many>
			<li class="many" v-for="many in manys">
				<img :src="many.img" alt="sorry">
			</li>
		</ul>
	</div>
</template>
<script>
import Moming from '@/assets/collect/Group.png'
import Momin from '@/assets/collect/分组.png'
import Momi from '@/assets/collect/分组1.png'
	export default{
		data(){
			return{
				manys:[
					{
						id:1,
						img: Moming,
					},
					{
						id:2,
						img: Momin,
					},
					{
						id:3,
						img: Momi,
					},
				],

			}
		},

	}
</script>
<style scoped>
	.discount{
		width: 100%;
		height: 100%;
		/*background-color: red;*/
		background: #F5F5F5;
	}
	.discount  ul {
		width: 100%;
	}
	.discount ul li{
		width: 100%;
	}
	.discount ul li img{
		display: block;
		width: 353px;
		height: 149px;
		margin:20px auto;
	}
</style>