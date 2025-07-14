import { createStackNavigator } from '@react-navigation/stack';

import { Menu } from '../screens/Menu';
import { DetallePlatillo } from '../screens/DetallePlatillo';
import { NuevaOrden } from '../screens/NuevaOrden';
import { FormularioPlatillo } from '../screens/FormularioPlatillo';

import { ProgresoPedido } from '../screens/ProgresoPedido';
import ResumenPedido from '../screens/ResumenPedido';

export type RootStackParams = {
  Menu: undefined;
  NuevaOrden: undefined;
  DetallePlatillo: { id: string };
  FormularioPlatillo: { id?: string };
  ResumenPedido: undefined;
  ProgresoPedido: undefined;
};


export const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#038554' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="NuevaOrden"
        component={NuevaOrden}
        options={{ title: 'Nueva Orden' }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ title: 'Nuestro Menú' }}
      />
      <Stack.Screen
        name="DetallePlatillo"
        component={DetallePlatillo}
        options={{ title: 'Detalle Platillo' }}
      />
      <Stack.Screen
        name="FormularioPlatillo"
        component={FormularioPlatillo}
        options={{ title: 'Formulario platillo' }}
      />
      <Stack.Screen
        name="ResumenPedido"
        component={ResumenPedido}
        options={{ title: 'Resumen Pedido' }}
      />
      <Stack.Screen
        name="ProgresoPedido"
        component={ProgresoPedido}
        options={{ title: 'Progreso Pedido' }}
      />
    </Stack.Navigator>
  );
};
