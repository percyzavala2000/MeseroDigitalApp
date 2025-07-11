import { createStackNavigator } from '@react-navigation/stack';

import { Menu } from '../screens/Menu';
import { DetallePlatillo } from '../screens/DetallePlatillo';
import { NuevaOrden } from '../screens/NuevaOrden';
import { FormularioPlatillo } from '../screens/FormularioPlatillo';
import { ResumenPedido } from '../screens/ResumenPedido';
import { ProgresoPedido } from '../screens/ProgresoPedido';

export type RootStackParams = {
  Menu: undefined;
  NuevaOrden: undefined;
  DetallePlatillo: { id: string };
  FormularioPlatillo: { id?: string };
  ResumenPedido: undefined;
  ProgresoPedido: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#FFDA00' },
        headerTintColor: '#000',
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
