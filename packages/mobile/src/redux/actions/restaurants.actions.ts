import { IRestaurant } from 'core/src/interfaces';
import { createAsyncAction } from 'typesafe-actions';

export const getRestaurants = createAsyncAction(
  'RESTAURANTS_ALL_REQUEST',
  'RESTAURANTS_ALL_SUCCESS',
  'RESTAURANTS_ALL_ERROR',
  'RESTAURANTS_ALL_CANCEL'
)<undefined, IRestaurant, undefined, undefined>();
