import {
  dark as darkTheme,
  light as lightTheme,
  mapping
} from '@eva-design/eva';
import React from 'react';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { useReduxState } from '../hooks/use-redux';
import { getCurrentTheme } from '../redux/selectors';

export const RootStyleWrapper: React.ElementType = ({ children }) => {
  const isThemeDark = useReduxState(getCurrentTheme);

  return (
    <ApplicationProvider
      mapping={mapping}
      theme={isThemeDark === 'dark' ? darkTheme : lightTheme}
    >
      <Layout style={{ flex: 1 }}>{children}</Layout>
    </ApplicationProvider>
  );
};
