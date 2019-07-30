import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

export const ContainerView: React.FC<ScrollViewProps> = React.memo<
  ScrollViewProps
>(({ ...props }) => (
  <ScrollView
    bounces={false}
    bouncesZoom={false}
    alwaysBounceHorizontal={false}
    alwaysBounceVertical={false}
    {...props}
  />
));
