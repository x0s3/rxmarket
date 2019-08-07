import { createReducer, RootAction } from 'typesafe-actions';
import { changeAppTheme } from '../actions/appStyle.actions';

export type Themes = 'dark' | 'light';

export interface IAppStyleInitialState {
  readonly theme: Themes;
}

export const appStyleReducer = createReducer<IAppStyleInitialState, RootAction>(
  {
    theme: 'dark'
  }
).handleAction(changeAppTheme, state => ({
  ...state,
  theme: state.theme === 'dark' ? 'light' : 'dark'
}));
