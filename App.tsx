import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { StackNavigator } from './src/presentation/navigator/StackNavigator';
import { SpringProvider } from './src/presentation/context/springcontext/SpringProvider';
import { PedidosProvider } from './src/presentation/context/pedidoscontext/PedidoProvider';
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';


export const App = () => {
  // render
  return (
    <SpringProvider>
      <PedidosProvider>
        <PaperProvider settings={{icon:(props)=><IonIcon {...props}/>}} >
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PedidosProvider>
    </SpringProvider>
  );
};
