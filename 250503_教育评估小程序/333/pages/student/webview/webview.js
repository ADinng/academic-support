// pages/student/student/webview/webview.js
Page({
  data: {
    url: ''
  },

  onLoad: function(options) {
    // 获取页面传入的 URL 参数
    if (options.url) {
      this.setData({
        url: decodeURIComponent(options.url)  // 解码 URL
      });
    }
  }
});
