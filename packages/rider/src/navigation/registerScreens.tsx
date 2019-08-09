import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Drawer } from '../components/Drawer';
import { Home } from '../screens/Home';
import { DRAWER_LEFT, HOME } from './constants';

const apolloClient = new ApolloClient({
  // link: new HttpLink({ uri: 'http://192.168.1.64:3000/graphql' }), @server endpoint
  link: new HttpLink({ uri: 'https://rickandmortyapi.com/graphql/' }),
  cache: new InMemoryCache()
});

const withProvider = (Component: any) => (props: any) => (
  <ApolloProvider client={apolloClient}>
    <Component {...props} />
  </ApolloProvider>
);

export function registerScreens(): void {
  Navigation.registerComponent(DRAWER_LEFT, () => Drawer);
  Navigation.registerComponent(HOME, () => withProvider(Home));
}
