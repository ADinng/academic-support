Page({
  gotoChangePassword() {
      wx.navigateTo({
          url: '/pages/my/changePassword/changePassword'
      });
  },
  gotoBindPhone() {
      wx.navigateTo({
          url: '/pages/my/bindPhone/bindPhone'
      });
  },
  gotoBindEmail() {
      wx.navigateTo({
          url: '/pages/my/bindEmail/bindEmail'
      });
  },
  gotoBindSocial() {
      wx.navigateTo({
          url: '/pages/my/bindSocial/bindSocial'
      });
  }
})