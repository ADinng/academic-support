Page({
  data: {
    mode: 'review',  // 默认是背题模式
    currentQuestion: 0,
    totalQuestions: 28,
    questions: [
      { text: "什么是新一轮审核评估？", answer: "新一轮审核评估是上轮审核评估的延续、改进与升级" },
      { text: "为什么要开展新一轮审核评估？", answer: "全面落实中央教育评价改革任务" },
      { text: "新一轮本科教育教学审核评估的指导思想是什么？", answer: "以习近平新时代中国特色社会主义思想为指导" },
      { text: "审核评估的基本原则有哪些？", answer: "立德树人、推进改革、分类指导、问题导向、方法创新" },
      { text: "新一轮审核评估十六字方针是什么？", answer: "以评促建、以评促改、以评促管、以评促强" },
      { text: "新一轮审核评估的工作目标是什么？", answer: "把‘一根本、两突出、三强化、五个度’作为共同愿景和价值追求" },
      { text: "新一轮审核评估的程序是什么？", answer: "评估申请、学校自评、专家评审、反馈结论、限期整改、督导复查" },
      { text: "我校选择哪一类审核评估指标体系？", answer: "第二类第二种" },
      { text: "第二类审核评估指标体系中有哪些重要指标？", answer: "办学方向与本科地位、培养过程、教学资源与利用等" },
      { text: "新一轮审核评估中的‘1+3+3’报告是什么？", answer: "自评报告为主体，包含多个过程性与结果性报告" },
      { text: "新一轮审核评估专家如何开展评审工作？", answer: "线上评估与入校评估结合" },
      { text: "专家组线上线下考察评估时采用的方式是什么？", answer: "深度访谈、听课看课、考察走访、文卷审阅" },
      { text: "立德树人是什么？", answer: "全员育人、全程育人、全方位育人" },
      { text: "‘三全育人’的综合改革目标是什么？", answer: "全面提高人才培养能力，突出重点，建立规范" },
      { text: "‘四新’建设指的是什么？", answer: "新工科、新医科、新农科、新文科建设" },
      { text: "‘五育并举’是指什么？", answer: "德育、智育、体育、美育、劳动教育并重" },
      { text: "‘十大育人体系’有哪些内容？", answer: "课程育人、科研育人、实践育人等" },
      { text: "‘以本为本’是什么意思？", answer: "坚持本科教育为根本" },
      { text: "‘四个回归’的要求是什么？", answer: "回归常识、回归本分、回归初心、回归梦想" },
      { text: "OBE教育理念是什么意思？", answer: "成果导向教育，强调学生的学习成果" },
      { text: "‘四有’好老师指的是什么？", answer: "有理想信念、有道德情操、有扎实学识、有仁爱之心" },
      { text: "‘四个‘引路人’是什么？", answer: "做学生品格的引路人、知识的引路人等" },
      { text: "质量文化‘五自’指的是什么？", answer: "自觉、自省、自律、自查、自纠" },
      { text: "学生中心、产出导向、持续改进的理念是什么？", answer: "以学生为中心、以成果为导向、持续改进" },
      { text: "学校办学历程是什么？", answer: "从1943年建校开始，至今已有几十年历史" },
      { text: "学校办学定位是什么？", answer: "应用型、地方性、综合性" },
      { text: "学校的校训是什么？", answer: "严以治学，诚以立身" },
      { text: "学校的学科发展思路是什么？", answer: "建强工科、厚实农师、发展医科、多元协同" },
      // 添加剩余问题
    ]
  },

   // 点击下一题按钮时调用
   nextQuestion: function() {
    const { currentQuestion, totalQuestions } = this.data;
    
    if (currentQuestion < totalQuestions - 1) {
      this.setData({
        currentQuestion: currentQuestion + 1 // 切换到下一题
      });
    }
  },

  // 点击上一题按钮时调用
  prevQuestion: function() {
    const { currentQuestion } = this.data;
    
    if (currentQuestion > 0) {
      this.setData({
        currentQuestion: currentQuestion - 1 // 切换到上一题
      });
    }
  }
});