import React from 'react';
import { View, ViewProps } from 'react-native';
import {
  Text,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { textStyle } from './';

export type PropsComponentProps = ThemedComponentProps &
  ViewProps & { data: string[] };

const PropsComponent = React.memo<PropsComponentProps>(
  ({ style, data, themedStyle, ...props }) => (
    <View {...props} style={[themedStyle.container, style]}>
      {data.map(item => (
        <Text status={'info'} style={themedStyle.item} key={item} children={item} />
      ))}
    </View>
  )
);

export const PropsList = withStyles(PropsComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    marginVertical: 2,
    marginRight: 8,
    ...textStyle.label
  }
}));
