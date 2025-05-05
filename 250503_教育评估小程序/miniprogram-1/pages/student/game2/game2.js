Page({
  data: {
    countdown: 60, // 每题初始倒计时60秒
    currentLevel: 1, // 当前关卡
    questions: [], // 所有题目
    currentQuestion: {}, // 当前题目
    feedbackMessage: '', // 答题反馈信息
    feedbackColor: '', // 答题反馈颜色
    correctAnswers: 0, // 正确答案数
    score: 0, // 当前分数
    timer: null, // 定时器引用
    answered: false, // 是否答题
  },

  onLoad() {
    // 模拟题目数据
    const questions = [
      {
        text: "什么是新一轮审核评估？",
        options: ["上一轮审核评估", "新一轮审核评估", "审核评估类型"],
        answer: "新一轮审核评估"
      },
      {
        text: "为什么要开展新一轮审核评估？",
        options: ["落实中央教育评价改革任务", "提高学校声誉", "规范教育体系"],
        answer: "落实中央教育评价改革任务"
      },
      {
        text: "新一轮本科教育教学审核评估的指导思想是什么？",
        options: ["习近平新时代中国特色社会主义思想", "马克思主义思想", "教育现代化"],
        answer: "习近平新时代中国特色社会主义思想"
      },
      {
        text: "审核评估的基本原则有哪些？",
        options: ["立德树人、推进改革、分类指导", "民主与自由、平等与公正", "全球化与本土化"],
        answer: "立德树人、推进改革、分类指导"
      },
      {
        text: "新一轮审核评估十六字方针是什么？",
        options: ["以评促建、以评促改、以评促管、以评促强", "严格标准、循序渐进、合作共赢", "质量为先、创新驱动、全面发展"],
        answer: "以评促建、以评促改、以评促管、以评促强"
      },
      {
        text: "新一轮审核评估的工作目标是什么？",
        options: ["把‘一根本、两突出、三强化、五个度’作为共同愿景和价值追求", "提高学校的国际影响力", "推动教育资源的均衡配置"],
        answer: "把‘一根本、两突出、三强化、五个度’作为共同愿景和价值追求"
      },
      {
        text: "新一轮审核评估的程序是什么？",
        options: ["评估申请、学校自评、专家评审", "专家调研、社会评估、反馈整改", "评估申请、学校自评、专家评审、反馈结论、限期整改、督导复查"],
        answer: "评估申请、学校自评、专家评审、反馈结论、限期整改、督导复查"
      },
      {
        text: "我校选择哪一类审核评估指标体系？",
        options: ["第一类第一种", "第二类第二种", "第三类第三种"],
        answer: "第二类第二种"
      },
      {
        text: "第二类审核评估指标体系中有哪些重要指标？",
        options: ["办学方向与本科地位、培养过程、教学资源与利用等", "学生就业情况、教师科研成果、学校设施建设等", "国际化办学、学科评估、社会服务能力等"],
        answer: "办学方向与本科地位、培养过程、教学资源与利用等"
      },
      {
        text: "新一轮审核评估中的‘1+3+3’报告是什么？",
        options: ["自评报告为主体，包含多个过程性与结果性报告", "多次评估反馈报告", "综合质量提升报告"],
        answer: "自评报告为主体，包含多个过程性与结果性报告"
      },
      {
        text: "新一轮审核评估专家如何开展评审工作？",
        options: ["线上评估与入校评估结合", "专家在线问卷评估", "专家现场评审"],
        answer: "线上评估与入校评估结合"
      },
      {
        text: "专家组线上线下考察评估时采用的方式是什么？",
        options: ["深度访谈、听课看课、考察走访、文卷审阅", "问卷调查、数据分析、焦点小组讨论", "课堂观察、校外考察、访谈调研"],
        answer: "深度访谈、听课看课、考察走访、文卷审阅"
      },
      {
        text: "立德树人是什么？",
        options: ["全员育人、全程育人、全方位育人", "培养技能、注重实践、全员参与", "思想教育与心理辅导相结合"],
        answer: "全员育人、全程育人、全方位育人"
      },
      {
        text: "‘三全育人’的综合改革目标是什么？",
        options: ["全面提高人才培养能力，突出重点，建立规范", "提升教学质量，创新教育方法", "提高社会实践与学生自主学习能力"],
        answer: "全面提高人才培养能力，突出重点，建立规范"
      },
      {
        text: "‘四新’建设指的是什么？",
        options: ["新工科、新医科、新农科、新文科建设", "新技术、新政策、新学科、新研究", "新理念、新课程、新教师、新设施"],
        answer: "新工科、新医科、新农科、新文科建设"
      },
      {
        text: "‘五育并举’是指什么？",
        options: ["德育、智育、体育、美育、劳动教育并重", "学校文化、家庭教育、社会实践、学生自主学习、教师素质", "精神文化、知识教育、劳动技能、体育健康、创新能力"],
        answer: "德育、智育、体育、美育、劳动教育并重"
      },
      {
        text: "‘十大育人体系’有哪些内容？",
        options: ["课程育人、科研育人、实践育人等", "理论教育、技能训练、创新实践、社会服务", "多元化课程、职业素养、思想政治、身心健康"],
        answer: "课程育人、科研育人、实践育人等"
      },
      {
        text: "‘以本为本’是什么意思？",
        options: ["坚持本科教育为根本", "强调专业化发展", "注重综合素质教育"],
        answer: "坚持本科教育为根本"
      },
      {
        text: "‘四个回归’的要求是什么？",
        options: ["回归常识、回归本分、回归初心、回归梦想", "回归本质、回归传统、回归现实、回归求知", "回归理论、回归课堂、回归学术、回归教育"],
        answer: "回归常识、回归本分、回归初心、回归梦想"
      },
      {
        text: "OBE教育理念是什么意思？",
        options: ["成果导向教育，强调学生的学习成果", "过程导向教育，强调教学方法", "全面素质教育，注重理论与实践结合"],
        answer: "成果导向教育，强调学生的学习成果"
      },
      {
        text: "‘四有’好老师指的是什么？",
        options: ["有理想信念、有道德情操、有扎实学识、有仁爱之心", "有教育责任、有教学技巧、有管理能力、有创新精神", "有情感、有教育经验、有教学方法、有服务意识"],
        answer: "有理想信念、有道德情操、有扎实学识、有仁爱之心"
      },
      {
        text: "‘四个‘引路人’是什么？",
        options: ["做学生品格的引路人、知识的引路人等", "做课堂知识的引路人、生活技能的引路人", "做学习方法的引路人、社会实践的引路人"],
        answer: "做学生品格的引路人、知识的引路人等"
      },
      {
        text: "质量文化‘五自’指的是什么？",
        options: ["自觉、自省、自律、自查、自纠", "自我控制、自我教育、自我激励、自我成长、自我管理", "自我反思、自我约束、自我评估、自我改进"],
        answer: "自觉、自省、自律、自查、自纠"
      },
      {
        text: "学生中心、产出导向、持续改进的理念是什么？",
        options: ["以学生为中心、以成果为导向、持续改进", "以教师为核心、以质量为标准、持续创新", "以课程为主导、以发展为目标、持续优化"],
        answer: "以学生为中心、以成果为导向、持续改进"
      },
      {
        text: "学校办学历程是什么？",
        options: ["从1943年建校开始，至今已有几十年历史", "从1950年建校开始，至今已有70年历史", "从1980年建校开始，至今已有40年历史"],
        answer: "从1943年建校开始，至今已有几十年历史"
      },
      {
        text: "学校办学定位是什么？",
        options: ["应用型、地方性、综合性", "理论型、国际化、综合性", "技术型、地方性、学科齐全"],
        answer: "应用型、地方性、综合性"
      },
      {
        text: "学校的校训是什么？",
        options: ["严以治学，诚以立身", "求真务实，创新进取", "明德笃学，厚德载物"],
        answer: "严以治学，诚以立身"
      },
      {
        text: "学校的学科发展思路是什么？",
        options: ["建强工科、厚实农师、发展医科、多元协同", "强化基础学科、推动交叉学科、创新应用学科", "注重技术、培养实用型人才、优化课程设置"],
        answer: "建强工科、厚实农师、发展医科、多元协同"
      }
    ];

    this.setData({
      questions: questions,
      currentQuestion: questions[0],  // 初始显示第一题
    });

    // 开始倒计时
    this.startCountdown();
  },

  // 启动倒计时
  startCountdown() {
    const timer = setInterval(() => {
      let countdown = this.data.countdown;
      if (countdown > 0) {
        countdown--;
        this.setData({ countdown });
      } else {
        clearInterval(timer);  // 倒计时结束时停止计时器
        this.setData({ answered: true }); // 标记为已经结束
        this.nextQuestion(); // 结束当前题目并进入下一题
      }
    }, 1000);

    this.setData({ timer });
  },

  // 答题
  answerQuestion(e) {
    if (this.data.answered) return; // 如果已经答过题就不再响应点击

    const selectedAnswer = e.currentTarget.dataset.item;
    const currentQuestion = this.data.currentQuestion;

    if (selectedAnswer === currentQuestion.answer) {
      this.setData({
        feedbackMessage: '答对了！',
        feedbackColor: 'blue',
        score: this.data.score + 10  // 每答对加10分
      });
      this.data.correctAnswers++;
    } else {
      this.setData({
        feedbackMessage: '答错了！',
        feedbackColor: 'red'
      });
    }
    
    this.setData({ answered: true }); // 标记为已答题
  },

  // 下一题
  nextQuestion() {
    let nextLevel = this.data.currentLevel + 1;
    if (nextLevel <= this.data.questions.length) {
      this.setData({
        currentLevel: nextLevel,
        currentQuestion: this.data.questions[nextLevel - 1],
        feedbackMessage: '',
        feedbackColor: '', // 清除反馈颜色
        countdown: 60, // 重置倒计时为60秒
        answered: false, // 重置答题标记
      });

      // 启动下一题的倒计时
      this.startCountdown();
    } else {
      this.setData({ feedbackMessage: '恭喜完成所有题目！' });
    }
  },

  // 上一题
  previousQuestion() {
    let previousLevel = this.data.currentLevel - 1;
    if (previousLevel > 0) {
      this.setData({
        currentLevel: previousLevel,
        currentQuestion: this.data.questions[previousLevel - 1],
        feedbackMessage: '',
        feedbackColor: '', // 清除反馈颜色
        countdown: 60, // 重置倒计时为60秒
        answered: false, // 重置答题标记
      });

      // 启动上一题的倒计时
      this.startCountdown();
    }
  }
});
