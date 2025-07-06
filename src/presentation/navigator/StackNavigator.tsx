import { createStackNavigator } from '@react-navigation/stack';

import { Menu } from '../screens/Menu';
import { DetallePlatillo } from '../screens/DetallePlatillo';


export type RootStackParams={
  Home: undefined;
  Profile: undefined;
}

const Stack = createStackNavigator();

 export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Detalle" component={DetallePlatillo} />
    </Stack.Navigator>
  );
}