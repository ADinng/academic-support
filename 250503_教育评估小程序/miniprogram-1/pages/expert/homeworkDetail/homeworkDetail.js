Page({
  data: {
      homework: null
  },

  onLoad: function (options) {
      const app = getApp();
      const homework = app.globalData.currentHomework;

      if (!homework) {
          wx.showToast({
              title: '作业数据加载失败',
              icon: 'none'
          });
          wx.navigateBack();
          return;
      }

      this.setData({
          homework: homework
      });
  }
});