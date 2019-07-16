import { HttpEffect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap, pluck } from 'rxjs/operators';
import { neverNullable } from '../../../util';
import { UsersDao } from '../model';

export const getMeEffect$: HttpEffect = req$ =>
  req$.pipe(
    pluck('user', '_id'),
    mergeMap(UsersDao.findById),
    mergeMap(neverNullable),
    map(user => ({ body: user })),
    catchError(err =>
      throwError(() =>
        err instanceof HttpError
          ? err
          : new HttpError('User does not exist', HttpStatus.NOT_FOUND)
      )
    )
  );
