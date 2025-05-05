Page({
  data: {
    years: ['2022 - 2023', '2023 - 2024', '2024 - 2025', '2025 - 2026'],
    semesters: ['第一学期', '第二学期'],
    majors: ['计算机科学与技术', '软件工程', '网络空间安全', '物联网', '人工智能'],
    selectedYearIndex: 0,
    selectedSemesterIndex: 0,
    selectedMajorIndex: 0,
    showImages: false,
    showNoScoreText: false,
    scoreImages: [],
    scoreDescription: ""
  },

  bindYearChange: function (e) {
    this.setData({
      selectedYearIndex: e.detail.value
    });
  },

  bindSemesterChange: function (e) {
    this.setData({
      selectedSemesterIndex: e.detail.value
    });
  },

  bindMajorChange: function (e) {
    this.setData({
      selectedMajorIndex: e.detail.value
    });
  },

  showScoreImages: async function () {
    const selectedYear = this.data.years[this.data.selectedYearIndex].replace(/ /g, '');
    const selectedSemester = this.data.semesters[this.data.selectedSemesterIndex];
    const selectedMajor = this.data.majors[this.data.selectedMajorIndex];

    // 修改后的图片路径格式
    const imagePath = `/pages/teacher/score/images/${selectedYear}_${selectedSemester}_${selectedMajor}.png`;

    const fs = wx.getFileSystemManager();

    try {
      // 检查文件是否存在
      await new Promise((resolve, reject) => {
        fs.access({
          path: imagePath,
          success: resolve,
          fail: reject
        });
      });

      const yearRange = this.data.years[this.data.selectedYearIndex];
      const semesterName = this.data.semesters[this.data.selectedSemesterIndex];
      const majorName = this.data.majors[this.data.selectedMajorIndex];
      const description = `${majorName}专业 ${yearRange} ${semesterName}的成绩`;

      this.setData({
        scoreImages: [imagePath],
        showImages: true,
        showNoScoreText: false,
        scoreDescription: description
      });
    } catch (error) {
      this.setData({
        scoreImages: [],
        showImages: false,
        showNoScoreText: true,
        scoreDescription: "该学期暂无成绩"
      });
    }
  },

  // 图片放大预览
  enlargeImage: function (e) {
    const currentUrl = e.currentTarget.dataset.src;
    wx.previewImage({
      current: currentUrl,
      urls: this.data.scoreImages
    });
  },

  // 下载图片
  downloadImage: function () {
    const imagePath = this.data.scoreImages[0];
    const fs = wx.getFileSystemManager();
    try {
      // 读取本地文件内容
      const fileContent = fs.readFileSync(imagePath);
      // 生成临时文件路径
      const tempFilePath = wx.env.USER_DATA_PATH + '/' + new Date().getTime() + '.png';
      // 保存文件到临时路径
      fs.writeFileSync(tempFilePath, fileContent, 'binary');
      // 保存图片到相册
      wx.saveImageToPhotosAlbum({
        filePath: tempFilePath,
        success: function () {
          wx.showToast({
            title: '下载成功',
            icon: 'success'
          });
        },
        fail: function (err) {
          wx.showToast({
            title: '保存失败',
            icon: 'none'
          });
          console.error('保存图片失败:', err);
        }
      });
    } catch (err) {
      wx.showToast({
        title: '下载失败',
        icon: 'none'
      });
      console.error('下载图片失败:', err);
    }
  }
});    