import { Navigation } from 'react-native-navigation';
import CustomProvider from '../redux/Provider';
import { configureStore } from '../redux/store';
import {
  AuthScreen,
  BillsScreen,
  MarketScreen,
  ProfileScreen,
  RestaurantScreen,
  SearchScreen
} from '../screens';
import {
  AUTH_SCREEN,
  BILLS_SCREEN,
  MARKET_SCREEN,
  PROFILE_SCREEN,
  RESTAURANT_DETAILS_SCREEN,
  SEARCH_SCREEN
} from './constants';

const store = configureStore();

export function registerScreens(): void {
  Navigation.registerComponentWithRedux(
    AUTH_SCREEN,
    () => AuthScreen,
    CustomProvider,
    store
  );
  Navigation.registerComponentWithRedux(
    MARKET_SCREEN,
    () => MarketScreen,
    CustomProvider,
    store
  );
  Navigation.registerComponentWithRedux(
    SEARCH_SCREEN,
    () => SearchScreen,
    CustomProvider,
    store
  );
  Navigation.registerComponentWithRedux(
    BILLS_SCREEN,
    () => BillsScreen,
    CustomProvider,
    store
  );
  Navigation.registerComponentWithRedux(
    PROFILE_SCREEN,
    () => ProfileScreen,
    CustomProvider,
    store
  );
  Navigation.registerComponentWithRedux(
    RESTAURANT_DETAILS_SCREEN,
    () => RestaurantScreen,
    CustomProvider,
    store
  );
}
