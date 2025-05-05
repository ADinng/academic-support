  Page({
    data: {
        materials: [
            {
                title: "《计算机网络》",
                imagePath: "/pages/student/engineering/engineering1/engineering1.png"
            },
            {
                title: "《C语言程序设计》",
                imagePath: "/pages/student/engineering/engineering2/engineering2.png"
            },
            {
                title: "《嵌入式单片机技术实践》",
                imagePath: "/pages/student/engineering/engineering3/engineering3.png"
            },
            {
              title: "《Java语言程序设计》",
              imagePath: "/pages/student/engineering/engineering4/engineering4.png"
            },
            {
              title: "《数据结构》",
              imagePath: "/pages/student/engineering/engineering5/engineering5.png"
            },
            {
              title: "《数字信号处理》",
              imagePath: "/pages/student/engineering/engineering6/engineering6.png"
            },
            {
              title: "《自动控制原理》",
              imagePath: "/pages/student/engineering/engineering7/engineering7.png"
          }
        ]
    },
  
    navigateToengineeringDetail: function (e) {
        const index = e.currentTarget.dataset.index;
        console.log('index:', index);
        const engineeringNumber = index + 1;
        const { title, imagePath } = this.data.materials[index];
  
        wx.navigateTo({
            url: `/pages/student/engineering/engineering${engineeringNumber}/engineering${engineeringNumber}?imagePath=${encodeURIComponent(imagePath)}`,
            success: function () {
                console.log('页面跳转成功');
            },
            fail: function (err) {
                console.log('页面跳转失败', err);
            }
        });
    }
  });    