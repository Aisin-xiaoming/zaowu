<template>
	<div class="container">
		<ul class="top">
			<li>推荐<span>|</span></li>
			<li>活动<span>|</span></li>
			<li>品牌<span>|</span></li>
			<li class="last">定制</li>
		</ul>
		<p class="line"></p>
		<p class="time">-TUE 9.18-</p>
		<p class="title">周二品质生活专题</p>
		<img class="picture" src="../img/Group 4.png" alt="sorry">
		<ul class="body">
			<li>
				<img src="../img/xiangshui.png" alt="sorry">
				<p class="des">精油香氛</p>
				<p class="price">¥344</p>
			</li>
			<li>
				<img src="../img/zhijia.png" alt="sorry">
				<p class="des">山居猎奇</p>
				<p class="price">¥344</p>
			</li>
			<li>
				<img src="../img/siyecao.png" alt="sorry">
				<p class="des">北欧国度</p>
				<p class="price">¥372</p>
			</li>
			<li>
				<img src="../img/pan.png" alt="sorry">
				<p class="des">卡洛卡陶瓷碗盘</p>
				<p class="price">¥388</p>
			</li>
		</ul>
		<p class="time">-MON 9.17-</p>
		<p class="title">周一新品抢鲜放送</p>
		<ul class="base">
			<li><img src="../img/di1.png" alt="sorry"></li>
			<li><img src="../img/di2.png" alt="sorry"></li>
			<li><img src="../img/di3.png" alt="sorry"></li>
			<li><img src="../img/di4.png" alt="sorry"></li>
			<li><img src="../img/di5.png" alt="sorry"></li>
			<li><img src="../img/di6.png" alt="sorry"></li>
			<li><img src="../img/di7.png" alt="sorry"></li>
			<li><img src="../img/di8.png" alt="sorry"></li>
		</ul>
	</div>
	
</template>
<script>
	export default{
		
	}
	
</script>
<style scoped lang='styl'>
	.container{
		width: 375px;
		height: 54px;
		margin:30px auto;
	}
	.container .top{
		overflow: hidden;
		width: 255px;
		height: 54px;
		padding-top:13.5px;
		margin-left: 79px;
	}
	.container .top li{
		float: left;
		/*width: 30px;*/
		height: 21px;
		line-height: 21px;
		font-size: 15px;
		color:#010E0D ;
		/*margin-right:30px;*/
	}
	.container .top li>span{
		width: 2px;
		height: 12.4px;
		padding:13px 13px;
	}

	.container .top .last{
		margin-right: 0;
	}
	.container .line{
		width: 375px;
		height: 5px;
		background:purple;
		/*background: #F9F9F9;*/
		margin-top: 393px;
	}
	.container .time{
		/*width: 109px;*/
		height: 28px;
		line-height: 28px;
		font-size: 20px;
		font-family: PingFangSC-Semibold;
		color: #010E0D;
		margin-top:16px;
		margin-bottom: 2px;
		text-align: center;
	}
	.container .title{
		/*width: 97px;*/
		height: 17px;
		font-size: 12px;
		color: #494949;
		text-align: center;	
		margin-top: 1px;
	}
	.container .picture{
		display: block;
		width: 341px;
		height: 202px;
		margin:9px auto ;
	}
	.container .body{
		overflow: hidden;
		width: 100%;
		/*background-color: yellow;*/
	}
	.container .body>li{
		float: left;
	}
	.container .body>li>img{
		width: 79px;
		height: 79px;
		background: #FFFFFF;
		border-radius: 8px;
		margin-left: 12px;
	}
	.container .body>li p{
		font-size: 10px;
		color: #494949;
		text-align: center;
		margin-top: 5px;
	}
	.container .body>li .price{
		color: #575757;
	}
	.container .base{
		overflow: hidden;
		width: 100%;
		/*background-color: red;*/
		margin-bottom: 88px;
	}
	.container .base>li{
		float: left;
	}
	.container .base>li>img{
		width: 79px;
		height: 79px;
		margin-left: 10px;
		margin-top:10px;
	}
</style>