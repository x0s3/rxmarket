import { ActionType, StateType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./store').configureStore>;

  export type RootState = StateType<typeof import('./reducers').rootReducer>;

  export type RootAction = ActionType<typeof import('./actions').default>;

  interface Types {
    RootAction: RootAction;
  }
}
