import { Navigation } from 'react-native-navigation';
import { Colors } from 'react-native-ui-lib';
import { loadIcons } from '../utils/getIcon';
import { DRAWER_LEFT, HOME } from './constants';

export function initialStack(): void {
  loadIcons([{ name: 'md-menu' }]).then(icons =>
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
                        background: {
                          color: Colors.blue20
                        },
                        leftButtons: [
                          {
                            id: 'leftDrawer',
                            icon: icons[0]
                          }
                        ],
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
    })
  );
}
