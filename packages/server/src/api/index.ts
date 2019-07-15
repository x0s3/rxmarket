import { combineRoutes, EffectFactory } from '@marblejs/core';
import { notFoundEffect$ } from './common/effects';

const notFound$ = EffectFactory.matchPath('*')
  .matchType('*')
  .use(notFoundEffect$);

export const api$ = combineRoutes('/api/v1', [notFound$]);
