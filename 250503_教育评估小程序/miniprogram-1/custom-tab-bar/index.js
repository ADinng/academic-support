Component({
  data: {
    selected: 0,
    tabList: []
  },
  lifetimes: {
    attached() {
      const role = wx.getStorageSync('userType') || 'student'; // 默认 student
      let tabList = [];

      if (role === 'student') {
        tabList = [
          { pagePath: "pages/student/home/home", iconPath: "/images/首页.png", selectedIconPath: "/images/首页 (3).png", text: "首页" },
          { pagePath: "pages/student/class/class", iconPath: "/images/信息 (3).png", selectedIconPath: "/images/信息 (4).png", text: "功能" },
          { pagePath: "pages/my/my", iconPath: "/images/用户 (2).png", selectedIconPath: "/images/我的.png", text: "我的" }
        ];
      } else if (role === 'teacher') {
        tabList = [
          { pagePath: "pages/teacher/home/home", iconPath: "/images/首页.png", selectedIconPath: "/images/首页 (3).png", text: "首页" },
          { pagePath: "pages/teacher/fundamention/fundamention", iconPath: "/images/信息 (3).png", selectedIconPath: "/images/信息 (4).png", text: "功能" },
          { pagePath: "pages/my/my", iconPath: "/images/用户 (2).png", selectedIconPath: "/images/我的.png", text: "我的" }
        ];
      } else if (role === 'expert') {
        tabList = [
          { pagePath: "pages/expert/home/home", iconPath: "/images/首页.png", selectedIconPath: "/images/首页 (3).png", text: "首页" },
          { pagePath: "pages/expert/function/function", iconPath: "/images/信息 (3).png", selectedIconPath: "/images/信息 (4).png", text: "功能" },
          { pagePath: "pages/my/my", iconPath: "/images/用户 (2).png", selectedIconPath: "/images/我的.png", text: "我的" }
        ];
      }

      this.setData({ tabList });
    }
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const path = data.path;
      wx.switchTab({ url: '/' + path });
      this.setData({ selected: data.index });
    },
    setActiveTab(index) {
      this.setData({ selected: index });
    }
  }
});
