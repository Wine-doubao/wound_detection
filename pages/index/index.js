// index.js
// 获取应用实例
import * as echarts from '../../ec-canvas/echarts'
const app = getApp()

// 时间轴
function setOption(chart, temp, ph) {
  let i;
  var arr = ['00:00', '02:00', '04:00','06:00','08:00','10:00'];
  var text = [];
  for(i=0;i<temp.length/2;i++)
    text.push('温度：'+ temp[i] + '°C\npH：'+ ph[i]);
  var option = {
    baseOption: {
      title: {
        text: '时间轴',
        textStyle: {
          color: '#1CBBB4'
        }
      },
      timeline: {
        axisType: 'category',
        // autoPlay: true,
        // playInterval: 1000,
        left: 0,
        right: 0,
        data: text,
        label: { //时间轴下标
          formatter: function (s) {
            return arr[(i++) % (arr.length)];
          },
          interval: 1, //下标间隔
        },
        symbol: "circle",
        symbolSize: 8,
        itemStyle: { //图形样式
          color: "#1C72B4"
        },
        checkpointStyle: { //当前项样式
          symbol: "diamond",
          symbolSize: 12,
          color: "#3DABFF",
          boderColor: "rgba(28,114,180,.5)",
        },
        controlStyle: { //控制按钮样式
          showPlayBtn: false,
          borderColor: "#3DABFF",
          itemSize: 15,
          itemGap: 8
        },
      },
      tooltip: {},
      calculable: true,
    }
  };
  chart.setOption(option);
}

function setOption2(chart,temp,ph) {
  let i;
  var arr = ['12:00', '14:00', '16:00','18:00','20:00','22:00'];
  var text = [];
  for(i=temp.length/2;i<temp.length;i++)
    text.push('温度：'+ temp[i] + '°C\npH：'+ ph[i]);
  var option = {
    baseOption: {
      timeline: {
        axisType: 'category',
        // autoPlay: true,
        // playInterval: 1000,
        left: 0,
        right: 0,
        top: 0,
        data: text,
        label: { //时间轴下标
          formatter: function (s) {
            return arr[(i++) % (arr.length)];
          },
          interval: 1, //下标间隔
          position: 'bottom',
        },
        symbol: "circle",
        symbolSize: 8,
        itemStyle: { //图形样式
          color: "#1C72B4"
        },
        checkpointStyle: { //当前项样式
          symbol: "diamond",
          symbolSize: 12,
          color: "#3DABFF",
          boderColor: "rgba(28,114,180,.5)",
        },
        controlStyle: { //控制按钮样式
          showPlayBtn: false,
          borderColor: "#3DABFF",
          itemSize: 15,
          itemGap: 8
        },
      },
      tooltip: {},
      calculable: true,
    }
  };
  chart.setOption(option);
}

// 温度折线图
function setOption3(chart,temp, tempArr) {
  var option = {
    title: {
      text: '温度监测情况',
      textStyle: {
        color: '#1CBBB4'
      }
    },
    tooltip: {
      trigger: "axis"
    },
    grid: { //设置图表在区域的哪个位置
      left: 50,
      right: 50,
    },
    xAxis: {
      name: "时间",
      type: 'category',
      data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
      axisLine: { //箭头
        show: true,
        symbol: ['none', 'arrow'],
        symbolOffset: 12,
      },
      axisTick: { //刻度
        show: false,
      },
      axisLabel: {
        interval: 5, //x隔多少显示刻度
        formatter: function (s) {
          return s;
        }
      }
    },
    yAxis: {
      type: 'value',
      min: tempArr[0],
      max: tempArr[1],
      axisLine: { //箭头
        show: true,
        symbol: ['none', 'arrow'],
        symbolOffset: 12,
      },
    },
    series: [{
      name: "温度",
      type: "line",
      data: temp,
      markPoint: {
        data: [{
            type: 'max',
            name: '最大值'
          },
          {
            type: 'min',
            name: '最小值'
          }
        ]
      },
      markLine: {
        data: [{
          type: 'average',
          name: '平均值'
        }]
      }
    }]
  }
  chart.setOption(option);
}

