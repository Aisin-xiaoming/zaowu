<template>
	<div class="search">
		<ul class="search-list">
			<li class="list" v-for=" list in lists">
				<p>{{list.p}}</p>
				<span>{{list.span}}</span>
				<span>{{list.span1}}</span>
				<span>{{list.span2}}</span>
				<span>{{list.span3}}</span>
				<span>{{list.span4}}</span>
				<span>{{list.span5}}</span>
				<span>{{list.span6}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				lists:[
					{
						id:1,
						p:'热门搜索',
						span:'香氛',
						span1:'项链',
						span2:'马克杯',
						span3:'手镯',
						span4:'包',
						span5:'床品',
						span6:'香水'
					},
					{
						id:2,
						p:'历史搜索',
						span:'香氛',
						span1:'项链',
						span2:'马克杯',
						span3:'手镯',
						span4:'包',
						span5:'床品',
						span6:'香水'
					},
				],
			}
		},

	}
</script>
<style scoped>
	
</style>