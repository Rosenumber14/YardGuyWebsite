import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';

import App from './components/App';
import UI from './Reducers/UI';

const store = createStore(combineReducers({
  UI
}), applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
