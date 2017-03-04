<template>
	<div class="hollow-box">
		<div class="inner-box">
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
	}
</script>

<style type="text/css" lang="styl" scoped>
	$hollow-box-size = 160px
	$inner-box-size = 100px
	$two-box-distance = ($hollow-box-size - $inner-box-size) / 2
	$one-step-during = 2s
	$total-during = $one-step-during * 2

	mixin-hollow-animation()
		animation: animation-hollow-box ($one-step-during * 2) linear infinite
	mixin-animation-inner(anim)
		animation: anim $total-during linear infinite
	
	@keyframes animation-hollow-box
		100% {
			transform: rotate(-360deg)
		}
	@keyframes animation-hollow-box-before
		0% {
			transform: rotate(0)
		}
		24% {
			z-index: -100
		}
		25% {
			transform: rotate(0)
			z-index: 1
		}
		50% {
			transform: rotate(-180deg)
		}
		74% {
	  	z-index: 100
	  }
	  75% {
	  	transform: rotate(-180deg)
	  	z-index: -1
		}
	  100% {
	    transform: rotate(-360deg)
	  }
	@keyframes animation-inner-box-before
		0% {
			transform: rotateZ(0)
		}
		25% {
			transform: rotate(-180deg)
		}
		50% {
			transform: rotateZ(-180deg)
		}
		75% {
			transform: rotate(-360deg)
		}
		100% {
			transform: rotate(-360deg)
		}
	@keyframes animation-inner-box-after
		0% {
			transform: rotate(0)
		}
		50% {
			transform: rotate(0)
		}
		75% {
			transform: rotate(-180deg)
		}
		100% {
			transform: rotate(-360deg)
		}
  
	// 下面是样式
	.hollow-box
		position: relative
		display: flex
		justify-content: center
		align-items: center
		margin: 100px auto
		width: $hollow-box-size
		height: $hollow-box-size
		border: 2px solid red
		border-top-color: transparent
		border-radius: 50%
		mixin-hollow-animation()
		&:before
			position: absolute
			content: ''
			top: $two-box-distance
			width: $inner-box-size
			height: ($inner-box-size / 2)
			border-radius: $inner-box-size $inner-box-size 0 0
			background-color: red
			transform-origin: 50% 100%
			mixin-animation-inner(animation-hollow-box-before)

	.inner-box
		position: relative
		width: $inner-box-size
		height: $inner-box-size
		border-radius: 50%
		background-color: red
		&:before, &:after
			position: absolute
			content: ''
			top: 0
			left: 0
			width: 100%
			height: 50%
		&:before
			border-radius: $inner-box-size $inner-box-size 0 0
			background-color: blue
			transform-origin: 50% 100%
			mixin-animation-inner(animation-inner-box-before)
		&:after
			top: 50%
			border-radius: 0 0 $inner-box-size $inner-box-size
			background-color: blue
			transform-origin: 50% 0
			mixin-animation-inner(animation-inner-box-after)
</style>
