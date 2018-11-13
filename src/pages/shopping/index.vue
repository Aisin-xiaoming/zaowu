<template>
	<div class="shopping">
		<mo-top></mo-top>
		<mo-shopping ></mo-shopping>
		<mo-bottom></mo-bottom>
	</div>
</template>
<script>
import MoTop from './components/top' 
import MoShopping from './components/shopping'
import MoBottom from './components/bottom'
import {mapMutations} from 'vuex'
	export default{
		methods:{
		
		},
		components:{
			MoShopping,
			MoTop,
			MoBottom
		}
	}
</script>
<style scoped>
	
</style>