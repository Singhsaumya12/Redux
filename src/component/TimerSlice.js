import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const TimerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
      timerStart: state => {
            state.value = state.value + 1;
      },
      timerStop: state => {
            state.value = state.value = 0;
      }  
      

      }
  });

  export const { timerStart, timerStop } = TimerSlice.actions;

  export default TimerSlice.reducer;