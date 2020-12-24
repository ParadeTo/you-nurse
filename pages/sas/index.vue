<template>
  <Questions :questions="questions">
      <view>将20个项目的各个得分相加，即得总粗分</view>
      <view>标准分=总粗分*1.25，取整数部分</view>
      <view>标准总分50-59为轻度焦虑；60-69为中度焦虑；70分以上为重度焦虑</view>
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
