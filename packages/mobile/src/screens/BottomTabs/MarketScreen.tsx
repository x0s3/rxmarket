import { dark as darkTheme, mapping } from '@eva-design/eva';
import React, { useCallback, useEffect } from 'react';
import {
  ApplicationProvider,
  Layout,
  Text,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { useDispatch as useReduxAction } from 'react-redux';
import { ScrollableAvoidKeyboard } from '../../components';
import actions from '../../redux/actions';

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
            <Text>Market Home</Text>
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
  }
}));
