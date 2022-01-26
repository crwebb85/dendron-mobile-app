import React, { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export const centerViewStyle: StyleProp<ViewStyle> = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

export const CenterView = ({ children }: PropsWithChildren<void>) => <View style={centerViewStyle}>{children}</View>;
