import { combineEpics, Epic } from 'redux-observable';
import authEpics from './auth.epics';
import restaurantsEpics from './restaurant.epics';

export const rootEpic: Epic = combineEpics(
  ...Object.values(authEpics),
  ...Object.values(restaurantsEpics)
);
