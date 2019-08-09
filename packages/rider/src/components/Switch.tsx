import React, { useState } from 'react';
import { Colors, Switch } from 'react-native-ui-lib';

interface ISwitch {
  readonly onColor?: string;
  readonly offColor?: string;
}

export const CustomSwitch = React.memo<ISwitch>(
  ({ onColor = Colors.green20, offColor = Colors.red20 }) => {
    const [enabled, setEnabled] = useState<boolean>(false);

    return (
      <Switch
        value={enabled}
        onValueChange={() => setEnabled(e => !e)}
        onColor={onColor}
        offColor={offColor}
        marginL-20
        marginT-20
      />
    );
  }
);
