import React, { Component } from 'react';
import './App.css';
import Calculator from '../Calculator/Calculator';

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
