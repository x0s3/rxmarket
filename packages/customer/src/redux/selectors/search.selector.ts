import { IRestaurant } from 'core/src/interfaces';
import { RootState } from 'typesafe-actions';

export const getIsSearching = (state: RootState): boolean =>
  state.search.isSearching;

export const getSearchResult = (state: RootState): IRestaurant[] =>
  state.search.result;
