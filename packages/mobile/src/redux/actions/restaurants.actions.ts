import { IRestaurant } from 'core/src/interfaces';
import { createAsyncAction } from 'typesafe-actions';

export const getRestaurants = createAsyncAction(
  'RESTAURANTS_GET_ALL_REQUEST',
  'RESTAURANTS_GET_ALL_SUCCESS',
  'RESTAURANTS_GET_ALL_ERROR',
  'RESTAURANTS_GET_ALL_CANCEL'
)<undefined, IRestaurant[], boolean, undefined>();
