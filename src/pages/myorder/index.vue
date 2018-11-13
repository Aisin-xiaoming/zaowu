<template>
	<div class="myorder">
		<mo-head :isTitle='false' :isShop='false'></mo-head>
		<mo-order></mo-order>
	</div>
</template>
<script>
import MoOrder from './components/order'
import MoHead from '@/components/head'
	export default{
		components:{
			MoOrder ,
			MoHead,

		}


	}
</script>
<style scoped>
	.myorder{
		/*position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;*/
		width: 100%;
		height: 100%;
		/*background-color: blue;*/
	}
</style>