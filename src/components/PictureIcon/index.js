import React from 'react';

import img from '../../assets/imgProfile.jpg';

import { Container, Icon } from './styles';

const PictureIcon = () => {
  return (
    <Container>
      <Icon source={img} />
    </Container>
  );
};

export default PictureIcon;
