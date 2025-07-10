import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { StackNavigator } from './src/presentation/navigator/StackNavigator';
import { SpringProvider } from './src/presentation/context/springcontext/SpringProvider';
import { PedidosProvider } from './src/presentation/context/pedidoscontext/PedidoProvider';

export const App = () => {
  // render
  return (
    <SpringProvider>
      <PedidosProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PedidosProvider>
    </SpringProvider>
  );
};
