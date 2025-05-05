
  Page({
    data: {
        materials: [
            {
                title: "《园林花卉学》",
                imagePath: "/pages/student/agriculture/agriculture1/agriculture1.png"
            },
            {
                title: "《观赏树木学》",
                imagePath: "/pages/student/agriculture/agriculture2/agriculture2.png"
            },
            {
                title: "《食用菌栽培学》",
                imagePath: "/pages/student/agriculture/agriculture3/agriculture3.png"
            },
            {
              title: "《土壤学--生命的摇篮》",
              imagePath: "/pages/student/agriculture/agriculture4/agriculture4.png"
          }
        ]
    },
  
    navigateToCourseDetail: function (e) {
        const index = e.currentTarget.dataset.index;
        console.log('index:', index);
        const courseNumber = index + 1;
        const { title, imagePath } = this.data.materials[index];
  
        wx.navigateTo({
            url: `/pages/student/agriculture/agriculture${courseNumber}/agriculture${courseNumber}?imagePath=${encodeURIComponent(imagePath)}`,
            success: function () {
                console.log('页面跳转成功');
            },
            fail: function (err) {
                console.log('页面跳转失败', err);
            }
        });
    }
  });    