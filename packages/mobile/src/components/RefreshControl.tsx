import React from 'react';
import { RefreshControl, RefreshControlProperties } from 'react-native';

export const CustomRefresh = React.memo<RefreshControlProperties>(
  ({ onRefresh, refreshing, ...props }) => (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} {...props} />
  )
);
