import { dark as darkTheme, mapping } from '@eva-design/eva';
import { LoginCredentials } from 'core/src/interfaces';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import {
  ApplicationProvider,
  Button,
  Layout,
  Text,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { useDispatch as useReduxAction } from 'react-redux';
import { AuthForm, ScrollableAvoidKeyboard, textStyle } from '../components';
import { signIn } from '../redux/actions/auth.actions';

interface ComponentProps {
  onSignInPress: (formData: { email: string; password: string }) => void;
  onSignUpPress: () => void;
  onForgotPasswordPress: () => void;
  componentId: string;
}

export type AuthViewProps = ThemedComponentProps & ComponentProps;

const AuthView = React.memo<AuthViewProps>(({ themedStyle, ...props }) => {
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
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <Layout style={{ flex: 1 }}>
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
            onPress={() => alert('WIP')}
          >
            Don't have an account? Create
          </Button>
        </ScrollableAvoidKeyboard>
      </Layout>
    </ApplicationProvider>
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
