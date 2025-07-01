import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
    canvasWidth: number
    canvasHeight: number
    showInitialLines: boolean
    showIntersectingCircles: boolean
    showConnectingLines: boolean
    radius: number
    iterations: number
}

const initialState: CounterState = {
    value: 0,
    canvasWidth: 500,
    canvasHeight: 720,
    showInitialLines: true,
    showIntersectingCircles: true,
    showConnectingLines: false,
    radius: 50,
    iterations: 20,
}

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        changeIterations: (state, action: PayloadAction<number>) => {
            state.iterations = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, changeIterations } =
    canvasSlice.actions

export default canvasSlice.reducer
