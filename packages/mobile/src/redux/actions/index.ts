import * as appStyleActions from './appStyle.actions';
import * as authActions from './auth.actions';
import * as restaurantActions from './restaurants.actions';

export default {
  authActions,
  restaurantActions,
  appStyleActions
} as const;
