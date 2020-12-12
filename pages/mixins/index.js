import CheckQuestion from '../components/CheckQuestion.vue'
import RadioQuestion from '../components/RadioQuestion.vue'
import FooterButton from '../components/FooterButton.vue'
import Dialog from '../components/Dialog.vue'

  export default {
    components: {
      CheckQuestion,
      RadioQuestion,
      FooterButton,
      Dialog
    },
    data() {
      return {
        showDialog: false,
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
      },
      onRadioQuestionChange(value) {
        this.results[value.questionIndex].answerIndices = [value.answerIndex]
      }
    }
  }
