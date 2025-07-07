import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
    canvasWidth: number
    canvasHeight: number
    showInitialLines: boolean
    showIntersectingCircles: boolean
    showConnectingLines: boolean
    circleRadius: number
    iterations: number
}

const initialState: CounterState = {
    value: 0,
    canvasWidth: 800,
    canvasHeight: 600,
    showInitialLines: true,
    showIntersectingCircles: true,
    showConnectingLines: true,
    circleRadius: 50,
    iterations: 20,
}

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        changeIterations: (state, action: PayloadAction<number>) => {
            state.iterations = action.payload
        },
        toggleShowInitialLines: (state, action: PayloadAction<boolean>) => {
            state.showInitialLines = action.payload
        },
        toggleIntersectingCircles: (state, action: PayloadAction<boolean>) => {
            state.showIntersectingCircles = action.payload
        },
        changeCircleRadius: (state, action: PayloadAction<number>) => {
            state.circleRadius = action.payload
        },
        toggleShowConnectingLines: (state, action: PayloadAction<boolean>) => {
            state.showConnectingLines = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    changeIterations,
    toggleShowInitialLines,
    toggleIntersectingCircles,
    changeCircleRadius,
    toggleShowConnectingLines,
} = canvasSlice.actions

export default canvasSlice.reducer
