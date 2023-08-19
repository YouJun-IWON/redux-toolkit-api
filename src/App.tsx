import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Test from './features/test';

function App() {

  const [TestOpen, setTestOpen] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <button onClick={() => setTestOpen(prev => !prev)}>Toggle</button>
       {TestOpen && <Test />}
        <Counter />
        
      </header>
    </div>
  );
}

export default App;
