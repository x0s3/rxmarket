import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Services } from 'ServiceTypes';
import { RootAction, RootState } from 'typesafe-actions';
import rootEpic from './epics';
import { rootReducer } from './reducers';
import services from './services';

export function configureStore(): Store {
  const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState,
    Services
  >({
    dependencies: services
  });

  const middlewares = [epicMiddleware];

  if (__DEV__) {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
  }

  const enhancer = compose(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);

  epicMiddleware.run(rootEpic);

  return store;
}
