import { NameValidator, PasswordValidator } from 'core/dist/validators';
import React from 'react';
import { View, ViewProps } from 'react-native';
import {
  Button,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { Ionicon, textStyle, ValidationInput } from '../';

interface ComponentProps {
  onForgotPasswordPress: () => void;
  onDataChange: (value: any | undefined) => void;
}

export type SignInFormProps = ThemedComponentProps & ViewProps & ComponentProps;

const AuthFormComponent = React.memo<SignInFormProps>(
  ({ themedStyle, style, ...props }) => {
    return (
      <View style={[themedStyle.container, style]} {...props}>
        <View style={themedStyle.formContainer}>
          <ValidationInput
            textStyle={textStyle.paragraph}
            placeholder={'User Email'}
            icon={() => <Ionicon name={'md-mail'} />}
            validator={NameValidator}
            textContentType={'emailAddress'}
            onChangeText={(email: string) =>
              props.onDataChange((d: any) => ({ ...d, email }))
            }
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            textStyle={textStyle.paragraph}
            placeholder={'Password'}
            icon={() => <Ionicon name={'md-lock'} />}
            secureTextEntry={true}
            textContentType={'password'}
            validator={PasswordValidator}
            onChangeText={(password: string) =>
              props.onDataChange((d: any) => ({ ...d, password }))
            }
          />
          <View style={themedStyle.forgotPasswordContainer}>
            <Button
              style={themedStyle.forgotPasswordButton}
              textStyle={themedStyle.forgotPasswordText}
              appearance='ghost'
              activeOpacity={0.75}
              onPress={() => alert('')}
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
