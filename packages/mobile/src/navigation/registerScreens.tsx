import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { configureStore } from '../redux/store';
import { AuthScreen } from '../screens/AuthScreen';
import {
  BillsScreen,
  MarketScreen,
  ProfileScreen,
  SearchScreen
} from '../screens/BottomTabs';
import {
  AUTH_SCREEN,
  BILLS_SCREEN,
  MARKET_SCREEN,
  PROFILE_SCREEN,
  SEARCH_SCREEN
} from './constants';

const store = configureStore();

export function registerScreens(): void {
  Navigation.registerComponentWithRedux(
    AUTH_SCREEN,
    () => AuthScreen,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    MARKET_SCREEN,
    () => MarketScreen,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    SEARCH_SCREEN,
    () => SearchScreen,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    BILLS_SCREEN,
    () => BillsScreen,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    PROFILE_SCREEN,
    () => ProfileScreen,
    Provider,
    store
  );
}
