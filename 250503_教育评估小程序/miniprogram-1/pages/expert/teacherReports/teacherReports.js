// pages/expert/teacherReports/teacherReports.js
Page({
  data: {
    teachers: [
      {
        id: 1,
        name: '李老师',
        department: '计算机科学与技术',
        report: '优秀',
        reportClass: 'excellent',
        score: 90,
        courses: 5,
        lastEval: '2025-04-10'
      },
      {
        id: 2,
        name: '张老师',
        department: '软件工程',
        report: '良好',
        reportClass: 'good',
        score: 75,
        courses: 4,
        lastEval: '2025-03-22'
      },
      {
        id: 3,
        name: '王老师',
        department: '网络空间安全',
        report: '良好',
        reportClass: 'needs-improve',
        score: 97,
        courses: 6,
        lastEval: '2025-02-18'
      },
      {
        id: 4,
        name: '赵老师',
        department: '计算机科学',
        report: '优秀',
        reportClass: 'excellent',
        score: 92,
        courses: 6,
        lastEval: '2025-04-10'
      },
      {
        id: 5,
        name: '孙老师',
        department: '计算机科学',
        report: '优秀',
        reportClass: 'good',
        score: 93,
        courses: 4,
        lastEval: '2025-03-18'
      },
      {
        id: 6,
        name: '周老师',
        department: '计算机科学',
        report: '优秀',
        reportClass: 'excellent',
        score: 90,
        courses: 5,
        lastEval: '2025-04-05'
      },
      {
        id: 7,
        name: '钱老师',
        department: '计算机科学',
        report: '优秀',
        reportClass: 'good',
        score: 82,
        courses: 4,
        lastEval: '2025-03-25'
      },
      {
        id: 8,
        name: '吴老师',
        department: '计算机科学',
        report: '优秀',
        reportClass: 'excellent',
        score: 97,
        courses: 6,
        lastEval: '2025-04-12'
      },
      {
        id: 9,
        name: '郑老师',
        department: '计算机科学',
        report: '优秀',
        reportClass: 'needsImprovement',
        score: 92,
        courses: 3,
        lastEval: '2025-02-28'
      },
      {
        id: 10,
        name: '冯老师',
        department: '计算机科学',
        report: '优秀',
        reportClass: 'good',
        score: 80,
        courses: 4,
        lastEval: '2025-03-30'
      }
    ]
  },

  viewTeacherReport(e) {
    const teacherId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/teacherReportDetail/teacherReportDetail?id=${teacherId}`
    });
  }
});
