import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { configureStore } from '../redux/store';
import { AuthScreen } from '../screens/AuthScreen';
import { AUTH_SCREEN } from './constants';

const store = configureStore();

export function registerScreens(): void {
  Navigation.registerComponentWithRedux(
    AUTH_SCREEN,
    () => AuthScreen,
    Provider,
    store
  );
}
