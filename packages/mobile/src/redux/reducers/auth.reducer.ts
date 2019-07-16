import { createReducer, RootAction } from 'typesafe-actions';
import { signIn } from '../actions/';

export interface IAuthInitialState {
  readonly isSigning: boolean;
  readonly token: string;
}

export const authReducer = createReducer<IAuthInitialState, RootAction>({
  token: '',
  isSigning: false
})
  .handleAction(signIn.request, (state, action) => ({
    ...state,
    isSigning: true
  }))
  .handleAction(signIn.failure, (state, action) => ({
    ...state,
    isSigning: false
  }));
