<template>
	<scroll-view>
		<!-- 注意事项: 不能使用 index 作为 key 的唯一标识 -->
		<view class="cell" v-for="(item, index) in list" :key="item.id">
			<CheckQuestion :question="item" :index="index" />
		</view>
	</scroll-view>
</template>

<script>
	import CheckQuestion from './components/CheckQuestion.vue'
	export default {
		components: {
			CheckQuestion
		},
		data() {
			return {
				title: '小工具',
				list: [{
					id: "1",
					title: '原生渲染的资源回收机制',
					check: true,
					answers: [{
						text: 'asdgasdg11',
						score: 3
					}, {
						text: 'asdgasdg2',
						score: 2
					}, {
						text: 'asdgasdg3',
						score: 1
					}]
				}, {
					id: "2",
					title: '原生渲k大时代感健康染的资源回收机制',
					answers: [{
						text: '333',
						score: 3
					}]
				},{
					id: "1",
					title: '原生渲染的资源回收机制',
					check: true,
					answers: [{
						text: 'asdgasdg11',
						score: 3
					}, {
						text: 'asdgasdg2',
						score: 2
					}, {
						text: 'asdgasdg3',
						score: 1
					}]
				},{
					id: "1",
					title: '原生渲染的资源回收机制',
					check: true,
					answers: [{
						text: 'asdgasdg11',
						score: 3
					}, {
						text: 'asdgasdg2',
						score: 2
					}, {
						text: 'asdgasdg3',
						score: 1
					}]
				},{
					id: "1",
					title: '原生渲染的资源回收机制',
					check: true,
					answers: [{
						text: 'asdgasdg11',
						score: 3
					}, {
						text: 'asdgasdg2asdgasdgjaslkdjglsalkjglksajdgskajdlgksajldgkjlaskdgj',
						score: 2
					}, {
						text: 'asdgasdg3',
						score: 1
					}]
				},{
					id: "1",
					title: '原生渲染的资源回收机制',
					check: true,
					answers: [{
						text: 'asdgasdg11',
						score: 3
					}, {
						text: 'asdgasdg2',
						score: 2
					}, {
						text: 'asdgasdg3',
						score: 1
					}]
				}],
				indexMap: {
					'0': 'A',
					'1': 'B',
					'2': 'C',
					'3': 'D',
					'4': 'E',
				}
			}
		},
		onLoad() {

		},

		methods: {
			checkboxChange: function(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}


	.cell {
		padding: 20rpx;
	}

	.question {
		color: #4c4c4c;
		font-size: 16rpx;
		font-weight: 500;
	}

	.answer {
		padding: 10rpx;
		color: #4c4c4c;
	}

	.checkbox-text {
		font-size: 14rpx;
	}
</style>
