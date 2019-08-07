import { YellowBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { initialStack, registerScreens } from './src/navigation';

// ui-kitten still uses this method :(
YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps is deprecated']);

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  initialStack();
});
