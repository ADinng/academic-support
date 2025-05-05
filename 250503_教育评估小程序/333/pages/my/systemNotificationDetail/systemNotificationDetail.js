// pages/my/systemNotificationDetail/systemNotificationDetail.js
Page({
  data: {
      showVersionUpdate: false,
      showBugFix: false,
      versionUpdateContent: '本次版本更新主要包括以下内容：\n1. 优化了界面显示效果，提升了用户体验。\n2. 增加了新的功能模块，方便用户操作。\n3. 修复了一些已知的小问题，提高了系统稳定性。',
      bugFixContent: '本次系统 bug 修复主要解决了以下问题：\n1. 修复了登录时偶尔出现的闪退问题。\n2. 解决了部分用户反馈的数据显示异常问题。\n3. 优化了网络请求逻辑，减少了卡顿现象。'
  },
  toggleVersionUpdate() {
      this.setData({
          showVersionUpdate: !this.data.showVersionUpdate
      });
  },
  toggleBugFix() {
      this.setData({
          showBugFix: !this.data.showBugFix
      });
  }
})