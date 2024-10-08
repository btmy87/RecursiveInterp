(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('mytheme', {
        "color": [
            "#0072bd",
            "#d95319",
            "#edb120",
            "#7e2f8e",
            "#77ac30",
            "#4dbeee",
            "#a2142f",
            "#9a60b4",
            "#ea7ccc"
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#eeeeee"
            },
            "subtextStyle": {
                "color": "#eeeeee"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 3
            },
            "symbolSize": 4,
            "symbol": "none",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "2",
                "barBorderColor": "#999999"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "2",
                "borderColor": "#999999"
            }
        },
        "scatter": {
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "2",
                "borderColor": "#999999"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "2",
                "borderColor": "#999999"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "2",
                "borderColor": "#999999"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "2",
                "borderColor": "#999999"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "2",
                "borderColor": "#999999"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#eb5454",
                "color0": "#47b262",
                "borderColor": "#eb5454",
                "borderColor0": "#47b262",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "2",
                "borderColor": "#999999"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaaaaa"
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#0072bd",
                "#d95319",
                "#edb120",
                "#7e2f8e",
                "#77ac30",
                "#4dbeee",
                "#a2142f",
                "#9a60b4",
                "#ea7ccc"
            ],
            "label": {
                "color": "#eeeeee"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#999999"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#999999"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#eeeeee"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#E0E6F1"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#999999"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#999999"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#eeeeee"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#999999"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "transparent",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#eeeeee"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#999999"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#999999"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#999999"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#eeeeee"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#E0E6F1"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#eeeeee"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#eeeeee"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#dae1f5",
                "width": 2
            },
            "itemStyle": {
                "color": "#a4b1d7",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#a4b1d7",
                "borderColor": "#a4b1d7",
                "borderWidth": 1
            },
            "checkpointStyle": {
                "color": "#316bf3",
                "borderColor": "#ffffff"
            },
            "label": {
                "color": "#a4b1d7"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#ffffff"
                },
                "controlStyle": {
                    "color": "#a4b1d7",
                    "borderColor": "#a4b1d7",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#a4b1d7"
                }
            }
        },
        "visualMap": {
            "color": [
                "#bf444c",
                "#d88273",
                "#f6efa6"
            ]
        },
        "dataZoom": {
            "handleSize": "undefined%",
            "textStyle": {}
        },
        "markPoint": {
            "label": {
                "color": "#eeeeee"
            },
            "emphasis": {
                "label": {
                    "color": "#eeeeee"
                }
            }
        }
    });
}));
