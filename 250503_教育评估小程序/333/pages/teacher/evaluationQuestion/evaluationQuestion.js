Page({
  data: {
    questions: [
      { question: "上课态度如何？" },
      { question: "上课板书是否清晰？" },
      { question: "讲解内容是否易懂？" },
      { question: "是否按时上下课？" },
      { question: "作业批改是否认真？" },
      { question: "是否关注学生反馈？" },
      { question: "教学方法是否多样？" },
      { question: "是否提供学习资源？" },
      { question: "课堂氛围是否活跃？" },
      { question: "是否帮助学生解决问题？" }
    ],
    answers: [],
    selectedTeacher: null
  },

  onLoad(options) {
    const { selectedTeacherIndex } = options;
    const teachers = [
      { name: '张三', course: '数学' },
      { name: '李四', course: '物理' },
      { name: '王五', course: '化学' },
      { name: '赵六', course: '生物' },
      { name: '孙七', course: '历史' },
      { name: '周八', course: '地理' },
      { name: '吴九', course: '政治' },
      { name: '郑十', course: '英语' },
      { name: '王十一', course: '语文' },
      { name: '李十二', course: '音乐' }
    ];
    const selectedTeacher = teachers[selectedTeacherIndex];
    this.setData({
      selectedTeacher: selectedTeacher
    });
  },

  selectAnswer(e) {
    const { index } = e.currentTarget.dataset;
    const { answers } = this.data;
    answers[index] = e.detail.value;
    this.setData({
      answers: answers
    });
  },

  submitAnswers() {
    const { answers, selectedTeacher } = this.data;
    if (answers.every(answer => answer)) {
      wx.showToast({
        title: '提交成功',
        icon: 'success'
      });
      this.setData({
        answers: []
      });
    } else {
      wx.showToast({
        title: '请回答所有问题',
        icon: 'none'
      });
    }
  }
});