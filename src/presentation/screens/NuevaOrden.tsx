import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useMenu } from '../hooks/useMenu';
import { CustomView } from '../components/ui/CustomView';
import { Button } from '../components/ui/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { RootStackParams } from '../navigator/StackNavigator';



export const NuevaOrden = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // render
  const { isLoading, menu } = useMenu();


  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <CustomView margin>
      <View style={styles.contenido}>
        <Button
          text="Escanear Codigo QR"
          onPress={() => navigation.navigate('Menu')}
        />
      </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
