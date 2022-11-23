import reactLogo from './assets/react.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from './store/slices/counter';
import { useState } from 'react';

function App() {
  const [userNum, setUserNum] = useState(0);
  console.log(userNum);
  const { counter } = useSelector((state) => state.counter);
  const { message } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(message);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <input
          type="number"
          value={userNum}
          placeholder="Add a number"
          onChange={(e) => setUserNum(e.target.value)}
        />
      </div>
      <h1>{message && message}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(incrementByAmount(userNum))}>
          Increment by the value of the user
        </button>
      </div>
    </div>
  );
}

export default App;
