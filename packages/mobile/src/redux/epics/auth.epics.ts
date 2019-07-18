import { IUser } from 'core/src/interfaces';
import { Epic } from 'redux-observable';
import { from, of, pipe } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { signIn } from '../actions/auth.actions';

const signInEpic: Epic = (action$, store$, { post, baseURL }) =>
  action$.pipe(
    filter(isActionOf(signIn.request)),
    switchMap(action =>
      from(
        post(
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

export default { signInEpic } as const;
