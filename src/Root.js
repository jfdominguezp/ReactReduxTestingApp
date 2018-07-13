import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from 'reducers';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers, 
    initialState,
    applyMiddleware(ReduxPromise)
  );
  return <Provider store={store}>{children}</Provider>
};

export default Root;