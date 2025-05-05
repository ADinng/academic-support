// pages/teacher/schedule/schedule.js
Page({
  data: {
    years: ['2024-2025', '2025-2026', '2026-2027'], // 可选学年
    semesters: ['第一学期', '第二学期'], // 可选学期
    selectedYear: '2024-2025', // 默认学年
    selectedSemester: '第一学期', // 默认学期
    courseSubject: '计算机科学', // 默认科目
    courseType: '学位课', // 默认课程类型
    courseNature: '必修', // 默认课程性质
    courseSchedule: [
      { name: '程序设计基础', time: '周一 10:00-12:00' },
      { name: '数据结构与算法', time: '周三 14:00-16:00' },
      { name: '操作系统原理', time: '周五 9:00-11:00' },
    ], // 默认课程安排
  },

  // 选择学年事件
  onYearChange: function (e) {
    this.setData({
      selectedYear: this.data.years[e.detail.value],
    });
  },

  // 选择学期事件
  onSemesterChange: function (e) {
    this.setData({
      selectedSemester: this.data.semesters[e.detail.value],
    });
  },

  // 跳转到课程详情页面
  goToCourseDetail: function () {
    wx.navigateTo({
      url: '/pages/teacher/courseDetail/courseDetail', // 跳转到课程详情页面
    });
  }
});
