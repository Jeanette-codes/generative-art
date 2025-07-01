import { random, round } from 'lodash';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../attributes';

export const xRandom = () => round(random(0, CANVAS_WIDTH));
export const yRandom = () => round(random(0, CANVAS_HEIGHT));

export const getRandomX = (start, end) =>
  random(Math.min(round(start.x), round(end.x)), Math.max(round(start.x), round(end.x)));
