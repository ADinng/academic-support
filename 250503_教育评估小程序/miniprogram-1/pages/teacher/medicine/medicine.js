Page({
  data: {
    materials: [
      { title: "《漫话传染病》", url: "https://www.uooc.net.cn/course/370222735" },
      { title: "《药剂学》", url: "https://www.uooc.net.cn/course/1684272402" }
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