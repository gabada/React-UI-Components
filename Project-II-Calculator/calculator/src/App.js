import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="container">
      <div className="calc-display">
        <CalculatorDisplay />
      </div>
      <div className="buttons">
        <div className="numbers-panel">
          <NumberButton buttonStyle="num-buttons zero-button" text="Clear" />
          <NumberButton buttonStyle="num-buttons" text="7" />
          <NumberButton buttonStyle="num-buttons" text="8" />
          <NumberButton buttonStyle="num-buttons" text="9" />
          <NumberButton buttonStyle="num-buttons" text="4" />
          <NumberButton buttonStyle="num-buttons" text="5" />
          <NumberButton buttonStyle="num-buttons" text="6" />
          <NumberButton buttonStyle="num-buttons" text="1" />
          <NumberButton buttonStyle="num-buttons" text="2" />
          <NumberButton buttonStyle="num-buttons" text="3" />
          <NumberButton buttonStyle="num-buttons zero-button" text="0" />
        </div>
        <div className="operands">
          <NumberButton buttonStyle="oprand-buttons" text="÷" />
          <NumberButton buttonStyle="oprand-buttons" text="x" />
          <NumberButton buttonStyle="oprand-buttons" text="–" />
          <NumberButton buttonStyle="oprand-buttons" text="+" />
          <NumberButton buttonStyle="oprand-buttons" text="=" />
          </div>
      </div>
    </div>
  );
};

export default App;
