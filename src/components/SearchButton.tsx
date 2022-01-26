import { GestureResponderEvent } from 'react-native';
import React from 'react';
import { VscSearch } from 'react-icons/vsc';

export type ButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

export const SearchButton = ({ onPress = undefined }: ButtonProps) => <VscSearch></VscSearch>;
