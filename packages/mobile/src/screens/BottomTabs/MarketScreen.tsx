import { dark as darkTheme, mapping } from '@eva-design/eva';
import React from 'react';
import {
  ApplicationProvider,
  Layout,
  Text,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';

const MarketView = React.memo<any>(({ themedStyle, ...props }) => {
  return (
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <Layout style={{ flex: 1 }}>
        <Text>Market Home</Text>
      </Layout>
    </ApplicationProvider>
  );
});

export const MarketScreen = withStyles(MarketView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1']
  }
}));
