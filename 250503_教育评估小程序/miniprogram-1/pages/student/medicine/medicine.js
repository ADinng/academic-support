
  Page({
    data: {
        materials: [
            {
                title: "《漫话传染病》",
                imagePath: "/pages/student/medicine/medicine1/medicine1.png"
            },
            {
                title: "《药剂学》",
                imagePath: "/pages/student/medicine/medicine2/medicine2.png"
            }
        ]
    },
  
    navigateTomedicineDetail: function (e) {
        const index = e.currentTarget.dataset.index;
        console.log('index:', index);
        const medicineNumber = index + 1;
        const { title, imagePath } = this.data.materials[index];
  
        wx.navigateTo({
            url: `/pages/student/medicine/medicine${medicineNumber}/medicine${medicineNumber}?imagePath=${encodeURIComponent(imagePath)}`,
            success: function () {
                console.log('页面跳转成功');
            },
            fail: function (err) {
                console.log('页面跳转失败', err);
            }
        });
    }
  });    