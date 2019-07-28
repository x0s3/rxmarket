import { LoginCredentials } from 'core/src/interfaces';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Button, Text, ThemeType, withStyles } from 'react-native-ui-kitten';
import { useDispatch as useReduxAction } from 'react-redux';
import {
  AuthForm,
  ScrollableAvoidKeyboard,
  textStyle,
  ViewProps
} from '../components';
import { homeStack } from '../navigation';
import { signIn } from '../redux/actions/auth.actions';

const AuthView = React.memo<ViewProps>(({ themedStyle, ...props }) => {
  const [dataLogin, setDataLogin] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const dispatch = useReduxAction();
  const onSignIn = useCallback(() => dispatch(signIn.request(dataLogin)), [
    dispatch,
    dataLogin
  ]);

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
        onDataChange={setDataLogin}
      />
      <Button
        style={themedStyle.signInButton}
        textStyle={textStyle.button}
        size={'giant'}
        disabled={false}
        onPress={onSignIn}
      >
        SIGN IN
      </Button>
      <Button
        style={themedStyle.signUpButton}
        textStyle={themedStyle.signUpText}
        appearance={'ghost'}
        activeOpacity={0.75}
        onPress={homeStack}
      >
        Don't have an account? Create
      </Button>
    </ScrollableAvoidKeyboard>
  );
});

export const AuthScreen = withStyles(AuthView, (theme: ThemeType) => ({
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
}));
