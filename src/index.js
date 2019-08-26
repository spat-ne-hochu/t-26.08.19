import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/rootReducer";
import {loadingThunk} from "./thunks";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(loadingThunk());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
