import { combineRoutes, EffectFactory } from '@marblejs/core';
import { auth$ } from './auth';
import { notFoundEffect$, versionEffect$ } from './common/effects';
import { users$ } from './users';

const root$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(versionEffect$);

const notFound$ = EffectFactory.matchPath('*')
  .matchType('*')
  .use(notFoundEffect$);

export const api$ = combineRoutes('/api/v1', [root$, auth$, users$, notFound$]);
