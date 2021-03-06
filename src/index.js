import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

LogBox.ignoreLogs([
  'Failed prop type: Invalid prop',
  'source',
  'VirtualizedList should never be',
]);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F0F0" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
