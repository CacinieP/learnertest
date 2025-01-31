/************************************************
 * 1. 题目数据
 * 我们将 20 道题分成两部分：
 *   - 前 10 题：MBTI 初步定型（E/I、S/N、T/F、J/P）
 *   - 后 10 题：学习类型（更偏向视觉/听觉、计划/随性、实践/理论等）
 ************************************************/

const questions = [
  // --- 第一部分：MBTI 初步定型 (10题) ---
  {
    question: "1. 你更喜欢与他人交流还是独处？",
    options: [
      { text: "A. 喜欢与他人交流", mbtiDimension: "EI", value: "E" },
      { text: "B. 喜欢独处", mbtiDimension: "EI", value: "I" },
    ],
  },
  {
    question: "2. 你在做决定时，倾向于依赖逻辑分析还是直觉感觉？",
    options: [
      { text: "A. 依赖逻辑分析", mbtiDimension: "TF", value: "T" },
      { text: "B. 依赖直觉感觉", mbtiDimension: "TF", value: "F" },
    ],
  },
  {
    question: "3. 你在面对复杂的情境时，倾向于注重细节还是看到整体的图景？",
    options: [
      { text: "A. 注重细节", mbtiDimension: "SN", value: "S" },
      { text: "B. 看到整体图景", mbtiDimension: "SN", value: "N" },
    ],
  },
  {
    question: "4. 你在处理信息时，更倾向于从实际经验出发，还是通过理论推理进行思考？",
    options: [
      { text: "A. 从实际经验出发", mbtiDimension: "SN", value: "S" },
      { text: "B. 通过理论推理", mbtiDimension: "SN", value: "N" },
    ],
  },
  {
    question: "5. 你是否喜欢按计划行事，遵守时间表？",
    options: [
      { text: "A. 喜欢按计划行事", mbtiDimension: "JP", value: "J" },
      { text: "B. 不太喜欢按计划行事", mbtiDimension: "JP", value: "P" },
    ],
  },
  {
    question: "6. 你倾向于怎样度过一个空闲的周末？",
    options: [
      { text: "A. 与朋友聚会、参加社交活动", mbtiDimension: "EI", value: "E" },
      { text: "B. 在家放松、独自思考", mbtiDimension: "EI", value: "I" },
    ],
  },
  {
    question: "7. 当你遇到冲突时，你更倾向于通过事实和理性进行辩论，还是关注他人的情感和感受？",
    options: [
      { text: "A. 事实和理性", mbtiDimension: "TF", value: "T" },
      { text: "B. 他人的情感和感受", mbtiDimension: "TF", value: "F" },
    ],
  },
  {
    question: "8. 你更喜欢通过阅读、写作来获得知识，还是通过与他人交流、讨论来获得理解？",
    options: [
      { text: "A. 阅读和写作", mbtiDimension: "EI", value: "I" },
      { text: "B. 交流和讨论", mbtiDimension: "EI", value: "E" },
    ],
  },
  {
    question: "9. 你通常怎样准备考试或学习任务？",
    options: [
      { text: "A. 制定详细的学习计划，按部就班", mbtiDimension: "JP", value: "J" },
      { text: "B. 灵活地调整学习方式，跟随兴趣和灵感", mbtiDimension: "JP", value: "P" },
    ],
  },
  {
    question: "10. 你认为自己是一个比较有条理的人，还是较为灵活和随性的人？",
    options: [
      { text: "A. 有条理", mbtiDimension: "JP", value: "J" },
      { text: "B. 灵活随性", mbtiDimension: "JP", value: "P" },
    ],
  },

  // --- 第二部分：学习类型 (10题) ---
  {
    question: "11. 你学习新内容时，偏好哪种方式？",
    options: [
      { text: "A. 阅读和笔记", learnType: "mode", value: "Reading" },
      { text: "B. 通过互动和讨论", learnType: "mode", value: "Interaction" },
    ],
  },
  {
    question: "12. 你更容易记住的知识是什么类型的？",
    options: [
      { text: "A. 图表、图片和文字材料", learnType: "sensory", value: "Visual" },
      { text: "B. 通过听到的讲解和交流", learnType: "sensory", value: "Auditory" },
    ],
  },
  {
    question: "13. 你通常怎样准备考试或学习任务？",
    options: [
      { text: "A. 制定详细的学习计划，按部就班", learnType: "structure", value: "Structured" },
      { text: "B. 灵活调整学习方法，随时更改计划", learnType: "structure", value: "Flexible" },
    ],
  },
  {
    question: "14. 在课堂上，你更喜欢：",
    options: [
      { text: "A. 详细讲解和步骤明确的学习材料", learnType: "style", value: "StepByStep" },
      { text: "B. 灵活、富有创意和自由度的学习方式", learnType: "style", value: "Creative" },
    ],
  },
  {
    question: "15. 你偏好哪种类型的学习活动？",
    options: [
      { text: "A. 动手实践和实验", learnType: "preference", value: "HandsOn" },
      { text: "B. 理论分析和思维探讨", learnType: "preference", value: "Theory" },
    ],
  },
  {
    question: "16. 你觉得自己在哪种环境下学习最有效？",
    options: [
      { text: "A. 安静、有序、可以集中精力", learnType: "environment", value: "Quiet" },
      { text: "B. 互动性强、富有活力和社交成分", learnType: "environment", value: "Social" },
    ],
  },
  {
    question: "17. 你在学习新技能时，倾向于：",
    options: [
      { text: "A. 按照指导手册一步一步进行", learnType: "approach", value: "Guided" },
      { text: "B. 尝试自己探索，看看哪些方法有效", learnType: "approach", value: "Experimental" },
    ],
  },
  {
    question: "18. 你在学习时，更倾向于：",
    options: [
      { text: "A. 听取详细的讲解和说明", learnType: "explore", value: "Listen" },
      { text: "B. 自己探索并根据兴趣深入研究", learnType: "explore", value: "SelfExplore" },
    ],
  },
  {
    question: "19. 你是否喜欢团队合作学习，还是独自完成任务？",
    options: [
      { text: "A. 喜欢团队合作", learnType: "team", value: "Teamwork" },
      {text: "B. 更喜欢独自完成任务", learnType: "team", value: "Solo" },
    ],
  },
  {
    question: "20. 你更喜欢通过以下哪种方式来理解和记忆新知识？",
    options: [
      { text: "A. 通过不断的实践和实际操作", learnType: "method", value: "Practical" },
      {text: "B. 通过抽象思考和理论推演", learnType: "method", value: "Abstract" },
    ],
  },
];

