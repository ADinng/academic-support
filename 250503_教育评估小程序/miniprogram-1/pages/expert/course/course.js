Page({
  data: {
      years: ['2022 - 2023', '2023 - 2024', '2024 - 2025', '2025 - 2026'],
      semesters: ['第一学期', '第二学期'],
      classes: ['班级1', '班级2'],
      majors: ['计算机科学与技术', '软件工程', '网络空间安全', '物联网', '人工智能'],
      selectedYearIndex: 0,
      selectedSemesterIndex: 0,
      selectedClassIndex: 0,
      selectedMajorIndex: 0,
      showSchedule: false,
      courseScheduleImages: []
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

  bindClassChange: function (e) {
      this.setData({
          selectedClassIndex: e.detail.value
      });
  },

  bindMajorChange: function (e) {
      this.setData({
          selectedMajorIndex: e.detail.value
      });
  },

  showCourseSchedule: function () {
      const year = this.data.years[this.data.selectedYearIndex].replace(/ /g, '');
      const semester = this.data.semesters[this.data.selectedSemesterIndex];
      const selectedClass = this.data.classes[this.data.selectedClassIndex];
      const selectedMajor = this.data.majors[this.data.selectedMajorIndex];

      const images = [
          `/pages/teacher/course/images/${year}_${semester}_${selectedMajor}_${selectedClass}.png`,
      ];
      console.log('生成的图片路径:', images);

      this.setData({
          showSchedule: true,
          courseScheduleImages: images
      }, () => {
          console.log('setData 操作后 courseScheduleImages:', this.data.courseScheduleImages);
      });
  },

  enlargeImage: function (e) {
      const imageSrc = e.currentTarget.dataset.src;
      wx.previewImage({
          current: imageSrc,
          urls: this.data.courseScheduleImages
      });
  },

  downloadImage: function () {
      const imagePath = this.data.courseScheduleImages[0];
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