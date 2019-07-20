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
import { useNavigationComponentDidAppear } from '../../hooks/use-navigation';

interface ComponentProps {
  onSignInPress: (formData: { email: string; password: string }) => void;
  onSignUpPress: () => void;
  onForgotPasswordPress: () => void;
  componentId: string;
}

export type ProfileViewProps = ThemedComponentProps & ComponentProps;

const ProfileView = React.memo<ProfileViewProps>(
  ({ themedStyle, ...props }) => {
    useNavigationComponentDidAppear(() => {
      console.log('testing');
    }, props.componentId);

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
