import React, { Component } from 'react';
import Calculator from '../Calculator/Calculator';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Calculator/>
        <footer id="footer">
          <p>made by <a href="https://github.com/moody">justin moody</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
