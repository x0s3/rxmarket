import React from 'react';
import { RefreshControl, RefreshControlProps } from 'react-native';

export const CustomRefresh = React.memo<RefreshControlProps>(
  ({ onRefresh, refreshing, ...props }) => (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} {...props} />
  )
);
