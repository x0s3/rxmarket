import { IRestaurant } from 'core/src/interfaces';
import { createReducer, RootAction } from 'typesafe-actions';
import { getRestaurant, getRestaurants } from '../actions/restaurants.actions';

export interface IRestaurantsInitialState {
  readonly isFetching: boolean;
  readonly restaurants: IRestaurant[];
  readonly restaurantFetched: IRestaurant & {
    isFetching: boolean;
    hasError?: boolean;
  };
  readonly error: boolean;
}

export const restaurantReducer = createReducer<
  IRestaurantsInitialState,
  RootAction
>({
  isFetching: false,
  restaurants: [],
  restaurantFetched: { isFetching: false },
  error: false
})
  .handleAction(getRestaurants.request, state => ({
    ...state,
    isFetching: true,
    error: false
  }))
  .handleAction(getRestaurant.request, state => ({
    ...state,
    restaurantFetched: { isFetching: true }
  }))
  .handleAction(getRestaurants.success, (state, action) => ({
    ...state,
    isFetching: false,
    restaurants: [...action.payload]
  }))
  .handleAction(getRestaurant.success, (state, action) => ({
    ...state,
    restaurantFetched: { ...action.payload, isFetching: false }
  }))
  .handleAction(getRestaurants.failure, state => ({
    ...state,
    isFetching: false,
    error: true
  }))
  .handleAction(getRestaurants.cancel, state => ({
    ...state,
    isFetching: false,
    error: false
  }))
  .handleAction(getRestaurant.failure, state => ({
    ...state,
    restaurantFetched: { isFetching: false, hasError: true }
  }))
  .handleAction(getRestaurant.cancel, state => ({
    ...state,
    restaurantFetched: { isFetching: false, hasError: false }
  }));
