import { IRestaurant } from 'core/src/interfaces';
import { createAsyncAction } from 'typesafe-actions';

export const getRestaurants = createAsyncAction(
  'RESTAURANTS_GET_ALL_REQUEST',
  'RESTAURANTS_GET_ALL_SUCCESS',
  'RESTAURANTS_GET_ALL_ERROR',
  'RESTAURANTS_GET_ALL_CANCEL'
)<undefined, IRestaurant[], boolean, undefined>();

export type GetRestaurant = Pick<IRestaurant, 'id'>;

export const getRestaurant = createAsyncAction(
  'RESTAURANTS_GET_RESTAURANT_REQUEST',
  'RESTAURANTS_GET_RESTAURANT_SUCCESS',
  'RESTAURANTS_GET_RESTAURANT_ERROR',
  'RESTAURANTS_GET_RESTAURANT_CANCEL'
)<GetRestaurant, IRestaurant, boolean, undefined>();
