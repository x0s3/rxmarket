import { IRestaurant } from 'core/src/interfaces';
import { from, iif, of, pipe } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf, RootEpic } from 'typesafe-actions';
import { getQuerySearch } from '../actions/search.actions';

const getQuerySearchEpic: RootEpic = (action$, store$, { ajax, baseURL }) =>
  action$.pipe(
    filter(isActionOf(getQuerySearch.request)),
    switchMap(action =>
      iif(
        () => action.payload.searchQuery.trim().length > 0,
        from(
          ajax.getJSON(
            `${baseURL}/restaurants/search?query=${action.payload.searchQuery}`,
            {
              Authorization: `Bearer ${store$.value.auth.token}`
            }
          )
        ).pipe(
          map((r: IRestaurant | any) => getQuerySearch.success(r)),
          catchError(
            pipe(
              getQuerySearch.failure,
              of
            )
          ),
          takeUntil(action$.pipe(filter(isActionOf(getQuerySearch.cancel))))
        ),
        of(getQuerySearch.cancel())
      )
    )
  );

export default { getQuerySearchEpic } as const;
