import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.props.handleButton(event.target.id);
  }

  onMouseDown(event) {
    // prevent focus since it causes issues with keybinds
    event.preventDefault();
  }

  render() {
    let id = this.props.id;
    let value = this.props.value;
    // Add grid-area
    let style = { gridArea: id };
    // Add background if number
    if (!isNaN(parseInt(value))) style.background = "rgba(0, 0, 0, 0.9)";
    
    return (
      <button
        id={id}
        style={style}
        onClick={this.onClick}
        onMouseDown={this.onMouseDown}>
        {value}
      </button>
    );
  }
}

export default Button;
