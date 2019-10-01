import './index.css';
import { xRandom, yRandom } from './src/utils/randoms';
import { draw2DCanvas, drawLogArea, drawIntersectionsLog } from './src/DOMnodes';
import { drawSingleLine, drawLines, drawConnectingLines } from './src/drawLines';
import { iterations, showConnectingLines, radius, showLog } from './src/attributes';

// y = mx + b
// m is slope which is change in Y / change in X
// b is y-intercept where line intersects y
// yIntercept = b=y+mx

const init = () => {
  const { ctx, canvas } = draw2DCanvas();
  const logArea = drawLogArea(canvas);

  const start = {x: xRandom(), y: yRandom()};
  const end = {x: xRandom(), y: yRandom()};
  const pointIntersections = drawLines(ctx, start, end, iterations, []);

  if (showLog) {
    drawIntersectionsLog(pointIntersections, logArea);
  }

  if(showConnectingLines) {
    drawConnectingLines(ctx, pointIntersections, radius, drawSingleLine);
  }
};

init();

