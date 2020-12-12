<template>
	<view class="question">
		<text>{{content}}</text>
	</view>
</template>

<script>
	export default {
		props: ['content']
	}
</script>

<style>
	.question {
		color: #4c4c4c;
		font-size: 36rpx;
		font-weight: 500;
	}
</style>
