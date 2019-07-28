import { Epic } from 'redux-observable';
import { ActionType, StateType } from 'typesafe-actions';
import { Services } from 'ServiceTypes';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./store').configureStore>;

  export type RootState = StateType<typeof import('./reducers').rootReducer>;

  export type RootAction = ActionType<typeof import('./actions').default>;

  export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;

  interface Types {
    RootAction: RootAction;
  }
}
