
// import { useSelector,useDispatch } from 'react-redux';
// import { increment, decrement } from './component/CounterSlice';
import Counter from './component/Counter';
import Timer from './component/Timer';




function App() {
  // const dispatch = useDispatch(); // this will give us the ability to dispatch actions to the Redux store
  // const data = useSelector((e)=>e.counter.value)
  return (
    <div className="App">
       <>
        {/* <label>{data}</label>
         
        <button className='border border-black' onClick={() => dispatch(increment())}>+</button>
        <button className='border border-black' onClick={() => dispatch(decrement())}>-</button> */}
        <Counter /> 
        <Timer/>
       </>
    </div>
  );
}

export default App;
