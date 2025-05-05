// pages/my/changePassword/changePassword.js
Page({
  data: {
      newPassword: ''
  },
  handlePasswordInput(e) {
      this.setData({
          newPassword: e.detail.value
      });
  },
  cancelChangePassword() {
      wx.navigateBack({});
  },
  confirmChangePassword() {
      // 这里添加修改密码的逻辑，例如调用后端接口
      console.log('新密码:', this.data.newPassword);
      wx.navigateBack({});
  }
})