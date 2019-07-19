import { HttpEffect } from '@marblejs/core';
import { flatMap, map } from 'rxjs/operators';
import { RestaurantDao } from '../model';

export const getRestaurantListEffect$: HttpEffect = req$ =>
  req$.pipe(
    flatMap(RestaurantDao.findAllPublic),
    map(body => ({ body }))
  );
