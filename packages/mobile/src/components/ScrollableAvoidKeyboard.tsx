import React from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps
} from 'react-native-keyboard-aware-scroll-view';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles
} from 'react-native-ui-kitten';

export type ScrollableAvoidKeyboardProps = ThemedComponentProps &
  KeyboardAwareScrollViewProps;

const ScrollableAvoidKeyboardComponent = React.memo<
  ScrollableAvoidKeyboardProps
>(({ themedStyle, style, contentContainerStyle, ...props }) => {
  return (
    <KeyboardAwareScrollView
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      style={[themedStyle.container, style]}
      contentContainerStyle={[
        themedStyle.contentContainer,
        contentContainerStyle
      ]}
      enableOnAndroid={true}
      {...props}
    />
  );
});

export const ScrollableAvoidKeyboard = withStyles(
  ScrollableAvoidKeyboardComponent,
  (theme: ThemeType) => ({
    container: {
      flex: 1
    },
    contentContainer: {
      flexGrow: 1
    }
  })
);
