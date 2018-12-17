import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var elemDiv = document.createElement('div');
elemDiv.setAttribute('id', 'webchatRoot');
document.body.appendChild(elemDiv);

ReactDOM.render(
    <App configuration={window.appConfig} />,
    document.getElementById("webchatRoot")
);

registerServiceWorker();
