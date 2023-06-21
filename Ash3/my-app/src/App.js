// import './App.css';
// // import State from "./Components/State";
// // import DataFetcher from './Components/Effect';
// import Counter from "./Components/Callback";
// function App() {
//   return (
//     <div className="App">
//     {/* <State /> */}
//     {/* <DataFetcher /> */}
//     <Counter/>
//     </div>
//   );
// }
// export default App;







// App.js
import React from 'react';
import MyContext from './Components/MyContext';
import MyComponent from './Components/MyComponent';

function App() {
  const contextValue = "Hello, world!";

  return (
    <MyContext.Provider value={contextValue}>
      <MyComponent />
    </MyContext.Provider>
  );
}

export default App;
