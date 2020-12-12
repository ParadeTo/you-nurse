<template>
  <scroll-view class="scroll-view">
    <view class="cell" v-for="(item, index) in questions" :key="index">
      <CheckQuestion v-if="item.check" :question="item" :index="index" @change="onCheckQuestionChange" />
      <RadioQuestion v-else :question="item" :index="index" @change="onRadioQuestionChange" />
    </view>
    <FooterButton text='完成' :disabled="disabled" @click="onClick" />
    <Dialog :show="showDialog" @maskClick="showDialog=false">
      <view>
        得分：<text class="important">{{score}}</text>
      </view>
      <view>吸烟者可通过上表检验尼古丁依赖程度。</view>
      <view>分值范围：0～10分。</view>
      <view>分值所代表的依赖水平：0～2分，很低；3～4分，低；5分，中度；6～7分，高；8～10分，很高。</view>
      <view>FTND≧6时，被认为是区分尼古丁高度依赖的标准。</view>
    </Dialog>
  </scroll-view>
</template>

<script>

  import questions from './questions'
  import mixins from '../mixins/index.js'

  export default {
    mixins: [mixins],
    data() {
      const results = [...new Array(questions.length)].map(() => ({
        answerIndices: []
      }))
      return {
        questions,
        results
      }
    },
    computed: {
      resultText() {
        return `总粗分：${this.score},  标准分：${Math.floor(this.score * 1.25)}
        将20个项目的各个得分相加，即得总粗分。总粗分的正常上限参考值为41分
        标准分=总粗分*1.25  取整数部分, 标准分正常上限参考值为53分。
        标准总分53-62为轻度抑郁； 63-72为中度抑郁；73分以上为重度抑郁
        `
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

  .scroll-view {
    background-color: #F8F8F8;
    padding-bottom: 180rpx;
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
  
  .important {
    color: red;
    font-size: 14px;
    font-weight: 500;
  }
</style>
