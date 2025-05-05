Page({
  data: {
      years: ['2022 - 2023', '2023 - 2024', '2024 - 2025', '2025 - 2026'],
      semesters: ['第一学期', '第二学期'],
      majors: ['计算机科学与技术', '软件工程', '网络空间安全', '物联网工程', '人工智能'],
      courses: ['数据结构', '操作系统', '计算机网络', '数据库原理', '人工智能基础', '软件工程导论', '网络安全技术', '物联网技术概论'],
      teachers: ['张明远', '李婉清', '王宇轩', '陈静怡', '刘浩然', '赵诗涵'],
      selectedYearIndex: 0,
      selectedSemesterIndex: 0,
      selectedMajorIndex: 0,
      selectedCourseIndex: 0,
      selectedTeacherIndex: 0,
      teachingCourses: [],
      showEvaluationResult: false,
      evaluationResult: null,
      rangeYears: ['2022 - 2023', '2023 - 2024', '2024 - 2025', '2025 - 2026'],
      rangeSemesters: ['第一学期', '第二学期'],
      rangeMajors: ['计算机科学与技术', '软件工程', '网络空间安全', '物联网工程', '人工智能'],
      rangeCourses: ['数据结构', '操作系统', '计算机网络', '数据库原理', '人工智能基础', '软件工程导论', '网络安全技术', '物联网技术概论'],
      rangeTeachers: ['张明远', '李婉清', '王宇轩', '陈静怡', '刘浩然', '赵诗涵']
  },

  onLoad() {
      this.setData({
          rangeYears: this.data.years,
          rangeSemesters: this.data.semesters,
          rangeMajors: this.data.majors,
          rangeCourses: this.data.courses,
          rangeTeachers: this.data.teachers
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

  bindTeacherChange(e) {
      this.setData({
          selectedTeacherIndex: e.detail.value
      });
  },

  showEvaluationResult() {
      const year = this.data.years[this.data.selectedYearIndex];
      const semester = this.data.semesters[this.data.selectedSemesterIndex];
      const major = this.data.majors[this.data.selectedMajorIndex];
      const course = this.data.courses[this.data.selectedCourseIndex];
      const teacher = this.data.teachers[this.data.selectedTeacherIndex];

      // 丰富模拟评教结果数据
      const allEvaluationData = [
          { year: '2022 - 2023', semester: '第一学期', major: '计算机科学与技术', course: '数据结构', teacher: '张明远', score: 92 },
          { year: '2022 - 2023', semester: '第一学期', major: '计算机科学与技术', course: '操作系统', teacher: '李婉清', score: 87 },
          { year: '2022 - 2023', semester: '第一学期', major: '软件工程', course: '软件工程导论', teacher: '王宇轩', score: 90 },
          { year: '2023 - 2024', semester: '第二学期', major: '软件工程', course: '操作系统', teacher: '李婉清', score: 88 },
          { year: '2023 - 2024', semester: '第二学期', major: '网络空间安全', course: '网络安全技术', teacher: '王宇轩', score: 95 },
          { year: '2023 - 2024', semester: '第二学期', major: '物联网工程', course: '物联网技术概论', teacher: '陈静怡', score: 90 },
          { year: '2024 - 2025', semester: '第一学期', major: '人工智能', course: '人工智能基础', teacher: '刘浩然', score: 93 },
          { year: '2024 - 2025', semester: '第二学期', major: '计算机科学与技术', course: '数据库原理', teacher: '赵诗涵', score: 89 },
          { year: '2024 - 2025', semester: '第二学期', major: '软件工程', course: '数据结构', teacher: '张明远', score: 91 },
          { year: '2025 - 2026', semester: '第一学期', major: '网络空间安全', course: '计算机网络', teacher: '陈静怡', score: 86 },
          { year: '2025 - 2026', semester: '第一学期', major: '物联网工程', course: '物联网技术概论', teacher: '刘浩然', score: 94 },
          { year: '2025 - 2026', semester: '第二学期', major: '人工智能', course: '人工智能基础', teacher: '赵诗涵', score: 92 }
      ];

      const evaluationData = allEvaluationData.find(item => 
          item.year === year && 
          item.semester === semester && 
          item.major === major && 
          item.course === course && 
          item.teacher === teacher
      );

      let score = null; 
      let text = `这是${teacher}老师${year}${semester}在${major}专业所教${course}的评教结果：`;
      if (evaluationData) {
          score = evaluationData.score;
      } else {
          text = `没有${teacher}老师${year}${semester}在${major}专业所教${course}的评教信息`;
      }

      this.setData({
          evaluationResult: {
              text,
              score
          },
          showEvaluationResult: true
      });
  }
});