import React, { Component } from 'react';
import { BUTTON_DATA } from '../../utils';
import Calculator from '../Calculator/Calculator';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      history: [5, "-", 6, "+", 1, "+"]
    }
  }

  /**
   * Updates the state of the calculator based on the button that was pressed.
   * @param {string} id the button's id
   */
  handleButton(id) {
    if (!BUTTON_DATA.hasOwnProperty(id)) return;
    console.log(`handleButton: ${id}`);
    switch(id) {
      case "one":
      case "two":
      case "three":
      case "four":
      case "five":
      case "six":
      case "seven":
      case "eight":
      case "nine":
      case "zero":
      case "decimal":
      case "divide":
      case "multiply":
      case "subtract":
      case "add":
      case "equals":
      case "clear":
      default:
        break;
    }
  }

  evaluate() {
  }

  render() {
    return (
      <div id="App">
        <Calculator
          current={this.state.current}
          history={this.state.history}
          handleButton={this.handleButton}
        />

        <footer id="footer">
          <p>made by <a href="https://github.com/moody">justin moody</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
