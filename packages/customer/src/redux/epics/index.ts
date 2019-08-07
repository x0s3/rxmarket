import { combineEpics } from 'redux-observable';
import authEpics from './auth.epics';
import restaurantsEpics from './restaurant.epics';
import searchEpics from './search.epics';

export default combineEpics(
  ...Object.values(authEpics),
  ...Object.values(restaurantsEpics),
  ...Object.values(searchEpics)
);
