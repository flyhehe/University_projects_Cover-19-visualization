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
    // document.querySelector(".showTime").innerHTML = y + "年" + mt + "月" + day + "日" + weekday + '&nbsp&nbsp' + h + ":" + m + ":" + s;
    document.querySelector(".showTime").innerHTML = 2020 + "年" + 10 + "月" + 8 + "日" + "星期四" + '&nbsp&nbsp' + 22 + ":" + 15 + ":" + 47;

}



//时间模块结束


//数据储存模块
// 左一 顺序天数 新增确诊 当天治愈 当天死亡
var left_one_data = [
    [21, 18, 0],
    [19, 15, 0],
    [20, 17, 0],
    [25, 19, 0],
    [24, 12, 0],
    [18, 25, 0],
    [23, 25, 0],
    [41, 23, 0],
    [11, 16, 0]
];

// 十月八号当日 现存 + 康复 + 死亡 + 现存确诊，前八排序，用于左三
var today18_num = [
    ["香港", 166, 5, 0],
    ["上海", 58, 5, 0],
    ["四川", 42, 3, 0],
    ["台湾", 30, 1, 0],
    ["广东", 22, 6, 0],
    ["陕西", 26, 0, 0],
    ["福建", 14, 0, 0],
    ["浙江", 10, 0, 0]
];

// 十月十八号的疫情变化情况,累计确诊，累计治愈，累计死亡
var LeiJi_num = [24132, 23487, 4750];
// 这个是控制原点大小
var avg = 1000;
// 这个是控制线条粗细
var avglinks = 2000;

var shengfen = [
    ["香港", [5087, 105, 4827, 8, 20, 0, 155],
        [5097, 105, 4837, 10, 10, 0, 155],
        [5104, 105, 4843, 7, 6, 0, 156],
        [5108, 105, 4849, 4, 6, 0, 154],
        [5113, 105, 4861, 5, 12, 0, 147],
        [5124, 105, 4864, 11, 3, 0, 155],
        [5132, 105, 4875, 8, 11, 0, 152],
        [5124, 105, 4885, 11, 10, 0, 134],
        [5124, 105, 4890, 18, 5, 0, 129]
    ],
    ["上海", [1006, 7, 947, 7, 5, 0, 52]
        [1007, 7, 950, 1, 3, 0, 50],
        [1011, 7, 953, 4, 3, 0, 51],
        [1012, 7, 955, 1, 2, 0, 50],
        [1022, 7, 957, 10, 2, 0, 58],
        [1024, 7, 958, 2, 1, 0, 59],
        [1025, 7, 960, 1, 2, 0, 58],
        [1030, 7, 966, 5, 6, 0, 57],
        [1036, 7, 971, 6, 5, 0, 58],

    ],
    ["新疆", [902, 3, 899, 0, 0, 0, 0],
        [902, 3, 899, 0, 0, 0, 0],
        [902, 3, 899, 0, 0, 0, 0],
        [902, 3, 899, 0, 0, 0, 0],
        [902, 3, 899, 0, 0, 0, 0],
        [902, 3, 899, 0, 0, 0, 0],
        [902, 3, 899, 0, 0, 0, 0],
        [902, 3, 899, 0, 0, 0, 0],
        [902, 3, 899, 0, 0, 0, 0],
    ],
    ["四川", [693, 3, 663, 1, 3, 0, 27],
        [696, 3, 663, 3, 0, 0, 30],
        [698, 3, 663, 2, 0, 0, 32],
        [701, 3, 663, 3, 0, 0, 35],
        [704, 3, 663, 3, 0, 0, 38],
        [707, 3, 664, 3, 1, 0, 40],
        [710, 3, 665, 3, 1, 0, 42],
        [713, 3, 665, 3, 0, 0, 45],
        [713, 3, 668, 0, 3, 0, 42],
    ],
    ["台湾"

    ],
];

// 数据储存模块结束


