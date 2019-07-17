import { HttpEffect } from '@marblejs/core';
import { flatMap, map } from 'rxjs/operators';
import { UsersDao } from '../model';

export const getUserListEffect$: HttpEffect = req$ =>
  req$.pipe(
    flatMap(UsersDao.findAllPublic),
    map(body => ({ body }))
  );
