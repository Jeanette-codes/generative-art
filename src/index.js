import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from './hooks'
import { changeIterations } from './state/slices/canvas'
import { xRandom, yRandom } from './canvas/utils/randoms'
import { draw2DCanvas, drawIntersectionsLog } from './canvas/DOMnodes'
import {
    drawSingleLine,
    drawLines,
    drawConnectingLines,
} from './canvas/drawLines'
import { showConnectingLines, radius } from './canvas/attributes'

export const App = () => {
    // ALGO:
    // draw a line and find a random point on that line.

    let iterations = useAppSelector((state) => state.canvas.iterations)
    const dispatch = useAppDispatch()
    // const [iterations, setIter] = useState(defaultIterations)

    const init = () => {
        const { ctx, canvas } = draw2DCanvas()

        const start = { x: xRandom(), y: yRandom() }
        const end = { x: xRandom(), y: yRandom() }
        const pointIntersections = drawLines(ctx, start, end, iterations, [])

        if (showConnectingLines) {
            drawConnectingLines(ctx, pointIntersections, radius, drawSingleLine)
        }
    }

    return (
        <div>
            <div>{init()}</div>
            <label>
                iterations:
                <input
                    name="myInput"
                    value={iterations}
                    onChange={(e) => dispatch(changeIterations(e.target.value))}
                />
            </label>
        </div>
    )
}
