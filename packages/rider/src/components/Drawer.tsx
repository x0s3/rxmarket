import React from 'react';
import { Alert, FlatList, ScrollView, StyleSheet } from 'react-native';
import {
  Avatar,
  Colors,
  ListItem,
  Text,
  ThemeManager,
  View
} from 'react-native-ui-lib';
import { EARNINGS, OPTIONS, PROFILE } from '../navigation';
import { CustomSwitch, Ionicon } from './';

interface IData {
  readonly text: string;
  readonly path: string;
  readonly description?: string;
  readonly icon: string;
}

const data: IData[] = [
  {
    text: 'Profile',
    path: PROFILE,
    description: 'Change your profile settings',
    icon: 'md-person'
  },
  {
    text: 'Options',
    path: OPTIONS,
    description: 'Change your job settings',
    icon: 'md-settings'
  },
  {
    text: 'Wallet',
    path: EARNINGS,
    description: 'See how much you earned in your daily tip boat',
    icon: 'md-wallet'
  }
];

const keyExtractor = (i: IData) => i.text;

export const Drawer = React.memo(() => (
  <View style={{ backgroundColor: '#FFF' }} useSafeArea flex>
    <ScrollView>
      <View
        style={{ backgroundColor: Colors.blue10, justifyContent: 'center' }}
        height={180}
        flex
        centerH
        column
      >
        <Avatar
          imageSource={{
            uri:
              'https://raw.githubusercontent.com/wix/react-native-navigation/master/.logo.png'
          }}
          containerStyle={{ marginHorizontal: 18 }}
          backgroundColor={Colors.white}
        />
        <Text text50 red20 marginT-30 style={{ backgroundColor: Colors.dark20 }}>
          x0s3.prog@gmail.com
        </Text>
      </View>
      <FlatList<IData>
        renderItem={DrawerList}
        data={data}
        keyExtractor={keyExtractor}
      />
      <Text text30 blue30 marginT-10 marginL-20>
        Delivery mode
      </Text>
      <CustomSwitch />
    </ScrollView>
  </View>
));

const DrawerList = ({ item }: any) => (
  <ListItem
    activeBackgroundColor={Colors.dark60}
    activeOpacity={0.3}
    height={77.5}
    onPress={() => Alert.alert(`${item.text}`)}
  >
    <ListItem.Part
      middle
      column
      containerStyle={{
        paddingRight: 17,
        paddingLeft: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: ThemeManager.dividerColor
      }}
    >
      <ListItem.Part
        containerStyle={{ marginBottom: 3, justifyContent: 'flex-start' }}
      >
        <Ionicon
          color={Colors.blue40}
          style={{ marginRight: 10 }}
          name={item.icon}
        />
        <Text dark10 text70 style={{ marginTop: 2 }}>
          {`${item.text}`}
        </Text>
      </ListItem.Part>
      <ListItem.Part>
        <Text
          style={{ flex: 1, marginRight: 10 }}
          text90
          dark40
          numberOfLines={1}
        >{`${item.description}`}</Text>
      </ListItem.Part>
    </ListItem.Part>
  </ListItem>
);
