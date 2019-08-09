import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IIonicon {
  readonly name: string;
  readonly size?: number;
  readonly color?: string;
  readonly style?: any;
}

export const Ionicon: React.FC<IIonicon> = ({
  name,
  color,
  size = 32,
  style = {}
}) => <Ionicons style={style} color={color} name={name} size={size} />;
