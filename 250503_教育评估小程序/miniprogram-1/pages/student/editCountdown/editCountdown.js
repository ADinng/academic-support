// pages/editCountdown/editCountdown.js
Page({
  data: {
    selectedDate: '', // 存储用户选择的日期
    formattedDate: '', // 显示格式化后的日期
  },

  onLoad: function () {
    // 页面加载时可以设置默认的日期（比如当前日期）
    const currentDate = new Date();
    const formattedDate = this.formatDate(currentDate);
    this.setData({
      selectedDate: this.formatDateToPicker(currentDate),
      formattedDate: formattedDate,
    });
  },

  // 选择日期后触发
  bindDateChange: function (e) {
    const selectedDate = e.detail.value; // 获取用户选择的日期
    const formattedDate = this.formatDate(new Date(selectedDate)); // 格式化为“YYYY-MM-DD”
    this.setData({
      selectedDate: selectedDate,
      formattedDate: formattedDate,
    });
  },

  // 格式化日期为“YYYY-MM-DD”
  formatDate: function (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 格式化日期为picker组件支持的格式“YYYY-MM-DD”
  formatDateToPicker: function (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 点击确认保存
  saveCountdown: function () {
    const selectedDate = this.data.selectedDate;
    wx.setStorageSync('countdownDate', selectedDate); // 保存日期到本地缓存
    wx.navigateBack(); // 返回上一页面
  }
});
