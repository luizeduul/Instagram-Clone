/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Feather, FontAwesome} from '@expo/vector-icons';
import Feed from './pages/Feed';
import Header from './components/Header';
import Explore from './pages/Explore';
import Camera from './pages/Camera';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
  Feed: {
    lib: FontAwesome,
    name: 'home',
  },
  Explore: {
    lib: FontAwesome,
    name: 'search',
  },
  Camera: {
    lib: Feather,
    name: 'plus-square',
  },
  Notifications: {
    lib: Feather,
    name: 'heart',
  },
  Profile: {
    lib: Feather,
    name: 'circle',
  },
};

const Routes = () => {
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const {lib: Icon, name}  = icons[route.name];
          return <Icon name={name} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#FFF',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#262626',
        inactiveTintColor: '#191919',
        showLabel: false
      }}
    >
      <Screen
        name="Feed"
        component={Feed}
        options={{
          title: "Feed"
        }}
      />
      <Screen
        name="Explore"
        component={Explore}
        options={{
          title: "Explorar"
        }}
      />
      <Screen
        name="Camera"
        component={Camera}
        options={{
          title: "Câmera"
        }}
      />
      <Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: "Notificações"
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Perfil"
        }}
      />
    </Navigator>
  );
};

export default Routes;
