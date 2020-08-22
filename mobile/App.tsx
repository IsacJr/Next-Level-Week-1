import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
};

const styles = StyleSheet.create({
  fontiis: {
    fontFamily: 'Arial',
    fontSize: 44
  },
});

export default App;
