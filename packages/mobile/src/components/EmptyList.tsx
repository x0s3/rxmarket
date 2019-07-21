import React from 'react';
import { Text, TextProps } from 'react-native-ui-kitten';
import { textStyle } from './';

interface IEmptyList extends TextProps {
  text?: string;
}

export const EmptyList: React.FC<IEmptyList> = ({
  text = 'Empty list :(',
  ...props
}) => (
  <Text
    {...props}
    style={{
      paddingTop: 50,
      alignSelf: 'center',
      justifyContent: 'center',
      ...textStyle.headline,
      fontWeight: 'bold',
      fontSize: 40
    }}
    children={'Empty list :('}
  />
);
