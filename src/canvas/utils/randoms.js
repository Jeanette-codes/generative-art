import { random, round } from 'lodash'
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../attributes'

export const xRandom = (width) => round(random(0, width))
export const yRandom = (height) => round(random(0, height))

export const getRandomX = (start, end) =>
    random(
        Math.min(round(start.x), round(end.x)),
        Math.max(round(start.x), round(end.x))
    )
