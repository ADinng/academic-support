// pages/my/bindPhone/bindPhone.js
Page({
  data: {
      phoneNumber: ''
  },
  handlePhoneInput(e) {
      this.setData({
          phoneNumber: e.detail.value
      });
  },
  cancelBindPhone() {
      wx.navigateBack({});
  },
  confirmBindPhone() {
      // 这里添加绑定手机号的逻辑，例如调用后端接口
      console.log('输入的手机号:', this.data.phoneNumber);
      wx.navigateBack({});
  }
})