import { IRestaurant } from 'core/src/interfaces';
import { createReducer, RootAction } from 'typesafe-actions';
import { getRestaurants } from '../actions/restaurants.actions';

export interface IRestaurantsInitialState {
  readonly isFetching: boolean;
  readonly restaurants: IRestaurant[];
  readonly restaurantFetched: IRestaurant;
  readonly error: boolean;
}

export const restaurantReducer = createReducer<
  IRestaurantsInitialState,
  RootAction
>({
  isFetching: false,
  restaurants: [],
  restaurantFetched: {},
  error: false
})
  .handleAction(getRestaurants.request, (state, _) => ({
    ...state,
    isFetching: true,
    error: false
  }))
  .handleAction(getRestaurants.success, (state, action) => ({
    ...state,
    isFetching: false,
    restaurants: [...state.restaurants, ...action.payload]
  }))
  .handleAction(getRestaurants.failure, (state, _) => ({
    ...state,
    isFetching: false,
    error: true
  }))
  .handleAction(getRestaurants.cancel, (state, _) => ({
    ...state,
    isFetching: false,
    error: false
  }));
