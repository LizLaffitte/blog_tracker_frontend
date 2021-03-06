import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import {CookiesProvider} from 'react-cookie'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}> 
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
