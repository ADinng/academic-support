Page({
  data: {
      feedbackContent: ''
  },
  handleFeedbackInput(e) {
      this.setData({
          feedbackContent: e.detail.value
      });
  },
  cancelFeedback() {
      wx.navigateBack({});
  },
  submitFeedback() {
      // 这里添加提交反馈的逻辑，例如调用后端接口
      console.log('提交的反馈内容:', this.data.feedbackContent);
      wx.navigateBack({});
  }
})