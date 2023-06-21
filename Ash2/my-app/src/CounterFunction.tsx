import React, { useState } from 'react';

interface CounterProps {
  initialValue: number;
}

const CounterFunction: React.FC<CounterProps> = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterFunction;
