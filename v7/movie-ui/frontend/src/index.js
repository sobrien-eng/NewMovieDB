import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

import { reducers } from './reducers';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

