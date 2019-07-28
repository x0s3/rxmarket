import { IRestaurant } from 'core/src/interfaces';
import React, { useCallback, useEffect } from 'react';
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

const renderItem = ({ item }) => (
  <RestaurantCard
    onPress={() => alert(`${item.name}`)}
    onBucket={() => alert(`${item.name} has ${item.rate} stars`)}
    {...item}
  />
);

const keyExtractor = (item: IRestaurant) => item.id + item.name;

const MarketView = React.memo<ThemedComponentProps>(
  ({ themedStyle, ...props }) => {
    const renderItemCall = useCallback(({ item }) => renderItem({ item }), []);
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
        renderItem={renderItemCall}
        data={restaurants}
        keyExtractor={keyExtractor}
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
