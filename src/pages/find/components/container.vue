<template>
<div class="find-top">
	<a @click="itemClick" :class="{active:isactive===true}" 	 class="title item">
		<p>精选文章</p>
	</a>
	<a @click="goodClick" :class="{active:isactive===false}" 	class="title good">
		<p>好物推荐</p>
	</a>
</div>
</template>
<script>
	export default{
		components:{

		},
		data(){
			return{
				isactive:true
			}
		},
		methods:{
			//向父类发送事件
			itemClick(){
				this.$emit('itemClick');
				this.isactive = true;
			},
			goodClick(){
				this.$emit('goodClick');
				this.isactive = false;
			}
		}
		
	}
</script>
<style scoped>
	.find-top{
		overflow: hidden;
		width: 375px;
		height: 44px;
		background-color: #fff;
	}
	.find-top .title{
		float: left;
		width: 50%;
		height: 44px;
		line-height: 44px;
		font-size: 18px;
		text-align: center;
	}
	.find-top .good,.item{
		color: #999999;
	}
	
	.find-top .item.active,.good.active{

		color: #010E0D;
	}
</style>