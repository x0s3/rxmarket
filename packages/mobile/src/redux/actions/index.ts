import * as appStyleActions from './appStyle.actions';
import * as authActions from './auth.actions';
import * as restaurantActions from './restaurants.actions';
import * as searchActions from './search.actions';

export default {
  authActions,
  appStyleActions,
  restaurantActions,
  searchActions
} as const;
