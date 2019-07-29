import React from 'react';
import { StyleProp, TextStyle, View, ViewProps } from 'react-native';
import {
  Text,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';

interface ComponentProps {
  scale: string;
  valueStyle?: StyleProp<TextStyle>;
  scaleStyle?: StyleProp<TextStyle>;
  children: string;
}

export type PriceTextProps = ThemedComponentProps & ViewProps & ComponentProps;

const PriceTextComponent: React.FC<PriceTextProps> = React.memo(
  ({ style, themedStyle, valueStyle, scaleStyle, children, scale }) => (
    <View style={[themedStyle.container, style]}>
      <Text style={[themedStyle.valueLabel, valueStyle]}>{children}</Text>
      <Text style={[themedStyle.scaleLabel, scaleStyle]}>{`/${scale}`}</Text>
    </View>
  )
);

export const PriceText = withStyles(PriceTextComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row'
  },
  valueLabel: {},
  scaleLabel: {
    alignSelf: 'flex-end'
  }
}));
