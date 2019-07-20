import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';
import {
  Button,
  Text,
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';
import { Ionicon } from './Ionicon';
import { textStyle } from './style';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore
interface ComponentProps extends ListDerivedProps, TouchableOpacityProps {
  image: ImageSourcePropType;
  name: string;
  type: string;
  price: string;
  onAddPress: (index: number) => void;
  onPress: (index: number) => void;
}

export type ProductListItemProps = ThemedComponentProps & ComponentProps;

class ProductListItemComponent extends React.Component<ProductListItemProps> {
  onPress = () => {
    this.props.onPress(this.props.index);
  };

  onAddToBucket = () => {
    this.props.onAddPress(this.props.index);
  };

  render(): React.ReactNode {
    const {
      style,
      themedStyle,
      image,
      name,
      type,
      price,
      ...restProps
    } = this.props;

    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}
      >
        <Image
          style={themedStyle.image}
          source={{
            uri:
              'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/02/mcdonalds-logo.jpg?fit=500%2C366&ssl=1'
          }}
        />
        <View style={themedStyle.infoContainer}>
          <View>
            <Text style={themedStyle.nameLabel} category='s1'>
              {name}
            </Text>
            <Text style={themedStyle.typeLabel} appearance='hint' category='c1'>
              {type}
            </Text>
          </View>
          <View style={themedStyle.priceContainer}>
            <Text style={themedStyle.costLabel} category='s1'>
              {price}
            </Text>
            <Button
              style={themedStyle.buyButton}
              textStyle={textStyle.button}
              icon={() => (
                <Ionicon color={'#FFFFFF'} size={20} name={'md-cart'} />
              )}
              onPress={this.onAddToBucket}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export const ProductListItem = withStyles(
  ProductListItemComponent,
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
