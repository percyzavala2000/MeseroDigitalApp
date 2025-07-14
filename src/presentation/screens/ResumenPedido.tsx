import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import {
  Text,
  Button,
  Card,
  Avatar,
  Title,
  useTheme,
} from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { PedidosContext } from '../context/pedidoscontext/PedidosContext';
import { meseroDBFetcher } from '../../config/api/meseroDB.adapter';
import { PedidoCreadoResponse } from '../../infrastructure/interfaces/menu-db.response';

interface Props extends StackScreenProps<RootStackParams, 'ResumenPedido'> {}

 const ResumenPedido = ({ navigation }: Props) => {
  const { colors } = useTheme();

  const { pedido, total, mostrarResumen, eliminarProducto, pedidoRealizado } =
    useContext(PedidosContext);

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    const nuevoTotal = pedido.reduce(
      (acc: number, item: any) => acc + item.precio * item.cantidad,
      0,
    );
    mostrarResumen(nuevoTotal);
  };

  const progresoPedido = () => {
    Alert.alert(
      'Revisa tu pedido',
      'Una vez que realizas tu pedido, no podrás cambiarlo',
      [
        {
          text: 'Confirmar',
          onPress: async () => {
            try {
              const pedidoDTO = {
                idCliente: 1, // o el ID real
                estado: 'PENDIENTE',
                detalles: pedido.map(item => ({
                  idProducto: item.id,
                  cantidad: item.cantidad,
                  precioUnitario: item.precioUnitario,
                })),
              };

              const response = await meseroDBFetcher.post<PedidoCreadoResponse>(
                '/pedidos',
                pedidoDTO,
              );
              pedidoRealizado(response.id);
              navigation.navigate('ProgresoPedido');
            } catch (error) {
              console.error('Error al enviar el pedido:', error);
              Alert.alert('Error', 'No se pudo enviar el pedido.');
            }
          },
        },
        { text: 'Revisar', style: 'cancel' },
      ],
    );
  };

  const confirmarEliminacion = (id: number) => {
    Alert.alert(
      '¿Deseas eliminar este menú?',
      'Una vez eliminado no se puede recuperar',
      [
        {
          text: 'Confirmar',
          onPress: () => eliminarProducto(id.toString()),
        },
        { text: 'Cancelar', style: 'cancel' },
      ],
    );
  };

  const renderItem = ({ item }: any) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.nombre}
        subtitle={`Cantidad: ${item.cantidad}`}
        left={props =>
          item.imagen ? (
            <Avatar.Image {...props} source={{ uri: `http://192.168.18.9:8080/uploads/${item.imagen}` }} size={56} />
          ) : (
            <Avatar.Icon {...props} icon="image-off" size={56} />
          )
        }
      />
      <Card.Content>
        <Text>Precio unitario: S/ {item.precio.toFixed(2)}</Text>
        <Text>Total: S/ {(item.precio * item.cantidad).toFixed(2)}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => confirmarEliminacion(item.id)}
          mode="outlined"
          textColor="red"
        >
          Eliminar
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Resumen del Pedido</Title>

      <FlatList
        data={pedido}
        keyExtractor={(item, index) => {
    console.log('Item:', item);
    return item.id ? item.id.toString() : index.toString();
  }}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Text style={styles.total}>Total a Pagar: S/ {total.toFixed(2)}</Text>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Menu')}
        style={styles.button}
        contentStyle={{ paddingVertical: 8 }}
      >
        Seguir Pidiendo
      </Button>

      <Button
        mode="contained"
        onPress={progresoPedido}
        style={[styles.button, { backgroundColor: colors.primary }]}
        contentStyle={{ paddingVertical: 10 }}
      >
        Ordenar Pedido
      </Button>
    </View>
  );
};

export default ResumenPedido;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
    textAlign: 'center',
  },
  total: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 12,
  },
  button: {
    marginTop: 8,
  },
});
