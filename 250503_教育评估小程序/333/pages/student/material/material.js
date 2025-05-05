Page({
  data: {
    subjects: [
      { name: "经济学", path: "/pages/student/economics/economics" },
      { name: "教育学", path: "/pages/student/education/education" },
      { name: "文学", path: "/pages/student/literature/literature" },
      { name: "理学", path: "/pages/student/science/science" },
      { name: "工学", path: "/pages/student/engineering/engineering" },
      { name: "农学", path: "/pages/student/agriculture/agriculture" },
      { name: "医学", path: "/pages/student/medicine/medicine" },
      { name: "管理学", path: "/pages/student/management/management" }
    ]
  },

  // 跳转到具体学科页面
  goToSubjectPage: function(e) {
    const path = e.currentTarget.dataset.path;
    if (path) {
      wx.navigateTo({
        url: path,
        success: function(res) {
          console.log("成功跳转到学科页面");
        },
        fail: function(err) {
          console.error("跳转失败", err);
        }
      });
    }
  }
});