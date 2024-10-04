// define recursive interpolation function
// Each interpolation item will have two properties
// `x` and `y`.  With `x` being the independent value, and
// `y` being the dependent value, which may be either a number
// or a table


export const ex1 = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 4 },
  { x: 3, y: 9 }
];

export const ex2 = [
  { x: 0, y: [{ x: 0, y: 0 }, { x: 1, y: 0 }]},
  { x: 1, y: [{ x: 0, y: 0 }, { x: 1, y: 1 }]}
];

export const ex3 = [
  {
    x: 0, y: [
      { x: 0, y: [{ x: 0, y: 0 }, { x: 1, y: 0 }] },
      { x: 1, y: [{ x: 0, y: 0 }, { x: 1, y: 0 }] }]
  },
  {
    x: 1, y: [
      { x: 0, y: [{ x: 0, y: 0 }, { x: 1, y: 0 }] },
      { x: 1, y: [{ x: 0, y: 0 }, { x: 1, y: 1 }] }]
  }
];

export function RecursiveInterp(t, xi) {
  // interpolation recursive inteprolation object
  // t: interpolation object
  // x: independents
  // returns the interpolated value

  // find bounding indices for interpolation
  // don't search all the way to the endpoints
  // need i in range suc that t[i-1] and t[i] are valid
  let x0 = xi.shift()
  let i = 0;
  for (i = 1; i < t.length-1; i++) {
    if (t[i].x > x0) break;
  }

  // calculate weights for high and low points
  let wLo = (x0 - t[i - 1].x) / (t[i].x - t[i - 1].x);
  let wHi = 1.0 - wLo;

  // interpolate
  if (xi.length > 0) {
    // keep interpolating
    return wLo * RecursiveInterp(t[i - 1].y, [...xi]) +
      wHi * RecursiveInterp(t[i].y, [...xi]);
  } else {
    // innermost level
    return wLo * t[i - 1].y + wHi * t[i].y;
  }
}

const clist = ["#0072bd", "#d95319", "#edb120", "#7e2f8e",
  "#77ac30", "#4dbeee", "#a2142f", "#9a60b4", "#ea7ccc"];

export function convert_echarts(t, nodes=[], links=[], level=0) {
  // generate nodes and links that we can pass to echarts graph series

  // we need an initial node to get things started
  nodes.push({
    value: t.length,
    itemStyle: { color: clist[level]}
  });
  let src = nodes.length - 1;

  let lastNode;
  let nextNode;
  for (let i = 0; i < t.length; i++) {
    // create a new node
    nextNode = nodes.length;
    if (Array.isArray(t[i].y)) {
      convert_echarts(t[i].y, nodes, links, level+1);
    } else {
      // create node
      nodes.push({
        value: 1,
        itemStyle: {color: clist[level+1]}
      });
    }
    links.push({
      source: src,
      target: nextNode,
      value: (level+1)/5,
      lineStyle: { color: clist[level] }
    })
    if (i > 0) {
      links.push({
        source: lastNode,
        target: nextNode,
        value: (level+1)/5,
        lineStyle: { color: clist[level], type: "dotted" }
      });
    }
    lastNode = nextNode;
  }
  return { nodes: nodes, links: links }

}

//console.log("ex1: ", RecursiveInterp(ex1, [0.5]));
//console.log("ex2: ", RecursiveInterp(ex2, [0.5, 0.5]));
//console.log("ex3: ", RecursiveInterp(ex3, [0.5, 0.5, 0.5]));
//let out1 = convert_echarts(ex1);
//console.log(out1);
//let out2 = convert_echarts(ex2);
//console.log(out2);
//console.log("");