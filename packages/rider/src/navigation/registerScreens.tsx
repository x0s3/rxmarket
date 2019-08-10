import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache, split } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Drawer } from '../components/Drawer';
import { Home } from '../screens/Home';
import { DRAWER_LEFT, HOME } from './constants';

const httpLink = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql/'
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3000/`,
  options: {
    reconnect: true
  }
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  // link: new HttpLink({ uri: 'http://192.168.1.64:3000/graphql' }), @server endpoint
  // link: new HttpLink({ uri: 'https://rickandmortyapi.com/graphql/' }),
  link,
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
