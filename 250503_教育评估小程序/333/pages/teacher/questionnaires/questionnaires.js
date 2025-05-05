Page({
  data: {
    reportContent: "",
    surveyStats: [
      { id: 1, question: "您对本次教学质量满意吗？", score: 88 },
      { id: 2, question: "您认为教学内容是否实用？", score: 82 },
      { id: 3, question: "教师授课态度是否认真？", score: 95 }
    ],
    comments: [
      "教学内容非常实用，建议增加案例分析。",
      "老师讲解很耐心，但语速稍快。",
      "整体满意，希望多一些互动讨论。"
    ]
  },

  onReportChange(e) {
    this.setData({ reportContent: e.detail.value });
  },

  submitReport() {
    const { reportContent } = this.data;
    if (!reportContent.trim()) {
      wx.showToast({
        title: "请输入报告内容",
        icon: "none"
      });
      return;
    }

    // 模拟提交
    wx.showToast({
      title: "报告已提交",
      icon: "success"
    });

    // 可以添加跳转或清空逻辑
  }
});
