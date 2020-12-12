const questions = [{
    title: '我感到情绪沮丧，郁闷'
  }, {
    title: '我感到清晨心情很好',
    reversed: true
  }, {
    title: '我要哭或想哭',
  }, {
    title: '我夜间睡眠不好',
  }, {
    title: '我吃饭像平时一样多',
    reversed: true
  }, {
    title: '我的性功能正常',
    reversed: true
  }, {
    title: '我感到体重减轻',
  }, {
    title: '我为便秘烦恼',
  }, {
    title: '我的心跳比平时快',
  }, {
    title: '我无故感到疲劳',
  }, {
    title: '我的头脑像往常一样清楚',
    reversed: true
  }, {
    title: '我做事情像平时一样不觉得困难',
    reversed: true
  }, {
    title: '我坐卧不安，难以保持平静'
  }, {
    title: '我对未来抱有希望',
    reversed: true
  }, {
    title: '我比平时更容易激怒',
  }, {
    title: '我做决定很容易',
    reversed: true
  }, {
    title: '我感到自己是有用的和不可缺少的人',
    reversed: true
  }, {
    title: '我的生活很有意义',
    reversed: true
  }, {
    title: '假若我死了别人会过的更好',
  }, {
    title: '我仍旧喜爱自己平时喜爱的东西',
    reversed: true
  }
]

export default questions.map(({
  title,
  reversed
}) => {
  return {
    title: `${title}？`,
    answers: [{
      text: '没有',
      score: reversed ? 4 : 1
    }, {
      text: '有时',
      score: reversed ? 3 : 2
    }, {
      text: '经常',
      score: reversed ? 2 : 3
    }, {
      text: '持续',
      score: reversed ? 1 : 4
    }]
  }
})
