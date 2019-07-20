import { IRestaurant } from 'core/src/interfaces';
import { Epic } from 'redux-observable';
import { from, of, pipe } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { getRestaurants } from '../actions/restaurants.actions';

const getRestaurantsEpic$: Epic = (action$, store$, { getJSON, baseURL }) =>
  action$.pipe(
    filter(isActionOf(getRestaurants.request)),
    switchMap(_ =>
      from(getJSON(`${baseURL}/restaurants`)).pipe(
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
