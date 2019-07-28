import { combineEpics } from 'redux-observable';
import authEpics from './auth.epics';
import restaurantsEpics from './restaurant.epics';

export default combineEpics(
  ...Object.values(authEpics),
  ...Object.values(restaurantsEpics)
);
