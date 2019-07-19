import { HttpEffect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { neverNullable } from '../../../util';
import { RestaurantDao } from '../model';

export const getRestaurantEffect$: HttpEffect = req$ =>
  req$.pipe(
    map((req: any) => req.params.id),
    mergeMap(RestaurantDao.findById),
    mergeMap(neverNullable),
    map(restaurant => ({ body: restaurant })),
    catchError(() =>
      throwError(
        new HttpError('Restaurant does not exist', HttpStatus.NOT_FOUND)
      )
    )
  );
