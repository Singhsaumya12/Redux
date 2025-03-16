import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timerStart, timerStop, timerReset, incrementTime } from "./TimerSlice";

const Timer = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.timer?.value || 0); 
  const isRunning = useSelector((state) => state.timer?.isRunning || false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    }
    return () => clearInterval(interval); 
  }, [isRunning, dispatch]);

  const timer1 = (() => dispatch(timerStart()))
  const timer2 = (() => dispatch(timerStop()))
  const timer3 = (() => dispatch(timerReset()))

  const hours = Math.floor(time / 3600); 
  const minutes = Math.floor((time % 3600) / 60); 
  const seconds = time % 60; 

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">
        Timer:{" "}
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded m-2"
          onClick={timer1}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded m-2"
          onClick={timer2}
        >
          Stop
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded m-2"
          onClick={timer3}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
