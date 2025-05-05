Page({
  data: {
    years: ['2022 - 2023', '2023 - 2024', '2024 - 2025', '2025 - 2026'],
    semesters: ['第一学期', '第二学期'],
    selectedYearIndex: 0,
    selectedSemesterIndex: 0,
    teachers: [],
    showTeachers: false,
    selectedTeacherIndex: null
  },

  bindYearChange(e) {
    this.setData({
      selectedYearIndex: e.detail.value
    });
  },

  bindSemesterChange(e) {
    this.setData({
      selectedSemesterIndex: e.detail.value
    });
  },

  showTeachers() {
    const { selectedYearIndex, selectedSemesterIndex } = this.data;
    const teachers = [
      { name: '张三', course: '高数' },
      { name: '李四', course: '大学物理' },
      { name: '王五', course: '国语' },
      { name: '赵六', course: '大学英语一' },
      { name: '孙七', course: '马克思主义' },
      { name: '周八', course: 'Web程序设计' },
      { name: '吴九', course: 'C语言' },
      { name: '郑十', course: '大学体育' },
      { name: '王十一', course: '美育' },
      { name: '李十二', course: '计算机网络' }
    ];
    this.setData({
      teachers: teachers,
      showTeachers: true
    });
  },

  navigateToEvaluationQuestion(e) {
    const selectedTeacherIndex = e.currentTarget.dataset.index;
    this.setData({
      selectedTeacherIndex: selectedTeacherIndex
    });
    wx.navigateTo({
      url: '/pages/student/evaluationQuestion/evaluationQuestion',
      events: {
        success: function() {
          console.log('成功跳转到评教问题页面');
        },
        fail: function(err) {
          console.error('跳转失败', err);
        }
      }
    });
  }
});