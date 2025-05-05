// pages/teacher/homeworkDetail/homeworkDetail.js
Page({
  data: {
    homework: null,
    formattedContent: ''
  },

  onLoad: function(options) {
    // 从全局变量获取作业数据
    const app = getApp();
    const homework = app.globalData.currentHomework;
    
    if (!homework) {
      wx.showToast({
        title: '作业数据加载失败',
        icon: 'none'
      });
      wx.navigateBack();
      return;
    }

    // 格式化内容（处理换行等）
    const formattedContent = this.formatContent(homework.content);
    
    this.setData({
      homework: homework,
      formattedContent: formattedContent
    });
  },

  // 格式化文件大小
  formatFileSize: function(size) {
    if (size < 1024) {
      return size + 'B';
    } else if (size < 1024 * 1024) {
      return (size / 1024).toFixed(1) + 'KB';
    } else {
      return (size / (1024 * 1024)).toFixed(1) + 'MB';
    }
  },

  // 格式化内容
  formatContent: function(content) {
    // 替换换行符为<br>标签
    content = content.replace(/\n/g, '<br/>');
    // 替换多个空格为HTML空格实体
    content = content.replace(/ /g, '&nbsp;');
    // 替换Markdown标题
    content = content.replace(/### (.*?)\n/g, '<h3>$1</h3>');
    // 替换Markdown加粗
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // 替换Markdown列表项
    content = content.replace(/-\s(.*?)\n/g, '<li>$1</li>');
    return content;
  },

   // 预览附件
   previewAttachment: function(e) {
    const index = e.currentTarget.dataset.index;
    const attachment = this.data.homework.attachments[index];
    
    // 处理不同文件类型的预览
    if (attachment.type.includes('image')) {
      // 图片预览
      wx.previewImage({
        urls: [this.getFileUrl(attachment.name)],
        current: this.getFileUrl(attachment.name)
      });
    } else if (attachment.type.includes('pdf')) {
      // PDF预览（需要真机调试）
      wx.downloadFile({
        url: this.getFileUrl(attachment.name),
        success: function(res) {
          const filePath = res.tempFilePath;
          wx.openDocument({
            filePath: filePath,
            fileType: 'pdf',
            success: function(res) {
              console.log('打开文档成功');
            }
          });
        }
      });
    } else {
      // 其他文件类型提示下载
      wx.showModal({
        title: '下载附件',
        content: '是否下载 ' + attachment.name + '?',
        success(res) {
          if (res.confirm) {
            wx.downloadFile({
              url: this.getFileUrl(attachment.name),
              success: function(res) {
                wx.showToast({
                  title: '下载完成',
                  icon: 'success'
                });
                // 保存到本地
                wx.saveFile({
                  tempFilePath: res.tempFilePath,
                  success: function(res) {
                    console.log('文件已保存', res.savedFilePath);
                  }
                });
              }
            });
          }
        }
      });
    }
  },
  
  // 获取文件URL（根据实际项目修改）
  getFileUrl: function(filename) {
    // 这里需要根据你的实际文件存储方式返回正确的URL
    // 示例：假设文件存储在云存储中
    //return `https://your-domain.com/attachments/${filename}`;
    
    // 如果是本地项目文件：
    // return `/assets/attachments/${filename}`;
  }

});