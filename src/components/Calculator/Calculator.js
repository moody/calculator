import React, { Component } from 'react';
import Button from '../Button/Button';
import { BUTTON_DATA } from '../../utils';
import './Calculator.scss';

class Calculator extends Component {
  render() {
    let buttons = [];
    for (let id in BUTTON_DATA) {
      buttons.push(
        <Button
          key={buttons.length}
          id={id}
          value={BUTTON_DATA[id]}
          handleButton={this.props.handleButton}
        />
      );
    }

    return (
      <div id="Calculator">
        <div id="header">
          <div id="history">{this.props.history.join(" ")}</div>
          <hr/>
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
