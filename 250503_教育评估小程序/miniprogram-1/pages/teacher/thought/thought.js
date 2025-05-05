// pages/teacher/thought/thought.js
Page({
  data: {
    ideas: [
      {
        id: 1,
        title: '社会主义核心价值观',
        description: '学习并理解社会主义核心价值观，培养爱国、敬业、诚信、友善的社会风尚。',
        resource: '《社会主义核心价值观学习资料》'
      },
      {
        id: 2,
        title: '教师职业道德',
        description: '提升教师的职业道德和专业素养，为学生提供更好的教育服务。',
        resource: '《教师职业道德手册》'
      },
      {
        id: 3,
        title: '现代教育理念',
        description: '关注现代教育改革趋势，学习新的教育理念，提升课堂教学效果。',
        resource: '《现代教育理念与实践》'
      },
      {
        id: 4,
        title: '终身学习理念',
        description: '树立终身学习的理念，保持持续的自我提升和知识更新。',
        resource: '《终身学习与职业发展》'
      },
      {
        id: 5,
        title: '创新教育方法',
        description: '学习并实践创新的教育方法，提高学生的创新能力和实践能力。',
        resource: '《创新教育方法与应用》'
      },
    ],
    showDetail: false, // 是否显示详情弹框
    selectedIdea: {} // 当前选中的思想详情
  },

  // 查看详细信息
  viewDetails(e) {
    const id = e.currentTarget.dataset.id;
    const selectedIdea = this.data.ideas.find(idea => idea.id === id);
    this.setData({
      selectedIdea,
      showDetail: true
    });
  },

  // 关闭详情弹框
  closeDetail() {
    this.setData({
      showDetail: false
    });
  }
});
