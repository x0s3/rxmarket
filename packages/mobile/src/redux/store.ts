import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { rootEpic } from './epics';
import { rootReducer } from './reducers';

export function configureStore(): Store {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      getJSON: ajax.getJSON,
      post: ajax.post,
      put: ajax.put,
      delete: ajax.delete,
      patch: ajax.patch,
      baseURL: `USE ENDPOINT ENVS`
    }
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
