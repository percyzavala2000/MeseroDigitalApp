import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { Text, Button, TextInput, IconButton, useTheme } from 'react-native-paper';
import { PedidosContext } from '../context/pedidoscontext/PedidosContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams,'FormularioPlatillo'> {}
export const FormularioPlatillo = ({navigation}:Props) => {
  const { platillo, guardarPedido } = useContext(PedidosContext);

  const { colors } = useTheme();

  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calcularTotal();
  }, [cantidad]);

  const calcularTotal = () => {
    if (platillo?.precio) {
      const totalPagar = platillo.precio * cantidad;
      setTotal(totalPagar);
    }
  };

  const decrementarUno = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const incrementarUno = () => {
    setCantidad(cantidad + 1);
  };

  const confirmarOrden = () => {
    Alert.alert(
      '¿Deseas confirmar tu pedido?',
      'Un pedido confirmado ya no se podrá modificar',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            const pedido = {
              ...platillo,
              cantidad,
              total,
            };
            console.log('Pedido confirmado:', pedido);
            guardarPedido(pedido);
            navigation.navigate('ResumenPedido');
          },
        },
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };

  if (!platillo) return null;

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text variant="titleLarge" style={styles.titulo}>
        Cantidad
      </Text>

      <View style={styles.controlsRow}>
        <IconButton
          icon="remove"
          size={36}
          onPress={decrementarUno}
          style={styles.iconButton}
          
        />

        <TextInput
          value={cantidad.toString()}
          mode="outlined"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(value) => {
            const num = parseInt(value) || 1;
            setCantidad(num);
          }}
        />

        <IconButton
          icon="add"
          size={36}
          onPress={incrementarUno}
          style={styles.iconButton}
        />
      </View>

      <Text style={styles.subtotal}>Subtotal: S/ {total.toFixed(2)}</Text>

      <Button
        mode="contained"
        onPress={confirmarOrden}
        style={styles.button}
        contentStyle={{ paddingVertical: 10 }}
      >
        Agregar al Pedido
      </Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 24,
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  input: {
    width: 80,
    marginHorizontal: 8,
    textAlign: 'center',
  },
  iconButton: {
    backgroundColor: '#eee',
  },
  subtotal: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    alignSelf: 'center',
    width: '100%',
  },
});

export default FormularioPlatillo;
