import { combineRoutes, EffectFactory } from '@marblejs/core';
import { authorize$ } from '../auth';
import { getMeEffect$, getUserListEffect$ } from './effects';

export const getUserList$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(getUserListEffect$);

export const getMe$ = EffectFactory.matchPath('/me')
  .matchType('GET')
  .use(getMeEffect$);

export const users$ = combineRoutes('/users', {
  effects: [getUserList$, getMe$],
  middlewares: [authorize$]
});
