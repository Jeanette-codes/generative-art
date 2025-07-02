import React, { useRef, useEffect } from 'react'
import { useAppSelector } from '../hooks'
import { xRandom, yRandom } from './utils/randoms'
import { resizeCanvas } from './utils/resizeCanvas'
import { drawSingleLine, drawLines, drawConnectingLines } from './drawLines'
import { showConnectingLines, radius } from './attributes'

const Canvas = (props) => {
    const iterations = useAppSelector((state) => state.canvas.iterations)
    const width = useAppSelector((state) => state.canvas.canvasWidth)
    const height = useAppSelector((state) => state.canvas.canvasHeight)
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        resizeCanvas(canvas, width, height)
        const ctx = canvas.getContext('2d')
        const start = { x: xRandom(width), y: yRandom(height) }
        const end = { x: xRandom(width), y: yRandom(height) }
        const pointIntersections = drawLines(ctx, start, end, iterations)

        if (showConnectingLines) {
            drawConnectingLines(ctx, pointIntersections, radius, drawSingleLine)
        }
    }, [iterations])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas
