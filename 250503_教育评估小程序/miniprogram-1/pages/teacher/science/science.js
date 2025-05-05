Page({
  data: {
    materials: [
      { title: "《材料导论》", url: "https://www.uooc.net.cn/course/1261149181" },
      { title: "《高等数学》", url: "https://www.uooc.net.cn/course/419548115" },
      { title: "《环境化学》", url: "https://www.uooc.net.cn/course/1762877698" },
      { title: "《生物化学实验》", url: "https://www.uooc.net.cn/course/863861014" },
      { title: "《微生物学》", url: "https://www.uooc.net.cn/course/155632155" },
      { title: "《普通遗传学》", url: "https://www.uooc.net.cn/course/1982074752" }
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