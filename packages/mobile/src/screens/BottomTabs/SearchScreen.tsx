import React from 'react';
import { Text, ThemeType, withStyles } from 'react-native-ui-kitten';
import { ScrollableAvoidKeyboard, ViewProps } from '../../components';

const SearchView = React.memo<ViewProps>(({ themedStyle, ...props }) => {
  return (
    <ScrollableAvoidKeyboard style={themedStyle.container}>
      <Text>Search Restaurant</Text>
    </ScrollableAvoidKeyboard>
  );
});

export const SearchScreen = withStyles(SearchView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1']
  }
}));