var bingli = ['确诊病例', '康复病例', '死亡病例'];
// 左侧可视化图表模块
// 左一流图，全国数据—— 全国现存确诊，全国治愈，全国死亡
var myChart_lt_one = echarts.init(document.getElementById('chart_lt_one'));
(function() {

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    width: 4,
                    type: 'solid',
                }
            }
        },

        legend: {
            data: ['当日确诊', '当日治愈', '当日死亡'],
            textStyle: {
                color: '#fff',
            },
        },

        singleAxis: {
            left: "5%",
            right: "5%",
            bottom: "18%",
            top: "10%",
            axisTick: {
                color: '#fff',
            },
            axisLabel: {
                color: '#fff',
            },
            type: 'time',
            axisPointer: {
                animation: true,
                label: {
                    show: true,
                    color: '#fff',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#fff',
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

                ['2020/09/30', left_one_data[0][0], '当日确诊'],
                ['2020/10/01', left_one_data[1][0], '当日确诊'],
                ['2020/10/02', left_one_data[2][0], '当日确诊'],
                ['2020/10/03', left_one_data[3][0], '当日确诊'],
                ['2020/10/04', left_one_data[4][0], '当日确诊'],
                ['2020/10/05', left_one_data[5][0], '当日确诊'],
                ['2020/10/06', left_one_data[6][0], '当日确诊'],
                ['2020/10/07', left_one_data[7][0], '当日确诊'],
                ['2020/10/08', left_one_data[8][0], '当日确诊'],



                ['2020/09/30', left_one_data[0][1], '当日治愈'],
                ['2020/10/01', left_one_data[1][1], '当日治愈'],
                ['2020/10/02', left_one_data[2][1], '当日治愈'],
                ['2020/10/03', left_one_data[3][1], '当日治愈'],
                ['2020/10/04', left_one_data[4][1], '当日治愈'],
                ['2020/10/05', left_one_data[5][1], '当日治愈'],
                ['2020/10/06', left_one_data[6][1], '当日治愈'],
                ['2020/10/07', left_one_data[7][1], '当日治愈'],
                ['2020/10/08', left_one_data[8][1], '当日治愈'],


                ['2020/09/30', left_one_data[0][2], '当日死亡'],
                ['2020/10/01', left_one_data[1][2], '当日死亡'],
                ['2020/10/02', left_one_data[2][2], '当日死亡'],
                ['2020/10/03', left_one_data[3][2], '当日死亡'],
                ['2020/10/04', left_one_data[4][2], '当日死亡'],
                ['2020/10/05', left_one_data[5][2], '当日死亡'],
                ['2020/10/06', left_one_data[6][2], '当日死亡'],
                ['2020/10/07', left_one_data[7][2], '当日死亡'],
                ['2020/10/08', left_one_data[8][2], '当日死亡'],

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
    var color = ['#FC4567', '#2F8DF4', '#C25EC4', '#325478']

    option = {
        color: color,
        // backgroundColor: '#0A173B',
        title: {
            text: '',
            left: 'center',
            top: '50%',
            textStyle: {
                fontSize: 22,
                color: '#fff',
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            right: 2,
            top: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 8
            }
        },
        series: [{
                //1
                type: 'pie',
                z: 5,
                roseType: 'radius',
                radius: ['10%', '40%'],
                center: ['40%', '55%'],
                data: [{
                        value: (left_one_data[8][0] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[0]
                    }, {
                        value: (left_one_data[8][1] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[1]
                    },
                    {
                        value: (left_one_data[8][2] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[2]
                    },
                ],
                minShowLabelAngle: 15,
                label: {
                    show: false,

                },
                labelLine: {

                    lineStyle: {
                        color: '#fff'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    opacity: 1,

                }
            },
            //2
            {
                type: 'pie',
                z: 4,
                roseType: 'radius',
                radius: ['10%', '50%'],
                center: ['40%', '55%'],
                data: [{
                        value: (left_one_data[8][0] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[0]
                    }, {
                        value: (left_one_data[8][1] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[1]
                    },
                    {
                        value: (left_one_data[8][2] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[2]
                    },
                ],
                minShowLabelAngle: 15,
                label: {
                    show: false,

                },
                labelLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    opacity: 1,

                }
            },
            //3
            {
                type: 'pie',
                z: 3,
                roseType: 'radius',
                radius: ['10%', '60%'],
                center: ['40%', '55%'],
                data: [{
                        value: (left_one_data[8][0] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[0]
                    }, {
                        value: (left_one_data[8][1] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[1]
                    },
                    {
                        value: (left_one_data[8][2] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[2]
                    },
                ],
                minShowLabelAngle: 15,
                label: {
                    show: false,

                },
                labelLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    opacity: 1,

                }
            },
            //4
            {
                type: 'pie',
                z: 2,
                roseType: 'radius',
                radius: ['10%', '70%'],
                center: ['40%', '55%'],
                data: [{
                        value: (left_one_data[8][0] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[0]
                    }, {
                        value: (left_one_data[8][1] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[1]
                    },
                    {
                        value: (left_one_data[8][2] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[2]
                    },
                ],
                minShowLabelAngle: 15,
                label: {
                    show: false,

                },
                labelLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    opacity: 1,

                }
            }, {
                type: 'pie',
                z: 1,
                roseType: 'radius',
                radius: ['10%', '80%'],
                center: ['40%', '55%'],
                data: [{
                        value: (left_one_data[8][0] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[0]
                    }, {
                        value: (left_one_data[8][1] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[1]
                    },
                    {
                        value: (left_one_data[8][2] / (left_one_data[8][0] + left_one_data[8][1] + left_one_data[8][2])).toFixed(2),
                        name: bingli[2]
                    }
                ],
                minShowLabelAngle: 0.00,
                label: {
                    normal: {
                        formatter: '{font|{b}}\n{hr|}\n{font|{d}%}',
                        rich: {
                            font: {
                                fontSize: 8,
                                padding: [5, 0],
                                color: '#fff'
                            },
                            hr: {
                                height: 0,
                                borderWidth: 1,
                                width: '100%',
                                borderColor: '#fff'
                            }
                        }
                    },
                },
                labelLine: {
                    length: 2,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    opacity: 1,

                },

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

var myChart_lt_three = echarts.init(document.getElementById('chart_lt_three'));
(function() {
    // app.title = '堆叠条形图';
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                color: '#fff',
            }
        },
        legend: {
            data: ['确诊病例', '康复病例', '死亡病例'],
            textStyle: {
                color: '#fff',
            },
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            top: '15%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            max: 200,
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                },
            },
        },
        xAxis: {
            type: 'category',
            //前八省份
            data: [today18_num[0][0],
                today18_num[1][0],
                today18_num[2][0],
                today18_num[3][0],
                today18_num[4][0],
                today18_num[5][0],
                today18_num[6][0],
                today18_num[7][0]
            ],
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                },
            },
        },
        series: [{
                name: '确诊病例',
                type: 'bar',
                stack: '总量',
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: '#06d3cd',
                        barBorderRadius: [0, 0, 0, 0],
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight',
                        color: "#000",
                        fontSize: 6
                    }
                },
                z: 20,
                data: [
                    today18_num[0][1],
                    today18_num[1][1],
                    today18_num[2][1],
                    today18_num[3][1],
                    today18_num[4][1],
                    today18_num[5][1],
                    today18_num[6][1],
                    today18_num[7][1]
                ],
            },
            {
                name: '康复病例',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#ebe806',
                        shadowBlur: [0, 0, 0, 0],
                        shadowColor: '#ebe806',
                        barBorderRadius: [0, 0, 0, 0],
                        shadowOffsetY: 0,
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight',
                        color: "#000",
                        fontSize: 6
                    }
                },
                z: 15,
                data: [
                    today18_num[0][2],
                    today18_num[1][2],
                    today18_num[2][2],
                    today18_num[3][2],
                    today18_num[4][2],
                    today18_num[5][2],
                    today18_num[6][2],
                    today18_num[7][2]
                ],
            },
            {
                name: '死亡病例',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#ff5624',
                        barBorderRadius: [0, 0, 0, 0],

                        shadowBlur: [0, 0, 0, 40],
                        shadowColor: '#ff5624',
                        shadowOffsetY: 0,
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight',
                        color: "#000",
                        fontSize: 6
                    }
                },
                z: 10,
                data: [
                    today18_num[0][3],
                    today18_num[1][3],
                    today18_num[2][3],
                    today18_num[3][3],
                    today18_num[4][3],
                    today18_num[5][3],
                    today18_num[6][3],
                    today18_num[7][3]
                ],
            },
            // {
            //     name: 'D级门店',
            //     type: 'bar',
            //     stack: '总量',
            //     itemStyle: {
            //         normal: {
            //             color: '#C12096',
            //             barBorderRadius: [20, 20, 0, 0],

            //             shadowBlur: [0, 0, 0, 40],
            //             shadowColor: '#C12096',
            //             shadowOffsetY: 8,
            //         }
            //     },
            //     label: {
            //         normal: {
            //             show: true,
            //             position: 'insideRight',
            //             color: "#000",
            //             fontSize: 4
            //         }
            //     },
            //     z: 5,
            //     data: [160, 152, 141, 274, 210, 110, 100, 187]
            // },
            // { // 灰色背景柱状图
            //     type: 'bar',
            //     barGap: '-100%',
            //     barWidth: 15,
            //     itemStyle: {
            //         normal: {
            //             color: '#ccc',
            //             opacity: '0',
            //             barBorderRadius: [0, 0, 0, 0],
            //         }
            //     },
            //     z: -10,
            //     data: ['200']
            // }
        ]
    };
    // 3. 把配置项给实例对象
    myChart_lt_three.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart_lt_three.resize();
    });
})();


//右侧可视化图表模块
// 右一
var myChart_rt_one = echarts.init(document.getElementById('chart_rt_one'));
var myChart_rt_one_bingli = ['累计确诊', '累计康复', '累计死亡'];
(function() {

    option = {
        title: {
            text: '',
            x: 'center'
        },
        //—— 悬浮框 ——
        tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
            backgroundColor: "rgba(1,70,86,1)",
            borderColor: "rgba(0,246,255,1)",
            borderWidth: 0.5,
            textStyle: {
                fontSize: 10
            },
            // formatter: '{b}'
            // trigger: 'item',
            formatter: function(x) {
                return x.data.value; //设置提示框的内容和格式 节点和边都显示name属性
            },
        },
        // legend: [{
        //     show: false,
        //     orient: 'vertical',
        //     x: 'right',
        //     y: 'center',
        //     itemWidth: 14,
        //     itemHeight: 14,
        //     textStyle: {
        //         color: "rgba(255, 255, 255, 1)"
        //     },
        //     data: [ //节点数据

        //         {
        //             name: myChart_rt_one_bingli[0],
        //             icon: 'circle'
        //         },
        //         {
        //             name: myChart_rt_one_bingli[1],
        //             icon: 'circle'
        //         }, {
        //             name: myChart_rt_one_bingli[2],
        //             icon: 'circle'
        //         },
        //     ],
        // }, ],
        // toolbox: {
        //     show: true, //是否显示工具箱
        //     feature: {
        //         saveAsImage: true // 保存为图片，
        //     }
        // },
        //—— 其他设置 ——
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'force', // 'circular' ,force
            symbolSize: 100, //图形的大小（示例中的圆的大小）
            roam: true, //鼠标缩放及平移
            focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点、节点的边和邻接节点
            label: {
                normal: {
                    show: true, //控制非高亮时节点名称是否显示
                    position: '',
                    fontSize: 18,
                    color: 'white'
                },
                emphasis: {
                    show: true, //控制非高亮时节点名称是否显示
                    position: 'right',
                    fontSize: 16,
                    color: 'white'
                },
            },
            force: {
                x: 'center',
                y: 'center',
                edgeLength: 120,
                //repulsion: 8000
            },
            //     edgeSymbol: ['circle', 'arrow'],//箭头
            //    edgeSymbolSize: [6, 10],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12,
                        color: "rgba(255, 5, 5, 1)"
                    },
                    formatter: "{c}"
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 14, //边节点显示的字体大小

                    }
                },
            },


            data: [ //节点数据
                {
                    name: myChart_rt_one_bingli[0],
                    label: '累计确诊病例',
                    value: LeiJi_num[0],
                    draggable: true, //能否鼠标拖动
                    category: myChart_rt_one_bingli[0],
                    symbolSize: LeiJi_num[0] / avg,
                    label: {
                        normal: {
                            show: true, //控制非高亮时节点名称是否显示
                            position: '',
                            fontSize: 15,
                            color: 'white',
                        },
                    },
                }, {
                    name: myChart_rt_one_bingli[1],
                    label: '累计康复病例',
                    value: LeiJi_num[1],
                    draggable: true, //能否鼠标拖动
                    category: myChart_rt_one_bingli[1],
                    symbolSize: LeiJi_num[1] / avg,
                    label: {
                        normal: {
                            show: true, //控制非高亮时节点名称是否显示
                            position: '',
                            fontSize: 15,
                            color: 'white',
                        },
                    },
                }, {
                    name: myChart_rt_one_bingli[2],
                    label: '累计死亡病例',
                    value: LeiJi_num[2],
                    draggable: true, //能否鼠标拖动
                    category: myChart_rt_one_bingli[2],
                    symbolSize: LeiJi_num[2] / avg,
                    label: {
                        normal: {
                            show: true, //控制非高亮时节点名称是否显示
                            position: '',
                            fontSize: 15,
                            color: 'white',
                        },
                    },
                },
                // {
                //     name: 'stu10',
                //     label: '',
                //     draggable: true, //能否鼠标拖动
                //     category: 'white',
                //     symbolSize: 60,
                //     label: {
                //         normal: {
                //             show: true, //控制非高亮时节点名称是否显示
                //             position: '',
                //             fontSize: 60,
                //             color: 'white',
                //         },
                //     },
                // }, {
                //     name: 'stu11',
                //     label: '',
                //     draggable: true, //能否鼠标拖动
                //     category: 'stu11',
                //     symbolSize: 15,
                //     label: {
                //         normal: {
                //             show: true, //控制非高亮时节点名称是否显示
                //             position: '',
                //             fontSize: 20,
                //             color: 'white',
                //         },
                //     },
                // },
            ],

            links: [ //连线数据
                {
                    source: myChart_rt_one_bingli[1],
                    target: myChart_rt_one_bingli[0],
                    value: 0,
                    label: '',
                    lineStyle: {
                        normal: {
                            show: true,
                            width: 0,
                            color: 'source',
                            curveness: 0.2,
                            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            opacity: '0',
                            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                    }

                },
                {
                    source: myChart_rt_one_bingli[1],
                    target: myChart_rt_one_bingli[2],
                    value: 0,
                    label: '',
                    lineStyle: {
                        normal: {
                            show: false,
                            width: LeiJi_num[2] / avglinks,
                            color: 'source',
                            curveness: 0.2,
                            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            opacity: '0',
                            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                    }

                },
                {
                    source: myChart_rt_one_bingli[0],
                    target: myChart_rt_one_bingli[1],
                    value: LeiJi_num[1],
                    label: '',
                    lineStyle: {
                        normal: {
                            show: true,
                            width: LeiJi_num[1] / avglinks,
                            color: 'source',
                            curveness: -0.2,
                            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            opacity: '1',
                            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                    }

                }, {
                    source: myChart_rt_one_bingli[0],
                    target: myChart_rt_one_bingli[2],
                    value: LeiJi_num[2],
                    label: '',
                    lineStyle: {
                        normal: {
                            show: true,
                            width: LeiJi_num[2] / avglinks,
                            color: 'source',
                            curveness: 0.2,
                            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            opacity: '1',
                            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                    }

                },
                // {
                //     source: myChart_rt_one_bingli[2],
                //     target: myChart_rt_one_bingli[0],
                //     value: '23',
                //     label: '',
                //     lineStyle: {
                //         normal: {
                //             show: true,
                //             width: 8,
                //             color: 'source',
                //             curveness: 0.2,
                //             type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                //             opacity: '1',
                //             // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                //         },
                //     }

                // },
                // {
                //     source: myChart_rt_one_bingli[2],
                //     target: myChart_rt_one_bingli[1],
                //     value: '1234',
                //     label: '',
                //     lineStyle: {
                //         normal: {
                //             show: true,
                //             width: 5,
                //             color: 'source',
                //             curveness: 0.2,
                //             type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                //             opacity: '1',
                //             // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                //         },
                //     }

                // },
            ],

            categories: [ //节点数据			
                {
                    name: myChart_rt_one_bingli[0],
                    icon: 'circle'
                },
                {
                    name: myChart_rt_one_bingli[1],
                    icon: 'circle'
                }, {
                    name: myChart_rt_one_bingli[2],
                    icon: 'circle'
                },

            ],



        }]
    }; // 使用刚指定的配置项和数据显示图表。
    // 3. 把配置项给实例对象
    myChart_rt_one.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart_rt_one.resize();
    });
})();

