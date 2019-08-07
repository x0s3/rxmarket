import React from 'react';
import { ThemeType, withStyles } from 'react-native-ui-kitten';
import {
  ContainerView,
  RestaurantList,
  ScrollableAvoidKeyboard,
  SearchComponent,
  ViewProps
} from '../../components';
import { useReduxAction, useReduxState } from '../../hooks/use-redux';
import { getQuerySearch } from '../../redux/actions/search.actions';
import { getIsSearching, getSearchResult } from '../../redux/selectors';

const SearchView = React.memo<ViewProps>(({ themedStyle, ...props }) => {
  const isSearching = useReduxState(getIsSearching);
  const searchResult = useReduxState(getSearchResult);

  const searchAction = useReduxAction(getQuerySearch.request);

  return (
    <ScrollableAvoidKeyboard style={themedStyle.container}>
      <ContainerView contentContainerStyle={themedStyle.contentContainer}>
        <SearchComponent
          action={searchAction}
          placeHolderText={'Search your favourite restaurant or food'}
          id={props.componentId}
        />
        {searchResult.length > 0 && (
          <RestaurantList
            refreshing={isSearching}
            data={searchResult}
            componentId={props.componentId}
          />
        )}
      </ContainerView>
    </ScrollableAvoidKeyboard>
  );
});

export const SearchScreen = withStyles(SearchView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1']
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 16
  }
}));
