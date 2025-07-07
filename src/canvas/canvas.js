import React, { useRef, useEffect } from 'react'
import { useAppSelector } from '../hooks'
import { xRandom, yRandom } from './utils/randoms'
import { resizeCanvas } from './utils/resizeCanvas'
import { drawSingleLine, drawLines, drawConnectingLines } from './drawLines'

const Canvas = (props) => {
    const iterations = useAppSelector((state) => state.canvas.iterations)
    const showInitialLines = useAppSelector(
        (state) => state.canvas.showInitialLines
    )
    const showIntersectingCircles = useAppSelector(
        (state) => state.canvas.showIntersectingCircles
    )
    const circleRadius = useAppSelector((state) => state.canvas.circleRadius)
    const width = useAppSelector((state) => state.canvas.canvasWidth)
    const height = useAppSelector((state) => state.canvas.canvasHeight)
    const showConnectingLines = useAppSelector(
        (state) => state.canvas.showConnectingLines
    )
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        resizeCanvas(canvas, width, height)
        const ctx = canvas.getContext('2d')
        const start = { x: xRandom(width), y: yRandom(height) }
        const end = { x: xRandom(width), y: yRandom(height) }
        const pointIntersections = drawLines(
            ctx,
            start,
            end,
            iterations,
            showInitialLines,
            showIntersectingCircles,
            circleRadius
        )

        if (showConnectingLines) {
            drawConnectingLines(
                ctx,
                pointIntersections,
                circleRadius,
                drawSingleLine
            )
        }
    }, [
        iterations,
        showInitialLines,
        showIntersectingCircles,
        showConnectingLines,
        circleRadius,
    ])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas
