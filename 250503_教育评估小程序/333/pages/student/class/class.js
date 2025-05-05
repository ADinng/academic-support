Page({
  data: {
    swiperImages: [
      { url: '/images/function1.jpg', link: 'https://mp.weixin.qq.com/s/ZoS3LH0bOpN8r1icR-izQQ' },
      { url: '/images/function2.jpg', link: 'https://hgnews.hbeu.edu.cn/info/1002/39825.htm' },
      { url: '/images/function3.jpg', link: 'https://hgnews.hbeu.edu.cn/info/1002/39825.htm' }
    ],
    ranges: ['待设置', '1天', '2天', '3天', '4天', '5天'],
    selectedRange: '待设置',
    countdownDays: 0,
    countdownDate: '', // 存储目标日期
    remainingDays: 0, // 存储剩余天数
    currentSwiperIndex: 0,
    showCountdownOptions: false
  },

  onLoad: function () {
    // 从本地存储获取目标日期
    const storedDate = wx.getStorageSync('countdownDate');
    console.log('Stored date:', storedDate);  // 打印日期，确认是否存在
    if (storedDate) {
      this.setData({
        countdownDate: storedDate
      });
      this.calculateRemainingTime(storedDate); // 计算剩余时间
      this.startCountdown(storedDate); // 启动倒计时
    } else {
      console.log('No stored date found');
    }
  },

  onShow() {
    if (this.getTabBar) {
      this.getTabBar().setData({
        selected: 1  // 功能页 tabBar 高亮，1 对应功能页
      });
    }
  },

  startCountdown: function (countdownDate) {
    // 清除之前的倒计时定时器
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
    }

    // 每秒更新倒计时
    this.countdownTimer = setInterval(() => {
      this.calculateRemainingTime(countdownDate);
    }, 1000);
  },

  calculateRemainingTime: function (countdownDate) {
    const now = new Date(); // 当前时间
    const targetDate = new Date(countdownDate.replace(/-/g, '/')); // 目标日期，替换"-"为"/"以确保兼容性
    console.log('Target date:', targetDate);  // 打印目标日期，确保格式正确

    // 确保目标日期有效
    if (isNaN(targetDate.getTime())) {
      console.error('Invalid target date');
      return;
    }

    const timeDiff = targetDate - now; // 计算剩余时间（毫秒）
    console.log('Time difference (ms):', timeDiff); // 打印时间差

    if (timeDiff <= 0) {
      clearInterval(this.countdownTimer); // 停止倒计时
      this.setData({
        remainingDays: 0,
      });
      wx.showToast({
        title: '倒计时结束！',
        icon: 'none',
      });
      return;
    }

    // 计算剩余天数
    const daysRemaining = Math.floor(timeDiff / (1000 * 3600 * 24));

    this.setData({
      remainingDays: daysRemaining,
    });
  },

  navigateToCountdownSetting: function () {
    // 跳转到设置页面
    wx.navigateTo({
      url: '/pages/student/editCountdown/editCountdown' // 设置页面路径
    });
  },

  navigateToSuggestionPage() {
    wx.navigateTo({
      url: '/pages/student/suggestion/suggestion', // 根据实际页面路径修改
    });
  },

  bindPickerChange: function (e) {
    const val = parseInt(e.detail.value);
    const rangeVal = this.data.ranges[val];
    this.setData({
      selectedRange: rangeVal,
      countdownDays: val
    });
  },

  navigateToPage(e) {
    const url = e.currentTarget.dataset.url;
    if (url) {
      wx.navigateTo({
        url: `/pages/student/webview/webview?url=${encodeURIComponent(url)}`
      });
    }
  },

  toggleCountdownOptions() {
    this.setData({
      showCountdownOptions: !this.data.showCountdownOptions
    });
  },

  swiperChange: function (e) {
    this.setData({ currentSwiperIndex: e.detail.current });
  },

  handleDotClick: function (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({ currentSwiperIndex: index });
  },

  navigateToGame: function (e) {
    const game = e.currentTarget.dataset.game;
    const map = {
      '闯关大作战': '/pages/student/game2/game2'
    };
    wx.navigateTo({ url: map[game] || '' });
  },

  navigateToFunction: function (e) {
    const testType = e.currentTarget.dataset.test;
    const map = {
      '题目练习': '/pages/student/practice/practice',
      '校园活动': '/pages/student/activity/activity',
      '评估题库': '/pages/student/totoltimu/totaltimu'
    };
    const url = map[testType];
    url ? wx.navigateTo({ url }) : wx.showToast({ title: '功能开发中', icon: 'none' });
  }
});
