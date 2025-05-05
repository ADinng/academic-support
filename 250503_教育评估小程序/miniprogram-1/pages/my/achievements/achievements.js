Page({
  data: {
      cet4Status: '已通过',
      cet6Status: '未通过',
      mandarinLevel: '二级甲等',
      ncreLevel: '二级'
  },
  onLoad() {
      // 这里可以添加从后端获取数据的逻辑，例如：
      // wx.request({
      //     url: 'your_api_url',
      //     success: (res) => {
      //         this.setData({
      //             cet4Status: res.data.cet4Status,
      //             cet6Status: res.data.cet6Status,
      //             mandarinLevel: res.data.mandarinLevel,
      //             ncreLevel: res.data.ncreLevel
      //         });
      //     }
      // });
  }
});