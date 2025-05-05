Page({
  data: {
      materials: [
          {
              title: "《管理经济学》",
              imagePath: "/pages/student/economics/economics1/economics1.png"
          },
          {
              title: "《宏观经济学》",
              imagePath: "/pages/student/economics/economics2/economics2.png"
          },
          {
              title: "《微观经济学》",
              imagePath: "/pages/student/economics/economics3/economics3.png"
          }
      ]
  },

  navigateToCourseDetail: function (e) {
      const index = e.currentTarget.dataset.index;
      console.log('index:', index);
      const courseNumber = index + 1;
      const { title, imagePath } = this.data.materials[index];

      wx.navigateTo({
          url: `/pages/student/economics/economics${courseNumber}/economics${courseNumber}?imagePath=${encodeURIComponent(imagePath)}`,
          success: function () {
              console.log('页面跳转成功');
          },
          fail: function (err) {
              console.log('页面跳转失败', err);
          }
      });
  }
});    