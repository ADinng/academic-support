// pages/homework/homework.js
Page({
  data: {
    homeworkList: [
      {
        student: '陈萌',
        major: '网络空间安全',
        grade: '2022届',
        subject: '网络攻防实验一',
        date: '2025-04-10',
        content: `以下是网络攻防实验中信息搜集的分点描述及具体操作：

        ### 网络踩点
        - **Web信息搜索与挖掘**：使用搜索引擎，通过特定关键词搜索目标相关信息。例如，使用“intitle”搜索标题中含有关键词的网页，如“intitle:目标公司名称 招聘信息”，可获取目标公司的招聘岗位，了解其技术栈；用“inurl”搜索网址中含有关键字的网页，如“inurl:admin”，尝试寻找目标网站的管理后台；“intext”可搜索网页内容中出现关键词的网页；“site”能在限定网站内搜索，如“site:目标域名 filetype:pdf”，查找目标网站上的PDF文件。
        - **DNS与IP查询**：利用“whois”命令查询域名注册信息，如在Kali系统中输入“whois sina.com.cn”，可获取注册人、联系方式等。使用“dig”或“nslookup”查询域名对应的IP地址，如“dig sina.com.cn”或“nslookup sina.com.cn”。通过在线IP查询网站，输入IP地址可获取其地理位置等信息。
        - **网络拓扑侦察**：使用“tracert”命令（Windows系统）或“traceroute”命令（Linux系统）跟踪目标地址的IP，如“tracert sina.com.cn”，了解数据包经过的路由路径，构建网络拓扑结构。
        
        ### 网络扫描
        - **端口扫描**：使用Nmap工具进行端口扫描。例如，“nmap -sT -p- 目标IP地址”进行TCP全端口扫描，“nmap -sU -p- 目标IP地址”进行UDP全端口扫描，以确定目标主机开放的端口。
        - **主机发现**：使用“nmap -sP 目标网段”，如“nmap -sP 192.168.1.0/24”，可扫描出该网段内的活跃主机。
        - **漏洞扫描**：利用Nessus开源软件进行漏洞扫描。在Kali系统中安装配置好Nessus后，登录其主界面，点击“新建扫描”，选择扫描类型，输入目标IP地址等信息，开始扫描，可检测出目标主机上的漏洞。
        - **操作系统识别**：使用“nmap -O 目标IP地址”，Nmap可根据扫描结果判断目标主机的操作系统类型和版本。`,
        attachments: [
          { name: '附件1.pdf', type: 'application/pdf', size: 102400 },
          { name: '附件2.txt', type: 'text/plain', size: 1024 }
        ]
      },
      {
        student: '吴绍华',
        major: '软件工程',
        grade: '2023届',
        subject: '专业英语实验一',
        date: '2025-03-22',
        content: `以下是专业英语实验一及具体内容：

        ### 硬件相关词汇
        - **计算机硬件（Computer Hardware）**：构成计算机系统的物理设备集合。中央处理器（Central Processing Unit，简称 CPU）作为计算机的 “大脑”，负责执行指令和处理数据；内存（Memory 或 Random Access Memory，RAM）用于临时存储正在运行的程序和数据，使 CPU 能够快速访问；硬盘（Hard Disk Drive，HDD）或固态硬盘（Solid State Drive，SSD）则是长期存储数据的设备，HDD 通过磁性盘片存储信息，而 SSD 使用闪存芯片，具备更快的读写速度和更高的可靠性 。
        - **软件相关术语**：软件（Software）分为系统软件（System Software）和应用软件（Application Software）。操作系统（Operating System，OS）属于系统软件，如 Windows、Linux、macOS，它管理计算机硬件与软件资源，为用户和应用程序提供操作界面和服务；应用软件则是为满足特定需求开发的程序，像办公软件（Office Software）、图像处理软件（Image Processing Software）和浏览器（Web Browser） 。
        - **网络技术词汇**：
        ### 网络扫描
        - **端口扫描**：使用Nmap工具进行端口扫描。例如，“nmap -sT -p- 目标IP地址”进行TCP全端口扫描，“nmap -sU -p- 目标IP地址”进行UDP全端口扫描，以确定目标主机开放的端口。
        - **主机发现**：使用“nmap -sP 目标网段”，如“nmap -sP 192.168.1.0/24”，可扫描出该网段内的活跃主机。
        - **漏洞扫描**：利用Nessus开源软件进行漏洞扫描。在Kali系统中安装配置好Nessus后，登录其主界面，点击“新建扫描”，选择扫描类型，输入目标IP地址等信息，开始扫描，可检测出目标主机上的漏洞。
        - **操作系统识别**：使用“nmap -O 目标IP地址”，Nmap可根据扫描结果判断目标主机的操作系统类型和版本。`,
        attachments: [
          { name: '附件1.pdf', type: 'application/pdf', size: 102400 },
          { name: '附件2.txt', type: 'text/plain', size: 1024 }
        ]
      }

    ]
  },

  goToHomeworkDetail: function (e) {
    const index = e.currentTarget.dataset.index;
    const homework = this.data.homeworkList[index];
    // 将作业详情存储到全局变量中
    getApp().globalData.currentHomework = homework;
    wx.navigateTo({
      url: '/pages/teacher/homeworkDetail/homeworkDetail'
    });
  }
});