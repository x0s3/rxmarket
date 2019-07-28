import { IRestaurant } from 'core/src/interfaces';
import { from, of, pipe } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf, RootEpic } from 'typesafe-actions';
import { getRestaurants } from '../actions/restaurants.actions';

const getRestaurantsEpic$: RootEpic = (action$, store$, { ajax, baseURL }) =>
  action$.pipe(
    filter(isActionOf(getRestaurants.request)),
    switchMap(_ =>
      from(
        ajax.getJSON(`${baseURL}/restaurants`, {
          Authorization: `Bearer ${store$.value.auth.token}`
        })
      ).pipe(
        map((r: IRestaurant | any) => getRestaurants.success(r)),
        catchError(
          pipe(
            getRestaurants.failure,
            of
          )
        ),
        takeUntil(action$.pipe(filter(isActionOf(getRestaurants.cancel))))
      )
    )
  );

export default { getRestaurantsEpic$ } as const;
