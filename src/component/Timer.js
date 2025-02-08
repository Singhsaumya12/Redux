import { useSelector,useDispatch } from "react-redux";
import { timerStart , timerStop} from "./TimerSlice";

export default function Timer(){
    const time = useSelector((c)=>c.timer.value);
    const dispatch = useDispatch();

    return(
        <>
            <h1>Timer</h1>
            <span>{time}</span>
            <button onClick={() => dispatch(timerStart())}>Start</button>
            <button onClick={() => dispatch(timerStop())}>Stop</button>
        </>

    )
}