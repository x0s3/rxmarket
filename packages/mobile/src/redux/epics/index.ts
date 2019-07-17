import { combineEpics, Epic } from 'redux-observable';
import authEpics from './auth.epics';

export const rootEpic: Epic = combineEpics(...Object.values(authEpics));
