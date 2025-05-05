// pages/expert/dataVisualization/dataVisualization.js
import WxCharts from '../../../libs/wxcharts-min.js';

let barChart = null;
let radarChart = null;
let compareChart = null;
let timelineChart = null;

Page({
  data: {
    windowWidth: 320
  },

  onLoad() {
    try {
      const res = wx.getSystemInfoSync();
      this.setData({ windowWidth: res.windowWidth });
    } catch (e) {
      console.error('获取系统信息失败', e);
    }
  },

  onReady() {
    this.drawBarChart();
    this.drawRadarChart();
    this.drawCompareChart();
    this.drawTimelineChart();
  },

  drawBarChart() {
    barChart = new WxCharts({
      canvasId: 'barChart',
      type: 'column',
      categories: ['教学设备', '课程资源', '平台系统'],
      series: [{
        name: '数量',
        data: [120, 95, 150]
      }],
      yAxis: {
        title: '数量（个）',
        min: 0
      },
      width: this.data.windowWidth - 40,
      height: 200
    });
  },

  drawRadarChart() {
    radarChart = new WxCharts({
      canvasId: 'radarChart',
      type: 'radar',
      categories: ['博士', '硕士', '讲师', '副教授', '教授'],
      series: [{
        name: '教师结构',
        data: [10, 20, 30, 15, 5]
      }],
      width: this.data.windowWidth - 40,
      height: 200
    });
  },

  drawCompareChart() {
    compareChart = new WxCharts({
      canvasId: 'compareChart',
      type: 'column',
      categories: ['计科', '软工', '网安', '物联网'],
      series: [{
        name: '学生人数',
        data: [130, 110, 95, 85] // 示例数据，你可按需调整
      }],
      yAxis: {
        title: '人数',
        min: 0
      },
      width: this.data.windowWidth - 40,
      height: 200
    });
  },
  
  drawTimelineChart() {
    timelineChart = new WxCharts({
      canvasId: 'timelineChart',
      type: 'line',
      categories: ['2019', '2020', '2021', '2022', '2023'],
      series: [{
        name: '课程开设数',
        data: [60, 70, 90, 85, 95]
      }],
      yAxis: {
        title: '课程数',
        min: 0
      },
      width: this.data.windowWidth - 40,
      height: 200
    });
  }
});

