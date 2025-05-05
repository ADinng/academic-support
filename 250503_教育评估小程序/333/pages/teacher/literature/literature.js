Page({
  data: {
    materials: [
      { title: "《孔子的智慧》", url: "https://www.uooc.net.cn/course/822143749" },
      { title: "《孝道与人生》", url: "https://www.uooc.net.cn/course/150737798" },
      { title: "《中国文化概论》", url: "https://www.uooc.net.cn/course/1969553832" }
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