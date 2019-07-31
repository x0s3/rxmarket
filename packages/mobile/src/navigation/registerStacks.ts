import { Navigation } from 'react-native-navigation';
import { loadIcons, mergeProps } from '../utils';
import {
  AUTH_SCREEN,
  BILLS_SCREEN,
  MARKET_SCREEN,
  PROFILE_SCREEN,
  SEARCH_SCREEN
} from './constants';

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
  const sharedOptions = {
    bottomTab: {
      iconColor: '#F7F9FC',
      selectedIconColor: '#42AAFF'
    }
  };
  loadIcons([
    { name: 'md-home' },
    { name: 'md-search' },
    { name: 'md-list-box' },
    { name: 'md-person' },
    { name: 'md-options' }
  ]).then(icons =>
    Navigation.setRoot({
      root: {
        bottomTabs: {
          options: {
            bottomTabs: {
              backgroundColor: '#151A30'
            },
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
                      options: mergeProps(sharedOptions, {
                        topBar: { title: { text: 'Market' } },
                        bottomTab: { icon: icons[0] }
                      })
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
                      name: SEARCH_SCREEN,
                      options: mergeProps(sharedOptions, {
                        topBar: {
                          title: { text: 'Search' },
                          rightButtons: [
                            {
                              color: '#F7F9FC',
                              icon: icons[4],
                              id: 'SEARCH_FILTERS_ICON'
                            }
                          ]
                        },
                        bottomTab: { icon: icons[1] }
                      })
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
                      name: BILLS_SCREEN,
                      options: mergeProps(sharedOptions, {
                        topBar: { title: { text: 'Bills' } },
                        bottomTab: { icon: icons[2] }
                      })
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
                      options: mergeProps(sharedOptions, {
                        topBar: { title: { text: 'Profile' } },
                        bottomTab: { icon: icons[3] }
                      })
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
  Navigation.setDefaultOptions({
    popGesture: false,
    statusBar: {
      visible: true,
      style: 'light',
      backgroundColor: '#293157'
    },
    topBar: {
      background: { color: '#1A2138' },
      title: {
        fontFamily: 'opensans-bold',
        color: '#F7F9FC'
      },
      backButton: {
        color: '#F7F9FC'
      }
    },
    layout: {
      orientation: ['portrait']
    }
  });
  if (false) authStack();
  else homeStack();
}
