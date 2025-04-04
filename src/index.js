import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Store} from './component/Store';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // Provider wraps the App and the whole application has access to redux store.
  <Provider store={Store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

