
import { useState } from "react";
import "./Counter.css";
import { CounterView } from "./CounterView";

function Counter() {
  const [count, setCount] = useState(100);



  const increment = (incrementor) => {
    setCount(count + incrementor);

  }



  return (
    <div className="counter-container">
      <CounterView counter={count} />
      <button onClick={() => increment(+1)}>
        Increment
      </button>
      <button onClick={() => increment(-1)}>
        Decrement
      </button>
    </div>
  )
}


export default Counter;
