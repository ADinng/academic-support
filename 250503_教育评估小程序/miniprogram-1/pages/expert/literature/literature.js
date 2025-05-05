  Page({
    data: {
        materials: [
            {
                title: "《孔子的智慧》",
                imagePath: "/pages/student/literature/literature1/literature1.png"
            },
            {
                title: "《孝道与人生》",
                imagePath: "/pages/student/literature/literature2/literature2.png"
            },
            {
                title: "《中国文化概论》",
                imagePath: "/pages/student/literature/literature3/literature3.png"
            }
        ]
    },
  
    navigateToliteratureDetail: function (e) {
        const index = e.currentTarget.dataset.index;
        console.log('index:', index);
        const literatureNumber = index + 1;
        const { title, imagePath } = this.data.materials[index];
  
        wx.navigateTo({
            url: `/pages/student/literature/literature${literatureNumber}/literature${literatureNumber}?imagePath=${encodeURIComponent(imagePath)}`,
            success: function () {
                console.log('页面跳转成功');
            },
            fail: function (err) {
                console.log('页面跳转失败', err);
            }
        });
    }
  });    