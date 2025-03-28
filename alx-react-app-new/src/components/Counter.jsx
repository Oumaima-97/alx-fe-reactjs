// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize the state with 0

  return (
    <div>
      <p>Current Count: {count}</p> {/* Display the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button> {/* Increment button */}
      <button onClick={() => setCount(count - 1)}>Decrement</button> {/* Decrement button */}
      <button onClick={() => setCount(0)}>Reset</button> {/* Reset button */}
    </div>
  );
}

export default Counter;
