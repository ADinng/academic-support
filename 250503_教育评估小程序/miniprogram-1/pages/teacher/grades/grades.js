Page({
  data: {
    meeting: {
      topic: '本科教学评估汇报',
      time: '2025年4月29日 14:00'
    },
    reportContent: ''
  },

  // 输入时更新数据
  onInputChange(e) {
    this.setData({
      reportContent: e.detail.value
    });
  },

  // 提交报告
  submitReport() {
    if (!this.data.reportContent.trim()) {
      wx.showToast({
        title: '请填写报告内容',
        icon: 'none'
      });
      return;
    }

    // 模拟提交（可换为后端请求）
    console.log('提交内容：', this.data.reportContent);
    wx.showToast({
      title: '提交成功',
      icon: 'success'
    });
  }
});
