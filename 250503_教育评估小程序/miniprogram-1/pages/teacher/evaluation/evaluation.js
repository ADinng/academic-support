Page({
  data: {
      years: ['2022 - 2023', '2023 - 2024', '2024 - 2025', '2025 - 2026'],
      semesters: ['第一学期', '第二学期'],
      majors: ['计算机科学与技术', '软件工程', '网络空间安全', '物联网', '人工智能'],
      courses: ['数据结构', '操作系统', '计算机网络', '数据库原理', '人工智能基础', '软件工程', '网络安全', '物联网技术'],
      selectedYearIndex: 0,
      selectedSemesterIndex: 0,
      selectedMajorIndex: 0,
      selectedCourseIndex: 0,
      teachingCourses: [],  // 改为存储教学课程
      showCourses: false,
      showEvaluationResult: false,
      evaluationResult: null,
      rangeYears: ['2022 - 2023', '2023 - 2024', '2024 - 2025', '2025 - 2026'],
      rangeSemesters: ['第一学期', '第二学期'],
      rangeMajors: ['计算机科学与技术', '软件工程', '网络空间安全', '物联网', '人工智能'],
      rangeCourses: ['数据结构', '操作系统', '计算机网络', '数据库原理', '人工智能基础', '软件工程', '网络安全', '物联网技术'],
      maliciousScoreCount: 0, // 恶意评分数量
      showMaliciousScorePrompt: false, // 是否显示恶意评分提示
      maliciousScores: [] // 存储恶意评分信息
  },

  onLoad() {
      this.setData({
          rangeYears: this.data.years,
          rangeSemesters: this.data.semesters,
          rangeMajors: this.data.majors,
          rangeCourses: this.data.courses
      });
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

  bindMajorChange(e) {
      this.setData({
          selectedMajorIndex: e.detail.value
      });
  },

  bindCourseChange(e) {
      this.setData({
          selectedCourseIndex: e.detail.value
      });
  },

  showCourses() {
      const { selectedMajorIndex } = this.data;
      const major = this.data.majors[selectedMajorIndex];

      // 模拟根据专业筛选课程数据，并随机生成恶意评分信息，增加唯一标识id
      const allCourses = [
          { id: 1, course: '数据结构', major: '计算机科学与技术', score: 92 },
          { id: 2, course: '操作系统', major: '计算机科学与技术', score: 88 },
          { id: 3, course: '计算机网络', major: '网络空间安全', score: 95 },
          { id: 4, course: '数据库原理', major: '软件工程', score: 90 },
          { id: 5, course: '人工智能基础', major: '人工智能', score: 93 },
          { id: 6, course: '软件工程', major: '软件工程', score: 89 },
          { id: 7, course: '网络安全', major: '网络空间安全', score: 94 },
          { id: 8, course: '物联网技术', major: '物联网', score: 91 },
          // 新增两条恶意评分信息
          { id: 9, course: '数据结构', major: '计算机科学与技术', score: 0 },
          { id: 10, course: '网络安全', major: '网络空间安全', score: 0 },
          { id: 11, course: '人工智能基础', major: '人工智能', score: 0 },
          { id: 12, course: '操作系统', major: '计算机科学与技术', score: 0 }
      ];

      const filteredCourses = allCourses.filter(item => item.major === major);
      const maliciousScores = filteredCourses.filter(item => item.score === 0);
      const normalCourses = filteredCourses.filter(item => item.score > 0);

      this.setData({
          teachingCourses: normalCourses,
          showCourses: true,
          showEvaluationResult: false,
          maliciousScoreCount: maliciousScores.length,
          showMaliciousScorePrompt: maliciousScores.length > 0,
          maliciousScores: maliciousScores
      });
  },

  showEvaluationResult(e) {
      const index = e.currentTarget.dataset.index;
      const course = this.data.teachingCourses[index];
      const year = this.data.years[this.data.selectedYearIndex];
      const semester = this.data.semesters[this.data.selectedSemesterIndex];
      const major = this.data.majors[this.data.selectedMajorIndex];

      this.setData({
          evaluationResult: {
              text: `这是您${year}${semester}在${major}所教${course.course}的评教结果：`,
              score: course.score
          },
          showEvaluationResult: true
      });
  },

  deleteMaliciousScore(e) {
      const index = e.currentTarget.dataset.index;
      const maliciousScores = this.data.maliciousScores;
      const removedMaliciousScore = maliciousScores.splice(index, 1)[0];

      const teachingCourses = this.data.teachingCourses.filter(course => {
          return course.id!== removedMaliciousScore.id;
      });

      this.setData({
          maliciousScores: maliciousScores,
          teachingCourses: teachingCourses,
          maliciousScoreCount: maliciousScores.length,
          showMaliciousScorePrompt: maliciousScores.length > 0
      });
  }
});