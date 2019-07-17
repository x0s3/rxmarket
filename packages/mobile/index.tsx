import { Navigation } from 'react-native-navigation';
import { AUTH_SCREEN, registerScreens } from './src/navigation';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: AUTH_SCREEN
      }
    }
  });
});
