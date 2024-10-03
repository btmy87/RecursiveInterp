// define recursive interpolation function
// Each interpolation item will have two properties
// `x` and `y`.  With `x` being the independent value, and
// `y` being the dependent value, which may be either a number
// or a table


let ex1 = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 4 },
  { x: 3, y: 9 }
];

let ex2 = [
  { x: 0, y: [{ x: 0, y: 0 }, { x: 1, y: 0 }]},
  { x: 1, y: [{ x: 0, y: 0 }, { x: 1, y: 1 }]}
];

let ex3 = [
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

export function convert_echarts(t, nodes=[], links=[]) {
  // generate nodes and links that we can pass to echarts graph series

  // we need an initial node to get things started
  nodes.push({ value: t.length });
  let src = nodes.length - 1;

  for (let i = 0; i < t.length; i++) {
    // create a new node
    if (Array.isArray(t[i].y)) {
      let nextNode = nodes.length;
      convert_echarts(t[i].y, nodes, links);
      // create link from src to head of the subtree we just added
      links.push({
        source: src,
        target: nextNode,
        value: 1,
        lineStyle: { color: "#0072bd" }
      })
    } else {
      // create node
      nodes.push({ value: 1 });

      // create link to source
      links.push({
        source: src,
        target: nodes.length - 1,
        value: 1,
        lineStyle: { color: "#0072bd"}
      });

      //if (i > 0) {
      //  // create link to neighbor
      //  links.push({
      //    source: nodes.length - 2,
      //    target: nodes.length - 1,
      //    value: 1,
      //    lineStyle: { color: "#d95319" }
      //  });
      //}
    }
  }
  return { nodes: nodes, links: links }

}

console.log("ex1: ", RecursiveInterp(ex1, [0.5]));
console.log("ex2: ", RecursiveInterp(ex2, [0.5, 0.5]));
console.log("ex3: ", RecursiveInterp(ex3, [0.5, 0.5, 0.5]));
let out1 = convert_echarts(ex1);
console.log(out1);
let out2 = convert_echarts(ex2);
console.log(out2);