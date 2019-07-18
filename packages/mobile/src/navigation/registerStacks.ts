import { Navigation } from 'react-native-navigation';
import { AUTH_SCREEN } from './constants';

export function authStack(): void {
  Navigation.setRoot({
    root: {
      component: {
        name: AUTH_SCREEN
      }
    }
  });
}

export function homeStack(): void {
  return;
}

export function initialStack(): void {
  if (true) authStack();
  else homeStack();
}
