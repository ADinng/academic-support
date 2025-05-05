Page({
  data: {
      activeButton: 'student',
      inputPlaceholders: {
          student: ['请输入学号', '请输入姓名', '请输入密码'],
          teacher: ['请输入工号', '请输入姓名', '请输入密码'],
          expert: ['请输入账号', '请输入姓名', '请输入密码']
      },
      inputs: ['', '', ''],
      errorMessage: ''
  },
  
  // 点击按钮切换用户角色
  onButtonClick(e) {
      const buttonType = e.currentTarget.dataset.type;
      this.setData({
          activeButton: buttonType
      });
  },
  
  // 处理输入框内容变化
  onInputChange(e) {
      const index = e.currentTarget.dataset.index;
      const newInputs = [...this.data.inputs];
      newInputs[index] = e.detail.value;
      this.setData({
          inputs: newInputs
      });
  },
  
  // 登录验证并跳转页面
  onLogin() {
    const { activeButton, inputs } = this.data;
    let success = false;

    // 动态验证（这里只是示范，建议替换为实际的验证逻辑）
    if (activeButton === 'student') {
      // 检查学生凭证（替换为实际的验证）
      if (inputs[0] === '87124563' && inputs[1] === '王一' && inputs[2] === '87124563') {
        success = true;
      }
    } else if (activeButton === 'teacher') {
      // 检查教师凭证（替换为实际的验证）
      if (inputs[0] === '4398721' && inputs[1] === '张老师' && inputs[2] === '4398721') {
        success = true;
      }
    } else if (activeButton === 'expert') {
      // 检查专家凭证（替换为实际的验证）
      if (inputs[0] === '653489' && inputs[1] === '张专家' && inputs[2] === '653489') {
        success = true;
      }
    }

    if (success) {
      // 登录成功，存储用户信息
      wx.setStorageSync('userType', activeButton);
      wx.setStorageSync('name', inputs[1]);
      wx.setStorageSync('userIdentifier', inputs[0]);

      let targetUrl = '';
      switch (activeButton) {
        case 'student':
          targetUrl = '/pages/student/home/home';
          break;
        case 'teacher':
          targetUrl = '/pages/teacher/home/home';
          break;
        case 'expert':
          targetUrl = '/pages/expert/home/home';
          break;
        default:
          targetUrl = '/pages/index/index';
      }

      // 跳转到相应的首页
      wx.reLaunch({
        url: targetUrl
      });
    } else {
      // 登录失败，显示错误信息
      this.setData({
        errorMessage: '登录错误，请检查账号、姓名和密码'
      });
    }
  }
});
