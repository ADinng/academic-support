// pages/teacher/fundamention/fundamention.js
Page({
  data: {
    teacher: {
      name: "张老师",
      department: "计算机学院",
      jobNumber: "T2023001"
    },
    noticeTabs: ["评估通知", "会议通知", "教职活动通知"],
    currentNoticeTab: 0,
    notices: [
      [
        { id: 1, title: "自查自改方案", time: "2025-04-20" },
        { id: 2, title: "审核评估指标体系任务", time: "2025-04-18" },
        { id: 3, title: "本科评估审核要点", time: "2025-04-15" }
      ],
      [
        { id: 4, title: "入校评估说明会", time: "2025-04-19" },
        { id: 5, title: "审核评估专家交流会", time: "2025-04-16" },
        { id: 6, title: "评估自评研讨会", time: "2025-04-14" }
      ],
      [
        { id: 7, title: "教职工趣味运动会", time: "2025-04-17" },
        { id: 8, title: "教师技能交流", time: "2025-04-13" },
        { id: 9, title: "教师节庆祝活动", time: "2025-09-10" }
      ]
    ],
    currentNotices: [],

    // ✅ 功能快速入口的数据加回来啦
    filteredFunctions: [
      { title: "教学计划与教学大纲\n（课程目标与教学方法的全面概述）", icon: "/images/fundamention1.jpg", action: "goToEvaluation" },
      { title: "评估会议报告\n（关于教学质量自评会的评估分析）", icon: "/images/fundamention2.jpg", action: "goToGrade" },
      { title: "学生心理健康管理\n（关注学生心理发展的系统性支持）", icon: "/images/fundamention3.jpg", action: "goToMental" },
      { title: "授课信息与课程安排\n（课程内容与教师安排的详细信息）", icon: "/images/fundamention2.jpg", action: "goToSchedule" },
      { title: "思想动态\n（跟踪学生思想政治变化与发展）", icon: "/images/fundamention5.jpg", action: "goToThought" },
      { title: "问卷调查\n（面向学生与教师的反馈收集与分析）", icon: "/images/fundamention6.jpg", action: "goToQuestionnaire" }
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
      url: `/pages/teacher/noticeDetail-1/noticeDetail-1?id=${id}`
    });
  },

  // ✅ 功能跳转的小方法
  goToEvaluation() {
    wx.navigateTo({
      url: '/pages/teacher/evaluations/evaluations'
    });
  }, 
   goToGrade() {
    wx.navigateTo({
      url: '/pages/teacher/grades/grades'
    });
  },
  goToMental() {
    wx.navigateTo({
      url: '/pages/teacher/mental/mental'
    });
  }, 
    goToSchedule() {
    wx.navigateTo({
      url: '/pages/teacher/schedule/schedule'
    });
  },
  goToThought() {
    wx.navigateTo({
      url: '/pages/teacher/thought/thought'
    });
  },  
  goToQuestionnaire() {
    wx.navigateTo({
      url: '/pages/teacher/questionnaires/questionnaires'
    });
  }
});
