Page({
  data: {
    materials: [
      { title: "《计算机网络》", url: "https://www.uooc.net.cn/course/1656166047" },
      { title: "《C语言程序设计》", url: "https://www.uooc.net.cn/course/824653525" },
      { title: "《嵌入式单片机技术实践》", url: "https://www.uooc.net.cn/course/1250249013" },
      { title: "《Java语言程序设计》", url: "https://www.uooc.net.cn/course/1044723515" },
      { title: "《数据结构》", url: "https://www.uooc.net.cn/course/435276404" },
      { title: "《数字信号处理》", url: "https://www.uooc.net.cn/course/796934790" },
      { title: "《自动控制原理》", url: "https://www.uooc.net.cn/course/786859042" }
    ]
  },

  // 复制链接
  copyUrl: function(e) {
    const url = e.currentTarget.dataset.url;
    wx.setClipboardData({
      data: url,
      success: () => {
        wx.showToast({ title: "链接已复制" });
      }
    });
  }
});