// 右二
var myChart_rt_two = echarts.init(document.getElementById('chart_rt_two'));
var myChart_rt_two_bingli = ['确诊病例', '预测未来确诊人数'];
//四号到八号的确诊数据
var myChart_rt_two_bingliNum = [20, 25, 24, 18, 23, 41, 11];
var myChart_rt_two_bingliNum_yesterday = [];
var gailu = myChart_rt_two_bingliNum[1] / myChart_rt_two_bingliNum[0];
for (var i = 1; i <= myChart_rt_two_bingliNum.length; i++) {
    // 用前日的扩散率乘以今日的实际病例得出明天的预测病例
    myChart_rt_two_bingliNum_yesterday[(i - 1)] = parseInt(gailu * myChart_rt_two_bingliNum[i]);
    //根据数据修改扩散率
    gailu = myChart_rt_two_bingliNum[i] / myChart_rt_two_bingliNum[i - 1];

}
// console.log(myChart_rt_two_bingliNum_yesterday);
(function() {
    var img = [
        "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC",
        "image://data:image/png;base64,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",
        "image://data:image/png;base64,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",
        "image://data:image/png;base64,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",
    ];

    var option = {
        // backgroundColor: "#000E1A",
        title: {
            textStyle: {
                align: "center",
                color: "#fff",
                fontSize: 12,
            },
            top: "4%",
            left: "6%",
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            show: true,
            color: ["#F58080", "#47D8BE", "#F9A589"],
            data: [myChart_rt_two_bingli[0], myChart_rt_two_bingli[1]],
            left: "center",
            top: "6%",
            textStyle: {
                color: "#ffffff",
            },
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "5%",
            // height: "80%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            data: ["04号", "05号", "06号", "07号", "08号", "09号"],
            axisLine: {
                lineStyle: {
                    color: "#999",
                },
            },
            axisLabel: {
                color: "#fff",
                textStyle: {
                    fontSize: 10,
                },
            },
        },
        yAxis: {
            type: "value",
            // min: 300,
            // max: 850,
            name: "人数/个",
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    opacity: ".2",
                    color: "#DDD",
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#ccc",
                },
            },
            nameTextStyle: {
                color: "#fff",
            },
            axisLabel: {
                color: "#fff",
                textStyle: {
                    fontSize: 12,
                },
            },
            splitArea: {
                show: false,
            },
        },
        series: [


            {
                name: myChart_rt_two_bingli[0],
                type: "line",
                symbol: img[1],
                symbolSize: 80,
                data: [
                    myChart_rt_two_bingliNum[2],
                    myChart_rt_two_bingliNum[3],
                    myChart_rt_two_bingliNum[4],
                    myChart_rt_two_bingliNum[5],
                    myChart_rt_two_bingliNum[6],
                ],

                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        color: "#AAF487",
                    },
                },
            },
            {
                name: "光点1",
                type: "lines",
                smooth: true,
                coordinateSystem: "cartesian2d",
                symbolSize: 30,
                polyline: true,
                effect: {
                    show: true,
                    trailLength: 0,
                    symbol: "arrow",
                    period: 30, //光点滑动速度
                    symbolSize: 100,
                    symbol: img[0],
                },

            },
            {
                name: myChart_rt_two_bingli[1],
                type: "line",
                symbol: img[3],
                symbolSize: 80,
                data: [
                    myChart_rt_two_bingliNum_yesterday[0],
                    myChart_rt_two_bingliNum_yesterday[1],
                    myChart_rt_two_bingliNum_yesterday[2],
                    myChart_rt_two_bingliNum_yesterday[3],
                    myChart_rt_two_bingliNum_yesterday[4],
                    myChart_rt_two_bingliNum_yesterday[5],
                    myChart_rt_two_bingliNum_yesterday[6]
                ],

                itemStyle: {
                    normal: {
                        color: "#F6D06F",
                        borderWidth: 2,
                        /*shadowColor: 'rgba(72,216,191, 0.3)',
                             shadowBlur: 100,*/
                        borderColor: "#F6D06F",
                    },
                },

            },
            {
                name: "光点1",
                type: "lines",
                smooth: true,
                coordinateSystem: "cartesian2d",
                symbolSize: 30,
                polyline: true,
                effect: {
                    show: true,
                    trailLength: 0,
                    symbol: "arrow",
                    period: 30, //光点滑动速度
                    symbolSize: 100,
                    symbol: img[0],
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        color: {
                            type: "linear",

                            colorStops: [{
                                    offset: 0,
                                    color: "#F6D06F", // 0% 处的颜色
                                },
                                {
                                    offset: 0.4,
                                    color: "#F9A589", // 100% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#F9A589", // 100% 处的颜色
                                },
                            ],
                            globalCoord: false, // 缺省为 false
                        },
                        shadowColor: "rgba(249,165,137, 0.5)",
                        shadowBlur: 1,
                        shadowOffsetY: 0,
                    },
                },
            },
        ],
    };
    // 3. 把配置项给实例对象
    myChart_rt_two.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart_rt_two.resize();
    });
})();

