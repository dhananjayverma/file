// MyComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>{contextValue}</p>
    </div>
  );
}

export default MyComponent;
