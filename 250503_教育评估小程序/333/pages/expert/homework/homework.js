Page({
  data: {
      years: ['2022 - 2023', '2023 - 2024', '2024 - 2025', '2025 - 2026'],
      semesters: ['第一学期', '第二学期'],
      courses: ['C语言', 'Python', '数据结构'],
      selectedYearIndex: 0,
      selectedSemesterIndex: 0,
      selectedCourseIndex: 0,
      showHomeworkList: false,
      // 直接列出具体的作业信息，可在下方数组中添加或修改作业数据
      homeworkList: [
          {
              year: '2022 - 2023',
              semester: '第一学期',
              course: 'C语言',
              student: '李书瑶',
              major: '计算机科学与技术',
              grade: '2022届',
              subject: 'C语言实验一',
              date: '2022-09-15',
              content: `一、实验目的
      1．通过实验掌握指针的概念，指针变量的定义和使用。
      2．能正确使用数组的指针和指向数组的指针变量。
      3．能正确使用字符串的指针和指向字符串的指针变量。
      二、实验内容
      1. 输入三个整数，按由小到大的顺序输出。
      #include<stdio.h>
      int main()
      {
        int one(int *a1,int *a2,int *a3);
        int a,b,c,*p1,*p2,*p3;
        printf("请任意输入三个整数：\n");
        scanf("%d%d%d",&a,&b,&c);
        p1=&a;
        p2=&b;
        p3=&c;
        one(p1,p2,p3);
        printf("%d%d%d",a,b,c); 
      }
      int one(int *a1,int *a2,int *a3)
      {
        int two(int *aq1,int *aq2);
        if(*a1>*a2)
        {
          two(a1,a2);
        }
        if(*a1>*a3)
        {
          two(a1,a3); 
        }
        if(*a2>*a3)
        {
          two(a2,a3);
        }
      }
      int two(int *aq1,int *aq2)
      {
        int temp;
        temp=*aq1;
        *aq1=*aq2;
        *aq2=temp;
      }
       
      
      2..输入10个整数,将其中最小的数与第1个数对换,把最大的数与最后一个数对换。写3个函数:①输入10个数;②进行处理;③输出10个数。
      #include<stdio.h>
      void input(int* number)
      {
        printf("请输入10个数，用空格分隔：\n");
        for (int i = 0; i < 10; i++)
        {
          scanf("%d", &number[i]);
        }
      }
      void max_min_value(int* number)
      {
        int* max, * min, * p, temp;
        max = min = number;
        for (p = number + 1; p < number + 10; p++)
          if (*p < *min)min = p;
        temp = number[0]; number[0] = *min; *min = temp;
        for (p = number + 1; p < number + 10; p++)
          if (*p > *max)max = p;
        temp = number[9]; number[9] = *max; *max = temp;
      }
      void output(int* number)
      {
        int* p;
        printf("经过处理，目前这10个数的顺序为：\n");
        for (p = number; p < number + 10; p++)
          printf("%d ", *p);
      }
      int main()
      {
        int number[10];
        input(number);
        max_min_value(number);
        output(number);
        return 0;
      }
      三、实验小结
通过本次实验，我掌握了给指针变量赋值时要将一份数据的地址献给它不能直接赋给一个整数例如int*p=1000；是没有意义的使用过程中一般会导致程序崩溃。

      `, // 此处可填入具体作业内容
              attachments: [
                  { name: 'C语言实验一_李书瑶.pdf', type: 'application/pdf', size: 150000 },
                  { name: '源代码.zip', type: 'application/zip', size: 200000 }
              ]
          },
          {
              year: '2023 - 2024',
              semester: '第二学期',
              course: 'Python',
              student: '何明煦',
              major: '软件工程',
              grade: '2023届',
              subject: 'Python爬虫实验',
              date: '2024-03-20',
              content: '请在此处填入何明煦同学关于Python爬虫实验的具体作业内容', // 此处可填入具体作业内容
              attachments: [
                  { name: 'Python爬虫实验_何明煦.pdf', type: 'application/pdf', size: 180000 },
                  { name: '源代码.zip', type: 'application/zip', size: 220000 }
              ]
          }
      ]
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

  bindCourseChange: function (e) {
      this.setData({
          selectedCourseIndex: e.detail.value
      });
  },

  showHomeworkList: function () {
      const year = this.data.years[this.data.selectedYearIndex];
      const semester = this.data.semesters[this.data.selectedSemesterIndex];
      const course = this.data.courses[this.data.selectedCourseIndex];

      // 根据选择的条件过滤作业列表
      const filteredHomeworkList = this.data.homeworkList.filter((homework) => {
          return homework.year === year && homework.semester === semester && homework.course === course;
      });

      this.setData({
          homeworkList: filteredHomeworkList,
          showHomeworkList: true
      });
  },

  goToHomeworkDetail: function (e) {
      const index = e.currentTarget.dataset.index;
      const homework = this.data.homeworkList[index];
      getApp().globalData.currentHomework = homework;
      wx.navigateTo({
          url: '/pages/teacher/homeworkDetail/homeworkDetail'
      });
  }
});