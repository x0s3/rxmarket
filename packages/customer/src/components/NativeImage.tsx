import React from 'react';
import FastImage, {
  FastImageProperties,
  FastImageSource
} from 'react-native-fast-image';

interface INativeImage extends FastImageProperties {
  source: FastImageSource;
}

export const NativeImage = React.memo<INativeImage>(
  ({ style = { width: 200, height: 200 }, source }) => (
    <FastImage
      style={style}
      source={{ uri: source.uri, priority: FastImage.priority.normal }}
      resizeMode={FastImage.resizeMode.cover}
    />
  )
);
