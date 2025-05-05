// pages/expert/function/function.js
Page({
  data: {
    expert: {
      name: '张专家',
      title: '高级职称',
      id: 'E12345'
    },
    noticeTabs: ['全部通知', '系统通知', '评估通知'],
    currentNoticeTab: 0,
    notices: [
      [
        { id: 1, title: "新的教学质量评方案估待查阅", time: "2025-03-03" },
  { id: 2, title: "2025年春季本科教学评估即将开始", time: "2025-04-01" },
  { id: 3, title: "专家权限已更新，新增访问教学反馈统计模块", time: "2025-04-02" }
      ],
      [
        { id: 4, title: "您已被授权访问学院教学质量对比模块", time: "2025-03-28" },
        { id: 5, title: "平台将于2025年6月20日进行维护", time: "2025-05-01" },
        { id: 6, title: "数据可视化模块新增历年趋势对比功能", time: "2025-04-02" }
      ],
      [
        { id: 7, title: "计算机学院2025年教学评估已开启", time: "2025-02-03" },
        { id: 8, title: "学院评估尚未完成", time: "2025-04-02" },
        { id: 9, title: "2024年秋季课程评估结果已发布", time: "2025-01-30" }
      ]
    ],
    currentNotices: [],

    filteredFunctions: [
      {
        title: '教学质量监控与反馈',
        icon: '/images/quality.jpg',
        action: 'goToQualityMonitor'
      },
      {
        title: '教师报告与专业分布',
        icon: '/images/report.jpg',
        action: 'goToTeacherReports'
      },
      {
        title: '历史评估记录追踪',
        icon: '/images/history.jpg',
        action: 'goToEvaluationHistory'
      },
      {
        title: '教学质量数据总体统计与可视化图表分析',
        icon: '/images/data.jpg',
        action: 'goToDataVisualization'
      }
    ]
  },

  onLoad() {
    this.setData({
      currentNotices: this.data.notices[0]
    });
  },
  onShow() {
    if (this.getTabBar) {
      this.getTabBar().setData({
        selected: 1  // 功能页 tabBar 高亮，1 对应功能页
      });
    }
  },
  switchNoticeTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentNoticeTab: index,
      currentNotices: this.data.notices[index]
    });
  },

  viewNoticeDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/expert/noticeDetail-1/noticeDetail-1?id=${id}`
    });
  },


  goToQualityMonitor() {
    wx.navigateTo({ url: '/pages/expert/qualityMonitor/qualityMonitor' });
  },

  goToTeacherReports() {
    wx.navigateTo({ url: '/pages/expert/teacherReports/teacherReports' });
  },

  goToEvaluationHistory() {
    wx.navigateTo({ url: '/pages/expert/evaluationHistory/evaluationHistory' });
  },

  goToDataVisualization() {
    wx.navigateTo({ url: '/pages/expert/dataVisualization/dataVisualization' });
  }
});
