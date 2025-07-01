import { CANVAS_WIDTH, CANVAS_HEIGHT } from './attributes'

export const draw2DCanvas = () => {
    const canvas = document.getElementById('canvas')
    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT
    const ctx = canvas.getContext('2d')

    return { ctx, canvas }
}
