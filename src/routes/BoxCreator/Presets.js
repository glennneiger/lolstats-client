import React from 'react';

import { List, ListItem } from '../../components/List';

import defaultPreset from'./presets/default.json';

const PRESETS = [
  { name: 'Default', styleData: defaultPreset },
];

export default function Editor(props) {
  const { setAllStyle } = props;

  return (
    <List>
      {PRESETS.map((preset) => (
        <ListItem
          key={preset.name}
          onClick={() => setAllStyle(preset.styleData)}>
          {preset.name}
        </ListItem>
      ))}
    </List>
  )
}