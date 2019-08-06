import App, { AppProps, Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../lib/with-apollo-client';

type IApp = AppProps & { apolloClient: any };

class MyApp extends App<IApp> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
