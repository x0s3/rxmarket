import { useMutation, useQuery, useSubscription } from '@apollo/react-hooks';
import { AUTH_USER } from 'core/src/graphql/mutations';
import { GET_CHARACTERS } from 'core/src/graphql/querys';
import { SUBSCRIBE_TO_DELIVERIES } from 'core/src/graphql/subscriptions';
import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Colors, Constants, Text, View } from 'react-native-ui-lib';
import { useNavigationDrawer } from '../hooks/use-navigation';

const GUTTER_SIZE = 24;
const NUMBER_OF_COLUMNS = 2;

type THome = React.FC & { componentId: string };

export const Home = React.memo<THome>(({ ...props }) => {
  const { data: deliveries } = useSubscription(SUBSCRIBE_TO_DELIVERIES);
  const { data, loading } = useQuery(GET_CHARACTERS);
  const [login, { data: authData }] = useMutation(AUTH_USER, {
    // onCompleted: (d: any) =>
    //   useApolloClient().writeData({
    //     data: {
    //       token: d.login.acces_token
    //     }
    //   }),
    variables: {
      email: 'x0s3.prog@gmail.com',
      password: 'xose'
    }
  });

  useNavigationDrawer(props.componentId);

  React.useEffect(() => {
    console.warn(deliveries);
  }, [deliveries]);

  return (
    <View useSafeArea flex>
      <ScrollView>
        <View paddingL-24>
          <View row spread bottom paddingR-24 style={styles.separator}>
            <Text text20>{'Rick & Morty'}</Text>
            <Text onPress={login} text70 red20 marginB-10>
              Edit
            </Text>
          </View>
        </View>
        <View paddingL-24>
          <FlatList
            data={['Rick', 'Morty']}
            keyExtractor={item => item}
            renderItem={ListItem}
          />
        </View>
        <View paddingH-24 marginT-30>
          <Text text40>Characters</Text>
          <View marginT-20>
            {loading && <Text>Loading data :)</Text>}
            {!loading && (
              <FlatList<any>
                horizontal={false}
                numColumns={NUMBER_OF_COLUMNS}
                keyExtractor={item => item.name}
                data={data.characters.results}
                renderItem={GridListItem}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
});

const ListItem = ({ item }: any) => {
  return (
    <TouchableOpacity onPress={() => Alert.alert(item)}>
      <View height={60} centerV style={[styles.separator]}>
        <Text text60 red20>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const GridListItem = ({ item, index }: any) => {
  const itemSize =
    (Constants.screenWidth - GUTTER_SIZE * (NUMBER_OF_COLUMNS + 1)) /
    NUMBER_OF_COLUMNS;

  return (
    <View flex marginL-24={index % NUMBER_OF_COLUMNS !== 0} marginB-24>
      <View height={itemSize} bg-dark80>
        <Image style={{ flex: 1 }} source={{ uri: item.image }} />
      </View>
      <View paddingT-2>
        <Text text70 dark20 numberOfLines={1}>
          {item.name}
        </Text>
        <Text text80 dark40>
          {item.type}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark60
  }
});
