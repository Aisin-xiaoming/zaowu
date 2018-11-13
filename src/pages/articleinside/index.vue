<template>
	<div class="article">
		<mo-article></mo-article>
		<mo-top></mo-top>
		<router-view/>
	</div>
</template>
<script>
import MoArticle from './components/article'
import MoTop from './components/top'
	export default{
		components:{
			MoTop ,
			MoArticle,
		}
	}
</script>
<style scoped>
	.article{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
	}
</style>