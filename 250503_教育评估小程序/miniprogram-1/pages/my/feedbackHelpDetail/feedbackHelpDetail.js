Page({
  callOnlineService() {
      const phoneNumber = '19007126091';
      wx.makePhoneCall({
          phoneNumber: phoneNumber,
          success: () => {
              console.log('拨打电话成功');
          },
          fail: (err) => {
              console.error('拨打电话失败', err);
          }
      });
  },
  gotoUserFeedback() {
      wx.navigateTo({
          url: '/pages/my/userFeedback/userFeedback'
      });
  }
})