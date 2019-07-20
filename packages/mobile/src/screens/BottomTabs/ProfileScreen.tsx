import { dark as darkTheme, mapping } from '@eva-design/eva';
import React from 'react';
import {
  ApplicationProvider,
  Layout,
  Text,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { ScrollableAvoidKeyboard } from '../../components';

const ProfileView = React.memo<ThemedComponentProps>(
  ({ themedStyle, ...props }) => {
    return (
      <ApplicationProvider mapping={mapping} theme={darkTheme}>
        <Layout style={{ flex: 1 }}>
          <ScrollableAvoidKeyboard style={themedStyle.container}>
            <Text>Profile User</Text>
          </ScrollableAvoidKeyboard>
        </Layout>
      </ApplicationProvider>
    );
  }
);

export const ProfileScreen = withStyles(ProfileView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1']
  }
}));
