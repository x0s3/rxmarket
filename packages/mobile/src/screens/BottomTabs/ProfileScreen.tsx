import React from 'react';
import { Text, ThemeType, withStyles } from 'react-native-ui-kitten';
import { ScrollableAvoidKeyboard, ViewProps } from '../../components';

interface ComponentProps {
  onSignInPress: (formData: { email: string; password: string }) => void;
  onSignUpPress: () => void;
  onForgotPasswordPress: () => void;
}

export type ProfileViewProps = ViewProps & ComponentProps;

const ProfileView = React.memo<ProfileViewProps>(
  ({ themedStyle, ...props }) => {
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
