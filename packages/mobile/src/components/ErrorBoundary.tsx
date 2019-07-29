import React, { Component } from 'react';
import { Text } from 'react-native';

export default class ErrorBoundary extends Component<
  React.ReactNode,
  { hasError: boolean }
> {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Text>Ups seems like something went wrong... :(</Text>;
    }

    return this.props.children;
  }
}
