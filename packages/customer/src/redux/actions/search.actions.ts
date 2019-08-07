import { IRestaurant } from 'core/src/interfaces';
import { createAsyncAction } from 'typesafe-actions';

export const getQuerySearch = createAsyncAction(
  'RESTAURANTS_SEARCH_REQUEST',
  'RESTAURANTS_SEARCH_SUCCESS',
  'RESTAURANTS_SEARCH_ERROR',
  'RESTAURANTS_SEARCH_CANCEL'
)<{ searchQuery: string }, IRestaurant[], boolean, undefined>();
