import { NameValidator, PasswordValidator } from 'core/dist/validators';
import React from 'react';
import { View, ViewProps } from 'react-native';
import {
  Button,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { textStyle, ValidationInput } from '../';

interface ComponentProps {
  onForgotPasswordPress: () => void;
  onDataChange: (value: any | undefined) => void;
}

export type SignInForm2Props = ThemedComponentProps &
  ViewProps &
  ComponentProps;

const AuthFormComponent = React.memo<SignInForm2Props>(
  ({ themedStyle, style, ...props }) => {
    return (
      <View style={[themedStyle.container, style]} {...props}>
        <View style={themedStyle.formContainer}>
          <ValidationInput
            textStyle={textStyle.paragraph}
            placeholder='User Name'
            //icon={PersonIconFill}
            validator={NameValidator}
            onChangeText={onUsernameInputTextChange}
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            textStyle={textStyle.paragraph}
            placeholder='Password'
            //icon={EyeOffIconFill}
            secureTextEntry={true}
            validator={PasswordValidator}
            onChangeText={onPasswordInputTextChange}
          />
          <View style={themedStyle.forgotPasswordContainer}>
            <Button
              style={themedStyle.forgotPasswordButton}
              textStyle={themedStyle.forgotPasswordText}
              appearance='ghost'
              activeOpacity={0.75}
              onPress={onForgotPasswordButtonPress}
            >
              Forgot your password?
            </Button>
          </View>
        </View>
      </View>
    );
  }
);

export const AuthForm = withStyles(AuthFormComponent, (theme: ThemeType) => ({
  container: {},
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  passwordInput: {
    marginTop: 16
  },
  forgotPasswordButton: {
    paddingHorizontal: 0
  },
  forgotPasswordText: {
    fontSize: 15,
    color: theme['text-hint-color'],
    ...textStyle.subtitle
  }
}));
