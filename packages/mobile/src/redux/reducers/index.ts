import { combineReducers } from 'redux';
import { appStyleReducer as appStyle } from './appStyle.reducer';
import { authReducer as auth } from './auth.reducer';
import { restaurantReducer as restaurants } from './restaurants.reducer';
import { searchReducer as search } from './search.reducer';

export const rootReducer = combineReducers({
  appStyle,
  auth,
  restaurants,
  search
});
