import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    value: 0,
    isRunning: false,
  },
  reducers: {
    timerStart: (state) => {
      state.isRunning = true;
    },
    timerStop: (state) => {
      state.isRunning = false;
    },
    timerReset: (state) => {
      state.value = 0;
      state.isRunning = false;
    },
    incrementTime: (state) => {
      state.value += 1;
    },
  },
});

export const { timerStart, timerStop, timerReset, incrementTime } = timerSlice.actions;
export default timerSlice.reducer;
