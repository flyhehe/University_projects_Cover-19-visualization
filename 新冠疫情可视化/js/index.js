// 时间模块
var t = null;
var dt = 0;
weekName = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", ];
time();
t = setInterval(time, 1000);

function time() {
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var weekday = weekName[dt.getDay()];
    var h = dt.getHours();
    h = h < 10 ? '0' + h : h;
    var m = dt.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = dt.getSeconds();
    s = s < 10 ? '0' + s : s;
    document.querySelector(".showTime").innerHTML = y + "年" + mt + "月" + day + "日" + weekday + '&nbsp&nbsp' + h + ":" + m + ":" + s;
}

//时间模块结束

// 左侧可视化图表模块
// 左一流图，全国数据——全国感染，全国治愈，全国死亡
var myChart_lt_one = echarts.init(document.getElementById('chart_lt_one'));
(function() {

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: 'rgba(0,0,0,0.2)',
                    width: 1,
                    type: 'solid'
                }
            }
        },

        legend: {
            data: ['现有确诊', '现有治愈', '现有死亡']
        },

        singleAxis: {
            left: "5%",
            right: "5%",
            bottom: "18%",
            axisTick: {},
            axisLabel: {},
            type: 'time',
            axisPointer: {
                animation: true,
                label: {
                    show: true
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    opacity: 0.2
                }
            }
        },

        series: [{
            type: 'themeRiver',

            // 这个是修改的流图样式的颜色
            // color: ["#0080ff", "#4cd5ce"],
            emphasis: {
                itemStyle: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            },
            label: {
                fontSize: 10
            },
            data: [

                ['2020/11/08', 10, '现有确诊'],
                ['2020/11/09', 15, '现有确诊'],
                ['2020/11/10', 35, '现有确诊'],
                ['2020/11/11', 38, '现有确诊'],
                ['2020/11/12', 22, '现有确诊'],
                ['2020/11/13', 16, '现有确诊'],
                ['2020/11/14', 7, '现有确诊'],
                ['2020/11/15', 2, '现有确诊'],
                ['2020/11/16', 17, '现有确诊'],
                ['2020/11/17', 33, '现有确诊'],
                ['2020/11/18', 40, '现有确诊'],
                ['2020/11/19', 32, '现有确诊'],
                ['2020/11/20', 26, '现有确诊'],
                ['2020/11/21', 35, '现有确诊'],
                ['2020/11/22', 40, '现有确诊'],
                ['2020/11/23', 32, '现有确诊'],
                ['2020/11/24', 26, '现有确诊'],
                ['2020/11/25', 22, '现有确诊'],
                ['2020/11/26', 16, '现有确诊'],
                ['2020/11/27', 22, '现有确诊'],
                ['2020/11/28', 10, '现有确诊'],

                ['2020/11/08', 10, '现有治愈'],
                ['2020/11/09', 15, '现有治愈'],
                ['2020/11/10', 35, '现有治愈'],
                ['2020/11/11', 38, '现有治愈'],
                ['2020/11/12', 22, '现有治愈'],
                ['2020/11/13', 16, '现有治愈'],
                ['2020/11/14', 7, '现有治愈'],
                ['2020/11/15', 2, '现有治愈'],
                ['2020/11/16', 17, '现有治愈'],
                ['2020/11/17', 33, '现有治愈'],
                ['2020/11/18', 40, '现有治愈'],
                ['2020/11/19', 32, '现有治愈'],
                ['2020/11/20', 26, '现有治愈'],
                ['2020/11/21', 35, '现有治愈'],
                ['2020/11/22', 4, '现有治愈'],
                ['2020/11/23', 32, '现有治愈'],
                ['2020/11/24', 26, '现有治愈'],
                ['2020/11/25', 22, '现有治愈'],
                ['2020/11/26', 16, '现有治愈'],
                ['2020/11/27', 22, '现有治愈'],
                ['2020/11/28', 10, '现有治愈'],

                ['2020/11/08', 10, '现有死亡'],
                ['2020/11/09', 15, '现有死亡'],
                ['2020/11/10', 35, '现有死亡'],
                ['2020/11/11', 38, '现有死亡'],
                ['2020/11/12', 22, '现有死亡'],
                ['2020/11/13', 16, '现有死亡'],
                ['2020/11/14', 7, '现有死亡'],
                ['2020/11/15', 2, '现有死亡'],
                ['2020/11/16', 17, '现有死亡'],
                ['2020/11/17', 33, '现有死亡'],
                ['2020/11/18', 4, '现有死亡'],
                ['2020/11/19', 32, '现有死亡'],
                ['2020/11/20', 26, '现有死亡'],
                ['2020/11/21', 35, '现有死亡'],
                ['2020/11/22', 40, '现有死亡'],
                ['2020/11/23', 32, '现有死亡'],
                ['2020/11/24', 26, '现有死亡'],
                ['2020/11/25', 22, '现有死亡'],
                ['2020/11/26', 16, '现有死亡'],
                ['2020/11/27', 22, '现有死亡'],
                ['2020/11/28', 10, '现有死亡']
            ],
            label: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    width: 1
                }
            }
        }]
    };
    // 3. 把配置项给实例对象
    myChart_lt_one.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart_lt_one.resize();
    });
})();

