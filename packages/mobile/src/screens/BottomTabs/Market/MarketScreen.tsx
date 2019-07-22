import { IRestaurant } from 'core/src/interfaces';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { EmptyList } from '../../../components';
import { RestaurantCard } from '../../../components/market';
import { useReduxAction, useReduxState } from '../../../hooks/use-redux';
import actions from '../../../redux/actions';
import {
  getFetchingRestaurants,
  getRestaurants
} from '../../../redux/selectors';

const MarketView = React.memo<ThemedComponentProps>(
  ({ themedStyle, ...props }) => {
    const fetchRestaurants = useReduxAction(
      actions.restaurantActions.getRestaurants.request
    );

    const restaurants = useReduxState(getRestaurants);
    const isFetchRestaurants = useReduxState(getFetchingRestaurants);

    useEffect(() => {
      fetchRestaurants();
    }, []);

    return (
      <FlatList<IRestaurant>
        refreshing={isFetchRestaurants}
        onRefresh={fetchRestaurants}
        ListEmptyComponent={EmptyList}
        renderItem={({ item }) => (
          <RestaurantCard
            onPress={() => alert('Push restaurant screen')}
            onBucket={() => alert('Added to cart')}
            {...item}
          />
        )}
        data={restaurants}
        keyExtractor={i => i._id}
      />
    );
  }
);

export const MarketScreen = withStyles(MarketView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1']
  }
  // columnWrapper: {
  //   flex: 1,
  //   justifyContent: 'space-around'
  // }
}));
