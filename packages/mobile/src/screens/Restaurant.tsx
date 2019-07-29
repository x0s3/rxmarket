import React, { useMemo } from 'react';
import { Text, ThemeType, withStyles } from 'react-native-ui-kitten';
import { ScrollableAvoidKeyboard, ViewProps } from '../components';
import {
  useNavigationComponentDidAppear,
  useNavigationComponentDidDisappear
} from '../hooks/use-navigation';
import { useReduxAction, useReduxState } from '../hooks/use-redux';
import { getRestaurant } from '../redux/actions/restaurants.actions';
import { getRestaurantFetched } from '../redux/selectors';

const RestaurantView = React.memo<ViewProps & { id: number }>(
  ({ themedStyle, ...props }) => {
    const { name, isFetching, hasError } = useReduxState(getRestaurantFetched);
    const fetching = useMemo(() => !isFetching && !name, [isFetching, name]);

    const fetchRestaurantData = useReduxAction(getRestaurant.request);
    const cleanOrCancelData = useReduxAction(getRestaurant.cancel);

    useNavigationComponentDidAppear(
      () => fetchRestaurantData({ id: props.id }),
      props.componentId
    );

    useNavigationComponentDidDisappear(cleanOrCancelData, props.componentId);

    if (hasError) return <Text>Error fetching data restaurant :(</Text>;

    return (
      <ScrollableAvoidKeyboard style={themedStyle.container}>
        <Text>Restaurant details screen</Text>
        {fetching ? <Text>Fetching</Text> : <Text>{`Fetched ${name}`}</Text>}
      </ScrollableAvoidKeyboard>
    );
  }
);

export const RestaurantScreen = withStyles(
  RestaurantView,
  (theme: ThemeType) => ({
    container: {
      flex: 1,
      backgroundColor: theme['background-basic-color-1']
    }
  })
);