var myChart_lt_two = echarts.init(document.getElementById('chart_lt_two'));
(function() {
    var sData = [{
        name: "大白",
        value: "40000"
    }, {
        name: "长大",
        value: "53000"
    }, {
        name: "杜洛克",
        value: "40000"
    }, {
        name: "约克猪",
        value: "10000"
    }];
    // var legendData1 = ["大白", "长大", "杜洛克", "约克猪"]
    // var legendData2 = ["二元", "三元", "大长","PIC"]

    var legendData1 = [];
    var legendData2 = [];
    for (var i = 0; i < sData.length; i++) {
        var halfLength = Math.ceil(sData.length / 2);
        var itemName = sData[i].name;
        if (i < halfLength) {
            legendData1.push(itemName)
        } else {
            legendData2.push(itemName)
        }
    }
    var colorList = ['#4400CC', '#00AACC', '#9BBF30', '#E60000', ];
    option = {
        backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#000F44' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#000B3B' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        title: {
            text: '',
            // text: '品种',
            x: '50%',
            y: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            borderColor: 'rgba(255,255,255,.3)',
            backgroundColor: 'rgba(13,5,30,.6)',
            borderWidth: 1,
            padding: 5,
            formatter: function(parms) {
                var str = parms.marker + "" + parms.data.name + "</br>" +
                    "数量：" + parms.data.value + "头</br>" +
                    "占比：" + parms.percent + "%";
                return str;
            }
        },
        legend: [{
            type: "scroll",
            orient: 'vertical',
            icon: 'square',
            right: '8%',
            align: 'left',
            top: 'center',
            itemGap: 20,
            // bottom:'50%',
            textStyle: {
                color: '#AAAAAA'
            },
            data: legendData1
        }, {
            type: "scroll",
            orient: 'vertical',
            icon: 'square',
            right: '18%',
            align: 'left',
            top: 'center',
            itemGap: 20,
            // bottom:'50%',
            textStyle: {
                color: '#AAAAAA'
            },
            data: legendData2
        }],
        series: [{
                type: 'pie',
                z: 4,
                center: ['60%', '50%'],
                radius: ['49%', '55%'],
                clockwise: true,
                avoidLabelOverlap: true,
                hoverOffset: 15,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        }
                    }
                },
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{a|{b}：{d}%}\n{hr|}',
                    rich: {
                        hr: {
                            backgroundColor: 't',
                            borderRadius: 3,
                            width: 3,
                            height: 3,
                            padding: [3, 3, 0, -12]
                        },
                        a: {
                            padding: [-30, 15, -20, 15]
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 20,
                        length2: 30,
                        lineStyle: {
                            width: 1
                        }
                    }
                },
                data: []
            }, {
                name: '第一层环',
                type: 'pie',
                z: 5,
                tooltip: {
                    show: true
                },
                center: ['40%', '50%'],
                radius: ['15%', '0%'],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        },
                        opacity: 1,
                        shadowBlur: 10
                    },

                },
                //         itemStyle: {
                //   opacity: 1,
                //   shadowBlur: 20.5
                // }
                label: {
                    show: false
                },
                data: sData
            }, {
                name: '第二层环',
                type: 'pie',
                z: 4,
                tooltip: {
                    show: true
                },
                center: ['40%', '50%'],
                radius: ['25%', '15%'],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        },
                        opacity: 1,
                        shadowBlur: 10
                    }
                },
                label: {
                    show: false
                },
                data: sData
            }, {
                name: '第三层环',
                type: 'pie',
                z: 3,
                tooltip: {
                    show: true
                },
                center: ['40%', '50%'],
                radius: ['35%', '25%'],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        },
                        opacity: 1,
                        shadowBlur: 10
                    }
                },
                label: {
                    show: false
                },
                data: sData
            },
            {
                name: '第四层环',
                type: 'pie',
                z: 2,
                tooltip: {
                    show: true
                },
                center: ['40%', '50%'],
                radius: ['45%', '35%'],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        },
                        opacity: 1,
                        shadowBlur: 10
                    },

                },
                label: {
                    show: false,
                },
                data: sData
            },
            {
                name: '第四层环',
                type: 'pie',
                z: 1,
                tooltip: {
                    show: true
                },
                center: ['40%', '50%'],
                radius: ['55%', '45%'],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        },
                        opacity: 1,
                        shadowBlur: 10
                    },

                },
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{a|{b}：{d}%}\n{hr|}',
                    rich: {
                        hr: {
                            backgroundColor: 't',
                            borderRadius: 3,
                            width: 3,
                            height: 3,
                            padding: [3, 3, 0, -12]
                        },
                        a: {
                            padding: [-30, 5, -20, 5]
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 10,
                        length2: 20,
                        lineStyle: {
                            width: 1
                        }
                    }
                },
                data: sData
            }
        ]
    };
    // 3. 把配置项给实例对象
    myChart_lt_two.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart_lt_two.resize();
    });
})();