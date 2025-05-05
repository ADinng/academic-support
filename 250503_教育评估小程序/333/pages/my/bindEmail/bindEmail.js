// pages/my/bindEmail/bindEmail.js
Page({
  data: {
      email: ''
  },
  handleEmailInput(e) {
      this.setData({
          email: e.detail.value
      });
  },
  cancelBindEmail() {
      wx.navigateBack({});
  },
  confirmBindEmail() {
      // 这里添加绑定邮箱的逻辑，例如调用后端接口
      console.log('输入的邮箱号:', this.data.email);
      wx.navigateBack({});
  }
})