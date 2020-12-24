<template>
  <Questions :questions="questions">
     <view>将20个项目的各个得分相加，即得总粗分，总粗分的正常上限参考值为41分</view>
     <view>标准分=总粗分*1.25 取整数部分, 标准分正常上限参考值为53分</view>
     <view>标准总分53-62为轻度抑郁；63-72为中度抑郁；73分以上为重度抑郁</view>
    </Dialog>
  </Questions>
</template>

<script>
  import Questions from '../components/Questions.vue'
  import questions from './questions.js'

  export default {
    components: {
      Questions
    },
    data() {
      return {
        questions
      }
    }
  }
</script>
