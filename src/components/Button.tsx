import { GestureResponderEvent, TouchableHighlight } from 'react-native';
import React, { FC } from 'react';

export type ButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

export const Button: FC<ButtonProps> = ({ onPress = undefined, children = undefined }) => (
  <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
);
