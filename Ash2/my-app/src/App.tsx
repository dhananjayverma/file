import React from 'react';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';

const App: React.FC = () => {
  return (
    <div>
      <h1>My React App</h1>
      <CounterClass initialValue={0} />
      <CounterFunction initialValue={5} />
    </div>
  );
};

export default App;
