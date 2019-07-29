import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Button, Text, ThemeType, withStyles } from 'react-native-ui-kitten';
import {
  ImageList,
  NativeImage,
  PriceText,
  ScrollableAvoidKeyboard,
  textStyle,
  ViewProps
} from '../components';
import {
  useNavigationComponentDidAppear,
  useNavigationComponentDidDisappear
} from '../hooks/use-navigation';
import { useReduxAction, useReduxState } from '../hooks/use-redux';
import { getRestaurant } from '../redux/actions/restaurants.actions';
import { getRestaurantFetched } from '../redux/selectors';

const RestaurantView = React.memo<ViewProps & { id: number }>(
  ({ themedStyle, ...props }) => {
    const {
      images,
      image,
      name,
      description,
      isFetching,
      hasError
    } = useReduxState(getRestaurantFetched);
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
        <NativeImage
          style={themedStyle.backgroundImage}
          source={{ uri: image }}
        />
        <View style={themedStyle.infoContainer}>
          <View style={themedStyle.detailsContainer}>
            <Text style={themedStyle.titleLabel} category='h6'>
              {name}
            </Text>
            <Text style={themedStyle.rentLabel} appearance='hint' category='p2'>
              Delivery approx. time
            </Text>
            <View style={themedStyle.bookContainer}>
              <PriceText
                style={themedStyle.priceLabel}
                valueStyle={themedStyle.priceValueLabel}
                scaleStyle={themedStyle.priceScaleLabel}
                scale='min'
              >
                {`20`}
              </PriceText>
              <Button
                style={themedStyle.bookButton}
                textStyle={textStyle.button}
                onPress={() => alert('hola manola')}
              >
                WEB
              </Button>
            </View>
          </View>
          <View style={themedStyle.facilitiesContainer}>
            <Text style={themedStyle.sectionLabel} category='s1'>
              Facilities
            </Text>
          </View>
        </View>
        <View style={themedStyle.aboutSection}>
          <Text style={themedStyle.sectionLabel} category='s1'>
            About
          </Text>
          <Text style={themedStyle.aboutLabel} appearance='hint'>
            {description}
          </Text>
        </View>
        <View style={themedStyle.photoSection}>
          <Text
            style={[themedStyle.sectionLabel, themedStyle.photoLabel]}
            category='s1'
          >
            Photos
          </Text>
          <ImageList
            horizontal={true}
            contentContainerStyle={themedStyle.photoList}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
            data={images}
          />
        </View>
      </ScrollableAvoidKeyboard>
    );
  }
);

export const RestaurantScreen = withStyles(
  RestaurantView,
  (theme: ThemeType) => ({
    container: {
      backgroundColor: theme['background-basic-color-2']
    },
    backgroundImage: {
      flex: 1,
      minHeight: 280
    },
    infoContainer: {
      marginTop: -80,
      marginHorizontal: 16,
      borderRadius: 12,
      backgroundColor: theme['background-basic-color-1']
    },
    detailsContainer: {
      paddingHorizontal: 24,
      paddingVertical: 24,
      borderBottomWidth: 1,
      borderBottomColor: theme['border-basic-color-2']
    },
    bookContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    facilitiesContainer: {
      paddingHorizontal: 24,
      paddingVertical: 24
    },
    primaryFacilityList: {
      paddingVertical: 16
    },
    facilityList: {
      paddingVertical: 12
    },
    aboutSection: {
      marginHorizontal: 24,
      marginVertical: 24
    },
    photoSection: {
      marginVertical: 8
    },
    photoList: {
      marginHorizontal: 16,
      marginVertical: 16
    },
    titleLabel: textStyle.headline,
    rentLabel: {
      marginTop: 24,
      ...textStyle.paragraph
    },
    bookButton: {},
    priceLabel: {
      marginTop: 8
    },
    priceValueLabel: {
      fontFamily: 'opensans-bold',
      fontSize: 26,
      lineHeight: 32
    },
    priceScaleLabel: {
      fontSize: 13,
      lineHeight: 24,
      ...textStyle.paragraph
    },
    sectionLabel: textStyle.subtitle,
    aboutLabel: {
      marginVertical: 16,
      ...textStyle.paragraph
    },
    photoLabel: {
      marginHorizontal: 24
    }
  })
);
