import { IRestaurant } from 'core/src/interfaces';
import { createReducer, RootAction } from 'typesafe-actions';
import { getQuerySearch } from '../actions/search.actions';

export interface ISearchInitialState {
  readonly isSearching: boolean;
  readonly result: IRestaurant[];
  readonly error: boolean;
  readonly filters?: any;
}

export const searchReducer = createReducer<ISearchInitialState, RootAction>({
  isSearching: false,
  result: [],
  error: false
})
  .handleAction(getQuerySearch.request, state => ({
    ...state,
    isSearching: true
  }))
  .handleAction(getQuerySearch.success, (state, { payload }) => ({
    ...state,
    result: payload
  }))
  .handleAction(getQuerySearch.failure, state => ({
    ...state,
    isSearching: false,
    error: true
  }))
  .handleAction(getQuerySearch.cancel, state => ({
    ...state,
    isSearching: false,
    result: [],
    error: false
  }));
