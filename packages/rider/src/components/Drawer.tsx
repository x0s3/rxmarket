import React from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native-ui-lib';

export const Drawer = React.memo(() => (
  <View style={{ backgroundColor: '#FFF' }} useSafeArea flex centerH>
    <ScrollView>
      <Text>Drawer tete</Text>
    </ScrollView>
  </View>
));
