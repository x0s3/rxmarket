import { RootState } from 'typesafe-actions';

export const isFetching = (state: RootState): boolean => state.auth.isSigning;

export const getToken = (state: RootState): string => state.auth.token || '';
