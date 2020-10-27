import React from 'react';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Logo from '../../assets/logo.png';

import { Container, LeftView } from './styles';

const Header = () => {
  return (
    <Container>
      <LeftView>
        <Feather name="camera" size={25} style={{ paddingRight: 16 }} />
        <Image source={Logo} />
      </LeftView>
      <Feather name="send" size={25} />
    </Container>
  );
};

export default Header;
