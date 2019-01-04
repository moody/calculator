import React, { Component } from 'react';
import { BUTTON_DATA } from '../../utils';
import './Calculator.css';

class Calculator extends Component {
  render() {
    let buttons = [];
    for (let key in BUTTON_DATA) {
      let value = BUTTON_DATA[key];
      // Add grid-area
      let style = { gridArea: key };
      // Add background if number
      if (!isNaN(parseInt(value))) style.background = "rgba(0, 0, 0, 0.9)";
      // Push button JSX to buttons
      buttons.push(<button id={key} style={style}>{value}</button>);
    }

    return (
      <div id="Calculator">
        <div id="header">
          <div id="history">{this.props.history.join(" ")}</div>
          <div id="display">{this.props.current}</div>
        </div>

        <div id="buttons">
          {buttons}
        </div>
      </div>
    );
  }
}

export default Calculator;
