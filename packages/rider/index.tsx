import { I18nManager, UIManager } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { initialStack, registerScreens } from './src/navigation';

if (UIManager.setLayoutAnimationEnabledExperimental)
  UIManager.setLayoutAnimationEnabledExperimental(true);

I18nManager.allowRTL(true);

Navigation.events().registerAppLaunchedListener(() => {
  registerScreens();
  initialStack();
});
