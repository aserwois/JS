import React from 'react';
import PropTest from './propTest'
import './App.css';
import FunctionProps from './functionprops'

function App() {
  return (
    <div className="App">
        <PropTest name="learners!" place="placeX">
          <a>Children Component</a>
        </PropTest>
        <PropTest name="learners!" place="placeX">
          <button>Click!</button>
        </PropTest>
        <FunctionProps name="Mateusz" place="React!" />
    </div>
  );
}

export default App;
