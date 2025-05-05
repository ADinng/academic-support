Page({
  data: {
      avatarUrl: '/images/avatar.png',
      userInfo: {
          name: '',
          id: ''
      },
      role: '',  // 用户角色，默认值为空
      showLogoutModal: false
  },

  onLoad() {
      // 获取用户角色、姓名和ID
      const userId = wx.getStorageSync('userIdentifier');  // 获取用户ID
      const name = wx.getStorageSync('name');  // 获取用户姓名
      const role = wx.getStorageSync('userType');  // 获取用户角色（例如 student, teacher, expert）

      if (userId && name) {
          this.setData({
              userInfo: {
                  name: name,
                  id: userId
              },
              role: role || 'student'  // 如果没有角色，默认设置为 'student'
          });
      }
  },

  onShow() {
    if (this.getTabBar) {
      this.getTabBar().setData({
        selected: 2  // 我的页 tabBar 高亮，2 对应我的页
      });
    }
  },

  changeAvatar() {
      wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: (res) => {
              const tempFilePaths = res.tempFilePaths;
              this.setData({
                  avatarUrl: tempFilePaths[0]
              });
          },
          fail: (err) => {
              console.error('选择图片失败', err);
          }
      });
  },

  showLogoutModal() {
      this.setData({
          showLogoutModal: true
      });
  },

  hideLogoutModal() {
      this.setData({
          showLogoutModal: false
      });
  },

  logout() {
      // 清除存储的用户信息
      wx.removeStorageSync('userIdentifier');  // 清除学号/ID
      wx.removeStorageSync('name');  // 清除姓名
      wx.removeStorageSync('userType');  // 清除角色

      // 跳转到登录页面
      wx.redirectTo({
          url: '/pages/login/login'
      });
  },

  // 根据角色跳转到不同的功能页面
  navigateToFunctionPage() {
      const { role } = this.data;

      if (role === 'student') {
          wx.navigateTo({
              url: '/pages/student/class/class'  // 学生端功能页面
          });
      } else if (role === 'teacher') {
          wx.navigateTo({
              url: '/pages/teacher/fundamention/fundamention'  // 教师端功能页面
          });
      } else if (role === 'expert') {
          wx.navigateTo({
              url: '/pages/expert/function/function'  // 专家端功能页面
          });
      } else {
          wx.showToast({
              title: '角色未设置',
              icon: 'none'
          });
      }
  }
});
