const questions = [{
    title: '我觉得比平时容易紧张和着急（焦虑）'
  }, {
    title: '我无缘无故地感到害怕（害怕）',
  }, {
    title: '我容易心里烦乱或觉得惊恐（惊恐）',
  }, {
    title: '我觉得我可能将要发疯 （发疯感）',
  }, {
    title: '我觉得一切都很好，也不会发生什么不幸（不幸预感）',
    reversed: true
  }, {
    title: '我手脚发抖打颤（手足颤抖）',
  }, {
    title: '我因为头痛、颈痛和背痛而苦恼（躯体疼痛）',
  }, {
    title: '我感觉容易衰弱和疲乏（乏力）',
  }, {
    title: '我觉得心平气和，并且容易安静坐着（静坐不能）',
    reversed: true
  }, {
    title: '我觉得心跳得快（心悸）',
  }, {
    title: '我因为一阵阵头晕而苦恼（头昏）',
  }, {
    title: '我有晕倒发作，或觉得要晕倒似的（晕厥感）',
  }, {
    title: '我呼气吸气都感到很容易（呼吸困难）',
    reversed: true
  }, {
    title: '我手脚麻木和刺痛（手足刺痛）',
  }, {
    title: '我因胃痛和消化不良而苦恼（胃痛或消化不良）',
  }, {
    title: '我常常要小便（尿意频数）',
  }, {
    title: '我的手常常是干燥温暖的（多汗）',
    reversed: true
  }, {
    title: '我脸红发热（面部潮红）',
  }, {
    title: '我容易入睡并且一夜睡得很好（睡眠障碍）',
    reversed: true
  }, {
    title: '我做恶梦（恶梦）'
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
