Page({
  data: {
    suggestionText: '',  // 存储用户输入的建议
  },

  // 获取用户输入的建议
  onInput(e) {
    this.setData({
      suggestionText: e.detail.value,
    });
  },

  // 提交建议
  submitSuggestion() {
    const { suggestionText } = this.data;

    // 校验输入是否为空
    if (suggestionText.trim() === '') {
      wx.showToast({
        title: '请输入建议内容',
        icon: 'none',
      });
      return;
    }

    // 提交建议成功后，显示提示
    wx.showToast({
      title: '感谢您的反馈！',
      icon: 'success',
    });

    // 清空输入框内容
    this.setData({
      suggestionText: '',
    });

    // 可以在此处调用API，将用户的建议保存到数据库或发送给后台
    // wx.request({
    //   url: 'https://example.com/api/suggestions', // 替换为实际的API地址
    //   method: 'POST',
    //   data: {
    //     suggestion: suggestionText,
    //   },
    //   success(res) {
    //     // 处理成功后的回调
    //   },
    //   fail(error) {
    //     // 处理失败后的回调
    //   },
    // });
  },
});
