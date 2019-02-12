import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {total: 0};
  }
  clickHandler = text => {
    const NewState = {...this.state,total:text}
    this.setState(NewState);
  };

  clear() {
    const NewState = {...this.state,total:0}
    this.setState(NewState);
  }
  render() {
    return (
    <div className="container">
      <div className="calc-display">
        <CalculatorDisplay total={this.state.total}/>
      </div>
      <div className="buttons">
        <div className="numbers-panel">
          <ActionButton buttonStyle="num-buttons zero-button" text="Clear" onClick={this.clear}/>
          <NumberButton buttonStyle="num-buttons" text="7" onClick={this.clickHandler} />
          <NumberButton buttonStyle="num-buttons" text="8" onClick={this.clickHandler} />
          <NumberButton buttonStyle="num-buttons" text="9" onClick={this.clickHandler} />
          <NumberButton buttonStyle="num-buttons" text="4" onClick={this.clickHandler} />
          <NumberButton buttonStyle="num-buttons" text="5" onClick={this.clickHandler} />
          <NumberButton buttonStyle="num-buttons" text="6" onClick={this.clickHandler} />
          <NumberButton buttonStyle="num-buttons" text="1" onClick={this.clickHandler} />
          <NumberButton buttonStyle="num-buttons" text="2" onClick={this.clickHandler} />
          <NumberButton buttonStyle="num-buttons" text="3" onClick={this.clickHandler} />
          <ActionButton buttonStyle="num-buttons zero-button" text="0" />
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
};

export default App;
