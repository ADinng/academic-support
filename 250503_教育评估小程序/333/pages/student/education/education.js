
Page({
  data: {
      materials: [
          {
              title: "《教师口语》",
              imagePath: "/pages/student/education/education1/education1.png"
          },
          {
              title: "《大学语文》",
              imagePath: "/pages/student/education/education2/education2.png"
          },
          {
              title: "《艺术设计鉴赏》",
              imagePath: "/pages/student/education/education3/education3.png"
          },
          {
            title: "《品诗论史》",
            imagePath: "/pages/student/education/education4/education4.png"
        }
      ]
  },

  navigateToeducationDetail: function (e) {
      const index = e.currentTarget.dataset.index;
      console.log('index:', index);
      const educationNumber = index + 1;
      const { title, imagePath } = this.data.materials[index];

      wx.navigateTo({
          url: `/pages/student/education/education${educationNumber}/education${educationNumber}?imagePath=${encodeURIComponent(imagePath)}`,
          success: function () {
              console.log('页面跳转成功');
          },
          fail: function (err) {
              console.log('页面跳转失败', err);
          }
      });
  }
});    