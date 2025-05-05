
  Page({
    data: {
        materials: [
            {
                title: "《货币金融学——生活中的金融学》",
                imagePath: "/pages/student/management/management1/management1.png"
            },
            {
                title: "《会计学》",
                imagePath: "/pages/student/management/management2/management2.png"
            },
            {
                title: "《统计学》",
                imagePath: "/pages/student/management/management3/management3.png"
            }
        ]
    },
  
    navigateTomanagementDetail: function (e) {
        const index = e.currentTarget.dataset.index;
        console.log('index:', index);
        const managementNumber = index + 1;
        const { title, imagePath } = this.data.materials[index];
  
        wx.navigateTo({
            url: `/pages/student/management/management${managementNumber}/management${managementNumber}?imagePath=${encodeURIComponent(imagePath)}`,
            success: function () {
                console.log('页面跳转成功');
            },
            fail: function (err) {
                console.log('页面跳转失败', err);
            }
        });
    }
  });    