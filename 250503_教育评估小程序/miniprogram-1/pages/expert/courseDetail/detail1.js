/*Page({
  data: {
      detailImage: "", 
      webUrl: "", 
      description: "" 
  },

  onLoad(options) {
      const { imageUrl, description, webUrl } = options;
      this.setData({
          detailImage: imageUrl,
          description: decodeURIComponent(description), 
          webUrl: decodeURIComponent(webUrl) 
      });
  },

  navigateToDetailPage() {
      wx.navigateTo({
          url: `/pages/student/courseDetail/Detail11?imageUrl=${encodeURIComponent(this.data.detailImage)}&description=${encodeURIComponent(this.data.description)}`,
          success: () => {},
          fail: (err) => {
              console.error('跳转失败:', err);
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
          url: `/pages/student/courseDetail/Detail11?imageUrl=${encodeURIComponent(this.data.detailImage)}&description=${encodeURIComponent(this.data.description)}`,
          success: () => {},
          fail: (err) => {
              console.error('跳转失败:', err);
          }
      });
  }
});    

