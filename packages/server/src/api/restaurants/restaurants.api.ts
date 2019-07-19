import { combineRoutes, EffectFactory } from '@marblejs/core';
import { getRestaurantEffect$, getRestaurantListEffect$ } from './effects';

export const getRestaurantList$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(getRestaurantListEffect$);

export const getRestaurant$ = EffectFactory.matchPath('/:id')
  .matchType('GET')
  .use(getRestaurantEffect$);

export const restaurants$ = combineRoutes('/restaurants', {
  effects: [getRestaurantList$, getRestaurant$],
});
