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
    const selectedSemester = this.data.semesters[e.detail.value];
    this.setData({
      selectedSemester: selectedSemester,
    });

    // 根据选择的学期更新课程信息
    if (selectedSemester === '第一学期') {
      this.setData({
        courseSubject: '计算机科学', // 第一学期的科目
        courseType: '学位课', // 第一学期的课程类型
        courseNature: '必修', // 第一学期的课程性质
        courseSchedule: [
          { name: '程序设计基础', time: '周一 10:00-12:00' },
          { name: '数据结构与算法', time: '周三 14:00-16:00' },
          { name: '操作系统原理', time: '周五 9:00-11:00' },
        ], // 第一学期的课程安排
      });
    } else if (selectedSemester === '第二学期') {
      this.setData({
        courseSubject: '软件工程', // 第二学期的科目
        courseType: '选修课', // 第二学期的课程类型
        courseNature: '选修', // 第二学期的课程性质
        courseSchedule: [
          { name: '编译原理', time: '周一 13:00-15:00' },
          { name: '人工智能', time: '周三 15:00-17:00' },
          { name: '操作系统', time: '周五 10:00-12:00' },
        ], // 第二学期的课程安排
      });
    }
  },

  // 显示授课信息（更新科目、课程类型、课程性质和课程安排）
  showCourseInfo: function () {
    this.setData({
      courseSubject: '网络工程', // 更新科目
      courseType: '选修课', // 更新课程类型
      courseNature: '选修', // 更新课程性质
      courseSchedule: [
        { name: '密码学', time: '周一 13:00-15:00' },
        { name: '单片机', time: '周三 15:00-17:00' },
        { name: '操作系统', time: '周五 10:00-12:00' },
      ], // 更新课程安排
    });
  }
});
