import React, { useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { PedidosContext } from '../context/pedidoscontext/PedidosContext';
import { RootStackParams } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { BASE_URL } from '../../config/api/meseroDB.adapter';
 // Asegúrate que el nombre del contexto sea correcto
interface Props extends StackScreenProps<RootStackParams,'DetallePlatillo'> {}

export const DetallePlatillo = ({navigation}:Props) => {
  const { colors } = useTheme();
  const { platillo } = useContext(PedidosContext);

  if (!platillo) return null;

  const { nombre, imagen, descripcion, precio } = platillo;

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        {nombre}
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <Image source={{ uri: `${BASE_URL}/uploads/${imagen}` }} style={styles.image} />
          <Text style={styles.description}>{descripcion}</Text>
          <Text style={styles.price}>Precio: S/ {precio.toFixed(2)}</Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('FormularioPlatillo', { id: platillo.id.toString() })}
        style={styles.button}
        contentStyle={{ paddingVertical: 8 }}
      >
        Ordenar Platillo
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginVertical: 16,
  },
  title: {
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 8,
    marginBottom: 16,
  },
  description: {
    marginBottom: 8,
  },
  price: {
    fontWeight: 'bold',
    color: '#388e3c',
  },
  button: {
    marginTop: 'auto',
  },
});

export default DetallePlatillo;
