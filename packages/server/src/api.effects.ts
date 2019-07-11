import { EffectFactory } from '@marblejs/core';
import { mapTo } from 'rxjs/operators';

export const api$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(req$ => req$.pipe(mapTo({ body: `Hello, world! 👻` })));
