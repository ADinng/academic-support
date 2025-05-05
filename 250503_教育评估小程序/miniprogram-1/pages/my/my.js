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
      const studentId = wx.getStorageSync('studentId');
      const name = wx.getStorageSync('name');
      const role = wx.getStorageSync('role');  // 获取角色信息（例如 student, teacher, expert）

      if (studentId && name) {
          this.setData({
              userInfo: {
                  name: name,
                  id: studentId
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
      wx.removeStorageSync('studentId');
      wx.removeStorageSync('name');
      wx.removeStorageSync('role');  // 清除角色信息
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
