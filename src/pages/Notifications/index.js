import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Post,
  Header,
  Avatar,
  Name,
  Description,
  Loading,
} from './styles';

import FeedImage from '../../components/FeedImage';

const Notifications = () => {
  return (
    <View>
      <Text>Notificações</Text>
    </View>
  );
};

export default Notifications;
