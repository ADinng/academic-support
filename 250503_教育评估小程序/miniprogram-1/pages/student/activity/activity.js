Page({
  data: {
    questionType: 'campus', // 默认是校园问卷
    currentQuestionIndex: 0,
    questions: [] // 初始化为空数组
  },

 campusQuestions: [
    { 
      title: "当年你是通过什么渠道了解这所学校的？", 
      options: ["网络", "亲朋介绍", "广告宣传", "其他"],
      answer: "" 
    },
    { 
      title: "为什么报考这所学校或专业？", 
      options: ["专业设置", "师资力量", "就业前景", "其他"],
      answer: "" 
    },
    { 
      title: "你所学专业的人才培养目标是什么，你是怎么知道的？", 
      options: ["通过课程了解", "导师介绍", "专业网站", "其他"],
      answer: "" 
    },
    { 
      title: "你是怎样选择所学课程的，你所学专业的总学分要求是多少？", 
      options: ["根据兴趣选择", "根据导师建议", "根据课程安排", "总学分要求：120学分"],
      answer: "" 
    },
    { 
      title: "你对专业理论知识及专业实践能力掌握得怎样？", 
      options: ["理论知识扎实，实践能力一般", "理论知识一般，实践能力扎实", "理论和实践都比较好", "理论和实践都有待提高"],
      answer: "" 
    },
    { 
      title: "你的专业学习情况如何，是否准备考研？", 
      options: ["学习情况良好，准备考研", "学习情况一般，准备考研", "学习情况良好，不准备考研", "学习情况一般，不准备考研"],
      answer: "" 
    },
    { 
      title: "哪些课程对你的专业成长帮助最大？", 
      options: ["专业核心课程", "实践课程", "选修课程", "其他"],
      answer: "" 
    },
    { 
      title: "你参加过什么科研项目，对你的学术能力培养有什么帮助？", 
      options: ["参加过科研项目，收获较大", "参加过科研项目，收获一般", "没有参加过科研项目", "其他"],
      answer: "" 
    },
    { 
      title: "你听过哪些学术讲座，对你拓宽专业视野、学术视野有什么帮助？", 
      options: ["听过，帮助很大", "听过，帮助一般", "没有听过学术讲座", "其他"],
      answer: "" 
    },
    { 
      title: "除教材外你主要看什么书，在哪些专业类或学术类网站学习过？", 
      options: ["专业书籍", "学术论文", "在线学习平台", "其他"],
      answer: "" 
    },
    { 
      title: "你通过什么方式进入实验室进行自主实验？", 
      options: ["向导师申请", "通过课程安排", "自主申请实验设备", "其他"],
      answer: "" 
    },
    { 
      title: "你在校外哪些企业进行过实习实训，有什么收获？", 
      options: ["在知名企业实习，收获较大", "在中小企业实习，收获一般", "没有实习过", "其他"],
      answer: "" 
    },
    { 
      title: "哪位老师给你留下深刻印象，哪位老师对你的成长帮助最大？", 
      options: ["某位教授", "某位讲师", "没有特别印象的老师", "其他"],
      answer: "" 
    },
    { 
      title: "任课老师在课外给予你哪些指导，老师是怎样进行辅导答疑的？", 
      options: ["课后辅导", "线上辅导", "没有特别指导", "其他"],
      answer: "" 
    },
    { 
      title: "学校对你的学业学习给予了哪些指导与服务？", 
      options: ["学术辅导", "职业规划指导", "心理咨询服务", "其他"],
      answer: "" 
    },
    { 
      title: "你参加过哪些第二课堂活动？", 
      options: ["学术讲座", "社团活动", "志愿服务", "其他"],
      answer: "" 
    },
    { 
      title: "你是否经常锻炼身体，学校组织哪些体育活动让大家参与？", 
      options: ["经常锻炼", "偶尔锻炼", "不锻炼", "学校组织的体育活动"],
      answer: "" 
    },
    { 
      title: "学校有哪些社团活动或课程对提高审美和人文素养方面有帮助？", 
      options: ["文学社团", "艺术课程", "历史讲座", "其他"],
      answer: "" 
    },
    { 
      title: "学校有开设劳动课吗，是否有实际收获或某些劳动技能提高？", 
      options: ["有劳动课，收获较大", "有劳动课，收获一般", "没有劳动课", "其他"],
      answer: "" 
    },
    { 
      title: "学校是如何开展学生职业生涯规划设计和创新创业教育指导的，将来的就业有压力吗，准备如何应对？", 
      options: ["学校有职业规划课程", "学校提供就业指导服务", "就业有一定压力，准备提升能力", "其他"],
      answer: "" 
    },
    { 
      title: "学校是否有专门心理健康机构，是否对全校学生进行心理普查？", 
      options: ["有心理健康机构，进行过普查", "有心理健康机构，没有普查", "没有心理健康机构", "其他"],
      answer: "" 
    },
    { 
      title: "对学校思想政治教育工作和工作落实情况进行评价，你的评价有哪些建议？", 
      options: ["政治教育做得很好", "政治教育一般", "政治教育需改进", "其他"],
      answer: "" 
    },
  ],

  psychologyQuestions: [{ 
    title: "你是否经常感到压力过大？", 
    options: ["是", "否"], 
    answer: "" 
  },
  { 
    title: "你最近是否感到情绪难以控制？", 
    options: ["有", "没有"], 
    answer: "" 
  },
  { 
    title: "你是否能够及时调整情绪？", 
    options: ["是", "否"], 
    answer: "" 
  },
  { 
    title: "你是否感到焦虑或抑郁？", 
    options: ["是", "否"], 
    answer: "" 
  },
  { 
    title: "你是否能够顺利与他人沟通和交流？", 
    options: ["是", "否"], 
    answer: "" 
  },
  { 
    title: "你是否有过心理咨询或寻求心理帮助的经历？", 
    options: ["有", "没有"], 
    answer: "" 
  },
  { 
    title: "你是否对未来感到迷茫？", 
    options: ["是", "否"], 
    answer: "" 
  },
  { 
    title: "你是否有过严重的情绪波动或心理困扰？", 
    options: ["有", "没有"], 
    answer: "" 
  },
  { 
    title: "你最近是否心理郁闷暴躁？", 
    options: ["有", "没有"], 
    answer: "" 
  },
  { 
    title: "你是否有寻求过专业心理辅导的想法？", 
    options: ["有", "没有"], 
    answer: "" 
  }
],

  // 切换问卷类型
  switchType: function (e) {
    const type = e.target.dataset.type;
    let questions = [];

    if (type === 'campus') {
      questions = this.campusQuestions;
    } else if (type === 'psychology') {
      questions = this.psychologyQuestions;
    }

    this.setData({
      questionType: type,
      currentQuestionIndex: 0,
      questions: questions // 更新问题数组
    });
  },

  // 下一题
  nextQuestion: function () {
    this.setData({
      currentQuestionIndex: this.data.currentQuestionIndex + 1
    });
  },

  // 上一题
  prevQuestion: function () {
    this.setData({
      currentQuestionIndex: this.data.currentQuestionIndex - 1
    });
  },

  // 处理选择答案
  onAnswerChange: function (e) {
    const answer = e.detail.value;
    const { currentQuestionIndex, questionType } = this.data;
    if (questionType === "campus") {
      this.campusQuestions[currentQuestionIndex].answer = answer;
    } else {
      this.psychologyQuestions[currentQuestionIndex].answer = answer;
    }
  },

  // 提交问卷
  submitSurvey: function () {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    });
  },

  // 页面加载时初始化数据
  onLoad: function () {
    this.setData({
      questions: this.campusQuestions // 默认加载校园问卷
    });
  }
});
