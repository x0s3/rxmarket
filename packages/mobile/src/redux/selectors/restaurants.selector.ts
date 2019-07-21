import { IRestaurant } from 'core/src/interfaces';
import { RootState } from 'typesafe-actions';

export const getRestaurants = (state: RootState): IRestaurant[] =>
  state.restaurants.restaurants;

export const getFetchingRestaurants = (state: RootState): boolean =>
  state.restaurants.isFetching;

