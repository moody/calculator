import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-concert-one';
import 'typeface-indie-flower';
import 'normalize.css';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Add freeCodeCamp test suite
const fcc = document.createElement("script");
fcc.setAttribute("src", "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js");
document.body.appendChild(fcc);
