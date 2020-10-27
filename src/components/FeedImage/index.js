import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import { Small, Original } from './styles';

const AnimatedOriginal = Animated.createAnimatedComponent(Original);

const FeedImage = ({
  smallSource,
  source,
  shouldLoader = false,
  aspectRatio = 1,
}) => {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoader) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
  }, [shouldLoader]);

  function handleAnimated() {
    Animated.timing(opacity, {
      duration: 500,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }
  return (
    <Small
      source={smallSource}
      aspect={aspectRatio}
      resizeMode="contain"
      blurRadius={0}
    >
      {loaded && (
        <AnimatedOriginal
          style={{ opacity }}
          onLoadEnd={handleAnimated}
          source={source}
          aspect={aspectRatio}
          resizeMode="contain"
        />
      )}
    </Small>
  );
};

export default FeedImage;

FeedImage.propTypes = {
  smallSource: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  shouldLoader: PropTypes.bool,
  aspectRatio: PropTypes.number,
};

FeedImage.defaultProps = {
  shouldLoader: false,
  aspectRatio: 1,
};
