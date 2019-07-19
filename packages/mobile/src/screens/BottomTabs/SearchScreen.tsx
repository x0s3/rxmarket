import { dark as darkTheme, mapping } from '@eva-design/eva';
import React from 'react';
import {
  ApplicationProvider,
  Layout,
  Text,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { ScrollableAvoidKeyboard } from '../../components';

const SearchView = React.memo<any>(({ themedStyle, ...props }) => {
  return (
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <Layout style={{ flex: 1 }}>
        <ScrollableAvoidKeyboard style={themedStyle.container}>
          <Text>Search Restaurant</Text>
        </ScrollableAvoidKeyboard>
      </Layout>
    </ApplicationProvider>
  );
});

export const SearchScreen = withStyles(SearchView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1']
  }
}));
