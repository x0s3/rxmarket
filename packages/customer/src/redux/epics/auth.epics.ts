import { IUser } from 'core/src/interfaces';
import { from, of, pipe } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  takeUntil,
  tap
} from 'rxjs/operators';
import { isActionOf, RootEpic } from 'typesafe-actions';
import { homeStack } from '../../navigation';
import { signIn } from '../actions/auth.actions';

const signInEpic$: RootEpic = (action$, store$, { ajax, baseURL }) =>
  action$.pipe(
    filter(isActionOf(signIn.request)),
    switchMap(action =>
      from(
        ajax.post(
          `${baseURL}/auth/login`,
          {
            email: action.payload.email,
            password: action.payload.password
          },
          {
            'Content-Type': 'application/json'
          }
        )
      ).pipe(
        map(({ response }: IUser | any) => signIn.success(response)),
        tap(homeStack),
        catchError(
          pipe(
            signIn.failure,
            of
          )
        ),
        takeUntil(action$.pipe(filter(isActionOf(signIn.cancel))))
      )
    )
  );

export default { signInEpic$ } as const;
