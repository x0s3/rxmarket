import { IRestaurant } from 'core/src/interfaces';
import { from, of, pipe } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf, RootEpic } from 'typesafe-actions';
import { getRestaurant, getRestaurants } from '../actions/restaurants.actions';

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

const getRestaurantEpic$: RootEpic = (action$, store$, { ajax, baseURL }) =>
  action$.pipe(
    filter(isActionOf(getRestaurant.request)),
    switchMap(action =>
      from(
        ajax.getJSON(`${baseURL}/restaurants/${action.payload.id}`, {
          Authorization: `Bearer ${store$.value.auth.token}`
        })
      ).pipe(
        map((r: IRestaurant | any) => getRestaurant.success(r)),
        catchError(
          pipe(
            getRestaurant.failure,
            of
          )
        ),
        takeUntil(action$.pipe(filter(isActionOf(getRestaurant.cancel))))
      )
    )
  );

export default { getRestaurantsEpic$, getRestaurantEpic$ } as const;
