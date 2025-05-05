Page({
  data: {
      imagePath: ""
  },

  onLoad(options) {
      const imagePath = decodeURIComponent(options.imagePath);
      console.log('接收到的图片路径:', imagePath);
      this.setData({
          imagePath: imagePath
      });
  }
});    