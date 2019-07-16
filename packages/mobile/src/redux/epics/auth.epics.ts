import { Epic } from 'redux-observable';
import { from, of, pipe } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { signIn } from '../actions/';

const signInEpic: Epic = (action$, store$, { post, baseURL }) =>
  action$.pipe(
    filter(isActionOf(signIn.request)),
    switchMap(action =>
      from(
        post(`${baseURL}/auth/login`, {
          email: action.payload.email,
          password: action.payload.password
        })
      ).pipe(
        map(user => signIn.success()),
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
