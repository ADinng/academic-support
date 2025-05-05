Page({
  data: {
    notices: [
      { 
        title: "校园活动通知", 
        detailPath: "/pages/student/noticeDetail/noticeDetail?index=0",
        content: "本次校园活动将于下周六在学校操场举行，欢迎各位同学踊跃参加。活动内容丰富，包括体育比赛、文艺表演等。2025年4月1日"
      },
      { 
        title: "考试安排通知", 
        detailPath: "/pages/student/noticeDetail/noticeDetail?index=1",
        content: "本学期考试安排如下：期末考试时间为[具体时间]，各科目考试地点将在考前一周公布，请同学们做好复习准备。2025年5月10日"
      },
      { 
        title: "假期安排通知", 
        detailPath: "/pages/student/noticeDetail/noticeDetail?index=2",
        content: "根据学校安排，本学期假期从[开始日期]至[结束日期]，请各位同学注意假期安全，按时返校。2025年7月1日"
      },
      { 
        title: "图书馆闭馆通知", 
        detailPath: "/pages/student/noticeDetail/noticeDetail?index=3",
        content: "图书馆将于[闭馆日期]进行内部维护，期间闭馆，请各位同学提前借阅所需书籍。2025年6月15日"
      },
      { 
        title: "社团招新通知", 
        detailPath: "/pages/student/noticeDetail/noticeDetail?index=4",
        content: "各社团将于下周开始招新，感兴趣的同学可以前往社团招新点了解详情并报名。2025年4月25日"
      }
    ]
  },

  onLoad: function() {
    const notices = this.data.notices;
    notices.forEach((notice) => {
      const dateMatch = notice.content.match(/(\d{4}年\d{1,2}月\d{1,2}日)$/);
      if (dateMatch) {
        const originalDate = dateMatch[1];
        const newDate = originalDate.replace(/年/g, '.').replace(/月/g, '.').replace(/日/g, '');
        notice.date = newDate;
      } else {
        notice.date = "";
      }
    });
    this.setData({ notices });
  },

  goToNoticeDetail: function (e) {
    const path = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: path,
      success: function (res) {
        console.log("成功跳转到通知详情页面");
      },
      fail: function (err) {
        console.error("跳转失败", err);
      }
    });
  }
});