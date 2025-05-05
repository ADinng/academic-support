// pages/teacher/mental/mental.js
Page({
  data: {
    classList: ['班级一', '班级二'], // 可选择的班级
    selectedClass: '班级一', // 默认选择班级一
    studentList: [], // 存储学生的心理健康数据
    showStudentResult: false, // 是否显示学生详情弹框
    selectedStudent: {}, // 当前查看的学生数据
    averageScore: 0, // 班级的平均分
  },

  // 页面加载时，加载班级一的学生数据
  onLoad() {
    console.log('onLoad');
    this.loadStudentData('班级一'); // 默认加载班级一的学生数据
  },

  // 加载班级学生数据
  loadStudentData(className) {
    console.log('Loading data for:', className);
    const studentData = {
      '班级一': [
        { name: '张三', score: 7, advice: '心理健康状况良好，保持平衡生活' },
        { name: '李四', score: 5, advice: '建议适度锻炼，减轻压力' },
        { name: '王五', score: 3, advice: '建议寻求心理辅导帮助' },
        { name: '赵六', score: 6, advice: '心理健康状况良好，保持平衡生活' },
        { name: '钱七', score: 8, advice: '心理健康良好，继续保持' },
        { name: '孙八', score: 4, advice: '建议寻求心理辅导帮助' },
        { name: '周九', score: 6, advice: '建议适度锻炼，减轻压力' },
        { name: '吴十', score: 9, advice: '心理健康状况良好，保持积极心态' },
        { name: '郑十一', score: 7, advice: '保持积极的生活态度，适当放松' },
        { name: '冯十二', score: 5, advice: '建议适当休息，减少压力' }
      ],
      '班级二': [
        { name: '张伟', score: 6, advice: '心理健康状况良好，保持平衡生活' },
        { name: '李娜', score: 5, advice: '建议适度锻炼，减轻压力' },
        { name: '王强', score: 7, advice: '心理健康状况良好，保持平衡生活' },
        { name: '刘洋', score: 8, advice: '心理健康良好，继续保持' },
        { name: '陈婷', score: 9, advice: '心理健康良好，继续保持' },
        { name: '杨杰', score: 5, advice: '建议适度休息，减轻压力' },
        { name: '赵丽', score: 6, advice: '保持积极的生活态度' },
        { name: '王俊', score: 7, advice: '建议参加课外活动' },
        { name: '刘静', score: 4, advice: '建议寻求心理辅导帮助' },
        { name: '陈晨', score: 6, advice: '适当休息，缓解压力' }
      ]
    };

    // 如果数据存在，更新 studentList 和计算平均分
    if (studentData[className]) {
      const students = studentData[className];
      const totalScore = students.reduce((sum, student) => sum + student.score, 0);
      const averageScore = totalScore / students.length;

      this.setData({
        studentList: students,
        averageScore: averageScore.toFixed(2) // 保留两位小数
      });
    } else {
      console.error('No data found for class:', className);
    }
  },

  // 选择班级
  onClassChange(e) {
    const className = this.data.classList[e.detail.value];
    console.log('Class selected:', className); // Debug log

    this.setData({
      selectedClass: className
    });

    // 加载选择班级的学生数据
    this.loadStudentData(className);
  },

  // 查看学生结果
  onViewStudentResult(e) {
    const index = e.currentTarget.dataset.index;
    const student = this.data.studentList[index];
    console.log('Selected student:', student); // Debug log

    this.setData({
      selectedStudent: student,
      showStudentResult: true // 显示弹框
    });
  },

  // 关闭学生详情弹框
  closeDialog() {
    this.setData({
      showStudentResult: false
    });
  }
});
