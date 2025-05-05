Page({
  data: {
    noticeDetails: [
      "本次校园活动将于下周六在学校操场举行，欢迎各位同学踊跃参加。活动内容丰富，包括体育比赛、文艺表演等。2025年4月1日",
      "本学期考试安排如下：期末考试时间为2025.6.25，各科目考试地点将在考前一周公布，请同学们做好复习准备。2025年5月10日",
      "根据学校安排，本学期假期从2025.2.28至2025.3.3，请各位同学注意假期安全，按时返校。2025年3月1日",
      "图书馆将于[闭馆日期]进行内部维护，期间闭馆，请各位同学提前借阅所需书籍。2025年3月15日",
      "各社团将于下周开始招新，感兴趣的同学可以前往社团招新点了解详情并报名。2025年4月25日"
    ],
    currentDetail: "",
    currentDate: ""
  },

  onLoad: function (options) {
    const index = options.index;
    const detail = this.data.noticeDetails[index];
    const dateMatch = detail.match(/(\d{4}年\d{1,2}月\d{1,2}日)$/);
    if (dateMatch) {
      const originalDate = dateMatch[1];
      // 进行日期格式转换
      const newDate = originalDate.replace(/年/g, '.').replace(/月/g, '.').replace(/日/g, '');
      this.setData({
        currentDetail: detail.replace(dateMatch[0], ""),
        currentDate: newDate
      });
    }
  }
});