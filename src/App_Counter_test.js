import { useSelector, useDispatch } from 'react-redux';
import {actions} from './store/index'
import './App.css';

function App() {
  const counter =useSelector((state)=>state.counter)
  const dispatch = useDispatch();
  const increment = () =>{
    dispatch(actions.increment());

  }
  const decrement = () =>{
    dispatch(actions.decrement())
  }

  const addBy = () =>{
    dispatch(actions.addBy(10))
  }
  return (
    <div>
      <h1>Counter App</h1>
       <h3>{counter}</h3>

       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       <button onClick={addBy}>Add Value</button>
    </div>
  );
}

export default App;
