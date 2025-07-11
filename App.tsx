import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { StackNavigator } from './src/presentation/navigator/StackNavigator';
import { SpringProvider } from './src/presentation/context/springcontext/SpringProvider';
import { PedidosProvider } from './src/presentation/context/pedidoscontext/PedidoProvider';
import { PaperProvider } from 'react-native-paper';

export const App = () => {
  // render
  return (
    <SpringProvider>
      <PedidosProvider>
        <PaperProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PedidosProvider>
    </SpringProvider>
  );
};
