import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prevCount) => prevCount + 1);
  const decrement = () => setCounter((prevCount) => prevCount - 1);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
