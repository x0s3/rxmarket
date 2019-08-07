import React, { useCallback, useState } from 'react';
import {
  Input,
  InputProps,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';

interface FCProps extends InputProps {
  validator: (value: string) => boolean;
  formatter?: (value: string, stateValue: string) => string;
  onChangeText: any;
}

export type ValidationInputProps = ThemedComponentProps & FCProps;

const ValidationInputComponent = React.memo<ValidationInputProps>(
  ({ style, themedStyle, ...props }) => {
    const [value, setValue] = useState<string>('');
    const onChangeText = (v: string) => {
      setValue(v);
      props.onChangeText(v);
    };

    const isValid = (val: string): boolean => props.validator(val);

    const getStatus = useCallback((): string | undefined => {
      if (value && value.length) {
        return isValid(value) ? 'success' : 'danger';
      }

      return undefined;
    }, [value]);

    return (
      <Input
        autoCorrect={false}
        autoCapitalize={'none'}
        status={getStatus()}
        {...props}
        value={value}
        style={[themedStyle.container, style]}
        onChangeText={onChangeText}
      />
    );
  }
);

export const ValidationInput = withStyles(
  ValidationInputComponent,
  (theme: ThemeType) => ({
    container: {}
  })
);
