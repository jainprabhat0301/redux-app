import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css';
import 'primeflex/primeflex.css'; 
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'; 

import { combineReducers, createStore} from 'redux';
//import {Provider} from 'react-redux';

//import rootReducer from './service/reducers/index'
import { BrowserRouter } from 'react-router-dom';

import { composeWithDevTools } from "redux-devtools-extension";



//const store=createStore(rootReducer)
//console.warn("store data",store)

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
 