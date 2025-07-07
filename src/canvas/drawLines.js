import { round } from 'lodash'
import { drawCircle } from './drawCircles'
import { getSlope, getYIntercept } from './utils/lineFunctions'
import { xRandom, yRandom, getRandomX } from './utils/randoms'

export const drawSingleLine = (ctx, start, end, color) => {
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.strokeStyle = color || 'black'
    ctx.stroke()
}

export const drawLines = (
    ctx,
    start,
    end,
    iterations,
    showInitialLines,
    showIntersectingCircles,
    circleRadius
) => {
    let intersections = []
    let iter = iterations
    const width = ctx.canvas.width
    const height = ctx.canvas.height

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    const drawFunc = (ctx, start, end, iter) => {
        if (showInitialLines)
            drawSingleLine(ctx, start, end, `rgb(${iter}, ${iter}, ${iter}`)

        const slope = getSlope(start, end)
        const yIntercept = getYIntercept(start, slope)
        const randomX = getRandomX(start, end)
        const yFromX = slope * randomX + yIntercept

        const newStartX = round(randomX)
        const newStart = {
            x: newStartX,
            y: start.x === newStartX ? yRandom(height) : round(yFromX),
        }

        const newEnd = { x: xRandom(width), y: yRandom(height) }

        iter--

        intersections.push(newStart)

        if (iter >= 0) {
            drawFunc(ctx, newStart, newEnd, iter)
            if (showIntersectingCircles)
                drawCircle(ctx, newStart.x, newStart.y, circleRadius)
        }
    }

    drawFunc(ctx, start, end, iter)
    return intersections
}

export const drawConnectingLines = (
    ctx,
    intersetions,
    circleRadius,
    drawSingleLine
) => {
    intersetions.forEach((p1, i1) => {
        intersetions.forEach((p2, i2) => {
            if (i1 !== i2) {
                if (Math.hypot(p2.x - p1.x, p2.y - p1.y) <= circleRadius)
                    drawSingleLine(ctx, p1, p2)
            }
        })
    })
}
