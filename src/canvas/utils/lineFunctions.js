export const getSlope = (start, end) =>
  (end.y - start.y) / (end.x - start.x);

export const getYIntercept = (start, slope) => 
  start.y - (slope * start.x); 
