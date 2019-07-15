import React, { useCallback } from 'react';
import { View } from 'react-native';
import {
  Button,
  Text,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { useDispatch as useReduxAction } from 'react-redux';
import { AuthForm, ScrollableAvoidKeyboard, textStyle } from '../components';

interface ComponentProps {
  onSignInPress: (formData: { email: string; password: string }) => void;
  onSignUpPress: () => void;
  onForgotPasswordPress: () => void;
}

export type AuthViewProps = ThemedComponentProps & ComponentProps;

const AuthView = React.memo<AuthViewProps>(({ themedStyle, ...props }) => {
  const dispatch = useReduxAction();
  const onSignIn = useCallback(() => dispatch(''), [dispatch]);

  return (
    <ScrollableAvoidKeyboard style={themedStyle.container}>
      <View style={themedStyle.headerContainer}>
        <Text style={themedStyle.helloLabel} category={'h1'}>
          RxMarket
        </Text>
        <Text style={themedStyle.signInLabel} category={'s1'}>
          Sign in to your account
        </Text>
      </View>
      <AuthForm
        style={themedStyle.formContainer}
        onForgotPasswordPress={() => alert('WIP')}
        onDataChange={onFormDataChange}
      />
      <Button
        style={themedStyle.signInButton}
        textStyle={textStyle.button}
        size={'giant'}
        disabled={!formData}
        onPress={onSignIn}
      >
        SIGN IN
      </Button>
      <Button
        style={themedStyle.signUpButton}
        textStyle={themedStyle.signUpText}
        appearance={'ghost'}
        activeOpacity={0.75}
        onPress={() => alert('WIP')}
      >
        Don't have an account? Create
      </Button>
    </ScrollableAvoidKeyboard>
  );
});

export const AuthScreen = withStyles(AuthView, (theme: ThemeType) => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme['background-basic-color-1']
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 216,
      backgroundColor: theme['color-primary-default']
    },
    formContainer: {
      flex: 1,
      marginTop: 32,
      paddingHorizontal: 16
    },
    helloLabel: {
      color: 'white',
      ...textStyle.headline
    },
    signInLabel: {
      marginTop: 16,
      color: 'white',
      ...textStyle.subtitle
    },
    signInButton: {
      marginHorizontal: 16
    },
    signUpButton: {
      marginVertical: 12
    },
    signUpText: {
      color: theme['text-hint-color'],
      ...textStyle.subtitle
    }
  };
});
