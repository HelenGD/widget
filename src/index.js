import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore, compose} from "redux";
import widget from "./reducer/combine-reducers";

const store = createStore(widget,
  compose(
      (window).__REDUX_DEVTOOLS_EXTENSION__
        ? (window).__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
  ),
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

