import { YellowBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { AUTH_SCREEN, registerScreens } from './src/navigation';

// ui-kitten still uses this method :(
YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps is deprecated']);

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
