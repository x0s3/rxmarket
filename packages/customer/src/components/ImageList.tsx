import React from 'react';
import { FlatList } from 'react-native';
import {
  ListProps,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { EmptyList, NativeImage } from './';

type NativeImageList = Omit<ListProps, 'renderItem' | 'keyExtractor'> &
  ThemedComponentProps;

const keyExtractor = (item: string) => item;

const NativeImageList: React.FC<NativeImageList> = React.memo(
  ({ data, themedStyle, contentContainerStyle, ...props }) => (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <NativeImage style={themedStyle.item} source={{ uri: item }} />
      )}
      contentContainerStyle={[themedStyle.container, contentContainerStyle]}
      ListEmptyComponent={() => (
        <EmptyList style={{ fontSize: 20 }} text={'No images to show :('} />
      )}
      data={data}
      {...props}
    />
  )
);

export const ImageList = withStyles(NativeImageList, (theme: ThemeType) => ({
  container: {},
  item: {
    width: 180,
    height: 120,
    marginHorizontal: 8,
    backgroundColor: theme['background-basic-color-2']
  }
}));
