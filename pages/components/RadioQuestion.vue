<template>
	<view>
		<Title :content="`${index+1}. ${question.title}`" />
		<radio-group @change="change">
			<view class="answer" v-for="(answer, answerIndex) in question.answers" :key="answerIndex">
				<label class="text">
					<radio :value="answerIndex.toString()" /> {{answer.text}}
				</label>
			</view>
		</radio-group>
	</view>
</template>

<script>
	import Title from './Title.vue'
	export default {
		components: {
			Title
		},
		props: ['question', 'index'],
		methods: {
			change: function(e) {
				this.$emit('change', {
					questionIndex: this.index,
					answerIndex: e.detail.value
				})
			}
		}
	}
</script>

<style>
	.text {
		font-size: 34rpx;
		color: #4c4c4c;
		word-break: break-all;
	}
  .answer {
    margin: 5px 0;
  }
</style>
