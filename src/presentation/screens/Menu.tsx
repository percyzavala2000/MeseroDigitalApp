import React, { useContext } from 'react';
import { View, Image, SectionList, StyleSheet } from 'react-native';
import { Text, Card, Divider } from 'react-native-paper';
import { SpringContext } from '../context/springcontext/SpringContext';
import { PedidosContext } from '../context/pedidoscontext/PedidosContext';
import { RootStackParams } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams, 'Menu'> {}

export const Menu = ({ navigation }: Props) => {
  const { menu } = useContext(SpringContext);
  const { seleccionarPlatillo } = useContext(PedidosContext);

  // Agrupar por categoría
  const menuFiltrado = menu.filter((item: any) => item.estado === 'DISPONIBLE');

  const menuPorCategoria = menuFiltrado.reduce((acc: any, item: any) => {
    const categoriaNombre = item.categoria?.nombre ?? 'Sin categoría';

    const existe = acc.find((sec: any) => sec.title === categoriaNombre);
    if (existe) {
      existe.data.push(item);
    } else {
      acc.push({
        title: categoriaNombre,
        data: [item],
      });
    }
    return acc;
  }, []);

  return (
    <SectionList
      sections={menuPorCategoria}
      keyExtractor={(item, index) =>
        item.id ? item.id.toString() : `item-${index}`
      }
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.separator}>
          <Text style={styles.separatorTexto}>{title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <Card
          style={styles.card}
          onPress={() => {
            seleccionarPlatillo(item);
            navigation.navigate('DetallePlatillo', { id: item.id });
          }}
        >
          <View style={styles.cardContent}>
            <Image
              source={{
                uri: `http://192.168.18.9:8080/uploads/${item.imagen}`,
              }}
              style={styles.image}
            />
            <View style={styles.textContent}>
              <Text variant="titleMedium">{item.nombre}</Text>
              <Text variant="bodyMedium" numberOfLines={2}>
                {item.descripcion}
              </Text>
              <Text style={styles.price}>S/. {item.precio.toFixed(2)}</Text>
            </View>
          </View>
        </Card>
      )}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#000',
    padding: 8,
  },
  separatorTexto: {
    fontWeight: 'bold',
    color: '#ffda00',
    textTransform: 'uppercase',
  },
  card: {
    marginHorizontal: 12,
    marginVertical: 6,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 12,
  },
  textContent: {
    flex: 1,
    justifyContent: 'center',
  },
  price: {
    marginTop: 4,
    fontWeight: 'bold',
    color: '#00796B',
  },
});
