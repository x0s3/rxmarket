import React from 'react';
import { Text, ThemeType, withStyles } from 'react-native-ui-kitten';
import { ScrollableAvoidKeyboard, ViewProps } from '../../components';

const BillsView = React.memo<ViewProps>(({ themedStyle, ...props }) => {
  return (
    <ScrollableAvoidKeyboard style={themedStyle.container}>
      <Text style={{ alignSelf: 'center', fontSize: 50, paddingTop: 50 }}>
        Work In Progress
      </Text>
    </ScrollableAvoidKeyboard>
  );
});

export const BillsScreen = withStyles(BillsView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1']
  }
}));
