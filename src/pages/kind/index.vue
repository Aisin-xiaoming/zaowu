<template>
<mo-betterscroll class="wrapper">
	<div class="kind">
		kind我的分类页面
			
		<mo-header :isSou='false'></mo-header>
		<mo-container></mo-container>
		<router-view/>
	</div>
</mo-betterscroll>
<!-- </router-view> -->
</template>
<script>
import MoBetterscroll from '@/components/betterscroll'
	// import BoNav from '@/components/nav'
	import MoHeader from '@/components/header'
	import MoContainer from './components/container'
	import {mapMutations} from 'vuex'
	import axios from 'axios'
	export default{
		
		created(){
			this.setNavShow(true)
		},
		data(){
			return{
			}
		},
		methods:{
			...mapMutations({
				setNavShow:'setNavShow'
			})
		},
		components:{
			MoBetterscroll,
				// BoNav,
				MoHeader,
				MoContainer,
		}
	}
</script>
<style scoped lang="styl">
.wrapper{
	height: 100px;
}
	.kind{
		overflow-x:hidden;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
	}

</style>