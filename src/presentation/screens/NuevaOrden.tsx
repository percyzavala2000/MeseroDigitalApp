import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { menuGetUseCase } from '../../domain/use-cases/menu/get-menu.use-case';
import { meseroDBFetcher } from '../../config/api/meseroDB.adapter';
import { Menu } from '../../domain/entities/Menu';
import { useMenu } from '../hooks/useMenu';

export const NuevaOrden = () => {
 
   
 

  
// render
 const { isLoading, menu } = useMenu();

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.nombre}</Text>
            <Text>{item.descripcion}</Text>
            <Text>S/. {item.precio}</Text>
          </View>
        )}
      />
    </View>
  );
};