var myChart_rt_three = echarts.init(document.getElementById('chart_rt_three'));
var myChart_rt_three_dengji = ['危险', '注意', '安全'];
// var myChart_rt_three_level;
var warm_level = [];
//预测的逻辑问题所以是减二
var yesterday_num = (myChart_rt_two_bingliNum_yesterday.length - 2);
var bingliNum_length = myChart_rt_two_bingliNum.length - 1;
if (myChart_rt_two_bingliNum_yesterday[yesterday_num] > myChart_rt_two_bingliNum[bingliNum_length] * 1.5) {
    warm_level = [15, 10, 0];
} else if (myChart_rt_two_bingliNum_yesterday[yesterday_num] > myChart_rt_two_bingliNum[bingliNum_length] * 2) {
    warm_level = [15, 10, 5];
} else {
    warm_level = [15, 0, 0];
}
console.log(myChart_rt_two_bingliNum_yesterday[yesterday_num]);
console.log(myChart_rt_two_bingliNum[bingliNum_length]);
(function() {
    option = {
        // backgroundColor: {
        //     type: 'linear',
        //     x: 0,
        //     y: 0,
        //     x2: 0,
        //     y2: 1,
        //     colorStops: [{
        //         offset: 0,
        //         color: '#0c0d2b'
        //     }, {
        //         offset: 0.5,
        //         color: '#0a0c3d'
        //     }, {
        //         offset: 1,
        //         color: '#111629'
        //     }],
        //     globalCoord: false
        // },
        title: {
            text: '警戒程度',
            // subtext: '转化的百分率或分率',
            link: 'https://gallery.echartsjs.com/explore.html?u=bd-1841183165&type=work',
            target: 'blank',
            x: 'center',
            top: '0',
            textStyle: {
                color: '#FFF',
                fontSize: 16,
            }
        },


        // legend: {
        //     data: [myChart_rt_three_dengji[0], myChart_rt_three_dengji[1], myChart_rt_three_dengji[2]],
        //     x: 'center',
        //     y: 'bottom',
        //     textStyle: {
        //         color: '#FFF'
        //     }
        // },

        color: ['#c2c1bd', '#00a1e5', '#23c768'],

        series: [

            {
                type: 'funnel',
                left: 'center',
                width: '70%',
                bottom: '10',
                top: '25',
                sort: 'ascending',
                labelLine: {
                    normal: {
                        show: true,
                        length: 30
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.3
                    }
                },
                tooltip: {
                    show: false
                },

                data: [{
                        value: 10,
                        name: myChart_rt_three_dengji[0]
                    }, {
                        value: 50,
                        name: myChart_rt_three_dengji[1]
                    },
                    {
                        value: 100,
                        name: myChart_rt_three_dengji[2]
                    },
                ]
            },

            {
                name: 'TIT',
                type: 'funnel',
                left: 'center',
                bottom: '10',
                top: '25',
                width: '70%',
                maxSize: '70%',
                sort: 'ascending',
                // label: {
                //     normal: {
                //         position: 'inside',
                //         formatter: '{c}%',
                //         textStyle: {
                //             color: '#fff',
                //             fontSize: 14,
                //         }
                //     },
                //     emphasis: {
                //         position: 'inside',
                //         formatter: '{b}: {c}%'
                //     }
                // },
                itemStyle: {
                    normal: {
                        opacity: 08,
                        borderColor: 'rgba(12, 13, 43, .9)',
                        borderWidth: 3,
                        shadowBlur: 5,
                        shadowOffsetX: 0,
                        shadowOffsetY: 5,
                        shadowColor: 'rgba(0, 0, 0, .6)'
                    }
                },

                data: [{
                        value: warm_level[2],
                        name: ''
                    }, {
                        value: warm_level[1],
                        name: ''
                    },
                    {
                        value: warm_level[0],
                        name: ''
                    },

                ]
            }
        ]
    };
    // 2. 把配置项给实例对象
    myChart_rt_three.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart_rt_three.resize();
    });
})();

