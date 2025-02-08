import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";

export default function Counter(){
    const count = useSelector((c)=>c.counter.value);
    const dispatch = useDispatch();

    
    
    return (
        <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "40%",
          alignItems: "center",
        }}
      >
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
    );
}