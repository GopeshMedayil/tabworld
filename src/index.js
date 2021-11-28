import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";


import Modal from './components/Modal';


import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Modal></Modal>
      <BrowserRouter>
        <App />
      </BrowserRouter>


    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
