Page({
  data: {
      showQQInput: false,
      showWechatInput: false,
      qqNumber: '',
      wechatId: '',
      selectedSocial: ''
  },
  showQQInput() {
      this.setData({
          showQQInput: true,
          showWechatInput: false,
          selectedSocial: 'qq'
      });
  },
  showWechatInput() {
      this.setData({
          showWechatInput: true,
          showQQInput: false,
          selectedSocial: 'wechat'
      });
  },
  handleQQInput(e) {
      this.setData({
          qqNumber: e.detail.value
      });
  },
  handleWechatInput(e) {
      this.setData({
          wechatId: e.detail.value
      });
  },
  cancelBindSocial() {
      wx.navigateBack({});
  },
  confirmBindSocial() {
      if (this.data.showQQInput) {
          // 这里添加绑定 QQ 号的逻辑，例如调用后端接口
          console.log('输入的 QQ 号:', this.data.qqNumber);
      } else if (this.data.showWechatInput) {
          // 这里添加绑定微信号的逻辑，例如调用后端接口
          console.log('输入的微信号:', this.data.wechatId);
      }
      wx.navigateBack({});
  }
})