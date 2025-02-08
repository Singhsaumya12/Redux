import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    value: 0
}

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: state => {
            state.value = state.value + 1;
        },
        decrement: state => {
            state.value = state.value - 1;
        },
        incrementByValue: (state, action) => {
            state.value = state.value + action.payload
        },
        incrementByTypedValue: (state, action) => {
            state.value = state.value + action.payload;
        }
    }

});

export const { increment, decrement} = CounterSlice.actions;

export default CounterSlice.reducer;