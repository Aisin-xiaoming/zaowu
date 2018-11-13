<template>
	<div class="agood">
		<mo-agoodinside></mo-agoodinside>
		<mo-top></mo-top>
		<router-view/>
	</div>
</template>
<script>
import MoTop from './components/top'
import MoAgoodinside from './components/agoodinside'
	export default{
		components:{
			MoAgoodinside ,
			MoTop,
		}

	}
</script>
<style scoped>
.agood{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
}
	
</style>