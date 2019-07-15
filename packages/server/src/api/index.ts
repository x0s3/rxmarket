import { combineRoutes, EffectFactory } from '@marblejs/core';
import { notFoundEffect$, versionEffect$ } from './common/effects';

const root$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(versionEffect$);

const notFound$ = EffectFactory.matchPath('*')
  .matchType('*')
  .use(notFoundEffect$);

export const api$ = combineRoutes('/api/v1', [root$, notFound$]);
