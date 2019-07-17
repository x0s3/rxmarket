import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { configureStore } from '../redux/store';
import { AUTH_SCREEN } from './constants';

const store = configureStore();

// TODO fix component import
export function registerScreens(): void {
  Navigation.registerComponentWithRedux(
    AUTH_SCREEN,
    () => require('../screens/AuthScreen'),
    Provider,
    store
  );
}
