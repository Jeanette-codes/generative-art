import './index.css';
import { random, round } from 'lodash';

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 800;
const showInitialLines = false;
const showIntersectingCircles = false;
const radius = 40;

let iterations = 400;
let pointIntersections = [];

const xRandom = () => round(random(0, CANVAS_WIDTH));
const yRandom = () => round(random(0, CANVAS_HEIGHT));

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.width  = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

const logArea = document.createElement('div');
logArea.id = 'log-area';
document.body.insertBefore(logArea, canvas.nextSibling);

// y = mx + b
// m is slope which is change in Y / change in X
// b is y-intercept where line intersects y
// yIntercept = b=y+mx

const drawCircle = (ctx, x, y, radius) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  //ctx.fillStyle = 'rgba(0,0,0,0.1)';
  //ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000';
  ctx.stroke();
};

const drawSingleLine = (ctx, start, end, color) => {
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.strokeStyle = color || 'black';
  ctx.stroke();
};

const drawLines = (ctx, start, end) => {
  if(showInitialLines) drawSingleLine(ctx, start, end);
  let newEnd;
  let newStartX;

  const slope = (end.y - start.y) / (end.x - start.x);
  const yIntercept = start.y - (slope * start.x); 

  const randomX = random(Math.min(round(start.x), round(end.x)), Math.max(round(start.x), round(end.x)));
  const yFromX = (slope * randomX) + yIntercept;

  newStartX = round(randomX);
  const newStart = {x: newStartX, y: start.x === newStartX ? yRandom() : round(yFromX)}; 

  newEnd = {x: xRandom(), y: yRandom()};
  //ctx.fillRect(newStart.x,newStart.y,5,5);

  iterations--;

  pointIntersections.push(newStart);

  if(showIntersectingCircles) drawCircle(ctx, newStart.x, newStart.y, radius);
  if(iterations) drawLines(ctx, newStart, newEnd);
};

const start = {x: xRandom(), y: yRandom()};
const end = {x: xRandom(), y: yRandom()};

drawLines(ctx, start, end);

pointIntersections.forEach((p) => {
  const el = document.createElement('div');
  el.textContent = `x: ${p.x}, y: ${p.y}`;
  logArea.appendChild(el);
});

pointIntersections.forEach((p1, i1) => {
  pointIntersections.forEach((p2, i2) => {
    if(i1 !== i2) {
      if(Math.hypot(p2.x - p1.x, p2.y - p1.y) <= radius) drawSingleLine(ctx, p1, p2);
    }
  });
});
