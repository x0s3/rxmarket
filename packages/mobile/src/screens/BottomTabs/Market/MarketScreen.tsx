import { IRestaurant } from 'core/src/interfaces';
import React, { useCallback, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import { ThemeType, withStyles } from 'react-native-ui-kitten';
import { EmptyList, RestaurantCard, ViewProps } from '../../../components';
import { useNavigationScreen } from '../../../hooks/use-navigation';
import { useReduxAction, useReduxState } from '../../../hooks/use-redux';
import { RESTAURANT_DETAILS_SCREEN } from '../../../navigation';
import actions from '../../../redux/actions';
import {
  getFetchingRestaurants,
  getRestaurants
} from '../../../redux/selectors';

const renderItem = ({
  item,
  pushDetails
}: {
  item: IRestaurant | any;
  pushDetails: (item: number, name: string) => void;
}) => (
  <RestaurantCard
    onPress={() => pushDetails(item.id, item.name)}
    onBucket={() => Alert.alert(`${item.name}`, `Has ${item.rate} stars`)}
    {...item}
  />
);

const keyExtractor = (item: any) => item.id + item.name;

const MarketView = React.memo<ViewProps>(({ themedStyle, ...props }) => {
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
});

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
