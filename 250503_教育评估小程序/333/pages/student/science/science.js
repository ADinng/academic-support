
Page({
  data: {
      materials: [
          {
              title: "《材料导论》",
              imagePath: "/pages/student/science/science1/science1.png"
          },
          {
              title: "《高等数学》",
              imagePath: "/pages/student/science/science2/science2.png"
          },
          {
              title: "《环境化学》",
              imagePath: "/pages/student/science/science3/science3.png"
          },
          {
            title: "《生物化学实验》",
            imagePath: "/pages/student/science/science4/science4.png"
        }
      ]
  },

  navigateToscienceDetail: function (e) {
      const index = e.currentTarget.dataset.index;
      console.log('index:', index);
      const scienceNumber = index + 1;
      const { title, imagePath } = this.data.materials[index];

      wx.navigateTo({
          url: `/pages/student/science/science${scienceNumber}/science${scienceNumber}?imagePath=${encodeURIComponent(imagePath)}`,
          success: function () {
              console.log('页面跳转成功');
          },
          fail: function (err) {
              console.log('页面跳转失败', err);
          }
      });
  }
});    