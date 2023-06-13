import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './style.css';

ReactDOM.render(<App />, document.getElementById("root"));

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}