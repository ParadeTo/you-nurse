<template>
  <Questions :questions="questions" hideStandandPoint>
      <view>吸烟者可通过上表检验尼古丁依赖程度。</view>
      <view>分值范围：0～10分。</view>
      <view>分值所代表的依赖水平：0～2分，很低；3～4分，低；5分，中度；6～7分，高；8～10分，很高。</view>
      <view>FTND≧6时，被认为是区分尼古丁高度依赖的标准。</view>
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
