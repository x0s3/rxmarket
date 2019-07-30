import React from 'react';
import { ThemeType, withStyles } from 'react-native-ui-kitten';
import {
  ContainerView,
  PaymentCard,
  ScrollableAvoidKeyboard,
  ViewProps
} from '../../components';

const ProfileView = React.memo<ViewProps>(({ themedStyle, ...props }) => {
  return (
    <ScrollableAvoidKeyboard style={themedStyle.container}>
      <ContainerView contentContainerStyle={themedStyle.contentContainer}>
        <PaymentCard
          style={themedStyle.paymentCard}
          paymentCard={{
            number: '1234 1234 1234 1234',
            type: 'VISA',
            expireDate: '96/96',
            cardHolder: 'x0s3.prog@gmail.com'
          }}
        />
      </ContainerView>
    </ScrollableAvoidKeyboard>
  );
});

export const ProfileScreen = withStyles(ProfileView, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2']
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 16
  },
  paymentCard: {
    marginBottom: 16
  }
}));
