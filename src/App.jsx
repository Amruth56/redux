
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './feature/counter/counterSlice';

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
  }

  return (
 <>
 <div >
  count: {count}
  <button onClick={handleIncrement}>Increment</button>

  <button onClick={handleDecrement}>Decrement</button>
 </div>
 </>
  )
}

export default App
