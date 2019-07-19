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
    topBar: {
      background: { color: '#1A2138' },
      title: {
        fontFamily: 'opensans-bold',
        color: '#F7F9FC'
      }
    },
    bottomTab: {
      iconColor: '#F7F9FC',
      selectedIconColor: '#42AAFF'
    }
  };
  loadIcons([
    { name: 'md-home' },
    { name: 'md-search' },
    { name: 'md-list-box' },
    { name: 'md-person' }
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
                        topBar: { title: { text: 'Search' } },
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
  if (false) authStack();
  else homeStack();
}
