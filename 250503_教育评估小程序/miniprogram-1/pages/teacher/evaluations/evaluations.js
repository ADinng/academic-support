Page({
  data: {
    semester: '请选择学期',
    year: '请选择学年',
    major: '请选择专业',
    semesters: ['上半学期', '下半学期'], // 学期
    years: [], // 年份数据，初始化时为空
    majors: [
      '计算机科学与技术',
      '软件工程',
      '人工智能',
      '网络工程',
      '大数据技术',
      '信息管理与信息系统',
      '数字媒体技术',
      '物联网工程',
      '网络与新媒体'
    ], // 多个专业示例
    courseGoal: '',
    courseContent: '',
    teachingMethod: '',
    teachingSchedule: '',
    assessment: '',
    learningRequirements: '',
    courseStructure: '',
    expectedOutcomes: '',
    coursePolicy: '',
    teacherNotes: '',
    showResult: false
  },

  // 生命周期函数：页面加载时初始化学年数据
  onLoad() {
    this.initYears(); // 初始化学年范围
  },

  // 初始化学年范围
  initYears() {
    const years = [];
    for (let i = 1990; i <= 2026; i++) {
      years.push(`${i}-${i + 1}`);
    }
    this.setData({
      years: years,
      year: years[0] // 默认选择第一个学年
    });
  },

  // 选择学年
  onYearChange(e) {
    const year = this.data.years[e.detail.value];
    this.setData({ year });
  },

  // 选择学期
  onSemesterChange(e) {
    const semester = this.data.semesters[e.detail.value];
    this.setData({ semester });
  },

  // 选择专业
  onMajorChange(e) {
    const major = this.data.majors[e.detail.value];
    this.setData({ major });
  },

  // 模拟的数据，包含多个学期和专业对应的课程信息
  courseDatabase: {
    "1990-1991": {
      "上半学期": {
        "计算机科学与技术": {
          courseGoal: '计算机科学目标...',
          courseContent: '计算机科学课程内容...',
          teachingMethod: '讲授 + 实验',
          teachingSchedule: '每周 2 次课',
          assessment: '平时作业 + 期末考试',
          learningRequirements: '参与课堂讨论',
          courseStructure: '基础 + 高级内容',
          expectedOutcomes: '掌握编程基础',
          coursePolicy: '按时出勤',
        },
        "软件工程": {
          courseGoal: '软件工程目标...',
          courseContent: '软件工程课程内容...',
          teachingMethod: '讲授 + 项目',
          teachingSchedule: '每周 2 次课',
          assessment: '期中考试 + 项目',
          learningRequirements: '提交期中报告',
          courseStructure: '软件设计 + 实现',
          expectedOutcomes: '掌握软件开发技能',
          coursePolicy: '按时提交作业',
        },
      },
      "下半学期": {
        "人工智能": {
          courseGoal: '人工智能目标...',
          courseContent: '人工智能课程内容...',
          teachingMethod: '讲授 + 讨论',
          teachingSchedule: '每周 3 次课',
          assessment: '作业 + 期末考试',
          learningRequirements: '积极参与课堂讨论',
          courseStructure: '机器学习 + 深度学习',
          expectedOutcomes: '掌握AI基础',
          coursePolicy: '出勤要求',
        },
      },
    },
  },

  // 查询信息
  queryInfo() {
    const { year, semester, major } = this.data;

    // 获取对应的课程信息
    const courseInfo = this.courseDatabase[year]?.[semester]?.[major] || null;

    // 如果找不到课程信息，显示错误信息
    if (!courseInfo) {
      wx.showToast({
        title: '未找到课程信息',
        icon: 'none'
      });
      this.setData({
        showResult: false // 不显示结果
      });
    } else {
      // 设置数据到页面上
      this.setData({
        courseGoal: courseInfo.courseGoal,
        courseContent: courseInfo.courseContent,
        teachingMethod: courseInfo.teachingMethod,
        teachingSchedule: courseInfo.teachingSchedule,
        assessment: courseInfo.assessment,
        learningRequirements: courseInfo.learningRequirements,
        courseStructure: courseInfo.courseStructure,
        expectedOutcomes: courseInfo.expectedOutcomes,
        coursePolicy: courseInfo.coursePolicy,
        showResult: true // 显示查询结果
      });
    }
  },

  // 处理笔记输入
  handleNotesInput(e) {
    this.setData({
      teacherNotes: e.detail.value
    });
  },

  // 保存数据方法
  saveData() {
    // 保存到本地存储，或者发送到服务器
    wx.setStorageSync('courseData', this.data);

    wx.showToast({
      title: '数据已保存',
      icon: 'success',
      duration: 2000
    });
  }
});
