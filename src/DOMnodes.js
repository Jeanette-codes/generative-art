import { CANVAS_WIDTH, CANVAS_HEIGHT, showIntersectionsLog } from './attributes';

export const draw2DCanvas = () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  canvas.width  = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  return { ctx, canvas };
}

export const drawLogArea = (canvas) => {
  const logArea = document.createElement('div');
  logArea.id = 'log-area';
  document.body.insertBefore(logArea, canvas.nextSibling);
  return logArea;
};

export const drawToLog = (logArea, content) => {
  const el = document.createElement('div');
  el.textContent = content;
  logArea.appendChild(el);
}

export const drawIntersectionsLog = (pointIntersections, logArea) => {
  if(showIntersectionsLog) {
    pointIntersections.forEach((p) => {
      drawToLog(logArea, `x: ${p.x}, y: ${p.y}`); 
    });
  }
}
