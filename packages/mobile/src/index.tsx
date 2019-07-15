import { dark as darkTheme, mapping } from '@eva-design/eva';
import React from 'react';
import {
  ApplicationProvider,
  Button,
  Layout,
  Text
} from 'react-native-ui-kitten';

const App = () => (
  <ApplicationProvider mapping={mapping} theme={darkTheme}>
    <Layout style={{ flex: 1 }}>
      <Text category='h4'>Welcome to RXMarket</Text>
      <Button>BUTTON</Button>
    </Layout>
  </ApplicationProvider>
);

export default App;
