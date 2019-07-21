import { dark as darkTheme, mapping } from '@eva-design/eva';
import React, { useCallback, useEffect } from 'react';
import {
  ApplicationProvider,
  Layout,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { useDispatch as useReduxAction } from 'react-redux';
import { CustomList, ScrollableAvoidKeyboard } from '../../../components';
import { ProductListItem } from '../../../components/Testing';
import actions from '../../../redux/actions';

const MarketView = React.memo<ThemedComponentProps>(
  ({ themedStyle, ...props }) => {
    const dispatch = useReduxAction();
    const fetchRestaurants = useCallback(() => {
      dispatch(actions.restaurantActions.getRestaurants.request());
    }, [dispatch]);

    useEffect(() => {
      fetchRestaurants();
    }, []);

    return (
      <ApplicationProvider mapping={mapping} theme={darkTheme}>
        <Layout style={{ flex: 1 }}>
          <ScrollableAvoidKeyboard style={themedStyle.container}>
            <CustomList
              numColumns={2}
              columnWrapperStyle={themedStyle.columnWrapper}
              renderItem={({ item }) => <ProductListItem {...item} />}
              data={[
                { id: 'hola', name: 'McDonalds', type: 'Meal', price: 200 },
                { id: 'hola2', name: 'Burger King', type: 'Meal', price: 200 },
                { id: 'hola3', name: 'KFC', type: 'Meal', price: 200 },
                { id: 'hola4', name: 'TelePizza', type: 'Meal', price: 200 },
                { id: 'hola5', name: 'Dominos', type: 'Meal', price: 200 },
                { id: 'hola6', name: 'PizzaHut', type: 'Meal', price: 200 }
              ]}
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
