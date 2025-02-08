import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import timerReducer from "./TimerSlice";

export const Store = configureStore({
    reducer: {counter:counterReducer,
        timer: timerReducer
    },

});