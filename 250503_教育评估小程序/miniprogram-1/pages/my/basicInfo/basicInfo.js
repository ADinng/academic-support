Page({
  data: {
      // 学生信息
      idCard: '',
      gender: '',
      class: '',
      college: '',
      // 教师信息
      department: '',
      position: '',
      title: '',
      education: '',
      office: '',
      // 专家（原管理员）信息
      expertDepartment: '',
      expertRole: '',
      jurisdiction: '',
      dutyTime: '',
      superiorExpert: '',
      superiorExpertPhone: '',
      // 用户类型标识
      userType: ''
  },
  onLoad() {
      // 获取用户类型
      const userType = wx.getStorageSync('userType');
      this.setData({
          userType: userType
      });

      if (userType ==='student') {
          // 模拟学生数据
          this.setData({
              idCard: '11010519491231002X',
              gender: '女',
              class: '2025级计算机1班',
              college: '计算机学院'
          });
      } else if (userType === 'teacher') {
          // 模拟教师数据
          this.setData({
              department: '计算机系',
              position: '讲师',
              title: '初级',
              education: '硕士',
              office: 'B栋203'
          });
      } else if (userType === 'expert') {
          // 模拟专家（原管理员）数据
          this.setData({
              expertDepartment: '信息中心',
              expertRole: '高级管理员',
              jurisdiction: '全校范围',
              dutyTime: '周一至周五 9:00 - 17:00',
              superiorExpert: '张三',
              superiorExpertPhone: '13800138000'
          });
      }
  }
});       