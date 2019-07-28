import React from 'react';
import { Text, ThemeType, withStyles } from 'react-native-ui-kitten';
import { ScrollableAvoidKeyboard, ViewProps } from '../components';
import { useReduxAction, useReduxState } from '../hooks/use-redux';

const RestaurantView = React.memo<ViewProps>(({ themedStyle, ...props }) => {
  const restaurantData = useReduxState();

  const fetchRestaurantData = useReduxAction();

  return (
    <ScrollableAvoidKeyboard style={themedStyle.container}>
      <Text>Restaurant details screen</Text>
    </ScrollableAvoidKeyboard>
  );
});

export const RestaurantScreen = withStyles(
  RestaurantView,
  (theme: ThemeType) => ({
    container: {
      flex: 1,
      backgroundColor: theme['background-basic-color-1']
    }
  })
);
