Page({
  data: {
    years: ['2022 - 2023', '2023 - 2024', '2024 - 2025', '2025 - 2026'],
    semesters: ['第一学期', '第二学期'],
    selectedYearIndex: 0,
    selectedSemesterIndex: 0,
    showSchedule: false,
    courseScheduleImages: [] // 用来存储课表图片路径的数组
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

  // 展示课表
  showCourseSchedule: function () {
    const year = this.data.years[this.data.selectedYearIndex].replace(/ /g, ''); // 去掉空格
    const semester = this.data.semesters[this.data.selectedSemesterIndex];

    // 根据选择的学年和学期设置图片路径
    const images = [
      `/pages/student/course/images/${year}_${semester}_1.png`,
      `/pages/student/course/images/${year}_${semester}_2.png`,
    ];
    console.log('生成的图片路径:', images); // 添加调试语句

    this.setData({
      showSchedule: true,
      courseScheduleImages: images
    }, () => {
      console.log('setData 操作后 courseScheduleImages:', this.data.courseScheduleImages); // 添加调试语句
    });
  },

  // 放大图片
  enlargeImage: function (e) {
    const imageSrc = e.currentTarget.dataset.src;
    wx.previewImage({
      current: imageSrc,
      urls: this.data.courseScheduleImages
    });
  },

  // 下载图片函数
  downloadImage: function () {
    const fs = wx.getFileSystemManager();
    const imagePaths = this.data.courseScheduleImages;
    for (let i = 0; i < imagePaths.length; i++) {
      const imagePath = imagePaths[i];
      try {
        // 读取本地文件内容
        const fileContent = fs.readFileSync(imagePath);
        // 生成临时文件路径
        const tempFilePath = wx.env.USER_DATA_PATH + '/' + new Date().getTime() + '_' + i + '.png';
        // 保存文件到临时路径
        fs.writeFileSync(tempFilePath, fileContent, 'binary');
        // 保存图片到相册
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePath,
          success: function () {
            if (i === imagePaths.length - 1) {
              wx.showToast({
                title: '下载成功',
                icon:'success'
              });
            }
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
  }
});