import { createReducer, RootAction } from 'typesafe-actions';
import { signIn } from '../actions/auth.actions';

export interface IAuthInitialState {
  readonly isSigning: boolean;
  readonly token?: string;
  readonly error: boolean;
}

export const authReducer = createReducer<IAuthInitialState, RootAction>({
  token: '',
  isSigning: false,
  error: false
})
  .handleAction(signIn.request, state => ({
    ...state,
    isSigning: true,
    error: false
  }))
  .handleAction(signIn.success, (state, action) => ({
    ...state,
    isSigning: false,
    token: action.payload.token
  }))
  .handleAction(signIn.failure, state => ({
    ...state,
    isSigning: false,
    error: true
  }))
  .handleAction(signIn.cancel, state => ({
    ...state,
    isSigning: false,
    error: false
  }));
