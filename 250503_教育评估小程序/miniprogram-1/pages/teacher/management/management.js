Page({
  data: {
    materials: [
      { title: "《货币金融学——生活中的金融学》", url: "https://www.uooc.net.cn/course/360389474" },
      { title: "《会计学》", url: "https://www.uooc.net.cn/course/699192076" },
      { title: "《统计学》", url: "https://www.uooc.net.cn/course/1203564493" },
      { title: "《宏观经济学》", url: "https://www.uooc.net.cn/course/2074802661" }
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