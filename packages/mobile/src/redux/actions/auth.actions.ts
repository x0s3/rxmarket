import { LoginCredentials } from 'core/src/interfaces';
import { createAsyncAction } from 'typesafe-actions';

export const signIn = createAsyncAction(
  'USER_LOGIN_REQUEST',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_ERROR',
  'USER_LOGIN_CANCEL'
)<LoginCredentials, undefined, undefined, undefined>();
