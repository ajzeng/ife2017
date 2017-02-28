<template>
	<div>
		<div class="main">	
			<div class="welcome">
				<h3 class="title">
					欢迎参加百度技术学院
				</h3>
				<a class="link" href="">点击进入</a>
			</div>
			<img class="bg" src="http://p1.bqimg.com/567571/2d3f9d971b09e2b4.jpg">
		</div>
		<a class="other-link" target="_blank" href="http://jsrun.net/VHpKp/edit">SVG的实现文字流光动画</a>
	</div>
</template>

<script type="text/javascript">
	export default {
	}
</script>

<style type="text/css" lang="styl">
mixin-common-transition()
	transition: all 0.5s ease
@keyframes text-streamer
	100%
		background-position: -40%

.main
	position: relative
	display: flex
	justify-content: center
	align-items: center
	width: 600px
	height: 400px
	margin: 100px auto
	&:hover
		.bg
			filter: blur(3px)
		.welcome
			opacity: 1
		.welcome:before
			height: 100%
		.welcome:after
			width: 100%
		.title
			transform: translateY(0)
	.bg
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%
		mixin-common-transition()
		z-index: -1
.welcome
	position: relative
	width: 400px
	height: 200px
	opacity: 0
	text-align: center
	mixin-common-transition()
	&:before, &:after
		position: absolute
		content: ''
		box-sizing: border-box
		border: 1px solid orange
		mixin-common-transition()
	&:before
		top: 50%
		left: 0
		width: 100%
		height: 0
		transform: translateY(-50%)
		border-width: 0 3px
	&:after
		top: 0
		left: 50%
		height: 100%
		width: 0
		transform: translateX(-50%)
		border-width: 6px 0
	.title, .link
		margin: 20px 0
		padding: 0
		font-size: 1.5em
	.title
		transform: translateY(5px)
		font-size: 2em
		color: red
		background-image: -webkit-linear-gradient(transparent, transparent), -webkit-linear-gradient(-20deg, red 30%, blue 40%, red 50%)
		-webkit-background-clip: text
		-webkit-text-fill-color: transparent
		background-size: 200% 100%
		background-position: 100% 0
		animation: text-streamer 3s cubic-bezier(0.04, 0.43, 0.82, 0.43) infinite
		mixin-common-transition()
	.link
		position: relative
		color: olive
		text-decoration: none
		z-index: 10
		cursor: pointer

.other-link
	display: block
	margin: 0 auto
	padding: 5px 10px
	width: 200px
	height: 20px
	text-align: center
	border: 1px solid #aaa
	&:hover
		border: 1px solid #333;
</style>
