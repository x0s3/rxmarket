import { Navigation } from 'react-native-navigation';
import { DRAWER_LEFT, HOME } from './constants';

export function initialStack(): void {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: DRAWER_LEFT
          }
        },
        center: {
          stack: {
            children: [
              {
                component: {
                  options: {
                    topBar: {
                      title: { text: 'LIVE TASKS' }
                    }
                  },
                  name: HOME
                }
              }
            ]
          }
        }
      }
    }
  });
}
