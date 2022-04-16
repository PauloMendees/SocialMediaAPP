/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Style from './styles/app.style'
import Auth from './screens/Auth/Auth'

const App: () => Node = () => {
  return (
    <SafeAreaView style={Style.container}>
      <Auth />
    </SafeAreaView>
  );
};

export default App;
