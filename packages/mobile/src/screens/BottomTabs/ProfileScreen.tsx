import React from 'react';
import {
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
      <ScrollableAvoidKeyboard style={themedStyle.container}>
        <Text>Profile User</Text>
      </ScrollableAvoidKeyboard>
    );
  }
);

export const ProfileScreen = withStyles(ProfileView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1']
  }
}));
