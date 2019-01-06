import React, { Component } from 'react';
import { BUTTON_DATA, OPERATORS } from '../../utils';
import Calculator from '../Calculator/Calculator';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "0",
      last: -1,
      dirty: true,
      history: [5, "-", 6, "+"]
    }

    this.handleButton = this.handleButton.bind(this);
  }

  /**
   * Updates the state of the calculator based on the button that was pressed.
   * @param {string} id the button's id
   */
  handleButton(id) {
    console.log(`handleButton: ${id}`);
    if (!BUTTON_DATA.hasOwnProperty(id)) return;
    let value = BUTTON_DATA[id];
    
    if (!isNaN(parseInt(value))) {
      this.setState({
        current: this.state.dirty ? value : this.state.current + value,
        dirty: false
      });
    } else {
      let current = this.state.current;
      let last = this.state.last;
      let dirty = this.state.dirty;
      let history = this.state.history;

      switch(id) {
        case "clear":
          current = "0";
          last = 0;
          dirty = true;
          history = [];
          break;
        case "decimal":
          if (!current.match(/\./g)) current = current + ".";
          break;
        case "divide":
        case "multiply":
        case "subtract":
        case "add":
          let hasHistory = (history.length > 0);
          let newVal =  hasHistory ?
            this.evaluate(last, Number(current), history[history.length - 1]) :
            Number(current);
          history = [...history, current, value];
          current = "" + newVal;
          last = newVal;
          dirty = true;
          break;
        case "equals":
          if (history.length === 0) break;
          current = this.evaluate(last, Number(current), history[history.length - 1]);
          last = 0;
          dirty = true;
          history = [];
          break;
        default:
          break;
      }

      this.setState({ current, last, dirty, history });
    }
  }

  evaluate(a, b, op) {
    switch(op) {
      case OPERATORS.DIVIDE:
        return a / b;
      case OPERATORS.MULTIPLY:
        return a * b;
      case OPERATORS.SUBTRACT:
        return a - b;
      case OPERATORS.ADD:
        return a + b;
      default:
        return "Error";
    }
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
