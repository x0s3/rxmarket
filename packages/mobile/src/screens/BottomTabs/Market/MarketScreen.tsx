import { dark as darkTheme, mapping } from '@eva-design/eva';
import React, { useEffect } from 'react';
import {
  ApplicationProvider,
  Layout,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import {
  CustomList,
  CustomRefresh,
  ScrollableAvoidKeyboard
} from '../../../components';
import { ProductListItem } from '../../../components/Testing';
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
      <ApplicationProvider mapping={mapping} theme={darkTheme}>
        <Layout style={{ flex: 1 }}>
          <ScrollableAvoidKeyboard style={themedStyle.container}>
            <CustomList
              refreshControl={
                <CustomRefresh
                  refreshing={isFetchRestaurants}
                  onRefresh={fetchRestaurants}
                />
              }
              numColumns={2}
              columnWrapperStyle={themedStyle.columnWrapper}
              renderItem={({ item }) => <ProductListItem {...item} />}
              data={restaurants}
              keyExtractor={i => i.id}
            />
          </ScrollableAvoidKeyboard>
        </Layout>
      </ApplicationProvider>
    );
  }
);

export const MarketScreen = withStyles(MarketView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1']
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-around'
  }
}));
