import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {appConfig} from "./configs/app";
import axios from "axios";

// setup axios for external calls to Github api by default
axios.defaults.baseURL = appConfig.github.url;
// axios.defaults.headers.common['Authorization'] = process.env.GIT_TOKEN; // note needed for our current usecase
axios.defaults.headers.post['Accept'] = appConfig.github.accept;
axios.defaults.headers.post['Content-Type'] = appConfig.github.content_type;
// do not throw 400 errors, return them for now
axios.defaults.validateStatus = function () {
    return true;
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
