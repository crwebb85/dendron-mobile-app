import { ButtonProps, SearchButton } from '../components/SearchButton';

import React from 'react';

export default {
  title: 'components/SearchButton',
  component: SearchButton,
  argTypes: {
    onPress: { action: 'pressed' },
  },
};

export const basic = (args: ButtonProps) => <SearchButton {...args}></SearchButton>;
