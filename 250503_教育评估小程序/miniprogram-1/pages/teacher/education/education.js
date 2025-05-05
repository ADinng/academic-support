Page({
  data: {
    materials: [
      { title: "《教师口语》", url: "https://www.uooc.net.cn/course/927639306" },
      { title: "《大学语文》", url: "https://www.uooc.net.cn/course/1398781064" },
      { title: "《艺术设计鉴赏》", url: "https://www.uooc.net.cn/course/779921283" },
      { title: "《品诗论史》", url: "https://www.uooc.net.cn/course/2144634828" }
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