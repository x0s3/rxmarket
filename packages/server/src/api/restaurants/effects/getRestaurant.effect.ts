import { HttpEffect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap, pluck } from 'rxjs/operators';
import { neverNullable } from '../../../util';
import { RestaurantDao } from '../model';

export const getRestaurantEffect$: HttpEffect = req$ =>
  req$.pipe(
    pluck('restaurant', '_id'),
    mergeMap(RestaurantDao.findById),
    mergeMap(neverNullable),
    map(restaurant => ({ body: restaurant })),
    catchError(() =>
      throwError(
        new HttpError('Restaurant does not exist', HttpStatus.NOT_FOUND)
      )
    )
  );
