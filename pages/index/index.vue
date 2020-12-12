<template>
  <scroll-view class="scroll-view">
    <!-- 注意事项: 不能使用 index 作为 key 的唯一标识 -->
    <view class="cell" v-for="(item, index) in questions" :key="index">
      <CheckQuestion v-if="item.check" :question="item" :index="index" @change="onCheckQuestionChange" />
      <RadioQuestion v-else :question="item" :index="index" @change="onRadioQuestionChange" />
    </view>
    <FooterButton text='完成' :disabled="disabled" @click="onClick" />
    <Dialog :show="showDialog" @maskClick="showDialog=false" :content="score" />
  </scroll-view>
</template>

<script>
  import CheckQuestion from './components/CheckQuestion.vue'
  import RadioQuestion from './components/RadioQuestion.vue'
  import FooterButton from './components/FooterButton.vue'
  import Dialog from './components/Dialog.vue'
  import questions from './questions'
  
  export default {
    components: {
      CheckQuestion,
      RadioQuestion,
      FooterButton,
      Dialog
    },
    data() {
      const results = [...new Array(questions.length)].map(() => ({
        answerIndices: []
      }))
      return {
        showDialog: false,
        title: '小工具',
        questions,
        results,
        indexMap: {
          '0': 'A',
          '1': 'B',
          '2': 'C',
          '3': 'D',
          '4': 'E',
        }
      }
    },
    computed: {
      disabled() {
        return this.results.some(result => result.answerIndices.length === 0)
      },
      score() {
        let score = 0
        for (let i = 0, len = this.results.length; i < len; i++) {
          const question = this.questions[i]
          const rightAnswers = question.rightAnswers
          if (rightAnswers) {
            const answerIndices = this.results[i].answerIndices
            if (rightAnswers.every(answer => answerIndices.includes(answer.toString()))) {
              score += question.score
            }
          } else {
            const answerIndices = this.results[i].answerIndices
            for (let j = 0, len = answerIndices.length; j < len; j++) {
              const answer = question.answers[answerIndices[j]]
              score += answer.score
            }
          }

        }
        return score
      }
    },

    methods: {
    
      onClick() {
        this.showDialog = true;
      },
      onCheckQuestionChange(value) {
        this.results[value.questionIndex].answerIndices = value.answerIndices
        console.log(value)
      },
      onRadioQuestionChange(value) {
        this.results[value.questionIndex].answerIndices = [value.answerIndex]
        console.log(value)
      },
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
</style>
