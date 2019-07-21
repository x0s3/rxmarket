import { IRestaurant } from 'core/src/interfaces';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import {
  Button,
  Text,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { Ionicon, NativeImage, textStyle } from '../';

interface ComponentProps extends TouchableOpacityProps, IRestaurant {
  onBucket: () => void;
}

export type RestaurantCardProps = ThemedComponentProps & ComponentProps;

const RestaurantCardItem = React.memo<RestaurantCardProps>(
  ({ themedStyle, onPress, onBucket, type, price, name, image }) => (
    <TouchableOpacity onPress={onPress}>
      <NativeImage source={{ uri: image }} style={themedStyle.image} />
      <View style={themedStyle.infoContainer}>
        <View>
          <Text style={themedStyle.nameLabel} category={'s1'}>
            {name}
          </Text>
          <Text
            style={themedStyle.typeLabel}
            appearance={'hint'}
            category={'c1'}
          >
            {type}
          </Text>
        </View>
        <View style={themedStyle.priceContainer}>
          <Text style={themedStyle.costLabel} category={'s1'}>
            {`${price || `Not specified`}`}
          </Text>
          <Button
            style={themedStyle.buyButton}
            textStyle={textStyle.button}
            icon={() => (
              <Ionicon color={'#FFFFFF'} size={20} name={'md-cart'} />
            )}
            onPress={onBucket}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
);

export const RestaurantCard = withStyles(
  RestaurantCardItem,
  (theme: ThemeType) => ({
    container: {
      minHeight: 272,
      borderRadius: 12,
      overflow: 'hidden'
    },
    infoContainer: {
      flex: 1,
      padding: 16,
      justifyContent: 'space-between'
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    image: {
      flex: 1,
      width: null,
      height: 140
    },
    nameLabel: textStyle.subtitle,
    typeLabel: textStyle.caption1,
    costLabel: textStyle.subtitle,
    buyButton: {
      width: 32,
      height: 32
    }
  })
);
