import React, { useEffect } from 'react';
import { ThemeType, withStyles } from 'react-native-ui-kitten';
import { RestaurantList, ViewProps } from '../../../components';
import { useReduxAction, useReduxState } from '../../../hooks/use-redux';
import actions from '../../../redux/actions';
import {
  getFetchingRestaurants,
  getRestaurants
} from '../../../redux/selectors';

const MarketView = React.memo<ViewProps>(({ themedStyle, ...props }) => {
  const fetchRestaurants = useReduxAction(
    actions.restaurantActions.getRestaurants.request
  );

  const restaurants = useReduxState(getRestaurants);
  const isFetchRestaurants = useReduxState(getFetchingRestaurants);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <RestaurantList
      componentId={props.componentId}
      refreshing={isFetchRestaurants}
      onRefresh={fetchRestaurants}
      data={restaurants}
    />
  );
});

export const MarketScreen = withStyles(MarketView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1']
  }
}));