// pH折线图
function setOption4(chart,ph, phArr) {
  var option = {
    title: {
      text: 'pH监测情况',
      textStyle: {
        color: '#1CBBB4'
      }
    },
    tooltip: {
      trigger: "axis"
    },
    grid: { //设置图表在区域的哪个位置
      left: 50,
      right: 50,
    },
    xAxis: {
      name: "时间",
      type: 'category',
      data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
      axisLine: { //箭头
        show: true,
        symbol: ['none', 'arrow'],
        symbolOffset: 12,
      },
      axisTick: { //刻度
        show: false,
      },
      axisLabel: {
        interval: 5, //x隔多少显示刻度
        formatter: function (s) {
          return s;
        }
      }
    },
    yAxis: {
      type: 'value',
      // axisLabel: {
      //   formatter: '{value}'
      // },
      min: phArr[0],
      max: phArr[1],
      axisLine: { //箭头
        show: true,
        symbol: ['none', 'arrow'],
        symbolOffset: 12,
      },
    },
    series: [{
      name: "pH",
      type: "line",
      data: ph,
      markPoint: {
        data: [{
            type: 'max',
            name: '最大值'
          },
          {
            type: 'min',
            name: '最小值'
          }
        ]
      },
      markLine: {
        data: [{
          type: 'average',
          name: '平均值'
        }]
      }
    }]
  }
  chart.setOption(option);
}

Page({
  data: {
    ecOne: {
      lazyLoad: true
    },
    ecTwo: {
      lazyLoad: true
    },
    ecThree: {
      lazyLoad: true
    },
    ecFour: {
      lazyLoad: true
    },
    tempVal: '',
    phVal: '',
    statusVal: '',
    timer: '', //定时器，一天更新
    hourtimer: '',//一小时更新
  },
  // onLoad: function (options) {
    
  // },
  onReady: function () { //这一步是一定要注意的
    this.oneComponent = this.selectComponent('#mychart-one');
    this.twoComponent = this.selectComponent('#mychart-two');
    this.threeComponent = this.selectComponent('#mychart-three');
    this.fourComponent = this.selectComponent('#mychart-four');
    var _this = this;
    this.getOneOption();
    this.setData({ 
      //每隔一天刷新一次
      timer: setInterval(function () {
        _this.getOneOption();
      }, 86400000),
    })
    this.update();
  },
  onUnload: function () {
    clearInterval(this.data.timer);
    clearInterval(this.data.hourtimer);
  },
  init_one: function (temp, ph) { //初始化第一个图表
    this.oneComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: 2.5
      });
      setOption(chart, temp, ph)
      this.chart = chart;
      return chart;
    });
  },
  init_two: function (temp, ph) { //初始化第二个图表
    this.twoComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: 2.5
      });
      setOption2(chart, temp, ph)
      this.chart = chart;
      return chart;
    });
  },
  init_three: function (temp, tempArr) { //初始化第三个图表
    this.threeComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: 2.5
      });
      setOption3(chart, temp, tempArr)
      this.chart = chart;
      return chart;
    });
  },
  init_four: function (ph, phArr) { //初始化第四个图表
    this.fourComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: 2.5
      });
      setOption4(chart, ph, phArr)
      this.chart = chart;
      return chart;
    });
  },
  getOneOption: function () { //这一步其实就要给图表加上数据
    var _this = this;
    wx.request({
      url: 'https://homyit.cn/api/getInfo', //你请求数据的接口地址
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        let temp = [],ph = [], tempArr = [], phArr = [];
        // console.log(res);
        // 处理温度和ph值范围
        let temprange = res.data.data.indexes[0].range.split('：');
        temprange = temprange[1].split('-');
        tempArr.push(temprange[0]);
        temprange = temprange[1].split('℃');
        tempArr.push(temprange[0]);
        // console.log(temprange);
        let phrange = res.data.data.indexes[1].range.split('：');
        phrange = phrange[1].split('-');
        phArr.push(phrange[0]);
        phArr.push(phrange[1]);

        res = res.data.data.datas;
        for (let i = 0; i < res.length; i++) {
          temp.push(res[i].temperature);
          ph.push(res[i].phValue);
        }
        _this.setData({
          tempArray:temp,
          phArray: ph
        });
        // console.log(_this.data.tempArray);
        _this.init_one(temp, ph);
        _this.init_two(temp, ph);
        _this.init_three(temp, tempArr);
        _this.init_four(ph, phArr);
      }
    })
  },
  update:function (){
    var _this = this;
    wx.request({
      url: 'https://homyit.cn/api/getInfo', //你请求数据的接口地址
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        let temp = [],ph = [];
        let i=0;
        res = res.data.data.datas;
        for (let i = 0; i < res.length; i++) {
          temp.push(res[i].temperature);
          ph.push(res[i].phValue);
        }
        _this.setData({
          tempVal: temp[i],
          phVal: ph[i++],
          hourtimer: setInterval(function () {
            _this.setData({
              tempVal: temp[i],
              phVal: ph[i++],
            })
          }, 3600000),
        });
        // 判断状态
        if(_this.data.phVal>6.5 || _this.data.tempVal>36){
          _this.setData({
            statusVal: '异常',
          })
        }else{
          _this.setData({
            statusVal: '良好',
          })
        }
      }
    })
  }
})