// pages/expert/qualityMonitor/qualityMonitor.js
Page({
  data: {
    classes: [
      {
        classId: 1,
        className: '计算机科学2023班',
        evaluations: [
          {
            id: 1,
            studentName: '张三',
            course: '计算机科学基础',
            grade: '优秀',
            attendance: 98,
            projectRate: 95,
            feedback: '学生表现出色，作业完成情况优秀，课堂参与积极。',
          },
          {
            id: 2,
            studentName: '李四',
            course: '软件工程',
            grade: '良好',
            attendance: 90,
            projectRate: 85,
            feedback: '学生参与度较高，作业完成情况良好，仍有提升空间。',
          },
          {
            id: 3,
            studentName: '王五',
            course: '信息安全',
            grade: '中等',
            attendance: 85,
            projectRate: 75,
            feedback: '学生完成了大部分作业，但出勤率和课堂参与度有待提高。',
          }
        ]
      },
      {
        classId: 2,
        className: '软件工程2023班',
        evaluations: [
          {
            id: 4,
            studentName: '赵六',
            course: '物联网技术',
            grade: '优秀',
            attendance: 97,
            projectRate: 98,
            feedback: '学生表现优异，出勤率高，作业优秀，课堂参与积极。',
          },
          {
            id: 5,
            studentName: '钱七',
            course: '网络安全',
            grade: '待改进',
            attendance: 70,
            projectRate: 60,
            feedback: '学生出勤率较低，作业完成情况不佳，需要进一步改进。',
          },
          {
            id: 6,
            studentName: '孙八',
            course: '数据结构',
            grade: '良好',
            attendance: 88,
            projectRate: 80,
            feedback: '学生出勤良好，作业完成情况一般，可以做得更好。',
          }
        ]
      }
    ]
  },

  viewEvaluationDetail(e) {
    const evaluationId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/evaluationDetail/evaluationDetail?id=${evaluationId}`
    });
  }
});
