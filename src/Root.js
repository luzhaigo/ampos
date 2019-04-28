import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(...[promiseMiddleware, thunk]));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};