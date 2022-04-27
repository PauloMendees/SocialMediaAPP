import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from './StackNavigation'
import { NavigationContainer } from '@react-navigation/native';

export default function App(){
    return(
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    )
}