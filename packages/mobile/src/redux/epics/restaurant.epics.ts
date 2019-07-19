import { Epic } from 'redux-observable';

const getRestaurantsEpic$: Epic = (action$, store$, { getJSON, baseURL }) =>
  action$.pipe();

export default { getRestaurantsEpic$ } as const;
