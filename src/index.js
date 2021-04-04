import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider as ReduxProvider} from 'react-redux';
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);

reportWebVitals();
