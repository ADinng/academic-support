Page({
  data: {
    materials: [
      { title: "《管理经济学》", url: "http://find.nlc.cn/search/showDocDetails?docId=4185030224796870959&dataSource=ucs01&query=%E7%BB%8F%E6%B5%8E%E5%AD%A6" },
      { title: "《计量经济学》", url: "http://find.nlc.cn/search/showDocDetails?docId=9016957676140019689&dataSource=ucs01&query=%E7%BB%8F%E6%B5%8E%E5%AD%A6" },
      { title: "微观经济学", url: "https://www.uooc.net.cn/course/1286840579" }
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