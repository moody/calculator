import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div id="Calculator">
        <div id="display">
        </div>

        <div id="buttons">
          <button id="clear">CE</button>

          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>

          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>

          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>

          <button id="zero">0</button>
          <button id="decimal">.</button>

          <button id="divide">&divide;</button>
          <button id="multiply">&times;</button>
          <button id="subtract">&minus;</button>
          <button id="add">+</button>

          <button id="equals">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
