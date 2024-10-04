import {RecursiveInterp, convert_echarts} from './RecursiveInterp.js';

// make my data
//const chartData = convert_echarts(ex3);
const ex = [];
const N = 9;
for (let i = 0; i < N; i++) {
  ex.push({ x: i, y: 0 });
}
const ex2 = [];
for (let i = 0; i < N; i++) {
  ex2.push({ x: i, y: structuredClone(ex) });
}

const ex3 = [];
for (let i = 0; i < N; i++) {
  ex3.push({ x: i, y: structuredClone(ex2) });
}

const ex4 = [];
for (let i = 0; i < N; i++) {
  ex4.push({ x: i, y: structuredClone(ex3) });
}

const chartData = convert_echarts(ex4);
chartData.nodes[0].symbol = 'diamond';
chartData.nodes[0].symbolSize = 20;

// make a chart
const myChart = echarts.init(document.getElementById('main'), 'mytheme');
const chartOpts = {
  series: [
    {
      type: 'graphGL',
      layout: 'force',
      forceAtlas2: {
        steps: 5,
        stopThreshold: 1,
        maxSteps: 100000,
        scaling: 0.4,
        strongGravityMode: false,
        edgeWeight: 0.1,
        nodeWeight: 1,
        gravity: 20,
        linLog: true
      },
      force: { 
        initLayout: 'circular',
        repulsion: 2,
        friction: 0.6,
        gravity: 0.1,
        edgeLength: 20
      },
      roam: true,
      nodes: chartData.nodes,
      links: chartData.links,
      symbolSize: 5,
      symbol: 'circle',
      itemStyle: {
        //color: 'rgb(0,114,189)',
        //borderColor: 'rgb(0,114,189)',
        opacity: 0.3
      },
      lineStyle: {
        width: 1,
        opacity: 0.3
      }
    }
  ],
  animationDuration: 1000000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear',
  animationDurationUpdate: 1000000
};
myChart.setOption(chartOpts);

function myresize() {
  console.log("In 'myresize'");
  //myChart.resize({});
  myChart.clear;
  myChart.setOption(chartOpts);

}

//document.getElementsByTagName("body")[0].onresize = myresize;
//document.addEventListener("resize", myresize);
//document.getElementsByTagName("body")[0].addEventListener("resize", myresize);
document.body.onresize = () => myresize();

