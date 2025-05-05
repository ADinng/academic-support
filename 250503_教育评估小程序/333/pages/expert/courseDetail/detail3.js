/*Page({
  data: {
    detailImage: "", // 课程图片，待后续配置
    webUrl: "", // 课程链接，待后续配置
    description: "" // 课程描述
  },

  onLoad(options) {
    const { imageUrl, description,webUrl } = options;
    this.setData({
      detailImage: imageUrl,
      description: decodeURIComponent(description), // 解码
      webUrl: decodeURIComponent(webUrl) // 解码
    });
  },

  copyUrl() {
    wx.setClipboardData({
      data: this.data.webUrl,
      success: () => {
        wx.showToast({ title: "链接已复制" });
      }
    });
  }
});
*/

Page({
  data: {
      detailImage: "",
      description: ""
  },

  onLoad(options) {
      const { imageUrl, description } = options;
      this.setData({
          detailImage: imageUrl,
          description: decodeURIComponent(description)
      });
  },

  navigateToOtherPage() {
      wx.navigateTo({
          url: `/pages/student/courseDetail/Detail33?imageUrl=${encodeURIComponent(this.data.detailImage)}&description=${encodeURIComponent(this.data.description)}`,
          success: () => {},
          fail: (err) => {
              console.error('跳转失败:', err);
          }
      });
  }
});    