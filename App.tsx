import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from './src/presentation/navigator/StackNavigator';

export const App = () => {
// render
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