//右侧可视化图表模块结束

// 中间地图
var myChart_md_one = echarts.init(document.querySelector('.chart'));
(function() {
    option = {
        title: {
            text: '现存疫情图',
            left: 'center',
            top: '80',
            textStyle: {
                color: "rgba(255, 255, 255, .8)"
            },
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['现存疫情图']
        },
        visualMap: {
            type: 'piecewise',
            left: '35',
            bottom: '0',
            textStyle: {
                color: "rgba(255, 255, 255, 1)"
            },
            pieces: [
                { min: 1000, max: 1000000, label: '大于等于1000人', color: '#372a28' },
                { min: 500, max: 999, label: '现存500-999人', color: '#4e160f' },
                { min: 100, max: 499, label: '现存100-499人', color: '#974236' },
                { min: 10, max: 99, label: '现存10-99人', color: '#ee7263' },
                { min: 1, max: 9, label: '现存1-9人', color: '#f5bba7' },
                { min: 0, max: 0, label: '现存0人', color: '#cccccc' }
            ],
            color: ['#E0022B', '#E09107', '#A3E00B']
        },
        // toolbox: {
        //     show: false,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //         mark: { show: true },
        //         dataView: { show: true, readOnly: false },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        roamController: {
            show: true,
            left: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series: [{
            name: '现存感染人数',
            type: 'map',
            mapType: 'china',
            top: '70',
            roam: false,
            label: {
                show: true,
                color: 'rgb(249, 249, 249)'
            },
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 4
            }, {
                name: '上海',
                value: 58
            }, {
                name: '重庆',
                value: 1
            }, {
                name: '河北',
                value: 1
            }, {
                name: '河南',
                value: 4
            }, {
                name: '云南',
                value: 9
            }, {
                name: '辽宁',
                value: 3
            }, {
                name: '黑龙江',
                value: 0
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 0
            }, {
                name: '山东',
                value: 2
            }, {
                name: '新疆',
                value: 0
            }, {
                name: '江苏',
                value: 3
            }, {
                name: '浙江',
                value: 10
            }, {
                name: '江西',
                value: 0
            }, {
                name: '湖北',
                value: 0
            }, {
                name: '广西',
                value: 3
            }, {
                name: '甘肃',
                value: 0
            }, {
                name: '山西',
                value: 3
            }, {
                name: '内蒙古',
                value: 6
            }, {
                name: '陕西',
                value: 26
            }, {
                name: '吉林',
                value: 0
            }, {
                name: '福建',
                value: 14
            }, {
                name: '贵州',
                value: 0
            }, {
                name: '广东',
                value: 22
            }, {
                name: '青海',
                value: 0
            }, {
                name: '西藏',
                value: 0
            }, {
                name: '四川',
                value: 42
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 30
            }, {
                name: '香港',
                value: 16
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };
    // 2. 把配置项给实例对象
    myChart_md_one.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart_md_one.resize();
    });
})()