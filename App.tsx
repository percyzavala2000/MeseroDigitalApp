import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from './src/presentation/navigator/StackNavigator';
import { SpringProvider } from './src/presentation/context/springcontext/SpringProvider';

export const App = () => {
  // render
  return (
    <SpringProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SpringProvider>
  );
};
