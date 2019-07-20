import React from 'react';
import {
  List,
  ListProps,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';

export type GenericListType = ThemedComponentProps & ListProps;

const GenericList: React.FC<GenericListType> = ({ ...props }) => {
  return (
    <List
      {...props}
      data={props.data}
      renderItem={props.renderItem}
      keyExtractor={props.keyExtractor}
    />
  );
};

export const CustomList = withStyles(GenericList, (theme: ThemeType) => ({
  container: {},
  item: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: theme['background-basic-color-1']
  }
}));
