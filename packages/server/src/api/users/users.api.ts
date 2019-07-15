import { combineRoutes, EffectFactory } from '@marblejs/core';
import { authorize$ } from '../auth';
import { getMeEffect$ } from './effects';

export const getMe$ = EffectFactory.matchPath('/me')
  .matchType('GET')
  .use(getMeEffect$);

export const users$ = combineRoutes('/users', {
  effects: [getMe$],
  middlewares: [authorize$]
});
