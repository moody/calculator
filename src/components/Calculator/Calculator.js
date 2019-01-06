import React, { Component } from 'react';
import Button from '../Button/Button';
import * as Utils from './calculator-utils';
import './Calculator.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "0",
      history: [],
      isDirty: true
    }

    this.handleButton = this.handleButton.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keypress", event => {
      this.handleButton(Utils.BUTTON_KEYS[event.key]);
    });
  }

  /**
   * Updates the state of the calculator based on the button that was pressed.
   * @param {string} id the button's id
   */
  handleButton(id) {
    if (!Utils.BUTTON_DATA.hasOwnProperty(id)) return;
    let value = Utils.BUTTON_DATA[id];

    if (!isNaN(parseInt(value))) {
      if (this.state.current === "0" && value === "0") return;
      this.setState({
        current: this.state.isDirty ? value : this.state.current + value,
        isDirty: false
      });
    } else {
      let current = this.state.current;
      let isDirty = this.state.isDirty;
      let history = [...this.state.history];

      switch (id) {
        case "clear":
          current = "0";
          isDirty = true;
          history = [];
          break;
        case "decimal":
          if (isDirty) {
            current = "0.";
            isDirty = false;
          } else if (!current.match(/\./g)) {
            current = current + ".";
            isDirty = false;
          }
          break;
        case "divide":
        case "multiply":
        case "subtract":
        case "add":
          if (current === Utils.ERROR || current === Utils.DIVIDE_BY_ZERO) {
            // Return if error is displayed
            return;
          } else if (isDirty && history.length >= 2) {
            // Change operation
            history[history.length - 1] = value;
          } else {
            // Add current number to history
            history.push(Number(current));
            // If calculate() is successful, add operation to history
            // Otherwise, reset history
            let result = Utils.calculate(history);
            if (typeof result === "number") {
              history.push(value);
            } else {
              history = [];
            }
            current = `${result}`;
            isDirty = true;
          }
          break;
        case "equals":
          if (history.length >= 2) {
            history.push(Number(current));
            current = `${Utils.calculate(history)}`;
            history = [];
          }
          isDirty = true;
          break;
        default:
          break;
      }

      this.setState({ current, isDirty, history });
    }
  }

  render() {
    let buttons = [];
    for (let id in Utils.BUTTON_DATA) {
      buttons.push(
        <Button
          key={buttons.length}
          id={id}
          value={Utils.BUTTON_DATA[id]}
          handleButton={this.handleButton}
        />
      );
    }

    return (
      <div id="Calculator">
        <div id="header">
          <div id="history">{this.state.history.join(" ")}</div>
          <hr/>
          <div id="display">{this.state.current}</div>
        </div>

        <div id="buttons">
          {buttons}
        </div>
      </div>
    );
  }
}

export default Calculator;
