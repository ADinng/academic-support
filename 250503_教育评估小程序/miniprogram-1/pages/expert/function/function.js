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
    allNotices: [
      { id: 1, title: '欢迎使用专家系统', time: '2025-05-01', type: '系统通知' },
      { id: 2, title: '评估任务即将开始', time: '2025-05-02', type: '评估通知' }
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
    this.filterNotices();
  },
  onShow() {
    if (this.getTabBar) {
      this.getTabBar().setData({
        selected: 1  // 功能页 tabBar 高亮，1 对应功能页
      });
    }
  },
  switchNoticeTab(e) {
    this.setData({
      currentNoticeTab: e.currentTarget.dataset.index
    });
    this.filterNotices();
  },

  filterNotices() {
    const tab = this.data.noticeTabs[this.data.currentNoticeTab];
    if (tab === '全部通知') {
      this.setData({ currentNotices: this.data.allNotices });
    } else {
      const filtered = this.data.allNotices.filter(n => n.type === tab);
      this.setData({ currentNotices: filtered });
    }
  },

  viewNoticeDetail(e) {
    const noticeId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/noticeDetail/noticeDetail?id=${noticeId}`
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
