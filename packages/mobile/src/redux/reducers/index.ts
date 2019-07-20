import { combineReducers } from 'redux';
import { authReducer as auth } from './auth.reducer';
import { restaurantReducer as restaurants } from './restaurants.reducer';

export const rootReducer = combineReducers({
  auth,
  restaurants
});
