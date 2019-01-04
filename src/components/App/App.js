import React, { Component } from 'react';
import './App.css';
import Calculator from '../Calculator/Calculator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      history: [5, "-", 6, "+", 1, "+"]
    }
  }

  evaluate() {
  }

  render() {
    return (
      <div id="App">
        <Calculator current={this.state.current} history={this.state.history}/>
        <footer id="footer">
          <p>made by <a href="https://github.com/moody">justin moody</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
