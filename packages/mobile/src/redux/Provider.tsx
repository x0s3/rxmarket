import React from 'react';
import { Provider, ProviderProps } from 'react-redux';
import { RootStyleWrapper } from '../components';

const CustomProvider: React.FC<ProviderProps> = ({ store, children }) => (
  <Provider store={store}>
    <RootStyleWrapper>{children}</RootStyleWrapper>
  </Provider>
);

export default CustomProvider;
