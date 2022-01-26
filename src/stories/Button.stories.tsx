import { Button, ButtonProps } from '../components/Button';

import React from 'react';
import { Text } from 'react-native';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed' },
  },
};

export const basic = (args: ButtonProps) => (
  <Button {...args}>
    <Text>{'Hello Button'}</Text>
  </Button>
);

export const withText = () => (
  <Button onPress={action('clicked-text')}>
    <Text>{'Hello Button'}</Text>
  </Button>
);

export const withEmoji = () => (
  <Button onPress={action('clicked-text')}>
    <Text>😀 😎 👍 💯</Text>
  </Button>
);
