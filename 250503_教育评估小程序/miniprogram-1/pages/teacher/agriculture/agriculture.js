Page({
  data: {
    materials: [
      { title: "《园林花卉学》", url: "https://www.uooc.net.cn/course/330726335" },
      { title: "《观赏树木学》", url: "https://www.uooc.net.cn/course/1562354796" },
      { title: "《食用菌栽培学》", url: "https://www.uooc.net.cn/course/431653337" },
      { title: "《土壤学--生命的摇篮》", url: "https://www.uooc.net.cn/course/473091100" }
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