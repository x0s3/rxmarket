import { Navigation } from 'react-native-navigation';
import { loadIcons } from '../utils/getIcon';
import { AUTH_SCREEN, MARKET_SCREEN, PROFILE_SCREEN } from './constants';

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
  loadIcons([
    { name: 'md-basket' },
    { name: 'md-search' },
    { name: 'md-list-box' },
    { name: 'md-person' }
  ]).then(icons =>
    Navigation.setRoot({
      root: {
        bottomTabs: {
          options: {
            topBar: {
              visible: true
            }
          },
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: MARKET_SCREEN,
                      options: {
                        topBar: {
                          title: { text: 'Market' }
                        },
                        bottomTab: {
                          icon: icons[0]
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: PROFILE_SCREEN,
                      options: {
                        topBar: {
                          title: { text: 'Profile' }
                        },
                        bottomTab: {
                          icon: icons[3]
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    })
  );
}

export function initialStack(): void {
  if (false) authStack();
  else homeStack();
}
