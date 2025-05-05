Page({
  data: {
    receiver: '',
    subject: '',
    content: '',
    progress: 0,
    attachments: [] // 用于存储选择的附件
  },

  handleReceiverInput: function (e) {
    this.setData({
      receiver: e.detail.value
    });
  },

  handleSubjectInput: function (e) {
    this.setData({
      subject: e.detail.value
    });
  },

  handleContentInput: function (e) {
    const content = e.detail.value;
    const progress = (content.length / 20000) * 100;
    this.setData({
      content: content,
      progress: progress
    });
  },

  chooseAttachments: function () {
    wx.chooseMessageFile({
      count: 10, // 最多选择10个附件
      type: 'all', // 可以选择所有类型的文件
      success: (res) => {
        const tempFiles = res.tempFiles;
        this.setData({
          attachments: [...this.data.attachments, ...tempFiles]
        });
      }
    });
  },

  submitHomework: function () {
    const { receiver, subject, content, attachments } = this.data;
    if (!receiver || !subject || !content) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }
    // 模拟保存到文件夹，实际开发中可使用云存储或服务器存储
    const homeworkData = {
      receiver,
      subject,
      content,
      attachments: attachments.map(attachment => ({
        name: attachment.name,
        type: attachment.type,
        size: attachment.size
      }))
    };
    // 这里可以使用 wx.cloud.uploadFile 上传到云存储，或者使用 wx.request 发送到服务器
    console.log('作业提交数据:', homeworkData);
    wx.showToast({
      title: '提交成功',
      icon: 'success'
    });
    // 清空输入框和附件列表
    this.setData({
      receiver: '',
      subject: '',
      content: '',
      progress: 0,
      attachments: []
    });
  }
});