import React from 'react';
import { ThemeType, withStyles } from 'react-native-ui-kitten';
import {
  ContainerView,
  ScrollableAvoidKeyboard,
  SearchComponent,
  ViewProps
} from '../../components';

const SearchView = React.memo<ViewProps>(({ themedStyle, ...props }) => {
  return (
    <ScrollableAvoidKeyboard style={themedStyle.container}>
      <ContainerView contentContainerStyle={themedStyle.contentContainer}>
        <SearchComponent
          placeHolderText={'Search your favourite restaurant or food'}
          id={props.componentId}
        />
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