/************************************************
 * 2. 全局变量/DOM 元素获取
 ************************************************/
let currentQuestionIndex = 0; // 当前题目索引
const totalQuestions = questions.length;

// 用于统计 MBTI 的计数
let countE = 0, countI = 0;
let countS = 0, countN = 0;
let countT = 0, countF = 0;
let countJ = 0, countP = 0;

// 用于统计学习类型（这里做简单统计示例）
let learningRecord = {
  mode: "",
  sensory: "",
  structure: "",
  style: "",
  preference: "",
  environment: "",
  approach: "",
  explore: "",
  team: "",
  method: ""
};

// 获取 DOM 元素
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultText = document.getElementById("result-text");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

/************************************************
 * 3. 初始化函数
 ************************************************/
function startQuiz() {
  // 切换界面：隐藏开始界面，显示题目界面
  startScreen.classList.remove("active");
  questionScreen.classList.add("active");

  currentQuestionIndex = 0;
  showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
  // 获取问题对象
  const q = questions[index];

  // 设置题目标题
  questionTitle.textContent = q.question;

  // 清空旧选项
  optionsContainer.innerHTML = "";

  // 动态渲染选项
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt.text;
    btn.onclick = () => {
      // 点击后记录答案
      handleAnswer(opt);
    };
    optionsContainer.appendChild(btn);
  });
}

