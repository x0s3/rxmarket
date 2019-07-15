import { HttpEffect, HttpError, HttpStatus, use } from '@marblejs/core';
import { requestValidator$, t } from '@marblejs/middleware-io';
import { generateToken } from '@marblejs/middleware-jwt';
import { of, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Config } from '../../../config';
import { neverNullable } from '../../../util';
import { UsersDao } from '../../users';
import { generateTokenPayload } from '../helpers';

const validator$ = requestValidator$({
  body: t.type({
    email: t.string,
    password: t.string
  })
});

export const loginEffect$: HttpEffect = req$ =>
  req$.pipe(
    use(validator$),
    mergeMap(req =>
      of(req).pipe(
        map(re => re.body),
        mergeMap(UsersDao.findByCredentials),
        mergeMap(neverNullable),
        map(generateTokenPayload),
        map(generateToken({ secret: Config.jwt.secret })),
        map(token => ({ body: { token } })),
        catchError(() =>
          throwError(new HttpError('Unauthorized', HttpStatus.UNAUTHORIZED))
        )
      )
    )
  );
