import { Platform, StatusBar, View } from 'react-native';

import React from 'react';
import StorybookUIRoot from './.ondevice/Storybook';

export default () => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      flex: 1,
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }}
  >
    <StorybookUIRoot />
  </View>
);
