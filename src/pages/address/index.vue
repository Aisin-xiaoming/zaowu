<template>
	<div class="address">
		<mo-address></mo-address>
		<mo-head :isSou='false'></mo-head>
		<!-- <router-view></router-view> -->
	</div>
</template>
<script>
import MoAddress from './components/address'
import MoHead from '@/components/head'
export default{
	components:{
		MoAddress,
		MoHead,
	}

}
	
</script>
<style scoped>

	
</style>