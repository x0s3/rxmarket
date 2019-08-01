import App, { AppProps, Container } from 'next/app';
import { Provider } from 'urql';
import withUrqlClient from '../lib/with-urql-client';

type IApp = AppProps & { urqlClient: any };

class MyApp extends App<IApp> {
  render() {
    const { Component, pageProps, urqlClient } = this.props;
    return (
      <Container>
        <Provider value={urqlClient}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withUrqlClient(MyApp);
