<template>
	<view>
		<Title :content="`${index+1}. ${question.title}`" />
		<checkbox-group @change="checkboxChange">
			<view class="answer" v-for="(answer, answerIndex) in question.answers" :key="answerIndex">
				<label class="checkbox-text">
					<checkbox :value="answerIndex.toString()" /> {{answer.text}}
				</label>
			</view>
		</checkbox-group>
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
			checkboxChange: function(e) {
				this.$emit('change', {
					questionIndex: this.index,
					answerIndices: e.detail.value
				})
			}
		}
	}
</script>

<style>
	.checkbox-text {
		font-size: 34rpx;
		color: #4c4c4c;
		word-break: break-all;
	}
  .answer {
    margin: 5px 0;
  }
</style>
