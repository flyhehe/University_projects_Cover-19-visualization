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
                    type: 'solid',
                }
            }
        },

        legend: {
            data: ['现有确诊', '现有治愈', '现有死亡'],
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
            right: 8,
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
                center: ['35%', '50%'],
                data: [{
                        value: 220,
                        name: '社会组织'
                    }, {
                        value: 120,
                        name: '事业单位'
                    },
                    {
                        value: 189,
                        name: '工商企业登记注册'
                    },
                    {
                        value: 189,
                        name: '工商企业'
                    }
                ],
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
                center: ['35%', '50%'],
                data: [{
                        value: 220,
                        name: '社会组织'
                    }, {
                        value: 120,
                        name: '事业单位'
                    },
                    {
                        value: 189,
                        name: '工商企业登记注册'
                    },
                    {
                        value: 189,
                        name: '工商企业'
                    }
                ],
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
                center: ['35%', '50%'],
                data: [{
                        value: 220,
                        name: '社会组织'
                    }, {
                        value: 120,
                        name: '事业单位'
                    },
                    {
                        value: 189,
                        name: '工商企业登记注册'
                    },
                    {
                        value: 189,
                        name: '工商企业'
                    }
                ],
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
                center: ['35%', '50%'],
                data: [{
                        value: 220,
                        name: '社会组织'
                    }, {
                        value: 120,
                        name: '事业单位'
                    },
                    {
                        value: 189,
                        name: '工商企业登记注册'
                    },
                    {
                        value: 189,
                        name: '工商企业'
                    }
                ],
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
                center: ['35%', '50%'],
                data: [{
                        value: 220,
                        name: '社会组织'
                    }, {
                        value: 120,
                        name: '事业单位'
                    },
                    {
                        value: 189,
                        name: '工商企业登记注册'
                    },
                    {
                        value: 189,
                        name: '工商企业'
                    }
                ],
                label: {
                    normal: {
                        formatter: '{font|{c}}\n{hr|}\n{font|{d}%}',
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
                    lineStyle: {
                        color: '#fff'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    opacity: 1,

                }
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
            data: ['A级门店', 'B级门店', 'C级门店', 'D级门店'],
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
            max: 1000,
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
            data: ['福建', '广州', '厦门', '南宁', '背景', '长沙', '重庆', '上海'],
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
                name: 'A级门店',
                type: 'bar',
                stack: '总量',
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: '#06d3cd',
                        barBorderRadius: [20, 20, 0, 0],
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        color: "#000",
                        fontSize: 4
                    }
                },
                z: 20,
                data: [320, 302, 301, 334, 390, 330, 320, 320]
            },
            {
                name: 'B级门店',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#ebe806',
                        shadowBlur: [0, 0, 0, 40],
                        shadowColor: '#ebe806',
                        barBorderRadius: [20, 20, 0, 0],
                        shadowOffsetY: 5,
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        color: "#000",
                        fontSize: 4
                    }
                },
                z: 15,
                data: [120, 132, 101, 134, 90, 230, 210, 101]
            },
            {
                name: 'C级门店',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#ff5624',
                        barBorderRadius: [20, 20, 0, 0],

                        shadowBlur: [0, 0, 0, 40],
                        shadowColor: '#ff5624',
                        shadowOffsetY: 5,
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        color: "#000",
                        fontSize: 4
                    }
                },
                z: 10,
                data: [220, 182, 191, 234, 290, 210, 310, 187]
            },
            {
                name: 'D级门店',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#C12096',
                        barBorderRadius: [20, 20, 0, 0],

                        shadowBlur: [0, 0, 0, 40],
                        shadowColor: '#C12096',
                        shadowOffsetY: 8,
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        color: "#000",
                        fontSize: 4
                    }
                },
                z: 5,
                data: [160, 152, 141, 274, 210, 110, 100, 187]
            },
            { // 灰色背景柱状图
                type: 'bar',
                barGap: '-100%',
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: '#ccc',
                        barBorderRadius: [20, 20, 0, 0],
                    }
                },
                z: -10,
                data: ['1000', '1000', '1000', '1000', '1000', '1000', '1000', '1000']
            }
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
var myChart_rt_one = echarts.init(document.getElementById('chart_rt_one'));
(function() {

    option = {
        title: {
            text: '',
            x: 'center'
        },
        //—— 悬浮框 ——
        tooltip: {
            trigger: 'item',
            formatter: function(x) {
                return x.data.label; //设置提示框的内容和格式 节点和边都显示name属性
            },
        },
        legend: [{
            orient: 'vertical',
            x: 'right',
            y: 'center',
            itemWidth: 14,
            itemHeight: 14,
            data: [ //节点数据

                {
                    name: 'stu7',
                    icon: 'circle'
                },
                {
                    name: 'stu8',
                    icon: 'circle'
                }, {
                    name: 'stu9',
                    icon: 'circle'
                },
            ],
        }, ],
        toolbox: {
            show: true, //是否显示工具箱
            feature: {
                saveAsImage: true // 保存为图片，
            }
        },
        //—— 其他设置 ——
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'force', // 'circular' ,force
            symbolSize: 100, //图形的大小（示例中的圆的大小）
            roam: true, //鼠标缩放及平移
            focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点、节点的边和邻接节点
            label: {
                normal: {
                    show: true, //控制非高亮时节点名称是否显示
                    position: '',
                    fontSize: 18,
                    color: 'black'
                },
                emphasis: {
                    show: true, //控制非高亮时节点名称是否显示
                    position: 'right',
                    fontSize: 16,
                    color: 'black'
                },
            },
            force: {
                x: 'center',
                y: '50px',
                edgeLength: 150,
                //repulsion: 8000
            },
            //     edgeSymbol: ['circle', 'arrow'],//箭头
            //    edgeSymbolSize: [6, 10],
            edgeLabel: {
                normal: {
                    show: false,
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: "{c}"
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 14 //边节点显示的字体大小
                    }
                },
            },


            data: [ //节点数据
                {
                    name: 'stu7',
                    label: '',
                    draggable: true, //能否鼠标拖动
                    category: 'stu7',
                    symbolSize: 30,
                    label: {
                        normal: {
                            show: true, //控制非高亮时节点名称是否显示
                            position: '',
                            fontSize: 35,
                            color: 'black',
                        },
                    },
                }, {
                    name: 'stu8',
                    label: '',
                    draggable: true, //能否鼠标拖动
                    category: 'stu8',
                    symbolSize: 5,
                    label: {
                        normal: {
                            show: true, //控制非高亮时节点名称是否显示
                            position: 'right',
                            fontSize: 15,
                            color: 'black',
                        },
                    },
                }, {
                    name: 'stu9',
                    label: '',
                    draggable: true, //能否鼠标拖动
                    category: 'stu9',
                    symbolSize: 15,
                    label: {
                        normal: {
                            show: true, //控制非高亮时节点名称是否显示
                            position: '',
                            fontSize: 20,
                            color: 'black',
                        },
                    },
                }, {
                    name: 'stu10',
                    label: '',
                    draggable: true, //能否鼠标拖动
                    category: 'stu10',
                    symbolSize: 60,
                    label: {
                        normal: {
                            show: true, //控制非高亮时节点名称是否显示
                            position: '',
                            fontSize: 60,
                            color: 'black',
                        },
                    },
                }, {
                    name: 'stu11',
                    label: '',
                    draggable: true, //能否鼠标拖动
                    category: 'stu11',
                    symbolSize: 15,
                    label: {
                        normal: {
                            show: true, //控制非高亮时节点名称是否显示
                            position: '',
                            fontSize: 20,
                            color: 'black',
                        },
                    },
                },
            ],

            links: [ //连线数据
                {
                    source: 'stu7',
                    target: 'stu8',
                    value: '',
                    label: '',
                    lineStyle: {
                        normal: {
                            show: true,
                            width: 1,
                            color: 'source',
                            curveness: 0.2,
                            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            opacity: '0.4',
                            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                    }

                }, {
                    source: 'stu7',
                    target: 'stu9',
                    value: '',
                    label: '',
                    lineStyle: {
                        normal: {
                            show: true,
                            width: 8,
                            color: 'source',
                            curveness: 0.2,
                            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            opacity: '0.6',
                            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                    }

                }, {
                    source: 'stu8',
                    target: 'stu7',
                    value: '',
                    label: '',
                    lineStyle: {
                        normal: {
                            show: true,
                            width: 1,
                            color: 'source',
                            curveness: 0.2,
                            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            opacity: '0.4',
                            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                    }

                }, {
                    source: 'stu8',
                    target: 'stu9',
                    value: '',
                    label: '',
                    lineStyle: {
                        normal: {
                            show: true,
                            width: 5,
                            color: 'source',
                            curveness: 0.2,
                            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            opacity: '0.4',
                            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                    }

                },
                {
                    source: 'stu9',
                    target: 'stu7',
                    value: '',
                    label: '',
                    lineStyle: {
                        normal: {
                            show: true,
                            width: 8,
                            color: 'source',
                            curveness: 0.2,
                            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            opacity: '0.4',
                            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                    }

                }, {
                    source: 'stu9',
                    target: 'stu8',
                    value: '',
                    label: '',
                    lineStyle: {
                        normal: {
                            show: true,
                            width: 5,
                            color: 'source',
                            curveness: 0.2,
                            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            opacity: '0.4',
                            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                    }

                },
            ],

            categories: [ //节点数据			
                {
                    name: 'stu7',
                    icon: 'circle'
                },
                {
                    name: 'stu8',
                    icon: 'circle'
                }, {
                    name: 'stu9',
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