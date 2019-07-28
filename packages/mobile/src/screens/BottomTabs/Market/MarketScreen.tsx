import { IRestaurant } from 'core/src/interfaces';
import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { EmptyList, RestaurantCard } from '../../../components';
import { useNavigationScreen } from '../../../hooks/use-navigation';
import { useReduxAction, useReduxState } from '../../../hooks/use-redux';
import { RESTAURANT_DETAILS_SCREEN } from '../../../navigation';
import actions from '../../../redux/actions';
import {
  getFetchingRestaurants,
  getRestaurants
} from '../../../redux/selectors';

const renderItem = ({ item, pushDetails }) => (
  <RestaurantCard
    onPress={() => pushDetails(item.id, item.name)}
    onBucket={() => alert(`${item.name} has ${item.rate} stars`)}
    {...item}
  />
);

const keyExtractor = (item: IRestaurant) => item.id + item.name;

const MarketView = React.memo<ThemedComponentProps & { componentId: string }>(
  ({ themedStyle, ...props }) => {
    const pushDetails = useCallback(
      (id, name) =>
        useNavigationScreen({
          componentId: props.componentId,
          actionType: 'push',
          name: RESTAURANT_DETAILS_SCREEN,
          options: {
            topBar: {
              title: {
                text: name
              }
            },
            bottomTabs: {
              visible: false,
              drawBehind: true,
              animate: true
            }
          },
          passProps: { id }
        }),
      []
    );
    const renderItemCall = useCallback(
      ({ item }) => renderItem({ item, pushDetails }),
      []
    );
    
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
