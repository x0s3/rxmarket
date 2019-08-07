import { IRestaurant } from 'core/src/interfaces';
import React, { useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { ListProps } from 'react-native-ui-kitten';
import { useNavigationScreen } from '../hooks/use-navigation';
import { RESTAURANT_DETAILS_SCREEN } from '../navigation';
import { EmptyList, RestaurantCard } from './';

export type RestaurantTypeList = Omit<
  ListProps,
  'renderItem' | 'keyExtractor'
> & { componentId: string };

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

export const RestaurantList: React.FC<RestaurantTypeList> = React.memo<
  RestaurantTypeList
>(({ refreshing, data, ...props }) => {
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

  return (
    <FlatList<IRestaurant>
      refreshing={refreshing}
      ListEmptyComponent={EmptyList}
      renderItem={renderItemCall}
      data={data}
      keyExtractor={keyExtractor}
      {...props}
    />
  );
});
