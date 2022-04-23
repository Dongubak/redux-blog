import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './modules';

const root = createRoot(document.getElementById('root'));

const store = createStore(rootReducer);
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