/************************************************
 * 4. 答案处理
 ************************************************/
function handleAnswer(option) {
  // 如果是 MBTI 维度
  if (option.mbtiDimension) {
    switch(option.mbtiDimension) {
      case "EI":
        option.value === "E" ? countE++ : countI++;
        break;
      case "SN":
        option.value === "S" ? countS++ : countN++;
        break;
      case "TF":
        option.value === "T" ? countT++ : countF++;
        break;
      case "JP":
        option.value === "J" ? countJ++ : countP++;
        break;
    }
  }

  // 如果是 学习类型 维度
  if (option.learnType) {
    learningRecord[option.learnType] = option.value;
  }

  // 进入下一题或者结束
  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestions) {
    showQuestion(currentQuestionIndex);
  } else {
    // 测试结束，显示结果
    endQuiz();
  }
}

/************************************************
 * 5. 测试结束，计算结果
 ************************************************/
function endQuiz() {
  questionScreen.classList.remove("active");
  resultScreen.classList.add("active");

  // 1) 计算 MBTI
  const mbtiType = calculateMBTI();
  
  // 2) 整理学习类型
  const learnTypeSummary = calculateLearnType();

  // 3) 显示最终结果
  resultText.innerHTML = `
    <p><strong>你的 MBTI 类型：</strong> ${mbtiType}</p>
    <p><strong>你的学习偏好：</strong></p>
    <ul>
      <li>学习方式：${learningRecord.mode}</li>
      <li>信息偏好：${learningRecord.sensory}</li>
      <li>计划风格：${learningRecord.structure}</li>
      <li>学习风格：${learningRecord.style}</li>
      <li>偏好形式：${learningRecord.preference}</li>
      <li>环境偏好：${learningRecord.environment}</li>
      <li>学习路径：${learningRecord.approach}</li>
      <li>探索方式：${learningRecord.explore}</li>
      <li>团队倾向：${learningRecord.team}</li>
      <li>理解方式：${learningRecord.method}</li>
    </ul>
    <p style="margin-top:10px;">根据以上结果，你可以尝试选择更适合自己的学习策略，提升学习效率哦！</p>
  `;
}

/************************************************
 * 6. 计算 MBTI
 ************************************************/
function calculateMBTI() {
  // E / I
  let EI = countE >= countI ? "E" : "I";
  // S / N
  let SN = countS >= countN ? "S" : "N";
  // T / F
  let TF = countT >= countF ? "T" : "F";
  // J / P
  let JP = countJ >= countP ? "J" : "P";

  return EI + SN + TF + JP;
}

/************************************************
 * 7. (可选) 整理学习类型
 *   此处仅演示如何把第二部分的答案简单输出
 *   或者你可以做更多统计分析，给出更详细结论
 ************************************************/
function calculateLearnType() {
  // 这里暂时不做复杂计算，只是简单展示
  // 如果需要更多分析，可以在这里汇总 second part 的答案
  // 返回一个文字描述、或若干结论等
  let summary = "你的学习风格较为综合，可根据上面列出的偏好进行针对性学习。";
  return summary;
}

/************************************************
 * 8. 重新开始
 ************************************************/
function restartQuiz() {
  // 重置所有统计数据
  currentQuestionIndex = 0;
  countE = 0; countI = 0;
  countS = 0; countN = 0;
  countT = 0; countF = 0;
  countJ = 0; countP = 0;

  learningRecord = {
    mode: "",
    sensory: "",
    structure: "",
    style: "",
    preference: "",
    environment: "",
    approach: "",
    explore: "",
    team: "",
    method: ""
  };

  // 切回开始界面
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}

/************************************************
 * 9. 事件监听
 ************************************************/
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);
