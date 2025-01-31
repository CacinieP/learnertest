let answers = [];

function recordAnswer(questionIndex, answer) {
  answers[questionIndex] = answer;
}

function showResult() {
  let mbti = calculateMBTI(answers);
  let learningType = calculateLearningType(answers);

  document.getElementById("result").style.display = "block";
  document.getElementById("mbtiResult").textContent = `MBTI 类型: ${mbti}`;
  document.getElementById("learningType").textContent = `学习类型: ${learningType}`;
}

function calculateMBTI(answers) {
  let mbti = '';
  mbti += (answers[0] === 'A') ? 'E' : 'I';
  mbti += (answers[1] === 'A') ? 'T' : 'F';
  mbti += (answers[2] === 'A') ? 'S' : 'N';
  mbti += (answers[3] === 'A') ? 'J' : 'P';
  return mbti;
}

function calculateLearningType(answers) {
  let score = 0;
  answers.forEach((answer, index) => {
    if (index === 0 || index === 1 || index === 2 || index === 3) {
      score += (answer === 'A') ? 1 : 0;
    }
  });

  return score > 2 ? '视觉型学习者' : '听觉型学习者';
}
