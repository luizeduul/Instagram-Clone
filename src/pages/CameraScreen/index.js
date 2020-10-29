import React, { useState } from 'react';
import Camera from '../../components/Camera';

import { Container } from './styles';

const CameraScreen = () => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);

  const onChangePhoto = (newPhoto) => {
    setPhoto(newPhoto);
    setIsCameraVisible(false);
  };

  const onCloseCamera = () => {
    setIsCameraVisible(false);
  };
  return (
    <Container>
      <Camera
        isVisible={isCameraVisible}
        onChangePhoto={onChangePhoto}
        onCloseCamera={onCloseCamera}
      />
    </Container>
  );
};

export default CameraScreen;
