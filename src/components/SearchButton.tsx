import React, { useState } from 'react';

import { GestureResponderEvent } from 'react-native';
import { ToggleButton } from '@mui/material';
import { VscSearch } from 'react-icons/vsc';

export type ButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

export const SearchButton = ({ onPress = undefined }: ButtonProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <VscSearch></VscSearch>
    </ToggleButton>
  );
};
