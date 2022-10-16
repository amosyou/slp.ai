import './App.css';
import Button  from './Button';
import React, { useState, useEffect, useMemo } from 'react';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  return (
    <div className="App">
      <title>DiagnoSelf</title>
      <header className="App-header">
        <h1>Let's Count!</h1>
        <button onClick={updateCount}>click me!</button>
        <p>Count: {count}</p>
      </header>
    </div>
  );
}

export default App;
