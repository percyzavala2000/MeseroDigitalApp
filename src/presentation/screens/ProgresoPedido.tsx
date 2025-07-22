import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, Title, useTheme } from 'react-native-paper';
import Countdown from 'react-countdown';
import { PedidosContext } from '../context/pedidoscontext/PedidosContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'ProgresoPedido'> {}

export const ProgresoPedido = ({ navigation }: Props) => {
  const { idPedido } = useContext(PedidosContext);
  const { colors } = useTheme();
  const [estadoPedido, setEstadoPedido] = useState('');
  const [fechaFin, setFechaFin] = useState<number | null>(null); // 👈 nuevo estado

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const obtenerPedido = async () => {
      try {
        const response = await fetch(`http://192.168.18.9:8080/api/pedidos/${idPedido}`);
        if (!response.ok) throw new Error(`Error al obtener el pedido ${idPedido}`);

        const data = await response.json();
        console.log('Pedido recibido:', data);

        setEstadoPedido(data.estado ?? '');

        if (data.estado === 'PREPARANDO' && data.tiempoEntrega > 0 && !fechaFin) {
          // Calcula solo una vez el final de la cuenta regresiva
          const nuevoFin = Date.now() + data.tiempoEntrega * 60000;
          setFechaFin(nuevoFin);
        }

        if (data.estado === 'LISTO' && interval) {
          clearInterval(interval);
        }
      } catch (error) {
        console.error('Error al obtener el pedido:', error);
      }
    };

    if (idPedido) {
      obtenerPedido();
      interval = setInterval(obtenerPedido, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [idPedido, fechaFin]);

  // Renderizador de cuenta regresiva
  const renderer = ({ minutes, seconds }: any) => (
    <Text style={styles.tiempo}>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>
  );

  return (
    <View style={styles.container}  >
      <Card style={{ padding: 20 }} > 
        {estadoPedido === 'PENDIENTE' && (
          <>
            <Title style={styles.textCenter}>Hemos recibido tu orden</Title>
            <Text style={styles.textCenter}>Esperando que el cocinero asigne el tiempo estimado...</Text>
          </>
        )}

        {estadoPedido === 'PREPARANDO' && fechaFin && (
          <>
            <Text style={styles.textCenter}>Tu orden estará lista en:</Text>
            <Countdown date={fechaFin} renderer={renderer} key={idPedido} />
          </>
        )}

        {estadoPedido === 'LISTO' && (
          <>
            <Title style={styles.completado}>Orden Lista</Title>
            <Text style={styles.completado}>Por favor, pase a recoger su pedido</Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('NuevaOrden')}
              style={[styles.boton, { backgroundColor: colors.primary }]}
            >
              Comenzar una nueva orden
            </Button>
          </>
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  textCenter: {
    textAlign: 'center',
    marginBottom: 10,
  },
  completado: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    marginBottom: 20,
  },
  tiempo: {
    fontSize: 48,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  boton: {
    marginTop: 30,
    borderRadius: 8,
    padding: 8,
  },
});
