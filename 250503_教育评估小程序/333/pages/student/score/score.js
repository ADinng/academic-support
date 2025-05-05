Page({
  data: {
    years: ['2022 - 2023', '2023 - 2024', '2024 - 2025', '2025 - 2026'],
    semesters: ['第一学期', '第二学期'],
    selectedYearIndex: 0,
    selectedSemesterIndex: 0,
    showImages: false,
    showNoScoreText: false, 
    scoreImages: [],
    scoreDescription: "" // 新增变量，用于存储成绩描述
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

  showScoreImages: async function () {
    const selectedYear = this.data.years[this.data.selectedYearIndex].replace(/ /g, ''); 
    const selectedSemester = this.data.semesters[this.data.selectedSemesterIndex];

    // 根据选择的学年和学期设置多个可能的图片路径
    const possibleImagePaths = [
      `/pages/student/score/images/${selectedYear}_${selectedSemester}_1.png`,
      `/pages/student/score/images/${selectedYear}_${selectedSemester}_2.png`,
      // 可以根据实际情况添加更多可能的路径
    ];

    const fs = wx.getFileSystemManager();

    // 创建一个包含所有图片路径检查的 Promise 数组
    const checkPromises = possibleImagePaths.map((imagePath) => {
      return new Promise((resolve) => {
        fs.access({
          path: imagePath,
          success: () => resolve(imagePath),
          fail: () => resolve(null)
        });
      });
    });

    // 等待所有检查完成
    const results = await Promise.all(checkPromises);

    // 过滤出有效的图片路径
    const validImagePaths = results.filter((path) => path !== null);

    if (validImagePaths.length > 0) {
      const yearRange = this.data.years[this.data.selectedYearIndex];
      const semesterName = this.data.semesters[this.data.selectedSemesterIndex];
      const description = `这是${yearRange} ${semesterName}的成绩`;
      this.setData({
        scoreImages: validImagePaths,
        showImages: true,
        showNoScoreText: false,
        scoreDescription: description
      });
    } else {
      this.setData({
        scoreImages: [],
        showImages: false,
        showNoScoreText: true,
        scoreDescription: "暂无成绩"
      });
    }
  },

  // 下载图片函数
  downloadImages: function () {
    const scoreImages = this.data.scoreImages;
    scoreImages.forEach((imagePath) => {
      const fs = wx.getFileSystemManager();
      try {
        const fileContent = fs.readFileSync(imagePath);
        const tempFilePath = wx.env.USER_DATA_PATH + '/' + new Date().getTime() + '.png';
        fs.writeFileSync(tempFilePath, fileContent, 'binary');
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePath,
          success: () => {
            wx.showToast({
              title: '下载成功',
              icon:'success'
            });
          },
          fail: (err) => {
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
    });
  },

  // 图片放大预览
  enlargeImage: function (e) {
    const currentUrl = e.currentTarget.dataset.src;
    wx.previewImage({
      current: currentUrl,
      urls: this.data.scoreImages
    });
  }
});    